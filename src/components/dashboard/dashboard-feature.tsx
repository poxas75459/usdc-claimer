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
    "4wc1Wxjc2Nerik649QohkfcVRv5eNGmJ2La9z9XtK7issMJmLDUJ3fTwr8c7Qkp6SDNiR7xxdXG11ZvB2UNq7iKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N1tShWrgdGj6Pr8tKJ17zJpX8VDNiB6cf29rHU2t5YAfUNf2CFtPFksrbruD1GV7Ub9P5HGVzhjJsAkGVkSuJju",
  "key1": "37543nXwPyuZ2MiXeRCY4ST2wPDuFZwfLBgTVH9DYd88XXUfnEhm3q7rd6fjGWRY2K1twQgTHxjBt6V8QVX5eaBe",
  "key2": "RUPg59YCcHWAsYJ5uprSrytyJgrz8qXmbSAb81kgxhBLHqqawUXk1aJEZm5yJfiYvPF3GzbQjfS1wE8HAYqY4sT",
  "key3": "1baaUaozyJXXKiEybqo3BLTWo2LfsqsPUxxxWnYCgKLziWMWDm94VFzqRF4dXSvNWe87EJRzPvVQvsNNHz6zLEQ",
  "key4": "3WdyNds4JbrPsLBrhsoMiP6tWkuuk4oVa45LMY7zUAYgGUP2XC8RucdQWjpecFNFZAiVwLN3QfEkEChnU6urvztH",
  "key5": "P1CWLa5cQ8Dnh8VxA1QssNbuY6tQscg9e13fLgZt9xtvVtzvn3r3evhuzQ3z4mKe2UhnJKfdB5DpegqvnpjVY6A",
  "key6": "jYdSG8MUez1RRqgRCbX6ea4MrX6jiBvUC6zj7x5B6ScEjFWa7CvMkph5jPAwmWT8pcSVdUQzWBGxjEiC8cnrweB",
  "key7": "73Cn482P3RM93Sv6TcmFnkBV6SLcUjGnPAAHtDpNzpEuLZe1h1h32v4VauWWPGAus6oNkcQWm6BH4wH3QStjMB7",
  "key8": "5zCz23xycUR4TTcPmcDbLH5vLyPPx1dPAT3xLSyr12ebzGf8rgQmuxCW5LNjjDb269fLoZDnM28xC2z2sVMQw2vb",
  "key9": "6ewy5G1x1F9hyangjwZThCv6R8TzHaoLtx4CGTTsQMQyWE33a9Nc23pQ4ooXCYmeiRFcM9FzHRz44VHcTyBruDX",
  "key10": "3QksUpJ1KGqYTh3Xdq3uCi63BSktwiLn348n1TBsixTvQWzDFRKVBW1KvpWrxMxLKtXYA8BBFLhxqAVEWk1rKzpR",
  "key11": "7NrN5mf2AmH3ATeucnboHEVcCJwnKzALE6nLf8AeXNjpPWhsskKU3Ckuuqg4fAvM9swcVLccgmqER3CJzyRtZk3",
  "key12": "53dC7hSNZuZd3Bs7XEFmXz1V7nhUvtYbwn43gMkNKYn6DM9sAYwmvbmGXHxTZ1tz18KcS9EXHPcTGeYB9RN6BWoH",
  "key13": "51QqM9ezdDimkDTn4whwQoiWS6NExaJ6c5RDRp4RqCMbZHSBVUnuVrKAVNJ4Khu2orR9i8tmkphoHNiUGSLwdZh7",
  "key14": "589chAAWurZFReSNsbBuU1toskZxp79KFrBBQE4Adx2AWmyWoTcLfzAF2EQ5UjTtigv7FLuzYrEu8h3yU2n6AKoD",
  "key15": "4LAg3rdRwskwwvXimSXch3jShA4jjsynjHHdaGSZFyRtnfx9zv68tupqmBEN5mEtSCMforrDoj3ZD85PVx5FUGEk",
  "key16": "fuujYypw3nKxmqpTZh1turpGtPHeq8gWCK5odP78QLZ1HG8F119isVB8PUJnwMgYRU5pooDxnfMFu6wAy5ozL72",
  "key17": "59DMoXxsjPgz2jBYVG5uQ6CzyBDvh5qtDnchF3jguyjhkpbdsBjnomYM2STPLuGzeTW8T1AvAH2fAn3tKEa6atzm",
  "key18": "454TRp2bYg2sNpzS1qkUueqjQuw1MLdnr9J99TD2pNJDXFBFKYF6yfihGNeT4JJxi6gNXNPCxWVodEe7icWRn9HC",
  "key19": "63LHy8ewxSx5EBM5uZMhukrJFNSToPux74ifrp4jJ59p17Ef83Anx2p9Q4SxAB1gZAH37Y58znqTaJsCfxQs5m92",
  "key20": "269KzQuE9qHTtG4cRX8YGA5iqrp6e7FeY3wGGyPdGPLb8nzDeqPVZ84a7GBUTfSdAk5XvdwM6eXHLNuzjvcgfkof",
  "key21": "5b422QK5x5SAgAhZxPTh82zd3zvmixfqT7y2ELMyQrWAXob8S9ckzS8AVAXR14M9GJ3b7Pv3fVxmFEUDms7sFakw",
  "key22": "1wyKR9NF4sdAwjTQ2x25UDB775jTBs1Zc13dbEnmSeATMtVBmPRxyCQi3wqwUgQBxwQduo9yANZzc4WXn6TL2TH",
  "key23": "5i7gDDyLGjgPEvBtoq1FMzHEAv7M4nEjRBkG7YeaQahpCQnvHMKK2MTd4UEac6DxqpJKKfJhjSqUj9s8nxuVKnPD",
  "key24": "H4N8DxqQnPgM7sJSriYGwkR76iUWvjdC3AgbKM7aRxRw45mzi6ZihzrGG5hbs8DsdSwgTyZdaEiSzuRHYdCf2pC",
  "key25": "2uD6LFcGtx7WjQvL75nej3UwQpjpV7Ve66XWX3UKHMyNvtnApy1vStgum6WuFpgxQHNc1ApZZBP8czv4WbFSsQft"
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
