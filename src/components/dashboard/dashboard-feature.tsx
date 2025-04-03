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
    "3hPxgdywxWEDytPPbvrzFefBZ2wshwJxWCFjH2hiuf5VQ6SqVZp5s9hrfc2uqjqhq2yLVrSSvfBp5KwJ4iAFU5PJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xarm5RHM9GN85khhyy2GUKPu8F6NQ1JNNbq3om2sQoVPiMC27zfB7KcxpGhpzr9DbVudK5c2efGjjufHf2u3Nby",
  "key1": "bx1Hm4BYqeZ6qoccoYRQ4KXQo1AR7tGTrWG5b29vsfZfVqpBGQ5s7HFwSvZEtsejTsc8a466rfCnn2dcKAwz83b",
  "key2": "4mY5Z7VXiMXd6NoijXF7gEscGtRQe5vqVjUbTriRto7vZ9CKKUXdrJkNzLebXmLMwbohdcyLLtHTengQMKD8Eqbk",
  "key3": "4cpw1TCsqQKpMYj6k71oWGu6wGoqyBaVKoqEL8NDV7ZmAjoWy52QAWePKW3U466ZRdAs1M3ZqBUEpbeVuZpgVDWH",
  "key4": "4EnJMbpDGtAcNAeFPReb4M8FmpWjCx1k8xHvj12u4PHRWT9gmTRmbmapTMDTBGSfGg12E1DkNb4eYZez28WHdpJr",
  "key5": "5myJNr7MFMFkcT17dQVZqoDvqHqQCMHPCwJ5oHdDeHRu9JoyA36KgH4K2obTiXbdKWbpc24fDF9PD1Q4CUPdH3d8",
  "key6": "Mo1x3GA4jUirXi3TUDbMf6NpRryVghvAayNKXUz6VCGVC5v2dPVsqQY6L7hGSBnbkfEHc845gRn9EzmhtyUrDUL",
  "key7": "3i71xqpEZ4B5jDT98vuuU9m9HHzDgrTX73jSqyJp8oiE1BLLQzaR692YwLGt6vsMjBt7tBYPNwmnuwXdpcrpSqo5",
  "key8": "3H61Kg5YekiDcncNqVFPA66HTuTQCxL9xizeCPEwq5gCX5Rm5YCNmsnzzrK8PyXNgi2qkpZHEHgHRXRG77urQSMF",
  "key9": "2brZVs95mwGGL3JMh3LVvWnFmWVvdFKtzPx9MYAtzVxcd9ZLVGjb2PUDppE8AHwzMoXYMedUz4tRHzkQhC7bnc8z",
  "key10": "5wPrTUDj2uE5ixsyYfEmyLJJUPESiHyb1uJR5AziuZNUuV1eia2bkNPXEmw2YrePACZac9bqmi93ohaiaUQUrq55",
  "key11": "2EzR3jv1Bq5qD5eXYoNJcaMgB5UkLjoNu7CY78KRGDi2Jw63CVx4dCu1jWuEDNm8QfCp8uYwYXKpqsxRpQA76riq",
  "key12": "2E7vgUC4J7EhFzbLLEPNQVZ5jnf7XStbeLtfyfkZsP4CTPKqXr46J8sSinbAT4TKCTT92yc1DNUS9mvUQ89V8RNg",
  "key13": "5WpPUkq8RSzAoMCafFDEeskmwNHKj2MrDpgCKDy5D2EHdGvo9oYbdcg8vSkanAExuFjcBoYwSy1PSfCH93krg4cQ",
  "key14": "3gZBSFv2Wj8SMGsnmVSeaSnizK4xTm6VG5XFLPoY3Z7LBmq5KXDBqFcBWNDWrYzsJYb8YmDoRUZoJgF5HZMd7dnx",
  "key15": "FgdxP9YpGUkidnKQvkpcqaMNN4jRUFZeLCMDjrGJ24ZPbAwBXnM7GyiRpAbB2guRNVoem6Fgh5xSuf38x8C58oY",
  "key16": "35HvSMc8T4gw7jbD9HZpbk2D5gTRYv3HaHgPJtA6NpQSh5gfp9GmCLKTJw8BtSG6xctSVSkisjkHbjnFX6FxXWqy",
  "key17": "CAVNPUF21169gsrg1ZTjDSBQV7ycMr584DxwCK7BW4sVToyS8mcsz8C158sw6DKEq9KLypwMkFv2Do4QdWEkA2D",
  "key18": "2NhN8GksssDiBi4DcyZbxgWhiVkLHKNz4iud5Gqh6mEwr1sC8fHaioZyPiAra5a2cQ7uv9n3FFQKYT9LDcddMgoQ",
  "key19": "4f5MaD7jTdhvhNGAFuYSv5YXQJpmYMFmhWnVsWwNG7xTZWcBgUMTYq8pncDmG8cANSMZiZAfAtEpR1MRy7KfTxEJ",
  "key20": "2Jm8VGEnfdunU8U8uRUyDXCszzejYMnQ8jJgiNYttc4YoLszUg3Vo6cCVKXg9ZD3utSYNJ6HpXLckxVtrJLa78Vc",
  "key21": "iCHPv4HFcHv8U9v9ChJyrEfTr3xH8SHBbTbUszpkdTzdjqv2BydLDJ2wdAi8VauNS73ehxJVSV3jmLhMNXnt6bR",
  "key22": "5BMomeYwhKXvLmgNkNxDp4mvx19YEPT936gHoS6w6Y2uYK59X4e9U1isntaGeKXXztFVqqRBYeMZyRYH8CC1YzQR",
  "key23": "4wVSUzySoKWAYRdzkM16LUs73Sw6o2LRCfLvEcCA5mMvVsimzgvmoryodo62V38VvZpqkkANJkfE7WXWbkhmuE3A",
  "key24": "7xGW79YrwiS6JFxrQQakntM8EsPei79jCTnt2RN5Y3HCroNApRFNzK1PCRHoQdL9zVaAVi6dAmt4QBMyV1F7uB5",
  "key25": "4xHG4CrHt79B2HV8DuXBh6vicqxA6fSL2Cgm4EitGTaiUrWbUXqSf2Gg9H8g1H2xFsWcfDmUMqeU9xrbQxfu7M1P",
  "key26": "3QzU41wKUdXh4gcXAjkbBxYqYq4ePqZbHA6nWpyEAhWZCBbqT84Hnw4VNSkYb5oZZPQmp1ipUfQkMVmSqbwdczbW",
  "key27": "zX3Vybz6MEC5AoQUU9m3CH4Fdn5QQCE2rLTBqu7ETpH5bZ9wEnTe3SAh6fExq2BNo1Zav32VSsEUM4VmpnTUBQB"
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
