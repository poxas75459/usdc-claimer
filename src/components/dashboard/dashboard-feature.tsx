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
    "CuueCGXjgK5UaiNT9DUSUWAEr2TUkX3BLYsYKch6BJN6Yg2x7ez6szDH8n2AnFSj6jrpyVtiNygqaEFMSESPSpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9zzQEy5VUgbismxnYKkLRATbpQpHhhpJJE8pzikj9DMtCMfmTnDQ9j6p7tyKynDvZck5WZfMexJT9bpwk6rQmMW",
  "key1": "4kYiASzkMAWxxmMGZKaADJt4dgkd4S2jVyabMPorb6JzdYQpHLhpkkCK5tc7JjbBQyTFfg3ZL66DsL1PbmXiGat8",
  "key2": "2CXctNVEARG1VTdvxDJBRgv5enmAWVe4M8R1SvzqH4u4CkqkpFUSC4WuqpqS3bcJXEacrvwuxns5ZumAMfrD9qVg",
  "key3": "2m3kVNBmCEUFbrSyg7qW3kNXebLREdcZpCDpwg7CowWVMnKBFPjDSyrsEwLr6k7FZzRaTvigpoo9UqPZ9NYafR5u",
  "key4": "2ysypHm5enkNnwjX8VVWuMDxBaiBfeLtAzpzR8Ye8FeGkPcJcijsF8RLZ5H736Mdo9NXjC67vEu7rT6VbF35HdCA",
  "key5": "5DtmKscr7AZipaw4i5JkG4t4o5kYh79tw2naU13Xi8CB1Wgvjcp97bhwPsVWuX9qo3KrnLZedhEEm8FzjXjWS6cj",
  "key6": "gEC5rVRopT87NiLcrKLVFSVhJvbZDdoUwqoBJrUzpMBnDmmNyzkon7Xo67xUWwVNXsqTPqQV7odFaYHFCvnCrDP",
  "key7": "3inR1YHDKcCKRnXeKXkPLkGhFrWTGTG2t9XrCguHYpkXLLLTj9MNhbVZv5kiUcjkiUeAjWRep2Q6gZF6UnyhqWa8",
  "key8": "3ELMEPin7CZrVW9KrYMphJh6WcwoDf7SmMbBFzz81VKGpT4P5BXte9XyDEqZjPieSSaMjCwvTTncd3MrHGpqPqtk",
  "key9": "4EVmv7i6hnTosVMu25bW4xj7cYk9mcVGsLDXbZsenGnBSo1vaXvPYLzbfZEjsFwUkyg4UDPHTdAiah6DT3YviFzu",
  "key10": "v6HVBF7i5fAwexsUg8txGkEeanRKhoqFS1CPzThoeprdGi8B8QSfRVMDZoiunN2HjejXQa9QAV9FzRwGT6XpcTq",
  "key11": "5NWL6jCedjv1tcT9Y8jtbME8H2aCwdE5f9N1GngaXSScNSQdaNwrjCRmDRenx3yUmAb2gUbGNtv4vFLsC7xYwZMQ",
  "key12": "3yBfsXCd4MAGJyogWbf8xdaF3booWi4vsExUr9CNzzeBHx7jyecgg1nhptzfK6Sybgm4UPVRsLN5VNwXh54FVro7",
  "key13": "4z8N3pTRoZkx5vysAjai12CTzbujJpPDwzDsryxrjQbdV1U34KQd9EiJYvLWxFciDqf5BmpuNdSLrn2YgXQ1BtMy",
  "key14": "2z5tcQFXEcQY28t8xfjkoqTsEV66eVQS9HrMn4Wn6ZkZwjvBgaFA8Bo7PSX5k4TfvmAsa5tZGphF6Av5jvGsb8rB",
  "key15": "3AVwGHcrfHxAMnG3P9TCmu6SdPHsmRgmyTiRbqo8WsEhCuNKkFdNRNVJQUYsdmwa1wAX1N5Tr1d5m148d76zuXEj",
  "key16": "ACBeTT3Cios8pT1sgVeYqQD55eBeeMV32X1TLfM8NHyZKdqVHhxcQFDUauT8unwQHSMTHgHY221zCtfRTbS4Rrm",
  "key17": "3nNLJYHBeh5tzZgSxCpsWLrNSFSaEJEdZxXcSPX1EmwrH7JRodi5TQ5AWeXjwEnGXBNaE1qYeYNiy5ZcYHf1fvbA",
  "key18": "5FTQrptzyRRYNeGQQjCeoVqZtcs86Z3XbACYmGEJGbVZ5YyygHZPDjNfGGmwp4MmEyaZyvXoDD22xF3qF1GD6HMZ",
  "key19": "2FjuVQmvzZQzQX6Gp8PAnu5oR7L1qrkRY165sQviiijXqvT5RueTztChijDfCL1qSS7FNCEXW2zqocAHuS6P9MdT",
  "key20": "3tTsVu3yhFCNC42aVKVg26H7s7s8fAY9TNmviYFRiBDM5tCc1Pkars7nb68Fw7XfwCVZc3EKZuwHbovTmEK79Zcr",
  "key21": "3yzspAzuSXziJS2Eds6KHXrNPfcvZwnJxWLkFqDppzyuMpqHdXq5PFwVJf9VVsBACM6KDHaBJVBKsKVQtcshQZSe",
  "key22": "5KC7ySbNCJ4avbbY81FzjhF1nzbYMVfK2HKdWdhSotUkgfkLe45uHN4stnheX62tgr8YUKQRYtbbQnMLmtQrC9AZ",
  "key23": "4xS9ANVM77F31WMtiGEQGnCki38WEiPLEVrMvKYoAYn3jiePpgQ8xGWVEhv2ZR9pGCHRz3pSut7YZv9Zg3Y3E2zQ",
  "key24": "293PoVMUcRnNGnB4uMmAhSHgZ4Hw1cbUnD2WHTHqkNiR57vmMzKYPneH9QggDod4GyiN9y67R68ophHDYmNXTbJf",
  "key25": "5D1ZEPXCwnk1ZMyYsyGttYizaKKtZhi4RFiAnV1VoyKi9AHNRJqQiAwHU6HCQj1yXJMMASXaUXG5hVyLvcpBomGj",
  "key26": "rwjkrTjheTNqwaQFEbBE5mFtFzFmasvTu1FLqXGsuT3FW5j3HxBkHwHvA36msRuTFkkKeSoL1pv9VB3qYU9pnno",
  "key27": "ofi8LGPoBgTsR9N8dBbnFUUwyWsamhmyZCLZCer4y1yxmg816jkURc7zKR1C27FUNXLDrzgtMUM2PvxgbuKna68",
  "key28": "5n9z7noWndEpkMerTUFmGCqXABc4eiqahvhmPuBBCXLJc35cURRgqrSuti2urVYVb6PsdLN442cn8J4mCfyALgXY",
  "key29": "3wYgGLuxoTbWzRbKYAi85nYNHbE95zJ7rWMp5Fcpo1VDKr3JojX3ZroMtmQPpx4rT3YrXNsxE7mWeVxtTdb8oARy",
  "key30": "3h6Mh5DqvdUa7DdoepK5FXSg2iJeqiHXVbbggqn1mPdbUzj4f9utEBD1ZS3UYBBsAopv355rqYbMB2aQLYkTNWzz"
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
