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
    "4D6TnFuB6nYMyZYXrx8c76horAEe4LmTPpzMbTK2sv6s8YvWZpsnDXuxC8FvvgNvcDPHW53PAPsu5mMcLLGxMgQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vNS9A1SVNFhKU9Qvn8pffQvgYEsJJf9wnT9XSy1kCP7tKZbzQcQcsLcJkgoienyrSEtL256XdhtaLXhypcNEFQ2",
  "key1": "44oF1V8iWE39CnL4FErA2pxamMQtYBonkrASftDFmvaES23qbrVihpc43mSjSeF5yMcsXtYn7QDbwLDu2cQ5xhQG",
  "key2": "3NdiLJL9u3ztNo8FGppTGVT8rqM8TcC1vzGSMLyJFvHZThjr9safcTuo22ETw1JnjKztmJfqVREWt5megePMZw2s",
  "key3": "4MTKU69rFqfY2hA5jVJ7ayi6rpXYkCDtBunMiasp9kEvV9cf9GMthbUaM4LqzGDVCiUYa4chBSkkmL3i7kxCWvc2",
  "key4": "3w89fdygrEyix2nTRDxX5pGK93MNCdZybdHeYML9pC6ggYACNZWuLfR5Luf2tg4a89EodaBd3yYvEdiKC5bnFodZ",
  "key5": "3Pw3nFa7zDCovHbf4ZmrrbXCR43ctVruPp9YRRgbnG4GTcCgNMoNDfCkNnEJ4fR3z5cXKemhsV5h5Xx9jGmsLx1v",
  "key6": "2bPDsSynGqDJQZHo5a23KMxY4Z5XjxvW81ZSpKyzj3CtLaWXscejY3SWJk38QZdG2akKKANNZZX1XM3Rme9Tv9jq",
  "key7": "ujncaQPZuJoERV2UV1e9fzvg29XzMtZa1zzV8EX4AVxD1J7XJ6E7amKazDDLiZXnApYyUVhJUMurmmYUEuPFSDk",
  "key8": "5pABHxghyJHELQYg7WUrny9d4J2DMYVNWwFY4RZkNmDbS7qPeU87qcxBbxcF2WLKBk8ovF7BcYXUANQmg5N9L1GT",
  "key9": "6DGyGsWhotLEg5Dhs18LrUKXCck8KWEf9cVbrj3R2M1crN7gp2VHXVMZVZSuDMPyU5zjMu8an7EzKq5VeU6qSfs",
  "key10": "3AVKfykEua5k7VdcutAvuq8mmafZwPxznyjXj327wHNVdaRF6QVeGVn2PRFJQwH4ZU7aBAYpWAAQYenxQ8SyNkv1",
  "key11": "3MjrFkkamntqKUPQLgJwo8YWiZAea7k6uvzqNJxQnQrw5MWHv9ZJW47bcwefgsZiNtsffa6yT5ByCuALaVsydgMp",
  "key12": "2Q8NYRxS2DndjMmPAs9dwVv4MMkyXffDMCP5WJWAuiGKUSyNaZqZpeMWRSKByfETxsGNcPFcG7CbZbYU6efuCGhh",
  "key13": "3iYXaVAvECtjhDPfnySSADcbdu958NZomhDtUqbwqRaBtKZHaN33fhnTgSo1zqqA2HhCz4WPDi2HLA6khBVXMm8T",
  "key14": "5w8mCHZKGzWpvMA7PUSxjAgnfGTATF9CdhxEbQAZgwcNJeXB1c46UYXbW9LBPKfSXKzzq8h82PCBWaW2LPGNsUb",
  "key15": "2bJZwsaJ2EmqET363hF6azNEHQbQjUZPcMyyhKxQ4zntfnQuW2oVGqtQWLCPz2R9wHwFpKy1Z9XDu16dSqC7XZtv",
  "key16": "2WotaUkMykpedpVRgLv3RaSwh9ohUqjs9iXvPJtp3kLu6M2c4S8PDa2pYPmWnaU1MgGLqvmVRLsy7bhdhrxjzuSE",
  "key17": "67CNdzXeat13BDqcehcc8uuVnQUa7H1QQ1RPxWD3izupczdMGRiUHnKx5678x9jxZnsBYnZwnPFnQMqzQF6sMnH6",
  "key18": "3u1qYV5nJbYXBBafaBXzyg4uuH1ZdC5qrF1x4VX8o8TM5qN9F5g2duUyEWxmnP3yQktqJaibetzxeZVwZW7PdBEg",
  "key19": "4Xp8GA9Craip6teVCP66Xd5vtzsAcB7fYNkKnBLJ41KCEWfJc5DRgqHrKTaHEb9Tx1Gs9EPLkDi4Y8ZSn93DbXky",
  "key20": "4PqMANSeP6Fy1efuU3wkcL854Czsc6gqbyfkRm2dchXe988J8Wo7TPeFJAGXEPHicg6miezHMVWYpDFSfQf8JYvk",
  "key21": "2ZRF2yVwovrfEEsSK6Ponz2DESUu45wzmaLaCrLqZo4AXWdtG77ed8cx6BzVpL7K3X65BXDR2Po9C8hefyxhqzE",
  "key22": "49m7r2UqD34VHQuXeEXbEoMZ9vbAjiEYswsD4NTxgfs5cmWsvfydYT9xA86YvaPKBikq9PVnUxjNzLszvpAtGxJg",
  "key23": "48PjJeiaCE8Ez8NbYwWGjjmaSaxaUwdN61V7L8uPg49QvgGCuFSqBGf5MENzyykZtbC68i7KZYb8rUzBwEkAm6Qo",
  "key24": "22JBWfZsZWVxamUuCCne7GVByXKeXJLp2jyHLPazcU45t5YXT73jb3d3kS2TinKS2HtK4fsg6PjdWuZuDz7ot9VE",
  "key25": "3G1V88L1J8HVxJFETLxzdLv59Pgh59Xhb38Jig1dCntcgnq95GS6akD6ENM6QpqSXZu6dKuiyq4X7uJQepbxbKZh",
  "key26": "9i7bPUGFx7JenfY6YwLF4HZfCT1RKfQe2Mxh6zT2VjNzAJhtUUgjN18EMvqUqsEL9xH7R3e61e2rPgruntiS8vr",
  "key27": "XtAmzAe2pmht93QX5c6qaGCbazADSMY4UyEs5ZvKAVBePNrp9BCZFMUGsuLugaHBjQZVz11dbUUvBH6goE4Wdvt",
  "key28": "5u269uzhAiiuY3BLyNLmW7H9mriC7qTT28EAdoPNtxUwTE1V4hKowFcPg1DHuFQ76ZUAw7iuAA6ZiLdFnvq3Da6B"
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
