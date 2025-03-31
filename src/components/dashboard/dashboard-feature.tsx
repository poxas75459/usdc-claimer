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
    "2XDsMShEjyF3t2xvJvd7qk7K9wE2X59UDZ4F7WUoDiNpWmPT16baaNLnFAXpsTURTfaTkre1qA78hYnwEWR69aWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "446EjPobN6wczQXpdPHFiSXLa5wHvqv9GrRJB4XP8SRz8Yw7oC223mw3GDXj4sJQ5XTss42d2B4s3RZpMB2wid3w",
  "key1": "32KDrWJTcVbWRqe3PG7FwmeroW4UEUZM4nzHZ8reESZRCDbeGAyoAnDQNAwWVKi8Ay4efQp7UNKapYttQo1fd5Xd",
  "key2": "3tchJ2FyGEgobBWJjhHpSFnRJJFExGop6iQv8VWmDVNrHQqH7E9pktPFQX79e7D4sFT14hPRWRhFWxGcAK9uZ9qA",
  "key3": "5sKAZhMH5y5UvJssS6AFxoeg7MLGD1btV9s7fdgi1sLxPQoafgRKUgx35hLVFJCbMMphBHmhY5tvaKAEqsHwzfbz",
  "key4": "2ceRfD9VNuXyAEJXRVveaMLbvr24zHd35MptHrsZGuXFpSwhvytbpEcefoXsCEM24eKivUHTBo9JYkzGsQNifhCW",
  "key5": "2UtpRp8Yt7juMbecRDeUQzHtwYAfTgQ3gURyYFPzoHZwyyNYNp745NY7J5E1XGheP9bxwLnPCd7sEt57KRzTxfUR",
  "key6": "3GoqZYECwHCoMScUhKou79aAxT8YzCAcs7awcaKTDE8RpCUthQrDHanFRZBHHjqunxxPVCcjEE2K3KbB8J9vtWCv",
  "key7": "3hGNREuNMZvxQhJoaUMfYoDhnYaqiYryvqoP4jZTxvXVD9d2BoKjqDA1mnwGqdCzvnN86rFiqnj2qrt8ytXKhw1S",
  "key8": "4qybwvt8yuAUuNrRtQgHLJNPdTNEe4QrVAmDgEhyCjg4dJkW4VdLae4FkPaGEMwfP8FeiV56D9K4SgiJnyC5BrEa",
  "key9": "5kdQ8maQ7daQ7kbEUU1pKUKRtcMSL9eShCsdk9iUSVtr3U4BXD7xw22ktQdUxs9gszKaco3JdJf3g9U5EFNj2avs",
  "key10": "62xyeRSz4xNTGNCWWDsJ8x4YXHhhyQ5CiMZjgsXimSapqTdKn6V4AiR9DJGT3tvXAcQ5BST7tPDiieK2xr5sigDD",
  "key11": "5JAtM9e7vMnTfhZ9fLjaBU5wbDinNNJtGA1B1XAuHsGv7h7EF5ACtHbLUV6aqcBgFQzy8AVThTjvj9aUsrdcSjef",
  "key12": "4TxLXnMjTZZiLW6HywDPEZKjgcfrnaigfyfoZZb1hdaE466LSDLqugcQfiKBPA5RGnHHkxs3CWuidtNMHTZ7zgCn",
  "key13": "EDruLsuyd6TujTqkQnadKSg8E2P4aiNvry7U9dt4SYbsn5EPg6BgDPU6X1ueuebF8uUf1VWqCZTzEffdWWSfUuX",
  "key14": "FofnyEKJQgg8yNAb4XVpnEAmFYK6XAkjBAT5NyvdLiC77ZSg6k74bY2csznwYrLAo3PRN6EndAvmt94hKApKAg8",
  "key15": "557e61jMYAxpTAeQt2a7sV8ZuzzW3nyWXANn13bB4cJjnwEtsNWQCazZtPsvqpUPXqRPfgfY3ZrgMn4p56zcgdii",
  "key16": "3PVKXnCXjUPunZaKHtssLPKMZk7JRuxWKyDXpm8kEwRRmEyogsRsxzxhLbgbTZmSc9e3QFVfReebn7jQV1mvKKtY",
  "key17": "2tjkok4fdgfGo5TrL7hR9qaCZMy1ut44gwvtNc6nxMAdHnDwW8qt18iT2PVLBwDJJ6KYoZZuZtcSA6aB6pCjLfbz",
  "key18": "5wFp5nXteRAgtJASD93gxeHiVM4iyHW7ZetxppJgrZJkVuC2rr6BEpXgUMEu85br6TnaV7478NKrUZ2R2scFqRwq",
  "key19": "61Bdmu8nqBAcrhPw7pXd8tdsYEL6R1a5jZy1pvASQLnpmVRtztuozm1GqMBb4LbTnj5i72Y4VfGrdLRZYeFVWExx",
  "key20": "impaHyWkWWyKBYitLZrohtEtkd7bkjTrUAMWipnuc7kz8JpA5cxguc8ka1YBAYWR1Rk9k5jAJXqC6587jZRjzux",
  "key21": "5C2ojBo5tL9ZjXe5QMhUsZoezJ8mfvLtqH47P2gLhpWq2KAkzvSuJXoegbzFfm8qqkEA44PAEDaENgQHJvQeBZtu",
  "key22": "3PeMrr7AwoPZ32WFtFEY1m1V8hU8J5jphWSMhh9mSwvNnCtPfEEN7DoD5Mof4gyebGdYBnkzY8cBRevSzuD3LYNy",
  "key23": "5NFNGq8d5vqjTC1Pb1DMs8FSdbQQcrUC2CgQCrJNQWoSuHTvAEVHJ1SrgwnX1vsLhtnkCH1XEfVihkFg9BYYmsAb",
  "key24": "x4wkREJcXQo3NTJzrots648enMbTawop2REFxyrSCd358UHGCdj8Jndgcva5DKqqQF779MXthUQ24WhRusX75Dk",
  "key25": "476S5ninTZYdiC16t3pdXs4eWscqS1nUVmCVRC9ukuQ6GCyDUnR61SnPVpvPXUP4ck6gksvZyLqnJPNFZv4Lzt5q",
  "key26": "4aYTYjZurdLXsBaRuXfjRhfh4WraQDnVK7dynpoyvRQtcZ5YWLF7WVE5UzGe9NvrFZa3QMbfAUjJH6XWyfU7EJFj",
  "key27": "4ViHewsErgyXaFXzqLQqfki8P5EhT8sk3yr1a6B1vT3oxFJ5LCKvtgUVVJpVBttbQh3b5s8p4y35WtfBBZGXzzp9",
  "key28": "3ipXczoJG21cHBhecLJxocxm2rXkKkjD3yAWppFw9MdT9HSFXWhL8rh9FJG5zHfi2xhewGUHeYS7otDeNFhNMFun",
  "key29": "41VJik4sWUmEeEGEJ3DYVEU3R5txX3ProFLEBSJpPVHsQx33a3NUofijychtMM8tb2HsvmaxFWwystsCM4iwjdkJ",
  "key30": "65VXEYp84voULm4GmXgpPDUrTkTiWh3y4NJGrMibJLJgvmXHq5qWE97u69nyfRjGize9w96zTJHJ9maWFFFk1FPg",
  "key31": "3GTDGm1LHQH2nCQVgHwUL47sVMyuUNm2J3ir3b7KuhKFEm66WFPpya6F6EozxvtyroBcNjYiC3acJbcjD2Ns3911",
  "key32": "5SvQ2MQdPLzmzcfZqDByqjAzFnuTtjpJN1W5gNtthCSf75CwdZqsEZof5aXW6LiUzu2pn75wdSt7XQrpGrF6Mwsh",
  "key33": "3hhsmFEYtmerTgrYDweoAHrP9Qs86Pqkh3M6Y2nTod2SajCekHnQBsQrNiiNyy38oCWd5oghkx7T4UYtw1zG3eYy",
  "key34": "4MsrHmEz3WesCy8T1dHHTzyLeKykBPeZYADMQ7teMxXDcK2QE27zUASesLxY4tUoWaMLcp88RooCnfpyV1wBQKLm",
  "key35": "4BodD6JZTuWmtjGJ8YgzZDmGkAf1mLRiMzFJxjKMjnmpYbWyDBPfyR2MgpVQjxP8QmV82N4dziMPk1aV3gbVP6QK"
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
