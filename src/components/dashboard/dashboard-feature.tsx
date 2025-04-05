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
    "5HEv4MfHVZnktCg3SpXu56ko2Ej3cM72n5muAuf6vHyAJyZ7KWBPDJMagB7a6EKMvBupx6pBfwvdepM4nz9diz5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uAXCm7utmxGZJQTS8D44ZF2965v6GsWp7BtYRat8N6YtpGxqsx9WWLuhKz87ZxNdPTDSfmhYpd23kg1ifJM8zV1",
  "key1": "5oL7v4MjdqNu3YPTj8u9W8Wnem3zCU3oFkQcfYEpdQN126ZcPW4gCQRNszVny9wgaRHTS7gdKyvpq4jMRqoMcarL",
  "key2": "39kjpSmTXxVXNKjvvw3aN1Cz3VXDu7y6SMqBUGbdG9qS6a2veC7UCkqsewbMQuXiYbjkHeYyYt7RgLekqDhcYtur",
  "key3": "99XYNKwApvcN1KYXSXrJjWxT3Tpe3r7vLeGYD7DZHmKi3h8nFK9TGnvW4aJQisqYEC8i3YFYPeA8CnepKBHKJ4b",
  "key4": "QF22fz8qXt6gR7D5ium7DtZhbuLZntgMQwf4ZaqaDjQVc52GMc4xtFfrUBMaZc2bs3kyDhKmszBv7yAYUuFrYpU",
  "key5": "3GrUHea2MyYHqK6ubeTBDK5mEJ3nbCkhqbEo1BAAZd8g149EnqVvTFwSYSoQeQhvVZLTYTFTU6StCs66QWVW7Ron",
  "key6": "2qcNmYDfC1iShPM2kPwLq9JoomCnZPRBWxHmpQ6ym8oxprePVxTmg5YxSgAeQ1mEHcEy3tDwhjSr4Rr6s1x6RNJm",
  "key7": "43APEgfqEmBHHYBSuY4ihVuXw6iyxSP9y4yEDK5v3Bi4U1zjzAJbJAbq1RCYCC1e519Ezwqp49fnjRxLi8ZgnRGg",
  "key8": "55xktoeSsi1FUVwDsFRhTbCTee54kogDT1Y8Hhzes7Bsahd6YSDYDxvg8L8EqYXnSbXaqh7tFAZpRmSbt2SqdMGT",
  "key9": "3fe9Tw9yVT81rtfF5Ex7k9SH2qPk4qTrHMCvnqZ9Mrrp3FUjy5uN1x3y2e3uPJ9YRrcPsLd9RuL7J5macmEeSWqi",
  "key10": "4CdGyxyhwkSrX4NRtcyffBxGQmQtxicZc6BGxZLB6Rbn5nok588u4RYVgixmcfeZ9jCWE5vP8N7ARGCP9ZffQzpy",
  "key11": "5NvWY7tMa59PUGkLLbytfRJeyh7T6T7BRTEG6BZG2f3258LPzrXbCKZ7RyNFYFfvPs4R1Qgmbqf4QUSv5a6Yi6zK",
  "key12": "5RTjozVYF1XY6QMkma9T5pCHadk5zs5SujhaVxG1GjSdqQ5DZVzyhrmDN6B3hrHpcXVBw3wUsvwKt2xx3BMcCH3j",
  "key13": "5aNdUPtX3GvQbbrcuZEXyiWrMtmyhskQ4RJXikZv3ybFqmsqDP18vCzNiPzneXufy6CzCaG6933iG7rPJyxyQfFy",
  "key14": "4cCnD9TVsJm1ajxu9FruW1MtoPGpQx4RARMP34DGGeW9S9L2zKmBHXLDiUz5CyirW12sK6jE3Lob9vG86yNUEK45",
  "key15": "33pmqg3mBbJLCzUpgB8jJcXNkGFLtY9w4rcxCAp4NHo8ZGQ1rFey7zjDck3PnUR2Z2ZTMkaZnADHkEmZBDXh9ZsB",
  "key16": "4pL6KLF9N26SPF2GA4xqUj6uaUg4T8Ze5uXYiUH5GUZ9cRCAHPuYBTnsifPhyuvxHRKe2edjEpP9zq24SJ9pASjb",
  "key17": "1D4PPEZswttbsCaRUnhKqnF8Lq7P6HWnSzRijx84xgdW1meDWqWwZkLy4Gv8RnJ73YAZEEN2fYqEHKcBnPDE1Cf",
  "key18": "iadeLxrEJ2wy45Zm5HXspyPzzDwJJvgUo6YZnqaQ7hACg2EtV5bobaHzhbZLHA93VtarBeHfqPi3aAYqQ4oJKks",
  "key19": "7QXH89xeyqfJ4SHHmPiPBegkgiqEfVNHULK9xvuqGcLm3jfoB99a92if3RiNrStiEx1mwG1LGrHJ4tTtbByByqU",
  "key20": "64AFMQZXebjguwgVUnXVkm8TysgEWFoshLczoJ7zVYtkkoKYGpx1W9TrZoo9cPhGmQmPBc7C1K64QXa5Ue9JRkWp",
  "key21": "2FE5smqukcesyEComVrdXGPYMZ7U3iiweShfrevPDcpREttxdeox1qJFcEKAsCy7wnrDVPozSfNhk6o8zzgMtgkC",
  "key22": "5EqEgez2gQQcpChSfuf4KdvjQcp7Cs5kDQ2XaBuPwrQj3qwGEDroZEJ945ddgw2E2KA8Xp2xA8L7tpbTnChzJsY9",
  "key23": "5Y9axuJjbAUVUkUyEigKLoPG28zN6367rCy4cbdXrcR6WJTb67ujBjNkUXRsXYWhitTNDVmeYsYkzAjCTo4SGrMW",
  "key24": "4ZQ7qerib4EiecP7PNKq2PMVAC2YABwT7GmN2XpbXKJS1RUYrKYne9dWbtyPETBsMa2nPSwtmP4eG5EFJ6iJB7YV",
  "key25": "4BveD5cCsk3qQywrRgfCEKXYwiw9vC8VUSkMjHTHZYvX2zX7tFvcdLYmoSLAqm7iZULgoKjcFxsmtaKQTJ2dFffL",
  "key26": "zJrjFnQJrXbA1AeiRzQids2SuY4gm7ewq15mopz6JRvMTxMr5idWzaaPA7Zz7Ei2R1cue5k4JrSDNiiTuaQ35sM",
  "key27": "4AgHBFAMrGMsVmKLqbNViavukhuyobzeTS76w9RvhHBZ9f3TTE1VY2SH7EVpbiHzLXLhweFsYCmNZgWw81EGEH4A",
  "key28": "3WPFhCMC1K7YzgyAPC5GJ7FGHrPgJA4dJH2xnBGK1uNjfrjXvTR5GPJpAhDKxrz6nSbgWsNnFNbYBgn5uprzaBN3",
  "key29": "5pBXDQsbPQzmSGzvJws7YZcTAusMRSrAtfYV1BxNcZkk9yG59CoEfP34A8B8dmKAq49oBFCk7JWAp65V92ZVmm5Z",
  "key30": "3vYEhza8RWrTGCYrWniYSDqkpKqnFRSwJdeq785bUQs881wsQYqNxh2bP5Zcrr6hFxU2b4FedRqbXoSGXkfukaKH",
  "key31": "2ktCaDSfaaBcLf4nbdDK5imqR3tf34VV6V8JneLs9JjcwoEoSzEksGxfChU8c7DKNfkVr5fwr4VvE1kWANQ84x7U",
  "key32": "4ftvFDMrMB6PhJW4PpP5BUgeVKhUySz4daGY8VVziWt7RwqhhquJtsYbNdWcckBe3qAffMPJR9xhmmZkhyvHUM8Y",
  "key33": "5aA3BfNjAQ3aGNch8du2DQoWUAWX7JCKf5CsM2MHogYc6W7jQfpgbDKdJYpgWi8msQZU3NbVVPsUqcc3j2M8PjEk",
  "key34": "5GSkCcJsbHRkYbGC4AEBrQbJkdoGmhcpbbvMPtDkExpnbJi7zMHyNhGU51o6P1MKY1Jez21Uu7th4MDpttHdGhLu",
  "key35": "3kVggGUDzFJjHiNUHUGQvGnP8NbEUGzACVNceQWTPmEKs9FR8WkMZoTzCRvYCbWQajfMVBDMZH9N5TRTxjmpawsf",
  "key36": "3me7nz1PbciqMdgybHL2nzoXVq9RXxkktuxNWb9EMue2BwXdmqJzkTKrafKBKj9sBW9yZQ1nAAskyu8Q1fTCvSpR",
  "key37": "5YRox3m7m8GhLsq8H7MboZYx182WtdntAGoub2upHYUP8WXG74s8H6cDxnqkfoeisynC7HfZBCznG9qFJNw94jNS",
  "key38": "53K7GRGJfcxaGFHikjcHYC13pBgUaGW58MvHDgzXXwGSDH9aHyx9gvNT7y3jJ5DXzXhVcCrPjUrt9RZQLsX8mY1K",
  "key39": "34Nodz1M6EHVWaveZAQRCzgFkbTXdEDAHRb5kfmb3o67JDTnR5P2aCXJdMRihBCUjYX4gfkzH15GLc9crDDzM9Nj",
  "key40": "AYx5WUE1HfbGuVbPDAZArZXMEt42oWawSHCnAa8ZX19hg3CDbkeH1h2zj5MAJ7dj4WPzH1D2mWcXt6tspLLtWEU",
  "key41": "4Y2nppECh5jLS5ACFk3ydAXpVZWKD2jtiRaxhN557fRSp4ozNeYDDig8CW2VwrGGjwcohdYrVzAJRsc9qFJeUx7v",
  "key42": "2FNzwL9rkGusQw5HNG2W2EK5VMxkk6SeQqsHob4rujimFHUQtEuHjcm6GqXTMWWquoyY1RzFQ1VHXfhzjUUWvpnt",
  "key43": "Lpr6zBt5xwc4if7jSDGuGEeAfRQ1ALGjk6fdD8yAAkNFrVCoC4UcEKvdW1zYXj5kpwoNFYUk6LGj84SQWXJfuxv",
  "key44": "5nRnvAxuDH3aeBEs6XjJB3BWaCRwhagTPrsrESMaJabx92RvC2uKSQg6QZHqKq7hfZaXxJZk9L3Wu378QYzkXaeU",
  "key45": "HTxHQVwvDmgpBekBS9VhQyZQH8zJpQeJFiLB2s2jTaDqyzvkvYwz9fHs1BecNkfpj1nVQRchdo4k5bzFAgCBAEe"
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
