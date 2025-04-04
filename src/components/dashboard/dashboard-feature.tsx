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
    "2iXfurf5zUhwKdcV7VLQyeAEKWpaGUR9MqyrQL4seeFjaHqrdXoRKLL2PUTtPMwxshEpVcY6mh62uMHwfdYFiPzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nf9yUf2vUBzXDVCAXzbLAAd4hEoLTSNFcN6roGe2PBmAR8iUagKjfN5LfUtr4gMYfuTSFP1LpREunrXjiRYAJ61",
  "key1": "aLNcy4LH82cPRi78aH7abZo71Qit2NEAG1KUTPWHRLzmHdCYbwxT9c8NEKhDueEiYB2z3YyJkkTxH3F3CC9WJYM",
  "key2": "3ravGc7c3rh6mGnSEsFQqXrtPuZD5bLu2YepLSGyovBdhUjtw8uY1wd7KtKyjMuLksFRUm6F83PsBp6L9EFLJQvp",
  "key3": "2RzGDVBeE839TARxeZQgscnR8KZFFA8TWFhf1D8ARS8iB6geZFqPMrfyhbHbeL2oGb5XBqWsB145gmCwMMVEGdCe",
  "key4": "4bUdQSE3WUgyGtTX4HZN2Zxr87B2vC7N6demtMckziXERxGTdv3t4pFua5CeQ2NfgR67iV4FHtHw7y2ycYLBQahL",
  "key5": "3fLSAJCKpd3RDgZo1RVSxs9JnYwKxbyynMZL2k22AVdJoTjaWkVnZAHLkB9xKL93uebDvg9Sx1zCkTDrRbTCNcYT",
  "key6": "51VHoAmRbSXh6ngy5G7vmvPPkWdVT4c49uEsucBEPC87ib7d1n2wWihxhh94bW6RnLCcrvn3CF4a7hyS8JBXXCAm",
  "key7": "4SS6QytYsQeQwMhNqQ2yx4MGXrG2b6gPdX1zv8241jTgNMJ94xNHPxWRviKtTeRcrCaR4sciMPmkGFvQy9vTK4hY",
  "key8": "24t7e4BYSMKPMd1eS3ot7yhTuMEkfjZ4TuYYrNR4WFd4t2R4MKQVdcyb5ZrVwYkhmHaNyUVDEkid3PSBaZ7ptPnS",
  "key9": "5qCnqiDbLWNFfDfBzD664pL9gmLipA7PFUT2rVZekkJaoowncM3JYE4zJpRroAg8JuhwKKi9uwnf3m1P9MFUkEWV",
  "key10": "5bBcFWPWokdb3L8bQMDgqneeqHyKbDPM846p7H9DhCCWdsPsGi1BGEBRE7mva5mdyVZHsrXSumHzM5ydTC7CE751",
  "key11": "2K1FHqoMGpJJEFFL8nGGautZb8iKkrAgg2NrrbxVpsht3f6KzuJ7kq6m24XSuy9VeZXmu6E9azJs8WrJMiarNv33",
  "key12": "3qG3XKGgETAygrhupd9gaCAdNHpztMkKMQ7UeDa6iYUywiymhr9CAP1chm3Pqxrg95NQ2PPWyv3vaeprZ5r7jQS9",
  "key13": "2xLMzZchgt9XqJxTZfXLdiHZLEaq4cRhFKL1CWXnafJ7KL93E5rUB8yyt9UQVCD8imsW4NUnChTQ1gKoPv4WoGFJ",
  "key14": "ZHj8JjQJ7DmgLb5LSDfnReyS8EZxK9VXfZLuawnU3V5G8SR292To7Q5Jopk78Mtff8LwcdaorxksfhdVkmvQmYj",
  "key15": "4wBGgsiG8wABsecLrLkGSki7hqMoexbaysaNq81Bb3qC8H1SD38Y9MhAeB8REfg4bqRemxMssUoUeJXGXx78Hu59",
  "key16": "5cfhJDu5NrfEKovedr6H7aky2Vb1i1RvgjowR1ZTqSL5efJEaFTibVxQzcjMrDmbpNXUS3UL13zpXsDmRFHC1grq",
  "key17": "2h4rDB6Pdat6Fcd2VhzsPquCPHpLRh4JANWbKaKo3WbdGpAscx6yLACECnEghHCWGZwLKwZd4PdNbTuqus6PCMrX",
  "key18": "2ygM4eCzMDCCq7fQQHgK45eUQfN2LJYExaNRj7ggMpERx2Bvz2RJjhxeEMcWvN2pnNF1GwLJ3RLETioQz3RjgkSj",
  "key19": "2Txz9hXaRNLyKXZytPrtoY2HavmsVh12ZmaaDUMa8wEDtQ6rjBPoWmDMFV6DAijSgMEmHE81VghPoCZeZpgRKHG2",
  "key20": "4D1vzQkje1dFwAPYVxyeMQZVPsdRtgGWUgYTNatY59XyssCCMyRFifw7UmCW7UgAcrSHXatDHqPpTsko1xi8x6GS",
  "key21": "4MmG4PY8vpS9BhHvM6dGqkCwxu5Nh7hca7FwLJkVcipZVwnnzd4ecpou8NQeNum3a6UfCmcuNUG4xQ6i837Jqv34",
  "key22": "5mmToqYFYPZdVsiZTXo5TpSqhtz2bCftXYajkhfNvJRxfDFVeu4g1UCB8gPXVLqt6p5UqzuPVCHdHTG5odCS5xBv",
  "key23": "5FMqJ6CMbf2moePASiB91qYdrZZq3PQnwPuvT9cuiE6DEAfWm1fCRWw8fQrmSrFTY4QCcWF6f5rHDRbP9ic9XuKd",
  "key24": "474zGuADKkCYQw3z9KbVQXh15fPRx2XmjTvM7xNTFXzBu3uM6dTU54YAXMjtHo4qZT6P4RfqBQjfdSWTJrD8q86B",
  "key25": "4nJzLiwdM8dVH9WxrZfo2c4HL3qufuTwmUHmyCHD4WQhrDhH5oDzteV8VqqQ4NnjUpx946kwr4nTrixKSUV7BPuh",
  "key26": "3CUaJeb5TevMN1bCpCT28YfMXG5ZQmpZyxq38UGA6a2ocQw6BuMdtoWedeR7UR5Mz4a1VZUFPH6GhFQGSiByWGV5",
  "key27": "7TDJ7V4rsSTWGUgDdndC24HMSg5Uc1N26yDFxELPSnAypxa1AmJp9576USYbfs2PSMYGN4qDnNDbXJUUQyDkcNM",
  "key28": "4EKNh2R1HCenNmqpWtszEdHm7JhzmfDw4xmQaoVQpPd2K86NoHZh3ws7Q4xiCEZjNPAzLstEFxT5ZbshUsqWyYiX",
  "key29": "5U5FppVLwdSyh6M6ntSKUHAtXGzRpZdEpwhY7Y4bNhh8sypKGZ9bRm6hMQfFFJgRQD4stLYtp53wFuTRDc67Nxx4",
  "key30": "BtXvCujrm67qYqr6uggsX1CwcF7K41zq3ARitu9uGyzhJrtUSx7gvL8vqybiD8NrKziTrGWBtvo3Cc8gm8GZQ76",
  "key31": "2bigph4FdzXersyWTqHnYzs71i2fUCURR2MfpHLGV8nHywneeV3P23qkJvzXwxAJu2cLkrpq2M2zD7JuTAkR5xqC",
  "key32": "4yMrZsAdAhd3Dg4pwZwtKWwPycwf59s1dZnjeiC7es1VZySjSu7czRSErTvEHgMV7YuHGFF6DUxz8xut4NefFLMQ",
  "key33": "XGpHw44cmry5wrLLE8JU9EockAZ4zJjj1ZJXsF4KhPYuBXnk2a3wAHL8tun3fCtQo8iFt51xresrb9jmhCvPXSC",
  "key34": "49z5H435F2UnsUUSqsyeQsHQG94vazF5LbckKce5LXChGB6Tw6eN88DxpBhcQtvJrGGbv6n1fJMdmYFjSr3inLjp",
  "key35": "3JAiG8HU4JVyEczEF7Yf3mUoGY3ncouMtjevsX64DMjsRasJSzBAbXS3WR7j9upH2AVHb8STPV7nFCTbRSVToFw4",
  "key36": "556Eu4UKthh8AQwVfeAdXJnSSEtYweMo27znmX4wfRBefdtvE4BoUiLdQPv62m3JfV5jA6MLrzn4YEqnpxdW5vy7",
  "key37": "5HjGL9uDpcvKBZA17VjRFvEYA3pZuz5aW2HveBtEePf5HgJLpSCL4vCTbywEXQ3gUbN4vyTD76vFmdxiphNrWrfF",
  "key38": "3xgHj1PRABv6hbd4sEechehA7oTP9L8a7NNAGv4EoFhb8kkB82ePsTGne9obntaPneAJ4RhnvQHMAWdq416ZPXgg"
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
