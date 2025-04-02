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
    "kBwoU6qxtUrGaSx6Ywm3FkSrLPRsbvNEWxNWHug2MQwJhpeRWkU41NNQk56UCfHftietckuAnZyRoqmTy8vhdyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "665jTk6Wvo8MV2FmFHUTnv6nzZe9N8h7uANzJVwBpXSmaPgB1jHYNdCpx9rUiagon6En8aa7pStM6s8v5GZd4KGy",
  "key1": "4eKWkMxSWuvMouhNJi4jWdFNrTukVydqnFYfBbVx3v8uydEnXLvus2Xc4F9nUrTz291ZJTbY8FGGgKFyvPUpwBm9",
  "key2": "5WAueRUax3RahDj4YiAHJMrXCd1endAWMXhNhLXHBx4ePV8rctbAA377qxbhRmxL6d3jCA7CaYWJTLXeeTQMQpFh",
  "key3": "28wv1KLGr9Z71ipEVGLzHa7J2kFNrfvAGWG3U4iuHUBqXqK7WQnT2HAbYm1agDePQMTwsTUKirjjB9F8fzusskKk",
  "key4": "3ADmfrSvmZ7tJ1y7bPPgktzZrrmMvby953bghFTd37x5rgRiCZBMkTstKjpkAZymk4CxqnLCeE1HXiVvBAzfBb9J",
  "key5": "5XzEU5JVkTuc9PYKweyFpsRbadfS6H5Y6W75E8qYWbC73TQaAd6VC2mgjoiuRfFb1vkq3gfYoTJ1NKyRpyE7MaEW",
  "key6": "5SkKd61t9nNCVqBdHgdeYYmr5dsMouzegjqVMiQ1YatWX6JNzAguLoYSrgkiG2WFwjqNdEMrZ13oEKcjH874yH89",
  "key7": "5ozab9hCVrknoBRWtUFEmHZqrAcJPnSvofpVJPvE8BtCw9cuoc4XfeaA29imEsALcHa8G7bSkLSfjMrtFpn3r94u",
  "key8": "4wVDz1aB34ZYaXwBoEjBGQp5sv6SMELncrgEY3w5hSCCV8eN6J374xLF7XX8qGo4ELLwnvWuMiEiqKNztGeA51Lp",
  "key9": "ySKWinAT8DdiFx6o2r3vPj3dGRKzZjPRYfsmQraY3pcMppztRQ2ENeK5hhMMNpiNxscYw8bASdX5eExHCurAZ8w",
  "key10": "4ce5xqS1cR6Xq5uRiZ599gay81wDtE6yYkhkvg8CkZ5hbfcoML4HoTyJ3CxgFYcxyMmwTJ7nkDorBFd9ocAdvWgU",
  "key11": "3uzALrcipVjUBpnrokk145nKbUhmt9gPqCPJT9ayJ9QCNhLLxoeww2aQY3YqHtPZWppiACKZ19zPAgm2ZqfryoM9",
  "key12": "c95SrcdStqeiUjJF2ogkKKZAQYyMPMH6qJ6FP4STEcMEPawqTbVpYmareTtL4SM1N6TtcMMRe6xMjqasvmGxWLN",
  "key13": "4DXHzWUb39feeeReHVpoD6bpHgUAj9HbxxZgFwaRAFzgjkhqBLf7mSKzEmix5tFeCNqLEBRgv2Arb3ejKuuvryRD",
  "key14": "3sqcsbVZ72Dx7d65Rrirut3RB9VGvDKuLohy18BdQ1mxQSW5MDUDZEFtCtVgBXHygW6MuM1BFh5yK3ev73X4nKZu",
  "key15": "35NZQkooiehVaSjNheGJ1yQH79ug4vmeq1Hqc9kV6LaNC9j1JzBh2hrzdk7WB5TpHi2NfyiY9PovQofkFJGSmwT6",
  "key16": "49cvrc9kRV6baA3sT1NB2UXD8wRM6c9et8tCfzZH6wT45WwhpbDWrCcMNb1PnMoMPoaKNsVo28Hmjvf2aoU52M2m",
  "key17": "5X7mb3nVmKjRkypx5iKjoLSQ4JmeSw89qbkpc69hj8pwDH89hfsVidPa4SxDqAYLubR5qR7aDdLLu35VYYseUxqs",
  "key18": "2E1nP7aFUD7q5t1b1Qh1toEx7pzMhitoGJcagr57FVDZqzVFwBRtunVTQM7oU5imnqAap1iRpAGGH4JV7eHAXiwF",
  "key19": "62wpeaEPdttNQyeh9qVsC2PvAQFmtWWjXQ673JJgKMojwhSZZeoEoa3EpHBJ48jVDJJ3m27A2uNbhwEmdL34xEdf",
  "key20": "2pfYxKhKojREXDgiunZtN2878XF6Rg3XF5YMvMXoa1sHBNpYQ6v9dcyeWKz8KQjC8L7acik6ju9ZbDxk79nGt7ET",
  "key21": "gWndpuacSntysgjV3o9o15nHPVoozfMKn2LqBV6gqPsboKijg3vgB3bTNqPgHMycQBpvgH8v9RdcYQYxwaN3s1b",
  "key22": "2iFyxNL4yHTQfwLFRMnRWKnxNdrNu8ihjqCdKW7ht127BPcoG6URnn2GQa7x7Xyjk1EfNZUsnifupqT9C1PdLSXk",
  "key23": "5ssBV2gDaDCrWjELwW3duuDWkAjkzTpucTAKbemjPfKghKZj2CCQBHa1Y6Ed94EWECeGWYj6pELhPjJJouLkS1et",
  "key24": "3yB458qNXjxJXmnufnF6VWXYhReADYFAW7J1v4Snnb5nqW5RdLfuvZ6NdXBnraooYK4LFCXeDWcvDiJFiVvCDYAm",
  "key25": "5YpVPQbaEoZaVSFSTET318J9K56VppRFE5Nfjhm9Rcjur45p3TTbxaWtDkSJRBJW2M3ZQx14UXvzjG5YMgCjqVjv",
  "key26": "5mH9GjMVCYKzZVBs6QrcGLPud6BwFhFXKtXNpZrN36BbKW7cpjcDNGFVDtUCZBnC6E4Yu59SbjM6M4tyZf9KTdyZ",
  "key27": "5dYMwTT58d42NgcDgMPjLaRkg4iwkoM5jw5VeA1rZ4dKvhDWiVaDnt6yJ9hB3xHpfLGGhhHsrQF9bgBQ44znwABM",
  "key28": "dUtGQiZdsLponyQWqy5wmfCDk9aZnoPWS78hyKGLt8LgSDHx25K42XZBjTgchKuCbZxtDAYNAs62wUUTabuZTUT"
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
