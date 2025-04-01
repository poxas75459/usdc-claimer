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
    "2kDRkumrsgMTgAxFPwDKDYJ6CWmzucp7zn8uEULXbHP3XK45T7dqWKo64mX5rQKRVNThNL7GQDSkez6cTQ4WzeZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FCYGRAPbCbftcE7p94KQzk3RSJPt7c6ph9m4AZ4kmgD9uuFzbYGa9egUNqforniUESAmM4nzHU155P424CNL5xb",
  "key1": "2fUAguzasdTK4QxkSfDPeBaJqBggYt16pT2aJeZgGPsNEFKbu71qiUSxC3k9mtK3b1PRwBMGtoGxr31ZA4uEeYUJ",
  "key2": "3as3ReagiX3epDi55iTfgqgYVqZGFVhhZxEtpAuAJ85BRDSvGqh3t9BWwGzAzBNEmJXdCQ3T9Y1s6PjJkaqe9YMG",
  "key3": "4WQ4ZzNkdJpkbiAHtXeYFzP2gch7XLw4fKHodY3SrAKnksUfCrwu4jBJC5Yd7q4KYU1cdg7unGqsG2zmqJ649GcJ",
  "key4": "4ifCHyMEzGzhCiLgLogsxEH3kk7NYiYwjcGuWrdggqYSitpcUM5uc8LazXNEVuVN58CtJzPDWuuSu4uP5Eg7AsQW",
  "key5": "Aw1upfSXHigqebj5SnWd8AfzRUSkfpaSAnNLrNEnnnED5svhk7eJh2PS2cnmvZTEuJpB58vEJG9RywZn3q7nMCV",
  "key6": "2dVNURhXHmUKtaeVmZAwgjuiZTw2UsQovT7KaNQpycUB67oyiKfi2EhMwSZ4iLYvgD9Fstz9KdduxLB6N6t4QN7v",
  "key7": "KMYDuLyrCDeJDo9gSXvU8bpgTeUAk34uL2f5TWF8QP7QfqoXgkUXtyvQbeMkFAycw5o33iuQ9JyPRvaaifFsFpm",
  "key8": "5h5JCMiXvzM3UCsX7SHNhp1QJvFtb2rsF3TbNePkvLjzQjEkmnx1tsNnZwAargUop9MnnGXUXKHo51idmqFzigPt",
  "key9": "4T5eoL4eXWqTCKyvdtSQbn6yg4iSJvVPdv8Tr9C8qHBHuQjpzCCYmrykUvqTeXPusPFYvVAuwgMsbXrGxity45VX",
  "key10": "4uMu3hw4rUn4GA979gYrhAPp7DGRXwwJMNkzTckRAcKZfMTLT6WGBGPFBfh9rcaJDVZjNXMziMkGXgTPwufdaSCm",
  "key11": "4urDCuWs8zBtXfHVCzbYeAmHFY3MyAbz95GMpw1zWkfNbHtS2bpUseGCrbskKGMj1oN1yqQ1byaKHNAaatWqtYWA",
  "key12": "XNat1ouTYC92opjsUreXpJmFNSeytPsLCVgdohmFebYLtiLP9ujpbn17nmur6JG2VoDJr6qf6kZvAyDgnhRohMk",
  "key13": "2ZsSahLkJHJxoxfM8VjVyUxAaSxtxLRk6hW4sTAcdFixr64BAncSrcwRsr21ejgxS5KRzL6MFFCjLDdhkay9FoBw",
  "key14": "2eK3xLDBhB4ykVyrTUhuJWNu3DcyqCmeJhahzA7dDGRUJxysw7GN512LjpWSGMHVDAi99DTZZnkSVGRnNDCSyj8M",
  "key15": "2paDzDqzqFxzjTZWru1CQV8shSbbdNsBxDqFpoviBTmQ2uJ56YpAiXmFWDdJP2HanwsNwkvfD7LVuXB14VQqxs6t",
  "key16": "xU5jpuMEaUdE7YPmX7eJUenBpRPT4mLjUNCq5rdytmqmkGBShwEP74z5DnG4Kw9fMxVjkEu7V3XsdSsM5EdTCfu",
  "key17": "2wTJz92vYy1N2XPunNAw3TX2ePfuewMtPwM6eNt6GMD6xpw3MtKZNKWh9PMb2BtJ9gnsWgEwEgTv4TqtM1eP1Zdq",
  "key18": "4BTcPybnFU7vq2o2F23JugMyamfnUHhUeDaSBk13s7uRVP5AEunZKRvpn8DZwmksoNMtCHceLcGcHhxcpkJNVnMt",
  "key19": "2yBDf6jsc8XbtDWG78JaSzSvzD3Pu1uVyk4i1u7qYXxR1tnEnPXEmALeCj4Qa7zSfC5nhv8MdxVGiZ8LdEv1GbAx",
  "key20": "geQq3SZABBNNovptuU1UhZnBY1HZcDrHDk5u1THVostBDsyeYXWiY58yEw2EJDUxk131cKemAtYsuvCAn4sQhsJ",
  "key21": "66g8LJLUVR8NcwucQSyqBQnUgiSrBuAXmLpLbHnuSPkwKPwP3GZjfL33Gie91bsRCZVFK3zQnyj2fxN7Pwwqcccx",
  "key22": "4aoF2BuHgGaUodRNsNcWApFfWy6KT8uqgrSEwi5Tmzjj1g7uMnQGJgGALqsMeGSJP2iWPhjKKVQbMXs2rVzCz9x5",
  "key23": "3rYoiuEM3uSQbrCS5MGzpM6g6yBUBcVGUQUA9pfyfbqAEteDHjRrKvx1xSyhsHqMf5d34XiUn6NzTnZPXaw6o2Na",
  "key24": "4QBWQDuaZBRhENsQRxcKCyXwwU5nahpRb11LGYfXs19E3uxL27imXeLvYuV1mXKDCQ8iLMYuKNEcCss8ro9CJCYD",
  "key25": "5b7irNK9DteazaGe4fqB8d48vXsrqvrapRKurWvQgFfGhP4PjYNGufj6tT1xZc5PaWGM28qGXrRKYRksvWFiC5Zh",
  "key26": "2dq8iH4miKWo9aDHhXduuK5a6KPn3aTDHur6k6gXqz2cD7vZDpmyvo8sQ2stmcUXEWurKczPb6MAAMtd1rvfEGEk",
  "key27": "4iarFakvk8n2WpyCjTzqnroVJ31nLsKq75FvZxBpYvT3U3HEYgbMcMTGcLGxx6U2vaEY9D9au6dWYQDZCrfvSyTA",
  "key28": "iCEghfjDTN8cm6ZwFdbNmVNGStvmJzmF9xz5PmGJz5byPoVaS2y9rcKeQwLtPr91cNuWcYk1F8WeoTBCNk4wDEz",
  "key29": "4M4zRraFrtk6rHsyMJy48irfW5BQdzrGFCp8MkwUP3MsA5zzmXiL1T9iDzx2Da3kpiws7zSaxyoQZXUQjPQNN37T",
  "key30": "epRS6cP9Xxammy5xb4DidvMeEZnZfxbSQzEL9vYFpvJFDYz3axUtXGZ3JEo5cM8iiC4BaHtMPTRRcBhxQyhXeRH",
  "key31": "4t2wfPkTTyAaYcc6U52dzvtBY3ejG1oRSgMrCqSvrF8PqrRFyMakiW7585dVbJkV5NMEPmB6giZEYdw7xMFHc7zQ",
  "key32": "VsnRyjJ6Fv2tM3MbHwmUn39U65ZfTVB5fjaNLGcu9vV9A9Utd6eAQdpV8B79UEt211LPkB7pbG4Su1t3btZyjkH",
  "key33": "yQhm8cUebgwhUq4meYCR1YEozCLJXxRSkLYhqoYjoEMDE6G4cvTGRphdDLLar4umZYRsqbC6EjJJgoAwCKiVj8T",
  "key34": "W69W1mwiDZttpQ2vKPF3tnvPMpvjf5wBUSciYBQZHM93zQMR3hfsxQqEctY7MyTqduG73KLRiRRtP83pRNpSApm",
  "key35": "3t7cxAP8sjHqPRGwfU1MH1XXzWCro6cg4euLzFpFFthAtH2C4PLcP5eH8W1uMaYn3veeC3vMNRFeCFhaGMFvTGai",
  "key36": "VxAptpS44au8v7P1XrabXfRHgWuLqTYDMFgj4Tk345wWP7UibMqFJ2jrYAzd1AHude5EuExsPmv6kKhzMvw5bkg",
  "key37": "3w89ZKjLSRV46hZoUrGfKqPUzReu7D73zAPDpFWXucVwSX4x8qGk3qww2hpxpcgco6J7QZyLj3qZJR6eFubg4WmB",
  "key38": "RD7pDhLTFdhz9skNdRt4J6qrruEeARd9FJdcHxV4qydNfD4zsUBfssvPofyuyvA8UFB6HLY1n8ZV8R2Rieen5M7",
  "key39": "4UVGJCwB4i5RHtETmnAUK7SiZQqGZgtNfmKU54RGXHgJJVUybmgZkm9AGAWbrEmPffT1oRbKJGRxq6sQ7iqUiTKu",
  "key40": "3ur1xx3DKCi61JZqaBU7nw9B4yhXQJwiQWj1BYpfrCy14G8cTeWggoTk7B5FRebc9uZiVpNJuiDx45mbcAcd86PG",
  "key41": "2bWXK2VT9jQLARwT6jgXuBnjdD9F5X4PyD9B6BoAbPxSYiE87HrMKzAZm65hxcL8oPfgU6CopRogptwYHDL5habe"
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
