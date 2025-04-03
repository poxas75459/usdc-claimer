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
    "2MvvvRVGLd4nqE1Wg8UBLZiQis3Y7LHZ4cMp5T2qmpf622mvvNhATmRLr5hKeKcSzuK73Zp7bAotn1Sd4V96T43b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xZwE4p47KmT3MrbBquVTKnvWDeXxXDzj7qYt2ecxKA12ry6yJY8QSuTapPuv2zqJtXS6kWjtPGBGiH5euLy6Bz9",
  "key1": "5uFzDv6soTAG2EopxxLTwYASk2ndVibTBXbiAcPhH5f6cXkztu7iQVM4DLbzdbV6S5XpMBxU98dfdKwEDVSWtyvE",
  "key2": "2EfHo2EECbyThCrHrx6Zd69tm1goRGMHVzU8fD1h4ZgzGigwrPup3JQuH3jcaiYpUnKdeamNnJ7SJ34DL2s9e33n",
  "key3": "jnCpGkgan8YrgALvym83rHQ8kExcLuWCtJ7Yj8P4j1zLZMzFmR7vU2vsn79m8ZYQzttYLfbGRuazwSBqk6fFASK",
  "key4": "PiwMDgAEbMujB9PEcGV41S7CCF5yHtXkwQKSSSGjEeJSvbkMeDcbXjMADajfNm8sCQ6GRDdhrpQEEQbci3NTe38",
  "key5": "2mBHMN7gE4d3cXzK21RtwG53yscLHUV7heQ3d9ZssxtsGK3ABCYfLT4mNrEfPzjQk3d1mQKHtMicaCFm1vuPqFUq",
  "key6": "GzDQxe3uxiwjQpfZKJ5Ny5uFGaW5LZK9YQM7CUXQcUrAw7cVTibEM24H3y2M58uBxsoJKP5XoGprvL9JJC54Np7",
  "key7": "4vXgF5cNVsAViHxCHMuqd14pPBVyVWPkr84DZPFEB86SyDCs7AbVHH1rVjahSTKba3JQsFLRvFVJkeN9rDbo3Qx4",
  "key8": "28wbGnMBk1n81Lfq8aRcJeJFP7k5ENZbw7Le7LonovyyjofBQ5Pweh9ofM48dz9xgAwLBJafbtqik1cCiniQo4hk",
  "key9": "2MRw6EVA9D7ym3Tb6H8WssnCrXnyA5gWu7YUF4zHt7pTFHg7aZeQggUnuj3pjmCMbJ8YiJbMkryADrkiQ5b5obUd",
  "key10": "62o33xYGprpvC5YnpWEjvRU8uSAxZ22fpjHQ6nDpUnWCDUc5LL8ScAAkiB1p5jqgxmEsRwqU4vorr7VspwgMZBYn",
  "key11": "4wtTawkVvWMAHmGsM5TuM2qH8adeQsnVcyoKZvzQRKP22Eig3MeCuZyxpu1dpafw6fyZgPcGbxGtoMwXu8gSBW79",
  "key12": "43mH9kx87G648LFsyEe8T488U2D8wrY5SZ76ui6YucEnYpVJiHDQxThnHJdG6YToVaAgFyJJifiX4QPuF5u4MuXF",
  "key13": "zCdKNNshKcjKU7BFWpUNrvPzcMPMu9NeNbamc176C9QLrgCKX8ne5QjNt9cr64ANABLdnJnVNndFGntMHxbwHkX",
  "key14": "ZhaihCpgAgLoNFiVwaJWMg4KrGN1sQG13JkpZgMmQRQKcWdiHqQYRuQEctKxTCad3RgZMxaGDfndQfFE3jgPjBz",
  "key15": "33j3AH4HpuK1LJ9DDa1HVkoG3U1piohZKzsHKXPMEcJtS95gfn2ptJHSE6BrU9ejkmLq62Mog7uo4sWdNoTqWbmn",
  "key16": "gDLCR8SyYs6PFq7kcDSGzzoNU66B7hRbJwwbsEVMaqLcsUYJyZfdVymJRtNNSaXAjmAMGh4y8bEN6EUE2aYS8Kp",
  "key17": "LqZF5dc1NwtsSmYFc7o9BahaqusZSsW742Dyh7VqWiCLZZKmvoWg2LbWWNWVoA6wNGo7ta8kjT9KHBC6Re88rPo",
  "key18": "UdUmxgUZxxiXLdFAQJCCdKKXis8NCA55Y8AVhGsPuqHqrVuWRhksntgURxfSwiNdkkMXtQiPs438tBpHxGWrhN6",
  "key19": "26JKoswy13dmTWShjkxqKHdA8DNHBVwgtQwjr7nggMzRTrSpujph8iznaiBpGDAe2ZPZeMhwtT3B5sbYb53a8Kg3",
  "key20": "4VbtqccT7pDi4H6u15uKLtNNgCZxJeQBve3qj1L7ps2yhJrB95uc159WhD28kB9BMhLgdHc1x3yG9nqoprFqh7SQ",
  "key21": "2hcUoNLWZny7Hv4yFwneqTN1nGszKNQ6ybYd4E8bUQoS5EsarzhJk7aEmVoPmChufZtoGytGSucaRn1CGS2ekZJv",
  "key22": "9VGSjFXPGuNN1zReohYXosKebp3ZFRYDogzL7x9SifVMk629yoGMf61w9WNUsGjkf91xsxV7NC8Tiu5RwaEywFd",
  "key23": "eDJ9Tv1zAXBK574AKfTSJLt5aBhgDfFSZSLRUvjNsaF4vc48UXnbEwzA2FiNnrbfUspK8JsrnHjZnCRdHnXbWCv",
  "key24": "Fv5Syx1DP3KaCMpNBmgsNAEnGfsKYuP6boik1TEVG9TrF3uo6YbKGPnwHcKaH8pfFqhJeeFej3putzBaqZJcW4L",
  "key25": "2NFQfjAVd5ygn8awhcDyQYCiKhkyvM844t7isPdgHn398Bnmj5eRdLTiDbKpdj6zwuJFoVHta5F2HyPq6RYDVZVk",
  "key26": "5j2B3Ysq2iugjjWM5VE3DSYFseG6ZPPFFqEYUCwxM3oQXwXRcUdwQiYnpnUsoUffTQq7grmhqPDCmtAMd8GY2etK",
  "key27": "3dvuFh52xzDSsYJ4s6L4qVZmcjnqfVKcWbRR42g15xJVzNYQufuSqGTR828br2u8aSZmW7hYHo6rCC3w7e8tjEKL",
  "key28": "4qYFVyXfKWez8U4F9XuTe471HuSWkUc8DmEF2dgxXiazvQjBS4zCUa6m8nz39RkKr9jRcbjSAMtPj52pqkgk6RuZ",
  "key29": "C1fYQzvmoMa963DU2b85MvU6rKD96H1d3JFeWQPSEqVdRzCwsoVcZYaPCKup8pwzr2wLmTPNAnHhzc4MLyvhjVt",
  "key30": "5NMnN6dMo6ytoEtwm2NrmpEh4H9xb3bTeanJH4rJ2N9TB8nziRAZhyehJWGtuChJt2FGpqyarjjPa9sVmrkRpPbL",
  "key31": "3cWLh3UiTmw9Yw6PDWo9iGvgsQeuzBsbxx5M4rxHpz1wBYhksYMchqQKTamx39zWnQNR2z3X3e2xxJx8RCyM4oLM",
  "key32": "3EtCo9bFAmkPtB3Kxa8bYd5nZdr785q4oPob4QbAGd5DNtTZGg8bt1kxL6aGQ91TqsR5HUNLcHbDQUGPaKdRjSAU",
  "key33": "SUfKYC86r8x16YznjiXpEQe8YH7WG1vrSCbhtuooxFpsAc3qXprFJpscrgkqjWtzGeNDCeS5eymnzgpYDADztYj",
  "key34": "2tuU1Rb7T49mHnP2xTP3LeyHJwvEA3eP6CQ7AdihSwNvMV8x1BVAtsP1njaLKRpsbu1cckPjqs2e7Ww2Bo1Wex8D",
  "key35": "5aPidmyc1ewJchjzUsbuswUPypdGx9hGk1yjesDF3yXcNzTFerxvqG3x9JCnTSjrmRJSgdDxCyuwbN8UkPk7BzQ3",
  "key36": "3jEMjSLJXqyRsmmc9Rt94hxU4MZjX14CKXMHjyZsPCLU1o4F7vBZC4UYMw4dYzXwEmstjRquRSWqc3wKsefA121y",
  "key37": "4x6PaNiycJ9AndD1TZHZTeMELUDe2eiQz8qrYZxX63y9NwpWiteYeFWu56qq5TYTHiX1zRCxYTyzs5wbbKJ8Bs6k",
  "key38": "2kNAeZtZK1tkmLMni3SbAiMwAx4SS6kU5BZdyXmqpHs7SANfuiCQV73fMMi14y9gboLm6a4w99jRzacWkJbarFV5",
  "key39": "DzwvcqcZ3YiatC8G42xTH2autfhgPJc1V1fHKfSChqwhKzw2p1YFPF8es45LbK4oUtEbXty62LoHtYGKHhU5wn1",
  "key40": "5KQL7gnrbzCw7kFqz5Sc7eZ5iemFzEALiHfpiuRdm44ds95RWnuA69oQoJfrYppZiTcWrxE17sqmqJM46T32PG4w",
  "key41": "5wG6gnsPv16dTsVFdXeAFgzjGZT6Xt2na21JoVNZ4zPow4pQW7QA4cAVywAFDG1AadkHbX77tzQ5xcM2j9QcnR6n",
  "key42": "4YyhXfadwckVBzpgJ7rFZsepgJtsYWnNPjuuRFdBcxkhXrudindgNmwk8XwCbWp6NevXX1GEdjfuUWUYESpon7W1"
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
