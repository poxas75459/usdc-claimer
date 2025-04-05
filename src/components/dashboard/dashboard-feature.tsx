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
    "mCib5pEwwJV1S894JMeNHEC1Jb2GzHKB7jVryKvxU93GyhRS8m5Zt9Rz5EvBmey52Qpcovjj4gmRDykqRp415xJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d3JoxR9piuaUoi7HNWMoH17D7X6AqZ4ttiQezrRcgRqwuQZi8nv3ND8zNQUsq7C9jReCMjKka4LMXGBq8ksd34r",
  "key1": "4vDd8hQMLEc9t8ZpWZt39VhWkrXcpNhMx91ps2zsehvDs8744Pcu5qz98F7MvWCcaks5oDFDT5GW9twb2Byex7jY",
  "key2": "36dSZCj8g6ppvosgV118P3kX6i4vjvZAgiorN6gqPQeqwSTDncEvPVCGcrc61mjyXTUL1Yz5jvo4h3GFKDo2oNjB",
  "key3": "23tTx85H4ur4rEzecux7pA2rWjUzE7qyzQ7aMebAxbjRs5ypqa2NP9QHrdS3fw4aB2fQ8uvwhtC5Vuvpo61ovKi9",
  "key4": "5hK7x3wobKpBzckMhTqMw3rbuk2zpgMLQnNxz6d6TnmoWAnZSATKMGF9REWfasPxSNRyK78Hh2rYSUkZTxzNHwCA",
  "key5": "8nwwa7CWU5zxvtwyPAWnBYrH5aKPcN23NsDmR85kA5x4xd3ZSHt6RFtVo5UM2LRkUxf5mLdVaQ6LH9Ha22Zgk4g",
  "key6": "3Rug5UpTs8a6GtzrzAwLjghpkBpSx1VCCxvdCqXQW5r6AG21m1Vdb7xZxfSzt4uRo8udDpomrxgBxL2TjZBFKjxu",
  "key7": "sQoCN6wjPdAUz9nfk7vCwDUYGhyKX8su85E4qwTVAs4xFHw5Vgg4EP7RxcnqyAaySQUgQgATfSSC7cirBKj8yVZ",
  "key8": "3v1kKoTBB1QUf8dCinrLWnwbBoCGqZtPyZZRxhHvP7fAttCFTW9ue28xdgD5faetsVp2cArcfsaAaTWXK74vKzvN",
  "key9": "388LKUAgGkiZXqTCA9cH5ygyL1cUBoyXF8vHpECjMJ8FdLMo3dUwSnxLm3qsLGfyDc1cVnzZ3MVPtnL5ifenMU6Y",
  "key10": "3USbTZEax2J7jLZ5qrHCFUACeEaWin8SKH3VkxHuAnGJX1fueRMd47RYHAu6sod5NbJJuACLXAbwv3PzamkcwTay",
  "key11": "WndcyNym2rzJ39hES4XDaudRNcKBvWh85QFqWyNTb3TmtBfQFUYxh2ijfp3yFP5bGFLS8PSrtXjTNCSumoBK1ro",
  "key12": "AW1BRYMk1Fww89zS8zG5X4uRW9ddjVgMKJCU2dNPz3VnpScDWvbTKLBUcGW4f8eYnZszAV25dmN5nkpw7EiLK7X",
  "key13": "2aZRzSzkGrbVH4JkJnT5KrNvUmS91xM8aYBz841WEbkkiAstujVSL82GAnsY3HAj3ffq6aZxFpTFUGNmifoep6gM",
  "key14": "3cjuGSjsdjLvmMAxC6LpZpLokgFy4oFrPqddsH125wrfaksTXXpoC82UgwYFdQRSUpsbf5FdPfQhNJzWdksfYW2y",
  "key15": "QJFjg1LzPkz3QY6hVttcyqxKVXVvpRzjipBwYzQEck81tkxdNG56sR9MTL8VZewDm5WefzgV5JVHNvXFTNhetwN",
  "key16": "3FMVtyEUMikd4jL7Gd5Pf8j5BbUYUBsGPSsn8tFhoWQ56y4GTqCDDGQ3KogP1MM7Z8VTiaenRryX46f64FqGohpR",
  "key17": "3ipuKZAgbG1K1rKgeeGUnaZnDpHyJeS4NWcaPLrAAVxAkHtuwPeGVYJAcm6BNNAT1seMVHPmLjnouZZrwXLEkPXb",
  "key18": "f1qiPkfU2L2yG2Vk7mtLxo8TMch3LAmqKy4UwKuvLZDofSCkCt1PveFynPwjiG1o9cBmTzAfbGSnJZsP4wEmp9M",
  "key19": "4o1S3kEkUMVE39F6kTSLYZxAqySmkbmQEJq65MnAkALB7aQxdjiXUYh49b4AdGNCd5oH7k3AdoPmuVCB1fJsQNyv",
  "key20": "2QUripKAJp5zAj82ka9eJZ8oHFgYBAEvyd6auFPkT5NxcJqDJ23nQGmpoyTzuEfqXwXJb3V4YvDUB8EQyTodYcxy",
  "key21": "5xSs4YXs4hHsy9fBSYbtDXUZ5FHd6ZGpFap75pfFWYWyYu6Pw7wkijMKxSWVXJ8Yt1Phv3r7SmckQv2DX6LUMJ4b",
  "key22": "jABTwHdWyb27Ptok43aUFLEpgEgtbNTwEKe7ReW5vxFf6kJNgC1sjscgJqni8L7UgsP15WwLwWZfYTHDqziR8oT",
  "key23": "4eJGjSose92j6yCwrpLCM53MUko6jSwuYTfoftjk7ZZTAQe3FJQWR6QFqpopoJr5e6egED1GYxsEuvsV7VrKHCNi",
  "key24": "EDNR5JTCLpGfKnYnvhDhAJd1QSJkbQkPGPRPo4kJzr7Pp2BeuGJsWdqbJ7W1ip5FKwD9xJ3bybcG8LTZiCfhRrc",
  "key25": "5W1SuBFDz8PCKbMfX9mdjrpo4tJtbV9x17Dp2mpNhA4DQkz5MAvKqBJN6TaArBbJo6hRATownfZ82htBzMgoMpa3"
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
