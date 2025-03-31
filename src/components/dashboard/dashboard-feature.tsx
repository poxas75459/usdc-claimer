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
    "PZX6WETRhMwVrV2d64NJcMV5pbNAhVtUzzNaQgZrwubMtPcypQVgzt3a8hqc5fqeotQeD4LPi9Y3y8hpwM5iq3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sC7CUaAd99VpRujDN7XwxXkywFM9cM6pFVYpYTL7vtYMqTz5vThBtcAxWJPZL9NtxGevY8kFadRkPEupCRv5oxV",
  "key1": "JzSSaasuKJPhYuobeuaod88LnGA8p34uuBa1vRQpDFK3P7TX4f9GtkxYgyy8G1vUcXHbpGG2gL22qmSkkWEELHF",
  "key2": "3Ut4U9nKXd4dicmNKPjZqkCZFW9BM83NBn3ePwfeDsxcH4ne49Q5Lo6dwPq88uRUi2VreYoU7rXEhHBYuwXH9Evx",
  "key3": "QBMExE2VzrHx713CCc5JGSdkutmbua7xuFB7imNE6dr7BvtF5t95AkxcxPtRQoTh57sWDW7X4q3u9d7Tefcb7oq",
  "key4": "4dpqMtQZMynMjXwLS4c7UTdGbw9NpCX6CfCLrVQEN1GHqShyg525eaN7xAJr1M3Smxe6DH4kge9qPu7yPrFjXjoU",
  "key5": "2CKMNo8PTrrhTFmxXY9Dq77mAMbxuWcpWoqTuHJQ2AGCa3fi3xYEC7TiwfD9ETrtFxPmTBxFrmRGkbkUGM5KS3mv",
  "key6": "3EggWGN8QR6Eiwv1NJSWSEYGgJ8BnZzKioBqFHzfK9M36aUJCFfidBzgZcgg4KuTqXoudry4sVv9uZoQDDmaq75r",
  "key7": "2CxyRCeiVhdhcd4NDYRmpcJf5mwCFLoujfhagPzhCHuCmffAZ84YKpxzR7fN4QBLF16YVdKvxDKfa775M7DsG574",
  "key8": "2ogWi9C3JzZMPkDeP2hKdK3aKQuCfoJKP58LTBBNjxUCKhA3Mv2tWUEkhLDfsJLjwi9er9YKRJMwaWgQ3xfDZdMK",
  "key9": "M47JJMtNn5LmWFJziqRNKhv8ri2VRjch5JenV3Kuj4h4vfqJQEuo8EK95dj3byrYXV9g7VfVr85Mmfvo8kJWXcb",
  "key10": "5U66HRApytw8h8BW5MSWNWVU84y4db8nDirSdPH9QxSvrTVmTRoEN5HNMNQJojpCC2VQFReEFnqQKtGQP92MKrBd",
  "key11": "5jVTPzUELnZvMJ2tc6K1k4YE8B7ao28io3GVghrJ9MuBFruUbxpjJPYqaEjguiMEhyxzTVt3wx7iJ2oP5ZVHTkTH",
  "key12": "vbDqSL3UEfzaZU6BqEasBg7FnAGQtZd1B2WjpBc15P6KMfurcfBP3Ccws2h3vKSkSFRwGdHgTgU9ZY4fx7fiWk2",
  "key13": "5R2FJDvCEwqmjtNSYnMbuVourhk4SL9WjcqdfWEo8dAaTx7w9x1poVeMnYQTRzscYhJAPpXesbJDuejRdrtAKuMZ",
  "key14": "2nVk6FL8Etn8rE7HEovWvjbShcLjErQQ8gGmxZqZLhqqgaJeAg7U6oTmuWTJW9iSNzk5NN1DtQqyoXWeCuFhPgBW",
  "key15": "4uEZZEaU4Zx5Gcp87tJmcHA54L1eHeVthoD6JZ3Jr14VW1uUXgQnKYLSpaKkQth2H2pMPbLGF16bZutXRd28x5CH",
  "key16": "5pU3W1fxssLymHszTkk3qWGYg8LkrEU8SU4AQMhHAupmBe5qm4TfJZt9PphZsRY4f4kEkeC39od9cycdsdpVYsQg",
  "key17": "5Pd3qJ78SwokqJjGiYzDqdz8snsyo6sKCVuqiVZ1C1KQpgcJxzbGnUVBKLZ6XCd4Kk6ZKUuVTGZ22CGfaezKXWkw",
  "key18": "4tgbey4ZgwDaS4Fn5agiwXsmrPQhrgapcqw5iJmJmLRAXKwVDVfKKguyczwPY4h1ZUQL9GfH8RbtAoETnUg2QPLR",
  "key19": "3WMTktE6LiZTLJW3R2XRLGgtS49cprfRTyGxPdii8oxuiirzeAyVWFATYc17pNWxPxKRN7MrYHo1Cmg4m8cxYzJ3",
  "key20": "48dgPh6FnAdnCR4oVwwoczVbVXRqPU8UFwQZAc8wb4kZFXFYUMWkywrSyJgTCgQiQJkwd2KTG5zsvFMmgeXnj2pa",
  "key21": "5ZkWVu1jnnLKEiUMkgJfApfQtJM2v2f17EwoHFGMAc8vA2311x4Kdri3xVCSWKodTSCSwwNacSEPc4dF68oH2gZL",
  "key22": "g3GJrFwoP7U4QQoXPqkW8Md7KXwEmcwatRFbpz3Af6kimuKybQRrbPVA7Z9bf7BobhRU4X7XbrpzWNKyG2dXjM8",
  "key23": "2UNBFRHQYczCAc9ZKWgFP8j5uQkHxQySZiEoEmDA4PE2quGrabQkxt4y6Xviw2f1VV3PZe1jFzJ4qmTr5xM1CVef",
  "key24": "J5bAGLsfL1jw8Hwbd3kddN1pdr4iNefuBy7yECJN28kMkbvJKdXQzWDPBStbqKpXwpDPUQDVLZxhPadztFm5bBt",
  "key25": "5UcrT4dWZ4oqsVPWoY28rCKPiB4qAPRxgL3X71CTXPdy9dGHNpbx5foDbYmt1yW1QxJnzCvXXdnoBHTa8ivSAFoy",
  "key26": "3bkxi8MhyewHqUc3vqpSc3GxNchfcwKFSesZyco4gquMGCQd1N8BXGUARaDqWJDvaTJGuu4Q1FKMVn8Qauo4QRrw",
  "key27": "DiMaSQY33NxzquasDcwnnrE5BrYXujXJbsS9QPebFZcV4ympGf4HEtYXEFfo49x8fe5ivzSgUwEqDrMn6hy3rPS",
  "key28": "ADQZCf7kAnkWz1RAedM8xHQaQnTQv6NwRUTzEwaJjndRoyzXN52AFwBVxSQC1ajjH1JFouTfSWCoZN1puoHDhcS",
  "key29": "4Ja7rWsoHxiJ22xgakmiMEwW3cafKNuwxezSPLydU6sHnwTGR1c7Q4fAjNfiV9BbdmKdnYaDM7y77xYC5LNHZsNP",
  "key30": "2khN3Q2PYTGkr1MsLAtAXPtBEpHvpzRd5qZpH3p15YTbR7pmj7JRc27vGXG5fcEu2bfGrD2EKUie5L7tMsCtnUzK"
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
