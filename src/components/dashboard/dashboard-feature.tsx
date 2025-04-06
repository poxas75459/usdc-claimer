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
    "3bj8yVEE81B7gz4Tykt7KWYmUFeVuoztTZn3PAQ6dyUy4enoXWuhxHxGW2nxbjYYNPnHXZtgDEfBegzNBG8y2QBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66HF4GMUkNQXSHey2jrcQ8v9CVVrktAZVND6faEFqqBNCHHC7oQWyR1SmddFS8Xz24jotdLfxVYmqcDRq6iXJ55h",
  "key1": "3shnCdshmcWm2xoWMmUbqmYPCQ1muG6hYVuGGNrHMJBYnHZmZLEq5CJZMHFtQ8NkWtqi6iP3LFFGBkXio8aqEhXF",
  "key2": "2ShwxGwV8Hrfhq5e6XPdmZ1Eb9iNgAwGFGEJLQMESwnCiYJUU4LezQYDH1YMZxVrLcVsH7rh3RVmGuHmxWtMq2ia",
  "key3": "3SmraG7KjtsVNLKgdDkjdGS6gd3RyuEvfTPN5M7jj6FDTFVwfD3T2HGssqSyz6woT1yemxUXmbFUr7DChBDpmCbA",
  "key4": "EZS7xi5dYZUmJf8R1uC6EczoH9ZJV5wdKy8eWs4aXXLCf8R2kYhPButeHePzC8Ny1Cc36VkwFfiXKPELGCXBFWE",
  "key5": "4XyQhthmfJMxsW84geDB9Na2UG92rmn2r5kkD9NPkgcsuxXja6MQZQNYpp2kB7LLSWRB1kB6GSjgrc5ejJGqCKs4",
  "key6": "hJ1rVSip44GFkPS2R1ZWW1jUP3QA4Jj7JKYiDmsR4UAiegD9UL1qEFExDRYijeYoFR3KrQe4JHU3ySo4Pc28Eo8",
  "key7": "51woHuq2eDPqwq2wr26x2E6nXqh4cwnGQM2W7JStkJgZG1z993ELmCskBtqH8rPWTQ2vzP3Bw8oLhfN9nH5qYhRh",
  "key8": "444Ue9MyoWxF4TVhvZcSbnybF9MHXbUTaxEpU5xL8pbzx2wujEecsJL7dSi38xjTkqDuWT3y7fLt1J9YJaATFGfL",
  "key9": "XSsEsLZiVgnZNMFegMGZAyHffkCD4aJcpKd42Sh4f7jQqH81cBCsjUXVYnVjmdSfVQJjvgQ3QBG9CbfgCQjyKHD",
  "key10": "67WJAr6jRFEzd1XZTBZv7nBtScjt7vkiBitPHZzY29wc5qMeAKnKu5tQJvMwSMBnKUPv5esdxyMWxYMSbS4rGcnC",
  "key11": "3ktt7SoeWrbaLDYQQPNQtqeipvA1fSRUHZULZrevR9waG81cjwsAwLMv4g3LgMB9Bryct8XSGT2LdpnxMjybJ7hr",
  "key12": "63iX9DztXzWpqsKAvx6kb28uZ5u1WBFKdTew3KDSsThFA4brvhEza356PxP3yxVutnmee7dZaKBRC8XjV8LPrs9N",
  "key13": "2w48ucFXuGPGMc2ULpJTDjqYpTqC7v45S769t5xbswaNPck2iAckuNRbRF1N3tMHHEskLqHXFm47FLbeLxhPVoim",
  "key14": "4oD3Cdo5BJXZ5X2SbHTiWz9xgdvoC6f7fuvLKk3isJtYv9LY2atpyhD5Tz9uYoRyeQmaxWeRaYgSSqB1Uh5hWnHb",
  "key15": "5UdqYp4UbHbgWD1GayYeN3tSeEAVPQiVd1d4XTgqUSk5NLaLsLwmLoqMFadcLArKgCAxw6UaVNjuQNvwMADUvwtz",
  "key16": "2iJKELwXfpgjgAFaD4KKzHWzQwkwoxLxfzoW4LS3Vyzw8Z9mGvGFtHppkLF1iJTsfWp8BpYmxhzLAbRu2SN1XQYw",
  "key17": "4r1VUfs7asQw9uLW3kMteJKRY3nQzW2S6UBoQuyuQxS1qi6Z5ForHayKUqGkHvT72WdAJRApF54ReaG3wN9NE46D",
  "key18": "eK7WTjuVqKtA3GoV3BUgSJy2XrygT6Wysp6mYw1wwoz4fr9aWcNbhCutNLG8gAFcK2Cd3wK341gwTYSJQ8cKoys",
  "key19": "5vZg8nNcnGGPfuTTUs5SJBuh2iX34zxqgsbmchceBexhkkvV1LuoufN9NhQWnEff8EDcyUuQvZ652rEXUvUsZFxX",
  "key20": "3dpEmmGKCXV24mQUTWmTgvUMR8JW9hGTm8WbLpAiR25VscHrejHLwgUyQyq5zFQh4fRoorc5sSLQ411QkWNRzi9M",
  "key21": "2CHvknKV8rvfLRaWzXxpVggS9o6WUApovNWdW5NGmiZtYRxsZuPzPpQ5V6yzVRxtD3utNP7cztdng5NcsHeAd3xC",
  "key22": "2wT1vupKbAfVc8nYuZLHu21YZi5ua58qRBHbsayAVcV3YutSL2U2ahbFEWFKaLVw4MdhCK6wu7jHrR9hoEpf1DTP",
  "key23": "4ss256gdhnExy5cptn9T4tbWKyGZwWc13mBt1A3gU8qc9wzrYwgzsBa7hiBk2tgoEmgaWAAjamPJbqSZSh9BwqUW",
  "key24": "2j57RNBiimRPcPugb57g3YGbpCPxTxJBCuKxMPYfW6kdPyx4yrnnKnvX3Hq98f8Zyuotipo7Kqh4gmEeuYbmchAf",
  "key25": "3MNDEfPNe7smRBzDrVkzEXsdAoVyZyojS59CNarUxvnwwpZXC5j5JZHSAZq7RbhEJ5vWb2s9AvkEG8M72qTyTPNH",
  "key26": "3pafJP4LAtrMBLG4pQqPvTte3tQdDTGmWgQQEsgbY5DN9B68bR81g1ryCuFxHREUxCM1KRiTWisSZXDEhRMbAntW",
  "key27": "2ob4uV5pFcwjrYXEAmFr4Pgr1UqMnzMzA2bZgeTF4GRrnP7qWK6LXzLvEm8jdfj3fA5PeRF5Y8b6sN3abRKYDLFr",
  "key28": "4CmQgFHSNZkkW3PjoR9GUmUvNQbW7HkuPu88Vrud6CAf7Dtye56hsjjKoSWNrK3jcEkch71WaiCY6UEVyPvT95Q9",
  "key29": "67goykd52sUwk3bVSo27g59nQoca6hYwTbSeZ1Lchex9UVbvJba5eVEPWc4RxMDCtbHdUSqb5Ra3bdjGJtnPLtTk",
  "key30": "3p7rWtBKEVJk79Xq3TZK6wejM5zFQQVibrhmn3GpfZtmV5eFkiQGXY6j3q2AXGJBq8n4LCmpn5PEkTKQPKiF2JC"
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
