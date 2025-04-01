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
    "3AFL72aooLnQiYsYiD9EiqqEPC1c1spb6kwcadEbaJpMswFZtrQyL6buVqCw4mjiK2vr4kBbxuKv2huhbfBnR3Wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QGAACpfk7MYKeX9pCnxeKTJQrpHZA8C38SJxBJbYmGM3r7whnJDWCm58DVXzN4jRcqb8vm3cM61CggAqrxiov6p",
  "key1": "5oKnueotV1Qf91H4F79kmHat1gop7Q6ygmg3KqBH4FNhs1PdkjvgA5htSR9gWnpeUgfdEBXgo9yJBSnhWhu7Gzjz",
  "key2": "xJ34d5KDqy2UhGApXmt5op8bZqyFpBVyZx8j1mT6fTXhh4qyefDLCXdP74B666GgxNjj1HtfDMptkcEM3P7d2mU",
  "key3": "4Ue4QesNXSEyixFBZC4k5Wmtuj8aMyn3HUHZLj7QwmVCVuKfHBAERZvsCvodYnQB7QHennztoHLyVnvdVvApRxyr",
  "key4": "32fxBPwWxn3gKeY1WVBY8Kfy6vLtmWVGWxiYZnSk59swbXz5Gnfuy8eaNK8uem9npkjQsg8x6zJdUsdurQjarZey",
  "key5": "2axSiCQPwc6B4GyGCQmCzFdWZZgJnhctaMknGoUo4sK2jmxA9fVqH84FGcbZyuvVt1KxwodwNKeukEtnZkZF7fpR",
  "key6": "4VF9ANHrmxgMN3n1nU8bZDaVLdAssjmQbjg4SCUTZzQZWzXZAH1zV2AGYvoU8vtq8xGwbbJRtzSaxRpwzPvX6umf",
  "key7": "3nk2zMbzqb9Jxx8Gtc6o4eVRQyUS2dGnZ1CCiKM8rvqwdS17pRg6wCvNVFd79tpttgN1nC5hET3DrbXXnVewSm7p",
  "key8": "2RK2pUrHa7afnbahTmBFTSv3qoXVvGGfK4TrJeEUtgns677HZxB1f3PaEePTPiwfYeKKYW9qC5NUwSRdm69F1DGj",
  "key9": "35yUdTDbU7Vkm61bTJ9j8TGFFw6hLdCcREFbXqLneXUh72CMF3AhoJde6vmoob5s8h6ebe8GxUfJmeD8HCy2Lvju",
  "key10": "4z7SJRhSLoCiexhmCAVEHwmxmbCDMdstTXiRZtXqFK3NfwBTCuSgMqcnJAPHJS7ZmEm2619FW5fZCZN43UYH6AUg",
  "key11": "5ppCK65dkcys2vXQ3QVcFBpBBoA284V9UVZ78z1d6yzqJqupoBRPQVPuPxSwzNFw25U3E6JW6fvqaK6MsY8UepyS",
  "key12": "2GsVeWxT6vTbYqcZGEU3MnUKPzoVSiz7BRW9nBu9LXNB9aTqS5bkC8Wc6V9syvWFBrMBunibeTe9HSUNhNtM8Fhf",
  "key13": "4NuweV991pHfPHfwL4nHWwZ43CXaCbhB15AdV6V3BtdDvTBPiHBGob4MPrKZwVVqp3agZeH7dkjfHUWDMWvWdxg8",
  "key14": "34VDXxLfULaeDm4SuZwzS5oRPkNRq1Z8pJdAgAhw9YqHLhMP86HQ1WZq7MZgaDRrAAJyaUnbLttnziV5K7XGw7oP",
  "key15": "3317KFzzeszpQc1waMVMmp223a8NdxUogW3nRzaFzvD9zKbpSgc4AxXffQFthysERcu3uyqP1H7NsyUZeWQJEV9e",
  "key16": "61MJsUzYA9LqEm1qoBZrYcFCdHXYV4v2atm3LidrnSRP6HH56JvACVxs164TchnmL7WfvBXz586h14FTojEMrq9f",
  "key17": "2BNLkCim2i4z26q7dbVXaTtPbLgbjfWPJ2Zk4FQLBCxxUUdck211bkk8RFgebKZC1CDmcCxLpe8hY21HwjmLYp7K",
  "key18": "RAJQXqLUTVZY5tT1eQitxr5KVJiQWrKbR97G4pdSRRXxoyTRBTAACg21PBAR4aCYtaToiohAf3zrjdY3HKNknfY",
  "key19": "3AtcKWPPKBUAVuzbUat7tfuenWxvBLwkNPzz9wvo5C4WoXX7PPjnP6TiyQNXuNFhSUy61xjChKF1Lfthk2voXsei",
  "key20": "rnh9tr8uURczTMcvAVCvDovQKgSeAQBR9MaRX9wug1rFssEQnMyGaLLxxndXpU3HxCJLRz4BSproRRBXZj1ofia",
  "key21": "2d8msA1dhnCTQBTiMSoFpUKKzwwYiq8JLeh6rk68ouRSbLuKvBqR7ptA31aMPN7BDjDcgbCc8NMkoMi6Kh8sLmgp",
  "key22": "xG1LS8FHK5QTdvCsMSNMJ2KMq6xWHRd3ActWkp41eYQDMQt5Br7fCwEihCtoXXrkgSmyPbs327qJFsn19XiZqoH",
  "key23": "5revPmKpSwsPvxdaddEJqNCN2HHhmzPfaL2pZ3VMMoUZGasB9CinbufbxV2AkKc5ZLVvrK5BtY7W9ic5yoRdLhXi",
  "key24": "5JVUeLUXUTRVBGVqWkqVG3sUoMKNer8XwEPN5fTkQ7Pe56CFJuiftzpBCcf816SWisRNoQhb11kqUTYrjzvAX52L",
  "key25": "2hTEG6biBvejcYEKT1j1fetxWawHJbRbxjn5VpMfjoaARHq52s4zCobwDpG26RUc7YqjtFEyMHyQHCYaZysSi8WM",
  "key26": "4bkxwvecFYqxG8aw2qNgB5KbJGmKRxm9JdjCtczVHTqc2tZTjgRTDPRonvn7vA7tGxAQ71cPehfmew5FgYRK2TGe",
  "key27": "3763XfUcSQXpCv9duicjjmpizzvTvBpUFdkPTxrBmCYzXr3MT8szJkyLZKxuBh8ERPcDrz89a5smttLZPcHW8Tjg",
  "key28": "4BrQsDW4F5CzvAx5aXwLcJVLcR2awcJgJiYvXg5ik1HGZftD7JM1P91yJB2nEWJnWd7wNDEDtKdWj5KcRonkHhEa",
  "key29": "wsmRutCJmVVHLVidnZzLkh9YzaMacuRrwXaybUkkLkanxMEzk5VWA7gFBJCw8kTwi3t6BgKy9RZ1js3ogUhCxxr",
  "key30": "2Pa5cqfmSYv4U3ydG9dbA8uxf6S6MD6k5Gj8HDQsHFf9ZmRUhLb8cV6zQNDidGo4UQ71hT24CY1JdrLjhyWTJG5m",
  "key31": "2qBEGpC91ebCwYNP5J5VbnnPGJEXNsCpbzQ1fFCXRFMrokwiVWRPPKBASNvtGbhNHMP68qz6xLyacRie6XBXiQQS",
  "key32": "57A5Y5Dz1kuyRCo898kyMnLBEXobu56aadCXFykB8wJ2BzBGPGwfZ8Q5fup1i4brzJvShFzvL9SGcetkxuJfemwM"
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
