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
    "51SAYhoefZ8JJAqbL6sYqfLqPzNx6PrSoH1YHR1MoPWE2z9tJLmv5JcUiTeiAgKHXgDegPbLxwGtNrfQuYGgd2ZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r4ogBQYiWSAtdL3exGUkHbLY27ncsg3VNFMdRCJxQLCCWkqTATHq7KkZkMAttjXxDyM5gczfk1sGTH1Zzxae6dw",
  "key1": "5hF94i4v33T7ZCp3bbA8Gkbjn74HZBE74ffy8pYHXTnZ1cgoxHoVQc9js2TCioNJUy6KXcsaTnAXGo2Ckroizzsf",
  "key2": "2C8yN84nWnhucjag7cAaE91FRUMmRZEEm9TFDCs36PP2nRzKp5AkXAkyvuNQob1dYfrTEA1pxKDqgUpk88Yb2quT",
  "key3": "2cP2fvvn8vtUCwkfRtpXEFyyNfSCPCuEvP5fqgcMsvn1VMWimqP3hKnBjnvVDFiJFjDT7cpznJaTPmq1pinaPfrN",
  "key4": "JRV3ochf2KufcK3qVxzujjhHo4U2ex1Z5jcb3ogTp4T37mMQ2U7kqvAWbwaEeUGdQX6qqycyet1ixPwonQiyWc6",
  "key5": "3rggz4cSGDuM91dffLY3nLpHc6jnsShsvNhpFX8NQFrnygcYbe9vBpUyAuRQm8pmeu23Qas78WRdkgAG3ZQCbxf8",
  "key6": "5HDJACJYr4uycWQdVw1qC1FKoisqCgsrrykLitHYgWJEq4FgroZ8ztFzXFrnypF69aJ2pnZm3DHbVBa2iSHdH8xd",
  "key7": "5Q3WpFsbUCyCdwmM9RrCEVek2AXmaB2XNEtieyL5MghPgJQD98PjVwFHQvZQt8peLb7bwUkiZvtTHQVpQ5pb5tFa",
  "key8": "a3YAH1SHnGQicfm34LKqYaavni4dyZHgrkCMQbpawdTycofDKzJZ5j2Ee8zzM6QWt9tFKXHCVsZGvKZkRZY3xyE",
  "key9": "53Jfs51gKSJXnZoGgN5crjQhiXPRsPZb25qYrSCMUmhBf1pjApgMSQKXzmWzswXmbFjhf9vXFYDGEU3nD7gnr5uR",
  "key10": "2AaF5aw9F2pQo9GztrS8KYGkQqyaETVmCyEzJGnB13x9k7y458N57HfHAkNTJacD3B8YRjicYDEwzjFxiyMYgJrf",
  "key11": "46n8W5pbUQggm3AVdQzYe2DTDeFzEhQAkEDkt4JA8WumoPBLwQTYg4PisfXEYfrwa2jffR1CXyEdRtQti88U9Gnq",
  "key12": "4PaQJkzGCTd4mTA8C4a4XVGk3cy2ZAUYNjzRCfWZFCgJdFkjhKGU1d4CyGUvS2HhQ9zSKNcFnUW4U1JerUBFAgd2",
  "key13": "4Fk5LSjzdbtt4dMPu5NP2pKGLjKKD1xdTYx8zJjoo4RZ1iLzfsLr36d9BKWypvBbvoo4Y9iDi5zfypHxZULqUoJF",
  "key14": "2Uyc84P2RxH9x2z9F3Zbd37sDYZKBoL2Crw26i4B8PU5tXH1TZHr921EoEN8nNqvnQ3cCfxkdwqAeeFKWTsRiktJ",
  "key15": "xctxbCwf3CL15sKHdgyyC86TS3aecvJ6pHKppQoLVwnY9XRD3BBgi5b8j1mL2zvonCCL2snfSXgKoMgLjj4hC1H",
  "key16": "5G55wkw3M8ze9AWJasJPnwuwNM1F22P2mvH6Lny8cRkvgVZhoUoLs8Fb3bNc21NTY4wC3e9oGU56DQ72zzvSzWP1",
  "key17": "3UEMkV411faWEnPaq1oyPCHPMRkvhUnXthHioj4GDWC67Mct9tdyiaqrkTWBaCXB3P7k6w8wYa2PUXW1XiUbbqNw",
  "key18": "5anDXaWxcQB5dzxr995oTfh52T2ms9Vds3MnLf7ft9416i2167x4j3buRY8rKt4PmXErVLqrx6YEgKiPeSZP1xba",
  "key19": "66wCbortmNEX9ELpXDtP1rjA2uK2CFNjPpAjRbuYdvXguhduaBsAA5azENv9dS5ZtyRqm2M6pHnzLhVUVj7qQrk6",
  "key20": "4QppaXqwrM51Pz89sW7sXXie8Wa4rTi3fRE9KHEQVGbyuuTH1Dw4VCtgMXzsyX28N22Nu79REWkfcDEd6KY44c3i",
  "key21": "4cfUSo4v95xPmTCvAQLbVnNBg9s2gQd18Y7XJfjVEcCk8jJxkbf64UeF7ts7UTmVnp6p5WXPx9XfEGo5heioQNZr",
  "key22": "46VFHzRMaFSDJFzmzfLSbL92USX1SD7yNDiYDa19t5dLqpi4Rxzkq3Jz8gx6ZjCxMdgy18t6vdDBj6PxeoaFRVhe",
  "key23": "4Yfxj4dz9B4Q2LndSmBpSqAaKPDKRVoby7rewRT5gkrpinksPxoH6SPcAvKYb2LMKJzYV7h8M8tPC4JeqE8jBRXu",
  "key24": "5dmvn7o6ZK9hQsiEMu2tkL6EaRzkUZrfq7eWkSYWgqPit3REKBgTYGpavDt1u4M6TYGkDStf5SrbJXcMTe4UuY6o",
  "key25": "5VdqSHZKGUHriUWTFtFQTEBXtN7YjXJNACdKhY7QyL7zAgGauJ5Pa9kSgk839d5oRaJQEX8wVxTorKiAT3Gy1eV1",
  "key26": "3kVwNNt3cgVW7j27ffYHxLmXVxBvezcc5bpiEHdfaeuftCEQLQc7eF7pPZ63uRL8Niit2TDiz1vXLNuuTLLvFDUG",
  "key27": "5GGRazjLkFUBP1SbNUiFFQ99xwaNvnnxW5NvZYCf3MkdXB9aoXUiLdT8kVYji5ouqPjeZnfQKEefHuQg5oTVzmpb",
  "key28": "3hKLpC6zzP7VM216j6KxhHrKtoYiG4ZpZpkrucGLpdUttanWmCckF8e3PJzFWsJa2f9E3wXTTFY1SvJpnhRLLXAR",
  "key29": "2jwWRY71qXyv2QgiRER27sJ31EXcttqwcxVbKXL6qqSoLgJcSZyJFJ5VjPEgvFzxBKDiqfV7NFcnZuUEjuGs6wdG",
  "key30": "63PyM1sKhjDtAJ5W9corodd4Kju3CUh86Unqhz3DoprWfkDu5J27rssERiMDZQGyKXaaLxqZSWFH5eHSahFKpdS",
  "key31": "2D92aeSSHmfBpTJUJXQX1Kj1YWo8KipoNjxq9XNiwymQwfYNgEM1Gq3osGrbbqsQ1Y4bTMDaJwV1tTdbqwaayQU1",
  "key32": "RnLRDg9YngA9rbduSnm1qUYHzB6FCHRYPqeUiWi5deqfMFN6XgqLsWQU1Shu5Qj2UhGF82hQzY8DwThWCxyaXBC",
  "key33": "41zGYyy7NMsdsyDGh73Dx6b6xAjaEVY3eYW2qJzv5HT5C2CdLn5tL7sXwnPqKt7K9uUUdqVuT7W4bHqi35YBTbhF",
  "key34": "wFxZTCBkn8EBwZHGFNnYYLjYBLQmCyqvgAoVVHzaoCEExxPa99JxvKhHV14EYRe6wga3dBZGjojSz1MNbbM4V9H",
  "key35": "2XXnNKErt55eerqFGzmZ5uCKvvrJ9QZnGr5cjJDUXTfMWCQCcPZG8QfJ1uedMmn8YmH6YMmm6hQaVtszmj3ZNZD9",
  "key36": "3AVhaeZ4yfeV93yjtKf6L8H4Rfjb3Kx4AoWTnHpY83NKUJZcGEdxFhwQFCRyy1a4y2h1BwxdWzhLGgYRitPQeJVX",
  "key37": "MZPbFdk6F2i3vHS3F5SUvKHMRBgCD8q7w9A1S7y1we7gJpidaq3u7TscWbto8rbj7G41YP3Js3N7Vb39oRMRPnL",
  "key38": "2hZdiqLv7XuaKFoyWa6WmipgDaA3e4zoSCDrz5ZMnryZSsnwJqZX82WS8VaKQBAa3qjeAXWNakBk41nUD8pH85K7",
  "key39": "3MzUyDvzSvADexNwVSmseUQbEgRXWQ1cKqD71Zqc7eQcpZUBLs2ALibyHEHPzaejfwMnR6nZAfMTwz9sKJtWCyBp",
  "key40": "4VduiuRoACMhFNfKUPx1nmGEQnAqt62ZP49YHn9jak47MkPFLMirbRTYzapUVQvBCLW4prBMdSG5LWaBzni1bGNa"
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
