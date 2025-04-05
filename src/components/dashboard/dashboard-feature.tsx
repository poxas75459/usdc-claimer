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
    "2K71vybzEn5wynxFAuvBasiJ2isLagvYcvi2KhrD84Uby3UJFhHBxYUMzm66SvcistwARbGJc68H5jiRKorbwegB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HudVSYrHzA6wohZCVhegsFpJJ9hLK7VmcmGjM33wB6938WCAGui6AN5KzmXAAK1Mw6LnaJP5GUpSc5stEgqEYQ",
  "key1": "4axr3VhyGutrbt7sVQLB8df4Dj2gygosY2Ab4sTrFhZ77jgGhmTMCWoVgh3HsBPM425CbXKJ295jW6CMiyYf37yb",
  "key2": "2b3rZPTi36mFiix4odAqeoUtSBMpZXmy3xzeYFENeHBa7AtPziRN7nvEaAYJXdUT6tt6LaE1hXyYg6FyPgjRyTfP",
  "key3": "2DN1uq5mSKGEmB8nPAZgkhtM1k6uXN5hKAQxxJPfCryx54p1unGvnNeorTPNcy46kgfyafoStgiqQ28qDDWxXeTz",
  "key4": "2LpXi866yi6CYF3zafWU11pJxB92RzjR1aL5VzyYxcpQ5ZjWToGjGgkTPx6ejXVbq2S5pjpmbazEvuttv7BhZscM",
  "key5": "3Bo5ggbFC6KDTunGu9FqVW8XziubK3b1X3n26k3VzxuGtrRTEuc247uHJSczBtfZPCVuErkD2nQFe8jbkzKnHkcf",
  "key6": "5YwfmBr54jy6bVmwQL2e3zefgsrS3r8qDzRTUDuorX4YEo1cKEBWSahLjdSK3fKKVYysq3N7BVyp46AXFFWrSVSz",
  "key7": "2skD16oHq1nzgxU4V2gfaP1bDi4tg8P4WbBaJ96698N7DhWHmoXyCf1Ks3YQACon2RpfbKQdRchEnvJoHzN6A7VJ",
  "key8": "5Nt96AJMYPAhX2NEqJJ2iazTBDDfeo31KaMKzUeg9htcS7gUoqKB6BcqCyUjGj69XR8yyWG7zuAptwhxCgSR8Jwd",
  "key9": "pKpd4TtsgavLcT25fasEpFyxc8hQihQXAsreceWpSjYKtgcCTtZ2HogUsp2iUZeqbJhMUYAp1ZNfHjGEsvrBEtc",
  "key10": "5R4nVTz9U9xwKHUw9LsWCbbetc5qPZpKRAKXhHtBsDQpFxJDxU7KHr5i7gDr4LuyrMedXeD9ZsN67mWBGbEBCggd",
  "key11": "3QrtGQVBkU7gTbBcSGs7V2F6PdvNyemdk38Tjq59RMJnS2P99gR5KEvM93c5vJ5igtmFzxUndacBzgj4HKA3P8Yy",
  "key12": "2zqcx3oRTfjNEon5W6VvxHKwYE7SoqMb7Q8m4xRXu9BrZUZp6dC5cx5pckyAG9nJ9CmAgMPiinAuLSM1nmFSfowQ",
  "key13": "56dsHPnPahuftq1DxwHJwYn6eTq8pCZWt8vMBas5oYoxorZYTb69BuAsmE7KCmLhGWjPn1snHyEHkVSWok9G5dZf",
  "key14": "2uLTLibfEc8vDGf6MiXooStdf5ZwGzndYJ3ugEZgGnLEF4kGweo7CWA2fsL1zrz5cNmrk5QhyHz4SaDov1VdFq7X",
  "key15": "CeMxy69SPDcDuU7irvqJj7ZZPXkVc89vLCuhw9CHFrDaUVS9VSZspye3Rqst1ccoApv63kC112cEVmJ9eWR34v7",
  "key16": "4q8Vi1gzCAq96HZhPjvoi6ZtphdhmRi9WDPavyZA1Zq7NbtwNA42V6zyDR7LUN4onyY8yLedGj171HLRz1XLMCvB",
  "key17": "4dhFGZRvTmbKbgrkuc43zqUUmz6o9jYLzboRcrjEPNiGUzxLkpnMN5xBQy9vDuKdxbkoxfM2KEgRsvjdNAPgMjRW",
  "key18": "HcGhHABpQu8sXqbyY9XnUFJ4KhRkS31rDRAmSGp9TL4UE6ubZ1ri81iUQo1GiEb4vJuLnU4aPsgGth28G28teMP",
  "key19": "59SoWW3TJL7SquWDpGLBRipTAdMi7Dq18AStoPNM8BsPT1exNNgqcGmPdPiNZCR9NE37hokpcsKzBdPn5yhCX1gW",
  "key20": "5b3qz7CoAYWGc3MksyQv6D1jAz2SFB8svTTXoxjLg5PKiV3Nyp3FndpVGiKbEYoNpXFxicVjWwfvJ9CeMTPBH5y5",
  "key21": "2XYff4nBj9maaernYxJkSQv5UzYu49GwcgNVjaogCvFDvKEozDDjWkzC87uupAq6ty5S3USmXxZQbsL1EyJmnF1B",
  "key22": "5NDgXwryReDDKdNAu21kYDRpcR8cNXGXaLEBDU2Tu5ARBwBWxhTFCgYpWRauKsYnvUZJQBVaaV1UQ8WgBFePxJGd",
  "key23": "4yHzLFx5tGbajvBP36w7xhaYeYgPM1fdTuQ38GusqH1R7fNP3MimsuQuu9LzZeaSqJysTtTivmCjDmHftFSXVmHY",
  "key24": "VQ9GB9U2fNCUQWhm7THbv9fgYaiFLAARkjjPyWLqNqcKsP115TfamsQ57om4qNW5bU73sowpVtTLtEkc92geEJS",
  "key25": "S7NGVzMi1Kjo2WU3RZQrjkDyF2pkikwgKFwxxPoH43ivry3sHjmEToeG4rYTwrqKjRuCHWz7DHtRXxKehB5w9Lu",
  "key26": "468sPTaeAJCpbqiPPRrh3h5L3r7iqy2vMm9CN6aCWV3ADEeQSFb9gaU8XTSVEZYTHmZcNr9RcfiCNRhmafqRiZkn",
  "key27": "2nwAS8FLjhGvbuQVfTCKrPFMs1XjSnSsLJeFZxipsn4BDicCYBvVBmxQiJ4drQ7VSL4DJmtmdEnfnpsAni5t8r4i",
  "key28": "439EvejgREs1EZyDPQCtdPMebioepPxM766z2S2bkLCdSLQ8UyNexX2SwYyKWs4niqMgEzhSw2MWfy37rjndQmVp",
  "key29": "2V6bpQ3o8ZRcdmNuWULqbVPcEbz8DEPYbz8FT2UT4Srn9Fq5TsMsV5sTjKboKz9hCPeDSecjzG1zQDgNWhk7y9kK",
  "key30": "49LYkdhQCb5LCqaBcT2Rhm4iPBbE6Sdtwsxk48cKXigkE9Hm7XJHSs8LKy3TN9NVebkyScJ7XPPXcZQvo7VNwrh6",
  "key31": "3RKgHzCAUQ8wCTTdDqxG6k4C9cSQE2zwsSunnRrG86ao4F53UwD3sEduuV8E8gSzKcsLyKv2RRdMXqd4gGZxmAZu",
  "key32": "5tcQh163cowHMmNZ51ryxknzmZ8kdxRDSog61cB4mGCkPZD4SsKTgWnSctTmyRNk6JAWDcXoJakmH3pZU3GAJsrH",
  "key33": "5p3LscYtzgjd9uAgBwK8TkGC7Pbkdr7fzCyqf4ZYGnWfbGMKjwdotEVdpMX6guJHkNrWBrR9Q21VMKYBwJcmgAuZ",
  "key34": "4vhfwMecNgKD2MNArzQYHix9VEV5mNZXSu6nXCVPMMiLVrDxijKUpGARc2t4gDUjR8xs2yM3QbcpXMTxtCtRraAK",
  "key35": "o2pD1f3VdNM3XsNf43k29Nxkc4WTbcpjZkDj1RALd2cuBqBzCkZXKsxH8uQkjSJcPVXigSGC1sc8KRkucZq132p",
  "key36": "3WAU93EHtB8pWVyzrTZv5pFduUvRnH1gUhVx7hTUk1tNEWQTgB8thyHp5qqT84d9JrmpkmAebkGewuejFQQERG6D",
  "key37": "3MBUptNaAc5Y8xpeAVeDZR5U95Ndv2M486H4yEkV2PivEpxG9Vw9xHLE9C72iD1jBQAdFWnzi99SGQcigy5fs3Y",
  "key38": "2JicDVT9MMCpmBDMMt36gDxX8TxW7mh7o5UzdVaoTnxYqdRRVeHf2FmhzwgdVmogp5xKSB2EUmkaqtuqY7uAATeA",
  "key39": "RjaraLqAtvrULTHrkQjXJMXW2hFYGh2snub5WaVaJuZt2dDbXqN7h8SV6ycHEqcjQ4YZm9f4YHnjTP5u8UfkGbc",
  "key40": "3kYt33FkuK1PrcZNQDZUjEE5QGFGxvM5WNXz28fVcqD6PGbpaiPhJHtvvpTazNUWvenQRphm3XyLMV1jSJLqMxDq",
  "key41": "45MZnU4P92yeU7poiauK6ccwnb14xqvVr3hSP3sh5X7NyjNyob3q3tb6kN35Ah6NbGnnehJTRPiiMSvx2RUeA1Lt",
  "key42": "5EJYJ8bYRdwGF6YYNx6BB7t4WZ4n6Rr5u9eQULUqH71zsjZau4bcZq8PzJHpwyLJLiyZPJPbBvmGrwxBJuiicsn9",
  "key43": "5NcYmM2j1CuMtgLzzri9nrwWn67G4RVcp1EANP1HcDUzuLjeg7mDadZdRy78cBcZh2WfC5gfeWLBs9skxBMkor62",
  "key44": "56xqLYUFoAnhNJmuvCRsjs9hX4mwJwE7UAQPMpFR458Vxqpfsx11qmR9yeu1zJXKe55dj3mbchZqQkFXXAky3ETp",
  "key45": "2pZdJJ8ELKo22iLA5rXjUT3C1Mj57dZxxkZFrG5ZzRLBPH4XcB8s2bJuJgZnYc1iFSH5L1cxoQ1ZpeLNrJzF44dk",
  "key46": "4s7fPMKnRB5X6MnBoC8Q3F6y2Tt2riBo4M2dhGMiHMozs5wCS9hucYfiLqVeqqVTBuKNFAEv6JMm4qBaAramMCsT",
  "key47": "4sgE17iHqLJpF1ShfK2mtYN5HiSbuYcSy6HbXj99xX2fhSis61Q45QxbJHFB3RKgNw8m1GgFPonibbmqFKC5cYpd",
  "key48": "2FyFzb2pfyH9Qcav8o7wLYHDynoigZxssU6piR2W2pW3fcpRQhFM1BBwGPcfZC219DSEwnZXk1YUXJWovpf33Yyn",
  "key49": "tqp3fdbttcRzV6hNpDCV5evnhC7PaLjZiZsYkWeGnQmsGv4pifFkV8ueH6Xh62PLdzJtETVv1mGgV7u3FA3rudn"
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
