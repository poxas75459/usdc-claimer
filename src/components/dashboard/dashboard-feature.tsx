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
    "9K8KeW1j3Lx3iVpuZBVj51K6445z2UEKp6sotqXBzoyTyPQcs3r4EkQqzrcbY1xnGiVSUzKXPYYZPamkRKku9GC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ENVNxZBft71DaTL3xpzXPaQ5J4iekgrTjnz44uXfDzcUKNjdrkFv7EZCsDLpG8xQWC4CkpwdFSJHCdMRXRmqLCG",
  "key1": "4SeiVeuTMu3TDESnPxkXKn2AmzkeQqSHPbGFm2aBgtXioSN21nruejQi5egHJD2qRp51AA18DFRhfcn9VgwKGPek",
  "key2": "4xVXBHVnUh294gTsWusp8hDiZNb57QaqYgCmKd727wmCQds4D3YFHYEg9nXiXUoLq2RZY4QbpX8mtXXCz4dk82VU",
  "key3": "5Z7ki3iCr7vJcsXWoztNoxzMJxWMHFu1j6X13VHt7eWKtAzWnTTvUtPu6d2vAB5gvSvCZo1MvXoHQUafbHATqCuF",
  "key4": "5eaiGQea66EcQAPiWxeCcpJDDLaGT87Ah4k9TCSBAW2yTRW9KpVJNzYj2WQFDgShZj624mYHt8Zp1xyffAXHF9Ch",
  "key5": "4kXfQvYWsAT5rxE6mZcZTkpDJDcVXc1VZ7rogiTifuuj4ibHkmpt7LfdQaJ137JQL33GzKjaYbQsB8fYSjsKWuDD",
  "key6": "34ZdGd18tbPQbqwrUtyyzVqNxm5SbhDxGsy4RZKZtk49r5jsXuAV6hmhE5m7kRHysRztKZSdswyrvEh8mDheKdqw",
  "key7": "314y18dwXxnrn64q5jVrbx8Phhef64eNSRuErDBNFkf6agQWEaDTnhB4wzmmiKCSRaoUMu1tT8m7nwWdoD88Pkxg",
  "key8": "3Ft2mHfx1GQkT1vhgvss2TwV1PPNt558pnxCe3MgCFRisCdTBKZFUdHQn4rut1LPLCvcHbgvsNB8V7spqa6xudyt",
  "key9": "3JjVP1KLWvnauW7Cmme4aZ7v2mzBbWKxiTTPGVAfXFwAhR5Nok5Xgu4Sn6hJBVhc82BfsZLGqaChTKdsFiVbEXrA",
  "key10": "3QcxvJGk2znYFZhtmMzyn7MacKK9a7686ZCQMMYy5ULM9BejYKxLcdtDwMWiuKCwNX2ov4kBujQUZYLmKWrMgGQH",
  "key11": "3zNoM2oRX1LhwjzJzQ2snqYLdc9tPHF4jVzRNGqE7Jq3QTLsrcyxWBegPUxttZ65fNSp7ZtAznmfUawpQF4vQioT",
  "key12": "4QyMSgEN4JwNMZ4zVYvv8pgktVNp5WNpNa3uRSxiZB6r8Q9aKEWA34Nk7FVwJZkQegWxjWDaR31EKU5dUZ8SrdbN",
  "key13": "k2Xj3EXavzdiWmWHPhEf7JiE81B5e382CNuAN2rLBzi32tcr8BDtNHRihNKx5PrxS199D9jdQF2hjPfsU41AJ69",
  "key14": "PZBinTA7apfGVu4JGRcptboAVhRLsA7MAT98S2YFdWGE8uwEr6rr2uuqy1ivdUUE6fDw6y7z3A83LAsYgYtQBbC",
  "key15": "5qec2WntDVQ8iGaFn8tJ9LyBxGV4nCdw2ZidXVWK5Cqdzk1hGFThfgjKeQGdPzGndmsgi3iGw2qBQ9U2u1goAgWW",
  "key16": "4pEgf8yrd1nPLWLAQFwAvRhCSbrBUKKHfScVkTUJVKsorC8AtjQs21WkfceisYPdhZuGnTqnVxVoUz55hgopDnDx",
  "key17": "2S3jdTkmuDkpbFCPjoTr1ifScMRQniFaTyZ2bodCQXpZvVjKyj2otvfQswD83NuWwqhv2CwbqcLN2Sw2w19C6XK4",
  "key18": "46kuj7cENyFgKbihsWvgbqQUZctg18DQdEDV2uFJnffzChNVfBMGTmqtA6iK9B9ZqM9eXhNPRauUqNRCbaMV5NbM",
  "key19": "42T4RARPh4qYSWtGepu9ywFk9YVpkDMNw6U4n7iYVwTY5fS3o1Q8Bcb8HKEosq7mL2L3NYzy8HSL22Dz9hu44Eu3",
  "key20": "isyUwUe3PhT1n8XpQTui2Wsqzr1ncuxJBFNdjHpEd9KuM7BXS4JLptTiSR9fNEDuXBNSavBnaRiDPeDicWYgs3k",
  "key21": "4qPi8W5sJSnR13ZQ7hK8E4MERkG41aH9E2Ek7iCCqATg7yUena5SXSiEZk9zLiGPFF9koF9sD2CjVKR1P9e7ZggJ",
  "key22": "5KcmRBd8uVoBLzG87QG8Qg4JhTZrrSgTfafkie3s7MFjcM9VezE3TodWTYYabG645WK4qSBtMMGmDxnGzeS9gZh1",
  "key23": "43GVvMHThBGUxxeVtGY2eVyFHqSPPKJF4qvjnhjnvrq4vYzxXSJz55G7UtwkVLCNVho2CDB8ZNttxr23WfKeGp1m",
  "key24": "nwzHvZjVQ7JjEgWicGsvhcwynLJAwk63W1QBz1dHXnGuzq8g5PbJW1JeRjRhVu4iNxUS4VoA9GKxzF7cyQEVPnk",
  "key25": "4p2NMsrSUT1NvEpSoig6uaiKsmaShyNDDKRFCdhp1XMnCPmW2sbbghvdySkkn5d8hgKWiNbZniDpu7w36GFzmZPV",
  "key26": "5YzSwXEPQkam8o6rwVTb8ZZHnWXRRGaMrCGhciUrTbdigt767WsfgXeZVY6KbZ9oYHBRugJPvvQ7Bodiu7Yp3uWx",
  "key27": "5cX4GAq2YNNAxbVd1QszdALNZvhLQnpdGA2QBSxLspERxWDbxjFniH7ysLziSZeUkHP7s7uewVTWV9tTkkHSKpnn",
  "key28": "347MaYo62eBu2muXzeu4T7Em79RQ4eoEh54sHdBQmAKHmsH2aiKfomNgTeyfxyo36c7gygq6L3jTA7vrGBrMz4BV",
  "key29": "38WD7BscZaRkdxC5P9NfoQ26B6tVQntPKNWSHm72KVJdNx5v6VeHLEDZ2wPKGgmKvyzan6zazBJLYGwMJuVL9cff",
  "key30": "47qM4aykdMMjAetvTwCJ1KQMxQHTsPzkXa1Aw2wCepczNVUsfwKec8bN2DFk3oFYpXxjh3sqR6xNPZqKVUwki3wy",
  "key31": "3NAt2TgLxsq9y8ScKxc4UiurftGMYXectcL6a74HVEW2LczWa5adcQfEnPiREv3NK3axaibjMskjg9iV2KtXRzA1",
  "key32": "4HTsseJjo4ALRFNwQuF79ooRGzFRgoMLhchUVeLmt8HLdhAxxkZ9ZdMmCmg4GLK37YhTbxp81PyKUxpgFeJydpjr",
  "key33": "5D8STLXh1Hb53JTXHKAEuvjnzJQFVD6HK8KPu3G4PaE6uHJnkePeaMkUQAg1Q8MTdkdxAFHSqVsAE9Vtz7jPGcpe",
  "key34": "2qqfg4sLbyPqvV78cyAZ38VM5kMZunSaG8cz7EV9QXvB9yeBYt5tfuPUnb2CwUXRp7PfmeJ7SWdQeVhoa4s4NC6x",
  "key35": "5TnVXcdCrVwMgGpQm8ZPAqPUMvnLEXm6hQQbrwR6dTiGtbuHnppTgtDTyavfQQwae4LmcwbXDT7Ye44CRsNfq7de",
  "key36": "3ggHGLA2d4JJXvp9ejNEvbM6hq6ukhonhLsfgdUthJE6izGBS6srpM1Dm7SStTZn8bnGf5qqByaJUR9ZKUHpudYw"
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
