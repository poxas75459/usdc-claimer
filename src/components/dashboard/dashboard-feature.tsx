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
    "54DhSef42tfyKh3UZRuhXbmgUz2ATz85Pn7QKi3sFLrVun8upAatdFKQ1nsHJZDzmE5PdYzPFcKyzXeQ2SR87TwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22WnFASGBwxrb4gebgKUJX4QhMRnxuvyMN4aq1h5763xgL4X8zqzXTs6C8AYTHT7sJccHwYLj8rk44e5UCjEv76W",
  "key1": "3BU339LBVAVuXJRAbn83ZjR5sYiuuWht1NJVjuYg2ERjwWhkiZGav92t9HpNw6WBWsVSMxU3Dtf3k2mhEp229XAB",
  "key2": "2VGHU9ezXPhRPmAgjtZ3gNTYNTzoeDGFEybcwqwVEcYSvygJdUKjmRdzsNY21Yq3C26Uv3n8sS8Cggr1FQCc1EuZ",
  "key3": "3nPtuTBEB2qtnnsfno8KJmn8PQcbmyM1gBLEWA45uftxvfx9r9WMzjkHi2EGyR7kdigrCw82pWarcbMckKrZbcQr",
  "key4": "AnhMhB2FZLf4eD1dVps8foEkxGi2MJ89JnaEGK6MtqfZsGWqvcVmp8carwEtvRob7Bk3smAwBCpCCK1Uj59K79a",
  "key5": "32Svxd9aXSbu84R3o7RbPcDLNuoHHLimCGxKN3hWFtzNa6QZietd5JVGSeAZR7iD2hCtmDHh7zxdUL7jvNGWgFq5",
  "key6": "4snxECVtE7FfgtvMEikrTEtBcnSgyB8pXfavBxLZhcB63419j8accs3drqBgTtgBgTjhx9TFNZwj5yiVJjZTh43g",
  "key7": "gdd2Wr8iJWwQHQaRt2xmTdiH5XDhyEVbSaozj2S4bHBpTZpqSHWrWSMuVeW9FN5ysjLyTm7dZgzH65HkijVGCZN",
  "key8": "5u3vEQYUXLw3k8aTENvf9JoEfeJKNjAKqkcxLCcftpQ99WUZbfH8ZX5FwFj7khjhwjDLdvvwarNrgN3Wdiq49NbP",
  "key9": "2pHdbYNmhiZ2bdth6gH9MQDFTtsTWutskzvyJvpm6ogRr3Fjif4yJJ4dr65vxZUrqNLdPLqvUVQEQL11nQWohMY5",
  "key10": "PgBnWd3rXCSXZvrVR2EbGVQm997KG43oZGoVjiFjD6tFr2fkESfiRopC8ZYPxTbhh1znNv4R7kiMrqoAQVCVSVr",
  "key11": "2NNpaiNrMbY4GiYRkVNDxeZPNZMrXBqgeKVLFwjBosniDFbrTSLVvU2SuTgfJ2vc7EU8dX4U4umDPYXrkLgkMGW7",
  "key12": "24N3ZgCpVtHfuwG7AKDFVr3s6ZPUC9PpNwPCjXDhG64oh9Dm5jsdvtbphnTa2samqxiCvFb2qMJZoMUbtdU5hLvV",
  "key13": "t8fvwpCnZj9yJJXS5zGh9XhBbTaGS4Wvv1xaKAKS5xU2zZoFmbYkobDmCyXebdVFkdkD2VyG25PPRsL87jZTtBy",
  "key14": "61VL6yNzb3USvX3J87YRTVgs2Rh2rjkvR5hinSSF59cQ7GwVJF8pnwMv6N8ASUZr6wX4tXhqC2LnLYX3KNCVLhL",
  "key15": "58HLhKAy6coLoCfVQx71c1YPUtL3sTKDbDSYMkcvmat8pTrjVdBjVr9nnkLN9WaaVC8nA5kQQmWBXb1WE5YYYuNq",
  "key16": "3PaMR5iFN5FTV38E87cbU8Mito9AMoPBmAK5mzxKo3ojpUE1yWNkD7sZT4KjLK3ZFBBjgQBeKgssNPs7QqsqBW25",
  "key17": "5TQxTUkUTWnfsPwVnkCSuitVv4Hoo2ZFgUXEeQbrN1MCB5gbAuXund4DfKM6Ma1Nyyw6at6ujAW44mbFfuJpJpxh",
  "key18": "21SxRERHaaEs2o1pGobg51ChtVPxXrHQJSDahqzURkn2iyPW2ZNn9ZrPfncib7bpMPfMJ2oqQGLRCXq4LEEzsG6G",
  "key19": "5GdReKgoP4CGFLDt5LAM6LWRDLcMMaAxQaSyFtfSKrKwpDECfTwXnZS8Yr4S539dRohWp9qohhrYFvCZSbxbGqk",
  "key20": "4q196nEjynsAH4bCGspexxfigrJeueG1o43sCDSMrRzWJakWVCbgVto5PcTKpohjsbJfZ35w6QXDwmymM3tWpUyT",
  "key21": "4F4ySQMNYUvdiTXoXGi2gxiu6r5hijSdyMAud2XZmRabqkKxWterucB95YnX2XhySsjRMS1uUFw9dEcQTgDBdHZA",
  "key22": "2NwsGNY3Y7M2UXYwvp6RnxJZdSoJnqe2TGkUDW5CdaaPLJbvWMzmXu9YT4w9372Tsnof7e6iypwCcR4eJKZZCASU",
  "key23": "5u18Y6qRDBXDPRvJDqR7tXj3b3QCJM5EWaxSShy5sBLSMnSJ1XAYHXgDPJEQA62SN8UJjh5LvHqywRHfBn2iVbL5",
  "key24": "FjhESkraT4o3E1cMWu9wojHSTp87xeC7JeywRvcqdPcgqN5ukSW1jRzAzRNubXx79BS6KxQ5bQnsWpMrzyC93E2",
  "key25": "fwMCJxpsF19WXCXeR7zbVn7MFxZijnhX4yVrrGr5qG2owcUgJNGQ6BXdEHBC8JDWADQ9fVy1UUnt3RMe7KVUYdA",
  "key26": "2Qsymbz3VZH4PghX4xtT1wwHFqEhHrTdRDYYd8J8LBdGDTqoh4USck8yPb8afZqa4DfxpwY88tvdxDeZpL9LCKCq",
  "key27": "2XxikLmiuyW3pz9RrkWtJrGGmPAhFZhjhrVCWicPrnojXU9VnSXNCe9CWFN299uRnUHLY2LhDrBKDWmpgrAk15nG",
  "key28": "21L3fhUAadChsEqchi1Cn8jkuJqG62DmZQ4AifA1wDpmkhqNKC2HWjoHPyWc2HNuNm2BcsVyLvAzBZbLQ1G7r7UB",
  "key29": "5xwiAqNTbkp7KqKb43vBzW2Ng1AqN1YyRL3trb2nkwvqvSwi7iVam4SUNQYHRWiz4ei5hwFfHWkAmoj5CHUWAz3Z",
  "key30": "4w5v6e7whFxKtds9SjV78hjKcBPHrrtG2aaTqnvtbMAShweSgHot6gQfDovCPioLNvH4oq4oG6Nd6cR34kUVxisi",
  "key31": "3bV4SpakcrGLdx314A7a8AnKqdQBpWPYHAjc4wiyqKLdtQJVUnzqUoZcSV36h6dvzULpCVeht7XnqDm4YXw2Yvqj",
  "key32": "4oyX5Pvd1LdKYWnfxhbGkHZTWbrTtVAG2xLFyEN2yK7T2hcaTRJbf8KpJ4WUSkt2yD2psPZkFbE9uP9PGuhUTsi7",
  "key33": "3Bvu8LYbfzKS7CJUA9bumRzfpUnrLn9QQKnkMqHHHeyfAQT2hwQutfQXmzrBcFSk4rAzNPBZYDEDVrLjZCUQywW7",
  "key34": "3iptZrSkk69uLsuKKV61m1t7JyUBbsvKHoZFSgqDqRUeNDnyEVaKFrRUMKZdV1HpXSKovYAEi2xSSJQAssK7R5XF"
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
