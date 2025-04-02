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
    "DZFJeTz3CtFwRnd5Hp4wSYAkNFei86h7UmgYDF7vte4x23M5M7FjqX5wjvJ9NGmD29an8SD6h52a7Dh5r3nA7vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ez1aWE44QEg3HcaaQdbD12vK8Xt882qPHiiqX2eY6vTxRRAGg9PVj6LojoejdP22BCQ9icodvvwyQ7ydH8DF7JW",
  "key1": "4LwtjLFj14ntHWvap27NgkGzXZcMYYRiAqvGNSkBmz8znLCbADWZQsBiBJQjx7MGJhGvrzbqCnzAfoDkrnkkXePS",
  "key2": "4wrc4L2ufuPaGjVhHjBkiQy7TF3TgY5EGrdqou556cAurGU4Fa2GvpY1sJNSu8yXGKPaH1N3j9VUqBYfWgME9GAp",
  "key3": "4TDNoZZqeXx6ZPG8epmDonqBrFiTw3n12C57Gx4Ytiaq6n5VT8VyuPoM8ZKQJjQfaEfybxMFnetcGE8NWvoNWBYk",
  "key4": "2dgTQhJzfesjgWVTv6uyMHtGoFynJmCD1bgjyFPmz27P9maMjCLRe2ecbTRXjsBhu4VjJweyrjc7n2SYbqr9unHH",
  "key5": "35im7GghVqVxHTuGyY6m8Y7ZAxYHJ5ufvoshkf4S9PFtBEgVhfQxKsaVF78Tu6xqQwnp5Rh9AoKW1G9yKMkgemsc",
  "key6": "5CYxBkZViU5TE8YYAiPW9vpRkW8yDhCNPnKBVNDgERWyD96j5nTV9G4afgpQmCX2GqG1h4Pvs1XJnNSbdbewHWj6",
  "key7": "2vh4rrtz6LZhUpQvhfUn8VVKzSwtMKyCbqDpxTzkYdH4DbgXVdi8t4cBYgannV2VVmeGsn1JGRktocQiDWUoYyeQ",
  "key8": "3kcEi4zB5gg3cz2pP85wXXvbJX7gUiaqM8Xk9xwJMwWTcJyWMMeeusY5DWJSDJuQnzidY1r7sKQvwGq56xQ3Bq62",
  "key9": "5ii521MFEGjEg7qMgR1vvUeemn3yLd6Dz71vHUn74VLDEfixhqQi4wbxq46eDNmR193ECDBggfvynJuks8MS94Ge",
  "key10": "BLgBJA9U9ApR2MFX1vepkCTong9WoqdEX7x2AWznpBm72CzspCR5cqxHHHkLuDtjP5dMwVoVaFEBPY7Vk1cUziX",
  "key11": "4CeNqRjYXj1KaV1vQfz2bi77igu94rssUKobMpU4ZUfuvYxjmPCFawokLjq9YxHZnTJkaeX1SbwviBzc7J8N8YEH",
  "key12": "3GzLPsnDjYm3e1Ro1u8BmG6z5CsZRjKydWoUbzhtAUD1AxUigdDoYu9wonqW997EiQKXFfeShWTS3j6mpc8Cuide",
  "key13": "2ZYWy1v11EM5Eokgy8QeSesraDmcNdEuLiKFzvUQ57M2m6mXqNQySSxniYLv2fiamCHNKaPf4KMeWSTCeECVGgVX",
  "key14": "F6Cn59VCUAkHfqG1rG5NqqRvEgXUsearGvJ4yYpUieE267cX7MaLuVsLfGW2zkpn4z7cxMgYCnZ9so1kDkrBa7A",
  "key15": "KMWiA9KkCpGHf8wi1SSP7CLQ2e2LZhKELR8KDdAsGeanBqVK9qYA8AfryFE1uEae9q5BQRFH5HXdmKbBMSWchX7",
  "key16": "577uvMZyMceaFNXXVnLwSs9wT2p9X2XULuikotVTgnRdGWSULMSj6fJpWyX6GmCGtKPE9mTq6q12aSe3j69wHsfp",
  "key17": "5tXwS9BkxyzbiLG8DDtdTKNDG5bDRhSxENg3mQ6SKE5WT5MF4BN3kvGoyoLQgYzsA6TbGQczHRovKxwmVKeptLPY",
  "key18": "5RGEUwN9PqiLZVfE48Lnrk1hk2r6WJq9C54GD4U5UDEuobuZHcRTUYgW6ikmsyivEbowfi6cA6JwNZBo5W4g89CY",
  "key19": "4KdszPxJqyzZMV9wBcD9FTxxcgpRp8B5ySGzYQ1ART5txKTR99cM9pYroqKjhnwJMag64hSugruebNBuzt2hwF7Y",
  "key20": "4tXbna4Yhp9Aankmf6vUU4xB5wAtViHJRrbu85a31cB1cHad8JxzuthnFRKQ9qDjYhZmsrg34gH6xhCu954Ys5n4",
  "key21": "aZovxUke431j7gBDivjPwbnfBtwQVBkZaFxY42Em8UkPEUrrSfxPfKN6xcRRj1BWojq5sAv5eC9j9y3zf2XWqyK",
  "key22": "3YVX8rh4YfffT3rDrAacX1Ax6cKSmY7Pp1f7PL4xwVHg15yNUvAA37w5ms89KmjrcSEo8Fnvvz2NqnhykQBfAv3C",
  "key23": "4WQevmBCLo3NnhY38og7aRnRWkd8xxVvWCNzSyasDD86kXgDotsS9JS3YANCb9ec85aE7zmvdGRXhMVQrJMUPwqH",
  "key24": "39vj5THesn9KSi9pBikwbJ4DTpbnv5nnv1dfrkmkJyViooMcoSBes7Cou8erMHPU9QkdN51nS52cdiP32y4qyQyo",
  "key25": "2AnCCphFDvTPjKFyBoHWGWDvBR57fCeu5UsWPkPTH6mUHruwMYocyQSL3vy5FKBceQoH2nyH1FfeXNQJBwz3NXNE",
  "key26": "f59Ui4aZ6pZHQL53HWHojstoJY8e2ZTSoWjg53hKwEcebGxQmNShM2o15VUWQeLiv8SihoPWavxvHB7DUUe66im",
  "key27": "22K5AkrpFAsDZr7qFy26gY2BcEbD274sEBNi36AEnzmrQV5Q8rj6TVLiJ7XjZ9nvvMEoL439uht99QgtMdSTbCV8",
  "key28": "57mkfcmimQobyNRpK5EBMXYSzHugrrqMTPXRk4uXWggffqVYwh7pFdog9wMaHr8G6qMGwmg8CC77GVJTjCVXoT69",
  "key29": "4fahGh1DQgf1GtW8BaPA3uydjwvKq5QPQ8pVhUp6Ks8izkbUJ1cScz1pCpUguK2kFDBvRBziUYqTHVFraQ6kJik7",
  "key30": "2CFYydiu1EFMsWAAsjQqjiezGbJQZDsVp83rkeszxgNrXtnr5kn3Wvej4gFQzx7bKZaR7y1CV3RwKpuff4bteVE1",
  "key31": "4SXdeFrExRDL5pYMLx4iM68jHH49HCFdnBc7zbihEUHVjthW5ZVZwT3azaLL9cAuEFLJ9wSo8WygLp7XvTaE3T5y",
  "key32": "4dorvxiddJEkfoYb7qcLFBwHFJUE1GYVGPVeH9qbaPbLbKTuebbCDfEu6SZLKRJLf3f4sVGhssBAAtoTwAkrGkUN",
  "key33": "5DTbYNk2vQeV5jScMDkrjMt83q9khL4uH2tJ2qProFTBwixy78ZVFPQAMc1opc8BdAAWtvGLnQ3JSABhsZZVLkoc",
  "key34": "24PK9TQuPvj7qioJ5snTVPRbeMbAT9FJ7nTi8jX5rCjx7Qf2cQDXUvpYUe3SP7oxcPWBMFr2EfdtB1FhCyswvFNV"
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
