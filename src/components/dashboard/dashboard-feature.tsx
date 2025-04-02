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
    "5DXWNs3xQdbnBj9NkKTsNuMs2DcEZZRfUbRLYRwhgotQUjvoviYnwTAEGHHkcDyoG3UujaxYMvXudjmbsZ153tSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HHpZkWeE46nxh5VPHMhXh919hbGQ5aiaBnRs6mwbttxVuncKUKiGuqhseTbfpUhFqoV36w9iPzA3rQxfxYP8Dj6",
  "key1": "3eqSLwQ58AssUQR7CQwLsbhYTGnFzaA61rHTpyBw76nmzcsJs3RcstjHx4Lu22HjyR1fPD9cp7b9HDQeYDju6LWg",
  "key2": "3jkAWDsebhtCpDi1W4ZssrA1eBaF1BABzYiY1seKMjMw4f7QfZ9P2eTjyZNTTYfLxFYoCkxKPdzEM1eBgnvqaUsQ",
  "key3": "57q5ww64U2f4xUzYG6RntFbyi2DKDsAYUF1hVhiLkTbXZP7q7SbzpuUf5B1h25Fd4xbU4uGSYSBUnkQqfE9p3Kwx",
  "key4": "2hAfPrq8UPCytHkjKL4mBwScTmXcHsBGZr62HULNdvGLQSmb5AtR1Df946i1mswibB2qcA3Ki8S6JWGCkenSbEdL",
  "key5": "2kUo6Jx1qmgJWzZBgJcVfxRDRG6C6GTFhEHr27wJSSK2xp5GtGcaSDNt8aUXgcWH92D6aeApmsLvpCqKoZqceWxC",
  "key6": "55BsLpfoXdyToA6UriKvyoNNUT9Jsg74KQTsML4gUQj5ZjgrM95exCti4UDV2sF8juQkUJK1zd8zdz7phzhQhRzP",
  "key7": "2fvbFrMgchkpBVNrg783bcTh5jXc9nVnYS2TSXagdDj57LRYYT9JSNWwPXCjkxDE31AAXcKU4QoAhUeqV2n7q4aB",
  "key8": "2yJ1royoEFSbrsY8d4s4pxTJ78VSfep92YT3WqXo6zuU73CZyEQ5gH4dbotrgHDBST6hFCiMZ3pJukkXe33K3UuZ",
  "key9": "4xfJv81e8wgCzgvjrDsCqjTNQuGEWtuDbYvyvoaXTW7M2c2daVtiU1ughmAUoPsS7G2G3YD68xEM37rzmeq3eDyP",
  "key10": "u9SpfWaLvSpBrDFMLRP822w8uKpeamVxe1U8GRNXuZ7cVAzWko1vaUzNJW3D31T9iGpJv6F77pyhbBKameHAaqM",
  "key11": "25ZbBfDcvDXWmxmg7VHnxGQ1QzCUR53pAaqjbEbJof2Wy6GZGsAb9i5DiFPakWv9jhXC73b6HPRXB8wqkdn41Kg6",
  "key12": "26C22ZZ9mnu2tSbwznLYKHPwy5ZapfPrzrsdr4Jw6sxb6wrrr8X32rmC6f5HyZpkVMXnvz2fUkAmwviTNv7srGcd",
  "key13": "2NJD89GVRasJW8vuwr1rniCRq3a9rpKNbAwoUqKXqCkbrtydfYJAHfrzNHLZACuwUJ7F2snt473c1hXvsp4XCteL",
  "key14": "3BAeu1VCT8Q2PViqirWXHFovRiCK2oR1xXx5m7179KtMd3zEEaygfL7KtjAT6ksyHTNw78iDF19kV8LxfyofaGX6",
  "key15": "4WanKcs169c1B2FPFbZe6shdANaLZwNcS9T1Sf1bupAz2L6xFUxNRjth2YQGGef5yNsaLkX47bFi2ZkVuhwdvwDA",
  "key16": "3EtebdxgTggXqdt1cZq469PNWwCanTySBYnRuQygGpCNkyHghVKxwNQKAFGjBvikRotEmpaQYDpbApSn84VRmfT2",
  "key17": "4vC3DyvrafsgciPi4W9ArHQfvZ9nJcXtpRcsG64Gyk6nREppKyLFxT7xGUPJqofCErnxvQQNM4yqjgBCj93FTeVB",
  "key18": "4SW67QjCJSp3nqjgyCCBcxVMEdvrTyxeuLSFyamLHxRPmAbqK9fdUU8Ex33CjkP6qRjUVr9hJk713riKZ24PVAsn",
  "key19": "4eMiRraoUUaRB1VU2YUDjo8Hq3gq7txVnysrYmNHn7oFdb9a3s5GKZjNTE9PtT5PdbnZtmyfXkXvYwmRYZtHjTT",
  "key20": "3wcDYM5VLueNpYMomvSrayX74zfmxVz5W8RNHmfzbDYS6vKPjb8yQjDCoysuh4x4T2vfwK1EPbimVzvwk2LwZxPH",
  "key21": "GebgCr3HgC1Ai9VBwG4tMz9m9xC4qs2Aywhu8q5C3GQ5ZCrXgoW8zWjc258pYYyVqkSTV8uT3fYqWCiRg4iZktc",
  "key22": "GdCdHGsiioFBMqCDttMBx6trpTBG8Y9cEzyDJggCvSyt7Bbq3WvQsUeJfNcka91kEARbyR16YWu6YxhnrW4wfhu",
  "key23": "2W3jgXfqFXYy4jqTh8TkBKnrcHvRWAAwDGLuvYW3KeRRSUBdRHjeSYiSaJAEfVXsqzWx1UPorKo9BNGXYy1goU4Y",
  "key24": "3KLsEGE9d5FJpLZgmSbQn2sQD6nsPdsv6dLyQX4hKHiAHsEmG5J1b1tARqdPVCWLrMqN7nmEZrt7z3ChFqQWh4yH",
  "key25": "2g6Zj29RA1LTMBkmnQrHJ51ekBRSXhMh2RoRjR6PaDUyQF11aUkvyRwrgUgw1AUGLy7v3SkWk34v4LCevppBwkMf",
  "key26": "5YsquN1aUoaDQXVWd4Xx44GZBnNdfKJuoYw1G9ByXXMMXAnTWX8RfAghC4rsd1qv7E5pfH6Di6kh58mydqrtHU8v",
  "key27": "2XTZt94dtXXjpM8FDdi1LzvKk3vm8WFWYbkBgSr87Hv3hSTAYH6KfDVPdVxHgF1vgiw9GtHEvHVZci5tC7RvhgrX",
  "key28": "3jF64na5ZrK24Z1qA2di6BVznCfirHBLfMk67hCBvW2kTvKu5Y5XD2ABwodzMHMkuzw3myrCzLmxFNniu54HsGb5",
  "key29": "2PjwjQQgs2DrC8emT2duYGTqQdWdifQgUBuUM8RjLDNGLcDyLQWFUrZFTT864bcvgQ9ZzK5zgnAefFuFpaUwGFnL",
  "key30": "4a2Lvibde1W2MqHYjYX9U2jKLZZN1ZNdKF1qdg3XzwK293qZK9kCK3K1vL9HqSsGAAJoGH1s7kRLgojhDMnWwPAC",
  "key31": "3gmF5gUXHBWYHiAC9DgEqFksfqb6naJf4ubDrWnXNnoxHqmoPE8pWhNf156Eu38c3G3ohtk2bv2eTB9d722vAGUn",
  "key32": "1xWXx7rstCmuzGDpKbcuDnSYCPaFfrMnJfAhHGeVybk1hxnNSvmkW3VwM8SdoCucpeZEivDMF3G3CsFDsEuHGwd",
  "key33": "32qbSvqS9XSqy9FGWfcWnyiir2xv3b65eULF3PxUmRVEaFPBg8rrN3iFtFz7JW55rG9vdAVMigxgLRPYYgLyFBgf",
  "key34": "4JgLTX7oEmy2wzbJvraox3ep5FjfA5gE2X7sgHD3DSa6oYWsdQ5NYxwpx8HZyZfFotxpHZKBfZkKD3ZqJKJzhqDL",
  "key35": "5qN1pKDHdr6X6bi4z1FQCW2GfhF3XSPkmfPLt1nNcXrkPUNCvcwyjs9yuqNNhuoYVDoUFWqHhkDs74eXBYTnL5uj",
  "key36": "33KS2ENRQu2z9rkzRDg6QUnCJbQARW469gv8Br5Ka5fQznUukEMg5bbTrUCrhWBGJNYSdE4JkTDqg7GGwf2Ee8wE",
  "key37": "51ZbpENQccCoaBXE5Va1jpAYKGfgbypQ8cG9GiFkgWM7kcRWnvkeDNsM3eBL8th4p62FhRo5C7PTRj8qr6okKaLz"
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
