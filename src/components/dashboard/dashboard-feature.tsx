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
    "33e3vWGdkAb4U1VCwvJsC5Mp4RUSjokdmgBBin76XsdiM1qTzwUnWXT7AAKJ8Fjfu8qYy4SivWmxrvZSNwhU13Cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GyQzzCn1gM1JStSDgzeEn5eghLRsPuiWoakuDoXjaBgmiaLT3pqoiM91kP2WRbRnqkLfgdcWvtuftauNjugkuzW",
  "key1": "5iwsRp7UgnazcYoUCTWdEkiDtoBHd9bEmymtdR58PbBnrN5hgA13GCYmKtpLS2HVtok4fJhz4DzGmMr9AmGcmXwr",
  "key2": "2QNCJZp2eeBHbh3qEnSpfvzWZ7aRX631cZvWHPKURRNkKRpwJdTii39xWna3RuGWPqgB6zYm58L36b1DL2BnNhxB",
  "key3": "se6r7vh2EBx4PDfv7JL1yysqDmZBp6eyuSfEX56qod2qdUPCkfTUAeaHWbRcureVg36iz5U5qj1nLpjHjKNmZTY",
  "key4": "63WwhJbXy75Q9mBBFqMYuGrne1ed3yNDPnr5k5Gakus69poUqeNccEpqLVRSBhiT47VT1zhfaUdqLc41GR6xkCVf",
  "key5": "zpGogzwZLrEzDrNeZBmZAnoLWi2JhqkMxcFWHfhPRv18G3MptQtWcrjPSoahAtjfWL19F28ywEUxNtX6Mksuqtp",
  "key6": "3wWefamLEGzsy9htZrvrW8VpR64ktogd38yM8iUFt3GXxPzuKa8j5vZH2T6CpgsPGzchEHBWJcQxhymfWd63sgyE",
  "key7": "4jtN5S1e9pXqsnNbbefvyf8Rk94Yi3DouujZ8N71ZSbUwBiqiWAFHYKxNQKrCa2dwQaHaVjA1HUwYdzgGa1L61fo",
  "key8": "4uchfAWYS8KiNe7yHcjRKXnXyPTDj6rJwACrVFJcDAWwm8Y1h48yJvB1NxKpAmvwrWUMbjctcDnGSbZ1kfD7JHRH",
  "key9": "2gKzoYUvzZURtS9jX8hj1BnaX4YYNFeqxqzsnUgitoUrSXeHL9wsBt9Voo6gxCxqBk2Q67XpN8YYnBTzJGd6e8UE",
  "key10": "57pX9gCktZKjhyaVnjvDbdy4fECQhiEVLt2dpfsKPzzndDw35PaQUEfHSzqyhtkpoHXwRHwJtaaTt7fKAufyUz41",
  "key11": "3UR9rNQYsoBgDnQJQzZETNcbJp6Cx9y5haAWX2yLXBiKY7s8hNTsYdAwdqa4WBAPF7a4MqnvKzGSK5Usup6YZG1P",
  "key12": "33dFL8xoso9kyZNmitRq1i1hJDg4bQGQdXUyX1u62VzspKkdxhus1Vx4inYTWygKqxp4pNteynXsr8RWuku4DTf",
  "key13": "nxYH4iCHMuz4YPSLiLyFpajJSS1B34uVALKzSagY5LdHnQ2cHjNpPYG24ESo45meAMqpWV1arF4FnA2dBNiUPVH",
  "key14": "5iYRYB2sv6gFFZbmw2Yp7rbqW89RDYhTncCsTb1nQFLSCxsMjcv2cxmkaswS9DAGnABzuQyRCA8iqLYYYx6zDBxu",
  "key15": "3f3vv6hCHaAST4P1BfvhHWwy5yzaGUAqa5BVbRkePfJ8mrr54oXS6Ck8p79tVp7pgJhpNHYpEJqSQF61obdjfE7x",
  "key16": "62KBXD2DFd7Qfubi3SVvkFHeHrPcQVN5p3NAJLt2eYQz6yTx14LiCYZsTUyvWjVVZgjBuTueJr8sZKT15qgg2WAT",
  "key17": "4zR8CWmGnhebY8GdNo9H6GzvXwmQBfNooCo1eamiYBEcY2hg28xwBzRbNkX72131jwLhft9ZWa5oi2geLrCHcNie",
  "key18": "5iuNwcJNGu2ZLCx5qRygN32CkrC8Z2iop2Gnov8KkjMvAwkRwRKuBsGCfNcmATyD9meUCFZpPSUe1JLD3T5t7mUj",
  "key19": "2DpF54Kunm5BsuPgeu1bQBGymtgmydXgQQFKaT2CmbQiBy2mUz1aZNB5naVXUMzo9sXS1VUbZLasWYTSgBssYxxX",
  "key20": "A6dJwhfkxR1N64BrTeTJ6kcQ5fMndGY2WHTcCfujrjNzt6boCK9rJ21rUMjzheqHty5tRXMcMoya8LtPMGYojZG",
  "key21": "2Y2XxNqzy2fbhXAy47aNtWke1YXQh9bVG2Rog8r4kydyUREiygQmFPZL1ck4G9j5NqsaypnbuJZStxoUxcx5Em4z",
  "key22": "5eXJmoWgpTBsVBjwkJoU2huFACis2TDAJgwzfbavTxaC5ohHwzuZRznmwx7yFwi5Cjoh4ficx4YdD3URAZQovesD",
  "key23": "4P6cA2RX9bCzdrXSxjFRsCTqyJAYEGX16H3K6FnrhK2VsfENgTPyXiwdEAfgfP3Ee3rjYf1AtinWEGRd8JX2mXyk",
  "key24": "3G4YAj4bx9q82LJdxkBBEE6Dr2pWL7zSKvfn4HiNNKzFdRYQ68zXGRHLKLTKvEdcNrjcWS5CuExB28CSAgwutvr1",
  "key25": "k7JydTmnChz6DuwfzB2tN9or4jX745wZyUDySX4Dy1CbgEXigtvkPqn8BtmoDvsusnGwgqXiNn2rHg6JYhPuK86",
  "key26": "fU7tkuqsJiNifT34bF3hfCGPjUuwWGNXW82Yqpj9VKWDkAWDo5mXWmJtqTBW9S3aNiqAyM9sVaFFVVPgfnFeWQM",
  "key27": "2WnvYYo1vELrUFnwydTMx9jYrj8Wp6DXY7e8RUkEcaxBZQZENSttcneP3LJyktSXY8vNJGCGL5WiF1qto64ppyD5",
  "key28": "39vXxvnydXKpKSkmCQ2JsXKNjTYr1nr4jkYqhngGUzmGLxFSyKjDqm7FdaRBUURPsPeiakn9cSwWTu3SFJ8nTmMf",
  "key29": "5XvNFNBXTqXyuU2AjJ3KgfafqLBcystdxBN8TcPdKkuZh7155ApxTcYFCFsvu1E9T1X9qmQaEN9WaqG9EfaEuEY6",
  "key30": "4Y75HwYrgQGb4f9UWYcBEL2jMaBCyMpyDPM5NohZmhnkMNA6G4Z8aiCN8XordtxpUxzuLR5ST1WRqbX8q6G7P97p",
  "key31": "37xAzNFJKL6dejDtNAxPuVPm1tAUYXoEDXtYCeW3cPsyM5RFHqoD6dtJEEYiYfwvAyTW4WX8dPcK7TyuvGT7bZGB",
  "key32": "5kfFEdKQnzJmTmwX4ZCKS4mBuf8DMv8ip2ZN786QphzqdCJBeyPsLgL9dTFYJt6FH2ZSWh1M75apNe8yt936Y576",
  "key33": "4pj797JiqRVfPutZczVhMB3kV5Nm4WpEJbM5WrXbfGhjXgQwE5RvuBAd2HTWnmpe6FMBpjHKv8pj9xqYg6sbSAXn",
  "key34": "2914i5QzFbCA4yvzCTGDv4wmjYcgTJ6utgS89eWFuX2bLvYeqqYr3jw3mUSwKj2opui7hCPtzboUXVho9C9uY9j4",
  "key35": "4HWx5UeVfmER2t7rU8iey7upoQZGomr8t6UrFu5JpPPYMDMB3vaprhRgKJ7E9howxaLNWSjHZFWPrGZkNM9nHQDn",
  "key36": "zjpYaPwaiGNPkcfMLs9BJoZTHPoXCjHkj9zoJkYc4jdfm7CrfLypPZqGHjNrjtjVKWseTke6eMLfxjv4Vr9Tkhg",
  "key37": "ZRe5EVYpqeJ6oeR7hPPsCFikie1Vir778pBBcRuDqM6BG76HWtFrLYSqBkb8kP3nQq5HLmNWZZinrCUi4iRW6Zj",
  "key38": "wb5hr962g1SgfkoairFSBivAa44WDF7myxXpnKgHuNYUgd7TeSv5DwmTsiQsT7Uc2qqwpKPfrZB58SCLPKPRZTu"
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
