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
    "39g7fFKow42Pg2EjmToRYCSbwQCiTtQniM3ynt3UxTzjfGTUjKEpVXM2joD7X5q9MHMyaNADHQZ5DKjbtDrRVMeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26m68oqMdLbpcr4o5LAVF5u17m43epggWHAiL6QgonMPystNnT51ncUZiHBW6Scjrd243mNzzSW2uzZE6fGnCBmL",
  "key1": "2HZ9MQqr8efqzuiycGL3Ah3PZ2uRVmdd2Ao7bLPGXptZmi7aGkq3jCiHwTv6LM8y5hHNs9NmbBLVePqwBZ4SiMWm",
  "key2": "nrmHyeLKT5LBWd7F33hmbDUUjXmARNFGRJUrwWpdjHwRGcA9Dvcb5LPmPe9vNyHVxwLzqCWfQgef6bRNoNHJGu9",
  "key3": "48SwwCaBpm5hLmuTW2RkZaDQpoJk2RErSp7e5XLYZvSj8ysgRdmktp2ty59UgA7QN9QXs5MVRwGjjUeYLQEPikgU",
  "key4": "4Hwk74EVg9948By1Rybh9n16jm3fYJ6WPnmCWfgrFh4Qh15UNp8TVvArTpBqkjmdUXwW22NZy7Nh1NethbWEwiwg",
  "key5": "5KAvSEigFYRQVVLBD2DhMv8jjCyw3n99Ae2rKeFqHnpygeUyw7ZTMWBZiB8Qd3gNBPWCtZkq3B27XV6UoiNgnXJ6",
  "key6": "D4DX4PGDwjAN8HEzayirPtXpmGN2CMQXhc74AA3jqBgybb1smfS13Xb6UZBjDsUvKbDo4Aytq843sDQrRc1VgdD",
  "key7": "3A2JhL2pXUKgofV1brY3Wp4v8qCgSpJ7ZKN4hZFJ6EiQUpQjWHkPBppcYNCoTfes76joGW6FeXK9WMKsDWoZ7dar",
  "key8": "5wRw8JSrzWHcGbsEUaqzhmMXXYfJ4LM3g2mvif8VGYRYCsLy4NuZBBvu1V7PGe4CgaLFrN2xSP6Mm5h5pppy2mir",
  "key9": "4hCxXiBDLqvM9Gqv2L4MgDpT6PjC1uZ4iZ23YFtxGjXe8K6QbA5EWbrzgc3uw9N27D8UGLfZkHi2PqLwYekP1a2y",
  "key10": "3hDqQEYCAE8rjncTq8AX8qMW9ribcM3TbJPMnzFdSKL3jcRe1XwBgqjfU53TH7tuMCU7zYoejPgxhEaaZ9Juv4fn",
  "key11": "394SzuU3jPRERrDK3wQp4uahPwu3BveiRPQfpibG3LxfSBoHSdUJ3geXtM61viRgASThuxfdfibtZYLHKDNyEDmE",
  "key12": "38opQPwV1g2z9H1ntZiEiAPevh7PyarB1XD6kKfvKLNpyhfhqZrNGsatzhFqSpUjZCQFpXN8RDh5Syeycj8VXzdM",
  "key13": "3je4KBknFDYPk15MAbmNY899b4TTNGEEwAbfySJQRmaiRZfPdUvFbeLWzhgWmb7zG16aSYhLf1QxH9zjuSyZVUcS",
  "key14": "49zUbLNaqtPw9DtsW76UagJKcAeH2MwkGJzoF6AbBugzVv3eoGT6Ymxh2uFVPRvux8vepkpnKuTCVoFGCYjCvQ4B",
  "key15": "2byg7tCfZaFvqiPXJ5hVsAasRavboXHtTDw99BHSe6W3yC4dc7jEHAG4sM97HBJGdbGqQ7MMKLNTqS5ySoGRr3um",
  "key16": "2mVdWuUQ9Tz3WhXF9X9rDtigUe5HqBW5PT34QYywdfDVUVhZPtgkc2cDqnsgo6Nf2RkcMckQw98Z3Kh12DbDFpY9",
  "key17": "4MZ3WUMCSoiszcLm7izmkGHYyTMaCFMowZ7AWfE8xXGcb9uUJTW4Zwv8FEGoZeiZCCFXkkzvcGTtCmjiXKb6XnbN",
  "key18": "5nuJDFeqtP2zX2wPTZvpf2yApYxuNuSa5VmiemMamAsg18ywG7mgRd5Uc9H8TMh1U4nGmW6M9wbTdcSDYHWZqeVf",
  "key19": "2iDuMMV7PKsvoTaJTxaE6ctEbf8G8xTWJfai33H1mwfFDHZcEoDwELMZDDDbgzpdANFUSF1cr1EHtiDLxWi2RZqS",
  "key20": "3WhWqAjk8qJjuXRyhgYm6AHk8RfZH8sw6wWmwqb5JHnENsyky3mw1wfzY1Kt4UpNroycpymuJCARppuq4wocK8WF",
  "key21": "3trMKyYfKb25qJZ77RUymjMuH6ZEaC3u5YHQbLxviZwawAgyrPAeu1F2mXf1s4uM3MFtKoZfyu5gQiU6siNVmPEr",
  "key22": "KfKXUkq1zPdysLwTKwwW4LNjggYkzZ9PCBUE44KovxBCxFgAhBnoiYCfEBg798wfeXUtBscdmkNNREAgyQEnCiW",
  "key23": "wDFjeonajcNFkSQjtSkjk8VxNWqEqdgFzeL7tJRbHuK6vmPJ1dKhPvra4zt9aDSAZKXZFY85FygUzDhdBpJeBJx",
  "key24": "2VVNJ21d9sMznHLK5UdcRxvPVZyxYsEYVyVKE2xr1ccRP263qe5vzh4tcxkoGnsqUtamiLZ3vMpEQ2jfqbZYE7iv",
  "key25": "4upcSr6TQ9W9Vf4F3fJuWWjS6wW8nuQ6nMQ1oGCMV2NjivYw6H1gG3mh7V8DNPYgrky3Sk1p2pek11A9AZ5YQBnS",
  "key26": "2og1yys5CNjpWecNizAfJrtRzc4FiHrsKYqQE3BHvK4Jjqvubqzun4zNCsVZEwXUEcDDf9NU5hqTsdME9hA8nHmG",
  "key27": "5zuWEJoNJckiDDNF1CC6jPZxZRyc3iuwBTEuZ8vTxUVz9FZfqpnZyaAL5GT2hknny5LzPLqpuJvzUSyCY3jwMWnH",
  "key28": "5Rce4yivhrHKaqwJKQ3jYMn6bBaJK6KCRs9DVJbhXPx2aKSwrccqz8wu3HuSXFPtyy5pBmpJFyaG9KHwN73DLJ6L",
  "key29": "3LnoVnJvKK3GAcZGobzvBAzD2FN35E4XJAMmBgYh9e38FZpTRmztxyAHahi2yjqPpoHECV74dbrDRPMZN8HR3dLJ",
  "key30": "2soyCFhfEoLB7A4fhBNfi262UFmoQs4WARWNknjXVqwPAsQd1yS4jSEg2xtF3pNkRJBnDTpvoAtek2rwre61qJdK",
  "key31": "5dXyr1uz6hsyFBjzhoBjemD7NuihmYqhx8UEuE7jvHnFRCzWoDkzBS41gJmTW4SMxRm33CYKjXVz9qmxvh5qEyVJ",
  "key32": "41V5JgY5fih9g3EtsZfLoXctTAbU5y2MoheXNdLrAVXFX1UmnaVTNnKWkeFE1gCm3kt3Wzb3SaY5guXkfXEL4TDe",
  "key33": "62XqsKKszZVbf9p9h54HL84XqtWQBr5pAJ1uAHVLzXEaFAwtpaNer42LX2eizfBYYZXXTn256LkB95HYJneG3TnB",
  "key34": "4F8zZSt9GxWEPX1JjCPuw543VD48No7i56WHENpRaC6kSSEoWPjs97TYQpfE3e7LviMRWK7tpSDSk4Knqj6UpF6p",
  "key35": "23LmxGt8nPS8TZmygUS94faksrP4vbvPsPNH3PGiBfS6LywB8kG973wj3yhMSzUEgctsgyvu85mjWYM8J7irgic5",
  "key36": "tmNAhP6pSFLPSD5L2YhQwxqZC2G5QxNssX2ASKvVm4AuPkHtGLdyVhy8CqN6BJpU82mSmAjYmz2f7ooeD7XLStc",
  "key37": "2Vrd3236Q4h7qprLRh71nf8qvFhSePdDFGq25vyXXdXnMgk4YGZApU5m9ciDhRd8xmp2V7hEMMVrfsm8Mav9AeLi",
  "key38": "AokAxdg5iZNbBE3jUsSd3VxxMkLWo5w7X7CZPhS1Jpv3H5k52tMD6DCjjhL7hHrTQPmoeBf5ibAyh3ngm91YB4K",
  "key39": "5aD83tsEXH412pv75m31Rr2V77CAQUfqoYkhiJLNtEQBuenqZcTLH8JoEFTsykwgXKawad5B34aN1eHbEiK7zB79",
  "key40": "44pRmYKpXue2v2LZgPjqzbR9gXMKqVud2Znhap2PbGLvkDrN7Ua7uwEE1YtrYTAH45temvWASTngzaDGHPpQywyh",
  "key41": "2rEUUZXHB8BZ71z5pJ9znEevzznzLWxa6eHPhFpKz6fp691wGgwpT46byPwoNWQZQSAmTyLdKp56tKXf4BVejawp",
  "key42": "37J4ffrRMTfrUxcVHbiNMWfbrH76SGPTkmRx5oum8tqfx4WVXCYVqo9HhYCtztSqJuJ1CX9SgGAeZqRquTwfXe6H",
  "key43": "5kL1PPui3wx8bQJ9rMnvxJkLdacjagK76u43K9VKNJaid8M3Wt8Um3CeMqNihZx9xLNRBNKKifT3tyUWXUVDLh9J",
  "key44": "47gExQUvXpmTbnaowESJop6KiHqCYsgeKJ34mroj5mNNo3S8KrQkCtAky9XJETUmufx8s1CvGegGdxKUr5WnntXZ"
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
