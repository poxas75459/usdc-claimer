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
    "2MNXoQomVMoo4nGPPjRqXgnzwVTymffj3TeGt14PZZKwnQrxwcWYU7neq6jGCzxRBbqBWcoQPMRyzQd77p1euGPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32qhFXxSLajWrAkx6qsRQUsuVzotu6c2zktnHCjYmXuvChKzZqqQ38YkHCzSPU3NMjwSQRQ5HbG8RXtHBSZxQ751",
  "key1": "4bqxM7tBfC6hWV43jrLB15btds8CwXHjKM1ynoVs4CnVZq79ZZwdM9foi4UsqVpNBjke5A3zWfxvA9qCGSAxRrM2",
  "key2": "5Qt8x8eV9br4ZuFvh4DwCSKRCbprk6A8sk5qxJeg7jMiAX7onqHGNVCBh1LPcHz6nCYJ28my8Tt7Cc9CYW39jgGM",
  "key3": "2JmgctitMFG3p78DSdP1FABPwPFoawUNp1xZckHqjfDZnc8V7nFCfw4obRzQufJ3gWNeAkPGMqHid8rRE4HfGpih",
  "key4": "XfDbqZnXRFuLLK1nC26pPQMQyjBwiHXa44thYBiijsTY3tp2x59ukxwRBD71zHD6vWGqhn8yKpJhKRciyvtA1pc",
  "key5": "44PEt9sm3uF4jUG2uRWuBP769ZdsECrKRgdHN4Wq9D9WC16S6Hkbok1zBFzj2yRHWmKfVL6mCUsJewtLemoKcbds",
  "key6": "4E6pDN9mL51dxZybvM7dKvCSC54Rdwc8ZyDWE1XbcxxCBewxppsKvqTWrZXiQaK6R4XMJmEnPnonVG6JLf1vZb7i",
  "key7": "5C6dqEwDhKQoy16LJvGynUZA9gczaTKcZ34A7wM8VsJSMaD16rubwtTR624BG31bi3Xgm4m3HViMjr85zc8ej44f",
  "key8": "ZyAFD89Cm3pkA17HjHkV29yyugEri1zLsgv8SU5tDKgSiUNrMP6JtCVnbB9kSJPPXuAcBUzFc61zZvpcGXQVDgn",
  "key9": "23DCtcKxc21FEZxgSqLj4MNikfa19iK7RyVgRQJwQn1TYsjoetR7rzmAt3WwY2EYf8FED914AZkQq8aLQzcSSfte",
  "key10": "thBJRgEk56SpDY6asdUxeh3wQKFcauN6MYGVEBUMvcYesu4ZicLRc3CPG3yBqtzKKoTEShdJmL4Qipmei6UiVsL",
  "key11": "k31cque4KUYnpdtY2aq7tvpdqBkqoovvRXT4qnLNPbLACjpV6YJdb6soFU6ZF6nJf9T6siiibdeNrixf4imR2yz",
  "key12": "4PBfdYFLfy9CS3Mn2KmK4hBBT4uu6zk3HL6SFWVKiBbQQHALt6PFLfPYJqxGqswBEctSMnQg9KwAv4g3DoYk3ab4",
  "key13": "WYB3333vff8sYKurVjt787QeET2NYDXPAN1DWDN1C7qBHFBBGCnTRz5fvFJxV7tRrAiGBYj2TSmpkduYDGKe1Qr",
  "key14": "37oF2hxpdhmkRmCR36rEgb1Jc9ztamXyjRCB23u9LURhn3WcGWWiutfqL4doXX7sXZZrufScQu5MkvErCHKrV6hJ",
  "key15": "RwEQVM2scMQQnxchCg268bF6huhiJMXfBcU9G7pQ9w7ERm1KTUniFawmgAswrTEWXkQ8PXKstF2WHekTstsmRnu",
  "key16": "qwoDpUoQ39BMoKW6TN6MeMUjmmPPefC47qzpJVGQp1TnWoUBXjb46fvrtkMKmx1Vv4mrKG9jmgNbvESJxeh8j6B",
  "key17": "44t6F7sVNXBTg1smqfKNp5JD1g2CdJup1gRQoKKzLcnPMLbd3Sp7D8kJ7wLhHWMsZoo3DvTNntadwHfNQH8Fgrcq",
  "key18": "4LyaotxPrb8EB6tybGGHhsuoqvgQQ21V874fznyibkFKWooE5uMiGhXtuK7UuTQKQBp7nCv8ZvsWXA9dHaKivj8b",
  "key19": "T7a28oXKdPtX52YTpxoqLUQqSE6Y3988fBh2YXsKAjyeLnqtPRZ6VNEXWoLjvG1j4p8VNK78yzWhgifGeAx9Rwh",
  "key20": "3kX18P1uvQNjMyioTAFKZNPPLGFXXvjSvgwxF9tqhLvHCw4Mi8jiBgLPV8ardvAJTQ76x6z7svXfBikBPBpTsSj3",
  "key21": "21S36ePxydYYsgt9iZdEUp2YfSPxh2AHrT1YUVXxn4Rz3RtpEjSwjiSJzBfB7ExPeU1MGF3Rtn6zaSRRzD3t59Ab",
  "key22": "5voD1NpQxm8f8PwWbp3VVrYqy2yrDe3s19C9CLdPyfPyrotBGa1inx9vWdhAYvDPQ3RvSXvydwRQ9vmrewH8hLov",
  "key23": "22sipwMMjwjcaXwuuB8WpEMieB7rTLoh7AbWtpqLw1Jp8rJXNGEhdzycTBvkvF4QiDUCHHwweo91FFJNuoiTLAEV",
  "key24": "4skL16eevuB6ToZyYn7WZzFRRHpVu5VTJS6nNHxKVwz8G7TNNVpdF4h2PfQ9Fn4RjNwrDdaNP1mHR9MfLGdtSUSr",
  "key25": "65JDRvUo6QLQrJ1jyHF55Fa8zToZk7ceABibgqMmTUwdAkmFotES3SEqUR6sBTpuNYokEBr1nq9bNuxNoYeEgKot",
  "key26": "37QFXFEsYXPkjSqLxF7ZQP6QCzGpmKsp2P9bW48KUPSq1W6P5J3fM3hM98K84dhbjxNLFrHBumzeHEejTtjHqMrn",
  "key27": "3eU2icXrKmrF3FQUusBWrwmaRF8AWYyufU2ZTAzRMNkx3MbPUJmo5hWu9pmitRDdrXD5ecQwvf1i2a5WRMov54Vz",
  "key28": "4321G8xWZCoejtMU1krNBos2dds9Kbx8zScvyS6GPAaHSqXaKDdwCGJG6p9qxk2J8pHwLAJrM9yKPPvKzAzGgUf9"
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
