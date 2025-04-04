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
    "32beFxVLYXmbafXsvcNiGPchdwiYjwAk1yqgW2WhZGuDeSJP1u1JcTdk2MTMgwZGu4HCXbm3X4hbFyH7BH7BbQto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PC8igTFfa4bpZTFPrec3K6WR1nHMxFyzV2XJAH5ytcFfqnHvDxCNGH8aqJKmMWEvKi8Vg3aBZGcY3vSbjzYMYcS",
  "key1": "25ZsMPV2CyDKyKfWkRf91XzTYUPndyiCZKmo643KZF8hvrGvy5wyZqpxmMVCYfF5cwHvEVrVhgDEukMF7vaJYAJi",
  "key2": "48Y52RpBsx1VPebpUTKygbHUxVq5QmNb5D218PkthPrKgsZcsK21KL7Xunsg3YZtaBdpdD2fwP9Kk87HECEvdoK8",
  "key3": "qDoi3GZdAohW8j15JQvbFDL3XKaJH8ihgqSfxQgmqY37YEB5m5DKKYKpvf8bC1U1xpvjoYown2WbF8k8QPGKGkb",
  "key4": "57FgkmvkUQ2TunUpS6WkZUtiM4GS6mh2fzvm2TADPYrBkqbnZ96YaUaszhLT6dL9eYvn4QXnvSKHKcbNawJwrvZM",
  "key5": "ZW6SRHAhwkXqbFVvH1W2kBfdxiaSRdPobZEw2ABQKpXdnxPvafHEcWrd8WPNZ3fXae2fqsfwm6xoDAqQy3fhfi3",
  "key6": "4tx2DHmrjvwKFUDNudoUyt67GSvaZ8Pvj1N6TKZcLMPqycHuXav8LAsrPatAj9KvD2ahG9rnwkjnTKFXhbbFfQ5D",
  "key7": "5HwgAtdHhHBNRwFJqPk6uRDBEM5oJ9e8XLHYsA5GbgD2xhVRNFLpF8S1bLP5mk9Zo4JPispQNgXznhZm6jXZfn2x",
  "key8": "dxSNNajopCcUrg47kTA44u3WXKQkDpPPEu5Siye1AF1rZgW3yDV245XaPP6L1n9iNpXqwBim9UCVzGch5KazAMn",
  "key9": "JYXDFGu9wC6sLUPQJuN1LzFUcoXRgBBPP5bcVojdexk5G7AUaXQAvx9c4LYvuQVnU52Rir7ZY9FioaGaozrHfVc",
  "key10": "2peovKqskVANJQe2XHnafVKrhGzJYLy9SUpdedVZWpPMi6qZVpLNrU1DYTn158xxF953bB3ZiomXqVfAJHyJrzgh",
  "key11": "5BQs7eyM9zuMgGhRyhEy6WTjB3EaLRX8URnJjrrVFjDHDeybMAnupPbEC8aShuYPkS6gMwVYMS8MTYgN1XDP2utf",
  "key12": "3tyeQ5jyGnD1NY4TEZnSsu8jSSKDvY3jQLawFQsexxUkFMyAQScGBXTxcLqSiTfyDRoQKr1rbXfLkj14eUSeHpN7",
  "key13": "34KZiVa1aLiSwLXXRBJ3EY5Voe4jo6uS6coSKVotPsyq5MPocfQowMTHzR41LcwAFK1f7TJ3cHgVm4PgnBwNwWZy",
  "key14": "29UUtreLW7WyQvMNopWCxfS3FdB1hVpSTwuXFqvFV9FDa9Z4tZU8QB6ScuQaWWyNAi6akawaFQ267Ni6fZwcWjWH",
  "key15": "3DXRCNUtEQiGwzUYCaLufrMnLHptxGbbfbpvSNpP7wGhbZF3RXRpmxDr3sCsT2kEhkBfFKyyWtBet6qLc123u4rC",
  "key16": "4ZuaBYmfDWZHvjNovrhKrp3jrKLFgWtGhYaczpgCnqJuM98Ttn7DYY9EKQXKUBf7j45EU13dZ7MNZJ6iswnrpVtX",
  "key17": "RvFwQXwJG1b5tm9bn2ggi5caHupUXN2zQnmR5jHSnhyjnj7rXgBy9XhcnYHgK81iHh1gGzWuupdY7X6zqRcJhPS",
  "key18": "3kRt3GyMee6vFnc2y1pJvRTmt4nS6UQa4RzhGoyPi4Ba3csMf8YUtku7Zft1Bp6UPYCnS9XuTVFEYfetPWBSfCbE",
  "key19": "5HCgta8uwrbYnfRykMHjM3a9whHaTfLbvtvd6BDnLme3yiJzBYyiKMTj5k6JozHLtFW9iKggSjHwMJetPS5EobFP",
  "key20": "fPPqPEwJbAZYZyqmNKxieZ2Cjx6HbXiiqpjYeE8PvppdzNHTiS1EqoVGG3FUiH7c2gUW9rwnGbPMCfWrJxkDpAT",
  "key21": "JJLLgDXCUeV7RtADZk1LyZxRVgVszoijJa4kYETjy5buq475KdWrcykMEVQWR2qSMjufhEjBA3Kbyee5wnvGufV",
  "key22": "4jrbGa5wvKHWV8d3eExcHFLqckCe13YVPVgdhB9CTqWMtaF7C9qjVeiTMy2Msmui1uucCrukAs7ZVSkgyHZh8KSZ",
  "key23": "3V7PcUVayzHx3oEnqeogeiACaahYYcBkG3UAxUQSiCH3RzLF7KDQovE9eQBa4AWgP5LBiaypWLbhcYHpKqbzr1Z6",
  "key24": "66PfpmGFho1UP4KH8cjigYYLdksDgx2j5pGbh3KM1DSzTq5KHpmf293vDhHeqR1krvfsQ1H4x8L3b4JJBpeM5KRT",
  "key25": "4LgRXGdB91SmtFfLJAXx6FqNAGSrAN1Nd616eC771m2UdC7nSaA7GehMhHqphFjdNjtj3vUZLHAc6uCfoWvtjxch",
  "key26": "5ezFiAVn8FS6JwYUN5qFmEyQf3GJ7a8GuZzqopgcrPRwLy7f2hXirDBefWhEbjFpu7PCkJcgKjrot24kXwUGfwTM",
  "key27": "4gx7boUifQYjJXdXsA8KATJmUFtn4FvprY7zxRNrnPZaAaRnKzMP9f8iqSgAQVr7WFdXmiRi2WdfPqA2jDYWxk7N",
  "key28": "64jCon1bC6rhAgNUpF3S5Uw22pry69fa9niq824A1wcauLDw7bRxjMg6USc6efF5AcfiCkELJdPMsY3xwzwzBrbm",
  "key29": "556crLSMBB7L2JGrW2Lyz7hXZ1szCvyjiQ3to3ZDm9BmXqMkBBngDma6o3VMmekn69JprnXSu94kfFhLcnB4SuAQ",
  "key30": "4H3rF6jGrUwZKuxNxbqU4VtkV2TMYu96keAuBar8f5QFFnraZgwHDpnWsoXqNyhiAfgpo9dKyjzW5J2D9rswd34U",
  "key31": "2k3vfq9mEj3kbzUtKwCc1h38yVeHvm1Y8BkeLiYDyUXSk4Q2CMWV9yYwj5MYJPDA8r6UahyTZnZ7M54YhfAiijWb",
  "key32": "2TKdPLhAxM231Hq1FxAPy5JW1HfrV7ZQDaaRpYUMm5RUEhiT6whrBPN5rwpQL8bENCXx5HkmQXeDn8GpXkbC1rHb",
  "key33": "2HX5h4RitEwLzqiw1iU7oy1jKZbRJgY7X6VseQ4TrmHikF3CULHK7XEjzAfS9XnUG8ufgeRSvhFAjuoda8FCjiKy",
  "key34": "21uUtELxrsAxEFcu3T6GpXFHvo33tCVwm4PbVQccLWojYGRgqeYP2cTrVbPrraSKAVdoAn1acPRGMSQgYBs3oPxq",
  "key35": "634uCk5nCFtZU5SuF1tvp9ATeYyeUy9wF9CotMKLmybCW1WvoGsGDCmxQrojFruYqsqQT9oqkzdQKcoK7pzG49Fg",
  "key36": "4tkR3FPYTHkkCfKWTgSGV3y2e8eUYcjnu9DbHdyv8NsmateBriJ89DQKZANNC8jdCfbErRJWMwiEZdXj23p2uLcF",
  "key37": "5EHQuU218i13uYoCuDsCZnytSB9YqusVGc1ogY9bKEm7LamwiCGMMjxTTMp9NAdAi5H1JJrFHAcNP3jVcu78jbiu",
  "key38": "2nhcyeVNM2c7S6BhgeF9c4SMFSSKocUV97zkQvbdyhJHi1gKwErgx8wYezhJ89Kz24xtQaxPCbK3CXBpNsqHdFWJ",
  "key39": "br8PkqdvUdFzEfjkvzM8Y9ioeTwN7AyxqV9MqQHeWkRJUTLLppoibg9uGm9AvC37g6qkyHJd7wPmAnz6THzZEWN",
  "key40": "26vDWqbzTpbDiWmTLUHCTiuW7ZQjqovuqfPdZBhm2WUcFdPgyBaG995v4V5x5Ec3n3ri1sP85SS31S929VWZ1fow",
  "key41": "3xXzWVJH8qBQmvxaVBXxXHDYT5gsDQRzZWCa5kouSSU2qC2TxvVdfEgq9DbdoJdBTTsqU8gweqf7RiKKKQeMUq42",
  "key42": "YFFob3tD1p7QB8LhFrEXkNN5H551mcvLYXD8AtXViq4H2s5uBdUfLpvD33MMTQ9cHTF3Wch8WFyqCNTmrpdYzHy"
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
