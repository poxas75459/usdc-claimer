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
    "2FbYH6dPCFBnrBbXzX3d4BnbpfzW6EgaPi1fAVTeqviMmyM8T6RaTjXghAtZmukaNocgCa3snvhJqEfS4GE4tyae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nwqNX2XuUEnCorm7QMSWg1QD3AftHQkSTCfPJmDTk1V8kXuvEeg7aM4hbFS2u6F8TVWGnBymwfJryucQEPpEHEZ",
  "key1": "4rP7W7mpDYTGJfuAsqM1ZuJirnrRyQ2ox26bnmmUZWsa2JVZJyYF4okB64ooHxjP4Mm3hmJwyd6t8uQJd9y8iCTo",
  "key2": "45nm9TzNtpC38x6uuwpRyssaYzasXgqbLyapNuSRSZaLdS5d7SWaKHTXnqoXwH4xY2XVyJ5ViG9TMtVyvbe6CZC5",
  "key3": "EZS8PGbCddR1rZpDttWgNaT1qKq7wFuH1aq2FxdX2DP14iygxCZ3kxULYc1jF8huaxHgbFbrSjrPS29s4LhoQE9",
  "key4": "NijoiBEvm2jPuP6pbb36wq1r2vxq7iFwGX1YYFCPBkoiczxUgDxXdB1er1pnPHMgcu5ZyKFpKtysoi5sKjANgMv",
  "key5": "1hzSGGiYiPhJK8M36MbY2FxQ9w6y7oA7B8e1zb3ryemzweJpwdEFd76qdWKRghmM9dGmSwkK8FmPdx1x2yKPZmX",
  "key6": "4bDHGUL6xxjeVHXWyTwaJLXi1jbaLA7EpEMdaW9fh7Tag2QzDP9tY73NWzsL9o8v2JfiNGi5QSoV2RoKUBhH3Ver",
  "key7": "54pF6LitXGK9G4UFgddNZmbXS8ZvoLvYhZwcEihkYSiMLgFrxzcnLezyF93faHkc8j41WJ2FTPBMPtjmmFvucVs2",
  "key8": "4rZHFRyaNgSM6FxMqypxWpYojWhvng7P6WvxGXfTqUpiHfpWBkpUdJm1vrigy1H1LYxEihk81jzLQ5xR6R9XtVr",
  "key9": "sXADQb4YQMPLfySbjt3HhK2NMESZbWqUbyxsRaSXVkPJFiqbAMJiyy2vtSvhTZvLyP7P2D49g1tu2R8QQ338XSR",
  "key10": "5bWJPYvjNmzBNCSGuCKJ4FtTkqqf2D1vhMcsmSUWf56aR17s49zyhwJ6diMN7ufCwjYBbACpyU3VGc8DKSLbxNb9",
  "key11": "3kLZ3pDsjTViD6DnWQuZEnrtaXWkAZuoYhRt977CcAN5J1kH78tWgm6YzsA4eRak1vY1EmEnjx2P9PJ5zPKEEAMq",
  "key12": "UH2u98385nuC4PNcxLN1YJo3R1NGcFUCeMpC4MgfWU8DVrV3cFphSGtF3tbnNuUfFxGXXDUzXMeDvyU51Kvjh72",
  "key13": "mXYSho31fBqFgAHbYsxpJaAoZwgkAV32kjxNRPDwLAqkKXk51S6Zj7BeBJwBqg9C4JwnyM5jDodj3pwh9JGdL1L",
  "key14": "2jRjSoZzWJMy7ZyCbZKxYxGBFWzLtdY8fY5n3F9EZ9BK4xbgtfBw7CsCfaqjPxvcA9bTzvKpD4Kn3EijHSe9yprk",
  "key15": "2dWZT9wPWTUhEcs2qAc5gGsWer657r6VS7xuHNTmBqWNAraZJF4c3XEr59NBejj5usUJxMUTFkW66sCS1PTFMPcT",
  "key16": "2kPC2htry5FqKJ9baieqqsrc9GJ81QoCGtkNfCjArn5uVYqPfMRDKwAdSi6nepTrXVf1NUsCnRn9f5izJ9dBhNz3",
  "key17": "2DKSqYmHYv2bnRaQbWvaXrUT6hzZbfQx1JyNGMKbVJ7gg5uR3cSw9PAZodQ2GJjvdytmM5fuLqvaRqQamnVZ7mZe",
  "key18": "4zBEHn1ejGmWUDbLihrgojayANzhbrs1ww5ATBbLstN7EZJJz1Qa3p7oQoSUV9jSGNGfJ7ViqcTwacDd7SKfhyY7",
  "key19": "dM3vh4nfD1DZDWyRzmiX7Bq9cieWiHgRjTXMA5thuUzDx4XWpL6XUioXgb1SwpV7ztXHe5iE4uRfA87Ecoz6WCn",
  "key20": "49tcvjWUYXxMjYjAsJ9nNZsa7GN39V7vhw3GPHkTybWXf4g2SySKuVaGM1mHqx6cMowJmPiQAMTNDvskmDLAmCsp",
  "key21": "67X5fMF8brnZCfzBkA7HJ2D38gdKXSAmzZp4CkoVoeDxQTu8m8eh5mWuHQQHvTbyTqtHEK1iB8huFsKKaEnkU94g",
  "key22": "JyDS6C3SaXfm88fp5kH9rCGjyW1Ku3oWEy8ZkDJncP6wNuPHZJbaPq6uwLogNvAANqSmTx5FqjsccdgEdqZ1R1t",
  "key23": "4ixcxYsfz3189UUpcUECFigZ7TSQ7xuMKphqhVGZoPC28SSd9eeYHfDV2KsoU3rBYyWM1myKumWMeLyUBhNCTZBz",
  "key24": "5Frfph46zbxoxJZMWUgBrEcxytd36bcx8UC12ohrUiw4M1oCLGPpyG1zkgcSaSm3SvaYNmUwwRnkdtynPeCXt6mp",
  "key25": "3kN4697qpJ7VxeaUjn8mmeonbUrMYNnrGKvtcgKCgW3Qe2vxxVLLYAAgHPFTF8qUAsKMubRnvMuq5dU4r1iQqmkF",
  "key26": "51HpsXT2ArEnk62ESQWn2hexudJv9b9koWtZzoR6YXgM4Y739r52Q1DdQG5SxyXHwFxgbCnVNSzqCZGtfhyFfVZ5",
  "key27": "yLLqVKm3TgFFmK6jbLauz1e2XzWN5xPWeZoksZxn5rGrPfisyre4fv6ML1cgTchNNHDnnrRF28TrD12EvkMyyWt",
  "key28": "5VeCqMuwu5BVV9myrQAAxqBxBFwm2Ccg9L1tjCRW3Y5cPqsQGf3Dq3oLvnb57sNWJthbdzJLJ9J38QUgU6Yz3uqM",
  "key29": "39PvqJGZnJbxEQQVa5ax6AwBimMrGYHPu1vC1vasxUwqiPb5xbYL6n5L8e7ChXtaBKsk4XDfRxrBSSSDJhnaZwAm",
  "key30": "5J8AT6bRm6ji7a3Rrumi4WWVFejZgYT5yjBpTYmbzamN2G6vmsU41Z3diQboV3HxpRfaf6njAtbmJdTnew9L4iv2",
  "key31": "5aqKSQ3HpjKZmumoCRXaemDaQGruMukZvr2Yxj18zGVSj1jjibdSFXWX9dzUce2mn8dt3GFq97uKacDfQS7PYhzs"
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
