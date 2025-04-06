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
    "5MaZA3q5RpBy9qiuhTFF4Jg8eBAeFTkxMDJp918T5GbNDFbQ3XAYFhPt4GLqAqpHbEhMt4grD4gdtd27Ed5597cD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JnnH6BdpZqXatPUjFMWorKYHv9f1kPwcPGAGmCje6WkP16HEWGPzGu8VZMvyW8ZMwaiRCtqHoEJ3YfKhw3aLxik",
  "key1": "3gnm7UbgAuQzXneNkFiseppU6ViEzDdZxD67BNuTEfQSJMPGiXa1sHLFedF9xqSeXGUX83rJYFReo5VAxcWeAzvr",
  "key2": "q93YKLigWwoHVcKhyZo3JssfwDNhUXRuHWEe5h6EVF22i7NPRj3QiUJiKw64iPeU8z3XLL8eQsB2HLGuzNDyKm6",
  "key3": "2qMyu997HPuJBnoaY8PrQbn8XdPf9Sqnb7YbmX67aiC7DoZEvCAJMrA2MtYzQuHNeXh7wXLzyPdbv2LNWADBaQkT",
  "key4": "2SAx1JL4Q3GWB71pawCVUkZoSSQG7mgjy1Xo7QZ1mg12QUQuQyN4VFmhXiVCh6ti99fHcnFS4da9452pHYUrL288",
  "key5": "4RnnBeoWQkDbZKhQiF3bbkA6eW58TuLvmkPVHoz3ihdQ7KupUMmau53UQqXh6184qG2wcLE53uYL8JzWD3xzwrEp",
  "key6": "3g9D5MrQVAW6w2McnKA97HzUimdX9veWH4eNN63Ko2QQY3F9PTCPnjqUgG4JrzxhHAb2ymCxEce2b7N9H4eyrvBc",
  "key7": "zQvFhH7vS4hfF9DDVM8HV9Hvp2meQciGY2XnC2RZJvkJV7XkpSxwnMp5yCiivH2y1SxxfYxXtL9BocQJMZBPG8g",
  "key8": "2Xk9sJc1kSVcVvRbNtkhL8dqRWyuJVAo8MttPVDtZAJ9PqUqJA7kucFxnVAr4iBTrqih6modyHeNtuBDw9AUfoiu",
  "key9": "4PJyZDMTDV4rG4e6ThvHHisCcmNZiJbfCjNUTRbsy883nsm9FpiazAyqBay6piRtsmGACj7NPZfhbG5K5xuu14EL",
  "key10": "2n25FAxB263qLjBGRn99kyKT4TYhiRLNu3MtdPhaup2ngmKqJHZuJDSvFbCjKfUdWm2uCA6Hy8jygWBVTRR5csYK",
  "key11": "2ydSPvmbJg7N89wcB9qtmPWBYhoJNXcCaDH3uEWqTTZqd995htHwg2cGmEoes5ociUbi8HVpnDQzdzPSgbkKSeoM",
  "key12": "4gLKaw8Knn4N9cmCBtk8zpqXKbD4ep6zsX884vGbEBpCcS7vPQkZn474rQYwALiNGZ3hVvgXH1YYXhz9894ZNeAw",
  "key13": "2orNXDiFNYWxvSx9mt3t367AXN8ZUTGinR2GbN7pSDEJTzPnofwm9Q4tRFhc35MDqmRWMnFzxuZbKpoJCxQCJmwQ",
  "key14": "3RpuU9zevN2TFSCGpgGKkATij2gH5uZFccd9f5enVnBTwcpBjiYfFy9vCMbWs6dcPABvBJs4oCeijpJP8jzGmALz",
  "key15": "28AkwTCcmjd7CquUxWMeJatGtNA5np1QZzoF2deMCC88TkzQYxJjmwASg1a239QnCsfg6L6QmHJqJ1BYhaZAjPFA",
  "key16": "5rF8orWdnqvVkChgGzZXRz9qRoMAEWU8n91hN2mU2EfUHUJvCy84DPRS1dyPin1Pw9KbEXJk8mVD9vdNPjxXnp6e",
  "key17": "5TQchGN8UkMTS3QVQL3enuWBACFSoCLRenhVitNwBTbxtbQKJPSmAM15EqDWpbUB4YYFNSi9n8ZT9G1cyvid8jmu",
  "key18": "5g9y59iqBjgqxqtJZGzr9WDJMxgmDtFFDYM3omfuz2ZWUyn4AAU5umFSDyVEL75hay1iFKKzzHoLUVdx4ZtqPy8R",
  "key19": "5WXk94APfUyoQN5NLHDrQZDshwbL5QcivLRasdoMpkbBQzYrXXCoZm5zjAXGXjgxFYkQU4Bya2qMX7T5soQFSRTr",
  "key20": "2pyyduKrS6HsKPaWy2mRnfMKyu4HRFt47fpKDfU3428Ac6Cux8HwNfghEhBWfJpdAqSSmDUVf8mfLK54KzrWNLHc",
  "key21": "3sUaYZbP4N9aHtj2i8WMyRgC5hcvkHLwhXvzDBdWYMg7XMciUZRxhBSeQkW2CgspyqYb1vLVT6kgEXKUCbXLjbWT",
  "key22": "3NbbSa6u3HSjsnUNRnKrrEDA32xTN2p5uXCcgEjaq14wCTt8hzFTyByTmMij1g7yPt3uEZrwxgEWdvjYPKQmyiAL",
  "key23": "2DnVaX6gW94gcyxb7yTeKD5Tid7VzHYjC5S39URH4n5YRwd7wuNdD3VEcucaj416uj24Ld31JQr6NbZiMM5AjHmM",
  "key24": "4bDkzbwa9DsCJ3v31Mo6mjHVYLmMgsS2ECtgvT789EV2XMhRQiaHXCDnk1ycxNUfr6JmgfUaMjz9UKEyc6aZCPDE",
  "key25": "5giAypiWmN6hcZxdjrtRK1eeeTN3LoeWjm1q6R96VbHScfVtW8cPp8pfRvaWr785FwPgdvZTDLEABjDURaGUxyRd",
  "key26": "5z8uDa8Q5Mmja7svFiVKQtP4Dr6RVgTviFPp1ijXhZieMkjsBAF8EdXf2YTXpNhBfFow38GN2L9MGRsoodAFV85E",
  "key27": "8zC2RZyMTq7Kg1qm5PtZfe27C29kDJhZwxnZFmd2tA5c92CWG2VhfX143xisg4UzR7V2eNVcsb31Cnfs92QPsu1",
  "key28": "5GiWjhqC6wJZiaGecw5YY3z8vPWhpZvRqxyogkW7p45EVJMyc8yKziwHLdQ74R8aUyvxnsFGL9TBxc3fYQu5x1jK",
  "key29": "1Tfv9xxj2JpfVNq9m9Q9Twt63N9KZ5TrNSf2y9ccNAxfp5ZXyUchn1Fe415DRG4DG24kyy17SdKzhoss2zeeAWr",
  "key30": "5xAU7JTKjnvRi4fTJmJRwPCwtZwMgamDDspo5pM1kdHMpJrV53HoDM9AS1XKfSqQ4sECppwq6MeU3xfXxKKVQgqx"
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
