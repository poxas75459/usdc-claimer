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
    "3yEZbEshAe6djY4FGEvYorQGYnZBKxmUvqfzouhZAbThpfVL3wiHgFgq9KzbdxRTdGdFBGeVmz1ZNFnXRXYwiNDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RBwFQ2CsNd6C7PRJA5xPeo7t3d8Xoe8ZKHwHZi4TkUgsrRFWAqaDKGicr6dZ5Z85ExR7EYebsRVJM2qHWERis4p",
  "key1": "2WXjsSQBBbanY3nm6GhVW7MzVW8rh3zs1n4f6qmRrBaungeDXXtUjSSy1aoqU95XKgUp4ccCmSzoJY1YBdC61ofP",
  "key2": "yMFKve4awszVdSUMLnp5EZcYRynfLN4fBjNJWgbUn2vsceYwxz7LFQDehWSHDzk3T7Dajt1FquMpBWAA4c7VLXH",
  "key3": "2kqvrBX2VRqUJ3T5Cg3HwKSb8rDDhombjFtQrgxLjHsmKPuYRoPZfKje2yr9Uqdukg64VtrJAkLq6YAjewio9DhL",
  "key4": "5YRkEW2iQWzi62apc4Kpr8Zk9jogEEd39o4MRgAqMbgHkKtLF2MxHGC2rtcL2rNv73eNAkj9tRzpaVg3dVgqL4SZ",
  "key5": "2muQFPWSx8iEUbVahVq2WtXkHQWvxh2p158Z3HDwREf4yR3HrF9m8ByBy8dnPw2QAus4xdF6auiCGoSqKHuw4rwv",
  "key6": "4cWLb7JRCZpNG7X6x9LLdmrFX5Rq7JZa42BZEXRLEPcboC8tC7phc4NcKu3tz6RTUYYksRpoV2XDe2vvwH1i2v92",
  "key7": "58ekDWHi5NAFaAK2BM7UoAvhefydUJE36PJ4PsJirHyrdQWeJHkcJ81DuESD6fa87w5AKKiLnokM42Dg5skrcKts",
  "key8": "2aHhN7HzS3QS9b8jzcLkYTv7dmKuP7K3Du5eQd3uTuvszzFJ3g5PRQW1WrG2xfKqw9Pq1pbfo28z3H8hPvTMgLj7",
  "key9": "b2WSn8SfjEnFWKKasb3bYQ7twetNoF6fKranu5Hsy4iJr9h5g9ckQhPoPpGTS9Vef1N76a12BEfuZdrFiWotaTT",
  "key10": "2qJAWwbAQR7VbcpGJ6GnyfFoouzbmBHCTqkMtPQoeY23m8pmbtQ3ibQGsLiCXACYzx4KFnHd8V94pxvLcMQjLYVx",
  "key11": "94S5VFYp5oh9x725SF6Vh8nivmozo6onMAGrDHSRnMztph3aHuLbZtssJuTQ9yDEjqgwko3pMdXpFHDM1d4JYqZ",
  "key12": "51stxRrF2tRdxa8GroBxsK3vQFSATRxLLVCCNuMKLzR3qAxRU83ymeUny27yQfZXigQhmrQJoZbUacmBxCtFRQ9h",
  "key13": "1f7P6ACuCHzb3mFfQJbjYW3g9zp2ybncbrB9eGnyMc9LC57n2Ee1cvVvUoxNR6bvuxuJ66zgT6Z2RPNqNK2H1Nq",
  "key14": "3RVo8Y1syJ9kvmP7jJPHGbdf4zbZqEaEAw3jtHduCKg442xpZWA9abLjG5uqrL2xJq68QNJUAv524skBUMhi372k",
  "key15": "2SvZ6Ki1wtjTTkLU7yrmqRHrzSvh8CdxuwCWVVZPcvT7fvp4dCYiwXRLat8MMD1P3CMMCgMAzeydg9vn2T9q75aJ",
  "key16": "3WcK9AA6psoE59HajhNnrypd5xUCHQUJUpjowMFHrb7U4Jhkjqhhsi9A9QCFH19qGfCmWHjVQgwPgDVDRTi9KnaD",
  "key17": "3yytFg4KG7cnt4Vej5Pdc7ZQmQo4iDYf7ZAcJxoKZspqYLETtCiUo5fPHGUiCcDnnMptfxwt12RyvaDG8jbcKpgG",
  "key18": "5GtxUmrXhVfmtP2k6o5tahhFJQTcewFfWXWez4tn5NGA9FA7CZznKM9dd2mDDo52DmkycaGGad4f9fAH5sKarm1c",
  "key19": "Eh3jkWvCrXaLbw7B5rALYCkGEoYX1Z7A8khhWGvRnqhEWX5XR66DMn75nQ32hovP33PhRC2ucdXE1J6NG7M4iUr",
  "key20": "239ouWCjggDfQECPHZum4LAvMBJNm5duCGQRJ5mB6rqNHAPgAKhCJebrynNJHmsUTWjRswwD9ytz292NFA6zzvpr",
  "key21": "5sCU6dDgX6wpx7Y4sh6Yz1r75XStBTN1yREn81KEW7iKKE8d8qVf6M88WZxevNd9CV4QnFgx1p9GSuxkB1vWvADT",
  "key22": "o4mqZQpfyxt3sUKKKWuA7nx8mY3HLo95PJnuHuceisWqTxio5wXPJPdnvWfGXFL1dCEh4tSeDpSoUBnwMenQdVh",
  "key23": "2FbkHanghu662SvwMdtHK5YcgLeiRGYpkjFN1vWjuzgbzHwmJvi3XdkPKi5DiiV4WcMpcCRgCKWYARyjtZcKx45c",
  "key24": "42Zi8FeoK65H72JLzJbTs39CtjzjEiLNDC96EygLyeFJocwmekZBrLQPzqdEwJJzb2s3XfwYVNZb5dSiS7jdNAGU"
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
