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
    "3XxY2nCs15stgfinsjCoLxj7T3CLyeKBHAYEc211EJL51jwHeeLgg9hm7pBaCZquKxbHcWGrraRJBqjAnB7QZYru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AEMqNrjbxXLgWMthDxZkhpzNoviMejuXFphHeuvepTDTwmBJcgqa17qoc2nsJnKqDpqRzufwFEwetBdezUS9xib",
  "key1": "4MsgD1rkRBeDy9npjmGr6eF8brjkENzZf7abPK9sdyyoERsXz1ZwfqZbnkTe5M9jrPPzmGedLswQNaiDombdAiAu",
  "key2": "5U2PmGpiYGSn6WSE5DBYVofxH6QVTBzcG7yWh9qsaZv2sk17JPHPkY2osB61iQhW1Xn8Gt3xJC1rRYxo3ec9AWGW",
  "key3": "Gb1HdXdJXgiK4NeqqdrpGE1XVKuXqbA4x9uEErBXQ7zJY9WuQBcCu1hfdv4dSThrcpTLmRC7J5CFC21gVX2EdqX",
  "key4": "2LwXTdW8dN2zXS8ijVZNWjpj3AcX4hZDqSm24ecHwWoaQEhQ1cxbxQmrMss1SaiHtFyUorNXJZSmJLTMVzcRhG6G",
  "key5": "4X2p4Je8EZFq5mu6uRTgDTGS6R7Wpjzi6ry6fhZFRyPbZMebCUz2zDZtCgBZTJqbezaZ6JntTDic2R7XmShdHULm",
  "key6": "4pnTze9nQYy9HhwZVP7WGrbS5ZDdxndyVaDmM1wzUoUdNoAuWPyqm2EDYarpiHZSYNkWJa1UYnyTMQr6GQDpVRSn",
  "key7": "3BA9C7C4SScsMtGYvzhS1miaqa9bSGPSa5FrZWj8rwxWhb74gqotRmBz3Ji2dcDzo95wvWimqNM6Xwt3toHEVpiT",
  "key8": "4kwSeAMsKUk8nYnY7AwE7StRUiV2sgLcQ6HxC3x7pDNXvMALMsM2ztrtSE7C2uSWBPFFTByhZKbt3b9UvsGXgt8Z",
  "key9": "59DssypitMjBPFBARegctBXKEUNR2VGyBELNNmvugQpbwzkuRdv5uxzagbaCkXBbnhksJiegcKfYZDDQkEVevTdp",
  "key10": "tQjnQm5RnfYJbExEjvDW8wUfp5bDJRe6evpMXxVxB4BkmiMkYBxzTvKZWZYvQzuC6xbUQwqdNeA5aea2X1yNg5Y",
  "key11": "5mWHHkcvxP4ZxWRj9hYsp4c9jkwTen5JgYc88g5Vkp3AA8M8ekaYDUZMyDtC2zzGo3mbkvcdERuKTxDAcTbhFKdK",
  "key12": "2ADCAW81PKecZYY5dhQb8Hz7BeEAsCxjNhdg4DprR5SXYKbzE6Kxf4avbDK4yWi2xRy4fsPBZmEWqwCyicdSfE31",
  "key13": "2cFnEAiNGw2oK4Hkz3K32tRiJJKttrnN9hzG1LzRuqJJs4GbjBvwdEKVPMg9vaQ1tMDxvDjbKLn2sQ8yd4gqh9ZW",
  "key14": "57cuWd6niKoT7ywAoNSQu9ze4vncXn9UDfkFgRbRno4pVPjDSyKXr9pdNzZWgs9rWC4ZR19AjxRRkurWDyGwHMZN",
  "key15": "3CrueUDGYFnykpT53Tk9ZkkFKveKRgXQTjKqBuFhisRYUWGKhcZPy4dqqXpFYbqWcGrUh5nJrE4NYotJsYs2LkJs",
  "key16": "3EvUzW8WjQF4izZ5hGZdpbz2Tjg5jLDUKZBm4XHhCtpFxSbYijzooxhp8SsFfgZTRgweSkFxehMPRjMHXwibLmis",
  "key17": "LKdgsQ7a68yDjRDbRnnDnc1N95mgrKSxDHpg7KRMoSQfWtLi5ZVZbmjEDqKDceQ5USQwG1rMZNVZMXoMqeahX1u",
  "key18": "BPbBfhDfttgiw7mnqqTGpxRsns7VLQNYUiRsjhGfqJf8L2RWpW9xTs2jXKViZNtJNwMb5ToEqnYvyaZcC9XctTP",
  "key19": "4wSugujbc9DQjp3ZfW2v4HyxjCpbud76hTTm2QEuiZGCMsHa5evM7Qai8Dx5nMheXa8mWfmFu59JPBgmpjft8rwA",
  "key20": "2orma7azeVwqF3Tjj9CCyv3b86aAS4AL79qnEsbqpVCf4jo3B2y2aeqrtYvA3oWTHjH8eYhV6hC8ZqbTGEDDAXLr",
  "key21": "5PTWSvcXANCJ8x229MUb7CVfJJgFRMRyNkZ1NPGy6K6XKkH6Vkhzvk4qa2CPdMG4MAkFbVT4fiBP1FPEk1heciQW",
  "key22": "5YYUVHb28r7urvhjAUcSgZjh4TU2WHNsQk3qK7JLjHvw4Tn6J4n5ATxrNyje3R549GDoPb2TRS1UAGDvad1u3rf3",
  "key23": "61kWjn5eHqYh3JKoXM53L5XTqUjVACGWcvthEZeHbdALj1WLCziPENR2atHEf3AMGNVSYgrUpwj9XvfL3Ua9d4fj",
  "key24": "tx3mgikzqp4estqA5emkhGPS4QTZamJaQNdZMjVE9Zb4p41jWHeWzXTLgZidcqSdAvNmS5QA7f9CkUHpsUJhxSu",
  "key25": "5AGWEYowsKLc7M5vpdLgRva7b7J8fLwXpm9LADvn3z39pzV7B1vUaghVSnnJ3enyoZkBtqBpdtjNYzXrPgjJbeTQ",
  "key26": "2NJ3Qa9LqCzpJvXfP7pqQTeozMpkxYun8w7UXZFVMoLmN4g9aLnriDZx4RGKizznPkwSMgiZ1JbYGBGhVjtDbfee",
  "key27": "4AHcvhdhATH3BzK1rxUJKs6gtKNfGf35kuwfdDWEKJeZvumfAUTjuuFtnnoYV3zVBYwzBE3neT7niGLCLLbJEbio",
  "key28": "2whDsuJEkCAtL7ZUJGNnpa3qyXf4cfqkJ2WzgRpxPX5iBvUoMv43MqbKfVdVhofe1Bv4mwrNrmxjsSGFkDbrrbWf",
  "key29": "5gzeVCntHqfHvuhKrPsJZnqaZxEozjGpnEggmRL75auN31MdXJ74gzjFycSTMhcbSJCnctvisPEmprbPoXDimDw9",
  "key30": "5FBhhBfzvhGRfszhxLq26xCeZwvzVvdZtw8PMGFJfbR5TH2m3wnPkYiHWVRSADp32A5fBPrEUGimxP7MnYe7Tu7y",
  "key31": "2CNyjBqhA7MQwvbRVdizQS84yc2RBXcXfznvPxNKj9Dx9VXCqq1SQB7XAdxfud9cDXro7nnqvXLFVX4Ro5p4euv1",
  "key32": "yzxAQLXtpfBJkSazP7xnDRhcuwoMXiDgsurErTTJbvuGRcMZc8Cy12t2RdaDW5Tag4W4P7Jcx3aExQArA59vyq4",
  "key33": "iwEPG1J31Shrnopimfg4Lw2fmuVtmgc2VbisiyqQhxPkuTJmDWkYVJ34pWAFxbtj3imSinUZTjY9QcwZy5LK8eh",
  "key34": "4YPHm9NzKXuttdEqi7zJjv5Q6jpR98DDrAbWnH2ABJUr99fi1hbCWUvNzLCip31uZP6H6enS8XHnrjUEKvndJkeu",
  "key35": "3B7jP8oworWr6fXzpAefP6uasvFcwynPucBCbvo258zwQSn91YVvU7jePuJADR2L3J1KHEDphA3s4HXKEAR3QpQp",
  "key36": "FnttZw1RbMG3sbdhAargvRMGiyYbES6ubbCDYfg5e4eUM4KpknK4VvWRMbGHtmriVjaKwFhHLpQQSs2tEHRTWfY"
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
