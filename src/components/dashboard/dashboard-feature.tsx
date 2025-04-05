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
    "33g4hS9y7dPahzmxmnzsNJWuWdb11i4ZSHTMq88E4TKb4qNSdRHpSfwjbATeXSFKHgG6NCR789qWFfeXKqyLqpWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nq923JX9W9qQKTewxJJbiSJBSMMJPb9oNbZ6k8w9qHzByiL67meQr18ahPYX6xf5HpxvjVcBab71Jsmewn5mHng",
  "key1": "2aV5N37b1ZdpZXFiBDMjrEcLhuc9Ls8GFarJyTBgwDL3GzoU3FMFAhpQkuDN6WxMvnmUtmr9fP2h1KZWAUSHntcW",
  "key2": "5sj1hYXZ3QWKFDt3tQLmFErnEWCJNxqJWCJf1Y5dH8SuPbBxew9mYS9DKoe9PxZEPaXTYuBmdkVjmZthUkUqZWxf",
  "key3": "rRbftpTJn1Trtj9Tp1LoqoqT7S9j1t9nsEmE4yvqxnn1DgL5AkCjUHcTS1JnBcfXYA9sF6F3LF7NkejUviPhKPA",
  "key4": "2vrfNRooY9vMwSoVsnDckMYCb1m1ZQdVYyyTuAa1H4iKf5g1khBrkrLdmvbzYAxkN8KSpaFDSLMipW2mRDv9PKHM",
  "key5": "55n7TDG3nYXiXrf4bStYNg7wrodaXmvBAuDEv5His5GrJ1VyooQP3T9e39PSKqLDQuSNWvBAB3A9BqgsnZwnvAWF",
  "key6": "4wus2AGCGob2tPfUZrmoeWEtxZe5upQeCnpV9LPmCT26FYMEapKbUHk6TF7j1ywhPcYTH9YAAX7e16Q4KsZDb3dC",
  "key7": "2CyFX7emUDxdizrurnS3SciwvRCd1HH363v9ZydX1YMnjtndYq7YrjP6dDQXfrbjrzw5YvcR4EmFFRmjGXf5XnqG",
  "key8": "5rJ3FTthFSdnYzZvDxZnUjAZbWiENQCGLy52QJTLAtWbPpeKj9SY7WDVKNK1QUw4VhsDynctm3yeNNgA2MB2uoFq",
  "key9": "5t5XbuyNVFiCh94546RVha66Ebh5YExSas78HdNVrkSWYQMcQLmsKtBRTuzHqbxVNFzgEQp2YCNE9daxphRQ1MTo",
  "key10": "2RwujJnb1JZjA6qr2kkkxL3NAA8HWMa1NJn4m79nd3RuHbC7DqKeFuQeg4f7JLmLyvKgqvWvZGFVW8Erq9Y6Vc3c",
  "key11": "3aNMmV4h7j8dJNsCLbHicC1gp4vUiJiJ7QwUADQib1CHWcxMQpKh5C6enRwnB6jKnnoW5FzgGExApdJpoqCkgtiy",
  "key12": "2bgUqhqWjy3oSQ1Gmu6HFuFPbY6wKTxHHR1bH2VFJkmrsPf1EZcc7DGZEAnYSz6dcKwScfqLfckcMSkCSryRRab5",
  "key13": "2rJQSihAebTmm8Qg6csEyRmJTkzzAQxc8to4o6FkaFqEkTFizfRo7rw6BwqfrytrSPLNGh4a5wHUrC1MjMc8T1nJ",
  "key14": "5uW2uN8yzSqDkj3wjgTXV7snTd3Kr8YjLhRFsETf6zTndUbGR1i6GR2sEiwSTf85GdBZySa6QYVXNUX1hRedgV9L",
  "key15": "2naEfmbBHAbXSmssJ2bRuyf5ndDgZeQ1fdvpfWLKmmFSMgxc3VrCM6sMDhT8HhKYxgMK1QUZeDBLnFrDJaFqE6Gz",
  "key16": "3YbH8mxYEnRkAzSm2CvMZQN1davVWCFzE6mCqEDddThHEDacXkgdvBBo8SYwt59yhqKgfn4B8qp1TNcxYZirDMWr",
  "key17": "4KmWZ7y87X5HA5HXZoZLqBk1vUkEbkcnyX42mZtbd6aEom8TPAu5FG5SPYGwibeMmYd1xFiaJ2kPyqmHEa4VTowK",
  "key18": "4jkWtN2z5B4iixbbXinQrA2RjjphxdqbGvyUHyBkrvyrMeXH4FrCypua68aRniKrfRN5VvpGs98qTJLe4EmHNckG",
  "key19": "4Wgb1gPtzEUnUzzsJPCYagfNKkEnFkmUAcW3v8H6SF2WgeFGetQGFB57iETTHiTDxwCh13TpH6mC5fC18DymwTsY",
  "key20": "LhPvbp782MgfHLuavSs1d7iy3qcbhXEH2QBQBUSh3itoh9Gu6h3xB83EKJaW1hLb5Z3bnV3wbjipWipoWwAvdNY",
  "key21": "4iN22whcMDRa2SjRQa2PPSrRc5oG538CJETtvhQuP7vem55PoKCf3bpJcMu18TF3XSEkxXju4yNFc7ZPtxrgm7KM",
  "key22": "3Mw574aP4pspiQ6VjMPY3D11Foa55u6n2XfBe1u8cLMisyB7HHKFYDsgAA2QBZnW6aAeEm64t4UouXvtBUDV1cN8",
  "key23": "47c6PSVzgYj4Me3gXHEffuMcacodr4H3mhSJqttxjc6MQ7xwaZkDJRwfrSBtMuLbRcYKL3WXizKCZp95sfPoJEHE",
  "key24": "5AFXCgK1eWhQigo4yqgJ4bFX8YLC6hS9QcQVR8AxUp5a3fr254Ai3DtC7K6PTyQWp5MfU2pJTJAffaVzDYBw6A3f",
  "key25": "4as9fqHPrxnpseFkhDyJjKPBYoYw3FVAFY5YhyTtpFnYe923YNJdDnB6tTfkqhsjnPbooRY6y36KtD4nbBgswwRk",
  "key26": "4py5RjcAEkwirdvwfJG1nH4dmMBf8zujRHFYehruzPcyTxbjT9qC6BtHWPvSWkop3z8ykz8bFsiFjAs6zJMyhcwZ",
  "key27": "3pDk56e58gbZ56PeDGgQudcco8n4C8pKHQJeD4v8jnrkzz1fsiv8ZUTf51tk1hN5MbJupWwX1xTyhRue8jCw62FZ",
  "key28": "h3QsAmT6gQ2tpgj2Z1qXJZrzvaMnNYTGYvgJYLmoaDhroyik58M2CDNnWv7T871VkLS2gSZiDyJJJxK3KdTTSdy",
  "key29": "3iLnpZYzGo6VN3XpixvtzXdSwGTyFiHD4L8as3iSAzj1ZfTX1CHob9frYotGmacMiFbaNPKv6Zs6AeisWdHXXB8F",
  "key30": "2x4tHkUx7USoabdB2x9uH12JbBgzFP2qo8Q8A5sZk3Rb533MxyUccaEnggqtJwRxGmLBBMQjT4euRA3ZeBPPiUu2",
  "key31": "2wvVpR5jK9FYKz5EZVXMWhuG1uc5pwriZG663NcNY9jxU95nVbuat4NQTnuvhGtHM91SdDy6x2Gri26gkdas9VLJ",
  "key32": "2AEcJYh4vFgLzbXZcrMmvRxY3sJ3WgAojyfdt4LeVaBybmPKyvsGQpPa13LZsMcFdKZj9vdSxruBdfddnNV8iKPz",
  "key33": "49yWQbALWehsGEKLrUuACU9ZN8gC71YmiRKFU2UcDNSvy6qz5S4t3JEyV3Gq9aoxpkbMLB2g3Z7guB9Aj6uKgWxF",
  "key34": "4vRdWNfg89cNiKkeeZAwF3EmvYNZPxn9GX9P8BgNWEHMmb5t99tbY8Q7CoPzkMXmbf6fwM3avzcf7UbcQnKFGDax",
  "key35": "5biQfArixK7j52QneG9TiwQbUFzx2GtgNESXTKVqo94DXBTSm9FBGdf6CYtuQPgZwPevuv1LFwkwoxsqELPa2PVL",
  "key36": "3KXGs7cAmEJXazcDJMzogSWptD54ruasy7fiSdyYEkvUzwn8jNgS4d7XHSjf7J5wpQGKwoV1ShpeECD4tm9Rg77J",
  "key37": "35APkTcioN6ELxUbTKRiJVuzPGSXubrqeSQmcxfF7vLPgxc9LcNjcTCYMTrsZDiuXGxs8rzsWF71YJQyt27JpMU9",
  "key38": "jMpNpLBwyFkeFUcE9SgxpCcCrRaFftXSrtWW1Fv79yKrgLaxRPgTZGgJ6thWSno5ag8yr8p41cNhc7DyhU2cZQg"
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
