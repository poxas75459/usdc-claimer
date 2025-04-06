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
    "4Dy813HhbEj3Njqkn8uadXFn6xNjPiQfai8YAnusXrSCJy7Bk7vjFRSUNF22DKeg5gJwfWzhN1Vcyy34qqV6Lbm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zYRYBQYhy2aDexM9p24KbACFXRjKZ3SeNZGpB4AoKuBez2jUV7Zg1gBmSvdZ4Db7XWAQQ7ix9Kt2KdGT6B6BDbt",
  "key1": "3VmSCUYbSFoaPovpd1GG8FtkHUuM3ZheY9kL2GeXMimHK5k2xMTa3KSUoWWdL6RpxbjQGyw7veJH8FViVXzRcJ9g",
  "key2": "5qYzEkLDFSjxs6Bn6sq8UzVk76jWPkgJAV1C9EeijcNnJe4LkhBztLAZnkEKjNoEQ4iN4qp5EiyWgmjhGvJxLS3V",
  "key3": "WNYuMMRsqpb5362YsnSVrMeU4jGhigeRBiduAnufyTQPFTUMDHbKFWbZf7XMAuzqTr77dSW5qDR3LuwYDgkHGhs",
  "key4": "2CxEJ3j9Ro9Pkxrw4JNdgE9RERBBkt8r8eyZ3rdsVxYeWELCshMhVnSmZdJiRheVskwHAyuGJMuU3iVEmwTThisj",
  "key5": "39j7GrpBjVBXAwfvgcQTFVQhKp39r8ZUWTyDii5Aj42btdfqkqNQWpwKuGfPa2DE3A89UH23PMYBa4DxdaaRJYKv",
  "key6": "dEMxiufdeTRVFApqa4r4wQqG29a7ZyixSZieiF5tqJXXJLYpAf98djQnFhP1BuhrKGqarPpJQBHBSvB8odjC7Hs",
  "key7": "3RKNW7fNkZCtvZqgRj98ewLxGdRkAzPo8PeVeGz3to59yaA9nZRd7bPam8J5bDAzyJ9x2FRZCoikGzNmihrZviNc",
  "key8": "4F2QbNbgWbKvUDTQwGv9XYtbqC7fcSoGeKQD6A5emSEBj2efoJyYts2rTJgGB8bDRSmWZEytzYWDEjA6fWXzBUpQ",
  "key9": "3JeTquD3f8ixPatcdaoiPfoGrCCf614Fh2U3Ce6CtEQy3UUmXpysM8QdstnPR6LyAbgrWpfGJoFXsAGuoZoajXwS",
  "key10": "3jRRwDxzeQyomistoccV7t7ytzttDag76Rw9n5gdbcZ8Y6Z9izK6LnrmYibt1KNsmKFSJytEgiamnXJRsY7BrA4P",
  "key11": "2XLGF5T4Nt7TVSBcwXBreaTPYFcDsK6xnEbwWBfZ8GwZqNLf2YURDg6UypE66Yk85WXbk1iunzQvH77Y72Yb7ubX",
  "key12": "25YE5kzR6BxQEYXutGPxTDLphULyYNKiFMas29ACmaH9yxKXebU4C2ANFqQEB28iWiBQT8GAZ2gTT2oVnzAjwvdD",
  "key13": "2e32seQ1zNNJYCirLyckoK2Z1aTwyXisZUAK8tknbHDrMKNNj2kY6TCh3UWqEu1wdPAX3bmRAYuMDPiPipm66fhJ",
  "key14": "4huJ7Rf1NyvqGP6GLQmbdAXNBXsSNCWQVyqGgM79roqayaaUujemxVi4gxX4jx9xJgtrfAMCeUWyo8M8ZbEm2PvU",
  "key15": "2c3uX1wdiJ8FfpY667qY35pVeJQS5UkfzRVhXzhM8mU6EDkYNqiVBiNo3XEgjqTjYWfBkZYrcLXVu94FGDDVrhD",
  "key16": "6j3jZXJ45RtZ37B2HVgGiXudQziDh5uLDPTu5VUF7Y1KKWQCqH4kHEjqniAFyhQCL1mX2mng5e5HUg2ftRDPFEk",
  "key17": "s9uWdaQCWMThJVZJQqgfQfyS7RBxrkFzcbZJk9H9TM9jVTKJeSpLx1SnTqZyptvR7HmsrodDpuEHFFwkcVJApNs",
  "key18": "5PNiP59V4MrCFuxbejUoTyF7o3ai6HxCn5hmFbbo4HCQLxHCMB3Dns11sDaW8FjmkBxThQwF4Qr5VnqpWYdHgh33",
  "key19": "2xC2B8oZzwUhkq5UKSZ2hvp9GcqQpZhWVH1Qnj2PzS5GxvQVBad9LYA1qP68cCEGZ1KgWwMLCYj6kyqC3LN97Qrw",
  "key20": "639QQG7dhWLC1s8hmnm3n1GMMwHrvSGkvYy4ZUGRx4cQB81DbjRbfaJBn6g7WLEGaSjiQGYi3CAGS1RyoZKiKWoh",
  "key21": "36NR6RonhsSQWkjCmtkm7Ngq66Fm88WsMqFiYaPGxvpmVZdViGZyJMuM68twJRExUJ5RXc7gw431UKLQU1PJVqx4",
  "key22": "wJXpqfSJqom7UZsLGb6JCKeS9KadxJdW7DqDriRkbnfqS1W2tdAGCb4bNVi5GJToUUsharaEyEdDA6hm58bbjrJ",
  "key23": "2UP7dCunCBaoGQuN9iPaBNtoAU8PvxA9GdBkw1ipxQr8MXG2yMGQv95BaqojjVhLuXNxizPVq2TsbDvsUK6oiznT",
  "key24": "2urNWPPZivny7gmtr5kZumPp71bCewqjiZW22yRsJHAYZAmfcfj9QerNyvC4zc4sFHd64fHgyQ678FfWDZDMkSEk",
  "key25": "3X8zzSPcCpECWwKCQintrShxPS3ojrSgzs2hfXH9Dkw5pKVBi3evhfWcducDQS7m6ivJxs5qWgP5TgHsMx6NHptk",
  "key26": "2RWnQ77zcRJp24Ex8W4CQ5eRGxKUwXPn9McJ5cFWi1bNiSzsnFG9xeXJb8ug34im1iA1fXaNnfzn86mQCoEgrFrP",
  "key27": "45ApkRzjzoxcwnYbZEdXJY3zrNjc7jSz2HC2t3YZbwyNkEZUVd8MoFrA86EGFj68gorGHCSvrNW3bpiWZA5Dvs3i",
  "key28": "3sz2Pkp6E4eVPFVqyU9BPgReEUzAo4JSizijCKm2B1ksY43hfweyHrmJo2Fq8dujjnKgRsvARVSohHa5iCer1nhq",
  "key29": "5HuPxgYePdaMEJSQF5ByJ7tuw41NxvKev6Sndk6FKRgN1MxZSnpBs6vMKDG1ha2ZDJW1qHT4bwAfXWTo4im3w3Ha",
  "key30": "36Ac2Taw5PELhGXAhr5ruRLb9wiNtj2bEyRhcjJWYAEK89t5wREfitgJZre77zMD6jNfUeLET9Rdv3XM5AQ7FYu1",
  "key31": "3Mc4qtSnUeYJvTWAY1eyaRc2pNnukwx6LSKHTdyTqUxLbptHzdGwWMaY89ap9vqWDzPf411sGxqHkHMMTGmWjWmu",
  "key32": "3zYEnCFx64EcXVbkD6VULoaAHCDT1nV3wqA9nwAs5f6XHmotCozKBgUHQz2q897qqZqBzpPiyEb1xuCHarBRscFj",
  "key33": "4g3PG45PkPtbwuWhuSQXe7dLffqc2cKqEuigPbFFKXDXDpZRizA2LmM6EpeLZuYJWsoUishwKyxpWKzjVGtSgnaj",
  "key34": "39Ar2FNsYHwfrCEXo5y6WLYj1vrHNNfNwDju4AR5hxis2R7uqcpj9NMNaUeaQSxKL1L1zFyyUQGXmvddnNdzjQoK",
  "key35": "2nTXZoAqkx8xsMKPz3c4oog9u964UNSvuxcmDHGP4pqN14Sm98ALKPLoksD2jKdmfFUpqiXBpjZs9Vvan9rVuB9A",
  "key36": "3kmKokAV8MdfbRjNyWorYx3RJKUwTo1adNqng3nAKT11gwTnFJ5fG3a4PhKzZeXMm8d5HEoPpa8Sp8WjU4hxQkFm",
  "key37": "3iALi1CNy9e58ZWmhEWDDagshs8zcQgFuDB83KS8qGGmmiJCnPZ8EprySs2kbMekB94eMkNdApdZYpRa7ddPPp4v",
  "key38": "2eDhg2VkWYDVjNdwRQZUYcBU6Y6UvBjdwacdQGp7UWMXRhS67eSPH47uBRPoc49GsGJ6Lt4crd6XbMtVVtm1uFuq",
  "key39": "67fpv1MAk1fAyaBWMCKuHZY8JzLHDLqHrX8mK1gJMFBSCYz7pZe5sBkbLfTXSs6EWeP46CbJBu8Y8CCgN2KjJt3f",
  "key40": "3wjd5ZRSPuCAWHBDrZyTfDYzibtVbrFst6umEL8az3kpwAG2RWa8iVafPJxiaun58U5eFRf9aLo31vCUJKY8aSb6",
  "key41": "5Wg8WFPMfNr9kyMEaStHycA1pTGskbfDYjVzCQYTFQ6XrmsygRMXZThyEYRqwrUv5L1HCwY8GyqnwHLdnwiPnu6t",
  "key42": "enKgbuo1mMiz7gr9SYHYQGoERzcmHDiQhJb9Jo1aRmWNTy43Ljcw1DjcyRGwVU7NkSVsFuooK5iGAtLBPhWv5R9",
  "key43": "5ELhmdPjVYvG3XdVzer3u4rpi4AS5LzFexgbqAM3qGzH88qW1JcxfTTxEURjgEcsykvFTp2dj8AXjZjAFMqYH13R",
  "key44": "22QFcbtaKAT2M3HM6fLxF1da3oM8UuD2cb2f6GYojEaSLsiEk1GJUkLDKi7dvG4VfgMJicXYtDS3UuZw6Bavve94",
  "key45": "5cMYTV8bRJQFZJHsNNt4ZgJipYi3Bb8X1atqVH6GJSWU6ayqbDckhhexNV9rR1rB57VAWbPAUekomiXGNbAqdcB7",
  "key46": "B5ubtC4Fsaii63jtmFNG43ko4Dr4Eie7rwTC5xg4dXoyyPw4GCE2i49LaMbriZn2AgshXKQjUWdBDeaofToNbR4"
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
