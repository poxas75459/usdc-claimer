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
    "5UtyaEu5jfjnmARFAzFzEm2foQUGhXsG5pFHvd1D2rL2WSuSnsnf7y6Eg8n3D276SHJB7x5g813T18knfZwdQcby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q8Ss69na2vPEJaJXvyeGmRq6fUQ1yCf52y4asJQ4FkSXZGov8YqtzBnqVX4DXV7u3721x4YgRt7xJJM9urusYYg",
  "key1": "5XqNbwqVtVQABzNCZrkedCpRdRxze9NrkiJNREo94xpLe6TSDGSbEydDxEZWyk9zgq1ZcfJHc6LQ79ezYLdy6hZz",
  "key2": "4JGf5sp21GfFLaaRYqsUuDokJxXAKvwouv2367E9JGrGjFbMmwzzjUoHW6a8Wgp3q7CqCLJG64zq6RR8QGjnQtKE",
  "key3": "5Patq9YVFS9Xj4mw5fsCvbMcVbq64PSyVpGuB8m5Pnb9MBztQnNzh5t6bBFghiLSnqousZvVdpjbPKHnZhWPUU9z",
  "key4": "4d8yyohesXCZMkbGTBpAttBvkyvDK17cCMwzCRPjGN2NczfEHLf2hmfKVCimZgmVPbeVKR4WUpPdbTngd697K9Da",
  "key5": "4XQ7pnKGJbF8RZf18nkYsV7k2kiBXWQ49hxoMjv4Bq5FS57HrJcpbpfbtdWY8QnVN9eLUa1tW842t9PkhqKwEMwM",
  "key6": "66YtHBW9NAAJJnT92PETfRoy1v3RGmqc9XFn2Rmkg21cvabKhWDKWqYsm8LovQy1mkaT4wciXxcmDuWztNqSwfaV",
  "key7": "9bV7kU79fo6bqsga57yqgBBqK5yvxB5QrR4JXcuNRp5N1Bh9wmwAXCrqRuFzwZL8Cmwa3SDEVxWwK42C93ASvtM",
  "key8": "2dMeXqkAewaZSFJtQPUSqqVeQiXWzLfRJGGfUWpSzJRwPbSyQFt3kywgt2Fn9u9UkMGfU8NXdcFtzyLwWVg3Ym7S",
  "key9": "2R7bt59UxyvHa9hcVE5rtKJ6YuJbrWSvizgVjiUfLf5uMeekwZ6G33TEe1272hn1PuQdreWo3sCLLTqvaiqyrYjg",
  "key10": "3uEYAZ6LeGRr2PLCVCwXLKAcyR2i7r1HwywxjWm272Q5b6uNpi2K6jU3SQj7KuYHxM3YP4xZccyrzs5QQr5vMZQe",
  "key11": "VuprnRdzNT9rE2hhpWoguCrMC6nsfKYhxXMnuFG69yvYZjYnXX747JgmWrPakWKFCzZ4DLFrJujYsAFTs8DA7EK",
  "key12": "5vNw1umYXdj6752JyysFDDmu7WSZGM9oAwqXgrN1u33Lx9D1B9rn1DCQFUXWQ9hNTqGMVq3rHxcxvjaicJ24A5t4",
  "key13": "3Rf6Vj5934doAkmZLcrajcnUUb9fY7CrVyWnZHP5A3nAMRZB5AWEFA9sBcWpzaaPFtTUbhAdnfyxLDF5WCKrQQbS",
  "key14": "P353tWatsaqmqew8xw2LTvpfC1etqp96qZDaBTdLWbjUftvXXwaE5vqbp9tCdPCQn9RtWN4X1XF2MTdgTRA2AB6",
  "key15": "4dHsYoxyfDy6xN41kft9z8rWJypjUVEhoxi8hAw1E2xNGEXrJMZQiNwcscmqwY4oP7noMmnE9W49U4vxXMCo1THH",
  "key16": "Q8frYFEHhwhN3WXxEMw51JLBBHDKbYGugHEdkcb281bBhqTZbnz5G1A48Xn1jztnAfQMeapvVzSJv5HK2xoTruh",
  "key17": "2NQPN5UBLCsMbeQb7D3Kd7NYs4ocsGwGrELy4FtDfAXrf5Y4v7MDub1whLr4QmrW6HEcuwyR4h3cYk5g7rRAn6jk",
  "key18": "3iZFGCc3uC6w5oShKUjfB1Qre7ePbeBcDEoZGCnSfwfpMzpJHiHz1SVyfawwkHVx8DKCJdSeWm7GyiXyD4JeBYSX",
  "key19": "uuzXrGARPo5z8ZhTQoqCwdkq3tuEFajBH2ipYgtfhCB815GC9euiYYFQGH9BeTvs7QNDaRs8KXqTcSsbxKupogR",
  "key20": "3uEFM8f6jprU7sQ9DMTKK8P6E56JbQj7bAt6Mri8msAcM9MDNfMaETdu7enGaebRLnx8H38PacqV8M7m781vP1D",
  "key21": "21DxjLwhrsUEZYiDnJTo5VrD42QeJ1A9R7oPmfxkKfHEmoNEc427Q6qXCr1xS8wdDnmwnxMK9qWdrewa59ZcBcxT",
  "key22": "SomAfF84ZXyK5kWL9kc1BHqX5NUGpKyG92pvLZJ11v96TUVYa5EEM1VBzo2YfB3Vw5vaWtzfUGDCgRQKDnTidfM",
  "key23": "5M5S7wALp2Cx7fc8kAfLVc3vAWgHm5N1DWdLAgv1qdx2UYreCj4LjHNgM1wdLKfia9Dqx97i1r9BXNVbPdiadVYP",
  "key24": "WA4GcE56Z2BmCKPyMtRcZRGpDwNSqtt8N8EaDTxeQ66rJJho7PH7KS5RHPgeZWAMg9Edipsqx4YW8m3uqvpRAT5",
  "key25": "q5ZBv7ubEqciZasNoKbN7SR2QZJxuq2zaVfZpkuhesmNC3pzANAhaqLiLtjdpX45xeAFgVP5sUAhpDcswzQc9Zz",
  "key26": "5jtneCxGnDwKFEKRhd8coGW6qxtgkfazssv5GGcKcaz1HsYYt6wp7mzxPTQVqGjbQjtM2KUCV8QuCMFNfpzkzhxR",
  "key27": "xwjScdsurvR7RBRUG6BrG3qgfEy4NGGga7jFLJacKxBQ679HWQG2KGr6Wmi2EcaPqmpCreZRbF5eXAsvKrRH3ZA",
  "key28": "4D1USwP6r4PspXtxZcVwAtToaW1u2K9d4YTJJ8q7s1jARgqg4WcXNWTdnJF2ih9NGHy1gYgnfCewMEj7KdqdXLNm",
  "key29": "3VLE8vzGiKje6m4c97LHCE29s4efKYwAvgZDSgAbRm3NYuZVVXtdBVcY6YyiyJReRxwEYbpdeSk4KfdPFBhByTXE",
  "key30": "Qf4Skr1fsRowPvjJEqW57AY6mrAopPMynWL89DECHP6FxGqjHZiG2ZGY1k12P1E7xFhBZAv33AZSs8aqHBw79Fh",
  "key31": "319eQ3ogXNjn5WzW236aqt1VFVXFDqT9hobVRfyRpgw5ezjKnHTaeaCkig4utBEtidHGxUz2hRDxL1n8HmrcJ5eA",
  "key32": "57mk1HutKBxciTgbfeijHJ51Wb3oNoQsAe61QrWPSHCTwHpWxkJ9zj8B4tsUaHzdiX44bGScnuiLSXv66AaMC63s",
  "key33": "GjifjqsDrEU9rPjY4BUFQdY4jYStxZLd7e9ibHUtMB9VAbtDJWLHZbg5HcbRY4YaYEHtJhAKMvkNf9YErw9uzEw",
  "key34": "yvvma5ip4qNVow2W22L4Hesh3VKswJWm4WRbBEkpY7ayndTJL7wVpwq3TBsov8GbM7hGyq8tksSnoyJC7pbUobF",
  "key35": "2ByYCvDvtE4dsu18nFCqKiUKCZ9pgW9ktHte8NzsGLkz9cUXJkBrsarZ9ZeMFLKSyZgxzMRyiNNhJ77FA4Y2H61t",
  "key36": "3nHvEBJoU4UK53bkYFTKSo8jb5PoknozcufTem4rPjMct9pi7GxDnduGjZNVbyJ4n7excgTjBbEXAiXuZUTvsAqa",
  "key37": "4xqGjjsmQR1xSym6toyTRrCo4SmqRetEJcyX22f4gWr6HXJvSBwXqWkRfpcSbUBYWFvJgyFHVUxDPCXCbCevo3Za",
  "key38": "3KmvESnRvBuboZKQH1UKiwNapR2hMxojRjhQchmGLt2kRwYXAU6L7oCKhkQ7gkDMvPucGgzVNwFTxRujk8nK1cBE",
  "key39": "3N2FkpsTtwA72fGRBxDoTHuf76GgRKvpUjkCTdjhVv6hsH4tZw7WeqGkybgQnm8KsHgKoVnSDkNomckdGVbR9Q6o",
  "key40": "2arFWAktVqvXu6ZgyKKRGWw5GHZizW2ZDzbc5stsQ6bbAeHJoAmocewtLVR5CDACVPJ8NbebUMDt3e3ym2HufXgU",
  "key41": "2yazzRTsPpfWVu81BGKDvnbvAM7zwfpdQyXfcigSBhV9J9qxMNBYAwnfvArpk3Ubv1rFATirski4DvM8f5NrQTVQ",
  "key42": "3NmvG3qQsKeJFYZPZBstLQ3zXCUDZUui183rnYA31aqVUzdBhBWhVTNs8F3tfSbpQtDZPvfjh6EMCUi6XrnqbwLD"
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
