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
    "3agLcLAiF4KpJfMEkuh12ALaWoCrpPxgSdCfZrJjWfRdmms4WCG1ADzTYJUtDojHubaQ6rLDVunKFmEdNnKmv59B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f1tS8YQ6uFvWAMCyiu2WqE8YHnV2TkNcaSmskgQjovX6WkxnmCY6Js5EWaEM92gduoLiqqQRoLFAg8esMhVeq2o",
  "key1": "568UUPg9z6Zt5c38G3WiGbJZMnq7DKUMQF2hMesC3jXsfECzMCDBmuqLoEuk8VE6ZCrZfti4Up3KMheGDRWk18zP",
  "key2": "3W6sQfmJeGHjDzFE5Lcp6e7dMPg4z9Nt2cEtSRP6a1C23B71frG39dyEjHfPkHyjHuEP7Wu9iMNDswkThUoVb89k",
  "key3": "8WUwNRqQiuPTmJfiLYRyMoKy6A52Xk1x89kRoNVVqQ3Lb1vYTstkYgzgBARWPbcex83TVnGbnjDL2fdoijPKgF8",
  "key4": "JEZp2kXgwqc3KEoE1n9z1uGXuGNjkbJEEVvnkeBwKHxTBtcSByWJRn1R7pvmGrhTomEzsRDkqj1BqvZpjjvTYqm",
  "key5": "oy6fkiWXULFr6S5Rh6aTz6KGmwE4SgGajVZXWXxZiSwgUmoUeZnV186soFQi9SUAMiutCkVB8m6g1zJdF7j5BY9",
  "key6": "3fTWMTD4p3RtEQjhfTeZy41vvac1eh4awdKPfvGYnZLKQTDAcwTEnNY9BCxyACzh38i9Q4w9YkoWjBh3fChBNF8U",
  "key7": "28VnkwRPVeMr3FAx9vqqTuDL1YzLbXge3rM18tsj11WT6bEjZktryL9Np9Jk8iwnMUYrxJzXmiozvx8t5odXbepn",
  "key8": "4PzFvdSDhapfjAr6mJ46poaZYn53rU9wXY5geSd2FyPub7Qmaa9ryPE5DNHtHrbPR5kXUyPtxsMhvUhDptr8PtmF",
  "key9": "4JubDUcrNb7qudEMeDc4kLMMBwuEePG6P6fpbHuQAJuLcues9DHmFK1Ver3C1Vn3zfYZMdiBHKKdbTWoKuyc5nzh",
  "key10": "4FqmR7tet8A1HD7sqtSPyXctL6iDWyd2W7k2SLjsz9b63tfTNTfF8gNX2agD9vtqP59cV5xWNyxuAqf9faE4DTH7",
  "key11": "5kyKLhDdhciBYHgR9VZkfZS9eVBRD6NbKfejvEr4p427oWZb6TZdrUcKfBkVmw8GDs1TqBnikipFggLwy8oS6eQX",
  "key12": "58vevDREGR5v4ZmxJCUaBzkfeKei2mhSoRbU6rYpiYcLL9Tzzueim6sgsbVgLKxpRKiHE6V7zi51yPFNVCJeU7Nh",
  "key13": "66HD5EKbbd6BvCMcJFReFNjqK1G9SatEpkenGYwYh7SkKuCwE2xS4m6FT8CimhFf4ZFC1wAR2t8MgjQwWqoqBUPg",
  "key14": "473XHTq1sanRdcgf6NmgiVA9PkbF1bAmQvVcdZhPs7pM6tA5u5diGmRaGXytSdz1ui2SkBd5i6kV74dZBwDCwrvx",
  "key15": "25naRmy63H6pzwsX9z9uZABkdq1E1sUWLx3yhcrBgMEoDcxxrXJ14hBdi388fcDwDut25r3P4AxG3jU2vzSUP3bS",
  "key16": "4XXgo4udFtRs4NHpB58gGrWj8WYxjPw78BP68x9E5jWQ32S42Us6D8kPd9LZSPjwmvhKXMFUFE5AYiZD4ArZwTwf",
  "key17": "5UKz5PLLiFDVpiitUfwnrya1aJL2eBqMPapv1rbxeYF9TAjThVkLWVip31g4mUZDSXsUDPtGrThkiZTyUkmrfawY",
  "key18": "mdVph989zzz1widfwwWU9oUcY2M9VH9snY5M7oSx4kKLDYo6VTWGKywQEE3PtJuW9tBBCx4zvKTw2BXFkVCzPEW",
  "key19": "55Pi1wUdPPQ5FPEZpjfi7GnV1nkrUmRNAmXNbtBRVgGiuCVya1v5CFbvEyxQ1GGLzXYWDAVsACz82EZyHBqcmco1",
  "key20": "5j6KLLfH5DZdJLNTss4s1xYH972WntHofhwZXn3CMrQr8qxTXLGR7DHMvWj6hDFLZbD35TLryci4N5HXn6ZWV8vF",
  "key21": "GfRfAUzioWoSzwWTHg9aeaxN81rVCFwpnbG4qFK3WMAvEoV9enxwzavwKjGCUoUvocZi4DUitZFyr4wd8H7KXX6",
  "key22": "3dS2XiQvdHZ5VRiSYoP7Qvcnv7fumY5MKH2gbNAr2fasBdJTVBGVSmLGSNwtkDfciDJNFRnLranveAmES4Q5iM8Y",
  "key23": "5H2LFkpmpwEGe5gfK9ZWzN8L84sh4W4Jg6aJ9QmrnUYGoM9Mj7XgLe5oK5zQDGSifLmKxU2SouuYBeZxcv7x2QZf",
  "key24": "63c9qNdwuMXmemKiD4H6MJoJrSEaAdkpMa5zXFwZFcQG5dGKyBTGB9EYNoe7WM55GqLLxSEUrdggyA1qrU4yXSMQ",
  "key25": "2G4EWDf51Y2Z4jDx9dMZXmhq5LzMtFwVDLiX4fYtfMB5xP1dAXZuNY8WMaUag6upCwPAk17rWhMeEJn6yqVyXxMy",
  "key26": "2E8DqTzto9v8v98LkaRQ6GHHfato8vz8NHh2fp14wj3uSmFFsK5sZuUApoSCrecmQnQ9ZFLFaTSADS4ZugM8DVKW",
  "key27": "2mtKMGYyJAm5WBVbyDW4YbyrZqdN4d9n6f8nfFqTmGHpTZJatNEcr1fBCiebkkdzVWMFfJSz9Jb9w9TvJDghoDFt",
  "key28": "QALqfVteGcsXBYyr1jqh1C5SDWMZLnaiqWYyGxFHUUVc6uHPUoDAFCYnmu997j24W4QCSqynaM8JagvSx5zLMBg",
  "key29": "3x8sekpJJasDcpZmYqa3QcSABTBPAGMxNtCKADoMtE3n6C2r2H6GSA792qF2hmh3NR4TzBMkRHVF6NHUqdsX1YKL",
  "key30": "65RPtXDoYW95b2wfpAtcBqusAagA5nuagN9Ruy47SwNVUrSoGTH8PnuNLFi7LYSm82zrKvqCiHuMmMu6qVyEqoSR",
  "key31": "2S8vU7zBneisVaRqmP5wCKdGrgsLpbmv1tw6sziUypDw9UCws1ZgxkoFh399S7EuhzVH85fwT29rN6dNowzXp8qH",
  "key32": "5asuRttHbD92p4nb26EdcC3oucYLS8Hw1kjDDWdet39SGkGJgAB4RLPGGpjzybZWS2EB9FPSDEuqC9v72v3RTxKw",
  "key33": "d8CRt3Rdgh6jVqaHDegHPJcgmdy9paP1wqyAYKCAZDs6KFEwBktrLg65498kFkHLbtWvUZC3LdZSiDsTm66DHfW",
  "key34": "2trViRGMKXvR4BuKR6zJzLjNK7EKgXrfmcqduZpLZ39ds2Ms4eyGj7MVZngcFqYSFy54wJ3ijMgr3JG3TZPbaH5R",
  "key35": "VdwmEXRMkPtNgBX6k3D9jQvJXqDXjewuqi94MFhgAFnu1uRP8TNmEHLEYCcMjwCRdQqMayq2yEAuBDdugwY8CDj",
  "key36": "66nrchKaBK5JZcQTESh5TqzxYoMsBqTcSqui9a3nkp9EXyJA2CRHeouCn2RdevcpH8jkKX54HjWf9YtvsyJykv7H",
  "key37": "LCsfPQkmq7jSEsoJH4Jt6XZ6tN6wiYdXzjH7oj6gGzp6tkBkfYdxwsZh3ua7JY2Xn4dzCzdPK29aPCTPvx6WAoj",
  "key38": "36bi8KMbmJqVbNp2GAE38cdnLgfRqeMfLFTm1yvikRfCnymHqjjQtXzr5ENW3Ws2pchhVyiS4sV1sv4QhkdByzYf",
  "key39": "5aw1AY4jCZW915TiyyhxoEmhhCF2tku8PP6tEu4xjBxrP7jk1cKnTGwX8gPsXN3dd1TBirjVugSW9pdp25Fqkkia",
  "key40": "5WpPkySa2EcvTvkwQ5S3TzmiyKhrCemSzsgQMG1jTEzUyxrQe7HND7eFLbUq9kkeqqnpomizB3db7dVwUMV9XvGE",
  "key41": "3vq3buQhrVUjYN3ebYg7QfNybhzS9vP3Njmjxd6SfeLuJBdp2ycXS4V6buxouyT4BGhm1UUq8MoDnPnfATtCNVhk",
  "key42": "3M88b7vHJ2b94fq9yL6yMi3DoRMVkBaD3P6i9eP3yY87Z66U3pm7kkZHWhny6HsZDwzxoqkncZj5adT9yfFeM2wD",
  "key43": "My8Mkz7rkF4oAiBoHKGBhnoMYqvX3odcM2cJA5k95K2v5Z2zY4pxV87qvYyeFBN98mfJ6BNXmw1NKXRmW4JftWA",
  "key44": "3Xr9jwpmpdsQC2rt4rfS9PK6eh6YnP4i2ZDpJmMnB8cPVB6Jscxn7Z1qyjm3zLLfTv7de8U3YeQeFMFiY2gf8bdh",
  "key45": "sMvZFtPBeTYrk4yzdUtC2N4QtTU7dbD4FzZB2AwpSDeAATUyCjPGJDns3eJRDUepkj49bBiYurMcYEQ4iz6ymuP",
  "key46": "4dTiHBtiBAdmmeuK2a1PYSZsv9jDjp53XRRq83pEACiBDpRkJuHZV4aSemySYW7fNVTa3xz3R4DnFRPN4emrq8cH"
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
