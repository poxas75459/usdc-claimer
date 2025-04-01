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
    "65QCAFSiGev54Gz4PyouQVdh2pWt6sVha51tBWBtFxd3kkTejG8drvwXAnVHdjarqozMSo2yLN8SmtX2ug66CLQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G37dFBPiXz9Mn5yZBybN4qFTaYnxGhu4hwRbiXjaSgp5UPZr38DyDcgcqkN5BmWxyesYQRorJkRsTYd5kTmd9jR",
  "key1": "2jPkvDXVnVJTyrcHCccDsyfsKRz39wVCwJKA52BWtnSW23PkW1BKWZt7C5JatW5zQnFbEYpy5toRdUQSY5hizNy3",
  "key2": "3tawvX6rPuGVacUPy5hJhpFKcH8ReuSvy1rYJUajCAMJBNr9mCUedcpV324VKAcjDZqD4N9y9wu8kQQWscpUzgFn",
  "key3": "4PuiLZWfnm1Z187CJHqUR4Ln2v1B6Jmb9Zw3D7x46i5xPKg8F7vcjCsZALzhWZC6kHHFdzFDwch7PBRZ5Auf6c5p",
  "key4": "5wU7RpHbGZxQLE3DDtcHsebZvecF9pVaGryNeoEvxjxzjuwdJQtrdvjJbinWyKrWvNFkLKeeAyVwC31QkUPLKm2g",
  "key5": "5AEG2hJ8aLzvFi1LmR75BJmhcHtaaCqbKQQZXgv1Z1eNA87R4ggE7h8C4wpPFQ2KHD4KH6iir1fQ5Hz5cYquxWhu",
  "key6": "2LTzojf2ME5ZqN9MSgxNpSndnWpddaG5J74nRxrb1S1xmu3TkJU8hrcVrWRSD22oQ77Ez2L2BATLSdPtSyvMCAWj",
  "key7": "3X4ZzYViJXH7fXUgE2RwWJzL9RXT7rehEZDmxGgcjL1jqV5RjD11VpEYj6FWvk4LQq7QKpZYtBHqtSECeoCmjSh2",
  "key8": "4CcfZVUbsCbwqNVNBZwx8L5McYmgPU7soJwvPSQ4GP3HHze5sYqr1AWnXfMWZqrcD1fkC2tLXDuJ5ZBP12SXQE44",
  "key9": "3uKP7w6nfNyGAP5Tmw6qcsL69EdBqWgr1jjXUBF1UQcuy9zLMnxw35PMc6ZYAd28b4sznZ4pqYQEdEr7yR2H1gY3",
  "key10": "5Wx8f2H2dYZv8o7ZGNX5ArfTznwUHDT5TF13LExfmpBhAySMo1nxKmqT9iZY3D2uJn8UE5YpfhmEhSL47fgQjF3P",
  "key11": "4hJxkgUXevmRVHBHM37K7X1Je4A946UEF4E33WrrEuTsoU5ePWDwzWwXM9rYAp8ZxL6ZqazkEoYsRwHofUtRAyYo",
  "key12": "4qhGcwEwuFhCTM98FuwPeJKK1M2koq5xFYPa9C8pQZqAGJTJE8kUvC1sGomyDcive4ZgDUjZK1JwPvER9JenrGcc",
  "key13": "3aHxG771vsjM4xZDrJYVCKbRiuBEZPeJYaorCGFmuLoTzk2eBXcYx1b8nuWRW3T6Y6NJcqnvDswH56yorUxetHBW",
  "key14": "2tSc2sY3jbXyHEUMusE8qCF5eb8jxrBcCH97opEfbWAV9vABKY9A1AU7xMwA9WD5MrwMkjgdLWv73qieoFaKrrsk",
  "key15": "21rqUMsBA8A87j4akiXBUWZiBuLJ65axi4QgA5SgmH4gQ3SGaKhJK21xbn4XXhQcYDTaaJt21cX832ts9WaTfSx2",
  "key16": "3YThG79dqvY8e4C6kq4eMeQCZzZwBUuYxu1xgFuouH3FM5FtwXC7qVGuRcM6K2RjDWq7fms8oS7EbNCNuy1GS5i7",
  "key17": "4qmjxj6VZhRsprR4FcA3M533Fj2EsMFeeAKj3PhwLfx23JpB7JyKxB1kQEyCv8sXsXf4CVcHNnewUA4BrktWgqBw",
  "key18": "21664RHsr6cj6iBD4gQMGyV5A7Dgb5NmNfpY9e58LNSKeGpoPCSiCS9dKey7Hu7ErTSyC4gRER2NQec2AUn5BMFZ",
  "key19": "43iaYMVkiF26edi1RVmK71X7iE422uz91ACiZNLBkkYgHXvadLvux3eVkUNzkE3cA3W8xHu61XRhKCRcXhswHVWQ",
  "key20": "XaRbPi1wJVdkpH4LKtgbb2TYykPe44cCzYSBUS96Q68of5UnBPyUyHuLD6BGitG2CiEqj1JEVByb5NVRpExxacy",
  "key21": "4VSpGVRhFVXicHy86gWkAyimVB85N46Z34yQK2uQ6cArjCK9gYeD1K5wRqzMyxXV1VszEBMpuiwyyuyVMpNSeTti",
  "key22": "286C4RyFrdXTqeYZt2xByKVGVy16ttwLpFw7Qa18txJwUZabMnKHy66YpCe9B88jFt3sKfaNov3eksxq4Eswbi8D",
  "key23": "4egRio82f4Z3is414wGFgvMgeUqnMcqWA5QC682KsACZymafdTMpHdYrLiawMpripnEYNChg1DPK7zE5pLFdpvbb",
  "key24": "2dszhkvsrxQgNbANY7Qr4jnCCt1vNXax7DWUo7dkqq8uXHWeBLHeievgWhDCQgtkuCh5TELUaHBTNNZ9XmhqakhV",
  "key25": "5i7Qpimgdab5tfpdbVLXkM2wDjW8wgXaWMwuL3cgikNUzTjAcpbkrfZb72CkMMRXgmofaCtsBNhk2vt4XfyjZJFS",
  "key26": "6iXTr8A5X1kqKiKJbBACzQHa7WzTo78wBcSBrJh3J5zm79Yaw3t3QBM39Y46oxixUP6gKo4SFrWnHPVYKBCB4io",
  "key27": "3CyLVayEk5d8z2bKSunqUwrC5UufrmzroYR65tkpV2xh16CCipjGQ7ytMg5Zivk1JkYg76vMpthWwwWWWk3jXiiE"
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
