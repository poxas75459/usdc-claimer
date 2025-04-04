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
    "5E84HkjNgk4fNqGZUVU1TaPSg3aCPdTRrc2n9zt5gGwe2bLig6qoFAkNGG2tfJPCWMZckHFLWeooFWMshEfk5Sbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M8UkB7yjuKNKrJkm345kyBKJX5aFgSvsnxjMcRC6fhPFS6D18E8W7s4eu9in6EpC9gMdp8FnVMjr9hWup3GRpJN",
  "key1": "2GK3T6UAQ3t8tqdXfdXYgmHjh9QpcJS2mLsPPP8BZEWGZpHc8ongJ4wCUy1gJD4f55QU8CFWpNexRsd9JVTLkaE4",
  "key2": "aHii7VeRabpWEvqRWBgQGqX23sobniMhuVRZGVgz3e49iD9EDL881EGSUTCH8rgGF2Zb4FGCicBQn4hf8TrdnfY",
  "key3": "3qYPSE6fa22t5G4ZoJvHtTdjoAtJQLxULyrN3un2oJ5uw3aXMqMht1LkswadqLyfJKTPcwFMFrGoRYYpy2TV4Ge5",
  "key4": "3tKokyEt8W9dK7Dd3ojCBWorKGMQap6yfdCW8Qs8fykArzCSa11edThuz5qcn9pqBFtCtCKiXjA63iJJZ8Po7Zh3",
  "key5": "5txU7KF5nae2G1oUWU8i2oghB4cz86njfNGKVmnEZZs3N58TAE99GYKzEYBvjBN7c3bgYb7xXeBx1qi893CuWyRm",
  "key6": "7zU79j4brG7iTYwsoDYtkfPpqyoQpSiQJkLBrK7PumM2DfmcaTpQeWKhsTenvQtDHYhJTBWA62uELspYccQUHNC",
  "key7": "63GFscNA1F99USovDgtxzGyBhgMbjmLFkfXq42YiXsU9mqv7q172XS3ojKXcbdfHAMgwDFh3vsEjGMhqw1ePRUkP",
  "key8": "2xoz4YnNbat6kxFExrk7intNfqikEArcXXxh9Ryr1zLS4mNnRQR1qUjrGpEEEdUJ9UrxCaUMZKTe88hdybvp6882",
  "key9": "4Mc5RyQK69e5vAAMsHrpMBgvdPbbfar8mUcvFtyqjwqsrFKAobxh8RV5uqppK5RFPiq9twt1tuWVxJastHjXujvL",
  "key10": "2yB5PHagmTmdutkb1KoRevad6D6ppo8i199t5kshBNpn1prvxumYLrVhTxtGEETWfp2STEsmwjyRLJkAVyPo9kwj",
  "key11": "5z4VHwHquTZdi4AohrAXSaX7vho912i6LnFw769SL33vzSN8bqVED1bBDW2xJ9zxPGju6Zhfuw58oKFFm3thCWFF",
  "key12": "2aU22SgifASuxxGbmGii8d449uYjfqLDJpBo2RHheHaHf7zSQcrxJZAZh3pkJik3TVPfuz4wx57de5qUzhsMtZSa",
  "key13": "3sCvxEUE9wjQan1474Lp3qi715AuFxHwp3oE8wjcXvTB9rXoof8LujsrVWhWmadw5MX9JFKRwbzzEXxEw3foRStB",
  "key14": "49zPVLsFHymBvC6mk2Kcb4YjSFCjwkn9JH3EEyKpPyVgATFPUaMwMCW2SbfQdUZSW5cFGqsmdkf5CupY6Zo6scvM",
  "key15": "3dX3bcz6Rdf6WpLGFuxotK386WxYY1XyDjqrDS9hsC8RV4LUXvYGE5xSJiEcZ6gpS1JxFYtXLxgdGGZt2nwBAr8p",
  "key16": "2nS7tPc2DSpw9F6WKLWGZvhwwbUdVAqNwknFBDswW38Pju2JEf5sRrg25Q3Gw6eTCDf76YR1ytr3f2BHAtZGUPWX",
  "key17": "4RcKxwDXiMbhpEceSSjfN7MhBP2ZGxsWFCM6qSKhNtV273f6DZtDxqXTmCkb5FqXcGakeGKEQ7xyPWBMF4qUKYzi",
  "key18": "4ocsoQ3vGFiCvnmaUQYorGr6zo7MDgqaraYWxG2EtmeqGGHVvGovx3JqpgCzdEbB8bE3LxSabhA4Dr5vwvC983EU",
  "key19": "4bjbCqbkNjNSAHUpyafs2d6zA7FpRJvczyia2kXRvpiNe9DeWmT262Cc3tYHZDVcWMGrSnW89AwTELSYR3qzhMNc",
  "key20": "kjqDGrZ9hNn66wUfWk5pVuBp59o918BPDiz45x8ueDbRECiHNyT6rh3vnrKCoKyQn1mX4VuEyhFGDkxwL9RXC3X",
  "key21": "eKctsNfrY8Y4Hnhogx8tYwu1V243q1nd3UJPErRJLkypDqH482subH3wbgS8oDaNxkXYf1EJvsLm9AeE7zJuUu6",
  "key22": "3a1FM139wUZDPPqFasBt3iwjJ7K4sdUaPd2JLW7jo3p48DbUHZw53qz2ytVNuLiZtJPi5MA9gZ4mYfNaLwptEWWK",
  "key23": "4gnE41V1D65X36tcEZfDQVk96x9Qwt61iM96yfv9Qu5Vj7Sw4Gih2bBRFmJ7MMmuyuHnyYipv6TgjEEVzGhq29QH",
  "key24": "4MCoE21WkG6f4F52KjgUahZLe616Vo226kwHAUkyfB9hwxyZXhJARYtLV23nnJDWVoQtKT4MzkXYqoifbV5iNDVp",
  "key25": "4bkeeS77vaFh4k3exb9tqdQMyUKw5YQfuEPXB7eJtcGAhvVJTCVNayRQrDciXu921aNZ7bMsg6yiSGD8Xm1tqxpT",
  "key26": "5MxNf75fk8og2ySCYS8P4ZcSUh1HJRTbw3ZBUAU3MamXEdjkhG9USUr41VkNbE11ztTYYXX6fUYibU1FRtox9tAh",
  "key27": "bqfc6vX6RbGTorHX3jbGGDZ4C8zbV6Fvci1bE4Ap1WaMtzGNGmV269XKRJ4ndrejvcsuRxMVxezZKc8CzYjJvZ7",
  "key28": "2vzjGWsqJnnbpUtKXr31i4Gwvm8KSvhw3mw8EjG5BgV1wNx6oTb7585A5AboWhkmkpkfo5w4VDzZW9uRgPunHaQF",
  "key29": "2M7AxzwS4ovf8zAdcSJ9PGkqPJ8MJPp4GR5hoQQBzFgQ1pgSBxsakGFYxfKta1BYaZiYWkHoH2ZbEGwJYoshejKX",
  "key30": "2zF44Vm5ugdKpcwTGd25ij37Vm1u13rKHxCVrrrJBXoFAmrYjUnSui9wD7vNdP83fNQZKwfdn8nWVZpbPDwNx2wb"
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
