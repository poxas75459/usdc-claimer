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
    "5oMBsWD11bw5FgW6acPXn8sEfKtKaAC8mMbDFFKbToYHKKLnYVPuEdfBmiz5QcRTc3MTYfYDUS2rpP3QiY5CRsWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yNS55F8jaax5yjespPrTgiC2uVqwUU8Ebv4XgxJe1kUkmpP5kEUCeHQ8UM47kRDG6iYJaRXbKFeJdwr4UPW4zfS",
  "key1": "2ACdUq5Tdy9AKBQHwgqZhRFznXdLTUEpihGFfGaZerD1cP8LvieagNpDaNpayfqnJJstQGSteQeFrkhQRHpKuWD9",
  "key2": "5DWDEo3x5WdYpNmDY22YwwKaK9CgCFGp9VCQFPa6MCxvKddAkkmQATZdUWys6RoPpND8EqrREAESvAzbexSCYPqU",
  "key3": "5NV8BTybJr1xjKsBBJGiZz5QqkZZwxrU8bwWaHfC6LJXx8AXd7oYdnjFqnBeKn2PFTt7GrzvkUsyTJZ2B511K3KR",
  "key4": "2gpcDFdSFDwdzbJgd1Xto9em9ZTE5oQMGH5pL8MAM7LZXQdzkgLRkmnChBhqeJ9iMTqehSor3QHvujmVB5SwXLBu",
  "key5": "RJMt5VoBeZmkKqmfih4Fr5s16e9hL7GQHQJ53UdVxuxbsxbq3sqoWsCag3ycH5yuWB1BzQJYsMpuJ5jYNiLz6fZ",
  "key6": "2fwFbSLbxf3bcpTt7usXy8vJCwhs4JXSXE1oSVsiBGvFHB18ENBgb9U73fyLmapKFAnfT9oMyX9C6Rsj2f9ZLfgd",
  "key7": "34oB8RbPKv4QSpFqvpdyRhxYjhgo7KnL9BFS5edaXAWoimHHej7tteTqy87AD32wnDW6uP5GpwJ72GAXveYJDDbX",
  "key8": "3hxDicLnxKJHy2siyEkBdnRkq7DaMX1euWbyW4prsw2DYG6pRf5EUVWZdHhXo9H6jfKjgf2S31V7reBn4ybynKu9",
  "key9": "nkzZTxgV1LQ2n1NJnuDGDTF7ft6r6wF2P7GPat4PaeSPyBTd4pCzGzNgKaQBfPYtSYtGReBbwiHigGVhgRZ5c68",
  "key10": "2ZBxUUWZYuTpDfBoTw3bhqNqW5R2sFJ9MGRe1DizXwzn8NdNo2B9iaYcREtMPSkWZ3g61JLvxjT9AXr6Tg26emkL",
  "key11": "2rErG45hJermwQqgYT7s2vnuohZMesNQCXBLZCVqJ3JWPBZxYda51XTbCtoZQEbA6tTkaTzv5pgSDhkzjTRzEr5r",
  "key12": "2ocaRvLFWb6D7E7f58EMpHq8fLU8J25wTnqmxb5Rjb7Vjb7hMbzRZXRFB59Q5KzLRowjFhpXEiWXP4ScUCTq2hjf",
  "key13": "3FtvpKXxAARMVSuMmjct5BPfRggDuivLwSqUqai3xCEJPzhZdohoDAGTPRVjLhdHgRacNr7MSQe7hZSc5zNmpR6t",
  "key14": "5GbGW1XTvm9tkQVSWGU7eEci7FUVwZE5cSztzfDuXWfqytmuhHufTyLCRKpaVDbUDr5uX2dRqLymxKucuCtQcvKc",
  "key15": "ME2zzaDn1gWg6g5nDCUnD5X1mBuwBQMgg3RSvwymqrCkXrGvMKLS9aihDesMhfph5dLG85R3Z7bSxnLYAB1TciQ",
  "key16": "49NCUGqSt4gt1iRf2Vq6dsir5MoC9Soe89HJWkNhQJJuT3XbhGbUsxbedjD5QfB9Le1MUgQvRz3YkrrdNYmwZchk",
  "key17": "4ojoB7X6W8VJNcFT9doCpSStucPMX9pdoYi2YdUTNJDAwwBopsk5avo5F3Bc3MqR7TgkXs5oLPpYfNxefUCvdpNR",
  "key18": "4X5Hdu4ggeTrutbzVbpSHzguoKxznV8hzmBeFFdFg4A5PzVXuSeGAGuCnj7D3qorkBdHPqdijKEpZAxwmT7dHqtq",
  "key19": "5Atowwj5vFA2bByryDcbnt6tmy94wUjy8m84NjPKz6zCyL8C8GAiHaMCnXBw2zvqPFmiWwa77LsT5qgi2hcFpRx8",
  "key20": "RXXc8ga8qeSSKtBxzcJQSnKw9j4j6VNHXfBmdHGDNc8THMDQMdFujy3o6gEfss5MbX6QUeSWoqFips2eQW1Hs3w",
  "key21": "34L6s9FKZL1dayxt7ch1qGXvx4s8e8A46CoxmhLcNuS8MRewVU8aLgZ1binfChZ9SBCTNFNJMHkWaQKnsaeWRQyG",
  "key22": "3UF5QBiiA1XzUQ4Pru9m3Be1GNFX89aBfN12zPgH1xjiLuJ89X9oFiA7xyJEyET437jjFP8TTXRzEHj6MdpdzRjJ",
  "key23": "2sFzZEWnY6D4c5WgcdCfsc7dKGpvqSrgH6xrY8RE8dyyDam14t7vTa8FBSdYwYRyFk4zMzGMnNJj5pxNwvuRobGP",
  "key24": "57yU6GQCJsiyREDeF26yED7u1tzJ6x8YTigkdpV1JrMHzqYr33tc5MdwivkHUVzS1QsP1j4zn9rpXgVuzcVx1Jui",
  "key25": "A52c6BRFFnQAcLXVXUzDaLqUh6wvqpd12dvk9guNKcBBprENUetZoWwxK8e48Z6aYsE5ZjpWnG9RvguxYV67QKg",
  "key26": "HtVXPTEKPvkkndQFcRaSEw9JoFpQmei41KMCELvmFNq7QVmGAkykx2YURvdtovpiDH2tSPg7m54D3cC1sVAmbfK",
  "key27": "4brMfGrfAXN4fjTTdHzF4jBufj9WG1bgbAGTqZgWikE6MFeumUP1Y9hca14mqLPgrwQQeakJUsevS26Spb8ygfHS",
  "key28": "RD8Xc5xqUwYaE38MxeRgBFH1pCq6jhD36dwtzcwdgcPWF41z2drnC6qMgGChJ2s1t7ybMgUH7dAM8stx2WoSmV7",
  "key29": "3GH9ewDLkZznVvC51csTvazZ5SREJ799eL2EvPfw2KifYU6tvpuqgKCGaihMi5UZfeMGy9NM5JoRqrxWhok2SGLn",
  "key30": "5ogQofEn2roxre3V8fT8KxSDR2Jj8GoxHwQX5YTNXhCTqC1b9T2GHN568hhr2RykDdVWJZYX7DAzY6MexUfpwBd7",
  "key31": "B79orzDwFfh8hQsJ7bxD4VFdYkPs91RSFwh4fkxFivKoefd7j5e6anF7drswUoYRsD2o6g2FmrCT5YfoFr1Chp8",
  "key32": "32xvh1Qfo5giN8yZwQJ2svQ9x8QwEmZTcV1FrMzuMaF1pX3xRwhK963QGVXBPYhcUVuzYhjzgg5Q8hE7xksgLvFz",
  "key33": "3chsrPsfieBmFQPyC5t4UvkyyiWobGvjC83Cwbf1V7g1HnrpQuB3dCTKjvHtpyMLPR3seehcCKPrrhAKKzPX5bJW",
  "key34": "3hjsN7E8VjF5mDrXB5FdYLYwT2vyZ7J7GEHW22PuyNiub8ieN56hVZFY2ciaFwU7ebq3uL5J9d1u4BPYkoJ5mHoL",
  "key35": "5UqPrZFBYRpPcpGdz6zRe8rZ6ZMYvanUAki5XXKE5mEsMtdrNfGRbVcYuajjdoKg2nYKGryQijb4YY7kQVsPY4Xo",
  "key36": "5VVwmfU33GACnxcFdPchHeKxoeZG3a6Ax3UuQ3bW5eYgRsP6Rg4i19ji7XeuYdh9GnQu7edCCnhHs97b491kseii",
  "key37": "328PibKFdnfKMjGysLSUR8hUp49rZALDGZz9nwnxsKWpwfRM498Di4zSzJURYMnHpXVBDEtBoVjGxhrdZfTmHmMD"
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
