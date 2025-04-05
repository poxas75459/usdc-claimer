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
    "5wPcAcSshvv62HEaM3UaqySw2X5r8WteM7151G1zAEnY4ayYzpTwAXU8ZxKWskN3jQMLChvSR2GgWvj8YNipLQK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nLSs5yHNXaKCFXPTm4Cbkhuz6pmnw2yVvxWwamWz6kxMDsR6iXGfkfSNWdjEq9LZkKgZkJJ93coR56DgLTc2vYn",
  "key1": "sMUft7qNzC3YdRxBkyxboQPCrkR7bFzW47vuLpwEt6K5Diqo7yx4BXmzsBoVVGQh6Q2MrCqs2xCJDyHUFwg5mqn",
  "key2": "5QBXWhHFsvihh2XqFhtwvt18g2gmAGvkiqX5RbEWLUeaCvweeVWmXpnxp35wWEg7zCNaWLr1zJv4SAPhzPx257Gm",
  "key3": "4rQKyb1ZJUxTKAS8KacdNno2n57SZjvjvqSqMSN3tjvoT1e6sUkpqrXCABUt7CUD2woXqRucXvzoZZ3de6jaMSSQ",
  "key4": "3Nhjfu6Hw2Lekiri4EJyMmNqnsh3M94r1CAM2Zjq3LcgUAmWon7FbGbv2u5jA8UaWRFTBs4JuhiTnfyWFJS1LXW5",
  "key5": "3mZvJ1JUTjCyVu9hhVnp2g5H5NcreXWGt5QYA6af9GWkjkDFEJLenGKs6BX7P39Bsx9gpGCivQg5n45sRLAtrBbs",
  "key6": "64kNiptAMqz45PvGCHcLXv5nZsPisHNiK84yeZQCM293QNT7cTEaFYHhMwaAjD8SnjdE4CV2mjZwYbpKPvmzHXQ6",
  "key7": "4DNrDpXxwjxHoFRQtMaTGNzkDrQrqsAoVZa8rxJaPBj9eiTZQaeCdnULyCrUfUymV6eAbUYLregXEW8dEbm1Hngk",
  "key8": "2B1b2V8pdkjSzWm8HKMXQPfHvGNoUUS6tPN2XLNzPKFvVkUv3aGbUHKMvxmBFCobf3Bw49rXDsofRowBSErP1DjE",
  "key9": "366DdLyjwqLS6BczFRAgvuZxw5r2ii2NcAxSRHrQhuBqYzbW39UyDhuYHVuaR6Dm319gjrsdUq5y4Dgo23Hxsd8z",
  "key10": "4ypGwU4VwATxUoWNuzg1dxdeS23FUnhEQVTVtk2BSiGAcJqWuH4Nf1xurCWbB2gzDAFJAm9vc9MbBeCgkkwwJZ8P",
  "key11": "22iP8xkSbnATzTrNMNk3wjYMmV7aJw1WKXKEttkmRqunV6TAgUR8R29MbU49xHLAJJsRGzVuoGtrerAt5uRcYsJj",
  "key12": "3NkY98jHFgYHD4yRmoJ9q9gBJBAPuGjUyha2VEZBmSG45VX1kgeBpdDGGqoakKbm7WN4qpqMRbZMVAktk3BwM2Uv",
  "key13": "2G9eQwLa8P2zo7172uDjExuNFAK5vrUKkL5rM4uxrJyHiz6nQ4kzbCuP4WZWz4CS2oScPdD6NSSi3bUTUUeSwnZc",
  "key14": "339zWdcEs1ZP5PcLfQjqRY6itdWjEGKgPbJC87eAQR4H3MHkT3kwzRsMjYtPJeDFhgaxKRLCnCywrwSsGFNZLAsF",
  "key15": "2FiMLdMEd69UzzHtt7FXQXU8QCbyXsQ11kJQKbEpZGzJgRdp5ZbvzRUddLdacjEKH2gfqNXpXAFu5E1BJRYioW43",
  "key16": "4gmgA3xR9aaU2YZFTyZyCEK1VqPCDVz2DEo7dVFZv24E2VMdEQQcbQzDqAWyeWY13NJAUs85VUVnTDqiwCxBq1rE",
  "key17": "25nEpfbPk9UXFooUTiF2NtwLxxDpih7RNacfZT6Go6xC5w1rYbfp88bWHkn32Fon9QcL1zoH7Xs6DwG7YJopA2Ng",
  "key18": "5wgjPsfM1arYRSSLNUJP6fS6E2gX94rguHxRn3MLYRhQ4T5T3iJqzFsn24dX9KLtzLKdXASzcUpELpvHZf37BZ2C",
  "key19": "2ecqpdqvAAeJkht5qqfn1aXgB3G5DAkujH5YA4nX24jMsVMu2rvvZurTDuHFTYUxfwWcbK56QcoxhWeMyLXXCjML",
  "key20": "4Xue1LieJRwuo81ubXVf93mpt2UdosnCxBwb4bvQB6cDxhced4LD3uPNHbH6DcjaWHh1nodYEQsvisRyJ6YV97Kr",
  "key21": "4sdEs7Z8FJqRraURrYCgnXzXwtFmmCoQc6yrzdxr8goQQzfWTDvTeZVFqHoiaWQA23oxLfmX3NP3bQ6VJv7p9pM9",
  "key22": "5vhV1QDxMvc6YXMhFJcktDwau5WatfZzSN5KpBrU96uKCQisovFxoAVUUK9RX7c7RSgBFZJdM1u41E9vNZdbLNke",
  "key23": "4xb5NQkN28NQRRhhEiPDznmzHTjKrswzfhgK7d4VxrgwpmR3uZf5vZU4bvuYNw82YGX2BqKM3rVDxHnmKJ28nvB6",
  "key24": "5FMbuBHz2ACevQF73KeXLeCvzi4MaTj8uMfAy46GMyaYtcn2oyHE1NmGE4dG91mYhSpjgihEh3KgDsQ8WGCR5XFu",
  "key25": "53zZBQGk7hXgTcaSGifKDFXJCEFSxW59FsuDjxAEXpMMYXcxaq4RqtFrdPNWhMFHrmH78sdmfhWuvRhw3bvVnDBK",
  "key26": "59WWgJGT8FDSEzy4cqaRGeFe7iKT5FHjQtNuDnrutonsN2z7ertKgNJLiYADrpSxwH6p98tajiY8t2NpPeapCBUi",
  "key27": "3gDBTUKMPXhktWcWT4HBN8yZZGYzd97bftEAYCzSE8HLuK4KkahPTrmwm7JoS2qsHpnvMUzJCT68otFPrBFMNnig",
  "key28": "54nDGCCJjm5ybKihKVfxQLPkj4TASGaSNcSHtWF8yEsbLCjEpDGmDc8C9YoSgTeipciqSu6yaKus4sk9GtVjKu6q",
  "key29": "5dVKbkhAGnJ1fbVddyT5AY8kPQmrM5Ben4kVAaYLDxFo5CLVPPDQ68czaUFH8EVE651LkS9DiNgjTYaqySmajH9q",
  "key30": "bt2dqqgS2Y92h18uL3Hj16XKuMc71MRH3DBHCDL59A5NFEQPPuKfjPzDr7hPcCUVwNh1kPuSYdKEzqzFzyxHBLR",
  "key31": "3JrZrrt5xqgFog5d6osvC4xit3gf9h1SiPbqf8erk5o2d2onScdt2yCfbiHtN5pmari9iMM4BeYC3rXtBG85s46o"
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
