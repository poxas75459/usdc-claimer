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
    "AgbEtQkPzw2WXkMEfi2Cgj6KzbpLQSSwrjaXW4uZA2u5NuTKWKNuhypRj8thLx49AuqMT4mP2czuSW3whJKkYk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fTzeZuFPjXyKDrJ9LSxmt4Ewz3SFXNsZbALn9eCFkyfE2cz1D9P7nagEZfp2cw5fyXpu3vFAGYgsw8TfbsTPrEb",
  "key1": "yMVAu2YupZMkjA2CnYSNL2HzVb6fdRKu7W4JqtXuT72ZVwLDC7dndF21wWeSYqcFNsNURexDzjZBN5qwZ7Tjo1i",
  "key2": "5qWcJ9B5XVAJbC6whZyrwus2vym7JaM8gTUWoEZLu9JudcyxwNCaPh4iPHt3V13VZDtKKFBb26rSvP6hGrgsFWw1",
  "key3": "3wDdCutavwV9t4nMkjZFqHXvPUjJUdaKQGAUahGk9MuT3Lkw29b5mqCc7uSmMhk51zCLupr6P4W4W9EsfdaJz1et",
  "key4": "HVDSVxSWqRipUqwZqnsLguaQ4DwRY3zRbxzkstpG6ATeEe2yfdrupSo87xCtTLPauqQg6NcBRZQvUQGBcT2jczh",
  "key5": "46comriTxUXZBZLKXv9EXdjF5Msa4G1XaDyuh444kgS7MwCnDSjQpDbdmgT6M6VjtcPkRqqagBsASKLZmYWkDfNr",
  "key6": "2hWtYPTjK87HH4NbgGgNd6xmY7ghpq99Xr3ZjwhirA7v4Hi6bb8hKv6CXAWRAttPTYEgGSUhjWGsuQTBt2SMmg4Y",
  "key7": "3vPRgxYsb1WJbZtg4J2GppBdNaqoNRP1xNZrUwYBPagwKvwoVXNG41Gxe9YzXd1otjWhPUKr3mraK7LVo1tN8jU3",
  "key8": "4pvmPnagqYQfcf3DQTPdGs33GcsgXhGj3QKkg7jzn12QXmRycJjz6JSYEbh2YJXupDxugYmjMt8JeDyNZPpHKeeq",
  "key9": "fF8GmV6GpMTzxsvnteEVChHSNCEoqk4AK8UusBqvZdvpNxaPYx99XF5kXNJ13FBVXDiwWLLcujPnfYWxk5nXjqp",
  "key10": "2upCjeA2Bxx1VaXQbDFpqhACSesfuoqpLmXRsFKHPCrW6Pr9C2UHCDEwcZnABv4tJaVhRiHFmxjt2cFJczADk5tD",
  "key11": "3QX6NdwzcdDCbSqa9cuTtFPKdRQKmAGASBgfzHTj7MowgF4vXE3NhaDF5X9AQr9VTWAjnSYSK6igqUsCY6UbdZxK",
  "key12": "2kpTxg8y6rUHBFAAsVCRADT3PvYJZoczBRWRRFKufruiiD6fL5XH1Udgw8LWiJBRo87rJmzNfVzsmWksYQ1o8g1r",
  "key13": "2XPGN2GVUqaKaKdZNMCRVHbkhbWCeJgshwuwFwLUvGqbGJpKAeHaNExhx9s6NTGfjGsJko2nXsHztDCCiZQGZXDV",
  "key14": "22dyKe98wUvLbPC6S4zXTZzGvE5KBmUTKcSin78q9jfL9tVaZhQTj2gfhZC6CtTVWEg4qycgRsQyp4wRgzsXkpPi",
  "key15": "wM5Em3qTJn8SLC8YnxFuPuALRbqRvGUvm39hG7Nw7GJh1sBudjoN9KfFxZHCEN7cdFYbJ5QjqgYjxmXRJpjoPLm",
  "key16": "AtyBPtDubJotqAS5PN7XXHaMdrFccpcdv4NURN3rb7jSLQR7pCrQiMUNdd4LnXLFGCX5BgbfZibqhG8nHKh7jxE",
  "key17": "koT93nRvdaZuuk7SkTKeRJCFeXdEP7NnJDLkwHTRi5xHjs3ttGzuinXi8NfPbSHJsTjryLdPadnJJPVXzHZwHxX",
  "key18": "4sFzN5wWGzhYFW9WMTMsavvLzt4GvybfPVy9HMQGHjUNJN8icQ3qXZJ3ptyxHtACxSShPrsVhiXq9F86igfpbFKL",
  "key19": "3GPLPfHUwqxsmQAS3MYydS3M5xQM3u2nCvoY9pZHZVKCahzV8rSyYcHijaGftWu5q1eQhqnN6AwmXUe7NeCDCKbv",
  "key20": "38KVEkeNASr3qYthtpt9FkPBdPgjJWjGPnp3hTR1REUq57Aw7ATvXof159XvKDuBB1wHzvyg6xTUjBTcPjewrTEF",
  "key21": "B4M5Psxh3YN1UkPMnrYP6UYUYZe1kGBPY56M78UKybQc3bHh7EJw6HwyDWWqNtczG4Z2CRnjZCdFTHzMJRrfi9z",
  "key22": "5R8Wz2r9ZWwyTFKJveqvBcyi7AyMXawud6dCWQepNU8kQsir3EBQAqQhGMHH7oSwbW7naUP8UkzeZLDJ3V4uKpyF",
  "key23": "4WiwBUDgo97qohURDVRopnynuswdeeHy4MXpdgMKinv2HTT5wvp2b6yfBjshm8z7B1gxqLRLzxRutQWaJ9mkJNK",
  "key24": "3oA1RLUqKewFvkC1j2KxRsZhnTJERktuSBaw1HcAdXvo6CHmUsFvyqTwo2mWvi9xnDiBbn9j8hqnEgpxxtTT2vRo",
  "key25": "3Lohxf7gvJpcgcsKcwpDoiGp3nt7CfmJWdvj6h6yj47ekiFKbw3zCX8U63wrVmJHwUgKTVfQBaj6GtRee9uiVaHa",
  "key26": "3U45mZ7tG2rYz8jZNdHVtuVUA3wPU8yDaZ64Uz24UDroV2JviH3i6nx36SFgbxBghiG8gfofoVynnhiFsRNQAbkb",
  "key27": "GEKu4u1cxrsEJv17E3Xz3XpssZtFfMDAcjSeEBRUsrUvAjcTUK5zeXAd8aScPRswbvXNcZEzx3H2uYgUAdMWDDH"
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
