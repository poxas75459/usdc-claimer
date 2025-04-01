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
    "3o5APFFiSSoPZ5VUWza2tMw2UUuxZyiJjDXfL58iGCj3aDFfXhhSokTG5qpLjmrsa3pwkkm1aCZEPFaydHeLATDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ShuXKonLU9dTpXKsLQ3VQAjezegMdAeAxpduRbsx1VeN6GYJoaFu2jFuuZ3CdPSEgervZMQRMdgiKhJhTXSmRsC",
  "key1": "37ajAeqZQyzPeuyyQvsFyJ5GJM7UMWnnJgq6ec52z88ruQ6ifvTWaWW1Ljx1VwPEw9cwPTkfWFiypG6e2r6zRHJu",
  "key2": "4LrQ9xHjRxVTpNH4k6TFpvP3uySpPfG38yzb7VZC36uvDasr4p4gHtZZHQTC845B6uUWJN3JBSaefzjYKwuzR9J7",
  "key3": "3fGLLN9gZkPSXo9owYsPJC8ehdY8LAVBTJoDQKpVTrGJRYXxpLJvJwUUsUUnikt3zA4rBuB6uBgCpmrK8F8B2GTe",
  "key4": "4jc1n3Csp7huY3VNpN9EgM8KUNx3WsDHbDK9be2R99tCnzDtfz1nBAqkXyvfj8VRDqNNaWYR9Ar2RVQ7SicWbKCt",
  "key5": "6kp8uVedci6A4xWrWkgKS1yRxRXNc96utfTZmq1QzJwbEqni2ZtfKxEUBM9UL1UhHE8Rahsg2r8mUeFKYQEWbme",
  "key6": "3byJbfkWmZAq4bNFPF6xvhDXzKvnQT92ra2tPoQt4FjGVTUoaJmYvyuuPNbv3Wv7rN4V78jDLBASamBBGdu6Gaci",
  "key7": "4Xt6VeC33xdArr24DsBJQzha169wwCPYs7tdCiPYfs5V7KfiuyVo2ekcBkDf16W3KyxwFxu3K4ag8k4YN62LNtjb",
  "key8": "4SZZ3Mdqy9M1oMaWxcG5J35cqF6oAh7tUQwpqsmtRH6wH6Y1vC7GWpXKtxFMcfV2eGXp6qspb5Lee5pfkUBXJA2i",
  "key9": "QgBa1sEzNQYr7GarFmhTmKbjS8jmdjoZ7T1rRYzY77Z3d7eKupX4Ew9pyy1TnAK5KGwoGjegBPzpzB9NLSYic9P",
  "key10": "4cs7K3Sc82ZBXSRXu94nyg9km2VHNuvLffxZ4a2r21mkWjhLbF5ut7kRZWSqygnRWJeqJYUXZPSjFmM2dJ8ED6aB",
  "key11": "3fpwCSZVC8hoHLc5mvPXg3grb9Wgs9W9kBoz4AZBAQ55BRQBPZ8XMYYGsPJ1r4aVUbeJg8MhsxZxxM7HtSJ6sA1s",
  "key12": "PRxY7afQFjVFFxvAe26QvbnNC61abPnkFiCjny9d53wboXJy8ifgoATk7zTAHjSBkq8bnb9w4rSE6tU6q6h4XJZ",
  "key13": "3oqGKFS67wKDzVoiUm1eWibeMTGbFHW9vd4rg6W7VqCcbJRKgxnTVigFBveBmFj8PQ53i4GRJbw3JHjHqJJqJxvL",
  "key14": "59UiZrG5wy2shAYmvwPisYaxMCjimCXP1P6rQkyCK8QdDdHmyNB3kVaKsK7YM3f6eVeyn5znC6W46mvj8fK1xmG9",
  "key15": "5HUbsDJd2Fnui3UF7VzxrnNCteKa11RUDhsRtYiFJuDdZWd9xe6wJADeSehNpbe8HNv8qXjcdLZbwwzTgaXKM9TB",
  "key16": "3Z99jfWunR9Qyjmv2HJNxHBxKRscxuAVepMHEV7qCnvzS2mzyXYnmx4u9ajRWMDGvLYdKr3izyEstUNokfHDooqd",
  "key17": "4yJ2jQtgL1m1TyviyNaCxrkiuJvUBR6PW8bdZTuPX2XSJMR2DybGH1Fp7HnmuEcTMDdKvoexfEorDmTGo2Lg9x4G",
  "key18": "3jdKCxm7RqyvXVs2oF1x2yfaJY7EUpqpm4Mrve3tnmVpR6fYeTNz21LkrnZdhk7nuumP9r5RoUMP7wCHrXA5TRW9",
  "key19": "565pNcq3L6yrYx91C2t6bigMAcNSp1crQMkf3uJVPqPrsXmQX8JqW8VQfEhPbwhpbZQTdDkdf9mnkZXM2w6dfGvP",
  "key20": "2KuM6du5GgeLVzTjJwmaGL6LJrQsZmACXXX9B9sBYuWxkSAkwpvTr91Q2Lrtk2QAHskU648GN8uXekUoGaucccnY",
  "key21": "3fL8u5ppYwyjGA28VhCTHDWZRs3ncdbvg6WCsU4xYZYbC5kjVKQkkpft56AkdwNFoLsSuqRzps1b7yYNndzJyNu9",
  "key22": "3sZjsTYHCamQNStc1UqPw9qqn1X1DDNK8uuAtbHYuhL7FsSZGbGL4ons74H75gTvM8SQZVZrTAqQiK4bWbC3cswy",
  "key23": "w31FaWZXw7CvD1Sn6hcSsVoktwjWoQDPAi78BLyidN5f2XeCFcbnmvWW1pvN7BbpXsDi21eGQigps9Xrmx2aGgn",
  "key24": "3nvWNMNRKpwibXn3jLzaENfWmKzNvb9ta1pCjpkVKHmUSc1xkmkQWUEJgNZ9GFTHgm2Xt94pwYaoRWP3TBKD2TWv",
  "key25": "5tD7C4FugHxWibPo5beUqBox8B5157HovgACknkK7nixLuaq3y8iPdq2aiVvAaM9McM6rzUg271ukhte21bqpiqq",
  "key26": "2kHKtw9EVVxH1yVXn4Sc8SaCr9qQVVJuHrMFvw4R4VrLUNUbuX6fBWdgD46JvpBT83BBhcLf9YM5mutAVcV4udjc",
  "key27": "4x5huFeXSR6QLaMUyBknyT8gXoYJRwvppRbWMBgspcu9uHuam8mJCNFNfEgxpSSuwdodQk9fE6a6MYr6SjcCyGBV",
  "key28": "fMawNVwqxAEygoZMHCP8E5eZXnFkMGAAyocD432rV7N9v9nRQBVsRZ29eFrRQAQdXopMuntdQzm11CZZTxjb1xg",
  "key29": "3yw4Krd24FHSYQHCC8qEx7tEPFeWGhJVshZVam9Z8GjPuMN1KLv5vteofSoruWjJzNKZKxsfV7LGi3rtvpZP8Nwc",
  "key30": "5seBNDpDDf4nAkHK4397w2PUFUJgWg6ReNxYibxCEmbPNiW6nhf57DDU7SBTEkT9bFsZVXza4M2AidxvwWkvj5BN",
  "key31": "3iE7SfNLSMzS7i3DyFDmhJna24rDtZuWHGPu74XWmAxSEWG2r8juNtaNxX2cd71n4hxU4YWhQkADcnmMxowNQb4u",
  "key32": "2DuKHVC2YAWrt7R2JEJWe8LXnVGpderoviuuCoN7ePXJgP3rzUwJAEGjsFYP1GRoPsYmunotWjDe2UR74NrY6yn3",
  "key33": "3vd816CAhoxWgQsxTTdsvKfgaWvC7tUv82kRiEADE4nQ2Uveg8Wr4faHJ1AQQvbSWTt4Y264PQeyGdVX7sFMjT5U",
  "key34": "4GC1Y7MkQivmpGGUscyfe1RvhCsJn31sroXVdXbuTxGPyytUMPjaY2xcFF5FHpHEBCcmMi1ad6hETkgVgF8T1BsH",
  "key35": "3xRk1sJsE1bKvNYof2aJ2uFcnJnCu2GeaYXAQ9b5jVfmYXr4XNd8QsmRnzmhpj9HirtnYYPutS6KGoWbh46ED5ue",
  "key36": "3nQxGvQ7mJPTGifyhsaomkWtMSqCpjxHabQ8k9VCriGTrro8zBedoVKULbwhpHcbBrBzam3kU7M6fFnfYFjumrSM",
  "key37": "37doquFh9T2RVq49BgfLhtkpQCSCRn1a5J4di6XFVVuqfPVxird7xYftNE7XRWwRhsFMY82fWLTTztoB7kL8DTTR"
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
