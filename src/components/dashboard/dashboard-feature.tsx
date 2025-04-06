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
    "4y1v9Z5B8FJxrkLeaygiNWNUxorgV9Umd1wzQCmy1HE4t8J55NaGZDHtqMaDDRfJQtEmeK5B4jyG9GHs5SWDtGid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oZ2NMr7MZBwVg7Uv7AEF6rxqgjLdjZEitXQwB2ZHzNY4Bf39XN7n7rhpU5YZ4Dd7SiC5Hvpd3uVSmTKzR9jW8Ke",
  "key1": "55fnZS8jWZ9FhxVLKwFHbRV1p9NPBBaQRVQCZ5L4TRwVHp26vk3dnBRCTgcnRfvX7VsM2LewWS4ecsJKTmCD9Uhd",
  "key2": "34Pm6vDEtFeQUxY2cF7fWeFetJ4VZohAPYcbFpBrWMtmCtKXXMfDB3AKZS5W5i11eGppw9UrvDJqe4o9Zaz1Yfkk",
  "key3": "3Ze1NND2syEwQcSzEYtVtmFHxRoGNiB6qWT9eoHYJGBNW6xGuyNn8NnqnQWkMjmSTrUCruniPnps2DqNHyGjBf7E",
  "key4": "5RaruYvawpPEQQyGhUrEGk5HgUPnpk6rrNYg3LBuHDKAGJ7iTscLnvK2GvUE8Er91N8p6ihTwZpKfmBAKtmmfyLg",
  "key5": "F6NDLSLozzPdomKB61efrSQfNfHKNqgEmDpj3YToSDMxfkRKMjf2QYvh4incG8vNwXSrhaNaJjvC3bdiYDdjtB4",
  "key6": "62cuv76gABpZTuZ3f5QngSuDnyJ2npf7UzWTu4XnGASe1d12mEtWZZzjFZLMM4LwPrDfcmvRCRngMcxsDK2RLSTT",
  "key7": "4LskG5YyfQVyjD7g5qFwHMAo2HrZbBozoS67jLWZXnsmE9S4eTmcR3jHw543Ut6KJ4gupw5wpKqbTGrEw811YkzU",
  "key8": "5hEj3UHwiA2bggHKSkp2oLbLa1vdAZaFw2aRPRiDLKNqGiroWTy4aJuc5Ngd48HM18Gr8FpeZr53Wk7xzR1mH4bc",
  "key9": "izSSrMa3KtVgvzRcsGzeC2uArLjzuRrBuydqQTsCdSZnz8RhfPnDJATmBj9PoVua6S5cfKzNrYAHbcTrf9ScW5L",
  "key10": "5KGEr3H9BtaBhcsNrdwWg5ZvXopbEcrE8UwkGLm5uzTcCa4cpxfFZKPYXKeVzu1aaybub6rpv64MiHfK54sntUjr",
  "key11": "3cWrw9GRkbRqxGaqConGdw9GdwY2xbXPMWEcKsz6caU9wK1zB4pJwT6JcEPXb7Bm29sMbMNQTxfe6uZcnbsqEZqj",
  "key12": "jLHi5RVoeFE9oKCJiRJes6vP1aoj2P5YzNWJF72kqNPTLeebdfEFwvF59cm1vUaAhZNPTFBEbci9ZChbsdSU7Aa",
  "key13": "34DQNTZCgPa6dSBfuR6dN5WgXe9bhr6CRDKSx9bJTHJSmwK7gMZNpgwDYC6nB3ZtPz8yFznN78xPCnz6XS22Aart",
  "key14": "4KjREeeunD8ez2T1qs4NfA8X9w4ELG616QJnZpgyyG9fieKtwcUAiaWiFBgedcCpomNwYQ1KDHarDSYiU4AJnuBP",
  "key15": "47tmWZSephZ9mSQuDQWa2XWuB6bkBxNtrphrh2t9AsFciyig4c7kPtJN9TLhyRQuCRhSBJ1yBNKGyQuK119Dy75L",
  "key16": "Nowto6na2t7mVTCARJvTD7QceeGcFpYy4t5zFC3WeQDPUxf8M2sRm31nzsDFqbKM4VveTViW5eeRrMmkwFRqRDh",
  "key17": "TCJAVPBfsppZpFkfKQvcVuBBYSm2tXhMXkR9Avvy7KpBbsfsSiTMCHKBhS2Nq1chcqegdKtUGzFftBLt9YgWkcX",
  "key18": "qn9SodVddFHne33TFr38d5Sh2ogndfvbws4XjBRHFBXhRvfa2gzJuqL8gLGm2nfWihm2efqYpBaM2rcc6ds4fTF",
  "key19": "2Q9p7QXR32q1D464PNB3Askyk6HeWcSrJXSqp7xCdW1UPEUHR8bK9ScrcBxvAdqhirAvy9NDDVtmVyZwXeS4CkJA",
  "key20": "5nJyZ43Fgz6ubj4LqBnDQ3k9wCPFbvjoNcMBn9snuo8NVBn3k5UCXbfGKA1iE5iPbLyXKngjFjQVGyWDUVa8zazw",
  "key21": "3tUkaxKZH1zeXK64UgpsajoR5NAwzRL35JLXkaUqZ8oG1yS9T6MWWUjkpXLMa2xLJbnp63fT8JCDgxYFZTbWfXyz",
  "key22": "2Rw2V9WxU8EA8m45iJQNagB1jMFYRCY9dSRGE5qnc1Go4npjURpTRFqpaKQk2iocsCuzYhyxkkyo851r4CfW5HyQ",
  "key23": "3jCF5mqPm3gyvC8X5EVbF8qTiXkP5Bezfr3kUqXDwj9u3cSLarfRULnb9XWoV5VhEkm547UnFKYBzDc1b3hL3ssb",
  "key24": "2wyQrbKYWJ1ptPXsY1jhp5AHvmrocZKczP7SCKBuRbhA2pvKRoWmX6TdpvVGDAQt6mtaQc3BJgRp4tdaHR4jvumZ"
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
