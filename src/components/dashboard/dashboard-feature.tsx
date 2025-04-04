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
    "49KHLYWJ332tnRTAuNqC57p6awMgzSx6K7u8jPDpJLSMnJps922STQZHMFo7qJKbkUucsPwBNXvkWQwAR8dtWVsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XyMcUuYLQn5hJqa33SCeRBiSbXWVrNz74ZTXm2H1mpvhzqNZ9ex7eshBL4RD4eKg3xEXX2AAbmwvFvgB8ZXpEzd",
  "key1": "4T9QePhj2SqGcEUNpSUtPiFGo6XKmHgrYdq3WSMreu4pNMwLLwppG7EzUk1uUQ1hJAEvxsccXoPzBFckKSK9Xv9Q",
  "key2": "4Zq9wEg6Yiro4cAQWWo175eU3JeXgN6Qazc5d4m1iqRJeGjxU49QE5gVXM1YjaH9bJ34ZMjrq2Z7eQ7TDv7p7RGW",
  "key3": "4iStZfYjnPCjL5aPEk2WE5aP5xUaDwg68m1YF5bEAkobFCMMJj1ctwwh2G3fNaL82SZ4XYCVJnMxo8kZbvdVVQR9",
  "key4": "26qb3Yd4t2JXLf2cNvtgfrfVHVS5CR7SapAekRLdhkdNvaXecT7BNzqJ9WgmcrMcTcNy5LJcvuQiuFwGUphSj3vE",
  "key5": "4BCajdADTwGV92PCKWw8uFrFFjFzPNL6fFWUZPaJ9oqqaZ5YEKX5DMQRFswdgcRW42FBPSnrpBRJXVB5ivgn5CCD",
  "key6": "4pH3X9dULXrTCVN3BRUYtu2j4VTYw37pKnZRVtcnfC5jcVD9ryA8a6RSXxNPPp4pYWJjfWtoL3uPVoAaM9SHyMa3",
  "key7": "48tTeWbiFwtCX8NBVUV8NhPC6wpkuXvCj95p5b9JXK2eQNKXCjCWYbF9vkPXqjFzp8CCzFQzU1mqdryDA9UWc6zF",
  "key8": "5vxxW2driWvnAdd53LCC7z48JB4x4L3865JhkzP7VhUEuuSFwv51d6i5YE3TwPRSFSjivGoR6wVqRfAc9SsqSGUY",
  "key9": "5gX2KmVSLbSe2Ryx25rxkBbDQMfJHmATJaZmDswxmri7Ai4bJi71x9ZvM5GHSqDhTdyAhU5jq7TkHaJaW1PBFZEF",
  "key10": "5KsxgpBTK8ovrZ1KgkDm4g6whHTVfPTnvGXcFFPvXE4as9Eises9TU9mKnDCUthYYgexkack3qEeYT2EEUSJATR1",
  "key11": "k7qgtbQASbYoct3nKJYiWB7sy6zSDaRps24HehRD7JdjFrCTQ51eZGSv9bEnS4UshMiZkq33UFUaL7Wso4LQyoq",
  "key12": "61fC1UnB8DpBb7mDRs9myTuHrUanuCMvR7GsvNQpA7FoTyvbMfqRAGZBDF5zQTXaLqMbVnzPdamZ5AoyBJTpsGKp",
  "key13": "5LEDJc1rTQ8fcYRGqsvHsjoF93t2K9Cb73tuT3JfsCNi7MQEcKjrA5fB4opNaYVxvFZUq7nmQTe4PjiHWyf6XNkt",
  "key14": "4YqEE5VwP6xbzfQWPJ6oqg9EyRfsVLCikyMFPCbnw9dJobLXQMWbExKbqJ9XSDGaPBTLh8S9QmfPdspCVTgRwmvs",
  "key15": "2sjxbCeJw1N1GMMEgT9UbSML4KbsLZEzNHA6YXVvr3ZEZZZToJfxTNw2v2GDkqyka5aHpAErGN7PuxDVJyD6ZC2g",
  "key16": "61GqbZJExJDxaKPaQvjntihz4CT5PkeyzzzdU9TboMRTjKQagDEDE72F2XS2m3qMGv7AUHLBCLM71faEqCZhLA6h",
  "key17": "4ay6S9QXiFMt4TctxBYotd8VNrsVpR7x4xAXd1JQZVMcuSwYXhpV7CuennuwfGDDXGuzxx1En8kKGFNJmNMdW1Hw",
  "key18": "TFVYE6zwpagCYcBV7W9w5iJzEGH2P3HmrN9CK4bf8ETwBTRrHGi3dVjk7JqY3Z57g16BixACQuhBbatEtgB6odB",
  "key19": "3hxn2phF2ooQdWZmxf1URkrUkSURtX1j15bKr6WTfNehQVZncv4EESN7thgB1zdeRyf7UhZirp7A7BAx6d5btkEN",
  "key20": "45EXHcv3t6dfue9se2h9Q3cNUFbYfGksxaT7ddsg6eQjzuuaWsf6nY1yVgRmJFTzKcrFK6o7mPtnRBxfiBWsYKge",
  "key21": "3hyKYe8UmgTZeNaPqX4xpJPBR4nhm8iMpLUwicSTJYUbmng7aEqPbWzm7tyPwuzCrv3kHyBK8dBLoowcS4cKKKsd",
  "key22": "4TyJhWx2pYorqaPr19yG9TBSS1op7GdCH4Hz2yANWW7zBVtk964bWpASe3tY7f7SRTjtjWrphUDpoYA85rJjD5XY",
  "key23": "2KnZfRkuAkDYXtzdtp72AYPZqTsNug1ptDZVM3HjG3VsZcWrDx5wDAQqnbdyTrzU1dnjiM54o8UHMYGAWYV988MD",
  "key24": "KSj4Vcb9UfwCm4wTGDM269iD1SqQLs9fLcmYdU7cqXeWGApaXb22427uJtKpJRe1Bqhpc2cXAcscTZmyULVFWvS",
  "key25": "6jfxbEsvcUtB9DrKvdKZueMiNDW8gjkbKRdEcyGpZLYtfdiwin7k7HKfroaxLWGQPAC5pi9fqeh3tJTpR2tg6dL",
  "key26": "55APNCwunqeduCeZfnoVDUsBeiKkJX56cPSwBhj3waSR6GFkPE6XJq11gM2wLBDWEDEebeXKEvaFPekH3f32X6zm",
  "key27": "3gP4e3fJnSijWesF2doHfT54mBPdhK4PhVAVhQ7af91oEh3ByfkZMkVTB7PWbmTYT8rqhWkAVp15pooChLrj8o3r",
  "key28": "Z3v8H9oAbCM8obmQ4hcGaC2aZZahW5GkLS5Du2oh4gfaKnrgfWtFKPVsPy2fVpEjKsZBEJVJnfiZwP5dgdLaWvs",
  "key29": "JvsNCEQzbyktVwvY47FsvFUidH5raecSr7V9gbGguBKgJ3CK32g3R778Po4Cdy9161XaPpgKZvM3xfG9MLn4RHg",
  "key30": "4xvs4scWr9aeDM1WoTWs7RKkGEP3wsQaj94LcBBkiR94STrRNFNpWLAzeo518ZoQPuWaRkp674bUPb5JbYBMhF9n",
  "key31": "J4bcE3TkW3qSnnHYQ1yudQXX7fi9ewPeSnSrFUGnZmoTXM8R6XcitoiAQPTntCvfGjXABEoRSbVxYUZd1m6KEYw",
  "key32": "2Dhn8THLzZeE281c9u2VnDUcn2wcnaCByJsx6CyBLDGxt7sPMqkzCECejGgCwF4hjK7gUY9vc8UK9r7ceyX7vvvK",
  "key33": "3jaNxaiMvktSVPECUax4UYaeyVjiCMaraUVSHELJ2c4YfRAw72aa2nZsshgLAfCPdELy1crXXMz4haUaGXJNn6Rw",
  "key34": "5kCFWpDcwGtYbXghSTGtdNSQGQHTZkq2mjWPH3CiS91jdmec757S3jrh7dzmGzYjzFLGKLsuRrdPJ5uzqeWWEE3A",
  "key35": "5ZNDUJvBFRxrJE1MY7Nugk3yhgxdbBPJVCwX8xL22WzLFRP2cDsuziKY1meZkNLM1pFNFsx9YfQNkujJFyv4ND9z",
  "key36": "4jbkwrnPsqZEoVtDXj6chuL2Vr1WxodAyejBruxnBvUMX4rF8kWPAy1zFxdSeuZnF5Wdcwy2zDFe1nU6wRM3hAZf",
  "key37": "5q6d25wR2k5ttFt3nFgYq1pqPLxw3aRKwNBV6w11uLYtSBCCgWbTYTsydr1SGr31r5cSx2yXyxeCHvjc4uAseyE6"
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
