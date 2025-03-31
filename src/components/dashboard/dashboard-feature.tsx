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
    "EEh32QeVknNqBcCCXFwmAYpsSHjHRRptQ4RvDqtJr6TjwdGdgnWLPnL5XnE6Afv6DLRNn7rsJkV82VtiYhfx27i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o3jCn62w6sPwk4JfVSTqBF6gEKeaNdCJHefLR4Lw28TRTk8rNny4MMnqD7N7wFvEG5qT7p1SQwfFXR4LXzD4AbP",
  "key1": "4M5oLrywsnr3taiFuPVfQmnemUr8tBC1Ed8yXcaZauSR44vttBZo5kRRqfWSm7XsvowLYEnvKSXrWPcMi5uX1oCh",
  "key2": "5zDxSMiupSLLN3kGsuJAYTp66Lk1iKkESEiweYdAuuKowDqo8Qse7fibaQmgkRRLHyKh9BRAkakaWLSHc4GYmTeZ",
  "key3": "5T7uVnJRpxmNTP5jNbzLp2FvG2uKBzKjxC6TM5r7duCx1wujv9oEc4Tkiq1xASWo4ruuruT6oPDZNhqrjFceqohN",
  "key4": "3CXfJVMwVKtv6V6kVx9M4uYkm5WgLw1xuz9WdXZ4qvLWCwsdyzAWkYhuWMkDSkNuNnEGGxD3djFcestwewSDp1zo",
  "key5": "2su2iefn7V91QMQKsh5NMYvHCWMCfPTD7EQx39Mevwpr5ZmYx1GJET5bdJ8mj7dwThNHZr5J1isyoGsMFDT8yrPT",
  "key6": "WE42g1WG1UmTxmMpkbuUd3arwJhZJXKPMQMgqeX5huMSz1CYf1JUPdi33q9RNM2ACGuS1cD82DDsGKkT7uY1qf4",
  "key7": "4EXB1RK647fEbrqYJoCgux3Xo5RGejKbLVY5Gs4YrHMsNPjcCu4BGxmhDGphDk1Xn29hirVepPq4j9KBaTf1imUz",
  "key8": "616sKriLSWhMrdeQ6oNnbtVSXYasuA8d2yCLUBjP2MwB1kA5vxKAPK4tPdgqarwc6tCZqpRJRseH7Z8Zzf3YPCLw",
  "key9": "49uqMfCbrNGVbrdkcuZsx4Acpw26W34rpQTP1sQZ9iCquEHyttVGT5Mnwi1Z93vYUxiu6ze8sJsy9mbK9fWy2uUA",
  "key10": "3b4BBPMEW8FzZHDAhkWm9642yviW2fXvu5V9RB2DE79vQkz5STdR3ppHACXMZFhkcSa6CfaxJGwydCx6Z5qioZnG",
  "key11": "5HrGuyo5GwzjMrKkL3vArgSHGTofbmZo4YbsuHSXusSc5ZQEupywyqXh5CMKuxZRqmPFcKWTeMRHkkyyP7jM8z1g",
  "key12": "5Vj2Z6GTkuLs6prVQt2uiWm1h9BZ4aaQSPMGBwzjkWym88AqoSJv6USr1sHjmM8crYQFGpywCCUe39GT7YK2XVE8",
  "key13": "32HtX9KckAwAQV7ba2qcVb66M478fVhmp51MXy6joBEHfqb8aRMevJEybusmNeG2h7n2ZDcDAJSFd4SoXb164t2c",
  "key14": "5SaCXfvCDvtFZW8JpYsprGwcRhwB6LRWZnbDdac1BMrRyMqd8NPuTrw17pL6wG716hgj7fEYs8peyP8wQ9gkyy8W",
  "key15": "ns9bi7B4htcgD1Z11kHsvC3Dmr3N6MM69J6jG5HbLqoTBfyc5QiJYEqA2Cw1FnC3sXjf8KfLdHs1oadMqz2Qqwe",
  "key16": "2dm8zw6VrGPfFVs9pZ1giwfxFH45b3iqdhjFWYMRm4BmWxYkKfQhRPCZ1HDsBWuC4FBf7i62mECDoR4VAucota1i",
  "key17": "Aw4w8AbKGaBn45t12MHdoTm2EHra9NzyuUC8xGm8iApwc5tGrdMifZnAHQK4K8x3uhf9dQUzbeKyWGjbeLjqDtn",
  "key18": "3q8aL9sHep6DYJum2eiDyjRvL3vtvFDVoWy95aMTwFyXmTNcqjfqe7vvSeQS2Y5cSFdexdUyeaf4K22nS4P6tgzS",
  "key19": "5GGx5gWVPujSzSioquuKXVJKpPvLChK5fJ1N5Uo2YraB2okXGzWkKifbZVE6FRePJwWUy8WDuJrwsJet83nF87BB",
  "key20": "5Mud8rYb4RouLkmeqBFEgVKB9BRix7oRYtrzehiLDNEncJvH6e2sUrKMLkaU3FA9yMZ99F8DYQzYsogWU5Q2CTuc",
  "key21": "4GPrv2WUpndshLAgGyc89KG9Cht2vH4pjuqNvHEbfgF199t6TGfuLwbtrwFE1o6rDs8MJVDzSYAmnHrdatXMTh3i",
  "key22": "4MUHxjQd5GRKbsqWn56D5vF9eux5LGbnHPV2FwktNM9ChRviEw3GPvVKKMLgv3EF2ZVqo1mR4PWWoa9euk24R7Cx",
  "key23": "Q1ieusKKAdWkAfWqQ6YhMNhdhYWQNgjRBR7GRxopM5BqxqEinLvJnyqR7vfUeMXjsr4AjQx11cfohJ8hwoK6bwi",
  "key24": "RKJhveyMRhGRSFf3eyuhKwCCKi827eAoXV2eK8DyWpH3uBYUHp69QrYcExBLWyE3V41Kf23TWGjZhBPZvk8FuE1",
  "key25": "3pMYuGLj4nrZHJFhS9Ws7WcF3gQMaKegUWUjEHP3EwraUFDQ3BGAYhfpdDLp1Yy2VeLtaW14QdE3xBwKxh4fRbTu",
  "key26": "5MzGB2eMNFfWhrzYKXMQR6xyVnYCeTznbYtTqYYyan38N55fnJh2YsrXNGvFWhmX5MDQZKmkHhCeHycfrQMJDWeb",
  "key27": "218qMS3Qb5zAJJJeYiqMBqewbi7MokrzJMKyB5zG94JhmsuxQeZWpa9QSRNVEEAZupMHkBkUc3Et2Gvy5pqPE3sH",
  "key28": "5ZHSJRncs3bQAcxFVMdPKQExhR3dY5r2vMHJjSxMfbKNx1UaceW9ysqyfSkx8g95dxy9594yP59NZjXqZptxczoV",
  "key29": "xgQUXV2qDyuNoLSYNyo7gjLZixB1cGr5bh8MAZkQjC5VhbGBghD8JbZmE41ZePDru1bzuXkva6fypgSjpo1utMF",
  "key30": "2FNY679d5wBVSjmYtb7A6zhPq2YowZTothm6YRqA3oXsF7DEWasdTFDQMphvByDfUL5VToGs8m5HdDxSPVBLeqLH",
  "key31": "wYg3vag3gCrCxuHAByXgmRen8x78ZsnF6wgC2bHSYZTjKD5WqqiB6Yxs1MmqkzstMcy8r4finNnRaN6U9MAuLSC",
  "key32": "2bAp18Y5njeMbpcvjE4FNT3UGsdaPFJsq5w6GRPMQUqfHzkoEzfH6F4bPx6ufjVqJ3RiJnzBa3mnXVyaeT4b1r6i",
  "key33": "48HN7c8Zg6L7wN3CqaCPWdgHAX6n5wzdqpRZEiaCMHUZR9rEjWX3DqcJtiFMaWN5UABFKE47BLZgQbib9XrapsFc",
  "key34": "3XMARDTA1Xtqe4j5YtQwDzHZhB3yf2wxWJYUAYZ3ik1f5jxHgagpppgeUPNyhRUg49uvgm237VwoWcCqRznnzGnJ",
  "key35": "2mSyqZaU8ia323rr48uzyYHn3zst3jG5qavZqTjhzcvz9439wEq3BTMD1amHWcdgtpPhm49bEEyQkMPW5hyypHxs",
  "key36": "eKz6hxD4NaRPMBCfCbgSkducqXm9JnFi3R6hKVDkkphZ9DoyZ39RBr5UpmDZJoFHzevqsPeq3FrXvZWZKmzjSWg",
  "key37": "2EocCvubz4ZeXsWRVhfgwkeK9ZQvPFYjrSMfQr3Mn3uJ6uHqiok1PpdH21yBcQPkQdVAmH9TbamgSdnVA79BcNkN"
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
