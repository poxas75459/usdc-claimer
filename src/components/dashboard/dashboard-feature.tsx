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
    "k2V8i9GciregG1B8pV9mNQ9YQ3rh58kwcYVRPfehpjycZ9x51Ax6422GRyRjg5npjdx2L9KwCirRoJvR6bo9UrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mJa7B3t5wxZXKNGHTkPW1Q8HYm4QKg944CvxYfzoBv2D5z81yoxBDRKLvFPWaScYVdsUWpJ7QoKMvtJt2U4WP2C",
  "key1": "2py9husfXvvruXKDVvKaKHnMCyC4JhH86BY4L5bh8SdrzAGtPJuNHcspdFxTHexNBWfBWB8sckh9VFFecJa2RF1C",
  "key2": "bsQnd9N5mYPvgVM6C3XWPXKNnkcjdUyopZ4VQE8Vp7zqqv1587xtq4AHyXgUzkYCtYzy1SXtNDxanPRux6HmTsE",
  "key3": "4Kn4FCgVGtnrVB1aenMXYMnJ7WArgPdrG42DT41zLseaeoW7JAjLHfvhBC2bqZX7CPbLFxqYuVG1aGCRKsL4SQi2",
  "key4": "4oz82bSEH6for5zH48UEGvgAuCf5xyG8YKQSP3QdPL9P4Y2b9nigCxKD2niMWUZk1Fm1GQvB24s16NLWiuNos9j",
  "key5": "4W33NVZvonXXMiF72MRasLDZgXdaAL1wN88jAbHtJu5g5q4dtSrdT22cipRNtqZUPV1NjrcLNqfW1dpRdiVWAma3",
  "key6": "62shShuzjKKwLxjFLgVVRFuqXZ9SaFGqbAXkJ5dQQQGvuZL393wTWGV2oNLP89FmeTDJFPKf4EtP4H4cpqcy2FoF",
  "key7": "5gXhh6X99bjHXVEp5hrjde94Krv2sRxEzG8ZjJBsqeWsMgewmapAwR4b9DrRwoMcfdsSKrkz1HM4ERxvo3PKaZ54",
  "key8": "3UkrMCjfe1MAxFVp34ALpHVM1Q8pQ5KPJgjY8amDbZ1hVPnRSMaCErzAYFikRNL9Bxw4nHEnJmNVi4FCqmjzQJqf",
  "key9": "hryY3hGJc8J1aHK2t7JmMdHVK5hX2WsJF36eXKHyN4fsmDDQdRqn8g1jxjrusUpyEtbiG3KZEW9AWkEnTg3Fihn",
  "key10": "5q3GgY5NuyBW9i1mGodSsvt8UcgGNkPCRVhr7RAjAhZdVqrJqV3yhCnmMxstnE5E7JE9ourvvkqun7UqoNVhNkuP",
  "key11": "4Tpze2q7jArT6zKNwLzPsVGdmDE74LUSyp3J5TnDggJyhnZnKdizx2S94F1D65qPdr8qhd6hbThXCyen8PZQhGBS",
  "key12": "fiH3WPPgscUy8QPj6fz4upLf2NUh3KEcrfHxAoyN3t5dd6SrY9ZCZ4DP9THVkieGfUZUsXWgSTLUQidVPa1rJC9",
  "key13": "4V1BPMHy9wp5vbcBthoYWK2dZQdET2AjuhR6jipZ2quuGGGCz8HLiLQrxUmiY3Kb1EmmsCjBGBrBWvdRMxo9EPwk",
  "key14": "26RQMvcnFcHgyAoJ8AA2aqBTRV2nycRigi25mogcNavm54Em6awTX9XsbgsRVd6wae9jqUAj9Ph4JqHrkwLn9apA",
  "key15": "4oqjSrBBxdUkEdB9P74qJhPk6RBEeCyFWVxWmrUFGq6bqC8wmiodPPkGyPBNfnwz121xoaWgtHz8RasKQPuPatZw",
  "key16": "5PzqL2nxkn9bhMiL6uCNmkJKmSkaJNbwYnTmmo1rRxpQL6rnDBdU7R7ZJLsqWUgWUUQrj3qSBXf5bVJtkkQn1H82",
  "key17": "35o13iQrjJca7ofioNehVfzYc3b9enjozSDzJr6HGMdSQC13QVErMWtotrj6NjQhEfK54qpUJ4QatSbKufZnjvNg",
  "key18": "2kvAXezZ9c4NrW4RBKGJ7u25cf9b47jkQP1SKWqPCaB5FLjZiH6i3UiwrPFGxbbKtBwui5M6K9pNYEV1K66i4foC",
  "key19": "39jKux73YWBdFNusrD5RxDdxeaagv1un4M8dhsrTC2wdKd4HPQMjjDfX8QKuceAky6JSE6mQZdq9jSDEoaFvQKKU",
  "key20": "vbvNmcDModQhme5aUEpicgJZAr6FhFxQdL23rM4a4pDMPu8wDnmACRnxPmQb2CYHXhacTpsRfWYh9gDNw5454x5",
  "key21": "3axJkM6RVvtqYbHVgKEK1yqkWeqnk2AKpQacdGe6SWRHYishbmG5xCGTwUagEZ6vMFRAcsnShoka7YxjCxKgUKqm",
  "key22": "SsUvvpzukTcBEVY3r4zDP6XkGT2m8KWsxt545w2AKVtX8AYKmk7NsL64CRmujM68xZuibz6H7PW8QTY4QPd8Gu3",
  "key23": "SidjjxKRtzVB8tsfHsx3pUR2ecDxm86Ktj7XTda4ws3yFDHAgn5xqCZiLeeoRhc2WwtDPENzDMi1LBAzyk3JLXh",
  "key24": "5ThsGdZiqyDYVQqCHm6VeGydZ69ri7FsBWNLHDUSz63VK5bdDQwfBjFoZUBij9xaAghA3mZt7zMftyYtsoRZ4YdC",
  "key25": "275qqa5bpDY6W4F4V7T3sadmrZWUvHvkqXuSUzkvvuTZLqJhsc59KPh8Viz557ZrEotVrPiW1CtXK8Ae3PJt5Kix",
  "key26": "3XNLVem5AKLv8oEWmA63MdCXJrmFU4LQdX3rcnyfyrrR2a5FvGmwHWikpSTvc8Ge3PAXiBUEhzAYGqQyngtHoWkq",
  "key27": "dezj8Xokc1cQUQJj9rSU5zxRjwGh3nA7aZbmBkXuSYxyRCRd8Qhj2afg7HWn5GX5koHFwQ5TUFCnB7qcktzwNeb",
  "key28": "5yNZ67LLirFyvi8iTFE5h5CP4NJiYFWJHCTAE6uTaFn8GiDNC9MoWhhXYbexqaeB4ofF4p4q4Mz4i4iXy1vGAKMx",
  "key29": "428m2jQUre2YQFbVgf3ze5E7xTc67jS5EyDKLDJAzH8CTo8rddziyzWtABRYFfLCnf2koqQNLJbT7Zj2mVAD1YQm",
  "key30": "WzD12LAvfnXNo6p5d4RhQpqLqvMvkyX64BXthhEUUVPveiQaK11nHgP8acg8y8mjtYGCKds6psRqtsYny1unfyq",
  "key31": "2dZYaDYeDum39ptVW54rFVQRqYrANoB95nZaGzSMEShLrW5fJNJ7irTvGAt1U8qVi45sUFeTx6pyAKqPLuxioYcZ",
  "key32": "MzjC5kQe9H1hvEx1z8KU4SN5g4TN2zNaJLUvTx5ZSTjNGgQFc1cJvhW8ozL95hZWTh1baxWa9rVG1ugftdXRy5x"
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
