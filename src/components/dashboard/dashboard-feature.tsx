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
    "3pd5eLp2CsTi5MMFyRFykSmPMc6YKjvK2nRoQ41hA5BkJMsSgaMBDgBxwVaBYY5xBLYKs3D7zwjFeRTowYKDSWgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VEZif1WAgBRkdGSTKQ2HBa2EXhxJo6sMEQD2Q6cCvhcP1XA7kFRS4qpdNf8TH6kMqCtTpDotL6dioXbWhZK2wcf",
  "key1": "5h4mSEYaPmkbBD4zTRfHfqcG3jC3EEy7iqwViYduWWv6b2FrraJwfUT19VcPabWSzWjVAErmgutGjhrZSiDp4xoZ",
  "key2": "3PjwcxPqxEW7FoMKQaZYM26HTjYPmUp33cWCXPco4WQ4oneAANiY1iovECctS5HNaaCDpH9uPiF7PkQovHpmgimV",
  "key3": "4grkSntm9DeijikFPKdDFudMPASwhjR2SZmvymCPXUWwhXXdAhUZPb8MSQ9GgangcwYLZczHibdTZzfDSDSypByE",
  "key4": "CEn3Y6y36z7a68nbLLfz1NiT9HKmbKoxxCsUZTJYHdTeRCiDKfLV6vZxVbkytJfjNRd5bPJj6CMtpPLgaAZ92ZU",
  "key5": "4Vehw2wWr5y3oCRF8scbgyFzdJaYTgyg2L3DBhwpdeukRdaJoh6HrqPDSK7yGxH2dYNFsDCCj2yHK7rF6nMf3UE3",
  "key6": "2RhePnZDmpRVJPQ9C7E6B8qXVBbDXSMusBTBAwAwcP8BxT9xDRnd3AZrmGn5QzvGWyGVatprmdZ2cCNpWZeB2veP",
  "key7": "45Et6U4ar1DTmQKvU1xGcGKBqE5CSqQuv7AEqJXAVmVVUPFiViCRZzLXPpN8vFhkmvkwou8gkxUa8aCitRC6rvqU",
  "key8": "3EY9WuFKxdEYQSPqLJQoKitR8nF4yKfWsFj4rt2T5FTCsZ9LLTwsygv5zFtBzHz7LNAmkV2iKYzYSAa5t8c5snjd",
  "key9": "3twMhbKUTmVQoibSV3Nv8HYDnkpFQA8XbTPU2b4be2oWZzubDC6kud9Bx7imzoYGaaVSctcmTNaE4vJmCfxkzPR4",
  "key10": "45dSWQBcYRAD6RkTGFRejKf6G6UbemfvR2VFhkVpBkt2N53Gud5ebihLVCKL89zQyKRhQWNUxbh5yXUFK9AXRP6b",
  "key11": "2wUjt5MJSpSWGcNXuneMfKZqt6NKR8Q6GyaMt4gfENhVvSNw8UvAzkXGE91foiLv8iL3ivBfvZqVRninmEt1jNP",
  "key12": "5V8aWRynuijZku769ZDjG3vtzmhdDy8uqSBY9TsfhgN5fUpw35yoPUhUGFrc5fKfdvEKy17kYsNk9a35v3ufm3cH",
  "key13": "5zCCUAQYLWVqwLdoHxGD79tb1gLctBK9fAHfmuWe8xUUS5gSCeMoEnLgmVaaUECYaUjYgFmiaMaSfP4yMz9RsTZ8",
  "key14": "4ReoTZtcZc2vWTDwcnYnXm3c8pGQhh1PaZX4LtKsFpdwT2FogLfURHcCTBJJgr4n7UzVRTQXmShTVeZEzzsEvCoT",
  "key15": "2HeJ2Twe5MnxLqvNZmaRgDFdUs5ZZhGcVJupeQ87yqWNvVunXTBoNb8JqqTHcY8687K7KPJX9328ekipz1PhJVVd",
  "key16": "3J4t1re5MLaWawcp3A4SNZUe3tapVahePJvmN3iKP8BvSMJ85h2ywHeXUptXjwnnkoMhuxPTXfK6VraEZS6nY7FS",
  "key17": "2jDukCjcGrxuFcFPBUEeVcgwYQyRckNQhpjnAuPYGDrzpXYch5h8KgqT1V2uVKLywNNkb3PpCJLVGc337CgHimCb",
  "key18": "uP18LguZz182RDyMdoruSwozZDt6RT8Ai4j1ipPuxE2QSc84ZThHM3BRdoks3Mwv4ihESRFUsCEzEXP2aihwkMa",
  "key19": "2CY6fHDRuKBNCPDyLH5EjtWMxfhFuuCzRBLzLCDwNR8A5W7v9KX1CkdGzC9QeDAjfonv29ZgeFda5LnQemxiem7r",
  "key20": "5WecVfAKy1EvK9Nv1axTBtbhmBbsTnhYcnsEkCAqEw2tPhVS73BMqHNeuZpueNnjveuq18FP5K6oDbjB4HxFy1hk",
  "key21": "24cwxGiA2NsLGLTNY9CkHFp27EgMPJ8P52kK8q5K51ukias4db3rzuAVrKtmg3Ea3MER2PyvG8ezrJLHCQ5GuyyD",
  "key22": "2Tfpy7gaiTPXBWBq6Mfu14NRdh5YtesbBhBAYqAdUSXyt9H6a3Kth429drQuoytLiKr9V43x1CRs3DPT5U8sR1Kn",
  "key23": "2KxbBRPC5TUCDS7ZLocPxLw55TJ8cEeUfedu3umBiGoew6h4o4kBGE1j3Se6UuYSarJQQWrcw7nreHC7UL1VNRS9",
  "key24": "4a2qG2UuJXYado9zTEK8LXww3yu48ARGK3sNNGTguCxtrNjJpqzmMQnvcPhP7hpp6VLCARts3oBCgDTveZbStiTK",
  "key25": "5C4uqo3Tfu3n3eNwppFR8ZdxCD9JCcrWrNGke7Ybtq97eynJqbZycW4Z6B4wcPiNVaeGqsVLSR7t8PaUZZrSnv4f",
  "key26": "4RCi4U4Xs7pYfDWTWBqvRLioNypARCXgX8HsrCV6UdDxHMb1g2fPwaYvLmNEufqjgLw2GgqZ5yksL6bnDyccFsZn",
  "key27": "5bMLRXvYh1AAS8rvuHZkn8ipVSpN8kEi8yGvA54kL8jixQpqymYz9gRKbVzqhKqCSyEnXrJ95f7KFQPi3u1zrqkb",
  "key28": "65JDLF7oRefRnTihHJ8WVGHgcqkuZNUVxYVZvFQ3hhkCD8G1tHUDXjxv11v4xuXPuihYDvXdcS19sgRcyeyz1ExQ",
  "key29": "P6joM4DgB8e5bBReAnJak4R9X63yCZit9aB23JUygf1vGqpw9W3Mhk4MCrchFi4v6LWTSxuNPNYjQYxaBCqxEju",
  "key30": "2ESjTwhk2jboNkEJEe1Qd2iDibaRJsYY2aLshgU5fsfckekbNw8cwwna1FFotyYZ1dZ4YJ92sGwUNRV6CDSvbDMM",
  "key31": "4UwBSTFR74pgkRYrF6jkqgsuLRPW74JzuLQvZe84y4kXX4RXcbH1RGEqdLz1cyPa9EKYB5XBWDkVVqiRF8tqWRPH",
  "key32": "4gfZ6aKpraDfZELYGPCYDKL2SgiN9GWJYct5bvs1CUu7Nb6kNDRUsrXhQ32AhMo6WsBkywRyPhuz5D9Js9uQJBKW",
  "key33": "3Zm9K9AjsmX8UjQr3Vnm7Z3ShWxLAykp6wL3cAQ1xT9i5D8NBt5DdEf43YXQeQKbTajgL95b9yTpTpqAvVVpBGyU",
  "key34": "4ZE45tTUra3W1CvyUHqhkqMhznukue36zYq4oQFB8DAPaPfEixfEuB87cWjSTC3dduSCAy2iBZnHbjNug77Yriyz",
  "key35": "5c2dYt7TXrKfvkcbnPTC9MMfEMnDYWmsHSVwZn3heLAadLaRmte7vbADFGiMSZjynbr9TP7B2YefCDkU33tea59C",
  "key36": "4K15SG63JuwrkDSzcC8HU1dEuKfth7iQsq3sbuLkryhDo7Chdm7Akp3DrSEvw8ezbcwkgPYF6XKWMU1Cz6DvDKGa",
  "key37": "4fWFRkLLvWa2Z91KNR6tChmgDAMG21c4oqzHtqdWJQ4i35zLg1nimp6RcLb2uH1KUZtu9Q1KZC763DMgThXtPbYJ",
  "key38": "52j3DFguMyryNVdjEQcQ3uK4AbVac9yP93i5adh7X7hyut5R2uj5MptQgUErhLyySzz3nMZrv4PKEKG69JcmbiW1",
  "key39": "2QLk87ArNVNYLx8FUM5WQnY61TZs2wW3h3JanTDCQVv3agPMAyVqDSfVsKKSj75UyY5bnkXkH2ZwVnyb4aZfZn8J",
  "key40": "3yKFPDYJwJSw7USwBwqEQztB6gwj9BZ7a1JTG36f2TebyogDMNYPcYFUurGi72NjVYUewt1ptFKtsP3XzcvcxgwQ",
  "key41": "GwfJEUDVpLnQAtCvQY5xwG2gerEPggZ6ZaLDgtrhfVGdQGk4pzUwf4x6frqtRLakR243ot41MoTBtyCco9vtdqP",
  "key42": "5FoUiLdxDJi5LiNnHWymVUE43FsawS8jDLFNzRt1Lf1aCcmDMQPN6wtQqH3ubma6FEPSHxXNM4HAYunwSuzTyzD4",
  "key43": "5so4aPvRGjYu1UxccCw5q4C9moLnf6zNdLKVMYoYbXyu84Z9bmf6zwbMQV3tEJVSqGU6m8SXSuwqF3km3DnMXmSC",
  "key44": "2iDnBcUeE1oZDFhVk4pZNofgpyDyzTGZHXpZJb62RBuGnn5NMj4MpK42MhczpUCjjV4hLGY1QbFsjsYeG8vMdmBG",
  "key45": "3Qa74DoQeBzsEfxSCzkKRL5qV2V1YRe1vobW8nKz5DyhLmk7YhJZch7cPXZxEdqqnVys92BetP9tpicQW47wP66k"
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
