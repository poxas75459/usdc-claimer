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
    "4dmJQ5Jpe5HMdZPSW1bpQyZDcTydpkHE9aWWy3F8Zmyt1rHRacwvMevMPwhbFCEEUHCTYv671WRjDDmngjVLZCbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42w6YJmzzXKFhx2hgUiBkir8AE2xrrUWxBn6dHNv73Ym4HUAmgfeApDbWcX2VMYbjgCM5TAuBAL5Fc8Meu4Gqt5s",
  "key1": "3aKJbYAcjxHyFnubjMDDersk8D5L3ogABRPd8k8JTy7P9a5kBWu13p4tGHmaWYaQ3AMKNPh9bTJkCkMhw4vpGCfi",
  "key2": "JCg2MgpJ7y1ckTpg5TGsVDKrjvs2fYcWhwqLjJata3xPoLHFnC6b1ajP1QjandecFtXaEuGwscpw9MEcyQm4dm6",
  "key3": "35pwPAAUCqeFNKbPxFYpMY4fiaQR61TgReMsX56dVn4As58Ghby9ZyTovkfwwDT5cr7ach6Dt2JudWTvkLBeQFhf",
  "key4": "4GxDTgdJTcKNmdnTjwCHkMWrFGaqExEC5fHL5tt53v6iUoBmYgD3P4Kc4PVBFSmahHkrYMSqm75BevE891VYmVpG",
  "key5": "2stTgfD8BE8jVMyd4nGyBExYsV6kg5wwDLMTBhVrf2gXiLD5o3uCpUo9To2PwVy5j6rKKsHUL5nG17Ykku6nJxMX",
  "key6": "3xkusQUHEz9Aa34ubSLRYPJ8S2yRUY7BMyUTBrAJh7Dmn1p8qV54NeHVup2a4hLqRrSz9rKPfLHc9JsM11qi86BE",
  "key7": "55M5PBMkBqs2JTFQ3i55AdEfeau2SXxwpyFgBg3gw14MJvqt5GzAxad7u2ZEtW6Vwk9zrf2kZptDA1M3rNMKB1DF",
  "key8": "2LsSgRam7YYKUaeCGyr74w7mWKKRMoTHjJ32EHVv2gx1GWZ7MRAHCxvTKtNwvmSABhdrNvRmVdHpeTcS4Vk1FXbX",
  "key9": "2h7YHDLyqznETaF11dGwsqP4h1xQzW1vYsC6Cibw3BGVg4aFJ1WoXKaTmXpz6FJC2m1dPdNTphPyEgijASMAXPZv",
  "key10": "3tEckeq5CUo6fH8tz36KNMbxQe1i5HT45fauigRXzRQcVZtFs7U64jZ4rey3QEPudUFV3NCM7aRvYVz2qA6kBsay",
  "key11": "49GGhdstk5SnJk2rkoZhnvSmR3uiecpYFmGNiDBbDN87hKvZbpx1aSdtrn6maVWv4jtCE8kmM6ddJ8uFdRq2ALj9",
  "key12": "3pAqMdSBmhbkgLD6VmQvQShi76yjjCNrdieWBmDpXR4AJqEKduAdkpCaVyUHzN3NAbokYyWn7sKorUpG1cwiwNgz",
  "key13": "gbJTKmiYSgchgVqGMcKorSP2yxrSnz18QuCaFV4ZpCEeZdwvKUzHffFeYUW8Yu8qXR3VwMTqWGvtZNFwWSmB4Fa",
  "key14": "24KGYW3BXU5ZXj6eLnEtNY6FBDNVgLnfHo4Js768VQozUNUxWLBcNSFY9JNtCJNDBdCs3pP5QtPCc1MJLaGzDDSG",
  "key15": "614vtuJAcsS9ghJANNiUu3b4EATAqLQi5NnWAQjT6rCko6rtDP65HCDNFpBiY8vXj3yX1pZ4QmWg18xMZeXW7r5N",
  "key16": "H24CGR3hSYqh7YZ6osHQJ9gtz6XdXMUJfwdT1fP118Fn5yJdt1WGb4TEMpmgNayDud7F2UFzGdAwFWcbQtknbzE",
  "key17": "3Jgn7vJsRpBRnj2A38t2Ni1Un2UMUXiLv9i4xyVgnJVQHQkUh6bSconsQRXLnUhaWQQ6vXzWgPpWHPmhNKAiyjw7",
  "key18": "39oqDrGEoUXSUWdGD4w52BRWJD6cvPhSCXqPa3JGfW47Eg6qiJ47Tw7fnz3Z958pZpx92r5KYdxkznp4yNS19Z6B",
  "key19": "2Kr38dtbZmUyJYDYiSgiXvdxuh34HnRRt1bWZacKqs5ANbQJfnCbHVGXbGTyvLeTkwmYR4nSvjnY8f3KX8ZobBP3",
  "key20": "29kvJMHZ2o5WowKPPmxgUmCHkv3hGkrEMjfoKBXYKTU5tLyzTMvKvgjMXX64qzWuKqcmhs6gMARvYUmnkxMLSMkB",
  "key21": "3p2n2xLApyPNVHZtYZQJZQCzpoDZcgwRrWNuQ4NxWnoSxQZupBXnCsgqo26KNjL5jrkgiPTKTZUjY2fR3JBgsmcs",
  "key22": "4buBvDfg59yWCCdh1MoapvNGNqfWsaznsY6CAXwttaisXv6JRbm6bcsvFkkUoS7bqJV2oN9np1fQLu1JVoJi5VEP",
  "key23": "5bWrqY6hDojA8rCTf9J5S3yfKd3DPEEbZV26XvyU6JPdWU6ncBTZ4X6GNKSGEGnpQs5K3nGd3a4EyFGtuF4SZQ6e",
  "key24": "4jtgPFJXJWQXWX5Peu9RwLsrz31de7pE4TBUebsWnSAxpe1RwQbQ9P59fU8d8okW8tvdKq3WVmUrLLe6UtqRNAQ",
  "key25": "56W3AM5Ktj3LjvJb38RC5x5kVqdGHh8NgJDQ7aSWjBykZKstB1sd5mS6dNRbvJzJspEXEH1YgBEDC8kT9WhExaYU",
  "key26": "4KPqoEnrZZ8dht64dkyNyzhVZ4HFg5DuUT1PmPUBYFhRK2GdiSdyiB71aZMtvLWzBhgEjbGHPyMz9UYvNWVKX4Fb",
  "key27": "5k1VTftVx5kxxfgP3xka34KyS9tYMX5jKBufWgzBUQDx1eLYXUxVLgYMqBESQtV6SxHYi2Smp5rTCTnBSqDdG3kg",
  "key28": "2NA2wQx9AZKtcpCjkYVd4tvVUzAWEkNV16gjzuXbKpEpm2CsuinzFRz63rgU2rPtektZFdNeSqSDHJN3b4rD1snW",
  "key29": "5Wgm3WPAUwojrt1EjoEaSLdcN1MRcAkAyrFW3JwTb16niy8Lw958pvu9mj9aENmLs4GSUBn8toKhCEuB2p7zdkMe",
  "key30": "2q2K9of95L6Pu89hUxVZ9j6punzNVvFdXmJWh8Gyv3CyHa7PgMSBhhiQXkq4e2Jz9Fz29bJE17q8oyX1Hz3QHiP3",
  "key31": "41YFU9JkPtbgcTrJBRf1WHEkLva8QeujbJcP3GpCFV2m8XSV6fg94Ut8BP4R5NiVsW1n2jvpNDH6oFCRRMs1ytvY",
  "key32": "5af8EprAhfcNAkRL6S9BJk5RFuuNoP5DR4V6ej9AkJqXH32Lg4uRLHAJwoBkYomwtD1rBfHdovMRxgsDR6R127iG",
  "key33": "62FDmH9TmcnAp2w3M2mfTLAyrRTqrpff9sFw4cH6cAzGQatE9hCW2mQrfkCk6Y3hf1F3f6oLMsnNChREnxoxy83",
  "key34": "9fS6W7sa4VGi7jAnbx9PAAAW16eLxxfFeidHG89EwXjgYRvWZ3sgNj1U43nMWLSRxBkKRNUcfZ9zXkG96yNZ75H",
  "key35": "2DomBE6cEEs8pNZ4jSiYjRvSMWieemFbtPeUgwL4D6u53WjbKVtrUxzizVoxcBnNDjYBtSDqSdU5ZGM1wp6bqLs9",
  "key36": "2mu4ttKLdxmRcbEqT1wC2J44CrJzVrG7srPL3ML3oHjCV39oS3jCUsCoS7VL46bcqCQcDg7Y6ZxtRZdmnGLX2ZXN",
  "key37": "3eCPvQF34eB5Jkui5u3VhrenMEm637vfwY3fcv6kRCKcDEvtG5FEwmfnAqnobcAbhMhSub4nzoebt1tMb2U1qwZk",
  "key38": "2sEutUHgxvk5QroDjvR1yCJd8K6iv9Q17B8zrmXcKATr7HZxN3K8KEAWPTAvPDDxwXgfzJ2N6MLxoYgDaAJxgbXd",
  "key39": "4hus2K26kmmYqvd45Wid8hx9q6sdvPdeSjm2mrW8hkMwz9TZNMVwLTgM5gbd2rfhm9QMWE75abeMA8cjyrY8PfNR",
  "key40": "2znDowmYNAjpG7VZW7zKKE4iVKn8j4Wo95WFMEmLaFvGNzVw6nf7XQEHoFZUwdq9DwqyQDX6QNifN24BxGJ3YT9a",
  "key41": "4zG8LDugEzewQNNVEDQQ8EgfbZQ37e3a4ku3zfhTe4n46RYGVbyM5nyphHRTZF3QXGCWgPDJ8xARGV7gUuSWAF28",
  "key42": "3dMNJFBd6Veph3pvqJzc1y6zZ4eep6znPHDPgbWaSCrVD3ReAgAryGYFeUFhirELYTJHNjAQt9T2WZcMJ6Xd11o3",
  "key43": "2aj5RYtaEWTgiHmdaRJUH3m1FhHcuABhN3SUDkjGr7vfgHqVHEno1de92q9QeLKPuCVz3WYN5Caakng2pzN7jdAr",
  "key44": "5tzTZbw2Tw5gzfpeoqNfibbBHkCWM6J1yic51bsqwPk4zCP94vJJPGSL1mWhqVbfC2Fzi6t6mbf5QD7smcNLpCtS"
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
