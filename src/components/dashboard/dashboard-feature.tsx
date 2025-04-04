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
    "ZqnW7PMG71bb8pAsZqYN16bMvAE45hMyB88bS9F2M1zBZfrWdNK7HDEgiRXjouKLt624A4AHvVJAsEq9NegBx3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52k1ng9GEnSm6BcERig4t4M14dGgn1DMFMcBauwQxf8tAMdizTgo16Uk7V5ijcqxjLmWPRjoHU96ex5MfVH3hoVV",
  "key1": "3Gq4ffH2CSv9ELt1BybQ3SE9xr9m29on7CKmwJEA8cJVHWQfqrRLzmTrrBi5YEKMKVoQAGg1JCQFqpSWRKtNWp2y",
  "key2": "tJKB7rtWAszb6oLQcxQvRS3LUbrE5JVvtLGWrNDkyYEE8kGJunUEHzWMwfpEprtxHLfyTaWoL5zLTbfQ7CCp3kW",
  "key3": "5pMPrxBUo47JdtE8AeuCawj18HbGzL7nScL5TDUmWhJoJxoYb4VicfXP7UTuTWYt8UFfp8p1QTc7MA6pfHWQLjst",
  "key4": "enYPvkeu7X69y6Mc9th4fVm4Em53LwFqndKJ3yXviiAmvTjLwhgdcu3ExsDfkDtSDucZeUnuviCKed4pfkGRKRW",
  "key5": "3mbnZqaB6bz2VS9TCHwANYhqXei9MDmE3pHYZVkKmGtiQViHKZ9u23WQ1g4xtBVqEdvjyz17pfH6dbFYdJvJn8M4",
  "key6": "5QH1anHhq7MpEFtZjNgeG1ajdqfzkkD7WYFxPexCkaNw6jGDFFquBMhqn7uDXSkrAnw8FffHPLhyqUhBjXtsrzub",
  "key7": "4saBWZjwYHzbwrh1xNwFRpAJ1UrvB2qenDcSDiAFRPe92CPAhNrFQ4YWyJQhW89u9dR4n8YWEB2WfBNabULfPQRK",
  "key8": "3UF6zEVJCWesUh9p86dmtX5TLyxTjubJDabZxg2bNjVG7buTViFCcuFfSzGLpKXmTmTmJUPe34rUSKs7GaZKZHMr",
  "key9": "5vfZ8ErPLM8xUZcFQ7fhjGbrYQtXPwxSJrgpQLiYV9YS2EHzuiah9rbZ2qfQ7SF3yBGWe5eVSXUeou3TZqi5tMG",
  "key10": "4yH9yrDwYQTwf2rFtYqtN1PsP8qhowK97ZKEGNgQrWZ6Gn2xpTtrcZ4pY5SmR52QKAisLAjMfShSDdGFKdPosuWR",
  "key11": "67FRXcHHW371ibPcDBEA5ULFE4oNcCYWhM937NkFaSEHEraZZxisPtcgfFpmunDt9vowp3ocsgWhFdQ3tTo5xSoZ",
  "key12": "2nJqWaUcBJbehEKRZwzEfh8Ctv2X4fwhznW6i9xrGY2W5mwrMAwtUJGqKL1s1jTjicskzbGT9oLh7CHqpSUZJabh",
  "key13": "4Cd4wPjjf6T6MUTgL3JPDnR32DW5hbFQp8hfXSLQ6VoCVuFhbM3mfaesktZtWrnUyzKTN8e6xQ333NT5vPK2jLgu",
  "key14": "bmaiNLErXJ3EyMhmTExH344X53orW8bdfvzA78aTwN4v18PEQdcBGjTWuMvrtiSWeW9aFzaD4PhoxSGTWwYKuXX",
  "key15": "2KMHhw9EYqjK7cuqbYEdvnjY9a66tgBUkVTEEj5ASRcM7gwGNtRt8BHavJCYTvJ5SU382eYi8Udd8WTL4gLATqfH",
  "key16": "3FTZFaEsoHo8xbRCyuSYvqDtfC93cSeqKua6ob8dXJkrHTt7DoXECuUfZJU6zr7q47idcViihqQAnx952UhMUKSe",
  "key17": "5GLRjyb7yoMy9ePsBmjE5dpSGD582XLjXivNB3cbmoeFTr4eUJPjbUy58ZYR69xNs2Lp3pe2WD2SmEw3u6EfyiWZ",
  "key18": "3sDekwMoGEWym3sWEqTQwHqUHd3SsJJPkvWso23TH6ET4MNUaWKxKQrSxTfhVgWLYkXsaWofVYdFKGQ4DBo49nde",
  "key19": "XUKQX1kAS1c4kupwPca3nSNyZeST9kBfz8EczRs4v6AZf1CHXSP8V94K1idU2HC8ggmBaMA9d8Rd9BYjUTftcW6",
  "key20": "3Hm5oPYL3aF4ceYBCZxuWZDfJNbUYfizaaj6DBvBRtgnwmWrdPhokAMfy1UwsLQBV12sJKVm4wjV911rGaCgdKFV",
  "key21": "4wJEsoezVLQpPujTGb36kDXNN3RgQDNUbYS1iGoNq76eATW23XNt6EBjaKgaWvJqFm18eUXzj3DBmbeL9esEJWgu",
  "key22": "4WzHjNFwEaaJ3HJuggi1Us5hr9j4xynQA2ZGrsFAJkRSXbW7n17D289CkiTFwphoj9TcMMPT3ekqJq5pGP4dPkZd",
  "key23": "yL1VkGb1DC84RcZFiEzU7kcnXLCRhFPYKPzYMSwm56bRR5HmzbnYDhqK4y9yPHLvWPcEXjqicoctzMeStDvocqA",
  "key24": "5uZDJ6i57EA8D1k3KMjPzeadGBMnvU7mHrY9mUAGz3mnDYKFy2wU8WTdjg2XCFmUqynkBJE4AFayXo3w1zFf9EcV",
  "key25": "25tGz8Mbo6KgckpwNTMueUmFUEjoV2RjUGUWqMFdeLXq5eEmqnNh7x1RjHyd3dqa6K9n216DaxA2RVrpPZeHhSJc",
  "key26": "2U9tqsr4Mj1A4k3VZ6LqXKnHqf3WZ368pRhoff1NJVsoeFjtL691cV7RdPvqgJizqq3SG21RzcYCyJpKE7X5WRpF",
  "key27": "3i4tKGKoTWysdSkgd93cgnmk29VS1j7X7pqyjzCbBgNrkKemc7snEYzhjGXvUPhnZbzjaNNGGzgU61xQM3gMG9Xt",
  "key28": "39jc3GRdF9ocMUskhEDP1DAzzT8HqxmYNbvmLD25X8VzLwvG8szvLw2zvDQp9KSbs83JnTa5uytbfBCfo6JiWeF8",
  "key29": "Rcsjec4C2LXqHUmoc1XbDp8jf5p3QiPLxXnGBrd7yLhESLhLRtV9HRyHRE33ev4GQHkefotSJYwJyxJWSi12CEZ",
  "key30": "42jhG97akMafKB2u8jGvyV2wAydmkaRMoRdkG27yRFsqZxb3nwFscV1w46bZcNDS1PyzZiUzBJmz1ofndYs1ZBHq",
  "key31": "4N6DBXnuCwHLchQEjk8AMcK5u6JGRA6bQTWoyCYxWBVGPPRBbHYNJM92Xu2VipV9oqzb8kbHYaEqgBQbh8qT259r"
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
