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
    "5CY7caqU5RzzePSqNy9dhDPU32ydyhCCdarA3CPrNZk9TWztPooniaxd5vnVJt2zRoZwUMM44TL7QgxjhZZ8a5dY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4enRmQXxG3Yhahtea4gV3aFUPiygcthMtpdN4JD6sy7VJwJLsQDPgrw9VNXBdqKGXpVzbdMMAmi8DvoJoLK3G9v7",
  "key1": "4dbXPK3WAtPzYF35YKbTLJ7AuNujaWqMwKM8PfkBV3ov4bjtR94eatAyXZa7YAqRLwrjjYDLxtDsg4nnJDo2ZTES",
  "key2": "45ZGc5dfECH436cyuQFjuoa2itmLfPPnF9yDqi7SVjL4CsuAHCHnQQy7XEipxmpToXUPDiDnYoKPGK7dRmGNJfwT",
  "key3": "7gE4G5wvsH7pCKtSfiz9GRRxV9VpnzDDCTcKbpnT8tvcV32AsUnUJEhzhDQQFPJfP43XYbpcAm5UjsJsSkDgmMr",
  "key4": "2MoVNAc2YhHBSV1vUQgUp9JwA2ENJKtiVqgVqNLMnwX3f8bs4eVracvyhERgezjMRCrPXCCJjBP6p25ZdrjzwAZb",
  "key5": "LHr1tYQLbViNcAgHZdGVUzCYauriryMadniHDbjgSbHXSxdPFyoqZd2MAwG99wHitpRrgVHGqHSkwsjGYHuFBkt",
  "key6": "62SfmoZbdit8A694Mx7ZTZN1fe5HZ8yjBKQZ5gkB1zfnhKKTmc8rggocAkiJf2SCHEbfcXqqmtzuXyh9xCKm5Q9W",
  "key7": "67CMZ6grYw427bHdqo2dUTuGJPgUaKQFn68wwLkGhpYCGyeUQJaqMs1xrpDrJSBMU7Qt6NsVVnBe5QPBjTrQSEY5",
  "key8": "4nntWThMcB7Jiv29rVB3dAnfbJoXBRLhwSfj2d4oag12BgFQm5FzLbJkP1m3smVWW9JBRZrdTpCgVBLAe5GQyeTt",
  "key9": "4JUusmyFHMgByc5cGqBBkSHj54onaGJUJrzqcJbVRnC5FinvsyWipQVJR4nBwH7UTbtnL579dge2KSBuRqCgYQAA",
  "key10": "2LZ34x76ospdRvFMPT4YLJyyCEaTAVhQAaE5BxK2wG83XJiLcVEk3S7Dbg793ypwitjSc1g7hZ1Bje2VYi9mcERb",
  "key11": "q5mQvHZ4hukcU5F4cdx2zRcdTm49JH7fsRkAQmGfAEaCsy3FWukYrfo4MFD9HJX4Qso5jS7rkDE1cNMnVgf9Kwy",
  "key12": "3NY9e5Kx1stLsnFapTZK6pvt14CTM9J9DRCsSBWkYDP4skHWobvr9ULN25aXJwVDuqxcNvxt9x7gEMsVsdukahLt",
  "key13": "5csTfr1a9yE7zJmhRrPbryxYhstao9AAuukWX5Ng1cuFhQzUKqovWqKEXLNYNXeZHCHQ79rZAWN78U6nvpWVgT96",
  "key14": "jP4ySkGGsahwEgoueKrqTQXkR5bQHGm4trp9itxu6rWQXMpPvbh2smn6iUJrTnYDvkZKHcbStvjTEfxmncgiofo",
  "key15": "3ghMu6Cc3ZDcWYFSrDysra3YKFYohFGVt9tj6xcVk2QDLQW7pNtMn2G7tQnNruoYthWXQSmpmvpCnAVvAFhqAAK4",
  "key16": "4wMhf1ycUeZbHRH6148fB8UQN1kSVURzMKxym9jYZTQdbQuaBzb514uXbXuyUi7rQZAbM6rB6inHdPytTKStmfE2",
  "key17": "5DNuEm65tYoCLVwG9Y1HbymYpncWYsDh79rvLDimscBAErBDQuM3Y76mRpDrD6ZinwHe1qEisSjvxaQCaW91Mhmb",
  "key18": "26nJjysg9Au4W5q887C2jKPmha99AACmVTFrcvtG11CG71MvrZuPLPCKAY9532WaQK2ZYeETQaJw6hYbRnuCGnBU",
  "key19": "2RYFjLsvzFHKjvgQqcBUNf1rk8XpTXGupguKgF3bZ6aDoA4b3mrddQB5EzvXPH2nADiAY3tkDPNuhjnazP7mZfAE",
  "key20": "qLCu8nHvHjNuMp1TaRGX7y6bUnms83TBwCZzGagNbyLaSQ3RfoiCFLm6baCr7Hch6PkzcEL9XQ6SuJbUoonvdcX",
  "key21": "4bpbQpbeWCYc9JycSfGkVVe3i4iYAFnH4oncP8Q53YTWKkjwD1xLrLhSaZi1s5tXFfFycG65C7qpHutNe5aqAn1g",
  "key22": "EE7Jg3Q9t6evRpsXsHD3bqMWjwJe13HfrM2aWnpiynaPdYSxHbYPqn2WxLBbXLSL9r17g6eiXGeMQTsDafJxZq7",
  "key23": "63nESSVKZCYzZP3YQbwiEbn6TJ1ohEXLYnnNmh46UNJQZLA6WCuyMRKMMGDytMdVrB6edkgL4NnnJAs2rUEUhefy",
  "key24": "Ea2QqzBYq4CbeWPztXEtNXfinvqku9D87ZkkUM9Fo6N9PokJ9UtrTM97WBngr6LP9hPv3idk2ntryhSMJ59yKXk",
  "key25": "ViC9puUTk4gtCnzipJsDN8PfYMxigUD8BnYvAQb5qxB3QCigGTrgsuj2rQ9LBttdz4X1yzWZoa4wut5Uqt9WMbG",
  "key26": "2tGQ227hTUQXQcq69GEmD8zsTL1LgK6LXNP7Rznq46vA8tjuiympMqtjehDGvmfbZBkx4WqYkeZQbYrd6xx4Wf1M",
  "key27": "KeMq899wapNZKikoAKidQ6Cpjvze8ai1LTMSNVe6Pfx5g4PLLVtCCnWrGz1u8qo9Uia6otBY9WmvGw7ducrp42Q",
  "key28": "hHqMAwC2EtafXm6L8uhiY31sfbXX4N68JrAHrYvW5BuuJa2X78KWiBCADVbSiLbUdhfsFCYyhxC7ApzNyLNuy7R",
  "key29": "3q1LdYcvuGavVQmgYpfDzGZ4mVNzyg4ReU4mLQ9hSfUx7n4HoPykL1MgiUM3F6NhbjtL1TDsk1BA9V8ooBkLdXGR",
  "key30": "3zPYPoncr4z7unzHuXWZqMh2vMBgTUAnWxrHuEfzPhBkREPkn3jyjSYRXku2sdCJjrvLuWVMWTemrbSxYZzrPPN9",
  "key31": "GgSn28ETkHdir4yfDyiMnBSBiPoFC69pcWBXbPV4UMBdREzAqcoYdbQu14UdmT5dZuqspznh2EphVDsHYrsSwga",
  "key32": "3FzTsSG7rTQng3S7jE7XtCLziESg3TXuVw1qQuy7tjW2CLC9z4LMbh6M4Foo67AuABmv4nGvzCL5QT8jHMB6ciXW",
  "key33": "5uxrtRZ43bmDutwrK7GeE91ytMXnVDipSzywMadRDbaM9SsvYhZj1xqtKSpJzNx5r7urQAYuUBiixBV23bEkPRA8",
  "key34": "2jf3qkpvhzeLZfdYxzVDQD74hRjkMo6dixLFtmLzidiuhygUWMxRjxnyuvStrVRVzkZSrcHggTuLt1CEGvnvJqfy",
  "key35": "5wL5NaeMtGLR5SQpQ1DZ69cdYatSLusCwV2Noww2R5AhBWkS4GpMhvMPuqErcCdLGnL8sBjwkumQzFFq9RdurW37",
  "key36": "327dL4iALokFt6zrsDk5W14EyYyLJq2U8PiUfHyTcPpdQFs7EPYHUHKhovRoK3XMUxhY8fp2yaoFNZnoQCRGKATx",
  "key37": "cvtnnZApbYm7Xna8Vvq1JPBqXEECnAhZse8UxNb9NCgzLo7e4Upju5fUt1gohLNXS72j8vNw34oUBHUYki4s2Dw",
  "key38": "tNBVDFbmXiqC9vHrBdNevdAWoAiU6wTKcKGwd8DXReie5sWLwXR1kuMoWT3rgxipwEnmWgZGKRTaqFfWgim4HCV",
  "key39": "65j6gJoyAH6hr81PzpTHJYPCwrXQJqPRWaQt1EVjDhxwHHqyYBaQ3gYEsnrvc9V2JCbpqTtsYBBykRvPduAof3UV",
  "key40": "5jaVT8u93gxDnzDj1DAgYztnRGNMtkCDzp7UNUFp8BNkBbUgcwB77D2J9wA5RLVgenNTxvhEaRnTyrsRgACGB5cX",
  "key41": "ZCUbmWMt1MJZs1Q7L7LS8yWryZJDuMdjprvdW5ZSXYpEnf1syPRH47jzoMtDpd3Q5CQ1R5LLoeminEoXzTimVV5",
  "key42": "4iamHo3n6ueJFfccsQp6ssZX9XWC6gMsaqsF4ChoQVPKe7FRaw89iPzhDGGjtgu8MQfBt2LYZA1eack2QcaPwwHB",
  "key43": "CzvBPYYN5kyq374En1JQySQwDtZ6trLJSZdJhgPxB3UzawRGLDgAuaPPTyNPUVsx1pnEGyFP6RtuKf7cLgEw8dR",
  "key44": "5VjYbXi9ZF8CoaNKb1axHFgZLjvz11E1bD5bg4DsLeHzEdvagz9vUFu6JfKz1TBSGe3ik4zaWjbckMRj2M89r1vC",
  "key45": "abisioM25gm257MXM1qy35h2Qx527MCrrPwQRjr2mzzCxFhMGiACTT11HMTAfP2YcX3KWTNKmmHkRCD7vBwtypw",
  "key46": "2Xiq1ius55N4yMjawfRptuQzMQ398VPJFyM5frFDEz4fWZCWK7DKq9fijGCZwR8A86NqmreBBPgrMKzf5PbPbEsG",
  "key47": "5eMmXtgr1XXsML2P4CU4Cb38C26qb6J85Uj9quT5idBNcZtcBL9qBoawwk4hXzEskFGbgajLkxRd9TC3tY9ydhwh",
  "key48": "2YMSeLsTwjegGBisD2gkMnrTTEqCD23ZwLspfA92DUijZrGiwoMp6Q16dQEp3FPM2evCXqaYyFbCBnXavVy2fC2j",
  "key49": "3wDe94cUvd8nXThVtMxWwCbaqjF1irj174JWJZouphD9wtJbBHWPxPLq8yotPrma6Y4Fk2FLEDi78DUA9dDpcNJG"
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
