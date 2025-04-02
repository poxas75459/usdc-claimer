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
    "3R3T76rBUcLHfEyuyWyEp62H36nQp2bqRdkvgCQbioigNJRZGt82oEEDgLrtLeqfaip6guQMKxZ3nKa6x8WMpR5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kjJH2KJmdABeCoZc9hAuZymnx2g2hoaSnP7E77VRwG7cUW1t6biGd9sgoumsnvgbwVY52KdDBM3wKZJF3h4ru9A",
  "key1": "38MM4k1WFywbdPtd1jSRnBM6dYjcjEzVkxYE8VqSiqfL8bwgyoMXF19UCfouCckryuGEE2FyqhqDpQydWv9SvTPi",
  "key2": "2od57nRD5YhtDmwsiV324BXiUyDYSdHMQurFt37iaarp47CUiwhp2W9ANWzef2UgPdUkf5j89qchmeTsEy4TGFeN",
  "key3": "48RFK7NbNGuJrAcCc2Rdm5EoqZBM7zXwgWTXRM1PqqtJvBqG8bBzG2zupvz2K2BBsp9HVTQuDpS3jm54etR5fByN",
  "key4": "34tfcxfyFgg68jhHSwM2wm2BR7UeCHbfPVioSSjFCk3ittys6oQjofKJkFmGFcge9chH6qU35vTa4UUNjkCfgbXp",
  "key5": "3AGaikTr5psYDuYub1eNYyY4WBA8JSnGesZVcs3BnPQD24UkqXipMP6J2ni62ZqN57rJsMjkxXJ56JdPVgFSj64j",
  "key6": "4KmizruYgQK376FoZuzPrLpKYQey8gdvhTTC5Aok94rsq7XaZrqj19NJiKoBrnFYZR1uJXdsVT1S3pgmQzS3Ld4j",
  "key7": "46GHJ8BRhbdZtsDLnDGExhNVpaD94eRoYwSQ1qBZyvUM51ykmX3j9LQfuti3y4yxD8uCFuhCirwFPUcKVYLejQkg",
  "key8": "4prgzQFn6uYsLCXxRbSDLbWM9eD2BeBZGGCSxZFNuJJHQ9Sk5muBSXqgyjVz6vWDNGqQSUgb5mmFwdRJpWsJvY8c",
  "key9": "4GQ8GbUijyF63r2M9VKhKiFyDWTZKiTtr4oC7euR7RBuSS6JQF3UjuxVrU6ZyiwuWetzUrTDKyiNZMTndg9td2Ve",
  "key10": "3qTsDCEzAcGiNuhqyCsYmFUJm9svbzkrvfMN99KR8Zis1jUXPJHCHaW6zJFHRuSsFBUqzpLJGNngxzRBTCiR4KN5",
  "key11": "SZw3PBZ9nHQd5bac3X896EwfBKi8r7GwK5qiF1VW1QCcp93QxneASMiDKvthnRLkJ7fTSKk9X6XnmE5KDbUxYvn",
  "key12": "5B4SuXTuXYpjvVBW4jGHoFWDu14BgJfzNPmrLepbavozeawsDNtGGiTVUVddFpV66vSXf2n1Qtv453kRgyEW26bn",
  "key13": "3DBpFi9hGo6mtccq5K1MJPXxzFQweWtKSM1F9x5tA8xvC5NZmHYnk5RbNgVTMr4QJL28cDWjAfsQWSMmLVbvHGKb",
  "key14": "3V7EE3yDKMPPhutnWrV2pCff2eVRbmG3AYqK3fZHpxi6qXGk3JdYGx7nJbyAaTxvHyFBtSdgFZgnpYkJBjYFdqpv",
  "key15": "41R4xQbywj4RuFDTeLzTY6JkXzZDfECnVPf3Ux7vcLh5aWHTvh7LYRoM5PpJ5mWjqnfnPXZDLikzthhF9ZeW8Eau",
  "key16": "2RE2B7B63ZPgdZLuVxpYG4zGf1Ty2EeV3yCYoaFAYYC76P4Pc7huo2DHtRL78a9QiRnmD8bGQWNFMRs1G9QPF9xF",
  "key17": "3uDPZcjJC9svMwoba3CzoVtvN1NhzKgi1U6muAaFJ7Wuj7Kd7SJS4ZejQbeTLM8pE1McrsbJvABEAA4DUacUFNWe",
  "key18": "3KF5RpTuePgVQtFaLAxPPhttGpKmDjRzzGzG8FceVyM9LPEi5HrtwXDhxGAVFrKGZXi8bLzKvg7413Nb6TBBpKe3",
  "key19": "2NZwUSAgSJ9nLv3rvpzgH89ETyQuAqU5qRsY849x6cyJFQTq55LyE1xeiG3QtywmVucnAHBueT2X6d1BcUdPPYzi",
  "key20": "3GqNxCi7JTaBKEdXW4XDEcoxkD4BPzbtKBTL7R4fnQbZHF7ZcLGFLwQtnqXXhMZStW6fjBwBNLqqNRrzaSxUsF3m",
  "key21": "4Gktdw8csAPkp8CySK3FvgShdhTafzf5W7jZuuhd8CFmKyXgfD7bNgmUeXXrYyEg9s4Nrzyw9kKC9Nm5EXfpJz53",
  "key22": "JctmcgYDYRKW8QTW85hKhohvb6xfrnsCeBJQfwJ6Y2RUXqUdf53JdBhgTY1ZA4dAC7LC9KHQs1UUzMScsNu2MpF",
  "key23": "4D6UowPvYiiQpgX9Wjxe2X4j6bUtqXfc4Gxt2Bj9M18TjownSki93tacue8WJGThXFt4RBQSdYZYTCvZkvYUai4U",
  "key24": "4ko17f59JUuiRyxyNC5VS5L6PDbJBnHqYfG6Z6v2S2SetwwoJqeprQEB3u93VHp3m8FpFd3DNZdpv6hnLT9JvBUa",
  "key25": "1fsw7PW5o5C249AMJ1QCgbEBsEYfWNKb3LzR4kDZ6zDAB8RwVgTyFaJuqcmgr3MjQSpS8GgdEitF7FM5uuiTPHG",
  "key26": "4FSV6F2xmCReCDatnRnQvzNtx1TcpDzfwxo17E3sxap2NVE4tzsq4uzoqzAQc3CCRs51H8sZ8G6uUnVy5fEUmeTV",
  "key27": "31qQ3fpoSQF1FyTWhKR4TzaYSPdCrdqKAqZz4nMGhs45HP95J7wvw7pdgVCj2aT9zjX83mfghnqv8ZrHdJ7WjxPb",
  "key28": "2SzndTizr8UphkWZ9p4t8Ca8EysmoqxkpD5Poz3CkMWfpEaW7bB5zdpbC1hE3rvhFaaHYraeXCd1A1JdmQKjCs8x"
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
