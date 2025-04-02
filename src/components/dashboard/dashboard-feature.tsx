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
    "62yuF3TNCp3Eh7ei1ZnzzuYBfSTsN6mGxHwaD5X2iD4fZEZ7UhWatpzGcjKPq6KZ8P1zNqzdKdgEFZZReq5Tp6vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64hjipFZ1zvVQb7qa2DTLKiGfRTdXvXUEpEMRPudo8QXRMWz1Jp8qETptXp5rjCdQpqY9z9q2g8TL5fZbysTr9uf",
  "key1": "n7qECQY5mbH1AhUVLS63Gkhyn98cZXhDwpyo7gSS4aqfRaA9rBh4EiY3k3DpNs63vaAYnF4NG9VftYe6VrP81Lh",
  "key2": "5L2XjW2whhEPiHFpRLLuxJJmmZQ5oyjswh1E9JxP1pwjZS1gWBT7rxPhsic3WnPJT6E3JUJehvomx6wCNze5z3Z6",
  "key3": "2yF1n6GymYuWhCG5Aawtm1kq6HKPUCFxTuYVFAJPwp2gqvwa4MJTh8W7nEEWF8H1pWYM3qhZRdiEeVeWE4cUZGQh",
  "key4": "2165cJXKttaNa2CGDv1q95yv5Q5wPK2F4eGUUJyHkooK2kjjSdDWNbtduBZvfseJkkyWeKzxGU4YiiPk595nCXzq",
  "key5": "44WixoD6MEXYYGojTkShW1vgNzT2xRRpenRwGKxBidhzVTtRTSVPxi5xeYPVFxJiXptJdgKH1aE2B91LJ7YXCU2L",
  "key6": "2mAXszrn3R2qMaCMrPCD6AS2vFVPJyw1FJukMJGuxbj9ZrbNpHnA2V9q1xCzMwCcLmn7NScZ8yDoJSRM4htKhUf8",
  "key7": "5e8US1KGGWHKVphQk8LThbHpxzq91C4RtZAJxPQ5MGHHPgbRSvf2y9Pnegt1JVUVeBHdkvsKpvHV4cMHmx4mVZsN",
  "key8": "5nuZL2TzAcBTikXJhMxRPmGdrTgAjoEpRd8JSaQJnc3vkd1SQF9Y917PTNdH2vSJrjYhZCZMRyTUJPq94Sbzdc6L",
  "key9": "A8vd5JtD3ihtE4rbopZEjjrhZgcMRCW4XP3cErbBV6JqWZsF7PSrGVuddHS1Vdk3rNbMFyPoYgVRsrFk4ZZDmHy",
  "key10": "5qzghDQ2PutQpr294kWHUK4kZ56VbJhS1pQzYJT9HVHE6NEXiNt3Ju1GAQJf3RcKWyvF2SV57dtAtnGAPzskxDUj",
  "key11": "4BVY5ATreDp1XfBoaGQX7P16KGBxexqa6Q7DnA3qbbGaDUco25Am8hMTKmCkmMNTAxvCHuH3JRfbCUpdXSC95ZxX",
  "key12": "41H5b2uxMzM9oVUxB3usFUGcJfqFL6rvPTFhZFgcRX4uNXBGvdmvQRjEJ9n7EzQPPeK3TXBCyzKiCyfeoDxDqkrh",
  "key13": "4hAeDgUpLZZ9h2odbz4CoMNk2Y7MQtxQpiEZKZs2VWSrX1nnDJvGq9Cho9D1G2EDEcAe7zge9U5CSFQGJq9JBGgF",
  "key14": "5Ez4ALVkq9Guore8tbvhftJxqwSzDXo6vU9XvHT4LuZ6nkhUaQmzCqUboheBWKFfzRaDiHdvP9c6CYGbxU7FrvW9",
  "key15": "4ADzH3nKs2mc9ebwWyT5ukpXppUciZBWpFR6Xp3E4cugCQMaeb8s1VPiRnXGkraFAcfKw33aC6y1Pffz35p5S6AA",
  "key16": "2Y17dLqigLfZ363AwBe2WFXtUV3HNPSJg7K3i2k892xpHQ5fJucwJaBRetgq7whQbDWqtgVt2KpwsP9f3wq2oFzs",
  "key17": "5TdfG2bJwfbRrJf1fv9L16BNQrVQLBP9PkdxAfXyZVSBpdU8XWwv6EZcbT7Yp5J9rzB8uqHghhB3fmYXxBqo2HEU",
  "key18": "4FokbqKskBc1VEeyecv4qobhfwbVbNPXtGpH8orWeY7KztMmR22Kk8ur9gFzgQZWWg5iycL7uV4rdXJ8HrdTx7zn",
  "key19": "2PmYFMxXrv4uoQWgPYBPHApZNhmyY5cYTMtdTe5VrzX6xBNrzobinyt4bBqnSfYFsXqMB2wjCvbS4Bb52stY82mB",
  "key20": "32Xos7nspMSPTB3CaHn3udDmkWJyv9gEzsqbUjkXHdLnNfxf7wgYBVednNTH7Jj22YLLg5e9qXAYGv7TfM5tBPJR",
  "key21": "5iP3DaUUvehtW9bpLske57mMQZogfbF5Jf48mVLHK7EKN1qye43Wtrkrx85wLutSePcxfr2D5kGcP1TMgYrnbwgE",
  "key22": "58BTMGk7sbtDpLv9wWERF7Amn4s5M9jH5iU3rT4xbiSRLYjr8FfdJRSekjAv4pb1D896ftEqTiww8gaoQGg2dzLM",
  "key23": "4d3Hjr9j9XAoguaH3TFVbXMyophxZMMgDHVFkM5adPRusSQEEZggryQ8kbwEZoi2PjVnq7jryJiMhQsrWGAYfXpY",
  "key24": "5ihBoEnUnxS7ZC1vyxrxYmoPrJQfKaVASeRnQ1SU7BMu58fXjp2EP4WezNueiXWyecpjQje12hBALNrgXjTYBgKo",
  "key25": "5efWNepngmEAPiVVdcTYNxH2uxYdRTutnB6fehGa3iH6tTE15zLUxr4D8qTjFMRcQgTJoB8fUKc5hED8UTK3TUZh",
  "key26": "5XxH6eeVjRRmWb51KBuAocDuMbneCaxfNDVMF6xnXzqBPNH3auEcNdrRvZbSpLeZgyrTwQ4iEg9RbKFZg8pVFLse",
  "key27": "3zLkGs5Cyn73Aphg3f1f6d7STDdBEhUfJWSepWYcPrhNBPRJZoY5EpMHDG1mnughGqGk1oq9wrZRgMB7UVJAQCKb",
  "key28": "tWBy1DRscgFgX1gBftU9fcNMErZ8SDxiChMTPCB2vtEjaPCLXRrzcumTXrmPLvLMRAERha7GKTWDRFW5ocaF27D",
  "key29": "536AAHWa6wa6CnFgW5tMaotZsvAvSUQEGEG21czZ7HqLeQACb6EMg4NrxNhiGTakLE2r75GZaRVVJFzhZvo2VpeS",
  "key30": "3cFaHTMH7hs515dm5d6yERfSE3MpLVfGM1yuYvFEzT3niN4SHjxS96wGXfagdoW5MBJ3AijSKhsLNeHVqApeGbV8",
  "key31": "5LB79xzp77jFmgo7XgEYo4GkXTiVLmZbXLsV115XbahBCy9AeMgXGEHHLquH88BbRerN4KyR3novZTscwetqBszn",
  "key32": "ojuMXWnSQizL8JRMj6etoQUF7fTRBGHLY36e1sEZdQq6HBXrNhkt95ZbQbYZKMaR651ziRhfjBs2snEiFP8FEkn",
  "key33": "4BSJJQMNBuXp9dPVAhnsx58kurLs3CbZcv6hqAprrYaehkDs17xajV9qkXPMNdVi1oLdrAQvc2Tj9fjZPWhoy28g",
  "key34": "cK3W9zn7DssKXGVE7AayH4vos5sNZZd3vDsSCzxqfNgkG49N6r1kRPnCDPwAUghiudSz1BJqtCDTybrgsnHpT7Y",
  "key35": "44i8tYSySY6f7ox7QHXTacPqfWNtAgJSkqE5BbS5PMyT4pAdou28GLA4L7HSS7myhMaqxiRgTAkXUS1gmR1xGJWp",
  "key36": "5j32ZKAwPgp6mXWWwpKMFwaCBRdcUAhecdXAANJAUfmXDGRpZyVsoJ9KYwJGVhaWyf4P9QPnXLHkfmWNdjpspdxx",
  "key37": "518goLRrCCUzKmEwPKpgVnfCn1wc1BHdAEU2S92qU3Zysret1z7CDDtnG4bwFo4yT62nNKyoYECo7RuJtRhbAUX4",
  "key38": "kk8tBsgfEbSKTVh3EZrKj8W2id3G7UHzN9kbDcL2HhYnbyzFhY672cx55trVy3UpmDp3GqjeRghbLrPbHHpnKN7",
  "key39": "58mk1AxvnYnLW6Rz4nZgH95cWw3gmCkteRJEQFEQx3Tv6wRqCSdXjWPSM5wFLSF3nkddV9wCL6stukBGsZ7RokDL",
  "key40": "Y1kbKRDT6xmbH3JVodHH4RwUKr6VgPqCKCwgrEcaBHoqUwNT1YvgnseQuPBB4P5Xp82GxHwBZKDekwZAb2kpARa",
  "key41": "5qXt47REcREbXmqDs1egySsEkZmBntNtPDhjbBnR3prdFzPYQs5ZM8GGWrkeVWyoLqFnYQYGi4X6d1dm6EBdWx1h",
  "key42": "39p2fAUrP4yDc4ya3x2Kn8uHyUmx8YjtB6trj2nv68ET7a3bUQxjAUa1Y2tUemRGgnrVRHYHWkid4t9cvKxnp559",
  "key43": "D7yDebBj8QUjVyzzmJpksrsYyCzt8P9SgWT9wYjdnNz8ifetnFEoL5PqaXi7P9ziWU4Qe6y8BkQSrCU7pSbCVFn",
  "key44": "2wh5dFjhLVVYPPRyEKY2qhFetjKmFdjyjjsKbH26cB1SgwsjzQPGhVYy2Sqxan53j7YgpnGLyG8dVuWNbpUuTZL3",
  "key45": "5M28efwdPLtZvCpg9iFzSYRyyCQC8RrqTMJzWMpTncqfrGa8cnvVtGVWZdvn8qeZvwrDwnikmMyGbNdcCLg6pn6X"
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
