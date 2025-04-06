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
    "3f9UdYR5dL3fzTqfBg2znsWx83uSuRY1mN5b29Qgw7jzHnYnDczjxLxHVL4APHrhDr2MubNipkhfje4K9mr9BJDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vpuv3vj7M5MSYZVRJkTLwWqys43WHA32seGx7YfNWXEjsXykUosaGNFnBCnN7myJatLbszNhXRJBCsrd4ja9r3h",
  "key1": "5JC1vfQswhGe8x59DPnuMCxNSqmUhNp1FrCJYUBJhPfDJyr3HqNYeNprX93T2jRsUtCVK8aWhi7fDXzcvEogV4z8",
  "key2": "2Fo1xCMva3EckKhkEqyaViSVpvAPTqY5av4749c5f8mBTGWBK6VNZsbicDRmFYfWptuCG6PeJtqeTjMmaEsXnP8h",
  "key3": "QfLcRLDwWdAXNURK6uoVia7H2bGbsTdrqZXa6fT5SBEv8eGcHj2qwiLigMvifqHxmu8jksYdnjDeQ7oiwJp9iSS",
  "key4": "5tp5vMmk7x56vLXuYRf7NoyNZds8LygECXTY3BuX93DCPt7ZcRXMRACY3L77C2Ye1istMswjD2t4rnEDRDGngjhc",
  "key5": "41tXTJhLsLBa2Gy4pNdXmh1vxDpMavgXzCJY5HHmocVbHBnYBL3AREqQPyQsrL5qsAqwwZSwX6Q39udkbaPnoaGF",
  "key6": "4gPcaeFkDsNm798TYiEtBxkoFgKdJaruRwWGc2zfKjUvNnDdp4icex2XDvESmYWfDK8Ro7ztz5jEnmdwsMizdGcG",
  "key7": "4UUpnr2hthSuoSQf9RnwXD9HYZwNTnMAaxSCAyhregnUq3Nmx1uiG9u6DkCBZ2SSpQTsptg2Wsd7Q8ad8dP1gTPb",
  "key8": "2AYcihL43Y1gxG8tD3oa5fivPxSUbjbniwHQDnYxKpuabEM3mqatKtuSyNpnGUghBD7crRLzkJPa5Cgn42rFrBA1",
  "key9": "5MzcwYSBGV1agqbRLpH4C5tp7TVCijKSSGvbuPtDxttdu9MTfkr316VpEFLJ4ouGwczik79CEVwDwNUF8ED3PCZu",
  "key10": "dwpswHMJtNa2wubKmpSuYAvkzzjbv5uT5EGGQJ4rsD1UEVC5uH6B1anLW2kP7oMt6XVuX44NTB5WjA8fkfwi8cQ",
  "key11": "2eXLVFdg96asQ4wi6BGjnRt3M1uynzG2BF5TN4oJVaurpPeNbYTUdagVJ3yX8G4tCoqGcvmqr57MJR64kUdPrTiB",
  "key12": "2dTaTRqaNsUCLmuLgTSFrdkfiRZuemycP5nA3L2vw7FUdQuY2JtdfLwqF3krgYnKcERR1Y56s7LoyBbLas2kTrSM",
  "key13": "46EwJxthV9De3XQMtHbeen56yJKQxSwVogAxgGUpMN8AW8dhSZ4CTYF3tZPCF987g3DuMXt8FYRaG4hzmMG4G3qV",
  "key14": "2V6oKB8b4D7hzxHBSFuKpKGiwKN2JCMwghsgMgNbkdqJxCkoTdSS77xBVtjyy1dWyEEa4io651rZsYixs23aGU6R",
  "key15": "57N96W1fYuC486C6hzuCgS6dHr9qK8o5rTkfC1Qj62eDHN6yZxYGRDMk4U2LoaeN8Kzp1bqh8K7JUHXoSRXNxftZ",
  "key16": "44c6JpMzn1yUjmrrvpGcBAdtfDK6HZ31ewB4FPxTv2KUu6uSno7kXM5aphMPxBQ4Hkbh6Z3yATaKELUSFqRyS2Lj",
  "key17": "57pvWvqiBKzv78MGdKECsrwHMi91W5jYdGeairQfBURSHYgvCf9dQ99dHRS7qGmVMMCbj55BBmZr5QwJGmcv9vmn",
  "key18": "2uWwaZVLED1R2W8ZD1PMEUWi5dVybtGDEMxiofBuTemMNfFevKbnjmk8dG4g6KikUvFh7pSHRArL7zDChFcq3cMy",
  "key19": "46Cuv7JYL8dTyQtoHVXE6qT54PmiStVSQBxqBJYNceLfA7kQAKJX8o6t5XFBBYRpxntwgG8XyErxdfuU9YySrdeu",
  "key20": "5X2xmSMq9rwqMXjtgKG9bT8fX6GS81TupRZhe69BMvuAoTtgHjWzN4m7ng1G2V1sTdiL1SH2kzJATC72JTjVAY3H",
  "key21": "5DXNTajM6RVZmrXYU57QGDqkRdfu3iURiW25cAnLbKLoRjCBHA7GKMfPMEDdfRE5mHr5YCULkoYuJS8k5nNFMJTs",
  "key22": "5HBUjYcRbBEYCEwA2AHBtSLCUyQFKiuQuHyyd9x3e6H9cvvFihKNZAGG6RnqBCCdPxkk44DCBHt1D7vWa31suvV9",
  "key23": "UwEQALJJh7fHCpKKKrAckhVt2phShG6WKWdjms6i3jBeVkN7eAuCCD5AapUVoXcaorhXGDWFXjRYbyHUPvXXApH",
  "key24": "2eMQErYbNMq3TAPSPseq66W5arZjD3AtmkVgSec6emUonVMjZQuEy8mRQm7NujUnrQWbiXaUfeGBDDStoGo7Uw1x",
  "key25": "4fcr8MRRUEcxBQCUdQdSDbJEYUPoB7Q3o4rRaZ1Ev8BVg5BJwsv6jTEvRHeCZr8ACWZWiTNYYBabtVoMFRto64z7",
  "key26": "5FYE6J3hA4j5FGHPgsirXQiU8fmDe5zeBtKTBy73Aigs1gqwQSW4GScCtp5Se58J4uMcU5w1HQeCi1zoPhYQaatw",
  "key27": "2MwmNf6UiUTxVfxGgvansyDzQkGhPen5TZQ7gL64xxj7A9nxUhQS7n2mjqgXmz8HxaFj3NNmFzArLLWztsTezFy4",
  "key28": "3Uu65Dh6bVtESrzFToy6L2bSFAw1Ggi2CDGUN5eTyRfoPiWL9ndXhjwH2aBhfZXkCwSijReLaMhdvG95owxJfaVL",
  "key29": "3w7YQEw8sgDBdcSJjQ2kXYGFK3bc4srhKViqVY5MfGHj4kqQMPZRRoECEorBn9URNRnXphFRzouJaNYc46KEEzc4",
  "key30": "5zPXpmEbcFNpvs8cR127qesiFvtZDPCkZ9dRKj3zwrzDvFnQo2z4cMbxxEr8G5ihJhSbr3jAXdsBTCY9WrT55HSA",
  "key31": "3wAWZ9tV7MHaTfdoumotRUAAhZW67ZrdwVKTTckqAk4X4PrPmbWSL5iA1Ewex6SnkmPe9CaYHgzoSkZzCnHdMrXN",
  "key32": "3Rz4SBRWBKBuT7R8QSz7zVYR64NqsbmQgkc1NyGwQVQpFVKGftejpvyPsqi5w2YyU4axgJKZXc4uPnux41cKqT9k",
  "key33": "3JdSP7GFcXQ3ArBHVmFProfN9yhbcUjKaGwbrEcNYgCqohZwcn86czSHjer18REFeNg5YS5TFMY4DUCVY3PTQVUS",
  "key34": "5LWvhmSXVH3YgJ5CYyiM6fEdwZaMjF5xZbU7BwBdM44ooMRHNnYJJU8b83yjoRaYoNU6r1bZ2omyUAzBVzjW4Vyt",
  "key35": "4vMvEL7WNYnCvkAPyNQFpAxB5xs9iwisejVgEVP1zFVUqsoy2VWziGRtY2QA8tXEUNvbNhs1xyBsUKTFcqMoM3AU",
  "key36": "4jako681DKUHJ9T47MDVQ1HnNgPHmLgtiW692kbHSqxb939fJXdbU7Mnv3x1kEtxcUFs9Ez26rXRjQDdiXxjVNqv",
  "key37": "3xUQ2nAqk3sMirLRJ855syJLw19c6c7ajVBpEEQCBd96b5xKdB16S6gMGov4H5zHfSBvQ49gnFUkdWT9V93KH3sq",
  "key38": "35rvk37Ser247y72VtZNWUxGaizeVgznzsKzFEWuyBADV379B37m3gqptX8i9FiiuWvMYLfkCngKBTyUQtHAy1G2",
  "key39": "2HSDMwrkRspyRBmeFeDhZPjucnZVCNgGU6Rf55T5D3fVdfkRxHQvMmxG7FhUezfiQrrjXUxgKjpD9wGGDSBc6niy",
  "key40": "2BmUDNKc7JFnJyTeQjSmvmnKVLxmLAUJcWmMpL8CnQCPKEoZ1u7smqTPgZJB1wvfE9somF8FeZzz1KKhN1nzyiWt",
  "key41": "SP6HwHEvLGhP7wa4KkQU9ciSMcUQ3FPoZxiRPV1a15Qy4jWy3Y6uj5mpVFDwGuwk83jS9RaVEArpAjDynM99CcQ",
  "key42": "syKcntgoSukiK5JHLzQ9MTsp9ffU5Pq5wsSkRLDBqqeoruxcudMeZ8VEgYF8NHYmVHvPE4PJSwaGc1ULEnaJsus",
  "key43": "2C1ZtQhyCzp37WWr2un1prGLkL8XW3Mpcj1xeaNSXeVVumXQNcBK7SH6vzK5MruUgXfBth2XYRF7jnfPepcTb8Vs",
  "key44": "2UR9fA5ZrQF87DZiJvhAtB38LC2csX8Ds2PrPPGZhX4MVL5gCYtS6rVUxyAhayGnwRCPR8sSVRBtjQcfbp4HHEGH",
  "key45": "QuGHhU4TYKepgtMH9LDiq6A5wUh44hik6JbjGquqmiKVJZ7Jvyg5MXBewiVTLaMoFGsauWReUvbFqCjgFJf2VY8",
  "key46": "NJgEcsDESkH3LVuDxrwXLQy1HQD16LczNUh3AaSyyUPevrhtL9kPWQBVJajecTfeJ6cmr4U7p3mJbjn2ENWsM65",
  "key47": "2bgUb7mmeHcDTynSZVZYhfofWiCpMJPKs4m1No4MuZw67EjwmTgR9w8PhGcRV4z6PsAExUn1tLooafk5CwVd8Fsp",
  "key48": "2gRczx4J5KZWSJFrgeYMmDzku1WLPWoFojNXUZHLu5YfAx17L9yiDNx6eCJmUJhRmkG8esbxVGZJSNWX9shxB3BX",
  "key49": "4HXhHr3rfrDeSzmQPoXFZY458eKTt2YbYDhzSc98ntoQpwz2LJJicwg7PaypC1K4qabHbA8kAT76CmHzJYg4QJUD"
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
