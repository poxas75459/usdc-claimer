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
    "5c74JP9EKPBYgBSWm6hiev1uZQrzosfxt3YhGPcjnAavQ8D4fV7GnGuwUmBE5a5yS2nMFf4Fm9vbhQ8VYfHWy95H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lusdw7E73ma1DYJ1JFyfArkkCotFQb27muwP24ugajEfKtpJLv8VB2rjT4p6oi3u3FE3oQjnL2K9tSQKNysP41f",
  "key1": "sAbHF3Ny3PmBuS37EvMy2PFchQxhJvTw2GdHCxfuEpQBMr22tvnGXv689jEvLGsWgAr45bLKztiYcxkNJc3JiVC",
  "key2": "4jTp9VcBHwqRbcZ2CqLtRNHLTySvG5bpMvKSUVeq56TTge6K2Texv1j625ma6MX5NE3mirfo1rYi7ru3joFGrCCt",
  "key3": "39qTuB7PmsXTPQbVza6wACbHZ6Dz9DfLfXZV4yXPoQ8ZFy58DUY1hNYkxJMRJ9ZsRmnpdF5zzxnAkaWG5odX2RFM",
  "key4": "wnPef9Av9RBAL3HcyvQ4o7cV2nYQqkjb9xGFVF65CfDP1FxJZ9fTgSdZCxCwWkaaurq655A8DteVpdsnwsFGXg8",
  "key5": "5mGcTCXkQBepKBYyyu4zyTNWWVoqjV2B2Sc7UgN96g9URtw1u57xgYSgEksrWGn8HLmRq9ohMPPKkqyyRZrxoysL",
  "key6": "L4R9gZzSyAb9Lb5Zh6MMMY1dMjqmYkoMXu9HTeDkTGDKqHyuRvTkE9rGnaZ92ds2aSfBcGv6y4o6mChdihY72fW",
  "key7": "21FsA77LkX9uUeP2zopsCrQKaA9J5b2mKMH8LJXeHotC8Fztb8EK6LLB3hknxAcsML4cRYkhceVHuDfND3kSBzEV",
  "key8": "2aoNeg5jqX6HQUQ8whV6WHgUfzRi2kFCTLR7CuoAu8upUVaHzA7RUYWdwDcmarzGqEiQ6EZ4MMRBhhTM9MduEBaq",
  "key9": "KEgc398EHCR8H6UVuw5pgz8zJ9YuDZqDumzHjzXnkpidzTdP26CkJRLPXY9fTRFN3m8ic2v59XVFx1b2VqkNDkD",
  "key10": "9rxcZQrAnHGozgCq6oiRFos8nqCeGYmWAosF3BBJewkzvHbc836sPGf5Hkm5J6UCyXAAsVZThbhqzNMzH5QjK2M",
  "key11": "4qrJ2BJcYHoPeyjV1a8xDrEYmzZzc2qpaNtpSePGV41ue4gpbhMo7wkZzU7KwgojcS8f986bq4o4EEmA2H21nWNG",
  "key12": "3dMaS2Vgm3eRmXVthiuJ7VWh4ebdYrNMi7qd2X8Hs22wHSGoks6pruUTYhsZJJxvWANkSNX6DTFJwPZf2p9MYnoK",
  "key13": "LxYoHjY6FmduYXCiawGnXwAxxE7ixTJV2niBkCfrbW2YUuWLtWFRp3Yks4vbRWjDn4RQGhdzGzEUtqp1Gb8xDqR",
  "key14": "eurEf7NoLMne5pgk5r9uSJbvA3XVw3qgbYmxhtxiZZiVvyRxuoGyU1jr1p4ZZYyxcDKHYEn2GcjAT2ve38k7GiF",
  "key15": "3fFkYUadjx3PnFWWBgF2bB9Yf7n87gRFxzZLhBFvzqR8Ki3E7sSnXrnTXFfcGGpMVP4dbZfoot9cxdEw7wjh1DLW",
  "key16": "v4W9N9tevW5ebMKnykezawFw1Nj1nSzg9r9eRMkss3tRKNkyFMCMbA4TTNz7FHPveSqN6L4XPNAu4CRHxAS5Wma",
  "key17": "G8m2K7or7L3Jw53pijMM1GAZTdHZtdf3b2TWcm5C8ssV3j2erZoMpWG5qaaXVJB9QQmtutfqYtigfqYB6vCVcMy",
  "key18": "61jcM6b3ToRwe22coQomv3opSem4NwWKrj4LwKmDp3TNTfXgTqikavaL5JS7UKDnToqd2qBuTH117jC6cd2jRVia",
  "key19": "2Cfqj8kRfjk6kNE5Rv3txAHwfxwxyo2c9vVPG6Ysi5m4US1HUfphMBVdSUH6BWz7Tb6xQSUYCpCjz5twBVkbDhuy",
  "key20": "3FwH4Y6SRLYdzasmG5v2aiCNgzfZ1Fy6vvMvD37ngKZpnfd8hNF6vrbwYCs6fbW1mzhZnvDgEzzbGJbvSCXLL2tR",
  "key21": "3vqKX6K8noyQFWMQBx1f38h3oyFVRV227DJPhXEST96fvE9xmQQd3JYcTANRv8Vy2gaQYVKhQbeZp9SxQN53dTZP",
  "key22": "5wWX7okpjuTSLPsZRUwS1Yuchc7cZRj365K8t9B5Hp82xRxF4cm9ymKx9xRcvZhvfTBJgaRAZeyskYPCFE9pLRPJ",
  "key23": "2aC6xhqr1HpLvKYL7iXfKc1bASZXA7GSi5deuQWDjwJ8RpLDjW46VioRZes8RyuWJndRc2qpAy5Krvh29kzKmgsD",
  "key24": "5hXsQWfUaJFhUsUgPZVAvypoqYRmgmrQh7YwUuwCvZjio2iRart8baEmgmBsbeHynFzB72tMDzTKhJT9xTt8Hj3M",
  "key25": "3Rif1773Hw6YT5BXiQtpQng93fW6kJcbL6AmBCvStrB9Wgo6aHKXzBJcbvGCA1eZw5GvEoheTBYpcefy8Xsmco6S",
  "key26": "2GUAVoKT7cKjuwXvyh2rTMwiYPRX5gBtbxC5qJaRnRSBwPk1zc5196nH57gz825kF4CqbUn9c9Dhf23qQKqRBeAC",
  "key27": "5CSe5qfd3Wey37c255iEFnxmv6r6o6SnZ7cF35cAhjU9JnLwRsbE7dLdHCXwQmcnhkRcQ1fzpqJf7YCuYUEYVDkE",
  "key28": "35MuJy9Rej95d3aC6GvK9wqF7XwrGV4TREWbvGUPwhDf4VvELMT56gf7AZmiFEmB1xGXzp1EqWjrxEf3GTGeKvrx",
  "key29": "66TZVPFybZuAPQVYtqYyBmzRysR4FUXA7R6pXopiqW6eBZMHH6eTQuUZSRUBQ8BqZBxJ1StFHAnqVz3uPe8jx9qa",
  "key30": "37Wor46imB5JWbWi9cT6vcSgSdWrA9DfjkTBsbPB7b8gRLEyVcJ25ZRNjojan42DTWwdFYhd3sks8eUN8EB66Qi3",
  "key31": "5J7aC8h29jxGW1TA849KG83YUkoc5QuBJAXfJPUg8QNEJWz646YNW5Utz6xw9kBxD1XkzdhDHDxRxY5CrU4AYGnT",
  "key32": "38wNnYyLy8cSdnNaStY2FxSH9ogGG6HKSf3wy7hjfzzpJ5jf2CdBQxcoxNaAFe76vZW6fEvcTBcpWysAABrwBWUG",
  "key33": "3hamntgYU5EwRcSogFj82kPeRL6VjC8Gxrskza4NUDn97FQwgxLDFGwKRmMAkyGFbcJZtTqwJM8Tartg5dvrkNac",
  "key34": "YYtNUsZVc6EgJacoEQaGqhoJzQis5e7yfKWUBq8PspVTXjinxAL62Cfzuk4HskCedoC45ySs7ztwFEz8vwJMVHp",
  "key35": "5aq7jiuvF9bz3EA1UNWBue4dbtFciFQQ3Qg6eWpqHs3s8MoHPeEcoahFs6mt9VuMWcMcZX2S9NXx3hapDUTRPMB5",
  "key36": "5koRUwRMUEHnuHHY4kBA7tD4GLPuok8bJFgshB9k3f8MddUk671xvGFTeGYBWWfTAhYdxxHQukk5g5xweY9CPXAW",
  "key37": "4pshfByiK2TkSgp19L1WEbRjWkUhpH4468QLAhZnzJJRekHuFLGh71FLNvs52vTymrYnNJHPfhLCCHra5WADnoop",
  "key38": "euN6GjFMzLs314BJSfzakgZpKEoTDGvdB9GBtwkEepJ51ejtALTFmoHbP4qU5HtCFWbWNkfBQFo9oje8eVA366R",
  "key39": "HBuAHf4SVKoh1WZrjbfHj4NvDaxcHibRuPCYMKEvA44hoUmrjuFpbJks8hRPSMrmA4eCTG5Mw9VdLxhVcWq84gs",
  "key40": "667x9VwoY7gg2acMYRjrK2z9djsgt8uPA4EkjhLKTxWw5JNQhu4MxcrU6PTNANS6uywpztE5cTpwxsFcEg7dLv4e"
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
