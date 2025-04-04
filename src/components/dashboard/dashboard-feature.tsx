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
    "2qYonvUPTW1GaMdE8X6YYyJo5pse7tabd9ageduXdVt1X2yysCbA24fyTkdc8fRte5dc6wEZ43sDUZx2Nqp1wLW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RKqZ33Ts1G3B3UvyBytt5Wa5hfnUd6BQg7Jnk7QQLnWEhFvAjuNwgAJGzTcxTRKhkXbQtbUjMvunPJiLZdV7LrF",
  "key1": "3fAhw2TwFxok7tT2oupVA1DCqr6eauu6yz78QtqC2ZH1tqqMZGhJLxuLFXQnKPKqV7CK7WNJzp3qe7kvKv1c72ai",
  "key2": "32yDGBy61P9ugKwkNZ3Z4e7xhen3zELFJ5aEL3ewVmWgbMDS141HWszLPjJfNba9RuCyWWMTghuQjNB8tESdwJo6",
  "key3": "16fnzipLxucLr5Qetd1qgThzuToPaP5KJHpAns8sBPkcMvdiczwe1EbGSq5AdSBbffcZm67fVoGC92MwzwYTQFT",
  "key4": "3zedyargChM1kGbgWYke4xsB9sCka2Zw6vSdbKqauV58vR1Q1qgY9DWQnjmK32TpEd3Xt8SbxbhC2kFG4MgFVKxb",
  "key5": "5UgHKjDvYi6Rn49PEGdgX8RxonLVdrq9rMKkHBXj8ZaN25dihTtRSEtdZ229YgowX6thwep7hQ1aKHCtwNT4eka2",
  "key6": "2yWFsCdfK3mUbGbpdbfBSngd5pMcWgE5ukv7TAJ4H4HZbu81BB4WsPW1BQysNZp9uCs1HRs9gf5YyMmEDFGn3SGS",
  "key7": "47NoqrpeDY4gwVTrA9W2eYTkYh7a89rYDp3af3XmbkUxn4FjMrp2eRKLd8z5L7kh5ZfsLoMFc7NmGvzZkXyu7fHt",
  "key8": "5UFd7B6Q4BFXsxbi4yiD14B4yLEFKvbSG1zGf3x7CMmCAXwSM4hvWfezeMWC646w3poyw56hiK5r7imbwW1LMMhb",
  "key9": "5t62uWzXg8jUhWCnfpiA58Cu5a3JHtGop3yBNdKewM9V5YZPShXjYbm37mP7gKY2tZnKvky9RYFvioZ8xtTi7eFT",
  "key10": "4rjTnCFm7mSWvTbDees5T8HyK4ADHVtBhn7fB1iDnaFYCMcWRChBspoYnPACJzpHJoCpHSdVMcB3WGdA7JEa9sza",
  "key11": "2zEDZib9iJYndm6LSsm9fT2VG96bN7dGwV5vKzYmnjwes1vz2WngftKabijcY8MEnvfbyv6MhfF4jQu8vetMmZp3",
  "key12": "4eERTZrAZscJW9EHQtu4in3YcqAbu8CNcqeksnnCcNA7kSKHwtx7vPXdQMUqbFmwP88k4ZcGiRDdmLpWapU4cCru",
  "key13": "5N8JwCLKzV9SA972nrfTgkpG2DPvXHZx55xGo5bo71tJzwsGsGTsK9wBaocVDkeZM3TXvNSRdH41B575raGqjmga",
  "key14": "5gnZeAV39erwXn6EWGxss6gYKp5SiE4Qe7GP77yYjgMVFPtNBDG3aiXGkVsm9XBX9uduPJLLJ7W1VwK8DN4gvia6",
  "key15": "wQuahop3kfKPUWVXgKxV2z29u3sBSHQyhLSc8TyQc4rrHrfV1e2roP3Yrfx7xkzBg3sXGJoLABk2zUXTr3J9bP9",
  "key16": "2ApsMVuY1XUUQUdgsocdTjBfPwq4iwSQvU6mmDVrg27Nt3qqBL8Rm7idm5D7wyXjRoo7KaqwTUkUkxNyCbNR6Loj",
  "key17": "2T9ofB8WN1hG3p2MA8cin8ynWJ15rLDSTdMbuMqhzj7K2ZSFa6xjJCRKz3GDpAMb4Cb16Jmn2YkhSaWgBgz1K8io",
  "key18": "3czgPNH8fauwZzjhPaVBFy8ReLdijAHGracgP7M4TCab2eZ6v2gDjS3K1ZXyZeJVrC2NELQZRLYtANZfbEWEKXiW",
  "key19": "3hFMD4mdTbv6GgqBjVeB3wrgqq9tsfgRqqTBsfLiDFpGuMWgVtjefzB3qUiGhzfHJDsihvH4KQZMtkc5TRoRrNx1",
  "key20": "4JvkM3SgwhnfZ9bQitL1TCjRsvCNS1Qz4WZUKQ5bvAnJ7TeHPQFa3KM6UHxvtaRgtYFWSS2xeWVMK8wmquoMdGf8",
  "key21": "4rVSt4vLQFxddnRgG5QxKqm3d6Rfe3fq2gyFHwyzqbB5Zff5kdinXmQxBLwTXprdpmYAd7KDmABP5E69mRbyuhz5",
  "key22": "3zAkHwQHLaboVZ5DAaKrboToPvJQjJJTJgQJyY9MZnuKntv6mEnpVBteQVvapuGGiNe7u6B93gLZAxRHvwmJQKKn",
  "key23": "26W6ed3ZDZhysCNXhQMQAfQJjAb2ddDGADK2vBqnEKoUJzy1PMMqZoqsoz9YaK2KTzLLqWdjS5rP8uCFtnqAFVTi",
  "key24": "6mJ3QRmotWei8BSpFj6jJ4Akqaa2oUAemgY86tE7PTFCzYyVTqHdXQyXVncfmkdpgVhD6a5f515Vw82d8HBeB4n",
  "key25": "3pTAGfozRajsqWKjm1dYydqkiLLn2qdnrhgnPMAGYLvpN31APqJuQSgsntZSCvvNQnUUNXkVm2qBMD96otS1fch1",
  "key26": "4HUngKW1gGZMnsoB4fDJi93sVdijRW7zVXuDipjTPpF3qRWsDg6PaMYfWF9oB6xqrVizKjtZxV1iAJTkBzyBU1xb",
  "key27": "63jGRrfJrJ5NUhg4jy6wshZRMHZwcLZHv9YX6FkKQ5wmMEi76QWByLh1hfAckt51KrNkZxA3uC9vB9ZoDyo1eufm",
  "key28": "3SL1YoMst5CSt8CDEhruEzVNVUAkyKGo4kJfv29SBMbUQxSECVC2idekmjNKXMyA56WKUhGAg1iuNLC5oJpzJmud",
  "key29": "3pn5oPG4FxZU6Liu1iQqKXeE56PKDDJ35dB9GHgdmpFQ4nNoFJvra9KaBeGju8tgYHuanvrx6w5kAiH9MrQRuxNW",
  "key30": "51kDDv3uBYJvDS4fAKfKiQY41q5wUUMUiMfusj6js6swYNdwTpt6rmNZGJ3YqmeRnipf1DtQGM7LGqpHDNownkaK",
  "key31": "3cPXrJ7rYJNA4kToP8a6PX4x3wGTAR9GM1VzZTJtRyfdBjA9iDmsvRJTAHb1MxNGMAxCwvmhaTRwPYM1US5esJy9",
  "key32": "2wyyV74jL1DCYbKDtcvkw22PPq4fghDRRGQP3tD86VQQNqHW56c6Gu4Z2WDS3McasZaYrHTcwbBfyVLKAzsD1q1a",
  "key33": "5dZdEerbFSakQn9FFEc8L2fiZfjYTQtcHx28GmsMZN44fmQ1HQ21hyASVBTYFKsitvk4gogdbv47jVoSqEtGtFkt",
  "key34": "5t9zUdhB7rmpxcDyBPKEuSCcMAhMByKc59QMCvc98khaoQJmnrPpLq45xrtpKkhhPf1xM7y9wdJeGajPJP4Xpxfk",
  "key35": "3UbKiGZQQAHHUHwi3wNu8Jx4KK1QqCTgCuputNgnLHb3YQAeBSgzJJkg8unTx6gkwJW1SgDLSx9xpnJobCNGc3F5",
  "key36": "3269EybCTdiUgkFEwViaYx5jwSP8TL55oNr8fJxSVHJDNTGjr8BzQ6xWnrpw54zPZg3EZx9JwMpxiXSThu9ESguV",
  "key37": "xkdBTLFLybY7AjV14QxryB1Su63tnzWFsiVhiEYr7k896sUddaLm4veMNYeKRi9MKD3gkEQeZuuz1xY9cek8hDP",
  "key38": "5gsyWXEXan93WjgDpK3zsxdDBw1G6H3T4vAtULP2HRLjf7WAw9rNwBpdoLWhKehFEhEApAbRH2RuqYQrjQo8useD",
  "key39": "5uuaVveWQ2L6UuXzw5KZUSzSBvHf59Yn4Gxd2Kvqk7jPsKfCW1qargxwvRnFNXs48QaR9Sbnj3Kpi7j8EHhLwygx",
  "key40": "3safBfbpCADYADnTzjAF77QBUB94pjrmWu9ySWPtw3H19mWjN64DaavWJhyLp8HRHSTuPsaf1Aq6odPQY8voFveM",
  "key41": "3EabCWZRu3jqZfnkAnLtfu9g6d2JXfWdueNknCrSsdvYcABqHEMQ7DWREKn7gZWaeBVRrqcFYNQ3zpzu5M7xPUjx",
  "key42": "3z3My6EsS2cX469S6Tpk8p9iBkhFAv7TLqLQh1a5BDJDm9kbZdpDWxZiYoubfVhquP2ad5KDRm9Pt6TMHN6Ag87P",
  "key43": "3LyjkLQ8KbMBFTZbcPXXrfhqnX6CBY8URTndwkBKphMbPoZh4TbyEgZGvqKsSCvWuXBc4tKSRnbvA4qKKBs7bv3E",
  "key44": "5CsgKyHxcXkwUvwFG3PyQWVo1NT8UbwHkfDLGWmz1CpWwBiNr2JhK57xoXGmc93RQT2ShSYETpkbsX5q2ma4kF3j"
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
