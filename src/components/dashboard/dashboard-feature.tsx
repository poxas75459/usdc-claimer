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
    "2PJpPDSibbnDfHxbbTtMThAbNTSCLEzMfHdReaxcsWiFsu68q8m3rRQnt72KnUiWo71CeCJz1UgtVRFULzLGp6D2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46D7RSUxNYMMZPGq9zU342EoHc93jETzNbZtPrDysvoedmZnyfj8fDJXNXPzsj3N14ZYTd7vEN6mHhooxubH9pyG",
  "key1": "5wodkwrAv3KFPvNWvrYoLzyskJ6cYBoza2vezxpyNd1NKfyHVyit6YQshhSh9w8C7J1Ly2wwvW5oJmkce9URFyv5",
  "key2": "2zLbmGamHcc6kjSqegRgCqQZzNaTfqJpkGKBv93fwvxMsNmzMp2SfZiEqo5mpik713WrZ8wN6rEjV4psZwRawsGs",
  "key3": "2tmBQAX8ixvWsPqHmSQEZVGY5vhjxEGm1ArwNc29Hr4vMXJs6CTfQJhHVo4uHQXGpzKQBBKWgJKTD9fmP8U3myNn",
  "key4": "3oU2gMXUTFyA7X4BsPuyVfiS1njAgK95sG2Mz1jkhx3SkygDYGZMo7t8ptWCatRqNmDCoM3kbBr3Z5zZoiArFnue",
  "key5": "3QXAsqQ1KPmYnTQQrbouuWrrYyZLCZgLe6MFZjGfrF2R23fDKUJ2mkF2SNnpVZakpwGuLW4NSmPQA1qQzTWke5K3",
  "key6": "RVtNerb5W3EY4pFtPHQZd5ASZ3i8sZniQ5HGmts2jNF5BvyVo5R626SNe9KsoiFT8gWxhXqB9qZR6TJYzAsGboG",
  "key7": "5WgKdYHSVAwD8xX8zNhxeEXYvfChgV3GhaiVNKkCkSshu5nRLgFAjoM95YwKJXC3Zgn1mWLZSSarMnZWzmqLeUgY",
  "key8": "3cVpJaeqQ8VDfdtSvXueD1vKAj15Gj3wWP6zmcrhTk4iFnRV7Lf5GKU7GyeUa2ZfiKVqBwyEjjTTbsTwfk2jnkVE",
  "key9": "8oPQHRg6BDWHhcByVuwNTjvtjoDZFHyUAUZKgzQEF6qua94d6p22deJ1HPRyzgEe2asaTUvW4ZWhp6zxfNXsVtj",
  "key10": "4rKTBq9EydiRrzcmbrrwZKc1oH8Vfvy2wyvCzFyQD3HXZodfzZdwYTHromj9gt8jcJygTnSBVaD2edgmmUcEJEnX",
  "key11": "4BbuCXazjyPVv7b68A76ciR2y95Sz1VqatqrXugW2dhy5eveuViuFkjVgp6UCcRAfy7qQ6EQAs5ihHTvrAnu79Q4",
  "key12": "5fQCyNqryhDRAsFKZQVL8RE8UPkGLwpQRyXQBk7aJeEvHFr9Ygs6Q4dVzdnwaLBBBpL5gxqpEdJq8pZfQm6NqtP9",
  "key13": "4qr23d8GsT3Pgv613GG3FTUnBtm1NYSca5sEfVmsxQkjsXVAbBanvF1U6jbD1JGb7QWYVEmJ3hLo2gGCtiEsBVaX",
  "key14": "w93dfWqaeUzc74Lsg6h7Cp7VqgMsH6yDqjeAt39p11epKqBZPVG7LJwdtgiJjtF8MCmXNGRubETKspX5g34pJJo",
  "key15": "3ZwgQadwScn8sMR2ytnLriCjgqb9aCLse6qwfJBkr4E3faniYx63poi5P9QQMujphePwAmgZT2N3eoWiKBEcvX7X",
  "key16": "5g9VGFSJ6kysczbjqWUPPm1Kk8g76oj2HVwGgzwNi7hzzRiY9xmEmUvEQc7nNDzwB79o2o9NBUZryQABd4ESmBkU",
  "key17": "54rXk9HmsqFrS1MuqBERDExVY3iVqnGXXfZgzMymDja99zf2LgrThXMvscooXocvxn2Zztbsxk2g19cfGs8PTrtr",
  "key18": "X3sp4yrjyR8hDfVKEkpYxABnQCmESLenig7JzHZdNXTGKM6GoUu8toFdMECDkB3zegf4u56bwtddBtu826ai1QP",
  "key19": "4edgpjgrAFRhj1FzJGsdDHnCN5XGWw9v6ME2gzmemHpYUQmzwMawAXe6Mg887XSKnCjerfj7ghgtZtRGJyoRBFuZ",
  "key20": "3nQVRXtzDZFzD6Z2gsm1gNnAx5ecModJbiqRidSvrtxeZjV64RyA2wnr2jxSPGziGAtPkymEwJWqBDVG3mrGTrjW",
  "key21": "2GbjyBiujhXHXCWybbnkE3ZEr16FSbWXwoEfX9tHqMHhu7To1JuwhFxFWNJvH3Z2VHAE5LT691fYb6BvmavcPCXo",
  "key22": "3zT2u6xBA9gwccySZaA1uXbDFrsuFt758B5kD1ttJvt6w4B5Gkq54xtkpmuMrptdwwPiqMUj3P9zaYgG2o85iGBY",
  "key23": "5cAYqkSkYaQCibfXCH9dGkxky1oViUQobD5SYRqokrFy1svBXGtySj77u3iEqW93M2rJwiMrhN21CTrwASocHsfx",
  "key24": "35DXMoUz3XaFR6f6wfYauoC74GWPG9imZW1G7HcjUfew3ShApGd6yCA9Zg2JKQtp7Ab9wtFkb5JP9tK52Y8VkyG8",
  "key25": "5wCtqkNzBQZ5QwjyjxCVh134TStGe55h4kh97imn9jdFcU4KMLPBf4yCe6ReBvUY3mJawGrv1uZGxUzGnMU8BQqx",
  "key26": "48D7i8fFLoDhUkoQj854SpQoawxcEr6TCi6poUrhBfqPV5jxF3PSbf5RNQWPdDtXnDpRGsu6nxkUi13rnt7QQQG5",
  "key27": "BkCPKm9duFzovqMFZp7srzrf4ZoJN9JCLb4tcNzbSQchaXUYoGLD2FQsmKyoS7jkHe9Lb1XEBDLmYiome9xLeBu",
  "key28": "5vr66QaYaS3ZUv3uUd4KJGQMNFDYRU9CBajrKobWWs1em8q8HRrZpxkiubbSL7J4agaUscvfdZZAtaDqn1xjYdhq",
  "key29": "3s9hG5weZ42JdDS5RhE31oikB4WTLmQk88f7xTJSAuize11wgz242qAb9A1cXQyUVUMvGugDRVtMCj9DwWgBPXnA",
  "key30": "2MnSxLS4QNhoZuHWLuEGSQNhpp5DQmuxGi3pjgpPNqUCNVTiuEyPCT6nr38gu4KQiJh79mT9udLUBqmdB3naZoyo",
  "key31": "vnGK4dDQRCocA3FWBp2WhomNCicuAoSHCgMwGfAQLmggeS5CvzxpfyPtqEbvRAkuUwgsf1PLp3o3gDQk6uaQ6DK"
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
