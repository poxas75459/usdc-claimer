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
    "4cotG6M1G1MmPyuKeYP68i7M5qXfgYz4NbpHz68jz5Aoc3kvGYzraVEHVxca5cPYvDDi9HiKRyFyvo8TCzQg9eoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DRCaTV3DvJkGvFac5tJmNE5DnnU3rPG1yynof9sVpxV7Vf8xwJ26QWSJNaNZrBDup5M2YKMSFWWdhXe7uKW4sg6",
  "key1": "3z3pfLqRQUpEETEiXenw24ukJEsncYJoQ5ZqwqWaC2Cq87rra7BEQxjDMXTtL3grDT5hbdr3k5oK3WRH9AAAcHkG",
  "key2": "fH16UBn8CyTcGVRB9TUtSopE5wAxU9EsrLaXPs9Tu6r19rNx8aNfQesF29iYTDPn3AT85r9KYuzweRxSJXQGHvW",
  "key3": "2bTwA5C3sgQamfFEgFzyKvJAMp3Nyr7C8c1vZfuYqJ8jP7nEUCYpe6ApEw2W8Rnya1yEXMmeHDufpkFq19Cwt625",
  "key4": "7NKzHjCLKs4LptXqvaaQLt1nsHrWtcJParHmgLbumD6psgCgm5AVEc1ShaZx3mJrrFjtngyMwW75PBDe8xeMSdg",
  "key5": "4xmrXHrw3iVe5jfz7DwhZUtpvo2JeXSM7o2XTHdxr7VKsWX9jqfPrKX9UqbMjrMWaDSXkcnScUwFoGEbXMHTLpQt",
  "key6": "v9o1BiiGjSXUKuyRv8mTQwyidM48zt85pcs2zYPBW4Ky5hQ1kSjU4qxdMtBWCELY3kakzB68tAhH73FBPpgYX28",
  "key7": "3N4umtDKf1vaLnMPZdzapcUhjoYs2nAxnYuhfoWvQoN9X9odKgU5pVL2dT212kg4qnVv1MCqDBf14XsoDe7iVszb",
  "key8": "4ZYLQvtSfexgzkRpgqtH3ZzWVcLKCjZ7ywJz9CwdFU82dQPF2aZ1Fs9jaQGt79r6jnxGe7D8sC92fMmDPWY8C9Jy",
  "key9": "2EUrCpSC9bs3sgaJkGX1KtSHi9hK2nxg4rfH3cZ47dL1ZXmV9ZiPCA97SCjF6hunogfw7vmwZZhpY16WmedZa4ys",
  "key10": "5Vute42LaUghbKm6fUr8PBQZNivWCGvec963Qpn1qpCDmS4GAtEkFw5XqfEmPBzu5gBKD8qRtH5AS81H6LS5GWjL",
  "key11": "5rrSYpX3bCmaBDkqMmEcDVgXifvTjEwTWwitiEMPwccK6BpeKfj8ycEcPriskKnd2xvFva8eQGfAnvevb7Ux4twd",
  "key12": "rvCUtt1bd2zP26LTZy8pt23NqVHCbrcfMQ8Rn8rk19wfsJz3Gmw6jKHyEUF213i9hLWGUjXT6WjxB9xd6qS4w1z",
  "key13": "42zcMUw48W4QgD1hEvTQ1XFB8HqQ6V6u9bLQCFZDLwckV57Bwhx4d6nKvgBu2e8ZXZaqBLKVG93goetkV6ADJWSu",
  "key14": "4T15RtazHTMYGV8sHjAQeLvWrJtMocdZBE3iEEcbiuNeAiVMqvhQ4Rc4k7aQ9onfdJUxk1HAQnYgqxhJXZ8FKmv4",
  "key15": "4dUVEkCHCCabZydSGkiEEyQGBAVJAd99UyEQAk2NxzyBMPi1Nh3kP2RrhFdwEfntHNCCwjbHMRuWeoBzpALCbU4M",
  "key16": "NWArwQ34bmbnDPomm7jDaJWuvM7oHp7jwQY8Mn5MZ51XygVsZjmTFL45j2datsc66wVAxWM3zJMqwCgT2sDVqCx",
  "key17": "4PHu6asmUG6J8nx73WDbZYcZoLk9rKj7fbrJ2C6cK5KGgXieLL7nMsr7qQPqZDD3k6GsKU1R7BdPvdwbX9VXqGYz",
  "key18": "56AddZg1ZiWoPY4dy19frijJU43AEcfqxqDbCzS7abzHXSNWAXFZTjrJzRkoRCWCyBiv7vaVBDStXkBVsbSGePRR",
  "key19": "5gMqtRDAZcnjdfApjB6CEThFuqLmPNtMSgoNUhxnEUo3VvGRv1qkP73JvH2AFVMzsVfMpX6gAj8hQu8H5Vz1ch5W",
  "key20": "3WVysSGS6raNVCCTnVXWMCE9kStiHKSFZsU3uSJpnB9gsENBFh1ui4c4TmABYW1nBBdUmEDyi33QB3TnHxZT99Am",
  "key21": "268RGte5ths4tDsjsRBhD9njxU1nh3Nfxrk98jhUoMUK82Ep7jgHoe5ytGTkTToDws9nBpK6zD1xfdx4PDxHCvnp",
  "key22": "25uP41u1EJ2kJcNfxE6oR6TrucaX8FaquhsL7Fm8X49jGtGPFS9yvVTwjBozAPx8Czn5w9y5z6Jd1doag8RmGwe9",
  "key23": "2mABJ4LyHLUJf7831vNK3WDHA5K5Qm6DidYbWTtK7ZVW38xF1Xj2HR9cqKBz1aFyuvYR5vz2r2ifjjz8NQLwTagw",
  "key24": "2ucJfcFUwhgnwAqUfaY7rh6CECWuGEDxw8Xw24qzTWStdGHFK6DLZy1FDEcRbegwVr3zQiuL5jLa1cV1RKvR6BGC",
  "key25": "5vN7te7899yPNpyf6jVH5VuvhDMVcdYEHoAGebLRQ2PQ5qKg5EbhVYFmqwHYA4oUk7ScZBSLyJ3PKRTssNakVmvd",
  "key26": "5HimLpSghNbQk3bT7kngPSzkgkG2UpFJV6T7gtXH6E9LeRNUbiXDsvCM2HLHThLmZnazg3BiorYi2gSemjfuxpfE",
  "key27": "2LHTdXqYReEoLAiRCD6wyheRCHLwHyRvk7Bvs6Y9XsWv4KNBq9E7yRNKxnUmGfSRcM5hsThKacqs9CiVYoDyXQZc",
  "key28": "5eUJhE5NU8vdYgNrZjW6uSgE7CJVt4aUHwppRmtyCAC8yxBd1jGftt6zjzm7nSytMxQZqc3QW16qjbMzV9h25Ryd",
  "key29": "5BDk21xtiSU163MVXsty7jN6ZRUyPYcQrwBro6KJpWmFsDDf1PTKh51A7BTpUjbdU6Z2T6W16wVBmSx73CYz6tMv",
  "key30": "25nQVd6eb4rz1zN2TuB5BBYrKeSL13y8zWZCdDsjPSN8cR2VTVUgkwc2oSdDwn2xW2eX2LdtpuozULnXR2Rn8DSf",
  "key31": "637MMTUS5pWeiHnvyKt8BcWj8F46rJiBw8X8jpDCsxPRqG553BKE3tcqpzJEWcXWW1T63hRjyUZbuKpPzs87Pti1",
  "key32": "4Mwirib1GGNJtcZ1nXvEd4R1iRAxYYRf1ngwzsg6mh9QqSGGJCmqivkiRWadCXzUBHd7qQ87HcqY5z7UQH25xP4y"
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
