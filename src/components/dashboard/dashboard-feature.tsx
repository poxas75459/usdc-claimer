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
    "3kF6u2UjU4TV9UCA1isyvEkYEiNYDVtMA9Mh9mwsMNVL4MPf1cQC9FvVvH9iUu1Mk8msQ8zPfnejtZwZ6Yi4JqhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pu2XENjjJRW6gcM2bw1S83RbM3PxBdXw1LBdiLLqpmQ3SJv7hNHofLPu3Ea3nYfLAwUCVkFfN94FtaudFdt2Uv3",
  "key1": "5UBhstfUJFSqXjbFZAx4BLDMd9DxVaHrmP5KP5HHQY6CKxnAosVaecn2KBsGEhGSceMLAjqDsEKjGfhXbeRLEvqc",
  "key2": "3ZSZEZ7jnooDQVUyrNSqXKvYa6zBTpecJ6N1cygnRwbxW3cZVASm4Nvxgu9keNp83FoCbRGjyVyy3VNR6NZcvgp8",
  "key3": "qDWuEaZptGWtQPbJSMEZ8GU1KqmBXobkBMcx71ECyPP4HZuFWBEWFGGwhMSHtn6vNe5ix5GxLp9nn4pdu2CyX4X",
  "key4": "3ekrB6cia3NSWTd6D6EGK45LsTRxgC2xFi93Yia22KAinNwVb3r1yJcSSxxXR6D4aF1oCeJzHqU19CrFKfDRN1MM",
  "key5": "676PzwFxrNxvKTZMVdszYK47gK5YkRrR8cE4Kq74P7rr9b5WkYCxCtmD6F6pCLHorj5wEdnGfojzu8Ah7hSKErNT",
  "key6": "5Bv9H8sYsT5sGtFAU26NqqJKSmedQeaDqniVY4qJSaP75vaJM9LWMqhFEpttH27qB7VsRTQWiRNNhYzXyZw6g2f",
  "key7": "BxREYCEg1tsau1Z7A8kd71B4xgLSgroxanHyVco8j8ZCJ3XvejCUEFKhcuydfoP6yh5Q3YUCzc3yqVFLH8YjNnK",
  "key8": "1cgU2Uhjc5nxLkwzKtDTaQ7yL2KwHP3UTox7C4ETcc8zaHiFJuMUMZiEor6bA3ovBBv6NoManXbntngXbFFcahq",
  "key9": "ay64kfRyjz96YdiL9teq5mEqMPPEc7pb4U3qTybF2gNz3hiXCbZq6mdQVpi85uZ6FxQxXy1ZzYCGJS2mYr1dMnx",
  "key10": "N8NiBrpvtp44Yb6A5UHXy5MnrA4YhmZwAxoUg7RhtzGNeKQRHpH2mnD74uAqEohaHjtUkJGNCFKSuoWY9QHP5CK",
  "key11": "Ei7RnyH1n2EHSegVgZaiYaWne5SuHEp3qHsoASmUHQKnrYCUjWqVrqHz1ANNGcz93AFvBGS5gaT9V4dRCgMawQJ",
  "key12": "2R6q81d2byN9E33nJnmyxDpfZUQkYyCGMkrj59r3SA7aJ6wqGJpqcZnUTnj8ud3qMC4kbTHscyDokhS9ocRbdo1t",
  "key13": "2ZYfgWMnt42ZneH9hqBj7La1BiBMykzkhZqQkAykv2NLysVG3qXNwJSNzwXrwjAXUkEESAFzoNpsUsUMn6ABA6YQ",
  "key14": "2RLfpHXeSSy3SS1UzDpMXndFHVFxW2cxQkpXbsSCsqk4yDj9xyiDyayHhc2dxSeC6ywuXrrcbf8n9BiNKCfQmSiu",
  "key15": "3Ut8DFLDpWVvNriLcJHyytrhUw8bwqPVkCzMdTCyRmazqmF5oDXMt2Rzb6evcBDoB4aBqEuLXhFEV7zSSM4jRVhG",
  "key16": "2ZmVpGevVNBSLmqW4cDk4iGtc93FDHg1AVoBcKqNtRYc9do33N3ijhhUtksrxfJh6o3UmavikmUazY9Tk53wc2Gq",
  "key17": "2DCZDNTbEnhoPxY9TJbfG9KKAVtEnVMaQj6B2wG97Yistepod38bL1nerm9mQixNbZEMfWCfjxByHfeProwkKkJQ",
  "key18": "ZA7hGSueJK1kHK9LkjGw5WvzowJSucaWNKnneSzw5aV8D7APAaqeYVJPnzrZC1aYSZSGfhstUXP6iu9A6VBvAzH",
  "key19": "3qrExxk4n1t2obGfZucb5jE7ivVQMJp36wFe6jCEwyyJFsZWkrDUYjPdyfKdMjaTkTfRKVtiNLXiHtPyo2fhCuZK",
  "key20": "29QYvFLxwkqLniY3Y7vqDNNYZ4ZdbhAMormaTnPqCPkarTammeB2rqCmgnpNyAQj45zN3mS1uxWvLvsyfYP4tFKQ",
  "key21": "5s1aRPn3hecsaz5HtA5hVvd7nATEsoC6oLLtERvtAJTzwETW6gd73ctkEGgQsyj3UjcNBPSSbgLWgD29EgWpc6qq",
  "key22": "5y4X5C41Ydd7N9mjYUnYQTtVLtudgrUPbkYcCJPPz6vJmkKT5zpM2j9jM6xj2XhRAc7ZPQZx85wjUYQk2TSZxQmh",
  "key23": "55i7veWpq2vUtQn9zrELvxus3CXBx4CRQ4sDsmfJifohGW8LXa1apxZX8g5TpCChY9d79D3u5R5H9uJqAnVJWqSi",
  "key24": "5yG4LNZ1ahw5VKHMbA1JDaviPew3VM78REG2Y6Pa43BANNaCdWCepDxfBiCJAXbqv2PGsHgFL6GUsjCs2gTWMACE",
  "key25": "2gvNhXP17FB4vYLKGrok16JRxBt3w7Tw9VipWaPiCnYwc2sakfXanebMe9DW2142Yx6queNJN6ZUkSnfwV38DYuz",
  "key26": "4URdXaewH9z8wBPeaiBa7V4umjEcsYffhqb5QQzwPsihuqkCTG7DQGVLozTaisNm4XZ2vcZLLh8ccc9yVmbv1ynZ",
  "key27": "3bKN4UqvbfFGEgjynrCb21xQswcP2Tox59XoDkCrCAwdCPjuL8QLHXSk4CpdWrDHfYVCJhg5b5FpxXz34BP56eYU",
  "key28": "3UXvPGLBHsea4xDyy9J8qAdQpD7tdGrjpeQmre5CYhxouhHtMBbmEtyJnefFcbNhSB3wZCeCpHX7HycW7ibhNizr",
  "key29": "21gUdc2YmQMKXKrYJhgW26eEmdBZ2ddxrykxtUbdUnvsHsSS35XukfZp5uQmqUnkTuBwsmzZmemYSJySnSjvAY9q",
  "key30": "46x7E4x8W4SWMJ7CiKcqvgJA5nYT3QBkyrkdUNemjCX3dT6M6gpyxLgouwwLJdYJsCQxNNCodvoiE7SrdQCDU7Ch",
  "key31": "3N2tyz2ytjU8BC6fc9sB1kBRg8E928LaTk7ZuGDaTVszWbNNDNWXcnCorxmLNNwgjDLR267whrnsczK5jYP9GbhV",
  "key32": "2wsJQcKt3hEc9ZAtr5U2GjRuLYHTEUW5FjuK686EA6jLSGNvU1ypKFEQ4iRQb62X1KqCBW23mBSBJuotpPHRV4No",
  "key33": "4JstKcuEtuCC89F7izULsFP6habb9wPNnfSF5k2UDAyyhSP6b4vqBL56dLSZn4gjJdDGL9K14vjgLzgmr3rZKWYM",
  "key34": "h3dmwYam4QpNu3p45xDYobEoP55zAD1LnRQ5GUQB15z2fHRFQbP35GbK8MynMXoxPnXP5zvQhcnebaHEicC4vzQ",
  "key35": "q6qkzUJtX2wfQAYcVnTEuSwMsBh6S4o8U1bcQE2XTQE5WuM7Y2H7xDZX3R5Fy8WxrpVfV4qXgUzEyshdcDpYXZ8",
  "key36": "5sPx2vARQsPkL3pRanvRbbtCuoVu9wV9UQTgE2Cz1G3BT96azBVTR7kPQkp17gRw1F2uYCkAJFcmw29N9QggVot6",
  "key37": "3osLihh4tiL9hh7fFkz2uCULwapaPmHhdSSkqEkRCuthYN8cPFyno8Akhsam4bMTYC91Uxr98F3oWM7L2F7JFfxM",
  "key38": "4duihCHCjDCu8roFr4VuqW2WNAM4g5PCCGDmJ8JKoQFGyY75iYCsh6GehKjRQU9BAjStkE6esVw2Mz6fAKqyY5mE",
  "key39": "4LqzxgfjzjDUC2Bp3k5JL8piaQeMgptVQGHhpwBeE3CRgQf21AfgzAugso6zN556vWKc3fUqAW9U58aHyEZEMAcu",
  "key40": "5CchEzXfV2a2qYgQVrdy2Z29NiQv5LRApxP1eerRfpYapoQ1UyFkT2ErcFKtT1QuREK8AQ59cpP3jVt6wp911kuG",
  "key41": "4oJuZUggyXW6oq5621R6PRNgkq5HB5iCvTXvwmXNeGo5PcAJTi4u539EzayXvXrBmHm3Edv5dbhmWb9wGDm8oqzs",
  "key42": "5aTeWcSy3nrzWAvLJ1cB8qPmeikCSTZYNmXtjdjS1UnpkxUcfPoWk84FjFtqRpyUpEhk7LZUfufwdgNbhNZqN8aA",
  "key43": "666H6JhxeB7YV38fQYdNgJKWSVyxwESvFmHemcFRTUtAzv7EogX6TPxq33CyXhEv37ghWvxqekKwz5aovGM6zUSt"
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
