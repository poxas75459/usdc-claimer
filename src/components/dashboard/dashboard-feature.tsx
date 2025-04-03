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
    "2tVhwWp3rnXKzg7M25EFuJaE9s8Mm7N4jLCfHChwJb85iRD5DoFQKnExqVYgSJWXRyF6R7Mc6DkcKzo5WJRMYehi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j53Xv2QiEUH4xh5nVQ2ZEqyteYwdK5bBNG2RaSQGFjzAuWVjuGMsCRMj9ciLmoDpyjXHZNJgQvBfsQ9UKNsgtei",
  "key1": "5Dw8GGtfahzxXrEGejYoDAKSpPoZVyWm7zrT8hEzkaXPhE8D2JLsVJ7cBrns7XLZnqpfqhK6651fjz3DgtqLTre7",
  "key2": "351NTrtL9pxDCn1P7JayxpU9zKoLFoJFiayxnQz9cZd6LjUKCyZb8XoNiXQ6JAzkuThypcRb4VLuSrJaHCEGEdPx",
  "key3": "2Wb96wi5rcqgqVxdJUh3CRnJ6pCrQSuJbnNMum4oZHhVjWob3a6A13JK5bGUFstQ5YrgVLVNVKZJqp2NVFQtyt4g",
  "key4": "3ehfjMj8sNMF1LpSdp2niZxKzMwWhaRQ3WBuob8A6mCd453ovB7Bm3ce42Y73BiNWeSkEiWbjeesd14ugZFz4EtG",
  "key5": "4die8qpKf55eWAagGVfwRxgQThfcJ2sQPn2kiA8RaS6qJXen2RZuwiThujEdWGUk4PfygS8TYgZDrnSsgy1pkq8J",
  "key6": "rAmtyC3q8iTAfgfWu7ZUKhMkNK8jjhmof2aTQFPvjs2ACjp66a985q5AV2CFqK66Es3PdGrvQw4r1wZGizCdh1n",
  "key7": "3GRVtvYbAn9uiRup2HPGJKkbCVWfvA9jidXEEbAfTEePLQVMhVZBQnuiLa6ddjRVWpRLbs2AfKbmyzaYFtdjRnFv",
  "key8": "2YB5H7BJjyNp4S5VRMudFW7edextdNREPbx1upS8BwKAjfqvB8RvwgEDuoC7gwHtJJ3VDo64xHrWsvBN1WaNXpVE",
  "key9": "5nCmrSPVwpoVXcHATX13d6Uu345UYQncp5rwr6hWCbguZVR5fhVnruaXu8c6EVSMd338EMZXWeRNAY4oCJ2BqSPV",
  "key10": "7Vfx7UUZuze8aSuVEcyfqG5uvHy79gNogiSe7cez6dzPAYdi9rZE4Z5btuEURYBhjkuwL64qUgepFyRFrpGaKCe",
  "key11": "2jw5L1nzcKiLuc3uXmwq3yYsQJsQqAG5RT4yw6SaKuGFgMYUKE4SSjBZJiTKTBgBzMBApgDXYqH4cBPopoxhKRLH",
  "key12": "2X7kLYQcKKUUwyd6pg8GaWVPoyuDf9AwAorGu82Van9rcJdqVxwx7cEhapiBj2SXEdxoREmWntC45jWWigEbwet5",
  "key13": "9JdomfuhmAAT99evdR26UTMkY15G78ZPmDHgEyj9WTCLXW1RoVcxK8oPvWXmZB6a6vSHwAdF8h5nFkm6mfmZdqh",
  "key14": "4yza3eeQEz43BXDJ1gUR8d7i9sDvCMa7zAhBqsdsbb6gYaoZ28osf6vR8KfQxxpbmmQ44Xq8o8WVpTmkiBfNCCXx",
  "key15": "mi6Stw1GQGriTA1hMszW8x8qEbcLc7DxeRnGPrfufd9d2GZDsWPVmcxVZkYM8fVmmjpMjWiRfYEucQk9Mzu9Cem",
  "key16": "3KzpqBi9MhfLDkUrgQCzu6mN2faHsXMTb6hQK4icsw1qgiJRLz7rA15xsSCbFpgXgat4FoQoFqFeWx2GiYEgjRrn",
  "key17": "HxkBBwat1oSpMPAAn5uLzEYv5P2G9kYTiz6RBzGs6DLBdjzdv3JTCd1pQrhvfFh7MbXiBYN3YodHQDW1ri3A9gg",
  "key18": "3jLF8R85RkB6Su9ZxKx19kHG4syoDh7bMkCu2YcuDiCjty3R4wb2tqqWmV6WUBZmeC375kfRLusvxWSWjgz8Hzag",
  "key19": "3W82oheiYezcvXt1FQB2bAWC979apEqbYFjQTaUtqdW6nHg4AFhtAgfxxb2vHbvnGMs2eCpJ9WpsWMJNSEwJVCKZ",
  "key20": "4rva58CG9aNUg1TDHTJioA12NXRVBwNeC2SYTGmmuYiZ8WRbis8KE8EvmVQkZRD7wjiNdV8abBH9kAbdEDvPivbD",
  "key21": "4vfjPM5DT6VZWxvnyJwfHTGBLgSXC5coGxC86gVJsYjUAteLyXMpT42UkDeFXocurAh1VsuUpTHLSrZiqA7Bv7Xb",
  "key22": "5oyKXpedgGHZimzvwyAgBA4fEtFq2drFn1hE3AZt5nXYbpBfnTciWF47eQp3JKa2MjwkUq8xzhv2wEBWFhCeAxpz",
  "key23": "FYp5jpWxKVNMHgVNrFyc4P4JQnfwq3R4vKR1jJZ81tSzSrCzGkaq53Qy5CqoMvDMMyyMKy7ypvYhKWrxtr561qF",
  "key24": "2fpBU6agXczwTgaVtQrjL9ANLWgWG4YiCL188S4qof95LGXH8gy9cGCWmcM6Y8HsfwQmEiKzsF29caBEp6SCTb6N",
  "key25": "3uMe8ggqBcA7jF31119GHYVFZ34P9iH7Go1bK97h5uYmTJY9h2kpZVfnnq1cjTReqY15VFgwZipcTJEdsHoYdCt3",
  "key26": "48GC21wXyD6GDm62kMSTYwQdMqi8hcmM5hCJfwNg3uDvGyBVGhSEUKd9cVsN1yosvMNJwhZ8rysWa9ovBzhPrddR",
  "key27": "2ZFkxKAhDPWBwdgwB3fywzUrWL195GYmxhavFGcA6KDuXyY747g9JcrVicmNzwWatsoVvcgsawxNgL1VbthKFcyv",
  "key28": "4Rg42LWQgXToTHK7JMwCDACncvdCeSt28eXnxQsnnTdK5n4EqADkZj6XydEt7DxrCSnjQeEszDYBBNk71g4zSnFB"
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
