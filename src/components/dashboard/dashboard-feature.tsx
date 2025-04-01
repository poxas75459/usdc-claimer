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
    "3NN4heQdEpCpwkCtU5fYn28TBo7HmjsB1FWXjVXTM2UzXankmGGvaVLinKpptjoy3obayveq5uEMNCqVnencgJDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDR6a4pRZBfxKh1ufaunWovoP6zY8z1zmkB2U5T3WtNEF4izerEfj82wu8AL6s2XyV7KPNDw4tSBHwaGaRCCJ7L",
  "key1": "3HLnmtVKKpcPz3yLG7frwiKgwNq5WyKU5QxgDdAXy8kbMf3BzwQEWtDFHTucbxDLcGYwNr7BMRCn37VmkN7DgbLK",
  "key2": "3FYNTneec4gzLvjMLAGuhBfdYA8Jqu7TCpNUT3nZTzmWnczTwZJba3hrWZhhRN1oyFjwSj6Hko4H5NnggmV3EbQP",
  "key3": "4PvDhCGwR5xVVyg57396unx8PiCowKjLwPv1QAsQmgXTyeT3gcPhw8N2zxTcA3KcMjCNMPZbeBwt7YPbLAoCEzwY",
  "key4": "3Wze569rP4ZiNm7SNUxLyfMY3PygAS3yPxapEQRfN1LTKGUYsNtDSarPEB4wt99sbiyc8En5UKbvroFJ1oiZWURD",
  "key5": "4jUPebDeuCGNuEYwmPDF9JYm8yqCjoNTc9x7Koek2NCDDZpLzh3HdxHtmPiRrQTaEqEsVetejVCBaHLEZdh4z3gf",
  "key6": "4og1PdTQ2vBfoMThd8eL9RCrpNqxMFCYjPqz9Gm65QZJHU5A5zh1yeSa4rkBDEDNoHyQzq6hvCMBDs9ZZDEZ4gpc",
  "key7": "35rnKmFUkza94sU1TfJre7qkg6LDaDe73rRKgUxkpqx5QZwudRy6jrYkskZZt1jHyqiRWxvQQi7QMzkvJH6hYoH2",
  "key8": "EdXYZUX3bR4Vgj8EUKw5rXTtpssYrh4wxaUdmRr3b7YxmLXBFjjkgDp99SZJzB9S42rzjatezQUHZSr584Can7o",
  "key9": "5dQUTSGKmcVCfG8ZniNhWyo7wDRThtZzPafHQ2hhuowCnp7zd4rdCQzxmhPUJQeBrxpFRMqs6M5hW5RFY3WLqKrB",
  "key10": "67VH4qyHGYNorrHEzJDSMTQ4uaHsYw46QEqsrTXZn2diNKe2Aq2R59nAN5TpGfCWGJ6PDfLBPHdtCqo1eYiW8BSn",
  "key11": "3cRc5ehCtkr8uHtz7eJuVFcLL1DNHh8L9Pef6QVWwW8RVy5Jq2hhYPPRVgLvCS3RqYpWHt714NvrL7Su11NBwg4N",
  "key12": "3UySQvom2kLH2uX6QEbYkpDSNEuWbWc3zQLoinKsgz9pfX95vHAs4MWLBA6UFpX8hXBaFxPVDP14h8EMs69uWJts",
  "key13": "dntipDDBM1w1DxTEutvyyff7qzUvXhkUWuwUCwnxidT3UounCtb4Y2ubNTxAKeu1bzkGFttMRRJsiD9dwp8GRvW",
  "key14": "2uEDkP9QyofXMHiiN9mKxFZWc4kYRbMMKZz7rCv1PLLbGt1N214LU2ftgQ9J62qzF5v1xqqiRb4xLScGqP4UmXkw",
  "key15": "3k6TcjjYeDMBUYmgrgqYRp8zg8DJAqES4TdcsDmtX62AUCjE2UzfKCfpZi9NEA5aXBUPNX27AhWygT1aLQZFReuM",
  "key16": "33ou2KEvJPYc1K2uygt1iDtyzofJPX9o8XZKR5uGdMFLAj6Wr9xw5jJNpKJkeYTcRudpxLY14SVVhtcgtAFb8KhK",
  "key17": "m4QiVW2r4fcKPvHLwZJ5Nk7nR1V4PP8iZhucVxFHo1H4x6yjFMT3QjUXHghYJW8HyDGdMARXauqUFLRCWmzuTmE",
  "key18": "etXnWJmqpPQoj5AxPd9ZsPxJbGXAJ7qyCKiaABBxg89M8wswbP5gLMnEmcqkR4yMbagFJqPmbJ9hgBAaHq3AoWY",
  "key19": "T7m1MaFseERSouHzjKWdSbFXvCZRCaoSbvGSXPP7EqkSVGmKPwzQt2uAiKzSxqoWbTAMaFj9ZDLdfYQkp1Mftzu",
  "key20": "5TaSDjJH3FUUVQa2uxzVRKJ9VvFL9FWXp9LSTz2TkWCzby6nZ7kiatiPcg4o2PmD88pkRF8bZ756CnAGn53qE643",
  "key21": "23CgqMaqy5NWePgYgtR77ZmegwEmLTownP6bxwdyK3gtbtUj6s3iUAVcFQR1r7qQy3k91qSn7nonpPip2cgMkmQT",
  "key22": "3uxkmSrAeLrZvneR3D9zaqvQ5WYXGoxeNCx5YNQzXdyNCWn4bL3RYbFEnKXHYskx1EBrrzZH1k9adYYGCxzytqQ4",
  "key23": "3wE9vGUgibPfX1qPUDQfSNVttYRtvKJcfkudwb3mQwLzVkDokqXRn7NHyqxU8kpokLqDgdZYRQ8gZnHjtFzjy2W9",
  "key24": "2akqbRvD4Y2zGhrw98LuA6mxx2jCZxq8Q7AahvCeZ1mDKjkPkuWi574wwFiLu8vDj36yH1X9oVF2iihJrsMoiWjK",
  "key25": "3Q9TsWGwMgA6ML4Q4gMghAAkmFh47fG5pJucxBSw1BM8bKb87wHP1V6qZeWKf2okHuFYYpnt6wULnSdenv3LHErV",
  "key26": "wZxH9EaC5RzxkFxARYABeWWNviTZbMXKdT1sfywW9jGhA3ghVBNceXQeWxAC6mRYd4W7JJAnLpKqpFA4JmXuZFU",
  "key27": "4JwSyp4ekhBTRxvZKRnPhJxm6WeohP2uchNt9AQXkRYnQXQwvQMf2WzCZ8HdGykfoSJpWWTrTUebkfiAdccFKbcn",
  "key28": "3FSa3mWVFHZZroN9VuvfhwXUwn2Mo6o5cCpJDgUDMvjUaPBowCx1RvkT4xNbTGCw68cm7F3H8Xu2eebec94JS3vf",
  "key29": "2joxHRXbRZJR4VCZwyAmakvaTnyQ74yNoK4S92bomUC32Bk5YxfVgNbT5KqbB7B8ToYom5iA7RCut2Z71v8ZEhKc",
  "key30": "c2oqjYqU7LBEpUV4hDhq4jELmFw3cUwkz4ynKfN4KsR2nJkPaYQCnDK4PtNGYr449s2qnqMJeXGPbb5cBBSyBFg",
  "key31": "2NY8xveRndMM4KBe8QL9JYLHB95Rb4QEwjQzpzfi6iJBGD8dNPH5KWedkkTYw93jLbetpwQAZZdx9dnuAsEps7U3",
  "key32": "42Wf2wJ5T87hibYVaZji5qxA5HZLXUkbWJoJWyzEvYoJwnTPqFKoqduYbfPoeev8vkoCaP1AxajVug6scdopS4zL",
  "key33": "3WPXHDUCPVNQGBg3c6gaDzgXDxdPSibV6R63YGysauJbQsnuLiqP85d6r23QR6czMXTM12CPuNzMDAReYh5xARWX",
  "key34": "5wE8UptqgTiWyhTkF54yr22WsBo9no5yLGnfwCcG286jhjmjfihN9BhkCcusGkjKfbFcw7Uy66YJikjRDXDwXvhK",
  "key35": "vkWxC5So8EMTDtQHokVFLUezvmHGWJiKMu3HHpMNYx96dzn2jtQmgRLEBHKgSvWsQzSeWdyNYhDsWw7pHy4YrnK",
  "key36": "2S9paDtpq8u54Vb19iYyQjb4Z1RNAYRanJZyDq78zAcX3oeUnFQNMi3Pkg4u1shhjjVdULZUvZhYm8TUU6i9ivRc",
  "key37": "C67kEfRFw6r2CJ9KKcy4zN8zpyDn3iYQGBVqZeEuNHhATEhez7nQeiLT9DbX1Un9guGSxqNT61bicGVQTSAZHSh",
  "key38": "2meFsok4Mn7SSvNJNo1UqFgStHctAbzyDNh3MbcK88qxo7asMRVYhSdo57hC2PZ9KMN9p73gYW6pmYD4pSVJRHCb",
  "key39": "4NU8CLfGV7zXXxVkW8geBgoq83tvdJfuNAqfvAFefr1DWcQu8MA8fDsLCU92yHZPtS6GWMpfhCmbneVa5jQiwxA5",
  "key40": "2xedmSkNJBw4tsHE9YaUzQ9rCDj9EsVuNVHSCqq8nbetnqPDDc6rmzEsSUV2N1cQZAsXqtnF6gjPjUB1uuXbMPNS",
  "key41": "2zdVH79N87C4PG3EexnFxD3svnVmGt3GhWo22yWLUJDfNyiy4QFjUPRzR47Wzc6W7ykkcppDmpqsKorbwiwKrjfz",
  "key42": "ouQA7sgYompbdHks7JfmccjQW9DfDzha2YipD62SQGj9dZd81wdUGLMdUrfLgH8zXZYhT7SdsWqYHwvzeNa8VJD",
  "key43": "1FqtZtzVixa4iqMKZpyXUvPWZCGFoDMakP8wRCXNPGdmjWmqxHeStERVKL6YU1USrAAVeJZYrFv4a17qMyYdPRg",
  "key44": "5hrP4HtApwJJxu8rW5rycYrqX17ZBcUZRfDJq5MTCRzqd6u6MMb8g4Uk7WfQk3SC4S2m298uTXRCVAPgacpJC9G",
  "key45": "2f84Z2CsJwBvxz1GVHvoj1R2ByPnoUunBhzsS9cFuHhtexbSdTKw3mSbnzvRG2HXyKamhvs5yyurh4rxwRAha2mW",
  "key46": "4Gb8cWprzqiw3Rg9R1JJjiDwg7F2tKa9v1ezMQsY2So2RvWiUjYjQYKokg8xKV8bHGSHYHATg8XsdozANQwQPGmC",
  "key47": "2n4et82zArh7Z58i1Z9G3xNQjwkA6hU2S967ESj7a96spDk1D2ud3L7Efm3kxi9B3S4JMQ5QCoWGfXJUKYigfsfm"
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
