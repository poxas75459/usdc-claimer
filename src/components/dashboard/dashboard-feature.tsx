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
    "2KDjGeYASFgXB2q42GFHGuqafmYRhVFQdUZBJ2WR2QZEZxp1YZuzQeq5ZdF6SGDs8DNpsPvZSr6k6nb1c8bXmXhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H5zg1Ts8ARrSnFutv3wBpKo24KPr8MVfPCxd7xybUwiG1mSVwXqxUhjcErHicF7oEvDvKTSzcgnyhfeWvPrsVXa",
  "key1": "Nceg13EGf4KgbhAR4yddUS4ZtuqFoJyRzVtzrx3qZ6mfkCPg5s9P1iB9CTTgQowSxp1RXKdDVSBsV2awfGMYNXh",
  "key2": "5xkviQsXZ8rZPuPqbFGFh7g1MptqGkVrpu2rwWQ3HyeibCNvJqPzAnfJzG55wkuXEyDLcu5x68LeykGG3suiayQF",
  "key3": "3EfNPgHMqwfEKrzFw7FvSXeYJhWp5cSYFUf9kDQiTPeB9S1xPbx5qzcjCSDPfcANEg7UP9Q9RvmkHpqdvFfMjZvY",
  "key4": "4bBzv2pDGFSCBoWzgb1cnLNz5ChqdqWvd7voXSdkekaYjmFydU1bLTnzWi7ruJEo8idHyHAtTxyC5e6qWqJ6V86u",
  "key5": "614xhom5BnxwZG4RhbZaGZpLP6z4mZ8nsQLq88QomcRTDLxsSGPbhjhZ5JSbxPwyxC97xxnGGyWDqPwxjdfsaHJG",
  "key6": "4r4dycJJc1bJJref5Sk215MnpZ5JMMZ7Tr2eqtNVFx1DFbLf8zYEx9Jb9eH5NW8t5RMX9te8f6252u2xTSz6aJvZ",
  "key7": "4tavwJF4gdLxmRmnFMSpKLZxVPxVZEWBDYXR8R5p7Hz8pMTDUGi3GSBPTj3CPdMQ3kdkPor7bdgpKe4KxDMT1FcF",
  "key8": "5VbYpxaSsEgXGyKVjjrA4JcZRCC7hi8gaYH4qpk13Tn4mcZ4bwwtYnQf5vd7kH14cwxPcLeeFCz7ZxUmLjiDcXcZ",
  "key9": "2SQ1GHtgqJBtwZ7jaYQTLeH25Gfv4iuS45k1udFRwgqfumz4iu8NrgJEspQwFybJX4BqYRWBSfcVfv6LHNToFG9g",
  "key10": "2A52Hbh2s6viHW1wtoSomwTncMZyjMWBvqNRuZMTCRpvhR9CtQU9eqR8EcyM8u8yWDtc3z2nLtQAHT8p57drgYZJ",
  "key11": "4WoDysTvPWS3fxmxb3ZvhhJATJtvLmNnYQ27BeDMaRV3rYvEc1rfa9veATQG436eGTg8A2n2MFEGeqjrVXs2cMAe",
  "key12": "3c2dXPordbKPBqz6TAUyDudtcH31JiF5ejbBp6ARGu4rznKFyzurXKDCwJSQmMXGcxZqzkrE6bbf7Y9vEXkiC3QL",
  "key13": "5LfvzaknWNqP1D5xRRPe3aTEQ5rKNmMFcTpHBV6iu1ikFwp6K2VtNisSwAH5tW4UpvjPFjBLhS2G1TDb96uLzvGo",
  "key14": "4DHr93EwgqJdtMsHeY4g82np1aVR6ACBtBgriCnXALkEehMzeZSYUkVfS2tkSRVDQyj4wQuSekZfJMu2dzREAMNp",
  "key15": "5HxLZfhEjjEWRiaR8DJC6dnQoLzu7uA2fEEVx5wEHU6Rcb8n1CXAdUGWBmg9fB4zMmgphfSaERbm9dTCUK8md77c",
  "key16": "2SjxcLC1YxTVemYNPbp8uTeY3pLHSm1WdhhEZqwK6vcbuJzsdWaHEXifb76TqW2socVtWUFtsJN4r1LkEFFGDzjy",
  "key17": "4heYaDwjLWXsaMb6jnbktDfKF8rpuoZ64J1iCVuaV1YyLUhu6XhkGPdQfe6fsSjS9jC8ZShwEkQoUamb5oD7jpuH",
  "key18": "KWm4AkZVu9XrS4L9kgGQMiLvCHjgvmi9jn5cwVhNjxAaoETTjPficsmxrqRoyzzt7XzSpfT4moVEUiPj8BrTBGW",
  "key19": "5rjH98MvsXYj7vsrDP88qhqkHcA7NmoYz7myyv94bEqdn8KrAQJvUPZJTpW23jDvDo2umYWN4dcMuzgN6aponzfm",
  "key20": "5hSw3pUEcaMuYDvkEjd1wsiMkc3AMybkFdhXHgVMeyw43w4nZ3pGkwC3hsrJ5CU3fHStREnbeRinunt3VTCFEtX1",
  "key21": "23buPNaiEXQ9Ed5mj5cqrhg79HSMvVkAnH2kQp26C8EPjS6FXbJP3aQsxH1z83qTon3okvELyAQQ7cuPdbRGAqkj",
  "key22": "5Gw3NHP6R4qUG513VuuNXg1WWuJFSQ2EEQbgV175j8x24WtPs9f8gHcVCCBotfF4Fhi8iemoFaS4cAX4gPhGVqvb",
  "key23": "5F3yZbw4Gu9tPh8QDuyHg1ys7igRGofzUzJX2Mk2eAzdRvUxuhBwFhTJajhzh5vTxJnjT1fCp5JVWzn8fLczZh4S",
  "key24": "5AhdKXhUSwU3V5QLC65V6uKZBvzkqeVmHJRg8PsHPZ9EjQJDFUxJiWHFQLohcrbwiJJyf5Gr4RoWpsqEX1Mc6ENK",
  "key25": "47QsSTW5CR33CzUc9eqgNKagZAXrNhH3nHe9qvxtzzDTCHA38ZxrzjJmy7WY1VGLATu11iqZP4e49p8Q2HaCiWMq",
  "key26": "2smriw86URstrd7DUW3nZPeKFW4dTfgBh1CqohPU9xXX4xuRcya4WxQwEsaewZTa5KhU6K4YswRVq34deWLab3QZ",
  "key27": "3XUwTAroRa1DqkvL329rB2wqdnTtnyk9LcAfgTQWunwUU8SB5MDxvZYF8NcqRJFAZmjzu6bCLMChLcv8owWBaWRh"
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
