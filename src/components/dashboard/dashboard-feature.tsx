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
    "2aPRWuy2WvAC6E1BSEmYkTQ7vVy5wRbw66bwMDz9CL1z4n5PG1fVY1vGPJuHbZa1B2fmTVUfRp7y3WANc7QuD1NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SYsKXkN9z9Jg4EsZFCpDnPXT13hVddZBPBiw7BcpKEDZpozPhQkbGLL8yueT6ibCaFw6S5dzs265dveDBuJRN2f",
  "key1": "4btWT1tmVdnV4s5JhaEc4iLRxwGveB67EM8GxgUnQqH8bCpcSYjtgAyQ8TYCPty9dG5v4gW1r3tyBMqHsXjYsGTm",
  "key2": "2ghS5ZEWcK8syvzjX4we37k8SS2QrN1S28NnyftpZuDu7j7yZ4nNCpSfzCCPh7MJDGkg6rpbnV1wm9iQiro4jrWy",
  "key3": "ZpHuCEXbrED7Xd23LmR3GEKVEskvEeVRuzRbDp1xgRD9D2KjiLBwUsuisL9mxcq7qSJKH9wjpHmxugfGonqifmB",
  "key4": "4XAHr3negjhzfJ66RZj5hkDWsmUEZWz82421XdMdrgeWE5bufPRoFVLiAGNdoHym6fNMmtMV6UoDyab9yb1bLHHg",
  "key5": "3X67PxeTFxTqXhRDxGPQq3HHNfSjg6F8Ae8tducdxNXvjBT3tHsEhVDfjgbsxsNsghJbGNsYokuiSaD2rci8PFZr",
  "key6": "wNAHtV97cGEe9rh9fR7m7JtGxqCsXY1czeijM4PyZCHLX8XZW1FQfRDgEqwNjSyGvc2pnzSt8BRoAoC5M75f5Tu",
  "key7": "3U4E7yn6TV5snNdkM4hgf7GFskgvy27ZcH25eNuuJB9gegswPE6KMW3bohRtMwemGNJf5Eysxu8DXRWGD9WYKAiL",
  "key8": "2XbLnn6HzsYt3hrmKG9Wdv78GyC4XgtmvaNU5Cp9CVSgt8pi8p7rFn9U5T8Bc1yTAm1gZtKwzVwg7sAcm1en5g6A",
  "key9": "4thbyuUnNg749KjxtepxuiDVwXtPnM9Ke45Amb5npndc38VS9PjRLMxh3ew5p8h82EuA2pqB1ThoGwghKYGSot1s",
  "key10": "23QTa9orpVf59NFacXybkD9SbKLC9NNCm2M3rsxsHxN5DjW2ru3K49RZ35uT3DYdDQzd9aY7FoxwJC3XrEy3jXJj",
  "key11": "5jLY7WVwNcWyiUoKdPYVNhrmp7kXj8wAhQYdesAYAJR8XKBPe7uEN6AkTkT35CPpFVaXh2hPDyfTUv2dAQTgUCJX",
  "key12": "HwAN6uaG9KxbMsY1GaqLz93cojmRf7LFdXoKNdkqyNrUVH2FLKCoC5QjSkwdpfNBG7Zh3gHiCsHHjgupj6VJcKC",
  "key13": "3d4ZXqFosGkceeUeGoVRnTAfADX4DZkuyLMv7uayG1GADgcNq4nxuVUb8RmqkXMjHFQ8zTet3EHSrSgquHKRtHZt",
  "key14": "4XNwF7rhJELMaFvTBN2X84nLZxF1ESX3TkkvftDJV9FRyX7EvGK9N7BWtXs7QfkrTWZwW5CYBgfSPMupz2w3MhpL",
  "key15": "ofDQjQtThvXzbwK2RfEjvnTJHKgpLQvBDaoKH5pdayt3NBnvxFN1KcvrKnDFGKqaQn6e8utVX3Xew9pJ7hTjT2z",
  "key16": "4a8crJRXCBAqeS4CNpdnE9t2zpSVe5bPZvyRCuBgauMz3a1A7Tqk672j52U6qKmoTzzPKVrFc3q7zq4puGEyAFjs",
  "key17": "2PyE1DZzcvU1y9rBi3tHsNcJpPmYmd5BmAdR4mMqVLFBzSxLwBgzrrUZyQ8zAP6B2Aw7ZjCE37gGhAsTcq2mqxEk",
  "key18": "3NDQVpTeJXxSv5ZZ3PtnH48bXf7N71zNE2LmyP2GH5prQ41x73MUpcVY5dVzZriWPgjuxpt9JvFgPhcyx1asoiHy",
  "key19": "UEJLd52VEBBUEDtAi4thLoHGV7djvA6vBT9f49EhLuuDroWePTQKiFW8AsJLfWyY2hohS8unSz4YYSFb49XMMYE",
  "key20": "4kYkh5ksBtJ7Wd8VFpRLXKxkAuwGbcKzSM4XQ6JCgpK9wngH4YQMghvo95Dr5LtD3eN6YkFpTaNDpBcnAcmQW99n",
  "key21": "5qiwVHdve2HTESTK4EwcGUFCaLbBjLePWxToNau5KunFmfvEmWaMvon8qDczvm9ZDfUJwkvr1DTGjC7qf2QVFxWn",
  "key22": "5u1cXhVwV4BtgZfeSVn6M1QgxuMQ9nHFptXoQdroziavopGxtE8j2Xr7xgy7QxaA4cJqBbiHTiikaAJSjdbXF9WL",
  "key23": "63mveZZz8XGWHfQGiJyuyQeD77eRoS7AahPcoQ3CQm5yZi6fXgq5SKAusgBQtJ9hRziCGuNFFJiRPpiVbb7j9y4c",
  "key24": "63ziS8Pmp9zWFFLr16vskmDdaAnu5y3i6j23tDaotDbmoT1kPLF5Xkyx1KRcNQkbmgoWZbP72eBTtprZmL4mzUQ8",
  "key25": "5w3NKYbMEp7EJY3MuXtGLtv4J1mq1Kx8f8AHCTT2vxmE9LcbhAK5iP6wZib8DL4iqLz7fd65tRGHS8NBXkF3VnYh",
  "key26": "5W6EhLVYrR2eKXKytPRxocxYNfbvFefzS1Qe6eAi3L17anBxA4Wz4hqrThSyBGhnTwJFF2JJSDMMw85B3MmE8qCc",
  "key27": "5cGQUMd44ssPMF1fkPBhmq81ZDHaddcJdRyx7AMFr6poV8J1h5vGpt8s4eeWXxF1gykLseW4xYpW8rSUhyNaBMQy",
  "key28": "4i9A9s3o3woMA2DTRNQQtCHE5RqXkHf5sQAY3xZA7exS3DznMb2ayCGwVhVsRSdXYFQa5hcdPbQHa1fVJbiZxwnT",
  "key29": "3AiuSSrCwdwWDwwVaCE9hX9x4Ne4yEHSz6Zk1X8Dm2m5Sjad4qLdVDjUi6seSoYQqEnSWs9g7oiAvcu27TuU6MmF",
  "key30": "2Uam6coJ6uQTEz2WfRH7LDMBaxuWXDxMKAygs92exThRqymgzkboq3E1As39dz1DVMZ6ze6KuG2hhEtsPuVwfvFA",
  "key31": "2c3NVDMsu3PpojqacUFZomdepgeR69uvSXLztSebW9Qfn2icPtYPKM1EYoZmTH6aFBkKtiyB9XQ7zCyB4ALAvagC",
  "key32": "2BLb7hzS1HtYxH1DgwWtj5Uh7WvMMYCdfir7jPp5B8Cw88FsT9KCeSJw4TrwYdPV827W8qcUU5DMY7zfgzpEUjuz",
  "key33": "5nUnxdmsVztHDG6H8x6n76Sxrm2dQvLb9Y3ZYJ44EKHe9zWm9BEDfGhhnyXpoWwMnvoY5fDeRm9vSz4KzPgWBMSC",
  "key34": "ftFm7L9NHzCwhJngD2mw2GCEzXx9FTWLSPkWdRTSR8iFK8RLJJAnQhb4gq4p5SFtAk1cB8FFYpJgmWQcvRFTPxj",
  "key35": "27YMCGTE2WwgVJxaBVnWxN6uFdbiMtRqYiX9TX6x9ZjBuzUkzpAgHfQ42VwGQGKnNriTmMj9DY9YbUvC25hqEsZ9",
  "key36": "5EyAmbhC8DX4HwSvgDHLTYawKbRgCL3D6PG9n17ruPA2wFVygkr8YJESwFrxY4nA7wnoaYRHKGE15fLREe8uxfVg",
  "key37": "4FJgoAtnJVXiaTo9du4fTGHWQNPQMMGuoUq8xidUfxVGsuVBwPxdHYhjh3wbBhCU92Q1v2a9q7vkwBv7ryy2tHpc",
  "key38": "3CZpBk7aPb4bMySPomywurWacBZQgkCEcxK6k8hZsjocDJiJpSHZMzrmh4nUjjNWBatfUbVqLBm3R1Co2qHzcMau",
  "key39": "4xh4CBGRWKjAGrTWQkrbetDieW4KbytuDBQ61UADnRyraMJKN8qfniedTbiaDU47Qgb1buey5dzUuJHCZkK2WDM9",
  "key40": "2ZqfkyveZpQLy8yKWA3vZbuxDXNXByXYf7gjxgAyuKagHcdsSRYnPkiZtBHYMwZiWNWzk4rLC2T9vPLBHeZwRx37"
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
