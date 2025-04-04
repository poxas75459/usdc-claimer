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
    "2kvy2GW6vxwKPWU94UBBos3KC4cJoH3F62xRi2gphMqDZhrK44VnqDEB776VwWw9eeuY8sgwCwAQ4iSSMawZsyds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nEBNA1LdAG8qHeyrPnKKSkMBMzLXMs9F4Y2jMa4DS2fK82dkeFAn4dSakQ7zVzufSDZj8zWiMTQJpx4kV9TfwCR",
  "key1": "2drK9MeixCdwuGzS8cuFfmHS6eeLKKvn1L6bGywLKwmU2vWReZTcMpcq6DmXxy8LLNGhu4UZr3GvKcLwctpKBzF9",
  "key2": "4Lt1R2vz53hfuKDLXg1CvZ2sShak1KcqLWGYEyX8drFABEWUJ8M53pJ9vz5epe5VwHq3gfZ46HrdGFbsDrmb6W3A",
  "key3": "57Xy2yDR3ZpFxsHYjepsWFRFqGPAtDz2q6AGZDjnUA6dfhSTTrbNc3jB7DpMLJdsCyypnCkhC69DJtjm13yA5zkH",
  "key4": "2r6s6paQ24me9TisDLwMoAuitMxLMz1bvWfrLTr1YjbQnoqycgfncNWSkAvsm6iDjxYJUgFPPx1WXbxdynesRdER",
  "key5": "3T9a7xPG7Vy2sRVgYth5eqccLnv2mYJeTopfRoQJRmRjvqJCvv2cE4bA7FKimr5xC3nEoK4J121bi136cVeaVnPY",
  "key6": "2enC2x2ivoutjkcmhJHebPPJX4g3d1aZfSYGcJCadMs3Km8NqQyr9qeiWbi91AKavtBHF4i5Ze2HNm8328T931wb",
  "key7": "26yHmVTtLte3LvowkGXVJ68KkooBju71g3hxmoRZbEjQPGM9upWNakipiUbbYaWhHzhzxmgQytEnVyLXDuq8egtr",
  "key8": "4Tke9pp671DaMcm5M8YMxi7ZT7uSee9545MmYV8jZqWEgCRGhMzDcYx1dWwKZtQHCgmN8HkSh4bMhxYmcUrKwA9d",
  "key9": "n2vPJRWaYnjFJ85F54ni73X8iu63kSWkTRdgcW3reogtwZxwkpwP4nuH8QMBNm6nUx1YVAMduR34bRx4NSTip4i",
  "key10": "398zwQKZRri9xiaDjRR7NCLmbWrR7oBYbgmWhy2KAg42LdD1P19qkrHPHoA4PVbyrc7WxAqGyw7AAoQhtJpSQV6t",
  "key11": "3f46QHRUaBU8uhGiLcPFnCa8QV8EtPRwYrxs9VhEdqLR7hxcV2V98orcrNVQ7TcP2dVJr3Z4Jn9vMqqt7DCP2jCF",
  "key12": "3oXgJRUpUxk9ahebd2DmcoJ9nLxkLeNFaS3zCgcCKcSuQrXmW3DvQjc1wPzVDyNbqThkAYCgGPDA3f6zt5qJf21E",
  "key13": "5A618fmSSo9DoTNWDVsEi8mSxAFo74N9tNMPhQBweGaHjEKE3qtvncoBoZzSXSs5GKhZMwrzisFua8QveyQnagCw",
  "key14": "4za7Hg1uRx7CNeajBZSeLriZt2xyP66xnR8u9j8V5nF8ZgvQ6goiHCKeVmgmH3jETi9VtDTbLxRk41xFdNsVpRrY",
  "key15": "4SZxWqhA7fRSaFMLa3zeRiSNgZdH4hrBwZKqxR2Knon1JzDjXUnMUm7QEXucbLvDrAtbczSgLAaUS4zv46qoNGC",
  "key16": "22oZBggqP4y7es37Fp7kVdXsrXCZM6jzETG8m7mAoacECjy9cUn8kdbD6JpYpnrC22FMuhG5ucobLi9Wd3hT8XtQ",
  "key17": "5RWYrbg2PbyHGYrAdqt7H4HceH3cUAzcv1qFq69yAcQMGVB4LtwdS6GdDm6GNCGbUsk7S2ETHwoBVfjrzzfr4yrz",
  "key18": "3e4je5Anp17pzib6cWRo3eVA5UsHyXz5Q67BVPcaS1xeUTuZ4zSBwnGCdt99jiEGXG2YEQFugsxTkb3vUfCHKi59",
  "key19": "4GtFqB1eBrdfRY9DGv42DSpN5b133wMgnrzCy6Wyn2p3UobhQ2daYr315sZjw6rrMuwBDqdEoixrC9dKpZ2vCFZT",
  "key20": "ewXryQuHfNU2mWwvPBRHHU9rMb5PJEMfA6EgvyFmvwtbFeUV7o5qJaEXTF9XLVZ2jRqqNGx6hWFDVPUVYSdvXaS",
  "key21": "3A7djZzZDL4nWEspzW5NUXE5DNbKqeTizRG9LXjQXsdmW7wfJGqYwELzXha79CRfT4XVkAqML7sSzjvLgVZ9FnoX",
  "key22": "EtmGj5UR7EWZZhPKoSxgMYpD1S1YCbjBCE8eJfgjKzRSqDBa8Ewp7jKuAidABnFa85K6pkGkaLaZsUt3b33Gbkp",
  "key23": "4ixZnUrbPrxgBUChjBsRTC12ZERy4nnKTh8uJ3nNgjj7zc3y6wEWvoMsBbTs7SiZLxqT46PSf4ZpVRMwhPt5g2b8",
  "key24": "591z6frSLfGZ9yrNZag5EqgFHafe5vxWCDqc643ZjmCVYB4Xi3RFd4oevtMYKoz4HD634t29HT6pPVLEpfkjdPty",
  "key25": "3PetqgqTDArUUBVcjRZLyRfBEv5jPiuXLbVbX4Q93N8bxrmanJWjUrQLzsVRiKBbwBj4Po9aNGWDT82HE3wN5gxi",
  "key26": "5tooHCKsrdE48gHh51o5x9ps2GtYCyigywr9uPoKTXY1iSiGLwAY4GfBmNM9GLJeBbk166BpNc7QKJmd1XfAEiV9",
  "key27": "4qJkiAQeQbLkm1NBzNH3BxioG9N3DYadWLaSCuW9TJhXLT4hsVyynB9XYFSXV9G73c2JAYLYRtuagKW95vc7CKS4",
  "key28": "4Bre7J8qXCYY86hd3ZLgePKR62GNatYSHv6DZ9amxkK8wEdQou4mQy3wsYptkjdUkqYxF4RA8qhDtckgSBpZ3wX1",
  "key29": "3BqBG28WmhgUnbxhssLaXPN7fqdtLt1K9iXAG9kupwKp9CW9LCKWcY1r33XLtewdNQqHXPcTWYMtdpvj1bJnbL74",
  "key30": "2KrNCsW83YmK2i3EhNSR5dyZagmXAaiDJb2GAvSxnabYakuLekE49885t6bijKMdkEKnRKqcFnccUQ2fef3oHm4D",
  "key31": "4dTTKSroQXwC1BCSPbSfTvrafqHjy93iet5zGDLoGAcTy1YQM33Kk7WrTKtTLAARVQU288fwjaU4HoxiZ96McKGG",
  "key32": "3V7LN6SqV5uwv7X3Qbd4zd4uQQhqnGJ5Q9jaz8dyjEn485aZpEhCWu4nDqxVZXLZnhcJQ95iAP1XD64ya8mFS2fk",
  "key33": "3Lh2eeMob5A26svDMYF7Ja1mtdaTPn4NxrY8C7AYHPP2xP3ejHwZ5gvcoJbJG92TZtsdWjq8u6PxvzSsGHUnQQ7P",
  "key34": "4gw469A4mzJfXRv1pUCQ9DrsSBdQJCyFfzXbU1J7hVbeqXhwYG3Yzy78NDB7E8vbKV8HHoV6hYXEXWexLfcHU2Vr",
  "key35": "3DbcyWweJj7y4ZNmZCgbsz6J9gLx5ReXdYcvXkz58NuJLkzwFHDBGUFsgoxCquTVRYuLxZt6t6hRE6En1hDKGQdV"
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
