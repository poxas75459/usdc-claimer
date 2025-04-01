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
    "2zXCwzfH4gKpidAR4xo7wHt4CvmrnaDuhYwwkgaRsTHxzkyfsxWiR1uNJkJDxBBK1dNFmLdUonk91fVE5gcKkcVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vcg3sKBscqTd7jeMHHLEscJe6ddqgcU2CHm82eCVkFKgPxMJi4TP8THeRsGpx7PBmyHnMD8dLKo28iaRKKNYHcg",
  "key1": "2xjNkFmhX3Y1WtuP3pxKz4oPkTsL8XbHQpQHVJxHBHg6DEuBiZjZxUME3dRkgSCXLmAQzScSyXzQAfwC4kx9igHy",
  "key2": "zvdbUxPoZiuFJTMJpozx8muvucWD3QLiyLmG2wCZPJir9ctJDiEyBQ1ZKR8XmxRGceDcnqtB6SYK69veMRiCwkH",
  "key3": "WTryp4RMMP5wfioeJciTB6gQz3NgrBmDWF8EB5WXRiAU2Xn3weniBUFjnFoHneTSs2uhxSsWCMxVcog1VhAa9Pm",
  "key4": "fLb4Yb6hsxB5117eHXZng6NRLshZsabjAq6TJKizGZmUcBjs3MjdA9oNcDMJs5DXMRbw9F2mCT6YT111QMd7t8E",
  "key5": "4ndKxjkKnMbN66mQKxnxXxcuLwy7X8F39m3Z4hCHMVricqbciHekk293eqvVEo3mxCiWQxLftEtpec2Wnm6UYVGc",
  "key6": "5KUrYeYKyEN2Q1FM96RDsVSSjxAT7nKdVpKJw7qVxjBZX1GNdYUFBzFCKAun5Bvec51qAFQeeMABPKAKr5NHZ7j",
  "key7": "2vHsZFB4nn4wp6yPsj1LnMXksPT5bskxxruHwcVXHYaT9S86RB5V9fNU565H4AnCUnhcYrNFcn3a4Gx3oq3NsmaW",
  "key8": "CyR8xzvQGU9AGD95z31XAPxuabbSUFcbYnWMMDFeVQbad5d2zqQgjrnhYfV8mahTXC79gFUCmd2UdzczzAhVjt6",
  "key9": "2zAPKtceD8NWtUD2DQDCyhxn3nXoKUtcWnU5Qo42D37NZshB4V2qTErdJzxkZqcQXFi7hcKhXj9Gnh8ogu8Xwbbr",
  "key10": "4fPLdRukmheDfQH2E2EW2RTqfsUjZrNTBt4ogyWbfs9de79xVj185uWRVEH81f7NbxXLXZzfGdbyjJ1D1bapymA4",
  "key11": "4apk66BoqxPkGCRAMHMkVgYxH6g7zaWPfa8UL5ccTnKgeFuoj9ixTAVLphr6xFkarUayGMqKh6bN2JCN46xcW3Nv",
  "key12": "4jV2U6jbi2fx84PcVmLPQ3sXPpLHdcHXqwQgmsrkieHCepEUAWfW2inzE7JKhooBPLrwdBGVBrWbAvMCJ82gqQdv",
  "key13": "ZUvddPMCGuTgp5nmkbuR8pLTXusZzsLt6Bmi9UWuF6Ttt1ccD3cqnghyZqMSFNYSxyBAY4nvBJ4K9ZUN77WWSXN",
  "key14": "63fLmADUENtbcJyGfK8EXRCV6RwkmX4pepBnmWDmM1vwpsTkAES1aM8nge6bEgZGC97ZYAr8g8ueXJyPFA6d9rd1",
  "key15": "5bHRN36Thn3GAud8mX1vBAtegmmKRepGF82NKtnqpp37YS4Nq7nt3TBE45oA9nfQGE7fUT1C7k1TXCjdLFXrEsdt",
  "key16": "46NbMF8Tm4BVgqsQTJ1BoxHn8f2AvpudsnH5uPTj7rgu2bPS7mgP3aiKxZxyCyAJEPy8vJfwUh9UiKqYxxH21K3U",
  "key17": "2hbPYd24CRuA7wBT5cXo9Bn2odPCZPrrhQSVngnY6ZtA7RNSRGntnt8WUgQ7AgMQppf5WEt3gkxrSGtiDS4Ji5zE",
  "key18": "KyK2MjsdjDPHSPrQmZ3eEPNN9nJg2u85dpXVPBEDkgiCGM7WhqrJkoGrgMannQsVStUTZUj4bMmd9tfWyZRD4CW",
  "key19": "5L1pMSnv9V3xhVxDhcCJm1STEeaNrUS8CheupAA5hwxbo5KLwGKZtKxZLhNYdFnzFvkBHkF4uUgsCU6kYSxpd8wh",
  "key20": "2qaLmNidP6mgynnAQorAwGVrc2LTDzke4Nv3xmjg9pQMnr37AxemmM256d997FkfVDG4yA3tG3orMkJTUmmVxMff",
  "key21": "5dMSMNzhTzJ9htkEaUZ2oJArKxjFgi3PBYyzx6dkyFbJzzXA3EnXGeTqVkBQML92ycyqrHtKZAudv8MZsu9nnoSP",
  "key22": "3G16p7V2Nz1pfhdTquXiEjDuPDNqFme9bVzQYYSQTyGjGtAAa4CeLafwYE8R3UiYsUkoDt9FfCzJGbcPQ82kx6yk",
  "key23": "2urNuLmD1eLgVtb1opjhFusLHneNAns2SnAJCXb1XAE9QEnmJx9YAGunzSA3aYqY7vREJ9BFG7aZMnuLEpbCwJ9K",
  "key24": "2h3pPqBycatUmJ4CXBsiiwBsZ9wX8NgervxNntPp3Lr6nkKatkLMLutkvp6TgA2fbx1ZMcm45XVQj8joEPppEcfs",
  "key25": "n5puaXsdvbE22Wu7NnVBtwWysXg6LobihrumVJmwi7XzofyFjy4pzPbbUPEeS4fd12wsCz5P4xzphguhVAQ6Vvg",
  "key26": "5wCF7mroAMGFJrWzKSiK5YvWZN7fp4ahH4GwD1sR7nBUiMsgnHN4cm1BiBDqnV8GTxrXu5WsZ5Ywf5SRxvU4zMt2",
  "key27": "FFcoWmyeRyBsJweAFDvoqCiXocvhoqHGRnzLsHhkvUdWrVjqcjQGxq5xZjUTmLtRg9AQNEjrRNLhjccF8ipBnHH",
  "key28": "2FLBEC2K92eGxLZ6RJ9jGVNNiJq5hxmXWuCSYcMojdc2NswQRM5trqjj5PYR24N2xVthnVD18jMB8aQHiQvGsEV4",
  "key29": "5YB7J21TfdD7YDrXqGwF34MxUWysN7Et9YGYGeWCkUpNCEjVdBptKGubJ5GQgt3m7EKWxxUBDSz53yUVomzxBojf",
  "key30": "3GLFGdEjTA99bqMzHE7idpW8waVQzeetMm4FYQpmphSDZ9KsNRYnNQzAZiTf8bgodS7HEWBVppEaaVKDG1NXVwYo",
  "key31": "2HzenehNbGrQyXSNEMCXsMLpbnGPf2jC6xK1wTCLF7FEx63Lf1ew3x3V5q6BnHufwHkfPNJDGZzqW8iT6MfBmPo4",
  "key32": "3At8VUmXtdjU99t9sGstxD5L1Dr7RntorD2d71nPdiGgkc1NAUoz6E2RPMncZjzzTgaY3AMo1qAfN4uzYqoY1wmd",
  "key33": "2r5E4B8mTLGj6gTPfZoRUMrhuyuUEcqSqHS4XRvzWQt9EjfFMcwF6QvojT3PSnipTHAFuL2yuCJidD8JVkxmyR2z",
  "key34": "2E9B6nYYBAiqyzJ6WvMQwnUcJW7CVeSabDT1kCK2DH2tzw3vcizYqbUqEA8QstU2vpDnCr4PcNuU8BbgSkMVfznJ",
  "key35": "3w6KodZyiA77FbgcWCrRQe3oHQJTsYy8zaGJFDXTRjNTX3Yxng42XsxKyExPVfSjC4mp8xLPHGncPxviMD2919ft",
  "key36": "5yTTinaYR8EkCiGL7mrc5aPhs6uxEpWoYrneSvnYxcmzu7fCbLVhXAaFocj1cedRdNUnxbdhpPAn326mAUxDPYGz",
  "key37": "58638Qnzmn6PP1he63tLSVvToV2Lmx7PrDdNtqwyyxyeY6xsVuaRgRb5ahPAKEiDytJq9DVN1vZavTqEx1enDus4",
  "key38": "3NNtSiQyg4hakfjD7ANiZzKVfpb5p3SFQEsgShLBJTuAbpMcpTtdCrSW2gQg4r5vkChp4FP2AJiXKmgpYVD822H3",
  "key39": "5ywucyHWG18DvDzryPQDRNQHc7kirBjAQ37R2AUkNwfX2Dqv3YdEfaUpcLdmq9Js779TCWGdN9wBd4jY4NXMnUxW",
  "key40": "2ntykKAT4T1st6cXhTMjjMzsPfSbJeRxKJPXgH9RwpU7MdxdTmY8tKVxB6Fv1i5vD4heXPsqUgedf4eUHZNWxztJ",
  "key41": "4WGNirUC2qkNzXHUFddQvwQBrXeZC5NtU2zvtR8AGSzLVHtgxp6WbMm2mKg17jB7P2JKCckSeUBSkvWALr78SLhE",
  "key42": "5gvbfUf79a5ppgzou4VqGnYBjPR2ZsZ5jn86rf8EzNc1NdPygnSjkWRJDEoqkZBN1BZBThzbDJJnrXvFWdGZAXH1",
  "key43": "SiCQATCHyWfitCysfDXMDfo88ubm9Q6NS7QweDy1MtHN6CGjrfTijM2WDfAdWgcBzvq5C5AcJKpmg4vd4hEZvPk",
  "key44": "3NWzawFSvk1NEj3sNdgRxSVkmZY7sGqC3RTk1L5fqQeQbDGjajAQDL3gQ5aepui1NxUmkxdzMVzRvPLyfZtaFKq2",
  "key45": "2vLTHpKGpu1YcaBQ5HmGg3HAT3cTBsCEZFhMXz3mV9bYx1dbsja1XhYKaLPbGxLTDJG1fUXXoStkUwRXGdBFoEDy",
  "key46": "3HeB7WK4ErpX1DNwGRyBKZQWa6xFJu3kg2mfmtg6N5oPpjUdJTbU1QnPiEB1yMCJMQhgTG4FsZS9uPDbu6cgvy7P"
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
