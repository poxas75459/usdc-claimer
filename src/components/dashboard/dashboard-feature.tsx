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
    "51rpdyQejCjzJ7Ee8rm3h29xMRSmDmR2EBxM5qxqMFZ7ueRRer3YDGH7MN376Svv6K9YivbhqRZLwMemD2sekGut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GA8VYYH5QQQr7XQ89bQk1cT5Fhx28CW52A8Fb48BbKHpvLC42NRK5CyaJV8Sr4ZNVJbS8xtnB6LXCG1qRq8Hs53",
  "key1": "48DdMmumV57Ljf5C1iRdCGwHHJpKQtdJNnvJSsxWg61VyP2UrLsWUw7B5RR9r2sjTTuDwVqQ2gUgnGzir3pq4Snm",
  "key2": "2iPGy22qyk28uFBHpU3eL2K6LNuAfFyp3BouTr959LLCzPkWb11NsScAybJa2Y7rXAYG2SxNoeaT8SJSbTwhqvKY",
  "key3": "5MH4cB5KjshGRDiJggADfKb19xpMXVWyPDki2F3AD6tFHeiZiodtHQUzrLfC5iKSU9g8aCGvYPhMVHJEa2awHZdR",
  "key4": "5C2K3muj8CkTvsKnBr97CoRzy23H5KxB3hpnGchB85G5wAs3VpNb3vKXRcLJzjcYFUiB1AVoarUwj6p4VqwdbZac",
  "key5": "3LahXuFYKjubbF8UZpwr1wkfoZzNsu8XBB5YxhZqbHQcM98n1HzHPkJi4gr2tM5KydLJhUmZ6jehGLeSvrBQkjsk",
  "key6": "X8Y1Hmjeg7UvF7h1eGQVnBD5n7NbYE6M7opT8c42czDy2TUsoEEvLxZyaQh4iPWyBdiS3jr5iqsq1mZaZj9jQ8y",
  "key7": "5wnN5M8QTnEzWnRSUzuKL9t2t2SQubJom7LsUAtuiWHAF2CuqEvLnBeL6xw1XKNVCxLgjAfcaxSJ4J1xN7V2eikh",
  "key8": "4TsTWqr5yHUF6Se8kWkyTY6tJDis7ycsm5AptAwHqVPvyvPbDf3J2iWQo4X3rPNkw2qGBLPL2JGmazNpHZLVRsoF",
  "key9": "51Gydo6RQ1bVsHRCCeikEZH2Z6MDABWxQVeww3c6dzFzec6r2inUqMkqzMCdRN1Dd4A5Qi6B3t33j5SmLcy1ygha",
  "key10": "yT62nZaDx2MH6dDRpBTdq2YJBNk6pD89FZMzEmbek5MPM7UkxxRjBvm8R4DZqq23F1bmVAFTyaDbkNZh7os4JNQ",
  "key11": "4z63HgMqfv3ejJLXPac8RQguMVxE9uBrywHh72eJRE978sAp5xJyPKbYMnBpo345E9Dk8PP2ajNMpK56nZ8qNNLH",
  "key12": "51un6jEETVRkzdrrsqEgJJTmh8BHWtTJZvciyP5Mq6gppXypPBjMzhbVkHbE81hvLT2YbQrmZjFVZrVATUK9k2js",
  "key13": "4o2F7PSm64JtgQyCbkHAiUhiWnz2MdoNLFDuqk31JzkHzFoLQdLMmkdKZwwFQN9NetMQgyfZgFop4UjArQN8azKt",
  "key14": "UVT72Eb8K99QRsNkdg8QAntbxb9btb8yGnDt3tKXK1MqrJqsEQPKhAsoaikK3Zed8i3oyL5brPKPJnkEqgHCE8d",
  "key15": "61RvALDfbNRnHqwELp66WAASuxtTY3gJxjQHtaLhJKpW6BdeYHGfe7WDwg4kFnHo5dNWLtqLqM1qLSSqi9qAz2Zr",
  "key16": "5MgknfbWzX9JNRpUhLH2NcERZKnuX6MRu7TPaWChUzxwDDNbDLdJWg39dMKa75uAkom19jVnnrySyaEzvouKhSg3",
  "key17": "WDgfaUbkD7QybGmPvfzvdLgB7uT1YSojftbrhtFSvR6Ey6AhHBFKSvZnFsuufB6RpbTq4s48j7mE3ypWzMzMXfx",
  "key18": "8adLBYJJwjFaHotvwpQQZHRWCptEwmrVAPn8BERqWVZfdT4Er51GseZtk5HotjiqUaLW9WGWbWLjPgQgVYydP7m",
  "key19": "5aF8Djj4tJcms6fE5A8x1BjQoYXaCsZfMSZJwgiyXJLbxWQ2qU91ZgnFUBpuVgWeYHxjf19MKm8pYbwUzmiGe3qu",
  "key20": "Dt3DtXiMof9ceBJcH82vet3GWuLbGKvRZE3K83WMS61ZcbcGA4cUTFi26YooPqbGisWakcpLhuBZTFeiAWpaYmA",
  "key21": "2PktiRd4Lup7rDhQzaiMfwDiemrMixLYxQnzaF7ms2psuAeUYpymUewKC46wT6QKK56BmtaQ6Jrr9kSMQyQSe9TS",
  "key22": "5WqCDaZNLD8tpYX27P9SQtpv6ehmn8X4gziyqnXRE9J7fPZnYJSmSyApoVdNzD2yxPhJsWx256MywxaBbJFGNdXW",
  "key23": "wAcrMksvTKfEptLQzeybA1tSQpdPLU9eXZSBMaeXSSjaPZEySVEHevqJ1djswvDYXLtJhjrZ1xiRqqcY8gyFF1X",
  "key24": "ssx9GkRgm2onLzbAEExCoHjC85MKqKMG9VouavoAYfRcApeNoKYQT8xK6aaTrmoduHJtUKRr9FMUJ6X7uBNyBbh",
  "key25": "5JoiauuAHHpwLZEC2RkTk7idKZWMbrQrqiFguWTi87PcLGYnKKGLLapQyjo5QNYKaTrhNKipTYuQ3rAreNLd5BcV",
  "key26": "2WJPdbiit5ePsR3TbhJjEBebzMPJ4Ld9tFyGu1uJewGKhkcn3kEhM6zry3nN3h47Zqt8B1jfTmMDaNjTU5ARnv8L",
  "key27": "5fUNyv3wBFePZUPdha6sDBN1BX7KNZA1J4M8wtGQFL32e9dHv9emZq6ciawsjwH7dwVdvt7bc48n4qCKX7CWQJQx",
  "key28": "m5fLrvbSQ287kzi36sG1Sadjkt7E6RycG7C4UEdeiwSQceVBQDZ6iaSxWeQJ82hKnpqiDnvgBUgcFZUT5gks9hj",
  "key29": "2ZxXDULxVkBPn3kiHZATPMeeVFcNvwSrVTtJcRWs4wE34mhbw5tKUywWcMrLfGt1bUxziHY5RZSZxwxi49Ds7onL",
  "key30": "494ZqYLXc9yxmsgyZBRurchGmMSXgRRWzwzCtFtXKmaSN73fNLwHQxQHcGtmmZf9miQriTACvLqKZNFyQKKeJVDD",
  "key31": "4yEVa7bquspvStzcnUVii87cnMPG37QBQQgFQyUxPZWwJKNWGhYs7qedFBEFsmMaGT6qQcVjDR7VtXxubfBBu2sV",
  "key32": "2XT5wmjTB3sZ4uudeDmNfyAesvKTECM2ZRWoVGbkU1wJhKQpKFRm8fskuWU7L7Py1hqo7ynXAv72DxNjpUo6Qson",
  "key33": "4REkrPa1arzBfaWcnh2Dz9RUdJWiwcrkUwLDHfDLzsEb9N6Zg3DbQXGif1x2Vdqmn97DYd2TFYS9SLkwXAU48oYp",
  "key34": "238kTkJbH3PVUGWjUdja1u3dc4Gv4N56s6rPAhuF6Mxs2uiLsBRZcGJJNCGxfwpWZ7MR4sGduNAGwQatf1Xt7Hc9",
  "key35": "2goDVgfP76uBbxnVLWJahJXxsMpBHyjcz3z9ThxWNnL3VW45VixdjAQDnZhesuAQTvJGzWxoUrQjYATXhnPAfRAC",
  "key36": "4j9g2YpvVj5m1RM93KKgPhgL3pAg9sNGmJt9riYrGk3PsZaTWXdRF9xRwj7V2nGGLzECWpnPfzio8URLEz6Vyu2M",
  "key37": "3TVFSApjUQVew3hGGaggJXSr5ueZGBQ1y6Wu3SyYRGfyFBQ16CfKzJSiB7AQK8DuQPNmY7rPTVnnVcUwH47MfiEV",
  "key38": "2m4VyPKrTpGfGZFTKMR8y5c43W6KEDegVqoQhVsrawgswDHy4fbotKapxoXTUZhBZVhtje723BQ14No93WXBJPfF"
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
