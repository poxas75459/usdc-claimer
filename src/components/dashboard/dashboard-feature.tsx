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
    "zFJ5UQbNaUgvnrC6J4ybHts1SRHWdRENBf3qw4ztayNkv6DTFp2Q2zbPQC3yjQKWNcv3bZ1asqtvwigaUymF3Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "261puFoGLPSDPbivXxEttcSZ5c33MrMSSQkaGRGbMdTtfbAYWTBAnsZRiTCoBrhzULAwq3yuGMNYvA6nXkV3BA36",
  "key1": "2bF8SevLiAf5egZgNBJnEqyk4r5qPggerUHY8TDJokZG8fMRKiHYkiA2Cz3pxMhJfhRNgUQaLPkfEucSUngFxesm",
  "key2": "2TXMFgg1DtCiMpefWB4t4JAxnx6nQa38nXkVVo8JtkfgF2i4dgyHHG3DAzQCQTM8yqpSQEBqs5HSWkfCj37UjSxp",
  "key3": "atdTEW6BoAXBY5GPSCzYHA4Qed1CSuuivSSU3M95EEYeceSzQiG5eqpYdeQnmf6K7nXJnkdmMpuzvyRsVhTSish",
  "key4": "2vbyUvTbHwfiNQWQXJTca4NaTgoCbYPd61xxiHeLpsqZNWXWnGe1X7xW2afVyZMe92ZbmaxUHmt97YQ8r3FYMds1",
  "key5": "5WonxGFTc5hvAgsm36RFJvknLUhc9AyhAMjZAdnHUzbbHv3RjV66d2bnuvUE1rnRCksjqxyUtPTt3teqcgSnavry",
  "key6": "26qp6Lptz7UNk8wnsBwvbpETzzyFJt7fscXck3Vv2DEgYGpLGRF9Sxf9KJJi4NuBJL81zVHA2cMnNuDtyBidxmYK",
  "key7": "KjfKY4m2WkXwfacUMGZMgU6cmmrR1cLfp5FoKtg6B9iRYmQxqsoi3V6wsKtsXuDgxS7QFUcG4nVPJDPF54iopLS",
  "key8": "2aHSYUchF4ibTBWa9q8aaBvKVLcbo6rofGB4q3LrvWb7FeaNJZUp8hxLb5j4FXkfdeZMoVz2HmPu5jR286W36FxM",
  "key9": "3EJ5VpNnckogtVWx9YrWzFp3dVL4sA9ZbCvQfqkH22gohdZRoe3ciSUQTH1ujSeWfm95ouauTmQvDY1qYXXD54zA",
  "key10": "2dxSUZFfBV9V2AaP3gWMnjFSdSDLwzsCnaCzqscJuxWkneC12uX9yc15UrPB38fnhWG7UybFoVQU9by5L9ZpXaH5",
  "key11": "5D5TLytKL94Q445zRW9uLK9cuYqVvHMC7ARot5d5amXJKFWTzQV1Zu8sHHn3yEVf3S7QTeYnxWLfLifH6SSDZuvg",
  "key12": "3YT7XX4NFVReoGu2R58rJRMpGEzNARVvisA1jm1q3kMPoDhjnHUubPub3Bf9fT47WApm3EHBpQTMoYBn7CzAjBSF",
  "key13": "tdtsqUBTwkGq94m26AfxyAEfBeiXbvoStwaCvosTLTaoSbqBqjQH4ViSWXnhHi5urJJVnKDW3uuPT9xo1uRNXLt",
  "key14": "4FdhpsuJCStGfo1f3m2bCk5BQPNXn8bBfEib5RNCGRPK8gMt4ikSyYiKqgFFWqNjraVH92fJJyitnWJ13PUZcpby",
  "key15": "2pruTEMKTtbB79KHLE8HHNKcsVYnQBX64VwnyhmAgp9hNvQGtVcvXFy3M4qVZuDjpaoozQdTb2LDDRhdsY1iCDYc",
  "key16": "5hLn5ZrinC9ffne1XSvGFaTTQypcgCbtkzqL9Ls6rqKEv5pUXDquwxmiwBiouhrwDGACUAF7aGRa1mnndzKPGbi8",
  "key17": "49xp5m7x2qmuMGDCJqKLdsWnztHc5kciebE5ZiMXkw1zNR2ET2uu8gg2hiqZxE4dLTnarnHYGR8131Y6jtk7A41z",
  "key18": "63xrAAmVu3cRMC91G5JCP3GWCjE4hRRgtfNvmvEzw3XAWs7GhC5twq6u11EJ4TH34wrGhwwUNnmFvMn4wAx5Unc",
  "key19": "4TVTtDfBH7iaXp5s2kDzRWzNm67SRALCXqDAxo7yDCTdUXNb8xzbHN3WxymS5L77E5fqXdXWyrzd4Pm852Nnnnr4",
  "key20": "3DQsj8LwxaTRPCkJDCpjxDvjLe6p6rvVKxvsZyR2MRRmVYBGPPb5BNL4fmP4NEwyBAFgZEBNyqPUg8R6fJJpv2Gy",
  "key21": "41XLZQEwCMnCRPL2ZJzPm6rQdyYAQtiEBKBsoHSZHv5UeHzAm68D6LQ4PNExQ77xYzMsoLosuacGpqiiQGcsKDi9",
  "key22": "PSNqqLdaaFKx3UFPgD8akk8bUmeBUbHcLK8sC6BwrvhJp65x8rSXvwucA2ovQzCdw6YnsjSk2k1hAhYWDzHxRPA",
  "key23": "53xrBU9j3Eu8xp7Qf5AJTkJm69q6UaxsSuKDfFzf75qKvVW2UhQmq4oE1nBVYXq5GV6g7CcEsGGvVxNum1ZUkx3o",
  "key24": "2bfT8AQ4tvVJGbn3mP857kmpe8LpFsoh3gA5BeAwuRqpKzcCQWYmyhtZzNM9vXLz2oUTqoTKHbkGboeHscLAjuPW",
  "key25": "3Jg7YkK6Wrdk67TAXNL7cnSSeMkXPneQJWjVdCFZuh6ZSfdambFMfCrC3FT91bKQoDNuTqzSXzV3sto8xGcgU2y8",
  "key26": "BYyqfSWdkRubQsqxfmfXk1s4BgaXHBYFQLLrFfvNdz19frkXVdy7tNa12FnTYPhQSgLsaosMx7Eknmuy6SRSxGe",
  "key27": "4NzcDrDCWqbWMVmoCSn1GaEyR1Tp9cjchtkKgHjGppygGmSQaiBCcsKhzifQq2NS3Nac2fMLE2Wpo1GT6ShTkXXE",
  "key28": "4jUCpTsbW65Dev91bNeMBpsjKEaAQoEGNJyp2BCAYYnaq8dbhzuD2owyjtifzzhP9mXfPLD7Df7Ai3V71gqH8Wtw",
  "key29": "4qus7LNeG1iuFuu33C37RGDfuxgNkvhp5abWvZFnMSSyJo2bSyHgN2VfJ8dHuJjgczsrHzcYm2rY1Hob3BHp8d74",
  "key30": "3b6PDkARw1z7XeTwPfh3LidaF6ti3m5u7rhsCv8sjVDSRucKFFVuvGbf6PeFFRqzPg45qhysdaMNHUmMqxuuwZmF",
  "key31": "2EqkU71ezHUyQamSU3Hpv97prMrcmFwJ2QPKLrHZPULEEfAJLcNYcbZNbzQJs1ma1wZ87iBkVobPGKtwoqdNQ35Q",
  "key32": "4ReEMaZPHsNoNBxqyVJkFTxD2nqAx6j8LVBx7aM53erkqU2fYdeHK4GmSf8had1isFzWF4hCoDwfee4TgZuyZXoS",
  "key33": "4UShmUMxqY4GkWxmzs975Ub4g9B7fXFzQX5KDtp9VTQnYNzBw8aFJpdChgjYby7x7fFuPGttCQXbbxjMx5MsTrvQ",
  "key34": "5pLXrvLFLsr21N9sFKRqS6UHCuhAxJcUV8jkFkH4XnjXqEGzcfUWGHRYMEe8hfyrK6gyCQLgQNQetGr46EGEkDTb",
  "key35": "2huU9BkMNqMLpeFQ2mqcyvRMUCiPDQXKZY43cexgWTCHWMmmSFC388xnvR6FKYEh2fYFhauY9HsjbQg8QeCuTvG5"
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
