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
    "3rQkHzSE6pLVz7gSfyfj9CuNirK5wHuMEyjBQoRHR3iFQq4R4h3WD5SzAmtK1a8w9xNrk7hmAN9VscmecAtEaNxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vBgxJ69FMXoGiLbAuvfVZdYP6kxMN7mVqqM6Rh64A8QV2ER4M5p1TVBYiJtvubCJp6egMwYY6RzRYVibVCwsmro",
  "key1": "4yvywU5WyNs96iWiZni9gGs713hupuDHDSTiGf1T3LpCoyRtuESLjSYXhtyptNhBDQTVzbezzFpbN7qCTZoY1hCx",
  "key2": "2pjqeAaP5DiwZmzrw9ic5dxztfBGcuB1RCCDzSaXnPgMoA51t2kX531QH9s8PiM1eudfUcRWErbgfDpcKDdeAFyq",
  "key3": "3xS1vAc13TE1WiAGXGjJvbvKzY9D3a62vVbduqC712ArDFYee3cK4Sb8nuWr1wZHj42TgvFZCTbfuEfS5jB19229",
  "key4": "CpqwEzDGWg48r46RhPFyBZUcPB77M3WLivD8fmA4nAJWJShHz3XqvoxRbJZ3h4ghjEPc3sHgiHRgyeoRovMJddy",
  "key5": "v415wxEzEx6fRA3twNqM9n3yoRFrWBTFigENm158ksPrpzpqpQazFt43HfKMTXmNVcDm4EV3p4wLmjjTBngkkQn",
  "key6": "4XxxJYaEcRHawBm8sXEB1Hkhne2utJYaEcC65fsHmp15x3mEi8MmNdGF3Tv7cAG4XANPiuhCq9YWwiiXzW7GHC8g",
  "key7": "2tfbrHZuxYf1Mhxusuhsqiq8h94AnebPQvizpYvFzvZiueMBdvZBJ5hoEqMjjbAK2JXuiuzfuonJSjG4m194Q87V",
  "key8": "2cxXs6jrqm2UCCQhCjJLiYdgt36WNipgAVVC9iqkGgdLpPChYFTrnUAcmkxpojyU6hfcsqGGMqw6yNoNL3TLzmxF",
  "key9": "5Atbb7dmFiNX1tZtTauzgE9uXy1W9M15jRijvQg7LFnr6sNSBjB9F2raKUEN6aRRYvSpM97TtHiwqkRbG8amx4RR",
  "key10": "Zh2KK5TvdxBeHNjahtAwCi47DLFmRudt2kCnptSRniwzEovJyYfBB1UZdML696ZYWSRq54fCgjsXYuoTaGfwsTp",
  "key11": "Crmw1C6hYsx73nw7vC4mkZ19t67UjZCRr5z8v53LbwMvR2gk5W1bQG8UBwNNAmmnZh9L3P47Mq5ZH97aSmY2xYN",
  "key12": "NrXHoSuLHRCbj5AtPSNhtuvjmNMxofVmLDG4wwqVk35M9gnxm7VFNf3Nuw2kcXC37FZgxToM6SJqnSUqW6rkv2c",
  "key13": "ypYFsju4PmV7o3pwnxLBBWa8vUaxc5mZQP6DdVofvh7suykDcwXFV6EPLA7LiUt77xRpCQKGCuqJtHcYY2pu2VP",
  "key14": "3Eo25Fhoni4V8xpt7qFNBD1TwUjqino3EA94PmJ8wWdrgXb4YRCSHGE2FSbK34c8wPvVpFVwD12Aq5mebro4fShL",
  "key15": "4gHW1iXGtDoLZxh6zpQinvBWmcU1ErnJe2kVRjHHDRZQFEnchzdD9ekGyxcQLVJR4pHsrHa7Z9favieRFFNkLYhc",
  "key16": "XdmYEfrK2TZMQmJMNvXvoNLi6KC45wo1633G4m5C5iiZ152ZaVfGoDA3jcNgM75PGjNf4yXm5byAroFpNi5ownh",
  "key17": "3PPDRAVv7vRYfptBLxzBVYq49xCS5nB7uvdvu28jfEJk2CJehNtyF9FC5hoo8ugdZmMhfMYUZBwBLX3ULLtDVuom",
  "key18": "SYRwEbCAj6i54VMHpLYDaWdKCjtAUycQXb586CxzSkz976ndjQjkcrr8Ve1WhNebEcELXvadnUYTbUUZp4tTPZc",
  "key19": "38g9i6r5Hpp8zkh4tr6qCosYgYxgeL3f8fv6SDWkkYgJ9EaVwcnmGZy1zxnA5qCycQtrHTj5GadG3UnuGLViyEQQ",
  "key20": "49ke5Wcw5S2PgtunAHsNAiDBGnjScBQNSFxHofzTz58HvnNHjhDaPoH8yhRfEioHx4WMuC4ejmAEWmvEXGUYHA9g",
  "key21": "2iSi7K4LYVaZpivvfmxjrXAb5p2qAAMZ2GTpnbXBkbb5GP3LH3D3hLRGRH5YnLE297yTgue2U2D7JL6Yc2Bjqoob",
  "key22": "3qpmSyFDr266jJqtY9YgxD2cS6fRjrsw4hjgFeJxBKKPGj1ycZR4GbAzXrTkZjSgheMWg6FfFuhFgdwMKnHUi2a8",
  "key23": "56sAKGah73w33qSLsgkZmzCQFkmpgbKqUfTZuLTa2W2bKzSQjffqKALhgvdUviZyHByarsr2tJcG6uhQeYi4HJya",
  "key24": "5TQkgijSLfQQWhSuww24T8oWobCTYucCczfMCxieUudL4XvRcupMATNYaTuFm29m8sKnfTUspMTFdKTAnsmb7cCy",
  "key25": "5PuUSX8xAx5Q9koSkkkQ8xHQPxT2233YjU8CpMjfybRe1ttufex3Vd9Q2Ahifd1heoXgHJ3XpZagta9XLiPppXfn",
  "key26": "4i4SzukZjQobvia2T2bHuSatoGUGZGVCLwnxtS8Sim6eHuyaigXiMKwyexS74gYAGzBTv3K8uRaKRpPrQowvYU2X",
  "key27": "3MzHcZthufxYJLTB9ZxePUcsFFiDqNeQoPRsg73ZKxGZBsKNGaYJh9FCHbmV35DNHevNAk2RhMRfqyPGoFL4GVd6",
  "key28": "5sKb2fxJDJ9ajyv6NE3E9obhV9C5vBwSHZbDbEA2897wMNtKsw7D8KhZ18Vg6L1QJQ1E4wL6hWmoZ9rUYNaGYBn3",
  "key29": "NemHCVSRAEhNmsLXUPX4avqbga5iY6CXYsAEhWX7JFScvGesSyzRrY4XYCngRWm8AF4cmZY3zGpuwju9eCjEVmc",
  "key30": "pVszCXCK4yv1nNjLxz9uqbJn8op3WPn31Wac19wwKNBMxSWjkVPbXgsY9kac2ZQ7PbxsUcESWovjLkYEwf1yiJC",
  "key31": "28EtJ59qJHKuxkMU5pNZwzPquRZzvbX3BEowruVmtWuf7LV5tR4hRAPq1HPH9py1xNczbRJiWPnXYrL1VUn1y1GR",
  "key32": "tcAUvFKYKfsErT1o7AydgYEZWSVBtoNvS6A6fd6UnGLkUpaBdhLpMw1mo5BYj87yzCykGQmLUcDyV6mrBjHtGXn",
  "key33": "4164CcJbCgmDFKbNQcEDTrrcVma6MdJMt1PgYdgRJHP6W9NLxAjXv2K57UzE3bRDiqVqEuCXnLBP7bjdP6VjBsWY",
  "key34": "5qGcy98AJ1u8JW1MMLYfw4jWFEXFAzEj1gg2zNEidiSpFu2wH8kMd41UCkaSJegfPAFyBktGJg5rUi2jqYEDYyg1",
  "key35": "QvAxunGBSSjCdPDpCD9pi2JtFF5dTi3FxsjEcR5ZJsDG1x8twRgfPtHWs8oJTYumMmgjorr1mXFFfueApcivzfc",
  "key36": "414nM1EVp6AgzFZtT9ZbRaZ5teSAdu2wABn3hqTv8T4eJJkKRcs5WufqjdnQQ5pcnfRh3vVDv2hMfNY4y1vzWV7",
  "key37": "4eXgVcH2kYsM8zB29wpWJADcEtPnvgHRjXhjaWyJyPHMKxSqkokkB7XWSni3DSCSDnJ7aBjCFbRzqbukjmpZSf7N",
  "key38": "4LZWyc484VWBb8c8Pgr1QFp2Kr2pfJrDUqX1yPc65oQLE6vEgUxryYuKvzqBXdKETibdXaovHrcKibbUXXtHfMTK",
  "key39": "5jnK4JLkbzVF7iMvqE92aYCedizDu4xeB2VkMd8yYw5BnFxdFvSZC16ftRyqkqxR7ARyyzRmtgTVUSwQP6Dh2de8",
  "key40": "ia7RyrZ222nfzrc7SBhtn79CyV5nfUBWzDUcSEjJtLJa4HPVu4c3sbGy9AkfhzTxyTqjfy8aztA3HX9bG6Z9TXo"
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
