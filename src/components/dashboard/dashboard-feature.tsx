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
    "D6A6PYQh8KWMJYBz21JJaBEgTKqJ1mh3mhV5psFNW37iasM8JtkFTqrhMCwTgXVZTEC93tLWshUJDzZsrEuYL5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LNA9cmGRLTyz4PmfHpxjHJL3VMobzHAstKNvCW8XK58BVnZkWQnmTsaq7a2QcCkFWdyVev9FZpxeQ9G2fpk8GZS",
  "key1": "3PUoNAS8wQYZJqa6ordD8ybro2wcYmAa5pHMgQ8GJzRAsEFkw3M5ictf9zaL14gDuoTZsTacXPfJMimhNQrX3R9g",
  "key2": "2BJCTCzBbsEgrc6RtFpYVVgVCp8mfVfeorsqrpydEETUWW2Se1Gx31MvRqMsVHCCi3DfepY5rUwbAR3g4h4T8uFG",
  "key3": "37Vd4pZzH7AXM8WghmWnuu1Lxy3Nt2t3FigdWZ6gVG69QADqky4VPpx38Qg971a5asDiakLQWrksDcxQj2nWxJ6m",
  "key4": "3WdgnUH7FEdeusBt9BhjkQzLm6C5LjqLZkTcppf8a6aWCZGBacGawN6SreSzWivmLdHMa3ZZhHDUna3B6tdCkiE3",
  "key5": "29gKQHSFsGonuKstCGWVuMNsQVRoWUCLKbjd6Af3jbf4oSx6YuoaXt8prUPXTq2qhx9QynWvyqmocUyCf2x5Nfhe",
  "key6": "b9pNDyxS92vXCFGaDRauTJKZUoRWqbSwE5ZtpJUKoqJFKBHJy2quwPdes5MnDCfCt3DBufiLvKes1Yn3xrdDwVY",
  "key7": "nDwdrCyWozZPGQWor1s4awHM6EVZMdpdWX6dXmCbPSgt5CCyQENKSBuiePKs2zgXhCW6bsEsSYfwyyxkd1zY1Sq",
  "key8": "5eVBjfw5RjFtMoghcnBkLvgsFSsX1jr9t7m7FG66W21hqkpG7yEqTz8KGAg8Sr2jv96MqgcgoUWsGac9ShMjR19M",
  "key9": "628PBn2LtN5xcqttB5jNb5ygeuCrbR4H7iyMa92S7RWQUVsBE8VgL8RhPAEXpbxF9BB6ysLujTFKSF3qdiQa64d",
  "key10": "4d45EvYzPr8oqGC4c7Wjqbt18HKqm3HhDhv9opPfLdmPmfoctjNJGgVaNh6qojhRKppggnJBNDCexnwVhzFFRB3P",
  "key11": "43h8oKk9EKPjVouYzmgUA5ekAxvaESy4sKLfw6cE8JXUvwjiY8KeieeQWwdTgw3ZTq5zHMLJWBeHDpGggd8posRq",
  "key12": "3tvHcCcBYwpc2jYEYUpnPCGENu5BuAo3QLQPUpvC42q9ABgoXEuewmrKVw54qciQkgUQCiDuMW9j5Getc5JJzwDC",
  "key13": "4QvizvEvoLzQUk4JuVjP1Ln2mJTbQkaTL2TmyeFsgc7eZJ982qJDT9Gkg7xhHm2nbiAcqy8ExnB1m28jomTX56yV",
  "key14": "4BkMQmYuLVGj9iMvoHTtkdELXKPWbrvhyJXDq2E5Cu46sPfP6DPBPMTeP7KED2xzxEzrfnkagHHVLYRbhzc7G6gu",
  "key15": "DfrKMNNmH8JPCnAVpuSvavV2TeMhkFQBcqrsKdJo3EWVUsDtRfUnL5455odmarkPPqzpUyrmvMb5A4mkW2qjKcW",
  "key16": "5Zp4y946X1nMwqcwv2YeZyDuGK85S5p6UzM6pZZF6bwu1Cr3AuFymjPX7q9UHM6sCqgU2JeSbzTaVz9xvtzZrrkn",
  "key17": "R7BkVjbVs3A12JKjvsiHJWkyPhP6fqxZeTDvg4aizGkpfzJWMwxRaSeDvkveHoQGyqmfoM6m9sSVHvnMAfavijS",
  "key18": "2JdLTmzX8mW7HSHCyHhamLRQEQizUEiFCueFTtnLqVq6fa5QHY9dLDPCSHh2Psv7s9y9hykcbX62q9bJqCeK7yue",
  "key19": "3rjyYoDXP5EFxRJYzH2dgFRQNSGKhqkDm9H3nrvNmdYP9U1YVULftRAKBRWH2eF47T6eZCdA1LnqPHMhpd3QRmTm",
  "key20": "21wd13a4oPDEgx5XBMNS65fAjPTjTPEGTUkt2ivBcjCSTgwoQTsQPphPd2NyKyjdVFZUQsF4Zv8wFyiDC4RWAAAJ",
  "key21": "4GotsdkLTGG4pJNiFQXV2oRUD2eBPpRSdidjHkDgYRmDj6j4nwFJUXnvgGSehacMKLFar44osPTDdDUn1reCHXsh",
  "key22": "HMkKMpv8XQM6qDUnZY67MnyeYkMJqvZXWEtAB5EvoAFJ66e3FzqXtescQkr9wTrbBpGdmizfhiwZHc2mmujTpt4",
  "key23": "5ucryiLbafebDJXqTrdPLCR1fqVyED7WerAhDEtEitkjAPtFHpSTzEkYffMWK9MpfehoFA6tT9TrdJGHaGivEqys",
  "key24": "3WFRcpmWuyyhgVWusSkDqaYJFWpRRDMpFrGFXjFrscjQ8ujAJWWjGHw8vStFM2gCmPw3PJGHPq6iMnMocfXdijgP",
  "key25": "3PoYNSiGr5Ph4xq3xaTdWL4RidYRaT6YBwF8vEP43ZiqRMQoYAQwLy4KiYRy8EGbu2a29tyFXZ9FLJk8ZkGvNxp5",
  "key26": "A86ZL3JKxRokZuwxj2o5it6yJbg1gg11mCMEo4FvwBQ2c2xTdS8KgTF4Ng32kUHVq4KTh7HdSQVe6Fhf226jn2S",
  "key27": "4L8GmqVfqSADt3tsv6To9yifqUVa58MvJVtXiNKvVPBqh28zKAJpunaaxvDFW4wwnJZmJUFp5RzbMb7WccXXcsqZ",
  "key28": "4qPubwbHbY2Ngw3mn1GcBBP41ibGbzJCv98HPoGxocuuHMMN9HJUMbYkT9RUYcCGxv8GKutDr9fSqTaHM9LZdJKb",
  "key29": "2NDji1qxQkYh6B25bkYzCiSSiSMYeUZBxTYeHE6J8gaUCFy5tUhKcw8dZsTLsVdm7XrCYN7ixbMQ95gWuUCnfHez",
  "key30": "2hgXrFTxjHcDUEaMxCEahjpYZutzv5V55uZfZFG6mnvKSSwuM6vEPsH2hyuKcSs6h2MPjm1wQas3ett4QMrsuUKe",
  "key31": "3QgKV9xtbViZVR3FBU9euonFpqTG3AJPnskv1N8pe3zK6x4y3oNg2WNdkgKJHzaqVNWWh9hvcV7fDZDysjAUohVK",
  "key32": "5xiKddqfRrPuWWLDgAWkZmxZacsZ8fj7Jb75mv31P4pRKWeNWUzcxhVb96CobCb8kvkQosvStB1WJCz1pq5f7uGa",
  "key33": "5KRm8dJxnHBA12hwtcuZ783ZE4wUhaVJVCoyNpA7bmz1YB3sPunE7AXbvanLpNDV1k34RB4ePu8u9DYbCXPbE8SN",
  "key34": "MQ9AWVtayX5wvDBysDjXo9RPRUrheUayKXukWVpPxf7r2hVm9DX19hxVPjhcjnJY2exC3ui9bcSQeNbX6gBeD78",
  "key35": "6384eeTYXzyCUwMq2ywbX2SqNiQjp7EhWtSgD1MVLdu71U4nx7rYZxrDvDrxJFZEwGcVk4PdD5a6YGXZDjDkctYe",
  "key36": "2U2iaLLmKGL36CLbYAyqfFfpVDAZ5Pyycx7d43cWk4mSSEsFAeqN8MRFVVixoyk7Q1UBYbfBy9Q3qPXvoNvkdbmt",
  "key37": "WmFjTYbGiCXEP7NT1cG2QBHTfhrQqwhG6Z4RAqvz39RgnAaYqnEMY8K27QSMoJrMo2NL867PNLbtiho6ckRoQ8R",
  "key38": "2V1HZoueyLaD7J9gHWCy37TnJkvGp2r4rWdQzhFV8MXzCVaPEETaLFxESMSNzLSUpQ1KPpXz7jwRjKcYh16aKnu8",
  "key39": "2DT9ujATpUbFSVNP8n5sGzoERdFzmj8BRf7nbPNtHzx3seTJk4qCudT8nHg7CDv5fpLVcvjFAVLDhHbYJQa5GA1b",
  "key40": "9mWpFjs2UzFMBXfEPvSErtg5kxfaQtDdRBYGBbkZ6kAWvh5aLYYys2D6gmsWU25MR3YjGxtsK9Tmv9KKB8sN55S",
  "key41": "3EDUEc3Lg19eP3y3fhLJhm2VDvFZmRP5xrz2pMhhFzeL7djGyZpD9czL9YiEeNq6UBK55HAGGjsfdn74GPp9xNCJ"
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
