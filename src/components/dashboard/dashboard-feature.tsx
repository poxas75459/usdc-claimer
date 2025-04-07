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
    "vnu2UiDsyHJ5ts89fNYiNB9VnBQDxpeNTM1mqM29vTA3UuKKveRZ8pzwt7cjriqGD58wwM5dhfLCGn1Dc51xu3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56BiRt4vXZQsybZoqzzfhW5Pr19v9nYeR7ah6PfFamKkTUMsSqphjJUxacVCuQKdaKELBPAPCnuZG6eBJ4icofYu",
  "key1": "4RqwAKT3rBr9Mr949bH2vXVeiGVkWhJqQa6wbbp5QvrWZLmbhXgpYUAPi5gBWvNR5viSpQvFyzyexbaNj2zPPPps",
  "key2": "3GLqjrwCvY5myeuGz5KP7UhRWNdEe3uhL8DxT6iMQDx1HKLuaUz7AVvAtXyDE4bDnCxmmRNvaKPPV9SQ3DFuF4H2",
  "key3": "25TEpZy1VxPvxma3HyM1Y1KeoFedhnBW8bQziY6iEFtaM5TDn2BP3nHdwoJVL7y6E1aDJQHiEkMqHj8RHrkVQwbL",
  "key4": "5Wn4YPXNuNRFkUVxG3vBQinrV5ACZqpADVgjDQeyudgLRGYRty1nMra8JMLm8RdgoMD373YBV2KWAphT2wgb9EG",
  "key5": "2VWb1eBdRaSCVZHpbeetXEhnuLod8UGVadwidQvyKvkf3mXHcEaxoZGaUKRgXATkEG74AFjouncrPPhDarHC52Gm",
  "key6": "xJSA4QxEaAAPUB49L4Ek5BZPH63rVNxVts54wsY8odkB1XuSS5eRsu1E59b2rVt5huFwTyPt18hXoDqA9qJdPEZ",
  "key7": "3y1AsRQKHSDCd3CbqzPiNSsgtX6w3uKT39GkDT9mZsiqaFsbax6ZSbMpVV8UvVgdAueXNp7ZXQQXFJeZYq55mkLK",
  "key8": "Fi8bbUdnLVLa4XpmLzCdpifUxHGTCCoYj6rVDze3pnYRWNJyQJiPzi8xmANjzzSFnvGJFFgxM4ZgZbCrpY2WQP8",
  "key9": "2a3ZpnXpBV2e8xqEqUxhTbUufdkLD1f7x21caS324CajaU2PMARwVBnpuki3BACzHXvuzuBaF16gDoynGoSG9j7h",
  "key10": "3qpp4MYwA2sq2WnMr2kaebmQRYrNRjkeozZBFWUpWuJgUkis7CLiyiTHXgszqAKKv9h18nAymmXb5bRSv3n5fJNb",
  "key11": "1k6P82H1WZjBaKWAHGUQSoH5GhTYp7hbuEVkmjM3BFESenZCiYk18VjUWYQRDH133wg7oNsHV5DTVrfP7L1A3qG",
  "key12": "2aDV291nYttP123PzE4Wk6LdzjFjiYybMrKjvUnSppWh3E5BPFYUTyWRQCcq5tLxgNe2zbXeDDDDrusoHnMAd3tA",
  "key13": "A8uH2cPMoVayrswhfWKsioXtbs5UcFi29wG8Sd1ja1vSb2usXMHiqwVJpJK5yougKHr1SDwMwavFzmtUsoqiriY",
  "key14": "5vjBHExP9cpR3LnZ3XrSgNeo35zhKjEVJAsJx9QJypQJf4DHJJ2HYnoXTYkqAJTrCAJGvv8BwXc6tQPWGp7W5hiz",
  "key15": "2WoMfBZ712xuY7N7v5Fc6WkHr3SfuBe95HnbDk3E9g4rU1TyF27W6Ah7SoNpPVia5BEWWvTnvThVxJmFi3TH6zY3",
  "key16": "3bxaQMiGYKDR6vmcBHF3NgzCf8oZiLoaQVAxkRD89XC4Z2cmbFaEs8YiioSxNQ49WHmDd5jZfqxkd8ZfXF5kBDVd",
  "key17": "24n7RWVDN1X7EVufwwvwCB28bXCbmsUYtp8qRmavpGWqmuaQUe7pwivVS3Ad3QZ7ppWJMdWNrsj9bZGBjc1tKgrF",
  "key18": "3EToaQS5n56QzXcXknUd2XKj2wvRV6Y7yHo8SuqotVfmMBkCStAaBxR8fcE14AoqKMKkHUjrEVfTSZeR7M1NHjit",
  "key19": "37eXHzBHMRsfDmxGCwGf1qSsUKzjU2UBrNVauZx94r3iPxuyRZq2cMCX1DRUkhPen635nkWND8AK63CQ5RoFrHuw",
  "key20": "F7KMV2YLKUmaHC2tgAsSxmZhSY9saxzxWDKVHHmRnG7SK599d8WcsvFvcpZZaQMjGDjY8KT3fzyDV3FhjzEphun",
  "key21": "2Zbk2B2oLPVabdFUWpqMJMHvbzGSu2HmuKgyfr57gXpsvnfVRi9Hx3dr86TpP6jY57Q1jvB2W5m1GDmrgjFThuo3",
  "key22": "NTzKuyjH4dFcAebbruw5pn1kZExEMZ3amtDiuQxVZWykVT78dzs1b27DXMRwowRS3ZruhVskAFRdfq2MaWrSWBz",
  "key23": "63SbNJk48aY4VjQvjryEoSnzxb18A1Ma5kvDNSXKedtAswRtnCm4ThoeQXXyynEVXUHr5FrxwaUooxwhMtRGvwkh",
  "key24": "2xPeps4vhF8zPF5mgqNQTzYEvscrAbkAA3tPkuYPUUdYJQcM5T9VXZW4minM9S3et9UoXGyV9Akb8gGr9MoiuKNU",
  "key25": "qpoHef4TXysYVqovDVSXUcjYUsrjoCUJqXY6BqNbxy2f7CSsszoAraZPDpjJiYMN8F85p2vFyenEXBMdwcCv4Yk",
  "key26": "4JsCt9ub35JDBypQEDCBbwB1CjSD3NPUGFiTsXRhE6fE8szuiZBB7MHWmqLWsU15rSdUMaDjDYte33wgVCqASwnW",
  "key27": "AhF7DNwLmufchmwgS2Ldnsma6mWLqQb6deGXD7QM3t9oimz4ovpYpTBWsdR7k6nfS763SAxCJRb9aRm6B1gpJ3p",
  "key28": "4nJrrdXQfTHCe7oGwtm5UYViP4eKhjjVjeUfSTnYGHtcLj8tGF87eEYw198CeT2nYcMNT6o5o1uVRnz2tWUJchon",
  "key29": "D4QsPCdJuKfQyZmzpbVjq9oNKSBSm2jHuuhten8vCRzGq9M34GEz2NHQRnvFWSWHxknPe9Bnuoq2Rv3SixXxeQ8",
  "key30": "3Zvmdt582xmJVSf4xMXLa8KFRP4oewme6psQXwRXPLVYJYNiiuwFgWNXabWszBLR3fLGo73ooU9WFnUeLxoMtbHY",
  "key31": "5FqATecNRYT64ifMkm6tuo3hYeP8UetKRM2752zqv359F6y8MWXvTkE76WPCeCZCdTCtmawFThLoXaGtWwNoEPPD",
  "key32": "2mDr6CZRcYY5XTBqfvPpCR16X6Q6aV8uk9iPERfxdaRPahF8jAugGPf2g4sUE1mniqTh8dLCn4fFuuWBfDtWWGdr"
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
