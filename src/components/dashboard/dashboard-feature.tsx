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
    "5weg5pVEMLhCHXqPPCigrdJdj8aYcu1YBLuxCh2R8HWGX9DZitnfkqWVQhD1QZs2TEYsQTQEp7BecMiAD1YrvVan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38DsB4aULP8Bz9Ckz3K3ioF2Gr32wMYFwSDxs8u6SbnrzMLkGujTxKWDywyecEMUNrkaFV9NddmVAwEN3nXs9XaK",
  "key1": "5LZvHyzFTzjt4y5H8qHR26q3NyKwdFy8UuXUJsBbeQiftepgmZmwq5mTBLj4eTRRHbaeNw9NHF2V9ytn2yefqZfy",
  "key2": "3RmRi5ttpXioZ14j9Z1kjYQAqHjvcNUicX5K23KUcP8mZ7dD4RLp9RQU3mJVcCQaUR3EJMoLztV7qpnkTF5inFQg",
  "key3": "3kbSmNizcCcjsiv472ovyadA2NvjJeAVvw4noYh3whxCHCnAS5pLeYwr5BNJFAi7nV3GBamXDKauM3drBumx1gfp",
  "key4": "4BrgQz7cHV911AHCRmVnyxRbMJ52n2CJvLDJjUE5q4aXLm7NsZ4ARpftAy8GAQLmw9VPXZabPUuqQQT2KLzmGuSo",
  "key5": "3YnWGvHWFedPejNpfHdBT5avG3VawnLGjsemey7m4EQXivk3X7wBwkj141sDE2DE2FQSecGZ1xQqHyz97FJ44LVk",
  "key6": "MqwChoYZomVwULphyHpC5emahDgriFUe2gUErJGJReAgQA4DgJpusUeZgY1G3Mt997X2LoaNbCkb78dKrG9MGEL",
  "key7": "2p47XESXHvpRDsFhdtaXGnT5wBWLNj9wT187pKqnmgyYPFDAebvmKRLBmHC9tPJ9298b3Xbs4VDnebBiK5y7DLzc",
  "key8": "43wkCMrUWytysWzRq7CdkiuAo5oJMsM8W8iAZfH8qsW71sanMFo7Fm6R3UJkFA1fbbPdMYX8zC8mBxVdEvGnoUn7",
  "key9": "49qnnNabG81nicDK5mRspFfXYkgZRSKUfM3K7foQpctqvpHoN897GxhtvhxM4DWkocnJtvwTwb1Fe8pCwFvUDicM",
  "key10": "63SvpeVe9xHE6wuVW2KApFwvvW96vsrDQQnognCXisdNyFenKhrg4v5CLT1FoGfgH6FHZY7XGzXaGq2XNaD58FLV",
  "key11": "3i1jd977XMBZ7GwQp2QUETNapWMfeyE4939DhZXzxTEotsCeYjnWrZxV1awNw3UDWbRcaYt5ZgiMqExxsprTSwhY",
  "key12": "27UnPzkKedys567xC8cnQPnFmBWpj8KPMF6SmL1W4ssqaJtGQ31ntghqWSTrFnjTcNobT4bvXGjDrFj7Nj5VBNVJ",
  "key13": "5UYBjjzsVkzyXTUJt4LgnPVriEJ9AretogWfuCgScMmGSxmW6SL3oGM2ziLz1qGV5z4HUyXhjCgMnVKkUk97dyjh",
  "key14": "2G7yeroMrNoPTWRtkGLUdDjBjhDa6on6sDdjnxCeKHGoNgkRf8kEvFF8bYMuS3PAqACUTHfc3ad73uyTx3KyuixS",
  "key15": "23BQMeXUZwKmK3KX8QuatKmFNgLALnWzK4Vyz9PNbUKVmtuCGZwqHMaXqnUjirMuxVWJ3TRZjBvHcToChKuCvwZD",
  "key16": "3Nt2vCNBEWDdfi9JPUwjYCdfqjjHmT3Btpfeb8LVysnz63MrWSDjQ9tRt2bMNN3rnppVCvbj4fLRBLYPFQp4qxcg",
  "key17": "3YufvurqmVvwqmnjmjusjJNHipuBcjmVkBu96eqj4QdaqS5YGPdvDTYpD5wcXxUBq3FgKfimYabKqw8U4sxLDizV",
  "key18": "5dcaEy8EXi7QgfkSwJuTs7VMqodxwiVZcX3ceRsqr3cNwyZbpUGVh1WNjJ4riENng3fEigru7t22XkGCx8UZHoNA",
  "key19": "4xZXifH5smbvoQjUpgDAFUsF3rSEGY73ogLSVTBVRfgPgcCBA4aZQ3ZZewvi6GWQmFanxdo6yVgbWbMyZrmnYu4N",
  "key20": "HNNgpJnqvdCB78QkBFqSNhKWDFakxVbGaAGRwE4RxnjreQBrCx4T9PWfBnPp5fkSPBbf5RcTM8wBDLL8kKVz4HV",
  "key21": "3oxQuM7v7o3gSiodyKapvdgceL6zJ3tFWkrM5BLL12xFxenqH55M3CbMMWikocndMTsp7ubCGhDrKRQPnPwvEmrY",
  "key22": "5rVtSBb293qCQDg6PugcJ3XHb9WZt1iD8YLtjaRCTsYMUKAocHqG7MHBhjcJcxMLRtYss75sbjkJUPyyKgpdKozF",
  "key23": "3mXLBhZVVLLaUeufyYDXMFFoHhJpRTUbLT8HGzC1W814vsJusMQT5agFggFGf3X7BsY88qfmJj699tYCMxa8Lo5v",
  "key24": "i6pCo4ffaZKDdjdzAJuMcT84Cqd75QSjM6urMpLGm2CEgqwtvd3WepEkhTcdSYt7YVruDK5avPX4Z6XxVaCYWUt",
  "key25": "4FYNTxpTpPSkUeCYZgjvrGw9t2QhcRvzsugV7Zn3TpNXCCpZJeqqNZzPTKCCLu4SsKUKWZRgQRmEuzPEtLfYi4P1",
  "key26": "5fMpp6q3ETyZ2BYJ5NGzCNJPj1uSJbYMucWe53hyGAXBPYwHks3CuB2HUbvT1ufHJPexwZoon6wWJRMPzNt7M22T",
  "key27": "657YoCUAPKJYf9NVbURM3pJPsyNhDCGE5vJ9V5invFJdDdbMfeMkdbcZYhu81XtbqWqAYTW99T5CmS4jUKT7ARFU",
  "key28": "3WzEGZ673uzyNDzAjYmCrcruz1Gd7ktAEGFVXYFeBELqbVrBYPUXR9BzvLkToEKj8m9gSmhsRzZrjyoKm4MPSa42",
  "key29": "5DUDBd4oBLUaUfqLZ6Lg9FbAxTKs1nwuX3A8LJv3PJNxp8SRMxzj11xiVgMXBx9WY8kyRiySYjSRpDK7FDhaUUZc",
  "key30": "2UHQHPhWehjMLsgSBYNTfdsVQM7tzf2RavVrfcv82CsN7PnqX2UaHiVbCPpiqyZdDAhn7RbXEh2gAxVsAeWE33YQ"
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
