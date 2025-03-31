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
    "62ake4J9uJoTzTJV6ED2tabAm1hhV2xcagjpxRDjHFkWioReU2gHKZeGcqSuBE4sCtcQCHUpvTois1krFspysSPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nfXV64WUV1vYFwEV4pH4dHWDo9wmYR9Rv2fjnkQWiZSUvgtMZ3TVnazsy91vpFdsfGEFC4qxisCBS1xdqDZfjDE",
  "key1": "RNhep9fawoXbUskZ7AkZPoBBeiXqTGtuSRhnsDTA5fVgyJa1MYe3eyXSwX6khgFbTKiNaFq5FEivkDdCgyXoJQn",
  "key2": "c46ZBgrH81PFVSctUjkcCh8HhHEJeBEb9xn5uK3xiMs2USVQrwFycNvt28GDYqkyuYi956h9w6dULcMaLjEdZ15",
  "key3": "3m5CQdfPfyP9JLv6Z7LDNGchKh13iUGocakUZ6ab9kj6LHLHbcpbfprBUu7N6X46SjHhGrTVmGw6Fi4itnRphG6f",
  "key4": "46mUNUUTWWEUbEQ9pA5RtiKq8GGqenWSy92vX53gut9qQFssTbiPX1yCPg8n7Q6bRfmqvo5coF2dFV67RnfUhFfN",
  "key5": "4y7irtfok1FiCMxP1PiHVms1NecXbTTuWfqyKbFT6JeFwTjTsEjWEjZNSRNGYuH8rf31EtQmRvcU9jw2shMbmHb4",
  "key6": "HiySUBUM3pZvM4hont1TnP4RL4637WMbhg44ZRr2gRLuRPkvwR3tCQy67uAKkVBYG3nmJqCdnPjd38KKeHzphb3",
  "key7": "4ThafS3PgWM3yDvvdUZt5y3W1NfgE1GgRgkmbVnWgSbnt12k8bquh1LsgVzSyPds8f4DhctBxYc135TsEBZgGJsk",
  "key8": "zJsw1YGjgVTsKG6DBbcb6q3AMCbDSBUuaegvyj7YSVjaR46F7F4G25skBo5BsHyLsN2e1oEbUAHvhTNWZ38WvoS",
  "key9": "WP3znq3ZQKSxKHM4hRpm7vTajHHz7GgzwmKs3BswCdDN21b3yeiu62WMpreYhnXTj61zmFebFxNJsskCKSTjD5A",
  "key10": "4iGPRzMPDJESTxN5WUVvkDEpAjArDPcLagRvdYknbKpRAHhjyiSjxa7EjTY21VKee7TDpDwCqo65VC5TrtXJWy7N",
  "key11": "4ychRkk6AvFLbFcDN38b3Kx4j1sZkgnTUqsg2wiPRgSM4LD5MisqiBkjrwbau36vcfAAftPDiyvgPb7RTdqtabHR",
  "key12": "2wf7Hy29HTQs9itavFNfWtmm4ntiBmM1hVa5BDyXv2qNrxfDSHQHXy9LEFZwfBdMXXKJQ4cnWqQEfUxkhMyfkT8z",
  "key13": "5zE1PFBQA899GTtcbxkH8Yy4ifewEA8ACju9sEApm4fkmytzvNVCcFeX6UVPXs22ayUwCY3UtrWEHhR1dzH8msfi",
  "key14": "51HUqjdvRcwLWmpD8EpLT4HVYc8zNrWxp7eKnxFn71usHQaQv5vXGYBctB59LgirBfKtXybty4yjWSQERkyxtzi5",
  "key15": "5ngfhVAKUaneRvqgUvjhiUhhUqUYQ6CfMMUkZmS6T1JXtmASDQhndrz93oG99kGXv4ZPV88zz9d5gAoUGZW8Ut6Z",
  "key16": "3QDixJmVTB2dKsAqXWtsCTyjvJH6tNBEGYjKscmswNvAs25GVVCGcAZJc5dMMq3pkjgo7JhttFuhFFWREhNG3Zjf",
  "key17": "23RQiabsby9oZVUDJjTphLYJmquFTtaHiUdj5PGM5prJedXWtK51LqtNzbYtzFmrctLWXsuCRkok7jWm4fWX6VLn",
  "key18": "wWUCbHZHN5Ww8aWUEz1WteJmqabb4DtdGsMsRwu6opeVczMPp8fqhUZd4KwGvGnLxGVMgEUj9PSgYVpcT5U1RnF",
  "key19": "3Xf6m5qLH2MJiXciEihPVSvoQ9q5jh7Yimqt7UsXKTnhURWXmwYFtrJHjDxjnJyKRRgKc3sjdwu8Ry5BnoyYEP2E",
  "key20": "3oKXaURpXgDuiEKyUPAeAZxnA5D6xFc9NKhYrcDcAr1P2coMnEaXS7pkUcVJnxQN6ks7DooEpdHLZxR89YBS1Q2u",
  "key21": "4zWV4uNYHPnxvCmm7th2DBBuvifu44PFzagStW25RsYziB97G81jZSg8hKBnWBEawakJp56GwXuA6aGgPJ7VozDK",
  "key22": "4MZWuV6r1kZSF2A2mxAHKVMfHaSYSqL61WNk9SqruzsRvBYnKUkz1wExmvbQcEei7yJDYxBQapqHSfgecjAdqdbd",
  "key23": "51J1rAuHs9aCgy8eWaMVXs32Q8gE8tS7PbpAxCVATrLuYCiQSpwobgFyjnJqcheHdAF5fvTcZ7bEACAfY386wH5T",
  "key24": "61siApa7CogSiwPb76YiEwQSugwK7MMeqrfh3RjBroNpFCATHEnTqW2AmiPVgQMjXFMm61cxRgtWg9U3BgHmFGu",
  "key25": "YgwkDYr4sCHMTTLxQmruYF7UuWEnpC8jbhm8CMcKV7MzGmsfWWbu5FT29tVr12gRP3rceb4P9ywtZrWzLQ7SrLQ",
  "key26": "2g2DsnsgSRh6jau8Rm4jj7VtnvYiNymbgwdRDbCRAPSHzFM4ajDrDGsosw5tGn2jVyQvN9nVMNeSD8aQChmfmJb1",
  "key27": "GNodC5BVjFaWPU2cxtwmYsnuGUUSNpdEGLnwQAkoLTNtewVFtP5SpukVJ1vWb1J3Wcr4Yy4jSuRHvizoYdNvtBm",
  "key28": "35YNkpqjwsfqqHuPigCcxJiQe1y8Hpfp7fKrmaNg3XKV5KRcj5Ps3SEsDK3ftVY7BNH1vBmCb7kEQkvJBhCWrokd",
  "key29": "4H38YdWpVNR1AKpLwN2JhonDXpWbgFnRhmNHKjp6GSzrpq3P1v2QbZEeauaUuzsrNQQknmVrooBdDFgLSCNVUSBZ",
  "key30": "2SGKgnwCXNHmoS6T8B3QLGzqd2NxTYqkf5MUAcC5tdWyPTwjP3tNFFvJYUdiLLdoQs7q3ab2TQMJoNNRw5Z1gvRV"
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
