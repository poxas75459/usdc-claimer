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
    "dCv5BnwwmfRtJVK2WDANaekbCmRec79d1MRUM1keWMKuozeJnmrMUJGp1qQuhPiFrSnTkSMU1L2XTgcHuPszkVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AmiqXfoMXyghoW8YxxM1cJZx9NvTRcHBzD8qBvXkVLhpXTUu1RoSxVaEu7orS7aoQTDEeQc6Sf6P88oGiQVMzAF",
  "key1": "3ivDDpiSP22djV6u2JyuckWDTZSBtDd7ndwKPYJQGBr2d8bXtUzd9Wj29gemBk4PRwL9cJdzpexBCTmr1WrkkvhS",
  "key2": "61QYc1TYhh6kUQ69ddGKU8RG59Ts1mqZisQVUM4LgtaaeZWzWY7QFHZ7xw55LgSjtbVdmMbJ3XGdTv5JxaRhNu2r",
  "key3": "3XyWQqfyYFretLFASTY8bxyyRY22iR9pKn61VU9SB6RJ1XXaz5D3YTfmMKr2H83ub7z7ZLGdowjNLCtnkoyFuxd4",
  "key4": "Zm5QbiqENWpMHgEL6Ah9A7fg5QqfiS2kDoBYsZgHJqGwhHnNDMrJvwipT87WB19gfE2iuRorwmAH5grfGPSgNAe",
  "key5": "4nxGze4XETp5e284eUbBsL4MHE3aBj6N4EZRCaSoPk7DG8npbUuMcLMg8NJnLZjkX2CiZx3kaKnmmpw7CEgz4Av8",
  "key6": "3oFCkZHERNvuZ7YgHUsnfV6njr3ZTdytwe9hKP4VjAvJNJHpSXGeYZ7ha7zo4rvPuJMbCYN6Y8S3DxH5yKnjj3wK",
  "key7": "2rGfVF6ig1NfBj65p8oYyJTchwAZ15xCNDWEwdtB2E39rxbuSsBorh2wVdunKdwkt4opqJWc3frfBMqxBWp732mL",
  "key8": "3ACjxHBkA9d1upLFh1V9BXCjv5BN7241Qz2uTJ7oycrRAGs3Z592AgVQkQTNPSajNv72gNbfiroShQFJSyBvuSU5",
  "key9": "553LHCQbr8sTLTaXZKPzWtKpC7R7PcWpWDwYzb3r2mNeG72jWU7MuygLYy139qA8xqEmDHW4vjeEHixp8U3zxfHJ",
  "key10": "5BhRwfbA7Xjis7U9WSZHengiAbGRTXvP1fwJ7aX5XpLj3A9gxVSq5HRDhKuva4bvJm1C5u9aS1xMSqNRMmjvhkdE",
  "key11": "493rQWVzqyaMaT2GscgQENNs7CaeqFUhMQgihU5qLGuGq9PHWaSrEqtNzxLZVSv2uQ1rKhSTVMLFZJktkReFUL6k",
  "key12": "2a2Wc88wpXkWuuNRkFQoG4MjkH3oTfrgd1orwzccPwDGPkqdH5NA4JJUquAm5cgUE7GvTzXYwkP71CpMfQjSMeGS",
  "key13": "3JduSX9XkzDemQMiW4fMAUMiWXZjfrvcrQPGWuTmAoT8himFxZDvkTw3qAAp1oyja9ga68fKy68MNKT9i8xR5GxG",
  "key14": "61NcWUVFqY6nKisrV2CdmZiqzGVPCPtr9SLUueneXr2T4mnLGMhYNuy5HpVGqbPUuVQvnEypQo1BRxy1XszJoVtP",
  "key15": "3bE9HZGwGDN48dwiQcbHuj59eNtH78sP8Q5MdFuqokbeJdSrumcxVcS3h2Q1iJRAew9MY1pVc1s7MrJn1hkeW3wb",
  "key16": "4m5jFCaqj7kWxTuGDcyFi6zYgiu6wrsZtDXHzBk5g4ipW9rPHAfUGfDYEHonfd5Tm1ofYR5WofsuV4omHAjMJC4d",
  "key17": "3Nbm5nJpcD7WEt39jvUpdcREpe46wukyEEj5wQpV7KJp6zS1VAAAmnoySxstwLbJhHUNo8faTJTBiAUggvzzyKJ6",
  "key18": "4j3usT792wvnKjZFwVn2isuw9dUVRAAAHcRstMJ1oaSYtiKYmSojfR1xbwm3ZNvA4bonr3yaDDFXV4ukqh4QRmkv",
  "key19": "4vGaaasojA2sBHxbsK8unrzqNs23hK2scs81C7w2FH1iCDRRDUw6raQP7c5mrpqiU2aX8DVPqC3NdFwV4Xuu5bVP",
  "key20": "PqQBUhqD1kbD5uHV97nuakjVBFjbiQ3mfzERwv12E2aGbthoGuDXW4MAAQfSooHQSNUQhq1L7V3wazU2dMRe2sa",
  "key21": "2Ty8ihc2y7LkXod79qqVdsv75LFE7VSjuz4dArFnVMu8YAQMTTFfKDm85XvHTXjqaNGnxW6pBaESy6HPyTrxQcm9",
  "key22": "5Umm1xGmzo2q6W1vyzTo9vq5NoUvFViVtUwufTzJjDSyKYDQy3YYfjRynmbjzuBkau6ad2R6NvvhUwr2UsiVk45o",
  "key23": "6YyhxVHBFgXpQYLW6fKqF6KkBU9ME1sCjoFUoyAuhgWct3PvgnfDqaVii6iXthGywFfKcWtRBeMMMmTf6hMKLg5",
  "key24": "4KurGCDYKtupauzgodbCwjEQkWaFX1geExuby1fRizu65fo5bvzy738vUAPpLg3aEfSM123WoPAvt5GhM95S5NQu",
  "key25": "3Hs6K4xhwaemz58kTRofBvbQixM2YV5wTKvQD24qmyz3dc2sADYoZSocPWKaCER6q28uH6z5KAM4McAzHZ2N6deH",
  "key26": "3TyXyBtbbERy3fKpHGRyhyJ97RXfDx4YCu6an6gqQv2tRXDyCyh6M4PuAcm6ME6a4TSeEeTyizCwG6Lpj1vjDyQa",
  "key27": "4viVU9yg12Een4x3DnJ5VC3VpRNmKT1TGY3pH8ADc4vbz6FBBGARYvZdayqa2CcvEw1edQWncJDgoooE9NUAZokr",
  "key28": "3V7fdU11a7siuDBhzBHZNMyGhpvffaCBZdUe4Nyap6rU7sgR6YsnACy25VNz1qZVv9VoAQ1WEWqQXr9P9s98mtGm",
  "key29": "d3R3SiBYUZkbF8YqCxskZKV7B1psFUtcRDcyGHDc4nEJ8G5D1cW7mcm8RFb4tpPCpriE2fPLEYG2JWQQerYGEq6",
  "key30": "3oqoi5PyTswcJZtvVpH4PmxrbGViG1AX15bX7JTp21YB62rreDgTqJ8qhD6tUa7xu8z3CcT5RbjTM3QrGaX8RDPX",
  "key31": "35e1forZbKB7EqNyvkC68aHyC8N8VTuqonUjJL57JoXgxJtM5A2QZ8VtXbvm88MdVB2gfz3xtcBi77FotQaXSZFG",
  "key32": "4N53jspgmRr1JFZWtUrnHAEPrxG1mkuWvRH8o3YQfMX9jypmNgyJDUnfrfJuN8NCMsYPh2ztzuFsf9pSwgyJrY4",
  "key33": "59hFMweMbUdmFB31kDdWfgGCBsmF9pf7rCsHF5eDcfh6yvMy6CsQbigHhH6rEKj96AS3z5SHc1Bf4XWEoGHAaqKn",
  "key34": "3LKeprRUc3sBDEoFEMYKWn3m8o2oxnYt4Nutke3j5PWpwWU6FfcdoQd7RqbbdCqyhep8E3984H9fJP4nFNo9pjTj",
  "key35": "2NuMVh2adizunhJU7eT1aUmN3d6GU98JDaCWccaNzmpLSt2WeGecfvh4RWaBhrdKCXcTXgNDPpyEaeDc86oNJYmy",
  "key36": "4uo9sQbLG6aM3CEsaUZrRTLGzaBu8ypuP5QuDCaLFFS1gUk3okgrWbM67EZs23VHAiYg6VM1hte2mYxboEbSVVd",
  "key37": "5b5v66NtNKHptbEJiUJXjNY8AiniNfcsWkwn1WfB2Pbh7DbxHvgKaRZy71U6NoxyKPsixiHBE5BE8Ytgx5Kz9t22",
  "key38": "5e1Tz6HfAWKJLhqvNASdj6TtVu4G72yDxU6Y42WgBZPjQQFXX7mTmsMtHEirrV48DYAAykiW3BaiVBk4qE2DACyM",
  "key39": "4LgSdjWpj5NNWPrWLjPevWEQgAYi7Ezvxjt6dYgnposKeVbzsVqbsPcT36U8NdSQQpRMkkwFh5i5UfsK8vTAcr6h",
  "key40": "2YCdPP1rpBXnr7G8mbdhfDCi6tHWN4qfUgQB9qi4Ci8Zcj4vgwYtMo2uz6sFYg2YbdzKpsTmXamD7xJh7acsyUfd",
  "key41": "3rHQwGcXfYdBV5ShiJDDVRQ2gafKp4T2VZr32mx7cAGpLvEHQsAocaPPxt8QqiCV3nWCP66wwfg8C2XdRKdxoktk",
  "key42": "4YiY1n8nS9Tg1DBFUmBD2aqGUKve73uu3yVv2SeKpW54W2Z1JuNAgg7d9pcdBnQXoobNVzjnnaNMPUneqdMzSpx5",
  "key43": "aG5qX7CBXZua8y1eeVfRCj5Ttm8umTvrQZ1b2G8iGsWimsDbNxTK8ehRz4Gg9SdC7bzVKtvVa4oeDws9xWLw7sg",
  "key44": "VFxFdoAEnJ3hNnscagRDrVWHspezNS3LrChXfc69NMwUDgJKDDUJocPHrTSHVrtxNcejmp2bTdbm7mgBeScLdHk",
  "key45": "3uArkMeys5uBgQEhwThUuMxQUN9f7RcqSzP5MBV37aKjYRJkGGbCro3BFz1vYaSwmcxMnADuDbgSany7jWcB4HiD",
  "key46": "2CRiCs9Q6eghYTiJWFWbCNQrynRSrts2VBcprydgrrmU4JD38AfZni1uq6MTFvgAmFhkAVW7kQm2oGQ3JeEkuwZ7",
  "key47": "3BbWu4Wb7nSFj2R8eA4CV4ReyYdwxSBEb7mqp4wn4XwsXMvdr6hxAQ9yo64sBE6WcHqUku6KUHbqCgeGQS28jAnJ",
  "key48": "2kDEDv9JKq3z9ViXyEmWdKUdnczaDaXdc3nc1sf65rK3m6g3itdRR89in1BtNPLfb94E4cxpwKd7Rfd1oJ1i82v2",
  "key49": "BtRPsvP87XTS6sbF9ECt8FGaw2yb9qCZ6bZJg9hM2keUXg4CDLXcVgtCABQJsGJD8AGLQQgLTQX1biP6pzVztR8"
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
