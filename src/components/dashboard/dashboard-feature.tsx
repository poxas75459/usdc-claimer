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
    "4eeBBBSM2S2Zn8k6dBZSi18eDMDiGwhHXpqAcMsNPWRh3DA2VCS7npymquTXwuNfYKvsFDEKjPaiF4FciwmrMm5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLNbC12LX1yH9kUQuCmAh3QR2YFxzvC2WpZ45T9MYoRo92HY4yArCrXh1S1bnBRLJP3SEkciFxaaXWXmxP56UJo",
  "key1": "4uZ25ZPH2DKSVh5ZdmKmoDYk8BRDnkMisb3xT8SaWy9n2axuq9o6Hp6b333vAa7WaauVTDrwA5EpQS6T9etigMyG",
  "key2": "KQrQG48bpb2DVCeXMJNZ5nSt5A669sSaYGyAAwt9qposAzc2iAB4eiDkDQHzViebZRZ4mXWFenW6EjAFMAs2ce8",
  "key3": "3VCAD9cEANpXDqd1LBKUwtptXmtBgEHkKZeJgjFc1PRjPUvCcs2ye5zjN5uYqoJWrTPjjk4G4pvnomgkrCvjwid8",
  "key4": "4qPXusd2x3422KPHyByS35g58m5DAQXA1ThW92mFeSJw8t4RKCoLduPcRKLRtdLtZswGPt9nHWcg1j1iiwjPvRT9",
  "key5": "2TjwzSCRAb81U6B3F3HYt9sMiyp9kX9ufHJqscUDQqqSzzbLNrnbxqUicrbFrqbx1XeJr34D34PNXBBaD6kd7tNK",
  "key6": "2EXbRQWtvRTuUbERk6kHt2YTW5rKvsL8yDraMqS2X97Ctw9AA5jb8ijmSESVtcDP8seWGCndfc5Kics68TwCvr5T",
  "key7": "2MANT3bAULMPyt8uj73gkSJ6a5iuYWqW5szK6JoPr89sqa1pagLbL8A6B56f9Tc4wDSvw2apwFM7V5HmY8Gj7q2Z",
  "key8": "5wWmwq7sZ7oHqs7r9EphY6yoVKNDtk4MXrHGUZuBNg4DiBoDMdHsQ7AbkoqYGVEPY4GRHpuNKkRLckgUkVmdBzSi",
  "key9": "2Pyn6VrEsLvqnVp52NuJmsTjVuV7NEhDKUJQH8LcciJKHfk8WdnvqVuVsHsM2DTXTk3xCi56rqA2Gj2cEWjFDVRh",
  "key10": "EcVYcaTqcdL2bSufp2c2P26CSK8Mdxgn1cuvnpjEfv6jvznKjggrEMMDYMdatAUL4PR3SM33cwNYCNN5zFVWL3R",
  "key11": "414JF8MBHPPxYGP53tmkEFoZX11kgpgVGVacGmquMHppU8GRCGpBz61H12q2BcZNASEN7DDhQV681UaHjzr2aqcn",
  "key12": "2Y1TQBg3ZurYsW5258Jmidbqte8tcXqAXBfjWAqWnAS7YpcYj75j92n2vCTZM4Z2E8t9xP5GCMvueFrabpjKvZJ7",
  "key13": "GAj21LKtbaJ6rF9ZN7JHsGZJLZPxyTJ6MRnpGSaTxwoj4am4UkJa3RFEJXkHbG5LqnEdqtic3R75pUhBbTugSdh",
  "key14": "3EBwBaTuL14vZgL94KgMw4WR4xnY7VaaVe6e5wBvNiLWyD9nvfG4rwttS7ZNHNjGKdzVgJ5VN5yV9X4wTirQtHyJ",
  "key15": "KLRkTFoEzgfKu46iqcpSZyDv8vtbaoVHtrmUsWdUj3GxUW2wejVG7DBt9LDyaU8Va4y4vhvfg2rwqdjG9Z9ERir",
  "key16": "RTfcjtutwFqMxZdeZKBu4tHdiBqRYpFwEzimTRfHxTZWus2euqjXMmNj7vzZiPkggN4guUkk2N5VgN8LDUCbxJ2",
  "key17": "4i48dhL7TJSErcSwezoaLsCDma9M6NEqyamDaBZUmfgA4yT4SedgeUrpMGy7MgkXhHKNw65wncpRFzWmPCaEght",
  "key18": "4m2PHc2gjKJeW3VjuHSb1yjdA3gcyMLfzADXy1T5quSycm6wsnUgx2ECznTk2HQRtxVsYKjgHYJTuimPW5W5pxDg",
  "key19": "3GxXia5NJRW78rxovu16irtxJe6sTCShVMrSoNLjNmd3i1yPMBoa6Y2V7rtRtTQwUHBzJWC9C2JcHd2nDw7ed1tE",
  "key20": "3chMsY7275MN5jnmjAU9pQBwKEQk8Ly3ZiwKqc8G7kTv2W6UsTZJdVcVfW45t76Xv9VV8fzEeW4NhoYKDxsYcoE6",
  "key21": "3oT2HeoCdcyFxVksPyoJ4T1zidMdYtsRMCSBE4fMhfBfwPS9yNunAgXXgykvqPyV3CtNEKx9LMFQjv8MpCzsPb26",
  "key22": "4QgDioSpw7hh1i4ZEtJYLDMDNAi1Sc5Uu1P1HZ3TBkfUwvFUKDGdBqXcayV1dL5ZA7gRhCbq4naqWMtbmYTC6qKn",
  "key23": "tCEncpDws166eBGRXn86heciVE6YU3941tMs1JNSRUTY7KW8mBogg6FfLECwpuMD5c6Rx7Jp9suA9eBUCy1pg87",
  "key24": "5Pafdh3LAB2Sv5YhwBUXyXMUCvo7JKor6XC5GM2s2AkVXzK7G7NoKcvAWM7GUqAgrSpxsrnHaMwfEGDw6k6eeAd7",
  "key25": "3aiBMAq5tW9QkX324YWAG2ZnmeqB5iystudennxjypLBGQN7DUZmzzaKN7zMKm331qkcexeNcA1hvRqmKQj9igLL",
  "key26": "HrMx6e3vLFKfEy7LWiZFRd5mybVQ4zEVRH9jEirJLysDt1rwVx2qB5jLdC6jpTzyTHzD9ZQJrzNXrFqKuGNXxmC",
  "key27": "4Ftrbjn2EiASEvshdB11Zqur3t79sqszbtqWDDCGMipc9HZDzsciqQs7ABmt9pD5bFUvaeXTvPhJWHRX8G5YKRJi",
  "key28": "5hbQat8HpyUP65uAuNdokxmUXrPKYtZ71mNqQmRsH1X9NrbcACo34qWDn6AEheqMrVJ5rcNo4RtWgTFrMDQK5oyM",
  "key29": "5quoh6SBW6nLFUvxGeMdxoY7pPvdtXFqA1FHgjjDzZkRhPXgHqecqJPiyFYWJy2Q3rQuq5E3hHB8WXbECMTUE6Jo",
  "key30": "d9DQFeh4L2rwHQfXKGEa68RA8BbUCScJNTarzKSxwXpQdBK3DG9qNjeSFgnAJ563BZ3635yT2bhTXY48GVDxnNB",
  "key31": "44uYxoHwXNvHRVwhHZAedNus9wvfKeTT2PRp2VCzCawp3cHwbQCE3pRHBVgkYyQeco8HJESGRub72RNPCkbPEucS",
  "key32": "5KGqh1Syb2Wy8omcjJd4Sjh49UfgZHW56ewtXzhMv5aXSJeTiaBTtt2C1SyL6EjDdzU46NexvogkGVdppWydHxXx",
  "key33": "284UiHZDspFjq6BGVsRjwoK1E1b3AZXGAx1f78aAsJvRpWh686mt6GYBWRbKTAYYMxHT7YqmMfcLqjhJtUNswwD4",
  "key34": "4MhbbZGa4A9e7ELn3vN9ePbVU7aGvVZQpU7q1jRu53jQsJfZ1tvDeem1iXAPfy4RFzoBeRCyzzGjq4G9nrTMxFi6",
  "key35": "YjdBuhGnzjuLzx5y1MvqmSknHX8KG233DBCZ2WKydi9Brcp4Z6kckQbVCJ4N7T1CDLGSvb5tKKpZpySP2xXcUBf",
  "key36": "3si2CWvMrKpWrUt68TTQeq3a96YHbnLgLzQLLQKvLy7nDW9EN1j6V2aNTaQ2MVdSzaGenwX6aQH2cuQoR7JUbonU",
  "key37": "4EkvMdtvGjMvrn5uwyybi6uzs1ZgfFmj25qCReEM1L9HWsGcHmNyKdraDv2cvGP44piaD3Hxc3Va7gxLNc7kokNx",
  "key38": "61arg7ywHaPhPEPAVjLJuyuXThVjVJyfCKPjFpun9ibrsM91YDHBnbpewJetX28zr9GuQyrungfCo6sLa8DGcrKR",
  "key39": "3paqw29hTZw39dkhjg9rEALLhFaww9HqL7EAFHmmKSsVsYWnpgC59p9j25kvC6WMSDqc4nH9aiunCZkodVdu65ao",
  "key40": "3s7kCe8X3snrDG54UnjCjBBXLke7AVanpBzceZRRUHG3smeLnLPTZtNnpyJNndrvNVDVdo49DCNWoYQkfUdTpoWj",
  "key41": "CLsB1yjQQ8ZoJRsT6B1aDSF2LqMnwny7NfR2xo2LGbEzUh1t26hyWrw1SqtfTkMZ856GFvgyfAaZyRFmBNEUBrS",
  "key42": "3f9GxRX4y5DeCzR5jJWGDS6cVdRejNEuQezu8YhUS9hFigJPFLEjT1mjTtrTTegpF5BvtsDEwZCQyogfVkntxyYb",
  "key43": "2ZmFhoVrr5WTz1hiLuVfvF3BqVXH8haGtzb45zDatoSoNwKuXmQ6paDPTmXtuWf7QjSdQhDsnfsCLteYcvuaCwX4",
  "key44": "3etPqm1zSZPCnkxFyMHR7JL6Jydmy7CJ1tt5qNdStanWzzwpnjC9FE8pPxcCUqURzDWDtaN4Nq3tpfv6vaVuR7Gz",
  "key45": "LDxJSJH8eT83rr66NMUFpzaoNH5eo3gX2FL351peTcst5HptAy6TbXpDbZhho5P9rVPXgYqn4PpYCLvJQ3tWKrt"
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
