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
    "66Gvv9t5ggiVQxVMeqca1FG5LvWa8XRWDpaPXFaHUWYRDRcKUAT6fRDfLmxNcEMAxmHXUfHkK9URctsMV8tzdhcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZaxtMKykVwVi5GxWBkjptV6oKkNBeKKTFsbJzypmBoAKRTVyLJpvCBw64dUaxx9F7CA7KtZanSByDj4SKzc5PUP",
  "key1": "4vis9EXpsNSqr3fUwC517gCbCwo7qRJfDXYGTHtQwV2HRzg7hGybUAMdMR6jJZQanz1QP5P1j4KL2CWmSuMPGwxK",
  "key2": "2qsnkmvod3m6vrd8iCTywaoN2b4pKQh9vFyKAXjkQ8RqDDphysHUGwYciXzYeUTpDmnU3bt8jr4KKYBTfZYTVnH6",
  "key3": "2NRjEXRq2b6TRHnrcqYXbPX8sZvyxi9etdYL4dH623G9BpStrFmjrY4K1LxscJ1FXHN6KJWPeD4TdTy2hM1LqLmN",
  "key4": "5nAo68YHt83TkVaeh9uwsqQZWgMfhsnHKP3GS2Gr5pcNHNjkCACJeacjpJHMfFLAW3GLF2XDBhmemrSXzXRA9DTp",
  "key5": "5Tvd1s2X1sgGnLmbzhYF5zS3e5Zb5SpdPJXW7nmUCX5x6giarmmAj3J1L5Lezv916cfKmirkNyBw99XkaiwAYHs9",
  "key6": "XaLJS83nJjiWT7wf7nShe6Bws6LZ4bLJwHNvzpYwhYNCZHLmyRP3ppDWDBt4aB9EqQKCGNpjmMTwtuuizzkJekQ",
  "key7": "4XYzsjNZ6ZwwyfbZFDPx1ZE8BEAjugkbGtWQE7uqBVHRFDUmB2QMh9ohd4p7KdtdFATu6Zw5uD6QKWs2cxW6v9H6",
  "key8": "31yJ34Zr8GGVtegV1cYYX7BCpwMY9Lu257ATbEebFySY8pz2G4ZXdzGEP3pF7Yy21RvVzwEQrnCC1pFLHbb2kB4Z",
  "key9": "38ftQe8pZx41BAoEvcSJ7KXXJpnBkat8JFLMNBrvZyN2P3fTF7Mjvx8a76pgoA93vwmVNBrT2umWvL4f5Dw4UbWB",
  "key10": "3dADbh6AfC7AvXxFZduzj3AVMK8upxyTerHZF513W8tXHg7X2Z4WuWLWW4z9LvuJzky5t5SEgYfZWL5Yy735KcTC",
  "key11": "67PxQozehD96czzHMwQE9wewXmvfRjumUFD7Jbs8ZxQG4QQQBCJJKi1EukYHr8XdW741suuuJEzPg1e1oa33mwe4",
  "key12": "5PYPZFrKymgY3NKFSN7YLhhuNFo3nWrmZMzjNrtqienNDvGXirbZXKEUgnocQzFPcT9uqx6Jay28Dv5Y8boDcsut",
  "key13": "27MuxrPzZApYrLMYueZBnk8o8fbJLU9mTmJoE8Br8NKmirbD1qNy2gR6LSQwxGKj3ybzTDQmgaHALHrCw7bLSoca",
  "key14": "59R4qmBvagHYvWx2EDs9JmLjRCV5s9NucEepZAMEUHV5m3HE9phPcmEC4uBC77mhrLh939jZD6xcv16spUemVvMA",
  "key15": "2FvAD4zvzACp4R9GzKxf35VHxMPdDqnRRbKYkhmZDFtQzU62ryfkDWpRGbDbBmr7oE5MtrGshSxoRgcJhfixWdvY",
  "key16": "42dNPz5LXGcoZntv2biZDGR1Yoxc7urFoyrzALhdg3V4CbAEu3v3YHSLsz9QNAGGFUdqweSJ6kkuEej6BJV7gJYX",
  "key17": "329U7A2CJjepZ7n7VKkkVN5MVv2hBeWPF5W7BaH9vwk4B1Z4c8P8zmsc6WkFZg9MSLXsrAN2ZAjycZNGxvKmaiSG",
  "key18": "3qLwKnxJ1hBfGFPyeU5sWC3fDooRVCgJdzoZQdv95LhBDuhjLvXEE34X8Y7QLtLJ6nTtaYZtNodVGbWRmfjJfNVq",
  "key19": "5Cp5kPKvuUAGL6xtipoSnECWBavjAr2GiThmkm36eA5F67TNgnJvoiPmevyRP7AGytukCyNGaT8kgc33sBiaBaa2",
  "key20": "59eFbm1Nj5m5QFaBAVwQsLYY386PsxSY78kqpfLxWcVCZca9JoGwAwqShhgBkzrvDC4oBaNWPNXDcfSPRYNr5iir",
  "key21": "4Nrkzg5qKDmBmzHxkkdX3etzYvuoPftVdaZMPQAUqtxVNA5Zh1aykTMpeNRruaaDSG1F2eTWQVM4rQLMFfH9oPDc",
  "key22": "2KUznSnWDr43sTbxRjn74y3naGJaTHJZnPXqQ4JBuPeXgYQjFPXZ6roFj3Jt9ovf1QQtczY4oD5pRaF6icTwtfEE",
  "key23": "q9jQaGpvc7RCSLfjDUJRuh7YkcnR57KGX3PzL73XVbJ4m5bK8gJMGGKUwf3VhcVabdmZvhBGRQPZt1Qxrc25VKQ",
  "key24": "Svd7beKTfQFNZm1YBZcdZVEcrWd4VeKQXxYUUZaHzZeWGteqcuuaLFbgj9M8BvWnHgRsqxZC4K5NTWJWTVPRaUN",
  "key25": "4AqGzdifFBPuhNSr6XB3NSaPhGdZK6oJrqtczmFjnTZdtchDLHdXtAsRCWSF3o1wxRMJiKabhjersRpvZBUpK7ug",
  "key26": "4Vn3E3L4ojucwvq3Av9uB8P2f3kMbhxeZAfF93HhbEm6af3Psp98526QSwxZ1pp7EqmcQv4XDBsaJNQi5toeKa2b",
  "key27": "2RSVL4mPNi64HVAouKeYjukMreApyte59Z9QmgKeLXyDA4pxaJts8t1FDEZi8LSmbB2zpYZStWY7NrsG6BfDRmhK",
  "key28": "2hxE5aN6A83vEmUco8Uk5oJ2mLiJyKreHEuX3fo5bfoiPGwNbWHujq7hWq9YWbMdyQBd92xG4AwcWPGt9sDMbow5",
  "key29": "2BC41E5uHnR5pQK4GPBznd4XRtVQCsEN3MNm4UkoXsvFVqYpnWsuD5GbNmEiD5EvszygwKtJA7Du1EhHqBUVRfip",
  "key30": "4WKHtdJejDmxUgptanStERpZofZAuxDdV5pgRujDLqg7vF4UW1H3yd1U4pqckuGFh1Rno8zgJTRM31NUed2AsA6Z",
  "key31": "3sUTYhkD2VSf6ESDb6xzzdfEWiwqeFf3BbLn6Mi4559iJfxZ52bqXxjFN6WkkqefbCPqSxB9ypBUz46hAF67bozF",
  "key32": "3GkwdjjTpnBjcSik8rtw77RfHnT3jqzYFxp2xxu3x1naHJEpJnKvvK7H6764CmfwgF5N1pk1eMPXi3NRTZTXdGfU"
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
