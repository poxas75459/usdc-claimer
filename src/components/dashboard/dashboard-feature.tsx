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
    "2Y8Hzay6fRQyZBrHvE55ut7uHPiP5bZryZGiqzYWPm1dTb3mc2RQFmzHZbvJGMEKBUZWkmxn6sfS23kz33NBxZRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39qsNDPJTUaCH4auKj7ZxUYngnHvVie3hHRUQQBLNDC1ENxEoSnUxSfpC2HeTLSjP4cRTMA3Pn91S8kRciBAEcnk",
  "key1": "2hNwrMK6TB75MUmGjMXeLkHUS3oCB2zFXG3HM3dH8EFi57W3uPU6gYMaZnZoCR7N6Cgju8AZuEVphWxGNi4GTxH8",
  "key2": "5HNi22nK8YdxUdzb6y2oMJVuWTiJeQUv5a8PUFiv98UVVzFnSq1BzJxb1KMqUU3RaLs3dLkZ5LLbXikarSHNKQ6K",
  "key3": "3BMa3WqSX5RxuHFnppSLXrmxyZ5ZSfLMkh2ijqFW7gmj2ocUNrthBoi19izUH6xuGdb6Ac7RGpJne1WAEgghbcBW",
  "key4": "3MPspDJwxUqS9835wXisVwvY1k4vKSK5Yw48UbLF8iNcN5397C6j541ZB73R8ee7qU5QjY6GNV4KFGwK4KgRPVAK",
  "key5": "3AkogBSff1pCwDb77mviMNTxWcnSp1qzDE83LYLFZzdPNPVcgnS77aqd8kHTyWBD4QygNdVNnBtXJxG1LSUWBR4G",
  "key6": "23iUy316317Ea26KE6s5EwomS7tqynckqvMyzkP2nHbZnF2K2LKR9wXEvGGaVwHcJ9yk5SxCYuSspntpVyXGyWmA",
  "key7": "3BDRowxTBsKPnvtT5yDZ8q87Q9TBUXzXe9K84QxwxsaLw8Wouet8KHxmZ8fCEGQ8PB6JstoshYwtnH4Dnu7gMWZa",
  "key8": "5iyBPhF7c3Tyn715NUoCrbTbE53nZm2MUmkhCZqqHkZyvSzAt7mZN5phkNWL5y1TRCGyRuPVZJ1nf3WzHaRsy5xS",
  "key9": "4bx5Lw49x1YUrJE2pVTs2g9ZwbtfMUyg2nW2tpEj2D25P8yhVt6hVcoxhcEM5vxeJ3uxeNB8pk57UXUcW9XTWPNb",
  "key10": "4bj57wTjwE3sTbocNBXkaNkBYj1VvD2HVogg4yuutW3LYWKjpq1JDbtVyUew1vLz8BxcG22cTUvNMWhLv7xZPBG3",
  "key11": "3M4kz5c8XEiBj38uXBG53S5UU3KzzYFoaF6UJZTid4eubCfyndCmWk8QHUk6TLpbroyyTj5ig9vzzHwyY8BgXX7d",
  "key12": "3QE7R4346nGrvh6Q2vTr4wyV47wNCcRh1supvehgp9oPgvoCEnXpbGJq4dwccyc2pxfeu5rPokzLEJsMRzFD2JAt",
  "key13": "32rmsnRPUdwwT1qGPPLw4nz5Mw8HvTPDYZS7veUpuv4MnLXU8SLC3wJkTB9qFs1HcycZzstSovWyuM7f7sUGcV5H",
  "key14": "2qX2BACHZTZTEcshAbGsidameCDhNFJGLU79ncqhGL5fDbnrdRMD41fEHekdnDvxgwuRCHTXqynpsQSYZ2Wk7gN4",
  "key15": "wbwVF93f77rm6L21uzPoi1sFy1EotQR4C7WcH54C8tAkUeFiAFHGoJQqEpESVajbRaZp41a7gcvv7hHCswcvAza",
  "key16": "bodyMqXbuyQJzaRQNJQdcQRvbDDn3PwXoTsTpHysCcUjz85K8dcP2pgnaYh1P9YzJHDNvvLnVsxvyhF24iD29SB",
  "key17": "Dsa6BMwyEWB8Qxzx4de9EWMyYfW1TvJc3S8f4qrGiU4TuSG8yreYEKR8QHB2ETy1dkRawVCszfJsN4TMhDxtArx",
  "key18": "KcyyqAiSMx8Me8djRwmgUUzsP8amUBzgMte4Y1sqExoXEtf2onPg856vR1CTTxKtnAyvnDfpdsUZWUpjCn5Ddhx",
  "key19": "4uZG7mvqNoDGy3rjrWsMrdRvJPBsbiq9tGbUM6D66uEvdUmQ4f2J8R6R3tcbSWsgpwuLXWwcZNgSmraJRukfWFES",
  "key20": "4UYwxXzYaRiFmUAq25bgGrT5wvM3Dc86EJPT1cPBfDa2wHy5gKD3gT1emGxUYAu8Mvp2ZsWraJa3XpXM4peKX5rr",
  "key21": "46pVQvXajeKJVPUXWixuy5ckWnyxdHTzX69C8NKRqSA5VsVjoMDoK4QRuLnaPrC7PSZ8YGgWgQ5gv5fXQcQARWEX",
  "key22": "2GN52EBsiKKaDQL1irtaU9Tzn2P8ozskRS5Lj1fD5EpNRQ7RkMjMjpmJAH6LQBnhaUxppV1TqKYgzntyxRXgvMLU",
  "key23": "38mXfwPJpECPJieP1xkC54TtckebWePqr1z7hhHseGBCsmdDd7zaUV7Eibq7xXqnVVykhNALQUABsMfXh14DifhU",
  "key24": "32goGFVQDUMnUKXQUBJ2KHAxQxzBVeLSLtsUutkx7xTxcJWZ2QnPTuYWqnkBjzZV5CLxHR4WFM5t1z1diEmypWKj",
  "key25": "5xBp4k7dDm925BVkknizgigfdiP46QG3nUBvjdvGiHvhsFc2LjBfUGnFU2TbyzpRdvgdAnySJVGZJjwFpaj4nYrm",
  "key26": "4BAzZaGo811HbjGPgbFpqPUdAKr1rQP1TqQYRvDTH9oEuuRGJSCZi4G53LVatVWdSmXzYTsNEoZMpMusQKocEVX9",
  "key27": "4zEa4xV3jgj2CptnZhS7dVJRN3ccra28p2Nbkh9vbBetK2Nma71aCxZBTtanJ4sLeJUpThoAJq6Lriba4ZGcDNcV",
  "key28": "5RJ5wCrLfGoAnRYvbUSCtJVAGGjswpqYuJ1arTHy6HgyJd61RWWRswKniLKt69F6CPMqxN6MGoGdmkCq6FPfQkRZ",
  "key29": "3fAtFRhW4qYpBEpC9qNukvkyR6acLkaF8FwRRLH6t9bbtS3ubcxmLJEwUt3U8WeocQ8oVk1rDfDxuay8osKvDXk",
  "key30": "2djSV9GL93fqmUxNR7YeFfZjzD9xFygYvUoBWcj3joEZ2Q9UKTk8Qm66NcTvKqgBzcWYPgy6ma8NMhEeGhmqGxDT",
  "key31": "b2j8rJtxqr8GTxwXadyMcrnKBi9yU9MzePRskSDy3CUJciHvRoCAMD6rddrwxabh4KU3r68U1SqSDsJL1eXCJTX",
  "key32": "4z3D4S6GYwjizXAY4ygCqd4wNJTX1dbz4aBP4Y7pS3AuxRDa3gbJGFkeSrgzA17Qo2QAwTUxq37RjXKTzeBYYbmQ",
  "key33": "2wt6s6jUw33pJLToyUJpw2AsC5SvvCPL8qbzQ8kFRxZiMbnD6u8Ki7Nn1rpXxyYb3aj5ZhzXrWzj4PfCXa5sbhBt",
  "key34": "4tFmw62uCxQXaPnwCmXRmBD7oScK1oJZAKRPXtfKryCeP5ZRSTKWZ5x7BxGcRad4t6m8HZjyrYjFfd9rnLqxd6YB"
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
