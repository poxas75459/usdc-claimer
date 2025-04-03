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
    "3b8PmqqQYAEC7aYJESTpXCnAEWPNQEZXsYqwTaF551vuQarRbhpfpyymBhXknMzf2rhygszBn2sttRF6Ygfrqr5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21hAWsuHxJw9fv64ZJ5PssDqbN7egMFUVfNARpKGgqc4My5TuK1Xw9iVYMVpJUeYbeK5cXWE7oEgA4XbaurYAvT7",
  "key1": "5pjRx97kG9M4RNNeRmS37SVK1aTBhdBeu9mmr18e4TSp4xpkitSNPwq1MFLvjmECXE4ThZKHV1n7SXHyGGnV45Nk",
  "key2": "5qEyr1YMZimQenPMKLAnte9LKz9upaWfyufWupP2AB55bFccpXctqx5zWTqZsLxfNTYXhR5pTCm5DPxG438Ewfuv",
  "key3": "3iWtKACwMUKTJ6Dsk9JXe2oCQqyegXwyqtuLtjKAugVkmFwBfixEwsDZi7xBSfLmkvo3fNKyNDSdXr1vMe3aa6TE",
  "key4": "2MkW2iRBdmy4o9bgr7wKo6cWC4bhzkmUFjTMcRQvszkqcDpiToJy844JV9FrDQUQ3SPqqHwMJW6rGQLnimCHth93",
  "key5": "3LkjFaibyEddVWsKtRNaXAeySXJ3iUZm2ijSfSmZYWdaEhzWiY74AmWAxQZ8uk1xzXWPBDqUxDB6oU8Z9iFpNbbH",
  "key6": "5EmJmuLWHcM3T6TUXGcU9rjuThngnBtWtM19bsqjnNtVZqo87vrJiKkMbUJnryz4SmWXr73jV6KtDcEPSYnh7D4J",
  "key7": "3idts8AYZiCmMiWNkzQMYvRBWyCkZjYfCMj5HW1tdsEAAPJ3CjRdqEGoTXapRo3wdbzhqjMGg6gap2BmgsAAhhkT",
  "key8": "3MPgu4Kz4vKPhpGycbzxohvzWfJjUWEPn86UMYUHrqyqmca5Vvk1DcLJvaYYmoQrpCAEjmGvLdzQm2ZzSLxQEbGG",
  "key9": "EHvBz2FcUqT1eMH2qSouSgR8ezriY29p2xnbQ6CJWRZNjBH1YUN3TDXy4dxeBkTvh3TWtkEdPEvU9S3Eub3RnjJ",
  "key10": "3gi4LAdusNLoUqsaEMNUiq2sgqdgtdDUhEqa1wFjutRntZxXoJT5DVVDY5RCvWc47m7cm67iGdkY34qSPxoXdZKp",
  "key11": "qZy4h58nQzNW1BzcYDaxre5h9GfbV2Cj1thUznrbwt46FwV85z7pfKo41WRuBeyJL2Tf2RAHkGMaM9Yu6tXqwze",
  "key12": "5dPTSELdTJnGDVCVtLC8cza69E12cvbJwFJn7ZfhomHUrubEA2Nu9knayQsUawMJ7sHLZm9cG4Mm6ZdTcWvXWbiz",
  "key13": "4qtaq31nNgyekGz4HD13roo9hzaD4LnfoFZUChM5Vh33w8p7vN3YhPT9sjobYnvXZnHvLhBi14kd39auoDLJLP1a",
  "key14": "4s4fzX6SrooQttsiSzhrUJqdiJ2YNMongS4bGbi6obQQmarymP7oaWfbDcHsmRc1JqpuqeCofCyV6ZEsB4fp5Tke",
  "key15": "2xDdYF5AZcASo63EZFM6wv8UCP29tSXpmQWUaHut9BSiVJv2aUjdmZHVaqnzZ3uc7B5eJ1JaEGwg3ixgve7AkYAG",
  "key16": "39sktFv8ne4LCJZcxtCEouUu4eE1C6WCQmgzt7sBgtPtmwVDwmXDbKBWVKdMEYp3EKxGCkyPGy4npuZzscYs4X1A",
  "key17": "2HR7BwqAHPgeHJKxyHqJ8DUUk5u694p87Cv7Q7Ka2LDedSA5JW5oZxs53C1ypXoDvPXWpF5XypaW7UfD2mUgBTUV",
  "key18": "3vzfioKXtXPUiZLXsFUXCs6eJKBru2fSG67FsrjxWCy7Fz7q3bKSyTVimqWAqBJNMeXgwH3Lzfwg7bFEJPhNPGUQ",
  "key19": "22MRaLKgjniHxVjsrTmt4Srkwt6H2kahNLbAAGjTPLFYmjAb43pyZKLniG41GfqkUkPUtYn6wT9ikRxbUtgaSzZA",
  "key20": "WZfp1DpRRFn2obPmKDonpGwxDAbbsDh2A9A4pb7t5BvS6yxRPmkcQJH1zE6cZdM4UPNAH1Uwnns2fJCaGLUT9jV",
  "key21": "2ENT1UUYVBWHFeoT8meb9zDsJBHJg9xCKL8MCtrGwRiSWmYG9Y5G5QHKbiuD21hRxZn1PxhbKW5hJs3ufXuT2jbH",
  "key22": "4iXtdNZqxENNkKVUkwgrdbgi6N3vx78SnnUgSgnW5pVMVdjf9tmVHYYxt1K8jyyDn25s92e2LEJ35kayGaUgvbAe",
  "key23": "51FwxWVqapKvM2q8PVvXuGt6WNXpiRi8VQYLYBWgRgZ1f2CAYXLUEX13qAYW62XyEPWJg26MQq9z5QAk9yH9dg8q",
  "key24": "26ZVja7ssciS5HF4Q2R2FF5q4erWj7ifo4yW9r2zpfHpqvAeiaqx35kCsdxaY2nBM1Xy6TUh4kUAS6AzbKW4FiPW",
  "key25": "4DqKoHgDsGfEEqcaYkfWjo1kYxM4bQKhSaA4qsj5n9HoB82xeaULWa48K4XGyUPQzvrEGPYjz9h9RU9STQmJz51g",
  "key26": "5ofHh1VUDcvyLwY3624uS7722urEZYM2HX7GQmPpEgXFWWgwDAtLEodjVZHaFYBUSWo1yC85eP95yHFLzz4JM6JF",
  "key27": "43N4X1oC9angc9RwHCcwZcegAFZxCedxokC7LPMyR2CnpM547UE1w23FAHy19pWC6QCpG8xJhuP9TGf8TTC8MaTK",
  "key28": "3XaRR9m3P3qExVJ9yB6ua2eQvmXHgXSFZhz1FWysNqnDMyxFwKXYA9mvm7JDp6nMyEg8hFhYKpqH1f25wSMtGH9D",
  "key29": "49Wz8MniKvj7656dDdQzCX1bpet89cZP3PxfXDDo3HL59kF8MVsi6QiMR5EorpPsxdv9y23yCbqT4EHGtf5VgFpN",
  "key30": "4cBbnvQYJ1mDdwZt7g9EhTc1KaGVF5UW5yQRGJDK8VbJDXnN1HLVZ2u7ktLmN5PddB5akxAaJDGtXe22J3qgCqax",
  "key31": "5WmVQKTT4AFNszHhZQDN7Ugx7USKQLhd7tFSm9NUgWFysL1gEfjdwqmkAj4g1BnNjoS4ctVYNnvpn8WzEkBUzmrq",
  "key32": "vgFYgBW7j5tZuxL2wuGC8mZ6ANdyN3MEx2jD8MqYqiFRRSXBMEyx1EdULogEJumnGBMF67kg9koqsy2AfVG1nQQ",
  "key33": "3ZAnQAa7V2ZSBrXFsLGYZwdgzd55XoELBczUkx7iToTkYXQQgeP9qEqyMvSDEhwxXMZZWhZqoVJ1gaKMFnUWNZNt",
  "key34": "5ogu2G6JcoxiVLV4NGY4rVurV8z7G7WRZrCUeZr4BjJvh6NiWTiSHoKVPUvnDcMm62dek4ioN5B7VawDr4twCBd6",
  "key35": "4x8bPjqq1XAhHnbW1bfKnwcnS21SvnQtznw7H49q5Y9pxMTDeDrcj9uVd4RZ7BLjbws5gyfc7AZ4ngkeG8JRqKuw",
  "key36": "otxfYcfM7Nb1QLuSebaGQwawsNryEEdK6gW7jhoPtsQZJP9qhDNUxd7msdBvzRfB6unE31vNPSLhQmrcrVNHYfF",
  "key37": "4vUJdFJY5urBN7RNHU2P9wEsU7e3GwpYKZN21N5HJRBcHnbWffRhxZwbP9LVNaiPEe4nfpnbU6cbFzhXRVsZbtwX",
  "key38": "P3Tqyfk4PXSrWC7oFLY9ZBq1FAX8PWyCyn72H4hLjmDJ7XbQR9tMsU6TMMGKdPtw9KFmMEST5ZsV37FiFUrCmwj",
  "key39": "2PceYSmuKRa2CPXXBiicySVWep9M2m8he3PdLa3i8KxXAu9PKoH13yJ3Ga89uPybcT2QyMGXgHMWCE4Ho195DmnM",
  "key40": "4WcniZefLvBoUMmQoLanNpyVuuZCSpe7dEJRzBRVZ2RjP7inotGYibgMjMQCiK5PCuVLEzw3kjb963EU5fr97txv",
  "key41": "TbeDQ4srooCKoZGVr1zC6xeW1HamR2EuK1VQzGQwqrh7PE2i4JEhhpTsPmZYZ72Xt68iSEWJ3f7PozkJbexmaDS",
  "key42": "5KF9uuLET9FhAEJJhRiNcQ3TscCh4ZxNB4hoA3WCruxUJ6RWzy4eBxm2tUVFw2VTDr2S6S3hJMYwaTwVnesNu5qf",
  "key43": "yQd49PmhmKrwcAhJvGbZgpk4qm7jGYGERXFhy3Sjg9UKzR7UN5rZP9SdMoYgnjwMZeFSwwZ2oxR92edDA31Wf4h",
  "key44": "3VhwVN4fEWxWA8izvVuNRag1tBPHVxU2Ni1TAGTtz1EameGwgYjPtGffQbCaPihsWZKUrUcJzvB4eKrbkWKGedmS"
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
