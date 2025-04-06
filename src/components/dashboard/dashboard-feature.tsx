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
    "2yC3Q5rS1rhxhd19UbxsVKSrs43mZcgCE1ciQT7nD5iPZjdyJ7oX7vQkYC3RU2NctoayGvVwrxGP7xgWLVg5R677"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VtUHfMEMzVgfTSXvRU12tG37gBeaWvKNUGXfyX2aTXgcN94xzDqSqFzhM939X1uiogLUoxyVwEg3dvijtJi3z6m",
  "key1": "3ZfXpW2Tp4wmKD5BZ4PJRGAu2wtKTP7LGULVvNmK5vjkoiwwdNjjYhqe71C5pbGgE8uhv6dTxHafVgDE23d97eDx",
  "key2": "2EhBCDKenVS2AraCYU8DQaxihKHBTjfDGuE4Aoi9bp36yUVTfqWX5jtiHsmZQ7Z6iXW3x95gSbhzbWH1TDkQNvKw",
  "key3": "58VpxePDF22iPW3ByrFNNRJpHnDRfXHffk1oG4PMwvporxJTsC3XuAXVxptNxHgQjiuffTMVV9D8exmtB8DVJ4cG",
  "key4": "4uM7CWtrqtJTHRDnB1YV4Y1KEQvCbFB2t4jua5iR2LBhZWVNmemjBgACsXMff73mWVFCz6CH9mQbgYSVfMGdR4Az",
  "key5": "43QB21TgruYmj8GiPPZ64hUtmvvKSCxYNbt41e7WKmUVFWr1hbKJgPvVrMRW15n4mxxbqEuBYp82MQ3k9p7RgGKx",
  "key6": "ghLZRc1BGfNUQMToHFqPRSHXG5WJzm1PgeLkeTofje2sPtsweEWNS3PawACFcMrFZzd2MTtcDg6xSHdNLsb3wwv",
  "key7": "36GNYmk9Z3f3LtocDRx5ZYv6V9vKfspfhvu7WYrqjvGUayZfr3F8vmTDHHqDCtroa6pXsfd3XQNnxbHQtUWsaDZ2",
  "key8": "636B2CbKASqX1EDJsSgzarYfyUkNJbmiRudQFrb2Ngane8FYuxoZZ4wgrxa6zpm6DJn1GUJzTGBMUUCWJnxw4EdQ",
  "key9": "kZWWcxuMUNeoWdBtt9CJdcF4Ka8Hf1155bmi6VExin84vSo9sBv1293kpXBFXgUWL67u5WgR1eEfWSa2xAbHgij",
  "key10": "59racSgjFFC74h2kwn2PJpkBySXrq7Vo7gD8dk5dZweLZeubMkfuvh7KXK3C5Q3Q9oKZ548ivYpXmXwCdYdAmGbD",
  "key11": "66gxxnteM6MmaM1zk2U6LVEMuqnuE1LSRA3TQ7NHFxRWjpZnUuWUyWTHuEopWhjMKhAMr8WHXNLRaTbZokC5cWzz",
  "key12": "3XpV9EjMtJXJ6z7F8SxamFpNmPf4tZmr7CU3BS2jUwNch1GHcCqQmFRoaE3qyEahaCiJhbKtWw2EjmrDPG8BrGwd",
  "key13": "5cPChHZimf6uTJ6NHT9vzSxYBDtP9Bmx1czUGSeT8nv9rfzu8LztmAx2giCS5UfByJ5fmuRo8pUCHNi5AQMZMHw5",
  "key14": "2Jj7wPsSNJbzb2ZXUcmVvjwxYE2ajdrtRcxUV6gg4ZeKaafhQJ4Jdo7MicJBKt1r5ruf3D1WJszthfuK4JG6cjvX",
  "key15": "xEVzb9z434AxsuqyWEVYPPvu2iEhAs1jw7WykWvWsvrKRbLpJWyxxfnteWj5r3nyKCjGH3Y7njWVxRpaGmFhmQg",
  "key16": "z7BP5t88cj1hDB7ajpbSCYwJxGi3f1WDnbkVhaZhTzLoLbyohZyLSR1QiGvhtuWpbp2mNLwTg4JZfwcfQGaVSRE",
  "key17": "59ixnNPEmER4i4c17V2Uaz9nPsFUqUEBpw41nbxX4n2VVdmS3qcHbej8sCMLLLePZM3YkVy4avaji6L8FYwcfozQ",
  "key18": "4wSQTSnLBgto4HmJPZR1PfkbyHqJLPqAkmCdcUtouPF6eKqrbms5ZGYgConPMmmmBYPxUQAYzkiv4nzGBM3KGFBS",
  "key19": "2U3RQNwzJa7E7Vt4F7pFX74XyEfqvf8rxKu8nd2692dDHxJCuYTwm3igo5CATmgRSA4QEpei3RhKpM88798UYimG",
  "key20": "2ojV1ZWiJoCyUhmv8qDS2QGFs2kR5CvhxrN2nZdGGbc11SPTVV3udqJA6VTiPx4E3kfmRjuDWupuRFVgiNzaUusH",
  "key21": "4uhhaiKzSDQftRgtDRSZU1HXPPtEQg2sQBkmhLnXg3m7E5wW42n5KVS6R3pfMP79sST1bRG711TeXnrLA5t3Xptq",
  "key22": "xM5btYrCyF7w56SGknLnCcscTZW1kG3daaJtFeW7hGeF6paC5FP4wN18yZKewGqPQxKJqSNzP5WfKNMQzdK38rC",
  "key23": "45xRwwsjb3vXmuK5whBNAwjb4Ho9o7crEST2ZZFzwrfCWbYNzXAWSgC13JoCUoZm43FKXBNYTWnQhsr1neyNL9Ea",
  "key24": "5bzM8E933J7Xr3GXuxQ6WmptF1rdfzLnbz3uQopuxPGGtQpoM2gQWGCjZHJQMocC1eeiozLc3KNG25paYckCVfWX",
  "key25": "48n1Ks4CcYe1YBmRCCbrgqzrJweJdZfSpP8m2pVDaHMvZQdzPpy9w5LSiyKv9RmyTLhgL5ZnRinKa8pYXkKfwdBj",
  "key26": "roBCvJE798y741Ec2BqJrc4GQJDfC4m3WByrEwtQ6x3Tw2G61j4VHGWydJkAKeUencCWbv4xsKjvtd8MD3z1sXN",
  "key27": "5zcqXkuTjfyMunRrHhkXGBEvhCYhNK2jNKtgR58NvG9gzdpYNsGN1zHEWx45L1RX1Ynp6qZxjLXFsSfcP6QS2aq6",
  "key28": "FAd2GhLHQY76oMNKDVFdht749N3Xw2pTixShuPKpphDfgQNS7kBVEYe7cixZWkPWuCF3wqKxDgLh6h6V2pyu3eJ",
  "key29": "5JE8dygC1JdKhWMNMZ5m7L9PW4DD9U2Hzeh4u7oiLkhYDinWHz2ZW4uoVUBYxqeRvgKEt2t4c4SNz1pnLUUA8hSh",
  "key30": "55XMUGWVGc5QPPFb49mXUjdCMaGtL3sTeTDhhpAjUDE9UTsAuTpTTPZb5DEM69H7mFvJS9Bf7DziyR4emsDebHrJ",
  "key31": "3xSCmT5biTXTdaWqTpRweuQXa1wMwZaPbjMzy7eXgp5zuU8XBQQGBaGWvvCZYccbcSrxwPUSYnHyqcRx4iMf5imv",
  "key32": "3CCc3UfpyLUWkaxRoCYVpTJv8Tyj988j4LAWVHeZxKsjugqDKVQ2mNAae4bsJxvsxdjYMp26a9uuUW5EY55VwxAk",
  "key33": "2EPWzVrzJUuZdJGCtxCHPMymsYE56sZtFwEufkDvAfaM48FbpHQ2YpLL2Z2CR9qtiYDvCcf4YNFZ26nSCdanJdi2",
  "key34": "23hGtcYV4Hngc8tY9TB9esvGqrDovUXnk8iHoR6QdXq4xX9M5mwTQ4ieP8Q1ZqsZNHLBDhwxiPUbPG5tfbgqML2B",
  "key35": "57wyjtELjkeXTcqTE4UE9JVP2CERMFSQLUGaJujQ9FZrw3qA2RUuQJX18zLwfrYY2fpKphAdR83KNj5ETKt4jeFS",
  "key36": "2bWrUHf4ofCdxjRpLbiokAVLwiXdCRh7c3q1CuoxgbPekTpBpALTo4hUpvXvKd1RAds8sDZ8AtMzGHfvwmDT5Uoj",
  "key37": "279awd5RDSMCqadsdN1s6HUjAY9NZ57oTH745K7KfJrmJd6h62zG2ZFQpvBDk5fvZhDsERttj5Bduc7qqSdpDhit",
  "key38": "3KYq4RR7wdcYmT7Wzyy72xR4nidXqJuPQLchUHjvNBoCwHNYGqCtPMjNgE4d5kK2VrYajx3x4CJnXAstPF6dKcvE",
  "key39": "2FWFE2g3WAh8KALR2NnuXqV7LKBkUMtnQrPP9Bj5cKGzjKgZzP4qfAPJX1rSk4buxwaKTzF1j7TqNyh8W5TTLuvj",
  "key40": "4uA4yJxiF43P5bWbmrEXWJGkEwvYPSq29cB8TvX1zQLDxLjgXD4sjY1HowUcSn7Xz8Q3nw4TDd4wGeJXjS5crw2b",
  "key41": "hJDBFqBsJhoPhRrxs9uWAWJeEQ2RRMCHGtPvYew6aTuUohkkUcTXkgRSNfE7jtAX4q81b5vzCxDvRJoNR55yBJX",
  "key42": "2S7wPg2WKcPUXK8ZgmaFnyEnZd51hwc76mzgBsnSkaLQCZ8VYdDPM6qY8GCuEFKtvqFn6GaSb84FC218SZdnqqXq",
  "key43": "5SrpKnbZzTor11ixFZancGmwBBBksfgEJGAqDkEGoCSXeLGovYroLcRq7MJgctEJj2ehScn7Lg7o4AGgiiPJ5N9Z",
  "key44": "jEXVMG77pMp8Tg3St2qit3FXek4wS3hBe4vToCG4M3pRndiZsQ56d9KwTnYG3Dc6MJqPQKUM5nHtmoAK781t1Aw",
  "key45": "5X1tktZax54YjyuusX6L3u6c32JcJFWu8Yn1Zcpx2n7x8VPhN3XioQA6si7ecSYR1t8RyxPCjFvk3c1uSr3wwxTm",
  "key46": "252ubjvDDK8RPLGBcTYuRyb7atz2PFsQdhkWLnCmxXYAoxFSdjddWLycjSQmnxiPbbc1xFPrGc6a9iHM3eKFaAUr"
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
