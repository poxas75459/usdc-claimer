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
    "22RNbWL8CZE39AfdrscSymed1LAjK2Zb7Bjnmqi856MBo64hBchaVQ5Ae4H6PAtdfZiarGRzudd3zkqdy3aJAifz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dvPuGuuTmR6AA6a9HiBjJCKDmfXbce1UMNihD1m1CTLcvCYzbio9yAEMGKD7z1XyWWYfec7rNroJQrJMDU9Mgfs",
  "key1": "iML2TTbTnYh2XyfU7rwumfzY5273jXTNKYSLC4k2nsb1ruhiQwYi4BmREqgzx9ibHSFoHrCqD8uyGon2CiPDfgi",
  "key2": "3pKbCZKYP4QovWD9deKM1duhFmerjy9SdiaKe17moXGNDRA9ZntWPyXXfWELec7edpX9qkkB3NkpR6ZDwMGJcpt7",
  "key3": "2SghjYpJDMRE1DEDv2Y7CkuL15bz4GXZ5i2qyBknPX3LLthuJ8Lmh7o1pHREDZxuqdd9dU5VrqFnjxTjdYzhdzsd",
  "key4": "4hJXYsHprHjDEFUf8HpxxQKsq8iDtJLHUp6okSHo39cfzBwrvjcQDYNTnP8FD7Ayzok4DU87aubmPmutEgKMXU1t",
  "key5": "3pjSHU8VtgDNH7Kzo2oM1JjvnNVp6j4Vdt7aQ3YXvKW35k3u4iKmHYqbxXGKwMTSX6WxUok9ETzjApMGxM3VSL2X",
  "key6": "2sVDhTx95Fb5v2KZgpF1yML6hzV6zn8xgfYifdgr6FwtU1QoPhxdGzzj5tbMVCz7JERp6oH4ezVfS3e7F5PihpgC",
  "key7": "2RbEgXpTwc7J6wQB8ZHDmiPJv4duUcnDjNzjK9GZ75NdFWkoB4YxR7oUeNKFj7tdkJZKVxAx2e5BLZSnu1MGdiBm",
  "key8": "5sDYQRwNFA1mftNKyAMntzNiZUdg8KvUYt6xgpHBc9G2tsGnWbsq2EakK3yNNbc19Yxh1eEGsgaMZop7xr5FesCB",
  "key9": "2D6H9Up8tBdhRk27YbsW16H1dE9ZMpa2usog6nhTgGiLW2bSi9ENMdJ7fhHGzYGTXRBFv262jHc3EN6MTReMAYpK",
  "key10": "aeiGZ84CF2JxK2sNRuxESMX4a3GeLocJwRNg8tyuonbyPERvTt4HbVCXHVjUJ4YZTMqoRgNWqMQgtMcpEY9cohX",
  "key11": "4FxG167VgsUjJDFYvWrHbiKwqW43FLf1C7HV1KD7q2qJbFdbA4C8xEdhRcLNhjD1fd7VVFRZGR5pUMuLHY92sKpm",
  "key12": "4aZW92ezahmjJbVumMHYKUUgrC5tZmiQnD1ZxrjLA9WvtYLk8X2JKYZkmUTWLuJAtE399N4wuCPmY2psECp2xRP1",
  "key13": "3urDxxGXmN4pLpmCng15HHdGzTfoj4QT8MTyLGDqG9io7fqLEo4VZAkt7e68DNxL7oA3iSDxnuPxAxkyyUkmRehF",
  "key14": "21pEdHuYiTCJ3txPACy5zPe6KTq3YN8DezEfQATmZoAMAV2v1oo1M7WqkaSTtRYshX3EZT2AnydJM1WhBGUi56F1",
  "key15": "ASsWFCgTuJFkeL9ECWuJ5HKhMddiJQntEfW2Xm7G7E8QaXCNmzmzgB6HgCAQVidcUUKwqbeyJs2cDmcpAoABDKy",
  "key16": "4DJqghjt4WGgjYXh3R2f6f3e49grKDLKHdiFjWG7RFFXivzhGFs7weFB8iCmF12fZNmPZxvAMaYtYofN38fXyPjW",
  "key17": "AL6JaHJicx2KEC4wcWC18HfcTitBw2g7MjgZnt6QMzexZF3drmKB4ohG1aE1fkcPKNyRnNBhiC4UdDrmNaLuBWz",
  "key18": "4QYPXpNnR4fd44g8BrGCWRwjCeEnFrFbCfPidd1RYfwj35ZwbmFQGSU3DzNne42Ab9aAJ5T48zpZWG4QmpncRWrX",
  "key19": "2Th9uCLLtmJwdRBrx9DGwmCYwdu5UNoysKbjtKSV9YTDnym6JiXNjCBH3RRutQkXzZzcXpBkpqcmzt3LvWYuCkx7",
  "key20": "5Fgd1JXkRbqsXduuE7nRgBx2rh2DBUEGRiox2S3HZcAmrPT9NFnKURyYR67aPgCewA6pdkFNyTX2p6TrEKXzSbgh",
  "key21": "5VjQXVfFxjXYi3fFV9eJS12v4Y3FdJQiDc18mAqBxVCMerhLxgEdyJfUxrZ9QxXxzewd17PNYUSuvZ9QrsJLXFis",
  "key22": "4NYAQeYPmRN6eRGNdhfCJ2n4UzKWd3HLkSq3xYfpuCXo9h6tBxDTrvczb5miC1bGruVAXHUSgySzTUoQra7KZYge",
  "key23": "625Qtw97vAwfRZ5m8v6EytaWhmAkyXd7ZVequjKJtK5gAdPMPUqr7DL7fA6bojtUVd8AAGHC1wWsJ9GVsZJzpMBq",
  "key24": "4o4KrTFxVdpcJ5etDqSvZx7DCBRkZm75vg4ZgajQM4K6FfWAzip98cVW7DoVXR9gpYowDp6TruNeSKgnuTF19XJ1",
  "key25": "3Q9oqRfHPFHGK24Qs7XpbRQzPQJnLWMUDQoB46m7Lc8n4PEp3hUQNGhnwwoQBFqbEHPYnEbgXfNiTbkN86ZRJxuK",
  "key26": "569t1uPVpuhSxZRyRyXYDeKqs9XT8y7EMERPQWAdK7LKUAD42KquzuDPcEp6efYj1GSyPw1U3UrUqLBHndCPwSUF",
  "key27": "5CLFuU9HB3SoNsmN2EYr6G33b6DK5N7Wda3HKmuzCB4Xk2HtHAy7jusyonYDu12PZdayeR6LXRh6SR8FY4wemsst",
  "key28": "4pTpo8MemzvS99GA5GjSmqjSg3gu23TTd536PTCD7mphYhkNQrN8DdoNtPHa3VWaUhT4NcpiuBBEt7uGWomG35WT",
  "key29": "3f5f5Vt7gviu3apJXR29aoE2PRQuiV7a6TVTZvAhUhDEM4jmS14ZAkT18qwuy1KMhTKpcHv78rEKGY7qCy8UnYjb",
  "key30": "3xMkuZWQbtRagbXRjvyVkrDmbpRLYXGhV61oH6tcHmxswZB6Htoc7KPJhfMeYwqrapGQ8zWKjJrid2FDDprJdtVn",
  "key31": "2L6KJxvXqToDwdSTzkgA4F3GDQdFQ4CMZtCLr7z1Z6vYwQUGHChakW3CVc4HpV9qkrBWxPSrcYgfrCdXfKRiAogP",
  "key32": "55G5yjMdoVpmgp82sFRK1LWxUAMWogemNP1yb4QFUSw2nayy4wajjrmV7p3s4gHmAMUEJUzyXno4u1fL9ivb88h9",
  "key33": "5JhxLRkkig4gQQ4JVedEoFUKMHZcUrMPB1wfq8pkrEs7bVWfZhnPQuWMV6SaadqgpXQur9yLwqZb5oGto4ZNJnst",
  "key34": "5fbYTLtFm8pVzwnkKyE5TETgafnFjB38MuNHCBxvu9Rhhpx4sLNvFBNSBALUA6CmJW2kEi8aFmEmqbawGkVc2XNQ",
  "key35": "M3caj6XvtiyJZt9RWvFYWbNXMPDc6TnJmFwsv3aPQqizoJMm2QG1jSa9b3vKsatUnfkmyRZXpyrYPEJ6aE1VQYj",
  "key36": "8gBHwPoiN3csAz5n5yNAfXLLwZ542vN18vdXuDwiuWbEQuoqWUdCzaXjWqyKktyYvTfSL3uEJXBmnzGVHFQ1SiG"
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
