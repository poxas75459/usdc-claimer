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
    "3rtE9vyu8FzWhpWEjomCukK9TNxeUQ2XNGKBmb3G2PmLpViLQCnGuNswqvugPVWtEdLdtR5MHLFU31jRV5eoYSP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o4yGA3aRmtmft574eYuTXZTaujLVwqJm4UfnjEqP3eYEPs9ykHjz4JedaWpE8z8THhhUvMea5PdRdpYrzP3r97D",
  "key1": "46njdNNmUwcH1eeAYSqzLpjYd6rivkPDT74B4am66hKydQbqsXxrFp9dR7PZYrWbsgYETbxcNjpHWHvQGfMd3kAk",
  "key2": "2qzC74ot7wQgWtd7NZJVT1eDqQRGS7AEAgsiJWiWjEwrExgLHe6QQ4tvkUqEjXmwpFiw9dU6wdH4f3HMz8RKERUh",
  "key3": "DT18RyXY5k1idtGzGbUNNixPQUFvKhwgEM45VQyJ9i8frr6MxAA7onid8zE4ixgpRFLwdb8WBLqojvuFV9k72jp",
  "key4": "5p9uay3Vu78PiMrAbqeP9EDs67jGY46E97h5QDHcL5c51LsFRr3h68fJVVLnn79p23oiTkXL4JB51w5brgzaJjgG",
  "key5": "4FtXb29BtSwp7U8TiFmHUTPtD27JJygawvfjEcEru5nuD79KWjL3s7am4W6Nwm4q55LjRq6jt4UjQLRUWEmytSYT",
  "key6": "3Euhd5SUXGzGrgRcfmZU8erqgvoP5gxoZbSDGgmoAqqSWwU66jmxHyd8kazboMWVFfdShRs3AHx4acx3FZTTgHfU",
  "key7": "44Zm5stFMJQQN7EkM7b5PjbGUjZ8tDkdWDswRbaJtaKUcq63fBpbxKMqez4oucw2rRRMoXFfQ97SRRkyeS46jm5A",
  "key8": "5xYnGhXxkjcqKJ6b7C77yFYMM9BjsLwRB1LXdsdXSxc5MpDha3XsQoxPfQCLzZ7WcR9LQa3sbs4wvpeXwYnkiQ7q",
  "key9": "5EbyvHe9VnqYM9JFH9JYJRcH2DvMAwaDLFhC1yfGC6T8V7Prdr1hEnUQqetev7txXanjujPhRyqYNqL9CUzfpCet",
  "key10": "4o18tsyDUY1w8ZExfaDVBV7ZzFCdUCWED3Y3xWtxFRvYjLD6chgaup3QotxR8PuAcPnTF2di2N1A6KaYfw25fWHe",
  "key11": "5VccxMyVaaKajsrmZCQ9P68tA8kmSuUKQwLZY92GqiNBoRdq4nWxe1KBxZqxQ5LDcHuroQ557ehSGAjVSe675fpp",
  "key12": "4RJvQ8tcJe3PAGfj8UGsmmStBvwqZpoBbscwGMXvyBUNkdqjYAu3SubrpyWeJ2r3dH4ZVugxgckx7ViLHj4Xgsrj",
  "key13": "3oUSNLUCX4jK7vaK7bB4ud5rGe2UAEAT24CgLsCPs1DNRRzUabedP8FxvN9LmC98Fc6oR2pxz7imLJ2AeUSxK4tB",
  "key14": "3qJrr94x3LWbCAbtdEyhjmwojJTH13NNgCNAocv6KwErZW5KWptts1qGRnBjqedM2oRMwwzRNzwS5C7qZtRv2KgZ",
  "key15": "XUTMZqag4LffKgRj4UiK1YZ11q7Co6ZB3ur4XToi4sYbjGia3nCc6sdAacUHFcjkFi5SeRX3vDtETUds5kbU9jy",
  "key16": "2vErFTkh2Gh1WyGTszycxf9p5e2rhK4ioUyebXwEFGWutPWQX7WqPTbknACVPohFJ6dzVUXGiBxxo6BSk6KUqptz",
  "key17": "33kvmhHFSRBEXawWCHcdxhibr22kaBqmdWSSGrZ8oHSLjUWprJwPGC1VaXw6KtWYTBznvqoXjqnmVoH3Q4DJQR9r",
  "key18": "5DukEcUrKHp8qtMEmXCRbEkpua3mK7Ng8ppgtxu7FWTGi4GcTsQNU7Y1cicYqTzNa6N5PHKWqT3387vnCvSujUqh",
  "key19": "JhMeifDoRw1TMi5jxwh7gUHUai7q6Jh8gjoXQFU8Zx1zGWgAnawU9zeUmoNTF86HUiKRSaaZNWZyEsVdxnEuuFq",
  "key20": "yXi43xCmQiHE71FqnGkhmWTNWNz3jfKHHczme4SSjEtKyXNesTSdWxnWn6Ck3vZ33vW5pAJugKaDisBqzJt3iCm",
  "key21": "3sBBqNJAGXLkBB9gvdTcCdjibqU9GGte9ArbxBPN79ZeZsAiTueG9XSf1Xjo7oKsjdcj9mbTdN78L7sSsiGAuQNr",
  "key22": "61cytrhMqS3CH5odh2BJXKbJLAUqaBPdvTKXPgmTWzwokwWQwKdRRsrZf516kCfVspouzN7hBRJwyNQA3BSj28sB",
  "key23": "3RkCMXGNFFR3dVsXni4e3f5MC593mUnToFo34RpF3M9woMHVFav3SBC7o6LqgpWC1iCsWut8xsvaHJXCFrxJFLoi",
  "key24": "ov7kvKWqHyyskJC2knMuaJnuDZq31KLyXhmZYs3MUSwYD8a2AJ4onyNZK7P9ETj346AydUS5C6h3AuuWcJFCU5E",
  "key25": "2Sr8zWnchHUL5QPPmmCsAuF8ms7SXjYfsx3GKqy69hPzJ25CXy9oJPF27VBNFJTVWnaWNnRzSDnurunex2tdYx6F",
  "key26": "2tJT4tpsSDak1S5rMttAbrGEaC5WA6u9fSbkNbgw7UjR8jcid5jUnbBrobKb62wFkpAdrkYadJRVVL3D4YsyxVpT",
  "key27": "3qLtPoEbFRjHrMCY5PryZwzmTUN4LHHbe4BfGTjuUUYjm1S4EPr2dCmZDour8Rz68F7dk8DhWExRsD4wnJor1wsE",
  "key28": "2AkxZHFsir6kLQE73utUGkLeVNwXHK2sNyjDaRskuCAiEExVFTPyEpR4eo6UkSLEWBq5aiNugktKLv7dDMWi6TQw",
  "key29": "5oVKbqyRELjbiKnsCyR6kBLUJ8ADCX3KQ3m1ru29FdtL6TrHnWqaTQwo3otsQq5Ee52k4ZThysmETUiySvfE1vJw",
  "key30": "po1hex3rwAUvPQ8xr7iCvwXTg8hLfsxMeVQXxuRf2ZneaojNdvJSrndUb8kMfkpEGGMLCD6anjpMqG7fRx4sGE6",
  "key31": "5zqsSEvUcH8ygd3u9JoTdbM9xkgCHjA8w3dAYq4RoVvHNstjhMungJp89KWQpCN7DYP4fYFg8ffor4jFHbazxWup",
  "key32": "25rK53v8ickj3AyfA3T94XjspxkCLkZy7en68BPFpiM2C4cMpoPBsokwqhRTo1N6yYAQKhYFcpo7xdzbyPHTf4er",
  "key33": "4FnCPozahJHpdmWXUhgnEWbFvLYwA4Dg5c86kFe5GWjxxotUUutNcqgybgcoVj5dSSpTxX5we2e5tdKfKjPSB1z5",
  "key34": "5SYNfDh1NYkZn6bs4jvHU2t4oJQvvi5GxUobbiZQXHfHYMBFyYzD48HBPyFj7iwCR5eQdhBbXZe5VWKMKRARfeSb",
  "key35": "5rcESaKYHmppmzEWh3nwudCRLxsgq2u2taK8Ja5ernAyWAvCLoecRZVwxr2Q4M2osQ6RZ9GFMnYXhj6g7jfkzPc",
  "key36": "5yx2h6JpamR37HYUWmmQjMbzQd4fgvsqw9yb5pa4wt14SWMnWeRRvgDZmdNTeUKT8BtGdZPmDZVXdthqkVEKyBHd",
  "key37": "2WTCBsPoFEQPnmdpow9LZHy4YP6TR6encWTNot22KiBGnbK2TQ46jJ4ZDqfBunxZdrHD1PQ6tAFX4nh7Q7eYqoVy",
  "key38": "gxcV2Y2kQxrKUyeCNAvFnQJJ4qZQH7T7gxVVUdYZUehmpGF1ZbGvBpuMSCR6fXsxtUvojL5dWHvPMkbM94mq1er",
  "key39": "3o1E3MvwzHU5KK72fZnmbhbBLkjCXEuW4JWEUpx48xKjRfQFqBTMdXqT779eUCoHkbRg2pqn2PTR8bAzrEwZuXHQ",
  "key40": "yypBtsXSPQA8weDk4L5bubQo6yrTqA5Wy8q2B9U8UdZwzC487UkJW8oLKSeWnmikcudNh115jhKeJvhw3hjn7F9",
  "key41": "zYRB4XGduQrnaLvbV8HRGJ1yQstC1Nv1nyP9PC63xAiheY4E7J1qEa7zuZrfCjytm8jY65vEpfcbjB9wEwQd3k6",
  "key42": "5LQqj7deCuCEpmJdxbHGx1V5diFEBnd2GkZzWxmM8eL8ify29mczs7zT53Qt3SFkDuzmrniVExtxVRLffBcDL9P7",
  "key43": "2codTvHaLwaAuuA5gVpRJ8srNYPB2XCaK2e1XLspx75kd9xVPBss689rCGDRijcLzVpkESpkqPeJ6v69W8XSyfGp",
  "key44": "4BEojzGkiYMfYqsAUnUUf6tTbgtChruQQzV8nyPrruC66ALcHzxqumEGirrp74VRHWJdoW5Am7tVYLX7WfgYRfPJ",
  "key45": "4NZrJGTJJwSU55aLtshDsgfihcz37wXyPeDwuRvegkjTEn7QYsiRMb7Mq1ipaHqQ5mfZtuxicSVZvN8j9avBcin1",
  "key46": "zaqwyBQAy3yLhvQ1VGiakbvvx66fH6JbXbFWWXvLiQpKAQs2T5TKbR67vcbUqpnwMoGThtWjKSb4A4YtchE2ZRc",
  "key47": "jhTQfZ4XKDS8RGSAX3hQR2Kt6C743NkHExDAhikmpuyDA6UDYHuVAdBsBSd1mvPBRVbMpFrLppT3HmLeUhJRr5K"
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
