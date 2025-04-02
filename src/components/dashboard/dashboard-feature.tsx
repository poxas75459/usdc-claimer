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
    "3Z9V5eFFdXayW1q4X6ownaMkGZ6GDjwF9rfNvkJDc9Mi3Wm9qmDz38kMUnZiF3od33oWabFZ6yRc2oqP3P8fTg5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FZeKzFd8o7QRPtu5V225mXYLJH9a4KYvdpNkWtJqcv2jaEZ7avS3WDjf5Lf4vFMYjjFEZrWgzZ2ZYPNyVK6NR4Z",
  "key1": "ZsjQFsPVNb7SoQw4oASwrS6srW1nkedmYw4bMZWAaCYCfRHPknFK8mP81CB131zq826x7rPGPWGmknAvJAzMJG1",
  "key2": "3TFubyakdfTjtNqMKBfx6kCJKcVJ5fNreuVhXNyMqxQuKcZegRdmmCNR9rEzcz5gchgisYaMeNiRQ3L2s7ANwMJK",
  "key3": "5DFCLZR3EftQiLS78DqAN8rFwZrm4NC3hUe11jq5yP87XnEiTCMnaV3rBYVvBqUrwTt24K2hQUTChbHqEhZGDupe",
  "key4": "cgbVJu92xKMMJimP3taJmzCvrQkJLAFfuuJopUb54mupzaWTouvvq9md6ZotqvghfzYxcGoTnyzy4pSJ9tMXxPi",
  "key5": "2yoWorsK8RgwkfwmqzKubVWba5uG8Vb9Zxy9uZpVQAR1KEKa4Ht3EgWFwZsBxpooh3J9YouNWQL96XcNkDkfp27n",
  "key6": "4MABSwo5PRdfuNyatcpEpa9Zw3XqkJ1tq88DgaMhq7Q8i2TmaXbesKTQ1tKzRRbex5yYuhTZghiRz1rzr2nH1Lp",
  "key7": "4BYF7AeCdFwToic3gBBs7a6ZoCpAC9ZCmZViRi7iYVweoRjBHLaTtaR1NUcvPPZTb2MZMpwRtSjssWH7afqNMaUV",
  "key8": "2WNDatbTbf2La91RKSpafGXoEQCYYg9fnzif3PbkL2Wo6dGdyTeo8HLurL3kWiS5DSUspPCzcfKpxw2b827SRCFW",
  "key9": "3FCwy3bNw118R8awaNwMqYTsRThpcmnXUpETk7TPNXSTT5hmKgyMZpz2hpA84qQs8cYEvZKC5L3MuaMh9DBBFc9J",
  "key10": "4cCm2Y6oowpnNUHqsm5TfYSuahJNFyMC6EJp31dSQuXzu2xiRtjZ3bM1YTAqbqhZQ78wn18NnxYtAz3Ccipqxvhm",
  "key11": "vcxrHPVxMqhu6eU88KG9nrfXKRxRFrdQPsHVdGw9QeQZS6f2fnUFi5hA9Fh3iaUvk4g5w7bKKygBDmwntYEAyB1",
  "key12": "2A5tE2epppn2TVrEGXFPurVqrQBGxp6t68AsRSPErN2eQF8jUtkunYtysugMffwYrEm3C9mbZ9CaFXx6GtdGFLG3",
  "key13": "4zAvHb7HnqnomWjSTPSnhZtpjxhbQ2Dt8W23PmsPCkmjzPUUKudyF743hH94bLbXpMvuwqJKVMUPjznGZNsoNQPB",
  "key14": "3fEy96SVMP2SqGoq6mJ9KRoSMjtwQRvJR9pqE6wwtXsozRKKoGXVx6WuFfEVpRXvrbFcGESJ3Ek7ZbehoMLPAYNw",
  "key15": "4Ss2a6ScyutDvFmbDyYJHQacb56WP58PPcRfXyJQi6aHa6FEh6M4Tim1P5vSo9PsVeJJMc5U5eyVq6gKL2ALiRkL",
  "key16": "61MJFdvGYkCQAb7FevdnTZ6kmuUK9aGs5BgzoEnCKnGfWSyuB2dBqTP7noWstsakCvLYSnb5nMYXEH5xnY58F7Fr",
  "key17": "5CFVK8bNdz196TNtikqX14GrXrjN2jiCzUmUWw5keUTvEuGs3p4ahwWTAkn9MsP6SirAWhLpN19JzJnWH6MvRhcu",
  "key18": "5Q7NPsh5jybxKPJMSVCvU1NcfpQJ6jaoq7QgQEaXENKWAHaDQhDboVaDdUe1Rjo8yVZ7dCECghnjLXrtNwVfoTtm",
  "key19": "59CH8ZXJKe1UfcuJD35VzLVGSuKw7NWWR2UCHK2CZHuW3fq3UeZaRK2XXazqZjqRUENGpwcwQ7csEbSNuwccVWN8",
  "key20": "4eBWTfF4nUjJNpNDyuvVeWNtwEb9UPunqMevQt6ydgxQqS8MSytauff235UQ7rfgRJuT2TiSrQNaG45j8GfnW6p9",
  "key21": "39L8MCqf9x3ZKjMWUjG1Pk9HwAEiHAhGWJ5U6rsjsFqaywWLTLotQMnvG6VJt1Xk9Re3uBZorKaSvxQVvhXm7nhp",
  "key22": "Fb1YWn55r8KSHBbEFpGtvTBPStZJC9uqAXuSCH3qDqoU5UbwYsv4vKjUu8QX1KyV1GFYjf5DKbWs53693F1bR19",
  "key23": "cN2GM3Lxa6y7WTtr5zVomBhHzk2EHdampawjGS1jYXqTYG7xSwC6xnkt3s34rQaUFeEd7tbrr8XJxGCZyFwn3KH",
  "key24": "2i2ZxwvWFEAqm7k7z6HTh1wfu4nbe6QwaZZ5ifjQDE9iam4W85E9u6D5wGhCzb2aSPXtB3kgZMWuYyQXY4WieiWi",
  "key25": "rmEaueK9eRutu7RkQH2hAeCiaj8ewVvAWPEpeUH67ZhTER7r23HVY5uQAFv4N7CRg8HQJ4xnD5jmb6Rg55rC86Y",
  "key26": "5NcFVhMZdb9q8MjSEkanEaNFQcu1LWa2q3dyTm1X8aTJsnNRPi7GGhH5XmZVPBWvFWX8rXR8eneAQzbCgZPudaYG",
  "key27": "42X5zwr7KD2gKo7q3NQQfg4YNsfeLyeKXgRDyUsp9KAb6kemmzXf6TgkdDAjMEQ8EuBLHKkRMSEFG31m3udeBMqh",
  "key28": "4v6EEX5BoSxaDU26T43BLCe4YQ4NXkkwz9WMM3mcZuYC8jhd98Dh7sT1YTnXZEWvzNCbbhfzdLDvm7Jd3AFiGX6D",
  "key29": "3enTYtZ2ZipowxrT5FxYopuPPLvhzfAoMhSYayWmvcTvFmp4dsEJ3RkYKPCJQz8CAZ4VVF3C69awqPqxhJgR4JzX",
  "key30": "MwkHqzh7Xepbvbjotvwgrt4sj31pRBJ8RpKCb6S9kyAXnQT1BomEiESJ93bbPUaLaCkF8qTVy4LxCqpGZbvj8WK",
  "key31": "65yEs4HehHstjvqEAkrtSGMALzjtq2R96poMfQ22tDtGomsqTpZTE6tvMLdivXLS4EC7be5bJeTRBB66x41zMsp",
  "key32": "65jLhPy6f6JvgCmb5sXRUtZ8S1tMchUb7xw45xzGsP3XMfHTAmNUGTh1tmJM7QmXZbMnrKKeNtKB8WCBTjNHBdUL",
  "key33": "3vFQHFz9apVcYuXybm64LfQxLAbrLJocBwMAKLCmwda2iKhR5mzjXZVYHAwVhVAc4HbmJMZygMM8UkdDnNEnrTuX",
  "key34": "2jmsJxo14rQNYEeh5N389jcUf7irxZGXZ4ddybPQPEeQRnSAi8snNHu9QtSUooMb6CKVCiJhvyRUXXZdvEvcetCU",
  "key35": "5L3zRd3Dif1QXjJc7JPCXJYCDUayhAoXvCF2xmQQTyBPvsQJ91eeVh14JKEGo3RqWrQ9Hv3GuNxK2UyBLU8xpmyr",
  "key36": "ivPPkcwm3LPRPnHQtrmoBPZxfyGbahvyXhUjTET6vQPYhizg8ksdC5LvumfakooLTfCFMRnpX4tNEbUC6HYojtG",
  "key37": "5XZfxafYP5SWmn4FNLnbaU5XqarKPYwykMnVcPPBqB7jePnzmsxAZM7UXJ5Y6A6GaACbqCSEEUYcRFyZ5AP1MyAo",
  "key38": "2kL6kurunpJtdvrXSLGdG8qkjpiL6vaCeBnyDLy8jFyNQgKJp3VmzevqGw5FtkeJ1Mnjcv7EyXNfetS3PNAMssJX",
  "key39": "2nEC3GhCeGnHUYRmidQLaLiNFBjBivsdN9ZKyfFMcq5JcieLdPLZ3AoaEbpo4ptbT8aEzmaUc5y1T8aKS66tfWT5",
  "key40": "2uvvaxkAPUxvq1hY2GTCCWTd23nRok4eqXa514rjBXiWAcSW37hmxiZ1oiAYDwiax1hcPhjmTYR5pqqhmawE6SWu",
  "key41": "2s6bUAjGn1qbnpPyVTZvKWoyzWqhzyJ5iThZKvtW544qZFt7xyuryVzS8uz5tP8dt13iYDfunwuUmt4QAijxqJas",
  "key42": "3jCiJug8i29q3qPRJYt7piWw2vGyw4eUwFLprgiF6Q4aAKHN2LJoN1Pngdhx4KUuNK2eZCzn1YyE7h9YzjWBhng",
  "key43": "32gwNTTb39ob7gHT6JNj5sFpyosJvfs7aigG1gaudVZPEqSQGiL1G45xUJ8Axd36iJsru4Qw4kqRo9DTKVLKNSX4",
  "key44": "45razQf1Pc5avFHWYP4koLMQvk8smHsHjf2tZVqT3ysFxGWy5qz2PSL3d8nvxWu38uhjDcs2PRP69kePxV41wTty",
  "key45": "4F94GRdK7scgbQsH6pw1npdzvWUiZeSU8dkrZGkZqyKC34AATSGbknTmUQuz5PNMpwEB8Au5HnhHWseEmxGCsTQz",
  "key46": "3q5pVvqvCAoyiEapggDfF72Nj13GcZexdZyJYhRN4nuDjDGNkR1Q3HiZqCB4uJEqVW5Fpav7Sd2QCnJ16gNQf2C9"
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
