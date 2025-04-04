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
    "42aRYsAHMbyS9AdoCM1gEhtg7YBEWYyAyeAU5Vs6REiXMG4ojYGx7xtQpmTojYZsS2r4uFeU2y5qbdseozLnFGUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wwVqtZRdZ32dBfsj5uDnxTTigghFWa6QUVyRdFRLT51XcoAhSxB4xV8qmNXJWp4fjqrgxwj5ajGgKGh7w9ujeE",
  "key1": "5wuCwZy5n2SjGZrRbH39SdeXdC9U7dHNRfx2PVtupagJ45JgzNUJXXixYUiadY443KbPsCEBAbu8e2qi3LK8kL5Y",
  "key2": "5r1TQNZLPTntzssB9CHcmHPriQQdtrGJfnaApDd6wzRhPVpkC6bRatA8rpyNDreJ68ojgFQ1Dr7XPVL3fxFRcYLL",
  "key3": "4N78ogJqBUmQG7HRerjSqBYUNP8mnFpbDTgpLM4j5mZpeyd9zGTAVHWZ8jtH6HmDn3SKHGnkXtaQMWHWtTNQnexL",
  "key4": "5tQr3igzfeF8w4Va3YvRaJAXx9J5hVmdcacgM37xtvCcixa9roQ4BCMwBgzU4UDRQ8QsiJD28kgMMa8Rtk3ebWhp",
  "key5": "4N1toifXGWEwPtUWhKE48A9qNp6ykED9eqgFu5SNYefDwVSvoXKVHUcas3rdzeMMB9NKDsQFvvBbk3V5ZawqL45e",
  "key6": "3rQwfkdU8BwAnYcomjRFWkQXMUaq9ejdzgrTbgk2qdAUNdEhv7K9sgWsLhQ1YVGoYFoECjYFgPLvi87HWeDSkGMS",
  "key7": "2YKYS1SdV2rMwcbramnbfaCpxNSkonHRxXypbM54gbavK3hFW3gJWNaBuq7CeVdvEqkU74ykQra9hH6HL8zUFW5h",
  "key8": "3KPqGyhq8eT4gEeJ77E9zDSs1k6NNnH4HmABqHbXu6khuQ1iAdrVVMEpZgqywgFKpF5LBEf8dujHetJuAEWtvVFZ",
  "key9": "3Ybe3fP3StYsqE16jjwiYc8dqeuExJNyHgPa1vzC3YJZ4PJ8N64zDMqDMKTHqGvJ8ShZ1kxDZykjLMeBqG5tfTEc",
  "key10": "22QkviUiPqhca52rSgT2Gp5Kq5Zz7ckx2SNWY5QGKf4phFKm1JWCcRoHdubjTzxSgHJMCfCdWzA5LahUG2K8ZoxY",
  "key11": "2kbEaFYd5HvibXMAyW1759LhjTeqYyeL83z34FM4DmKnVfnvMXRyYGCtTLXPi6ZtLqL2QqRWkxKRDf784f7zzVGU",
  "key12": "2qwLYAssyeXogbsgv6ym2LzH4nYH1ZsdkPxN5DQBVF1n8fzUCAjMu6rbpuFPkjaYYotvkJzW1yxvHHNLeU6P3DDF",
  "key13": "2oUe9fjwokbPF8q7HjWRmb4m5Ct53zmN2SwvYtvGkef3fdFtWhdCRRq4WD861gBnM6zBwTNKpuuwZW97YcvtaxoH",
  "key14": "c6SPyDhfPpq99yi3NriVWzuqBrdPXEy7usAWvzcpWTaHHJpaVZMQpfwRJZf7ojxEpqnD4aukon3z5UHbMdcFQed",
  "key15": "52qSP8NrVeS2jHLjJaCmA7giuSJ1C2ZmibKaxK7n4vFVM2XnfX1uh5JmkHMHYpM29GPRVeRMqt6wEjYyZnvk3NG5",
  "key16": "374ivxA8nafKvJkhqFjYWSh8NAjYzL9TSDtXptg8q8cbHb6VJ6PieQziVaUyuAaqLhYbANDZPJTNGbpRJwwcV4md",
  "key17": "34f5unW3bmLP1kAimRAouS365uTT1mDy6gRzmsttDPjanNqSvQsHm11KrDSoibtkEwc9G47wDpygNSUCmm5YZkzv",
  "key18": "xefrxPvFumpgkXdsoWPkBXHoGcoxUxTTK2Q3EKqyaiE8ec9W48XqfiHKkd2H3pZnpjHSqhT5aHgRjMb7QADLsms",
  "key19": "3rfpEtg6JBuu5tcAq9cm7ucSU4T349oDJLsZnSZwUShT4MM5wE2xFdYRD6K1eYwEzbNHnqSKHBvN16dF8rn55c56",
  "key20": "52gzpRoyvJPwxPA5t5EL5TJVuCRnK7ow3C5qB5hkwmNTfAEBAy1SJTfMA5KMC9UzejbJrEzSAr9zMvA2hBVkQ3Ap",
  "key21": "5c3ifSmwTz7Afj4PnNCwrHYkJPhQFYegur1bRk2S3XRdxNbZh9DFFiGFCHBedmS5o6kcQzsr4uaRLs9CMQUTcH76",
  "key22": "3tVTqsuW566BqckNQzPjnkmnC5fFqLrqrX64WLaJSQzdeqW1CGaTeCENCGTi5ujoruEA5qedoz3QhonVCnQTgmjS",
  "key23": "DgqDxC9fBuKduZvvcMvDc4oAbnrXL1HJa6HMiuQog6LisigszZUXXCBMCBiurCxtPFz6wWdMoqj1bCYf6LJP3fY",
  "key24": "4xnUv1B66mtbeminS6Wu8M5VK2UwRCZ6469zyGcHhmFLgJvH7WsRX7J8N2abdS1JWsyS33QRkKkut4ZUbPk4AvgJ",
  "key25": "5tVEi5G4tiK9Codi14zNdfPpnr9UQ2G9C9pETcYrar5RLv8KwoJpfzGVoXGCZmc4FDNEDi5q2LBJHLfoiZsHKeR",
  "key26": "5F1isaS3Ci9LRbZrPr4Go7RVPktyngq4cFfZSjrV9JFKfxFNAFaiygphYjL2n7KdXRybqXEFgyDUT41d4VxVYpYx",
  "key27": "RYXnFQAyPPoq9z5m5oE4gGMriXNWacDWXwtVeddoLw5RMGfZZ2QjNHw3QZRLyFJgLdhkaH1BTtiaShpwSYU5DK8",
  "key28": "62nAabaVHDLJK6AgmEacUu66LJ3MjcSQtbjpaN3hSMis6UAqRxkNp6f3RhzZQapYQGZ6B9dnNRZsJWEfS5Gws5rb",
  "key29": "3oWmQuiVvmVySzzikj5ZdB55EFbSasxg6iYBTByEgv1viE3jx1Vq2EMCJttob5xECwwDsGjDwRUx2cjMeMVCNqjV",
  "key30": "4VEfviHACBnSwKcUr9ohWQL4DRhQNPjdsVHA48wWZoegXExK6zWLWk9qJdUerRUiUpMm4wG1ScV6swnUTVk6cK21",
  "key31": "4PaANdvsAjCw1LNuBjS8FSmsXLaAiXD66PqMfqkzyt411akft5Y9buJ6vb2nBJkJZrSg1x9LSA3DJFrfhPA7B1bW",
  "key32": "2ZecxjZvhzxavNLYJF4gbsf8jTazKASpVQ5G73EjnX1jLxpskrWfzdihmnTncc6tWqzHaReCMcwBz6fDWKJFgYCN",
  "key33": "5mD8gkZNxVWBwrKoN6ej4HMQMEXFgjzh5HqBcfbXnXbq9r3TyCxSjg4qUdrFxyjj8izKBYTPcm25V3k23QXz7KqN",
  "key34": "1a9XHhGAhBG9MN7cLgAa4JPi1CuoNTMhoK6KRyJd56J4WyNhPCQdSeUKBkBABsMHogty8Tqo5wQJqnFH6oH7WhT",
  "key35": "4kqnXTgbRXcZfYts5Z1UjKRuek8iYV1W1McU42yS42CxJt6FXNnVVnDzxu87rKExZhCLCjaGHWqzDxTqtRdH2M3h",
  "key36": "5Jxc2SFYjRfKukQm3t4HL5LFHikdbDEkBRPsBdxPfTcdxZoddPL4YHvXiPVDuoH94qe933MECBzxvPzzHUDt3d7v",
  "key37": "25hqt9SMMV7d1j8vZvycag2CFtwKMCgAoZ4QSNKaFRQNFAUXSMAvtPU91Ja1gr3qJD9cSjJLghHBoCZ5aodjBSZ6",
  "key38": "3rF1A18sqZDMSRugEyAVPZkMNiaiUchMaGg6Se8CLyah9Cq475zSynaPSCtj97ntbwMRikSbuQDsVHGqxniwPaxF"
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
