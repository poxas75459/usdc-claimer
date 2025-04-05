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
    "3XpfYznbpDsCYj5HZguMD3AapqciA8P6YUMHQTnSe4qJrMFxjLi2DiwaXUc2amtSNRQpV3TkxpnqTQaNCMgysqSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vfprVJUNBJhijd9rMtHwZiqR4WicmLEcvx12wQgYJ7GGRmpgnZRwr9aLCNzCs2LB6676fvsJGpksCpuy1mq58Xc",
  "key1": "2rs3qYH3iy6bUM9GChhWXxi9qU9fvUn84WVMiJmkfsmWXetTDAr9gyDEQYpWEatPkGeYJMpA7CENK4y6rzkBhGJv",
  "key2": "3BYwN3DcMU8UpLPMCNJ7bcTVadsgy2C6bipwuYJa1iZf3ZxygWah3s16N8F4SjcAGWMGm5zo4aH1RRgx8qxvXXYp",
  "key3": "2BRoaz91k8auWFGZaoWiwVo8oXJdnrgoFRwDyDiMAaHLAX8DZPzXaXEtB3iun2dWEQxJKrgQcbY6fohQd1cJQmZF",
  "key4": "43TDpGPBaumhjVbx1w6i7ha12SCK6fXzR1NjNj4c4MERqkM8vjMZ3NmrfAUGDFJhFRDQzN2W6XfsdX9r3rHmoM8e",
  "key5": "4rUzY2Gs7Fai2NMvDyr2fc6Ugvur7StuFfVPjocJ7U4nFLwbyCTKYD5RLaDerfcLXwgrRcEeSzmPJRhTHPBjFYcD",
  "key6": "RPrQe8FuWHEbFWskeK84F88GcN3SsZcUaFSDi9UatTCyavxVyEWdoFjV9hVSqzuPPg92bvHBCzKNTkDDc7CFfQ5",
  "key7": "5zsQ8cFfgvcXyXQqCReWo3rzGtZfyBiETam3MEw11BSUAThaHCNAZaMPXP5PDaysrPzEXbtEvnkJ6LwNjPDD6iRu",
  "key8": "4FoKDksu4geeC83QHGcRFriveMY3aDyZUinxXPzCBacRBo5hTWUnTUzA1xCoxjMvVQx5UthaFdnVN5H7qtvJJH3A",
  "key9": "fqnorNioYUxSdgBfRbGiQuVYf6iUm9frmbD6bV4gf3KDpGH1Z44HDRTvhnnDeC3UiA52f9k1HHkYaJgTqSBkw7e",
  "key10": "5jGJBnSFppFY7TxXzzu6oCnHZHRG8cBXVkETWbMAr3cUC65P7AwCCeKLRG3BL2vG57BcnUigg5fXBxDNtpTXUGMB",
  "key11": "2BkyzMLk4VCt6icU4xZ1AbRLChBZ4XL4ZXJUaLyHNjDSKUGc9hMg36jkh97Ehjc7FHHn7zfQYng1zXryV9ktDqR2",
  "key12": "V8UrPXKr7VGf4fYDc1gwCADK9sPJebGLtBdXfXg5UajFVDiKxj233xtWTei9ZWNhmqbgnDfATrPvEYCw282uWad",
  "key13": "3q3pCn6983ts6MVn4CAs5SVzZu5GxvbsuAFEUuX4YR7SwBgFy2mjmAZmSAr21pGLmqCVHLh738k7sFLcY3vXWxZ3",
  "key14": "4JeZF4ZWmmKJttNCR2pqbsuM5P7JxyDfPWyQybr25Wno9wu7swaLbjTGnLkb3HkDpR4adey69kVfvrkwDU5uTcFE",
  "key15": "3YTmAFVpd9CbCcrCBqoU68wcdu8M34dPU5bcSMczK1hZoAbpGKQ3e29cbLpFcKM5UDFCseRowery2H7njjk8AZpv",
  "key16": "4x37TYKpSTmkhvxeDDKta9xnvVV2vptFtbc5kEPBB2uTsaNwjCCjVoRJ1XGJU8SwdXVZgZjGjWFuRW4p7vQdFKrc",
  "key17": "2wahijof27X5kKwVwpoC5hCWFCxERJkHuWECoEt1aGy68RpQFRtfabRwLmzStYsR1XNkqVU9gZvsd5AdYKu6LCBp",
  "key18": "4UZJrh9Q21rGLDMQHmtywtexZdg7k7bEA8DjGNRoEqNfGAb1PREyYN1JmGurvY47oVvniqd42MNtnb4CsCBHA64V",
  "key19": "59bbgacbowtZKbA7LT91YmtAFa4FTUQuSaY6fbnNvAVszz3n8C4zjaDVyZaWnwZjMvTnBgkx5WU145mgj1g27PnN",
  "key20": "3T7PFsDrTg6hksWGfCsASAE9CUnrwPPbV8YEPLvssGwgWSpHKADggpudajotoGqSnzhgtCrwmBigTxUHetXcK2wi",
  "key21": "uLHZGkihEKZPgNp7X2i2ax1xWjME3FVdd2T4QfxJ7BWMFMY6WUHX5WgaYnbNQm9RZzRW5qZKdSm5LoUBgLwXzqf",
  "key22": "65Wea72by8rAdYez43aJ7zBYeszb7jGZQte92gy2mERP25ckwQdJBwJBbB4aKtXpw7Lf1jR7DNX43Zzivgrkp5M7",
  "key23": "5o7FGaZka2vYAF2HDX6q5DcYNx2cFYieehpF2b6JFbwpV5aHHt7gynwTkwmaMB2eVpS63kVtWES382BXhssKvnRF",
  "key24": "5FV2Mcu6yiuYfX1EhWZxewMsVYWAUSUCt1HSNFih1QhrC45FfJ58THtG3j1REsM32ybJfVSycSJH5XQMaU1usqBC",
  "key25": "A9qwJtKVtpkagTyXnxjev8PjpF2d3tcL1HqvR1MAAZa8VrPzRXMJtm5QK15ByhthGL6c9LbVFFrFKgP8pezadiw",
  "key26": "3dZvLEMYDTzyDJPDnAwG2pwMWscm3R2FaHQH1E9QvayjZ5fCVEB8HWmD8f8EjuKLXtEnRLuPd5BAJcAtmrQVCU75",
  "key27": "iQP6z1opgiP1xRyHqVMdnywDW16y29PaBACQoRkgXtE5k9t8JEqrZHLytU6TQ3MZHnskSQpPUsAvA9R4Yz9QiXz",
  "key28": "4tvA8rn9Sv1vpKnq45U2ZKMc3L7j6NEeewNyZ3ft9UZtVxDENoofZfbL3JHRfJuAWUGemH4Grk7qGrAxgYTsSJMr",
  "key29": "5wznUw5D2DL14Sbnvzb1txaMRPwf9btX8jDQ2KJXfFLgfLB4Bu8Qj8BCdL9e7eKwv9wa7fxKCoee7Qq4LKjaoGFC",
  "key30": "2gVxXYL7xmzDNFbtzwe6EzYUVDZg5NYgaycm943JdheqUAExr7jbhfQkdEoPv9tYVyRaBW3ZSWZNknC7edJRbnAE",
  "key31": "s4FdhVMqpxT83RZQ7GJuAnqoS4e1QreepteRoYeDoUs6i6ngHatXiWcpr3so3VH2VtcdXgMCVAnCksuRn3c56cY",
  "key32": "5Xbt2DvZwQBvLrXMFXHgu3mHzASEDqR8QLt6rTYvz3Ngmw1fKcTnHuL8o8opGQf9XxbsK3vgEvqEmBe34AsdR7a3",
  "key33": "5Mu5eb6WSzj6GeMSn18yJ6LGAvUh4qWnvLen6Bi4TBMAGA3Z33uR5NuFRyUSB2z15rdqBmB48TvrQQSLifdemsjb",
  "key34": "2DtF1RuT1LtSVtQqhGAjFYUfAbzdezYriu9T177Ddi948hUC1bVkbHiLiNDQ7ZMjctTz2cDNpQFbS7SAznagSBqQ",
  "key35": "32i8n739CFvgh2H5oWRiFnQ8PdJhXRgFBxCHxDjKKCrCGDKLnSjNLBUk9wraZpGHFmF9MYBRmgfSBTzDoXihrz8x",
  "key36": "57u813qQD8hxCTR8jMaRnjDwBsXvmfduE1aXb87wiUC2GaDUeW1BQ2mf4oxrJLCudRxmioFvgtdjcm5jX98w23pZ",
  "key37": "3L9jQah5GjwvQAzMnd54Rtp6LaZjHzrz94CRcqeDQdNRfqqwJYS3BErf1aiXS34CFtmrdzAEDTGrgmrP3SxaR3qL",
  "key38": "379sprYBQDCSLwkBP6czBqvdAEZJYcqjSkgKLy21fSNpXuebQv3VparZbUGm7E4W9kuvHaRL137RbBcsVE49BWFz",
  "key39": "4jGkaMhqrZRmkmgs3d1KEPgUngu2y8SbLKkaikiYysNuvWPBSwoUc8MWWiXwLm8DN3r8XdeiBpUiXwxQnAKieddX",
  "key40": "3Fk1oCmAkiwdR5XhBwH3r1RPw7KTcuhLUfdUzzmRrsg6h55SZQqEkXkNfxs7HoU75kzao1GaiX8qPP6DLrN2uoTf",
  "key41": "5vxHbZRdHsBmjFKvovp2EEkJDYvL6YYsu4wFHzAzwV2ew28hLtXHLjwBXND76pH5mTZFFCArjbbhHAVEw74ruzzT",
  "key42": "NYtTr2F3ZBJCmGaAFbu6Le95ci19o9DzsTrkDbFfXRpmfWiK8F1XpHxd3Debs2ggkRnMt6YZu8NMTof3b9Madzc",
  "key43": "3zcy2JSix8mxgEDk71y1CSQk8mZqcJCaxwZju9B33G15BzKzCNDpHmgtXrSuhgQHhky51VPeeX6poo3LtMQi4F6G",
  "key44": "4NXTwyWvkbHJywKTv584MExgHxvoXU1uriGKgSrc3rYxCghm5oXCYmX5RphMMrY5GmqfatqUmmpy9cFm7JBoxv8J",
  "key45": "3sXtD7EwY5u2nw6cgkCpeUCo6udX5eKC3kuDCpddRZ8VuU3ZGzQnNE8hrMkhSWXgsbgjk26m9ByhBo1KmYjSfFMR",
  "key46": "TpYvUUwPe63EWCoGMgM7LMkzhBh3AyEuUuxPHGadJMscrHBH1VQH13bsRAdXcF5L5uHpP4jfbJfF2hqSi6C2Pk7"
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
