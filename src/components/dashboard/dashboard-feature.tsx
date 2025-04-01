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
    "2KMZk8JL7LXFBQ7LPujVfuGQsRxH7KL391UWq2B5xTUXphDCMVH84G6VAMKzMYXwhhSmCaqhebmGPCGosMmrDgEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gfcbdaTy6Z18cW8WFbFbiwY4chTbSZWLpWHghJ1fUCY9kGYY3YrvFShZhcUMFE5hRUjS5vSxMTM3BvPQ3uujL18",
  "key1": "3SarYJkGn8V7RNjxDNcRKQqDUeX9R8LdTKK6uuqdGZeefUfBWG8dPthbj4F9A2s4MuutVFFKRbuuEHDwVKQptSc8",
  "key2": "a4gUVdJK2pm46xSkbTDdzREyU8fFpK7tC6qFc5ZTnjGBt1Whn6RdBRwfgwfr9xeEUV8pKs1Yr9mvLGikoBkck4Y",
  "key3": "C2d59HVCQzetda1s1rYic9d2QzicWhX3iL4zWafzbVegiabino3nkfBRj61RHAc4Eg8eQF7vkxtUgwxTiSE5x2b",
  "key4": "5i4bwbNzdXng1ibJR8wJ2bRb51pJxewpd6MxSFEfgrakABx6xX1NBFZ9yFfHjkMP4HvPrqzrPDuLbMMPVuEaEbyo",
  "key5": "4waZxntKxoeToCJxPXm3gnXxwdwHdYuLE6iXNhfKpr3s8bwjBHXr9o9tHuj5k7Vi1virpsN6ZSDWv1nSezeUvLmj",
  "key6": "3BAUP3gEZ7iKok1dGpukMViPC3W9xtA6wPw5qUgBYLYSjnRhi73jDLW6DyDEShyyiHnd9bdWVPjiPjyGfbrViDWM",
  "key7": "5VQhZrzQ7qHboSnzbzumRHJ2AErx4qtrtHuzgLGeNyYSrWMCoUKAtAUK3SmLdc5t7F3s2jYYZCpn6x9ba5ntCmRE",
  "key8": "2fda2HfrDsieXcnUVjhjUDsFEMS9JsSTTDqwCWHqf3QgxEzwp1XkLq6VamEmNAeH7ACfGFVBwfMLKyTsKZTXrezn",
  "key9": "5RyN4DGWfndFrFyXN6VHKdVwm2gNHfYqSAVz3jn6t9SM9FeqRXMxYyrNJH5D9joKc4dXUVdkUUFJ4nsSeraoAwUG",
  "key10": "45pitigW8GENgC3c2XvENDmue8afp2TvJYXKfL6bWpmFhZtduhv1r9mLFTF8zEjnFJExYAuzBwYnyQYmDiEDvW4Y",
  "key11": "4buKijXyZzFoWA3N25T5btgfAz8jjUtVRRA81ekGh8MrXzjb7jYuGh9H3Zo2GuntQMe18gZdjL8U5LTewysZmPpH",
  "key12": "3vv1h5xtms5Z7XDpgpjnorjs4ptd9fAJTTPWZDGPsRoGnkk4Xr6LTUPrmJuCXK5g38GtvGV93HGY77nLbHVY1nuF",
  "key13": "5Fh1G8qDVouvStYzJxpCPNkqGsvkSi6hqxypYRoDVebH4j5cUA2o6VR2s2EoWBfU7hJhUjPeF5XsU37ZZXsXvBLk",
  "key14": "5SPKbJvFXWA6ydp5fuNMCagrRqYa64qFfWsvq8jXiqLgy14MwQeAkEAcYEPH4P7HzUP4LXtihq1abHGPcG8sHGhZ",
  "key15": "3iReSJe6TXogCY9eVD1ydVgy7aY3Mftfht537LBNbAxkxzuvQCk4tFPjiumkUhu8utftXefGzBcoCqSSvEVvncoo",
  "key16": "55B3dWRWXD2UmYcCeYfHNyMmi1gMvQFQbhGb4hjaSFPK9usVS9TUh6efAZHXBvhT8LF6LGShuNT4e8hLuf8uX5HG",
  "key17": "2kSF1mzmB1Qi8zznRfRQcwqMuxZkCGDt5PLJJdGAVqziCfpWCENsD729Jgh7EwpRqdUp8UHN6G5jYvVz39jPpH7Y",
  "key18": "4XUAvuch9bAc2ioLpYWZiti6hCA1YSPraE3YpeCXP6cRoxbt7AkuZdD4mZL3tQ4xHstX1AcFCiawQdEt9q5gtovb",
  "key19": "39TfbSJKvzS1Do2Tpg1ufGkVTbmkNSNxjUcLRpHkQHjuNRBwH1LJBCoaSGKD1BhQ1S1p2WxVj4ejrSqTk7hcfdAF",
  "key20": "3xEZptiq1C4JskJHQNxPQmAbp7S6rZ2S5oBRBhq4n3ptpCngWwr9Gehyq63vpw2RTcy6huP6VMYWfiywzchvgUDF",
  "key21": "5cF3jUARz71ALFVjngE3UZbFeoijP69YBZGwPi7nhDrwqqgzgDn9xxpPFckJ7iketkbp3kgzkvBPTnGLwSQdv4XR",
  "key22": "4Vh3epLPjvxMhebDmb8hGGHdz3WNLcjF1Y77sMRzondp6DXTa8iq7kMsPwtYBETyVyxm5Vma4CnuPvCkombpmWy6",
  "key23": "2sKGXYVKbCr8yrQmyijoTZuQZtg4VB4p5BpgF6byZi3gkxiEYfmhAYvfv29ryMprp5XgWojAFif63h5bgAVjVfPm",
  "key24": "5iJaSbBR1jk8T2jnRQf8WBhr9CPaEYE1WEJ5kA8aUZ6K41hUaEQJZMxWyPFzhwdXMfy5td1AwjYEFDnhCEkVGak7",
  "key25": "654dzwej2PDpZWbFqZKR5atFUN2GiWfAVDwpXLwaj8aj4GyCh8gzJoi33WuF8szkh5WqGHxEnWDWjk8UsDP7E6b7",
  "key26": "4iXQBbqZNdbG8HQVUEYrWYZekr7yH91fUboUHFuHMPAYkk93HsMobLjTUrBfnWUMY7RViM5ZtW8DWCgT2LK77rqm",
  "key27": "5emi7tD4hD6rMjZpXz3xcPEYrdtPrGTBZdjqLP1xgx4Sxj6boj4jf7BfDwD5rypqrnmUvSzphYpLoez61SsqtsYN",
  "key28": "5kSGUusUSJ976wehXG1uaxoSooHq43pZ2MotJeTenXWF27ZkNfVqFXtB8TDhai8Uoy3i6aEyYvm5VZeywg32ZBpT",
  "key29": "zGQQg17dk1yCFYCkcRKAgoSKQSPFCdjmx2hsf7uJPnkFhGAKovPu4kJZq73j1gkVeaxSKVTirt9aToVZKbJmY3G",
  "key30": "51uMwGxSuqgjKa77BJaja9MNLi4sAef8GCRsodsePAGqmkZwrc65fLVUAKVWq2THbFkXKbWmpUvQGtw5dfbMxYSp",
  "key31": "5Mu8gDw3JmEyoiRT5nBUPonYjVt3yHMRgFomfjSCbi1LrWCs3dppEC3gH74yRwz8AED9ZumwqTACPvznnoDVua2d",
  "key32": "5vbxkHej6tiScBTbMiLBzEdFwREqUmCcQHMbP3f2yYuq9F4DvccMg1T1GLbmUdF6b4GjvjSoCgUcE6Jyqfr61JBv",
  "key33": "4ZdfSqoeLkHrgYi5JDx7FyWCmhzsQzWWU4eeaTMDs1rTJW8ARWm45NadLSMxssuddYWwQPhXgxz1xTV36sHmXLV2",
  "key34": "28D8QQ43EKjeXhRWTCJb9to52FhZxjHaVU2nqs7yen6S2M7b1MAjPJS5sHXZjkRngJJ37PP9DLHJrfUJYLdDAhz9",
  "key35": "XL5aY2JKw6XhxpaEDFW8RBfMHzqdFAMcXBN4r97wKe2ZubYzDAbDjZxkzVXwwpct6wNcBbp321W3yyJCjQ5YeXf",
  "key36": "5U4uDpsXv84VqEyBy1UKh1YQoiKY59zU2SrmtGmRCKXg87pfBhnGbREG97ALt8f5h1sbdaZjTbm2pgZyPdvCJNxz",
  "key37": "5md6274kjYnhCfCbHhF73mrda6zDagUYoxLJeYhU3mr1MyNhFGVUTijh2bN77bBo5WLkkeorRGCkVN7grXU1sQ76"
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
