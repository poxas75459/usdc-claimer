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
    "2YW4o7npgtjb5Zzf2B1A2RSdHZDDcJ5czd139ruskYWfyoXLjKf3jDDsQbcqmW7jCn3rj5saTBNmDA7rdkVcxyY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uex4eLUXW6VXRp2UT9opr2CbccQh39UAoE6nWeHnkWtwqGW7pL3gyAgQS3j4a1M9WmDUTsVa7CqjmTeK8FzQ3J7",
  "key1": "Rwam8VtJRk5KUHYQT4nBsFcwu9xWtxFAhFJX3Qqk6DuUMRhF6AceWpdXGJXQt6X7NuHY2DMo2u48jsFmE7qNckC",
  "key2": "2vKiX5VYLgyv2Y3R2eMUspe4MbnPsYMTauWmtnFVQUXYbtfXsW1dW8AfuJDcBrzCwwPXePrFiUm5PCqmeshV3arw",
  "key3": "2aaYsu3EZpBkVNFyNP13zgWmQ7kvgiUU9khnGtK84YwhtBZFdCv3PNMueucvQsTxNT8RMPht1cDfpyHckUPinm4W",
  "key4": "3AJ3kQd74pecGGgZ9PkvASVH2ZBZusrp2YWv3WXoQ4kLxU1j7x9UiUezJ1JZsrmKrLknjCY4CiPd1b7MgdTpe2Dw",
  "key5": "3UCxkytp3yq9qCwCuvsUdQJ8f7yPLLWUvKH9XUb6r1T5eLm3nDgThVVsLSLBHgNokSQ6Avsc9Zn2X7GqjUqARLfm",
  "key6": "54cvhLXjKR7QDUqxZcfwqzK3EU9DuZqFFeih141S4JSJ7wAfEsFpJP17ffaJrf5MSwjFEBypykGuiCrAHZGYishA",
  "key7": "21a3Hjd3VrR24S5LW98bHYvssJ4g6wStU5A11LoQJXnsCceYVa4brwoPLQJTbUc5XPuFjwUrBEWh8zf99yA68w8K",
  "key8": "4k8EkdMoJEVaF8WsrYfBjTJbhraeMR4PwN3EVCa1Se8q7jfoMAdfwEhJk7eeDF3BduRa6b29hL6YYQ6cvpF1hQnu",
  "key9": "3RWssPtUz47wR3zetBY9x3Jn3rtsehht1LLVTTJo8jrXHimcTNWBnYsijqCheLWr5rmS7YgwfZFi37k5jCvSSnVA",
  "key10": "4AAcqc9ooGfci7nXWsFgfCuAbAnABhiBAYwfedxjpnNHYrwCwbktruAY8KScRwPe733WocAvEmuo4PtJy8bxd2kY",
  "key11": "5FFgPJmvDxBsEtDFXTXD7TNSnTeLxkLGsqgNgiE7doTsiMxxWhqPB2BJ8SiWjrYUNL7cvrN26r3ptSbbJ91k59sY",
  "key12": "v4MUNccgLgouterDcY1e9HCDr5cHbeXAJtuJNDPne6jDUsq2L2iGpPhkcMigzZvMnZ2mLooySPpTd4DHvGWN6We",
  "key13": "5UJzpQDZqcXcEcYPgVLMqVWZThS8Y9g45cdHE9qeTUZLFZ8yHBrGLFJpoEfxzj2RZXzDvXD9AUdLk9ixL9PLWXK3",
  "key14": "8qQq2DeTLeSbuD9Qxaa2noWL6g8Mo19Jk9tSxdBEe7wLGJX9ztxrkx8MQN4tBrfrae9fLM8LEyi5Airz78mRfhL",
  "key15": "2mNSeMqT5DCUAwi4kfmmMHhdD8dMUhh63BWytkp5tp8nC9ZFHtV9BaQb2fvNBXQJHKLgAcHDKh7KjwiGDHe1Jif7",
  "key16": "5DCzH1my48V5KZ8rx2pzpFdbr1jEofAyddwfRZ959sqbfTFzidspQq9Eczw68KEzVPVSR6SmETafCVmFLjzaKwtL",
  "key17": "4n5E9AhqyK6WvUqXsU9L8x6VN8ranhg4RbT4K9rmpxtquwZNn8e1Ha6jSQGUcCTYWxvuCrcNaCdHKKJqsqsMKLqy",
  "key18": "63SxVsCWsaEP8ADQaVkmzmfF3wttr2nQUj2UHdQN65HJuzfvS5f3e3iqwGz9fB6ahEtZT7KFD1hEdfZxC7vV7Naf",
  "key19": "496WhmRTac7ieEsdfg1qRUQRgkUTBbQ5GKSNVRNWkTKgSGpHot6tmDPM1XCizjWj9W4ccu2eJbFw4ifL94VUvUrf",
  "key20": "446LKDMiYo1vJ9Y9C7trhEwqXhBM45HkEbhVW3xF6MurMTWBGUM79V97WFZgYBYmhtRSU9Y4iJwR3uteWGH6iEnZ",
  "key21": "asuot1hyGRQ6tgqua1DBHZSPwoMy9uSpRs4w1Pr4q9hqdKHqk7jR4YzAoaLBFd7A8A3ysNPbvzeaEaoGckupc6z",
  "key22": "53kSgBmVVcBSf8RkDNQGiunzyuLVFtEBiw8vzxwnY6vcTQ9rfaroVFWP2tMUBNtTWo4NVnqKBVtubpUe4SnXGs7V",
  "key23": "5JncutuPFYhm1mjm74yKZaiHjMCbnaoW87ZpRXMUuj6LgM1HUUE7cKjvarpHbkFGHZEjZeXYiDfdEnMPW3oWgjTg",
  "key24": "373ax8zBLV871qum6ycQRd5qkhc1amQawE6zd9B9zMxuFoAEwTN4DdMH3BpZbfwxCwk3f2CZ62P9XVgCVWwmijp2",
  "key25": "2L1jYNraCM572NYnWZUS6zQLJgWYUnchxQjFrSvLn4zHtYUFoe3kXwwrgCeXBWGw82yJzYhiDJFaj8N8ti7zj6T9",
  "key26": "5qFYCYc2rHVFGYtovMZvCWaazmp6KZjkzVoaRZuucRPsivkNVDECyZCRTnevqHunpPofiLo7jPBUKwprAuTn4sK6",
  "key27": "23bnzGvyW5T3yczXFamnyWp7fM2R7DPrEeqTvtcWe8JbANw4tBYVfLH1h4c4dQKcxLk1JM49Q1pX57efML1fB2kc",
  "key28": "2ieVwF5mLAyFdEstU9Jwm1efxeEJPPqVQEGvkjgwQcPtGQiCpJrxLgWGpbRAEDUaqzyY4eVayQkCFYzGzpuh2Kjv",
  "key29": "5TEMcbLm42nFFFkcCPryWYB2pUxkNvYqvW3HD2eQwJkFUu8D2phMPt8rRbtxcGJKVNXMCSggXnRDgh6zNQyC6yi",
  "key30": "5hczSKDmETn4dPc1JZ9L9jTkpYyr7ADq35n6xZfAZXVEpZbmxA4q44B5wpuMZvH81a5ExB8yTGkmNib29KzqMvud"
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
