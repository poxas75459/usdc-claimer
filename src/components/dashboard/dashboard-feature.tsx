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
    "WR3y3WkCpB1RV9AcpREpYMuuqpbcFvgcsGuqzVgMxAetcnUfWwCiX1VHszm2xQAnz5uxcQbvTD28REkuSeLBvxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38x2VVcL4wvwQHx1tkaBLhj2yJi3AkKxZbETke5nMdCPKKkgNeFCh72tgrBicREHUCART6JJHuXcA7FtJtCDM4tG",
  "key1": "PNsYxAkgh7hKzY2EB9wbjF5q1fNahPfs8H8d9Uu4KknJRYNNMcdWpM9TmNrB3YNiJ8yUqjrXYkn1pHAfutQqa9Y",
  "key2": "65GJLAyZ47TrHkQ5CaPJNX8ZpfzuPzgsdngc8KsgifUuiFbAuTDXR4Nd96tNF9viM26RhRhe21qPxZZ17osz9tMa",
  "key3": "2vdjhVnGa13u6C7oExQ7jTLSFirJ7SDiWFEb85KZiUGF5D1naTTLs3aUpMmMw5Y9bwvEiiRB5sDsKvBs9NRHV2mu",
  "key4": "5ermmUesYj2wnMD4Abq72J4DXuFVoX9qwat9aozTjsAEU2Us1TPhyTFUtj2aU9qEaqLU8PVrojRRT2mY7rQiQCQu",
  "key5": "4eqkz8qgfYKMirZgSjdNzpGqt8Ch6DyX3vqXenXQZnW6ZSMCshBe3wumprTyupMw61ygdTNGdL2pPoDMdGBXqnf8",
  "key6": "2hFt1TFeuUNMgfRdcsX2YGaPrV7QFvzn7L4UzkFkNQjvcRiVgB5ei27zpXjdc2GQJuRutKu9PwbPGFDvpknYPKqo",
  "key7": "4NW16CFhSzgrr39EsdJotoTxwr3MvmDkEDg47xACGfmETj9WpX52ozYUkHGBt8erBCBNDvRsDfVYt7dht7VpoQXH",
  "key8": "5Hi1ynNh6xsrAc7kqcHAVyTMUqn5aVfpPcTi6aXgnbkJBeNP7T6HRPGSPNqq8UzDQ4BqM72HuiT9VL6nSqMWMVP3",
  "key9": "5FA7VTKbwSC43TTCkD2ZTVx4eo7C29RaonVDh6ZmKJgHnLkUdpA59Be5eM6gHSAHRjfd8hZPpXVkhMf6wy59NTLo",
  "key10": "5pVHyhxXvPdXGRfBWADtpVm94DhQ2hgKUgvXt8rKQjefhSwJinEHMjeLZwdEcvFwqkwXh1WBngJEV8z87KsB1YA9",
  "key11": "4R8riQvfHdABGFY5EPumar9yMWucXxu6p8DiW7zWNdHfG1wgV2LDUYUKh2mgcw7Y65PbfzsBXAMHNtk8vAQRUjXn",
  "key12": "48FxnjsgMLdXatdqMDcCEjR45hgPazsfW9Ngpj19BxACYYcKppfc9qdSMGiV7h7Gx2NKayBmbk9rERgU9SZZ83kC",
  "key13": "kdU6iZ6hLFsL6ry4XsNmz5XyHaSw1v1SLUT4L1ARJiWXmHcMV1FZWruHSVTdXj88Mpm9twaFV91mVYaaSK5ggVJ",
  "key14": "2gqg7VZ8n3oPHERGBcrxbwBnBc4rNsTRjSFZtK4DqUNhUbE1ZHW95JaCPiKyxa9QW9pZnCBMGxvP7ypyioVzePg5",
  "key15": "DNFSeaZGVrSB3i8cV3SNqonS66YPGSRBoT78ci5hvpuW5rhWefDJPPaByqKybfVc6v5t6mDpqqmRgbxewMbXcpt",
  "key16": "2wvBYhm9Qkmcn1cWSbZCoR6gWEFTS2J999rcikEj71X114xUGrd6z22zqWKZ3iokViHTHhB17JLXSfpz6zEcGdMc",
  "key17": "3N2LBXr8DfkHNUZ3jtXDqLXqXhRf5yFD169Sjf1JgtYM2VMntngttwGXE4vc7oAtufjjgXQhHWGGBs2FNuTrA3Az",
  "key18": "2Hmp6D2TycjMwuRG4wKkQgnsjBuV1x18jBVVL9fMuiMq1Vh1z1QzKKZqS4HLkCrrQSxutxWdw6AJS3xaozdg7Vg1",
  "key19": "5oHAfDokFMqFoHtSJEsJrC7WUFFhMXktsABvSotvBnwvzhs3FEKqC1r8P1uQe49QMa3ABmURJSFKRCA26mRjZZBZ",
  "key20": "o5HhPHS37FxnpZ4399pxdfpKzhrh1NqAPUeDbwMSMUk7YrwUQEHauEEJxZdMhCdkoKwWU562e2UYJv8X3BQwXWd",
  "key21": "hYUWWoVEcvgYZQQnPsFjjuo4731J4XPq6muUytbbCHLU9LpfdLBBT3Ct4omeQ8sc5kM7QYKTAo9wUQNq9SQEAaV",
  "key22": "2XARcfTZZ2TsTLnEqNKa4nZkwiCXGFkRv9WScnWjrLS3v4YvDELWY6yVDMiwbz4ny9nFw4gX6TH9VB8o6q7y6Ww4",
  "key23": "4rtwMNw5xAHVbdWQjhwdCbXNkoxwLjmFmNaTdgnjN4JUiJMctkVxrwrK9NWepzeNBtWJhznJp8qnpkA1dyKCREUW",
  "key24": "4TjyNX1Qg9KL8MBrwxycfKWZun2PrzBfJ2Xra5iZWmaCoY9XidBWzZPQAi55DbacTuQaNr4Suws5jSUAScEN8bUL",
  "key25": "LmFfReXB8cwDd1MkpMMPgDo74HDY68rJhvc3txhyKC4HwA5cxVzv5t8wKCphUoGphKcN9ZT1gv52dm2XW7Eid7L",
  "key26": "3Johi827ZshGwedsVUWyCgypuNWaPZpyDvGt2M5CqWQTgWhVJXKvwWgHL2H3VpPBGTR3X6xz1iokhRC9LtctaEuC",
  "key27": "3yGqRJe95p9my2Ekv7F8CKNkDeGbWs221E6zJaAYKVbjKpLSgyASxx1q85RZjPxiVcY4cy8vmXjAeSjo8PJnmuso",
  "key28": "5ogWkR9VPxSU7cmYzmPya1EfkmMoCvzJzhFF29B3HD3ERH94XkvwhcCkp6NhHpDy3SzxpvqHt5umMj7GuM4axSkQ",
  "key29": "iWAQ8yrDvmBxikWWzXgytH38UFN3edmGeQ8ataTgpVeiqf9ky2uVaYWsTj3Z3wv8fuieL2eSMzEjwz51ffCG1ct",
  "key30": "2v43oTCwARDKh8RJQUtx8JtGxaXzeoVnwQNXvGeJEGTovVeYP9EAyAdhm8N4TYTQxiVj6bjmqCgwnEa64G85U3bW",
  "key31": "MAxxEG4c6bAT6onnhySTjxjsrve1kYYVnURSwtLUctkUDqvLL4kmY5iPEdbtrdhpkSTJJTTQGvDJA2cYU9MnsDh"
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
