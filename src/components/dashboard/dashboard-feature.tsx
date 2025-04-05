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
    "DLi7sLWeKT2z6cJT6Sqj5euyUcuSEVWfUTV8UN9ikm1JHP3jumV14Wf1Ze4e58NUpa64NaQvTfjiU86qnD6DJLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TAEiwLaZERBZy7XGMVbwc93pwzWF6HcGyXkEKMDFUYJvo76pS6p1SyzH3JBW6hcbvKpifPAhHA1h9vCoBVLpNLK",
  "key1": "4Z9u2jzw4gm9nvqpuGKQxtZV9X8JKKX6ukiYZCib4JMJ4gNyGm7dv5GU6FSRQLKFi49LqUA1YgnEr8g1fBjYiNJC",
  "key2": "22HTEbmpLoTBNoUNyWjeLiGQP4kX77u6ypc1SmtEqL3g1yPsE8ZARGvQrJSJpDFdYAGm8c8xcHuDe9nEQ9WTtQrf",
  "key3": "4vgfK81CmJcu4KKFWLcDusotqbvya1EpRCR2WnBrDcZRhaM9LWwKQZCcS1pNJszNSaiK5LnTGDUsvADKpzLNthUs",
  "key4": "3DCsFa98Yd6jfic6wF1E8gHrJnfT8sMZ7kjZthtmAmxtXnJ8JVGDDVac8jY6a7U3gHyXCe6ktNG5zu2yAJPT97ZS",
  "key5": "5dUzGcKsccbgL76KjTzDSummJS2VTUaArv15G7NFrUtCpAESpLLxLqABKSXzWQ8YjS51JUvearSexEhfXx6ncFqH",
  "key6": "bScfQAftahYC82YVoW56pMJ8zbrGunpfrK85Ue1ABLJHKXmtfp3A5GgckDjHkXqo6tqNv5RMVxYeSC8teZ3CySH",
  "key7": "eFyromF2m5XC1rUNTEahiST5kXWh5kQkm16irjDymYr4yf5n73zuW8NBNHs4TEpPAd1PHpAWzfYTnW3c6BjbdhU",
  "key8": "6JqASfHvPTHr1MNFA7e1Gmg5xfYMEnvxjMLKDpAzDSRyuqMsxoKBzVMzdq7SeyFkzAnByBd9S2gn6R9RgUDNtZr",
  "key9": "5tfpj11RFQ7ZVGr4MMhCbGxzjZx5Rx3a9qkaMpbeoShU8yFiqWGgZeqMkNkYgEcdmfzV9peji1E9vq32zwo6G8Hv",
  "key10": "5U4SV7WW7udWzcaALiNqff4Q3hFyXYxhjzScjKoazVubYyG7khrZ8Egh3wSuCV4xEX9tYn9jGWNV3iiUxkxCM3Ea",
  "key11": "f4os2d9JDQdSuqypAMHsg4zUWjXxGPisMXsZqNNDqqjxR28Mrd3g2EWSBQfRS9gNKaB93SVEd6pAcNz8b7rYw6B",
  "key12": "5TWCDd7oD9Kdaqo9vpA4kRBDc3Bnp6HrF7Pbbz7aiJGohNKAs4czEGsWVmSTP4bkMLr2B5LAyRYuRpn9SJBdpnne",
  "key13": "5R4C9sF3y7u8cc9NFvwxPRCDuV5W5EMM2rW9ywGXwB61pscoZFSATLbgpzB3Zq4zz7Sz4Xr8NG3W4wwGkATvWRBM",
  "key14": "DbofzkLXjDhvzzmUzaZAXiEFqopkVdKBW4aG984DtvQz8WzLToN8KmiiNoWaVdGVzwr1nzxvvAtHh8yKNbNSjHD",
  "key15": "22BM7rs2ZJmxuZ8mgKMMZ3wXJ6NraqGhgvqz4kmMjxSm7cXkMhEnRiTh6NJGiPx5qD6J1ct5KdzcSV14mKMr4L1c",
  "key16": "KkNdukY6SV6aMnyGYMfWThn8iFePmbw11C1FWaXQDwDKCXht1FxayQWLTSdLDdxaZeLAHGivdYCi7oBBjPYaZKw",
  "key17": "w88wTNb26qyWarU8LSTqwXucmX6AJcGRhGnwmrQ3zojNafvVpqTm7baic97rxPjvr1KYvxQYaDzLHMmAA4KWC4F",
  "key18": "2Wx417JhCp9A1piHqUx97iAqohuvhiiTBTXH8W4NBkH49CEKj6eo5sK5JJrkNW5Hm9ND149VBDHXLBTw1QX4SYik",
  "key19": "3U218QzVCWU9nefZkBxdFe6Zq2YVRQwumgud2rR5VcHByFfwLfk9AdtYYR5DuKv6kv82nM6c6CwSoDEBzB3S8T3X",
  "key20": "391V82T3ApYLEU95oDk9RPt73WWFyRV4WXibSyH1zbWA6FU4MeVyxXd49tvfWvgNXQ4z5WJgD9M2xJcGKSwpZnRw",
  "key21": "eqmHH7LNJVRwgjvxNzdSoKnQ6VPnaPn9r1iNkp5CbdAkQnTZ8fAQBc7F73aZB3tdQc5R25fawaJNDiUhpc3m1Fv",
  "key22": "543uNaZgcACBLUQSsAN92vmsQ8bzb8r7WbjgE518c23MqQdonAN8AxSaVBbhvdybm3QNefXxsmM4dGxeB56Tf4JU",
  "key23": "nQEWj71dCAB7LuyrsuhJyezcLdVQYv4zXuyMRYsJ3NZaZTTJbavhXNDz4yU497Qy8RbJ5DYgQRT56r89ncLuu2y",
  "key24": "2ANVx9fi23ikW1ZGtV3G4VVHQaNfw9pEW5c3X8hMgYQd1RomD527RXy4QGZyZKAhyCwTYmoTxwx41kLa7jxF183Q",
  "key25": "2mqyJrVVejAhJhWyuUdtaG2S2jgkuVZKRz2nBBHi8kgkksNAJpGdsbkGGLzvsQ4MSq3RoUuk1gW7dPfhJ9ikS2ak",
  "key26": "45VP2BbhKre2DngKXHNtydaMLjdheWmT86BjqrvTpD9cPyyLEUmaAoGgRk3PGwEx4NnKrp1PigijmhP3QiHu8pyG",
  "key27": "4aLLnD8JULNnx3NHxe38PtATxn64YGLex8UuKcTrz8YaH9i1zFGrX7tToEz6YHEgqkE4LFefErkmHD3LheW2Z2u8",
  "key28": "28ZAhUuHXizpxktPZCedmjqUdZhsRyR6mR7oU6wgXFeYtzBPQUApg3sx3pAYRBeqWa4PLUctp4kXyCWkj4LzH83j"
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
