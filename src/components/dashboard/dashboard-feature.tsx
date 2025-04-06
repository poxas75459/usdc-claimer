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
    "DCWLBy47UxhAHgxUDSSbbQsFXSQm8qWpD8oHLfuKuNW3KHPzurRrJo95Uo1cM2XcgekDYMUhHS5JXEqVCzfMxQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wUZ5LazWK6sWELsLjGF2YSGMmf8adK3nr2vzQnUzz4UQW8cYa9zU5dWg4mZPX5ESUvF6yCccGUL4KereFB2Lbtr",
  "key1": "YCpbKGxvjQbGd1EiDnamkrKqfXjWoqkxQAsa2z4jFSPS8KASvH9jRHwLFLb24vwUgAmS5GAuHV7s4KYR6exeYKY",
  "key2": "5KGRmBrU7ikmoWKHb675WdoHSZEWxLB36UR9TJtqf8aNxZrpMLwtg82ps8Dv24SAfhbVc19JaRV6WRe2QLRDhPxD",
  "key3": "3YRhVCxsFNmHXsh67TAwbKcnnbCgDJNAjSKEXHw6KKXTdFAoKBxMEV34VXV2A4XBpB2YzEwjMeT2wcbXatD8x2PR",
  "key4": "49XwjY1gVZCajafhk3FmFEvWhSer7g7GrHyQNRcPC4fiQUudtgd1MLSHxxxarNHVmksuivoE67vSayf8DkhviTxj",
  "key5": "3cVfFB996TQR25C3nBYMmtsPJnJqwtKFHaXwB6qfPFiPpFW9vR3LQx62N591V6emssLiTJNcbAm3WiBPBWU7BAgY",
  "key6": "4EQZzMbbmBBvaFwtTz2C4wMkAcr2MpcV2W1EFL382WBAGCwxP5QhuVHmMntenh8d1zG1VzLogFe1QRyRe5etqYUu",
  "key7": "5QvbUYTRxU4tBX7PubWCfxmoCf37ktjxHX9c2zQJNuH5w2f7ztLoymwUsXPyDYbxeM6t5xfWCzC2pdUG42hgPkjc",
  "key8": "46g45ZZzj9kpJ5QGk5mhrC3YR2wpZXmNm9KmnqomKtuXSMoKHfTdpKaR1zpYMiEKBW16honc5jGJhQKD6PxqNvHh",
  "key9": "5qPoQqbXchfmXFJmwUxWsSMkpopuWWGGBigt8gS7GuXFHnP3t8cj98RHMrU6Z9k8H3dQoAnBbrNocYchbv45yRvg",
  "key10": "4L4bh4PcLg2xZUATA8mvdXxzV6g5zCWrY5kL7Zc4eAKwfTSptRAWF8XmjkXfcerzQ9rAJmD55BoL4uxQvmQCZ23a",
  "key11": "58ayThWoPBNscE567Vg4gjEEjZtaDNJpH6AZykzqNGQAzXHn5kk8CLmRqovkvLia7H5ofh68LAsxhVkMjjtJyj2t",
  "key12": "3P5JVoC3wYGnEQnr674EqdDipy9WXx8Y3V5tEnzgcdnyj1XGXVjfXP4oZEPJNffzxRTLs2XbPp9UzZaiVW9MvoA",
  "key13": "42bGpVoYqECgkRWKkUhBTGkBkj6ocpy56Xmch6z5gk7VdKFMqGqVQhs6rBh2zcFEFYDbViSghBStELQcJwohBr43",
  "key14": "5cbWWtMFKNnG1bEJ6oexo5q2hgLt5KV6qk7zQwamW3hGj2XTZgGQcDRaMvSJfxheMfdkh4sF3ui1bFGnoP57aPse",
  "key15": "M16z9MEcfiMtrYEho6UksBYGeVGqCQyg3PdsmmNoh83dP2TwsMW1RZvaVt9CzrejspPjpqxTi7usiGH1KG2NmJP",
  "key16": "42QQLGf5HfKVebsbjDmVhmuXq9ioWVm27C6FyLJiWHBzgJzFkXtiiMhGsU78NeQrLFrPmvSNLPMCppmn7VABgorG",
  "key17": "6hmsk5r3BLgXLewWWL24GNV57Ws7ZNTGZoMQFR1w6GCws3vszQT3e6mCrqeXSxFXRpjQsShFKNkKoH4eYjvHnPU",
  "key18": "5H8aoGmePeWDaijLmrzhWzAm4qqc2R5F6bGtsujQnJmUpaimbDkv816QrhrdjgwXceydcoxmEhYzJ3SAMc4QDGfn",
  "key19": "Kw6wXvpXxM9PmMzgXxhogTbkE8Qct5qhaqMWEa3eZhF322HZAxaVdfmTS6W3RNPxYTdbBsreqdK3TkBbFqii7ze",
  "key20": "5bqFUqRMpfN27CxFinpPtzHf44UUT1caA3xojNr7DinuPJ5uSga8EsVhxjcMnTqJygzN4F1pB3W76KGePTFo1e5f",
  "key21": "3bbmM9ga5r7NwBUsH6epbK2A1yqCaQTDJrntUgS8DXCQoJVd87EnVuECEMVdr9XhUo1u6GTA88uWhkXTVaDH2QNW",
  "key22": "2crMZmaCexK8g85M2Q3BysbeMcgsdSt2QtnpG5ZZpvBeTm5Q7uLwxwhax2j73784xLZVwXQuBNpET3WktoXGbjsf",
  "key23": "4eZRVQGCYkDBjMFSpWq1WFfGKwug9wCPzJKXkCFbqM3BPKzs4YW1buS1GRWVze3vrJS28gEy6dmbVNDBVNay7n2L",
  "key24": "j7kZY8gBiGMvuQJiKGK9VteCeDFfiabJPfxGgWMNCvaM8ChsZd7DNipJfMXkFbkY9gByuLLnc4zGzndmousByBc",
  "key25": "3HjzMRUhtzxGcqEHqT7Xa3zGjSyFZYSR83jp1DNByXGanRvLSh2pgWF6QyDd2LZZvoWDnW3D8ane4wBuL8jyeXBL",
  "key26": "1uQSg5chTNMxffaeHb3cQhMr3dghsbRYNqXgEaSGngJa2vq5bcyGTAq5WZ779DSvNYc4ZWNo976F96wFnCJT9Zv",
  "key27": "5RieG2wYfRVaZmztxf3ptJsbVu9dBHyqPN98YtT2WP21Tjmtxm7YrjajT5cXXBfwdrsdBsY1JFvYiqLeEcTyD2HV",
  "key28": "3PR5gGHdRNyuQgEyeAi3Ly8DdyUHLA7XR5G3uR3CHYivTKb1uanHC7c5kWH35EvYCqVRTVmKm4iG2KUrGUK28mJD",
  "key29": "25cqoXPCmiuo46iqmVWyCFpwWJsiJqTWPqGCEcPz6mM1D2CyYhkd5aDdb1LTBEmZPR2td34LmeG4nAviWEv3xbSv",
  "key30": "5EoDZpCX2kz1XYo6euG4Bp7z2TyyXTTpW3bGzYGeoHBPaMzNAjxoVUz4d2HFYr36g3tfPF6G68CMdrdRXersYd5f",
  "key31": "3sWgEDHdMv6y8qoGbRRbjCYcoy2LJZko7Y2Hn4UizqGAvsYWbsV8V98LLxZWFRqeBLsuhSF38QRpwwVPqZoQ9iGc",
  "key32": "53BNE6ouCMLnK2zShY2WMvAAj6H9TJCnkVAaHCP9Ju8nsbE1fxNzytWAXS1swo5xQN6ALht6gWC37sB4rJrf71ob",
  "key33": "36FdVqpWscyrgdMs3uNj1CekWs51zGThrsovfvu9YpqXSCmvwnmk2HaDr4L4zEvARbX69bK2HtfnRBR8YuopthUy",
  "key34": "3PysdGBX5Xu5PnKv7yzqXWpVgnv3eyvid6PxcjPbAdbL5mVPAPpKcpNPt7Hn5F65nv7LhQaHUtPQCvjriWVcvYVH",
  "key35": "4tv7D2f6SzkPWSAptwR77e5tWtFUWR2aj7USWqqkCkFgYvHqEAX4aSoCeqYLcdBxqRLCqWm9LmHhNFzSuQpsgSti",
  "key36": "34sHYCe52NcfyXZ1XhWqzvdv9nP5jH83DrtQ5PDCHscurimNzNouTfrjiVKAYBqY6iuaCr5tNSUqZ7KBVDKsV12",
  "key37": "47sXz4c8RoHb72naF8nMY4qdAjp6jycX448de4ov9g7GiohQyRmUCx9WT2UtWcic3g4tUBASZ35ytuN6NLzJjjbb"
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
