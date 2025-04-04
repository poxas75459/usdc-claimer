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
    "QHShZwDJCXAYcC6SUbF2mZR8azWF1Yb61iBr2GcQ4sQjKpQCYUSBudwzNzSowoppbzqrm8XqZjY4JECh16LiYaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tC1JZtzhMxWj5d1mzmAyvhBau2TbBvsW33Z12eLuN3cPft5KZ2fgki5XA2Hd14rmugEMd6ZFwW8BV4JBpYCcUko",
  "key1": "2Lbbpv8HnM1XSgXRqaUHEbkfV6f67mE5uH1EqPEWjpyWZzV2KpKkTm9RVDU9DLTs39G34iLpUikVRBYRn3uRRNLe",
  "key2": "jUATnfg7QET1qQfBWAioKDTXMQ5hniezsN1khH86YaHo3R4Fo2DtaAHPggJdLUTNsWqEr4G3T2A6djstj2txZmz",
  "key3": "5b2oxr31EHqmq8Ljrjmhd6uohE6LraCyqWefgLd39GaBZCgTTEBwsKLkRcbVCAqiib7jgQNF5fFgynwa4ZnJrGyN",
  "key4": "5xt7H1fZ1SPqdA2R6pUDJ7j8LJ48Zs3PAXfjZfusxkrt2mh9tiTX6h6oe27ctihfKg9f2f5gSpsvAQi8Ur1VrKFX",
  "key5": "2BJ1F3PjqVWmA6FV2fGL4qbiN7WxbMjZnnsWQbALRQ5MXkdfszLPqpLbtYmCkCc8p2eQNBcjQyMS2491BWuebtxK",
  "key6": "295AWej5crGiSxXpQEZyHRM1TgUMCKCySdXABf8ifFV9kMiZGnvHsKtdZJmn3M8n6rnvw7Y17pCQwojkkeDPV7c9",
  "key7": "2X3ZxY6bARjs6Mk2bPBtYTRbrAMDHHghqxVeGg5jWjFukoqeA2m2WTX9U3tqVbGKA4MTbvyzDZUm8TVmv79cs4LL",
  "key8": "2pV3PyojzPdP4n2Qu7bxzCJ5Bgf5w1pSjtTtfSdpRZAVsbYLfHCkLWXLb2oVeHJx56XgU1bsshpmHZrrWrXbCtR9",
  "key9": "4H1LyMECTZcuDQHGrEuNVVKi3PZUragS5114oFMvJPLUswD64RXL1iwi34kssH1BHFv7GJed4jRofKcDjW7Ck4Gs",
  "key10": "36b9kt7xCmnE7v25UG87hKM2SUrsRocHozTZ3w1VdRxouk4hNHDPgmbAys77rUcz3SedCniVXick4xbhnTsJa52b",
  "key11": "3t1ttH3JyGoFEQ2aWiKE2sRBTvrKwjWyWsfcxAGDJWYpzL9bj33f9o7hNnsJw2oWedKEtEbJ2AtpMuCJNURcScz4",
  "key12": "5ArKbTywsSzVkcCwgJwusNZNMsUNLwvferpevExKToRmYhYGqDxW5v9MHNcBuRvSCZsL7ukfqokGYxQAcRPkFkR7",
  "key13": "3kk141TYxykss2uNtwHh63rfkBjpXVUQaJPZXtVMs4gyEav9KmteSagwfrcdVtYABuJpPtx2ovCgsqrzZzpkNVh7",
  "key14": "344mewa6RkkxiR4K6k7svA5YtoWvTbwFd41665Z3imN1LFr7aV8CmbJDxNqZH2SfxsLZVq6Y3gyNwZ8Q5u7tbQ4r",
  "key15": "4rUyRWoJHPdufRSMxT4qWPLNyHoPTzrtuG36xBPzTHgykh21oXSkk1GSykfsCh82kWihdC3pfwYHzz8K8a2xxdAQ",
  "key16": "2cdLj4JDiVwovFSqhX4RMYvnrVrP1e6gJbXuAeH9owtA9aYfmXe2hkDozn75nWiAdYBjhvYGfP1LNeYJ23rnbL99",
  "key17": "4eoPmRHf5z7V8NH2R5mzVMtFipBWMyrFDrvrQxpYe8pbLQzY4txF1i1WfewoXApAGB8eQPQx9uwNTs7MuH2b1wPv",
  "key18": "2Nf6tat8cM3WyGkMNQMaowWyqdxaSeHnRStXVMYs6tp9BSKFJxuFHwSggUsCKxf25an5pvV7x3HN8HiENDYTKMdW",
  "key19": "2YSE9zcaRheDZDk6hgCYmCxXboBNJSwjZkqKtDbFhGiLXogwEacAe66ZVttjFPgohiu4idX7d4oLSUi5WFT2pPJW",
  "key20": "2vDLtL8yAPYVmXcqrMWJZors67MTwUYYrRxpofueeRMca2PTKBUa66uWkNMYd9Y9dHM43mmm8xTatPfm1EPeChXX",
  "key21": "5qgcAhGBrf4NBrxJRYcq4PJetUqQMrVWz56hqA7QyMQ45UBPx7aPRdS1LyWdHTBhPkr7iFY1HtXpGxvQBRJz9HFa",
  "key22": "4bDBsyfL7refVsRb47ZR1earh1GbVzuwfRgceJ1pNL37VzpyA7UemY1kdrYUnWaykXRPsZ4kQxVoVyPPeNVAeCmT",
  "key23": "454NxVa49EEEckuKVh8ZSMW8h8BnG7Mo2GTJhX79yy7PeCA6vviTRSQ5koFEaR3qTfuYJmehgSvbExVgDaUt3Ryw",
  "key24": "Jw9pxxh5EFNwwasDLoDAyA4fe56xsyP87eqVH7oSGBxzgvPAiSjeawC3myr9Kbga4Aki3ErZ7z75Q161Sj9SBuK",
  "key25": "5t8Qw47d69UdGzw7NwuB8yMnrJeptRaYFEufeiMVLa2k3XfePVGWVndyP4erAT8xhGr5MnMtpCHTHhEPEkucWcaz",
  "key26": "5RVfrhA8He7kLjWJbzHx8gM1p1r46CZKrF58G6FduRpEuy8Wzdekb1jnxMa985FfdgFupfGGbQaq7G7amX5Sh7dA",
  "key27": "66sem1ZTJRt2BUHKABHGtyqnte8HmRxWAcHXV8xNBYYvtzxJBTtxzzCzLYBxK4gS68orFMU8yv44jTC9GvAKWmNh",
  "key28": "3vGRND14mTdSZddr73hyU3AxLcc6gaCoz4Nogdb3HU13fAvSzacA3akMjUCBVGxbfb84DgNuy8ZRt7TvPSV3oZT9",
  "key29": "4XNWUX9JomskKBeeJFE7sWVmJHY5L62qGdf2GrzvDFgeufngn37js7jvzXUUtB9Lv9DFxX5Hok8FPF46ZLUA9XTD",
  "key30": "iSP7WVb6iML2MNV1tfyBrxwKVVje2RgqQJksr8SxTpdwtHNTAQTehPeWdReHfDruuNBnRDLg7opujV8Z9XHp5R2",
  "key31": "2zdmx88PhArCzfWWqeNt5swE3qvtctXi6p63E6WR8z8A8bekHEbHvXYpFdXncpif4s3vFapPm6c5bCASVBbMCr6b",
  "key32": "4N82gSKCoqDRQXN2VEMt3BW5xaSnvczKLNcCkqmhi93g4nqj1w2zwTbcXgR6RLQ2x2f91LMEk2zUhFySNggdFXQy",
  "key33": "5tyDTFU9VUZ1aCJrUFsaoithaqKG3MKJfJgSBnfuStUGzJDLa4fKRoa3fJVnziCHzf8waPgrGQsELQpooUFckDhG",
  "key34": "483NffJFgEtMy5JTD1UZVvNP8BMmVwQVNcKUuhQKFTEv8n5MZbf2es7igtbZt5D3aoFu4B2US1PwgFM7pKocqWg3",
  "key35": "2UgduogzcaB4XAHHea88Sm7MiiEWGACSZvxkamjefwH7zshNj1bG3vxG5zVCwkvLEf4khsRKKbLAqEjk1GXA8xiB",
  "key36": "4kDLVgU48Z7iSdhqwXeBanr9U1NpV3JZ4jkdCiq3vq9BSTaoffeBSDthe74GDdemhwgBCCf8B7K2FhjxWeDFzQUa",
  "key37": "2Ngo6LewtpUEDmEqpJiw34EV5tptcVf7VQpa1cJHz3Y45jumKyQPrT2hXDF7vn8va5EQP3myfhcKkXz53VY3T2mD",
  "key38": "2mF2gJXa3RW8xEamTP14CYFTZZ2z32P8zqWehRZcqYaQb7zD5V8NCgFEfG39RAjJmWTwwERZYJ2fLhfBaV7y64bq",
  "key39": "DQ4i9sGfKZP9GXE3cYpMVUGDHpVVYQtBbQMFfn5dSEGa2JDVkHZow3Zs4C9UWEzQ4ZdGgcurYcC5Dw78Lkh326J",
  "key40": "3UcSiXu2xuHisbq514EHLMEU3Ej5kUn5rF8PmKG8qye9MVKhkeCj9wyWEzEMw4vjYXiHG8QjdoWCAhQ1u7SVWn5N",
  "key41": "41ZDoVcNCDbkhtPFHc3x4id7uaLDDmqi8pt7zQKWUigmGp75e8ULHMNaPgPC2z3wYJarXjkD71t35FQ24LH7LMLh",
  "key42": "ZgT2CKL7J8HAP3jco2QcG9ThrEy3sjq1spPpVxhutVpPLpF8GVV9LxmtYESrDFsmAAKtKR2B9CugHbMgdVwwBZL",
  "key43": "RP1jiWQjxPxnHsFrjCTNLebZbPSHz9B8N9bRTXKwoURXJyYhRDJYDeJPKQn45atSyAzzPxhadUAkvKWFVMxtpFU",
  "key44": "41xgDBLfqRoyubUNUQaPQqh7QN5hvsgtjMJebyfxZcK8HLYgAWo13WFQv91neCzuxDgZFG2nVEWJN2zuSnLSXUU3",
  "key45": "5bw8sRbeJ43Wf87S4LvWmZaoieZUpmyEaMAPzcRFy1rCjfoyPEwd1P2EmHkRhYApoZsSz74VMm1nLXJWA6VTpMDV",
  "key46": "K5p5c8L7LroNpEU4uokognnr1t3aERCvSezKeTFzgiLbvAGwTavqpbvt7g44hFZRW6UkdR7Ln2m1ZP7EDXWBTBJ",
  "key47": "Z3nKokn2GNAhwo7JLRneX7UHNnEaED4dczHNJa68RJ8YeoAHCoat2dBnGBXMQTKTHqdXYzGb4vrc6EbVgzBvu5Y",
  "key48": "5F8tScB9K2EWn9FR5eobtPzqpbdZx7FLCA29VbnH6mekp6cLFciDCY9qxBkVcP6e8iaWSu15nf2EjYfj6Ugk1emB"
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
