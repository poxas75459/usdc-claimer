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
    "5yGnpYPNi2fqfKgZK7tjgZFYsFwoTH9PSsBCe6CqXXsMWnv1udkNV9Qpjs4qQfFbyeqRg4WceL758RtnkqysWBZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J3xdaKE9NKmrsghSNFrVMJSK6L2KQoMTPWJW7gyi4HhufVgm1owHuf5mYaJvVXQEW4L78ZaSSEcH9BGgig2yVqt",
  "key1": "5fAPEdw9yaHcfXuoHVfoeHDsWcKmiWszV7jYUbYXQiAVLksakiHbPAK7f1heEPVAYUzNEy9PQL88beHQ3J27m5Fx",
  "key2": "5egEhA4GNoLNDFV91YJdv6BT7cxNRkNMtZf8FWXbXNVuMwUi25yg6AuHYNPcb9uAW8y9JW9JtZ7B6wPJjYydfjxC",
  "key3": "TyB5E5oY5B23SeYBwttAWLtVFHqFUTL4XzudGRDELRxZE8t19FiBiknffTnuXD2G1FqCi7dcb4NmenxgyePgWsz",
  "key4": "3mx9Sga81cjZnoBpBN4Ab6G2HUbbzPumwnjGKdy7Y6KdCdyRMLM2fUx6bHWa1q49iMTmUoeNyZJe6aAw73TX9461",
  "key5": "H3rjPncRNeUoAxT5PcxGTkgGhp5omhHTbhxK4fFNi8tNaDNJ2iu9KSEg99LubSJp3VJcMQE7JcadXFArpouo4eN",
  "key6": "29Kd2yzpMP56W4c9EHjxfhjaoC1vgHiR2tKGiHBM9pn747saRNLhxBL8raZH7qHLvDL21Dy8VWhjtbBhaoSALFuY",
  "key7": "LardPp8xa8Dm5ZPsvPYvRU9Jxo3cEBwbKacdFUjZi9J3whtZ5m26c7CdMYQP63KYvsc9VMHAaTgVnvgPo94LXNE",
  "key8": "2UAjiygK2xQzc35nf7JWyADwCAkS35UZCt2WTy8pxc786cq5SePF79mHVQsKut3yGcNmAtKUa25Detgihp6CpdfR",
  "key9": "5iehCbB7zpCi9A9mS6TAVhs7T8cPcBXFTMBP1VfRio2WtFnGSgVcPdE7Pd12Ee16uxmVcutSv3QJqLvRxkjxqpxv",
  "key10": "3Zotmq5RKueg16LKk2BsgRjUvitDYAeguLHBbpzZKGMsm8LbQDKw1VBuwS2w4wCpLjYiugJt3GCyTjFE6F67S6pR",
  "key11": "2jvcBHJaGGrX79ydhHXfKoEkfcVLZBTJQQ16hdEWjBQi2B1p9pYoCxTKj3ietwejvi31STuTezhxFka1hLt8zMCU",
  "key12": "5xWqXKyK5EX35Xysj2oJX6YCsJYPEAgU9S7BF3suApwNB5nwEEMyU1i9QSiiT1PJcNabYgdXEowzm5kh6XdU3Go",
  "key13": "2DtVvA25ZuibZH3BNTKxfKDXZQrMR3iSFiwWCKaPtfdSZCNZimtkpfb6GGdAr4cdPmmx2utyssw4kEVYVXLmQZw",
  "key14": "3iMwd89vnP95rK3dFMmkfYray1YqWNr8ykfiusTFdwoHjc5JWy569TXjqY4vuEgeQCEbY7j3gNehCnGjaDYRn1EG",
  "key15": "4de6FbkuGrvJDYjyystooR9oJ6u34eA43YYoY6AKoMURmAkg2S1prA5DNwYmcBC5FMn2APhcjp3MLyYVgZ46MGVK",
  "key16": "5bsoJKwkFMDt3Z3pY13N6zQqDMWj2NCYXGaSMb8v7yVRzmZkSrtqu2LCqBDPDfuEhJfrR572VV3KryyXMJCkV7zB",
  "key17": "2ZQwMsUGEGTnxrPh3mnhpbsUq6uNXkMELW3acZ3QxNrmWWUnjcErSLy6bCbJFQem4Gw1BHn5WgVicYNMmSWPUan",
  "key18": "2F8zivtiXMm6hp49BJyvSqHdsYYAN1a9jiBRWJzJaSC5vuGdctLt6FDhgUhST8G7YkeA4czS164goNTfUtYK68ti",
  "key19": "67CxYNCshEg35o2RAxX1gExjho8DcAMTwjLjWATt9YXfu2XCWBYZMKgKkda8CQxULenLD7Tp5rV5bVxZpDDG5Poy",
  "key20": "3UmC5pF9G4PaxaTor2iEmnWk92wixyQn1BEaPpiN9b1tCK2wKD6Nep79bQ2GvPAp7wBaK4w4kreyAbbEiXyLbRsx",
  "key21": "3dRy5U52BVbtpcnxNEe9uibFCqMaguaZk8ZfYCbN38GbwPgJQD2KFxjP7UVWoQv6WdWC7gqNEVHMFFJXEPp1xBpo",
  "key22": "4kXaQF3Awp2MP7972ekFeYpwLwh4EtjS4PFsvLuXS8kspmj1NDaYv343kCvTTauLbvMZS64no13Ju2B5xd3gf5B7",
  "key23": "2JcFKQUMCSD5LLM7TvogcVasG3E4W9nivKtjPSRZagDpWmQnvxwsn8S5UFbHkoEveYmKkk39HM1RdjjoGtQukyYi",
  "key24": "nYf9498MemEkYYJ1yG2qpnyNv3KaVQd72YL7A66rU8ujnukTPJvz5SkbrzU13oBdfcEYmdTruaHVkFJ9hY6HuDb",
  "key25": "57zLpH3j5yFzduc6MkRRL6bJSVazhjMPUtDKd8UoDk6a7cJpqFX4ndJ4YJYofAtaMQe7VXPRax7x8LoUmNoZ84nC",
  "key26": "2eo849NGYF8e7igQyLT8Stg4Xov92kUHEGArBEMZDjnk932S3MAPLoAxMrbaDXjmNnWN1HKPyTRggXzyCKExXZq2",
  "key27": "2UDyA7MpikmporCnarp8w1jJRYm3YGfSvPopk52XZvJWtV2Jenam5zriPoFWJTWZZSQ747rB2yoH9dtWQNryybSz",
  "key28": "5DuxQAnjYyzcd9dfAHLB6vPiXZGG6dGgSWPn7RPKbQNmzfEFJkfEmQuFGJcTLrvZBATN5ShJMoDg4vTsuJXjHWMW",
  "key29": "3S65Yxw9hR9mvSSFGJqJsKb2sgFWpofJniWvq1Tf4EAeRgdTf8pS18uQEWVt54nVEmR6YBT9KNNxtj5EuezqLCCB",
  "key30": "2whnaATtsNQ5XYz58esAPzpJusXy8kcoBrRHnvWF72gkvwjDcKj9C7soYNtVe94bnLRzvbPRt7bftCEyj3RSVcCT",
  "key31": "4NWa4u43pX6tynifwQZkeAExRjRWJ2gJxof3E2wNtQNmrdYxZuSdTquTzhBD3jg9TnDHGByeE4Bojptq8LwVgCaE",
  "key32": "31UdwfABk3fP3jLJKsux8iGdM2gRVHsFow8wX8mDE3vUj8jQFt7QvNBCo4faCH2Uk5RioD4SNCdBaUTRqwzCase7",
  "key33": "4es3JVhNkKCP9wSmdrtQKU7KEKpt4Qnb5f1WWN5ZfMEmBr1h7LPfK4UmH7cUFZPt7P24V9JBsjsJfUZmekZUuazn",
  "key34": "4MXur7WaDCk6vFYVSrFg6sRCNPXoyvaScNatLEcc8sy6HXQpNXuFK5cRJVAFZEK8T4ftpYCgkSvNjCmDS8n2YKph",
  "key35": "2YP9SAwLYCxxpf3LMmku2yoRGroJj1r1VUqfU4E8M1Rf39Ck4z1Q3tuVa7WGKgMHKPZnw392sF6Xu4kQuTiGMP8Q",
  "key36": "kSnhPZC7aTozFkWwm9vCRyKjaRhWaRVRAZguGGcKQwY4q6bGAeZazw2rKfaGFXa8HYEDnPKdmahQQRDRVCrzG1u",
  "key37": "UnEmeABp1D8WEBxY5BCGdMhku8d5M3L2GrDmNQS6HNixtvCuyjmfgEshMXzhvxQGadWM4qYsv4qoHZKUGNwRZpD",
  "key38": "MSnvt1qFninonFFGKL9HCUsNx6KG3uhcoRWq354ZUZnN7cefCvtAKnHXCLUCWSaHKZ2AM82Jyt5jHQhWvvJN1is",
  "key39": "cvP4NS1JpwwaE3bby6FuVg1AKdPGjjhvp3sYbtzz2WkVWXJonkXhRjdHSxXTp1rLXwSSQ3CCxJiYedghUAU7xsx",
  "key40": "4UryV4hYryjmrnfc7Nh6rPZoEHXiEkQ4Ab741gWW5cnLXbEPJtJcC1xzvvu68c7GPNh4db67QLBRU5o9xZJkpxc5",
  "key41": "4ZCZuMuWZV4S59vAprMHPDvbwbLA3c8uTeEmZUJ8GZKF7Uqpp8ZXx9od3qRKpyJvxA5NTviuHGjS6k3Pb4BwTgts",
  "key42": "BNVB6JVE64byaHWMS3oNiqZU2kWhNd9MCt6XKA4oiAV3juWjZE8baCNfwVEFMiHeVTAgo4FyXmbk11GRdpnYcTo",
  "key43": "2LVb64fsniQPVaMDTvMiD1eiADJ7cmZc9V6uTqSLSnwaeMaa2QF31MrfiLFCmBY6jqMGmpqpJoVd7Wpf69oQHzrF",
  "key44": "2PnsFbtLpc9Vmq6ToCACZS3wbSBzpWs33XY6z7Pt2rYbyqv1ito5D3aJ2jb5nfaBbem9sUtxjHQ6pbiFcfvLGq95"
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
