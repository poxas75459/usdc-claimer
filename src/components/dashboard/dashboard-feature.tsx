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
    "3RERSDcBJsJTFuVryuYLp6NzpzfV71b7dfsJkqjsFoDpMgNKx7ep34e7ZHPoAJ8ukwsipeCoPaNxRbyCjnc91pM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xFQgmzXXPo7RjgyKJEvGc3X6QT18Xe8AaU8Fjt99ucjnF3YsqQmiUuBgwskx5fEBjK84WHRGZFB9oWaX1cQ3Q4A",
  "key1": "5XzzoNKx5LAEyP7e1B1cVZjvU4U81JFp6ZAHz6ue6JUKvqkaQYnJ3ec1RV2ymza7V2KJikzFXceVPht9HK9fANG9",
  "key2": "ZLUZBjj9HWyFeo1cELYq7btDt6u1RrMxzJ2ooKeimKYJWg3b2uW5jb99irD2CHxcmo3bPa5XTF9PKXu6fYwjHcy",
  "key3": "29MEbHqhviKHdoR6LpibAkB59K9jLMv6Ef3V8YpNMtAgiH1dZ57M6HRXLSg2ENBnDcta45yJ3ft6jr9e8K5iUt5g",
  "key4": "3NgsnnWtLT4SKE4LZAmUPZksGB5vzsVv1VNutZPXjKBHddWzn978jYxg2SkEbsz44TfVrBbAfPrvZY5cSbWjnM5T",
  "key5": "5FcZi4Wg2zmPDKa2PHQ1LUaEMftteYNGwfbQNDLPbBBUByBFmiNATDLAQJqSFtWj2GaKPe2QjwYBv1FnkztJ8L8x",
  "key6": "5qCvSyUKa4BMADxdU1s9FEUDy4psFSoBFP5exi5ZCUCNimYBbxXA6xA7Xq5KaB2Rj7gfJ4g9L4EmJ16Nb51BnyDT",
  "key7": "3jTm1PSLMsTTDF2seq2G9hnvJVR5pK4co2kuWDHBK5Aab8jLez2tM9pJwwP8dX6LbnW8PSMjjmK8KfzrEscxFSc6",
  "key8": "5znJzE1jfSMCkJib7bYrPCa1a64pKzLkpnyBz8tmQuyxCvDWnCJQKef6eZxaCqiBT4k2KwiWFknkpaLPYFhshcUG",
  "key9": "2uWQS8UpRj8xPk4YcoZx5bUAJ52g4mxNVSojphymt1QnJpfbK1hBmBxjFisJoiG4MuiMYJvYvxAdwPt2VfQFZf5v",
  "key10": "2w445BvtDtU6K5KsmvKb2S5Pk2JVhMy9i5RfVndhXgyHihJ4Q9xidQEtDZX5MmKXcCQJ7DHPjWWuouuEDL7kvsj3",
  "key11": "3UZiUiJPiANcxLSEw7ETYmJDsKf8Z1tbLaG4jBe1A7zW1qHwjbNqqLNgJRgYAd6qYsXFm99FPymTXNVps4ohLEtp",
  "key12": "3YQXexgpemZukd8V7nzBVDEAtzLs3kY3REK5Qyu8NQxvqNgppLhU6T2GbhFdq9yUhHojGUEMUExLGXv3bQUdfX9u",
  "key13": "2WNWyaP6fTS1kR8tK4jYtz8KFBMEas5THxKv4M5b4A7aPpmtSpAWpvUZWXaUsMSEkuvdZLbjTd5ZCKnoBuppzi5R",
  "key14": "61yMtDDEM5K6KurN23rr1MX11FopFowRDrcNV7GZcuw7vNZxuBB3sCVQedw69MWqneShSWMCxWH13rqkc3uWy4ro",
  "key15": "2a25NvQU8xHWpEnxFs56r6MyZSmngvKEttreFFgKVWpwFodp43kT3r2z6fKme9fJqqgDGwYnd8Yu91siqD6tAiSG",
  "key16": "me7FxNGCbLMvtkZWzo6haZP8tdriB2G3ebYXZR67b12BvehNnqhE1Ddw4KZWgrKkVnmTU7UP8ELJ8ZWPYMfMXCn",
  "key17": "5eBVjWW5jXNcv6GBcHuKzwiT3wfR87ymSF4CMkbDX6Wb35ygsKY27yt8b5hmWhieAj1a8VCTvHdg2aJjdApnBvSP",
  "key18": "49E9zfgSWQZvKAw2XFh3xb4rxMQSZVN9e1nq37QE61Q4GMRSz1jrPjdkCGebYSz8HGJJ7HSg898oe2d8smpp264e",
  "key19": "5m7pqGeVaJCyQ7RXwW9pbxrQWNRaiUWJGpNiBFFGthBZXLm13GbHFe95ZKRouDWNZjMuQErnruFndmWqtNS8BhtZ",
  "key20": "aXU6QQxGn2UedRH9MVVvpfrwUYKp1dpn2F3RXadpVi6SBFhn4XxKtGvZbMW3oEsepijr5aq7y78BzzMUWzXMgac",
  "key21": "4TpAmZbvFFwvAZ2dngrmTmJoWb2sXUc99bkA2VMCV6fHrnt4Cnzuu42uxnVxLn8rmpG3M57oepZ1U8fXyqPbfdmc",
  "key22": "2EP6W1kaUXqhNUiM1cxh8F7GBgNcuWx7n2VuXwu4mP2dUGc9VMXDpPCwL95i7RoT7A3ZL9tUyj8K93sRtRPzpU8F",
  "key23": "QhQEXAniFvCqLFV2Qassr2UtAa8uB3Cf2kuxmmLzC2jeqbd4R2mWx4HUsZDVt75iJ47Kh5u1p6kcHMeCWXar5Dm",
  "key24": "49rT4KAs8GpQHgFhiaGQ9mozUmCyArwsnxFm6tZ93ceyj3oDrJYfzRHXRktZfbi9kxEVohU16Q7pZRnTz3MCEsKG"
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
