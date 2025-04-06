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
    "4QRiTK1EnDUs3VmwC4qBntgoLjntpA1XiuMGFqSPemFHSRPVtfFNW64TTEkRFXbNEAMue7NSVTKB51T9SQwHRkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b3zXaEySxtGXczHqXZkpjmbyorJLo7j7soJk46EaCKrQqPzammyenTDXVnGu411SzZR3YDe85duBsyw3jHt8pbc",
  "key1": "5QvPXQR7AGecgL7JfJdnHU5hKzLjfwPiYcFYqgDmXBYJjA9PTPev8EjX7eDuMfx9D4Vup9XAE418Ree2hABxpAEJ",
  "key2": "5WytDLWBdwEfthAjs1ijMNvgDhaDavZ4TPWjMBCq7wp1WtcW3UmXQ4jjGU9vwV2egQFB9yA1h5J5YaqMefhxa7bd",
  "key3": "3v5KqCBG5VRWW2PrTYPTDvLavSvTixDpJDK8s3h8L2Twwzzb8ehypSGBuymda8WHSbycTM1XGeMvRmQFKQtkUZeS",
  "key4": "4VB6TiYFpxGt5rVz8h9V3v1QXDTwrbKkXWYrWCDbKqueux3NrvyLRsAE2sQEv4MDSCR52d4LyDLT8vhji2NVCyVq",
  "key5": "3FF2dXNnotkWiPqm6i82cJi7EcQYw9tugG2HR4gj99ymrHQRcGEYe1vZ9eb5x8Hz4UYf3vrWJd7EXAVnQXWse7uy",
  "key6": "43wgqfkc5rCY7eGamxk94HDtWLvWsQJsVc5rQFJ7XNs5TALHrcuRR6PNCDdSF7DRvuG5BWYsNimztLFTRxUtiNyn",
  "key7": "3hhqRKf1eG3U8sfYUchLHh7qKHjs9ki7fjDrCx2ns5kupqK81kzQoVxojj8VnkbWjNqWkyHb6yd5v6igGBJWnjdK",
  "key8": "338jWNbzjGsBVHC5NSWMg1CJFprDjcUUYmVVgtsmnpFetyLgYLXuemmTYzZ7wEpTF6G7FoXn4ofN4rm3qzja3ZEi",
  "key9": "4iq5CmGdGJbhRtmQ8iEAApNXFkPso1ThmJ7tQefQQfKKUJDW5t34MWMjjqTte9oknmzDpDo6r1DpvmDtgynYN8Rw",
  "key10": "iqnJTm2XFdFeLH3f5LXbWLmwCsTPtD1xFM9MKn8uMwD6ZmXiN5ijmHxKYQNwPnuJvTjixtdpVrDYejp7Wvxc8bf",
  "key11": "53aZgDweJrKEN9U5qr5VXeGVyw28YYrxDpoituWPsR5d4cTaDdTqabbtUxWGH4FrCXBC5fqEwpJhr269QhTEBtQ3",
  "key12": "2zZCAep4ccWWaiWxn4iG7ZibAkm7rTVzBLw1YE35DsDNV2uLe8Hm4DaoLMV62hv9Afj19DcGLyL2xQh1HdaJFazB",
  "key13": "2jxAcD5qCqxecKbwNR28pxJPUe1KWnGYTkVKkbe4St8kByKVhmZpPqSuKnJ1AKD2McNV7oiFQaTtby6KGyAw8zvf",
  "key14": "2QWVcnJHy8m45pfr7bUP1Z1gVGbQhPAGsr1cerjxGnjr1zDhiGGQmgRhQPdBD4JGjw12EatqXBt6TrpKV8mvmxj7",
  "key15": "5XLkeZQj8oE2viqdtSuyT1VnWZ9WStjWmTQby44kVUZpkVJfEgLA48cvjdsbPAyUPq1G6dzh8c6nfRFSQx73CLU1",
  "key16": "327PpKPfkygaFvJPUtJcMEfTzYgbfkcxdyqRvaXCiyB7pMJnzobHeGF3W8HYtstXqJA8mEaY4EH7rzVUWgcF9XeP",
  "key17": "44TLFSgGJfXaYhopjTheZeAy871K4fPgmobQtBKHmcLKwCsk1k5rWmNJAQ3aAjZoVz2ZqfUSRBdduiAHkCJczM5t",
  "key18": "5PWaYJodyR7w2mqqoLRzmq5GJH6g1ihHULBv27BUNav1Pw2RMj1AWgbTtd4xczzqMfgoiSPPDB7mUB5nHdhQHE1o",
  "key19": "4BrHr2ppLpctSTA1r9FoVG4rbpgaxUJJChiGfL1zjDmwEMzjfvgtriXzJAP7T5ZCaGrnm5ooTGBJ1c8kehXfTyJf",
  "key20": "2wCFgEdBCwA5cWKGdr7pCw9LaiTwdN37UfznvdLJWGpAaNgokTm9EJxvmpS3sA4erddFJfF1zoHq9n258qaTkCT4",
  "key21": "5z4Lkd7pwHzoAM5hAPuCyKih4hUFYBcfjYPALp78gdLxMHE9N2V3C5Y75MFBWfXicsg42eyzrbFdRLCVdUEPaXH8",
  "key22": "47jsiHTE7PAaavZddQ6dYAha8EWpVuBoWd9Nfe1vthigWDeozagpUKTEvRqjy2MQat68R7xiRYxpNnzJVXn9vnMw",
  "key23": "5P8PZKkMzbUqkj9QhWnaKm1GvcgByzqt2ZvCLDTYU2aeJgzqR4jznKaVta573KvaJVK1uPhquY43DTtjzcmvNo2n",
  "key24": "3yYj17FGQ9AwFPKc6zJ94dwBgMbAjKfUq6Drq4SLfHiDQEroWnFNp6sPurQCqBE398yeyVke9KgDkJYjzbNY993q",
  "key25": "39Ae6SAtQQmKQXRNbNFfJCWEZXfE9v36FVD5BoqCiCScxuggu2UP3E3phJFmYnUmtyKH8hRTJgfjPEWVehLEs9kQ",
  "key26": "2gkAapYcRvmt7zRaYrZE9mG9ZTejTW97ZR5gwtk2SFv46VfcVgwtF9EFMZnNJHX9K4Q3ShqyV8Cat8B1XF2wxwr",
  "key27": "3XBBWc7oqp3yUcjrf88ytBRzDrmv1j64HRQtsBNaFuVQJxAcpYBF8NZnpeQuT695adGVcvpDEAwaeAtqg35w16VN",
  "key28": "3PybrvSZ4EzqDyaeM6onKKtLcwEtdNSd1VdYpjq7S8imdv3fZU4NGVszMjz361f3DujxhDFwL5gh4Ace4WDC7Jbq",
  "key29": "3EwzENpTjwDqZxH3WPURQUjzLXZg3vyn8p9YJEvsc4AqRXUPPcUWUdpE5hAfyFVrHfk9wrpKWxG2gxfxk2j1vy9p",
  "key30": "4zpXCZWkiRV6yaDhxsjqAE4nJTspAdof7mtyTtgAT5uo6zuvJmYVGbbtgzEJWDeqhCjCckECHhdTnY7kvnvuCUta",
  "key31": "3kttNNW9PcsxT2GgxoFdCSKcCKRKnRxoQaaUdSJeX7tssG1iGKfivSw2qjtTfWnrF62FivPBpFXZndcYcXwveAv9",
  "key32": "58JboPxQCNAGPpaDhKAWwpZfphyDY1SgkiD1bXqzEoa46tVE6Zt74QEecG9EGtavWL1UwURaDQD9tbmHHMd6L1b2",
  "key33": "5J25PLeJseNB2emskRqCB7wspR2wQ3iJTGRwavSZTQ5BTmHcSN5j4gM9o17jsAoxVUoavjz6jP3qxXbpf67cqP4K",
  "key34": "4vSYLJarkjcL6PK5MHdhyVuWEqwymQPoMgvtzLwdGqXiGrbqhqnFZ7xM92dTaXQeN45vLszZRrVNDSYtCrkhd1z4"
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
