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
    "3SuuAQceYYra8sV4b69q7jnDuNx8RR9KrDP4ktKRV8KoHpvZTCsWPPXUiL3n9LaU6tG2tEz9RtkzNyphr5Sx51C6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mKnPJZapK2ndy6Kd9E1UmvZfrxtR7C6sSSzyFkhz9bUf8FHBa2MfZX4fnZrxDCA1AheBA65ChFLq21WVLUXjgpo",
  "key1": "4kgqCTrWDd9QshXF7uWrd51Ttf2GS3kPQFEMAcr1sYwKEdkWL1TCva4ctH9kmzg2vjcnrtw4Zuvxn7JKgZmTuHVe",
  "key2": "2xWrhZT7BvgpHnBYB4x8iZWgwwf25ZiFHv53bZYvzYtsx8AFYHP54GVVpKhPDHbVDeatDapwq4ccZ1HHFTsKifMg",
  "key3": "3R2i1MbYpCmGQ3wEMq2fK2NbwdQmsji6ASpA98S4gbThfuuRzbE2xYk76wxJRoU51SyjWY1nGCLVb3rFcE2bHqaT",
  "key4": "hk2mchKM2qF2cgaEDzcSV3g6j2W5jU2F3EDZQzo5ZyUfnUWfJX97RqJvjnvWqzLMuVUemMiM4LpMRhcrMMLvHpY",
  "key5": "63jcWX6oXpDuFg54ywqNLDBnVmkJ8GRz4xSY8c1qcn6n7fJsy4cxBench2nstGS98NzQDrRWcwLF7hCT68ywu1q3",
  "key6": "4bY759w49MhW6D7REEVGbhNHPxZnC612iJwGw1rcJq4PkhPLKiGzkXandXFLMB4aJwefdv5XwgtKbva8yY1FTxBv",
  "key7": "36eXhtZBMuySAyuR3BkyMTMqeV5W1DAmjY6cTk2kvaZ7eVMzhthtTCLSCyMUuqF3YoxQFUQ24xDK5mT8zGmxJx2s",
  "key8": "2bz6sRjULBGrS3y2DVkDz22sqCwR7jd93CBSh7sfYhtktKfip8DxDWpAzA8p7Ws26vWsdBPqcckjCTWDNBUcgddG",
  "key9": "dUjVFBe6QZANTwoZ2FWRhbGRehg8J5dxYWx3nktgATNUJVPe8iK4qoKz5NDNhuZEHWDTWrTJQubBgHL5UWNCw7N",
  "key10": "5pw1DesyKGvjQqexCfZEjKVdb5RWHLUsv2jXqBjNTw9ctkJyxbaEyMGdG7gQdkFPZULrJt1o7xNXfQKrJj4ZwgTN",
  "key11": "2Hu8fpU3o6CoW8nQHFKnhoxxKEMnJbqrzVqhCkpkQgEYdrCWfq1L5KKVaEFhCX9ZwCAM4ozHaxRXAUbzNNMSZkdo",
  "key12": "4EZ1aYHgqmBHCfCd3DAnNa5gmNkPvtm9AAYioPMmss3KcaBeYDCtWraeDwkFY5azNmwJiacsgLrwwstjMWH1gggK",
  "key13": "124JKZ7HEkoaic3YMH2L22WAWLNwCYVrJpEnedQZ7ExSrWHpVFEXjza74zP4EaAxq2oZP4iyN1qqn57hSN8CdRJx",
  "key14": "43CY7GvueSkeQpWAmJZDjtZz2YZVzWBMtsga2u3whxMY4nWaKmEw6vvs8LqXqrn5cAsztb1XLdy7t2TFQMRfDdzW",
  "key15": "5qx6k5aDBCqA4mERv6QA5951tyV9ZPKbvbj54ZrGxKKng8WK2kpCFzfxPE7QnhLxWxkkEuC1Mcgmf3DjQ4qK5rLS",
  "key16": "5DPdCFoik9rvAu78Rh6jtaZoa2ZG9w9NhaM6xrskDt4L7Fy3iCqaQsF1WBGaiXeGNeA3VWUNpDT5fH46pDRhmJSs",
  "key17": "iEoTpCiZcv4CqVpnBqXgigTrP38m7sFiYhvCWQtvy9P7AZV6Aa3Yincc4LtRVVbPLMNXmLs6vSpxExDRJeJyPG8",
  "key18": "2eZM8oQ9jHk6xCCzDREtbdWZKo5yqo1UdfUKHNL6h92uGGcCr2fV66VqRs5EYQUcS3AvYBFYPhr62Nosv8KJtKZY",
  "key19": "45nxZEjALS8Zb69E683aw8TzsifTN7ia5oH9vxqnV8BPdgqfXqc31UrrJs6NpjZ54zavyfHaxpvQnFvRsd4RsHTW",
  "key20": "27AqXULA58958MxumQ5LN89MQ3mdGyGLEgZEZx9A1XYfnymV7wPJJF3b3sFGVP1XwYKuScvVUbyrgKgB8ULVGwTC",
  "key21": "3N4iuxwLgP3gE6eEaDRham9hmnBkGKvJyopBu8koVf1LecZHKFWTZPZgmi4EWzBUgKHQqCk7sPvEqpxoVe4tmN85",
  "key22": "4hJZwfSLdVyo1Pi2oUy7Ru9g5zaCxnY3vnkMr5ffjYgUPopgzBBX6EETWY7MR6Xwqkx8L1TD9uCVBCP25wMyEt5S",
  "key23": "pHpZtMMGEdjmBREhauGTwYscHFJjSyHoY3TEjXMWRH6QoSoXLN7UJxUiKSGSqeWBhxKS6K7NDanpcRTLfzCbX3m",
  "key24": "62UCvnbVfmrcGgN5ZoK7aNdmGEwCPnKcneS5mEgDyB86XRQhoyU2AvCKsF4XkbpbbC3dmP7pxsg9At9uevqm4Mo5",
  "key25": "4DnJvhzk2sCYu64dZoSVp9rs39WMYScDqsu8QHmH7TaP7VCBXzoZz3K8gsCuysK5RxVoV7CmWSRjNKN4p1k4VZQg",
  "key26": "48EUWfgpS2M3zHsDcLoyo9Kan59EpX9Na5BukmcqQ4hy8zHbeKCBt5qgf7Lfh1oGeFsGyY2ZrF8jrHb2LVRypKt2",
  "key27": "2qatYMhck8g2jQsPA4A3xXaJPejJSZvTUAVHr4XFEmKDWZWgH5fcng2Z7vy4WKuE5p2gC3PPZhFYvzD35XrNAMrK",
  "key28": "4TphUdLhVJb74ERMLxiz71hN8cfHpq44UUA6epseuhQEyEceYpeNoys7vmtEikxKMDwye2DDnDCWfSm9nFgGyAaJ",
  "key29": "37QTEdZ9RbN8THxVqMEXoiLWfzTrddxthdwr21ZKhb3Hhn1kNtAv6SDVT77KdiRD3BeJEuuBkqmMVo9o9iqbUhAP",
  "key30": "2DdkRr4qQxUXWKXoaUA3NryEwdtvyknXbJ7cgKkuod71SYuq2gWJC745RXAjBHDGWbtUQYtig5N2b7JC9iV7q27z",
  "key31": "2QmAaGVNSbNFmugAiDMkhBqQgtGFpLHymFjqQAMv8UJvCBe2RniTHR3h2GxseCAFGZT3ZF2ipSPy2RgQ8mi65x5R",
  "key32": "2F3poap16sWZhQz3uswMw3Heoq4oxQqHQiKShC5Y7ASos7RSkAd1zVVSQHacAqif2Jzvi4VCcaGwSPq9J7qKjPi8",
  "key33": "5XxNBEhJxGWRXfg7ZGWbkevfy98AVWcAjLSs3aCwbKtS6DFqi4RwstBEN3M2xxZrWPUukfBuH6ojVhKk3awwGPcK",
  "key34": "4rWMuPnMaWZYXY6pyknzaWEsceKHf3mamAQSRKrushwe9WvvACBknpwk34q8cy24pUvFedprnDDNtRdY2qQeMSFz",
  "key35": "wrzkYMSKM1o2eC21uD9TiUfsohXFBVKXNrz4PUznJ9x7L5iVYnE5TFLRFU5hSf7Kxx8PnFoCnsxdPhNudQgWMEs",
  "key36": "66KvE8xckfyshnieVmz8bh3D7sJdz2D6UYjCt6H552F4dvqKrHCP4o4L6nY26etY13Fex8KPMqUxatbNbKK54nnC",
  "key37": "5fMUZFtXZjvreyQpJzwWD8zqt4mfdsav4CLmKK1LCJbCtpq49T2TPC1w4YnNwDkjVXQsh5qAzerDJLiVMapr2Yi2",
  "key38": "3AxNkeGEkrfndXvtQtavLTjDZWyvqVgxqidkEbNrQmvMEaX6pJUikGAbnqbMF3ZmMPj1NHoEzRXKdK8aAZ6JCYcR",
  "key39": "5M1SuTWJ8cM7uNGXjxSKkgf5CWQjia27n6Y58TCgPZ6j6h8rUprwexRPKWD69BJd1DBhgSqkWQ7tm9u1yr5AbXQa",
  "key40": "4WhgDifCZxsB2wSauG5ki7psLT54QK3UeVuaJtquKph8txzPaVHdHiNwCmYjkAYVHFfQDhzwtxejAZkjqoSXhvdQ",
  "key41": "31JLrDsTYYK53G36KPx5mF6x6Sh8ctWCjB8HBW9t9NXgnoHy7Xf7tiaGDNEZ7TUV9HkLdv73BNJChmDPkZLwf9Qs",
  "key42": "5UcvbmNRSnKaokMDR5RcVvusy8uUvvWYRaWD4JdcmprgUjmwPGaTzFF2WwvpL5T5PNE6yFrEh3kdg6MZE8iypvRe",
  "key43": "3yc71qB2aXYhBkZEBGYbtgoiXCyvzkNUMMgEfssKvtWtZmVnikf3c6iThN1SmaS1ds7tUHHnimtJATn4CUjYNpXp",
  "key44": "2CTsD8fBz1uNh4ApJn9WxxRchyvwUvqVtDVDaTGuycH2tskdbq63Ky7YNFGTgii44WdnRgCd6Qgq4ZAG3rXr92c6",
  "key45": "4VXMk1uP6GhkFe46C9NMjNpBz71XB27rA4Nx8x8WG5GGX8gpGrcqdjUDejMyEfpGD68SqVBBxmCAJQc4X9LdRGCU",
  "key46": "pnkrvWtT7U2N9n1gqnp5giJNZUm47VU9hAmBg2tfpfnqJSVPU5gA51M9cDwgiEihZ2gVVx1sRBCjq23e1xDxb7a",
  "key47": "48TEMyUdNHAdDG4nay5nb47HR3N47BpE1tpoX3fAFKgEC4iWDXow9TsSZQWHFu6eJ1ZHvms9tHrsf8qBDyUPP5Pk",
  "key48": "4AG1mULYaPE3bakkfKkLy3UL8eKBxVXihpJRmFr7DggH7bDfijo7FDM8HwBcXxQsR2MiwqMcVSCxW1rk6mcuD5iR"
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
