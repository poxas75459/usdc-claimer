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
    "4kk9fYX9x9AM1oxPAMWWCsBaL2pp1E2s4Ma5QE61oCiG9tAJcpwRUdVzaLLjHAGDnGK6zmZ6rdveBn5pjwPS9k8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SNxA5BCKx21hzAh6d4Cu4UoUChdXVxB9s46PzPEbqZhfARrVEzJX89D8jTwtjHppoJJejvyYh4qUJbSoegc7fh2",
  "key1": "54fRgCHNVbyyMYsVXE4Ld3uWXgcxjTzC6RvR1qUAkEyscJcVapva4MXNmVk4rrUkwztFSJBvua3wz9T2xkf9D6ie",
  "key2": "5GptPHunxueuM1DGDbWig5yV4LFYYBgCMgwgQuM2ve6WdqYfLrJPXHFjL2HUvUCGxMSp2Cf8LFzHJVqRyyk7iACp",
  "key3": "4iPDG4c9GRDHhrZTJgu11Cya6ZpKLwYpAc2bQgxvHWaakmvNXgqohGKTPsSwsEDqMpxfVJmGbvZ6maDswpxfPioy",
  "key4": "5Fxbi7MqD4mqwmAkrgPZgH4KGLKCgfoSpV8M5U2pQa1j96RrRCU1BgGRP9FitmB3P5ppwzH1XHpeDbcYPUBsSNV9",
  "key5": "WR2CVviiMmFQ8pkjmmUzy5BSYn6NjASoyPxfNgxqHCnq3mptGGi19CKAab2roygHsDbDitg1vjtyNUd9Yfeu54a",
  "key6": "3yc7zZL8WfHke8cQXwjS5u11PXZ6cYX38sNcHZ2SopRVDe8SXMRpAQmmgXV8SdW7pruDVdQkKWNJZ7V2EgGzndaR",
  "key7": "3yLQBhsqrobBVTmZk5XMzYR73Q4JQrhDMKieFPVtSKx7D85apR9KyFUEF6XsGQDJ9XZQ54vxmHft5AvM2e8xzT2t",
  "key8": "5TNSsiehjLBmNaRFX8k7vAESoUK4vhMo7AnvF6v8rZ1a1MDu2XBbdGJiUZecBZaAdeSaXXM39eME3bTvErB5AGyu",
  "key9": "4zVQyjBv3DKL59LMjnYXupRBzFnoGTNCmz9wEhDVXyL728bmeHH7RyYRh9j3t7kRuA5Gho7hX6BYZw2GjV7p3ZWf",
  "key10": "3TNmFxNfgCHJ2u8VpLiNC6bWXMtSZHmVkf1WSiBLCmUW1Xdss7wqoVKDNuYkCKggStVhYLNtZgSZUAGbgLX1Hyid",
  "key11": "3a94VTdVdcGu15aBtYNAtSeivQRuhLa9nqxpwjTqTgxJk5zFi9SgLG4xG4qoYATDrETNkjU96sntGx6aAAbeHaLM",
  "key12": "3FGp6Fdb6ShLCoMwQzkuqwcfNmsP65r3TkA8oCHtL5QCJLMFW3svGYX9VBmrzSzdeLwKiBKGiCfWLEUjBeZ7iqqe",
  "key13": "45gQZDVsf3PbJTvGBnCgawea5sZzk4peXpgfvFg3cGW3jNCJ8Q9FGjFChDVWSp75xZgqvrkcVC7YbGdGAz5ii9Rr",
  "key14": "5K1CEjeA9xNcx3rLkZtbRCuGV5qkcsLsdPEDkfzSt5rNcaWyF3X8QUftEsPzEFWmy15YXt555T4MwfY3SZFeX7B",
  "key15": "kLomNY1Xor5AAZTutB5aP8NRocwf8qDQBcnpaG1untXYhZfECMZLeJBGRzkcEJq2U7NhxJP7kW1kYiAHERQAzce",
  "key16": "5i4VfAMEtKE2meFGZnE3xdQHR1zAijdHp4poC2ju9aTZsWRFVx6931rKthKd6vbVnh4jxMAhjDjm7TUDYziMRRUw",
  "key17": "535WJToumH1Pcoy4ZSJLbXw3SPACZ69PGwPNnD4j4GwXncLSwP7CnRwjXeh9SRPDtjdAZoMzmkFTQcQSUZ4NTXNt",
  "key18": "5jGczdQmLbADF8jjGZ4fvAtdTtEs2jwdJZteqz7xKSQhiBAnDtuWxjbUYaGN1gimeD6ArnzciqEtQNzWCu4EikEM",
  "key19": "aUcFmiS8PBwtofcgm5T4ZsETFbFJLwoUXWrQDwvW5wrPYBskmUgijiWCPPpaprGgVBitwrvYstpfLwrQXJs6GSv",
  "key20": "2K5WsTARjwRV19mDxJmwnbKwBgSBuku5JfdnhetvqggzRaKZLCKwDdD6j9N9noMV4riodtez5uM5j6LEdUfPaEpN",
  "key21": "53uamcPDt4bhCRPcyTGu1MT9cjHkUxY3etyQNaLcUEnyhWfbz9Db9AJ5YqnNjNQ2himmSnJYNnJCkuH4M1cC89CQ",
  "key22": "1XPWDjfCXzW55ok2raHuPCtqUvyPwC6KxBwvwjmBULrwihpYDCK2oCtmmpwRpoZan49pupqHdnnaPHs6EU2SjTP",
  "key23": "UnoLbTAv4ZABgiqcTM4s4JTdU8WphU5hLo2EEoWzemPMcYBc2vGCXZPPATxvowzudJ2SAvmZTTUWjNdFSBwX4Zo",
  "key24": "31yXjow21dNgawjQjzKgEHqwabVWKnKKKwqVqdcUBZtGXJWVSZFBt48V7ygy7Zhm9PBw15wuXoL29R6a35vBXYGv",
  "key25": "2Jw72VPXF9CeYsxbeZwwYWMq47o61KKB8SjwbpuPxBw68zu5XfKVrJrSkGCBKD8YFyCvAgMPcFWEn31HUWL6MmS1",
  "key26": "runzbdWYFbVVnYPR3HtWFigHYMGCAjwyWAczx9Cnxg6onCsdeVC6qoGcqQrA11VdgfUwi2AtNp6eiC8Ds7cwej9",
  "key27": "2QcMZjXtPaAbVfCJDbRjyRTFjqAyKzkvYKWFeEbvP5XDa2fpZAdtdRD5gfrP8ebcjSdVN7JentMntemMmsJxSRzW",
  "key28": "eQrcNSYtJuWMwvAYh4zonDzXFxgEqrBDMpTj2j1xC5HvEePu4WsYHP7k8yaJRPyELUe6RLu9KDReqJnHN4QjX71",
  "key29": "5coHwykw1TrZVAJEZzcQV9R6fZGK8TEakUzKrLfVaa2RmGTCfR7tmVrwWZekH6f6DdApvqPYedLw5f1DChRZmhLm",
  "key30": "2JYNW74D86nr2cX8p6U3AqMya7HgpAJaTFHgDfjuQbNCsah6iSCk6AmuP3iWCGLa7zufKpHW1sbSqZ5QK4ndxLs",
  "key31": "QFj1dLccDaMvkKc5oWd4wThrY1RBki5ojDrUbXEFrMmoV8fP2PGZ5iPpnz1ePf7u6XwqTT7FpranWbMEhuXGxk6",
  "key32": "34bemVxUJM9KhGfKqHAGKvJ29JCyKHzitUNnUviJQEFWHngNGWPgUpoAFVb5tgmoAbs8K83co5rm4J9NrXikNPC6",
  "key33": "4MMYwPtk76eVb49YHb4VAKvq1tHi59XUKm7PENouQF4byp9XpFQ4PwnT5LMkcp21ibedFMWAYA42jos6PAvo21Dk",
  "key34": "8KJenAuzP9GsbK3gUQk1TCecVYaPKda5dWsptA6z5vy7uXLs9K3b4zffhPyqzBWfrnhiBe7hsUcEZ4vt82EkTkU",
  "key35": "vSfp3YDMHtYECDEHMQXGkdBUd1Eh7vK2qLVtrCCLuvRTzqNj5AyNNHKtSoVZuPTvFjnxa6GrKHQbAMFp1LJFBpL",
  "key36": "2MXT48ogakSVTYmCkVoBcZKWiFbKCPSzLqxy5eFHwf9VGYci93o6tX4jRgFMqfCKra1zHfx7rE2w2Cc619HmuamF",
  "key37": "4Vm4dgjYoGqReyNZQJG1pZsw1CxFXtuqEYWsa5ZTiwvwtbWBhFDWVt8wmGKsA7PXCBarAtU2CQAsWCh9HNJYvGRw",
  "key38": "2GLrqBcqhcW4nJD1rVXMvb1UHqhFoxLcd6gZKAWFNYzUTRPNSLQ6P1VcLCtkFTebceSqyBnbdgQYDk77H9YFmyf9"
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
