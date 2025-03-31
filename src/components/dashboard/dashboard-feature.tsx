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
    "3vEAPXGokDj4xMqsYUAKmZBmxpvFrzXmKEfF7eRkKuodzKZKL6K5dLU28TdDMcrQQQwUTrMEsYJmkRrxCCtjC4gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wAUWfn5Av6Z4ougLMwPWLw2HgyMZSCXd1VA8K9yzY9VAuBX9eC2uBzdk4hKqa8Cr9FVcfWzZsMEtPZczqSE2knj",
  "key1": "W6nBJBHraqjEUGzB9wZPx267VLb2nZBFcCS3DAFeXH3oR4B1WwhxvVqky38rELmqMUPpNPQuNgWQh2MjNcnhTPa",
  "key2": "3KgX7XewDLLkgKJV4siWgF4cWYpVDgxsZWT562hmRZydGr7k41n4TPjRmi9mZgDBdddC3a73tUFnoujXBYusooop",
  "key3": "4HTXqXQGm8gf7Cdvd6pMypg5znhCi2PCfpKYMqD1bN8uKFpsNfaGmJUtYYvDfqHhrTWYQKDUpVdN3F9irkDew7GG",
  "key4": "5Y1JY2e8b1E4SqvyjQb1uKryeZzJcB2imLaqHpQMwMRjoNq8CHohTTPeE4QQk2Tdis5Y1pCWzMgWWMxecktRMvy4",
  "key5": "pse5UWsk5CResjHQGAWFpHf9k1drtXoeihkbMy1HmDKVQnG9EiFLvz26ask9LiPjdFdGjmLU19FBkLtb2ce5wza",
  "key6": "5Af7c1Hchf33pyvo3QWtVtFmrwizuAx2yL8KVbWvN3VaKCbZYWogyTWvxojsGYstpskSX3bBCgCk5p5G7TPW8XUc",
  "key7": "3dthL2U7EBaXHWUJfR9tH1MSjrK6ucVLH5PLZ1A3fe8tGqss6LQFX9MuPjS49AaeAHk5txEc9LYgCjRP7RP4MhPX",
  "key8": "4i3PnHjKf5BQtgFPwzMWWin9biBWegvyhTYDhAgErr4kzyNTjVTLw4kyiELp1k8jXEJj5RqRCzEihWCcvdu6hhSw",
  "key9": "331HJerLUay7ucdtRjwkvbzrpmEtKL8o8bpMkc26ahnBUjSm2r4q8rDFrKsmrS9Pucr9GpBp9dib18DgaRqNf2Sp",
  "key10": "5gTm6AyLrkfDX43vBehKpRHHX2Rkok5FJhvqT8sXBHhdqtccwqX5LNvZ5zuLqw5VzLfhXkB3t8RC7s557YdJSjcv",
  "key11": "64M9Wr7UxQNxZGTbmcrMmaRSR55DhECNWQK9t1JSQ6UV5YfUg2iUbP27sUCxhz8m5TDjiVZQvD2HoQVZQfY3ptsn",
  "key12": "5WxLJd3puqwVJNYUjqQMTpEthd83Av1HHVzmwyXWudaQKo8PHBZs55h4MUZRgu3NZEdpD1gJXyN19MMbet3PnjMM",
  "key13": "67J72HUQgAb6AFnnx11aVijSvwCFQDbJzdRpTsQcrLNN6WmfLEhQuEHqKKix2u8dC38Lz6PEjJXTAThRburDt3Hh",
  "key14": "3XfHgrZjhV9m6bxyMV7VZ8eoyGuYpw8MvVyR5gwjV7fVJ5GtWCfR6EWLmUZexLjWUiSFy3RqbizR8kjpaiMSwirQ",
  "key15": "3vA2bzJfsM2BsrXLxXnAhjZ8p6LgKYoLU6SjRgsMF9jdr7fKXRT6uAH7krdmN9uew9cT2b4N3wEyattHt1aLW1Ln",
  "key16": "5MZWLMND3sMm2sDHoMviWaWJs76NeK7wAgFPJV9tt5U97jPprTCFWNBVbWA1CjGkGN3xPrwBJFpx4Vu2wZ4B99AF",
  "key17": "3cZ636EzzTdEtj6NZmi3uUq6XMzJhrefP82Ewk2sjiozN2hSZe3aiHp8PrzGPHDANaucKwuVK7BU41uhoqntKGwf",
  "key18": "uivr4gEBofHA6Km16LYNyWegwhvHKUPnVXrAN7rwAHNdA1MnnjGkN1nvYoCywTVNwmo4rwrGgSkhzRMbgTRyA69",
  "key19": "47L8ooZ26Wb1sPWA85fupZwfd77RHwk32X1xiWmm3dToZAc68XoJ9nyvRQMUxWAHfZdU7cTMGWXtDbfjyWNgaFaE",
  "key20": "2yGdh4i8XEvUC1jASDLr1fZcRP1ZdJvbV4WzMDMAqEnTJXU86jwAgRJ8orzFRSgAMbSjoTKXuhXymAoCkuUtb8sR",
  "key21": "SSfcgyYHqtrzVazjawdmwyRy3tY3b6fNNhekg39qWTmDaq83tXAdsxCJzZERE3bARNjAicTobNhNxWBxrAjsN12",
  "key22": "DZ6QDYFFNbw8NiubzoLz8411kpxxgZKtPhg3tL5Y4rri9rtAyyk2QK1SJoDZm1QM2txb15kKurAMYDdDvMG7bNn",
  "key23": "FrnPvgCb81vxuYjH1S1Zr91XqZJ1SDakVFe8GwJRRPwKQwyLkoFCj17DcPmZdq131NguTBtXL9bc7iBuuxdRbdj",
  "key24": "3qpyegAaj22kzB9V4XzD5ikGwixvTvUxCqmVPcWYud7wtt9cdL1kPBRyrr6eqye4BLKvxkKX14PqGokapmUJ8gix",
  "key25": "4ZrKoaMCPqCm2GbKswR7umdKAyLk4LQvkp27Ys3GxhUbQqq2P9QudFuDtdBt468LCadrY1XhsnWQumTwDPgUszde",
  "key26": "2k5NnBzZsd7hpJWVZaoCp1vvmnqEPeziuVakfxnPx8vvjd9i9hnzYU5K7UYEbu29GuayahCS5gKsWWrv7Eg41BT1",
  "key27": "2pMuni7juHCMwRX1eZmJDegSZ7J13dLBSSzwpjNXgDGix762w8unnrBjLZpfoo5tb8yafURmXQfWHc68DE62HVes",
  "key28": "R7XBzJjCLgM2ta553Cd6URjSzZcpCFotyRYsvWHU8CdqMw3NZCD4kuSZpExDC9QqFfVx1cTWWgspzosuxDAgi6w",
  "key29": "5nJw1f3Kn4gk2MaDMGp13L5vU82e85ADnZBan4ChfyM4WUVxNzyVjkA29NoVka3GRHsGZY3jfn5hhEXsDDpCu2ED",
  "key30": "5zyPxoV6dspQzNBP5J7MfDgD9Rz2HtT4Wc5PEbZntw4ksW2CvXKN2eYhm7ki1injwH1vMPtiwp5YDnUihbwhST28",
  "key31": "AQWkgqQkWr9Sf7vFwrgc9CeoepVNbhNdbx9RTyQ7vmLNiS16E3b8WqUF2sxG751smLQyVBFREecf9ozRLgQETsc",
  "key32": "4wRhQ6jr8tSKcXKYMLov8APNbyevEZAy9nY48Ze6crRZNjeM4j1jwxz4bJ3LWdbmNFQo5gMS3DzuZP1KWvyFQJpW",
  "key33": "2izeD9qiDiSgcK1iVzv5mx84uZumUHnLtyNUWvpFF9UfYP35zgVaXbKCh4F3vHH23BSMxhuAiRMC85jjKJcc5X6A",
  "key34": "2J85CSH1HxBEYEqUJUSwYs5w6JhpHD4mVGZjhMjW8vGJCZ39e7Wv7GJWDHh16MqZqDX6cBaUxzZs3oVbrNRNA8Q7",
  "key35": "3qSaZoV66RAqFdDBnCyEDRqboCjxLNoXDuFrCiczgwKzPCKfzJ3v2Y4h6RfqM5xNqMVxnSwEmSGSJJGm81tXa6nj",
  "key36": "38CbEq8knCKqJnu1MpZSUAa9Asuw1t74F8dA4Dro5hk41xCnpoqAiuurBy9RqsDmDLEXcyyEXFQnVuxygRx9cs6b",
  "key37": "Cuoq7tz2jpbwyekYoxNZq1SpF88rz9h1FwdaMbghEERB117XkEDiymgVkCbnNsc4gz9BK9RZjYjv6QdcxnEuTz3",
  "key38": "2wPfA6sTsA1sbY3CXD5GMeygVK1NB5H3M3jew6xbb9X9bBMwR4xBfwAYPP4y4QiAJtD3nSfhgSAzqnLLJdoCyadh",
  "key39": "C2GVWiKi1QjY4dyL8QUxH3R72j4zVEyx7m7Y4yETNmZUyg4f4EY4JkCkBH2RHyWLsRGiWbWnHswNvAU3RvJVRwW",
  "key40": "51XVPEEVP7JSAJFspgPXZ89us2x4xacLHrfXHpWRD47f7KnSSvv8n5fo9Z1AjtSrnWUdCoPmiTgsnR8b3eRVM5fa",
  "key41": "3VQygULFMvhDuGZUn4D1Qw5AdrMRztZygcmEuT6WMZRVe5cNAZUvnysvRvfqH3dGRF8H7CVvAsEY7tBFLftZKzBL",
  "key42": "5U8mwdY2hjseDL1rrZtnSqQpwuTxLrihgdbhCSWqJV6iZPS1nuFf5Yjyxh77SXE7Kw5K5howV9UdfDoSCnJzbYHk",
  "key43": "5fnf2LeMGA8JuvWwvwsGs39u7sB2m7FDkbubZM9B21ZVMPpVshBewaq62VAgxbbXXaKHrbrDAoy3tbsCuSDnBqth",
  "key44": "3gyf992yMKtiVf4VJ84XfXCDUAgDC8EtFCFzzMvKxHvoRe5zvPX6T1pXL2fhFDZERqs8uNt2GwRrk57Jq7FcGGhT",
  "key45": "3Jj1JGY2xbFHseH8rM3qxkoSyHTzVZRS7P7KpZP8iWLJjnpTJmc8DhZBq9wqvvK25vGqLgzCvkB6izg3nwGcM3jE",
  "key46": "5AJo5jXfw9q7Rk4Hp1A7by5WTogk2aPMVhE2AKCD5n99gPtYKfqfpyEor3PtMptQaHAqAQUtzyWQkcTKLA5xECF7"
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
