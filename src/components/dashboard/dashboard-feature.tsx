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
    "4o9MZ3mfpK9nB4fCtR6vfgpBUyTeHmh4uCoLXVV3TEVkzPtXgR4hakRdP95LvmcgWUp5U5BtL2r4W8WUH8afknJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34iKcGAXNS5TVvbFuspZwS9Uujch8wBHXMkyNe9rnH3sH1FMKm86pkFvg3W6zpvatL33BKzZGcA54gGppbCqTJ9v",
  "key1": "548eoFbphLUTAK16czRAksyC81XAeU54pJrPMDWav94W7KyDf2jHzRaAHsJi8GesmXwGNxbib7vJnHBMqzHpDG3s",
  "key2": "2XmsfkBDiycy4rSHwZdiVFPALftmtWSw1gUa7ShAwa5ena8Pc9XY3Mc38coyHctmw5NwkUdo8Vk1tUHcqJz4DTK2",
  "key3": "57XKKK5qbi7K9FYiYLzXTK3NKMiQ8pPW4jABASJAxpZgLSNnGh7FXqa2kuacUTkyYsEDwvBRRV33s98hFbvQay62",
  "key4": "3scgfe3gXCdK9cehTgP1VzvsD1eYhYSD4oGwBnTtD54hBNLbdbKv5zizidjxMEsAqfduRpsvRq2rujobbRR68Gr9",
  "key5": "bkLhUgQQAyw8GnwZyPYEERsCk653ENVpYsESbXdju1dZidKiJpQ3FBwxMMjZkLo4yNFYRx2TPQfeD5iw81Kc79v",
  "key6": "5SgKtDBwknuStwtfwUYeznqSCfFY1TFGh5ho7Vm9m6cUg8XHUSCnKP33B8T2g2vP57gSKKJeqwRSasgdYKhtzZeW",
  "key7": "2kFxwDaqVN28pHPuBfKtJqmfz1iJZnG7ZCYWSBjXDToJEe7dbzDXjCnmvicV9z9J1bvS3uuQom7p2U4V2svoywgT",
  "key8": "gupBt7M4fjoZqiRNJXwacZXpcU75FXBHKCw3SDEvJ1SyFBWaSzK5Mi6ynDe2xnnccsBqEJHj38n3TbZzDEPLxDG",
  "key9": "2XnFb5N5ezzfaCcSzAgVLcaJPuKNB4WYzeA2CoTuJM6TRGv9jMXPKrdrYGNeS6adDWS7PSdaqqcpa1EMRGDmZjJu",
  "key10": "4sxRm5NUZaX1WV1Wm9vU62B6opWGqx5TaoKpEDzXRrapMpG5aoaYkcTTXRDGT61yFeqAk9E4nZe4TSrZnnUM7yp3",
  "key11": "31WW4AB7J978c72YUXosMdeQ3XVFYVZwTVXW83ZD4CPqKUuFa4iRKqHqT6sRv3MZVxhjbCB4FjRrwPbTq775gS9C",
  "key12": "5f3LR5sz3aNLpyCsqSywPrA1F9fH52sCj9rTdy4bUypowhHAbEdAkWmY4AHL1iKfLCmz1vkD9MCKGw5fSD9HCdWk",
  "key13": "mo4e3Jn14ihUEcgwQ6bMEwBdZopjj7nXpPmtYBLByTxessoJqNFzaA8akeQ3edikwtrT1nvLbtmMEzGu9d1y3ZK",
  "key14": "G911TR7xxD8aWYynfU37NJDSG9BKc61mqfgKFyPWgtf8VV8kofhWYnKjXosMgSDxBfZ1VZ3es1gW7tWfviEYSq1",
  "key15": "4nDEeXR1PpdL6d58pD31WhsrWiEg8eVPZokJXhExtscm7GWMEC4EiLCHA2kQCM8WqxzpaFYu6yM1ZtRPmQufPjRe",
  "key16": "5G8RRvZDHxHhdYjku6DHQvh5wzME8Hx73Ej33VdLaeDp2mUpAsXcBXoSPdHFvEucPtqRqyZe6VDpfCTRBmTztC4J",
  "key17": "2zRgP7sL4PPxL9TvzuXDFN5X8kQznC3nCciDyMz3sVV2yv3QQ4bHWDRfRTBTgE3msKrTV2ypt6vsd7BmPjVMrozU",
  "key18": "4vGgcA2Hu8219zYkFX1JViU1MDwQMTQidyPPvfFGSVRpYqv4fpkpVxVFAuhVLh1ZPGVQEH5JLxm1exJTDhtsMqWk",
  "key19": "jZ88ehyokQGzh2YY8CQ1jiu7uarrFYo676fxH7suXXEBzjx81A3Zbi6Wy3QfEvjZ5HynpKxjx9C4FnfYapgxZFC",
  "key20": "4GtiWbwyPLvBmLcuVAYdH73JSuk6qzLo7D56dC13vKaWMPyzpGrvwLv8HkyRzBHQKhNfeK7QUkAH8Tz5HcfKmRw4",
  "key21": "2rTSrNpAgaGdNF4iwJd6y8wYyZajm6xnN7Fj6zLA95cAuXpHATmPB9hu5gkPJSaAW43iufT9SYfcr9jNZJM25p3K",
  "key22": "DK7x4SPKZnJq3WbTV9FSpTdZz99njSxZspuyTSfvWnHoZGd9xjDZQ6WRr8KWWo9ycXmEhWP6yJeaT8jf6jYGV5d",
  "key23": "5n5fbaNry1QoJoiNxFCWE7hgSqLVuC97FeFksaGH6C5JtwbV4VspNhWHEDvEyKbuC5pYABub4VZc77XTVYfSxnEz",
  "key24": "2d8wV5MVbQbx3XEytsedgiJUFmCb8ZMZJUZcjwMtJ2riskkVYMEy4NUeskZaSbNKZAjSyUANhWG9SUuEGJEK85Wb",
  "key25": "4jkn3FF1vSMBt4hz2sA7ACQ6cj3QeTVH8Xm7NLd2p8Tn3nsedBqXA6UdSobFTSerYd9wd4yvMqE9VrYWwNWmFWTv",
  "key26": "4dZAj9yjykpn4Kj8iddCTTdtZWC65NDcify3PAtsGxXRDABJBAvAgYW72vwDTosQNFTGBGiCmFQNk11JnB1gyenS",
  "key27": "37qex6omfe4dYB8wUTp8qkCtFvfQBxR1qAwXtPXQ8AbAukpDAD529oFhwfiTnG8Vwsj3jjBUpiLoXZAgqdSUCo5x",
  "key28": "5L42ppuiTkeYuXz5cTAQYHSbXtXJrc4CJpDhrg8GeZYuioyDYejvgpTfjYZWsTk6Ja9u23ESpA2UCr91CBfsn33m",
  "key29": "4N7Ao4S1GEaAmgsbEat2nUAuXKuPURNSfC82a4xwf7dwVnGTcneGGn8PxdJArpJHdzYiBi9BCUDWkdhWviCSLf82",
  "key30": "2Axr8J873acWnnStPDewQKHbgQHCj3XKAevtfK4tW73tSeq9TdfysPce4ah8MGGMewSndLAuSdZpwxjj4UVKqQRs",
  "key31": "4HzsH2uL4bf7MStigy42U3vM4GSQnH9cmBVowEKwpNYgbrW3ZFs8myE9wV3GyBTArzVJfTieMYLR21hx3SSnphds",
  "key32": "31aFsA9AQHhZsdhYoZaLYFTvfJD2x7ZNwhEr2UoHseiWPHeQVeBFj4HNapxGhtemHx2fpWcQUXpkdmttq6VLFr4r",
  "key33": "14NQiGVjxXVVGAXXxosnnNY7oFb3e9BWPXLhdYQbfor1av6z91AasbUVpU4imGS3DgJLJnVfYM2cxDwgtb1SMK2",
  "key34": "34eVEaa56xpf16FFnKb2acS4VcQrzPzRqDkgJHvd19c8b9ErzoxiWrXXPVUeV9zWjwrNhqDcoCjYkDkvGoru9fah",
  "key35": "3ZTjnHizYNUAzEABWTvFaUK585ERrCifv6asT1rZqxGpkcUevsZsbjd8NxBntPR9Lu3zgtmNRcsLcXUthBUs1D83",
  "key36": "2AbgBhWbMr5agAFYR7aZkNSxuM2H3e4GsoASF2DwkvakLxaAirvqCYyzv6jYzP3dzsTbk9K6cVTj49R3sgiFQyAs"
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
