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
    "21geNbLa86k3ucNUiWGCPu13gE7vgizYdicaE5cuhznzJu856jZGTbMo3dLaAXGirhAevxS5EjsDW6gspHAjannx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hfjv4NsqkjkUixRiuR8JSeteXFP2SzDZxmVwbJxeM3rCFYMpEA6B1kaPfL4n76nd9Np36FxmTcVrdZXBTu1fJyW",
  "key1": "4Crg7ChNfg3MujchUESigUx3Jj1z9Jt5CEoQ3W7WwyYmApdhRPJWyCGk1mgneNHJdR1tZKosZKK9gMLyjJJR5fnP",
  "key2": "62sPt4d2ixZAYyHnFsfStC4kAoMdHYUWDpD2B3qHTKZfjk715oUjPCv8e71QGgYfhwFRAYjT1iy4aTdH14p4mdKL",
  "key3": "4QHKyz3JPgMBpCbhnYZWbXvPhWFem1XdKbxAFiAy4kNZKypgUen2rcLNdTAQHuo3VXkDMKwCgbrNJgzkCaLUh1NT",
  "key4": "2Txt3WpK9yAFpAQopq58vDb7yLReNwrqQYfdsgh9sWJZagjjeg1iQ4fptLKUXFNk3C6BayUd19bFQrvHzyfV1idf",
  "key5": "2uNCqcEn49yS3FppquZcJNRXYokUtvbnQ9Y2TAqmse47pqRjRVY8ve5m5UkB5Jv4CK3Gr2nVgDUAeFmyYrXugNu5",
  "key6": "2bn6bghE1vDWq5SUaux6VJFd9wzAgHiYuk6r8iWmyKUe3V21fp7tNMXHygStLc3HNKroK6k77rkaDHXfHRt5vDph",
  "key7": "2S7f8Ntf6Q4m4B3y4ipoRUJmLZhiQt2N61pfuKFGhFfKhLGjLy4wyH9Js7hheydwcDnxogZUMD3wgM6Ze5TN7Yk8",
  "key8": "5W2JHDX5yvxabpsVtbCBff6JanhFVEkZ3bBWuBpXS7PwrVsZYWwvhfNjf7GAqqsHnTE4vNTTRE7qj7d4CnwoNj4d",
  "key9": "2hqUcER5xweNRPb1gjRd8NKq71n69aUbB63QT7ZmupUxmPYxgbuReBeWtbF9JijoK196AtxvSwKLSRBqneA36Jzd",
  "key10": "5d6wB4s9dUc4KNnPixJSghryUxUnoFFGV5T5G7yqc9QrBaLqfEArrew7f8noE85F2eR5LmTzz8CTuzmazx8nnwFh",
  "key11": "4g5q1g1Yr1czZsbisAbCJWUs5v2jWq1pif7jRVTSLRks26MfsmT5G1mxMYgyDdzHubZdTgyPp5DQ5xQMnFFK7rCL",
  "key12": "3ERddkLRuMyU9d6SRAVVcWJnecEiY4LzMEc4h2s415KWj1jiko6rcCWwk7nbYY4ftEGoYL95WAqf218M27Cqfpdm",
  "key13": "4GLb5o6L2ATgKn6d2DcTzuVbLN3KBuJbXTdLwurFwDHaUBpwMe8d1KXVPvbMdeHrW4C8THsydL332KTYvaTNboxq",
  "key14": "53opYpfWikPUjcAYUQbdF6iFGSXZ6FsMjuCczfcvE1n128fmQPKihMx18VFfHRPXXMTVQSHGQ6E346fUqUiN7k4E",
  "key15": "3KKw7hwSh92qDgpQKdSk1o1GQFTJx9nyFVC9A2nmWKVb9W2WKcrBB3QFMqvazLMKPbodZ5d83x6nPbQJALezgqjv",
  "key16": "9Lr6JvryVNQ26JLEJkdVFgEnYSt6MLQjf1UEwh8HhRswjgrAtfPefoLHWTruov9kVT6P9Q8v9F6Ea6vxMcbfWC6",
  "key17": "35PbBJZ82uSojwy2DEDvxApFANyVcuoe946BaHAQJq12yoYQKy5MVXqCrnPo31w8dya5P9L9sHxmPEGjT52vv5oi",
  "key18": "7w9k9TEuESkUSCFR4MRg39PBJwzHQA7ToTSHBgbhFACXZ5MjPeDrqH6iFGP4xbAuErhYEvvc3UaKZFPHJDjgWup",
  "key19": "3qFZZ1HhHz4jD4noWyjxm8W2Spv6eYLCimgjbmtvtCMAHaG4pmmf82rQrzP7LQFFfbGjkMghZqcEUCVPiam8YNoh",
  "key20": "2QrtURzQKGM69kGVA5rVCk2Vq2vHYK9SGjDh3cF78SikhP4GUHkHQKnHE72Vt9kQ25rdmWfsG94KqjVTSCdUSwaf",
  "key21": "2UDbvBmjreCZiYj6ysHbux6KPDA7VR74SbbsuaRZS6S2YmKjVcmHqfLXkb7JEGquYWhgUrivApWEyPh8nFVrWZqH",
  "key22": "4eh2LGVZohzbUKJcvGurHa2rXJnL5zM8zmXLJKhHT9MauvWY4bmy62TFgKdzZwSzfXJyZ8uBqMijEWquZRH8MASC",
  "key23": "2jxXjXErma2KK5UB2QW5fpKgS9j4BAz7o7Ps2kgsjS6ofibyLbm6UEAF4Fd2VK7hqEs45LdtAy4upv2RjWVSLGRw",
  "key24": "4wVeay5DnGDetRv5u1JZCURcbtu4ZFR6pjdCAxhWNicdW3c7GZSbEfHC8Er9kMmvKbxjCkvwZHc4vN8AjWFeKuZP",
  "key25": "whsisRXPZxtu66yctCXGAQ3xfEMUncEekR7HuzKXPXMjK46mQFBnQza7RWsxv8msUAUBQg6D771nGyqhuXSy29Y",
  "key26": "gnhKJtrGQV5jSeAosztfMASiHJx4afzv2WmcYzRs4u1iYbiNFvV56x5uLNAY8G5U2yheX7GZr4RVx63KLZhtDj5"
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
