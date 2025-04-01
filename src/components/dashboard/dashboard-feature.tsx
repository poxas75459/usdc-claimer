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
    "5gqR8UkRKDuXVn6wqRXnXWgU16PQ6ENh1a9tVt5xzkmg2VFD59SDprkyT3t5aXTpPEUrWaryYwPWY8mqeDpkN3zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54qnAB4CT9TvuSVCP5VQ5DvTZZcfTrCSQ27MFU4FWjEjHxYf2G4ygnBJn726v5aJ29fMTaM5n1kw6Y7gqbYuTHiA",
  "key1": "5LhGmKW9JJ4icU9TWSPUHrqdxyrwnzrighQ19R8wXYTRZXhqRvPy1hNXNC3bKw3qm2GNzDUgJdW97QYcgLAtfSYQ",
  "key2": "4N94bKXk5ta6gEec4kNu6U3VbrKvn8LbrCCMEzykyeoDhkp8qntgptivUtBo6ppPV3iyBjzk6mKzQjbMTVLfGdm3",
  "key3": "qUGZSSFsjCy5bCr6oDVjqzzD5oKZog3stwgf9Xow5weMKMYyg7QE673WtrrwqTA4eUMtY1Ghpfi7WzbpuBWwLoz",
  "key4": "3YgRyNjRFQz6915W9bpJeAGs9cHUki4oac6eCn9qHmHW6DuFhCoPK4WmLsYMBbAA5ooRdMHWzt3vSoFUuLbMzkp3",
  "key5": "2QJQLbHXB6JB8vZJjsv9MNztUZjEECnqCvMTDBJybUiycrkp8xGaY2b7oKaRomQqMrnKaGSnQzPfsBz7nGG5BguK",
  "key6": "3JXcvywbu7houTR2bFfcQzSD5XW93SLGJQLfntCQRuYMhbTaXEGw2mrA1rfKSB9Maw6auceUHNnQHSeZ3P9wENwY",
  "key7": "3SxWG5GRkB7HkX1jnuQYh9YS2sWFBLLjGXxYeihhCq63f9sVFJeFK1a7awJ39K5RfvYq5zFg5nTWbJY6AB2n5JDL",
  "key8": "29Zo7h5k56hbLKs2FRxJbBzEFurPWPENQhRA6wWrJUohEmy3nF65UMHPBaZfBj1FkZmDmafKFV3HkMhb1YkXxdGq",
  "key9": "kt1f3ufVe1MnGydDHwNW7hsTvX5jWJXHdZ52dVRtFhNaQL4nz77RvyB5sqiYrYnnPSusFEuogxVYSFyCAK6n5Dy",
  "key10": "whmYn7cXUmCF7RMcUNta83is5Gd31PSftui9SbVD8JJKzZ4Hj1DS3nSGD2nr9Tb6vFxaFQFwkdf7xgZ1aMCFfhM",
  "key11": "2UDgSCR5pkUgVNNYEa8PsGEr7xPPX9JywcxKi1LurvF34bBNhtRcSyvjfNLebcnRg3mpDLkfZNSo2WAfipBVyvjj",
  "key12": "4NgobuydJZMpJw3AHeVTGARq5dTCN2Udz2jxL8P6gP2cCwhcZVti9fsrVhTzVs8NC7xpRvGyYkAZNZCB7imnfWXK",
  "key13": "439E7bZi23wNKq7EobccisabfwE63P3ofJKgM7sxvGdUGnHXdWFb2x7FNzkbG15zUfghouWEW2Bq4d297min969t",
  "key14": "uJKCoKgD4n5LjyVzJXKrcnWSgcdGM5wANKmG834oQimZez4WMUsC5woZxGLNsZsUwaMAMkouyzM6ao9zo4pUg6R",
  "key15": "53mDP2TsX1GZPvN3zP9ME89fYFEFBvZZ9DpcGb6x22XsYFaBdNSMqE2F3D1VcnhXvUCx912FhX19aLjeUyNnBLkU",
  "key16": "4wHfxFh8q63UjUVmZPTCTNvWNThiEkHvwFqAWb5D7jyPU5wxipzmHD89rq8nvnchNkCvLdreHneYGpJsdE5P35J8",
  "key17": "3LcWxkquBXeEdYjV5zTLwg8JXzTbY9CvukmnzgQgLJbrRyung3XV6R2vr5tJdLXswB7AfYZxZ9VVQxug2XMu1qvS",
  "key18": "qpNqgKEXhmoPTkffsMqdvzyF7uoJEBZkvjnpbwznHWrjhM665rrTFZu9YN7FFi8ekx53oeyaTCpNfUsw4qJHkVT",
  "key19": "4eSRXWom7ZPHGvhHeZGvr7TfkTyFi3rp5ZRfTZemxizP3we5FougYBHcPRMejtjbQY1y736ct36zAbsLkfPxnFRn",
  "key20": "2nRK2uWQKnQmYK7p7m4wfMTG5zzgCaUrvX2iLe3oMSc93s14Ef1KquCsZEeaQrCxig6CMS2DQHnr5UH8hhCRokvP",
  "key21": "3V8pEUjvNBKaNpYCAL1NfvpdPaTS2DrmHt16bSsAhhmJB8WKt1QWFzHZBJKCACTuBAvj5oSeEfPGfV2HAekSkQqu",
  "key22": "2B8QpTbK6gBZXTg3DnR42hwSRPEfgKn1uJFrfeA4qudtVRVvcMczTaFzvsA1SKnb81cQ35pnjcRquf5wmsxammLM",
  "key23": "3mghyvZfgdu9YHXwvKmZdGJDysusjSAyK52GzDqeesQWCastobegT2wNfjnDzyc7eJ3nc5BQ7gCEqnFzC95Qppco",
  "key24": "5rqGU9Ph1Su8gCVoRLVm2njpsgC4eLhpnBbpatGriSzWA3iVeiex1m3kK7Dt5FGuGTMsmVji22pDE71ZiSVY8fDR",
  "key25": "2LwAph1mYwQcZvMnyUPUpTFatiRbCzjuJJ7URG58GzrqrNMRcL33wgtqfUYF4Vpt4y37bxgRcH1j9vQf8SJLPaUW",
  "key26": "XHgZY1veeTTTgakMYEmWyfQv999fk7qjDnyUtywZzALqn7n5UqkeGqwspM64SFxgJprgUhEEnC95LWGyW2py3Na",
  "key27": "4DwpqSLQ56VDPFdR8vYH7Qqvpj2JjT81m6CnNZe21BX9HCwLeHUeEpmQcfs5FkBX2xTDRa8eZR6tTaRWud1p5Gdw",
  "key28": "5PN7eFZivtorbbfkm8VTyi77Mq5NnnJLDZgn4SP3cV1eHBX88yWbLf6ZqoJKJ6fU7wn4LCTUUixLaQdR7Ajt5Xc3",
  "key29": "4KQxfRYCzpbmyQwRLTE8N3sNfzW3Fjsv4LZV26ZiZQu4jA7DMVqp2QW6P3cnrZjAmWJmRiKLutbJVnXmKispmi1G",
  "key30": "4LTmn4XhbniTLGKvKcGXmoM72m3RBSpopMQpGvFgaw6MwdEyKo5E8gdTSncKpyBQFcQ9yqSv193UDdTkCLzGeSqK",
  "key31": "2wqLdGJtSS6X8XAbJABwvHCyLTj9cHQsHPvBEZTXokvc4Tx5njrGoG63UstZ7Yzu6jhMPqvHgetivBBWoNYQF7ti",
  "key32": "37JRmRZJVhTDowJpuxfmEpR1HtPQb2eK5TQib8i5WSWgNSYfhBKzFGtL7HYkaHoxvTcnMEGzmwWkyLxbMaUC2ydd",
  "key33": "3MyCjEaYyPw916E9hts7HsR6zbwbnxZ3A1PZ8S34pLp2Qhvc7y5VhdGEo3M9XLX7ujj3sSFgVTbS7aucn4ZkfZUD"
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
