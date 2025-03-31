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
    "4yrYGcKVCXqfAHZCw8o8Zd8xDALnPeaLTNb1TqbKTAfjGekuoeWWG4XrSxswpQeg6N8KyQ4gk7NcfB8VWabwNoho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JXnUNWSDFubKe5GM5z1pBN1tgjrLaLRDov5CeKdJ2M186WH3z4dFUaiT1vYSxw2GNuXQJGSnFzXTyWCEmCfG7aR",
  "key1": "hb9QCNuwJuryTWGsXxRx3yMQTaPdFD1TrwrytmNYjNvCrxW4BHvZHZgsdNWsiXU38Jud9VurRC5yeCTMuZRdT9k",
  "key2": "2GshZu5BR54dUT86xb8fEUS4RgqxQdfwZ9bCqRQ5nAArYMekASKqEiEgVeFeFW7DwCFEe43wD1sQD7sQ6RcE9ekt",
  "key3": "3wYa3UxVCCF4ZUsBvfmqVRkyq6wzGB5Piie9DbXy8MHWeiKtSf2LixucX2yGEEha97G2BqFQTZzd45cmH9bzzJTc",
  "key4": "4mAD8VDkwe21XJXfNk9WmNZripSRb2k2pGuVTq2iH4dJ68rRd9Y2fRmYZkz1c1jky3dPoTGD5RheVu6Mnc56kb7P",
  "key5": "2wMtXr4dNHJVvjb5puXy1bJFx7pVAzge8PzdA8am1qaBdFQKPAmZdPNjndExP3RatnAFjq9D2DBfuZMv7erovcnT",
  "key6": "42VT4eWzWvNGeGdzTv9Up67dNLLNJ6zyyH8p9x7mx5ZYDt6TefPMGJXJPFTyWYsjYHLhSfNTgXrAGqydsu2b2Cqg",
  "key7": "2yPTfqQrgHDXLrxfJGaSzsdGhAADGdkGTxuRpRvuWujF8xEz6pMsuD8sn9PoSqF2VQHmVFDbnqRHFKzBuRRaGBMM",
  "key8": "5y1yT9yTZyywmwddDG1Ceskjc4VkKVTpRpNHhqxyRSw4tSNpxNfFzHC2Qz4sU1JMtTHd5ANZqerheVGSfHFffz5N",
  "key9": "w6WNYi3raf95ieqyqvfuqP1UhgNeZatQt2po4ggc4p7YbifhGoznTwAsDeU4HPjfTZsdNCbWdApQnRa11Y6tLaS",
  "key10": "58UhDFQDaTaasyZiTGrv5axSUxpd2cYPifcP3j8QfxNycUQnuUgHwrQY3HyrzTET6gkSZPGgKMChUJczG9AS7LnP",
  "key11": "5Dc38WXd7aRr8gSsjbyhcnL1mQjbD82uDw5G7ddrM8Pc2JcZAG8bHkM5sLmKfCGYEp4PLkaGC2QKU2KUGhHmyciF",
  "key12": "5STziMgYqf5yukswdwhjj5czG1g3naQBsWTBgg3zPhSBk5LHN6F9DmnCF3oGvWh1sEeFDdvHDGVGpqD15FeRiXoA",
  "key13": "4Wxx3oCsu1WvUJPG5owYLym11DQSnbgz4S5fXQGzSzk1e52urEN2fy5QWnvMSC98NkjZwZsmYWSw7XNkWEQi2nM2",
  "key14": "tkuGcBotWhqw5bkFevRXEm4WKMSQJqduxHerPQFqBKZWszFyBMwtMRsMaXyLSYTZDtU6EsMHmAK2yjw1ii3iDcR",
  "key15": "5wxNySunw6dU9HkBu1cvTvZTfTLmZbgeFjnJuraUNNd1zK7oKigPff3kANmnauNTSCwxp1JeEKyvEY3CAxHV2BpZ",
  "key16": "29fdi8dDWtBVq1YqHBYaa9bkUuDkqiB95SVrHkMQu3yeQhcioMpEyhe8yTAVkR1U4sDMQR646BNHoJJGj4qBx44F",
  "key17": "3QFRoN6LCnfgx8CCR4jgsNCPEb2bXu67nknUbHY8xnifeRRjSbYDSpehfWL6wG3ZuY6ZctboskoNpbzf8co7MiRr",
  "key18": "4zKswnYbHiPwbQa5mvT3LgKSCxLALRoC6qwBuDCE8Dv9utAPaSTMoBWJuE8a655gVn3jXpHfvAFm3Ge7CSUFgmLY",
  "key19": "iWeYBKtnvc8YC6uNxszcpENhK7pCUznatrTsNbqgJvVRTSJd8FJe4T8LibK6KGhocghvoLBTUQYw8fAcVBk24sT",
  "key20": "5VFadYQV55DauAeHi1WfnerRzkS34VFyEYJET3iLQYQVfV4CsY3dWdh5xcE4jvdgBmyGDR1jdjJTzDkFtpWf8rP7",
  "key21": "5FL65XHoyDu5pYZKuDPFFLxFbCn7DEGryof5tyhYwVmo2ULgnVxTGcxMaDSBBX2btZ9UFYRTKSZkZd7UDLx75zDc",
  "key22": "3shQpya91CU3arCxfLDpwjQ9XrD5zMgSBYEQJsVSSfVMmRrWAdWnoxsoFbtB1VLeDZgf4y5njdQf6Eq7ReQJnmts",
  "key23": "2d7nJvQvpCKJaHgn3jMV6rerZqjGjnm9hJBBsjZ7NqC5FsXvFDVvnqSom9itjShRPt8VTHSqjgHHZH2imFj55s3W",
  "key24": "2r6J2epT3LATqgNGer2gFJPLbUzEmKDrLQqD88d9xgnDfi22WEjChkZ5CBkLWRFHLNbKTJD8hgLEoxstdzXCTJHE",
  "key25": "gEgPvcqcS3TxqMMaW92aAiU46DXbFieEYigp7jPZKHhfkErsnJv3CtrAxgbSQ2UsgqzQmLndEm6HZqNinsREFk1",
  "key26": "4Xqxar4YLpVQGJhcTuG6nQmuT2UM3pQfB7T1Q3Je6FxyS5fwaMWa87byvaTziJ1DX3R6bE7XZCcpmztu5DkZpG2m",
  "key27": "3fQzuaL1ej2JPVYrZpfNVhNjha4kMtb6LQ1b9gKBaUv32MTwHXZYoiDnfdTJLaBBNd192U3ZGhiPs8JKNxjnirka",
  "key28": "5RHmcYuxA2XxdxKLBBDxKKVLqRyiaTErXXDuvz1FvuXZxbsyhBwTGXsSEd5CBikGvoQ83iEvVNgLjYxv8d3hF4ca",
  "key29": "2VBmskx1aFWA7QphU9F85rtKSuzuhU2DV5kbGBJqTXRFgWLvy69fJWsFdC7zbDh1dRwrgWhC3dyhqhb4zGTMuPb",
  "key30": "2TvY2VHqH67XXwjTDRZYqX7FFmDVUx6NA56sC2RNr762G4ywZCy5mmpcnu6uXtxiGRScq6XuSJQJPeSpXTTis73J",
  "key31": "4acqXb43nbaMB6xaGcvtwVZi7nBmgEfeB3FerNEx4wGPHQBovS7DCHCddviHnQHuqaNS8JVdi3x7YHvCLbkQo219",
  "key32": "ehpLMEvrHBNahw58AnykyH9kyzwfG6pPTfGEhJnr5rY8ugmayvQQRRpxAJHontgt2siiREpsXsNgieAqezcyE2g",
  "key33": "43RHu2rYW6cXwuMsUvSrh7UKbDFr2jUe4WCTtpoq1PsUoWenRPGdW11dq8x3NHfFazz8dZK4A9U8os5KhvzZkvu2",
  "key34": "3yaW7hPMZpQyK6gzFb6oFkd1NY3YNtrDM3dzU2GXx9w1CxG3XUiHhQbbB6KNrSxEugot7CsieXa2V4LkMCm3dMKw",
  "key35": "5HDUzxuM2J4RLEhEgT7Dqss1kexNhZeL9WShzKREdpe9QXTue7qdsyEJkfdN4wJEuCR6xTRHdTjCek4qihib2z64",
  "key36": "5b9nRJFEhtL2A5YmVwejjQHbRXfzxUTxGeoHCTR4Fp44VYzWU7wkJnWxR7Q9ZQ4866Fpg7r5gqBHiQbwvqBvEXMn",
  "key37": "4G74JFgwoDTQnEGQ1Sp84YyjEj8RYUfDY2iUdNLfUJzJJpVubz2wfpzTfuvP91T8kGkJJpemCqE95qce7mw4rMFA",
  "key38": "YysYCGfJVfoGDSpdXq4NFqDP67wn4Cw6bz2XeDLeuxQspE7LgR2hX6dHKdBHE3GPSujh8r4ANhU5s8i5a8YGUew",
  "key39": "3UqVoGY5JZxWDG429ht4rQeAwnTzPvjNZLWjRfiToPrX54JxeV3vQPX68ownrqknSmRtBNvLbHpNUFCqEDjPmVdV",
  "key40": "2HAhS1keUmSGFNQ54a5b3mtNjdTrNvtPhijKDdQZZ7nF5VGWTWFmDpyFa9F8rchAJD3crJfd99qsNx8qPrVD7tEq",
  "key41": "mJpdpkeHC6ct1wFBLykPkjHsELiGy4Bq1nVQKTBMwBdD5NYmrysoCNbSZVsqoneALJGAETt3EdF6rZuf6mEo8q4",
  "key42": "4RZjWCzY5CjSfyLPgrgtW91PitH596zNMnwjA443H44qPLWzijhFKSgXzmvXAyT2cggWCeb1sVnjx2Jfd7uKFGyk",
  "key43": "3uZtAujbLa7BLxUrx5K9PzJBjGAJ56EMQ5ACY796vGx1Fc6QAs1H285HqDhU6LVagZUs3KfikqdDPckkxmhHyGQi",
  "key44": "2SRGzysvcwsH7FzGbXqZUfChdi16CYJNBwaKU3JAVBkAsYE4kXQ34D6WFwW1zEgs8voeiD5pZMtitJjkQVgmc5UU",
  "key45": "4KFQoXqAq7vGTBKmsWrcVRQ57HkBjGRfp5AoVLnU9QfjM3rR1MgnzJWUz3N3sdNNz7kABfXxx29ybTVyqCZ8M1Vc",
  "key46": "n2jhfTNUGnUZMf9vG36dU5WHqVwPUqnf5QzZqUoUYV9CPpuPTycHy8juYZGZD2gtD4TMcaF2GNZAwj1fm93qzCM",
  "key47": "2cmiXNA3wKAhVww6ZLhHL1NU4ezfov8fqBk8Ndzm3uiBUUwJbyjefEs7yev4q1zePK1ZYVDH7sHRycFg4Yn7JnsH"
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
