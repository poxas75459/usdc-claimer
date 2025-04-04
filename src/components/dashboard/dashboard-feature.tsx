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
    "3R8Mbzu1BTwWCf3CpDJB6Eau5koRRHvHtq6Pj47jofTDWBabxvZCrP6EyD3RZcNcAMRgs18KRWD4GDsDHZPeXnpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xizzDdF8yaaiSHmAxk9aGtid5ZkN3rVohiPwfLNLVdx3r4tSP5piMgfLzCLrxntREqyB8zDavp9jYeagrREHGwd",
  "key1": "enLyuPj4yeVix8reRZX1bZgTLQPcDFoZMT3QZUJFoZ3LprJDCuEzju4wJWSRAqwy98WxM3ivCNbFEyf2BXzAy7U",
  "key2": "1RatYUEa5Dp6XxMyAMuesxcKJfYxT3ar7oxhAazqs9aoznyyiFiAq5ZTFkkmM28vGfTkRRemWhaCpETB4yGkihM",
  "key3": "5Cr2yFmxJfU6mYi9PNCUUdeYM96CArK7fU6N2dGHrtBdbPboAsRKSdzD8AP2tpLDuk8bQXB11naNyMxG69t7LUef",
  "key4": "4sHAeAL5S7Qm6syeYRVaNxzzyQdgJmTFDi9ZqeVnZ38NvCvytvAEFExf8zBQSgQ69YpVnCWtkCnycyDX1n1GFQaS",
  "key5": "4R196r7CCkUjZBoDLZKGWVAzBZ7vJ72Q6zLnQ121kdXTPZcf44tSfYM5Uk5W9KhRZmXY2ms8g8GNkXxV7wDCRywo",
  "key6": "3NW33m2dtDnHVaQiw8tRGEs2zZEG5JnhWor7yk9oo8FAJaGvukJXZdaENdcLFGe4pbFntXqFhyMuQtbp8HUP7fA4",
  "key7": "2pm4bNsMoRyMZmA6c3RnAqzZ6S6BfxZykRFcrLNq64gPpqC55hEa64qTFkPGi1RB6kQQydEyQ8zoM4LRzv9ApLf1",
  "key8": "MyhjYoC7325FPdwBEryhxHX7T7HH25feTqTRd7E7zKwdLgMuGMFPkM9WCKsC3KCqiLppQxDcTHWLEWkrxprH6dP",
  "key9": "3pFN176Y6Pb6gRxxzTVvZNGwg4nwofzLN2R1mqP7J4gcHdxrzTGScQcdzauxJxHfUNk7UFvwTDZCRo4eBCkNnP7Y",
  "key10": "4mYvxNzFqd377N4gFa9TxRuMWEgdgDNoUwYNYK4eEX2997r4UZWc7QRQ9yXVTv16eVBH4sLWCpCBefT57M1DZ2NT",
  "key11": "2fJ1VA5G9pYTbW6baXe4s5heZtrV8U5q2rQTF4Gn8Wsq4HQ58k7BoksjfjLNEKA66GrxYkP88Cv4BbwArQth8sT9",
  "key12": "yA288jAaFRLzsVnF5WyJFMfa3RdpNEjNk4YDa5x8dWjPkDD76MNXaDA4bYbwenTfsgs5bJfQZtjQCHUpWzLteeW",
  "key13": "47FPUPTrYJcFAc4dMTRGYx5Di5gubgozJVJifh4nL1JgNuKaLdbZKm2mh34LNfCsJ8HW9a6anxYgvdHuzjX3SCLV",
  "key14": "5cjviu4Tq7uRekkPwBfUFNY2EhzHBacNDeAzDPqxCuTLTPXymh2Zm58vKnfFRdpvmF2wEF1FNrBDWSQVeRSVH3x4",
  "key15": "4AfvbiiVP4RUaaxmJDRoCBC3Nd8qGtYtkhyc92o8xyVo1DTz8mpR9si2VSjFdpuoTNhQLBLnq5viQh3otzxsujxn",
  "key16": "25KwcK85DNvg9QyS9WxmsadLhbNcVDb9EwaC7jp5D1JjQirEKLPs9uJL7L5ZQ5gETcRhaBo8dQtYbvt8sJaPddPP",
  "key17": "4e4j2Uzzh675uUu172EF2NyAM7E3jwEpQXzHFvQmHhLyyHsxAv6HThA2SQhnEBpkTiSE5GwYzbBk4rDYJcvK9oT2",
  "key18": "67pwa7bY6hrSkyKprBKbHKVPVk6Dtcffm9gQsEyp8sSHQ7ptndywnsFXbBzFiCXnNGTjNmUPfYWmxqXJjXGCzfbB",
  "key19": "31o2mzj8nAbDEPgGDyMHjF5evB7HTdq8K6NyzrqicakMpShaZVcKpJTXHTmbwE3cXeY3DK1Vv3yDnQ1TdqVENxCM",
  "key20": "2DeALysCKQbsghgZzXYwkXA43j33YWK47zE9Uf9e4M2YmWmQfeYNBHjGKMtoLeNxdjKfTFcnb9TT1ybqQKH9nDEL",
  "key21": "62TVEDPxYDt37mAjsjFA7qPhVUeDQgEEvGEtVd2jSBTQL3Kxt47tYAtVfq3qZUMrdxQWanVXeGCw41HPVHT2yXFH",
  "key22": "4JG5MqLSrp9Y5ydsERRvrzRM4qugevGN1FDjx3XQQFMikrUDx76FoUCjE5w38arD1UMbs84mvvwAKGNF1BCky2Ki",
  "key23": "YnWtP8ehva9pQyxKZADV29GKd11Bz9Kix6i8TxNFWUEmTCKZFRLBiQoAhXNVQwaVUt9ycbuoYX6Wb348Z9j6TPW",
  "key24": "4fPLjyHZoV8Kdow7PcX3sep58LVtai7ydYcTonEspv8aDPk6xfHgXnWCrmChdgsCJyxvVAZtMbkpz94asqFHKimZ",
  "key25": "269n8WDHS4V1Dvp43ReAQK8LT64mPq9LDg2qYvWhxg9WfTzz2ZgN6kx21F9cK8Sg9xqbwxc34n4ZCHEDL8HLU4Ha",
  "key26": "4YjadFqGpBiiL5SW8C9Txd6oBFrv8Hkoybm2A9ipgi538D5n6xvpbXoM7w7NaGpgCwBoF6nTw39LSRcPT97LrCgG",
  "key27": "DJ9ur6oz68CQwiVATJpk32j4ao5WSUfSyi21EADpZRttfFVJZqG8MNczu8irKHWPxJ45C6LemvuktFAeJ4RMuS2",
  "key28": "5GzrrBH2bdT2p5oD7mFmKY8XMKC522cbu5pHr1mbF15D7gyGtpHgMjsHhBFm7tx2AK497StMPACWbYUo68f12aqv",
  "key29": "3m3ZjXY97A2jCY3YgWQVvaum6ZWGKKvr1PfznWFWmXeGRdDA5X2DTyAoYZk6FZK592a8rQsSxMBvaymEZTvV6uXB",
  "key30": "2gY9XfBshSMNYdRX1vMJhQseGJYwh76ub6ToDoUZPhQjPNYpVbAqLQzgjtGRsbcx7JQDVHsrHSxatjGpvSzFVo5m",
  "key31": "4pmxJKqHLnBifBKmWEDFsQtDkZbBoJ4BmoxSXidb2erwnL68yJMQ918ycoP8znXAkgEqAXJegt695Vxr3BxuoKpz",
  "key32": "5fSywz6BVvVJ9yBa8PbKE4fUAS5zk21mPVVrbJ6nS3DWTsmd8p96FouzQcLzEFRfKnsrFKwDTWxMUrQMKBp5dKk",
  "key33": "sc8nHeLTiXbwmLHjAe5mtbL3Xm4v9T3g7NuyuYXb7XMrs9uVKEzWZEd2BifEZDhNDi1pdbCZh1PboJtKWLNC988",
  "key34": "2YQ4V5FPPAXA2X8SdBUgvRvFeci7Yn7P4D8k359idU6cqMx2ry8iq9uLdYgGqREXAz2wXF2xyB5k7SYNQeh2NumP",
  "key35": "U8fXNZEJYJG8n5oXdLP3JXfpTH3zJALvFWTp98tMiqJFZ4tXf5p7PUV94saMLD2pVmY4qgv7J74L8tkT4f3EgLi",
  "key36": "5a3qjtGcyfGTKDUaCmJ4g1JkmkuqTkB8CbKh7jypZ9z83cWdKNA6LXfxxPVY5HZQfnkBNSDTxywqC5JKd8mmgNLA",
  "key37": "4esJ488oFzDcexgaewPpY2aD686KQswQ6WZiHRXoXX1nVUMsNycnktJzqWdvVp6j675FbPjHBpP3pQGvBUDmgBy4",
  "key38": "27PP1FJPbKzsV2rtm5B9iiJZNBqdsQZ5rbJs7rVwRbDzkeGexuX3ezJrPstnTvxsSss1Jt8f5SmvC7eb2p9Pmqwe",
  "key39": "ZwB6bmvnwNVMcud4MZUB36mYox3HbSgYwPdXSrkeKActMYRocRgbhoyh1NSgjMUU5WGf9Vynb7zJBgQyf3t5MxU",
  "key40": "313puwQsuhydMeteVvW5E2cSF66zwC9gQzEkTEa2g6LvoFLJiRxGdWfeGepDwUwDQyD9pdVAY3iYfMDLhU7MAAi6",
  "key41": "4SaicP2mMUcAxTgrUVKgQhZgEH7eSSH1GjYTwCTHrPjytHxCgWFA5wXZc325ok72D9X8pacjU9Y2jUVJhYFwKL9a",
  "key42": "JSd8RaZdjWanCfhGqFgfzLM1Us8VLAvWeGkG3YKxtTsf84gRoUHZnzrFGqcg2rd5BuL2KbtcZrtUYBA8gZFRtaE",
  "key43": "55p3PNPbooeqRk4NwuwcfeoP4CiMBa1qjYVghcsi5Txdt75PHuSJgETnidi23njynVwa8mxpPR7tiW4NBZAvfryy",
  "key44": "3iDvgDDpvS9KnpcRB8sfXPNwyG81VqkwbhxFzjG6LDK51sZnjq6VjL7MViETd858FrJtPCrcPx3q844HpxB65mjD",
  "key45": "2QsmJbLeUZ5V2TzBvSYDoXaUFb5JtUh65xbbCYAfPxbJktnh52KbSKPDrRirM7XWK4gd7FpiQYnRE8n4YXcRSdHg",
  "key46": "664KM45iC591mrWfJ3XEwbwttReViQADmXGtLyNExwgKSy95XJmtuD9JEsCoAZHGRnJbF1GPGJTAjtcjjJshexd2",
  "key47": "QsuCBzahDWgcVwz6iSbyMNtaah6sYfFcqs7oYYGFBBbu9okGAyc42dzUQaU9nDgkFV1rRNEKyNJrMuPrJsbdH1b",
  "key48": "uXQuV9JdCy5Rhh9YJ3sQ8GACFj8Rkfw9iESaAo6foTBMDyfGjQg2tyMc7zAmepaJhQHRwEi4nhzXtXzgr1NuUDy",
  "key49": "2HMT9bY1Ph9gV6MxvokAdiX4oRfPLj5UW2qPrwsBdSMapbJyyDcyHLkgDG8wS8mv1ib2mXRWx9CCaAXHqo5nVDJa"
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
