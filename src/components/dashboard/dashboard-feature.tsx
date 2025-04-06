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
    "5susA5FD6AGybVCTasqRV6xuQMn8FwsqhdCUTfzkLCxCgtqP99hjWwFJakGtn6wfPeXS1YnayPvLENLfa2gJDzy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x5MNN3NTb2XJEfcnC69C4uQBDag4fzomgvcW3AymkUi6r1nwCp6B3Txr8XNdv4174TnD6WDzZ8XWx4oQDWJWQsL",
  "key1": "YVuhX4XGyq9qBvbzFDzae7PCfNjqqbJqTmxuYV5FubFiGSCDEvycxPgkPNmX9Fa4qsH7vPPJDW4uxtEigrB7fCp",
  "key2": "255AGFMtE45VcpzF6svE2WfPKqoFj6PDRs9obPxbdtCU1vZFGN3wDrD9kSeEcFV6Qhq95NaU2gXULb8MWZMrDvWA",
  "key3": "4jwYk4pGzu1AZicuSB5TSywjyNUJhTT1NFNEswrHq8ugydZM9rdb8g2zDbbWquK6YKkZLyvGokamo19KKjKQxaTs",
  "key4": "5Q5x9yR7i3riZpsyr3BqPLDqBdvv249rHSN6aAzsTTqn3W9u31dPSTPmXhueRPTEQGQDzEcp5vaXnUwQ72H2u15T",
  "key5": "2GWbFsxret35EkMjmEqNef2qKxKdatkzidEiSbatmPMN136z6V4T2VzJo8m6UL9HRt81nHHwcZYpSZNU2NDT6twf",
  "key6": "2UFW53xiPBFqs7Cw12wLMvRJBbhEXdLuCx2iZT5RrM3Z24w5MpHYwRmTnExZY4n2D9GhasC8JjaV3sAxf8ZYvm4S",
  "key7": "28JnrzvB6qpLzTzTe5GrKi1rm3sXxBokYJsxxr4XwjsxH2BdiYkdj798J4NPP6ysn4E3Gp3kdkEBP5sgZQupxkam",
  "key8": "4AcNzJW9YA4MdnXiQy13CBrxyJfK2dQecDqYMY4LUBxg8cjvF5QBbo4bVCrNVwUWPa2wT18Fqy5uEo5zmg6yuvJP",
  "key9": "3BESS9rusWBfCyW9UfBdPReXgqcJMhGHD2vqJQ6VBmNAAkSHWF5vnZX21nyFsPCyS4gsGaKDXFfgNaNg4erGtPvF",
  "key10": "QrfpvCGU9X5CrsU81NCr2aCfjmpCJi4KHYqK4vnY62ZPLAgNJC9FoWUUuGaWvXqqYooDLSgiZ3mn36etqfvm3hT",
  "key11": "mikt7APacZB1DAJJUsc5MnZPtegDotoMSwGYXJLkH8EZ65CuTig8d4PC9xBVwjiMwSqjdV36FqzgyR6GR1M4WQP",
  "key12": "57Wi7G9pJVYB2EEVmqMBT3PhT2s9EMNA6PMYfPZV2JcffbQhDwurXBJjauMfREqB9CHp1rYrLqyW2yjweWqjyGYr",
  "key13": "4fUZmUUwWzP91eSCSm89V5XKt7cK4KMhQNWxUMq9NcfU2h1JqYYZi3BSVnPcC35Nohw1BCrkLC9nAgcUDGEq9qAk",
  "key14": "3eqpT2acLMSumjbbSNZGRXzAi5yUUkNAXP6WRoRAsEDMNtYJsx5bNw9KxXMeVnAbL4dcL8324SxAyNxBFyceMyGG",
  "key15": "5xbK1Yj2QG1ccytYBFC91whzUz7gkVsw8NWBzXzMeExhS9C8KYAUbF1ZHJsmyXUNnMa15QGT73uGPB5vwXhAPqs3",
  "key16": "4YNDh6o9ZXJL7v4norpFzeu9pLX63TxrS6cE2UFAHu5HXebhzui5R3cfpvTjz8GbfG8NjnagEfCBq8uE2A4ADJVi",
  "key17": "3T1VWGY4du193JM5LWx8ZzAajPqq3zzGvvTo1ALbUx3KBBawAcB76KcHcPvTBn7RCr3A9ruh8XMHhL4rEps9GaNm",
  "key18": "2oZtgK4oMCbZ7XGXytupCLs4pr2oXUxA76twAM5ctBL3U3fqPxykyzYsetJU8Np27CtTKRvkNM9zTVZGsgoMdw7d",
  "key19": "3Gwvdoy4jfULS5VnqU6Hdmjj2FesPnMDLBystiyiD3E2PGHpvVtCtcgWbm3ob4a5qMuePYeALMUdJn4tsv81pBy5",
  "key20": "5nJknRL6yTZ668Lw33vcYwfaEEqCfhqCtna3tonqycN3XU52zxw27ARTWjaERvVQbMR8fCHvXWjk7aM5R3MruhhY",
  "key21": "2jXSALQyemet212VkgpZPUcUeVoryALx5nEq54UWoLbH8wSnAYmrGkyA8wUDEjVnVWeNSULTdjUVmc165bV8osgQ",
  "key22": "3qj9rTLBVh5Hf3csZrdGbpmKbarUh5r2wDUbPXX7pTpdVZyKLbDwNQuLjW6JnVRCZx5uC2z7CyxbHnkHVA691stB",
  "key23": "3jVop33dDGPeb2TxZhaMz7PzGJU5LgNikMctiwDYzCgENPWzXwUboVEc2KDy2PbCbSfGdbdy6TTRqTkSVKQf8AKb",
  "key24": "3bRx45WEtf9xZHzNSXPiSNSKm8Ee7Sec3GDjz558cS22ET1EM9KnKyS1oL9ERD7TwKj6u9GFZsARxRwMKurWmPCX",
  "key25": "8UbaMnwZmcg6H6TmDA7viUnmycKpgQ5nsUHSCAB2mFnYysjvqzEL6QJ29Z8CjeaCJj659PSX9mU2kfPW5oo8ScH",
  "key26": "4vhHytbQVtBPg7MuFrxqRaYYpkwRsSHc2y1eMgubMvbNLjGXpqh2Vwn798x6dyaeVXNCoXJjw5x7rWfFPG2Xvyds",
  "key27": "2StC5v9DEdcjn9bernbaJZzBJmzXvNDBSVGzXvp32yzNxmcXZBTSTUA4VpogDFy6M9baE2183acznBiaRaBgUnXi"
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
