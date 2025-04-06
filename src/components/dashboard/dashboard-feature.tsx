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
    "3osGBXfGgamWi9zneUdwjBiQToxRfprGihjSrhTyYr7tMbqMDkYnELgAk8WhFH6jZNcqLhxb4j2tz52k2YaoTdb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g8uqTL9sssP45sSqaegyVYG6jKyTV2u2LB8Z3c163fqpoEXwkyjKGeuDZJH9Y556hva6FQ99K9sUs47XF6WtH6p",
  "key1": "32GJJgJLbR9qwQLtzxbCVW5ntpP22SJnno1hFz3U3PX7bmjAw9i6FgmCWELn1BCb43PDhMyx4xDXaT22XvHwu2jK",
  "key2": "ZR7t3cz5vozsgobu1P3fGxwj7L2ZQZdu2Pd3TMZLjqVDQq8RqUBWYu881DCFZ5xNfbMQSRYaETCaj7R3HDbCcrs",
  "key3": "126D1osxa7b3NV3LdWYySZSv3DK81o8FGgLzYokqWxM44Aepj6ejsfCKnAEGjjtzytyNks5HVcdkKHAKxE8EJPPe",
  "key4": "4L3DcMomdeFgDDKj1VhrN4s7KHB9PoMzBpccDFEMUFD1wXhdhW7mghUsvs9GdKBb3w7NbPan9o27vtgGH9Dnr5dX",
  "key5": "5EbXxTjweGhgCjxzVXwi85ZLVkFSMuLxAhT3Li5MVvDWLFRkb7FxBfVWiaQxspb6YBvKQo5BzCnheZVPRGJPYDwz",
  "key6": "3vpbEJ9e4QFfypmyvVUUuVVoKcpPrXJaagYk4jYvHKhLAMVkq83jkfgPe6wRGDJnAegFgvrtbJ6ZYFq9qNGxwHDf",
  "key7": "365prckpNhd6ymmKVAfi1zN9jyeUpjXPCU9UAYqpfUhfNNckUoLbX3ny1WKWAQGJ5qiqpBhejWPh8F8Joxk5o58K",
  "key8": "2ewQ7Z9WHuZNEPak54pFHz6LMc6LCLB21S3jQoc2CG1LfddfLqUogUQLizwj1a8Q5PaqAwyrrPGNhVuFjeUh8NSB",
  "key9": "UuCeHG4nm2tmAAHKg5JbECmYCYhtrs8B6MjzehajAhV3i2nKAvjreVNnMP2X9Cdk2ER5cQkXsTRuBhw6k79toDL",
  "key10": "4Dvoq72CyWxG8Qk84jPjWN99L8nHPfNJ2xGjSDBSYpszTcCdydfnoWf8CqB2ynTGm5F5EvgKyu2ocbSTR71oq5X1",
  "key11": "2jHTiDYKECzDK91xc4ZJpuMDP7UsFYZEqg2jvnPQqyMyH2wtCUoSqrYHHC74zCwFRC6yYvJFwiZ5qtWBg5Li4xQ1",
  "key12": "38MQhC26cDTxmvaSqM72P437KkyF5CHqfKqJ2XjgeZKJ6z3y9v82azxDFLFvHt4Tr8UpGrXCeJf7e1EVtVNbMNyp",
  "key13": "5NUx2hRtrKExZ5k1JcDbYz1gVGsvNhvWtF1mQLJqKJoPevCNmdDmcZ4y4Aw3WW3LeybLkuET9AExQpdMQfewSPry",
  "key14": "5zZV1BznvGUY4v6ziQ3bMpASx2HdiL9Axx9SSA1ZFdXjehYYy8o8D1wGxaAo1AR14NFtP5vKorfAZAQME5RCfeSG",
  "key15": "N3nYDPfJ1J4f5bLu9m3usPvh3BkPDx8FozsydJjQyeG9U6xdpFS8jUdxzUnbKaaF2LtqiKMx9GqeraTugLv5k1t",
  "key16": "4iNVsGHNP1v9T6xRqCaiqsk84HEE1ErNhHs3DaiGehQgDHGCdCrPtuBcL2JurLCswJPAZ8tNJMnq982VRZ1uj79J",
  "key17": "628ZsK1BKs4URhcJLz8vFkQzXAesjGbcQUE2X2KQTThiUrcZrabDQhgPUQWeeZxnDPZq64TpV7eVVYig3HNGPecT",
  "key18": "4Wqw22c979ux7PSb42NLyzafBvZfv7Ew4DJXjexVfC8gpds5Zhfy1sDBnooCB9cyfJgsq2rvKzp2oNzPFxH33rd2",
  "key19": "5LWrpbjQbWQwAjqgbckdz2oafEzcvPjVnZVV2K2k63Fe6qDJFNCWKZ8Td5SfWbLMP1W9QRfebesBeEYhWdp8WQcz",
  "key20": "2mfuvpMm5xqZQNK3KTBXs4GDEEV8PTmDAJY7C2t7hjJbmmAc6SCk8hdBSeKANjJpKjuD1a7FATTsyFY8kAF5NwUo",
  "key21": "QPHMnhZyRMFGHdFWDPgPPEAfLDFHaRUNCrDGVUhipoudbqapUM19RKqZL9V55rfeoGDDNhPk9eCPh2SkVGXVwnu",
  "key22": "41SX59iY67E3n36xkmDxma4b2jDx5uiHrSZhWNq4CktucmHZRPLqZRi8xmohe8j6hD2Abs7yZgdZw5XH8peDo9jU",
  "key23": "32LnDJY27C1AKjR5ixLRSwrT1UEFMjqf9ARmGsZjNDXJzTC3ohvt6khjZhvhBfCUjiV3JjvotpKwDs1oUEeRd7V6",
  "key24": "2Zk9JuB9dgDn3CEKHVsz5A8bdvbGqW2TnkpY7jE9PCcKf14Df5nnHYmJs8KH9Rqh44fn6RSreMpQQnfCNPbM6MVt",
  "key25": "YusFwSixDNoicy5PLa9AAGkD8i6ZpjpHGhBhBwqxrJsCuN4fYeX8W4ZQcGLRPRphfjBJxE8NcXHC4zF64hVtUE9",
  "key26": "LrTKr3qx8HvuFgpgwYEq3foYLd1t1SDq4wxNFYtxgzdQaULXGfHPgPGDCfZokFBtg6kHjgPPePtqAKd8RCjPmKp",
  "key27": "3xbKh1LZKyGDfAXJDYdAeBbq1ZWyMqqniW9jUFNqTVbCWrmkPQJEPZp6vxmqntJoYtD5Cj7KRKvc2uNeWEd8n53B",
  "key28": "4EV3ZW2uUReb41n2u2RpCwJsGhz2qgcyL7uXPZQPzYumE5gLQieT7oeUymKsZW4aAdXKrKSUnVoAu7Rsht9i3YpL",
  "key29": "35pZQpckX4f2JaAJxW9j3TuxQHrJbQ9qBuGk229kQroJR97uiAzuj2aWcDJ9s7Ru6taweZAkut6BmXg6xz1VNjb2",
  "key30": "2J7N3tEQzfVTqB6kuxy9yM8YnJj5NznSbqtLf9ejo3nEq9ybyf6irafGLJELt82E9MyAk1tTtERysnuauSxKGS5G",
  "key31": "2RU8Va49ETyJMvmjPJ6k8PaFkEXvGd6yVBSLjQ9TPsxHxaEDGEfqS68jmZY3nsd1eXZBDHDgo7M1TtNoatUzdCMn",
  "key32": "4rcfwZhHJ4bVmJCDTqS9rAyZFeMCjyXCpC1NoHKvXjpdY5skYVsLWuC9GgbCwSyWs6Foh6THHP1zBzCTxa2Cq4xn",
  "key33": "3C3BGUtkxHCCaAXLgL75omcC7UDPK3JnpNzUbydJ6TwpqUkBz37rBLAiEPDvLVdrCxhPL8CtzERgHVjd93RDHeFU",
  "key34": "5KAcWp2kUoaxCc1415GDJYT4EXm8JgWAYgfReJgnVhesqp8dy7nK6vS8eLXpjJ4u4cinFbw9mb8r7hGUuv1Zwrpi",
  "key35": "36nSedM9Gj3aSK2cf8zeEpnNWBomPCfmTdtMbntxrhb5ikbjboCVupBzXv79ERDLpmgkqrrDr88J3aNgR86xHbg6",
  "key36": "7sa6GSFFedy38in1xLjBGC9hssT5yyZ7UqRMV8NsCmiXCVtyvEWefgap8pcf2Kv2yEUZxdRBmGKJK1LdPoQxj7q",
  "key37": "2MmDmRy4QDWERZvCzJ9qHUou8u3aGeJP1kPL8dXj4gouvz2uGgmKQX9ru8Zh8dLJYaN4Xs77PX7BdUpgkffnxrpM",
  "key38": "fd3qHXh9CSKtQfA5TdGBnTeyUPKXFuwzERDbtk1U8q8oQezXZoquHnWqkyg94Nxsg2C2rVfjcXzY6SufCBN7CKL",
  "key39": "5V74LfKPpXayzwv5EfWa5mpU1A9LSJ4fKaKXtVEinEBFU76wkGiGSKa3p3hCcjyzvsRx4gYo46Y5edWRZZibRNN3",
  "key40": "2ENXchxMqBoxsj2c5MUoz8RzsZ47YpqCf6beqUs1wMfrNAWwXq13nb5qX1XobJTo7dvtBB7smzhtnV2Wuvhd8rfc",
  "key41": "5uHUBwFtZN96qzqiXuJS8QSKJvPQ6BNadY5bWfJRur4uE9dnPcFBqy9gC3wRDc9iZSvWsAsnzoi5Jk8UfcgPAhaw",
  "key42": "2wTiaLVegZDnRbEmRtoS5KnQKqBhbLPWHcvLV2uoXzKPFWRsEgivdvkp261XEyXZRbmRnXLZ9M46KfYuRA1Qn5eR",
  "key43": "4Ee6LYsDUBYqFF5fXSwqe6XXuMDfSn5MqMxKkVR13UN25PPNe2De9xNU1ytbGCpky7W7eUYVeDZcpUBEpQ3v8xTj"
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
