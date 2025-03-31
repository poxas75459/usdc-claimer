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
    "N8cV4Nw1daNFMuULAS8Wu9L9nZwgdYBCoWGeXAweunLYgX6QEJXdZqbZBqaCNFnGoxBSq2Qrs7b2uWaH63ycAVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YWTqtqE4DVM18VL1vm9gRJ2VhAPaVZcQKiKodwVNrZ9YXCs66Da1uCmz5hwtvCJ4BbxmMFLMr58wxucZEDAYwJs",
  "key1": "nrEi3VHRHjsaGkUT6R48cNFB7T9oacJhWba23JcRQD7SfDvWMLY45suiUXGKhJeEo2XZpxPqc4tJyM6zetKGRor",
  "key2": "514ruLbkomevmUmBXH5b7Zhd8tPnFh4rnSLjsgV8DoBoxqFfDq44vuLWHFMFMQaqX8RKt6Bkwei6geQyn2Yd8ao",
  "key3": "3Tbb7jv9QrARXu9nBHHXvAUZeocDuTXmCMKSaTxqVAZhPvoRsz7uE5tp5tr8QeXEPPcoCbhM4sZ8iTkitFJJ8ekL",
  "key4": "4pk36noHNkjVh3ouUyLy8HMgo18hPUs2XL4uWUz3PGq8EDKPyyNxCaN2LTZpYsfmYnFhzEp1VkGcZpzKbogibosM",
  "key5": "24DwBnx6hZTpytVTfW3DP4hnsGWcNHMEsNDrpgQJ7qJVeg25pcEL6HKV7ovZGQfJQtjRMFFkfq8dyTGHVSNNhrRz",
  "key6": "4C83svoS4qamNTAjyhVh47sURHwP6uv8WCZVLbCn46wsrHPZaFDTTUFsaK3AwDAX9UwWCJmpcrR3yoXaHojrrqvu",
  "key7": "33k7fZPrt6m8XSwookNnbFsEGvZmmozmNo7wfkQzgKyM9cLfYsZgu4TcF8GSKRfscMfoTzEjSu5ES8EGd16amaXH",
  "key8": "63EL6vyvt811odT4ZwSFFh6noLdJU1ffkKLjF7bi7q91wca9vsKro59oBCwnxtJX7UnfRSqyzhBK9HZ5AC7Dy3cW",
  "key9": "5VN3y3iDYykFxF1w8mQXQRSHgAbwkxMuypD8uq8XcxWzWRwC73FSmQKTJrhF9cEAAa1xEBsU6jyXUPVUjNHhNdki",
  "key10": "41Hw58czsSBRvRrkj2xMpynRVcfWvRYKwJ3dYGofxSc1orLgPemr2W8moJrZ6c9YohthYeD8x6P4DPVUSQXPrF2x",
  "key11": "4co2iCcBBQiQHXU9GZ1USHkLBbHA52gXiJep3WQAZxFc7aySddBQyyoC1wCmN6wXDW1YyPJqXbd9auGwW8x4hsBb",
  "key12": "5HfCFuAJqy2X9b4CdJjp5iFhfcw1cYXJqQsmHy9bRhVikkQ6Bjh1dpkTR3h5F5KX52NzcyJeJKk3d9jCuoVAoDz3",
  "key13": "3DxnZ4R3eLAsMhpS6y87NsZQUCbE8YZrYG1JACy9cuXRj7Q78tRVRCb6QkMc6tc5cSCH1drc2AiJRczXd3DeNa1p",
  "key14": "4yQtLfKPFAWYY2wRyFQgoqHvmuRP4EqzjYDrGRnJq5N4R3VJ1VFWiUM6oGgB5o2ewkZqtP8eiTkXDkVHvcNEuroF",
  "key15": "4rWfXe96qefQooqq32ynxoj8QRmF4VoeDU4Bk1cmQeAPX9GNs3z82VEa3AcGJTXZVsg4o5qqRn6Xw1B7f3m9qngv",
  "key16": "vsaGSAgdNEHprn6ZkNjhsfnqA8xT8wfTExiH2D2zCY7mTPTueTjqrERrVR1hnpN3kygwJRKMq4fFjSR6wAa4CQx",
  "key17": "26fHYXGW2NymQCkCyHKzFkVf7KjEMBniWT9LLy5Lj6tKyFNMmjr4NDAqmS63bWGcEC7jvM22mC4sDFLLY9ne4LyQ",
  "key18": "NxDg7E8K2bmJoo8QPfvtieN4mZWGfvsGxvGpVuvmTWimRzAkgKQMwY8rPXDF2U3x6y565SCb7TfD6zuvZDyg6Aj",
  "key19": "5FxmoyaMZdJfzULDSPjhhtizwr48mtWsSEnyGCBRTpKDWZU5iLyti7J3zhFhBuXXSRRTTA6aPaCDfXEeMST84Mpg",
  "key20": "2wwtnUUDRGPGkERWgARzGBGusWPS1zYaYMtWinSeMWRBquNHhX9K32w6XQnGeuDQqA29DPjn4LV7N77k4Yafthnu",
  "key21": "61QgQPCKvAyecJmyDuDRuNgLqMVv3onm2fpMoiZ1fCZDdrnAtvRRLHCuWN2JC7WVYrMWNLCNBGtTHskMcpzHZu3z",
  "key22": "3zvnnN1o2E9xuGiCJATBfPGAgGfrcpDgHfK9AXqpFa8jjZVH28gazDeR3Wpw59wKBzUphGfJvbUSqKccQNeRTgcY",
  "key23": "4A8i8ZMcs31iTqPYScNdMVV69KjxPMgKyCitqsGT9iBPMratR2UCCQVccSph7d6tFgy5DdWkLi4XpeQ2G4CMEizn",
  "key24": "5B7X3fGkAr4t6Gh8bBxXv1TfWvvCd3Ao9UzSE7jxzBoM9xpckaF8eETwdc4ghPw7pxqA3A4acedqNrngujvmYM3d",
  "key25": "4yGotmD3CpFvH2mkr3Ky33w3Beccrbcx8xJfypZvNPGR5sXfgy77ZEg4BaahuzxG4NbBDSUrDdXAdYfJzrWrbuys",
  "key26": "5hou1DGmH5crVzfefAWuX6CEd3q1UBrPttBhJ6RRqBKbJctf2rWXYK6sm5R269soroLPNMmzPcnYu6nVtxVtGGLN",
  "key27": "4sUjRYdZBVYuUuEx2RabYyqgSjYaWJvcqheAyG9ht6wwfNJ8TEhQ6JRHnQtUrwkP8msQ5VZkrwPpB7xjFL9JxvVs",
  "key28": "3H39ueqgBkdsP2b5NiFuQUUNjqkNL7eCyp2Luof784UP43ByEjZrQoJPvsteG8jtHdR9jX7Ft3incY9fgyZyVFoB",
  "key29": "4yrjQnE5n1or8ME1DZgxPRBmAQqYwueHtDkzBBYDdKFuCXNu58EsKf9jLEoB5nHS62Myy1rRduwmKhgzcYDhtjy8",
  "key30": "63RpgZbK8xXwvdF7yhYkZpcP16YGSHAUfveCgpbP7dkKEXZ3Zr3yAWudNWamqhVV3x4KvbNVQNFvjwcHMGuRVmA3",
  "key31": "5djmozZYJ9rz9YDpfNrFfp1nafRXbtNBABo8obaNY75j7ab5cGMSzW5GGqvZHmg17mefHemECpMvCHuxQpa2MS6s",
  "key32": "55Rtn38tr6w9dcXYw5kwhcJ83toxdM3mxweHq3LrenVMSxSRnpAfUyjMkASsNksvQMR8dBbwW7SV3mf1sXQs54ZG",
  "key33": "2q1HxVA9efGLXHCjZvTwQKV7YxnZwZEAx88tLzfuGPUAw1BiaYmvWebS8jRuxKqK43k8K9PfkM6KMgE4uQ82ocMT"
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
