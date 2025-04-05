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
    "5hVYLVuxxUYJBsbis2r2u4LvgN1xku7hKYZKRkE9xBcYs6eXVgjm9W98zNCnZ3kNxPzj5akPXvJfY7TaYaDwzrke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wEDDRkDqqTjY4QqDucohDXyvWobdDgA4CqYhDni5iweWdWUUFAixUtF5Vo1JE97gSQYucDumT8waz826ujZdzGs",
  "key1": "3GTaZcAP84sQEJNBNSVRuNPSLRtjKN6oXg4a88w9to6GomxcfugV3Jr8N8H4Yfe7GmSXCNYMaMQYdACPC2bBbr6f",
  "key2": "V4vgQ79o158hxtGWTKUaPboVhJMXtLkLVgjhv9c5X3SjKysXxMu1U92HbeAvDQ5yh2GjQMFcrFHKFsL9ayTcJDT",
  "key3": "3mg1t8KEwcwb9nwrmgsafKwJmiAbz8QE1xSGZWz9vtVnKjBysCE4Ma8nEJBD5PxWKMKUQVz136rWfbBvLUqTyPKu",
  "key4": "5Znh5FPhrw5K1S55Fu4aHUsaMJNDax4Skc1JCFbDyDZsUUU9bQong9Ftsfj6m3r5XZampneMU5h7BNKAaHR76hnZ",
  "key5": "5WCaoMy2c8pHcBMzDdWX7s47onWPH1JfKD36CoCY34axVAFkRQnHP4oonaw6fRWXfNUKZyWn7SiGCdXTxtKqP5A",
  "key6": "yHjteuix56dTbXJvbRRdEfym5ct2cTUCNrFh4gXQEUrQkdDfoVc44TuYGRxXNP6Wk6sfipttQ1wV6eyYLNJZd7A",
  "key7": "37GSwY1AbKLyyKgppQQH2jnX2T7itwnbRWAHK8fQk2XAMX3FSYEjfjZb3sqUiji83UYKELiyWnRJkhwgAZwtzoed",
  "key8": "45v7Tp3sDLhfFGgZk7kweZQtNiBK24rTSCyTwuaC11zy4AjKAeNhVD9HdqQ6YJPyvbZ98zbwhAeZpkrQvL3xvrL7",
  "key9": "4xvEogS9L6428XxMg2oEENRJN1K1nMAY9PfZBpqJr981hetti7X1fYzDLWE65M3h2wJY3LgZoc9K9t3x5XkgTyMJ",
  "key10": "2nzRws5SZixUPgoYojZYoLMbHBZ3wZiVRWGLregKuvExPXdpQv33ot9zGPCTVfpTaAksiwE5unbvo3FT8GMwBr9o",
  "key11": "3b4FwSzwm5thbssDKyoHkTgype8X7nVWyogAnX9V3HNWtpGrNAF7kXwSKUGL99KNuLjgy5QgsLUXVXSrZByABV6G",
  "key12": "VZWEvjcPxeJGqfZxPyXxXe5bxtZ9AGhccA7NSqhhmpCn3owKVEP2dFwRy9zRChnXsCyaxy9d8Z9tYg6xjuVp7C6",
  "key13": "3MCGVoewU4CuzMHaihcEcA6n9kJvFj5g2J7ZEXQgedrhrEUccFHjh8H1QhuTUX1QzHhsjrWTArEkb8yPZug5uEvc",
  "key14": "TCJYFtXiSbiLEfukcXXMgJVar4UvDMAprq2hib9o97nbXi2iiB3Ze3gWARXFuRrF1cewzkDPcvtMMywVyVHcbWo",
  "key15": "jEj6NCQTqgDfi8uNFJDoPJbLXKDG4QDWSexE1wkPeguHTTCSSwwMAfvSxRLxLDhQcr43dB1qf8YLGCEHwnEQZEE",
  "key16": "5P7HicTuLMZXJWCMVE73vHygvLPbYZCLeLdhu5tgvtkHmHo6uLxUgUUtVVhr7QACfuvJuk454VE5A7Sd6RLnycap",
  "key17": "36kXEQ2oJYjRh6oqmkmhGbKpri7JGYN3fjMyx6BeGqqGcHvNKTzzHBuK9FcG993TaCVDwbXK2Hdm53bTGuCg964d",
  "key18": "4NNkvM6q4DugPQTzCygQnPMnko9ySuQKzm6QCtFgCajAVHoTiw4FBuUvSuamaSpEEwhQeND7vqRBHrYsPCmPHKET",
  "key19": "42UjwSssYFppLsqR1Nc9vGuFHVCaZ7FZvXG7rCu1m7pS8UgFQa15xkmMBWeY3Mw8sbQvNw9fU1nCMjgDmUhXW2fm",
  "key20": "5j7SDvuWr5bbzsVmrmoJKif7CXa41VZ3wWAv35xX3u8Nx582mpfTuQfyDXWumkMy2FkqCgYNctKSFAdzxUApiRKQ",
  "key21": "4q8mfTzFBJ5Nc4NacDEFVZ88vC7NoS6pX8mDGNh1XHSCygdaqQM57BWw76kGvNDwFHDuLjEKhFXcu6gPSNrcqwGd",
  "key22": "3BMWGgiMSPdCRbQFcqpLiTga7Yoig86D94aM8howi7pQJmnX4HP658tmkYPJLxyEjfGJbEFufoRwXjsHnSrWB9fk",
  "key23": "KK1iqnRxsoym4hsEgHiGXQ1oRrYr8sMjdqryzNx5MaVi25nr9VcyNgvx8GK2B9KVKKcfBCUixwMNKVEqQ9x863b",
  "key24": "4RRKBUvtA2h14KaU6cpwdm5LRMD4nf7BfXVPJDKnsTMQWcGxQY1eJvnzkkjFBEVs7GADL5NTt2CEWmsP2HayN28p",
  "key25": "3p7mPJhRU4TEH4dBJmARFhBG39R437WFA8HtNB3G8fJajeKmkS3cBTTRiAVWaYFZPSe6YaZYb8odNy36CqqduJXU"
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
