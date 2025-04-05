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
    "3S8eN6a4DaV85H2iu7ZzcsB8hc5kVQUDi2Fm9jY9jHW9BBzVggonHxjYg2J7QbbrcXUf28zC93KzsJL2SfvzUsim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eub9hoRrzNCifQD81TvmD4tutgmJZ7oGPyVg5fPX2Gs3N2RGsN7HW6wNzjHm3UtVpwjm27LsC8u3cLRcwEyg5KC",
  "key1": "5RTDNq2Yg8m2WZX2cMnKERyTFkVENuZqQB8NPf9HMsUon3AyRW41SLVfiUgpcHSuNj24jhHZZiXzGJn3SqzhBjdA",
  "key2": "v4hua4brv7ES5bZWj4fPYE5wpyvc3dTUGHx21GMzzGprPc8JsLinuSG6eiKnMZokPDXwG59Tg4wzuWxxp3sEnCW",
  "key3": "3dRwZSn3pm7ofv7nC9cd1ZwTs1uR19Dzv6tCVKvQMDty2uhJQmuQkQZTMiLFmVwKkDjWrkx3nvqdkHS9BBWmbTgp",
  "key4": "5ToixwzFTc4CzuAayMQbBQSXFJDDp6SEmTVGS46XCQauhW3xC52kR3trrqsupWybsjmSmRcRszKh5PH3LheQvW1Z",
  "key5": "5eUUBAVwByhvx8jND5rWnbN9649LhKMd2hCrtR2pCfjFsadEtUDhCe3hSQhwCSRm2nh4Xx6B5427CKq4FtKajpW1",
  "key6": "2ZMs1M8qQFNCF9TokEM9UYyPEK9mC2ws25JM4boCj2zD2ZKqdLTonW5J8q75faQd96KXuxPAJwFr7EbgKqCF11N6",
  "key7": "4mAnZiCRQCmaPzA7srpjqAQwcyk9JsCsB8fVPCPSRxRbsSi4EnX6VfVSVnP7P8ZZcqL3u7ca39deKZB5feNgizQR",
  "key8": "5yqVpwg658Z6gyCDkNfnbKvBADeKg3XZDevbf4wKveWeseEKfUpc1JZmGu5d8nYRmMPaPE28S6nnXZy8mBJ16ttw",
  "key9": "zfp456TTHaryeZsC9K5nhgTyko5GFfokUMQYpo8KnwqbZiNtPbDuysUP8yJri83duPEAV6v5MFTU4Ri5pPbPLq6",
  "key10": "5VcAMYnrkxVBA1RbuFtKyuuee9jE62b9YscVxwWiyEnbgpHQRcKHmUXDsK8DuuNPUHKvgVP2vPmsgPrDhzcF3eT",
  "key11": "dnVeNguhVk1Q7GQZqbNtS58fJqvQXTtcr2mi69fsX7mqawpkuwzqDkK5yvgb2BSEUU3Wpx8iymxeY7zcJt1526P",
  "key12": "2fnANEa1V7KKNmixdjaYEZiBvjPEeBYaaiPtjCRLwhHa4RJihqRYKGcjq6zWR4NiyJkpACzj5R8DWqPUuud2E1Rd",
  "key13": "5z8H5XQ5fX5sTUSjj1FSgfVEqmsjdc3LiP6z1tCzxyoGisBJ9WUFDNiSVvymSndvQG91JSCydRsWHz4MZLfQnNgF",
  "key14": "EZpiZEueM5GJQ4DkgU83GXUX1tyScUvGQkPehA11jJyveTCPD3aZBykJyzXM7TbRGjZZCqmc47qffLbRredC8yt",
  "key15": "5HifCVSGP17nqYCLUMer4jUPB9M9rE658HCNYFoh9TJHNsqp5ihh3TeeAaHo598L7WD8TEwbCnzwMEb3kcGU6mkq",
  "key16": "124gLWUgtKEht1WUUSW8zV8LNRbN8pcGucXxssJpSLJmqwJ6FF4Se1oq3oXUs17usbSeVHXLBkPkW5Aeoqm4s1Uu",
  "key17": "49kc8QVKdRfYdRj8zFzb4HE1EeasVbm1e8A3XHyENnraQ7QuCGZ97sHYr7DRzvqkFDtXACWZqCVN716nRcbNJjNW",
  "key18": "4SUC7uebyYhyWuNNaChZzWPZFRWXBnTrZhvgqxwGpguBceWfTMELZf5Pg6XTtyFogmBQELgxF8FkNFtEgxm82J7H",
  "key19": "4Kdyf9xuzZMVMX5jfLUtuKL7wz9n6H1DMdj8rhHKKx2KLwD3HUVNLZF3ujf3nDm38n1kXdu1fSCXSznLf8JGvTJf",
  "key20": "2TzwkQc985PECZA8bP88bxec6uhpX6rYou1qCyabarkbHG3kJQXPft1dAzX2CZViHNYfjytgsuKAG1iqPMHGMRN9",
  "key21": "5nMTNtH9zG5hAHrb7Xkcj28p19mwLLHZ2K4cLWD9Vgr2cHu8XNhsH9k8nHXigoboP1EkoQUJMRHgiUFHrQiJ9Tg6",
  "key22": "uNcf3xKbvGXn5MzeyYty2MLM261Y1LMFrea8JE1d8NvSBsR57cHHQrWxr82awsCdAKvy8GjWifVeaSU9e9vTdkq",
  "key23": "2N2mkMfx7Zn6tcZJHSL1CJfvVtH2AKNNfw9YuJfRFZjKLRfpyDboXm7wK26hgCaJfC1SNAuTvZ4DC65UfdM5y5PG",
  "key24": "3dViZy1o1QzNaN4i9VmSiZYPbJt6L7bFB7gCoPpvryURUjwKSYrnh14WEgBPgSAuKuRWUYDUHYkJF3e3k1oedFdr",
  "key25": "2hLAzhaDAnWK2ab7zvfT85uvsZ4C5NaLCh7UvdhWzAmCxLDE4FMvbyb9eAozKHYVHQdPQrunxpvFX1KRx7a4yTd3",
  "key26": "59XUEBngPkHnfUBrPmP3Djnx4bcnPBGex2msHiarL4rH2YBNMAysh5tsjH9kELoFSaiJhzMZF9A8cDFqZ3DdqZQ9",
  "key27": "4QnzcQ82yGCCw2nXXroQNFwLyHQWwV8Ad6VpBdhXKEfXutPco1CJAP3aGe1STKPwD4G8whwHQJfi7M5Q6edLvRT6",
  "key28": "nPj7mem8H8Hg8Ki4oD1qDbPpzqktp1SkZatz1AJ2VTVa9mBi23pVUvSb6BEjhhQ4J4o3adZjeBRMTBtSXv9ZPUz",
  "key29": "4j8Ue1HpBWiaxZ6BVi4Wu3XY9HEpgiW8vAH2qFCcpJKxZn8LH5JZraYL26m38P1U1PZC95LhJSVLuz9rsMdyebF4",
  "key30": "4frDT3gb8CraqQn1ef6ybgPrDUUhGNy1hYEk6LNTicyuKzBzHK1W8xnVrNJRTMWCSV5ffAvwdPi5C5bKTWMYe98Z",
  "key31": "21wwW7bMpqDdu1HuRojyxLRuQ6aqFMxxnvaGs1PkDPzJmVbaeAamBYoFsF5M4uK7mBPXCYq6ao6tBd1izEsbrcw1",
  "key32": "3eD5BRVKEJfz221X6E5V6v95KDAzhU6SeXNQ6XqcHdhBXTXq6J3qFPPtjqDtcpsmY1URZFSxrr93mKL14uTYwC4f",
  "key33": "2fwddjtJ2ncY1zzrLdkfxunT47VVjFozuaRABX6kai1n1HDjzDJnna1GJiAs9WCD7XnHSrCeg1VNXiEtPAxgVbZ9",
  "key34": "2L8hqXL3bd3PXtdJTc4LwEeenUdQkE37F2Hm5Z7y3EM4WGEd9EEBrP6LoRnnZJKkjuYMKFkAstT8yU9AdNB6QPPm",
  "key35": "2FofSvmtHnYwWqTTJowtjRffi6GuZU5zo4q1uqKgZyhsZuVA2ABeawSky5o5Mte3xnjoDS7gtb1kVZfpZ4CEBe7K"
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
