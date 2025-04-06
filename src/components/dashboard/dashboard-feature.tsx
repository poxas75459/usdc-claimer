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
    "3uLf6nH5CSvGVcaCzR8e4yR9ZmCTAZ68gdMJBttj6M3msegKb2LDbrUNyrfQioF5RWnhVADaih6YW6R6zcYbRCBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HL4kc2onF1MijWWMTrrskyk6tCZT7hxsF8Adh5e9wdU7JmBKoxFbeWynWL93mmhqMfz3vx3sHf81nen99Msr2bE",
  "key1": "5SJEsugANBGehDDNnVMhxT6Y3PoKRy1u5CZuVuYJdVXL9nKvbcAKeFk44MbEwYhFUKTpj9PyCcyabTfn5uwybakT",
  "key2": "2LukbgsoouAcP1kF1jR5D29SZcaa4LidnS83C7RdkGG5yQUpaUPBWczGp17wmPwwghKmNL2kweZWfZsYGWKVCtSJ",
  "key3": "3UjXDu4GqabUBwv1i1XXhJN7gsBJ7MhUoPrPMDM3UMg1zTuaBRKqg2XLq542hQNwkKM4GTEj3PZGSUTaQbVka5Yd",
  "key4": "3Jm44d5Ab4mcwfqRXGahRi3C3GmA1MeuMyDd4PMQzxwBYTadhAXEHXfXojpEz3zsZsTWkW5tYW4QoXQF5YSSAwSx",
  "key5": "4oh8J4V358sSTScegddqRSohJ6xJxG1dw78kahSjsvWTJ1hE7Ja1PCDyVvhEbaeSa3pzTcoAXTdXr2nZfgNQXcvG",
  "key6": "66vNVZ99y38Aco6aEe1CJx9cNkZsxJ7TTz5UJ1zAxuMswcUCw29LGJPPZE2bcnPUiZ8qym3uVgxaq5sDPfb5pP3u",
  "key7": "55fAHWXJGr3nxdHr9ZfUgRy7aYZWunfSuaHJTr4ZgbwsrkWQ8wPdQd6ZDT6Qr1UspmheXekFH3EBzYMexKR9emkF",
  "key8": "5kZa5yAQ7NLoaCoc9m2DYTSKdd2yjcrY94jcAiirvK47jXztN2FjwB7if1LbCRNkToRXaCbZjWY7G6SXbMKkbxws",
  "key9": "5dRznyMVMBSK9NVLLqrR8BCYan9ZYyiZSE4Sai2ibJfJgVbw4NueMsTpoyGfTvEN6oVvnqeVXtoarbeRMvoUbzdW",
  "key10": "yoCETnB6sTTk75JJGK8AAGHyEVj4BSZztrgMtctyLyLmzoQk8gxDzqdFGjP1r1qCHwYdz31Lk3Btb7UUXW2UYvf",
  "key11": "4jPLXSSS28aoAGvSACX6fY6Z8WXgM9DCfMQw4gY6Sd71g8BGt6gzW2NkmLMXTX6QSHqQxxN1x2Pd1Z5qrpGwzBrR",
  "key12": "5QbF7VBTMoUo8SdS5z4zKkYtDtv8R3ZSre4cPkT4xsq6YvHfKMRo9SMxmxAf4vVJammdb2gXyYUi4MN1fx1Wc6B7",
  "key13": "3pU7sZR3jUJgRZKpvkLUdd3CKWbAnHP81QQoBMdejezR1vALCZwbqZjPTphpc9nb5kfzcXjKKWJfFsfEvBuQkqE3",
  "key14": "3s91cu29eNARovS4PS9m5tRhXkSfdLjTP9ab3erpLGHNdUppWGVeqV3GkeN4ATaQhNq7YPDi2HBGKiPj9jSLyYpC",
  "key15": "33TDjg5hLMWHM3QY2VXsd2nK3EXZn8Rv7R4u4pY7Uarv2kBsTskN9ZkJvc2bVmH4WMksRXom9n6a3ejT2jHmMYNe",
  "key16": "YbFLAGzfN8PCjMv5D4tzDVnUyeWod1SavuQmS2FMWBzmWwqR6W7RwY6ZPCmTWayUPKprJ19EtYDpahCmMKeb9y7",
  "key17": "2G7k1QrfzAPznpECiYo397ga3v8T6ebdQ92mgZMRYvZumgfatm77JDWiMW71jpFYWqGuzDXnMwcgTNXmZGSksPGD",
  "key18": "4GieHnLA1CS3LaWUkW9XZ9FzWKpc65kqCEuL3kZUjDCV8rhbJBoKGcQAaeGHHLZiVqj3BLXDQCDHRSXj3V4q1BQg",
  "key19": "3enVYyVhJLBZx6ViBeyk5LVo9fnu695EPNwwKUQf8R2m3YQB54Zm7c6JZ1wAJgYzfGGwDEuGSBn5eABr9hr5ztg",
  "key20": "6TSNoVyCSdRTTaPYpTzczxEXVpaCRUYLXFon2gExF7nWWgwof8iSR21NsBvh1q6C2NvbTPV34Xigd82Q1TMj7uq",
  "key21": "3jdo7cppdFh62dHTS7GEh5cTkBuAuRCRmTy6PeJu9tZkC7msw6eBcpuA9CToHc7pd2rAadxN59BpfijeUU3gToGx",
  "key22": "26Zk3uqZQXXReuKmMTfDbVVqxSVJFWWHpVphDbfaqk47zf4ZZwreBGzNeRPgrqnuNS2idpaZyAUkY7eA32GjAbQE",
  "key23": "cFLtEcTNL6XrqW6ASpLwrPvxfCsX1N3Yc41SnMLni5UzLeh4ko8mk6ZrLG9isnwJem7Wx2HPBjxpbsm5T4H9vA1",
  "key24": "2Wdykr7QW4GyP4TmRrrr4nkZeueoYmB7afjLpdfMERWWmin5Up6YT1Q2EF9EYhLKzmZZC2redwMhBm4GkxM6PxPk",
  "key25": "2Q8QQWmYPxduLW5Q2AeehCrGQGa9dffwSq7MY5HexbYkedbbqMa3Y1zXSvYzdLNAtGJG7DknaoRLhsmhcYWNCw9Y",
  "key26": "4U2tedFoeC3X8NNdD9jPnAm5JEgpUpNmut6Bcqzp6dzGEnTMZMuuqhiThc1eu2JUZbhAR2n14oBG2PScdkX2Vjhx",
  "key27": "2VDSgYTkccqy7TebRGtorv4NogMafc9FDCBqoD9hnFtJ5iCaQc1DKW58hPbNwABGr5ATNMdxX3oCaYr443Vrtr65",
  "key28": "4HgnkmwBN42McGtqikbVAw3WCwTjYBNXhF2tjhXz4PLoFqfdtLmLmS2yMwdDt1AJm2a1nYcLhhY5PwadzCouKBKe"
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
