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
    "3bJvKpunDY5At3oBeQHuVEffQWPK66q3cKPttsrUKanVoNdkJ4MhpAYjH12KpFCVH7MjSqVWePd5LLCX7TCWtNYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jqsHU1WGYPe2rhpMDZFVCx4zsj8QCckTHvKzYtNkcjAhk32Vm1xHVKnnMvxLE8tKEdwsuVrTGqRTfUhsX7cqCVQ",
  "key1": "FtepPc63tspe498R6hRxK6Vm75RcW45zPmyu1XuddiAt4LZNBudwtx2hxKqppyjfxRrKtD1Faa7NeC43cZwXTG1",
  "key2": "2UtNU9bN7Z22xMFk5HGqNLXGHMB7eh9W7f5er9iAFhFEECQejwbJKwepKmE9swoj2ki1TcaM2oN5TKQ5e8LwVxae",
  "key3": "4GcsHjy7k2JAuDWhUv8KdUhQ2mFphoV5uD8JXZmNrDarfkAamfWHNM7MTk3fqdSFKeCU6oSMpgTrEB7Mt482dqhq",
  "key4": "sVk8Hrq1t2Ko5LtJ26MqyM3XCAugZYzbvuqme9UbGCU9Coi8PLoWhuETd7678rQFN7pRmkiUnjTVDBkvR9gTQPz",
  "key5": "NE6X3HCC9rqTWgSZ6Qb73sDzXDQVXW2tVrfs36qqpqreRnQ3BSvkVj6Gued7W6oqnamwQfbzSKQ45rLSz8qQBzK",
  "key6": "2GsuCPrDZSMnjw1Dvgi65f2xTShJ2AP646A5jTfoeToYCECdc6pvvh5gGGz8598HP5MQoReWEvEkiNGcBkKxhwn6",
  "key7": "2ZVJKBAUR61nHpZ3vqUKCUxzybnNvDXSJgSWiLtGgubD4WYNVaZWWnM5V3ML5n5qBPF2QB18zxFFAgrSEQw3vyk7",
  "key8": "v27Mo86cvy3G8RAK5A5xCz5bPYUKRaSD6VJQFqv6rbTQfrAQvxV9jweFHJqR21vgfJ8gceiCZFzi6PQZfRXwRHy",
  "key9": "4Q4KViGDtzkm5FBMJUzmGMVy6ZiXoM2vxFC6G8iRDsAvnkzypqwidkwJBsUdMkLoNPgyJKpsFGVMY36MxaHxd3LZ",
  "key10": "3ZTMhfwooUH876Yb35DYj5Z8CyKuNdNpbEASAxELNZztimgyAdGGPBbMhKudN6jP6RXSua8cy3ozjMpAbdTRXaZv",
  "key11": "5qYJ8yepv769Bc3j93TYREqGdAwDmyrryppz3BEwFui66hmwS3QoTSRd5DcJRifGZvobUyeErsPq4jgewe8XAtx2",
  "key12": "43YQdgPgpEjDqpnvVb4w59kHHYPRKA3KPbDsq3Up9zCagVWFVBe8eazxVy1Fc216wS5jXePBhCqX3CBx99hyFVYq",
  "key13": "37nEcW4oxVGmNWAxfSXAcb7QEAAA3HwkSBVYywB7pXdtss7EH7Dtc2ZznQgMtFmmXoLCm3RTWG3f4SbPZcf1TccS",
  "key14": "5ig68WYGqfHRZh9oreWjMFjgyRcaZYT2N5cc3nUKSiKfaWpJWFCjdExodUVh4r4Cj7LSLP9hydm8bTUbNK6UjF9R",
  "key15": "48Moz1u1JVJMnqnPLa2KQ2466DZWsxtgwVs49szEmjdoj1mMz2L8v3ny3i4eCs6w1aLUR54WirsqjUuMNXbtwLY2",
  "key16": "3gHPdCHTafVhGMq8n5PzRVTVPw8xryKk2a1rP2FMiC9eBhH5kLEBJRDXZUFaeS62Tkg8XMPAYEQuUSqmf2kj5PXf",
  "key17": "3JedygMPWixdnzJAm74nGNcmRfg3Z63CtAY4JqirTPuyJ4m8YfMPpoiSHaTX8hkmDYqB9t2U2m4x5JAWpoPBEaqX",
  "key18": "3ramZqL7VW731SkTekkfSSEo4tDNaDbpZDj4uU4dT7qyUR5w3s8bco7J7Apmob17Ri7DhjPDYYvzV2L8Ywr9AagV",
  "key19": "5UfmGbTRFd65UvwsKNTFxxUSVFVNPZrVp38unbJfQjsQtnmae7kw4yXDsenoD5XD77nZXGWJzn8o9qFz73TWZgyN",
  "key20": "3VrBqwLTau9Br76VgzcG1ZmzJefqsDu9kAJvXafHFtuAbFaTXaVwAV11TKFaMaJwzdJtt1eAWbucR3uCHoQ84BEV",
  "key21": "5LdCoVi47N6qpkBtJvRS6M5EvG8dRxGbKinHbDu7R37kRWF4BbYNp1f8WoojyDxhqDkhQXreEVzJZsgdEnKoQYzh",
  "key22": "3ECivMtubBkY2RxpAr8y2WZHPLSmzXvpbNg7Fvuf2MCrqMLgKHaaBSYSKhvFeRVGAuX1XMUrah2qqS13vcy9w9V2",
  "key23": "21QVu8nVxnTBuijUApkMeNeG5Eee2Zsf8pLEWcwbApi4zsepC47c8dedbjYQb6hDqkYcJ3U1tqJcguaisYrZCoNV",
  "key24": "324Y7CNPi9fCdPRjZQ7YFKu3wiypSUXNmLs9XVtHrGLunQqQvF959CXUpMxumRhjd2t9M8ypb5aZa1HVArfzysT2",
  "key25": "5TBmW6qm8DyoTNksd63A5Q2wptnhwKPQSa55ZLEzBqvjy5ddssHaH7fB1XdRBkEskweLjyxoFNi3hhibQfEEMNfu",
  "key26": "T7XVddAcWisbD2mQoDawWaJbL2KEtNHpuxuYf1qcd9cuuuzdh7wvPXHdepiQvBJeVgkwLt5KZHsNgZHMVnAXcVJ",
  "key27": "L22Nk6KSqzEVUAzdYSgkiU3XEMxqCGDXofLW9JZd6sxCAz2tuAmnnJN1LrGUAFXG8d4W2JV2zVoUvbtk2ntwAKX",
  "key28": "2KiKzMQuJ1MFLgM3zdq8QWFktzY4xxDff27crML6txyfqdjo2yVgkQXvBWQZ3MK4oG7jLvTYEjoS9YAozygfWA6K",
  "key29": "4CQF1cGBLC9HcaFtX1dnTYBfqaU8EzPMXX4DKrsub2g67g6HWzw3F46Xpk3d35JcJXqenvcWiSPvQcV9krMQPCjB",
  "key30": "Z2s2yEEqz7nze1fMwXGUVP9133cHd8dzvnPbGL7CTimiN5V7WtWX3b2SLNfSedmBMj78vmYxGqLgvUtGuy8jvak",
  "key31": "5KzAGXm2JgtUsUfw2p5uiMNHpQCJ8f1YtRNbC2sFrraBNvCP44DfsgbrtwbfhoeGMRY9iykZbVMCQq6gbYE3JjYn",
  "key32": "31SwgKd5iLfBbE3mhFf1DTDUfY8zqL8TYjprDXSj8ACPrVS8BEmmc8fWgK2bLsrofUFHvD8DwTwxaibA4NHfXD99",
  "key33": "5KwLrZcLFWndCJpUzrJs9eTtqFXhhHhVASeqWHsYUJ2X35vxcCMbZ897S2Ksctf2rTabq9TstP341azbcfBW1nCf",
  "key34": "63HgAaXuioEkBaeQmhxnyZUukbB7SPhogn7sfamWNy14hEuC4SUxMmWLAGHuSy2cgGUZ2NwGr2pE89u8uDkH6do1",
  "key35": "4gHyh2z4t4zVCnGbPVsWrNw8F43uKfUzrYwWtyby5T9RCp5gaMx2G6FDG2zocyhsiZaBZxGyp39KBkp8uvFhgYfA",
  "key36": "3ZVGogeSj3WvKxzV5H7PYzTNinw1ikpcRj3sUhkSbsxRVVCX2e4TPhsaoDHsfCM3LjHQpcLjSr25QN31dcX1Yqxn",
  "key37": "Lcr4JTFvhGrUe1wQR2Z9xokNRM9nZYNnZZiKRLB5Pjt6x1LiNBE3hqyCtadAeXXhjW1ERAkWex9i2fyZ88Hzdad",
  "key38": "5Qu4ASdF4xBf17C5sKBCr322LUjJf6GQFdA7qJ18b5smdLtnQYdvRQMv2iDPm8pFZik56PGLKrfcWTkR38gdLs2W",
  "key39": "2849r78GugG3fcXvT8S4R9YYpyTBgB2YBEYmGAQ3N3r89BAXVh9qGEJ3kDz5M5gKHg8QgGWfuLRFB1Bi6WjV4Xas",
  "key40": "qTpyX79yLVWfX71hbeB2zE8uqgGpzxWW5NbhMjTdknJuPbaxJNqjHc2mMXsCggdFN4fAJ7MK3AaYuEqNAjyc8W7",
  "key41": "5MU7im6C2RWTTK8DMaZ7P253Z8cJd5tWNQgCAF4rvTpdVxRPd5p5ug1fNDQL2wsCpAgkryd1F7vhmKgBBGYLzgdX",
  "key42": "4iyys5BPeJYa3QDnjzfQZXA6mdJwGazERwdYV62FoSHLVkaMLtHQALypFoCyR9F6DMwVzMKbCwFjWPVRV9MDLSQ3",
  "key43": "22Yj1ygbMhvxjvxWvWEtQwY896WK8thwTdp4rsBF2vCcKKwkDCJ7pt5bc7r4J9suBHbnmaNyTm3wqah5tfE4oPy4",
  "key44": "3ZeSK48fj9MMT2ho5D9fVHTF2FLv5WeXjb3DF9ZLp4qeTNSfysD8Gzx5c62LeUqoRWYNvun3H7midCgwMpF6eLKr",
  "key45": "125MGqXLBpDhAEsq1t6tDmaWAiBL3cQtoww9iPtZfzfjPpEApDir3A7waYs7GFtNSJxAvqRUjVPoXXFxLtsa4DYu",
  "key46": "3jzqky96WPnGzzu9nxA9WKojMYtNGe9WY2nriXSSGEG51k9QqAUWmM3NmdSEQQ9eZoZBPrvcTtsLQ5Y6oqeHQzjn",
  "key47": "4dC893DqWmTT9481PRVSgnvgSCYKfZUwiVbcgx6fxQMkSvS636Vfzb8pfesHMoyAjzdWwAfTHfwtFFRo1AfPbDTa"
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
