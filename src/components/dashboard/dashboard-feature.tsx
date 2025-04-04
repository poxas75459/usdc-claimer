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
    "5iaNC1XqxMfJgfnr39ooy1eZkyFWW2u6KYt97Ubd7E9gTg1r7mDyKuXXxYSPz7qf9HXpFuDvKQtTy7JTaCLFdV6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J7iNxSnAkHu3Hxn1e3Y4P2tqk1GL9WemjCJG6Dp7FysGjcAALunFL4nHUkX6p5QbURBtQn5czQt1SzXyLYuCzHw",
  "key1": "36vDN1SLrxK2GD4yA7Jr58J1uq66Erb6qcUR3dwCDVWUnZWcQJQHRmahfPZkZuYRsA3fBXfpeXAhgTiqD3HjU41r",
  "key2": "5ga9J94Xcv4V1gZ1m5gW74tHn9csXnA4fZoWsWABYWGaonvhTFBpgNWsnkiX2aCkPwAqXiTQXibWT4GGDwUfsU6p",
  "key3": "cX3erbeEq6xfFnJqg1Uyrx8PxNiBZKVzLJBaGUZCDXkNNmf5S5DBiJSGKCjJniC5waRRiJQrL2McPNu5R6QsZ2C",
  "key4": "2HXoq6XYbGuzYggPMwzVsZgM9EigxKjv1VaCXwhKv3RXdM9yT3jf9MnHV88FMaJFaq6K5hqpASFKxBQdrR5tiZqs",
  "key5": "62FgVKNq9UYHfEshqMUndgkDVaLCtsKZ3zKQ7RyezVQdQCAH32ML7Bf4vkhc3QtfcnEWkZJUqb9MtwcibZuCF6u2",
  "key6": "qNjbFz9QUwhi2B1XZVkikwTTyArXmz2kzLfgkxFsJb9NZxo2i4wGxkmUrAZQpSQXzXvyY1Q4jZURpdh4ckXCjyq",
  "key7": "2wBRcTr52r37m1vzxp2VL8yrFhkSaau3ofXkeYQ1SHeEPkig5GQiQ1hGsHz7hBoFwpGmRegv7uRM8dsBMyR4tTTg",
  "key8": "HoKqd2xrbbxuAvbyfKfEeJ2qSWDyF1KdQENWLPgT1AuLi9zPrstQYzFx4TYrfsCDkXnS31UExcHKLcLQwxHy6su",
  "key9": "5xq9gCU2xN6UyroYFRRT8Reptvgq7qiG2XzWFcQrtLzy85FLUdVLMnm4Ju4sVsmPE6AUt9pHRzF1Y2n4uQcvKtDR",
  "key10": "3g2qXiBwamKxcJLvWNKjpEY92hRsiW8zQ1KbwiBTJqxKdo9PfCeUHJQLDBf9sji9BEQm7xXtQ3TfB3RWPMHnFpjv",
  "key11": "ZTEeivPNZ5q8tmuJo8uT2eo6Pizkado3KqG4KwPXmwRrPdEGu5KNTmY2vuqzCbE51p8WfuKvzCXGYSSGYYzgpxg",
  "key12": "4FqckhoFViuwpxUqEt1cXAwAQtEsTEVeBcVTUiX7uhZxwVYdrEJ5ug9Uo3CMgbXGCa59qvZZrNKNzhS5HAMKfX4x",
  "key13": "3Hum9CjZs3yZsR8pTCHBa6HwvauvuNZtCnDzVjuBBHd5R1Xs4BSSxqDcxUE4LY61VuKaF5LVgwdKeGFxoDjzZsqp",
  "key14": "45Gn86RxnHw3sEKmuq41RhTX2wdyrUK2WbUYbABYYq2hNuJ9WR36o5sXWeJxfptK9A9d82r63XychMY7dYZ69cDP",
  "key15": "2esJQLt3fpsheUsbVL3BCWZErT4Qmh34GknXrv2yzdZJXAoxEPBhjh1wJEhfaLM6ay1T141Pfpne4pjKKg8dsafJ",
  "key16": "41JffnznhuATGeQCrRLu3LAbmYVkzvMQjE7T7QcfeFFd1G37NqjRn6Sm2H5ATpr2ZeWPPMnnNQcJJX3TUyDAD1PB",
  "key17": "3JVYXUZXAKSPAZcRoGrKdNQ1sRgpoYrXN3oX6kMuLY9s8WuFYZES8ck4jeHQrDpthv3nd2aHxyf3WXYK953DD3Zr",
  "key18": "3yeegQemyDP2RVY75zV7LUw5ybh4sAmhNzHr7B2viKn7ozUgy6v1izZ9nFhdtoJ6zgdJo18WK9gNpkPp4jfREQSE",
  "key19": "666cNvLCaGALSXUxXyymu74DvRWxRaeAKLxiNV7wbm9d1wuGBSnNHAKEHFxF4fH2K9cL3iVmCi5CVnrRfbt9KKXZ",
  "key20": "3WwkMkwuXfBpnKF7PHV9qi7GsyUvZsej9QcxLoXqZQyMsTRQHFSHn3UFNfNTTsWxJB2kfUDoFf8T4Xxoe9MkRnt5",
  "key21": "66DZ5tr8pZspckvq9gjoNzjbDMt42UpTEaxihg4CiyS3Vc6R23Xndre8Qf1oywwZTab65m8ZNEoKGVStvtm9zQGo",
  "key22": "4YdrA6Ah9qooFzURhLZihBPdnts2TfUgfH4QU8QAJjyLS8tEJkt9xEPRq1E8Y9ixvxRvihM8XphZ6dyfzg6xbEzf",
  "key23": "31A6AkoGmETJeaGNZD7VPtEL7BQXLvrtBQoBptEmsNZmJGot3iLQUb95KDbvRV2CnWaKmTrxwiGz3y44SbN8qUwL",
  "key24": "4imYC8ekcrBbmBtJed9dk8VvG1c6imgMQkikC1XD7vptGsjssiPA1bHyZD8p98Q1dQ1G9bPUs8xMxTHTuBV46NxM",
  "key25": "PLLLcRjZwAfJdyeFuwPU6LrBeS5pUhX69jg2WKWFoD3Skw7g8ki8DRnheKCjJSEmaA1Yy44m1Ai5gT19wvzxoiY",
  "key26": "3aT2qxMiuVFZDVhAeiD7wkwAh35GRW8HR9W1gFVSV4VgDQ7rb6Lh5cuzxK7pHRA4D53TcnzuGs5yFQeErEioThzV",
  "key27": "62Tpe2c6kngbjAXpFvu8er8GAnqL26BnUnZJ8eCzqpsJPUBgqLoMD1R6kWCVBKQtBheSPZYGJFCzYfCGiy3uSgQZ",
  "key28": "5EJgXkWhKtjPkF5YUHkMYVqncA98WaVzi6Jg1vbSdS2zdSY6Q7HKS3xyS51hFaGackf4zDWia5c6YbTz73LYWzTH",
  "key29": "63fEcvMAwePxBJk5vUiKFCWLK5zHdn3oX1yE7a6CDJbmac1NDbieZafad4nJQ8WQ3ddjoRL5Xg6RiK251NNhjprW",
  "key30": "3eLdNkmmkmHPvj6rdtRumnVQ9Z2iSaaNJFEc69aKScQTxoWYdwNkVvAVgEbQTG72m86FUjhnCN95aRumViTpos8Q",
  "key31": "2kisMfLV9JcHRbKFr3gBmhQ7983zMrXARcrV3htfj8XGRpM4ZKz1RCfPMkWUdShC4dMUHiqc1B9fs1ZfAC6Z3SEG",
  "key32": "56ioshSu3nX4y8jJXvHsL6hQtRcoTufNqbSaNBWV8KDc9pkkm99wLGReWmSCLbeaL4ZsqeZRL8UMQWb1JaSg8SU5"
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
