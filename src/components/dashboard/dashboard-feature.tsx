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
    "3bfVnAApsYopC6aDCME96V5U5oeHKQwMobUMQb7m1qjbB3dWSryniw2ai285Mb1pAekuhsmbi2dCsVNdittmwyvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oE3JCKPocdMQ6R1Bd8TB81iFzzUewJ5n2ChdgxRJRbkcyJHxTqZe7mg9kvXnpS6rXSDr6dZoVtGy4B6VARvnaXd",
  "key1": "37y5kivXNCG57PBq7jknU3miJmtdhHJhzmg6wogtHmyZyYRg97XCyJ5RqoF8Dg6w3vSU8221Nrtoy6f5RXzdgMyT",
  "key2": "61efZ575ph6f1puhXKetbuoCfrD4pft4SraeEFYonh4gzTjYfCCTRCPjow5Xk37WPsTzNzB7QyLXgydSF1U9xRBY",
  "key3": "SDQbjrpwij33rwoRdp9Pcoos4v8kLKuf1bj5FjprE3aCAjVyg7jRC5jng231xuseAPZgGnggCsFkVW6cgf79CRF",
  "key4": "Q53t5YHny8qLpj5hTzUWHxMqoEB7j2fZrLgDsrTMw4krpBpMfstV3uszXzKuMe2yxibery7phoJcci8FhqnWPs4",
  "key5": "3L5cJMx3xbF2Q46SQ4DwTohTzYPuYnNM24vnvUHsrjRmwzJFpeQcEs61vWpXvVAf7ieLyT79mKGorW5PmnJeSrLe",
  "key6": "uNT3nQKxyW75Kqmdz6GqeCKe2DPWh6WLudMwJrCeFoerpH5EQB8JxmyUkbYiHmse2bw485ZTng3Tv6eZQoY7YKA",
  "key7": "4YjAFSFjovJtcUabap6t3NTpMq2WgA3h8nQoycNCZgE3iCo7NQHTwScqHDupUzGigGpRFFeZFuqvcm7w9jehAy3c",
  "key8": "Sgvw2CPzLTYh5xboWQPAwt18NytenFi88camoqiSiKuUECL7M1duJqZDBrTUiZQz98sP6ZU4AsvkdbJJynicFPS",
  "key9": "4pW4rSQFE8pkgAYCidHWzsTeReRkyDqTq8woYBnXEus1JSpq2PaxDkXsxKWhyvWVwVyWYqa2Kh95MnLGdSLFsUZA",
  "key10": "33AFQwnMoGvfQ8nafjHZrhkbRQ1idH4jSksfjN6V4LG2euRKJ34TUFtDWAJcQtXzRNUi5mdK7UaEghKeQKNLPJCw",
  "key11": "4eUWQMvdadiTt8s6YwYtxi2TxZo1t53mU8QZrdbo2WG2agHNiUUsu9HQ6dWNWhBHx1c5VkorGo4xBoPTNqgryybG",
  "key12": "3YF4WFdttBbUGEio9DLcyTyWTvT7VW6LwvZyQcGJDZYPHMwP6K35AcvACo9awM1K4rs7MbT7ePYbMuinjxTN8TPo",
  "key13": "5V7CqficnAKp83EbEWWUw6pCJyFPThF8UQ71cz6YSfEs7ha8RdKYjDWZMA1Tb5aHDk4YxWbVefe6EFqCnbQGaWic",
  "key14": "LLmAievpgyaPsRsY9KLD26Lba4cPZamtR14sEWoJyb1tC5eGHMZCo2DzebadtaYaUGyWH7Sg4vwKV11aTaG3sjF",
  "key15": "3esK1FzGdjDiQFUHfcZsE33PKozZQ2QrFA8kvosSEn7ySo3vtRABfJEU5KgRSpCCNExtZiUEyx3DiYAhaYsrqLZH",
  "key16": "2iL3AsqSZKKviPs9D8Ecu6npj5BT8f9w9wix7owDN1LUTfVsDjq2qQNSVKtdExG1KY87kijhMJZjVC1x5C8p618E",
  "key17": "iQKQHbxmr1cwGxrXw2S4jgkRdVa6F5LLdYiHZgeaoKksKReerDkf6AJHCJ8C33HC6XqXTeQ4jjLiTank55cJfpF",
  "key18": "aEDJeoMPUak3KvTctRsojoxHZfytt5duLYP4bzoCZwiH3KQsWUbPY28MMyNWm52sh1yrqjKodeq2Y1oHY3Ad7Wa",
  "key19": "5Q7u4kr3ncfKtvQVdkGSKPqZurAML1T7jUPDJ2EHsgGz5dSamhfDfjHsgftJhheHmtQx4fR3kbGsPUkWDE35nz82",
  "key20": "3zrbLh6QETiD64gFRk1gsSond5dKHUrGJeVKdzGKHoZdZdfMhBxhwTNBv2qkn6jYraDHRcxbAZNUoufn9DUmw7JV",
  "key21": "3kX18JRhbSZjYSAe11H5RksKq6KhNF31KdYWgGx3SBhKLFtDfkAC47JqnAt6k7VWvmx549rBmhxenKcV1Fug8ikL",
  "key22": "2cSxYnHCUVQZu6cpn7JwjPT9BNxCugM2nxLYAPjmhxtmwfSxcXBBT8KoTYLZMX9k8DAGfygeCrPX4zYuk9ZhY5q6",
  "key23": "2cnLK3bwQ93sJuYAZjAZNjcpMzCd7k6L79SrejsDyVDG2Ut7oukx7hz71QZkTChUQ9Kj8G7Gz7sNCGc4Z7QJ9vXB",
  "key24": "5TkSWEgHwg3oH6ACwumQPSUG8viUrACGLGPRdMGgCLw3X6AZjz6MA5nRP3rcu9NiHGN86sqXdvv5sfuZqmwRroxP",
  "key25": "3eC3AFaaFn9t62dGDByj9TGse7WEczXYiQnmzsdGAz846DFHDBUZsdFdrqYVNdyF4KfqKy6fxQ7mfWmCXXKmuNZv",
  "key26": "2Dp8gaxwJtDWxbF3Bo5XZ9g9hixSeGL9sXb9BzXUzgWbbmFZSZfx3Pxutoyz7t2zP5MjZnXVBJQB3yTapsLSAu1Z",
  "key27": "4t5EQi4AvwM9NssXU5SDuciTwS7pVM7mmzaFoqFN9mC6swoCWXWR3537nnwYbSTtqifxk75M5b9FawgmyS36wXzd",
  "key28": "1wQyyBh8BbAXFLHd88HLPTyhwT1g3Y7bkmTD8mos92xCTwgrYCTQQzYn8yFCNsfFYNQAY3eThwEyLvwACD2ztng",
  "key29": "2nPCk6tAXCSzVQ18EpmbWMXzgiB6qpHYaEG36L8BRFjirFqrA63pSJgoLh4WQh2zWivH3Y68p1xr6G6Mos4E3i42",
  "key30": "AXHQdnZLExXY4Mnj2W1yScai1A2aSfbU82XVdX8wAYi4DffafuogKX7ZyqyZC1x16KmBetQVKvbH9BPPQfAUmLW",
  "key31": "5yQma8PgTM1fhd7fkUJcwHzvZBuTkmoepp73y4M6nCCip5KctTswB7fPxuBQkwhMc9ay9Nwr5876UEnKbeZHX5Fn",
  "key32": "5tS25HTeKCS9AreHKgZCbYCjZuhXa2mSqSVdp93RgHjSEf2TmU6iNDBcqQZW6cmsyUfg3v4nvtZkPHDruVYwJvgy",
  "key33": "Vyurq69vkw1njCa4ck13vUo9FM74p3YAQRaG7TLP7s4FqeLSHr43w2gjQGCb95qT4pnzdkyccqV87LPWHE7c3zN",
  "key34": "5MKvL8DTdVtGgGw7AEVyn13vXCAdf9MAkMqBwfvZAMvGLW2znK6EsbjiQDKDvsv2TefDYRTBpHSgBu6sE4VT7BYo",
  "key35": "9pNuHcVjykwwjL431XXRVoXhQ8voy39FyZtcxGoUrziLnxHzFTjbFyWuHkB9ZGBUN94CnpJ49eJpfB6y18btii7",
  "key36": "G7KofBGcQGTjMZoJ235GMREBKRnvB74VEVCkKZDmQXCHNXdyLMpibR2xauAPBfiNindwN6PUAB6UJzGMYmeFZG3",
  "key37": "NcXgZUrwu6rzgQ7DsTrLmVW7actaPK6CpFsXevvAyqZLv57dsXRabwdAAJ57oDCcSUwZfE2mL5wW5Cq62TgnALZ",
  "key38": "5PkaW6sCUub25aqeyDuMB4LzoGK7ddeKYnAZxjFxLsAqUpMBPscaeDSUhTH6gjsDh1UKYUnVVm6QvjJe3zc3REKW",
  "key39": "4EqpqQ4GPMEWYZA7CLBWnaDDY2kvj2bLiP7WcJkMZknY5bpbGtQ6ZjoTKDigND1qZ51SkdtuxvKNxdTHnoyuPNHM",
  "key40": "2fuWQztUuHzN4JYEPBLiWEADui9xjqpEMajKgVkmr5fb5qcULf63FVFcGo2LDrRvGtRJe68shjwM9s4Brdw2c7D5",
  "key41": "4gY2SEQGD8BUxffpYqmfv71aWnHedEw1sNvnX8ZRMJh5VFtwAUFUAYkdEfUZnwVt6tzxn1GMEJmswHgMJUVnfurL",
  "key42": "3vMDbjUoEFtF4pJhL2iTbS1UjZr8doRTUtBF8aCX9NusBVUwiv9YemE6Pe7tg97tJcndMwfFjzgFP4QLJXUgs6e1",
  "key43": "4vNnHpDcGgZwp7YR9e6idPLX2UqCUKpmGS7jH2tktfW8g9b3RaG1NwNMo96hCtzXdyBpy4jQcwbf7ZjCoapHprPv",
  "key44": "SfQhEeESzPqhAotAtgyHN2sy9JmUNu59cNm7s98WS4SUU6MSo6r9vN4SJJQ2rNMVS2vuFiqJKvqEAHrivyvhRu4",
  "key45": "5kyedY2bpTDcW3XCuzmgvrUchAyXQJSFfxnWW8WgeA178Kz9MS299Li8AFNRpepuKovcD3xfnTjQMjid5rVY8rqx",
  "key46": "5gabrdzU1gjGMqU1PtuRgXiN7QPXWHLJ4cZJL73uxMTrBtkwSAt2pyqKxgWrRY4rB74LVepRdZDNeUjueUD3FhfS",
  "key47": "3N7JnVWPtrF3Yycx96sYMRvx35Scmciaxb3n21mZLEHst8TbUN4CfECt3bWz3ubk37zjMK9eVkbsbHmRBnUEs29a"
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
