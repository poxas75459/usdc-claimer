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
    "4QVJLuBQrKaH1fMgahf1NBXbr2dgQViDs2v3FhLnq4TEwCV5j8q38u1maLaoXLhzaTr549SAcmUpa5BByT6zCiaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eK5AyuqxE2ptJDMoNEdmTkcpmWQy8nndJ1ZL3cgD7NZNTkTd7isahPt6xn4aR62cBj6uBjJ1oTh5dzEuKyMWtmH",
  "key1": "3TWWFmBiyH1urnkDyn9nJipmhjU6BDgpBH2vKfB2JXY1z5GEMnzxFLMn5cgrRA3nE1TCywF1Yn4rkaWNhXU6Af6w",
  "key2": "3tX5XeXCY9dLougGofQY1k5thyP7anGXSMfypgwsdykpTJZ4tz6QEqWJr4Ltyv9oBDTuhSTfwsYYd4Jfz1VndZRP",
  "key3": "4MUkagNMgqwacAR4AzXCqUDm2zmsd53u1XYBDF4LPZNKLAArktJrJSvjs5LzS7o9pojNAZECcoTqBbeF6coTCVgu",
  "key4": "3hLeHinryuq3HB1F9oxadHiP4FZQDvmFiBynbRAnmMEdq7iK7r5YQewiKLqPE5jBWf7Eprei7jjaUXDBA9fArspK",
  "key5": "4NFi1cvc5bDKbGKKqgWKswoLrFDx9Vo5ZRhfEgUhgb1Dp118MuTFzqNBMZ2ZkuNG9e9MjPEhXHZuA883EJYx3LRt",
  "key6": "BYQLeDPYWHVvQdyUnR2Zea9yiMT6zcDVVrk3ekPQQTcFngG6tPS7xHb5n44EURJ3H8jE6iqcT4svzDCvLiFE8zv",
  "key7": "4i3rR6KBknVasGzsciFdrXHuDumMMS6L7NnYytx4fChTQa2KJX1Mo4on9sMS25WvRiaJbkuKPqGdk5TUDpXYLyeD",
  "key8": "5PyL4ZYzEkRKu9BzoT4gFZuxe3bn56KjuvjfE4ZXWMeuTNK5o2oGYDCz2YnCeTrv2afzQAa6TGkHxhhFN7hMyR5t",
  "key9": "22GQ9dpSdCesSNzinJnNzgmYudLs2F2QSFh7rSr4P9rsagu6Ktngpf1c1eZovogpS4MasWP2H2KBLxbbQk7FENcD",
  "key10": "sEXiJaeD1ryiS1aVsDEawxUqtN2ptz3XUczKNaPTJyvAnzNbqurC5gHE3zgJNLbVdwK6m532euCRLyF4X1Vpvhd",
  "key11": "2R2LBAQFAsWSPQ9qAt9FPoDTxmFaBrXyFZXTjsqCzH37dR9ezrZEt84TC98wpUTMt8i7hcBRVymBqmvu8HHoe1a1",
  "key12": "3mJN274SmVN6ZJj25JmcLockKQKV4gxx4ciyJtuT9gGBQddyuw3y8P2mNSu9Uc2z92ZKiYc1mTdn93HeyvU11Tji",
  "key13": "5MAru8srksSnVms9h91hP8U7iysqgZ4st1Xka6YdwK4mZfZDWfb4c7Ab9gwBGtU6K8HxYhj9gC542obnvJ9kfCTB",
  "key14": "4deiu9Hse9eWiuSnyJNxQz7X7EEwPBqDzZ2ArzBBaJWUfCKXLNLG11qwGwcVfawHESB7VVtNg8ETXiKiqihGZVG1",
  "key15": "uZCNabfjdF4rYdvXejfHjk2JpyE68ixig5UZ9TSf2fd9dvSuZ3FJEsD3RUQ8jbGKVkSfXr1viaWyRScy5wAkB7t",
  "key16": "2SFbTZ1mYX4UhA3myg4cVehzfrTqx3grVrab9XeeAuRxeLA3aC2xV78Nj56DGdLw4cVmHYv1wBYkoo2Zd2jUwQMd",
  "key17": "52tnqQcYxHRUAtem1WBqPCZZjGw58y5RB7mpNZ9ZjvqHSsbC2cyPGHS7AKZEHTrFovJHRvhL19YqSLaCX9s3wvWD",
  "key18": "13p5kM6rwqrNpYD6u1xnxrjeL126ujgWN9yYTcdM3zB8Udvzv8dATSTzavwAfVNAacSdRSKY5X9DZBLSUfukaMZ",
  "key19": "3dpwD88S2C368tVLgWFCaoVrVzKLqbBksXoBd5pyL4cyAsUQaRmBF2hWqzRfrNgm7wnRed4Hts9RREY5PX7smbnN",
  "key20": "3vjNCKwxiPxnq3p2Z58BAg9e5Z7AKMPSDFHy6CRMUgTsKnWVjVLrKX8jzutiiVgADwxfEo6nKkFHFeZAhUBquULb",
  "key21": "45PNvdkFmbqdGGVrpZeunGBrnBtMRvZFV7ab338XdagNiJPVfGmzs1NqAJPahgxKnZUg4vcDGFJHMfoizFxt3rGs",
  "key22": "2mpFyKGJ4FDMnrEzPZiAd9BWC41t2tQatSUXyjCZh4uehVpUx7RuTWCoB48jRoNmnq3AAfGAC8Zegzg3oFQqwTvS",
  "key23": "5ansb81CXSu5F1VxVZXnBdxJacc56KqW4P1rbCXrBn7X2PVKMQkjy7Kdg5BzzFnRtjEWsh4H1yjdTomxDwvoCr1h",
  "key24": "23CKs1GwwKYz4ceHUpRZctQ6NR1NooNmqY7bLgN1jAPX5sM6Fs9EBwJbSBwjLt3H7zfSYGds66jNjQu1WtFbSsTf",
  "key25": "2rHET3TkitzsdUZr3e5xxBjurdL4ciYoQUtDXGbnrT2k3id6p8Lho6JFiZmtpaXuWwTL9ceQRsbXtJUZYMtb2xWT"
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
