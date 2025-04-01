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
    "3rwkjS1e6N9PpX9Jx1Q2ykUHzJLA62yGh373grMUeKoXcRwNvUHDdrY1p9n1prAi7qhMGcorpznTYuyVu2C24jnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zBX56efZ3L8usA1W8NWZuGkysMS9HhHKw1rJgnLFYE28oGXubcJ1UMNg44kgmtFUCz3Fms6Q3RminvViBok73Fo",
  "key1": "2eAELtHYzCRmFoAtiUgsWCF4Pq5vu3e6dUzcwoTgQLMBAXp3R6e4o3kzkPkHyTgNFjGJ4jcGLivKkqk5ZQgupQeM",
  "key2": "Dh2RMHQQiRMR8R7cv4kMr9TARNydaESGM57yH8sszzHhSFLyuQtD25W72AtuoFdNU1juLY1a8vv1Ua9Fbv6P3ms",
  "key3": "2q3xqgZ5VHXsZKVCk8WLHoo9eZPJGAGAT6dCUTcFhWNkPqZXwQWyhWuSzW1BTrxCxEVHKx29KdwjsL5PBgx5G95S",
  "key4": "2toAHjqffpG5oUhUpxMF7ajqHo8RxSbAdFEVjGBgb3v5Ms9aZWoNaWXcZsrQPQN5ZCR4kDV6dhvvFxcPnqY61uE6",
  "key5": "5JJVHx8iU3b5yLyv9xbP1WjVyYBEgjC8efzMXf5a6X8epk5HdLYTauhMimkv93u2vrETieX7iLgdhBUpyNWGbK7E",
  "key6": "64a8SksE5wdh35eXVukUWUFcFjpU8ycgfDRL5rx8H6dCxU19rYZ7y3tzSRGeLwrH5jwvZaLP6BaY7vasjqDPvb1c",
  "key7": "5dncFhkjc25mxiFRcaUUmhLcUQQB5BTTMEzdZLBdwyY2pc8nrWp426ECdQzuCiQUsnsy2BHVDpHbwDw9YrRf9DfL",
  "key8": "2Den1bZAAc4CthtDgospTGijGSfV3fYK1tPuQW3pTQQ2G1iGVEqPzmZyaGNZyBNm9bNVWZUYDEipRDCvStVU4uck",
  "key9": "27kqCBFUU32SPYDnChcRABfoDFBAQnPRVFzNYNSQwdFH4CM2jnfvXb4RYDJJkRbD48prt11oNHdH3RpmJnfrAf6F",
  "key10": "2LKnBtis7MS1aFDqtawDLeNV4cgyAMjgAw46TohxAFg6bb7uNAQb9NrD14b94KL1arkqafeN7BammGWKeq2BqXT6",
  "key11": "4fFHftPyaTE9rQXmBp8UAFetgnPaGL8EfguVdjWmymSEUk8JNvfLzQaD4y5sRLfcqBwMBukiokYmZYNUUS24hdLo",
  "key12": "2fXai8DerYXJgMc73i7jcnoYJ9iUtiRkcDarYnh7rmGQ2zNMVG6uLUCTXd1hArzJFF8SGzi88jPPvvahPjq46FYH",
  "key13": "4HoAuUHBtSogWgF2kqBq3QDfaFXEYosqrr9T9He2otJDEw4nVKJVKQ7vKo1kZfCPEQUgv3gFMkHq7M3gABDjgJAq",
  "key14": "ypQysWAJYRY3DPhptWxsySD35VRZYiiQ1ZxFywQ2izAnZPsDUuYDxigEzBb1N4BgM8FmZUtXbTrBTnuJHc3S7bE",
  "key15": "2FsZtTFCNjysCK3Rnvxq8gM4uXDq4DaZcfzKsDyht78UZhw9Z48LeTSbkugYCZhMsrfBKfpAKtzY91tVXdYUBfZN",
  "key16": "3WJgJ7eu8JVgvt5gf6TvNK4UCjJb6huqCaor1pPYzbqTQwuwJUs4tUpBpJXMZyHkNNuZEymiL9AzY8VjFLRBMjCr",
  "key17": "347iPSFNemQz4nWcQM8Wt1EUMvw4N6m9kMzjdWtm3dbtjjjfRN3meSb4dGPDeXr217ehgNGy8Pv1zBSHFHMJVbGg",
  "key18": "4H4CfdX5GNk6aQZjE3qjicPzY2izf5k33n9g7saMjq1G3yBTKWWDJ5Ta36ECBCGqMxAZWCSyGmHGGUkThUeG3gpD",
  "key19": "3nHwJPv1VAcFcWhU179xkZoekjSEKZYzBB3VVf81rZUfTy6P6aP1HbPHu26eJr9WXySWCoj8Z65hewyuqxfXbiek",
  "key20": "3jjtmErBmH594q7dfUNDBNEjuCHkftCfCNZh9Deyi14765X2ShNXm6o7kqPTjjFo1zgAycj7NCpZBKsGCLujVqSj",
  "key21": "5x5CETkfk7ESjEatnFaXKpAkBbTt84czu9epi9PzfNREPXi5L6qHE855ywvDLVY64FkeyvwaZxT3A419Vk9aMa4S",
  "key22": "UiXihTAwizDmcKLJXpSFQ9TwmKN8mvS9JBnUCffoPVnGoHNYCN5n8mjn1hcSzPBs3R8dAGdevpzEwxFe1o1gT8b",
  "key23": "3LPwZDgRJ2ikJom7RX9Axr3WiNSjp4BHqno5G8TJ4P8ztLfMcydT3v986sgNujzZEbpHKEtygCKiC2rXnpHRhRC1",
  "key24": "44FNXyZwf9rxoMVHAxFrNDKK3Ts2KGjG1UwRWyaET56WvVdbxdg1Fd68rQm166PD4oazM8zrkAYaDmUt8KcvkdSf",
  "key25": "Rqthb8o43wzQYYn9aT3y2bfrX3jLiPi8MkvvgVoCw1w6SGhYg42mxNZoGuXtQ1LamKkmX3RevuqWvQvXnLFqPfd",
  "key26": "43ZGj91gKeP4dFfUWHi4SY3rgzVwS4JadDdZhH6Mus73XoWQ9P6UgHh3W4U26Af2FKN9jAVinCk5LJHVuwKo8Rvr",
  "key27": "5TjGzEW94neGiXmER6Y7J8xN4kRVLG5M1kXkmh1797vmJPZGtYR5rfCLs9fMotDh12D6YJqz6D7Kq1qg6bFVqHJv",
  "key28": "3HNPtZ3d8CDEjJL9F7jcuKfHCQRp7k2Rhq9aPJUuPke45oaeQffvVLYkjDB6jMB7wBp9cVPXhcBDwYwhxw4pzG3L",
  "key29": "34ewutTXwCxWRNpCwaJ2mtQZAbGFAhDxZNfRz6SvFbNYsiBQiMGvmrRubq46kGUtWTpsjm3cLvQN6vt7T53dUrs",
  "key30": "3TY3nCGr3MzZZzKXEfSns3VCK3MCCw2HHY7r6qpqBYA6EpTF8UTLPwhPBcm2j7J4hY27bBoPNwuaJLzaY4ZeE1DR",
  "key31": "5eyPY91RStWVJv16x2bJyAW8cLJgizW74eyE8tS1kgPQVbS5132cFdbStpPRrzCrRU7mvHAwBvpCGs53sjxopXYV",
  "key32": "4NGp2QYog4YPWPLMnhtjTv6esc9xUvqJiSrD8qUKYC7n19TDivDCxR5MUhYsmgmGa7pToZRutR2cKJi39hrYGzNB",
  "key33": "32RGYmk7HntHtYYCUHFxbzy5M6tKqaKfzbLYEBPUDEuxAHVu98kEbudh6gRTEdJWMt3gVLCkF1pLSTDKHDcYX2px",
  "key34": "28HqHsPpwcXrTAYceEDnLPUrhgdWxdAbtXZGZdayYXudYeFRam5xKTq5dgBXUi7PotGANLDduQVKbjJ99LLbEtfD",
  "key35": "4PcDc81zo5XW5pCQK35GyoY1Vx8emK9eoPseuJz3PEhp5KPYQEikwQU99nRLQw5PPsbmDLGJczmWds75Pm6Tm8Xo",
  "key36": "5R24XTe4UqkWZag46zHMMTZzvoDqAZddCCNVA6NrpFXY9NKcRmKnu2dKCaNE3fVzPLuShmaGqh9Bxk4eg9NvJPXG"
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
