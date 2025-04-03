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
    "5Q8hAj418sjkhtVP5VVs99Yowv2r2yWt7PCnjAovVWDLYUvQwXKyzmpHAtTYHHEkjLbNVQMn7Pixy5Dn3Aspnbtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nNiZhH2j7oCaqK7FWH5EoF4zhS2zesSwQSQjfJU7FFkv8t7nM97Th81ZEwqwjYjW8URFff6HjHvYDHTBjTkP72Z",
  "key1": "3DrDgrwpz4Fyxk58Bbpb4SzKKfjhi1hPh4j2EB48po58gYnu5QZNVkhytMzSswsT3hLaZHiEWnBXX1gAZV3rWKQw",
  "key2": "3sXdXwE1DidxStGhdagrmtKaUszg8TS2j52Hhugweh5ie1EPfCFwRror8c7eShgkUwoC7dpwboeg6bEh5PK2XNhk",
  "key3": "3FCfMEcXDy4pLYwZ31H5x6UvhmifdsFVj8eVNwPEH1EzhW2Fn1AA2stDSVQ4BPmbx97SMZznfyKHcuEKutpY29hv",
  "key4": "2qTY2RERktDWRoLyNiVmbuqeNc8YwBNuRXKWbEfs14pZbXbYu7MbM3Zfm9Ukp7s4mVR1mUCwQE3dMxkKV2brHAeC",
  "key5": "EzPD6SDnJ6b8kV81JkhGqmBHSGXo7yZCRi97aGX6Efae27ue36JoXohtWtha2azPGvfzHXGnDYyZdFEWzrmAxeb",
  "key6": "2qic8PQoCUu5hxUSEYb92MCZcbgAbbk1H8yUEmwHog4ECGRYxAa6fiwwQWeLX7ZtdE92kJcQdSXQziQta6sF1eqK",
  "key7": "3wRyrmWTxNWNtCWDqeuFdFAGAkygpFpcb7dUyjYZUoeceTFEozevB2JmT43coKWaYPYsxHCBHVHXuqQxJSj7g2na",
  "key8": "1ufHeVVeueTwHUZm71Bm3AyggbZHtxJrRSsnHFa4mXJ15qBFMk9qmddu5uRFPXetCiWne63V7PeeYrUbwmQ46Ex",
  "key9": "QW2avDwpCL5EU6vfqRjqVuMMcPVJ9RALb9ph4S9vvsaCDQ1dLxZwVw5TJqVzW95jHUeFXmsGSurcjetnvVVGB6H",
  "key10": "48w3aqMRUS9TQXqXqyieZJSEAu2RZfTvAYvvpD5ndaU3DXXsAwJJBXttVBRNSQNJa7HQJTzrVxYE3VHcb4C9osah",
  "key11": "3pT9XS3Sj5CM6eUvyEdVH2c9fcovnJ8jY8bnR5pVSQ4jYn8K7EEdid6iNd1NauVVzHYEx4HcPyCqyCCwxJGQ8Eqy",
  "key12": "64YvsCuuLgEcHpd1hRKnFAXRzi3RVfPScbhWb5B1BKT7z8pDe5HgKCNRxPNKVTwMDrFzavc35oVK7y8ZvC4afwhX",
  "key13": "ERRnXrZDqeuUSaELHWQMMMi6LyXaGYSgS9MujWGsm3SWhwZaPxfUZdrGsVgThczJpbT9gXFV4SSLFcBy9d7U5yq",
  "key14": "2Gc8RuJMdhC5exf5JvJwTZfuxv3gCYdXV3w86kz9NmA5XvMqgiBdm8p2beKaxUjWBoUamJ26nwXmPYveWsPa7EFh",
  "key15": "59KAx6CGjWMa9wdTya6YMq9mxL9VGsr18bvw8XTXTiGu3biE4mLfuzsNyef6x9cVkvQT5RNrXj17qwtH2y6j75BL",
  "key16": "5qjjFjHsM4JCvTzTo29b1g45LRotxJvS7qx83GjkHs77mrcARdiatyf3G6Z9nwUEBfpge5Zo8DvsVTb6zUvFMPzL",
  "key17": "gCWDhB39bYoMo5ZQSt3jPAv3fhNkTbsKWgMXrfeN1MEqFtV1tDAEufPCDm19MmXFkA6e8Bh6euGhErnhRmA9DuK",
  "key18": "3r2hSrnMbLfhBixdtmSJnEfd1GZ3n4CioZceeK1x1MrokLZCtX91rK8WhsaWwZU6UY6UPAf8gviBvKiBnwqtmprv",
  "key19": "2NqsJhFRx1nyv6317d9JsRe4ZUGmzeXaWSG7sxnZJ9qp3AfhVcQKsfSeyNGLBQrSELR3ByDek2PubEmotmWaP8aL",
  "key20": "5VqDyMNBrC6aLDFuohVFmZ6ffS5ggcec9h2xWpAwZUQH8ctxVcKr7rhPuZnxL4TGjHTneh7MofpXtp3xtpQFm65r",
  "key21": "4f2238U5V1JCLKiShkH6UwnkDwAuqbKmKgwjrBvm5PPsCCH71awbcWtF6gLwMucw5aMXpM1QQFopU6HVCQRiPdsm",
  "key22": "418oz1rkHzbbjiksF7hthFocFRA5HDGYQr4K9J9cUZAKNYxHoXHX2Yo4tYrXzVoY99FT752ciCpk972ktcB8i2dh",
  "key23": "4bLcKnWa2Jj4KedtBJogC47nmRqW9zhRji5uWAbbJ3VLVFS4UWixmxKnoRfGgBjApnhowvn2xxvun3BNoNCdZuL1",
  "key24": "c8YDp66uGZW5iJJCfUQtYiDUwno8W52fuWNZQYNCQCLqeZwsG1GEHVcGu6UKcaoDqfFkYLXB39rq1KzCKCmpnP2",
  "key25": "5EwEPo6qu5a7LG8amKCd6korA4AWPN87UZazCanWNNW9VwGfGfNoRsxwmQ5L7fPMrkjJyckQhGW3Gweb8FjPuCBx",
  "key26": "2vYp2yupmCnj5jTmHqhDnicQ7zg4cdVG8dZQgu5Wzws7hJH9KGxRWocrTypwjMPJPvBLSoqsCuNkac4cGrnpP6sR",
  "key27": "37VMzhS3DyrH995zFaUFPAJANnNaHjTnrXqqazmwUsk6MoLebtPVmgwfXceTpgSi6J9owB21NutjoHKeY6QDCrrH",
  "key28": "4pCqaPPaBpRad3o7vYLYuQpsh1XKTF4CPCQRMUUyZ5SYoRK6gQmdpHCKNayFibdnASyRnXEycx72ZapP7uexG27q",
  "key29": "5YA7aZJVmXYwoKJjvrg2xcqNUTvCLv3Hrxdzr4SbKiJdwin5Dso8xBvhcxpYdvuNLifBBSH9Z8D64QzX8MHRS576",
  "key30": "5qM9858UKog7F8EguB1vE4W1nvC929KLgjT6RwLXdN3DXnoHezujRq1zBkbpFdtwUJyFHssxvyyFxBmS6LPCbMRQ",
  "key31": "4E4QERqTFiumsM2ihefK94NYuXXTgTCbkZ8XhaZrECkXNoawUupbjKEZKqLCZYVGDL5SaU2KK3Ex2DEBeEazSMGN",
  "key32": "2g2bvw8Nb6WYxhw5fz8rR1mjiET1VPjGWzfrPkSd5272ivGsVfgrrCG6ZDUpCc9LzuyEcZNtTBjRGshDnKHr5pu1",
  "key33": "31dtE7dqke9v9gZYvV4GDc4NcjkjcpXS7ZE31jARmg4nHMYNwURT5MJ1MVGDjfszaTH7SRgG26yjUbwBvm6kWCf6",
  "key34": "5avz34mNeM3jVh5S1YK252oQLBA7mTCtJMEqZAGJtsNv184rpsaRKkv1ZqzXrs3Rx1tqoTQEz4TPd5eYYA9SRrgR",
  "key35": "2dvthqJSdviZxnrd5mNxtwcUkBDr77s6gNgZon8E5kuFVVmvGZy3HLjGpoqoT7Ks5PUC9Mrg7VjKd6nMxz6BU89U",
  "key36": "25RfX4ZcaaTfxqnvZQPRmrruYhnWD1ANnWRy3SCgeRDaWdw68LzSp1GGsqS92g3ZuHF5X5JWWzQeM5nu7ZT2YNHP",
  "key37": "5CmDv2MpLjEUvY68Q8u19MizX9t2VbqqQvrRfcb91LkzoEfqgpTAwSBBVV7hQT5LRmZEvbe5ubR93VBfsY7b1u3Z",
  "key38": "4Po7Sbb4WYPCzNKuDcJso5Nwx4vFZtK3ft4XBzXVxhukaviWPbyG1YLGMdNdzg6RqF7SqJNiZNsQ1wv99LGVCpic",
  "key39": "4tuRGFotGxe47ApJMCB9KQMTPdwi4k1g2b5v29uQULGwP7EC1YgcLaMQKKBGkxPyeAfbEgR3wJp2L57R5dCA6get",
  "key40": "RorHNW1h245JJLTNEnq5tnPoyNerx29guvQYUsQPJ8Tc6AG5M2EFLgQhZQ5jPVjbf6wJ5gGMe4BAkKxBAyDWRmU",
  "key41": "3jJfHJW9AUevzvYobkf47jz7mvfLJhSHBEJ2v8edwm93jETYj7voZY9qvRivD5DNsMMpxqEHCjWQrt55kXoYPxou",
  "key42": "3qD7wuWV9ePigfEULUvMmW6nfKcubsyZ9CA5PF8ts8aHJQM72ijip6FPqvx8wJNu9fiQztceXnZJPsn8HB8w7i7J",
  "key43": "2ZJQDfubJoSDtThhfT7DmXTxR63KWPoH7s6Bo5kN61QA5UDUKJy8H8gr5vY5etsAVoTvZVSDXwcvgeK728ZRDGVU",
  "key44": "3xDjdkFsSVr311L47WMtCD5uegCr6di9zx5fK8E6SyFYpFp9eAHdeTmFsbSwAwgKtVjnDUYQWoSXdJ4LZ6MzdHB3",
  "key45": "5bdyaeoK1NvbKT6D2NN9KG8Nb4DdYfih2knhcbHKCJ1Vcnq1ZU9PBrGhwtWg4wDNQHsdaCeXxpxDetSE5moqcR27",
  "key46": "MntfEmnQium5x1vRhDy8uNAuKSdKcEkZkG3nheUuTUGc3CwVjoJ8F2sZmngdCFRTs8udzVPB1coChpreYnj8axD",
  "key47": "6BxUp4j3J8GxyVbVKZTGzKAekAgqJbjBqdc7oTGuRKJxya6bPQGqytWsq8U9N7djD8eTFAjv7aQmyYgytpk1CGg",
  "key48": "5kkUMv2QHhUCcYy1PMpkRA66FCpwve5VnjMuz1iHXaGvssZFhLvroYzUhx6MicwEfS7VbAL7sXKshBgK9EooPgy8"
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
