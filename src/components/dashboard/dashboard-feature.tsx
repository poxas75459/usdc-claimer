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
    "3yca2D3t9E9tkrGdND8jWRkaPsgbHz87pezovBF4ttsuZJ2H5WySc3js2k8467n9J3nbwdzgU5e5hiwSKFtzNZjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GrWKid6x1dd3Tv4hk8syhYbLCHJ7ednngv8eMje8Yyr2v33FzrWnZMJm9s2Zccj7qhrdBS3e39Q7Zrhvq7Evd6k",
  "key1": "3ArqUictbhXrXsRz9LWXVRg9wtTSneFRk8UNif6XKvDTFfM36u312PJTcy1m4r6Yj1sDzCHbpxnKaEaMdXsWzxVV",
  "key2": "3VbAAH1RU2STQL4cx2ry6AhFw2NwXBsy6yEJxDuqH7VLtJ4WaS7toTaLeH46EL67b7UXUTT8suRAGTB86RDY7qEa",
  "key3": "2c4ixTMn6VG6bNRXU3Nr7Bj8ttwKywZRyrVExzPD6J58Wi5ZY3y3PDLZDL7zDxTsiFucnYEtVtq7aLQm8JHiwii4",
  "key4": "f4ef8VS9E7v4M1xkXS8hXXW9FGSdJjvu39ZZkkQtKdEE2GDJHGkU9z948TTCaHN6N8KwSKyMxtqMnTJeRE6iLRH",
  "key5": "3kndpAofMvZherzuDhP6G6kPkuHYA9VXvZ845Rpx2QqXVrhY471ECyjzJFkDppjNVwS8XBeTuHLkDFYL7PYpDTBr",
  "key6": "4Nr8NZry2LZVYpJik9MxfS1mcAFpNqMCfh9YrmW8NhuwJfavxcGbF2EUiQz7AvxYzYcr93ZnSWZi2X6dx4JVftzm",
  "key7": "22XHfbWvehNPD6sGuEYZTh74R2ruSJB1qk3NxdAQGSFuBoaKuEpuRzCCHg93tVTPeYrTtMGNE2dxnSkj2kQkDBJk",
  "key8": "2iuifLt85bS6eb9H6yMgYwJReMAoXqDM7QkXzCZiVk4MoTmNVP4vFQz2cgAdTiTvimSHvnL1haY5jTeWCMFJc1AA",
  "key9": "4id6VqAgspXmqJNNgn2jNeQRGffaoLhihfQhH3Mn6TebNEG3mZphm9TAGwgCTXWy46otD2hPqLvwJy494jm6tuFj",
  "key10": "5r8iSvt7CAou2mwgv5hQp8QHSyjKim3nQ1zCicJyAJyxszMVj9Sgt9xaTTvvzVs9vjFnf12SCR9d8JMm5tYwnQMn",
  "key11": "b9wuBnr7Xde2oTeADBJq1z3wJpEDjuHhfQk8ofW3HdDfgwMdPtZCy4MdrzS3eCmrkSQfZok8nW9SrjhHDetcRvC",
  "key12": "3YZqmEpGRy7m9kiF8zQsdca3HcvNCqnpK997Xw8LkXoFPi9nYQU1WYWLj5AbBG4yrsza9NGswtMcUXhvcUNX3ysm",
  "key13": "i1qNbCJuG61twhCoiCsMhvhnPe7aU4VkWb3TzKhF3vXJ3papcNYDVFjTPjFji4SAzyiNLo6gMKKFRGir9V61hFV",
  "key14": "28cTsLs1RZsCbbWFJ4QxMbHUS19ocDfxrDawzVjGCAQgszfkYVZUbvp3zS3D3fKqWwD1zDjsgYnZSZaeu3kfAxde",
  "key15": "49aMzsiumXhxrjkMrohZUpPRmZTYRFhwpYE1SH5v64cXJVHtMnVXs9zEnxcE4vqH3N87XhPagtJYmNw9wDYHxMUd",
  "key16": "35xkz2qhRfuTiWQidmG4stooZJZYSD9xtaW7KHbFZYBkoJZ8XJQdZQ3j85DZpV8572wzYJASZppi9k32kj379nbd",
  "key17": "MKjpeNQmYXvBpw8wMCNeHPqsHwrGAZJesZxEqPSJZJppEwvvxQjH4eQWEPTWB1VjhxTztRHv2m2uGPh14nncixW",
  "key18": "3eLTFj1E7wauiWB4NRRXATQZKcCuv26SMZMDH1aaHNL1sJ8WZFAMRrLwukSerQTFwDtfDejgecaS4pkw9GM4eaai",
  "key19": "2W1GN3mmjZR1HGL4ysekiBuG9TXnzWzi3HpWvQeXhsYgMYXacRFEVA4HKyF6GaVENSJrUvrw3E6q86JqxiiyAdSU",
  "key20": "33Hh3WMiR5A8XFyZX2Kw75D7Jqkn4JTwFYnANUJhMM8rAG8SKjJGhjcZ5eNZwHX3D8nfNditZ9adfwtVXBNXojuP",
  "key21": "5pJBztAnHsE9sL9hBnGtzKNnLyKdMu6iRJfNwuL5tFyMsmz76Njsq8WMfXX5JaxpSVX5eom6hNQ54LRnMSqT7b2d",
  "key22": "3fHpabQYGuzcAziviZj6T78qzgXBRCfGr8xMMGrsBgeD9BRvcDUf7XJ3VZ64QJ1uoRFE4aKNqKYmTzB3yFqxroJ3",
  "key23": "4be6N5YVx5UTRSC1XBtQdj7E6dEX5Xk3ZX7vWCKsp47ZLKANXcfKpmYzEyiqjY837k2xVQG6WLdjS7Z3cYDZF296",
  "key24": "Aqj6ZNLuMiVbhUeWCvgdd3fVVHXCVkzitDxzYeDN3qQT4xNgNkDMdHWSSfdgHm25GXWXncR7ZAGJgmZ9K9A7ngG",
  "key25": "61nKNTnYvQh3qCYdyYE6ZaWxmtJxAZDYKpB31cytp1JSNVXFXcHLQeEhc36XomBYFfDkyfn6nUEhSbPwxTB4KFvv",
  "key26": "5rX9gP8SqsmoHeva7MVSiEqVfkWE8wcEM7PxGq2fLodiFrK8uUob9KYPBonHktDzHNrqg1Whys1rfTRujEuH9KoH"
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
