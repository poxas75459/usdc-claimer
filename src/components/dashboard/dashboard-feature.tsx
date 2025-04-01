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
    "5sb8CGDpBsXfH6SRmNUWGVN8AWeuhmtzqnnqM95vaptLgeMUUFVSegxr6sfhhDmVSa8HUzpEJwDea22c38TLAwD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39BbzkYPeZpxVZhG54jLJBuRKQCRKMmo4wxRH4UEiDX2hdNtD9QieJ8ubiJN5xW58apDETALC8Skrr8n2JVMwrs1",
  "key1": "4ZdkfCNxoCMcc1vdYeaFpvDQ1fugYuW3Z4tixSTPKikZiWksairZ7tQr5grj7ULX4bH8kNXwV6SG1CqDR6umV3NA",
  "key2": "3UKVVKgH9o6vMk9nQvWRvJMJ51AKkztGSvCZj1mQH4Zzz5pW2bLjKTCDiZosGuNBfkvCva2eHDXUCvNu5G7q1Qmb",
  "key3": "aa5JLeWjah7oN2YnvQXcr5HKturyeA3BtT4vSEUEn3fVvkqJ1XosGQbwix78B5M2MZ8tV6mpmTMqfiPfZAsRApr",
  "key4": "45sQV7Co9ffqHV2k5mMYVegfT4cT9t4GEpWotWS4s9svXtinFWmGFFUYnYpHaSj8d4tEm5DumHVTAsdb9cdns1QZ",
  "key5": "52YTwJBEFT819B56MAgVvwaMJqBJvmEoHzuzTTtQw4gyNuGzJFiHty2poLZcbRSjgBrnvCUHvpQdKMuNF5PvLpFJ",
  "key6": "3VbsVqZAieu2h3n4ZBKy6CQfxnqxUYzGjiXrTpRLzaxGF4Tnc5U42aJYDNaSsDc1RFiCvfCLGN92dcGk1xeSFsq",
  "key7": "5QMUXuwsX4NcMR4szt1TQLRgjcPJQF5FL43NKP8nhKpGW3v5CgDGJwBKsVYfisNGxCj3VdxVkp2Bm4T4CxNN9dww",
  "key8": "3vfkXHHFHHwauMZJwNpQS1F5sK9Qr7AyEXx2BaA5YbpdxSaxiRXoLi87Uj6eYxgFWaeri5qckybF7HmtY4ogokKj",
  "key9": "5Dsw5zEh3JHZxF3PF1ZwK9RXSwXs6CJNNKd42GRjUaoXvoL3sA3BxbViUGq9ZqRpMQdqBx8kdqQaZoKaj4cDpqzx",
  "key10": "456KJaE4HzNZxHc1NvPeqjeeV6298XZaHp3coamUuhNv4Yk9wGXzGiXC9zKUQ83zCe2zQhLVhxZtzb4Ta19zEqzA",
  "key11": "2yXL33cgnANPnifGKJkyjk7QHYMHDLPuKtr3UQBtD64Wp1RGfZdEsrJ1mX4xj3zWPfpvaA1vXKgnxpZkghjnzpU3",
  "key12": "2VWJW73p7jKFDRR3dmRzZvuZvZr391bTV6VX9jHC4gQvuwDGnQTeNFdWwonTDtTxQqcYYqS2okzfbFF71MqdidkM",
  "key13": "dg68HLvaU1V58715puZCo6ZWtMwJyX7WPnUbTSmW1PvZ4mACebhojLo1JM95j87ybZtrRNYodkRvMaFnMhcsbhn",
  "key14": "2bvgD3owdQBwdiBjYcLdE8g2ydy8e7NcmnsPViDBqagmVwwNksbGf6w6Ur5JBLDGrqJHFJhJfZwPcruEP5goKaYR",
  "key15": "ScYFi3Rm5kUvtuwy6hUHRXfuk3nkBzTNWhKupkNk5G25MpZytmpm4cMNwfVaGcotZJSxVFDcDpf2biuMD2kzBZe",
  "key16": "61e4KxFoWaRcG76K2uMJk3JMAPw2jEr6tzs4Lk2r8QpgzsJLwPXkHkfKdHQzsC58jHb9y13aTK6biU5vqfvZ7TYP",
  "key17": "31Knstg1Q6dFLQ3KFmLb86sE2NjeDQ74Ws1eG5GyCrugLR1qr5LQ9mQHYHaEPwUu7tdwSM6hQtvfE2xSBshZ3is2",
  "key18": "5QKmmuLUHASsjjgCj7LYPJoAUvxjBvidp7LwhBRd8uJhPeCctQxAsccu6SfcVNoKekMzP57iV87yPCXCcV7Pg3hv",
  "key19": "4Tx7NtKtnYd7oqPdmixLnaSk5cyVVK97c6ScEKb91WsxLRAJdeNzAzApsR9b7HDRU6UqfhxdWzduiSvGtThUPoYT",
  "key20": "ehzHdRgUJDDuioPucmQ3vuHGu85SRPKW4s1kTKmThNkqLSxQkmHHktUfRksmfTp8fiMjcyyXc1Medd1JKLhsy3J",
  "key21": "3Zyx59vadnpnufKc55B426WYtk51swg1dLvebaVgShufcm31EZP9UFKnfY3Wg5TTmUyjbPbhwtut16Vnt6JN8chQ",
  "key22": "2FtYkrnVN4fZx9RAKZzoD6mCUmZTiUCbTrV9o8XTdzzDthEG7Fr7YFBe48zKqXASQwNBRXi7mejMzqM8xKnFd6BH",
  "key23": "3veHmzEv5V5LLQjm9BAPEauB8iX1Py9DqSJYCX22cSgz2iJmeSsmzDhdnV3ztFF3CFDDzyRzqhKGbFFPGDoDs9xX",
  "key24": "3U4aNLRHFssVtLA2Z8r7h3kk7rAtnPXoccW62FjUbqC9qvGpyGajdG921dH7ThHbch37r93Nangka76CdG47ywtR",
  "key25": "4z3KmYchNpCYm3jGmsoBa28N4PGRti7oYvSD6HZh9EcuC23mVMdrbozxVLLQT6NmgU5WUcodi2LQ3AnepPqbViSn",
  "key26": "4cb2KM2JMHxfHBWKWnJ51rvRi5jdutk9oaaV5NqemfF8FCaeiZJ8QczeLBBEwsTmRusaYnadryz7yS66RUvu7raY",
  "key27": "2roxUJLte1qSqeg2T2i3DJpZzeBERStWFCrniX7FYL97oM47SCTjQBUerAK3Jz5XbQmZSLDfKUjRjECyPvaQNmXq",
  "key28": "4HUV19r7T5k8AYr65VNWqcbS9jq466XvqMNKCBGxjdD5Sh22MyXG6c1UYGVxoRyHjWeDjc4DYKFsuFzjgV5fN88m",
  "key29": "4LSKh4pXvavB7m9eSMyesgSrfcRyfaPv3UT9QtJpVnWWMoQDgcWysMZBEFqrafhe2LJAp7a67PhsPo6uGzECfq2U",
  "key30": "4BPsb6sc9izxuNRrqYZi9dX7bothoZhuTMxZotCmDwRcjdz7B1kVz4LLZdT3roCdesxyHUcaB5jKJkbYKekx1r8j",
  "key31": "vzFv5LMU9Gn7r2kGEoY47WX7WMh9XiUpbPuY9vXhSYmvrssQzseBK74NjgyXUS6BQUm1y4WydZWq3eHouVw5hwd",
  "key32": "RsY4idjLjM85gW68vqQap7bMVAsnck7VD8tZRMN6pN5YYcEjh25xeUACSHJMxQJFCUtPbhfhosUMfsKkHg3iZuN",
  "key33": "4sxbc9EAs71kMTScGq4BCFr8TYEy5b7KWYgYRFJ7T6BfmU5WcPZLGZXuiSwumT9tfpV5d78DBToNUboGe7SkPp5F",
  "key34": "CGfxs5SeanmeAoBg47D8wN9oUQ47Vkw51uZzt6f2UpvUHGhUueD5cfoWVrARjam2srtmrsbpoTZs7Mp7w3Wmf4h",
  "key35": "aGhbj8xZJx1Lzf7qSKdopG3YrLfnzpgxzsgME8RhcyKrFjWjtHU8PHpzG3RvbahMeksn3KrFc9E7gqHAkLfMzhm",
  "key36": "2JKsbEf1mMKvRw3xxSWjPpANKXo8QTJE8bLjkgLPKCQkM7mT84K5fjeoYXQaXL9jmEgpEq9vzDHj8DqrLstBBJeQ",
  "key37": "34YRohJQwvb6G22JjrM2PqSCA9M5kfrv3WCZtRFdGCohnhfYemxEErMp2vkuaLxkXVBZScV7bE5WwtHbwByHWp4H",
  "key38": "3g3GeAHicSeeLY2dPpp2tc9z34VVA4wZLRq2ArSmMBxwBWKypH9q5Z4Q57VjTbGLsAZCS5qoTamcqhRV3kgjefxk",
  "key39": "7iqvDzugAVLUS8W6judSVihuaeWsq7eckhNKxK5Q1imqemHjAGR7bDU6kCXMjwvoSQPYqFgEY8dqMzmhzs2KBtM",
  "key40": "2Stsj8RstUXWxv3waWvSv58qWoYUPSoNa8wwaQCXJ8rFJW6HbA2npKi2iJ25UUjYGaN4Si8nQJAdhfC8UkuDbXoU",
  "key41": "2Je48PWA1WF7LPytFCJBsJQSZQeahgXsAGpkd336wi4JVjwZZomvHXdwx7bJfUgWvb9kmtE9h1NwMMq1EmHVj73Z",
  "key42": "1zeGaHA1MCPBVYQribVqkFkkFEj8z3DVZGG615yezygshsQ4cMhxNthqD84Bp3z13MzLMUGS6zAJ95B8VYCvVhq"
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
