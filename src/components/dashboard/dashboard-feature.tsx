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
    "5oq1YwN2kA85D5XdAu7VENyV64VKRCdUXtnYxVA8jTiDjML7tH6ywCGxsYMLDDCoP1rdDkjWY4vNRiitchkK5hD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kzQop8mWjm2RNj1nkfkESZ1HZgHuJ9tFEXbxxVCBgEmARWgjdi5f41EmZutFM6mMtjRyn85GrpQsD6vwc7Z23x4",
  "key1": "4ytujHs5E5292692apdetMA8eump4UdMbcpvvmstJQJic4oTqNzn1NjFUWm15nCpMZ8TWLAzi6tkPBNQtwFmaRFy",
  "key2": "4qregxDAbqrvuGkY7fNJtUkBgzgvzfekaUH9AADEKErustAMz81Wn3v8VYk8MCzGKvJ8Q7NyAxz4TZfCqRUqh3Cw",
  "key3": "5juy1o295UceUS8RrdfLG61bEAe7jJx2qBc4oEo74kV3TM6ghsRAmJwNRi7tpUx2HmGL9MSfDWTrJVHjhL8YXnGw",
  "key4": "2FLS2V5CjxiBNEH3EbnwuUvgSJztAJZLSKnuBGWizMhtDJSdoS4bHsJyvndFMnc4GC3tEZVCUjkJPBf6PAP4uNqg",
  "key5": "5V4ff9xX7oUnSBNYg2UmjHpf8ryNe3xzWCcAeTm6CSjF9jLQs1mVN1VKbZ5HpjXr18B4Dg4yu2LvtuudCyNQtKvX",
  "key6": "2RKmVzSk2mbNnj9gfaoqzDghbBPT8KZ27Xn1f9hTB8SmAAQpbSrTWfA4Vat5NdMjtYpNno4d9ASTivdFWfM1FxA9",
  "key7": "45z92Y4AGJQZMWZQYPk1yKN31CazyrDhQ4YBhpaMep1W5xiTdJHPiDkm2v3T4NRM4zXUMtySGhFve4bhvbVJ9Qyd",
  "key8": "3FwEkCzDqNXWD2rdTCjbv9jibKYkK1xr1fgFbW1kPVNKC6a1DaZ87a3GcaGP1FH8miQ2QJyMkfo26PsvR4jt8wq9",
  "key9": "NWRpTPpLwdMbgwmAYjPUmov8oiMNdvdbSN5o2xKQDD1xoXMv6JSc58vTCF9vp738KGbHyBsUXKS13iVkM3wH2Ge",
  "key10": "5pKNJ78i9asjttmhReQJCFHTXsCHx8tuYsCcqbJY1t4p2q1UQrroaCGuyw2QPNzpdeUzWqgEoUQz4SLgTLSk6Wym",
  "key11": "4nZBoxqoN2CXYnMS1ebw6YhnaXSdeno5Gv7idBCkJ9R8DsURmUGzcZY9GG42UDBBBFyCNh9QJJmoMo63JN1Z8xk2",
  "key12": "MsdmwRmw4ZRSoet3GUqjPWfstBxKoSuzjcgku2VBxSqmHetEmiBBTBCjFjYodBChwruSzb4AcxEsQFR1aSRGzLV",
  "key13": "2AQ9bmbmHm6QrsYisHEhGeviBvqYibZjvJHy5j48B4AK9pMvx53FgrY2Zxy6nVXfU9HcfqSZtv7cKjDLjRCC1eos",
  "key14": "5PUkHp5KBpD9a5v7pEKu5UydJm1npJvPqqu97cY9TnMNZuJPh9KpR2B4Z6qdyFASbYme1VakiGAdSVMG8dAebWSY",
  "key15": "BqkXipWjnuXaGPsyHF5rWSbHyTkJL3abqqFznFrVFLYDG1tS5QDjNYBizqy51tbchnTvmCJ89FzvWXhNGcPTNDF",
  "key16": "4eM4g1EbXAnC8QBLB73SZisa5H9ci5q2rcgjFg8M4hJspptg5kLD1s4rJ8tFjyHUFVscjjwDBibsYTURznaCsWZb",
  "key17": "299FfX4YVxsrJEqqsY46UioFKVvJthWT4JxgSdXCHfhcgYoHG36P9UsA5W3DJJYZiwkmweEbHhyPPXDJ13ucra9F",
  "key18": "3fWggAadyXR6cXUrTeyoD136Zv6ZXZPeJogw2ya9FHjG2LC4L2gyZnYP1db3LD6t9vazaZZfxzX6w5kRMwLTHpdv",
  "key19": "RunFr24gRGzpfsKD53eQibnDwLAoTWpzjxNQq3gVUg4FLmTGH3EpBtyTKaFTwL21H6B6esXZruHTwDjVqLAs2Kc",
  "key20": "67BE3kbgiucJqZVDUgd3HA5v3tPXCbK66KYG44PjQzEcJLxbSsE1GMG4ociQW4hL3cmbNVjvPWxhr2xUbkxGV8Ys",
  "key21": "31c5D68iAQZvnJiBaQDf4QRUGL5R1TdGmR5XP8kTHPjvHoEayNNydrZxeaKPtuxGW3upF69gR4dEQzQ1oajUtE7N",
  "key22": "4WCBd6JoCeaSvx8iSUGoNhKPuNSDLTguxujdx1eswVEfa6hUycsW1neSptiCYLeVjGjuYFe5W5x1Nt8tbcDJU2G6",
  "key23": "3NUewpYDwghaYcYymLz6gycPzMcGf5VqQSCU5x38vKay6cAA4JBxGzU3PBFQbiXiPth3ZrYep6jj8mLaue3LzoCe",
  "key24": "3sH7bdWMZgBXVzEQyem5hc331qqvMrNis4pKRfUVmu9j1Q8Wb3MRa1Gz9rWnhWSZBMJvcas8F6tEWuhr1uD2HmkS",
  "key25": "puWLTsTWdAonfXd78u1MPSw2bwEBGa8ZQaEfSecbjjsRaTgM7zwUrKYb1bt7Wo2Um9D6srCFfJ2waHLPGpACvPa",
  "key26": "3K61gJdxRr3RMWBMEPGQjLXw5F5vqN5GJbRukuKxvQGCrEdaRb1SLvHKm9LiAs7Q2ZV2Ck9DT4fjXzUA2beze9io",
  "key27": "w3YLUjPQL3bXKXJEhZnZUs7QH1UNtgAovF3bvoVHE1pKPNMW1LWrnxANNXvARZT5t2bhNtPDSCFU6Qpm1m3m55g",
  "key28": "659Ei33DLV9yTzT4KSyZb15iqLLuaJBecSjL4ajTf1hoWC2oKHCcnSbBVdabKV1itjcxGjMTsqdMVd4E8Y8sApmb",
  "key29": "f8qDNJGnLoJkSbj2oqLXmKnnLHWZvBoQwyg3navcY5Z6GurHYnJNySPZ4CTjLxhvteoQdNZcGWE4MJLKkRfb8Lc",
  "key30": "24vKGf9YuVxyK9y5iPVsUPbBbCWwqHzd5qDAVUSaCCVJX43P2CMTGt2tQe5N9p6BYwvRA55Mbz7qUXFqLhJaCeFh",
  "key31": "5oaPSJNbGffuNHDmv4D5F8LLLkwjHvhbo7S5r5ytK41sURHFhHNZ1S9MStxdBGBQ7vPncpsDYqazuG2PRV9QhDQk",
  "key32": "5wuEEdXaJJsqqtEiJTr5Undtpon6Cmv6qJ4TJd2WX5NL5ZGBTUttXsvk2vnuYUQwVNiGhErXoUDKKHWQYL63rMta",
  "key33": "23eVxnRv4st9xCfNHEpF5WTeEuJerVHywsgW6NxYEvYvGbeHzqYDhCjFXbZiZ2xzGLVixKCBvH55kTCMCdQ4zcK7",
  "key34": "5d1zMdBk131VDVrgmHcBNXSzWZ9y6bYuHkFnfn4itpy6GRYqoBEedcztP6CyogjpERnDzmKuPjDs8H8FCKheDhiY",
  "key35": "MNX5mvna1uB1p58wWmdsEkBuwn1cS3Zh4bUoNmBQgEaVxckHznqrJ6mJmAhAGb9MU1YZJfoYHdJMrRh52cGaicA",
  "key36": "3JHx3XUnJvH71GemL2YhERq8dAfQ1Mf3YyVo9kJNtLy3rw7syMpcQc6CENN9bsH2X5eTL7jwa5pkYRL4n2XtyiHJ",
  "key37": "4XSw8LH2PjTnTUKYrVKdsdUztkpfd7Nqy76N5gtafqrSjG2dYL193ndTcxwmkG1fx8Ywo8fHgEYLfc25KZQ6y8o9",
  "key38": "4um2PDrKe4KhPTy8vCJ9N7g3qpPjrizGy4RNMTMYS8MsWjG5s4QjF1TfQThjZTWi1XppYgULLsQfkhfke4Wmxx3J",
  "key39": "2gUw8HXQ4eE93mb9Bg5pczL1Qf8wrSbzP6q5cFRM5gdTe7sAKuyEHN69pCFv3k9R1GbSWbyRQrQnkPyD58b8hT9W",
  "key40": "5Xn338ZA1ST2cNMDdqtrRUtKB2qwtbaaa1EuCJMCxEHGiMkFot6rwb26sWpTGbfNb1JZCc6vVfqjjJLzU8SZxeqm",
  "key41": "pYBx1TiYca4RZGjEw54Vgx26J5eVw9QoYqLvaaXuQsCPvQEZkfq5oYVaXbjsF8dJBCJTYnnq4dpbTeKAE6WRzFD",
  "key42": "2pWji7G5b6D3BudeYKPPe7LDBGEky11KALmuuTmaWQJVQcmJ6Csx8ET8e1nqdcrgV6uvzyYeXEhx6ouHXPZNtCG4",
  "key43": "Euk5YtBim4LX7z2va1Qq9zd7H2F3wF8B23iPHwuBEV8b6w12RoaQSZdiZrm5nwF4T9JDW3nWPsPq7z7YhYesxX9"
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
