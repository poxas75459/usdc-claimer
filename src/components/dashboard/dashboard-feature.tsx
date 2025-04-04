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
    "5QQ5Kc1Nwbu2iR2qbtNCbFT7NHbvzQFWPWTdG1Sp4tyjCHzy8n4voCDego1R8auooLPAxD8KaysNPcZcNP4VK5Hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F34dHG5LJgMVrWu2HPvcxcFHqCpMJBCqbHKKmVL5jn5GXEaBDWbgcBCWcAHru5zGxxbmXN3L57ukBuLg5QxU1dS",
  "key1": "CTSM1BUUhPbviQksQKgQz1huqXpYbwT46CUL6m1krWEEiDTsRcTnaXVVQwfA7aGqjs93TARz1sr58zrXy6dkUxy",
  "key2": "2J6sG3SbY4ixtFD753P1oGwhu5h5dunYphneAVaSsBf6jz35sw26BZzL3RNdMKBUuW9dYQdHF2JrucpWr4SL6EAE",
  "key3": "3HkLgFexTbXT79W2QUZgceABpoYwYSweSauopr2h8R6b9JxV1QSUzchS46gBZtViatVypU5ZpaCHy2mNiY4gtVAv",
  "key4": "5Qb4msgWTe1RBPLPihYceSp4Ku96QTtefNhMX8FvSUTXfwUxqXEGh45QJ1HmT4cBy9sJajyutRZHQ2R3BqxEQ8Pm",
  "key5": "64VAvYwV7v9VLxkP8JBpbxcR1KR271VUew8o58u8GqBMeSzno6jK4jxfSDqVT4cymdpSq34b7LDf3ppxdaNnxTSx",
  "key6": "4LcAP19S4wAbVemWoh2fSwneY6WEPXmk6NXSLug4Y4iSxvPWeneKNQM4cF24SE7ZYgrdKHqLKvidSgMZG3PvNvof",
  "key7": "49sAvqKxCbagWu4hvYkEQeiHgL8KCaToboUV9JwEeiA2wPU2fCDYinkSJtjtk6kHuFXssJhGiC14dvM22UXeTUSd",
  "key8": "3heEgWkMBBaMVQvevMzz3th2LgJxZZ6NPNVSmHqe1Dh8x6p7Pad2vR1yFH9bRsH3FP6EcN5TkEz3dCxHn1yQk6KX",
  "key9": "Nq3439LsUC8trbPeMbGhBJ6mdKtp8fJu65aPPmQ6UpKseYcrMLjHhUtBKsycaDsRbmXKaPjpkCYn8tWwKp6JrGg",
  "key10": "3oKmmftX8WvgVH3WVFzZpxNNFHZXQa9GEnmFW1KE52vvRMzho4mzw4oeUTh4gb5qm4DAdfbUbS2UErHjDnjg3SZL",
  "key11": "54fgpTrf2HBxVoK5zJWgqjwxwWpxXUa5Shg2RhjndzpaxdnEME8p5PANfKBXXoTJjorQpGVMaVBPiPcN6o55XQC3",
  "key12": "p2Fa3DCCtoyiiesYu9eTCgixqR8yNfSKvyTeMePZW84xrMU57hrf5LxF44mgMBRin2GM61FCbfR6ueunzfhVUxc",
  "key13": "3C2XmEceTEs3qenEGWHMfpzDfPGLmbip4ifaihEbwt1oyemVgPsGnrtS96o4GYjSfN8LRCwqzhsSzTcyktjMFPvk",
  "key14": "4Prpg5oBRb3adqDtaaDmh55bz31CCPg6hZgShezFRjTikYtug4ni5nKwz3nNNyo2RhpTaSE5uidCs9zkuvDM6mzq",
  "key15": "3sSEP3cGf16jkN3dvetGc1SuLnxdvbvjEDnBEp792tuLUwPMGS1d2bX8d2nwtFhGPTKX56viFGeYBU2GboJRuTTq",
  "key16": "3DuTNyd4LDzAbVKZDCNxpM8U6DpU27gGwGuswh5WFDKeX87xZ3e6epYreR8eBQZgYqgkiggUaxmTRhu6hf6sKj75",
  "key17": "4hL9oEPpZdowX3WM2tqr1WzR8s12bnwyoWPeT3ZxFKUa9K5RoVRA9tzu4U2TY3yPmyktNAg39ThTzyWaHmQHHXqk",
  "key18": "ax5NmMBfcPE9y9XRAfGQxARBrWpznWskz5upquLEwLyCshEZKhg4SgquCdhQZ8cEU75xHxa4dsqFivdKf9v1D3X",
  "key19": "4zV1qe4SSfxk4xPDvqidZU7QxpM3nPAbyBB5vMLLbNYBtD9wJJiFKUVJTcmsWjYQAcmGaYprkMsCBzw3P3uv48Ue",
  "key20": "2pQqc1KK5L7M49rghHHF2oqJKJWqEgyf1s4U9SbWqnnvfnysT4EgGamYXiVLLC3wkh9GXSRaRTAkXesvbbc7augN",
  "key21": "2JbU86tMaJ1UX6RuF5yu1bwQXP2QfVogCx1N3yicpYUEQT8PQk4wBJowkacfyfpHJJg1BMwNA1kmmuvg4WG99TuB",
  "key22": "Ci4qyAdmGeWazi2nXkt66W76WhPcxVnoXc8pTGoiEgis1w9dsrfALrZN3c9LwYwALAcaD6xQvTgBKbNEQyvdj1N",
  "key23": "4huqqKAHocQCtWsYczg521V2hQ7UDVFN5qRvxhrYFZc5NwU6oMRPCkqL7X6KKXu4CGJ4MqpixfN3GbFVvhK2VFLP",
  "key24": "2tUUapR2muZHxXwRpGd7aEBAFjLhL7tEy6fXcdFCHLV7LW9uVJWyzYc6mbTgjaqyDu6YxP6otA655i8atCUuLNBk",
  "key25": "35RnwN36bvu6h4Z8bekuQaikaWdhzcgEQM7JEymdECiMK1SNnmshAtogCA1Ujod9DH9kM3fJuxRyDoJcaGs3fRrj",
  "key26": "2hKW4fRQtNZ3nVJLbs46y8mrjUDac1rtjkvD3fNp15ftXEFXbzmLwVz6aa3qLBRAfw7suSPNeAgyFrisuu7ZhxdF",
  "key27": "4Kj3SwRF9gsKQSLXeGbBwQ7jVZjjut7hN2Ppm3JWp6gaH18xiikrYBowaGofh73qAWbsBwLfvwzeGkMW2biiyUQ3"
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
