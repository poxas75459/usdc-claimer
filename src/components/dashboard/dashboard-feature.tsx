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
    "2SgeJYktZgQw5cgjSPc8sp4x6Sf8fgPMznZYfVAsH8w692eSk3NTGeYcJnFh9D9bQnebiuZb8MUPbzWtm71HCdFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aLdukPvPmHbe2h4dnUALpByKTULjcC2rJzfiBkG8yvgamPxLDtcrPXsecjkyJwL6GH8meJxGUh9dYy3Y5E727bg",
  "key1": "2HqBDdqSx12DFiMmM95RZzo64jw3HGnK52KEHU6CQtqqocGqmbLmh3DfkyuTAMqdkdDL7sZmesWAFRM6SK3k96va",
  "key2": "5AJDjmtTTzCmJkN2kcWGq453H7Yh2pZBjkokcbS5SFUbSK7NABLo86snt2qvi5aFqATF5KH2FndBYCEhmhgochAc",
  "key3": "4z3Xubo4Zx4quT8TvrCxX1cDoQbiaNhb3GUa3Ykayqc5pM9Hi6u4Y4UrUmF3UiUTGUABZs25J4TBpo8jmsYbDVQ3",
  "key4": "24kXkYk5aHFos5qhovpTzRiHdNVD4qkoc71CYGjBC2xxVWbS4HmYNVFpGaXqSEmLJ9Hy9fimF1CX2XmcjXUJ2R7j",
  "key5": "56ov3kQU4FRga7asrh2YwTJDZH66Nhgb5K7U8dBx4UkWtxHjyFo6dedbzyQ6m9Rdte3Tgd3qvKx4ECYDBWSq5tnH",
  "key6": "4VtPXHwNJqXyU2q4FMSy2kj1jB1rYyPLHewfHW9nzAQvXYoZW1M7iDtmhjGfEcXy71PJf2DNbemux4HE1qZDsEqU",
  "key7": "5x5z3K9G11AaeqG1VJ9oqfJ8WQhzgfwHwP7PW16PSDuaT4MtQ1dN3Qoa8MQXVwakTzUdVjLcZxpTZGYJXWQ2wKDe",
  "key8": "9p44wbKj3xzacQGAkeNix1XP6PpaEhuCP7DwXPk28FAZsX9YFxggdMC9koMsgU2KWoNqGrjZfBK1haR2ynhndKB",
  "key9": "5xSe8YnNzfAonSHDQ687dSU88AZeqPxbTTP3k1Mr7JKdfkKypcrEUyG83uJJCsnruQRAuVkCrGpnFcsx2Qo9ct3e",
  "key10": "42HXjPj2z9vEwwBbNE6Ud9D3J48PQzoZdsL8UvVg64LsnYTjsuCnzzjgy2qXDvgvSjzdKq9k6qhRXe6utHLPhdNy",
  "key11": "27eSUGTV4z9aYDQV15RH73AqUzZdt5y57N7Qsw6gYeiXojmgHQEposcGP1brAqTcYHecuLFejCRzpSPC38kHJiKu",
  "key12": "4KmXueXjDUavbXm1S138w4TXFhxfzR5oGPmP83FZtdD4LPUoMgko95Pwcg9oYd2YbtyZTnaGekhPmbUFPHZRrg6K",
  "key13": "5ogEHaRou2pbLefeEQbbQ6wiLZSq2kEqX846bcxQvQAKaLeXo3iKTbMDYQnCgEz9U9BWkEGQBhySnb1PqG8estxk",
  "key14": "38AXrs3RHh859R3L9gDeML1agdjbDcPxTummyuk4ohd1aPP94FWASrYUg4zPPFfusU6EDpmoaSwyV2uR8xb1n6fS",
  "key15": "4KKeqMQbUvxyuKmndtYdmQd7eEvwkmLj3EMxxMHqGsDN21YVkG7fm1cjztBLAKF4v7hEmHsT49not9sURSu4kxFu",
  "key16": "2DXVUcG1iiJaxRso61kZzT6MridqWthocJPPxWKkUSkyLgBvHYDuQTXr8KVLFscVPJqF5iCENpW11oUGjci3g17r",
  "key17": "3mjkreDQsYz7x7Mn76vXPNPc2TKDhxdYTZu7xVETKEoTzahdsWjySv12LxdfucxrF9iaxHHrzt4fZuL7VguEtJei",
  "key18": "5JQwDeCqfRd9xTVPAutPgNZQstzyNpXQVKNqJiZGSyGvLoPNcU3XM9DHEapEnLmmVC7xzneg8LFqYdcr8oVa6wsb",
  "key19": "2HCyrsw1yHfYkvEpq74jbCV6RARvoGUHghxQheji5MTueZjH8r3awhSHtYHoPMKW5BwBLzDTE5o8FGU5347PwrdN",
  "key20": "e4U4B9ZX3YamVKow5iKv9e8AE9GmFkEBeYdUkJqURFWhtTRwiroMWNBRvxVNNkgq82z2TjdZmHpZjkE52maD4Uk",
  "key21": "uk3Y7BHotdXcttn1YQscEuEcEDbKsv9XwXMhnmjVXkVuDG4xs6DG9ZwYFcVTW6fGhWSLpRBEsdckULobY3d5XPC",
  "key22": "3P6bxsiQQCKQo7z4yW7PrWUPNVtYfKEGAxc1meeFhY1snMpzWSA3Kooc7PvfJh8hh1R1DxTEMiYnNghZ4vKC6hyv",
  "key23": "3TQnW6X3UTfqfguaw2dqBKfoTtm2RMdhgMg9K8qPTouq3znRmE8ZwKaag4qV3Y741mz5ia1yjwTze5hB3Qb5ivUJ",
  "key24": "5Bydc4BovLzfZH5wpxcDpyFu5a8jD78rW5qisp42J71eVuViqEriXcxKFiVhbt55ajyfhRrEPB3uoVn271xf8w6T",
  "key25": "4VHjViD6bdXFKvAEsMMc5ddnsrxPHer4bJfZNyKihSt2j8CoSa9MDpWVAvX7Q1yjM2ERoiV6djfhbcBczZMLN8KX",
  "key26": "5hnSKw9EoBNXzFoPefaL8AHizbQ7BGc3JwK3Vgp4kyP6aNHnevvbqHNAAgYi6pKhZ1C7LjipkvNv6NwrNueQZMGt",
  "key27": "uhpq6hzRFK8RmpYvzBzhCTYmzz9E3xvaqMerS6jJWRMXqyquCxy9XUMTWLWPWVZsZuNTQSbcdwUjueuMfVaGgQx"
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
