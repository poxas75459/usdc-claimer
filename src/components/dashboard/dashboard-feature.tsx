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
    "542eZoeMxJuz84Jqfvai6eRy7Q8aF4uQdj74d8d3j6hZeGDVM1DQVQhRXCNe6SiD9gN4LJvvNvifBJUhoQXHVWnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56uBweVtM3zyEfKZcyNcsAmuYYrb6v31LhCMeU4js8z7fYbRuT3ZJYQpJEsHjXFCi71aUbxk5budkJg9n1Lfqthe",
  "key1": "RSy3ishYXtP645s9WjWsQWEkqnPvCr5BjAHsytqvDuFHjdHCZvUpA1HiMHNnQs8pSdMH5J2KVeifmUbCw5gD5Rt",
  "key2": "4WiKLgjSzHDu7WLppHcerZ4Wqpj1irhFdEp5EwUK3iyPXs2XfgEj27LGrPqDp2MxjGukGTpgSW8ciZRNJqor5BVx",
  "key3": "ikD6FM8qnnqRrVXudAfvm5JW3JYcdghGaR6EAh1Z3Wup76fKb7sjseTjohsCEhbFvsPrWpq9rWNYdc9NAyiSMro",
  "key4": "7RbqFYQLuhho7JGoybNqzreB5tjstgN2ppYqTWz9LzHG5kD9fq8vWnCUiggjYVTzBHVhxdT86BuZAWiEHwM57LD",
  "key5": "66G2r2yzCeTEh2ukMt5NqftzR7h5LZt52Y9xysdYUKqzN2XmifmN2KvyZQpDHJda9k5cNjYBG1TczzR4bQZUjvRu",
  "key6": "3jJkobbyJEaBkmgo7bjpCPHGGae8WwNxfe7bWRHERXiQqZK2CaZWnWtgrVRL5kFJS3srEHCdyXLwBoFYoDU7b6rs",
  "key7": "4KsKsijiP944TqmAetofa6RB3Ey3JhUMheL7TKmvpTf47Lx6DGFSA9RYtVM2juUdKCFxMZeF5Ni15pcgjVPqTocU",
  "key8": "5kmsS1yVx1srkru5YkEqUHjCcHydTJffWP6oAVfdLCTr8YCMFRnaAvgr173ZAjvrwuzA3xH8Ag75sUg1DKZyfUPT",
  "key9": "4bPSAKMHLaKN3vQEhQNW5rkRyJEpcdc1RDnw1CGMWBHYP4NG4cYvk42tnnSm7FvJd1c2aTm5pWFieC5acCjSjhby",
  "key10": "kMNrmr5k9iQ9xj4chjes2nxVU7tBdxn9qhAbXWc6MDbZEm6XpeBfTucNkbMH4rQZv2f1p7RtioCF8dXBRUYzqwq",
  "key11": "394x9sZPYbapUwk5CraqCtDXX1wRFpJPJFJKywc5VC3CL8xWgwSyzMkmVcNmKia4jVFgCNm4xSwLJUxSXUczguGy",
  "key12": "5zUa7dYs9KFuCoxrRN8RWtS9rJKRqtA9KPwbZof8EqZbndTV4mYxqKSYbJtvGmpr3BAhjZJNz61Yx9a8VfAsH2VR",
  "key13": "4W1qdzhDLVvDE4yivE6sLZ3rAAvrcxhenUMb53ZBfLX6S9cL5Rqt2AWn5AEiBtWBrHvYAPjjHiKsyXNJgx4oioF9",
  "key14": "4Ceybu9y99BR39Krotk3TMtagqijVxXaN2Kjif8M6u5qBgeqwn6N7NKRkcbjt2UAVWYFXTTyZoocoVa27fEcKEqz",
  "key15": "4Y2SdnH5d9WqG1edtD1hpLeboh98N5nr7u76oM9iJCnUF3Dom4avcASsPmVQiL4bc24Kjtipu2e2axeAwj2opS9U",
  "key16": "3CJHi3fAvQARdtEAm1GRAJ9dZvT1gMYB7cDrWqEtxNxgn4DHCtvMqM6EHQLexmDp1WYk9YdymtA7d8jvSfdPojip",
  "key17": "3XSHM8rPjCNRLNfW3B1WrnhrXSJfLzotYooMecuxJSLmtp1ZXzB3vBw8EoV7CxETGCtEeF7PkAwXphCZhdRkcPCa",
  "key18": "5chHLw4VbMK79tnK1baPCDJUUbGLVRh1ZdkKeuFLR39N9g7g1Ahg8nsDLKCsDcag9pojm4ZPkDkhypH5Sq9y1Jgu",
  "key19": "5GN65uDQKX35nLC7jVffpQJVehe7F6HjK2xHizSMfYq8pbzScTuvGstfA1S6M5YDrz4JNRJupjjQ5hEetuJsTE5L",
  "key20": "5snnxw2SvHVwZHipBm9tyGWAPf6PE7g1SmzNp3DGm4wngQyStShcTCg4n7KFmP3MfcGWCYZVsMmE8BFs8NFhMoGL",
  "key21": "4xXNhgqjUH4wJsoPkT3J17FMQ2cYfv89E4xsmWBcpQnL8UU4cBnaExw3SAncSvqVDzoPQ2YTUvqceu5W8bYbirJ7",
  "key22": "4jETrEcc3hn9rYtod8y9SinVmAgNrjLuUAm2MW3mZbkzRfPNLq3s5S9FWUGgYxMRdjtid67dr5VZV8NtD1Svkm87",
  "key23": "5rE81cbFfddWHy2NvVA7dCWDT5s8tuv3o9yMUvbgQ9SYbYW7oxoYiX2H5fgHyCTJB6cGpKeZRZn3WCBCWcaCMwPb",
  "key24": "e5gnY3DeTFt931ErhnaStvTTQaMLkzEY6gdptDy6HHWUNnEJHBEimbcn6Hokt8Lc4CvdC6ZpqXoFyWMERgQptBh",
  "key25": "3J3gV82L8QiqJV2r6gG8PqyRBG3pHQ2Z3nbLuVXxE3X4k9cKssqPdHB1zYSgTRCwza4SiRbwGeRxLiWCSMjNrkLV",
  "key26": "2Tqf4cm4ZeumvEZAPm6BuHeMpnJEL1EnLoDb9RJpKUoJjJorcy21ojUGDnLz6KA23qLfun1KZ9GZusFj7Yb8TwU1",
  "key27": "P158qCUr6VJz7zS9qNgAzvnC9FfVu7PojCsTEuW7VgarwSik9qnskGf1oxX9vyGGjDY1X9617GYbh6LpAy8jHVT",
  "key28": "4LrQcp6yJMdprKB525uRoKJ3mJuyNBBSfaTLbkeyj4CA1J623XprJB6raUtoMmnYL5XyxqpS5GVKftqxjgmv19fc",
  "key29": "215WftuKojcpGrWFMhEvNxsCriTCe5FXQzyPakjz8mwfoh3UFz3x4PC9xHkKuACubxgD5onFkaUfk53Wh4S6BBnw",
  "key30": "3bUzLtro8CQK9R73yyzUJohTvEtjW18wn6dCXbwyWyqMZJehMRgCurmmxEZVjYV8n43jMeuYy65qAHhjfP3Kb813",
  "key31": "4iu5D7y3jK1PNiKdDffLLY1QQfwe41CrwJzyuLkuqt31otYzRbDnkabaj9G5hxpMtJ2eYi5QwWT2NAoTn5vmER7M",
  "key32": "Ge1vTBL5DH9TRArLGnKMePLiiJkPfGGCjU4wM8JyChBE2nHDT5YGop1ctBELzNrLF2e87vvrqqBU68wG5HABfgJ",
  "key33": "4vDP38zw5HzKCFyVx17L6hTy7B2CUQ1Kxidyr8upyVaGsrEKaG8A8cFZnDMAVeShVkCLvVMispkadz3XpX3tqvKq",
  "key34": "MXV3kRx21VKkNo6VG4YF9YccPmGxfTsTntT6JM6QJrEpZFLizqqiqCRuquV6L4ztahr6KXY1Q2F94DfDxvXibZE",
  "key35": "5hgnqGuizV8irmVm3JaK9JGPGdNG7oWT3R7VWVx2ahigWAoe8Uprayt1kwWiSbx9RWqWgEnhUFdMGvJxT8pmSngN",
  "key36": "34MnZmfb6RmjRceLfLoTY2zt4AZV4QNejdAt3XMn59HBqXswUYkfVDzVcaGSfJsuiPcCFqiodHJFQTabitqyNvxj",
  "key37": "5zDNJm6Ar1u9tWUQxAf3NUpMgyjEMkTNog4dJnvLzRbBZNAs5aMtoDwfiKNZRa74WpR6YqgQZNa9FnX7j9D6q9bW",
  "key38": "5tSyGR3Ur9ne1y4f3aZ7nT24vdtgAbWprzbf9Ujrtk2AkurNNVHEEGNBvHTQXVdMhqd8jUyVpTZcydnhufGa48GN",
  "key39": "21AzvaNFw5pUffcAXzQ7vVBGrKSeiFd3XmaH7xzgihxLaKnqwd8qgZ3UdfHhHcGGj3RC1ACH3WFcna7n4mAKTtr2",
  "key40": "3zowpPUv2vMpdqSYdKCnPiv2Q4M6SB1YBX57j2z5Pp2g42BTMjV1yZjJBHtshdFNJHJ4hAsyZYxfcqW3Pz6D5HZZ",
  "key41": "45JQLiPf6SWfjqsCVsH7P339ogXe5kQf4u2JpoKWzunGWHx1YtHa6DXQDfg1Cr9WGsCQQ8jM2Joec4RHPf7sBgLP",
  "key42": "4n6anPTQxVTde8Wy9H5S5HZ9eba2qXdwrzKXzJa9b4j8MqvxXM8jobiNuwXxGEbpU8hLQU8ZnEbiWjtLzVF4oBoK",
  "key43": "23V6zaJ5V7BN7WEqgfTxFSpZZfLykdXXsqXkq2EPEe8CSQBCmB3G3hMToEeGni7UmeXGAysv6g7XwZw4JrEi13R2",
  "key44": "3d6cK5TduFsooYQbMMVZvqTDpJQAUqQVRHoiUyz3bA9EAk4nXp9U2F2MVoSwULSCztip4vqebdqANi1YutF4v7pC"
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
