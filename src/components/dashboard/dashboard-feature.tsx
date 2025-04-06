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
    "3PpiDVeGV3e6Y6zqArskuBhpspZZ27eo7whMfSpHz4iyuysWdi8eTPQpSDarwScoJHygdCi9wdBPcXUjzWMgfxCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tj3TWzrxAwdMRchT4F3VPKSGWn9GaKjmgLJkHE6P1hpMmWYZ8yPCcson4MXZz3SorZ9V6E8NJ1u2SPHBD6TY9CZ",
  "key1": "64UaVSHFFEfSVJ42kSUBmUThvnpZ1k8M7fL5VFgmhWsNbNavwNTE9oA3micyykkg3VRVogT7Rf4gsAYhf5tACKQ1",
  "key2": "4bcruCvqNrzd8RhPMw5neq41VRpJUQotwsBytaiPUWUbH33pzS9Hvvj1UCnias6XeUf4vjEtfDTGn2hEtWkmC8ND",
  "key3": "3ARkV77JGyfwsFyA8SCWspNW2yeejxdYgfLWc8XVR6hoJ9KByYeKRaWCPq5p2rwMKQwwbYWoHg91UpNRdcMnwBue",
  "key4": "2nppgDPxJXnvGoPYUapMxsaS94ar3FDjfSZY5bSSfDYXMAMAzJVucsdw6AFdLwXXne3nep6dkhPN4NiF7nFZyrb4",
  "key5": "3v3UK2LkVCRYsoqFBs2LdzxsLG6o4BUkPHk3gRReLfqgQZWjqYp2u4KyVEiERTNPLscy9mV7uLcrv3Pyf26YX4in",
  "key6": "554v953upJuJTjcPXAKCcSzkPpZ8xaLaEsiiZHGqfYHjPR1LXsCeSfrvH9VxM2hHN6gxNzAW5yzj8Q357GvcZpBD",
  "key7": "EJXMcYUhg1aEnTs4CuMezANktfayoc2BZixti4xxtK6n9MaxuPKZtVFCAjqjawnCGVo6GkNFgSjbd6cpFEf8v6M",
  "key8": "5HxiTanT9sBsZwBzB8rF7EEePC7bq9vmmXKpCpHQUarU7GimEb2rc9q6h5nZR4wRLWaBp22At2jkcDrJHszjGY58",
  "key9": "4TjYh5nx1mMJBLJk7HqU1FN4RoPth3hMSoS8zuSw3ktRTKSHyQJMf8pDx8SwCW1vi1rMNg5Gb3SeCcdeAepcqic4",
  "key10": "45is9KXsvDYE2VKNEjtqDFdhsYvzNvBndFdkcJuK1Qrtt9L9Mw5YHKpQSMWPG4pQ5ZgbjFnJqbQrHyEPVxJVCnz1",
  "key11": "3kr5198crUEEDp7MG7L6iLo5SHqCheM38H89yhPgZakkJc7rePgPyWMfUEoKZV165YugDe9Uu3mcENtD3KQP9T3E",
  "key12": "f4Du69tMqAXUQLhD38n8qMvsShwGeD99xAaG8h9UbuBHLYpJVbHtCWoMR1teBHdm2bjkViuwUy7phmTqUkDXXic",
  "key13": "3k2iYQ4zjD8kAyzKhBFBFNvbK4m8w3Kr6s7nvSQpkmvSsnCAiikSzxqsearov2i4BZgwpiQBBZRDM8dfg41pHMrs",
  "key14": "3vweFDmki72TZ5ADXmoih2kwoeBWkY17tWm8wQ48QvcYuAxYVjpESdRANiS9oNUnyaQwxv1tCGL13L4XQiohwnnu",
  "key15": "3hTuZJ3qtKRYq8amXScf5GgvESSXymSQ2i48Tif7xMZeuZMBhBXDLZjXU2QXAPFw7zJtbJtQbJV6VbkskEUc44DU",
  "key16": "5EGBTPY1GsGBRZKpxnE4eWdgGtywNGhVxczsxtKc5bRhfavB1sUcFUofh2CuQthgUyWLNaN1EiTkcoesBYFuVQ5x",
  "key17": "2jEKD4rAPvRZvGeQ2Q9Hig4wMYY3ZQkpnpbzqLVMq8XWgZMxkoF8TFiDDQpgExRQ7fWiwdphcLbxDbsZNmgdkhKz",
  "key18": "3qTAk2Hqe3orUfjV2cz8rHve6Q7th11mxCThvBsofAEANm3dWvRM5n5QSPTtvu5nKV4dDoTrnS9ZyMSTSysXrSen",
  "key19": "4cVZDdL4RbM2NxPs8a6bHUxtq9jU1wAf9Wxe21rMSvBeFyjV7icVNaAK1k7eScugxL4FkXbvpNGRHraLxceMyviP",
  "key20": "5EgvMp9cJspEXKyJDazfEcALZicb6eHyJ6Dds5p2kY2mHb3VZJkXZmfB1aTL1vYj7qAW6Wz5f7EKmyvFjerKvNE5",
  "key21": "5X7VCnWzcgH7YR9dTxP1AidrreTCsmame4spH6C3nEeoU4CRhQGVGfHfmSvhqLfwCfyVeRH9G8YAX8BNQg3BJWnq",
  "key22": "4TcMwKNFW2j8GdDYRcbDxQX16x6xxjNUwHys2tzzXfYPJUVjtFxGWhATXCLzYDMXoBv4pp7Qe3JgHjb51nccKShJ",
  "key23": "2wSCc1RTC1fLAqutJDQuDnto7u2fsJb9oZVoHiZTdBqsKd8NW8fMgbJzhQGnGh6uEKuCh97CJsvHbqwgXGfDzufB",
  "key24": "F57H6dHwVBybwNsS6rWikAjppW3o9N3htiAv6LpQi4ELzMU7NnyoiuQWF5f5iGEDV76YSNgQkjqebAevFT1aH5G",
  "key25": "2K6JfBuhcZk84nNcbwuq5e52CcwSyLnD2Zditcur5Vuyk469CCdJxw6XfijqFfyjFuaCmMQTAWzqyKKJmwuVLLWp",
  "key26": "45ovsaddkmjG1eyJz8WCCyoApcLBww6tW2ZVU6PbamqcLMwgZWutQoAAbziK4yLWurcn7SvUsmxMjExP6tTMfb6J",
  "key27": "2qrSsmz8u8JznAjtNyT3YZJptLwEPPSSDpGZ6D4xUmhyNhrNHZjS64aPGV3crTQUPSdT6T94pAuMN6q6tXFJgQRb",
  "key28": "2yiE1eU961TSuxKFFZw63LEGrxrCfbccfPg49gQvk4XRwsK4isCqM2vSGC85DqB9kdWz2CUHaVSENSGskcXk5wL8",
  "key29": "3QQQoaRqxNPhm84CbdfSf3VT6twhkw5uVAaRfKS1vJFsckrGdfbELEJnYFomSBFZiUgFwmJgVtfUBkZXfQq13HKF",
  "key30": "vPoiNZkADPLM7R5QJpQZoJhR1SsE5mW1xtbgRNsPNZi3ZFRbXYbE6Unezp1BGE6J9wSuYcE26fiHduTz2fipjF1",
  "key31": "2kGEvqzvtyUPwRPtz68LoLZmGsXjVDZkF27CEN4wDXkp26XHd2K5nTMAU6rBZWuNdLwZSfqLVMoDozKE5F9Yf7wz",
  "key32": "4t6xKsmZtvQSp5jUtdSgpR681vmtD4JVJTPeBajwhXFjndMdRK2FhkH2naq2TwYrrHoAfaAn9Hhakc24TrhsYACG"
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
