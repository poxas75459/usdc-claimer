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
    "Fy6ohgAKcsi2Na7Z4GgAYSMVcQxUytD2D7o625XBH3zMjyKadADjo46LN2biEY54oJoeb22qqDFkTrdWT6T6Woq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zDPzMv74YCDECqPNM5MNGVGWkekz28AUFZ3yn49ZJCVtkVtUunwEy8Ax85WawqgQ67V7PS8BSRTHN1wciFVEQYB",
  "key1": "4eRBks41auDbs1RrFMc3PeWMs8YPgTWJt3GjwpQjkXKtAw66HztmnwVThNFGiV7LNZLgttHs734Xtn3d89vD9aeB",
  "key2": "ifNVfe4XSfnRevAR1JvSTjGpH1n7NrSReGVjFT1yVgqXF4bcphjz5mpzP2K3jfJjv1NaFobhGmqGFbY9USVWQxm",
  "key3": "57ByzV5UU8dBFK1HqDnyLm2atcXgyzeMoDZNCbhDkQ57UMuq2GBknnUfFDczbKvPHgdzWbRmd3gvq9ErBNCsi8b7",
  "key4": "5Niz4hdgXUtYxLgybQ1RZFvgL9FUTyqwmNQrMmRnjW4wB4eycA157cwXBsgna8ySHtz8qKFn6P2LiuwsaDRVZ1Bt",
  "key5": "def9569tY8P4oqyDKcRAcu2XorsQLMGcpB6jkX7PU4v5qv4fFJG3RhSZdY7wrcRn3kcEdFsedWFSiCtwsPotxRw",
  "key6": "59pfb1Uik2zFchFgZCznvEt9t5Er5RNAoCRKNMQHRRvQXvifeiA4TcE9uPdq3quC3zAj9HBUrrhGFYKZWZk6o8nt",
  "key7": "SbzswAvxGu7oFSsMnncrzcsUksW4Er5wJNaS3ox2Xdc8wBAiWSdh1JPN2nomnYc1gomVtP4J33gwUgWajszsaM2",
  "key8": "7LSJ6EGNzZP4YUudDWXnVWyLzL884ksSnqYXKfopZzMAZh9iTGdvgsGR29VY8u3qfptC8NtC7KUpDdgw9nfcku9",
  "key9": "42gWDKWBFFjksJqgKFTNCoZVBGUmCQXSjT7k6fKTRdZrzuPz3kCbFCRFD2dEBYkVRTPEBubHv5HMytqm6XbQBYYX",
  "key10": "5a4qXmd46zuZnwZfNFycyFzkCjcC4vRVcx83T7bS7CKrDNXN6hDkwKHEryGn5JV38Z7jJQ2pXq7f3jSex4PCGYjH",
  "key11": "3ePSCiUAohCgH4BHnu3UzbogTRLyE5PRUf47iBD2YYSJApPGKJiGxn5QwxzMmgsptnhSHLhfptTjVG9dNKrJDUp4",
  "key12": "xd5iMVZTErJhRd4Z7RVEmFuUdMwbChVV1FdQjgRpviQ4de5XGX7nf2VG7orybe9tgHC1tMcVSbYKRgXQkK74cq8",
  "key13": "2iB5VpYSGAPzVhsvwJybmFdPu6Tw8DJ4FymuF46UidNZ4zzZWt7pA7FBLRd7ZvSA3TFWE74BJCzP4p1XcSG1Zp5j",
  "key14": "mMQ4meh1Hv1pQ6pQ732qyUEBB2iteSTSzpmNgDiNDnSXnNqTPJiTZMc7ZhnKwJwRve93CjXWxMi9vaSU6phNwmo",
  "key15": "36i44faKP3vgYtTSf8q4xpDykrGWWTqVAShqXnv8PNKXurWBp2qhLcrPcmeRznkTUR8CNruwzU32VQ9y15Et75PQ",
  "key16": "5KhCmeLaW87H7g6o2s2YXfS9ZQGFtoSmsWi3Aui1YKmM4U7xWxSHZ74gHNBQ91exYzQuzMdHELHSsGREDMqGRQ1Z",
  "key17": "4z8wSHzbnfqAnYeMT96kCjBt6tW997aD9niMa4z12ZFVPsMN3XQzfw15S1N88PVAA98yJxS6HTEWoAitPa5HVahU",
  "key18": "4Q933MtJLc5qQLVq8GGCY3z84EgyhJEuRAc4fuZCJbeFZzdk6TUTqEbJ81irxFJbTCsxm9Jmq88AZJfWuZ9fa9Tp",
  "key19": "22kLMQmpb8Ej8JmrwhQikKFqYRBXwjFYxbg47D5Ehr69y4aZhSRuAZC3fdSaxtmb9uagqLss9bgvFfQWoaZxRdBV",
  "key20": "618aywdshq6QQ2Eez7D1qXu9gXyzYNWtJXnoBX5mfxgohS7btLw7z9APUSiqguLckiED9cip6PJuvdg24f5tm1hh",
  "key21": "ZTrWmaUsg9tp4XrhzEA9Ff42ydrgY51FKUzcp62okdTvc252uJL9mHwQHrTXViTbGxU56poEPFyvMUiAdbGBpqa",
  "key22": "59ByCVweezavhaXHv7Tr8vf2qeK89MSibA4trwFGqjsL3F4zZEFqheAr7fGVQDojYZTuoNxft75A67hUd631V6By",
  "key23": "5ksydZv9ve1xcvxbs8tpMXR4ZSXq8b6mYB6TRk2zKVFf6osDTtLPyq6o8TnJdB5nVpDVMrHSqSce5BZ89wDBytk",
  "key24": "2RA9b7LmyxehtHuLe7KTkGFfiGG3F9mg5mcyXUwnRkEJS1vkGiWudP2gih3noVVx2ZvxVdspCSacXDkHsWamfenp",
  "key25": "62hrUAp21y9vQeH9YkFXmXXCPZDjCe7nuM6SfeEocAr3HXYHr3ztLEVtvBWYLhHMg9oaDzJAtzypN1BxrFiAYYh9",
  "key26": "3d1yWxemi3a4t9W6dYCkzPzg24Chu3DuDio62kpUZEwneGB68n5UCZdZ2RXi6hGRqQHb86b4RM4ZWusrWga2v7aB",
  "key27": "3soinXSyZusoBMWLq86HwbBtRKB4ztUcs2L7hTHpy1kuhrHF46nRBFVdAPQDphZkY17eRHgPJup6JiEPzBRNv7f3",
  "key28": "4cBZkCPi78B1Fdbzf6t5Uc7nj2FWWpFc8j3Pb6UovcSVVCwiypwzxKcxabyBPT2RuECfkobXpSUVF9sj1XNjiU7K",
  "key29": "3uxs4UF9W8jncsArZs78wspDS6aeqxffo3cPrVSDNZNDb4K8Ei6SyWK138EBTFeqLTASCAXmKEGKRpXkYofcyZKD",
  "key30": "2Fk6b5f98bNPt33gKv9rd1NdWXLorxPaxu5zFZzPZ9TsMfuACsjGSbDrUEM8omj6ZwovjhZ7Sfnqj6YdLXY5YmEG",
  "key31": "YupNzdhHTtiiyo6fSvkhc7GTQWnvUpAjF7u3siMWnGAUfuC5Y3ckX9XPtNPKBbHPNcHMGyba9hV7kukLGupCUap",
  "key32": "iFEhxcwW44JFfARnxTW7YY8pJLtZWQei1Rzf8rxobo2pwCEUuEY3FrFobQcx1y6v7dR6vsQfq87UJhWq1CkdtKX",
  "key33": "5YN2YK4icz8sHLzD9RKyeLxv9GwdVRkhNU3Z6xEAVKVz2UTa8peztfMyRb9i4Zo1XNpvkNVSe7jBh24nKqN7ct4Y",
  "key34": "vuEiKBxQDGPLqs2kpUABJHiaUS2cQwVhw44FhSiLVbWCk6CAgacvwoirC7t1nGrDpSwHiaWJyM3TmQUD5r6FyGE",
  "key35": "tFWbXDwCLniJQjSxqUUhsqBUXb7SgBaA3K7AVUkA7GNj5uGiwAgtRNCKt5KAhmfymhXzbw2XYY7JtADbBenDL3U",
  "key36": "3cm4zaYBhwTXibCZN5e4ThuzJB1HV4qQtdKZf2R2tzm3LM4cYbXRut5AeUDKj2hUN6u8oqr7CEwJmvYz9t3UBggs",
  "key37": "3F4wstAYXQh86xDV9A1HLhF5KwfRq9SS3duwQ31yHDk2gxJ6WgFxJ5FYfMj5FWW53e1iFikbsJP49dJmc2wm739a",
  "key38": "3X7GNopFLfzZYobXSJFb1zV2MMRJmgAAdN4zdS5Tu3tU9cCCYZoKW864tfu9z9daGjQe9nhkyD5BXRnRN47RH8eX",
  "key39": "3mMxezBCpfZTndhtFHJ3PFuPptn39MoG5VkXYRdGDrsYPqjfUez7mK1XLprcPYeLDTi6U67yKFmho1E9BPPPr3VT",
  "key40": "2TEwweNdGupsqMGVJShNrTkcZF4bUN3SAz6wBxLVEPRLf3WGmRgBuHG5LyfRxeey84AXNnm3i9KMJmhFHmAXHjam",
  "key41": "5WLvR83SSjUcsqXLpndbgUQWBvAqwJVw8E7WqJPpMouVBbpV8b1fii4PfDTi253bXaX4PT58nbjEushcM5Gk2fTJ",
  "key42": "5fneWyuLYMLaZGYCeqJgmjK8qyrrjarinmx2BCEe7P7TzCRw7YUneggRJKX5Ex5EZqjfGpqQHLdn59fRyX12q27b",
  "key43": "9NhntW6RPhfmqsQYKCxvMBx6aCd3atu9i54KAfzrXmcGyBRkKeoQNc7wY9c9cjkeFpF3inxGouYDTiju2zKKbpn",
  "key44": "t4xzzeDspPSxk4AVCAywsFZd6HRFT54cV5EiWKb2gGv85qfKQcegiXBZowLNVM2NHhyH9QU6GpRqJKgeG3Rm7pp"
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
