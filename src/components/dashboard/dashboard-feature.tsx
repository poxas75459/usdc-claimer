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
    "MpkJQ4KMfHoUXMhm9x2p2h7CTTynwYARaR4wyY5k5y33dmE67dXcNcZeQWS1WKMn83dyf5KzjCtito2vCrfJdoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tcx99jjXMgaV1djcSBLXSmG6GznmiubyWf5qfEG4qpNVwW4cT5RaC9M8wcXuftskbFR7FjiNztE71UVzBgApTEL",
  "key1": "YzHWX5RrceCws4F83EFoentv34KrPT5yxBrjSypVHGNKPJMHQfa64GcmfQQMhujsgPKYASL3PzoMsM8wQkhNa9L",
  "key2": "3KUNPNE4G8oET7WQCX7i7ZwZx77EeVsKVP5BWJpTdE1Ekvov5urD4NiWHZ97q8RmTiS5m1sc9VLegcKmpVhGN5sn",
  "key3": "5mbCo3BtyN9uKBwL2Ph9m9tscPRPv81LH9kq7bkkC3bzf4qgKAfJLCxDSUgewfytXrZGVcxMxiTQp9hQPLA3QtXD",
  "key4": "2uPBwgTBPSoBj4565tXhejr4B9FhCGYPXYGSmEV7wPH9kkmCBccgevhhdY2fL8BSyTKER7xNMfc7rSjeByghU2LF",
  "key5": "3gRFWaTCChiNbhu9ZBxDzU9VdnkTAip5VcypUhVUtY3M7QHhVEAyHzvA1iu4wg3T6yBm6PQ5Sd5U9pmN1vtrHH8d",
  "key6": "5gCPoBG9vWn9J9knzhLDTcihpMjDsQykogTguM3foh3w1FShCv2eA8gvF6zWsJ7EwhgkyxXDo8L4wrQyQvUyuStt",
  "key7": "48M5Fjy9owjd5gpMxPp4tJEVtebFLf4rkegbwABpWLnCF4z1eE8A368XJbTg4GKsZQcid9Mj1ccDEDCavZS9iPVt",
  "key8": "58STA6WSopvdKxukx749sLrEwA9TRrFSABhpPmreiNreUM8FR6XWmocpWn3HMgqJvrbJZbfUAYJeyrEh3UQMUKLw",
  "key9": "5yrxp9oHDAh2rW5eAPhpJERtYSms9p9xQr24Kdz2cxTdkBMchhgoW8y1VEssJhFnpVYsjsaopjUUD8hxAzu4vo7N",
  "key10": "4BfHXSY2sFN5jbLQzJfYUrNG2GC4s6e9uxRnEV99DyLkbR6mjRzDEook6q7A5c31cknmVEpYtenTegCik1sFuCVd",
  "key11": "43wBzvwPnjUmJXxv4jnrif3e8nPQoQHBftE8RT56MkibwWBqGxcVhMKA29AyaUYF93bihrkfAZ48jbQDyunmLNLx",
  "key12": "YgZa5kGKtbieWocBTZs1hSVZu32GbWXwWRDsuCgwPpBfszf2BqtPZWCbsxmZo4Ci3nNNH8dchCZdv45yzqnhnbV",
  "key13": "2x81tVhe62tQK8XAZY6m7izaTG4MMpi6mZ9A5KNPUy9Nu5xGZSD2qyhVmmDBFK99RPjby4HxxWMjyafvYTpk6oR3",
  "key14": "3YmZonyUFCUuG8qkkizy7meH6b5Ku6oDumoMLqkBL9hUPB9zrcDU6py4gVHoGdyWRs4J4QWp5fWbfvdYJN7JGcx3",
  "key15": "2gxPeRmk6xA8Mg3qjWYC6Lph3ZwULjzs9kGA5ogVixFoSGxZ9aqetsqG7NPzFWd21htFH8RsKFzqb9mWSFxTxmWo",
  "key16": "5PW365NYU18WeR8B3jAKy7wku5hSNZSGdfhWsxH24aEE6fp89Cabm8GtXWtFP7BeyKoQQyWMJ8AB2iR8PGJvh1vZ",
  "key17": "5TYtaSS1QvqeM26MqHv6cdvFebHNoE7iVRkeBeJ42ixT4MVexCbntF7krJ2jZEArGFmQ4BkWiaJw2QRrBLuFuyW3",
  "key18": "3w8wsPSRL53LuZ9bm9Bg9KP9DV1RKtN3Bh3FF5G2RYCnoQ2hDr9taVr6fVZvBqsXR4eYuXMNuQcAvH7eqKKTXn7a",
  "key19": "474hzRqrfegK5mGuZkL5pVuAqtdbJbSh1pfw2hMi9t9vbNUrnukQXyBSLr2UT7xZnZndsm7aQU55ZijYtMRH1Br8",
  "key20": "oV2dmZpfor5yteVG9eCVxfKLnYm634SVa1Hm9NwKe6f2Ca29CkLQjKBTSAGaDJ4ymduRkfpKDJ73BxLNZLsPa6A",
  "key21": "WeaEiNTw4ve8ZVrfHt1KhMARD4cTpBsZ53FDn4jW2ehp4MXPEhFvWgzfNCBMPHriHNAWXqmtuoxx5RWnbp1oTrm",
  "key22": "5UJ4sAG8mf2Qa23X9X5P8f9AisJpmT3R2tyH92aQkmKAxZF4jpmMAdXMwYXWhGHWAhoPhvPkPUHW3z1YuycVzigw",
  "key23": "3WYVJNuoe2CmXKNi4WLe5KdRLpbPSC8CVtkMyKUYPbtYg7Ja6vDdzwLXkwbfNMHX6d9iNi2fF8HSydDjDX5bpBvU",
  "key24": "3cciPUUBUMRmo8cnSxpagi6cKkxqN84PcpVcZaAwi7SfcsjNCxQFawnpZVk9d8o7yLpFLYD2KJYBshEUxodZDFLx",
  "key25": "5ybPAWpCPEMp7tzizRUhHVr7rHurvk3QsmTm6GFvUGem5YGTHjYTgb6pHUz2MxuHV8v5bgqimCTNisstESQM3ZNU",
  "key26": "2bmTaFFHd4wvkYJMQZmiBHuWHw6Md5mph5d8JaTjdM2cDJnFAFsoxTahKsEvoiA7As4GBVakvTXKZjzjvKwWSWND",
  "key27": "4rPoG4DwRoc9nfhzyZiHahzVfkuZ3syJn4g167d8rZR4jpHWgxiiq8aQbEzszq2sANyX6VyprN8ZMQHe6waNHdUk",
  "key28": "2xs2p84ny7dHWVpdEasjJm1DTWFvHeP9GXzDhHbwyyxDXpRbhqMBEUJSpVBHNBKyvgmvL9cKv8VebaccdUZYwjjn",
  "key29": "2QR4sXdUMQECpygLAgWLxhVrvhLa7Kz7VuwQc6ycMTVJRsQFv1PsEFL1gBUKUo2U2yih8XCCvpXfYmaZNhARgLka",
  "key30": "2ezCHuY9vhz8wgehHwjzpniYGYf5H2sHtcc1s7E6GJkNdhGhrbm48GmyEeECCKQac3gCpXr1TS9bAjY1p3haV6Nr",
  "key31": "23cvYY8hDLg34c634BC6zsZQUF8yfq1zEjFmLGUyhH1E9PWkcj3hFmWn5qNxS612Fr8dTko5d2KWNFbdKddivbhp",
  "key32": "2Qee3qk4KjGeGMQzNa8LQ7xWhHrGckmVb6w65eM6EFPbbURV5wDewmgrhVoQAXhM98a9Dtq3UgDTJjpFBsLMvuXx",
  "key33": "5vxHsFycb5QiApx63md9c1KZct8Um3G4DNegBYoYC1EkuZhCEWmfYByXgCiXuVdsfc1Jd1cnWGye9KxQC87rBn98",
  "key34": "4wciysx14o7NsMhHhm6HPUqqmjjoUKPxVt3NopAbjaGxej3i7eK8i4y4kVYKVgBorUC6J6c9y6TZCLSbqkNa68Te",
  "key35": "65ryao6RLxjAvm4thm83UFhudZvMPs4kjHK4LNZwNpPqmSvEuc7HqGmkpmShUP5pBuehNd1pUUQMpX5WfTejrxuN",
  "key36": "nxorVGNGvqa7BXmTHHxFCAKXKfMThoR7iRXgiinH3PtQCBDj7YpsiFWKTKmTCMRiLEquGCuZinY2uoDCf4LTDfP",
  "key37": "3CcgqYHeUfhNJdpHEeR5sKVieF4cywVMZvvPdeiRYE3p1pQL9wBdLKVhUgQEVuA1NcVx6qyrNKqetHFkrP93qB4T",
  "key38": "49C16dt28ZYN2vMc24LRMB9TTghcQwE6kkz2SW8hTRgk4E4iT6jAdiRVmJvnexSkQxuYtBpWu4wogTphxHtj8PyB",
  "key39": "3Ca9QZEX6s7CeM6gzyQr93GgcXbQUPCpg4EE9LjWAGYuqep17Yh3jhWh4TsmRnbq818rfkBWpYTKb3bKifLg3gfh",
  "key40": "3xaSgkHVmuYyaYZarWyKEKgHbmom6ss7suSwysszqfWkcd59swCqxE3SmQj9rM2ahUp6UpD2aFFUpff47n29MdFC",
  "key41": "3eGwZcjkXJFFMxqC7sgTgmUZ7LXo11bB8b2zJqLFBdw7rbBvb4E7DgZke1L5ddaUsKF28yWN8cJTCRA3b1UNzdwy",
  "key42": "3hJmbCZnBCP7cfLhGh16x46eeAC9VnGzXB8cZyby52JHeuYE1DMN3AAGp3fPt36q3TLXoyitg4m6nzghqYDbchdv",
  "key43": "67NtPTpJFHBJ9Z1g1qWxSs7k3rWZd714rzbfniNogEvqzQ2hsarc8HtCbnF5C7rE93XLqTRj9AGv5UsVVXeXzk34",
  "key44": "3CVXgQQ98RADQRG5LFLd7tdsKiKHmFfgwkmJoKno9S8riUvDJmuheE57ruKo7g9xLxav2gP3wbhiqujzsvbzboPR",
  "key45": "5cwM4K7xVWRnUhhJB2MAkPiAe3udjYqvytGKUcqtuiMwSLTyJizPNyyGq9GAE7ELwDXAxd1jKFiBRUTJ5Hi7Ex6L",
  "key46": "3EpidS5m9wq45WBo63oSbLoFpcdmNxwDf8VePRBkPCJBuWbZSNiFZVtQ75H8bnmYzYjbTE4EMFTvnkWDE3HvMLoe",
  "key47": "3jsXS68KBYBc3BZHvRefSio53PBX69S8oVF4wL4EosgCpYZdkbvu8G9Ngar3gNhtDJKhjzFvFh7t45bg6VoqD8zg"
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
