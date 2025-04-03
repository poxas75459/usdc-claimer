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
    "5f4EPbecw3snt7w2B6soWx1qjQEoDaYRddgGe3uucqyuHTf9w9AgzX7HRasCNzdrLCht86q4S21euzpQm7NGFuRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wrqWs8NHk1rbnJXzi5NvxsVLKWx5BZQaB1qPLReX42sPKDhaKU5s555L4qLn84sX894KY1KGECcvpcwY9dMhatz",
  "key1": "PSrpbAYgxdGwzZoV3DQyTbPy9o7RGffah8242RKE29ZKL86pUSJt7sE45x5gcBQv2EDRaTJTECj3odEEpEsfY4m",
  "key2": "31gAnFr6Lhqs4SUzwjQwe7gBpQi1RKs4EPwnPhnzv2TjEz2xRwDRe3DisxWSV8tARbQ8H98ufWzXKpqw8x6YodrR",
  "key3": "spdyrvpNqwSyzB3AgqntXmeetP9dajD5RTpBZjrwe9MtiU8ntqWWzdJngWStYz6HMdyjGLUVWQwfF7QWmGM9X63",
  "key4": "66R61FmD72Gy2BUds1tz5yiE8Fn6pYsKf4azDA1kzsTVbL3TKz2Hf2VeXAmJPsNbr7nYMBnhbzknfFn5UcxHVjGS",
  "key5": "2GvhBbsccJWNgdJSWXQreD91S4yExojW28FKDQuvk85ekxkxkpgJcUDyFJHJYUiKDFywULEyo2kewQC41cHTQTsa",
  "key6": "or2wUy2DdbhxEeVwWwJVtGcFcnUZgxfcznJpDjTeQ7CTttzeqbtJWBc4RQS4Q4tVLpUjhX5zNGSbEBjdS8aZ87u",
  "key7": "4pJBF2f11yD7G8av81372nRp7U9CABmzt1Pm4yvrjRScU7MzApQvDFgBf4ExTprNsZxwUWvdhWp77YuCrP43n44p",
  "key8": "3WCtACXg488S4wbNGVRZi3Su2qmgGPbj6Mdwo6ZMQVRbETjGFWKGwZaVSeZpgfmmVtDnL7uqohHeamket2gKu2zZ",
  "key9": "2WQGaTX7ssfNjcMEDdrkepewow8aZQW6ns7VeSAit84GhDm5o9K7qoyjqrxrKbp1qSsJZo1xK5DPsfnuZMr6AnCV",
  "key10": "mpgRTd6P2q9sag8TQVqCPMjj187rxJsxYaE53kyHFnFMKLK9d2YpBnESp25mZBxmxdinGurqDKpk4H2ZuAf9Xvo",
  "key11": "qdRyzqSUCo7qJqnqkCA82ZMAK26R5k6Np9jHewJzoRGe6Xh8gadkwb5USnDTH85VSCrQWCyh6yZauoR2mB64Qyh",
  "key12": "2Nxzz8ipGY2WtiPgyZ4rjzQzzpVeb3j1dzoFxJnq1uiDnP2z5VPnAe8xM71SfiQ9LYGV9gXFLVKgSk7mqTg791kt",
  "key13": "33hHQMWaESRtLubAS1jQ1pZzdye8LJV9trDDVNnHx2D5Gc5HNPFhz6Vy8HJUadwc1FCebv3hLHtvt7KDDQ5ot99e",
  "key14": "5jsym2xzdbGEEPkNogsXTquUmbStwUBqECWg7gxAjLrHW4NgTn2uvrYoGP9EpSqDS9TnNE87QFjEnd4HrksDAXu3",
  "key15": "dovUacLDzHLhvkoFhToafcjdohx8ov4YQ3V8etyBAUKi3Pm6Vnh5r7PY1oFBE7hhbD9ywSUVrwcdp8TCMadCkLB",
  "key16": "4759ir2CvE54kEzqNUvbL23FVyT2hnQi7TuMEyM1QSSBbeG2tXS366UK6TnaohaxAdqGf73Gi4SMVqktqCgMeMEb",
  "key17": "4FUrLiuWboJRyhkFnWnQsV17ziVVmitBoZhKsex5W2NB1dyCLUdPsCQS8hj8zHJYP98jATzXkVYwwi2Uynx54KMt",
  "key18": "5JenziAyo9dHfrBcKUN4n4yLkfCNhiBPyPJb8jFERDL6Kpm9eY9AUyRgKTf5XthhqRqfwGFsQMw9Qv6YmH1dmEUU",
  "key19": "5jfBgqb7kys6wLUjHHbzpbtF9FfJ941ECHx5duhc62k41c3uLSz8X9WRWwbEYJbvYsr6a6eDwWjnD1YfMxAYkN2p",
  "key20": "45HaPCjWNtHk9hdAH2pNYeCFi5ske6nTHMvsCkhY1qNi81LWXtwktM84M3yMVk1PoonbF17h16PYwukgAE1orCLq",
  "key21": "5w9c6caSvC8yNkEPjFjtrCD8a126cBF6UXJwNojfzSkbmjbCcVBsJKDc3oE4sCMR1L2TRFMwJohNedg49wXtc7a9",
  "key22": "3oJn4jJbXMgwo22qWTxU8D8WEAx3ixue6fG2CiqsmtCs1Jby8DF3YETD2H5ntmiZLfwgdXWDEm1DtfwDUZzo4khf",
  "key23": "2zkmmExzjWaRHmabocGCa3V4vrpCvm8euVvWHUFtbBhe5Fe7QerRh5tnU2vmGq327uPoBNqHwSo5CAXLp4X7BNhi",
  "key24": "7unf4Awmq4GzFNe2dCdcKcpbyaDGPvVKgJaBTPjCioVNHJLEH7MNELENpr6Ay4phCFWibr8dRhooCePDtguD24b",
  "key25": "2BFBPeiusJUGKNMUJyDP4asyWtLHb4eAHc123jgesgbbZhTuKn5xQEefPrDwyZMWuZyBdfXeu9SzMLVWx2RDU4nC",
  "key26": "49VxkqJUkT5JDxARA73sK4JFf19vuXePVSxxGbDQJaEFxmMSiEQDPcRCBKrkYZ9nY7AF3GHCutwi78xiEiFQfDWL",
  "key27": "3oLyo5nuGZ5YMogfS5RisPjtdidrr6ha7ZRiGFnoX24c6zVyhyy1omnUTHZX95kGMEUYGXpMv4YFpk27iAzZc3Do",
  "key28": "H57MGzEencYMhWZEKD1hdPbExXgcx2NMJhY4CW1uz8JKkrf52fRk5F3zWd2kP9Pfq6FxrpGawqFAqR4o7mExDMj",
  "key29": "61sejGyXW2jmtxDMQBBhBvqSe7vnvuwauY7cRSAgnHTLJandJ1mBB3nFMjPto2FGiwpGxmJ7V4BRmxDXGTLMSECN",
  "key30": "Nh6WVc5MHnrk26QJUYVnU2ctamW4ndk2ymWP7v13hHGKjmsGpEU9R9HvX86mSuu9JxeosuMMkFZsLkoDkHFp48e",
  "key31": "2ieGLPSrKKvQgQSUfoxftdToj2ZX3eFqi22nqZYRfeW8CdNhRVFgkrSrJTzgTbKoVWUHRM4N5SiX3Y8wTRvJcSiU",
  "key32": "4MfSDyJdPKASpD8nQmHSCxNTEcVvU3ohuEuaYiWQm3oeBk7iqcfb3BkkYvhP54YEfTUg72hfryu1U8733sXp9LZP",
  "key33": "8Ne4eVDx5Ly5pKg279pWKvTdoJB2PiYyggsS4Skh6JY9BQfG1VuyV7tVsJVGB18jUehJrzxDSf2BAWhey4Rtt6d",
  "key34": "LFTV3pxkKqWCKGSMNiSrdaKYe7EsYjutcXYy48NoBx7XKCMrvzBGR8BayQJhs7x1mfmXCYdtx4pSSh2o18XAJcX",
  "key35": "39XnMPZf8YWhckqy4dvNRmr5cgxcngpECMbjfFprwNWkPfk6v8m4WWPJKMVcykv5SHGjefoNXSAnQCnLaZoeFaLx",
  "key36": "4bpUG3o5dMTYe15ewyPQhNTxkHQeSqFDafZ6Z1Zb25vHtutKhw4Zq9SPwm9iJ5pKersGFMUPiRfW7Qmhz6cLJbBk"
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
