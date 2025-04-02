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
    "62Q4z5imefYQVcDb1JxwWRMLXQJfTWugURQa9jNb7bmVMyernimYuyccD9LKpFkxiDRcRVPZ6957YyYY9gEEVDpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NTbhMrankf4Ar1BUo7tyd5C2DjurjfRfuZetLLQvAztgjY6huDNjJaYH4bgjgPKgUktVX3ZsYKYMJMQx9fBnnqq",
  "key1": "5qqhWv81WNmAdaaJT19AGyzp7pYG9fTy5Z7QJVaGVjM23Hke2Z1vDgU4s1CwmbGCYqq1Bz2Bzuf2AKXu8CWqZwsL",
  "key2": "4sVchxMtBY4KRPFgdYWGjHvRsBSvL14n8uQyNd9mjtAWRHYKRnskYQ6b4YRYNbZx3XtTK9xoHEGyGNQ1FVzKtD67",
  "key3": "2nL8VWBp726xQv46vaLSTTYFdzfmkkvWb4Svh4Lf3yYseqiLoaEyUtowzqD6rnk4eLfjHNqYkq71KNFmQFhBMCWi",
  "key4": "5KabcS8Xc52bmWQdEm2PLBYcA1D1DjFxHrV8SgrdxqKNjiJyseh45tSYs5QbmBAQgomQng8Wsyo8ZueVUrNArA4y",
  "key5": "2JtspAUXx12ZDN7mX3aejCpmj7byuoFkMSfrmemDnHd5BCz8EZLeMN3nsch6dU8vYEurBSnLCrzEpL78t1VTMMDA",
  "key6": "5L49LykQvDrqMnwmCX5NwEYNQnD1UWF7n3NwTWUs2Pbge3QtNnEpqDFnDAnDJLzoCWSfSVDUYcXeE1EU5uUuMmW7",
  "key7": "4KX5N5igQ6Rf1G4gcgdEgh2TFWP4WEvimjXDErRDNcSUQgFt5Fb8gssXzXWnhENUFcm16gjqBGSAEfug5DLJs1jy",
  "key8": "5AhKTJK4G9uq8Df2dTHUjkfp7BEQpnupQSQQ2L4GRcDc3XiGTbn9XXKwbBp3VkSfMwPYuRdpujzi8d3VazYsdNFm",
  "key9": "7rDbXsRUEhKLK2nHg7PxuDDjptT8Bv7fkRuszMj3fY693iqS6RtZsFFcGhjeoa5mXQB8CknktvtCz2a1CjDnZnR",
  "key10": "5G29A95sZ7hygp4cbQUGyNtWLGyCMwu1ZARGcJ3S595AxFDyHi8vjydWuecRPrgrCeXUsxQsLzkWJd13P4u8LrbR",
  "key11": "4moYyzkPSYfv8udJmojF35brYkevcV2M9R6i55agpLTagmPFeKSyj5SQa8Tc6oJQSYqJUtZPanJR6CurKsaECpKW",
  "key12": "EyLbZRkxT7wtuxZkLUhNB8ZteSUSfTxTUqcogid1ZdLwVARkVMTkohVcfkp1dKn1pYJ1tFbV1RMX9P27vGH2362",
  "key13": "2udgxuRdNw4q4FZ8zbb784oLXP9xneejivHwyF8ESHevw7vPXDh39vdCRgwh4GUALBLDTKxJajsVfqFe4HYnye5K",
  "key14": "3FxSuAJyrLSDzLi2vWKEXdRMYNBaSDa8731PTThsA19w2oUd5sUZJJeBdos94MSJeMh59mKsXtbRcnkiU9KGgdSf",
  "key15": "J3z7TcoCZiTTfC8TLC1VozAuWd6JayQb55Ph6khejYdMyEJ6Ebvuze8kbXAyCef2h5r1ZCv5YsmCvqDKbhk4bgY",
  "key16": "5KWprrqBWoD1BL1m8Sj6w42SN2aJSEr7rCoJJV94UMpdrwSWf3FxzTKxHyyqLqDdNGzvMLCuw23mPDXJfc1T29CJ",
  "key17": "2VjAKRQzWtZ1kTScsXQapRfzq6HHxL8oWtRhiNRCeTmq7qEG42BzcdXGYApaEfUskgP62GjWgArcRHpjMhr6BAMj",
  "key18": "36Tq3uu7y9vXseSNG9uVgxKmkGnnQ2PYMG9iz3LCzMRF7q4tGASQ3aNXkARPTKAC9bbU99w63t1yXYB6zF2cJeA1",
  "key19": "24xevMQ3qLJYbSaBWwzC67yQ66cex8pt1eKE55GHWDiCPxz5fZ9zn8v7FjWMTkHz2WiQTVX5FT3QJz1X8cXEmrtv",
  "key20": "2co7VavgetAn37KFMTZJmCW2ThCWsPpBcVdXTRSAtpSm914eNm1GYemMZa9hueoTXTcQtoUCSooqu5mMeBUVvMPV",
  "key21": "5SFmSsbJiKhc5uyTDAZMnSV1Q7USnSwqUoFJmSHuftfuLCcdZCXMSn6eWtDXX21JdrqjFXA3QDPQtnhqLNUKQ1gd",
  "key22": "3NjrmJJwVWZGxcfBAVXgnW7AG4P5N2uHUfxfWo7H5Ta6R2jNjMTRa4RJqhBY6H98zcALTen21Qv8sNHpc8gCMAjG",
  "key23": "3T3vJ9BphFRfEPbCNpj1ZyLM66nHsnqG4TBuZP53Vo9gqpNdeVQDcYSBiNXfoiPxUFSDE6zqxiPanrRLDy2m1xUj",
  "key24": "5a9aq8HTu5xqtxtYQJteM56PzvstZR7mYLGWqNaJbNiW6HnXQCULRTZDYFQsWZpMtEXWK1oVoZyx5dyH4iF4D4JY",
  "key25": "mMrwiarEJmJcDZMLALiptfVEYUGXR2jwj96cj1MJY5NqAvwWZiWyzTajEL6TrGWeZxGoVUhj733Z5ScHSk8D71r",
  "key26": "5DQWZT33RhZbekf76eqHRw7prQw1q725KCsHAKvDuE3Y3GNJ64LrPyXoCjtNjfyUvdcDy1TGJeSATygtoPuJfSvq",
  "key27": "txznHHN7worcm176rQDq67KxosxK4wEmBVhKXHNsemjcenZZbVRMr6ZvfiFCq45KEHhim9XdhhXwFULtqa69LCJ",
  "key28": "3qTJdspt5K9Q5Li83UWEShCqidXoUpBMGc3YpfepLb2M1b7y9bQMUAfdN9tv1K4FzXLHFjwAKQJ5wfjxd9Ah6A16",
  "key29": "2b6Z5Q6a8dFQRZyBragKibcbLTUBtJ4qJ6vWCGY8exs7rUFu1zKzjSnXPqY7qFmYVikRffJWmhpiMY3PbG3GaqU7",
  "key30": "514S7uNWXKNUfDGfaiVGJCQx2sc3ntJztx2wyzXhyNW8hd6SFkoBNGPpBS1enBZh16u6AzSirnhsxNhyD8VZmBiq",
  "key31": "5gsQEXXPTmpdZKzThD4yuHS1HD7Bt1xtaLCs57M9VAcpeckDj6N2kwHRbz7ZzEQxdGHK12Sh5tyPy1teX1c1dFPg",
  "key32": "4Y59wozLG6c6Jw4erML6zgz2Fkq2afr7aEUCmzxyKM8exehJuHiEgdmP2snxbXFaYFaetME2HgwX8t5oJsWvvGcJ",
  "key33": "37aumNuEHQ2iGmXcSkb12FgkwrYRBJSxCchDrEgknC1FiRtqL18aFnitqn2qxzGHX8gkMudBCTDCNhLdZfrsyK1c",
  "key34": "5zQ7ydb6Zuz1zN45EaQCTBxZTr7LQJpsawfQRCLeYmKsMsHkzGise4WGqVXewS7nJbvwmf3wKZMrFXxfQ4kV2cbU",
  "key35": "3qnSXC5tjZDPZxpr1i1rhuogjpNBLXKF2TZ2tuxKJm2Yayjr1ydNu2NvcbR3qRQk4Pq2KrLsmzGahZfRxz7VrUSR",
  "key36": "6MBBEqyN9YT1jW6Axu86mewxwASEyKqrhST4BpfdNGQARCYjyAhmwjKyD2wDsp6gaTx9gUNC39bBEWeEwdGud5s"
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
