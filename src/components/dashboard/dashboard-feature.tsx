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
    "5ZBRAPjCsSu5nNsKsxmVqS4UBTwo26op3ktQMosJCHwT3D7B5m6nksPv1ujbEVE7RH1NkSsQWD1zFs9Jjtm1pumb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oa1baPcw7LkWmBWLi7gTjKi81AxmwVSXUJV4QkSMmrPokGoXpTttJmRq44b8navVh2xGuM4AphGN9V6wd7QGetQ",
  "key1": "VtbCjfgTq6tfYrQcVWnMXzKqGcMfW41zYxDgDXvEpVfDxrk2WBc28tMH9EoT8pxSZLacuWAWuPXv6NKh27zSTMP",
  "key2": "28bacGgkmJGHmUQnFrPLQKpeaAmSvktAz3S6kTLEfPgxZ4kDb2Xb17Y492m6qMVXVBdd4DUXVvHeZvfP3h4FrKkC",
  "key3": "2dxQeWasBZhvxEMZpJugaf11N2fYiAA3hTV7b9XLn9YZbwcEumqZEoqfbSEyhxUgp7CVRfyhY11GtgAGdUu6u3ET",
  "key4": "5s2j7L16w2vgM94tDaZNmEZvscibWcKRBhAnmMrVwM2LGntWcCVdj36wVBxm5J7fQZ5vKvrADuJGZNkaysshSqLk",
  "key5": "6RA8ECWj63K9PpS8aYJS5SK5Co3JqELBRpVqxSsU68zAbAenLtepbEWS364g7ptqpDbhc3CnQZ7A81STPaVsVa9",
  "key6": "2BzUoiCfN7mzzsrpT1xmK1mEEEMFedTi9CSLqhtCJKFHB2qpURQezpD9fN6dkAnZjqUotk81vsCAbvUKKm4oXVHr",
  "key7": "4L8K2KDJT4DrXhvZs3scDWbFS8mrhiZFtri9gZPEfcp5XAe7Qm4JeB5NL6pxz4sVEvmzn34PVcRbDzroMf2sTurm",
  "key8": "2bXU7WaiCH9w8AWNpK9SooR1L2nFSPh1LerHj1ku7MnMhhLa8Xn7jtJJ5zg2KxbJw2tbTMaaiompxErEHA8omzw9",
  "key9": "2fAnszo3oHmWFfUTHaXm212HinNGhZnJNC16VyTyKJrct8W1BdzkP8vFfTdMb1p5Jmd4vnpbHfj3Erh4YLXqSxyJ",
  "key10": "GH8EZxfq3nM9NDXApbXETSJ6ERmDnbB8XpjBiYxiGcGnrSoW8MZKHrEW9pWay3xwjd8x7bfjwjvAinVzdpubbix",
  "key11": "23k9H5uP6i7ok8MfTDimGDrSH7WDW6rTzCG1Y2rKQr28ZJsdiBHvQoc5j2a8Sa8WAbJYvchmFopWWDXL8XV9q2Z9",
  "key12": "teAucvzzh6wRQKRaosDejcsQgci5JaA9QxjdvMLVvFSyxTx1CD8d1tAu3iQPBKzGT1ZuMMMHomhcEGww7YLfA26",
  "key13": "czVkM1SGrJaXbbGaQ7PFAywNAjKScDyeYaMqttiKBwity9wCdj22Whh5wHppZcjJSTdT1mFtoEEY4twUrwun1CQ",
  "key14": "2FP5kJ97o1U9fAsdgGHLe3uTdeb5Lu2d1Kh5kyrXCwYZ6yjR6ufBDnshDURAXh2rWRqqjdX7SmRwCYYGeAHeyHU4",
  "key15": "41xEVMxNxYk9zvHAQQEFb4j1SmKyHrMjrWXjJG1wyPpDP1QroUpdcMTe8UWogCVDwDR1RdFhBczerxE3wdx2cCfW",
  "key16": "5njTe8kL6rz3teaEcJp3UW8mPVNBYqznyWSP2wLeeJqx6g8p1aZXw1QuyrV1vHhh7zDWDqg1MAsoYxP3j68Mw9Zi",
  "key17": "5UGfdAuomq4Hi8wwVGAnodaLYS4X3smTx4YPDaxj1yhVyKmS9iBYfiDomEr1WtdDYUTQWW5tKnFViAY1XKSetbjZ",
  "key18": "2PagUwZJ7kDVSY2ZL3tsmTz9khp7rXftQcSAGrSNmDzD7CeRsY1Gx5fZy3FUDW7zegWZG7CfNxRGpnoprWaCKYiq",
  "key19": "3UfJzMLM33WCLFCM5jZdEdwQkv6TSC83H8xRqTq8JFjemp71ascCnQgcLnZXT7v396qJNZxuATdqXbU5RGkHw5At",
  "key20": "3A9y2sY3Zq3j4SPP7kQYfe3KJFVNEuQJQjJuztFb7KynnAvbRxp6GU4PgbsnuLq1ZbXn61o97cVi4gVTqkCYoP3",
  "key21": "HzxNS4VYsANEkmY4YH831TW6Ao8mjMcq4s2hG5g5ULEaWT1waM8r9aJte7bjckz5Cd1LUu75ZtmVyPGsEfHayJp",
  "key22": "2y4NuRfWxgGMgtwGtKca48aDVhyPqmFgJ6qgeKxTu1SnJ84JsfhomPZ868PAsiwQZv7MSakn1zyh1HLHaXfasegS",
  "key23": "3TassvgzCnBXsCAwJtKLvcxbLW3GrjMupZnPson6nzyCydiGEhxUpUSFtxmQLhHRHG7uuQo7McUJskwdY9C18XvW",
  "key24": "5BDDqtwsqafQR35s44yMRrvoTPKtHJDveM28Fh9C4jXDnz7taJEx61qSke8HhEdrf4e8rKjBUfFqP5gt7vKh4JHV",
  "key25": "4BW6ZkcvUX1AzU3GVTs2uMg77w3cg44JXrfKSEdMgTYKRLmZpcDLTQ5GEj2Qut5uwY1yuvK23RTuPjtgD3R7zp8G"
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
