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
    "43EvrTAkfoBnZaiRQS7DbMV7XDtfK67VnMcns1hLzh6vroEZbtzSDdgmX6re6kkBqM3iCPrhs3qv22SmTA6LrGEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N19AJhFaWjAAYgasMudgFiNu4Nde9suqZpzJbZSwfrTGxYQRrNfGtahUe4CKjWDWg6LB2rN6gaSWHZZVGLKdT9a",
  "key1": "3eaeFREEE8mckYDs8AFHSxJq758Z2LtEYQNQ5eDVoErov2dayKpKrPFkmeZbjtLpCaDcLYpJyUBH9EB9hXWpbXaa",
  "key2": "2VTox8p6dV8RsdRnivuu8FHYdjKyZij19CPYBTPvwQZDxzPvfqYLVL9EshMW8boPyHC4TAs5DVn8uXsHNcj93s7N",
  "key3": "2G6xXZyuwWzTMATduhgwmpwUCqNbt9NCTmyCf8QXHbQpS5GG1cqeQ4ThnLM225x9PTxb3UYdFXwCGrF9AMrhXCKg",
  "key4": "3NTS4M9mZJDLKsLj9y6zBuNEEmfoxwNBVK2dvsR6HWbA1W6ctsZXR6WynzXdmtud7DKnXvQSG7Jsm5ZqShkiow7v",
  "key5": "65fQyj1yVSSLX6kXxaNvLz3cXRc926sLrqmNJaJRsSDacDe2toZy9ucn2jVL2tCKmE5wmtuMEyhJQDSJkaqtiN3p",
  "key6": "3EhKh62FdkuLdi5GiQjetDJ3FZBUkNLnzhkqNkro3mGvZXqCxwEUzT5xoaoMr45bGNxgL6xXSCrhEE4ykzreLj9e",
  "key7": "5R2rVrheTLMW242EYbRcmcUThdUeysHTrpb12nPGeebnSpFMx3TtGB1iRdxWL54F8qMc1hFTQeacPxDALeFYsCdo",
  "key8": "TKRRkbg6qw5GvhdwJ5o9VCYtGnEiyf85DgdSmrDQoxNzJ6PnVLEcd1tXRmq4LpBCFxQg1ALfs8FMXEj1aQoPZ3p",
  "key9": "34pNHhJ4HfJnyCKKBcfchpiU1BrJhvesVakt9RM539yrx7SanvYz2PbDA7qcSnrDsY3sSw61sTQF1utD9aux6hko",
  "key10": "u9S4E4JqbYLUjdE3PAhhvJhNrDVWpc5gsrw8WMA9PLmD7cGiQ8cwjJVPhCnubtT5kgGYRzdWV8RehGxMfpsEfeR",
  "key11": "xv6oTKypMqbo7ZyqFhLg5GEFT3wdk85JPJ85kwNZeF2q3FgRpktMrbtG6er19uXzgC14mGMEAE4XguD27oxCJTj",
  "key12": "2A4TwEh25TcMJW4v7FNqqAj6DSXj9hKBhcECWdsKWv6UJZEvhda8yPGQDtkZJRYmp4nW5VDNiTMos3RvDveADHir",
  "key13": "2tdxfK8jBY9nBw9bU2xh4WVtCGrXG6bqAiNQJmV924XdxC4mHpRFjXx4LdttjC64vTRt2DWPpFzdnr2z2k6LLyk8",
  "key14": "5ZM6wKxjZGWLjjbQNNMVPcTPvcE3RGKohmCGk29xTksx9XYuWztpWXvamNCfYTvzKzKXFXByM3kQ8vAncKE9e5U2",
  "key15": "3BNU7BRT4yFYCuryR7gfHKGkqpBELCrn4QBcJCqLH5vQ2KHxLz9pmkUXwacVkKkkXEiQyt9ca9qeaJcmtNvsEBvp",
  "key16": "663XSikyEf7jTKwweM2soXk6pJnsKn5osFy9TEZtTBAS8hceFAxY4Qfe7zFWnksxRHsiWjFhYdLy47qeAtX4fgeJ",
  "key17": "58xEh45aiDuEBNUT454Yu1vx8A7Zq6yDjvxDg6PKVcBWDQhgi1YmJuzKGn6nw7F8bsg1dC2SC1EE9U7hrxNEi15E",
  "key18": "5w7sWPWHDBWwfvPiMcFKdjh2SFGwQjopH6X19w7wo2TE2LsvKnLiftLVA9EvLHFQ9yb6J5fs9Zabrk2P5nwouy6L",
  "key19": "4HwBiBkT6JhR6m3uVh4mjVFZY66hH34CWKUgDMR3unyVnKFd1oRFtEaqc1ajuaQp2GFSYCxzdWVyAxS77nXAS5fH",
  "key20": "B6hDqmZymJczEUPnxoajReUqDET44EyPJicZAVJ6VgvZu6Wb22jCtPCfNd4zixBL5jv7eMbFShLg1KDVcgmwEAw",
  "key21": "4ugfBmcDD2h6ht6Af6xtFJ2uxofqZzqREEioWe6VE3nwxMYRdwAEiA6GLmgixCsYE3sKwXqjvaihwbJsZjAigX3v",
  "key22": "2FU1WXLLcCMZTxp5tJ3ybBF1FcALBQTZfJjJjpbC8ERa4MaNDXj56nSwyDAYGpd1HS7j1p71D7SpJGfYqSgwWHN5",
  "key23": "4sLrBZsBDcxjkYy7zPvyP5tJEzGvZ4NZy78DAq1pBTnGGC9zvdmEcu4SCjJtcbM2ZjrgmzWtmx1pfCTNDNiaFpJr",
  "key24": "6e2u3qnrkALMKTiNXsxZktceriyTTFJbk8r7N9ZeRvF7FEaEVyjA6cq4QJjKqGnhwz1yfj4XNxM5HEymroXWWoz",
  "key25": "25tLe6S3DiWhi2Yhw9mGH8DeR4jrqBMtq23sTJBdRjR45k1MQ6KXUuFmwzZtzFaKP1GdfMavYgN8RatdMB7yc2Bv",
  "key26": "XCQDJP3os86qrQhjx11CEhk8634iULegCXr2Xbtb3o7jzfQhzMLAZrLBVmwFoqViVUHMwuWzsdrh7xRC92qdNM3",
  "key27": "2nybbWgkWPFnZrGVaRjRsEb2AsenZhwg2asyM5BZceBk6BPbvXozrsBVkq6hwH7ZjHgZo8ispFn35BNXK6kwuYWv",
  "key28": "3aHGG8uqPnYAxNaCwSfC8Qw2asVCnfTvdTDk2dZVfp2JyxzKYEdr8bJwPem3FRDS4sSFrAx2kbHdUWCtVzk4FqZ2",
  "key29": "3vMK6JguZ7CZLWgGEQpxzQxS6XYbEhW3Hk5ABQ8f9YebRjHRVWsLaoAk9Dkxmq7wYVoAQzxgqwomgTT3cAUbgeT9",
  "key30": "5xJotbs45JbhYKDtMBoCkYddvsbxBN7SqAfNZnLN7fQxQqpATHrW7L6yvHaW9KjNofUHfxLn1Mn4HRGGLzyFjy6X",
  "key31": "4xz1Bre6VDvoLzLHfQ2MXn9PTLNMVgTw17kpZUF5PhjdvCS55r168nMrENXL79fDfXCUVesycqCaCmAiULLv7fq4",
  "key32": "5WzmicVPZ84hJtxAEeAu5nzL3rY3Hh3eSW2uToybsFVJBr9HkpEKNQTH3L6bUhnsiaptzh2RgNCaojYd56APYffy",
  "key33": "4mh6ExQAUW2EzACGCDhtyCLJAZPzUHe982Ey251gWio7Zb4aSW81fXP7ffaBeZdnSpo8TJadzPTxg3maRBrWWa6y",
  "key34": "4f5BGDustcqeETb9RRcDMYZtbqWbX5N2TJWtCG1wpUsK4xKhKtTTqAQBgo6bsKaPwCGNytpNpDEUnSeRoZ497cf4"
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
