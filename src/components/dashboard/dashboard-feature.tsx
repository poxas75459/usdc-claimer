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
    "4p4NJ7yEovtddiKvBzcgJiT1KkpPpB5ALJKYav2PYrC4LitVWN4Wik3Q4hn21BgENAnJ8KuvdfVXK4tPKT1sBJ9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3idfjbpEuqsMKq2UeoQrjxZCGvyAzkryeoMidZSjEfqBTFyRBKTMPJcEd6Vov4oCiYo7TTqyViNYaenrMBXv72ty",
  "key1": "9MSW9MUP72mH7DuXdiyJFspJ5TSxTLhzw6RX89cyz8WoQ71SELXkRgWNRQuoYwrfdLNEJac21QVAx2c2bSALQtk",
  "key2": "38Lsx1mSUQapUyfketVKjehdZYrE2HW35eNcSAoEpe32PRn5ytwhQ9vfDkChEkWWRvXV48D1Aa896XEXJRS2TTq2",
  "key3": "4yduaVeCdbmnhWd28cijoKjvFbn4PUQJfEozf4UjPWE3QvyQg8xdy3Cwm75ivWjniXYpKQjGYuwqhX4bicdJymS3",
  "key4": "4pfQ1HCUjAMMKLEw7RKJw9DMMFMBGNZXTL2yuvs6x3xVh3b9TEQadSPFSti1QNkygnrhhabwLD3D2MyLULvDimhm",
  "key5": "786Q76gxdQRjaGkNJS52qn39YPHHa8UsnLDSA76xXZLzCvygwTcAy3B8GBgd5EssLHNeioQAeEnW35VBcnzhNxc",
  "key6": "3qeMnvS7ZnLqRgbP3D2rCczooMFXg1LAz8wjSf5sWAqQh1GZgjpA4CcWz2ivtrhnAa7ojcqsJNUsDva578Ez6TdZ",
  "key7": "4Wz56L6TtFRDdLyH82cMzwADFxhwF2yc9JpLBV7yjF83obCCkricdwo5rzbA5b4xbqVsAGCRnNCfPDJqAUgjq5t6",
  "key8": "2fa7NUQJ5dFFpV877trd6TpNG53ss2raS7oAmCHQiLeknynjY7Sr9VMds3HweiQFojqACchkPSZMfZkeaaMFbCBg",
  "key9": "svu6NAcTzXr4ub2kofwEZoJzdM32qkj6kC5cnyjgiz7jpV1rAaxwj83tJAL2rN71NuBrfdDY8cUQzNmUoD2AyBQ",
  "key10": "wVrxb1Ho9Bbkg8bSgge7JZCYht61PGF3GUcZyLCjuYVjUfTo3fYYWLr6ddLPmARKuHxLmbMhpSXXEhL8W6Mxiyp",
  "key11": "mwpFgHbZ1rAdWjuuHfTyMX6zjrBirgQGJwnyQiTmtLRremW3nrKz2dyVQ7odv1z7oq6WgNAxTQX4t4nd5H4Y7YD",
  "key12": "43YQvf27GjUxSzdreH6XqwgEPdyTaJWtPMApAuco3XDFcWc4iJYb5SxJpb7AjfRip4uuwzhu1KX7j9pGpLjvSMAP",
  "key13": "3isb9rw4L2vjDBWbwyq99YWrofERMcdkFGRUkZmDpexra3sXhskntbCGSK8hfvKcRge1tpsUcu61DN6QN1e1TsfX",
  "key14": "ANDGvE8iKZuZ1zTiHMBg1iUuqnyTacqmx7ECJfir2kYBqe9sJfoV9PeCsQbMJJQb9SUefzciA2WPqqKN6fRmZHb",
  "key15": "5VofP3sNTESJQ9z4ZBFMcmW4jEesyEujkEJANwiPgsXDs3moNrXV3vbThSHsvVHQPUnjxEsppxXxsaHCqUnhVQPM",
  "key16": "3sNRh2VGn6gQ2776EcV9QW7mCE86RE9TXxuE4Num9V6Y9QQaSg4VVNEuzB1ysqPP2n49tof5VAoDBoUtuSLhTAEz",
  "key17": "344dm1UG5qbdHgbbPSsYyxYtUb64sG98boAcnLL1AAHKcEinsbg9oFZGZQ7imwB8Y9DhCJfSKWCRiUdkAGWHbsYm",
  "key18": "3P9YhjmczSzeEQZ4fDqFEh3vNPh8oUvKSTN361RGa1ZuxRfQ7UvL6mqtBfYsSuXfzpMLfP8CjWtUDUSfg7HUWu5s",
  "key19": "29rGJetb8S9X1dRG32WUhux8cnpN3PsPxSer7id8xtaTyZvxjvDmSkeXZ6D9bNTNWnxyYeTsjPpjcQXyy7xG4Aer",
  "key20": "5HW5Kz1PdZN36CxaNdx7WxCWrVcUaNTHdphMvGSjUm4osTkwZhwVFazPvo7JLTJbo97KKD4UYLuRBqqdXF353AhM",
  "key21": "3cLdvR7NKsU24Vs9WKzXzDkRBqGHWby1SUKKXZh36UAvruqiSUyErKyaogNKKpiYbfauEuHS19FJSx6z4xWDJmeR",
  "key22": "3Vhzk4xiKs6MbWjG1rmcLf6US1wvGmA9g3PdRUd3cT9Jk2phn97pwJfH73x3bTBDw4pYU1RyTSLzDFEAYadUYBRd",
  "key23": "4q7NwNaUeL32gHszUwxCTWPV8tqp8jizjT1hZN339gpmPSZspshJbjwDmaBDjT1T5nBiS7V5281x12HMHGcFsSuZ",
  "key24": "2CCeZK5j1fYChQ5fGfbJMPWBZm3kdvyE7awuYtrKVTcK441sRHCRYeztW8HCrwYjki7bu4UsDgW58Vkt7fHqaRty",
  "key25": "4xDGXLvJERPXAviYvT5Dajmn9fnzYwmNEtKAKiydSmYmvCPqGX6QZobTsjLUwTWiLzv2Fsgkr3n9agF2uGX9kgyp",
  "key26": "4u2f8RA6sCJuzPBhbdBsrRttFDqpSTZHHUouhV6KeuPvF1KAm4zKYfGFYHjGoFVnZwd7NBCvjj2cjfH7eKkcaX2n",
  "key27": "5uE6LtRS2S3wVo84nxXTEpJgasXvYFkVJvVE17TKH9HxWeEmZr3GYiHbJaL1Avxqj2E6zvbdrakamKLkYEJGjsAm",
  "key28": "3d8DCfrWbXK7mHHApfhh5Bt8wc2SESAeoFVzLw16JLi4isPSbkkBXfGpYk7BqTgGafAoWPZyvwGth3KVKj7EW4J3",
  "key29": "5bdJkzLxUAXh2fRF1wGEpN4gfrQzvUMW7qUvia7SBWSsooLCQtT7CwDd4R5QWhDShKsUmZuBqmEhCB1bL2c4h2WK",
  "key30": "5wfttLwsEBTjKqKt629nB4BcsQ3yTMkxuhGLaoSxRaJttoyEwrjzTwkHJz3PzQEFNVdXHWJrAedAzHShduANvtWQ",
  "key31": "4SABSfD6KT6skDpk8sxgarZfSy6XjTufhGUwhfTMs3YShzjskAEu63w41ZCYF2H27DZMZnYC4pGkmm87r8Ezix8G",
  "key32": "7H7nBC5SnTX9r3Sm6zoLUK3qGHYztbpQQe6DAqGJmjhD3hLeat63sp1h8f3zw4dPVHQLsHmWXNdmTXp1A9NQpcG",
  "key33": "5Wx2bJe3FjsTa61zhvjzEoxtKXMjuW4Py2Ardck6WCAvbTYVv8JgwgUWhdKpEtuw4nZC2Mr9ykvvknNYGcskc9k6",
  "key34": "5sUqTm7hQh5sUu6Naevu7LNxnZnWNZp7YwgAdY4BPooS7eGZ9UqJfBNc3wkB6qNgoVrzdw55maHskE29S41uwFnd",
  "key35": "3vdtmLpLjugC3j6UyHMKXfzNcsdNQXSGJRXhn2iK7R49sk3w5SfzQ3BbrbPT2xGmdDKtb5i8M3JHfsb7CkxF4zXD",
  "key36": "5v7e9Gmeo7Qu7S6WEvQy6v3XKphFPkBUdEFGyCu8nXodcVQwMWW6Jr4PjtzKcnCHbi14sxy2NkF1qkR8NUXS5bGS"
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
