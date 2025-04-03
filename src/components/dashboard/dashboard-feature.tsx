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
    "4XN7AkzpqghqqVf7dEFVpfzc9hLH8LXaWC79SP9HVizH3mqwsExpRYrTxkN2a4j3SfkH6qLvqqvfhei3t42bppAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWYjuZeRjyp1yHYRDkK95LWCvwSCRai7qQyVRM8CzNa4iksZxPoZPBQY3H2ETpbFGdJANybH4ooC2PiVVuwSf9s",
  "key1": "2FEmnzM3LsMwsZAKgvrNNKtuyKkdTyL71JJVjsw9774s7aZKU8hJZ1BaQBs5H7PBeZTaAjDzjie9aPqaxipmtkif",
  "key2": "3YMCdqAzCkDERXCnqXW6xGuM3SfuL7xmQ9M3BuwPBmi1yFQJ8i8HFZj66BAL68sJsjbV5JeYazf7iqNrgi9FaXDu",
  "key3": "4cfJgXgYpQKb99kgJazz6vnsk7CJdXjn8RvM9quXHF1pQwhYdSK2GVHt3kaQiXDbaGpcvgXV8GfTNRf6hFyUetke",
  "key4": "von9tzpsvahjHU1GS6QrZTtwihqwgJfXZTrz8YyCeModyDT4n6wjh4aRUbek8Bp4BWtRTNr6nLnoyVRV8bzyruF",
  "key5": "36RcEJpQjVou3mBCPvaDHFD7LyJ8bs4oJWPFYwKXqt2aPbdmooBZ2dCbC1Gg6pnfhSzqCDMHGmuzwPpEiE7iYGLN",
  "key6": "3TLB5kSgx7esvh1C4v2Sm273RQDb9DN7FwpwRqT4BXkdFvexDvYzUc5bCQNtQMArHvztsuLKAmeX7aRCs3unsFy9",
  "key7": "uWWKsuUF6UPCt5fecJ35kJdWTo1YipFpFok2vbZqB94Qm4aMhDxqEmWpxNodSnH6DyQCcGy9XXjXCFo3MkNTgYi",
  "key8": "33cJGc4MLhuQZd9hyVJJEuTkqnpBkLQViAEnXYnvHFCyjAA3uTTXFTahxytTN7Y8oecZuWrP4vLetbUUeMiYzdxw",
  "key9": "4DpD9JgknSnhkAjVw44NJJJgEyBQdURHFH1XNfFGPRoJixSHWZNVWcPvJfmZEdTEhsAjmGzjoX3Aw9pvjeP5C9Mp",
  "key10": "24VNRSXWGWamD3GZNq5EsQNar9kEKgiBjVtkrsF69utyJtkpWJbLmRj6eYBSzPM5xDxigLPYtHyn7QCx3q9GRMNx",
  "key11": "2snNTAzQq8qi6rzTP71SHamY1XqZ6aMx9xzf3w2zCZX4zp6eBdRGGyfAzBGK6a9cVMFKsopYy2JTb8oL7hgdDPrH",
  "key12": "3RJdHQNQkPhBYFH8NHur6qEyZrM6SMzDNXUonetto3SKf52qXuPHhibtFKpTx5hC6SprovxkskRY3iv4nmvDhKAU",
  "key13": "2wGKezbEGNnuyECKRJqFpBGncAq83wCSrraKseAqfh4PPL1eU4BVCYFERUgNi5EtrqkesSQrs99eW47mU7mxU4iT",
  "key14": "4rkQseMxEgQ76aL6pY4YJsh9zbY8wSPf5BChGCMpsUEowpPSLHnJNtM6juz1xu3XaZ62N1AA2d7yoi4VeMDC1Zex",
  "key15": "3FHThWxSamNAJp9GYjhWw7RCu1Dot54aG8fg9j597bS6QJbRgNaRxv3swSUERGAyWnwwgeCQQNQymVxtvuQWhJpK",
  "key16": "3iPKeHc5z2GVgw7FCUThpCqW7PypJ33qeyzRCLBVdDCaZ5ryoecMm1q6kELAV36Gx7miDVtjtUSrB92yCJs2PWh4",
  "key17": "tWyjd3zMYLoxW2Xe7Ah1XqHFRMr7nGJxWpRPBVsgvELtkhQRQ6ESFw2z9FZdwrhV8r6XY7DdYs4E6SLSvASGLBf",
  "key18": "w6VKe2rVTrQckjNeVh84BATM3ku34NPjk6SuUMH5Cm9SsmgCsENoPLGRiBmjAcHRYTrEyTy7uvqnZinKZ1pDgXe",
  "key19": "5ecYrp5Ge4eFMeeGSAhtX3XjGMSZxQhvQycD4ifxP8NNNoD3rjg5k9TtRqNS8RgJ9z7L7W5eNyrAvRumS4ibSWYT",
  "key20": "4oF8piKAY4Fns18y9hivyDMVyfZyAXXFyjxxYwu1YUpiZax8ammmkFCgRdM7s6Vni5Y9pzcbaLG9BfXJshSJbgG7",
  "key21": "fSGMMcRgFVDkvMpMbuVFm3Cd4eKR56J7aHTznvEUFFM2ifmRVeZboTGsyZ1beJSPivuAC4qbubksgw7ZmjCcFBP",
  "key22": "pumS6GYjhVPfpmrdkjN3j4fJKtcC5dpcCwSEftHmkQ1EhhWjn7n8QaMPTtTc98NBYkrb6K1xeYvDccKwvGNVA6Q",
  "key23": "3CW8JEpmwgCKYzKK6scfpEyCam4hqLy7UiEBfK1B5SbBqBoZY5cHgAW7b3C8Ss6wf7xV2JLUkDvqwbpVBFzc6drw",
  "key24": "ivhXmZwrer8A7iutBn5eLKjAEKLVCc45cybLQg3xftshT9U6Uzz7EaiUMZWLrGGgY52pmHouDb8GfT1UYSqbv3G",
  "key25": "4MrVh4s9EHuQmmmMx2uuAb7V1FJNv7bo2Ry6nRLb2S4F1Ty4CWapXmZDSPaymCvEzQjLWWjthnoSN849UMVioHmC",
  "key26": "2u8i6HwLYk2LUYzjFauyoUd9dWYaiNGu5wy6ULvyjboXbXkmrpnKLkDqcUQ2GxidodgY4XoeKwoX2UP6GVzkradA",
  "key27": "49THo7qXti3kJuy5NY6KKeTUiXhYDNpzUsdHvq8Pi9xf8xHJRCB4EE3EcyMS5qH5TbRnsx7Wgf8Hb8wHb4JpNu8u",
  "key28": "52qiHAVS26FRf6YQ56s344jRbv1nBW1V4Su2oNaLn6oqN36Dhn5qJqNsR9jffAuhNVZdMtt5rPKasQA8MCZET1TQ",
  "key29": "31An2LMZxJCchWBkmRU1RUNPiL3NxzPZKVDxgMQf9LaG2vqtsBYs5xDLm1EAg8ZuQzhFqLZaiWQ2KhZJbBZtuZ8u",
  "key30": "2nxhH9mGjfMeg9ncEAiJujm6zq8cANBC3rpz92nevUZS6ZdFSZSidZwNBbVSqN6rjsmUWv6WZkBm4YypLeNG2yrp",
  "key31": "65khEpo1ZfdxQD53hScj2QBgdiYjp59bGubLbnrcu5V28AQ94cobMDx5jaJjQmzhTeYfpJnH8qZNVfJGzP76GmeV",
  "key32": "2rjcvCiwbwXUnziBxRixdztc6uXTFVZDCvdhP7CiG27xzUgRyggsV85ns5nvRiZDrKCaxgdRxoD2jZ1HkCWDunzY",
  "key33": "64KNMLDe58Ezid2KziVSWTpH19x9cHdBAvUtDHSornH17tcbQHinUAVYLiXNQ6KcJkA1xNTkjDMiF7jo3Vub5X6t",
  "key34": "5w73yvmFB2c998b5sZRypcN35qVXEiqzL3hsZtt4U4uEbPwcLPW21ZiBc8XC6Lui1BA6F9HgKwWEn5HdbWoVZkJK",
  "key35": "425VVMJaDqNbJgXNPsutwrVv2BK6fgAbXMcBfbDsGA4SyC1QeYjNrNypZgjQFboPhXdaaWda1amVNApeMewmHhyw",
  "key36": "zSqUjiTJV9CnJHftqUEtvxjCXvEayHo5dgK5LaprsmLF8kQw7mDNXeSwQvBdqmYWCBX5wGDpj7GmWXwVqZwPgoC",
  "key37": "35Xf66ZzjvHWSHRtqTPjbWcLU4jriCeVpppzbW3SjNdw5iTBGywLaytzoBbkrSSvhzb3vKBvEtAV6UP1hcKLFtHB",
  "key38": "z3ahK6ZDtwvmPYbE2jFAy63B4c7Xe8aWDTaU73D5n6epNreiPNWiAyXu5AWtRvs4bLnjrxAanKYEN9wjLAfyY8L",
  "key39": "65qEZVDj257XL1wBE6eKYjCucn3eAbF1rkkZEXMXzk2hm6Ea7JrQD7U9aBWB54zf47HPhEAwwd2HA4zGjt9opZNJ",
  "key40": "2nbMnbtxtKVUa5833XpnwAJA9aC2s1JLtGm4Nh2TZRFt35E1Zoiy5WLiSD3ZDLxJLpVCrjbmB4jvks1uE1hT9MX6",
  "key41": "46oyKPVgn4cMEyzsvKKiJRgUWrvJWPEByndMEY3pvd5QAzR3tuXvJb5dA3FSxyTQPEBJdSjrUgSKiWw7kYcDYVWU",
  "key42": "4yMTJsmH6WTHes5tiqDguoUmFsdDHHkKHm6tshg7QSZJWTCSrHL8KmttW5FEMLNNBrWa2zDkr9VZNoJkRF43XHEN"
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
