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
    "2VecTb2ksVNwU9VVwRtVnN6BUZL5HbVQnMnjMZ62rQARkDpyMJRjuS65AJ35JdzEdWKvyL3uayjNMYb85tME34CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qiswG1sL4gqttwYXiyxDfbpqeHFnhKzP8xpfLY3a4dBAAuPUD7qdtS6uoXnifPQGUuzKfmE6MBbZkUHQKe5X1n5",
  "key1": "2dE7YFzJWe5CU26NRG9uZgfuNsgMdqQYzXo1PyAnji7Vo531MG4ujPJGHj2cyPFbD8EeHBmVeTUC71SFG4fZpsmr",
  "key2": "4Md8A9F558nZuX4hciEpBPzaWo6t4Tu96yy9UmehqzbtLr1gCjZLMDe5yzgDh9xXzEXmC1Qrm5CukmAFydiVSDai",
  "key3": "4n7zBV85tpv8Fu5Dkj1jWXkRZbdDEpJZec6xyK681XU48VeCrNSGTUBUuefvgZhjZiQ9PYJotF24V3qWiUg5gjUh",
  "key4": "q1LgLXp5LgFUhVRjgHHqgSEdUwmhvogxx6YPMr8mM94gUWcQBrVLSTpTzHs8X7zc4LYkyxxtQ79gM4VhSQMk2SD",
  "key5": "27CqrjiQ4JRYiNavb2wuUvhSSix7mAaYFf1Sdz4MWmgMyDVJJFL4LahsCxAmYCULMu7jyF1PkcZVQqNHDoxnFfYy",
  "key6": "4wuLaWV8aU2ZwEgJEA8TBNUD4qmQy3t4zLmuJx41sk4THM45MH3FPNFj8H3r2ABpJ6MwQK6Z4vzbABfjf8aTxRoM",
  "key7": "5rXXV5eF352AFRDFsAHzjuWeVT6yt2tSGh4DTKWVByTmHBVZYTtYCi9F4TpUgwanQu2LW4hutotrZEfc6TAkiuJr",
  "key8": "4sLPuawfXd5rJLLwjb7TVAiK3taVWsi89mWEMY7qS113QdxbESHBGaSxiwf1qQbWtouAsTLWhMP1CkEwyUGKy8ZZ",
  "key9": "uRbex9ggRvVX6cA842U8TKUmXiPDFkufXZMTd8WG3GwQQC58RFsPTc5Ejp9rnShTcA6HANkijDBGrfYBCXMe2q1",
  "key10": "4pHpT2pQF1D4WMtpuqywf6D2UP1Auf4R8rmLRwVWQc2F6Pz44VQ5FTU1rXC5ytT7eUnyq2wDey2dGNqmMvjSFzy7",
  "key11": "2bykox4W7kmeoWVXLZXna4PogkhgTmS5coeJXeCa93AssFBWe73BiS1knd6QnPB2HD13k2trdTxgHB9x3RXYoiJK",
  "key12": "4Ytu91837m4pA14R5C18iDbCEz8FUo3QUbe7UTi8JHKVQmRxGBVvGgVgYeGfaMYtnnzSxg8BJdL8696roMYKpaLp",
  "key13": "5T46q1r2DZxPdHHRxstFuHYLNUGtYcjvCiSkPbW9ZSKbsXjVY8aeEzmhDKie5dQmGzf1hm2vdW1buQNsLgurxTj",
  "key14": "2iRFkHcc4JfQAesfskH3H7gS6a2t8zjchQZCugv9Mv7uNjw2dzqjR9MQuAhTy6adBJdcNEWY6djDnkFSNg45RKds",
  "key15": "2ujSjuYsEgnzk33eeAixYstMErTUfVKiem82zXjq1NZ4CuBDkjxR85wAME1PgmMGEWRiNMBr53vxN2ddrRRaE8zv",
  "key16": "3gpLaNaNGposDXMio3cNUArukP6Bz9Ks1okdikLxd7XMDAFKpuGSzqq8VvhoXENwWSbZzHDeVogDgfWjXVACVuE7",
  "key17": "CRw4PsB3wA44B3imYpz7BNdrhWNegvbqzhtx3XUNGje7C7P21HKw6DS1qsisH8LVR1coexz5s6ycBFER1P8HVo9",
  "key18": "G9VVs6h6vfCRNcpCTS5ZJEJyRK56LEAnyjMRMbTiXmPe2x1oWJqsTpjJkcffGG8YjKz1LKpUKSbHaV5gAYbHNN5",
  "key19": "5mERs7VmBRk9iEVR5cthTBe2Pd4EygEU16sBxzNo3RvEVRC7WsPEJsXeetynJQ67XkaoAVZFiVV5GA5RjUSVzBhW",
  "key20": "5ammAgCysV8Kare3WcJVevBkcJSA1BxVoMWGfmUWYrE3sCeBxCbr8qUZcqh2chRQhP8MNftE46id8Q1RRQvgvxxD",
  "key21": "mzUyXrq5dQMfy44JvP9jA2YFAGtXesbkyKUPhU8g4c3S6x6mQBVhMyarbyzri3SJZ1U2W19n9BQ91VbnBNpZa5Z",
  "key22": "5542U3JyuMcncTi9YuxrqjedMo18fujpNkcd5sbF9u458y8H1dvEpYRg3oGs9sCSV9v93TPNFga9USR9wUqHUBcK",
  "key23": "3BWD18Rt87K45ZNSQkF6JVLtq7SdfUSWejUr8yQJpXhi7LcZX49hi9i5aqYdoYHLsfxPa7H1cUy2y8BZshPPocgh",
  "key24": "5n7BSrnRPrec3vGk1z71riDfWmVLKBb9h4PFgRDKc1uojo93DvP86gHKbRew1c2x56Bm2L1xEXaQNH58ZeBzzmES",
  "key25": "5dRpXge5pwuQndpgmaFq9snVaYqK4tNo7Y9LwfiEhMtcXKUAdbovRKiKHDoHapLi6yBwpHC4cbmp4R37ZbSZ2vPz",
  "key26": "cBoMyUBi62hyTdgW8kVpkMNc1trYLZLEvZcWuCHBEY4bLqxFtDSrQjHCstUUa7jHowsN6VpbJThVRvJMtLqY4uF",
  "key27": "3ejHEZgHCtsvcdFHCGpG14jm2SiU3PJR2hGUxkjoerB1NRcztuJtNV61avYzuzsTfwSx3fWJXk9rps6kZ6ZU5m7h",
  "key28": "44pBjxABDbKayCRfrRRrcGc36xtHsMh26HcDks6mJJ6P1fNbb5jk8BT9Xju3c3vTJnN4xbjWfGzBWs4bijxoqfLh",
  "key29": "67TVv1UPftow11McxCxE1XzrqFfJiTAnsqbKSabyMHxVGYrcQnX6BfrxPHx1GDGaUbZJBp4sAdFy1iX1NY6mJnrt",
  "key30": "iKvL9Y8D5qfmAvWRhsXsCasjnKPbYmZUSANyLQ5o2sfVquzN611x8MPPqM3tS9899Vzs142HAtcqfppfPY7Pbag",
  "key31": "2jRj8vRXEJTM9b58dw3F4NQjj9HGcWWCRj9Tnpz7qWFLh2KFyMJeyPaidRvRdCqW56NVnAtKhoLP8GVM9scuovCi",
  "key32": "3FDWp1ADPPBUjfnfQxuucY7zr6pJZogK5UkUhxHnVY1s82hTxJ5gxcmqbLWMMkh3yoQ8GDE5chFe4mUqZiZvKDFx",
  "key33": "3iYoF24Kbat77GuPKcLpqbNNTtxdV6ViKBU7wD426RH4uHVibjoNTfcaDZ1SNMd6R3rnHqbL5RdzSZmdGixgFNk7"
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
