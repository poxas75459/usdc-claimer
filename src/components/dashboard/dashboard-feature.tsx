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
    "mk4eDMBHMWLGH59BzPEgKWKexQJCuGHfqLN87xcrpu3JixKw5kg1v7nVMgQsVHEV44tXQ1mwagaFzVuZdM8wbUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eJRr9YJntVURQNqjYotQuYjBgVhxd8ZvgQi5CGb5GACERvoSYw49uPQWww5qfeUiKR3nW5ZfckzEx3uPbmCYxy6",
  "key1": "3YEk2zYnxsKGmYwRe2n6f7SiPLHPqSG17w8hTwGUTBVweWdN6s74BYiENPPw13BzajmnjhMnZMB2aDNaieqMKNdn",
  "key2": "4xzPQdvpeQs1m94qrVSjYgLV6t7gsB4Bi7zENYeBVtQFVpDSG13hnKYcmvLqvEmF7ufdF1rW8XLeso3TNaTyCui7",
  "key3": "5hAXcJr1myxtvZxELaZztSpXY8iVXoj5BLEtvN1KQm1WjUmKEoN6C748hZ65Vrhv7B381i6TtGJuYy2KeTLJUYEF",
  "key4": "42LaQrbs4vXLbsEaZjVA79Am4LvdWu6N4AQ24g4EijJv8UNPUsdWSM2u6gKCRcbVKEnCdtsqg4g46wk8bis9TzEU",
  "key5": "4vvUBeLE66smDLqbLUSJMnicGGzgkzyoCGdCnKrP9dTkZnxkcZnZ23VhgKFxhVE8MknQ7JDdKeXPjeJW7AkUxkPC",
  "key6": "2Gw9uQd4ksdjpyc4zKRb27XgLQ2WscKtBr6j62HP1tv5WwZ9udGJ9zGizkaMQY2sCQ8vTRbZbgynrit2hkheB2WW",
  "key7": "57SizPykyEUEPWeVrKADhNNPJaizUr2b3Lhy6B2um6wNH8RS3eQ2srCe4hyKJ8ghMHBGAXGMvn2rATyEAFYoe3FZ",
  "key8": "296UQoxcpRvWgiMqLLVcjUkp37pw1buHTaM3t2HfYDHYEihz4mx4WbTzYNzzCQhtE15TdAvKAjVJSxzEwiHZ6X3B",
  "key9": "5h66af7hJdzUhyboAA6oaQswU9YC8KvqH5tG6mKnyCdHgNYvHRkzFpmBXKQsamLkkfrY7URFQTmX5hVRDLzizZAh",
  "key10": "7q3PKy85rd3tNXCv92JqsqtSFJa4WrtvUsVrY2qXSH3svK5Gqo7TCm4Zy3vQtPtRdKPAHVhkPUsvwbs2BG8CJMt",
  "key11": "2kqkqLv6xp4xYfRGTkHAFXjcjeGv9qAaMnumgAnGDMiGPKDzpZZHq7T7SXCXDnfksgS8LNj2KQEF3abp6P1jqmoi",
  "key12": "316gtgXMckodZwsTJiCbrXAWSof3BifszP4C8UwtkwLT3CoEi6Jk2RUpSrKFyz3WmzninikXmUv3T37q3sEuZJy6",
  "key13": "2wBUQ3rNduxpv6S5xYPamhjuLevMZCAt5szb3efqt9VdPLbd2TrAfaWkYmuBJJzonLfKnPGN1tzbGomSq6zp498d",
  "key14": "5Ygpq1eC93d7BBQjGqcGPtsqE8YGxMtKTrZ3DFsjUCNQeX2ssxeVaj6XMCk7fhnyTnRPvihseDJuJwo4Lg8rdVyx",
  "key15": "2ercWtH4RMANsFRoyMJjAgFjyjW5G46mBtjTzd5haNnGgeKigJic4Wy2sJTAtXtBVRxXqckzGqtrQPyVTfR121Ho",
  "key16": "2hREVfN6TmFXrmQuvkNpSQpYBbnrU1yxqeZMB3tWq8k7RrQwrnHZCaxo3Yd8UKxV4w4n4gSDk5r2tbor54X7Aaq9",
  "key17": "4UwzVyvrwN6gTkUvM3K7Dug87qKMTfgysRDHuJZo5YC3Pj3hD13JZAXSMrmjncjdS6Kr6voJYCVEQXrW94e6Vdta",
  "key18": "4GGtiqFUnZLsBmg4k7SvM6CqHQy5u92wPmpPXsTL9zA33KVAgabLTHPqDAHr6k91h6zm8Huv6VCu2UWoASo9KTNc",
  "key19": "4hqR1J2kJso1SPbC8z7Deq8Mftn4yZNb9HSzFnohZ9wsQAmzjnEazVHQsqGmohoG9QhAKozEKhDKQsCNEgKAysJa",
  "key20": "ij6cLdyzporgHJLEgp8yD4QeZ8Ue8tFocep2rQUeMHPK96BuhUtfGE4t8CoiDmGcTZT5ZME7tsN4MLejULJZ9b1",
  "key21": "5KdeauGafRn9WjewsSMeqDyoQS4my35aWqunooqPpPw24KY8NVTQRUChp5t3uQULpeQnrgiJYJDeptQbW19SJxKK",
  "key22": "4ZNaGmpF7nnd6FPL2WjcoBQnQ5q8ENFGnE6mpeXox8wTb3eFbL8WdB3WNTsRmxszTBWhHiFVfdStGujDxgGDPqKK",
  "key23": "3BPDgckfMvUjWKiWfnQNg9fNcpL3z1qZgmRMrtHZgjMSGwe124EYTFA7NAK27p5DMpQvE979Bydsu8K6yfN7esAQ",
  "key24": "2BBXQXXs56EeVtXM3ArQifakhXS2iPJ8cKFKjdjUR1YTEGeuEzVE6K1cHWF3chywNGH6GohJi8Yr5s5LbL6o2KTz",
  "key25": "5X49yHhxyon9U8ad55Zycsf7tr34mLVJLNYiiecHghUkEKnw7mi9caBCeg5gqAJ4QrvmX3wYd4ECfrvRsDv7DDjC",
  "key26": "nXpE8nZ1DUiZARy8b38VdwB5pWpvh8v9rrLoksAuQ76ux3cxt8JK9taCaNKEUhAdnNzzGZRkaZhJnMbsMoDy7na",
  "key27": "22GnqGqHqchauSUCRd95dh1BfcUiHmjH5gbPYTjACCYTAEG8tXe9ZuXXxmDRNm5QCdR3RtQeaUcnb3GyZ656G7c5",
  "key28": "5SsufbwCifmWFRRyCA8wQKj28wEy7LnChs7uQgssA98vjveXh6kS779nQkpK6jRXt6NTz4K9hCgSWTjFhv4zZGaU",
  "key29": "8oUDNaZ9yoUZXbJxybVPEQfNxT5vEP1RnYFcovhFim451wRZGCP4qbo3VzyXFC4renX7bUqGNtjJ9eiCr2CTMMK",
  "key30": "5NCUnwduqRq3oUBTcCvv2qxHVnePZ3ipLC5vU6wazt1A7EfEGdTwtPt2AoKxJLLKsBNq5aUaRYJkCbbe1KF4BDM",
  "key31": "4TGWDDgiBeBKnWT8cFXM9u9ZkoqBHiS8L3iJC1grKC2uF5ACMQ7qZiPqeytfT5M8ZF2iHxmPtJTJ39DPVZgwtgy2"
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
