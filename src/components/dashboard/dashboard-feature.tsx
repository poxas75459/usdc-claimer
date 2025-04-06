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
    "5ZZqZpehagZZ5ppptXCPwrkpKnq9w2kxTUMJWgt7AWjfonNvyz76YosuQ122ZzHnUHaT89xCTM69zYsrsvmqHvUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YgD1b8xnDU3qeRhLigg2USD4v5shCSmdu8Ws4mheYWTSVyfycD41sSwv9zQLhqKPBntC3JScRweqDvfdofGK6sq",
  "key1": "ku1U5T7zoZA8Nj36Vnf7j8HjWYQvg4qY88EsWFKs8yhwu49BBhsqoHumXjPDSY9qqFN8oHGiK2XwhTuYHA3J4Re",
  "key2": "2djUo7KUsjF8tA3a2NHh91tAdjjP4pEPE3YPNnmsvGBKEwKRQLWpVJq7D9dFdrxYQ1Xd1Vni2bSH2mBbPvZoafZs",
  "key3": "4hxiAfDa8vcyA5TFKkcg3kwT8f22gnZkYSBKsdkm7ViKFmJyKKk3q6u1HnZ4fFyHgMTu8m2qXSYFRVTQ8EDHad2A",
  "key4": "YWpgFpRT1khbu6BPLjx9h8cHRx83rZzbMrBUSD4KSLp3W6skFwXjBUwcxALSoEEJ4NbHsCGC7h8PLiCtEtdpNGj",
  "key5": "4UxcKRdJ6BabnRyrP9DbvfmMrrC5d83SGkmJNXZRdK3TTffWzjkaZanXNJYrDAFb79CKkRYmarAzNwR8vkjSEhr9",
  "key6": "2u3Gfo7HHSXvp6nC7ZAFdBqJJNMMX7QHeuno1oJmHwsUfjKpK2mVwVfT9PAY5P3gwsvcayQ6oPy6vPR99P4BRY7h",
  "key7": "3uWWPy91pVHREtALL3vnsHjKzMryT9G6yAUDnWyAHS4XQhfspiwxufu21GAbE9iEwzQVwUsL1HMpaQH7iVSi5op",
  "key8": "RvNKuEEMQdzekBoMPJ9RHkida6UX27rziEH82kTuFcDubMCJkN8gCXy1qjAwGrQywbi5nktoCGUCdZEf5vNCfMG",
  "key9": "5fYPJ4PpvBQhPveVnwVVD38pqsjoWwyx8CzZhoNFKrxL1Lee2x8hdkdNXjXWT6PNF9iCwP2Tqix9VNG1oVMhkNmS",
  "key10": "7RJ9DF2jhVtwFCKQojWur8yLDzYiurebqDXTCTji6TtB8KZrGj52YRqyvnJvBvmfqoU6jRAKVKA7eLi1wdKnaA4",
  "key11": "5QFyXQuac9B9x9yX31tpAvxDyEb9zXxbC1aH9bA1zv85DHKAs1komT1WFwrmAtqKPurxZYinM9RB639QLQxcSYWV",
  "key12": "4aRUADa8hpNq2HhuocLr1qrW7fS5ApaX57BM6VEQuaSr583bGZajijBZRwwtvs65QXAkXseYUvxHHm5yKEHDKfUU",
  "key13": "3CgALKChEh6ZgZiZvWMdQPfre2ita3BkfZWjrm6EPgVpzKoULt1ZV8ctvRxq5GeqiyfjaKh4UUGS4oJqTEe61pPQ",
  "key14": "2fSQALV6xEu5seNaWtAPAe53qBZHknSo4hF8aTpP6eU92BeVfCPAzZ6VtpiuhMWVuGzZ6aHQkEjhSBpkZqy2hQxN",
  "key15": "yvBGQxW3ijn4Mfip7rFn8uLWutaD6diC5skSp8nXEBPwGNmm2c36sZkdjeNGr42AxZKmWtJXuQoir7ZLvogCpuB",
  "key16": "3peeUvToJkyfX7u5FPYDAWuvW4f5mT1mRR8dLXYZshbine9FdFpJmUyz8BGX67WymAWFTtE244MdUYzeo2Z31BdU",
  "key17": "42DRjjjQfij3j1qiF76SXz1qybbpQzfJgAb9JW5koxyx7bf2fv5GKVGPhf1Mtx2Y9G7JiWvDcuJvbS1QuLexRDNT",
  "key18": "4t7T2XxN6FtqSQ8V2JL71aqJPfrn7CkcAWJEJE1DdBkcTWDTQp6Uqcayry73qmmGhxLvxk5bT8EVKCWrY6MaGrMQ",
  "key19": "5u2hQL95tPvtgiLZStxt15cEcScyKEWqXbUtTvGdvCJYxw4mLN56NbUVgVtJkS9xjHbZ9FE4gDWgf4y7A9Yaa3A",
  "key20": "4dARDyoHzGU7SL3YS5tWkdjNnte4Mr986dLYgB1C3NXmPwgeSiSEcfEhoSqhpsosnUvPJ7KBV3h1LqfBYJUcRbt",
  "key21": "qNT8xdvaERciTMjdgpj6yBKVLYeXAxFV9gPrrJCJ7TMW2dJoDTULc5umBxq7Pz7SUjJjJ9i25cD6vKarvF6gekc",
  "key22": "2StkAgZp3ndZ2YgXCcUz8tUrpZ5dguNAnmp8SChXH99QeA7JotozK8JeosmyC3Ac1KMaiMT9Edto9btwvsrBhL8q",
  "key23": "pnFbXHcWFeaRb5DpRkho56yVe8qjNWRvgrridNSxakHtffwhcnY1zVbJypfjVvds4JTn6owuwfKioCJZrP3Y8NK",
  "key24": "2Lxp2iXvcC7UeD5c1QbAQGjFnmcnrFEbQ2iQEPcsPwpDKvUbUc6dM18njBA8GMSNkrSrBxtSAwmiw8yf3Anvk77H",
  "key25": "4YXErEnE56AesHbau77AFGE5Y2Z6UkEm99xLbDN5hsjuaBoJdLtg1zuakoENgnGv7Lip35yezxxR3oYMzKW87oyB",
  "key26": "SQkoCNBDRenZKLvQkTKJqpCTA9XRxfWeWG5nBBe9wZUMB1jAGP2BZVeayim8neACRdgjDDuLr3BwwUdo58Zi9Xw",
  "key27": "2K3eyusWeY2Ep2dmwgRfvtaKHSNVaKJAmYVS42KquDQM4eRpUAvyVdDKs2Wau7pNAUFuTxyyymiyzJ7voBi4PyUz",
  "key28": "2CCqrRjc28xCUMtWumK7bqnRw29oT4RC7UieaNrEYMZn8odjoPSjbnFWXAMt5fjY9wxCid6TtsQdWRgNSfGzUEez",
  "key29": "2RkbtDEQoTCDn5r8aS4GK72BVUkuToYtaUqNrYyumyz8nbYvRZ9xA6oiKXgVfHfkKuHGjW8wcyVQ9vgSPWxYpMix",
  "key30": "3FLkFy66izDrfQ5r5XKfFoQjdiiVTYUMCYeJps6kZyofwkJRh8L7Fi4gfQAsWEX9mgHcCFDtj4FCnHCQvDNTepox",
  "key31": "4pXshda8wHDsaVuYk4dpiB7eMA7iqMGBxhCaWgEJrSyaGshnBViKoQTuSKJiN4QoKKDCgrnuoSo3tQk7BFRmiYPb",
  "key32": "4mKtijvCSGQqBFHphkG7EE4HzgQip5wHf96kGB7utrJCUE2TooRmg27cJe3tCntxY4qBFvWHKhk6KDsunfHFAuzr",
  "key33": "2ZDbkZaAY43ffsxxXrBh7xJ5bUo8axafobsfKABCmzj8VU74WYPhtfH5HLrDYJNis7EXWNDXqdMPCFxxrsLg2SJv",
  "key34": "eKDF82nGnh9HgxDKjEyiseFm2atkrRjXQbHRpjcpgdRpN9KwKhmNcngREqRtcR1DYQgm2zcQiBSjwcYfBrCFesB",
  "key35": "fBSH4vtP4bSaafZCkpLnQmSPwDVsn2u6UPSb4kNLgUpdnBEy6ExyADepK7GrWHAtoPfVFqDyh7y3G8sXqEwrbCe",
  "key36": "Mdq6kYu93a9DGaVeDeYG9ZVuvnn5imxDvXowQt81NdCHeixLv8MCJcPfd3G7RGs2Yr5mV6y7RfnwVzgvby8wSGZ"
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
