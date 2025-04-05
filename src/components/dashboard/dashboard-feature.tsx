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
    "2VGgw5suM8ugMNy9Yx5SbVmcGMWHqtYJaq43g7JP6kGVhZ6ns83LdGcpui7gwMM2i3ztUbqP3gDgrsrC85HMidv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gpqFfdTPUDrZrRVzmdUFNhe3RR2PESM3k64UQyMTSw1UdXKfhCtSLi51tuLQCWaGtaSEd8R93DPmVXFMZLsf7CY",
  "key1": "LH51UzF9wLFHzeAba37a93p7G1BXjPoyH4f3J9jgGTbKadE31FRyekC2gjLyDvj2eBfymPYEE1SkcreNABJVEMs",
  "key2": "5yjpMjaTegCaVYuR2KskmF12jm8wc9BRkhaqEYifqAvhsvp9JThUadXJGGQbraCeqmhtyk6WFKzD9BvJpruBDfnk",
  "key3": "23k1p6vBsqmwtZvRmQ12AGYfoVPoMpSDnZvQJHK2RvcGFkVumW3SpMw95Zm7HVxy2jkPDgXyB9RAWUdAuvEm5xft",
  "key4": "36hqjNpvJCbasQTdPqPuWq2WkAwce5g9DMBcSmQ6yMvwPyWM3fVmwUiZgGiWKZpR2iLPyYQDa2dAVqyh8FMiiQsA",
  "key5": "5AdsdqmNXvE6rgC1ABxLrFK3n44XK1GfeMKfHr24pTe4awi6peeZa3jjpnExaL2gTAti9cNzFXXnMwgC17r871Uv",
  "key6": "5iFVY4zxMf2fcMDjGQBknfJtpQCRfqTMZCBW1BQa4RaHPuL5cZoZFT7TkG8zu5GY9wq8PxUHxx6kqVxavNKYcw6X",
  "key7": "AV4ZQu9RptiuL2KgHgKq2W5zXh1Y1ivfwMGkYDcgKAAJUjkBf1zsXF4AWg7poMjXyxcPjDtxQhjQpjPqzd7FPWD",
  "key8": "2fiP4x2V12TozgfumH96Fynt34XXjYGuXuqBPM5C6XYCsF693iNvUUuaPqoN4m5p8CmLriybmCu9xPEk7GX1WwMi",
  "key9": "5VQL9xXGxKhY3ggsUCraEcRqr9WE2pVWbyN9tfCBfjRbqFcxqYVgeKbmvu6Pq5vtEX7xRd9RqyrLj74mP733ENvs",
  "key10": "5HC1e5Fm8ri31rwmLfo9SDSTSf6fEHzcjDBTfBGF41RtFVj1sq8dkrYr34Rvpryz7EdsGiL9kyfXD4nrd5vJ2Y41",
  "key11": "2MUCPwK2TyRs9hhJeGPhph4DwyX9ZF6Q8zokmbeZAbZJNcysf2urrLo2TWAYSYTiKEBTwYqoyNA6fDscvjQAmhfr",
  "key12": "oZLjy3mYgBCHTX9Epi8CTd4ZMFmP3G4eMzDX22BDLYfR8M9ekWghw9qrxDC9RWSEjffvCCJpzG57GTKNTqxoVyt",
  "key13": "FWHHnVGzHFkr7vypf2CUouwjm6LRixXgroa6Sy8Z5L6KC1Syeu82TsK1GJ5EF8e7eBaqeZgeYvp9UKvmN8PwtCr",
  "key14": "4CcgDaDb3s3hvoM1V6aTX5LhbWX9Wptm1fnX8EyLRDPnBM71ZUnN873KscxFnFt2x4UDKkknChNoCGbQGryNPTqb",
  "key15": "31cJ22GSXLKKvmcYCsF5TCMhECiuMYzc4psWW8XFzME9m5h3oD6ecU8g6gYq9YpjUwvA7VU6jM7rDswr2DEerfAp",
  "key16": "2n6KzMXyrCFzLdBTVeZmfEpReCbf5djtNRnZFDq4Jmt9GhaE76XcaYDoSj4Ef1npmtTbWR69pV1DVLUzaR3UVTNw",
  "key17": "5ichPH8Fvo5TU7H3UgUpApMHDyaSUaUAakCytfM7h1KeBhLecszomyRaxV9KyChQ5XZ1mfUZ1HorZU7jUMHuwrgN",
  "key18": "2m7NdC9H19bCQxtpChoNRBkQ5Ps22Ex893eXKcMDvRmKGzoxnj1MjQC24GwdFRrc9ooKZbTpR3XrBRmpP62RrwwX",
  "key19": "2MjyGwTWpBxJgKvsLq7HaccGVP7pZJbbKkA6dTmRrogwPVhFyvVzDvkGzAG7D37H1xVgjsyed5m25RFxh5PEkYJW",
  "key20": "2csVrmC117c7WRAdbzzJ3mjwafiiEQYEJiir7vWM9YcRR415zfXdhEAeR5jX7XgXybtGF6BBdan2VbMZLX1JZVbH",
  "key21": "42DCac8uuCPUiHpkACoDK74g9JhcDigdBXxRo8poUB2fTtaBAKu9Zeu2L73oxJTUrXmiQo8C1RUyXn3vVcjct2nu",
  "key22": "oSCjepBGFExPteGgZsTP5PyucvuVTP9E4aQswFTRmHHNA3cvjLxK3swhmqG6as8MsmtoRb7vGGjpeAhVisH5Ucx",
  "key23": "63vWevhVajsD6HXSJvtcg87eytEzWrN57iteuKKtZPAFDVpHvgS3u6ZwnncpA9Z6YqfyRdyfQq8proynpS7ypBAY",
  "key24": "LvZ61TNvxEVzN8sFyedCPZEJTZoup8M751PpnwbPuaH6c3Qe4GYHYo5NqRQ2hzygccnFtGih1kxitfcAVNME9e6",
  "key25": "v3PQDjkUZN6CkvW4AHostSUuNS1JM3fkPADrgrvjrHa73RCaLm9McfsT9PK9YGKUc1xTNmAMnwskmnBWXNNj5jz",
  "key26": "4wMRxC3sEi1WnGRNBQCdnK2TJZhmnf5fQdswG2vZHR19MG62WXy9DTeaCNgYguJ54fCPHrvAxodLUJkWvdg6vSKc",
  "key27": "36KvU1MGaDwmNbrmgyoR5KTKgKTR4QMzLGGyiT9XT5pmYvSHdHKKDJTWHfuvfECQwQ6aWqxcaSRjCqtPB2CAwjDy",
  "key28": "5xBye7choLmHzhHBkHr1upkPyzHrfdk8Mz2ogHmqrZaDwPXZ7jWKypumhyT1ce8RmvTCotBBnirS5LYGh6n7DGLV",
  "key29": "3DJoLKVY8dkd3PjcTtrSK9uUpRHpntmiBszzgEtmTqGTvEY19GCB49BAL9882eRXJw3f3WsfswfcEPEN1fmzJcBq",
  "key30": "4hcZx6FTfXWgM8oo2ifGGgMsToVJ6LWKo46Q7NA9ABdx98BtGu5Nc7mHSvRdxKAoXk43LnEGYUSKKXYpk9x4ok9m",
  "key31": "3Vg35GbXsE6C3HxJ5iXyoVwwbAQk2h5tUaoZrfj1SXq48y5WMT8GrctmVGgoh6cpWkVh3RPcEe33vwfKAbMWe8SY",
  "key32": "VqouTngft1viszBtdEAkznV1GpqjkqGE4TfFsSWExmGheFFBgqdN62gjLsU8JXmch6RdcgkRLLA98ukvzF6CA5o",
  "key33": "3t3wpCkKwhWkG4yomah4uRnhEY2JEZyCaMzVvg98tnwxa7BgeRU84MuFoak18kugpGLB7r3aJn1KXA88iZjaU11C",
  "key34": "LjLGCF4Z7fcR6ZMJUGTPJ1UnGfQdEoZ34oJAYpasesnY6TPtEvzrYFY75DwzWwkZZa277SmVhayVY56ykB6xzfG",
  "key35": "46Ta5o7r7fpUYgcqRrCLgXrJsn9JEyeMpDc6SrbUB2CBgs5ThQJCN9hfe1EhL6JZM3Syn7GB5c6Zk6DR34WcajyX",
  "key36": "3XURRJg7uxqWGbTKDTk4P1gzSYGneckxSvpCfu5DgAvwSBBuM1Wmvu1CBDcmyqzGM4vK5vCskmGyd1w2uF1JmBiw",
  "key37": "2tp1fEuqN62ZvLDQRUScZm3x96cKHDCWyVg1Ra9ggMkY8KkHrgmkrerrcx8PEC6rKGjHStzzV2NjtCQLtuMBMVkT",
  "key38": "4XKrkfZB1KSUuy1ZxVqWD3k9Qumh8V2zMfcXCbtoejEC7gCkaiZ8Ury9gPxbkNCwyamWVC99pQAQWh78K45VobTP",
  "key39": "2GFotKQd1mUgZdjhUZxxREfeeaoRMDgDdcwv2fwUECGLFy6iPAS1GgR8Y2TWxkYNiJYvMZ1G2Kbz1ENHapYp7eLY"
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
