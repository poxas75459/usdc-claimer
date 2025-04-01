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
    "CKUNjk43Z2wvSstEhzYtua8duHfbAJTa7au8PfQa8EzLRLa6hX73AvuiGHdVvptTtbYHT8DWoiVQWCtr5suY3nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TAbtwLs4RxoVmgMiprsPT4jyqaUoJTtw2dXFs3quKaqPGEtyAFXe3j2PSV3HmViGypLyBdA7XqHxLKY4aLuSVPz",
  "key1": "2Yzdp1bU3ErxhKU4GzESsLm9pQg13b1XKPT2ahWiV2ofR3pB94D9ivWB6VqXRkFBeonmTkkpXEphzudkWfKjA3UF",
  "key2": "2CHYLUP7uwf46TCgjZ3VJdCzhSyAWBhbjVd3dv7pYSPkBZFZ9V4JcsgRq2DnCidf7HQC7t25u3WEBafiSmnGrqU8",
  "key3": "5Hx2DkmHhXUoWJsN81FM512oAp2t84VS56n4AM9BF9KyveoztXSwTBBmugJcfjY4ttknUdtBjqpS3fm6yntcNBb7",
  "key4": "7ux2sxwmt8fJA9vtYgkNtiJKxKiHc2YCKm34CkVby7RV2k4fdguaeckV4bhT9Pdg2EqKZgXF2hvyz5HpY5Kom5g",
  "key5": "47RKP8vDmNXkmzFErtDVRd4jS5HC98XsYm5CadhcXbdyPUPkKMUDREnJnuEDwhu2fBYpca7ZJWqQXBC1sPpjJ24j",
  "key6": "3PycUQKWPX5UhvNPh5BVm7GUXmAzxYghFvKAtiKx4D2GesVMxwCnF3vDWB5DU94NpjyoU9jxBzaeK5b6sYgZYaDx",
  "key7": "47SH2RhtYej54CHDPV1eaEY64ivGrpVhepwuji1ohQmABRheVrpg7rMMys7rmaaHaHgcVFqV8E3f3Q6uLJdwokSq",
  "key8": "2C3fThtwNQtLJ3FvL5HMmHgYwqCXRDjupD32CQRhkdjxR2q2LTNzHtsC78Y9UMzL6ZoTRTZAwQtP1jNe1MJydQ6r",
  "key9": "5DoxdscTTYCW5WFM9kJsz6wRwzVJJLTJqEaCTe6CjVYrk3nAFD6xHnZqCHvN7zjFSopT6ANTDv6huAKMB5rsmucK",
  "key10": "4Jqq5uqmoMngFeAhNkLkCYFFmyuwpY1DtsfPXM3o2jEBAVsMcCnW1hFs9Py1bjaNP1usAUzDNNPwyoGbyw41brMv",
  "key11": "3cYKWMuXAziF4sn69yYGm1XctGJe5gqgKq6kMVN9fQzbzUVkujTFtGukjJuogoWe2DDUZqaCoh3tfZb62rKwLSZG",
  "key12": "NxpSkEqqgVdxaf8bJnCBmxVR46udrqRRbkcjxdFDxLz6RM8nyHok9cxyhtYd8h2zudTCTMWvAcGCzVdfKmkwA5c",
  "key13": "5XJCnwxUou2gho8DdtW8aQzmvKpA7SS2tR4YhCcUYHMaw16JS7oorcFvwZhVXLmVcMGQDzwyAEd8GeCFiFtRWBGe",
  "key14": "23tQJtL3uBU3WygtgX3P2THfcrHqE8TZPB1Sut3YU2NSTSpEP594XtkCbJvMWPFQDtw6sebivuPskFdG8SyCSNEF",
  "key15": "67KDDhLmJjbcr9h6ZsuLRqD37Vt8Stbx5n67XLzrNgd6izNuVvGcgcsYvCFDdNxifDygkuf8LHUDAy245oQ6LfW6",
  "key16": "3PLhkc6XwR7ygsh69cHiHjoiqxcFZkfEJnCUYDikMEj1mMEqUUZaUyPwbSsjKLdL2P4JhWcnKm569gU1q6cAUrjJ",
  "key17": "36DQxtKghGsDQCQfnqdQbqdAmvt5LqsKGUYHSivXnJxEXMvu8QQFBWG5z7wneHTa88MvyjstsixyLx9QMMoybZ9R",
  "key18": "2f1Bwtdh64FuUdbQweC7r7LxK3xhym3b3qyfZDdKFu35tojUefEZSLUD32FURA3AGo9YSkfoSMfF7Hqby8uaxqeh",
  "key19": "5ezYGA8CYyoNFHUrMtHKs89sV1g8EPSk4L1GMsGMY4Qdd3mTAmcMTjxaSLPdYeKxfc9TBc3BPWFh8jymqvDJWGz5",
  "key20": "5BDah87fU3KPKYqj79fLToDEsDqUurFkYji4GiSaNKEQMq7RTyv6d5TBC7txgfHQcaxAgEosBS5QJAmScNJsqbRm",
  "key21": "2dgDUYgra3XfRmBCjhC9fCyAGNMciLB7n3RVpGvbaiRbD9ikjZiL6f6bauNMRekDoAhRPoGMuHDuKoog2fgRM2j7",
  "key22": "Z6KwNQJ1XYo7SrhypBhafNGGhWGeZj4Nbz6pU9QCUSRHWo97gfHFELdPiaCnq6znAfVNa7RDG42nRWRDa51Prt1",
  "key23": "x17WH4d8TSpFJr8uSGYMb68LWksSd79ry1NRmEKLt9D7v5yZiJg3emLG1qhr3J8uYYaHcBBW9B6Si7s6HEEGPS5",
  "key24": "cKEq8oyQssKenohzzw2JgmZJtjLD2V1LXX9bu9egKebU98WWCiB667eo1rzFqaKo6omwx7wddpmRPU9CDT5bhQn",
  "key25": "3SacFfpouh88G63AMxV972X4tXxFPK732KNrRJxq2KzGctddRz9q1bxymgFWrUEmc7x5MeTDZ8oZpf61CfN1WNav",
  "key26": "46DadCEh3AxjoEXCt6iTcK7ydDosiTtVg14ZmmagXwQAiAcqZijCsgmZV2CNTNR7tsjAFpoQNBPzGdhK8WC7BkMQ",
  "key27": "5UowtXLKWjwomsY5v1ntUraBPFskiwyEf7Zwh49ReQY3cAbp46QtpR9da43hmNjcGfQ7sDkm8jiUbwdcLVbQAPTn",
  "key28": "2AGCJzbNFETJjpCkF11MBAAo8Re4zbf3VtF21RwGDRH7qYCgmxDrP7suKf2BzaGyTijZXEENVfV4hAvHHzESB2pE",
  "key29": "4eiy6Qd7ZNgjsqb7uw9RHVP3rJ2KfHhUnUh9hkxMAiXLhoDjEwoLVGrJDpKWG9PmR9cGKG1SGxvGNCg2fCKjwo8Y",
  "key30": "5FL9FknoGdQWdGEwAbVzLeau5JQqHJHQcEgWuG94fhfibdHMf4bBksefqEaiCjU9qopVPF4AkRjMzJaoXqDpzNuP",
  "key31": "5t5QCSBcq3CqXUybYNsniiatZoYmvEZDWGke9Q3SN8jhLtioFeHHnNfkmciJ97UeJuCPtbpWqrdun97sPGkvDrh8",
  "key32": "95bQbLkbCqP25diz4mMjw8HHQ6FSp6gCYyf8zLjVs91v6VtACvjtoLsT2G92pa39VeFotB1HrvDGLhLoSVYVgrR",
  "key33": "29D5ySgaCNGTKe7H63cwmjwnPiFShEZJvCnJRPUAVZ8jaUNYxYkeVqcVVFCpaEjXY8zaNH5HiE8vaNUwSVDjHDDf",
  "key34": "aaJ2i95678iLbKtJJmjdPyrMdpgLcy1hoNRq2Tn5suUCy5UsaBq6me3VYrYKpn6HioTnLWyBCn1o3AUFFPr2xV7",
  "key35": "5FpdysKnq8xQ9EMKNdPLnsjiE2THYtTD6Z1GkU6QwpV1LMmZaxqSYnPLifYw7XHq2xsj1RMZnKatrmK8KL31mUUF",
  "key36": "4kHj5eK1ZWpA5aAt2oMXdu5TR2nj21UWSp18DKZ3f8FSW8eG1RqEcuQBvFxwCwaMUmN8qpVAP6sHANqHxTrpay5V",
  "key37": "27CBvMJmAEBh1kCMSf7vbvGYST22tVCmP86725xoxqzDx576jgu1eZEHvsggE9GyqrtHUk9xrdAVuMxyU5Afqip6",
  "key38": "2XngTtRxEFi5ACG7nhH4cJZ8QAZXnfJoCWWrnASfnCPfoNpuZ2nhXejAmMuRrRu1Q5ikXjb9pgNHeMEsFT1Map5m",
  "key39": "52tdMcGmqmME5ATtuS46T91ngTCmY68v4ECiaCqJChfEqd1o63dKwXPdakQDjdUjzfAx9MfJDWEygyzQ7Dj8Rjsz",
  "key40": "amianaWfXZDAwUZ3WDtJdatEtKHXZdJo6TBWbvd5ymF9xAE7zYdHNGu1up6ZuEtxE1aiGvt4pCjHTPjvKZ61pZm",
  "key41": "5Zsq56tG3n2aXDT9n6WtBcK4mMAvH1Ndh3z4erFQy2erpJbNVojK4CJh3M1oi4ZjPuRSpDfmywAxXL5GEehGBerg",
  "key42": "3noBQMAPq3CD4phKAgmLqxqtncahYuCH85r78AgKJmGzX7kA7PeVkFnRs3gNYx9h2CWhhpwSRHaViJdEX7taFuSb"
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
