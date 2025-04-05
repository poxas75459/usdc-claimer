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
    "2Qkf4ebawpKdcGxStos1Rm7TE2e8RSRQ64MnjvtwNiR598oD2QMebff2YRCaZH4J1EB3aoZCrGbkPCSSTFRE1ZGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9p2Aaih74QxfqBEgbgBoC8yF7JyJaiHu7Khsyij5h4FVLmE8woFRT2MXnDs4TwCuCjYGTvCpcEgjqkBriSPPz6c",
  "key1": "hEH7kWHSwfvGghnUF2LE64P89FLMtGk8j11kktXF9ahdTKcEYJRbbLGd4Z5rfvGWyYrGU9RqmNjjto8mNXdQwBo",
  "key2": "5pLhbHuKd9XjQiQnj3r5GsGtKsdKFEf1uikALMfa4kzE5PtmqhpgYn7fSa7DpwT242wDXugKZst64mm3EebmmVnt",
  "key3": "3dRAYpmTQFxBbUG4WdEmSJmYmbUgSXUsagG6qMcUYbQmwoyH2qLjU7o1FA4EGucbzGw4T9m7b6eAziLCKyqL8FTZ",
  "key4": "D8Hc3jPXTGnLnmLf3PBRRQNA4X2dsCXMitDNDGkgZAQCZhxwnYqx3qKLGAg9sCs3c2jMcmXZuz1hYviYafTVgBN",
  "key5": "57nzVmKhwvG97eesGt9CKauYgMkEE2muSSXsCyn2szgc71Tdxa5a7zvLFp7xt7CbuoqS98iUAf147z98ngcCVKuF",
  "key6": "2gUapBjVwoRR1JoW4sMTtf4QsM286wKbmDMGSygpBozyjLBMg8Thxa7Lqr6RUos86xhhQS3J59LiDskcX8uBvEnT",
  "key7": "QZ7H9FbpMSkeA1jMpDeFYNys34eiwT5Q4kPjZuLKUzsTZFGJBNK26WEMqzjqP4YhEt8ncavx2MEPf3UBa4DNJ7J",
  "key8": "2QE9UGoYbmKiP2tZp4n5hxzedWzd8rXa4oHAXr5yvjNzp7a1kSnNZjAvo8oZ8T8JQAgQDu9JLL89wXQwZjyskz6J",
  "key9": "3Ama8eSbC7y7NkJc8v4SvJXT1hSEpq81FoiUNiVesuvFndHpWLNLGwaeN1rQjqPy62LSBPAiBx9sCdW8cSogXKHd",
  "key10": "4PGHBNFYtXHLPkSH6AfZJG8thBiHeq7GrKAEBQJaPVMy3P9nrc3TQV6oGJCiAqi8Mn1TM7L3rmCgD8R1139txdwV",
  "key11": "VvUqU7MuLJu6g5ah17eEDz3mHJtTwzHZdn1DSi2VxTSTsKGq8hDhkFAbrvK9d3uB3ve7nF1C5mP3JdW5AkyM7Nf",
  "key12": "66sE53aySdicoN7Lbyr7Vi7D6BuSeZnc5CdJRCaTXB1E29d7vMtC3GmBW7TVHBBquTSzZw4u8sbF9X7QCX3wVZ7H",
  "key13": "4aeEppRadTsfbLPLopSyjcTywXKnj2Tdmo9Mb6um5ThyQkRAsdf55a8m4bQNfWLtimFzjyesPKZaNrgUabk4o8jV",
  "key14": "2mwowvNVb6p3AFnbZAvage83wKJyrbjQbzCtyeRWSkT5peZXNyAdDawarvsiCrXG2S5mWYcXqaetFeP2ieBBEzNY",
  "key15": "4qmsFiqH87m8kBJgws1evfSg8J1S7b2UR9xbV3BG2jbe32K7TJPh1Dkbn6Y96wdARqoWgDUhm3mEn8Sy9WDfMMkK",
  "key16": "21CspRVwPxQBGJ2D6tscn8ZJyuxExDt993QpSviKK1eDv1GwTNiiCeG5g3jim6aUbbYBqy8jVdZV8W8tDH93ABQ8",
  "key17": "3T8wQovaAxLJneCdQF8Ph6c3B6xwwzi8V96rnCN3QVLFJNwz6bqGRG2Y2PckUPaeb2bytAHBACQkEv4S6YSknUHP",
  "key18": "2NRekmcFcrPecYiFaHwkJmTxxa2NhqyMDBALTusgaaS7A6VJrH3jEQjvKt4uVnAgn3nxUWHwhpvii6VwUUGq8f5r",
  "key19": "4rTQF7Q66X2UQjqzwXVsbxG2YCmBp9RPfwzggUT13wwbN7PNnyrf5BCcvMnnhbKPTS51ZzHQtpb4cLL1tDDzxxyg",
  "key20": "FPJH8pMRuERbJBjmfi5avQgCsM6u7yN3gsqjN2WXcJVk1CSf4qwTJS1eYQ2v89zAnzHC1jHunBu77mbQjKvbY4d",
  "key21": "2e6vXbJQdRQe3upFgYijiFSeADsHkc1f137nmWZVd93FBQz3pJBwriRWeiPtpLyMXPfG17N4hARdP9zB9C4EWvBe",
  "key22": "2DSvTJqrWJTDk58RckMahf8tn63dFjnnzQtSgQmoSJ76g3nYb6ojoP1rVpT8LE4AZUQ9AWz8qFjc2tMJ1b9rPcAJ",
  "key23": "4YkJVRLYSvyADuT6k99Q5b2MmHqWHVQcP7QvF4YoXa7TNxJ1NZYeged5nTjWXzrMnKjsqy6tzD5nCuG5FLexaHoG",
  "key24": "2MpnoiHDdu8jDGiaTLvxLpwa6QBLFAeGgbaSzczEdjveVHUmf9LKz191dy88nVkALbCr9SvqXHRH9oTh7gcBUyhj",
  "key25": "5QUFJvDy9HnBxP81J6bPcwshHMXYPcQrpgfdcQmBztn8wyNu4eyFMGTxJcWFQLxXnTVe7BBuyoWnxodbZF7zeobX",
  "key26": "MZ4e7SjGN6XMbPMqucyqH1ABkH3pCbma3dxRW6rP9SbmVoh3Uk9azqWSGGYyp5VbC6JRk67EX1noYf24GdLYJT3",
  "key27": "67JesH9XhSmyjsK9biiwqHBx96dKiBbTLBAoGAkfLhhpAhjUDu7Uqjwe3pkLe7KiDNh89rMmn5S7jVVoEfWyd4Rn",
  "key28": "4BpKUEKhe7TruDWqr5kXqZ7jP1X1AG4z5BstuX6g5E4mhwS9NER2tLMQP8gw7zMf22gcLBoXT6k12PTcg1tXtWqp"
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
