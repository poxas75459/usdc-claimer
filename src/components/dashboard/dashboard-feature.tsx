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
    "3Kf6FZkTokeCDQcMoCNqjPxEnmn33cn1GCtReMkfTW6yZXdPLWUTopb4xpuTKTFUU6tXACKi9NQLMmKF1AE2xEbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b5dEynvyGcSSoiaoT61dXNZZsX1rNpkN5jxn8TskFdt8EPBKWWEdn2byHpFjRe9J7KLgzCpzuiBfSGwGoee3c5A",
  "key1": "3zeVwYsxwi7jWbsLSJwekg1pKzNgXeETh231oh9cyo3iv2x4n8qrz3vyJyH6jLZeh8Sdos8wDQFiCsJfNidgsr1B",
  "key2": "62hMHdzow7nfHrwwkGJJXM7qwok2fD5SMYjgKeV8iB1YcaicCmhucLpzHqdewZ1RTwLjfthn9b5AwDo93845mKWq",
  "key3": "bCtJ9C9kvMHx9jUtohYiJCFTgpuFexSpNHgbGJzwyyqdCNvTcXEFrSzPWdEBKmnpGuzxPwdJiv64XhuuetJLCdA",
  "key4": "5N4U5EgrHv1KqeBey2BJ337cpWFKG6DC5RQmiJy9tyMpp3xgC9StBi93rNajAHMWh2NEJiXFEz3aJnjrH4XQxGKs",
  "key5": "2CupM1r2t8gqGQdxybZqyLPTpbmqMCtyziTqTcD76FVX7s5rvK42sAStxno1vnGEzT7QpHcnBP5RTYGb4YLT1wpM",
  "key6": "4T2Pdt2jaCFLhP6Qb3Q1FWM7vXnXymYjpFwNbt9oMXWgM5k4LNM9msM2FnMVj4TbY3trJcRqemmEXVK115RLtczo",
  "key7": "4fB3eVswUovzWvq6tUKE9tWuzUSVKqXA6oKfK5Xj5EJFmiqBProvXeC8uY1z8qNAibrKtSEcCh7NueDbo4Xq77Lc",
  "key8": "5iiraaNmVBvW8XnB7u2BNfQSZV3GvsPj5aPt3tSi6vK8t9VH37xp2LQhQzsMKRsq2fmYe22yygfQ75t3bpJQMffG",
  "key9": "5jZ8SfKofS6KAd9sjkvAkUGksTc6dos22JcXpskPz9sRBEUwevrow9TBEHot72KhbtzQcJMmme5eyJrxQ2XJqVe4",
  "key10": "2DWyEvxiQ94GeyTviFx7oexoc6LBr7sdhJ3dX4RaVd58CoQj3mDf8KnNE36raoi6Gc8roEucCS9VeRVbn5LYKz1c",
  "key11": "8gGtB5qfJ6tqthzsLTKGMr4ABtbyzvzmYKgwAqSweyqmoJ9JjvebSRLdyGJbPxtqv7qJL5YJ9cV1T9S4zF8QtEe",
  "key12": "4MnnchFHwZVRhQ2gFukBkL7nkMEES1Z5VQMBN58gdeXE6FWawsei8KgnELTyaadNdUoEFBikygRVHBb6FwVG5pLr",
  "key13": "5rJ5nvEcUnH6a3Kmzz4ZTcpkXhoW22mzMHYmanV3L4g3MVBRJu2YardpUGoNbNhtzxHpEmEAWQmtfMxbzXzqT3pk",
  "key14": "4T3vCznf1p9gqKrYC8er3QDziFZaRETZXdNRHopC34JXJeccQ8NNmcRWZ6TfsgLPtghFYYRsG641QoJvK4QfVH9u",
  "key15": "3KiK5yc6FVRaTA5TDn3shZqY7oA6c4v7PESLumYpAU7GnqkZzugNQ4oZ8LxnTZiyjDvXtfg3erpAeSw7u9EJk9Pw",
  "key16": "HtRkLnNo9hUf1RWRXwRu8WHQSkN39HNNtzGV5tbjwaxLG8BcTXXakNPBAagTnijzK9jpMSfY5TUkwXKjVZx196B",
  "key17": "2w13RfvKXGLPZNQGGYp3jJ7iiCMGBgARuwbkxVddGKMoyBAdfWQPKsZpVcGsR6o8NHxmqiiW3udrEWCs1WpnfZj4",
  "key18": "AmkPELsrYt4nUUFgT792LC6aAJNVV7iBYuKv3wGUsER5YWhHoCDdW7yL89oSMRMSF4LaeEAopYQkb8vydzq21mW",
  "key19": "4ADEqJSe33td1hfBGRN6HgqQgqsUbPxuVau1VDZntuTvRAvoAr1B4Ar1UgAiwXx6RugW8yfBdzHLC7t1Ahe7xeze",
  "key20": "2vE9TWnmcqXZ5tb7QEVKJEiV6mEwia68vFFcRS61V3of3YKRXdXFSNZMVb1jhCinM42aGA7TrjH8MS8ddLCh1jC9",
  "key21": "9sYmCDQJ3hxvL18STcc74nMZp7VwQvuy2Ebx3QPyQuBdASVXbrw3TVv7SMnFfKvfwCNc2FAngBM3RN55hDDsdoj",
  "key22": "2KNgo5Wjinn2Ecm97BLNUEXqFgZjQRuQKxgY2hMz5G4939kjLDi3hG8tTMxcUKRUYQTSVYWjxH5FozfBc6apsKqC",
  "key23": "4riYiQ5cFqbtMkXwYpyaqdysSmns2Qsn1m42MN8R3MCFcyVAT8WnpjUJhodwWc64wgNBr5k5Nesg6HU4DYPFq9My",
  "key24": "3xPDdBNEkcD3KNSNq3DzBDvc7GHNuqCH9X8pLnXs9CQm8RNbj91XzRL8oFe4AbAGiU4D53Ycy77jGK816RDTtgSm",
  "key25": "3RVFoAqMRLhaAJpyiDYLEHP2VwGwH6fwrfjzSKFnb8GiiFScRUK5CHifqPXZ55yDusDFGG4eTqkr3fYfyQXt6UQq",
  "key26": "sMCSv1niKr8wYAGDeiw6iYCPdE3AgqUyN87xstZe8Eeg3LSnSAwQiphtuq34w1SuynAkmefFccQPQmP2N8f9rHa",
  "key27": "LTroFFosfGmiybMaqQq8AW7zuW1QpgnUqbhEPKeGqoX3v41W1GZBWeEYLB5SCxpNPTtsrajhv4a2cetupYEFpqR",
  "key28": "3Xc7bA9SXFjp4of51R91vrDMwDJXUrUmDpZsprLv68aAhh19tVB1RFwSiteyUM3yCTxs4Q4qJhAfR2WjPZur9s77",
  "key29": "4RS4GWrPyoPzJ2rRVVU9vmCztNA3vqDxzfnkRfcRoQSWLZc3KV1Ck7ZbsMTkbhrfUrSb5PpdoBWLMfLpVHPkNWwx",
  "key30": "36qm8rKRAtojhvaHCEKFvZTNXy7TQBvRSq318HiTmYK9xZmvywif3azMwSK87WKGUJ5mEReDxabk5ZFY4A5xL2sW",
  "key31": "4F9Xcb9TdCF41ndjs8Tqx4V9uktfNEea3yNNp2hAotePWUgq1EaNG2MpY2KpUJ7dGHRLLkgVGDyt1TUMDgMFCsff",
  "key32": "5GWGZHSwZk9DLpBw9dxmDNPn9sVZr5uuhLPgTqmJHrHu89VDmZDJ1twBuLsGnVPgGEwBBumNFtFwkGqizTTNLbWy",
  "key33": "38rZ1y1xUkqRkUX6xTW1jkBJPRuE6SEcFTWPNC49iesM6s2iv9DDWkso1gtGyM3NRZYbmvMqpCheYToLD4nSYXe8",
  "key34": "2xJDdx16C9ECtyqujz2wd7atCSHjFUaBz8tB4eACMUcfWV5jS4SNKK6zDmDu1bqr9p6kKKVK1DumvfhwGzuKPPSf",
  "key35": "27mKyKLttuXQETxM2cFW8LsfkBpqpVzhWCHM76xCNS9jn3JTbLow9LGqctMuPne7DheZJ3idD5349K1HNyMaBiqe",
  "key36": "5DnNL493eu4wR45j4SRkKZmqX2KfEJdQfmfdHLBgPa8vbVthRebBZe9XUM32RX28qLbew9rBzTcu3LmuG3n3Askk",
  "key37": "4jrVZPBXkwJtS4XaHkFomEYmjYy9TwuPQ1gDC37kwLNxokJSk5kDoVq3xePtms1tqC4Xy1qq6Nhe8t4AchMXZ8mp",
  "key38": "56HTwgq9ZHG7NoHTuseu4xUHrH4VLwAB8ezWtER2qWMxECEQXZ2MSZvBF9aXWY9YUqzP8YcQBJPnJNrVc7xzYcJo",
  "key39": "2VsQJEMSimNE3MdyqK1GWMugWSKRNy5edPudQ9eRjo6bdNR2GkDknEuFHMs6UfggJ8PSCLnhtNwW585xJEu7GhB1",
  "key40": "48MvNEvsdEoGbJGZy8JWPyb2qUKW3JfpD3g9htT7qJPNgkeRtdKA1Vry4fdpkrp5N3wcekKcFLpGDMykUobtgUiQ",
  "key41": "HAJzfdukE1XRY5DbnXBVZxkgad5GGijbcjBmqt3Yj4ytrZDSE6FDFWQeRXew56mH4J1MxVLXCedg5LxntxDvRSm"
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
