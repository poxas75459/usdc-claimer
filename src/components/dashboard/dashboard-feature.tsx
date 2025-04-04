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
    "3UMpBfQPGKLspZkLZNgxowZMrK1cfKpCQ5MrY6hxG27Y6gsRLr58m65P7iTeYWMtQm6xi873f1k2Upq3XieAgvo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K8aVgqT9gGmkoF1vZfm5grdjUtZ3eurB8gzyQojMzfTwP1jeUgRHUJdfNseuHENq85fM54VFGzfzkVXsHvrk4Tz",
  "key1": "2QQh6CkhmgvAJiLv6f592dVwK6kBsPnGASp3wPgqsRTQ47ss4VTrEJg9jxtWMUnKvRBt9zw7MyBuPXWmN6fKajVN",
  "key2": "5YpKtcv59BQvbq2rBcpZmHAo629oBJWh12xCR5vwPjzPwCuKhvKeKB45uqH2qnuZmr36hJAawPJTVHkRzwcDfaTm",
  "key3": "61wwTvKxQ9ucpbcXZ6tAcdXbbPvs96JLbV7rqDUQx9ZGd3HdRgrEaq4ZJn25tSjmK2RmcsYPd8ZsaLnGuHeYStu9",
  "key4": "3tVWJzbQQQnMDisZBZD9yxxbhj3k4qxhsNeyUKx2BwueLFc6Ky8fUCyVmy42ErfQKxPhjpT3sRBufPkXUMwuFWsE",
  "key5": "3KqygDeEiMEEZSRFsMaE1vaQgh4eLsNbqGuAV1hD8Ch3wJBaSAHBdkojaWEJadht14Y3XkUNA7HmotGrbiPSyKsX",
  "key6": "4UxoA5dxvAS4YPTtVj3qqDHcPPQ81fG28wGUNRmNsVfKxSCfWWYFo4ELbVxWoeZwxNwhpwEFyQhayo6sdW3rmLWm",
  "key7": "2PKQxu9S18jaYiANcLhhWBVCh8DYqkQHhnRZs6kdJqunS4x5MuvcCYNr7steC16giWeDvXxnEmf3bK2gJ2QUndg9",
  "key8": "59vmKXCknkrx3oETdYgrcvvVh6MVkpLWNzAu7LtPGdfBNBWtz7WoH1VMV2gmBzsXJRu3os2wPLEUPyWp1udjP5kH",
  "key9": "4TAkuo3MYLkZXuK6pUe5jiUVV1GZLERwt3G2TJ4XPQ1BEAsCfDEGdwfAj1czayxEhMswJmwoaUgyXCFq68pv4qGZ",
  "key10": "2wTeUPEp9dknNCkjTjuo1HKcfpVNtpi4h7T5Edi5WREoJj3oF23zdKHxiViNzVwozN5TbwzmHcpLpL7rByePzKXb",
  "key11": "5mnU3dxjF9XMq8rGRKZUccNK4XW7stCn8pzdn2BMe7dtzUgCqQkGWjsPbuzwZwxtjYXjfezbxKWwJrHxYZGujpRZ",
  "key12": "2JJuph821v6kLx3ujohhsnx2CstLjiTZajgHi9iGn5PqD8BL7GAGjZD8UGXiFJ8Ehzjy9d41hJTXHsxFMTBuqJ1r",
  "key13": "3dDyFwPM1yg7yAt5xmuiQkdq46eqNiy4NMka78rx4iMYmRLR4QKDKF4GyLpRaSMUwjshaNYjAnw5BuLwv2acHzHD",
  "key14": "67kTdicZ8Av3QceuWNmxzRusbt47t6W1qDeHdDpoxLwRiJgxxoT8kLUPkGeEtoReQvSURH2hNAADfWV8TAFLEmgY",
  "key15": "2hZPSV5x6kjkzWRofjQZDGTLQik6qnCgDJM6RDo9v4EzQBmX6JpKNCzpWg67u9UyYmWSF7ELy1VsxyhyZWPW56J1",
  "key16": "4yqqpNkbrBruoqCZ7G8KjMFEBT21jFfqUp8qoeae4EtZmHfY898oWDdE9yyri7uXGRt5ef6FtuXip8dcmdnsi5i2",
  "key17": "5RbSCuhmHyeu6WV6zMuRH3S9MoT2Mzq4EDWhpkjNGAF8UBGNFgGGTLCgjDf9y6GY3bMGH1q4dFy69wsW7z4HWDJt",
  "key18": "4zgY7hCHgWwBuha8qiSYMC96tHDf3seuURCgt5XffmQK76u6kauUZJS98L95EAGtebegXJtVTdYEXLgNb6F3HTqk",
  "key19": "3NNye9xhPZQgPDXhcZz8ss67zoeT3ED7WCSJviaj7hfsmFojiyVY6L54ir8zmr4hFp1EcyT1FmA59bP2U1xWGasH",
  "key20": "2HsHwnxNfjfcfyfUhcBPddLz2CDho5wbHhhuU3zw6dKjgtiCVUnsgmwaVHkbvAUGpzEKvqbYV8g47VkvckLsgSCJ",
  "key21": "qbnud7S1a8cktokKQSCHy4g3d79XXTSi7uJqPY8yddEwKaYgjLadUXvTXvzSiZPcG8We8neB3XRUpowDTAzKi4w",
  "key22": "2MZXrqdiFrUqJRWCJoaBZ1CVBWdawEm2MMouoHnD8JV1CoQCmG7gvXH3Tjsixk4zPR2Q8X4ZZZc7BTX1CSRgzeQU",
  "key23": "49zfZ5ZUeVEmMHKKaipJTaEFZiBbg8NCm4r9KCxP6zz1BxvpcrhWccwpVhwXhY7y2JQv9WrX9UUULLPgCzy9RtNt",
  "key24": "22aWGcgm2oqCeBUHbqNNML32FJGhNJdFytKaLJX95vHPaXkPoATU9nzJLKqpWsj91A48SH6jbwPFWhKWZJomoLrR",
  "key25": "28ipU3ZYEnavCrTsRMV48kEENgtVz9x2XJVCSkKtBATZpS1zaBLNxZTcWzw554g5adBXAXGgouup8o6LQCmx3MJh",
  "key26": "ko9jNTBXs4HMmBTSuXGzBv8VLtaGgAuxdbdFG5XhEKtz9AZkBG6bUAB9G4e2jC52qKAEhtTsoiN6hKkRJptC74b",
  "key27": "4fNmEqkTzS8dWLVrjXT5exXbbHh21iGnFyPdeSx18zWcK8v8o9EjKD7kga1kUcsb3RTxps3nULM6bZ1om1PY7QVK",
  "key28": "Yh4PzFaQJmEnkjr31yMvQouXuGCBzrdwbLFJZ6CLRAmJBP5mmDrkb7SCxBKMKg3yRoPvsoSYyi6PjZGxUM3i91d",
  "key29": "5usJQ4wr5DBf48hSfppBVdHhpk8gaAwdBxWDhFgLUQwaMDrW8Wke1j259C3JmwkCBuA3q5eoYToiVq7dzffiDkLM",
  "key30": "CCNqib6yhMPzHYLqzcQnaV63UZ7LwQeHhkrkWqtpeMbxoF2LpjtrC5tzriZepSqGQeM61moNf3CvbJfyVBh6Enu",
  "key31": "3DiGCxqf7ToYJGgAypXZE3NZo985ieXWYwcqmhM5qat822nXfQd9GiBYCyVoGF7xzRPiFd75aN6A1RSbp78jpwTU",
  "key32": "4xG87QhCwLth899R9iJf4PoKbZKNuaBPkvoirSVs3ij72CQdYS6kjBCYMeyxJ5fuHRz5EvpccBrmcBCocjykZwWV",
  "key33": "63wVBeWtdGNjurHdWGbSrTo51xSKXDKWe1q5JUcsF7m9D1nvm693YSmgaMxA5ZjVicgjK4WM4RhFuMSq13YC3BLz",
  "key34": "3Aa3TEn51nPDzsXMbjjzXVhaoN6BgupQMTMsPezfvmmfSNBPNArbxBNmGmRHCEoQT4CMVv3tqGjR6TZ3SE3xH6Eh",
  "key35": "BJMZ5FbV1DzeQk3mkP9t1u5gdvndjGdaa77B7J45xTETbLP4FUssRrP7tBX2heuNPCEfXKoFRBkw8crkxD8QyNa",
  "key36": "3KJEzNUgs4d8Wjoxfk95UobJjBraXcoAqmDMdTh6EgGTY8tZojHFQcZ7fdJEk2RANqz5xDmG7qbtuqan5qzd6xKC",
  "key37": "3FthuXE9YyLcFTqwZBx7bFy7AecRpGpNC9zCwgfZYXJo21XTJUJ1V8GVeGJba1ZzigVLcQ1NgcXdHDiJjDevNdWq",
  "key38": "543vNmWa9FJY2WVEoapBus3Z2K67DqyruTq5rT3mqfmFsRYG8zsjMexGHn91p7feqWAHfo7RM3KL8yq1YTSGNX48",
  "key39": "m5jRCYJWEbQ9tHu31TYyWaLq3RUacx5NeAXAMaF8qNEcWvC43hp2jEVkSJZdUVnNef6xD3eXrnbP4kjwNbsTDLy",
  "key40": "3ef8a43A5CnULk2VUvdswthducbAHa5PmHWGeztPwjUJm5zuwD3Fdi7QCWfe9jKtHCXZPP5WAWmaSGDMft4FRnEN",
  "key41": "2kiJiiMsCn212Jrtm9BEvesd9pWU1QwFPWvZop9EE8gbV8dQBKPasTmv3r2oTuMccsq82gLoYiEadUs9ik4u8zFH",
  "key42": "424EK2o5kdqvLt7M8q5mutLwS1TskTzdgMEMxriQ5YaFux72XUUCUqCp24PqFB3rxB8WmD8bqXDxptpvPZrxmcjq",
  "key43": "NF8qqQd5zxv68xWqQDWsVp9rsu89D6WgAPEQMzkULrNVxwk9XrrafRTLwsDycV3Eo5EkmDNn938nQc1Ns6tPLqt",
  "key44": "2o8iGLwbze7SrQG6eQbskfd38Nq7dEhTtAhVvqAyedJG38P49yVt86wwnCB6Hf6abvk5XwgvuMMRgs48kxVm9QXK",
  "key45": "2zW3JnoQQjSKDNVhkQfiqH2o7qtwT87VCejfZ6pQXQAGxRgZZ993519mqxo3SUEE9Eh7Lrc7xyBj5JXMfyFR3PxN",
  "key46": "53MTQTDacydzHoEz37eixW2FBFWPN6NbDKd8smzvK4v7WFXZReMRVQW5GJcE5FLUcbqXpHXbptiAoZFbi2sBFoqL"
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
