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
    "qnqLeZd8HNLPhpJYMYCUuQC5aAYK6NGr2Uyw27Hp6qbfYrWSLXiNMq97LpyTWs349qgbksB53hffzCP2hsCaYFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eeQ5hBZa1VtX9m6321zVe7SZqCXPsdcTcYkz8kebeHZsQ283tdwbkYR7FpadnF4chtKH6rnhMgYd2oG2VzA48L2",
  "key1": "2hMh7RoqPotHR8XD6LUdzEa6ZwTq86LXSRe2mDXkrVxE7i2DaV1Qdp3No26ozXwXJ8CtKeb7gw7oBars5CpatA7s",
  "key2": "5D3H3zLwg3btgdWQPYxZMRiiUXW5UhfVKnv1bWjgLFh3YpqyqZ4Vvw99hKYxDHkPm99AMjN76q3Gx5swK9VW9PbS",
  "key3": "s4VZQn1pnaGfX1nBV5rGJtgbUXunBMcqdKDr5msBQ4Kxnq4sYE6WDbDB2KRzdneRnWcaVTkFSrVc4NfcKkknkxE",
  "key4": "5ysp5aDe9cCNfwRpDvZ7WkY6SuS2TYo3ViNHuArW3m43Pp4WMwn2tfjVUi3GJN7obxvbgyZQj3dYeCKvz4Gj24gG",
  "key5": "5sPKu6iZriXC5m2qHKyZXxdNL5HbLDVqum1d1cyAdUPuv3qxhdGCModA8C3DxvEX4JTmovqVzpDuFm1EYDG3v3xh",
  "key6": "HGRPhapba5Amns6ssFnfYvQsjnjKtb1PGac6E8feL7qmi6VpVwpnx6LpwLnSJN9ApRmguNA8xYsW1uVDPd6hpkR",
  "key7": "4y2KSb1Jtnze7y3VV2HTNFYGMPK3i9F6FhHKHNVFhoZFRGY92uUXrgVaQEG24Zm3doK6wqVg79FQQxWnB7icsKyz",
  "key8": "sqWvdwnp8bK3UqX3MmFovVv7dPMfz2Bm9ERruTNsm3fyUQu4dghhZFNbaXpmxW3teXEumweSebRbyCYngaB6Z2g",
  "key9": "5LpN5BZfNL7iDpPmW7Mv2UNmYbMHEiQRPBfVfwwb3bzS4VecTQJpmxzHyrcKGFUJdfYijbLsWncNLCVFS9be3F1n",
  "key10": "E91ay9E28jCbnDRThEetoGQM7PBZHKP87dkfKHHE32dX6erF9LoU69CoPJXYMSckUVMLs1v7pVU3LrKALMtjKDy",
  "key11": "2MNrioTBGUVLdFCY1MUhE4emBLN81Z8nJr1kLrA7xivQqidB9nozgTKG6WMGBSUZaz1TZroG94mAjuLaP3bujrjj",
  "key12": "5d1cL7P2TaywZxRgJUR3AXV7zeb6Ho32eAQSUKvcAX7Drqgw2HrU7EkxyENEAWaeanYjCRpkvzjCUyxQrgUw3KNj",
  "key13": "5NqVs52sN1Cjomhbc7J5ct8VYBJcUAS7Pjep6FZbLjgwGiXc7ixdYRv2Y95vcfrNegYhJTWX9fZnRbZEyQ5YDCwF",
  "key14": "2UXc23JUChrsGPzSuoAd5Uvhag1W59ioW4Tb1uPEWKKyL1YkGhvBEjNFEaQFzn22hSdLm7QZyivGSaY6iusdrXnv",
  "key15": "5JKtdZihSqYNtSRSB3AvSD9df79X6erzHEvpkZhN97YSPLiYpd6UvACq3ExJtJ9RLW7r7rCT8144UbymEWQvcZsS",
  "key16": "41L5Gj1MB9YNdKFBVSb9CR9fSCjupBEEmR82ct1jCMYf69QsnsucGjUGDuWactGwCczxYNaeGEGcc7ffhrfMjYi8",
  "key17": "2dHWHip9bdbtP5L1yy8axmdZCTeVXueTtuY1uhU1iPLfXU47ucYhrTQUuSLV9Kro7esEgshkCWQAWTL6mNopEFjk",
  "key18": "2FtXMNuJ7fdX3ehJzMdnpTiXx6cA7wQWwEUbRxN2F1hqY39f35iqxvB4AAagsTheC4xjpCf9EPLSiCQCxHiLAeLb",
  "key19": "2xBLXqXLAg3DWgE2EXmhGX8KkW21JzXHQAMTacysPEA2n4wBEoqTRfCGqivYKW1uCkFFHyPKLEYacW1xMB6DEA1x",
  "key20": "YqaiVngRs6Ey2oaNP5aWagwwPY5smzGTKm3C7AbuN5ghLiUdnmfgbTGGaKsZKVGx3Cr2WNg3Q9apqzrU1TZSF9x",
  "key21": "5ufwCLSbzcmGmuKY1odm4EePRFtbhqN16eLscCGufnoCV6rh2Xe3rNxvtNeNQPAkknS6QaBNrwodcB6SGXtdgMya",
  "key22": "2jSwAmAuFph9GH9fVNuU32n23uf6GPkuFPJUtEbY8A4ngtHsBud3FH4u81BAkvJSPGLvfwS9TUJkfXNNib1o4g7o",
  "key23": "537MWCmmiW9M6yFyjUFTHS4kkuyx8JxmEdBT3gRxEutQoW8UgKJ4CoSPK6cD57n8i8og9BYrR8vTD3oc6Vi3TcLZ",
  "key24": "3TYMKF15nHCcCaNvWGTTNXm9j2eYLmF9pBzubCe6n8F3RyxS7RFgYu1tJmqrdGU4Qk8HSwcaH4Ho3qHacjMZRcY",
  "key25": "2Fsb6PC7nj14oXL3LxV65ytMc7oYk9iUEaZym3dcN8DCT8wf5o3eGj434kcsRm3jt23i4rRV2jnvTe1pXnvof5kE",
  "key26": "L8RqeeCJkoV9mLFmGWjFdgQGALVEJWPQC791MnFuop28NtkNDFjhBAvHbvhLHPL37bP7gdkHxKwA6xCCi3wegAB",
  "key27": "3TxGzVEjti9Cm39vYV3Ee8v1HnK8qx9j7gVCH4S7kq9KCykX4BbEzBfmcV9qXVjUPDHTupecUK1u6Y6FpBoPFS4n",
  "key28": "45fqT9JQ4r4Co77KUoWE6pscaYZ8QcqxfGybWWSdiLMKXz6Ly82fr3rykDBqho67JMC9VKBSUyecLwp7t4SDK2T4",
  "key29": "2U9UjRaWXF5qpSgvc8VFy8bM4vi3XxKtVZ2qnPcjzLqZcH1txWR5yBgZSjg2vFPNSsAr7bAGoJgD8poMNw5FLqQa",
  "key30": "4AtgUfmtLh1VbqcgszS7nD2bBc6TJypxKsnohqrPL4i7cX53xoMaJZM9Z2TkPWVsw4K1dvchmrYX1ELxcPQ5gZEF",
  "key31": "f8TjRiP5My8Mn9nxy5o3376maprCRewFGXzgNsvpWZuGUyFuQ9aPVNNv3EQ7AL88so6vVUC5unC4oCU5UdDnMhz",
  "key32": "5kTbudnEs1KKghevpTe6mGuGLsRW42GeeXmgeLJyv9SXFf8yxpToQuw92xVZUCKGofuLQ9ebLQG7PqFJ14z6MXkf",
  "key33": "51gYAdXQsEhPNzoBPKbuijkw4ebTzgRggGHpdK77eQiQSYv6j5GhGubKrpm41gUAEWfTWcuiXt3V33ZbtrHpohYJ",
  "key34": "LzmBfNWe5Kdqksq6ZrjhzFwXKX8YmQrpC7wg3Y6a8RDTP8AsVAUVkdoJRbVUtejquuvy4zCEYr5Q2V7UDvy7BxG",
  "key35": "39QHXM7Y7sFD6MHB7YcyBtK3DFpjZhZUNzAa9XkX4sfPoBX9P628ZLLTq1Ka8UobMD8gExtnne3dxt5hnu8xCbga",
  "key36": "FAY9WYF1bFSw63pzSN4rbahvenWca2Au7P3dZ43PJh4A2rVjDdpb3AgoBcXe7nfy8f2J7CMbQGFinRF3XTfSJtS",
  "key37": "3gn5c7w3XRx1FHw8eitAd4HvCxTCLktKdsdjouFq68i4JGQcva1KPBjs1NoBJkvhDV64xKkJdHKnkwxuwL4pZv7x",
  "key38": "jSQGh3Wf9yt7BAo6wT9Z6fj2UoQPVPXUaYJUujrf5okV4BPJrdbvwGftethW3XATr11Z8XG4ybiu7u5Vbt7veaU",
  "key39": "tYmsHwCPMt6eiB1owYW69H7jVJxGr1cESoDZGSSBQoagfgAVcPvy4juFz4crjz9BRYF3icUN8RxSxUh66dxTQeT",
  "key40": "4nocbYUo4He1tE21KXxFRdT6wvuXVwf9VfLcQ2FZByfgPqDUr8WRE6oPdPhfPU43FykVSXHgPMYnC6bKRxND7G1v"
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
