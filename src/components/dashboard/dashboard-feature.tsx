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
    "3p98duSSKWL595DknZbmcj79KGRKs29WLnjwe2kGnxNVnujws8jvqV1RFqawBxKRzCufLqkPqELafYe667NJL8KQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WBJmnUq7C3qKuxdA4ZvhgX2zxHJCxn4au4yRuZYyubku8NSCJtmkkCsMie4YJ7bm9UaifwT8uSWCP6JEv9hvbzv",
  "key1": "3VhZuyNrj2HeHSgZcrKmJHg7dV6gaKPEtMPVbQo5TVeQZXRXhiEN7PxDKcYdkxizruQaNJbXoHeKq9e8Dp6uj3y5",
  "key2": "4chRe8W87PUY1JtBBN9q1t8LbhT3Zb4GFJbn3eySDCGBmaQg1eaWnBzBCDfxmcKgTbL1at2ZfmUwW5rmgMYns6oT",
  "key3": "gwbJWHkexeu2kvKJepSPpg71tQtQ7VzY5tktEDrvatZHNasFLtXEcJ3mauQT3US3S4kbCA3nPpwRbfgk5QNxLh7",
  "key4": "xNumNh29dHQ4JiHQkB9Sjz4ijw1pUz2swaEK3LnjYnYJKT4s8cB8AdDkkiEH6Fd3myxXpKALYfdNUJ2UETSU3BT",
  "key5": "4MD2PVikmtEfTRstL7jTbSNSmFNsoDfx3f7v5w3qLSohnr5JxhLbTtzFkYhWhZTCxTZdUMPXjpqj381VQSePj6hs",
  "key6": "Ci1RrZWdXt8492UFhPksKFmTtmQhnAmsGCMMspbbDZoRAPxMrXBeEmZazsze2RTZ6DEHVdTrRpyyND1BMFvh1G8",
  "key7": "5PfavLVHKRkkSEacj1j7uWBgQ9v99ZS6B2y2kohitjSJECp2eVb4a4VxT2FZczgp3fXBaWXhepbSRgjnrK1NQdSZ",
  "key8": "3hDRmr2VAmEjrjeqjwGsJ1AGqkVT26VBBpmqFHiu73a4Ak9mCbo5onajmrPfuY4QJvy5Hx6E9X4BpgWSYoZUv7u4",
  "key9": "3Lgcxpx2qmRkfrtKeFRhFC3cX1bHbt9a2QKAsmjo73FqBxMUSfwrJZK44eGCK4rK5GBKREDBfewbc4QFGfhcos8V",
  "key10": "4bEUy3XWYqCkrUtbokz4bqefQ1Wmp6LeFGm91fV4bi6gp8bXZgiXTNR8ofZhoiN3YLmCm6q8FSPZgGmfRTVzRFxA",
  "key11": "2X3xUL2WxMsFES2EiK8ngBEqaNYrYFdX6mf8fsvfuyJKYrfY1G6bgbh7RSxwU8sFyvjEpMK7ihhzvcdVZeuVTHy1",
  "key12": "2H2R9AMZgCEJDnNeioXooXkWvf8aYVM27gkwkj2ENdbxdJT7mVbtLEqg7n2kpEWYkcVa22HKWvtyMugcBpJvy8NB",
  "key13": "5GQvQxFXZUME2xYxmkZFB2gxj47rmdtKoFe4vs3bG7e4mkF9pmpZx6X8VFEvw9apXD6uzMhuSRnUSEfzejDAGYSQ",
  "key14": "3EenEaeofDMqTwpNxmH49sXgtAAdxHvMrUN8EeLnSP6yTchSEpeLYccwiuQdDxC39p2jLKj8urpi7zHL4BAhZQti",
  "key15": "2VCKZ6djzaEtRZU3ULEhKMoNuGxixB3jS1NF3sVKjv9xz3eKr2XhChPqj1i49weQSTFyxhExb1BPJ6Q662JCRiUh",
  "key16": "6XYP4ytsHnPEksD6mX76WmCD9iUrhGtSB1Ad5XnRBdUA6sB6PL6NyHFavMiJJbqBxEZKS8YScJrL7MTYTBNFCXa",
  "key17": "3Q9UJor5Ycan4zE2gGjCMNu64LfNX9CtNukUtXTSmzohfbWorFjSmY7tC7dGZ4khSFaP7oBTts4YXq6Jd73PpRYP",
  "key18": "2QrHpzD3i8Zb1fTuX1CpoUPfE7RY5M2dMBDXTYDqdyj3rm99whdAYKerYHdWgrdhSD6LRsYVNExc8uUDwVvVsBrh",
  "key19": "64akmxmBGRZqXxHxm1a3uQW9ThBiWi3uGo3zwwZR3gPC7n4z6xZHRiUfrac5m8NJBgDqhG9yL41XwcqFcv5PRnAc",
  "key20": "2Ambqf9fCcpB7iFG9Nx6WWDnZbjWUUUppfMDvTnwyGD6HkKNMpWkeHjB9NqpArdKwaQ1mDifBmJpRkGBQtkofnLU",
  "key21": "2pxd1Ni77bwnH6t4rDf1tceDSVzxobXgvstEfRn6TyPi2ouXKXxsEMGLj3WPuGQHwRRcgoZt3AF2f1yws3RgL3bB",
  "key22": "4PFKJVc9ZXre9B551zkVUVkCuJzRKhNVhmX7oQpX8UXJkGkYNKSquw4FKgiywfeewCcFZhubDbx6A3DnrGpFCur6",
  "key23": "29GaqNSMjJVr3C4WtraFVzpgAZFKbXV86qMCKAymWxj9tZiNE6WdVrJMj1hStoQyY2czXx9xWLEkeitH94dCnfWZ",
  "key24": "66h1DZqLAaKftdZWm2TjQfWKnpLL8S4qDLNorD9ihyc9qz3Rw4wEgHwKiQJPpK4J1ESPXFNGUpgFXUjRAHLc9u2L",
  "key25": "5Xt8gVcNKGDQ3ciptcQcSqGtCCqDKn4rvfvswpdkH5Yv4NTQb3WRJFZTzxUs7VXskdVKC88zn2a5iiUQpn1ekqNF",
  "key26": "ipEwJTHjfj3vx8m2Bita3HxRQ5WWwzVcBEPgceo9Y6Rviv8eGWs7x1x6CwaihM5iTaLhAyiD7Fy4wb2dK4jcyG7",
  "key27": "3wprMU7CJTK1EhkGQUibh5uu7swXaNKn6iVW2SM63YZoY55Xs2a5LbxDWUmEaGoxjZ1dJA65N21wk8Lnqs7ixDMY",
  "key28": "FfvRXWY1zaBWVC9u9K6qRzenpwDH2RXS7MKtCDR9Uvh3YKYg5kSjbZVbcsBZJ9HGXdqj5m7QnTBgDbHjAmXo9JD",
  "key29": "2XCbevoT3Xia192VSBCGwejs4aDDaPoXnsW76QM3yNAqvms1n34tmkKpakPqZ91K1PTuyg36iTQ3HSJ383oEEshj",
  "key30": "9wygcUyY5bQ1R5ymdySevLkuo5yNG22mXwwwmLM7xfaoKRDdXBPrjjRrYw4doaqjXyvoe8Pg7yDiAc22goRNLxQ"
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
