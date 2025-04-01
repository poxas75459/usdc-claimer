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
    "NFeWyXAV8V5zjmU7KNXVw43gRXCcbpGN44b835VS9zFVL59ffXHS5m7Y7vMCcTPH1aV1A3m6i9NumEXJtmkKBuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6hSuGzqMdFvcT3S1vMG6CT3RZ3mZqvWCrXRzgiv49Sp24k5BunfVkeEmyYUNe9PMqku3nYvuTgLUJfh5FSTTz7k",
  "key1": "4EiuLr5K3p5o97avYsUmJd5XAd9tc5ryjzm2i9TMwnTgks5AXH4gvbGEiNxJmdwgoyv57f1UfueX4iFeC6KAfYje",
  "key2": "bEEjSDnCLbLqLpEDjaPyAdnekJV68U51rmNfs6ivrJmnFD7uhy9a36jbmyVPB4SKrijx6DdWGnM5N6mZAJ5zjpz",
  "key3": "2k3czRNq3upoXSQZu6YfzN9w8b5BPsft3WKs7zSuBHMpM3gNAqZUALz6NYWQt1S6eFshZR4Xvs6djV3JNoqeJJUA",
  "key4": "3jtoD7JPZp4gcgGf3V6nRyhFNPJoK6q5QMaGFxr7vn5AjZyLgP3bCHy9MkJY8SZnx4nSY3EGWB3NjcuGkoJUcvrv",
  "key5": "2jqiCiR5KUYWeDjspSxfd2uBVMnAMYVk7XhWEyDuj9v1HyDvHFESYvTBY7RWm47oDRKJU9kwNVth1Eb4BMYZKJnz",
  "key6": "79cu7vhYh6FquwS4P8drbeBzqU4SZ2TguL25VEkmLBLWayK87qSKcWKWmXpizMbpZBiB5R2kJjwZwfjYKnfEfhA",
  "key7": "5sS2Rm1aUp5Zuz1DcCYRKaxxV1taJ4BzaJWmRZzRLxd5YmWaaXR3iiE3VxJQ58UdbNpYJYumVdWYSyMrdqwwRnUo",
  "key8": "mqg8dwha43jcjdqRzm6bcsLT6jyiH9AX7hSEXB6qVNFW99wUsqdUZXTyf6CHLLMgq8XiZPzoMirU3p9QCsJ1Xwc",
  "key9": "2wEYC3A7RjR6XxafngLwdVyRiAt5xBy5ALi3pF36AyMj6H6nHHfWFEAJiL7rpdi5DaycdDHE1DgTvqHK2DJpmHx4",
  "key10": "52Lz1v2vosqKUrJrWQzv1AJMDrC6TUosx345oRzG9tutW5H1TUgpA7qq4fPe6rq3kyBhpNBhRJL7AbLkshSWwzGm",
  "key11": "41cUU5Pu2sFTbaErRGT9rVAcqzFV3EAbmenuBPGjss3wrrKuwwLcRqQoW2csp6MYAt6akL656vYrMCZzexadQVvX",
  "key12": "2qgTcpBtDW7XfPveXEuA5BZmLKEyYxqZQvHBuTUdYJtm6u1JcBSRPpt967hZky5ihbUkPKAyFTHVyBoJ5BGoz2HQ",
  "key13": "4PSPxP2zDcgvGHT39FKHk8mb1oMCjzbXFcuwDQgpifmvpxbxeCW3MyaFq2W3eCYxzyKRiKRrzER1siykSo7KAzwC",
  "key14": "3dHrjDKfRD3CZEnuGh7k7TeXsJSksRrDhSH2rSf2jS1yZgJo4L3RSjJwmpsmo1Ptw62TPLzZUuemqsCz3obRMLr6",
  "key15": "2qEXBQfjH2YFoCHr2Mzu3SxREyZaZsWSSrLDKdV4gUmYwyTzCqaumCP5a4myFfYmq4C2WNUtWzgNy4UbeiBDNt1h",
  "key16": "3mDCnSwqsd6sAjiNejWh5YECW7T9SBDjH6JwxmjbgwgZ1JrVyhWHomSHVCyzcZRz6ZShNUZfpeYZNRsGnHMeRqPk",
  "key17": "4TZ7TRwmBwa5PLNqiu795uVM2oMKhZZhMW4mtRsBeypJtfueq8vUepgSfG2r275C2EniV19qGLbyuGvh3kE4ADdz",
  "key18": "3ApAKeot3RryidGe4gwHgDyxAL7LRhDCkJtc9o45fiLRj6s9p45DZagDc8f1bAiXyB3QS1YQKobxjYZUvywb5DB4",
  "key19": "3jM4hdVsQELCZq6BZoVXH4F9YHgZrSU9xBDPnmHqjBmPthUQ37GTev9igvyn5suaFtqSAnkj76DPonNwaCjfrrmL",
  "key20": "51UoRD8XsYMhmvZovjUTxGvsPuaHGMxdZWDStAYdKkgZesQ2uwpfnmi7L9HP5jy5qVpMUv7zFPJaCNv1CKDGABwc",
  "key21": "3V6csTXACDAdguapQJoHdRaVqgAX5RTBUipDcXyKBppHxgdJfqGitouM3dRNdnEkDrFMMdLVmnk1Fa3Cukj1gZfr",
  "key22": "5d4YJUtMwQb7G81vFCSkmBvzy9iQTJhP9U7LAbjLkseRVedyECBLMnwWvqtJWAQoJydc7sYVHvMUUiHDKXxEfJFZ",
  "key23": "5HDoSdSbRE1thc6WmzVDTrXqPTqsix2ViU5JR9xmJo1je8YUzfmQ6K8GwgJymn1Rk5jkMu39AfSXeQE3cMVa3tz9",
  "key24": "4LUGL7WfXttFycTgYb8VLfjrZRMtNTvzneE2TEtH997Zrh5nhGAcbeVpN5TA94Rdkgfs18BRfEvoWjTrTmqNdh1G",
  "key25": "4MvmRvu4ZVDPBUXhJk7zfya2hkBE2V4HPj3NEjKCph6dtqPBwrW48gXTWBwY62FLdNvsxZnzB1dg4b8B7de2vdDf",
  "key26": "4nMG1qmDwWqFfHigpuD4sQnpWYudKHkUd1uDXVxqrkHBGu22MEXbu4YzNB4hP4BAyqNFAHTXgPc6CcUYeDFRq1bJ",
  "key27": "3UCBBaFGhMFSJFFTshkmSrfGqbJXhJ7eaVLHD3czxe7CSfHEhr791B8YpuJYA4iSZ4B3kPWPk4YhZkgU8AERYyUs",
  "key28": "2W9gc5toG66EsYZUaTQULGBvYjEDdSD4Xi1uNgUSpqdg1eW9TydXhVtUEdrkrVrJjVDN9aB9cVBjQaaWZ8RKPWoV",
  "key29": "rYmHseB4jzJcqeCidWKnAZKvrfKeH1FjQnc8NdJGsn1bCeSftW754GSrCFWCMicU6WXveCaawtL1w19nWwQyF4h",
  "key30": "aWNGeSGctWHXqWznd6RjiVfmCAXK5vKGu88jEXTPV8aE57oFcZdJU8aawUL3GfzHC1fkD8c87xbYRYc9PKoszX8",
  "key31": "3bkR5ePqwqz3uv3uG7FqEvCZArjj6WMSCWJoUdWYTZbko79Ar1L9bT31BJeDMJic9ifsog5snHyfiYDWGgk6G41J",
  "key32": "3ChhTe4qYWoNge8232FwbJHQ98388dc5Xv2A4ngWpjkDCv4zz3tupfpzKycgboWjxXuFPU5djerwLmKcuuHuP2AS"
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
