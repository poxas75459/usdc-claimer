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
    "4V58wuawCb9DcNVHdRJP6Ej4pMocT9nhMfhKn5ij3drMoLquV5Dw63cLovQesWhWDdj7qipLev3wnokqHqB2WsfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AjCPDL56PFYUs3FPheppjuXdbi7X27dSQsPJLsNWWB7YsZ5Wdq8pfN5ibhyus5PC7ZiC7BULjvwJPV3aXgEeL1W",
  "key1": "5mnXribUHYrcZYsZhmNeWQBpJryWv3jzJVEkNQgHQJSkD4mpeaAqiu8WxpsZ8xrmMvpRoebhWqTeZM4zbm7wQn45",
  "key2": "57Ua3E7b1jRJLvpeWXKrubo4cwWeiePHgzjXSS6nfMQdhArwbNrMKsH1nRspfDPdccovfsjHF9NEYrA4xBgeFZ2Q",
  "key3": "3sF3H9aCkT3EgnGUZifjFHXsua985c1YYLQmD9gzZVaabszgzE4S1gRc9pkK5AidZasVWiKPvt2aM1EgaqAh9wXh",
  "key4": "4z6wuHdUauUkw88Ad7LSToRGP7AZZnPfvy5Pkjs9kowspUH6hD8TdYMu4yrLoTozQFmi4jP2arkC3dn4155Ld5yP",
  "key5": "5puhtVVSYXHCk2ywApP9TqQwRboBpEwFWXkyW3ohxCQQvyQDKqfgpFgon4W26F32eiiJrH3VbHGBvg71J4sUTAdp",
  "key6": "5146GHDmoJRSSuzeSCXCH54GPtSAWxLftkLmq4ZToepJeGSzKHPJFteBHTtQVDZvCpLHAS6gFGXQpVdVA9BeyirJ",
  "key7": "5ohyM8iqCY3A5AK6vGt6VP8NqrFVg3CTjC71XhmE6ty8xHN8Duy4PEwtCbosD8NSvtuNBZZFfDsDKuBBXJvPhT6k",
  "key8": "TyTSv3GHbHLHKqXx2DoR4LtVS2nfVZ77wEwU1Uq6oA4HpHbktZn7jrSP9uajEnLkAdoApAfXCtCF5cmZMUVoJcn",
  "key9": "5ELcpH5xTNHVczBfujodc7nYcRJuEsgS5rMDdN1yRgAWFWeB9njxF1f7uPvZYEvgz8ZRSHavsNwT9da5tfwrWbR2",
  "key10": "2nhbGmuKPTHcShDGB9SQJQEJqwvHdwRSkEz9SXZ8LAKq2HnXfM1GT12sEhChu2HoykNjnXLpRuo119XbPZGZoZNi",
  "key11": "4MBZE1RQLoDXrPZyTGd4AMW7u8vupS4vZrqCy4UeTPBTv96iFmLoQ3A2Vs6sAp25iodBxhDZ23Xcyu9p31jhcdtc",
  "key12": "4rzKwggo4oe1zRWaiVFEHuhb4kerBy5BQGqXQj4noaSSKtUaNCEsGALntCYbUrhU1RUeC59vUZNzFiAJqDUWfkRL",
  "key13": "2TERMy5rL8PYJGdCaYQUTFRaseR1MPr1VZZRTrPntV76wwk63QsesCtnUMrcuA1tkEs93VSTqWGwxFroFjYon4Fz",
  "key14": "48u3Z6nTithG6XDTUKg9tn7JKPTAGtpQSZaAWkNBdBAbNY9nSM37RY8Sn9BYjnYku4qJ1fXh3nyzjwfDwbV2bccB",
  "key15": "2847yFRsim3ci9W6ThfrbFMfcoEdd9daCs37uU8b1JjvhF2WBpByxYnKVMgw7SVfY3me2bY4qF8oa3tSCUHjZpx3",
  "key16": "381ovRNKUo2xrqVB7RgJPoHfWiA6TyV5hgx4djbpbwWukkamCrDvba4pP43Eod8FHgspq1HmusZkFAcXQ4chUD8j",
  "key17": "3gum5LGLqTEfgUZ1npQjjgmGgvBN3uRD1ixNHGMX7BJcoqdm4f7Y7wPcVhcVZ5oBuTYrB7GHF6tCQHrJ4Q6G5wsX",
  "key18": "NmmNR5xa8rip5eZamwdMemd8DdYDRQ6Qwyyu1TSmaS41xekumFhU4RPxRZmk7PRrpystYyerWiSznE3qeRWTavT",
  "key19": "dEsDY7sAVkPuX3TFW3odyWYrj1CAPaiSTyiu9KZzt7arCa5NNFrjiNgMLJTNC2gMnCL6JbR9i3zHtWyv4vbjQ6c",
  "key20": "66UouR7Z8H2EDq6bhj5vEdxWYRNxU2LaPu6u7NSCnGzofHtaP2Exve2j9tC422BsMBDmweaPyGqEyFCHBagZ26oV",
  "key21": "4BMre6qZxvRG7d8zTLLRaejhMkexemvZHLDJrnahF3XNRk3K64vC6A36KqHxAHt6dxh8Pk2uu8i52jCPHdW5SRD6",
  "key22": "27sv6sGGkoxB64XLVEAvCD13Nhr2ygeQerNNEVh3q4q54xLfq2WvSf18KeiKFrJ9xqFLNoEkbtWyYbhLeUf3d9aD",
  "key23": "CpVKpTfetNuaDSo2MdfJySnXtn2zoYmCnpEhNnXjf8kPaBqNpD5p1LwFfXjbag626JG7DtFKAaRfcpXvdRXc5Mz",
  "key24": "2JbfPEvS7zY7Vi9AAJAk2SnFNU3H3Pgrv4TzprMEVdJn65S14SrKMZ6q8DVzdpoAC9JgBShAR8YaRBGsk5FNkt3z",
  "key25": "4UZRsCNaRVWCdsVYDJwYJ3nfvzPAfMckB91GicC4sytsptrWaBUfZJq2muy5gHCZRT4qryJ3FkXpSHAsDaRzVG2q",
  "key26": "3bHoHx7P6taPPYfC4cdZuYMqegdnErFhH6hdBocoEXFYL91Pm9Z4EiUD3GTVD9r2RVudfteYMgaBSfzKrDN8fTu4",
  "key27": "4tagoNGpLEv2StFrEMcWs7ujPRntnGcNyCTF8Q7Hf7y6CKcbS2WoZj1S92r34s1r9aaq3BZTAUardLKSzjx9x5hg",
  "key28": "4GcG8mGRgeX4MRBpRAqUc7fgBsywFGA3SYBCbb29SymtFakxyj7t1SANxyTxm9JcJ4RmBt912M5DeAjRdnkYzsHF",
  "key29": "4uVsnwg6gGwjLXcUAA5XpXNTuagdbHoRoE1xWj2b4DfLtxewUmBeo9TVQhA5yTxsc14mkrCpeGD5Qv8hoM5iyKhF",
  "key30": "4gWuA1T9vFVgcqfzAg154Z6CaVtgMaohd46sFpwAVuTJ45Hwk86eD6X1dafqn8t9WFr3LPXJh63DREBjtLJ6nY1Y",
  "key31": "Jv4SGFc34M8V9sKwmdLY8LuskMaD1gx5L1dmaGpeDNtmQuFFDVsHKR7R9ZeezVWHK4t7YiKPytSMHfHaQQhfXss",
  "key32": "5SXeJ3GieMFDtugenjJu7g6jBjRrwsX8oH3xd6Tu13H4g3LZX1otMK1WaCMuf7oeKeetDHGK5BQQdBNVnK7AUK9p",
  "key33": "kieA3bnMrgenh1knz27QqG7ebiUcGxSXq7wPawMiESJoVxShSwSbTK31S9yvDYt7PmSJiwkGTGjETgzWZ7f3ddU",
  "key34": "4SyXiLyTUsgVUQzfoemJaUwZrkqYp59p3ujVDk6SnfmszN3VxhvRNEwvJbnfdpB3AJ7tUr8hF5kb3MnRWDpoz3rX",
  "key35": "2YUnN188PwJJKTzD5PmEre9L1JDSWazWNqcCmvwkqs8J33hy1xiHT79zNw6mLrrJZCDLAVYTtb2ResXxiz4DbP4",
  "key36": "5PrE3F9U1p8ZTubjTzD2wUidAGFLY5T7DmWniPFb3VSzZEuJE1Y7P1oDSrQeXFuAc11j7NFAF69JEG2RS6J3FzJo",
  "key37": "2uUoQJajsaex8BigKtH1mGkUJ6QC2YKBzaD9adgyQ9zdWRNjhprSrRGDx5HwRaee6rKA7zLuMEHMiHUb3sZeHaXL",
  "key38": "4SgBgVjb9Cm68esvEgMRJXQ1CcRGNAV2qxMCS6bGbxg5pnjqrbyoqtpYQnsEDPBKhKJgH78Hr4PYWjXkFBXzEJCV",
  "key39": "2q5wfwNCzHSRThVvX9Hgoutwft46r3R6p6N9o1Dm2q7pF9na4A9FWPXeD7DQ255D18ePuqUmWenYDrHYfpmV9YuG",
  "key40": "41r9PmcyDLfjqC5SU3UvLupeQ3xEZrJ81q9KqHK2Cwkq5gBigFkbQ4NS2z2U9NHMDXkqCP8sTTb1j1YraAH9S8UD",
  "key41": "2M7SJGiSykevZSqVfNoLJTCx7HzG8iEbzoFBvwwKqhYF5A5nL1LWBh4cxPREpLVFxA7aYXueUbkWewWy43htGcFi",
  "key42": "64MGLuxexaa9ncCxaRybyNN7NStVkkGyagW9YJVg3Ai9HEpzok2Dj5QkjmgLmA7TSRyog2GUyTEg9ZRGgDJP6oSc",
  "key43": "45fSAfaEoP3CH4egErPEhgQL2tPFVfm7aacx8t35Eq7EogP2eRGLbH482J8ZsT75c7c5XATwHfCuG13h4157q3dG",
  "key44": "AKh3t68S1i3M6fig1qT7i3n2LhHqZerzsEjTmwmJy6QaEnGercx63BmEDQh9vXn1fDnK8LGbHCWw58SuiEGvqa1",
  "key45": "3msvGwS3reRYxRnHLFjitjqgSAyMou6Gfft1mwFq6bMrNUEMnjzYiGHW76n6eV7Qa6RMXAzQ4XLKvkm3ivEDMWoN",
  "key46": "ri6j4dtQzuNTLeysjgqeryHDGqPSkkzeUsoXe2AnssUU6k3fYkNmqQFrwTKMBrKCfaAb8jqAzKffCa8qLeXvnVg",
  "key47": "34HLnWcBFWL5kbJxP6kCuv6pPx15X1rhB9kJmJs4zaaA1nwghGLhi1NZwrByPXLGSz4zQCuiDbCBLjRJzSu4E5oZ",
  "key48": "5QfjCWWABpy3eR5DjtvrJS1ditsFPafVStU9LhPhMarNvRohQ4XQdBJb1WowPXxVWRkuvT5nk1o3r6BBo3bx9xoY",
  "key49": "36R6DQ8rXtQRxmfT9Q15zQtSKvyyf8B1VXjUivgb5hwMpGUCX4DGWZ7hEZZ7YzvfeJyM7pGppfUN7uq1bUVHbfDB"
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
