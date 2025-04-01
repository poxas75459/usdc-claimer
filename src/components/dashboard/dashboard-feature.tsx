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
    "4AHwyqPRcpn89s4PeNjUhYW84PW66XD93L64z1L6MeXyb3SdU1pZ3ktoU7wtShA6XnfZKt3bCivUHygpFx4u1uyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPukJuKqiJfuaA9JzFnDiVbarBb53vajrrJbmq4Yh1zCKK8W7V5gk9Z3rx8kC1LomFCpbzq87ymSEupWQnCdHa",
  "key1": "DpLHbRWP292ykbzXWW2jTiSG2EibqLDNzTqm8TVJ9wuExxnHkRdV9areSg1NQTq7ZFzaKtscicRsaKD1wMSwr2A",
  "key2": "3Ab2bnEGLauJ5YM7GUEYzounGkRuPBqApw5TjcZPQda2zoScMcqdMqVWY2zkxL7xQuuufmuqDo1Bc9oEtsgYUk1H",
  "key3": "4tPHzChSuMFDwwvSEES2Rfy7jh9H3stB9QyCqEFJB59tMS4ZUvH9NL5Fn2MU8ZZHgQPrmMQD1LoZPAb4X9QbtaJA",
  "key4": "3S4bXBQkm3WF2U2syRtGb1pWn59dFw1nBq35mVGL8cStRcfNcCnPtk2jVPyw3e5Bnc1StRU1MoSPps1n8QZ2e9zS",
  "key5": "52GUhtovPpfMJ2AUGbAnU62nRoShiiPE2Fp6QD25eMUBLoPQ1xrzt3osdgGMUmfvjjvhckEbPimXB1vaCgepmdqH",
  "key6": "3KCRtJhUbkyLGjRsUr3W9bfVP3VH2thgcvRxgwusWLoA26kEvgssUigdRF3KDGTD26XPKDkotobNRsQZUpfuPCLN",
  "key7": "2xcVh9UNJanjeUrsZFURXUKgzRY8GiarYPvyM2wXfi77HuytoUaUcoNc6kchbSibANgFRFBoS5wSzqnBktwNdAAH",
  "key8": "3KfcEQ57Ups48K4Ez1NNQkrTnwwnKeBB1RwZKVKa5x57RQqETxXvMj2VKyVnQbLBx67DZR4hG3SzpA5LQmYjuWLy",
  "key9": "5XXDFPWCnTtk4gN7LgHuBcz8qR56Az5fBJGFG7nHcimtV8T8kg5Ef8wNiec8pUtWbtRFpYCWKQVAAfBfRMWLH11L",
  "key10": "3nP73bL6Hubctoh6d2zDJubU84ZvqphcAUphCGxQDgGCAwwrCE7HTjnjo2Bz4zQ6HAABCCvNimTaRVQcP2UmdVS1",
  "key11": "83EudP7oujJKXzsagfwvsxoztGqRMZknMwgjvgSuyLabWB1WK7VafDgxcFp7k9Zs4VrLMzdL67vYbPSdo9yQGQi",
  "key12": "3zhxKaNeTCX5XswqwQ77ynnj2P9RFosvuFNFtiZoHY6BcrEV1GhYnwbPcW983wXKruE2AjfrU2zpyGxAgPJSFdrn",
  "key13": "5aZ2YfoouMqTARym9xMBrUJPeEDvWc3jfcQe7KUo5JmZArBrk7ymsqDmRznpGPqaSYgPXK34BXzGX7jvDZ5K42Sr",
  "key14": "4TXPUWAiw23tYNLu74xgWzwpwriTmVxkriBYDdPxz1Psp5qVSAK3GWBCgorMLyRZ7NR6FQoARujrmCkcjj2QYQAG",
  "key15": "2vVsr698eFjhYr42k8QkiJqiyifiqDWWrkzf9z5N1mt8zDEyZnstMigPs9ugebqRJ6GQMqgZRhF47XdJnt9p87dU",
  "key16": "5qdUdjLcsETFvVtgeetAPxQTbE6H4vgTLtNdMLHPWKYTUEaUFckJmaRuuBFztC77SkwLUXNrMp8rG5wpSvyn1SPu",
  "key17": "5SKU5XHhavYoPuT4vB86Y63HybTKumbSBiZxQ5thU4AadJ3jaTUUDBPuNcaTRP54j9V62PQLbgGk4PUyuY9wUv7Q",
  "key18": "2Co1cYRKMQ9eCnU6WezvsCeAnzxqYaZcTn7qHCSCm5tQ8daYVgnxW9gMAkcWvNYMeQRU51mVUPhRMs1bqPngVwuJ",
  "key19": "vHyAQr2DkuseRueUb6WzXx8ntAeaVsiUzDyBtFtutQSXsXb1EPQMZQmKJ8r9Z3vrZ3oBns47bCgZFjFVmxDbhqJ",
  "key20": "zoo59c4NZnPhStyxQV3CjZJMYXh9fv2Bu8s1DKmS7SR3caGmTQDoN72ZD4cy5JktSfCZuCsPDRnGQpGVXDsN3KK",
  "key21": "bZzf5xCbaRKY5qsSoVmeTW3pHXFWWda1BmmdSffzRYKCrFmYW3mcR3v1YAn83dycrN1MYEtNGgSMPYiVXBmek73",
  "key22": "4kyUEq9d4GTkLCRjvj1tNZw5ysHk3xrWKr2zYiWByBDq7UgN6c97bqbZ2wpbzGHg8r23fbR3JXPEoUxAoCahTfy9",
  "key23": "cZJvkW8Xt5z76ZExzHxEsaiJbwZS7pH8wxMFnZhUJcaANMpBGCsL3mEBFxt6ubz4j4bebVzsHfUxDpXyRTQiso6",
  "key24": "65pubBh5BBFejcUG2vXDEukoMZJjXDXcwEoeLNWETCk2dagxw9PVRFpcJ49Zi1Dm316DWZyxuM7bKmJtw9Z9gFV6"
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
