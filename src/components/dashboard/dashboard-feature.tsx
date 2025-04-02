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
    "RdGn1GHwWtrREoaxL6TG5tiKPgj7qMDGbUdeRDRijJ2W3Gf8oFk1NmQ6FP8NReH3Y6romcdzednkxuXZ7qjkL8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yj8BuhWPyNz7SM9KcCZgZyownPDWydTfFfUMGHa7ET8ve91WksnWhC5Xqrrean7gcpc7X2puFsUfcpgT6cSEEjp",
  "key1": "4iZRAfuuHh4Pfi8LBSuojLyUD2SVb9jDt6iqEJyTvdqhAakbLjuCgrN4MhR9JdUZuLcpPmSB4rrbfKD935fDG8Eg",
  "key2": "4A47Da4etQYcsTKUrYfW5TVTo7moehZKyLYtuGJ8p712HjRoPm8Kt4ewAbtHMJkX1r8p4wNspsU2G7Eihv3XiMf4",
  "key3": "5ackjYeurRbcNMCq7yUf9cvh8rV91ySMwMXbRKYxE7Mj9BjsTZzGedBgVpjQx2tAtnV9XBzrUAJ4YgnTrfQfr3sv",
  "key4": "3UhakXTUhKNT5NvqW6xt8XKB8xomUdjGpwgfWimzgRvbXBrGE6J3uftD3M54VFh2Y2FZN5qApMkbHg4CCNBhxwJ8",
  "key5": "hCDw87HR86K4c121BQVAjnPGtnRr7wkaaFT5bxveu7cgBGHzthBxRBRTUJBjTizrXDUPZQATJGmY597JqDNrXCW",
  "key6": "63bwENpoQpr4qYJJ24fvgbZh64nkdNwvPYJwqdXXLSht5y2s6hx1asTip1o2z4LdHYFPdCiZstP4QooePysJ8Pvd",
  "key7": "42SRpSwm2ZsEzJztjypgpwMf39Rwn6XX5pTqb7cKEdrcQJQWQdjhbJu5AyumWZQuPUvV8mXsRbxnRFSJXmTRRKaC",
  "key8": "5bQt2v2FQwgR2p2fnY8R5LQwTcjobVTQVCCXNhJDcqo21d3PPSELWhmyzMUiEvi7APHCXKpvJRkU4RUoVTPWV6ra",
  "key9": "37bZn362pPU3im3w19WKjNYUHcBQDPgHm4VCdL59LpTkni3REKGJJ9ZCZkwbKD8m7QfUskh9aCxPo57m6AXHfW1D",
  "key10": "5GzfhLFqQRe2qfGnEPhWayJq6y7VU7aWE2YkMSG6AujBATVPwCZdGqk16jHvAKQN7FzNckQyF9XcehAHQGtwZkcs",
  "key11": "2rVzqsdUNGrhZwjfi48R7aXUgW4VzpFGYTwA8nG8VTpnKsWw2QPiaE7qRrgtahGxszmw3ZnhrAQDmfTiFd3ZiFih",
  "key12": "5TGzoJJPV2cYUovzGY4MHUZXq6Vi8yBtAHrXem59k1zHXPVXKiU4nzigZvCRkCxxgHRnMna97288TmauX9aJfb9a",
  "key13": "5cAxeuRx6o48qyvBJNMj1c1LCdWy3jig6PZzpDMLPuEJXsvwximZ6pb3bLEC56s5nxxPFFS6jsqUzK744dAa5LJQ",
  "key14": "5SbPJAPCG97HUYUmHLTYoBokRaJ7acz5k8Dkt9Rgw7FJRCWitaVv5CESLyUgw1GskNijKCthwjaybwiU5X1jpHZk",
  "key15": "2ZqHh9VRuRFEbGxuqTKUW7uWCmx1FAADHHTDaM86YYaD4geJ9cwEGBwXGmNwVtPFZ1HtCzJjiyXRDBcYpRGszHCG",
  "key16": "WANgzgAFXYMj9CGYZhtDszNwrmSTw5U2TFSJf7SmSv9vGRrwPL3FHG4JoUmstin3r9Gkk5xdKgT7kmeqGmKYdq7",
  "key17": "2xUwUuTyqFCgUJ4XavDgxdJcqEe6TFcN3Vgms74QrkvVduujSRikLVBpKFEwd2Tp37hS2VkLfv7pFjG6HcBoQREX",
  "key18": "22gQPuwJ6oJUUQcKnPcaQqAiMWqGqrmp3zo2QdkYtx6ChK85gbaU89ceTJsaLjrGonUverLDoAFuUbSt9Q9sy6TC",
  "key19": "5jS1LNTYGwrrhQvjxJUXXyCaqAoY2KRGmXiDEi5kg5dJSeasepZKrrARbR2evBj3n4ULyFL8xqs4VQqtqd7g7NAn",
  "key20": "3Kixm1CsLNj57fs2xT4zuufXhhgPic1oxrCjU8sLVnHoD1SSZPbyDnyZDEqiTkPcBkMrEHDv6HZx11MJuZPfuCCz",
  "key21": "2YjsLR3DJhpdtrmB9dGHQL8dQ9GUF3oBJUUXrKEcqUMa9HzmpuMBH2Hy9X1giSQVsQT51r3hRHBPycBQeCGZ66ve",
  "key22": "4jtgk35FQh8yMEPURCP9Hp6xrMw9U6rT9dhb5FQsfe3iCXr5THcP2rAkwkpwDM7S5Lmxj881Q21478zGfZdrZC6p",
  "key23": "4NUCiXThLA3QSp2DLBjQvJwuqEx823vH8Q9FKM6yHcaNYP1TjHQbPE9jSrwj38ziQoYeN7HQawJCwum2VwTrakGE",
  "key24": "2JrZ7ucdd2DsYFqeFya4qCF3h7KosnJrPrPyG3u4GcJqFVZNDf9r6sT63wJgpqp7USq17vQgzxMuYGsLD2CMSZR",
  "key25": "3wjEgYoxv2Hfzbtkn4UHSdoxdjMURTVFq97yK8mz9D2aoD1yCWkYixeqYKa9vYKrmzHJGkDNFMrShBFfwZvHsL4D",
  "key26": "3AueebwDV7qFboRtw3X6SjWMTL5Ca1VHPLW9X4YTjg5FCGUePiJsrBB13SqXuKyUGqvDYyZMNBeyJvTFccNEiyH2",
  "key27": "518HmxTfnS8ggaipdyGZ87xRi6vZ2vH9t3fBkGd53XJjaspwmPNnmHyHNCaixAqGxgqHQRV2T6BySSZ7MpWsoakL",
  "key28": "3GzsLeTt7Lt2pmDTfoCuHnqMepapDboiVBbX9RdSWvndUnzHf6gpfvjPRujyTgDjH7bFSoDLrprVxbnYtxXubMJ3",
  "key29": "gknDXPLhTUJKk2c8kiGt85sVU9ATTCLZH7yEunto1RXqn4c5T3yME2i13ELMBUchGFR2QYBCnkQ8nWdDY8AUmT4",
  "key30": "5qrB6ex6kyjKvucSChMBVD6PpZtF3b96ir11PNffTJq8nTd377jgduFyY5boTK54ZjGLJvU5y3v4B8v6YQDmtfa8",
  "key31": "4QGbPNxfx8UWHWAjNftP41ZeUXWrJKFCvEnZLq4sKcBSEKMx66ZuQ8rEi9VfXHJo5Cd1mmyofwgzVGqbQ6DTbLbf",
  "key32": "4QDXQU9ZxyzHghrJ4kp4xxEGdZqsGN1QEjC39qmt2EQ5zdYVS1aTzi8uE1knmwkv4iPqs2MA2NNAwenha3NxZ8ai",
  "key33": "G3DsvWyRKGWtjgbS3nmin4EnySWf8m6uU2wjCeGjtvByE1AG3gfLyNix3NCSm2Ch4XgnNaYiAT8dGo7BSj9hipH"
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
