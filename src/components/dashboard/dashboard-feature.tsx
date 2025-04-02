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
    "2dKNQMi5XC73LW5HJErsx7SpfXhbZ1LFQgxiZzV4MrJp3HkYpSBGJvN1miEYsTBGE63DisSchU1tiMQkqed5YDCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SbRmXx19CgbcmTTQ5AKNKhAYLMXohe9eJrfRbXrFzFqcV84cju2b16vFaVSYM1SbVCv2Yb2DEXKQHiBaBEaTH7a",
  "key1": "354VhnrkiA6cPRyjaEwEBYwpnAyj7nfeDfSK39ijSgGFeuwNotPRzNa9gAxk3aeJsRgGRG8J9FTZZJzAFU7C7DcB",
  "key2": "2gZYtkqSQC6BmRdbkVCuiBGeSuKVViv3B4AL6HxrYpDEM4rymffVJ3o2ce8H1GzGwWNgnrPxU7rrHPw4Pht1Gbx4",
  "key3": "3NW3keZK181bv9mXZ9mUJEEYSKRpjhaN4B3Nib1KEK3roK1Q4t2WpP4J2GVCxvCguzPSsdR5Eumgeaa3t6FNUSLY",
  "key4": "2MfibDLu1R4NeyjH6kskNeZZinT6uEo5NLcPF7DrdVFRHQzJ8PwsvSuqkkhSeCF7vruzLHnwaPniZqsA72AiDGe9",
  "key5": "4iGWcNz3LTQMrtLxiZj9Nst6MPtVRQFEa55UkZj8o7VFRtSCvU28fwNQ6EDFkPqi21UagumSdqSgo9QK3pXn6gv4",
  "key6": "3b3YuXuK5ruVmSAypFjJvSKWcSajPiNG7eiybFzdHhdNBpknTnZw9ai5UKjwaaCTPCwNvuiE3Q1CWm3jq2tfjiK6",
  "key7": "49ffNzGB111iRMZnhh4HjC3Cd3iqq5TAtTSQauk3sgdhSMsQbTCkc38QEAbwGZpt1qPaTrwtgUCHY53Q55rA5tUk",
  "key8": "2Wm8akPE3eVMb9WqTesrVVPqmFQNqsZdyT3AygL3LQC1Yi2jvcaqPtUoxwv49J1cJigq2DhKGrCXR6giebRTnP51",
  "key9": "599nb79JJUJ122zEMKyY7rZS2hPrvtYpTcWPxVMDEaLCi159LB6xZKfjJZFRVbr2JMfz7cRCzNUAHHQoxJG2EfVZ",
  "key10": "3Kr3cvDoomnbWkJLXoo9vhsu6pCL3VqyE2K8ipJR1LYpgYrQ4prQGwi66XxfPCfGoBkL4gUCueGUgiff22YikuZ2",
  "key11": "4KJoariHEru71V1jNMzDsxJQwRuNXvDwhAFCm5AUPg9yeBvLRr9w7Qeix2QtKvyPXXY5S1fQ6a5jXjYwe2fhzwVH",
  "key12": "5c9TjEyHm4GTmmYSihPqcgzw69xdFRySuedGqLaCfZgdxezmbTNpqAEV4RAR8L1fvXjnham8pWJuwYegevrVr6XM",
  "key13": "fUNhoumtnty8wjusFKdfs1NFzYgtVJeTxxsL2tFEiMf4a27aZRr2P8kxeRgb628LkpGqQrej2a7BT9heHtgbdMi",
  "key14": "46r35GznjarpeZW2tgV6E3JYMzHU6rahCjHLChpb5gdJycUzyXX58RHxaJYgxNYBtSVBVuGHHoNP5Rde8TguUMDx",
  "key15": "3dDUoGeSUezrEDRffyGvaVinj8TnR4SYCQvoQacbu68qsp8PAUHwupDY9GuFzsMVCrTLrrXJUP8D4BMmPQULuo5S",
  "key16": "qNQE2aLWF3NSBmxbx3Z5ATroSNmp8sm4uJSHdzRQrMzECzLEZarrXkBdG5AvCSSALU9rBzD3CqTKWb7v616u9TQ",
  "key17": "3JgE2Pzk1yjXWpxVGJHePnsDfDb2htHyrMjHtVeos5RHMiZJUKsrTeQmGyuEJJf3wv4mDFCoVaAtXuwqZAKQ9wCH",
  "key18": "Jo5BX1fRJq4aEUgjEG9SC2CiiCRQFAJnQGAoT1ap8R8KTNfZrRzjvctcHkKPNmoSnfrKPZcJUoeUBeK8nND7CNR",
  "key19": "2DBjQkVywCRwfDzeyi3ZnJWkZ4LuknymKdRWwRqyJeLzL5YUDHgQ7rLSnNe8n3NmprMv189ZY2uYmstBmw2B4T6v",
  "key20": "3fzNVA1SmF4jLSeejPh6pbsZVUs6khXkucaoTuPxcChxAWPkGJwpBK8u3s7YPQqqMjAsW9frQoRE9MFPpYp8z9qG",
  "key21": "4GqRcsar5NDBsvWsGBezcc6fhADM5oDBbDSEzp1pPthpbUCBL5NEn4817vCSqpufC2JVW6ZKk2KcbP94eoqoiLpC",
  "key22": "34rR41F2S9GsauzeeHUjEZzmRPHo5osAtf1tngTpDXSx1jzQ85fwhxuQkbGY7FRNxjkeAkRpsypedr5mPtNdnQTw",
  "key23": "mU3tA9JtaBBJRFAyToGotJVaPqYipoPr2QRU2xRdw9cpYDKpcHjZPxcnaRpV46tbrQqDS5KqLDwvSJDARBnNNqs",
  "key24": "2sNm8nx39YKaFTGzTZLVb7SbxgNeEgoUHjuqcV2bJMoJDuBrguV1Aoeq6niSC48nsDiGMmypeQJkZNaZ8rDNPyrh",
  "key25": "uvodr2uf5HwA5a5b7W2i6FyrFHHYyQQrzHcvsdG3FCGBJHKn7zhKDBRNaDC9NCxWLgQJU1opTRrKWKnfTAXAMRv",
  "key26": "2Av6EsyjfU5gNW6h4LKA4Z5vGwXjH9i9XPwDyqwTD2hKNALUihNP2Ga6eCA1gTGAsDius5A9Mv9XsJxMCLg2TxDB",
  "key27": "5phDjKE5nAiwYnRjmyawLtiSic7rnfpDMwAihmbPmPq3RSSPeKJXFaK3HBYsUanuFVfuxRwo3kpi1kqXDSq7ZfYC",
  "key28": "MzN443KMsBd7TP3wUJBwEYWu2G8wFzbky7xRT9nrxJ8QVd4kMsUZ3Z45BXZEXm5B2AdMCNZZf2poNRnyEFbNus6",
  "key29": "ngdMx6KU2SAbRBmYof5rE5UZHgiT8BVhvoPeNVBgx8o7eLpVv9FL3UJfjKJ1iSLmxKxW4FxT4DzBGCZjfK1Fq9K",
  "key30": "54h7njPVFstnUY3q5pdEdTgmrM3v8RdQ9m824AasGkkLmAyobXYBKsDYExDxo5GtdaQ1NoeLp2AXWADTdyzbEpS3",
  "key31": "5mcHEmNK7U57KQ6ccLpS9V4ZctcQeWiFM5DfwupVsNQBCG2BwTgDCfJBuWvXRKYF55i9PEufKbvV9xhdrU6T1v8d",
  "key32": "4XgDjJ6RAxGD5AuKDCBFo2piMGd5w8VoUkaKeBxUZrrDUZqeeysjTWDp2rcvVLzLPSHbFCD9zoq5ZtPZWSZ87Wcp",
  "key33": "58T3X5vXK89gTBaSD4hCZD1bSKxfg7ydyhqaxvz4MpTJsrhShcJfrpF1psTNNyAASvSMwWUurBbBB1uukJ5qZJeh",
  "key34": "275BB9HwSWjWdgBPpe1nJpMtNB8VjmfKmvHmb3uKNHB3gRN8GqMJQUdstXyJ9rX1WwFo8zavrt4Fe1iGE1nVQZ5L",
  "key35": "38mTVQmYwyPmaDEfujE5wx7FbQMUMFSYJLcKV2AjtE8s2RizRg2LdHPusLyES1C9wK12YJVsgco38JNtHxhuRMrg",
  "key36": "5BMJurdsBALKhBH4bpiZZ9sZNDSaCtP1boXX83Guo7UKiZwbHH1SdZ5JG4W8GX2k9UvK3eboR4G27Xt4sCDeyoSQ",
  "key37": "rjad7Nma7PSjq49fwS8cRdjKhM7wz9aeccu8ti8utjySEmtPzJbPuBtFxJmv4zUAbJu3Ffg9ogZ6wPoFh7gSp6a",
  "key38": "5EpBRBf8HneQPwq5WZeXA9PHCFBnUjnWyMzy9hx8LW6ViNxJmueGrY5yWFAHx8GpBxZjiWP6SVbSjH4arGfTYYLj",
  "key39": "2kfeDrhkoUfc7uBDpcJSyTqDZDgvMRZq8ou3x9yiBfoeLixMxmJgTLPURScS6BjLqrka7uq3S2EznUUpydZ3ienF",
  "key40": "5m7k1tFV6U6EMQKq8Sen6Z3dvewEgJqWQWwZmWdsxt3X6dPFuqoasRK3DnU943C15U1efmfKFWUEVA35xE9ZfnXD",
  "key41": "2XaoNyrAEoTanLNqm8bLsRos8jzd22j8gcscm9MYuChE7GJNcx45NYZftWoSwNNmTQtWEhTL9Z6KZGf9uPgdoXN",
  "key42": "4SrZbJGvVP5MsHMyYRAsg9eJUKR2njFjrSBmaYuwu1qBk6PkyEDUyhbVLSBrsNtz5des1gQQ7fPD4sjkes5Cnk8a",
  "key43": "maLCuo71YE9oYsY5VqyD4MgMADj6S13tYZgQzGHz9rRnMAygxZmVggxX7F7Kyy5NH1jUQyQrFX1yBToshhky49J",
  "key44": "5Y6fntAahjR4qycfWWq6GureZXwVsSyHXx31akd8Mk7ucFSfk8FLYdJ5gfaHTSy7kGe1BA84G7WQ1TBfgZCqNzNY",
  "key45": "2wgqtMYY3ojtcUFUHa3jmmsL5HRYyLoYaCYo95NidtYbWoHsBCQAAHFCbpioJqyRyvUEELtsLvn58A3gnat5Z5ZU",
  "key46": "3B1ziiUJeH2FE8ENRvpf67FG3gWp2ehengrphmvGDhvL8QcWJZx6Sgy8NP58muYHaTBttGNmsfudqM9nZzEvCds"
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
