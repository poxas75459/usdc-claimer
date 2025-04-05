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
    "2A5Ei4uxftHTkCLAvAbMYkXoHCFt6LmeFgAC1pZw2HRqfwUpXWfP2ERjcx1tyRwwTVhPn2346QK5EzLxiu3BNjaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23jzKykYDPhsSg6f6ttJFcxNS5zYkY9YBX9r5R5RK22BV8WyYchiDJxTY24WBHFzZssKoFuFA5kFXhYJnGALJFMo",
  "key1": "3SoVMeMZ5t7VrzN3xoQkceoWF2X13haFGX68wbjJvsjTZpFvFTpwKCatn3GAtL35xn25kj21RDQz9Etivgeg33Mi",
  "key2": "2zjpuvkamGMY7xCV7BuQDyETvThu6MR4iCT2Aj2gnawtkTWm5Gx9p6VCHAa6PanckDti3VEgRRdEp4v8J7yioNMV",
  "key3": "H9CWxQsPgex2advqgCp5KNPwockRB1jE8vHrFN9Yv41T1NcKSiPNwWwAdcbfjPyi8nugQdRnrEUof7ptJWDAga7",
  "key4": "5sVCWV3jNsjP5hcPJQQtu4gDpZ7WmtPQAE891XyNV4WqAyKB8soCTLmJs7BET8bahZRcU6iWNbM2CHpPWJTbYEmv",
  "key5": "2KjKchV9oM59uqEQ1K5kttSmAyvqXgTRxXaL5DfuRrKRaDt4GUA7mjkvpuHkAfrJbmdRms6kgzhr4QevaV4YWeky",
  "key6": "3hcBtygkdz2ixXDvtDuy2ttyMYvVm4MRs2poCbHFXfxNbSAa11NGpW6Q5GNa9HsejjGiZnZASMZTX2cVyNmrSmCe",
  "key7": "5BgkyMwrYaUPLx9Cm9cu2FsTDNu9n3AEY5UvFdYH2nKKgAjss2ut2k3nFYuiQXu8tfWKwy1aBk27dkE1K3tGdFM5",
  "key8": "EUva57DESSqkwTwvaVu4tLe86nF9aabuNuBd5CHFh8d2N8fc9odADwvDFYeYshXbKuWvDoWuf9KTtFGCKmEYY17",
  "key9": "5iuLhxESk7SvFCqwEyh8JsSWAvd9UXWvhVdcKmqPzDjLZtebE9UctFYmDxMeMC8fVddkABqu7FHGX8GiNZnQswpF",
  "key10": "5n28bvRd1wHuHo2uVcChYvQq7kYF47sBJMniw21kUG25dSfwDGuozkZqGdKXEEEWUaiKv2okZSGEfLUrL7sEeiXV",
  "key11": "4JVdPFY1MeDPhxDW477jppNb7DS4JFqzzCqpH2gd1Q7gwjc4rBKhSMEGRSAsmn4pi79SvUXDRBU8sYs6ZJj9kHYF",
  "key12": "2ZEeVDUjYDZNEoAhcYzRQukege4zEPoJsEchRdf2cC8tiPZ7eWcrxriyZ5rrKyK5DAqVjiiaV9vTMGzmi8c11zoF",
  "key13": "jHEUzMvzr7sv4ssaZ5G7nwQ7uDwBkHJhQjBrfU6ac9wXeSR6EzRMpGMxC9bsGvnjirzdRSVsL1ndhLfBSj3pQ3V",
  "key14": "3fUvDmUs8f6vEtXgJAhhcqhZht7be7gKGHNSrR2GmJ74cFaHc8rp9LVm4H7vc7FkxGEz6avunvuDdQs8gskSvSC1",
  "key15": "4f31t1HG3Jd2KniZhdQbe1fL596nRLrqbcoBnX97zeaVhVXKjSuiM5wBwZvgoZZF5p7BvTuZtjBZfxHhvpK9eXRZ",
  "key16": "64UHz3uD8BDhF3T37wUN7SYThXwEyCaysmfEgVoJsbopEyAn5JJSRz6uXnoKmtUMw3BNiUhpKWpeCkLty4CHEu5s",
  "key17": "34gebJ9GTWeB8Sp6jBTBNqfoPShbrJpdbTdhcxoNpFhDbWfrf2tqH7UfMxoVqkA8wismotv27z8TFN3Em3gAGtKb",
  "key18": "3JB9DyTifdbGBs8RKzyfeYK7PRKHjQiag6SP4sV5Q449XSZosSC3rDht9Hw8haJdF8qXLyYG45XY1pcjJpXDocFp",
  "key19": "KJWpnVfChTCjQFp36bdEhdWKqfddrDGUEu3z7tKQZei4SbMKNsBCuevi6qqUV9Ckr44XHpmLLvcHJf6Djh36bnC",
  "key20": "4jn1PrjrrgX7Gw5PCHahmZWfrFvqi3Gk9Qh7i22MuPbNQmYZNprqr6MyrTrkohGgM2K9B8zecuM7yPrzco8SvdiY",
  "key21": "4y11cDtntYRaRXygYfSWapwZx1vBJ9C3BioMGFktrwGEhuk8n1C2CCt9j1WnTTvb7omWGd5GQsKK5izfvoWUjumV",
  "key22": "3vW4xFMs3yRML9eUFtGCPwRWanJGoziqiMK8bwNvT2fFxt2BZQGzMVzhjaCS7REtpEschPgM4UyUbCudxCWpBnjT",
  "key23": "4CBSUUPFJCaLHzJiBU6H2SNn9JeQp7YJXsR1RknNf2Q95gv2PtMdVdh3CJSZJWaPyKeTJH28NLxcb4nRtnj5iuRm",
  "key24": "28PjfHAKBQnCUNt46JkBEigmLxDsoXUNMcbf8s4LnDHmX7fKohnaC63mT3pY6w1ntiUay7QLu9um39qBQ67Lg4G8",
  "key25": "4271iAHdhi7kDU9zJT5KF1n3hRdLQKWvUKsnGXKesmMe6HJu2Mm3yScoNUxBR6zDeLgktqCoLMYr3g6vn7VDcFre",
  "key26": "5VmEqKED5r2E3eHBe4udjVxsdngGDqtJwCANsKU3DK6ceCWyvLKzRriVayrvGPxuLgrrgyHyF7Rt3s9YWusyZeWo",
  "key27": "2XYpBCFvaPpLQK1CenUXY5F3U5NY2m8UuCEZQihpbezun4THTjdhcmg5JuDtv9mwRLfiBBmPoiUdbEToM6mnJJNZ",
  "key28": "XNnM5cgHnsjGGoeTRiuEpv6SugDi1P8MqXSC2Y21eoup5K4vzaCUG38jEHVoHHrPSYpSkba6wePvSY9xERwkutF",
  "key29": "4MFTLTV4JCz8686ekSsc8LoHbSHWEdMAo6zbYZcvvNrd6YvsbLiMqHxtiCdC9vHnH2Vxfze6xoH6h9PxF4ihmWHj",
  "key30": "33W6H7mKYNqAWNnvs7ep55kCuaquyN9jgkAvb15K1e8cBqt4sVsKbuyP3jT9w9myfyxwFUwd5pr4MPQ5MQfsRpzm",
  "key31": "3rUH6TE9CxtypxFADridznpHEH1BtaKCyoyjKF6i6e2thTfGXfYCGEpqUNc7yBdZGoFJB8uE3CkA6trvNxscxjoR",
  "key32": "3MN2Pv6aYLFvtvz8enbLnTysYMSVmLMjWrq2Tj1bpgDbcweoXpUTPgZ7rv4ukQMJf1qgLkRbHkvYh7T5WbvxV9qV",
  "key33": "2kpqnsGgJQ3JndN7pKsTdpB3JVXKE8GyHvpvvNpRxhFkasdLQgJqs9s3Gh8uXMNGxisN4q2JWWEC7fpQm9NGe797",
  "key34": "9HhR4oZ9S2A2ky8KS6zdbzwmmdJoyFU4aX9gwzS2EjeoypPh9PZftNSx6wfEBqyqVKMGCEwXZ1TLqHtonyEGYBr",
  "key35": "4EtXQhQWHUmRgSJurQCFk2KGwNCCLhexqf4VTj4nyKaPwakWXJwDk2SU4TzLSzUbvNYHcfVZ9hBPArskAJ1s9Kkk",
  "key36": "3E7fmKWwQMYAkDSbx1cNt4wNauePMyBMkpPZvoS4xw4Ksgc6cNgCtuu2JXTJbEBmTAzSTtHnWALoMpjXfB7ExTj6",
  "key37": "5j7szerXWc5AmzVSv4fcsP5HW4vqvukYLBEwCTjnGkhi8yZmZkrLJc64KEUihGvLdVDLz6J8PRiu7Tf6ok8dMZEo",
  "key38": "XuWJtKaDKAbKazNtMY84GYzG6gjibvrzpWLfxQ6z3AvAZkL483ayjg1jt7SpZnmW3LZVgFmHuee3XoBmuRWH6Ki",
  "key39": "5WFAey1WgRFRRLYMSWph1cdbzTLqJeSTB8Xx6Ntfx7wbcVgAfGi18pvRaTV268tuA4qbfFuYGsWXgM9xnUh4SG9D",
  "key40": "RX1bimWGjSCoDSsxBtzZ5EyJwrtXbDBz1FRNtWYqqbmXra1Fi26exRcGddPU99GoD45d412mDaFuXLi1P5zvLTj",
  "key41": "4aXXq95XM6oRPoHQW7YHwUXnqCkgTRjf2U5HB53AjSY6nryME6KNs4PXZrFKNyUziLU3YWDwZcrfaS1CySN5uLvM",
  "key42": "5yjB4EBWJoQgg2JRxWQ88yqTLhJD2ea4ketBSnNbcrk5gQpjpBmcpu4zfBaaeEY2eremCManoZCB9sjXsWw8Fqne",
  "key43": "n1XHDbNhLcvebaRCAqywtvjBSA6oApCWq5FX4K79T2cvzMYxMCmEe2StDQo2Kt4SSFRakYxMXzd9z25Vameakw2",
  "key44": "5k7MQoPyGJtMgEL9K3P834VzUwHZJBj2JhuB5WqGTyWJTTzfPra3Tp6vsmQDv7ynrRMtNuz7g2sQGQ1xiNHeH9BR",
  "key45": "2kek3ix1C3k2uVMZKku4HePzJrMBjRjXDtiJsQn9SvLjaGMz8BVXJcuc5pw76hQdu3qmjs5z3pXWoTh1Bd6LHA1n"
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
