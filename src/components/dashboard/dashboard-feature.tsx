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
    "3R7k7FJwkhSLR7Vih8Ks42p3NrwLuJ9gtF43zMPZAahP7nmU2TEjU2c2rA95aontu4nWpzin2BJmyLzJWzxckS5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wC1yLJg4H3MENzQGZJfKvXcDUoHpXiWUUhn5aG86yQAUqYcpVE6BrsTHRruM67Qbsf7uh2atgqFMjZXaqEU1Gkc",
  "key1": "3FS674vhkrztuBJ6Wpo2cPJaiBVHnDWMSEWzYUiX19s4mSS7DrS9M1R6zcuT5vzKyg7NUg1vDRBtC6vEcCtEzmKD",
  "key2": "3R6P5QZDR8xYhNWngB5NcU837r6mfmAmUWRPnr26pEfLQj7uWuvHanrYoRkJzYPUm2CecEHxCVip12wvY3S5wkQ5",
  "key3": "XiFCfQvnaoJTiaj1UECziXJPJcBA7EksFTqVD8z8iwVhvd8sAK13RPrFt25kEoM63RvKB8yGECKzVzsmRgzepz4",
  "key4": "4CSEdTRJu2Mj5znvZrNWH9r9VnXPZiUQmNGgpho7QSvT9JdHKaModkZMZyNERTQ56iv44bUYWZJv8HoeaAhYGPEM",
  "key5": "5HL8nathbsNgibQmYL2yckCo7VwbtqVE4Gh6shTHJchENPWc7xbZfEw5FZGVVwuhrEtfFiRFfPnBErWGnTxEBqSE",
  "key6": "fa6GU1e2EiwWigjEko4u9FhvGoYNcYfZHhtEM3bxPCi3Em6xVBEK1spiJWCRPGLNZHnedYXbq14B9fgYKFoPCkJ",
  "key7": "Z17subyQKBHxCoRGcE7GB8KPks9fZTvqwKxwrDCvth1ddXU7yph7VHarKX7uEs7PayC6gJ5p3MJhMCAyRd2YrJD",
  "key8": "2wJT9xpqVDAZTVTSMKy2Hn7mN7U6G3M2jXKnYRsggFdDEPymvjs8ixjMZraHUyJFFdM6TVMHzw1jCsjqQPRBPwH8",
  "key9": "ZqX4sonRPnk8YmxNdPNS2J54PkRomGXyw9JGcBZ6WGgWiWkC7tc4yqJp2ANh6xNdFcJ27Vns1vQs1FNY2SAegZ1",
  "key10": "4zSDMrHFPjqt9BRGQ6XPejUwRcyJGf1wpvZjRUUEyF8RQqa19WueKgRtJfftrMLsLxwQe2LLxLnUT6DTd3u4Sotg",
  "key11": "AosRwQJ6N4JkkJuDrMHmjUPjF3oZ96iLizPhTUPSiiDUGuWF11Lt8XfkR6WwXwsACJphWfrZaFHCSCSJbC5rC5S",
  "key12": "2up24bZSiU47NVFcXNG3aiepn3sHTTRULsgq8ZEoZ16FoToFqghycYnDokHUVQg3PWwKkA7vrcnRZihFggY7qVSe",
  "key13": "4JyKnWBjoPqVmdqevDvqTA7BdA3Juom94En64VWg6kH3JsvaxR1ZA3TF9CA99EoggJBW4rdkqePoEQ1tuCdfUVB7",
  "key14": "27gSAvw7yNgMmCXTwzPrCHiUmCD4euAcGaNmWQ7nGphxTZnjByhMwNUzBeGbvoNAD5qpNEMwrwdugF9ydehRb1Z6",
  "key15": "3vPWprmGGr9iEHHbxNiTCZ9i1YzC2VoUyoePCpuQuSdUQXE9ZxZi6Fi6tY4qCc4PibeAQTswgc2WxbziDZCKxzjn",
  "key16": "46sK6gXyKf3T8LLuyab8nxJacwdAgbsRuXgFTtx8n4e66UdoXacFo9ymfAieGE16sLoTmLMLydVA5q73V9qZjoME",
  "key17": "2ENAhQcRSSdALTDGpoBpEzJHB6mPoRUMt8ZsfZyCLqRAFFAUEnWy2zRKi9mnJEZtMZEa9eM9LYiqEj5DrXVvKMxm",
  "key18": "59JztCRXvuhR5URXiKafz8FsgZn8sv4HkfiuNRD2g1h7pmycVLEeEbGtbNb4TTVDKpQYy22gVNVJvxNTC1mukowg",
  "key19": "4Dw2M9B2NnZygvHUAbPQtscSzGng5swzThi43aRUk5pG5Mq6VSeR9xQXbP9WiYE5yLGaF5ovfTXYjrF2DDFtM4Kp",
  "key20": "3PJjMYWwU64LukuJepqqPjFNJojL43J2mK4mzsfk9oHWJGwnRpEzpsd9Ccav2f6HWzFwKdoHUbSnuaH6cRi7hEvD",
  "key21": "3mEwGTksXqh1sYbG8ghGMvdRFBbazEkNEPQQf9YtVwbwia79iidHfnQcNAJLrZ55uWZjx6dQMZS8hzVp9ZRayYmV",
  "key22": "3J6VCh1N1hAZJizubJ69tQSxeoT3vEp2sYVWY5qkuprjdYydBZqAahThMJDoASrrgCQmBkiAySuSXMUbERQS7vt3",
  "key23": "SXkyzWSpH41DPs7VVxDKqSqL5URQ5bUChiaE6xLw2becrLhHNZ3YhUkerqpjDY4JrsXG16NTbdtdpqYzjeLf8TJ",
  "key24": "5Q6exQ1swrL86nrQHe2jvBDZ11wGDwco1sGm7ABiTF7rGQigCZw13LkGU9rmKFP88FN1em1D6xeGYyANX13Toa9W",
  "key25": "4zoKrfwU8abgPwrENPa4QLc9k5JHkJQvkchHiajgXH9de98TSFxCWeFpzcRYCYPgU6z6VtqMZhoQUP6adA6UJUhM",
  "key26": "PZPT2xm4pJ4qhnvYfR1h2mMTu4nR67ChNaqYndHGgNToUWG2tswDeiPUEX9M6xzbmxJWU52nrYgxUUiv37PyEvV",
  "key27": "4gZ5x1yKKYq7L5xXPxEUGwggRf9pyCoynHPKsC3mdumUTpW6Hd3MaHaReU5aymddECyMk932fZAA37WVmAFmJeLZ",
  "key28": "3bXRBSLFG4KNDsowtzs6kZgAwX5kMkaXNjBBKDp2u2Xanjm7uPsmAtDp4aAAzmU4hGerBHrMx4LLzcs5Y5iwGhPH",
  "key29": "5hQJCseGYj9gxvkj4224Ytdij9cmQ1SVM7pSbSgbTQbNqTJVRbSLuxBgiXw9pvmfCRqBGgFSRQhmveEJmSSLhZ64",
  "key30": "3bPAa95pifzLn7zvFQx2VMB93x6PfVqwrPChsR1F2PoCaEqzFZALLQDsVJr2RETVrBHgkFcnrEwer2d67ADZNH4x",
  "key31": "2j1jrq8JeNq1BSP1Zp2GR92bxRP64wye92biWBLGHmJ1CMaNTAdg9t5mhNtm93mqcQtEggRt8KuczLAQqD1nqCkB",
  "key32": "61F5vs14Sqw4sp3AGnL5rBRUUZ54fZjpBdp4TMndfVzgWfhyncNPRT9vpnynCDRhKQVe9pgZmKGrmdgVxLsvLFYq",
  "key33": "gFhYBuyBirULuapvLsJUoL7MHAMpXrhKRVAnnTNcV4USg5UP9ag4UrDcycyWvqmzGJK4K8YTLoLi41N1B9Dvo3j",
  "key34": "5JwK16LadcTQ9rs6zEYvS7zgXXijZL1j2FoR8roeRCu57BwDSR3Y6cN1Ugn2whsdcqYm1kAcMMErh6eRUMpLL8SE",
  "key35": "4HJUANSkbK6LtVdHbXQPSmW3fuRcsr3kZwwkQ7XouRcC1Wj325mQafpr7LztYrSCzTazoVRv45M8desdkNjyUiq3",
  "key36": "578H4LGd1RPgerbX7Adj65iUwM8y9yoWsu5hKxurVFJUB2qgAasiyBNZvV7jeGpKZzzExuR1QPMa8xJRF3QoEwiJ",
  "key37": "QZ9gTfg3EGJNt5VGxsGjy8JRZfGEmP8uXWP5pFwrGoTx9rPqMDnyF3YHbvZJ4WkvBRg1mUesXzFp7UhaTrLe7p2",
  "key38": "YW86HQp33Z2RegrhfznAY2Pe4WQ1YG34RD7CnPTtR6VfWYzJQ7zzsZ89H2gAbnyFQM6Q392cGHK3hDyZYDqXKSG",
  "key39": "61ZTC9tmFccDHQQ4XKpwS8A6sYZNJxyu3oMSCcMPapuCdgzA5NwhoT6faNGCcMQarmomBvS2B4WyuuMiuzhMDHCz",
  "key40": "5gBS2QnTE26fBspuEurkvGxu7j9pgGby54unVTMQkQV5nbo9SvE61a8dUHCYo6JeN3aBjMeJp7ucZpdm8nYMQ9k4",
  "key41": "382Z7NZjHad8gxGu12kVzibEfqxpz76Zjg9dxsSTo8PkZfiseQVyAXTXH7xN24DJVoLAjACNz6WuvMSF7Mm6hN6M",
  "key42": "5vp9V7gGveQm7RkbfdLSri4ZBU3DRsJbXLHaUq2tLuZ7yqFbx4HU6PNULAN9xYgrxyns73qaHuVMYmaYvDtoJahh",
  "key43": "5fYUxrD41gEYmnQ78CdKVxE17TD2RPc28SmmZN52ZZM3ir9wS7w6ZBG8V7XKujghjGWgkQ8fkNXXjN55wYuePNX1",
  "key44": "3gvArQWm7VU1MvUzHxEoe8xNA93c4Lh63ggMRg5bmCuorGNmkAtRmtR3JxoGxosqG7xN5VE5jj3XkBo7GSqvP3G2",
  "key45": "4Yq6Ca72prvZMSpEuxuuP3Pdp8ooqvGe4vtnfJHDVjb9giUepXsFvkjjGcozAFtcxjTZkpw3jBwT8UtUBrauy7LH",
  "key46": "4aoTbkxb7ZsEunm4PYRCuJ1NkGNBEQt45EvGJsVGW6deH5bqMxRAYQJsEQjXPemdpeBzv2cPaCTMeNM8cnvb1CkV",
  "key47": "3uqdTL91ZkLAfCPgVR3af4B6CpvoHzmGHphAAVLZwPTN74cnJiMLEoRzAZTmP4U6qqKb6syz2QtKnZHBonvNmEF2",
  "key48": "5YYQ4YeQXWnXZWYPncjCvffLrfnFwhAqQYbTrp5Wi5UWydnGTbLaHqJfGHeJHJzLpvocpN2cBUY4V362hu9wpQTE"
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
