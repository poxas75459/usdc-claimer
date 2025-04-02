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
    "4SDPRXBENnu2Rs5FW8zhDwzwpHF9QuPU8N5RN38ZFaCJzyWcgeWQ6aJKS4Yi8wMHn3UixVUG4XHeSPZzqeUDwPi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31VcwoqD2dbE33z5NdjR3KCdu1Agw9W6jkKZcaSero8zC3x364iedgfrLB95FRpkv7PUpJy1EiUj4HxLcp9MHToR",
  "key1": "QT4mxjGrPeRxFZUBxAZUpGQnRNvMT5qTGu9ckSkRCi4SqEbxU8wZaUHCKZiiPtnXs81fdKZkDjuz8i68yzUDSMh",
  "key2": "4n7CgKE1JcErdfFZuoqAatMWXYVpEgGdAogTbRPkXudcUdxKDrT1AqpyXuAyvkt7nvTFwg5YkZ9Bhdm32R2NsrTd",
  "key3": "2PprsYWyee74Cs6ADsGFyAMEHeDqv3s7biBz6QkuuMVnc9HKEKHk2h38Ef4gb3vf834ijbCdwW6EomgL1uAZHNMu",
  "key4": "5njXHGKGEUhEaa3MqDe7GPsBfoBcdLgjCwkx6itW2irM7gC2KqCD2cKxoaHXLk64xC4uLYVMBiX9uCZJzP5sWxvd",
  "key5": "2ct1Tg9NRccsDc3XsPoAtRVqARbV87Gh4rVQZ4qNfNcSYEXif1JSUAnSct2krn1exSzeDozejBPmC493dqZxxtRm",
  "key6": "8UfzUvYaJoRzUGRKL3KSXfk47dPckGczb5AJNVcN58F3mBzM6YA72QnCG9ykLehTCSPBB2oQo4R3aUxPus5n64u",
  "key7": "2tEnJVW9ABMMQzYJbkA3ZJUG1ts2WKQmnejGpS4rBNeQ1twARaEBoyi9cyP41iQzQSueMnBuBc7tYV75cicnkT17",
  "key8": "XCDeRv3cueQfa1Exk5Gso1DX4SUFR7bh7c3fCG9KzjD8Dayyt8dzuDCNFLiXuUcDXsMyPULdLZRWbwnrygFXbSb",
  "key9": "2iuAMfEZHT4msqATDbxvKghBb6CE2MofxCrMyA6BJ5KwjMcGrTCYrVa5soV2ZTMmBmoBvFF3aqGeqVpYR7m3AZzR",
  "key10": "3s8YqQePyfcDhVqKH5rMnMLTPjtsAwo1uVW1wtSMff5hmBKVdSQfqSUCc9N3JHHnczzsrSkQ7k7gHiLspW3hZ4Bx",
  "key11": "3sSFt22RqwHUyaQoeBFnrXKjT3PmoGdb8uVWV18HzZuMaE2Rkw3reRJ7sniWHShpG499oeY83kgFjFyP436YXK3R",
  "key12": "5FviLszyvZQubagFu4jQGaTXaZrGZM6cEyJBkYQrvTdX1kB52Yp6RRt3XDHfA89Yrtzcdpzn4wjdwEeuMHJcZ84h",
  "key13": "3Aymt385xzj1TCwGWg7HpiZ8skvLt8moQtY3Hk6Co1LcmRYfvtyH2VpGSUGtc3yeX6HXdLP3f4cXDkyFJoARe5XK",
  "key14": "3c6r9vHnB9bgy6mz9NqPScUwWrthvwGESMvH9rGRjgQSwwnXqwLuDLtF9K3MxiKHYgxnxAJaxc3D1218R6Us9jTv",
  "key15": "2VBv9Z2NWhQw7DbVXKDVWtHWi9ZiqzXP8BTXmdJ1KDDY9ZzEj536sEUWkaTgtMC5W6ZvjJVJuSmJyMxeNVrPZqgp",
  "key16": "32Vz7icTrjurMdXQKUNfVjjEhf3tM22kisd3dzJjhTvtsUzaXWEtXy3TQswsBqeHZZdd2VNbLasqcAPDXDKwqpK1",
  "key17": "63FQq4sgGFGwy1T9NSNrvSKx7bgG1VZzm88NQGN9bymouuBXikJWqKPJgPnSiFrEbt7LrHJqu2UCyd6hQSRn15ut",
  "key18": "4V56Uofb6En1jLDz8D4HqTVatEcmX3hMUQjoPCxqmj3vpW7U97KfDDBxgcRzu5GynYGMvMkMWf6rQ2xyGXQkEVT",
  "key19": "P9qq8LLvvw8tZj6hWyWWFwjF2qUW1dxPQfQndunAfBJH1oPcRnZ1U75coH36x3igCX7LHmVbLDSDbb4nknWNaNh",
  "key20": "59rRPBpC2chhPNbT9o3wB72jCacMS6yNes5iGnhRYD1BpLnKaKsRnQpbwssiUmSk9RZ6Xxfbzwbp1g7Xx5bXrwE4",
  "key21": "4jGHx5rtqFT4fZAnFhhr7cxFYpGzoqtkB2CHKVvYk2wqJmgasCLvYUSDewFhY4pembXvbwxrCRB6gJneaN9MtZxP",
  "key22": "3LKALpqF3wRiiPBC8xoRGFHsxn2KYRheQKRkqgHzvbeiXAnYo55Wk8ffCDNUhen6RwE5MVkcFVFTXgbM6HuwHwgv",
  "key23": "4tkfUQFQW6A1zswX11qnJxy3oD9r5eZyEich8oHkzsccym7BmQspxHpDCAhREC5sVQ4qHNRTCDRm4cgMDEW6jr5g",
  "key24": "2M2LHC1VzeUaP2qgZnCDHFXu9yPrBTLQeNGbGBkWrExPDPvZVorBRCDP75sKGrNxBaW8hBfuctnFvKLw2VfV9qVn",
  "key25": "3h5qYifPfyippzivY81pre4K1WXRQTLwYewGdU9PX4TaBYr687kQEDbpe7bypMhXXdoNdhgVebGRL9Q1akNaRxA1",
  "key26": "24sWVgMcCc9fpnNwqa5bYKDmLDe22nuTTtzrzywfc1ptoh8tL83dUupbv6oLDxp2Y6umLdfPjK9CGKZa6vkQsXwt"
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
