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
    "2anjxmyJvdXVc7VVER68HbtDms1JCjGqBzJSGpR3J9fFSXM9cXh4MpaC6LuHKPzVPJL79tmGfEwv9JXmSvCCiscX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yK7UrzSfJ4BH9jVomRG21VKu3D6LEHQFMwLCN67E9W23na1hJeDPGKEqDhhfTnfF1i6TDosWj8T3HJoRzshvEEb",
  "key1": "tDHXGZwzBHK2YywaX6NKmaybDF7r5vqNdyhurqqHz7M1D8VAMhgctmvecK16vh29ENie3PVW5GCwgcx6tL9XMN4",
  "key2": "4382LfGNKNd7yTBfH5MbVf8W2hSE7seP7D5tmNYmvtTpeeoKWcC4R9Xgbwty4JjyepipZsCFWt1MvW1jAiiDTzvy",
  "key3": "5zcUY28pLuP8jgcwaEYRX25QBpxVceNcgupJPLtuk45SCm4aAyj5f3pCH97fMJkoP9AYJnGmvxWoo9vnYqVDsGNk",
  "key4": "3D6WrzDLHwty9fBtBwPoRGqR9YnXhqo9j4QbxwNvdDxASJyxFvagpsFdEgFX2WNPykqpBch749MYbx4f4im8CcPR",
  "key5": "3SKEX5vwKFEc4x3BEhbvBYTEw7UzG1P9BgSqXXGTPG1jfgfieCp51D8yjgngrGZWeyYL21YcdmbHmuThVWzeHZe6",
  "key6": "3Lest6nk8vQAA7D6SguqTZpqEjhF7fiyWFuE4mdXRBPzqVKMb82Po4DpZhr1hHbH2eDszxdazaRcBKMHnQ2CNCui",
  "key7": "43NCgAmBrQGAQq7Ucc1wiiizBf2Fy6TyJaSoakXfo3xyn3yBBHWN3qF3eG9xLwPpjM5HPMCvRejKqJAXR5ENxXPN",
  "key8": "3veQypwjXbxz6UhKxprxToBVkmaVVRzZxTorDRN2gtduqEnvdi6z3KviCfje64du628HEhSqmtaFKwFvYuNHTxGZ",
  "key9": "4v3FrvhqftAp4FwGVctKsXbzSCRgS8H9jkEzuCjuN3jNi3AMBBpsRye3ZLivX7Xe6jmdHEHFhjN3wkGFr9g1DNci",
  "key10": "2X5Pn5NbA7ru3SKMhAg12xtWaT4VU34eK9Ms3hfwMFHtXQTCqumHJpB5sPzbYHLC3s5oevAs7182VGCWuP2sSa4A",
  "key11": "475YKPMSY44UjKWH5YiM3F56YeWMHV1snnLaQt7qgpMGo1aikDDXJSV5ttyNqncMWXAqhmnk58gEzzpy5fRn2mj",
  "key12": "FsU3b9rR4YKt9rZFeXzWasadMJGSRmEdqs4hECH22pP27hRux7Mij7hymSCuPrYbwn7MJJuYsASeBjngkWCiBjN",
  "key13": "5McLr9AkeAxcL4Pw37Vm5cXBDAoe7WfM6wJmpi62tXh2fqeWHCKJLWkZadE9UPojLQ7jbVmoaLxEG5EgG7qToDvT",
  "key14": "4dTXAHCVsADxFfhpSMb8XSY3sjVuKGgLqGnEmEwvZd3HswuUKiYSAcm7dMoyq7Ffm1RDzx9hPTyi82THAh9zSBz8",
  "key15": "4H2x4Qv2ZLLpHGuNGT1KP3weDJJLFyzHYzSRCSMWZtXX57TeTRnVqncmPLhAgWhQzkW4adZsgjf2Nm5ChTw2bkaE",
  "key16": "qAVipVGu3VVTJkT3YY6BWKdCEvcfYiHRXEHZjipSWFmxBjJonE5SzXupuLy1tqJEoMBQsfj63brLUFxyQf18ocY",
  "key17": "isBkAQterWXQu33MRiteh41eZuQMiehd3ZhrTuETfrzS8QxRiMK9LN5iC73ZHMMiexyqKsfmynJutRW5gve2uEH",
  "key18": "3grsJ1TkEP1CeH14EKtLf3xA1UjsnesVUeHTvayr2xSmtr1LKk51gcKwriNkuxi2HY8dM2No8LmMdUEioRJa2JwQ",
  "key19": "5RMakEpotyAmekbPG6WbkAGNna4etRrr1reWekrthzKispdpur8uvUHgrumvB5PhwC7o6JYuUC2EGb6LJg8PK4hm",
  "key20": "65xm8Y1PrX1UsuJJUqRVVgSWas1jQYKR2yeTwKBnTE75EsoS1iSGHeH8mjzTTY54z5cPiKc9RiqcyKqw9ehmDM8",
  "key21": "4D7UzyReNUPnUdTapJ6HUEeY7fN6oFwV5y98PB9RTTXRnA1p1FAKFztkAa3NShGSVxLkCLgFrrm1t2eqCarhZHzd",
  "key22": "4ecJSfJgwds17bfmV9jJtWXzhM8ddbJh5zjjFq2DfW2xXNb77RpvWsGTwQqiReG7dCffAaEKNmQxbK8wq5tG4JGE",
  "key23": "4iQXV9sapFVSKPFThFgcCFpRXiKk5g23UEH97SjUj9fDcTmg59H7SjMhk6CCvyDgyix1YmUufrLbFNXtZMFRzFvE",
  "key24": "3xmnSJzJGjCQCYL3hJgzFtkX2y9w5Fdnqed1PEHcuFFUS3vJrhZBB4ZLKFFWyti8813tjMdr39WSxUa8qK26Gt9L",
  "key25": "2Rn3e6yyV1cxhigtLtCJyPbUjQFKVGsbzWNtjJrKGpNE17fGCEJdUh4TPYZA8B5JZbZX1ZBpDrJKtjkKhLcuR9HP",
  "key26": "Ubd6kqQtQLtRgx6w4WGkwbJk4TxbaiL8VGnQKH7vzhjFCtG76hxkm6GaFqt1dmBJHqnpajPw8EVazPp3yUqjiKi",
  "key27": "2cSgPMtxVbAEN5yrvbrpZZbrzoybdJkmiWrJC5Z5aJ32EL9PedtmXJYfH4UmnJRSkf8QRi8aY6z3qmxLaJN9ZF62",
  "key28": "4TE5ZedvkhJrUWiNG4JghxSZLgr5uv1RKwxBES5FLWmWuNqDMRQ4B7sqYUJCX4nzdT2Sy6symXh2hfwzfMzCMANe",
  "key29": "5tr6ESTfzQ5x8XuXMpN1w5BUdgv9be1nXDLjSocb3BmopDwQpyEfLF1oV84XhP29JbSAyG68mYZV1Le2EBvPuQEt",
  "key30": "64e5j2SjK5S1CfKpQNLTKt32ymjfuEBCg6zLPbS4nDSSWqBRKmr681LBpgffLiUcNcGSKbZpoiiiVP9nx9aJv4MN",
  "key31": "4sPQtVHtARPgrsgaoYFZV8UJiWwz7CQAyXWeupSX8jsgsvD1CNW4LmGjLDGgoF9Bkmy2XviCXzu6D2CqUFL6YPhq",
  "key32": "2vLx9KEMYrSgvq3Zh7v3Xn7tDrEyx1M5whULLoMjybJ7wEMRNnKXCuxpLrFTDaDXJAZwS3YUeYCdwZiyA8zWWCJW",
  "key33": "4XJyHb2q9zUjEHWHrAgyyFxDvB1Zj6hkDWrK13DwMEFhTq4ThH8dNrfYaDGckkH1dDgcsmPPxMwF74kHjvcY4wPb",
  "key34": "5tQH44o84J49a1yYPcSEVB8BGQ7s8Z3SbnyMhQKwfreVGxgpwkqJNMKnheBKmroQganX53bbw24JNXFHdj8R4zcm",
  "key35": "2GVMpVqWkUsqGPKsh7kGsej92yhT5JzqK29K9ZBWjG7wK21A79EkGCYEi7TGRL2qa5c7fdfJuALZ1Ncpg16fRqiT",
  "key36": "5QagZAUyG7AMrd1Tod3sEYUqHwtaYseZgssHhFa3ABgsfwhjyv5uJ2BzmVr8cbfC74VLSrLLdLMZvnmJGBJvnmBY",
  "key37": "5PR9xNB3iWDqxc8k2Le8FCc8d5UTJvTKhj9JnXEwhkdD8tme1Nt7ostGokFuvdMNEQ1g7mHUggAfGirJNnKs5M7j",
  "key38": "3M34WtxmUA62F5vQDVQCFVanbAby1HUicn3hqx3jRDEz8GUTbonqhTD6Rw4LWR6YXfA45i6PyBuB9U6nxMxQ1J9V",
  "key39": "iDLm12YTGKuBHkk4ifPa8mzkCNqB47Fnqh7vNA9ttjDA1zcWnY9qx7WY7uLvX74YfB2CXvk3Fvt1ghkBYGYdaFG",
  "key40": "MXh1LgzkMG4yVTjjREYrnHR689CStVHbbh1aSJ9pkUacW3J5JiTfkXgYZhHbSZyvvW6XE8czxK9eNx5p4qpBEcB",
  "key41": "UfMdi7eCMFWSxZDU5tfAK2RaAWxTeaXjifMrxnnmeLDmXiNrn6ppJrcMZRXqVAYRHHK79QVNCDtQg2DpVj4wtBX",
  "key42": "5F8cp59L8idumCte889HAiysq3KkhX3XyMqufB4pwSLLdcVUBtFo4Kcgmy7qGEzTroWKCQWGTwe1sNwcghVP46qF",
  "key43": "AtJiGzVdq8WPn6Bwh3xsS5UXEPid3dLviUduqRjLBgp9xH3GSNDb1CM915rqpdoJnrF5bnZQj8jXp5D9vHjj1sx",
  "key44": "2zV6auHu7SBgxbT3CzSzZetzxBTfrSDfHhvBYje7GwcQUGPSmc2YUwSJPf3UdnQ26kZciY4qNSjzzHfxh3bnkAiE",
  "key45": "4x15HUWdanBwGtaXAtake47AW8pbqMzL94KedcA727Cp9kTd6RyErTunv3dtMN8CeigZNespyW42Mipp7jCX1TJF",
  "key46": "2tvKvRYFnHcARFvMDHYh43pcqG7iZsrx7hp6VbWSVGiUJAKNUx7y7JR56GUexgKYRDMqFh27cijvToB3KeTt5yoN",
  "key47": "43YkASxdTdKL5h1BUdid2y5vWK6rThf1Mcj7SRbDwnGUJu3BBKPNTiSExiZMGL7s2YkpfAUF5vadQD83WdkjLjPX",
  "key48": "32sUHqZh46NM7B6WnDdJdbSJ9zLqNqBxTdug4KHdhDnFZzqcA7pEbYU3yyNyjcAdUrV4WswqQWQPR8oRkR5NN4Wh"
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
