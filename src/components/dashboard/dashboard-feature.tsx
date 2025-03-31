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
    "2tytziYeWf9P8FPdYFQm3q4WTiMJDeGAkYz8NvJsBFad4Tdhw8uP5sqPrmxzYAPTTTfrMwh6a87k3J568eAfNBvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tv9EzmzsBfh4FEhSreVRacqeHQfWoJATBAX5koDYKBb5R2mo4oi4raWExvZ1bmYmK13SQkvDBNS8sSCX6giANqU",
  "key1": "fBV1irUybSkeSnmwsG7tTH3ttjbpENWJbRrFgxJquaTYT1WzusAhyRgdJq4yKmS8xz9vVws7UmmzTdSN7SQHaxc",
  "key2": "ELm3bS4oZr2n9ZoHqgiN9qr6ZrjqdGXHtWixofA7RxHt29jc7dTfWHBSwzyfdBwiHigih1ABKnge1ZCzE4a35Sq",
  "key3": "5BPREXF5Er5CxMMV8roPMTAA86GTCWnVSfKcme26yvf8wqjn76Pgm9PWUzkBxhrEtsRdcRT4rfmhLjKHugnuCeun",
  "key4": "5b9VhmMkFSnaVQG5n97EAq6dauZigA4vPZncSSkRPWN24agQ4uqNWQ94qnSCADkuqaYRyEMB14nhctAw6iVysoEH",
  "key5": "bkMqq1gKaoFA6vjo4Y3r7TpBYFL9vfQXGpCUcjPDFEzs6UCF2AnQDxdpDJk4dSNNpAWNH8hbvna1A8DRTUvCPuG",
  "key6": "5nMfcmzoekYNHAqMYMevSyUygmHTKyTN1nAxc6oUYL4acn58nM5pnTM6Dhd5CVCYiodf5aMZu8mQBgYfsjrMsDu3",
  "key7": "2WVgqJbrLYMYYh7Sn8USTHj5kghoCamhsEZnfuDSMCzQxEPpgYZiuT4DPcuULTo5p5eAzdixXjRTMQVjBAooKoEx",
  "key8": "pn83E1YFDmh4ZJBPsmHw3SBLqvyPrU4gFrmwfxKi6Ga7tz9rBkjHY8CXu95Fp6fbH2kr5XSnCW9y4rswbDK39YB",
  "key9": "MNrLb6j2DEgZvFMJpqTLjQhe2bv4KS6wWCZsvv9k6dS4xpBkhnzTxCsLjxdvCKA9gQeLNdVVBxqgB7PGboaeyxo",
  "key10": "3h14WigL6gC1b77izmUkLjTFADHEGWtY2JyN8qGQPnyT8c6KznC3PdzVnkarsazEW8vDG5ps3Gre2Rzw7TFCUHC8",
  "key11": "5DfXwvH3crm46kGRJqd5TkxL28aQexnkhoT6czL7ahYGjfhk7n1vpbJ9phWvQYUdH437U2MARosQbCYwK2xX1rPA",
  "key12": "45mgpcHUVRrQGyDPv3nETh8C3YTyUftrc6GgmCnWcL7sauyfLyNB9jDzBYPAJFAYCvbfyzU9FLJVRUJen7uAaF25",
  "key13": "e65c3poUy9H8aDoaet1HeLNANCdjjTYwjHxo4tjr5ZkLmXnt9EcMtxMyeqw54Eyrgi27z2NdjFGSb8vWHsXhybp",
  "key14": "4vWJX2SypGiQRiYWSTjKLj2PfQjbJEJP46wxqtyMMzhB7W8ToHYhn24ZATmHX1u9HR5HVmCUr48wmKTcxzDmY8C6",
  "key15": "3VZd65CNmDwcsEqYJwvdiC8zcvNCEM5tNckAfQ6Ub2DKjtHLQbYNi6qadtLwcY7CBVnT5yJGHK4sAvZQvAUxeq5M",
  "key16": "LiqsQ8j6HxqjiAm6EyfqWn1JVhvoKeXx4sKWUctM5SHaxfHoLyR2GH4rbdd36yPBgPyTcqXhBhw67GvRnV6euC6",
  "key17": "65mPR7RsMo4iFxgm7PpZJnzvoiqK6Gbef4QSYg8AwDNdTR2gNbYHdCfjsGXZxXGmfWSYnw3BByNkJY89WG9wfVcm",
  "key18": "Q1wJBjEMMc3MJw3zgcE8XD13diBjUSet7ANBWSobrsGAFkAKshXcjFQvEr1pRwGc2HjpJFUcPNuRDEGZ3C5S5iw",
  "key19": "3913fugSDAovETM7Yi5kP6Ze3sK4BqgZgZ2vvCxWqxTK4PRwUtNEfgkbFQAhStTMx4qPGaPpTY7FyqPdzKBckVnz",
  "key20": "4TR2QxR3ndFWtccoyKCEoJFjN7EsPE6dVRoNvfWhaZrwdUnsQh7uzMZhTSfJY6dM69psabEqvRXE8eTPsGjt62pg",
  "key21": "Cb9hkdquEw264tyCAEte8Xi8azaQuodasRDbCYpBaA6ZGDp5XDwtdeRiHPc45y4DJUuB2VaawARqXd385pr2c9y",
  "key22": "61mMY4JtahHfKeMy4HR9Go9rz3ynBADo4Q46CtuukQsAw3MLkAeoXuQsgogxGALmfxt1BUvLocRwqGuoB6zqcfWL",
  "key23": "4YYnTrdAJ8JZZAZSK9BvkvqS7STDPffSA52Y6MB5eBrw8XZnL8gSzs6nHbu8XjCvb7yqAUqXfA64M8A3SVvXHehQ",
  "key24": "3H8UD6zPQLSQdbXjvLfFaUTEh98MznxWwuSmJKqPav2f6MNu2Nkk7UYRmkwURDTvRUq5HQpRLKsDo2QyXk9SVBRk",
  "key25": "4QkCfLZwWZb2D28jQM9kY721nLATpCGn2iLz5mL3TFvsmBizHV7SgSV9Zzop5w12hiiyqGAJdS8gzgyXmnuYby1J",
  "key26": "2Vvepd693d8hZxWxU4U3EczgRWJv9fnqsfSWb2f1AiYEyiwozfSdUp4EEGu9s7PfFCR9rRodbNCU5bCaNVfN7dSY",
  "key27": "2P3QCcKgSPVvNvqP8CGYk4NbzAUV3SkKDcCrvTkB4gK6ktWmn3YP9QSmb5auDNwNrFUz2SXbL63p7xggPzGiT3V7",
  "key28": "2rowCjDsVh1rGhPCTJY8L8xn4vjfPfKh3XzTEqnPvjSAaJ1iSNek73iN9L75WYFsXQkdCJuTuCAapVtAv1GJtHgx",
  "key29": "39qJQnLCJgtLh7zJGDPAKGihg9tJea9FJ2JhggDbDQYPxjo68WFRdCyjhudCYnYFTNE2Wv81dhUpJkZja1b4husV",
  "key30": "2xBA6vne6XpLTcARTRuzwtcVq2CnvkFpRGvxo4U2qyJ4F4FVs8omhQ1patp1rwg8mQd3ijcpzHm86DcpeBJHELc",
  "key31": "47FcMqc8LEcpALe33kghUVTv7UB7cF6gb7TKRP4HZUFzqWTygXTkFuTULx8Q697wNajKLiVV4ybLRBjEkWVWmJHk",
  "key32": "2j6aNuFhn67LnjAnBiLmf6VzAoQfF2uGjWfLhRv2QymUWzfGjeZ5UNzCZV88AztnNat9Vj6G6FxE4CGQoB1ovN4F",
  "key33": "3WnJRcTAnBDK7QK5vQwizpKGuXrHbCxiqPgFzDfBv9HxByZ4zUA2mm3LBggTJw87zaTm7XpYxL5t6hBzQ5u8trw1",
  "key34": "GpR8FCkBH7EBhhq9BotQRVw5jSprqXpvHhsprMDKJ1LD4Pv8kLwmCRDucEpEAiBqaDWFEsfDZCdVVVHXboQ8SFU",
  "key35": "5pYY3UXUspbF5jhjtw8ZUpaJV7Jmw6pFtdXK5EMRvgP1Js9PCGANu5EBwZ1JYhqVMsDE4ADQpqW86xPaJEyz7HWs",
  "key36": "3gmXuJUkJX23j86pakhs2RQ2Ss6E6M887pcZwRRpe2KxeUdjVuDcWx96pEDR1SvHqYWYWEvWtDAxYSh66bUkpMuc",
  "key37": "5GDE8CACc56Qrn5vyN3EDGVCfhNNE9SuqQD6JpczFxP98RMnS77zSE2EZFbWborNDjsr4KwHehQwUsXdNEYRnzgg",
  "key38": "2F3H8XzeCvCr39YaCqXtsCVigQW7kyNerj9J4bhWU9FQPJRazHXF8vBgxaTSPAfYQriyYhCTNMbDwovTFYJDN2kq"
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
