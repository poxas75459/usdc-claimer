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
    "ms7PYpqHxnLyPaPUbJ4mT9HCvaxggUtzjwNWKf756y5TU6wBxvXp3CAJpCZYtM6Js3DYv71sQmZfJ8QQ16MeaR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47XB8zHwUrPmFXjyFoK24CkgW2HwnkV97NVQm7sAeYXKxZuZZsLGEfXTwVHtZWfejkdgKWx8X6rbuRkA7dSBoExu",
  "key1": "4fotsdAayfsUeru7KrQfCbRQqEkiZTzH65TMgwzKsFTxuLVnmDau6EYzpuxmAiNoZRn81vxS3nY3FDqrvF2VW7ao",
  "key2": "2vVM12sSMKguJBXdyZFLaP736T7GLNqzy3f9M78JSC17EMQ5SWCBFXdXzcV6RJXLgNC9WzFnxfNmxymKEN7oFW3G",
  "key3": "3wMxqMavVpGst59tdoLAkRb3qNwp7hVjWG6KDsHfBgM85EZkfK6BwAbJ8ZU8mFjhTJXRVreRB789mjz2gr9teSQ2",
  "key4": "4ebriqu87h1cW3kQAwLtLavSEFtga5LHXJXQ2dtQ8YnKZ9yLvY6qKmPN7ExcTyULk6F3PHnvEL5UipZPSoqv49XZ",
  "key5": "YMvGLdHsFHhxmdwaXYD7dgLny4s5g7t9yK7krSb5eJz8vPCLFe9rCVeaDFsRZkQUHHRFsfdRMP3chvpaWx3DfCC",
  "key6": "539451YG2CkNBtgHBsYZVGDdaj8yReNHAd3P2pBGoyVht2daaBCCcBFEDgoW6FewB6VfTb9ztd9pxTBuF9qq7xHG",
  "key7": "4mBACChuP24J7QwFJwmbjmemfR1a39Mv54qsh9437Xg84DXfzrDEmdHarWLAPD5iHQcGgfRbSzWK8yP5X6PKo6Lk",
  "key8": "2Ppgo6UTQMjwuhZAP4NKGwY9T2BQsgHawXdLLaErgQYU8Xk2erZqphdG1TdJyDtg4jMt2s9eAsw3EVQ1yWcDgxJh",
  "key9": "5u7wf6oFrig9YCxZNs7zcmW5oMYaR5W3NbjModo5kczDqeKMt6qdZfj5T53EYZwxHSjde1SZDkWQGJk2bTRoN2NR",
  "key10": "2DQado5FZ4hZ8cagfiYNTfuYU85t4GXLPZdzwc84W6w2sR8m9cGxPL11NQMfijMSF2QwSEJpkqoxJjuSeUbhqiQv",
  "key11": "53WEKkqEjr55GkuKBRhhN2oFXmT5nYZL1BWCnNcvRU2gT4vwd2VWbU1QkC4JTEwnsUbMNdJCdEST3X7FhKmv3hoe",
  "key12": "MBZyN4zNqVnUjLa95yEWwapu64rDhRfRFMSzvPb1T3c7sPrdQAQui1ZwapU3qkiQC8EDYzAdc2DrYfAY3oHcnJt",
  "key13": "m85SHAM6eesxLXQcSyJ4nhqygXTBkCzS9avtNFNoNt8dkevsdTiCjzP2VD7SQT45P3cLJVbGSySFXQYSavSTRxe",
  "key14": "5ud3TAUpFokdhDDdYuroQiH3KHf8Mh88PLJpvUwAVVHEUsoywwbuqGmneVGgBKQqEVhG4bQrvZZ5hcZdeCTaCfQa",
  "key15": "3pyxF1vkBAjTmrsrJVzamrurcieqwJW7LAeKMxKmjFrf92WZJxiyJx6hNr7tJcGYTHBs4entiwihbd46Gcx6Q735",
  "key16": "khHYqvJSpbtMZZtXVPrSvNqTZaRmmwnSV6UqHvQ4ByijpMpjdA6anVdHiqocmfvaR2KHgTZjQoFALM9pGkedx1C",
  "key17": "2sgvE8RNt5L946bnyGNaWg53AWo9DMXXJadWoazX3w2XvKxKaNHHa6PVSgvTXLK3s1wwscQeTwpQk91L3uWznXDh",
  "key18": "33xVz6APx2Rni2eRxbcrxRsjEKutyhXKQiemF796NxVJwmVQTeDjiWmDJ9aKzpLJGCBwZj1CCW7eQ8bMN9gcss9c",
  "key19": "4Pa66C4sLVvgfQRexhbuLdqmUdLv7yq8sy4vNk8dorTydu9G1EffJ2kxt1JrP93qHB782a9HCJPAS3D7FmPs9z6h",
  "key20": "4xA4S4ynVHTLD25JVyL139mWWskHcfHdruTPm7FKVFN64K2qEwnf4pNYgUWaUNrNKSLLnCeQR4L2CT3V4bqGEWtZ",
  "key21": "61W6bp6z9gw53brycX6aS3fQK3jrzRk4gNJRu7a4f9YJjAzwuX7PJP1BHbVAbdRKMvjUYqi2ZR4nu4iy7A4TMRTq",
  "key22": "4K2h361MT6RWKTLL7bcFgjQ1tSCNt8iX6xtMPDkjjGDtu1tK3nBqLNghYAGg1XmVidQqCvur1cktCMHWGDByUEuV",
  "key23": "hcdEh79FXpEmrRd8aKYbrzRZW1NBeagz99DAiDRv71VjH6YVKfAJTYRVH3qQqs4owNkkUVKeua8o44AH6iNTTrh",
  "key24": "5ob31zEcx365zLR6z4dKPaLYtCXGhtYTuk1LRA7wfzwgZwmrfetuxjxUp3gvrHj41H7LUW5jmtTFEGvq2QXJvgXQ",
  "key25": "4pjWZP95pwcebhc1jhs4RL6srBj2aUQwr9ShgdPJAWzecsfH3rfrwKyiivL2hoN7TDhKBPzJK7tvZb8xj9zSorVk",
  "key26": "5wFEAj8YX4BrPKjkBjs2QxuLNzLDAtpqPAirbQSwPHUDRzcQyHQD8NiBn6tk3qeTQe7Y5dNLTShMKrFAbajPifAD",
  "key27": "4HF3DPnRMxYxPygSW94kgjFMy8FnqwSfmG7M2zB5uJ3DL96oAZ5nUc8NRX6VRNGdxCpdUzoBqfEA3uZrKrSHyFh7",
  "key28": "BTMSyb7nH4QdZxVeM1142SyTqn2R1JvVor9EbcT694ZSpqgmbEcaixYNBqDPChoD2CHhxt92JAVnBV7EY62rUBF",
  "key29": "47PNqqbAh5cq86GWupzRDoi1Tr4ddMhDd61mELUwkQnNhb2iHpM5yuQJw7fkV3dJf485E2HjTXjDxYsq5reBpkcz",
  "key30": "Y33sW4Hp1hcTJw14hHAY8A4tsA6o5zEfzFj7UZeqfdzDjuHXwPrMZ43QSVwGrFknPs7XNwTThEnrPk2dNDPX7LC",
  "key31": "5k22NWzDPafvLWeTcJzsSG9Kc13DxbL3SVn4pG4cgyr5RGipjxdtAVuT4gu7paEcYEfARBkiFwrjQW1UrF3Lqn7d",
  "key32": "142bnERPDr1TDZVuU92MJa94AyiWkApnDowf4nTn7xnqCq5J9RTxVDVSPd74wR1dgD3RX8j8LUCksR1khV5jNbd",
  "key33": "4JQ2uCX3D5bAmn75rvqsD2HTW3YjcrtJsExZg42JZ8pANx8b5ooASsEY7q1giyCQ2sP7S4f4B6mf22J2qhDrc2pN",
  "key34": "2GpEKRKkizDbbTJAB7Z425dbzjkthn9ASrkQuWfmTB8CardE2bZDzhiiDp36kftNXrHetbioBHnnMAEUck1cxsvx",
  "key35": "53ik1me24X7pSLfHFr1VkSaVr5tAazRGUcr4q6y1MtfCED4YqSdLXinVP3exnexE2Sa25V1fddzm3adtuRPNSDVN",
  "key36": "53ca74zgjcumqZaPjWVAGoJY3QdbDXGAQp6ynuhY4VAJ6dBqfupyPrDvz2GTz6ak2dpU9nxMQYKFSc9mofhmkkKd",
  "key37": "4pjiKVCVrTsDZqTYZ6WLvMYy9VxdBucDZXbJpAbjXrr4n6zputrD97mQUaUCacSQofozEavvar7oZdvwFt44XhAR",
  "key38": "5RUSYfRMVZHYHxJymwxyVK2ajLUXwXTbVc13iNXhAPJ9usuG1d5quczBBftEtv99p5c26wG4rsAsnAX2W9XbVDCK",
  "key39": "Uty6xnvVkrgVgMsNjVppw3pHwPDnPcnyXoJEQYgMjsSgSDt5bFrPurJ1UnyxMj7TMzvWgrYYQsxj7quRAJWS9dk",
  "key40": "GEGhKDqddo2zKuZgx8hgoS9oRTgU4kSEV4fzS69YEznWKvn7wE3mH5exuHDf5FrM2zTewKgZe32vALFvQQwRBxu",
  "key41": "4GRxH52tfDegF6tF6dzbpuUfWS3jgZ5wTwUfqNywC7mmrdmezrV5KEjD5WdU9vQbx1yr2zz71YkW5xgJm3c7e6W5",
  "key42": "5Uun1yPU52z4fV32cEkeiXUWyBvkAcRKbLmgBSiaKfx2UiJpcrviNRGsnnDKjPz1nnY26ME7Gh1pMBBzWuVELo2S",
  "key43": "3HmCGodMcErXUn8pYYfr6TG5i44TYFZmWDsZwj5gENDSjhNtzBV3Cp3CShnAKeVUSLGR8LMnFt6uSroUWBHH82RY",
  "key44": "2qQvtvydAuE1MUqFjt1LDQENSBtcACCPqytd5kTq4TpS1j9aoe2HCWpPLjHeYYHMvG383ZqV6TBzMjB1n3H1uiGx",
  "key45": "h66d5UWMivrTfTR2hUCUSQwo7D7Medit6J1Mg34LJsBdcRxmVnvCFKWEvFGXR3VdbT8H4rgD1oXPcq7umkfn8GG",
  "key46": "4LzfmZpkpFbJzxDYyTTkwS3fEJ2exBi7KZy2Nh78YZB48Nx61GSMKGMMKgvafkRgDUdfMcvPBLJjfKEfQGKZgZWs"
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
