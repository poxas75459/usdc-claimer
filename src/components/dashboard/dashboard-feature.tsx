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
    "qegYdrf99L4DUWQRUW2Jo3GPHd2vmVPjDDQWwbMt9C4DxgywRRUWovgXjvbrxjfyPo1eYyVXwdzc4LXU3mPx3RW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n4F6nXqpbnRbibmwJvYZmBgDpSy2ADUP1qhfhKTcBhAFgsDu6HLcdTpYsL2jJBcXNutnP5DqS4vhJLLGufPxgzq",
  "key1": "g625XEPZfaxbNARWwrzPztKaor7yBh7PbkePnbuy3ZEurWzBygP8yV3RTAoDpgQKkkezejzUx5iAYZdjogocvnR",
  "key2": "3Wt3Lot9x5tn89gHCtpNKTNBZy62R4hnir3hNzF7SzNmPqBuWXwKHa4Tq9xpZp9beP1bCKJ7sa5d3j8y28fhNyYm",
  "key3": "2UCWcgEP2AtrD7F6Qy6h5KUPbkTnzkgHTbfaP12aFrhw1mHSrHZ8mmEcRENF3MVNP956Ptxa89PURFgyQw9DWcUH",
  "key4": "oBtJwZ4E6if2YZfLkAAAL8DPKGkVoS6FbusMp1j6osbYD1qRHhEDMCqLzmFKB9NwE83XFSniHMZcnzdauTLxUB2",
  "key5": "m9ETBpNGfEJxa1evSFQo1DP4LBU1554meuqnu2UimULDce9jBwEZ8QEvVSjWJHwJzGEYRKBBecsBvfNrcEGJ2ri",
  "key6": "T67UtGasQqFXKYLdKWzB5F6T6LQ9WEXLSzJQCDVXFET22C5ifsiP1L9RGUAQZGhzfjW1wj5e8NfRVDRhZhPpNMf",
  "key7": "328hbhvCsxkgyP7bHWQ32ZNnY5h2eXbCNnTSwcbNqA1Q8phXgNEkvVNzABNdvaNJoMEZWABn9FWeSJbm2SAwbBjy",
  "key8": "aGJxMNMHs6JDk9cKUTQkPMap5cQmz3owQYsH8zbpUnGkeRzzt2JtBpnUhvPyWNR8VmrsG3EtCwwoFWbGYS3hYLJ",
  "key9": "4VRXhM1g7MVAfanD7iFvjNT3oLzYXeRHzqgfB5aQEpe51zw4JBHm94UzHRRebuvGukcYoApjj3ZXY78ze7ZFhrPA",
  "key10": "3UMA8JpfFjHzpeUyWgRXnA2qfYE4txFVZqLThx2p5vyUiy8u8RbsqjiLuFZZwNWMgngZpqpB9azBXkU4WKNVVYJW",
  "key11": "ra2kYJtWw2Gy1CZEeZyiuZKJCNzhzfTq6bQTNNLysM7VUS91g2DzkySgCq6nW1eJ4Um6YeECybSZWsQyc2zkDVT",
  "key12": "2uGZsUXcyqraifEdRVpbVMqkp1NR39gr597iYNfSCvXfV7DGAiRRgg82uCf7ibzqRCgyPK5qpipS4EDL3ZDQZhJd",
  "key13": "5SMsbJQkaE52z2vvoitV4WwDGjtGMsPhtSzozQvDVTg5Sw2WT7Z3aHDTAbVr96P2TVsGeY6csjJRVzLHn6CvrLfY",
  "key14": "2q6dRHSp8v6wjL3kDt5xWTz4bSLHPXvFhjiWZGucY9qDUfC3c6zWUB4xmQDv2NEF7KyneyoxiL6iFefFbLtUjD11",
  "key15": "2PQKaj6NsQkpL29LBbeGXqFMsoewbU53r5BHdHKJLecDznFTHnKLTRVvNfYgWD7FnSu5evAtG7uHWQGzkkBrX492",
  "key16": "4P7v2UFEPEokAuNbq3CGNbPi96y4YLyU3tmaXSdtiG6SLnQ1wJ1TkLW58YTDDzTSqVELpUj7zW7ZtXP9vQyrFKbj",
  "key17": "3K3UDMWo1pbfB9nRBJj6nhVc9YkR31EcdxrNRKE8kbSxcHGaL5QFAez2kM3AsRqzWfoP7qJi9HhB3LBC1MtE5TrR",
  "key18": "5gHzrMN25XNUVii3KDD9vV4jWdrdKrL3NEwDKQtwgTBNzefCSaJt8oPtvypNiRRYaez8BiPLrmmNm7BxNBz1ekb4",
  "key19": "3y7Z58ndQw5daABmVfxM6fVNUYcb3LZptyhJgQBtkdZjhzuBMnddZdxJCT5JoGtZKpxo2Mr5wrZ5MHH4sXGbCqzF",
  "key20": "2J92oiiM5fEBDvqVTZ9Xk2HnG4nLkgAzxmREgyWXCmJPg2fF4ZjHYsqfHm68PSVYUctmvSFdW82zdZ3fnGcKxfi7",
  "key21": "y6s8vmYDmUV1cDcpqoz3Kiv6ktsbbC9mW4trnYMuUJFS952wGtauYuYeMGtmSvtGMXnGH6YB7rBjT9xMhmwCXU2",
  "key22": "3hCdVCwLUum9sWGtBuLFaKCabCSQK2PKCEXX2Q26QMjiwUUtAJEE1TNF1uzytDu1FLSUgRtu86hHksMj1rXsRtzm",
  "key23": "62pMjkCZpKvRKnnFf2WpodBcrdKFzq6j9KZ6YsDx8MTh4mCVFPhYhYxsKRnWELD2VCksJMP9jnqGzdEimXjuXKBr",
  "key24": "5Cs52eQh57QFv8oZEb96tXnPieP5PDvqvhd38C3ao1rvKVYE2Tm6TSMmGT9QeZtqBheW375eA4yQ4L4xue4UBSat",
  "key25": "5AdYQfPZMY7V48op8QGkX5H7oaLCn9t1hMbWp4YX545rz5CtYLYDJTm87bC4pTXpV8ksbUXXP6ymnq93GLdwsq43",
  "key26": "2TrG6FjHPZZTVP5vbF5r86Ni4EYK2diixgcp6hVG5rfCBcbU5Bp4RNbNfGeHbiAPd1DBKks2GfC25ux8LoXwWYtq",
  "key27": "452CWMgSsB9o4EUN4AYgU5GJjTLKJkJXmGj8U33C9HT2rvrAoMJdHuaaqryyLvtm9EwFfR2jdTjLmLo8WimfJB7i",
  "key28": "2btBuBqQhaZcURNiHJzJLcwMSMojXpMqmhmyRc33EMrhkNV3e2vKS4PmCDfrt3pn9PNjx7hBZn51Uhxt4m3XQjwo",
  "key29": "c5Tnw68F12LtoXhU8ACjQ9gs4zzohYbhMxgrCLTJfRCf2usRtqubQexbmJdcPbA1p9fDGQ4WcvP2aD7ZTAzPduz",
  "key30": "2J2NXZCKGe9UzFFRaMFSddYyNn5rWXKVpCNpUvterGhTKFM6Fi3gEJLMBNuuakTKuo1ze3uAMzi6ASpuKaYHADam",
  "key31": "2eJ3JZzJ6k5wjBU8jJfCgEaZnZGJ7WSHADdyQDat2TiDA6KeqwN2acqwSZg7Zpg6R5545rsqUpKwJF2s6WuS9NTd",
  "key32": "5md5NJESxeM7sJq48DTRsVZpqB9ib2EM9BXpWDrZsgznRYcF2J1Xv2Yfhoyrt9qPYP2KSzZWVBYbvGde6f7tALzc",
  "key33": "3We2LraXraQhS2jXfzKeWF64AfQ9U3EFbn5g3pwQiWiXWihaJyczWmTYdHmHB4RamHATAJMcTT1Y5MZsVutZdsXR",
  "key34": "67L1k4eZphELBgvHxPffVBRBnBRLsZpUN7cR7LxxGwohv3ji2UXjXW1YW3SYEpnZDHpb5XagW4oNur8XUPirYfAH",
  "key35": "ZDXrpog4q5npAHcMgXTtGUZJ2vdxjQp94fi7C1Fj8wSNQ3YoLHCVkVETHBehMN1pStBorbMxE3Pfay3dkzuXfMq",
  "key36": "49ZCvjZFrvkPmNGHb83waZhRtnHJeZtM3Q9eYza4cnoyecdzcpENidFzt9wypWRi6TYkbt6G4FHYVWgk8Kw6P6UB",
  "key37": "2UQRvp36SgMDCHAL1gguC8HbmFPwxZK4GdUSqa3QL7LaTayMNfe2pssJQ5vrSr4W1a3uUpk8hEfiTFZ89wodPzE2",
  "key38": "21pqemg5RaYvWjMfTxdynzhuPyEHWeoPibr8paVWejqSPnLXY5STFRACWDUMMaUiD21XFSCGDw18XEsYm6X595LG",
  "key39": "GgTtKKBULuwEDjaNLDJUfAazzYsw3LzL7r6RC8TyyLBC5GQUcYDzHqu6PUf6483Mxf886hzG5KMCTsXT8F54nis",
  "key40": "P9komu9UdYqwCMuZJU1EhCT7WbargFxxZTyj99QiSEwjBizE3SykAQ9fDWBzfqk7VsykqyHwqb78oZERpzE7LGu",
  "key41": "rgVaUQqHU6JuFhndyYSjoyicvoa3APYJzUwu3LGrhb5xBikfc4WErCTJ7LELHrout9w7qRqi1LeDcDVQKqs5FCz",
  "key42": "5SfYaqcc4eibsyDN6ezwrVZE1AQ48RTj6eobHNvRodC3uDJqNBqt95WUoCgS5xog2pBoiUD3tcK8bMeB8suQMKA7",
  "key43": "APkPG7gwEymQPYbhZiWFbYJ61rWkRdQwUy7sfwiFBHPi3uQnSNmbssmdFEMe1BJVUCUD3K6g2xoHG6ocy9snp3K"
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
