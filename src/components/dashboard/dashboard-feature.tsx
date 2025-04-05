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
    "4fM5arGfaHqryzqQGP4RC5WdqmQpApuHKSFvV4doD4ac5JT9rpgjPCSFdBsodTfittffu67FpK6X53yB3DCbUkfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J7JFnfAxkoyp5pBtcmzZQVT8aCwrkQ3noUVp4q4Lqy1u5iQmTAYTkfvyN67aKPERDzLdvcsQxRkSgFvopmYQmxB",
  "key1": "2MkHWGRDHenUwtZ1oHeCJzLy2nu5gSDwNexyu27YsNU398cCUJ72ZDtZFS1NDQ69xKVSUmst7dKhhxRicMhxGFm",
  "key2": "4UUk8hHNUcA7pueoHmZ6fv4TUxa75EuYxEyFw2bAjYDnGyRo7yRNU86SmRHheA9ZMK2PjGkxDij1TGPfiVzMk3iC",
  "key3": "375JnDfQQpNbWqrKqYsnCN6Ev2UKxvwacL72Ys2jejTrZ1kB6XFN3Cy4VVbV2wgr7BYdEt52yoGxQMCtY7igDnuv",
  "key4": "5dBp2EduGLDwyVqZ3GsaREQFwddjSjKkJJsny3jhodKv7D3CUFHKnoKpKnYUArNR5gz2xhhPkxtgBqWxvCTFTpnj",
  "key5": "5DexcW6HsEvc4k1TKBzHN254mqefAcYRwvNk6Rh8L4KH2NKtkSALVRUsKrctyEGuqg7e1zRuGRNu1idoXux44f8L",
  "key6": "5NSfX9J5ZPCNtqzdsTNurqNVEaGCzifNhL6RS6zHTfmxMgHqx9w9mNJomCMzd2EapDpYcLofyUCWFTEMksD47dbt",
  "key7": "2U9hHVskjD6VwVYbN3vYXy3Xp8AwK3LhDRcV3bWScoyxbqNemCDthZEN6GN3AwetYGQmQEYoCfvJPdJZx25SHJxW",
  "key8": "5t7kuyFSxGK1g4mc9cFa9vZ4r3sEBJtJ91oPYydxq1H5V6Nu6xgrC4NLVCKXFRuQvML2uPBqMkwgXZQzZRGv8FC6",
  "key9": "oqgZsbktrwk8NzcHZxUuNYZxqVcxv78EJ3nBuEQFYU6QWikYayKn13CYaP55KSUSeqKdqibqC4FxJQTA3uNmwoP",
  "key10": "56ChjHHEEzaUV4TG3R4mWp8j3daYQyqpQj1yCWRajYJDw49pWT3FknNBgwJDwtxwZkifAEixiM1sucRkn5w9ZuR",
  "key11": "2sR65cLtNdjXbsJbQJyVM67Pr6Be7PqEe6cUQrAf1wZGF9ggMZYJyeRassTu5mstFXEcXZ1m6mgDaSV3v3DioydC",
  "key12": "4NDPYV1TTAfAzoLmtTWBfSEFxE8rtivXG79cCjKYdKQE1THopNuc2ZcEvBniCo5iApDs5Gr2hqvdEF94JTBbVGHF",
  "key13": "3bYS8HitwbxQQqc3m9tcSJxeNR7TZVXmUjcSCQxyXXVzvNTJSFzaHDnf5Rh9AZGffzhK7jCdVdaUmuoFk9m4kbMb",
  "key14": "2Ctg3SWVL2d7URQaCb7p3DdL7QhjW51ZKoY5wCnEAztg7YyKDUPU7JmyDALyQg8YZAw62yKh57p2XYSEjrCHX6Bv",
  "key15": "4Q2cWnJiHGLFgjg5V32YUg2tNgoKuSRWabkxQTNJ1redbpFSQzvgmHn81Q6jkjbXUKwKy9HmFHBybKiqxeX6g8TD",
  "key16": "4DRNCEm2RJCJdQU6HLJdLqGYttVgzWxTUnjrf2hrUNtcaxYsC2PVuNaH489gA4ZN91nKukmk4bkX3fX7yei372c4",
  "key17": "rj5GovUqE2dZMTPzcP667RCe5xNbEDSVNhsttMSdDjZdyfncYyr9pd89eGuwET9DGBQiT1BYfce9mX3eQWWJxmV",
  "key18": "CUSNRMZfv9b9saJMGobXigC3EqmbpRt7Gnp4yT1iXocwnmXpgdDDTTL6dfDt2gmkUxW5DYxnznw4AwZupKczNP8",
  "key19": "NZSPK3tMTGCGZX971v8hGEg2gDLdswmbv5eyiVPp9KzvM5efoupBywjn1zrHypAeDtnAxxbBnFK3FxjhuuGtSLD",
  "key20": "3KqJaMCEBFEVPjwNuB5d4gLnFy6yEsshgrbvtybQRaL55eUmyrmqyaLhHRy92fADJAC6HpvUNkUbtqN7uuH6WDys",
  "key21": "4wzwPDui72n1odPGz9g8NymJei2doktzVPo2XbdQW8sj1CAXUi7kwp4YumAFn6nuWNxmqd7MACuiLjpABeFiFFbk",
  "key22": "5UB4qibErYnD8oJcbqdHbscSFo5wHXF3dETQVQ9tAUYB8vVGUCXUk9injAxsPza33TTappKrwRzPRum4MqD9Wo7T",
  "key23": "2X56ybhfvLa2SP8prXN6wbP4dFFYJztgf7mfxiXSHAwec6TJmp6461hjKu3Dye4t7Vtt4o7uwjWw1eU3V5NXWA4j",
  "key24": "3WjSV3fZWmFgSh7jE1XP9yi8i2NiZLfJbDgRztD6ydhHu31MwbbqXVEE1mAoqviLeohS7xR4PA2xXwqWk1KzkiE4",
  "key25": "4Q6KdL1gcZ7LBnXtZehJS4kG6Z7Eo2gaNCkrUVPoe3Dw1u9kt3gkzgtRGYLASURt2AjNSw3x5Wiht2amBeSdj9Ag",
  "key26": "54S538BZGA8nWfYJCV93QvCXPYePG4wGsSpbdLAkiNXtzavavMs8hyVLMqKTy4zQbJuFNjxDvuBc9whSHpLKb72B",
  "key27": "244znZfpfJcWiVXq3P5R9PZHNjutinCR6WEAbVo7W6ggTFNQoihKsGUs28HNFQFiY6CWgUMqUUDK85DKEbfcpWnX",
  "key28": "4GhyXGSFfSyaASjsCTvNouMRBzwxTmwMqVbrQHyZTDc9PFn5rfRunAdSqncCDZezryV7RENoVx4JngAszgXTukXb"
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
