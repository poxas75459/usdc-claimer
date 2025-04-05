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
    "4R4q1LpJh4pVW4ceAC3EBrkS45ZLwDFFcFJeAcf8A6zkqbU35geVmmaEwkeS1mXGg72Qs8SkYHBCdotxM2wS5kqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QAbdDeXSN5LAbA7KkXksCSaJhRPFEgGpgZFk4pnceer4BNWoeEe64GjBv9aw3Xpjd2GLiXFL5upEZ1aEes1dR2j",
  "key1": "3P5Ege6FgkfY8pdJFgyNx2C59YkP9SZsivPuicLsnXG6ZhQBzroMWFX7QK98ptPtUK49MjXLj4sFfX23uvG3SAS6",
  "key2": "2FCmpTwZJwWKMzvwMCije8tJySNdZCh56aQByBiLGYE7Bh51RhaAZj5VuyW9fPUjJkCyYSxE6vZpHVQpqUdrTqAY",
  "key3": "2LyTAhjcZqR9nXNWUVNwDtggJoPpY752mjytN2nBvTqNrKuZAVcR1RsS4sgeHmseafZtPqqABz6CGdfnC9bCxFRa",
  "key4": "ZWPrgpBVpsoS3vmh5Wa9Q19EQ6M8vfoHnJD7foAEMnrs5PHwUDW3xBVLQCeYJfWyffXLmavfjKPumsbYPVqDtCC",
  "key5": "5SHwLsVYY2ed9VzegLeCAgEMeb57fcnHk87zmLHgNkbQyAiinT9AdnJZvWBG1BWN2LTz2q1YjeJXoJBVtK2pEq2a",
  "key6": "bPTfWaBia845TNSAECNkt3DPevWGnwirWbzDAFT2bZpi6yhzKtFTjjDWg9LB8NAaXfWi1t1UQDe6uQKse5FW6eg",
  "key7": "5oKpRLykUSfRyD8MH7B45jp5XHfz7DbQgAb8YhjAJNXgYfMRJCoTtrxdv8WGbVzeMDt1sUcyYhGuKYKL8j4o7JT6",
  "key8": "8HrQunuYZHagEe4UPLzY53NRbV85PLdq1FWvCarZGPzTWzFXLVdqa5nwWTauqPJcYjpHDa1i2foRvrk1H2w4ACP",
  "key9": "5hFzAL4ya7aMohMru5JxmSx4sL5SXdxiJH2NKVwApamG2jG1bN4PfZuf8Su7ZkZnNvD4auetqEnPC62qMZVj5cxn",
  "key10": "3YhQBZeHmL9JU6teSpF9uLDGM1wEen5aNPQCjxqk5c3Pg8THRDFhMsZqcfa8yoCFAGhvL9GFv2fj6dcZgpbjMHA5",
  "key11": "29geqBsHyPbNj1UZk268JdeTE46DJVxNnrqBnd5QqK45TQ7ud81kGu4SDKMCqp6hYjs1JGYXazTdk82qUX16NTwy",
  "key12": "2KBeyNvjZin7p43Cd9e68EkrXb6smSekXMLi5MXRZhLRo7nzonL5sh6g8jAKoeDUzpRt9wpYhhD4aeTHFvordenE",
  "key13": "4dghNEL2XqUapcRRtbyZZRundCtWdbNwzVKiGayAmRJYvP1G54v9ztxcyjGrXfUg1WkzVZL3BMLS3BQhmDizES5k",
  "key14": "7MumftLSpwnQSVeWLo4ArtCEturGYnMBPigyKvGhUA2kNjBWHseCk8B7PPk1UVDCUQTzpU6ZJ2oaATpUbhgvWCt",
  "key15": "4Lah9hynAyEmeaegNLTZxgZmcdvkLUHRApavmVLWzgwkxZBJydar19rorRWRc5ouVdYf8m27PjSvkU1NNQFmtudF",
  "key16": "kVwD62uBwXLRMrVhXRW9ew4fL1ha8ssYeuXxZ6jyzGg9eguKaR7cKC4qP1f5FMgsfmRLmLD3SBXU3UpCTVrGg4L",
  "key17": "66w2awM7iBB434Zjro1bRF7M3AG6SqzGZcpmuZ5v1vQykgWPP8jXxBz1DC9RnPPaqTsSFacYAHwa1jnqBFp9SPFn",
  "key18": "4e5mrbVp2Y34VRFLgB7Ty5dwWgGHdeK3D6vfBJqQGZchqR5xAYGnDhK722E1svNCsz6HnkNN9i73fw2nRyvwp4bK",
  "key19": "3hmjw9EropakBMPks8pe553kh7Ak9bozARYLytrotZYm3kkkeGhQzDxyRd7v5HB3WLTy5znhwDR4H3U3rbJQuFCy",
  "key20": "WfVS94ptVtbvh2UuE8zrmrRZjf9ANgVXkYRXCbTJ4NW33fPBTMSw4QqmagRRNr7sdzxQCM6WqYBKKxX3joh5TUZ",
  "key21": "3mGZrU9GZRpmNJB6Pr7tTG55pu1LSbkLyKNQCcMTqZBQ6L4PM6m5r8uaqNLHDvg2vxTb2iJusqURHPTwuqz18DRW",
  "key22": "2FusNXvZsj9NGjhnW7DAuf528odnMTfo7rW9D4kew8LXf31ucxSRWwyHbdCdoSkNapSsv5dprs8otNmAut1UaXdu",
  "key23": "3z5RjXyByQ3VeDYJidUhSjbn3T6xMLE1CutYr9hsqP3p7HzqNmrRxYvKPqyVsos4rA1pHYpBhNPVCnHaivAXcH1p",
  "key24": "52NCagLAPqHE5YiLKWxPYCs7vDr4njbUGVc9Y3LzDyBAkmUcscQX5wpGhGgR6JUywT88qxQoaEjUmbYExfNs7Zfg",
  "key25": "4r2wRB1aJHyv2y1x9pojxXwAr47xSpnYKKLGTzAjkvPCbmkFZe1mKofsFUR2uY5WeL8EM2hpTgSboo4PigZa5LQH",
  "key26": "2azvVMQsdw99U9vNZoiY4Nu7Qw66xAieK3Qg9Q4dBJ1QRNk12rfdHgEPVVPDGNKw4cVHD5RQYeMddBBWCXicftPM",
  "key27": "2nYPM1cFDir2ws7pbMTHtR8UqPSBHpXDMFJYBiTzvHRaErKjUzjBfFAgeaAwqp2QaM7zw5MGs3KpuWv1ddno6fig",
  "key28": "8LvHuyYUAwFRpfPjFWbWC4uG8EGbv9NBYKsc9JFGdSp7XEezn3PMLnRTQGoN3ZjmWBcRw52WuFUu2zDRENC4A8u",
  "key29": "3UwicmGricDLNLrwPcb8Buupgfsa3dmiyf6cvH6LUddjnR7Ld6DJzxhWh7sw8fy6u9fGyUqcQmWJPf68dCNpdDZT",
  "key30": "2hpx4EXq2QXQhTWEm7qnSjAj7HFPXbZpatx5UR2t4ZDDoDW5TfKmLfNzaDvmWhDvrVuyfscD9scaU3CqGBcsPvPT",
  "key31": "3n1iS1bcDQDxRkNThQTFgn3uGdKNrmupDYnybw3hztepVVJeEXvBGoaAcP253eoiSyihKyUbbBuZJBWkYW5X5vZH",
  "key32": "4kCeuFyF5tfHy8BNaM1YtDJMgYScCNfjRt8nozBzeMn474cdyS8UpHgsUmktCeby4bzXojtuJQXLQirMcZC9Xuzh",
  "key33": "528JfkjSi8QHyXjnBk5PGcAk4QtXgp3DwrbcrNNmkF2DCLw6EGW4g4kN46mzcz8X7Q9qvJApEsvvHHDKPz1CnX45",
  "key34": "aFCewCb9d1sq2WrhTwMeMEZ6UwdgfipJmydRR34Y6Wx8qGKwYH1nPXxfBWMyJuL4ez1jHonhU9qA8wfS3uXVgBo",
  "key35": "5Nafd1YQdaQtYBsH2xRKrogoThQMYadw4MyVPPALYwLiqg46SHX9ZANv9zHefYtBdjUsLhohXiWTu9mKL4CEQsF6",
  "key36": "5KvZNPWCKnC8WeyxQETUeVNLYLTMG5FTnXQJXLZk6C1HQzWDG99883Ui5SmGW58YxiJEBBfvkwnDNthFpJDpz8Gv",
  "key37": "5BSnphumi4FaRvkwJnCeNJTNxq2P6SR42cbJutR2YKCaGFForRwmWtaiWgUAqryEL7j9dQGjJCi3H29aBenLxEbx",
  "key38": "5Sj8qKsvVRpsohxHrjtxRedNm9npDFBLdCBszTXtGMvEydaVv34d9DAWKD6nC633YMZDe9bicDzVBRuNC9QxNmmq",
  "key39": "32jqCbMrCV7rB7SD4k4fZPAuR4oW2U52Cwh4ojXyVvzGknpBR62NzSVfBJ1b1mFNDdmSDFGPJeUCBFai5QGuAq6o",
  "key40": "61sL3ioRFcCRRcJibGkPgjMGhhSQNLK4FAekZsXcScxiz65UHkLFX6uHsXjkxQkVJSeRgcyChaGP1gYtw98q4ygr",
  "key41": "5Q1BaXHnBv7ymsxBmcUPrvySaLXARvr9T9pUsUyh7yueZk2NAauj1Qyh9jzJZwt38uxXGVye73Y64YvwgKyEdJDk",
  "key42": "33zKzaFgY6PpEwvtZFx72cQhK7rG2vhkSUbaqpmnUUGbQTBWXTgN9A16uuYBYicSYvndHCCZhiZNJrb7kzcemF82",
  "key43": "5AqAV3VK7QqWZ1buedYvVKvHSkhGzK79QDwSkK5qX626xE2ZUL1nnnbJJc5dTfzKzZPi4QuE94KSuc8jyE3JwGWY",
  "key44": "2arJX81WzKqYKV2teUTQR7JAhkQVKnPKRLvP56MqwaVEC33zxCMgYtMVKJfAqDAPGN5HK8qwR2FCgYoH565oJRbT",
  "key45": "2ku2U9drbf31ZRJZe91osJ9ygvxDB8ErDLHcQmSfX9uL4HuFS5HeCCqSvKNTZ49TjXGkV1cpZVmyUTaDEgKnD26G",
  "key46": "5Z6FDpz28XVG9cv8YHeQgVAxgXTjyRSZvmCQ3QthvhMb85gBdGnNffdWgPAtZRksf7k6mEkq5z4XHJJv7ndFTEN3",
  "key47": "3aJN8Am41jZjAP1Go4pAXQwp2Q4cbUEygSc987Cehdvi3x4pTUBLBM8tuL8PAaTGRFe9UxsT3ZvKnXeXAJLB499z",
  "key48": "TxkaJW722L9ywQRpWjASsMrBdDCe364HrsWjUVbBTe3AMDs8Ru1mc8gJjRn6gytxgH1wmNGdzTqX1bfNMJcaQqe"
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
