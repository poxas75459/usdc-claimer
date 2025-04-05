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
    "3RcZ15L2mMb5DyNsixh6Cb5gQsu8fk5WesDKJ7XErErA9YnT232jTdsi4X3XS23gX7nqqsinfheyUGZuu9bnQbnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CXFy8U6FT4LKRB7HYqwWk1mn59fV4SAiSLeDyoEVE96WEnYbQSnP1iAadQmBmCfTXHv4DvrUL7rYKBCMPaUseB1",
  "key1": "1YUNV7DVzMsSr6KQKSGrbygQsbgRKV3ZEGJoP4WNbbwiL1bPv4b7hSQTtbRBoxxNknbEbf691fC7fmPbp1Dc4SS",
  "key2": "5oAUg8RfCQv182ZKjfpgDeoEiE9Qcgat6d6DUVSztwJtZLr8qQiQYrjs71WnsQLgG6iXLy6wZzWxVA7xww7HnJpX",
  "key3": "4mU8wJvjXKr6NGVjDL3NP5K5rkpGMQemc9SphSjRTUcY3hmGBktB4pM3EADJGF6wAEHFvvZrXBFyz4eYGG2vDsvf",
  "key4": "GjP7RXVwxqssbtkNwv2AmwwTBNw6hyqR4hnccoKMkBUBPUad3VpKWCZPGn7VWwbpz6idBX7hqm5qWmBkJgKG63K",
  "key5": "5e9QQzXy5anQJuFJT72NerAAkuNybiqKJcSygPKBKrGzsq9ffzvrgbVM89nZoCGkRt3XKHT88idsHCirjfLHApSU",
  "key6": "5zDqqC9tBnT7W8R8EuEP8CPXLUCDbPVrDNQmDFtPu2u3Jcv339Ae9rQzXMK7b6GA67hxazPrR3ScCken3XxS5Qra",
  "key7": "4HP3uhxFwdaLNsMZHscTQVfe87oA8SwCWHWKZn4LiZsSBa5Xqs2HkGVrAU79xf7TVnEtP7XTFPtgSi6XaPMZTwbZ",
  "key8": "5aCmT5TRD99FZLvaQ2227cNDx5GudYED7uSCEsyVdFoHLZfbeU7GGeRGNXH6aVB5ZavGuakrxQ4wq9exnLJtbkBR",
  "key9": "4fKzZJnmT9VVghtTHFRu1nXvNv7YfWprTVeLkEsRQrXefcU3uJz9SE9gjFGVdLcXdoarQJqD4gGMHtBnCL4wn4Do",
  "key10": "47keKsBR12SW4oAW9aBB1KxRMd1H2xASAvK7bckdoDdzaLm4fVQziHueoaCKHsqeSLCPSVUMjRvMnoxKAKecRn89",
  "key11": "4sxw4vv81QoxaA7gZAY6c2zVtpct7TSvqkkExttK1WK3BLcGt9xF4X97YjF6ExiCbkX1qDZv9U3VDT4L1KxHMUWp",
  "key12": "3aCTuACFJCx3CKkfg63sN57hHV6aXDshkZM8NGA2GiPg9PJMSmifp6uGQbABaR1gTgDehaa1XgJz25vE8fDqN8eN",
  "key13": "4rhN923DN9qiq8a1K5hReHobMGQ68HGop3rHC6dcxu5jNDRqJJ3DQgVJFrGbsF4yrJJuwivGfde54Q8CBNsrJVpN",
  "key14": "5V3WkpC1EYX6ix9RGTgYHHRwNoUFFmv9Ea1X5P5fpX3sfyBsraYfCpvhh5u4Y7aAnHitiKYmMkyZBiUVjVphC2GU",
  "key15": "4Rc8JmUyWu2JscEDVi8fZdqfN4s64CKJa56dNpZaTwyqioEyVEWUS9pbW2DD9UgCFKnyyTAVedvghVgFoFiVfUq1",
  "key16": "4jjdJYSR6kjgp1GiAGzR6jZe8MKg17r8g6HqR1CY52hZVVxHTZYrULJSXyAbdypDXWM9hT8hsYYmspes5S4wjTxh",
  "key17": "jiKWZSRY8pb5NEEwQXFaXnjKCUAUWpNngxauNQijpWnHALCh2b3fAvjH8uNHt2wpxmyyQbdCtQTJw1pjrdkv8eD",
  "key18": "DpwUURFrPH913Dmaew6LG2JsBtqR2sSBtzvSTRCiQPBmzdMv8nX41knQm1PTjwHQJYDvKX39teVLnxqh8F23U5w",
  "key19": "5u7HAuoQSNPSD9iZPT9xDe9anXckdLW8661YcFJqUouu8MnfEa5mra74ewJJjtw6KMLhqzYMHmN6MvvBYrLFJaSh",
  "key20": "49c7mKc2jJWtQ8Rt8MS82C998sR3jxxgTfB8JZmD2djPvCG1BbiShQZaWYUJ9rdggM3nY7uoUEXPe28XPDJzK1Q4",
  "key21": "QiDkvyJP4GbhGEeCGJ5jMAyVtSwwQBi4dBcxGLiXvr8unsGAi3dmGxMBvyC8JMHcxLrJp2RGntXrLApJZxV9zko",
  "key22": "vS7EcvLiAgnV7tVMjXG2gzn3kbc95BSaUKXuzcJRWYQ2LcBxJUywnfwuH1mjgiUiu3XEvGFTd5uQDxzNv9N8cPB",
  "key23": "4VksYw4kXn7Wsaa72ZiqFfKYVEdV6ZAUyGR47LhfnvY4YYphE14HLs8PJV72JQsgPfFvV95CsCKShpuKbZiKvrv5",
  "key24": "5rdt6vuZC3R1vijxemHfxmBjwcWqKY4uWp4js8c87QtL1puJi9xdQ47gBXGnJniUdg4yNV5EhFhTBoME7RvVBero",
  "key25": "q6YbpPMZNsYJDFmPd2SrJ6YRxreJs3wKqjnGELmNwKxetFGnUg1KjTrVAs1DKXtaqVNqouarPXRyw6FrmM4Edc5",
  "key26": "5VcNmrnPZ4E78Wuq7kT3JnaWdywjpkDQF3EsyUH33LJxi9j5duwf15Tj7XAwLAmRefggobwNp8912aBb2tZJ7KeJ",
  "key27": "ZuMyR5AsjpHiJnEA6MPVqnATKCYeUDm7XdP3iQpUN43Zx52NGiKdnCKkUgSdmiVFX6v6MmWeK23eSo1b3aULvbW",
  "key28": "5ASbJY1ducNJVZjjhEsHo1kB2V3QrZrV1N6iDRHSPUktV15HvgrWamMWt1dW5Yp1zMJNs4xfXKXY4WSQHQe5gHXV"
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
