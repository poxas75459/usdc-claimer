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
    "4AyUxpwRHGCqhznet9CnJfDMEaQ3B2Z7v8q8mcwViXHKZi6QcstDE4BYxn9wQbayFmci5fSTmzMHoexnXpa4eBA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N2mLN7V6pVVwxckcyDXTJCi6uNyxRXxfbbmoumXzasfFfa99buTDfNKD1TPQq5kmgazLBxjPa3GxFs42FB9Nz9t",
  "key1": "46hAb7KdP2Piia8VwxGyPxiPdfdJQj9rYkLsygfwvUkLBsk2gg836qntvjq4Y5s1MucNPqKJNEDVeHvY9DWYPybD",
  "key2": "2SV3porCY7GUjTPRtiUC98ZqfNxhwW1ja9XoszQ5c2EMnQ44fNzrK7yFvdNWAMDspepBQJfV95wd88PubW9AHcLF",
  "key3": "3X8VZcVUwfxGmxdmVpbXjeNsQ6W7ENBoU3fD5g6xJPstkew1FcZknCU1FyWqGKEG7JsweTsTkemNzFZxpFJn8XLU",
  "key4": "2uVZHGhy2DRw5cPjDuc5PWQxXe1qp6RWtg59D1NbaJFtTFXGChnUnHKvg2C46wLSrP3L4cGfVTV1APJ476pnQhN7",
  "key5": "LVPwJyAA3KHKTsNhV1jUc8z1pJpNSbaVk1zr8vA3acKDcQSaMUa9yevwUbeewfdKuhowerYSZkcAfLubCuWZqRJ",
  "key6": "3hen1YJEao6AiKFQEqVuhHJ25KnNWzYgJBTqcFnvEi3NYPZzdzYtHaX4ejg9gMwbcNpcdEK9vT4aFMvdNu2wAHYg",
  "key7": "5eU5uPJEg9pcvq83GDvgfcWsUrNDX8yRZQJBg1j5Ts8mprRogFzFfQK57CuQjxxoWsBRmCfGttA9X8Bh7T7AtJJC",
  "key8": "3QwYfJ3RjrTnCtyM8Dx5ALLZ3xDLzLtQsDhs8nNJ43iNYoPrzaHmcFzSzNhGXnGeat54r3ME22EpVA4ESaGzKtf",
  "key9": "2K3pr2JPN8S3QrSaKXquEC5xm73KoD4rA3u74tQp7CWXQKX1EiuD81ncqJWiBrctP2GUzi9FKkv5yWKbYh4WvGs4",
  "key10": "2HW2U1Lj6YProHSj7nupVXoaov1JaS2oo9np2dLQpbbAsyFHGWKXvuwB5Jfpa3Q3MfPaf9DDLSMAyAK5W5tQnsxu",
  "key11": "1226Jtn2EaKMZXUUxW6HSETtSrzRNno2JxPxCYF2zwnJgjeNktjusLL8KfKrshMQZgGTxVoruN48Dp9LqRyeNEgF",
  "key12": "bhmzo5y2GhG22WPpuuMhY1uwu12HCUboQ6YJHVXQAHbnStT7MF2MG8Xk3oHugt12fRKtAVc4aykC8nmZ3bbuQSi",
  "key13": "45Yx24MCjoYMZUSaLiGXvrYBEmyiUBSu6U8ZSpSQdga7RAaNEkeaE42xv31vM4uRX8JUeLHPhnTzjcNHagqS9iXw",
  "key14": "2Xw7i6h6SmMZuRAwmYv9ArbMEvd6y8e8kUA9b6xke5jZKPS64SJsdqPwp31VdWgqskfRP7Jm2cf9sgdh3L3P7D4W",
  "key15": "5C3wSHPmXVmfzU2j7FG24yFbMNLZYonkaEuxBTbqLxmWTT4K5sTBH6QWAiHSC8ar6QQsZ72A6DjiwaXu39WTscee",
  "key16": "47a7a7FJua5CJY3VuVwMsH32niSUJQr4m5DZjJGAMzFAQzzyWPnZ6wNU94fwTdTNUj18gs3wXpyZYjm8hVxRWcML",
  "key17": "2NqpJkpAuUfjwCsWH5P2ks42rcArt87SjDMm2VG3AeSKtaGqJz6FE6wgb544aW8YcPx93pvyua6xz5Z8D23CYYHq",
  "key18": "XWNgkBUkPDsCR2gr67xWbUpudtmV4A2KuRYcBhDVjyuom6WVugRsVTY2auzD12N26Xjc2Vvg7nn399ao1mY1EtP",
  "key19": "431YM5cHFzG2mL8PX4ZevwCu4TJXuUjYzoxXPzPgmrPwNExhrrprKSbSsSbsmxSbZLUqLSdFwjKz61NFGVn3TVbU",
  "key20": "4HPE5Sc1KLndNkBxzbJhdXtiJsbc9amzE5h6tz6znp4JPFbS1xG4WLATLKRDQZnTr7HmZAXwwHFLqQeDNFoHqrjQ",
  "key21": "5BSVM4fhmbEvkaCkiZ1dv5mNETEY2hRQNTjVehafr7eaPEhiVCBk1mqcvw2txorcWyEn7LTyDAFAjLioTJ9hNFK2",
  "key22": "5K6iX6HGNws7CKMGA5eofM2EjTvdh2Ru1h5ZQWByX8yJBtUz9UAGh8qGynuxYnRm9KSeuNwt9hpJxJjcy2GPR18k",
  "key23": "jCsKeoWW5KzRzrSUKVWh6dmpt1fjMd1RT3JqzRgZtDrLfUYhxU2icDWX6eWEjc711Uqxt94fES6B3rwUVoQAgWp",
  "key24": "22yRgo9AA3uGRB1vUoX9nWByJgVRhxytyqfdCWkjzFtH2TAvfbUeLpnjBAQj2xcroF14kkgHvgvzTBtnhA72v58C",
  "key25": "2t8nYiNqzHdqMWqRkMGu7soFSEPyjBNRuMGPrTYQgy35JmA9P1Ut4YvnqvxaSN3bRyZ451WhDd1usAhPXJyJeqmf",
  "key26": "4uff7HxTaYSj63gLa4o8LiTBWkyhvYvNEutDpxr8FMMDzLw2sFhfoxzzKny5tHq2APyv13ZUKTYEv88DoiaGjHbN",
  "key27": "2jWMmj8HxAPjFAsgNjrQA6VYMfjM7sYG7gTQMTFeUE3voXu1qauQh6BTGq273iXeR1fcYRkpgM6b35JCGaJMjKjy",
  "key28": "3krV95dyVCDSGtsyT9rSDTn6tfW9iqDRYD4W5SAyjYuktKsG2LXNfNvvnaLTwVAkvdR2wU1Kpnw2apBETwQEEadW",
  "key29": "2QzKMm8xcs4hxfKpqDnCYXdjXmsnAmLJebvMfdi431MWnpX1PuprST9sZfNbaPv9nUUQ28NBhwR4rwNnCb14aqz3"
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
