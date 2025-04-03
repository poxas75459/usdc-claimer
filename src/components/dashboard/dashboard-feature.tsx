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
    "uzSLuCJgxJapFkfLf6LY2rsFPLocavgH1wTgMxzJhwz4AD7DaMY3WZj3vFptaUEpLPnmYYoTH8F8GCX9Cot3WvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KyokPrisi3pfLZzdMujTERNxtSXkvFBWyHk65s4FR8TqUtZGmjKVAFsUfueKz8CMVEQQnb2koke527RbVcpfcK8",
  "key1": "3eky8N43HZPKpQ4m7aGghzrGqxvF5MidvqrWFRd9PNSoRfzw6wNwz7GNPBpErJhtp39SWBHR6hQ5QCtZtmi8tVD4",
  "key2": "5FD1QnjchH48FgDYBjdCusfpYDQtJLBD9X2fYGhkfxnv5cWrwGYZMcb3yVdQ5gKZeqG2VQxgXqjnyu8CUuMUWGFv",
  "key3": "u1hwa3DfxUibj64YzVYbNEZmL39NrFg6zuY6kGz4Kam6JRe4uWJcWR6DG7JycB1mHzXrk9XjDEfGBUMZg7uABRP",
  "key4": "66Lkk7XwVPQzbxHo5w5K2o17mZzvzQT5ay4YG3nyz1YNpij6wrPf5AK3ydb7z2x2SsUor2kdVp8fYkHU5w6wF98N",
  "key5": "5xhZM5ThARvHatnix2495wcGN2etS1dZHAyXCqebTT1vDSL9maD5g6vEesCjy9Z7AFhbnxwPFFf57ghDxtvzfyv7",
  "key6": "3VCkHHei3di4zdWj3GZuz6jtb47BfDXQ2gNo2PXiqHXEhf3Ks4QDMDaGggPQwoGsjCphuvUJt1B2uHQAK2ME4wVp",
  "key7": "5q6dVdP7MEQvYvLQLpDTdkwe6yLJ2B83qmVsXUjQMpZd7mDgFwqjaRAbtDFFP15JeGYwqjDzcEpcAXjnsSSoVXJT",
  "key8": "4rAnBFL95AZMt5V69C2mqFhv6r2ocE3riNd2Z7LaDuzEEokUwYsALuaPTvkA9i9EfjfL4x2rudWra77wuo5SF8B",
  "key9": "pRX5qYJ7j3uSRyvAJfdeFjjPjhi2iPK9nZSWJjsRiJ1f997TFLdodfdyW96kSLnTzU89iBdmfVAaMa5orT4cQv9",
  "key10": "2r88CnLggVHkGgpB6PAnAfRsBVo491pmmo5dMhTGbYuSbvDRSNqiQnUcPJxDh74n5R7gqbZp6asZjs5qC8T1gv7x",
  "key11": "2S8yfQqw4kkzG92QuULcLEaGU7JkSZCokxn4CCTZgeAhvBW6DqC8P9KWtnPMRCSBaXSKT98pSfbu6MNd29kMMTR5",
  "key12": "NNcLu1UiBU6dYfLfKyk35oUVryqDYAKSHXeiF7EcUrj1pa3BJb8DJ91rg2xyYtpdGGNcciFcTnyHyoRq5jpb8CU",
  "key13": "3vnaFTNSQPFdJvrPSDAnPgT9K3SSJuNPJZENR6sEVk4R38WV6ioWUtF9s6pYYMWWpGXowbtyuycFnJHv7SsoXfTN",
  "key14": "2vxjoRkqUvCwMwnYFJYfBydUmYyUEtQwVbR719jPwtfeUAFt3MFqqneKpKvEdCjRiUQY8dCKWvhBEeFmZkSnWEaJ",
  "key15": "2ii7aKpGRj3FmSL8j2qf4Pwh6r4SnhmwANRhA3QuWaL3tyKwuysHrmcVmy6atHWqrL2SyZi7wntxv6ifxoS23cLn",
  "key16": "3b2RSJmscfZpvCzu99Kxkaz3yAKeq4atVtrADWdTkNdV1QN8SZyvK3DJKRnDAWeFv1sgspo1vqqrvnRfuh1LvRQG",
  "key17": "3gkS9h2azGLtBZZbGisuS5pyofwsrqQaEWeRZw6RGgLn6ruD1HW9P6yiziM6FmEuLCaCYe5D1jMvHCi1UvjeFkbg",
  "key18": "2rRdDWvJmAo2NqzetYRAhWZbXfSCHcVno1qMaRuC7tmFW7WnomUiL87xDWpwBwLxvt4jo2CzqZpYZSJpXr5dR6Dj",
  "key19": "2fo7ABK2W61CHLWTkZgsPcruBuFSVXhrmQh9eWDyXYVMnjmN6iYxuaDnBChtNGWbURXzy233MEK5nYn5mpgTdsAf",
  "key20": "3p1sStyMAupkqMh9miypeTYQF88Nt3M6Ufpigk3QXqk9j2doFBWdzdBrFTqBMy4Xqh8eKXaBKEUEfMCSTT3yL73s",
  "key21": "5m4TkMFai4BMz6nAefbn4RLqPrLYXURJekzaGTkyhaBuFwoZKc5aWmyrsouDnVSbSWGM5cy1oVJo5717fbkwRUwW",
  "key22": "5rbEyFJN9kWHbcRsEbvL5PPtEUBg6KUCC42p5mbacN6TLryq643NBNWdxzF2gYW3aBpYdoE2XthQ25VFyAyjyrX6",
  "key23": "U98bVCV9zkpxCYmEZE6dF7aWywLW9GNiBvh4CFsvCnCDNfvLFJJVckkT4fAy7pz7tkyLbXWsnhFbmv5V2ZL3EiJ",
  "key24": "2b4HRJyL9bYmY1HPv5bm6ZqcUSBcKpGoU2KV2YoucEfEAKGbNfT5aq7EDJ5pJSBPesoHvfVWqEHDM8n4GsW2ep22",
  "key25": "4t7YreRtJPBw6EjTMy7dHD1UEZkacKwbeNLHd9qudbAXK1AKxJ5Jos5yDwbHFSNPPvzNWARwtqstKnYG8b5TQrM9",
  "key26": "4iTZg2hiAod1a3ZmZmSxdJcEjuEbpF1BrqWJbSTGw16oarxNmP3QXQxTHTg5HahVNz3FqQjVCa9eq2J754XTmTCV",
  "key27": "27hcovs4igLyan4A7Kxi8xHhfSETDASSyd4QqQWZ4LhBT66h9JxS5BNjBhTvUYrE4i53LJjsh9TEJXLgJtZhU1oh",
  "key28": "2MNdmjgjrMdk6LPkipmiTHonMyfoDyQuSuQZy7gwzbiXmvQHQLaSMiJmRV9DokT17ahwDFmjFjHMsqY4wuwAvTrs",
  "key29": "2rtpLX5fTtgAdWigohr82QVxjHQtA2K4bFqhLHCdVfTXkXtiCvt4M4GhRsCLXGxbTRev2sGqnhpZnox5oqypLTk6",
  "key30": "yvynViQJx9kLR6veZnt7WscuxhW9ShxrcLJYpVZY3CYwjZnHkgSEexLc52niF7uV6TSYyPKd7gapBfXfzRqUW7W",
  "key31": "35zZnWBpNTxhG3x4HsF3huCQZjBQXjKn9v6VBAQ3iPH2XQEbjA2rJY11we4jR7m1npiEc7eoh4WGuMwEJFzibpzx"
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
