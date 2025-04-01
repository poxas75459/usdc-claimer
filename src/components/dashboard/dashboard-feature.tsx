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
    "DKpom1cttWrknaJxqZVY7u2iYg1hwp11KtQKL7bcd7TKAhsiSGYMdgG4vGCJ7rwFP6YiAvSAGqjnQJbt8MAYyUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AunQbeUbYQTYzH9XonQsnGPV9mPg1EaAAfGHEHhaTtRnuW3tZg62rHsv1Bt7dAa2Sc4icfDN2jR2a6e6xjqhTie",
  "key1": "2kHGqVH8PBZzVUCmCUoEXDDDiQMtC8v7ahvcuJPpevmBXdYdp9uBNmEBkz2iSwW9UoUcUnDVLkwsWjnkCUnM38X1",
  "key2": "3xR6arXiw5JX3PvYg4j8MyCK6ZfNwnHNUpjZvpB7DQKQmHSatjfmjWaLR7wX2ac9EhC2rUPPiaUKPG1bQg8uziZ9",
  "key3": "5Ax2HggjyvRTesVmprRMbNUNpAyR9hWBefCYQWQX3Gi7vR2mjfpKNx16ZRgfRdsgHMvT4kPsgmXZUYM74wGfaBc1",
  "key4": "21e5NWEK4sLac8amzwbYLUvSwBsST7U8hnQ2HE3EgVkmF5QFGoJ5XJ4ahFXDQ8cSW4vVB9h3ZpeDyz4uQsuMbT3x",
  "key5": "5MCRRMUKzgCrxUKqfq1EcqZq52a2gwzit1uAAqCu4eMWLwpmVLNLPLZQSf2SVvsximon9W3Kdi8y3Q1sskiFj56e",
  "key6": "Y675Lh6qLhuYR7NFvwVGeSKbDFWKPHJXyYXctHccwuENqJBYeavge33x2STfxqWjwrAK4ScDBu7HHPZn65Nt469",
  "key7": "67NQEgAPmEwmLbWpamTbn5vvGQemsSTVQsM5GxKfUSWBkFJ4LKSJHkk6VW9sJnKSkmsQgVTzrgYraQXjsY3ryc2M",
  "key8": "5NcmtBivAemyVynmB8aoYN5gy35iUY32pEHGSG3m1ozwGGoegUjp3p4ppxyMCQ9YrbrE12rUvY7N1RhS578pWorC",
  "key9": "CNuBRJ4VUEcdsDez3FAZM2NQW9x28DwB3o6SiynHisTdJEqeP6H3uGg19K9tVaYaxQh9Lu3FjzN9U27QpKYocXU",
  "key10": "jxsqpU3m8Mx1ALdNvpY3KixeZieaSnD1RD6sgumncPA5jvMFo73CVhbyHjjL1Etqc4W1fE9R5Rqi2Xgz1qCyYaA",
  "key11": "4dEo8uEURKpVzJ7rUUmkco2uG92vicFapjgsA8JqJweuU13v4mXx629Ht3KmTR7QujNMc4N54b4iH87RKih3yQD7",
  "key12": "Y8Bx2WLhHb7VuBXgTNqDPUH1f54Scw8Bwmvti1BzWjDVdCB9Kymo2BbXa4z6x6WncSfjdYLB1mJQrKBseqpbzBQ",
  "key13": "5D8bWFjh36UsJCdvkjsrzUSzt4NDJZSk3d1yDUSEepR8PDKM5mXUffhGLte64tXKz1jgaAXg6EyNvcgxHp6S1rbD",
  "key14": "2f5LV2bwXCJbsWLop1pMUh4sgfBT5D1Efgtwa42LhnkX3Q6iiq3FKHCgcKm8erNyMk6nKW2FuUDQKYEKmTd85YYS",
  "key15": "286TcVUVCVeiq4NeeQiDV4Cp6BKnkgLEybQQ7j3MDHvv8eXMwgP9NrzWne2FubZBJFRH7Sqi9wKb4f8QNYG5QepL",
  "key16": "663hBuQ2VNWEE8dJb6GDJE6EM7wRo8qg1GMBx8HMuRtC4Zx3DTdJtrPW3a2vaRXRDw9jkcPwmRMVdM17eashuhP5",
  "key17": "5mR9uQSJAz5kqXsCTsVhKDmXRdewK4z99pq4B1GiB9sANfi16Hvrmdrimty4sscyn5vBS8fNe4qdhABL99CRyqcR",
  "key18": "iouSNZLFgwZcqc2VFHMDe7zvNm9g3MfpgcwL9GHcMppHrHjZbkLf2NP7EjVD7ewquzpFH4uCRpX4xtyF8awNzck",
  "key19": "4K4zUr4odogNrf6giRWx5pxgLk292FMaJQYHe5fCbhBQoMhCb11WxJfxVKj6JDN2L2WihA2QYYkkoQiPkXFXNTEJ",
  "key20": "3wCjF7v2926YkHJa2Ef1c1RN7J7jq2j57pepg8bCwv6dN1ttzG5YsTJMf3uKCa33WNK7W6ZzjLuC3WCYxUh7wJm6",
  "key21": "5t6fM8nZkycz9v9aYhAAPA7LhATAcPvHqDYxkM2KAUjoSE5M9S6tqETN6uRNmFh7AEHoUEQhZRQ2TCPi4KZL9vNy",
  "key22": "3UfoMQ3DaDB1bkzuYdbHHTBLfPRdmkm55d2Vd7Zb7yrKoA3yXYV1bvXdb87MdV9oTQycLJcxZrrUXQffedtc3r64",
  "key23": "5tcVW9gfTmEmEV3nNUBXbwksnN7U58SzJ1rPpaRnmrgcFaLUxC34ApFq6DWyY3VecRd47LPJqoQKxbqL2LkVjejf",
  "key24": "3vBzDMobWycETP1VSPZtX9NAE9KFzCmaDBifjEXoubcoeEYLxQ15zZQrtzBojHhQRgmUoTgdf5mfkzpv4MSXWJco",
  "key25": "54pMqsVdu1op66fxABhPoBo71n4cBiWygisk3RCpMzbPUmZcSPkNDiJ6PnU6K8M1h9H48aKt5JBcr5nykiwYwhNK",
  "key26": "42ao4hFKPYhp9m1VehrjUnMXgJTFoiMXDLhAew1NdVDZoJJvMHHAiYfQnAvShPMyFKgKRA2j6kV93aM2XSBxQV5Y",
  "key27": "62h2G4nijYS4jZYm1hhMrqggb4ZFMADZqo1viRnDnE4SBo6YuzL6QgxzMQAXF3zBGdvC9FTBXVmXsyiLKQkjsmBp",
  "key28": "5svhDWab6jpu6uJahMKu8aNHA6bsuvTBbEzDypm3q5DdZm35xR8CsDv67jnozBHQKwFFhW2X81vpBFAKGAiLFmt6",
  "key29": "PriJ5poC5kmYNFujjbRDwdytw9xmK2MypXn76v43smL8v3nhub3JHm2CkrQxjFqwaR3RbKHwxcqmq8nVHgzyN1M",
  "key30": "2swD3YTXhURyXW5MvSeNx3LtkpkZVvhzNP373xmBsspGLwfTDASLrEryXRbmhBzX3ueqWnnttJmLn2929FGExuj",
  "key31": "4xxtZ9u2LahMcLfor8TS6AqdgX8rhH21cdmm1yTkkizYziGCCzPBTrdjkrVAxD4dZmJ9EoZa4GUrabQP7Tphe56T",
  "key32": "4xMtaiG4NVPNpfikmwTryitBccLSLTsHUR63X5mvK5nKXKXdJLmcPQRUhvrfCLj4t3bnfAA3QJjMGsRVKpDFuh1Z",
  "key33": "ag22BbxFeaDcwLANbCrrM7KP9YQvi9LDbKxFrcnSd67peWqQ2B6v9YsreR4RNxqQPscfAgRWx3CRvfw618fUCmU",
  "key34": "21g1aaUFX2JErsFFSENLLEZFbXDutzdnGe33j8JsnzZqaBPsqLcoL3Pt9KTLLeqjLLTXJRdCs4otq8bHztvUPpot",
  "key35": "m4nqCmeY86rgYCydnQfCTs7vzv694wSZFWbiWYQdGy8P5guaSgiTFNU5M6pmWPwoSZKcSbnA5L36gwAtH436nts",
  "key36": "38iuptuu4DuhJxwpQ1mnoyRU6ETfoiBvyKYSe65wpSfY9ksUk92rtqCQftUetAwkNZZETK6QzQbRfrMKAQeJZQL1"
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
