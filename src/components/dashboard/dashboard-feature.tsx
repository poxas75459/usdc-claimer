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
    "48qAmCHLdDWotMak1JZY9wMm2Lvu2cXM1XdEP3NFxhkx7jtmzgGndCKHip6FmW5UTquCXsoEWU85AG7vVM8fieZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hxefKKLswpPv52rsmz4y1nLcwUSY58jR34k6dpzpVrHJ1DGs9XMinbZb2SC3tNi4cwUVwJNBnv92bfB27FsSW6W",
  "key1": "5uAu93pko4fc4txeuh9MErqST2PnqJxcVBcCQMNcTpurcoKUXGVXH6h3iKgsoQ5g5eXq9iZQkdKRf9rCECxQ5MVT",
  "key2": "5bo97as7H2rs2QQ1wun3c8Xhw38JvyAPhRtTXG7a5D7xpfmPfq3EKoBsyfPnvNyW9JCyDRxzjg886yVJ5LmXAWCk",
  "key3": "4ixtcALkBqvkzWNedqZ6ZGyzt5tWmwURU8ekWFNW5EQ5cD9kDpJJFN1h5ommEU85exgSFgfWPv82FCCNjKBc4kRR",
  "key4": "5U5Sewj4oQQV6fB8LFUpdsUXxkgUiXueGx2RvLDmDGSjq9cEtoDEmN24t5a7GSuLgUhw41vzGEd46UqhnN1BQsTu",
  "key5": "2vWcKZHSC5GjLSuJuSt6T6rMzfBpP7mE6dCAfPuAmbLji8UtVRryjGvX7d6CRPNP6T5JqodMYzEiDfQ9QErS3Ee5",
  "key6": "YT7HBXnScUSTGaF8tXXzhdoMeQJYW1z2wJKYm1iehtRG51ugYUZzqiyC1ESVWzRxDNtcN5yKE6M36iBv6YnCfRw",
  "key7": "KamChV4GukxUMCwDNdQPDmYjfYs2EfyGpdo2ts8uEV9BWhy7TCYwn9MTSsoRLWgTNcXv4LRByydiatqn1TZC8dh",
  "key8": "2vr9A4xfZ6ZV8Q1G7ruoqJu8CNaP1Xq52jwDabF7pBEStMHFY1VXQosLZCXBUpQCfJab2hzJ4CN6UohRXyMjJXst",
  "key9": "3Xi5RK4xq2sQ2X8hZCP9BxHsbKijTBYqEdFTf3ke4JjuiW75xKTodQXDmjDPQErVo9AUdGwJoprzRqda8yNERkbQ",
  "key10": "2xHQpNTYsWxr4bECs1nimHvtZV9xAcyNhzVpw8nfMWHuvDVjpj3pJFz8Rg9tsECBpR5kLi3D6GG26inzHzvx1ZHh",
  "key11": "4d7t8VGPq7sacRhP1r65dnvEJfC9phdhK4kjT4BCyrj5taseYk69oMUBJDJFvhjrKfg2HstccxKfjyfsh66uWMGN",
  "key12": "2xcCHVXJ9UDfKka4bmGpc7mV9EfodVhmiQVZUSv4vM7VKuSD1CFMWR36DGzukAGVYsxZjfyxTNqHceUZW4BwxkgK",
  "key13": "21x2kT18fozM9EoE1M6DGMUHTmFWsKcExhZMhk21JZhg7UubK1xqAqcvTRFQ1XUF7wvy3xBDUVptxRNS4vPD63PZ",
  "key14": "4YzJ13Do5uCjaweFBhZRGit8WxzBdDKyiRVeCQedywDqrKU8JjGU1TnmZx3kH431i67HMjqcc3Zj9JovTTZT5NUE",
  "key15": "5t9sDwehawwJaZ8ZJzo5Ehxp9Ap5hi2CSUWbKUfSd3LTBnSM8gRCcCgQc2FnQk88NjsDwCMpm1iazkD9HeJddxKQ",
  "key16": "4N2vGVYjqqmBesDtepSxgPovrBubE63f9uK2M51WVa4u5dvijTp5npBMNCLLYC2MeYYcRgYuP3ccNUACe6jVnhXA",
  "key17": "2ePVi2rd8QqZSdZvuLZ2keA8up9M6J3NZyKWJ9ytEugnqBSa2HPy48shgQq3WH7EBBMjmj3KyBZLgzC7nyz1rU83",
  "key18": "3GmCY5fs2dzjPz6AxuTFnRGYBa7juUht4EEtvHzdnijumNQovtyUkzR4H4MEy86Up2t5XS3bNEbiMER1WtnFrtCJ",
  "key19": "2fj6ofb9nJMrPV89VarrxGadyPihD8byLwsV8oikoz5c9bvLMfY31gk1RPzMhtpSJkGgjGUZusptyZGnw5fkrTod",
  "key20": "3bLHW4yes2VcjiXtwBNibDA5zuwWFPrDCqA7Sdt19pRUyLzDqrKVuLbHRqE3x7VvaD8SHRMDrpBctqWuN8b7VNpz",
  "key21": "4XREc5A1k5XBwhSYoG9WWW5hVAsNQoSg5YSZcSLKsEs45ezWpEu2rFdMvW1PAWjrt16Py4wee9N6PgwoqdbafTQN",
  "key22": "4ASrCcxqDFPmAvwRzeFcUoW6Pwf3yjDfoeowhVxRUQuL4PSzxmegTQnP1dRa4jJbQy4imgcUodc291FhEuWsxfBQ",
  "key23": "2WfAdgsKmZRpXNfgRv5YK6Bf9mPpfRdCiqRATwhBR6YrPZD1qE9SGKECKNHQaADZsCKiF4NDJtKSYp8wRks1XfW9",
  "key24": "31FG7LR35HVPpsXrQSaXYcfTFnDXD1K8mcVJz25CQDEb6rfJNoArVgecnmHUs2WjJtbv2gCuY9MaRAXPiZJcHDBg",
  "key25": "xa4CJdkq4sazHFf5ASGW4QCNxchwPEszLmdYADxZEMEdoQaNhWyJqcc5oe3TTzs5JKKLBEr8ZhnRo1JUVaR5f8g",
  "key26": "3u8qXSbSWcpcafdRsVGUiopmckJbCvLWkTFojfnaBjudsoX5hApswoSLFXmMo4raf8oEv5FCJ6vYww5hGzBTjacq",
  "key27": "3mjL3z2RFgJ9HPv2drmSLCmDJ8SttEQx7wLiqe9C2cDYCXp9NKxpxLVtQp3oVa59wUPpQc6qoqNuvBwaUici7JUT",
  "key28": "dtYzkMpFmf67JZU3FkY11JupgjwqFTbTLCwb51r37GzHwZ7zwMErvMJJ7tAMq5rkdLFfDjZWp3KpfZSkKUrnAgm",
  "key29": "35VSDH2c74NxJu355XJQ1Rg8px4AXaoiH64238zvEacdkvNyxVHBD3QMvD1yRrKUY6WgpXqZruVXFhaK4TABHDMk",
  "key30": "5oECyWhZiHrCCqETkcSKT7kty22HXhRH5C2hnjWGLu82NKe2iZLwpy5P6mhj3uC1rJtg4jL4BgQoQvVwHjSjrNvA",
  "key31": "2wgMxtRTJgaxZXqJTpgSjkekmV2r1KkJYzpS1UxPF8joQid1TLyKzoJ5P5rKeGSTdQbcUNreaVKHuSSryZEpDFMm",
  "key32": "3bkDEp3CXoMQoRc8N5yH7eG9QZL9e7Pn6XciAVn1dof8Lve3NP6RdohDZGqnAHvTuLNF2PTidVetw5tKZ4BoQybb",
  "key33": "45zYvPftLTvRXDd3L9rEhoAwZ57KUd3rgsQzRbn96HGP1R9FJ8uoPzdPM2UBkK9YDycLMJgdh35ckPZZnuSHdZzS",
  "key34": "3mTLf5V8ZQQgv7cxWVBCYQiTF1deUu4RrmNYaB7vp3bTJ91bSvkegCxm1SMGpA2GiBSSpmqacf7etXJyNSBxx6Xh",
  "key35": "4Y6bFVTBSgu48LaBiqLXR9WvaTFzC2jnDDzegRM4KapCpoFknmHkebV5atoj7oiGsgKAfFho9gwxcH7GFm16ADFA",
  "key36": "2HNb6mBWSUqawU6n3FGeQhkGuQHhLWfAEux2XZuhud9hNs7ryANJLN4tYWZxMBWj2wFryqTRQ37amAFxfh58dSN5",
  "key37": "388gf8QiaeoqASR9Cm627BXC52f2cvh8j3yjLaDEW3Ls9Ui1P5YGxr4H63DXjetDQm7WxmzuCwYnTs5eKbeskBp9",
  "key38": "4KY1bdG8rbE8sszJvvQNnKGWWoicVYaAWxf98B6QSZ416kVmmkfCosgqgCZgHYHA66riBRrne8rhFZKJxfXT8GAG",
  "key39": "yH7nieb6YqVNUtRUDMcicRhAJKqMnRkDLSBdR77cZSgecSE3y6DxRvAKAyoD2Gzub6UdSJQUJijjjymmhsYRuZQ",
  "key40": "367d4ZzEXqWabkEyk32osG56TuwjMqYMB6WxczDL9CrvFhhz7PJaN9BjHUFwK9Hi1jLTviti9f8WuShQCFg2Fs2a",
  "key41": "61tZEk3f8DiAheXLRKzQKS6fhX6tWdcDoC2kewYGmnKDyTN9a8hSpWsjsntPr2gBzzRtABeiGkLNvNtNqzXBUT9Y",
  "key42": "4haaGyD5CuPk24RxpG31ZSiTE1GPdYQmFfsEqYseiN7gPBjqAdQpzsEmsjyfGTD93d2uKWAFfgbvBEMKbcmaRpfs",
  "key43": "2uZxxaVd3ba2DCaGXWkc4Jp2EFQMN7ex4LApDuG1wdokNhfE9EbSjceasC6QN5rg81RYh69nsPcVskgB1W9v4rQY",
  "key44": "3KPe1d8DC6wdUgTVmvEyCgjSvQSBUnLYxUikfjpzxi5X6uFFq631tStgon74U9w1miyJkezLsFjC11karik9wM3R",
  "key45": "3BFbuY78L6PN3dpQ3LFKNtFEjXdKWiKev9N3gyUBzwnFv4ouR13V7dFKrk2aeRfTSGphh4HwTjiTh1YUdTRUhkEx",
  "key46": "5G7Tgsm1XTMJVopSZMfiZAX5dqVVKEJwfG9NnpQMe7uA7vWNiDguYgRVBebzDtPjiUSQYxwgNtnGzDWoczerESnh",
  "key47": "4AdMXLhtrg4hiBFwcVN69Di3sJ8LFnEzgXoqQA5MAop6Tm8hpymbBx1Y6m6dL9QS88V2nFvHEaZRzEdL16y4VwvN",
  "key48": "3HH9qNYLGDFE5ERGqLsTNeRBPsgXDMcmD2maSA6KcXDw2m7ngpiMevJRYxyqdE69x7rfMRDEWx8Y2iVSjdsXBewq",
  "key49": "4KTMoG7VU6RqUcH1JCkh1cZC83G7Z9HRmyX3rWzn1NH959VEpYhcrLg66u5h5n2jbEYYzLKCBZpR4xWTnZzEc6uG"
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
