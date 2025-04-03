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
    "2zegpfndPqwuMQ8ABaWRf5hwKKUFCrvcJTd7BWCbT8UDkL9qPeBsQyZ24YtP2VyrYnEqUVQjyodUij1GTGm3rD6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xinpGRdCetQ71heu7pEfNAhotgpTAXAkWNGgA3xT86LKycDiAy8Ua9VtmY1oT2uo7Zg1zvNR3QJsFMYV7Xz2ZWe",
  "key1": "43DTXgdFv22LcPtES7X48QH2jEUMx7ddgQwQRTG2ky2JAiEKW767iNcdrf697TYGrdvxdJmpL3za4dKpwBP9vsRN",
  "key2": "2qDevrfW6q9mKKbu5Uxsa65SByrsMLkxZ2uVxufsAsGbTWcSMyrYyQhPnzJmnWXgQQT2i26faMpMegyMtZRJFQMu",
  "key3": "46Ev5rBTexKk7HCo4iqbVzYJEy6om2WkCV8QVUsmHK4hFaVfXjazx6AcBXfgjCpVm2d4nFrLfiZkVJkAr4BYTLDY",
  "key4": "3VwbTr9KMQbQV6uWMeMeEMZ8sWaZVaAy5tqxqBRt9j8zogYeJy1MehdgU1J69y4NAjFXyHvj1KeAEiuvhydgsw6m",
  "key5": "dgTLnMDbMR5BoU5XQsVNRBBQjgmWDuwYuUZPk7FCa5WExYV2BEotvt3MXtAHqcCs7mAWdNZQwHDS4Yv7TDJbrKn",
  "key6": "42CEkCBLFRJrdboSayMdYHszE98QoHhRjCRF5wH1E8jaHNcSZ1NtgoAt5vesxA8vBAfpe62zgrWs9smNEb11L5JV",
  "key7": "3pex5YY7tqhAV9EX1cLuvt3FiV25DRAZARyYpvRHWqkCZF9swgVhhc8QoeDMd21YtDppNFiLo938XwQWZVyP6wz2",
  "key8": "5qhP4P77h74mwadHd1aSCrirGWFLXWssDS4dJ9tDVdkyE3r52AMceErncQMqiBWf1zmLvAV9KT1dGQwEbnYqL1ZS",
  "key9": "5wBNysiYSTgqShEwjEVWhzWxQ58cCDG4WwWB5i16Zv3NVqMmeJgt9vy87tuT3Koer1e3dmy5Wwit6AAET6LVsUQk",
  "key10": "1N7pJeeoTfiCCujSPMUtsRqgd1vXQ6GBZJvsaM69cG55rNioehUqmqx7QbmNybrvSBtw1LgzvT2wGEcRj9ipDJ1",
  "key11": "4HxxeCVEbfRpQXXE3ZCueYAv9BL6pmAZMuEkeL4oN7DYuEFEbfwNX81N7VhcBgpJPvyM2rL1xB9nM4GzFNdUjKYp",
  "key12": "5c8LdKxmW4MrbSpd1F4tgXNTSgj2wJ8u2Q7xzJA5bjUs6baVUxDd6jLoYW8Zds5uxveERHfZDF3vnsJJqmUKKGzm",
  "key13": "2YGPm3DVqJSjF5CpA6briTPkfAD9q5kN9S68PeVbMvatAt7om29HhwUr5UppbyB4wfG4YQhDuMANXTxuPtyxxK9L",
  "key14": "2XKYCrHWE3QunrFN8yPYprRA1tpntst1ciUz5G5T8gVmghEDzemiM6nHra9t42qHL3z2stwUwGWNDSS2aNsZyrNt",
  "key15": "4JQ2BMd2J6aeuYDuas9rCP3BFL2xJuFrMhq8FvyHzX1hKbxhVv2BV51TokwTyQZP5oWRwZyG1bSY5ekoTpFH5kJp",
  "key16": "3e2PY9NLLYzBf44KjCjZ44ytThEdRBSwYq5CLRxDWifZ9vVYHvNvrZNFe6YNgfQKL7E9xcZ6qttVxFj7hwCFM3AT",
  "key17": "4AHoJkkCow7MRtrMBaxovnAjeV4yyB5JehgwpifSfWJzKDCWD4A2GTEerspbMjXcwdvmFDtxKSafor7eLJ9KHBXA",
  "key18": "3Q6bwyFS4oNZGhWKXUFfWig7knXa8CEwxkK9w7UCSq9DVsGpom66JNH3Qmh2tok7FPw8ygJy5xSvH9T9oaiom2PH",
  "key19": "2dUKV3kn2Wiy8spUrCiwSw8fgT9uqo9zYNVxmjQ9F34TYDi9ARgbtJCziNFgKae6MpHra9fvL5mdj9iz8Z86ut4C",
  "key20": "3RTH5GCUY7BhX5K1hadk53A8UKch2jnSFZoovqgPL8s58d7mCPQF3p3KR3KFxRwttYNoCcx4dzxM7Uht6TSeB26R",
  "key21": "3N15euPtyjEYdmjis5aaFp23D41ekMhAgkZrRBhTkFD9uqc4GrZFA5t1XzKQdcbiNUKYu52jNUCYDF3d9scs1mtw",
  "key22": "1aBuRnQu44snwASTajuqyDinF4oLNWTb6i6vvUKkjQ7ce7tXaHCcvXwEohp8QZDHJWtdtdVUuAGrfaX2r4JZqvK",
  "key23": "3Mz6aukRyH5B83uepcYLHzSXNYr3VeftDccRRC3nLZuYizpyUxoCt9AheExLWL41zT9mFfGAMYyz4rnUcjanLk7m",
  "key24": "2N1wugYnj8igfdidniMMnzXxEFxZ1qMnSHkcYSopE5JQ8CNUpSfMtKYJFDtDZ8Fi5ru5x6BDuuXke3TMDgVKHjDe",
  "key25": "3MLWLT2HgyE9rzdQUzuWH9DdLs8atrxMdBkz23kW4xnVei758v8Vx36NXN36nbLqRPigQ62c3Um1C3ZoL7hwQVHB",
  "key26": "RpTRo3jXuZNXJVamUPatEhQrvD3FgMVAZkS9z1kyAhc8jkxL5i7XAyqCde2nVBAfhMLUtr3gZ2h6BoasbDP4pD2",
  "key27": "5nk53jnvL5erfwMkXcB6o2sWD6gnsPr4JYhQsjTvJZhueMdcBgT1Zb2r5LECQyarFKan3nww1nYDqLQwSnj2gRTQ",
  "key28": "cigFCCdbzZhbA2aw778PLqMdpkiS2RYtNKSn5c2hDRXE2nT13o6Wb4DxcYEeBZh42DBSvugFjuqa23iYwUB3KiL",
  "key29": "3KcXc4DhEY4JXCoWoZ3U4cPKR4ehN1rwgGcW4ewKqgFs98zo1FSGjwgHvmwddNqt9fQxY1imk67KYVib2k5zeR5i",
  "key30": "3B3296Yfe8SecU5HBqmXCtasCC5nXCEAySd88oVSqP3KYWMn7tgibnHeSMEEJKV48HL7mvMxB3ZZk2SoQfhn7hgd",
  "key31": "3kyXE9q6XgsUoqxy6uCdYtyrseQYhVnudBHcXT6CGcNLuLR3FDU82UJzVAwzqoxx7Pq7SiCjyQX995zPgg7FuBrv",
  "key32": "4tT82PmUhSCMNJCiYnDfhMr95hHWDr1Wjs2SiWcKwm1oHawoEQEqQid1JUiDHLJfyEGmYG7rdrc9xrSTSvdBMpd6",
  "key33": "4yA6LKtb7TXDFdANAY56Bmf34WTB8CYducNK8AhP4wrRjHVvQjcnzspssJwoh2FEBENYeFTmwSGPZ1KgNpVzKwPU",
  "key34": "4iMGhDoybny4GqqtCCS8ctWyZrFomfupRwFWwxynXC9E6At5RVNKdEoJbaCZELqwav5ou5xkPnfm7s1JRBKdccBr"
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
