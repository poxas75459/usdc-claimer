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
    "3zThc4gRoeWhg6xDX2QH1yvVSzb6GhmKB7S9TLWViJjxqFVehPzR14JGyEuasviaPgL8ZR8fCk8foGKTEs1Zz4Km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aZbhHBbirc7HHNmpB6BwBhgYR62Nq2LNUh8CNr9BsBCHqT4UDxX8mcAXd8Nxy3yp8hKBczX3npcmaVKE6bZSoVT",
  "key1": "3uviknVt2zrVDD9m2n29CGrg3p8q7kzCAp1rbY5mGv3rJAqZ6SknW8h4J3dDT9FPxiKEpszgD3oXQp6czhysvdPM",
  "key2": "3WzLm24vJZzUK2D9i5mBdbkSrynqrvnktACRiHu8raoGhehjD2xN5yhqcffh9m3tDkS1UTkM6MB7jZH5FUiSvGc4",
  "key3": "2Scu4vqhcEDUxvPqtnwNWKJq4SozZubUbCWhuFzyRknLtmG4ECsBYKxTkZkrwywpVBzftdohqEiodxRDRS73indf",
  "key4": "5WTiDvKxEKqiC3H1TqqT5dviXWF95YDn9Y2Xxy2Avkd74gUGQ9JAVbbYjw58FHGmA7q42mmBk5pA31JJBb9CnvFd",
  "key5": "2kNuvLj8oMh3nro8HVL4G9vTk5rTEQz1x4Pd5eBVp8GKYANCZhkAKaNX2GBNXmUyR8fkGVJaGXwkMCCEvpfzKf8M",
  "key6": "2FRcWPCK7xWCHM5cVcLzB78qGrDtHWTLMtXowaqJ4Be3UvfM1FrbbPrV3nhrh1TN1LYLDFbBXgk44DoBJfgJAEDa",
  "key7": "fvzwnHKNx8csXP7MJWFMGqjiMMV5YkVxB8Juy2BxmWSJAJ38XAMohZTXVj9PTkh3ujdy7ku8WVuqf3GuVZ1T9R6",
  "key8": "gExP7D1ZmqvNQLhK4KVywu2jDbaH1aLtMJ8vX7Bm2xc9XpBwHkQmLsVCewWtQvsxmSMkvMsmxLHYRgxiFC1Pwt4",
  "key9": "31mey97FC1y5yhheU7SX27cLTpF5UC2w7y9yPhZgtuwrWEV7qoEYNuexXtqbkPAmJczRDFosyzKHTobaxPGfdQMx",
  "key10": "5m4GSK8abp93qajTBwMebWk7SymeKEM9fLQBoUdyVVUoBHP45DY4dZqW3J7VsaEuiUD3wsdoXmNufh6QmRAPqiiH",
  "key11": "23WYmjhicPSpigBEZEvKW6wUqdWnBBMqeMaLUoCcf44RLGmxodgRzreRqRjwb151hVTfGGh4VGfWffi4jvs4HCuU",
  "key12": "KbkG84DxXMcuwi8VfYc7duhUw79tzD4Fut2GepoPwYeP4dzLuYmMHTcJxq7BGsfSsMz1G1pKNTbBZ8ioCAK8Ro7",
  "key13": "4u5ZAVt1F5nP8z5ih3mybet9CNUAZK8f4UQFL8KjJRR1SQHXybJMBR38K368FtMUfKFF5TcR5oBUPPc6f2EZNPq3",
  "key14": "Fq6f6YNbSg5uvTewZBDYusgvAMfFBQGw3RELBqKxqZ8TMXX6kuexPgPFJc1xR42uwdnFmEFit6G5VV18bhcvvxc",
  "key15": "4JZTkfAyvhx1BYZJTBocqJhdKKdFzvgCZekpnwFe86VeGXrucBy16LbXfYzPtRUK2AgaDEy4PC26brLv5hNFA6Rd",
  "key16": "v9b6Rw6utVvHpbvjUPwZiHFmJ3U5pgAD1sHLcpxrkEpvEX9vuXXWx8R9yXhkUdpGVpfD5sPeW4w1gQw9wRoWd3m",
  "key17": "2xseHoqyiQKhHR9tyYohxspVe25QGa6em5aYvJZQdtraejc4dLyvs71uwVozoYwFnCRBFY3coBjK5XrHuBwJbVoY",
  "key18": "5LK2cU15J3b5RRUUSknJr2LAqnpgZgk3z3B7Mud3JrrzMWRtZKKFFGnfsVbD3BJSfNibBuyrxpZW7T94cdUeik6t",
  "key19": "2uvcyrNWmErYGDF5pToDqrcEHQnBJRiXmtWuqtguzTPRJKh7gYWgVNv5exHxfCfzwaCSR9b1muytuck9EDyNNCwb",
  "key20": "2ph2UofLuzQ5V4JgTHp31Cf4bGAGpAphE2iz8q7YWKssSxqiW2HuqVyAWwZfz7HBazksDntwxWb73jYW1Xv4EiuA",
  "key21": "3KZXvbPXGHwXSysBu5v1iUVdRKCREimMUZi6LGaW3yXSGP75uQzhuHEs2fMT7AfDAmjVK4B6cJ9MTfFo6fCAKUGT",
  "key22": "53t4PLmqwV6Y2bUVZuAvNZmMYc7PgqiatkXefEd1DggC8rot21K3YSG847L15XMUED3xGe66VHnWUoKiLpNb1Lbi",
  "key23": "5awdEJbuYAbSpMtL1agiAJy2pRN3Mz443zx1Uru2HPE8VRVmhE8Exi3uEZi51adcCRj3hgZEaJhmKGzkPbn94GXY",
  "key24": "DxW7hQjc4uGnXCxbN9s1xLmgVThjPY61dkf6j1egCoiNdTQ4L9Hm5zgzzKcL5yET4dyG7WyezMcGriVd5Ktnece",
  "key25": "3mzWZvStMTajiZAdCB9NM5PVCZhtXECsY9AZgGMCXfzec5nr6h2W7N34wp2v5aggmq4J1ArL9R2CQmWC2vsrXSQ1",
  "key26": "4HLa1b2FfJVPbZpY9LGy8CMsdotFQ5WERiBtbBLCAfCWL4o75TFhGHkxH4hwntiBFdbxu7V1Nwvzki2nQYufHtW7"
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
