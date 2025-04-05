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
    "253xJsScQ7DeLe7ZRUgQDsvmhxdKnQct5gMYKyoULWEaUm1WqsBG75Y6ut9TErpfCX2cd3pRJVrUvtiYX2xP3YqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62pehTmBdnfLK2b1bzkWXEo9NhLafZcZVhrKbfHNZEmwiX1vkuqkNSvCE1Mf76ZMFDTSDEEjRgSzchQYSX5uARAK",
  "key1": "5aqraQVkJECbgaUsH7Rb2dVZrwzqKmipUKxgDegD2yuAs8Q7ksvfd8dvJgcyZdPm3DfX7NM8Awzt4EyFzw2RrLc4",
  "key2": "3LsjUjrnpEsZ2euiUbfqcUjcVk4iUTDcFYrxGQA3GiASYcKBUkBoV7kEinj9wsE5M5i2BVigawdzvJqwFZdZNPr",
  "key3": "3rJJX4GZVesTf21jVfhhSEvR8m76rdGcjWhPu8tgHbDPA3dNrVRNmGxP4hwVsRQNEQNmQfmD6Y91UkAijN4ttJDw",
  "key4": "42xBxkzNUfPwmBKJ3ujKeEbKziJZdURjSPFyJ3USpJu4DVj6PJf5497GdNb6aGVJ6frMZoArEi1eciGGeEWhaFdz",
  "key5": "3Vn4zRMZ7F6AvmpzPtvdm6ipUSDNiP6zSF8Htdeur25DxUzt4MAYE8tXdpm7vX55dKUM6XffkXGNL9YUBTYhjMuU",
  "key6": "5fvXUHXWvbLRGKjjENgFhVqksUg8doKGgyNCJBASERkgi2uxjJrwhRXR2a8Tdb4cnKgaxQT2Mx6PFcqkwvrs1MX6",
  "key7": "4qK96M7b7k7MAJhnsXag1PThKYSv6ey4PBF8Th1b58eYWBEHurA4goGBdJETXNm4PVKCNCLWSG6TBp6hrduRC2H1",
  "key8": "8KRMzEPxfFckJG8jFZSYi8N9VuwkitHutRuSSb1bKAH9ZBr6YRrDwZmNp3cVeVGuiHLh9KDuR19NGedd9cy6PGb",
  "key9": "5TRQmEVVadWPmTzoeiXZKUXsq55VCnbyD9U4Gyxc7eNFeTKYudjoyxEchZrXLamNXAhWVJU6mViKznBKiwJ2fBKL",
  "key10": "4JpLTFDo51NUiVTTpaAGCChcQj6VrG1y6spQxgpZCr1RmddhrmBzdkHfxNixWUk9aJ6LdSpY2kDhyCeAjDAFtvXV",
  "key11": "3pGMsuUWmrdatJvr4FEpofy7cKcBrkuVQUSkj5Sb4SWTQowydLbDeWbkvTA99tU77FEbjJMfR9frtATKo2gvvdEm",
  "key12": "4P6GhweSnyLvYvA1vB4ZNFhCuM94ihWR4K82UesiK8Dgs8EZQ9cpx8v3kEvC3RQRWK3peskyrZBMdiz7Yp1Jhhkq",
  "key13": "4z2fSPrGMc2jWjFB1aFcbS7QQYqeQxbkmJZLMudQ2CLntQNHeHwTwiQSpfxpKFXFXFhsv7kW8XmsT6PKeoNADyq5",
  "key14": "3xtzz9NgTXY1VinB3jgkiWgfL9gJ54ModLej27Qz3VdFcUitBfKJFZczGmnryyUAdMo8S3cF1gd14BiLXCpFGBp",
  "key15": "8Le4CcaWSGP6dYtwr2ugJYUtbAFAgs7Vfj6KBNPwDpZQCfYeKNVFKY2q5ZDgwuq1xZBix5Sgo8oPPA5cjeaLUxz",
  "key16": "4eceL7Ctyp7qjyUgSmtUYNahjw7ivaz7ryEpu3XC3CfitVxem5TYJk88paX2EhRCUc4CPYt3edNmavTv8cYtgTGG",
  "key17": "2xbQxAWF4FvbSHDNiL18WTrNwrXf7D2niu7MiHFAjKhvAbNWNYms7WoH93dSqZGyVbAsPGWm8kE6Y6MELeahuNjW",
  "key18": "38d4nmbYocf3yJhDQJ9jojMMKvLnUsR26hXx36wcHBTZj8oGqEojxc7UCTRF5rx3BtnnimT6AKFaPhmWNzgwtCc7",
  "key19": "4ejsVzPT9w96obp4Q5kmTSpAXMkXYo8Z5FQfULty88oZYFw68QxVBJBnb7ifsVXKhjxSE7A9MhUm4M2ayo4Uu8AR",
  "key20": "4SL172rrrjgrCe5ViuPAxZUisg3uwVFW5z1GZxJUDqK9XC5ffFB5C8nd4KbMSkBUZ1ggBmRzSB5VyNqqxLgKQMXr",
  "key21": "2eJbPiSQMARiRbfmsb6nYByiaEvY6utamMcAfs7aKrnx6aUDfWyNZ4vHwWc8T6Qe6qSgFg79soG3SpjKoMdRiu5Y",
  "key22": "21LR3sXuQiijbGSxuV9UmgwqvoQi8sqXcakLBQJn7bWicsyN55qYceJcgs38XdU1a2DwRNhAzc2JbdzZRRZzpCUo",
  "key23": "3gbeehNR4uBEGMWwt2K4CzX1tgQjtN54X8v5nMUG1Zj47hooF6sT7LsqbnEVhYFVUh9APPkbJZnVCnATcWpDJgqd",
  "key24": "5GYxDSoGY6ptLJm9DfEWEyqirjVsCwfFFrvSEbberXNQcnWqcmpNWyZkS37jknviZdTrqWnRJxpawtm8uXXZeND4"
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
