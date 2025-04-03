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
    "MJanuQG8jB1Fy6HUdidF2rqwdToytD7Zxm1uLfFMVPJZ9mbXXkJ9rAvcvnQypc1DyXfFEK3EFkev8i8tnZJENeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x3tDiWdoCZfQ4qDvvN9bRJ7RppHVFGpf3AbpHBprCi8k2qxAEwwYCxMREiGy9uHWafE38e8fhkwY574rdgfCJFo",
  "key1": "3rRFrgi9A96jcCdfn4y6euffuB1pGLh3bS5wsQ6qnrTB4ku4W3RVQhhgxPvXFxm9mpoP2zWdTKdEgAWXqNQhCkvw",
  "key2": "5nLhirm67zzsPsPSrCQn2nPhWCNxZDPjwb6Hg7LimjMJk92uEuvZLPPi2pbSc9BkLKxcARiVCPyXp8pKKWQLc2FN",
  "key3": "jw8vzzB5NQ3TTBC18kpvGgnKgv6JR7KARK8DqqaDCsiH4ETrUFXA9FBgKqrY53J1d7zujnULNWXum9VoM2zbH32",
  "key4": "3sSrJQAvjSfiiHU51hkdoDcfS9Ny3zVoij9ooBAaeQ7zFkTqapV9uDpHK5myt1xxJBz5J3XuwMotJLxk6wQr61nY",
  "key5": "3wYEDfa2HubsZuKiDn1m81FRcvuYdYbcb5aUq9szR3TPvHM8DBLUrSFPEfKmtMzbbKGJMMnhGUEUz2tPSwLiUqJB",
  "key6": "4w4QxGsjMFHdY9SgELUCokA8SCMeCSBr2g2p1KBtJmnPBCfGod37qMoiCoMtv8T8fCuAGh6FecKvij1R4kURMYbq",
  "key7": "KXsEkZsVQgY9UUiKfBm7677HqGjjpC8UnfPDRVsLSa5WdhuXMnoDwbKbxsi2fDz2BDwRjnBLLvjG35J3dviy1AC",
  "key8": "GNPyUDzgSpPwNa22BVZjAEtkDD59EqxDq5YWjnVsEHmS5nkmUtvdwmQiXnKtxnZoQAAyNePwiakfg6NPpNJGb1b",
  "key9": "sXYcu7iNxkzZRSzXwhZemNRUGAxpsMQ9rQhdJdainuf9tBWBBVLSTaMqYUTVNYNfnNRE6utA8JQ3oxPBiisz5p1",
  "key10": "4qbkq4LHo1WY58MD8BuQe7p3gJoVZLqpPveeYdYgaTaxbfgLgQY3M3GnUsyx9wUenWNb147DGCn6YjKaj3m3NS5t",
  "key11": "AyVV92pbuPstRHRUeD7qFeBRLbHfHat6RGmkt67zksepbFCZ1CEfRdMqeL9YiMoGbkDvfHU5CY3Z2gcpV5esxRe",
  "key12": "2UWJAZYwp6HsFL7TL17oV7vj7PHA7ypRDLZmytLY5c4QtKdnv66VW6N3h3sRMZKcejhZvpzKDX2HtvjXwhQ74HGn",
  "key13": "7rXeC1xBtonM7wUc4bizfxHyS6quehuucxSrVonLJcif5mLbYwb4iH21qAR5Eqif4Bez66Mk5gThv79Zaih4NQj",
  "key14": "4p9wuiHc66wS6ywMHntXSQvXACScPtVoevgoQxgjYayKM6KkRjZvRdoLngkemnXjhTYvwSLYmXMJ92XRzTJXT5Nv",
  "key15": "49swUYbtD3HodFz6ekXqYF46MUvHkXsbiQ5GgzHPsc9RR6RwabM37uEv73Qgfq52Cyz4HsNFGRUPLQN8UttWXik1",
  "key16": "3ass8doHkREZHKWacYnNMKxmJTp9tRW1XVpUYkyhJ5oPBj9kDVj1zFTHZUYSRhqkjwnZasTABHokpzs3Xcaz6LR6",
  "key17": "eLiBN8VDMdfv6AUX5gcWHeJr8WKddZt1zqZjzMNkTReUHPFfsVq7ksYnSJ1HkKDVVEu7Zat37GFNJcju2KqSr4o",
  "key18": "3Lq6PwDXqeWhWZNssbaRdfkBb9MZ1Xdw533sXNaPBT9cBcrRaNxTWToFFuwbhg2YhPDTMururZoUB5kEUjinP6PB",
  "key19": "3UcbkStcFzFGKUTnfb8G4FoWDv3dy4umoDoUtoVQiZfyBUrymdoQjwgB6WCDjTN644XM66H5iJELp1fis2SgWy6D",
  "key20": "pV3kjrTqtMQNe8R4YCH1uK13PL4S1BAfZoLS53SzbDgXYzVBEZ9z62rwPm9bCwzdsf8aJMeTLeUFo9Ybjm1YZeG",
  "key21": "22taj8xa2ch8kRhMeKRtAe2rKndVuij3UnLEjPwBmmFCs4jD9jWkKfakFxmCe8FDn77Phabithxo1CFVhj7CM4fU",
  "key22": "3QG6xuUGwS8K22YNiZt7V117hCzSZxw7dk8Ab4famKC5xe3e3GbBHaSVydgRAbtLFQNJ2ZgLwkZxmETkLUpAGDcM",
  "key23": "59xFHCE4exfoYPaiHL9JhBQSe8Dpgcp2zZbRm9hPthzpyEeCFvoLKXHhgbrS6QedPaxVFgghmo7fHvUiz3mk5Xw7",
  "key24": "3qj3r77CkTeLBzP9QtwQiDGgy4Fdi8wUScLDzYPrsuWm6SrEaY8c3KpXfo7CaThWtztSBg8o7acgNuGUeypX728D",
  "key25": "5ivrsFHMJD594cZ7Yic67o2PvxRPz84n6y5uCR36CecahFjX1PRaLnhteSuGJoYn2Y7AVPakKzV9MadjWFHRGTSx",
  "key26": "326fYoGvPZhBiKPJ9qgPDXp3wkJAPkZeGW7e7RHsS3pmxHB4jZ3MHoSe2LVsWBV6xBEQDdtoccHFotvSHKHMCSJw",
  "key27": "3XtiCqsHqAYJY9RXZquXk5B6cZvAzChnuZNEyCUmrDqAc8iHLFLtPLuQyBXBpZmFcTk6DPvz5berQ7o21pC9zLMR",
  "key28": "3QLTxAgWDwwSqcJfPcCRBUaMwP9FuzBaJYssnJfSjp9bAsG4kxW8agq4oAuAXTTPbVhcu5xMhvm5C6ACBLJETUPU",
  "key29": "2mj2GXPs2RtUm7XUa23wzH6Fu3zoMBQ2nsXFYkw82XkZPyDcRCxhFdA12odQyPsbww8rwWQpfzbimGwNrpxt2No5",
  "key30": "2nBH1TzHoKwt8i2UMwK3HhpRYU1XBjNbxLyudRiGxQzDKhJ6tqLr9y3GvSMo2X1JjNCgkwE1KMyffNeoMeZi6g1e",
  "key31": "3qjvyN1CZuukpchZTxi2n4wQna3SYRvVNRrn2JEjp3Rx4sdR7aUFdr23x4QcMQtY6oqkFsrK5w9HTjET8jXcooJh",
  "key32": "2bWLgTG1dFgRA38earBuHAwhtpmXo2gk9qJkJ9n1rKbubiMKyK9iyZHaeBdMvJ924nephMPD5zR5BYqxeYpYdwNu",
  "key33": "2G1PqbAJW4ek4UVG8xeWHNkxZ5Nbv6e9bs4qnH4PeGKXegNS589PVnt3SJEBEQJdD3VCwNueCskke1bmnsesU9Kx",
  "key34": "3vSou4DXSWpNkL4wMyyKoVKme4DSKxfG3twSGeZbWTTQXDcHmiGtRbopYox5bsyaUo7U3zryKAu2Yfkjqvb11TaQ"
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
