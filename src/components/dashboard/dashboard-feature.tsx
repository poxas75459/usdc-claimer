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
    "5JKKSDy41HyXxr87ujHEjpp9E8n3VnMZg9uBiHaJnepq4fBdWrxj277v2z5FLrxyCzvMm3qRifi4o1Hw52VaR9Zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QGwBHYc941LbhFsPYxUQP6LyD1VKczvbDM7aRxEvhBY5fMC3B452TzjcjzHWAgB4FKpnxUn6VE25tHpgHVJVxNF",
  "key1": "5E3bA59eALu4DHsVHuXe34mHg33b1B2SLe9pB5ii1KaGKsdBP9WGJuoSGXGq9bAAiqrE4r8Ee6FJBMKKzU5Ds2Tn",
  "key2": "xTakFJHpxKQdU2toTP2DhS8RAeSYdrPNCiaP1GjbhDf8NDwuHXqQvZHgWmsYe5cBvy9VAHtEkzx2xoXAXBrdEFQ",
  "key3": "5SdPxmP6c5JXoFrYvwvcPxdGGmKPw8c4pFC57HEGJSihvtq4W8s5QAWcDMuFjZDE5KxbKySSMVqTKo4NtjaMpV8h",
  "key4": "3ycYjawm2igkrQipnvGYMspkC7heZo3qa8Z49CJMvLyNMNmD4kLKFMvajnxdHvqHvpKhTGimkz24u4XgTXgNaYHb",
  "key5": "5jZpkZKyHfhbJeZbaMGNK5gcwqoTYakEXiXffhBD3AUMuYN8C6imppASYZRxSPgNmfvVs3D6Ca3znduH8vXGY4dy",
  "key6": "5kbX8fikAKufkfndBrfaVSFWgLUoLM2hVEz8sgPfaaHzw2oLkWhTFNuC6qPWSd4CurEN1UCkp9wbfwcT4SoUmY53",
  "key7": "jnLcLHDTsoy5HQK2KjVW5Bv8kiKtcr3q9WPsXGHf8fBWa9Vqvyajs96iDwtg4YvBEjtJUMQKAgG9kGzgnMMBoqv",
  "key8": "3sSoj6MS8tQ3mAoG2ZZSqA7ke8mcKLaLLRjoGyG1k7tZREkoJ959sLKE9BvmbX7Ki6bDUAkHFqGQ1Pa7D3trfFod",
  "key9": "2t2GCWwK52XWyZiTidYsw6UhNzsNVS66dbN7yfttNjb65aJ9YzAa47u9fRFaqcH8bERqL32bHppn2dMzUyCSmTn5",
  "key10": "9AUMXrQdnsqkTvqsTsNJbEQcJPvjFoZFEU4DjDpbCXbLXiY9fz7L5RyAXXVqqGYRY5Na29jd38TKe7RLYa9LSag",
  "key11": "4XarbD29uhTbgJbCW2NFKa6iuHGP8RUSMVst4L8Zto2KLAS7vyC9hzzai4ncfgZpsWau1GteZ5RFpZdT4fks2ZV4",
  "key12": "3Lf9RTKquHzt4gjsWBctfodzTY9xTEB7rw35XMgR3AV8s1E7FXoZXUbNuxUs8KquG8XGsp2i7N5FmkYPAnxb6fPS",
  "key13": "sYyUGYF2amtJ27TzAdoncivbFf8yNeq5byS2p6k84JUFYQjaK2pVE9CcUjMBBu5gwuiXXivYFKoeyCBHjL7upWd",
  "key14": "iYHS3PtDeusmyopeiKnTLtgjPVrMm2WDvcrpyzywW2Mqf4JN1rLCoKKV9PvcgtB2VWoiUfy5FfRzJKbCecJQinf",
  "key15": "5VckKSurx9PT6bPwHtXBujM38nK14cRXjAaTm2yY4uA4Euxj3rHfwWq7HvQv7nwbw9UUcLZSkJi2QDYKrZ5c46bc",
  "key16": "2JXVAjtqFYfKJx6RPWQRnF1WMfCWPmBn1Ncv9wEvwFRcyU7W7uvd2n7njRK7atmvhM9a4KaqECwTYX8LVkoosskX",
  "key17": "zUSgPJtFvkz7wrBy3BYWMzn9JVVDaQPNjQtsANavtKJCe4ZE21XnDnxJCVpkCAVEgGnpuaWu4iojvt27ifBSoX6",
  "key18": "3FG5nnYXBWYSiF1gXPgznoE2iKHtiBxEvUygnJkXCCMnsWQAKzPaTgZukUiWXouJ618Sz1oDqFaKMXUUnjZkdkzp",
  "key19": "2sQq8YuYiE4a7ikJcUiYjYqUKHa1v4HppYjbSRXv2rAo9NNcHagVc6apdr5HJsK3YwvVN9ntkYXup5nPgQ1bfEA",
  "key20": "4vu3KLus9a1e9qL5u6dVvW2tLPqqNbQssDsfbtv62pycsiB3say2toD7EEz4Z3eyBUgVRHFD4yRvPVWutNrr2Nn6",
  "key21": "3cXf1f6AGWnonR4AEorJnZRcesYDhnvHjdzoEREaGJBS56gsB7h1TuXy7JrBqm8VDm6kxwmqrjD7JFt8kCkDsHkE",
  "key22": "4eTmKgXXYWDnmh7H7GxD1rEwBMTjuZdFJLcw5aVEdDrNsCC9yFyRvujPPLoQHSddf33pGZAPv6FissaUX1ivTP7o",
  "key23": "4purZvsQk6zUd96SPg64oYbKjaZw3XDcsj93UctjsWJTanRUnPN9JhCV9cKPUAr5u8UnxnxE4uxA5ZYu59nRtqGz",
  "key24": "36RZdYN1ygYsq4LaBi8iQvBmew5V8ofbFHFXxvXxLL6i9wbezDYLiMqQZ6uhRdTkj1Duo1u3ouEbExC9iikVGX1i",
  "key25": "AZx4Una2cZxhWfRx1YhemywF9e2Z37xuBkXZDkPmetNRN68FEVtNgDfATSgmZ3HQ2wigF9RcF2WRZHL8fN6bk6f",
  "key26": "4XBwYuA1xqKG8Qor8C5xeMfgMeSxHHrPzCQjyqRkrxd8tEUrKV6dmiQcbKUNUyYgdgF1JFuYfhK1Q8fSpZcZyiuf",
  "key27": "4AsesCAiFcMtJPmnzkhG3LStMArkZ8m9qSPEbJLv7zHA1rAUuzMJ1o4Q9rZ9RBbks3ys2V42g7a4BMcxuBvu9c6E",
  "key28": "2rnE9iAh3ayWZenbE8PBH7ha9r9AJbvQhtCeGc6M5zzrqhZ9i4KkWnJeZydFbdKMxGFVQNQf5ixTiEQTAP5TPYFx",
  "key29": "5Exq8K44dWiu3fe65At19mjAfRGhNaCcUAeBHoAVUM24EQ3PhETFkn5w3Qq12yjxh8SS8Ay7PYgdCsDVJztdJp2K",
  "key30": "3vnRnhwk9Jd3eSSbdcTaGDrzVYQ9XbdAV2peXH4NLHkLCkXJdTwApuXpwCM8mJZCR7nJ2Gr4gUpsmm2ZojbVv221",
  "key31": "5yJYz4c5R9F3kdXBjGiLdxcHXFfifethGUidGyAgzcbv8FkfWLG3zxB2qQtyDCo3WLCwKjak6z1ki7fsimb939VT",
  "key32": "3dL1C74tauMhj7gTF9yEyAntVaTDg8eLJ8v2kuMgLMfbFBRgWkyxWSJmxoXyo7jngXnGhfzbSMSx3BGvE9Jx6BcU",
  "key33": "4PrMZYeK3j5hZ6TS2pWovW75GhhVbgVVPacn9ks54RME6Unf3R5EWDFUSs4aeJ8FxEyJ1x5SdYMoo5HYR6ZNTvGi",
  "key34": "5r8NuX728sVTGkLrSUq7Vhpi1b6FXMs74zWY7MV2qywKK8n9xUWtJhtdKm7UAsnYNx4PkQT3JxmBPpb36cmNq6Sc",
  "key35": "DT3er2yyPteijKhNUFjvkozDSv7Z4Xcrdvnhw4Qx8pLUa8JPLM8Jj6jbx6Xy8yNHGGqML2qnddufRkXx3pcT3Ce",
  "key36": "5LQoyRVPEkGRNazkgU6QGE7hwvaCozXyE3RCcv1F4MkxgATiuUYN87YRPfV6ahpMk9dsBfVVNaJzcq5jBXAq8YLK",
  "key37": "37Cg9vFwhe2gYXE6QkDKm3tzodxhRvQAddpBpXKqeiYf9gr6wLwbAVzmUeP68x6Jcv3UDdcMd6vcfTtvhBLpgm8o",
  "key38": "46Ctz6r2X4zXTFGUSfvVDqnPfYyQncKFMBYnn1TfadZgLDwk8TVBysVdVyQv19f9RwwggnGbawcHC8XqZCnPwGec",
  "key39": "4Kk55KVjN9S9cb2YarzRLj16ppMSJrY2Lw54jicF92CBykNJScYDHQwNenGW4zrSkESewUhwvsDRjQdqVgpGV2TC",
  "key40": "2evScdKUjqWrNhFyZMxeTHrLdkcEmnm8E5deP42qaJG5mUKXCB69NFRAR1QUZeSXpaBNbfP38RspdkYdoD3vCEht",
  "key41": "32icLEksykCSCSJFegawsHJaEPDK1kbiyNBiBMgNc2j7Wp4cv5qMsDA6Hck54TLxu8h3d38BvuvFmA5f1N4LfFnc",
  "key42": "5kETX5snv8tuWwmAEpPAxTZ47DRC1drbKEQmqjT8tN5Dxc5qNMhiCUW3v6xin1ZRcsTXzum8p7iyb2qVBY6EZFcb"
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
