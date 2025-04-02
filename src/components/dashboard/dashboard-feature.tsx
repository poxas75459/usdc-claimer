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
    "4p1WszdjC5TBNhsgCevYaqaNf3WyAct1cUWxD62rJpyL96oJLNgfyd6v5bDQYAmddkHj9w5Uf1cA6XPW8QFDzLqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HpGu7mNBYhTBFmAncAQwcmynKETGU3TqGacxA8dYUDRwWfcjF9hoZmTDXQ9KmLNNX8i1RmbdF7ifD3mPNkY98dk",
  "key1": "3hWKp1Nf5mtxbs5PJqDbp6CPpCYwUGYcEaoKG1d1HUR58YYqAk5CwvXRT22Ue4rCwUQtXDaoizdVmLE5BU1Xo6tL",
  "key2": "5o7bbP4fMd79SeH225TT8wjpnHe6TUd6XHCa3nHfdLVyEZ3nDccjRcmbJDRCQXAzHD8HNX5q2SB2o2RFAZfRGScd",
  "key3": "5xA7YaHt7GDzqQE9jdpqaky4W9MYthMrrF2XdmqsrBDV9SejBNQxtCYgaTFhNgQ7Rcy7qkYVo2oU6W9Jz91qqB78",
  "key4": "5FXWS7FumMEGKLcRi8JPowKTawGKb1tAbLTvJDyN9EXzC5nsdQUagqwxxECqFGy1UBnneQpGKhfFLi8HubUTJfi3",
  "key5": "4ytyFqxRYacfjyLGnZ6NsswjUSZbk6bzXgshKFCe8Nb7DcQm5nggXXi6fXXbWoT8TrCQPeKz5EzDD451hPvHfNKR",
  "key6": "FvwVH9tVuKZ1j1ZP1nsBiQGnuEMC45f7WXVpZh41YjYn8cxSwjfUi2KznWEgddtBAmETrMFvRirh2FG1gzqCopw",
  "key7": "kHwRYoCvrwHk2DsR7hCbpAnCxUYcMybdshx3sFV41Qhuei5zGGgab6ZisPB9Sv76vSLJJmrBWnbaUgE3PYnh9Wh",
  "key8": "2RHTDxweCjHqVo6DMxEFDTtPARPzjjtpzJHhocJTURhTAzVWVmB6kZF3jYazred5Hfs57hLC9ZQLJVAg2koe9DD5",
  "key9": "2ZMc3HqhwxfcVxBCtocWyomyHysupjd2u9qiKzercrUcujqqcGzVi9gAbBkVnxv5SjYCDM1syde2phU7V9ikGjtj",
  "key10": "2rXGyjJuoTCchF6VTbXMkjbLj2o2uFSsCBWioCX34u6HvhHoH7v7GpVzZJWNoP5eTyNFuA4FdAr1cdKVAnyGPZHG",
  "key11": "4nhgdDwLumKdPdZtXdPcLzDLVBrXaF1Yg8Nw7VsR5QaWXniht3wFnmK9jPSgCP8rHaN62hYkRA5u5kuZStY3uVLY",
  "key12": "2LTPLouuSW9w4fhpVxF6n5pnUJybGPrSc8g5M1qdMLzeMWCuqQJTjPWqyGba7jc8ajvH16dgT34UpzXH4WSxBsR",
  "key13": "5bbg3ivRiJPDL4Lgoaihu9cQz4vv4eHrSVhqNaUFrx8bstSgUzTeDEV9xFZ748hsoz8MFcZiUuvHR9Yvg2e63EsK",
  "key14": "35Ldp56c3GJBeA6GjGr6rZxEXDsvubokRD5xyqnKH2xRJhzZa3Jt227KW76TE78j4XE6EArptNMcxMUK48iquhMS",
  "key15": "5DmeG8FCBfQU4npazdCsnWDLKvHYoeKgegCFVMnTQMikoUJ51SLcuELNNrbd2ztqsHfEswtebety6fS3ELX5cYE",
  "key16": "3Ru2R41LNp28avpQF9jTA6sGnetfNwHQJjh8E9Set99cXfCYXXTfHXwJRnt9zHwZCAjATEnzZNJjFme13XBEPep7",
  "key17": "4EcJLjBWnELSyB6trS6QJ6YKkWmsz27y1ksFMeXDzkkLw1Uj8VgAXCHsfPCdXvb5LaS3FXbxdetfo6HW3bhdU5r",
  "key18": "663dfdjZ8UzqepjxiRYK2qnsbK5HgDQRPhgk6mRvcYa1mZ2JbN7RJ6nAqzZfd8LhTaLiASePwpNumDWzcRNkVDGi",
  "key19": "2VRtvHkVSuE4twN9Dcd2q8nuuEV47kAEcZrEVJ2nJMbPDchYSmSi1Db4sRNhhQS8qBvRGk5dNHRx2MNzhjCSswBm",
  "key20": "4M9ZeMjKEqehezRccUYcH6q5UgGstBC1KFhX5NYCPz6713jK8csomPHnJQX6uHPgbWQeUtRXLyCBA98QVef9VzNy",
  "key21": "52bh8RtBvupXHHvrWma6iugW6ndkfUg3YWEVr7dRDw2kVW7U3uSAo9tCqnNEuTbnKBToMRb4EwZWX3RcDkkuXX5Q",
  "key22": "3mc3JinQCUE9ND8GQdBgmPtWYtU9MPyE8Fofn3iLBEkPw9MagVxsRekEBuJQd7QofgxVV8CZ3149Uhk9DXnWc4vE",
  "key23": "2pEJ762Xbw9bpgQ4MtuBK1U71bsmFLXMTWzJsCYqAwmKy9BNetYu2At6L5TUsJBmzsrpLqiMRf1fW6LbiRtDsvpb",
  "key24": "5zHNucNn1FWjD6PGtZdq5q523zPRkZ5tnbSKSqiUSM81YNpRzerfTCp8wSbcy38zHJ8j3d3esaN1e3tZJtSWBofw",
  "key25": "4gb2DngP5nZTu7YfNz7GMc6Dhe3r547d3qxyA2hhVFWK9gsqge57dDTpvVi8n6XsUCzxb1bkg563fzCxQSzEW2tW",
  "key26": "4LMpSXgP3KSRHZ9xb92YuD6Nd6ssmNydGaBRPfmmM6jK3jHyLDKXXo7TXPLK1748DZJFoH9gS7wRzyT8Kymbhyg"
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
