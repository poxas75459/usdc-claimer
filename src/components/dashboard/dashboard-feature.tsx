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
    "2qbZdKwTRUsULKm58uC54uJoYXCGXkByT1FXfV2bZWiwqMPp72JZeQVyTnEfiNM1RqzyrGQ89evhp5e8EQ65b9ii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tPrWP5JdzrnN9hwHm3qoED4FQLmjqPndEKne3doG3vhPge3Re9JcLuKUVy4vAgw3vgYCXFcrtwTXj8TXCef3N1z",
  "key1": "5khN9gVtYBpAkp16Kw73drQ36vnRjJg5msuT38cNG3pKmDxBj5THyNKmw9FWUzWk3xp5VYz1Vk5Jde98zyYkPXzW",
  "key2": "64R3cyApr8BeoYkqaaJY8EzEJoeYM2xWma53sAkvBUBeTMKBX33d1D6ndLG3yQcWtz86ySe6zv5D9j1tVo8pQ2dE",
  "key3": "3peuF7YhTWn4bNgu9cYUUYeKW63JJdkqy5nRGGgFFa9BpJ7TK2Qx53RcU5F32fecD6zsd31rDukNL1QE7S118Cat",
  "key4": "3dGQ6qRdEyBUaakRJe8y3wLwn7ttpddD5J36LytJWU6RmLkpY7XDEcwRiPzpvPy9phA1pQMAxjkGkTMp7Qnx16NC",
  "key5": "2k7qeyJjefhjPLxcvDArj2zqvJEhwy3STPraTBsQdjSC3yrSdqMZAeFoea4f6xesWfsi86pbT1HhvFMU6QqdtmSQ",
  "key6": "61KYbny1TeFnJkrVnYCzchsJ5FzPiMwH68HdnBm2oaSmGnWXnVmLmZBCezrE5Z39gKmPRgKQcm8Yk8q45mpZtsXY",
  "key7": "9DYN8VwHximbdz43JDyiAHpJgLpTXb9TfvUA1T5yFyw2WtPTamn6H7nxpMWTtYYh76Jincf1QYotBrPCDS9HdRo",
  "key8": "2zoG6SPGWkxxwEKF8zvTQfZkHWUnwGsVR16LXUbjmNhDVrr6huhB5PgmCkAX9gAJnbV6c8uMhzpnGhLRiQJFozwS",
  "key9": "wVyNFCpFXpWczMo6mF9pVhpVU3qtAH3z9d72wJLgb2H2aoCRohYtZ4viW2ySjTDZhtNvczw2erMyVnbHZXz96NV",
  "key10": "qSdEBBUmj2nMXHfkrZbNXn9ijUYRTCHVucv8UZvg2powtZGA8u2oQSVHr9H8rpvAqVEZ26bRmXbzB5piCk1BFSK",
  "key11": "2RHFdzakr4Ziz79LHcjuaHG1yhLLBcJuJcrof2fvrKJQyzxG5bvZ5qhi98yfMKWPBETzRYV4Hb7snjn48ENYm8sD",
  "key12": "YEvjYkMhV44k6esKnbV6JP9TXmsaAi3kWTEfdM1aog6mBsqS6mhZ41xCbfEDDRseS5yeJmXUmSRKTxPJ3yv5dik",
  "key13": "AWLgc3xkuYrY8caayLPwC1WsFcqqD9thBVwdmKpV3vsj78PgjYBXEk3ygNxkqWwK1NdNQ7b8jWQ9AkYogCtioMA",
  "key14": "3KrsG7wQgi2QDWn3wAeqa96BGTXX657kbqCC45Gh5ZaexFS9eJG5jTP5o5VDMwKKH3Lo9JGaEMaHvEUvsgA7QyZz",
  "key15": "4H1WQdMPVniJTRzAAzAEQvHFfbeGhGePawUmZYUgvciXfSpBi7GbQKmnvfZxibxVD8PGVgzzPwUBK3yxz47ohmxa",
  "key16": "4nBUJ4bpyiq4RzUebC8xfs7jYRrRvSDN8o4yFwLmFjz2cZWh62cWvN5MhMyWb4CCAeHC2iNX558Dhgf4i9hVPm4D",
  "key17": "4v8Nqq9vhyWs6zsF5VnYMSQy9KEWMqb3mAT2x4bRuz2XL85yr3XMberaQr3wvSTugN5ZSyXwiNXnPSF2wz1mefGt",
  "key18": "ih8nAg6ZYiQjzvxVbFz3FCDYRhPD2vXxK62yzCFtmnpwR9rmnCNGpwe3tzvTdTzcYDZJzPAmswTZV1QLTu4qWTQ",
  "key19": "36jzd4adnLH8fuGSgDoYBCtcYYonyLU6BE3XJ3yLAnXqjT5H3Z8hB6ZnmyLCtU2QxekUL1ELN57qGkCTmBJvXks4",
  "key20": "xocyk7TuQ5eDxZfrbCrL9awJ8dATyCDYxRDp8aFKQA68Hsz8ie8Ec9bEXNbspEu89d7DPnHNSVqyJoShSswyLZw",
  "key21": "23sM2FGfQU8cEyzThudi6bjxFnyFT1U5nLU5bqnDV3d4SLytaCNQBnyc83KMwp8cmDTm988LC6BL6cwDBR8m8Eco",
  "key22": "4qEfyS88W1BrNdnVKZzxNvyUp1MMEz98zK525ZCPMdmS8KoJyxwYc9yFWthZZTWmA31vMqiFXS88Z5RTEKjEG6FY",
  "key23": "4UNdpcwcCYg3wot7bpbsuB2nqBUVS44gShdS9wv5qJNTp5ovtx5GEgwouBCdpDKZqLf5wbLHUGDbUvPJvQhu4HSo",
  "key24": "2uSup4WtodWiBBz7wMQxUsm1eAAoDd7G5KcZ2BvQPh3CkDjBc591cSGUSTF7Dj5fYVTCc4p5Kks1sZxBkyZABA9f"
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
