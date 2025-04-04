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
    "58y57CZY13QpTX34B4jgFqtQjBMohPWxozxh1zU7RtNMwcLGjAnFZxMQXHAKMip9dXYbjyVJNoEXHBKtr3vZNzYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X9tydo8g1vzPLg2QTW1vuo4tx3pPwLZujjV9qmSUZ5qz3b4PrPyWPrv9oGtQ96fBVdBfxwsf86i1h7CQvT3tyL3",
  "key1": "4WgDp2afDMCvEA2jNpEPAfXySGUsZ5RmXiykHsZ8wkDxVKgXnXxrtaeAxYpfTu2qmTxP7v8sey1TjHrCxdYSePzp",
  "key2": "5wosgNjAZizBJD3E2oTBm4AnAK41hs1Akcb1jN4t34iav2hxZxeQURZ2DrahXTT5iNr5uLREZoLuaSgysPa3jTZW",
  "key3": "4ggeNRXqXvvYyKxGwq8Db2ys8JNzjPXqUgAS2r3apDGfq2Ft6WFLkhK8DQdEhfMuFbWwjpbnUXcVGdwJsbujMEdJ",
  "key4": "3xvdkLxxePRWFzNhENsC73UWwgLEPe1mMhfQBrU3u2SNaGupwh2wPgQaFQfdnq3yuUBAmXjC97i39JTxAcHSD57r",
  "key5": "5jqmWrJ4tf8busyi3joimRZmf2qvM1XTH5HL65wn3uCjXh8gaQ1iKrhxZu8DB8JKU6Jd4uibhJgK3ohdDtD5Qoew",
  "key6": "3aAZb4Pc8DsJwGZodFdpxRrM1j6qDY6qymzMzzwBXBvP2Qnf7NvsypwqhEny8tU1jMdXwAZinp4F37dosAeg8u71",
  "key7": "3MwznahRw3vfbRu7qPxuBGHrZ1J7yGHDayemFUHveCJSt8teAsCd8nSnZfQLW52zjbdWNDmVELYGF5bPWdCPGTTE",
  "key8": "4c3V2jVLgwC3LPzg19NXtW6whwLDfevayks6iAeSGtwBCyFMYZLpYjrt3bhBzXxq49K8u2pcChkWhXmVVR8XN787",
  "key9": "5ujVwmJVABr6nJZmMuxPdmFkgBNDJLCwcqzaXfHj4ZeWBDhGsEi9vxEDFKTSGhCEB6NQPXB7TAbkVTUMPuzFtK77",
  "key10": "5fcnY9kGBvWtFyBrTVHcpFjKnmFphHAYN4RhQ8ZHvwiECY7wnUHpwTNCzCrasjD3EyvfC3fJ6DJQ2swWdP4gJVoE",
  "key11": "Rh29t6yZvDqAoS7WCFEYPGhK8B3TUnJdPXkUqPS8NHmD2L2zBcKGKWi2y9T5hWj8y19ftWRCUn3fAwziCJnEqpV",
  "key12": "3osZk4TFjoqzcXHj9ZQ8mUpXjbA8xKXLHGU2oDJKLwhoAW5V421Ur7NnmCaYtYotzQUG2X8Et3uUuGaFzwRgPJjN",
  "key13": "4pnX166ahUMbG7DBCzZfMroiXgAVJzpPozy73RqQLsSUH2sfVeYrxcm7W6KcKdqHNJQj48RzpYzz83SjRjiqXkTk",
  "key14": "23dyFeeQ31jtUabRjiAoGvD71gjJsf86gU6ZHdczX7LJnXcLLyBQM2eLZwuipjqV88RStJmnSScRYeFch3aYSerB",
  "key15": "67ENNmmDLovFgXAKZMVWtnZenjU8rj4HmeRKsNcqXBb1eAsYaFYAHdgEFiyRfgjyzTRmt1McDncHpQu8oL7ixAd8",
  "key16": "hibBpHRodgp6jWBxHJQs7zdr9Jcewocni14ktZ99dqgewhC3dF4RiFCBAaas6pkaMhEKdLczW4GBEAkZAfPkGsg",
  "key17": "2dbTKhmy1VGaRoDiqH67nJSyeL6Ef6yDsL4GGASnWp7U2HQvcdLkD2fgSJPx5JMYuvSP15LeR1yw7ufhpVLp2g3Q",
  "key18": "5gAXLbvTKRVrsgkFhHpi25m5Rv9QfBpP6SZx6Nsf62127LoCrKNVzTY1JAqcZdhUJzVDyH7qPS7Na81aVnjVLMGa",
  "key19": "62XzWN2yF77RmB1fxbQM1asDsiNgmSAnWG5jSdsLWg71XgdnrYaqow8ApGaVC1AJXDdAqPKXFvmjXiehVsEm7Vq1",
  "key20": "5MWQHBAR194wiAdcjtd8W4YeFx7rnNBLseGjdb89D9G4D6C8zYSoTHG2xBpguzgGjDr7q8cXGA5VbiBvrYuja9pu",
  "key21": "3xBGyYSnxWXoXNtVjJ67dC3b6EEscR75HGL4KaGnXCtm8w14Hs4tjaZsSUzjyywYt46eSK8gfpD7CRh3ECnZ4YoY",
  "key22": "EYwHQ5c58x3Ph4XZtDASE3puHgdafY3dr8PtToLLXeAmqVvzfAniVNJB5FszexWnYyP7X5UDm2NGNAM7Mk6qCm3",
  "key23": "wZyrBGZuVEgAxk2TieJPCx2c3mjAHES4tSaibnCcDPQxudknv1ZadsjBkV5xnaDgJbfbTARUTyNtGEinxXwCrLL",
  "key24": "QdYXp5v8r5nu62tM7ZpLNyqP9dwgdGpGcaUC1N6EMttbZE1T2B3WMTmZGdHUoZLkbZ5ZgsQCZGAx7UqDTwifhhp",
  "key25": "5A4zqPWVZt63ydSAWpncTmtwDb4nAs6PVohgLSM8S92VgYYnN2F88HZ3zy6NF6V8v9L7VJ7we62ioetBtEzvpuPf",
  "key26": "82jWFtSxNScwib7Ei5i1EJWeXrY5yzTDkUjuTUGkTBdpwxVo4TkEkPcvwLKkDjLRFJNgq7zaRHdmrgGrAvjU3VM",
  "key27": "4unHExnQ2uo8mN6UP2ngemWEsg68tGGMCnDE6vais1N8PJUGZnVJFgbM2rebLLYXgAkwnVtapUaAZ5MTmU2arHrv",
  "key28": "5Ao43XyGsfJzwHSVQGGbf6gEEfXNkxZk9CEvU6LTXJ8yYNGyZsCJC6Mr7s7nCzhTZ4PKezJPf2RbmJo5sjHXufAA",
  "key29": "2wHX86CoTm3Q1i47akZUzxjTYaLa9VTetHKwH61DxwYHqLfFe476QVzu5XePHkN6iW4jZe15ZGkTQVHg6zsc6X9m",
  "key30": "LVFkjowMgc5Af5vxpEQUwA67zDGkSFQgpH3YFimH7cLeNJWhwCucJVp9JoekScLC39baH2fPRW5rQJaU7k2t5h2",
  "key31": "2fSAtApr1cEJpSebFbXdFvvdDaPZMJ7Gxm4baf2bzP1zViiHXDuEbtpLhrKhCzxh11zd2YBSgcGNcXghYXeNUsxS",
  "key32": "5j2nyuzCz46cx3iszwrSeBsTXJ1ASrRLiDRqtL4PGQ4pZrCYcjA2Ka97JB5X5c1UESzsawi9mHMP84LFsZyAyS7F",
  "key33": "5n3NGYS8YkSbgocYSS7nyPcEdix4CvQNVZ2S16V8pcKVhcScfrEncZ8JYn8Safsm7hVwFegy4Avt625JLTmbR2ui",
  "key34": "3jehXE8koqiZT8BDzuCpiX1EDNPBKjtNjEmHEsS5iFCBDKNnheqCtmyQmMZezn2QKjuqJg5LxEfTwsm4jZrWNJ6H",
  "key35": "5Pr5C4oUBcMVEAKTfK1YbRwTqcc4PN9vKoxkGbw7YNC186a7HmPnw89M9nY2sNvvwPw1kqA4BYnTRa4r5MmmLSke",
  "key36": "2kYCNED9k6eNXGrmKS54nu2AVqtx7TLvk4946utPx85rfEdGwYBVHdPBtRLYps6iFrVBGkYXYktAFL2zSSVah2pq",
  "key37": "3torkGQDKiznN8sW7YHSfZnJrvHt5F8LCoSQvMQypqmTm8q1khGYYB2jy8UrNmwktaG6reKdttLsHdtK2MLeMRFV",
  "key38": "4Rs1HkP2ynx5x1zQrWa1QVFBw9evGywtUpm7LR69gDsrz6QAqiJt4bdFvq8rWuUwbC4uxt3VsKFMWiZr3RWXi42D",
  "key39": "4xaVpeW23E6BPYq9nGqzo7ta5ak3KUPpcUmF54G1UvkHvMp9AFZvttYrM94yZJH3UpuHtvbn8rCL9tjwNmpUs18A",
  "key40": "3upyqmNtzugGePHUykJLCrcKjFTurcb9u2k7fELLMMCLMyiXx5CjbYWj2iPFbeE97cmbE4cPHmKdpnnkoXvEo3XJ",
  "key41": "3q8mBXYLGq6iTmjTorPgTyTbvz1n8vkTPGF9Qvu7GJntrPqg752XFB8PSrTguFmC4ggZbeWrPYck1xqoD8MSYcLj"
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
