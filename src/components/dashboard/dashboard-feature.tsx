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
    "4mSube73q2dXjmGyJPNToGU8fwF6ZcMV8rgifgga8rkYdQJtuxKXPo22reT23qgv2cYN7GB4uxZbcWweUuwNypCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t6k4WT1yTXArrv1nqGYFhzfWZMapova1WkZmVC5ueYTkjc8gV3v8NJ3jmtETjXoGnp2dJrZYakFp33QP8VQtQZU",
  "key1": "Xcsj6qao2kPrsKDSVZkUQive91XPr3em5H2DSqvwXQaD7Rbt5CQtkc6bo66nFVGT5jU6f2R3oMRm7LAX1E5HUyV",
  "key2": "2f5yNSiH9B7Ukpozf3kAmZUG9ViwniPVqLHpXPHZuRJmYgd33QUnRqKJ6tzrhAm5LuNwB4ohj9uxqbTAwJZqEzGP",
  "key3": "8hLXTEdiuM2WBr9y8MbxQhciWDsxwrC58J59b36W532q838vEku72y2tfT1YedFboJ7zwgkWyBnuKJyTSSWdsZx",
  "key4": "44uMaMWq6GEuMuDzEvBwoToVaSJk7fRJJVE6wXmdua8m1vzdhFn6v5a29jxUsj1yWJV5vjJxMGirTKPg8NqeBaCW",
  "key5": "3oQLjZwiFpVTXMcXrpDYqMNx15ekgEXLPxyAnd8XjzmjTEzngxjnaAdp8QJsa68BhurU1xkAGJh7krsxViYFCY7S",
  "key6": "4thyifBMmbYxWsdVccMyMMybfb4RL1aPQgvhMFYGZ65BYJpSR9PJa5WT1sy2mMdKFTEx1wAAtqxmiic56bgigGVw",
  "key7": "3RxVLvQ7MARm9f8vvC8kJ7bk6z8JNz4fP9Bt4PeKJJttbuY27bTMbiaG8qMBMWB75uRvJHJMPkApBvaPzjqe294j",
  "key8": "rtG6vj9rzhEhj3P7FcvZjFfv5T4xV7W8U7jPiYAz2J3SNCYXyinsN7XYEcwnQko4qa5o5jgsZSVvNsYHjJEXvwD",
  "key9": "3SNUQwsYhmTQJqXmQFrjHkHBhJJh9JXU1txi1Vc1KRuTKwk4Wp8ojemZCssenFGFNTwSSjMEwyGP24aWM7Yy79bh",
  "key10": "4bDRzjkr6WE1NSe4CuvEmT2f9hfDXXyFxDq9GRiB9MfwtAjATtQfMzjxuYsWgk8386jVQjAxUwSJ9PXXW1jm7KQx",
  "key11": "3V3GDVz1n3KAuQn9y25dcToC67qbgEYUZfqn7GrtWAEU9ecAk7V8AQM7pmaqpL354ZTHGDLJ62PbyVwDznR6RUqe",
  "key12": "mdgc6wvgePkiPMcVNp2gjGPgC99n6EVudfC2t36E3zyh1pssK3hqXhqJeemmt4ry1NXCMG4FbXz55EbDeG2mv4i",
  "key13": "4jkcidH8yb2ootaRYcNzbzzgCUV5svwTEFcE9TrF2e4UVzKfjxHfPVXFsNu9LGFWVaucwybAptsoMoa2Rq89RyF6",
  "key14": "a22akHUH3L8p4unwWu2VoBWJRozSroL5bysC2L1ChApbTmaHQfiTGTegmhw6dBQkRaCkwwnVX8J38VUpHAumSKR",
  "key15": "5KKRSDDAcnV9pT4C8KUJf6YgQks1Dq78ftqeAWjSFDQFDn3QU5wfrwxcpw56Lwy4iBLheddByY7gN5Y3yVUkVZHm",
  "key16": "4zRnurhtq2mxk4x8gwU1VnSvsNWjgfCRrguQSppSWZM4g5a5XC7MfbkyUUP6abmemxpRNXrXoYAsHrYaGkj45WjW",
  "key17": "tZsBsHxY4M8MLoYm1kd4gs55ahUZcgoxnKyhfFkj7qC1sJPoCBPXwA5VYVxUYcNpZbNVMHwWgEzKeC2WAeupWCu",
  "key18": "knzWfNFH8BYjFPmDH6ChR9PLXGuiBsTuug6xDvjAZo7HtGVYGzQB1gsdpK4DH5CRzoKagVoxpzYk4kpjTXAiFce",
  "key19": "4GTTNNx4s7fHSZRiX3UL8hNxyME7XX12WgsEwadUYDrJfaAXXhSpbyL6j8eLYtdX34VxUmkhj4ym7B18C85uLKaD",
  "key20": "57rxSm8cQWWyAjFg1ifjPcgwE1HDxVia4TkQGNd2fP3UMKvH8kY8XtzGudoJ7F7E3ZCfQDeumMhLNUx4ZcqN2KKG",
  "key21": "2UDc6J4bBKJgmn3Th5obGueDYirFRVyLEB93oF17UfAcwAawaYmpUaZBSZL813LXPbVwRNEs9WMfbkbQ4ZZdr2gq",
  "key22": "2xfFDQc6YXbCGe6S78qC5Hmz6jMgdw24LmC9yfrr62Jwc2eDxC7mwWnArQFPc3g9tpodFjPH4n3EoNrkLNaupYaz",
  "key23": "2ZYkLYobsP2U6XjmHZSTyhyBUc6ztPXXFv2TYZWmuDfaSyn3A23h5zCgqdDVi2Zd2Lqbn7E8txbgAeiSsETajHad",
  "key24": "4AbwNKSLhmjGRJGpvhuKGiZ2XDMnnKRtXmjWPrj5cg6iDzJAc4h2rzoCpfoZKtKUboCckMFTM7sTNHnen58TUunU",
  "key25": "3axq8ZDRfti3Kgkrs5JYwJQbfzHvnWo2jZYzgBqSxkxFTtpoKrKL9XHiiymtkMbefzE2hz2PugyztUxvfntYvs3Y",
  "key26": "DpVJ6AxJPEY14aXSCX7XTx8E2zBp6ubWLeHHFMqZNqpWMrCyvz8setH38HG8rNcvL8FHqg55MNEPK3GRL6GCsaP",
  "key27": "26c6m3n1iU7ANXMPjQ5WF3gHiJaABuKc4f87xiu61rrifRRAF6dUNqvQgY64vjS8Fn3eiwXgwwGnoWc8Av3BnppK",
  "key28": "4V3i5X4Chmw8knRpWQbVPCLR9TjHoTUoyk9i9pWLwKgTkZvHPXqv2xg14sS2VFfYncPjJZwSpjR3KztaBxPVzABb",
  "key29": "tAwisEki8AKCsQtgtujfq2QtZxfz9TsXNF2fp1pphXnwpBNY7EiAqmDRCQ932wr8jQPCtoijg2k7JhEVjyZC25S",
  "key30": "2n7Q1aJrvujrAESydGVCLnSDpeEkQWTHbmkoq1DrKi2iWWHT4Zp5amZEBZLjjxMFd2YbyMRMzhqjDbUYqh99vBPz",
  "key31": "2XJnUWjX5ghef7Fy3fSWRSJ279pzJkLSrzJNkrEXaNTcRksguC985Rs8BDRnKBhhLwV5mh3iSkHPbKmR2f6Woa3q",
  "key32": "3yHF1SaKvWArnmpSeCTvnHaPNc4M9ascnzyE4okekB6Me3o11QxxcVjHa4RKKpqr1oC5VYW7k7cCzN1nwRGGyr2k",
  "key33": "2czVdKCLoy2E6ipJmxS4APEi5JmXHzufM6m4rE1gkzX7pKLauKB94ENt23aAXwH2XuN1KnjdYRNYWUudXdq1JbyR",
  "key34": "61uEKNXiLPzguD5bFdnwXhmcpombficGfxCoo61EDwKvVWzgU9vcZcVZ8fqLsDRrn13mQyKD6gs7cJziqmBnu2cK",
  "key35": "4CGgtSDBE3VVH98ZXBayBpbMHQT6Ays8arGmmGGRGTf2FXs8m16tBN4k3Z8UmSGmWoQbmkuBfbBXk8jTFskazfAK",
  "key36": "2gxr3kUZShJeunbxeTgYRRP5PV8P5Epibc75hWU3ak9Cnve1iLeRPD7VCau44ik3EdCpfk5q2ZSt1PhEPLzjMqVu",
  "key37": "2iUmgoVUuLNi6o5kXGzwGCHZwv4vQWNZBxunQs1PqYvWofP6zFc5haCD92mZL4yDSoaSqnSSyA5oq9vn8BbzePBu",
  "key38": "429MRirXk9NgTL7RxUCUUXfxu1p5Gfq3RFNTmhyaRmaSMSARHuXzikHAXDigs6kocDNZcSkNp2ZDCTuVdGHKHnoS",
  "key39": "3KswTckYZW73gZNhk1DzZXpax8FfYLJ9aZhLEXLwVjk18YpkqsTEaaXPn6XLeTCbNVTxC5L39guzNrvxNuoywaUa",
  "key40": "KRhEjLfhXLSzNGGM9V7o4nky4wxYZ66HWq9rWZuADTSnnYxMjqoaktN3WZgVGaL5pR6KzHk4R6wyQ18NJ3qwtbk",
  "key41": "5KG5QD4QABLem7LEmgVKWvtMaJh4oAMknQRg525seEw4DBChrJTBSKAfnTSMSvWNPCtV2KNkGp5EQmrbGnWVDiyD",
  "key42": "NvJtQ2htrRKpziff81Ki31umpRRp3aVumnMBpzWyuDdBPwGkAaKZRVsTjV75NbexT9t6yFxhdpZpNYRKRtt8VhE"
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
