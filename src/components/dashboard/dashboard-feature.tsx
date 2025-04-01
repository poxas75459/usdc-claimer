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
    "2fKEipmriSwhfxFkuGrsNbFRkhnv3272m8WwvH1xGjRGFguZY1yG7WM6J1C6ogCvWgomesoz7xsNPETZUC5YmPTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nuYMZbdszzPTvsyrG89nB9XS6cYTz2K5qxVSMY4cNiT1UnenxtpuuRLTgaADWiSSfM6Avc4orfWMuePdxYNvZZM",
  "key1": "uue2Wof6suN2w9TXKwjo1LmtyrwmsshcgYjUeZtnLbaGMmCdE9yXPJHz378iHmM9Q7pQmmRn5bioeC7z3tRGSkX",
  "key2": "58WQGrMVwQmZkao6aaK15PKt7LgGfuEMBa4oYoV7gufDGcjDGAtQ8ULsWM8pR44JV1is2t3X7EZ4TqmBb8ZqJ7UG",
  "key3": "fAZE6dzBjSbsGAzkufYq7w85rmyTX2H5np52EHSap4tSvtUFecfNTTD1XQg75FG8kxdVZbAkjjQR5MccLSpLqXw",
  "key4": "37apXehDF9tg49EBjkP4NGvZ5suzMPWjZeTmvU3b7pyKHRey5ZKgNL1drBhRVpLaijE81ULtkfFN8F99uVMeWtuS",
  "key5": "37EQKRPLLkkA4J8Qp4XNd2BbFcq212eR1v2b9gGCRsn54ZkErU7UyBsEaSbbJrQGXZFY3iCJAJySMuCzsjYGx7Ur",
  "key6": "2mLQ1MAsHcXNKK5muKm2HSp8YJkZ2QKHovf9BEm3G2YXrmoPqbPwVDU6MLT8AkCSFCn6vrgqHrsTy2CLJBxdZDmn",
  "key7": "4w36hq4tPuECeAaN3Mps6SNG463WJy8Gw1mZ4RLjRh8AaNe39DTCuJJJh8mgoF7aebPGTMpfGuSVz1DxJrLf3HdP",
  "key8": "2WH1mfNcfFB2uFanKkAmyBn4GgEjBHgmUP5DACadZ3SrgeDEw84peJzhP9LnQzA9Ukx5N5KBSaNmy6p9yiE6t2B5",
  "key9": "q7CH1hdLdX1onFoK68ozatNKJdacbCeY5MAeKmbqw1a7zWDEAXoVFf3qHB5Z4Qvc5XzSXs73QtdUfmPtyWBLSXF",
  "key10": "4NUoF9V8zZhHkeirTdx3sEcgNJ73cVaNwdK2L5SXBnqsonS3kSxG1UPprmMXX8hSvXFFtP89ok8ArYJK8Ker4deU",
  "key11": "32qZ3K8FKpCts7wq9iCxizQywGhueC1fNh8tewYVQzae7BpqWeJmi7TmAHVdWXpwpbPihkdT5dktGMLukGjix6EX",
  "key12": "5pPcuGew2Gx6TKVj9QkzF449f9aGAHLQJpbxYMoat3o9yqwawFeFGQtPVHqxsHYf5vpEQoJA6DiUnrs55tdY1Hq2",
  "key13": "5admKaSRiciN2YgPhVJPRwzf5gyYjgJ84sYh7ipA9n8Jxm2ZvQYrm3cLV3kWtD1VFDGWwoRmkWzyuhZHzcxpDcdz",
  "key14": "5fjBG3k9jnFve41Y5hxfF7opamgUfb4pfbJmYWdiMphuHVBBQJgMLNnVPgDFwwxKBB7GuaWnssrqg5Fiqg9hQffc",
  "key15": "2To9v4qRkvgeoM9AhShbXEewXAkfJguzzK4vMxtU9FSN5hXdwxHQAxZpuSQNQmBKbuwqcXxX1NjdSyBXKrbJVN2w",
  "key16": "5WtuurKHnjsvRLkUofqfqhknqsMygByvsBR73jy2WD9KUvfnYkXSeVdZFfVpK938uV4K6aHS5VX7veip2vrMEL35",
  "key17": "5EnaCEBc2WxDj6ZM9nCPDz3xM5LnUCJyEfYnHzDY9GF1V7hzwWgsuda7UqRXmShBXijKA3oLq2AA3csbVjQ6wWmq",
  "key18": "2NYAqsv6vnstKMh9AWSMyV4K4g3GR1FRA3WioZ3qhxBeQonrqWXLZaJvRnUwSkY16thLgq1LE1RRCBnoELePuSEB",
  "key19": "4ku4EJzE47Wr57w5y1qTa8RkUDj9HXfzmyXbyPGQZYStXVPoBVZnddbrQjuYgXTRcH3gevxdz87vSsZV4U9ZdZej",
  "key20": "4Y8girAeQUBEvm1GLy6W7TDvw7wqUekGNYyi1AZqtr473zbt6A8NNGeHvys3ydKbgSHsRa2oWFRWs6GHdeSm3HjB",
  "key21": "3Kjb8Dd1eVUXPZfgM7rnfVxyMq7MJHpqEvzBEhizGBVEJF81Sjb8FRG1AJcA51c7Q97yW449xYVJd4jxoe7qsDjo",
  "key22": "A323Y6DzRWx3YH2orWemrA27LPeuXAXejLRHtruG2NT7BTUFhQD5qadAyzWzNVRdU7P4vveYiouaNX3ojcFFVLi",
  "key23": "5vjbGaJNwosKY6TGz3icCnSrYbXfZdbgkQVMjRzBK3cq7o6sqYxynkK4NfF8gwe3d3D5dZPHn37xa2xQUWjHeHQF",
  "key24": "5bqx2xkiuVcWmibPiz7xnC81KdZ5QAT6G82SfUhJKzSR5ov2A3rQYMPrLS9xfy9etMfE3jnK4AsaZwNp7oL6tqNN",
  "key25": "4NfVBMXvBcQ1uBGKrZZGMvTmoHdvSyY6SfD3UaMAuSgh2RYmXozzsYRKo12g2S4KHhiFLQPVvZm4STYixbFxhtVH",
  "key26": "5fWJzwq5DujNyzfgsVoaLW7C2KV4JaSVVFZoddGN7QLULkLghomEEFUk4efGyGGvsbFWKL2bnqNu8gFT9Feop76J",
  "key27": "AJSDJbbTaFRnxLmH8NkBcij9qDAcdq1RGiPdrvEKCBnUsYVKtXaceL2WxCoExZMH5iWpEw7CEgcPM7NsYEfmdP6",
  "key28": "4roy9Q2fSsLi1X8CadWnrMetaCZs7cjcx5p6RyobqtnmBXq6SSBmXmFsDJdKRG7v3sCV5SfRnsY5HHnAjkcJoZex",
  "key29": "5cjMHXdXR44tV2nP7VRWyHEXMeGCunfGYiATHKqzMqquhzJKW3E44VPMt1jFoxaqhQtHitLbB4xx6yue3B8RVggX",
  "key30": "34mr2gk2fHcjW9wijDTx4ncCqyi92ZuUdSN6abwXwdKaUyyBKgb9ZPzcNnKoNUqFdn98AbFZuWHUm34jVsWjV3QV",
  "key31": "F3z1YumgQruh6tUWRqiQ4i3HsYdi2vVbgKb7C84FY2JC2w4UndjfmX1or5f9G93KYEphABnn2o6Vs9UMdpDiZV6",
  "key32": "5VbXnW5fKxbKX2WEeW2bMEikAHr7NwSg8VS98Lf7WxhgJwev6MNotEzzcAn6ZZ9UGfmXwSRvLPsUaDrbmDiDYCzh"
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
