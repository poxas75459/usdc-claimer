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
    "5gbpFKRudFVx1GYKNXk71CnBdry6EQ3NUMQJDeXkPzKtBucc6sCXLpfMktUiL2EBkVSvYrcEzKHeq4Nub44tPaEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VG7168sBgoeoQX9LrBVokSLb9peas5HN1TiYqwD6ECxMKr4TK7WLSY1tKRkBaFFwneFySvY1wPhsdY7tYsg2iYL",
  "key1": "5MVGufoamf7E8s2bQsEEkeXeWD5kVBVVcKg39gJJMRUk85iqUT8tAC17sMPc9ReA6uYpbmasSNF3V8nLnezC8Ln",
  "key2": "4Cit39JWkWFcb3KNWe2ZoCFEdr386pgvpeXWGd7ZMTX2LnMwT8zqK5PUEWzva6B6WN5hwysjXAcvMzjNsRJuTv9q",
  "key3": "2DfEK6W9q5aKF3jQiTPrL1zsbrz3Rh1aSzBj6rDDLEQo7vAEPWBrbv4A3eogj47bzTbu2ZfsYcCoPvRzwAMqsJeq",
  "key4": "2inwsZS7AYtzutjyZGCEhzXosJZHHQ1XFaMx6LfVPU6W45xHRuAPrQAspUcuGAuKm3hnyYHgt2QepCS2PR49hd5h",
  "key5": "5TR8QFXSQ1J8LyJQ7BFUBK115nDabQnuKsTd7a7BaBXqnyNhQ1KWZeKT8BErXyCHdzo9uF3MRoHHUbJcLozAA6Lz",
  "key6": "2FVp7E9FG9TDWumeCUMynCVFxu82bagPG2Z9VyzSfr7DeFZffSrjBTup5rtaBoyaqAcDTmZCw5kxBDoSLsn4TK17",
  "key7": "5RnRyHdXc2rvdZoK3SR5uK9mg3UdzCabaAkCg1YguYMVG71VtKe17YxcrPndchjDgh7gt7TZVLxokcjKvnmcGxpc",
  "key8": "3kcLuwVwUNvB2goY5BtHuGeWzM3xfUjcz9GShZ5zNp6Gj115gvqJcbJEr8TPTfCy2tBHQdZiwPcsLmkBDasicB58",
  "key9": "3dAuZs6REWaSaDP4EbYStaYkA6ozxnSGquVv72VTXEP9aX9pqWxVciHMk3B71vBCtAoburYNVhLi6cizy45cHUu8",
  "key10": "4mfuAcs93pjbe4dAwEHUsTe4TvXWZYNEhewa1yebezpf3TvDW79YfipcbJz6seRZgicDQ9Jjg5PrQah3beusG8wT",
  "key11": "2rWm2ze25ojRX1AXBgdjWRTsSrU34tnN3Woetrbn3AcKVTBSZDYiLT3L5e4Jt7HzEiVsk5ynHasJWnFXkZhskmN5",
  "key12": "21kMCPNSVuLNJLWu5Dg6XLvYRHAkgc6KTmUhVCd5ADxiqtcvxQAdyRYUy7B5dAfiYyPhHL8bVmRwJoydMyNpvGsT",
  "key13": "2YkyVcsvjhSE7AqCYmKjwbH6VtZLWK4RTREZL1h5NtuWo5jkoQExM2vPMB6f8ker4H5HPVsbtJxdKowPNaVRcDNB",
  "key14": "3ftmqKCCooTdTKT5qshnnHNeWaUkpLHgmucE8TAg6KQXnV7wxvado2jmFCxrpEpfbh4mE54Z2tTtDepFC7KuhTVw",
  "key15": "5vFoSnqgUxodH3j6DSt1TN9rmoy83fvB9hGGRTzQ3qJL2992dJKthBDhnB5bh7Gj4Hw3NQDSGudTWoV9kWCh6Jpo",
  "key16": "wW9HDSFusMJkqZs6ZRrjfN5KbpF6m1x1xQvhv6rP2q1vGpFKvpr5Mu8CkQ2zbhxz8iCN7SrNLP4k4L6tMEj1ba6",
  "key17": "3MK5MgCEYvHMHh2hgPMxGSFAVeqPQ5QhMdLhWc3RirJFNEB1ALn1g8viFv8c992tWgWhDfWKKTyggqsJ4ZYpNuM4",
  "key18": "5YFdRgtBwoHepBe6mrj862NhoxdFppZj9QnA7NpaADyiY8sa3KmYsznkYYk9vxPpKDb1pAKD2uDy98gNZachFJYG",
  "key19": "3MvgUAqDLN2zTc9QRhGVskZ5YsRxCvkUmS5VhMZGbgTi1XURkaS727mEqakJ87rPEi2QUafYEGzZueUx5yWHkno5",
  "key20": "7E7jvnMMLF8W8HPthTKJersXE8T4SC8v2KsJygc9FX7iy46PeDMvVEeGqQ6gZ7vzThT7EFApYB6cato3z69NEeK",
  "key21": "2dwt6HiETvyfVjQL4GsrUvA6jFhK2jTJK6JdPRpDjdS57pmsKMgPTpdND7tkcnkBHC1Su7T9Z3yuSWr6gr6KH1GN",
  "key22": "4yYAXcsz44ZmrjSjeGX3NZvNKW7QwMbBihFDFNmjYB14UxNWY1ZKhkkpXWSk9zseRhV8GPZEUyZ3Tqf65mupDaRU",
  "key23": "2dimsrXeGVCQ1RyydQZuFguSgdfKWhMpJAhaHjDQJRHXCLYuPyrTsxJNSaGSe7A9RzxzP4o4QtPQ5CpkvPYpYaRY",
  "key24": "4zfHbuDntSPCniDYwCfKjJ7HURAKAumr9rVfYsVCjfcPi5EJTif1eNLgDTCNA4sms6SemMCmLbcTzsfX8KCzBrBR",
  "key25": "4DMe8Qt1JjYXv4r6BgzBVRsDmF4PydsPYEDCKoVBpEtjKJ61aaP5EthiSegJ77ms5tW9NvJLtsdDa9zfqrroMB9b",
  "key26": "2ERScgs2YFMQ8sPvBvkArT2bqyqGWTTGA9PSkrB1a346y2Xd6BrPxTaph9eQBGNrhxmmqPx3rYEgBkYi8khXoUMs",
  "key27": "314HMYAkfed9SixLj7erf2JvC27CBt3jwdsM1vCn3ZRSQRCDxwLmvVi8TMZDNqJSm3GH5gcmieiduTkZDXSff383",
  "key28": "4gQXVVFiWheS3xajZZ4RyPftfaRsSqY9nNLSKkrEALqDMKV4FfZSmkGUqmQHo7w1hNqA6yMoUFfF7By9iL1tnDA6",
  "key29": "5jN2wZSdpcGeH993nF764cVFuTX8zpjU4CYMrctpuAumhVbPFq4ZfHEtNg4v8gapVkJNojyp34akRXqxHd9o2bQw",
  "key30": "4LQmrXwDf27Ud8GEsxEZvfNQ8zyvwnJpVYTagi1porzbGwm9KoVphQWZ3Nde92yAQ5oowWpebw16VBT4VdzZnTNz",
  "key31": "3JmEbgTwMxcuriKsFbjzZTwtHyUL381xeHLaffiv2aivz28ENtAUny2GUEF5okyzD67nfDxrceArD6iEhXkmpa27",
  "key32": "43iS6qvwyJCz3vFouMjioXt8ujkKwfugDCgux7ZWhCDzRHqWjnL1GLaMpArXbdf6PwZbT3PPDwzrvusMbhiSJURq",
  "key33": "5ZxSv6c3qnp4VAshHqxXCgZQ5EsqeaVdSuowPY5j3kCd3fW4JDf1wz7BCxxsfyHxrvtpJrExFrR39dNK8wBvCTMb",
  "key34": "2DBYH12pmK7wyZQYEsaqt8b5qsZ1RTcJNMgZ5fx7nLinUEhdLUjYB2sLCr8gHxndj4UudJmUwtAxEa8M9DGdNeB6",
  "key35": "2yGadxSM4pLbTUxe2omoLJVi8T9t6WfcgX3gm3gVotpZcTzJTLanLp7qVCskimCNMMch13pmQxhHkssqnHmgHCZh",
  "key36": "51V7vEjWJGXFpdRqFXjzG2tUp6NZgSihJdAZo4mm3L57iQtwG7yh99G8X62vkiLYzAxZYPKS5EtbnHoGpSaAPi3g",
  "key37": "5D9Hhs6J3FL7SXLRSRYatg4VzYPgivUSqQWb5yVA6jg4WSemGDwN4WdQFw1g9STmykhDiBeNjWM2VTJbUJFfHh3d",
  "key38": "5U6BCfWRfjZTzkXM9W9vdAQSAKDt2jcbj1pqpBFdjEE8UWfc9CTt6zbdJgciXfqxyRYJ7idM2nxCoYRHL8vhQnRY",
  "key39": "24rmhF5mtAoDbz8nf6mTHeHdHhSbaBooACiEUWMCbLgmZ42esCjutzJ76VVynVe13mhMvM8KuwwD1dgfmCSvRn9r",
  "key40": "3Um5W7VEBzvnoXBTer7mJaAdYLbJAkGHarKH6aBCWKukj3xwURVD5Js1D7PhpdUaoZ4TcRGwE7Um1cSuzaXN7QaB",
  "key41": "ETZaGtccG7J1FRGYFBFpJMF5e4XCUGrRA7F555hvLiSoof37eTvDWVfvaRfBRxapHHu28WA9ieK82MZc8uqSY2W",
  "key42": "3EAGfpzaMzJcQMqtyFkUbLEatbGtxLCADWwZ9dfEVd87BBsPZw7SVyaKKpgAZzKmbKcttuWQ9fa3o466Va6kogxe",
  "key43": "2svUwEkiiuEnJDcDNPBrnf8E7hXMiSS4VpVgZmwwGqf3jpZY7UYqQ8W2yQDvSx5pn8pKjh8Es6QArWZhGLnnRpcA",
  "key44": "D4oTNkPmsnhtRUw3QE2BG4LQdwabEb6rD5ppTdC9tHhWyd813oE19GGVQhXb6hDdkzJ46yErmaaXGhDgNP1bFtT",
  "key45": "G8d3MESqXSR4EPFnXZvHbWaG2Td7rLmracQf8qgjtPh1AWC5vcXvG4RFtA1GbBmt6mDRrYvGxoGfvo5DbzANghU"
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
