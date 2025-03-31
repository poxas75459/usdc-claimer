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
    "5WAPeUsUDaeQzwFu1a2MXKnErPbLwEMBRf7Ymtzks7fviFHkKvnBqFWjt6h27a2TUJmw9aqEJymx2jsLWh5uaVFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qvFUrdjqDUGQ9NWjo9JZi9w8fuakH2A5Gjhm6w7oRs7hNikf1HecVSZs3kMuyCZZ341jLLKk2ZAbd5cAB8qf7C4",
  "key1": "uAwebcZvMtmZpTb9Nrt4hCrCRnaWvxcKA5wtaUZj2KERAoXfp1TD4mAhEzy4iuyqyxzbmRb5RXvfxKieqc19opK",
  "key2": "5gsUnZq45vaC5sngJX9CzbE2kWidMGXdxTyKEpB6KJVc6aTRRixusFo949iLV4dJuNXVMr9SAijCfdkoRAyxa4fa",
  "key3": "epw41VUMJuvw9fEdPH8jtfrAuvqFYi6Ba6PTBcyspfpgHKAH6SGz1g5LwHhtetSLntbduXk71i9Yz8obJeEfj5L",
  "key4": "5PinQiBcdmwgX4pz47huPbKRdrXssMMQQGDHTXRMw7Ttdg1jDR9SSVycN9dG9kabVnyCsBtkSjddoCBVJZ3FDK4b",
  "key5": "4ffHamQqMthviFaKdZUk7eepv2jehjcff4kQf8Y7skESfedeX4WWxugGW2UcWiccTTpVUcWbEVSTQNe8YZyMbkct",
  "key6": "5FauwADV5p97iHKciZFKPSb9yfENrBsPesZpQQZGFtjS9NuyagA8SfW4JCwthW5zkMpnoboSaC3gQUXfSMGYzioY",
  "key7": "4GjzJApSYRhnpXMP7XSoD2fyyk1Pzbmkzj8zxes96Xe8BRPxJc9gunfgX4qaTuUXdb9NMbED8bthzbrcrYP2ookq",
  "key8": "21tKj42LShq8QGfP1fJdceYB6EvgVWWGdXJ12rzXmHHUTYibd4KeQUF3CNqPcazcFhWHd3LzyosUrTnm2CE81Nbe",
  "key9": "2cEskCxGp199JXC5zfzpuXNtKtS5uYpeJ9cFYZWisHGLfjnCeXzaQMfP72kubGzGMXM4RK9pGyJtaww2NvVpdbw8",
  "key10": "4BRB94Nyda1rhmGavpiPnz5GdCkWkzwmw8vKPhr2zuedWpJe6LeJ7hN1KSYSkbdmhsRASbyGPHq3JBdvHuGYqzH2",
  "key11": "2mvekYJWrhcVjDat1DVfacd88bbasxC3kgG2KWJprrdzA5sQsCuY8jLpLumCEmeaWScMbovL5aUsALGu7kx656fm",
  "key12": "62xcfyzvbm4w5gGivcPoEMw3EBRTsGMnoEskCMwm68rc8rF29CWyDQhoJPdQpUw6DziKnAESy7wG3Rt5Sue4To9m",
  "key13": "e4W5KrZWN5Lz3qULxjAd5DCv3QXums3kMDPQVRxYKVg8or149e5gebNTeTEwkvEXT76sXjxTkN1F4zV9XmKf9Xh",
  "key14": "3D1i1JvLiE1YvVZnGzWQkVhhCYqS7Ziftzdu5oaRusif9DWTRMhHdH6VEf1TKwNmnSXFyqHCK5yCk6FcXivsi8e8",
  "key15": "43dbYVBoYJiAMYAAjw6FrwQcn1oSQNRs3rAU1ZZJ1vT5JfnGd5EmEA3LENFRgcY1V5wpGGsAU1ESvg4YXG61Sssm",
  "key16": "5oteNis5zxX9hVqi5ApSWJXUs29kiAuZXmZhRV1hpBPp9NFDtuq6YEK2U3wE2iJ1r6h9wbooqMJU92JT3Hj2edWW",
  "key17": "2Y1aB5ohxcro1MR5eBxfBxRZLgAeHxL2QzNvpMjvgkWHKMdM637ngjhVTs53CNtodbCAFZkpC5jhQi7tng3HxGvi",
  "key18": "ZFg5aexXdDnWuLoAxuov8JsmXvua5ySQVSzfEwAhCGLMenBphuaZTBX1qGRpFWUxqma6NNAC1PTBniEphVLPYk3",
  "key19": "4bjJjYYK9wChoKWJuhvvddZjTnXT6GxiWaRJwx35Lb8hZV6fw6WS1uBkFQMhHxcPa43pB1zNBJztSXe7FtkiwA9T",
  "key20": "CXzRQDzNazJTjC73eaCtczsAv7ChPrs9PDmcKd1LkAXNVFEBpcnNRbafZKGd45fGixTpqaiPqzznyGJRrkCcnLh",
  "key21": "LXa8XuKL3AaLgzYvQTUxyARgcwHeQABYYpa3T6nFtiYc4HbjmBftVFPkk9tNYJJYGArfiDNZZAY6MH4BTh3S2zU",
  "key22": "4gMs1QyREXiUbjXgq8Y2TVFhVwDRJpX9gWqiQYT7XaP4zipi87o1owzYpPD3BtZ6dvWygjWKwoMJ9yGQFVgEzdoJ",
  "key23": "63K4ejE91HD8sK3PPQ4Wm9g2NAtE4sqazMRe1Th54Jok1qW6EdvUznjZZMzN5w2xypp4W4LbCvTzAyJfmZY8qjer",
  "key24": "kDenDADzA5BopCiUF3HqJB9t12rAmNveNzQ94JbTiesV3uKfMKSnTuuAfwcFLqTtCbzbQaw5g2xPT6eDFXguhWT",
  "key25": "83u7Dp5myRnAP2mGwUmtq8s6kYQtw6T5c3a98aZsKWxVaRVADaH8v95axiymdRNj6XRSQe2Rq3EGLCCjnEQ2yCk",
  "key26": "2abXapHD69MehGsYYTHcJMWoVm3MTFUBWUwAJFSBCZngUBmvh9CSxwm65q5q9hu6pLgHKi7BGWPR1DULV3q8nvra",
  "key27": "j8ru9aPvgtNTrSumyw9BPXm2Y3Jt6jwdERdQhf2WLNm2GPrMv8ZzXgSiJhCgpNTufDnxwvZxP8Y61skBRiWVjgs",
  "key28": "39QDLf4GC3co2aheZhC47GMrZX4FFB3PyYNR8pueBnxUaC1b7eVzMN9fyk7eLthYb4GJwwyAKSyVqCy713uNDQBB",
  "key29": "4GqJQkLFkHUdscJ8kUmPJEzM5rwW7nMvNudHaaQneoK2waToEHjNKvCzuFbTW7XERX1hAMh9UfDumQWBMzasm94n",
  "key30": "3o4a4sv1PfaW949bVoefqEhi7ptTnqVigxiV4swYRysDNUUtxb7XJsxY5Q4r5HM6L5smA22o3pNWMDRdnaStGUCb",
  "key31": "3gjgKUnzHVRqdfqF34JLJxdBzpkHbBgGwhKoaeToWxh9DF3mF84VmP7PTnqmqeWidbGFWUstb3vepZdUuvYocJkZ",
  "key32": "vg29kicHDvae31UyVsDnuNU3EdtgPaWUm2K8THKUGVW8z2weAsiLE3czXuCRUrJeUqejE5GKdwyVqXZGCZatyAB",
  "key33": "2CrpmjSXg5eDbjs1hZNZFPqgK1d1tv4chNG9GBtJL4MSqMS2fGGAAs6kVqjgT1xZy5EMaiG75JrWSvvr416Zu8eG",
  "key34": "63eKriKCp5uvew6aAKPhaYfvyEKpi3YGM6diciPMyCiTgk9wZJhzkMGPKS2NJ3Akn4MG3hqnzL6EPiM3Rhjo2JEj",
  "key35": "2ydSUxb381Lht6hPaDukrkmZ77bDZm3ZGbryubt6k8e1UK8LBCXAH6Z8s5qFFjFZ1XS1TXJbC9NnMxdEQkcXwdH7",
  "key36": "3CfyxHZGoSuzB5t1zW16d2HbixJd8pggKqZ8quUJHSs5EjY6XYxuAnu6KmrYScxVsPEGQqHFwBLJAtZRBz26hHpy",
  "key37": "2AygqYKNjzeEMgJdMQiuP6VCBdNFv72ac3JbyTMx3zFoEn81XUeDtFsreyifdJ8aREGg4X3DViMkUMGYWWq6Em1u",
  "key38": "5LXEW3UneqQKpCfmr8NuWwqLSXRuMDtAPy1hQSFwXr3GPgB4xf5FDa5W4ghbnBX4cYdraBQbQu5ayX2av79mF1CH",
  "key39": "3Qizk4ey39XdHGT3EDi6kpk7uiurADrxM5Ne4geMjGHQoW7XtdvqVh4BrzvmhhV9cuS9hY9xFT7pTikqc888ixVX",
  "key40": "4rSMB5d8UJ3c7rhUq126wPqae7cJDHEyjhQvJa4n4dBYLLZ6JY24mhBEffa3P43BUaHkiveFAhMDeAA9nH2yMYaQ",
  "key41": "3VmnA8W8AbNf7Tu6fosLGLt9SLh8BSYBY8mYfBV6cN7pVnF6sSeKenYTXUVoMrxzuvEq1kmZmAYpK1bzsK4hQCki",
  "key42": "2rYCj8hS4LQjk7qCWGKQakwygFknKCh8EMbzC1EUXeRHrxawxRjHSggw3JjhJDdzXKwAeYhwEzFtKRKEjsYo1Qfs"
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
