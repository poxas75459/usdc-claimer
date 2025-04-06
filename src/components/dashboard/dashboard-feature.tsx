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
    "PqbFTCMJC9cbdoMqshbb7vLLgid3LUPkWU8dimwr7sv6viVbowEHY64WyPKd3NUnT2gEVgPkDVJJhskGxA9gGiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65kqG7xzz4ZLs6PHyutVHLyBzaouYyaTZ8qoJiZj84kJjTanFE4Cha3GQYsbFNVWKL66MrpN5gHEDVaTcQGp7Qzi",
  "key1": "3orTjd7ByJaNVAkhjwW3YEJP4PwuyGWnLfoPRiJo8kFemhZ2cNF2psFTJCVb536BTeHdhQefaEAMAAgVYJburfqu",
  "key2": "2oxWXck2h6iGdFJDC8UFNgesb7CsJUPB9SpthyVXyQEshcc5nNM2hGhpPFbnVQtmXgEZ8RjQYvyJTv4agzCE1gsh",
  "key3": "4ADcp2vRmp5fQeuqJLe6A7UXE8uqaq3oLhG8A2uEHgLWsQB2EU86rQDmgGwYCTUwKWxQmgfZUcS7te2pqE5t7eso",
  "key4": "4Fp3Jyj2mqqSgmqtb9xfNREGpdzszQLLvpnKQxV28L2Jkb2jREg4NfELzGGugJmuW6rVHB7iNABVGJswAPuNDXcr",
  "key5": "4BXwTdsqBQSotx4wziTmhq1oz8jP7gskVk6YCF4ZfkhpR1DohGt2ddKbBhWFDcuWkMk8YGQNmdKmC9mTi8YAnggM",
  "key6": "4sifefwigSQqWhCv12aL4NUC9YR2C3KCcurWKPoxn8AKhSsbyxySXG71p8vh83v2yk9hEK5QiP2opXw8WaiaUgbs",
  "key7": "5hSSA1VKa8FmuskV4PfLCVqsomtu4kqMLuJAyrbB31wzB2MhjxhyZSx8qSswc4eXEAeLpXA5tMfDikeZ5k8Fm8eg",
  "key8": "3CxzrXEezD8ia4TFQNt55r3wriqgEA6FPY3pqNN4L8ntZQWsKrCb2udbvVEMxFevZrBVMzejsfPwaLux1rNTnfD8",
  "key9": "61Z6cB9SAJuWQzbZ3kkK1VVpXQUgv7gWWyfp6oGcSN6ZkMoUEYLfg2Fze2tPPqLDFX63HeqHMBaL3FhrcqujFKbU",
  "key10": "3Y7UP2m7CodQ5wwCCLTVAw8fufVheUMM1vfceuhuKFVsm2Fu5rF6fuW7UD1k4TtifN8cFhF9Yes1u9Saf4jaby4Y",
  "key11": "ZALkr1qj2eVaJapw3BV86xowaXrRoAk5x3NTCh3NqdampVy8PmZhjYidEGxoi6DwLWYQhUxHo4wti1nddYHYnxy",
  "key12": "22caYfaEgb2o3HMDGqpZCQMsLnq5xucGHAR1rsRqBdcG8DyDKDGzQTK88VUQ8Q1wgZxrsYxV6MxYQQHiHxyFYvuW",
  "key13": "2wv2QG4phNMWaCx7reFJn2XE4UWb6K6E5RWM58H4LhQN8skgELB5XmnpzCjkXm4BzbcN8Au9ddWDbToMYg5sPSXf",
  "key14": "2SRB2vRf9pbwZvdDuBxbZT19pjrEoNwMacDBi19KcqSL85cWiCPawzMSzSxbrAjjGhTF16xyeu6nuxDC3kG6mFpj",
  "key15": "4onynxpkbwq3o9MoqppQBVMgyaK5CryXc3rqwvYYLsAm1vmkNDFssAsxpfHpQH8hudgTujLzsuo2jDhq7HszZ49N",
  "key16": "5gGmERR4Qdw5sLLRy7QrBSbn83UKD5gcXmLfjVzeuZoBzWPCRUMVncpdNDdv5KkBqurr1cSrKkkXBUMTbxThWYxK",
  "key17": "4N1F5NsQsBbcNAfwK9VfqMSPBogPrfRrA7u4C5wpXhfKtQXGjnpdVAaVrfjEnHtYhhjwy74LdC9PJ94phCyXBBzS",
  "key18": "2EpEA2n84mbF4hZH78BRPsZKTpv6sdbSjKgHvrdyrQqFtTy8mgrcpneD5pBBp1E8WjzTYxVDzdEJuXgx8TQssKKf",
  "key19": "3RsYD7acmHuPMJZL39qgY7D5tYnPBfnFeCSqZjusPQmfUydzMDNsywrq2JAVTRTyPKuRJmVAUWw9FJMgKdUpppUE",
  "key20": "1jh4Eqe6nSGDyBMqucGGuLATddBYuYRt1XQW2nNmE4f33vPfGsyy2ajzo3ok2UtfhbjTzdNo6NXJiTNnvBWu6Ji",
  "key21": "X6z6xWUmpNerQwvjGC9PMDXYL3THvzkFFC3PhJyofxxDjMMUnphsQKXxB1qeSKKN4Wufn7E9ic1EJqtzSeLEcsM",
  "key22": "56GECxmx8S4bdZaGuhvSQEiRKRjL2dzu5KLoQVjNq8jAagSL1xxHUzmv5iLgTZBqvgcyRtbpgPJiSsRybQ6CGfyJ",
  "key23": "5zyA3wLK3ngx5MKGpmEwSA7usAkACnRzWSXgcnUf3K1VGbrhcQv1sn7726g2SSWejs42qznhfGvjuxgqdx2Mg4f1",
  "key24": "aoWvM15PVJUxYkvM2C89avTK7PmpYDELAhMVLFyrJUSAxh1BHJ69FTGNShNTjyNHKLvjcpQMphx1EGDsgDCbRAE",
  "key25": "3szrXtuu7EXLgNAoqD2it6nW9Uwsv3TKm1m8LPaZcFWREZpXVZxBB7xUjuR2T5oT9PnQKjtDUsZSGdDnF4FZHLv8",
  "key26": "2ZdTt6nJSF1kcrMPYf7q2eAauHMheqRHvY3jiSPvGbJTPWzJkjeBPcYV44fTctLqYYUuBzJfeiiCz88FEf16WC5E",
  "key27": "JWKszsEH7vCcBdZ6ALFL16CZ1TPspomdWeg6AqZpkNntbkSBm7S2vRKwg8QiyQ26x8yw3vuPStK8njmv8HroBee",
  "key28": "3wQQZWUdrYV2yxaEnea8Lg7zH9HKFHP67QopBcNj4VRV9n9LNHhx9Y9BSqkLXTTA3bwyE34sXRQ9DEeTZ1CCaPyB",
  "key29": "A59PXvhpNmLTTVmEztXqW2XYPe4jxCB1sy1yeY46UL9F6SKpM4XfS8wUvuF7ynoPYvidsoYurZ8TtnkECMsppX2",
  "key30": "uBzB4H319ABBTJbNiLUaZrXRRsQBRw3ZWhHabgsmMZXAysivxbBi39M3NHavaBEwkUnBqEgEeXRatWQ6cHurazs",
  "key31": "eGWwPnmpG5DRzRVgZ2Nos3WG7kPVWF3gcwM7pv2RG3kSZyifR6Vdr5u4pHuHB8mKoZ7ZNzaLqr9N2R2tkAKNBe7",
  "key32": "5hMHxzG8r2LVtMAhAict5xUtpL9pmqvYyrJ4BCajNZM3qqdNNPwLMxCv3ind23ZEi2FwnQD5Xpiki432ieRduyhh",
  "key33": "2hwrWxRfECtPQqNKvkDx36vSaDxpR5pNDJcz2n1NSFh73LWcW5VRgWifE5nAhKvqtALjnA757Lg3ZJHr7DZB5xmp",
  "key34": "2hAgEKyFLeMaDubsTCdYH3piHLvk859G9xgRWPBnb2oaxuDs7yoj9B5ixVdPXYzKqHTrsgbnv1Dd6cHVEz3wxhcs",
  "key35": "5oFGZpzNipqf4KSK7ixsFpoPKqBMWdPggKQkhrAyitaHWdv9PMj6ctHLvXeUvKV1Pm24nFEZ1Pe31ka1JLoPkHgG",
  "key36": "2odSEAtUxyX39ZgGAu2gnyGZ2N7XmubE5wVVjKoScT3svfjXkvsh5WByTvh1kX5QFgfpPgVGLvVpt2akRdUSUNAC",
  "key37": "2gj6eMJSXLpstgugsitMz6TphYZmxrhsTg5UGWdQas6sGdGYXk5aeM9RjJB3e7GBYP82Ft44GKCcmZzpjevTiTE2",
  "key38": "2LFpYcF7NzKhun5m87PVWdUVpTGhaEWB8HqMRL7WgZForNWK7b8MTrfmZmEQ3sQfXZ5g87pZzgRg3RDQMnmzRdQN",
  "key39": "3PL2pbLr4MATP7HrV9SPNVZCXNAnRUAY8EM3AnBR1P548wSyhmEZY1r9RmnKuJSd2JAxLoePHH4DtDDTeikCULLq",
  "key40": "59BoXnuVLHTeqQzdteyxRp1SkZwJXKnVg6xjurBRMG72T8GBPXMTtnxpmncxXSqhurKepLBbPi9zzPME7SxXZiPB",
  "key41": "56s3Zb4yp2uArUnkU9JWWHuEimYuH2NzP38oFLkpaNrUHi5bS4J9qLCWMsTdWnQVArs163y9R6gJmZ8cYhrHRQ4i",
  "key42": "4iGuEDg8tUKfxivJCzNYnXSRd8vkf7bFNTbynoDCBkshk4QU3hB3KAwZdUv3U8QKtUA4qWjmNvhTjx8r24sdSRtN",
  "key43": "4qW466mBJgzgnW8rcr9diGdsXtN6jo7damsf3vvK6iGXhzQf4jdnNV1pCmHWsdApp9xbDxZMSE4w6KVKWzyKKp3M"
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
