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
    "5y4oNhmVz3KHmF2C9y5adsKNsCckBUXWqEoxJQe92Gv3RgYmvFkEjNqxgmX2hAKRpN3oP1BtcvnSUu1WyvL36GNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MLKyEoFHKtxjv8qWTNkxMaQZUbXAf7S6BpQjhtKkzgvCtY7haUhbWLqiEVoBjhwu2eyWeC9rKnLFqgJuWfT4qkh",
  "key1": "3bykUWR5S156wxrCZ967nTioV3grZEAPWAKYDWDW2YLDCS7LeHc8fkE8CvpPMCVYB4xQXHWbjYbQwX5iGcHh8UFt",
  "key2": "5W5njfwD1mRXWNdWSNQUvJXnU5HRi3Ua9rWRz6NftmqAspcywLQnBV9tUJ1TdeJXMwX3c9udQMwcR5iqC2o1uxw5",
  "key3": "2DCj8Qy9JeTVXSWiLrDpSzQ88o9SnNeaCfvYuxPjnXJBddfRrQMfBagCncsojkPjQHv5ujM12goMd4P1HdivCw4q",
  "key4": "3FCbhaQjYG9T6br31UPeP7PbRjojnxAMYFg4qhj1GvNjN2YYmdfqAUk15PRyou9bfrBX4CcV2nT2zhYYyzES3JqS",
  "key5": "2616c2kH1HQifB2qAeEhAM66W9PFsjRzdsM3iUKX6BspxpkpbZsn9hCAu51fH1ymya1a7B4pDaakXEmH6v8tC9pY",
  "key6": "4eHMj6qkj7N9ZAAzuHg1Y8Qx22Edq6DPPTvVrpT3mpvxoFdPM5DFSfko12KxGTfMFZ62dUmBMM8MerdWBMBV6JHo",
  "key7": "3wge6wKasvRUraV8TpNKNDVASzxooWJbZw9djopgDXHgDhouzAw78Ko8u6vpYHzvKxvqLoJ7rKgcyuPRYu7jPsQj",
  "key8": "4vew11W4BrDVxg1wuYUgvuU7HJ6Vvz9ZBPvEXvHGoASoAkYsLB1UEFBaXPth6Sph1T7XPp1iDRy7RPU44Pq7xEGL",
  "key9": "nRrWnnWC9wHUZx735jNyRvM43aTi13edN3dYXF1qMvmWCEo9q7vmCku139pNeuj2NTuvP5oxEqAvCVg91PVS6rC",
  "key10": "5GDMv8nH4ki3eVp9pwicsXkcLSfuMo5BTiz1E9LohBCgtxuPv9i5TkhkM1YrJ4rM7B2NbY3nz7UFyv4d23mBw9GA",
  "key11": "4BCXF83WojNzAYPdqQYA8tF1vLhAgfbyWU556dPDoAaPwYP23ccGwRqKH5NfpLTjjTWWDaTAr56d5wsF7CU5ByqJ",
  "key12": "669WuBUQvLJfdb4pcr36NKkTNfHsu3dnKhD6mPtS9ei3SWJ9pXZFGVA6cqaqH6FnvCwXKy6jAkxZeY1Gsp77D7NR",
  "key13": "2rPHxixbqrCfR3j5W4SpAPvVZiZP8LgAP34fTGwaFAgxPgZmzwn6P2JdwrqGTfrNn89wuQQZTuGNgfiJFtehNSPn",
  "key14": "2Cm7cK8K37pQZABTqDGuVGLJqmsRK7UMLdtbAveatZpCMbLXVUryqaZ9XQP2sCzcfAeSE92SxZ99MYqjTw3myHUp",
  "key15": "4WsAhV2cBfZ5rZCLVB8vF5NmanYC6HNrs7kq9nEGHBxfgVsPxkqPRjrMv8eM9tDfYSErnQEUScF4dAwhMAr3aUhU",
  "key16": "8eKRA855bwXqGq1im9wsNevEKqH2Di4eCeawyXgabs3FyxShVU7VtC48xXrxgEuSTKbqFEzPqWGbGLfZrW8MYYZ",
  "key17": "352K3buQaMnvnNM9uTuzDP4MVrT2rQrjKKMBbkFZgndqhHV2xwnjojfshHJRfAwzZUwNmp8jK9j2PLynMEETJvbx",
  "key18": "5RSSCp3U3R5ir8SLMwzeRH4Edb5RBmeiJ9LdbEwDb8aUzofmKCJH7s4hJfVhr8rJ6pDyncmSp3jBy9d7qJq3Cyk9",
  "key19": "5tUmyfyMEeGJg8LQqoCG3aqs5SCf78qvbEgy2QYLNc758hxPbdgciV5hbFUcvgaBjXo41h317z2PRa6kBR6dTvLa",
  "key20": "euF5Tj1LwZKsDeFqLy4Jzg3VVjNSvoz1bYMhjR7DnEZp9CNRFn9HAQrSDH7pArFcsEorTfQ4zJ6dpzmZe8CzCV3",
  "key21": "4o4m4n79A4DustM3QiMNLgGmStie8sr72bemQTjLtxQVPqFYCQdp3vV13pBjoY57zWR9peCERsAeVofjALNfPNJi",
  "key22": "2YKUCFpUUeiDm2zJExPHsgKoyU9LaePxUZ9TCyE7kCCgDdb4iQD6pP78PZTKKmz91jeW7ZtVHvAVteuyJjkpcApX",
  "key23": "GbrVWph7GEzN7Vasi2FDK4iAf2ULwSqeEm2Y9o8o76NAsxSkBK5QVMRA41KEZwHQyrvnj6mDgNgD2QtfzYcefFX",
  "key24": "5BtbSwbSDC3Cxzw1xoA9DPZurmFCBuq2VuEdpkXpuQFYrAeWxgGSqUELCXCyjP74LZmbqhGmWYXb8i7Wm4zQczDe",
  "key25": "224vbz4YuQ23dqac6h8Vw9p4CYVSz7qDLiJrF7J48aprXNYsPe2mKaxJ6tTtfPxj3c2Yzgb1T4cQGnYH7zKrYPHC",
  "key26": "4BefLHrExpEciiZ236qZ3smqaJXhutQwu31cxcXpfzJUH8y7tHUto4n1Wj6MW7N2rxi3mUE7iXdJMb4SEnDDEZ1t",
  "key27": "2yZYYbU93QLAmtSt8NoUPTHUQWzUyrw244QtoMSeJr1bUJSGnFqDTrC5M76Anhio13PyTJHMmSYEsSsvAGY1pcfU",
  "key28": "2Zce4wTGKpdKmrFeKs41YZfHRZtCovRZanHhU3G3JGyouoUoWwUkMhhHWDeRGE5QnBX26hJoreHat6Dek1LxzyNp",
  "key29": "3AKZMvQNnqUGBduvqSkCcA3XVRS9e9YVVbJD8NnKzehc8aBx3SLmTxk5PgELjb34RY8Zm7Wv6of3QYUT8rWJnvt3",
  "key30": "43uHCrvpkWr3MMmARmcx8YE2CokmHGuhhBXuukkiPaUG3rwwLTfAVvk9zwuCeaR4s7w4Ss9s8877N2tehZb91bLP",
  "key31": "5NAXbmFxDKHU2LumXgDqGBSZkpvCnUhwm9nbbmYwqsccgoWQXcfEBrJaSDEmxDiHi1rqikKcccDiynGqFRvZhV5d",
  "key32": "2nDkxZ1b9EEizdmKX6wGaSzijX5aNDRDjhfs4eUDQC6WdePTby7GhMbspDqKba1SqJdJdDM25rsEqQf13GhaZeZo",
  "key33": "4S9TQtjSqrke6m63CgygJZPMY8uj2ryUwpXzBNfP8sQ8zF73YdRzBZRdBMwZPbzDkNBdvvVAVgkbKYDjzUMP9sLi",
  "key34": "57pQhrwKDpovUZ3ctuPkuKRGBn76exEW1i8zMLsGqi7VLdjxjzjEnzRWGboUn2GYJMmonRfS6c229r4BdP91rEBz",
  "key35": "3jtrpdkjLasUpVKzmjYQdezsNr5dKZn6VxdYWoAX4FX4TLNcM4AnAEHgsvTqux2ftuf5kCDzghL6obM6hqPUApvZ",
  "key36": "5bYEAgnb9KN4qZaHvD5PGHos7jSLY5rLpSBcpGhMTGc3DV6ftLndRVkwu3BWmptiv3QUXMHXJ57dNFg6K8QFRqFm",
  "key37": "5CmRFXUfofsXyeEo3Y3wsv9Q3w2U97Cjws4kRZNUYyDGYZXetnvmtNzvHKNTXE9Vp4bWqCLPUKSqZRauJaXiZMh3",
  "key38": "2sHU8ibVCsipfjWUWA74wTYFwSLDbpHA1e4NZPGnA6uJ1nBn5TMkAx9JTGvJUbgPdhb36AgQUesqLxWKkSqM99ji",
  "key39": "dFxoDrfvFhwZwb7aKHrXs7Dubzpr5RdJ2SaTDQqtAJEBSu2v4HtnhznzfpFCdmrgG7ZH3cbQ53DVYsHPj1GWvBd"
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
