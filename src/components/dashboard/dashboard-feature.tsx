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
    "b8iyMTmgkBHi3a12Rs98AYzgpRwJCGEAMDTDd3gcmGv9zzGeL6VJxzuY6NnpvT6mzFQX4ex9Tf577kwUEPk5r2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64oLnstW1knG2YY9NAJbJQB6u4WR2BBy8wZaE5iAUDDxTiVncGvDWEg4dEy8F6qRfrbpz3uDQ4Ffw7uGh9hGmje9",
  "key1": "3UJ7mUKPcAnhSETYCc9mMrGmDYLfFiC9jwU5fsGnFsxUD6HdPYo6KUPETwXEapZjtwzk8dFZ9nr422DSL5uDNbjQ",
  "key2": "23vW2sdD4o4LuDAWEp376rFvZyWttFy3As97sHxYAVj6irwBDwmk1EE4yUiuzsdi92pmzcfJY9o27i9adaysfUDc",
  "key3": "2ckemXBmVZWjya4rHPJ4xfzqfeZpqRAFQqvhGh2fQEQpjMytTXRjCLQhKohRiWZnpB8kMnP9aW7FqH1j5XF3n6W8",
  "key4": "5JLEaJ5bfyypEVesvY6HzJucrLPRQD7QFHjfvAoPg2tdb7b7trR4CEJFKCe55DJzC95oHoNbyyTjGSMXiwqq68c7",
  "key5": "2vkzWwBmiZr2brVu3XVz4QfDQUUTY3ufksNUWtQeMeAgEKnLxbBD6gji5VzgRkmpF8n5mXoWdr3z7x4HWFeRD18P",
  "key6": "oDgfVgFo2UXwpWNNQ2pwj5cEg2kABwZnZsea8G5hbJifyUhwE5tBPANcwWSX2Z15PdC5gTF8ac5HHjVqpxkcc4e",
  "key7": "3nQsU4ff7MM75g8giwo7Mqtf8XRYBFQcJZtYKst5WoBsqZwwL5cpDSjqxqdfLzbkQaoi2PDFqTZ2wdBF9txPDQru",
  "key8": "2deBaHwL26MoKQ2aZtH4xVbXAcQFS36iCzT7WGSCyyGUSLMcdUByVycrgm6MbnrSfoRFZhRLy9Zca9DF75kuqsps",
  "key9": "4Gp7AykWr2wCo5HYCcaqiARDDDhzpirva7XRhhoYDLtmfwtNSyaRL6SSPy9LhA8q7dGVHAkEZwXvRgAsy8PN7GF",
  "key10": "4k4wHVCoBAAuqvVt8nvZA8PUsrS8uaaZuHHLnQETLoYUGQk6soj5nnRRaUomXnMT2Tb2JgYe2CGiJtHjQtb9BExP",
  "key11": "2u3GrmHVEZ1xCzAhPj6Zhmvaw32PoV8kMUPEpaqNdRA8L9hBuiL4DtPQ5KrP9SwfmNgcHHc5NhAYmeK2v1wWgoZz",
  "key12": "V8KiEh5bRuE2td2ZiVcEDKZM1mVViPNo6FWrr4kC7LbjS9mM63PZqGVvR1LLAGkZKQAnBgAkz8qoiLM1WuZfaaE",
  "key13": "4ttSGaFcEDqKwkHHLYxE2BVqsJHr7wksbvG2rQZhZ1WvH3C5LozWTnvezB3rAqQABbCtKRd7gxibapps9RKieF63",
  "key14": "5NfNfNo6tGDvPMW9ybCfASYRyQW8sBWWEBdoXW2xJgQwJRZRmPsQci6vyGYYwqtkoH9qZQh4uYAqwxTtzCXjCEyq",
  "key15": "3m2Xj8JFv5Z7sn2DaS5BspoGoRuwWWqgL12Nziey4vqtTB7fHNzojuHDod4yQwRyEwUWi7c9n9BkT1noGM1T2R1g",
  "key16": "2AoskRi8tBi8wszRcte2FFgMJTCgftRZisosQfYRmpfJinGyzMnugYMBydo9e1WfB2Grv7GunEtGroGvTGCLL95K",
  "key17": "4qNTuTr7daX5DwgYZbWpy27FhKTNYoFoNAgDAAiUEt3QFNYgz7bFeuXbRpkMh8FDSkMJ5ARipm6erDYJaYoQGQPQ",
  "key18": "3DFgjkSPgjgGXhR1SoBxFwjFZ6CpahWySK8vaezbNwbyS7q6yHKPfHbjM39YzFNbwAGQSHyvnD8UCFfaG8ZybdL6",
  "key19": "5GzgG5h1d3XN7MCnWvY5rzKQCEiV37F5fiqNoXk46DU3ymXLCaSiRL6wxNPP22z6cZMktFzo6iQrGS7sUhN1ndgZ",
  "key20": "5UiycUSb4L1VS8VsuTHU1mPTbYpWcJZzgrYgyQg1uoNAgeh3TwQ4DANDazhxDx8zQ5s1b9AU8dumyGFYPhZHL8Dw",
  "key21": "3ADqfohGPK61myz1uhDcVnVnQnyTcBXSHS6u4v1kJbSDvUnUC75ndxRgfn2SxTwDKXbP1dDdZxFFeguFznWkNnXr",
  "key22": "GSGXEG5sR8Q2ZQiEcDuMFSmm1wGeBJLqp3qTaXCbHZdwDj48FtCctWLR6ujtdPcw8GuCmN1TLAnPpWDEQtHUqmY",
  "key23": "5UiH31rjikK5dQFfpcAjCevuTarYcGTzC77RtAtbdypRWVbcKnNXwRHaKndAqSPnoiP4pY6RURYPZj7yX2p7UTpz",
  "key24": "2BiSr6tvW3LVSxcDYBxbQTK9369VrrR2GQyWJ7QdoahvXXH3bPzPHbrqzQ2LPXWcTpdXMjhpz8o3RwYN8inQJRMa",
  "key25": "kKjRFqEUe9phaM1uZ86xNuvhqJN6EBFMpoiAgvjkGQVcbutFLN3PLXFBcM6a4fEE3AADV9Nuh4xgiDca8WSWJC1",
  "key26": "23AL4689HSBh7wNirYvNXB8ctSnpCa93RYMMLuum6zW73GPFbfHjrjfjT3nMK1amW4UVwUkTUuwgaeBSKx5DCXGR",
  "key27": "3FiaUnMVnSbv2T6eQg9f61GMddX5d5HocZubpBqdsRT8Au3UygKNPjM6ntxFRFxnhscE8cshFfC23hMBqS2XtrNu",
  "key28": "XdBFFsogWRGW2ueZ7ka8niQDrrqTozs6cQJ1TTvMdNqPqwPcDM8nZmmfV2JTHQcapZv8HiP8sQngGJAYGDeSARj",
  "key29": "p2qiRwNdRtbxCBDtMa6MRPFCXaouFVnJC2q9NzPwsqEuc3K9KdV8tptSak4qMSxSSSiXF1YBN7C5v7Y6Y2y2CNV",
  "key30": "6wfKZMXdRukzMxheSisZLda3T2ggYTAGug3V68mZdQhMLeMb1myW4p51R3iprV9XoY3DFfSkBpQZznyRCvr3BD9",
  "key31": "45EaL4RAHhi6SJjTSUd14wE6z43mFVM3prrpLsSZC1iNVmuZ2JTuo9pUMhRFxeypDSPEroTzWoLFbGqkEBoM56T4",
  "key32": "3TM4MxYbwYEaoACvdrQK16XRuRSeCUANq3S43ZYDfHJTQBjbH7x6jn8GwYS3X2YgCmyFmeG7yY7m3bNT6hW95p6V",
  "key33": "5uWcSYrczYFFKTmCQuhgH8mjASgfc5ePWao8dwM8XTDWxqzYMNn7voQF3wMx35iyJFjXSTaETFvKYnKdAMKVcF5Y",
  "key34": "HvtMdJQiE9cFx1Ef5RSAVkUHR6pABG2ePYzLZVTXmGQQbr9FsQuLskhBCkMxJDcZcEtNVSsUcM62koRHdEyM9xo",
  "key35": "5tcnS2nggd58bm8cZyvqYfDSuaKFcPikVmqSbGuGbGatWqJPmdvp2mCBwX9emfNgVh8h36LMCjboFv13YNYwbzhq",
  "key36": "znsHLHnXxo3vqdzNhrL47ReVh4EnxdmMN2zy2PCdtDxfed8vFxH8aBr2F4iF6WjEBEwJGtPf3tMSEh3TpM79YDV",
  "key37": "yESvmMBBoEpvciBcJqfaYAyTQYtX7XH73aduKRPFYUn5mBPAEviJvEpmrZNXocA2nJhTZAJQPtz5XKjLgYrxNVv",
  "key38": "58WPVNWMFzY2RGKo9dV19aSGp4VzsnB2yoUyUjoKbhNrdrMDumQFXeMhxHkJ6ATRegMiT8SFwgiUNGjMMSKJNW4a",
  "key39": "4vjRjkKDi3fcoCZFJmFS71KGWF99Jq2oRWiqsT8S4nsVPsTJaviv7RGp6xnoHJDgqfjLF269xnQr1b3SG6jYTBLA",
  "key40": "3twRDDaG18gYKEVGJPTqZ6w5wYbBvWmMb4Ypcf4nKRy3LHr7onWVLTUNep8GM3FFyZWvPdkm4iDFKGULM8QrFwuf",
  "key41": "5vpb7QY46Lcqv3Z8CBdkFzu2L9ENf4huoWKTC8NvRczkb3gdHFZ82HCAQUJKsRNckRgATcRwy5HTr86Na9Uqy9U1",
  "key42": "2NYNZXtZUvA84sU1VCyjxqH3Lmmavi9Y8U5eLup42bMMxZY8fZgnWpmjLriq5aeGy7PsF8e51Da9UitGh6H5N4kF",
  "key43": "3vPa4iDFWuVFGtdF12vgX1ZCmYqFoAoHRcQz4kg8vtmyvsfCV6UFt6QVPSkERNjfPxdxkKNo3oDA7r3SZdN4qLXN",
  "key44": "4H5xDU1EjvUgMJaNZASKFmjvptViFsvZNbWUxAV8ucQMMBv61itBGU8isenot6KJzCZktaWXNG5rgbCteAfWQNrf",
  "key45": "5s5Ms2J4g7NVAd1PBvmaHAK1SxqjM4bWbghGxaywdWxTfrzvQ3cY9ERZLhaGmVNXL2HAQ1N1bwm92wSWs22GE6XZ"
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
