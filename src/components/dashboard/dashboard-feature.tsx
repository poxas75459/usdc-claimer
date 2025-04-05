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
    "3vuRFbvtNfUyyPXCyg9i9zaUoG3xRvyAarDwz319q2JG1nftopZXSNeeLU22faFfejuitzM8hsJkPRsjf4YZxuC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nytqhxoMbuxwkCP7ZYZvFyuBkTZNUMjiEDGyRB1iow6rxzWNyJqkgBfSsZ55UmK3bsPDbJng6fykTL87mwaKCR7",
  "key1": "3FeCPakbJLgjHj9woyirWcJ6iZJ6oq8XG8HgAjC2b2cdaAWoD7cwtCvae8E6bu4aq61D5JMHpSB6R81LfEYRBRq5",
  "key2": "3QfbLD15WdCUKX9gxjeqp7ewxo8CrZ4Vr2ErrzcEXbT9aVAZyqc7z7FNJ29xqZCiXXxSEK1QnKJmkoCVTUXR6ngR",
  "key3": "1c5QNxwyJF1rkHrzgMhTEBv8962nVyRYvxdZjWPzVhLrZVniVRax1wQZttCCFeDUBUziapXQKZPddBMzydZE5n",
  "key4": "4h74Ea437ZDRpxCSYcpDjKfxU9S3HLYmTxLB97tJbxA3fXApzsUHRmyKKu1qwThBAMYfbwA3hVmYEbH7Vpg5hD7g",
  "key5": "3iNeNijTb3Q9cC2PpMN8nkmWyqxP6wkCte9LfB1j3E8eQvVerP7iBoGAa4526uB2CMkh5pv6PLrq6AjCsSRLYr6F",
  "key6": "5vKozPELMUD8pRS3u44dVYdSbZo9As1K3w6SXUyHBiiNjShcs3UWrbB4dSaicB1jciL4u3GqABPbUkHmyLpnZZvm",
  "key7": "LmCVMayvHAFJPNd8TjJ9BPMr6cc1HJ8yxuxcpsdBmno652m4JSsfAGBxGwCHBWn8ptSS62AxjCABSwcAjhPMaxh",
  "key8": "3i7xWS1yqQm7CZLHLXMTnWfyk493GAR7fMcGaYRx7GbHk7ez2pzBQgxjeXhPaEAxXPA1CyjwnCY69VbLKxh61AZ2",
  "key9": "28o3kKvz3GAqNtL9xWgAmSRx6E9ErJQTUQ7TmGbf9icrE7ruPCCx8ZLPoSDJdR4iN4cAgEN5RrdZ5ndT1FqxgjKi",
  "key10": "bj423v6sEdgs13zUNPyPpCsXyVMSnjCCt62qPqRDmpSYsH27uXnxbZ3UwQdAwYNNEtGgq78LfEonvqwmkQWbodH",
  "key11": "8KWZA7fEg33iqw2buU2PnHxRAoGe38NfA7eJZnPQAMGeCaoTw2nfBnXCbSLNSkQrxnG1wtJ8BtHmiF9ggUcbb3p",
  "key12": "Een3YP9pVBN6NVTfzjtRmrwqNbzELYSxrwcrRT8cdWpu6avudJ5WH4p91uto5kvMDE4jdgQzLvv6iAqvyJ9y9Qc",
  "key13": "2vvCRuKXqfDKywSTyfbNrf3kXtLbtEMfAeJbEs1LsrkstA2R8VSdcvNbDdzFNF1WHvxzpwduST499cvJmjuFdYRp",
  "key14": "31szVmYUwkWtCUSj1cwFThkCYQqUCMCmgN8eWSNGsnK2HxmNxQ5MZWYsDMX4Z2MP7WNcV7GcU5QvUfdz8dw16s6w",
  "key15": "3Sv69H3rS3Vbkq9sFHqjpMZfcPyvv9DxnYUbXPn7mkQAjWoNx6nPqFYVkEn1u9jypwcwT3fnxS3Jd6U3wRfc8SG5",
  "key16": "j7ZciRh5yd9XWXkka7jGFg6qKjsji9MBwgqPoyowzPTS4E6WaMZVDumqYkd64LpHUotw4s9wGUjUkuUbfCGjZsi",
  "key17": "4gUDcBCtCEB6ieU39T9hTvizykepUibHTYEXezUo7jS1C6rZiuH1UFviApvdCq5ViNDf3Dfv1N7RWEGjddgmAJBj",
  "key18": "5j5gVnu19t2kkrMYYKdvX1PPw9dnfowgy8vz6NnG7zY59wmKTSRQ6TydntjCzVvkiqKjCA4h1VrUuSXprR2rYwWx",
  "key19": "3Se4vqFjjVRczwSojwwa2GDz9yMfHKSBid6FHNnVAKMyAKug7i5XUnffZTrKuKf1t4UciFwu1WT4Wbk1QuMs7HyV",
  "key20": "5bRRXsvAru1FxNpziJcg8UyhfoyDnEri8Zq2uVVk9nV5tLbVQJU927wV5J9h8YryXRp2V47DpZxi7G4Y7nYPPZJP",
  "key21": "4UEqaDddXf62evE96ZCkFgiKRMARRydeM1cYBhVN5yc65MD1C1v8XaSYvrkVDcAxvfN24QohorZUNvfyxPBsojC7",
  "key22": "56JiAnkQM1xQqt4s5NuMNxr9mQpYsJkMb3u3xBmkYXk3r9Qm9tzpd9szHgttSt2jRWUthZXD3MBt9aqFAG8fUsMu",
  "key23": "55yMKPAbRpJPgGbjGe1Y5b7QoAURgELMjtbNBHWtsTL52otHjnst6mGmJ4oFJELKNLEE157EqEJzPqym7VqeCjVe",
  "key24": "5qHgCJKzg5Tt822q3VeyZBgZT5ZDnHSV9zHTFyXFBuv4Pamx9yVcNepHcNiMXJViiF5bGZgqPUtn2xXc7G4J1ZsB",
  "key25": "2yyN8WzuuULGi3zacfJDbtijLhDLannmPCCKiofR5kVys23qKKuE3pLEq34yE7joWtmJRNvEoF2cwivcEnRx1zV2",
  "key26": "5Cj6GLwjunHJZubh9pVvGGTZidgwr6XuqVnhG75BiMNWPVmcQyq6rQcL8tQwXtBMmf8jjHw51reVr33PKDkn2iyb",
  "key27": "zZ6hjUMKCvF8SarCnXxz8MZSqQqocmdrVdw8kxWA77gYt1dKxTknki3bjoo7hhsny53E43Xo1RJ3mLAeSAHZvkS",
  "key28": "3gccMbyR8HWu7D3h2HoYHmT3PBuy7JNAbhCKYLrRsuUJufS1ncXXXJG75q98KMwKCbq8jpm8w5LyoZdYCy8rHUFM",
  "key29": "UWCYyqJLqcvrsxdQEAqidtS6k8tGprAX6pbKxHap1rsQmFZ4mvL83PaM7pBbwLKfKHuq7qFYxjL3rshPG1Xwra1",
  "key30": "2GCus9RqsZfHxquJ1aMxKApaXcELGFjLWoVNfRNvrbvbYsfrNXnxMiGWwJJE5WjvFQGEaw8xL6e3MSNwr1a4wbHA",
  "key31": "2kMTcU9toF8zvWLi8PPGpmGjkMtRhPbXoNSPpb2SjQh5Ce7jcPKh8r2jpQyvzPLmtqJrUsU2BnvpPPNwTHiamKri",
  "key32": "5cE9DLEcnjvAADpMSG2z6VW5ioLuPdFnBMi5WeB2m1LbyRDk4K8D6DWpjHLGfpmMeTBLo3Fo4QGXMnHjZbevVoJx",
  "key33": "cYgSuve6dFGFFt7fNbUw43eYhNnLEgdRVpHAv5zm5SWrDxhxRQMSgrqd1BpJBvm4nxRaUew5bdVD7UYWD9J4vQt",
  "key34": "56BHXWkoRUWHfnxXoVG5rMfG7irJa7UNRXHBx8NadAD49KMFrW5w1i1UjPoKBeEFN3n1JeivuYdBt8F96AFyGEh6",
  "key35": "5nUFjGSy8VpyHnFkuMp1uXYXkGKZoLWc9wLwmcvUxDoYupLAEPUjE4odYBmkvRosVbj3AJs66cKi8ycXTajkRk4u",
  "key36": "4hysev7wZ2YzENfq8RyZzRCb7hpTJDBzLibmVCyZ4dvuwY67MJDf7aXCb9ZBPDW1qd4sdZ4tCGfRRgcFPPUv6a9N",
  "key37": "WrQHikA9GcJTh7dGzSMJ56oCThwrF1WCDJjoV5AfMXMDX9bWg1B1oHFaC5WVwNqzxKFMWDcWJoDkD94PVGWEgZL",
  "key38": "2KeVPgY5gKURjSFr6bWxNznPY7XDQwUEK1d98sX6MWETpHxLYCZ3F1814Mcv6ipH9f7rwNqFRS9LXDM8N3GwXk6C",
  "key39": "9pDPbfwMYwEgjji2gFeLSD2xMqi39XLgcqz364zwH6Xc4s72aNcVNbPKHCBEej15JRfLV3KLrGibm4QBMcuQavL",
  "key40": "2cJuWL7mYo1i97izRNJQaofHueroRyeDZVUkKY262YYJGLnBENmCLm97tcNq3AqAVQZD3HCmERJbkJMoXWyUJvFu",
  "key41": "3dT8b1d9v3QGX8HEbCb875PxUXjZYcYGSKhnYhEoBKEZfszw2iP5eD5p5pBQJRjjrUuTUa9oWYvsoa35sok55phM",
  "key42": "Tf6e4nv29VmUdFveMdWXouPAhVAS3Z2BcW9McxMyUMXGHEv7fgpYtUDm77YftfjUiCfBBatuA2EGeRfCiaXZqMg",
  "key43": "3NJ7uFgbrtwAdUGEyA544ke8ioL2aSM2znhV6hJ3EFpwGDq7gvbVmeVWGdL1hgEHAt78tEv4xYaJKqaKY4PcreZM",
  "key44": "2EHASuzKLVW2orGxvEtWd2Fgv8aeduQhfgMxRPWKM6egVhZkg3j9HTnKDtLUDiyQfjq7VcmcoF78QXx5UHHcjppT",
  "key45": "2pmgscHCTdmUb3B8dcm5pk7m4fzwXY8qQtUGnJoWp5En9XnUE4ufDYWH1Uv5AFUZhMahzxCQNTYB5VajaJWvjZAe",
  "key46": "2ozjz15zhqRcuMv4L1Zk4DawnVKP1mbgVMXuurvVtg3Eqbun8rYpV6gxUy5nXNQpTC8UYYMTSZvkU6xQUCbMZwkM",
  "key47": "5ZDfmLEXQpWJG95XBk28JZitRtPaYYDG21RmZFWnXTakTFXwUF7RctqnSeRzmJcoGYpwNVLEhVNE285WNBogs4Q5",
  "key48": "3B8GSvFvxLZvzUCkGw5mUEaCR3UPjPKhSeXcsYtSZJM6NEUaSqDDy1t5RL9r7kcbpxtDFoLxbeHAAcWTzgpyAsHD"
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
