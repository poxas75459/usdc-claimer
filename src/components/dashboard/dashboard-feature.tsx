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
    "4smdadkVTXk7YhWNBYWWNQWfDTukVxyhGtTZcWfZUQYPsurkESz3rfv1LxCHNKT3AKthZq166KhPq1uA3q3W8xy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23tB3DAfJAGW1MNdS2G6uJYY5iNZS9UbJ6dkuTTkR5BbSoUsiybC9dVBfnrbHKRSNqGq3QqWq9MhXiBwn1myA9Z8",
  "key1": "2t8njFf6WJLebAmdQsCmLWYAT9r472DFKUdVGQrNeefdggBAJPPszGKjVMf8wmemd8r4R1vkVpLnmmf5mNjLqQ2D",
  "key2": "2tAkWYdsWurDVrvwDsPspLABfFPKUDjABNUXXw8JfA79gjJXMfYesFf67oFmFMDJDLchwij1BgXBqxuT1e5qN8TY",
  "key3": "3YMgARFZDpJcx1uWAaSUri66udtv87W1V1PkHPJDF2BEScpACoJLyZZvnRG7sJECbK21itYEM88v6tsFt3e8fAR",
  "key4": "4NeYx9AvQnYwy5q59UPzJARh2Xctke1AbqYfhWBLAxKBsLfst2J7YKgeMWKjzgaqdAYu2EYPcpvxSiQtaTcCnkGZ",
  "key5": "5Vjm2bmM89HGBSj27WSxUep8ptGMU4MfokahjRAxKq6cGfDdXZUMA7pgowFRLtUM3YTmBZrRTyVMBB9JNa8V6T34",
  "key6": "3XZQH3aHWVPSy67RJudJdKRXdDXTmQaMchu1AFdfNhbCfWfnijCxVUuW9BZ5bsCBouzrdkFamopQLjXF4GEtnLn7",
  "key7": "5irdrFwwvaAo2RxYs7WNSPoGyy32SoAjaECNuDXeVTLKwBdptk84P45n66Pn7AatrdFhhLoH3P9BpRy8rCGqD9J6",
  "key8": "3no2nwaW2f4NS3eCcYDg5qv3eZy1a6C2Gk9ix5WgegcveAyLeTx9oXD2fEw26ajfpFwv9D7JzGF3Wh6r4kXc982s",
  "key9": "2b3GoKvkkhRkGwrzvGHTv5QA1fTFxWPU7sA91NDhTgzPQYhsYs8SGYXckmofbipKucCWUzz44XHyXGAHAWPV57RU",
  "key10": "58mEaTvChERx3L3Y4Lf8tc5Xehw3Mg2YH9of5RxrkMiBSFk8mHDxQ4KXXR7aZH8HU4REdDLFhZT2aKYheniVnEUs",
  "key11": "4MjoVyymTF9Q13xz5ug7zv9LaWMS7ymchWFii7zJ9utHBNioccG3ar4CgDsSS5LvSfD7NHGiohZsEZb3vysThMdw",
  "key12": "4x2QMafvkzKXHvB9wy3Jrdzzp2b1miz646wScqmTT7moZ2DCaZ4GUboXr6aV5tP6GiERtAHQ38MPnHRkhwsbEs21",
  "key13": "YncF5HBJuJ7JUCKeTC6o6upNCBSMGWUmtS1yJJPRFmiHWdxSvdyY18h3mD1qaKwxASjPGiDpzajcnQqgXzszAgi",
  "key14": "5xC5q5tesvqJto4U29WRx1pgbt2wYrvpsk8GY2ad9fuzgTm42gUXDTEkC7xNDoYJnWLPoFhEX8awK2egNWkJUbfP",
  "key15": "43GFZPDNyZD7drvCeEU53fEia3hV857cbhJrRaSe8drb3GqAdQycX83qKeUEFEL6JtAC3NeCJJu22eTyf4qi3jLf",
  "key16": "u3AyRLvtrQwYpxt3GugjaaJf1cSpwQvQqu6tD8xNG2bcBon6A7FgicCqWRA1K2jUK4xhAriETLr9eMgxLwSw9co",
  "key17": "2jtVegEACuRzHnd3QtaK12UTuAAvLzi94uSUf1sJTBWimQAZWAm6kXA8xrYWcFKpg8a4TzUCE225jyPNCGBFtrfX",
  "key18": "45MrkQZY4HhqavdjvFTxpCeYAyrxKx1n1bR9G8ajSURH8KQYQzDSJsZwEoF8geswjGkSyxQYqWNeWwP4ims34ba1",
  "key19": "5cGpMpFnxjBAuPiV1fuf8SsGUcQj9dJffyaNAbL4ayjVBy2x1F6otjJu5FUjGjgY3a1VfY75QBt7X1dXMedqYSJc",
  "key20": "3P6WA61nNnkardy6hkxAuneVHefGimkJutEF55UJxK2PyJhrn5GtkEfQrXe6HthRhTstZvyG7xDRsGhsaNzgLqHQ",
  "key21": "4XXTnu31AUDPWoF85nmLRxyYM3dosfJhBGwekfE2KsbJgYzttmYXEQkpraHsohSyujTBD9G6i7hSLm2q16m6tTn1",
  "key22": "J6rUvGz1D9MD9YnC3WfWrTSe3B1cYhDZpE4DeyditJ12iEgqBwVjCt1PPnyYcLkbds1B9W5w9CZnY1AkhjPaVFQ",
  "key23": "4hTFiMVN22bMyUu72f9cAJQyWSYD8Y2FLDy1LS5kEdw4VLunAXjoGBxZjPgDhBEJE9qD9Y46DdehdY9JP4xjaUPN",
  "key24": "3zHvqkocbc9e4dAqc56bQ3Edstmh51HuesjmVkNgMQ38ZeYpezfJ9UZZfJm9FCwTUkYAGiDygMQD26JQ1a7J6Efb",
  "key25": "3EpyTbw4kEhzQvycRSAQy2PKdRFYXs2d7VtJp9gH59UEG6Rp2EwdfsgGoDxJdzzGoUCWp1NeR6vrUZB1q6BG8uGJ",
  "key26": "422enkDgwhcsc67cz94bsdGrypxGtyyt9Z7ETFD4f8KUx3urK3kcxTaxYdf81KvTaSui5gXupoHdwCtctmVhS6yq",
  "key27": "24hVUnygnbm7ZegwemCxwiJ2mMFYyq1ZSRK8PqVh8NiAPRojGDrQwnRcWCcVq5BQyD72Ck3sGCVPvXwYfpyuPPz8",
  "key28": "5TTX1KzmK9LLPbZvaVDoaSLjwpwo7giEyfn2LJodc2XQT1WMTejswruwBiMbJDkSwwuPrrYDxeFzWqDNtTJ2V19b",
  "key29": "HWKNfHKwK5wLA56cns5ykELWvjvXiY8k9M8hVqFjU1aP98djNjgyBfhu2ESqyRav87H7gQDozegfVG1BVanPQnH",
  "key30": "2xuY7vBAxVN9uCk6eSUHXstLRcKDGLh4gWp9ej89LAreJedwv4bYEEtMYoFNCVuNX5Kod4omhJ6WMwbriVihhHPN"
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
