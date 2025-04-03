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
    "4PNygPsR4qyesnwCNDdHoybojEUTNTm2NMwFHaBGY6okukaVFbYBVXsgZSdPjDBDJ8eTemwKPDPMT4byG6bccbv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rEfNKX1HMQzxGbdLqwN2Pkg9LgZ2STycVCwyWWVpcLdKUuMzRB7fkMhNFKShzEy9JRuyQg6ToWq5V1JybpCC4gy",
  "key1": "JqcjjfB8aNriwqDf72kriN7w6zUtpP9d82YZTNuVXJQ3CZTgD4qxXbxPK3WDAmswXMuJhnmfBar9UntpE1i6JQz",
  "key2": "4xZchhhLx6RQiJdzf6GBdx7nYPjMjh25h62xtaxSfWH57WLabXuefKTYpLBHcNXdK7Lye7diTeYUq39ZwwcjS1Hw",
  "key3": "2MHZK5UW3VQcj9CCdGbB4DqaMWiMzKvFRGQgTCGRYmb8zcEepgfNsFckybwwNcWpfsZp51ypToatXFUbB7huCYUv",
  "key4": "8V8zUZzCnYbaaRNbsPs1b2yJgwcpRE7cjGTkEoSPrWDykvacHxYjFe1ap7yLrKmoNiGZDSD69F883AJGPEqtisn",
  "key5": "3QVx8J24b3iQdfePpBMUaqH5eoFNfyv94Ls9y16y3Zg5pf7VihszLcASCFxPJoxbr8dBXNTRTmdnrNsp3RSeSQNu",
  "key6": "63gzau6XjZYGtnfuHyg9s1q4VSbjKWspTNsh6v7PowfMB7ESG3cohNQbCjzzeW4DxZGznhbXfWPrfcsENp74ANEm",
  "key7": "3z51PGb62XfjGmXvFLYZSfoqT8wwxAGHFDnnAsBJTUDvn2uddmeacyPmivRZPfBQUyZfUeLks4SYpRvArtaJBkMb",
  "key8": "5UTPoZLUCuuQTN4zX91tgzKusnK8zDKMByYSj47KCZE12eGEgMauzwwjKHZjZADq9jvpVmSHdVvbSZmxRg8VphMB",
  "key9": "67et7JGJNFCinuyc7tZ5VmUT3ugEYoRerq2ta8mpbFRNQJ6xe61Mn17pWAyAKfp6tXBS9PSuyvaqWL1LpnJVCgHs",
  "key10": "5Evn5x9CX5wAJog6yRJeNinjtNRDiXzkg9KjoyZkgacNupTjdFoKZK4YFJhgik4M5HPzhb82hYd5h6t75b4aq88f",
  "key11": "4xMzQ3arL7dStpPyDwSkBbEBkHPwPjLAoaadx7gaoSt7ojNqYBrNXi6RcssF8sH8mFXWZM3rJoy948kijQrW8mz3",
  "key12": "3k2jJ8ZhjWGjmk2jKGL6jLRnJjpwggiT4SSBytpdukwpXbGqjSbZ9FZqZMpZCM1Aoc5AEtLt43eHvCViYLz7D1ke",
  "key13": "3kzMoGqeBdegCQpU3kmDuhf9NAhPCXxs5mZHcKyqm11uXhtHKdGDacqB99aC9GV9yRK5kJqWHHgHd597H5sCYJsW",
  "key14": "4i7x4CvjpQHrgmYzkBZQqL4wmbynizBRwJAZfkcRwr3YhXtr6ukCxkNLALKHU4L7Yam5bNAmCjoMrjK67ERCeTcg",
  "key15": "3EFVsWXqRKGS7M7d3PdqvTXc23MnN4UvwqacAxgMySovKnTvHQVWwRu3U1xgveMtgrRmYWvfXNxEss55z6bzeJ8g",
  "key16": "sGTGBaK7KPBMxf5wpKnvdoVXLmBs1ZXXPcLz3Z7LT32nsc6CXBSYifA7S8vxAQJfJVRtaFVQuguajxxDqdmsxXU",
  "key17": "2VtEsef6a1LtXQMLKUxVYaygydZ4qW3b1kRw5bxKtrX24HEVt6sohd8oT3xyjhM96uV64Nq1yubFAVcszAicQhvL",
  "key18": "X9uxijBEoigi55aJBfFE99GGX1cXssofdG1dksavX3vUDDYrYvzDqeicj5Z6tH4i4kD2JrR9myzoiyPqNRS3Ax2",
  "key19": "3JVf89EVMYDBJXJM3Q47Ku4bFH5imLCAidvg8ssy7X2JMtXSQTAFQ1sCexCJxFDPXo4uy75Jdqw1TePs8nBve2dj",
  "key20": "5VWr8tBNG7i42ShxGyXJeUFmExPEKwpc1EyXXcBvtGFJ2WsLi93XNpmEWifQhsrm4ku5TgqstPFEzXifB6Czxysi",
  "key21": "j1FZeFpa42PihcwS4cq9AQJWswS8r64LptxJqXxCfbiLkn47qKP4TbMrQ5rFd8U93Q88mFayaoknfNa36y4JJWb",
  "key22": "4jA7CXP5F9Z9gdEGji9kocXsfXH6Fitpv1TKCoHc4fowjzTSXWiEEcFbCFLsvyxoMefUv7Me4ZHqkEPgbdb48JXC",
  "key23": "AWEqPLtCGCEB5PPz6mexD3sNinWrXAum5JkhAuFTfxgAK1nmCR4zw1DR5hweU4ruUGZFYSVkLJToBa9PvPBXv91",
  "key24": "2yWqXCBkFJ7QV7UnviRyDthg4FR47vafLXGCWkL8aeCumHTV5N991VnawGTGvJvYxPeS2WW1Re7VJQw3i2qf1tPJ",
  "key25": "2LvXDYCP8M1tc9QN1zmK2MND4hs8WJnPadYS86zJh19qCD7FDhyrhyYek6J4wDjfvt9GeHhudn8wter4KjxxWQDs",
  "key26": "35E8XxLAkyLJj1qLe7FoRbnvX21DGnueUeoEZyogRNKsbnQmKpXJUWLQYQF3HJHq4PE775zNq4CQAKwsVicmTgna",
  "key27": "4DgPXqW8kyDdad1ijJfffDLJzEhWFexw99hiDYxGoJS1wu8hBTffRd6NP6fEHKvZmvDTSaGhKq9truLFLUNYEvpx",
  "key28": "j7ZvYCcKwG8kvUibpNpucJYmQNWn3REwZ9tMFRWqvbfjz3fiYZZCq7SYc6jiVfD8nK8XpFHPUxgs6z7Y7aRRvLM",
  "key29": "45esZg5G3sap57o1YGxyyUjp9rDUZg17ZZHeHXhyrZADfVMzD6yDqkGUZED7cL1fqbYwkddtas3YSBn1VsXFxheB",
  "key30": "287KWPubuBcNZTfBimoUwtNFmWa3z1WtzxyS3jSsXnQUWo69uuYhxXa4ofiUAbsSyrLyAYiLcuBCKhqQvyPJp1zz",
  "key31": "5aPMNrPzjJa14AXhPJueaZ8aRxJxgLwECR4XzMXmL1yunSqCYpuswqafyyu1fKsjHTriJXXnxb1LRukJdKC3DZtz",
  "key32": "3mrtNaFie3A4BpTCW1p8PHJWMEPEXLukkXReo5urfSGkMcUUdKHN98fUahNk3LPJCE61vbXgTKxe5gABT8rKbAW9",
  "key33": "zZnPygiPXnaDAPnsCUvSfveFM2u6yKN2pzKVgjfkPCAM2nLTqPC647wMZ24Rsdz5erEcMHQFVPbCwqw2YvjpiYB",
  "key34": "45bJE2gxP2oPFcmJ5q8mdETjs6wz6MhYna2DKBDe8SD7zUDdmXmbTdLrTWiXGG6GTfV7EhzpZYzM22urycEd876Q",
  "key35": "4ApfQvERc85Wk78FG7skNdDwJLe5TUcwHXwaHniwoTXPpBqi3gRmHhWFzsBxnZFXUc8CS8isAGY8dymnGszzAcyc",
  "key36": "5EubXY2a4rxusYAcxH1pFFd3r467fRgrtgkEi6irt4G8c11DLRNcZhJY5DaGE2p5RpDG9CiAKBXDV2rNQdRzfmRF",
  "key37": "55NH9yr8HPQcSyYiz4SnUt7KZ4QThKFCYQ6HzB7fGfeA44nYJPo6VSjqu3MxZ73XqEsLPvDgUQSYUyLMP6wy58gL",
  "key38": "3mbhbLJTeKxtXgTsR48gukHWEzzd9AZo5cFqucXUhLLpFQ9CFhXvPXVAHGC8GgbXyzFyny84L8KnnHMoeia58yCV",
  "key39": "4T2iJ9pmCvD1zZQcC2UQ4ru2eFwu8VpowupkRCzv1nrtpjhWJUprVQUyKX42fiGedRprCfA4p2UGpdrmUCcYVx6s",
  "key40": "2M74YmV2syZEVite3woe5zjipj3zd6Gc1hUv278GWXyJoi8xxsf5i74YdiczYZDm8L3iWyuZ7k3aA2Kan3oJ6Xhe",
  "key41": "481TPhKxq2SCqiWF1aeWdRAdwrxrjCX3534b6n3R76Gskn5sRU7PVhECEKK451ug4BcC9VZmftSRV1JggbbHc3wt",
  "key42": "56Gb6HHc4U2nh5kP3g1Q8GzWaz6GU24NqG282yLjJSktnbCXkCyEexXKrEMrxJ9KjxmUoeRtTjtv31MsimRThMQM",
  "key43": "2HdXWZxctx53BJJTPKEtfyrHmoxcg6EgZ8hUZCHLvemEHaAVySC3jBVyxAYBU9kdC51FekJUWFGbFKwTNoFFxkcJ",
  "key44": "R7knSAWCCK4CiRfB3TCZZ7nqs8v4oLbNsFXA5dY1ACZVPYAd12FiG4JJFjcSdtYZCh5w1m98XYzzBLGrg1iR7vC",
  "key45": "48xZZNztiNfXJ7SywcBtiMyUheogXXARyqWQ7xjJNdhDnBP9nmxtAC8Tb7sqKJrcCKMZaCbjXbrMjPbqbGp7qqP4",
  "key46": "2G1D6QmivzZj5XRMHhcqdY1dEZajHHNEieDjaMh1VS2bHhBytZxmEUQ3xGHTsgGq5ShQs7frha4fLXJiHJBXAJcY",
  "key47": "5C8bcYisLU2jh9eAWUXygCC2mJNoi2wbLTZCb7RJVCvvgRRDXeE3mJmzuzAU3a3LLMoHseiEAFPYcQjawJNyiPJu",
  "key48": "DwwyLhe9G1gt6BCD2FWJGqMx8a1kRVn1zQfNkLJy2u6DMZY8Tt4eYwEYhvVMXnL298Z2ykR45QUMCguzYBJeP6u",
  "key49": "2WZT7Dj8f6jkjvf6mtWNQ8oF7kKDimBGtVKyQxhUPRLSKgnm7QYC3NuPPcu2y2AmMhibeScwhLdwxUXpe8TA5Cm5"
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
