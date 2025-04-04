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
    "5pTXgY3TNdqmQ8P6Y6r7WnsV9YHRJrnVukAm1ekQLbBnbwP5vnPLNxjQAkUk9iszEbEK8YtHQ6X8x4Cf5qX5HHee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37RpPg4pUJkHu4tSc7mzudaFoDBjz2HraJh1ewprQ5QKGaSm9ZnQ4BudVtbL2PSW7NJ5xrS17x9fGGh2Z963DS92",
  "key1": "55LAwJD8VAQ8kojRVh8rT1uso1d34kyXjYPqpPsZBncQKTCxdMcACfE4UJMEsTLWk4rRGw7mE1Ppyp9KkDsCrzDe",
  "key2": "62DRKxHRyboqYCkxjuiryzYs1u2oPUNMUEy3T25yTAQFJ2j9DiBH3inf4EDtPne6W2bZffznBfyGZ9hZXMYzmZeX",
  "key3": "2BgdAyFByVMxN5Vi1fFhqBJ39hgj1FXaVaNnXgFGZRxjTBy3yz9HSFcydgCdND9eLMb3C5xRHXDzrRkFNxW4N1Po",
  "key4": "65Fagq86BE1Ea5WGva9K2vnFfKVN2hMhLQ4dBmyLGEWc3yuFT7wckRQwrHvaYKhr4JqY1GDACUFHxAVHJVfGciKc",
  "key5": "39GFV7j6vagBwQUVNWDJjenwcXpDCZdZpQQDJBiew7YB7ZW87H8bxPbkcF9rHdumanAH7WK6ersVTTY2N5kFnw4Y",
  "key6": "5MSGrHUosea358jkjqRMxtzt5MxYbtKHDeGJ4QWNZseMUrZdn5vQMK6bmMYYC6fQMU9vD39dnRcnqECpLkh2bRRh",
  "key7": "ga3BmdTAcJnUfsDEGpR15TX88RdknaadC6XcavGfndJuL8WXyGGZaYjUJFQX9y5GSvXqtXzWAT2YNXjxMZ9TVit",
  "key8": "vFdBP57M46Lt4rYZTFQuevZzj34z1FGTMT1aPsh7qrRZ2HHSvCRwYqEeU3dAXwFiAgyAqHbyGSEgh2MUQh27dk8",
  "key9": "5NMgqooTkG6zM7DwZy9pWp8D2MWfGGoWJQdHbRAABUAQc3CGrZwHBiPpF3aJQQePv2KnnGYdxTdWSaXagjabBV8Q",
  "key10": "295s8Tbzh5Khpk12BYDsUSEc66DHnuPidTfeVJMERS914nsTZm1JeD5VMiZVof69qHZczh7ZZ1aNEEz53E2uFQT1",
  "key11": "53NcXvemKW3A312biRrqgq1X1EESnAKeNeNXun6brQBiUdRp7xVKxhxQaGJHNTDX97PCA75HR4gtowNw5p2gAcBt",
  "key12": "yqWE5uD1fwLnDrJcZcRmPxfLWDiMXwRyvxNfQjAf1HrsEoZEqVs1gwhQXCuK3fpcHCANYbvBeXyGxbXNsQb46XW",
  "key13": "4zxKkePvi35QqfhkMAduLECbD6ST4CMcQYSWtS5ojZesuGqnSwMfcxepsjQ3af1G4gu4kydskqyA1snfg8iNWPxt",
  "key14": "C8D9xt2yyVaVMrRvZ4zXA9JPNbAd3L4wKb9ztXoDermq9a9cHNZ54cXKW7evLFCk2wR6MTHoTA1dswuf2DgMAHz",
  "key15": "5exeKKxm41mSwVonYvXm8FyJtv8CaSNrfCZpxwEwsbLxbhZA59ktYLNqUNUuUktYcjcmf8AeSMpZyCNYh6hdRpZ9",
  "key16": "MhwuwZPYUjFng1K3vooGd5yvdpqiQKgkVu4gCJ6CHVmZuubJdXsvqYvFPiHi7MhTGzsdVKpweP9xZeAt7cLGbsU",
  "key17": "54GXfKWpzyedWiZRcvJW5rgw87aroGkt4kRPDtDYtFY6T1iF5BmEJpQGpS24UMstuwhsCnuXSNHJNYj8b6ENKzWK",
  "key18": "3TRNutbeavEJaKRqABpLo8JKhgVkgApEp8KbWL71K6n6oETMejk9caqLLzmd8QAtf12c47eXB2n6reWMYoDHRtJQ",
  "key19": "3yjy2SbHGXpPnimEWvdpvvebuAE2HoHfUB1fPC5NiaqgyCpWAsoG2FGmpjNTxR5wMKA3H6of1Cmvi5ZkXpvtF8rj",
  "key20": "2L5LcLZ4fHtZXWa7s3CMGyJqX2x6vEwmrs82Vitopj45LDGLtiZ28J1zNb4PR2WRDVBJKHX3yVphCuCYxbiuXe91",
  "key21": "2hZaUB7URDRyqqstQLVLKNBXn9Yg7kmKBpeh27nP6jdhY4xDuCxmZLVzMDfajWoFF7xZucxEJz84v3yj6qS6nVyi",
  "key22": "3uj2Nepc7kerCoKvPwPCWrutU7NkNYMD9hzxTApmdS7HQhGZSWoK3RUiCfx9kENiTaKXYkCCbFdqkzJosPQ2xjEh",
  "key23": "2RjtURjxUiDDQVMsvr3F6xjcFpgerT3oVad2m3h5CkhuycgPKJKGZWDrd9gtkHZdLfELRNAXVYpxR9bg72Gd3bgh",
  "key24": "4xjBJt84XqkPTvH9t98PiNqfTsQkqNh1TaaDCCryWrhsjWZ9hnzThF2ZyGrhWg5VA11o2nEvukj14j2S5ZZUVEzF",
  "key25": "33kJx6VFuqGS3qkpo11jTDwrQxLT7CM7yfxffUhac6dzCk5sDghS7ya9Uq7pQnTXyr3b15NfMh83bNtiA8PeDJXu"
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
