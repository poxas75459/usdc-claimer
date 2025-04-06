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
    "LbCDLUPxs2Jhx1XNiRcPec3t1SUiKBxGn6JgQxDUARHyBj2qZZPGAHopF6nuygoAhnPBgYSHXeP6SX5tc97XXCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AjYmFeXVAfoqw1JpYtyJcvEDUbWfcNkhHWr6sPXpHQdvzSCxXBxJtfPboHnBLxRfXgdUqRcsYjaWobAHUPV3znU",
  "key1": "5GJ2W2WakERvutrarQkmBuLsB3bycYoi5EKffLtzHWpvKY6CSYSu3djeBATcUb9hdjUjUxuLwABz2BwcJnXQSaAD",
  "key2": "2Rs92pAeD6Mn7YKe15LPMzVF6CVPimR3Au5JJHsUk9gE6Lnq1JcDs9htqpSbS8UxRbZGjPe6WLCkdVJWC3H5Jwrg",
  "key3": "2NYUoeV7pffbAXBLfbEAHjmq4h4nzPvjBtsE1TAip9VntXhdmSEeSxm66PJoQqaiy4D8Ja22V2UgyfjJMU2gejd",
  "key4": "pdpQCPcswEz6JkNQ1NmuzScRru8y46UMMCu7GiNeRXaUNEbPWzKB6UcJaZjvcpds2x9VHirWTJZLBSATWSqWQXX",
  "key5": "3PKkiXBhDB6fW95La4nQ5DLsB2YkRoa4cUpxQyY7R532WxQB9ueECy1yAo844Sa4hWx8bctepJ7xfy4N2aimFhhT",
  "key6": "5jSYzyXK6tQZL1hCbKwpiWc73GhbiKjZBFsz7j6bu2cwCL5GF6kYmju8KwsW8uK2WqFh25Bfd78jmQjmmtVe2TFv",
  "key7": "4yEngTCHLSvdVvba92Yx5BgcoX6ujHTuwcuwWzykHEm41sRKaxbzkV58o8tLmx84x3n5FTGRXff8Kk7q9r7WT9bo",
  "key8": "2Gjzdh7pBGaCo9L9zsEqDpDnQEwbiT5d69obZTRrsi19h72tPT9p9uH1sF2PHg2yAzbMBfyxqgySsNXgEUKRDLra",
  "key9": "Dzaqwgd4ahBi8nF964AiQMKveAHm7ThzbsiFruXLhy7tfGsbZkFXZnqKUzZCWLDXr4P5huNb1Bg6dfdDMWRX78F",
  "key10": "2qmaH8sExvnsCEQm4SK1crgPNNh8GkRCYbsDok6Uu8njUAH3rGkLrGvn3nXMFhpkvg6sihfAwwxZDEmrazGrhJ6",
  "key11": "T5ibQKMi5R4zwDe2LMLpJn4ybU9kjQW15u6Wpc7bLQ427WeXxsYrQ1mKFntFzig1jznBtQWupRaE2ijjUKY1Fsj",
  "key12": "5ajTyvp7WMXwguQUstC7RHntm8e3iKSLcFgckS3fx9E66KMJjhXtMCVfSwbRXP2nrVpEjYP61rGLx3ya4fqBUgkb",
  "key13": "5iBuvJrvYNS3s8tX95Mz5e5peaskSpk8tBYpQbps8U11L5Aj7Sir6PHupwn4mwvS2NYxwyqrJWKeyp4vmkusRqLj",
  "key14": "5k4z9ywxjvUAvV5mHVJGD6wx5gNLor66SMVQDQXSArLY2sEYfmhcFZiMP1RW9qu8dYtU2eVpC2bD1xGu7QDfnZvt",
  "key15": "2izLoWLZ4xrB5KRE56TQEJ4JG163vzpvESm5m8jeVCycQ3DQrFZZQLnxMzB1NgVPZVUDA6k5s2nuGmAEaTgHVAFy",
  "key16": "2v5kU2FobfLBCcVui7Dj2zz7iT7qTt8mjT2KDdCitKN47VM83MtCmxwR3UCegDyqUNtAT98F6LqBqXwZmMpnUNGd",
  "key17": "3jobzkeMKNEXAuHDmDoceAGuxVNuUN8ceDpmwCeBPhBiaQv7cYQiCAmuzAeRhra74WsJRsGxY497tBsF7AePUSdt",
  "key18": "5ARbyTQbLM6QuzFk9VEuY7th1FQ2ksoUpH1MXiADh5GJDtw4nxYZy6ombodj53Z2zPxpGVVwvc52Vuc9RRgydEo5",
  "key19": "5amujDB3WwSJrcBvFYRoSu88Ug92nMshtVtEYYv21vhJjtAq4xABhWMLRHU3eDoQ2SXNt7dFjFMgqtAiZXa8aqh1",
  "key20": "GFt5Nj94tMAY6X5JQwwAkjeYhBv5gMfnNdb5hi38mDZC5FiG8szEysNhxymA9wt5SYHmYDyAs67mZJ8v6mw6BvE",
  "key21": "fzWdfWPmrygyysePSh5rYf8nvyQG4imA6QvAvZQjyyEjJRerVCDa5BxECtkXzhhjK3GQQxh4bJZqztrfTKqVNKV",
  "key22": "4zACrLm2FQy7uu2BbNDqdUhFDhaL1zAEZaM183Z8w9LJEBQTpZdHYbshktSuLMXBpFDJ9Lktwio8BtaUdaqPgyNd",
  "key23": "2C2NPbtsMWhWKG9cXzYk6Ga1Dp8wDwLEc2RJKJtbaHb6rssSqxoDcMgTuHruY4zENCWMZPGwjjoc7fVTh8XQgfNB",
  "key24": "2jnvSVj8KeiYgwGsLBwqiQoJ417osLiXMh1MJ5WMgWSq8a6fAKvsFyJKsW5aoKm5jzTHwz4jo9zY2jTHaAX85k6x",
  "key25": "2qSQM8MkGRVfN8Yoa4tGh7AwEK1UwRXfZGXYie4xxZj2nnLthQeaVTkag424mYm3GbuNqQyLjpqcGhi2NcYmZsKz",
  "key26": "31n8hXFTNubJBiSiJSMB6ZrqqCPBECwW9GkjS65R96M1qdgmaMwUBXWrDC3ZoHWyXRzipAW9CEppy3ZN53zY68yu",
  "key27": "MXwbgpVhJrCvYyHwaZaX4mLohSW1eb4P99zAqcat8DX34N24EXynkjwctdGZTap6nQpaowAFY5DWsqSHn68dvdy",
  "key28": "4ZLXM5KEHx6DKSHLVs7CrtryKP63MjZjUUQraFKnAe2RtEqtepiJ3hFgvestd19FdaYJg8xsD2WJTc6zyxtXcS3Q",
  "key29": "3vayYYdbqti5G3hYQjKX5JUpakjZMwiY4nA8bqqT9Yoe5ao7hzM2LMKUsmDAmJnQfj1AaV8MB5cnfk4t4D2MQKdL",
  "key30": "54L4dm6k87tSSeYTnT6wetcF764F7uCeKvXm1CqLmibQs7D6sb9Mo8vNrvsXVsDKwqNYagYMFdCESGMkraLnVXaT",
  "key31": "3S8q3x8rQm7VT391k1w7yqdsboKBXcVpeoF7WwMdnhMmjvkE7DPWhcfzkk22T4z6oMNrstEFkAosaeKamybWSMBN",
  "key32": "2ugkjQ85PhYPA2VY66uahXRaenspUdD6Tbozn9RZR6FATRJM3jKyU6c6S9413dEB3kjcGeVfU8tvKzMXeia9SF56",
  "key33": "3g5utQC1UPoA6zGtCp4x8F1KwpNYSzvVR9jQ9mmkXgJz2njRhbr1anknZsWmyQNXTJmWH9PXMKeaGRuJ6KN9yeT",
  "key34": "abHeMRVCW1qZT8g1Lqnx6qqb5QFHgSHDBmVLrf2S5k7wzp4q6sYdzhMGTjDNpedShAkBP2exavZqV1LPEXhxCaQ",
  "key35": "3eSdjK6EpZVS34XTGkypM8NEC5rZsbcYNAoFaHWEQ5yFiyhcGtmTgyuZVuxE8AWXr1tRppaMdgodGebkFS7iyPWW",
  "key36": "Yh8npLCpY4mrBqJrEHKtpk7a9GnEgvWxpqPfnbxomd6QLxiSFrnG1rUUH3Hw4DP63u3h2c9L8m1GkUdgcHE6vsw"
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
