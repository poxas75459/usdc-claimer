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
    "aFtZVjieABjLt9RpEzHKMbxE17HKS3HyuwWqT7kxry9o7PJgLpcwiJuQw6U5SEAjNhGpixoKpTwwP2SmBexa4TC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kj18mDk7DFwyyNVsBkGrim2eQUT2kMacqbCgnyZbABmpLFba2jDnVKT7rouzsFfmsNzDUZSXTS7ormmW5a6tPWt",
  "key1": "4j48iEqa6GMm4BFH2d5TrfS6caejnxJfzKGSC53BYemr7B7yf41MkQmdqRnWjNjWaLXUvwwqT7sux9viKxpZd2Mn",
  "key2": "253eN84VmpEqYxT3UEFS9z2ZGizYa7HNcAyCVmsQpGvBiQ3y5BBXjxdVRGwXUmYH59JYVGYwQ1377TQ2VqMNiXK5",
  "key3": "2Wm7Vv9ACwXeFV4AAeqFCeKffTK9RMo1iz83SHfyhteYnxegG7dbprXgNZ8jfxWFhmZvUMQeSBZstxFHhZ969Xgu",
  "key4": "2r1gsKiDUKg4rmtrRbAgrX7eQ4ND2K4zVYzLgGh9bWVJp2nbbMGTfC83HX7JMzLvUvWT5CitmCFTAV2ED6FGhV9t",
  "key5": "9eNpARkhZiRUJaBJBEbRtTf2L2ssgXJEEUmMPcYYTiFf2xWXouvrzGXGpnH9G4DsTmdQbKQDDeNUteP4G6fcrnn",
  "key6": "5JWXebfUY3VUkJrFgYFDsn48sR6BpRsGW51AreGoxKm1DJ2RL7RmjbhBeGrdThAFnm8ZVaf89AEMD7ZfJEwroxXp",
  "key7": "wFCrp3A9JiFFf1HWtsuGk6EQ63WCA2EgJ4ndrVJAtoCH6G5FPF13MYasQ66gLfFbgPsGZReC5uuTzhZHmSBFiwV",
  "key8": "2As1doq8V7bRohWrBKkZiZ9k5NVK2xu9D5DwiAGpebA6VyvQybvSq5gyTF9iN7dUXNZ48CoKQ7fVUWjmMaZpC4xW",
  "key9": "Dkd6oEHi1Gsjg6ZNA89HYaSUwqdLWYCUittLhkn2Dm55DtRUP2n5efe94c9ZRazoexm4aYZ3AyCKqE12QnGC9FR",
  "key10": "2F8dbNLcTXVT5BM3hvFcBqrujvArFXkNgpJzCS5omEC2c5MAF1qb4D9Fqu6qRwT1R3peM6k8uy73gfuMu8VGXHf5",
  "key11": "66VqB642eAfLGzFW6UySEHU69jWR3XSDU7skEMmFXyYsdQk5fhUzUuM4ETqcifrcfc1986U2Ca81uoD8VT29PS7P",
  "key12": "3HpLf227oHCTwQayiH3pZf3xZBd1RK3WMK6tRWwNqamtAprq5UdeFoUk2XmPMLjSGwJvaQ7mkx6Wm2NXR83k3e5a",
  "key13": "55QwWdzXev1sD7anX2xMUTsUnaFHkiD4YQGm3VV6M8JP8SGQ6sdeaiG2dA6ktgEneH19qT1sHsEMigJ3njivqw5j",
  "key14": "2TpxXHeEA8NFG7JbGEktC5LGWbigr7S1ALW8pY1PNCNQvtRLcrKzCauLM3JrKv4Ka3d6yPJZgKUjqdciakaPGnwR",
  "key15": "2AA5zXQAeSQaDz2RsfoNUoqJpQZWXbXWt4tkZRxBahkWgwCpkMHtMyKZPgRnWVPHm9bG8KuHsPKmjnBrhj5z5iwj",
  "key16": "Q1CsbGdLXH1EJjYbpu5Dd8Y45H4zXYVZUc9zYAM3ZaETDH5UbjXRzQZ9PNDG3xAnwdjQWbPPbF48TntCEaS9Bhk",
  "key17": "5z34Su2iJKDg6M7z8AYQKHNxHmyaVQGDJccQEBPDbC9QiLoEh2vjCeNcsH1b6pzGqbaFKbL56DVVvtdM9h4dg926",
  "key18": "5FiVkN76oJe7XqrtGyJg3zJ7E1mf3LCWB9Abv3twrfyGD8E1diVNUck1c52GzGHaG3iNfVDHnZh4dWPiEHxcK5TL",
  "key19": "5yrb6tN76jD5sg4V3mUaR9EwQ6i4e49rVGf7tUXbTBncnqSeMvDw6cJzhhqRynB3gBwaZQqfUxJs8VWen7gHk5WQ",
  "key20": "s8B1MKnqQ7JocNwFsmbCYaCMCd2BuQwQCEPUPWkt2gSmSMnG1jhie42MstzPdMJLCqaHcGE9G7hpRDg5JUkocps",
  "key21": "4J28WJjwpHBRkAyUFk2tDwoCrAv883Xo27yKhr8kt5tGFMdmcgeGMc6QqTJxukLs9LbYKLv4NCvLADwomqR4xr12",
  "key22": "3geNpJiS7Rx8uTTGotHFZjQjgXN3NWwrhnssBTYw55cqSVRorCD62SXEy2FCwWxThUHxx3dESfZk27zHUKmvmQ4B",
  "key23": "58EAbc2fsjpQCVYXALuyvL1vH7N2XJyiZ8PnuPBdw7jsGeVvoQkihQbkAj9JSP463VE3dffeLh1fus1pxbFnfXKn",
  "key24": "4JrrxgfFHcq9N9Ny5zxxXvL3sUpETpaqNCYFhwpxb38nqg6Gs9BaTdeQmciw6CKySgS6ycMjzQP2BfHw3Ar8eEqf",
  "key25": "3DbSLAuLTYt5SNVPLaU7KCb6Tzks56NLc5rFiVfe4JCij4ZUAVJfYHKRYfx9Fi3tnfCK9AKJ4sdbHVWruUUwLhLp",
  "key26": "2PPknbcXDKRPr9d7NXfp2yPxH6tcgK2FqsRUKCEgAHbzmGL7WBzRZaXoR4xafxy2PS4Q9pZWjd59ehU8sJRPfQxz",
  "key27": "2uJMUSHLXxy4Xj94igUcbPtH3bGTCGgn3x6x2764f3L5N9VGdJYuE1nBCE3kc9dnSJWkYbsEWfGDRdpNRQWsPNcW",
  "key28": "2KG5Ktx5fyzLSEAacHHSXBkBwDrdgWD9GnZ47dUVEC4q6iCU79AAx1n9isa37V86BGhARXGRNXD7sspM2UxpeEwD",
  "key29": "2rhnw8S9BUpZGrQV8HFG83T26vnyE9SrcpMmTP7r3ZCjEQiZpQgdDu1ukRZGZ2GVMghFTWkxdbmoBDwyJ2vjUtHG",
  "key30": "sLcpFRmPiSEFURvbaQ9pmyVka8i8CMVBjeF1foTEMWtwGCijb7FEJB1xxNKt6yufDicdcQT5P5b5f8NPiomPSPw",
  "key31": "61FtG5cyi3xBU8Uot5379bUiip2zs3jbF6o2G645jxGhrkviMEjLcCSvZaAsTZoSBegS3jtEzp7Kj3eTwQk6HEd3",
  "key32": "4H8LuirR6bCKJdXbYLfKjqgUoT4HcAnjWdFAsvphTMiZixMTQ6YhVzwMhyszaf5R2perEQqZVX9XaNTZjGgR1jTj",
  "key33": "4RyqwZxkDyuyT63ytGHtwgLK3Rfh97Ss7F9jzYJsSERw2MjFW2BxH6Vd4dsHMmU2X33m14YJ947nPpHcFYj66o6g",
  "key34": "J3KceVcjzRVaBmxUqhZUYhZtm9dxbYyDeivGr4UvHBfeiA1mf8KH4CEs8kFkGaJmrARMGPB6DsSBNywTWZpycCY",
  "key35": "2SNpcC6Kfzdy7xxDUCg1Db7UZDLQWE66r7s2bPadqj9Pkf9xBqAc3FY1nqGcSrpTQGUFJUQcP2o4KCqkqqAQGdYm",
  "key36": "otmFfhHykc7ZtiCcebXfMHxmShp16vsRFYz45e878rx7BAEhMfnxpkbTX1JzkjAsNT7FZSgEByu7dYcQZQVoXmY",
  "key37": "5thgoYUzZKXmbj814Yf7Xgozr5qga156aQBhD964eNChySf9YVYiggXqPtgJQY1dHfVYzTBEfGMC9iKpvXyZM8Tx"
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
