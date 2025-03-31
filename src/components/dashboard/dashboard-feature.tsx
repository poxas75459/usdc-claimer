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
    "4kawSV5xyKpaMM32xX3DjH6PJHzZYspbTNTWJhhS1ZguwKMfdQb82Fyjh3xEzwZwZozR87oe7dLHD3zzxYmTXv7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9cLQdTM5Xj6XpwTJqBGjHeeeXtEQcNmUbNyP5vUStE9o8G9T3efNdwMBrtNF46SSeSTbh88xmpGqfteghxDpgL",
  "key1": "Q9HjahSeeGc62pgEzRPqzc4ZKQoDuzQo2bkpD4bXnoCJnTYkVy1BU17LhHtwZuTw8cWZ7rFQduSWwusVKpwKcdg",
  "key2": "4Bbz9u5wK97DHod4pcfzwvUQPFJow2Tkcp33hbvzTKeL7mSPZ3xrcu4XBV1oNxCjFASJaJgL5hEjE5symd3sU9jb",
  "key3": "3Lcf6vsiV8MRD7UvrFTHEMJvgq14MJkW9PP5DC6vwUCBTst9D8WkeeuUaFTGrsko2aBpSYBgKuikrrGvHyeVNKsN",
  "key4": "B8t6RDfmk1jZufp9o9t3BG1EQC7BqJ7rzJXtjMBM63BuTtwYXw7LSPiUBEdHxLcJWrvDb2vkRSXNW5ceLfWy51r",
  "key5": "iwF4cFdRFDD9hQ5Y7mvcYfJCgy3LGz8ii2QBPGgZC3RAobY3gfLD5HJ34RXCQx7mTHqDZ1jawWxNkbNH4J93qMK",
  "key6": "42p3LaxXqF4FahTYVMoXozRFVbhKShBHQbXHrayNh4gEaTxSsE85RWDELmRWd5SnwFq4zXkkQxnnTykMhFufmirL",
  "key7": "HTYc2wWTAGL4WgnGsdTZBhDXDSrq92M9UprX8f33zKETKdPb24fwcj9eoPrai35Y7uSWTJ9HEkgmNHkXLXEV7W4",
  "key8": "54XeRjn39nYF9omVHdHQm7Pw73wjRGCjcGenuArs4XyeHeqHs5DnpaxADKoEJSMFP5hNmPA5tqXeqYEsAkm8c4Rh",
  "key9": "5ZrDoPcy4HxHy4V5WofE8kpMy7GdrVcbapTfYzQk4oB3f22oX3GHj3me7amG6HVjxHfd51SAFQAjkzeNMgkHXa13",
  "key10": "5wkZrs2WV5DJan9wdpQnAgnJphbhGsszjpP77bBgiGikrRJLtv2j7K9CKE7gusCjf28vQFTCZpx6ovFAG7dxgxgf",
  "key11": "5CUHBG44E1g34JXgmzRds6xQjTUoyEgpfgj3mCWBgMhfg4Jtqh3qAjGjeGY6H96SHJbDxWQdotiKQMW3sjLRSmNX",
  "key12": "2L3ZwyTeqSTYF7bFJoT6vvmnegTrPWgpB3TuCibeyeDC5ZjyikQJnfmNHHNTwjEW3xypJXxi7gqTSXDpUPxz9kKY",
  "key13": "QD1EztE2rprZJy397S37a7u88hG428RPSZS3XRbLdc98wxMnqP676jN4xYnzssvYwZh9cs3Fd4T1AyheJ9zCLU7",
  "key14": "sd3i1PwmuJUHYSFHPS7Bj8hw46KsEAZmgQxmJpWLPZCD8f1ExrRJqa1rVfKn5ucuweMBJ2BaJPQwGFSVGiLcLZN",
  "key15": "48vKifWdugJjGFkPMEnPWug8NZ1qgHq9kd8zA34mS2zwX1fGi53W96n8xuduUw9pwWxmKgGdQcvDvGkumYninT2x",
  "key16": "62HEmrUGv9GBPHdYsXiFEaYzBu7LNJ9n1JwPHffSH5wBNDHhxeManNZ7MF7RegxUCjNHMbhySCJWCmvNk3psxRgA",
  "key17": "3uM48wZ6rY1UZRq9x8M4sVyDoUtjz9ZiMqoF5bunznk7GL6qxHetHY3amRv4Epx3vHKGpYfoZ23jvJgUcQiWsSCV",
  "key18": "41DupSszjQPSe5xCAYWdSaiTVvAYt94bUeMtKgJBUsgMwr2ZkZQzRgRaPXgy6GGj8nRqZGzB3r5er7Af8putTQM9",
  "key19": "4ge9L5Ru4C8pMUBXiuTMVjeqkqA5NKm2zigbTJASWtAfhmxjAzdcdsiwoipRLdyvToJB7sAqDxfiX3FNPEsxLgGH",
  "key20": "4aPVFxWV6tQ5kin4AvyxAMiz6dgqWg3rTsRBVpEgDoKPFjDG9vWuPnX6GLGZHPNTyfqyjTyLMHP91rkQz5KcxC3m",
  "key21": "34h3bDoPqPiC3nqeGmASv7MB43a3W7VycecSEhJJYwnggkDAqSTa95ub4J2n3dmwTCgYQsjy3gsSAWbYPmhxAr65",
  "key22": "4B5H2mqJRuDpwX33rUbjSpcsc8BpKjwgLr933o8sPKc2hfdjjAA14W6hcUQLx8eY6GMZeVAt8f2xxs5Kvxt2xADs",
  "key23": "56AzWGyFr6URrEa4tGPvArhYwHM3DCiFFxnmEkrENzP7ZhyDREUfKsonCbzSKtQ6novLy4kvALyPtwuABj6QqdgR",
  "key24": "36wdSsWNKv4JMxaCqQqNBPHtuiHGrvEokhDxinmhJ2mFWYgC6rfE77AyLyrJb1pypjyJFQZ27B5tFfjZUyrQTRJh",
  "key25": "2EyiaHWBTw7g5BaAeD6tWGSmHNBQXGRtmoFfd6p9DgUR7wE8eyCNBTFouGTeKvGgUa9g8S1KFFZvh7Forz6zKa1k",
  "key26": "28p5Gtuq3n63y8LrhoZRGfcZu3E4X57L49hjkr3wMo9PhAdXezpiaTedF3j5qHT7wupUb4jqpqPU7moHnQw4TQBL",
  "key27": "5FQ8kUtRTmyWFUChTazEqpjnPGKi4p8LUAwaoBfnuBdQvpjCyB43ASRHHdS5GS86d3PZxXf4Lt49zn7vYatXr4Tw",
  "key28": "2DHbGkLJ93x86k5yxZQiVsi1CuRm77VE49v14j2cUE3am54E3m6LDRmExJEThVbpjBUSV2ec3gjFcAhW98M35R1c",
  "key29": "DD3JvkXEAw7WxH4nhjs9JNxmCDqMRyBMB6DRJNv3aKFeZSX12LpfJYBZoEjbf7USj7gYTi4QDwioqx7gRuHStQf",
  "key30": "2vaVLLcM6jMXV6pqKMocAn5DCVGRJe71FReFb5hvCBd1Ew1YnrdnTiuuxEsT5efRYs8Tzwze7B2pBKCJXMPv9FAM",
  "key31": "5cVVXmp9WXwAKuszHy3HDf8vQrmWkxEPnZ5BguyKhRRaBwMocqtm61eizjhdbwSboKh5XrTRBzsoDPjxn3cHLx1p"
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
