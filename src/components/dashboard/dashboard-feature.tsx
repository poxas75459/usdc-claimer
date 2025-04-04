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
    "5khCeWTU7XqHRboMJtWwXHwDMv7iMJH3XoxbMF2w3z8ftJH8fHm6UUYFjd1H4FZRL7zbxD6uvKKtQY7ATn4ZXDP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aMEosc1Bucq852J6iLqqRxJf67rsgq1dLm28cf6SqyDUNNya4z2dW7P3NAucDtVvD7oMX4wXRr3sbvPVQBtiAj6",
  "key1": "3y6kjcZDuvoWNLECGGUBuuCb7mVSVvcv9TEo8QB4YcP1fb17JbAndBf6CEp6TnXVZz2ja49U9NJaYYPBGmLnbAh",
  "key2": "4M7huFBMNuGyEkP2DeFST64VsPgMfrXLMgwcm5y5UuvLgcvuHR2MUnXzV4xccS1mdaFtYAysDWUWd3k5Pb7W5vkV",
  "key3": "5eNW2tp3SFWuTK7fUJXuLwTtxkeNABcB1aLggDmgsmWkwRZvaW4mDYogkhtwwFUGMmd7aqnumFcvkPLoHNZZ6r5X",
  "key4": "42PFyTCGxoP95NGVfGZixebk2iggQqxGTzyRraGJ5PUySTZmdxLCiCALN1G6jqS6motdDxbQ8B3V3us9vAu3eT2K",
  "key5": "5KrNV8Hg9XMsPh4ad8Nb2HYmZchxe441JTaZAKLgUFwANkUuH6LbNDNLDLZ68LR2d8QmcrDERN7GbceAW6n7TEPJ",
  "key6": "3A292idUdcum7ycvX1uEv2bpVoESo7Xr3vAbr5xshWkhjzbxmKqk6iFHnYHSxeiM8JKwcP33UxjCPWtvgzdpPSB",
  "key7": "AdGKynrkcp8TxE9oBECoBkYLJMLEKYb2KrB5dcJA14kYEE7hgtsYVSsUMu7MaYEHXRqb1yVMbR2MQsw1qeCXqjD",
  "key8": "5BpWvYjwniYAgQy3jt1UgCaMvVX5v3pYKhHNhwXVanVsgwdUuD7oSDa3VCt66TcEQTN8xs9DnSHuD1SWndH2rDXg",
  "key9": "3uMN5b1nUYSecfxcKmppaNnMgw9fYousNc71dEm7brtj4zrHReQjNNXagnPmLRji9dvhWgH2UH8t3UNMpW4FA9UL",
  "key10": "37RZMCf38mWvjtfughwRgC7ydLCjXa2ta7i9ofM5EggyMeTwNdTGmabU2PbkNsSo7gUsSj9oTUHfAFgj1LwTvuhP",
  "key11": "5BsN7ngihP2TaHJ8vpH4naCD5jVjHV6c4X1B4t5bLH4F4Qi6jryrgEjUVQhhfoEuCt8vQSgQZefDePT2UP8CTSew",
  "key12": "4g5tE4skKPPshfEXd25Zh2SPq7ZnG5wfsc3Dmw5s7ZE2zLr5EeFLCwqRa95VzxKu94UJoJH3suyYMpX6k8mBdV2T",
  "key13": "5P58o5CNjwRyo4FAMqJy8rBnnHKXsgAu7b7GjwpBnqsY3GAEP9nBGXA7h5qAKrMy2qsnJV8ASwwBxXVdAFJ4FfMS",
  "key14": "3Up4UiPfxUjPvxdpAjj84fHncAsMYAEJawCavCMMTsCC6s3VQKqGgbdq9JhHLxUX84cPxEMP8KgcuYV162npFcsb",
  "key15": "PXydfdksXZv2Dh3ZwGKmnRNQ3vL2wVwmj6MZaxtn5qckF4KNabnoZ8yefwkJnDWVjnDUpsdfs2FpdnQ5Veg9wGS",
  "key16": "4vFWKBm5hitsvyt291uBsPEHDqE4fNdwyN8QLim6EkA2kXH1DZqDrXYD4SmnVdF84N65i48obpehmUv8QT5UPwyc",
  "key17": "54CocfiZisEm4Ms1MH3eiRU7fwqaDLPw848oqmwGwU1bJ6nr8ZxE5igEtg4ytCXp62VPjnAUBhv79o5fxMhmupem",
  "key18": "39oNUSBz25FP1cGiANC83iKeh2B8XFDG7mErGiHSghG9fcQdd14nES6hLVaA4GCWdKV3PAAprd9UjgMxm59aPF4j",
  "key19": "4ChrKtSDWVBTqHLsptVFivjbMKrk7BSN4hggQm4qvUCo1ofFTooob2TRsVUh348Ut5ux8wLhGMUtkn1oFsmJyywt",
  "key20": "ziXy4TpZEfbqQJaJ9yqYzyApzfGm2maMsje34Md3emmrPbtur8qmgDktn9FjLcYy49uroErgFMaBi3b2GAYFfnt",
  "key21": "4xdPTqok4hfYpeLFkzmKsZLq6WqjZeCy7xV1yvxi7W3Ria6YC2suRjmKu4h6n6YWuSacAbuMcCaGEbk2bgdHczM9",
  "key22": "59JS4cScLE84X3p5yf25qoBsjFFQNgsfAhNvfkxu9VBh2iaWTvgaNxXmo6wgCcZQJAAsYV6eM7RbJPtBpSF65eGq",
  "key23": "24r7ZvrkyTd3dtHafdkgKB7mWBLXyE5DFW21qKW1Y2kcABTU7bk2vKkvM2pEVZXEnyWsPDX4rAju3WrCe9jkFB13",
  "key24": "42xxURYsnAPgpNnCro7S6u7uMDgSkxVENa1PYYKeBNAChExnbiqoZcHBDmaGTccgJ5M4SBAa9zb8seE6Ccv9CyyW",
  "key25": "5hzrQjdCnqtfVmU81smKMFC1zycGWnaGoEKzqmYPNkjzqQXteHSyAmpSUdB1vAKJEfZYyp2Bxi35FmVFMYtu9qmE",
  "key26": "2viGsBE35A2SJ5A9N1HUysvT9NEFvqdEfoE2GzDod4uffHVs9KhVocmsamkSsmdY6HMCgLcRj1yWxavKT9fpquAn",
  "key27": "3FhudycYdtsD2HymKSYn5gVRkNtPQAxnhTkUrcfDATUYRGCfT2VKhcitiJddZgWCyyF72QuMUyM6LLbBSFd5Npw5",
  "key28": "4j1rEF9b5rUB3APF5Ep8uJbnXZ48niy83AWevYksqwcnp9MF2wnuwgzVCj6iSCy9EqigYk3MZLLQbx4kw5xsqBpc",
  "key29": "4pRRwEBNmjoBFjgDjvXWVTX86cMBs4oeyXMHbqvRR3svW2NCqULbX2Ci17473awrJCxJfBSa2Kiogs77DuM1nUaN",
  "key30": "5BWuTtAKNxajToq8MLX4cDyTT3NsAkw9DkanFkS7s6mVgAsRQcURqJPgdN8pLdHPLWE7VNh5zB1M981RaTsp8vaN",
  "key31": "4uJQnEQoDxqmaXt34wG5X2PJpbvo7Lf4niWwz4z2XJsuv45CSRAHtFU99u5R9o7VVrJrvurRVoJvXfKWCZSNac5E",
  "key32": "RLqkxuAwGCy6ogbGYFagUkDApFmfQDXfktLfnRm4rc8nk8nznsYWfch87a3NbF8RPwZBaq5oi7n8gvzvnUC5vnC",
  "key33": "2WsNttu4r45jEhEnGehsqtvVxtuUVR83FZKJ2ey2eJXswWzBjQBRMTPiXexxh9ckL8PrCt1XSqaRmBfyQnECT2xH",
  "key34": "4HttEtAFCxGrLowjEEX3vWqq7RfYwaPmSnjXNMbq6uRveJ71KS6P28exaWq1UYGgT7j4KmzwCyXQSF3jDAHnjYux",
  "key35": "6E6wqk1qN9YCFVvdX29fG1tkB5mpdeMWQ7eg2jZQMeuMBsvRQyfhkyxe5gAoDJcWLtL9yfUpubkGWDRAwkzQH5H",
  "key36": "5s5coBTbmdbNw6kbuNAZ8LZBdU9oGhnstWkSfQbs3zDYQpVZtf3TDFNzEEviLXWonJ6HDq2YxEevSxatJA9dKeCT",
  "key37": "3DLm1VN7RCpp511yB1cRVPGQmrL3ZdabshuWBWmAzwZtuqgChfCHXZVvsDaryL5nSqW5KRjuWEsqzKwWKevrvjMq",
  "key38": "3M3bQbLVPyN6sdYHR9wekmGorchp78hQaZSsVZaNNfoAwr9MZyuXQrh7eXZv95ghbHyLs2x5ivVfVyA3v5qKEovZ",
  "key39": "3p1L5QQxSmG6vTzX3GpAYkq23YZB9cHb3hVxXeuik7wb2skaPVzFpxY28dZKDtbP7f9sstfBeKenTjEH3JZaLnf2",
  "key40": "2z5sScfT1DnTs6mZsmAqtSWUmCDoy5QSJCsvAaFHSGct8yBk8MsFukXrhuTHSjcDVAzD4Zq7jzg1HM3QCYF9cWsX",
  "key41": "2SdEhFpvTMgtjawrsbQDrJ7YLCVE82SPjvYKFgoDnhJmAZnCyfbAaJwRcFokgZcmp7hg54bbXX2r7Hvi5H1aZmom",
  "key42": "2GPiTK4MPGwUMaHfV8m5r63qt4A3CuhzBpTVaDWhiGvWkQVzJdz72DC3wsJcH2A7xCxQv7BEr4fSUxzHJFev1pzP",
  "key43": "3xRpDHTRZsCq7hX2LP3oDdaPPYawtBqdDFLtrzoKw2w5auVZGmz6T1eghqURu2dtteiXScmKB9owkEBYqFnceY8a",
  "key44": "5rza8DkuJiTmLJS2qGjDb72xmth2jawSq4Ktvohtm3to43PTeHM6bCY2rQgzEdc2Jj6u8ugjJ9AAbk6RSikdrL41",
  "key45": "62Xk9VVq1pE66SC3A4veyFG2VZgQpE6o2PLr5x2pt3tqNJ9EZmKULKUXBLKMXGqo7STqXwVgGLppDiCSEVohJaoV"
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
