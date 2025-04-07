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
    "4Jz9EiUw9mE8neN2k3NFHgKeJRMUoQU1Nx2jpPgzceos9zJK1N5UxJ9H72Vv3wD9NkKQPQU1pmboyCn5GtFjcjoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rhannd5Nd81i1S1QQjnpLUfuVfacAe67zG3pxNUsgWPQ9MCJPgCCYnjvTNe7io1aTqZMnjW5hpFfUoNgtiyYNgw",
  "key1": "avE2kVCVyWuPJ86xC6tvEcPqMRMkQoLtvQQ4rGAsHvj15oNuggRNiUNdrhaZjrAXc8X9NjksKbE9Q5HrRW1r9zr",
  "key2": "3dZ6awWxeyvvQeQA21uWVn34JQ3WxhNrAZVLrrGZJxuJfBdoTNQ163gke18Ff4rZyoKh4B1MDPDvLGvr8PKCq51U",
  "key3": "2Pgdwfdc1Lae1kX3Jy4A62hmfQ27xP17MGazyu4J1yvfET7QaLKTxUnt3rQdCVe32Ro8vnLutntVp4fhWxh39mSN",
  "key4": "4BwXG2PHDktEM5uyViqXb1itxRx5fui99JXn3MCnxvAEVbdDfHBQhyhoVwJAFmzn9e1shMvzNo7Jwn3yyC2TTFc5",
  "key5": "3pcUpQsSYqseWg1VSJWNeCSUwa9RcXCqc9qKAGgsG17ZpVNEeUXcNZA7GH8AkAKRFJi1CPJwkbrBabYxCqDGhpzr",
  "key6": "5iJRNnrzq2BfVuiePd5oZ9jgbbRaxCibQ9bb91RgxBa6Le3sLr2ViVVzrNskSfFAE2p5hxfxmY2xHSen5Qs57nWc",
  "key7": "SUoueLGumewEDXH5dpRyXQLJf36SpLco84Sjx4iCKB5Cw4WtZnhgAsyjgG2cqZpUZPqwCFZmPkoCgo4gSj7npWJ",
  "key8": "3NmZVDkQ54hc6vY4oN1W4GoqZnWK3L4r9CN6cS7GfTCcavmdKRDMPPdMnCCd27MgntJY5tzrFomuo6eLVK8AEEXQ",
  "key9": "4rEQpjj3uDdVvawz4YW28fQpN5GCARk5awcy9FV6vDz5VhJ2wwJqwrDTudJc7TRjZYXi61PQfvXmShTqLde6oHZh",
  "key10": "5t6LRyx7h5Lrkbumq4wRFu1QqQZWcf72HYJ1vcLafkTQ7vgH5VAQtHrcz84et69kfGcbi6NM8ifr645vdDTNsmbf",
  "key11": "ftA3atYhoLJoVstokZUCs4AHVQ4CKKtq7GPKmg7ubidLhn7trq7RtBarv796VBxEv6BeeM6SuE13gfRJAEhydn8",
  "key12": "Pr7LoCwUzDeYrpXe82dd314ApJSKwEaxayjS9fua5BshazQnYfwPXKKWooHfjoaViH43eCBqx2J6jG1ybgh8PKE",
  "key13": "21A4EPJhnr51F5baMq5SzUx6K5QpcCwB1kWE5qffNQuAZbRCHtYrSSZ6VkAPxQS7L8tXm7SjyQ2kwSvWSrsUcZrV",
  "key14": "28sXCEdb1gFR3ApsDn2qkXLYHgtpFmSWGZthNVAdoVBxrckMnQuxvoGyTE5RfWFQEH3bserp9wWuw4mxFKoeo5jQ",
  "key15": "5mJA9Y27ZyRQCaW3AFjTAKGz9MEtZf9U7ppKLXaYKnteeoKScZiB44M1tMW9Gd3RQ1wmvv5KUcy65NzsHgxhS3nq",
  "key16": "3pAwhrqzUQek1zESRPaG9eYcyjxW2xKeYk1Tv6eVZMXBi3tmPPkdNdaNsPataR4ThhAcqqi4HKotMBQriQMMjsEa",
  "key17": "3GDuuTyw8d6DVrmzp2bSXLjqNwKmw3Mmcy9udPi3U9jiikNA9BAHG7AT6GNgU97uCYfy71DsTWxVBXCh9P8XFu4v",
  "key18": "41FwLnnzynYNjBj6qP9tkhdiR2VFh6fEAMRnhkqfyE9nkDuTaWAnke2SvNpS7hCEdwGmwoaVENoLpYrLGHpYqKvB",
  "key19": "4kYkpyS6HJ3Z3cJrgFo5ppe8cwbxvF4x32BLoX4VMovpMtfn4T8Y33EewmWp9hoAJCtU71PfwZqWJrkwKCBcXLCZ",
  "key20": "GLUpvhMty1otFcfFD2mDrrH1qc9WizsJKjodJB4sfEZTXBZz5bZMWohCZuqYhn3jL1SeswpCGuj1xvxU2sUGCWd",
  "key21": "5KJ4QoMnCnj3Nncp2AfAtEnBi3wyGoQjuwFm2MhVbZvM1vdQ2Dee7xQpTFTwsKHM3yhawKERKJZCxYYSQwLG6tBf",
  "key22": "8Wooyyj8M9c8H1aiD6dhXRKf9UmpxUgd6imAYqMVPqFky2uvKHUmeRKY664irceMVnCrSLZTKgsSxGCDSEN7ary",
  "key23": "37wdVnCUyaiVVaAB94qQdRmaFC9uWoR6S9u2hPRK1KCqDRP8aCkRu5vHU87t528SxWuF6wdXrPXGCz8ZyfDn6PBM",
  "key24": "mPsXxi5wHzJ3o5ezJBBRcfQPgDj83SoaMJR4iaoEAjJHCP1NTjFpV9UCyP3crcpeFmCQPQVe43qwbrruCpbtb1H",
  "key25": "2schKzmoVw2gYUQoZs83VmRxgYtSkcRsYBUKstcv5dKhy4fYwA3V9zTg2Khr73pudu11mxZPzjR9UYMAE7McYnRg",
  "key26": "3otrP8rgzhQfJJth4WCYCXRYDnva79LMKBJkANqwkrzkUwpKr41z2DN53VRgfL8eC28KkdUJbgJ2Ph1txLaFg7gX",
  "key27": "4TviNxruEmDs7xRp8yZLurQiTDyP3tUF7DqDfgFuDvskSjLq47MLtNYKZE3PMz4sQZEZTYwaj6U3X8hcXAoYmEQC",
  "key28": "3zkX77oFSpnKmSBvB7MSXFWpRZcAektqvLRZhWfCHPbkKWsirP8N9hhnNQoyDxiSFM6uY4D6YepTT9TfC6Ew6MRG",
  "key29": "3biXdyeuq2v77CSeDpPvrVViak4Ye9EBs6aG8w9dWoZX4QGjmNdPgvyeC6QZEL6PBka4XnivDsFaSHjGGfPRcuaJ",
  "key30": "5SSQV93tk2uRVBdr6tNSdW4PsGcFLngp7C4NHkWGsymCoPLAPuz6KrDGtkHWbJX5dNHHPwvCmuPLgnTtMyeCyCFW",
  "key31": "3pqUd43DT967wc4uYYyLhZmw1d6CNbwgq1JEdZvZMxgRSJ4g5Uu2nrBzcbJtUozsMXzmcnPbAw91vnggKRYKs6hw",
  "key32": "35mX9qmbF6yzefABKL8yFTSA4T1ahbFKirn4SoNAXQRjaeD8fEpUrzbL5VAWkkMp77Pn2mokZcZENy7dUzknLwMN",
  "key33": "449zw5LD2td9keeew9q4j1kiVHXQ7K74TTnW8b56ERnQ89fsGAUShyKrdsLYjJR5D1NPkHwtfyKqztYxxYHRi7So"
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
