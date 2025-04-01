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
    "2Su6rZYvY4QbeFnVQvC9TM85Z5syMeDLRV9wCqyPJy3dpn3oE5JmTNoYDphngbTUV8tq1qLBCuwPcM1g1GTazPgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pMb5psW6fqMZZj97zQxgLHR7EPe8cbg3UDHqkRUdYLcBYeiFn3r343aY3uuUYo3caAphTE5nNRJnbaU2YEpcfP2",
  "key1": "3mTQNomwbbUJYD4DRhrXpSBPTGxamcKjxnAqW7VNAV11gx1hkgZRQHEKDHeJC97vYT2hGrDtfMwQnyDrxSSugr22",
  "key2": "3PUdyWFwD8SvG6SGcaaxgpeurD7pSb3F9YoZdvvHLDSnTKqiZ65QEzAVSpgSJKr7BDuvuRhGKaYPEWNr4F7sbKT7",
  "key3": "23iK4QZH9bqwn4n5zGgzLPsR81HGCwTMvvqXV9fba3FF9rTW2iaY8NjfyJjfcZz6xe7qG6QdfuExe55o7vEy1ZhB",
  "key4": "5SKGv281AhzYv27CWVru2gYBoxHYTXZTo7e5QRHGiL9Ajg254Bf23xrVAispZK6izrYcFbdKe3TKpXNvSw4GKgYD",
  "key5": "3S8CinVHZ1anoUoLaLKrUoqdhAFgKkh5MLjHVte7UaFryjK1pLLpTKz9x587j4oPsfdTbAQ2gLBc9UeVseuESBJ",
  "key6": "1f3wg1ZQJUEMYrL4PbvWysiew4wASFVf1SGBkBcinqrvqsEbSNRad2seuU2iBRP3F4AosMcsqUzhiPhKm9PNpQ2",
  "key7": "45C6sTFv8CtSfykYtDuwuZxJyZL5rH2qbNqkqLGF3oYUt2UNonsF5dC2aJYSVKqksBsUdfJ3HAdheLw8kQb24YwH",
  "key8": "3Pwsa7Mn2ShgYojnFrjU9Xa2KYw558HUn6DbQcfKzxENi1pYRbVMgGoCDUHkrAJ5YHieWyratgsQVGxMPVLcbfx1",
  "key9": "2dGpXkDcoNdsJUZz2qG7RBVmhJzgTYZDWzneBzud4eDn4LWcFEtKYf4Fx7t1Zq7yNGamZGsuoeaL4Z6voxCFZReR",
  "key10": "2K6uRSgFNG83Hq7TcfrrbLqYLoeHsA9vLNL3Zpwqnhv6NMQhPFKVBrMENzK9hZnRdwXjP2DgcWYS2N6XLpa8mrVV",
  "key11": "3Zv5bAXWejdu8d33wmsdhxUUTsn3ymk6eDb1HRq7iGmcgn6SomsBEnTF8EbuLrJFQMGyDZmqCGVMkFZwFYo8ahUu",
  "key12": "4NiNdQjSt2ARGJzWmnKXWdbJyzeS1F1RDWgbnyMK9HbxuHQVjETuwVF8h3U6bvxYnDyrtTya7xUrLrhbEf7L23pk",
  "key13": "2xKUyFNfiikMocRgyBZESZQCGvLsKZ8DUsdSUwgrr4ZuaAXGxCesZkob8KTG89NGqkGpUFqur7LDzaD7zR6Eepcm",
  "key14": "2JD2DwsYnK6VsE8JDSec4rB7H4TaqmDM4ki86RjJ9VKipkJTSjzzTif43airLf35xHZoFerPnbV93gyU6rgrHGud",
  "key15": "5aL9XCA1BxtsALQQabtgqxRUrqan3i9DWEQmVUc9yoKskcnGabGzgySu2HJr1XKjEg6tYSaiUVndeR9NPHaeaDot",
  "key16": "43QjK55dHMm233XgtPoTizhmJ58wSKSr9Lw4S4qWqp9iZjiY2URfyRtHSwk4FJYMBDm6onn4x8ZHbnmZiHwvGLpG",
  "key17": "3ZGMh51XrMog2Mrx5NKvF7n9nZcB6r4ypuWYSot8gxeuF41ZnCCEbfx7CjkZSkGStq4uhhLYi5m9H4c21cFxWsW7",
  "key18": "3sKCQdPKTgtSHq3oBU9rzcj3mHYq8oiQ1ndhPxQMHPHQMBfAHP1QWdLUvaq2rRdaabrmtr339FVwJXDt1Tft1idG",
  "key19": "4thzHKKMScvKpjfbFNbCeUg32AVkTUy6m6PFigC7S842xE3f4hBPvQry9ndFbNsC8ztfTeQFhdyrcCBH2QhNL5G6",
  "key20": "3EqysBaVhz1dNGGQ3N1M1TuKQw1bZm3xr8Df1ujzaySD33xgf1oYAetx29HcmQuphyrhGWXpnJAhcRvchcP7vimE",
  "key21": "62yygq3Cuj1uRqjHP5Gri7F5jnP4BR7JyUcn6h8t51V46urfSqMoSBk4WpzyESnnU2paSXyYNpxtPsMiZhvMrxNX",
  "key22": "2wSi28wSuicqnV7c3EoyrDCS4S2NaU1dx9AkkPcJGrC7KCSAXqaXpjLChmnuVu3pL4MNAAu2M6zuAoPv2dRnpE72",
  "key23": "4X4Q1jBJJCNkxyMu1xEkicvTk7qtX7t1cG4QDsgJFNpBh79CzVSK68p1YmUjN2kfnSR3Gjp5yyoSf2HrsXcuB9R4",
  "key24": "3KrHshipXiLGyEdqL1GHm1UPb1q1ZyhvEq2TiDjgXdH2rrRGUvdChPchAh4yvPTk1LQCYvanXade4xKumuW28qZ2",
  "key25": "62w2DQSKU1C6wCrGK2dsFXsACbtNTLasAJbqKuB43GeTT1EveCPAYP2yVhYXSUXdG2WJ29oXztVqtZtU2gnUvmxf",
  "key26": "35nGjK2sPG1vpxBTdySsdNnd7NbriRPY7scNNJdsHtFuMo7voU2c2d3DNuTFrUXqXucyDjsBvEyU7iN2mBzr8sd8",
  "key27": "4XQ3YWVK4hh6kQWkfPwdkDqJCdAo6dz8iyfqkT54xf47heeqtNRP1ceeZwLktBLuQ5nDMSKEUkoYM8Aerw1E8TRy",
  "key28": "2NeaMZoNVbVWRhXzKyk147YNquEKZjoXEwhbrLhQo9P4dMF6h3bKRMDfUCVxXZN2fjKM7TbpZ5SGjNkRmkDvgp3D",
  "key29": "29S2JoKHyRVb7ddNXizLCM2ubMdZ1HiKNvfQzGjBWwKPePtQbvNneyPzNWFKcjbSEHgJ3cWuqv6Do37MyxFfoGzN",
  "key30": "2AU2PgJEfV5yEwkN5e7rcGb4bT4t3zBZFfPjGFVRfvF5CmoC3mGHa6LHEmH668TyUaerRjiX7xsMtyxtN2nghjBN",
  "key31": "4gc5tc6P9ZZKCDCQz52zz5qnQxpubmz2WzTCSEMV9erPgpmbnBbfwX8z9SzZKz839GK2kjJMtJ79FS3H5bp53EsZ",
  "key32": "4oPbGxNuVWkGmKDKymCY1NK9Jabu1qtnCSfTCRebp7ckfb8teR1qq1azUFxg8KVieTknrqXEPP817qkpk9hFynz6",
  "key33": "dRZc9Qf149pCbM8V1zkbk4aaF9KLSPCXJirhcJHvqi1s571P4kcpHdv7zcY97tnsrm8GLBj9pEQ9WuBbnfzos3E"
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
