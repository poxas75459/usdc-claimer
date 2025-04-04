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
    "3iPkWNdDkLA3htSwM316e8CKq3Fmd4KDxKwkrrd9tjfdPg7qRkJC9Q118dG17MdYEHkqyPqwJWFX8H17SHfFkRxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ECFHeuGxCwGhJ1aaU9J4k7FHSkXBDq9ctd13ME54aYfy6zvph4bSGvPpg3SPGy66S5zKXAM7j4UdE3i2YA7pZTz",
  "key1": "3hZ11mpcLjuA74CofiRgcBcf43t3GSWnfg7BQUp1MGDnUZ8E5LyCUPr2trHxG8PDFbwMBAc3BbKs3oVfPhzuvmEZ",
  "key2": "cFB4hqqQLdjdqEfTRMMENBMJB2c1ttx9HvK4kwiVyBtFbHb2kvn3q73yLLUSGRpyom66gBv2CPkajYky3npG9wJ",
  "key3": "3NUWQsSums5pTPAiDYsuNXEhJXnQ8bGUHKWTx7G8hFLKunDEBqNGCqk4eC4P9RaekmfqfV2uvBoaPnfztFyzgEoG",
  "key4": "2paLNzG6nxrrnYpQm4jGeBF1UhtmzKY7hbSTnFK7D92vJTgziSZokMkH3X7MeJZWwkjC2JaQTXnUESPgBDNXbKZS",
  "key5": "3ik9TwtMEhBnzMhXHaFPcgXYpPsdsuVYaVT2xGTWN5tow7RcKrSUsuLS18c7FxAvMs3B9nxEUSi9WqVg6qVWcRz7",
  "key6": "3JU7122J8Cxr7djWHea3n7SXd3u5yPWck8p1ZUqqAo9KaFxSPVB5YN2GtSRLuYYK7WnGrXhcwGeYXrZv2hYMZwJb",
  "key7": "2bW9oLZAoGZZ1du3p52ri8tEZ3n96rBZ7vMAV7jkb3JuA6mRWSTFi1gKguxYqxR6YGW57CnaG8qsqy8DoYDg1RQB",
  "key8": "3Jby6jX66fFHYQPVFt6SHXZ6fGp59Bs2TbimtnmF2mE1n7SrLpnvrtLQV8K696Qk7BkRmMJtJ5RNy9JXGrTLnPZu",
  "key9": "3EUD459rGVeHLAkiaUPwt1yBACwtPQn26Yx6HKWJNduyFaPpKPUBWMFgqpLUPkWp4vprhXkBMqzcwkxiU818NqEy",
  "key10": "45G1D1qVmhgA9t7RvF9duLosDNTvuBJaeyprnbYeZoYyWA5cfW1qDU3WHp7Tz2PWEwCt8rVvYMsz4brtWcmgZTmh",
  "key11": "2xeNkarKsNGXrED8apiKgriZFpW6s49LznVdbbV5bNgz6mGjEyF9a9skkK9JycBF1zs9fD4wAbNtELLgCpB7CMMG",
  "key12": "5SL9Gc97h5KgeVffQLEEfnViBTga2qfYcWHNhUyKH8Wvn9kuTtE32hhsFYRnaY5zjQBSuTskrQRtW9Abj8bm2gZL",
  "key13": "3azEo21fFJahwwSmzptk2EHpe6AHQrjNV3uHBRZV9QWJYxzeZXVJxPPtwBY3PXBEJUKuYGtQxBVWbNJznjqLgDiB",
  "key14": "2GKzzQG5DzEqcaqVanEtzBmBE6soaEGmhraxFYjkfZGcf1fRVkfmnsiVa5tGbXpdAt67LXWmePVuBuL5f9FzaGNv",
  "key15": "54Xo8LYEDAgdn9N5oxCkC3TRGAoXcoSUkG6obaxZqeabvXkyM7AUqJ5wX96VRT96HQBywAR17vraFyX7Vp6dH6Kc",
  "key16": "2BFHfmvtmTzkz5ZraSZPWKxBtXhFu7y3WSWuLGkdacgmDs1Rc5tL9J5RxMeKzNFmLg7gmZgxsVsLGui2e6sutz91",
  "key17": "37PZdbit6FrCoRGsZSZdU2xDFvyqBZYfX3ZmF8kK2UEjXPgXhfTtTRYgsJqnGLFiG81r45Za8n78sVywvVq9KuzW",
  "key18": "2cToSg37eWghp6pcHJN83kLPjbKBog4CHadcihUa1ib3Ww1DDg5KS9G2vFPPfpU4xXKXeCVyAE916wqzMQSUfNLR",
  "key19": "5Rp82cC8Tkan4zaMAcraPsJSGQDokghSuuSG3i3EDRaQb1AM4Kt8RtQp5GgEgc7pWjNt7W7PyaLVz7D1EKHZBqcj",
  "key20": "5UNTNpyArWJYeNXaHYJ3o35B3vxxFFFiTjxXvRbDQtoCRvRnKTfY8aY527rMG253S38zVn4vJaL93dZhhD6PQGt5",
  "key21": "vKCYGytzJ6oGuHshJWpCKxW1vG1xgMAJNowNDTsKapApdyaz2RAzRGc3fXkyt6RqUUcH2zzwndZWsRE3qBuAHrc",
  "key22": "wySp1baVP2vcs9b2mmQWWyGpTvAreKEWQnR1UzkehNysGbjezYPkj1KEW8NFC6fePRM36jihQ9xfMsCkWgELYsV",
  "key23": "4DEsXLaCqdDtGY5TWuVZYZV2D1a7f9WFJ2rGcoY6RmZ8pT1ZXQdDWAxqk5tiuWuut58HKEhzF5gJLHeCvK1ZXpqs",
  "key24": "43n6vEVoyvVxCSQM7sXUu4PdnhadgLzGBM4ijwUzKsnC57nQL35bSt3GDMCJoo1o2h4ZjGHFJ1AUURKGyEXQyX1r",
  "key25": "3j2FzsZyzbF3ww8oKBQbcbs1PgvvTMsGP6QJoznjPbaVrZvY5K48YNKrJNZSjFNb6Am4k9ws4bEDir4dKxNpyivx",
  "key26": "2qQdzURr5WFxAQhnLuwSipWy1jUvz3aGocUW1axDUoyNHtC6yRoPaFRJKRdGEXewKxMee7kkGMZT8SXmw8vE8QgP",
  "key27": "5DJNDKm2RnyaaJDRgUvb544Ucr8x9wTE4rmgc9nnUxvwhisRzpY7hc7wr54SnUohVenfubTRn93Apt3uVVDkq9TL",
  "key28": "2mjyKGpVqnAMKsbUc2AU1h3uPRc8JXm9PsxL2Qz1hqPnnrUFRC3SNR2Gr95Vncx2f1ZLxYA4X4oiLEuoyWRswCcG",
  "key29": "4YnTG2HoDHLu2MCs12J1Rpnsskg8QgrCKY6SjwxkNvu5HtYX3r171Uh9CEKkL4QygDL1urikh4yPaj2F1D6gY8hr",
  "key30": "4Ay6ZjWxHeLgWhLDgadtDyeWdLP4Domncd4BuJvqXm2uTdq8Xg6yYE6cMsQ95Dz5sFZyLnEmL1iDU5aNTax7MqEr",
  "key31": "3PMyB4VwoMGhJHh2UYxicR4GrjFxPNyFDCrF6FCDVSEHQBGWezF8tsaSfcoTq6VALaJngnt222QKJzFEuGRDGbhz",
  "key32": "5s6PUCges3zpbtiFBuvwQq2HaNK37xAAi5YRfzhxYxPwCCqnEh62BVdwZF5D2Pcs9xbjL6kRqFyyf9RHKHAFeTQf",
  "key33": "6vSofS3NCGpTXyaRLYQmbqJ7jNfo2CdCm7g3W8XjHHqAFMMFf9cP4kUfczWcjzBdjJqgMzS7pAsj46TaajWo6DQ",
  "key34": "33tJ4RfXhW2bLDv29gWW1D8Dka4553oLR3e6jeEKisdui7StDxvq5ENt5aWEtxb1qTPQoSMn5KeTzQF4bRTgPmje",
  "key35": "457FhGQKtdxkHtmbLzykrLnH7pXzZeb5BKRjN1cFM9TLqBrRVEE4CRx99VtBJkkpMLVb1kZ2bYeWshqSrNQbJHvi",
  "key36": "4MhLoJ8qySrq144UDWNToj9uQiASYRQ64imAaDgH7Zv8UREqL7ugQTBb4EvyeTqP4kxrvQrQYeTUouehne9DC2zG",
  "key37": "5ahzq2cUpDoRjrY8ZxVA8MHriUHXG9GRupverLADQpDAPk2Yfb7dgjHVBs1CyMjZtio3cyiujZuvNXVeEn8m89tv",
  "key38": "3ewPmqryMSyaneJozQT128gYHSP9VFn2pVfGYakj9XbdtazV6QkmE8HSmM3Mvpv4S9Nq8CQ9PvTvvCdVjNKfMV3a",
  "key39": "nNXuSaWptXvjUzNhYpANFY13wRSYnzSEmeiFhGKB7CE61tQcCfGXZrB1sowJaRemjVQAXQg54D7MdqtWuzx6wcr",
  "key40": "qojz7R91r3Np3AEihJ6szqFhQ9Pz1ZEtNsEXeaSK2aLdFU66wDxRyUsEwmLjgrgkvnAAiGhLKXphUZmEEWieE3V",
  "key41": "2X5PdM9Qa6dRc4SQki7jJiei9bryBVpQWhpVGQpoMhmeUiCeuMJKRX27NDHS9fDiC52AzXnKrJx6st65dBBp5ZPs",
  "key42": "3ePv9ta9nnUCgGgzLrSiEoqXuUSLDRmZZRETvBu3u1Fqi17wWo5xerS86Vvi3WmkK3RTRKRv4fbhD291QaPth223",
  "key43": "4rRa8mcvmQxBsEe6iJN7TRexGV7n2sT6Lfo1TX36d5q8wZdsw3Abw4guDUa1q77m4UXCJbjVG6dnW6PYBVqwJfW3",
  "key44": "4ZPoMad7Mjbjbdvqcp8KpeD4jV1bMFKVjg55uBzQn4tm7W6m47AXj7NLdsTRhnQp76nASNh5fydyJYPboHjYMjvN",
  "key45": "5PJez3hWbHEMSp3ZpD77c2JZxkmaPmKkJ2ouU4YPsRQqpYixJohzjJMrk6Rog5ngRtDoJC7sipNZb7YrfXK4CfF6",
  "key46": "4wj3A6ZrzfH621tS7BjiSfTftMLAABgSWGtvF6F4kX3TpKmhqMXRRgY6mDE2Dz8v72xSJcdpe5JiMpxRr8b9q7eA",
  "key47": "4YgwGfvf7mjwkUKe6q3anwshxobDb6UEj72qJmvnV1q95rDWbvrnPy3m4gNNq8X6bGSk4ar2beuhNXYiTZWuxLSu",
  "key48": "2ug68YFmvPwaDSMRQfej3ZvWzdpMff96fxPs6YcRevHmjaDFeBBV2hjo1Ro23KPkGTho7XiN4bV9Xpgpwzfa2CJh",
  "key49": "2kSv5Q93hSGJFVyUVpH4hNgAogWWhJtsPhHj5w1bJsHfAxfEwY3Ssqf27KAh9gPZksSyhGREQHNL5nYenQ5isWmU"
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
