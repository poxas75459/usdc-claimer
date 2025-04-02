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
    "4cTtfr8NY9iGukv5rNRrXUuVrJXEwVA5FXNX8gpyuwRpsRMGUJXUSRTvJHzuqahP65RiWJev34t2h7y1miRJtKuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Shg9smivrTqc9Ckp3Q1bpajeNCbiggPxAjiM986y2YsvcePkKcq8XaUcG6FsYqdTYYw7WRuy2Bk5KUPxeaau2zs",
  "key1": "21Jzn7YaXmT6Sab19aDpaNfvSZ2ES3EuhMHfpS3bhJYLEVR3KxEjmZ4VrmkUZA44f1zzfJeJHsbWfecpkoU1uMhM",
  "key2": "3TF2H5t1rZGotuYH976vnEYgTCYssXNmDuzEw1W11JAw9CnekM5sF33y5ejGMRttUZYodSo6qK3ioANGmB5zbZX6",
  "key3": "2FWMVexrH2c2N4oAXyauh8TZYThB2nR5UUxX7TzPmNiopPaGrX2yDM987kSzd3pBPXyShxZEubDa1NN7jyJ4KUF",
  "key4": "t8b98Ar5R6mqB7AXNvA5rKQJxTTNvEFnaeKu2Nt7FHkms5UTEwchkEosjdRLzTFd1heU1VSLuKS3tZJZR2KNRTD",
  "key5": "2vkadwXaHv5AriSzBZzpGbzyrC7tHxNsJw2gWjZoND19RAjFf1FkgZtne3TYAz3Yyth6A4GCfQu3DwS6YNotmpfB",
  "key6": "3sgLJ1zmNKM34R1YLGEtP2xzEsUyq2M4P1XXGFEe31BJmiFisGG4knv7s1vd3ESwjxcrgRPNeh7Hgwa3fV66wgZW",
  "key7": "CZ2RgcFvb7mb7VvozT4xGMi1k7ZZGnwfA9hrHypiCstnedy8RKev6zUMSVqnC78TUQ9q5gta1uQiZeUV27Y6Sa9",
  "key8": "aekJQzbADLB3CFtcUug2Q1femraCSFiyTe9CTf3D9PvRDdL5rrg7rR7diAgdFiueV3wGYvEQtBrF2Ckk4CRQYcb",
  "key9": "45jxfhzGNBsp5UuNFRsnJDbmFAY6ExfPo9ePBY49tPbRynW1gWXuWCM7hwr6F2sHue4MZWe1yg3ZVZsVJf7gMcWL",
  "key10": "3fMKs8nn8vDygGUC5gHBCSsUx561W86RYamJbgvJ74iut88THnmXgjXXgik5vHqFzcz8SA2bSbYzUE8aQ3RyuWN3",
  "key11": "4HK23Yx6JMGajBS8nWWKwSKCkizXWGBDPpp64zWd8E6eyDxcreFwpQUWe34wZSiHzucWWF7hwiDC2zKe5tsd3oGv",
  "key12": "63Ub1U2fDJZWnaHZb9asmrqBp5dX8utMBSsPq6nPW9zu9XhqHuJ8fHTSCaMsAyEUFkphJeXGiVWbm4fcY9mFrS2N",
  "key13": "5cTVcHdLh62ZxHhyMweUK9xBSn8DhZasrXBG8sFM1nLWXDwXndtzHhP2tqyDSGKqfMs4t2AP5myW2NgNnz3daPdU",
  "key14": "5BhWLUxi6DtbLhsVSKuzuQL2QouUmMFhp9SmxHn34AzGMN5idbjbt3eYjKoBfPV3FXuh5xHjCLvz8imELbeN2euq",
  "key15": "iuboSyzYkLWv7VwEG825DQEUJFb7xpJe3HHH8LcycgHqUP83dYGpbSg5pdoecDACjbeNmX34q3HNehhd6QypabL",
  "key16": "5LGXtLfhRmzGJc2hGox3fw7TJCBeABCicWQBVY47KFS1qZuSHBUk6V2p3oR7YfXJ6Te9KSDrRinrUMp7zT8CaJ2B",
  "key17": "2AnRftWagVA4AuKDcizDCRPJDXthe3HLYuZ7ApNCR6fZy5gyzfMRF43JUrDEydKpvrH83sUvVajy31GuqYjQqBkb",
  "key18": "3X67TV4pGiPSezHDBJrL6kc2b8JyuYhpNikNE6uU1bKEJ4WKuzKc8ZTcJwrBzszPWHnh8hxY18CifeoM58nSSeoa",
  "key19": "iWRnQR7HtU4HwuW74Z8AhzAZQmf3xPVwST2QGUNfvsGGbP6e7qB8YUwrCa9VZ8Xge5b6woB2r3DaS8rTjz7nsBf",
  "key20": "45d3ip4Couf2UGRwARNzaAW8ezCfu7AN1CNkaQwpjUkc4JV4NEgVWfjFrEQGZ28rnAhzUPmfoG5XNaLr8Uhinfw1",
  "key21": "4odotVr1gXhriAMaaxA4trxc26b1HEczyjTBARgiMXYK5pn3epcruGeSqgpQBJpG9YNVYvG1iAqB3wejXLQTUEif",
  "key22": "3r3KKK1GwJGfdrgLDNVyK4dy1BUjDPfL9hVP6pTnNSZoeaP2Xv6GeMu65Z5BrHJFxhcBn3JgJzi6CTczpa4dLFRq",
  "key23": "WCr4F75FvSerKcJp3iwkgCo99ZhH3ffZfnTE2JEQXKA1d2efTnZ5sq12pwwMDqmDzSXDBmkf2t4uts4XN1cxBhP",
  "key24": "5Cc4ziFpHuNvHRLhdonM269bCQae42qEsE4Vfzz836ptD5Tf2Xg2LGJAnnjLupuUViksHFiBUQmGRfd573axpu7J",
  "key25": "25vKgh8RXdVuq7oj5WXFfwTnaG5zLuX6kdLEvUEPi4XmUVHvRWjAhiRFYZFdT8yUic7eU3D9ZkaataD3BcdNr2Gw",
  "key26": "3Akabjf3wX5BeNPRmfvaDBjzwQRDqPWVNVeEMDL7uU2oMLBGRa2K7jw3hrPy5BLTu3TZTr4BHZf2c8tYqajZWnxY",
  "key27": "mNyWZffFzB6GkHXAUbn2m8CrmHSddeXjUvnRm29Bq7CuvTzBrdf3iRW9o6xyzLCAWcoiwRoVJ8ravKkMgzAuYdJ",
  "key28": "4oCAZbK35FwsB35jGqnZQuQ9UJrVGwGDQUVGvyjXRa7U7iL8ddmdBNYzpNshtWNp5dLk1y26kA8Lfxro4eLXiRG5",
  "key29": "3h6dBdLmozjyHzbgggJCzbp1KY68wzzFiTS8p8HLz7spPEp3GYvnm7nLgnH1C9eDYE1ZT6msFfHwxEbKH5vhSQ3u",
  "key30": "5fnmr1c3WtMk6PjySLX2mwz4ZCBnmxTzgNW71eQd6LJka3BBhMsfPCntmk1rMJrN1Yp5RMe4WUQxftYacPQnvnf7",
  "key31": "S8Zf48BXGPUvfituYuDC6fii5x72oZjSY3wgWPD6UdrZu7auqw8gSnyQgvaSJHogmw9ZQDTcWkToJzUZmQNn3mu",
  "key32": "2yUWEyw5kdAtzBJWfoGgYWjRdKFAEw22ytMnSpWo9AJj7pna5mjxmvhFLz7mWs9HBnSp68HvzqdTVgaMLQy8Xjo8",
  "key33": "2HSsEoL5m1tppp6MkrrmpUV88gSowunh5v9vFcuYuEtcjxbqRGXHxLkD259Whb7Vb9BSRSbq91Rhr4Hg9mpZkpPp",
  "key34": "29bVcd36gDJmr9YxU1CnHNoj6bD58F4NkAuYjfoAYGmwiN8Hq6KFJrrMZCjUJExVZMqAef1n4xKh6u2oP86kFgfR",
  "key35": "2yGwsMHqAznS8DtLwRkPYjfDyfmP6xfjKm8rWmd4dLtDDAVdKXycewndhtdWNnXzTHLupz33swfSjGxNWgcRw4XM",
  "key36": "365Z2BpsDT97jg5tcxjC2gxhkTaXVs1PemHq8TgQNJJoQ9Y9ce8pdLeHMfEQhR5hwssUJGiBkvjKUpDYrfw2izNy",
  "key37": "LQc4tL4YUhHQWAe7JAE1p4ufbp7WELnU9SeE1Kh5ByZLdSTt4t8ifnqn6EYnU5SFNhhmdgSJUepisd2CaoVAqsG",
  "key38": "3BYFDtDjQpdWzyzLV126MMcWFH497nQYEkQtNt6MWWuhHwdkSKUCA7ShNaXUA1pytPFfMrSaEKbRsRpe7JfNXLX7",
  "key39": "2BPs58eKoEL799rpaP1Sz3taVratG1Vo4N9dEkKgT8w3t7q7AFFNYzVsRYf2xa6GH1tub9yEf1sbdAgbnD2ShCou",
  "key40": "5YCDsrox3iEYUecKJhCaRTeAwi29Fndt82mwpnDdhqvxgeDFwGvSvrovLSH2Pk5PLHEp11pcgGHqwkMvL4mWhkW8",
  "key41": "5CxPeurkWq5Xc5EhB9uxNUhcCwiH5fHwCkaJ1UheKNsH6JTQdCfYXUPamdisUBgK6DdiNQzpqsKPNr5DR5WyBrHF",
  "key42": "5k4Td8kR9v7UoHENq7Wq1M6uwWhfFdaueM8E6t2ocJAWx5J2WV57ZWNM26NNvc2iiKCR6sohsGfA2TyPZQsXmMQA"
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
