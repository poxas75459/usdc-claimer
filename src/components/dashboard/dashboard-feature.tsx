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
    "66JUGXoppKUocziZLLHGL1eF857RvCqAfXGm4dexbFdJTarFDU65v2s9HyaJ6LB2NpgH6jcatDwNuU7EMPeeMoGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37bDHGUN7s9KEVCL5pDvtKHansiyvrEXu5wNDYQUucTKGdQPNDRrJzZCetin9HKFZszP1ieDih5poeWq7uX374XV",
  "key1": "cH9b66iuvjLGRLWUE1KivJVDgjVseWR4XV7n1CXN4PDWn4WS77CCh14iSpgcR39jfTNgUCcvCBXtBx4esBawU5d",
  "key2": "2n6rk8ajQUx9Fcno9Po4a78xUugCPgEEYe7jer6orU8a8atppNRNaUVFpnGRNh31dqqi2M5CVZKyk5mQhkH99M7E",
  "key3": "27NZgpd6yuJM5DVkLuEG5L1kdP5AFvqGXGLCPvf9uTw4FaBgBFcTyRA2Z7rgcstxYiCjQAH8fd5Q8CiPwUnD5VqJ",
  "key4": "shDsqyvtW2y3gXvAHag1cofmv6AxGdnsr9xnX4ZxZfYXQZwt2tzgAaSe4KFKZqpbjcqxo9zqwqyPEuuSDPLNYrP",
  "key5": "4L3t7LgbPogtGGqb94PF34A9TJC6qHa7MDxG4zWJ842DWe7X5sUA7pj4WjftP1ij7kpxPAXpn3hBaj1qbohPXska",
  "key6": "4vcVDeNcjN7AiVWszCmS1acjEQo5ZZZRb96JWtJndCAwGEFBZ3qe8ttR3XzBTTRARjwpKhWai7vM5LzaRAdPkfmg",
  "key7": "648fTgmNkK2woCon9P8cqCP5rY1yQz2ACX2ZtKD5Fivq2E1WwidXEjvFgsA9hJWmmkbNiRKUwXnKiNfEEzAtLwQm",
  "key8": "4DEn5JeNQvU2FA67dDErUfLd9EMu2ZM9HQcY73SxmwYyh8yjPfWYVVHaSufZLLMSopyenoJZMofopeWcfpgEWqg",
  "key9": "57RhtUsJXdTFJaq17yvcugvYgKzqpV3ZdjuJEqHschMkhfMykGdHdsiUcevb8csvHW2TJH1wDX5hgHwaMp5UTozC",
  "key10": "3bcfdu1WppBygZpbKVWuLtiNajdz1MtqgpTWhde1D6WwiHhQxZNHpKWwrJk92yen6JoUjzQWXU8g19Q9gMRFeRiW",
  "key11": "4Wh3TUEdgpjFoDP3uhSc7oWdquUKfyt2RGcagdA1yH9gczphuWQncwWz4XEDgK8fNKxNm9sAkv8pprbxuj1ARJNs",
  "key12": "34Wq9ZC9LHssAgzWXPyu7MNDdrxe7rcKnqnJcbeiXdCSXmHzWkqyUHYu9cTQoJZvSixrDPSJMfbSYXhR76Tx8dcc",
  "key13": "5DxLxvijtgikpJyoaHKqk8S5i8nNPRkLNrAGjLnutY8jHWL8jTCyEMjA5pa28edbnLNcmNAjudmy723YDSuK8ApM",
  "key14": "5NHfiHcrFPVtQJy49sFeg2a5GPjfZwhJ5jVqCAq9uLZXnTedXYR8rSA4qhtn3Q9tacYdgTG8emH6QSZd8V1MwDqm",
  "key15": "2gjAxBLY31gN9MPpdr7hX7WGqpXGhh51JZKcfaZmqDgFRkCwq4omUKJmZaVDd98EQmtdD5XJiHNd4K6GS24NG5iY",
  "key16": "58uDkFZEt2QZJwLnpQfYvEvfe9CY2tJAUEhMJjbXgQWwjmRpmsH5ub9XczqYXcDhfoDXdTBSQ8Vo16NzzzvvXVrv",
  "key17": "5z2SymWv2GEJU26ErTUp6tf4dsGQDLvUac3mqfQUia2ZTMP1DZPt62m4WNaxBus7UuVpNQ3srLshCyhCkMkk4dre",
  "key18": "65VcRf2jyP2XiqJD4ZzKEGD1bfqWazPxMKh5pSjPtKhmrDqdGEFzZ9GeBK4RSrPkoiA6HevH8AdcYbshcwukvZX7",
  "key19": "3isE5L3xjzQHKXpa1URZuLmqg4cp6UEWGLVwygcMSieoGEhmb6KM3PRqjcCLGQC7K8eFMC3nExMDz6BFQPLiEEmD",
  "key20": "4AsMMprZ5KRg62PwWhQwF15e1RYuk94A7378YuPkBJvDHKEJ9NjTLRkHCGy2Gdu1vqmrnntY6cZRDPeYryzvTEKG",
  "key21": "64kRSvwahJnnAF8w9JhTF9A8hisbiGjejf3udT7xE1Ekx7jQXEim9D5xAFs83oY6mh2wVZQk6LrTHB6uSMtg4cvG",
  "key22": "4zC25q1CmRNKM5dfTioKgS7e8NLRtzzi9YdbcefDUfdkaMRM3Uo5MGHqFoATVNkZj9dtiVya7rTdsrsVNTs959s5",
  "key23": "866KR4Tx9YoaMuSdkPKJQweFARZSg8Lsr8tmZ3W2mivHmUhMQUR27qQ8T1DMcxCefBRJxM8q4Td7QNfoJvqsbZf",
  "key24": "5QCwHrhEgJkBmuA4kfhGsx69A8qYM6Lw6dYAX4w38X4Kp49G2krEjNSQovLkkqm8it5hjZBw5Le7d4pP5y1qsnVx",
  "key25": "5Y1wTHMDmJCrjtNE3vuJGMEeu1MHS1vpCUiVghVY48Cjj6U4qqtJWYj2mZUZAkWu1iq4EW7PU5SHFBQ2zJjMckbg",
  "key26": "3G7j3JbZ4V4xdwNmBXtRZGz7SAf2V4jNTd2arVW6HXncFM6VoBoK9H1RXVa73kkYRbwHZks7xedaDwMejHwvLJdB",
  "key27": "5Q5dWzeVsxrAv95sSpbzJdcRE1zGfupNw9zKaPHHaQeEP5RGBovKhHzoiJz4wDJspNW85Y4dRLDD9dfZ857ikAgN",
  "key28": "2AeAH1Tb5Lxq7HtF1hC6yZJAYradJGcQpCzJgaQeoESXXnujovJpeLsLWtQnm3ENkpTP1WV2AtAE6gQM8LRpNbc6",
  "key29": "2cEDJC1KNNdsu9S5KNLbWk9aWNYp9WqmdXxpMuevDvWuHz8DLesa4v7sEZTL1hDvpKuiyovJkfGHd9LGYStwF6fZ",
  "key30": "3ssnn2kWwQbBH1hX26HveMxexSPhL2fPLTXUUDcZpK3tmbRBoXdQzVfYAzh3RiGonVgh9zT7ukrBQwoNVQkhW6Nj",
  "key31": "5iyLfAdeXAaykWZXdLu9vKkv1kqUmCCLb4qSebnsbuEFj1T8n3or1vV5mPY5bpXEZLGqTpC9CiawLX4x6rWhQc49",
  "key32": "2r61G5cbVYw7t4hD8tctaKMAZkCnbBkqbEs5JwaUpsn3mC5qQVbyMBKeLUHxdBps5gvrMACeVybTUGusTNdUMmY7",
  "key33": "4ztgnHv6wuZAbSZVtMhcKZP2zvjGipxVEabA2GjB2dwDyXpmFwWVStCD64UCgJAZVnmvJxFACh9gg4xeKg9G68FQ",
  "key34": "4AUYae7KNhpqXKCZ35yttMo7yokUuTzt4q4W7kvfWTeqd9AC5h5rDHna3gT8NSyAgGkxfmZ2A8j67e4N9UNgVAXE",
  "key35": "4nStTwCiFZpBjncMcfpWYa5qhWr1fRpUExiv2ihQoNib7us1yjb36GtBfnfRS5ariKDPAUBLXPwKfT1txDWT6kWm",
  "key36": "UWFtijyMsHaqBpXFXYpyqjdGQuvHciE6GtuGV4jbW7U9qyaEnzfzdwVWn4pRfcYxzW3fi37qV3R7YsPqHJMLFaB",
  "key37": "2SGzhNwrLTjGuZzcfrue9T4MwBLCebMUDhcCA9MNvxoLjhZ4SsFz8frTf1T7WFFkbbDUcZJQnR2HePRV6Q2tCiVA"
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
