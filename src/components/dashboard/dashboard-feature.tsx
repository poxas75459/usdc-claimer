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
    "39XU62xUNVMaax7c2bWTMK5hG9cLzvmaHFwF51NtpXH1cJQnuKwefTDqJhBB1P1C5d3tgannxR1EQry9gj5yNuK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EXzn778DXVwpb8BgQkAaFkfcTuR6xak1PHpNe362eJkmfajSVcSqykLW3jjV4a18Mf5LPDz1baioD63hyzhncVv",
  "key1": "354563fHVsdMTZ3QR4HisaccksgyYD8VwqCUP8h4zPNK9KtHaz4TTdku23EsWsnZsFZ7HbH1LpV2nXXc2cfjVj3X",
  "key2": "xp3qpT1wnvfjRw6EnAZuCb7mW6WY9hNX2yZxA89DPL1w3TwqtZpjHByfiuwc5ywysHKTdyncxKenCz51uhQvRHP",
  "key3": "5pGrakQxSFhfZB3zHoZYGr5ejNRVaiUmvDwn1b82tySExd8wk5a4mn7JdbK582tVFrrBuSYZBm7z1Yntfch5Tg2K",
  "key4": "5A382dpxYTX8vCMGuXCp8BrT1Ua9ifeFLBg27UuhgkTURi4MApg5ZKmFMfQpc6z44PkgU8RBiV6qmWunZ5jPX4Vr",
  "key5": "3N9XvTnHH47cqqkWWaCsjHiSLG8msP3HBBxkts2YntrdqerrHM2ghmZDUJhJ2oaCZ8ddALJuNqbAuWiVkrNVNbwY",
  "key6": "2qkQt2JPx6u7TV2bLCjVaSEXN6sWdsoNNoBaNn2V3Xe5qik5qWyUMWnj3Q5992x7e2WDqAQGqfLzqxaHmwYLfn5j",
  "key7": "3gc11nNTiET8AU5Ap6qhvLkL6wizfwtMZmyVx1wfbXCdYTUaNUZV8RAgqjDYyFXW2QCa1hfmqok3EjMEQ5TxB1Q5",
  "key8": "4LcbwJPaNhQBSmaoshBCZY2qMUY9SiYjEPNk9cFMKXXWsd9A4nyyWDywBZpnokuYN6JrckeX71mRGXCCq7MqanZv",
  "key9": "3VSr2uxDPvU6KY4jbJY5yV4p2zZLU2VW4Gp5y7LtZ35PjY1CtF6Pf4rUMh6NK4JKeMM6J6RiwhLjBfacKG76kZck",
  "key10": "d8nHgL2DNkfBVMvzSDi3xpJnY3ozC9X6mjiyjDBJycS486jXnkXREtoNpfnS1FUozuFf63BmJzkys2VmPHbHqvv",
  "key11": "3KYety58S9vNrRnscB51n5mZPeGA613mWMJSsDzw6JPKyUgyKsaWEdsmhV1tLuAHojdH9oRFNeA2bvvBV3vPhab1",
  "key12": "2TpTa8S1Nt62LcGMRRP6kgkZQbSDjA2Z25yL1qWWHLW4QjypMGSbBDPMsgnLpRH971CfiMj46BSmzQzRdYYJCmJv",
  "key13": "2LYmikur3DosFgS5WwA9yHjcThRU8ETNMqfhJN4wRgmTYkWMVu7tpYmzqjjx3JDgNfDGkkR48VXX1PFz22gTL8ue",
  "key14": "gwQRRrTfSNeyFetqnYSxuah8G2fNHpG4BK6NM2R6SKPo679hhGjiz2Ye7CZhZfbuCSTDEyVY9dAZX9devPwfTbS",
  "key15": "62Wkd9EraqFQtRbnCwDcPAHNV2LEKCJvEDj1jExLRUZVWCb495cLHioV9hGzDJ9mX7tPCd7RkGDRFMoeuyb5m72z",
  "key16": "33ogEJGXmjn2svDBRtWzxH6oCRHPaGmdBuNPjypuu87nKz2w2iiMtAdMGHydjJJjEMrJt1ionNNmj9jMR2rqE8m2",
  "key17": "42En1cQxjiVynYuPziNCmg4zgsjoVtXCPBcCDkfXawr6C724ciwmHoAtwspB7gR34KFZ5v33WYSAdK9g16LxfSVi",
  "key18": "38vA3iXKmsJcPSSUNytbzHmr56oDJrSBNRDQKHiUdqqi7cRCfUsMm3Eu5gAYfNv8L6ijh16uCWEukmymXooo5aHq",
  "key19": "4iZANnZvuZweKPTQwHGAJzGc79fzRXsbwhvqTju2mdGk3ZmxKmjpJQBGhC1gfq1rgBN73bTABeMJsPC3suSbWnRi",
  "key20": "3zfjQ6Rohxjg2CK265ny5iMaSaF1vDyS27C7JY12dWx6h3L4aD9j74cJPW25zyPXoNxEjoeXhbY2KjUVa7FzTwo2",
  "key21": "s2vz6QjkwviqV6WzDxHmpNGo5bjHbHWLANwcRgfs9SE321S5o4bFbtkMQRLwLPRMZdHAPm58Lqb55YEUGTMfWAn",
  "key22": "cXLFoV3wMoRz6X3aThZ9eoBPDSy7Rgo6BBM4SKWHPWBfSKmAfv668cxAWeQzipHyVVV5JE3p6z3wvHisLVGWrUy",
  "key23": "3me3ftjS2fvLHMP88Ejz2hjicd3enhUYWDFPfAZacxKhbuzZdKTDLeXxHGVaoiwWXoVEk6gCqaFtkKwdfzS74uKe",
  "key24": "4mTRjRWtwfv1ni9KLkQtHGAgbnWGMApaYtX8XbAJwAp12Dk6bAjkgALBTEJpsMKT7NrBJ6BnnHUqeS7MzuetbkWj",
  "key25": "7QNDgp5yiURFHSxvFhyW1989tdSSJYAyQy13aLVGoMpTkkU2ip7mNvbrSPQa1GEEwhEYWDw7en6SvVsgv11N6zZ",
  "key26": "2sWtBmCnrrC6zC5K2Uo26pnxE3vHn7rkdzqUffupTtA8xCYopCaPqXGLwnp8UZCwDSXw4NT4sqQBZSJa9yeAkQia",
  "key27": "3hpDkHZZDCuVp1WQ1papmNzC8eVLPQWkqKUz3Qv9S1X6cBXsqdqjmaSwkHFZJCWKPffDd7FR3dXgDTekBkm5T7aR",
  "key28": "NCJenjdYzjeagyxg4nPsoV1KVFuTSXnwaAuXRcPe3fvnaFrta6mzRr4sdk7sRQ11p1MjyoeT3DXUAZMWR4GctzL",
  "key29": "8RRqxXVqLWvSemA5F637z9Bg3fJuHqrTyJHgSh58FoLRUwh5pTAuL5H89KZgsiDi17M5aCYyoFcW1uC7vQMUSTZ",
  "key30": "4L7U88C3BzNbBWnmYNkxsDfdbfZfw6Yvd168tKiwQLQmQ2uVtpJQY7hgCoCoPAJMhLrhSyuQFvNj6NZyFRmee7Fq",
  "key31": "2y9EmnN1nyp36odENDZ2yHMpdTVNVR9t6f74iaw3o1GK1qFbJ17QL5t15BXaeVUVc5zE56m7Xk6G4JQUcVUjEH6o",
  "key32": "4vh7nUaU2XEHCCJwV83B6ZpVJBfKBLX4KqizSih3ywAmZTRvPd2rZJdcPGXG5gGy5HKhSvorTrQbPSPHwRHGU6bv"
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
