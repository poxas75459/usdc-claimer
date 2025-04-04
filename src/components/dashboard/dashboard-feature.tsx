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
    "3DR8KKbULuYuKz1F7aAr6LsBqRp6JrFmu1h9X8xwfi8hu6TGdeM7tu9uKnv2SSbq3rrkjy8DDLC3njtcG6o6vmNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vSXHNqyGgdYAvsJyGRtmE1mXFESAk84MmgSAv4qivHRW42vaTuBki5AzCj7CzQtjQHWrE7VSTreEnM6fudXK2j3",
  "key1": "2nRK49pwJvH56Acq9yAGiAdxmgNNhP916qUe3Qb88vZe6kvw62kVNABHQyxeuk63Lq98yNygF36a3ysWE457BvUZ",
  "key2": "5R5oK4UxQF5XP7nCp1L8XTXAFVMPNXQVdYaGvZnk4ZCAuMwciW6gDUF9svV8Wn1uvdPQuWs8KAfirHGKewpJpJ35",
  "key3": "596QRzQUnakSyLEe7zmmeMLJJXqx2wjnigNRQwaEX2kj9GsJVG8q8kn5fvoNi4nXh5p2Vcmt49rqG6JuSPcweV2E",
  "key4": "4BbiN8Kek2Fw1UK2A1hUGDHjsv2EWUxSeEtqdkxWyjbFgLzBdcR9FMeqKDPd4CdXQrGihdZ5JjuiemJSJ8tGeZff",
  "key5": "3V4qNmGD7mXNshDreJwRcDGVQA5AKYc3kxu9UKM5XvcLdaYQmLkPcPgiXAjgWrb1tDMTsTbVKzQjHQgQDQXwZS2W",
  "key6": "AHce6aphWVddwu8CkPNo4LmobEYLWqkLTXBGNJk4yMbmnDUsRe7uS6WFEf41tmFbHsKnBHEnzkvZftpodjMQzkQ",
  "key7": "nis2VpTdfG9p73yf6gwSq5zjAUuyp9oU6DaACCX6enzzfkfEE3pt4C3vP3WTm2LULLnhHzbjhxaPvRAqpSTY6ss",
  "key8": "2d4ZNWdK7bc331LvcYKxxzYWpW9vrzfb7eSnT3heQsnBpxb14oaEMLSFAzyBV5J7YWWx5uBWihhRxPXDVh1pYCYJ",
  "key9": "4kvq5uNQ5gJyJUggNSJP9TVGCE8Zpa3bLoMsok7ESigSg8U7pQj7LQ2rW7rDASpTxJHZrmEQ3DkfWQBBvrAVAgXR",
  "key10": "dLaR5ivaKfpwfXNwQ3PaMsfxio6spcv834S12qFAfxzYFkGFKigpVTkTHoMi7AyyJnTYDMq8f9ihsYkUq4YpHTi",
  "key11": "qLtiAwnJ8oht3vy5nEPsk8JUqYxD2ioubrgv16ofpfnBt2MCwShQDCvSYENzdkZf9621Q4vxLqboH9cQ3UMdvAh",
  "key12": "2MScpL32khnzSUmvg1PLRVZLqe8YMck1w8ncsXjrooowt1UxY1ksbw45AhH5qRcpprDE3RXjsFqHdDbNBA3XS2R9",
  "key13": "2Mba4CWAsFABK8YPLYjBuPNN8mmpqyZd7DK7pAttTn8CLJiUP2vY4EyTkE8uysLiDQRBBPuyaAnaHpGuK6jNcWsc",
  "key14": "2d8RN73Rp94Ec3GYiJfSRPN6J7NLe9N5ToSsT7odw8yGUaS6b3WwbTYCXGeHRirHLT9YWqumsLuvKhgdwZK3abFq",
  "key15": "2My52tJBQ4P81QPe8vxpzVVbnyFMdfxzWARfjUBdWtgPxAGnPJhHqXscpBnjH65DCWx5VuCtTjJCTbsFNfYbzSoo",
  "key16": "7pXF15QmgyrBQ1Uc1dMxSEXdAS2tYb1b3udQaMdUTfq3Udq9XwwnynyXnAqprW6tk2Rq5CCmLMqhtn8Ys2wr5st",
  "key17": "2pw6S3SPPBjNtEbpjLAxiCpEhRB4EUan3w67bq1LCoh78zyjiVM21Kbw9WaG16DVPw4Vu2qmc7AsVAbLaGSArbQD",
  "key18": "4TXdDo6t1MLKEhumQatDq5ehDXsRTtccakh58EKrGpcYWyB721MHvVBJKMrLmMr8NfX3RHJYYooLHn9biT2q3yVQ",
  "key19": "3fm4RydvZkiHpcfjdiUztS9xN4LNkrTjCCyPpcXm7tEXGoJmyaoLTUmK88J4BjyJvxAdhv8F69QHf2cMNfsceb29",
  "key20": "3FUKC86afQVZYZNpsede4xPbwfpjZjfBKYzs27NJMvLi1Usj2D38cqATfMuQ2bpv1VcaZXq6kHifb7Qhw6joN3FG",
  "key21": "3Frv1bW1kAArerhdF8Xctw3JtjW7LyqciALaLeRuHEhpcizAttBAMccQJefXJAzQcu1h1weYP9UNza4kv3wS51vJ",
  "key22": "2boZhSL9VhvtK2fQYzTyuB4Xsu3WTTjUNi7rmtNtreoeBMfvbzaDzFz3bXJnq1UycjTwHzQEqFxrfe64Yrs8yo2U",
  "key23": "23T9bxoEEr4AcG2DzPFmw9YqDWueJETN1TVd6STsEaA1kzsTjvtaQSEEoLPEre5Zd31JXVBSV5czFaYPmKM3aamq",
  "key24": "2DnncfGxuPTkjCgdQYahwgW8WWBQwpKKbWb96cHMb9PfugsZpzXjeDZR2epduwTiRkjS2KxpfJSz73tDASyHvGAK",
  "key25": "b6ZRHAXyVSoRBWLsCqhwJPNWy3g8dhPZcr1TZeypujLo9izwCsdhq6rs3YjpEoDM6VuKo8YHZKd6TxkzNLFNYuy",
  "key26": "37XS5zdSzWJegH1wV1LcPGEnPRaDj7KvKW9wNXwHAHt4mGDbWoqx4WzjdLD91DVvnAG1RcnGaxB1DaMLdVoi2eV1",
  "key27": "5GqbbtAiDtwD9Spp3hamcni2UnadtK821UXjqnK2az9SnWTzEPAmRX19WJzBvC43nXTRhMGXpHr5fC6iPcnRVdt2",
  "key28": "63uDwG3T1cY5JuHoRTDWLdBMtiRUEDNSuie7TU3V9dPTMn9vhTua79YWkEZ1emJHDoQVZCwZJn2tpLPWcRf7sP3E",
  "key29": "4Rz9tWtoCpYqutvHeoSeDeVUMPk1sejvhCFQ6B3meWHCsizMYCQCC6MMD3RS51R93okgeRQ62MwRiunTDHLQaYuR",
  "key30": "2fZFq9Ydft6VNjeuZEXwnY3EMYZQFUU1eiDC4SwTFsw9k5oNtZdXLZQaGqoMjY5gPwxYTnzV8DZVWcNTYCU8r6Mi",
  "key31": "5riEgwpTPmunfsSCBsr9Tjd1mM5g45U7ftPDDvFffHANsumwbWRxHrjqwppZXYz41FXzpaTDoWL9XRuxPcfUtjPU",
  "key32": "2pDfYXQdCLsuPBpe85PeXNNMUCkLnxkMuJ9pvh8gDn7SVSZADWrsrts5HfzWCwRpNmx8DCYmn7uRpEJdAJkGaURC",
  "key33": "2YwBRDKXn8VL632Wgwx9FEgpiUnKozGe8uWoA8CyXQZNSRMZqTene12Gsvyu3yeDJSJ7tP68LXHW8dFJyjvE85dQ",
  "key34": "4SyDpvakZRiqgTgDXXnt8PZkx5vgxDPaqerrdub4ypK7Hs6PRtFNgnKMBzFx1B3unv5aqQPKw8AR4iPvmCbXLZyt",
  "key35": "25cNLCh2RUjodci49uXUF3SG4FaqtJxBdN416h8jrSmoeJ32eCC9hPbnv4ETkS24ZvUqZzsJXjZ1KSGieCF7dqbZ",
  "key36": "3HUCK6ZkxCvZUwsDDu7y1pEtsNySZWB3yAiA5ZBLJNQba8BrubaLW3jyybakPbACuxbAcFP4Ks1Ddxdg6P7w3TU4",
  "key37": "tGnNoZ7wBRpfkZ4TrgcoC94oNBKxLNu4n4TNDuCaWQzi9M1CZjeuwKffoi2hiqaohoZBC4oVSRqgAcRVzXcdDxX",
  "key38": "45uX9YuXRV356gR6AsNhi3BJktoUw1LazuJfo793M3Ndc8npEvtsUEMShCXvy4AKmot8URYZrjR9vFkes7yELH49",
  "key39": "2dDR8QGxwcjnwbRHkaHbSsuvLeDhm3MnspudjioG2uNEyPpjkFFHjUJcAodaKKdaNyzvnNCaWfFBr5w1gw2oX9g5",
  "key40": "5QrGCvhz7Qz293mw1ASuvMxxwzPzoiSrR69k43uLr7MpUMmJM1vig8fkPof6kJ4f8cKWgEtSyoiu4w7QGDZW3xv",
  "key41": "2CdDKjqf7jtZPbWT9xfHpjEtQ49fADtgC6rJuuxqssNSvDbhWZCmQEX5SCkzMh52R6uboCECsZPoMmviWdhHTEU6",
  "key42": "3FovWuvEASMNJfjFVaSL5bna2H9MAht6Ed1vMqtXS1QwZi2WyUWvcVjVMatNheWEW63inVU26kz3tbZkCMK8vSp3",
  "key43": "5ruVGJ7RcDcRvHQoN6qP9vnCpyDHJ1Jh9qhTBaBJwnQoweFrc4iKdM69JSQLNW5RnAMnfCwioexu16DvP2sJAeuS",
  "key44": "2tiNfDdnhfuKZ9ZwwP1ydHPAJxJugZBewP5Ki4dagdhgw7omPwCeLi7J2TFhhi1C7KdKcpSFB6p4t1zFPYHx5hn7",
  "key45": "5Ehi1CbFwhBrP1aFRrcK6FSz9LYpiqMKy8i2y1DjzvtaW6oSetaNQLs3UCvAVbUUCN3htpD8yb7o57L5ZmRpXirx",
  "key46": "65ncX8acWRAJhh9fL979bjj5s2HhDY1Gc2vcBbb9qAjJbcTfDP4qsEwS1pVGLXVfMJmRWv6cNAtpaHoQXRY2LVN9"
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
