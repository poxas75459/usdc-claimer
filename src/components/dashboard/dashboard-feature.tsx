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
    "4YSFLcRBXH5ALJ22GD97kijMQXfXjAiURn1j3MMeZd8JAZJXzsBo6KXuVCuN2TbeptZxhvu965DX1QY75xHEMDpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TkP8J3rWhFcYmqb2TFcvx6TcPTxyVE1t63piKXEPM6Dw7Zv2cZBhYQFuwQLDHop19fLkLA2gJwEtQ8r4dYnaaLE",
  "key1": "5UsVCBCwYGEUWoBbWpbRyzKyqfow8fvfwrux7UWcwCbAecVaCChHuhFgciCWgnVZjV4YuXWJd6vEH8VtwMz2cy8L",
  "key2": "4yz4NQj8EFBRg93fFBZ6nDj86jKucHZxWPGHzDgwigS1UdVuUn5mCAEy9ExUR2eHkXoaAfrq8KJnqBX1o8bhU2BQ",
  "key3": "4xwBNwLfqTSyD2Ga3WPLUk1xk94doNSEVgiZb454XzSaSg8jvrvV3Ht6EbjDCoYnwF35HTnFv1Tes6RAeEZVGnu8",
  "key4": "2rar4CHwhTc9jaGoaBebMMEccrUsWvUqfJPt5mh6j3mNXvTjpLzsP3Zkiw4Pki3a5sDTkC37zGHQJCnBq1M9AY5V",
  "key5": "5RwgdXLj7e8VnZ5PB4beqMCLcUwVUrNx9kyNiJMYKX8A75SS1aDJbFMCVVeUUZNSnEznwBDjTmggHk3k8AG4sJ4f",
  "key6": "56ZT4CeaanoUGNdDa9WBjmm38YaJB34Vt6z9JJ3uhjNy3G1dsQwjahUxCHMZeFRhzE8uVD8VuaFC7EWG8Us4MF46",
  "key7": "4Ym4pCsKicL8r9JUE5mVCMrtvzhc9CDts6PBVECnujUBXcE1Qf3dS9SPUkNBBv9LFLUHFX8zhXt8pvNCnX1Xkqzi",
  "key8": "3BDu2vD6saK4Y5BqvVBiBPf9qNPxeWz1hrWDoQTMgNszeDZHqoxB9fdpKvMcDXKKR6hpaWrz3CioaS4oeKqw3xgz",
  "key9": "2YkSsRhFQKEQgB5CLckbCg5vARqVLoF56FhQMNhE38TxWvB59DLKnSfT4KPd66NtSS2U8Xq3t16maU8bMUExqad6",
  "key10": "4mwx8hZknMr8agbtmXvevtWVwCQJMUD4wLQkgt6VnoxWAdVdQYPBeBfeKhBaFRkpRFPCPphzXH58PPNi3jA1Muot",
  "key11": "2gHDyBB1DD7bxpsGcLS3CQnZrTfxQppquZcHSHXPNMHZDQB5zau2KZeUYUsbZaRzPmurA6hdrCCcqt8DyP7qzS3R",
  "key12": "2nXCDXXS6fyUKRQBAoxMR1ww8dcLoaYnjANXy5zdygzheFbWUhmQDUnH8ZtvXcwvH8ggEXbsUWpUCG9r13w3PDYz",
  "key13": "4h1YbLw5ZGPKmG5QNBRZAMjEgsKQ2pnhCvEvEv86Bdzh3bqaFFSeHLnmJPDHegUozVc1hzo86CN1fvgPXrw8Q1v3",
  "key14": "2DT8jGDb9mJSLV7BtbrJP7mmZ5UKkXN2YLmLXiYq8QX6WF33VgPSRrp1VzVLH2WcfKdymLjFupDD59H2Yc3tbdnN",
  "key15": "4PBYcGTurPVFJ6DNVUqZbicPXYZDKyk4U1QkV4NNvaQP6GeGraFUczgRvbeKxjfQ5kGuQhQ68moNzua9hSauFcN7",
  "key16": "4XxbwB8LmxUr8ipe1xd44projzJKRmco8BPWeguc36m3BiygjtYhGVhX54GnskW9g8JX4F4VnDkf4msS9gaJM6Ni",
  "key17": "2DGgUhFXu7UgEg5XWtLXGtTJJsgMbMsE2jL8yH4swxqkgoP3qYkmymRnYFNfCopS9Jvb51v6A2sUWrgkaVg4jk6U",
  "key18": "3vRbVLBP1ix1dJf8Q1yNH7BHFm7b3HbfH4Gd29QQd1MG1gEGaSQrFqrXgHn9ESmGmpAPb22RvzJqJyLuGC4bqa42",
  "key19": "5aMncfhs5MzZEzmDLGsuYEgbroQzQaGMLVfvpvKZFNPDJzDi7dzK78bZMSnrFYFWgmWeb8kGccbbPfX54Jksj6v9",
  "key20": "oCfDwxBH1i4JrLmmNEQj7Ar1z9aE6YqvvukQ1DvfBvYj988qmdCwgzVYrN4WiUC5pPN7QkksFrUSRL6NAdEuHVo",
  "key21": "299Hr4jBKvVEZ1J9CbRMcJRHyCwCuuPTGaxgDVyC7kcNWDKsSuxdJnLWMbY1C4nVJoYKrMJBCpeF8njhWpEGRQRN",
  "key22": "YuYarPMbJZ3fTyUzcSNw3xvnjC6qnnkCh5kQa4VjAzNYkPV9dxnLHiiNGLgbfb94rJ1P7Q12Bkf6DKPBPsKeMzX",
  "key23": "3MjHzRCbreQArKkN7HT67EubRoshfSc3HS9vsxTMymwdcgSoAiFJzFsrJnaxEVH5jJqMPc4xo98974W4k4dBpiqo",
  "key24": "SieQntYCgf8ycqSyghVBAw5NvtoLbdyitEpaYpGgsZb1mddjtama9yozu5p4AKweU8r55yzbve9mNMzvk2gc8Q6",
  "key25": "VbBzE8dRjzV5MnNATZQ316hPrn2rNkynBtECjqUX1DzJ1HZRw3xbq38eaz4xWn1oRKTeMVTo992S8nAPPefTJNs",
  "key26": "4478VrkWYT9n8vEmgBPPEm7vDoYRZzrLJVZ6sDn6RrjxUcfk3FW9unCvwwVaaWjNqeEN6oMq5HxcRHZf3uKFMwT6",
  "key27": "4rRKAPtJ5fPNyMH7ZuRUhihEvWUpct9qAKYDocRbcfYJnes2mf9u3AKDuYfimEgFXjePU7JFknQ7p2TAjHsbvftM",
  "key28": "2Nzocd5yBnMzTmp9FuKCWMtKCG9fbiiwZNbBqYhZUZ4WfLRmMzBctMkmLCNiAkzfp49N3uChDGt5fwgmB8AfVTeY",
  "key29": "2VxR8oUCUbcXkds1hfQ48NTed13x7DgQFSc2U2TRdZabamZKbT1WD5FB3hParLGbDnaJwGT9kz8dxtuE1ssrDNHh",
  "key30": "2r5RE8HZECVUDM31E18DWSmF6ENV5iJFHMh7URLpPaGV8PRUjFDGPtoVnbL9YeP6BoXFuCqj7sGYdeL7hHyA4ssU",
  "key31": "3JXPLE6HAYcjRck2gkRruryhVQmssB5menioyijxU8PV5SdUocrxv667RnZ9AWv4DxnLKH7r72sqmzLwg4CcQSue",
  "key32": "25EJKJ2DzULpdYwHACn76z4k9gADg5jGceLH9qtW1Dv6xtSwdAmWkWpAT99eowwQYfCLigLab4mutTh72Eyj28HD",
  "key33": "3rHWVGd25sNdSbtPEcmFf6PrbhEqmgT9taXBPLj3NZHuEfCFRsVhZRVJvD5zTbSmqQdGn1NqKFVRmvTSZZFxRjDU",
  "key34": "49yKUf1qK66LnCNMqkLqoG7vQJc2sMRjrJekF42xyYPZJQfj8Ace1wL7RjM4QmF2hp8SgA6o5hYHrpyzDViRDFmX",
  "key35": "tR1aTXCHgDXBSZNNRD2inCxh8tm9NTY8pzPmnxt6hg4AStUq1anxbtDg7TcKiTKqdyVQhPxSSzaNchw8vC4MVMb",
  "key36": "2enPxn2cRcxtewWT2PQUnHMEpB2i5NZgGpEFHE6agXLGKuLMqXNEjHaZg7DoXyq6hSaFgt8Jes9NixG4Xm9q5is4"
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
