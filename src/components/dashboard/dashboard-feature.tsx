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
    "3m84R8e1VhATYUKu1NHmQN1oBimTpUJmzYn46r653qnWG5AFmD87odzaE712UCqFz1zUqSiNW8mKnQ7RamMqLiXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pdESCgXCMwY3QVpbEDaejJXBdXsQUELWPmN2qX2jmKudMvSnd1Vs5EoA2V7YZgXfjZ4aRJYUg6XPWjgWAdTSrAm",
  "key1": "3vtaHx1GQ7gJ5vtUsNGk5mSkbzFRQy3mcVfQr8h6iWgSF5by9JYugGWY9msP7cZxoepC1HhVPrfMuX5eqp6RkJUw",
  "key2": "2D6u3KwvF3VZx6udVxnSUXGFYk6FgJy6T8G1FruvKgfB6kzYDoPNAYfATfcs6vxbpUH1fcopWQYDaHX4ZELM1fPy",
  "key3": "cGtx7HLEhD2PcYWMBa27wycbMhuGbZ3eRBTMC8oyBFdMitE6hpBoUM8qjaCKoFCW3goWqzBrVsxyTYBkHMHP1f8",
  "key4": "5v3HBtTZpR28nZKfRpGDGDv8cUNy852CZhyAzaT16HBNoGfmaqxMXEZcPKvLRuuVoPoaTL5JzrSCq3xkEV38QcqC",
  "key5": "JbzWBLRAwZgsgddfv7udhaMJZgc5L3R85x7qXJZ6NaTfe3TwamE6Vs3XTzFiMa87dJxwj4ZjyirtAvgrknkAsKa",
  "key6": "3o8Fa8g4sPM4rYeAw81A9kuWr3KeqfmQhmrELdJySiUYRrF3icY3NBi8onJ8K3RU2Dg4hvy1vreePw6pGVVgTtzT",
  "key7": "3Du52fkdE31Ptm1hVkbbYTSG7RAgNUm8GeRjhrDBvHG8AWf4LFQigQZf1GPioRtEq9ct7QAFMBtis9rEnbKUYFTp",
  "key8": "2rHNHuAj1k7rmYGvqQPM1Mhkdjd6VFDiGxyrXJd6TPS2QzkFi93mksLzM3KLnVxT8VwN7ch8rPNXJttMKMU45xYP",
  "key9": "4VBdrrktNsjvtVZZ3KbSy7LdmLuWELkAZRrud8Vq4eDvMNWwwYmQN3VY4zBrQEmmJQ1kZrXfQdHhpieqYjk4QQG4",
  "key10": "5TGuyR4EKz5XLK76BYnDSE8aPytij9AXBTu6p3X3NV5Vu7BtW9YeJZujCoXnCSWtRbHTNMpn6zDyBvFtPnKjhN37",
  "key11": "2SdfTKcPva5Av1WTcmP9ZTEqGxPmGvdggvgNsQtJVxA4ExJz4xRFf5oZ9f5wmALZhpaqoVnnZwTJwZiMbC3UnK1g",
  "key12": "2G89F6BTYVC4tYu82pFVFCWQxzf23yrU9fAyFKRAzaiDkJj7rK9k5Gx6vb4vFVAygF5aPuhj8GY5kr2uYf9H5et9",
  "key13": "2ED7Hzxu87adaEadg8KPJaCEU4ZEBSGknibn9fRqVaSSPaZ8a1SGwA2xTtPUcd59RKEecBcUf6F8P8Rb449ScwXx",
  "key14": "63bmj85Z4muhbG2SJMmXikV1QwLarYqxkBLGxgkZ98WqYiURAFBVchhX5g3sfKz8q6SQtTgo6KPVs2njME8J4TBT",
  "key15": "4n9bqzCnbUFUrDqhEsCJDnn8QNvjCd8tkfRiPkqfKSkhKQXs89JG4tqBeQv59x5sDs4AxT29n8BKMJzH13XUbVAR",
  "key16": "2XphMXiVSzwvKgN2quAprCQiR1hZF8jciKTdBExc276kFhH1hjubc6sdTpaP9V5E3eXJ7E2YSLeajv4S5zDYxdN8",
  "key17": "5QZjM1DeBM68u3cfJoixhzJ8wudjJjWE5p4FTpWBApMPkP6fu4EfVo3qgoUNvNP3HGk3gs9ivh3kATsBdp8dgvgr",
  "key18": "Ji59MB6yHPjrky6H8MEFcGKxHyVw4oBMhKTAm5sBKjxwbJX2v7ttoXeBd9wHthVagusKNQYs1Y5ZYmoxrutg4wn",
  "key19": "bJ8QcZvvoirKCQRTVUKS22yzK5TwqddsTEhjBQd1XvZSRGh2LkgF8PsVRrG2RY322XREtpsrgbNLdDTYWxHWb4f",
  "key20": "5MHuK6SGoL7HaRvNKz4e98tgmj6U7ekmiohBp9Jxyhsa1SZAmg4gEbTQsMFQfTQERBk4bceqGDw3qSinDv9gf9Jy",
  "key21": "4B15FJFmSg7MQ6hkbruSVr3SbwpEuU48eiUShhStFKqiaG7gquz1Wz1vHQxB5qSSH61uSoQa1Tj1Q1MiUAFqH8PD",
  "key22": "2T1jNHYsQNMuAjP6FZ3jAyknAzXLshnBafU5Md1Cx5dCk4ZGGA9cYKvE6XU4BbAM8AiptSyQCH5LJvwpZAxyzEBa",
  "key23": "Hs7PrkYB6x4xzkjcW2P9GwD6WkQW5CopDFcwWrL8SNznq4HwCHag1NZW4ygpirJB1KHnJAikpPUpyB3DA4EbxKx",
  "key24": "3J2Lz2jdQibMTZxR7qedtkrXtuhy2PuLTtScC1LKXRyhBr6ojUacYtiBZCw9bynUpR4wnSHjWZ5ZkNqdBwNSjjEp",
  "key25": "4vm9n1jcqA85knmagidpHZMkAzTUQKF5adY9iYPagBhdWFkw586x1NQEvQLVCvh6KFLag299ACmkwBUyGnaVaLJF",
  "key26": "izAAKSWVXwD46tSmB9zJHKkiW3329DWB6N4oGz79wTs3Wrkpek83QrDgaSfiRD8mfGiiDeMFQFZDodNxGPMzDTR"
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
