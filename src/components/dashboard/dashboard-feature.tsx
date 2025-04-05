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
    "63VVFJ35HTUr6puCwr1ni9Wx5cSEpRvDXEJ4Y5d7PJB4LZo7DTq4HczsxmfL3LBCv4nRm1xXEaSf5hWaNjPY9Hdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ooRehjuXniYh3154QdduczpucCfQrWw8PrzjM5od9C9bKDNQKqjuB8GL5ED6MmYxwmCCASQZTgo1cGAnYfV9KEa",
  "key1": "4T4kyoC8ymn724bJVT8n822YrEtWG9RL1SWMhRyHkeNBj1Cg5NxkaCu1Lrj9WmUMdna771zJbWsaqXzajpPkLHp8",
  "key2": "KqeTEjafLNMqUY8q7PmVovxnBExKyKHv6jXPB3qZS85WaqqEnDtGzH3UjU7MNoAop1vGWZUUbbJZPFzRG4BW5yr",
  "key3": "3udhHhd1oTn22tmhZGo3WQXKdTjCNn7k11PAhhcHorwVZDXcqwDs7qgjX6o6GkVvpoJbG4JKXeSz1QrnHgBCyVnU",
  "key4": "2rGmoiV9JbGvGvGs1pyJjH4v4sBsbdZL42C8LmcDETmozqvLFR5ufHCjXtZndtwcZye29GJsxdJwE7FMBQXiJNvH",
  "key5": "3gpFiDcDBRXtqPC8Pf7jmc6FGmGRMBhp7gSAg12WnjGunnR4v9fqdwmhS9eay68nuac4U3f7XgPtsExT2bdEYpei",
  "key6": "4X8k8ahUzEEShuDM2UnMpX3p3BvqezgPBWy2v8A79dKYQWSX1hTGSkN9dt1mnVP3UnzPBBqpGbgTofdBDWpCB5SM",
  "key7": "4Srn8YYg4dRMvHtwY6DrzxcNJyqVC9CtR8fRD9meYRFgAxtmY4k1MYM6PijexDqu9fhMCYuFxpGjUfHSyK3htK47",
  "key8": "3QBEAZfymHMoS4LcQ9WufUs9oM25VNmY9pjYSffxSjr94hKwmbmiddvwujDUG1Bm8GF6HhuKszVba3xccKnAc1d8",
  "key9": "66Xc4e4np7eNWVo9ZBgGmkPpJ3YRtEf1tYRaSmfonqipzqJ73mMScMwVgzMnbFduftNwLRvbb4cR6SrUhaRDynut",
  "key10": "hwRWRJtW9yd7NacvEMhNpeEy3ahkVitFYVwA7m3w32VrDU1CwUJYffoQPhUBSHUchfKGv8caE7wfeiM3p12dyWp",
  "key11": "2RxZwcdPKXuKshYSLGqpvzoKi9Wsj3dEhKswo2yCE7vxomvisYKsDWqzJwq1Q4sjVX5GHTBmXv3HZXgk4QcfiRSW",
  "key12": "313s5W1cuMUc3d6RPoVAKxieZXHAouPYMu6iMMgQWXUiKF56A2uYSeiUa5eMG42G5aThraLq9UgResAc5cFT5oRT",
  "key13": "PLNawaSaXetQW1dVDujiQeGyDjHZrqJNCH5BjFEv1ANwkEitGKPxA49ABy3RMKv9tY8p6VnLXy9enS2pkCA3gcK",
  "key14": "3EraF8BXnuxsBN6PedW4Z5Rwr5PsatTbhmsw16eddFB6vCU4MMeA2hgvLrob9wVKGDEGYaiUSKFNwcRFWN8vNHDb",
  "key15": "cmXiyGw27iWjNtVxkDnjaxydTLC84bLgahcNpy2sriZb4s6qNTD4dxbjZbMoeAZs6BrZ1tR53fQuecKbrVqkHes",
  "key16": "3iKvvo65SV9Ja3976WDTeJyaNFQWN6ry2U7dgTfCg4HycZ3BPixQzPtgyzcZ5SZT44gW8KczwQ3SRUpUbhF61Ccy",
  "key17": "5rERJbTSwTUVmALkJWwnxYnsSQeVWo2JDYope9RhDDFkqdCqfFkeGNS8PnY4LZziqo81tG9bSHBUWUxWZ9oW743Z",
  "key18": "29qty8M3foGckBp4gT9pViDnPGBNeyZheRYpMbFAGeeu29x5LSdQ8DDfoMty96zzcKp6MP7dGehx4FAjscFoU2Bq",
  "key19": "5VSxZm5HWphCWnvTpratmETWJiyBWvPF8nXChzUJUFXB1ztKaV5qwBzibUam2aDJkVP5gbpjfnkbofM99m1LQU59",
  "key20": "sNaEEp63nEdh5zhtTZEeApD6NQvXM62s9BEwpfKXDJZ5QEeMBLSp3dtoxDtup4S1ncJ5smxBhKjtJrbgJBXvwbA",
  "key21": "C5KANkERBqJPUe9N3KvJrERGodbv5fUAWnVD5QPrzNPx5wo2W5uzruQJni3HK21n9Xb7GDgFutme94pBTy6XEpK",
  "key22": "EFKGY1YwjrDWprwNB4mADnnDLN4GQPBGo4ZukCNpYmv9b7moeBGaQrqhUuZKS9TLzGHd7d5QNif4Tn5nyJifukp",
  "key23": "4ciYncJvVEMPYGU1PJR92FnvYgbFPS1r8Y9oooM4ZMZYA7LmeBEsXxmgYdFw8EPJ2v3LmPn79dK6yqukWzKnWK64",
  "key24": "4ZGLNcCYKyxoxT1ZYj4fVdL88qjFtVNB43ZLFiVzU9BfU9joP1gJ1XrXHUt2g5B7tYAGsXfYw2DmVGXP83DNQpUf",
  "key25": "77TB2rDJYGro2KzThPJ3EUtB4BTd3bZfFG3dwDyHmhSTzVMhR5AHdKwdAuKLnTbrow63q2gFpPi1smCvRCb8XqY",
  "key26": "2rkw7E9aZJH7wmff6PVCA1YGRPfEdm1EMiWReJdb7AYLnh6SkknbtRkq9Lus1VGRRWrhWiZq9WJQF6EFY7oFvqMs"
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
