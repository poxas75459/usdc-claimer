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
    "5weATLha3F4cbzu5ck2dAvKmHp62azbQfKZ5Bo51x32S3F9CeuiiQF26gAnzDifxHwGPiarjo13GttG9khNKgEgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbAkeX1c1cUjYCrzjSpaTATFpi5nVjLJ4PCTdX7s7bwapy3ftAqNGS1BRfPNTtoS4Xp8ffoBjAgqUbvBy5YT5M7",
  "key1": "5irruf1TBzHAjo2AqejEWAmfuN3qucwW8TBGwSMJPRxtorJWGYCUTTq5XJXJX9D7WhA3MH2peweQ3VLBsVrsm183",
  "key2": "4zDbENRHy6nnFyLsrQrKkP9QL1VcTRH8ALkeDYJEF9kg3DxuCGy6TpaYVQfp2ffzMyLVECCgjPR9m6Pa4eEQiwv7",
  "key3": "2YYptg2gi1CUueFWd5WnChd9iortkrPytC4DLpaC4fi29q8NgCTyvWLTGz8zKJenKQf1VGdw9qQqhug1QEkDPD2Y",
  "key4": "3H3fdib9cVabQMxSZ4Rcbxg9Rq3KL2RvVMzSEfod2v2nXWFjs5mXRKza9HMvsiRquazLh5L9zbcUiumnH9WJVJZJ",
  "key5": "47RLHn818wSNNysd5tLTiCEKCmdY4eaXfmsD3zNGBdMz4bJwWGD79W7bqPq4tEF6FkWNbRj3WAsoVVmFsdmPWuAM",
  "key6": "7GJKENQE7o54Q857P4aXg3asH2XXmWsTmkDq89fqMF5Y2HNfbtG7vbQXjYkN3BnTYByxfdtrUzFv6y6XJypKe3k",
  "key7": "2svgzkJvM311ATNQPDpN6aBKNtnYgZhCb4EFV3YrFtRcSW3XfgpLPDVFBsmWWbZyqsvZ8yRg7giZAq3EnmDDkoSL",
  "key8": "3rf6P63iSEhTfuR276LCjLu9ogYNx7nVBcWiWLTwpq4u14q4QGWQUKk5s8n87Fsx14eVAJV1Usfd8ApADmCFk58i",
  "key9": "38JcyBSN2pKPP7uKLTW48mRiNWuv7fK3FnvoFMfzgQ4S95PE9kbhfdRpZFmmzRxR6j7pQfz1gXgvZfMoax6zMkAa",
  "key10": "fwY4CyqetR2MavNcDQbeHe5xd4iMykvyQ93mpZC3JCV2zk7mSfG8kE7xN5dk5vKDKVkWe2xWQbjVpxX7zcvtvQB",
  "key11": "22ArcRynLunR4py95RyzgZ1G4hDFqoUSbT6aYBxT5woPbnysbUCXn3MmHwGJqhns7JpPZKkSMi7RWiatQAiPyb8Q",
  "key12": "25YpBMetEToSTbJhsntKhZ66cnWAuNsUqjKXSRWwtg6GPja7vLkPewV5B6RtP7ciFgoyXaT6pbW6usCFZU7bCS3n",
  "key13": "2DAk9i9zqh9FrEzHNoYFHE84HsP6DzckUY4ffkftJjjfyTMSGsRR769JPfXishmWJ8f28z9Xj4RkUvHTnihg3shF",
  "key14": "2xZewVLU52y3idiVYLz3zmW74AuYgsq6h2VaPm6T3R4Eji7C9spYbY1CgE1xHWCiFxynPYQptrsUTrnXEUzWho4h",
  "key15": "4hDsknQJNPc1AzWyx1UtAs5kq61X4nKeNy16HnZGh9iPdD3f5WgudM7XPwKZzKhA7LYUXrchbaE2xCMStj7jeAHs",
  "key16": "RyWw1axHSwZGUZXTTSJMzheZQkovuWJZJSkhmtPqC9upAZHWmVufXwCqw2BLZkBFqHGNy1oUNpqiufdeLXGeUyK",
  "key17": "3BmqZhtQZvbytuW6HvhEFjCGxDwoFk8cTxhM1mZbwtAH9XM1ULwqiquf7aA9TEG31oNM2BAhnsQ7d3NqG4sKY5AJ",
  "key18": "4PSGQrP8jWfSbSbQppvTjQjB53SYHw9Bxu98z3tBRY4Fu8g9ZiyraCr7D3SYxE6K1sffcd6asmE83biDSuqdfafJ",
  "key19": "v6kV57EjjoWVQu9KPatHXjc51XbvkZx7g3V5SATi7XL6PMLjUYshihTMYuVrbUJikzyU8C1kqvVN64LvggHNkEe",
  "key20": "6oSKcjQbq83iaDp6WTg9TSVH8LJR7UJkSDEjqhiyJ1sbxVsZrat3rhu2sYQKNqCbsNuvdMUSEWYjtQ3oNNhBvGk",
  "key21": "5wFXVeFj6jeVdJ8ovh6ss56ZSewoT5iLcQLsaf8BNy1Vhoo9LQrcMe1CZNM6Yg6wruwa726hR7q8B4RVeHz2N8eB",
  "key22": "2qBh739s4R8dqjkNnNoJNHJSvZg9dmXbNxDeFwvbgL2FFvjrSGiR7vds9oZ871LgyNiSxkNmwvUD6gWdELKMnWUs",
  "key23": "5NEitvTgS3TpSfAsNugcRH7aWcZJcMowjCbRiW5vFEPGdUbam8Dd5y5FyusxzFtvnmuZutDeEsjK7bSKkQdNEvkA",
  "key24": "3TsXkFfkPS7Wu1eBjahzuDvBkeoWqZNsiNFLmdKaspjEZhX5AopmrjbhANPc6vjMHeQa3nYo3pzkD1raThBcX69K",
  "key25": "3erbwx9PpMQwtivRvgqiefbKrkAZDZx5eDLqGDUtdM4MnsPqgmYKsDiiFqhCx4eSn9yJfJ9d3VGL5hX4mgZjeE5",
  "key26": "5VR2JKs87nTvxGfP8UosGTrpZDZLmvfM2qwqNj1smFnzTpoNAYvWdLoMcym4pF6eyeoJuNdjF8QTRYnFVzai54wP",
  "key27": "27ku6AEGuTTZy82e92WgXjbE9krTpFcuhrh26jG6ddDEhKFrGrKDNRFDYGmmqmMERdCRdjxdDtHL7syE3Zfe3n6X",
  "key28": "4XRzLWyWuod754V4KBZ8UFTerCSrzvL3MwjFYVaB6oqTe3F4wko4p5TNwTidVUdbgWj6hmxMtdcjBiszHz9QCYKf",
  "key29": "r8Fz15MqXUc7L9X8bvotnxYM5oooTdy29k3ZEeCFagLcaLLxM2w5j9BQ37PsyF9JdN7TA293FZ9G5WPdR24bCDV",
  "key30": "2AmYhmKV4AY7Pi3zvVp4XXe6vHjUuCZM6K6kwXffwxHxhusfDj96GvXmBmMPAfEPfNLaRjPE3byBfrH2KxEuijjp",
  "key31": "5n5se2Vp2j2cykZky2XZZycGZPXBhwKj4SQUwpx5Uq6raY87BhrYPhB26ad11vPiDi75NK6kNhZeKFy8AVi9yY6X",
  "key32": "3gY1WGTrKeEB2dGHds1rvnyyau8kzQmxxmrFfekntZtY4Uj7GWetsd61GpQPjdoyFXRL4PHk5YEBdBXv2tivBgUy",
  "key33": "ziDGoowYQoV7T28QGHCWkFwFb5Li2hN8YaTrE27tFxqCzHxoihSTbLrMboyqXz5bSnEQsmFnAHSHqEdfypgJBxm",
  "key34": "3hUDWMijDHeaogyKJXqNcsZvQxCs26yqSeWVGkiiNHKoyec9NVcjApnuqwcpkQb6FZuAnk2mzJSZMQp5jU2uyBHW",
  "key35": "txvrSix5t63Wh3fNGX2j29Z1TntisdBxRpV4ZLShJQV4Xw1RRasjEpWm2zGeiVJ4dSZxPKxnr2Aq5CRvR6FVqht",
  "key36": "46HBEaTyPyeoBzPxsMbP8PRMix8rKW9MzQV93UqvFvsTwAeTSpuCPrSuSKNCX3XcK2JnH9dxpkkWsbJRevH4JYoJ",
  "key37": "3AZWtsrQ2F6Ec86SLgBXLZr9NeiU2KtLhu4AhcMXtsQPSv6bCPGiYdLMKri7B3inoe576QfT2iCLkH1EuqA1mHh7",
  "key38": "Dm1FdSb7dZC95gh1vuYZtt2DQGFqah8aXfj3kRdgsy2amfP9NvrvZpnFykKcJGXg2BPT3Xr2Zu5RNMgRyKfw9Ve",
  "key39": "21BGHVCSU5epeJQcJWx8kbDn6zGx1SP2HdUr98Ays2MijkTMXYULshdhgzPovzGZiRV8MTzS5pfN7h9i5QLpW8Us",
  "key40": "5dUihax4K45McyQFZ62jKGTEumcF1HdLanEbC8iMFLBqMoQg8ztm1of3yEyveLDvkmb6qMP8AmY56HmCW4dVYL1B",
  "key41": "4dwU7TtXkUd78AUorQVdRm4Ysjq6NU64TvioDPaE9Vqp3K3tWkoCX7Ctcce3HJZ7eHNTcSyuPspNNrrUfee8nZ8h",
  "key42": "5JQha77vnvaJHuZBinwhJtpDubpeH5uu1TZaftWQZ33WtCKtM7SqWf67uA5iEbjenbwPFUcYrm9h5mn26tnbJqKN",
  "key43": "4HxSmVo5GKeTACa9bdWUZhZcDeiHhEeigdfT5YQyUQzDH5BJN9RKCJFWTuA1hUiYczG9sgm5tqT2AzTpBfF9r5Wk",
  "key44": "4wpA4ipxZnNj1iw6MC792ZJpdSiTyYi68LPpfB7YZcAxcuZrgP1FamyLh5mRsQqHF7e4e2SxH7qmZBA3x5t1z3dG",
  "key45": "5okTLJ7b6a73ZV2oXhPVa2gHnafik5cMvoM1AQvGH1c53mf6vjTaa1mhz9yBmBgSVFd8NqNX9FevV7zD4BLJ4bBJ",
  "key46": "5Evu9tVEZyZyMRE6PGTLXTMuRPhoXsJ6hfw5mn9GAm2HqBZAPXaKLCBAKkqqjgHk9cFbLJLzVMbkuTkftYeFtfaR",
  "key47": "3nrDh3FfeWFnUDspubAJGV978YDEXpkAtfvq9LzQK3D2zmABJq6n8azo2W6tUBZoDXfK6cxBQsd58LwAWHYFAqqy",
  "key48": "5t1xGfyhCiypssxmpLQwMLfe91bgrgSpWrWRajwpLmYEk6UiHgDVws7RswBiiD3mAi5WaYQ9i2nNqvsob1erV8xk"
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
