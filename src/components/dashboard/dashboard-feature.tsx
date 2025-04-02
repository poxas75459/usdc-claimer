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
    "2zqsQNcUTUSCuhvg96C6m36WK9k8Gsz8Wsaefe8j2JtsicnYCnK5eVgufk7GgwRH4G2pRtfTAEqFtVLaeSiP77pN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CELEHSzEKoSui4fhM3yNg4kRLkSqkcgzF3pbgemPp2j444VP2Wbn9szkT3oyKvCwqgCZNPHxzHgF9q8S1oCapao",
  "key1": "5CHM6rWuMwknREJzLAw3ZqmX2WD5vr1D4kafCU88B5NqidECXHjPzpMWn3nTJDHEecmB3mm1NdBPXDF9o6yP2w7m",
  "key2": "2dWykcmponDjfC3aVUYuP4WvyM8mqct6EnzzoHo2ixnrdvLZWVFTp7GviLSGgrAVwA19xx2Q7Bjs4vYrpEuecU6S",
  "key3": "24YYHWr15wawXBRTwgWXJgmG6TNRSCx9ohSDYYyP1W5rVEpYtgrpmLQhFYyppqJpVX8Lb5DTh3DUYppumZdVzqx3",
  "key4": "5JdtEbSLZAkC4F9eWcBcnThvdHiaVnqBL7L4vbyRwV5VS16ynTUWH32hNTXBhjrLJScUBdNe6McWSsezKPV13nGz",
  "key5": "5JYUg7GcLLHhF4kGTTiBeBDwpHLzeSGubdE2LS1dBJFjSKKBZ3tkevajAcgEecALLgbsroFduMG1J8JjuVfxFTiA",
  "key6": "ajTqdYKPaNpVbNmqCrNDSys2g3Rsjj3R3iQheqsQGVFSaZL2tqkFZQeyExTaJEhWVpjoC66YHxMf7GtasG8P1hu",
  "key7": "4SaJHKWSNhkybJPhfekYMPVNWMUfXbpJfdUuY2LLRveM94uunfoAGSLbrSSqVCeKXdv2574ZC8qFGDhQU6SSyTGK",
  "key8": "5uGBbv7HbqFzr6KWW9K5X7Zc89F4yZ4pSzYuTdJAWBMhsBQMFmF2g9c6HggiFgJnFLK1MZZeHhxDUaxuY6Vp6MLc",
  "key9": "24MiosQuWukACGQg5msr4r2Ffn17boyhfLxDxUNssM8ydqnVsMZpwDo6CHXRzkBFx3pj5dCD7ggSeNvPmC9s8hKx",
  "key10": "3ZCuoWbd6pFyCT19rKcokWq7P7tCkp4BUF8jg7GBVY6JKc42scAaUYAwvndBU8VGGc8XUtYds2tGMyxTdhkpHAQz",
  "key11": "2DvhvwT87sh1jXeEFTpznK2fKJfLpW5dWhACXkb9iiJ1WgSPPB3DuQiGZYfqgycLKbpDhzoY3u3frdDUCRCQHg4W",
  "key12": "2AywU7jxcujF6sZ8sNVzGT83jp5Cirq4v6MbkJan5Qi8N4MnwBt94f7VyRERnttvcUuYvFe8MwToL1nBAFNtoLCE",
  "key13": "5K7f58crETEBaX2s8y4nMuWVDftzwvV93jowuiEbDpCHmgvk5GAeoovcMArVARdFTafKbEoqEPy2g9pchwkVMxrN",
  "key14": "2SWegvozhbpQPWAPaJa8XhY6vBzbR9YcCgnTuXd3JsxqB2qsCG3n8kRUH5NPirfEGrsQ5N944kvcFQ7MzmcphKbL",
  "key15": "5UuB1Ywq1QhMMJGD42zvugEHcu2pdKoc9mwYuDKhaPEBB754dTDiKEZeHd7nc8tCd5bT96F4F6CGRqJ3jwK8BgHK",
  "key16": "4WX9HzQE2H4CS3DFUxv32X7TV2dyPR42wP98aepCJjFeKmPCmuba4kZFNKNX74Lr4fMCPz2613MyKfP4nwHuCGwt",
  "key17": "3nKZ3tLnVLkDypA983zTPmHKw2NDqZvZmKT7p4ecTvi7R6jyUu7Kz1igBmb5Ph5ZFRKwPmAUSTEV6h4Hjmy51Kot",
  "key18": "3girksbuxryBRFPjjuvmFUL24KfpbvVhhUgHWR6PRbx8yM4uzSUEc1Db4sU8MLFuZ1CZCgUB8LjVqCFRtNoaZ1AC",
  "key19": "26VkxEwHiqyZEKFfwAu9Bmj5H7EUqLPMy5scMW6ZUfFAZLT2Wo7MzrLyLko5CLqC31neTRRVcjSyW3cP63Ln7HQH",
  "key20": "2wKZUh5GBbtMgjHUxvoE3LoymN5cr5DsV9eqCxrSMXCvEW4ApSGKRzcvGx7EjgUt97TcxEaDKCxkkwkaEyKoDU7f",
  "key21": "3HbAUb8HeqrBNjzToRLDTrvcuujahZSka8hLHmCm3ictnySMbtaW16YeQXYaVND5Kki9Crg6gWik4PXUePaEXNHE",
  "key22": "gLSDvGexp99vte17qUYn1czb39TexWkdDp5FkfdweHbr9rYBx42Gy1cH25xyJYMQQXPnbTjMFTKUTJ6HLTpdvic",
  "key23": "2d8ujdCFh8Q5A1AfsceL31CTVPe8xSP1hgLLN9s8Mo9G5GRv8f15zFY2BTgnLvZSndRJ3eZcbsP7yZPkLgSGiQ56",
  "key24": "41q8Ku44EUCcuSL5U6KRCaYPXzSCz7m6BRUDTi4wQKEsTk4Q2sXQjaYXo7uCdhYpsnQgn5CheAw1Jvff8oeyi1mb",
  "key25": "5kBxYP16CeBGpF7JrcbZMxo1o87g6jzon8frwFg4rJRmLoHTbHDUChwBbM5Q6ZdxkRMZN6KTxZii3Hqt19EryhfF",
  "key26": "4hYXt4RcqaDXQ4BeHTkWCuYH17R46RqauqqGr4v2R7nHULzfoVnesykdt8NTURZTmv48V5QnQajL3XYXsxiTswdt",
  "key27": "5YnoGck1SUh3oKhAiG46RGUbXw8Btusz1TqnbRPyst5TWhRHtMZB2SHcZUXZNW5jsZ4d1gp77oenzcGyRCDNVM1X",
  "key28": "2vpisr1P4B2qujMAWP4cYmqYmunvjLAW2AppFtkWkGBccjBt3eeRvTBB4JVXB1cvcMvhovXCygvuM9H7g5gafudT",
  "key29": "3TJbnndEJkHDtumZ3yMNNJexWh7Do3eJ5moqKBsaLHhZ6nv9Vhi1JYswodVKWKpGdYuck5jcLRLmLrvPJL8F3mrz",
  "key30": "4arqwibgCX6iph8WvtQvgoBXxcTB6foLYShXDg5mrCv5TXkq9gasGRF1tDGLu8y1UbNcdKbDakpqdcJ98uHz7xFX",
  "key31": "4zi6GZtfsw82ERGQ2GgKP7hkx1AMYxdSW9RSX1JsqGk8swhgEeASC13yo3WTwdBFENz1vxwPMjN8GRaYtwEo2TAB",
  "key32": "5FkguGJ6vwiBeTwXXYj4eWbLDzFYMEByoMc1NZjVTQhC2Aq99NkrBQXV8ZfzEv5Q8iVzc1SR2CKCT2NzfjhdvRLu",
  "key33": "2RqpgoWFrPArybb6YWyCEoDnWaJVjpmyS7fEeurPP59CyXpDMqfvBhrmBxhNvoYytzwEwNMMQ7JeMkcFyTmwAWNv",
  "key34": "2cLRnHFFYM81mWtdY6SFiFo2s1JUofTPP6XBTK34ib5MSug7BAJu7KSf6jYBk7KRZDz14XnkDmdvaKGk7ujKMxb3",
  "key35": "2Hp17xeVbnPm6R7LUvtCMDDFmWrL39sLRNsS16fb7ZiiMetbc2WMdbqQ1UY7sf3A7K1s9zAsutRDjHmK3ajVMron",
  "key36": "r7BPRzhAXdvbVoubPfmkZqoPQrvBAxAmr4K6UboYfgb5bKVy84R1xnVeN5nm8kvFgtiDxFpsDRtgN9xWaU5UhBw",
  "key37": "3hYYkkjcLb1c9t6uaLaP5svWSgJXvwuicLQGabZzSHwxwQbCoJjjoEtMT1Wwu6MPzDznkKKWUf3X8QsCqekVZrih"
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
