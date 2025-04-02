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
    "2ykwwat1HCRDVVp1MX2Joqxkv7dSFEuJPJMMQFLpczLHQEoNN4NyiY8B7kXJhc4cFcdMgKBiUFhNufSTGVj3uTUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GXqh1dpYNrrvwseS4MFqBkyyr8F7oD6WjxrK4hMHT3HZ9ZGwTjjbNhAbfu6CnVRTqBBobtXpXUu3D4D9Y5TPHo4",
  "key1": "31wYMhC9VvupvQSQ24pEWV3r1UWAc9GuXjhTXiwDfqWnGZ4sbECMq6yhqgew4EquAyf5hytgS7RjRHbHJhuwXJgK",
  "key2": "2aEQHvDpJ3gG8eueFG5mNmCLN641GL3QHo4saQ4eb1zXjjDfzrmiBtkqdc7BDt8QC91ThxBL1c1UTxMvsB9bhXbj",
  "key3": "HixSRvho9xzZXX3sLo1euSsSsPZQjuXMcspk8qEEvjdZmeb1aukdFJJyC8CgAomwiQJ8YWouZmSurtBEzFwfUMt",
  "key4": "47oc2C6xAjJG4ZDSeoGRtdKDW1HpGeY8VYcLamwRVKEKoKazy85Soq6RjVKjf5maAwJ8x9N8mNsDB8isVSZMqL3M",
  "key5": "2gHY7kahqQXEzHyuW3poMLUgMtinEdYWXcwUY5nqjVRDCMF6WHfaSvKzkm862ohHkByAR5GAXJfpEQqAC7pYpqL1",
  "key6": "2ePp8MCK8rSwyuXGhbGQuaBzJymtj7NVEaHN4GZ4qAXfBxSBV7zrbfvgzWRAdTDv17aumsAXs4ATgmMQTht3FuCs",
  "key7": "63RSg4eaVxB4ToPtVyu64jrWAzsj5CfCurZG1F4PnaVQJyniHTxgfaqMAYNTQj82VXRNkoQrWXhEiWaJikD9e8E6",
  "key8": "3ga4ERYggEUAEDY9JoUf6FVzTHzz5etaPUAjVhWCGa4PssZJ7gd55QVPeTbvU6CJUXtdjsk1jzMj6XCDbUuU5KuP",
  "key9": "MES2hCZG1rGkEjpuaVWNfrKu59HnFr6pMbGTv68XQRGGHcrFHZ7Xc3nBrt7dU5rFmbqYrDnFEwHsBH3czwrKUeG",
  "key10": "i9gg8NXTWkXHpekkmxAhKjFjPYNemWQ4ThV4XYYaVdPqz3R84WCgWmQt9bSZU5q1qxE9qJRWQ9yPURM7goQ8xT7",
  "key11": "43XKFiuAtBXMrm8XXfLsXGAmidZN7o4YgCCTSgGJ4gwF4kmgtJomyTpWYvzUJs3CdtBDBWaHFdo82rxajfrkkYHX",
  "key12": "2HmT7xHXByLvHt2e3LvgJNNr9JKZ9Zh2vxWNjnChck2FT5epDEUu5Q9wpnTuiMAWPyhKDUZVZrHTYZPAhW7fSEh5",
  "key13": "4k2w2Jartz62ZBe23TYUAuDvNSvtaVFHg2vmdfBAyrwfwBKgggT8cY4B2GFa5ecjZ2a9r6odhUgcwYTyMXz753pR",
  "key14": "2EUqGAyjyQTeNHSeZ4AHVo7YACUmaaVHbg92jcdfpGzVV3eRh5dpUJVYw4UFaMbTYNx5cPEnK92v6mfhHZsXCeXJ",
  "key15": "3qLut2TYM46DDHnS5nRBYUEmHQ5cZJAK4Fqgrd7vTXoPRktjRho4wHVfa2LfERngVsNGFq4MARq1vidNC3BoSZq2",
  "key16": "2AtVqmDPtofy8q8AEJG9mvCKpqB68nQSv8jTqHijbBxS8S9eXjSTpunD12ABXKGYwGMxkijbQ2HHu5TYPWHoyKSN",
  "key17": "3aAqeuLHnA3FmMWpipvSAviFt3iJmXPxNVZ28ZpHn11xgM6RuQzu22aUj5x1RMpW7uT15kKeJebX4Wpjrebqn5Hv",
  "key18": "2yEd3TUx2GVUrJ6eusMH4wmfPzPBaUy5hcut3XPnDdGSV6Vjzvfv9K81rsdQPZfN1cb34ZJ51HTFca8wEiS1wTiJ",
  "key19": "5Z6gQUGTDdAATCQVb6XgZ1uJzqu4gv8Wh4r7p266JgXsLrWSfpyFVmqhishhB9QWF9EcxjGwnyFU2a4wdyv51mhn",
  "key20": "4HiX7rQiJ6FASPiwKD8U9QiGfYDDS5d89TC8Aca2G43FYcJyTG6TirqQyvWMxYfci4v9DVu3AEU2V8reH1N3WvVT",
  "key21": "2S2EbXDdMzmX52qjqrBEVR78MgaQGPgvZ3NmHnNgroyeBiHFcszDGv8FH1JMozLBNmzgpowZQ1RhYdUeayXQ7hf2",
  "key22": "3myGfGp6ohf9coXPjn8L7fhUxBjqz6fDy4Hje2EnJwdr7fdDQx4y8tToup4NiLMf1RH53b9AfE8dJoBG97MQW5UL",
  "key23": "23Vpqdo2M2efCzcrRumhdDdsQjco3PJ72wWGCHFFF5zNLMLyD5dnAMqCkJF5MZv7pk3qYy19CXeBcHynyYPvPwBg",
  "key24": "VAWk242vGENBsutxzK4PLdScLdDeRbd3SMQvEkRzis5Gaz6uxBqU1s7naJkjBgL4QZhdSCpwqxdGSMAJMTekNzF",
  "key25": "2X2sBuwPJHUPzXAf4FoBsuSXokQbkPCtCAQgCXVwizSL5JQMEtkFD6pMTWpqZc8ncxtTpXoe6Gsd6uTGWgFxsZUA",
  "key26": "46eStmcRxwpvcGYzmkY8WGgsZEKGZ1GEdK84aEc4zYZacq42MVTKwrCLoJtrowrwM9VdUrMhSVPfEfpf59ReUWin",
  "key27": "3Un3jfA8pUyWs73x1wGUTL8Hp6M5ZVHoZG9SxaDNdcKW3yrshfCbqLkWfbbzq4hP9pEKQytC742UfFiMPnpJr95S",
  "key28": "R6gXKxkPdsySjotju25T4ot9UL12RvdxgeyPFksUxMwSVVzN3dkcoo5opnb4RAHa7A3XZqDqQRhUpyas368yK87",
  "key29": "5Wvn45d83o3RjbwpoC6TgKHjbAKFRrToU5VYUBDWuB33TmrD3MpGcXBEEBbFSJHXeAEiimboBvxCMp7ESW2E9dv1",
  "key30": "66J9mf4utpfn741Bo2NemYPtdfWcA4aqanVEJF1BPLWZ29qEqsUr9Vk5rKZ1R5FxEUhNeMguwecC2d5taDdVvdYq",
  "key31": "2YnLNfNqkHTfHPVGK3N8MenW37eJGRCzVzzw75rGfM8KMJvqACuuAb5bDhzQoS2DsWfWsFWe17PCEFh6SKPxECHD",
  "key32": "p9gEnSkzHbwjmX6CqPrakmtHzkygL2heP2m2LRw8F5wd9afoC61mZLXG3fHn5AKPicDntMbZKqFqmMxeSnrkaQY"
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
