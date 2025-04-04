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
    "4gdxSRyidxtFpfzmE99DoouKnMBB1kVGbjg1ATeKhME579iZhks2hvBdQtVYve6oJBUpvzmL5q13GEpv7TWGWs7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8cuWKY2E4tEzynUGh2USaB8M3REChbcfsccVAxHDtP3k52APSgmfSrxydhRVUTMbyL254mcBu98XZHFrbYVXAJ",
  "key1": "3YSDReLPuqwRULELPmSFFUo85uu8Af9ksy4oDPUAK9aFFqZZCeFrLG8hb1sNGEcDHGXraAE2Ngrc6BZ5F6pE2M6h",
  "key2": "623ZuiJuPrmUMLYDiivrk9SJ4QgYDV3cpcV6RDpVmFkGjk1YqraLhd2QAF76cKGPSUwKDjwABaJ4rSbfcqrGvrJ",
  "key3": "5MMb86C4a4NabUCFx86PfDXuZ4pc6zRWZsbxW38KKoWPLstm2JA7nSuziMh72DC9YzvUpmAzpgMzWY6Goi9DJLF2",
  "key4": "4QcPhdkmyg5sToGNKTs18PMT4Ny6XwewCTnSEpgT1g3DVbHqr8Zz2SJiwbnXqW8umeNDnjCyRoejWb2xwZf6UJ75",
  "key5": "4JkZqevdPKDJm1nHNwceUn3WY4WuQT9tfzge8yBEikWEt6suewRGdz3SvcnK6Wq4QnNf6m6fkEJ8gxFevDLfWWue",
  "key6": "PSSbnSrumHCEAu4HUn1qh1Z5SUyTU1GFoeipvVhvGqqvGPrq7P9asJ5mH2F6R69ktXv9yzo52ycXVYoigaxKMk5",
  "key7": "2bHRwecCP1TwSK8kGMx8Fwy6idNUYpMqU6arCXJaBaZZJeGuyENJcmkN9ZrVFbgw7xrNHb1d4NQ1FCP3kbXdrW1c",
  "key8": "5GhVBseQP5svHQXNAR6ePGJ2Dp2w66vt3YGtNdwtXtDvW5ciGZnJ3cMFd8KSC6U1GhJRvWPbSviUZ4XygbaAwmkS",
  "key9": "SmSZwm3RW3shN2LQq1gGCpzLkPq29AJimbRtsDRKRdBrdv5CoqDQsNxTSSZBPYLkwmNYnEfTktGQGsTf8Cx1Bei",
  "key10": "5zZ6Smw9wYhoAk5gaDV78TVhQyWZHb4Crx7UV1QUUTA4VmtpS8eGhiZQyQaoSYsRT1qo7K1QN7M32mmBFKfAJQ4D",
  "key11": "Jrxfy5jEyVB3MxsaDPaAHeParom486C94tS1QEuvRRVE9gHrmvc5nguLWYGwymKbcWwBTtYoQSFL8Lk6SFxHPNt",
  "key12": "4iq9JesBhJXusRokaGuSg86MPMQSWNAf5MSQHCD4SY13jM7kd6rMKeBJDxbPrJ2Aov8ccBvsiwBLGLgeKhzG8SQi",
  "key13": "3RbckK2YAJgm7Q1qndgXtBYNQ3cf5QC9WWNBy3JhYasY9yBciswdquGFsVx5yqQzQhrfWtjpeCB3q6Wya4EvzESy",
  "key14": "5yH8j84aXMKe5CmNGZcH48Bj62dzWHomdfkuwnEyVxkMG1jmhiuQyw3uNDMNynBTQJdRHs7jfoCzjaZUKJnfGL4n",
  "key15": "4XbMvnJ7HMAEiBgSw7RiNxZVkpXPdri4m5V5xWvV7L6BbVwx4ozLQb5P7JQ6hHUbQsYDpC6JZwtNDcapuD377k2f",
  "key16": "5qx4aZ4DrfPYCqCU291MfLdpPBKgnqgaqr74pxPV1KAtXbLvrUKzH4z29Tjw3YhDbeRLFt3nCyX9JnhM2SakYYUB",
  "key17": "5w5KLuQ8upfThZaQNxo4dj7fwPUWy4gMWZPbghgF159z8qDW55KGyawXqYXr6aXUfmAt6f26bPWDPBCWC6k2vp6L",
  "key18": "PknzNeNpKwUdedqg3T6kv3D96ckAroDgUASySSDeiS8wnYsDLWdHknMBJqjd1Y5HdFsQcPMKYVrayPS51PpmGim",
  "key19": "22DL1wPHAyV9YU7xppcxCQkxXeUkyFSz8NG8DHJzySUVTknoYvibFCLABcBAr7TpwGgWMTVd2wBLj4wTGAQSZvPb",
  "key20": "5JRB8iTEbSxDgVRhFPet7kBqpxsEBzMMud7A1cPjqhrgScnf2FPHcyg2CgtRTAqJ53F18oYDey4bsixHPgybJVuY",
  "key21": "56XyRnGyEdWTK6wji6XzpNTDFcVzSCb4mDggy9YS5JcSS4L9MafEt8VL7a48HA3xeeeQyEGmvs8Vzhj6vbhjbVnk",
  "key22": "2juuifaUyW6hMTrNWfXp3Yh43okAe3X1wTkkpnC6JUopeAywNjwKnPHwyvpHfdTD4jEsvqBywZR86Vaf4hM4hePJ",
  "key23": "2oE4GgwccWMgt1JefKPYQ27qww8XUeBJueswBzuENaBFBt18RL18h9R1cdRh8kV1JpbHSCAqohm7pN61ZKQ7kxL4",
  "key24": "5VWv2pCGNvx56THPQ86CR97Hagcik4vHRDD4HMt8WZjRLZGzyGotdgyRbscw9GriXoA2udkK1vWe159LzZUtSjuX",
  "key25": "5SQgfUZzzDCkvsEJcQ4H3MFtBu3zY8YcFx4R3gM3UCLBQAQJGbTYr8uEx7RugBpfWQTVb61mNMxWsdQfhh4jHsYV",
  "key26": "2j4sQ6cSwRHZNNWp5j81GTFfzM9MmdkjBvtH7tTVSjDELmdK7KNBWyaqtAokhKQQpFYoGPGqiN6WY2hRe4DHAeg5",
  "key27": "9Eo5ZVcSHzTKNQh3n1jCMBAazVTDsttioxqoVJoNzjAPMpoV5V5Juue7Dp3UV9yvVgFSMAp1ZsYKNA3PQFtqh5f",
  "key28": "2eBm4MSx5bndZzdHi1kX1LaFAeGZKQqZPQeK2zXsrGzP8swVstMRrM37umZ93ik2BHREKEnYPATXf1Gyyt7zQT7q",
  "key29": "fUVKHnbKoebnyeTuvsdeqRtUhRdjWV2aB5Uf8QtMxwmEUTHFVK9XvjrKvaxVz3vhSeqSH9ja49wcF5BKtHZfAwH",
  "key30": "99ePdi1tci4kq9wvU8gLUBx5u2Kiyd5SpbtrdHNegdjYemw3qZLQMztzx99qoK34Zj6pcKLKXs4GNtwgXe94WiL",
  "key31": "5fYjsxtHEx2WbSUJETP6mhGx1J7coq3k3jpvsy77RQYqSHVVmBromptCqGC4C9JvMwzCuYggYsPtHYbmk2AoTQtU",
  "key32": "3h3RbD1Xh4LdikVVRo46yS8vx5tqXofoyY252VWQE7xgaGfaPCQZspgscwjKt5PzbfFDvT3M9Tda88zSAekb6kUK",
  "key33": "3GEdG9MmJ6pfKcwTWb1eqTYYJW2c5ELQMbC1WMkBkJ3z2tyQhhPUJeAgvG9kHjuKpgEckVwT4EekMcGBCaJ4P1Cs",
  "key34": "3NyYkCoqge76SP5MGGX25z7TrYEMgcL77cZGsKQRzMS644napxfNJWhfDK9trmMr6Hb9DvJyjvytVYnhzeKSwEva",
  "key35": "4p4X6cAxVfEfvuYmjVQNWpXjkymi8hWScAZz1qryUWzes17Wv2SuLUU7Mg7aFauhKmThwn9DkHKGVi7fUGx37CYx",
  "key36": "b5CC5affJLPEBbBqVShQWQqqr5YFXXVd2nFK2XZu6Pov62ywVa9ZeJ1xL5zJ5Tm3hXqWaKairXJ7WAGBPFWQ9HW",
  "key37": "5gFbafKzqgpAGR7taqBYkrdGu2dD87dsz3MHpdVNKBA6ZZErwMxM9a6vARQwRqMY1ApRKbhuP2qFZBVpnF4HebeV",
  "key38": "BRFRvzU8nL8i31AGgEWRdqTtSgx1H8zNqEzK6edDZJhdcLzgQfwSdnMFDRgWrctntzgoR8HhAoqoCPxmibPnaiS"
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
