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
    "4bu8cVG8rBr7gLERXsgQPTcfDT9SnAAoN3iRLAyTepkNzKHcpQuUv3toAZoHo6J9UVbTteMEgC5km9ymJ9xpJPN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3duzThCaatUBB8VHGyekrwTJCNcYJxxnF272gkJ5SLQpAfoEarcnF2jKRafKa1kJ2ehYFjTtavHgr4rirAnTe5gU",
  "key1": "1CW5MsnnnyTGXrjZAnLKd4VwnB2BsyG6KjbHYh7b3QVVwknPqBpK1CQVBny3mfXXgEmWExzaZSxSmggHq4acFcp",
  "key2": "tAfE7uEYpP7GKvpw96xzAC6afaxKGQJnfAhUQHYDGBQ3u8oKqVcgLdvxzoMcAb38SUTg42DvM8NDTN7dTdtUMYw",
  "key3": "5ssmY1T6HYfL2oZJofGZ8eM9YNaoBvK7XVTHCBHTmS2eMghHpKfXF1qPvy3aWYH5qfhLSKgGgHkWds6uhof75Mf7",
  "key4": "ZMCq8mTC3FPbuHB9nNkhu14Fv9uxzUHCHXsRHkUkuHnuJGWdChqtYYy4SHESvgFJ2jyWfwGLtfxX2Nbendf8ZKF",
  "key5": "2SxNVVtCzLkcDnsJWWk6hWRb21xgzvF4NFGo91mvCpuc9quJDTu5fRzJVMDDjiPz5sBkMcMg8a9R8VAfbzXXhf2",
  "key6": "4KLZDzSuED6DYWq6uKXtRmaAmfjZrtusekdusRFZmacdK5ck7LYNufVm5AP1dxPKQjXYDmjbpv2ikqgNSvevbiUH",
  "key7": "3oUdZ6my8MTpMaPwDkzieUxE21LwpSWdjvoUXBBZZ6TTn24jJ8H6voLkUJX1VhqwHJxb2pyfXGdr4FqtaqATxqSA",
  "key8": "3zo1eH7dBJVHMVd4orv2G5BeAEpQjMqKn9UDmbLgCn1eGtYm6WeSoPpbm4q7XrCmkWUQa6pbHksWfyMLNPRSQ6ER",
  "key9": "3rdGJLTCWgxUymVp754zBEBYNmrtGFm322qbtGvwmavcTdn3fDv7ttzgUt5pRMm2VdBmg5fLEwPQF2ktLwKthkUF",
  "key10": "46moLVS7qi5E9VRZ2coiEVp5qhdC6pHADdcTeLwiqqd5tGVVa1vAYzrjHFmiw98cmSeJ6PSfvM7cJHTzW7tiU8qe",
  "key11": "5ZS8xFEgF8ees1fVuM3E64jEF28cxpKiHrYZFaKXKFeGLDPZm2SS9mKctiHjVDPKtJCrcSeuSiSKh8mr1sE7ZDPd",
  "key12": "WCJhZ9fyxk6fyifV8cMBrV2B4DXpDVFnmuhX3vR4QHeMdTUQKNUjdEsSCQD281PCz6gnjYrh2N95xsVmghx139u",
  "key13": "47Qk7pweGA9yevykB66g7UddKpVmKVTaJS76giJrzGGTta8V7AAAPF5QDNREiL7DfQmDTN69LrWuBvbSy8DSvNqt",
  "key14": "4YDtncK9ZJ6CHiPQz2ZFQ6ZbHrCUCYne3QqzgcykSCxS4JTp3QjW2ZZmEy3sMcsaPDFoSdvvViqiYn5bKw4brH88",
  "key15": "51eFMSZr89BQTbehVcFDj8EVsNDigaydamMRjLq9jYzgwQjXWEGzun2CCGk9cbXQSfGQk7Np2GWxkMvjF3jq4Wdi",
  "key16": "2g725MoUPc4Ghq8V1n1qxUYWBBKpmS7QBYktcYg2isUcZeECrUeS9N7AeP5HgCysc9m8fvLsjoXyyknWPDXdZKYa",
  "key17": "3CMaVm3ododpLXo8VZPVjfyRewC9ymX48Vjgvh4ikamU6A3kiv1hNDXF6SBmAkUUtMs9owqgs2mybpHa7MjLThBz",
  "key18": "Ng2Rxd631MhbeZagHUes51HRgCvjL7g9SRmdN1t7CNwgg9y1WUGftcyWBXCGRSdpiJQkdSN8CrqNcZWuqnmDwTQ",
  "key19": "4LLAcEv3ZzhMzCd4Gzve4UGwii6WD1PQGgVoKdppfLyKcJLv9i6AKpB4v64RTDtMierjsR24psuE7aY7ZLRfZYWb",
  "key20": "26LSpGooe5tm1qf8zqjfCcwsr2LJYkNQ8NKnqdw8oUc6RVk6kbdgijDaL3PLbgmhew1qeyaaqS1tymKx7MvChEXu",
  "key21": "5M2XTwM8LB2V1vBsUuMM4JoKYSMidoMuQdw5FttMFHyh8wHXxPaxNPZB9VSjCgY7QWuogqg5vmuWxPkSV33xYyY9",
  "key22": "ZfPGvJLD2XAh2s3ZKiFcEhaMERTCiE3Tpm2ThNKnNhWoBdbPJvxZgvHfLc2bixJZWEHKp82L8wRepe4FkyP4NXW",
  "key23": "PYLchiqcFWJnzse1WjQXUDap9vnuoFmYQqYcVQLkzRYK1qqF7Vw3Ax6bVrXektcxHeuxrJBNLzUZUr328CnE8Bj",
  "key24": "4YEPetkyDLG6e683NsehTRrwnQFdq9N5SvW1SbJoRuN5bUGnjnh5TW14qnUrBjEFnULFsLk9Kupx1EPXuAqn2bn2",
  "key25": "4yZQj7xQFHq388gQYmu1pPHmzALNvPeLx1C3221pkZ9Wu1Lp53raw88rsoFhtpK3KaMiDJV1bbYufekSm5cP3qSR",
  "key26": "8GvGE1ACjphPunbCLzAzszLpjhmFrNq5mCymMvoYqR4NGRL7aEVCfeqJ7eX1Jj2yrZyKUDus72aUowXo9Krye5z",
  "key27": "23XVpdiFzEoPnnp1T6xEMTN6bLFwionJcJqdUC96BsYP5118cgi5xMwbGw4GygmPd4KfB6gns6RdanF3xbfpH7kE"
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
