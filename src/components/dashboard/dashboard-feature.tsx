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
    "UcJKSCTgkMXja6ZcySxxzyd9vcSFKaY2ne21HdwgHWvRG1qzb39C7HTgrEBWGK6LgBhGDQzGh6wKsxb6YZ115ZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CtK8uJYLQBJUfHmrky38WKMqwUQ1aNQWayKivkXqvCemgnmUj6n79j3NtxhiG3rYtW1H9ZwQWp3o2AyqgK2zSK4",
  "key1": "24vZEWTxmrXH7ZYp7QuBtuCdWvhCsVH5zARALEQUAsSbUfxbLpK3UnmgLbrCEn8QEP88XZRRkTB8qC8yL3STftTF",
  "key2": "2qMfmB4cBFQyGKRrU3V7L9hw1RLYaZe8SNd12CP1SGH1nPci6eBXXMQHDduYskp2QY7ossxLqPQdVpz45oD2MKQ2",
  "key3": "2WaF9nWvqqwTeNKWa99ywjZ8TLtg7kYM3vZ4DSDphXy9onn6G2fZSnzChFUHMRgX2ZVZjECrGtsxSz7r4ef8ZVwd",
  "key4": "f71rmMb3FKKgxm3mDpfGX4rFmfW4wnyuR1wpaajVQNvR4NfN7r9epghyEpnYCpJVcAmkpdRK5jU8dowmQynW9ig",
  "key5": "2XKXQK5ffxzb5TywZxDVwUQpHMdVockMrFsW6eLhKkeZMi83hMN5Lk3RwLTL1b1T6FN7NBihe4c52fX66zFKZhKF",
  "key6": "2Jh6JLnKGj6XLsr99GmKd9dVUYs4GPoP6wJkL7ZJk7CqbydbMD1Vo3LBvzQGUEVSTmAUhdT8jx9N61Ym4KJMUDg",
  "key7": "3ACEtEz12X7N1oqKR2x95UvwTts14cPTLPrvsUJ9A2Fb3gWGahorAaQXMko9htx9z7t2HjxCrxJ4GFPxoe3kBxF5",
  "key8": "4Yzdtpjz5wFvFdY7626G2YRSeLL2YS81toQG1v7sSksaREpopbchHcujoyB3ruCWDsD1iQzCJcqeiQcDxiRTNG1V",
  "key9": "2knWXXutTUBaJGUhRTxGYn4cn7jAc1feywdmom4M19T272UBp9cEmjhaWa5989AxL1juTNsGS8NchjD6zr4VnSXe",
  "key10": "5jpAeZzZ9MNBAUjY3QoQBBxm8Ta6JY3JXewd7jW8irQgHjj2nj9TX1jfNFwjRMiuh5imoifDGEfDmjt5rasx9P8z",
  "key11": "5o1PcLvFmfsG13Qzsusffzg71jygaebY3aKTEgw3FfihE9ViyjsfFgXYcbWt4XrsWxLkTDnW5uLAwumqQugYrNkK",
  "key12": "4SMS9vEh8wf6M84yJtSjJ3D8hs4oH8mr8XA4xhGeEcaGGrhXbaZrhLmjMiSHnTaY3K6gSoDnc99Lc2fouToJgQUX",
  "key13": "23yQTao4t7daTEKpsqHr56GLPXaWiJTLTTYmTPUpdBwspUGpj7vReWQe32zi2miq3CbP5PEk4ZzjcL5ejZUiUyWy",
  "key14": "4B4vA8V7SBMM26gKQeJqNpLNH6p3U4xtsH9ZoNkLebKHEb8cBMFdBvz79d7AZ5XdRkRZKHpDbsY8cWCcLAEyeEJn",
  "key15": "Jaj8fktKx7nC5NNMmHLbnAnugL2pvmDpMT2qa5pRQbUv8dfQFFwYKpxLzKSETF9APxywoLHXniwet5o1B8G7cRz",
  "key16": "5Vb4QnEd2Asz9NroC4CH56sHzArtQg7oaUPXbHu7qbzWcEws7Ti8GsJtakd6nA2rG8SPnUXKqarBbSfL2uTXqoDe",
  "key17": "vMnZx11H6JUUmeoxSe5UQ24scgS5CtPM8VzncV6bYWRnPHworyLva2s7hejebWuP9ZwQMoVuCN7RRKhR8JsRsFk",
  "key18": "5KCh3cAXEvMqF7HMxHSMWv7okC1eByxS41YVwyz8PEvxkf1LozKedbMrTeF58UAHAkn6Vq1TQ66NaBquuw1xbGHi",
  "key19": "u5uPGQuim6jXnijRVCDdhU7HSSz2A4jMgxYvSBTFY29ocDp56B7gQQ5ztzKmebNTpgEK64nUENQWYPHmdXeyj2b",
  "key20": "64t7zLHjrqnKhvRTUK1kYUAUpiNxXAnsw448gxv4KSf19KUNrVJCEoE7J58mmqQqQzhud4jUYMQe3N5W8CPEsoWQ",
  "key21": "38mj7HezCwbupqTBK3iwH4vVDgGCC6SFEd5Si3qFHRfB9T3mfXiFBm96TxY5q8TM9inta3Eaf5ZrK4S6cqXK2KGb",
  "key22": "ucBKeqXzgkMQpWFNP84gkY9y9ms2Uvv5rnsPVsQuRboz5SE4KCs3XH4zu8BgUbVYbvxoghGP1UcpJUhWGij1fX9",
  "key23": "2PTZTtS2WA2sbJY5L4q8fZv358FQqN6B8T32Ynb7iZQiZQRZDr2nrGTorJam2RbZZAQxnfyKLbgm5LsBL3aUYgR4",
  "key24": "Ex2axEJVNRZL3TA5nMtwTTSJSiFbjSrTHZ2wdVqye3cTi6neY33QFnhtMY5pAz7cdkYBg3uQ1iKN7bugXfybKEq",
  "key25": "5nvMjQC6CHB5gH1ukAbCapjDaqmq8Lu3qdcQ1cAHAru4mK7sTumX1PWi4Zjyr4mTar9J141fMkEesHEW497Bscyx",
  "key26": "w1bRDCo9UPWysg5rkQzz8ecTfFR5qmkTeAeJFpMFB51Ed79VKRNcEgX7tk7wc1h3r6H8oaeTQ4R95AVeh13Az1W",
  "key27": "64b817SDotncSmGbgvzNQjrT2n7wydBvDTa7v578UzC4yEBCco7k58ZjF2zQgbBkeqCpGbu7Vq82XU92uVWtBFeC"
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
