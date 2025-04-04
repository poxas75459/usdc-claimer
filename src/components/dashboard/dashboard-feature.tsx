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
    "3Xcyw6m8pQZwLbjLocV68gfk6g8Vz4kp8KkVFUuCLQ4dMRyz5YjDcrNUwwjRzemUZFtTYx4rdJs3G99qbWLnoNjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zJiaadpdFhJQzFurUpYQXURaGMyefYoGenvLnR3s5z7yWt1JNjxznn5NQMD7XRvPuW4AnTkJgYPnk5e9gDQbdV9",
  "key1": "4TtBTL4e12YTfwgwc4x2zVxSy5wSaR1SuWeQuzfvBYj6RkSegc27ULWoxtUEqnkZdmN8pabjLYDJsRtvZg9RfQac",
  "key2": "3sveAhztaTrDUdLMaaFrXtvXdbg44dGHGnoyhouwzUAApUitEih8bEqt86cTxVec9LaeH6tJZqjtehxMc783F52f",
  "key3": "gxpJTKni8LwRGhzk4mAkePrftkYh1b2ZoXBxGgqnnEHm27zwdXLD9maqMCvk3aR9nB9aXij5Rt5DZvi5ABjUpQG",
  "key4": "22fsdiQ7B1WP6pgHvz5B155BYuRfJKiG5nHB6ysUqj5i5Vb1LrQf5u83vJmCPoJM66HUZNA8T491ACAHZDZ8bph2",
  "key5": "2MGYJw3hRQG1GjZRYTqSDLunL2ULHnjnFEQSwdN5xa5sMThUv2f2xiBBmtHN8x9QYcePWqLdtFsVHWfovpeK6bDZ",
  "key6": "FiWsC6CV6cCyZAPx8SRPKwzdfSkhKKMnoFRLyGvZwbAoTEaxntVECGFK3dkKxZfpckCFMiQXSP5CUmiLMGo5LqG",
  "key7": "VsYJzK4hb61tHiEQeavNQGRtd3MTf8tksPXg3rSaSb69xU4UwSdcTk5trF7GXnT6XnK8HcZtrfq8wCPyzeRSZJV",
  "key8": "2pdh8DQQgHzyw51PY7Wv3vsibTj9uewmp3Q98MrgD7bTPth67Yw3CRsX1p1jnX3w1njAqy2j4Q5oTVyWdWgXZcwS",
  "key9": "2Zf9TCW3pi6EqW3fyCZ82wmY6dxEpgvEaUHUgr5UqZMkSJ1dgGd2Z1Sfttgej2afqzUTxf39R6p2g4Zeviv5LrZ9",
  "key10": "FDa2uAGozVya3AMndryNynxrrLpCf3UsDnvrrVL758gcQf7NDH7cWDkbs9v3L87NbzdzZNf3rtijJH6odHQ1S5b",
  "key11": "5uqMF15TxEcRv1YTxxE4gCbPsavw6So5p7NR1LT8rEsj6doMdkPX5JwgrteMcLNQGzGoVMijCvyDb84KV98azuxP",
  "key12": "5z6KXhMuK1aGaUV7A6i33q3hfbkNKvdt1whif2623fZwykJGJZnw4DZ93K4TaDGvXWg5E8NaJEoiMszzh56Zm18e",
  "key13": "3yqREB21a2pWeJYRhnBYY6ZAYRenLX4kJWDEJ4sLVeY5i2ek2v9jb1VjnTJPa2Wwnmnaw4JkGHEi5HAskQZVyfu6",
  "key14": "3LRQ4HCFuX9VuWezTrHkujbdKWzkL6gr9nhcjw1YBb964GrDTD533vWW4Aca4SouJ8k2pHQ5cVHYWPQuyrnrepvC",
  "key15": "22QZWK4cDXaQbSxPfjpV6xNLixXid95ZULKBMYqiicSTMq2u652p9TCcNdTkgdJgq3RPFaWeoc7FFtjpEjzdc5D7",
  "key16": "4kJ1eu8Zo9GVxNbYtJNjvHYJFRBT56mKqXNLiec3bMmvfrPzZ8YGjHCcGuvfWdCY7S4jv47yZeR4c4T7sxuRbpE3",
  "key17": "3cMF3by8efW6fsSS5sAhjKvyspnAhLMUbecLh5vxWwqxaVrcg1FYDqNDcKjEqwLzKHf9S5tTDa5bEobkSqFcKioQ",
  "key18": "Gd73usDDRmCnpPUCGf8tYVWcxfk8n9a2myZ4X4qsjFKmSoz5cGyAQfJB7v2GaQ6jr4znzQmbi8birrkXRZwQHNe",
  "key19": "5uLL3hfyURApenYrdU6PNtkpyPGTJofJqWMhPgB3Wpi5dRxYguxNCkVDCT5DyvRC5AUzCNrTDfp6XjbGm3ZhqD93",
  "key20": "4LsyxM5mns7uTRCU9WDcBb7bczXoejFa62t9z31bmC1AVbUZS3Mcw6xDVQTgKZMFLLUFovQqhm2F4drkcaBz3zSx",
  "key21": "6AZP9QS9P5LhWMefFvg3LEVucBcKAWwgcYxyFWfbYbVc6yR3vzY2gfePWNyrBoYNEVaHc7eZYWmPoLJVFioMj31",
  "key22": "2Pe8vUuqY9MvVRgEHR6xkgfvYaZHV6abtF7N3FUHEyt7vxLB9HeKFbshwvU49dNghR9H3rq64eK3HbW72HwYLpG",
  "key23": "3ubRw4VwE5MeFSasnsRitEoozooN7zfnYopkDjSERhVBY93DyFqcJVPZ3vzDvWnfjPWVCkNvkBWmsz2jWLAqwPcX",
  "key24": "3LNNtehzA6bnqWHdwtMCrKTeZcnfLPkDep395SLsRqwW5GwnRxv33B21kbJWDDm65A9KEWKwCRU25wm2HGD8Us53",
  "key25": "3injiKXUHDWEmLS31YQvmw4QbMinQ8hLfPw6cHgggdP5Lx1NHu8WdochdLSgfcsGQyvous7mzDrgtE5EmJd2LSTZ",
  "key26": "4s9KJiFZRwFSZLCYYy6UUKtkUXfzYWg9BjYyFNoDxfHptpVqqecijrh8WFVsXSXnNEYejzwpQ4DKJXHisNpjW6cw",
  "key27": "33Z3btpKY7PeWRC84ksdqppyNgJ9yQGvmJ6NoxLHpEzySc65AbrD8mg21WVujWcu3esLz2EPB6Va5YJQGfvmtdoo",
  "key28": "4q8gTkrzwnkGyYDfpeULDgjyVrgeTJcprPhd3V25f8tzweAPNeaMUqh9jiQKFqfwxVm8jyAj99orZotrDwHUinTL",
  "key29": "5qALzrNhzYHaRNqxyVJ49KHwjyoFPMMVoPFMG1yj6PcF3KLca354MoubFsqTy7Hoy8g7PFZrFgQLseKk5amGxjrd",
  "key30": "5EkZsKdJuCnk2rTnAXyHZbJKaXbRCNKmjXhro4kuU6qLVRweReXr773ELsa9S6xmhmwAxzsLUBiYPuZbcKthCQfw",
  "key31": "ch7wPFFh8iVDH8ecrGGqkiwJ6b8zFW55GaSHuWPn4Qh72hWW5wNQuve1AUBwwzBpzxirR6HHduMPn39KJLMHYJk",
  "key32": "2B5PXJP4dz9qriD2yqC7sFsASfMgUzWncFtSTHDzubbFmsubdWfVytP1VVaKrYcWxeTmZejnyDTBfSYJgvxqN3w7"
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
