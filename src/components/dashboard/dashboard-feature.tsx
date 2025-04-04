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
    "39PCwMr3HNxcRu5aUumdG7y1QaobN8iawTP4NrPwdGWHzBkC39uGw2TA5k6praAxLgGhERDbBMQt1LVqex8pazrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WAPZVCWcifyrzH1aCLeqZUxtfDqMnfBvwDHs3BskaxYRZqtn3scEiNczWQmSvZhL8jqvAe6d7cfnqx2Pa5G59vu",
  "key1": "4CLJWwZZ4p7oiM18eoKbmyoMsTaHeiFzLJ9zkCS4wjzjRzApZcKhiZhZ8SJVQ47RY3zABgYXVHGaAxKKKC81osij",
  "key2": "u3Q2dUE1vhaSqS9pSf4shbX5YZzgTpriH1rUuv7ezgDT834Z5dEQLnKGqfWieWVJcADjWZoB8ymxtGJNNEKpphK",
  "key3": "4Ha24tt7ivqieUaKz1xMt1dHZFUKdBpLUUnw6gh9YQZdazwhZxvdB4PBrr6oVF5VU6k9o884af1BKvcUQH9Lse1w",
  "key4": "4QSU7yj3vNuGmzo3nGH6nuxKB6utqTVG61X6RQqyZQe9pzAGe9Fv2AoZMFyYwYgeqjppz1osJfqkqB2eknmun3yb",
  "key5": "naiB12c5Cirk49jhzNmatQanX99uHN4wGyXFfWnvqgMhaqpiG7YQT6eTDPGpucaGAPoE4U8QkDr1uTziTy9Cp4U",
  "key6": "2tPbhQz9DVDDsa3pXXU9W5kV3M34ntWkMhZgTqJ3jDFwk9MYEFLmWMKspyg5yr7jJ8oArbsGyaoPWtzZuJH5kXmZ",
  "key7": "2huC8gGqdQQ3McC2ogPJE29Ht4JSgeWUpPZZPtW2iwMR4VwDJz4JaGNPjqS2CvT8fwDgMvPsHn6A2RCHpDvU4wyb",
  "key8": "4k6uSoQrL3DN6mPtD5DBssAtmCxTWJEvAUYXwEgGrWrjdK8P7yhZgo5mt9ckAZQqnGSKszwpXCYRzGN8NHfJfDK4",
  "key9": "2ruB95mwiD9xuihfHJAntPMpvFJXKFPkAgWySPcD6XG6L5ciNhRrRLJkLMaq3wwoF1qJqS1xJKoX4d9YNsEMmDxf",
  "key10": "WvynHrKnE5p1E74R4rKLnRaGnRuAPfoZ5VJNr99JB7pAhWWpMETukPbLeVYeVS6bNAdRUvoar2pyjn8BUUU7yBr",
  "key11": "3syL12nZz96uhvE4sHkrdMLBVRwzU47iGba2aY5ZVDSvQD664ZroNHXKF8VvEQ8h6qtpsJrs6ghasoMF11LqaiCv",
  "key12": "65CkyZv5GkN5DFwkTG6tdMXQXMviYsrbjLbiV6SMFkTPAzv4KLuSp1Kpz4p2YmPzpstQnmJpdhWEgwzynBGYbGMP",
  "key13": "4hpZYUd1EDx7NgQM8NSvsaZ74xskKAwSop8eXTtbDqV9ibNMqZ2A1wyP18X3mNBPc2Rv1gBAdiPkzZv6bmroYjbh",
  "key14": "4m7rVmvDC2KZnHngLHL3TYMCKuDnhAdD9zfAKSwDZtW8EkYNmEZHDtTEy21PNYML6jnkB2RYqN1ag4dJE1pukfJA",
  "key15": "2censau1crPbAeR2fQ3pC4mvEV5seov7tecXaNTL5TYyQ9zWhtmXspCstYaEdU48AjYPkptirGxbzifNo9KU2ReE",
  "key16": "2Zv8SNFotswfwtUQq8YNuhKR1F84VognRxAnZKuZVu9P8KyjXHuUWz7Vtc8fUScQimBSG8Hvt18298Uz1PEMVGr6",
  "key17": "52PDjCpDiYjCmBUYVc76xiwKfkEFb9STpA1NjHKZGLYXz3hXB7SJV2CkaeQn4TtnvCAJT96kyj9sKUpUEBcpTnDn",
  "key18": "3ZuhcXSiARdgHU1uVTDv825BZFqAgP43NSr6sPeNgB8WdncKMDMEa8rLNodrdtcWDQjJzcHNaYQP2YTgmjNYjhxx",
  "key19": "3K3UPwEpUJVaqpTdb5qdVahKkos9yTu4CvVQhZJX1zofW1yhWTZ7t7Ek553R4BSpmYAZwdW6bWitMazhpad4mVhs",
  "key20": "2td9nLbFyHz7bkmkCDupGJb1uzZQ6ubfCBqirgejC68jpb8Wvouf9rFbKNGNKkUBsJguqQJq43DhMExm21YURuit",
  "key21": "2sWuXjSvFQi2MmjGUBkGg78DcpjAdLVsM3FzVUkK2H4zftC2ME3ZJRoTcYp32qczvZjASaTQjkYqghqq4EAfzi2z",
  "key22": "2d9oHWb2ujexFEjuGQqJgEJ5x7NX31EYc9iP6y9DQSG5LhrqGuMvT6FPsQwMxDQkFwUd48B78N2h1iBAqgujrrcZ",
  "key23": "4UkSPXD8XHtEamr1bBhWd9LZurT4w6WCeg61RdYCRpXgAAVYa1XGw6fU2KVHpNEJd7htcVum4h5v6kcHUN4dHRB",
  "key24": "5DYomJFyf7SvBxn47uKY5SVcLtKr63zWFRgbHh6szSjM8E2vY272JNuEVSxugaELiJenQe8FAZK937yEk3HozLce",
  "key25": "4RcqLVyjxmTtcTSCFt2YDaMAcvj9CDwDFXjFHoRoZ7ztaxHuJLDjcQPf5PfhmmtuWJdJHY7qiLWbt9TcXJNuYHqL",
  "key26": "45p4oNpYFdrDrVoRx1BVmKgLCihY72a868Ni8kbCpQ6JvrHQSvCmnFZJfQqJg23DHBAT6ep9Cm3im9Kjt86AMc3i",
  "key27": "F5JD1q869bE8uHUCW3bNedJ2VDB5jn4sh5dca4rrEX7YfwGtn3nyesE4CV5afhygVe9enrmyqfusNJgu1baHTrh",
  "key28": "4T3U1h2zNuxmNb2JpYa8MXow26wpj8NAFWYUaZC2LqvCYZVTWky3mubXKPcfvbxUYhyfuay7MKaHWVnqzWxDCkE9",
  "key29": "AQVtWQ3mpRYfKzxNLjioHK4LwoQVXBYrMdCycL1n4VmACTBp5hU9dcHMgFGT5vxiGRT6piSn9G3n25YD7LeyKnt",
  "key30": "2XbgE1HXe69VNdKUmShymysgb9NqaUB3DE2EU3gypp9uQug2GUmi2enGJ2akFTDUxCvyGv4NseRqRjt3LMrdEPDd",
  "key31": "63it2LCiKGQkgYutoSTqbw9j5AFEhMxzdiekFt9jCTSzpDaAtpvkU3vvy1cwb89bH16J6wDj7CL756vfdYEeNHYo",
  "key32": "2vVRo4QYWu9ijbxn6K8tXuLhkB4cCQG3Ga29Yv3obCLo1FKcobb2oaiKn15Hm1xazqhKi7ZeCDYrBo1rDAsY9iVH",
  "key33": "5NnWxDCqJex7RZQYf4hzSwReytQg829vWAjAiJopC5h86WoR6meL6xtbkSfHAA8AbZ8SMXHwGz9whkSK29W4m3eg",
  "key34": "5FnyGVYU8ysunrHo5Lx8K22NFMt29v8jWRWfQ3YDSe2VF7hVm7rGUUNcf8ocjFit5ZQVv8BDGDh3zKnoeNvseq7Y",
  "key35": "3f4wNv3RHi7gZqFLBFHVpqce4Mbvpicex56D99mLDNcXSo6xHFpKkoG2uuMN6kUjWPriezFVacwYa4K3Pm6Xaw35",
  "key36": "8Cf9sosVeSepNRLazWHCTWJDHbxRnyyZ4PUiakm2dxxHFYNghZFbyRSySFitsfLZcnUEEErPVMQPLkvK7EhhSe5",
  "key37": "42UaKw3AccVKxVLwmG4Une137JZ4srGCz6nVGfAcDXfvzaigGzPecWYTVdzBaAtr5ELRBjam59Rfkq4zm7VHwdse",
  "key38": "5Yuk9f6sDXUFQVMtjLQWYqhZi6PaZsa53fiwAt3PcNhpbNnytq33oJ51vN1RBtZTJUExSyvSHGuB6ST6RsrmPNfF",
  "key39": "65K2Tw5vUAiyh3ULvksKkTTtbPTBbx59rbGEjJfEGw7kUwM39Jphq8uQppwfDUkutDR83Hsq8LmRVKm2dtaprk7p",
  "key40": "3fC9YmTtYfx8hQ4WHbBac8vRBG9o7xWy11ZAbhqB2sfTtspddwrdmKXp1jvZgkzKodKZJNTDMU6QoX2NSnXYzjh7"
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
