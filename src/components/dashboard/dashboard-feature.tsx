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
    "5i5Pv81Lo2MRQJcHL87DdAPi1rb3C3v5HXCMbsDcoy93aGDe8xTvf1gPGx8z3vLUpdqx6tpjTTir5wggicxpYUKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pHsdLC6bNtA4dvRZxYwgAB8577DggTeqmPFFWDwj5PjfYqGEyYdNfjGzrKKzpnmvU6tYNoKg8EnrgDGAU8LAogC",
  "key1": "4KoEgMtuRyQJyq7rvPxnXpgfERqeEPF1AqgE7Qimntt8x5jcgL21c3rvLnz1caQBQgcw1YzJLa8LLxTCLejVqnut",
  "key2": "nCbo1scHnwU2hCvKsMKMGwE27bgxT3rXqiKCevTTY6Ryf16qsvMwxkrvE5ApVwjs18aiXeFz3wyY1wj6oq9uhE2",
  "key3": "4KFSHFgsj7FbNyNuYrBaBBsB5B15FPH8vh1nNT1ceVmmsJrZjRkFC18JGA4YX8rqNAiNSUCmVGhniQQVGcjTV5Sz",
  "key4": "59cEKZZi5JcfoA949qWyQYKhxj8nH1gtHx8VZ2p3AM5MdSEUJFXibuoofFVGKWrcmCUfGHipjcKeqBh9Ksp51WDH",
  "key5": "35LmWBqMLaLFEQGuusVd5TobQhbqEk4wKnQ7KLfXhxfTvaLP3v32CwMCwBGoFMbhQvme2E7ec32PDXJuL3m1ZuYP",
  "key6": "266iHN48fndXNijFXD7GZcJCsx5dEJ9wyMwF6ep7RGiFe4xh2isojFmpai1kWkLXNMSqWyP5i1c1TXyfyQQBEMfV",
  "key7": "28SzJtCz4Mrk3u7VsqjXLJQSUJmiYLDvBSv7mdu3TPGvHwGMgDJ2LJTyop4BWQAF2MJXVi9urvyAzqzMScMeiRrD",
  "key8": "4qs1HuG6Ft4XufJxRsQzxR51Z6uc7cYU3y2g8KVbFuGkEwK85EAwnzM2ypoYwD6JSwpv7KwEV3mTYDDbyg4WtrmC",
  "key9": "2X8o4ZR97v5KtKhFegY2yLzeheNkrdkkkLpyiMpsaQBV1zgjugBSse2f89iza8d8J95qN4GS5N9NRqXxZXn2NTWw",
  "key10": "3dAZWSKgsk7sfisqMz3WjbGXT2Y2gQLHvffVCMuhGqjwWtYN1gEZhKoS5PwGD6iH7SLE44xbbA1Y6jhM96pjgnoN",
  "key11": "LYbF9351pmjnU3C8LJ7eEYZ2nPk7Gt9WxguD32n9yB9VY4NXaSNYeWxaHpGiKkzNkXMeR4wKWGeAkyw4U6raRxX",
  "key12": "dy17bUmzh8A734TJ4GES7SRrUdTZGfEGsV3uyJVtkBYeYbGPh8JPg4rYGSJiGmEgNPxeVxxzFjHNgMq7X3gRVNc",
  "key13": "7a6piVnCNLcQPBjrmjtR7NYYb9q2DxnkDFXfZonUrPftbsMLDEYtmZNorDJqRrfSpB8FLoftSeJRGsXF1yPbwCC",
  "key14": "4c3f94EVVpEdfz1Lj8cd47qBY3hD63dEgYEJKV1o3dP2vwdfiHC6EkxDefbnJjH36Y69qKCg45cPUbmf56qpvAwv",
  "key15": "vtrvkCiskks2dJMSQcGSmnpATDQBBqXmbAQcvR4jAnaPyMzX88spYj4SGrZ3aNAvH7Ric4xk44XYmtiKzWZkhUM",
  "key16": "nhcsx9xLvwD1rK6cgCYYLvMohMi1byrwDseccix9fC2ykq2yBHU14wvF9z1UkSdLRaFDL868H3Vq2wU5e57fEG2",
  "key17": "2CJY3Q3bDeNrwQyv578sH536BnfjBZJFk9P7vyNckYjZ4mvCouRfWBqQpQhdiQNcyzFVk5ZRf6DX5BA3wwxou1En",
  "key18": "2Ymbik1FhMEmeRCJMEVouiTUNuEjuyJizi19yGVkTxmHciSDiiuyHNrKfL94yXbamevJ6icLUFTtCPUPRFSPfuYt",
  "key19": "qFd9cRbG8GqMi2bta2wSztCkNNFCJPz6LuSrFY57mhnR3cXy7WiyrqvXAfMaTDeGSkw3C5XMLDCCiVT5Ch5qAVS",
  "key20": "5LTzCcanPLy8pg51JFza7QqQBKeprWGzRHavdSduphJ2KqJ81rsVGGx8Gfz7NFNHEZARXndFuVNFR5umWTjrpoUN",
  "key21": "EqEuoJjZXiuf6cSQ7A9km9G3NNhpi8da1ajyCxaWZ2JD2i1k7ACGqihiEaRAJqgYkyFa6PWNwu2mCmaEZYKeBZ6",
  "key22": "4F5gTry2SFVCYV5yn9svVkCyYnkiiNKvofPGMWZFfGFAY2eM9DKnrvL9rMTFn5XFkgPQF9SXpkPLsPCMziD4deWe",
  "key23": "5ie53nzMC69BhaX5vMRCnNk54DH9dhLJTTnRe61BNg3TkxmWJLFLMWAVc1kW97263kg9yrJjstgQeuRX7ZUf9Jq",
  "key24": "4CbW9qbogzR23BQ7r3CVkFtqtVzbrUH42SisF2knny8bQqmwnBRQLctmte92j35fCbpGqWY8yVqGBUGHw9KTKEBP",
  "key25": "5rTx85ir6dhfCPxcmTWictf4XESW8EnkUVaFYXyuqwi2k2xdZ3rgr137SpjsJcKnvyQg8NL55XJNjdffyiCs52b2",
  "key26": "4Rtkb3C1ksQq9e8H3Xn4Xaofqgzh96mWMDCvjc6aCLZdZWE2gdksmhd2y92MVe6jTaJraUpsEsdZD7YR7SwuRcL9",
  "key27": "4CrMFsPpqoUG6etia2F9czXU4hhaTxiDsRSzq2uSof5Uhnq5E7tVjueH3yWAk6Ydwbedx3ycWct9bpSPBSYBR9LR",
  "key28": "3BWoeBeDW1Uc5GtDiL2zgtuZFqm6HHChSeQSZtVzmbySGARbzpVefBfPB1cRMFGerSj3Zmo133de9tSjW3XxtU6f",
  "key29": "5DwSJ7bSpxEc6YFy9WLkqHwxSvwczpwHRqdXk9kY7Qxsg9PAze1FRgjGA6tmv2seh5uWvi4vVXNpdrkENo5ueFp8",
  "key30": "4bVPgztKMqMTc4YDg9ZzBseaXQdauTXoCupVtnu2m9SxWGHv3Ad6uerpbct6x1DF229mpJoJ8mqH9SpniZ4JudUy",
  "key31": "66tqZCaz38UzgzABisMVHRrhqsPCzVNXbU6Cede3uLKjxNao4kXPwMYMCPZ2dULr12ULVVfhDqWUdENKeSk12zo4"
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
