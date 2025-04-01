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
    "sjBx6SEfDZJ2ssxod6MQxNv6NFWe7NwesuV27xVKYpLkkEjvLu9vxoWUHHmDfGDsweXMC5Dn19ssoaKjBvVHMkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o6ks5FZ9EER5LAHzyo2sJArypfLccHVf4gv3TAMTYfQEkAcUQuXCCQa3dSJu3dR44H451der5THBDLxZ1juwJeU",
  "key1": "3Ua99GvVvYAZZLRuPmveiHa6wQF7ZJd54hhZ8sFRFwhmDg2e816xs3q5iyM1cDjHYRqmptyXmcpJgRdgGvZj2fee",
  "key2": "2XxwQXieEfTmRU8Mi4J2LPSDXASF2VKtiWrtdhWCV812p84Mt8rPDSBNgbFx5HRPmN4oWddK5gm9cpafYEJ4r6ri",
  "key3": "5UEWycv8RbbsLmNPvqJt7cTqbaJDgtRHXTgqDFPAyhB3NU2hHFS39rAUHQRzuSZ8d2DB9Nb34NNpBFhu75uvjQD6",
  "key4": "2NoLDTcTU9u5MbNqxFKqo4VZSJm3pzteDc2LndkPVz2yxzpeiNV9wjokNu4H1QDUmH7FBB2DdLkf6PQHWeUzFt7i",
  "key5": "BAnuwVwpbCjMEGo5R5cwcmxuT3mHrbbSCnNh5LTsvQq2wDYQGLWiGxKnq63eDugzvFBFWQf4MDvnnPuMdRB7pcS",
  "key6": "1T7fjtuQpuL7PRaeBzPVahMRtXmYrHedVjPx4GAZdZsNX4D6EkGf3DBE5pacvMDpAv57PhmSjA2LAi6wYybNqxi",
  "key7": "5UxxU5rU59J6STtVrcArFv9g5TYscLw4ynpn9vRE5XGFGTUE6M38QasXEL7idCwvb9jKW2pyAgbn3tGwTdAZGbuw",
  "key8": "3eyTFpeCMwzxX9bcM1ouPpa9vFTcoouDZF9hYvM2FXBwuPdvkJSb4c7TWW9JkvLE1ph2WjN48LCnA7KczUbBDEWv",
  "key9": "64aBuAJeBvJCD9bLuUWD9ttTCSo4kTmUXAp4S8k6nnMwJPhfkQnQ26MR3WUCd56fypEN6bbk36i7anHwGZxxTzsK",
  "key10": "2NHzMUoJnKntbFgssFtzKVsRjwsV7NTdGWbz4asSfMj9tEWmE53ccs1Ks91r5M9PCwRL5pGKprw9FXd6P4Yj65sW",
  "key11": "5te17zswVFbdWLA2MwETtDo9TgzcFRyTaR2T6Bw7xXnZ7oFTmuArfMX56nAh4AwZhTT3DDrVQjPmTdy9wehKNyQ1",
  "key12": "5ZW66nMSAVVSo4v1H6wFXottnFgcPky66Btd3xefnjHVmKmMGSUbPspGcfhbewKiebCgfHbnLjrBAHfKgpywRmDG",
  "key13": "39sFLuV84zE9e4us9xmio9uFUsGphNWzvqPKuhfzwyzVLb4Sy3vZEKH5Nqmu3pAxL85rd81vx43TPUy21s4FqXDV",
  "key14": "4B1J69WLiuHfidJLUDfELhmoESLnUU9fSP733xW9mfHYU4faBUWBAF7u7ztmUxFovoxZQpXU4yVzvcvYcxVdNe3j",
  "key15": "461EhgBD3hyFcicLqwqS36wFfcpws7onauPbkrSQzivsLoGwaRoDm9BJ8JnXZZwjML75qCBvEGztCLAv4e27WBTf",
  "key16": "53yJRMJPfmuovsPSZdU3PLBci3QihHAYexGLsmjNFD2TYeQwC4MJSqNJPJNus2LVtP8s6knZHcEw5VNNf6SbFu8p",
  "key17": "63WfJFbpH6rCsmuXpg9inuBcdFgLPKx4ZrYbiTjd35uSXkaADuvgbttJCQpDgPUuW2iLYec1rzCg7EeeRhb73SKP",
  "key18": "4vVoxcMVmQ6eorc1DLnjEbc2uScffjmL5C3GE7S6YADvWDDGEo8Fvd2o8dPx1o7WfZqxbrkdjPtScjvkrnuGf4Er",
  "key19": "34tiWu1rsVruF4JgP8iaceps8aPjz2TnuJAiatYZJ1PQtHYfpEDycFgJb8Y4jpJd7ZL9u2VLx3RZTSsaU17nfYDd",
  "key20": "3FoSqZC3Jg3L8YAkyuZMne8PJ9gPeYSgvpdXh5FBaYqY73jtQJ9tikfiLvCBE88GrK8dXyGsUkYvup5pkgZmeyzM",
  "key21": "5JT1tYFBiwwGNLA3hgSpQrT1bjoySHtwu1V9XoPJpX8tpHLrVEujvEn8By9kAthqEdU9aPA9BMhmrpyCYdd6kpNw",
  "key22": "DJbQwSVwsk2L4GKCgAuWHMCJcoSYomBNJDcVBbkT8d4s7QoQbg5CY2qMfxg4zhdHJopM6cepoQEgPf1cjdVy7tB",
  "key23": "TuwaF6hHCA2SCDFT53SxCFkzkykRbuUBdUCqLTxUaRuEg5GwqEtwyEAdFueSVAFLQ9z7rgEFw7Y5uQPeL1D1jJ1",
  "key24": "17H9fExm8Va72xEhk6K2A9nVi7Wsr7qQaPvzRcXjdJDVMNPRkoJDALhnvM7UyfzTQmieUiTmRL9QdALtFgmtkfJ",
  "key25": "7GSHr3Ak6XxvD5JwEpcnqarvb12fLESLcBgNbVakbMd2tKknS7VpaB9VMTEzyj75YZ6hoSqiS5WDSnP9EBgEg1X"
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
