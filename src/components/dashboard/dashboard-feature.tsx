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
    "5F9ac9L66kdfx9eJXpGwttjTmp9qxVmmK5sMxy6borzjiUtN12HCdDk5cq4zMWR4hu9C6cHAi7mgAuUPTxJb7Cd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yKLvFdHidVmA2NyHXajhgaRuH4yD2Mg6iDbLtJA7frR7y2uHuDpBEYU6UiSXhHvLcy64tFzNKmrFSrCygzDMibm",
  "key1": "25saCdFdPPSQ2vrz34Y9Hi7r62vdoZU9ooGyJop6hZKWrspTajL2vqhR1ZmrwqjSgVbiyxZBe9W6iYsKTptEg6Nd",
  "key2": "3SzPjF4mXcboi7GjNoJhfxZV84UtedifBtooeztbJEmszoTjFRXK6N9eqnV6aH8kpM3dQV3enXuNo7QtAd11uf5u",
  "key3": "5LPd7GqGX2g1YYg4CnD1qTD2ZShevWUXben2NJJwSgCadS5FmH2wokseqhw883dN6DaXFbiiR85Y6zKoqRwe5NMi",
  "key4": "45VtwNUQWewijZym7yjXQrB2JwKUR1pzWz84kKzsjyzmfdRa1ZL7qZqTJmNS1ztXGawNoeBUTTcHJuLsEy8pNDSF",
  "key5": "5TnJ46VXmKhk1S4ZFc2pWntypcZzRo3PyqjHZLoy6vAKi1DUYXqBJjBzVHKefu91LwyESpW1spApmjii1rPcp1cF",
  "key6": "2giT7ZbXDL5Y2aJkXHYkcsp5Be8RpJNuibAg4NR1xFabBa8wgbrddcqna3RvwzT2p3djnw3p5S6bqJr81TFLh4Wt",
  "key7": "3KuGpZ4gcsiXxTrWdLEeEzWrrTZ2S5YVFMkyhpyZqnqaT2BaYAFnLhCwrmKspUbdN14WU1rRquGLjL8S9RSecHjX",
  "key8": "5UEkwn6EhUzd8gWD9QyCwzR3yBNKvsGJw8NYVNyi7YpjX2Ha2DQhTFWUaJ2iP8poxRmgfKHFJT55LmmZ2qNTQKKs",
  "key9": "yKSe7foueUCxzBSSDcddASgjAXose9aTeuiLfLMF9cbrCtqwvfEvBH5P5GCk1Au63xEhhSBzDfw5KfR3pmBQ8EH",
  "key10": "4Kt3WGVWsxJVHMiBRruXq75YiFt88TNbRUPpupjhgSwhhZZPHp28HTxkkLHEtdvcm3MBhZsuMAm9DvWQNhP64TNc",
  "key11": "4upUFejVSLHgoD5womtazt8QD5PQJGyYNPEquPEYPmq2zuCMDhfkkwWUTvMA4VS23TurahgCTZAWnK7uBmPMM5Q6",
  "key12": "L9vqmXDAZMVkH2HZzcCgx6pshu6dCTWCdarrVKU2UUX5EamqDvFxddGwkWqrKVXCjuX6RymA7PUCgVDLdEhJqdN",
  "key13": "PifwesnhkUg4WifMrqJmHVc3BR9GgsHPF4WKFpit7grpzCBxu7bF11gbGT46HFMbab43Xh9vtQkHjiLXb59Sv8T",
  "key14": "8qNFnbWSeeJBYu58qSVFUhwAjCqSoi4kebTAWe9VK1PNScEKLB7wv6tSb4i8DRgANffYB6NiRzvZm7QQaKGKjNz",
  "key15": "58Sb6tyJgZJcMEXFt5jkvx2UXdCeNbfN1rWXy2AVFjoSdZi8ZS5rLzvU6s5g5Qjohb2Z2k1t4gNScMns9PZi5ntH",
  "key16": "28qpsXoJRY5n79NFc2jkEpqHKFQ6A5CWkx51mNoKFYwHGFjqeZgSYJjreBM8pRumw49aBHqFUMJjFV3bdFTXxKLQ",
  "key17": "2Zanz6TQb1TB4njXNvSJ6HaXvii9rn6FdbRz84espKbpGpDgvQSxSFyGhyjAGPKAWEwgXSNEgY3pypkCNGFVtx5r",
  "key18": "3zxqdCiaAgCqKK6CrzKrSShUjeN7c7zN5SQeAE2AKtZH9pKkLHusunxaTbYbdipNjsdCpFgxSHbfhgJs9GcxzHq3",
  "key19": "3ud4CJ9MUvm3FyncmmRWQQfZqUYggvvvJoEzHAvYfaLgDxvhpRS2j69AUd3kiRKNGsHQp1dJUy8H9x2PBsFiMPsh",
  "key20": "4gNbnw2YcXCGhFmF9MNUY19d19B963oqRsoUZjfi6HSbwfX72bSL6Nfj8UP125eqjEgEweX6QQyJS22uusfMmSFw",
  "key21": "2iJYNezjLeDeix2xxsm2h4pbhcLquPg9H4tkKgVxzBLtagx5xhgCN3mTP9ti6qoN7arxbY6csi4vPovus88cFJBg",
  "key22": "4LKtokRE91EKMdyuNhztrFnYnNSsAP7no4BQjaowXP9f2deuq9SVe9fvg51RFWiA1gadTpZ8oqRS23RSrZwzCmpD",
  "key23": "5BGt2m7bFjWKrDHLqN8whyqFLvZJEhMja6RVw5ADN1YnW886PoTPvqX42WNJyZHzLTKjqj6ChiNXsK2MjURkPem4",
  "key24": "2TVJ3qv8jDvzZG4c2stWWtdC6C8sD7Xj5wNohCnNZkBup66z5NBEEJx8W8bZNxVYb5h2oex8Brsk5XVbxUpnJkUh",
  "key25": "569BGfwQ1iHi5rbsP25nLWaWpHsLF5f5DDZi8bRVuuBUCiHWskKmCkdpcW8ynbeKbYwrBM5qj5Cb6wvWN7pmvWac",
  "key26": "5dQVvyo74cruxJviSVyawrHJePUvTEMdDekJsDJmPcv55AeZMD6smrGXHKFbPBuB2jd35cfi4LM91ajGdvCMp7LY",
  "key27": "662p3JRQuS3kVPvwMeVJm3o2UcqvTPHvYmRctYXJ5AFXZqGEy7KQj2A7fYYwa1iGpkr9khppMpsxnNfEKaMLQtFE",
  "key28": "F9stfmUxDiSepXcA6mzxFSKNNgD4Mv1JgC593t5nfm9PvqQhuPTXbznKRjgaZcLEBoJAjfHJSATfRbwoVP32fLf",
  "key29": "3zE2YsxBYGC2nCLTqHEWGgZ8v4gFac7YnCi5Lr3oSbQib8vgo9KKcaz8Rnsje9uajYPyF2GiZtiLLgroZWQmggoA",
  "key30": "2uRT9Qi3j6oiv6uhQVXExrAxx3UY4YqnFJyfzHYoRmMoTMELZyVTejiYbMNgiSxxMwAaNEAZc2Up5dBgQPfC699Z",
  "key31": "2kvsCdtWXiWSrk4Y8VnZ2jMcEWBznCTmTdXER741HWmVZDUPeFJPQdARiJXrcC8a8YJWx98pxR9kcUT1HvcvWLBt",
  "key32": "2opR2VChDcTkRjSqVFTQcgDb4HfPAo1meL7JfDuBtN1YQRcCv1CQ2N31hXgMssUWJ6EvFMz4jjYsES1F83ZzaKXk",
  "key33": "5iRNnHNFMZoERzMtYDTNxXS89JDW6kcwKKSYTyKEBLjevjM2NiQk5ieE8FPmhVFG1YdYbdDkePuN2By9DDLMuh4x",
  "key34": "byJ7wVWx8HQXCcpAFLgZ8ZX1DtMm95FzcZ8LRaZh76yy65EMpv3GTuMvFwP5bsPwNjugVMHkqw7hEhjAvDYxzgw",
  "key35": "4FMykGRzMqJD1SB7jcfrfxCnfn4En8Cin7AXKgTk6G2W3z9suAP58rBYNpdW5RRL2NeoYDoVg9GX8GPnBvew6Ajq",
  "key36": "5fEM3UcKLXTYt5kNGNBfjucFTS7DLR2vC55tumSAgBEzdmQHiYo4csMePVpFDCd7SzmcTUddKmAYp54tVD4hjFTQ",
  "key37": "37ZgvkAyy8oDgcsRe2YHJ88rLyQsVob97ycpHxmywNjeMweEg6pmd4FCyq2oPhTZQCzrfcZd2LbKVeNzJwzzsdPe",
  "key38": "dqvb9XcTRMCNjczUeMiQ8qtPuALf3JxuW4oHNH3K5bE42uznb9K3AacCyJNjPNLkiR7H2BdHdX8gdumPG4R2hME",
  "key39": "2QgrMb7YEiCXyF6vNYXemTvy9FACvJbpm1BYr1ivbnyywQMbt99P6wcoJJaT4qLGzWaANwQWxYzwhbKX6QLe2Qu9",
  "key40": "5RkZRfAKtsjpPofSMGb3kCukZSyWmt7KyonXC1AS5BhcBpL3ouB6FWYdLVp3piBv2cStrgChu7ZGmMk23twGGooz",
  "key41": "4RVstVNNDCFPm1pnEiHEBJ57vdkvr5Czm9xr9GDK8JFTRb8y4EBQm8Z16z1WwSz1HShioPctgDZRiT7TgGcZq9rq",
  "key42": "2B2ff4WesVpm2pN4B2ebWnzoKKgMm7gNLuXxsNKrYYTR4ELWj6ULoPuFdp4Hp3Cmdh8f4XWbNhb3e2VWN5b2ZQ8u"
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
