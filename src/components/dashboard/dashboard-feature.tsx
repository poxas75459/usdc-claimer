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
    "ynFitgpCrhFc5iFi7ecyoUm8XxbSHG2FS4xLy7BEYPEukihxcb9ga4k43eyvvmgrkZBJQDqMoHbLGxVzFTBEdEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sSmty3etu6ziEwvt5mrN6hftksQRVQNLMNAb7jVVKF5uPnb5LLC3MzdE8QFBcQDoX6acoihjgHqXJ78EGCfwhVE",
  "key1": "3D7c3x2psfigfekAaMJ3kTCdTrWcXFbx7wPUEGwzrujwW7kXmvmUEDxGoZ6iVDfbrnjVUXERK4retmiuoH2Rsygd",
  "key2": "57frj17EeniuG8D1Xet3bDxYWTXdqdB8AtvVX2sF9pFZD7JrGmDzdT9eDNWGzZQ3ZfWG2fsvfcTsjWoJhVdxHs2K",
  "key3": "3pVqcR2YhuJPaVSWwh3xJtrKf3RN6Kbr554uRhKznzWPECsBnAday3xbVnx9uaQKfMVrGpZpWKz1oMF1Em1cycpE",
  "key4": "SF1ANGk9f1kPrKfgjtrnchHGH3GVbUPaUaU4psFqrZfR5uafPbF3xMXyC6tvmZgvYTat38JP76WGy2F6e11spVu",
  "key5": "3AoZzF8P2yfDJk2LXL475DBPU6dKDi46SurBEYY9twnatyaS2boEh8RcGsEmitn58skYs3HUDEnHuD8JkoDkno73",
  "key6": "U9VzBwyjokmhj3pMt25z8k4Vpz6Unua9JhMPjqKh8otpkgL14cGhoQXEbbj8fJMkLwUDXjEzJWfXu6j1sXs52Ls",
  "key7": "53dmM3A3oAMjeRNSsggQHqMFYF3MKyVuYg58nqUkht1rg45pGVHpjG2xdndEaE5ktzmmYKuD5osBRq3YESZsCCas",
  "key8": "3Ufoarmo66n5MSbNCYW7c3iWMFZV8VQUdZ3nXD8sgiaS5rvH5Cqi2zBpNxrMknQbGd1guRV7SdNQ3pSEyX3NLks8",
  "key9": "czapFyxpXKBkTEXh7dKT1szB13z2Wg8NFyUhxx7EeU7vDnHrx9UUT6cMViLZTXXyNzjVi9CXxF32Ajbc93oW993",
  "key10": "2Bs1gR6cn3UAyeuBbvtTUGBMRKKABT6SWxPwhqLhoAn6pFw2F1KZKpbstQLWBt7beLJ36e3PWeVfoZ58RB6mRqW4",
  "key11": "35SkhUWyQvPebwcvAFbddgxFZKWdqrVErBN1kKzT6ETu3A5gjoRoQ4A1kY5TaXrfeFghRfxG34Sc2Bk4Gouvvw8y",
  "key12": "3a48TR8PbbnZtn9z7z88wPGSYyU5hKCzDQs3HTXRFH3R7aWqMsN4VjFLNLjYMABacCgebadih1hKoF2PvHD8mEai",
  "key13": "SBnPH821rgGFTTeT9kSpJMyP8UvWp8bmgq4Xfh7QJFqzpXJ1QTiaBbE3WEcfzV7EAbuV3NqWQWPwJ81uwT2TsJL",
  "key14": "DeiiFs4s76Q5sDJA791PkxFa2HT2Eyu8arAaHdgCFt9JBfCX8seELRWFkBAcpdQVnoyMVGTshE9CTJLW363kP2T",
  "key15": "4n1qLG84Rb8e4D81tGcPY3mX8z8gdPCvMztfU5jcHvQcZdHG2suW6UrwCE7yKfGtcRbGGsvfahwUUNFBPjZ72JQF",
  "key16": "4RR2e43EJpo7VKrW9EAeDjJHa3d5ch8g4ZvNYiPdmobCEEECC2YaNrs6XxHHhC4W2pibRfZtcyb69HdxooKb2LAn",
  "key17": "2YKLmjfaB2yvmjWvi7ptyAXpKW9Cj2U6EibUx59nwYLLv2hUN9n8mpxiDGybesgFkWupFYE36iqqDKjXmP23YV91",
  "key18": "DbD6HSLQxaT89FeeghVhBAYk51BtEKWWeTW6aYJVq67eBfEvZY4dz6jjxkputAGYksF44mSb5mfrMNVmznUeaRq",
  "key19": "4GAS2YdhvKrksUaQfKUQGqTrx6kVZtEsX2WWtQsNXDRQePE12XsQYnautcht4NKrDcCaPRsELkF6uuKrqZkvekNP",
  "key20": "3w7hPx28hszovyvjtrN2yGxWHfSwCEFkhmXg1JSKSKa5g2EKSgzr3iZGgXqARMJGDrG2149Tsbm9bhkpFUEeWjdG",
  "key21": "3rcdUetFiPviqmWgkzKbwgxUyvMVouK5DPsPKdoTsywTdSXUC8ZskF3jH8zcuMA4LyZH9d7ALwhABCWEZTGuq61k",
  "key22": "EvbovJTGNNHBnhWo7RH53QUbUT3paXzVbzwesi2Bv28q2kR6W5hn87KVFJ77a4X9HjwREXbjFUQmbe5Eu483GHR",
  "key23": "rFq4nogzMSQfzuAuaERhRpxgGSeY9uK5bsTNk6YLwWm7EzzMqyBjKLq3RoK6BZoERRJUBpNetqRf8ggbhyJvspA",
  "key24": "5aWwzpW1rbf4UE1rFc4gCPyfq29LVFYT7rtZNnmK3cq8zQDGFzbZthJ6jJ9h8ZyPTH8VYaVZevMQH7s1HSywRbx8",
  "key25": "52y3xpYMZeEMwxEJnec5Zcj1EFaui8GKftY3AC8sd9WkhEkqN94RHpt8wPTepu1w9A9wNbi9PACCN5CkfMCfFmoL",
  "key26": "octzMRVvbjMm1zPBZQsQpU64Udy8FP1quzLmMDh4xUkdHPeMoWKws2drjR4VNp5YiQB88cJfiehMQwF2fQ13Ki7",
  "key27": "3Cz1TquFWDtMAZfnMgdFZ5bVpinTv5cKq6ASs45WYsrmGxvSESTysTjckz1uYkxDmRbGuHA91KweBH3iK7XANcsH",
  "key28": "reVT6LWy8U63E1MVMwH8eAnP8WnkH6QvnEaPoWvYTyxMVvQzJ5XdT1pKMVGDXzHmJo41PPp69TBprrEdpbr6Cmn",
  "key29": "44bpXsYybPG1wGS8kGNbEyT66HWyNDUyEscoaFYiw4GqCYPpTAvaCXRQG9JFZJMnaYfExnuU9gjaT2rFiTpnKdYX",
  "key30": "5aqiM18nhzTJ74kEaZ1WeBJ8mCZcZW4Tj9jSVi8KrUeyUNCqdPsTXXaeEvp7aFm5z5a4e3t8osFarAvadtahpDf7",
  "key31": "3AHf5mFU1LEnqkZzYGUN95gyoyXXXD1LcCnCxVaTyKeaXJkkCf7e5ZY6V8S4XPX1KkJoXYDKnmnXrHMHK8cW1199",
  "key32": "5xpMj2SWykVrwRYdmHBtiQLWSqD2SYMjuUSDzpUahywqLN9TjaDc38xq1oCKxcjRMAU8kunHkUFHVtYXPbPGgkFb",
  "key33": "5NZ4RM5VquH2DbhqCsi5ZYsRAVteFQvcF4CciEDUdnZt5LV5Nv8jBZG3QvrCkrb2fTMbNMmuCo7x9pT4XC4NPHW3",
  "key34": "rbQ1ETzYJgubhLchC5FgG9siTAyuqMwAwFd5P8CZv3WBzUGRwrZhwqqNkcMWfEHU4jbTiJMDHh6iW2JUHynYcxC",
  "key35": "2tHkb73A2f8Znjd8RruhsXzRzkVq8MATa2eGJBhETdPgmk9AksaDxfR8N5uJUmtYiMEFCgh5BxdBiQRbXqsX8wip",
  "key36": "crZmcDQDQDuv2fJCUBF3QA6YTa4PWQJhdEUBsSjkWJ7P5Kjr5dK8nSmkm4oy4eUyjjyvDvMyV78tpnfcDiPgp4d",
  "key37": "eLDcHT7ZMhv6Z3QukABKoSFWJ6bti8wXYPBkennYhN3RNxHEX2KTNNkmyGmVTSyJNXdwQSi79ggyVDkEaxbB52X",
  "key38": "4n1WK8aBLou8beyjmU8NJfmNQWhDfnEsv9vhQpHUGFdPc9x5a2T513CmKbj2DJM8mYj7CVq9NS7ZRfR6nyEQ5bet",
  "key39": "3PtMtkfxyBtsUqCgN5HPLT6LHbQkdL3yHxtSx8YS7VgzYyyKJCSx8QDHUgdgKy9H1NYquxv1sjgKkpqUfiFWkrWb",
  "key40": "5ccwivrEUFU4oraxZka4vFYB6Fk5xg4M5tBctZS8URh5tTF7n5oRavBq574JVZDLncmgTEEGEqwD4W2o4mVyhSBS"
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
