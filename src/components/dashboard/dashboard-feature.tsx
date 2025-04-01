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
    "2T345u4zbHtB32WtBkDQfYR4bdgRbwxchS6tJyYw3HahKbcMNSyayFbjYu6LmgcfUFhBkaf3bL4wgKLCoW5V617y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yCQcvYFAKGJoAxWLFiLVZbXQXFE657WNityiVtchNc6zeybLQsc1t6BoL9VoYpgxWWXstDRHmRibGquYjnA8cg5",
  "key1": "4bzE7262WU7HknZcxuU4hQFc8kA2ffTVVXEtfk8URo1piTPUT6ejkwmZ56BviKR7yEs1BLb3QT3fHPSzmEUwyV35",
  "key2": "3TmqpoJqG3LU4wXr9AgSQBgzc8EVLi6jn8kDmSNddEi1zCs4AmtjjoorXai5MWp9tycToe3DGadnS3oLBH31Hb4c",
  "key3": "hhgJZcgMmtCEebKfzyuTbDMwBHhUoY9NNmYBxQryvEKHzpscRjkhGPC1n4uF7sLm5rLEfFxAYxTPKM2VXqFRQrt",
  "key4": "qVNBtVmBanq96W8dvWE5vQ2zDmyfMou3cu9eWa2UBC7Xz12N7URT77CkriEZz3cVrPeThV1Wp7AkXpEVM3WG8dD",
  "key5": "dnmX177YxEZFpGG1uURfhS6rpFqF25qSE8xd8GXirpEP558TSb3DcNGwxsH9FU7WBW6DuQWW4GhhGWbejxqSg5Q",
  "key6": "36Ec5M9xkAQy19CWtfwJskcZDhyJdFb9bN6mijpM2WrMVESqVmngDefRZhbCNMRuB6CT1WbCA3XJxxVdwbnXGUQ9",
  "key7": "cc4NVuv9aCwPjiG8faNHxuKfNvW1QPfRwNFr4J5BA1crqoZu2jcjLQzxFGq8HH5kL3UdNFjrkFrcqQxeXghejqL",
  "key8": "2ZDkgdQGxbKWYZP3yzeESC5xBJrG1kCnGRrL8TzFezaCDM15HGZLrAC7rP8tiETE7QZ5JPGPejAkfwJHatUtFbzB",
  "key9": "3s95WmUxRuCfWNF2a2uABegdnkG4Etyxs8chxTtSENt2guqCLnhGdkhZZWzH3SJqCMMdMnwMGsAM9d4K47r8s3xZ",
  "key10": "2Q75T5N1CYEgKeDHmFRzjPkWjmSWcszmMWmd3zJnUZokbopE6QzpufzDw2a8PNHFwcMRzsmN5SkaqZB1xthfhpxC",
  "key11": "45HwFJwKvJBxr591iJs2K2utSkjgEAJe4yM4ft9PA2JpfVXSbYKqh1BzPb9mhE4VkQ871riuUf3TNQjWg1oAVELA",
  "key12": "4Js8BWE4QN2GLte1MrwNBwq6h426wVXDTozW6ZtgM8EnHS2UZDiydptXs6V8chBn8X52BtxiwDVqjxveDouQ36u5",
  "key13": "5krzs4GoSg5rQnHBvbEcgLjPum5Ki7fbromRRqhVgFSdoSAHjjYsKYgVASQd93to3CVsw835oCusE7p7aaAFVD4U",
  "key14": "4BChBGxjD21MJt581nNHoSNGTPZLhyKDRAq5GMYK6hhLzxGzabtrRN8s5B8Q5PxVeprRxTCkxvPsVCjnsQemWxyP",
  "key15": "3KKchS2kuNi3c4bqsYUfHpCSPa14mqdttG8aoVkf5yjND8njDpotc1NBKsLMyShfQ7fc9evtsj9Lwe3ALy6RcpRZ",
  "key16": "2VuLwHd6qcGKCxKxNmfTVL5hAuD3HQpkjM2786J8uahqvp1ABhXoczaFURGWK7YD2jbxhABTWfQ8dmCCSinULbeZ",
  "key17": "4UrKdm5nC3JMcB9AXKPZLz5vFsH7TFafh2NCG8h2wP6a5ub8rCPoe3uASUwsDE3ziEhZWudcp9FkAF8gUofrqbfi",
  "key18": "3sq8XXgBU6ZtyzSimrJ8S3fRh9tHNNymCp1dYRwqb2v5YaLimMWUmJyQXypzcByZ7K8wAxPSbXTJGZdEorABN4tE",
  "key19": "2GrFkrt5YH7DoAHU5BdFzQwoe8sRLDfZiTEvh5pZnpyAmnQQNJwvpZHzspFxGephaiVLtxtXtfeYaPDkRAVUtCdm",
  "key20": "q2KSbQybuxkqKajacYUf26nDcLjsBAZJsPuxedFa7s2JrjySTiu2TAVo5TzrFhWhzCJdPtgcptRsqfNjyeWm7nr",
  "key21": "2b1wUNGokUBmvfj2uEwQfziLiiDByzTCj1fcFmHT3dPe5YeauVUBWffDAVv6tHuDWj19cUYHNFPx6btA4icZrNLG",
  "key22": "21TVyiFhBaLjxrXyGb6esGtQeErAF98KYPACZKhzhndvsaZtjoApgm4wTE9e11Sty67WqzWg85fda9ZhbrbHniFv",
  "key23": "4DdDiFdfgi6WoVvTRceqrpdvXoEM8ZkTaqJD42LvyhpsB8WLVuKXeGHgw2THrFBWiiopNvb58v9c1SAPAfqUsCs6",
  "key24": "4Dd76vijx1NFixLAQqt8wdsp1XpfYDrMQRALP2PY1Yvfq3c59jE3V7QPeREZEVAemMRpU5zMDgJFJtDmBK26MKMP",
  "key25": "FLe5cyGxrh9EZgmkTs1UPtZF29Wqxej5XS3h5GAKXvwLUAZkqyFebikUP4JSun81SW3rDwMfkcfWdVfuEWJM5KW",
  "key26": "3VCGnEcwt8hxAB14BbikPx9FhdzAXyoHfrEbC9C87dHXxMRg3Qq5r3WbEFye2DTcCYgDAtabrxsrBvXA1SmdVn1J",
  "key27": "3wSMQHGbzVjNDAujSH5VQPzjQM8SRMzBjGkkybMrPYTE5s3VinfKqG5Bo7XqJDVNtbAmiLUccTdqLuVfDrGTWz3F",
  "key28": "i2tNfZZyQSTU9AheBGSdmobBa4XZqhnxednPark5qexSZQsE9EXG1Syhg4Lk5xBS5CMq9K3PSypj2vDdbWwZdKH",
  "key29": "61xS4B3kFyD7qqstJpdo1tguTuhPb2QWWc5oruEq1YhzJDEst8bwrxHBLkn6FsNioqA5pXAhYaDJe2r5AeS4ySe9",
  "key30": "5zXFDyn2dA1fhyGxhtmvBg6jVhpxNNxE4yehYtfvpNSPYgQjATQqkhYeSaD6m4yTe4UBm1bHnJ99znh7PFycm5pj",
  "key31": "2nCYAxkTy6UWUYzsS4WvDcsaJ5qXPDKajUK8qxDLeqAGepeEn9gukzcCQ3ZWaspqQC2R5e37NaS4hDTqegfKdKwf",
  "key32": "3pZ5veMQn698SwLot8QPkPryXMhVPX7T6Ed2dLwbCuDv1eVtJMNSLHxNXavxmWB9kgcn4r7J1gxazyJKj5CGisjw",
  "key33": "4uwd3PKFtRQujrdKgoYsZfunSHoftLVM71xQ9irrT5acH59CkMHAtzFrjN6Voseysc8QahGtEmQVPousGE8YKX1e",
  "key34": "2opzjSsmMAU4tUzoujv12zW4ycdFGfA4eHictUNnR8pS8yZHaz1sCwYkShYNMzTVZompvJr2S7Ng8MukGbbqXdQ8",
  "key35": "3TzoMcAPTwwkZz4TfiYtzr3Zgh4bKa4Y4ZovJUmYLgMTgY5R4eBHrMrVfPRDrKfHmVMQitxmPrQpxTnGropFXHgo",
  "key36": "uEBbUuuYWMeYVv5bZn6rwjDYkQpFj97oeqjHw3PCWFPor9KE8XUMVfB8XLH1o9DVmnJ1MoBW5xbpkVntjMCowSK",
  "key37": "3mor4cGwc6mqmMbjnHdJkjh9MgPXMxRSegkMMUtUarKLBYdbbuoPQqT89Axi4UKBUUPAKudT5sh9Zx51DM3xrHRx"
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
