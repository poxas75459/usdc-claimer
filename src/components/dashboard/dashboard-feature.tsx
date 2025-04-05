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
    "2Epov8XtFp9AzxREfHBC5H6kuscwsTg53yxxSid2H9ybBbh45rB8zRoKvicrJj14zDdEYeVfVoq8D5jbyCno9bdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2myJUAYrfumkSVK1qiLrNFNv3TKMbvjqVmVL2WK96rSq2N8Sf8rp2hzqQsGSuP6hVZvk9qTXF6SPzvoTSRZ8Hg7V",
  "key1": "4QqzUsJjvm9Cq4pRCuhemPmd3LwbXzwv9co5GakLUBCBhyiHnoUtF3cgUweWR5kYjc35fmibcEQbBRqb11Jcyscz",
  "key2": "3Cyh4uWCyrkVS4HaGHtaC55ZNkS41Ejgj76HR1Rb7yEB36UkdfScfh6eYyEA3dgnNkatCsP4prkXsH1rfo5LcL53",
  "key3": "RJXDjAEBy5bSXe4838DUhz1duGcsR4UnMRyEPDtxhhq6Cz6PwSoMFA5B2bmoQPNPDS87eo62mPLgtt744jqo5fG",
  "key4": "4Qjet9FQ6fqbiARNqGcvjZHFU5qgjmQNaThCsaNLc63wqXUZXouchZgoVNVh3FJUhYWoMXk6egWaWToNWfiTFcoe",
  "key5": "2EdZRRDskCCcSzgVkZhuVinjSAJzoxV7ojxQmvxh2MhqNSD1fTCHQn28w5EbGsiUqbHmBNRFSJJunqGbosV4bSzp",
  "key6": "2yELXKoF5HBFoiW562M7VuFL5djecUKjM8MvhLkLT7A4Xs46USq3wEHrfxsP4gEJj6thHeHqQYcBe3RAhHWwXFVJ",
  "key7": "38AcJ6ysPi2t2ZnsVGGBigCM6U6GZzrd82hxFLpj36r9Nq4Zh49CqF7d7eiVk3qQ6wsdkv8LRJi92k4RcfGkCx6t",
  "key8": "3mcGmbT8QthR6vPxqZwFJLsBNwYXiPVQVm7CucYP3itJBQgfw2oDqH3o42C3tue7QygJzQ1rRRvTkNcsBL7HkYsA",
  "key9": "4PHJyUFP2xt4D8PrUgaSsuQ7ktqzpwpfbTmfWqLqsBb5oinboKVA19JMyMAkDo9Dg6yvRvhhrn6eBGfWAUmhBzpU",
  "key10": "TwrBiHiQdGtpCCFoor9DUiYQvfsuQ8KPstToPREmcNbKQCWvmitWHBS6oTcbh6xqCA2M3CbmqEbcayKqwrMfJXx",
  "key11": "4HdfPxrUsuECdUWwTiK2nwcGt1yEuAGCQAv7VWgii89U9RhG2jFus1RvusAk5NZ7XPDHmCbsczA1Tju5cWRALfft",
  "key12": "31M4YDchccVE5qhpkcKCC8Y4bJdSQNUPmAg7aDEgs9gUkwt4nhHx9LaYG5XGDnMkPfsnBpkhqvSiahpxugs3EoYQ",
  "key13": "bK5zBhsjMfLiXbkZPU2SrjnMnYgSyLo1kFaNyrD4xgKFqjLuLSi98KQ69Xcf5oE3DJ8SD3quovDdUK9Jtenk42v",
  "key14": "636HjTMANM7ajT7CM7smB1iK8ErQeaLDYKvF6h6grGS1bP1kf2uvTUgw1Ggx3qwNhw7f8JghjGsKHEwkMwjZqhnp",
  "key15": "4jBQgFq1KJfDRyuFZpSyicASCs3aHjfoXz9pgzWveQKMKVs87KpC62yoo1qW1R3em7eFxL1f4pTxDxMzoRQMXYDu",
  "key16": "9zB8raG1n4fn2DeopE5gMfNePiqoaGNi3ttGmpU1VPXQ2x39bgAoWMtp8i17CnUm6mzJFUeyLKnFo98kg5HhGQ5",
  "key17": "4cVdApXLzAo2BS9oLDyA2Ay97uezGoTQMG5pV48ffbshrCpNLFuCRvytE5kszc3Hf6i4A2z27fEZC6oT1XUAXcbC",
  "key18": "5izTnMD9gHoUXdKN8rodRF4K9ab28CKL8TvNVMrpMehViridRLAggxgpKs6zmYvLLzMGiiycNK3Krue5bKHE2eCc",
  "key19": "3D1F2VTgJPWSt2GftZodrX3oawH3GpAy8MAdQjsLkMMDxTScviZ5XudvkzApfTug8cGLJAsrEWHVgixPH8ZgTqYM",
  "key20": "2tBCEPbyLRwF1BZAz3yNRzCsN2n4r5z5EG2ZNf58HT31Nc73bLRqXT5wWnWteVGcdPoUtBGCVroCzKqioKpNn1kE",
  "key21": "YNAsLgFMEhQUPjyDgNLwjHgt92WCFAGfzPbSebJb11EVotnVyQLqgUmPfzDo8ottpV68cMtNcMj3J3xNbEjZbAt",
  "key22": "4LkZUEtdzg8AZtqZibPGbgQGvdBmz2gud8cuejgZLnQrpHLhHr2sprkFSRbZCp67eyjFBcMx9CVkEVFJ3c3aja7T",
  "key23": "3CnsYGdALjgEj3ESUFN5GCVnCHA1NHBCvkejXZfWZXUTzNMZe6xzFRMkN4MMkjyGmzT4mpvGGS7ncj8ywbboejuY",
  "key24": "2x29UjsNJJ96hnsd9PxdmzLA5NCZFUoiSeAaBf7AN6WHmaauf7bUiNHdDXWGNrnKCRUYUFDFUGPUqg7k6WKWkUU",
  "key25": "2tsgMDjwceYwZcTQDKdZ11Ai8LfKht12Fq9qiu4MwspXH2btbj716cLWGwWuQgjzyjVhRusbPeLYawNz3KdFxwpv",
  "key26": "2muko6qFo67ijTgCBwHLxzcL86PNmPx1MbxMiByDWyDFQf9ghhDmsBKDZkkuWjuoRNc28Pzq1fcqN9qwKPLtpYRJ",
  "key27": "2PFJUCmDAunU2P6Za3brfZgN5e3KpJBPzXPiKv2JLHSdP8bUzfwTH8E3U3Ynxiv1M5zTerU2gCe7swQ2qtpFmVw",
  "key28": "3WAL2VgZZD1fypTkzRHaDD5G9yEHtKFcxhqk5Swq1Gb9wwpJTLeEGVTdFu8bfCsxuKsu4KA4jJGTrvXBQuRmesFE",
  "key29": "5iaEhVEEDSv3ad52XXgtZ2wcm6QPUstahSGn7acsD24Pm8axLhTv6vnKc5V5RhjRmXZQrmLKZ7fGZ8PFNCFMuumx",
  "key30": "JXZgC3Hd72wnS8WPduikH3BJLQtmjr9PFgCc594YRVGBPCtia8JALmVqC85RYz2or5wK3QkNouZ12hfMhkaqtVe",
  "key31": "3rxmzcy1rsZKTWAahUdBicVg84EhuTAtfzKEQXmeZtuoE91eSSEoKr21Dix7m5RS7X8avWX5WCqmJ9mS5Uxxy2uz",
  "key32": "5bkf9kuhHeGdWPsGzU52dPFqhAtRWkXds2kP8aV8mQySAKX9uMkRgMD9vxuAMqUP4icBHiHsEDEXjrzcujVr5EXC",
  "key33": "4TvwxmHuVv3uRiTQvbmX9juGkR83zCZLLALJWeuQBtWmJxPivXWEJfYYsDXCcdXfYqnXnPPVATRMNnBfXNP24wf4",
  "key34": "5TfGVZ2fdxrKpwJm73Xh2j2LW7V97PhJHo4c3cNZYDCpqHByTcwx6QCMwgVUEBmLUGPjkUjg1TzarvUFf1GGUazD",
  "key35": "5vWJRmCtjcSFmPxRWVWBnsPaqnzqRyGwDXNHardYNRLq1Qf54jhgpzaXUFPuEStiTkH4EESNJLz1hEBqV8cNXMDw",
  "key36": "2YZe1sbpbWSnVJc96kE15YwxfWU97L5N2QfhVxBA9uVVGEAx5sh2tVxxtoMApQZpH7A3NhFAHixd7ZsmQb4swimi",
  "key37": "3MZjfzhA3eDQCRA6hkEX4miKiJDwLz8NpU6Jg5zJR7V13rQZFs4E7CyVpLxE7dDLVH4dCRPA4TvwSttXjRU92CG6",
  "key38": "dQwC3UFE5MHga86kRJoC3g2fmJ75p3MmmkoErbtcujPr9Xcq5uTXEmvnXkWyetWSFzijo5v7kijZvyUC87wwVvD",
  "key39": "5xY5F58CC8cZakXstAVVJZLcYkwWNHCkSJXR1BPsVTmX9fBxe8RxuFo9A6HjNrTrq7MohQdFKokmnBRWjzESPVxc",
  "key40": "3oT45mWvvn2GywVQNrGHtvxqZeE5VaTCvboZSjkX8oPnQcZYx1QDTAt43ZvNBWH6k5XvGgnYkQn9jHenon2fmDym",
  "key41": "2uasgV8JmPeiKVzjqv9pwsJjQyZmngj9Lvk4ZfQwATYuiVrjSAkGczaB7srTQ9oq1iTK6wjK8tfhMdvr5FDUg2HA",
  "key42": "4bQBJn88E4sSCHMWgdiwX4vJ1FjoGTAzg2HDWL7aG4bsnR6tKaNJ22D6KhC6JT3RWYQN8SUzKG7DgQy31uqx4t8y",
  "key43": "2isL7CknC4giaPb1JbUhaCix8CRHFjF1PkEDQaoR6twKMMH8C9uYVzzQ7DnrDx5JMe3tX6JtZAvE73Cx85d87Hcv"
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
