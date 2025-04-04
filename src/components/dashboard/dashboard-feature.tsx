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
    "5v42Jx6KqZ5joeAdKkLCRQoPpo1NmNJf2UfxRZbDjGZSwMW5scq9rkVkJhL9kxLMTih6mgi2SADCBesisi596gz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yHyDzi8T8qT6vfMvNhrPBKCeBurriAVVHdeUx3cF6a9V4FVCiC5tyMN9VP5UYYD1CbFKEu8fPRx7QbmJcbFmetp",
  "key1": "G9iZDGsSvuUQ7oqoW7HWBHUBKRZUhgZKVRX4F3JJ9euxpdjNQhzeVXmQZuXsxrf3BayBexoLvXhWXo92TTHaZ5B",
  "key2": "b9syasgqHmqJsHRUMCAdqGZBxfn3behWgnd8AKz5xspy6fHWRELF2Gb3e1RfNtWXBj5ADwuPpsStv6jd8UNPwKv",
  "key3": "2Exbghc3UQ2opeWdBkAiLxqi8WNbsf9vtbgJzJwpCmU4veUfVxSnekeEtf2xdRQh7m2Q7v3adf2dMUNiD6iA8pee",
  "key4": "5ob8QoYF2Z9vi1NCSXAri4ezKy9rnKiXabYyVHPCDEQrcd3jyr4e3HL4NzAnV6bN8jFjoEkyTuyuA1ba5CEsTBe2",
  "key5": "4GrUh11qQ3zPE8dqDasUL1PEdLnJTYMwuxkNsGhUB1QXdahiR9qXjnLFQgk9RfPnDzgs4HWEen6Lmn9kZrRD1hU1",
  "key6": "4p4wzmisTvHvnSbbMAnwnfc9YKpF51zsH9obLcEdsJnoqRBop4k1z5MLg2jceQM9aY9h1cP4qfunuRjW6KLwruXY",
  "key7": "3EMJFw2AhB5YrhxPkrCjddYkjGLLdsgs5T23BHvSuk8b5ChAmJnM4HrM796mExoRgG7SeQWNZfeYSX93eVV6BAvx",
  "key8": "2CSoomGCCknLXxPwcGuHtQDDK7MihjsqaEz6sf4AsqbsZA9M9ZTDLaSv1xtF5tVh6bZi2VziQRr4TfRMpqZB7Vbw",
  "key9": "32PtzR5RRpruq4FWLnuamKUcimQbvnCRrzqFErq8gixHgrqFJZBtnttjgwx4jCRgYAJSnVoqjFs98fHzuaP7F2LT",
  "key10": "2k8wvpMgTs5n3YfpNcxeetPrnD5kmGW7gTjNL1fc5C8ALrDzbw51mjDoE73d2STqTdWkbhFRaGeJsDxz6ESH7quZ",
  "key11": "2nMeG41LY9pcGUuKFFpT8c1MGP64GqwSjC6fz2hTeFEzX6M4Kh7u4NXqxhEGUVUKU7B3mUipEecqqgTmaPdxq17C",
  "key12": "4xxiRu2LWRbUgYd1bjqtfoe1gUTGT1dxFb5rWjBZcsrDbzey37SgTRYpUDwasNuUqwVMGqmCiXTsBSftwvMriw1U",
  "key13": "U4t7H7fzoadkzC7kZdfEf3LVDY9zBsa4VGqZy21zMDUpWmctyiAqFqrujK4nLk9oRsDA72m29bVL4G185s8EhQu",
  "key14": "27HgHtLDiMDRJrEe7FDk1drFhBi2zZEvTRm7CRZThq7AvAeQT6PFVX6LYYYQWwSYQZP7SnsE6rQy1pMycQERA2oG",
  "key15": "51g9dtQQasGH7ovyaPiKoQUS5q32yQC8oDhV89qgQYkrTEBTNkZggKrFcdxhi6z1qPCqx7VsP7VArxERrkT68FgJ",
  "key16": "2jnTfWgXATSedLDvn4s8syYzsFmcDMVQucPSRRD6NgqVWdnTqGy5rgUJCGr4n64zkZ8ERFpxEyL8xVcdHKghm4ZJ",
  "key17": "UYPZiMivp1Fv8tya1KuSNC8q53RLnrRd1FxMTGS9kquBMGXh6Jh9HodZGyGoqkPx2g8Erxa31sAHJkvQGbZzYjZ",
  "key18": "66NpYHTATEPfDGZ8tH2R7dHw2HAZew2hCkYkhf3WwKXWRdBAyJ45EYeWojuGV2YXkJ7RDzdVwHLfk92z5YnGFfCS",
  "key19": "61YoQC7mi2zLKfaRPz5ffUqFrzEMx9VnBqeHgiCyEN8MVXRsnZ1ZkZGKbhDhjG4U2hrN1eYkrcFWz2Kycshn5Lqw",
  "key20": "4Rd1KTR46NZ3j6WbHgPMfoXdh3BKVqkLMhvMeJFhvEEJ6Urbq81vDwGSDTZk5GgFvvaNAWZpqNNaRCLfgLejJcMu",
  "key21": "29dhPDngFawKJmNshCfRn4NzHd5G91LDjuZ4WQdwEcbG1YdTdAXR36NSrkWq375AyyprFgr7ES7rNDeJcj1uRd2f",
  "key22": "5WUDUzBuSbMsYmVLoGNXEZshvFS9ZZTBggpMN33CmXab7QL2p2d5WP1Mo74oTNrn3fTGB7v472MrH364eL2hnMtF",
  "key23": "9yx66sBQFuvCuuLEMYMRMZiCz7MVEUXmXe3ycCykFrRXonRforkiZiUVuMYDSAYthU2Bz5st4imzGcAFFi2caTU",
  "key24": "5dK8HjGWQEsWdhQCxaUD1zUcpQoDGx33pxTQFpiP1FhRxr1cdp7TKhivNhbNWYnXdSYqaV9yowFNVNAhoY7WmrBT",
  "key25": "4QVYquyciDd5fsar47vdvEwxBEZV6mWrBEWFwzLVNpCTpZ7SCPeR73GPQ7Ew1F4yi4f4391rRygitTCzkuWriPaJ",
  "key26": "3AQZmfeyrpM4q5bSMezB1ThNgNwx4rodFYWgZ2myCNuCiFrR6dFVWFqEggqZFG8Qh9yfTMX5ACoDGeySrw6k2mZw",
  "key27": "47TUJUiSASZYuiW18D3M8EUsx9i3vDKtXWH71E1v9Snb7cy1eoCp3RvrdxNry5gaD7dCGi5viQAPahbYvgx6tCDY",
  "key28": "u4MXQGpCptTEme2e4rSXeY8NTXzi9HBiPZ7oaHXyxypdiKA7hztgGZVY2Gpz9pFPSRggwVdjMe2Mb8JmjwQd5pg",
  "key29": "2fuQyNGF7syf9cQ6gzZrg4wPoHJQXm5rEyLKhCeHpVFDizCAqf7skyG6fxx7YhK3bgKhQYNwCRC2W1wEAcMMSJkQ",
  "key30": "5ut6tdiLon74HEiLeYGtw8MHXEBMAX4h8KqW28tcAszjz6WZDUyACp3uWT44qKjJYg927e1sWCPXrz7uEbnPgamv",
  "key31": "44aBjxe6xSC2aX6P1wH7G1TtZ3GmLhKepJqPN5SateA8bi8DP35UWgCoi6MY3V88UnDS4mspiYppsXBGEvGWSecY",
  "key32": "3eFbcXRq51HgTXdzkKg2JeBZX4aFVqFoVS7cNcasSJkWY61vfGHBkHLBqewZ4uDxnFTt2ihjuk862TYDzJNUxquf",
  "key33": "T2d8dAZVmerbPVrrsXeZMQgD1v1j652F93qTbAeHybW1qzrcDxrNyXRyhMhzwM3H1a2Jkm9mu5JHTjKwhgjpqgc"
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
