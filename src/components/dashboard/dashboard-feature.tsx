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
    "51FzD2bZz5boD24eZ7KcDNpbzNtrZHWJ2fPEcyiVbhHiZm3CA3CevCv1rbZ1cAQGQFB7zzMwNakJpokzRPPHqxFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59a83xhznvm2rSshmeBj1Sz1HfrK3AqbaLaw5StxE4JpUrxuJDG1HD5WxV2FsiD3JeRHg9xaSkkF3UhK6e7o9bnc",
  "key1": "5tPmANbf2vYwPYE2HwjRhUmdThJiKZNeLiRC4TeRE6usy6UiU1u5kPCESzN1UNwX87L8UD3xdQmSEzj27SEQqnoc",
  "key2": "5x4SUBHs4ejRcZraoa26LzF4VgX4cvp9heCX6tcFYYXCSXs4uKDa1BA3BYMFNRLDBwBCUks33dAS3nQKoJccXS85",
  "key3": "54r6wWyiaYxoYZxuCCTEQ8ueaapWTPMrCoPNFU5pyotSZ5eQr6qqqsY3dH4aemmikrerUeZR943NqBPvDuiKiZ5q",
  "key4": "yfP8WfEinCMZSm8qeNBUMoqAptEmeb6QpkJVVEChZnvc8b2MYkXgdzKnvVEpjX7x3stMLoWVvGEYN9CrAQDj8LB",
  "key5": "NLH36CQR9Z9fLPTQ4LFLJMYynVWurVgFqLiHDmMXjLTVxxUth31ojnk7B7J7MX3GKDV7X6oe3q4XtrGZf5qg1wk",
  "key6": "5GYVw16tcFCEmdyemtDWGFJiZMY7XeTLz3xFXvUcnwSgiXNyMCR8VtPRCmqsS3QU6rxFGMH1Cqydwz4uFFmv2vSe",
  "key7": "PHHm4ds5w2SRw1bTJ5Tj3at53bb7euAa3pzoMvr66H8kdHAeAUuykpuRAMQU2LXCDKwsTYWQBfaTKS4A5VLEJgk",
  "key8": "5jwcX5FNWrDCgm1BwH56uWcHFbPriJnvae3BXgTdRzVjQLSauXDDuf2gLZF9VKra5gxoLmpF1C3C7JDha1HBHTGE",
  "key9": "2iRZcVNaHFPRdvPBZJX6Ti5PzqMD2WWpyYEk1nav4TeMtAVoSV84vKTTLyhy3R1UVCGYtrtic4FU4FJL9uQPkt82",
  "key10": "jdWtUMsyjSmsQJqzxBXdSpTuZuPVoS7XobunsWrBSzRfckzBwU9hxcbmwo74vtQn4HBGE9omCuW6neLbrWknpNg",
  "key11": "ob6fjrDBS8phHkgs9iJdR41gvtmvyf1xFNt3mqWGDBgXXVysdrMKSz7p95UQqePjvZVvLCuk3pTGr9SY5a2xosm",
  "key12": "25QMwZagNtw6JBSt1iLFo1kJqcoMEvH2bNzFzkBGvSHpKCFbK55fwhjSjg8vjdXBuNGLKqnYQB1ubrNEoZj72EqM",
  "key13": "62aouYuu9pPLqsrFujuk2HKCprS7VP6ecpTnXsKkas1PSfgvk1WWNik9BPgi7XChhM91GakPc6ehduWMDdfKFRKp",
  "key14": "3MXsXSPWv4ojBZJ7bmN9uRAZgj7muTE5YM25E7SeiApokP9qK1NXSUDnbbZxyEbYcNLt4vweHdR9fkooqSwnJSSt",
  "key15": "2pC83Hixk69q5ubRwEUAqEtrffLrNamnzSPjN4dUMDxw2VmSNTNbN3JhFtmC6MQWwM13tkhFypWneDx3xreHxQ4q",
  "key16": "FTo5bn9c2TYFcZkkYfBMzKHYHFmRhGkiQ3DXMWiAwpQZHvg2gWFYMrRFDVJkfic3q1cEaTmu3Qy4ePAckZ2wHxJ",
  "key17": "4wYiWeFssM1BYBX3NH8rjoGix26dvE97UtNKgwQPmXykW5sJ2vnuEqnzzzN1aZn43LvTWphwrUfq6eEYhwUfHWgg",
  "key18": "4c3jRVVuPmRUUpRBa7xUY2CkwPxVkARxiSXefHHQ8ShoyW5zJG5n5wgczfGbc5EHDCeToxf9gr478rPyMTVz4Lh6",
  "key19": "eGzwVbd7gur3dM8VPjaP8GS55z8Lmmv2tYMMbeuCwwTQHTehhgnpDjrxRazKQGMcY8Zv6LPDcCoPZkKWjDQAvhL",
  "key20": "5suKa9XnptJBoihApBxywSHJiXYCaDzpDcucix9P8orFuASJMJDwr4jDTcJSM5WGjRLdABqqa27cRMAiiBXMeXzb",
  "key21": "2UjqwtBF1MPprurUhCB2zL7XuqWVrCspQVL65MxfpTecf762QnnYPC5oBH25fiaQq7qw8tzE7Tna8Ns3VkiLiV3i",
  "key22": "5Njey34KDRrJk66qNFE9cKTxp96jceKoAaa13rsg6WUSx3HMuPBykAh9UmCYBzoBynA1hP2RttsQBRBn3pBthJ3G",
  "key23": "Svy3g8Z43hww5yivEjyetQE5j1JviNuSXNMYxPoz55yv2F6QSVvty1jtn2KDUgFzFDe3FQ2djRjeeFDaM5K3jgg",
  "key24": "aoEv1rjWF2sN1SLzhiPvnZMGQGyNvxqHW8XhbHaCoLa1RAfWTTa5GgcAFAC7Ytr7qadmCkb82VVXiUdJ88MkYWr"
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
