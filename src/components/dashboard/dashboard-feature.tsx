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
    "4fZguzp8NnaFaYo12stPYpYDoZhrrJ6YYL1ajUsgR3sc5ZjphrwbPupAExxsFqjNzATaWSxhkLUtYEeEznNrMffT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dfKCiz9wnGxUA1nGNDYD6WhTk9UvKAtvtH1GDvXyBg1BzVoUD5QdDBizuVZBYHqvPP8HfYekRXCHzATCYvd7Gf2",
  "key1": "5ehDVpRMqSkZsR4zeKogAQaFJfMzSZSgv8DXnmveacEG45woTDKT4Bsupf75dUgBmdMp7A1iDPdjZ6zyULHRuff6",
  "key2": "2AHC2HNyEQfswWrrAKtEVLXWbbTUHDKcnE9NiqPtk4MiPZHWoRS5PudZBwrESftDwYFKPaTw8wnshGbYrV8PZrne",
  "key3": "4JN4prgPju4Npdj2fZwFMXQQKdNaAsj5xQwGrEiRd6xh5iXgYMRrdrDt9swFBky3BcUeqDsuc7TwH9mFq16LNG7F",
  "key4": "5zihZ2jvX8NP44qbssY8XKgSMyP6zcumdhZ4HA2gvtF8VJ59ZSQC38aLoBWNNRPmypDHFMF5esAnigusteeL7K4Z",
  "key5": "4HxB5Uv34QSwRuJa27Fg4C9vAUHfVf25tWceRfGEwSsgCDT4pGyXrA5t5FT5WFzFVFs7o36PAQTUg5pmz5UxKRDK",
  "key6": "5Frj6B2xvEvDhhvVXDLRfHGG9xRLgixP6rwrDaeEvy135WsARTYMTjyeaRxe5XhF362a98pVSEjrNimaHPkZdx6D",
  "key7": "Se2RruEX4tExoA4qAwPbqaXJSfYgJvPh7jn9Hyy2kmE6F7u3WWsxBsDdWUvmTwnivFGvvCb6e82h3NtuiJGv2cj",
  "key8": "5cWBxLPugCKGFu8iCzA7ao6hqoa1xNvPEDeHnMJ93Nr4qgCjLStpokBVv7uw6MiPcmYXJ2RPTMz8H8pcBiN2Qgfs",
  "key9": "3g3ZxG8L2s2R6kdeSbWopZbvLgo1T19deyoK9XJwrqVVUXaZV5wgLKSkjXw8EvNBkqpvngd6njhFHdG78ZtK1SGz",
  "key10": "5QGd4Si87VprrReSrz4AZriFzGSEqHsAtsCBv55L9aRg6t4fcRfXT8UNcZNcHuQHYnpMA4Cdg8C2sLG7gP4MMsNv",
  "key11": "5RTn3UC71DEXpasgphSsDg3k8g94PpvbB7QNmFDkwYbE7dRaJH8TsCstXfW7MRC1PWqzmBEhhZDRgU6CkATgrtWf",
  "key12": "4rMPURrwSe1Q5KPg9XisXSJCLrVxsPBkVdcj7f3nGGDF7MguvrFSF7ZMyxqBpV7ZbQLnCMembwN5LhRAQTG5YshH",
  "key13": "2U4UH4n3M9KrCiLLA7nRawWQHRA4NMAV3drwf5B4QHYwsX8Nr5oRV4FoJckN6XKLFnimHu1sTBgB5j1CoimruhMz",
  "key14": "QE2onLgEfwybP8EYBQT3XbeuntXsBEsTaTCZwnLYnTnEKb3ixyULd6tDBLhjQLqi7hU8hzLjr6znPHuhWUtZhos",
  "key15": "5Zc2vLtXFb84bBv4fk9czYjfGr3hRe1gRZfJ2gsrbD2eXrXhQ4kffuay5TTH2Wh2rpu9HPhUVGEHRxxiiapjYAFu",
  "key16": "3zsR9GT9jy4gRZkyY3q8HyT5SQdr6kW1PqN3LF3e5LMHkQKAehEXej71sfRuPQgr3c9c3BRbyS4ruEMH2hjaSgRj",
  "key17": "PDmHaqoFubo529Hfxr8DwJMcMoC2UYyHYNbu5ZR7XJs9yRbd8CkzooJjvZpSeyrEn6nBKYALCAhwapacZW12Yny",
  "key18": "jycmz4iL8Zf8RiWiJcbtetppuKY2siZ63EjAsKBfgwukWVbj8KMmz2aaYz3AajzhzXu3n7debyvyWwheK6QHXgt",
  "key19": "3dAFGgfndesueL4BwdsqCLvCYRuvmYQfwf1iWjtToU5W4kvP5Qt3E5PguwvRKX8Gs86J18Pjz9KD4J5EWBKiAJxv",
  "key20": "V4JeaGjNDLfwFmskkabwmGCxxQRfhT634Pop6V1UGj1JuQwKKcychQF1yiEjVxTA6VkumTKHegr1RcWo9Ptj4x8",
  "key21": "4yRLdzm14KfivdL69sRaQ3K31oHXC6Wt5WSbV4Dr5bzHSFaPzPUV5xL6TcGuTfWdoJA6Xvtr2yTBwxaabJ5cEFJ4",
  "key22": "kBb8LRmM144C7F2wqiohQNDn7Ywd1Ms2UpwJcCeBc9Ee4usxE6fo763uLVY1MBYvp2uJHJvnASxxD6YD7YG2ZTM",
  "key23": "4A3Uwgs2KQFuFTmo1PGWawjXWGf4Udd7hS1BcpYMyB3LsDz83TStdEWAkep6VAyKWqXCF5e7rNtH6WegXyhEwjSk",
  "key24": "4BtU4eVcNpXUTsQAkGaS62sJ8qp64K7C8kKCw8khLKY3iSgwR1ZTXuGP4RwumoW388faoarQMgXP5LZa8PeGq5R4",
  "key25": "oEZckfNShUZnfCt4c3SeGX4Mxd2Q76qFHK53QGVCf31E9iG1mKEmmjQJkoBZj9NUAM9BgDMiMDQ3hJXF25JakHW",
  "key26": "sFtteDgbhuqs8TXYrSrzhwGwTr3b9MckfgB1wxRiJ29rgrir1prczTJJMxWACN8nspQuTVyAHamjwSAgQMwnNdm",
  "key27": "48z47WhmyWK812w6RDHvRfpyD1A6FyWhqtf5qdYxFngssw8t1ruD73AvezEHuzJiNzcDDPYikNqUVMQqfU5CNPrR",
  "key28": "5M2P1JaPEDiNEDpUZKjCj2CUkakxkiiFpyFiyaYWmKkJKLQqH9XRWvY6XWSGPH2u9oMfv1UQTtXsnTQPGxJhjVfL"
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
