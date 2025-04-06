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
    "U6DVGkQBNpi85zptXpVKjzN4wyjXqcCkNaTeA664j2vvZK1fJTuyXFP66f1BWUXoAG761ckUAXh2aznFbkg4una"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56DjMNh2MMetZHH15eb6EprTvRVAEo7YZkiSJ9BSsb7HLN1PdgMSAhwcLQTXsz8SkwnuRoQKzLYbAf7SHoog5JFR",
  "key1": "4pNup3MJe1p6DqbY87v4EZVszdp5SZuKkJpKKzcsoiK8DfXxrBvLm9uAXxGrgiYG5WRw8tbM32vsr1rWF38etKP4",
  "key2": "5f5oG8Hb1LLzK5mQhQEiopxwADQN5EKM6WRMFU7FocpEfrHoXViA2LpHpuyc1XAyhY1CrEXMNJKVJTKNUTSX5uUX",
  "key3": "5zyEDVdzyKL7ma6TZcz2Z99WwVzLuKEJdgZzRMR6dXS6FhPWLzmGqiyRJGD8GMiad9zeQLzTjeXHL2tGdpgTBaPv",
  "key4": "56AigLKwibw8eDc7V8NznpZTnAk8EeXsV5BWhu2nAhQSMguKQV2QC84mpu5teCyUeb6uUDWGCbXKLATaNTWnUtQW",
  "key5": "5ZRwSmFiy8h3uMxjRytm62A9FWqEMaqnojiB4kN8VgBWB8wBtmTkqZzVwHeb2es2pYKcgp7G1V48oJKfvYXnTLMU",
  "key6": "2429s1ECc7VHMC4QBBbaRLqPStEkouHmHiU71mbjdEBrAxBWbo2phwUe4t9sEe6oCswtGcEjXEUsdpnWAmUQMvLi",
  "key7": "3UG9w4fvaz28XL222LVA6Q9LQkta9dijRcKriwZiojV6rpHyeD4qeaSVTwo5ecZujC3Mfga661efoG1rdE6Zariy",
  "key8": "5UoXkQvhVStm12gTeBMS1ZLfCw2sFk74t7yevXxvCfK3sCcszrxeMHi6jPcB98Vqg74Ba67KUJfPXEcgCuDewM6R",
  "key9": "47NvjLEqFXaQHr9hrKeQPoqD1ioMJAtC9kYSyB4KV6hFLFasXuc3NkLutXG4YZtha7xMvvwTmBbFiDHaSwj8reLn",
  "key10": "4B6F88aRj7ttmgGzpi8fWapu4QbNLhNTzoVS9ZqUjEzRwqCDnHNje9vToMXFHhZCm76tMqS8YtuYoAQAuMRF5WQP",
  "key11": "GbupJErp8yDB1JUHCiRekRZ3vitSBxNezwUUtXEcsF5AobhgePdYxyuLxrFLch9kJDcTNPCNKwWpzACit5f2z3o",
  "key12": "RPv98pHgdvPcMf42j3vHRffDSFyEFpimqhvQokHux5Gu2TcjPzAm9kUGD1nUPJscHDabEM6UBHtsVYnqP27bPam",
  "key13": "2YPvBg7BzdgW3a55XdywmrZu9WdmWhC2mT7aAbeCncnwdQqPio3Zyf7reQQWDZNyNUT2NtbGDNoa9cFwrk5nZvMX",
  "key14": "56CY9Bg8ripansVKqVyBfqSXobVTKKKFoZQuBhkrDxx4NVRNTfLcMSZ26QQbbVgJVBHBEZBeHnHoEpqEHM6Tacnh",
  "key15": "67YTtFVSLtFGeEqPiBAb1M71ZgsKzrcRyxkV2sYafvMcATUqZ1RE8aPAbypVo8Jc29TNAQfrYg9HuyDENC9WT8Wo",
  "key16": "4Nt1G5orpv6eJLm5UDpwiCkd5Sn1fpywt8zPRbCKNF2noMfs9D2KnkzE7oc7Nio3JJt2bzyQWD3YHU9FCTVycDPq",
  "key17": "2hBUdERhKKp1CuuMt8M3L6SKGcQjP58mP4xeob9W9t7rDRWvX3yjxLaHbySMkRTXgtk3DxwfbcqcyQhiHvZ6q6xu",
  "key18": "2EJFpxXWxTMTfnGmYSGW3y3sLRnMuEcMSzZwmot3hRWiMaFQ4Gse5CYXSW33iLW7ZkfkRWiuCsNqN4yu4N8oHAFk",
  "key19": "uiuTBt7G9UiDyWZYNqfTsgEA93ZqCSKkf3aAzUgrrWAiDFM4GpWvesjMMitBkC7muXKiSbu2SHo4XbJGbZfEV4a",
  "key20": "aaxBqwnACtqYbt4kHeE35FoSypgbBLXn5k9W3ojV6tUDS2bq7TcFNXDXLeXxpHjvZKR86eFTRgJ1N6aRN7EdDpu",
  "key21": "3tftGAwtyZ5Xz9PD8iiwYYBJftCUchTLAEiusNFVzfgoDY4JfaY4kwHsAFphHfjLJL7Ckg3xHPZrHwsF6ffcncqs",
  "key22": "3ZqPNjeAVrxfpMAUcqAote4FqgDKqNyQsU29J4A5pg2mnYQkZ3sLPYifrJKnH3LitduEQueRYdA9UJ3HMjpnaKyY",
  "key23": "5tyP5QiuMjs14ZtVzXZt7kFVgWCccuj4RHhpaBzEf7YxYWtnvejBvtDLTz3zU6vap3uKY89nsTXbgEj3zrRHVaPQ",
  "key24": "5mqKsvA1uVBgTnpJVCnqHNdwQmcftdaZFB2v3roVyVXsjrJrsKoFxCi9QtvuZyoBx9B4djXNWPEUEvMypJZHBqjV",
  "key25": "2mG2AMFvKoeKj2juSN5ur6VAdJszbKxZNpUHfLjR5eGmWT3jjXW4qtkB7PEVFGAaN3gx9QCYrKVJ7nvALmmNWp5e",
  "key26": "3wcNw1juSoFMRzf6yHrVnCLgudh5VszMnijRtEzSwBndvoFmAwVTfwKwEnfyP55Jj871vofYFtJ7PCi64Z33SQAp",
  "key27": "3221FnxHK5Re3wpDd3DfREhKqErkSKgQoahXbz2Ux4JtLKnCM74yCsDcys9oUgHKxYaYw4F1UUaWnC3EXh5T55Cy",
  "key28": "3iuXE1UPDepoHVXGENpDRH68bXp7Es9K8RECiobVX63hhbNX7MaFC4RSyPtCQCChEQYsQeMGHBvDgdEqW7mA5j9V",
  "key29": "5MxS7SGVvDQAnJwXaRKRDTndGrCgvthUR16HNowzDStcZqNqSmdc9mb1VKsq34hbN7kUdvW2rLkQdYT17nnX8qQ",
  "key30": "3xWJcAjz5g4e6JF51Dcozw5Xff6w5AQXHdY1W5R87BrVm4n4GretujQb4d4LrWHoKFzm63spfW3NhnNLnvQZxSMJ",
  "key31": "4NdUfijCrxFiBZhnVoGPxTZcaCMa5Na6HRVG2Mzz5VBV6hzK7Bq9TetLR2QWt9P7REPtnBP6Bv6K75btXevTL6SY",
  "key32": "3zvsZDhdHK4rT1tCdpGM1sUG1mWcjbAnBB4bedrTeT594J7U6eL1w2v6zDN3tnzacX3dszEQprB547M3uYtRLYXo",
  "key33": "4VhtjxE1i5JiqQ47vsMhEXkgjf7Uz9rofV2qSTMMf8NMxBodungwm1egj1qVwatdb9WpehFhnM5eqQkyU4U57b13",
  "key34": "3BexBecVLdB2F6XuixgKJCJMWhXqS6Vs1AUAbEMzx1spCgicapxkhkpKwai8sHpWtUg4VbjGdBRBxrt16sAqsq3X",
  "key35": "3wz8KZ2BN6PVR7VUHVraHUVuMzcVdXujJhitssj1Kk6Q5vCCeMwa9R4NmUwxsimLgCPHTwgEastkYmTyaecU5chp",
  "key36": "5r6DPMRK6zqWMdiGuzD6nPNnSqhf1Zi7k5Sh7qzfiWfE93R3v3mDkgVhjs823HjmYrfaj7kteaBwk1JVmDoz4BpL",
  "key37": "2hegm1U3mF6RcSxvuaJVXk8UunsTJP9zQx76guVdZyGdRnw1f95gscQMuTkQtjMVon9YA85Krtj6jnAFaG2KRvps",
  "key38": "5vc1qSwKLwxrz1xUs4yDSDTgqQ5Dh426S9r2S1nnpNZmraaX6ozRmTrbKV58LasLeQj7X12WXgBwVzAnAakdxf1g",
  "key39": "3hizHd35MYi398NAHFTrN4SMHJzjHuch6nQPhzvvtrB6WsrRkmYQfhfqFKNP6QWfzENb3TSz6vejogHF3G5jBh8i",
  "key40": "2FcMHpwm6QeRSGg8DaxY4xY4jRstD9HCcpi5GHNwURKmNte6EpK9oLGnNQ48XyN3NQyRJhtxQcAt287ypQ9JXXU7",
  "key41": "2v5ZvJwz8zmXFkkEb8RsZo1Wdi19zaiv823jR9EuLM86EtAN79N8du8WFmCKwP1co8qypJBhEjbEXuFjdo63QPiT"
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
