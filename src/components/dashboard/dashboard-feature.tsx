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
    "5WNN4Sd6qCJdmfqoGDVzxd1jnm4mpRkmmEr3J869mQG4Hoy7hUwQhzZto3g3FbpMbnNT6Ke94cqNutakuAtjXX4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xrmNWD5P9hcXhT7Ww6brnLV8AjiwLPxfzGS6j63ZHNbkMQRNd1Mh3duVGZeicDrixPiSddupXkNLh14KBRbQeJi",
  "key1": "2J2gxY7iYJ2vs7VcYDBSDd23bfF7RtLFiGZ5KahFaEvj6d5s8F9ERReTxBDobPau2QKRa6vX3UEYo7okKYNJxtSe",
  "key2": "51kxM8SHDsiFgm5s3ZiJY3YH6XWPVGCeBFyeBM3ZPCacB2R7DmGse4BE9myGBiTYtpWLPoGModKgLPWAaYLYDKSb",
  "key3": "2CjRnnAYupkHBzHkuB1qdKuTFBPYeo3MFKoJHEU6m3N57ewehN6m8ZsKaCV1rRFf4kc5D1YG3icozbY9Tt2LUqMu",
  "key4": "9sX9VE54ZWV7qWyodtwJMYKcAtASHFttSHY2xQjPbDK2YNFaBSScTXKVh5TRgbgXu9Ei2LGedoR84GRid8YnXZu",
  "key5": "66ciKL6NhQfVaUGkeqqKvMx4Yjp2ikyQTzpW4PzksNJTh5PT52S878Sigp5hpkiJVJPBEk4oVWEGsWcN3zpfXCfY",
  "key6": "5ftzccuvufUVRXLhzPBQWsK74WM1tKexU9xUxEuCC2fjBV1GKRravXZfCMehpZX7SesLLVx3a78E2Bs4HmhaqTRi",
  "key7": "34fjNfQ7NGTB8xrER9FHMxj8Qh7s1tHpXiZenuAgojbeszVrPvPnYvu9VtP8Z9uQeANpqpQK4CLgAy5SA7uLuFXL",
  "key8": "2DkfvmhUaAVYtEDumS94NRu9T13HdTirG58Hq9hyURDYjUaTjveHF11qdH5Do9v377amcoGUZAhMNdCq55RbBDh6",
  "key9": "56yZJdh1wtsh47av9BuSzwK6YdsCzCV5fkSFNqmzbJJysFFC3sQJzyhQNmazmW8FMw7Y7aPvvkhiu885uwShDVEm",
  "key10": "48ePRSdgQPQq1mehQTt9gQ62GjtPv5pA2zb59PgnnBmZfosAAAbgFCamdsWPAjBn8ktAvtZSTcJHHUbuiLuzMzEY",
  "key11": "4bUzL5VCkvRb7sNmzKuLM6e8XCpsqxE3uHCrNWyR9Gs9dJCtLrAePxwU6uNfBJkwSBmMdCokGsXXLirWxEorcxRb",
  "key12": "7YNGUEAdH1MJCzB8aqXL73juNZTWECdVEs7tZrAhbDFMXQBAijjXwUwq269gq4Aw4zA5qtu3r41ju9SvuSubSEZ",
  "key13": "2uB2dLenEEuMF3LzyXNTa6UiAdscsiH6iGzCWdvdUEmY4ZVCLzsNrW6B6bzEXiTmK6TNwiX9jBmxrksMQYzquqex",
  "key14": "5hf2fRCrR7h9c94Vqi5G1VTQ2qk5iNRzaExuLjCAPR36KYt2sJyYsx9uBwe2U6XQxKB71S9vNdeJarL9vzAEQaX1",
  "key15": "jQHs3xvfnum8MZiGaQZxmfarmEisDahvJFnbXEnFAwueTQWg83tRVrJ6jV9RGjAYhvPe8bnJ5RRopiMDxz4suUF",
  "key16": "3yTYAMW3QYytmCuGzK74FYMTaXRhzT8HDC4Tk6yytC3BcP5HLd2EfyVHLcfdxVPLmqTBhZMPQTzfJ4XHMbx8gA7z",
  "key17": "5fP3LayYVyyAJg9PKAFjJ7rjwH9fi5xYXfkjKZmkAgx29emAYQAcbkuLWiSFmVKsxBXE9wJrGLbdqnVYavVWcYQN",
  "key18": "c9xySejp1k8Rw9CKRoMmhVPdzLXrLUUdn1eAtVmYcQ94rfcxy64bzWE3xLQrrPhpkzhDboZtBnfhJyTtuWpYTQi",
  "key19": "5U9utTbFwDfoDvzKqMjpThWGUzqV9NVx9GdeXHK3JuFx8abnbmbvm3LX2UgDQWFEgUCNRq3xdjjtk8RdcdEWcadR",
  "key20": "3JesEcWmScffjnkResV1LAjsPmPK4d6Gu6nLkzx9XFXsSRsfrFgXDjAnDKgeu8nbyaFRjgtt9TpTFg9EJhTyy2Ry",
  "key21": "LFoc98c9Gbm5Be78ca16KovUUhFFU3zXftDusZ1URnwQVC64uR3dUu7y3QQkaCEsvYTGbwatgBgpZjF1Xfm66Ji",
  "key22": "CeyLXfe8Hjo3t5SKDA6GQrKNkepmvezX9bG1czzCekvN9ZmQzzT14jBn55YEY3xGmrbn45i4rjs4bq2BEgLgVHR",
  "key23": "4Na7qzEoJebAMTykpjwuScXfBi2vjnPtps22rHs3uaX3JPRESXn5V363VnUTV3hoE6GMMqx6ppYabCX3J9dmComg",
  "key24": "4JzURERhDUvkLaWs35vwDUesU7zM4xE6kC2tthwaMvd4j6EL7Veg4VA1iSEWG2ShZ5KRGhPoYiymCPbvnAfvYLbM",
  "key25": "QHHbugr1U1DvKHuNdXvDA48bK1WEKeTEZNwZAfEgUPuroqTpSES9wBJXdLKSvggxUz2X89bQ7iD7nRnQn5kFx2J",
  "key26": "4rMLBHkZdUFaUNcEmLrnRKb69rda6sQ3AmLxoz5TMUtAxV489NHb8CcFtzb3om36E1afEwK6iweqSutrH6HfAnE5",
  "key27": "2BHE3oKCyhv7cuwq1rzTLbbWBH8QWinPEYS8DT6N6xgpv74GtFReBL8UATkVLkqQDQBBs9aimf9BPaCThTDmMWUB"
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
