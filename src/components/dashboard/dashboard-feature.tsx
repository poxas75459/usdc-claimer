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
    "2u4AtPtcEE6UW2Njh5p4nS7YoM1nX3u5K2JDTJ7oCn8RPy5B6bUJLSp48f5bGMRtNiKxNNH86eogjzQdMD1LBbZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PD5MtDpfzdx1kWtHDDKwadeAgth6czzqgDX26PD9Ju8VBqWcJN1K5aXY4pPG7iWjiR7UeXEbvT266fcCrLgbPri",
  "key1": "4iWVheRaWtfuJYsec5REcsaSahfaUMoFPt3A2FH3LVg8fuAg3EQoKqPKiB4QZg7TAV5dJQYFnE9TZArAexXDEktW",
  "key2": "2nCkExQfetm9wpmL8WcS4jBFC9DKsmhihxwm163PNLF7qxxdL6yjVTdPXChAVfSDb7uWi93JRAjWHDDeEAwX6GPv",
  "key3": "Q2P8FM6pbuHweh8a3BwhXVHtXUvwKBcgTz6aSn8TBaofDucewMr6eosQwXptHbw9w1SXCcJykGVSpDhnXXTy1Lw",
  "key4": "4V5kpogw27Ca7BCpraJohWx8yR3WwyXBrSfPApkdxZjwL94ZJBHBLcCQDTkfNwKRk7mbKsWfBMbAU7CKviChPfcM",
  "key5": "4nRdUNhKjYDkCKU2EGPAtg6iW3TLFF53tMFjdVgXrzD5pmWTDrf9whXyryDEy8J2NyUfEwWydkcixG8qALLfeGUN",
  "key6": "231J6im4mzesfr25YVYA58MBkCigX2hfu2ed1ckkSJYZpHSWQurafzWaERJMh3w1wpoafzLDkXTLewY2cHNLN7L4",
  "key7": "5N3KxFwo3M3beU6vXpg1KPFT9n1YETm1MNtRFCzgxFsv7BDRCXt7oiFuUF1fAvrFhym4UMQdN49z1qN4Dxvxhbq7",
  "key8": "3kXEFzsxtfUB7PU8r2dzvGWt7FWMmzAEZY8FBqMfFzSNQ5KzUARX5hNFyxUdNBAHLVzdXidaUvefPG6UKLBmNVnG",
  "key9": "2Zs39VBQF5ki8NkMMYA9X8dnMmFa9w3e94oSyM9tdfwzyThSJRD5qV5hMpf9UPC964AMkr5RsGWfxMewGCd1Wg8X",
  "key10": "5fN1szB22yZGMr6gN73TR5TLEHhFy8q2dcvtiATF3qPXS1N2ZpidSFjRwoNxM6H6dQHsikkESCdp1pk6J9yjgcA2",
  "key11": "2AQ7n1Qp2bJEwe3SdeqaJa9cFCYED64m1QkMpAdK32SKonUnhih9CFgjAgCKXWAsSN2KQt68AMHNJd7dcRTtAjkx",
  "key12": "3DTfnd69a9HZTec1BDfRgtKJqBYR2R7CArVqWDWFp4YzXir5U98oHi1fG94r9r7J7qiqywcKVK84XjFa65HrxTL7",
  "key13": "3TrjuNNFnVD8JbRexzonSQnc9H7AZWJAaafbrjRG46dgzzLd8PfXnbfahDqCqsSMowXVSaUKqKdSKHH8u99SCdpC",
  "key14": "3zrZP4kMhYPJ5rZwRg6rV8DX3e38LEtrHDmEqyAYgVE14CnZSqgH5exGV7J9dCLyG8VrXZhosp4Eq4kmT4bhSFn6",
  "key15": "46jGs79XK9sPP9Hv6rAD9bGKtGXiw19UonMnhrokEhFcrroDpjguydj6HnsgDWzjjv7FyMiKRmgpaSAAtbDNXPKL",
  "key16": "4wkeKfKpVCmZcikexcjt4JcwqyiEfV8dy8LxFpcwk6nmbZCemsRPRhpyXAP37Pu8GdYYasAKQeNeVZ2F3uc4zmAo",
  "key17": "2Tjhsg271Lyfz3ogxM1Sgges1dnWNZfQ8BcxPCTE7Tjz3v2t41cDk8jG2x5dwgmpRypkB2iaG8MfgPobtFG6Gw1m",
  "key18": "4ULetbzpWZHeUJojAFUAWeWR2G1mfai8f2m9fTtttuSVh9rTx68QJHn6pD8wEDGzrk6yF1QEi4eSDuiS4CRtQpMg",
  "key19": "3k9WwDSiaUcHvgmjGTsgEj9KiYGbuMPGJ371d5JSapd1L5p11arHr8WBXSZsJfKVnRHvkTy2YWMYSASjDn47BwPA",
  "key20": "2rgv6cz513jHjYtmoVTfgAryWhFCkMY6diKp2YS3bVi1vffh5jFRxdknuK2TZFF4F6JyEuGmwoUWCXNELe3eoSjM",
  "key21": "2vKrVirendLo8n1FNeKFvcpZTbcMcViWTSqJtxkdHZaHDHtM3Sz16euq6HrbooqxKfUfYpj3AN93cRjRTeyvezBR",
  "key22": "3xX78pjscL4jRMCcpSTZ7ADzLnS6s4WVM3w1GX9V84v75XGQHvYPUovbMafct2RoFyryQg8fZS9En2mtYXt9joFL",
  "key23": "1Axn1DJPzPWthujuwBvCNin2j4EofJWTPESjspYGKUiDKtcC7Fryc6rdtzBxQY4zkwfm1Vb2XhFCoJ7Kugar1Uy",
  "key24": "4LwqvxYXGimHLrshdZqQhJqGcAdTFEBPRF4mehzvtYFPjXbxQ3hm8kphjZBJKDzEdBGcZdNLNmkohLeFpb1AEFDg",
  "key25": "oPYxLLXwKPwHdvorSzmjHeuFcyHpjVDUZn2JgAx7QwMNJ12MjaqQZJzR9u94fUdxHAtmMFpnRF3189i8ERkCKaV",
  "key26": "3WXyDDG5tEUupxvUbqeUHR12M1JrvbbigcMctcxyisjDk9DvEtn1N5fgpL2GxFu81MvuYmFEAnA271Ye8DvSJV9X",
  "key27": "35pLoEX19XmbUMmjKdg1xFoUj1C91eGSy8KYiKSnVNkXwemScu2XWGPMoV9rP8USW9eD7pxzJNEVvqbnFEHsXNeu",
  "key28": "5XTySHwFPiPwJaijeEY6x2KkSBC8B3Jmx3uj7HkUKrXDDciXwH1QLT9UUHiQj8KUUfVzjDPLoAYwk6AhvsdZMzBJ",
  "key29": "Zm3jJSLCrTscSNEXoZ18fXM9iNfpE9PKMkoaRog8Y8nQbsM6Nod79qbMWqZ7yrtShq1ZBavAzCAzM92v1dbLPrQ",
  "key30": "23cje6aobQGiGp8XDXfVkL9WxhDtWec5rtXcSnq9XYN5JaBnxM68x5REqsNXkBysSTCJ3cNf1LJRXsC9DQvEjxdF"
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
