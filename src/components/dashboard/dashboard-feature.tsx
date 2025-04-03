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
    "61SQfnj1zyZm2yDqgHjxMA29N4aVxcywNAXT3JXzWVbksKwDLjz17Pc5o9RwXj7j2oo4YWfZxtnYhYgfLoroLeJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21FTnqrwFhQYs9yC8to1xfJ5a4KCDbkCDRRDPnBxqF2AxBbao8XhdqFZeYxz8FupMcER7ex1sNfhuHX6rsrXbzRJ",
  "key1": "2vuCksx95QL2EARQgGkML61ikoGx2z1qJ2qtPLi4btFVQeVtYis2bLetxAzT1d6wPxoAJx3CxJCBLPcGii1YX6CP",
  "key2": "33KcuhgqZG1h1hYtXiL9mbT3NeDQqMkpebPrHMTmiumohCzacxx341MBs9qMdUuzVMabnWnrZtsb7BHx9LxfMrB4",
  "key3": "AakDtkoRnNHrbcn1YyxTsEzam4txA2LcB4MGPztww4qxXCgjKesnVtw5TzyAqNwFLZdDFFGZ6k3Zr1ep42f1BTT",
  "key4": "2jcJhEr8izJJMQQQkmr2LZtg21443Que4fHSP3UTJHAydT7j4o9yEQpoDaqgkdxfa52FvdhzSPwqXHuEFBwXQrH4",
  "key5": "4961JxuTQxaak3Y1WSogTEDRT2zb6w3b9bM1xAMbHEyK93t4y6Z66F53cPpAmNPK3GCbDJbK7ToAmb3Moc8gPPpm",
  "key6": "4BFi6wAXhE5b4dJSQZNTbxmkSKsKB5evqgaHBDRBsREHCakLXMMPA2pXq7JTDZAoxmSsV7G2LfSVWuUb6nRpWXvk",
  "key7": "4y6oj4kv9cfK9UQyJvg67rgcpSGg4h9CNW2NNoErXkjiyYByn8v98aKVCCGs1N9CfkY2CiTEo9mhEKqDFmWcaK5T",
  "key8": "55aMGWTp5WE5qL91bVHot6yHBjdcRymR6WrvWe4eBptgv9dPXpTHvCh6cjxf8642muVDn1crZGs4z9asQMX34SZC",
  "key9": "35bPUiV6aJdWZ6s8MKK2kUDoRe33jTPSLfSjCC1QxqjhNCeZG7CUQmbFQEjtYaikVT25MALckKE3SwRi8pE3ksUk",
  "key10": "UQykJS1oKiy1ZJghAfiZrwf7uJuBAa2DZRXYcd1g2dfRHnTEnqbaVUofymJZjWsasAkhUEnatdGQViK7NAynyaz",
  "key11": "5DvmqEa5uUuYdxvwxLXSL3Q1FHbPvjyh2PjUgWsS8vPQgEx4x1RoJNdyzR8zGjESFut8JXeV44ndb1x29QpdU157",
  "key12": "2qpfY35fc1tfzY9oFYpCbFuibqugVdgioR3bWn2oH5nVWYtKoqgpPBnAXFRpBDM6QGC1KrLZwSUPbq6zDNfstUUe",
  "key13": "UFCt1RQShUHMF47LNiZkkribBQuhazakzBpgr76itmftQEsCcJe6aYxJrrnUk8Ko7SDVQUujd1nUJa7J4k7o4Nv",
  "key14": "3Jh69MqCFMEJdb2NAwgkUyiLdgNPAXsz5U74C8zufzvowq2FtLwHb4o3Xi2Pd6UuYT2WbTWW8gZmh659hTc576nv",
  "key15": "GpP5sVRhaqtNZtWiEyAQCtdQgPMr2kpJRyShDf7h3YtcgBd82uS4ovm2qMpHeoC1a4BwMjrUK5DFbdJrxYUGCQA",
  "key16": "3zEzHjHa9X1cBKY18FguohNnEN86ttYfs5vnkvunWfanWSVQ7n74f4631dQntcnRTpqV4nWdZM1wnwFMzJYUkEWb",
  "key17": "3xkJYSZbEfEGXgm8jkff6FZAZT3FW1idm2RXwx3BbdiuS2DbUJ69suEJ8cggNSasvcAAffiszfoWF4dbrrELdw9j",
  "key18": "eX2243g6XkJJCgbqFHdT3w66FgtLXHf92RHax7mFWyAtiw9LjATKte7pSUrVURFuf27Kuzhgtdx7uFx5CnXWFkR",
  "key19": "4DHYpr5cqDULXzP8gbNzNiXpAaLNAng9SqmVJU5Jmp66Em9vYUpWE1rR5qcB7nssb9553szxbMo9HuxdEvsE4Tff",
  "key20": "4A9iH2ErYLPzSRvbt3SqtKA786GAamesmaGZ6V6axSDYKAAqtkd7VafbcteWSYbtwh3sQnCgntVso487g2f8FvMu",
  "key21": "41xoy2x7BNtBcnpPk9nxEwgyvh5Lyin2ZpV4N8am7ZUVrcAJVj8MBT2DqYMuS8qSWUhU36bHvZXqZfgphr1VMnsf",
  "key22": "5QyQXheCTM7MXkVqYwVvecpXjGqnEMSpbJXpKTE4zTtPh1bXeqzAuobiwjgz5aofVKG7m91CwwZ3x3dw28VKUcjY",
  "key23": "3ZzTNhfqvcCvPGFF5wUFnmyBjKsDHGJJhUkDGPVyzUPjzc1CHN6FZjvQtUpoDw1nUdzqVci9AYCcDhiVNpJegWE3",
  "key24": "FNvU9MvyXiBZtPjWXZJAVSEcyk5EqF9gPThkvqKSXLUmzQUT4s8jnND7Cci6SvYd8vr33iaUkUiMUVMgzn2TAJA",
  "key25": "53E6SkPNTE3okLj43Eo3Ftc3ULR2wvZymSNCZayD3kbg7hifAYWbDXXeeWKYptb1dbAFc91krvJDyLcEfzMjPZm4",
  "key26": "3CcWAKtTzo5pdron2HsKiSJAzYrRpUDyTB7838xCidbdSZ9CinrxT52EwBm5j2afre6qkcQVPA1gDpRrryeGyY1K",
  "key27": "fLVjgAkbnLcG1qojtzecNP3YirYbFsRJY4LVVxzoeG6i8BFWn1zBPoi7sFe4WxzVgmBBurxFNX9JJV7Ey1THWTV",
  "key28": "4M3SZ2Wj7s5LkzUztGRP9ypZY2zas4YJ6xELSBjB3Aszic3cagb579ft5CURkaVmCMTEKHf3gyUfmitpZnfeM8sL"
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
