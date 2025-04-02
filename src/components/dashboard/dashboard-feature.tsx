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
    "3PM2CZQ63GwTn3XU5XpEcZeHfRUw7Kx49LaSAmPiHLzK3YMQUANeowzWRQzEtUcdhvRXVS5RXsSfpZcCnw6661tH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ak6NPicApXhpNd4nejBk1B8sTqLcjZnuDS4659XgHV9CyaMmudirBhaKKtyNA7tjudbeVwpeJZbNVqvSNE2fh7C",
  "key1": "XWBCgWrvk4irkTUzeznHzBq3q8JhkKq7nUwN7uRBRPydxZ9iqGHok7QtJGHFmR9FuLKE5b4ZnseT7iHPGYsmsZB",
  "key2": "4cyHgfnfZaVonh9UA8DwGa9hPzxPxZ26eNXUEhSdWuRLeeMaWFiHMSM7YW4qUZ7WbYynmFCpVJXapnNUcAcFTfU4",
  "key3": "4zDetXmJcDgHv3tLeCwXCsN1boe42q2qBkWbKZeG6DYjkRQjg259NJPDUCc4k3ed3VQ1UWLuvwbJhdBfF8ftcw2j",
  "key4": "ngF7G7ouuZvqwMNSxuggSoY8XKEx9dNcWPY2LamrAoqG1exDwKxDZYrWNoPe8YXWSaNuWTzBk8NQCJfm41t2XnD",
  "key5": "4RR9TbNwP6cZekaHz27k1zFj28HRqDH2cbYmyNm8B4mj6m7hDNRFzREr48gTtfC9z289PmH84xywmiDtiKeUWqed",
  "key6": "5xskooEGDUsvk6zLMpZPVTE5ZHaoNqDmhxm8eoEBjkEab7zpD9pc97ejRbeEpJFGhjJpVMB5YE5fu5PkdT3uD9UQ",
  "key7": "3to4niVkZEqEsDfrUvEGS6EqqzxjmEibv7Uqj4GfRJj3DVfeT7hHkJ8FCZa7CQiJDsPg7kbsGk5oYqJWNyMVTzhL",
  "key8": "VV2XfMeP8Vzp8JTBjGvCpjbjc6yUVPhisyETiEiA9hB64eKUjqGXdyYcYZ6WZgACk48YXXzmSq5ERf3bY2VX3up",
  "key9": "2JzqFxtEDQgMLb5ZKwhoFZYwbSfQZYxr1acGvyZrKDMShYSkkcB4ebyVWE81YNRDAwzGVRnunvVQuQbopbtV9nKE",
  "key10": "42ebEiefjEdCXvDSX14aUjtMx5q8fMRgoXi1ZQAqVdqYkobvxiqQ4nXzWbT8Dcsx5zNM1E2MSZT6gDUkbgqb2fsS",
  "key11": "apvEWLMEmMAqLMuouenvoBWz4RfgEUdAKJ7VUPZVLNuE6RqjSN7jrxzS6SKCN6J3fEAaxDrKW55Vh7yP1qWU52o",
  "key12": "GVn7uhipEq6H7JCzcKd3BzoQgZSoUkqCYuAjL62v7vWUWrbuY3a78ocy1qfoqN2DxzSkAUQG544pHuvAL3hVtvH",
  "key13": "4UgGE1YudBzKxoBFw1srnYEsKC9pCbKAQG6hQ95HwA1cqWuo8emPcXxtpgbZfqtNTWNsZh3NJcT4s7eSPp9bSoU9",
  "key14": "4oua5sRMAhKGHCBrFrsZK1tstpDZdH8bxbGRE3B9wszrAirGXL9GoHeVHwD7FThEoM4ouN15osbtYV9LjAB4CA2S",
  "key15": "5gdbptA3b9DMPbXwvY2cjeUiGVH2DGpz1UnqD2J515R3vXEyY8QqE2Vg563hBx8JjuLVth76B358Wmfcfzmumaxb",
  "key16": "3jruRLrxHtwBS7FeLmoWFLSEDzgxmoWtLrREmNUm2R82HrPTtmzGMzb1raDfjLSwXgihcDAWWtjpGVJrPp1ViQPr",
  "key17": "w9ZbcbbVhbqUStbpgKnK4FdBu2NjFzjcUncop5EtFqGgy8FWNFPVJ3pHgK4voMzG8Vr3PxYy6u3nLLnexWefTzS",
  "key18": "cHBoaMaQxZbJQVwQFK2C7bbK6aza8ijF2VaesQWiEGmz1aeAQEjpNa2MY1HDigoY469UvE1c75Jqah23n7CqNHM",
  "key19": "4HLRDTKu4VoS4WBAeFNjmgu8fVzoxnDyw6iWBrZY5XbCRo6HqDPNYSHTER38hyptar2PT3kTPhLNdc2V1xFXj2ML",
  "key20": "RN939w7VKsWss5C53SyjVdN3T18L9EJPMiaZGmiJeYDDYHgRtRD2ADLgUmW8NEQ3bX5JKKmEPanxDDJ1FgACE6S",
  "key21": "5DcggJcp9ggQCUgXpGwms5gQ1XAJHBfpUwaw6WKeb5La9nN9KwDukYzoVNFSGivUDk95w9Mj5de4XoJ6D4eCaz7u",
  "key22": "2nDQGEeiQeZEpaSk6KF9d6zSoHp2QwU9Xi6QZqbEDWzWNGaUvS5B4sHcH8i3q5HAMW7RoJmUDEDEWJxtKYxnS1k6",
  "key23": "5NxcxMh1ciSdq661y1F1akuBLMMZ39HybwTsboJswf9bV9tbP9Q9aRsPmTX68sUnZdbbeGaMWtSnbEJiztqNuVFJ",
  "key24": "VDCFSJ7aT1XnbvWNov3Z8fx3TSC8LNrizj1qJAagT7xhhgRVJzbrcw6vKfMQKwe6fd3yePuUs5KWHZrmXjj9u4T",
  "key25": "2MvPpUSfE46Ci3DRpxXiwUhstQ6CSTDCUrYy7tpYJcnyh8QGNJou5B4Ygjf3B1ssQaPeTQkXguUnndTbaPnntf4Z",
  "key26": "3Dfm9jC55AfUio4TU7ugm3fTDhBcpFmgshjCJF2rhTZ8yYr1y2haYS6jeUgdoLT5w3SnhUzVKCDW84ba7koHj7oM",
  "key27": "zpM3F1xvFPXSneA3ZVELvyTuFSquEzDBo1Kgum4CgmktH83KovPNbd2sHzXzuzKJhdzVT1oE3Tdvnc43WfNRXD1",
  "key28": "3E7bSNgx5AhiYLzcJH6w4t1WRkViCDCboQ2fxJydv3QvzHz9WMvvM7bpn26SnCpeeGQs2kTuDskJLc448qaeiskk",
  "key29": "52ZzT4tp5BCBxxH4fiApLwkCTaAbj2UK5wdK4eHgotSfGGWV7oLQHNTx2zbysXNVnssdSMjP34GxjrzEVhLYksnA",
  "key30": "4XDy5RN356KMmh3xFgB1obtKQYFwj9wLkXaohbQa9XVLUjcmAKH9CmTkUn24ipLVH9NT6BiuypUjUfPyUvXuqRbb",
  "key31": "2ZF1J2TvsREQmi5fd7q9eoJxvSCMESbPiUe1X3seok5nx9DrWELkBRgR15GxbuszTaH6y516wbeLFLYQbgevHXcq",
  "key32": "5sJoqCqsP7SEYdKpWGd3RNcSjHpu1UPKwmJroDZpPjsFV7Ln9BwJAFE67P9j7rceeqyjWymyUAYMDRpQf8kzd3ZJ",
  "key33": "NSeP5CyM3H8D3K9tScE2UGFQ7PcuDgdNDAh4nFY92BAVZMTB1QYJBZjKYVYqjzAmNLPmmM1CuC5NKMMDH8qr91M",
  "key34": "5ZGMpHbtqZYWcAfVayeMjB5aLtrAAFocVthAhHqV46bLeewtbKE3ANLa4PX8hGYtQXnYZo3KrME1e2BcvTrtNjem",
  "key35": "4tD6k2mvZg7CxFiqWzebztaf9TNDuxMU5urmzkGTV3cZWcr79G84LJdK6mR8a9BGXcn2KvRGgFTfzMZ3bUL5ErKF",
  "key36": "37DS323nx2ehJ1VGbbhMTucpw58jjuhYxudRzQDC3MuuqLjYT2EHuSZz8xPAa6fWosDssG8Hu9QEtnu1mmt8UMjZ",
  "key37": "3twoyPetfvqWpGT3towtBDg7GP4xGAsuBb1C9jL616tJ7EeFEjdgabLXMDToWqiiHo5PFb68776kWGurrDvTFJja",
  "key38": "3jrj8MwTarm83ntUUJYLG24AvxMNTjc4v6hHHP9NuQ6fzkVUqPNF8SPiBpHXSuMqbAgvbYdnySZ9RMpjbTtY49tx",
  "key39": "4wzJiCe4vB23AX4N8vqHVYHrNgfzXwCK65UMjiTMxiptCyQwrmqGyeBMFnmj6PiFehn5yGojzxoBCk88YU8ox8kV",
  "key40": "5nUVRirFG96QwwEwTtAhs6qb4MqfkZ8yZ5Rimzng8pZSxNLWAUo3UMiyuYmYrgHzBxAN9aF46bKMrpH8Y1D6swhq",
  "key41": "2jd3f11mUrkGWJJ47ZURUtYDTKKnRMmjc1dnzeUuWnBAc4gWmThrvAYSkHrp8VWPBqs5JR5qGhHho8zoooX1Q2ba",
  "key42": "5teNiMwMnu1vuYb7TDN6atFgygmNFubeGWtLEWncNYL2W1ZcSztSNWE8GwULWR8M172T1DeveuVFoXdUBkar1Ygb",
  "key43": "3qLMATYMYvL1p5J6Ao4A1XHfFGBSZQqt4xPXf83dAhsSMDZR6JKpvZ5pXBYfQgsB6G53upgaWuKp8oz28W2nHL57",
  "key44": "4t54de7EcfXqsnMhXQzZAVVWafEoHK4xUyJQB8o6R68AZBcEE8mYjLkoU8z4QrMgDaqwJWTqp8zafjzNzbrHvh3n"
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
