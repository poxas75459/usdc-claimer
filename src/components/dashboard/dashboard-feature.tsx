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
    "4V2FUVN62f4XLsGFDRApa5WF7iXEvab13YkYUFjwmXcZqhWomb7ziXaQs2GGj9PJtrM9CCaV49HYgbMD9h9sRTdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YyTo9uncpc3G4fAsntramKjsxYRXsk5dXoVTpgXa4v7jMWxUa3p3o1f6udqHCZGwpaMESzHb8KEKGnM6YaEivGa",
  "key1": "2mMHG2taXPNBirY4uri2fPQb1e8MkaBGqEs7YcxmxW1C3Jmv195Sxcs2rkakiW8VjRfjLB4bHyFSz1AdMMBW2Nrb",
  "key2": "3CgZKayuTwbj4pH3fuKwwj8FKHLYE6FuMyjEPALj14gyfJMMYczNH8EYmgxXAXVguR5141t8d1r1jCPAfNTJR1h8",
  "key3": "5YSv83V1wYpc7KUBFpGkUgjpivQcH2Ros7xSTruhxSmDAxcu1Yv5ak1JGouVinLLMn6cMLQwjkWbzLgdpWUgZuWd",
  "key4": "32NooJtLtRLha2jhLfXgf8eEbWwYBuyGYZrLzkeLEzyXp3tHTyAmYbv4YEE9VtjEu5m7JeqzBYCKaQLWps6FToNQ",
  "key5": "124QHdY676hWNrZVN44dQu6nZQNnHJdJGRCkicKvBqVfhkc8LX3yVG3r8Bzfp2koVaEu8Az3PqA9B5T3BsoNWayn",
  "key6": "2N8U2rUSLiPZQZeTWv8ZgNkFQW13rbpaccRuQxppgeqUMSxAHMHyHmfg3P8JSazMDHgJVspFTAc2zRxnovfaRuhB",
  "key7": "eDh6rFpSBCnNijstre7t6ETdy9kFSxRmoNQaSaZUbwnPYcHGoeeJKsovqQfT3vV4rULAtZJcQXH93h1mbJx8MBE",
  "key8": "5K2YvKE19DQXGDWPTbpqbr8qJYiWEadwiLmkhVkAxDAZB3gEgfsTcHCXULLBqHzSrdpaJCiyMhCAwjbALmCkVL8p",
  "key9": "5v2CMJm9Kxr1PtLagoFmK39gJ3BuwpC8755SVn3hG7sxZBYYwEPVX4NeEQsrEWMuygk1hs74fbz5TMobUCmRptMM",
  "key10": "279yjqVeahbPQTiofLWfHXDHYuGtARCFLyd4yfoqRDdFG1ByUorwxKKxoY5k8mfqmzvdPJ8YYKK55VPXGgxaSEXd",
  "key11": "54Vx8331g4BJBBRgKnU5rtPZD8CmxTfCHq9Pn3iAaP8R6b7Vw2k3FLNQenocR6mfymMTm39GdCdb8AAZrTQRfYo7",
  "key12": "mLHKJHSheUWZANxdb4kc7JSMZaFBh84tQRx1ACbuJMjigpHSb2zmhrPtoGtUjcExtcfU9pqp2cxEb2qGbhD4ZiD",
  "key13": "641U1vBHkFCwZrBH9J7d1o71HHXhU32E1BV2kYd5CETjhxapapqk8CLnT35UuMCK6FWPRPmTmgiLnYPwBYycuX26",
  "key14": "2anhUqnj7PjeBBkcdr5cJHYdseQ5kvT4PpvqSjrRtVTAbRnWceA7JUZX1GDmnydL963tqDZDtmtkb5eT5ipWx7zF",
  "key15": "4nbeuB6TrH9oPzeZgFAgqQUQj7uwQFNuFcwQxeJbJw5md8gJkwgZHrbbbArgio1EFkgVvd5GBbtHScHrYBGtwXPm",
  "key16": "4nm7x8y73m9Aci8EnLqpht7rtdJSTxVRtL61Lzw2vUFSjW63VuDR2B2EsfSXJbVgHcKzjyPvP4eiDD4qHuid7hDS",
  "key17": "2xshpf53ShYcC2naa2vVB4f9ibQNZSGvGM37NYt2dNjwbUfQiz5xVGkmzn2aqjy3oCzwcjQMwzYFFjvgR7BLtAWZ",
  "key18": "34zGg9BibkhEwsAQvPnuenu7NKtVHev3i3C1NfYsa3gnHf9iWhQDcmDsc2puvhvTbXpPCZeHgyNuuhjAqNvDpyng",
  "key19": "4XQEP3uYZ4TjgyTpfLUcnFrYGTMs3rRtRjtdm9JJd1a8cSAD829VF9GrXwMyhXmtxMbwmALTdDMSqvWvU7TcG1Vs",
  "key20": "4vUr59drw2hby3UMtDQC1yUro4czxhNxwH2NXrzzdnLZfQvNMFj4mBVm8sB7dCPGxNJuAzrj9XFdCLW9Mmbrkogb",
  "key21": "32gWSnscgZ4ZyfawHjZecmn79F53yHXjquKncGQG5Gc471kAJqscckufjj4HWTVQkkg5WE3awgut1TEYMUkVHcYr",
  "key22": "CKas2JKxxTg2VfPhojynV4gXqVpYo5hzQhXd5JUeVPvpiPfuNFMrwzBJP1bU6LERJak75MT58Ymrt797LqinWXb",
  "key23": "1YUpiNS2shNwaP9155e3ajLK4mk3SoyuPzpty77XLYBF8gwp3FCc8RiEYFrzBaMxn7Tih4j81JPUo7TfPjSWR8A",
  "key24": "qdszbzttc4t4n8XkhCyV8Qu6Zh19ypVFXutVtFPFRcPNemBMJXaMoM4R1gKyLVZk9QdmTDgUaNc4GQXT1s84J6F",
  "key25": "4YnPVvRss9taWwCWGHtHr1sfiUZYMWx7VysqzxoGniv6ZECbkD6XvFJ7KKJKF2q5RgfGfGoLpshaeVbzoQAF8xbM",
  "key26": "2xr7Fpik1ZucpRj3Md24o43EbqpgmLTEdpPgEZNSC5yWa8PzPFSE7zpkrZfQbhfhoTjYWwhsyiVpd2YmNRA26bCq",
  "key27": "28zq9bD9TZk7FstQPEN8vRQKpiAfGkdjjTaSDCnsVKMdxNzryNHbXCL38JEjZKCVWJo9in1RX3736F49uFtRa1CR",
  "key28": "26fYaqpPqSHSuVa7MtWAohrG5o5K2rppgrxrFS9m6wh9yd8vSyRvbBqkzA4SrpMzip7z9yWagdTPh2GNTpfbj9oK",
  "key29": "gVWdeLM9NZuU5XHM1qgY9KnzCeKVH6B7gp6j9tbwaEx7c91JPjcepJk8a9umugpbuVGbpXd5kYkFhpc3RKzqgRZ",
  "key30": "2tHAttB91sgE7vvSZyNiBVYMSt6yjAmuP3PsTk3HLH86kJpPTjvddmHeUrVZQ6G9fY9BaPhwSEBRadZg2YKXNRuN",
  "key31": "22GffKtqYMrhWvZY7LhZBhRtE3TP3bvSmbeb2oCrsWCWEfeUr6MiDuYWiwvRJY2FppP655Vw5QHt715gtgeLcGxT",
  "key32": "3Mfh1FcPQPn7zDPHzPQBKQTvB6bkpj1Jztyq9DPtTgrHVsGvBF3g1bjQMLcsvrCeJR4JPYciBkSHGEXfoHtz5SCA",
  "key33": "5er1o4BYHmcZXxwrrJdp3vqMfcwFYhy5kLieiBHkg3Y8oixDBpkNCBMDexhSXqGY4BR2rEuFWkqVwvSbkwF3wvuS",
  "key34": "3mNgYSqgLmosCjC9f4uiWFTEYn4uLoDCRx9iGFoLR3XBKJd2EvxG9ybuA4sxYCYsCLKpsse1W4b35pRp1LxdxnkB",
  "key35": "KbYCaqNtz1GoUFYgXLUzjhc9hZvz8ShQBcHeKpVWg4YyBnnxfBtaAiHm6FySELXZMtNyA9XJdP1fpoBMyt7NWME",
  "key36": "5kfLFiNKti3WmihsYU3zhrHvV6yzzfypy2Ek5YbF6Ajsx98RoCubmS3bcMqh3M92AJQVLAUiKchxP6x2dJoFofaU",
  "key37": "62xUKqG2SEuLzmUwmpaicKApoNDWbPqsjNQ6HfMEmyUaUfabnPZXNaEsa7LD7Lvfi1zcCnMRr9YRGm3aysSo3YBf",
  "key38": "3t4K3zRGHC3NCeAmJfVacA4X9iZKTYK1bURhDBZBmjMRpETfN9bZ4d57SwRJyCkCECyefrewWLGbQuBC3n6V6Akq",
  "key39": "476aEt6KTyMmTfHJjpHmTxgHwtmf7M54rTijEURjqtx5ZSWHYPaP4PuE5R7EmATUr7CP217HAiDgHBNfw2XLTWSX",
  "key40": "2NcoQSMNq5bbtcwKJJ4dNtccjUDCm5vjkj53hR7oFToeN2UwFUBjQBNj9oBeLrWdMj9nLha4acZz6qNURSVNEGkN",
  "key41": "2fMX1VYwuJJrpeZZpj5dh6xrjZd2JgTbvW3NGdY2EFfqyjst9P8bZyaca43TYYppNgRdh4aA4dFwGPcPKHpji3e6",
  "key42": "4u6qJjvewXAA4sd55Z96iuFTnqajJnYRpDHJLJnoXkBogh4XwVeWsSZD1fk4R2Tr6NfxpqQqA9B8UFqPSjMb1QFp"
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
