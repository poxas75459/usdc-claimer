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
    "39QJpKedwiKj7ojLhMBrTMDHz4NzQJdhoefk3UGK3fQs3prjfaXxi3uLd9BYgCarTXDoyAQD7HSPM6jmph535MMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YAGqNoPWYXo1VcsijfTt17USiEoQoMnjZHaU64KERagCP1qR3YREAWiwyZDLfTMESdes8qZPtQTDGE6tCWLrZ1Z",
  "key1": "ZLzzMK8DmMKJCEKav2hhLehQ3XC6dnHAvKbUQ6GyjH7dNztagZXedjy9fFK5mrqrkfpr3pNAYnu7K1wagQzsw4d",
  "key2": "2XHouSsaKHR8gDK3Bb8ms3PjAeUxRB7p2PTa387vWWe2E8rQpREpeWx1XwQUK3duUJnUhkT2YbXdgxUnHG9FqUug",
  "key3": "3nhmhrSACXGNRm69GuJkiMHr9PwJRwxWrMG2JqvT687oLvH7SX2UEdRghKBvH4yzdP6QKo4vp7RQGChsqic2EnJ3",
  "key4": "4yMENDBfMWKSPREjrxhUmGas2SSZJdR8mFexA55mCTXW24x3qHSFNtyjcfLHuqJH2u4uQ3hfd9kjNCvRq835ERjt",
  "key5": "kC2nmGjx4e1FSd5SCKieurUey3hXwpzLRfwC745xuedUtLwQrB4uK6kVKHq83xhG5U9cmydnyVsbosaK52Fqsz3",
  "key6": "wpPjC2PYys35jyrYLhcd7a3S8jqc24fBoz3VaWNLMKbMe9tSUkbJ4X36KKKT4to314bdCbFUBHDBgrTZ2W5QqUJ",
  "key7": "5nnSEXVAXrhuCDGzv3CZ3juknNfUBjJdQA7duXusSAG9QnbaKDUmKAbRAbWKVTEZo2fsvi8SgogBfk7CH3JXrDyX",
  "key8": "3ECkqNoQTfau97hHwAxLdvGXVBfu72N8HPf2ArVb6dXN7xwpTAXTYGLEbhZUiN7oB8C9Xhk2KaidoHDzAzN9ehP5",
  "key9": "2JnYbaKTUErxTXRBZvtZfFHsHYx2HBN8c3uKNGGf3pkCwhUVviPkatpbFmqTp42vKiFwZsr9npWKQmURosEzrbf1",
  "key10": "oJG7kz8AsUqu1X64iEX4HttFhNQLfP6DGDVbi7MqQZ6XLvwiEQZMbjsBQpoSEa9iTiPLCijTBFM25ByCh8tYHBw",
  "key11": "nnbq7vsTHMTGfBWycPMo5eDzYcHq6e84EvBRLGrnb6uDshMcaNMxhtwUNzSpJ6XLSwD8FXhYgX5y7fB7pubrGv3",
  "key12": "4sj394drgtd4uuauGaGjxxwgC3rDoRAhhByq5gzczr2ViUT8Dmg3E2TCGhbFnRgX6PdHcGxWjDWpByoUtFna3bsG",
  "key13": "2qMa8tSHhMWbxrXqNzUyAMYLPkqBykM72k7oD2EYgpeXtTzn4cLDziouWU4ocNXNwvXdUyxx1DNiykBEoPsveFiS",
  "key14": "5ewGHZtyhgwCHAsFwmwR6b9UgsFPdLpZKBphfRbTxQRmhRbvcvVgkRupmYNPpoL3sFmj9KMqT7BbpUy61Ehmj4hf",
  "key15": "4n6QSN5KXAsgzLFe5Z5NAih3JTnP3UfEaSoTu2V3fzM58Xy5akN3qk7RCGaqM3SYC1D1rbqRBr1BKGqdQZTbkpmf",
  "key16": "Bk2XKnRPgGJnB2yJtAcC9Fo1p4jsMted5BdmwTXAG4Bf1WjCEXbXeETihAFST3sQ8DjX9XvudnQdF2YU5K7gCcQ",
  "key17": "2a43mWL9kmbGSpMVfzHvHRsA4Md2w3bB6Lk6jSzixspXmjKBQA1rHSacT1NF8nea3sD1qboxC6QnvSG3mqqkSikQ",
  "key18": "2LLxpGzWj7jf54FMv5e7C6AR1ixJJansHgsUDbHZfYuMLnG84H6e36Jen5FfqGScvHMpEPfvZtt54TMabARXDTWj",
  "key19": "bAsMz2j3DG9ZZAWC2B3Nfx1YhNcXMiYPaF5epR62aSQftj28VLYPeXAboaDrfezXneqAvpyfAZ4LbxdxdkQLPK3",
  "key20": "28TfhRx7Ytb5EZTnSLDAWMBp2s7i71FntmCrUGWsAAyXY4jVSPGYW2MAJzbyRgoYnXH2wvvE1SSAWh8HPsyRLH8w",
  "key21": "5GaxiGqhV57eYYTQyTDLguFUcb1pEmk5tAHmiT6XicNFGa8tbQqTGpmc3F7byiT1khXeofaCiEf3ZBpWGkxLFtHa",
  "key22": "gvuLKC1sgapduSrmdoXjPA1UAqkec4hiQiib8omgbKZcLvb8zxNCXvfnpKqS2CoRugohBnT7zouZD7ptsLngQRY",
  "key23": "2ejG1cKH65WVbdiBTguMaPyHaTZFjR9Sogb45z3yPP33sFSMrdr1B177ZBPWsKzEYAtTunhiiYwVfYkxFZK76WAS",
  "key24": "4yBrghKjpyY25pGZCtU95q4dHFYQ6ZesdN8F54vckftACxh5GCnnUk1j8MU1rLqKnbYknH3UEXaTJkwmNCumvmJH",
  "key25": "pkBWtzaJbwKtpkhWJdedxcLSGtgMxYBAvBS2Xxdpdetap1Q4wbKNZ4Q2HY8CCwqHXCBy7Wk3CRqvuwyPPURvmZs",
  "key26": "5WvCmtUj4gXBKj7xyZQTkGQikaV5S51pVsnKgobAHiEN92J95xTc8DKunCFF8TpNyZi8Rxcci3yJPqx9ZbzzAWn9",
  "key27": "4ATFCT2xbvqeXZjMZSVyQUJZiUacrUPk1fjt9JXmyVprY9emHwaHxpqunwihrL45tM92g6zmcDyrV879a1bPra7R",
  "key28": "3JswtAszhMy9k6J3w9U4mNkwh47YzPMTsrKX5hdCdbwNs95HUMwXJjJn3dTnLfogg2vUKs1ffrnm9XSxHdgCGKTj"
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
