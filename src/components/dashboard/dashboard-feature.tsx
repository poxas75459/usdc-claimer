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
    "2Xy7xk7KyE5Gd7vCcpxu2sW5JtdMqVdffeQmw1VDaJ6uWxB4vtA7QSKYorLR6Fgv9o7R4jb8aY47t72p2kqNhQmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aBoSSRJbSHPGXMZy51PrNDxiUHehj8HRUp78AEtEDX3NiiuKdAjmSpbZ3x8UeZiD65pPVecwD3KARRYdmSHKtEc",
  "key1": "HjVLgUvGx9ZopybANrmX1RsA3BYbxB2BCXTWm4oCxoZMMAPT5ZWNYAQuTiJL3SiHiCL5YrGCWM1fWs41wZdY8AU",
  "key2": "NqV2Rw4V6S8ujyLzFvUXE4YafrQ1h8zACUbV95pecoDJ4sV6sM84doemhJYNnzikh5zPssiKFw6ikPaBsucNomB",
  "key3": "3NbrUiZ9Nx14c2cH4XjYUA64vQdw5Jp6qekydS99dxGViedJiEAATvVhxffDvu9osGwU8hkYUWc5wnJGEt7f4r6z",
  "key4": "3Afn3DySdshJifvhrH5buU3GDJFK5v7tWtP6CQXpUPMmsriQiYpRE6T5arw2rG8i6K2wNGPRgFFbUhAegaPGy5CG",
  "key5": "3t2j49f6m3R7kMdjpmcP1Eta1mooXd7drpmJG9Dmj9RNRHmh3RFuboiG9gYnTyKLKUAT79uRDzG7268j2EaTADpW",
  "key6": "5zbZhbkXuygY5xUJ5HDogghTmDWWVf6PUTN3M4Q9gRHB2mw1g9smza6GzzBA8dfDyqZ51dPtcrXfHvNLc66HraSA",
  "key7": "32KPXZpEXYKvzW6w7QgYJKqwsoHB6uWVaSgkufnb8ooRDz2eHgDKp8Uyh7mFTRAjciZqCTkGq1X7sNX8bM37deEX",
  "key8": "2vfn44m64pp7WCvqshQ3nsq9Fq6L61cZWGDerfvRtfxwEDXNZzpDBbd2Mg4hqBB8F6KsuB7UxatuHUtpDjNFe6xQ",
  "key9": "5qRnMNgHWQQxNve3foZwZTitG4S9XSTh7ZYzcHGLmuAqKek1NQRnrjExegZfP9cMNNnChpjapjkjNnbywKgsrps9",
  "key10": "56jStzmGsoWNDTBqmPzDNdw1XwcxcmBth4mwXQuDSETU1NonPSfoE3p79WKeau2QZ9FimDeDGPdDivT4QqJE8rto",
  "key11": "2mG74TqbZ9nkZg8Q5fBc73Q7yCuwkDGMuvrLwta1Y7bzmWVNMampkc6tRfu8K6xbfcZQz8eJmYst6bb4EZjXCcfD",
  "key12": "4nQX5UFv5nFNwzqrXVgFCQULDUxwSC2NPDs3cf3navvmheH8Csy2r3VCBnJtqHS8htaREw2rw1dhDTWqN1ALWrs9",
  "key13": "QdBx5YEqxzxSj9zn3FC9hxDPQAEY3VnfFtvUAguaLYsf5EundEJB6xfCrpRBt7M2S7g3NmXWo3xD2RD7irbbmaL",
  "key14": "5sr5xD67zwMb7HEGknWaxwUmuxve3ZwSc6XeLy8aDy9TxH5pXqhUnzqrME44UwWcwwxYryjjwy92BfYtG243JVyf",
  "key15": "4nyPHycgcBsFBnNy9QgF6mZ4JuMruFqoZKKnuNWNw2VWwoE8TM1YLS6s9rzLiD1E2uUSYPXKZEPC7N6maT7ooZiF",
  "key16": "NXwwRFENGZYdSHacZzHgD2KnRJ1idir3rQdxf3K9WiCoDs8jF2E6ujoKpca7RVQ6rcHJ7C2n3q9b2mbhyegZKfU",
  "key17": "3NcLkhJnWGZ7H6KbEeaU41H7jZHWdgnNxSaR4dWwnyXBhVWNgMqmVaKeUKDibpnfZSym7Nb3G9QnqN3nURYMYTvN",
  "key18": "4dakNwEWBteF1pKzsVFWZtMxLDXFxj6hRAhbN4HDxDp2NJnhUg4J26N44hojszX6pJr8tDJtmehJ92cTzopKdEeP",
  "key19": "5VAEVE8TC312j6rYPddykuX2ZWQv18s1bxAFteTUHnECNmAE9pvKwc7pAr2xu4nMYmqPnihikq1THWNsVKQce6f8",
  "key20": "4huz3MY9uMicgXX96YFf26psG7hHaP68aDwGzFMAnbQGkskcnTKVHoXN8qvEpPXBy3F3uxxWp6G6bCGiMiPmHkFd",
  "key21": "2mo4kzVrJH7HqAJM8avxUfqPdEqQzzKWqxURQqMtVhk87E5Sr3p4yhNyRSSJns5F2AV6ns4z38qwMGj4p8xTTGYS",
  "key22": "4vZaLKZWnATSxKYxh1wo37xShpxtm5Zo1rpEvHFTBtcKvSXjcp3sGececEzhJ18nkTpXABX2nCAfBiRU5tDtfAHh",
  "key23": "2kZw2fRUosbfL7EHZxKCwTVSxwJoaAGKV4x21bP5XThoqiqwSvG1ZzCxg4crwkVRCnuaBssP4DyqrrTbyUbR6VfF",
  "key24": "3tpn8KbqV7MJ751HQEVCiV2XPE325Bzra3E8DRRniuYWS22vU1bTCgJUuA4boZPNmR4hJyygr1WpMtWxB7nmyLEy",
  "key25": "3tZAUoU1nvUdx6kqazXEzasUF7JnuyXA1rHyP4MS8PcPyD6AzKqDDhdH1LnypoF4Y4c5vSs6mrWsw168wwAAKJei",
  "key26": "2yQGSPEakbeZKWwQeZJgVSRQi5nzr4BRFwfrDKVG7iNiVMRRnN41eTwkjJDGf2yXTjt9oXtABqR9NCygEfbFVJZ3",
  "key27": "62XsUnN83gNa1bidGjvUwXCkpN9DywZZyi1z1ad9fTt7S3HzndrGT27J9qTZcjSBbtNqfFJogtZqTULS4TcURiNn",
  "key28": "5cebKQHhQEcN1WatEuG4z6vQpHiC48M24CWs7orZL5VgAmXx5nt1d4nUh2RytLnAhxXS8PTDyvzJPXKxY9R4ZvKC",
  "key29": "2dAXgdeTuDbYGjzhemuyfDqhyYfabDGbmGYiMBP9b4jmLgj4GgDPCu6rNT1yRUScyko8K2uqrqrPZWqrZQPeUhXj",
  "key30": "TTRw6K4BPe63qKQHSCNvViNftTJicaXXuVUu2GHEBud5BPyamav2AkL3shqgdpkNEFieyRifLKPvpUiNRnib31S",
  "key31": "kZaDQfsZazZRt2AgGCSjUQsUCA81BoULEHAyhE5wLSqTU7n4Uny4hm3DzhywDAGqVQDsgycAojYdsLQ4oFmTk71",
  "key32": "21sCy4kPHEJogHUi49ZLwZ93QHSLWieAHQpf5kV3YHrEWyF1vg9QkDDihZKnjpRTqo6ELWCKd4KxeP2Rxppe1TKV",
  "key33": "2KQjkDdosRr4n1adVC1MXNK2npkF4sh61uPgbngaZMTdezg2j8nzFaNGt58SS5gYaihfMfmaq2FxsNPxhZkAYG7o",
  "key34": "2co2oGHfzoDckbJCqbNrdj3hU9z1ZMGEMBjx84Q5zsk2a4BSrnVdrETBtft1uCCcYxnfCv8L2pdXL2yjBVbLqmvJ",
  "key35": "3715AdKir93UD51B4dUe4cL5aqies4bDLaEBBcMk5kA2DZL6uFjtkgL3LHGc4pkbFogXAuN9NPCdzWpEjFakWvM5",
  "key36": "3PxSfRscdeBKCYZ7L3XWE6Ev9yFCk41xCEjqh6PmtkqfyyyQsFrwkV5bGrmCAtgTWqieCm8DrPQYABnm49erpWSt",
  "key37": "aTr1TCPKvss4H4sWYd1WKkMCkoC9t8pF3SN7Mw7XWrMajZtyaBCR5b5FVP2uMHJYDJ168PEWnU8Phg9n73CsY1S",
  "key38": "3mxSdReyuVEWYLPyZiBZ4jbBo9JPjTySrHAXAZou9wyVgdFPzV1dvdrAWVsJ13Kx8p6xW4XrG6fP94FYBM1Xe3N5",
  "key39": "4tNeAEgyvqpzvAkJCnYptHzYXMiNcXNx2FgS3GQPGuCVrX3XiaqL5vnCjhM3rLyqszoExXYWL2viErTTzKGKCSng",
  "key40": "vo5zRJ9S9s1kJ1vgbxjFiYZydUmpeZR4vVLjs2VWtW2MosyN4YnfCtzfZC4Jyyme9ZrsTdq9ipEbdG5THtfvVke",
  "key41": "wxZewH6qecY3Gd4ipf9o5bbsQ2FhRSXvZEQw2fnrqZQKRAzGvAQE1XJhTjrjK4HyJ5QuCyCVufcnAX1F9JkN7o1",
  "key42": "2emSQh8papveqdCWsq4NdneiSXpVpYsqasQmcPM5fj2PwFZNDUMhxhkEuPRoCSM7ukBNRYG3M9wyQF1bFdNYDGyd",
  "key43": "4o2xwDNMpAh6xLpdb9zXvRJh3b7SmJTX4YCuyPYRfCXRqbW8CzvrZ1FH5bESbG1Kng8hS63Z9kPP1DeFPBuMd7uC",
  "key44": "4ouDXCMnDRLjRbkuBmQHbK6x1US1X6GAqoWuGfczyGTZgEdLAjp9CDqRt9t4M9PvWXgUEKUow7PLdaabv31FjtmZ"
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
