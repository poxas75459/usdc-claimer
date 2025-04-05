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
    "2zS4RcUc2LYq4MHXRFERBxgoYtNApSrjEe6Fd6sDgyrza2ypeQdFFwPRC7cgVzzavR4q61CSBVZ5v5GKs3c6WUNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F3tvCuLRbApMTtjuyeqGNcet2VodPjZAzf4cajpaNdiyxbaDSVk3gMVwyvaJorQX5TQWyRvaN7h4Zo6y592SLZo",
  "key1": "57Q4SbcnRhauEnJ2cE6UMhwfzcux4UkiEygUSL3BxYNVpAjHNtsy8Dnh9GJzzNajBbbeW7WNZ5NRDDeoDrWAsaGw",
  "key2": "23e7uwfk4sr9khw67p87kRzNp8VFpnj9HeZRLrSXb3UXh6KBscHNyvD3M9T9t3sqgBboVLGT15z6w73NThf7CBzy",
  "key3": "ZTZdA6yEU11rsZdjKCehDNTFYPSvD16QcfHFXnDYfgk5N77QUqz6Fbyz94kHiLcJbWXwWpxSaP7un7iiabE8DnH",
  "key4": "2sqDxEb1CLWVTywvN5j3KUWVR9thhad57v91r34NWCDXQnEPYDWTfb7m4hatWE6bYjsCXJfR4RsYvmvCgF6tGTfu",
  "key5": "3GK6W3rcudvGnUfutqSuM3RgAVQ9CAKZ2h4WXCnopb49dAZriEsHgBVnc1tTjp9AkW3uu6SZh6hJtZykfKWfhWUA",
  "key6": "5o8r7jRcCtUbgDdA1zgmYW486NcRD1JdYREehkZJaX3ZXwD4Lqy87u6eXuX9haQnJS8XYwxaVw7Tx9pxeTJpdASM",
  "key7": "4a9iVaYhYeRjZTZy5JGVug9pogevaFJyqEpqinGcZjSjwL9TsdtQmqWYzEhUG5LBRKRuPAS4EWCrenTNe2MQv5sw",
  "key8": "5dCNSuQSToGEYWuyz5R1am7nX8fiDBKpfGrxX1yAbV1SSpgqNChXYKi5WvLXt8k7AGe7yRhDo6DSgPxcoaARpmFj",
  "key9": "4pcVY7PFZDzNPxsHaAcmjxSeECetyntKaqzouHFnHQtoSd5caG3Fskz9XLkvKXxteA6XxUSyG5SDHNW4Lt2PE5So",
  "key10": "5WuYN8JyVtZXTv5wZYHfg6WUu8BMrdPcTRhwvXsgCWvp1rwk7TxB7fFALQkAv4RFnHCVp5Rg7WxSVMq2Ga8WS8cc",
  "key11": "4pBJPbPdJ86Y5ksLSJpRMdApZ4TE4ibHBoqitinkPRe6bfwY6nGsSh53fHYxkCYpHb3hWSDApVuyEYo5tutQ6qok",
  "key12": "xjbt2uLzvbMdC3BFR42PJTkrGKmP827PKzbQ3h4Dp2jwo6j5JEPVdVi8KMv7aV3ZWA8ckbseSUG9vm1vuaxNeD8",
  "key13": "3uzfNidYpdpYfctxChnNsDAq4JRWvuAtVN1EXsyQcV8PT3ZTcBKJaQQAAXEFMpshrndS1ZJNVvrfLbHPpYYuqRyB",
  "key14": "4BubyDDJGkT5GEnp1mekSJWxgZJXnpi7K4emaHZ98LgCpH9KBw3sqHFjYGPp3nwynT2ZkUEPCU8nJWApMNKUSnN1",
  "key15": "aSFYGSEGgzhYhK5puNCbqxPCnLZoR4hChUpPHfhK9YXpfjqRWmoaSUxkTuyLPQLMGe47tGJEqDW5b318zH8MZJz",
  "key16": "4xvfW8rbNqbnhTWJq8ZsqPUzNixcUsqSgLrLoaxc1jb7oqAVP3Kf1bB9XkLRhfRQ262t481QN6ZUWoc1i2sVMZ7Y",
  "key17": "2DyNLnLYD7z35aB6VXykCeTS5Ko4zQgSmoNeEmAvCEMkA6MDgfsbXcSzZ69VpCv7ahjCLt4vmSCENpqWGfvPrVEL",
  "key18": "521crrJb7SPBxUVkyB9GkzjShHBXqir2H5LVdx2oAwy4XARHfUvkkCYpmJokWCWXVJ7uZhoqVwv8UsZURuJ9pAmp",
  "key19": "4sFcSw1i6t63huwBiJKkrpk7uu3iY7uw5RRFPkuT91ZDEkcPTVbkmEtXdP6nPS5uPQ8BnbmAsuidi7CQuqX3iooX",
  "key20": "uRL5oQKDEHpM1qBhgCRZGPbW8LbWK7DNaqomLsWAoeNtsY97y3QGsomkxyctD9k43QvQefw3t3iJMZasEEbwoSK",
  "key21": "3wfCnPfjL9Zzddktvi5cCgnw1MoCDBzbWciBBkF8LzcF7EMYWqrZo58dU4zoCU2W6gFxuV2EEqXQoHT79RknYNV1",
  "key22": "jyw5b3tXhRv4V2CVfghKiJfa1MtE6DWp8HAgfpZ1oBH29ixmrGU5rSoFvErZwY8wPX6LMBUdB8AtMguyYE95UVX",
  "key23": "67TEa9BJHPqZNEsy88W5qarHc86Shxvc14w3PNRyA7kCVRcRXfqJNJTXB2z29VrhKxwgDBXaPR7Ev5xw4qNwr7Bs",
  "key24": "azuCWuGZUto8PZzDdFZqrHevqUBgTp7K8t7TxjA598roQ4xoXzu7su9eSwFYKeSoF5q1RxiYw7e7SUzN6fn97d5",
  "key25": "4xN67M8JHUNNRRJtALeYNVo9RxFbxw2WyPQ9DWaY7xSBKgqUibAEGboovepYiGEF3GAcfbgeSRf1waTMCrcy69bt",
  "key26": "374YrQmnign4mU6Y4XY4ZCqakdxdoQW5nLzPU9eVhGyy3uZiK9Sz6Ze7L1ip6pHRJ3bRgNNkp3kDpJFoJkekQgty",
  "key27": "57AJZSU7J4T7QU9izq4zbkzAZqrySWD7NEP18bK2zyemGEmdTcgHEt77te63VeP4PCHZ3arMw9QzZaEksuErKvs9",
  "key28": "ozh5FBfXZ7Gu8JW95PbPCA36V52srUZKt7cA8UQsRwdg5Z1dtmrf5dXBUKNJGjvZUVdAPmtrVric5LtgMYZ8rvV",
  "key29": "2orjNZLcWo1HsqtyXmiZMx2fhg6scu3bsmk4CCLUGrk4GpuuMARw2bUUSbNC79dH5jDTELGAePWjavCZ9FMQL17P",
  "key30": "42xq4JZUXPqXqqd1RLU1uZrps1UqftKHndK9gLNGhSPw9pvVTJVUGkWAfbaLasiFpoVnDhhvbJTKKoYL3N1o841y",
  "key31": "35L6Z6j73j7FpR8w6rGMg8X9Q7Xwa1N8eefochC1eHWy54JHX4ec4JmET588tuiZ24sLykAtX7Qwwn5KUtjxjm5G",
  "key32": "4vfDXgorku89WB72Tx2eQMQFubjg3Mdq1p3vy5ARi8gqW8wDboboE3W23MQYgYjeXWwjL7Qzg5yrSsR2xYBWcVVg"
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
