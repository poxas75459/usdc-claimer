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
    "8gmAV9NzcHYDQyJp1EP8Nz5CJMTt7Mv6x84kCiLzDAmffD9QWfo4LqEjhkbj2Rq8ejvKxQWTQdfi5T2oNpKxrdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xuJt4eMrurUSjuMeYNTLDA6bAhDRGpZyBdT8cKReGKuT7NLBQ7T55gCnDDJgykyF2XvoUa4utXs8tkg5vesxHbC",
  "key1": "43keTjd8QZoiVkF4SYh3hHZAyyQdUJKFAHRUMEbrNxMVWRU8bw7brpaZ5pG1JUBstDWvknyN3TCZtftoLgSGEvjb",
  "key2": "2QPfwccKbYCJMsN9aQpNqV9H26kV1iDCx4EsDGuf6bVRj2qfXyWv8gG7euxmUvRfCPCkuvDmdY6VmguBJXK6PRDu",
  "key3": "26EgazbpyRQ6u4xxFRgt3Lv4BykBF69mD2YgCtMhSAscPGHzKj1qA1biqfPY7TEoquGgnL5FL6EWp1PMpxrrviy3",
  "key4": "4w2686MPwEP387THqUXnpwQ6aeyGVbWcZw3N8dLHe3Yvs7fDyBPtgJ1fnaPjaDZmhVyv6ArE2gQ7X8xqrQCN4kA4",
  "key5": "2Q9LNZ9idrtBJkUKxU2KXN18Ja6nNNjphyWZbngjh9bP3e3oZYqQuBVa92nPsn3kEHvkBfT9Th5xMqu8wwfKwi6W",
  "key6": "5ixYQeAsTCuCykqg3boeLkG2igBMT3FxpnBKNmbfptfppQPZ24KYAjDgF8q5oHHhwLtsz1gPTPDdGyxE7qXrsbkY",
  "key7": "4pfnE6qxpYtGW7iDtbvyXXvo428eHcwVRuP7FfP2nLBYKP3V8mf8d3eyiNwXpyCkGAwhkHkCgMDCcFP6Pz6mFZcD",
  "key8": "4j9ockCJcPzCxyGYvivCWi9optk53Yr28thQYqxkBxrQpKDT46KhJzgd798WbeJVzUo2Nd3euGuhEPN9PMaBC31y",
  "key9": "3b1Ndzc6YGJdhukFTW4MZBhpjrrpno4THsEjvanFAFdu7YQomgPsas1LXyU1hhKB43v6FUUzPBVbYGRPFAEhbXNh",
  "key10": "4j7kUFLybAsnYCKWqUhxTdDnsYxtodTCkuBQhfQ3sFNWDS19sKL5wsfFst9xBs2xiyJNuQeYFRXSdbwCpfEd7jf6",
  "key11": "WZUf9JWALbqJX2wntP6NbkdaeqNXm8KgVESu3dAUZoM7oPrNLR5UezizNSNWQx4ynYaYPV7Z2oodnCLo5vmsRpH",
  "key12": "65yXzSSMy5wMy6G2Hx3HMsrTjYmGeYFjJ9aoeQ8ZvtWktJco94rjvVLCwU7YmCt1ZGgaUBWUC2SrugK47kL95Z1P",
  "key13": "2tSP9QhLVyFH17DdpmnM4eepUAEsMhCJDDyjqJLCHcvC2Q5fMMCaP7pAedzpiAa5LsE4t2MZogrzM7nb3scNUpRf",
  "key14": "suTdQn4A21jpffowv49EjtCNJqkXaXdGstmpEXwyK9XJAqci23qcfL8Mmi4CP2ndWfrWBbNmpuLBGQFedYM4ncT",
  "key15": "sXUYfneALCVF5a21Z2Bx37zgDhbiAXQ9KLN1ra2pq7gGurVFbBVYcFEKstYokkQM5wa34ZYveoPD8Xjdk68KkoH",
  "key16": "2S2MHuz1fcKNuzk1ZvcLb9ibXmxUEsXUa6JW8YegMCXbeHgh6JYPdd5A6z58RfQ9gYtPLqhS7ewLoYJVhQ3fYpa5",
  "key17": "3F5Kb725SJ5BvjLee8q4TTcnJpp6X5zbGri33QkYVSnN1DV8inpPK8hEANjKqvFUUscx3B8Rx6FK24ZZBrU1HuNK",
  "key18": "4mbX7ovtE9i71n9XbHWmzpqrBD77PoNBjYBqtbKEpxLJkg9NqJ4m85QJijANtvgv2RicTVV2S5wxRDEv1JEQSZKU",
  "key19": "4uWhqXMBqFKYBuTvnUkGxffYN2m9zrdHk9PV1JEVay95URnmDDpWg9f2psmGEv3m71eemH4JBWKEuxCwMJehs3t8",
  "key20": "539moaLxz38vGvowGqotK5tsZcwaUujmKRq8ckScoRidoTFnTDgm1R5EFHpKVcChiz25MyyzkRmuC2BmsJUnDsv8",
  "key21": "YgBTcu2qu5ccovV5jCWCB2Pvpg7G3Jqwwqqewj31U7JZtUu23zS6DLpD3MGTkAKovRsqHNJSxuhUMejaLUtj1FP",
  "key22": "3ouSouPBDEr9vtfZD9vsQKWMNzqwC3C4u9gBRABoNyUA2SRMakFvRhCdDDweDHuPg2XZypzk4jKfpct4veuJzoxe",
  "key23": "41CGW9eQnLC8Q6bJUreAnDHPvw5poq8JRUFYiSXJXZDQwVNr9EcjZ1WLzcnKy25JYDYRaU73jGw46Aft5Kwfe2EH",
  "key24": "4cehwnvtQjEcDwLXZjzuMaDH2NkrfotgujotqMHgJTKory8Wx6PwUZvzRAPS7BwggQczNznkLcqKsjn7YN1s8YjW",
  "key25": "27ty4mw591oddazQwzd8iH4Mzn4rDyswBfNANqh84i8hcMs6yCGsS8rWarHGhcAF3PYyjR89X9wHQt7wUPNWPUph",
  "key26": "5TESX11EYqwyQNWzfte1YTFyBtU7cyDXSYzbb1PGPVFmBjNG6J2qvF96u73ggoRdKaRrJBXbBiMriFxG5FEMz2eE",
  "key27": "5hRJCDUdFzeGoGJsW61b1S54hThxLXGEC1i6TdC88SfkPFowLNCGazv4DK23KC57kRVQiahm9fa6tiKaMPRrKTvi",
  "key28": "SoeqzG8h9X5KboUN5hdVCZgQB4ewumd2PAwpSYZL6whwaWFwxw9i8SEVynjPqY9havgwPHUwVDBe7biM2CZ7R9t",
  "key29": "81XB6itzWGVz3dnKKMXozYEeAPCyvLt11i88KrxDYMWgX3KwMwXixR9KEq4B9actAXVVjLUM3NTWLZK7chtWppP",
  "key30": "4y6HRN69n94RFZZvWfebTs87rbChmSXDZcBvbQZswe44eTQSRHTLh4vor3wGLJmRRQjXLVtPYz8GG4nB8o9visYV",
  "key31": "3qfuEisU8LTiQ9uQXo4iK4UKPHhLHJyTWJHnCG3BtqFGPundLcUXgtnjVpDBbDCpzYtc41xfPcGNWXh5rTwD836w",
  "key32": "si9vbj1nfNnhZWtcJsa9cHm7g1quyDDMcKDYDjBQGjREMkZKgus3BtMHtZv9rsRXshtcKxJWDzFakm2Dbj6SpEk",
  "key33": "EMUCJDGWqa3Ciaiwc3XqyYwg2RJ11vcKFhVpa7jH4NNyCPozCHKttBcDVnbWcpRhwcqiba45iQZceTQf44uygns",
  "key34": "5mi95nrpjkJDixteLcdcZKnEzBEinmWAkCLb9ZD5qWFwtFb5dWB36hVrSAbQJrNYiW3z5fCHSytpgw5bD5UkbErn",
  "key35": "5sDXpFBXCYDJuGpbonx1Pc5PnWBY7QT9UJpEKNaH1MABB24Q5dAMf9oRciJhwV48Vtr2WU6DGGGvcUq5otmPdPGn",
  "key36": "3frP78UpaNYfoYQF5f4SZMq7ZzB3NxfjSmEDtJ76dcQpQafS6QWYNfaJETmj2efDd3NXCaVQC9kKHscA1QYkTjNw",
  "key37": "5hZEnhBd1SNocCtz4ukzCKAFKuZfHVYs26VFyGNjtWmP6i9jDnE4gTMevAyrCWELdbVzy5ZbgoEBdUPPt4VQLjbB",
  "key38": "5qb6o1mPX8NHTHRqP1oKCwwQJu32jot4SKauu7xKnz3NL781VegaKWVhAGxa93NqsdLCB2zYyURrBXmQQju8zgeC",
  "key39": "42iYSpj5bGM8RWqCS4K1DsSqg754A8eRmXpTH9SMmv11m1mwJPZBznM3924j5uBcPYsrLyGN4rW9R6FQJP7sM8Nx",
  "key40": "5oe4QhHCgVkdTYwFbgZjHU2jBw7hBXGfBzL7UgqKgzr1hvAhw36upV9omyY4Q6mN3u23ZZcuHbbW25HB9u1fymoj",
  "key41": "2t6rWksy1xY8kZYKBst52mgBTiZbYf5ojvs1xa3j7NA4JCHDwLnggLyz3ZgbCRpN4wttG1NXXVwWBA34AhSgrtZP"
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
