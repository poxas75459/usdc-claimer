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
    "4qpeeBhadhdaiVcq89cmfQvcysop9RiZoLaivo4ESWhyuiBNxerCXyvCuvea4KpLeunXg3FhwxXLy47w3Tqfyjfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E2zVqcQQ43yuDVzekcYZABZ41d29vbJHmL3XvXFoviKNcb4bCPdV9g3tHWGMbnZykCxuX7N8ccEthmL4zvyJQq6",
  "key1": "4uc9yRyk6nmtfiKjzMsrc4P1faBNsKpTN7E6EYxULsRaNWLjzjuxRx4dGQekhwieXhTbVLLSaujrQAABPVvBUHuo",
  "key2": "VeTkUiS43ryQrvAtdcBrxpfyQ3NyCpCywBGVuWGGihb8fYzTUNA8Fc8T4ufwsgE1tAGtVomireHXSY4eD2P3cLK",
  "key3": "2yRVjSVHZ6RwJS8jFuSzQywi4AvYNj6vtowpqfmTVGTMH2Y8rrxJN1JrWWy6sBjhwLsjySptLkREfvjLRgV15Byr",
  "key4": "dmNyYQqSqkJniEG1AJszAPdvWyTwFKmMeFhr2haysu7gAwMpnjL8Z7eZavo7QzZnWLHQa38BY7fi6QEUYK8ithe",
  "key5": "26NeTM8cgxSk5ygZYUSd7YzgwxfugCHHBZh2EsAcvPbfqA9i4JcQKkRjGCc7KpiCX6n6SNeuUkXwrdatFCrJfS4v",
  "key6": "5PmrUHQpAnLFJwTXA8LMkHU4bCK63f73YH7Yoyqicj7tdrKTpDyuKFotGXPsEUjqQKF7NqXNcq5HbVD4KVMMnx22",
  "key7": "45ZmKaqY44AkJQpNjKYuPzj3F3yZDbW9PvFC9XkmDEspNyUZ7m9nXtqhZwBeCyeTQG9SwfRifQsW1ExR8mkusoo1",
  "key8": "2BSsNbznVx3yGHTzmCuqhRPx5fDav6Y2Uj6odqALotZFB9n3CCZ8qLBGRmngGiZSz99DydmeeQuhB6SoSp8o59t3",
  "key9": "4iuWKByAbNLFDsauDJAphEapKpsPfq6EyYid9wxxD3tYXwViKFNXe8CDJpa5JiNbcYw6292eeJSzy8ARnf7gfPT5",
  "key10": "56qcabjSYimHutYdxePTstp9UktUE4XvZvcAQJ9aMBsGoZ9vtjKadsSNV9Nkyc32tfGQegRhdi5vbmdgygbL7e2n",
  "key11": "5cFe9vg5s1GNV5EsABdTV7UN4CuoKWsUJR7TKfrNbYBeSvbTyVZaWGynZnxBxudBxn7oUjmupiB7TzTekPm1KHWz",
  "key12": "2RQaBWKViWcwqGrEdT5yFD8nLd2Cp1zATjT1j2RNKQhMZsYPGuwqgZuDcX3UeNdPwQkx2FqdgKurwJWrFNLcVM7v",
  "key13": "4e45fhbWgwxv8S9a5Ebs7pSBozwM1U142Zc6tdgdmK1aqTTLUhtrNfKqGmZrdSgJmH4Av78Z1N9ys9ujBCxDnvuF",
  "key14": "2wJGNKw3zt6B9tg6H4FRvWaTaDZ484DbVDLmfT6gUb6Y695cZMayeGNqsR5PRV5arC2NwUdGcxUsrKBdE1mSQNPU",
  "key15": "364W79VxgFd2fb5eaRMVNGXgzFJbT4tzsY6jmwuyzj6vAyZ9qCAiTKbngYDfLpYrE43ssZ8pJtTGi7v5AkmoiamK",
  "key16": "MuposMNnxE6xnjK1sg7hHqcQ2owJCHpJtv8HjQL4c75y542uRtB4PNNL2K1gJMvMMVGkhFKUC91RUrCsLCSc7dF",
  "key17": "BRx4eryxNjyDom7XjnEkfs5hAY3MRvt36EfX8CXzUg4LwWg4QPkRvohBJf2FyFtvPVu4e2Ax8hq7BYrSCF9Q2zd",
  "key18": "3enxanUKu3E83x1NXJwDmcAYDLY6Lk2qQrjKp55n1tzVGTghrEYQwEmNtsBS55Kzs39Jx4KhWqBbz7jTRZsYuVzT",
  "key19": "3eugSFHbT7ErM4JLVjuiytdv6T8zXycv3hsheULbbCu5WNMNPCENwGvudSMspShRZTcrwqLhfS5HaZGbvVySzZQo",
  "key20": "4WoWxqcrWRwYPatWzx9vQAzJtRCeuDHAAGjFeNE5AjPLDgU5GPHQoS8B6QswvBmyAnmJXeTY7VQ8NnvxzZe1guTH",
  "key21": "5Vdum2wbkv3A7P52cvMS595pseVonP8RJ3VtvcoA3mjU69ZjPWgb1GvKwnwtU5VzwDxkYDAaggLavxEdd6YK5stj",
  "key22": "2XtGoaPUNVnqT7pni1kXXKYax1SVEEF3mKpWi2NrxYkJihRrV1U1mPUEBkfivWTusKnuA2Ad4qiyTJRGrfpn39Gp",
  "key23": "4R4ZKXLtm4d8rjYoqT4HhERRHfdjo6w7GPPpfFaRraSaew5UZpSYzuZaLcpY9PZKvT44p2reksYeaXTShvj9Dm4z",
  "key24": "zHpMgwswwBvWfgLcj1sfYhNoLDrDBUffSgz637nL2Xzx7c1V9bh6pfaWEef3NyDCeG2zzZBx7raCUMeUs38c9Vf",
  "key25": "nFmyVraaKxHF3ErWY2QjgGBzHnEeHHvj1sHr1CsWjfthJGnNKcYGRtg22M5vE4iK1UXP8sykbGwQQvCyszUecTZ",
  "key26": "5qUkmfUJUGviRf2NKbm6fC4t9S9VhqEkDiwW3hoqG8TsNv6YFrhUYL1jH2Mkmmo4dLEFjnEy8arU7YzCeSCyRM5B",
  "key27": "4jPtNGsgATxTqJMxxYqdQc8MmnAqGrzhDkzFm9ywkGCue7c449tmm85DwAZFuoahhuvcTkZRtssqs6dwnKHRZRXE",
  "key28": "oGbuiPnJSa1EhDisqgW72e7LoTaLLMZxCy2bgTipV9JLNBdUxiX1DBCt4jPQR7SE1qZp6vtUMyXXfY4zpSUPdJw",
  "key29": "5tibfzGAYsHHNSCh3iSbmd8L2TZknd1QHVq1H2PSVnfHKdNKe25AusPiro8GiZ2ZFx36TEnGpTekseau37U3nML4",
  "key30": "X3tQH7L2tMsmxuyYKAuaTjWCcDd7zSmaRtAiNqUenwvZytALFmZ83QHCcojEupu4gugjiaLSt88qeT2GNcYQAnz",
  "key31": "5DDfzPcejFotkMUTSAFi7Bny2DwE4PdXRbvLfPiqhQxQTubgh6z5SkTL3U83qE37J6TxjMVWnSAQJq56KKUNwCj9",
  "key32": "PFr8NABdYW8nQRiWHjSA4Lv9vhif2DQvcexP7dCVyB34nMvkBx74rgA7ZQmGdCYuuJnRBxsd1j4WYM35rrQvKZV",
  "key33": "Q1okCQjXJ9HTDd7FLa5kAjxugRhGo7uvhfvEJfum3s1VaaXjHEfybCVuxfChnEsPvBvvjTTo66fQhQkAhhN2pbA",
  "key34": "qcMJ5SnoWApPbs9QAjn5BsnZJq2FubFBthNFZfPFshHVcMSBRSnhjA3sDUy1w1t3gJrBArvXmEHrpZUZdzU6fsJ",
  "key35": "3rMz2qjtmHfR3GwjYqipFB1HdpeQVRsgRnpid8vp67nJLuvoRFcQpHADXdJjwdKkL8KHfHHNnwsRA7kHpjtaaXJP",
  "key36": "4cMNQdj3fwG6C8QZXos3ynW5QAdu3m4xxHteLcgw4JSLKBDpFExTFS25ceuu98RbQXZ2XKcnssyYpEpa38joQVuP",
  "key37": "3EVtdUsMLrF3jqUD4jRgmwCwAtuR4SPHuyEL8n7RqEapJXgnK5QU6tWZQS5odwDD5CwX5TUixVzBYogkeyU853Z5",
  "key38": "3penoMKkuyaNgEjZo48xjCKy3jv1WTz9ts9aEwz9gDNAHDx1k8cMmRZd4ZbAVXJqYjLsShMqarNvLv9foxKV1sKP",
  "key39": "3gF5GQWSBo15bAfiRFGZGHigNwQAyDJmTLMFQwKrcdxx6qPWFVZDmJ6vtHRgtagZi38P4buLGYchMDnv4r9z8U9E",
  "key40": "4gutDjgEdX6eZzrrSQir9gj5bzCdUC6KYT1cszSKic2MnsZxP74VNowP98HrTZF8fyw4Y2az8qDeAp6uygy7SEjA",
  "key41": "DWLaNf8Z2os4a5bPPFsQxpseHqhgeNzvYnCpbN3EntWSQDsrA2ecJ5Pz9SqWUQnyC6fve5QFhAapugU3Jag1G2u",
  "key42": "3UVHbkTsFtwzXEY4G5Wa3zyrGwuKY9sfS6ukiVNBRcznL3e3XPRpwS6Uy27NTQLSc2s7Vs9PJAh33smdEroocXJh",
  "key43": "3adSahs4m9WctfU94Pk9pbSf6SowvAHn1PoBLhBbRDBWQHntnejLr8MnmCBDsh5m6ffwWqShkACjFHnjfR5bX5os",
  "key44": "HAefQETWm7umZFni4NZXThggZ1JseYof92k3nH56no5AkUG2xeFgvyKUNf17x2Rqe65EwUGxus9U2W6R8N97fMd",
  "key45": "2hwa3phFMZByWuqbZc1bmxr5Lvx8p7w3hLRP1rYdMemvoN8Le8RVMYKnKMrYRWGWBvMGbxy3s4BwZzNfUZ7N1V8V",
  "key46": "4dDPMy3pb7vjvj12S27ZmnWJHBkstYTqJNL69d15wsUUbQnD3t6JQDRHpoDkmr8WNxx5StyJnntwmewVJXp476yS",
  "key47": "2c5pnwkyTMLYDANsTY27zsq3YbMDVLVL91qrGrLEdYNpchDae28LmV98oXd2KynrBmStqw3rnExzrhNzUo9iNDG5",
  "key48": "4kegHogDxeZjskCe8mBuyBDvGWSiPPK9TMZRdM7LLqN5o7HYSjEWyWTJPiWiRzpZ5vC5Xiorx7kcsxTfqtMx7oTX"
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
