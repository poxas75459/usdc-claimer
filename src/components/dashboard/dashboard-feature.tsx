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
    "663naJEaquts3iheazF1kuxDBcVPdQjZpBDKTsQJs4VhLfK6DyFqThMgfsbVzYgsdjuBmFCYHheNHrqgHRC27hxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h9Z5ppejxX59NuLL3LVPwrqZKX8tkB3b1JYXRcSqtHQoytyvuwuWUfk4YbArDp2hXC4w9hegTcJzr7srh64vjhN",
  "key1": "5tHPZdy9hmVozFfRT6pkCUbRhEw27k5hd9kADscnZ5HCU1TUFoTwQeiZnSPjnJhAL4dVu6BNpdcERSqD8yk2XZJf",
  "key2": "5AxZmJAGVq2XZetR97z7KZt8dRfc9Vjxcb45EJ83WaG11p2zHtqe6V7StF2GRqjnToshdymY57HkgS2ubAkK6m4U",
  "key3": "2UJ37EjmWhyDcEu25BKGyisQDNXXE9tTgDFz6vLfbGK3eMceHrn7HUTmxzo9fmPpZ9PMsffwyeciMLfiduPtyuXM",
  "key4": "5Mf83P3vLVYZLePXJ5Ywdbw8kd2AU1cpRRoEkKT4qYGNAEzRnb5zZwZssw2EyFXGNJ4RTffQBA8HkobdXE1FQAbD",
  "key5": "TYaq8d9mFje9FAQzErhKKFYNLdUMacgEjZRswh8ox1Ur84CtT5o5jp6316rsUFUdijQUj9MZAHPHJNV68BdxtZU",
  "key6": "5qHstagcQuCRvSJz3nmuW5GoRLo7wutPZkcmqT42GXZGHdvnXMq3YKbr3nguunW8doDRfjzWRnGkYoT71ig9d3sU",
  "key7": "2XMiHcAZkoheRCuDPgrLtXQCrhdMZbWNRiFcm4K5L9BYdGvRFqPUyazNQ9xd9u9xxGiCYeNMUFKrtQ1mjK3Ca9Br",
  "key8": "dyDY7PUPEnVVkE1MfeW1S5HDJxshpkEuhL8vuGnC4hERFcDjZwwGPSbT6Kzo7Tg13RZtRpD99pNQ1bwkuKSnb9J",
  "key9": "57teWMqwwjYqiRYae8r6awYb9JJWRF56DhL9Z5AX4rZVLHWCTU5eXFFLeNgeJU4hpw4v2yCPZ8uhTmcuEh8PCEJV",
  "key10": "5q3NFTWCdwnuKmw8bG2R7e1TwBG6RzC4jQiqCQiLwHdWo9DNBiEUPs2qejVfCQwnf2W9p3G1wnzahDTk1x629UY7",
  "key11": "3gETZV3Z1ntMi7fYMATzVQpP9poWrK82hQbjiFn4fzjbtVbSHKLn5vuUFnAk9BfE6fcdKTqc4ojWTbY8yDEQCoin",
  "key12": "2SSJtjd8PsVia7TGbtHrsy6bPsX4MWRvaLHi7hXoFttBczxemVvygks2VfNUPLavNeW9aHxECTaZcUjXMGSwGQin",
  "key13": "2AKTjrhoBY1Xxk3p9w4CvvNe7EmYqLFxJmSPgWiA18uySv5otCwKWK3Wm7yKShd9U2MNNh8YQmWoZb3GuxsDbpJj",
  "key14": "2vybALEkxMhKuKSmC6tvHrHQJi8twos5Yanr6VTBs35tjij8mU6WrbBTyyvTT6LTys7pjbhK17TnrFWhsUdRdyg2",
  "key15": "2La72hsbeiR8rwgCFEriXDYQeX7tn1o4y6FUQsz3Q3TswGU7vxTroxnmVRBo87vaDnNqJYngL12Xn7NDa6PuWE8v",
  "key16": "iTkELcDL5pSMQNjZXDZETFhvB1iMPep63K7J7skc6VEzCUu9pXVqJneSNRpDWjZqbJDkb91Zu6okMb2QAyFWKky",
  "key17": "4MtUfXt4FWyTuHHR656cwCfCbT17xdqxmEiKNwiWn6ovnd2PFSa737KirqE4sVBvdvEhFFZQJwUeMyy3Js7FzyJE",
  "key18": "3Bvc9jjghEnzPvSjB144AaszZrwX45icv39auywuopv948Rqajyqmjs8DNkinfCCu7tyWRYGWqDCY7yYSCxFATAM",
  "key19": "4GkfPxoV4FzCcMiJ7vMKyWnwGzTUa6eCmDyuhP9amrJJ3PFjgRE742hk8nibKzRkpkia1GJYyersrm2EVj7RbWi4",
  "key20": "5ECvihk6mibA3Lcsm3fTUE7coN6f49cW5g1pgAFUFZ1EB8rDeAML3Pp6tEKtdTo7vYJ8uVZmafuqVK368Gfc9Dcm",
  "key21": "gn7EKKxDUFm4TS2WZnS6MvGwcV5bXNLPBkqdCgbM5NXfvWDDqAmvRXS1LovLnhs5ThGGSvAn8qHd3wfN63P32S9",
  "key22": "5C7X8Nz4obVcu4M8CiduGf6Fn6YQtCPVMt1gq5nFsFmBhfAKHFGB9VfyKF35SbwdDC6A4bSjc7RjH6hWFU2yJZQR",
  "key23": "2hTy97SgedRgpg4dWKTgbGSr7BmBtmfna2KBUJCR9cAAUnWnXsASZacwvJvmzGK8hp7Um3uGBdufcViNQ7942WwK",
  "key24": "31XiqWJ984axS3PJnFLfiTaCJV8ARKUZexUBcwaVJukjztqG8keEjxXzcmaRh1XGaGAFHKtxP9b7EvkmRNAV1Uf6",
  "key25": "2rSCTMZGAH6eZopDHahu9EBP88oFCA99PkgdMhQ87pFoBpmBrirrWAVJDnTT2U5f6k6qyUHSbC5cPqXrKsB9THvo",
  "key26": "49RtRACUpJsstEj5zS9oPqyKo35WuBSiCfG441GALg5Tyy4eM6rC9KKRHHJ5qd9Ez3njfoHxz4tBa63qh1XDjzB4",
  "key27": "29T9EkGUfB35m6jeGooxXmkQPkF42pbehqUW3CwCFZ1ybJiEmkTE7QzTAXnS2Wu4nnwaQHstYXJpMiWL6Z55aw3a",
  "key28": "2ULu33TJ4EfH6QGN5WXwmgqmvGompjL2HUaBdPaQr2cwkzj3mmmqcKzq9ew3srPhJhwX7qi5SpYA4ZNDPXM8VkSL",
  "key29": "2rZfjAwCazysELC52SV5Rjc9vkZZx7AppU7H9FAzgr5Fg2V9DEZk73u8ZScR9NB8PKjsMgGRwbf41Hh18Nu4LMio",
  "key30": "4nm6fM5fw776GVPieuV7sr2Afifx7Y9ye8yWL2vAVPHtEbfx5spfYoA9EeUNrfbf1poBJ8wCyQdgi4tgKb19j5bn",
  "key31": "kyjcLZppBS9VbV8wzAD1RbQDkyStfYTpqe2J88kVivyQ2622Zc4FkadNtT5QKqJekK1YxC8zMk4AwNNSzJRchSn",
  "key32": "2eEBuiZ7TXknW568J8ebULCo5mcPwTGCa3dg4X2GaEKWNEmTgnGMJrZhNcdBBmmQ343gDd8FwQMETszmGMcf4Y5R",
  "key33": "5qPbWrsGbskyZKAfREPJaDcTSHobeVogUyq7DYEaZXgVrKJ4Kkp3CFATPPc4WScbh5a9darJKZj5DjwyeekkLtce",
  "key34": "468FGEpJh2GV4RFtTJ46xUBCT6uAD12MRsbgdDsddxJqQ7KRwnLiqBqhSQPuy8agGuuEUmUZWn7UFwFSbdu8jxox",
  "key35": "GCobHYHNaLrbrcFKJs89kxVXwxFw5irxj9GA6A52A2cBmVXLKEjJsT44DkK6zGaZXghvw4oQPEFhVaTNagvwcQn",
  "key36": "5z1Zj7YKxz58vr96o9agJ2HrGqiKFQXXy7C2FVk9N18YwotUMKqkRjycRZtnA4HVMcWWvmFH3UJPjzBnCN2GJALp",
  "key37": "2keFgoPwvP3rDZ9wNTbMebJbYTuf5mn6WCuFgg3aDqiTi8wy2rm2saxQ7MZBWizgCBcbAHVE4zpfoc7y7LEEeHeR",
  "key38": "2DH49vFoqqb42hBYg1zwRYobsyeukv4zbky9VYoFDPB4ep2wY6A7uKvzxkTEr6bpAw5YM8pU4LzC1XzcnWqozCy1",
  "key39": "29riHb7cU7bArWrPQsyeJHtgTivrwLdzyqzwLaxPpP4LKzVRCydSLvig2oDxaNnPutg1dsc28MD5jXhZXSL6pYjV",
  "key40": "2qZZoHaEepYNXLkmFHvFNdN8Fk5L2kzc9ssAtSkcsXJT1uf1RUtfjNo27GVRPez2AoNsXSq7vnSCHuzQfKJ8efPW",
  "key41": "3ja4sGKEoEzMV3sdewcZ9pebDtc7Dy1BqUL9fj3eGkbXCukuEc64B8WpHoTyTaXXYuXWCPpHvfFRrzmwsZHFoxKU"
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
