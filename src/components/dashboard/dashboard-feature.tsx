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
    "4kKM1kaKjnfmDGuda4M1jE2XKXjuEwNk9ses3sfKF6UaCWd8HQSxW6GZwq3qBecKDkwHNK9tH5ngoi1QF4DgNbcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FyXuvjoYsk1BQn75nQwpxzPVvQBmT7S8wBfwrWBRPrm65s9bQJqDLC7dZXN3M2FLjEx8416KffbaF6VPUW4BqzM",
  "key1": "2yJMSkrQLXtzy2y484b6r6AjcB3AEcvNBucziRoU5qs2Z9k4LmueVgRiAoXhCA9TRn4cAfrF3fnQTWiPMjPqMc2p",
  "key2": "3DHtM8M8DjzkXrSL5srtep6r2Ut7KD9JZssspKi9ZjSjkKJCvUJVz7meoDcz51hX8XsAE6vwsEdPXCNs9FaWyBne",
  "key3": "3AX7Pu6Qh5b5UGXqEho8HVwGAwR1Mxqb4ynWjwBkhQ73CrzS1h1e3ggsZdPqRpX3hvT4iapKRs7wxA5CY1yyDqFC",
  "key4": "3Svr23Fme7dCNidgjNHWVLgLM4S9KVcS2GfC34aiaKzYJss4PcegipQZaV1y9MWGBHHJP6u5zA1icDtjEw9DfwGB",
  "key5": "2cZvn4F5fNh2LbehF17FcKYArCRNMVkp6rJzcERqC9NpXrB3heG9wKAerVV4aGSfM4vUgfZVpK4bWK2EDbJJK3Ke",
  "key6": "vGDbzR3LhPLyGtEHH9dY1K53a97nm7ZzQDi4NVjdGskvtQXbAj7pmpMN8TRVbPQm3PatdwSZ8rfTsLrxVemmj1d",
  "key7": "3AyqY4FnXVH8kvbYYt4bd3RecFvaVWzAF87hNdMCJbmUvnaijkJaU3mZXR2v2keaW1WUPu5jPdNw4BevDCPZ4HV",
  "key8": "Nvd3ia4x9eNVNa7JAVyHmcK3hc1bsQaii52p85rYvDuXKYTtJTFFYVjT6Ta8PSh2BooGSnt9t6NWaGZL6pRRuTF",
  "key9": "4DKdP9kYfQmbAYJFwuxPbCMDvbxN978xc4upDsZrCcDbtbJMBZ5sWk7YDF3wG95uwD6KpKTgKaec1918iEK5zfMN",
  "key10": "4F6VCyvYpZmEU3tEJD13cJ3RWM8CDGbrVHBH2JHSf7NRknqs5ZDTe9LADDpHoaecA2Kf9evovi6Hg3AavB4dc3Yp",
  "key11": "58wejBccyU7szXBgT7hCTK14X4iZzWmsZa11hQbhy3vs2heEBqosUQpU9KpfUpKpmh8937ZXFUKZYRy2EurVN6Hj",
  "key12": "vFxtokkw7Snwj5ErQtXoyGswjkAmBkTcuRUXaPAZHjRPa8RhBCD4B9KiSpiGNjW5NoYEDSY3kEzL1LUgh79QNV6",
  "key13": "3WW3AEux2dgA9Aswaeg8CSnfL4aWhzmHGwe6qbw6e1XoW9KRnzBrHYt2psBNRMcp2U5vHk6tHtnCQvaWENF9vP6j",
  "key14": "5UyqnNaopan428ss2jQ3BQVYZXY2Uxv8LB9g9oKdSXx3kxkzdEAbRbh8Sg8c3e8bCVMQSwM1nrhNHh11WKySwLza",
  "key15": "47ePcGJAJuihAXL2nmw8pohEttWk9w1bYrE55HhcWdP3zUsRdVwHp8ojWezjoUdm7YGJZ9X5Y1j6rgqxdnbBzttF",
  "key16": "66Mc2bQCN6bt19YxqWaXetFQqkuvzyvT997nSTpDKbhgFoUqiYsBK8W1EaVLUn1V3hoLUUPzBmNbwfrTUd4ZDQ2S",
  "key17": "G4AmDJk2zWASuoi5e9FWmcTUPPQdo7c6QXkAHeHszYDVkY38wT9kEJw4vYRwQNfD1iFNKwJzNEvtham3FRcAg7n",
  "key18": "2CTF6gEEPUHQiFzUv9JyVf22UXnJwY7w2fVrMH4YjYrpyo1NmN7g4jgHYHewAGAXY3zB8bTZ1KjG3hkFEe8qZ5hq",
  "key19": "5hmFqbQBgzQtH6WVYmtQoCwuYABK3d4PZLs4E5qiSwkda74V8z2LiaFpwtNJki7nu51NBjfDS148Fxz4HSwjAMUA",
  "key20": "5dVyxMnnmm86QAJHcQ5XuCtweFM99xdSQxVFP3P99SKhSugpU4PRUgoA2fnri8XZZWxAorz3zV3fLrdZhrGTYUAV",
  "key21": "3Brpp2Yb9SkN9H76GUeTSdBrw6eErPmYHyNFz4UKQXT2XnGzsqhxrcMGFADiAHzTK2w5ivfBwJ6dPYfHwGGzPrRv",
  "key22": "25fVPCEgqG4AsV9t5iS33Xje32Ydu7X6bmC6ZfFkf3vrdNeR9K7DQujY8y7xbqrntsyaLJHrXmig4YPVPopQgaHk",
  "key23": "3ttMLfdLsS6ivzr8DsDHAkxq9LoTWjq5xbQ7NL8sqh7cqooWwBFB4mrmJCghRECDUfZqssgVPpwYjGkTc4pL9SLX",
  "key24": "MDaYTjrHyxfPZNnyzgxXHChYbFfjsVdpAfLV39gqSkS9jeNar7ptU2QMZzDP16jyMFX9smHzufq9wb9oPTbdAcY",
  "key25": "67WkeEsC4YSYuKgkhUSxKJhPdnhxzXALpmnayCws9qhDw94v7HvcdCJpJmH1n7vwWVGr4mBEwg8t494tMQug3vRQ",
  "key26": "59gyFJrbSLHhZCitdz3hoJt5QdrmXj6cFkjRQd89cQEXX7Zup4vsYUE54PTRLVgYQJ8AESPmW9yHmmE9SauE51y3",
  "key27": "53WuBH5yMcGpm5qi9DqiPwba2xtmRm8pVSm5aJEQLVYCjiCCquSyxN5KJKRmpt2rspuepfR3jW8j4U9TSRqxmtLB",
  "key28": "5xrLraonhTeFsC4vhvqk7vKQ3tUMiG7XdRWYuTGGXZsAUERYCqHQP9fbFRpUZPAx3qNYgLKYtSLphtfqD8Q75ZPv",
  "key29": "2DzAEBe4WDmcYvXmtpVd115J5uEoTfbPwgdC4Q7MSjeUxzGLS5uoMBShWNesfK2f38f8NYCE7akYhRqXUJrzHDsv"
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
