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
    "9RpKJbuz5FMfSmjRV6ZrrCFXmSU8sCH7YgYagH7bYKwpcsdckoJWE7mYzpYj4oY2H2bntJrwXPjfuWsd8jhjKAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2835P37cTAvPvjDMCY72pNGgib4ZVAP7r4oYEJuwVxNYYJvF1MpyiKrHQypEPFWi3SRVp6Z1fzWYLwLPrXNcYp8b",
  "key1": "kE9eyRH8jiRSLDv3dLCQFPS3GiyYwCLUBtJ6jS5XMFyWrgaUTfcSUXDMt7mi9WDfqmCtWqgRe8c4diNBGP2QNNN",
  "key2": "4Vo7uvUVe9f54gxXpwEuuggXWNiFHe8VF5jtkHoYXCMZiBPaWpT8Q5FSGZR2ZhsWsDgbPpx5aC3Sy6nSf2X9L7Rn",
  "key3": "5yctjE6YdYqncAvMQnXTFLT1QzswqZSsG4aXLaBj1zaxeem5DyguWsfZca3vqt3BqHWiqQsKBANzqvnJAnFh61R7",
  "key4": "5o1A7mssXWJk91zYzmMYKBZLr8SCLznJss981DQx1Zdc3tNNJh94h4jFcqgNgkRBUMVWNWG2wTsivbZeGqYxaodX",
  "key5": "is8dyKZBaRQ7eZNLuGJuxLMGng1mGmWraeHfH8j6MA7E763U1xCkYeeEbtF8bwRyCwvVDacRmgBLUEMUQXx5PN8",
  "key6": "4N1G5EqgmrUCTP9McPADaB65uLaZE8YJPjXNT4kehC2XzmpRb5hVo3Q8zhmRrQxJDGKuPrxS5L5CS1zbMrgFe4y6",
  "key7": "3pcUPgARHeHpNQo34eG2nWgXmVYDM4a6B3U3Q5LFiQi7WdsFLShiBwsnbDJfMPh4RdZrRbTD8AzA4pjbXAHYHnd2",
  "key8": "FnAbpuCbLZaJoEj5qz7EEinGEsyGDfwMy2gcQwkugu4TTecrsoyHyTiGJ3wT89ZJotAsBxHjVoZ8UNwUdQHmAYV",
  "key9": "5Nb7K4M7koZy3p6UwPEZHeGT3WqtK7wuUL6TKTHSHsi4whUptcrDTz9vzpGCKCWRxxG1uS6uuiUeGpE8GEHWdEuA",
  "key10": "49DPGFkNE7za7V7N11GxkCJsuZ9avYcmQuiy5GNyJ6LujyBiP4YhJ6WSp38yZdN2mHHFdYgoJSMBgmCfTLb93z1V",
  "key11": "2UhQ1FXJ8moKSGVCbLtVwT4Ft6H5HFNAHSDGffF1d6k4j1gkjBYDQSjdFz7rnKcAYjc53zvrcKVM9g7cDRafRfmK",
  "key12": "KrH9nDrYwvAQVyKWLGgU9g24yExf4JyvyiEFnwz6RaVni5XBE7qvShpcd3rmcBK3su3xBuoWSX2u9B4ZdPmD4Z1",
  "key13": "5y6nt4CMtBzskgaAzJnjVKQADvt7GWFm9c5dXXAGAKXoLZmkr4AcU5yc1YMtEMGnUtd6Tg9R51FkSkigbTBx1dJs",
  "key14": "3crKaY58H6oAeEbH6NNpt7ay6YtnsxJPS1N9JujDPnsTV5hbipFxAgfpps6duRuN7Z4GPyJeoD42AGxunmDi54uS",
  "key15": "4KtR74dxL2eAGc5yGHpfmiakcdcQb6yMZDKdR4qEtHaULVjdiAHqbX86WStzMxoM8LhtaZ2nBkoJDawTQjq79QU9",
  "key16": "4xuDC2L5q5WU6h1XBHXFVekJ6FqEJAEvWWxDzzMUuxfh6bYrYTonCDvw4pHSjtWuoodV1x5NzwtkG2bhufHDur1s",
  "key17": "3NWiRwe39X1LYUcg82cZ9V6Pvt3NPpjXoE1auwzpDNRvApz3W6JGnxALiprUQym4aN7N49yFzrMoy4kMQUsPWpYk",
  "key18": "2WuEnVT5QZzwo3nFp2LMGeLdDiUzXPvhsstEPPHQbuYVQJfUT7w4hcwPJxQPQBihppsNzC7HToWKztti3Qb9r8GX",
  "key19": "3j2WpiUzH8RasAPqcYTs3k3PK1rLZtf4iEvfZoFYN5ump6pL4BmkdXy4dEVxdGeoVfMFXtAGibYYGkj4d3YdjDNV",
  "key20": "CM1TAZT77a2QnpMH9V5JHo89iyzavUekiT9ezLwPS22nQt3158RZXiNwWc5dE5iCVXPNESuXtjMbg5LEo7z64or",
  "key21": "2aQtdcFeNYMxW67F3vjvJSsMN7darfNWWXGh4NqozE5a84VFvHVsj9jNwhzG158zTXhhingLEgyNeWn78YiYtqS4",
  "key22": "5PN1zkZtv5Qct2vRmZRL7yCPrhy7f8Ate2t3gFq2CaJi1PKhycpySP7BSd6b2qu4bffCqnWQ5eCmLC98ehcTAERZ",
  "key23": "4ipmQreVd7TnniUBmV9TsQRhqh9WB69AwKVo3HRV7mCy4LfCECqKzW12vKuoxqTPy5QLfJamqd78dyexVH64uMfw",
  "key24": "2yrm7LuzFb2TTodvaY6Jofu3E7F5N8d5Fcp2kAhAnsouXKkikj2M89TmoBWa7vQsNZZ6dD11j7eu4FqCWDc4th6X",
  "key25": "5SjNv5peYWq6aXdHeVqfzKAxcWP241samVUpMCJ2eZsvg6mRnqyy7cQyz2ofueJ7XPKBwdpKZwbqiS1yb8aVKkw7",
  "key26": "48W8RBMCrBxzGSfgqtLvGLuMZjZED4oXUVFND15LRDSoisfdBbo1QUCgYJREDHoThpBg2neNf2JZnWzcuK2pQZPr"
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
