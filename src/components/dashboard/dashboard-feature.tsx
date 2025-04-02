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
    "5jFPFKoJbrgUAikMUtZLv2mqBLixTHEpcMNVCFfJy3YWkPMwD4RAPecUhDEuJGtrvtzXe1BczZo93Ejar3cJALHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oSo4WSq3YrzCqDbJKg4YJPbewDSLshHoaXzraKtdMJPDX93Wncz26VVj9nk4kFmGB1rcXSvcXDQbSYALiF3EiDv",
  "key1": "4CJ1VkCRukT3zen5U5Qn7PadKr59BrdidB1JmLJPVKMqHrj5vksGLrSnQooJHPvqquF8An9xdALb2vbfEteagRcZ",
  "key2": "3w6oFKPo45f4syPrGZGozL1sRG5iq5vzA13swion9fhkBxXyRiXD65GouFawBwRyR53bi8CB8M2cUy9c7a88Upo2",
  "key3": "2u36RdBAFxrNtZSY9u9hoYk3XENrdogcj26twcKGSDf2wpoE6hh14AwViG8Ba8qaVMoSQJosH3oSEoUmt4q6qarB",
  "key4": "3N4i4ADm1nXjcpDTNp421kG6icrwT51rN9WvAodTqtRhK3YAHdBB37XSrAXqYhwreXLy3L393UmyebhS9Vjdes4k",
  "key5": "e8SKfGQT7ihv1rLZHHcb3RGZrDCWwMBMJZCwEgDnkJj3VwPCLKZnxcsGP4mkt6roYofR5GivdbUK25J6JtY6EfK",
  "key6": "4T9eTr6HbsDWVUR1MxKgp9Ez6bwyKq8wmRHtAZQ22er6ZrsncjQve75wQfpkef3RAmquGxyCxQGB3PxFhxLVt4C7",
  "key7": "5G3YRPNEkYENBCuJNvF1QE4HvdCtPHhExmGxcNhnpY6cCfwKM7gdwHwYjHakdEBtgsQqPWVFnXbKMnnetkps3Dvi",
  "key8": "oT9AhrYbEscSXfY56atM9oEKtMF78NhnCt5EwhFQBgTW2cScFRUSDuGvbtRcTi1y8bzyy4B6CSMELuAY3hcwpRB",
  "key9": "4ykf3HdZBBoVFRZNH9w1vTfLCjLLMESe24smYEj6RaZmQ9t7h7LbdiKNbZ2JcB37QJ8vMgpZZTgxjcf33TMDgoKW",
  "key10": "3gCMnKWmphmotnGnsZQuWjZj2AgeBVEnodfaSV72kScpmQUgBqewRW3TQqCfWjzN2jQg155sJvcAji4h791vNd2x",
  "key11": "3Hx5fMoAwZEEZUq9TVPonWDv7wWoShiPxQAzgfvHbXkw3oQgSNGhejgNkeYEkuEvtkXxFAQsQeRj21fnRnQicUeh",
  "key12": "3HEPDLP2S3kgvsQPNBVuqwgi7LrTZyog844HiQNsXGEGsizQyzp6umwtiQUbDtyeW3ACmbyMsvN6iu59dBX7rCai",
  "key13": "2rVdSkygK5B1mtRnGq8ZCgsqZvmK6FrdnE3ndYNSqhDCZLit24g95cqfPhc8Ei1FFG54CcHrQipPoQPRV8Cub7Vu",
  "key14": "4ZHpgKfApku1wBpMsHN2DEfwGEimY9MtMf6LfLeYDs1PPFZyidXajwQ82DQJGNPqzCKQuhU9qs9XyxstawVvRjqX",
  "key15": "4wzjquzYZKtgDLwsKwy7M47gphh7ftVrUsNvaA1MVzqZ1GyEZiUDxGkqb8j2kBEAn681uWZyZGfWNKb4hEuo8XmE",
  "key16": "671SiS32HEb1T7qQHetCrNKj4nyPT2Js9VH4d5px83LhF7deFbrPShUKG3i12x1uRwFgpFAjMoFXU91yxjN87yG2",
  "key17": "5nGSoom5EaaaWkoDPnhtf9zwX13THfy4M3pQnDrop78XSGaYyg99s8UkLscfh5LyS7PFZRmX1MswvsEhN8tKsvbQ",
  "key18": "3xFi4oQQKjAZM31hgXzq2HwWMPtgMmZpNXjucJkRnhjniWyQmCQzRgBTNYY7eaw4Nnf1ucYT3ogkd2ZdUTtYcg7p",
  "key19": "22KPR2p8fWPmKyvJCJbk5dPaDonMUeLZmchTisDFaK38SMe99SRykc1aaxz8ufzuf9MfLm9aeyVmLEG4NbuqnNbB",
  "key20": "sFi5RhvWH8bJvrKBn5TKRzCM5R5XbyisWzpREtXFvHQEXc7k2yPE7GLB7iSHRVSRJdxFEXKi3e8NLVhwpMryQC7",
  "key21": "zQ1Ds39wUugBGuAfFQ1Xmec7NLVMtZf4RXPyX8Cw56GBCHM1mHvucwqcYwFxriE8RcRzqf16aHuBcUQAEL9xZJb",
  "key22": "2iX8mkaXGDc7WPmL51Zs3ADSwQQ8t4b9N3qRfmgbwMWwLEFe5Z2PunXzPXfR5m4YUyE7PmZJSQomfuWfEt9xxyCC",
  "key23": "BRg75LhYwMtaLSogYZeJBDRaGSx4cdU1V672TnMNskBekzW7mEADorgbwAfEkorPwaxKZEUtEvniJDKm3WgzJuA",
  "key24": "CoGNyTRWhuGv8MQRgebHkni8Q4wy7nVL4jxUCiWBpSZHF8o4yR4bVAm7cb5t5qwUMZehusBhf92FdUm4TgNriAC",
  "key25": "3VdBf7vq7bKxvMLg76vqkzfgnZXBxMVY4GRdA5ofXNGxkz6KXuzP8D4VNQAyHz5NY8YqnsaWktz1rRJrBFtgNTaR",
  "key26": "i1jhs3tYogGQ1J6rsQpLPm9j47AkTcnKVDFGrfbAPdZjszbUjm6RUVybRuw9j2GB4moSYwQuhFzxKUSw6q6Kb6J",
  "key27": "56j94kR2DxEki6wEKM2xAVg6tGt6zkudJduWPt21DtEYAq3A64gepZZWNrCkb5K2upFMoDMUPsAwqc5np4PCVXor"
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
