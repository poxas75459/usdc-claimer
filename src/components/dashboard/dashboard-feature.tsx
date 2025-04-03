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
    "2deJevQtaUqHNXj9eWRDAbFnRFHCtF7c8Mw2f9uY9w3nYuHonnzT9WzqSRv1MptivwVyhfyMzxwiKUxy1ZWYHdAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nMmZEW8hEZELJ8tc5soxtkgXBKxgcitnLF7ygoqkp5FmWSeNY55jYMWGmgWh9q7e8JcomoA3evD9MjzLh9GEmML",
  "key1": "4CMKYA6BgSNQ1tusWLV39JvCYYEz32QDST94VAHTaZwf3fBQcMdYxKgprh2h2QBd9mo1NaFqpS13xbuiXTe65tys",
  "key2": "4NiqQZPcwyxMb4qegHYeFu5UJN1UZuTQikPEXCP66XJM39wMpem3bxB3uYc9wYF3tkmjarFxqeJvBkmLeaB2NkgS",
  "key3": "5GGyQtbrfj9AHcUdv71pwitSxuySMCTioxrB41U7A2mbW61BpPf1n6rdATxuBbsQT9vLGAe5o6x6o3RNRV7sMCgr",
  "key4": "2WdbKBQrVWMKWgTwmvXcu77mwftBCjocAfKAQa88UzNmbt49NMsgYCNyr2xokPF4aJBoq8wSnDigd8bcN9wMPnbK",
  "key5": "4UubHnzL9u7P6abskk3zKxEsMGd8P59VFFCpL8cjVkAQDqrHctUVuVd4hTDPUDqV8H2m9gTxfNHit23VUwkTviAJ",
  "key6": "3T13eiQda42WSqdPudkvR6wSdiNGrGKcWqraYzfgysADMgPFLJRh4DrfgmgBpeS9ofEV8er4hnJ2yxeemJZFbKqm",
  "key7": "EgX4qJi6Ay2jcLL17Yv9MvL6euQm9AoGe4AwPn291ktQkFi1AK4n76yMGf5Lr7BhwiNjE2J3STFhSEahtA3FPdh",
  "key8": "2iaA1ASjg41Jtnt8QXkAwVLsC2sfAQZJzpuaw5RP9Rsxy2Rzscs9qLg5tbNiGKc3f6VyZ84L8vFzgv5kLE6UUWBG",
  "key9": "3fmdFRc4ueoQhDE7u2tTPPeeX7pttMLMPcZSqiUYmFtsr2K9ZJCzMoJjVVMQxabVLF51EMzZE6XU24XGe2etBeM6",
  "key10": "48qPit1o5uGtdc1m34FXWAs6KRdatB44oJ2oxUs2B63yTWiigWmfHsmxVKRezj6x73JRkDToDZnQ5v35si5qcPB1",
  "key11": "4mzTitYfGN3VxuKuVuZp5Y5NhNFUCoPhLPBaiyBkeoEPxY5bbzR8BMDzZsNrYXGzUhNQMuoXwg2u9qcLpY1QZUKm",
  "key12": "2Keh2fa2UR2cwRw5umnWSv1zN7geb5h5YKjfmCGaUdawyi6xiFMGpAUkp8TbAjWkGE6ULm7ocdVjPwoFSTqm9aZf",
  "key13": "3G583C23QcACuUAkErKHFo43HN2RwGBYfYKBrfTt5vp3Ah4c76K6ouc43FAko3LMXpAgsM5xUSkBjrj7n3XgaypG",
  "key14": "JpyWjepF5LUxPbvoPM9tPBo19D4KrGLpK6KK6qPRPBdDt9qUuj2ewmbsV7aEtvM6D3Tp8ifi8tBjbaP3kXe8oY2",
  "key15": "5R2nxWwQezcAqKqniC6XLk4p4Gnue1L5sQzXsKdmNHw97fYzqjYSFSsLnWwSE4D9JXDBbAQdXCgtsfjwCaYwLf8z",
  "key16": "3HkEPUkPFaR3JYBCy7MtBtgA9UW5hfeifcoDJjc2atjgwUELxVrB8fQ4Gjzx8FRPDs3gr38AVhbB7TWpPLEHmCMT",
  "key17": "pdrqmsaKLYykpVds8h5TWewq4FHjMbGPxbBBCAfL8WFPSgLNEAxhkVjQ6rP3dGgL27PXhhwQe38TCLi9vV8q2WM",
  "key18": "3RDnQ4vgbaF8BGvNfcJWcnSiDBwKKjL9GayMZ4aKXFmNR4ZL5DQX4G6AmgDzvj3QFNXua3uRxWWe72jML7zx18xW",
  "key19": "2bRJ1Kx5tVfHKZ2E7AEYojDkbGSSRSC9sUs6sxqnUM1pEJH1b5q6kK1V89k2hrJHVawKGvNQKSVCQ7k5RwHQWHTH",
  "key20": "2h9Ta1Qcgm3QGzNjbUy15ekkMsNK73kBbqjm9LfZjhbV6cvvMCvNRKvuWvZJRedygmv1CG85USKBq5Pg718qFVbM",
  "key21": "2xD8M5XRfigNQDiLgEuYWfmphffsVbhSQejgJK7AwCYrBkkj32K4xyR2gBVP2ewmR45H7yUp9xnsULcWgZcHLtYA",
  "key22": "L6RAgYsxoz2qs31tquKvf7Dmm7LBBLGmrS1zRirTCt52TiTYY8q3gCDR7pGdeTwJ8B5xRxSpqNbcAvZe19BvZh4",
  "key23": "4yns6nmTE6bGzkS5DZUodgP7TjqYHgTGHUHF1B8WXmEgxY87gekjvpH4N8MrVUaJURqnKreX4cYynz4kLDifq446",
  "key24": "4XdxhCoH8iH1Cf11sWiGkgdFx71yGDC5Kz2bkdeGrt49xvVHi9xU6dFyWxqVDcnxMtsip87pspmvMzW1gsVH6kVq"
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
