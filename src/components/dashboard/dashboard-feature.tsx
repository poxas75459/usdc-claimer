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
    "42zpPVVMYfb8G6zA2T6NgMYbdwMusVkCLrXTn93PByVcs4WQapr88nYZp73Fu5WUWnDkVYF6Sw2hKwV5tgFWUbmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YzRjM7icCA7o5Z7ZLBjrWN5jApvjnceMPSqjLgGNJ7fo5AnW9p41iZ5tWSH2ohQahVzSJwFeCx6wNu6iVpjscFG",
  "key1": "K7Yy8NCy9sUns7E1JBVj26fpiBfSF6No4ohUDhfjFL4kE8i6DKQ83v5HoCL8wnH8NE35StPRH5cAhN9anvDFHBd",
  "key2": "2CSf33EKvNcTJucwQvBWLoxyeSTA4Z79yG1n1pgk1agBtjcWNxTshUa3skUK2rK2Q7bkG9vzqL2qZFRGxkyGHTHE",
  "key3": "4Z9H9XjjXsnE2SgRaFKXxDqN3N55HJSKzoa8vos5rGTVYhknVUUwV3gtjSwN42f4BcZ1NZiTpJ9Bnor7XpQaFSZ3",
  "key4": "3DEvKLF8bmbfd8um6XiXV4gZEeNDLhjxEG4F1Y9h3A23TLeTCfKj4Q2Xkzbp293GQb8FW6NcmZZRFgYJcFc25FRT",
  "key5": "2fAXm9DQDwQdcka15DRuhAQdXJWASNBDm4PndcbBty2j22J7T1PJUMKBGqTnN3neghQkvQGXS8LsDTU4LhVvpyro",
  "key6": "4GcjeMTUdespUpKR5w4j4whrEJBC7kiT9qNF9wTHkp8UvxWfGnxjJ9742zRLtUsAZzxNAtmmMGkF6rdf6bAGAFyH",
  "key7": "wdL3J4ssv89fhbRxJtF3qUq27NU4Px7G2DfbgPxTnpQy9czJQQmEgDJBHDqSPEaVnR3c4Fp3HuN2xgq1S9NL46h",
  "key8": "2zHYGtxZxErEYHmHS1d6Pk8NtBTpefvNrYWt1i8JQjcCAiDzEDXYGPTP81aUTEWVuHJJGCGG8JcJkkfKfPcJoUj3",
  "key9": "24PWDpG3c48Kt1pXRVhyrpLGr9z4ws9v118gBb4p7W9Hr6FDuDrB8xJeBMCYYYxBgtcBDY43yAxDapGeuoU1pjHG",
  "key10": "xax6qRLova1qnUxqjSnbpxFvehABFrVB2Eps8nXuKrj7G6HmbRop2m7W66YqQXnHDyaYMcsUa5Z1CfDfRSpNNPD",
  "key11": "45WoPq2qgCLMSex5o6NkiSSAReh1tmZPn32GcG6ZetQXBX2riCNQWdKU4hiJS5c6KQhZwiTyJP4ipA6SfTmAXv6s",
  "key12": "3BLLyBnFLxX5QD6CmTeiA9JC2yFm1aNFnmz1mJeuqG1eCQDpP4jsMXNiyFfWr5qa6WRmL2ZxsB3shDVgTgZs8yvU",
  "key13": "4YDRn1W2pQFK5CLFQ15kMR5oH7cByu4fXohTF6aEZpJ1pwL2AQfirxsH7q2q5FvBRFc9T4XqfgpYVS6hS1PN7zjb",
  "key14": "4mSGCn3czqgwcbJoK2DNmfpapo163WwQULQ4q4ZBDeHvQ6tGRXGmBBgBWnkLLuzPt7rZqa11roZfWemreA8CjuPM",
  "key15": "4uSZkHh6yddF18tvF7tfWc7tRpAUe5pj6LS2JzWSG45uSh9FgZauUe3cGfJddFdaW9qRsMLEJt45Snsj66SC7Z7d",
  "key16": "2Z52aeEo3nU4HkBWxTjN7g99Wf41qaop9SaWFNDQmKs1C4y1Sw7E6W99bpfdGBKwgn8Ws4XQae7YMbQxTp13Qb9E",
  "key17": "5is2fucew7XtNhoRcFEK4UKmoWXknALrRHPn9AirkcfC3FMsjpRXbNwWuZL4t86CbynuHBopwtghd2a47MTms3ps",
  "key18": "3bhdeUREcv7jkZ2cjf1vX7DEhLWYftPThFfoP1WAgvtTcVensnEpHMZM4jEs1uTocQhypdAf9VyXPadbCZcjoTZB",
  "key19": "5RZvfYymniF7esV7qUr6MGc86kS3B9gZqCWoyYhX3YGyTwcmZQfWuRpgDXDZNzuvP5utukstoHaqr4yy8x4erFZh",
  "key20": "58B5SdpsFavbBaFoieQj6QkT1FtZkCpsoU8ZzjdYFnQWaxseuw5GjDUDrXqTdag5U8rGZxkMSmsTq5yDqsUZVXFT",
  "key21": "5Ezphhzm5uAWtKeBteTYodeoXPyZiksWxxwqiEZgBysHoKbGabjRgZMb5sX3KJ5FS7oFxXxgRRBc9UE5DQt5vHMv",
  "key22": "63e414vLQYqw6HNquWEAfPsgZTyaYm86rQifdjuBRzYPNMGYiiaPDrzNjFk1bAhn8t5vRVndCJCsVdbeJ5p9go1X",
  "key23": "32vcX8oY6BTDd91BnMc3gVcaDxEDYgtWLDN4pHgj4j4CATMHonqrFQJ3seeipcgwjeXLJpHQmxNTd7EfExtneCUU",
  "key24": "p1gc4aS7DgCZZJC8a18T5Asn8hmbjSejChV2rsSchmcHoAgmAMsmjpDhdovEurNiqavn9sgV1hEsykb2xbz2Pd4",
  "key25": "3HwUgWMz7w7XaJBjbYP65Tqm4AzF95RWLKmAhbUp8L1c1EqVB4x1VetksYX2kuBZyK6f25CwjqFcceciqDpZd8t4",
  "key26": "2Vn3KcYLWPiDXxzrq7dHq7yZpXaRMoxJB5yfEynRph6a8GMfpMYN6UA1arNSNnzRPdPM1pzN9kjcYLuYZT4kFfu4",
  "key27": "4XgoZYEcwXSZqVnj2ffMiTKFex7CyFdyMw5NyRcqWwBAbabX4vFWdKyNcwtpWPju9ZweEQXPqAFRtR1XAHWjMyDc",
  "key28": "5MgxGV66LiGKu4uaCjabgoyZLh9MKnLpwKZSzdmg7HxMqehzwe1yDVkVksE5cN6XarzcFC5S8xYfJawqFTcaM1uh",
  "key29": "3EdCm1YpKiEn6UAAMFZzckKAxWs8Pr9sCySwQXW7tzR4ZzG1UgEdmmthk36qQXurAykjQg3K46ESXPZECMW51smS",
  "key30": "4r6ckuXZXbNc4XX3fUvcnoG1WP1pidevxzFzNxywZhGV2kGmH4YihUuQ5Hni98rFMST3G2pcwJc9bFAAFvQpB5t3"
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
