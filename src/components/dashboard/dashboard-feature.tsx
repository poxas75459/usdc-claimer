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
    "53kYXmZKE8Tu6cMnstsv536apqnaswDyy3bvuJhWdyiFAdN8TkiGLhufR5PHurUoRMegwcLmpSKrzD6TwYffeApL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vMJjKBoDsXavsJWXSSmeYFE8n5nfGoNUWSu7FhehFPm6KvQoVcjK8ymsk8m4zhhZGnWJmqBgPwQvxfKp5XkN4rS",
  "key1": "aWqCnRMU5n7N3qdXu8ZPTofrMfvcjRuaoLk33siYhNAHe1yhEsrzXFiYkxd8W18hG9g4ZDshXQ85n6UfAQe6Jry",
  "key2": "3sHfg4t8u2qQ56nUFK5uKgtr5o581v1fZZsFYQ4nAeWL3KE2jvnbmdAYH7FoL8DWFQ9eBmA9DJAbV866kKDyWMzF",
  "key3": "4AhUa3xh2fNBnECxnanrZn9UKAjyWSz9QDtupVHWywozsTBe5DZvQp4oLy4dReyD2xLrNtwpJ8E7iqDt4uh5xQ4X",
  "key4": "4FuNxrVJ5kg4J5f6hfDYXJSsK64xMkSe1aVpe9n6LCwBXDTiJJKqoYSjm9rd8zmSrg5p5rQD9Tv9tWrtQxRSxnYT",
  "key5": "4cxnpWmJc5wpzjQ979Z9coBryNo2SgVvcik9n7DcM2m43yh1bbbByvuMvw2i4VCd3yDDo2Zw6Xq8tU3kqjDMRcQC",
  "key6": "XwPdV8GdcCeRvt58hrfJBDc2kSERHS3aPQCtgCH8j9GfWLx7u6R5WFFW3y8msEhKgLTQFaTajqaGnVCbcgK1sXX",
  "key7": "31uiowS21CDHw3UHy7k5Up7bMVY5cwUkXA5czck6XCrh7nGZqsRTgpnPshKdkHhud38mvqaV9GwxJpXmpZRzf2St",
  "key8": "55eoN5EPGuD1keqNVmytMLabtCN4n2NCcdR5bXoUeN7MqkBC5frym3U5P2KmV1neBrikvqxubEFxaTL8NrQnJJ9m",
  "key9": "2YfuYwQhkyNBW9xPBaidn3wVxij6wVrWqXjEnTeHAL53TejpEX8ba33WFgntaBhthjcyhUrD7bxYPfv86GCJQGed",
  "key10": "3XfuNxd6zjEaLs7Fa27hSoqHvG7FKF8GaKLGGSSAVfqirCWmF8sZL6cVUprXMxnBQ4UssURPFvmUQCUYtVkYoWM9",
  "key11": "41Qerr3XkyccmKgLjM9kUysLbpePLUYeXhFmHBEDP7VVZS1te7naBmzZxhqqk5EFaAZypjr8FK2FyJYcYaqiLJvd",
  "key12": "4KdisqgNXL2sChJCxm7WJ4V6gchtdXthzJZfpkYGFBsxzB2or83hqunqTy9SMmgBn1tpTrjrpLLsF1F7tT5eBub9",
  "key13": "3H7ohSLnR8JeKuAJtfYPw9XSH8Si59nNkncPmQVMtjcHyfy9x7uUfukq4zAjgAzAejw5DqB3SYp7tUgBMAnFXfPY",
  "key14": "3hhDMeqeqyvc1zQ7hEN92he97v9rhFcaV6GNETMfJW641RwXSjFTYpoZhXGrxqdV1xs1wpQ7MiaEG6WMyeadUSjJ",
  "key15": "4t19cLdRP5MbKCnmnAkPShBboesaNDML5RLVQo6toFYNsht4otAybnccPECpaCo21FkPAg48LezHWJ5M5x9taBN4",
  "key16": "EqJ9PR8QnmomMQeqQebG9g54LWZM3pPngcEz5fAxnpFwxh5Q7vvV9bvPZe9PiYLuKuQooUP2YyrbCAFJxFmN7sy",
  "key17": "5ad1xZoZrDhhaTE7hcafanwc19AJXAfDX5QTPsHwG7XgpNN445gdNbRYMwXb3ysD3cNhoVLG3nT99Z5M5bSDydfC",
  "key18": "5SKusBrK2bCTusfKLqjRTntHkcyjSjcmdpkmZBEk1T3wMs8XuPUeL4d4U3tAC4viKmWHSbvKXcokZoV8uiptmEsF",
  "key19": "4XpVdLFwiZWXcQAsK5aFZ7x4h3jvvw1pQzq8RESgQ4HmUMr7CVvYhVD84Wt836qSnbSjka2w9Xgi7VmDdWc87EkV",
  "key20": "4EoCrdYSUvFuiCGQv5Aav17Sn25pgjQN1u7Z9qVBYGS4XJ8uWe3YmaSyoemXcFFxUsLt1EwFFiGMFknvw9eLrp4N",
  "key21": "8LdSzxtpkfV1ec4kd3BBpuPGHEsyFJQzRZ33LnBDxmuNxy42GZ5uDYDHYahpoVVSKGmYPFMpqFSMfT9EiXiTFLv",
  "key22": "5oEe1rePQKBeL5L5HoB4NdjZMjXWfUw3BQjbaXYGGdQFNrAbEzeNVpgX72cszsuGmcX3NtHy497W86VzPwarDXEy",
  "key23": "53ifUijaaj59sL8Egkn4Gob1CUUAX6L2GPJX8GhnpHt4oJ3dJtGPG7UYZ6jEigoHAkirh2BCntwCyXTDQnNg3fzF",
  "key24": "64pTT91BiiDVvxhsv7iNrCDozxDJrN7sHRZwjxQyp7xanqdmxkLZacVvnSP5ikHErNZdYoqEmVVron5SbQXz1DrF",
  "key25": "3GAWfy4KJyFh7pRDUvx2T2ApktrsTs6d5QKQCkwq31LUTF5TXepasuyq74xqTGt2wC5a98wNHDHRUs8jajZGXE4j",
  "key26": "3g9MW3Ucyrm5UJcJdSfoPyCfqAcBTUTWf5W93e6KKCn5ycZEhoAMEnp1Hi3VRnEnoxdVzr227zHR8btfiCY8VRpg",
  "key27": "Ez7rayZWFVFjyQoV7sN8Rs6PSAvFk42cGyDBEQPs2ah2nM9qZMYRt22JWA5SRddUWwiGcuR2Kez4rGyHQa2SkN5",
  "key28": "9C7n8sgG945YHR4GD4XgCqTgUToFZzH7P7h51YzkrUJYoNpvQGgJZWhV9o9eoLBzyXU3H6ru7ik9N1debL1TR5r",
  "key29": "3vgPrJLvnKXGjQGJXwdoecByMFBhgqeXS7WGk9dV7w8mavMc1JntAb1cRKadnYobUwVWMGGmc6RzdsZKE3TRfcpJ",
  "key30": "3YYbECiHuHhBJCdLSMCqUJqDfvXisVJPMSTeBWzHsR9jgznZftVkfKUE9utSFZZowuzGv2QM17cBfe4Wk17Bin4D",
  "key31": "2zaigiifjuQV4cXefmckfx2PJhBqmNQGvdQGvFDvvNW4SbejUQ3inLNg1xm9WuRB19B58qFcAQVkDKgYbexjAcaC",
  "key32": "2AVxaLAWFJ2Z5Pf3317GEVM34AjCFGfkjaHzGVbo6v6i4BW2BZiJqfD9V4bXtnEyNGYVSZFqM1QztWnMKSzA81zD",
  "key33": "3EVnnovJjZpkviLjpucHwp6R2n2JNJhv6R3ecA4TQ35EVT5Z2Adnv7Q9CjjQ9RGpiVmzUn2zWysDKLDsFsgenxuw",
  "key34": "ovLtQ8R588XQjN1ZnHfQ6Gxq32T9zdPYBfDfcsVi2s5STQ6zZjZCjDXYBaVTp17ET9KUa3q72oDSq9ZU3fh5w6s",
  "key35": "4xJg8AM3VufGcSuQojNNMZBJf87MrCbX4CNXfAZZBcN6Z252tv9SKyxpQdQqZ9PAD1ZHdwCBUQkBGpEtCB6DVspZ",
  "key36": "4bSNbL9vKTKcPmK6bYF7HRDQ53Uk3EC1n8T8E1ak5jg3tbo2SxDQQiur5fCtpTyXuGRMj1bqPouu5sbHiEhX3GPU",
  "key37": "o6ydAhmTW9LK85in1w1bGGiuwUkHPxwEfevjMGDM1fBstTDdiC8ov64xgSnpMT15PADZcbyqofQx2gDiG59t7Zr",
  "key38": "4n1kW7m3M5vodi9hnzDcfknkPbVPaNDV4VfVWKu2DUQfRLeUrhyH2jhsCUQmPjc3hz9jqJABgcFUYyr26g8Wsovv",
  "key39": "5DpKDbyAwFPmW9nn2Z3p85Vi149FT1BMEcs5EHkiG2SScpQdwrS5CNeuCQweGBNVYcsBLqGxfNpCDctXpcpmNR3B",
  "key40": "2xJ9Uj8cD4EDX1VMkHd6KMgcyzJo11Q79itASG1rGWqd1FSfkmKWw1AVGHe1aT7W6jbXf424M5BubJKLB2tFVCAH",
  "key41": "5RnthaPM1SgQJrkXcBHiop8Vd11j8nfKcKi9VXogo5CU35gAqT2X5zjnZqjyxHib9EEsSiqkdE6WddSkdTWAJ3Y9"
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
