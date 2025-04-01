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
    "UcQv8zR9bEL4fTSsSg9ayguhtytQWs2DoGYTEtvMXQt2SLbHusuVW2kSxmZgmiUXAQuAXF3FauUrt3g9DtDBEEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nq7N7YCzhdUFW3gwwpPMUFZAGNEHHCSV5ZRR1sE5hfBYaecQfoMdM4kdZyQBrJue5QZWv491LuZfkjW6DW1kTnz",
  "key1": "3fguQnL6N8swNpd61orvJYERh8MGjUWVYkFjhLr8GxtNocqaHbb5Lp2wvsc2By1aNscqWzaiSSvZDtrXgRz1nz8V",
  "key2": "66suTkLKcJjy2YPfhHi1Pjfv1Se4JiwJLFckW7vSgxgnm3WHNB6Jo5KnQL74fC9cKa7wvSfYL5EkgVDcLgpVNVLa",
  "key3": "G9yrwqjeMLKUwNWSfo7DvHgwj9TcbjriEWFAoKS7TQR2AHR7RK1BUcisZTdJHDicMFEXN9CC5EC2kxhfBLwLvVd",
  "key4": "4t1Kth86zgq6T6FtyqEe4DHhUWr4313hA56eg7bG54CwDmeQYU3edvokkzZuAWi4Hn5GsY5b8duoVja7uo7ac46S",
  "key5": "2fFHm4R4QZ7PoMLRLBUjgcZykSWRwKUcEUVKTBBaD5CnWTfzcz3QBMbfiUPZoT2Bhn9SoMHqMj1nvE7V5bR5LcVC",
  "key6": "4SHLaK2qBn714XVeBmMJLoSqLki6esZXYKrzXHeaqaNWhMEKtV2jkM94MjHXom421D5pJj9NnqpwafsW1Gk79hsc",
  "key7": "54WzXPJjE6vxXXg9e2jtDi8ndPm25stqesDWv2kEDh2C8r49Bzam8oczEqWrq3sxP3Zhp6ZGuSaYvgFFCHy6ZLtD",
  "key8": "3x7CqKvuRStjcXGBJegC8JKVu3hzXyox4qNLmpbpHDSmaeJktFhv43M1jK56GXeT6ymy2y8AzU8S4nZ9nt8D9Nsb",
  "key9": "THq5wG6ghrshM59yyfsa2aitFokj1WZqdM7FEEZwSoCZG4RxUgmtVDXonaGsxFb3tHjoEiewg9Xy6ktDTQYjYzz",
  "key10": "4xcuUkroDg1kxurLyTf6bYauyDgUrnuJX3VqLN7qGgqjJVfk31NVQkmweq5MKeWjV1iYKAx86RSWLSV1UrMBt7G",
  "key11": "5YPM7u23jxCiziAxbYoL2dHiXX7hxnzhwqyy6vw7oLGhecqdmjCVksSYDja7TNagkkWqKnS7oZHyEqfdYSKshHuH",
  "key12": "49KFYTj3shfocVZmnpLw3RP5xDLdoYQU5eyE4CK6RPV4HnG5TYevtDEnk8WLRqtJg6EKa4zN5EGfTr6qMYffnC66",
  "key13": "3BsXE1PXjj31hUxHXiAkBKtaRpjpv5frnrqsxo3XeK2KVZ4JnA5SzXiUYUQGqGLVAEj1Um37XEye1fZKaY14ZmUa",
  "key14": "2WzKTn3X2cm2TwfSnriG1Nn3KsbHu1yv99EbHcsi6LXCBXpgNPBazGStGg2pxyeRFFwciEHKevycGcuLF24ME9d7",
  "key15": "WnSaCi46mvkJctwX1zusCvSad6q2U9CHTmmfdh6MyFGddEYyrK6AjvG6kjApoaisXGu4vxXLK5f42hdTz8WQW78",
  "key16": "3kV3oppGmGRrWnYozve9hEe18j5A2sSsvGfdsC6LYbQnhwSuy4FskG8BFrmBfzmCRRc4rRZ49vikrG5v3ooKYqqw",
  "key17": "3vJtxrfZsFbdhzC23wvf95rjYoWkSKHqzgYZzJsePj9CYJB3wNmpYvu9XnDmuJao8jv3zMdwbgMquWr6AWtWmxR4",
  "key18": "24giHiU8amMc1B8jCUnmPExL4wU1sUoKVg2vqsALR9kwVZpXA54qQdS8foRSTjXYYy3XT5famvF1qkaeohW3zBGC",
  "key19": "2eQFrJjRHJ3bnWm3ywpLscfg3mVzbYhJakSPeGhWcXMSNQCa7Af6jxhCKaFhA3nQQfgLvmPU9Lo4Af9AxNF2JprG",
  "key20": "4rdHhxSZDxfC9uYZJm4oK5MiX4b3RPtwLiJRb86RqqXqUrCRuVncaqoMhssGV6aEzSrrw7Hb2QshHCefDZU7yz3R",
  "key21": "7FKbzrsb3hnAJhNWg36BY9jXuaV53sDBjVAEe6o3BvcwAntvNpbyz83u3cb2CUbLZPyxeoJYHSZ76bvUZNBoer5",
  "key22": "aYLq8wHAhgr5gJ1uuxRcsEVDgX6U6Kyk3Nwe9qCsuX8ojbo2Q6Q95jhVardecPsvk9u78Rwofs79ne8NYH3SMtb",
  "key23": "2y4Y9cgke3fd4wDB6Bh9kVCK9xfoeyDqFY2eXDUcVNKMfsZHUcMwuihB4ohXaQ9dLegsShgwThd9YkZSHQNn5iHi",
  "key24": "mup8T5TWUvRZmUY39GWkxGhrusXSnbGiNMhiB71qtzWGfR2j4HD3bc8QxNKPQnt12a4ksVu5PoUxrwhkmshwfWj",
  "key25": "3x98PvoARAmQaX1ovGG4xHbaxQCY4UYZjXh1iDFQPXaAyFyF9b3NTNz2ntmvQ9qQk8316pnNrAJghDePgYyiZFYP",
  "key26": "2yWbFeZQbXZSm5o8wJVmgdJRpXHoUhq51g44H3frKeCiedtMhYF6CCmZuqh7FDSvWjZk7yPQ7s3uvVC1XpkW13Wr",
  "key27": "2pSF99qrBsQ29sKE1weoUw8RNVnWu2ysGLtmbqrxZKB4j3bopqdkbvEVbdDfDHCuygx4fPNs1GnWW3gx9WaZ5cYu",
  "key28": "4SMczLrHMA98dRtXwNZZJbphn6m4EcQfJzDMNXQgtzLacQY1JNVjBRxzsVsZKxEdY84XjmUvVRE9PAxD1C4dR3i6",
  "key29": "4rkRxVwner36gsr3y93dKaARt52fLNn5o4yPw7KAsLFYYo66fT3SFGmHbfSqiP3m42LrXUnpzHbuhcYE9kvS2mFN"
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
