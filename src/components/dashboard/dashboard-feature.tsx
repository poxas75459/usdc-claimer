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
    "47vWfb1wBWw9HbqwuNc5uevNSse6d27QXQyAtT2akeSkmWfQ7kXFZvUZYeavuN9Uz7u5xQsxsVt5NvFS5cuZEY43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qQmxcfDyai2DbCJtU8GMGedcFut46b9KV9LdHwqJtwaSx8yeKWWPYhzTHt7zyTa2vb8swdZguTFaLfeTPETJjBc",
  "key1": "4inbj6Fw3b87FL4f7osNhHNiSRbU7nmXDpq82tUXSzMJXT23a6g53qCcirvPEf87MxffQ9QBsJyfxqjzEf9MhzL",
  "key2": "4jQ28pwLwKXAndsH3odtnv3bMPRkukCCBzFewFkMpjLeEh2jkiAmMeZoRZFnoAzEpMxjyAvrgncir5icJpxburuy",
  "key3": "2x8xYVy7NQYNuPBfXMkZA44HizEQWJqpArCMVPygdw6HZgvgh8QzRgvczz1KZGR2Zsunmjpex8TbSdgcjLbzWuWB",
  "key4": "2K2AY1A76vxT5Ppgo99d6xLNEovAZniiz84jJC6w1jPunkspLHbBsToxKCJujFqPtsUekPXJ7FebwJxzaKCkyQgG",
  "key5": "3116Eo7G13jmzBW4WHCqXaWLvM1dzR9b9JosjR6XVQmjWdxrwTRTU33mspBxkaVT4mbpNmvrNCivtpW7UHJndoy6",
  "key6": "5o5zC6Xrd8Ftbveq7SEzfFtJpkr7a23nwFwiBUe9HrkeyzB9wAV8gYKYWSYDgHfrXY14ZoETNzruHtLxyqgJsrF1",
  "key7": "5kUT9F3aaxzRrD3AcxokADXMNQDA8eYqY2o4zDWwBZaQ2otqXCUrzYuGgEktJkbmkdSTSPvv3sTVrLdgTpJqwiiT",
  "key8": "3qcLXDGSYFt8FKopQRSe9eFrs9NJ7qWwjefpHXFF6LvYcpriLDDHMKhwHLgXHkhpViBGwBnz1Roroecwnv8cUz3F",
  "key9": "4oPTFLcNZs4RekG9gKh4VoWhwekYnwauAcJfQCjdgBPd2w1p9uAdGSVN1LDm6bvn6q5wA8FQGaDT4F6KqSZkXXto",
  "key10": "STrabuy2f3Fcv9jgJr1T27prWsxi2mKQcah3U5Zqkdod1uYix5oAJ67moiwMVQLh7GYAoD16Xh7nu9mQZ1PtVPS",
  "key11": "GUqdDFV9pEnoDmiczpCAYrqF784AVyM58ouPAr7s7guocoXB2Wt3Q5pLJnbsTNxGLoxFkuHmn6TqRKceQtdfgsS",
  "key12": "44Ve6Zj66Y14mmA6WcRUQt8BFCPnpvuGEzFqRXux5Ro5MBSwNYtfyNw1mY9jK22jUpNdNe6F38fBQSScQepK5iD9",
  "key13": "66UGML1cFMWivGcjEo42nqRkAdX1ufdexvQ81Tt2AVnccWqD5x7Nn1paemmjxBvY1eQaqv2yhuapeoxwvMzUDLBH",
  "key14": "2rg5xyogpkiidRuKZygKD7XWqXqzexbQxN1ckEFJhm6HKAX8ATeb8Gg5ddRDdgFnGW4vGJNiEovhCCbpaBDEfeDg",
  "key15": "5MK8W6UybYBWxeYRe3egZYjRa6ABdVhJWctRWoEKEuUrhjYVoiZAxPq3m6x6S6CuqpjWpETgukjDwbAHwPyTVVC3",
  "key16": "48AKrRqfUQknX7Vg23WafuFadFsTupcHrVRYyebVzveAkkVLALND8Dd1XGwCaoU2ZZ4xxF36rsgMhz3DGgnhUTpY",
  "key17": "4fcWwnGpdFLPrUjnYqK2vXUq61dMHtdbwbzbSVftXqreFwqdjRozQvj9brySfZagF4REEr54GaeYi2e9ujkQJ7x1",
  "key18": "5mn1DWoQ7okedLm7VDcBQjrC7DGHFt1kteYRnBZa6XWzyHKSunv5viboo1m4YsmkmHyU1D71WfANKUNbQXFqpUCt",
  "key19": "3WmNL9K3ZQY8J2pbBzotmvtCvqCyCiG3BvuEUZvioiQqCwrhVd7uSqF7VrrW6hBJX8ZvikpodoNDVfJA8MFJpuFa",
  "key20": "YmBaVdcUPtbFCGdNwcfNHEMBmwF1Cug27KNgmYu6wByTZn4XnzUbH7hbekxiZ4EivD5yrGYWpSDWpP4hFka4euJ",
  "key21": "4D49ELfQ6UxnPwm8ooKLMnkMsCbQLHzkNXm1QEBCNprqgBGJQVLT6hnYrhWiL41NHwcAwfRh9qy7c9up8CUrS3eu",
  "key22": "3BMVprx5zw4oZ6jji5huRKhM23eHHPnxNkYgGRgDwnBgtJfz1BBvjprUvfR1NoS8qe9sByFDoGktKPzpriGhk9vS",
  "key23": "3pqWVtajQ43egGXtXbvDLL2U5EWugCbzUmwJN3Y1bHgTLkkVm4P5xG8sjM3SNMzrqPjUN5ubHrq6nZryGAfruvLR",
  "key24": "3n5GFcC16Pwi9UtwzULqwXawaiQZiAhbbaQFhys1innEW2gUTefFFtw4bWkTRYCv4FjgRJrCN5UJfgdpDcnVbbty"
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
