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
    "4Rek8EGtp5okwE5hzGiFZ8q9fP7VbcnKFCFYGDaXNHGTCv2Dp84vBPhBFEiuNGB4JpsRCP3aNF8FbbZGKAGhjFqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "479zWjJAFFU7XMaB6APp5JUv2hiQ8R2P39d6uxSoevJeHZz6DqdAjuFAJNw9uSzHDM9kWkyrqpodgx2EYiUirhbw",
  "key1": "2wYS9U9YU4HtNmCaAwpRnWFEukuVhdTRsnJAVQU9WroAcGpNKgoUVkJ3Ha8NW8gNg1Gs5e5FKgiWnaGVVxUGvDEv",
  "key2": "37YfaU4sw8wEDuqfnCuFoMd6wDbEWR1XxVfPVoBBtqGhD4pvegLteTwjj4fGi4JjGNiXPZADcZtJJPC3uu3yebmR",
  "key3": "4fsyxKQAXUngbXh6L6xLitYUFW1s7TxVqtsixBgG7Fb6F5R2BcfFBoeGjEDz8D8JXSErE1vbMH1hWzJ4D3t9GQhJ",
  "key4": "xBK5373niNN2huVJQK6vQvUjnuNdxV3nwtPrGRGPKRgaYG5osFsHWaPCzhkv4te9Vv9uPFiAWZuqnxibu3VyQ3u",
  "key5": "YZ7rtEUmtqjTpwSgdrhHawHQpfgy271xPi4RY7JUTGtTyDCJeqvRwrALJDUgMgJgszgMg18qwmu1p5rNHxqQEyA",
  "key6": "2HXRDRswCC7gdns5xs7njAXbHFfwUiCrvvrfJPCRuLN3a8tk9eDKEGKJkVExXfpSCyRKxMv2FHka7rz1YjR2Jrea",
  "key7": "3kGBe4x4J4UUhyYc6yGKhLBuy7YzPNNDBRyZtUzDAPVteFPnhUy7VU423KNY7kDtYJCSSkXeoHvK18tXQA1X5bB",
  "key8": "5oWzyVg4aTc4ayyMyAk1ypvLT1aMHG6KAnQLvNZso1GNBLeSQ8kiPJM6zcKumJzFkJzh1juHYv5EvBA4XevJPQj7",
  "key9": "3VGAuoUa32m6PB71wVC7gNLQSMkrGd5WwdP7cVv5asEBhR5ydkAsRYdzH9Xkw5hj6aqgUUJpt3X1qjSfKroi4Wqn",
  "key10": "5rd3e3MtuhKtwBCJM6KzqUSiX61g9cec1BBqYZcayCkoCxPJ1e86PKRWJ7Zoos6oCSm6AVMWATrC16Zn3PcV8g9v",
  "key11": "2AnH9hsvdYEgL4uLZbZMGq9hLTKtQN8Rj1n6KiyxJZnneMZdSN2rN6YLHhvuXcAFKBidY44ZCZkrn2ExRouAQbij",
  "key12": "3JoYtCEwcyXePKsupXB2heMY6Uu1Dpsb3MLCZYTmJTDUSqKCfweWiJGRm4wqnuR2cHYuzp6WEPWmE3fCXqGPtRes",
  "key13": "3QA87Nvbo2hZiCpnytDqbvo7ztVH37nzotGuyBxdFrNvYxMeq97R49VnLaby8Mjyihqx8nfXEGNAETgEPLaYjWNQ",
  "key14": "5rvk59SXzsvFmgyZ2MvJTwUEnYnY65sUGweCnGZ4UySgZ19rRG6PFvDJXLVPJaZUU8dNUNYS8EE2u4yBhFfEst5g",
  "key15": "9j2YwVdA6MGbMHJWuR8CgetAqHvCcdKjBPMY27Kco9HtjMudqiseoGxMVLSu2DKFgnYG8dWd8BoXh9sL3pMgcdV",
  "key16": "2yWfmmnjwm1nCwjcUAYEnZFimCYMB5CSEiU3bGNdy9XeMnxWiQ2L88N79NmFu4yvGLmqDzCjxmho9KDVbxjgmF85",
  "key17": "2cvowM8tvjZjACTRdxktamsUDAHnjX8bU6S83KNGuM3MMgrYwuPdyaFL4Z8hXWxTCFhHJUK32WeKu2ZiWxyYk1Uj",
  "key18": "2Jes31mXzW8Ys9j2W6UjcvPT5iK78DMRL1BrR7Su8jFsME1cYPb8zs3HLey8hhnCTqDB4P6XXRs1HHDyRCnP5u9q",
  "key19": "VFPzfR4bMNLQhoeFU4BCVCX55SNfVGPcD25TL8k7gr2DD6LfjSZHYXNAGD5te5num74pKH9VkBiZzQ7GQuqdtfX",
  "key20": "4ccUMMH37DrQCBqrsSrjASGsfJeQzrJpQANKEcXvzTuW4fa7begqdEmxxv3Qc4fGJoTwMsPbeAHQ64ntd6euG8fo",
  "key21": "4PELF1hU3Z7dxrrQGLHoDD2BgAv7TUQVAJkBVqkTgQ63RgUFZ19qMUNryVzSykwgKrUFaasoeb83aGoQt466pDys",
  "key22": "2Kp9DuqFHKFNAcejUyGNdkqkmrZQTyH9yy8dEKpZduRYvYCewx5mXDLkaHN6kUTjggH3JiAiEfiR6D1TPVSG5GHo",
  "key23": "25LkWjr1JqxzhDWqA7e4mmXyqpqSqKY5e3ZSRSYFo5Wjt9ChqMkXVa2LwKMqC8RrP8ZxRJ8JT1aFfqeY3ph61eya",
  "key24": "2LLfNf4zeq88fmvp3DiMvhnw2bF9RkYaNxaVWJuqupkneK6VcdKYbZjxCYvG5s3shJcbM1CjxCVmQCXruNKmf582",
  "key25": "3FRuuh7ZtbpoStMom2dCcR8zpCeAzU9d62GBjeJcJzKtjAkhf2ymsjYTxJuowJRV5H2myex97upd2qe41jE5uQNe",
  "key26": "3dwYiGaJcgqaKmsPP3kivf6RtuBC8CPFBRcX17bYsgwGKxw5pSaQu3W9ky1hJoLeqqUAhLJY4TixztnFcGjKhzFy",
  "key27": "3s1qBdsXnmYdHYwgfY5GCyALY7qS1BD1CUsWZ9aNYK1JjVUPNXooD5TeYVmUuv92QmLa4HySQDRmcWKGEexjNkvc"
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
