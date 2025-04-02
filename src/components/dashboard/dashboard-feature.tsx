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
    "4FVTHQYxBbGSW7AAyDFVoop1i7iNMkHiAHT2myfwuGbCs8CJXHEuVJENeMBLuYcj864iFSFPekkoKUPTvDLAEv1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fRcoxC2hEzYcKydDoau1kfPvAuoKkdkLhh4vmZnyms9uiiw4xYrnekVVxPV8f4W7EzHdBbbVCpef4uFYxWZ1abh",
  "key1": "3DeGs2zxCRGAauKJQTpw3T3mmG6oF7APEtiAXTHUjQj1JWd7K4yphjtLUZnQfidcuePXfr2XCua3vTtd56BUGrjD",
  "key2": "2SM36gV7tSEtCRsYpqD5M8dWsGZFBiKct1hkDoEd7c3ijZ8jbinoNgNt1KH2PjZFwWGfjUBUXGVz9UqmNG1h7mXq",
  "key3": "zmvjPoutmcocJbaW297xeB1rxizop2dRdKVn946JvqCLbooJNUaAzTCM2wZcTUQMR5xyoov8w8ZY3wemLgBgetq",
  "key4": "25KDe7rvXCw186du8VCdTHU5EB2a9pDP2hbFB9az6BwWKH8QTpiDa2BjECY6po79nocaAwNNTWvnhBME4iMhso7h",
  "key5": "wXPcCQUTLYLZCqMPuu8V1GCn5DtFTay3dgPdBpTgkvExqNs7Ty7aBjKWcFJWJuxrMYm7QFBXdZvFiZ9Zgrs61WL",
  "key6": "5cNQWTxmJ8RevYFwQHC5rXhLDkqZCqoHgQUcq7JBqGY9v4nvE4zGFTvoU6azKuSVUx1bvekXbrrhsbvsd9mB43c1",
  "key7": "5hjK2vtv6tKRjzf5PhdGHs7MFogG1jQxnXs9PuW93wHuDCjLnFBCsaeGaabtYLQ8StNSWNptFgLbBGJrivfKsoa8",
  "key8": "27DPqa3LayW24kq184bWrHWRo9hGPLmxA36rE9ZaUEJWecdUiNudesJdyJgw4a1xaRayQNifWjzVtiG75bxFU2ZM",
  "key9": "2qjJAYJFPDc2MJXP75stHty2XDSPBX2FE3Q8S7CNoPsiL7PgcCjVqp3NV3dNySQKDXmXdn3Zjn24YE6XmCrwGgC8",
  "key10": "49dNcvYJNYAqv4pbRSzMDLkLrLNfN2bMgcJZvKh51xT13DpewsjmtJEpSgUmDC5Q5hNEGWT7PQfeC2VzYsdjEozw",
  "key11": "2RojQYi4ZkdejafxWNxfuTtYpSkChmar1BDUoR3rJ2dMSsuock18bmxbBMY5JNUmGWNkNUJW8ttjDwp1WhL5r9R8",
  "key12": "4Rz9QsTqi2yyhpkKCA7YFGLJPnm3ccLgwwFK2izmgWUFrULfuVYskAUGJAZnwpb14dNiL9Pi1MpP9GCnv7U7a5iX",
  "key13": "HaqxacJiNqPnDjR6nSvnayZ5BZ4evVbxbrAYYP5djLMUVjTz1ygBCS8R1dztLHK4tgjEs9y5DKb32rdYCcoJRX5",
  "key14": "2s3Xrpy5bSv5txNVVYUmDguZSUp1QR63VxHPrkeXUfRWXYb3QoitNHfpiYUUEPHLdqRZNi3PawFJrTxNXDuVFgAj",
  "key15": "3Dqk3YYgGnDaiFBxNMPa3Esfqh6xksQDHnBcwpeykLPAWK49MshJGJPZBEEqbBJUUwZAyBZXYNswf7fQqBpFxc64",
  "key16": "4QnPVJJ11c22yrZ12eL7Wvc8KoTuULucAc1tRiWxanetqtieYY6BZzjiH3WNeKQY5kvstbAUkFxVZ2vnEA7iaxzA",
  "key17": "CKxRRHooK1qeYS9iJExRPZV54aYd2WZmF5yQ7RxqUj7yMW6fFQKh2uost3C83bH6ak4LKyihM6mSVV93ojyPZe6",
  "key18": "3Cf92ZZz59jpDtBG2qF5t2PQfysU6Zpx15jGSCiYvknRhTY5xJLUmjogHXwfMMtzhVD2EKXJTmezFdZBAqHoHgwD",
  "key19": "5JUFKRAeHKj8GSTrceWa5n5HqEip3WnTQkPxX5mVXLxnyVzHNEpjkzEoZ4q5EzHpVGoEJg6zQZw1fioccheTK8Vc",
  "key20": "5S6VKHj1ae8KKaFFQkSKnpsSLcSYH4jmP8ruiXPc75dLTFcxz9WtuJEJM4GWQrXwtrzwvx6WrUYD3zUcXZCrPJMj",
  "key21": "3tCeGbZ2f7HSfsHUguPHM4u2s5VVCX2SMbswsW1WUJiEF1RwVNTswN8k3TFBsfyioAQTwm5pdJ2oZnRVtKwBuR5P",
  "key22": "hh3M97SY6B8XFTwixnk4kQuXhzo6xbcp46Lw7j6iJGGiATWcvda38kXHoAQvLtZyNoZRtkpDFibyk76zWJDE7Lx",
  "key23": "VCFS2oadnodnFjXt2gzuTLviQdsWNgWVtJPjthsdCB9V8HMBFnac3oW1AweGqY82Z7iyfsqEZPYrtxLZP5iX2Jn",
  "key24": "bLGm2qjj1dAkmEzv45AqiqRwn1y8GzUykr66jhnWgzQ555rCzC8F4229x9EGG5rNLYnHkGb1EAX6i32FARhbpZL",
  "key25": "pJQih6YJnqgLVT1WGY1LaLB4N8PS1Yzb2shKVSM7RsauhdNDypRWMq7xKkdnjE6MgCEn4bZhtpSnK6PiJQtX1rL"
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
