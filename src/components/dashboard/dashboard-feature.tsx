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
    "2VsCTAazmkBPo1tJcFi5ZV4cwhnRUztdW56BaHLFK6st6cppX2E2dZ7eRSaQf2TEyPzHhMt4yWo8jm7m91h7ixYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xxm4nCkZdcvEtSjk6Zt6LYQ2iyy49ZiiJWBSTPwPw7uGrVHxGya9DGzFdhHW7HmFcWXZL1uiCa9VNRUqS6KoJtF",
  "key1": "3cHs2i9LBXvycAh8oiMC2JVzRBn7MjWnJSJuCXpZwKXtDMvfaoozf5PYqjwZRkkhEccziHVmy1SmWzKnxXwmQcNj",
  "key2": "JP4r46bhW8UGFWCZGafW6ptkGWKyq14Q5fHBVWTVezFHFW6QLtpHpERmFJnRVUtiPfyJmgUqcJ6D1h2nsM5P5op",
  "key3": "2y12udihQSFU2GXtkA5dRGUFW3A8Arq7ZwC1urjXPZXZ2tRht4xvmYQ2M8SsL898s4y6M3RNnXTFzEj6svcnmbEh",
  "key4": "5oh4zPf2TPGGdavYmuSmVRC4C9U5cFzdKrBEUzvTK9GtxQ9t9tvLgPwUvijKmimTinPKi6h1qoL9wZpJdFP83B7i",
  "key5": "ViJTDumMr5YVzcsiz9ah65tn7PqBQLY14nAGnfJCc9jp5kmUBR65PZMSTWPJYxhL4P5haVFeuVGTABuRnVPbCEW",
  "key6": "31vXbzc2sRURPfsus1oVDrNV5AQqYuHjhVbVepKRz53JhrkjAkTgLkxoLbg3SVPNTsfU682uEMCP8Lv63oSKq9FK",
  "key7": "5RhAPwbQjCLg5ZP9qAA4jz8YP9AtR7iPC3ekGFfjnoSVTmDFFsSEd9vsK2ZPaf7JZ7QSFCSXtUFDQxrrfa5A1zs",
  "key8": "3pFW6rCgjnhXLDiBEMn2AjMgtiWgDLT3BnBXnCWesw2JyCzT8CQLHYRfcShLWnjR7DcegsYaEFfaZkS8iSuZbdfy",
  "key9": "SEDW6rbtRZw1B4362qt3PqVLLm2Q2rcvAwUfbZdizoYXsxHhyqPFn2XBhcv7asC8RBBkGmX8tPeJDVrFbnm8pCP",
  "key10": "2czjY9bgpozxnyRMunyYEwC7s6HU8YNcZeGT8Zrsu2uM1nr3kAbTLTedgUueuAxAxYgVgQspnbGsCr5psDzGBHt3",
  "key11": "4rJUjTj5YueGTVtWTDQyws5EAwk6JJBWSYykdR8jF2os8SR4775Ga7C86KoVFePYeFp5dgzMsYqmgVexvDbNdgqk",
  "key12": "42fmd8bqDh3hYZWt2K3hX91Y7Gp9ZDsJtvdaCGMjwfxsL5v8F6ZwcQC9p8VVn5i61Q7jQcwGd9waDpktDc6HAU18",
  "key13": "4TcsSgxp1TBuPXMz5TbAE8HNoSFSryUftF2sMesJBFRV7g3PmVDyUzSEP2qf5B6zrrMe1NaGKh6NCQaEhVS2SZJH",
  "key14": "41UnP5bDkFKGNDRBCNX4UhGVVNPZsdq7pGWfPHcVk6yNDoeCB9XgysaukDcoez1Vi3PdLbkfXRsdPCVXKgrEc3vU",
  "key15": "5qxhXrFNAe8vMeTu4td2buZf2p1RnaBwj2d2JVRaNasET9ysYsmKuRQpom414fQ37c32SQ3UFP1tRwfLGUK1ypgi",
  "key16": "5eiEtAe7w2kp4zC4gAkSUNJWSDSgkX18efbQURUuWGKfAbvBz54QHMuJ9339zHmdK5J6s8a3kQwhDrNKno3975fe",
  "key17": "2eqD9vt3W7Q3WKZuuSdrY1DQ4HMCZZ1GQrz6YneZ1hvzDShpYYtFUDr51Auy19qFGjkwkoPaEXjUfJ9AGuRgTxvG",
  "key18": "4RJaiFxMJP84XV6y1ZpYoErM5RMyVN31Zj8hyL8teoZyMm4Sm5UwYL7NyyT6WsE3n3Pq9G1AnbmnkKTjVy17k94d",
  "key19": "4F8fqHfm6rBdMbEHNsDaNDqQk5oHYRURgiJxKAkCfMw9iebzURLNQTRM8ZH2xqkroJ1UYcV8AKzp4GZmu5pnNbek",
  "key20": "4SMwjfZQxK8RAn9k6vX7BcSrqfUja7L2mPEiNQ6M2ff4MFVu2fKPbcgYh5pZxBZRLnvqabHujeKutJJHDiaXPFgb",
  "key21": "2CtGXyuWF72x1MLzVvpMuPkRgsjKuYZVRN9VR4Mor55YqjqY4ACUnBJF7QxbPWVuigwm1t1mkqbJeFQhF6Z5Ujm3",
  "key22": "3aUf9UwJakxC5SSu6okhv97kN6GgxGBdm6LVHynXsLXjp6v1Y3a38r9e3GYGZcv3KEGus2crgiBcP4BYDgjo65gZ",
  "key23": "4b4KTtm2xE79ixwkBTXHVHu42Yi59XF7k5RBKtT3cHuat4KMXKiyytFrEenVqB6VVX2z5TXkgfpFGykhwMdetnap",
  "key24": "3X1N4eRRLyKL3CobCythRCrPBazQeFnWp55EdfiYNqoftSvjLFhah2wSJ1iSx9ic4uRSPbBQ6BzMUNtZVAjSdeDY",
  "key25": "TAB31HM265is1VdeWKB8BQdpXAdmFV9QtWshH1WdwvCDDywKCaJVdenn8FEsg73y9gLWrF6gnYnuN7THzBKjQbQ",
  "key26": "2rkzo9y7K2sp6tb4ZoVHWU5mdwsRfHCihSzCFwwHJXQd5vz6fDUFT4i3xK7pmtMFiRoRNb4p75ysnPUyb9qRsmpx",
  "key27": "MkpquwP7nCFrs7UY8EsTdr4sETj7bH2hFG9wC6adKyzyxzGCYGtCbbK8Fn1g55kqmUbGHMmXsayVaCEzgwnAiby",
  "key28": "5ZTWJpGRV8f4wz37J3kAkyJCzVLc39mkGo4tYyswE6B2sx4DaZ6kumGe5xrj7waqXLprHcCbxgKcZD1DxETjPML5",
  "key29": "tEnJpLigdcx1rDbWKNPJ6hgaDPUCymkjLczZRG4tuWUV5weGxLypoRZriYDNno3aNvotVK17XL1sCFhRAiBHHnz"
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
