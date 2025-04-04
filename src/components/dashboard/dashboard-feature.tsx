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
    "5p9CAjsdMpg5dkgdubGkze2JfjaMJdHLgePYHwTsymKfHsvneKbYQujC7gRsdhcW6pJr534EN77cFDAVUYmKS4hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hwdbpKnGmDEAu3XAWcYYf3ww3Mh2jkQLr4DNbnW7K1xy2V6yvqN5SB6FSRMpLCcLbNnWFttcFbJqJ5oaCYuZzDN",
  "key1": "GUDebDrv4QYLxc6wKtxKayjaq6V91huYJVMcrAN8EZPz22hRmjEeNCYuWrGvxGn8RyjC6Kv8EbX9Xmngg6vobT4",
  "key2": "3G1wcsjXCik3zGx7jV7fnokD6iKMdYHdP3T9aeNyLAJkFk96UTTMxcNvoEMBFX2gw7xXekW8eVMC36iiHyn2R9JZ",
  "key3": "3hCDJQDuQ3uxhAVmTSktak48En2sTzb81xUfWzLhz6AEYvVBZWPyQnS9haCng6a1HyzxPbysKLDGHDVcXaHifmXZ",
  "key4": "3W6fdgMPyq8QUkuMyZEko2HonmuGb6HZYjj2iWaxhvrRNGNk78tM796ACTACcUZEBgn55ocXMzQDEthXLqd913ki",
  "key5": "4XnYivk4GJxY3whaRDAv2n2xEP3ngVpauo1Rt2693DK5TgpViU4ethyxxquVS1nn73FcXDUxaS5VFvoPxn5gj6Md",
  "key6": "5d8ZJWZ3exLRKaH9FREDGQwAGW5cYEsjjQHTCMTJHRTN4w8FzxTMmHcEUm7QN693jw2Ehi3RPdGgfMzn1TRBFeq1",
  "key7": "51upJ5adPBGBJPzkXT7MTPp77xpemGf7MUurc3kZRTrSRvTUg7Uqqegqk2nTgeHu1bAb5fsNN8twBK29DPh6qARd",
  "key8": "39YpY5crpBMMmHfCEPdt4pmGcEKvJ5aCSNEHgPC6iANe9r2ShjGWGp5gvpVzRotqCVxHq51G6XbY3UiyjSZf1FDk",
  "key9": "7yuVZVvJs78yxJU8AJfSwUXTM2vJmKzX5SnhBDhjTBeThjjW9vdruZZ3PKK2ACXJgMhYmm9N7G9k2EhLTRphsjE",
  "key10": "2EGXeqwyMmRJ21ncFeqcSLseoXh8FxPLvi1ac8mKQyTwN2Ah9Qi3KGD2xWi68EBR3AKUQJzbP3t6n3UiW5fQxgdR",
  "key11": "5amFpu5h5EaRk1imoyct2stq5rMvG3y4YaYhBqyJ2KdhYrKy1or5m81Q99NS4Cbp5FPfL36gvs7r8f2384JVZWmi",
  "key12": "4EGnrj7KQLk16PvGDpbrzUTo7yaQfdGHgGt16zfyQWWC66kuvdFNySTTH6tktn2AFsX3AAPvSYb6JBaomuJdxot",
  "key13": "4vp97XxicPo614z3gkFFpEqUjMWaBf2K4k7RUPL7hWM3oTjXfGRoafLoSh31SEbreniC1xHLL1GKMYvr35ik72ms",
  "key14": "5pH8oZdMV7zWuNecziBxYBZF8XGhpHyzFyU9W9eYVX3rq5sagjGPJYwnJwqQCzU2KWhrQG1r6hTBmzEZuzyAapBB",
  "key15": "gRfav6ok4u9Xy2wpTzfPRCcKv6bCZcDW56kfPnmL16R1MMcYKkfVdm2f6TENaBBLBWcrSr31RhsfzJySxgXw7FA",
  "key16": "53J9uAqU2F3YHvPNbqG2ixD6kmRK4AyyF2hNSY4PLvoeDoaGhKYVtA7jtcwqwnRf1iYAoRNMcvZXezaX7xGSSHL8",
  "key17": "3gbALxbHPiaXAVGFMaVXDCrGtnPd8gm2jVSD7i9PmNSyY3oKDJ3Ndq77qEFHwbhVXCUFo8BE947YGC3AQmBNk7e6",
  "key18": "4sqkPmTGVpfqDNb38QmLFrrrGcdFRhQox5ZskuDjgKxLn78yg62fbjfwwTEcZ454eYgEDr6igEWW8Nr1AfuZxZR",
  "key19": "3YqXdQLKvCQwDhCRPa8vUtLD5y7Jyqq4usz4gRuKS4iB7KxADLa6hkug46APJrrJmDnnUvm5tfo3ZGhmJ4LuAvzG",
  "key20": "4ZuS6MBhb6mqRNtPBRvoDQwFTosf5X1i7ZN11saEWiTo9MqzDmnJZX89z4FLZkaD7mJZMKcjGgjJEPYJ1j45ggkp",
  "key21": "4ZdWk1zvphpYMPSwrnSF9UCbmrnbVYGVb2sHY5V1mDAN74scPEMvmmqHqoJrMTVE95vcfZCXyTo7VMErLmekPM64",
  "key22": "4xCi5gnHFWVQWKrNDpcendETa411ANHz9CjbifLJBfJxwsdDUBgCikK7CmXdjuj6kaQkqHnY8augrhWm7uzFxgt1",
  "key23": "5X5pvJMj2vGdeTsLNYpawiYRR5FEbGPvizHHdR9jVdYktRp9g6PRaYw7heYon9VYLeHWf2crNJphcJ6vLjKGqBK4",
  "key24": "3eJCSpHvrhrca9CS6yX6UfowHxcrQ7fHhbMcyxUD1sPRaQL2XUi5saEgdX9V4TwjjgJDDwPE6dKsiK7WoKz25s1q",
  "key25": "52Mz3QV8rD8biJbtr2ecUbLDoTStceMArYu9oVh1nUh5EwydR57FByYYZxAvNv51GZT4NwnWTUkuUvoi9Dk1Rcdx",
  "key26": "ExVhKVYMMPMvDNFsTZHD2EdisEiWwVHwLcBxjyV6gKaiLThA39JXXi8yZT47bRJJh6T9mH838z2TJMcddpaq5vz",
  "key27": "JmZ8Qc3chQTgqzTXoJtWKAiZZNeBSMLt8iBVBYD9RXtZDbhMtp1QC2nTPktAak35g87v14RdgYXYhMgEFcowJns",
  "key28": "24b69AmHxuFtCMc8VgSYVURfpRfNDcSs4uvNx7zkFXHm28G8gqDFvQgNiRhjq3xQQiN89Wcb1HxezX46sQUr8uQS",
  "key29": "TpoieE18AKXpMouwNP96qpdbYWCWDZ3dZu431Y4izVaSpFRDaz1ZYPXnWKof2cKesThDqpTBakM5TmUTRmCRZTe",
  "key30": "TpYjjuV146nAYF88KYHYb2DiNhe9ja34cPMp3v38FGUEfuzg2ANN2GddSXtoTc2EAkPP1d9TEwG3HuH7sBGQ6Na",
  "key31": "3AQnqkBazZRSYN8qdYisZ1qfaK1gScRRZexR5BF4Q29doDn69RxfW6yCuNsCLXJkXhHt8tuijSk1WDfDMatgJrtu",
  "key32": "QM5ea7w9a6NGXmRnQJuafdmg6JherMzzwHHLKcP7L8zXYCbsqAqpacQS4Tbbf1LNSZPTo6L64bWPVDvpaY7fyy9",
  "key33": "66WjVsxmsiNFhYizefcCjKzwje6E4nUuT4AUcafaVR7HGjh2xK33wpQzo8q4BjxDxGKkS2vwj55Bdsu1tGuMt11c",
  "key34": "5kzFJG6s8oswHJ8Y8GiNPL2CuQQ6X1EeWFgsuWYcYNc3o76ozrvXUsmKXvWp9KKxuUVYjrt3XdrYSg6yHRqXrqhA",
  "key35": "2zAAgikp34y2UUADPzxZd3yVWMmoRuGU1JQPViYVg2hSQTxT8AcdEQHyzQj2qZZEKEFi9f2qLea4YyxQYCpVL2EM",
  "key36": "4vrHRB7UsnLVxfUysGfJr6jzALnFCoEPv3c2FMF2tfdqMyTceKKUneTjQ3GwiLiudfARELmge5f6oN3QnGsm2Yb3",
  "key37": "4gpQNadDQ49tkauv2Le3pBt7JizAhEtTpNkyV1RjGK1MK3BWQeaVzMiMUrxpfTjGAqJbrnwSAjbfQoQbBL5cJFtp",
  "key38": "2ueqSAJyxt2ZNb5MgveXCtj6rfPVA2DaLyiD7jWHjbtYM1tQcY2LkhkA4bKsYPbhJ8RUVLrqUff73KyfeRDEKab",
  "key39": "3Jm3KGzA5VA2q4HLmwWxQP9G9NGSXAn1b3GSd9Hih5msvnqH6ZutJhUbcqGE6ZKmexmE5sdEtz33QyPwyigSzFda",
  "key40": "bUAfz2TaucNZ7XFLwwtxNoCW282zgikGKMeCsKeJRZRQ8Fvs7ZZ2WSJcgJLkdySP1QKEChjNGq2BVu3aCyae9cn",
  "key41": "iSiyFfS9XQsYST9AURQpjs8yRagNjJtoZZJsRgKB2J1UPwLFTHJn3MxR3avUpusAuNocv2zXR5uXhL1wFvdsZTm",
  "key42": "e95zZCNTULEUXTMw5rDYbdBBGfVT3us36WMBui6VUwY8ywGVbPGeXgVv6iELEy1cEPqVC9SUh5Zd7dR2mGxE28P",
  "key43": "2gctRw1mG4JbwQf98UP2airgomcFH8bu8SDypBV6nZDcN6rYqnanSTW8qjzpVguSYzaAt2LcUnYKoUMcMALdGgS7",
  "key44": "4xDJRKRhUJgkeC8LSgvXF6u3yWhZ2JiP2QuXMeRB4hvdX14kY2B4zYazkGboAYaQoPMp4x16osNzVerVvNJqj6Eb",
  "key45": "2Pv2dUw4rDv5Q7ypWzxTvTTjFUy8qbBj91XLVobjvUpS4kPjmGuZVjGBnHQPwSUwZZyshFt5zjEge15NBbZm5YAp",
  "key46": "7DdvkvEJDp5bg5eXVanFR2CFT14SZfFHn5eWMQg4c4kiUqrGYPKSJvCosq635F9LmiwhNyZysxKW1PGBDrxehL5",
  "key47": "2MCX4SCb8gngghURm9Uf7WCfiSyHKbY5dNCcGiwmkA2BdtudcMRE4t3EG3XeQ8VKFzoXR6sCwT1CZwdeSHfKju2a",
  "key48": "3mxsRoBBzNGpRyeGHYFr2ENQpfgeTG6PTqmGvF7YABfPofJZd9WQpmmAUsZ5xXZ7K3KsPAyPwTUVeviyabLLSB5M"
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
