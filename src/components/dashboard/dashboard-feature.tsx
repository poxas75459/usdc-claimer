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
    "2RoEWn2gukw6vwuEEHj6ZXeFrZAC6Dpd15jAEiLbm1ByZ8e8tpTXmMutRcnQVPEieNx2PW2iBDSAK1tjQx5uxbQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SwLAxbkoHAgXAuKiUvWsszZyByZumbHbcF1GyogKbbUEJxevqwCXPeJSw47srbKwTq6kv1Ks4cDQhvgBAwLMzDP",
  "key1": "4BdJ2GjJ9HnHAmXQUL2xyeK4yy2sEvAj8iLFL6kGJCsM8F12ine1TFWVtMePY9PtQPqFdQyAJNfJugjfDttJyMFb",
  "key2": "4MeQVWTighbM4aBSaJiu3y9CD848NpScDxkejCUNneXGGgHkmBBMGypbd89rF3sRTzwRjMA1R8H17HE3GjHHj1W9",
  "key3": "2ucN89LvA8aLbBPFskzTHkZ7pCK5bSozBfDiHgEyw1Y4pFWhwPdpbrYVLDY94Bt4arKSHJef5LSXCwouRmEhNPMw",
  "key4": "4aqiDjH5t9CSMj9Ma95TYwBFyGTPWv1hisg2YgptKKHeMJDBBe2bkpYHbikFdRHcgrHMT43tW6XJQg1gPioeXaWB",
  "key5": "4ZSgawnQxYg2FMiThuwBnDc7vv8McwfsWagTLcGQKXTRXrim1Ru1RHbNwUHneFDZ6wtyFnZtMcaFRhbfF9WnRiEE",
  "key6": "391eyxLtyPnx8p7VQx3mQSPDNv9rdfGUMi8vUNMpqLPSP1VQkt9kRXuYBEUsvY7nYePavSgbjZtbERT3Np2DtKX8",
  "key7": "3o2uTtg3SRhS8xLxBY59yiGrwR2ZhufsezV3SLS6bGxvhMwtLqTxaFZdr2AT4iAQ6RFchThkgSbQjt5nMNZWp3nE",
  "key8": "2f4Zp7CoQoPm33qBPkcb8T3s1x1gAvWz6YNyLFrX2XVi47tePKXFcMjQnnB8iYXEbTn9Zd957Laswx7NZybZYdJJ",
  "key9": "m3kH6ywCcxmRP7FJ856Rorz447iEUULtsenApFSVeWzGHN3b1ZDzxMGRkfnQvGTUr3Lo2ychPn4VBganzLYnEkX",
  "key10": "4YRZV4HEi3XXyXNzigeizz6YByAFTmeczLm9TP2PivPMRgf7DEXpGxjQBysFyp6PyfWmNZ2ycCBSn9KPQZrY8GSw",
  "key11": "61qGBTefUqQg5aHajRgDN8UN1e5zXFWkFEzJxNWHc5rLUWSJTGfGkNZPg5roqML7aiPdSjvJJYL2ZrYgsverHyKz",
  "key12": "31bSHp597mfb2v9NVfEHZjeLTPqE8ASJV4KCtA4eALbc4WfPb91RzJVXgMbS5nVCKLWVGcsJSxLmtepwe1dficmY",
  "key13": "RhyFXoJAG6bk9eyJneEWpT4z2TySijmgFenJH6sUzQRW93DWw26VChQiNNPEWdCcMp9zf25ScvHz44hvFGojqKT",
  "key14": "VeyJoKEY5T9dtXW7CeaprWVYm8QbKYA5NeMAs6NetmAhw522brK7LczvQmUSPy8dbaqQmbnXuHc7ANCSrM3JFgC",
  "key15": "QqqrPksxw68ubMVgUP9v14GkS94i4p8scfjyVuePcBjVNTpY4KzXoF8JkviYNNLXiTRAmGczVN5RYKS3hKhnLj3",
  "key16": "2K5n8zomHmNHVgzxTZJrbpQNjgnr63iKNkfuZMR7XmE2EzKuRN9eYpdzjZiXB6UCkaKKhMGjK5RfQVdBAyjPqoBC",
  "key17": "3JNH8vUHDpJtsPthp6KbzVneddq6VHEynk5YkcUw4xEmk1AQfoXPAf4FJcTZPmXDJoGRdjN2PXEGEw6vGcqJuAFu",
  "key18": "57ACW5wvjkKZ5NYsRxnnEMG6FS3JjN4N1VKTv5Nsce4UpgbmwSmJvLheA6bdd4nmqhFPjqKFFtgCwPzagAmfLDHt",
  "key19": "gnChAWV8EB9S8NGLCLaAqgFEQfrG5BGukLQEHrTYDfKvsQosmEtnerJwWhRsUn3wgbLHjkvmjgtzMjiCjvpquMY",
  "key20": "3dBA42X9hnd4U1JkLs8B9inMoCm4pZfTuo3Kp29ndyUyiX81Hx8dRqpZPkTyQV4CPKvtMouDbGUx74NHSedravfN",
  "key21": "eiTEcu5soSNjDRvBemXmMbncvdUJivqZVePkJtcNg2cdYzgsQbbwvVmdSrCq7jbygi4A1rGdVJqEFRsrGUZ2wkp",
  "key22": "5TvFCvwuf7AYckRebHqm3QKFK2bvn3XNXpTBzmRmeDtjJN7CUPDuNx7haW8bQYLP6Ru7NoA6HgpfLRo8tJisVPKu",
  "key23": "2m74PftWZs2UhFWJu2CRL5XPWjDLaR2qw6XJARVgxva2z3B79DGJj1CpCyJXHQ9PkaiX91AP3AB7bLU46vBrRqbp",
  "key24": "2kFHc2jfJp5ggRytbFoswy1L47oZqc9yPJ211Cug9LtmmavFDQzNHCxpCDmvd2i4xYq5ztaGLE6jNmmTurmd7H3n",
  "key25": "4KJRHLJJhSYuPNFtQtheCsjWdZNcX2GS66ZLXbihi5vS9FrRWK4e4Wrkjj6VTPJkXb5Ruufwavc6YE4tigtqCL9c",
  "key26": "5vZpCmzCZyXm38pSC3yRxPsLgUzZDmEZ6dP412AEkj9TqpbPy5Cgg8eESkjSmATop9AQ7bhgJ7xtUt6iYATP1Tvc",
  "key27": "5mWy5SvzTim1AVjMTgBysrtirG1TjBqCyXEmJLteGVizkWcfumtuFeRfkxtNc43Ejx6MUmZ9nJdFH6KvNpW7xzLY",
  "key28": "4WBbPq6DRX9Zx1U4bjAbcc6LSR4uToWM9FBJqEyZ6AbAJTPg3RDhhiYSk2ThRMqfy8DxVNFXCuX3rvaRXGuvZZvM",
  "key29": "4zu2MXAGnmcPutYbV1B4xwh5o8Pf3DqDniU2JjLeST4UxAsxY6NxXvuaTKzmwpBu8QY7qjtsBhAPFeU6yE8Y7Ai2",
  "key30": "66FCYB1uVQLd7VP3VcqCnrD2oYMUVqBZJf6KPoYz1hDMBkf1ZsQoyoQ84SpiSLyBQxqmeSV2UuJatzQnz2RPeic9",
  "key31": "239T6DYmRV7qs2nXjZLMRbAjnFaMWRYuheaReXYvyDeaYCro8Ybh2Bm7g7PcMwT6UXvBYku9H4m95583WH6bQh5e",
  "key32": "4RAfVqGVgyCfQi8LakMGe2cZZbkjVpUNQXPhhfAcsEpqKWC77mvjPfAReE4QS2h1hdBj1x4NWDKLfKJ5gHzuVT7L",
  "key33": "3ZJ5hgQoni3y6jtQSAEvbcejFNSNiQfxfpZnrF6c4wrh1DZzqgLY7huJHH5XJnbHRNgtaFoCQ2rATT6wpXiMKVLX",
  "key34": "2FqKq9oF69aheWfULGNdsJ1T34wFu4kpeBmZ2CLe1RegHmpBeVounqT4yp3brXixqnTBFr9uR2zM5evDR8CtkCKv",
  "key35": "2fjfBnpibGr6YwP3jELjd9qSkVwf1ocX5CzPGtRYd1i2h4AUrNupLioxdtew6Zb5QJFiwA9PYdqAkjwjgE5Yk5h7",
  "key36": "Phuorzu6KD2W1LeTo5qAHX4y9YvqArHBMVZcnpEpn6uhHSMPv1rw2T7ku57AWxT218Zr4bZxpZRYUd63Qb3ZsdQ",
  "key37": "3QHfZ3nvwEvJ7enXMva1m5Vrfnz12ig5nYzT1AazhGmm8WXXJEMPRXFzaetCGgEU4JxTrKC9JG1bWTVxahVbrAmr",
  "key38": "5NCE9PztfPcexrGc6L2hbGczPJnpzd8FNpj3E45SckfdvKQaF5yMKvLkVz5XB5AfLTvho9GJF6fZatyGbjfvn21U",
  "key39": "3rfZ7an7fpftoaUcZns7xPTkDeFTYEhKfwNLVd4KMpBCNwX5uL6H59feUzuHbmLGMnMfSUeNftE3tqh1AWRbth9o",
  "key40": "SzPk6msPALZSx7gaud5CW4rzpg4AA7JEDn8CakepMkdvsxSuyXK9fmvJH46UjySnWw1UnoqGBhw66ddKpw1SRrQ",
  "key41": "4iD146giHsfjSedeWTnceN6n6f11JPoedWPorqZkKescvyCJtn4QuEvczEhogVkS98Ec1RHy7taWaBqPaQfNcRsr"
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
