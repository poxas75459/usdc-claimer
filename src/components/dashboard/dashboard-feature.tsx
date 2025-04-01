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
    "2aSaNXPWQsVBFf7SfqC9pkQ2yCEqsrvpX6CiYgkrezZBjWG7i2MsfsiUgazyoNz4ySQA6PCr2xED6RdDtr2EQoez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65pR32oRFYm5LfVaf5RfHgKroDKudvSdEadfuoLoBWuYHAvHGucqdL5nbAwHZQzYhh7D2uD34Xtfg2zsGpWRhoYg",
  "key1": "4jpcytznerC1hBuPhP6Q4S1GMdaWRTXEFNkmYx52VhHLatQv6jTL7TwUHJq348CvuGNT3atp3FTftC6KaW8b5L9g",
  "key2": "qPBtVRkXj6xSCgGtUP4WVFytuUgLhH97Kta5cJa3Wo2tbLSAR4QQ9VNUXBjTgDp8BPYBFjhBhVAzpMg4k8dhUT8",
  "key3": "3n7JYkGj85jnRCVGeNWtcqUEWUEzrYeqpnxfkBr9Az71G9mGRVR7PFXCzz3ExmuZhToLQThAAkyvaNtAh1xG35m",
  "key4": "4kYgchfEz7R4sLBWvpX8nV5eHTor4SW1FYPfYraUJTueLRhBhukjHyFMkRE3kJYrSmUuznHKaUzmmhMu9C6W3gW9",
  "key5": "4dbB7N1ERoJSMXSqFfs7m5yeiom1qB8PJAPsvWV6UDrcfWptCz12AbJzd6Nn2KWZcGp8qck223S4hrArRTQhio2J",
  "key6": "25rznzKyi9nzoYUU4mm8sQWbag8XcDqrfzgWbVKWndDqNqXqp4hVTgyAgvKTjXfH64dU4wjzV9Wc5iDkJT1NA8sj",
  "key7": "NosJp25Qg8v7rURm6UVQY2xFbcus8KPh6zMDZHfycripwzBuecgv5bFwXrmL2sbcZDSj9zzVUEtNp3FsM3uWELH",
  "key8": "4AdMD1qD2YRtGW916uav2LFNsatvD2PHV3BN3wUMf9FP8hw7anJvptfsCTAPtABQtBGQcQLKUfFrfjWSkXQP1V9U",
  "key9": "jijskATHHdZmUkab15dGV3nzgXDK2U625TXcftv5td78wwiGtvG6HbW5fdRAEBpUf7KVAgdYW3NQfQkr2z92BbH",
  "key10": "5niE7nhws7YgiuS2kaYRJ7UaMuTcBdPFLMai1qKmpBn4TJjxa7VB9YxnGWxNfJ1uybLu28pbRPkMj2CS3vG3ugGx",
  "key11": "bJNsuRnDQ8umignKnNhXK4FDwLcER4sAU9av4ATbQG3y9EK2PFBqD1yEqyJKypTrS9WVoFW2uuxF4ueWPoYcrpa",
  "key12": "2k5bBSBSb4Tm7n5aXpdvQxQu31kcQyF4JiVCJREAQXJ96xbExDwv94XNSMwESVttzakoW1jzaCvHm4erijQHp4Ck",
  "key13": "5zNTGxoauJ8hG18eYMfXCDy3S8CdiUGuZBMmUFkwmGqTszW2X5d4Cq7q3Egd34FVAApuGetUTfqEd3kHktjaam1x",
  "key14": "4ncbHKQ3Sm5yVAXPrWCRRuMwZ9PtkPQLn8gm5epWFwUtTmhtr46oYnS74q2YMdcgfFs8dfoVygypD1WLsuap8xLP",
  "key15": "3w7yWf6NNdjdkMbo83udzgfurGifGBp15EYS12qcHy5BvwFBKxuwbaV4ukgyeuS57pFmQPXNTfMvZhnanyEbRjyu",
  "key16": "3R284DG4ZBU8LELkVaHVQFak8MbBSoV4xnz6JDhMF97RsBFGFZkvEcFSZU5whNct2QSHvLWR8iLrDbDpmCqd4QqS",
  "key17": "edE1QRxKNqZJ2285SVBGJTWDK5njmEaFLsyk4f9pYEcbQiJaFpwxpk6tGx1mKiKuwppJ98YR7FJ3aNwa6AzBry8",
  "key18": "2pqLbTrG6n1xro2hEMHZJPoksQJxxwJeHPQXwsn1rivZGCcXAnwAyxNmPygdayA8JZo9BcLvLALtA8qK4hbQc2GK",
  "key19": "3qpevCRjLngbnGwCZYqMX5gySunkVfxMWSnh41yiyGXbGD1FMBp1YTtodEwrsJ9juGfQwihCuhQZtD2jPVxBtSJg",
  "key20": "4PqWEoHb5f8yKV8kdFEX9izPuxSE8Hqqrxur3BTFEBrE3EXqBYokNa44LQgAdj6b3Ldn7ymX1En5gi2BUdnCvjyi",
  "key21": "3JvzXSNyBeUwmwAYwV8wfubWWximXZu1MimSMcfAcmapjhgCj7xFmEpMDCJDGLtpCxnXz9zquMWiNLx6E17uxqFc",
  "key22": "5822vF5FhUy1txUPquFMm1BnkEth8zhtgmB5PN8sPwLWWL7aseTPJfaQUFMq8hNqFHjm2qGhMaaq7dvvk4koHFfq",
  "key23": "4d2y6PaRCwc5KFoLsbUkcccKYQYhYtxnVq1iZHGn4cTbbrQ65toGmun1d61rWFUfbo5fbBUTfgQoJdzDj7vvPMjF",
  "key24": "4mMy2XrmLA9ZL4dyZGL3nJ1s6QKxBkKfBKEcNN5JeLBgJuwhSezaVfuPjc7pujQbDmeo9SiDMge2ySaXY7BPQoFT",
  "key25": "4qjqidsJKENtXd2zUpwM48KxdSJjr3PFQoPduJnb4dHa34udGP1b1gvzQCL9zbVs1Q42pUsJQ2p8q3sQDEStgUC7",
  "key26": "5Z1fV7h7QPaqajvyZ5AQ6xHMAWAV6zEUm2p2ycAY3gL9auXP6Kp1H6KK8DDJwM6s7fd5fUUpgvLzxj6YbcStHxSY",
  "key27": "62Vi2YtWQDAhL8EWtSi9P9iFBs8yUzwKp5P2sN4xVty8AcG8uAanbRHkJTxob3EwcaTDMsoUSJsnDYrQPL5fbAHD"
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
