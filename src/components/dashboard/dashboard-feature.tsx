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
    "5fd25sFRuvHopDcruGSuyXkvXeVajs2egM9hKWo6Y2xVoPh1NKxdgK1vSTG2FDMP72enwbBoocfNSkkTydxV7oBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MnmFY23qAwx5oTvWzwxqcXt2dpCqZM82LYgM3gbxxx2mqPLSU39syELFGPUmL9qbt3rFQaztoG8Y4YxEaYMMheB",
  "key1": "2RX4QuVZBJcrErRHD6pLW6X4iq2W1CK44LmRUGvd187T3HYkWQ89ebA3vgRSU3d7yzJzkRnFGJLnog4gcxndkBMj",
  "key2": "2Tch3RsKBPgdDcPtu4nUw86Ybtgt9icHTNV4ww2Qq7FXYuPK8u6R7UeUQK62nuAbk7eVojhoV8QeRBX8kV3ZcKJr",
  "key3": "5KudrSALhLP3uUcEUHPsiQYKxWNsMqE8S247QAzznvbXHhwiMAakj6y2TDsPUzuTQeD3XeAXy3QMy9hHEwade4J7",
  "key4": "4fGAhJw3F49jHuDGpW3eHXPDBgCLPzVEKQCew4Bxqz131oZCk3wsyyfpZ45EkxPwHQDPRD1MrHDQP5QQ9MaRt5Ec",
  "key5": "4cYf9v81aRugujmV3eQjVjHquHMhr3ECkTUCMbye1Ap63TcRCKcxUirAvDGs965d8MrRNaqHEZjA8XvfWsf4gwWt",
  "key6": "4CuNUcS9nRZF9HqBZwvd8JBTZ13ryAc1QoahaZ6B8hutFsSmYt3uW5pqP9QY33vQwzPRRk1fa4uo8ZYTftUdRVxj",
  "key7": "2titVra9c9vUxktjkMsfHNoMEoWNkWs7vjaux6U65Uyn9SwH4FDKQdNWHK7GHCxwFzn1bs5bAXEnYFMtVK9uTP3w",
  "key8": "3QRT8GVVHSjUhwVdHDxXvWzKVQ2T8q6T9bWybYZHZYcgkmv5LjUV9RWn8rPdAoLvfBmMk3CLAkxyidS7kcwHwpsr",
  "key9": "3vW56afvFmHzyZg1GWztfLr9A9ijbfzP8NmR3x1ZqyYVsG9jXBLtZcWGK2Z2FFw7J1scwtFwtSvqDtTDvNnXz2u4",
  "key10": "2qPh8n3znTXN5HdoCnzwerGvSAuiDsdwLhzyuEqeL382CPt1SQoZp9zvZAzPrGxzqTTWn1NcEnYctg9QuYPXtKh1",
  "key11": "5Q9CWLpKT7fieyqxATWTSa5H5ChLm3Vz5bWYnt1CVK7fS7ZzTka1mBYbHynUYAmSvfwe8vgrTD665r7dkCKPs4LM",
  "key12": "nbTVZwpqk1kAgP3PQNUPasm4N9VWhgg6qhojy3raZMpLhTGfv1srVuHez9mUJLUXss1KhJieJah6No1rNPUh9NJ",
  "key13": "35msExhF4My8tf4XwCEGrgoGcKc64aghCPEu1E2ykYqKf3wURia5MrVSC5verLoJcfXiieui2iGodjtF53ZXaaeb",
  "key14": "3ZGGJfsds1J94NB5VkBeVsgdc2DHjoHZ146qefnLh3bREf376q3EHKW8nY7xHTtyKRe3fQwMZggATjkPJE6Gyt1U",
  "key15": "29SNhEVGFNqwnUK7EXMmrduTt81N3XM9ywk15ev1dJ2mpomoFnyPN8UDmtysaGJsLxqdssygg4p8HYwriLfQkcVM",
  "key16": "5Q3XP9aCUP9c4AhzTy9SfznUUvroabfxjMArGTbyDWaeRGx5JqoA9w5A4Ky4PhJT4GpkgoKQmjUPV59bNwweq7TV",
  "key17": "2B1cdAGLTJCFqS42z3nEaKKQ4Q4KKeTidaFRiNCRNQkWD3YY1MTVBcbes1ZeYtQtWndZ4XYcFcotwGUrTX8PJ9Kq",
  "key18": "2gh4qvbGw8RoqWW8afwYrQVustVvj4LstLmDZZL6WuU4GoxzqFzj48yiHBz6i7mvFNAZ4nKAGqkTeYfUXkBH7nky",
  "key19": "FRqy7opkKjDfjx1kxXuiXpumXPsPADUTon1YXhQBu4cnAeegNUCMmpVXRoj63XMNsWybKegdVdHL6R7zCa2EecA",
  "key20": "3jwTUajRsgmHjvLU34y9kXKoD6XtSGRTNcrT7SSyZXf7tajyvWwX2pj25fakBXQd9HqNQmDjyZfWGEJ8e8YRP1BQ",
  "key21": "4Deo5ubiXG85j8E8x2qxtHSYEea2TywAAwTrNET88TX4nug6sNmQ2Pk3rLauzkBvtCnQUYfPNYyHn5LWhr4CChni",
  "key22": "ZKpuEv7MZr4EnAMgXr26wircc3sTnspe9eKBLddBm4f2vm1M1aSkGTDFPoZdbMfrtNkx9LFdhfwVwZds189z2QC",
  "key23": "4DrzwnD6KDYVyYYUhq7JhyVC5Spko7oMvrWonvJf65v3hYeSesguu2ZrA2mujyCMnaXoojrtNGK77ba3vteCfAkC",
  "key24": "2niuuBhQFTudc28gSzUgT6BGgejvmYqAmcWuLS8qDf779a8cqNTaQgDHGF8dDSgG8phrafnSNCBq67UPEH1G2Yrf"
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
