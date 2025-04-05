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
    "N1xKU9T6EyqmowCFGf58BpTWMUUTgiJPP8PLTnrxC8HnW4Brz7XHS3ynu5L4TzC33yu48Nk7FaYVHEHXCnLWba3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f4H7rcJ4EMXyAaywZa4YnX2NrKm1hWNY9Hf2ujvBQGojAkrnfevrDFi9iSHp1aBUXGbz3P4RjFVRiCj4hpHHLEZ",
  "key1": "57M3out5EE8AdZVvMmdsx7C5i5A5g6xZe6QJED1mvuBzWRbQaauW2phQHEVbKVzoq5KYWJmRtzFac5ZpEcqU9fDX",
  "key2": "aAHSc88SPza9nS19XGSBuZYSfWUCXJmYkwy54t1NXU9anAyfbnqJwNsHemv1L7vsCxZyFUbKKNW7ri38zr3NQsA",
  "key3": "5saVcKu2Tv5EPz5sTxLnhfyHY1ReoGDE88NxzUVierSrBjmZMLtLxZptmDS9EF62EUjaVZQKxCxgyvM1XfzHVnK4",
  "key4": "SqDaqFuoBkY12dr1nwGQkfS4JSc4UkjQyFAYyZQgEfdJmEBRnbMGg9tMrXeMXkreVBYvuYPBYZs1Y8qaUjcRww7",
  "key5": "2NnVnyf4SnEeFz4FDF5shr4L6onqs68AtGKLBt3DKcAGHzsLtJbkeWmWA8jxKtMRik3tZVzkqT9oFiKKpM4CqVma",
  "key6": "293vnTB4ZmHqwuBCjM5QJJpHEaxrqgFTFhUggapi3xx5Drjq7dgpBQJzuzFp88wH5NMExiPevMm1Abi6SRP5JRAT",
  "key7": "2x6sqaXtRArC9abvqg1a95rhnYvcutgcPQJGz5deEXEuXosdkCQ9h1cdRG6ZpKbJnenRE4naTzkseh6ZedKj5LJE",
  "key8": "3zuxwjwBMo29znTkGYStHAjQdfXyn9oasq2vQauzQwvgfwS4YVwhbMPuf7fo5J2EoDnFQr6QjU3F73VdstMVpQkA",
  "key9": "nN28kafkAAD4muwMpG4qhXGQwh5ifRCZt2y96JJM4Pe3jUrNRmGMAC7Yi2oXbfSgP95xxs3o5yRrKKvQcW5DMJ5",
  "key10": "2iQdyazWVMBTzxFptnfRhBAdogGzWxyAPhHvhFY9AFBfQCMAx48iDVYz5c5fRYoK9EzBeeYuWMcSPd6o9hJLUeiC",
  "key11": "Nqodz2Hzz2jq22yAYmFc2zovUkWthQrD7ejGdFBcnm3usBvjiDR5HG3ACpCgxL2hE5Um1C297LpTPTQXDcNbfN9",
  "key12": "3UKN6LWjswobATUPwizm2eGGAU2x9ToM78Kpa6RfCsfgf1B4xyPGSyafzS5PLymc2cp8tjRU3fVqvDaREVwPX4jn",
  "key13": "4TrWeLvFPDVVcGhwaHja96YqtXeUM9KeLNGC2y1Z8UNoYCcqsPDSreFVX8Ap3EXDVaRNusESXT4VLMgw35dDZ2zV",
  "key14": "4y62khAEwYfgvTZV67Bmo33Y2EGifdPUYfma1nmDCL4kZP6Vsm1P6wKbV53vo8gvtKhQrcEtNB4ZK3G1A7ZzP5Zq",
  "key15": "2Zej96XXJKw1VMhnWc7vSRcGP6cCdyQGHznwY5CETWFiBueHQnUggc4g8FLnxN7pXioRr13kEJMBSA3DXDQi7cBY",
  "key16": "2udffpV3jBKE7qiXovGFkBp2BkvDRAV3b1kpuLg3MP7Kupd8dDTJGXnk1c7x2gHG9b8JXGGC6qsPWWKSJUXcFfmz",
  "key17": "3vmDXK6gNiK9j9fVDJUZgCYa4jsh6avW2WhCvQs9yV284oMYVDmQQ85vzCjapa61Nty7izUgLMfgi4ffmiu4ssaY",
  "key18": "4dNtGs7UGbMMXwS5CUKRpfj1QvbucYJhcSJLEZyDJzssC9j8GhZb44tn8uRhKmaFX9jjtGzENN6PshRR2X7sBdW5",
  "key19": "2bxyTSwBwtQyTcZA3aVpng2a9sV6KGJJwWtbWqjcNQzXhJ2J3medR6ZoSP5PxjEhkg5VTK9cEtFpFChAchAht6hE",
  "key20": "DTzEruUBSfBj5Rtrid94msGJV2yGxYV2pdr695QBPR2FowcunapDhGjgiZeEQC2p7sQv1nYo9ckQmngmACydayq",
  "key21": "2gKtkBZYzqxnFoaX758pp1rm3XX4YFybBpmbvdK7zAFjiqh6EbzYS5qRhWPKXpy9jUDve5BNtrYANLSPxm4kb6hk",
  "key22": "371yRMYi2Z4sgNbLX9PW6WLgLHvjbFH9QhWVP3rFsKbYsgocA8cYuPWUpGUPDqhVcBs1CNYiMguWFenMi1DateHA",
  "key23": "2BJAq5kGVD2ZzuoK55CvwqJEBVhEpYZdBGgWgfhTSAwny5hYRyLb1VP2wxGiv8mG1YsKQVygxQSJMFY64GRZ8b9L",
  "key24": "37DGA6Lbts7dthYhaYfdGSjw1H4LSnjivxQL5R8mX3AWLb4ug523yfF4T1FPuPEy1ectmizmqfUtN2Njt1HsA5Rc",
  "key25": "2i46DpGnNTPg8ZZYPubh4YrCa2rgFCn5uM8YPTkmaU9w2Wy6taoHbAqVBDxgKp6AyS3bFGJvvEGfzxck5grHTgAU",
  "key26": "5fkpuBHgbgtdDHByYXJnu42khLDfPZw2sJuZb3xPkLXAq9LmLXWrKMMf8Hmsm6zDhFbRcHUJVXEoMWWAvNE7PjnH",
  "key27": "4hed4mPzSU2RqpW7pzGPHisZqod7AGR3qhDicCUKzVM7FQV39Sg8kH8FAB89n8TRGDH8uG2kdmg8U87QAR5HdAYy",
  "key28": "4Au1WXamimjcPVDmeUVFFA29fGNdhc7pyW4RKtkENmVsRxwW71cvQ497YJBERz8A5isQv5RzASCo7LubvSyrTvuL",
  "key29": "3ta3872zoBA9fwSQ7Frpb4FUqGXDd836VH3QdQzVjwQqMECFAWVfX65PCXh6HowoQNoh4RBHsmJt6upfqso8Uox1",
  "key30": "487unG94iKc8kcHCoKt8ku7GvupZv27RgZar3cfjEDyfdXN5iPcWbmvW6GwkWRHP7KmvZEkZTjZHtEKK45rXZuqU",
  "key31": "3omiJPxSfRMyZucgfSTt3fPnSogxjztv8ssujMnoNt3ea8FytovdTNkCBxKF9TpQC9tfNbYZgEBnusugkzvG1B1o",
  "key32": "R2YH5FgpbdNMDeVKiGLv1JXQCXFA5JCDxndA1Hkad28Qcr8PLsp4nPQ98xDD61z5AeWgyM3tMaCdaYdQn9Nmryv",
  "key33": "2pQursjuCzVt8WtdtMKfxQ4Hib83YTWtWqz23VTDoHQHyL3SFTi5QTkewGrAf42euS9rwvUeyj4VgYPqPpcRSNuT",
  "key34": "2oZNVumXWwG2mLtH5Q1GeRr76BZyo4wHRNqCFawEZYif6CH5HR1D9p2fDJQThvttW8AUH4BaTtDDueaGaKsYPxZs",
  "key35": "62Cp3uMpGFtK2KjcwUWfY1ExAbZ2KxMFd4ZADecTWC6MttSab5VLXw2jU1qEazfJJKBJ1oYrfNyPDeygiHeDmuv7",
  "key36": "3pciLcb5vim1NEBWmf4FSws8gKSDTrsRAPjUpc6TMA8ShBx9yKhSLdAurSRS5DaGhrShmSpf5qDseDLwrYwEo6i6",
  "key37": "LjiNygm4rnbvb88KoBXwEK2FQaBhqJUhH3HuDTqrX868Suohmk7ytPV6J2j99r14Ts89StYMUALfVg4AnryszGh",
  "key38": "4CThd9nGhGeqZvGAwjw5TYdcBpuKsYh7TQgyNXunWUYuDq1yAwptRQayp8HBQwntuqUYS2G9UGBbcStVvErManH1",
  "key39": "jqbC5qHfz6sgAVzV516jaxGfbVFvueT7Fc2Ttxyp1soKjwocfzxmCm5wxo5Jha2bBZ3sD6F9Ek6wFC8wcdMjDZT",
  "key40": "N8Z2iFtAxn8FHBSE8uSDHf5pwDcRuLhtLpMLtJmUTG2BShYHY1wnB7T5wrEBj5791XepGkwH44w5X156wSGENSQ",
  "key41": "48jMZcC2dVEGzss1F8yfRdxxVCAYdpqFdy2jbKDLBJi5UPZFgphot2jjctATEYeuw5PsQweW2uATukwa7PLzpbcE",
  "key42": "3BigWcXXpNeqwiVbq59zT8RFEHegwRkETgMBvJRzpnWp4fWLb9FiL7Sij3xKc7JgZoRdkah9EwVNNH8frTfis9F6",
  "key43": "33iozxrjnaJu3nyDVpewt1ctqbJj7ntqxvNWbPauEcapijiraoKAey35yNh9vkW4Cy63nQvW6omTLoLeDtFEbsVd",
  "key44": "5YBC8nPFmrfA4FmDgVKNtn4J5CPTxi8KZ3XtUBi3TovfgddqYUiweHQfA29Pj4Yar63UJAYXrFNgCWunUeHaEriD",
  "key45": "3ataMyayL6UTXiNUpHBxC3D7scpjr26eoyg7oXP7h5kuDRn9RsQSewWRP55Nesrh8e4wdQEEoXcrfSagkJG9NFaC"
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
