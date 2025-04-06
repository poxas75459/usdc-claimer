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
    "2NpuWe5fYb4NXNkRTk7W65ZgFEJ18FgMkyeKNnSpHaTrA6TkZAWyRw6Znmxfuz95EQXBBiJQEvvwC5NSTNwFcSNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fo3kn7NSzJUy9DLvP7Yb4HiySLg2gB2jjd5DQ85GKg4NrBGHVXCvzZhhXVHUwVtRd2nAhuFfyvpMwUvZ3z75v8E",
  "key1": "3brAomLF882M2B1Jq8NjjH2btDgZdLzLHCRPVbsuBnBXQNE6oBDoM2xz5BnExkGAU4ZLL2xVbgZSLWoYMtJjqGrm",
  "key2": "2Dh774hGZxLJzEUkntVeuu4TxEixUrAwWYrMxuumDV2RYPLjay63KhWiPMvfxEHvoW7sEgXuAEWrRfHsoNfydmQm",
  "key3": "563KccgUCJCPR2wKLpeJA5diw4Q9ssaNwTgYWakQ8Ax1dtmFuWeKY2cUVA71Ce1WsRxdfZ6JvGBcNQaAeGE4VCrD",
  "key4": "3yk4ekdaS2TYddNV497qNURXowbW5jkgk3oiJyAj3aSfSasgmgBgDMCsc7pynuZu4qwagJNexKbu2sk3muDi18fQ",
  "key5": "2NxNRRGGqV9T8nr9rQRPZPvAgpGBELtTVf49rb9rndihjGQCR3eBxkJCYbzNHfJhCP7JXa2WMwk9rARUfndubgJr",
  "key6": "5FW6fPyNPCuRVB2VEoJeybmavuSpL83SEKFdagxaxBP7RaTiLo8fwDXao4FHQzmdGfxPuWeNyHymWrraq8SAZvTD",
  "key7": "2ynrFS7yZLwwDgfj2esVhCoP65YeymutPV1C3v7Z4VrNG2S9oLQjHbQmvNAd6V2H5UYTmxuFjSbp5pFccpZWKHGR",
  "key8": "5KaTj1VpGxvH3yrb2HYX31AZALLQwh7Peap6XWo5AQ8biRF1Qh4a81jHEWWQyZBhUrXiFrVo94ytV1BRmUs62dmb",
  "key9": "21cfRELXyUasNCu7a9KpjDZi6bKJmM4A69xCDSudYWHNcu299YY1LjG4dNkuZPmDUaSDFkazo8ZPxhgXB4mizRmy",
  "key10": "2FfoYt6bseynVNzn6fHvfqZZnWRL2aA3X2W3W3q5b3xRpoPdr9YNrRYJqaPiBCiDNLuEwLnbu2371nUD51uWyY6W",
  "key11": "2UESioywmj72i8nbYst1wXmyoUj1sXcN9xXdVk98MWCqoNg3FwoJLMynAMiaRpFsA1aay7t7mmiguDHghKwqkjjd",
  "key12": "2wdARGo163kxaLZRkn1JFU2NAz9LbhTeFuqbd26E9SRcqVcNBPZQ6aD2bGcJe3JDwxeYwkKbXKXQ4czpUJjDU8Lv",
  "key13": "5f5zN2B9n7FvoGHgZTBEjD4teWWmtCX3RTVWpDd6MBZs8gziD7m1VXfFNLCgvkco96sZFYPPLCtrxuynSXMAonrv",
  "key14": "5bbE3YWEprar7EVEDyVxU9XPxJTMEp1nASEpZP9GRxUiBVyejbaZZPxa3QovDfcw4nTCRbejWGoXCSyzPMG4JNw9",
  "key15": "Bak9XmUrRUY1D7HTukLJ7JdLGsmL6CBucPCwajQTDLUVTBpoSyNc4iSboGZQmn1iTUDFsWY93jVNRPeNePH8nxC",
  "key16": "4LdZDyd8qpAS74dPXYV6Yx3m6aR7hS4aeeonxuz2vjHUqwMHoWCaMRJSBtDe4SzgoKZEPbJCCezkCgHkRUXK6pE4",
  "key17": "2w8vaEhNf3J7TxFEtKwJemcottnw9uRVkahcLBiBXvcwTa3SX4QsHYGn2eiYGxJjQzeYi8DgPbeBnc43Q1oYznpG",
  "key18": "2Tpx9p3qJGGhFfDByJLkcr6pNZ6fkdrFnUaC4Gmrz6SoWRAGt7mHyj9WWYJTvnat3V6ae99zRtmk3M8t97H6f6qg",
  "key19": "69njpaScZv9YcHkBr7bAHPGSnKKVz1q31jHKJCFCxUHjuCunehvv5a6BVmzog7vyRYdSd2AQMMnBHNVAkfsnyL3",
  "key20": "2n1E1Rnsi6iPMMv2Y2Sp9zvbVZf1yMj4esY2mAH7A7RbPvSqYvq6KBH8yekvUBrZEf8xD4kZ3koJdvyUcB9XXWH6",
  "key21": "2j6m2ZJrZ7iwtqvQnYJ7BdduqaP7MMDhkg1EYbQytDDF5tKUiCxA3NdREXKNfE5uHM1QLs43Kq6cpom5BgsoT69h",
  "key22": "3rwaQZ5xixXsvCnkQbmMpQRow912DtxqM9iKNk17wvvmZdmsNqHNqsdXDbPdtMVEvNJZqK3EiPpmkaZ4KT1bfjqb",
  "key23": "HrMD4a3srhpDY3ZqUYRT9KrMu3kyBdJ2X7P3gXG8TzQtS6bHzkz5CeW2prtRNKZe6C9T98DPWFf5YZq1KtmwS1y",
  "key24": "5inoiXTFUmuwE4Uv7cxu6hVkZwoxJBNQVedkdUyJrAQsmushnwDNKhi3asMnjsvPVgH5Pef2RC3zd5kz9Ja4vhu8",
  "key25": "4VmMuHup2MDSyQ7qqVYbFVP3EP1SeLVVPqVZdEqQgVZYSDyEhAQuwrHijMEaaVg4capCbf2s8ePuC2U1skFnttj5",
  "key26": "3W8anBawpKcASAYUrKBHkwt3zYgRUCTiNvwZBt8ahzxhVh4sTTPMKcD1J5pYZcnqQmfDnMTih8p1dEW4a4NFrAMA",
  "key27": "2AHscMWN9kNWR8ErxTaKYgeC493pzsKZ2P9yCwXzLFNUrrscCxRrNH3CMMCkSzrSh4HgHLg9ZfkFEjrfnZPDtUSm",
  "key28": "5zRqPBAedN9TVVed2qabKSECZvBNqYPaFzEkdfMBPuWU2hjowe7V73fFDmo8XEyHqvyMSxJ9y9rqAMrcFvBtFJri",
  "key29": "2A4VxzxCyRbdn2gd67FJnJHUH1QqBpterbhDodUD6YuSrm4wuN4xgjstzewMZx4zWvKLWDxEKJ9NaZDjXthmo1gL",
  "key30": "2GFhkb7Ky4Lfp3kXFRLKyyYhYNdcwNWdkD7WrLPpqw2hzvX9GuqJrWY4PEcJMkTfiK9u1JJwKh2FBTFs3X8zZY49",
  "key31": "4ABaDf5RxMZSSLpAhZsw3V7RqRei6Nc7HHMwAFeLegshNM6gkjhUbrMy7sWtAhQHVpbHVG8ZAHKqMDkWrJrRoAPw",
  "key32": "5Vc2uDW37ekzZBN7TuUXraNZdUoG5cMNseksCyDXYyKorMibzHwzqPa3qXpnKnjNqtWUpa8ssGfoa9G7SeBR6Coa",
  "key33": "bMmF57L3bX9LJkM5xiKxafcpqB8bECDjxFhrhNLCXGBcf3EhxWqxqghSbfEq8w4DSogb5MkvrnrTNcnMWPEGhn4"
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
