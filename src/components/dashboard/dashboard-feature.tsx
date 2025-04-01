/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "rgUjBuP7puMYC9dNozZfHf3KkDsCX3WHKShQPTchN9UacmGxR2MztMDW2bviM4882T2MPEHTPn8CvVKop6FUeiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zraxPfjqK3Hg6XpNchvCaUaNSU2SrekLyFRDkk8QPhTEB7o5YwoSAoRiydG1XxvUEmFnNdfYcP1dB8KsxY5yCUr",
  "key1": "35c75mwfvSqjo38U9JKWXmQf4yxcZnkkTeqdRtwmNKc1G7M3kiRPn6vhfaaEP8SX4CkY2NhjKfnXyiphBN5j3jzC",
  "key2": "2WtM2wKXm8FuQXNzHQrrJNqw3kmmBseM9LWf64rCUmYi2mFArnp5GVeAF7MbPHNiPhtZZBB9HVvAM6H9DqpRKdth",
  "key3": "26VTX3pezUfEYxWMD8LPRXUBtPqLH8rFP78YLXfSE2KqjcZ4ZprYe3oTPDCEJnTWPnaRiMsLM4DWEHnpXipMY92c",
  "key4": "5FqNw5FFcu9LNwJ8EH4PwnzY5LDDQoMeKnozAcV1SpmfkV9zTf2tFzVHQS9Xpn4NxenGVqsHzUhciUvQeAmjWbPV",
  "key5": "3SynBGKhb5eobV4nPPgtKNYAFE4s6ggep2nMwEqtmG5xf5u7JG3x9yf8khTK3UPETy4hHyVNBUxdjcgyPr5BMnXL",
  "key6": "522hCsaVuMRYak4yXbKf1JssrDnDVbZvkmBTKEwN46a47AFLdz58s6LqDaS6Gyh3st6n7e44Wbcd3LFmTcnnfhzr",
  "key7": "312zGpsHqEvy7DZaZLn3pjU68ampGW8gYTUCxg7VyE146hPyinxWje5zFtSLf41RwjTCG5pS8eePzVu8LHgxtdTY",
  "key8": "3w2C6QdXK6PnwJ6SdgXU9DfWuzGNtVj84czLEP8c1GgvAMwV6pq3w8ETDnZFgdn1kd32AfRQAVyHhwxusW3fXpEj",
  "key9": "4eD8QribjtMDAdVxi4yzHuBvk2Ch7PJny9hjyTeZoLAHwKV3ZkeTRwBrbTzAEfCDTYntCQNDpUgh4yGbrLbfTbVK",
  "key10": "4FYoEbwy5qQEtS6oDw7P968ihjBW4Z1AECQuUAvXfnQRsJtrUzaqMh1ELgab8knVD6nRePSfUnokSV6pAsKnJKHE",
  "key11": "2x6FrAygDyEoMxHCYe7kuS2E6zTZTA5GVU77uDRDdL7p2BxUAKSukK2ra5KwJC2MMGbRierEXzdynYPkH2eYA2uo",
  "key12": "5xQMrYk27P2TqG19cMAxvmcro7BvJz716AYpcbn74thS8bBPSF3UqHAi4n5GQiRcBUWxAMCWjCDeCMTDqV1fxu13",
  "key13": "8ttTd9nZEGsM3LgLfEwsdr23XYSKUYMdB1A5CSf4RdMmGXcE6zfAFFJEkb5pfuoiuoExdsZjB2Y1VXnuZaz2rHp",
  "key14": "358QvfuxDQLETWJKKD9wQQPeLfNSky7ybnJ7MgXMWFDr3prRvuJnoMbViQLaBhHDKdi9xSM7oRP1Y6wdUGBTYvvb",
  "key15": "4wuhysfFZ3LoBYvCGmLsgxdpDY57tCviqwxFA69uBPdF2ow3k8eb5UiG7gERG8guzFwYunBebqzRk51wPNuZAAV2",
  "key16": "2JMnNTCiEsapW9M64Ftgd6UBQvMDibu7Kr1eaqTWp8x8ZKLZiy9wnf64Qz8DvPz5P9CAAxvPeA788D83R3dJAsWB",
  "key17": "4qiydt1TiSLAQ14cSmPZpt86PZKGarmGczbHbfASG5eUw1814gfduEvxK2Z5shHmfyf5cP7cogMeo1b1qz5Zomh4",
  "key18": "2n2c15PyUfpWc5SPzgGczyEMcqYmapfQhNnYH62PHca1GqZhHDkfFEndyde6ERs9wCju3muxKxakUrBZ7BSzukfp",
  "key19": "4ZWoz34H6xa9CzhSQUvpJy7UGN3SzY3tt7a2dCeidE1fAg1Ugc8ffRyihqKrZNSXp1KZKLhwYpDs8TxoJYTnQzJp",
  "key20": "2kQ4epX5uRkh3aEuLMX7hSFhzvqa3Xx7SXvgKsEvPdU2rszjwEQ7VMFK27kojnZQ7yNmhyT77GGHwqUwUooxFbDs",
  "key21": "eY7qujdA2rjcShbowzbqwGqKxpzKJogpzKkPmn36FLT6CBCC9KBeu8DdRNoLZJVmURMXeU39hN6U8dQmo5oXSz4",
  "key22": "psz3ZKxRdBScUDX3K5ZNesuCxM3k5bGCQj5qbJG2U7EpRHN8F96urBzKjtADvPKw1Rv8FHEtP3PDRQsZMCxf8d7",
  "key23": "5hSU6JoNZ8F4A67RBE3vyfxj5e9QpsaTFe2Uq3iP6UnBvomKaKe25D3UA9dWXZDAeSuwMLbF3Y4fnVALkscuFuRy",
  "key24": "5UvnQgCcgYriyuC8T495NZ3oqnauBa1mKhidvufd6YXMzTBACwi9gdKVSJ2t2QGFYqGsiZiMpQtHNZZ6PC8e95Mg",
  "key25": "612Rmam2ukAZz9aXDhhm5BPEyKLfgZvWKiHLxnXi1wPLUwKwWamZCZ7mBugmKeTW5KtjHPoF8Y5PzidZQPyKPfHD",
  "key26": "39agArnJWEzES1xgVvo2i3asti57KL4FoosMYWez8uQ3gk7NsVpabPqivPqTVx16NphABMnw2uzWg8HmyVi6dtSF",
  "key27": "FHR6mH2x5QqpPd9rb2dJ5ArAMYYviwH1gwsbQnee96JNodVhapVZi2nw2Z2MmUBwG9tDsqrXp3h1SuF5uHQTLgG",
  "key28": "2f9d5NM8k214JvhDQYLKkF14SirJ975qc5zeF1Z2NhznRQZaLu6FECRig2ZoPoNLsCgY3iDM3dV1VAC2sM5V9S7k",
  "key29": "2qRBQisRrukVWjShmgoJ9RpTsgkavmGqfYK74k3jmqRPXsUwhsrPhnikoV7jfkZVBih6brNqSbPEF97BeEdgfqH6",
  "key30": "5178CfJUiaJwZ4wf2ZeR3Yg2PseKDdN7HZ781tkHdT9yirzWkshY3cU4SvRSUTno3zAUY4HafptMaMQtgidwDDYf"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
