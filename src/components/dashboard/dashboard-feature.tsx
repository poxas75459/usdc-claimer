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
    "2Cq9xjtt8qmdU6VF27MWBkSPsKq54FtTi2hEfp7TUTz1JVky95FUH5QgevxRo6mGpbv3VezLqTZNYehPKtgxHTAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GDVKWVPRkGYARVxHkxUhJMCTJFFL6i6KBCQaytzL1ujEqT9HEGXFvZcrAy5Xj2k5M8gcez3jKtaBUs9hm4T7zYL",
  "key1": "3x8MYb61WKfnvqUFbYJMZnBCRC6BQuXRujJwzfPiMZZ48VsCpWxqseTpadsNfLoGqUckCU6AjQHdm2NCsZVZsXqB",
  "key2": "5fsU9cuCGtyUsxrCuyj4DkkUCZpmcW4cxuwxfDtLniwtgKvJkPRpRCDTYJhRDmiJ4qQK9BgdwPwaqXZowFzCtqP8",
  "key3": "4L2zeBRBxFBAD5bFBQJ4MNRLSTpCoPq8LdFKDWSN5cgcJqeePPvCs2KhyFQrHJbLukoQftmkDc78db3c23pUHD54",
  "key4": "3m2mY6R6kCvbWEkk4hPQesQ2TBwCGfkSH3KDanjnb1x6Z9F5KGzfD18mwfMD9FrnqWVUx5fshwCDg5yuGLZujCvZ",
  "key5": "2ZKNeD2DAoPwT4T5fECjJWLQRMn7EqdzEkRb558WEirjj1jidG4MokhB1C7tvKXj6VBQSqTDRYBLED9QNSKJUaEK",
  "key6": "5PAGcWRRHHWqhAhomhP9Yi8wxLo5Paje8sFVsmKN7bm8cVgFmzwazfqZbjj8zAsGmdft4iNdJwCu7NnMV8qeuX3T",
  "key7": "4XHv54Y2sJrhJyjkbnE9FW3qGJkwXMhKVyXheDUoye3BmXVXGtLoEt7HiAk2XYmpkxSSJ8RriitNZJPXLbKMZoZK",
  "key8": "4qMrwTCGwAZRyMgt3whkFQcmeJbaJdZ5B56aq4iCP1drbsRnYD71hgR53faXbPYQR9jivHQmvdxUBxqwHZZbfkEf",
  "key9": "2D5bfVfsQGP7T8WzJ55wUYLVWnwXZcJCRZXMRTwV4isrJoukvLHtCJmJt75HswLLmL98tRVWfpLvAhojiUMBteHK",
  "key10": "32pNJ6K7h6ooJNc6b2MaDcKDhWWBigmRtRphnJRKFeUGUhaLHBMdhTxdQJ49tSQk5JQ3SjRpkgQ8gW6LYdiF8EYz",
  "key11": "3h3ifMdL93rRFpLqR5ywLTdx2SYb2K3P9jcFN9eZxTP5DdWQ2wwPsssdjAJ5a3DXjLQJ9Rgs4PLmVXs7Urd39AA5",
  "key12": "4pj83wPFSXafMssFZqb5jtXEFML6Wgq3FEpCc7D9kvtgzLpdRSvGq8rrXwdrrXnNxr9KBpNFEX9btQk7fdZdmEgh",
  "key13": "46fMWpkgLdaZLYTXZ2PWuoGEs3m5DuafWwwneGYEH8R4AX7QQBNbo1QxAkqXWkG12FQnUzi53NkyuQW57MLSe5eV",
  "key14": "2aseCJKZzx2YHzMpmQxwkKeppR4q1DSbRP4QpNX6pEUekcePx22E26ypuppKK7EnJqxirYW7BHMirnMCD8eTRwJF",
  "key15": "4iDwPEP77AwcH33uxaK5nozUzrkfL1y6Hw51m3XpDyjxhSbmzXRCbUgtUrPenj4E19BVdZ1NvKEBXaHLRd1Yhon7",
  "key16": "dgS3hK3nZQ1RpuEM6jtttoPwqShAPjXhddEMoC74bBxqLDXKK5xYYoHeLT4L3VXFkN6tdqAihBd363JoVNE5zMF",
  "key17": "23xj9xxCvyXRGhej4q2kYLbbePii2Bo6QZkrg516HGVZkCpYfPYhA1r3k9iFvi9sB9Kv8sZW37AEKomK7AugdQBv",
  "key18": "2ZPbC1ZFh6eDkZj7Cuy88t69AjrvUN8Fc2dgTewxLVfcU5xpVyMpCRGJjmNGr3f7NeVYEw3cpqMjQw2rMf6B3mGC",
  "key19": "sTQNSGbUpAsp2EaMrEjWuyaqDMEsUXFGx8usfpLmnRrj1RWLbFBg9Y71Ya2FjQYSbhHLwZdoPDbc35og5ppbqsN",
  "key20": "4dWFi9T3QZRHoQ5aqC4fiNkzo2XNYH3Frb3kRNvTh2rydrFv87i7BA8GG8zBANc2PUUBTfhxeVZKFofxMwBaaCbs",
  "key21": "5edUfWULHymp3rR4oDpCwNwbgoLj71fQmNYRph63bBHK8bod2uq59uqUBBA19tFvQkLUz38Bgmay7sPLg55QHhY6",
  "key22": "6xucVgiV5B1PKdHifDr3wPSnYdvUiptrYsHmeGRD72gPm4DjWb1yCHgLVTHRUJkVXacAXpN7LGCsbwyDoah8K6c",
  "key23": "4eSpESmxgahPir6sK9YTqxTQU3p5hCxnpKnqRYLHNwropNfNyomBfXLKX6fJbuYJJ4hzKksJXiK8vjoXy3tLH4Ks",
  "key24": "5CZ23tguv4jDJD3YoDjncEwBXqQNQXVcBcDpTk5hP1EEzKnUmRfs4ieabd7jk4U5ncy18jbDfdiLk4Yoxm1YiWwY",
  "key25": "2JuhsfRfphiufcwwbJH6WJA8fLrTUmYJW9NyQrGodvndQiPLGnPgmPnHdjBpjZWBFQNB5nbSfevHMEbvtdibY5si",
  "key26": "LGCyRc5wy9kV7oXNsZ62HBFN4rHeFQufDL1A971KgXsxjPxTyw91Chm9pxJcByKMsi17aexZrQjHqXxNPaeeK8E",
  "key27": "618amar2gyDVN4EnBTiTvCPTe5WzjbA5Gig8tn3vTLzpfV3JSHusZHLHE1j4hdoehm2qMho9PgbK9xYiC2SAbA9Q",
  "key28": "4EdwxHDFoihdVu64EyLWScGynFwFJwHh8tP8uN7uEjX4BE2R684m9FeHLXu6QDyqm3xp2jFxACXwUZqbqjgtWk5V",
  "key29": "4FCNGAJbDCDt3EFuQmHQsg4hGcqvpiz7MThrKTTmV26P6bhd5wHb77wnZKMhEoTaSfn3mUkHyyMivZGoez9jN1mt",
  "key30": "2KirNuUEbJu62HNp2PGj3v5iEuJXiFAHcYHcKKJJxgMruoxJGrVbsNGjwJVsdCctTrm5e329BC6VQmqyPHDWXmjQ",
  "key31": "2E2wZakHS2pLKZdDkCcbXDxBkHUaBdtjJUtTJX3k643mWV4jo2CV5wsnVC57o4vhG1DA4fnji5sz1S7drd1zxyBt",
  "key32": "41MKH52Gmi9Cg38cgnqQvTf4BcVU1Woji93b4knLeTs5JCe37TSDyrYdkhYR5Aj2y99KssRPKUqo7GQyLPFnCcEo",
  "key33": "2WeGKkuW1pvkjFgJ9pCvbacx5eLjyuKcVX3LwTsRvtvBREenCK4imhjr8PK27Ag8fKNLRQarX7sEWYaWbcMRbwp5",
  "key34": "2XrNtAuDvZNv6y9RAMyrzL82U8ivZ9NU9VaKkeCgdgRaArppNDBJkQgKjS6gcL3nKechPqscLq9TexVjDu29XGUN",
  "key35": "4mdJ76NrYbn3A5tHejtV47fZtsLwK36EfJ7VGdUeQ2N1XFNXr9ksanpynyzwUZ5cxRLsf2t5po2EzeNNr2CTZAfa",
  "key36": "49QVtWJkSHyTJGuu8HkzW1mP5aUvj3HiXGeApoGekUGtK5zgReKkTv7VV7AH3bU54WZTf4VQZBDWv7rbqCgnGWAt",
  "key37": "2L7PaFcQD8rQaDXZGbrfW4GQwDbA7caRBKNn5qcL1AhGq6Gjk7bZX4iNQwXttsMoqZo8iVAyVWmzd3VMaWvHw7rS",
  "key38": "5WXoWFgckBkdk43hBAJPFmMTR1SGHHCKnDzwZUo4cJvzZEUnaVHTCNydGkFd9DB1M1qf1Z56wDGLAWM9Qz2GkpJV",
  "key39": "3LBXoHhhdv1rxdvcQNqybJdcTMYGF67gYeRfENj7Mc562HQA2HKyraBftpWjzMrvTe1VWUTGWFRtYy8Jw8NtJMtt",
  "key40": "4P1QPiMDLPJwkruVqFQMGfkeXVymDyt5SMquajEJV3fdNXUwuQRpGYfemx3HBRdzadkVSTr4HxhMoWynS2BxAc6M"
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
