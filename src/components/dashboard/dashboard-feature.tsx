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
    "4aG2df4BJdFHS4tSwxxY5qKPVAtGEFKZq6aPagd3hvuu5fvcfgcgEVPXwupwV6VMMx6ZM4fqAUPUyC1Bur1huzMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QCq2tQSJZTAf3fz9dnGH9iJbxJGHVXvLeyfbUNPHANyp5cjjHBoE9jJdV635vhGxkXwoZWHZKaos5CKG2nBNXLx",
  "key1": "5KH5He6J8FNw3kWkUsaMebTwkYKt5jt1Bw4anTmQbKtvB9FabVxgUM3Ci2NcguGjLwVhhJHXsp6S4vm4hvfp7EtF",
  "key2": "3GSqj6DvL43th9jNmhUci1BJJ7whCdiBreTz1oU4hwKeSRa7fjzCek3hutH4ebGs4erC4y8egdJqiguCBRCrF4qg",
  "key3": "2CjiuDusZzsWeSoE8KJko52nqVV52cd135a9wygNMTAWiDQRKAqy3jq7mFQeMVHsjeP2UfngCbmSkr66TXFdz24k",
  "key4": "4As6T79Vawp1YHXKNC6awyzSQUfUk7obdPHYHVc79AKu1sVRS1itPG6Lfo4Xr9YHEvddN9nGsUBkfWFCpgzaJAhZ",
  "key5": "xwwFbCKdX9XaVGzS952CFdAyUbJ31T9va4DHnWd21dTkkMq7YEY1eLipWkCfgWyNL1p82L64pDHK7XSM1cH4v64",
  "key6": "2K6czBh5WXDagpRn3nkbUeFtGFcnvYernZNc5dyUGdXuBHn7Riz1tBa5bSaJ7Hx3yAy3DY28SPjpNrkQ8nXzujNa",
  "key7": "66nqCfKRZRcKjj48QRXZxbTRef1dFhZwecj8cgrP4WmrdTgwZpNcLkEbqifbEwtM9edWLSrPKb8DcskGprt3icWP",
  "key8": "rbLVdSrhGHBabvjqhbN2isaW5xK4vTrvi9C1ks8i5U7HLax6KokL63XkhfJkXxfAPemxrzkx2jTuLHnUbm7myk5",
  "key9": "5R9vTceCt8HKaBX3PGNvG6FY79h4QJkshVzNY6wxGeJ1ZAMydEQXoWRxF3q5Uwtsdj9KFWYZzVALQBqoV7fkzEAe",
  "key10": "4hsPoAow1rvN3oKU4iZ3SJXQcKU6EByrWi7gCiXDkduKVXaN5TJmJVQNJPezZ94V6AqiYp8Bk4mwLZSMwZ5FQyY9",
  "key11": "486t3bcMkyJJmHF39Gyk5kRzJAaQXzhpwJz7TzEa615i3Mp9o7Xith4wbbqB5ah6kbXYDGfKpraVEWuegwgjbhkG",
  "key12": "48VoyZDcniyMvq5iXcJhqR7jjwkqDc543vvmdqpR9Fn11Y3Y32CNXSuyBDvZUFkDW28UK6xEkLz5yDYGAmnQ5ggc",
  "key13": "4CLiMYVffFXk4byVZJHhwPfbmsHWtEzizXvjvMYK8qZv5qbSChudVMvxAeG5oyrGVPRfiMFYvVHo8AwxMQ3ncrSg",
  "key14": "493M338Dpyxuuyjr1tZ4NhhKEVDUvh8k1m8qDV8MLy39dCrPVuC14wgbbEEzq3Z2gX5RFJ3YmCahba9gLZRJCXf",
  "key15": "4bM44YsjCQRZ5UeUM9NXw6RJ3BEnsgttyKoEHzJwGE4mPozcbBoiU5uJM1SfNvfLdjj1FRrVPW3BuKSZv1WmGseG",
  "key16": "3ows55JHjetkdRBHcQSP7WTtBXSboyge2FHd9bRfoGGNMDWLVCXHVnJdhL42dtHFxApRSytLixmeEoLPjZFkeSs7",
  "key17": "5wzeWrZ4aKjkq8HztdBhmb879oc7S7qTHzdJJbJemEFbZomHJLYrvcLvciVcv5mBhtacXxtuZ7PrB2QNxPAn6s4C",
  "key18": "29DvSCWvU6wkMoSBuDvSQqx4kbtRzbNoy4DQ5sxVirxF4y6GPGfzuAaYRYzmrn1avn5anPMG7EmhkhiVD5HJnjmm",
  "key19": "3i4JCZNkkj9v5SbWADVXbXMS8ap63gj2JaFvc1mQwDayvPvCiANBAiX4WVfgAS4kogZymKiTMBonRELCsSv9frWx",
  "key20": "2pEqWQD2yvMjpfewQtzZCVXCf5LwvpntLL58MhUa53NNPaYedkXgjVgkU4RRQkg1eoT1urMN8jzRhsEVEstp6d3J",
  "key21": "5cVBVWt4UaV63jf26eaKpLgW22ZwAymSe8jjAmEB3iEUZTC15FFAdJvcnE6FYrL89k7xRUt4CqbtTE4Vi4u9CHqV",
  "key22": "3hAhg8dfk7mjna1vY1c37qLU7v58Nze7xDKjJHV5KPx8GcWDGhFjKjGmY8MeBbzK3x5SsYjj49jT3PhWH3dwSuCK",
  "key23": "UcWE41Hpc4h9qVupQy8XXbujpPPYvS8iT6EwEkzHto8bD9UNSwCdFo9oGHCTRqf83obi5aNnyCM9iB8LjZh3vur",
  "key24": "2uASh5ayhDTFn9Re8bFWfMy4tRvaGNmycXeBREugNQryVaMbM6RKi48U27pqgyqMVQXQnRMdmdzxfRi3HJFe4wYf",
  "key25": "2aNBNtJxqptnCV8xHA6sDJLnLDachcryQSjsZtEm6Bo7HmkC8LPTx1ZsU1CMyZ18FnfqwfPM3o96MP5TwDnbcLZy",
  "key26": "47o1ZASut4UfXVrYuJcQw5eEM4GtfpfuBpWSRYSTW7NYkcqw3VNfqeVnQGxWWfx4N2NUe8336HLE1KLsb71Xhw6P",
  "key27": "3RjLizQbjeiGSjWdhwvPDodfskG3j3VzccpqD5PoMoP8YYwEP5ciJ77NavT2LgmbxpbHzkYZR8iHVb3DgumDpPeC",
  "key28": "5Uxo2rxofmgWq8APwPnrqtDsseUP13vKEAYqTs9D7iudBcmikyA9UMLEPntU6dtEahszm9arigsomkHDVUPBKT3E",
  "key29": "5S27bqxubNZM3U6AA8TsfnptLTr4LFKEzZDmh1BNYTU7xmmmsZYVvMTX7LrZrTpiwS8pwCb9WxCT7eqXRPJ1PQUn",
  "key30": "4aejJc2fYYZ2EsLKDZVoj5P9ddpQYcim1cgNX6t3JndCYB1nNEwbwVw5goH7Wodn8pxTd54e8qcde2Q1hztrwgeG"
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
