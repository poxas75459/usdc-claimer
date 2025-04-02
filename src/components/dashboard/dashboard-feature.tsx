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
    "2Y4byzR4xHsPWPPx7xjoKaNnUwyz7Tu73LSNTkgkoeByxXNobMTWm7dw4SCqcSpnYig3wcZLVcRQVe1xigrqAsq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TXzP6q31u1EQCZXnCxHzeUm16qsDpd1xLjmTrjyLCsJuveg9y2aeqZnMBGzRsyjfAMgwihMWN2JutsYDDveUXWg",
  "key1": "41jjUeVrei8TCG1mst76XZYLpbJ26JNNJCx18L24eE2djPeQmQ7GCFPuJJxjQgDgJQxFfWR4NvoDrczWVxAHqjqQ",
  "key2": "4NM9QDbW3ADtunSAoCEQJGWocUhDsEBRbG1jb2ybQSXTGRn2rS1k5Lar2fvngkGx7yziEixLGLFkk4w63jmunS2B",
  "key3": "3eJRhqS7sUNKM1GDCLbKEMZYmLWJ9aUB3hRBeR5YASSCTiVw7o5RLvRvnufmKwWuST79y2PCuBqfRBVuy2uyGws3",
  "key4": "fTaMpFoaFkYe1FE72o21CRkzAVGpWiT9QngYBghyW8tPsFez8a5RcEBdGhQD7QicKqUU2FRv6k4obKnU1dUg538",
  "key5": "4Z4BwizNUzNcuBk4MghYy4YCZhXHaRmwvGq7BGEFJxicLWCcvDA22kBwgUvdPnzXsV7EEQyQB4P8x1myrUPSD6ch",
  "key6": "2zSdTKuKhnh2JYC5iuip7eECEyy8VBJzdAUaBUwbd9RaT86pakrUREwzw7ZWzqGVr9YYpbmvLG2K7G8iRHdVuvAJ",
  "key7": "4idPGpebA8nkdxM7WwpJerx2XmQRis2xjfBfuxNK6W3fQ99DNdog6oYAEdSunzGwk4wN6d3YHSUgKFayEBa8dgSL",
  "key8": "umoEcZCBZCokz8K7YW27Xp39riH8zLd5i3RsxgJPfF1eDg6W4STUhWMxGbPPzpFs2Yg7qLazx1ZniV2KF5zXFCh",
  "key9": "59Qvnk8Tr1itqoS7fupPF69oJmidJeFyhj42JJarcSpm1PQCWDcTvz6mSuer5KG4BBFBVHJms7jxPSXEJYQaeqmW",
  "key10": "26P9y8fyjx3u3upsYgVj21F3gbKCmHgW3TnXX8yS35bYBMpcCqBXTz8V3W3HauE4JEDQQNmGmkm2ZsktES7x95qS",
  "key11": "3WAm1aHLcdP2RKGHJtuaQPpFSGK6Pai18HjJrh4ZGu445pghjJb1HDL74Gw78dn781hB6CgimUYEN1mZ2KRgMDo6",
  "key12": "2Xn51VqiJx1iznQWxwU7BezR35hKuoAYzk2NtJcJrEvAPbnfdYuX9kFr34jP8FvdPmzhyk2iYaYnLer1X7FtFd4v",
  "key13": "52MbQVmXcCEmy9o3eMLLXYAWDU2sccznmNGpWoEjbuDeziSFkYZEXZG61DRVnC9on7huz9HkpYfwuSrnRnpwTqb2",
  "key14": "3qtpiWiNXmjSFNsTjYPLbKUSvBp57Ea3LoaZrzUcx2Ffj7krD49rWtQ3caTMRwnadsdoFSdHTS7untUZVa3sEPwg",
  "key15": "3rbDDsanefpHwCHLNgxDK56xnoETuYXBNPaMzWBMABYRLAVaSWvFkdF8R37AbY11YzgN5xid5cumkjxcwAYp2mSM",
  "key16": "AXbcWkfgD5asuGid9AE6FjQxgebErnnfiR4BPv6S1t9Kg33ZsL1wEeRubc3jPaoi124y1bfDXoz8sfP6N4WVYae",
  "key17": "3sCv9NHeYv8mUxQ193vv9G5rhSkmBBSsZa6kWXJgio6d2utZDEW8PEo4dnKtQ6idjjrVJKPzhUb6ieTgbiZF7eRS",
  "key18": "2VR9zPSfaSXydQNrM4RELu2NDJmzgYmNV3ipseQPxMVhCMhHfamvbKPRfenbwHMWeBM4M6A676atwAYKptV7SRbT",
  "key19": "2wL2y6gWinVQ5y3qiuRFds7wD2Cxdydpxvoe4gKqSqva4X3CxqdJNjFBZbmTLeMqr2TMpe2DAPMVEpk6b8bQb8e2",
  "key20": "3eU7DDMJDtbcouujvc3ijqHqD2ybi2oEZS4sBA1pYKx5q8287H8Zk6V55rJycPg3piTbGY4EGqEmJkDCz8XomSTp",
  "key21": "5vCbjkuYZw4ZCr5JHAfgiDM4yvVoC47g9RrsAWAMeDk1BySUUD8XydZvNoXizP3eNoGcdPS8ta1N1WgTuttoPNuo",
  "key22": "9NsxU1J2VU4qjRf6PGHQTN42SENibtJU5gTvMtN6e3EBftMbL4ug8FXoCeGNCogg3vfo8FA7yFudDuHYiHaHJAX",
  "key23": "5UkVuen6YRzWzd5rQWd5LM6XubcAtqSZ5EzXMCKSedfasZLSTimTgiVAg7zmzW9SPeLiVg84eWxzFbMs8UtbES95",
  "key24": "5Bpoi5soNGAGKWKr9PutiyHCNFjokGY5PPrmKFyY8StCDafWnLXAM2iAptTHQoMMx1uMQ7WhgwdzMktApuNP1Hb6",
  "key25": "48SmMq9wq1e6MtcJkf9CUQERigRPYWosPqXPxhNgtYX8kEYU8Ki9q1f4cxaQr7ocbLqB62u4FxC6dx7YjRK9wUBr",
  "key26": "4UBxP2U5EbU2DcK9amX2twwJiTPfnXTPWHKrjnDtx3V7hMB3LankZabPH2NSsLno2Rbu1acW6464YXPcXeidAXzJ",
  "key27": "2miUPCRqQ6KicQcfpkpkwUBbtPUsvSpWqverZYXD89R9EP34Mb9THhDtiprqA6azDy8iCxuHc8SbVWWj32mgbZD7",
  "key28": "2fWwp3R91rbmiFNFA2BEQAdqjhksPxCMji6WGK7YgmVSD1fzy8Kx2cWvAvVF9fX6LTVVERGuPknmt2Cc4b8eRaCv",
  "key29": "4HhAibcEdp8zoWg7YjsEbfeJ1ECwpxk8gGqeg5Svnuih4SE3AGnuCwLhqKEJC1WL44ybvqQubwNShtiyf53xHvzF"
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
