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
    "2pjkfv4abrtjVXDSLB1MhAKrv5FKBTRjHWq7zYYmR9UWBoxziqkjjLGrvXnSeigpVyhCu4uJ3ga9hBqcFPfgMr92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPELDPAZW9GPRP4Dz7wUDHkHmWMo66jebRqDxrSWrjqa2qcpDfyMarULsd5ST5H38MaEuC1AdVN9CP2n1ujqU9Y",
  "key1": "2M7to1ok59eHSF1GaBMJeQ8A7L2ydZXT4UWmTLHTZFfuFp8M1evUDiNMmGuTqP7PqJvVtCygxC2pcW23bTzvgXvF",
  "key2": "37YpGXZoTtyJapPfEEZRv1VNaxUahHVMFV2D3ceDF85HBHXgMZM1QLaAFMtJATs3iM4fbS1NTRNkhehxBNN6dR5X",
  "key3": "5UagXcrAWtQ8PZN6HG5kyUMob9UYA723DtuSRWikLcL1PtKe52bauWB9kJPaaG983asTnb417GeRX4PiMM6X7AQz",
  "key4": "4aaWgX6m5WQQaWqJz5qU8Lm1mYvu2GLqkbhbMWbkJg2ErGuNXNaBYkMm28ok4acEWtfxWtnEADYNQ51sxjMwp8YR",
  "key5": "2d7aZnnjxgw3KryW5rCWaxWEbcEh4eAd5hrVDbeNd5xPNocvQWjhYBseYxMw99gHX4TB1ajmpqsGGhazWcBdyBfc",
  "key6": "4A2UheSVt8vcKgAgMxdxbg976bDjjsZfGgrEpxMyhQBAuem55DhUa8pvJXYTuxfZy6TUCuCRHujkKxsMKp6NHcBQ",
  "key7": "4XpLrBVbcLKHyJE2NyVjgTWWeknvQm8nfDMRGAHgCfrdGe4jCGD7cfopcoQiMSn7n59xQvgcCmgJXc4bTPgLk4t1",
  "key8": "2dMwAmt6Ets6xBYXqT8deBrsPCaAJ7211xXeiQ2g9FmDArTD8GLAisTezMquMNYzwv7kHzpkvgioU5y8eSPA9Zjc",
  "key9": "2zGgfS93Cpxc9A1YHXXRmzAZbtaaeU6L6UWDEzxYTna11yDKGriMNNzJPF3wZG8iMKdJAr9xKN6wD5dn5YjqrmxN",
  "key10": "cgap8oHg1MwomJXfVKrqEUYABq8fdEzMK6LUvTQeVrh1H69TqKfdrYCPWac6vrffP41XdZQUmaSg87ZtgQdc62U",
  "key11": "5xAndCyGBzQz2gKKYmQ1sq7AjnkedrBYNqueHzQQQWSwfxvWMwNwd7tMB7N2RDieKkuF3MRSRUJqivKXoZctzho3",
  "key12": "iymaE7gitAHGisYFcNmETj823k5F5UR9by2ghh8R8xWnxngzyUYZvDoaDTzmnywygKNwiG65xb9aeBfShJ5cowJ",
  "key13": "2tihzyFiN4NkHr9obBttjhwtSdxVGDvFfDiWcCd1iHYBzpTLoMonKaK7dKxp6Zfo6rUzdjq5shbQZ5vXyyazgm79",
  "key14": "4Q72SRPWR3vAhS8mRamBZshvxXw39scf13KxSPbeQYGQxxJsfTHebxJcHFFBdU77yvaiAP4cyeXif8Dj6Vde4u1X",
  "key15": "3Zfhf1pffqUsAYsiPpjJVJ4joizZJpLaMpCdEzHkpQ3X7txabyEph8my7k4Y3QuiHmj22Fn8CjfCgqRrU3XT837d",
  "key16": "2pswBXsp9RYwASh7GryaeCgcrk3V3m4NGqYMaUGPnPEmbWsjZwwfzXuiZr88EvAvgju2ifBdY1gT7ViuPrSmUyMC",
  "key17": "4XXU4Yq77CwJYWjWYpLrh9PMC8kboxjeXWv5zk9ybz5H9AwErKFbfCBbvYSHW1uiDs6XYnfLxiPtWZzqSshNV3Mb",
  "key18": "2TDXKm2H7g42f2kvYLrbppsuczXjBmi9UtxCcyUxP4UdFFF7oTJVAr4hMuwrRCi3ewgMwXDV1t1kUDjfNpAK17Cu",
  "key19": "o4ZMHdWdPsFfFqjWArXBDTjpcuc55HiSuzVi8kFyeSzxe9XQ4nTNgXjmTcLT8SQecDHA4nsivTx3QYo9avMuoNr",
  "key20": "3XYoHPZj6yXWHgCudz6FEGxpJXKc41qxwfNfqa2wzP1cQfq74CCQVPTopKqCRdsVEPcYzPvUGwxrcknTmUCo2fy2",
  "key21": "3MEnz6x7GMhhFu9JGqJAkY76RTLJcDdkQ8i26hWVAkoJiCPWSzsxLsJLCwRWRYjjX1qDYXyyXYDfZYUgTVcCVN83",
  "key22": "48xYn4nBJ4HeiE7Myj2PfgNGBDVtKDPQ7CUszA5WDRwtyHQZ6Vby3Wjy1r4iDCgHTPLDQwTLyZENZZ5T3d4QCYpz",
  "key23": "2Kav8w8R7e6NabvySXHNbqh6i8qkhBzEzSNrfiwLmZVmNoTvDmta1K8X8x7f5xFJhb9Eb6tsNVj9NXsSvFyCwMXv",
  "key24": "42Ex9chBBPFHP1qPPndm8CJm186UxzoUzCNYpGkn8pYVS7hE4Xv9Mufg812Us6JAKWuDJtq1qLXtVdjk4ByQ6gEt",
  "key25": "f3Lu7vvwTmfrw5qLMq4XYGNAAy28rLaTfXW5npK6x38yTZuLjtpykgmbKHKDs6hpHYV1WiFURpz2fNQQwPjwmp2",
  "key26": "2kfH8UUNbVYNd7RJW4CtbUJVXMypSd4bYQBbExeYE1MTGbxxptcuJDZ1hyLZnfoeFXGJLZDJUjzniemguvRXof2S",
  "key27": "KJuqHZoKk11L4tCiA4fu7gh35EBTt86Z7iM589YiELeSmkPeMmc6VDyktze8TxkMh3koZixaZ9b1LR6DNaRLHUW",
  "key28": "3wiJFHVpWezYxCiRVpihJfw2SsYpvmnxgj1DAa6pyAVWWxHFhkuczVVYpDP74G6mz5ncFHw8et8M3URyVdczV7aL",
  "key29": "5YbYJru4ogFb5sugzMLQLtspeAdbqZDZPCanzFTseqnR2x5416nRibq1BRoykRVbP1ncna9P4bzHHToA5giFBA2c"
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
