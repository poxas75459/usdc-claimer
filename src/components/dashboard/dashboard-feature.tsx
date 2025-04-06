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
    "3h3WodKRe2Kbzg5KSJRTgrSmgRxBxVRy2RC1aEfu5gmmANQeiLrGja1b4kcwBn5MG9V56Rhgyz8SnEcBnJkkixok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DmASvTPbxsfvhwJJ8EJJgMb4QFMocX8379NVVjDE3AZFjeUFAcCQYW4RSnyZdPDmRX2iMQqpWTR6syyEKPYPWns",
  "key1": "9Di6UiCH6o7KLSzy84EUDppuwZnuvmDa89dcu8U68YmfaE434Rmybn7joqD4iYY32USPAyPtmdJ8TiGxxPSLGzX",
  "key2": "tBxBGXxUUPLZ8qVGuZird5eSxh7jh6M2TS8wYm79moH9qEFtgPss92WEPSprqbRBBCRMumivg6j8Xqfa85pBnua",
  "key3": "iQwQ6g726E4b3wHNx3aXdzL4xoznRCrwunF4sXyhvsuU9tYnZwZazTfQxpBPsQy5TjA4yNbBvWHr3hgsy66YSx8",
  "key4": "2oudDyMW9aVegrmUmmiw9DBBfqzLc7vkiuwuY7wFt3YCKh1FZxajQES4cnnwtjdqpxUMaMeTG5empLj6Dr4G3EnT",
  "key5": "5u4f5Z6SAD6dvojFECAhXsjwRM3eKLiyCFZnn2EPRDTDvFu7Nzc38ukphS6mncbrrJBZW244PkHedTfdHFFkTrws",
  "key6": "2SAHCyq9YihkJgUYDxigNPhqwnnvdFcu63qTsD9981Z4chPXxGhSSsyxACoXmerAKpZZNRVNrwQHpEAr9d36tfVc",
  "key7": "5kcrN3pthepU25vSDxMqutfArkBm6Za6JwbuiwKme6gVbkxEcvgE4vc3U4zKEK5GyHhoeE4LprCu8jtMxKtCUg5b",
  "key8": "5cKFsyTHbVQefJx8NHobWM77FamrKSKofVnmGxP2ndWtRg4mvZsKAcfn14xkaVKZJ1X56nqQciPgqHpgUSeLJ1B1",
  "key9": "2Kh4pfA6kiPnDMUaXJRGs26oHEtUxtv6NZQ27AGm6HYUeQpKCteoQk3w7Rx2LaZCBXfxMTVj5sDVKsNW9NNn5kjr",
  "key10": "oPx5EUZW7J34NCYqjwzcc2EzUTRMzwbGPfeELnd9m7ZguL8T9cb3De9tNTayQ9oHA1yYXpPrDs3kgjXSYStUsoh",
  "key11": "5sQG8iDqHVEQVpZznudnSizw3AiSigvdhfp56yVjEgAnnqWLoTUECnMRNLa9gVDiCC9jDwpuNEkrurb6BqmDZMu6",
  "key12": "dY91Vx8SmJ4fHDiMxcbhPtQWmihmwhYSuE4rRQNH18mCBr3VtAikgwvC9zDyLQJ9YGPJTtyHDjYvzhdXmArTxCH",
  "key13": "z9R8dNCkfPTm8Aq5DKt6jM71ZtuoWeRrVx9B9HWxnkqeQgfGP2k7hThikQjH9siWBK24kyvfrJCfx3NcFMEBSU1",
  "key14": "5vqKbQRRJ9UrbU5W7G3JN5YqYohstHKJ8Bm9aEq2kW7oKzgQXzoTDaW7eMUA5ZKgNJBBNgW2ySPK36AHV2TX8tP6",
  "key15": "tuUDLAPU9ZzxZ61GJejkyBg1rvNFKT2r5hgheHFGMegW9Qk8qP8445BMwmH5tDj7abkHu8KwhkL6wCHXSAtzF3j",
  "key16": "56TRk63mAttw8RWY1c5Cv54qcZHDbC7uqv658yoQqqq7q9669awp2UG3KtpTr133HAv8TKhVKkkwc5aPQNxaSHTn",
  "key17": "4c6BveayWbQDP2JAEiYtM8axoDzsfZKQzn34DX9rCx5rZRBq2VAWaoVTvyQBdFYwpepiepvFxCtpCRfCSEUAZpeF",
  "key18": "4PeQnnrqp9vy8uT9moLZhxrXYHAyd3iCFWhZshN8iwsvFyB5SePrmq6nEJufdogeTK2gJ37SZFnNLjNbBwEL6EoA",
  "key19": "2eqFGHxFmb43aafNE8f4znwVzB8wBpfipUgn44MgU9Eye35R5oDEs8sqsM4StFj9uim5RMv5WhySQ91BJcQREQ9g",
  "key20": "35tCmPDdS1uHHf4AAJ1N95c2bGKLXiiMPwyfPpMyreqwnELuAhFyEPhmLRq4gYmD2J6Codeygh7wXaPVv4nJUE8o",
  "key21": "4FnJfGQkNgrch1HWVJ1goKxUszy2Ti7CHZWHRpCTEFC7yiKJcYRL6dih9yXM5tiZfMU7GcLzZsJ2rHZNjUgxWkVc",
  "key22": "4jLJi1JTJCwdwVnbJLidJcSLXmLZRrE7MXG9pNRp73id95Q8EivBCLWEDhgzMKB1LFS4yjUNcsJEnBSX5tiCdhQK",
  "key23": "3RsUSp6mASqegohcbtbBBMpgBFyEcrRFHQgC4ZCJ9YTtWqqxZNhhT8EcF7mKVsTBupjSac62WuutgpUA3obJU7Uh",
  "key24": "3rYAAFhXQ9CRMJdYT9BkeQWte9sxy8XsiMSBUGjkv5wPBdwFyfCf1nDrHxDcdgoUP4YtGPYovUCsqRUBpE2VkM1z",
  "key25": "p7DBqWUqGM4tdT2PPhLuk9GBwMoyGGbDTpsGE57Tix1iF5MxwQhqSh332r7AFcMam6GWawj54fe9jBfmyfasx3a",
  "key26": "2KreH5d8SZ1LNJKbyhaTJmatUY2eF9JKLNtz6ARkJNEL2NgnFXQvtnfZ7BRWKaUg7UHC9RayNMcSQmAdnyDgdNP5",
  "key27": "TjVZNq1Gsw45uNN23AnB8zZV8CK6rCxACFvyGEFRhr7LFHVPUXbpKCTFN2jAUf5hejiAidrZ8ezXf9f8B5xYxaq",
  "key28": "44FL1eY8CPrH3VprBLCZHSkE55LgWU4bEBDUeTDt8FdnUZUm1XXn5TjfaAckJ49BV7wevstfw7Yo3tWabbrGXoV1",
  "key29": "2ZQnSfEP9D1HAHV6irP4ngVnJ3siQqzQqnPCscu21Lt8adqC4qbDdQNNjiEWdPmP6Y8jTsiyT8uKVLy6RvgsKwC3",
  "key30": "38dHCWTB2GbnTCDGNLrVVMzmX6HqQXLXPDxfkYpjZfuBNE8BmpgxMw6d6JSh5W8Xm1HN1H5TpWz5h7WuagMsbGng",
  "key31": "54wbXByTBZVbW4VVBAiuBL7J6bv7iqyHxHQc1aFgGaWz22ddZPhZ2KTWvkbXzGSLM41qSieo91LnojamabkP3pP9",
  "key32": "4SwUWggvCUopHU56cccn9Jvn38EiJwiW4SBKLnTXZv33jwgnTD5exzuWsXur7Fjhv9c25BZ9Wr3GC2zrpvjHrfrQ",
  "key33": "XEkrHHTntixuH3MtwFmJFgRti6tdk6ynoHuThSRNLJFeuogFaYHn1sbKgVYqx1Qqxg7t5fazFRas1rwvZdRQqqN",
  "key34": "5qYW29h6dBa5u7tpHZ6Qc2n3cR8ukNxyEJusxgwixEh8QTPmsGxbV8xNYMPKoTJv96RUofycugEwEZ36Vc3pEYLo",
  "key35": "282dVpivHk7KUcCQmv2e1TKLDj2UYZCvUzfMiBGod85jxw2xXvhqMVvKsSJxYpLoDNF9LXVJE54yJBHeFJEvuC9v",
  "key36": "eFxdh4WGYCTHonSjqb81ZDBHuLwp1kDRUME9oKFyZnLphvynyFtBroi49WPMbAN56ce3j7rG19oZCdtKgdC57Gg",
  "key37": "4ssUX3eKhCXbPvY9FV94wiGb59NFMYENbiKgPq3yKEhs2WXfGBHsMPMZ8aPTuq52Hg49MohptZqp1eptnE4HPe7U",
  "key38": "2uteRbiQXNj9Q5Re2HsKzgi2zGMYWmYeM1MU75tsKYyYAg7JoFFEh1115v3NTM7TuEq3jjUDssBNK5B1xKH4Ze7U",
  "key39": "kJaQMvjS6RfKWfKqwx9n57pq1e9QQ4QNR7RfXzCAki2n5Vjx8AuRRqihkdVP1ZmSsPsGZauzPAVSu6W7ZgnRQQd",
  "key40": "4NcrM9M4oSxtZXxw2CwnyfmtVSM1qyTtFvR3Do6J5P9kfovBKN3cuAsChUvqMYhtGVw4L1b38wK6A2ypoeS6qVJt",
  "key41": "2XgPoR2g5q61xHPtx2Bq41Chzkn4rBCYzTseAnVo25Hekg23EoEZLNUpnAkjWtM8HAenxKrrjcRh5AEtnowa5MiU",
  "key42": "2TdgFtsNy6djEJqNybJrpTC1Qhn6Ky9GrPz7i6Rsk83G3KW9XT8fdmeXuhCRm6frcgZZS4gd9hpUPeJx3LgS3Bdt",
  "key43": "GS8AXoWcX7KZ5QtWUu1EG3rS6kaduHMKre23mR5C6Sb8uVBLF67Sk27W5yAYFYmgxjUXEcYNqgaaJ7pLZZv5Ay2"
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
