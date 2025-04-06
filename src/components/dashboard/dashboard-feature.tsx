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
    "4akx4KSvCgZVeUnQFaMviL5eb65ukRP7McftzFdES6kaqb5hjJh9cnH47EbTZBt8JDkhS7oL6fS8iUd78LmRucnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bwagG4zNbKk3JhmjstyWUJDiePwHN928jQWZbqoAQU1KxQjPAz6oDuECKVuXDqN9jfVFRX4xCpADHRCpaU4pDAW",
  "key1": "2fvZb4cFn7hseCjgKMHjJh3ZWpqeteYUVWg876mAJH5kwBA9LuqFSybtmCKbvtyM25gRZH2Ku4m4EQYs72N27APF",
  "key2": "5stvmUKVWy3qCwroQeu3F3j6eWu53V91wibeVWkAqAaEmmzDKavhotMbaJuFutYMyv5B5ZTB9KdjC6pz3C3TrPWi",
  "key3": "4EhCWsHtM9e8wLBSt6dArY3w1RXNLZYA1jM96XfsLmFDeDQMtAngYYKZXiZtSrBNRPugoyEcBpRXepeTFSJDaRrP",
  "key4": "4YrKnTCbusUFWoumvDtTwRBo6TWoMMe5yppw4BG61d2eWGG52ESHoZWsh8kJVNGHaGBfYhytjSnLG8c1AprN6HAi",
  "key5": "2fhbquHsfbqBhrqxjZArg7rVzSWV48MNRzMQNeJUFabTpJB3ZeC3ivVgkJvazV7MtByS6SP6hVn7EahqPPNbny1n",
  "key6": "5QfGsskzSxCHHKaxEYnMrsA5jziTaAWsebJVB7bDN9CnzGDp2w1dDnMQuAEREvyGBXLR4oSvecqjpv2XzNw6BPQP",
  "key7": "3ZJjxa778tLE7LjV3A5EC4XJEYAiwdsaSsNuqRKLQrRQ3tTGFh81aHj9yq94AroqPajh5jAYVm2iKPRyCZMYiyqE",
  "key8": "2RVL7b73z1FhUSr8wj9ZSXShNCTD4MzJCyYYYpLw7UMvjpy4hR8UvX5osPwUeg1nz5BpWBJjvcb1TjrV86uSY8Xe",
  "key9": "5A8stit6EPvxP5GPRHFe7em51c32odqjUFrq3a9frAxaKVnhUKXDnDCHjQxrFoX4Po1b4awLDNEoSL6MKwM3jSks",
  "key10": "5iVyfaftQmsM18RAu4tYm2HWmU7WCq2gqaFXWvTBtuUHMzVUniP7me4YAS1dKbEDprePMjzSPtTqViRicjd6XH5H",
  "key11": "2Vkaf4WAZZTj8Ufs8b4NrLSYB3BiX9zxbnv6Pi9UrWbmyakPfrsbWfRrHdaCU7nwk8vHJkTfLpAZRCyM5e62o9Vi",
  "key12": "5fQamLG8AHqmnYZJika6RmW2LbQbK96ZkZwZrxucLEsR3Dqz5zLdDqtsGaca8q3gMuy1KrGcerJgk2tsZXGLbrt7",
  "key13": "3gBAkhFdza8oL71Au9cjmAopF8JgRnuCw8RrCC1sNv5CmueMyyM8tDRccXvrPqhANWEQiMB35JfpezjGvUxNy4Em",
  "key14": "3JN5m1SQkRFhLNHwjVAYjhHbivcnGnasxvUxiSRFzRaMF47DR3QwTttDsxbSM4GaPGTVXs3K4AozR6JnJnHa3WC7",
  "key15": "39gRs6gwmAkmcZkKqQgvw4nbUFeC4ds4D4GsNCpTJekgFVvHphMxrtsNDfy1pkaqQyFGNfGPdqYuPP289CXraq2y",
  "key16": "4rgpP54CZTEv1bMnYnvnvrbXdccF7kDXZ9Kwb84KDgoLvcaVPSQCrJD4Ud6BJrPP59ak6fZWSVDNQM7gjj9HLgrr",
  "key17": "2mgkLonHKrau4Je337mTooFzUK5WAtdimDCSNJYsCnr1gEAitXSA841xX9uZp9BQSrWdEXPqvokWAjvUBnCgCmne",
  "key18": "Sm2GfJLHsQD4BWqhqmunCGdbPHA5yXk2kEhvmGe7B15V8VppGJvoyfz3TrBYxhvcAsNTFQx6zdKxUMXiQ3h2QBp",
  "key19": "4FLV6sUyaYDxvkHnSCeXVBEC2NozTSvWC6Ju7MwutDcreNjV9hYzXZAzdjf1QcG4Bz3YD7fqZ2WaV2qVp4T7eLWu",
  "key20": "2NZ6t6ABhM28fVubz21cdRBRsu4GAZ82tw5VGJ2vef6WoAyUoSMnj1wPwNRMzVhDMQnwiuJdmKSjBBVQ5aE294N5",
  "key21": "4g8u8YhC397b1c7wzv9eKtFtg9MRa4CsPHGfi9AcvUsBwVQz4Vn5VrJyjRDhyW8WhinEJd4RKyWQTHZo2Lajhs4Z",
  "key22": "nsE1YA7TWvkUTqsqcknKXNtr7SnxprVkmZjCAPEG7U9htuXy5ziKN4Qbn5D9P22PD87d34i6yg6NtAPmsa8ken3",
  "key23": "MPcDRnmqYtfUtK24gFxA26XMmvnkJUhTuDeonkTcdxowaGTn3pk7thfBAq6i8syWndxrofG9QtBNj1TzqEwKmaA",
  "key24": "51z5yDRc2ifTyYNKWgU8jG7VNq4BJPkwmyzdDx73c117S1YoJD2sovoYpB4xBjphyiDmfDtmX4Q36x52q7tkgpuY",
  "key25": "jWBW46pAy9kmw8F5CTaGkhHz8xGGajsfGL1Zgv3TSxBTyBSrvAR4q3XAQxVErAVqARwcQ1ZmxnLAmEgodYawd74",
  "key26": "611K3tZ4Ch5XQpqE9wDK6CF56JQV7r2ucbTxEDnW7npxCoHPrLHpwmvur1aDFdxhavZJznSGppDoauSJ7phbjtBP",
  "key27": "4p9387CXWRpSmARRbvhuKKYGEKRhR6TViDNL915KyhM6h8SkVC2V8s2HqFEZHLMZVsR5hY2ERsiMv3pZD6d5XJAU",
  "key28": "5gqXcc176JycQcYABL94gmkEQRAP8oETQuxyCe49mzwYxmYTShbRA6vTwzGg6yWZoDJahZgJCbgWx2EG5TgxYS1q",
  "key29": "4G2bGgXg8rjSLBj3do587VuhdH4svjqTyeMJUKPLy9ZM7BVqajGfNmcq8c9b97K7wSTuiVCWzVsiYVmpTCw1CxXU",
  "key30": "grRS2TjS4MLcaPKw5YFsDkKpjBHH7p7dcacHgMzZingWZhWRBKNMJRSX9rzC3wHkvJyCaKNkmEHQrBW2iwvTkmw",
  "key31": "2md5aBps6fxwA5FQseg3jwXLqb7dXNbJJtV6yvhxcRK5tmXSrpPZXcsm7kfftZrHXffDxkuuSgUTFZw5ukSF4JZ2",
  "key32": "3C5ztsSoRiE8ie3BXDG3ff7rsih8Cp1zXpr6rgwB2DjSrvpKqwM45yKbtngs21Q83tg91LJjbnBydKZEeA42Wg9F",
  "key33": "5rdAdF7yPnPwrWRVWaoQNW91PXNbp9QfGAgTjbHczZB9XpNpSYTuBydUFaagVa6tTExZAbkfuPMJ2DPnjLvAfhXC",
  "key34": "3HCzcVnsBZyyS5YcNc22Lix4xaaGPQwscJLQ2Q1Umuj9NDteTcNihzxd8z8efXxaFjZzzfGNvG4jVZuNpCydgxQM",
  "key35": "5QqSd1Mrip2RmzMCxCtXibtx2UTiz7NzE5nMzRvREe9tbuZRtv4eEn3BSJeHE8kjkCrjdrQAmsq3yXaK6eAL9kBt",
  "key36": "CpHqD75oo6Vo8btDoF5FAJxKMt2xCHr9vZd5jB6pXmQVtLj6jh76HUi4YzsKc5NM5XqLxr7kBb6JYECzJcjMKAg",
  "key37": "3int38KBQkgmUhRJFLh3F7AwymspyLGqfSi87pfafbmx4bNjsB6Uso4sFE6yfNxzZyp2QopDUcKhxMc2Zoxa8mn3",
  "key38": "3FvrDeGGsbUQ4CrkKZ9fsjqmg2D6XpFQWScS6Lf5YjVQhoJThzn1R2rGQgHVsoKb31m2ezJ7iaqKopi5DFabSzW1",
  "key39": "4umcdzBpooQHmsuWZr1a1YgzHBpAuPsD5fx4fNs4J48UBVWhTe5w42Sw4YR8ujyFDPt3YxCWFSAuh2pZ3YBFwiis",
  "key40": "3XCrrxeT8jFFx9R2ZcxpbUTbAVdJQtqoNs7t9y9HDKneeQcAhPPc1HQfpUupMNeovfvkYkf8zBJKQfjBGFXZTCqm",
  "key41": "4c98EFSz9EHXHd6v91nuwj69wqxVpmMTiFJKA5hS8EFqjQZoLdEE6yiL8y4PS6XXoJLbbQgQSuRiVhvjoFTwkNA5",
  "key42": "2vLSmotuKufVcBvCUuFx9mDGEYxc4zRSmR8h6HKdm91VNHksDT9LTX2ubyHfJptTth4kiEWCVqo9py3Q33on21oX",
  "key43": "5krChowZVW31vv2ZKQDTLMXXSsgVuygKM1RC6oLwyi5U6LxEonXb4WKxeLgkfM2PjU7FBRiXz4zZXv2t8qo2FdXf",
  "key44": "5epbZsFrZ4ZomFXp6GKbYaCNkkkLFmLp16Rf7W4zLdjhbKTdyuy6qGdg1BiByNj82AoNtRcnNhG9D5tLCxf2N4Wf",
  "key45": "hkDSGvsYcMYbH32JatShzwMz7CJEaednQTLWuCYHSj1GPYe4ta7uxEwQcmZiLSkqWG4TooBepkEKaLP4cngR67V",
  "key46": "CpkEoTNkgdom3HjDv1aexBJDgdDKFkci9hdYjdrrPygzGgda5eJbUMtdMyAUQv65bXSVu7rYpyve2PveMUbQ974"
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
