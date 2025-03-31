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
    "394c7mnmyAZUqUkFU3Cs9Rmz8e73xerGAg12Lmt2DUjHc3LnVK1VNM8PXvfGu3SRjPKmf586Uwe3sF8F3nbXiXTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RJFumV562HGuk1KcznDVp8apykL1hFaMvLfnambJoiE3jod8GY9C6bzfvgNAsvqMsAwS8SYfrsdF8oQbmtc37VA",
  "key1": "2qdwz2vZ3mTXRkLUUdViu8SzKtKytS91HRdQShLhrEUGzEx6sQpniVBGUGr9KNgAS48YzMycVyYhYetpNoeVSrTZ",
  "key2": "5mREeAxqWLVkgNg9iu8GLmDm4P89BrSHeaAgyGzQbPF4DWaXf6bZ5ediy2y8sACTP3YC9sXw1otxfuEBteSk9WyP",
  "key3": "4s6p62UoKHwHDgGJYP4Aq8bAEQ36Q7V79MckExNvdg9KwJZDQUgX6zi4sGBpBNP1ACo4GuXdGcSPUxmyEgBYQ7yU",
  "key4": "n6wtYppqb5rtLaUpbm9ZdRd8464vwMuEoQb6CYa7MMGFot4v8M3PnFHCKjYjteYmhNyJRNuK1b11rjYmxfrPKm2",
  "key5": "2NJyxvXyiBDS1JEkc9fYs2nGw5kpfxjfRz7x8xVdNG4t4yKCBB9DVJWum2E5CrHkt53gSPzvs7nWKaHK7LsJ5SFk",
  "key6": "2SSZXN95efcbjJX4GAUmVBcVuTRV8XaGHuQx57EoeiA8kEEFqezgiTANZBG8UrnYndZmPXVGDDJe2XpqbwxSob1r",
  "key7": "4MJmUyL5djEWQUSsnw6YzttqQmt2Et2n1nA7g5mTkCukxSiYboGSTmds7RXk6tTo9v85eP2rA8hxTnwTqhxbLWkG",
  "key8": "2uav4w6SHu2EaZRRLmY9CmsvyWQzLvxFUA31dYbreZSX118oppufgjfM3Yio8CLDVqi7YgEUE2TnKjFXJe3zrpd5",
  "key9": "395hP2jTFTq642wysBoTCdFr1xAxjyAPb2GowiW3MXcC32Cyej23oGxNgRcDnLdxjTjqtrkum92G1DRw389GWQTb",
  "key10": "38FqDM7ci48191soiahhdKNrJFNv5tTJJVM4PfPJB3mU6ftmwbojxuR4KFV2FTKv6dwDFQyAg3KVvmGp1jyEBwAp",
  "key11": "29Z3FhkGPCBKzT1LKFwcdv8NiiC7R8DBSWZENahDGj9jptkLgTJM5LQATyS9Maid5R3vhZp9ZbTXLDkCGAUB8N4i",
  "key12": "4sGHh2LcmoAB9iJ9bY3pCA9eVgFgaJA3bKSnRhgLR2HsqW3w9oAXtiSVrfy2XsiqbrGh4TvWFFZ11kyBCbNfJdeT",
  "key13": "5Q6GFsvZYoNMw6BYebpzUzB5RasZMNhAbhNoL5A35z1DSsjEffx2efwcYFXnbH6NQY7aBcM4hrvK9y3QeGf4tqoA",
  "key14": "5VQHaL9EQffC9YGoAWho6BNxHYEX27Guye1AeG2GvpqEfVJxBEqjWoiRd3UF3Y16HfT7CsmXDQJgNTXqgWaqYxWR",
  "key15": "26bgKkyRH3z9jcTfFD4u9isazhJa2v2oiF2dyC7436ajbYJPtenY6hkwdM7GDxHVeb5uz2hcN8bBDGKG5witsqg1",
  "key16": "37ubMbL4Vu1YAK4vEhFQsHEmMABz92em9VzQyKh9p1o21VaFJogfiPszE6VHQyNMtQjj3dvcBZPd1nL74yZ53RwQ",
  "key17": "MJ65cgk5p9cj2fkWMCFosj6ph1JqDjLM7mXWSXouoQyrxTiBwvzx2Sqoc3S7iYhodyeY1vrpd7UueDyFVrWLxBZ",
  "key18": "2wQpLBUVBCBeYp2aXRHpmtUTVQRNrpJzh8pa8A4etYMaCkZ4ULdsrWi5VpMRZMoqkJHhxquXDrgtWYXqcq3tNjmo",
  "key19": "3ciQERAj4PrUhATc6cJBL5DCv9m7PEwz2aGJSdUR6n1tHQo6vJ2xwgw6LrBWKVPrqxVgCA45mGxn67zsfxj8rWQV",
  "key20": "4HG62vELymbZkVY1h9meTmZTYyAoaDz3eNqeYKyU8BCp9U5THhwGAiGpjZ4YrHVeDrH2Ai4P5ywbaC1FoGt3DNoD",
  "key21": "haCX3UneB53ULMGBA3pDU8djBh7yKLrnGCLGJQF4kjJUzZHcYradSwnrN6RS1achRUF5HTe7KAkj2W7qdrr7qRR",
  "key22": "5FcncbWqszjg2sKaRe5KJYp59eAWKa35EkaUbaXyrGbqsabPjd4F2euMq4jiPwjmhe6b1Ft3DqEbT7MrLPyCkTiX",
  "key23": "3BRYe8vST5g96TQRhkCqAQUeu3vsWfY7jrWj3g2A4MGzMtXBD256Pg5eH3VjKGci2m2C1XmebqYQdo8WQdUwR7gM",
  "key24": "3jo16iK3D4KzjZctVfWNuAu41YDJvzGv2i48vpJbBtrG3rRaTRgMBkFdRGR8oKvEaEf9GsHkLvFdvicGhY55dKYS",
  "key25": "2Dt1tttS1W7fMVawjh3jaNgDbYG5wvZSeK7y8F4V2WeNp73LTjHGV4USSNzHbbZXCGyaurxx29pP5QKtCx1drxyu",
  "key26": "6MxGm8JgtoHoCvv8UBhkYUALqLbpuF1xjWhvwnMKPnGtJcNqD3vakLaYuthMXTCpuGoUUpXSC33PooH4iZoZQ1F",
  "key27": "5ZoJ8BsYPNxiqynF7D47vKAbiTmzTQYjvQuYxJnUk5AF5g7iuLWDVq6faChqpanjmydab5F4vxJaoL9PRhaPmdZX",
  "key28": "BjXSB8wi4RubUxyvCSHjxHb4iQv8QCr96X9p6b5Veht22rYvB85txJHULkgNbkqxJ3LvwTZ31wpmyWHeiYASRyQ",
  "key29": "45BGrRnVj2jpwvv4zmMfeZKZqamvgmKd8ekzkqWXUgbaKFdKjjfzW7wDgebAy577SDxtqbAp4ypZ8nTVbSnjfwGH",
  "key30": "2URwHaigCriLmbM5YHEvNn9GiNe76C4zrMvXyhguvi5kDmZuUV8H4DyDMcPQkCw4qz3bssvFrenuGU1nuxQEiE2o",
  "key31": "56DinqeWuyoDfcxr5tUUE59Y3EYH8A4ShTM4DV2UrZDdwvkj6bHxoEMskadEHPCZMkiNy1VbYkh33PgYWnmBWQ3Y",
  "key32": "2Yf6eqpUub3i9yN5wz8zbD8AePr7tnLuzRcToW6nabXVB3zkqgR5yr9AELUCNrcP84yCSVMmurMAmz5qs7ZYnKYi",
  "key33": "4gHmRApVsH74ydx4PuyxWHSmT1feeigBAyqFWWdWoxr3QDYJrBW4BE7N8F6cVwpn1vA81pXfhsCfigByr29F1cvh",
  "key34": "4S6HjdiKLCpwcYcXs1uefEThri1UBmUNEbMq9k6CT8VHhRTKBKpehkHj9WFYsBJtZM5W9zR52r8359TkTBCCoKXJ",
  "key35": "ogr5Z6AcxpJ2NbUsAnybAFKpe7xks3ed8FYnKMkPH4pMoFFaXLxWRQgwrMSXKvUjzdLL2VkAAdg4fNmr2EfcgbG",
  "key36": "3ZtVD1rwdtWFzrPRgxC4KVQpqzxvnWWVT5idaRNHEfnNeYxuvFPKouiZykRkWrvnmpSnrcEzaWgxvKPDdPY9JP8r",
  "key37": "2gNC7Q3Au4Wc2dB58nXjB6hvWJ8GB2GWNALyn3ZKDDQwTVgTFQK6UgW4nPrZseUSWBqgnwfbdhRdoroA4YW6Hn81",
  "key38": "5LYKTEt9FMZhPjoQRo8XcotNo3JeNahBnWV3CLiN8Pu4ZJ7dv65iAcBXSWVmmFE4n2robpGrT95ZbTZn4EeRCoHv",
  "key39": "21kAn5buc5DcWJetQkcfAC9Gzb593Gf99u5RMG4dBzFBCg5k94pYd7XNfMjeHTfz5VWhr1xxLqphaJavhvpWvpUv",
  "key40": "67kUsWDAfca1e5tFe8nUZgBNFRzhH6EMYgmi57boQtjojfph2UnqDxGYTwxYszgWcjbcwohGu4cyewuSWesqSAvA",
  "key41": "PHdSpbJfaa9CH4ZXsY9ojfDwXg6bptoz6z6sHeXp6cJPXWqMW1JTwsNghpnwaHnuSEmuvveTo6N1MFqmhrPsESK"
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
