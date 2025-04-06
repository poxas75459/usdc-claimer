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
    "xf1hRjqA8RfMyak7Znj5dmE3X3AgKSLzwP1U3kyLSgGoZg5kZM1aJegYVEacpPnppwNYVYggGWYG2uFE3i7oXXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22YeJgLjDuuu9bjsdXJwQhjDPP35eLx8aNiWKUhzZMWKCujN4Agd4q8XYr6EDAbn9suFubwNbzU5Eb4nZSJWRuyb",
  "key1": "5FT46rf27yhNNLQnwCJq5p1YA8vnHCPb6ucN7m4UvDF9rSeCWusgeDe7kbto4CkSnWzcJ8NqWz1QLMMLaGiZyVm8",
  "key2": "5xRhG1N7iz6h2KVJ8ZHpaNXRjVegdK3X788MrmbRwAWVx9XSYwy5JaWs24jTfDEHw3u8fY25PTGnbHYk5iD4nxkh",
  "key3": "ZVtsSmmR2nCiecqPSxPkByqGa9kq4QPPm9mXYw44j2JfP4soioL6UHFUVpsaN4cHzgiuCoTB7D5ofoEVSB1ejfs",
  "key4": "5os5ZSwtTE1S4XPDXD2dvpUU2b9N2XPgqetXox6ecWguHfKtnqXqc2K7DV4FhL39QiYzNc9zMuRnK43atrD8WcTv",
  "key5": "5bGaP5ZxPYFnqAE9hkWuFKQqpAqxWsHgCfnQgvBF5guryTbVWyDRh2eNZy8A3x5q26eRWUYghEb9yw9FTG1uFxgx",
  "key6": "2Z6DnAvkJ5jVTpu4ig8cw4ThHi4fuTnzfoi3MGbipeCSeMknFnabF3QsugPRaCXYZaPZiHbcj9orkaCGA6MhQL67",
  "key7": "2hSxGx3aRwkgMBTBjXmMgYg5moRoz2qp8HiLfKPFXR9bvCtiGehN2KtbrEZWm9Cvr3eQmuf1MMUBtnGnJ61cfTUD",
  "key8": "4SYZjCB73thikcc8ssZB2diuMiA4CK8YA4S3mDMApLxvh4Rek7J88WvADsEpiiS7beGgAvFm2qkJ5gJNYYpL8V9U",
  "key9": "2ZsZGqipoGUz1ft7BmcpuYBazgS4iztJYiBeJFxrb82tVNxU8TSAMUcEVErPWrvBHpbrLZNTQ6afZnjgKgTQoiiw",
  "key10": "5HqpnnNQuH9LcsbE85XVDVA6Fh3sVHE6vsdXdyE4GjW8YUAUihJDentksJeWjCf8dZu4ytw1PVU59pkHpxP1QYFm",
  "key11": "1GLGvAgX1z2F6L2pAJCBgNb8aamcKETr2P1gSam4sVezmi5ss3R6aZZeGvECrvb3jKnYnB5P59XYUf8s5f47Qnb",
  "key12": "44KgKiS6A1rDKNfu4oBw9V4Whm5sUUMW8dXCrvYagUciLM3DGE8JrdQByZezmYAnXvNd1TXbef9KFSPq3RPkokbz",
  "key13": "2GAR95qq7hNoCq5y5PxTnaWcitMvKy4qZ86k8V5C6W73MdK8n8dmGAUh63bngGDfzCiynTbox3b8kgXkE4k9y7jg",
  "key14": "5Hz4YGvWZkVVTac6MR6vny8rnDWhMcGUGMkDXVtYJxBpD72FzoHQP5a2TX57rcMnToC8k3aAKU3DGDG7dWh3VDyR",
  "key15": "2ET2pXGhnLsv9oX1Z16Ut6Wisg5fr4RTLbzS15r5py4pPcDpAbRqQsrqVZ7YpDPs6aZSQpH1UKnYajbiUHJcgLwh",
  "key16": "2KEveptGLJx2exRqz3jX1muMAqjXPAif3VfDiy54YHxXuAUYuMRrkPfPZ4CjF4VAK3c2i4cJQqB3tpucxrYgBpna",
  "key17": "3sCaVituCx6GSswzDVYraS9uDHZX3QpZV1a84oh99qzWR79NFNyNE21XcFuyrQtdbsc7hnT5WtVdBo5mxksZiN4T",
  "key18": "3uxaehkBmqZceyEuBd3pBnbhLTgF9pVQPgz2Ai7BWWuvcAnsuD2Y1RK99ceNTgQZ5fVEohd9UWtGh5cmDgMNjq9o",
  "key19": "5NLNP6R7mni7QDVXqTcUyEiGFsDYixw2sFyPzGPEigfN97SPrWJbyXiC7yEaT9LegHera4deTQq1kc6tN1bxhk3K",
  "key20": "3TWRUQELS5ADt8pKUUuKNzt6hL8DxKWZQG2mX2eBjuH4YUF1cFW1C8zVNkeZYYXj6AKewfanAviCXVceRaB13ji3",
  "key21": "5Ydcc76scgzwX6fADWdGZtmnWdppSiCe9oVmA814j1ZNAYz39bhqEbFcDTotkVng2whmKC3j79eyv6pFpkyimLvC",
  "key22": "6UBxWpTXRNzRCWVLG5NT6JRaWveBEwXSBhkf12s2Zf9Mw9hK59622z9GzQ1xGBAtmN8T9V6N1ouzhydPJsfytqk",
  "key23": "5uSoZN2VmJMpefcbyUjTdBVXSXE2DgaYPAsasxeP4fcXLTuQqMPnFEDtNfGLXK27AnTBrxkNULQY1uqTZMfd9mYZ",
  "key24": "5XwjxGJESfNzz79KF2VrbnkoJhCnkBoCvamSjQo8Uyb3jMvcy8fzy8WMsR56XKwSFPbrPxRnVxX8DTKX4fa66nyF",
  "key25": "51DyTAtMJLybMrVsVBqJShZnm3jhT4dmSYR7Lhs4jG5Qp7kbLk6CikKiaP37S8nk7cf4LMJpouc8EEud5LwoRMwg",
  "key26": "5jvwsRqw5yBYuVtBjUVYJM4dw4oiErZKfTBputgM9wPaZUyTHhuNZcfjfZ3zvCtm2NbNuGsEwCL46UQPKk4KaUUg",
  "key27": "5ECRyaFGDDqFbFvMPbuiuD3NfgK51eqiV6tLwgWtKHQmxrYfWyxWP1DCNWaAaYS65tpzXASrR9gzTHsuUVhzYWF9",
  "key28": "552Qvhp7aJL4uEgpuwK25DTUPWY8oKSe8ftnm7vPFJop5NZPfgezXvSGFKdJao9Puh1fviDMicCMUoPVVCgqD8Mc",
  "key29": "2BwHfEn1u4jjd1813WFeUfGjYiG6tfwUPfN5ukD3Vd3wKfwntYBDGvKXFpvufxNuiPbZRRfsN9EpKPxcLsv1qGBC",
  "key30": "4naURvVDJibHazyTMCzwinZnfLjX5mXtaRfwQAyPV4mLkRRXJQytfzX3p1uu3uZrxt1DfgUAsxCiqiWUJLGPmzvg",
  "key31": "2M51TCBD546SUNegziVLF8s5CsPJvugAPBKTqqKFWsKyVr7oL8NZ9KqUdfWgDPmoU9qB1TRVDYRLmK1Y2hdjkjLb",
  "key32": "4v9gLaBBoqvG4Got3oiNssfhDGpWKbvmp32URwfv45ScTVYdqPGvddLMXnpCjG9DGX6wsPdagCcvKmi1h5AtJnyA",
  "key33": "2A5i3T29zrsXasUPyKW2EPEnDWt2XYxYvyCxMppQmDoRJrtiLgGR53VNa7ViTUJHiNiuyvZhwL4TZ4cHdonMLFmv",
  "key34": "5W6SEHnqLf5HEv87psnbJRoWkD7ipQ6inUkErYDH16XMjTmXF4PR7vevpP4MK3sdaH6BsJDGzat8YqDukgGH3DHy",
  "key35": "593fA9UZMJQvuvwP5axMnEvnCREEZfxBocT73TYUN5auWYLRJfT8NUg8za5qp8MxB4N7F7sMdL5sMkNamTeK1o2j",
  "key36": "3jHL7MGDRSdKNK1rQsiREAPnUswarVNoMkX8K37xQZNxPEwKqVh9s87Lku4me8gFeCZJ8SEjW4z8Ax1vSHZ222ZD",
  "key37": "4MauuBs2oLF4jKwFcoF4xuWKj6akCG3L7BqNEtCZpuDvVLAEAAJooy3UP54LqfCGHz3g3gskXwhwYbF7T2LNRgEy"
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
