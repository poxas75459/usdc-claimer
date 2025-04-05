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
    "2df25pFiaqgbiW2VGuaqoUdHaLFx3ZRGJ9QxdG2LSLCMbmMGwqb5BSv11Ww7TUDqs7813ppER5aS7mZgxb2jLWxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qm933yFBXDX2vjxkqGijoiBxdCXf2nvXStVqCJ9SHMDsWvYk2xioAf4U2SbbEQ7fNWynoe8Pv8A8G9oaqejwGDo",
  "key1": "3YcdAZE9g1FhdnHmpcprhuTWPsekKJigsCYcwuCd7CsCrzNnvhkLMnNFmRj2TBiZf2KPguLRZj1NPgKQeg4xsA75",
  "key2": "5BzcSuSUhVMBsGeJh3K8TubHuDSLEYdDyEgdesomXCCGcXSwD8FZ7PdRk25djEsAEGtNrNeWG1Nymoyox4BL4rad",
  "key3": "4KqqwboB6XJ4ht9cmq4F5qw1cHLkdQP3pify1kNnXbkxt5rMTJn7LxzFVBEbjDiQcMFh8U5Ji2FbSnr7wK1WV4gW",
  "key4": "2TAZwYqXbDUHNTVbGqz5fXwinq78ZXMEVGLeUQnVNEvaTvR86kVh7DzJSuVf43Li1seqhfrLPgESoCzR43gCBjTJ",
  "key5": "23L7rxyafp4Y9r1FUeu8i26jY5jaesYT1pJiUtpANQifjHrCSzPDpMqa1nm1R1Df6wrwpWTYN3riYEYvo96tTAW3",
  "key6": "3K55jUSxfkzrYKD7yFG4DbivCN6yeYQGdNAx8kpc1cM9J5Lteq5x15sAEhDEetbfNr1BZTEDW4c7iKQfwNRJkAAK",
  "key7": "534WjBuFa773nWMbhnniDsFBJWn8d2HhAm9gTrvxrWEtHco8bb7JYaTopyc9qgqKdhebrVarvVTqfcg8wfbByvXC",
  "key8": "4L6eUZLovYHonamM58zLq8AqAWhVrtnoVyG11cH43nTfDuFJAvHdoB1cEXFE9uk84a7VdwUX8HHLRxGmwC7kFfGA",
  "key9": "4Uy8tgnisuM73jkiNciLCr3PcmzkjEiD7rDxHp2fC9jSFdgyLsGDBjK4R7DN5QootDWnXnHHt1V1qg4eDrgGwXmZ",
  "key10": "4isT6KjBNxAYmqTSpxvcfH1th5p1ojQYyX4foBZfVwCy9nchbvhpmhRTcMcPVjoYwQvptryyPEnRSnUoj48Xupkk",
  "key11": "3PSkGnFoa9o9XNCXDecGRitFy4M6mQW2cQaXFHeGW4FgpXQUkbdDbFQbmZaBJiPbcJPxUeJmVCcK8qyiARyu9zdQ",
  "key12": "Mb96gQubnS2NPsqpEu5ECBPsqCbmt6AKuoyscqy42LJqTt1WXiD58hJb7bsXaQgx8fBwvTRRi4qgpmZxnALMArF",
  "key13": "61Fto2YeVsv3HXjpr8KtFuHiUnAdMrdXLExrJPXkFzqiFzDMPrPKxvdv3G8Utxgg4vyuCQMicFyUrTSf4F1Nhfqt",
  "key14": "3LvgMJNPtDqZYBqm6bXDpaiaog9naU9QWbcvKRKXwYRwgSeqGDFeZ7AJVpT18VEXNaHn887U3s2znFDHwJLnNCfR",
  "key15": "iRsASb8T2WyzgskNxDprSyYE3ekfCNx8Pv7kxF7rZ5zrHYqj2bBECWb8yszYu8yX9SLNuLrv4VQ4PsGWnoNDfrW",
  "key16": "5ULwx9cTZKpyLZCBAU72pPghM6QGMe5zrFGTxEmDvZCoL7YPaGLyXsLUDv62tWthcXuFMeSw9df2LNA5yxC8jZze",
  "key17": "3wynAUDkEYxPujNB9KPfvSvehF3qM2JmoRHG16Ma2KqurXCkmChuTARtVxRK6C3nvgjKP2daw7PjteHt9ZX4ht4G",
  "key18": "4zLcfMQyms2Acm3m3NvVpsVYiYNbKvEojRiUQQGWy83pvk3aJHXm2MbHx7ttU5Ag2fFeEjMGtxBYRwbGBDCyXmAY",
  "key19": "35rVYb8B1y4ufqA5bURvMXTEZaup62vYZXD9Y6bdAcS8t6kJdjE9Qk1FztF66kRqGNFboKA96fiyrLRZwtWT6k7k",
  "key20": "dJ3TrqWRdSuYzs27yXhi7ndkpJXTgX9P9T94McEtEZtk7xVUdYpXqm16gcmNbWwdLbcRAD3ptaARtdwbiJr8cLK",
  "key21": "Ru6m7GQZCDWVXHcNpafFpNUpTuboaXAa3rpNBr2Actyu25f36R3P8QqZcVwmYTV4DbzTtqmSMgLLYEUZmSE8ACT",
  "key22": "2hUBgTf7miVfVAdxvdsmng97EgUzJvw1LkgFSz9WV1uKVFyGNEcWqPXSZuHqY4RgtfYcwhBqGCvn2D2Nunu9pnJS",
  "key23": "5X77dT8DrtEH65L1hh7okJZFU9FP7Rx7diW4B4DpTsQ23fRd3DgJ3xc1hccD13nTYKxiwHfJVPyL9p4Khxc2Cyvh",
  "key24": "3aRZe4zgqVXRKgQndNv6uEerGdKE1VCW9M6yH4Nge6sLhWpAc3SrEz8WrC4jvLPhyeDCQzi3gpCQKQASS5iKJnHe",
  "key25": "3HPkJQ64KpNsbUg41nUUu7gfAqwJzLsvvmtPZB4JoKrBFr2LSSk5Zaw6GKxahFXKkBJnkuvtH6B8BinirQhuPw8A",
  "key26": "444VNdPnbrnq9qPgwThrcxGqcibPEhkgSDUuMAsZ7UfUWp7uzXAqqKaUux8NZCJ5GC4b7EQ4cR956HMwhzVwhpVv",
  "key27": "4kcpfP1Jh1FutsHaoXYcfZ3WMkwVJgCmkAf4m8vRQwiKcHPn2XiPgEfuTX4xk8fzpRjKzfMAntyCSMHLbSHggDEQ",
  "key28": "3oaTUvRc3cgtDJSREmirE1sjaybS5Smm61CRsADokdSVMABDvAmJfpETqya3t4kWnwBhxcYA6x2EuuRZ5hc5UqM8",
  "key29": "25WcBbR1hhw8eWPVYjTZ4vAbDXqY4798uctXvp4uUNQPKwPbGUZHWPzCWsUjHDAho5X6uzaBPgMdXZgkwS9C5XjA",
  "key30": "2KaADWQusnH9e4BFENzyxqZEmh2L24sebaw8MxicrAqANwsLkDzQACziPQZmtmzNYFW8CmpZ3knttyhNCLybopPb",
  "key31": "4XU6HL375w6mQF7441V1J9LE7pKmydhzpXtBLSzgpr1YTDSsVZLL9Si2ud4RDYnk9Cr3BKXWgRRwNTtZWpWFqWtR",
  "key32": "5gDZkPPk8LYxJqrENWBhumsd5aLJV9eApKaaQGD8xQwGVjxnMSbtxAGqWQn7NmJEVffCNyD5LCDMr6F4joEAbzaF"
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
