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
    "3HXPx32Z8VcNfYb6tYDEym2qY6qSRdG9J3r1Seojns9UGqyU5fz2DGbUHabviCHmVeCHZjoGEDqGyfHSaMuZ4o1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jwosdE4ukMjPVc9NSxrEMayb8PVsQGsJPbPt1YqnRuR7sFTwoYQoB95ioGX74h9QjFrUnwWTWn5dRs5PJguQqt8",
  "key1": "aAbH3SNU2SbtmbRcQg3Vkg2nsfVWFLvTXnrtBefYK17h2UtyDcjd5PAxvwkiRvQQsNNEy5YAZnjkYa78Qbihphu",
  "key2": "wDvQM3mWnPfun1Y9MvgdidDNw2LYWTNcPjPkuGWM2jdFmLaXFPGRopww3o114niZ7ZSGxY3w47LeXn5Ny2PtWz1",
  "key3": "ch7pYr8GAaCGatLSrPE3u7LytSMt5tCmqq8MLtPRKVqgzftywbxwPSFPMPoTrLQVxrp9gL2KF8aNhVMygZ4EpBn",
  "key4": "5KXmock1QTGY1JHENHjGuf6t7erWMV6534JC4e1rLf4KUYw4AF1wfD9hP35baTeD3VAaEDtJ9MMDhvbDREP5LPxu",
  "key5": "3eKS2QMmj4WBsQecGqnDR5sHfayhcHLvchXQz25RN6iL6F1iFmkAXD799QoGTNR2jDAH8qMe9CwZM1Y2ZP3dj6zh",
  "key6": "5ek8759mXdmgYXkhNVcUQ7gY74vrvoH95yRaD1WmpKDaXkJcUvtWEu9ugQQzsxSUBi4kAKd5oucXoWwezuyzjNoP",
  "key7": "2Nmg4iwSrSZWEGvfLtC2tcX1HgJ9cJTCCi7gZayRG3vJj11QD9DYm3FPfmqVnJDCoPJAF3r4uqdfUjtWKRxD4ypE",
  "key8": "2FXtjZXyKrRxnMsvELxHjF2D6xUXafbjSVirxSKQkeE9RTKheaXd6SzBqrFf1eKAu2iKPEdip6bPi1rTdFHrgXwp",
  "key9": "5pfVHSvZiPQvJvFoCF6TdAqPEX43tdsdnmbxqwfTjrZ2Ufo8sy94mAgz4HW1a9bHh4VPgB7MJiDrXskwMLT7NML1",
  "key10": "5o3wfjCMTrq3b6bwJjBiiBomYYmjmiLbpctvmpn51uTtkY3fEGZZQb9yHFzc4wMssuiB1s5gt3M8mxxvMqarcmsV",
  "key11": "5iAJz97gS7AgePDdZECasVz61H2Mno1wAQ6qAmPgace7RHtZdJ7VY7XC7EbLDGWAPtRSKCkyVjvdiaZMf73tFqVE",
  "key12": "um1EoNYbsmpo7juxDwxA4HqxiLW8qLF619RWmgzDjxSH7rgz5P5gXEdQBehSWVAb1uSrC9dbGnTjtQsCn7rLE1r",
  "key13": "q9DFhJDADDi7edtTYA4GpN1xMXTaBhx43aWBNaBDEfe4dE37fqveR7PUZzLSN32CFgCh9ozWknfHq5Hd2TToDzT",
  "key14": "2qSpKxtupvM4JZPV4itTbW56F6aJYPUZ5hUrTiqMo9Ma1QYNKU8Bp4WHmc87ieuyfbh9AN9umTzbWKqqJcPG2rMf",
  "key15": "4eA2bf9nCX8cN6YujjZijb8tgJSmVVVwFJE9KadD6jGcpZX7Qb4FMYhjCz7QNC8fE91b7jhR9CrXgxffRmDBf5XK",
  "key16": "2TRZdTHUbUnrTFsfkd35DWYBMaoUzxZQSBRKSPGqykrKud6i1c4NZQBsqgFQC5H85Ngw8rQnSg4SXGep9DZBHUpt",
  "key17": "5NHBwdsNcH1e3jkGKCLBSV5jNEm9Bv5Y3ZmTZaWdhL6NCt8A4eCkKXckNhuFbd7iTYrCp7M74P1sW7gLqbmTMev",
  "key18": "51JUBtaT6fAqpR3xACos4Rk5Mw8ScXFftQYg2M9oSUrs97tb9MU7esY5YDhFH3ijhTCiYmVz2BotdD1jDb8euvuL",
  "key19": "5RtjDhRV3na55fzkAZeQpvttpaWU451CQyFJNmTuWGGtjt5kkTMQjj8KwHbhriPLQjJPUdL8M7eYjoHFHo6EdYv1",
  "key20": "2pj5jWiKaRi947qLQgqeCQBZxJXKZzKFES7o24CQA1vGMSqfRFLb4UxkYrNfiiGb3EvCgm1TW8MHtewEPorZMd7j",
  "key21": "3eg4vG9dbdRSAcz5ewhYkxJqWMi6Xp6FRGoTuxS2fYkJBfyiQ22Q4CcAiszAGJ5kbd1CNz3Jwjjhtdz2XQKzwR2L",
  "key22": "3UvCRCYLXzrfcwV7ajT1qfvk7nPuby4dtU8bpP5Bqhgts1DDMDD3mXdwcwVS8d8xkHd9fshNp6aNBVGdDYM34bqQ",
  "key23": "5rqEX8L1hAU7UiZpXoMgW92PRaANMHoGThgHPvFRTaiiiHNvCewv3rHokRTrJgKUp3ZnNnv1vcatPixM6u4edkcn",
  "key24": "2mMc98gMj9LGbRC1SCGB1mexFoZvrgLjo9eUTAGYerJBJqT63Shy4FWGJjnFMcq7rYpLacVHRMuiKm3kqYvQTGsY",
  "key25": "3FokqZPME3GbrNmDSqZ4kWAa63zEsx6VyF12heBZXQBaooqKiQzBBjUyjUuQju9VVE5yJZ8YJAQ6eTkRQc3pJV6m",
  "key26": "43XUXqXqxJf5LUq5P5FKV91BqwGbvsg5tnz7StPeu5zfwBR3Q7Nz5ETsoSJtF8vsRvhAYeFHDMScx6Jk7LTeNFL2",
  "key27": "4juWNETauAMEDNAZfURw6wzVmbwhVb4YmDes2gLn48xepsCanTCVVMEFBHUjCjFtsfv6uDGVQEnMtsBpyNhoJkBJ",
  "key28": "4bs27E2y6uHRw42mrjPhLy6cCWk83MEkn2vxbgrhG19GWkiKSmeoGv4gHmkuQWinUPVWso6LzftDbQBRHthQFJnc",
  "key29": "3GKe3rMcbC8quizWLfp4YRRhqJPD3nuc2C6iqxFQqhShaAQFc2sSpHfDR4jWptZSXuLkieneqT63YDVvCSHXYdr1",
  "key30": "kAWwLmZra6pASxBzguhh7WyHpvS6DbE8Gp2QnsSMSKAf9bxt9yLEqVBmpAmZpWoTpzPdh8rUgUs5mJvoBHv278F",
  "key31": "2ZgN6CGJdoD9JETnWeYPx6yiN3ZWjs6J8Ue2YwSpoyZrijnSoFGtFbL8ebbDsbXLtq7kwUVL2ZTTUYqq5ZGN7Rnv",
  "key32": "St3Vv9NMVUphLhgy11oxkuCpodHHB51Nn2VJanhvY16XjBbxSxsVXPEVwwgXswqPPXka35J8GNasbA72QZuna6S",
  "key33": "4mosogKXPfCq63H5rn1pJpo1Z7Rw33DQwzSQYup3z4LtP8dHxVjeVuZSjpsRULuSDqeMcdZcdBym6wN7ivQNju7a",
  "key34": "4hWTWCbdod6Rma8LmUPcGVTowJQr5BnP9VrSBUikY9GZM6LV9ErJMcrEKUeiXp9McAJZxdLDqxi7pa2doy2d8cH3",
  "key35": "5PptQWhbrwMV581jyHGfg3rf8Qb3D5fXU1ZAtGxhQX2iC2gdzFD9Ax5RRwtyuu3GPRWfeU5HUcWhcGE7ad7UszG5",
  "key36": "5HtxiQJAKjHi8SaTonuCnAZGs5ojaAn73pK79wztnZLkrMhCvUYos34rAqKjBQrPrNg5Zg3jGwpJDR1j1h4MzZPr",
  "key37": "3ph7kYZ1kyH6hEojMDh9akuzqce7XxPDHtDE2Y7X8RWV8reL34eNzyHvoC67F8FuHNDL9HgyhqpD13oDpDqRjSDH",
  "key38": "2rhmoCFacmwNbYFqNq4bweYdDhjgV6D92a7Z2JTa6wUnCRkrhRiKUqAeCMhB4zGsoAmkMmU5mBrUsU63ds5BrrjK",
  "key39": "6URdQRentWoSx4dN6Paebo4DpJXxFvR38rorFCzPiFJ2vBr8eAZKH42DWwtBt8nsNn3uY4HhB68ord1zpgCJwcX",
  "key40": "3oexGxCjwugNV582MJsCLd6XgxkExt83Xo3vW9wyAhoadVc8btDpirgt6PQGMXCnpGzkm7sTKLEGLLKBj8uV6Go",
  "key41": "2TJBXghLW8cRgow3K2UrDenTs36iSUJRrauQfo4wyKPZEopfGtNpADmSrh4FujNjqAiwYHFTjq9FZcafX8Q3Sr3F"
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
