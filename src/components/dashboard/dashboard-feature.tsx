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
    "3icXQc8ChcTJPpARpnsjjUYsByYMKC8vdF1Z4tRGgjJxNiKarso1BYWM6ukaKvR9a3qNZVdRiPTfGK1xr7VhQFea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CHHAyses9DfS1fArrNPvRZ5MJ4gcfFcogLDF5uhXjL7YZwso8bUjtBdpt7DUUQ8V2dUdyBP8qaG1L23c1fWhktG",
  "key1": "21v5nbfCQxy88YEKwyrXmDWJZ2ys5gWB3LfXQdXYkuJJSTNKdjtqKXnb9WJmcJv2RSD26m1VveuPzrz4FqQ5PCwr",
  "key2": "4WpwF4HGbK8ReXtNuQuV1gqaXBjU7uqoHEAG23PPapPrHiRaH9mKk3HFFCxwSGFSbwhgtvtBaHN72brBKgJSmhrF",
  "key3": "3D9h3ohY5AS95jL8nzTp2KpmZinQPaQwWmvM7BbNmYgdiwSD7Dssnke1wsoCGsYbaX9Urb5kFdRxNpo3A7P89RZR",
  "key4": "2HewKMRQCLBXWXfiGtPy58SeUXcbMhMp1JeVnWzrubtNkrVw1CyBCNkRzNL2XYVyHMaPtn9Q4FVowZAtnrRzaStt",
  "key5": "3cKcp1qDVFWFy362XCFKLLxpZ3muKHREMER5PcsbEVxMFHpiY8bqfz4UsykasaAPrVSDhnW6cJGf8eVhsmb4Knb7",
  "key6": "33AJj76HbGwHaeLFaH9zpJbx7zMJAHf3WN8tDKQHrkLuffuG5vM8kg8oJU1dAt6eRTC23Hpd8QstTahKCCkWtrXy",
  "key7": "4dwKBQcTwKam7bnRbbhX2vSn9aqW7AUGfGsyq8uJjxZyFMu1o8RdxxNqxsfEpxtCGnYpXN6PCQTMZL9ytqxx8cJ3",
  "key8": "u3MGM4TDPKVTfCnsGPvDZ81LYxLCZ5nxStqwDXEZ5zvbRnfrjgXa19jdeavhjeHQYbGitJMu3RzX1oVbRuKiMwK",
  "key9": "3KU8usuRYAbZLE1ehwRbDxT6nfEnARYpHLMF3DJMvNXh6gyvxq7pwnDV3bwN4KCTkzWYwxgLwMv6n4dStfKM6Bfu",
  "key10": "33dg4wMd1ZyVQjhaXFJLonWjDMRVqacdRso3S66MAY9bo4PJiNGWofBdmYJ65A3SCt7uzNUxdomrYd2t5qcdy4dC",
  "key11": "5UnwELio2bQJhafePmX6tERLQyAVZ2ZQtnprBJJxac32qNGpyS1sKQ3XTBGuuGBiQyeDVAgzrfpiD8KHb7NU5Zpg",
  "key12": "4GzHFnsTi6eVn8DcwQLWp4PCm7w7PhfdBkfvqu1R69X142Eiv3cPtZT2ZjivfUtHZeHr9b5hsfv3EBNLw6kAgR3a",
  "key13": "pWmPykVBz7Huig8GUUfc9KUuumW94qwVjozgtp2BLjF1oGwpkBepa5JqUfc4pdEtRWFaHWTnvSAkPrnyVyXAVrU",
  "key14": "gbSB2xywQrtLd88JkTj1TVLLgXAeY6Pkxm5ZAWgdaRZcTVjHDmsGCDLe77ievMAuSyorqv4uytNzNkhxLo1SfPB",
  "key15": "2onpeTDWsdeAhbhCqeofjPXrUM4KGBnXy4SsVy3zSk8YTsv3jR4c7S4rrfwGcaKnhtA9iaXeE8nQrwWNbEAkqwyd",
  "key16": "5raGsbCVDkgWBpMeGzXF6rdGjUtrRFf4aXuxcVWquo6TUYXspjPYYjFT2Xsm6tY63hatu8YF8tpX1BFA5zoiPyfW",
  "key17": "hWNnQ22MpSTLxbjqAJRYxBTR4FGWHx5TEhQK7bu9gx3ML3i1ynQzS8AFXBcCUGuLKoT5qE7MSGoAA2V4uSJctnb",
  "key18": "3eAoAztTQCDXkpfJRg5ZnpmbQXmosGzRo914BTxHekwVS9TkLzr6mcjV6n1szHhYrAgEskqqs16Kt8PtCZoYorTZ",
  "key19": "3QmHGVK6XVaHE2bwo3PGSruLSMkTV2JZs3NfFfM8E7mRgaoL5Me8dDgwc59tWowPhtb7xpqdACLcPBPcknMthhee",
  "key20": "mapti6djYNKs4i3sLAij9iu32en9WyeXac4qbw5ntrYY8gYuJKD3mpZuNjhe14mLsy3bHo77wQe7EpaQXsso5BE",
  "key21": "zxmqXYDa3g6gori19brdUecxDzof9gb8yay7uywBQ5VJKFVg6do6H4huZofscWtUEoKq3gG4JjTCsNJ25prXx3A",
  "key22": "4Pavk96JaGVYwHem9rfBbexm5VmZu7E9TnRGwYKxzWAR9C5yz7Dn2NxuxSfCjno9wNLWPuHDs65Ft99DXyfaKMuU",
  "key23": "4nA9UJdRAmJu53VywiVj8s8YtoPbokbXos8aSLZUMHV249uXPQSpg4ncnHmPpBJzg9tgEwvAPjfyXBr616cW1Sir",
  "key24": "Y1JiK7PxYhEEAjJTU1RVisfknxFbeD5g5B3Sw5bTBHn8Y14rnTcQoWWg3DpH3NPbRadSjietPomVQLYNGXA8P8t"
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
