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
    "NvFLqLMr1znzDZRwBPJhG6tVsYw5H7Z9A3HQtVvDd5bcRBP1PaVcVWLddb5gRCutN9yrs5xCzBbMeXhCyL5YBRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25G6yjhn1Jg8DrrMtD8J2YQRjdgBzMPYpwJ6mYkRfextUuMBTHzz4g9i4LBnuFej5gPQCrhWwkMqZdgMUa1ykEH7",
  "key1": "4UFezErgeP8ULsR25TGjm8tLrTtgGzDEMx22MWsvsdcWYU4k1uj9RccHkNqMod41K52zQY9UUkJxogskc5axfH7K",
  "key2": "63MFkvSQSGuRrU6FneBDmXHa8V3c6yqrXiiExiE6GzyUKsNZxnYeUuDGNYw98BEMp8ByKzSP3EB6DRmz6pnSE3ZD",
  "key3": "3XgjFgdDfAzezH5F8UePFfgjBYb1cmd56NX36otVuaaCtuJopCSYorE4thF55Ku7dzYo27bmtxFRq3w68n9XavBG",
  "key4": "3Pkaxc78DW3uo3KrWchNuLBFo3NworMmbDTpgeQTnnHZpyJn2SJxQbsfLGFsSWStPR6iRph2WztaUa5ugUPau21w",
  "key5": "5qsBtLVb5Lj2oWbrgUJqugYVS12gihFZ6WEGDaTXnh9SCyKhFocyGsD5xHAWXFJ7jmooRkQJEhNN9t3TugmpegYJ",
  "key6": "2rYULkCawTn28UGXAzQdkdL6HGUToCYX1SH68SRr43b5gzXEviT1Jw2y1oWdMZV3p7P5ZwT37zbf3SgE6bu28zFh",
  "key7": "58h7w5NjjXkhsoX2y65Ez1ovSK9dM3Pg9mCMfUxNu3wjTYnos22EH4R75eriUAJ171bLdJZtwS1ENNXYphApQ6QE",
  "key8": "4KtaAWK4zZVnVQ91RMZHmwQotwn3kwLNHG6apY6dSMiRj8G3D4uePvVyWXtCxUkn9hfZfezjqtXQdQUpiYPj4RKt",
  "key9": "mKwCnWAmX3xj5u9XoLAAV7JZkefsHbnPcG7KUZKpeuSxdPLpGRMQBaATt29jgjTcXcu1H7m7VWcfnntpf2oCR4e",
  "key10": "4mxkjTBhAQYQ8r1k7Fw9znDb1DPZAnDk9BqFnDvTnitUsmMz6YG5WVx7PKkhAu2DuVUYdhCNATeTxzGFC2XJEPz4",
  "key11": "2dQUVwb2Nk8fAqUy9DztyMzHQvBnTQYXUaJrUJiRPyoTAJKfZ8CzaJibX2KUuJLe1Q3GkWmx791fYEVPCHuyZQAN",
  "key12": "3DECp7K5YXhWPTfVmnGVHAoo3FjgpnqVJKkmDzf7qAhpzVWCzsbkLYcXeGmGMJwuuCgTPwDfWLbUe5oKFVvdG5Sw",
  "key13": "2tacGxPCMS8NX5RJXQ8kkKSpGWyH11nFfC6RdssypzTBy9FwGsc7yDYUvmufDcnKiExbP9QT3sMr74cKJgtydqGj",
  "key14": "5JfC4mos2WtRZqwokM8hzP39FKzecaYR54B3Ttogt6qL1vGW4a1VHyFKg6iGursXBvF3QmdR3xyoJaXN5rCtZZkG",
  "key15": "4XcKdKQdfAAPxqvXgopM2EKwNw4zPi4KedwpJsDaXYbKZWh1NrzL1ZBQc6siJbZVoiVuv6LJMDXvRER8uxbJcRsT",
  "key16": "2KoXEa8Ft1hMAi8TjtyvHtSxujvSB1zjUNxZtorGaooDNBwRsheoH9Dzy8VwjBD3SrttpmNUk8Pb1mbhZhVcyJ4y",
  "key17": "5yeWjMVYA7wtwMbNqL4ysX6HfBTMgtf9vrDH8NuzW5MEqim7a9JDUc33aKoGRSJdNNC78bHkK33SUzXpfBKNyfrn",
  "key18": "2ujA1GKGDiEsZbb9dqPTU9AvoyD7JnWrDQ217fVibbKyn6amtqEsCFUKTYK8M1AFM3fQZJXRfJdoEhiUKFeQusoa",
  "key19": "41XzUbetiPzBnRcd9HX39rYufVzXxMKHDnPthZfan3vmDhodbGKAG7Y3xGs7SUYKtcg6SAuGmenAFLechMxKSoxy",
  "key20": "4Ge8EpXNMMvFN3BtG87qiwpGqQZsfhnyPhea7HQKC6i9VJhwkRvpQPDAoLTk18eHSXakZSH84bre84pUvucUx6NH",
  "key21": "5Zpitaci6Z4uhpe3r68bvxywHx4Lrbu5jtp5K9ozuvzxJGWmwunL9zrxTxQZwHQBNe1w7vYCgK7HUuSe8GJwCRhF",
  "key22": "5YXmPBAPWoMqhBo3ZgbT5qqGPFQ2CapogDTanfpYSXhdjySqqHvfrpzrghEa4HZZxRpsEqD9zDcYMPPQu46gp22X",
  "key23": "2xeyN3K7dJLrgEtLkPQcZCsE21Zp7TmLvhjB5Q3ohNBwCJh475m5iy9PuCzibxCTfcJuBwwviPxCRrUzmemifMAW",
  "key24": "5NJpZVaybuEUJw7XdpR71kqwjFx7a924YJrDZ8Bgw6HxmAgUFFH236rVgtkCsNBpaSvSH9qUoS4fjX4BVFyPbQo3",
  "key25": "3p5c9a7QqLabuut8P8Dr3yEoCoJ8f7bJx2wrjyqNi5qgxgTGQP4cYL1UF7VXA7MvizVu9th31LgzUJgHdn89BDJn",
  "key26": "27hBvhTF9ALxeYhvA1KonpoDoyRCM2tzn5bBmhmxTc1HwxttRS8jyFN8NraCdDx99GeXc9PiYzuM9QDQkLNF63o5",
  "key27": "3wCLoCmEWGMvrtookHEt6Z4cCzAYeSTWa6VoD6kXZAUEhRAgsFnjjgE8JQrjM5JHSc17Hsa7fxRz5S89Lq1APxdg",
  "key28": "597VUCfzcvdD7xH8wwQ3GHU6rYMkon6w98AuoRCbdUoKFmetZ1tjFqqShPkpJHe59cYyrKiXoEN4SYJPmmaSEg4q",
  "key29": "W4epUW3AXswrgReaiepZvHiBMsLTyHE6Ce2mAdtEzAFEpFErjbvkdeykKydpaMU3wWJENj2N3QJ2czGJrna4vBx",
  "key30": "3CdoZ6jjN81ozT8ma3Xd218HC6FKuRdbFov7ENgMpLknz2Lswfj7rQbmmhTM8XFa6vLAQVyh4fLSy6WPqBYwZVE8",
  "key31": "48FcyF4yLigue8k7MFWgGMeQBaVRD74k9GTXLwdZzg7qCx5tSjS8Q3zLH97wr1QgDESUsUDb5NSJkLVtu3rPCqzM",
  "key32": "4yfm21uKm2oGZfTJjhbC4L3A2pHEUNeesUGV8kdJnmA5NFusxubrkTWQL26hudjt4NBWwHbJftTt2RMW23xaMwNu",
  "key33": "S2cCp6m1mhb296x1KRzq4U2Xu2oJwvNVYBy3mbSq8P44a9REcaJDQVKezRfaNeJ4yu5hKFAVxJwkvr7UocwqG68",
  "key34": "5LhM5dvTaCrHCQb9dDRH6MEkqqbEDsKTX61YVgYrP6DQ9mkHWBEkHYjYy7x3DCuXC4J2c6wV6ouwXDPSt3jCJ6Zc",
  "key35": "54KLomxMrfEsn676VBxPqs5a4UYAYszY5HzoQfuSdGCWDWbJoTb3kEKeKrAVMCjCW2VGCULDNDx9yDR8sJjE6XJ3",
  "key36": "3FM94at5mRjwrk5nd2CdeuWsj6v1QvZ3K9dKrXUZXbRPQYw9ZmKTPqjqKKE346TUL6oxpm7Cjqi4DSvn5PavCzt2",
  "key37": "4agaYShRHENPF5ac9FRz8N3JGRgC6utSRuu7Tz1RqyAajCHSc92cMjbSoAC2QMm4Nij8ZGWhCHrUwBx3mFk1MvSH",
  "key38": "5DLLZkRZ9k8L34f8AUyhZynqc6QQ9JcVkriPpRtPc8ym57D5MoBWshX38xn1CxxbCy3X1iaQAUvZATfCQPzAae47",
  "key39": "5YSxTgMJE29Rap76LLB7pDS5VX8vtqLgHVFvPUUDkXuzadA8FpSmA1c5gjZykbaBnT5TsZsNoh7dqz6WAWbCMBU",
  "key40": "4KCZCveZRQcqQ1sFYbiV5jWmeVEVPKAbWouK3viWpCHRv3JJDtZCHBsDGKgo9YqBeyxkvbcFZixXCbyaU6ZhESTJ",
  "key41": "4pP6qtzx9Sw44k926qLZoCArXf16574beCcZDQfGs3xaPjf8joTVVmghswiba1VketWCSgScCuvPR8YHQ4VHDTXa",
  "key42": "2NDvUQAzRmDC5EYviwa29npRJUb3EraPWpao6xu3VTCoKTET6HvpCLUnsag4CRq93pwpoHBDCBoDUCKgLRE67tv",
  "key43": "2Ex5ey2YNLZV1HRGmCP1G69daRAKrcksY2iBpxZX1vwKg3kr2LVikWAHxpjwcJYYgTWGmyGgYFFBjSYYf1pEAins",
  "key44": "2esLMYNKNwc1rsEVrHK9EvCbVdCbxhQ5rqkpAqGpc5Wisyx599zSXocK52QyZuP77TpH6cnEKEe3mmqyesGZkfjB",
  "key45": "4xuUAE9mGJoiCwkLN2FMWvwjEMYz1o91QDA6Q1nLBoDFHpEzLFML8DtgkCTvrjiU1Eym6hcLiLCwiyxWtUBQ5j1B"
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
