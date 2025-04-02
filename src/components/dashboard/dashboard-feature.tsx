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
    "3BRFYJWrbKRn8PGnb3hqS7r7qzkpiBKYM5pYdwumvUfs5geuJgwuAzyXguQPpYmTJQTXD94prLd95AsC6DQnkS6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23AwACw21sX72L1Kw1Cbk7i7WFvnZKwxVHE51HEbiovw5ThoceufHCFjBUEKKEJENx2G8jHeyzzkgYDcPbkJWSqn",
  "key1": "4DdGcU7qXTSVnRBseVALxd1WYNpK65jk5VBNamPLzvMciiT12RoEreiALPMFowtMcb1AJueTaK8HbtD54LhsPFZH",
  "key2": "48Auee5tkj5oFqToKf1JP8e2FZLspLZMGPu5tNYy72GQfr75uMMRSKxcFkAMEHEQ6KhA3VhGzbmSCydfTGQtkg84",
  "key3": "5JmQr9C8qE43LHyQgBPAHAZpfNLrECWVAoENH9PPvkHhKvev3PxAYSZCzjrLqjK3qRw3MtwonDcvi9zva4cwE2Q8",
  "key4": "5eN6cHXhyTx1NrKJ17jWMH7N3rXhRhwpAszqrSZNAyrh6Sxg3xjLagHQXUfWPsKxGpyJZBJhsgSYnTvWKniePogD",
  "key5": "2kfk9mtbjFoJm5weAtQvcFgGNg5uFBVAGVdAaNg5AQFRwEfg2Qt3e6xndfeGqCacUyoqLiJfqYAeU4jtU6GbyEP1",
  "key6": "5ws9vUiHHVdvp7EX6EZsJaaS89HhDX7urK1XKij1zDQLycNDHcELX1YT4yXqQn2yrRSrhmzegdA4mwmxSdM8sNak",
  "key7": "2syxxNEkNywrN58DzYRjkudVjhir1rTtdbiYg5AfwJfL1mmWrD2eLzQyriAPeBDycxadqnYgAvJtstQt4gKwbZkb",
  "key8": "5o2nVVDqPBRXhQg9sSxbsFb2ckWJuJnFoeuRL61g32DecrzHfRzNab2XqqELJYTwyktjJqkhBwRBU54i4cVa1T7G",
  "key9": "5DE1xkdC1JyD4dhZhyuuQDAAWWUVSaPY7CoVKpe4exULSXYDMgxmNmgrpfc1RuCn5uhqzMCiqwazGY91wbntGB3P",
  "key10": "5o27Ayu8Eu12M3YkRFP6W6AqkFXF5XdpYtr3kap97UiQ13SgvW3e8huEYTUhf3Tw5DPFEXGa8EQdzQ3h8AT7TfdV",
  "key11": "3etsuTui7WZUFFUbFii5cFnkfdLEz3s6cPHAuiDMkCCkF9XpkD1xHHB5Y3JVpqFWrpjoBkXm2G42XmQex7gKCXWi",
  "key12": "3S2zTx1xCgE2Fy5prMZwb1DMRdG1Xpthuy5j4ahy947nKhtkZHS4dG1c7q2hfd8GWK7Xx1rDETEVQq8wCt1qr3Dz",
  "key13": "3fs9qSx5dU2qN8LBipwwLw6JWRG4XQRAFv9andkKMgmtWhqrV7CYi7QPYjkeecFNRGjjXDjtGfn1iNDdi1du8n3x",
  "key14": "2RPz9Yk8Rg8gi7m9smpNPmMEXBgKShVN8GMtPTKFwX6mVgUZTMqGf64MtExbiAfkMvFfdFPMeQ1KS4yZKpTkdt2W",
  "key15": "5fFuYnXgnQbXVdHb2VhLn4u3HQX95kLZtm8xNEU5HDdQTMYsB7edhqiobqqEBS9qGPgp4GmA2BPGBA2zawPqTGcj",
  "key16": "3WZrpLDWy8Cguped7KD3cNRrrhAvDtSePqbLJFoV7cDftADLdd9xGakq3sF2PwAEsor28Jk1ceA8kgRSAfG9cgyS",
  "key17": "45nCD14GxBFq5qLdshra8wQv5hipqyF5N5caJ5pef6puoi5JDU7vkAMwFhiHhE2o644ptbEKU7iiHfXWthxHQZhJ",
  "key18": "43ebDduRQPPAgKzEfKkKiYcnaMT6W3yRAFzauLMK7sA6bYMTGoMyv8bs18i3L33ECKzyCqgKitujStP45MMSUm8x",
  "key19": "2binkgcqdghymQBvmusqbsoXQZ6QSSdRjpfYZSKYrV3Z6dA8hx8aV8vjr68HYZTiGRm71jUFknHV1XJt9vbM3eKX",
  "key20": "4CK5JMXkNxLoxJZwR9a4ttVmaWzjWHDHqjV6wEPRAbPnZtpNuqWvtmpmaLnhGvoL1wB6mMmhK63rGQVodRTdAf27",
  "key21": "22DxjW4w8kqnisZPGWH9XRXW6pjX84UoopNNzfu4FXLpditgdUi3LajdDWRM9rB7foqVLmwnitz6oc5aAhXsb5NL",
  "key22": "3anWWCgM9wRZ876eNPqs9nK3pawqbsFC2UfkM1ycsi7C9pALJs1AkzgGv6zxQKvQ7F5iDkmMzjBg71HHVFp31wPy",
  "key23": "3Jn8Xtho6ZhoKcmR3bFLizJAWyKR2piLGkT5GfwTnjgZVVesBtuuKMe1ihat8UWu8EgEHh4dna2rGXqwaBQTVUqE",
  "key24": "3nGm2suUvPCnXf5Qy8BZCzeRhVJ61GMKeHqPuWe6yiPiWy3B63uV1vwCwEqxTsxey2TZRViTpkbe6pukd4YLgVZq",
  "key25": "5W5kmBab84CmRrZyFXcQFm1F8XrmuYRvgv4Vr6okiz4xVevbRfjr463ttRADeiNgo6MgUb2D1wP4dLAr6xj3u83b",
  "key26": "2ZM9r4Y9i2BFZgWX68pncsFpj6TjBttsWZKwVi5jA5CX3nmpPXk7peW5R1oiuDJwSJe8Wa13w7CS5qZ7ZDs7NWHF",
  "key27": "4QPD62JigitqigUjfMTXBXf48gast46Yr4g7GBfYJ11CTs8n99kMkTjVA17XG23ikGgVTie91vrAwoMniuskqcWi",
  "key28": "5xxJh6NN5UQVCbovirkH2GVDNSbPmLHm5Fwrj11pAcihUs9EX21Dv6pVhZxixs6jceq3RzuKbFakAnhP1jUELJAh",
  "key29": "2dpn8YUnwAWh5gMkyV4KLoVnfDiczFtSuyt1D7E2cKhzr3JYUiqrBnNn5ZrnZ2xzo6xZ8hFgGvtqwt2Xa6h75VmM",
  "key30": "4FVNfCzN4nZzVJyh5xeKZbwhWtKmStNEZiNvjgFDZCYRCjLVkP5CnafzYfb3uRDEFH28PxSq2PJXUu9XxTjQNJWv",
  "key31": "4R8oBFoDEfdh2ogQoJy1n2FpcZbCQuUKPjaMYRV4rv6GayHfa8oWztEuk8AwsWqoGAxSgVcaK4XxTRBvMwD7Qckw",
  "key32": "2LqMJBx1yDptf32vthwEzJoLxzsKpLkgxiro54HU9whwGEQJ3PRNrifqgXefiKQJmcTVPoaVrSMc1tDmAJR4S3LK",
  "key33": "62cEooK3V7P4mP7RnfsXs5HxD6RBVg3NgPmqUJMsJn3SRHNDhE8XZGQvgN3cxHNrgNsjsAzfxy1rEiDDU7YkKLCC",
  "key34": "5A6yrkdypDdb7BgTacgDKuVLmmKuhmmKtVwVMs1Hro41YuUyTFsaZxb16CyhAStcNG6PY2u77t5HJChWNJV69QoC",
  "key35": "7Ad4FCFVhmgADii4gn4FGZwJQk392edA18ritXFg2q8V5hfeAyx4cnEyFuy1Snq5QjHHVCySk2jfrFxbv8GYYzW",
  "key36": "5R5Mo4cAZjwEYiwLFvT5GaA4qhU8P2XRhugQjjvRniFXw23zqDPXvRW6Tv4sXd7noEgf2yp62GmCtspSyHUZai68",
  "key37": "4MBvtCDmSe6xuSwetiStQxnXFb6Wcgcmx8Zgh61zL5di9qd544CwgbM3WExv3muhJhzbymtbtrEdM31zbRouFvCU",
  "key38": "4L1d91nCaaVrWYJjQzfcYQyktLefJtHtyecUbGEWxCVJePprjQ2DfVZXTYETme21ENefL3RiePZ9oXDU1SNfSVpm",
  "key39": "2Ban614Tah23GRumUZ7Ltim8UR627V7Xgoc3WEEkCn5Pfe73ZGX2tgw5WuwmXMdZPDugERHCLTbAb98NFuTUZf9R",
  "key40": "2wPSHyUa6qNbQBm3hTVvhDp4RdXBj4Hh1JAoD1R46KGW9SPJ6Zfi9JGYYESeCF2S8gHL4PEKZcKid61nEvnDgAna",
  "key41": "4k2V15YBWtUpnG1V94NHH4cxtThbfLXtB2t7LyyaxSKxSqo9VYqd4L9kgD7tRsdqh8DMnFoRPCJYWqDmWNQomJvi",
  "key42": "3dsXA14BSL9QYpAMWrd6L8Dmo4LMSNnhVb4EC9d2pMXWLA6H4Yun2PfQNfG2QjjmJnPDWT6qmtC8amLk7fSMyz5Z",
  "key43": "hxmzqkBRzK8RHtpZEqqwwSa23dG6e4ENDarbt4Dshkw4Qmu5fTLyDojyLLWZDK23ZqdfcjBRdfddZeU7vN4JTZY",
  "key44": "4zs7igMip8534J7kiGBSnfHULKTv1E3QXnsidVhL1ye1h4zG9FHKzwtUtQwVrNoiWTRjZcVmJMYdzy5Az7AmymPy",
  "key45": "TtaWBN7v4opVMhCyLDrJKdjjmzZURGiWx2tbk45YhNtMVRvwEQinQKpa9nFBXSKQfam2KsnuXvYGJbTWCKgZg8T",
  "key46": "4aTwPUCiBN4h9JoBFWZEfjkvZPQ8wXUuoq8GnKA4RoEjf1Ao7SZmg9BfGJvGhgG3wrx2jKwWL3XLWCj4FNKtgvuw",
  "key47": "31Tdy2DNobqkHjVgbPYRszkPg6zqFTqMDBfvicnrvjHYDWH4cbdCth3yux778iwuFP78AbJuPtZbyBMZy37yeuKN",
  "key48": "5zt2wyxM91sWPEzPQwKvBL2HdUNV86bKbuEg4WSakgeYsdxGy64SbyExSBx3oY7fsCjYLjJdgbhryghBuqgsq3jf",
  "key49": "3wQqdxAwgoMVu6BMk8vdz1DZi7Jkgx1wmvuFHMhVqXpVNVuDJaPAPsaSKytDbrMz4PHganLkmKJuVs6Kj8HkvhqL"
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
