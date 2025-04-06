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
    "s54Rv9jFWh5xvpZK21SpoRmGnpa2UKEqzLvzBunE5KKhPjGodXpWNdpc7u8bQkSbNhsdEWzcNCKBRNwh8jMHMAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RwXZMkTxBpaxq9SXuGfs148swekN78qvAbvhjciweABn8RvaHzHvdJnW95U8Yq3h7TjXDGjYV9xauGaxwFxe3c2",
  "key1": "56LzRQXpyZsACgt55fd8YjQnPGYhrx1DnD3mLxhxfSFHK4sdMeFF3AjPLZVN5W3VxYe9w77Gda6yTCrCF5QTuV6k",
  "key2": "tWy4yGEFYGUbJL1E3zyHHUcnpUSkywNE4kuYsC2dhGdAxuQ2M1iNrR8q96ro9amL8x6x8E7uKTpY1mNqgVYvToZ",
  "key3": "4n45J3VNtHvhMPKyB2hz23GuuEDSLDvtG8iN5KhEVR9A4mNqhFqW5Nmfmct6vu9mB8kZUBd5d3o9sv6xQWRnAdA6",
  "key4": "2iZEnDF1eaDGdwZnjP5j1kNH77Ha1qSi7fKFaK3mPjg4z69tmCXC7aAttqv3RrgV8BaJ7TvzLTjfDTWJD56jFWjf",
  "key5": "5o9D6sBSWwJLYutHSrkZT6rDjZ8kTW1k4KhL8w4DmwDCdUaxzaoK5VH756o4ANoHtcGpawNiD3fV5V4UGBXpLBSg",
  "key6": "4xUXj4TLPgwcf81RYAqPKCtw97rLGAeUJTYCJxwZeB1qU5zns7gsqRvh2K9BivQZThuJFyhKSCv38drTtrobU5nU",
  "key7": "2mPD4RLdCR2FGwau8d3HJaWz9qv2ENM3LJG3y5gVvNhvFP9kXPF7keuQpjUmkXdsyhAV5aGm12xAALBG4uN4nfHE",
  "key8": "3TPFaZqrG4mhMBSH7KE9rJcivQuH2coYMsSx3rFo7NNqtVp5URwCWan4k5MNYxTYsP48mt8fRtutWCXRSXEDbnhV",
  "key9": "5aUmdbvb8cQ1xASxSvuWNNHx9LVQDRfBbKsVqQMzawBjxfpirfnsXBRUfg2v5YciNrWSgPUqbQ1BwppZ1LLwq7kg",
  "key10": "2CDw74YMbj5vU8rig41Lp5BZv3aYr1JHyCiS21LwckDrzb3kLMkh8bFSFqTUQc4cqT9ePcQA76VYDB5Wx9zuTSX1",
  "key11": "4fmgtrmz6PtGSJBR4V2YArDeGzKJozG7B8Hj2ZNgZDc3PWxZS8k6hkzn5tGaRCbHAMkCyPVpTv9NYXJ3GnZhC4HV",
  "key12": "5q8tZf6sKQn88fXiEaThu1TkCy3JLJK3VSM6kdWKPaaKQZRWAfLFVhjPUJWe6QqKgRbnU5GJftBJ2bfEQb7y3B2U",
  "key13": "4ST8YHtQs5k4LzHhZGMM3wmTdvph5hBBZfurdQJCVqXqe8Pwgvs5fpcNKb5A2t1JkkyuLYBZqM94Q7SXwfUWVgEi",
  "key14": "2Fc2KRMpMBx6JZjXVgjARHq8uj2XTcXZ1ZHfoe3h9gKBxEuveVQAAHqFcxjMJmjTL1dQvKuHyXiA2cxX4pZpLjTa",
  "key15": "3S7HEsqVx8DR8rEfTFz3GiaeboiLgyjg1LVk4yr8Rs7sRgcKzM5nmUf1E64Xqo9aEQDyktZ3gEwwfc3YC6Yfhswd",
  "key16": "5SUxrqTkRi23FQzx26zx1vyX38YSju3xAszgw9URMt9KJ1xS8pKsqibc7dvPbRmU4Y6rve1pAe2mAoZwo3X2XgMu",
  "key17": "4WWYgawJrAiDhPQAZvqr1bAZeyCTAaVeQkMTTcwMbA7mpynDCidd5J3qqKRZhnAkX6KhEwLkAkRVbA5kHdKhWLwa",
  "key18": "4AaAKxaSn4C8gMDeBkaHqCoSkceeEi3x3EfMAhwE6wxADCUiiAZjve6vZ1Zsy9n3CwFWcZXGPC2fhV3cWNFzNfSh",
  "key19": "4BQ1NfDk5rctX71ssf7PtZKsa2vHkpqU1ntErz3xvT1YMe8AStmGiLcjn7j8qSxXzHuGLCNccNAFALydPCzYSHws",
  "key20": "4GBa59sNv9xapv2MczoqSnXByXw5uftUZvrWgNHemQDfBqobbqSMyt8YYr9hioeKHG8AUZkyxTVUosnj3qz5LAe1",
  "key21": "4CunnhTno1y41KHnwnC8XSkCmi3LWYjDkmbq48JoCTQyA945oEPSot3giqDUY7195khnPCCNiLECbg3GBAhN2abx",
  "key22": "39ZPap431Dh98WxwmRrAg6dKpDdwTSaeXo3KVaGr8yLiGGXNhzL2oPJBsfkPa7EcoUX9TaJDBxGc5XmWYjmNHuHU",
  "key23": "3gJ9aCj7MGUWgYEipoXBRYx3DvzkPQfaMXAiZ75dG2GGu22F86aeNAGq2dKsXmLL6pAU9KnyP2B5WkbmUwGPoKzi",
  "key24": "23ex7qs1LckUBPL52hdG3g5nxki6vZ8ZVDmKLUXYFTC97x3upofpydQ2hryjh7jo6RqVbEKasCVUWMLuVU5uDTcT",
  "key25": "5sTKNQgkzdodhAR3okSwPacASQphUzqgSxDRbiyK3ZP8SVpkzpECmF2Rt4MnpfxmcXTYkqg1oZmzuFyGNnzqJ6fq",
  "key26": "1h3pXyoWLwCcfTTFo93rCgxKyPcePpri6fyy39PcC2mSjWMJaihaGE1FA2fJAQPMpv5wVacx67sMYMrHKVJ7E26",
  "key27": "31JLhSgQNTAffaax438xeJnpGSU7huz7fHJAsSvRUfcqA92FfmH7BfNR8D6Emz1c2k5GPLcTbcfuF3PkBWWwFdMo",
  "key28": "3Ttv4EEzjua8ZVAJdhfxpdLTn9iGxiN1Zpe4DSvsBzG9LkstanWuUccmbrfNKnbayqALwsCWtJoyVkLpZVXgpQD1",
  "key29": "48NRQWoFPdtqJp4qmSR47H1zDCPbLyvSEo7EJryBTYUGfvWsyT1wJ2d4mPXX81m2NfHbWEbX2ZQu6n7csDsaUFVZ"
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
