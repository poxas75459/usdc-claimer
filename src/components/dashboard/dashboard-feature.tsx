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
    "2zAxph4JYiCXvfovMscVzeVS9oLgZfTpt1kc1kDCBKko8sLxgQBLf1A2P4zqXdT1h7jCuLpsho7mbVgKFFwUwZYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7tSFh7m12fTu2wiXkVZKYJVELKLwTcMMoQq7YRu6xnozpqZUewqVH1jexSAJFY2Bh8eMvWLcM63xH6M3eNopq6",
  "key1": "5Fe5ZwQCFFreH9P9MWJn7YVritzM2xCjSDhz7Nv3Xeky2mXn2KFmnH8AwQZEFQonixpmfDAJETxYjLmXYuQJPbgo",
  "key2": "2YcNzWPzwwZvvBFHqw36vSdwr3g7sjJbGNdnAqAPzWjHJrUi86bJQNB9fydFoEkFuE2TZqpXEVFUDzBxCG7EK1DK",
  "key3": "33deHdig4bLvVueSC733Nhv3xrGX8uuhCrEuzRgdUtgDGE5Mxvt5gpVLUy7tMAUwc6WQCF8hCkgDqfYR27qERaLC",
  "key4": "45J4AnF5qAy13zbbjruzp9f5YBJExJKDNYwVe4oHr6Q6rXeFYWRvq8ZDMq3CDhcmoRh4bFkCL3XMtbYX173AJ2Bn",
  "key5": "4w3LbSsJmQFZm9Be8dFeWicftVzhAxELUzAQt4igWtYjNXc1D6LCeQyjAsMuSvk3ptRLn74HUEtLjLmPpusQFaDi",
  "key6": "2Zz48sERj3k2QzWP5zo9kihFMUDB59vLFr1XpJP4xsWiKqPMffQoXR4gcgrQLmWoLtUVa6cRMVrkB5cazJ79pJiX",
  "key7": "3RQqVyoKWstsXGYfJYRUSWLqkuk7bMq2W2UKZasedCqUBfp1Y4c8iDr8fLSvfsfLtWuzsfM5S8Jt7hy9WcaAeAez",
  "key8": "zoXFRPynskXza4QW4K5snrnsQcFShCZGXn4ibqbiS7bw8AtntT8f8B3YGAwgbejrd4ZCmTCBAKZfGCuDaUMLAnw",
  "key9": "2Yc4CjAKSnAhYXxdwPxHPnLDBTS736JLtwnBLJHGnBvL47uvH5cb6QY9wD5YWCzJE5gbePD6DYnBsXXpn8mA8Wg9",
  "key10": "4gV6JKhb6hGEbGBNYXDWrxrL9CnjVvngrYNqS69KXECkcVMd5aWT83b63iH7XUFiZbLnnot1FAZWhYpcnXAiyyDe",
  "key11": "5Dr5sLskCDdG7Xuqt9hoeM5VhKRH9XtgyL3wiHX6gbg3D1s9bfYgdG4kkD8tkzo2cMuAEECYK6DNj9NPVotDBijZ",
  "key12": "5bFU8dgcNDh4mMKw8bu2PL5cecNjbVLukoxMzoAP8ibZdu942g5qx8M7cS9B2ixE12UpVBKwi4ri458TaV2fxdHe",
  "key13": "63KSrD5HmsyL4CnFJdyxUanUWuXj3thohofo4hnkxgP6C9qvrkVtBvj9WhSRHu7DuckFZ2kcZFgPXFqBSSs24SLg",
  "key14": "2nnm2MGARyAN5U5o1yRTGWL1VmNcpqeo12PBZhpYzBGGbowzdBwzu4XvjW4AriPcrNi59GQygKSEDQ1PodV3iHmU",
  "key15": "3ybBvzW8J9JV8kmpRjTnVJxjTj8R2UeN42KZsWGqxDmwVjuW3dpdxkTj5VonB3hmjkn6pLgMzkpn4Uvsbr6gA2f3",
  "key16": "5tSwiGB3HipQAcKhnoZ4bYMVE3y1s4TrPjnBFXfNoZ67A8YQ2Na5XJ5cvbRKaRbhYPXLyRtoXFdrHF8HD2YEgWUv",
  "key17": "3E4a21iMR944ushtCtgx5xXozMEaoFaDQugRDa6SBucPSRJ5tmnQmJ12S1gdT5HDcx62rwaY8GE3HTiry5kh99ro",
  "key18": "2GzaQfJMqc3svGi8xU7ajnNo9xwMQvTYDW7b1tvHpEY5NjmG8rEvTtWPzZrsR3WF6JUfXEmvcKmLiLhGUfqnGQVo",
  "key19": "4mf5FxP9x1XG9YRQJRiGRW4k2PYtPdrZhmLchxfcxWZn8y9G5kQDbHbx9inSnAP73D4t9ef277sVqXbqBUb8oodZ",
  "key20": "nC4Ds12ZA9awoAzhX3KQNMprSnNANGGJXY6gGsmdZc6EaB8jbQE6AAbqyceBkJS9knDDKAwDCJ6y9MhdBnrHtnU",
  "key21": "RVq5g7LVLYkRLGuARe5rYMFiaqYCzmRR8aA2a1GPyDioXeU6qEv33hzfQQBGr9Z2NQ2XLCYGc2Txuhhz496bFzX",
  "key22": "5g6H2CZ3G7AB1VRgDfNnLcxbi5GsKt1D4R2pVvuvm338SEcVHYcq5QH3ZjgUBhNCtPXNeuUDhwHXhQPbUc3Rjqwg",
  "key23": "4dAeuG9aXz6n7ZSTRFGw1bSJFMQ9QEwaXWVrPqaRQxPzbizCgQni7tRKAjAU2VoSVTiTnwsCxR8F34SbZ6NPgNfq",
  "key24": "3fR97p27dszXQ8Rwhk1ACsUXTBaiWshQWAHYeLTdr3SPjwmLd15PemMEvqA7LHkaKK3NsppuTZxK2rV8yQNXf2UU",
  "key25": "Pjpv5tKc8fc8DdvK1pXBgFAJaHzba5NgYQKEhAQVrMnW9oYpToS7rVKwJfS2Eaetu4goNF66QC7HMxCi3rcU3WD",
  "key26": "64JasDhN3j3xxfTEfNA8ZVyXAwFGkgMJKyNGMCyrTU39NhDMjp7Dq9qayEuHrhHGGP3UWQATtag3T1SZ7GWNezbw",
  "key27": "3Wrh1AetjRro7RgVZfT2BLSrwrF8DjUPXtPAKsYEvYsnMhnHygtpkSEkV8aCjAV4hBdBfZnmhDyAcDpttgerqqYB",
  "key28": "8btU2pb848ua3o3AaJREodKYoHVLHoRSEraJ1xVPFDxaQfp1tMkUBfY2J3XSyuv9ny7jhZCXHcyV2AcCqVBnCia",
  "key29": "48cvZNaiY611D8NYbdSHngFUfzWVDb2gP54AUPX3X8tVmF85MG5Jg3zSbXCxsRJ648qBbqZvL3Px5We7MuT26PWd",
  "key30": "TUdfAgvHRVQUFK44XQPkPZMmdzqKTpQSTMeBeHY8x7vNLcrnVgT9goJhLY9jpSJ5s7nLthxP5HghGFa6j1rbL47",
  "key31": "3ewZ4d54Sz2BpVR7daZCMWrz8664L3MwKtC33HhKjjRvFZfXTKdmjDcq7BUHTNj14EwqhNxqAFg3wXZe6RvAszSp",
  "key32": "2TaijV7FWw9GwCgBchfyn38MnghfzpQruhy7x2kCoNrZk8QccH4eTNrBBNyyTaakMmuza8KZqq1xcBasqHBebi1H",
  "key33": "3Gvzp5QSWxpv9GvRE7rf9bB3o2Da1SqGsqe13wXDq9ZB3qkJoSRatoHvMZUVNBWoRZ8zA3b9cpdCzRo7Bnpkrhtp",
  "key34": "32kspJRpTrFS7WbHwYYxgveoRQWLG5XNvZ5f6cSAw6oevJ9iyBHDDYxDv6MGxVAgjQ5Eetvg4TYhAXXphXi16vda",
  "key35": "43GTTwjPfing27apzUKCYarq2UjfScKDK8uhmZqELuqBH953e3rNTCrtLDJW8LXmZQNv9BeygkMaWMhYXjTpBH36",
  "key36": "J6ZFDMB8quSL8UWfTnbkqRD9D12PQzoHVtJwQ48fEfEhTu52uGWdWeoKx3uXCjKG7dDybpBuXA5WzKkY9Ctg3hW"
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
