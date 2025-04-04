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
    "3VYaKsoNhRBTQ9b55WYAeo5sKvbmnaH6GC9mYD8fEbFpjK6iSWaKhDBLdo4ip3eqB15CEx81e6LKy2WCRXMkujaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L4AifumnnysJeY1TYWLnKVvHEv7mXgbH2QApXuAsFYiCRHDWnSVN4xomKjCPNzHhb1TetE92PHhHho9aHre6EEB",
  "key1": "4voBAjeG6pBP4iG4ejGf7kzoRiWytFW1Uq1PU94zFYu98XKFL9oWhR6wTjBTYgcUfd4dHbDomW2vzm4XavhBP5NF",
  "key2": "3FNZXRH7sUhNzdWU9CvyBC9qCSW3cDwL42y1LAXHfb3UE7sifEa3u3J3p6sozGwCiGgaHmzTyXUA2mFPk2bfq9dg",
  "key3": "65GzDRgU4Fu3d8J6WQsgnQrvP1AsbEesSP4cEVEiGaJWc8nHfpqQowQVrZzTgWRg7d9WtQAmF6VyfWB7i5MzoqUZ",
  "key4": "5muB5EHDkx1efbqjK6V3QXshyDNBbikgnafXitBTT8N97C62Qzj4ERCfUGVAzciGWvHcvrUt8DTBxrhzYViPpw3d",
  "key5": "i471eSZgH53bsUzHSNUxmNxFSNhxqGcD9TWddfn96xAcxh8Q8mdMqqzhFNsGaj4NRcmWdkEdP4EzAgjQ1AjSEFF",
  "key6": "3W24rLF1sYYgDqBqNPxgrgdA5Zv1MdVLKWtJT3YLgFfmBcJUAwnYzaZSV6wwxB4GbEfbfTykh6YraNZAHd2bKwvr",
  "key7": "iMrLRTR5abu2Qzz5WCvXumj2Pp3c7pGevtYSZcjuUjX73UHb74QPHfc7FqcsujQECcXLdE3sMUuXwovnZ91bDNS",
  "key8": "5vabjaR8ceX9geepUNQ7UBJcEuhHLoDQsUvNGwhnwx7urA8fTndnWcFZTDMbn1okSsRpmXf5sv9b7XJHpDGvraiJ",
  "key9": "5KwMDw9J2h4CVZxcMrLHLqvYCEtEKg5vXk98sXoGe9r98HDyqP873cw1jnDMSMUNSJGfyBd2AdiyfdYTJU3ZJtkJ",
  "key10": "UHynqHyVx7gwqRwZVS5B26GqNgcWk2BJLxJUSdgvqfxHCFSVLFUpMYGPQfmGW2iRQUR28hMFPa2puhbSsLwnYjS",
  "key11": "2yq1iLWJjCeXW7pKka1oNJNF7zEj2NAJWNb4L66c87ucnjwbSBqR98wwMaUE9X3KWSq9rNBWwbPsZcrF1GxZoiiw",
  "key12": "3SFrC28JX6cu4aSGdsKmC53NaGLukt3aJCsmf7DdQfuTqhmYWjDyFoXSaEZKYSoytxZm5m47fKknLvpvAzjhis3Q",
  "key13": "3wRZCiHeSPPAv1YPnLppZ6xbMqxEYUzhikPdC48hYyZGmi2JbpC152Qix6PuerUbBT58tCEPvj4hMBBhrszN3TQg",
  "key14": "241DyEBqWT468WQMszvNq94fLAf5yxvbxN69uMBpkw9o3Rr5CEHfVCW65Q3fs9VrrTtuAAphSdhoo8uXYVaohCxj",
  "key15": "39Wy6r4KJAdRd4cXg1QSWDFrUxvDHanJnZhqhcqykaXuUsbD4HxdL9LLVZXbcaC92CAYDQ5WhxawA64QxN4zr91s",
  "key16": "3VPKo7UXccVwsJz61scen2N1GP9ypfgyLmckYYrhMGEiNut2SYGdeqVaXR2dbAYSKnzVnbqRjTATaNx3W1oYVutL",
  "key17": "5p9obseBAhBBixKdHjdFemtwEievaCNAut64G9xTLcdDC6DQfCSXG8r7uaKMhJk5HJzo6bZ6tnEznMfBKPUEHnZN",
  "key18": "3Rpvie9U3sMaefLBJMnxk5dfqacZsgLhGBCvMLxtifYUV6fyLd3xbWuYvoQpUR7hHfjPzh9sDYwuFvaEYyNK6KMp",
  "key19": "3m6dDLUHbJjZzft7xpqBGX5vw7Wo5Zwvf5NhQKroeFJ3AAqVbwdkWbHiNWu6BARayvjqGPatACuUmL3bDD6wt8mH",
  "key20": "35ixcss5gAP6eqoNQdsWnuWU88ggYKjLo6yvmBSwouAwJb7tyqwUwuqpFrNFv4Kg1t8DHMvYD4dvw5CAsGksYsvc",
  "key21": "PneAj81YV797fBknc4WdvVsjws6m5gBCQak67QDTy3Rp4f92mNeTBu1Uc1qFmWQQjgNDzqd2wyioRGSvCduzWRZ",
  "key22": "2PC87BATKAj7DUfiZ6hFteaarcL6xTm7zXZABazRpZakoAMFi1kcLkPGMEZmT1kTXFUwQnBFxpKeV2t38sR6peAf",
  "key23": "w3Dh4zby4ARPzydw4fP79GAuTEkxunbtYhqXyzSkXDCMjJ5715hhs2nuKJmq7Yu72QKjipy42xEFjw8pWBoNLQf",
  "key24": "nivwSHFhYFsUV2mvfbEMujdeCR8dm26NSeogFyHAFXZmkx84QN8tiBWxMdNhrURWorRDdHrq6Dr37ZUia9jhL1q",
  "key25": "DsBsaXC64RuEtnYWTegyLYDpenvHNz9ijVv2G4JexXqgdFD6LJUkzyH9ntnFDM1zTTSvW9zjmCsmne9XbogsgVB",
  "key26": "3kn8jJ2Sen6JxdS8LBsheWTRi69u6Z19KidMmrsjCD3GqpZ8XfXtGZSHkWaKen1M8QGYW8yCcMFX2H36cd9PpYYo",
  "key27": "5UkxqsYpRTYvuBRJwfNyi7sDdfdJRSGw4zFqHAdbpi7wCmfLDuoX1JhJNrFsh975MJThmf2YP8YoTFFdtjR7M8Dj",
  "key28": "3fpfjkTMcYzWFMszhwTbYUpvVGeR5WGQnhx5KwvMndXLgwNA4QksfCY2NRBPUEcoWtCDHQ22onjU39jheZmjqLSA",
  "key29": "5wQaR93An2af9uCUFUHbupRSoiJRbFuusysriLJmKq82fnfd1qoNY6VVdVbbot2M6FfNAJdguWSr723U67hNeK7V"
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
