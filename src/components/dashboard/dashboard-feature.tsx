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
    "2ZL8jKzEfno5Mj72HiQuD2yxr215qdZvmjJa5qweBy4dGwozPszdouNhY8vpUWYsVC7hQrvXJJuEvSekUYFzyvfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hpnyh8Fk1tUR4woKBzCYQwqjgXWWYmxUVcAcex1vA628ExTPNy6NiWUpRTYgFQCeBEFZQYgvrBTxR323bxZg7rW",
  "key1": "2Tj6HXpU9hpXhuEG5F9qxtuvuRsKc9djCkLGugL8ajmdwL8tTuQsbVHnpKa34UiPm9MvEwt2zJgYZHXtEitoATah",
  "key2": "289dvDkRmewkAf1B8Qw7KSEfMiiiXGovyJUgGe1JJivUJvKmKb7mCdLMwaF679e46fshT1NHNyqDYmCZcKNroRBi",
  "key3": "4PJsbNZmaFodLLWyheXdU4wnyNrVzNt7wT2eyp9uK79mrgksuWsigzXtmY8NkFL14bwEBko3HqLADxgRgje8Qp9N",
  "key4": "ZWZBHKCgrYgx8dyCLjQLRkCcrfEeNo3quqMXvj6YQLQfJPFSJaEbEJRq2MJbVva7zyme7VCJhk3ZWyrkCSUacCV",
  "key5": "Ao6TVfJyLhb8Vr4yh6ZpGTjaeo7wdT96BguHxyDNcYmGXjxVM8z4dwNjD9yi9EN3WCaAUQMgsTtqcyLQWdBsUdT",
  "key6": "9QD2DvFcdq5qgtvoVi3pbtFufS4JtKfCeFsu6rNH3ukRnLwZkHx2QMSFM79n6XANwMn8DZarerPPGaGgiQCGZnM",
  "key7": "5CXroyTTK86gJ4n5g18JuLi3zyZnUfYGFpKvMbYGBmcN3Ahjz9sNUdYraSqkYm5xXjADVJcSo4LZsZ3hUhgwrneV",
  "key8": "2hUq34Cdv7JfHTXqacWDxhXRzL4Tfgsb99thMDi5K1WbSf27jV12SXXjJnQALqMZeyAgcGgBjJhYAMcJH82B1iX9",
  "key9": "254Pqi5GP5SoAn8xyWJKkgZWDXaYct6aj3XNwtQTTdq6RiyR2CC9fhyKxjPMnvLBWosBLDrvVbdueGhBhDJXsChF",
  "key10": "cLQdYbezbL9qYBrtmb2SnVZq9zKSdZfKQLhPMN4HYRcKxeswGEXne2MTdh1WAoM1EQFXHRsrHbX9gFbNymYoYbB",
  "key11": "38dQrtL4BYSfREErieAKvQ2mQWhnuwCcFMv4Ye69w9rNjafMPYDCDJgNcQUghAG4pRtie8VxnWfV8SqarHmP638y",
  "key12": "4Ld5bDhzeawHe3ZB7jgdMMJYveqoRfpchJpL9ptuWioBchZ5u5tfXBRqmDYGxX4WBd6hamkaRzhaKMxvH8fWAcK2",
  "key13": "9HUV89H3QrFJ98sgyFS6sXnyafmCBWCtxF7npyiP6EYMoucN69A4ZZuhRq3HS6UBNaxhFa6StN8oG3DminHuMfV",
  "key14": "371EjXWDVsBSoaBAA5NRbVzor81SHjCZPjGbUSxQ2ubUJEHfvzCT18uAnhwxgPfzpth7h21Dghop7RsbKoZNvoKA",
  "key15": "3Vpdat2qbnf2AeYer6KpVdEmtQXU6jjexVRrjmWHrVCSgXMPNr8yfupL9swYfWcnhB8GQe1G7hmu6okTHXqrToXX",
  "key16": "5ghLCteV1Qfw1QqJjstBpHifVtAeAWtsCK5nx4dP8ApD73sG9RmqaxsfZNKaoD6Sy9wBS3vfzJQfHWghtYddeeEY",
  "key17": "5X7UF7GXJaAq3JYmkKEkzWF21b5YMxnscNCzKsHwJNc6ARM1isw9Ev61VuYcWKfQzPXmxBZ8tCa4wBZ6JG3HKZsr",
  "key18": "kxSgc3CVwsDNjUV6ZpY7zBR4z6BvJoWUmEAKRd1sNJSsQQapabx3zx4YS6xNvoCBvrd8SsLxsr45ALJXirVEiWD",
  "key19": "55rQfi3zKoqm59U5PknzLHR7zzksQ7HL9DFQzHVHAxd4vmZESSmhWiryDT7y9ttrDXypY49c3x1yjipbfMQpUREN",
  "key20": "67BR8Sxe2hAcCmyMijcpm1cJLMfz2X2bqWPD35KkUsdXdKCkjLmvMhYBM8rpyFqZWKACFTVhQSsYeQcUimH8SJMG",
  "key21": "5XHFm2rikPbdzaNw8kwJVUkXnVmPivZqrPoFCdVXwUNoPcUHumSTZKTHVtmcQt9iR2xieEoeK4qTGWPvHXY43V5z",
  "key22": "2WKcPXnWtNT8QEkFpbAMigQXwQ58GqGc8mGC1gNn1LhuAcozeM3X6Btk6Li79K6uQwCgT6E8VgKvM2XeF3qyV1dw",
  "key23": "pA7jQw6QfrkNhvJGAdhHg5rN49qNKXiPP9mfPH1DjwKxaxze3AnzyqXeTQUm6hv8qm7qCxUySEKyxhGPWmTrETN",
  "key24": "2D4m8zWEongH16Eie9bRqbwNDwriFvDYVrRGr6D1Jcy9qGVS3NvamFdZV6KX4rP21iTvV5q17dFrFiRaXDNUe8Ew",
  "key25": "51CLMZPRwBQrwbq22b2J1Uw1ZwhdANu3wE8PQdivQEgbmfkKAKzAWF8m4Xi1WpSs4ZS2Z6crwPA96jwMy1wXL9s",
  "key26": "51wAHKh54ipcukkAb828BDzJqnsYGFJm6K12hAYSTLG7S4taYgSAxJ1T2bWnx9upzse6B6wVdhmugQx56A4LeLjx",
  "key27": "3FGANjyF9eCQZQFEiNuYFo3perXhnnCcyqgNCndykuJiBvoxT2yZSWyGXFY7cfpDM1vB6YFi8GfeWqyiZxX3LYLj",
  "key28": "3Ln7PBphCqSAcocHSTxyhSGJk5e1jW9iWAT29rBCJ7XZuERSvk8qsco2zn8chZYREfwLW4UGM262tvwdHa4ZjSV8",
  "key29": "3xw2v4M2d6HWq7PpUKaYTHUyzjWQBQdYMnPAp1Kidwoy54Qy4CxMdBfVYxmdiW6VvoBfHWmQr244aXBCWvJxwXJd",
  "key30": "3PBUNjfu6ygbCohBtxdjQniMKu43rF4fUjcLXwFZWjX49NpbSeKJ2f73qoPKjgpuxZzdKFTWHV5sL65xYbAz7tA3",
  "key31": "3Vhk3aTcdvg7gzTCAwtuN6oAqdShCgEvy2U4j56C5kiELoJwSidp9vHMBdaGuiWAkpWCR5TLg8wjPVEAC14vTudg",
  "key32": "249sEiCFcqwLv2kRqaiq2aWgR4UiZFhARzWsUHuae3ntQUQoYrCW6CRmDBDpvNLsXemaVTHqJBpghj5U4h2aiq1V",
  "key33": "2YtWyUzFJwWwBVW9VmHT9H35zaQLbkVZ5iAZra2Hcs3YGW5ytPrBNqR6NLtrLekoGDSAFXXW9gtHJLVwKnbJdUFC",
  "key34": "3VDvBCEMyXRYhTXUo927kMFNKAaJDvjUHyHLCcw1Jc4WdQ9wTpT76FshvUjGKNWSZfGLHbJbXJUG4LCYs1yGN5An",
  "key35": "4BuA4msUxSA9UyqF812VVmUGk4iKP4DpFQ8BgUiS9SqfWJzZjb1CHSxuZG1nH2Bmzven8jAYgs4bZr5QzJFrHBge",
  "key36": "26t8GdFWbp7KZNpsgc2PrhdznET2SWFs6ohAYSrcfby6YXPrTWwALEDciUbsCZqdPP8qjH9FT5N2LFoeGeDV7ytZ",
  "key37": "2ULHmGhmxvxfU4t7aAH3quzvwa19zAjTSw26M13Gg98N2sV5f3zsf8qwHfbD7BBabSBs7TWTa9EYVThpPzJy48Kw",
  "key38": "bCuMNnuehdNjMSJNmoUDhULdYLwQhGKzy6CbNmcbGtq3NxRKpuHD2GcfN2eMY78PaJx1wRFGQQgN5spSgoHhFH7",
  "key39": "56kFSrGHtTMeYba6gtJWpGJSGyAHsn38Gafu6f8DRrNpjzhHT4ermGQ8iiDYpATS5UEKNrqtMCH5j1N5NGsjVZn1",
  "key40": "ZYR6ouoWu7pg4D45SPQTH1xNwp7g9PsiZXGQ9G3cWkFCJNRNuhpDkDwKpAH9CKu7FRn7XMibZU4DyRyDbcJ4Xt6",
  "key41": "5NaQS8rR4xRMcP71fx7ZTBctH76aVEBQ9GxxnHR2Sup27PSVLCNCubPU6aKxWwmDxSwz12aBx6hwLamuGpn1JNCG",
  "key42": "442FuJLhbVsLcTm6W6pGumTXA258NXAKeT3QqVCFiQycuhSqKQfkPhyxqVfQ5Le7NYozy7mALgN7JgB7C8i67pMd",
  "key43": "5haSG8SnWArkXfNW3ByTLLm8ufJ9zXfZJGjE58m26HPCT3vh45bp6y94tcX9S6pf1qM39yZ6EJh4cV15NtBrmE5p",
  "key44": "Qn4E36evkyNLa9QgK5vGs1QbQ8VAce4rPLRPkSwFjaiPFPrrvYPqfQVnNYa9oNZhTH1CLTDg7Bt5tKq4mEXNbnk",
  "key45": "V5EPMCkekb4CfVbenRH6ZRkXiHM9HveTMBaRQEThDf7mwQcsDq5WUEBx4vDysjcdeHCM83ajEukPSY5eSWQucQd",
  "key46": "vK7cTQnFb9AHNf7D81kTBTZ3V251Zen2AoHjQv72xqanoPfLERpJFf9JUEQemj7PMfxszF8wsZvZjbGMzgy2Ncc",
  "key47": "4dTJcjfCgdjwP2SvhHLniFzKFZ4vN3pXFTZr85U6iWfKBVuBnQ26gmmspVEPGPt2YVKPV9YoQb8zZ64wp5zcaEew",
  "key48": "sztbUfMA2mTCfhBxjNYH7ESzsp5hTJgGf39Bn8BKDwL7wo261VhCXidJjvyfrcPYCTAQx5XHZgy2SUdBV3F2ENq"
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
