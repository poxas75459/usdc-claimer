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
    "4Wqcrtr3JTzEeSwmnN3AqhxWcqeJ9sAAafxcvNgCYFszE2xTLVGcxBy3B1EyftP2eQvEHbUhwU9uCPgjN18STwfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TmqhFyrt9VuWtpDNR32tQ4nqDSBvNYMACsPepc3PW2MG5Fkx5jcU9YCjGWA2fsH641D1zrYgSDqEhgkVHLyWveN",
  "key1": "36RxcKGf1dbmxUWzzjZdgBBrRebJPgSVWNBLHSLr8hEHt6jDNvzJ5GMbAEBQXmWGx9LpMReZJQ8N533StzVUdjZN",
  "key2": "9r6tSK9Won63gXvfmDBxstM16hkt3XUyEisgxTie5BmQYw9Bhtofe5vxFRzBY31sNEkizFpkhTSDAeW33ncd2ry",
  "key3": "4bXexXpC7s74vAgD2k4ibPS5pncm8J4TWuCoMj7D4jhBnzwiKXsk5eSpdy9aw3F4YKQLSQ4Sah7FNNuUc98JNshj",
  "key4": "3nCYdGwdfDzKb4tYot1ibaTT9j6p2QTzzML5chZTyvJetDfYzVMCvkDLgAcnuFypGNSotYHWF1s5rdp9RwABDJSU",
  "key5": "rHiPrp1T66DYNFkCZtQFiNsdpB8yRnv6rBGqo5ssSHMuKFqwL51TVgG4LpNzNzruzrZSexa3VxksxfbXViNxc7i",
  "key6": "ufPJpCWWhG2oB6XXgbTdSYuJyiquAaZdLHScmHVtzr4PnJyazjJJrDSZ4AiVScvL4n3pNyio97xu7coE6M7ghF8",
  "key7": "fnLtGKvXfj7n4kjNcaxwZktWhKTtc3Via1BZXzJzb5y54zVf3UAoxdC7rwqhxCqfxgBi48v7332gcza6GeqzoZ9",
  "key8": "32gLb7XPYqBuMXKdCsz4s6cSEvRaErEPQA7ytNZK6DDNEMNzbDLUr5aceHMkDTcGLrG2KeToLoVkfTavg3qT8Lgn",
  "key9": "33rXXw17TaLMxcRwynsTtRSSAcevRbv6YFsLuo8FBJtw46Ko2f4wRukYJJ2xkmDBF4zTDwbht2W4RVsfgrNX2H8c",
  "key10": "511JsRTQYEFLpmHQfxxzQLqTXY7Eq1kdXryj13LTzmHEucsDv7qEHwaDEMJJmosS6iK19wENWWkTdVoUoGiQbkuW",
  "key11": "2z7QQAwsDGotHkFViZX9DCVyxKbww6pbJHCTMoErSn9gpHfaBthg7iMAtwRR6fvjdzxJFAaiCPBeC659HbCmPfoe",
  "key12": "2Hiscf76b6xQBJjejbANsD9xuNgx7Y6XQqgTe6RVFayuGzozTka9aBFMbKFk42bN4g42woAfTWBdG2LREuK9Hw4x",
  "key13": "DArDKkkKGkYFwk7V5BFgnzus92376G7AAuh9kPDPEtpBiyeH26XoS27rhxJkEX3wv8GWjDk6rYDc8xGGQM5mDRq",
  "key14": "2U4vq7hhWDmGr6k4c8pNhiaKZuS7zx5RYXqEW2trosxS8TK734TYGwJmmPx6XsTHATTNyJxKNvXUoA5LyzmFq61q",
  "key15": "4W76jDbkD1ZGF6FRwcnPvHAUYRPXNcwoqsP6AGPiNrhB7CRDPbYBQuwyA43bp6pnR2rYYyB9beVUQCmaDDxTbWyB",
  "key16": "26AakfseAu3pY88CKapCtdFyBkEbnN3tnZX3ZGyrMPiMWSyPEgTfcvaBhqu6yv6yU2wv4gkBrmJWHP6tYdznQ4Xt",
  "key17": "4kvi8eGWGUDRwZTTcUVVkgTZqJuP8xBJtgnsbortpBQM1dcPvD1CqbfUvastSE3GwwuLZbHBc8Hs4899HYUtWtzs",
  "key18": "3DCmibxfMXr2eoEtXZegBeDUB1wUFmvdnKegCSpfYQF8JjYQeei88ySNXesAhBogjEs8cXCzSFwK8BgHE729L9jU",
  "key19": "2LDjjQLqoPwHvMbBmdrifeJtCFiAPCnfStFCHxDXzLJRQQDrM1cDczmSv7GWzKo6xnSHLEsgeZE3TfMyjx2KHWiB",
  "key20": "5tzQq3NhP8xb3VNJH8v5Vmo9vMDMyXR8EavLbZs7oobk1sGwB7p1S7q7BYadu9wKkmu5DdtnWVQu2ZnxY1qaMVdJ",
  "key21": "CciKkPnm8NDep7McYMhiCkY8ZKwgscvfAP19LKU6oo6ZioRF29iPZJrAvZHHaHWdzyxfw35eveJ2guyZK7fG3CT",
  "key22": "2UbDGUhghm5saZ6yx3wBLNDcbpEUTyU9AaSGN2Rf2U44tmSKWDq1dJcGwpFsVFmLBgd79AWAxB215TvvAq2AyQyd",
  "key23": "31HuabZizrnhi3ZvyDeU55TDJhg9xAe6xRWyKU3xsmKSpykek2is9wx7YyyRo8mYLTZigxeWDo2cGvNY1KffdQLp",
  "key24": "4vPYMdz2oxvafnZ46Z45SGuiuDoUkcETyZnHP7PnoPVfewc2GBkzVQdnrQ7iQ7WRp9ff5Tk22qW4ScCa7ZT4yzvM"
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
