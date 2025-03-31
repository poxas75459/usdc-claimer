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
    "2cJh4XSbdUHM75R8RkuR9SER46VAHCQHk2vMfs8T2hHFt9jZi4ZpFGpPYZwF89FrcG4AS8UgbZB7NJvoyqEGNiYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ofvmwTUALAno2UhoAKF4KtSFvWbBGCXfKpULxWkm8h8PE5bXL619m68n8zw19TLrVgRCDN2gBDnvajL76CGvSMP",
  "key1": "2W2LVGzJbTpRf3ZZizWghx2Nu4qZ8ttAs4XzMoDNuUcXmPQ7FMc7dAm6g3Q4XUzgnCvmEw3uJZgyxG5BU1wJVs88",
  "key2": "n4L2gKu4pSd1GJVwtVMeFw1f47sP4b4gVLLrEroDPw8W53swHfyU5Suo5M9FsxcTVekEpWUfGDd4KnKVYs6ftVw",
  "key3": "5wTWJKrrCWnRGZfQ97763ye15o8UTC5bugZoKbhHNRpA82xEnSnQTbU59ojBrxievPWWeStbC95p3jQxc7Eauv6p",
  "key4": "3Bopt7NkVbDH8ofJVqhQyxfo6PwW4wKrAjhEoYjBpSqg84zdb9uaVgv9aTPpBsQLkBzUjA23AYvmW1D8J2bjXRst",
  "key5": "3A2ZVAhVsKNa8UbJz6KjMGqfKvs2k3tejkZxVYA94HkZW4SjoZzmV6TyaQLWcH7ZTjHvJWhAeP8tCPmt59UZ2uKB",
  "key6": "U1BBRxD4wRxMv2CdeZUTnzKKCncFm4BZo8awa3kDWytNUupyC9KzxHA6SoHMSm4bTasnw9BSgSHKAngWAkGNz1V",
  "key7": "3RLhetnnQoXycp2n5h5g8SXAMMSm9GUJj9g6Y1SV2Af9pViiBzJXyD7sWicm2fQXU75vy7qDm5jFknYMMRk6GUN6",
  "key8": "58h1MPAUFxKGeE4d61tvSNR2siWXkAtKwxx19i1jsdt2L44vptcyoJ4ub4YDRnzfY8pzfmWg6bAEgVi7W2C4UVtv",
  "key9": "2xiDaTU2C1UJsKKtywPKfL3sC5q1HKCUS4TcqKiThNrXpYD1DD4Dt6iJdN2BMxD3thzxbtFaAj5sXaS6znHhKyJD",
  "key10": "3yccHKTY7s72ZjHnqUHJJAhVfDB53XP5UB2vWFd9LgWNJnM4nvsGqMkdcgeQJkmY34osFFcJALtxGBv3X2RkQXSo",
  "key11": "2dxJtdf3mpYaRq4dZDQMtrkWgfuECBaV3xc4gijCxiyk5fper4MSF72CVU1KxpP7tTKAyT9an6FWZbj8uuTJgZ2P",
  "key12": "RiVYhxGSAJByT6pSLdjAeUtasusXvJSncqnzatKwc5t6LTmhjjknDFL2jSLiEVTmbQPqpg5Gora5Z3RDNCwcVdr",
  "key13": "2HtcB1rBzvRiWa4WHVz61xE7xw7Kbgch768dNnqptQQkTPMaVK939BqaefdEcDxs5afN3hch6PGSR9PzB4fuAh18",
  "key14": "5KZVPuCVrqomnEn7hwYMwJ21SkVD9eFdQWCWood67yD4mv2v6EyNdpFLsH9YnKXPe3JDgDwKmsy6XHLYRvQisfKJ",
  "key15": "5zsJ3iS8ocFNaQDmxziuZi345xqVEjrzfPQaJRyQsKyysmUBPudAvhXvKb4EfSbS8V4ptY1Mbz2QhuUP9d8cLrte",
  "key16": "3zdo9PpVjEEUEfXbTjQbdx65Yismv2tyGH1HtxHn2WnQyw3wEc3qnti4bZVVA3kYCKn4R7AgMg2FiohDcnmss9cu",
  "key17": "2iDF6v7VL2XKN7rUWSBAEng79gy4j2av5ZxJjdjZ63bdbSY4AgQgJjtJCQRtyMnEBTp8sQKPsVc8gydYREqarNJz",
  "key18": "2MusNtvT8NzfKVbNcyC5AuhZnj4AEQjAnmUrioj4NVUrobzX9ey3HCz7Ly816WLSHASmGtDNeEiefwnVeqKiUSRB",
  "key19": "5jqkjTPZewgKWMUhX3RrD9Mw4kKXFmxE8ggW8RmmsEvymDbPrB6ZcHmRry8r9sqLw8zJVXiEV6fSeVTgYTEizRvR",
  "key20": "VotARFeQRe5CaPp1bA8c5hjmS8YhU6euT2ifD4CNpJ6wNwjpMkut8B7ooZRAinEsPj1QWAQySP4zo6nHG23zdKj",
  "key21": "43dgCuHErBCTH8zcL8AgGKD7j2cS7iTj5Hd8WJT3niK329VEYg4musTbxHw2HukrLzcF7hEbwYqDqn1crHKQ3Eky",
  "key22": "3ArP5eyU8kyHr8jDGcRhyxWJgkTuLWMqm34pshAkZkBwVkJ95377pBq1NrwiaPjohcLxBkqRfukLWNrKUXSqEoZx",
  "key23": "2Kg3hvm6xRk5rLMK9PFCkiuJRCVvAa6rYsxVp477uxT79u2Gde4xj2JvE5SZn3irKdmKEL9D3AWBAh66fxYNUSiQ",
  "key24": "3TyAPUdRLyiYccH5VAk564pym6Uxprh8PFDJbsXuJMBXcdqJsxZRMWMFn3mpfJzetBsxFkrGzwFiERNPD5JGxDt5",
  "key25": "2TVvcNTmpffVFH424VgyYHvGDNPDGPxdrgXbxNpJocBP3RqycDzbMHy57mc1ZqAAvM7tHmbNotsasRS3z8g3S9W7",
  "key26": "8Zzp7XJMdHnrY2fTK5xWXNYq6kDidCo2BX2ufwZga1ZL3f8EDJ1tbhcJ6NPPn7g4AnNCMcCfk9cQsWfGFetvumy",
  "key27": "5fLNxyG3nixM1ewvqHS6fBpg5MBpLEbHJdmQWzcDDRToUoiuLtTDB26RfmkmMAEVnEtoDncfEPMHihzUezCcw1Se",
  "key28": "283fzaRC5Hxq17NEWTZJZkJ99q4MVHf4wKiRgif3FC6QLBFb1m3XG7suJRhHWQriPzQ9wx7zym2DDtQNvwvnZNby",
  "key29": "2Smu1QW9XojgQiQDuCUVku76mwMK5iNg1p9vwfJA6d9AootC2Z8viPVkaAYkifN9xtaPc4hqsuu56XmNjNLQh1N8",
  "key30": "489Q3jzYzhT7U4cdyD5q71emfCB6g7WLPa4vvKsFFYDYo7oEk3CKsGMZg4Bzh5GifN3fU4NecxF77ogxnhwLNW2B",
  "key31": "pmR9uBi6NXyA7yExPUGQNC8rquJpTWANQ8tnbjqces8dGyxfjsPbchzQGdfCEidY9QU7kwtwbSuE1EJ7QTQbRXh",
  "key32": "5XCmuFFXT2eomRapMiKzYopfiSNwWozz8b9vsVJaQi2ZaSDPN8MAGSi2ffTmHJHopBvJmgQWQSpFjPJ5Jw6hNG7G",
  "key33": "2byu6ZcTGw2eKbk1esMFV1Am227Fvw6Gya2gx7dkCkpGs7fnrJNVbbqH9jnWJhbbJM3xL4i5HHmZwkVKazkSAg4V",
  "key34": "23XkEV2y8eRYX6E7Q9acJqJHb4ZKuEP3dAMiNt6Dts9d2ST9KecJN8EYLcCyEJhZQt3agzcfjA3vAwaSFHXZPrng",
  "key35": "3RfvVtmsvsaqDtLcrckyx1FfHkhyvML9sEVeDKPRtS9gUMMN8BSLxQTFHhCSCdnpQBjmjqFgqrHvePDGYmi2W9Pi"
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
