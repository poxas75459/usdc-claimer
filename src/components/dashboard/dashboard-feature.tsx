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
    "5fQgoBHKrWpzp1z4KimZucZBjvBzYeQUxbv3ssoFBDqeobkBrmHc3jk1NCmfQLt3nfRESu2DZNF6sRLMTTvmAKdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EgkhAJMDKtJMuuCANWsVuhXdkXgfAT3LfYV33iWafRBqYuHMckoMWviTXYvprA5dFMnqNVZwnjpdGvviSVhwR1G",
  "key1": "apWWNMkHazu2K9iSeod2DJiVR9ZPEfLBN1YLzAzS9DAfc1PG6Cwsdx7cLvZ7vgQFsJqCyLeQf5WC1icWR9cNpG9",
  "key2": "3bsmBkD4a9tWY4Sv9UDduAZPr4VhXCMdfVcWcXccbGmiYvkqm6mTJEYUPdhowUsV1TdCNHQbrW7qDj7wnctyoVV5",
  "key3": "3HhPyq2k9dgVBQ1SRC2H4UHT1VUNwiiV1n75ioeN73fmvATexnWS3P9r3roDx9Cdh6Ae7Vs2aFC8kwXJA3v1ECdg",
  "key4": "5eYvHg9jz27vvLVdueXJ71Ctaqk7Apk7zKEv3xpz3LVrz3d2gwF6h4shrLXLC1PSMLQcddX9fdYLt2dqZ3Bg2iLC",
  "key5": "2LNSHyeypV8s6KedPzJ7r1fAWfnxFgRPceF3vuN584NoAHqasRP8sJhPY3GhkQBPgAbkwTaZyWdRk2JqEdUqnozY",
  "key6": "45hxzeDMSz545xPZTWnHemMvJSzqeHBVfcXxkXFxWzxz2zmNhCcSwotDWuLN5bbuU7WQVtT3RdNbzGvG67jZ58Gi",
  "key7": "KW3UAUeStrkGdTeP4JNAsXz52jEVJRPjwDQzVRupjc6MxBjoi56MyddRn13i9WZypDwDp2HeMtLNBF5UKJK4ZNx",
  "key8": "4PGTQ1nrJGRd3pWRfsXZ3jpVbHDx3sHkaRTu12xeNKfeaKQJkHSJExakpZ1t8j9sPq7FxcWWVNLuQDJfHLPQhxR6",
  "key9": "4VsXD6rix7FR5DnGoC5ujXfZSBDjZ7WPJR53KhPXxtRz2E4N2VchymNqVzbgybYDbt67HHMjK8XEF6nD5NwLSNiv",
  "key10": "2DjD6k7yNGrGv6E9sHrmG59RDh4K4BQFKEK44BXNcohgqVKoo82p2LeV1VQ5D9nyqRZMKUwzsLQpRaPcVKi8SsjE",
  "key11": "2qap2Gif1BRjtWBt3xwKVX41Xr76YN4jAwKyCi7PCWUjCZYLHQTLqF7neazfYRjHzcvB7McCMqQHniWKg5n4VWKw",
  "key12": "4JV7T373Fp8MRCUDqyQUzpha8YwE3NZJmzGeuLNsqKPqXZbczHRMeKGg685KRaA6R1ZY8pYQqtA9LgZLksAi21gZ",
  "key13": "67AgZkaGVxpLYetX7cYd1dBUs2sNLgsW3QL9bojCoDrVJJ6mqczbAYjD2SCFrfCAGw6vvj7rkEG5YvqzLnRuqADn",
  "key14": "5J1kum9mMfS8fqz4mSPZKJNjBDcR917R3y7mUmpjPR32adNthvTjvzmcWKCiShASgWoGst5veCURPcfTzNjt1asF",
  "key15": "5GD1ZEUt6ewASYQL2yHXyAPNfGZNQckC1kX8oYQfLu19jEjUFAG8ph9oyME8C2F7gouULPCnUfpU2KDMC7zkVfu6",
  "key16": "2APKU1Xfrzr7PqJf3jNmQscXFdWwMesMA6fJW5ohio9KNcF4cwiExcbfDgJ7RFxAVzXMJw1EG564NjnXSivqrbR2",
  "key17": "3AEr6wVuGPz5CHor7C6cdSiPvgNEN1HMo2b3jttgLvWxZcnfmu5gWSZ5ngGJUhDbBifTqqmFFaVvmotuCkeFfDf8",
  "key18": "g36JRheBj8qZvKarYAYTPwgoMnK4JH5oYgdob3pFDSeXMurag8gQfCEXNXQAuKuqKyaM8PCpeWbPSU8mmV6yMud",
  "key19": "4Qho1jL5i3rubrJeJkoB5BjeiaFaY1G3j8nkqG6aBmEgNqpJLxMLxACbJDS6736DK7jh2Dw6yDroKwEZeo3Da1U6",
  "key20": "2fj7phD26EoZWhoERs7hFFQDUd9H8juQsppNiB2GiBahAqJVnbMjNuMTmFSLHXE6zfQGrDof2FJU8DPrjJD3bxFB",
  "key21": "5448tBWK5hPQpy881JwKYeREe5R9yWbqZrpi14K2faKp7DeNadyDxHF1wqGV9c3FxQftdueHiMr822b3H2rXgWzu",
  "key22": "2X3enEJjuC8QR41FY6BfU6gs4KGpBS9bVWAXRCtNugGLj1zD5e8yN7SbimgwMGj7koTojtFtwbY4c1vuxfLnqgGB",
  "key23": "4NNXY5qK52gXfewfwU9Atc51ViU7Zm7zLRehdeqoWy3yWqaH1CCi8ge9QFJA3TsrwfwFaN949xGraxA3qTHqNjBJ",
  "key24": "5MDJWiwiP1WdBR3GpiZQa5fbssjuYBXxRzYLfX7hZAPwFgkrZkTLNbpES2ATGeyun4fhK4AVGQnRSQEP3HuuCQUJ"
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
