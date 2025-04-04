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
    "2QkWzCbJ2vcFssULDX3p7hvwth2FnzwWq2dUsjSFEdRezutZFXQSW7oaazSpLDnnShYHndPqZXgEnCPDfyJVt39f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67BcCtC3y3MSXYxGEKSsDBDRZoVMCViY3PQPx2cKUDHKcb1XM5RzTzqaaHeorRL4e5BtjbkqgX5s1tuzjyTLdWYv",
  "key1": "6F1Pg4FVTjeipyKRVvBZqLhbksREQzmoDPwPiScqNhT7sCjfrhvA7yRXs8zUBK3NMW5NT6jcsxNfLnCeYoGVipR",
  "key2": "63sfywJdbyqcjiivJNXmN8sepdPnZLYw9xV3SpJ1TC58ziBbv6iRQcDA4mKFiNHfFittRqGntqfuGS1m8hQijdC3",
  "key3": "5kchL3M8APA3B9hfHydqbhvm5J6Yy8FhPNLWg1ioPVtfBi4hWdA3N8VFvHb9UV43dg9pRhbwYCMTAiZVJvmdC167",
  "key4": "4PreetnDF1SypbGa11UAgS68xjsbGPMR5rBMX9bCvnYjmM3VuWiVcHRRdMn16cTZkZeFBgXK1Ykh2vG5siTBUXKa",
  "key5": "21R8L1dCH15qCYGSLxoaTQFuugyhp3ZtSiUQQddL1kiKpcZtCK3UUaUqUfdYRAqNFkvXRcwLzhaeh6D8TWgp35ro",
  "key6": "44vuzyYBii8GXJVkgPpMagc1TVD9gKwEC8dk4fDpKuWmzm9tcpdnksGKKQvGMdBNXin2Cp3CzWXGd4vHnDNhd7PT",
  "key7": "4LSCzj5TSxfAGMjgkBHaTZFHTo4w99bALkDUeGEU3ETNPnjot7KiF7aeToykmv694NBG7Wbxdnkuq31V71hxrE6r",
  "key8": "X8S43Dv1ogU599x6YRoz2fzKuCgg9DN5nNfraxUb5cSJhxjmTBYcqDRHtDWmpZaiERBnisiPi5nfKcWEFigoDoE",
  "key9": "KrT2Y2jdJRGnTDjZAL62HQyt8p1GrsG57kipzMTmZ9FjqrsPzHpShUYtU9e1rDBXby7h1wZ4CEshLiTDRezc2WU",
  "key10": "2pcRrrpYWJ99WEUajuc8ZBXkAeejEb2MGRTeGLmytEpJMwmQE5LXq9fLd1qH4jfPs5r4Tw4jQeXgz6ybpeJ5ir3J",
  "key11": "3FDYcSV8KKDg5dg7452846eQRV52vT2P7X622DVULr9krp7ARKdVfhP3nfwZ64keKaoShJnyfwafPWms5Qkvsivs",
  "key12": "62ajNgpMjCFqGEgYSVpVeESSaBfqvjyEtde9trppTAGQwgWLHVzehYTBj5gmWaHnzbnTveaM2wntv5dXFg6QrV35",
  "key13": "2KcPFSSvf9CDPGAADPKK5BiBDgBiMvqyCmDWJP9MX3hxLjUaDkWWakRYgvV1Vuc3Z6fvLMznBPKpfh6jCB4iucEs",
  "key14": "XrMzDfNx8rBXdpnBDiUQ4tZJvqHiw1A5a8VVAGXwneDMYkA2teyfUizUqmTcH8bP9etVkotTMLhVWdvcau9StaK",
  "key15": "27cmnYdHuz1bKxi4dPqJdwixo67GC33babGoH8noYC5NTrS37uoNVKfsgMJ1YgUSudX62YafaK2nGXWyb3c3SKvx",
  "key16": "3YuUfyMaLkgAEd2xe1PfK6JgqSnRKPFRsJMiYgeiXU14nmPH58a3KB2up85tdxZpdpZHk7zWddh1DJ5jBra8dDyC",
  "key17": "yRGWPYQiaaAZsR8CviTYcFjV5aE8BDYSJuF7vvKZ29xzVYv4qhAmxe1jqH3Wb93P7sKGTJjTjJ55MegtRjquw5f",
  "key18": "2rj639KcV3bdSL944vRbMgFEaiNGAEnCBjvj312oqs1GPrRHsPL4ybc7oEfiev4ZLNmZvwGdSDRuDsJiJmJkjtuv",
  "key19": "5ZeNm2RPCkPdDw6Nmrq92o3HWpfCf6pv67Xke8gXuqQPgeKDC7YvJiWNQV3Gg9HfF16QV5PJd83u3hvaVG8DvZBy",
  "key20": "36aaRoofx4KRWS6DbbsvyS79jt9BgyC4jpaSR2Rqr7ss19zb3aUdR2QdJYjA2fbk6tkwz6BiYZbVqVE9hHCVwHyL",
  "key21": "5tjxvzWoZD1ANdtLMykdh3xZkyWdixnXim64RTUwj1kZzGXGkRaBuskKLGaaYYnE7PM5DQQ6noAJ6sErcH15wbeZ",
  "key22": "3u2vZNbs1zTh7PkYFRH52ywoQ7tkkSMq8e67owWZ95zMue6YRJoE8sxvtZUyo1ucr9o6pwaVTskwVGkNoRgmqKLQ",
  "key23": "5NFZGPS2xoo9yXPDuwQYsqAyJxyJMMFs8m4J7wzzaN2L9U53K2YDN2Lhko3q1MmguCvYNrfNtdujVtH4PH8uQbk1",
  "key24": "2E4iMYfgpaY2ETncqJQcePm5YmSD7fuwMRYyTFAF4diQGwegyGSJ2jZoodugB4HPivLGPsrkPsK1eyrmqe5FiLcS",
  "key25": "MwRU3dZMXFb2Hk39E8HRxd6FrCUbZ6s18AVcx3F3mrDBDoiBE5QcKRMgabeYWBHMkPhobkFwUkTwnU3uSVSGK4B",
  "key26": "2X9mSKXmHisxYwE4D4beU7FEAYS2mrbnE4cTDxymmofGKikAFL8g9zyWg2w7sjdiW6xgyrwpeg3PKywF5M3TFLRK",
  "key27": "2krTQnGTur87ufB1ZQzrYcnCHHa9Bu1x6q4TLruktRP8yEex3u9PjHuRTsjc9ZoTLCTs2TQWLkvByyUArkQxFS57",
  "key28": "5zvB19wesfc8PXT6G6WWjCG2xdHomJfPFZfuiPPhUpeF6WfmhwbxyqY5sgLWNC3N1Qot8fCdpFujYbZAvCJ7XJeR",
  "key29": "4ZE6i4xZiviMvieXMrcCYKveTcmS17nUEisBDcG566Jk5yXVZfqR7eF6NnXWR9XNDwHVmXas8G3v6ya1HE63VS38",
  "key30": "4NFpCaTTd7apBCk2RsVYpWeT2kY7MdG27NkvnZYPhXXv64ES1HYCQ6KnRTuCWWzPqH2H5i5hFAw74S4Us7Th8CKh",
  "key31": "2RpeEAqaadvcTrLw2eNX9JQm7p5hhCy34VBZEiiR9qjt4UE4TcjnfhH5jDGkfvxC4cak9LhZLMnosZAzDg35ES9W",
  "key32": "4FvzwKGF2CWMUo3fqS21sdhiQzppuwnkRVSJRvJeXSztYeBa6Sm93Fk71b8k6groje3fRCcYDTgiHQYMdua9ikvj",
  "key33": "4wUoWAiWeQvaBJUJqYNzbLTPHfTGytuoSa5D5yLbLymVZLWHiWzETEDfE7LoRZz1hzPxpgR7XxrPcBtGwEqLFTV7",
  "key34": "3BPQ7h4p5c3WXYk4dDzGX4fy5BKXsFVYVG7vasbHprsVmmudtwkmJBKpQbHGx4uw7ZAJYHVgjuKpuuAG24R91etc",
  "key35": "4EEKtbbrUDDUQeGSzP1GhV9SfjvW2qonoadGZfPxkYJcnsSZRETRQVKhfPGdNbzZvRRbSZcbRvTFfwyhwn1kt5sG",
  "key36": "3PNjZwefdiLM5ux7YggpNbouaW9Jc97T1DM8R2dGTrEezSrWtpZV1uknh55eYhi1vpZCuv3dtPp4hJmXP26KR9wo",
  "key37": "3a3nuHU3Msuw1bciPVnDGrqsKJWejwYVzKJ6coReeyqGjZ1Lxwf9Qv6yZRAStesKi2n7CNS2E72aPkuL5vNXEFaJ",
  "key38": "2xVkLcsD759upCB4DwPsdNjasaq5xruqZehjHmMXQ8qdQGSJy7X4LARiMaRc5w9RYewps5Qbqbhc5JGJ1BZXWFah",
  "key39": "LESC7xfpntEifjMBJDVoA63Mjif9ppHDWZeb3s6vHp6xAxhdhJgW3AnEWTf8S1FHUpXdEk7VpyXiDQsv2r8LRiL",
  "key40": "27U9F8N6wxY3Nq6MzdJk6pR48NfpoUZSVGVLve6pJmS1HGzSbkhp5QCHihCtBjX5mKoYi37pFJn9DBLY99E4DSMP"
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
