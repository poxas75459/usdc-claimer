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
    "35X3xUCEJosmj1pMQcLuw4VYb8ph2JD3TrN8b8dAJPZyf5aARSybHf1nx9UUNJKmeeKaHsn1VNuP4g4piA8i5hnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49DvWXJg1zNuhd7eAMXzxf3Zhu1wbNJuvYwh7yg7KAN87u8oBik8yd5VXvXUoYv2mPzn9s2Ve4LBnWiPb4KwC5yT",
  "key1": "2p3QVoRJQcymkhkbuzhEu2PmpCkuSPs5F5zgjEYgVnSoCvmQf7Ny13UCrRnZdn1tYcypxoE38LcDJweDehN6MnJQ",
  "key2": "3SotYANHWAt1azRFGm2gstBnFhEBG2kGQmeGuG3K5Lxw4TiUrEoYae8QCYrwYcVX6WuawLByHowmU7mLxwBuviXH",
  "key3": "4Nap2MiTHRytqWyKKDCtbcNs4ArHLEBqmQ1956GYfY8za5tNtPfq4oAKxsJ9sDvxU2EdHvYywXdL74ZRWJBFwKnx",
  "key4": "22yy4Ttd52P7bQ1gBCD8UzDgsxaRFuaN4qhDxLQAaLuocfkv87kHsGkE2jw3A2EcR2Hwd2F3SdBtVzfwF9yAFufK",
  "key5": "2BBUuoPaB58xPk6Aj44U3aVw6zqJJjU772HXew9NZeQ6tVtfcbtnUriY44yBvoLhgNaZuV6RaNWKhpyJg61Vmkzz",
  "key6": "39W1cyaJgU5SR9nqFHYhdfK2hbqtwQw2KVe7MRF7sqMh7ghKK7gzL1vkGJzEzx2y1mEk974AYG2iT9uYJGNzrBia",
  "key7": "2zHNHH522wB9iaWcPR7pzooktq23vCEquhMSN4SZAbhLaBACeE7g1DhPLKCfcJQLeB1yrw7kpFDSNYwNfJRsjFuJ",
  "key8": "4iPqTxa9396Tj2N7cHZvAyGw3iBEMA44JVaKhF8fKT43113VoJNW4YUDzrKeiTvmxK8z89taN1KSe4rDG7yrscxq",
  "key9": "5RSuqfW4tSNzJWTYBgEjSUaofLN8JsQk7xDnrofqenq41bHnGVfxsv7dJAGQGFtesvhUxk7t3BVw9rZ9gxGW4myQ",
  "key10": "2iUmKEdykq1QVgTRbJ6hJXc5h8hMHCeRFiNPKD5Wx6efuUo3q2gkZWM1LcVVWArNERiUWjN2Kc5Ma4CAzpZdHtpZ",
  "key11": "3SiSo1kNBt8adhFV5qrw9fsqmZtDv9tg9oq9kjUTpK33AAhrYJw36sNbPzZLLucLkXG3o68Tv1mFSBk8AofSGuAN",
  "key12": "231zTw823vQuNMan2Prb1CMFfkvobhgcYNETz39GF2NZPKNVc5WQEfHQkNTns3HXBv2h8Dr72DogcbkopKGbk7RH",
  "key13": "2eEEThzbsN8gfxY4beTFH3ayXCa1eobY7bLDPaMeqVkfbdirrLTLyGvCq5LCykVeG2ZAxWLVFzxBZ78hu22pRyC4",
  "key14": "5wbiE7qef7pge8STNyynwH1F6mNRmfdRB5ZQEyW42HMLkUVGButaSDvJo1SD5YGrRmDHadjmSCVvwhDFAj6aFzjh",
  "key15": "2AXsGB4oEyhT2UdS5DRyKyUajX1aToHSkMNhuAKLaKsPk8X8WCcGVqTJMJuKcDXh7rTRA9YQiQ4rohT83xRRzNfV",
  "key16": "4W3HmTn8AgmvXfo4Bq1SKbDFDQraAJxjZqoMchGrSNwULt2awyzGrtm35vB8Lfaw9ZYDH3BDCDMSa3hDAnDpCaH7",
  "key17": "4PEMCq198bop1nYvRCLwCjQvnBCWk2Deszq9ELa2XZk1shtVXwW4L21HcErFVxfXz7yK1houEdfFBobg9kezBaf",
  "key18": "3KWEXc8Hp2ydVaHj1ZPXD3W1K9A8FqnEGUKJd3YydSggYCnj7uM4sefhj24N4e4erW7eGPkvD9A9stC6XDGp1KRC",
  "key19": "56ywvswC94P8nSRH88Q29JueBviR12FaA7LQzGbAx81Pq2wsGpwkrW16PHBLychHN23pKgxRfFnXyMzbg6B4mKPz",
  "key20": "5xNcSK97yWQsg4nVpCyJpjUhq4pKSWQWiJWHYi8VattkkYN5NEJeKHgM59jfWqYEKpD5kt3sYqE3MWp97AHfnL3v",
  "key21": "8kjCJosYyM4BUMBystUR5EtofjwiLJphLzjBDTQnfpJWWUQW8ePQuBGvZhXktX14KrQFMQepjecAyN3RFaX5FnJ",
  "key22": "29TPZcLqts5gLpopS2ZqxQRbNoTKmR3swB39x9itgD3drPbNynYVh25Wb7umTuEobMJGPgXn44rScjc3Hzdr1iER",
  "key23": "4Bk8XhKTQVZbufsFPWGEMMMM8FHY6MRdVRMtBgxhAJPUfGE3rx9se15wgCViPS9tHjUhD793XVb9eFiChSLRhDZa",
  "key24": "5uWt7orLn6SFW8Tq5ZTtUc9v9ididrwwVfV8aiJ4eqXrGNDnLDRvrnFei48UhxzinJ3sbj3YXNMA2mNuFEMJ9Xmn",
  "key25": "2UNfEetXTAFFnQx2yrVzqbb8xtkg1zhBxP8aYLuunbi3h4pTMbuaLkFB1TgTmq6iz4LqPuE4ZBdTqCBUUt9L3hQX",
  "key26": "2Ch29XJvFDZ1CHbksPGks6PgeC9isYw4DEGYN1u8LTR72RGxMVMQkWsqfMP2yj1GgzQdeGw7WPj2fCsRnGNsqzvJ",
  "key27": "5XqKhuhyTtne1jNuAjXw5nHbZ9TLvRjLsG5YcJn2twWjav5vtBV37Xk58YmaZhtsgN1Lvzr9kKVbpxRB2SpcQcRw",
  "key28": "4RJ5kRP6TCrxqiRJyjGkwrWDXm3Lqckiu3iE5BPXDnvdoW5mMm11NL6rRnhZ3uPaz79TJwXHNfwmieBDjaKWZLgD",
  "key29": "ZCfFsx2eEE2KceBzYVaDzRUNYLszv7vdncfDRJV1SkqzWHFLeJ1ESBp1zyG3wKHjF6qsbRBgY9sCXgyrqXj629C",
  "key30": "58FsCbhHU1TCHn1uYnWZRGwQYdCHKus8CipYQh25xh55wQ1RKL4AqaPGgMehFiDQNjZ6TWWTcuRzPKZLyGDZXHVL"
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
