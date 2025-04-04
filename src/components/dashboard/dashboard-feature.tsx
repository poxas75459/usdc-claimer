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
    "2QNnTKNEkbtgBGuJ6vDZBVgkMY476yxARo4XtqyFVi84VsW6zRDG2RaNP1Wo6qmqfGZQHs76jbRhJ9bcrJVouNWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MtNrmr8nNDn45bMY32xcsBQmsaQdf5ftQ9LhiUXxYozwoWNSTG3mke7FHqoZi5vWTgvttnv4c3RRVaim4zFJ4yc",
  "key1": "5ikioBQWdV2jQETDJjqafvurWefqRnmqj34b1V5f34QCyTonp5UUEHrtbbWXG9q7PDJo8eYTpFH3uw8fDbv5tyAz",
  "key2": "33mRjwWuakz3No7ZXUyuHJatiwUb4Fjg3mzhPt2HZ5fKBZNRCZ8dVXmXXLDCtGdEQdiUS5UoUB5JfGftMUhWCJbn",
  "key3": "55z4q4KjzKEWCzgw4WmycRrnSpPtfLeVELNdJsEkW2EJkbTMebGnYCoNYRv7yaeH97UEp5RKJcmrGsrTsFxyihoC",
  "key4": "4EuePtv676kNmky4zsrb1onSkWU4ETc9c3o4bzuhQ6UVYYV2jE2gmTkoUDbkwg6nN2DtXMe6nWxoadPsrJw2NC2C",
  "key5": "5qhJjiZFGhmmSPfUtsanW7G6fbTr4Va3ihUtCrPhwem1PftxfWYkmiShtMrgqCxDD1CdZJnnwUeYiBHA2cUcBWBp",
  "key6": "JL5deodiwAYbEddSgzRUPeB5yEjvPhJ54yDzcez37bdAoju4ccsfhthNnVcZssmujaT2QkPrXVin71sHNjM4TFJ",
  "key7": "2Gfxf1ZVUgGm4JLztbdUsdDk8QFffeMqpryByRjS57zdRHyMrpRNLpJUXYkfnZGns2CxxFXDt3LFZSL9AM8HScJ9",
  "key8": "5uvmnid3DNRYYLAYvnfARM6fWzmjC8GB9PQYYGTR5gbadCjTs7RPtZDL6MZVZbM9kxNGBB5KruUjJzitAtQ1qdKz",
  "key9": "4MXNpNdVTJEhRunTfCV48ZHVRNwcUm5toFtLa9uPaiy8zxU7zrpx6wtcNbx478k4whHtaQHkN4Kppismvu8PtL2E",
  "key10": "4ckJLzGLYWi49DfAFMhv6SFTUCTQouh62ikSbTE7rvUrk1njyrkgYgdhBL1iyjDa7av2jbwLkTqRDucQSg6LxXjG",
  "key11": "66pG2LpLPqhF6cFrCtAStGJgbT5zpC5TCvq5P3KCgqVo6BFHAgeoS5E7ebGNxwXAdixWhHrG2veBa1v2zsa6A8Yw",
  "key12": "4mT37A6aatzsUcYUbScAxWtHjwynuBboRzbdVwLKirDovR47VGnsbwGKgC1UfMHNNc2zuvErMcnG5bju2wBonpeH",
  "key13": "292Kx4eBbANvpjzGZHjchS1qbHxCZ8kswaBwDVNyWqMVjG2iEK6bJaytwNB9TJrSASokpNF9LdJ9wQs3JuzsUJMh",
  "key14": "3f2y1yWgYmSKN4oZVXg3Ajh1NdscM6aBuAWSGkPMWLc5xZzksgAi8rmJLqGcXzNZi6R6AQzLEcNfDRdVet67EcLq",
  "key15": "5yu5Lc9CXXgRvWzJKcJEjeFekgnia2i3hALxT2ikAavu9H2uwLm83HUMudCFn492PuMJStEhWm4HZebAe6g3cHhQ",
  "key16": "4xQM12rZa6AEAVn62DuUYm5y3YKN4RQQySWKiXG76JTK9ta9aPD8isdVJphwUSHGJU2MawmDM5idor5XCmyXJJF5",
  "key17": "5XvHUQJnwMAb3Wo3Sy1ZR2mYohu2Z5yWirYi52eLac6KUKBme6J21u1wdkTPpcN8FpQg6xzuLPTKbyq9EJks61eh",
  "key18": "3z3SAqz343thQD8mqb4qAb69MLGZvb2UW5K6E28ukLnuVDwG2WcNZep6G1vgJVuH1R1H8oDZyyP4mnbx2UnyGvSV",
  "key19": "36eAoLSBffc38iKnLLCzq74jxqfgASaq3jwQHvaKU8ENHLfc781TutE4shnexpCTqpwTiL5gxuSMGZeV9GUy2eW7",
  "key20": "4nZ6LQ48pcpWAGVHreJ6VxSCXy4x4gMwvwBXw7QwiQEnxzctRWQ2ALD1R4R3Jj6c1QvzwR9MPnDCCcbB2xoCV2YN",
  "key21": "5tV4BgrF3U8PwJx3w2kYuzf9SDbkTk2Fogt1dLLExsg69ceKYaNyR3NXcuPdgGjKKxpQmWE8W9GzJf8EhA1AzRSC",
  "key22": "2AyBUiX3Qs12SH6m4wzsEE3kTpRUqLvVmaMU7uAkxPsBqawpBXFJudAp74TLJAGS5wdnwjn6i7rn7oNvwK9hUhW3",
  "key23": "JqfiizMLjxST9TmoQrUQxN2LRPQJfqcijYFumpUiMtC6QUGo5bPqdbPwg7A7hYw3z8ME6wKfvW5KX6gzuuZFMZj",
  "key24": "4xHcJyAf9erLv7CoZyrhMnoQrvKD9645A2dXuxNAxMDuwW9noPesEAAJNECMv3Fns5wZ6uWHsaNb2cvMMPNyUDH8",
  "key25": "wonHv8xQ3dHrynmd6EFPoLbVHRHssLUSoBmHNoB96gRKRfX7mo7MpCUTCB1orSeHwYmFMFCEam4VxdibnEdEGgG",
  "key26": "5JMVkDZc7TkqDfPtRCZBKrEvTxkyDnjczUhpgmHpNSnTVutM8Hsucd8xCiYexejwopo43Vs2LHQ62y8bKpJ4fMRu"
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
