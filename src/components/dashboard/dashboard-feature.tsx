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
    "3WtCKLEMwAb2iha1JqYeXjrcKqdMURSAw3puf2wpkZqK4EurSMaoYLcrdN7TGwZFfMPRYqByTtM6uXFD8y1L5AD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uG7xD1G9D4CEgA1sqedJAH7BAqsZbfxBBU3oBUdeKnnBZhyYhgmxKwn1KdULHu5CEzV437wa1DoGCPHRqAHa93f",
  "key1": "5mWuwT47YyftxsMZJ9ZNKofo48qgpPkNbJAs4mGya8Yeq4EQPNgjBmcRCMhKnSkMJbsBS6JKzCbQgWF4pgZDyc92",
  "key2": "3huTW6mqENqyRRxKKnpoqxShLNdobw1bA2Y98n1VDgoHr9uDdvAaQzGBFnTTxgg5oxfFWDsRn5JhmgWZcuwc2YqL",
  "key3": "28UvWR3o3QQnUqdcYST12DricHhdbEyrUL3N6VodSnbuJL6zdHfyiFbLS5EZSR68RDTjgJsGgqFWRCGYtbzUFdWD",
  "key4": "3n5PEWPAuTP4rG3BkMByzJLVm6Fxjoa26aX88rYcD8w5WTv9DiAXAMohS1bBDwJPZdLuijarwmuaFtuSRPSZiRbo",
  "key5": "erJPNMqxQFLRHE7njusLkNibs2pMXqHCDv71gTPtbTgVx7xwpw3BRJ3ASqpHB4HtnTuven1x5soEgjeiKXGjMXW",
  "key6": "2VpJwgPhDfVj46KsY5qq9HSCRYrCV4v92aC1ySECbbhEYgaCzJtLXF6GzitNm8nAsSUW1jDvq5uJz9BTuGwPm4Vo",
  "key7": "5cjtzh9AGmfctjKVqhGWaHysaetCRqnyBJjRZcwx8CgU9uG5xCzDqpMYA8f638NcCfJD4gr53AwUBxAWa1zYMKAW",
  "key8": "2npKMifTh2dDyof3CwhtUMZsLXDzpobp87Z9pasmQa8sTUfQZsZybwWKxu1uLuMeo4XrwKMAqnW5MDXjVebuwZp9",
  "key9": "43K9mrpxpc983inELhNeN4cQVWjidAUYm38LBNj72mqVRA2viACswEYYDXvikWWzHmU23DneAp79WNtRoJYPpJzQ",
  "key10": "58aLtifBVGyT5FJ7sfYWx23S53NZVTDDdwYpE3HxVWQag6bZdShfjajSV63t1JuGBjUKVSbSJH12DcnusuMgdtP3",
  "key11": "4L9BKMCvzuKk1n4NHrKpxwg49n855CwjV2FJUhsWpJ3hvccdut4f3WQE56TFvavodiJGii1NNgcrHgfgVFHhwzsR",
  "key12": "JcoPfYDi6icaaELhu13YaSiCnCtW3naYzh4JgP1PxZQT8QvgyxqMfPXqqMoruEz5k5q3YroMRhLRt8e4HoVBkgZ",
  "key13": "q6yZo9KmFngCfAFdDWRqUsQAyEJzLXygsFbvQh4YNArDvDmzJTf8cR8K9eL4UhbbncyaEPciYbrF7Vrg56M4bHT",
  "key14": "28GpXJmYA1MMHMVWTGo9GqV7n1eSgi4pxseNnoYcKF6CaLtywRzHHosFqsGxhD5dkoXufhGYEmMyh4eaUXrA21QK",
  "key15": "3hnJ8VtkK1qyaaSZM9s3icp2HiSjW2gg5iwVYtmeDmpwWefge55aypmQhQzi7vR12vxhXrafDnqzzKWcXZj7aFww",
  "key16": "9RxQyeKZr3RXDbF6FPXq78UCQj5jEzdSNXEEVoyMXW4FAKuJHcZNGLKwLBYz19smkR6qN6UnCHKx1BHMQAGxnCa",
  "key17": "XBAZGgDm3nrrebFhLBV3hC1wSkhsui31NWHtQZkkv4y7Pvthj25UCpznKL1dKUW5X9JTH9z6o7KR7FuzMvPToVk",
  "key18": "4vPp3nzERsKZFdda7RPBURao7eLJgDr7nY62TvFrW7NqvUbvdZ735Lc1zr4DT5QAK1p8Y5v3P63aiKt47CThgQ2F",
  "key19": "2BduUtKx7218sydaAPeitfMYaF6ESRTp9WC98ZJ1bKuexkmZ4yP85pmbGzM5zhFq36GDCyCxRASYGTGbeivZ3p47",
  "key20": "4FJ5dwEgDBxdWgADKLa13k3FA3xZjN6dDPjudT3uvhuYZHZ2K9tnzeRmgTsvsh8sXZoFTqUuuUuaTkc18cvqPb5L",
  "key21": "3N3B6bYbkJBvLTBBNTzHAaARj6wQWDJwcuV9Bs7obiz4XB6AU1kK96zkDunjZD3vKc76uTaodHxfC83JrKWuUfat",
  "key22": "37T836hASKWarRcwvk7k89CkbzNBKN9sXuh31mBYXnwdMmFrK5ioLGCvcsrTD5yFHGW6XQQhk4EqHNnv9Fw8oiVu",
  "key23": "zfaN4fQ3hJdxP3ebTAbP7i4YPY4BedY6Mbp3TT7Dvs5J6fTpVLyocS6dYZCpPrmfH6z366hPxsy8oU8D3P3nsRk",
  "key24": "2R4MFMSaX6ffrry3fUknd4t35eRFFiv4kQ98mTKWH5xivzDpBwT9CXXiAEHsLR9At2ZmJzR4ye8cfCvZAh6LLqRr",
  "key25": "5TTEhPCTLWnRXxGypHVWZirM2eB5S71sJm1zJNFtGKmnas2RKztCNYNs7pHVEsJCaTHCJzrvHa3HNv2ZhtxkUoJf",
  "key26": "4xqc64AfCaowVYpqxsXRTnEhKxCULKaqayHsMYvSAKLovkuRpi6VJaYey1jBhTrYRoavdYkrHCfXeRZB3T1pVfCv",
  "key27": "3ay8XRSHrvEVMz9cdgmwotq94t7X5xiY5u2FssqbrkyXDkpuyYWRhu8D1xXutYXwHrwi95KForvffpWwUuiYsBkb",
  "key28": "3uJCkH35LYw5qMGvB5hxaem32Aqvc7KnVuyfV987goy8pzZws7GSfL9mXEB8eB1hvhAVL6ZDHas7yFMbhz68UX2",
  "key29": "4JAdmA4cyjZaDN9wLuWpAiT9chuQESEMgvickQmsJHEmfPxe2GJK8ziz3JeneRvSE2U6WJxDeScomERWM7uFPYwn",
  "key30": "35L1YDCgcXcbcEMpaDfneGz5EyvsyUzzYEzkC7Cg1M4sGDevPG3RSZr2RnddhwA1wHcw7voKNPhyq5isCD9dgPZJ",
  "key31": "4WnCcs6Dh4Yx5NhxpBSWSxmQAxzrhXkSVNPmabom7JLksJJjsTiVZcF81TYF8Aix7xrC192PVohXd9Ee4MAh5Xny",
  "key32": "64zHa7gKu2kY2K5fPkzcdc9U88n95KpGvCH88pr45kCDk154RiZn7cpjddsp86ALmhbTziHji312Z83UBLTDtV9G",
  "key33": "49oBvtbfRY8KBcNMXa9nPiV3kFXMw848Pjz6EybV4zoi4grTkWkqMvPLqTs6GB6iWQ7JehBECB25wYcVXn4LjHHw",
  "key34": "3s6TKbRqqPsJcroNzUKKaiKVcB6nwhcyvU3ioELQoYc5qsdxuss8Fasuh2WFPGFaYxjSeXAnEuoFKEYYsdeZkgG3",
  "key35": "5jhusKteoi2v1W9AMPb5pX17M2pyUJMsFFdGhuNjdwkio4JFrNV2nL7CvkdYGzf1F2RLjHjwMsqHs1ySPAsqHFnm",
  "key36": "5YqBbpj8F1RXExAgkavDg9kmCeTU2bTR7J4YfEw8S38pWCtfjSCvg1UmPnAEEnYnJHqfoVu8uZmPJDKVytq2BZL3",
  "key37": "588WAbky3r5HE4wREgbLvfxB97j87RJYKQ4cXA6AzWFu4RFXFuQTPJeS8YRS1DZdE2Gh5esUGakaNWuK59eP2ELb",
  "key38": "5BYEP8i38oEi4pxPSEX7EPVKcQGPjaGJ8BsfZ1B8Bk32QakdbKRmBWNarF91pN4gadH5aRApSvNMjaR2L7vENnyc",
  "key39": "3wvibWmrH5TaowXpmuk28aos9LiLZaQ9BnDPpcjLjyCEb4eKWcLKZj215sCEbbwR7W3T6TrZMKMA6uv4KXEBFXv2",
  "key40": "3AA9ETKpYv5enB3vp9mEhzDEHfEvZuAZj36ffAd9V4WFnknvQ5hEsTacoz8BPsywrHrRG4SyXJBWTBc6TWZY5c8g",
  "key41": "5LJ3GsvwP4gnWQKuaTFEwvx5DdmYP3nqPmiL7LiNvdwF3f6F6TWdSAQizXtLTWiEM8UZs8vDcgzKfvieAhP3rExo",
  "key42": "5ZjPKm4XbUT7QYB75CsmWFKGyzPXqjQEHfVo4zWda24dhpLxwnZqerPgmP7s2w5EkRD5ywzk7ueUcDc3Ern43duX",
  "key43": "4HdTiZBjsKruxvd6Ykypb8kP5GxNM449Hf3YKjkXb8jpLdFmVeRNeAWS4fpBNUFZr3s1UxtKEXiJ9xdaXgfe8phy",
  "key44": "5vPgA4eWBpjAT9Ez951ZKDhxqmg8xYWtD3nWyeAsV38VTaP1fNR7kgXheSK3wCagVqk5XmaCtvxM9KkPLLLFroEn",
  "key45": "25EygnVBVWxkgvwKH4tDE5d8Cadt3Zs3eenA9cZqUdZBoqmkkpHFxTzn43XoH21KFBWKJfqvNbAUCUgSHFig5tMs",
  "key46": "r7eyStRZmADRpHuySoAaFnb2eL6NFsWxqYq7yet7Kh5tWmbHkEEJmHnR6uPzstjuutevvwSM9m6HN9vxKbforJv",
  "key47": "354j1jRN1eAkwkcCLtzcTGpSNimW44dfqHGnSkrwQYJopveW8G1XHqZ7VKXRr6143G7E1srJVqAecu3nrCgVSMfZ",
  "key48": "MtgqiPAufhvmXqHC6WHcckHpp1sgN82URfn9eh9vDxDaZDYF8x3utdo9dPynDdUd3rJYWEc1P3TibDHkQkL1orE"
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
