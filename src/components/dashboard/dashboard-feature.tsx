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
    "4inU7pr7VqkWDwkWNfxc3JsVVD5yyL54NvUxLDHs8B4YqwaTYuHmMYCYmY68WN16NGe5o2G3wpcuYaYvdNUchoAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DByuPRbtSrpPk68hutVwtQ74dr8c3pkCo3zrgXLyKTEscAKxVxa5MBR9QXYmRLUtvsMm5qyaUKgychDdNcVFW8L",
  "key1": "34iQJoVkKTPzyZSx9613cB2m675GRh8TLMpz686bVYd5yzdY3s6JtpyY8WWYDKWCZLqAPZQnF61VyhHRjYcWtbws",
  "key2": "3pPC8RhUBW9qvquyW3ufQ11s8VfKAhXLJ98H9VZdFtbQXez6Mp4cGiVhbwmcGdymDpVww1EbBYsTokStWg8t77Z6",
  "key3": "3Kt4DAn6NUwzzSMcZVdwbKgtcprSy6c6wx2YAFZWDLyimRf3VmcoTNvrwjGxEbJsQGTVzfAx3GF5uAnNFeYrjSUM",
  "key4": "5ChFmtSnkBqyHBiBaoQTfVhEVdiQqG8n9JFFAynuFQZfp3wstgSENGHw5nfbWeneokHk6zH22iJ3cpcWZhLnQksj",
  "key5": "d4XBT6aWX2wmCNNmfrtGWHmgG5KwEcthDJZuh6BW7JPgatUt7mJMxCCCVbjUdPSxwjXhrxmmdmXnEuSCeDs4yuh",
  "key6": "2F3pPbf5dDXqkQN6Qm9QViQ7Qf3LLgxHKu9qXYR82xVfJB6N7znz9QAE6UDuXSoxYb5nXaqk8hPLoHSUdDyP9v8X",
  "key7": "55HYcSk6bQFtmNa2XiapS3rYe2PBkB98TUHVoCmkZcXzpAML8FikQUPUmYbNFmbkyikkqzucccUfG33UZVDaGc8v",
  "key8": "2XdkcxVWuiHEatthgnuHA7oKbHqLm6Zyy4PAEHVEDvsBKHLngjkTYu9dTuiNRR4Eg7LpUW1PWG4Wner2P6jZY62x",
  "key9": "3r1LCxisGhuxXofeqBX1CYGX7L35kEtLQDt67iW2ieFE4oSd3Md48tMKpn4Aq2kNJDR8mzZVpnxjKKkBLA9pDVXf",
  "key10": "Zr7FHuK7WshNGJqzv5Dbm1WkufAbHDL2WZtLkxA1iv7wXa6oqFkM8Dk2D1kzy1RmTiHtYasj638nZTPz4b3U56s",
  "key11": "4zYdK6TVShrswoTRQBbz8iayGLQnpSupYXG93VzvAWeQWZk1fkZw29tdLFeKtLKu4mnpNHuSKBpHnAvBRjaR1L6g",
  "key12": "4MPcWwSEshuz91osx29JSAPUYaoyPyBkyva91JbRoy765VN2cjmwt93GUNzcFB78FqxQiGwctbKnnUkH2ErkQqza",
  "key13": "2ipQSSSBH6bsPyHTbHEX9F4wNFVPPcDobApNK3EVBY2fiQrfrqfisPEUNqja7zV3Z7MXYwzFVwCCRtvsxQaCZHUj",
  "key14": "UcjHDk8BMLXt1g9itH1AJfPdKn5DSCHDHrmFHgoP2EpKW9qRiixWgSnakpwRW4VXa8xx8emSGaB55ZwUCt1NXCP",
  "key15": "2hL9UD9GtLUd4V3cMQvYAa3Gq4m27LVE2zu6cUeVLxLi2rbv6E96Hx23sHLsEL55qBX9utSMdomqTp9UGbDhyEjb",
  "key16": "5iFHaWXJbnse8j561BtJzjD3pNEkEycNjFuNyS7x9rNapqToDMuHs8BvVpJegKmGzYZs4qKHpvJciLYzresUTZzT",
  "key17": "5Lhxee4ptxpSMj25sDQ2AhWbZYnwCoDCZsNBNKhdSjYbz7xiZ2VAEaeqjGybU3ke3ujJV15skP3w7b7zbQ6ot3Bh",
  "key18": "4rzp2md2gpWSuRe7dELehmH2dnw3v2UWJHp93ASPhBQRm4buLLp2bY6VWqW4gaVPzV5wWpRuUsP7rMNQMV2dH64m",
  "key19": "2dYef4Rqfxa9BEoJxQtqWcLhKyXiBcw1GuS6hop9eow4Eqwwzj3VZDyZ1jeejfTWNtswBZWojjFevffeedyd6yrM",
  "key20": "4nRPHQ3XqiJZ4EwGHnhnyPauhNUvDXz6Jdg35HzSKoF9gZMRE2b6yNXJyr3CFfXM7wHbN2LVMi2Fppx1AiS2yCzq",
  "key21": "2u2hsHMDnJ9LoXr17fjYhxpeiW6zUabBtvHwRBsnaHpGidK69jRXa1K7PEpaVgrg6RafhZVEa6LYeWU4V1jbLYa2",
  "key22": "76NuutnG281rvNK13rGbuJvTBEk5xjDapz5rjgYY21QcwNr4ro4U8cFKa7uRpNDbisiywntexYkvej75QK3qMQo",
  "key23": "4QRyrmBxbkxuEUvgTWA8xewGRybxnmTv9vSqZspwEKRB7edS4miC6yRZGAYFi2R8M4NMfL6CWhxbbj78Kvv6omn",
  "key24": "KZy28Lg4LetNmSFArXV1Mk5EbTFQxjrQdajW4xMLrepyFw9B6As7y4ATCWWWGcvMXzvda9eiPBrcwLgMFYBTaRP",
  "key25": "4b1Uxi7RZ1RQbwmi2JB81wjFcRZEBLZHSHGxZoErVzNWZPjquY6JeUAfCjiycueAbobZ3rt8ZKgPP7ETfed4ydqh",
  "key26": "3yTfwJwC5q8hnt418V9sd7CwnW5oMjnXTZsssx8rzbEMVCtSmESbWz2nE2nH7nGpK5S3JrbamGoPjof7GxSpCjzU",
  "key27": "2bsY3JYeUan2V27EvQE1mJmP9GG1LFpzzN8tmzAt1Xxovjwb2pWKfnp38jeLoRmG2bkxA2wLRPHfbsAvN7oJATV8",
  "key28": "2Y5xtZrJcKfPctCoyGWRtDQ6tWoJR4bBZ57uq3de4uMjWsqoD4jgk8FLafu11ETTtbBdBVqYaS9dpv7p6ipCAZLp",
  "key29": "5iDNmBVVav42kMR2AGseYvJQYs4bWawE1hRsdEE7HV4JV7JsFY6eYsDsi9cWVk1kK2HLmxR3X59hQiDWuHrkNHkQ",
  "key30": "5NdMBrZZmDMvTc3DcTijSN8pMxrD1Yv5TVp8PGtbLLcUJxMQVR254StpjUhurdxDpC2ofprSfu9ZuEJsQT7Lw7Wd",
  "key31": "3zQfqGMhvHdxW34RwjPq6WvAb6ZGhYs7uiCE1dMJzLqWNfqfsY3X8HafTN8rezwkW3ekqPHD93CgULubRq7cmZmY"
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
