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
    "2hy6prWfwkREeyky3axXVCEKSCTH14EE6r8eQZFVv5W18ihfRJDogpC4dM2KP5A2yvXJhCVAxbesMEjNJUjXgT2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UVYGB1H1R6z76S8SZNzcDgn5kJwmGBiB9tHYKVTyXpuEfiC2MFJq9siQdo93QbRp35EwLQjBSEvKJLfJCUnkwdr",
  "key1": "25Th1UQhT7FFzzXG4wNbFBFVZtiQBY4CSfYAQhmZDiRzFc4nAqRu1i58pHqPD7DzZBNRc28enRC2XMyBDPASd2bH",
  "key2": "2AqUX4pb2bn93hzqro5yPxbmW1vpZTSE87KAC1WvznAYKE7q3BpoXE24zU8hRZYgNxrycgUVnpyVh1YykE1hL5wj",
  "key3": "3ukiAygQCfVrGT27m6uqKUycKx8EaDpETmp3C7HjWJ47FLyuPZA1jM7vjjSWGh2zYoV1XNyQA4dx7J5EhJDuPSmL",
  "key4": "3yTq2yTsWMnk3A9jWgVaXSpifcmP5djDbgifCJHhEyxtrBHaMK8dodzy5i9pHJiRMHcZxeCDvFisrB74hMNYBdPE",
  "key5": "2roMuXbrzTkiXG7e8JocaRFWysdy5bmdP8AcPTEZpzKschdtngJ2B6bWAyjLjPtsgsJzE2vxAH3rR7qiUW8GV48W",
  "key6": "2r9gAFhgMrn8AM9oQCUc26Uu4nvXKdcptn49NuhxJqcVYpttvbJk2dLMfbcQD5foRQt6yNMNyDZAMgJmDU37j9F9",
  "key7": "q9q86VqCrFZPPgkuZnLBa2LGyBFNL52NNcz8nJ4u7Mi7tDypYWBE2W6L7xUzkJgdiBsSMEGqAgmnCEv3WoTDK39",
  "key8": "5U3eu9fzBA9J5pnmBW9d1G8dRjJaX4X9gWSVkYqHmYoPugx12g9ijx6qim2vmMJXssSoozmKinWubkRKGyZy9xVA",
  "key9": "stMbz6KrFfeHeTwtrageZGmggoiZpSrPsAoT3skovb17gXiUnSPeudkrndB6WE6iorNgTKfkGsbP2buD5roLFJB",
  "key10": "4WeDhnyX1YaLKMEYf9DsCwxkXGBc6MTafm2fdY5XChMq6joo1ESu5FggTmpDtU3yrDDmS1EKRzgFjbgTTc3fmqMz",
  "key11": "2nvJaPhqFWUqNRLKteE8shqniwTZpLnevgum8fDiq1FEqg9nJdFm6FaY9owwQbTpnfQrc7D7hEKCf37xeTXq8Lv3",
  "key12": "avVB7WFNEA4rso5x6hR9vPShYoLy49v9ZNtxT29kfDurX2QsXFqSbZjnc4wCmRFohTSG7KR3A2fdudCciDXCoa6",
  "key13": "4JPxMWSyragd3SdyqtMfiB2xJfDb3KPSuFaTcVstj5JuEnTLxegojdvY7vWp6bAZ2MEUkkjbKkwH6vjfcnScHtZr",
  "key14": "672DnPJhh33zWXRg12r4NAsvYyosqFofMjchkRv9QTh5jeKpw1iWr2TV2UvVZp5o1T4tNzVRC5ook9r5DZAqEXBH",
  "key15": "2TzbpNm9xT6cs4gADmga5wyZTBHZLAnn8o9vBRXfz54DbqpPNbs5gjtDfCFJHpu81LPDyXVLNKGVk9gCVoo7ya3X",
  "key16": "3Fx7H9es7n7Ltp2sFU4r98QAcuKe8mNYi6JriifB5rwyPH3cKhAaeX4kqeUDUN8D2b37abPvaYhdmC8TFV7Mut2v",
  "key17": "uQdm9vJ213F8zL7Pz4vxCoikNwBTBXCqFEwN49gtSQs5DmwCAAs2cYWeqNEncFBDLnHfcpiEbEb6ZW2yJQ5voNn",
  "key18": "4whv7PZen9YJfK5zdgfedASfFSLhSEe8czkjNc3BCs8yEsND3xrYD7vk3xo1juWEHZuh81kNgxtatLj4eHfncz7d",
  "key19": "5SkhwjZHCXHR1zUiP91zHesoXomvKawYgCy3EJP2sZXJBswPF4HWP7NVR59rrXRozAAHYyWabcSZr6T9Y9zrVNmL",
  "key20": "2TVQLbKsFKMMArmPi9xgy5g24nimFe7naoTQC2SaTFBinqamo8c1uD8yANBvBqUxsLPUEEyaxGtLZj948Ysk8mZq",
  "key21": "5SWiZ7GDkhTPRCfPEWN5kSxW8U493mwmGFkgvnXvzuVdKcfgtv2XsCyHbVgYYQm7mtkCH1BihmNRJHD3H9194wDB",
  "key22": "3XHe44VdQ8T6xCjpbBDXyQTpZSH8Sb69P4SGc4GzK2mbYJRT9TpM4YDnV9LAvV6wXzR4pDSdLKuAUNJ4GqJdXSrM",
  "key23": "4XKfYs9JykRPRjKCpt7M8FrTjqE24aN4LEnUcYzpjC6yvBZQNw3N3f222vLKuNfWPxqnCxRrydEmyWApwq9G8A9j",
  "key24": "2LGXzdY4Q8NLw2PkxCw86MQRCYgFv2RJvqnPxVdDGHzVPyzBqEFQMNKaM6Xdov1CoHFMmaEk2h89twCjbz9zpq8o",
  "key25": "2B5THikduu6Qwv681JSJ7DbpkAQM3R2zLcTrt6hCujjxNGvUFQPmuQDEXZA3vgFJZsJLA3jnXHF7f6E3yzxWnafL",
  "key26": "pKfLP7yKQbe6K7Y7z6Hq8HAqD1dU6hKfxH8cBMjbQ7ZECSgLgCGQr2XfdxV7End9YJBsG6piLDmHYTrq2RP8JGV",
  "key27": "3GaY8qSzhECHY6YMXxvEGVF1takQuSSGsbGr2FyXsX1F8ULP9XuirLqkafoSxQZPmZ347jdhcuoje1H3FMfd8o5C",
  "key28": "5H25NXwpaVK5Qq1NTYQtVhNR3BVeiFaMb2Whmc3bCCQ7kaf7id9QvWG3cvNpLTimysN6KKDedqwSdpMhb4gBv7h1",
  "key29": "5TjFmRgk557KrxBdWNyXF9yFaWKtL1Ur3zradewUoSsqcMPgsVNKasFirDGcBFjFYXeYtNjafKAyeBkCMrJuFu3p",
  "key30": "2cXSkWbLmBqWiUGXm8Y2LnpMWEGszdNsssKEtgVdyQ1Xw9KDFShaBVpfvfJXizEARYChJzgVZUYGpwCcsQC88ZBX",
  "key31": "ShYU2bmxqKty2Evn5sAyyuuyKM2W5MQRGH7HMehaiMq7o4RGLijppLByzYDb6LSPbSRcz55P8s551k632jG8LAR",
  "key32": "2dvstKKTniE5ZiwbgDCiGe3MHmr9sgtAnY5LnAR1nhN31chunXTRUaYp5wn2N2rf8nvjrdt4Ze75KNCF4E4efRG4",
  "key33": "27j7kLFrWhCXPGKzKc7HQdNHvmRqCYhkGtogsDPNCY3kNBms4Nin52tD96E4dFXgF4MidjAGPRPyask1HQv96Hb5",
  "key34": "2ibxdBMqjFiqdGQpJWbsMCkDppaXnEWpNTzKPELdnAjviDfrNG3Xag2NJoSexubYTSVzZY8UH5je9TF7LQB3eSMF",
  "key35": "5YaRcwH3zBdXNavQNW444jiBEm5MDunJUNArZT21utDJYtvjzis3kY64t4AeqavhXaamcqp4aNpvjVQQd3WQitww",
  "key36": "7atRmuGfEgSgtpfmH2oedZE9iAkWPmEgxdMdz2yfFfC8z9TVmWS2YT2VCmZwZ5naQq8PzVaAgpLhwjsBeeYEKea",
  "key37": "2e1w72ERqQDeNStSwF1UXogWixbqaBYg9dtBnc5Qtfc3Fb5BGb9XtYJGEuDKh1LYyS9cWFD9tB3BdqKMCndrJjib",
  "key38": "ZX95EmFnBDnCeWzm4GPip4hDuVQbF77jrLTzVoiG6FpxJaVPW6eCsk81hAqboeaJNbAvmmEek8xaHCZBDCgkHu3",
  "key39": "oEuob1sTtUXPLZXtZktDAgNbSifFenpBP68y2hkjN3yJ6Di1eGv24rSSLQYkSAFdTGUpnoyz73bzg9FwtLBUfyi",
  "key40": "fJPAPNHrMQ2vgaFf2UxDMeXmxgsPkYtp71g8JaWyKkVwzHSyBppv3QzxXhv7BRqEtevkY6ZcDFwjTLNRuwgMdqH",
  "key41": "2GsyAD8roztMGzREceqpeef55VodS1ug1mcDYq1gXMi1Jpb1aJzAigQCjwzbZUMMfhLi1fnpVGTYWD3puZxp5TRf",
  "key42": "34Y2to42EJkog6BaUQRxCAPP2jdWtmJckr5HwdPpTBLcFRFgqPansWmGUfbDjph2qkPuWavAEUD8c1gqLgo8DTsy",
  "key43": "5cSqe4i2TePx3QRMW9TFYc1fJaaS1gwGr1deMgkeP813n5px4VEG5WUs4uVU6fgvVawRqUSaba4BDShe4QHc1TaX",
  "key44": "2SYkveGqW7kBGt2TPVEJ581te6XsoEtC7oMLZ29p7F7FZon2tsaCFwmGJ4VzUJFiSXDtfNbQspi21FcNYyuYrjrb"
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
