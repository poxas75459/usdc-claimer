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
    "2NcNuGSgUSDZZ1N9uEfuDw3TFZk6g9nVZMxUqbmbNrfJfm6E5e7eyKZQY3ydJcRkE5xVjpdzV22untQqFrFWP8pL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gDwfVWqWmqkUtdzgCCv6k5A3vqgZFEK26Lhx8GAgQ6jg5PPT1KTgWHNnmfwLwYqj4vR3tggcQgKY1kAA8maQZGK",
  "key1": "5irh9C6LfPDgPsnGM3ifL4Sadi28QANzThTVAdUqwzBWrEMfyLNsZ5yv3aU7HkXPBJiqhVBEc3iRVERJwsGMBF1p",
  "key2": "2sZ6uFqdn65cu3fwu2vANZSTxYmnMnfJ1WKQFjFjB8CRYBwuWJ95aMXQfGDbwoj1zrvFa5u9peKaSUA3twUWyvoQ",
  "key3": "32KNGDN2q6KpV9wn7s4xPYvnfrttA3FXJzyGTJ4gDQEvQHrpXLZTbPP1VdDcYSchj7EkrVug5LvyhzzSs4PUKz9g",
  "key4": "RqBxD8KkE5Pqa5iJX3dCv9DvidK9SW7hAxKjdoy2ksaGif3xDahRhn4EidNdwEb4hWF6XkzXd67zh9ketGe4vNZ",
  "key5": "iSSx67GpMH4BThSF6KbKJuBJi5Hb5cSCKvNQDHbh3u2NsnXiPCyGq4QUHPAGgmnEMB3dHEd41aSZrLRiS6RWkCa",
  "key6": "2ScP4ym5ZnBzuLxxgvoPEtFTttjr9TeLBoffuEGVH6ae7yMCbuTLD3winQ2ntTraLesTcgVXCFrPcAcQgaKytWzx",
  "key7": "AwX5ketF3wBCud6uLE48E92Khos3f9Vud945L1Mq3JDsMFd5LjR8Cu72sQQG2kMYMYyYAb5oJDUEGZMCZoKgejv",
  "key8": "4axntPjMNDcMZgMxhYhJmPAxWUWoaUz9c6bgE9FDt7ZEp163j2osYiiD9gaKUqXBw135iLd62gAmyihyVFfBkGhL",
  "key9": "2jRo9dGaAaC18CZZWz1agnmXWSzGNdYAbcxweVrRsCfmRbVzqTadNMpQh1YJ5d3F4vFHRwx9muPtU6LBR95CG3U4",
  "key10": "5eTKkidgacyR2ehvB6ZiGUC5bnN9Mp9md5o9QUZbunMfUGgAPqzxQecLmKf5xZGBCv6e5QqCma81vbMHPafDZm2r",
  "key11": "3YFAvxb6BcSAb2KFfRr1Rt7DwrEgSnZqk3ScAyoXkvPk19nEZLLedihU7M2z6YtMbur4yrqxSp3HfKieejeKvuSg",
  "key12": "4g74QrvLjsCQR3KP7cuAm3JEmdroSxfsNDT9q5tKNPpWBsnRhpZLocgY6AyX5pPrrDfFkm56NMCkxwvb2TDoGhnK",
  "key13": "35wxU2U57cFrV7JdeXJddEC9g8qTciu6dLFFvBvrkR9ag2ff8nojBVdYU4DS8G5tKP1RgbucRBbw74m4XgsnKFHU",
  "key14": "52QpbXWjo9kvineGmqNLgrQZchqsLuedM2RwHvJm1xUUFLG6gLeBfNwfoSqARcwKNGYah4XPq8quRT7PDb9T5V7F",
  "key15": "4hYUAhuRPgZicLZKRHvo1Hw1u2kzPrmGWE9SwFj5wY5bHZYMQtRFCxPfsrJVASNSKbWgGdjxYFCKi4dxz6zJLjW2",
  "key16": "2NcrTJk9Nr478yqeMugKySc8aURWsEPE9CZqDeXgmrrhKKi56XoNqLF3nJ5g9Nh1aFJ7QSxB6x9B2EpXRr6w9Ra9",
  "key17": "5Lb79YEBcTJaoG1mtcKbFiPB3sHXXVYu3y91qRrUfubLtR1UBdDJMVHiWRx39qac8U72gMRZS3cH3eZXgFTWho4M",
  "key18": "558DToP5ZwJwggMHujnnQVUDioH89i3a9nzumbg7HNg63rci8RA4LEVtBNdPRGatvH6Ly81LwVydRUFr2cKyKf4w",
  "key19": "5B8idvJjmww4JAX4H9gGW72K2Ekb9QzPZ4H1hZgRPeB5ircF9wSV4itsqD4tC79hymmFnS37gyNVv9qJwUEq1iHR",
  "key20": "2tdqjHLPziJVEAMdZhogULafSqdRWGB1QGHX1VtoAZ8PCBq8vT6QjyKj8HnkHBRoY8Spq9cZCACcsEenySK9SfCT",
  "key21": "688wrSzmVshdeHVvMGz5UHSw1vCQJDfjUpKbv14DzxeHDM4ePkm1G8GypNNgGqJ8NRynUQVWsNCcQDvJdS5YuYu",
  "key22": "3JMMMj8YNwfZYwacgVppiYF2cya89M7eaBJAHFERhswFNHRvx89HWq5YupMTDAtUdkYogxhswdxDi7MkPmU4B22D",
  "key23": "4oxPig4QLDo7ME8qRPFFiWGaH78QbC6cPE3pZWsTzW2kAPX5jwfdgWSFbBTu1zWd3WwMYfo6HCdJvB6GX8AKSkMx",
  "key24": "44jqXrymDx8dWxC1wSjqAcHfQNCFei26v99cPFKviEEyJsAEjg2r1cDUkM9A8gDeqYirsbKouJnPBqBYw4Qi5pu6",
  "key25": "qd9WyfF4LyqykwwzEtU1Ng6Ds8XNfD9dPaYUSt3xU5R4rtP8q5kpnHaVWg6uoPD8gHCbztz3FjeeCwKAs3yPYZZ",
  "key26": "5kdXyjz9bNDzPBYf9t9zuqPu2b8iWd2tda9CJff8UhnpVaj4ffBHvxaTc4p3Pt4T5s1wLnHBpkGQCixDJnUEYwMf",
  "key27": "iVLFgQeRkkUzRJ2C5sLPdLn3iY7xv8Vubc4TscQa4mCZTjVa87XGKwtS8mymRHLVYUjZuafeJ1dRqvuk5pSF1j5",
  "key28": "5Jpp2hh7aPArDAQ76SDpFmv3CFqFq4JjHAwYn5pPQ4K6gedce4WUwW1LScaH33uFemeg9wgoinqY9m942mLuELKp",
  "key29": "34fFzjP6fTMfFXzHujvg4o35EyDNEHS7T2DSyJeZwYr1LfhL7TZDgPgGGzvTq7j7jgM9hDWPNzSPR6w9duKNTKR4",
  "key30": "4fCRJHpTS4Zrgde6d6GGc3DAhhaibhBBz3wnpiA9fLWFujexTU8z1hmcexS1qCrn9jkfCJBt7mWRYVxTdoTNFzZ7"
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
