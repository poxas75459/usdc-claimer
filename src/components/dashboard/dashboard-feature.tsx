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
    "G96n9CqNqukZqCmj5XEpKaScd9FyevPpAw43jKuhRtjmKB6gyDTjQs4uPHY3L3hY3d2RXF4ghy3SABK1fB8Qi5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ytu7QvGdLPg8jig1SxesVL3rK5sTP6hfPSmdX8ZWX9CEiPjKRADhAT2SdDTEZTgwSgeQpDQQWQ5sUcxcApT6waC",
  "key1": "2GCcf37oKooSfvzHa3Xvkij2v93qZo6ZGuyP6KQL6BYjQaB4P46MZZ7vdkguLd5efTvyC8z1u2Mzy5uBN8iZ9M43",
  "key2": "2o4hj1zsWyfBFT8XsqrXYuTCYfgLkPDaF1ifdReBo4bgugDTra4goxX8nDtHULuH28MyuMNW9CjryrS86JByKaFV",
  "key3": "dt2gZV8szeHqEUBXTC3i24DguZJMVxUqFmboN5AmvE1QxAa3j7jsMmd62sswuCG9hgms1aPYQ5sZb7mmHE5yc95",
  "key4": "4thQdFuSNRfp8yHZZLMFt242Pwu79r5VaXZ9JDPcjo54odvabVN1Gp5oihMHTB1pqJa97T8BCBjmxc7sYeSdy8nA",
  "key5": "3KLzk6Hbk7rXZSsUnENzGkvjBh9V7otRJaipZTPVYKDsH6fxHp1GPbdmhZJLat85hNHCAcFy6RP14MFUHa4TCHpS",
  "key6": "5RBqFVpNgNbWvRykdxRRLYcUL4piPLbaZvv1woDoWthLBRe6Lbkykz7yo4N3obA1HZS4V77phEUGRjJpNg1qQ9qY",
  "key7": "yszz1idWhYF429MVW54yHwZ4NAjmd2kotsbJgNF4Hpz5HtFLwNWLSfcqxgNNfvW2EwnJSwoPFrWrpkkvaaZypCY",
  "key8": "5gUP1JEq3jMxXMGiqJFaJ7ggPSrSpwsnXAFT6dGWok9TxeyMvwzc3S8KMARJu9mbRVHN4bj8L9DtGqCaE2cyE7uB",
  "key9": "4HYgjsSo63ieSvA9mWaiWj4gNheH5wFewhxEqTmuAbf2ywwXx67fWyNm5xt4eySTPdvX41k4wL6KCq1TBwi2Jd5S",
  "key10": "noXCKymRiUfwiLJiTPsQJrhKb8o8EDUrE6MTsiX1PLLKYzXBtoBr3nVAP3iUEkcgpLPb75VKadnxqkmAz79w9Co",
  "key11": "2YFZqsxsMaoFFnYZG4h6sJ4GkEUtHYEnavUj9qYE8kCcgLpHegKwdhX66tCDFS2nxwzeyhKfMVYxrbSS25b3qHZh",
  "key12": "3kRkLc2LTAHwgm7DX7Auq5Ti1385k63eGFN7195Prg6Frzef4tSL1m3o8mUCgcTJ9m6FRcnE3pjLy498R3TcoVvU",
  "key13": "565zBQ6s2ezp1qh4umv4dsUT4KmeLxaonVS3qKvfaDmKvbbJhZ9aH82jvjDXeYjBLfUmTKWUnbTeUmnK6afkkYuJ",
  "key14": "TrLef5dzRxyy2Mi72JwRvpn8fC5MM21EY4EpUurhLp27f4bq8zzGAEZTD12rgtTCsgBJ1mkuKLgbkehZD3S2eTN",
  "key15": "3C4PiQhJ7LxB6ugtJYVS8pqAsmTA1xeSHxn2a4RoNsvBybqTNGfRVpkAjQhjydWW64Gph2FLCzpt2DteRaXvoqNV",
  "key16": "3ZpsL6BstY519e3P5rLxGiVkBnj1zJFttmp18uXYAEBRwcDagDs8hYZqLxXVtUBDgV2P956Y3Le2Bh4iNc3ZCJao",
  "key17": "2jHNwUBGRjF1JZiyvmJdTnwiV7AJvLBhkMe8DEWz9SFTxca3EUD6NeHADQLf7B4oJ6Hra9GuoSUYmiaq7P88wto5",
  "key18": "2cbdAWGQDumi7vGuys4YhRVxEfCWGEifCPt3tZCY5SWLoyhFwgQPLdZDAwHwHuKyyq35iYT9AvUEDZaWtfLXQmGV",
  "key19": "4jFhLsGyYpaZR3i8f7HuFaAMyFkb1HCRpbLPNi2z3YVhkHAfj2NtTB1fVggWH7t4zuhwD8g9W2WjnbF9SbzZ3HWH",
  "key20": "5cxv8W7qM2RcxbEZvcKQeEAuPoFhopQyQeHx5Db6kxPSbaVYp6TzSv3VTWENBZp2xrFwCqLKigwtX9AwFqLHugRC",
  "key21": "5sBdPif2UWLszYj9SWHghjZwhxe4bu5KRN1cfKgJDcCTwhfkjWrWpzXCdP6UTnDCzs5nRvQnpfJqazVvnQ61CLaQ",
  "key22": "3jpo3xKEuRvsdE4ii4WzrmixtTW8kmrm2zsBe2XgFnYCLor1a38JVrvkSdmKqhQVZKdHk8N87z48C4eXwgQVyMZT",
  "key23": "32wsSCodR1KZ3Lv6R2TC71nJFi17gQkDWfySuhWcLfip2BpBcMfLJGiZQhbuazp2Ymdu6PMtB8YE2LTDBaaPvQHL",
  "key24": "5NSyrPaCasgKqZ3AuLhK13RGYk3m2AhLH9kGexXxrmXWBja2QPZsk8ebDT9YBDbfQod5HgpCeWniD4FN2svXs4AT",
  "key25": "5vstNiZYaEaEGoFjHKLx9zQq8FY76vAkkeF1yTF3mTVNPdbPsvHog1oTHugWtd2W6L29M52RvbxaF8H5KWXiDkQg",
  "key26": "nDWnXN9QzsBYxqiNzXukQQHVuQHoEXKzYXjmVcXynVWvWHczfT5kzAVMpzNGVFgvjTvtUpBpPZJo4rZJvXRzTG9",
  "key27": "4DDF1pyPC9Az89rx9Er2C25TXjPubfCJfExHck8GMc75phHriAoqJNcr3ypFwpckq7fSXfZi3vu5vqTkc7rqxdWA",
  "key28": "5hnQQ3oyBxUrUshnV7XFAcwPHcMiibMFfbekAKt2HMg3BLDpyPk7LWTMEiuNmuqffsXfdL4WQfFANp28cgFujHr1",
  "key29": "4JcqXWsGnWvoJMq3bwodkmEXVWxESu57p1qmaVZvx7XRsUahimW8q3g8RHcz5CgD2FJ2UA8GZjczYzj2vJxNR3mG",
  "key30": "sCJhC4uymJGvYHFufr2fxEx912CfB4ZuLfrrZvTUhPpCBiQEMDZKn9BtGzR9Y74mh9HY6BxhFKvqgAqkKXhjyRo",
  "key31": "4w4sKrm917xmADvw25JvarYLJf3Kbs2grcnthuQA3VXUfDFH9HtQ9Pj1rgFXvvgf9aLveNCj2yG741EEbf4tWa23",
  "key32": "vLpR4UzbbgjTteoxAoMgRf4ecXWhyvH66k97yyvKoTnFNDuKDwTEQtd9nwL3bvrLy6fp5rjgZs4fj2dZyt1BPUL",
  "key33": "5o2ZDkAU3d7DVCf613zhPrjGfJd7KHxFZS5tKFeFC8UiDJqGmzwNQUFNnxgPW9ZzkGkvhnBpbK7UCfCtGKKq5gjK",
  "key34": "36HaAGN9KHKuafWZw9vCiXrsK7MjH5UcELZfgqNU1XJ28dRr2xM51pzd4gyuvbQoLzEz99TTvTdakkWShF6agELj",
  "key35": "35nNPu5PGMvH32FPg1bQGnpJHtNNVEoARLuuwv6PuYYWXstMuY7CDH3Nnxrq19VuRcDfTZWLZX63LHmbLouZ4fFA",
  "key36": "iFMAkBxkVJVM9KjAda7bucdZwcmoSXiTRrzuKQTm7jUoVQnVoX2o5xmXUvKy1fG8LCwNLdthG6XHocbGvrk3mtu",
  "key37": "2QvRahQFRzhyuQBRdB9xLhA8wo6eL6JigA4gyA374AHH5qTUVYsx3M4VLNJGFHNvYgvmTD89nGBcPz6xwqfh3PtM",
  "key38": "5ToCizC3wW7uTZDeEbcECUnQvRCJUAUp7ise43qrXYzsxzy87KASVm4EZm5f7Ct6FR5KLzQdEEdYodtYPaJMVA9g",
  "key39": "A7FEc1X8Foy7m4v6fpgmDXu4s8xfXge4xV9yhorep7XZ3LnjKzund8W1BcbGga2CZUnVaShXYQkaPyVJWYxBgEW",
  "key40": "4mtoUgwUMYMcyjijX4PdKDS3NQnkEWfWMJs5uPbMiMDGVPTf8Nv6ifvhRvMuzMrKSf8akHjx52e85pnP16UGrceq",
  "key41": "4CRguiKvB1QAKud8SWVL4quKYZHoLaVtQBSncrHCDtfyPJtkxLKbPu124VBtGaU9tYZAomcyorYGeiykR4aWPgcn",
  "key42": "4Bq7Xwdgq64uGvvBXtuXEURZ8xysTZLqY4nUxTpeVpitHxzdhFDa8K7Ro5jjbQNXTRfsZHv9u9jhg32GxAU5gayL",
  "key43": "nW5yYkPDujRGwTtsE1WeEH6gGYry7BcmRjPx2VZhAgQc7Nvv3EN4bmhGHQN9EBMryoTqfNnKqzJpYnULNryjtd2",
  "key44": "5mHziP4vjTMNR9LKFSVVQMVAv8mronsrSdyoMhrvD8HQYHj1kbsx5KRCdeKbtYXkgpnosERt3rDC9toZ1TSXRj2q",
  "key45": "5HSRG9acoFgtLLxmxEfPXRMqfak6PB4oU7LgQ13kiBH8ZWyuTHE7Xz359aQzMWGaBaU1cC5Uj8fMbKdbE4Sr2wYe",
  "key46": "P6ADQASqLGEVXotB8sM1EBKfy1sKXKQAiDmrqjHAABDWzfcFZnHg1qvb3cRm1aYcWnTvs2UoaVRoeeoE2DnDfmQ"
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
