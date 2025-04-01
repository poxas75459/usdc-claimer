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
    "mueWB2snCc8pBJTEuo1kDg5xK1dYPSnjpAsUhvVrNJbicmcQmMTRUhszkULNWmu1X2YKspjcuPZM1gQmKpzxPMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hungeVTK5sdiUguwZe6bga9aRRJsCRuPdWc6rQmXQin42WieCX68yGwwDZELcorisadWq4eDYLNfZ7FgtV4tkU",
  "key1": "5238AoRvvVuYTVpynCXyNfAvMr8ZkrUnQV7gnPsjsCeh3wREn9ExywCkvzuxAaiB2sMxdxADNpvgFrptzp59iHh9",
  "key2": "5fe4tqFQ7CpfVRGTPbLvNQ1TcW3rEF6qyitkP2RtaYRDf2knWzxBL2ZfL24SoEiifY9m34Bc74c7pjCVk89hw2fw",
  "key3": "5entJsvhtVM2eHdYq9xdRt5r8gMRb88WBUuejuEhRfGaZTcjbiR9iVt66kb8PKCEHAuUSbVTxKG1PXcq9pn7kmM9",
  "key4": "Fg361xN4vuurWZ9E2TG6RXLycJjU4R23Nx5fypW1R4omgrNzPDk1ugYbiGfJcqVVrYw6MMKpnDHHXrDVprcTshV",
  "key5": "5qSQwVzuod6aenvKYVXKZR4yWJa3ZMZSFmsu7n86nx6gPE6as8y7YrH5CUYtMtAgTSzqsfiehxRDQpfbMRqJM2i8",
  "key6": "2GSQ1cXpXEr26pM83WHy1bJhMBn467yY8FXGyzY3FbQ9AxvPNaxgNi6BjfzD4mDRB2R1y9AefgccZAkcmdGH2rUb",
  "key7": "4h3tujk4TEPihfXbsnbSsuVovTnJRrrAuv4jg3v2RdyY4rKLZdaQ2Vu993x9C4tE4bhurU9JNKK6TB38V2vXww8T",
  "key8": "2R7kagkCvfneU933eb4mKaEjswrNuvmn6g3NyBHDUbBSWm2s2iwYvpN3esZj68vKA3RWpZeP5cVTAopzCU7NU5gs",
  "key9": "4Pipb6jCN1MW6hvZn6qt9prtEMoemwy5jbVjL87ZtwwquPJ73rPMUKf5KGmesS6yVzMiWUA3DiZQT7dybAzRomUP",
  "key10": "5Abu92rYD8ti1yL1zXGFaomh1DoJqcn3RxZ3NYUhmkEG1uRFfpzfgNPPU84SiJLQ1TgnwiF6WmuhDSGWGLcfTonK",
  "key11": "63MqDUnY7QFa5eP5o8u1y1ZP1MfJx8beJKYsLo3HUzdrwSLCtEt27QEiyipR4bk6TQMg6yv4YhFQe4EBzzxq6FLn",
  "key12": "5TCze45fxtaBLkzmoDBbRTCjYSG7VQn9nJR3jHqYsKGf9dAqVL2VchvSkTforRKtLDS2v1A1bz4GD4uotchABEUM",
  "key13": "61kksBMbLA6SACJWsJ5dcHZ9iuduEXKA9mairVUmbc4nRjSvuHvjpPKtiGbGRx4CUecXvn68T3nSFpFHoB7vkeoX",
  "key14": "4EWtDzZ6ZFxQC6546pVHjZ8YgT6JXq9946r2ac21edGTPcWgquiCHwvEhZuiq4BDEnH6Ggyow6VEwbLwaM8wn4nz",
  "key15": "2kZwdCfiwkaWCiSDUXTkc8rHBscEpVovEUthuhUQU7pDvPF6PMwDw3ERmnsEGkC1UV8rVx7bdgvKZS9mdwUSUzsA",
  "key16": "5M178mZB9G2RSmwEjhShGrYW7WaGZsuVPecn7w9Ga2Q4om4g7EjpFoMChNqrUttLEmsU2ycyACbcJb3p8dwQ4jDb",
  "key17": "5V9345HHUdvy4QFMn54UdyYpBF9Bbnaks5em7eKPwj6h4BLEKy3wK1sPv5oJmGKR56KRtcDvX3RD5q2Nd534NEeu",
  "key18": "2j1XqKXQffe8LaYqFu9smEFemaAGo9ic2S1sZY4skbx2iR33XT4Zd6dfUy52ADzm6kQnP38bQ1NaW3QFnRbLZaXU",
  "key19": "55k7yy2LsFBZgGYLbLBezK9jEXaAKjaYYnNhB8PTyP4doC53XSUd8uUGXUkQ4T74XeFxNSnmqRrK7GV3qB6DE9yj",
  "key20": "5aK5cJ6sCMytFjCqjRrLEKijHeHkMGiZcJYhMRFrpiwX2szarg2XHoZs3bzf4Gt9xrYkisq162WxVNQRQaxDXywb",
  "key21": "5A7opQ9nrdqoHmicR8cCEJBYmQvGSu7f7X16v5S1L8L6J6cTfWcgCmBHVXoUTSinCRX1zpr6THyaeEfTczR1UqZ5",
  "key22": "2rgxUAYZFzS14Qy5t37tN7SLovP4AR1Jd4efkmCZujWKPCwr5g1kzdR2vobsEPJmVbbJiPpXew9c2Sy7GB786HYJ",
  "key23": "5Syti7BpFpTpbxVv9BEUHG33YGTPbECAdKMtd35KfkGbhPoWdPgdTojYNFRNqdKkzsJu38qY4EfSdvwbRD96R6a5",
  "key24": "28AtJHsdpcG2Q1BckxGNu34vZeYVfYvjGQxpUZY4dC3gr6vXoWm3tqEKpSdrfqEA7hxrnrdsTZuLJ1BrNWa6YW9Y",
  "key25": "55kgjL6Z95NmzLbt2cNP9QHwc63aXickEDU9zXezbpNhzfw5Vt33kpMcQHsGgkrkpQyQV3na8meSuUS8rGq2e4uL",
  "key26": "3YE7CTJj67NYhk6cDsp7PR4L1GR35BQyj69x6YDH1yHt5YysmMwUKarqsM26yKoEPaRfF7FS3AvLvudCqJSvaZMg",
  "key27": "qfEaw8CAcQB7pRATgf7tQzpDD8yGHNMCF1hw53aX5Asug5xTdULUeMcZDJnMZBpKfDHu4FHKekoyw73i3TCzpBV",
  "key28": "2YbHhXwVQJbU3NSBFCcJumtphE9PzoqxYcgRHaibMdeFdfmsVwXo7uTP1c1L21yE9vXpk8LBce9NEmFz2L2QVGrV",
  "key29": "4rzd6kRWpCpMNjUjStDg5VxLqzsUXBLRf9Bx523gmasSb4D4BpKP8wj653X2cbbyaRadvd8Lcf7DuvTujNsZQRDJ",
  "key30": "cmrnmiaxYSuoXhvtJbeWoLHxffxqUidWqnMv1cTz9nX7jam5BdnJbAxmvx9UmZsexEVMnGJ4LAfcT43juD2XD5m",
  "key31": "3DDyrvN4bdVp9DKC8Yk2h46sz2nmfqeHFyFrdsbrvYWdEs2ym2KBN9KNU4t1nAQTfqQW5HjCmYgbfibRxkbWNdFx",
  "key32": "5i9uzZsWYQ25nivdZA5DBXbX7idVussGAwssxSQnwmkyuSBXKp7bhCq4tMkE21eHf23vkDxttawaqAakRoNHAKcC",
  "key33": "dzDk6B4boQxuhWxc1vYCgkBSehg5fRE5Z8QS8ARezjYxUUDT28M4rXCXuG6AHCXNE5sJMrUHtBgsmX7v8VyZP6n",
  "key34": "iAEeVRs4pd8wysQG5ieYJmse9qoNJkSvLP5QZjMoNrPDX6wQPGEWssk3SFGyYngucbWjeLe3Yxef3KP1ckAmVsi",
  "key35": "4gT6hZukiePRHznDwPbGcwaoAoX6CTr7Sj13y1k6c8qzohz7sExEq8KodLx483hUTGT86qNpXC5ZZw6ATK72pGLQ",
  "key36": "zvk3MfFiqueEra8SVPe5CR25DxKM66fvpN4aYnocDxSeDLTUmGMsQQMECbXwKcfNVTMDW42HWijt1BVLq6rzGKx",
  "key37": "3urfEuEvTPpdMV3CVexz8eN3iraYTY1y54sdzCgfvM2MJFxakcYookev9DuDzUqFkMQHc2cuY9v3sUbv34HAkYF9",
  "key38": "2XKJLvAQJuAuC5jXo9SzX5jCanJy6XfNctCGKYFYcSC4wyFcd449SzG8HXopXYbWJ842UVxoWY1rYe47PBAgEHXf",
  "key39": "jnH8aTm7cA1caxMjZyYovcGjnehRGcWUY1gbfcYuccNwf4RusFDGgs5hm8audyh2pwpCNgyYgXdDxXjo3sUeYhU",
  "key40": "2GMU5D1ny3c7bYw2LxVJ8VYeRJcpBRi6QEriiJtMTPKGVYd6eb4zF4ZaAHLqWWuazEKDJZkW6LAWfQQGkhyuZswQ",
  "key41": "4Wd1dLT3oNNUTUFfUrbRp8G3ziSCT3HbyRiYUm74QyGVgKmrL42CCrUeyrxJ1iSMUPZNXAf6BPERQZZnSLwS8H3z",
  "key42": "5Jao38zCkFAbz5YZJvnWm1BvFwtVv4hwxieYJSRo4K81YVFBvTVu48XKpck69SXQjVsbRiVfRbMkyE3hv3hRWy2W",
  "key43": "36wkE2WiXGABvYdmNr9gVdmyEFLqCAs5hdWwVqhCoU6U9HoYgrDrAyAMYuzRVmaskhUcuY5gfvRK8fKJmxtJEEmV",
  "key44": "3JVxWe3N6LEdPaFj9NocUtaWa2X6ehFYQGwFdAqF8vGEzCmgmwm1ZAa1h9VkbYG7xy4SviBurDbczrEcAckfhwgS"
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
