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
    "2BTonRMP6prAxTesgLeEiRjWP73Tz4hcF5BNqYevCzUvz4c5TpqsmQsXfP11sCjzkNg2sJTGATN1KvDy3tGPLwer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cFnmgGhpK5B3CPUpAbqLUYrqo5fVkxSfasAyQxcHnrHT6CtPNyeM3bAmWNvGJjdqc7b2jJKBRoLJYJ6u8r2dWbD",
  "key1": "3GwmcxCtt9q5iJhRCwrQXzDaJ7Xr8yvEMdpf6izxLSwqw7G55TQJRhfXEjmf99fSj35WU7dVWXcy1RQU3t27Abhj",
  "key2": "3ptUQaVmN5f42rjLZDzGL8r7q3epvLZd8oXtWmC2buzBTBFczNQm9sz7dCMVaRtDJV6Uqz6HH85z5hwmHM598eps",
  "key3": "4JjU5Dd23K4bKX9mACt89vnaysCZ3SWREiXYn3BxYixDunDHZKBt1ZtcP6pcPJNwsb7araXKR7PjmgSi9WWJrqQw",
  "key4": "hqT3SPWSi2q6g3VH1513LfHc7GuUodZ7iQZZjqeGkw8mXv2gUfBmuzn3mv7HiFen3APTWMg2TJgDP4Q7FFwM2UQ",
  "key5": "5k1WKUsvsvhHHKSzU7PYRCapGcDtRpTVvSpoAjXi7vHfhb2LCVmFmkWVbLfTKS3qCdHe8dqsydzsGVV8kCaXuhxd",
  "key6": "5x7k7G8XAiZ7sumYzUsWZQMabn7xGq3LMZjEKuBqiS8t9zif6tBYpqgUZABUoU9JNpLbYtwe1sqkVBz5BhhzU9Me",
  "key7": "NrBLAyzsP5m9kkTQTPZEzNh58MhEbtGPF1fayEUmJRwzTKovvb9A3SjWLvrPzixSFT18EsMAiCCj4nUdd6WcvUu",
  "key8": "GVhg8VigWnQsFYgrD3XUdfyFHd9uZzR2J2kAcsfzLSBDwkPUGomRm9fmybQkPPniKvCRiUunB2aY22DMd37aQNV",
  "key9": "43gBrKr22ufGZenTjvBwjBrooYDX6r3NuSQyqDc8GFK8doJyQm5mKPkhmcmHiSh1Li7fmMHFyr5X2SCQDG5PvHV4",
  "key10": "2ZdyboxruXkGC5z8PCmtrTgggo4HFWgwNy7KqeU9ZmFo4vVehAo9PcTetsCGAQbDaLkU3RVGVXFtfFcswndSpzTf",
  "key11": "3e3Rz91LCLZQ8yrRDVGCHeXN8eWiPrSvrceAmXB4ZRXzQ3vnyJxik4LPGccX8HN94oiWHMzibEWuUwM8ihvTqjpK",
  "key12": "5P4pn8TU7HSma2XpW6wKcP7ANcgtXxdh1fPt2yL3bJGCjsHEkcaxgaBiNZJSUc9gZm3ponU5VMoMJ1rugcQxhaNP",
  "key13": "V4TND6EJcd4NrK3QkxG2Htk7imha6oGBcgUEza5T2aTJBiLA335t4iu5pHtnGzvRFcKmhgdL328xm681Gc58L2c",
  "key14": "2dXsqaVMQaMLdQkea8iYNiU3Yx8XRKxXgp8kph4nhCdw4nBBhe2UtK6ai9BamjyWJUoDvRwLNrfRLqfTQEnWTr5B",
  "key15": "2MpS2cwUFSbRuGEjrySSnQr8KB1VK8cTb1YkU9WvhA6UeK2SxsxRsXBZSp2w6avyrv9JDwJJ5DSiRRp6KigmK3Ry",
  "key16": "3TUqXsSZSBzpbEfBg8CdLtseXAND1ZKy1sXNbByEV7BHgCTKcQLYntzCJUJzzf63GHVxtPFQev5EzbAPLAic5DdD",
  "key17": "2Sd6KcnGt6fFxkeGvA2GgkuvJUuQU59GcgPCJpepkvgmBdHvvfec9PEjX7WJey2SsyYFe8i7YEuVo7rXmpvie5xN",
  "key18": "Vhk1JY9XDzkzQietwyYpWmQyHwVMfZVEgonn7FPsAFXaeM6QzHbqUDKoy6Mvdum5PNZFZA62sMVi3S9qXSDenJb",
  "key19": "59UXrGgE5L4NmgD9oNufFAK92s2jEtUMyf9BNcveyhVtfaL5FA8Ea2m2Hu32emKk9Hvgenn61h4PpCtihgKHqxEu",
  "key20": "2G8BZ3Jw1LQ1pVBeYjmqLDouuQwsMXvoTxgxcBvTi6zGKYXD99nE8j3mfz8qWiVq82Fnqe8cikiegHkdfEh162VP",
  "key21": "UTPTTmSmWiLZEFQm2djprMhuB5jEekDNkht1LkhhHTCTYqZT6SRk6ew6PBkMaAD8mR8FtAobwNXdmD7rpuhxVTv",
  "key22": "5CNcQDV7UjmG3yrTaEcVydB4446eQSAjT6Edh1KD6LhaAyTrr9EqvS7bwbsnkA3mq6NqT5sJA3H1QRHKbZJKVcD4",
  "key23": "3AqNJnx9dc82EkiS6fvy1PVSxbmFzMUMcRYMfRkVjsL6S8DBcF1exBqrY4JAFQ4R3Erv48QBrB2nccNF3yrVKgV9",
  "key24": "3Req5y9wZm39HMENmrqSgsbCi7g7rrJZG8QFsethQEDLvU44pv5QPie7ZhiR7WFZUDxjAQYvVDYmBwbHZtGdqpyU",
  "key25": "3sruvcm3QkdGW9yKyfVyvxL3v5B28zn47MmDsCCvYmAnfGMKRc4BsY4VkUSwGD4szimCFZG1CppoumyHbeXvkZxz",
  "key26": "2GXmk8pFpoBgxp8TBHU8MAZafh1DrJpfq5QPEm3iaUkENBQ7ooM61oYEedztT8txHCiGHKKMot3caoKFX97ZBcSN",
  "key27": "2M3cYvg3Uy65wEirNM7B6hC71xywCJHUmc1XaXpAZSE3oERxYg3B7cEK8L2bgSf2cGnrJy7ZNa2EDgS6oXeMXgxr",
  "key28": "3uxAmrpBreeR8CsdPTivh83NDiKUdrE8hEe74EwpwNLWL55SijYzcodcMQ75ekBNVYUtAU8EFvE6jWxS7hHQm9kx",
  "key29": "5sUTUfHnWFKvFKpeEBoa82ntTUw2QxgXphWezSgTPjuVCbdLf4mGRzW5qTeAB6kSbVccyRykTvpFfUTqrnW5Xgor",
  "key30": "2siNemBZA4MBmVfYPjATAYeBaHGYPvdwJQ3QdAcjZde1UNLNpBnKcBELu98EbwSY1aHYEVSVwHELUmzaABWfJupV",
  "key31": "5jXnB3vHvmjvMyLvLSmSkoTBxACbVuGv1fawt5TMJCMZxBv7NhMMVkHiGSQUrTkPBZSh7vqdAAyPEcrnMb2X4n6a",
  "key32": "kswQEQDWeMpC88TPErwksGTZ593JmURBpvPhC5NiNNCeW4EPNnipzDfDDZv5T5gf84sickepoqL5jJCqwX34U3G",
  "key33": "5FP8X1G2cwqX5GxVXd3kkWPGJMnzj2owGNEyV2D1gLX6ZZpVSVcnjRDZaaibULY1MQsVjg3gQcNtepFyogQBwWSC",
  "key34": "3vzjfaDzDaYgQQDFHFLJLHVKcnZtGwU3inzTA6RmSnNAqTSrmimxVJisyPCvRe9DnKffxmYMigr5EdkvjjzAZ5gH",
  "key35": "3bBadhN9RDVisujA4J7AXYSbYFVopCqgkHD97HG7hLVEqcbCv2vzrZ3BMxShQkc7ShHkYLdiKUqFw4FJYza6eMj",
  "key36": "5uQjx5E6i6kcmbCui8NqarK1DqcAZBLKP5Ad1wNLXpHyUjKFgSERVpGeq7NRGnLoWazh5L1nQvsEUWXizNgCboM2",
  "key37": "2iAizkgF2txQfTbyYU5aQLybSKh3DXRAYg6zPMqADS3S23ovActbD7bYhSxPhzLH8iPydV7VeSiuHyhqzbwgbJpy",
  "key38": "2YmaXQYsYk2xT4rs4wiYNsm5Q52tTePm5wvj1oTCDie3JDE5C39zJZVSgeXpyrpxvsyuCFU4YqBsY5X9U9pD3bEm",
  "key39": "uVTNVdMy3H5qrxQMsuPQbGe6Mhmc9Coj3pH83Su973U1xAdLBvA5gxdWRxZaCfkHMQ4JUQBnQS3pACcBEQ74UvQ",
  "key40": "2eBLbwqKXt6KmPMohT1Ph2HPgarAtqRPqYuNnsHVjur4EJXMFEuAgG1VfbW7Fs8AQX6b4EJeY2XGXRhcet6Doekw",
  "key41": "5cx2gngdM3un5ntVSwtRcpJzsEySuFGLyX6erGSH5eVkBuHXyBbmBnTLCqPzDeQfpD5NZTfDfUXxapt54DC8U1zd",
  "key42": "wnR65VFjEt175443faMMkUNG92B5ayVNGu37WHnoEYXSdGUsprw3UzFDLr3nfSoaEqU2ankiQuDTEQyQQYi3q74"
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
