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
    "5cGhf3aoZJ2TsWTEQS3S5ZM9BuzauEUEFDGtACHTKFbBE4xqbNWiBTns11YA3dS53T2EBLRgmMQXjv5QuePy4AvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54jshBpKpFZFoctN3LWU5hudQ9QWUU6NzA2ZZtSgk6Kv5UBnwhAFksMFVpNV5dAyYZnBmHiXgCvnxdpMyrFdV6NL",
  "key1": "447cDWDCsZXGCVC9EPeDTCRjYqRXbn1B7Z4EEF1AuPgfPQwwWC3s1WtvVhdJ4jQL2hKA5AoPV3bPhy3MdfWsGnVM",
  "key2": "2XzknsUPsyYE7C5VeYUdggm5WLjNLmTq4ZMxkd4iXG5B4CCg5Mw2gMKWBrdwPbLaDyDFGwmgVge9k2Ncn4YijETj",
  "key3": "4hvQEd3wEreV6LpMNZRDFoKM4zTYBKimqy68J6bigJYpcHtL8zeTvNcgAicmNi2JFnhmNDLEBEy4XWK84dYhtsSS",
  "key4": "qWKbpptFD9vtmV9tDjB2FEWCuVHBCXXhhXZND8Q3t9hCDfGR9HnQFXs1yoocvkSZKoD4mFTKBffvge1NXBLa4sx",
  "key5": "2GS3qtt8HUpGwt3kYohA3UHWGdWxhAhBaGaHvtxgtXU1JjiSkzWScmdQr7jAcaK7VLQacdNACtgTzwEhmkHNYFbp",
  "key6": "5ePJ4YbNviB4Jpjt5CgmXqRLwDUnx65wXEr5YrXtbALVoBTo4cYfgvuWo9x4u6nDvLvipWG3ZcZnoY31E1gb6A3H",
  "key7": "5cdLAnYWbdmKZVpYpA5AjJGCBQxiBgk9Kx5ACYkeepFT2gG9hAtftM24NKEaxxBdnfvumTwRBZjCb9xtNrjGQeLK",
  "key8": "zzMkNMcggSpYPjw9kBRahLwVoZse4PWRejoqfXub6u3KfmJ5jFEKwBh5rueFBE54XMCG89iRLY1aAU2zFjdqs7d",
  "key9": "3D5VcrBLeadjcw1KQDa4qCJb4bGsdTzGpvMvAbuAj2cAzQ4xjEiTDYuTCrSxhHvvXruM6BySmkUgBNTgxspXFXiS",
  "key10": "36PQiFb8PoCe3e4RcisHQxgL7hvpbJNQR752YZsWwMthk8frcrSHtc4VZH3wViKHCxFcwJemtXEge1VwVK3iaUnY",
  "key11": "dR61MeQBywJVRykgk6y6qyAU2e61DrhhujwmVJY2XmaavJaFtoxsK1E27btSL4S4ujSJkJ9bMRDa75zrNbxVFST",
  "key12": "2Nj6dZEadMra6uQr8DX8kcHZ2zLs8psemeKArTnv2vQNjRyWgP72Rcoh1nNeYRLLqN5V6wYzFx5RZhQvhR5mxyMr",
  "key13": "28wvFYyNES6XBE1t1YHmxBJC4vxnqP6evppLfPUubeAmqtz5L3F9GZBJG8zyvr6gMMQnxwyiomhEVUrzCYz9omqP",
  "key14": "3tgW3rmE6hdijApGDzSoanBw7dduwrYKrUnvv4jWu8gBwX8TXpgQEohtGr11p4xv4jfaoPCPWY2ujmWenb8qLzqK",
  "key15": "2C1EEKxcciSdMGwnjaFG7CuUa21atKPNhH8EUshJyKkQ32A4SFmqNzhNvAMeaTNJ8a4urJHUpxBaYtN6GiNe577d",
  "key16": "3FgELwtTyZcD9sJudSsVnd7bsLyguxdEB8w7LnsmcMRryS8oNy6x5FXntaF3Cas4M2zUMoW4XDsCBsSbcFRdEMAz",
  "key17": "3JQg51P8d3QyEfTwmntRFBzKC3PwMXnCfZucvECwj4hMD1MTV7QndFe1PH8shSS37CCGJGqQ25cz8JUK5U5m1gth",
  "key18": "6pmqiMEK1nvEQWhwuhYWRGvRdfSzAPYLLYwvZUfBLmKVRyfLbjbBFqnLGTNq2zd9tcaaeCv9dyPKgYkVM6atLZp",
  "key19": "5V4K58okfrhT14hgHnv4phzVfbYYquirU2Ybbz9bP6Z2KyevFMz6Q75cU3go7XyC7voksjGhtfbfTT5RUcT7ngL",
  "key20": "5siJaiFy5zxxbbjt7WZPCHk3jrRmbMgNUtjfPquZCUwciktWotMDN8BGqhpaRJkWhYFWdEQnfYrqt39Kjya3NUgn",
  "key21": "miqfmSLb2Tb5MGDB6M46Mcjzu99BoLBJWj4yDjXfZxGyvMLdeNTNRnuwgd9onUbG2B8eN8QhiUaG8MG77wB66N7",
  "key22": "2fr4XJ85Y4GsX7odJ3FAjesdR1Y2j9Zs9Dka4mRqF9PJ5sbonCWanyDuMC8d8EqfHoo5mnZHAk9aN7c63mwszPhD",
  "key23": "3qjG2VeYZjG5mC6qST25hXEGmcG6JfUHgbLae293njec7i9b3C2tVAH8Xu6XhQRBzq6nd3Ri9DhYxaEBJFeDiXrV",
  "key24": "45VNA9hynXhpBeEXHyZCXczn4KPUXX38ZjtyB9jBD1c2JeQ86qFGT43bEtA55zczSrBVWscNwx8dNMzxZpAs7bQc",
  "key25": "59DDnkNQWJX9RRLgcy1i45ypj251xyKb5xkqCcSnBMAzA9UPZc6UctFXTmbPtx3ch5XbaLQZBux869Vh9wJfyDSB",
  "key26": "5nLEZz1Db9fbkmZaejN9fgbR1YNuQiYQjnFzwGjYDzHuTrjzDKxuBaFVk8p8CoaCbjSAr778rtdKUMT8ADFGPS8N",
  "key27": "2JX19eQPHBTjQhWHX3qbBUbQgZ5HjpBALNCckqsEFtJgW21MTqCtitCfckjquEqfTZYfJKnuaQb353RFnoELcp6t",
  "key28": "2nKD9bm2voRpg2nvwFPLCsrXmCdvzJgqrp85tPZtRb5qmX3mSAHcfFNcPofdwQo8rKHfznhZ33Tmf1zMA5an2ExS",
  "key29": "7pXQ75u4YKSJ2VQxwRcNMF7N9bfMr7dQzecRLcHeE5DuZkq37riQwJuBv1ocQ1RbTMa4voe1VrBHrHcrQHmNDVr",
  "key30": "4QCb9MBwZH57eUQSjXP3KSAiKZU2ujDbZnxPMwRYBtkNjGyZttYTXMJhZiGc4R3f1Gdm9wUcfVrKDr8GMhyfV2Dr",
  "key31": "469PxjQpYrZgPMnXe1Kdoiyq1eLPDw3Vo3Wc6eW9rJHbrPkfT69o2Mz6fXMmB6QQiBgdBq3doQqpA1zShmsK1UR",
  "key32": "5iuH5bHqcqmHrT2Q4zaXuKuDzMwWvpjGRWBwa1T4Sv7we7otEZSM4zSZEmvuat3X7rTG3xKMGDmM9PKibHaxMb3b",
  "key33": "4JYyXBL6ngF5GxmxV4HYhmr51JAvEq6NKfp4oDfmjhMTXqDgPcCMdyModr4Fe9CrUdAzifhgroQmrJ59nR3CDk4C",
  "key34": "2DtqShC3aX9SBELmjkD6WphquRrX3mAzRBAjS4Ldo73fimuRF8nViVdCbDXBmkuYhbuZQjazm7eS8dHeoGXoEPG7",
  "key35": "3GjKSfcQ6uffoHV9BB7h3pAFrxSQUg3cGZmSFYFPr9bRJxSv5N6pgzx8UK7ED3tTwsYhEZDLUT7oEqKUa6PFiXZr",
  "key36": "2CAfdGctFyx9WyzKQp6NXFUR36Nx32ce9DH8GCmmy3kzuMrDqG7grPVx6x1nNAB5EFzJmhQxFaP7CkPdC5oMUYGh",
  "key37": "4bFZBkwfhqUNGE8r263Z8WjS9HUx3zYLXvshdy281fCSAZ4n2QEa5miw9JrHoxZGHE9g69wXUJS4oNQejcvbkPtw",
  "key38": "4oveHKLaTfwRFNXnhLzoNmqJ6RwuGJKxgPQHJjtCFwdue1Hh4z23GJ5qXzFVbmP8ftsw6quUNHnZQqfD5QkLkxbL",
  "key39": "3VpGkZm2PnQbbJpHnEmjaQ4x17QEwRPFMPPcKigHdTNsECxtehHMLQVtaYG2KvTA2LA1pmvij523yja7VAJrafaL"
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
