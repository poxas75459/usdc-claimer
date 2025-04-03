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
    "33ChMbzy3yLAmRkubAyH981URmXGnERiwBWUdPHAzsfN1KGnV7CaDKSYQ5EzY2ZtNvcWW5HrxJdeaiWqs487G7cg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ihmQ6nbV3743DchsH1FoHc79X49vA5aDdPUUMYvQhERe6mbBaDnry7L3MUHYYjUbq5zv6XsohAtd6RatrcSE8eu",
  "key1": "2ochbnAjtJBYYAM7PMiPehjhw8Uyd3sTFHPfGzGHeknmCQaJZSSraYm9Kb2wwekD9XECnvMJ3P9YE6EsK2f6PbLZ",
  "key2": "4ZUrFHxHvxHzmniFTxUKLw8JuQ43HT5uJwpt3DwUB5kxLnMk9FjfsorH5TXrREG43x96dziNN3cTrvAEyP3t7HsX",
  "key3": "3LzTCXgegqmo1Li93NvYDiregYPueR98HBJNvoJux95hEk4yCYacYVyj7gSyiBD6A8tFKuk8iB3bcy7z5nbiwRej",
  "key4": "3iv495d1w2s9JBfgSqXvM22cAc7xEqXeVoP3EDAr9vKc4hfZpCYnCfHWDrWThBz3YkBsmr8eKQKHiZKCJc8U1FU6",
  "key5": "5A3LUrSobwqEoqZm6ZhwArkSfy3BZpd8GVqDGEE9rFY8Ub3AoHdAg2unkAe67ZRtoCLMgqV5f9vAMMMWf4zNQF1m",
  "key6": "5VX9yp7KwCi8swu7kxyRnTxMLns2oBN2MDyVmVojFhPnUg8PeSyV9AUzoQ69KrDrLyyYnFM3ycfEkQaX39ebaGRf",
  "key7": "3vTmXuaY4sno2uzAp8VXCUQGqcvq8tDxhTrjRsayKrR45LMowX23faZnrok6pN1GHDRdrxk8GJt8SyUUPg2L98Fe",
  "key8": "5tE3TFDFD6yxcTv8QFKFDuJDH6BuXVH2JXk5bEdNKD4japZnagdkjRS7TvF7XWaK5k9osJyez7GeZaG6erWfPVnD",
  "key9": "EL39JCDdUSLDg3wK6QKVfZ88ftgcPoSrmYBKwAixdo3WFYn8qm6YegDDEWu8QV1hC8QxgTngmDSQ5BGtomLx7LL",
  "key10": "24diu9TPMZw9SBeRbCBvFHteXH3dQevUfaafyyH4VYdBWJuP4TxTQohpzqNFDwxtAXJtRz3Z31AagrkSoAwFLdrJ",
  "key11": "2SSWLFJyXgmsnNAvm2LuLkxbfyA6m9XTZNoxE7sgZyGJdu3C2Z8x8MfET2KSpzmm24oUAMwEnhpGkNAyEDxYgJRe",
  "key12": "5ChNGELQkuow8jExxugyFgbziYyQCLqBtLHnxCb7ZfhaNKAUnYGvfqectaYRnFhsrRQKBYdwCvuuVYq1dqwBUGDk",
  "key13": "29ikpKQap3nhsZgcWKJ7HkzxSAxdwkZpyy9bsD34gFqcNfoN9EhFiNMHWhwDdRbZVk6UbhvzweempCXDrNyr9xSU",
  "key14": "4DEFD3SqVTqkLo3i58QZ7zDPPentAVUUFMdDp2b1YpWj5nzC4P2dKeQvHCPCuawMp8JuMaN8nBgBz7KGtdEzTp3x",
  "key15": "4AzTie2H3CkZDkyP11TGbqzu4AGYy175vAKHXZ32pZLobySFyh3fTLJeKfLKjCcE81z7obCejcnixTMP8g4USV7A",
  "key16": "4wgTptgSGJwFgZ3dzbXEYzgoxC6pqskJZzMQmz5D78QuD5WQ94we2KEZP6oRJSfJZVMwrQ4tqhMEYGfCUcyQBbpx",
  "key17": "XgEv5xB2AGSNrHW624W1umWbrwhZ5KfZpeQAUxore1t4ufT6nxmXXkC4MPYwHnBKT4HpvDzMaM5W46YXcu219ng",
  "key18": "5xKYbW2X45xSmWs7tqY38Udveo6cMDNtqvnU75qNpP8RxSvnxJgxfS1TnRqY74yD2SuYPvrE2tBj6xs3kcDQr9ku",
  "key19": "5Dxq8ANWVSFpCL1EftEpnWS4KcDndwXorsYmeCmpRQsybGgSNFJBujzUxe2dNuzh2W2jDdm52cA4xHvfSuVSyYZq",
  "key20": "5RJ8dGeX7hh5u8Wrntri5HEzYcHuVNR3qnZcZ93zgM2TuAp215288BR2ikb6X8mDQyb6PWNpuJoPENw2pANKWVy4",
  "key21": "3LTozJNZ7zkJ3YWx3nqReCvV5HU5CiL5jCwzXGVs3XrLe3KxTJusPsmAbJK4uT9f87jM9MoGUjJYDWL7VfKvayBK",
  "key22": "3gEyDhxRKU8YR1vuqhUfJSKTwpeaRUhyiDsctjsA7XbXaUQXnY3CZLCcJjuthCTJPx9SVGTfjFALE251H2UqyW95",
  "key23": "4SYJA1Z79AsdwPX3KKaXpoPQjmtjqQ6zoAp1eqSjrRSqmsQQB5QvU3kwaWkqv3NRGPdTy2xHBeoaejws9JYP7Eio",
  "key24": "m33hKrUtjWpsqDjegeM57ixqT6mtmgcz5JUz9fRjuj1pG6HjEE3JFTNfhQMQUN9BprLRWDsGS44aCW1P2Cizhxq",
  "key25": "3LdwKHTLBYTokkggXWWmpEbsHgtqHFQXG3mEnYikc7uQSH6xUmBnDnjp2NWy7LyU7jURQjDSyZXYnbgffZxCWrPX"
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
