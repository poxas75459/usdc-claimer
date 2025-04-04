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
    "44CxtS6qQHHD2g8hP4Fx7n7MH1cFumn8ReEwHWZbUMivnkbW7u639Ae7FJa1BVUW3HHWeNyR32twQQKpmKUerWVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cvXHo8ubVTjqiHfMM7kQaP1k2PEUsriYTCJRwqsNmurn7mTvzEU47FisMcEDcFRLQSyLzTunUv7KnndsttrEe14",
  "key1": "b91qv2CNt8j23sj4obfSy5A5grJShkQvdgDqezwMwnqJNFxuQtc9fGeAWobX8FBqpq5mHbUCELPVTH4S5h2jZ5Z",
  "key2": "3kfFPSdsn37QViKXP1m2e26YmVyFzM7qAE9mWoUpaDPuQCiXQyhhxUzX7wZDXVgJ2yQAJePR5b5HRa4SBqVsuUrv",
  "key3": "24eLNc5Wx5GZ9ZztWcZU3BNWGS5TBuR7JbNKpYC7iQfNzDR3g98J7qTiHm2pHiBUHzX8Dfa3eLjGS5r831Gf3kjK",
  "key4": "24iACc7cQdxXNXFyT3WjbAQZY6rhv2SLecEcXFfgvxCeWTBT1ZX7DJoXVvGeXbrFdq7cJp2mYHJhVNWVhk1d231a",
  "key5": "4u2apbsBXXuHyaZc3cgXLywLSNmb9txTQUB8SKZRUcifnE6xXHhR7hxJxqThqZ6kdfAh1PGzRDAJGKow4S3F4iqA",
  "key6": "35gPLtBUp78Skqg7QkWu57DmjJrPoCArTahSKhpfS7LX8YrNxedHV91K9kb3uNaooQVVrJBdVWXnYJQpePjQ8jdF",
  "key7": "4zHP4kgLUkwdpnEE8gMWovH4q9DjSypEYu1ufjTT67YFJPu1BLUHB1XS9fan3XYyNH5BsRdN2jqVqo7Na3EkhZ5V",
  "key8": "4p9uQtsCpFaeUxbk2n1CQjtqy89qZBHapzaA3YsnsLHsfXWDeYnGTpr8eEFTjAZ4fdwzZb6kPdePMoZx3zYJ9mCh",
  "key9": "2i6Hqe1GXr4fWfHKeunjQVZ2SyBMP4J9a1WQR6hkWkyfgy72z3teVMfK2tJ9KHBm4JYTZu58dAs8ju4NNjPWvdYY",
  "key10": "3fb73Ac6a8Yvk5rUEiLFvZiBff1ubt3TzYwfmN7RX4PhNFBNK7uRAUAeTYYT4QLF7AKpsei3hQHsKESapWqL1J1n",
  "key11": "RHenrGzRCqPdWiUBREBr6rwBvPSYgZf2KhSFz68LLLHWiw2g1hWrFb2J4Cmg5DsXvt8Rhctfmgmhtzgmzim3ode",
  "key12": "dLf4iH3J2YfHewC3uWUfpCGkyC6WDmibURj2t5gZJg1AJjF9eUc55FXQggMNwCxoK988pv6SbZJUE6NPQm7wEi2",
  "key13": "5KWybwAmn9RpyTeu716zfbFuFJsfow5SipBgXi8AgCTFnUuR9KfJCrLHvcmV1KNUzDSLs8LLkgZgRpFvkSScVJhs",
  "key14": "pzZDuXaCGfXxCQLX1pwvhies5Ayys6cphDbjWhWytPUgQTiaXGg4Xjk4raw2nZsWGFwdqGutBiF46EH5P4xtugM",
  "key15": "5rJ3c1Le3ftkTqxKMpKR6MC3D2uw93VRgn7xMkCDijFYpPH1sJqi1TgY97X33ApFhh6vVNyXTMzY4CjoHwHCAJHx",
  "key16": "4xvC16mWREer3ZfRVzLHk42H2aN3Y86tuAzN2YnrNKFcgwMK2u8j62YJ9spnTpxsUnizGmY8qXSa3mxEYqQR9cHV",
  "key17": "5uz5C5nu37ekcNVzLUoWh5BATE6o211oTpQV1xHet2LbXcifLMmuyeFj6nVsoREitSefFoDrNpXFaY6awtTDHqB1",
  "key18": "2Mc3K5DTKk77mShx2AcfA66cm1A4io5JGRMsGGK8D1izcxKxgoW9QAk9rrCgZFRj4TdJZ1RJ8GqKA5zSphXSYGDB",
  "key19": "2tD8kpZD5uroEQtQ6icampc7QMEeUv8KjnZtWBit1erLK1SspWCyvmma3j9nAFDYzGsZkuiusK8oCgNMhWsBnB1b",
  "key20": "5NdqZnrt6hn55PZrJd1ZUkGYpGKN2YweyCS4Jp4qUf5RWbMhau23sgpkdP4nYLH3jF8VHLP3FC5KoKyggqCZpsRu",
  "key21": "4j9PYvfajwLS3j2zG2M1S7wc1DptfJeBmX4nighe7zUjxvx4YyT4Duh9puSoyMaP1bCRNPxwwCoqBJG3NAX6bHbT",
  "key22": "2UYwZNKoLzruqgSvfEqe8Cj7oQgFA6uv1Mq4KyVX58nWchoikqdjevtXBsLRLctAtL5pzivaQWRZJdUYNy3fFcgK",
  "key23": "52WAiiBw5fKVmnP4bJ6zMR94RcJKbF4hbw5SmtSTH1qUScfqihQW3QsoTUyUs3qeMZuSwwhCqpRc1VEz96V4JVrZ",
  "key24": "3hqvye26AJUKR8Gw7A4jsnwBqJF6rp38Kwru5Z2TpJ55L1gYBJoQY89t2Q6otnePs2qMGeby1W3RRcMzGh8ULkTE",
  "key25": "373oJ1kWu5xo8XGZ4ZG2pkLY2LY4LbrjNyVvRiQvs5PxXhCcEX46pD7dH4MEKktQggB1L7msYzsveoh2rbdXrx4c",
  "key26": "5HytJLRMR88TRccZqZvTFhE6YQ8YKh93im2Guegk9YbY4QtRKegXUH2kkgWZiV52zE9QUybXCzfeDHz1YEB3Hnwo",
  "key27": "56DtdAvAfy6ftDdy9yRduCmfgwvQWbtdQPwjD5KFeZ4NreCakgEfVNvcxPFjXQbqcbWt5n1RCGXEoBJorTW4WSTQ",
  "key28": "3KcA2Ti4Ns3sWCZ29ox7hah8TzxEjzYfD728Cf6xesDU3bHRFLruKk9FVwhgkPM83YfdmCdaGR71XVVTw9hDcQC2",
  "key29": "qkKAdzog7EhoFRstBXsfFKixUqVA5VZTWdsiUvhDJab4W6JLrbDKYRhCzB78aYwM15Enf4p2jhALrfzZNd4DimJ",
  "key30": "425hv2Mjonen1CKNoNA2LMBS8LGxTWVHcusrt4r9Xr1e44qR3PcABZvtXj5ei24HcFuj6vA7fQCBonhmTZKKZKBh",
  "key31": "3QwjmanLcowu9zNsAWWmSaGJykevcw821PiRSzVVSq9cKvMS1xRRiiUPp2j9sKLQhbT71hcBRdbCjizZj5zV223e",
  "key32": "249tT726fydGJEG1BHEfwQytPYojyzWiDxnkzJUWH5TnxrzKnxtBrtcXpLkJpxyKj1DVegz2fBNZoV5S1FKAMUZ8",
  "key33": "4UxL5L9AqtgF5Tsp4KgWRpDNMdw3B9bhvrrwgKTAHMpiKjHPvXk2eyktYXSpGMtNtYJ3ZQdV6cVtmLs63wXDUS8f",
  "key34": "vax7g4dvrq8s2WSexdgvLm8zUKYGZQLdPcvwgGfRQzmFUeQhJ9HvekBCGWGEo99RDieWP8Z6QDAEt6213f4hX26",
  "key35": "5aNQGEqHFoF8cSexkwHmZeVV6cH7W7Z8XqrVvor2wmdY9Qgceo3sHTp8CSKKAwt2bYZAyuuQvFGyL9DwyGYrD1PY",
  "key36": "sZ192Lvtvayg6gVpFQAJZbVTLjANgqQ4uqhtNt7i3yT8MGuu28ongS4GzHQNYuyzRBQMFnJ7rWdKMHgoWWATaCv",
  "key37": "3aHxtg71nc8SDxcwLWqNkLMpRZhU4U1HQdRdiU88b7YLoRyyJP6gX9trH6DCB1v7r6aSsXbtZ4xsHXgLRBMzdTcv",
  "key38": "5NWUrLkkbocbNENYGShMD8ZsgpWNejr8N1X4WSgzVMuZHVsjti4bVtnc8NBa2oRhZYqS1HDtFAETmtxeopJCHBgC",
  "key39": "21kLLMPRdqrbNYcaqLv8AtEpEXSKUxz4TrTCSKB34EEBWAX7zayAZigKXTxxTuUws4hoiAWUidkhDmhtqkcs7Ys6",
  "key40": "64qrTcBuPafrY42GSEF4dVscM4w7b6HuZeKKHue7yqrweB6AGav2PoLxEkHod2bX1tT7mbF6aveW6Sz7Mp29fxbx",
  "key41": "5uAtt4Y4uBPBeSFzxJRSZHpahgsdt9zNLfhLZmhbmRVFVpEbLDphtLYiFXWhNEpiUAvFHuKSEUF12gpUjUin6q4r",
  "key42": "5U7YAaYg8KZJ2pMN19af5Qt1To7Wysrg5KG2sefFxmGcuSV7Xdb6mgD2fEV4YLERJWSLsvapA46LAh4oz8hE3jBd",
  "key43": "5SwZJY2f6qiRTfxxKZgbEv7Vhxi9rFf8DsMDNPiqVyvTy5EfWeZZwcqkK8qY9WPw15EUQvtQXCjnzYbzd5pZyWgB",
  "key44": "5qwvh9BprsSf1EzVRBuaujxZ23zcdfYR6tkpyxircrUEXgwa86L28uirKYPQNVq1DnNtNu7tih2aPkCCRnNU5sL",
  "key45": "3qsvUHW6V1a3nEnGFGav9vqTUU5kbXyos8HwMH9ULYGCRKioabERJG7Jx3kadt7C3Zw7RYuG48Nd2SQ2kNPidL7S",
  "key46": "2ycwDKxg9vNnNXZFyWofqevBrV4vqEFaZYSViHDX1eGa9ZXnsb1Wyv8M6jZDH68GdF7EZSk4fYzonp436aGNMhjA",
  "key47": "MkDgp3ej1AimExswCWgvrQHosAMzYdEUPyzZ96ttdSZ11g9F2Fs1JHfbKsavQqHhNSJbfKnNotAt5NtqKvTQJv3",
  "key48": "3FzjWJ7vLxexYsCWmPBsNCy2NHppfB1sbzGzUwwHThV9udiFiCjWwuchYhmzZMk1Babxpp1tXYMH2sRCsUhYfv28"
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
