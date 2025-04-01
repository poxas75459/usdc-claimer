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
    "6755Vf5YAKC6JRkdbKwEEmom7sUooKjKDaU7pbAr4F8ZHc3F4ar57dC4zCH8Nu5QYjbhRPubAD7LdfM77d4AwMUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gm81AVV2kESXj8Npfe7JxQsMG3DGGkXnBUbYysaLaJ9QigwsRRJhYyFzDPvbJxBQiXPg28cPgFVL1Ebr9am5QT4",
  "key1": "23UomLBXUexTb5oSonjj4UFdEJ7mQgtNECUSmwRHxQfg2XNpAqdcM3WQaGb5XJadR4vj4CXj4CCEheSTkjx1kPMw",
  "key2": "2buWywdtdoogn9iowAgarKdviMwCUDwoGWJDuby59Yxu5UJD4d3WWtF2TuMGtY3p1dj3iDXTSq7yKK9FFX1LsWSS",
  "key3": "4VNMfvhnyq84QTSYYuM3qrNesdi8BqN8GwxKw9aSRr1NfVtXcK1ZwxiKcMTorjvzsWoo1QcsxKqz3CUtTMvdGdV5",
  "key4": "rDDgyZHyBNL42cjx7DwnCHzGftaXxiJM7a58qpPGaziG8HDQiFna8eamkK48daV6Q7BevmNyUW5D18D8WYL1vTY",
  "key5": "2SXVMtmRCFZjA1vRQnDjw5y2dJC6z5UJx2CWFt2JcL4Y9pgfRXm7AzfGrqhKzSJpCpQGP6nLHaQYBZSL4p4AVtna",
  "key6": "5FdqQacqztYMb8ewvbxEJVNxfJ6qqCZHeDuJhNZxPX2kxA5bpw64Jtcnu6j3GZ2DWmezAJRF8SFm3rstKa5jfbNk",
  "key7": "LcPDUFgV1Q5xQ1ZGWq4xxskghigWG1YaiwaCzmvS4gX84h7FMjpUUEaM5KmBArRFU5jkkJ8UGZfLh7a5mtnj6qo",
  "key8": "5MUDFPHdRY5Sw1pRxA7DsjJnpPTMApWLHxCbtPYRgZtBt7Ys4wA3C3sEdUL5ZGGdRPeWBu8wbMZThtVjHrsx822Z",
  "key9": "4PVFDcaVfgNjEF8YymWtCpCwbUYxpTLbWT2RUgcsqHureA6jucDeSpX92H4fbhVQCLAxwGGgHMbc77fF5gxpd55x",
  "key10": "3uyPFtry6cUX2Zt5bpHXic7eRLQMWwBPgExoUvhVTfgXN5xAMYfwBWz7t5f2LyNcPSKYxPo7b9c6NRy2AGTPWMWv",
  "key11": "38BgVHb7bTjgy5t3dQ8cGz7aWWM5S4xzmdmHpSG1pPHtA8SDnpVYkjsPSwFV3dnh9nXHVWTFzopppqWkBHGNkx1e",
  "key12": "4qXidRkFeTfcEZZNNTdh7X9E6kGRoUUWLNjBAQh7yiPFqittTDb3FLah8Cm4Y78cXxWA15Z46oVSmcQNRTCSNWJR",
  "key13": "QwdoHX7w8FGeij4KStv6haLVsE4uSvfRBmmJPMMtyoksBnQsRCppfQrXJx8F7d2bwG6dF6BdVqvFpNHioFW8GbR",
  "key14": "4xmeL4GS2bRscwfshCoGUwhMwGbi3i5YuKcz22pG9LAoNPbSQCdf2bAhKhqpw3qHs21sUoyMZbHVm8R9NJpBDCwT",
  "key15": "2wFGfccdvy3fF8gMrqk7DcmPygxWHdLzX8VdHvJQmwsH9ur3BvUkz9w6HPGL888WugAc3bx5hPrzGzPX574PFCcv",
  "key16": "Y2tGHb9NBKWNUiRfkrqddxJvci4dS2cdu7vqi6Ggnu72NPrJo4DoLe2f9c7H7R2Z8M5LeLHyGYYAxc6dPchpL3e",
  "key17": "2mQCNhWEr8x1HHvVdbyeogyUcmE4kPYX4ySvKCiTwg84qmtiMTx15MWfRzbtfa6gbAkZdYqWDJG9k6sD9RXW6GS4",
  "key18": "35s7AegrytrEgNdEStu6HGvu6FmsKrcBsRiejZbA67HrFWfmX3btJ5irgwQgCr4NZXK2mnBkTURGg4We7ux62B6s",
  "key19": "SjUapTZPwHHwKdWyvHWBNEWgnByjS64kd22dA4UnMBnWBHmHpm9MPvk6ndwienNsGZmZ7ghySnvamZCbbLCAcpE",
  "key20": "5UoTeepUy31osRUrbK1Nw66Az5ncitP9pq5bw8mDCiJAVonhjyVZ5q5H9DE7KK9WQF379YsTUikPqCemqeB1j6jB",
  "key21": "X7TZ2wzT7cFVxFPgohjpuTHHhUFaXMfHxrkapmXZtgAGSmd1CP4zMNsBXnArV179hvnk6jxgP7CdXmzKeRDW8Fh",
  "key22": "3FvZGmffbfXy8WThG4zhm7XcYsjKbJ33teButJW3w7fXeokTFp6Gst4uAyB1uavvLoYEBMfh1zcik4TV4oFuWMK5",
  "key23": "XowV7t8jDejPjBr5ddjS3ifADzdH9bA9uSs2m2eqWzrY5kiwYgfpnMgkACuSr31S1gLmo1hfHM2Q8rBqX46Fxz8",
  "key24": "4QB47S2tHUyqCZUV69FKdsSgQbj5Xzg6sTYZrpXpjPp29JhYLjt38U6R8mHPrqbXRgFCGYYz17aFKY5uFGxjtYrA",
  "key25": "ok4JxaEPzGkT2zuANLHeLiabY6JPvFAKKjKvLfjFf8kvC9WjcNX58RmLCm4zj4GeZVzywUtfgVENFwAk9ghafuL"
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
