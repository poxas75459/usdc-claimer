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
    "yBnx7HBX8YSwhoC87iyNgc2t2MLo5vXh4YBgVjK3WUkCMLLoiyKWAmUCkhraM7wqHot4HZruBEe7czQ88VTKTZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hRpdwiPWPpBLwDoMio2E8HZ1DQ27XtmLPhDnrTDcCBYdWa632hEHqUKx2zgDgw5nfWLcnoGKm3TbxekQPkqYePt",
  "key1": "22WCoTx68B8naAeXxsoqrUjj9dTAiiUSmNw5VtyBPPoNqwv4ece2D7JucQKkdaMsTBGPKbHemzf8x47urD7SvgGd",
  "key2": "5qmRfwjyy4jP4362hHbgbBDv2JhFRFS6RguEhZUYbKqdmrfqzzkQvdkxQSQFm4EgE8sC5FNBz6b2Jg2FfPPBW9TG",
  "key3": "6HEmGdQ8eUeJwNjb9auUgmZXZ1z1Dgj2dXTgCYz7c14QHriSyZLL1J3ZVHUrB4VQtJ61FUsEX6phLXkoDNkSk1W",
  "key4": "2334ANTRRrRdcGJ1ftFeyjwqZmzm6ZPy4PgHWTDx2mkQZ2t1aJF71rbBjGEEJDJB682x4596ndUPkVk5RWfksmhV",
  "key5": "3YywAjMeRapm3QohrB1JbnFoJgasn5Mc9mP3nacicgDveN7nMMWgKxov6UiRQn3gq5R6LSPiaMk8WYQ6fDsCuqbk",
  "key6": "5B8jvCxj7DWAn6DvaUMEwXPnADhLafAC3eTbSoBPyiKzS2b43htN8mAeFfTfZTBbmUh4rNfVZCAWsyTBasursT9c",
  "key7": "4A5n6Y3DfN8eh313FVGh8agKEdRajVLRNWqN37KUdVcVr1ZhEEErryLcLqNc4mHRhqENGLFgHiPhP8ZV8Yme52Bf",
  "key8": "3mZFv5Eh9f2Adzp9qPfvhVbrvR8pbyzWMMXzidCYZXD9UAeAHBoEGSVWsda1xNH2wEPo8L3iJqy4SyAxdSXYsEXg",
  "key9": "4kQro5RzWXZVLDeqkTKFdsFGvcrm8gagMGYAVunW29jrn7LXM2CBhPSwow32YMaUMZheCQBxstUNR4P38F88VTMA",
  "key10": "2HPJx2XSJFsdv5Bp6ypThFUqRjnbhKYgbCJRD38DYLY8qFWoBvMuchGqTi4xYFFBU4qgrHAbP4L9uYdbXa9KPG1d",
  "key11": "3Q9DZPGWYrsfpxTmHeADRJaWZD6kyvk31TUiZGLsN5UzAVmhkpKMZdysizyjZsS2ARWecPEqSJEh44nchrywLu2B",
  "key12": "YxAZYQn7tcVbkAPDZuQ918CQw4whqtFda6eEBzTh3UHTHcMwNkxao1S4RHPXcmUsMDyWTthoFEMihjEb22mgXXY",
  "key13": "jcVSUqgpxNro4h3zVrhZ5HMUtczoqTBxYbhVUUXQ5reNw6sYBMUwnpS1HKFY9hzU3hoTTzKJ4ezXLCJqhxaEv53",
  "key14": "2GqYZDUqKJnQz3JViZi3Rg8QXicp2cPa6WrA9iknXb2Km8kW4Xr1TTWdRvTaCj1D6spGmqgH8q1tGxu5LTvVj3JA",
  "key15": "3BSgnjjGsneEYCDk8XHTu1fGf3XgQRSgWEKCAeqJmZm56Z2wuBfWpx7RKvpQQewfMkxFegNWh2HhUJRznJbSDYDN",
  "key16": "5pkY5wcdbW9bFt6PhNSezPVB7J3QBvhdxNg3BZ42HKA1uKjETk3k27H76YrarBmdafpSCL2cC5QWNr6e9Uqp8FyT",
  "key17": "5cBcF6eXbDnycPP616FwC7dY9B63hTACTzFdsZ9kTj8sPYJnP9gVgvq1MFJ2fSePCWeTiem2BfRUUUscSY76FJMq",
  "key18": "4Bp6ezKx3Rh1sPzymGHCHFyXpGooNLkyVTTxDW77BpuA3AbkhHi71k8eKsmaN1R1A4Y7pAQBawT9C82aPEd4Tnde",
  "key19": "5xT438got54FUeo1ikmayWZZzYfCqhoHfzsuL5o36jkZVAQMX1bGANw5vccM49qFEhZsMPdkRkFFKU4KBPxUayVH",
  "key20": "5czEMzRUZa2uHyeTT76cLcFqNaTKrNi6SwekjYhRSqyLpQuTnjEk1GxYBeK4NyfjDXT6GXDPGwqkcM3fUNZ4xeGh",
  "key21": "25k9mzNPdsjn1AxmubT2q3raHaijmCpYsFxyrayMVr26ijvJUizcWtNnHSqiDC8HqLNt6kN8e3ZrqmyPJPMMSS4b",
  "key22": "3PhvGt7FKbAuxykKzzSDRgM9YGmHrvAgFpEoxjTiA4dihb47rzPSsfcT3yozSCzByZnU9BBp5fzg3QkPy9AKCCiZ",
  "key23": "6RPNc56hbwoUuqLbZkpYCMEGm1EcHmXiQReLMuqEvXZDvfcKUoXy3pez91oqp2F2T8yuV2MW4mP2GtpKYUBxKAc",
  "key24": "5Pcna5MqtHJEzvaKimyrzmvDYLpjuVVFGwGJmL9rjTthKZfKLw1BFvxANSzGFpLM6v5jtupKAJ8Y1cHLLcLMUcga",
  "key25": "5yAY7RjaQv7WWsAVLnCKbyKx82W8jCNKCmZNHhdHE5hfs4kap4ggZ5iSymh2xF4pZGnSvjYqFspfadQWPHieDBEg",
  "key26": "4EiAueZd8jHZVvjzyEwBxACMbRMS4inREBSj82Bmm3M9DoB74VU45ZLa7tymGbGV399Cdd615f1AR8n6FU92WYMc",
  "key27": "vcUHcdmp4Rf4qLjhdJqo5JtgSivjAfuNCtQ9ZXv6YzRfyCGaC5Nxhdc7Nzz4i1dukZLdHnKAUuviE5LsbNGvRNL",
  "key28": "KmdTXaY6S5F1tPCnkGhX8d7EyGXixksy9kCqCDY87zTTfxHDNef3cNoj42bFPAy7UwHEbxrTaXXUX3mPyb4jguC",
  "key29": "5NjRmLHEnUSsfgfcb9fLkMECfZdLWQZ4zZFJx4SjkMxv7uBBCCDHLGNyP8DRQskwG5cZNKX4UAYedSqAAVWvgBNL",
  "key30": "rVNoa5K223gPyQAVzEGFvZ1tjEW5vc9W856eG8nSw8CsFgxz3sFQx27GAh8f1LGK1NMwZw2jhUun2Kn2eA7avo9",
  "key31": "ke2iNmumMKvFL3jHEkZJkh2tX2tpJVFVg1RbpUTDqKKwSXy54Mz2RCrDwtftazTPRzmotEc7nAc4vx6ybnxkTqy",
  "key32": "5HiKSgsZQbumZWU1LxvN1ECie7VwRUYWTE1mMExVVUmNXNDeSyJ1bgFAkN8GYMH7VGXPvMrrGnCNkwYcxNrSS4tK",
  "key33": "P29Mv1MmiTWvYk5K5ops5Kww6QRWtZRbsXjZSntUgoXnoUPqAWjrzPo221mqiuapaYp8Q1xDouN8hV64tHWHyDX",
  "key34": "4ughcxbE6C3X4q6wvJffHLvyrocYWvnCUTT3WLDA3YpHUCZZv5fVWvqmcXRTJ9MQHMcKiDAAEmXbkdKwsbHuWDfb",
  "key35": "59mhjo8NTmJXoWE5XhT4XFkyuNuxSgvjp7H5CVqbQu5HEgqK6rUDapWEyc1jZy6wczv2Lbfe4CqewgBTWdbrApcD",
  "key36": "53n17mvpi8k4G6n9yGgYmmJnsnz68keZRGn2wGmjoQR3jNANxocK532TiTYhGdr57gSjGHAFdTe8Fsv9Uy79wsyL",
  "key37": "5bngzPvWxKKat2DDUJdLZC4W2iw796g73w5Jo1caepZpaMAFGWiPxFq2UUJfN4QERnytAdnvpzW5xLcyNGB3NRgy",
  "key38": "5pSAZwVGiFpDuhN6KMcDVqMDq3nH89Rf5i2yXK1sg3ZBaJqVk8N4CQzPNR9UKmJwbrNSwyiLzGGw4rzucXw4LZqD",
  "key39": "4CNK8mCyM9FdmuMuVNGj1z1EmDgGhBgjDAm5HeZ2gUPf1auVud3Auf2SU5M5F3h6uCpx4bpgwY52bZzLThbKK1su",
  "key40": "35jtWpAD8u44nVzc6MNah1Wf7wBsfv6q5tFfGDJbrX6jzxS2wqyYJ7kZZ7xFydQLtofBGb8Ed2VvYiSQp1mtRKdZ",
  "key41": "3jGK8XkxH2Wcpopz1D1aDN4cb8djxSLx62VdiXja7RPvgmMQnHDmHVHBUviTcfEePKHgWrxd7rfJdMaS52RhHRqa",
  "key42": "5xQPWjUpcDE7fJHMGeChTaLRkaehhr55QgV3HvNyseADcwqqnDxU6mp1LWdw7d2HphZuGebKLC3Cr2n2zS4zzftE",
  "key43": "5xQE4DF2WSwha9xiyNyTjmndZRDNQChbSLR1sfQTiWFER5Bw1LfaCit7qoBfppGRgZk1zW6bzUnLZ8q43XeKDWCy",
  "key44": "5D3Y67wKNeCrYUTRoFYn6PwvWLt4MmZxSwiVf5KnJkDxxJeA88QsNKFiVo83FhiRfBJbiBSB2TZE7B3fa4T4YKRn",
  "key45": "4TX8JSFpLukLPRA4K16KA7ueo1sDz6RfJZoqPZAZJWBvnnN8qgdHFzbVccBdNkUXsHXsgM6oJr4Medhp3fmNTy12",
  "key46": "2zJHfs1mdix74Hm9Fw7CdPe2CEa7WTZdk5EwKF2gPTDyvJVnAAqnr2HLRtdHQeXBkjZkSgjpP6UUXYD2P43Nv7By"
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
