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
    "5xtiHS24zFKWPQuxWCUeAgZJQf2JvzbDHGjZBPCDN5iGevZGAkEXYjNgVe8KmihfheyPXxDHHAHJQMEeom8ryTAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MP3Framt1hwHU43i38CJ6kg6SYVBSGEjyHhuFP8dPKUVJGGmYCS5gq33iUm7RYmcFVPP9svcqjKnxkQagkCJY6V",
  "key1": "2CB1X5MxZyMUJpKvsbW2KQ3ApqzEnF5Gi833dfvc5dWViehtjF2DFjeayr7mXfz8UAenudRrz3um6mkAPL64jiP4",
  "key2": "GhCzAnaL9txGzTyY3xMQ6fx3N2oAjsLqKvxkH5YXnwJdLQwuxojE9escQks6e2sefGuUEqn2jubJPsQc3UteRXq",
  "key3": "5WqdZ4AJeJaVHWY7FFrE3VdCFHBSwHNz9E8VMCkmznJvsiaVSkiJ36LHe8xmLayychUcjLpqH6gEiL8ov8oiBSn2",
  "key4": "Q5uWGQfkE3cd3xzoTqiuQhpTpBiPCFs8HVdhWMX2eFueyySDLxuzwVuN4H44oHvW92fLpEbuWD1MgY4qWhSfbqn",
  "key5": "56vasdbAnxZj7VRphR7dvwLDFvtdBnScQXgpzn1SRLvNJodfkKxptfCTnVve9NbjC78idiby53fHhWC13tEnniqF",
  "key6": "4CRhuYjmQJK1YpbkPqza1CPL3qexCdN6Qg6RdgpEbKDwzJCmEMxMaspYY8Poc8ETmbYGeauCEPW2BjidnjwG5exQ",
  "key7": "zXVKYzGtqVAyFDne2DZxwHUXXhboqzig6csKvsVHg3iLork3fAVT8MfR6vNa4rJrX87jTTKS3kH3Ag4tTo5KuRs",
  "key8": "4TNZYvqR7RDfuUSozW3qUnJnUe47gLAcHdtSJW1EXGoUjbcC1rxGd7W6CDWax5kRvf4tjYeNpAUCCwzAbWsH1LGh",
  "key9": "4Egz1d4iyYyeisHzTWz95H91Bg7bDrwvFWGUg8zZCKeskAyt95n4MhHQquz6rFbhYTg5nLdjnweAy4cpFS7G1D8e",
  "key10": "4cmAozVb9ptTcGAsdKZ6QGwDrM4CPcfi9LEzuRmHw7p7oUcgCUADSpkVpbaXuwZLJ83WkBRUUkRT1CVkhZTFhHD4",
  "key11": "5mo4W5Yt2L3ffr763Tp4RH35qi4PLAZTGMPjXSygSzDaSSS2zcMNV26dcidf4JnN9kxgpmdqrB2ngDtYFk4ZXU7D",
  "key12": "1EwLR8VsNLyn9zReJCUuCmsmzUxiD6UoYwoKaWYzhztbRaK7AxDuZ6bcpLRem65iUAXaJaqn5vGjaNujo9G2424",
  "key13": "5SDtTSdjNjaMF2xwGFpt7fQ5mTkon8vMS5fo7BqFn1VPN9eoknpBtMjdkTZ2pizs5ackaQod79z6US625Jfo9yiG",
  "key14": "xcBQKhKpoaQMECTLqb4CqsWhCBnXUbgiQZwmKM1jRh3WCwLZL478NrpS91C1wXLtuviDjaz29S6hPjciwwnWP1D",
  "key15": "XLahXBuX97gkVXzewVwTNc5o2DBppcHZRXi2JyJ4cimJr1uggNGmMzCiD41gvSdFZKKkbMFBCSrVCWiXA2DvXfY",
  "key16": "58167sMeMMABbXBQ8EemsHNRQRA891aSwKwSaokZcLcVEWRF1YDhXquBs2Trou7AABsXXHZEPzXEiSiSqQjvEAZY",
  "key17": "3gmkQgeS7d9nRiAtzKG4obfxjkoccFfMY3BgmyZF6fUMXQEAuXQozRcHN7n1tmLFuRaa6n2EE3QLKBUDeQi8xKz",
  "key18": "bNAcCnZ978gqcTUMUZFpDy4YKDcKqPBG2srCiBJdFN4Yqt7Mdu3XcNbnx58hPZEtTdsBQaGSwNNqncibJ6mGMod",
  "key19": "gXQJjfPsFoZ75WLmKdWdhhgtUf2vJDqhTFQHtoE22vWav5HJWGGc6EnhB4Lvnv1m8HS1BCBVSXfm4TYmDnYaMJC",
  "key20": "2tsZ122gTszG6jM4cu4bg2Af5i7hFhPx7EPv9HebyxM6mVTq5NXafpDYfbT7hC4AsFguwUdM8RoCLscwYKLGRLfj",
  "key21": "5bwpuTycYifNBwB6h7KFdtNZo2V2957ftrx2HNmDbfXcYCnbQ2pdeAphaYfZu8BX6V9ctq9YvpXiUCW78x9rVxg",
  "key22": "3g38wqKGbAvgprSghGsDCFEMEXyZuhU1vG9tfSaPzg8ZFjf2CJ4SsmLxZnerWz7fNwrDr9FkZrKzM5HrBj26aogk",
  "key23": "2Sud5kZh8LxEm141JxLeg8mKHznW8yrQHrX5uPUep7gpKBw23gEEgrxUcrBmgJQHMs858YbxVJGoawDMnA551pPB",
  "key24": "4NpfsXiLhehMnTLNcuxWXRzE3Ds3kAYquKeTohy7RRxeVqmeLW6ZPvVpXHRyF3ZKv5qzsKeMTfydhcdLgbNfq7tg"
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
