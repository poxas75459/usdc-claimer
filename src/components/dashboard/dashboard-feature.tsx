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
    "5Pk1NqtccgJXoTpQtMPDC22HXtyYAEZL8epLax7ED42bZBCg5PcEBMDg6FZZjJL4n6dLR3Yd2GcmcWwN5uxazufr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cCPShhNR6MVFghUqJv8hkAeMP8Tv1bKhyx1YrwLgaB2a1J95bBx4QowcaMKbWkRNet8rx9eAoQyV5TiVnH9DAib",
  "key1": "42Lkd9EjtmP1GxCMJ6EDy84xrGo4jC3eEspQTemqhbXf1vouPwaSN1TwDSC6Djnt4ahykQDiPobVGoq7gkxRxgc9",
  "key2": "4Y7FcCfJZ5zZCRKTgMSADGUgYmLMDbhowu4d4j4LwcreZ1sfLS9y5Hs3hSKmMN3dkbLwQPx5wkH2H5ZUySbJri5u",
  "key3": "2AUkenCY37imZrXZozbeDKZifMicPTX3gn1K5YFTYXE1Spf2qFfxAhghKbyg9tP6VFN5uAXn4m7bEDLpwsBa4cMn",
  "key4": "4eUJBbW7rN3ZWp9ST8iJTUgktfSEMUvfYkQooRmCRPbmusDFVbQkpzHSz7epuhGTrBCeDbDuzrQQg42XGDbVcFjv",
  "key5": "3jCt7ekiZ9ZLcJLtoGQPfJhnFGexfHZZqhMWbxCHjvtB15a9EeEQdPCsRxVZa5n4xPGTLBeUaGWocCARZiJR8Xq7",
  "key6": "H1FjGgp2C8cbA1xg82p3j5bgRMti6bhRZ3iyKrE7vaGePcjg6Rux96AxdChGVs1YeA12ijvjZZS3xEVMit5fZBF",
  "key7": "3aMeprD5eJcBNcepxzZDwdXevqGUgsrNcry78UrS9NsfM7X2XNZPGJJUg1Rf1juaWLixosgyqmbApnUEWJo3qErA",
  "key8": "3G9JXNTErdg9gcskzZKcPhbrmNyjemqin2RMoAB5YWdrRNKZZmuDct5PcMjbdBHCgZ5CDQc1SxUhQn1R8Y7YqksZ",
  "key9": "5v23xTfEZDXzz9DLR68U8xVDRU1TUyNXJLSadpsRT3ZrPZ31BocxLrfkzvrMSh35Zo4iXcbsYARDndo4SZeFg2VL",
  "key10": "ush1PzpBeYujmVGgQbTXzzWQdu6JqDX9jeQKfrS186HzAyDknjJLJFuhH3a1xGP7svrwRwmeFqDTRH5zwZ8Bkvh",
  "key11": "5zRUkKERBoNsTM19XPNwN5bMWRcrak89ampXDYv1zSgieS7DzZ3MRX4L9qnBrujh4ExSVMe25cMsQA8JSVM4417z",
  "key12": "5rWKQ6tnvKBKbKb7fhMJ2BixKUhcuKpYr82rptSSUPsR5N3UMfeFT7ic93mdRm99VuicM1UAoi2Xu9fcH7amhDYe",
  "key13": "3c35Ve3YSvnyNpE8xqVZXq3gNpBQjTxVzQqUNpNkTxWgYWTP5HhRWQMEPfRYEzUunuwYJFT6nkrcgnYawKrJenEk",
  "key14": "2argFhfe7EQnmx7edKxTavXUhCJVJnuresB68jmos6uLvki9BzajaV3L5EjF5eEbFh9w7R8AsXv82fH29gR5xU8z",
  "key15": "33ejf8XW63jqEBZDuwVmxBtVc475gc6yjD4KDSVPG8nqD1FhF1R3n7wR1krW9FTg25gBfehXHEsgDDZpQ84QLcUh",
  "key16": "5bSyTUFLzgJYGV4KtNu1M5RRRjQCwn3y71CALCodZaH1H1u8c1PCN9RU8gUYzQ8PJMmPDHuJRANKGzCSVL629wfv",
  "key17": "1Ja5DeH8er95utQq2g6j6AUpx7FERt9rjUokJVUnBcTLL3YxWm2vR64QShAtjibTmJCh35Fu8VnPZLRr1yMmmdP",
  "key18": "51Ca9SeQFfrQN626xXf5W1CRe1ACDG9CNvLxcEZmbbzEwVPRc5JWeNMCMjwGinY4rLNLGWK2qPKoYRhix3aBhK6Y",
  "key19": "qqMBKYZPY57SoPRQZBF5VVbSRWFwYTmqat1ZHNeJB4nMQhp2d3Firm1pUGXcf1UD17sQgs5trJa6pcdpaag5ULZ",
  "key20": "wPN64Nbb6YfkWuZeWECmEMGuxxLSKq6DFqmptEjNo5PH4TsDpW38VANV1emt2CRhmN1ubyY8Vp6TmDoeeuMwfDV",
  "key21": "5c26YZsEurfXhqEH9UpAqQ3HFwLN8fDPiKPHjhbAP4RwPFZQXFsSAKNNUeDU88yDxrc8koReRhKm6vFQii4LzSQb",
  "key22": "4gHJybfDqvL5tHFtYyqyjASh1wWhVzfwnDCBqYsfTJao8jh8gNGsApG8Zjk8twbjdPsxUP64Adta175srBrToacA",
  "key23": "5JEAYgfWuXh1UeMgSozr1Ji2jQYoWysn3kEiXxHv7ovkoJYyBYsxrAayQpfGTmBcXYt4dETanYgku9mMeKLNNFYb",
  "key24": "3qTQrwmd7RtE9c7H1Adj9WA7NuQEkKbiZteYNbyobH7Cbgwjf3sT8M43fDEdjpCXo3TTrfeodF17yKZLv1PGh8r3",
  "key25": "4SGD9fNtQeqdrSAuRs4qMNB7nH9JiNskPas6rEuxoCD2dyLUoBMBh84e59AjFBBVWhT2iRbdipmLHN5NTQDydkw"
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
