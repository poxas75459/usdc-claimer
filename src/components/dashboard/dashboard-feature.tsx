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
    "5uVpnifbuh4o79Akwb5Ys32fiJqpvWzg911z6DZ2SkNmAV8Yjk21WdeLxWVj7HUh9mRBJF99wCyJywZN4tbLd2rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rn8rfbRzZUg1SV79tGH7bAjRZwygkH4AjJLfsQqvWvKKGAy3atv3ZWeziXK7MqGvZ5DoZFJx297q2wM6z345weK",
  "key1": "5phfmM7krKfXjtBp2Yghu4xhJzpYLzVmKdR3V4rwTSkMbvqRmnMtgoapit4Tth28Addf8tFbMVTTZ6hfVfGH5p4J",
  "key2": "62Mk3oeeZ252hmAWkyaD8G51xwGgo7DvkqS4cSwTG5eHFXEKSuegZEQsUZhaRyP8gjpsnPSicc3KGQo5FewNxGXf",
  "key3": "2Axa8fTbyoYJNoQRGkKo54px15k3JntscxRstE42otECEtuquD7Z5MYXTbz9bGreGmboJNogu8uzoKXeByqF9DxJ",
  "key4": "5mXnkTifJvkMxiN6Q4AWYfLUeXyKgPNijxvBLC9HBXaHBHfawgMjxjPdJ7UoAP9qNFNf9yJvF2eY5WfT43YbxAZL",
  "key5": "D7Bfg9R3qyUX1LdSYfq8ztf71rtfSagaku557jX13RmMSof9z8PmfAWN68yq34FvpuJcqcVjrL5fHzUkth31HLC",
  "key6": "5MDL8Ljaofv7t3Pxr1P65g4da27mNRsGCzUkxLjU7xJrJFmKQa6fk9PsTbcmMp4rfjzFbfBCwHF6hGJNVFo9ct7R",
  "key7": "28tSAqZexf3nRXsqfVTg7yt2vQ4D3Yy66RCNb5ua9SVfZ6SxcjYRjHbkXoFkbqAi3bXi21QjGZfjFHWaWAmk2BfR",
  "key8": "hNRDphZuvdBtQJ1Gd71bnnZWapyoGY66EEFMhK471AEdMGvGmkJKdXzeMuPuZxhYSfQJRYLWQ3hRrbHCzxVtHmm",
  "key9": "4YpqRSTVNtss9WGBFbJWfT1rLwu8YdNcKxo3fNXMBV98s5AJbkJhsXeNF7znKvaihNdU7xxjQB6HgdqWewuJEPZ8",
  "key10": "3DPufLcD9KjqwB68BSwPtDKbzen6KwnKuGcHqpkTfxsFmgTY3UXppAGtsqmgmoSuEbCFHX3b2hPridLFodvytPpz",
  "key11": "3p2vHy6Wv3hCar4XMRzij9hCwBQJ3Dfz4kErr1rZwtD1Q1GD446BAUpVB3tapc3i5gKB5wqhuotDnWqoU3vM99QM",
  "key12": "49LKfw6ZhYf8TK7ZVgB1SyDNNdTyYV4Anv8mWKLt39uuRqARbPWPuqXWU7abjm9PX82L2QV4KGqXJbFD8e5CPjpk",
  "key13": "31GDfnejdPpgCnboH3yVjrS6NCrBNrZsWzivD79Kn9RByaxJxphaSyijvsUBugM56JwusfU7mUmQmWCjbfBKiHNR",
  "key14": "5qGCXgUX7J53Hi2mmJXY6YFewjS6g1kRDRwKLsNkM2dJ44oumz1RBmxVKfQx78VrRDYzh1mhrkWuiM6RuvjzeCn3",
  "key15": "r5Be8aqsAYixCiVxwBaVDvX1tUPNX3mmcTMtK17Wd8PdMWDLwVi5fmEBmuUiWLLwGJr5duhaCtWaCa5D7sxkKBf",
  "key16": "51ZtiqbKrHPPEF6GKxkx3twcW9zRAnU6uPE2t1i9qgKQvW3ay62vu66ePkMTUoFZMY7y4xM8nYpzgnsWacY7oCbe",
  "key17": "3qjrryRRBnr78qwSJ6TsGj4dqmzpFQHFiStaNakx6EMaak86YDXNbK1Tz77hm8Rdfw9r8UJuTdgwHmJcLReYCzXN",
  "key18": "4SR1kUYtP1CoPxtkhKEYHKAkJkrBPmzV5SQ3hTh8GUwabhAMeik4nGszqk1FEQhd1tpRQ9HrdjXVsy7sD9UHop9s",
  "key19": "4yKpczW22BRdV3WWJdYZnf9WXwTjCdRgSa7AmPMfTQzKznXEjogedPPZXJb56X1L9sfFcBj3ZZgzECKTJxWPhaZG",
  "key20": "5X4DZDvxccRouWvb3ZsUSpGECdJVf1zzBvK5QWncd6vnWVauCtGfVPDkxh1aEj6PdMiGiMz57w3hwqCFUWnbfGW5",
  "key21": "417GqD2RWNE4zwkprmfaLPaYew9TSuMXKQWkgv4iLrHJyiavKshASQ6uZmMDyjNLH1zcaoERpU2xLoCNx4fzivrz",
  "key22": "3HAUdR7sTDERj8AUF2BEuTCtsgzWjqWd1kbTswJfNq5Z9H4w5duTLRzMZTgP3oWnh4TjXxPPrafFnJjHHNtEEEp6",
  "key23": "4bu6jCx3HUfahKYvUkDNd5Ssnz3wSdeAa4EM4bAQQrxcnqaZcEhMDPGpmMaJ37r5meCgHn7LP77VZehragoNgCJv",
  "key24": "66FbvwFk2bu7aqotvYzDYdDqSmVWHe6vqDo7LoZs7yPHxeeMiqbnmYP2Rfhtj93fuKTc3fY7XMXJv76xrDenDNxq",
  "key25": "3rZnLWzNquyoLtPVuTPc8LXmdon5bRK3CeBoU7Jk8NQ3fJXFuGKvBULTYwurc7nJBjMDWkCK2nzT7VAQzXmjqj6f"
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
