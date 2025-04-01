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
    "5aFxeb9zLkfJ2PcYbriQF72osZ5E98MxSUtCd82CgTiTwhbJcs4YFNHMyCAW3wv5UYrBpEf3JSZNqwgYLhZWbAHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24arXrXEu6RuquHSnSvCdsDDbQqtZzuoMb5bDkM6QJM8NznwAuuTpGiPVQoNET68A583EAYdP16XEykAEStrJFpV",
  "key1": "4JjFA83zUp6vQ4HZumzrsep5HXb5mggGPM3tFJ49KmBoJCjv2E1x1cZ5g5dyaUn2nHhH6phJ5274QFhEquSCBua1",
  "key2": "4p4nGaqvRoobc11u26dHkQgsbPtsqUN7B8HhK7gfReU98ufPt4Npke41C3DYUr1bKU6v6s7eaworvzs6581kz4iw",
  "key3": "3uvLKNoTUDzAG3hLwYL3EuVVHmXcZKxXED3281fbDv4HGqEE2JUZPpHtG7LTpkddkYqeVQdNBDNi6gUa4CZ58H3A",
  "key4": "4LQVjCTEN71ZKWFGQtaXHVB7vYQp2eXvPj8Kzhxq6HtQLwu1wK3wka5qrhzeZratPUMfQHTpgee5128w1ZtTYPqk",
  "key5": "ti5BSmneYGZzmtV77D1ChVRpVqKarQzDqBNZepJ7GgrvQN4Cu3FsxrNGuoYFqP9czwcZ3b6dHXj2pnLXuZf296o",
  "key6": "2nva68v8BrjgsPxLSnkqPH58Y9zpQafeR6TA7FUJ56zyCdAiN2BXXukrME1tzRLvrHMSnfv4cRNa5pFGLQvZwMpU",
  "key7": "rMd3LqTgEFYr3SogWj5oGoYYQnvZ62J2F9RFAhb8thCb27hVF26fv4299tgWNK8MNffHbtSvFQSyxtuHfLcPDAB",
  "key8": "4oZkkj3rmbD5Y9vJQtWE7DKVEdXzBgnh7r1t8utY7ffZfZu2z4G6htCUdKzpHVhEt1fkcGvMFUmcgKYyVG4aqbha",
  "key9": "4RQAUwXPCSq5eZCm3TKWkHky4Vqf8Wr4Qv1AdEsLw1MRYs6iMTFd9YxzdRxZ4jqzc3Hf33sMGWy14ptH6tka34X9",
  "key10": "23zm5JwNggoE8RhZvQyvyrLpjzp3suyhNq1JURPwRZULiY4LDKU9Cv6kFXp684G8Uz7WKkxb23YMeFk839EbGBUv",
  "key11": "61BYMFc2EU8b1oCeXN6x3hvm7cbapG18u4YCmnv91TsXTSSPhL4M7mffbRqBY96bNba3zoUsrmNv6QKcBxUVLaAN",
  "key12": "5iA7cmZixHdT9vVtp8LTTey3j6axFazYvLEfvKTs27yhRQTuAjAXxXVD47pXAZs2ae7BcD665nMsD75AxKZEVLfX",
  "key13": "3VStg6uyteMYFSTk9BU6CtyYW3H5bWuEofdWyLVZD14FsQKoR1T33xjDuqc2fbaaepA4thccBerDJeMPWBK6MSeg",
  "key14": "hDM877E46cxG2JujqbbyTVGaHTJbbSL2jx48iuELHyo8K2uTjxNk4SPD4gz2eNCgdj2W6E6xLmZJep1Dvc7PK9E",
  "key15": "5AvHD8xCcyf4hoEVePZMYRaUpHmXKUdKurmHwWEGaB3TdMEhNQvHhUwwZettLS8Zz5kCF8a7aWkGDY9ctZxkdHVq",
  "key16": "2K6mfav5GjnpQKewtebQSQABxmebU824aVTvoUEJqp1CMjjLGtCq7mfghDoLu8Sy6aD2u7vDFbdrFtt5cUs1zSCe",
  "key17": "43MnNuMhZ91K4DNitP5ivDdgfS17PbcYyBQGysnm5x18cQjk5jCGSexChYyVtNuCAtviJcLHt9aZHR9wusTh58Nc",
  "key18": "2ERwDiFsN3agfhk7s2BBEKZkLuWzLPR3HHhHYasTtmcTaheWYmKr7EmyN3E2Aa43YXzhLQzVkDMvPDcY19q3GfXX",
  "key19": "6bEinCnfFXz4MsSfhD5SyJFXhPvJGYmpHxJDhZuVb3EaJi9xBYCZHfGL6THYNVNLckndwZ5D6pbPVKg8EGJB5cv",
  "key20": "3E16qd8h7XkMfE7beVYyvmeGNuexdgrENp8oSkxrxUwn5CpmWVTEsc1W3XAgqjmmJ75ZuMJbjzFUd96NaJvzef5i",
  "key21": "3sLS3gZcepFVTQ7oKPvKQhcncfbX9oMA4yuvZ9Vs7fLeskwJcqWHAViuVKRQG5YmpqHrTh7yqAgC5BNuyZ6z2mkz",
  "key22": "58tKM5voHdAbYQrCUfA6EkDN388DaAN9vx4hKjQ2zAMVwaa8RsMv8Ytiv24wF77x15phZC9hFrML8oYWcXxDCfEG",
  "key23": "2ruMDzUG27fMrtb8Sa2vz1cLGEusiUjhjod6Hvov9uToiX1ff8giZCQnjdjrxnN7zNAezqxV3UFha8H75MCJ1MvW",
  "key24": "Y44HbMFM2kmnSwswgb6LeagoS89zSqTgDmAFpFFHcDyMqmxPm5mtMXKHHyB2ydacFcnA5rtmna4WwnQUUog1Zaa",
  "key25": "4EwivTKiqCTdEYXWuYAdgw48bWXF7RvLZVYRmJEyvEFYfYJH754ED7Fs6jHnirtpoX65BC148i8tBcEtwExCMWW3",
  "key26": "2KLV81HrZYVKH5QyX2uvBWv1p6iWnx4AxNMnmd8gxfcWsZfjc6J77ma7MG4xbakQhAQ8ALpG8htswRmbemWfozpy",
  "key27": "H75Jy1FLpPALxSgaCKfv86TagzCnvY6gyPmFnFzk6iGtQLkX4Pxs35u8MK6HazujACc7tASoFmNqyaznXAYTQgP",
  "key28": "47KhQNjJk1gAzd6iKRSgxsrKxua9uEiQtaqoDiwKKjhHYfqZpTNmjqWHUio6P7ZEwZJ228ExyDDMAV9EMSK5Y7Jr",
  "key29": "3gasy44k77aQrWwR7tuE4VE9gQU1vcYBE8ZCDAAdyTdLZwCFGu7JgppTyPdndAiT5MSbsMeTgYVFxgGhy2vREsb1",
  "key30": "3dCRRmb6bmdx32JmGbTcKRX5gtVyKu5aL8qvLv4dU4gBxR7ediS8eiB4in4UGGSDRQJ2gHZ9HQha5TJMG3FcWrqV",
  "key31": "66uF5bscteJ3GFpHsDX3dupGUePwmf4iQBRX5zc2Bwtpq43AbnyDd7mUDtC9LHuCkH93xboVyKPDm5cLMSBxDuJJ",
  "key32": "2Cffe4bVWVr8gWH6FHTmXJnFa5yWLbT8cMYhiwS6wWYb1ashMfUiM2fRNzerAh4i3E9FGUmEH7QFpfwHiUjdnYCd",
  "key33": "Bebk45aKdGc8o2daGciPf4mqMYPMSU9SvQUJyQyR7ufKF9EWkJGeUHbzeSesbYkFCK2Sd3NWygUyGX2F2ke2WiJ",
  "key34": "4ZzVgpBp1NBAbaUn6Eq5MPn85FLrMLbMWnvfHSsgK5mw98itjjWh2TY2CSkv7hNk1D1EeZ68gin2VAbZQmxGE2P3",
  "key35": "51pKGgWcUUGTufSgdJCpqmEro2FDW9SDobGcr3f1ATb6XiZqmd484VSEwxj9kJj28PQ6n7XuDM3nrgXyUFxFbFCG",
  "key36": "4G31o2jG5yjEPWNsEvYdJN6uoYwZGdBvBWoypvXkew4KNQruBbbsqB9HrfvQXf55hUPGF5VsNoYnKRNsmsxSY4Ag",
  "key37": "4PBMYSsB2vczRPrW2WFfKhfGDW2iVDhGKinS6zz9M87sxG9hZUNHjvD2fCDTE4xMMwSnygqVrVoxbn5YHRFb24q3"
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
