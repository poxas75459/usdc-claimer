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
    "3R2cUoxZhLhFNco7dHUEZn49k9XMh8KrLgv9Bk7bduocG6Tssvx828jMDacnD1tmN94pCSb2qj6wybeEcBgUrh8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ac7TNd3nxfPr5CVCxZMhfxNTUTWUmeuacqwHd91HKS3iRS3QwntntBtkG144j9U2CkKf7pu7Bj42jGBR1iU4tGe",
  "key1": "M2mSjjaspzV4Fe7LieM6jr79GW3sSwo8zB56t5Hy8PoGte7qqNdXc587ZztYhvpgZVuL5S4pwVTn8dEgtXTCXZN",
  "key2": "48EyaxeQVazit5Gr3N9oLay7NksFXLUwPmvVhMFjgdpmzPXhgfdw7CXZ2rWuMNajBLL4oCMmiSncQC8m6utupPEN",
  "key3": "iYvu5Ck6SLNnwADJhicm4qHsYuhgzaNSo3fFfDXTcvVJ1SMiS8fk5FuzJU3ak1De6Max5UJ3MnVktDyE5KrNacV",
  "key4": "5Ux9jEdEnjVUtfzvfCwAe1hsuwwnpmqp4aLchfCKp1hrSB69kWdfGYBeqGbaqYajXSbcwXBhtvEqztm5dKCFvJhj",
  "key5": "5g4yB8Pp7QWH2uoLPMWYFJdKP8x48z7mrTJpZjC7btMGWVzuN1v5mKBW7CgZZMDRz7iD8AupP9huaQb98VMvKhjy",
  "key6": "32TMADD4Xz5YfgmsHijVnoAWrH9YDnxEPUeWSxpm1B5uEMax7TyG8aCJ8SoMydyScGMSVqbiiGm4JwEGo2jpfXVa",
  "key7": "LBhUh8YzVvio5SwnVKwmtkBC9KYvnfXyqjTiWPs5rjZwZ1f1SuVjCLHbLWG99HWv4HtHeerB1Wh8LrTM2sjUnhp",
  "key8": "3i74pdGLrskgjvp2teJQUL2MoK2ERmPwP8L9e9qrCNExiyN9PspqVRhgNBPvKA4PPKN35HFkvfzsYJJnJk61va2d",
  "key9": "4cEqsY8pzDriPQVMLdpLx2zTjvHdXWMUtddRUkcZGeGxta9ZJbbrfP5Dj6Frxu3QcEy63xNeZvWhqsVWnou4ei9K",
  "key10": "2SvYrdtBqdWokFQ2EGLT4F5WhKjEznqwRkYWho48kTv8Fue2Gm6Ymc4uJ45UeP9KMhQsTDnRreg9pLRQYtTvqBhm",
  "key11": "4C2z6BqYUoDAkugwKFZvzb6xiJ7iJjczsMSW9F8v4ZSYxKtRsrZiavNeVTY5pLGCVehNhsHocqqzLp61Eo4FQcZF",
  "key12": "fWoY9jJVfvvdDyTnVq2haaxRd6jx1Cr3zoCGY73RqhZ5eYdVu3nvm7wwD4E4rmNYwNqm57QsF1BuciVzCGiApDC",
  "key13": "Z3vEdMYp8mTTVyjq5mDjQu51AjkYmAjfqzfDj5ntB3xyCAgRBdcagnL9mf3tkbRUMWGxUaYhinX1sKfVXsu28Js",
  "key14": "3VPWDy132KroqNoQyLTwbeXQxT8UXjDzpZ5rbhZoZfS4WcQwMbwNyE1N5C2VyA1T8GF8v1Ksaspx58kD9PMbFCK6",
  "key15": "4RCTC36T1HA8Fw42yGSKcFvasA6PkUVjtoTAHLLLUtoovWKa1Y8eC3m6b8WzQS5j5S3atnWWWQyDdXcoTyipu3Cq",
  "key16": "42cQWxBdcfj4zCfqZ5ChPUx2UD3d3JiMAV6Q7J69zSfV1zuqsDnpEF26LqCJAGqnhsh3LVXtkGKwMsCKqcJwitct",
  "key17": "4Wd83EBnGaz8vHHJy9LvJr1J5oV4U14HXULP82CXcef8UVb6E4SEDUT2Exw1kmTu9Nj2J3STUT3TQ55SDKQhZoh9",
  "key18": "fSBdaLhnXmaWbHKtYsVSNFUmamUdVYnHtNvvC1b8Mb6BjecKDpWBtosctrZMLsq9AFz284JQB5xpg62U43N711z",
  "key19": "3C6GRvKaDDJfG6V9ewpwoGoHgXxH47tb9GTyKBWPzWS1qF5Sket9G3xBXYRSun9KYcDdzJHLoRHKr8FqHwXWusfW",
  "key20": "HdYV3UszqL26qmbj3dKKpUrwLLzHwqeUBWJX8CsC4j5s6azXEbBs9yKamdTKkRgT73iKo63yvBAKdKbfHwwHsQa",
  "key21": "EdADsg6kP2GGZQ5XduXRge4MUnwi4mcWkA4n2UbGh9ZV8BUTQSvjD6u3rWSJyXnypMWhe99cKVQcMbmu6aC8tyR",
  "key22": "3bnCAxw4Sctn375nnrQ5xgiGjEQv4XYtZFRfoQBTsJtAvPWNYck2FV3EkgjrruYbAKVztoHnjRYA1xJi4Z2VZHYP",
  "key23": "5U1KsckfHut7mg4ZJhWM5CkYRdcKR1rCEVTonQ7Czych1qxjNrnqPncgYiwGL7BGKV39jJNHdmzswG8MTyv4NZPw",
  "key24": "2a8eaqcY23XWbhoEXGkDATwd1K85advfiYCBBc6hDaSBtXcwfVadrLgTDjp5Q26sdxXWtLTd23NyLDW1Qdvuupos",
  "key25": "35NBxHnUGWp5XcjkEgQkyPAGcW5Ug8rTvjS6NK4CcGU7mU5SWdgXHLqJcT4TufGv3Fr6d7j9wUU8gPG1wi8WQsBM",
  "key26": "3m5eC4aWBH8Jy1BBRoLd85wZZ3snMsCZZsaawiFz9KVk1bmFrzv61KedzLbuujC8p1sxWJzyCXhuM2DU2ShcNfc"
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
