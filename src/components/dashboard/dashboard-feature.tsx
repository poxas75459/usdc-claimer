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
    "3oVG5K8ap5GDPbiJHdbMc3EAbc4HMoeuJQzAYCoWMbPqFhbVUb8GuuTa5AyMYsbheWhmvFH1mJ2yUBhbCKdrFcwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QKQMinYPePmXeXnKwu8Dgg1F6UxJKT72HZ3gk8m97J9znch9Pst8gViAuR5ZgbMtVmACTjCXRwz1RggPHhfqhbV",
  "key1": "5n7FdWLpMhnGDzB2uVdoPpRqoWKQcMHcNn398CqHjYcLeuT3uFrc5P2QeWGQdd1eQqQZ45TY8ZyYLEW52VwP6qgK",
  "key2": "33m8MFtxDbiQvMM5cGPZwbxkBNwa1XWWH1kSAM23fKfxDfZyQkuqp9JNVkoR8XUhJuFiPAoLUutVgH4UQCCu78Yo",
  "key3": "w23FTYuaAoWSLbdxYPftmrzvRUqNmKRuRGpieitCAUq3XzQGBDDus9phBmDHRv5iTZgAkN9jLzW36oZGFLHePvN",
  "key4": "FPCrCVrqZZckpsdCt1N9iiQF6sF5EKewsqdTqM2e7o3ta4kDQD5YHLjRdC8jDc9cVnmZEy2Cx9oJeJsZxbhwTEv",
  "key5": "244D1pWX2jrX4ATUcKnjodBrbpz3JSYhri7MehjqKmRS6NQiU3DRfXxagxY5HkF1EAT6oWuw72kBXAjfv8bbVKfv",
  "key6": "28w2JKygj1FBGckQakq1LQa163vYPKDXv8w2QihVd4yc53bnLPr934Qp5bCyeuiXbKrnfFNxzBxZPjZfhPZex7D2",
  "key7": "3tpVNvEURUvWN6m5XwGhFkqP4NesNTW96soTyHM8gxorpYdE243eWvzpAKBhquQ4yF1Utwia8aB1ktwMv6e9vwEC",
  "key8": "56i7kmsbrGiUmsZpip4BjWsqD6PNPYcBjheBbt6m7NcUjTLg6JfmWReHhyRwX5rSoKWye7BLJBjKDMf3UyJRWy5Q",
  "key9": "3eZLCy8EWRvEx9Y9bJd1BiTcSZE2QcyXepb4yj7h4vbXSsJY3xxupFWhTJtmXWUmazTbgMuJ69htRW315TQy2fzc",
  "key10": "ozA984CmvmqN1izqTDRsUbhddK7nVdgggdDfETb6PwXAgGniK3R7gzzksDp5QwoC96hMf5ZhmUAWaRCs3bhNhZ5",
  "key11": "4u14nBDTBPNyCAkMRDUisyaSt73xMW111ZgF5P69GUmQRJvuSB1YV7SVtvHBexexVQLxuuDzFkg4uUHxdddCiaMP",
  "key12": "2rqHpfDC2TUEB1xEAkfhgmku7xRw9kMEKoDx3o4fbQDJajMRR5ERPZMYAbNA9UkY1QrE4Ww5zbg3PC5YpNi29obx",
  "key13": "3qtrLYbkEVGqQiHeMYqgz4dLGSYuKyt1uptiP9eXJSjNfJCHmbM7suAUdEjNn6EiL4WqqGzVdApo6Wa3dPcjfZK2",
  "key14": "3acGqxRwL5SLpZGvwRhwFgNv9qErm4V4Kjnbr4ZdS1VQnwL5Ubrw77KDNWtWR129PRd6Wm9vz5w1aTpAcihwpJxA",
  "key15": "XauTcCMnohfYNDWZ2mXcwQomVTgpdt9HHN4XeLDasMRsLz32AW5joVsuMPLy4ftcJynd6m2LmUx1h97kWHtDC7E",
  "key16": "4Rf3cng5Z5jXMioqAsbSBokWB9ovQgHyLG5B1Gvb55y3NWohgEHMARrC32EqZba64Qv1XsFsJjRdLJD9ZPiJ4xuF",
  "key17": "4G1czVpE2RFdRK7QEA44TqShEX8LoWJMK7VxGPkYd9T9NsdTvQ2vbqhESQPcTbW4bMQhxjsK9KyhnK4yoVkfkwDW",
  "key18": "3X4iE4zNrrzbhTb8zPiBxgYpY59C4JXcJfqFcLhkjkYLTVH7wqLcUmPTT7ho9YYgZjB5EhoRLqh13kZ15ARrUDdz",
  "key19": "5SEkKJTrhMi21sqtJkHThQrYNwbQynsoyHEuYpcKDegVqKDzZe9ux3H7TnJ3vf1kgy8CADbSHwrN9pxExuYfxZyK",
  "key20": "2JHBfGf6iNeeDDzp4QPP2wXpiuhtavR5gerNNEw7UmPaySdKSTBvXmgyipGWpLeQZtpDimGGmCFhWuDvKTXM4XAT",
  "key21": "5jjHn5KV1mPT9rmZbLasxsEatxCuTxmDn7eE8hJsUNedC22YKrRiQQpxLKxXPejMiB1eu8zW3ZYbHtUYsvb4cojz",
  "key22": "218GT14675iDDrQ2eKVzPPc4RiG4uBau3jRVbGtyHGm65xfbqU1Ppv8KwEiyNEVfGriJ6ffBDfwUN6WzRifYwHos",
  "key23": "2D3rNgLQcM528TFvLYP7ScHX9iqfisjvYfdPSvh46xa4twPSZyZNBBYutotKZA8ojQZX2BExfspPdfSfTDELLTQd",
  "key24": "5X6mdAjeCwMhhr3ysdTv3RBeXKdDHVDMsJRQwbRa1MfYg3pDDkfVsah6BA2xHxZmYk4gLSJaJrKzHnbFUkdxGPEK",
  "key25": "5p5UfJ24vrrArzBRxdAmFHWGgeLX3LS6JZdKaEPB33H67Px3LDE62Rnfr35sTsf21bg7S5VN61fFALc7UjG5Zjcm",
  "key26": "5vFL4t93ehioEFfEeMuQUCx9GjKow65CoU4oKAhFs1S1AjuYmBtQDxeb8x4EcEYKuQG431hsV1p3JVPUJqJURRCd",
  "key27": "4bXguUTbqpcZi5QgzLmma5mPY4JvV9ZZX18MWWU34BRaaxoBde56Dy7bxxaT2JE5zLJioDei2fMhhb33zpyEtNAo",
  "key28": "4BkpL76nyXTDx3rb5bS8xrhEKmLYC3iychVtz6xXhM6udD7sHXB1cZZrbo2nQC6vEYg6BT4kZPFtFAfcvSjEXeD5",
  "key29": "2eRH1j8Q9rheF1RK4r1erBMqMXfJAGN6CuG34mmV2sd5zx2Xfy7XxtQzYeMdMZfzKMvPQSzLorf2mpieexo9jqCH",
  "key30": "2AYGp9dnsQqxGugPkFW8uz2nKap8gd1FFGoJZAgecCvUo7L5QUXYunbg1ZUHfyZwquBkU9ZandCiBMShCsBnW7Yg"
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
