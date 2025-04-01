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
    "57W2Vq7hXhnTppbwFnToyqw58fR5aP9xT9F4o1hok194zyWnqiqrTUDgo7JTh1Xhy8Aqgk5bwGdBR8qVcoQTv3TD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HiLKR1BKadbVq8qhYNYb66pySogUgWBUVVvXgXa3s3bue1VUpqbFMferu85EFTskk9SXGk2GXD5AWYqBM5UA55H",
  "key1": "5Tz5FJERUoUL67qSpfhqAN6yEbqNrYzxG6c9k83WeFbYKGGwWa4uZYCJJrBN4nVdzmHqz2FeGUcqpHcPkUWvwcTt",
  "key2": "458qi85sNN2HAZa81zjdxBLSFu33nf4Ht3m1FVZSZNRFdpKbNp9bb8chchVpy44hYZNb8so6L6eP7cDUiDtmyjhD",
  "key3": "4RzDXFQTQfWtcGE2quiCZ5vsx7KXMdRdNEu5d2LxpoVMNaeZAWVPLFJEGaKcVxmR1x2eXnHfei3aidojJk97uYGv",
  "key4": "4vy5xzcBqArmr5G7p8Q2AMKUEGMapyH4KZXRobfSNghsHwQvKWaGtFLp6nC7wrFBfb5YvfvhsCAKKDevYah45fdN",
  "key5": "ESNaVWHeJsvd9sZvcyVMpYwzfyp6mNDCThUibvWHY2z1yeeuReRMJEcRUZN6skYMBmZKG9NKqBXwqRx7MieoWcJ",
  "key6": "4PdK1Q4H5idoAKLGsFrFCeqZWrwV4iXJTfFRaKzzM2fCSPHSJmjpgaE673VFhKLsv3pQyWtG8StFVLM2rDdThHwP",
  "key7": "3tPTcFjdJzdkjt6Mrj6HC727QhpJsMvWRR2t92TQ1CGDqd1swfR3N8vTa77MqP28y8JgkbZKSZjLucSECdmaafis",
  "key8": "3vDB99jsfgZ8Rt9BcCUUYqKgJq5gRXuhgLNuK8s1KLxsHJFhWcSapkvBTdkULMo8FJmgXt68Ryr2QURSfFsh64NA",
  "key9": "2XdQy3CVfXqxcXAAMxu7CgT2ivYBKGESAensz1cU2AntNu8eJZSsB5xwfzjRb3tXWF693ddVDKMJo9otj6UeMdph",
  "key10": "4z1KKrEiioewUFat42XCaRGq7UaZd4C4btoe85hdMrv1neRbtNRcas8MakTSD6aNCcwsf9ZmtCBxxaCWMdW1GWKR",
  "key11": "2PepLsL2HWfYw7RDT5Fu5EsyfFqoQyXA22TGWJ3sPk86PJuePT4m6kKXFzdYBnvrXx67oq6Anij94hiqBd5GWejv",
  "key12": "4sGGWYRjo1gtATCwye63wKqQ38TFbazzHcVqLzzBGHuhHCCCWo7JbiRNgRyMpLuZCYSAcNRma7fCVaYMpQPwuu4m",
  "key13": "3KJbEVwxyWkyayJcYF2SFgFPaMgEGedgjBMkDoj81E468bw6zmqQiig22LHxJ3ean6AwReXdV556RaTYNK6wwm8y",
  "key14": "3yG7Z7pmdPpL3sn9Kz82525B8aW1YznfsAiAX81WiVatqrTwCBDErn3m84KUgGtFZhrQMt9MQkthyN512geuFpKk",
  "key15": "37qzZJSbiBkrq4UvWepy4h6R5JFXKCbgnhez31n7ZbiwCzpHdcMk3Boer3e5KX2dSmUNDthKvWYbxoAfEpiVXrn7",
  "key16": "2YWahP9dkoWn9cykchSCEV1Ux3rbJ2LdgpGiQLMKX6vBuHtU14dvAL6pxBNSt5f8i7dzsFaqADx1Vb3SBbbA4n63",
  "key17": "2nFiNeNpNoTb24ZK1a79UaSHHo91PM1nP6376no16UNLrLHpMDJWZKFkMBvhzawpTk9CaSo2aJqdVCN84K2NfazF",
  "key18": "4Tz7E1qutaS8q5pr8XWMFQzeUuCUGKmDQFyMvu1vi6FCamkYzfZJoKv4eJjdkiP5HowmBVAj9uLa6D2N7rp5927s",
  "key19": "5ZuwkhEtA62psY9nYZYaiZZCXAAxbZPwFwnHFwBRUopW2XtofyF9XyCxUvpiG6FYE7uMkRe4eiVueEeDMDgSXbZB",
  "key20": "3tcLMnoGAPkmYpMBLFdJ2Wnyds5mKjwgrvKSuvW4UGXWiiaUhnyTcNU4sc8NfmorW6XK1xsLKwdBtWhhtPSzH5sA",
  "key21": "46A6JALzkkzoB9nTYW1X3Cnskn9hpNNEqRVJEEoTYHNqEC33t4Ah2KcmhvuM2EyjohrDvQsKkSXNCMY89Wn4K6aV",
  "key22": "4QUSiyhK4jLZvKG78ZaxiQDz3qLi5tWeSWGWJKnrB2maFqge7xsKWAVskBhngaepqGUTLKet1XWQ6Wj47aqCCJLR",
  "key23": "4ADRYD1L1oEaWeL27Ufe6RXMQVdgg4yvQFkjpBzYdWmumfU741PdAjYows28H3BWC84kCPLuqqnckAP7ctvsobSQ",
  "key24": "4WPzfvR1qKDF4j1Jc1wbmrSuDx44Smj5DXAujRNNivqb5xq5c4Jk8hQGwJ7gRSVmRDyQv32RXjFxAMcwPxpsThTE",
  "key25": "5RtD3M6afGFizRokq4yKc5NPB2f9JPqajktj2HrmiNAfveTwZ3E77gDtVbyAHvio1SZtXP9n9py3HzKTUg12wRBR",
  "key26": "57n3WrbCr8rxYp1gECabpy4DBuF96hA4xsfeCdqrzt3E4sjkKi8xstefe6Dz7LthqCMYjBuxprKmoMjWt8gf8TFY",
  "key27": "4ZLLPGmKR2uA4zguTNC9Kt3HkTxrSTZfGhwYUi46YWbcgwdSHKdnH9xR3e2bxXnGh7HZBH2cNjWNZ5pMshT637pU",
  "key28": "2aJuyYsHyMAcaKjgXhtwsBHFDsdxdaiCZDBUwP61m4QsUrZcNeU5yCytB46s5VttM69fYuE5C42FEcig9FLFaKyu",
  "key29": "2jf3s8qPYCwjT89fFcQvv1ZGxgNDAENjYVfSCzS5h4UUb6Msf8moERVD3HpUAybg8ZZSWderEfHZvQD2dSKD39D9",
  "key30": "4xpZFY1KVWApxMfhR3Jpm5izYiqACxx6nBkz2qBBxJVAnf4wD8xpFe79MtYNiNcyj3ekUGQ2CPajCPTmuLrPBnfo",
  "key31": "48gJyvUH64r434Dd8447JjZHFouUGTvxyTHaACqaRUn4CpCZnTL2mPyQWGnXV1MGxQ5KrqQqZsCoMAtbU8toEw7C",
  "key32": "2H6Wy2Z6hRVeNwVGcXGmbHfctEganLni7rPVTyRKFvnahfGyQ5WTGRsRwjSwvcSAPWQoJaGK1FR77Y23r8PFcbQt",
  "key33": "ecwjPwREZXkbqVdWN1tgCbuDKEDjnCH4Njv4NaxwjZNuKiqevjUM1J7YnqTLjrwjAi3nHqyKk1gqonV8LCvTfiK",
  "key34": "D6SfmbvEC5RMyMUJCUjMh9EezM6mQ6y8sGpZrELn347GQUvdf4vuEqAdQMcHGhGocnmkNVLxdqxsdYJ6psLdprq",
  "key35": "3Nh8Vy4xWM7NZQxp14y7FWksyLr6n4PBJmfptFUsHX25H4Q33PRs4SxjUycJXNU1bDQdSkNSKqH9jHd5qi31x8xe",
  "key36": "hy7ijEZT5yfgcJ4sd6joxWxE49oeU2gfBwRhFYK9e4zMTvdedmFLUXJzz8LUPtKHc5vaYoMG4vnPD8ZHqW4QZBb",
  "key37": "ya3fTqvfqndUZc8d9oPYRgDo5jo6QeKbM5Bwfx5pPq7Zdcqv6FbUj8X2A5TzV3jpszMagi5KdKhewvAS8ydQ2FD",
  "key38": "ogFJkvVcE8qh2sKtDt6DiG8YVMyEvaqBWPa5SKdy5RLDvuo3Pbn62chLf1QxVBG5QLzvjqLHL2u2nzSDDoXNHYL",
  "key39": "NFeaJ14BhHtVB1SVrmHphNaUq1VLhbfQePzAGM3eC1Dh1kXM1DikbCbyKezsyJ2eMBp8AxeFVAxNFXupVSaRPAr",
  "key40": "3Jrz7iH7awZAd8gkQNiUAD26cQ6Z4UZCexHdkN1a6hfqQc3UXXCnCk1XzZ4Hr4T6NbhLe1Lep7YDFcRGH34vhDS"
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
