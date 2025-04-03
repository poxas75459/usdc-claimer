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
    "2aJh9UmSRW7ohnW3jpz4PzU5yk6YjfkDCbwKWJT1SCoAjBqL78tygbXSbo7ynrbs2PQE8vW7gMpyrEcTwoCVfhuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UmnQGkvrbWiZuGzZSNP73QarRvwQFM7afH99KsrHLGfZQEbicnQUL4WPAEBX2g3UPK6wSJwpRk5xUBMMP5JEPcD",
  "key1": "4rc7HAyxdioq2pqHqqMmgmZHxbdmJmfM1gxuquq33WBEGPHGhVEiTJMcqYa45NqgWjbYpDU1Ekd4obEmghAozLNk",
  "key2": "5JXUaMdBVYKKyBwo9AN7FibhYiSX9YtFHzShgTFRV7ovMibjZZVqAGCuPSr2AaTxURuxvGVBpUQAZz4CXyB2cm5B",
  "key3": "akpPpkJL14Gq8eZXViFvZwevBWstgE2Gu8XJS4cgbkP5yAq4aysnr9zYBRyGxhYpAuUoRAEvEMDxvijvDrUEp6Q",
  "key4": "5UcYm517t92Awykm1qqwNNXVSkvyoah7tBqvdF38msbfNYd2pWohG77zgwsYNR8VpGhCUnTWzVNdiEzrAhZmZ1Nm",
  "key5": "4L3YuagqKZP1rtMFuxYnc7wKgbu9jUoVkg1gih5wvDXeqTZdd9wT32T29LhvWLBUmjrpTEk5d1oExbc7nq372Eqk",
  "key6": "4bjsmUEYkn8ykvzQKcgNUYZtmFeuTa1A5nFuaiADLPxqYKByXV4oHoT9zzBELz1xebXbsABpSJWBtrjtB3RkCaxL",
  "key7": "JySfSr9pGkVhMDGcWWyc31mtSbhT2qtqvLQ92ouhJyfhUYV1Xix3NLrDiY2rzuxKiFF8aL9185gE8NdpLJyaLC3",
  "key8": "SY2r6PFAvVbcZ56sPWMFyVjAJcwVrApDX2ZU89nEVBC9WA5DL2txpYq27z4HozpGYd6JPdqtXgPJ75JigccKbyH",
  "key9": "28tJWJZie2rWUTcXzaj8AQojbJFSGqejZvkMFvQSBAkGVGGzV8naMyk4ESuWKpCMEjR6ZbedQS7DZXwNZJCtjZMx",
  "key10": "5vwfooGrcbcMY1m1L6RskJEEnrJKtSCb9F56xLv7xemqM5Mfc92wqDe6GpDh7C688hiXkFCNwDUbtCDMhMph614a",
  "key11": "5nm1w8ufZGmz9GPNz2Zy45xT9muz5L7oZBQroSNuu9rWpSiJRTaNymbHeTmzGSuDG76XRY3EGK276ZHBQV2JqHzq",
  "key12": "E3ajzSjqrREXyj1x7uWtPvahB5XRC59QFN9ZWQroKhjJK13TrgN5Fgw5bCW5kLww496dBLvhLaKCv82Zn97NVWf",
  "key13": "23tqspoGJEF8H3tzKERSzQhhuVLZnYepj8LBW71p977F8CyotUHFWo2HuKSUABeRPKfJChsS7sihxaYao6DipfrJ",
  "key14": "45bfoZXJu8DFyJDuqsmmVTqdsyybaNb5ioFnorXXaWrfxAGDXcPTP6U7poBD19V3bKkFN7ScGvixBxhxggjv3c3m",
  "key15": "4ZGzdyBamgboWWHtcmWMWc8NEM2L7ozww7zfCBXaXTR2oRPh7fm6txr4hEFrYa2aZXXdXqELWdha69WxSRPPqkH2",
  "key16": "uN9hMZwNyRJNP5foLYs4U6TPpEBQK4cnLFMBYvSALKtdKCqKHhhMbzNVv2f9ZXEs2tthyL8h1ZXFrfpX5fjPDaH",
  "key17": "WJcm1vTqSp7PF4jxfv5R7x4vi8NUvSpQQn931B1Z1kDajGtmozJL6KXaPgysUhpCH5RQg7SL6QVLJMzycJDKXMB",
  "key18": "23MeKAR2Q6t6ZBWrLptMJ5rjFFmUGwoHXjseLwSmEeZe9nr14YFNGCey5J6XuyPUaAHZ1VNT4sBkTjK1EpWsXZ4i",
  "key19": "yPaSGMD54nmGQW7tjCspzsS1nbCwMXvK2LBxqei4Z3a6WqDzwdSpeaToLVfrURKTjyf8fEb776txVK8shdyJwuf",
  "key20": "3fiJ6q8yN2gM5QwoHQSqgTurgNTfrHkBrqgKiShiLhkewfAPTCjAr4aFpbjPByokF4yf1BWe4PwvULVAuDRaturV",
  "key21": "2n7YyHokujDHkPLzmZzUXoiQ6MXxPLrHYx3E6pBcGpCieymLRPCXtsHSAZL2RGFrbpcseNXVjrgcvCQVah3Czkb6",
  "key22": "2AJUXcd5Ze3BRTkSxiovwK3dMKn2QPArcLJY2UpHszuEJJFTVHkKYmzW1wYSUfKGwfm2p6qw1ZnfEWwdjasWrThX",
  "key23": "5pnZhiPWzjPnX6rRPmqpbkeCPP2wzj4UULDjDPGDx2pc1mP1VTEF4dZzUhcei7rA6PkeZAcEMdAEomowsQJDWofG",
  "key24": "4b3vJnjLcrA8Na6ppBApeLvzsFnydp2numsrcbVsGaLqg4Vo4Fmk2jRJZe1vSGS94JkQYEMHm5uVFoQXvEUroYVv",
  "key25": "4T5t5MDvJboCfYKarfcdBikyHomYQrBEY15u4hKSBHHoY9n6YFaXs4FAnLbSven91JecFcbZ6X7qfRB7DwMxKuK9",
  "key26": "59k22xKpRrnhLae3ukqxfKtnSsyLE2sdFD7h3AByK3YDqMgAVZostg9xDSayaVxhESdn33h6aawMdJ1L4G7RWgdA",
  "key27": "s4g1PHbpmp6KeFQCjLZXPDodfN6WpaZGEzcAjjWd7UyKKyHCxuGbCt5i49Tftb4VuUgpTPrsx4aH84abGck9nSF",
  "key28": "5fqKBXcynVN2Wp66RAzAC8SXsq42BrCDRWoxtLQUaqX9pFSa1HGbytJ4Jf9sxbAyuBX78dBYzjKWbdceTZxbpBpf",
  "key29": "zUcvwHYty1nPnd3iRrFnsRiRQEK7YxGBAM4kEtuuYt985MLhPAkMovwDuaESDkxzaEouvA77qqve7jKXwwDdyLg"
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
