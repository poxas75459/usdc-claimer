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
    "2TH7en5VAbYQX5SCMo7eLcKcaoedkzeAkouY4FbPU5wUEEVrgWi4mzNTXPriKuNwAuDYkZncUkwPiV6bcG2gK93i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NLS2hVS1rEQsgtBEjeWdAt5R3Zk8Yj7Ebs5swP3ZtR6NtTB5pJ82VJ59CE5UaeDWJFB7yrE6ocSSuPoQ6HpR7zv",
  "key1": "5TSMTThgrwieYSS53RTzgTBjWzCZAWGo2uEa2oC2npz9JYKnffNPGaLezMUqRJrp8NmAgrySprQ9NAbXGyXadGmy",
  "key2": "2sVUWmm9NkiQkF7TRbpNtbu3P7HLKbcPEn4WMyZMeU4ZFb847r17Gm4CXkrZqsYUiHuMge5gcgJymr6QTbQnUzwU",
  "key3": "PbpZEsAK4UB2Ngdih3aKrjgghNNdh9yup6T1BHxqsaLNQgWUroNtgQdGChzSeheew2ZbUPoovxauZ7g1NhqDDiq",
  "key4": "2JjtjYT7xVcpAmJSgRTw8xYSri4PbgfcHFReYPwU3pmN1yix8HmpnTP1J6ogxNWQYDf1921nGjAMVkeGDqWQbDrB",
  "key5": "3oFqrDCMbtRFNK9TDsJBnheo3QLLR3uz9PEFByrpf15usf56qc5drcirrSrticrC7asi2dM5zyhtHGRJs9wEtowz",
  "key6": "3HnURGj8BQA1bLy9Yq4vQ4vh41FRVF7Yw2zTqRK2CoTwaZTtLtG8eRh8Ww5hHe4fKQxSS298YrtNmyXDEQPrdoru",
  "key7": "5EmTe7auwnf1iFYQUqinQx4Se2qkUY6HPw6zzQusf927WjKgZ1YvTeGRhrdc8HANjNgqB8bt9KuRLcaNQePhSRnx",
  "key8": "4FDfHsP88tH1mRJR1gm6eMuvJkuxheA3KWKQ7JGcsLKHJ311NkDyMubPKHwfRFiPKSs7J5JMWjmFkroWjEmg7CcA",
  "key9": "3Da1JXzxSLCLJpp8R6TRUAF5HPkK5zZ7uPP6kwzawxNjZBHBuEhFQWWYAwF6fkjBD5BorssxYsothDfyqLxqeScc",
  "key10": "42yZc9eqqfqWrPFDtbNoYK2ofic8s8n3kPdZj8LqkzBipjudWKFhJtELTkL6rFN221wTvTkQ45MnjfixrV9wR5NW",
  "key11": "4eYS8sREqqSx1nWysQp1R8awpZi6NmSoFiGxmPVdQLFVorVY51FECFWrgcyPW6QQbmiVGY5W73WLH8P1Lau1MXpZ",
  "key12": "4e4C1418DTija1yxrSUL7Mx4KXFkjZTr9J6Czzs1v8T6kp3MWoa9iGN29w3aFeGMCGLjmDxwe1jzU8kB7eBnGMxS",
  "key13": "3fXTk2xfRH8U5cqbJcj55TmP6reCtmjehE7DrRcLmjMa1rEBLYme574ud9EFpvKiBMVTWV9cQWKWzq4X6TUGRVj5",
  "key14": "2jH4txHs4YUdtukb867zyaEN2tu8VhaBqDjLpwNXYCdo71FMFUGGZiZ47rDzGUvcnMdmxLRf1SQUQs9EyNaMxtQG",
  "key15": "WcvfD7aY5GhdgoLNfApAsAn4F9gEEtikDJXpPmm9M2eKgMeazrfQ8akMST2FAzUBDGbNn1QK2Y8cYH9F31DBcXv",
  "key16": "34y8Wdt4Yg6R35YyS2U911xLYKsZEXUGvyz47utAcy1UtBniV9vAQb5wXMNwmApv5Do8LoPMoChETNLNZyYVqMcX",
  "key17": "24u4CQLgrq2NjRSKTp3wNvfm3nQK5VVK2u4Asa9fsdAXUyuM3ZiS8HGrPwZCNztVLgD2yqKMGtK4zCmZroJ3VAXr",
  "key18": "4msJm8Jm5MrJ2AXTiQvxJffD2anu7he3G8rD1yDcaUVLXdpy9NK6xN3yn7HGQ4ivwHh923iGHnKiyPXC3afrKwvh",
  "key19": "4614jSocHF7uiENdKztNnyhX87qA7mG14qtQ9Z5cN6UiwfN451cn7jASQWS64Agjutr5bndnuEAHP7Tmr2KyLLtA",
  "key20": "2VpEa35gq4bALxA2oBapHpFRwWtJjaX1jPCJQzWXjYV77HCt5uu2KLUCVw4X9bmvtY9CQFdRmyas7ZqzDUfoY6Ri",
  "key21": "2SmTQZ4MB81QvqBmQ1SwYDMPhZFQkwTaEN6N6d6YYQj6RdSPKcMyUh3wrEYkwP4zXGMerfyXrs7BcjxhHRFPcGtg",
  "key22": "4Wf6Y7Z4hvTafXEY34eehC8N5MGBmk6MkHPHW8ZHxQL5Qkm4RxR1ZyLCQCsAeNRXtXzPUTDJpKnvCeTZojyJ17o7",
  "key23": "4eUruFPrXsvXTzvkWZxsQoZqVtgkYRiEnTuFvLwEmiQhKj6Dn16seZfPoFEGyZ5odnTVdnkWMy39az6JMKbX4mQA",
  "key24": "5NeNheVzu5CeSrpoty1ow6HF9Xabhc6W78EHC6FFEmEzDcqUAgQGLfb8Xuk4qQ9V9FJdwjMkEJWQThxoddg52eJt",
  "key25": "tqPosoqkSyujvsEr1y1jxTz54ENzXbk44w1KwsGuqCHHWfBW8Ejg8Mg6S1qx8f5JomdytBshU9AWbNXhxxKomQj",
  "key26": "5E1DSi4FMgVWChD7GwRuSkMNX3etcPsBk3kbAqGGQbiCGAGfWG1v5pPNjxR59uf4u5wdm9KuYQauqty51bjAgA8e",
  "key27": "5cPta4cDBAB13ckZS7Atsw5mYn8pkreQZvRuD5CcA5FWPM57DNBJoyaqfeJG5dybwZXJKhuFrPmixxMWtaevdETv",
  "key28": "4CUbncvaJZBdZX3yr3zrK9Nrk6mpvky26WkK1kLVwa7VWwzKgU5fJAiQAbkxVKxKPMix5uf3iccZ8fKSyLZo58X2"
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
