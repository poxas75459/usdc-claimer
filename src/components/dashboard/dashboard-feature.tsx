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
    "2GP1Ghp2CUY9YTgeMvvEEtgZLjHJKu62XX2NhrP67Zzg9iFHMtFxeiT1n3tD9zBkqVAsoPQhAzeqy4jpN5P1fUZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DSqJmeWsJkyDWfC4rGX5x95DnwvNxZr4ggRqtQqcivfHVEx9iBFZ1jWFgzB6tPJivJubHadRJYPJWhz84C2sEiK",
  "key1": "Ww1UULZMZyaQRwbjwncwo4n7cX7KMuBFvUxNYpJAwXLFfZfmg55Hb1WsuiWJ3A9qQpKCBeRz9tBefpJYV8B7iw1",
  "key2": "ZkzVCjGFA8pVTpSQ7qzwbqPYaeudoHM5u7Ttvz5fHasUiMgmTwZRU9judZhKL7guRFkmN9FfxwJLuTvL9tAdALG",
  "key3": "2WrFGXkqTXfJ3beRL44Fr9F18VbvxkL8UVUqQ2eWcyqtSvvxtT1k84GtZtz4qEAs887Sk9Yvy4bGYGs1DmvEqiBE",
  "key4": "J6GaBafaC6CXVV2xoyjBhMTEU2NumDczL6vCeB17MwxBDvhquffx2hoTw29gLrwy9rKcyJ3kgvW5yNKy5RmmjFK",
  "key5": "39tnbjR9PWUf2yEJdQWcxdqkjVsRpjbhXeUBVo2kgBtP7SwkHzCybssPdYTd9EnR7y6dLBGXSCYg7rrSZmYdu5NQ",
  "key6": "5DvEyBC6Nif9Ayn3STwYNJUmWRhdAjZmEj5ZbxYvQ7X84yCFe6jMraUV85H1FswbD3Vo8CbK3o6ig93B5u8GzFSF",
  "key7": "3rdbzteC4ruemPs29CtQWctPshcMoBhzjCm1VKBFvzbsb2t8bgfFN2Ad8zUgRypJKY7U55qL9ZVXfxU7Bk9uLPyj",
  "key8": "3X9L3FvLSH66qu3n4EGMuLC4VYYPAeC1oUkQ77UrGP8vc3Q3LCpXEBULVf2SVE9a8p9ft3MeWySEs3M8dnV18VV9",
  "key9": "28R7kydCReVSPdijq1xW7yxT1tdq8JwWYGDCzxmPWmrZkP8RfP4CAJPFUWQ6rQMWvKmQWtibadJn17sWt7hyT5Ck",
  "key10": "2dLsujUNbVZooxcadeXCv3tkMckrVsCPkqGuiF6YzKjgD8vksTxwUhKRhTzYTg4kqvFbKqqej6qEefhUzGfD71p5",
  "key11": "25oourZsEH11hUf5r4ixgELF8X9aumRvmZkcJnUaEQ9Re6rJdFMbi4k5chcPNJSra8gL8XTEg53HtzuzWRM12Kc2",
  "key12": "4sXsk7HmVijLwzryfTuSxLFHjENsGi5xvLS4EWcZSWrQAmV6f3PwN2TLJ4Yi5SyffUCCxKJZWfgYyivijMQ3o1JE",
  "key13": "2PhM59vsMFFcNxmhJGg9wP4eW5cZz83YSi5o8DdEeSPQpxSRrZwfYXf3rsWDm4cR5k1zdW7AQjx1BxN8HXcNbpLm",
  "key14": "3zvQUFYz15sC4u2kCoFUg5qHdTbNt1yMeJqnBtXBSS6DheQDMjgoaVvpwMVPQaqh14Nt6hAc3SZq533k4KxCVhXf",
  "key15": "2ZG8rnYJVJNZ5YyWvNWveaaGspXQnLMg7BRnrr5fbgyzQTtGEbbUnDBq2ipi2FPmey1T8xrdn2V2x5Uvt3FwR4WW",
  "key16": "4uLUiL6Edt4L2As71JvRt4ZhTE6Dg2rZ73qc4pgYtj91rEYAX8LQxFmv1rDqSdqkbUXq2BQbkWQTatj98Lem2MEu",
  "key17": "Wpz5i7sCGwSyp5ThvmJP3Zd4saaTeDgDq7UrGLviAf4SixBWqLJvVHv6g9oHCjpNwDtPBdzD747Ed48kHCtmpNt",
  "key18": "677pGZA1RozDHQc9jn6oWgjGSHdMv8CCqcB9HutJTMTUwQ9d5iaucwVhcPsN8AvjnMuykgJz1TUr8xSTS1ZBJ1Er",
  "key19": "4Fzq6vsZEeB9x9KNq4Whx4YpCqJUurcQBihj6Nfzjv5btpme98QURY3gfTBBZyqa5r5kEpcu2B8hQ5vh1SkhoeK2",
  "key20": "4RcPK71dZdZ5oaZLNB3oreLhgL5ic7TsMDkyvGKCjhD1pAu4z2BQvzGYSvUoSWofcuZm9rfWqRAysQxpCvyDYy46",
  "key21": "5bHTusFnm5LE5DK7HQKaUH5FACR512T7Tcqtp7UmX58LeZKPsQxYdq6VGx9HW85LvzsPf1B4cXKaKXEBdi1Ddrya",
  "key22": "2Pfetm9dm34CLYrvo6MxR9ZmFJzc5dQitGzdQbiPxyocsawAy37GHmDicsRf2rzhk5PccmGkUJ6eHi2j2VTLm4hf",
  "key23": "46iuKMPJjPGDEPsYt2vJpRxMHKBZ5STw7DTBd1fj1UnkJBLhoku7mXkK2EQouEhmg7W1ZThBnt8f2oNwAAyL5Srh",
  "key24": "3FoJZVhivkcGD5kc1FaSNY5x67E8tX4iukKPSykEXjbSX3BTki2CSNPCWf5FxF7bS8qWthJa43v1tsiy8TkKgoaw",
  "key25": "4zsvHUqfNLbNmFtZLwTPNHq3ReR1YPCqk1QF1rCdbpM8cHBCTc3mLx3qjPaawHAPwbQtfnPUzf4nDKFp5bGAArzZ",
  "key26": "4yRr46FpU6AVusjJQktrn1NXXp1sCx2C3Cedi8kzyLM8H6kfZM84G9cFEYzzbn3HNmDAJVCPhxoK2fgJfrfAa1DP",
  "key27": "UQSAj4jgk1JwoVb9nsK6p3z9Q2ZJH1n8LG4yQ3i8Y8g9TyaYhn9sVQgXWqhX8A1rVUvJXkyjwfVNYaM8sjtFAfM"
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
