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
    "2hjcrfBrToL7LJSMH8typXjADCfqN2y8px859RgfwkZNUyHojtU6kKUAfGHNaDkvwd3EmaJCKL6dvfmhdNNHoqAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zZRQjN6dvizKc8Xu6kHz5sTC6qPp1ZUDM5hYPYkgKtgQ4ERtz727Tk9uynWhPuNyEHa1hLUZp36BeeuyZ4zz2sG",
  "key1": "3xZ1LnW5HyRT6dYd7K8dNUykL3PpxKDbYeozQ7GqPJTC5g8j5zwFRqssTYBp2yMRw16MaF5UBJRsEgGz5VTVebK6",
  "key2": "4NFbhkM4mGQ7W6Fa1cxmAqJgZB4ny5KnFujUEwe72PYi1LJFTjqq6s8EKzJyKzg22MeY8cc9BDVpvbu8ZR8FiB93",
  "key3": "4gYgDHbs9MjXuzysk4q5i3RKRWoM6T4oRCHF54RYPcagvnFn37mLZmSP4jqt3iPt5qLVZn8teMPUAAHfnPx2zME1",
  "key4": "5E8XQLS3Ebt9wB1G9hKA9y84fbGe5t1TdSyNfsTkCbbnaUPmh7t127XfVWHzgY7mhghDGwB4nYLBnrZFd9AUaFv4",
  "key5": "2TpChvACD7pQzhKLsUUzCywn26276nQYVZH8hzrXiTZZfpYN3Gbv9GG62y93K6HYgbeotxqjKXjctPAjSo6GRAfb",
  "key6": "3Cd7iHgYB79XewtU98ga8cbWL5LjDmcMVV3sJf2NBY6HiZ4tLCMsk636teJpz1XsL9NCdM1Huc3cjvpuHyby6wX7",
  "key7": "44zMCsVxbCTkXhwvH5cueJiovt5gxY6uQUmTcDSryVLtYpfMPewumjigsQjtTpyGFU6daKc829LGetWmLFBave8z",
  "key8": "46XL8xuJva3ATXXPFMJV6MFraTp77AJgoQLY7bgvcVqRyNpFwZkT3uZo4QAj5sWqUBVSkDQZgXShR27TcUt9siDb",
  "key9": "4mCAdyN5JTNCumLTakM8hmSJReCuKXRnBbXQn1my9p4mZJ6zpyKy5pWJmKhKmuUahDUH3CPzKByBFxxjzJqPdAMD",
  "key10": "2FKjoFDT5ZAtjuyqEqU31VQRge9AcNtoszCH5aBT5WpQJAJ15SgCYqiJ719tUjjzqRNKL7szHVs1s7vXPpH1StAf",
  "key11": "5KePoRrLiNna6dqMgvhXsQtcg5Z6xnCtWckoTdEqLWYaqptB37tixNZzgfmAGuuo3tKtxtjsEcwyLSqyvsiNj8kp",
  "key12": "66AJGUn892Mh73eMQ4LG1XbmhX9d4hEwUxxwqzXGU1BuTDBav4X16ChExKbya2WF3hifvjW4iE3hq8oToqLc4Bty",
  "key13": "sFFBt4ywGFM3gYkEcMtuRiY9WJ57D3QMTemgZbbxcpBzik4nJV2fJfwiJyBwGDbcSv55UZNP39qQhwhCqXsVqYf",
  "key14": "4Db7rRXPWbzUmG2HvjMhqNq6PRpGpfhuBGLVA6HmKQCukMeoV4u7z2wpot4yEsAbrrGNhduGsUG9th4Ato7zbye6",
  "key15": "vJza14rLFBGeVpSDHqg6kJKLVspDqYr3mZWUKvmm5t6zre9JBntx8dt3KD2D51HPpvaVnat9LFvEUrLHnCnGe7g",
  "key16": "VKw3ibYHuZscqenwsSWMdNxFq9euxt8an6Vp7QA4hvW4bgNUUDzwFLDE2uZnHZ8p8Jt5WMuzYgz9o6BW5zuZnjD",
  "key17": "5Ga46i6CUeJfcrFEnpRYZPZecRgCfQdomTAtR8NpPtmphU4RNfqsxt37rdb4n2sXvADfELVbexzWMUgFYNB69WAp",
  "key18": "4hKPEGGT7uJgXDgG3Kfj8oTcvB6e978XAxauinfPX1jrm7qMMc8jundWjMgTN7czDs8DoWMBNwVCBFTwegV9L7ga",
  "key19": "23SWnDs8TjD3aCycVhrKRUTUxSWx4dwVZZJRR7FPfmY1DZpKWuovgQbnJszbTuzYUXdWAggbq5B2pXmLNo4Xeggw",
  "key20": "4KAoFX4xj8Sa1W5NP5dep46ZKF537hj3dcuywJJuetLrpZCMZeHMKXv3XWPdi5qZgs4jZTR5vBc1HFqSpTqsvhW6",
  "key21": "4YwBLMAKEdEqvryTpcfExX2QjifGp1NjAxHRTS7ViH27G2hmZS88qf8Z1TA8g2j5dCFK9VHeG5KBZ2ogdXosJLwf",
  "key22": "4AdyumKTjZhpVUzqk3K3UzF8PmZhzeTsrJExnDVuSTP4LPLexzyQeFqrv1X1T5MZrXc4aFLMxMpGEAUr56faKsdK",
  "key23": "5jjo2G5wMFR6zfQLLTHnPtRxn3cYMfRzWe5dpEW5ggR4Ag1wEJtmZE8kpZH9Poi4SzzQnYvby4BwEbKFS4vSgf6d",
  "key24": "2i4nCqyDAB6YzDCe9dTQ5kXw6Z9AgUioT1dGjeQSBQ86FNzUQPu5rdLqHmfzb3gkAPG8S1qf79jArrkKTJ3HiSzM",
  "key25": "HXsAGGnvoibZBN2Yidwkyxw5MHPpKqp1gwtU619S2ZbTiagRFun85NCRz6C4SHDGJY9GPsEfepN5RRGvLb5mLLc"
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
