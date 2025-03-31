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
    "4LdG63YZuBnDxJiEVqR3GGbcxaumjSWs92us2rXiMEidYmfUC8Gw3FWpoaZSwGJmWnvotv8iJgLcCRN5UU1tqqou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hGJEJPZo2wNjYhnxKyfz8pGhC3XqqdKiRsSY9XaVdrPoHZdxP5kSr4vNjcVNgPzmQoC1juqxhu1dESidbRn49NX",
  "key1": "3BDYewrJwJNXJ7tQvsagkGYhCx6emfM9xRbNTHerYbemDy61BkTL21s2JJTcQbbWGFsRyRgXw9HR9ALRJFRjDPuB",
  "key2": "Z3MP642rW57fMagu1ARkNkJJmWzD7gpk7KBsaJEq9K1EGUbo5Byf7oKwabhENMyw6BazmnNHXxftTQeMkvEy4cx",
  "key3": "3hWj9WbV1L5E4cJdcydd5MpT6isojywA7h97EhrTHvZW64NArjmRzwAziLiYmJGPnW5jxWWLf2t4Q8PcTwe5vjem",
  "key4": "2qYcDph2QxCxBnhntTQiCjC2c8TBuKsYW9xJrRX8jZSCHCJX8VNnnSwUWxvepcJ2FueKwK27mFBXG22GeY72Qi6X",
  "key5": "5x9aL8zZz5WdyYXdTqCaXH1jAWH6JsnPzowggXUAMUHsZGMtzG57m9D3UH2xQwjGRryinCyVb9jXk9bxuBmQDJ5E",
  "key6": "5Ahk5SDUWcUpBY3zASUfbG81gNXjV32DRDkJSNGUsxcRDnYcKa7LFykj3j8i2KthQWfAuEvpTcrcP27ujkzaxpRw",
  "key7": "449CrYk6mF23XiWnXq8w4QNoMMVSfL3cnbSAUEudZX7Gh4oiGEWd2bRVdxoHDK8vWoXyRgrc99RnJZ94xSzt9QV2",
  "key8": "CaCBiT53nvCbcpUuGX4NNMw2fhnqGUmwfrYnKCBKzE3itV4jXDGWyrJHpn5snfBT7rHuR2H29eX85QZCFURHASv",
  "key9": "2Tg2sYq9jECodEHAUwAZ94GPYee7b7qauRL6dZBNgx1yzas4UdWrYKrJ69xTbfpqPDaczFofr76h3xbCimo8rCoJ",
  "key10": "2bMSVXG3xoa6tN4h22kRELRAXk2tAhpoHR4mpky3WyEAFH564hivovCYHWfEpCS81V5g6CiVz1gDXsMLfEAR6kSR",
  "key11": "2hg6N4WDm79JG7QSHVg83QmLQjWQymNKCyVQhJRend8bhZHMPkiymLX7eKjpUUmjD8KkGfCqnf2C3Xds4yQr3hXC",
  "key12": "3VGDbsSeBtijwBFmwK44S1X6rMBhHiVbJKB4dT1uJbMxVHPs1vr5vQ3deJqWg69C7g4Ga26rH9P9jMcMAmN1wLH",
  "key13": "fngw8DSre5zjMVS7Zij9WzvdpLjW3Gn61nWr7VqkseobRX3wzNJmj8bPbwu4Ctomc6bNAjxohdjH3p3eSbcBZxK",
  "key14": "KnJuTHCe8jfwiLUciVaqLs81tRLY3nnimQ45HS8he4e2wg66smmLezQFwbLP6jnK3UgA5AH14SThdJ6pw14dRmy",
  "key15": "4x9KR9jM1QRfA4C2V4HwMT6GT21Zvqh8HSarhS6Uhb5gmNGRA2mN2AJgevnYdWnbBFdFYdzuqENEDCyoW1N8zfq3",
  "key16": "2oGfxYdKYaAesN2qvqVZMDGXqXyPwT9gCfcxS4Ji1217UBejsbNFSWm9kddXKoKZLvXqRqM3gcgn6mYSnAg3KM7r",
  "key17": "4HEfnWYFsgvs1DXb8zG5ZPUhqhwCGbBoH4JGz41QHG77LcERrVVcvxJXs64FqJCtgLUQtCsNw8tSkAsThJLh9NUQ",
  "key18": "2oZuENCkFnjkGvC7dkFEZr7vCzqUwYb6B8rLmUrMbHYTkbm1KLB8jvpBeSVuSVvFeD7XPFiCHfk8rNGVjzRBxSRf",
  "key19": "4FXKG3KUeByLg3q67KUkWTuQzEhMUnb8VH2yY8m5XJ92bkNp1Zfv6K63nJKxLGKadXnrDHz2suAFSWgUNJcR3wQ3",
  "key20": "dPvaXq3LdL9exhYFyyKPpabfoWYCydpq1ZhNkZm7R1USL5Qn6enGgejWhgJRoWDrV7MiAwvCtWTfgQZZbEs2JLg",
  "key21": "2XsRFUii9uQXqxQ3dSuBCjVnSxvZeeTvNXxRrP2HiKEosmiD5Wu6yXBktFBpLCLGKK9jvLdPaxuCaFMrsdQu4uNm",
  "key22": "25hBVfNGexV4AqDP5khHnr5gK5g8CZohFXSkPwv61DFxWn3NBti9n3TvxkRacPPm75PompQJUHSrsaK7t6PH7TFK",
  "key23": "2ynYURkpns5RN4L9m5K39y2EymHUX1T4Kpa3T7uQrqcZkBwhvr5X7cEjSe9gFu9DsC7WZxLzRaC1nJYRJsXwpeL5",
  "key24": "4HF9imgKdbXRX8kXgybWSKEtHTKBeChFHcVT6U7agE3m4LuvP65YBLgSEpDcx7cBJP7zWRQxECtpT6VCNPaPF4n7",
  "key25": "4dHFgH1ZFrUAXWzrvDvC1j5SVMU3iaMPQLtJCQmPyxdfrbhAK1C69ti1riugbpcbmYY3TiERHbHSmaWCKVZMnKhD",
  "key26": "czpenuZjnjTrs7nLeZ2iwiMiyM54go9zVVNHkjQ5tub87f1zZPjUQfSQoKYkqMjUj6EbqWSg9dMhesVVPhZE7sL",
  "key27": "5qcwB9Q94DxkoqefiTqi1DvR9g13JmFbN6Fjw6a6ek9hoXtj9MsmEQpB62ToYDCMqFwzZQW8GN5kVEbvFkqxSLkJ",
  "key28": "2jYGQoEZnHGun5mT3Vc8F9az5u1QoVWGFNhv44VkRpDhLvpMnpXg5QnAq8nf3oFn3W7R94FgVv8pH3ABEswDj6jw",
  "key29": "3Vyk1avytnwnFF5FR3zHeNwKgoJumNHWbyMcJRxtsEzoDDjBXhbWdwiJCqtgNqfAdcMGWWgAxks7hF3kRbfYQDv4",
  "key30": "4yYpPP8d1fjhEWuR8S2pyL1eq1zWpoKrLvhFtNsnMhBjC378kHvHdDHJrHpXm9ZibF8kw1ryGtP2JmVbwqLa47vT",
  "key31": "588oMtV6eTQ3ZUK1DEqMsmrR8PU5xiJkhf7YVFo1BHQ29gd2pmaciXCFhAyFx82yE5uP6C54cbEWTD5FeEKBpd6K",
  "key32": "vmd8RBbmmqLXybjZD7KzMn9fNkZHqEEPGejNvSmQF7jAT1PXwX28gFUxXjAFDsXMJJrML56VzCKDWd2cU3rqrEe",
  "key33": "5dToEM5kv3aGg7tKbeMAuzVGEQe8tqGx9h3u6Hb6H2TL2Upwa2ZNKLQTvFZgxj5SY5y9HT3Q2pMm58P1PcjcTp33",
  "key34": "3LUxoEE9PiAp4QbwWV2zGySQvtDw1LTPLr4KPpmtcXGpV1VyVRFsRYLyMQ9BfXCYCChmu7vvV9QbMTFfsp94aBzL",
  "key35": "5ZStyeGW9Fexz9e2fiCj7zU7dvmVeD7usdytwZmvHBeyKhBZwpdosDh93cpTeABXNi5dnXoDp4TLNRAvjLMtdy9t",
  "key36": "2pP56i11wUt5GCu6mYFzQUVnSqQuwyuEs59cz4DQLzDxMge3bbSRTaJ3xPwQZopJvu4kuizkAe4wHWrFkJm5Hp4k",
  "key37": "598MnMrfgqxniMzAXRU6VwsLDWBxEeMZxea8NGZxv4T97sYsqHnMFQziGNwomuoB1e5iJTodWZjm9aKimGcNbqha",
  "key38": "CK7deNfxLx985nta4mPTfWimQXckffUb5uam7BTmCdD4De3F2dru1C7wztyjsmsvuUYtDhBjYAqH5jew3XAErF6",
  "key39": "23Z7D5oZ9EvySfbvRZHP5nS3YFS2P2VLxDYSjHEjYDMbtEnZLmotFBxdKWhaPBLBnSxVMh7q2kSAdfxnc13gi3ca",
  "key40": "5yhn3BKxD24JZP4qSBk99RUQiBSu7P3hJUWyPgw2VR2DNGjxKTCoaASR459215wVtyEziHUNQMXR1WmU8reAXFA3",
  "key41": "5kaBGzYqtkES9wGGKK5rH7BuizcJ3dxaeNSNEHY7JYkizja1LRNDaLGovEmpc2J4KS81K9xidTgkoECK18owy9MA",
  "key42": "4vjYhEwAvaEG6Ui8oQKBbNYeoC994bacD3hq7kpEoqUbkxkYZgtE67xrrzHZCB7VWKqsPpxubNTTHJC5QLPvTht7",
  "key43": "2gYzZ3hX7savPWYkZCNH8CFcYNxQoBW899YwDgicDWp7CPECeWaaorYC66RauW99pRDhrKN43Q4eCzGdgVY3pmHn",
  "key44": "213wXeemjr3XaR7BqzDsaZqVvFhkkV9aWvAgc15TZiWPizLTgVvb9QfpPWspaCFUGj7m33uWVD8wNbNKq7Tutov7",
  "key45": "2S9rDSnQby1sJiAjmDGnVyFLRZk3DLVgY6f8vUDwhoYjeuiurSUtJxD22qUZLkjjJ53a5mSYd7NWUTjXuN4CK16M",
  "key46": "2bNTkmWPYohNeajpAbp2wMvtJf5aB3MNgFUtWYya51yn7JP8mgy5sJf63jWbDucsRBQ8RB9xB61KczjAUPGSviEv",
  "key47": "4RTf41avYbw83uNKNooEvqe9yqjVC8xuMpivuGauCGCfanLXY7ofqmdHy9LDZNNKPvoqFAoFtZjdvAkXTRft8yrx"
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
