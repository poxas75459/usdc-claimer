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
    "5V5JnwyhKAnN1RmCaSixqV759i9VPRuw232odJpRLGLP9Y9PL1FgaXmTkU7SHiRuePGMk9AFos1gwwSjZkVooNWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PyQc4ZK9cLdbjM1nWJxa5MmPjPWyQQtS1o4qjjPzswX1PqQn4me7CCyn6EqoQepVD2o4Z27FBxghhA6mGHZaFdB",
  "key1": "2atUbd9rikttEjmnvfBu9dyfhxMebDJFh4AjWw8WKKd7MuUcYSmnZHRLStV7MZe1BhSXqjkr7hksnMzfFtvyWJTv",
  "key2": "59xUCoDBdrAcj7oGN18VQvZMKa9PHRqShFxFNmEzgT1JnRoDFkjsa47QqwbtgqPRaYH2y7Exev8v3xMG2b1udZg2",
  "key3": "fjTrY83SLx28537xuS2YjojEBe8t9SdmjmHdHs8F3xKCcTxEZzdov9d3wdnfuFFtay917ZuQEDLfzbZ8EMYgoMn",
  "key4": "45jSi2z9FhnLPXvP9eeVLEAg2uyFmyhgAweBVUfhefECzoqjtTjaVCZa3MJpEoZRSiAD3K67GtVCc8qRWTe7e4J6",
  "key5": "JMtsdyifvgnRqVjNJ59BKrDrpBJ9spc6Vn81hLDbmA4SADVEgQAmoWtvnhgVBfivz18t694Yg8PPxA7r5vCdStq",
  "key6": "NGM5WpBj42q3Csujt2xqvvxdAnzH3wCJTtgsycDLRc5ya6JeVmDtagZNeKcfFyFcYN52HkLzTe5PgkaafThNY8B",
  "key7": "2fQbqoaRoDCqYgXpKZbQ3CkAexmughwgCcBnwiew5F1rcNGRXZwAp5tYey6ssVXmDeGMo5AAdfQebWHM5YNMcGDV",
  "key8": "42P6JLDvg7wuAjPUXcwqHFJgNwc2tZcjAQA48Fv4wHE4QhboPEqRwKmq51JuPFSN9yqi1CkgepBtb75jyMLSErEH",
  "key9": "YEmWxdmpzoHLU1B44sEgW57sZW6JGGvsYuiG7ZR9RHsYM978CzxKP5XVXMrHMQgCHapD6SAabJFvyg3teTFsLVb",
  "key10": "5xxS2afn9w4SpFHLgEHSwQ8ZCXVgr9rXXCAdQFXKi1BDsthQoKFtz6kv7ygxeCaCusbYpGeLGN1kSuzLVgggYLc8",
  "key11": "3RNkvo3DdhDPWmMh2AYw26VKL1VkrgPsdyNCVrSLNPAoUnLAaK73RhBy4thCt1bwJPJ5PvCrZ1fQTGuRDfmaEFDw",
  "key12": "ZB8moLcJH1TQtvyQFfEP5dn79BzqE8vv7jReLVYyeDux96zUWCYA1XX3Fq2Q2YSjtDmYYCpu6LN4tSfjyvnLGGx",
  "key13": "29GRisvfuCb6Bkjk6nEFCZ7V6Fn6GNKJ8EFcFhrKZRn7CFzifJnTbv3ZfSqUYfuomHdMZRaMAQdMNuF6w1ro5NR3",
  "key14": "5fMZhNTZoHGeg4L2xuyyvxxe9se2vC6K1GDJLoxiL9GXoLzpX92LRpCodoG52MaS2LuDDF2YasVpo5shFWYYVXUU",
  "key15": "9oi1PncYVeC8tinACiGZNApCcnNvHMMFUp9JPqppBX4ojUHm5kD7KoN7iSpXY8XjH34ncRuVCoAvTMaG6Chx82U",
  "key16": "5BthWLpS1ZrwdhYFjd78bDwa8LoPfLpbECP2NxpwjgS6nZrxC1KEEyLLAcg6Jv5cNRhonkHcpfEgnP6ZNg4D9jsL",
  "key17": "e53oo8uWVYzdkznwkqtFbC9QMrojnzoQ4PYXy6ZoeqDGBapJThS6bVUTs3iVByPBFB7E7H8EQVnrL4Y1He4ZP9K",
  "key18": "3Eu6ro15MNoFVgiA9JwRqi55CwJrRCaZFxmADAgJbFeFWxcJY7fFjobYSxTfigPwShTeCXJ2FHxrLXsLaqCcLt4j",
  "key19": "4WizyGdsTqNpoKriZpcXYSpsbUG4hNMKGGwC3ZZJ8KGVYbcpaqdhBLCAu8FQ7D2PTWa8qYJdTvE3Zy1Nm3o5fYZb",
  "key20": "4scYEqQtv39439mAohoLdNB379wv5qTejgodp7LsBzoqag5wxVevBiLUQLB52BiCSMj2z7AxkrDPHyJ2X1LJiofq",
  "key21": "5exdxg6nkBrtr3CEenp2FCzRYrdwYdukW9GxQ83Vzwv2XRn1zxGHCD5cx7naWJ5EbxMcBysoM5yjWTzotRr5eGTq",
  "key22": "4iP9qctmfr9R33CKJvEs35dZvLQj8qXY67xAtXE42HFugwaw1f3SVNBE6xWVQX9n8312ZsGhXGMqdTvJcWeJY9ep",
  "key23": "3GM34GnqEYq8Vib8sLwhFUtBQ3HUKUFuWzp3t75wgU8CzF6ZAJcZkgUbWhFeL5TSeev1a2zBCm6K5i6pqmimT2cc",
  "key24": "5F51jREZFqUxJRVuN782R18wXJrnCKw8TFTBEGLAK8ufRF1YS2UTesYc2dww4sXPrsyMoPaiptKN3cASCQEMhjwp",
  "key25": "EgAjCC9GRG533MKkaVk5FozoFjLSmyr6L7hkXbdxckcc71PjMskDUoGgVUaSzxsJsq61RQVu8gqghTR2ykQGwPJ",
  "key26": "55gK5LKnUR5ST6kzvzBVzEbrGDS3BULvHNyPBMQfURtwqg6RV4o3dqipTLjzudFrT1Qb3TCwBfD7QLhnXyTUXN6V",
  "key27": "2KoM268iYqXwgwCbFdQsdQpJVHjcqLqfPPfzAd5CUx1Li1hFZRQPPxxzHbs4H83zEm2uaJX8RoyAceiefsu9Htdq",
  "key28": "3Yik6PPdu56nkCXDEZkFquau88utSPCf6ViAHMZecsopUqpdeCURGPzYp1FZUMMPSr27Fc9tHXPWP4tewuzuj7p7",
  "key29": "5yScf8moroNgPaT3p7oxaMWcSTZCQuCH4hj2ySg9EswVbpRvJyTiN2XmMHHmmPdVU3RbbirkowXZYCvMKQWRpdFU",
  "key30": "4eYnn9TDFR9htUDeeWy9YP6veRy7Ksu8W1MeJVujF6kvsGXtwYWETD7s5nnPx2fBNqRvW7gr1v3HkUvuDiYRaFUK",
  "key31": "2KWsmvogo33jX9jja596eHGVCsGN5rVTxuGnNrwbYwnob79kgVZ7cyFN6FHpZhCD8iv4Kjh4HGuM3kfpaejCK1ef",
  "key32": "2UHmh4g2WHm7sevdYPEwvCxosQLFDzESjBLLYr5PgD2cDoFo19EPS2f6poPqkYPHAH2do9Qij8mP2DFg5FAnQirV",
  "key33": "4SzU5Ej531eek1j86KAhnhJogu1pyu1UHLrxu1sLD18DVoWNNv9LzR53Z3T336bshTgGMTE5gAS1UUfztGyeh3bP",
  "key34": "3z2hLVEB9XFGfA6UsntbnsQsj4iZ5kbStWuYpGif3SYxLAbeN3wzrGgxpL9SdX3ZGzWB5Ue2kG7cniyPq83zDx3p",
  "key35": "2jfFZ5D3cQUDtv3AvzzSeKkcz34B5LPjnMhSZVc6us75V3RnxXB9zX7fdgVieLSfjhTbjLC9FcCKHV6SpEZvZUwZ",
  "key36": "52S4V9F5DaP1BNas5rLbF7bYh9vvq6MU4ohEJ6iQ5oKAK1T2wyAbBAMgcS1WrSnDYZrazUCdRLZLirEM3qkLtkUx",
  "key37": "5XZwonFEQAeW6ZjtZByZLewUxgrv6r4YxEZgA4UayqNPucPwaNFVwEjJ3xZo3hVhJtH18LWDsraSTG1fnZTAeXTs",
  "key38": "4FXBovmfjsPcEpovhsKdwnn7kBcdKjsvxvChdqXh18SLDpwFCRF66ZjrLqoFEFSvsSUdrZM8Hbu48pfAisYSNGFp",
  "key39": "3p7BoForNB5H3cirxr3MGFsTPQFobve9LNy1ZZgsh8hhGxoAcs2eCac4NjbdGt32JXG8JmEgnZVcb3PHr2gGrXbz"
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
