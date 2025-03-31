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
    "4q2mBfNtGAMEeCZyzpMdabBmaJwWxgSMQsVeV5zrLnv1MWPrXDuLiE3to4VEtWSofXgmA7aTdXwAMEvRZvBzPFVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9iPhkmVu5ZsmLrJXPUmGzuQeSxZa3Ez2sKVsRXRQ8QvNGvD8mNWQonZSUNC3dBc2kgFVg6372SxKvMmuRsJ7paW",
  "key1": "3Q766RzL5fcMeLnrc6DzJGn3v7R415n7BpDxGBwtaJGebJYV4Ywk2BDvmddpU72RMNkr4AAaRVzmpvANKqt2SeJH",
  "key2": "2Tffi5WUrxxrQ3Urpcmxu62UdB7qcwxhXrTtmwzEcBsGU7aqf1caTFy93dcy2QKYwfiLdyMN4UmREB4nrQ7Uvd2i",
  "key3": "5M47QrZSvMevzM4JMAfjvuDb2TKZdnpudaxX1GjDFdxsSV6CVerGd6oDEC2mAYUbihPHy2UU3vFVsqCGkzrzFKsA",
  "key4": "348W8jXBLfSiaD7Tn7mkdtb1xNSwvPe4TnLxkcwEmp78KEywQwGyR2egEK3k9y7zmJM2p6QXAoXLd9A8eZyThcuQ",
  "key5": "3QG4QqLWT4eV35byPBJXmybNCqRDT8cwRmwCzdV42UWWCJEqCtvgn7ZusTB3MTnU58LQFpsnBGPy2tu17QUsUZFj",
  "key6": "4T712tg9Kopwuc4N5ZTisXZgmhE71cpoT8LcQVMPLyQXM3AvcUuXUu9Qv1pSCyTFE2NHvf5gTs5rC5XbbJmHV7eE",
  "key7": "62LJ1koScRSy2v6McmwyxfbWjoSHSsLL8g88gqLZWbrNaEcGNVc6RtcWCanrJui4YfhqsigwKdGJYpKbnNHAD4ko",
  "key8": "2LBUKXSv8HathaWfcwcTnH3boKkGqBd9qR1eL5xvsfZpvB9SLwszFVYcUGFtSkxgHrJYc9cCq8WVh7kppUm2Q1yj",
  "key9": "3TqXzGUsvy6T7KJTKABn2CTGndS3HBmy18nmuroBtmaggfqHSUuDGtaFBgg9DmfFJfZoGFXmKZXngJppzR2CDcS",
  "key10": "41xRi19QbNESAuHZmJxHYhdVsSZFH7FiGM28EP1GQgv5ZrJQ5M23S8P8wtEJtYqP9gLB3dsCN3bm3zZN7QkBwBZh",
  "key11": "4qvsYpVNH5pqkvBnTn9B9PcXFjJmki3Di3KFexWNBwLip4AuuYgPA9iKcWThBu8jRiMizXx7mRawwAKRwMydJZc2",
  "key12": "3CLiePrqw1ASSh24g4JsibPmACJ8qKjKSfYVoKGnfdXoa5Qjr2aE1PzqXhCZ4CNUkNZ1H3AbYNBXW3Pnq7cnvFtP",
  "key13": "49PdQBgbhrxfuZDzJ2X92wpPdDEtVTdKSfVFw6Lwi3DyYoBcMgv3P9oCzPrWkwVBcCWxKHKi3zHbaveHWh4T9ksK",
  "key14": "gFhZjCc93aKq2W1DN3CHXujMeYuEZPE6qM9ZeYqRtiieyeSzD3BEf6wrNC29ALiLoYieGZK98Dswx11XfbURPt8",
  "key15": "4zmWx7BB73rwGPAhReVdoJ2uosMpgtXdoV7ymBs83Uw7oVHb9dqGTirLWfZUxVTEPPBzMJThamzJoACNAS7vnWEQ",
  "key16": "4wa5WzoivFynZD7qbnFcXXsVW7pDVKMkdqwVNsiruAbx21xf8vu2ET3A4TUYtKBdubURH6hZnJFHXw5t91UurEW8",
  "key17": "4p835cbTokBzRc7umFCEc6As9zjNTzBmywdW81iMuU7BaxRYkHXyYFgABTEVg24ueE5QscWPcZJ4WuwtaVGiYPsL",
  "key18": "3a6riu3ddUu9Xvf4mwGtL1iXkDgSDGwQHeAxY29Lpx3Sb89GuQ3Hy1vjvntPpuPEeSG5u44sGMjEqtpQMMQrewfw",
  "key19": "aV1SdLULyw5fiyP4awouMaCNhmvnS4TcYp1QARhUbicbU1dVn5S9ti6psY6nf3Gnew13EC8VLJxYxXj3Fi4v4AA",
  "key20": "Z6fLNg9Pa5yfTTmXVsxiQZWCoH2BhMR7vMjXTtDAYeJ9KgFgcWuV6gCarZ2tA46ivvo2fTCJM4kfdpexBR2v7mx",
  "key21": "7FRR2ezi35e6iAYg26ztTRqj5rHQoKveLzN6avZQcCJwKrgXgjsENgTBFivLeSk5DKEUiLaaTzj6X8qa7UXE3EJ",
  "key22": "3c4kNZvf9Gp2u4qJL1vQK7eZLkGidtqQpKpqKQDFfXfySgt6EQEzBwFAe9hEoLpu3q7JZVjXg7NN4uKbWtyCfTcy",
  "key23": "4VfaxJqZzaG3htjYLZoiDw5G8RDMu1wXN7aT1kNJqG8w7DHnbjMs3Co33hnRWJMM1xxQc4UaXxipBMeoVbwXZDCc",
  "key24": "AcbUAywJFmaD2VX48Esf1psF8cfmDrhcmV6uLEaKsjuaQNjoiGgL4LCQnSypAnfwGCFXGjL2pUKe5yVDntJTBVf",
  "key25": "66oaS6YCyADvrRQxPsorGdmd9UKDTCsaNpuwaYzygLNgHDkHLursx2nnnMsJBzZwmV1XyZZzhoZKxMFTyBUfp1z3",
  "key26": "3UZSgR2QATTfMSNNERGHvQKqce1PZ1Lrj7qfZtaL6cYfv8gwtczL7PfpxYY5eUExcZinWMWMoECEJJELh3aFbb1x",
  "key27": "2NygydAonn6hszUfJDB9vmY8h1Wnj9hYshVGquq64tXF6GLa6SiQ7BYWJmKNL1eEWT2U6Zd3Mny4wwtosrFRVEhr",
  "key28": "2UnqVuj2xF481VwWAVBDBv183iAgGGtSuudYqTg5t1LS9GZoPGJA1aB2jbrxWpYJ66Sub8JMHGxqbRMcz2Z6T9Z",
  "key29": "3hve57upNj3FqogsMT4DWFL5ebzmxTeoFco7PV5RKuYgbUVPbjhJ5TCeHK4JeEmuwXBC5SWuPCJX7WuoX6b1vhas",
  "key30": "2cUsdrdktdqXrjPraQpN2hnfzf3UB3FJSq88fysfUyxrzHexrCjX51emTPRPVCStvfn9JeiCSN1QeC5HjKDRCSxb",
  "key31": "2fyCu9zEdz3dBWv2UbZQMehypqbeiY4uQ1WYuB7REpqjZUoYBsQkdAy5HmMXudkUfnDYn5QB21Duy76pCJ3uo4jo",
  "key32": "2qkGhb7CkjxQHRerYvNMRaGTu3f7u2UuKz4zP8191UuZ2ydsmsesCfKSouaQyNhQ63psjxzv7VpEN2z17NKUKywB",
  "key33": "2uXH79wLCyVUrz123eMxM3JsXu1vwXQnG8rg4SZeSLewEikMxdmjn9pKDir5raYvz8J6ZsCQppmaUVuzjVPJEJjX",
  "key34": "5gKBYUwUJPynYu4ifbCVcS9cscNPvotjDFUsW3qm3r63wr1snyRFxknYJ4MnkDrU6WcnwicxsCfMjZh8XsQ6QSkw",
  "key35": "4ao5j6noDTCrPfjppt1K222nVQV8roepM28kKVjdkw627DVk3JFu9ikSSsCWibwWVNcyq77mJ7fRnuKxy9vahL2x",
  "key36": "4PDVhN1oyPJiGXHPHr8oHbpA6K75TBgoQDcxTaeMpQs3STQKN4G78CqVACczmbFfrarGgHKvKLwdwgYhGkM5YbzF",
  "key37": "4tkZzn5WTrPZ6o6iugdrN7UfpJ1Xuw8xt4an5GrpARbgr7VLPKyHer4MFqA39X9Cs7YPZ3qKBHeD9pe7JJkHxQew",
  "key38": "4tp9qzdvTUAqFgQrecVQUamym2a7ig8H8iQ2ic51sKacNrQErLTwTQm23fwbZQ3HYetPrAZ9ZKr2qmkzTm7kq8XB",
  "key39": "5ZhQYeh957a1ntv8f7N57rL8Uy2qGmDvedpfTuqkuty8CZXux93XNGKAfemT5i3fyfpjh11PtWxbdeuNs53774V8",
  "key40": "4uF5hmj7JsTwi9xYPPieZBRDfhpC6AAJmttNXJbVRRagpQgfanu9hSs3JzEU5ZbApoeeaK822xbR5pukdcyUqtGZ",
  "key41": "5jyapyxaCyxXSQLyDMkrB4noA7Z3DMc6HM3CYKxAVN3Gkrf7wCUKwvFEsubcsGMNtcnzgdu6g7GQR8z9qXxeNhVY",
  "key42": "4D2WMPuKehghh91TWy6NRNM1eVrcMwe3EF71sn1yj6QHWKbPQHLmzfGBBBFfqWnNMRt511NFz1NhYihuUiqJXGT6"
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
