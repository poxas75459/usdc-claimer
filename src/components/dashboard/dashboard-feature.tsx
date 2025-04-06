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
    "3PgjuP7kC89K9VkrNcd36EeGrBMofe8caLiHRC98r2DW2Gy7V1Sq7Nw5vEa655vt7c1x96wutKvSJsACvYzz1Lbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12S3JtEQSf8bWfqMppWd2VCc6bjbTZxShhzAnSSyBeX5VEjsV6Sk3ddUMBM3Un1Kj8u67UvX3eNcFbARbPty3uq",
  "key1": "2ewW5Q1WXG7eFoXX7Y6Tv7KDS9v7BEoi8emNKZ5qbehuhKAGEU3tmtUfurTNrVNjoXbGV9kdDtLQCbMtnRKk8fQn",
  "key2": "3YXxVGg79t5N4NBuodhRPcZUKRoJfsgcYfvkXotNZUBd1vQV1moSM8hrLCbVnHF1pNSuLK347PtzJT9qnQuWFEXh",
  "key3": "5HBvjWb2VRoYtxgkp9cJdCSUZrgMV6tgwwXQ1woKg3RizY7csTEpLj9RfZGDbNRJxvNQtwQthvdPoxbNdiUdGiad",
  "key4": "54dxdom7GRKjGi4QGVT1vMJusVyKqU6jNem1bNbeSgD3yd1J53M6HXw7JALmGuzZjSDzvX8nw1QxUGMAUMLFFKV4",
  "key5": "4AFWVAij4n4Y2BWnp55GTDvgC35s9bPZAykBM38Sy6Fx2oErLZYja8Gmv3snzXqbLzgDeRfanKrVWLCNNqwoPA6X",
  "key6": "4e343fCTDy6eDHZg9DqvutJvrHX5Qp1QxFcobZwU1uHso1tzphtoV75wpZZBqBJtgB2qhXm5JomEMTED94Vzv9rz",
  "key7": "4roaNeHSgLPd21iBrxF5LsMYGKyhNTuYwibWduUGwBLyfq5RNVECpjc3FSWKoypBqNpqv8cXi96KGice66UamjD5",
  "key8": "4y9ng1PAUoU85x4B32pFqkrKrg2F5ptP3qddyNSqBrjutGR2qxHNmyR9y5QoDvuGffAmqC716yJPvDmhKXsHTJk3",
  "key9": "2h1tACRT4Pw2vnA5FWFtiEJxdAnzofeUQiTahssDH8f4sPUjLUw2mKbTBwX9sKkpDsunDySe6vDgXk7fDABXPT8U",
  "key10": "3HAWmJpo3nLj6A3KJJTSPunLgZdoVZtSkXQ1eQvKjLbMPxUZg5iKw2sjvxCERqNAsKQJRhi4p6vqw8Wkm74STUHL",
  "key11": "4zLsFU2WT3X1Gs2ddNGffQkD9PnNbd39gHp1PS1gHgq2ZU3Xg2hGF3rVd16Ro55QhWDvvzDQv22p5gxHTSWDHyjQ",
  "key12": "2vmctFLBezF6WYrYyP7Xew3KmeYbCt213A49ZSBkqr9ZRrpb7qyvPr1jWVaygAE1VJWz3nKJQtz2yJojxK72HyyA",
  "key13": "3LjPqg4N1BomXs45N4UJyg9ufVYHD6wGjdpp7sz52KYdVNcZfL813ZzkT5iNN4i5qtsf7ocxcFsP3iCuWEPN35rF",
  "key14": "3xomBqZKPnCRbyzoDnv4AZ6GCVZ7aKkyAzgqJmgwJdGchADb1Pg9JgfP3eCWeaSbKShwaKKd66mw3KNndWh1M1i8",
  "key15": "DdTPj6uUp18AbBcTsWnnekMCtJJYBKB1xvMLn6gVHesvKopfrwazjQH8qo2r83n4o9kVG8WgUkBD6LqZGBuL5Cg",
  "key16": "4eRAHoRne3Ht2LXFqbHUuKT1KTk9XjLtyzEfVHawjus2KTvCU8JGDkhKyX5nBCT26tszb54yB5JKNgASrLnaNkQU",
  "key17": "4Xhz1dwWAFvmpYMFuGAUyzcmVczLmGtvMwL6jJHeqTemxXC3Kh47awHCFzEuKUeghb6HzcPotDBvoh37cub8Gy33",
  "key18": "2vGTR698CigDD1srQYY3GwjrtgH6jnEus6f7dQSFrHuiiWMA2tCe6SNLkSEYqH9et2qoAG7aEJUSxSaLQxZ2RVTn",
  "key19": "DAVVJXaT8aks8MmK6y3njbwdpTYbD1HKw7Jme1zaCaVGnY3jUbUwjtAR3ai4Rzdv8icex7sAdMjdkSNUwvzJnky",
  "key20": "3s5s8qwYPRtWNZjfZjTBfStuFijQLDx27vYKoE6L6U7wdBbvxL1ZkbBvrqicsvDktXY1XQCGAkaSPWjX8WSedUnL",
  "key21": "5mgnAswjcByeVZZpqjWzcQv5dparmXAceepZNH5uwAeuZCUhkZyss5VfJo6LWo7RGwQEahSrykWdWxELMQEcU9QK",
  "key22": "53USNzqTkMwUY6kuqoP7SHxdsgKXiCjDKjAuXVsEWvWvQptfJdrVde7gT9sRCBChUFeNnavNjUHdbcYFSnxa2YMP",
  "key23": "5SXvW1PeBnMgz862qZiV6G1cywvzL7ff78Va3oEaYUVzBxmfFNz82NDYCVeKoakJ9teqDbLJbVXWpKu8N14q8zXQ",
  "key24": "G4mr8gUtoZf8kejmursHqzZqMMTyQc2JEazpsqaZwFkC6aLzyHMhRMLqUzHfo8vykGdPV7KL8Ch2r1fypptXKdj",
  "key25": "22KPsScQyyEcAnEemt4NyXVwyfthRWcn7PjGxcPYyLDxRNFYzmMn8oQNZUDp9D1LERs8C4Fokuwy8MBkopyPMPKV",
  "key26": "4EGDqn6PSj7vs2q4ttVQpDYhAUMPHNRMogDeFyoRQ1yJfab8nhMumVGqMfRwfBVCBAh7H2vryse2XthcjVVnoMwt",
  "key27": "4NZMjcTF4jPaZax426wqZUvCZkZZTf4H6MnyKSkhZkdjhZ9qZcXCPTf9fR5NhMi2AcFhPUGDPZydn7otvMGax1nN",
  "key28": "2EftvU7pSuG6vckgjED8S9zLsVbdzcUt8o1zZXSvdBqYK1WWWuW1EgezKNBEWicpuJVHdy1Ju3yae33bhASz8Jcm",
  "key29": "3aMnr15wfRCBp7bLqaqRSYogRDZHqX5X8FxiccxrqpMfKWcqQZZkEBLyaRjV5Cy5fk315zy36Bs6ANNhGq5rHdHZ",
  "key30": "2EAtgRQvtRKtczXj6hSvGN6dbuCAy3gW2cxTqfdoN77Un6Lg2avFZL9Mxpm2kiXzphsZCpCdtjkqWnhyAZwgKJph",
  "key31": "4jTCcfq43xEPfNSoCtTradpYotxT1tH7bkJVJjPKCg7srSWAFJuFzUsNSSDAqzPug6NQtdExFPs8qb6PaMupuEWd",
  "key32": "5neWAvwNQNDbeD1FGmCJFtf5nM61TcjS5B2eENH1j7cHNoeqvySCArfrfKT27EU9CigA5Wxr3xKKHrGvQZSb6MeS",
  "key33": "3CjDkfp3yFfY4E6Ln8xKVzHLiDgNXcuA5MAXWeFDEg9mUw6Kb7CUjeZxxq6EZtS1Zp8v38XXR8t7Purc9TrpeVYL",
  "key34": "4aQ3Lb2sT4WxysqyETnMe9fH9C4cDpnPMYWSDgoJd76y9HRF7tuwqhBqGk5KfuvE18rTcLc1qEyujF7P5TQ3qjkH",
  "key35": "63PuhnbvKuR6kFijo4dHfNSN6j7JfMecyztogtYiB3VrwfhuxvprUV4hmV5MrRazPCUFPQRssNmjUoJfb6nox4Jh",
  "key36": "4naov2HR6nG9UkY8riSmhdKRJje4Z5eAWkNSqPH2irQ94mmi82nBFLcyNqjPDHw5S9bSKmn5J7cTCiVfXbaTTsPZ",
  "key37": "4HBZ5V8VnA4bGhXBRiSoB7pWSGBRFyMWBTpHjGJEjfR1nUyySn5sayTPcb9YsMx7wpifZrrwvarPeASmKgWtLx9d",
  "key38": "5RvHaPdvFUWnbuRp5Zdt5v6dNKjWBnp1sZfWunfdPdoWs9aTAknostqxUz2d3rwt2iWBUExBf1pzpgPWZnB6va9q",
  "key39": "3QSHStPJwDtnp4U1UYhMkRTvvKNGzGnUJ6dBNmZLRjUGfUBQ4LBafp2J58kEzjQTqFAwwEi7xXBVcuzJroACYdHq"
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
