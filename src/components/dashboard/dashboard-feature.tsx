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
    "5gf2EsAXzQ6hxruXffS75qe7pGwbcJbeNbC6cEfL7F4t2YtswmoYagvcDLtAU2eMsxyhrFD9Wpdkg9x4YYQTZy62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PwQwh6VLo4zvs6dgBgdgait8utXgGStHZEMHwXLcVG6tkPJjFrPz98mA2MmP3rXfCxA1ZKVPnqhersLTB6f6zQt",
  "key1": "5m6in7Bg1dNxBebfjvqGHH2sWife8zBTGecmvCyAAQGtAXwKzHiaUowHvzpDHFXFrgGS87GhTbu4j1BtVaDUw4Z",
  "key2": "5FB32wkEA2FPjbW8vd8E7MEZKyYxzsg12yra6WZ7GxCoitPvgkhoX2JVSUjLBWMt3mpLk7iZhXs76iAs2b3WktX9",
  "key3": "nr1kVVXNaES1RJwHzWJg4VzCbMArDqJN6Uncw35txmTvzpTs2Z3nZ7VQ3cDg8xEvasK2hjWamNTai18a57HNUz3",
  "key4": "YUmKWZ4DF5g7458yeLArBURufj6sN6eEPyrzh62CCGyijSmbADAupn8u32TexfuZYEHBLAdovG3S75CZotDLTpD",
  "key5": "65pzXegJraPxqd7DxiuACThQZ4TLAhcS5NhAjC1QdqyszZ47BMCz7MP9bAyyTyLszoBR1Pb7MW71bj6sphcbW2N2",
  "key6": "4WsGXUADYqGD5ZyQUxw7einSZYf9p2hFBNqreAviLE3pUfBQCDJFai2TG7dAiTJRbCitmBsNW4LQHVkZeQ1qAPEL",
  "key7": "3YMWZMFmrjFbJb6Ud57hT49GrE3hcTFBjDY6sEswD8vFJLQdfDeNYXC9YfKTZ7zztkJim1KCyQcJP27ujEnAMRpW",
  "key8": "4vxwnEYs98PBm9vaoqgsY1jEdG5BT1bPRGePvtX5BgCC6krYz4YsszHw8MWUbfxkeJNT6czVpzYMVaGWiYzsDDeV",
  "key9": "2vH9DthKZsKv1A7mT9QeRmSR2smeK7troevNdNtthQZCzaqA64HXoZ48GLGZNu4TEUtLQtPjhXY3npViLucTeo4C",
  "key10": "2kznBGYdED9MLaeCZXQGwuTqzigtfhb8BuJ9mdyyukntnpAuQ7ZbVX4jzy45Tk2fQFKuPL32qiEHTNzxdNFpy71M",
  "key11": "xr136i1jd7t9t6BSyx1acewwQJthJSEbVnUHHdyBFwn927oLECDjErwSGNdEJDDFgjeLCwGFYuSVp6xBXnDZDku",
  "key12": "57D6Uf9SY8zMWFwKrQX2zFsBNFRU8345uaKVDUvsQzkXXsPUyXzXdd1rtoBvJtSbcgmvaicv1vLZcDm4iPXZ2rZB",
  "key13": "4f8MxStJ1sEcRNu9vqMKXFNj8TxDYB4TPCgre4QeFcKfna3aH6KJVHFjEQuXTYz2h6tGDbnjgYYQ5b17skBAzNWT",
  "key14": "2hhfmzAgdp3Ex4au2vtxNcE1DMaDaG2yyT3SyyaPzs1aNhjFChunKG4BB5bQWSNLtqk593671tZBnu6Uvyo9Gk7p",
  "key15": "3xpkyKFAFYRUBymyyXVZ1cWo3qFrv7mDN2UL7BwQVTuNWwqK3K2rxcBJhdC589WDAXyNWKWejTXyKT1775FXyQju",
  "key16": "3wrdcBUa8U8A7vQBTMpavZfSPqt8Jfbuy7ACuhbh83TEDEZYzBG7hCgyqGRk9rsomSV73927dzR6wcdYFGqfNaKV",
  "key17": "5qEdzknFjkdnLCngUrj2kbjNJAFJ5H5YEAgNBZcR34R22LyUcucojhhZWMmfJpFANrVaq1CmBb9A3TRsdFAjRbjT",
  "key18": "m6iuP5HYsCZs7Wmceunx3daUD6yTDTEvRC7QLhdKin595vUbFgCuowGLfkkjprb17jvDE7SYVcE7G4pvHRiCdWd",
  "key19": "5YwZiGPjTwpq4f5nwF83zUFDpBRqjmzZcPU7YTUSuabRVAnVtefG36qUnTVPWBASGuBgForDVL6Qwr8KPUectupx",
  "key20": "4yL4tXwrjP1oLa6YRu3wTn6e1JFi1ZtxKdS87ivmos6bJnGPsEqXWDxwNWqkApafhtbYRW1utNCSxbonwqV2QkAM",
  "key21": "4hQE1bcFVSGFVvc8qXe4WUx4Ls8AMo2bcf3QRzozfoWnoM6WaxnvQAheRMgjAgknK7vsxuk9MP35NMFnhmqkGjuM",
  "key22": "2eXmak4F1FFgE7V2LmLYxrBFDcFbt2QVMfuXENL3Lvz2dorHniAoiaU7KWKtgDYpfUNVgJBnEbU4H9anjZ3iyKzo",
  "key23": "4MNsA5HiGTaN3HGhoMW59t6TsAMo7xx9fSE7gLV4ewgacHMAAYta1UfKFZgNkFFTiF5eo2yztA7rTSSg3ZXs8mM5",
  "key24": "4PWsDNUhjUYAuM9z3ZUrB7Jn3vd5ZdFscSW8uFuw45U17sMpLPqSfUbuK1k92RAQ7BKuHvj7od1FaWLGd2duC4KH",
  "key25": "GrsyMY3F2V9nneXa1FWVjakw32C71gtm44vohrYBxEFqSzCvFZJ6K9nKkzqteKa89bLWPuUhZrvcQqNKmSm5ScS",
  "key26": "3coqMhH7g9rBgwhKvTPXYNf7da9i3h6w6a6sCwbZ9BxmD313uGfEiR537D6eNXbEuVBQ3ReJV4MYm4MKw7g6qJNd",
  "key27": "4aM6Ju46tJNR8y7HQNAMzJHbtYf2LRstztDUGJNxRJcopXB8mXHJvdUWA6qy8953zXC3pe4aekuqzQhqn9jB1pjD",
  "key28": "4NWaSo8RG6UZmCTqQHFToqMsdFAmJwwWcgmd8Yf63osUqgGTQK1TeJuuCrmNetQEixqGvZbiFQXVAFiS6NgsQamR",
  "key29": "2ZAuKNnCGtVEBBA3TMHZZhebnv3XjBqucLdGpAU9g8shVHW8EzTYYj4jYNRTM2EMwEvRQADYee6RwR3ZbeZskqjY",
  "key30": "3mERDpVDxTE5f6AYaJbfhNXoD9QffGyEYSU4F3xv4qgzfQk2ZGSrseZvtDuoQykezEsgvPSZdKe2MVkuRFidqBXb",
  "key31": "24M2gJ7hARWsCFGVDHtWfsCayqU161tdQC96ULGJB8F18ckrC59ZWZsa34mqSBQjbp4Af8UQadXDV4ZKoynBC5ZP",
  "key32": "nByHEby2HRDwBZ4jmvTAomLZXiifG6fmsP3PS8x8rJEmy9cTUJtKRfuLBW9rZsyur8jDETgWwBQaBuFaRM23zwC",
  "key33": "d9EzJZ6SWeezEcp4L79GgQCYF6HoLYpuVf3LD38EXjDmjBscxRbJaD2FuR2TFF6r5NwiyAk7gHCVXwuc8L6YWXG",
  "key34": "2qYPbAtvpG4iPZK8ur4zsqBq6qWTxYMgsKAfrLGHgWfiozEzNXodbdQL4LFG1mtyAwZNLcbHHNvky9ZcDyvo86bU",
  "key35": "5wcGzKESQMDqPcBh9GeQ5Wpw4w2Cp4VQdz2zsqaiJiJHgG1La1BfV5DGTG53APHAmJySEi3GX6gzmG7MkdgynRYa",
  "key36": "62TUxEKVaU3egmGpktQvg45myGTtLKCTHb9CA7uUndXumMY8bNkNoNNjhdgtg3tTfqV4obMs1keDeseAmaxkhAYn",
  "key37": "4UMmbUKWd4NAdJAiaL1qjGnPJiQ5nbQff6Dh9bSojbHaKpb23AAtA8TkUB6wuY66sLHyoE2KMCTEh8aDFVZbiFHA",
  "key38": "24FY9kij5ouHn5uEYMdTVHYWi4bobsE1ou1FUkbwB5SkzaHwmqaodgAhS5XGEbyg6HR1HUFfuX2uprnrSTE6Knad",
  "key39": "5geWSbGFBFXwmuP9YRQwVgxQBg9DpJzLohbEZGabpWk8j1PtGo12WMCfPak77hU2HAQnEK9wYaoVAV4e6mCC6gP9"
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
