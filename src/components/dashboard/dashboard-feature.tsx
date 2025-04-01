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
    "55ShDeLPMKSN6s81Kv4c9WArDKP43qUQBKbi1xgbDusqiTK2eTtLjv6VkP9ck38wzWPdKpYLMHwcioQ8hRg7wXmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66VARWhmnTiPtqmGCwHLQirDdamVtmgYT6WLtDxpHRqGjQpNhmUdH9rKjeRSA7BSAwDysJdu7x4KLuopKVnFiYW7",
  "key1": "VC6SN2hrSH1aAcwU1FahMdpuuQ3pYdruLQ7a2T1SKN9tre1eMA4NSvpTvgU5bigXqAMBJabBrUaueDuWEaJ3VuH",
  "key2": "5acoR8fa8QAFB6jHEGz3oMg4bqbFvdmGPrEwUwbMDL1pCvATxzBjGpbzxB8pEGxBW2JBToQjnnr88at45NNhFGKr",
  "key3": "2r8W5PRk9qRaN2TTPxQgM2gURB39H6CtQkVYjQkougNJqTBijdFptiZs73C6VcXFmtCk4NKQMc98tDWL5B3SAcbM",
  "key4": "4Xdcvcd2fWPaDc4e2m31pgqP8E8LxDp1tJsnrVhHxYs9GRZ8z6crowtJHaQfGDd99thYdpQRCVtbehJEBStCopcw",
  "key5": "4aHwWChU96WNpMkr3PRq4RHveADYb4tEttfVsFkFQ7rgoctqkPgK7yEY1hv6NTjcKoTusdqeDV55TokQYCvJqwWV",
  "key6": "2SaY7HwP63pWSDv4GhkTbV9EoxGubnEFu5yTtdbNQ1FmTuHrrweu1wg7cprDY1SnzXtcLjEUxsiHdf3Uiy8EcUEk",
  "key7": "qvSGrKBt4gT2gChpRhWtE56QiosjHTYzziLW3QPv53wzD4t48uVhwt4WHykmdmEWeuHwUanKU2h7NJkEmsS8Pu5",
  "key8": "21QMGqJ92iFf4kcCdZjWh2ZA98tVP7F9rByTxr3JkHVKmfPUY65PRfusWamw9mhgmJFtSBuLZCuxnqmRtpPFo1hd",
  "key9": "VDdzJ6e6V1RDMD5ixoLd2FNgrnuiEZqT46LD5ZkMeqiiWtktbEj7Ee6W8uy1ZmcqFLsG4u7wnoE4eo2wmZBrEF2",
  "key10": "4gLYVphxiDiyKEqBEpvyDYGm3GqPcmAAgFkMqefNBUJCzYvdUTvhB1puncBYLbeX8Argc81XJkYDzX6oo2A4qUwr",
  "key11": "215zimZc2f4fLfqz7dYVsxSij24x9Ae1Kpj2NoiyrcLLEXAu3ewLcoSbN5tk9dbaqm1fsBAKcqSnsQu5Vwyyumw5",
  "key12": "6QV65VQ9XYxRhBCtimxnKNvHu3vmamGL9XuQT2qhkKZjM8iuALu1MErm2d3vpWRcBni4zM8ZqWQoRVfyqiGMUDD",
  "key13": "3sJLHnDaT61wDtu2TDsB1WS8Q2G8omTXEnWqXqY69YTtFGFHvMSUcavdkbGLHGNdZMiNcofRnyEVeGBD9wvSAphM",
  "key14": "2ZKz6tsNjJERdMTYQyDPaU9ULKLW5vL6E3tXhnRxAWdcRU8qAQfiyGdr6fYBkXAc5yQPGUZWHYP1Xff3ga7WiUCd",
  "key15": "wsoeK3MT3nXzJxBrRAHXSpDgdKXKUkqWhpVgbFTB3wf9Hi84f5c3W3So38LvcS4ANoW2e4L8pBbbvi1AtNrCvcF",
  "key16": "qepmjHzoznVrhyurr1th1Mv5bynZgjwZPizH5AsVk5iJxNP7RatxoooSALvRggVbKbVsr9HebkLxyjbVfhZwNNY",
  "key17": "5v7B2AVuhFVcjC9U6w4saBrEEMfEtFVfNjnchiG5GWCH5WQj3ybiWRoiw3sETYKWaZRfWm1PCMKkxND7tMfXb4W4",
  "key18": "2bNJJgvH8NASVDWSNzDNSDYMhLp73DnqNkainCTS278dgDT3vM6DfDQLUXyUAmx3uCaY2FdirSYg4RtbfGY3M5Cj",
  "key19": "3XHesEYVUUQ2iJNSbLqni3BhrRSUEuB3bo6QBgWAhajyZ7d8Jn4nPxgrtmF4U7shGe2k4HBH63gCz8PTRwqdGZcC",
  "key20": "5NBeMdQgzDSY8xhx2qbP7mgbd2xFTvjXTmgHpJ1zKHugtHyGhdDhuwgTbzZLmBCgCKVnGpP9XLV3gz8xSXpfZ9GJ",
  "key21": "3xRPKwsdkrcrx5gAm4QW5FBSHgctnB1c4g6ENe1fKgSBR89u8RbaXFmEXbccEP273PxS6rFgutefXwYL6MdfyXgg",
  "key22": "25M5uzQ2sX2vrvYQ5vekRW2fLt7bRMGoBKqT5EjajiwMdgNSuUS88psJhnmK6FpEHdAEDzb3xJ5yHiSyFkmodGJK",
  "key23": "wbhwnRhkEPvhG8KpSL1WChHeBB8k5nm2wpywa6JUXx68wHhzwJcdamiwfgDbkZZjdERYwA6XDHiMc2D16ncLNuc",
  "key24": "55rkoKzoKL6XLaCgfGxLzi9bQjNL37ZJABothHARcvhtxhsVdebBhcvpMnFLgAuDePxwiVizY8Jt1TqCKBCYKoxM",
  "key25": "4CUNY2GW25DJ4j1VkTSzNX6rf7SwjFeTr865EQeeYQ68v4mQAWUouoa91BxjSWKXZDjoWkGMfLELuyvox5fDPLPz",
  "key26": "3r91uu9j5pjFUAAGNqkipa5S6hUmtgX7Jn6VxxNx7JLSUB9nY1tpZoA36HxbJJCQJVsLPzkJduhVn4HR5zUHKxKm"
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
