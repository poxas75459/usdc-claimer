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
    "vnGvJZ3VACCNqZZL6rdwXmJKBXr6SJRrVfqVTvvYTcVzfmcjKL5jR8pmS3MnFb3yUriJGDA4t6NmViUtrYSSrZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x58fFnfnjvQubDZxS8xiWaFZZn6L1boMNuUp3r219zF7Q5PsgTABKmnuqCkLGF1SFmLUu7NwxaTL3EYBzPQaiiR",
  "key1": "E4v11gCLtx73NJ6p22xnGjNpbE4VUfGfSsX3EoLu1aD16fned5MDSsZBh3Ey31g7X1twogq2e4wMM6D3Spm9d7q",
  "key2": "3dp9QR5L7vBWAqP6SkrR3p6eR9nqyVqxC1ZZTxsj2rB7YiYKPYKLB8CipBr3nT7mhzM3PehEpNWRDA2Wuo6jxTia",
  "key3": "3a93eWW3AQQ5sMQaphGVdE413LMMggK29hMazJbihwzvx2HQPtmJfZ8NM7VPsqgZgt6VBUmQxoSQU4bJRXZTmQYV",
  "key4": "Azk4CET5v3R5LJBuPyEVCari16xbResJ3NvvL2Z54BsfhS916PTBxD5fbQ3ZtnkLFpVHYzprGuXVf57CGfkk6m1",
  "key5": "4YQ8nZTzRjfm3KLBKjJBW2RHu1TTwdM2CYKyUkZzdtaZeCnvsBPEW8wt1A8EtdcMBqRniXhRuRKr9hGLkJrSqijY",
  "key6": "ZQ42h2rBCidGEotXG25yUEUy37LY7koc4qTyirqon9Bq5c2BfKeJeCowdfRbYzrmmYcmtiozn94nL3RaRpCLiVm",
  "key7": "3ip5VDPoRsstSbguYe8WyZZcQ7dLQkLfZcmbWzweTERke1M361cerezyX5M5PgpSCamp8n3eWqckVDF6gnTLDmbo",
  "key8": "244UosPBSbB3cL1ae6f9R9ob8V8JmVLyeNdxwyKJeFXPzJxgYu6HjVvqPsFNE8d5GQ6YnSSmaMu9Uo3aiBiwfUSt",
  "key9": "3qtf6vTaEaP9G5bq5HnD52yeHkb8XN8GJV6ErNQZCbRDRu1ENojsDVxsbqDJEo9SV58jGUjceqQTcbqkCA6WF5mJ",
  "key10": "54F5bqLToQaJyMK6ad1Gpzt21eJrsdMWbzeonmrHkAtpCq9oEtHgwoXFiTfisDpRjiUR436q3iowpB9S9HR8WKvJ",
  "key11": "21dzs4rhwUhhk3dPYxNtuExzkhKLZv94TctgbJ1BqFn6NNeN69bM5Ls9GYFuFPNmUgY1sp3cbmPEwocZmHQ7tazc",
  "key12": "9Zzg9zARUHKrecAQQoxxiuShh3kwMeVkHspcudkwcpi8juYahV6rxJFp6uqaSFdDwkp5uYwyfPerR7E4iMKYV3M",
  "key13": "KPZYL8FHazzkKmephGrtkdQYnWqYCsnnSrtNgRP5o7ZUYR6V24xARZw7oH8B99FSkqny7tix7QJ7mg9nudwzNBB",
  "key14": "31yoJifWbysugEs5HqioyYYvM9jX6sRR6uSrDTXKa8wZyYpx2y8hcVghAiM97ocWyGz2zbpPbgz15eWSeMNxZV7i",
  "key15": "4zwTHiBVRp1HsFn4aU2MoZrAiZG5RL1HkVEbvMYxv6P6TYsVvn6YfSi3HzwVJidZuQVunhxWjm8XL3aCibpKNX5N",
  "key16": "4kF7aqYQ7vHWWVkr6FHyfJi2nmkSEEF4YH1SALB3mcuPeyR8CdWNLbKfJafgu54cmkaj2zYi3RchzH6yefkHA6Ce",
  "key17": "45Ngjwf1oA2RvR8e7do1SCwh7jaGEvqAfxudS8fCVCUhtdzkwNaWmAjvn2KsnFYjQkcFUewfxtgCYZT8boZzqRRd",
  "key18": "4t61sNHimrDmNqChKaPd6cFY9XqhNwoTrcXxW6nYjevjBBaozoYjB69VpaqwQCGxL2S2HPi4W3KU8xbXDQYJ7hQ4",
  "key19": "4Hy6rS2u3AB96dtstYp4yKyuiPw2MFS8uSHtMyTSrACKCCbWMScvief6MLwrC4AkUUJ9MBd9fioPSpQvztw7dNA2",
  "key20": "5DCYfVPeTtfTv73KCegLHQaQ43rPDxga7FCsGjZQ1TkgsPQGbxWRPsQU5Xr44BDFFTM1aYwn1o9mn51ZMPSUXjfi",
  "key21": "4YeM3mdrWKa12UA9sMhEtnLp5z6T7AXTPhNTi1g44j8pb7iXSvcsn7Mk15ufNnTBPizwJ9WQTuNcCV88GiYnR12s",
  "key22": "24VvA1tvUi6beDKFsgWvBPXZGjQokBQrpWcJBL6iZhanp9ZJT5R1QNqV38hRbhx5qRFwPqUAmEtr8cAwasHMway8",
  "key23": "3iJjrEF7naJWjMpqBqrca3GrJLYHVBgH7yd2CJsnJ7psQ9VQFg55SLVdYtGoms9gH4KSuyqcvXhsjnx33T9jniLv",
  "key24": "3A59Ahsf3bLhVvJCiX8zDvi45sekRQYfNV9Tw56XrGRcged2oBEuLbgMZbWE5HaZ3BJ7XDLbrkMKeqo2t4sBVWLF",
  "key25": "3YUJP17wkDCm3ck8nb3f47UYUKUAMtjNXr3spmgRk2dVdJwW83ivA9pxEP1QrtAEW7Ui1an1q4SXRCtw3ti7QtWW",
  "key26": "5kcAhsCV74EUDN3CJDRnKJ4z3AyVygpQhAc6kNejCgdE1eXYn47mKsaJ6Q2khksQBprKsLaf4BuKSGnPxpzAcQzi",
  "key27": "3nF76X3aZGNeDzWLQdX6FkQknZwBA394Du5oaAe1J6ziL4AbJxvnu3AHDPET8ZBPPWXCgDDBsu7uNjwdcYqz4f6S",
  "key28": "25mvLSZK7RDXsRrAy9eh7uxZ6zGj3zjQTm9huS8gwAMUv6u33yZKagRwpUid8x9N5e7EMqCvvQAt922knvn2nLXu",
  "key29": "wv2WVhRVE1TKXE3i2R5EgNVrZwKyEQqoEerS8wgjxGSzut4jEvmEHaw1nrT3WDtF2bNxpSxJKPT5yHA5H8xJrzK",
  "key30": "3R1yX4tse1cdgPbWDZSukvRLbMWLQEcwP54GwJwR25VYCSoLE8fVUcTHAfFk1BajGhiNR752Hdeiw4R3QVNC3dqq",
  "key31": "pvpXL1MgnB2Nb36QuZ2WxLw4Tnz8YUHid54RPwfAp93qyccWXyYoX8LDX1HBEPkAGhVYY7LUkEHuJRU67iNrm78",
  "key32": "2XnRk6CcQswVUPtYVd7iSekSvXBnSNXMtyxFdbpcVHjiDLWFsihkqAdEPGSahxshrURgquPB5Vn2yQEEG1BKhJ8Z",
  "key33": "XcZ2o4Mvi93DtK2hpsinn4vv6H3gVNMTBoFh3C4frphzvdi3dG8xtjEoEhv9cP8dxDyR2FepKXCopvEBiHAA3BL"
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
