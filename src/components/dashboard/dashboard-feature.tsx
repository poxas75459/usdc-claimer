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
    "5G1mRqxNeq9uVG4qiVXJ6kf586Xw4g6dvNo92YFGHfr5Xu87o42LGWHk1DHBEWiYR9b8VMPg4p5wLDznsNX3h4Rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DPGi7WbffSwnjeRj6GiDgKQ53LPWXAG2YZa7zgjbPHLbUgMpeXiWYmuQbTVkewLEE38vGRcKoAFdwaBRcm2qKNM",
  "key1": "6YHN5Fe5HRhXNgPzrENka5VxUBhkDDhMo38hBtKnsPEad82KucWBFLJCjhVxjVpytgFMQ66CYMRm4DwBfbyeCST",
  "key2": "5hCjsAZjauiUeNLsf1s1TB64exp8iGNdmu8VCH6JnQyb3sJYq3cDumok8tKu26sSYgJkFotwMvu5WRkntDGgrASa",
  "key3": "3RrNeqyJKuvABoFJvh2TFK5nwpdjdtHJonsiRNNutwaVmoLgAJUEfGdWW8ZiV8id16ixzy7pD55184yMfP8fu7GR",
  "key4": "kE4n3yvArrwSBoFf2yddPgxA7fosobyeTUn5smghxjXGh9pkX2bCm6Nr3szXR8zb9YJhK98V9581MUsXazsGtcF",
  "key5": "3Laj9NnjnbhnGzsQP1HgVcT33CQijUf9vkyAusCEQgAfTggaUVGZMZ6NuAza7sy3hVFn2xCV2o7YtF4zYVL3ySnj",
  "key6": "2D1eN5yhwbiNFGqPGDuRoP5Y6PV46Utw8J57RmGr2RbnFgAGwZscBEdNZZZ7uDeW6q737EZBuFvGq8weQTJ5q6wK",
  "key7": "2aQYVkbboz9yZG7Y19X5CoGb1TvtHd4KV1pNGJRsEH5RD5JsfY27ktsf7s33E3skUaVzVfgdWyMpddJJaFC5UbrZ",
  "key8": "5ZDKzVVUZ6eoZpkSbc7X8grAMBWB9LJMvVGxzyX9UsDBgY186MMyBw4P2hfXe6bVmQAxuLamj1c1vu75JCMDrvgF",
  "key9": "3Vh7gqd7U7yJ1Wy5nAtdH1Lz48S15ezdrz8bfTyc34TAxicxbm9zqkgkPNmJyBhcAFFKpaog5WSENqjsbsuShvhd",
  "key10": "65g98g82hWHkDhBpDbXQU1xScedP6FqU75NoZXFbkCm1W3ye3mSae8fMdup9BXJii2uUYVmPqPecC6UDY63h8CKM",
  "key11": "5TLY2GeqmNVY5pg9SQz89XfK3RLQnuoPqRfuMYAHGhjoBFSPkEujDu8VfSUCJot8KDMyQgx1x71Wso3udwiJ52qL",
  "key12": "4ZMRnsXo5acSDXDUaRCNpJhD1EPHSXckYeUpPnSpiTPaC54hmfZHS1JNG56VZ5ftsi2Cwfqv6nMiiuG86GB32936",
  "key13": "5Ftth6wLRQB7MwuhUKqLNZWBwpn6zMWVvjj8wFH98VPGkXgW1aWk6ERTrEtrAkmH38aEGEDEPHvdkDmePgoQZNyd",
  "key14": "3B4sQhjxiAyWUeS4buwGQtBnfbRoYtH8UXDF1jR8NDJmLbqwXUPXSTrXt88aGXizRho3fxF172mK4jPySt29j1jf",
  "key15": "ybBro1PoG4ft3RJKCYRqGh35rcXA4qdRsgah7rwL4rniPtLDGbhxCfTnRekrj1H2F4a88RozetnfMT2urdjQqS8",
  "key16": "5nzA2C1RkZQysnoFCvzKbQ3k51TFTRxKQwWsFzzr6gT4Rk4ruNGjgbJLucWvREx1stDwnSbGzW6reFFQu9Sib2oZ",
  "key17": "3gmrDsU5UJPSfufQK63ivqHZ9CugX5K9oKRB4xoxuUCNsVMwiGa2FiX2TXgoVsgB1AUVKpPL52Qy8am8fT7TsxSH",
  "key18": "gVh4Kg67tvCwuy3ijycgdcSiJ1bV8u2ngQmzvwgDa3Co49rARZortJ4pUeD8KCwmgvvHrjwc9ynfaCmvtdot6xt",
  "key19": "3g4E8FXjpv5bLhVC8uqQCn94DWmt9g8QA6S7HhYcAchDtGojV8EPg4oMFLGWRUa6Hhw24sPZT4mFf5Br91tvmPUu",
  "key20": "4M95HTNMZTLJoJLW2SiqpkrXonzTXWA7rHPM4GoTpQ3V227qQ2APBi62DpwWkCJPzZ4xkXbeTTVkVe1WtUNhRKFe",
  "key21": "kmNJxLWEJH3DnBReFvpicAqoXBQgitusd4vjtsP73ZhrX8PZkLaAeLF132wtoHev6cU1xxx68XADsPomFc6WbU4",
  "key22": "mpaAktWfk8WaBWx4giEo3YpLhCsgp8ZmKbUXG2s7Do7nvaFg9hSekTeyQMFqBtA1qWi7SXWwVssYEBFrxCctttK",
  "key23": "4vBWiva36AWZkHB7boVsPy2XJ8P74PjUokVS9h5n9Xd351rzH75qNzT7tMfNxBHGfKVtZ5e83QwVkFCabkSq8QHi",
  "key24": "3H35jCAP9F7LfvewquDvLa6GQLuNzeYjy8VUVECaGNjF9C8n4aVq4iS2aUiVXegMRqZw3vEfW64PYqtorA4jnvuf",
  "key25": "5b7qTyySevgbkT9urawxwTk1M5nyCnBryFz2ZgrKU1hzjKk7BktEspysA2Wvpo1UXgSqCPos4VKL42M4PZVLmVu7",
  "key26": "w2YNYUqNuaGYXsd94iG4jcDC4dTdMopbv8F8mBzCb2NryzKXiqGYpVYLSJS4B3W6AFVAAU8i7ysDErq6NvKukUZ",
  "key27": "3Kdoxx2aeqWiMYeSCJodzMJzZdgcdWMB3YZsCk2jYHY66ZjoRSELzp47BGT43kqSwUHnZVyKvPHXQNgvg1vQGWS3",
  "key28": "3ejSkHjwm9X1SKy3VKXrgfzo6RqvLtn2zNjZe56cV5hTDZMks9DzpJNPoYgbmZHS3sSviNydqXnWxm7w4S2jr4WY",
  "key29": "5Qd4areKUQKkkXo9B7vShFPXX6Thdoa8h8xwutGbSfn46LCRLzQ5kgSTdkrrvH6zZ3YBPWsGF8eAHGq71DnmPK6L",
  "key30": "5hY4c3sNQi3uHeLvenFZkxyyPcpN8D1gumevJER4QmbYxVmgNp6G6GW6y5ywWmY4Lj7Vnzcrb3JtjjN7p8oLhLoF",
  "key31": "e7PGgEKaWAvyWnSpJWxA7Fsac4EpkAQuyKiiJF8oc3rywoiDWrnecr2Z93Rt3Y7KgXSncMMPWUALDt8Ccni6sX5",
  "key32": "3AwQbfruwcURgFvCZBh6ViaoEZwfvziQKxKZwTYXrSWmnv7ZR4Yz1gfRjyyudUaZavvdu9iv2v2gNsN8s9uMUWgx",
  "key33": "5k3xZdkpoSwZVSdiMh2BkXsYDtwf2PGaSKr8EQ7XGVEuHM1QY69ZU9Gtw9M3JonLfB1wm97PW6TQ9nyaGRoBhuSL",
  "key34": "5eRGnMRKz1FmTxucaRuWZYg6DBLDGFdCVDh3sQVKKJkkM7xekHdGBwo9hGqVZMbA2MFKnrRQieTa9WCCPKuUAPvs",
  "key35": "3E6pjemD2bB26QopMxamkBZyCJDYpqx8c8rjBJoUzLeLTMWem9TVX7A4R7oHsH5EuekXwpniShHaPbEDiaoMDc6v",
  "key36": "sNH6vPiz2L72rbFDtHDU64cHUNV23ysHioufqnfynBzbaRyEw3pjxMxF91mxorPZ3ntyoiQtABhBqi9XYUuWDxb",
  "key37": "2XvpVczksAHLAqMMuwog68PhBmvH5e7TXUMghDmWoWsRx4s6ft9MEKK8n2ZGB9VeaNXWzKxFr5ckJSpCkFUhfd82",
  "key38": "5yxupvBRrzBPUqzsBmX8kaQuZhpb81g9gpeUpHmp7mW19x7pEncWyVjqtdzY568o9KeeXUk3YDPmonEe3G2W69T4",
  "key39": "4C9p7TwNtywcGmeMCjPPZEFE2txPtexXEerRZohvf9cMh2zd8MeLTPsJ3r3xzvgrTvCUeCCffnTEvQqhLyAyHkBm",
  "key40": "F4FYSXmgXiaWE7qmBhNDMJuwNPWG8ahLUydWV24Mk2k9bUM931tHX6BwGWTuoDD9tWUu1pztWh21Pd32zyCNuu9"
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
