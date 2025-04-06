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
    "9YoEqwfq9FepNyyHjZxnKEqUME2JkYZzHtDER7TxMix9DMEHjQ6EMHbhDf1aHiN1xpaSZFHSxbR5N9Tts3LYZXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aw4CPfkcTJUwGQmxjwNrBseftu7t8JpHUmSpV3bVT7Hv9X2Tir9uGKW1RvPTyANBSUjJi5vQivJWkTo71ib1UNm",
  "key1": "233g73MU7qdtvAibHZRfGw8iTN6WSVQkKsLnNBfmvY1Kbvy1KZoovT5fuajcaAzFgRFLUYm1AF8dWcEHFvfvhTbz",
  "key2": "5gSz8Jp49pjq2ZCWTSkdVJarEoiTLCEHqzbgJ3FUKhL69PYQUJT8do1owQ7VNawbvuHRydgs4CSNmsPmj9EwcP5T",
  "key3": "3quhJaTSsWQmy6BpcPJeYPB2XQVnC4SkbPsr2L98aQyF7zJ33U3hD17qW8W78frB6Y5edVr5DM5aE3yQ6sJni17F",
  "key4": "5B8EK9ponED9DaJKCXXxo2PzNPQh4KjQUbYyQf3wcJxtztqNtHw3cZFZxUmCDzMPqPYkrj4ERsPeyPf5nKS3s7Rx",
  "key5": "3W6ti5oapmaRtgxdU3R1CDr8mQ19kiRpR6ek1WK9NzJhNu53RPT7NgCkKu9WgHSTygvr1QAxDs9Pv9xkBBwWBVEd",
  "key6": "iQ6vmAahoG9fvZkjJUWbzvDx9VUs7Fzw17EDKjeFTPNprtXzA1ZcKJLQctoRkJyqurUxykRhqfE6kV4uD3nXprj",
  "key7": "41SmGzpMHBYatyUuFz8H1QLp3DUVCMmXauHmdYDWrRH9QaBPU65CWZkyETxUqba4uCwuc1YGnL7vQVnJsMTrVzBt",
  "key8": "63yw9g5NX4aSnmTm9tB7F4CLuP8QiQcUhQzBeexrVgoRjLQfgq53DEakYCjuZWpzufahf6aY2CNT9euHWrSwCkFV",
  "key9": "3XMYGGfAJwmU5vDkjiq7Ea3Y7wUKRAveE83ibXD3ju5J2wQHzpmbNWhESzaYhLxC2ZSczVM812JEPfGDW6yr7u4f",
  "key10": "61HVG6Xu1eaUv8FFVzr3FgexCN3CAP6NjUFj1AyTLpHU4ThfZBWvfPmYyofEx7YkxR6zWqfQt8XpQxmHQrJs6zLE",
  "key11": "57yQjvQzxrhftR7bHfFh65oG5HZoGBkjztY3H244tNC41nwYkitn5ahjz4Nq3Rh7eWpqAmuwVVWbYQHsstkdHLJf",
  "key12": "3a7Hz2TwQjoUCs3k8yrQqmumpM71idipHmWNy5NA5bfqDFRQckZgDAz4ueWZFP9rKbwChTa9LgcqMrJSsgffeeb2",
  "key13": "2hK9vdKGXPG3GxvLmSiU7YjAYQAd2X8q7RqswWX6nFmQc1SmPa7HTh6YvdewXpYiUVBQZmu8Ngk1ht5HSaoj2u3e",
  "key14": "4UfAi71qrnUnZoezMJ6QF5eGmSadqGyZTDJHgAUAuYGgFa1hzFphZ7TYEAAn9coEWj9Uxe8825Y98YCwj19hwyyQ",
  "key15": "2ZoiqtjWonXgJ97eSi9ps8CvcubiTpVSCYHoMVQW9j8kQ9oG4ChdS3ywmB3z1BNvkYUcPk9exsw4BDRvCHXkrCXP",
  "key16": "3yFcLCiUHMwULc3ycf6PSyTv5Kh4Tar52YkLJH7wAf17YntKeefAi2QMcvkeZBZXjqunaqUjQjzHZbbYwE12ZpMg",
  "key17": "5kaSMPifXgFBsv8SPNy4mUwTCLka6ry3uVdNLQNvgLMThi8K8EX1ArBUDs3yQQW3c2RrR7X3DyNMxRDJHiXVzjYK",
  "key18": "3jgN8xJ5L8EBaYQmHzR8tA59G6mgUufqvtFvFogPCZSDZpNUpkt6jdCTr9KASB4ttEWvXeSBeM59WXufpRyPZh6J",
  "key19": "5UXVwzhNVZRgavaFeXRdju5xvaiVfZEn9zXSh2mshVZ22RXErBunD1rMmD8PyN6zJ9W3LoRdNteac8GYajm3vktP",
  "key20": "2YWCnYAB59XpkFeihoH2VhQ6to5j6NxtvFbyXV9W4XLDgPjm1NPAPEKB1zaCPYcGq4gZ7GgWHQu1VvqS5aqjkt24",
  "key21": "2UbhPkNtkE1cGKUi9VCDuEvREyQVKvULtYh5pTZVzHL9DA9MvkQWahmpebi5BD29yYu2UMhgM3zQt6Ea4RNCcno7",
  "key22": "2raPaUpUx8nB6MNDsz1pxBKashYSd9eHK6isUNVbkuct569qDiJEPSBeUWocifmhp8KxATU42jAM9QHngqfAU2R3",
  "key23": "3TRxAf1w3bwzezecsxuMDAQSBZYQojo1a2Gsy9wVYQ1DTGei2fQLSdn9oUPmfycRqvcoSodbHPFTTxKL1V3G3ap2",
  "key24": "4NcF26iAtXcEPqUAKtjF2cVhNLn71ms3y6Zr2a3By25E9ZrpqwH3RL4xxQ1bCEaQv3UaBSAn8Cv5LWGmwRsDe7yP",
  "key25": "4GFCyBzJ6ih3BDhXoeTpn7r1q9twqi7y4CZMnFsM3EfTVVhPRT8UHaquPyGapjziiZ5rE14mPXZHPJ6XQyEcjPjM",
  "key26": "cmGhWvBZT4E8Ayzqm5sNQbQ3GMtdCfGADCY7ZYSHtdUR79HzF8FqTsbyBpopmSuEEpWWRVz1BbTq85DTMoiuJ6j",
  "key27": "4WHz3oAAWSv667PWMur9Wb2G4qbVxBkxXe5RBHhXcvtQeLusDdzfkLZEaptXSui8mWc4iiULbBT5sCzXXm59mxRJ",
  "key28": "2X5Ka65sBiQ3oKUaJFyTBpMhE4LkU7yMJ45vKAB1QaUVoK6snF7kuMMmtQZJpx6QEqxFSvrHnMwXSHW8Y5ndKVzw",
  "key29": "4qADFvcXwSEEwcS3CUsJu24PnBo4nNbCx42y5E4jJ2C5Nw1Tj5gu7iJeydyFkoeaatrJyJiEffUxVxVgmWJTe7Ey",
  "key30": "3bNmnGwykTHj621ag3yKhAvnzJVjEBoWYFsy3hxdHdwmSGcQJjPoeEAT5jaS3jQeo9jNyhNHm6HpkpkVL9hnJf9P",
  "key31": "3JJgH7pM2YJiPzPY6cuaPnV78dqoycuQ4mwU8atGUXP5P3ugjtmNzFtK7tmgVEQteshZxNAbNdLE1C8pRn3vhYeW",
  "key32": "5afCXy1u1hJo7hDKPQMALiVuriMX9xMggYyhjoWLemgvn8hDBDEg9N2WWh7pkq5Sjba5oiZJpiZKQ6oqUxpiE7u7",
  "key33": "3GmDo7SQfogmu164ftQoRwroZqeM7GxtuM4ZAhSF48T8LLfxsuBEtk91YPv8X33MRsE2h8FzARUNHxWVY62b54WE",
  "key34": "3iSgqhPKbnWpiExBwR4KFbSwDCZQyVGxeKhJ9dPEGg2kVXKngF47294uxFeHKcX9bvtRxNaDM1jRCVMqZothsGwG",
  "key35": "2XeKp2LShjVWHEsWvxBmLVouTmECGV1Ag3yavFS3M5gbrFnVqJyFtDkbdie5zKHzhHxpSyN7jMf1QKjWnzj3aJCn"
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
