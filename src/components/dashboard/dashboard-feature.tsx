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
    "25RD2q3crdLUt1pBBYT3HGQD87DVZdTGpXQfNCCFRhEhJ9LPHTFwRHbdNKWCBsPtMtWVXQbyTcosTDv3E8Fno468"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wCyZReaB6KRnNRYZVkmmpnzdvoJVHeDG6HExooFq8hEvUQkUQpVNMFHzqxUWfLHiZNAUj1ouVuT9tygkBMmJD9i",
  "key1": "4E8EcetithEs77DKLXeqaYHzDBTGeruHeL5cZB2MWzGtwTLGGwTY5bic3ZgdM77pyhDruqX61MjRfZNQoZms3Dui",
  "key2": "tDkg9as1kk5jzJjzdbZ6n4NsCESiUYHj4vQCtrFLWdaDTZrpAmpGpTAmb3FxLCsvaQjmZ6aGhTY2mEE5RaqeLMg",
  "key3": "3L2FsvyGTBTvQsyL1Nyzdc3nzHkYvQuhHYPveoTqMXcbx6eU2ydgTGrbY9cwWzZKnmC2b4gPgKXJFSy1rkgbmqyG",
  "key4": "4LitmyeVJVVsSGLKgQZsHqC7N9GW5cjTyKBYGwu3UEKZqffs6rDwwntBo2tw6JQ74gtxKH8mMQshQcAahKC2pizp",
  "key5": "5yf1JKW3EkQanNraHcR7btgnNjhqqUhp5RMaH9WGj4YgFTUAymJWsMWjhGX2Ek9h8tNWPaNWVb1Fu2mbMtjhKVSy",
  "key6": "U9gZ5doX829h1qswdUTNgtuoF8dBHHJ8iDxRiCZXYyzopTsCYGP873hnNKG74Psa6XDBZjRo5Q85hjHQ2USEN9L",
  "key7": "2okAgbjCLEjCeQg6Z5gQxWQ4rqb6kAMNQADxc5B2CB9JuZxs5HhGnRs3A8oWF3YHSceP6yj5CCMeAUDMRzKESwLS",
  "key8": "5J8GKkszUegxPVeyHBq3RAW6e288hw4nhJ4rwsmvncJDtj637cj3M9bvbYTAdftSBrDsTuMefoS8ymu3ebewmybw",
  "key9": "4RWQrghpm5p13wsTPfundNjjVz9FwcFZ7o4uWhuPdLb1qaKtrguxrU7tidD5Jn9Q64vwrxmLEyQ1GYrFf6EiRBwa",
  "key10": "2cd1xycXbFEsCZBfuD2XVEkLvQS1rfPry5PgFhW2ALn9xTHzTyrtv55JFSbscsAN8wurhuNLNuCLrWt5GK9kVQKv",
  "key11": "3JP4HkFJ3jwEqmhcrpWvpiXpdtHcTBq3V6kpaW7EUSLN3J7yiZ23tX5uGkHCXZFymhE92M6gfdhAFy2ZPNQJnJeD",
  "key12": "4PsJs8PuToNNJQi3ingatTdZ22C6V1P3NKSctibjfU1L2yBvRKNPrAZVjMrpZ6wFrZfo3T8qj6Ut3UurRxUkBG1x",
  "key13": "2YHdjB2MNpJfjTxZK9i9pMi8SR1ZtQAoSZTQYDNdYyQcxBsM6e7A7nheN34mNp3QYvgjayEinecUzvaSzW2m4PsD",
  "key14": "3Hcm1aq58JjDg845zZYxktMVKmKiamQBw68t18GSRNMAZ7xXsQbcf2HKCDemrYHCb92hvd5LCxJKyfW7skaaNPzX",
  "key15": "4cLb5aqbkAfWdLcSsneXG6UtcCW9ysYfVWCsZKu8fAY8PSJnYThnqdjnswCy81yyEKGT9C5pCP2d3kTwKh49QDEE",
  "key16": "h9KuZdaEm7xm3N6CseAjyYFqqFvAdnseYjkNpH1pKu9yesJ1ZgBjiWiCRXof5BQ6rykUA2SH3ShRDhVf8y1oyUc",
  "key17": "4zti1RNmW7FSnKxxxE4KvdNTJhityij76S571MSpV7zso3YoPUJnmKkkBJ69TASU2WJfpjjAJyQCg6sG35TNZCTG",
  "key18": "29b17Gbzm5zdm48ue9ELTPNgJSNRt42jen9GNUL4v6ET1xKEpeNTdTVi4x5DT5Ja8eYzL2GzhnoBGin1sd69m98N",
  "key19": "67mcNjdn1FvrvQZcmR4KoALkiRTBF6Gxvu4a9pG1PiSg4tDsudVWr8f41wyWvJfkmXw5cRxMTyc4HMYy5KpjSQ5J",
  "key20": "2441C4FFZjQWZLNAzefp3V99waLLuJ6Lvnyc314onBSKCGi6LLA5kWKCCa3nvpNj7uDhZpKKenJHsFtYakET3d7d",
  "key21": "rtueXFDQ5Kuck5pTuREEeCgchcPQxYqwrTQkXCM8sGKXJm4n4vi7ZYZD889jH3qdhxTa1XXJHa94HBmmdAZJZ9a",
  "key22": "4M9wmgkt2Dud1CvamdNLWtqdGrdJU5LAd75ZqsSxrof6gdNGvJqgr8aPnRtYDpy56BjcaWyJv1cCdzag1jGaj6sD",
  "key23": "3dMVWR1fYVueLSnLt46n2djVhVb1LsaKatTY7coiYu1V6izhZxCt2uzgjo3qUeJSFtWMqUcUANqjeawuSLt3NAiV",
  "key24": "4sFAD9mR4sxLJyUyX2QiC7SGdVyiF8BKdLUUL8ZMaYD7nJ8UVUBz1Wz19uAy2VHBELDrdjWXPvPDYFiyPbdpV99w",
  "key25": "gM2gu6So89yxx62kQgziqka23xnsJ4ngzvUz2SoqJk3KcF3Kdq3xyi2nnb1g4xLegQPkhdV9LHQvWEUJFzDQwof",
  "key26": "624cWxnCgdmeYiEDwtPhghc3wd8mMkpG5dnFwRqrb9hc3RAYZD9KrbixXKfXGCWWBhpjLDu1p2oYeF4hzYDfyLdj",
  "key27": "5KR52T5Dmoo7tXPspASgjBdBsHHvRB874G34ioToHHd8EzRJ9UN9kXT9jDzwLbpfTx4Ap7JJxpRHvBpgtH7hHvAj",
  "key28": "g9ZmCqBajybMxMExVDmZTVz3TqwA3ZzUgFeZ6o4SUbbPavf3G8pwpF9kTyog3F4BTur6ar7ze27P26EwX2vTrLe",
  "key29": "2xWE9QXmN18aByxJd5e6hYxtiULp2aHmDHyKQ7HtvCj87yCkpqSPae462B8GpnpPbt4UooaR6dmxMJVFKMzAYXMx",
  "key30": "3Mum6mLKjcPBC1TFMvfZR7tSagcuTqXNQfrtDnEUDtoP8iT5fW8sBKEy2aXBrjN5QpRW9RidvmoZJa1utje5FaQy",
  "key31": "5k2yQBCnoP3H8DoewTGGvywFALmekZBKUhjiJSHeBnSEotXv9VQEyrg92s82oPaVmcW3PWZMcYteLxZzywY52qTZ",
  "key32": "5vXBcCftbpFMyRFAVDKw8ZJzmmtXd5qg5FazAWUfXVNKSZ7NssEaB77korhtAfnW4DCxS9ciQGtCVzfsQ7PW4rUN",
  "key33": "2AmTf1UTZnLJuKkghZpZh1RdcNFqAL9KYc66BYPKmLtY5k981oiKCF1hFFPe3LKopZ9Eaz52CaipF8VvTn5bcMwi",
  "key34": "Qc5Hi7XWNxSFsYHoX7GRGsDU1G1BWzb3hJ2geQJnugSFp9iLxvZgSNQ8mz3MgYfa5BTNN7fprbzSRVRZjG2vFiH",
  "key35": "5GKohACDDoUQyvXhKQNsHz3TpRVWWu6RXwoC3SCtnmTDvtu4aV7mfXkC5rYNEDm6EqPgyG2yJMEAEPjRDbVP2VBS",
  "key36": "uAGc7WQJd3gzcx8NA7SgMZA5ErZC7nd88c2dufWE4DTuwksycUT9yGNkeAVTgbfTT9AvciCiWyfoeHUssJcNUJQ",
  "key37": "4zqFWLzApVJxMpA2UMbGCZNWWBh1qHWPeBfWjzz2SUSSf6QJcUX152jh5qXzpxy6zBL4ZNRHGHUmQ3dWpSRKkUsS",
  "key38": "5mhEKHxHKLP6h76x5PSYBReneo6bKRY8x5niakYpxmMDwQq7KRrLtqAzTcxprrYjPZff8sFFEtVvMgnSWNqdsEHc",
  "key39": "9qTEgwxB46MfhZHSUgEUyL2hdGtgtp96ZBFKKbieZDeQdgzfKqWTrDeA6yU15Ak5P32eWa2Fzzbcnogv78Mgowo",
  "key40": "By7nU8eAjFcfEhsQmd3crmGiYUHhPGUFnWqzHNS2Yh3zKmUGaFWJoUU5hZ5Dc5LuEUcYD2hgLNc1i2CZzTjCTfY",
  "key41": "dK9Yx4GDqeWDQWE1LvobXMMumbmXbKyKsRagK7e7fbyVkCWEkRCRNna95V9ckaAjdJTzEFpD24BsK5PqBfgnRAJ",
  "key42": "MZuYEcRdg6i9cp184NDWvoEZQ4hcHBGM5CUoZgAeQgzqCYwvadnVJSk6QeCkkx7S6P8P617tjfoB6F5HNky3ecu",
  "key43": "5vx94hpRw9PaPBSwJMMgZ6PDXsXmpb4Ya2RH8MrVq3GXTA1kmoQpagFbmXFgxsxTg2NCj9ue413JhJ5gntJh5B1B",
  "key44": "4ehQdjmut6P2HtqsxSg3R7uYoHe1piRPxweQfhoTF6UwbQLvXToBjiHv1U8vd67BqzDzyd4TSDevwUaM4HrEqzbX",
  "key45": "3HcJCZjqcsQ6XkWjicZEnt1DkYf7jkoyWz7ZAD7Wun9NnhwJoNL4LkhBJwibf75jnHUxLevSeyjnj8eUrPyvNy3G",
  "key46": "3mx5bYxGgo2oaKMQw7Wo9EyMH8cdvKqUAQwcBWsAJ8mMgadX9Ws9PkjgyXSX12CxA4tYqPbBzDrBAC6j5sajXucC"
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
