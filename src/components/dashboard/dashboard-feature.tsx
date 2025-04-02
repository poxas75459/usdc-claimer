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
    "5ixtdf2gYdLCKJE3ibUMUPrVb1yRUroAoedFd7vVuJUFQjuwcegpUT1zH1zDSWK8yz8mxJ3VjmtWBq2dtKZKnVYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MJ4ADvhepceF8gsvRpNU1HQDb7ZzZF9EsVGgmDqpDua86hUbx3zdGo3d72oCBx76dqKFrCdwd1QUtGKb3EF7N7F",
  "key1": "uFMfjyWG4CJKBzZqUwPHaEdwtsjvnSxnW5SxWRvqfStUGrEocu5msbeDnyM3RJ1nEi6fRUVThmhT6Gp7ATmecEH",
  "key2": "3rjMCBLGrJZPqxjm1ecGh7kQdtFUg2gZvZ2H3Tkn8VpnQxAw46i33Bvm2dheU6EYRkr3CSJDsWR7JnuN29j2JQt5",
  "key3": "3MwqB3WQB8zkXt1SkFYhyvoM63ayAsyGb9ehFKNqUfetDhhLXM8BbMvqN4Ctp7iKVpejPRECafd9BtPjB4HnS81Z",
  "key4": "5L3pRpBuazBhcrp4KGQPMkzDTwyBoQufD21jsvb1KP88supmN71sG8hNzQi5uujTBBHiR7DBgpv8b3whchgaPHs6",
  "key5": "4Yck3u1jvkPmVRrcNtQiFgQTmXoLy1hgjTHucAhXzqLNcMk6UrW79g7FZ2YfxYqafZ35dCc7Yc683WzrvZUaj161",
  "key6": "CNbmSR8bL21qRATd2d4QtxWPiFAm6xYXT9dR9t2T1sEMqecJr9oa1vw54huULzRRx3wvSPE58SbiaHGmT3KjfDo",
  "key7": "3SuJ7bejmVoKAKiFxPE1k8GtcVdP8srBUfxsFXnzuRUCs1eTVYUEdgPQvxacmZUqyvfmrxZRKqNMSzeFispGTWtY",
  "key8": "2eemqvUSrux8kVGpvJWtdyUR5JaDEo3GgzixTVSY5hxr7wRykrnsz3sBKo8Ka1fEY5dqiJnFyGEE82abFmq19tNk",
  "key9": "2rhQoEbT7Fdq7LwZH6iX8x8eE2iRMLMEMZLwJS3YcqkPzgCTCta6on8hVaDKdtMggbXGM6McuPV8RhPjDzEcJSMb",
  "key10": "4uv6WXqMvLApv6DJc9n8z2CwHZXfQDhY5Cwfy4Ed8SABQaTvDJHuwekEfsivvJ4AxXy5ZHTTjTs5cZrCsUkZGXSy",
  "key11": "4nAY3ApEUyMD3ZSnTo3YEwMQNEW65xYJmPKTiabwBUEKUsdcAjAbXyfFkqFtXJDqT1Yc1vQ8LxH4Mg3vm5wMyz3Y",
  "key12": "4bCitLHiTJygmyun5V3voJu9pttKQigZSEeG5Sd1ENpFwC4qUFgQEQZwcFybgbazSb3fyCFJpoXn7c9BgSivdfjh",
  "key13": "5pAuGYWaeA2iu5m8wdguX7ngy6WXVJJRVJWsJp84XSRe79FhMoGzduAFR3KsbSLavhgnF7wAGT8H8Zc1J5N7kkbx",
  "key14": "55qWspSSJ77cNM31QBNdprwiKxPF7HQRXHxjD18gCPndbYmnpPEiCM38Qn9WujargeC4NcMVQHgtGRGFPfzVxt9q",
  "key15": "HDR8J4ZoX2MrV7edzYMPJiCCRa5LjbQpPVi7ys2vqmj4QCHB5rcV5j4qWNviBSdLnLKi4UijShjd1d9xe8FBPyh",
  "key16": "3uHYRgY9FjtG9QYdSqVGNsuUkZv3E94gsGXjo3fYbiBsTe8R46ei1VNsQ4kX9hAJXv6nVzt2snXAks3j4GTEz1aM",
  "key17": "3t8AwyRYXC2ifHHKfAVgZFQypyCUQq3nm22yuee95DzMRb4BoUhcndEvyivegGq2pZMp7zVE5SMT6wxAbZvwk8XC",
  "key18": "DekPXoyvg4g2NePH5qUTcVeRPVrCAD8S9Ca7wq9QxWJJfYxTKuNkLyVszjsn9AfVW9KETY7gifLacs1XUyUhWpb",
  "key19": "51jEnBRdVvEK9VLUcVCfTi98B1dpALiTn89SNKkjiMmnjWHXJuEosU2JKy5sfyYiJEoceTNTyZjPcAgueLzHGjuo",
  "key20": "5SjFtgCBPL6srg2g1BfdJo2C29sWajRGCFh4hipa2iGWyXP1uRo8Paqun6k1FQ2pFt86s7LwYnTZNMqi5arosfBH",
  "key21": "bR8ZfDypx5umJcjbmsX7ucxBXQ28oCfcN21ukerMGLB78moWB29c31828HeDnMMLfaDBh1XpvY9tmtjuYw7RDb6",
  "key22": "JwgkHGUrGJe5iW5DYj7nQ7gxauWbSQe3admSk59LRn2PBojGKkCo1Mcwv1gF3twoSWEpczuxYigAR6mWMBLP4jt",
  "key23": "5sX3Pox4UNxdFmMRLQrSMZ8t2s438bCNy2rmftJjZRvucYTe5mqkCDZBq8fGgFVAPCMAWozhEiGHZPK2hJqVFToP",
  "key24": "2HeEDKcJrVBK9E4bBSBpmr89WmXyyFh5FduYeWjDEGxipSdgaHpbfxZVEX6kxb1DXvusLuNPewaiG1e9dSQ5BbeH",
  "key25": "22toqVqHr1fjVkohpKMsn7NJHz36PKxxwkSLvn9rHfPuxYedVd3TH1YaCSstLhKTsWF1fppJTeDXDvMJHmJBqq9b",
  "key26": "21pyFArSFtVNyuTWLShkpux3nWSMbLsyeoz8oQfBkfm3tQ3qo1D41CXgdCbRLqFJoRWZF61DiD9A1oCfbRKeKSzS",
  "key27": "KrY9qMMvqwHfrTDkNZZyiK184hRqncS6WPsoTMecRxAu4VB1ezqZc4pk9AWiG57N95QnWNPF4na3BWmXpCJNrVW",
  "key28": "3nQ1dvjgdQXT29rk6neG2DqFgevfnUmTQ1exgdY6a4tupq1Vdu1QDKitSJv8o43dhhFhkU55YHUYDtoQtrTE5NDb",
  "key29": "51XCbp8G5tFbkaNwjF8yxkTnx7mF5QXcMp8GK9N4jevo9QLviktHygkLjihnjRqcgS2BUt68yWpxQQt2FBENtfSn",
  "key30": "47AWz26rhLR6NRnQFDq6CJQaY8KdyHqL1CNGteSH8DbU46sK9nKJYEBxvFJgUtYvhf1RC4aGBzctGyAPT6bBmjUR",
  "key31": "22q6yopeVk7oz4RpEooVUBc4ew28YnU1gXMwxLE33c5sUqQxFPAHPtEbqvAaFXFj3ssXsGZPWpf6svKHq4LEPtvm",
  "key32": "3eco65vZ4vM8WjybZ9iUiegg7QDBe1VM7RnHDBLMhXpWhy7wSrN6mo9yor8gVCnm1j4Ux3Gzeqwp6N3MufQyNTpa",
  "key33": "2k8uyXdQKFbvnnyYJ1MsTkTdJXvhhN1sxvi9tD6t7Qwii646Lcw23uGk5CNUce53Dp8oQtAX9DCspNrB49xYS4BP"
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
