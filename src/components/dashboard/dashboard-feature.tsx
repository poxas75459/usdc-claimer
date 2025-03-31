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
    "osKNv2DtW6UTRPLMR2H9HNVKCDGjayMXHPr8wGRryihxyeBLX88VwjiwUffq3g9gCP6ayfqSFukTYH4pZDTnwUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EowToiw33Bi85DAqtytY9CNwmbfLqJYJtznP4vEr4vxcyiEAgGGmfgsz6Q5umtvLdStMDbe4ZWSgPm4UunFCbXc",
  "key1": "4CRToUyBvxcuG9MMaXna54PRw2VbJy382XDrGcszdFf5aUEpuw2PKAhEmCLmQ2MYRVufqBM285EEPf4ykP2WytaB",
  "key2": "5tE6b2ugN95Kbsx7n8aBuDLKTDUF37s4CTGvHBTGDxaokjoFj2Uy4S6MBy2aaB4qsAMAupCfgQsYKYbbzdf484Zk",
  "key3": "3aJysAwLbp3A1KUshVkAQee2XpEDxWnnuCTFcCpBDq83mure46kN3No1pvhWMLTg8gLkyisMYKCLAMLG8ejkRHja",
  "key4": "5R4JcG4azqgooSryNgf8zAUp9NtjJLcMTWaKxgiJnkHrSL3pLzco3PUujCpBtzcQVChdZ7KMdNL2YWyfUvm63Qtp",
  "key5": "3eQTU4dZaJcewtkWQt49U5xdcLGuAYmaFeBtJHJUYoB1rsEXvuvY4x69SzUinUMEKzLVug5GjbSHsfnmEPEiceLP",
  "key6": "66CzRqY7gE23wWeGnioZUoj4vGFaiJ34J4cz2KQs1FJd7yZNDAeqp6YqgedyZndUiMzjvhAPU9Z63Z89TaKKh1fJ",
  "key7": "31uUKtnJtYchu5nUgsQFbQsgGUSsALKgDnTerpVz2kRLXJw8AnUScWMLrtcsZUkKUgrEnR6iUuo6fiaEbyyzT4pi",
  "key8": "28gaR28SJLP4isEMbYTQW3MsP1VgnhwRSgq96AYp7D91MMgQNmdPozv1ivXaurZksp8npFPqsvCyqfo8Mg78rekb",
  "key9": "nuuYumst7CnBDZiJRdhScGq4nB2J5dMjPMKrW6BMPs8BNe1UTHeDiLTp6Evv36ezJeoNCRL74qmFnmNKUTvkZ1a",
  "key10": "3SHoTXQbEX6Cj2V5bsLLbRZ89bLvZ3rfqh7T6YsbgpgbAgzWeAzHqvvYNThmViEyDS3xKcxkU97RUsiUMXTgvD8h",
  "key11": "4f4jnxavQ42Mw17kt6uUXz1zVbFqXCjiLGXUCskjRjjnyDxPENRyasGZsZNq6Xc5eWaFoH8H65RpnoG3Yu5qeEY5",
  "key12": "3TLje8BE5V7QaWhSMTi6gVzJeviJvs4oEyzgzCnWE6w9jRmifJskA7S8jw7dAh4NjRR3WbS1xVz4ziCd23aUG8Ag",
  "key13": "3gwYmCy631REYjVDXE1urBeH3mfVzrfkhvoxCN8wCkPS7p6Z9S5iSQDR5agNWFaHMEKBVuWzP97DzaT6cQRfmPAT",
  "key14": "5uaEcGZ3i8SkKxewyvXUT1AbFCeYgyuJ8V4FSs5aSSp1szoU74dhpSbBz932nTqrjQVViQkziCCE1m6T6SWpRViA",
  "key15": "2s6YeySTREGsnKbRn7r2Li85yBYmTu9mhgZHkL9r4EmT8wNChKXeXzkfdb5fVET9XLp3JEYa9pxox8xDHRzqTuUi",
  "key16": "47iduJN7vS795JZzap2v8RDsrMbuVcofF6LEYnfmoy5jp2YfcfPw1yRX6JraLhqaLt5AxkE6sbb9rqomA8ageaKq",
  "key17": "47JNcmrpcZgwnNUNLHBQWUsXJ8tT38aQozJZtsgjkmwU6gJ4k19vZrHfgypHB57NTTAqMkLyHxvWz2iKp24V98Zo",
  "key18": "GhCHVcWFM8egaDXZ73mGMXADEphebSZmJS1pmJ8u9CZvCnRY2M1EnWz8wVsoDiUkWcCNCZUEoEUFpU4AKTTWz7Q",
  "key19": "ntNeELdt1uzKHf1q96T1JokMPzMz7QouVk9KRDvPhpREaUyHWu5LJjpxoMdFq2ZG3i8ZFdwy32X76qR91eD7F3T",
  "key20": "5ydsF9qK781VZuMJUn89rMaDDyuxGN5R2anL5uj8crkzQjnBPCGs5a9xF2HovpJvYyZBhjDT94iAwgaDifaz3aNg",
  "key21": "3EjLgJo1cwZnXy2wperaqBLi1TCAgSzsj1cFSRhWrCojDdvu27443RCBjnepgvS52w6iM7hrM2j5AAx9Gy4Mj3zi",
  "key22": "5RVb3mENnNCBYvY7wgsrhjv9f1mN6Uf3KG68cr6ig9LKDEd9mXSntSbq5GmrMb4VzvUKvCzXCg5pyrZdYpHN7JvV",
  "key23": "q8GunUdzcyWdjzR6EhDiTb1iAzCEgakDu2o7QP3vtqHNskL6rPZFYaegDAd6dGbmJGQZuUg6qBPQ62LVMLUQSVH",
  "key24": "2jGTTRrQk4DHRW3Ju8juXUfjyhwGwtkhWhcS5d86vgF4PUYHqUkKxheikJs2xyXV2oDgo3Cc2o53SqSVKakXAfP8",
  "key25": "oGUebJxjvCAdJHUHuW9JT7DMv3rHZovzsJShAyLKMhrS8keMCPnSKzWq5tCkGADVBJ28o9PTqCof4hpVo7wfSYG",
  "key26": "3KHjkq6iCX3zwkEtjEZcj5RCBZCWzhGJfJwtmvAsfR4p2vkFxr9owHLtNE2G3vxQR6LsDkjsgh2s2LsXJEooFiib",
  "key27": "3LZGXd2CdrAQCqPS6b9pZU6d9fEej8NFmRcnUu28U1Dcc77b1eK7KY7mGZhz26fHJEg4kWPfTNAVqKsAVkn4D5XU",
  "key28": "2ZVjrpC8mm7w58UJCuAnrBPcC2n7oiZDdrn7sYRrNYK8ADm7aPxqgt5sVudTcg72yAnyFGyGvJpgS6xMTsZiWkDF",
  "key29": "3t1ecTgMjVcVoL3ZKzSxdsEofrJ8oNo8gY6DxMjVvPeFw4qLi4F2fPyYCrA3RZ8ktthehTNyUE7KHVxWBFsWgxmF",
  "key30": "5dMxYQubQCmQs3iwRmZum8y2BEMQdqB6A55n9C8pT5HvkjWm4rDB9JDQCtyUMHnJnF3jRPw3fbxpA7VKWAykuRk5",
  "key31": "2kQH7yw4nVePwWeyRJvbFsLKfYarortqJt7ETQZnM9Ujfxd3yw9ZzbGARYv47ND8KGxjYgeHCypHbXcohSk95vcV",
  "key32": "5ZELBor1v511i4Cc86ozAeD9Ho93TjNJdrUYc1tLap8vXWo45GANfQ4fTaH1ysFe4rdQWo8XZWW5ooz46kLsKCcP",
  "key33": "533AaDq3EUuXA6L94kBZb5BGLLK6xkouoytGWufSPLUxyQQTFNTL2boFU3bAu6hyiDcxivJX5STMGitkBHwLuuWb",
  "key34": "5XABV9tSgKqiUSCr1kQKuSnnAifUu7LkgU6H4SLTxgXDXDgcCkEgqng3KnrayZTc6pBbmxBKac1SUu7vj2i3jzNR",
  "key35": "2sp67YynH6ffk3kpdL6kjCD8uSMa6Dwg13pT2pcrRmV1VCMMY2zdaPU45uymtqXWSVEo7BjUvH3pgHs2S2StzmKr",
  "key36": "5m95WC41aNJgQV5QsZ16qLfyVkaNcLnTJxUDGMgwPeWankK8v5srg2xfHDA8hsjrBYgwh9sxzzdP6kcAKDNnnAQ5"
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
