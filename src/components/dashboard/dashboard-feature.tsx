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
    "33QhGGHN6JQX2NAin3taqi1PEE2aYi56GuPqG74B8wWAyS6untL18TjMP2jbjq4iSmuqJc6Hx3szmDSxAMnGW1pG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5boEYYc7dw3U8u8o3RU4JjPp8gYAaP3kWXjYu5vvc3Q2h2ZVY3JR1WwL7AqTQmAQQyfjXToW84q3WmnZACg8w2Rp",
  "key1": "5XQ6c6B9UewqWekaiHigHJNfDhHUojWPMJag1sgEQj7GdBFhEDwwsPVDqirhhPDVe1QzZyuoRNMfFG5A2GKyFA4w",
  "key2": "5zBBKMmwZB7bNiEjnGhDQUznc8P7PMjxDXLVpmjjkrgMGz5rB1kaxxURnfJjHt6WeVPkszXkzE2ar1cksfXcFU8w",
  "key3": "2gXVTDUTpojVRhShQ1uKLEH8z219vscujf9wYGrCx6kWyCTksAa3dRG4mcZy3GxzWFNmaXEBKLaCLTZVdr5xsUqP",
  "key4": "7E6godxtSEHrXgoc21cF8duXtoL6LcuEJJ4Zj6fceKKm1YhBAPqZQNq7dbugyPE4QZRREBqefHMsPVrNPCa3NXr",
  "key5": "sP1AcwvkjNWGDBf9xxAfqQuNUraE14jMiSJuLnimxFGnuUvjDVUZQnHDeNvYtmLGKppYBCcJLKVzuaTYSMVndd7",
  "key6": "5xxofgqySEc7rXXxjzCiSDzsazVsaefUSffn9owNpfC1EUq9qHsNpqpWvaUGnAzKdqv6JFetsU64y6cmy6SDRG3G",
  "key7": "4DWnmPeFVMfNfY2XfpVb6cU9fsymw2DVmQxbd3NCWYfKuae7JHQFLm4pDpZUsSFwu4GHMWM2SZsyj75JpR1wQbzr",
  "key8": "2pR2yMFcLfKEURUQPPangqGWhhXe7fMoTwmMA6o3fFddH3vTBJoyDRj9iAJyc9smvZ2GPRgjse34nncbS4vATGMD",
  "key9": "2KUc8LdWxrB4SmbVxdk351nY7zKWZEDfCJFUkguaLmo8sEidnqEfqC1aA1BTzCRumdHsx29VRwCzrH7WfeRVqbg9",
  "key10": "3HZpkkw7vYG6xM6j4XaXK8KdYiA4YMDA21coGGmJLttRfvCFQFjg7kEaS2SriVnFVYaWCiF84G4MzhiwJFxA8vTs",
  "key11": "m4xJhf7mLwjoe2hAsVK4rP9F3X84CczZcMUFQatAgA5iHiWTdJZMarhcwk3b43iHjwJHGt2YziVx2S759aCM9UQ",
  "key12": "23EWLxsuqhCe93vC9kJsEChSay2qvweH8gz5Njw2pb8BT9tVQopRUxUuQXrrWvnRiCLLYz5SkAgXXD7APRCfapC8",
  "key13": "2aPHDVaNpzjtSuncEC4Qqk2ogpJxTkYtDKxtPvMojhViVkQosBaq9XqZ4XW7eo3iUgoxFYfPJKKxSvfDWGGKZmik",
  "key14": "nsJiLTXtehpuz4ZrcTbkExLTihMFW2R7p99n5UxCHmwiEcedi4wgytxqDMbHo4atCenAkTgskCeLR2RWrnH6ceg",
  "key15": "2DZ38Nsi8u5agxLkoUtsBfW2mUzrUqD5NViqXuVk18VbxJ2MRx6GHKtng9vjpSwegjKiVBBE1iinRfDPKozzGqqM",
  "key16": "3zFpigwv8Dem9dwQ62hG47vjFBMb2mGnJwm7Cgv9ajergKF4N4VKt7wmXmFTmE6mt1Jc1rKNBNSkcUWH1v4a481u",
  "key17": "5YCsy5xdxg3x1PnfAGdvkt4zEQ2PjSk25D1Rvmx4u6TfModCzmjRApd3ggL1Z5xusTG4A3FUmAFYMUuSXqZdhLVm",
  "key18": "2e6Dhs7gc7emLHxuMWEcpBWPyptCG9trSgykzosMTC1LQ7Q5BSeHPX7MVAbU7DzbNuSyaQorFE6d7P3uYzYheqNa",
  "key19": "5m9DTYHWv9wsVEA7WM8WurfjdbPaZ14E3bH2Zzf1eQ2UPGS72PUNHmHS5SbXHEvyDRH5sGxKPtbmkZdf7V3y4N4d",
  "key20": "3hoREXdFa2ukmQzT6w9X3YW2uAAKRyh9Nf2yETeE8migzEe1anoaEKG9o5TiefW89ufFmLPJ4UyeMRjbgiP24FRR",
  "key21": "2SmvRgRv7eTKPKmvWzW5GBSnm4ffgEb3D76BkegNPDAjeoBey6rDgXCDRmpS6XXDMauboY4t42Fer7UZPvCpScz5",
  "key22": "3Did6BsqyoyUFfgmUt5hiRniShQJg1n6c3HYQWtbo7SErQCkpNKAHT3DPZRZiXnjxNYdTxmQgjJVZXtxUaTxQpvw",
  "key23": "4BvEFZBRY9AS8unourYbPKY1dP4SfBA9mKNZ4zXn9sRJqm7s9YrDeBeCybpBKx2a8frbQ26QTA1oNnXbsmYvG67D",
  "key24": "dfPZ5N9sgMdxPJZNXJSCKTwDdwjmiH6cAotJzePaWVYjhLvL5vLiQ2zSobwGKSy1aT9PEnzruau4oTDYzCFC6Pw",
  "key25": "tXhXtWMNoCDv9S5JezjzNv1xZGALxkZ36SWcUhgpKZ6BZZ9jhBMmr97kTY7c7oVXKHKUaY4BRdeNAbaAcziT8Vg",
  "key26": "3CDaUZss2MSQxRZ4gafKSzNk1egbQJVUwD25xH33Jcz265iZ8QoKda4W7Tz627rjq4aGoTmvAL1DoP6hinw7aoHE",
  "key27": "5SMuttZVtnrSuyWZ58nH1zB3tLMdiMB5K3SeZQpwcYXkNnnVzeVKhVJeYJjKMsLGfVTgSU6rvnmA6RPtVYuQ2X83"
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
