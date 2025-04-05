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
    "5wstgx84CJWbstYwmedpHosWqeAnwRsacVFztFpVxeHPBbDtUYMQMEvFm7zUxVFZYaZNztN46iCv6VVJWt5gmXEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dk9SZLmHNvR4h6wfB8anEQBHcNSSuLjTFziiK6M5wf4TE4U6jJLHFfcv8S1hu4FaNa9hR9rj8xGGYosP4Zt4Viq",
  "key1": "2BiBavbQdvbUtjbRxbhPXTaRwjmQpoWSEftZzGM5vas57LgYPJSbLTQKprPpABHUEENEmRMGda1XdgRLnWs14QKx",
  "key2": "3C5dptTfTqpmee5BcgTw2DEGPogXd2TJLnfqGW2UMe6ZuVTcmd8kTEaxc5pAnSrh7kqSfqW4WvYBo5XiTAyo3QS1",
  "key3": "2GQFCBSr5cCWDBHhTUggXe1wovnLkb5vCXWLFDkN5sS7Ed6v2iVJLJ2eahKZdHa5KHGkixNxPNRkbWuu8QdvfMaR",
  "key4": "3sPtsEvKZrqHx2DzPDJ5ri8MDhsviD1yQvnHWupVJJHBiTkZnS1DYwTDErBh18A6BinYNoqjpc2ipfEuvcbcdXB7",
  "key5": "5Dok8Y3Xi6cwYcvkHqVv8L71o9aitSwj7AHDyP7cNWbKYRpfcvqPgrmkC31nSFku91Wucmne6HQSMX7Qg55X7Ka9",
  "key6": "5ZR4EtdFuDZTrRrrfdALLihAxP9udbte1wztaZ4FzeBx4gqbXtpEASvLnVvzwCMDvG7TnMCLPP3s8GNLyMTBbmFH",
  "key7": "713cTfPXnt7cgLUYHb2igJVdrZLZ13k63dhJJg99oQaqKuAvUANagbMHgFuM1s7GR44AUbfFDM5VDp8iPBoE9M9",
  "key8": "3LPnQuP3GyPenaDCE32MmU4F6nRGFmftyCpdgH4qrWkCN5cB28FYfEqzG5MduX4xUvnezZS1kaVAk5Q4ejGVwQiU",
  "key9": "5QZd9YLAcPptnKQnnA5fiLQLdSEYirBzGiLhX3Ta8MCgxdRRhhGa6zrcvp4Rc5tNgyv8rZnVfRHXFBNbs3Yj5pes",
  "key10": "4gaMoxQ8bQBzgEM1r6Q2CUeFss2Zoex5kkx3ymnwvWnQgJzPuc5HEBzPxprM282x81gxD9hBFX4CpVFXzcWfB56j",
  "key11": "5rrEg1X7pTzpkx74MabCU6hWqVdTzr776a4DrhXzNeKwXqSzDzyt1VPpFbkLkNKr3dehEzMKoGD4QHnqprNWvGiC",
  "key12": "3EvMcyY6n7ghh5invMubdKuCzF23TkKqv98AE1yPnou63Zb3fuvQuBZYmsjwRqDt2ruKTY89J7kj6AYG9kZJCQnr",
  "key13": "btN8Wi7DbrxihZEMXVEEDbfBFTiF8N63zPbnHHQPouYz2Fh2H5REUooH2Lbwpfkuk2dNB4fmEC4JgyU4eULT83G",
  "key14": "5hidRFwSfamB8skPR8zAXJPxMnuS73CA8H7NXvotfkm2Pv8BReKcgq93Lt8BWr64AKcE7XeGRx7JwYDGXUx6KmDv",
  "key15": "31y353TeQQsvCFh2qBNdcuuebNQPYmtGXvnKS9XK6rPpqsShnMTscZ3ushS8t5ZGukK1UCxtuqYSzBhA4cKRcBK1",
  "key16": "4kj8AZUTukBpEMLRaaTPdG6Eh1Mc4F8cPUrip9fAHYxAzKoAhSyJudAEj1jdxuTGLBLbkhc4VH6MzJGdn75nNtbX",
  "key17": "HWV7bKRpQsUY9Mv944sUfKMjxWkmCmAiWFoLXfe1W2J72AxRakco6nd4CvojBEyNWWQCHbABHMWrm5zAUZMXYeJ",
  "key18": "59N8RZq5obLgVnXbmiLnh6SAjuiQpEd5YRyRcLB4F323WNATDGcG6hJu2cSMGCJKrakFTMm8i12BEoHaajW5sAWJ",
  "key19": "59wdCL4inbVwhvrY4BNGzwQZPc1BfoxFykp1fBuuDLgsFtpu54rgCdUvhG6qhJ2C5GXfScQNc9oL4fFN82HGhXew",
  "key20": "4nS5S9VDgmUCEeAUr6grMF51q9F1vpBSbS7TiiXx296dLxznknNqWWCYQTCidsXXjXVX8iy5CcudDcjyKRse47eD",
  "key21": "jGs398GnyuJk2JeTMVBmGMjUH8GXhXQkySNZaHCy13JYHXw6wyUZoUPHjR4EmCxeNigHJEeuChUVLRWEr9tMwyy",
  "key22": "2B5b7yJa5AGX4ksq5Vpscp3xkjJjtik2ASTTp3B7P4sgfzeM7sks39EHn3Toz1GcrUJdTtbkDxJ8zQf3JqNE1neR",
  "key23": "3wavonNb9SMDvzyAkHUua8ZhoB6fb63VS3nLAAuABrAYcMYQaPFgAXMSZNQeLSiti9CCFtVZhGZMpZXnXu9d18pW",
  "key24": "jtrjnwNoC9DS9tMfNbd3d6xb6BZ9NEzUxpRnXtSGyCEbzhGhxZ8Z8mt4H2ohwRj7KGQViu8hPAjpt6vc4aBkq1B",
  "key25": "62cvtk6Tkm2846uDs3qWSahEfxZbhqkyRmZ6ChcFtDkkCfNBf8aJuL18pvxj9mKn6MezBbipi8vShvj7G6U6hJZS"
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
