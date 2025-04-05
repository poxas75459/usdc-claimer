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
    "5hCdbqWJRKjQt8KGM4csVfYoyG941X5m382wmqa1veYZoidxN871BF7G3sSWqx1RBfvskKLvsyiXJKuduLdWdy51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25jqbgyYhit48nRfMXpjk5Jt6k4yaMWR22HE3YKEJ69bgR4neGjQ6chvnSWg6wjuvActqFAtmSQpgNNEg4YTSxGK",
  "key1": "3zmA8tXSxMih1Vq1pm5RHGVK6pikXD5GbKAjPpc5osyJMQYrqx1eZncHAAHxy442KUFTCHy2uoA541bbqhpkWwnc",
  "key2": "M3xnxwWQqmaZHJjvGgRDfd3tJXHw8VPXL6ouvvPHpmJ84EJUsRg9gVA379SDQWNnRG4m6SXHWNECv7GXjSoXKZU",
  "key3": "5BdYXHXk48wCErxyT3vFfhHYGS1mJCynUQFn3msb45tYYZU3CtfQQr4SZQPMijaXCcvex4Jn4e8JizZacaiAuDP8",
  "key4": "2h4QAEhLuYMp98CxLXXPZDdH8rYcWZ4kUyUXsga5jq6fJZL7xVNhrbkrJBwggg7BZuTPQmSAFZ1G6aM3sHzqHazp",
  "key5": "VH3DpghrMYES6JppprcMjK1Lq12fiYQnKYXTZCvxdei3RoRHekmRCoEN5nXBCV8nmC753vJnAq2YPLuXKoYgNdA",
  "key6": "52dwh4fUH3wenQsPajnVhHedc4X8BYDamvwkzuPhjLyHBEDVWt4o3HmZrdzYVsxxLZqU9xZ7uePDnrQTutjhwXDv",
  "key7": "3FVVFg4JHhKunVQozdjsURHscXZjJqJaTkSfLu6H89cvgX2ttRTjKPU5c2oKEwzNkRs3zkF6ndLemgpvrVEmfk71",
  "key8": "w36paZ6R9UsoKw8SY1zN8d7Z89uqqVzji5r69TxxcQEu7jzFsDQ1Z644S3NQLWjXyDtkpeCJSpMDWBWLLTbhgY8",
  "key9": "n4MsQe7ntEph1E4cLq6cBefkHFPBTR81eyx8dEcv3SmRPAunN5Px3KEKdkMr9G8nXfv2mnuhs7FZ7J6ULrBRx8k",
  "key10": "KxeQAbGYKMw1FYcna3v1dQaHdRay24KSYdFwLCkopNfTjjhzDPYSGviAEgHHAvCUjf8wmw6QGtLS5MQbPLNijv6",
  "key11": "3gcguL4vLF8cKQNCQyXujZvkqpWN9wBrGzYmKWEZwfJhs1pk817Si1EgcP7b6k8J13UCHHeoVBTvdGCS34oeWFq3",
  "key12": "8mWCtcxozfK21zr56tShSVJpBWBT6DjcJdV3dC9QTS9kv68eaXbDXw3VsLg4rueuizc9TJ6raLdM8cSdjciFhw9",
  "key13": "xuht9CjXDv1nvRT7dhPrhLZw8TrGQ9nK8juzzquG3rBiHKUEkb3S5tuuTYQfYrZEHtt11jSBBQhuT1d1JxS5z6d",
  "key14": "5Mruwi2sAZ5qdkTUqvAYJiU8EBys5a1xpvYWmPkBfXpVSetygwqRJme35QiuEahfAk7BZP8BGcyKD7q555ECfvF9",
  "key15": "GrqYxVsJLp5rkaW8wR6n6MWJVGftBPF7rYo18gBSf8zW9nibFHkohXgL9QvsacH2PPnb5SBt9u1e8Vrr7hizio4",
  "key16": "33hASf6d99r3crq8UAeuS2EjNBoGPEUSjk24XbRkDBSjW96MA4UQ3pghqsf6a7bk2myMa9RbpiLJ7ruWwg1zDHmW",
  "key17": "4WTzwYngZieKu7ymHUwcHmSMLDtz6E2UfUWqs1RwmxcHtooCCYDadBd8BeF9B6VcHJsZS37ZC6MktbUSYqRTAvUG",
  "key18": "4fQUkxYfgboJ2WmiASE4cJkCaFDttxs7g4TxmzeC1uQz7XMSJcHmigJ5jSq2oBSmrJqo5KrhDPgDsVJhX1mubooa",
  "key19": "aX2fHdoFNTosrXzUj1xJhvyyDCRXw2u3A9gzwqbwjHgYk3JQbsfxfSHVX17We4DqdN2N4sQppciqgVTWggk4xWW",
  "key20": "4gS9yfBV2BVwpGnj9WXGYdrfWR2vEVNFXXsihTkqh95JVLNbue4x8PpdPecmNYwRYzUbhA7ts8A9VuK7V1nauhfr",
  "key21": "5t7idPdhepVHMgf3kH7Y1QgF2UnwrVe6VRV5VacLXhy5J1DxWHbPAPYtpirw5deWktoR73xMVMThS3e5J13m8Ygk",
  "key22": "2Cc9BoaDBxfGj9YCRHRrBM6YMRkd6RAY75SdgU1HrrfUx5N5ShcfSDVRE7wzpr2ZBXsus9YBXXXWePcSxjKaR5NM",
  "key23": "5iC8n5ecXcaDUC2Sh4LvNVsigLJzekBuE5TD35MRsov8W9dB8LMGEfg3gyLwAm6eiCeXc6fib3ws3gzzJTPqZ59y",
  "key24": "3Fyy9ZQTnRK4rcQudAEGK2JhYDRLHV8usCjcA9ozrHh1ZcjFByzmwgjzJUbqdkXeyLs32TtuKUejoPtsADxf2vjX",
  "key25": "2S2p68hJQH5xFYjujuparTHb53ars5qAr7MSmCC6bWRAGTxTEdAqgrj6nG2oh6fFmxkHpg3hD4RjSAqNfk5S2Sup",
  "key26": "2y1fMSTv4bHZ9qnkQ1XHjgRz9oZybgEppa9oUxTtQotNrVscSmDrL5M9ALhH6jgoheGY42ezip8bsGscVJ4E2TiU",
  "key27": "65EMpzLgzdaecMUTg2UXjHvhqQA4sDUwaDNppPwdYcNoMzZeA2aikpidXokmjB8e38S35GLxRygs8yrU1Sk7i4c1",
  "key28": "4ZqAw7havnGyz9pNbaRKD7JYP88XvbRDujSqdp2oVs3CBVJCSEeTw9QKcrmYLD4Wv3TNfy5SHqGHPwUQupsbgy9J",
  "key29": "2NEoTVmo7f3FxQRC9wNJWB71iSobdx7QAqaCBExMd1Nu6ZnRgFgeT18dpPmkk6STkUV7o6ohw9B9uH1LPMVx1Tod",
  "key30": "s5PZn5Z6VL6xFGLP9uufNBHEJ99AZy9nBoJiHWcTizhrcwzvVmZp9BTc5bDkSttgAmHJozqay2pX9CL8CHiVoZH",
  "key31": "3zxbkfG2ok3DxcLhDfyzFbbBo5PNL84sSVVLK63jSfXM2aZGZczB74eY494zedd6o6JD9TWzySFrx6HkQGRf4zwJ",
  "key32": "33F8H92EfyHMhV6vA9tX31FdJuMc3yTYCis5eS3mxPifKmnbfXg8oLxE5qN5bCNqKEWz88EruqDmw2gLupN5Uvmo",
  "key33": "4sCWRUXZi8mahv2AvUTBHyoqosCHJuHH1Mbo5htLjyPTVQDoVwzcfDBQA1Mcb3dgGrHUJiuAEipCBYf7Hcy9ARZR"
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
