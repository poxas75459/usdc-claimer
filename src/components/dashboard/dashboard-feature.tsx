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
    "2ibUZAPpuDG2R5y8tPa9o2VrHsx621gBQrVpfvgCrQQJSqdSaSKGbPJ1VWmrSAKx74eeUbDGeydPg7B9u5J78iPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wXHCBB9ao9FYmW3N9aDGM7exH7e4zY8kkgM8enBBjt4XK6ps6AoubeBieiRjfL37PNPBHd8YVHDKmTwYRNunmh3",
  "key1": "4euGN4HJqH9vdWdjn6PDXw6621xmvqTjNxMD5mfaZgQ3ifyX4Y4LYXLZivEGZaaF79hJJfyE2GEVZGWt3aduWen1",
  "key2": "rvKhUtgbtrPw65Mygd5roiNoF5Ce9U6t85mzwbnAzQyTPoTV8h4eTQF1BQDHbE5KeFixsr1aob3ZUhEyJwRNHMo",
  "key3": "2ncbJXFYEbAR418oHUc9AuN9qZrf1tFW43tY5Xs9WspWPYe9CWFimwisA6SPYCRYqU5bx94yAhBNUpbkomaPoUrq",
  "key4": "2MpaY3vGpN4eF6ANfqNAtExhSNvcQUGFZe1JvkdjSP4WkJnWb7PhdDEBaSVHG4Ne7gBTnAKqsmT3sYwfdpW2T7Yh",
  "key5": "3AEvtnjSQkFFm327VPeioC8BDC94XJuwiwq4WckCPVQmtGmBJPVxe8XqCyFo433MnuuhoGUuqDgHeFuuBkomAPV2",
  "key6": "5hmiWFbAY3G7EKMg3L5RKKJayxX5d6NDWz3738aVocJtAyN2zr8PGDpjVSHQiinJW4HbrpQmd5UUbarK7rHeJAMr",
  "key7": "67ZA5FK9Nfguy15UoRnVYYfukLBPieAmZFjRvy6oM9vSenPsWFd6CAcHbr6AibdVC5NTqfm5mvJoyvRA95fejR1k",
  "key8": "4WmverYtWmm3eQ71jxChPv7nnYmFckT2eBmKUc2SeKrPADtvGNmvTebwsjEKxizdfvhKddAq7DaSCBaR1Kiwm5pt",
  "key9": "KvLm4DrjW8ZbzbcUBwUmdaFoWFxA2hmMPdZwrs4jBoT73EbpDzSSkhtmQZue3zhApjVwtLhWJzvWsukLy3Vqosv",
  "key10": "3tq8dprKXthwicMDKJZoH3A9Y1zNUfP4odtTnFM1PSWLSbBe5t77yDMrAW5VPmaok5RfHwQsYPcKXGHHU1mjyY5R",
  "key11": "2APryANMtMZQVSWM59Ztz1HWJanEV3rYStLCCQZJvLhW5gFQKvjRTHdUDZZc2vjWW4qskfHMiEqGtdgF5e4UPtYR",
  "key12": "4i2XevPJwi343PLKWTEsbVvRwJuqDxi1wHbkjDZVcUSUsuw7iSDYScP63UBS7Rwj9Sqh8uX3P8XMGgMV2S2ervMt",
  "key13": "4XySSMSinGF1YL5Wd895vXGxMQG4tfe1tr7caaaMmYU8sz3aERmKgnZKtj64fCKnYQLTRvvAARajuPFBcnW4RuFb",
  "key14": "4GxtB9bChf2H9wXmmfeMKAnJhEvRCBPJtBzmzG4SjfC6G6pL1mkJsW1ePQ7tyR681LAB77d5ZhMCSrGsL2uRz4Nc",
  "key15": "3VZ26oAncDCMdqGaVAJNGbPbNFCCWAv9U8GxThTPD2sMCSrh9B8zvxH1hWMgKUS3uqHbj2SzbwMD8fgZZrp8odJk",
  "key16": "4Mwjos96pv3PTZjAP76MVsQdXyuotoHUu8njVuDTNKoMU3jNLjJwCkVr7chTLXbEH8Qid8uUkWBXHDNSpooZShVV",
  "key17": "xKnvyDprj9Vub79SDhAoujBQYfgheYH1vG6dAuYzjwNSdZme6zkR5hV51MqiwvuhrWBSUEWn1wLvQx8HcTujVNd",
  "key18": "3Bn7avfadWfVPA89yS8tCD6zjKyJ2xAW5erbc4WFzvrnq35jEfUkPHdXsrwqsMiwQBdLqTVd1NpdmVTjLWgcMXY4",
  "key19": "2w54GBbxvRiUUfXkySqrxhnWYNRXo8kD2ncxZPTEsmycKbAXGGsY5bGXFtjVv5Ait8f4UTjwUX2Vtg44DPvj9miU",
  "key20": "26MWzvj52uNfNncxFpJ3xy1dx9oLmGYpZVdG8DmV2y47ATzXn3Q9HyUbQu94fqrbZ2hpkTT7v8MonZdEtA8YVTzd",
  "key21": "5FUFNahbKuY5Fs3zU3sP7KrEUy91LHZd983Hqk7RRNEp5UD69y3TNuxwhnm8ocqcu45MLN4eL1yd62QsjonuofTd",
  "key22": "2AzFsNzYtMuKbkxj8JLEr3P9boJiiscTxDzgXAReacGbNYQcEjDqjUrRioFLKHU7uHiVoTA6quvSpR19xCEiXmWU",
  "key23": "3hAnRGgduVedQSx1wQrk7xqUE6fQT8xFk5XRvZbA18Q5yWFwevE1yGS826rRHqa5uAW67mdbNoP2MnudEPa1W9kD",
  "key24": "3439rixKQ3apFGYHtP1w6GtVyh2uqYUYsj3it8JJQoT5JHYVQzHdTC6tqTTjpptoQ5qayGHJoBD9EUC3cEYCa7J1",
  "key25": "56nHLZVjicJaPrPko7AZ5jDGEmG4q8h6Q1F3qGEiLwVWVaS6x6C7rz353xDxs2xZtWyXqqbBZkBmz7n6k8EZCPWL",
  "key26": "XcKXMV2QHjJstrjW1CZKFRvc3ZjkHbeAe6JHxvhd7VkDozQkwrr8cWtESeG7U5kjhQcXvzQvCf4cbpjVtKwiDCj",
  "key27": "4yCdgiGGNfvDZedE2CJFhmnmRB1FUsnyK3kkCBdhhRpv135ZMTE5svTADXHYU9pVeGisSPGTtxXe4mSmH6a7ghjy",
  "key28": "3JPY8WDkKYoy6AKDnS7MREee6MYX34WZatXusj8zUSqEUHaEG7fMZDwy1Cbw6ZREmCyWJ8sGAyqRVj8oRcy19uBX",
  "key29": "4tcbtyTxSawiF42cnVS4V1WwRZLTFR998uQfsirAB9guvEMW5YEo9Lqx2t3DiEZvTCSeK5aYp6NUhdiryHCLGosw",
  "key30": "47u9ACmqFqfo2dd7DQHHNgR9JboDJBfXFEhSmuGMn3mq3ka8TYAaWEyDY1zcyvUx6sw5YpGzDgUedZtukEgZFD6c",
  "key31": "5DhxRyFAWPf6oU6XYJqxkHMZ4JHDLCfkuNnPPMecvuAVVVAb7mjzKQQuKrK2jj2FCx9THNWiQg2GuwiUk1zEuxyZ",
  "key32": "4xtwTR7wSvz1KVbJL3VveqahP3uKpqhnyvqqfvH4iZKe6ce4wSvYrhgWhnbcc9zbBxAtXNG5SCy5stRErxP6DVf9",
  "key33": "zsCtin3hHyok9YkGpbTnbZWp8TgKYbEqp3Q6o6fXBT392tA7Csm55WmfdkgCgo7gQVn3wgfkT1SQUX9L7MKosXw",
  "key34": "2jNEDjm6NXM3khFRw3LAFT3WRNbrSKMvM2pAvcdh2855bhgCgaMcW4SybXvhGNzuWjTkx7Y3usCHCpdqB2K2t16c",
  "key35": "4irMgA2CKxvDqs3oUzu1svSA2n1BBBALZoFmQxD9vQagyBhJy3Fuw8228TE16vKnwaq1uAMnS7EhJv3Z1Z764oTn",
  "key36": "3VFJEmzrj1ZSXvfYEneaJK1aEN8RG74KkZtvL2b7anEA2iavhzKRhNEYbVjxNmHnXAjykTo4bJFhp2sD1xUHCSKy",
  "key37": "2bLrNoYnuYRGcxvW4WAKL8oVTwyydcAK4WDug48nkiwPHPjqF42BHtNCnjieDH9Guf8jZcnqnPfEyVsLb9uGpFiy",
  "key38": "5fXskjAAXjiXYfHkKJUKjnzdd5F6UUf5UNnfrRyXX87Jhkb7VgEtySW168vv4p6UZbVUP9uTR32PhQqBbSJaZaWF",
  "key39": "287Ut9MMcLbTSycNcsf7ZhEefUGsgteRw8zvv8oYzTgUmeuq27pDkGDqvS8EdNHaZo5S4vV5BCVaUhwtY4DcAJYN"
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
