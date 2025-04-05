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
    "3xnLc2s8ubjsDCKaf9VQB8AVvFafYAEDF7mrj4JZmUFbGso9T8QrTo68kAdgRr4k7YHe229dkLzWnrmAhmvoiRHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xorApMrwmgJP51CXjL8k1RaRbj7GkqZNETn82MkxaXW4pfzk3WeiHWKw7maEAF5jeUurLsvxFjaHMUiSGcgTg8i",
  "key1": "hhDiP3TdfHfCtW9u7EpiJYzCqwytNg5Eo5CYkCgispGTsCFwzEcKWuPJCGAnN2JcvqvVrKKuBsvA3X8mMCDwZou",
  "key2": "56KGorr19ATZzQifjuRXUqJdSJQcaCj2k3DCcXMz7EWWuNxGX5KpvP1ojfpv5sXQpKM1JgSw53qWLnH1zpDcRDu1",
  "key3": "b2NT4GMmTR1m1jkRiKAm8EocRWHxiM2uYEQGqiX15k2na7jf1zfAyA7P8zCqrrRSCWnWtzAcCGQxeH11MKRRXC1",
  "key4": "3UqGCZDfuzDvr9jnigrREYeWckHBpB2VBDsaY1Vei1ARWZV1runVMFKhrCH6vDBJpZccDRjmvWsS8hSjtx2UXbFw",
  "key5": "5e9sjrrvPViSCyzexU32JroQDAv9hS9BxwZNeABsuJdEyuyng2aLLUHNyR9g6dgDcyHu4ieBWiDDLSqGQaaFBNqH",
  "key6": "5JDrCFeZJKR1MjvTgDDjrnKbjN9rwPG2JeB94qNc6XqsMPfSKd4P76EXeHdqVJLRAD871VBi7jEVRJ7VMEu9f56y",
  "key7": "4kDDr8YLx6eEQqSk7fUfWQsuVx2Vx47NntDzgijweRxugiU6Xd4U8JPhNbtjoZeTgCbTFkgMFYoHWpd7BTbGd6U3",
  "key8": "TG9Gm83C6dsKC9dh5bJdjKG5J5ivyfTAGp7MDoziaQ9J2mspcyy8D6CSoJG7n2Qp3TC7meqmEXgd9gtXX7S4nQ3",
  "key9": "gtRq1KUjei1noDwm27dS4dzophNjQsrxRNh3R8nxunK3Usw9chwdAnQ6Jz9EJA3aDaeAWVyMakDsJQQSGueJ851",
  "key10": "4TW8fuWUnc8mSujaky9NJXq9rojTqCfv261cu6Sh7rrG7A7tPi9JKrpp5fw9QPxeuuyfiLUS81hidymiD3AM3QtR",
  "key11": "51M2VxWiiZ53Uq5dtxuhqdYGnHeuVp5EEMUKRC7umDteoeM6novTkAqpBVszQpGGHX89sFj2Q6GnVBjc72NyruX9",
  "key12": "4Tzg5wchW6C4Dm5kHQGfHZ2RyVT2SnkvLcAWxnJsSnzXutgcTt8hgkGnnoiBedNVPe3vPsyGMNPQYaTnT9HrX1AF",
  "key13": "2W26Ly1jZK21wMaaqMJkReHJqMrhGCMmk9SrQ6nehc8cNEepG5VhgHapi94n99j3aoQa9uoXvsQLXx9BbnNSYWDf",
  "key14": "2G2TtKgZYGvRsjZieRtxSmcJL5LK1fwYmDFUtKDcdWGieMhm2DjgMuWHedSX1QDAzBDKciL12dur8bptxmVgkS82",
  "key15": "3uYJ47Eb3BzAF4sYmnRnsGawQyrbjT8y7X5v8yjKfvebNGHx1LbtrTzi2Nk55atb7dHJQuFptKe5yXx4pdrSRDKe",
  "key16": "65QG3cqwpDGxw9rPmAJjf9rY3caNmZqK43KvYR9y2sJUv2WXQFFBn1JvWe51A6yYTZW4n4WGxsGuxhpogmSmQBu8",
  "key17": "3QNu79SECqVv8W2F3DHoTXmgnW51TMib5aAcpFuAHWR5LRhzWoKaevLVbt5fYZhcZzx7tccvDTTwyPLJX8bUx9eb",
  "key18": "41iVF1zZRufo4QaoQyCZBw7fyHRtTn92tvB5HNdBMC6prXqfot8wwGBsZpmvnXckSxN4yBsoZ6HYsw8coQdDd6uW",
  "key19": "29S2ZQoYu1uFwjMGMsNvAiuRdfKfMGgy1FtEWZXm5fC7NZPeSE4aRMdreTwjLKJwujEFkePZCbZA7uHsmWApyNZS",
  "key20": "34Zeu7ectZpJ7LDfLQwTrPgMGzEKiBh6BtX2kdZg2oN43xAe1LjayYURfZiHceKh5npLpZD2DqDowWF1ESByd8Xt",
  "key21": "4iVYkeKJn32xqykSoQcTjg3szxPhosD6UeDThuSALHEsj7xLtTZApkk4syYtLefYUApZBW1haBBZvNjXCHu78VK5",
  "key22": "3Vgkq91DAiprQxWFXEv8nbbCYCoQ9duGjdNWFcozWfCKjdr5M4aqRsyjkTKU489CfZbSu57MbYUGxCVQwZQ7ZJ2e",
  "key23": "5TzqGkYCGvEM1wMBcTRnoTCx2nwcGu9XacjuqWHX8pBRFen6UNB2UPUpBxU7iL8GSanjcz27oziDE4dzpuME7Nby",
  "key24": "66pAt4aofzC7Ys5kFDsNGwhK3NuWyzXzGCvjQKn9Xf5ETY4KirjAh1473LjdcHFHKR5bP9aCBXsn2MKvDqWN1rmn",
  "key25": "5Uyup5wPDmBN1v3FgVYB6iBMkWDWjTV9gqfyEri8kwixqNikG9G7ToQMkXMnbP9qTNYzci3uGVShMyKQMWVJkNXC"
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
