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
    "5QdJ7qEuxZ7FFpWnpbM84qwyniHM2QLuH4GW4ogNbw5wRyNz4dZcHseeCtjKJPJe2Kw1igGJviSKtvCjL7pfwi73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FjWrbXcRBVZyN3HXiF7U4KpfGLLmc4kfqr7ypDxCfbsNoFmuzSkQ9hnQUvZ4XjRBnWqfKLSTtjTeYw5Gqoq1Nqs",
  "key1": "5ZZd465XvAFQPdr9SQPgyDj4FRNpK3mZ4uZRYUWtSacBqMZHjhmZYt5LUoiiVDeput5iZR57ihaFYnA7NZHMuc9T",
  "key2": "w1C9GqrGPm5JzxWXhLUp8gJa6B34aSmr4D9T2fK3X7Hy2kG7EnnLS9AeWo7hcScJmWXAwsZAemRg8vapgZ67pQ9",
  "key3": "3KfjaNEaTaHg35iP8QtuD3CGHp8RQ4SrgnpaHSb3NS5EdK7E6SjiAsf3xsXQH5hPcPNoPwV5A68sKwMFQpbte3vm",
  "key4": "4xwUeph2tPF6ijmkVLqHMHscALeAcu8VdQhSV2rrkf5XrT1hqr1Qn8Y63oDDLwUG78hCFsGCPqa1b39PJUCgSrJ4",
  "key5": "5Swu5L5NV4cjBXXWxLaVczn68V6NzvpHWjZFYyS83NL56qnT2abESfhJY8Qqgd9o6LSU3TbimfGy4KkwswEkWDw4",
  "key6": "jFCLtNcuHUbyy4euD7VwaTiHiTPPwL3W5huzLYA9Xmq2vachQG6NxdhwkdFxLqbFfgAoSpzeWf5fWLyJEfMFjFr",
  "key7": "5fNWWYyZbibsnuftWomXKDrcD4NSvGDjnfh7tEarojWpoTeCuoApJEAVRMw7uKUxhpPwKuJYJoCA21LoWqgRDPWV",
  "key8": "2qY8epp7xELiBURnKfnfUrWMMC7LzkfNunrejmRVGiqkYP6AME7eBMr8fD7ZTugkDZgpyDiwQjisWsuVi769us6W",
  "key9": "8jX2yZ5iwYnZuQvWDJiVXzaQgJSifmgcxDXzhEg5YwY6SbFgWuJ9sjz7wcVGYLf5hRrTRdke3pKe79NrSwnHTzL",
  "key10": "2uQCdYCbHm75RVYL3gV1bq7k23Fm9mPaB6W8BE4MyLLWxbJ959sWFwQ6CyRZ54XqVJPW8dVcMENvws2TQM5XzmXc",
  "key11": "4ao4XtLmFvMCswA8QATcUXy8Yuj241BELwSpczKYtFgNTa5HPEJEMSXGvuxPf9fyxiQb346kkWMAGkbZtFGfcCf6",
  "key12": "A3aABr4N2He7Nig8S3VSne7MWkzMupqjeFZBxF1ReTs52BVpUizdUXUic73jCPodbUW4UKyhuCq9sLEXbf7bVPS",
  "key13": "5Kf6YjoiFDjKiyN4ictobigYXy38FH7n8R8Wupg6YLeHYTNLYD8AbVUk1d6hf5anAFEoopTYgiedh7rVRUgwtjy7",
  "key14": "3WoZgudtNrvKVqryb9uDnTqYbQJBPuVfEHHJK69PGmLzBUeuKu51f31rJX5JRA5h1cRFmNubt7Ts35qRzg91gbpz",
  "key15": "64eABPz8AogyzBVTN2uKppkZUFGPQRMwf5R1tLFk5S5XQvo3DbVVP97f8cYWqwRivo2yeHguf9Y4H7fJhwXFygP2",
  "key16": "XEicK8DuM7G4NHFaxwZXjCebvEMK4jbaCkDVNtwF2R1HAwXG24K57ckSbuKqF3pdZTtXT5nZ6S9QnSskfbvT7dx",
  "key17": "2aQzD2sTeVftf66CYGUAriGMTr3eQodWUaRzXvYFUg3j4QmgCoyLEm5q651oYzSbUK2918JCWLn4j6NBoBnTKct3",
  "key18": "53FsVZCfAL6EYhTqAAcL598LfFhxqscb3h9T7wNeRaBbVSVvBZuP9KzHQLD5P3CMFszq76tnuf565PBLLAeeECfN",
  "key19": "2kLLMwhbRFW3KKC5ohMKZu4NoA8R7CDibYxeitUKMTu1iEHV7Sb3v88yCfuWtvra2BV3tfQR7rjPUVktYJghwi77",
  "key20": "2mYn2P61F4UxihYaLFR4q18mYLiUjFCk872MUM6EwxQj4XLF1XunzxGtoePddL2mLeDG8x2YzeDxUKwKRG17acLg",
  "key21": "2g3Qcqw7NhymhRxfgs5tpG3EzLYnu3gbjPZxp4w7azuwVE6du91KcQnj4eUJFYouaPYgEgFcAxWKek1d1hH1AvLm",
  "key22": "4L6X1JWZz5zYqM9vzQ6jV2JqjgxwpZSrgMCFC6P67AqMmPQrKiN6hRYHiimnX6JcRoRJw9vsfpW6uevWN1bLBjRz",
  "key23": "4eLvA1ReTgsRdse61E8jHdDegaRfK7MY1jhZRdJCSwYhym3kRDxprB1tXqc9wcVcNrFgSfX8n7XmKJFFRqvsfdAx",
  "key24": "2YdxkREBab3UXXmEWpGn14MZzbZ6ZhLeetNYu8oZWYT3jiYu5UnLZi9ADq4uiddVVrNVawwipZdrqSrTn9y8aw44",
  "key25": "3L7ZR95tFUZy9wNpF3YUUSkkhfbP51vXzvzzoe8sXaLD5CEH4sgPLFghUtoVehfVnWV7GetF7oNbHmHm9AQ4GaLm",
  "key26": "2oKrfbz8SeMTau3barbhNQDBpCvVHicN39pCqJLT5kfpKJkKDJyT2TU9Rq3Pee4etdkAm7SKvPMEFpugFNZESRyv",
  "key27": "48zn1La7ctmBbs1W4SksZ11kD7t7qgEWR7MRn5ssp4SBjfBRBQ68KhAT4nvm2LpL5N6Fsz2mP9YK6VtCQ7EeYeQJ",
  "key28": "5HV9vhscV4Cb531qJ78chPRDLxfSWvHRujiUXSZy4v7Eq1fF6cngekLvSjX1DaLF47MYoC2f9D57zD6fyqb2uAdd",
  "key29": "3xC8sDAUqBLp3zTqpc8WXc9NwrBpKHshpyQLdN4VFte57QbfP1jgM2g4SRMczTZ3eTLm42HifBGAgtXXYLt2Z1Cc",
  "key30": "2jPGsPVpzJMLqHFagKPYbfqaQwymJWwxf3pr6hymfPyYmDw5BmZV3DXG6KTWKfE1nhBB48EDMy31Qf8YKfwcnx5K",
  "key31": "48wWZBNFCfnKXEywmPxJ8kTAizjztzwSYX914QbdP4rjZq2AMPQAwzTWuAuMatv9k1avBridHYWqVarwyoBbvy7a",
  "key32": "4KiHF3Lx1xuaUN25ptrgYb5HpRE9Y3GsdzMBR96aRkSfBSq84rBRZHd26qY1b56suRbe9FbiTAoqbG7uJSDHYDgc",
  "key33": "2y6kX2xZDrrupbyW5mqmota3mHR6LK3ScT83hRnyFAQp85PnPb9Yg7qPEtvUWsUM3wwDnvwmf7t6vJHvSUqZ9Efi",
  "key34": "4Gjw2TSdfFrgYtB5fHozTzVDimyt55Qwb5XsW4DbM4CW1A7LAEh6h1H3WYHyC1XyGw8nn1oAt26rmAHwTqyWMb6W",
  "key35": "3XvBQHSJBqqFcZAQuUanhTiMxy4wyGU6p8wz1NmVtYbHVMwW8EbJXiDaUNMS1F4RH5aPM5o3HgvTg8KrnRhxm1kh",
  "key36": "4KxWUZavprhrg7vYB4zwsXftsJEJ3ZLrzB9qDcTHe5z9jRAb7KxVwpNUs3y7aJU2kARkJqNPDa9qqaJyaryczyes",
  "key37": "4i7gfJXroHgDyFRApTWfyGtNZz3zApj3RH6nrx3cpvb261YZ7FZKAiXzcn5xQocERKyP6TFb3tofuRB2ZeKaKhZ",
  "key38": "9za9152C2QbanguxXQ7DB5FwAozBxxAAgV9DdAJiwh2to1krHuiKhbkhjX786dwXbG4SJ3X3dPGRAMXKFFPLtQK"
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
