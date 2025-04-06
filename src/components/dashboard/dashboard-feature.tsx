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
    "2uByPiMzhojRN3mhxsV8icJ7rL6XD3N7bh9kZyQdr6TVDZzi1B6Xp3bQZ54x5MsMedkkS5sEW5T5HZ6CYBdFqkW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5it1WWzKruXuE9YUTHGvvvvBtL47ZMYszFM4tnFNJCUTCiL4geU8v1rpKbpojENotyd4hsUN1nbF57KMkFL1SwQS",
  "key1": "64t5dRbxBTxCcUzF4ikRbaBq5cGikMdPVoFy7KyM2ctvp5D3BUnjurjoQuGLqLxw36NQHED2KFQ2JRxr5yCYvLJb",
  "key2": "2nR1TeDW74EyDZ5CTfBHiqSqw9UqWLhL3pzkGzdwv2XB99vmJG6HX5Rn5vSLhbmpLkYSx4zH52DrYidwVQAjndgL",
  "key3": "3ndtUgnBBZb7fbr5fhPbRByhqmbSGMhMmFrov7RfNur5AtNXc8tL2r5fso2kjq1TPh6eMPPA2g3HFg55HN1EXNih",
  "key4": "3SPnxfrBjRZRb73Q9Fg8Ejkj8qjqu9dXAv7JD2x7a2hLdUTSsgyq3nycmYZk7R6ZABT5hKvSAN5SosY5kdUY6Jbw",
  "key5": "5eJYrYzXvWfhg2c1bHmZbKEwyiWCbApipCQZ7aNVyLWqA98sPiuYZSzwrN4scLqHUBVMX34RjkWbNczHxy6k2S1",
  "key6": "5peSoMP1VnATpj45bjyDjrk84hPhcLn2eHmHtPYfy7aBo8zgFY7VBMAS2G64SZWvVygLp9NiytU1o9WWqrxXUtiE",
  "key7": "5wyvQ38RmnGnYygy9nxEbcoow6ynBBkQuuQQdbQs9kcGX1tPBSvXQN1uFhsiJ9jbiSq25Yy9BCjUiZb3tAcAHTrz",
  "key8": "3f5Uh5kzzi7Bz7wfX822mJseRxBQPdkjxUEakzYPkBw8iRxxsNvpFLWHNgwQVg13v1Y6qzvHAkBn1i3fcZsfoMPS",
  "key9": "4EdYZN2nceRX8fmNYmBRqWQWgeFzJ3rXiqgoeGEtx6MATcQB9NCi1HXfx4LDYuHjfgcUGe193Fd5zueNiguErFXr",
  "key10": "3KWDZ3PxRm3A43mjmisWUyXCZebJjkMXAmeUFTMZxtetHgBxjKzcpMrhGDkMXn7uaMJU1VAA6FvVzu257vTeGsiB",
  "key11": "zt9CBCV7xT4Nw1CGaXUBdJ1p4ve3xeSZqUUyJT7zYzPa4ddhJAFjthXXs4yyqP2v4ddwerPvWwRqk741TNVG5YU",
  "key12": "3kxF3TNbh3XMofuUmF1oFTTY8RfX4Bt7dqbY62a8tynVp92BnAUJWAWsworqdKaQnRXFbvegMvvuRbqT8WJvcoA1",
  "key13": "5netYcJ6VM6zQuUpQexX2NqHYApbvo9hM4BC5TyBuHVfUbeuY5zvLs3BHfsqzkbMkP2teVmJqEJTmkMDcEnWchBp",
  "key14": "51N5FGbwipJi13V8veiUNYtzrEDtEgfXgkquiea5kNMaTEZJZEGvngKjY1juEGsEs5z4krVxyd1NobkX3gZiLqUd",
  "key15": "u8XqQHJs8gpJfscyVe2sX1opnKaViwKMBzAqYVKvdKghzYNR12mexFcwVaXBLZRfa9TRAPu7oK4FChzaJb2RcSw",
  "key16": "xqmQzKMe7TVjoMfh64cJK4JqYwmi9c4qfAKQTsnJhQwPw4G9otq9unYD4rXLaRzjcH7qPnDZbXnNqbTKTcHjwVe",
  "key17": "5x6JWUBVqQ6oSkiM1As6QKB5L973YnMuea19A9ihco7ZLwmbmmJooSKdw2kobJ8w4k2QpuGFYTUtNB5LccwngcUC",
  "key18": "yz5hu8BKQeC9kw9Py6oNTEKuqBEWgtE2HDHh3ZHokVi32CVZNZAsHcrmK4iESg681gV7vr7QJdKgUAXzQojyTJx",
  "key19": "HMECtN8ubYAu2gsBwBmuQskwxcuA2EakcpVHDdKKLRwqMNX8LagVPibs6USEe21pYr2oXX692od8M7kNxRg7SKR",
  "key20": "5NN85QZqdPSRRmwjTY5pfA3f2Dywxnit92MxATyL63skpAg5bcBbPgeXm7R7V5opLytNKTG85a3nrY6tnGLAHw2c",
  "key21": "52qVnsTZW5J8dq2ZLxdGSmwfga27LNwKPVmgde3h6QPfgihHwEbu83CysWuYvUEQgXQ3QKFwbGaXtmuy2h4W468",
  "key22": "5W22RsX43xaPzb8jmMT8dud6EaY91RW8XevQevUijr7KAcDW6bv34iMw7wWwtJRqgd5aejuMpCcKAeAtxyhbMmTc",
  "key23": "4JufT7RGj8XTCxS2PpAqRtQVi96Ep64WhrPk22AStevLdeFUWwSLNamStRySkEuCbDQXwCwq1mPohDXW5enT6W1d",
  "key24": "3DKKtzu6Ad1M3iS2VTbncNeJGiG7uBMt52LQ83JLFeWv9zo94HE3vg1ep9TP5CkSuQaw6CcscUHuyF2BFAEWncjv",
  "key25": "262Ja8C6oUJdCP1VveWqAkqGzSUvKmsdMa8vHJBz1o23rmBAEnfM3sRHNJq2YBdwaWeW25WJ7C6C1j32wKwyJogT",
  "key26": "5hqFMm4mtkT8pq9BAWHV6WQbxea31EPc7zMtvmyFxcwfbQMX3qHdE3dWwy3gNQSkVXjRVCv993RZ3PTCjrk8ZoDa",
  "key27": "3HjoAquhy9gwTfG1D6QcMdDgVBfUx2WzeQEgifXAR4WoFtrp1SChV3fR2hZEMJjPo45pwYgrd2PbKaeL9kpcZSWQ"
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
