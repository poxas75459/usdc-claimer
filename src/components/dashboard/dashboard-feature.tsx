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
    "5H7YwA9276sea3VHiQ84STx6ZB2ULWMEV6wwNKxNS42EL3CWBnR24deS5uynjdj6zsBpoQNgb71VDLQfsfSnTPqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C3e4trGWasyxy6FsmPwdpPMoeH8Ec4PXK8evRwioViu5D5QtxVeQmBHRZxowtBZVmN9K5k8U4rPFEBcRfYqCae3",
  "key1": "5ptEVMsog7zMnV3niLmL11EsUppH3pQyPaZshFdVrrqRjBq2srq5Zbb9WrRD2sGsc4AWQib3irRZPVKpGX9N5Nu",
  "key2": "2kN9heK2TrCP8BZf53c4nMRwo99MKbbTGpUW1dhigDEa1hNQFNXsUktKBQqBoxHbxFNUi6GdsqSHycKzJ9ZAxXiB",
  "key3": "4G64HzxvEZzJ86pFjyWuorBziitFCyiQehykPHwVk9ojGPShciDopeqhTef9aU3BtFVqsvBRGpvdhJinATamEU74",
  "key4": "EfSNheZ6GcX7wWXY4eZasmrNS3Z265m1e2VYwn4iZCg3n7BXxHvkp2UibubgSSo7LVgxnkVc5ELyK83Xw8M1njz",
  "key5": "4EuZ6HCBogqPM832Zxi8DQ71Edqg48TLDmqQghBTfAZQ8SwAU5eqBcPvX4YpXR7LifsGZnd4xU3PcUKRrjiFYkNr",
  "key6": "5Nvc9kFp8y213eukuveAojw6iGuqSnhvtYTcWXAC6XT1sChAKvtXZjKjVvMQdsTDyejWhmTQF1kqbNfmsYrGrboY",
  "key7": "46gnL43soHiWFphjNVMqddQixkVyA35HY555uBCr9MU1HKqeSoj53A1J1kxa1My3Mbh5YKWyePMVdFCmmuZDZZM9",
  "key8": "5GYSQZzeCLnyhrBrwWVDMvaWTFBuG58mZ64gNKpc5PZXXh6ZDQGSWgkTQypBku3h8H6VBn984BcfvG4dRhbTFWvX",
  "key9": "GgQxpNScbn9GKenPuy25PQsXW7eKbU8U98yxuGKfrWkM7swvAtVZCipSK95LndM3AbpK59zF8HsaVRwxZZHMBTL",
  "key10": "1zoykBmHVWDphtqcuJ67kc4AYzjLk73k26Aoxs2AUcL69ww8ekXr226MfQkLECuhHJKCA1dMMZqiE7EG9a1ALuv",
  "key11": "2oFfgHVVX4QzrVSxBVpfStfuE5cBevk3pUT87gnZ6woaarCFSFRZYRJYDRRUrKL5UgvJTEybagSP8MAh2nisThz8",
  "key12": "5p8QumuWDjmrvYnqRNnyPsnDLqEL5HeHVDvvjPpyPS5voTaXmqP8Q1zb7nj75eXWB1JJy2WuWkDnaURYskqP8P2B",
  "key13": "41x146ozposSMDJaUzbTXfqxPWVRzba684xndADeW5oGQqTnfQFF7Cwcm4JQdPUmB7S1TdRPexLZi8PinMJz7Nwo",
  "key14": "2o21TDGvQhtUWB4YpKaBRsm3wkebEgQx89zmV1bkLBcc5EdGfXwuKMDubnvfEEo8yeDJk2wppJedBU87NdjeyTTZ",
  "key15": "2i8iXoCL8MwyRPZQZcjMkcTWEuSXxacaQk9nrWpqbcvuguatMQNSL5tPxfs7arusZHKZXsAmyFpwGLkE1xrNdh5U",
  "key16": "4LeBiy94LvG7iFvzhRAzzaamESzFkRYc3vcCV5tuYV61fLCJBTG97jdPp6Xaknjvfw3uE4EiogB3D5DeYFi7WYc7",
  "key17": "3s1W5oTBeMap7yRvVHLc5JwEGZV5kXG9Uuj8B8p4kd7AJfK1zyoQ873ziSVbtduZ9zdoxxuki3qvX7eHkj5rZTND",
  "key18": "4KuyUHUWyeVhkY4xywoxHas5nnkBBhfXgYjmLUBJ4KC6VQW1RUTgxd5GoUbgWd17JujUARxQDJSQE6b3a26MUBiS",
  "key19": "5kH7rfBjZjiViwBNFchwvdsiL8Q2VApkPzErZHBmhre4uPhaVKeKunCw934AF7b8qz7hCgj9pvwu78yATTvgx1bm",
  "key20": "23Lw8StrCi3SCcMZqGWrFdmxmxWyRMUkN9EDkcYhHk6cbAaeA6LsQ73Egu9kawN1EE3Rp49czEB4d17p7KzH3Lrw",
  "key21": "3zmn6DUNUxZH6f7vHFygMYCgyWAhm1MsMvayXQTgigq41Kzy64b8pCyY2FDXdWU5AaTJG7M27suUeNiHzAQE9GQg",
  "key22": "2tNg1PLk2SNLypy84Tqy9Xw2nRZPPRqFTAC9aXDPijtGSqYzbkNrBMbbjesEccUDWbBD74coc81W3DCtfwvb2rQV",
  "key23": "5XrttJok6pAZuRuxW7gLr75qEvkYNP4Qit1m71z18FXDEKoaGMqkLZqX8BXUxXnMP8TRjd6PvabHbH5Cr4sianAB",
  "key24": "5XmyGZQSRkn4xmHH8GEAm67W7o9JJMbHo871qgQqS42TbUaydQGMFSQDjvvpQcz9vb2Y3nz1kH2gTTBqkYwKR6nA",
  "key25": "2kjCy8BsFS1js37TL42rKPKgyhhihC6F2xiWnhxKaaZL666m8PSqKFZw3cbh53vhek5zyNL2vvTZq6v2Yx3UN1W3",
  "key26": "3WXTbqGroeYvRQDepV5dK1uSJ3hEFQm7JJG2C53PVpVz1TPwh6KrzJaCHSqZV1oakCyusoKn41g9CcTNJ5gak2bS",
  "key27": "5nwyPtEK5qaFNHCC9xre5J5NWaGDj2u3bA4czPdDqk8j12JhPUkMR4NCBEYWqKpGynFXRDLdUJJohcacmcDAdq98",
  "key28": "5tycnj2yYEATebFpPMQSDxKgYDbVG1arK213hb29t2jmNPHEApEhm5WUzyZ3WG3agPvXF3Qm653NJo4d8bJoTSXM",
  "key29": "2TeDAvwwHFH3sKCQF9iSxeb79eKd6tPPGqMPecbRbRUXoAiii6nPJfNt1DyYEhoRBREwcbtztwBkHHmAMDCC1dgy",
  "key30": "56wFpUT8u7DQU7THyL6DaoYap55m8d8Htc33HKwZCfM5BhjNtzzTJkGcLVQp5mtySCTax3iuEudoccEih6KBjm6s"
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
