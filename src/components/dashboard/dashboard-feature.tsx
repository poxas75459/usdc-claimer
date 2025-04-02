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
    "41qfGiUhqbZBh7jpPxcDayoSGByjTisYwh3pmCvqA8CBJWj7eh7s4KD5Q3zqBa3mE6yTnp79GGL3BTNtSaUNfwLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JUNkBx4vwpenhES774VQM5jNAfzX5XhELbY2cUU9aaurJptL3qp9dgxEADUSVX7o1SjYLXboqEnoYcaWRsS6dJo",
  "key1": "4VCLgSJ2P3siNPWZ1oRPkbtGtmA84AKsEcqMrCuie57aNUK6NBs7jUHd7kr86h9HCnMsKJMymb7X4g62N59djnXh",
  "key2": "5b8VdKbmEyjTmGXDR89irbDjgU7YWwo3Cc4kR9hSo995BLqVZjSDVYjmAvDhqaRVzjb8LLqTvMnZ7DjyG1a76C9h",
  "key3": "42HBG5bknjkyXJRLJ1sLhjBQhWAhd6WWxEVNmYK4HNonBZkzT1Y8o3t8FcahaJCkX1bM6LtpFAzzYaU4h2WpWKoe",
  "key4": "2x7tG9MKZZJqHjGeqj5wk8ELnhoBF9o5ERhCNKokXurcxCP8EqMyVaxhF8JixaDySVCAqP5hQrd5nRyWCaQYWGDg",
  "key5": "2fNmBuw31w7JY5UwEnmAwJDbfr9zWSXkM4MKWyuyTDq63sxYnxwjrYnNCD9mg3RtAx6cK1hAQ9BrsrKpjJs6QW5T",
  "key6": "2kRceYBYr1baiiPTZvdrVg7dUStRKt7c15NF79WLGegyTMeVPo9ueWSVi8n8F26t5WCCKJFA8q4848G7n8655haQ",
  "key7": "3YGiz8mvKVHzDkr1caNrNqVBR3HgPoLiNfLSWh98ETt1zqKhPMXPvuGCyZdBCzFZfJov38eoPXLAyTFh2hnAJW1Z",
  "key8": "4Jet95QromKXD63jSDENkNH2KfC1iC96TwjE78DwoJEmf5G8mkhmZr34fVvQKZKjqWn9YdtowhaEmqUHpdeBHSUW",
  "key9": "3dsoMUfG9j6Yj3CX3oeypPkqZdjwJJyvZ44oYp7rF7xmtKv31ycJCTUTYk5SGPs6ejcxausgZwf3qxFxAgv6QJAe",
  "key10": "23jFyqfFGfjv5xKo8wF2Hs8ShxyE3DQguiGcDLnFLrmknWDjKMKAFBHjhL7z3MsNmhLgKgrhFHLVBv571TKTnx8w",
  "key11": "4SwUBWrcjFmEoUnFs3dLDtvDLrR9msMRL5jqX3YQa1gyLYQst6QGeUXKrxzKxYBMhVPjVWEcxH2Cmtz82UxfsdFE",
  "key12": "jQU869D6Pjm7TpdGmbQzR1MdpJMiGHesVjwSFWfes1XAbriy9dm11DnoDimswvh3EUQnuVkPCbnXkqs9in89nmH",
  "key13": "5B8hcMNWByBkUqcpWb9cnA38Dvsw4wJVxxWBJzBQUfyYVdLbpDb3oTgYBtBtgKs5Y2SJK7dL1tYDqiLCUNGM2sMy",
  "key14": "5Vu2VbCs12tt8YJAxaTA5nXy5fALNV9cy1iqbtXavR45GcrJYLrFoB1LXL5evgJ8mqUyAL2TJnKH3nZdWiRuqAL2",
  "key15": "CBbryvHVDR8BTTJUkv69GHnNBLvL52SMTLPSFcKuUZdHyBUttt9nQp6A8tZWG34Hnb9fTYz4LhSSWdsz5S5Q8pH",
  "key16": "63tYmxGi85PjmsdbNCSXyEThf3tbzF2pDZHszvSJwZyLJU5tj9S2LWCfkxdoYkS1voVNNxtHHPZ9t4w5RPYWDVk1",
  "key17": "5sfZqsVDD6DLu7w8q2Y1QXNL9hRVGYVFgDQgYLRARX4RRfN6F9UorR3QBMZigq5t2DhfEEptnuPVgbmshVJJgq1V",
  "key18": "4dic3bCQZXxYrcj9cq33MJWaptF9SNWiLuRkDozbu8QJpeUkTMkAozcEpziX2k49q3KsogCNhXhVxQzYZd6UhxfP",
  "key19": "3s1Nrvj3iQniwy1RethMKvsZ5JdpuDChuJ2HYH2sNf8MG2fbGJxH1NzYBaNj1qZyGu2kxzc8Af5DMBsB7Q7DK9Ww",
  "key20": "2W7QWcg37hEz7eBFU4d5zfN4TU9Xz3bserX8TGD7enKDmzn3wSgn5dZXQ4vZ1Ws8CPbFtX4RJvUCpVVPKHwcXaKi",
  "key21": "4DfcgEETWo1McYsj9o9J3TYAd6z899H92aqbjT5P4VSRF5nbX7mBoM9TmmDAVoAfdyVp9HA8YcqELRwhmaz596q9",
  "key22": "1mAfyHicNC8LxvUj2arvyKVWN74BaHVbyLV6jruSp25Lq3mF1U4kuLP39BXA9HMrVUioBbdyMEeoEHXad9aKWJT",
  "key23": "2aaGobB7WnoksRAQUGKZrLZLuzMKQPNpnTxyrx4rcpyTHmPXjKYEc9dGrfLbX8RzX21GJgDhkZPn4udRHnZgP7x7",
  "key24": "3fumGXWrEZZMSjozcefgnCd5au1J5PcnyTGASan3Sdb4bkoAbJdot7hEspZTWAFN94th9cR6hhBvvg2ZWXjar5uj",
  "key25": "2aco1GFjtYJ5qXTyFLhPLFusaEUQ3W9rtXQrXS5PYEPHQsGvvr4thDaz5G8H1ZXq5cSZrWVX6hYDhESTjEExipRg",
  "key26": "2K1YtoqdAVCMu3afzbz6BWe4RSpUgkEhMUZCE91aQECEkbnbzENtLwm6yCSaVwp9WW7MEz6JHdFPz5f8twyZkJD1",
  "key27": "4inDKP3XXAFHvxrW8rEx1q76GcRN21dfRcVW7taKLRXHuNZbMqXcmUCGRfugNUCDXZonJtmth4Ed2vmvKomwr44Q",
  "key28": "5rAX3YBUq9BsXsUJe6Gxc5SS2gh39LdpG9ZgJm9uwiD6Hdqm7jSAKw5ihBo6XExR3Bkq2WKtgyXwQRZzqvrdZVNp",
  "key29": "4mvGqeWUVx5N2S23MCenPbB3v6gb9bkN2ntGARLoPEEcCwd4dxsvKUMB1TMZSoz8ka8D4ViqovCgwAQdUnr6iJX6",
  "key30": "5DvwXvSB4b2ZzxFUnWqVD4VADRsaTKuNRERGbbLRkrchUJzFbEFPekAiuLvEFQE4ET4wWfJtChLi8yjGHsFsPGGz",
  "key31": "556CQi48ypUYnZuyc8WdiKz9oBBGpsNS1kAExLWMgFj6h6WKLg4cRcoRmk2nKBDNokgbDnBH2faPNeAF9gc175y9",
  "key32": "55C48kaiJkmf3DjebTGGDupwNwRkGQh9Bj4rbpkTWynjRCTJaugPK3ck2Qg8UWfNEtQdWEdah6xXCpAaNF2oFm52"
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
