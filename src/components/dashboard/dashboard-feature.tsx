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
    "2VmYhGH1ChaAqyfz7PEa9ownRbvTgbYZPzPFV7WPv41neAQLDCg6CjAXrWp6EXWMUaJJKPPDv684FGptnC9i5B39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CYwDD4R8wwRDJDVGUjVKJAWwKUNHLu4tDYwzNQXyRdhNQ1ZL3qD4fqyqsVvzjozuFVoE5FAjZFeYg6UMX1aDcT4",
  "key1": "3FWiRxn3f1wD36KnTZbLVp1iGDEma78vxXydJTVhEsifmS25QeiEYodRQax4q5aUNhy1yzJ6agsBdpupqjw5TV4r",
  "key2": "dzbYhDxp23npVMKZGe7eR32vEz9RPnJTj3ASUTRkyBfw5TiMkoqpVfoUPiEME8wrq7i48jeP18vTqam2ouWWFGS",
  "key3": "3hQeAQQfr2rFcxABaTeZkYtDv6apNQogfchQ2CJ5LgfwvYLF6FVRTX17JG5vPJqMVgR1jYRAZoC1QzVxUNPdcj8R",
  "key4": "2QJqQpfGm2kJnhzknZqC6UWoKDpPPR8KxG4QXvDhP6VsRr3fMw5sDhaQYmQL1yL5UGZJnoKeqKwvfhf2n4YmRdtF",
  "key5": "38ZC38zLuCCxmuTViradbYrT9V9tFm1qxappkgX45wC2CJmQ41BGKBZoBkWiojvEZ1EFRqnaBbHFWRu2JzmgXzY2",
  "key6": "3bFsrY6q6RoP6Y1CyrvSJkDST9GedWaWppcCm3HRVrBmEcNnKaD19s6cbauAKoLPjvGryXCQEUgpKu7VXzueCJXr",
  "key7": "TWwVQvgxzRBzhgQ9re5XWZAbFYTUwRDtQHRDtHuCi2Er5aBxtmhSYR8o3jDhvG6S7N9ck84nhTUE3NtJibdgQXi",
  "key8": "2M5EobJNqAcFvm8hCsVVpXwFSars5zd8LQKq1pDCosFBp5q4cBR7yr7V22XKrTPzjXwNa2qLVgaqgGKjsN6a7ZYV",
  "key9": "Vsc9VPv1dmEV9ZqsFWRpeBR57cVYXreD9siD7ZqiHGWxh21WdSLdRYnwo5YuHp5H1E2vYEFosqVKwmiYx7rHqYU",
  "key10": "4sbF3c2utypmyTGEZLAxKYH4afuAPLaXcse26w6yUHJxsuYw1jTGaTGcz2tnxw4Q5zft7bRfdyr4yWg7CkWro7TK",
  "key11": "64uHChnufUYJwzxGk4iFEtP4hzvXaerCfVRCNfysrTNVyp1k6zV3iTEkxMFqiKddHiTi3mqKLXg7YbDa2y7KMQvJ",
  "key12": "4iXn9dYnCRmrKEjQ2HmeRiLMQ8hXaaRw7oZgnv327jqMkGFD1vSNiFZ8c2NhUW27qdQkDhQv3yFNP1rrVuX6ibbf",
  "key13": "3DzPdwxKXvRcyR9rTWjCd3xZqzYUM1dYNb4KQo7Vp4WQE5bkACGVmZS56gv9yrJVWgf46jEwraXZGDnBbhQDABFC",
  "key14": "WUe78oRK6vJoHUBNBzxh3ySjKkPvNvcHDTrBh3F7ErTE2QakaZJvEtUBrcPDk2R1U2pgrCcsGNERSeYH2sM3vDr",
  "key15": "aCy37Gj7whkjgLSeKmPnV1t7tdTFDuntsr1sTCDkotBsVj65rXkpUQRzfxDFaZGcTbJ5yTYMtPxMeUx1YxQXKWY",
  "key16": "5mdS54cJckk3zoS88RVa6zdqc5waFai4HKMQCkHXCQYBBJWPHXHEPgavGdBgpboQRsV351ffXWQrRZe75DMV6xPi",
  "key17": "4cA9M4yqJagh3ipZGqZ4aJrkT3FE3jBddBxqCYYgapFDhJfY7FNJFVakPofjz8YbMyvh82MHSzagGQ3Q3yuCVcAA",
  "key18": "3YDRfogqjVPo7qwwVabV3WDUkrKYk16rJ2UAqTG8enxWeEuiDChVcpQPSQrWKwYs1PoAwiHcFQC49T8Zw8gLNiPV",
  "key19": "4nvJ2z8HnKPZ5SEDesy3FATQhBGfF1dNMj5mbhHkzmPx9vVwq9p3inEkZr1By1dqdW6naUVExzDaEv5XXxwehMtj",
  "key20": "EtDgMd1W18KEiTYW6f8R8k3SrSmsCAocJcTmAJYgMFkCDtx8cNJDcdsrh72hbLWduZfLVqmyQGEo23WKKPD9ZEo",
  "key21": "4z9Ti3hsXZYuGj872YiVcMNgkkpLNXsLcY7grD8VL3qeMVxqtjGUnMngVzoQrrLcU8vJ7gcs6VVsaRNE3yndYSor",
  "key22": "1YStNNmFsNPTpuxxueTD771MKhW28isBpGrQ9p7uwnagg8HJzVKoXWWzSfUohpXQGquq4Lfb1JqBBT39kNa5d6M",
  "key23": "2R58GpGjy75r4AEj8y6bqNuEcU9PR7P3gpGrYg1HHCWLTrn7vxHSUCrUHgZz4LDQ4FvssdHuNaLYsz3udf49rZW2",
  "key24": "5rReTJ2dZqZ3tMvMfqcByHR19k1LNMXuQTjdMyno8xtS6jWNupj74LAv9cjBLQhtKs6Heotr6BQqH5q3oExqMgX7",
  "key25": "58NWc9KbaygLYMfyfFnA2AEUst6MkKWoJaDAEKzvNnXETxRa1Dd7kuuV8Qfqhn5wRQyJdJH9h1tYdghBuGuv3a6F",
  "key26": "3WpdCvVJyo8LssVqrduspiAw2ctaqb4vR1iyNXySM7sGysu6mEE4GqMSyFpaSjRkCXNJMkrsCk6bKBjBpjVmRSxr",
  "key27": "66fUrUvNBa6QwRoE6uj2HDyoKZzGJnAofvz55riJjTJEBkeNZhEagYdWaaWnS3JoXaTjHYdFi1S6692tm3myhivx",
  "key28": "5McT2eYTWwmMjkaobNYW4MLjRbUbjSYS5MQQQLZNA14rJ9hR1h8bq2suGCSbAtSaWzaAJBVFwK9Uis4euy2drPiU",
  "key29": "5X4tKcZE5sDngRc9inYNfM3qZPnDcc4FDYKS3DUQVccMoB8F69QhCsffYPbQ5U23UsBQ3yEVCJiU7m7Q9no2VF2H",
  "key30": "3kVWriiyJPnbEofcfzV921vmJTRgMD4c3hpZvuhvELU9Q5MdRL4uVz4SdLXcp29RwVWScEvvpPnJkcMYEmD68fVg",
  "key31": "2rmpRZ45epwzh978AibjTrkEvZyXRJtXrDXveYnpsJpLaDMiMPAKWJCXpYjK7rU2ZArgkQG4szGvtJwNpsmSsxyy",
  "key32": "ZRV1qodza9D7G8aE3x4PZRMcC78RPqWzPj82UtgZjkp5btdcTwEciFrnxhbZaoge8fWf4JEuVdR64FRTgBhWe3k",
  "key33": "2FfG2UagiHJ1a6BwTpUSxYGUdodAGHNeXkZ9BUEBaMkTfY699hmgK41qQuPwUvHERpvAxCgkBTSfynhVSGpL6wvW",
  "key34": "2sBteY4fcNDNm7Kh2S41aTHRDnoWagYEvyy1Nj912AWXTMdenUhZ9KdRFhUe6TZB5whZegox2Bvk8BL21UakvezF",
  "key35": "3yS7V1vxNEqvvNMbi9h1WC2qQAHXoXXHYGVdDyUdPnjyJZnrWvXxYDfEeYf5Q4soCF7A8H21eyA4dSGF3eqgvtNP",
  "key36": "3jwoqcEnSdkmcbikK1jck4rRbodD6ShwqWycrbufvDGLDxrV4SWruVS7wqh3JD7KmYuLYe52KxycewLKieJG84e7"
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
