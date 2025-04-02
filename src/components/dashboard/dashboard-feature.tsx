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
    "hRXtMr2qxLrmvY8wMBQsKkCbhmScTRWZcACZLG5foYkLSSSvaywMv1Q7BKjykgFuhY7rk3kjJQgDy9bREGMfT6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2STDwVERQhasJTc9HKXLX9Z9pdeSASV7Ekmd6zuDGZJ3H5smMLKQTyhpQtgc7eHnDVqFj9vpNaZKhnhqkV5QTrt2",
  "key1": "4fM9SBU8VztXyoTirWoBfGzVzQ7XgLE5KzQEMPoiBFdw4hAbJ3vLzbncFWf4uNtxCwER7njjPubtpkGZFPucxGf8",
  "key2": "ztn4Y8ixvFvBJvwR9mDfEF58BnuUHmPE27HeG9rmfJpigWrZo7Fp8tSYpWVRzCQQKtfJZ9V6eCkKZ77pP3fkUqP",
  "key3": "4H1GTywGHhbe8zASexEzpmN8uNCty9cSa7Y1jDNayanREf3T4N3GxcNaUGzYTsF7gLfKap9zeKy2Mjz6wXT9Mjag",
  "key4": "4doDV61RwE5paQsjzUfG8MQxN5ViZbpKdKEFZufnRMqN5gj9sjupMPqQqdM1xFKKc8QyCU7Yu8Ckhv4Hcyd6QmVe",
  "key5": "4EmYpU3s7BwLQycAAYpq6opjV2XLRVk6t9ajBMmJW9Vy11L5YqaYWMSpwFnmrCvWHuDFYxFYDM7jiWgAyvwwJQox",
  "key6": "62NGNggz6Q4EA4mKUwnc3R21kLL1GdXY1Y13S67mp7GLaJGC2QBY3bUtZrNd8F8pdrQNpu2YPmXVjd7bz9NwoRPx",
  "key7": "2KKmSrW9AXKwNHZocnJ1WBmVAPJWJKpYS2H9vtCXij6sr5SCmi6mp3Cdcf6JcsHnfdG8xqATRxc6YVaCQ68FBPDR",
  "key8": "3KGeMLVY8HByBdLvw3Mf4JXMF2CowaVJz3QXfHjkDtjwMn7s6WBBUMgEpcLXMVbRoBjgrzMWnkZzVqDSjsNu3QU2",
  "key9": "4g7xHqghK7SceaY9rtbUgEp1p4c6CbTNPM8Q78ZS1y4Ktdc6Fy2x7qFG2DXUtt8kDwaABDgzseLtFb2gqypyLVL3",
  "key10": "53MYYaqafkKFv6hpVwzumkEJ3Hycouy12WRmQnXRv89J1k5d9gjatUFaEqASpEpyqFPVk8RRvaQRh1z9nW9VUf5U",
  "key11": "nTHpD7B1ct2Px5mBNoDCTAPhoAF6a9ZzXRyXYzwd1jALBZLEqkW2KikCwKZSGMTrNJ8x4Ma7zax5fKLJKDDCPfx",
  "key12": "4DrRraomCjziRe63CEsrD3f2ZbyhMpzAhHAnwvhvrLekWyZ72BPaaHCV1GaWn96UUntqEWrxbYKMQZBmnJc39ti6",
  "key13": "4rZCZKLGriMUouLMfaNAgBspSZZDMzx1m3oUGbf3k1YahYFDs5eJhqUeHE2ry1j69SRwtG5cBFuMc5VqQLbZ6Wk1",
  "key14": "4obZgThFNEH1X9tQUVsyXoYErnBD7VEV4qws25KQFHr4jbMJFPoKjS119wRss1oNt7kb69yL37XyTtgRFzphePFa",
  "key15": "uLHDKPK8aeWGxcaw8B1CC1ceNPnHRJjYANykqn3Bxq3jGWJXikHx9gPwFYxmE57Wcvvr1iQ1eZd5XY1JqXyo665",
  "key16": "5jXVjQ15qW5JGdNn4ETpaqep94pH2FKRDR6cpjjwiLEbmdrpEUn6o9icTbzVNoTaQ99Tbkqw2Gpj3MW5kLFB4NoK",
  "key17": "5PAh7mgywkbAEFMjS7jWGUcLz3LNB2MrZ2Xqdrj8UMVvqdvnuYEh4EUvXghR67gZB1QucMNDgspbHDVEbu7Prp1y",
  "key18": "5tJzpWZ1aV3zXrB6q6mQCHxKGFKtxYduTEhFnMdAUcF9vWxAqwW6xt5Bp93hJVQuvtJxnfEVVQu8Thgq8XtwP7dv",
  "key19": "3P7RrNVpgKXcZwDqrA3sZw8wNfadogDa8PgH9sxUeQKYP7TYcXpdC59SEi7FM3mfJUXGwhQeDuaB2TXcutoehknG",
  "key20": "4V2x3UXi3W7FY7fCEPpoRAYTZnSK3Ui9pTx8Su2yHoLLWb5aJdLgeT2tgzRuuV7aUhhRFRi3MsasFZo1kuFjchjx",
  "key21": "45E5W8QQSgxpkAjgpSQRxuEog3sMvuCZmCFPje1VDhfLFVR68dyGHhGUrxXDXzEai62fFsqbCtbBAWdaBdf46XGV",
  "key22": "1dPSPxm8SVb8eMsGtAmF24MaGgBb97wr1McHp9fLURpaRyTw1zjx7K4hgCWQvnJzsfVRnHcB8Znq3SjUZtCN7s6",
  "key23": "rR6SxME29MUssnPdKH8hQXu39L8ddun8umZgqd6maDQ5skrcjZ1ThoFBr5LYQhNGvnbUCksAZHq5dexg9AkZja5",
  "key24": "25dDarQnjc66gUMyhjBPHpGtQVB2h5US11GPh6hbfmJ7FzsTVGMB81tDy9uNzTbeHMgzS4UpMePuFfFB8ZDMafWJ",
  "key25": "5ptRD1UDSYMqSJpsT8a7F468Rw7PMbsos1Aut51tfQtpo7prbER3iHrEyjHrCVpQEhBhFdV5iP4pA9tMma8gxVSt",
  "key26": "5cWhow6a155r9XaPAqjAN4roTmBrw2DuJq1NuwQt89gnNpimRuJsqhou6uP7hJNLbXnMVNRH1yBokf7VMZJmwtvd",
  "key27": "5nknx8sBqbCTFqHPWHb1cVVuDy7thfyuuF5tiJ9XrvwFHSP1hwDS58HPTLCwz3wWXS36jpAV44fLRnvL3Gh2YFet",
  "key28": "5NKH53UcMFGTMHyLW1xbNi9nBeVq5xRFrTcHRF7tg2N6bTuWB3oFj9KhbgU77QSN5YckLHtRovpp4Drnmoaiyobh",
  "key29": "5fkSdktWrLm6zWxb2ndo9xQfzKpjJb9A6zTxT6koztkURNJwRs33ALhxhMkYZbtH58Z6JJjHLmv4FBNiwZ3tkgq2",
  "key30": "4RzqQH5Gb8wqWeUA99mw1d9teM9MwdxUqN21yye7Fg8QKEqcuEuuZMQzVBvzdHdCxWED2q5BaU5NwZJRN3tHrtxB",
  "key31": "3AzL5G1j48dGQ3nwPbNu3eu8qmjDxmgdgHdMvExhXu5AFpAqFYhJ637hr7JwxegxLmefZoVsqCMADrDDswrX3wkY",
  "key32": "5Wu75sMNyGvxqqJK92NbZJ1LoWDFEywQcqihEFE7t2gB3E2PrqnPK3aAkCQ5tQrTGC9SPi9o1A9zrr6ocszV6CJi",
  "key33": "5x8JowLzHeCFz7HYuRgrEE4NnyoUFaGmkp6jdPjaGesZUxk6p6ETegSwZZdUhRywhqzSnV2q3NTBzPBHstsSzCmy"
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
