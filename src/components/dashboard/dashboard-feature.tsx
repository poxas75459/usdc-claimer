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
    "u1WfgevBUfeaFqjmaUESH92ubyMsa5pFsVgkYvLgV1i9X4tWdmzw8xuw8vrHFwXB5sCuhJinEA4Lbqv8fF6JenH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mKvcEwED3ethwof5pn248TZpNnYypfj7rp6nSGJwCJi6FAhh2DmCPr82PpfZjLoRkun9MvZhLdoqTkELy5WYDfp",
  "key1": "3SfCqQ5BHE7ACgHH9Z3vzAFVKZ5NuWzeSbzLdYCLsJ8yDH4zYnu2Y62SQS3M2jN3StFHQweX8X3ZTSW8JLRZTWy9",
  "key2": "5MrVwjuY51vYkHRmEsoUQa4urBtPXafKXRwAWEUfGn4cptHmJFuVVLDk3rrngDTzPvppJ48f91FZnNqwVMpMVDfx",
  "key3": "qmyo9Davdy4FAkfid6mSAU5ywXgQ5PUxvd1ju4mnF6wHyumKnBziUUiCNye3sShxDae8K4KrEd2Lq9mNQeP1vZe",
  "key4": "4HX6nJB7cTeXCDTkLJ2zhct3S5LkxGfbNyGqXeWMEb56JFx2K9kWxzGCLQFgPwvmcbYXJngRaxwFG87h39Lv5j4U",
  "key5": "3c28smCQtfKTBc5e3rrNKBhWU3mauAz8A3aCrqFi7hXR2T25b7SCo4gh3mk4dUhUfgQsib1CdEXCRHm3LkZgiKS9",
  "key6": "66s1erEjQzv8USxtmXm156f8C7NGu9BwYKbBbb6ZKjLF4cbroD5PkJQ6yaPmWrqFZRhynjeU7o7mm59o2r3W9esr",
  "key7": "2ifuggbCzthMXCs2ChaAJmd2VqJazUGve2ppmKnCkWZ85KPeh6zSN44SKLf94x7KFzVySsdX4AgzaqjvTqipnwYR",
  "key8": "2CzmGqp3WYYHQ3m9J5Qvnq4aDi1WUqkRMEJsE6wT8rkqSViYCiYwSXvRLfWosV26RXFbL1HKuTZDiuvab84KVf3U",
  "key9": "SGqgpFAxvvP7fnKQRKn8jtHdZE9vD6JtEskNwxdrEJWJqqCnmsmF7zq5vgRZEAFWXTMSeTVga4EC18JK64uGmij",
  "key10": "2QtMiGpyLdc8hLxs2wCGAbMyENzXMEAPmZ8PBnptqTSWPhLZF1mAAva9YKv3XQtRTULEozjnPnFaBbZbK8LZZGEH",
  "key11": "341UYPHLssPo4iBvnE2VvKS5Wk2Cg9EP1MmAYLbZpkgvnS3UvhkjWdRnPzpV5fQmdsioXFdg588RcyntG5Vnm379",
  "key12": "3VBN9w2jCWd5LcrDpsWyt8FvQ9rAK1MkrzPtThi1k4pwK9qMX4Dbuu7BTfcqugMPyTqjWUS2ZJ3hpWggn61mT5ns",
  "key13": "2QHGVAwfL4yQ1PTgAFfg4kxgoMVoR4i3vJwy8Xxmr9Kq8k3yP9JvKfJuhjBRrHb8mCA84cWWz8BoZVoGAriBmvFJ",
  "key14": "48X5aNiLuGdDk3pmqFE6k29hABrVz75FGodMRiaQqspfFsZB7NtQDGyrvFWxaBVtFpKo2Ufuk2SugxVY7CRwwCzA",
  "key15": "2bwZCczEz8yWXbuxwGF2wpJdzKUSeBVSKXEX7zZ2atJZvRfHLQbUFhRHA9tamSkXpfCH6xgr8ErLjiT6LEMKTvcP",
  "key16": "61Y4Md756w3bW9FyhX5DLYLQbjuTdGTSv9UiRYHBVaLBWxMAk1VJzKCcnUz8qHks5wcQyFBQtNqmKNtJFfRKX3r4",
  "key17": "4Wh9aCQ9WjYSTWYAbtU1ZQCYybWWYcn4L6XyJah8jCHLBpbzZ5RUBhjV6bzgB6g545E29U9Rs9jeSKY59MVb8MAJ",
  "key18": "Jp4KVMsLoWwMKLQ3R3JZSibd9TiCxUUXBX2zPPo3iiy68gV9cWeX1tYKFm4mB7f11QAEFkdnV3y7F5G9iQ5Godq",
  "key19": "3ryRMndtuSs5CZP3ymkKo6qCjKjNLfCoAh9x3te3E6i2pY1f89CEUTQsD2RSBmvg3Pf8tMK7m21pfNt6HkEhJPTS",
  "key20": "Y4sdwAx59YfudRb8SN7EnRenskb9FgkJtnHRGY8vGSQ4HsdC8H3AsdF2ZWuyQGPWPktnrkcTnHekoeXxQ2AMUXA",
  "key21": "3VKU54dkmektZBemNRimZJRCYwnPRPctwa3CZm34BzVkReDAo57c5isi7SahnA89Kov4hCmj58z3jsYX2iEszk6G",
  "key22": "5t6cN2fwhfK4Jpqq3sVvByQ74f6ukE5Uaa7r4r6YGcRQkSh4Ho4SCxK847EC2ECbZpoFX7sCSvvaUySzK5A796aK",
  "key23": "2Hbc6crDb4FpH5SVQFZ45gE9xpUow9W2HMzMbP2aWPZzzJXTPcQ6R7HuQU22ErH5MZVF9b9EpZMoSbsrn1FS5tGD",
  "key24": "SjYGYqw1okGxrvrMJANj1t3axT4QSAmjBSUKrgM3CoSHzfBP6YPdxp92v1idHeTvBEXkyhWfoTy6ntehAgQHPa4",
  "key25": "49U7kFyhdYc3FJ1ZLhDL1eGBRBatRR3gZhZ4bA6aoQQ1JbaRhKEBxcEBBPsLxgfF1gXHZELsApNE7QV5YroBHVcg",
  "key26": "2cWJTCGWKdXor5SW2ezNcKsxtDBSy9ERfNmzxN3SfsfZWZKDGrCjMfrjmvfR4EZz7fQweaeScpn4f3asMMELbDs9",
  "key27": "4dEq5638Q6Jz8yRsFp52CjJbN2d9HtUtgEteHiLGmfDvzgwrVBJHaH8fHqtDjGZy5hBn95QeayX87S8FwreZ4eAo",
  "key28": "UgPMwZu24uNaGUJ7yKsDSbjZEUNB4uGimjSxgRTuqJaU768sWA8T5S2ZEFVUTjoLcWsmiCuAesc7BYaeikYnA4b",
  "key29": "2FASWvztDoBy4ooCrUuP9PaywV5ysmjh9emTu6cJMZGSUPKzgU3NFika7h5HVePA3FycmWW4jNpuDTgzNr9H1M8X",
  "key30": "khRBkWSMMaDEzNhQpmVgaAR3orCC4WU3gigRugyWKDpahSkbqiJxb4teY25oQQvokx1WQ1Hr6N8EksVjsdLAcYu",
  "key31": "3gj32CAGn9zULiDBu74VD5WucmUCy9FhYQLz35k9BT7mWXDGnsS5XsQ3D9eBC4xTWcjEzy4tUWZvny4yyYT63RJX",
  "key32": "2hQ4Y9ASvDYZuBhi4aZrtiDpEGE5QWyi2gpVLiaj5HGZDpJbaTKr4ryYtfha84mBXLB3dzy4ocbADybU6Pmvwt7w",
  "key33": "41JuSodTFpXjRT68XopoBmNyhqeqCFH56RcLQKayu3i3iaGt1tRJEoqzHdFhEhTVx188yD4HQWpEehjUXbazMduV",
  "key34": "5R8r7BWjAQu8FtMRVN6HViNwFSFaJnU6nVsmjeC6dpkvW2tNNfwpDoFYgEzDhWB5XGp4JK2xjjNNZzBrWN6LWnuP",
  "key35": "3e815ar6WRg5mvoMomC6sKoA6BBGGKmWCmHA8n8hoiFdiCkkYvpeEzn9Unb5BaEbsD93jJ1BeuE9U8S6WnJfRcEH",
  "key36": "2NoFMRxn3bymB34HkHxhBMCUHzMKHxbXkHFaHZJxM5nVELsh1ChHnUWS2FV2TANSU5Kp8sLNhA8DWRuju31y9nbT",
  "key37": "5QKUKRV3k96JMPnEVsvWqyVrFxN1fPffmBL3LBVZZ8RJB5HQrd1PVZqbsJYxYrmoPyXpNAHDDCL47hqJFe2GKpcr",
  "key38": "2sZDk2hhEZfGWTDP4Yfu4JP3VJ4e74xxnCYXLU2AM1SGGhx5sUVWrNmkoDW8rHJjcviJH5De8GkcRkUANELGwgTJ",
  "key39": "5eG61hH9hXh7tVx8BWS2kTmAqk6fLvSLuZnFVdXzMV4bu7rucDq5MfEjMdBJZfj8xyoXq2wvs5HZQnNPLGTtCmLE",
  "key40": "5mrTQ7mqCFPXmpbrTLkUa7Kb8K4NpyC9etQx6CAH6i4VtKbU8ebZ5s48m975N4WD9dEPA7LijEPAfdyS6GB8uume",
  "key41": "3GB6B1wqS2W6jXXBieZyNWgVjaGMnmD1UE7qfJPS5kCQts4Tgd4SgHuJc9SCzakeUHZnEozKjGtmFGdKVsefJHZB",
  "key42": "3B4vffhgJCTCdhZsvQFqWPL6he6fxbvGmBALuSsbGuyrS7HBRpLtqSxi4i6g6MdY3AuHSfs5FL5tcgQm96PFDbWt",
  "key43": "5oCoVGpWJfUnyaV7XQoQMjRCdEU56CxwMpcuVk2DdNnCjyxk8ffwNnsjZSoYY9CaLhSVi1u3yYeanzF6rZRpJB67",
  "key44": "53LkxdEqEnwqRfEYBb1WhYmtyec8ovX9yzuWJm95Du37vJiG6eZQoV5jfZVpv42UTBs8WPezMNqPVYJSMEVxCZWZ",
  "key45": "Dxe5H7ZpLmTRZb7CqS7tRSS5rnEh5dvmmDMmAuu8EXCfGtgHCpJEjxXz5biPpJQi6BbmsBey3uk6wMPu57bjrrT",
  "key46": "3kwSwgyL2cSWMRsqPQTgy7HVjEkaxtdSJd8RHuh8iAhpWJw5y2hBwmpidVP4nYYB45Xz2TGNm4QjQQ2nAYBZ28Eo"
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
