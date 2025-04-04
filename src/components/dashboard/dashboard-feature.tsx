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
    "2uoWyQ8dHKFQo3tL2gSy5p6zBgbYGpnzjbrgZiWJEqQzbZW8FbBbgUc8EL6z4Jey69ZoEVGKPwTCeSjgTLpJ9TCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "636db5LE6iuUfXy8oVCDt6i7LzNTGQaPoNkS5LVLMUBzNYBMNmaHUuNQY61MhhGcVxw48r2P6uCrXCL1Qyvt29wZ",
  "key1": "62aWhzzGethNHksHgHymNzRnfFvUAeGFEK7YLLudfCUmni9N1KgJExVKoFz7FCYmGc7BizMLBM4i9fkY94cy1bn9",
  "key2": "5WoYEoQtzRiNeV7LmmG38Zos9GTBB9YY7S7Q4GYC5KV9gpMtxhaDMNffjrJ3FcYEGJDkKyhuM2QeGLv4jmeuBn5m",
  "key3": "ZG5TUv7r3TdV6k3o1JxsHQ4QsZPokv1BsZjELct1PT3KfiN6x8XCjkrTrbVooH2eUd7swhcLgdtMQ8qZ18AfeVs",
  "key4": "5ggvaL4VZemcoNBjAdM9hMzxrbAEfBNFSs63vvT89iYCQLKqvPTMioDMpBkSEgKZrjF5p2esnezcGodn1zUvkdA",
  "key5": "426CsTY3xvDahhNN5Y54rvdEA6JhV7SxFxoqqeJPmzq7oaokVnkUucN8dMqX1qjydNzMziDoprq8YeuNLUmocJDk",
  "key6": "nvA5pBArhpU7WUnDx24Jwzxw5DKxnbThY133pzccHrfTUVfhgFBPVrrULdTtXShmWgbvm6hCbGk4yD9d3wwgVy8",
  "key7": "5nP5zQ1dKViEo2VRqsuCVBBH8TXcD2ybLy2xYPR3oEEEpmsZsZVMUVHWn5KfxNJqzr6bDvZiPfZURSqaAGMwVXMd",
  "key8": "2WdpYs7Hn3RvSFyr6Lqe92peVa8sQuq51JSYEMm9DUkDTyNdT8W7nzC8a7WhVZ4EHfrajE9wWD3UdXo4tyrGFh1G",
  "key9": "2ybjKdFpLDZnSh1BxYKvunLRf64NAGY1hX28evH5Kwa2ZMiLtVfMdPmtAPb8xus8ZM9Tuk6WpjNAmU7Y63qJUtMd",
  "key10": "osFm38Cya8KbeEi3p7Mp9XE3mbAZespSAqjpLqVPrjLQmoLS6kpQ2xDbTnpAoxYW9NmqQYRFHGxkyWHYBc3fRdS",
  "key11": "4VuYof5E8dcpQ5ufB48BdYgScEp9eCQLATk4jj1eo6AyG1JgsG3jDC6p2YmhzpdPTktV1Z8U5bLMz95uby27XnCr",
  "key12": "2MjNTCqGBnN4kQP1TNpCjEVjKeLyUmoXkPotfR7WPHrLoBP5idtmjBof3MJQCfp3DWf2ynRFqj5EWBCRX5n7SJTM",
  "key13": "mrHHn8mGhuxPs1q3Tzr58Nz2vVwWYqhjAT3GDVwLNepQwgKk5Au1pGteoZBX44uxUhJJ1786XmmFbtYVCBSRfcv",
  "key14": "5jTKSppa1yr246oa7WNPypUtrxCfRSUJfv413X7C1nqeqF6ZDFrwbyfsKf9VNJ1cv8NrCoFpVkexQzdPRVEu3tCc",
  "key15": "5qPT8wPcHRTHfQqmuNxXCda5tauW13vtz4NegkLGs5SyrYzNN5pXpBkQD5Cj4P2nSxbPyhaUWbxaQgr31boBR1za",
  "key16": "5MKQkrivNsDWTXtamZpqX4FMz9zgnyDXQ9VhzWmpF5xaAySkreLaHFqxX8sB94E9xsQyLdBSC3vuPQgJ2mXe4Eyr",
  "key17": "3H9jdNtXRzE4c2FPLRqpiJfu7TQzUBaH7e6BRMdhkEd4vsuSv1wbeZWx1EQuRSwiCjSUzTytbU5peqR8yk2jxvCC",
  "key18": "2gqMECEomEtDd28MFcXU6Jmd4msNmBWcqE46BLGyHnFL81vNdLHpZQuJJz2CtfcKLuZNLht4gQe6VXB74uqkrhhf",
  "key19": "61LE3pLAmF7rcruANpS3hV4mMSGT5s9hSwjDi9b7ETRZGMkxvYTxcm3xENRyZzoApiosvFZKvynanwsjgjS8EjKE",
  "key20": "xFtjZTLphs1JwmEZ7UNjgHU1QMFPiJd8Lu3aPMMaM2HJAMnLARFfVwq6S3yEsKkfR3wNJETuPaajqKP7KDryuLc",
  "key21": "dquWNmHZ4JahQbQLMdczHQbaezGGEPgQdRS9KDxMvoP676Zq2HxC5uuYwNgySheC7rZji7WBkPDuAgZFyFC6f6d",
  "key22": "2DxXjbkGqgZ7MwYXw7Uan2KpKNRK8LPVHDH1vavcyL7YDTVrX6e8ByiNsrCbLBCtUxCSLxBhZYqvTqHcR7QZ95e2",
  "key23": "4mLSBmPor1BP9mmvVqPUavdUXYmBBHr9ynkDu7C7CBVfdxUGzXkn76PpYnG3t8XnMEy9iAfgtsM7FEk11DiRKodS",
  "key24": "5M7Lzg4imQuywWpR9PdvV1852KQzQrtUZUPS8nCZDfWHPCe52Gw2isyoRiJaUxaGvAVPUBFXpcNXbfaCYRbwmCfw",
  "key25": "PeURerfFinENptGbWbx5ez1KURAteaePcMB27bJpj8GLKDQq3Ln3f38Kxkk9juKrqTi53Rrt6JL4arMuUrVjUZd",
  "key26": "3JxEe6JsQ8HvqcjQZr72d98ZFPRGUUFXdmGgxobGvVccFC7hXS83mPg3sdKJzTDEUpG2NbirVWXjPUEroCMxmAMj",
  "key27": "2cQL6NJGzh7EsDdnLi4vod7TywBMkpSCSUTvxhUTwgT5SZuDNXvLr6KZthLUW61tZmxzVc5Ntw1J3merafYpV5h8",
  "key28": "2ykzKbWAw8WQ6sMUiC84DQ26XvpHD981ZwCHgWbFPstKv6zCQmqP2zkEFU7wJN6kjSzUpWV3vHgGVvdr5hkEnr1B",
  "key29": "2aP9FAgowCVkH1nBfW6K6S8Q7fsfvFZrpt9jpdcBe9TatUte6q2ZtdgoqfiZzcvNTXQE7igRyhau6TXY5wd7um51",
  "key30": "3s4MqXAPmsTTAYxgtFifGBnFWxgFrbvAELdYArJ3KLw2YoqTg3VAAZvVGv5CXrcFp7DYrcmgBZNwy2wfjtNULjXN",
  "key31": "3mZEqg9ESsxta4TTDeVMXgtVqC4CP8yBrtdwNiw88GvunwDeH3CcAg5R7kT9eNai2iZLY9dGXQU4gDtKeBbwqDE8",
  "key32": "62zroNoYPEMKCWqDFz6MKEZiRtJSM7bZ3E5eiW4BU3bSLVGUbG87DiGNj395DEn7h7vwi4LsxKSoAJpfVzfve7qj",
  "key33": "4XUoGT63VVFqz9gYt1eBgp4HKSnSjqE2GFdTe4B2skwTpXGBYqtDHScA5NeeKhjFsS7Zj2SgP1vrxDg8U1UzTFqs",
  "key34": "2x8vJFuoFLjMdbJF1vcmu42F73yn3w5XhmPEMmXBFVguyAiziEChwifTKfuUP7XHJj2zbq2o76JUzp3mKci8Erg",
  "key35": "2uhX97SFUhjAgir9iHebMiChY4AJcQczxLv62PnC89xb5sowxux8fKNDkMASgRdYfFrm3FujBWZr38mz6cXSSQPd",
  "key36": "4NCfeWL7k2n3jns9t7m5CCbkcDQq5q8USwp5muX1z1TpxTEcYc9RPWL6WnNYUPwHCNsGRUiaqithTfEjgKB1zpsM",
  "key37": "3BXojmRFUGyg6sXw1pZRihqfZ3TvPgjUC8A9wuTXsmvdbpdCncpMuh4i1ZGgqVUg9Ewso9iKRVznfpDySsqHxZcR",
  "key38": "K5RhvVZS1Kwzf2hpC4Rf4do2UWTgqrcWoGS6d1Pt6rLzutGVcRu7dgXu3gPhA8McHDz1HbRgnRYkdzrcjpzoneW",
  "key39": "tddvUknzzwKR9JV4yapa2XxwzVHSoyN6fDa4RRkjWZ4qzo1F59ivfyhrELkHYDbPtw6vAQqnGGRgwN8wQM1zZ3t",
  "key40": "3USjZu6gUtM8Wt2Twf32qXTNzotFQg2Me4qihvXkg3dsMNgHTzTPY5y5mxoVcuYySV65jsF4h3dk3s5Z1QtfHT8H",
  "key41": "DmPc9qEw9Pkc81oBFZbnsCkWPMtz5veRkFTh2omHj9smqjRvA5zLtwgEpZFjRMMzJpzAJa13XTB3brEseaKwpqs",
  "key42": "66UjeJ63KZ7j9TbsDKEGtdEX1iHovDHJ5rSp8HDvxkHrThJqnMjhquzhupwzbngJypVfMBNS7oVCAK4vHSC522XL"
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
