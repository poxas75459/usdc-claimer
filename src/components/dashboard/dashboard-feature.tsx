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
    "2Um4wYfqYocwUoqnuG8xxsoYqFFygmUpcuiw4W8oXyoJao4LY6dSjbTwY61fMbCUa42Z63zgcvFZdjp9y7hwQoBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8BxgYvt4974mKXMeAXEZvRHxBcpFs4vQ6nAeUmKjj4uo25Du75XMLddBSdUvpXFgc25JX6fxm8GzxjNHg9dwY",
  "key1": "4QoPrguWmW3RypcZZAkYhdePRo4AGkpnjtR3nmzKnCWjhx5qe9oJd5ZyMj99PMMqpfQs3c8Vb5sMuy64CwpVgdC2",
  "key2": "5H5cSHCtY7R9CPYihPf4mi62WdLztwFnyAyxHk9WjqmAV92ho4QomQ37zTTvr6dDD6XMouDBQG6y854duxv7JpWY",
  "key3": "2Ygv4oTqZDMKc3BywUbThC2KzabVvAQmxkANsdVPiUSK8AiuEc1jCcN77cxzgPGAgT9GKNAKeWJL7Q3Y48QDjLeo",
  "key4": "33os9nQ5gK529AG5jGCfyLnKcvLJYdZPYQyZJp27tDM15AhbKV5yqYd1vXYxn71emdY2PNLFqZDiuWSbP65ndcZq",
  "key5": "4Doqx4tvcXAA2WKujVvNKUxEgK3Napx2awKZaZoy6ihjttyN9egBKqrC4PQaMnBbEvG1ZxXn5UohZY4mttqw7nsr",
  "key6": "j1m6X2wHWvm6jsV3QmAEpMuWnfF7YqsA26ij5SMiCjhtjaak8gSEdyG9cGJrcwSSuAJJhksi9swkCXbZaJGpUHb",
  "key7": "5ndYXfBGZbgBVwupmT8U8oPUheMT2cUJWGbakycHP6Fr6zMMk4k8UR8TfKwEYFPZiVMjAmTn8No4d5RSX2vGMK3y",
  "key8": "4CKeQJ4ZzNnPfQBVL9rbHCGKKifeNgQq4rM59wLUN7vYrmfSoKRGvoK8God5NXkyzGgks6EDb7WED4HxZN4LJnj",
  "key9": "BSsb5No2xLoLvThJGNnmNKSwbyowgmQePMnsj51cfvnCJxbBx9irLj4p8uWgcf7VH7kMawEqWCYKNyVfNnJGNrd",
  "key10": "5qzbwKs4P4eN8sHC7ttK49WGxGr5u7EQ3dxvhBrdzCfGYqpuES9tWvCQTfNztuYWpYWLr3dsehR9GzLpjN8BEwkd",
  "key11": "51mLSXc9j5wCtgYZukZUT8m1QpAZ9W22jZeZhHN5GBctq46qhuYjmVGWsSzUCXqnSWS29poZ3hfosEVY8ihLMeAW",
  "key12": "5ZGkxoCVk4aDif9UruQteBJJePfSekYw9RgZR3FQyvmZKy7VgytRubgCG8N2yKjkXmvUboe5cpDJKYKtvxBHLbzE",
  "key13": "saycW7FduemE24toTcU1T2cKyLJ6FtreSxyLNGus8G2sGS3RhQRTsmHHYjWWCGYmXcF6x6y7nPGRNvFNHf6AuSd",
  "key14": "5dUxLPhLr9TQQvKTHywDhzSBFRvPq4H7Cs78tUB4eyFbtokeZJok4dp8JboRtLX2QGDcrB2kva8xtBiFZgkbdcTf",
  "key15": "2gN5wNPh2yRWXek299Jz8ptqWifp37Gz17PbPJBxgHFXapmA2fCmLb3S3cgwVbFZQ6GqwHqJezXtwg5KqH5u4d4d",
  "key16": "4p4DKfBfLRU1xNdPUMquPEY79U1st8r5gpEJnRueJ19YKTY5boTNcTKrruDRZqaQPn5XL4UTzzUegz5Ki4E9moHd",
  "key17": "63Js5hjPEND9z766xBXc34QH5CY3hoZy3G934dixQXZZYZtqJWiPa2bpJKu18kvLynNg2HHAxTVtL8KLPyFWAQWh",
  "key18": "2GXyg3zoooM81KxTXuu9aKYsMa9m1rXHPkV7LDY9qZ2FRr2bLBr1DoV7i9T78EkEA5nf6sSyYDEgA546vzh6irUd",
  "key19": "LeM9VoiNUgP4rG3xSuJXnwXWK2BrsMJQHVq4ZuvCYHRqgZTeBMXuLNTwpkzu4RSg8QYU7TMcjmTLLNL1a2exFJ4",
  "key20": "5SgZdxb9zraRyXPr6nDF8PGspKkFFmzPgoSYh5NJfpfM4vLMLjAmz8RnPu21mddPTuQCQivFEA9r3QWpcRFSVtcY",
  "key21": "sQ3WmtAhEgW19qZbW3oDRRv182bP4qNtkvGcsJXAqrQUH23h797t6byky4VVFfW4UhZv9zTNjbXyeeHD3H6K3QY",
  "key22": "67TrUx6AreAg8smoU9oDJrJaWuKa3xfyFQQbn5Vt8n4gM9QSQysH8N8vZ85Fbtx8w4M9jRiEsMVy75Ddv6t6kDc3",
  "key23": "4EBHxAkw6TnS7d7ePzrSABVKJxd5tLFTnpjjQrqveUX87ykkQfWJCrmavLDhp8KDAsymUkWujbz2NXGJGWrjtbG8",
  "key24": "5pt9XXWYDD6VhUjJn5hn7TUWKkcNjTtfMBZPzryUcfcdcvtSfgnGv48nz3TSyDdEdWD3c6naLrvTNbVb3Q7gnpB7",
  "key25": "9JCnegBKvK2yhVUtacVxY434JoYYFiPfJwaDFQVnkSKfBbpsHJj3pogJXHqzx3BkJFjUPVQ5Da6N3fhWNxHae8h",
  "key26": "2YwfJ5VyMb5krtA5oqzJqoxEDvHcFKvTjp4zfVNw4ngWkBnUeBevkCXyMSbkydAsZn1MGprPVePAxMeqqfKvnSzG",
  "key27": "2z9EgssgPTWU3UwDvPPhAmYXbLJfDKSSFiJVo4fC9SobHmE4DkLR3Zspu5M4Z1bp512DuWvqB25y2TBqor7iVoxm",
  "key28": "5yCzmswtHitNWLMTdw8QZVNR9MKmynwHF2ELQvuofYj9G4PdnawNdgRnNZvjQnUXHBS2bcZEdsZBngX6XJTvJ9xx",
  "key29": "7rz7C7j5x89RbtWrwq9tsXUmpDuQ2j5skkHAwJNkRSQe3ueKSUaHP6JF9PsbPkX3rfkaMqWVMKriBt5iM5Uaqxo",
  "key30": "oHVAtm77Ydiw1C4X5LuobX23QEerN4uG1ygE8KPEKwCWdsL4mW3n1HGNuucuSGwozUurFL8WwzwNqjL4ebZm1P4",
  "key31": "5XNJkU5PkyFeRz2UT5t2uhtTRptPxwuvtXjUtSwHGqeLEa5zTMwQaEJPfRkxFxxMRbXTw8ZqnhoAcYymnHokWNPb",
  "key32": "3ZNZFJPEwXTU6LkBUiwNmUkSFQPZGn7vCDGsR8JvigAAYxjeCrefUe4mLV63WN19BQNUbAtu6nLxg1VUgNo2Ka6k",
  "key33": "33e9WM7hDKdCCP2moUkXM16JTYZnr2RudVxnexJqswhSuQnWw5YrjS7h55W5DHfnY2LhpQDhyoycs8EDC4ck6pJf",
  "key34": "4LQR3HJ7S7ngxofQoxWaZ1NwhLtGovMmXQxWnKhBwbzutuegnC4WvRxBCJCSEMTD2zYwsTGggwoXzUw6ojeNYfxz",
  "key35": "59FjCZGviAvsz6i5xxA9uuy7BJZteVeRu8Cb5CDhsxvDNCooZcd9UBVtGssLwt67tJUDZXhJcbZJVGis6C2HXaci",
  "key36": "2gDj2HfNynxQB5P9JkrzfhaZvo6rGXJi13FEF6EjQpiwysrzCRY3tjPFwCejzEZmXYpZwSxzBgvZBZdFt4r2rZck",
  "key37": "4GLq5N38ko1GUnUzJumYv5HyhB9XSythdTAG6k68rA7SDUEt71AQisuGeukqKfCpbViFVKYy6DiDNhiTfRmQF55a",
  "key38": "3B3fkuJCSBbmkV2tG6FTW8XL6oxeDCRL3GsDECRYfQiUtwEGocTB3MuLTKVqfhBdvjFeNPuqvXzE81udgNPBavCr"
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
