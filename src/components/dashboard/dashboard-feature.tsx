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
    "3XKtfQThQMtAqoKkDHXgLXFUi5L7jT38L7iUZU5hW8c7B8qxwa1WbKgAu7kWFzh4nLbGKMauXjV9owYEGiL3VVzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZeK9DKe2WguRkr4QgpnXje8YEZHTfkDXwCBswHGoXXKj3j2gxWwSHZ2UrjUjp1wLDbZvAPeXwkc5EsqYUq7WirY",
  "key1": "5WXibxRfEDn8xwH5tzhuV8EHwH1KQnmPD7EBPrHJ1e8jnXFM9RBZCmCeWTe2wJm69GM9a1WxYnmWqMkbbb4Y4hUY",
  "key2": "UvYW86Civ8DgMzpqjmxhignz7uXPDkHmwy7xckyZ5Yh3751qCnPXW2zVENKeDZqhHCSuJB9MiJdi1vt9kgU4wUr",
  "key3": "4Kmo68NwC24GZaKC2EknBWPfMyBvhGCNH4YeRu1m545ZGaBL1bqdi6bvxTq2Kfwkaz339D3dDR4W7gLDmuPMoJWp",
  "key4": "5g1Mh8dPrUyNeYZqjvsRiMJ5XYSJKQUK6KwFKDZqCzbZQBhBcwFLHDpKhtgMdqNkFXLFiBULTB72jo7orgR3s8ob",
  "key5": "37QX1hNBBVNZdJLC31NycDXhTE9b4FoEsG11uCRip2tLVPXsG6XTqJ7xceNDGpMPVySNtbaiUQewTK42GSSPf1zW",
  "key6": "4WAqTKv4BrxyxhdfbfBPwnYDCuqkiRBLWRDShhsa1NsBBuFL1uVuduKWTVBnkk3yVVJVxkVYnhmZvicZFQDJAcrD",
  "key7": "48tk1gZStuTQSMzEsM8bnXVtPTT2ApqAJAcZUBWnh6VYAeqZPJwypXuAzxFuEBqGSTNrFAEY9FDeSJV5N9AZDm99",
  "key8": "5QHkQjuSJnLBKrVtTbWvo65c6ZnUfUKR3rGHBDxBCZAWYiWYowY7Vg18uCBWMLW81ap1bVjur8p48CK8Kw2sDEpq",
  "key9": "3iqmidPkLwwPz76RvMfLbzJ6oCTfqZiy8fFrAUadgsmuB3XYxaHDDdoW7AdYaRtavxBPogp9hKBrxCa4mjdMgE2c",
  "key10": "wRXpicJoLVaxdWX9fVpAzDupEtrc7rWWPhNRLVyeDcxbFCCLD4cPmXJv17JQDdeKncGTbX7sFCeyGkCW4V7dppY",
  "key11": "PX2DW4ECdN7pZAmNw8p2uSznsMUowHVzLiUjbigp5qW1i4FWsnMYWECGTKP5ZY4gDSs2MatNxps9Nk6myaaJqCa",
  "key12": "54epHFgvaygaVKEdvfpmAJ8g5gcLsp1D5Bp8GyQujLULkTz9sh33B5PcbxzEaxwzomCAp3qVLFfTxvNfqZgf89XB",
  "key13": "4DZd1PjM8RxmQQYXQ58Frp41okFRduSXqFDG7UnpZcYvHRZZ75AVkS1UNZLZ8GdPoUwrJMFNxnXMGNjNq23tgAKf",
  "key14": "eWdqiSUXfcwGzftSP8bhNqMtNnfDi3CC9JDLmkEDfdwuyZFSWWxYb33SeVQmfKKnZX22o4RwqNKGnKJbcu4HUbC",
  "key15": "59zjCspMyZ3siNHFDCt9Uc3AuutmprC77YoAy22ygg63fCL2ygrf9DTgTZc4kEyQn9mG8Prrym5hj9Epau7Dfp11",
  "key16": "2yE2o2zFxGsu4E4xXm6hvyAnrxZvWsi1uEhKqRVdaqEnZwdC6mRy2YsRh6WhJMniEvWENthwZ6F7yXwBVMK1Z4DW",
  "key17": "2BZfKS3MYe6GCrze59NqyvSw998PX8kiWojhWEDYBbMQ3u16RgmvJYibjoeTYJagocjhMqjfdxXwpstgMzhgkShk",
  "key18": "r8iaq98C3X4j8GRzpUZBKDChSjVZZCDxBgHBEQawB1oZJ4MTrKBDpjYcSXH68V5nJEzsHgGRGZ4CY4uJ6Fcvvfd",
  "key19": "4vPkVcAcKujm1NSzG2UiF89R3JhqZC5Zv63A89U5nLzizpak9RN8EpfW3Wa2wwhfSNT8bisEoNSm6XcWH1M2353T",
  "key20": "5iCGgE2Zbi5Uhisg1aAY8BnbFwszc2PsxWg4vYRm4XtToQAMW1Dsiqz5rSyaViSuH6WdgshmqbEKNGf93tT954jL",
  "key21": "3dem1HDViEDaHsHcxM6EwKLK1k4WveRCFmEJG3SocEVWJtQ6pS5rHTf8cXwakd9mh1wGYPGGUBcDabaiWhMRXHPj",
  "key22": "5cpFitXwJ7LV1CaqWZAwWnaZsSvtcYAYc33SLsWC2T7TNuR4SMBfU1ohT8Rr4T4JsUrgePmX2yvFaG5JMkjge9Wm",
  "key23": "2PRCLxozjLRLW3wDpCMVUatReRD7crvmA77CXNCS1RHVw8nMH2gZVdDe66afgKYzkFVtNssUudVu1f8BtXDKDRbk",
  "key24": "54VKjNzHbuG3NBFz8C8fYPBsEBrryfXwxDFPEDtPJ9MpBgDqgp6G1PoyVC55GobN4FcPrsj3Wv1oqYYKzN2NY53o",
  "key25": "4RV9sQbLuCW5NUwYS1JyTY4EQbZTjtnKMR9ChgSzLCSLdKXSRMd4WyGxnCsAK4dNNrw6sQWfBP6P74DZjPd7iW4"
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
