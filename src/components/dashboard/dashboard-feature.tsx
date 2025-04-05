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
    "4ryYtAXkkDU5jaK82u2KYCHJDydAwyQSfHkwAogwCec5o9kqHWCjaNtqpTufz2VBsBgAR7cBYeN7Vk6tNDH7acCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53vYajjnpoLan7bfW8GbeE43C6u87UKzxHShs8qeqzLY6jqLc7XiX2XcAZwBDsXJmgBoTv4KQDrow2ERfDuTBQf4",
  "key1": "5Zh5W6F5XwTKUx2Q2aJySgd1hEQseDKG9evswwk2sHKgZaWgfr3ukPiDu4ePmiM1mAs4TUVr5wZsr7KRsW4hFRDw",
  "key2": "1JugAcXKDKfNwZcDYK8TGyp7PEwU1ptLZG9py1qZuqWj9w8FW32CSZ6uWuLJv2KcWkr6TaeUeZq7XvZs8odmhR",
  "key3": "2bfFwhFAWd3Ra5S1M3MrGkBcZJ13A1iuYoyMX4jofnLHJj8dBZrbXa1XdpWZpojcE62kMPRfVCGGpBeXKdyWzGBc",
  "key4": "yjo1Bp2Yov9fSDqYRuNnCiURQYw1gvoY83zKn136GyD6DyM3s13FEX9vkbjZ8iWAahkBtytNnVJjCNzo7wZRY59",
  "key5": "2VsYJuQ5d9Jx5LTF6kyr4SpyA7W7wx6ERuVxMzLGxTpHwoBfaJ5jwrvPQei1cTTB4qWnDKUuyMERgD6Bti5mb57y",
  "key6": "5U4jN9vGNuPxFouEbUeBYD2gwrPkCKgKk6it766iivfLRm8478eo7AC1xa825cGxuzbnjpvmDJAayjV3fSw2batD",
  "key7": "2EVTsSHtg4XfH6crrdymHpNKv2FGtN33JT5N92A9AgbdmC6mbZ25aYDsXWyhCGZVPu3vbRGzgtqmcuGqk8TJsq5M",
  "key8": "2Fru7v1LEvBr7x3ZFmSj5y2aCjGB1PQ7f6avPXk2SgjxEbRfRb64xPiYGDdHgwc7ha4b2GbFm7YhN6zohHsgnkMk",
  "key9": "3EnY21q1gNXfA99j4mfmd4otHn6jF6mm7McXqtzih4T4y6Z1UxnXfreS6yk33As9D7W8FjvBYqf4VgbAjoBiWFcZ",
  "key10": "33KPB8SfrfCAjGrdN7rf864bKwtLFTqq2GQB8LcB5cpsDT25z8Wx9FrQSQLaXmt2qVPneZNx7j32tWZS2RnqKcuf",
  "key11": "4fESyaXUYnfNAJmnCTXZoBUdtcENdAhea3zqacU3CChQmXXWzPMMiaByryWUk9ZML2sRfcw6cJTi3Wmko9QfCM42",
  "key12": "WEJDtsn7SpRktDE7MenTaudejSzfRSeD3DixMVjXTDzDGLmqJpS3RpB4T8UgQ7qPCpbWXfqiJ7viDR5B4uY9wpj",
  "key13": "4QmXttT5fTTgKBASbKFN4dBgyVKdaGkuARoc6We2wCnTHuViHbyB4oyPUXA6cJsN6uPWGph8a9okmhFrAnuoCDgK",
  "key14": "42P4E4HGcqH8DL6yDFW6yDG8CQGa2VmvdEhk2K8cdMrdZpBerfqBRiqzSTYDjqwW3scZFbivDqmtkzGBMdKeUmvb",
  "key15": "585TUXwqp5sSVh12Ra422PcV7LPe5MDR9m5edtR9Nc6aA4VagSockvGoU2r2NyHpDEtWe6c7AXyQh9PGVhN7CQK7",
  "key16": "2dE333NJAbrUb1ZyhgzWgsADdfrKQXvCZtXVNts5h2RrKHsMCkxkA2bPby453XW6Wpz8mGNvnNinchrKcmFqGo4R",
  "key17": "4ZmyoMWj2mQamG7uek7VPPee1adMoyNqjsrE53gW81roaqzkG9amHxMdWbFmYhrYX18cnY9ZTteEtxifhc4ferht",
  "key18": "Pj854CBccc9zg2btdVgWx1BVggBiphKEbfYa5kMWiLXRz2cW2MCBVArYrkYY4fpBcrZnzgohJiWC1pZRUWwpEtG",
  "key19": "519q2ywmkz1igBk9xsKnXZ2wdqnHCmRoud18o6q3djBooAgXYk47cuEqjp3JHSaLVcqKTA3c2dA3kpUjKshqxHV1",
  "key20": "4Fusy1jFhQz2UYiEtPrDpnyjYy93TqSgVRbPiRb8XgyaMiCPnyjw5Z216WpsseghRVUGeeoGiXMnLCu3GSWSPBbK",
  "key21": "3GNZ9hLYKTFpyPigwnmvCtM2dJkvXKUYokiWvBLgFk4KCdUbpyJ9RQww5HoaRdkQe7nna4icdSFBc2RHqzFGuiEw",
  "key22": "gbydjDhbwR2495v7ThqstKRDNULg7CuXuaWnFbp5R5RiGTCVRg6SzyLsfXSUnEuCPyoDpJi1oAPoawtiQSFzpF9",
  "key23": "ht5ZhtbnLZHRw4RcGTV4T4z2k1WYCCcvHw369LVfet8vjJtC2NaPji2VrcCFqrQV4Am2jWrNUHPGYQwg7zjthBf",
  "key24": "3XJM36x4MREEHa2hzkvuwuLgefpqsuQw85KKTcQBrAcrov5iW7E42LqYz7ccu5zDeyvkoHpToATQfCFAPSYo3Nbt",
  "key25": "4mWDAAWHntkf2P8tEtwEnGX3droqG8hYvcsaWPzfzMuL9uq4EeZSJD4MmN1se1GBgDD2dE6Ba2EaH67eyuuSfY63",
  "key26": "4RrYAZ4S6fhtHUkBn8vr4vwswigsHvpYiwHVRNEL4duj3Vvhadwjkv795RncNSaosaVpv2TLa1TztibwjQqhVdmc",
  "key27": "2a3dFWTUnsSKD1eZbW1P8D6YwPCpMqoc7qVHmUjvFoqugrfHdvuVATa2ciAE8o4BL4bXiD7oyDx6LyUydUzWsS9P",
  "key28": "5RYJZNCRdnmAd3iUGjmJtkCaCg7zkfMvZctVwGy17BTdEw6t7MBoMouZh9rCoZgg7TJ5LmgaLagVsEsYssS3JmPX",
  "key29": "384epgwDqip9sgvA4D9yRW1AcEseu9XoZuJRmU23SwMmXi2Vkmjsau6iu4BxBhaaXyCxyVfyB9jVyukWkGcW2xGu",
  "key30": "4iuFMLsRfpzzE7522gGyomyTBJyjDdfdZSi5HkGxgzMPQ8yC1tHH4dMiEzP3KRhVkUhog6eR8D84vQrXynycg6DL",
  "key31": "3arZmEwfU4cM7HZW1bQG4zeSU7uQibwJC7rc5YccKWiGXsMJvhHGsuqSsuTbmBTLLmvqkkEBi189XYEUpCeuNF7e",
  "key32": "54ieV8TFpugBQEGyymB5qASt71QZTvkxQXgWfXJMygxrQWmMd8osy8foKj6UuhJsdYSJ9t6oWwPBeo4ZGywsV82D",
  "key33": "6YLCLB71ctxSeU1Xve6dYhSF3GdAFqhGjicTDYpVxVea8cQaszGmPeV2NtsQ82aV9HN8aoYXZMmA3iHdbKRyGxu",
  "key34": "CxXkioXGmdDq84gDzxRxC9MukdRgn8v5s91N2EBsRp1Unzvdgm3qoPcYxt5M3h9JGDEK6W1uzH14rHVRRHzTJhY",
  "key35": "45LJNb3CugfRBQ4xrbxMRAsW3HKN2W8Q9sMfu8Zx7pKTW3XDsJ3NacXhJkbWZKNnbTj95DWLrCSa5jAZXPjtUkck",
  "key36": "66yFUTVGYKsd4Sv9c5acmWGw46taKhbBhi12nEMeTqUDebeDSsMYsztAsFVywKC79HTpbJJM4hXoH32DvMiVbvaY"
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
