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
    "tj5D7Ea6HZgmacDkh9vupNfRtYZspUXghBn1oxmBNoS6UTAMYN2RYFabF8NHsQfMZpuAhzV9C6nXWU4BjYn6x3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eZPxgR11d3SExPk2kRbw3NPinkTGGWjtjvnb8NUPJwxLaGgD7LLzTF7QSc4kC6x4tQN45J86GFiEyVh3Vrcopfb",
  "key1": "2byDL4nQFmuFQw2qiRssh3xVBhGyaAy6UZXUrVQRewGr57mBJCREqQBpqrW4FvoXLgUL7Fvt2344UQKLRaB3RZKH",
  "key2": "2Edtn9M2RvivYecqXp61QrHh3rABAj9w2c7FTWbxC9wWPDm1wu5UNvMTbbToQPNYf9DwegKiDnda1bhpJmQGFo8j",
  "key3": "3jrsCvmkADysSXa2dL99ewqg3h8eBhtLCcVDFB46UWtnDFes2QWa2DZcbiH5BKiYBYg733h56tU8q6RLrHyLzRx5",
  "key4": "3acg2Nt29baXw9aJrHJJZ7ShRGPgGJH2ZttTUpLWnTZ9Ugq354aWPU4taL4QqgRWzw34BMcWLw4RbTUBWXSSYpme",
  "key5": "29R7xZRhZJPNWYcvtRb3PxcdpRpZqutuFnCoStQgmYiHswyNfqTTA9yLeFkskRUEY1kkJ9NtEp9AmU9ZfrmhF2wB",
  "key6": "4yjHnmvzvwTyFVfiLPfFbdYP9Ubox3AcHNSqJoduBDCCwB6o1z4srtc3cCJHmWsp7VgDL9Np4KSZwFU26CFjiTW",
  "key7": "61wbnsD2ckAZqLd42nKBwkxhVje64GKeiza9EHBaiQeni9Woc88NXJnEYHrMswQpV7SXC1gVNtVPkQtMqP5oKcu9",
  "key8": "jxbA9vbZNgnWJUh8fCxyGEaC7BgtyTcB9jFKPcju6iowcxahLEpeF2UBgnBWEC9hUYiFtU5eD5hHfWri9n741gv",
  "key9": "2NrvVzwjgTbtrGqxiSwgkorj4rqbBQAnAEKPVSXED7gB3iYWCW91WC9gEsvxTP77YYPj9KztM5KErHPgPZi6PgMa",
  "key10": "26RV2TDiWmGFYwLkLkDAK4P2C7eSwVUzQT8JM5imseM3bBcSjfrBUYTjMdvbikeJ4Fp4g9fmMHg61uzZFxompyha",
  "key11": "3B7az4w7ZLeULARVHejWvkUyUE7v6Fa4fZrb29KYEg4Kd41cg19deYPtQXycJvxDbBXgyydc6b2fpnSma1HeaWvr",
  "key12": "2HKGnyZs5DXBavRueoaRWSH986xR1D8ps1yxfpXFhGoRB6VsXx6mVFEcsSnuFLJwwfTEArgaY7xn3L5p7qvRCcYu",
  "key13": "NwQjc6kqcKBtJ45vPyTHyvJBNFXawW71dj5RLNuwAyZDfwi4CXo51DW3WQfotG4DT1ST4GbKEE9GU3CB7ysCeJY",
  "key14": "55tUVwkQqBnQtmSiN3kLwLCP3i58YRvdQm6HQ99kzMcYvZWtnPj7VaXruZeMrrhZTLnBmAtshfi6feyRwYMEmSNz",
  "key15": "ZGGd5RhDGCxHDkbbrP9qerA9XW7dqLLoHpfbo4Th7Cg8JeWETmp82bpQAccMqDaFGAzaVxkZZuW5SuzW5Qntu9X",
  "key16": "3SE2HwLvCgut6Agf3YX42AF6AWnr36psxowq65GKaLnkRFBrHQLBaQ6WLz19VTRj8CXDNcTFyF3VJUAiKZLLENns",
  "key17": "5xLN3SekFhbGdkTAX4vovfUM8nahxajgdZtE2YXZNYv1deqo2j72hR5zJoBM7CRzfLdzwWMpzNj9kjYT5U8HXByi",
  "key18": "2FJD6T47Vy7LPeJRwgRvGsRtxCvEnM6aBKZDWpPvf8jKZ1EPh9yqkJSvUnXQ7gf3P8jsTDYoNMpb9vtzbU3wqCqQ",
  "key19": "AzLX7de56zxxunArVnaVCHtQqDLVGgSPSG4YWQAFAyoorJgw3r4eVbqEdFViMjjmhEVChbYRjFTPfBzxsJutCGR",
  "key20": "3XXSW7AZ8XqoEQfpAfWhQumnWVqnkVZvEGDWcGNQGP517nL3tgqAJc5TfhA6km81N7duaEany4hvbijzq3wQw2ZU",
  "key21": "2PqtuQAwD4LY1qpPbqydhcgF5bDimR1jz4mZttq4w5xqEKh3zpaNjQP81j1mfMBVwUR62aJxL7kYcVirf8HaRkwQ",
  "key22": "3q4Z4JmjkpipsymV2SJLpKZR5Q888EWCXzqoJSXLSLNZemWg96RxN8urHcfnA2gkDRrZRatkL3B3qmquVc8x3sv1",
  "key23": "4qS6STB4hb5gtF2mgtGJ8TcrpUhxFeGjJXajE362vMsuw9tfoyc5JFu7PVs193hEtwgQQ7cKnnZSYGdb59PZiKoS",
  "key24": "3HBDRe7Xb1RLshwSERp6VXpfHp4dgdUWvFzRmyw3Mc549Jz7fn2PHJXpyG5DiY3XksEQ6vFYipZ4iMCuCUB7xjRH",
  "key25": "5qU4CF961AqNmtxyxbPHUZkbVSQRBcCKvk9HxHKVhpeAjSRJRUz2M5ctwXq4pUEbFcu7Yz8VYEv6Ra1PzNwLLhVy",
  "key26": "258oKrW3etf3QgXZFzfx3Zxdb8z9Af3mfDrCvp3GLSqywPdAcN88Lxaf1zBAx67tJv7Eb2r7N6nEHt7vTLMzoxaa",
  "key27": "GKHsnRpgJn5SfM81HwyunFtD1gQG8RBdNMb5EMQwhP1AMEtPJ6MsPJEjxafkvfNWU9ZV9ZV7x22ktk4tNwKZMoZ",
  "key28": "5TSwCmWgbtCSHzoxkP5ZugJkwURErSchQjLQMQuyjQHpYBAAiP5yqPisKc4F9ns43LYxpSEr6vUx1eh9z66VU5rL",
  "key29": "3NiwhmYn6kafT7QnJXVn8fqyURb1VTQLkDsFmXDyhpQ3VPNkthWF6PdG1c98AyX3WLVQCoq45Aej62GCoN1XiF9P",
  "key30": "RPDxRuD27nrG9s1HQtXMKApqGVJjRXF1rGDMpYNozNmhuhpR6AjtbaM5xjmPnA679Rpstvx49utdBdy8uyxanNa",
  "key31": "4zqRjyv9sJYVbCE53VuGYTNYvMW2K7L2YbPkAuu2boPXmEQb46PLctEShsv4zdimvAwDwHtyDa6AwURbYUGj7KQK",
  "key32": "4nHdueTs1sdao7QvwtLz8aRippQwDaTBdk92P8eop3oiUp1yXW9SYPUqRXh8NFRLYLEEUjStjoXTPGFjuYcfQKaP",
  "key33": "2rf6f2vKDCnzvakRsaDxRPLJjn7WSSuWSKaS4RAZo4ZK9AjJv1vei2U8KNsCXSyTFnYEyUU889qxFxWyvF2HvndR",
  "key34": "2QZdfWBxEuJbUhWSwjfvtcFWSRPZGZPgoQSz4MTvKLR4iVYKM74M6Et4f3gut3hWkT9X8Qsk4Uvnu47fDLjqs1ke",
  "key35": "2k9ZdBuSMknLUJpbeFYxBpeoUuxYbZ6oSLueAdaXNkyj7MpBbWKboM2pTHG6rPq2Ff917RL2B2fCLM7KhyS1yR2r",
  "key36": "GcCd5dx7mdBGHNfCaaCmwH39Vtygst8bBUdmhYbwUAuPTUc7i22g2TLr9HmzFMRJGKoAxYGVbKm3PaR9hHaVjUf",
  "key37": "2FZT6ENrXTUXXhF4zRYhZPs1L2ds6GRpKw9eF9ERgeaZaFZ5ftG5S4xFz8vCSszcxGMfPWAeWTqZijQa5yynBZPj",
  "key38": "3CDdpxJr7FaBQvqESGDBuxyTR9H9b6dHFy24SVjoQynvz7s2Kb5TwxWgHhehJuSfsAqmXzKSdZH7mFKN1qnLf8uK",
  "key39": "4tG6GnB28zMjZcTxptjGyMvMEPoyE4vKMw6P8ZmPy9ceGTQv44k59YQqeQSkCAqGdgA3S4b3TKh71sjkhcMVRxjF",
  "key40": "4xc3YKKtv8o9fDKwB9d9YCCG783BCwp6SRvhdKPMUjJNaow3M1dM9T96rTxVVXNm3RA6kR5mYYAj2mRBDfHAyDCH",
  "key41": "2HuuFmMkAepqrwdVsx6pZHaazhdim7wZQiFzoPVrT3T7tXYNKpSuMEWZhz3MN99T2uatgau5A4iv3SZvJWgekCbo"
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
