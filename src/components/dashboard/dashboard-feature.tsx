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
    "54saRxxDQzEAk96rvVgaD5vHAhWP5FMgG6wGGa1HirPQMLig45mBS5xpH6bhSuZDc56CApwSMZoKuUi6kzFwp8P2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4stRjtqJcJWwuuNVkuirChppUETrGfyGHPp7Q3KwS3wEyb5jYNsomCPB1ATUJbbxbG2RdsPhFyQbKArvSiDHvyUi",
  "key1": "UDbdsfUJLSyhYUixVhypPZh9SsqqH3gMuQk6auchx4yZbdmkn58r34ueGKNfeTVThXENZsmyjkXD7uZmdiGXW1q",
  "key2": "4bX95VSk3Bdz5UfTkgRWMnMkLZowo4swCgYLdRAn5ga3QU9yQ7aH1DHBfSEQ4MFSdQ7CNVM5AVVcCzJr3SKSCd96",
  "key3": "4x8sQg6Kr4SUgpaToEvmj9n85tGD3PoNfw9uaYsPsnr6pzXqjQbH9xkjhxvqQE6oDD3xA1psRCxS4duPiYAwnyNH",
  "key4": "3b2AmLngMitd1nXsxcme8qSJTSMZTHfaAMH9qBXy3DNhLaQDbrJU2vZMydZwWBa1rBdbBMHrDHxCWFco6NSEkC4n",
  "key5": "2ocQLYR8pLUPktgKzvErX5nob33XkNuVnfGFZ13YUkPtuUGT7CS1KkqDWfsd4THR7V2BD8Ar7JVBkfdaVTPaVpTq",
  "key6": "3VuEDduN984RjNM6FpnW87vYGCd8MZ7ZqECcrZMgeJpcLJQYCr7bLEf8CL91PYzs6SngrAWYceFuBK5xZ3Hz3BmF",
  "key7": "EAJqahyWcPsYa5NZVH9NtDgoQdRkiRX1p5AxcVTAcjfuLTmcn7DqC3vWT7k5sGEsTBqE7jErz6gFZPFnNa3TMWu",
  "key8": "hZN1wCcE7G7YpjCN3fk8uucM5aWdsczfNnuCK6Nu4NRyEuNw6zpzkPpqUscdxwaLw2yzYLnMdmppbDDQRDFQGzG",
  "key9": "2CSkDEExDAKqwUk1Nuitz664vSBDkaH83Wz5B3a5xzRM2QbH9Btj3kyUKrNJ3fXG2hUjHpygen4r13TAy3JibJFY",
  "key10": "2eD9o4YTKu4Jj6Jrm1fRQsv6mR58utXGWsEwLPT5BNgDS1bgFSgt3TJHowGUE89b8j2ohd49hbeaMrDbhw6cRCVg",
  "key11": "4qpkFJkL2aixxF61EzUwghTN59BC9LcfgGJpAPNRxSky9Zi5re1jgqiU4wMs9URLvRnLwvi8QBqekKPZpVxkPTw6",
  "key12": "3pcjbvmJKzV8RiiwqrnKtrZ1oNFM1jVmjd36tHtFTBebjkQBf9jfFGwhmbPgiFCF6Q96b8o1vZGgFJYBMn9ntLQ1",
  "key13": "3WzCmncFTVYxiqvDyeUqScVGpEp7m91yEVxJ1sYcr4pD1bWBc2PbzQX81pXEkNPATvbEYRVeAySCF7TWDEUwvE6q",
  "key14": "5bAaNGJPPtEHchqom3neqrwpXvUc3tyqsMAZZni82RooZT8vChKAq5TRZWGvwfumM55QYbwrn9J5iYmddFiHxJCR",
  "key15": "3N2qcukCKFQtiQAsxmGwp3QzDGD1RgiL5uqz3hEVVGf9ibgBcqhm8514SNcN5VYpSXmNhb6FD5cPoH4QaGWABevN",
  "key16": "2A6GimkVLP4wrSy4P6rEHYp9rNpgX3baMyvpvvuhyipprKMDTLToRnPDBi5gMi4VBCi3gTFWcuG1E3esfnx1a4Q7",
  "key17": "wU61rhkLgfmcuCMbK4BbhbrzucvpoD5oWDVVf2bAUazTJftiun2VQL1YMWEvxGGpybgzuozv471LZnAfe2fc5Sn",
  "key18": "3is8DseuJs5z5YKJh9pdLUpDNcRR7DaKzP9LRDxNPQuiZ6JF1MDog8S8M8hvyjKXx44TMvsbp32zbrut1UrkC6XC",
  "key19": "4pvMr9X7KLpVYhBPGJjUcRU3D7yZWx8cbX5XUB4VisFsqxepgjp1sgcG5bVuzZxvawbYBR5u1vRdoZJEbySGMrsi",
  "key20": "U3SLZWK74mwyGturHLNjxiyV9yiuAK1UPMuRC2VMPgup2jma4S5nLyRTT4mAEpB5f9ohizydmB9C3r2UHFCWsUb",
  "key21": "44DcMr7oabSeFQoWknCvPeRbsTikYBFPMjZLkzzSHkiVffPrPUDxoTf22VzzmUL9HLADPcyGv32N6Q2SzdGf98RH",
  "key22": "S6VT1FQjiHjf56q9r8RK6BP4yc3tfHt2XspZGJh9HeQH69ffwtwKPxVhHM2AKYGGPyt7jdnBjcJ1cXuCSMKc8ps",
  "key23": "4v4ZYgiqq9JGBVZeJ6RGXwNwtAQoNJo4CguTHow4wGTvdA1w5GbfNSwjScVHsgFjDetJ7XQxkCqPjXRRabfQLA3X",
  "key24": "5kaP19PrbfrWkViS5nYxinvxUkCCVdcAvEPn9k8R1SS29EXL6oxt2h9DQWVPZqttfysU1LrvKg9Ry8APAAc4h5Y3",
  "key25": "33ozgBh2mGU6Mf1qzLrbMD9ba7MYR24GAgkbugz5JV4ccVD5sCSMXqJcmSMQa5TcLfj87QxHQqRNFCcS6D4m6ogH",
  "key26": "5XaUXFYU7tZz11WgRsY2z7tVGCwbVbWtnnUwggKqjaK4uFHFy4VyHdEWHFNPtwVDk1zhqgPwokF2UoSkbMaeXW4W",
  "key27": "t483bwL2DVDqhwSQ8mjZHyUsXdo28KUoG8Y3Ly34F6zReUXaudvSJM5DdE37TtUJXx6tJQDGK3UfuFbzg4pyp4a",
  "key28": "22CscyMQqmE3ugtXt9iXTFtypCUkYtrsCZoNPYKwPuNx9wXdCM3AQvMWBBh2B6Sm9cDPQiViYkwz4UbSk7basehY",
  "key29": "4ieZR3d5g2iKsqq3XLqrJzpVnJrJ7fD7PZbCrHGFRVQskd37z5aiCddgaVsvLfvLJLebGKtYVGpi6yKhY2qTLsv8",
  "key30": "4b74eSJWjLb84czHU2mu4oH4WeZYd52Rb8ktFJCfDQcdqNwE1F7iw233KqSbmWFrZPnt913mhsK9hhbXpkoFdNXt",
  "key31": "5qPuChT2exw1BxvLxTvEWG6Cj3pJPLEahSJdvkwYXmx43CV4kLU8cQQAxNctweYv6ZKkxFvnVAXxve6BfNaHzgZi",
  "key32": "frQWXH9rVaGJu6rQUdKwXfhpzLdvZ5v9eyxcp21NBRXgd6D8cXyRwUZKT4KGRBq7ixoGDywt78Yw5EgFxayh5qQ",
  "key33": "34bJzAfLooL4fKWv19fNRGUGEj5PotQBLxrVCBHZ5S3kRpnom8sd3mQuLFdATDSDxEavh6tXQQnrJbU18xkxvQAJ",
  "key34": "3dWBsRsRc5M7tf6pStXsDfkCUxQ6uDkHYBEtDDXSXYCcsEody1zRFevD3dKu4E3enpLg7UvU6mneZd6cyzRfznGW",
  "key35": "3ccNQ5FTFwZZJzwsS2Mdt4h14qXEhT7DpNrvxNxf4he6ZtL9q2NYgK4YwyQGitb2oFAnrtCC36KNEYHSQ5FSzpwP",
  "key36": "3uoFig2J1ov3NCGpm64yp31kAXLn144wKvzcMqoM9o4v8e7pLX5K935impXTpyDSrovUD5qLWX3FWiR28P9TGou3",
  "key37": "nLfczdppDmnZpheZhKEnAovmnEQjFFs3RktZk8jaCPmutTCJ3Qz3XQNHcQMjeYq2rL7QivoYXmBFheu32VvdNJd",
  "key38": "4B9o1NHqZmtsocbpXgnhy9yDqtQfdGDvXtjphEBmGxQbSGVajGSn6rNLnQM2bbJ9odV5B5dKeyx6jgWHLf3cjpJT",
  "key39": "5xVJeTZ7zHrMeJC5NmXRkRpbiwWuQKCp9hiupVwoNFayTFdjYZgK7NiZnzqwctgPxUk8xk19w2XyyD6NpMcrrysN",
  "key40": "49AbCKXCp3V9oKbfYGMhDrEVTooSfYoeaQ7zLkFByUQVecg7raHjqYsviuUgjrfXYraLsMd5xZZbVX4nkE1vV5CD",
  "key41": "5KGtULSiydbBsy5Ns9gx4HY9ekXNn1Kq9CJr5d4auZAr9LjYz4gMUgzJMczdHX5LdeBWx1Pww4ZSW5r9QBst2yHc",
  "key42": "4tpVHAT2MyeumgeKtMXhfCJU7uomiV2ePe7tCzhA8YiACPKpmRdKsTmNFNH3vrLquaQTs932BW8Vka8z8tEMA9LE",
  "key43": "5QWvY7vF6Wg91tzXvKQSxhTLqSCk6dSm5fzskrHDi7CP9nvVgL4hNYhxBM211uYxjKonRUquzkcTCyybwWjovZJp",
  "key44": "5DW1mVpcyu31oTbPJU62pt6jheuSRqCvXKEeWrkYXJgmM4AKD8kzoy6rhL1vNkQ4G8sUH93H7Ysu7YatufoVZYbk",
  "key45": "4gnJUiu5tHafdTP9N5Kted9jeuqeMvDZNwHdAVuxNmkShDcVsDyT1KkzPKdS7LZGD9AfqyJEjGoZXGaVAR7tNXkG"
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
