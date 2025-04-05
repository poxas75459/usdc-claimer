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
    "5BZT9YnLwiFmsQwtH8DLNLsR5KpZ5BrP2qanhuhyZC1XeejZRUYo8o62qCktBQX9N8qK5vQeD1vKoXxHH7hmNgoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HezgrdScwXJSwjPnzL2nXhmHGTTUaEkx63mUpwWy4BqTZYmLuYuqqG7wqyYfcUj8XfEbUYgvSewaWKvM9u1Jn8W",
  "key1": "3xMm3XjUsQ3oTiD9BPvSchoH7L7yZUN6mZAbc3vfTsELhdLQExdh9uq3UUXMoEumgwoGBXnr8nELgWjKdeiCgs25",
  "key2": "5swmM8dmm88ziCe6uSuGzC6CktLTmQmS6xNDGeoyM7CHoFNZPPsMfk2sMCY1X8ggK8yRXNxWmb9heXT3SrEjGKnz",
  "key3": "ySkBAgSDAA1cyLErbrxxgbd9v8TfYrRbC95yqkW7HaYA3nz4goZgYSbD5Eux6RQ1AjHUxxpPPN2ZFes8YZJ5Mig",
  "key4": "4xyP4a2tH4t1mxsxA9ofTpkSREreKDMvzXk9XG2YxNvGNXN3iVHgmvZkzfpuNMDadCYS3Vv3N66vR3xAuX6F28eh",
  "key5": "73rGzxB2o3nhr11TXEXeAsHPBLBQRZabm44FjF4uFCyb83ZtxU5wTWFRDYkzuSMC32zMCad34Y51SKrQN82FoHk",
  "key6": "42pzYFYeVzBtybmhA6iDe8Y2H5Ta1KbxupUdf7CaGQVP1qUrMxw7Vev3yxj6AoqBVp9xVQasv2hCYmLB3xJFeuRR",
  "key7": "5J5KhjYF6A3ZfzBczyDmXvgYgFHBuhfAGLCrTQAK1Z4XM2WMqhvgaC7cEtqPGKdujWNdD1q2obDYBbNHqqK7C8xv",
  "key8": "5z9WmqiY16XrcfyxfCfUYw3C4JpURSCK8Jj2XL315iihmsUyLLiDkGD5hYEu29W4zhZ5Tr13nuH4LPfgFz8J83XH",
  "key9": "4Mm4LotSHwVsThNfFgqpMGfRhcfk56JXABZGnjCtSeBXWwApAZZZztn5TVUjP5hsrm7f3yiseKR5RERDrrwvhG2e",
  "key10": "2wsM9pYE2Rs2TtEdd759h6zK3qrpy9Fm7MEDLDc6CVZM1bGZNFGhiepogFvaKCLyCAJ5jbLRbaaztVvMQeS8qwSd",
  "key11": "3Ejgz81LhWB5q1H1hU1YZmPHdmhckSwhbZTgzzYfYJyfCPzdwjSKCmrKnm7BZnZyRQbs7KeErd5KmJjSwbgbnnhH",
  "key12": "2EhKK4AWnTi3mAJwNQZ2PdgRFwPLL84AbkzVnJqCNLESMipKKEYyreeoQ5PsuB3msYSzt1pPbmYC8s24mbhX7kT",
  "key13": "3JddyaBq6phF3N7REi1zyW2y5FyMyVi4AcCSsBwYhMAdDEhCdLQ7sW65tHos3KHDkkqjYHRCC8FNmNh91iBqfxsb",
  "key14": "8KBWboT5AAYJ4eS3GDpveovGowJ2Bgbp7cwSgWMFw5c3EDD8hQBYGofeS2Qc6L92M9Wo6t5daF9V9vgqvqLUhDT",
  "key15": "3GbcQpTyC6EgbDoPDu1ydiC4EPHnVFsfPtX4VpM4LJ7LXmpHJq7oVSYBdmseMTSxm3rarytSR1sH9CG5JGmyi5y6",
  "key16": "HmQawDJc3cTeZQ7qLEWWx38otmyWzAjfPbS6wf5wHsCAZZUrw439KXZEogwqZKFfbX8dEUQ1eupRaAF7NeedkhV",
  "key17": "3o67B9NogzUJU5ZwHHo5cjGfpDDdDfUdx5A5wZx4kCFT57AgZxgna8EHrXXK2uL2WiWPXxcbhf9RJ6Z9hAKEaSkz",
  "key18": "4BTm9MynjKw4Ncx57Voi6ejoa6dwYtFaPoUocKyfHXDWmH9SiaMyxJtgtSMRzuYgT3Ffb4mrkXAgPQey1T8Jw7jX",
  "key19": "5nZiH3VdJ2uJ1W6FJgiBBHLJt39zXYxT7AZNGGR5QuAjnKZkvd8dTz6vLEd2AEUBohdiZvFV9Wv13ejA96JC6yvv",
  "key20": "27K4mT6D3XfxYE6Ft5LmmcJePoGdSoZA1ECqZ76QVXJX7zvS9fBwZRcA8ufZAB5YfijDGrwUi2nX9nmi9cyaL1gT",
  "key21": "26YKmGS8mT4Bx7UgDDSjJUHZBX99QN8ZmbjL5d8k2yZ4cZ3TMWtjAywjVL73ff7CJQDVHMWLVEhfsggxkP4ySwMB",
  "key22": "Xck8qP4iBHHDNpYQtEpVLRi6tB7tZSN7PhYFSU5p54xiR5HRdk3Jqt5AcMwmHEvLG4VYR734Dgzy2Gh5HG2bSHW",
  "key23": "2f1Qzx1goJTHdxZG8HqrBfrB4bmZdUzEiz2JrafgmJgnqWujBy4ojbW2xoK7yJjy1hxH4Gsq5gR89r59Mmi4CCKx",
  "key24": "3ZQdhjwJxZZmzNnv7cbBmC2CDeTmGXriDtzbF9x7n75WCpxTaJZYRagbsE48hVG6YhRgfkrLGdyXKxLZuTC4mbtG"
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
