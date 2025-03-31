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
    "3tSmthRj2vdzQXQ9syEu9gkxQY72gqpUA4VHw1tW5qtJBT9djtPivkekgD5Bs2TK2Hrr2ByQynfTLGQ9DMUYJiRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zCe8cQ9aDV8iV9qhmazYXjQb1jun2DvMR6VP1ciihuf8WkjFkeNNudY5dcWUC3LSohoJBoRoJgkPgvg8HaCJwdq",
  "key1": "3CuKvjbFa88CDGxmpNHTacprnSSJMLUM3rRnk7JNTQ8FRJ2PsV5h76ekAz5F4Zy3ZcUCaCXpKaJEGha13eJsmK2o",
  "key2": "61SwC15UDPWkhws3T4AuLyVVnDzvbcBFcHDhBh2ScK1SYPAwC4n8roUnSwFeUDeamSTQMJQYCcErB98Jm399zcuE",
  "key3": "5FQx8TShQtNQVWd9bHrCa4TFm5LDXPMsboG17F7dLYLCNxyfT7RUqXLeJ2fLQB1dgRxU8UFXdizchUTw7youQGwF",
  "key4": "29Z9zbtqJjZKitrminsyVQZFZcdp3qtW2JEYU1CebxJsp56YmnYfpnGGyiQjeHYeGjw7iB4Zuq2GHvwt1nbpaKfP",
  "key5": "65gwm4eJ56bapgo7hrixvhZWbqmrpGLZJ4VNcWa6FymavXhLGBefBGBy7VQ3f72FG61UFrmD8kmghpqv5A2spoo4",
  "key6": "snUagFo6mgNV8sMqKpSo5nf8yYLAzbUgRK8UQKJMs8AKbqsJ6jFR6eXKjJ8BxRyanMG4ymfQzqKy4QxD5MWgJyb",
  "key7": "3bYxuNwbymnmcrdWycjYRzHChMifLeXvMD4oNBVjwn2QqM9X6zMCP9tNBnUppJs7xkXg6mgTR38kCnwzZDFn6Xw2",
  "key8": "5BSeDgkyP7T7EhXgihRdVfKz6kgABZWyH39NdJXuyEuqHeD9FSXd7c3pNSR77Gxv5oXT45HQgMRvi2rAQz7EpHXq",
  "key9": "RHNdi23BTHeas3GTgMkvW9nnWPnMgbGsX5WBUAvyToLUgYMp6UGxqdChzZMtzEXPJhYcMKQ3ZyQjFrbtdjFkwup",
  "key10": "mWNHqNSufDY2oQ3kwYsCJVdYXExL73RudDUmhh4dt5zpGNHnty5Jrt6zaHZ7ZLhYTk7Aqq6CmSDkMH2rZzFj5Je",
  "key11": "5edVwb1XzNoERJ212vmqcoXAvFF6UUvtFrcxcdy6gcrHgr3UoRuNtedUsRgfLA2iVVNvDLYbL2VKZLPTyTqB1tos",
  "key12": "58n6oo6rMqM5ykdLnSvzUXBSw1nuYRxdBHj9AeHhavVHCa412rQAP84qVAoPJ5AGuUCencL1cpN6JSpcm2PJRz1r",
  "key13": "47UAbQmCHSL6YfPJkXn2pzKK1bCJbEdGSS54sbizxzZZGTBWeuAcSfWgaWA3wf5DEvZHkrnWKNTq2TqK2cvnxiLb",
  "key14": "2zWmz9NVnzJfuHmHUbqrWnkFvMzWuWHBWQzqaGyfFX9HonRFh37UPefi7ToWerc1AoJnpoLaBZ7Fj3FHRo7oRY1w",
  "key15": "3xuQ6PbKFSBCent5LxJNrR5RauGJTsKz2cibjSh9hXxP1zuyLVo3NqyJeTNpzNoPyYwcFRPNKjNnKVajAbE4hSEq",
  "key16": "2xphbxKmWL6HioCaya8uP3ymb6p55cUW6RZZ2n5LQnkv2UQySz7C5Pbir12PVt3k9CBiP9WNyqLoxmbT4FSEEAeA",
  "key17": "3asHKTTAbySBWdfxbS9Rh8ejSyL8UGibNrbGsPWCGLVaRYQE82wJ6S48KYfYcdBja3MYqKwQ76QK5F1159Puwccp",
  "key18": "xPEkfZGTavkUCPBEnjZWL2pb3EpQq9MKAujvCPc1E9z9dTsKMPRX6te1zqtWXY9U3DfobTWoGxVB4xeW61komvs",
  "key19": "3Adr34m6ixDFuNLbRFBbJB6WpQX5j1pEBXVc72Mo4iPDh7r3qKkwKXrLygxcpofeE7QMyAocgjd9q1bWbZmxVSpk",
  "key20": "35VbJNnvFFXiaGoqiy7errShjGNRqaA7yDgMG8X5NL3Rvg2AQE7XUcHx7H49bNgoGZgbUh67o1bMRVCNZZSu1fjd",
  "key21": "5tqUassqyGcjDpTJPrkGAYtRHeLENjT7LmpnzJQ9uzM6zcuf8XSVfvJkCfNPePua8TsUVRGzm1Dj77qoD4iNxnvd",
  "key22": "24cKpfYg6kiaZFiiBiZuEfoc1xLs4W3kcge2FYTBxPWnJP76K8DoZ5sGixnfVNF9VLwfvzJpCVcaadjmHKtfdhLv",
  "key23": "zEQ4tDAUdFN5L6Wy1JuUCA2EFQvd36kq1bxZVobrm4KZ5ZHDa5Hct6MTxrYqo3vqQdDESEpVGx64zGH4n1edQ35",
  "key24": "4e8hVkGdGSMfXv7zWTczy86Fc8FdaTUgrCZ5oAdAmmyiT2JzVSznMUZeAh7wrDTnwQeEzfhqjiiT9x5gqQKBSfLn",
  "key25": "3pnStTqo7McTaYMgR3HhLwe1ehRPt4D2aYsRJCLVy5JNX7kMxTJCg8dHPvXkvq2tbsoGKehrELcPWd7iEeHwUvcx",
  "key26": "3MB7bsqcUFvgmiZMRYNLtixXs5yrxARVm3NQEeAxCDZs4Sc61fnYVNaaQ4WiUH6wgYU43VspUDXQUyGybkLhWJCR",
  "key27": "5PHLsSceEakXMuERjUAs7a8Vp57wM6jdUDYAEafN9nCsiKFo6CKqRAFX6XY7eL7VVTNp46Up72owbJJ2WQEdYJRj",
  "key28": "5bJA1qNMfcbYzVwmXA3j1h3waKRqffHjdhMNnzyvYLaxkm1uuTMt9nCUMMeYJ1Q5hHHGqfDXJswNzcaNzpbeJeeC",
  "key29": "R4PRfSHveG1669PCLdHmkamTMZeH9drFL6fmUDgGuXCJvMdno39ypmFbKfnhyTstfzLB5gbRbc2ymvcK9A9zsQk",
  "key30": "414D9bEpxdZk26utg5bhLHm8RsiZY6gjPj95ZPiZb8f2u5oGYDfC63rxwxxVJvqNfEipepesMrkUdVVaUKTRsiDN",
  "key31": "2FYUh9M27mkBGXuqcK52Z7RQXmNgK4NsU4Ty7RkxF2v73fUhAxvehtR7eLi4ac1gNd8BNfKarjhfkWaLUi2Fnvfk",
  "key32": "3o7mv5cVavNq2LtDzcJjRM32fzuDE3LUVE1Xb7DPyuDfiwGhiUCWtRvjV6PMUVVpqPrZ5zzKoYxZcbwyKVz2g2Tv",
  "key33": "5ufUtQZtTxhjJ4h381b9VGpbkKa2BmmsFpLx5Re4zkjvsvUaWnuz5XrBRTfdrEd7aJzAEVeHuAnpfu52kAnRANhc"
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
