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
    "5DbW1WCtZdBXZK1nU6GeZ2Yp3SSXtiXRrHQn7eSaiFFNX2x8phpFAoR3APPFEL61jrri5gPKqjFDKAnR6U8ZTbW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UewvSh8J8qJp4DKBT8FiSWRk9MKL6BoWzUDdMNMnrtjLj8GpEhwhnH1q7bz1YTtjBNNvWdo3YbhZzrc7CK8rio4",
  "key1": "3133n7AwhS6qLMzr8Xk15GdH9EXcdjPu4rJuNcxZRcVf8jKzFSiQwceuWMSqUuYF4nFMF67goq582nKBBMjwVoF6",
  "key2": "AN4pSXfPJEKydh7tuQ7ug9KTLhv6k5xvb4aSDA9kWd2vuyyKQ1bwGzKJ7mTKzgoM8FTRdG5Mi2pRcvhhSd8oJ9J",
  "key3": "3BdkRHFboLTQpb1VL9K5D3G1pdKAVSUMeDigL82nWbgKB1HufDUGxzwDbNFesEAVYb53Euh6dnfvzgpDB1dxjchb",
  "key4": "3udsakJGUydWYrs9usp8pGYatgqsAfHYEFgiS9wtKhLaDekGb42X9VR2RBoQnnZ8GAZEJUrdyde7ZW7nCPqrcvTc",
  "key5": "4o2ZftxwrdcuD7sWJLuyYbHgqsZPhXq5meFMsSpWiVGsVyUTSzvnmsMwJu8y19UPuFhWXFDUYKAq9zUDKhh2CocZ",
  "key6": "3jwX3MsDNXsADfu5kpmSBatLtdFe9fTN7XnC6FYeFgc46Z3fCtmjwAaLfToFPMs9Sha8cXopAS5AuFGVFkWZcmCr",
  "key7": "2KAc2RnkSCWvHeEzmQyhRoTDcA8bJgNpVatseK7QgqkqARvgJEWFDhejPxXEUGfU6Ma9YQfiu7JYFnwPs2svQesC",
  "key8": "5GqNV7QumLhkHkb52jfaC3iZ1LDggVfarzoQR44h1m2Nsg2ETCHJLErRR14sygRrxaYZFj3vLudWWitLiM5GkjCW",
  "key9": "KdpbjJx9w58Es5hiSdDCyJ6MYs3RPegTNoHSPNcpirqSQX2YSEkqPtPd6DPPGyuXvR8Qvso1dGdGezzV9yfhgQv",
  "key10": "4k6JPr5XHGZfourBfzaGgNX8kqsagpw9h1ZCVqYhNShxzwfU5UhA4hua39XHK3xsqL36D3LfZbmVUdLHMtEBqxp7",
  "key11": "5bREbnYHoSU3TuW7nRkyNRxd4974MjZ78vPYBqRjiFAT3C8trJtFRFvYRcSRmJEcy9o19bAmyC6sF5RFd5SuyEbt",
  "key12": "5Yw25frMXA4Cp7t4bH2b7pGYv5Pzqvz9gQ3FMqwPkK1PhmAVUxTtqXydcVvwN1hwiw4qT1bDK5WPgAezpg6jTaUg",
  "key13": "5mpmNXXREJAhNyJdaMKgwbgrMwVDaMmVVHnD4cNc4CoC94YhJYHV6opiSriKDtHzYgMFZxNa9vu2ZttDbVJy27Us",
  "key14": "5nUC9CJoWPLRp3dBvgbhavYscib2mrXwHnftKyNajxrq4zMeM4Rziqe3QhhiTMXDocNFDkXKiavSEBq4yuTuQieb",
  "key15": "57VamHeaxxUAuF53cSoCwuPfdaXggF1nCCg2grC9X1k5LCaSPBYeQ5cUHFfTpJwybrvtE6haHhbEtAKbLYNN5yip",
  "key16": "4YSVVZxNcPCuuFJ5qbMdQQ37qhfJg9bv5Afuq4F657zUYpJRE33AeVdxNDj54p86Fd4SKHKPNt3C4gfG8ri9TE1Q",
  "key17": "22MWFbFVo8Z8rpgbdTBwngjyWBFzgE4PyaooACyTtWKp1dJbBr5ZoWwagA6zLquAGrioB4H7mUPKM9FxCZ3W7q9v",
  "key18": "2Ce3w416FE22fsxinrxkQk6AnpDVt3fKzV7PmFjcLJ3AppEDdinRP7cGa57nvbvQ9PZ8yp3PKsHsSJa3qbg3Dc1X",
  "key19": "gAfgecwgsc6vBacCEgdHVGtegWRGp2YEgLQW7AbcpDvM2HG8XKAPBDvrCEmpDNwgMCr44zU9ndENFqK456cZ9iS",
  "key20": "3mSX2YHvPujx1EgLq55urKLFYkAZDicsonJTfmvyWYFV3croJvSe3igE2qzwPqzKaxd87a2rf1HWBHVecrfzTnvn",
  "key21": "RmpwzSVPAFgyN65LSUsUGT3CAkaxzDrdBgzCbqtTdg1S8zankNXnm9aw3MKWGEjkYyQxcT1SMTvJHCvzxFMH5kq",
  "key22": "3w4J6917T5TLAD4RSNpBiUTnRDfPk6XLh7gWkGHUuqBKDLDT6kBrcR9HjMP815qfd1xge8vZ5kZXux2xpR8HEqUo",
  "key23": "4UnW8vPE4SXnB8yiv2h975owTQmZagQHsP8y43LwdBuMvUEPRRQ8cog6atG9XbuU5wAaDNixx1vHsQo884QRUoQg",
  "key24": "3PKUZG5JRhmNZp5A5cdkemz4o8RZXVhtsEEdv9ZWRnf5bxDkVjF19TuZtA4KmybaqA4GmfpCExMZaGUQWrBD7YbF",
  "key25": "4Gc6r4o9hFb31egUnYmyBnygHbDHkBrdVxfrNbDeGCAmGjGo14WLBaZvKsihb45tfwNgHciB3pitb13SeMLvaBx6",
  "key26": "2gJhS3Z9tAVc5sFkNZzKJfuSkz75kpXhjn2pFSPXa4P73LLJs3qig7MZ1j1aTzevKhv2Yk7GEyTSM4UvYJAfHjV9",
  "key27": "5gx7Gzp9hrHcpDVdScAG5D7S5CVD7TqkYJNDgob93wh8DDKtNg9tnXaobnyNqEbfr7FsBQ7F2Xf3Dqt5vbiyUxby",
  "key28": "24FRGjANBALJWhhdW6mpfuzHDqT5WDV8fYKAjG67mUwE7mJ9SsoA5oUv9V6XtrYTW7MAHEbErYPYdUyCjmcdKR56",
  "key29": "35ijG4pwQUfmAqfo1v7tjByZCVZ9W5RhQtffMxDZUEurxuM2GzqvUAmshEWX7emNNXjWoz4ThkxctSWekRkzyfY2",
  "key30": "JiYKBpTugigx5zMBqG4wtHLNn9c2w8YfH6Wz7XCGT6TbWi5kYzrrHSnkqJ6TpCjWKLAU6HPECGpB1wVfWMJ57JF",
  "key31": "66hBdUV54zfWCseciaxhn4bNkdBjE5UyLZ1gPkEeC2AtLkrJYEHLXumWQkWQ12xkY6oTEA4YT2Dpis4qYYRrnp3g",
  "key32": "4FDsGwu9ZhXPVkr9uNfQ7TS8oYedYpiZKF1p9xqkyv1De7Y58JvNYMVxsi8fr9cTPr29ULHkQQ8SPE7N511hAokA",
  "key33": "1XKZoFW7QgzEUi3GBrrfL8ULgtKdcd2YoKJ2La8MaPvyREhJCrAX7VuvUwbbr2eGLQX7aVtff6RfoaX64z6FdRh",
  "key34": "2jM8ST1Pyvq8uVMH1n9BKgQSiDbZzsocK986sNDCaK85U3xr8u294cu3TYbvrMENrKZKmA19imgnhC41tC2Gs1kj",
  "key35": "3LaeEKck8vH9zusq49HJ6wLTkdSjkAdaHTCrJCmmVEYv3n6FxWK7av5auAhmHG7u5wkejMkmSsoeRX68NKnsGD1X",
  "key36": "3R4ok9h2YzBmqwfE94j6S3AoejALod7EwWghPSrAGhHMzBKkVbG6JvQEyepPgkXf1q513H3LyiwfQ1atWyLsTMo6",
  "key37": "4hrgxbdFWaaxERGQGLbvjYnHYcA6a1ZjDGiZsexcPByizU5Btu9Z1nXNGBFHow3FEFFE53B4LbuViUp4DyxSVZiq",
  "key38": "3VLiUfwc121zRhF4xGGxJHrjWkpJNy3H7vzBvoYppjotMcaxnAgKdNAyAoh29yqbJEzMQDBkyH7jEC63WhbRkVt1",
  "key39": "35vXvqZtzVZHyPJf2GNAz4ioM2TQVum3V8RFs6pMWABwqa5R6Y7DBTvnLrri4DgJLkWHwoX8Nh4zQGMmu1vRUtVm",
  "key40": "4YjpxjpHT62n8kMsdqet5Ku2wMrXQYJDqMomCMp3j5taTVcqe71r7kUWWSvChCmSPMPeXdsgJiqru6BtyuWjFt5G",
  "key41": "5o1PKJo3Un1tjTZ5yf5eDnUqQ9qWzSJ9dZZykUEYGfKmGmAowxfTjzxcsC8fk6VEcsmeZvc6qUW5dYFPopeMeQvK",
  "key42": "U66YZ3rP4MZ2xUyh9PZDZi45rGg5xxnTiYxi3yjCJ49LmvxNNHQFuavPd5wzdiiM5Zg5sBt6UEyh3HeWXxQALrb",
  "key43": "3EW1EJgp4irruW8KDaxJTRjRymi5UX5wvnKCGLf35nMMYBpSF6EQigvpB3rMMaarmHvDhA2sNMDQXpWw3SvRdFmd",
  "key44": "CBabMgFb2iTwVjBCQY5rBhTHvDDcxv7CQZMSTWkoCGCyUg7WiuYgWHkPtpaRehVuUHBVs5TE9MU3mhWuapstaho",
  "key45": "4CcahvVX6YQ3eg9Ggqe1UZUELH2Sh98tLNRx8rHAUEHrU5DBo5VuKjNW2ynGiLTwhVBoc7xcqHHfPj7C1xoceoox",
  "key46": "2XXSd8HDc2WQHAtVMvPT5GSqebELYaKpxMmwU8kwvpdPpZoeK2RaNwG47Vt1Farvgj7Ad38wPV2xjNzy532GGZwN",
  "key47": "3x7bFpJYsccNN1DDqmnijnpBdn8YE3Tkh1tmbmy5JY1jiL23mHcjWYuPgNG9rxbPYYfsL7TYMcCvmJsz2kVamU62",
  "key48": "369hCxgiFR3pQZfQjXzuy1rkZLYXVpSyqa5rfRVJ9BPf8XCpS4sEwHyDFXvnw5HTyb6cZ5JFAScBqAciRamZXS7V",
  "key49": "4PbRjR22T1dBLAiLdYbatHk4ad4T3kmZcPZffUSG75pa3MPafyGC4Qdriz2q1RK27PKpwT56Eh2tj8DGdLqSsCXs"
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
