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
    "5tbniFyz2SQRFgWNEnac8jaTQaJzG5vVs2LZhDiVqHzSqFzwFe6RZ3en8ouQ7otCD6SAgYKGV7PHWQ2vAmtEwXBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfiQQYjUsWogjQeUzXoYxbvTueAoFbhEqXFqeGtMELuLT5ziD39AnaY5ZnSAJY23MacGpx1XwM1NUeYoWXzZ33N",
  "key1": "5GyeWzt6TQcMBqzuhcnD7uMercLjkMabcKB4Buwfa3GcBcQ8qK5YieLz8jyXotBvf67GHUFKwXGHtHdw1H36pSQJ",
  "key2": "4GsqTMHzEne2ymrdNcs9r9HUfFvgGJ7QSjNYAU2eH7FCame4CodyxLwuaxGcUVLfbffye9DCjX1y2VUQVBLgYRMr",
  "key3": "ythS4juY4SrDxoAJJecitLHhkZZGfV8YaCE6PfjAHCM5Vrb3mZhdNwjRE5PsNRxXqj8m3H722XNSbYbuooJn84X",
  "key4": "4YoGgLzd6B4TDnGrtxZ536Ci2fT475Et6eGxwE2vwDsKZsyrh3eW18j1UbJUwVDL1KzLt5fLjsBjYeqgQKjQrAbG",
  "key5": "hL86PdUZQGNLzd9zBbKaJKLkGtbsKkrAFkL3xY5KEYq4gJQoKdQVYkT8pF2insrex1bHNQVnydnycGFLBeZyTuP",
  "key6": "4ozB4VQi97mCQPyE6DZ9B5jHEVE14JAzcEduj5QU9RjbCUxEmg2tH21pYHnBirinKVGdsVXLq828QxA85ody2qca",
  "key7": "4AQG2gFYt1GE3ysef6h9abHEobcKvw86JiqZVLYsswgfSWdiNv5p5S8mkQ7mDSwXaPemr2MDayqkdBjjerV2YJb",
  "key8": "2bSrUVbaSmGeg4fegyYDX5ZUqv7SHHNdKMoB58TAnaA6w73JvkcR4CETrrXqKrU9AywgZhzei1FtXQN64BCKdcnH",
  "key9": "3jbKt4YvbA3P2w3qJcZ5vHrvAVNwz4gMuzCXL6gob6vPTk4bBWnc4UoGe8CU9qu9KHPZJkAgpSYCio76GEfNrkM5",
  "key10": "3Z7NcUPm1y24pBwRbbFzAN5ZXmgDBng4nyCWvs7VgJg1KY12UhWnayDmAyZPGYukv6UNneT2CqEAHKkKLqjRejNq",
  "key11": "gN7RKNrKyyWpvt4p6tWkS1GKKK28cxJruTdWqfgJjWPEt3HvinGXtrMm9EoBUaX9abC2PiRbAJR7HDbnMu6CiRq",
  "key12": "3i1ZTDeqLzMyWVZ9UVNn32GX5vLWvrEvMUW8spCAkRt6eEJUmT8qdbMbBjaWZkJ6TQ4D6kSyQN6Prdh5Mecwr1PY",
  "key13": "3FxUL9jqZyboARZpy7uuygM9VZqSyQJ97mBpjSHkJZFevur2LdkkbyyqTgF2DojTzomNXHAJTrRzAqLzGEWYMsFe",
  "key14": "5fjTBVeYXS8w39dAbbxfuhH9NMcwfWzrJBsYEv5KfA1XwLRuUPp51PqJ1R9Rn7yknuPW74WvJR5Bs1exVSZrNWKk",
  "key15": "4xuaqs434vGzNfuQVg9X7iq8sZu4ZHLbVKVpcmWzyUBN3CM6EAP1Dt39mdYL3TXviaxdYKLq7gFqBHMAmUdwr5mD",
  "key16": "4ivzrw4frSAgbwYqmzCAsC38S6RWYM8NAnen9bRy9ubnTSE19WXNsnwG8UJGNepHaMKgEHXWG2hu1neH45kYzTtX",
  "key17": "5T7YmNhSMEFxqHggmcfGT2GGov9kRbr1JctWGzMH2ZtQDNstunEUGeGEog996Ugk7h8cmfvFCdoYEGQ3GAYh79Rh",
  "key18": "2zQwgJeKLF9khrNy9p5ToG3qhi38azsQ1YAcUvJTbZthYFDdQ7s6G8jjyQAP5Bo5S2CcQVKVmEbfW1UtzAdh6cLP",
  "key19": "5UHYvsGT13ZeVcuzifJzi2VV8rc4q47da5vMk6rztiPFvupEjmbRLe91NtMNyfF313SDcLeFUNATjS6Ch77owRoR",
  "key20": "5b1boNtkzqvoH7XFGuPbwAcsDYwKrMPdjHxLmG3rPUriKSqW5psdbzEc1VXM228CbXq92d947biFwwukRu4kHJNx",
  "key21": "3zMukudenh4hLNPr7UoJEyH1mrDKVkKqZVhvqBn21rnUCRp1Tp84ndBenMxs7GgNqbhqoDUgnEzLGdd6GcMnBw1S",
  "key22": "5aNgLgzh7cpGRkpVsqSzmJBgC3Dw5u8jsLJ7wm6xsJq3wzhmGVyou2bpfBJXbp1p5XYgQf7LqBeBsF9S7aFeAbPC",
  "key23": "2E8cVWr8h7Ug7LCYFGZ4bpPJANbt5o5BCgwzmXk6xsCwhCfbH9agTv5m3xpUjSiayKEPr6XAhR7NSpwzhW6xRMuG",
  "key24": "448md2ASYic5UCnECdCfW9aQ8D31tWQ52E85LY9GCt7JHXYDeDuw7TQWfNF35JaWLjmY5aNtTbgg5sJoenaV9Wzs",
  "key25": "5cmyF7KEvpB6Qhnftj2c2iA5yGZqzDdDvSshecuMgiVbtESs3W2hFfmir7kZxXpGTcsFYu9oamJn9Bwg7C1epBV4",
  "key26": "Zj7iffwUmWsmxsxMnF1NfeAf4h58pUytpNGhCRu6epgHMwprd7NjSnrfKDrZ6GJCP8giF9xMjLdzVXdsPxmC4Z4",
  "key27": "57Jx7jtNuiJCVPuJjGyQNHhhL3kwAbe7GaxAoNBhA1L87iquGmqzrfADV9DHw7iEfCa4ffPFuQKjxRNozAWTzzMR",
  "key28": "iQmnzvKSzMycLW3kDjPBmv8uZfRcRzAeSEXaCx8WDeeKgGNqqnrv9pXRUh3CPr2Tqb8xLn3W4VWzY1v7kMEfwve",
  "key29": "4LmizXyYQN6sjorqUgNR8AUWbmfqWYpnNMhonzptwVxwr9LwHdKzA7CWbLbqcwtc3gnLq764ZG6DBoiybLoL8UAC",
  "key30": "5eLRJPNsqEvH1dCeW6bncFVCjF3i4K9eZpwzVFx1nbHmJwqRFs2fYivcehmaAfVPchNZ9uELzahgoz5Pz5QQyR7B",
  "key31": "gvCBm8dteJpsuyFRsykTq5ik9vEJevoN85RQwiYyVT7zqzhGa2tJNAncxVyBVDrB6D65C2UAvLPzARxotHEGgTw",
  "key32": "2RqoYk4uHu3cYA8Eox6NkbokkZ95SKym2gNXZFUF96nA8jhjC8Cjpbrxr8SSnykaVprUJjXk78Xh2CmUtECgXZjz"
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
