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
    "5Zu52DfiNPhfNDWcFm6PfnnD3X2ykpFuuEqXmbpjTwC6ozCAwV7dYzqmBFDN3EzBpRkwrgN94oaGzXjpWNHvYbNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c4t5AoeegAtCFWmdeaQVujCjbDYuTsuCTW56GAGPy21uyEkjethq5MCwvTv3UqJWMyX8hTHUP9W6gZhAH4gVxd4",
  "key1": "5wcvKe75VNMigWrUvhqUToFR9KHjvhhWb1mLABuEM5oNQ7hKbJFC6rNr4xKQn5n7RTu1p5ZvhLPSyU4Gc7XrX1Xh",
  "key2": "3N4PYWrqULEmREvBQLwawwKJhzAYafG2kNfUqCCo8FLVeDQDfgAzqtSkREQzadXnksbSVBG2Rr3DpbJ39aGuTvuW",
  "key3": "66YMnQsrYEmQbXgdo8b1BQVL3SrgCuRmVuxBeokWkXJHqP7K5VAUTxYuJDqLvwWqGAzcgbtZ2wNR4ai9uAuAGTf4",
  "key4": "36fiyA8Xuw9sEfDZW4AejNVCQmzxjvHVefWqmf6pd9YczqEBoGMjzS783FwvVwkK7ANCoBzgrsaEy6p1FyBkZxoN",
  "key5": "4nY4bc8hAKB9CAi2dRNeYeVVAH68hVExRhdaFwBUECksj8cSaSZ9SiADrGqLMTwacposAj49T4HgmoztemghU2dS",
  "key6": "4LKdr2AUXEc1bVTzjk1bna4ir2cJX7YiTqwL6X2MNK6a79tfAaqN1Jcb2MLBtWHJd2odVZ5j2mHNgYBzNSNvEVWy",
  "key7": "3We5655CxoUmZMTCoMKFYsKhPfe3RK9dCrSq5Cw9rxTTNpd9hFFvJXLCrtpB1bGqh6ra5EdxZPseAGqvhEZney4x",
  "key8": "3hfNULDR88SWz9gDr2Rm52SUe811riSmKBrXjzwBwNZkUjEykJ2bvw4aTywvUATpaa8vfev95YkMsVPpeGnAtBfz",
  "key9": "5UHEWLU5ygnrKagb1WKfXDHjy6jg2EtidGnNLRfcwbZTjw1jw255h84VM5ZMguagZJ2UnDGNzm4CzXRXWVtRc4Vx",
  "key10": "iBZEXydVen8kUHa1kebiJagcssraGgq5T8ZjjN1KwXKgKFCLz8eeojrFDR8sguier3Ey9H7aqtGUqJy7Q7vV7cp",
  "key11": "5QT37BqEf5TvDesn6f4ySQwCXE5uWASFMkTEsBJuKw3n3cGqMb9VEGsma33gx3AHJm2AQsyf9153mczUgwZLXLUQ",
  "key12": "3uqPQhPdD3obTyXt2oQNdQsYvFdfG3uYzTgJtnhjgDxLxZuqEXn93XHfe8e1TenCMh2Df17CKn5LZkeBeH9H25yr",
  "key13": "3TkVTnM2xuzVaGTgi7EwY2dBb4MfVuEtF5zg41TKwN7EwewjgCwaRTXVTLyqJYkPFcT46i7i57LREja6k2KGpSFz",
  "key14": "4CVemiXoGFDD15GCbrio6dyRLeYwiCrMzVAV4HdJf32D3x988GcdNo6t38ekEfrqHX8M1gNV3e6aEpfo7d3mDBj4",
  "key15": "5mVHqeg8c5Kk1824AzNhc4BNTVZP31ALcYxmmDv2zAxogv41ZYDd27Zvw7fz1r4prd7dFkwzKaAj4eG9qphPMp1F",
  "key16": "3ouGs9Rgfr7pLFs2vWdZe3BZ7BdMtFaVEV44b33gkwGo6xAEWmLNQXWaXsEtC7a3wAsRS2GMLxJKZ66tEM8mw211",
  "key17": "XTTo8Yp1eAPcdYfPzWwYdziH7WRXSNUpaD6L2JhR2SRLzy8q9xRsikqK8jfbUD8ALevZaC3hVach949C1B137Z2",
  "key18": "2nfuBfmVb2CqHRhMC1wBxrRdNzGAxjaWn5KCXKqmBMXcyYoKALzBt9HgmMvqgqT3jrHJ35Wp7Fg4puPZdNCWueya",
  "key19": "2wew5jxvsLXsP2m9VBr6GWvVPhAKeWCxTcqxTv4zkLbJ4hy9DzB3aqHLy7G1TyodaiLcvpmCg7T5dk38waTxEv3q",
  "key20": "gkpnPck9rV7ZgMGEq5Bj9ZArFdPiMX9pTgbhCvqQPr2jJWaKBpHpzvXYdgz9i7AJUfcFCjitjSJfMu3FTuc6d7v",
  "key21": "647Cxyi3aYZQRhRMbGLSproTbQNLnCnK9FbhGZgYJtVCWezs5uekMDmUyJFxfGmFMyPmhDd3den2j9ZALqHMYsHs",
  "key22": "cFs7tnbU5hTiPSVM9tWaPptpUD9rwaNhPgJDUgVdScjYYWdawzwd1z34g6zVjFiBu6zy4eKgUgKxmbjLgTNaJCT",
  "key23": "jwXcKY8VAM3jGmLcWKuWdub8CpNDdwAK6DE5q7PBzTcP2uALW6XmuNNxw28xMyUB4G8KqSZhgGyXnY3cYVTWGgy",
  "key24": "4aaZqauCVgE8bNLS7Q5Hdus6iqeFbawjVM6heMCcPhDWguS2SGjkhg2bgVM8fexFFdhvfcMUJ6q9byCuneawVoag",
  "key25": "5g74CFdPZQYiuRTMV6GHBFSUavC2czoZWzkeiEYzuy6nzDGGQrJnYcJtak1N7bpYUMWPHDZTaJdT8TYd9Qr3rS1",
  "key26": "hnHeNv1tNFG8Eg9u5RsUwwss5JnJKtoMe8ZxyaNsdNYWVq3XKWHHDNT9Q4ZHaWrTpw68ejeo81vEdbP14aEJ5FK",
  "key27": "jSNMy3DxHzg1En1poPgoSqJ4bJXE7Y7ias6Az245sh4Noz4vrgKpReZGd75CuSg7fkGdNy28HmnqhVd2GLL5YtG",
  "key28": "2cMHrdZeFSf4Z7Vp4ABKAwBSpJJHCeYXFphawdaCjEgvoQ8dkKwvJzMrnnqeaXZoBHQGhEvc61D4vW1PUsbc9n4o",
  "key29": "3ueF5XFG12uiZ1MX8z3CrZRqbQwGmWyncdJfDNQsJhmfPLWUY5zCPL6jUn92qUd92mLNcNyMPGwcdy1uoVmiG5zJ",
  "key30": "2bZ296cHsPLnMD4sFvU81sRZ9ngKAZjpJiBiZB8gQ8TiSDxGoSG7hH93eSmvbxppCxXzZG6roY3UwweYexgW8rag"
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
