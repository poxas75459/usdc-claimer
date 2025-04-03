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
    "4tNuQJLeXeuy8t7z1U6V3aiC7BX5RbrEWgTZRaJcSj9bYNxbmXVhFyjCxV6cUcBThJS9EC5Fs2sjqdmykqjALHyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nWcpaTNyq3Cv4TJko8R4tCer59EFyMwpABPXaWs4NVtWRaz6Dk3EbtP6tdeer3B5r3HcP79zHCfrXdgsA3VvUYQ",
  "key1": "2aNFB3Rs3KdAHVEZniPCdVPLj9ZqxxYUXHmGRCXpizdrTK9Yt4WNAJSwWpUEKTgnDjrKzMy8aiihVFSu2edGURwK",
  "key2": "3UhEkSr4vSJhJmf29h1SWf8AfPGPj7G1t2oViogoRjmkd8WdT5MTBsxaNzwKDTnjQkAJSndwBKB2hzSPnkBubDzS",
  "key3": "5dQuFaqkLaMBXSi5kEFj7xmUyRjuHuKwswqncbCWDqwa5T1Vc9quNyrqsuY6TSZPjwPv5VL6TNQr1aSFrBNNT2yJ",
  "key4": "2skCiG8EneeYbb2bDAKayV7FzEFXowZEt5e4rkWMDhjLL9PduRPmUwaVMzPLnVJDEUJteREW48LW7rgtzvJnqEKJ",
  "key5": "JJEKBJaMu4nMdWvQ6FjH6vXjWXsz86YRV2FqbyRMsGRwEo8Xc7fxbAQE3wgzTYbRnrRHAaEnNbsdyum8pXs3WoD",
  "key6": "4zBPkTbC2FPrDAQxpPX2yThWtk5s4DVvuG497skZ3kx391eeK2tu9xfpsTE9tjdyAt4hhYFcQFhrMCF3XrcPdNir",
  "key7": "H6bGQgL3UNJD8XR4V4Jcw6EDSLFaAyv5jyBfExu5b2KAQYZewsCWNWBuC8GJtWtPPmtUGwcraEVvxQZr4aFSXnm",
  "key8": "42TW7gnVgqW4sd5t5ZX1evnNpFywTWsoAdxuaHFVLgCU43JuzoCTEAmcNUJVVnEeoLA9mGnrjeFiy2z9kLbotr6r",
  "key9": "5HsaKCT3wp2Zx9KaJsya8a8HocdgP6RZtbCmsYh9gZgqpbSYD1bnXpedAX3Xi1zxCtZvEQowAGoLXChxcDoaHbUU",
  "key10": "317TvSSCQqD1ChxM2Y18dpF3Jg2PbAL2ojbLm3inZ5fnt4S6y3R3JHKy4DtZrmUVR2DDX6CNZwX5cW5aTUiY4ZsT",
  "key11": "7d2Usg7Sv9FcWPWRHfC8gdnaaAtnXU7focaHivKF561bZHdZpCVzSyQgKPU8SAySPpEX4kjyfnEpFTKceh7D9xp",
  "key12": "2Fn5hZwgWcDpcbVD6mUJFYyLN2QDf3zmiir8iKg53ULtYnLGi6gUdcDKb76wF6fGZUCkxN5aqb29n4NMBSvbA7R1",
  "key13": "4btHWDn9XitAjTQWRcECTeZSVNiLYgqTR3Gz6k8SrDDyC4WA2T3rpEgWVfeRyDyeKM4ihVgBLigZnLzWpAGHFqcy",
  "key14": "2p5WNeefoDUQUk8aUTmcmj5rAEjVB8ZFUvFFyPn7yjV8Q8gwhch71suxozN53iXM3afV5cG7BXxxMjjVoKmVpWkK",
  "key15": "knSJSFm2YYMNmmpGe7H6zRJFBfaSkrijtnmWYesuBSsN8DpjSXLbGUxKAww5KYN3chTZFMT7EzBVzi1iUJ9EAAs",
  "key16": "29gsagU264VQxNhJXhELhhcAsEYWcBhZi9WmkDgrTN7zLJdBQGbB2a25eb525E6HFh6yjbsH56pj4wxwMj9J8PyT",
  "key17": "5hhPhuxSWiBG1YggUxoraYkVQ5acwAucUPgWnAeZuS23w2hqEkEJV2aKSKq2r6sBxnsdHRpq3EdhrVp7EuBjJaam",
  "key18": "2xbPY8NzSBUdMYTEouRHDSjmAqebpufM1NXUEtrQLwGHGLf4jG2ektrXji2U5NxheVnV4EsEwnVAJ6EwhxPs72jg",
  "key19": "3yQWei81V3mcyAmmctGG3YiYwHpXyGHmVUVSUM533AyCohqv1cixR69kZX6cVM6A6HUWq9gXdgdTT3b54vHUZoKE",
  "key20": "3ZUgLUBicgLksPXfLSZ1EdaGrADfgoNXyMX3gDiEtAKkvXcHzH1gRq2X3ZySr5bMsKm9XC8qTJLJ8bWS9EkmBGsY",
  "key21": "2tmF9ysJvXNJZDiC5998dcTvNMycy9B7PZiSoxpy3iPD4w5ZHm4KxaCGDLu294ejKAsnyzaXRVcEF6zGbjBBR8c1",
  "key22": "YQQ2JM4zxrkzfe9oZrULDiDTMc8GuqL66JqQrxF7kGQUq15vA74pQrbASJdoQjSq6LuPw5ZFYViagZvzrAtJX14",
  "key23": "5gF1pPMnkrNxungEVyjwzp7pG4FbinDsBNzRn4MSWjqSxHdvD3PfYqRhhfi76k7NvwxFxfybXGmZNC7rQHhzK4cy",
  "key24": "3cY4TRjfGCMQJVwFibT7itmAYjTGtfMZsgkA4kvg4oHuyNUJLsVDCESQpjdiGooDe563hYzyM61Bd9kguMm7Q2uy",
  "key25": "PnnkTMN8123X3b5GLwGKmez8MazAX7L7iBiiTymAoMoCfw5gD7p62JMzwKm5u783mHf4u4oQu9rg6ZH9Pa5MfSd",
  "key26": "2JAfQJ1PfbbFM8NELFYF7ugwk88FtsgscN8oaGnaFg3YH8gut31cBgoEfDiKV4So3CSfJ2gnEVh521dzajrMcCAn",
  "key27": "3ZcnbWmyJtTsvSYCErjoAdBbVGh5zVLJ7sLTida6LH69oahVjb71HfpZZ3F96a8GDqrpGqpG9gTHDBFPbLSL64fA",
  "key28": "2NdGh5hNa11WhqMZiwezqq7tDJru3HnrhUJUFHdX7WicJu4a5nxmXEWqMu1byJGK4fJ3C6xZavS73FGNGptnFhAi",
  "key29": "43ULjR832jJWBwYfuxHtgaRfXXmdnoN1qjH7wvpgt9MKVFUi2AvC9J8BfGBxwfdifX4FWLBD8bjUCVBHeRa2D2ni",
  "key30": "3BZEtnZqgbnZ3AQzncXcKsjTcB5qcHYGpfZpQzNgKStFxAMVZaJbFm9tK8KrzGY9pzvwvGU7KXKPJeTzJtaiY4F3",
  "key31": "4ZAp1QP36dabEpwd4KpVD4pa1T9ozDXMCu7Q16zbqPbA8KS37vx1azB6ojLw2s1fEKv5BPpzMrbG9xtJ6xioQpvG",
  "key32": "3YCcMrzeG41XedyqKReshRFWVWEfb6WsG3FMSqqUA1LvJPh4cG4iRGH8PeSEk1ZWgueUSzq3dUJtuNavYj82Musr",
  "key33": "aJ25nEBXtD7w51ZKUyzqkkzs7CuHJzPMGCfNuXuiTWzRBwT2okNbR2v3aHEEeuWaY9nYFjtF2mJ1o3bZ4VvVTmc",
  "key34": "YpX5M2MruDgTavLS8nXwmDGWvA6AMgSdf3PSFd1brjKzg6cfghwXyKinDfKBY9YKRPVAY8a7hXo1NmBig2nQ9Ru"
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
