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
    "5FqEWEoMNXeZKE3nTc7u17t1xVMPa5f98SbXNjkDkCTYWx64La4DYqCFwE15mQ9FaKbbtDX846Tro9Bydn7uQ947"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LiVb63tNg6F98Cyte7hEZo5QKchGTchGy41cZjAwrh8oG5wJ8YQ1hj4Su1DyYBnsfcQiQGPu9XaQyBxupC8LcVU",
  "key1": "4gG5jX9i2jsr8mZwwYdLPJdPLkjU4J7cxqKBh5Gn8qpkXjtst1NzoqhAaxfb1oumesNq3uNJcNc5phRUKE619k1Y",
  "key2": "3fntdiciiqwRyYePy5SQ6PWjX8VsZVXKRgJ42XiyBe4gdptpjD28ykYwwvUPPGSGbXZaFebfT9gV4gLkpGuETHq7",
  "key3": "YjQYuzDz8wowVHGxWwihhH8rzfa5bUPhK57rZjRDK6k5tSS6aXmdKTo9Yykxo4H9ySNLLaSoda7y6kMXFZK4Vwf",
  "key4": "YLiaPSVWkk4B8mriYxGyd6VNofsXn6oyUiW7JPTpY9gFcpo1d1iPRdEZizmYgMrZn26qQyJb5F5S4oA3uuSownC",
  "key5": "2V3L3Aj753fP7LBVx3JQVNKLMFXEhN17Xy95hzDf6Htix7M732tVvUZkxGK9A4YoqAe3ncATR78yqMGAM95sfSXQ",
  "key6": "2kXXSeEkRM8T5kcjyHgh72BAdBpNiVg7VgHrKF2W8u1Mu8ozUff24YqnsygoMx2asV99hH4By8YWwyvtWXBP78RQ",
  "key7": "jFZW2TtYvHs8CSzdQtxcgBZ3o5VzRbheru2wThqytKCt6qDwdGJy2UPNZGPpTW8E9wUVDTBhA9rugWQZPcHddGS",
  "key8": "2XVdN246DAeA8BbPZXwo8UJqarT8ykQV69izQGEZ298nKWWw3AZ7jygqc6nMihymwVbAeaZYG83YxzEP2pjEhDs5",
  "key9": "2ea6nybV2BgekDWh9KKRCouwLVqMwUWoqx3D73gEewYtXeqxVj6mxZ6KhgWfrUe6i4EiLHsLxav5KD1npsRqLmvP",
  "key10": "2iggg9j5MdPkJ5SVfUoy4GtW8TQjuxiNbKT3nnY3jGdF3Yh6NfvoWqFsNowyXis2Tw56LVKXFguDjsU7hJhe6kXJ",
  "key11": "66CZDgoXmG4oqGpiLuEuv77h2dXzLAjEM6NRDNTdY7QebszSysbv5FHq9rmyWx7sZvbQjkVNa8QLzYgJwFXfrv4D",
  "key12": "29KhXeww5yXijMKpiec2f4UZHWawd9MH51dT9rkq8o7eeZegxhFsis4eQUec2bN6rg69EzhSYVdnoJUEA2Udb6aJ",
  "key13": "57or7mdShXEN2tgj8FhP7CxiTTX9q941r5pvDHwhK85cgsg7DvrzQy6bvcqaYHxpzj7r7H3c87GYGrTLqKjtDcpq",
  "key14": "4NWbuh3ajeeeMM3TXjT7zMX7Xk3Cw628DjSzfhxS7YJ95DL3DHNq1XPCTiJd2kYvciMa5WL6sD8dxpUHwUXS19TD",
  "key15": "5vGmAyN2LHZ1DoUSkC2wmiQndm5cAniJAReUMYfsx4CeWDLcTA7ZdyxhmMQevTJc4JL49HFABncZDrLq3aPqyst4",
  "key16": "4iYd58FceWGbjn2VDYTS8Xs4odXqp47bNdNNuxZRbX1V17QMLupd2tscUWBTzwC8z5mZ8QxXT3z4mYqKCpcEp92r",
  "key17": "Jo2TTNXGz6XsGyvkzFw72NHNbC5Dt1bycccJEE4YWb5VvpZU4vinjG3wJDCLPRgfZ7VvgSNVPaAmHSbivfCsEBW",
  "key18": "3n83Jv4oYYUUwY6jQUEYA5ksCFV2RVPFH8pvkigRw1MTrbNGGbmSEFeNztALtvpMc5Dm7mqhMFApbFKS593wdGVC",
  "key19": "AM74RL1GncVkSbhs7PQCpSfccBweuDdJddx3ywmD1UXZGocj7NA1emNmVLBBsbDyVpkE5wocBDTKDKHKiaJYWMw",
  "key20": "2esoGGGxbht7YAsU1iPijS4rEn6fBVXXMYg4caaD8WGvuBEr8x8hikEDkzffx1PsvK9K6jTtVeNKcXsvFVw3nebn",
  "key21": "2D9TgeH3WzUEC8exmCC51BMEiBKiYBT5dLrt8xX9MSZ2bzqEpKTh6F6bxaQmNkRshoQSZ6NBKM9m8af5B1FDUiXe",
  "key22": "5sjxny3aufEbFEB84XtkSu3jU3hPXQiDj7JwWjbeUD8ba9o68Q5jdCymYSVytWVpovrm7eU5rTXWvhn3CvrmP3PD",
  "key23": "635bw7y7mEApQRbZxm5xqZ2JbRCZsH8fFHWrM47FTv5BMXKxz4G5VwmTo9TLTgvLsAh4eiqwgRNLeA6a1FmSJoyx",
  "key24": "3thkSZSbRyZstCZBtKMz7hdLBBcE2a9wQU7QTjWugCKdo2JyBvPj2jYQTwoxqT8eS2oppbKcUmvTAUuzMDpUWqNk"
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
