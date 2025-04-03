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
    "2pFxza1Kyu9cxCG7Rma6mftsjg3XYfhg87dQ2aoxhQLgamL65Qr1HnoVxGiUGmvp8AWA2kEZQddyKU2PJo3FXBfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jgNonhrF4GMgCFuiwo2g4pav4EbVQYQGutSojmyAaJExyDRc2ZnHZKBDBwfhZLwKjJDYoj2gLV4ytZEfexkKvV7",
  "key1": "48WnLnYDwjmP5hTxjPQvNxgsZTxUzBz3bF8YKnUnNJPxVBS5xdaBJbfpEt3ewNbcknKvfj2NGmdLYYwvUXt4wEK5",
  "key2": "4j86i7WfurYpeQDUZK2zz3aCE4AgE4VfdBttPwSjj2sGuTTpnsEuFxzEJKRmWMJZaVLtromLjMFrAtWRjAbjbrE7",
  "key3": "4hkqrnc6761T6Ng87KN37BmbZgH5jD97R6v9tivcWjNdEi1bECu3zKB7wd4bVmYM3m1QZvcYaFo68MhLXCYaLs57",
  "key4": "4rRFBhFJDtA5ZzCmBoeDEKTMojZR5e5nVLBimZF1n1iL5wyAYc9YFFymMATUttQAmZCFe5FfxY6Y5umkP9FKFSz7",
  "key5": "2omDsocYGTLsyH45kJ29TMTZmDiV4eMAnvKfZXSKS5MPf9YkXzt6dTE9SAQ2rAxYRC7zdEpSmLMkTWHTXFrCKjGW",
  "key6": "2Kep8Puo2wiy1ydycQoocZPD8QJAFusUxYz2hyJ4snny5BqVQcaKpuFStwCBZxarjhsSDx84hfTbYYvd8XggZAJD",
  "key7": "3wRRYeBn2bVufVb6z6NU7rsT9aJWqpuH6ujELUn7wR9LVozNLRV1rUAzdGzPZpRLduzT6YjPYJCWgwcHbM4CG1e5",
  "key8": "2oWwJeZcivTrhVH3Qm1VbqTuENFTKuaQLrw3wA5fSzUBe74uokTgBPmCwAs5auTCGd8vXPHTtyNeCVLSpdYyZG1o",
  "key9": "2YqmNxrbprgarbYjmqrmQmnEVP2qjSvzfzTnUvAzQCuKap3whHwzvmseEQtfjTaNZNF8maUL9q97HUKCMebuZVzw",
  "key10": "JCXE1JPijdNZ688UgyB2SYk2JbQ22Gatzt8Uff7YrxBBKrqTgEW9FFLQ5W2jyGjLDBkqtQwvi7F64MKVg44rGFg",
  "key11": "2ssa4v4t2HEyC1JUfRHrNdzABBGyvMNsLUPctTqoXUwsRmqjymd8Epe8uskeN23arFy91CcgYs6pDiW7dfBXHz2b",
  "key12": "2HzBnAoaivhGevPvn1x4tdVW1nnwuUBHcg7fH8MJEJZQDQ8HpLYgPm6cXiiM4u71fY7Eh36mb6jjEg1DfY5b5ArZ",
  "key13": "8wwKhpJJGgRjx8SrG3At8FQvbipko2ehD5WeTer89rHbqrYtVH71fqAsQSepDMBxGtAnTGY682jq1EbwFjxvVvM",
  "key14": "YdEN8cbPbzEdYyAZYJ4oLnrYLZvu1RLbViGjD1KjiDSk6w4L5Rmh5UT8ArjpPhXVfXLxeZwBGWYr7wdUB47UrWv",
  "key15": "5jv8UjtuYZdZekxFGm7BRNAgAQb5xYDdtSjSCtfW8tEKXaMj6fkn57Zy7KkrEtshftE1KHZJ37hLaqhkMQX5AEsB",
  "key16": "36AxB5LfGjnPxEw5ennCa9nsP4fbmJQNgJujiaTDpPn8apvzMBY3PLfJ6EzCMAfY3YSyZvKNFizzcvp6FnB2cF4b",
  "key17": "5f8Ve8R18tc7fWUwHQjN7kpusDUP742TCqGadwpcfPSTvCchLqx8wKqac4igKtDRf6jafH4DEJKfMWh9KTzbV3RV",
  "key18": "2TqQ2askTHisTnNWXDnS51Uc2knqq4imdfbWe7aNPQPz652gF1q6XobgouRh97sx2qhTRPrM2XBW1po2dvAro9g7",
  "key19": "aByYfDU8Vpb3DHt3RGyqzs9waVsWtks2KxEP51Jo9P6ME3P28rxFfF2k5SRi1KSmbfMeyj26S7n8oKvfqNEwnot",
  "key20": "4ExEUXto3nufA1xoswMz9JSTG4CoGzPT6NNTjEWfyjCLsfrdQkwcYq1FHuc6sdsMYn6hXtuFfYbKASzr6UaAtuz6",
  "key21": "555VuncYzC2VxF5xwtMU4YrbvYAqdXS6SZ5EycW5xSfokbSZMAtuGiVKP5eZREb7SF1eL2YvPT1FkkB3i7GPoMZW",
  "key22": "3fnD7KygBiou1sy32xi6AuCv68aRwDYcqPMqURKo9A6GDikYFWMcuiS5UiiAYGez7k3Lwj5LGgaYScV5cK2nm1im",
  "key23": "3MuZYFQHCrHPHFJaz3pkPHHgweUodPdjxzAwu2WHNJmAefoshhryLHDNSnESjAeJ5WsgiPU8XXbyDXNEt5FPVyU3",
  "key24": "4zjAv5diU5mJEywJLkv7YkAkTf6trm4axQn2wA3Co3kE5gD53hwDA4cEVwC1Kzotd2kMdYtTd6kUUGC9D9UsJLTS",
  "key25": "4TZm9S5Mc8nqsb3w7gYx7Z96KKAjxYWhNLAuT7ftzLMV9qWjLsAn6rdq7nRNMaeeMHaEHyteqc2pPhQWbu7C1rDD",
  "key26": "3CDRZ5VDnMqEpFAkL2JbYx8jMDyzVnXrnJcjLBzF3DGxGRAqKodQyd4E9o2w35m1qyp4uFVsnRatyBknUUgSb8tN",
  "key27": "gq7gNR4nGqEz2UEiqjgXWivNkXHpYXc8v7LWuiegw9ff8w9Q7Hq8KAAX9BbVUunYjJhjvjvBAUv4nPCiZfJ7f4j",
  "key28": "3mcMqWjAzY8MfJwLSFX7SbitsGPh1CscdLsexos6tiMKvKFQindoPwJcJpk4TsiTFnPdiwNhVXx7PLTTrKrspP77",
  "key29": "2z8r3zSPCtpVX3KWMdEgGkH7kunhwG5yxJMp3QV8n4kk8L7MxjQW4vheeS5gPxUUhBmyokU9npkrGHuETyQ76fid",
  "key30": "PHqNmh9McCvWFiTVtL19BCvGAP6wD68JykqKV23r8MZRYjXK8fAhEqUyiKMcQHMXi3no4gNaDRZpsuLAssnASXU",
  "key31": "4MUwrpA9K9KhtYJPS4Ggshmjs5L9s9QWewdvLBTBCiR13ZyA3vsu6oqSWYJTuT7MQAjBwoK9FGQNF58jjQkpiAw3",
  "key32": "4MAioqZBT9ky2cm6k7VhPPvN63rFS2gwM56T1osSe5HnBSgpQw8aG3fepn23jMyM9y7F7N2YLV42VDjxa9EmwQAj",
  "key33": "a5JPLs2CxAHVjBDF9cWjpwUqHefenZbGMZXAZ42SZ3A7rpFFWhBCoYo8RKAuTtTm3oKsZHdN7cxyeCVjhr9Lgib",
  "key34": "5V52NyBCKs2JhseRWtSHcNnJbjg6m7Uajn42k41Uk94AE8V64qzUkeds2kbAxE9p4i2tum98e99p3ZpyK9GgDVPj",
  "key35": "5jzHxLFJK4SwsAtLwMyFhXdrAUQUuR2JTNQyQcZN2QdS7Gcjf9gZYgz3hwmaLnKLcGHYrR2hHMeWLi8oog6kRtfb",
  "key36": "3CK7CinrVWd5dhWLDyEzSWYPgjYHrfzhyn6GTrSzCjPV6hreaYoh4B478tT5YWwfPbGMntvLyJQAwHgXhcDJZwcm",
  "key37": "3yx1e5rMGkURMJ1btQMnR7mnbgT2QLsLsqsUCBEtw99ejGAusb1ybpJGT7JsnYgYUhDgbgRtmNEWyTV1LkiWbkdq",
  "key38": "4FJLyqNuZpJbABH58CWjVDA1AKrWmFa8Th6dComRYEM75Hm1djZHkpD3MaP8APZ87LjriTyoFRLve32GhHZZfpF6",
  "key39": "2Ue3XTSxRowYwaEUvHEkurZp57vq7Ea9e1KMReCNTcR1XSHcC9C5SFFceP6ypHZ6bXKcnMxKp3SPZ8PqQ14LfAkZ",
  "key40": "3cehGbkiUG6G1bU2qAT2vY7aqTHt78vGbfvYSXuW53aNzstfjMr1outWJ2B85JSDY2PY2sWrS9nnhEmE5yjERQqr",
  "key41": "2y9nkwqBa38WGFGuJoZrhs6EyiP3pULCy6D5fbEYWc7csjdnWbq7zP66Dtn1CA1HmL4MDTggPKvNS8zMCCupEing",
  "key42": "3mWvvUJrhah7AycGJoD6oP4NJPsp2hEs27YtyHW4cSQmCvoKVLhp5aZMF2apTFX7snJcoLPEzefTzg5EecqaRRFq",
  "key43": "591W8cBy8q24oDixAkzojSLokD3a1wWQ8B1S6DDoWrLficAPANxi5cdyqxBnNvd4bvakxWSa5za6kj6e3mLna9BL",
  "key44": "5YdswV4gZCprgQhMPBoGZPcyT6jhtXTMDfhh35mPE9w8d1mKYfir83D5K3K4Dk5AjmKjYjDTJy3RwsBf9YEWtaGt",
  "key45": "2VspBiDhHHKGguUPHrMWCz18HLz75i94GJFrKg1kAJoD7XRUapT1c35wfu9BpLE2amHh7H1NELW3vvYe6fcP37ED",
  "key46": "5MLfX5MzFyQpCecJcWfBHGBM8xXV9P4Vr8DKNcKKoupzQX7WjVQFEURTLkX3trTzaKdMJTXUnZjHhbkrsKGm5ryw",
  "key47": "3S7JrKRt7TegKSCTiSuJ9E3Dax2X8SS3aqV9GRWQMoFnz2fFuHg9ce2PLNtAxSVKpMJp2uTshTXzM248ume6Bfrg",
  "key48": "3AscGGMDBGcgLdKXBv4jeQ2cNTLVCBKMjXaJSWoixwdeXXduadd3TG16HXKr52QhwSRvghxTwYNNasxxhtXbR2jM",
  "key49": "4fQEZUoU2Qr354DZk8Vmtn5jSBnRVMHJCsPCScNDSw2UfbUG6Tq9Y4oj7kM3wak8aGS5DTXrCSaRXH8qMaPnLWTa"
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
