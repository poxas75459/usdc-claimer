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
    "ngb5ghSyzVrEk5QCiZnFJcRzh7Dkq7BqnCPVs8tWqbuqSqcuR75ijWsi7UJExmyXnut5E9bL8uaQQDUGzJ4e3LA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CMw3FoUDJrC5HqXRqdDpzijCAYGJoiXBagqzcCSkcN6ZWWk13vQKWh6AnkKenre5WZF95mpqQMxCYKoWUV5GvPw",
  "key1": "5QBLZnr6UvbHFRjgByEypBdvPbtJvVkUYL2hGoiBDXmZubM4WVboTyim48aaHLayfoZd15UdrKWsztooLRnkjVNn",
  "key2": "4oCf2xUdedB3RLUMRiGGApaiobqP5LfJviG4qmvZWfgtxZ67a324a8j8daU5f31tBi6TPo3P3fo3a8xKqAjZsAEr",
  "key3": "3reQqM71PTjo59DAajNjoqHRk9ebu4dycbEZA3sFSUhDgD9EPuNPZ8StJr4km3YDhxteMDQ6hTXx38veKZWNkDxD",
  "key4": "5HSPHSDz1G1jEQ9XhEEgByYe2SFZBEMM73D5QhhCWxoDApuAqGeFWj8NZNdm6Wsdm43AsXP5wYr7KxMwxD9aS62T",
  "key5": "3WpotVEBysWMXfAB4FDD9ymYAWqdKhFrsuZoxooGxwvsTpiw8HtwX5sRkGGtyF6dJSdC5hBdh86EVt4B1ro9iyaB",
  "key6": "5itukPq9JqFsLWJBkfijBwBUmaeqRVw84VwNWh5PdQK1pHjpJDqVNU1VMqTuZ5Wgg1ZVDKghB4mjYx9RC6U4L3Gz",
  "key7": "122x72ThCnXjvdiXx4re1XhrbSXa6T9MpoviJyNkyEbbfxMYZbP8ba7vKRwA18o9GzEU3tWrC1DMeJDZKnbq4ipT",
  "key8": "QX2FHwwKDXhYzHErZ3qKujvgQxHVcJRi16u9haoLQjxxoVcVYiDB8uAtUE3MQ89HaT8HZSNBqKGYBizjhQ8uvzy",
  "key9": "5EXY89FnavLkaMF81CUC7bCzCizdqGu3QiqBiqnFLpXNYagi4TEybKVMRQzo8XqhpnrhJWkhUkXGVZWDXXHrJU21",
  "key10": "3LUS8p3SBsGRVTiswkMabL1Mn29u7B8wu1H35XqCc3QgfdhoYC7K613ov45aisTK2TRPHxomGgp5SPWgo6quXSCP",
  "key11": "4EXhMXX6YjUJy3HnmHJziVeDyXeCqcmLU67q2tGUv8vpfrrFhRBvyVuiRTpA4AEBAMcZjUFcifmsNxg7a4LV24BM",
  "key12": "5pGtN5EXk3z68xr1C5eVDMwXPyi8X46RWL4Y8PCWTrtJU3eaAgTALDVYShaRZQcJ8upqsHQPaprEtuivtFg815Pg",
  "key13": "57HSZmDJ679VfZ7uWmqmUJKbgrroawUkBXNiPffrF4wBp38HKNbZzr85BAFcEiHGZDeTGqQzgJF69xa1C7gwYd2j",
  "key14": "3CnV42NMRG3x29tGSZfvwypveCsqxkV9J2i4A4jvggQGYTa7tMcsKR9bRwnBpcHmdVMaAaxo3oapMZYiHQiHuCBX",
  "key15": "4qPepSvGL2i8MKB6mskjycodY9jviTWvNYo7fy6pv7QH4Cw7frdCa3oWZyNLSGhwp5Q5dsj3n1VS7ErVWwBMRbjb",
  "key16": "2aPMaJmhBJt5cgSPr8Vcg97x53G3JAeRPQjsVc4euyoZoy42N6UGCU7CKFbM8VpZfQixL3N6ujwQQifQqaQmMjFS",
  "key17": "2GYc4cQdBCLzuKEp6NmBj3vtV6dMASbMsjjyoBmG2LxKuJq3aez2t4ucTDPjoaKQDPuay6jf7z9tDmnPyAvEgYRK",
  "key18": "ogfrr9XJKe2SLX9wWZr2wzqBfXfWLkf26ccUAtL2tPQbrexaD3VRUapGZYJ16NR6HgW2VtrVuDs4wtfVDdyC2SU",
  "key19": "5y57xVB61hUCR7t27sLdmjnJPyJkSgCgHJ9FZvCcY63gZGF2XyNnE8Mg8vZeGvv5L3FiqeUBZcg9cp13J5kzYWNU",
  "key20": "46XgvAFPHPmNPsQLE3NgbkdR8CkwLDWfsZ5vHqctNh5Rbmg8aP61L2TWDxUU4hyXBVRDiNkJnqMTv8HsvGz9P4UC",
  "key21": "FmAnyGyLZhX6ekAhkvyeFeB9ToFhemDzW6x5v96ygGc8oeWDyDDfA5jzJSK5CyU2gLv4VmmJswdeJm24aYGe9sn",
  "key22": "ouE8jNtvWVseWfYjMRycCUHzjQosHMrRpXRfw1EnKMbcWW27dmu5A4FxVcYuTASSDEA3tawNvXmDYBkcqU54q8H",
  "key23": "nxdTr6RKDn4Wu4T7DVDHVZ3EqpxjAquvivubDEK6Ro1cHx683itbCMVoGzb9ABXVY6vs5Yh4FcqUMineFrviQzo",
  "key24": "k36EoUL7jMwfx76zGP1PSDrLX5H6PU1C3KPxCJMNs27Ag7hgmGHFi8Uf38TuLHxuLG4bBwPqXvDuJMJfcxxhEKy",
  "key25": "4WvKhUiqSDRc9AyARt9xBJyitgW4z5qrfXu5zFT2RYujd2A4L6MCxG7Ey3JEms7hmfmHBQhjkYnsB6J1XFEYB6JG",
  "key26": "5vjDzYUJ4jXxKb7CJ1jaiYsBLbBDRRG8h7NiDhGgZQaCP7hfFWyf9KvSvBbJ2BkrLyNhyR94ggoPUSDaEA4Ceh6X",
  "key27": "4okL8FyREpq1PmtTmoN8FoRGjpJpW9nyTL3cayypUmj5R31Azn7vzKJpZwPTRFEns4tZcjAkSxkVXqWDwwmFL1Bd",
  "key28": "5vGCKu7p6smdoFA5z76qtFQrxCTEqDhWMTjCU9UMmYYFgK1khxutotpjkzNBFCDNYZZKV21NRMzk45Bd5aobhP9h",
  "key29": "2RCTTeEAy7Ft6dAPpdtDhRkmNPozU6jTAmPX2pgSByExEX9CbZ4Q17qjozauuEZR9HcbKRqZXoQgKo7Uj4bfjnkv",
  "key30": "3NNBto7nS2zpi6jZFowEFQxTVADCj2BD8R6LdKay82V6znwEhRrFTHx65PwptW74Yy8dBPGvGcqxgFhNek9Yp35n",
  "key31": "4WTnFwvUqpfoQW8DdxC2hzTVNVi4QyiVgbuRvLRfxfRfecpCEM1qeTDMeBZ8rN7hEFBnKRqKdcuBjGH2XCQ5CPJ",
  "key32": "2y78v5zLCFb6b8RpW8KddhCgD3Sy5SCd6ChUR2DoE3uDHgFB9PDhk9RLx294HPsa9dKwnHCqKtLhmnFEsBkHKNuy",
  "key33": "3kjB8tTH4fJuXvXqFy38QzVs7pUoqmR35inHUGPqt7FZDvJ8GPdnp3jKPcuqwMMnwjRQjd34D6qMSxn2vob2HCV1",
  "key34": "2r9sYWG3Eu1urPJovj6GoJ7rpzNoQ8EPJSsJbYBUKi72QYjzqbmS8X6sv2jDfUt9vFk2hrzLJTL2yiRe6bYjWYGL",
  "key35": "4s6L6q896E9NXDCEoQyvp3YyhWr7uGWTGdegGEerNyNVpbRyQkYrCUn9NCg1BwiGyG8wWvdcNJAUC8CymmX5KAMw",
  "key36": "4ZJfsuQb7uEanHH5mYoihsoXSpLRtan7mp5VoxsHphTz5t5Ri65GNqcjLfMPMrcEAKeuAxf2YnLRHvyYP9aBPDGh",
  "key37": "4Rzqbe8dKHW2H7fTZYiQetQhDEYsNfxQK1pcrkf5sEHQnqWDywFaVf9SiG1wanLfHw51Z59aTJd3MUkzjVKcoYXP"
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
