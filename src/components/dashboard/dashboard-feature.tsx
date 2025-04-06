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
    "3Mzx8pJFfiDm4k4gSbB38RZM4b7LTA5pk12UMaf6HcGpoEMc4hXrcTKWZyXod2AyFEj85tZ8eeXnkuGpcjdp1ryF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GE9kUj2NP3hmvCqZ8LQ3viofh4U1mLoeCYafUVRJK4dABoP3M7cxscRpf7yUkUK7i92WqPPgqdiB14LmaD3db8Z",
  "key1": "53PeeCx7UGfDEm9jNHPhFtcJwToUE57deM1SeBfRko8H97Ais7M5AiyE636kwPCNayC9tNRwxz8TaxAerRUfhr35",
  "key2": "2u937rbdbdPZuA3iTTQskRchmF3CuLsHPDES5Mcne819tt5YtXpfwYHCe6AEj1s4fNjBN5Bp4qwjCR93pebHF5FZ",
  "key3": "Lo58BAcW59uBBe7Eoqv3kXj7vkfmsFC95QLqw3w1fa2pc8zU6gvJyL7huf7foEmWj2wofmjDs6UsNRQxyBD9DM9",
  "key4": "VyU7BYqCb74hndgCb8WS4ZE9fqgYoxhmQ66TQNX9qaAmVdSU9J2zQkyeybk1ddvUdE2B6kfzbSVfYMzxYqvsF96",
  "key5": "4n1D4Xsa1L8QPediPEi3xu1wsnnJt7ojpp9ESGDvNnxdzt8V7BYXarCvoat3DquYdC9hbqPvrYqFT28Aqi2P4661",
  "key6": "42x8c7P6HQ9UkJtMC5kxvVZBujquP9KEu92N5ikGa9mscJ1x27vFhcYTVoNCv3B15Pmo4DVBD3nLJdEVA8t9rRXa",
  "key7": "5cW5MfcCcVdjowVyKsd9oiSzqt5eKdDGDjA6JoipHdZDnr52yWoCGvau9bMjNAmkrqyzK4YsfB7Usgiq9BfkNgc2",
  "key8": "3wLPM7Gsvvj2aiKnkirb4qoqPe25PDPM4F79XDgCaNUr4UnzdevYjQyygzWgewFhgV2aL55nEdrnByRS7bBK4jBu",
  "key9": "3647qVdJfwaKN4u8rz9DNeVQrQk2svH9fZ2kZfiXDHb4N4gJioQPgoeGGQ5zSs1wicbtLMoFViQdfAw7z5WaWzV2",
  "key10": "5ynDpjHNJyeFBPX7jyoiqLYuj2JvrAGF4nEoxtNxaqT9zquSgMyiGVWFG7EYio6quXdL8KnxNZSeMnnXNphsBe7E",
  "key11": "h3DJ2DVHZqzrUvd4NQJDQTrcSG3nYZY6d2h1iyaizC2wEpPYQp1Xo3Q3zVH6Xmg4RF9ddCYkiWGvHspoJqVU77i",
  "key12": "4hDzmGQnu2knWJ66Y49ZcvU8WiooBbjXHyz5uq6v6chfiQwBd11mXTAGsytiXHJgFuTJm9zXC1JNXWGxKtMmBTk5",
  "key13": "NmeBQVcfjfa8CuC7jZyyqSyzqTsWLYwRpDvjokKyQnDvrJ3We2UEQZTdeUM9DQkuPd4McfvsqixNmbzkK8jQACD",
  "key14": "47y3tVFLx8X8AhFAfK5v8sumrNErEVacahsWTNhff7xE8FA8Cdp6McrVABanWnpuPrhEPxrKR5BLb5SyQDMapUBF",
  "key15": "3JzksQjjap73h8cLVe6ivGSfnoguQrwDZLLX2io5Gu4WXDQVtzxBBmmQoFcexcKDd96EKj9BZ1PQaJXKmkGGVJBM",
  "key16": "34EnVBzVFkwCyC4M9SX7MDPHDmJez5xTT8VrH3SjSP5RmvbMo5UJVhcRhbrR5Bgn19qdUr6uUjnT6JTm2VbMHK8V",
  "key17": "2gPaLKqBbJpuXE9U1hXiC2ta6ez6WDwyqS2fDg9gZsfHCjjCYWW3xTThbBnysExAYg4V36hyiTszidbzLZmopFgY",
  "key18": "26vZPKNVxbiqPiYqj1PGjj7BDrUZWpojFmUQVmbMyEyXrzjUes1nWo2bnuuUN4P4DRSSgWi4aXzUqS3Puv7KBVLa",
  "key19": "4oYADsCZ81MoW566RQLg5iKbDy1BrVFtxHyG2QdtkJrKMFRu1RUSbg9N76wqZzcd5H5rvTMmVMm6fbk3MrxWyXqW",
  "key20": "4J4MeCF7jbz7RvAT2HsKTwpEc6Hozq8XGC5NrzNFBToNenSYzGEwufEKsAcsL9N8H6PHGiLb63yvp1Kdf6XYAaxg",
  "key21": "3dYnauuwTq3y5gmmmQf3MQL5PnbSmPh5UoGhoVgZbbsAHBvv7MkRCqu19epyaPfqPTzPaYfYP6ZTwJfPECZbfMER",
  "key22": "4nxDfyGPzY9mwAiqkzCZ513Uo5WnhhmX8QzVd29Tx1nAtbg4NhzWnTNs5wYeR6momEXNVrhVxcHsLXr2SZDAKwZE",
  "key23": "4hmedD1rC7EWtWRLw447vCLXiVZsiC8xfATFCXp2XjEqSrn2nYouwopNJf1PwMPsiFGtXMmBKzwAnauV7LCTpcK1",
  "key24": "5G946id5vJRFWy9rBHsNoxprtVMdrnKdn9nYPRCy3x9FHeD8TRhfvGwfKF8oBJ6Kcn49X8CZjapXxowaN1e6UsJm",
  "key25": "26AgLo1ZeGMHmKB1TTzwk6t7s8prPpmU1UwrzdG9J3qhP69tLaV8rDRBmjbPk8PmfXCGT6oj4WyzbfZWMC8QP7xA",
  "key26": "2Zk3Pg6zNgVU8LzX6qPXfE2noreCS2yA8BXmPtYkjdDGqRfGF75xTu4DN1T51wERvVhsRfBqF9brEHmjfAgWoQRa",
  "key27": "54JriqWVdMk4YJUS1gdvbZQWVYEu6cLpbBaWZYGtY9kgnJBSpLREjR4X5TBETJocjMrE8wrwh11UtVYx4juBJ8wX",
  "key28": "VuSxZkr1inSTPqnRvvCp4oKfVEEXq1DNGhHESkrXVSTsYTGgozKQ9amcGGMcQVTTttvLP1n2HStwwTVFrU12Hoc",
  "key29": "5hPVAw84npj2QZr8P6ZZ6emrp3Zjv4ZLTJoFmFsEqVCyiqKBNmxnT3xK9H2w2xprqvVTvNxvrLda7mVMnuQmFQjY",
  "key30": "3JCtEWkvr8KuAhJ98Y5h4LvBAKkyNMpSUAJQQwf9ZXcEWSDfj4Wqodhv4T3SVyDrrPLVMsWByvpYRvT9iw742gpi"
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
