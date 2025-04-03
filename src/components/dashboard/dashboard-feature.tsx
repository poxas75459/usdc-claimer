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
    "3BrwhrJv7GHuY1rKfWtaFxBmVcuDKqqUTxUJtLSX2yz3wG5Y7LWAaRegzh3YQx5Yp5SxznYqqwydZbuCq1Mh9JvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dAS3ZmjbhhowXBD3GJvJnDqDA7b8xgvMWXg7FKxcRRxbjEV59rXtsN12bcG5y2uCexuU8dVwMuUABjtLpZfpJuY",
  "key1": "43neovkH3Pf5jQ9A7dKFpohfjm1izcRxCrHtK4wx6kb9HC8HY3XHwrMdfzLzNfRmKcEf5MYSJ2462ueTUPbFgudC",
  "key2": "3bFaWwKNFW5qBz2Wm9BZKCfnYomczDQ74EtifRogXYdJcGncpiBMEZawL6bnMrLc9nMT7yX7691JrnPxJH2kZdwG",
  "key3": "39NiSEi9SvFeYdP5r7JvvxtzKavmDGumLTrfcpmr2APPMzGD48yzHdvmT6jfFf3NVWjk1Cp6UMtJ8UkFxJAsrXPH",
  "key4": "3iWLF1MyzRozWkQR5SP6aa2p5gmnZcrfkjtnyebcBZtcbM6qJ91VdgKJBi7GYupP77twSLfpALWsx8SJTgqvJ8bj",
  "key5": "5meNYiFhH56GezbuZdufinY21vRsKQnVRSenGmf2NmcjWaChAU8tiDbvKNgwaHZzYkgCMsdVL5ERwaDF7WGkP6ee",
  "key6": "UieHgbXxSJ9i9h5YWwQeGMkdJP9acMTqV7cPt5ZfzWbS3x6DMPcMLhW2Aqnjg9KWNayt9EkFeupbzp2STHE7v6Z",
  "key7": "1vuTym6L5ZbiZPr14ibQic9PesnWyDmFGLKwz4PPnKVd8jicfyB2sYQPfgPmkKccbfcUqLyxVjDd7f1YwS7yCSk",
  "key8": "BtyzNxBorYmeMVu2V5bh2DRL9VX2Pttt5vkHMrGwU1FrXXVP1CcjvnDco9wT7XMztZqJZV7nPeDcA8QKWogYwmW",
  "key9": "3Zb25hea9sDgZg7cfE21aK7hZMSGHcyGhjKgdfKKtytrz71GiXeEo5YpiMCboay76SRUvMEQn14GHBDhDCuUnvvS",
  "key10": "1c9DFZ3CgaouWdG3a2oGuTJtLikvxDVFbYFGd6aywsQtjmgXR4UM4uGuoCQrimoaKVSu6KErbFRBrYDFgxeHmc9",
  "key11": "23KRS3ZTsxPpBWaNUZaK8KVaHqrCX92mLV2m4o5q7eTbAjXJ7rBMFYzJ6Fdd3up3G9Bmw4mwWLhgAbsiXbqYUAxe",
  "key12": "38c1GnjQotEv2XbySGyq8DAZ3EnAYQ4fcJCA8qZMEzsUHzyMn28GYWhKEsXSRmU1xn3A2Ujb7XdjL7cR7E5wm5WG",
  "key13": "5juTctS6BPxZWpnB1M8fGiPn9Yk5E9siREpShpZnEqdiXezDp5PhuVEug7JC8JgqGtGGQq8Vb3F6Fs8Z8vi4khYU",
  "key14": "46ndbwxviGUivjwZk4idkvL1NPh9Ri1SRKnoroTJ2k5HUGCVKdG9WnBvsncf3KtJS4My8jUwGC6PdCsdHDJX9pFV",
  "key15": "4Um9cnMhJSgm7std1x5kF32j3j2d5ixPEeuUcd1KxK2tRuq448YWSH3oi7JLqjwHDoLxiKitFjfEVc5Cbz9zQdL4",
  "key16": "42YhH2i8fzVmyWPY2xHdKx51q6rnrHXQNyRzGTbS1S71kMc65yJNsFjQ6JAF6H632THfNZm2ibxBe978EsQyAtHH",
  "key17": "5A66Ce7Q2oW4gYpVPMQxSXb8ZoKk8EdaiodHUDepDCKYPm7d9g9m8963QgPpQk1Fi7b8tA7PCVfC6brHhjNxXib8",
  "key18": "5whx5N1gHfc4Y3SE3Q3Z4LaVThUgf2W3tYxAKLF9bkMVabMagCM1sobdVgA4wRD3cv4omByUgHqfEztoCypK7QEj",
  "key19": "5d8PYxZhxZZxrev4qZWos7TKbaJDqYfLq6RaKaiAFF9ib3qFrqzN5BN7KiVvNnvGdXUhwk163sqUcLrCxcFjkwkV",
  "key20": "33GHuDoQhUWVxcMNX7Fy66tpKKCsAYod2nrjcpN5gP3RPpFLwd3k7dnPLF9vU3S59DjBP6GBS6uusBzqPCRZFSGM",
  "key21": "3uSZytS5wQWVSRNW3s8LNCHwaYSFt9AodJwHu8DEegii19oRmAw7KrkzLE3qAWspAPMC23HnbwKDeu1zuXRfhwVe",
  "key22": "2LCAmXdj5SdPUGzCXYFw4E1bDnFYDKkXiEm4C4XCCMnoyPeXJBpaM7dBCALQJTMVaR8TxtL5GeYTixidfBAGqEYB",
  "key23": "2X8NZPYHsLoTAciwu1cgBuGRe5rxdVYcUmakybb9yjniViY8gTivnmk2WPSHcq1kekpJXsqyWtFcVX2erGngQ4MQ",
  "key24": "zBTU2qfoNzXxFG1V46HWDwBAgceShzXwMehQWNbPGkCaBcnXRvnJFyXSFj7vZGUQh9KhkxFLvGiP9yiB1wnzXid",
  "key25": "4un5Kw5s5a4fU5YqcQKJVtQFHBnyCfQW7i7Ay3zxiYrPRP49D2pCssh4T3LVTT2zH68w77kcF41byTuSBYYWKxtU",
  "key26": "4LKNoFdZjj7gshzAyTwmo8N6kuYEGf5mXzihGPdSbBQ8WmoW29eq7oHBiDw5kxP87qBTgzCz1XVSxL3AaNp2aA3e",
  "key27": "47naZzGS2KjjRy7FfhGvcH92nMcyrKvkXmXWTHXSuciQh9P8Xi3yRCKcecaoAn3zsDqDYRuJbiwYrCqoZ38ZmPGd",
  "key28": "Ct34kMhgNKZyc6LSojZXmP5sF1yy3UFX5f7b5xvyprNgC51rrvLqSV1sEhx9w8EdbSDipkx6hEYR8cjeB96XNMK"
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
