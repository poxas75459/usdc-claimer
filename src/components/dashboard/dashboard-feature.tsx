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
    "5kQKGyfWDsWXrUTF4DhdwJs95sie4ypnFp4MFZn9PFP5k6NccCBrSadmj8GFHSsW65N1rfVL5yEh5tKFUhNnU6d9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FVzUZdrqX9HMKfeiyaYz5QFK85XNr2XffCXY6v56qGoqr5H4iQ8YaVPAGDRL47CrfK64bUhBfUARWs791Q6JJgj",
  "key1": "2okHRcyfjBR6ZUugg2K7fGq7pgrFPyAP8wD9cussRJPBfmrWo98NW2xxLPrmVkE4c151Dqd87QosyqpY3ynVi1sn",
  "key2": "5xviR4xjPmKqNKFAA4hgM4tzavpg9Mx766oCREci5TEscrBgsJEW7GZ5Hmr6ovbGUgta8xj4adcArRoqsLRpHVRe",
  "key3": "3M1Swe7Q8iDx7XYjPBNDDxBCV2RXBr564bw8g9ZeUk83rvhWguLTAgzj5BCC4ka92L6eoncRDGHgEL9NJDc55Xn2",
  "key4": "XgmvrNBTZyJwA7SVj6Rz2bmW8svd3yzaZdjvo3td71vTyvMDBnuLDidg7sKA6tZSCJujnC6GaHStiEKpXoFFWNb",
  "key5": "4r39ryMyepXT3LRHFeLEhHSpVvz3DcXp7cpdTtxhmnsLdGYdg4sQW1xYkdJHARkSCbuzekagewBJijHoZNM4Za9S",
  "key6": "5Uq3VkFwPmGGpRY97KAfVwvWNq9fAaxKUsDG9xZHW3m8kaDttWTe18KYSuctetAtoDJnwFT2gAmCug371NYscmXj",
  "key7": "3KG4zsjDowBZP4QMfzXgJa8VjPk783qAY5Ar2jnqLB9UDm7Y5aVrsJfzaD5dT7BrwY5PBJq9XjEwh2nheCzdRZrY",
  "key8": "5JWimfgxW3RgBXv7gkrMxMkRvDCUGLeKqHyW8r7TCpomC3iHmu4HFM39Q7Vqxd3jnTKDzmTJXVZLR4j2cjmUoPjj",
  "key9": "2c63sqA1KtYW3c5hmTxgsyw4XbZe2cf1f7dYGG71NR6SrUrBKTCwCMZaWdsRg8UqVugCKqDQmLPwzqpTYJhU9u2T",
  "key10": "4ssbBXRXH2mzszKihqG2XzSwqEkG86FUF5oCo8y8yJrYFijHi8N4GbY96h86WEPXhqceb6LvCtLayGhaN3QbwKMU",
  "key11": "2qPKwxSABvsFLZ1Q6VPoxQzr6uujJW7UVENRD8KDfb6LTfjYt5TrqFTpzD59gd5wCKUDeHysbPKP5ZtYHvKYpK6k",
  "key12": "3xdoqzxzoECWGazoKatvkWrwwDb6jeN5NtA4meX9HxonoLC9mW3TmuZAKszZf5mAnGVioYF45EfwYJUt9psZUrN3",
  "key13": "acF48J1pPfUd9puHi1L5EyADvDYNM47w9ZNWDtWEnfkc68EjHawnxbQA4vt3SRbxgbN8rqYU427aEir7Ksu5MXt",
  "key14": "2PdgomwiNZ1AQPBNBidppA6tGETf7yctfCqacSDMhWQ5K4mTy8KDcgBFaLMg5XvCQpECqyMCFHzm3Zhvr4TEFkgX",
  "key15": "4jd72YdoojoHZBoudeDMsCqC6zHCcXaB4UZxSw5KyDNcY5Qz7osNETfuVaexJs3R6PfZURj9rJZfNhzjvHeP3NGb",
  "key16": "wW5nZzjUTtX27LJ9MWVy7ipaudvqgc9H4FecF3DTcdADSnbPbWF9dtL5gDHX8XFT3fRSSqaqcT21LAwdi1CGZFD",
  "key17": "3XcJcwNES8syKAuJ5acxEdymTMzXuEqwr9BFDQuRCAFgvm7b5uSUGjiZZPATDCjxS3wogGWhSWmiQMcyqqZdYoKZ",
  "key18": "5yS5Yn12oBu1K9gydDr8xedYiqkeW69fCGZEcP7q9AwK4bjBN3D9xonRsMunezULVGFKxpUdLsDLBvVQuWmAaFef",
  "key19": "4vYxnJW9LFZxGr6KaALoAEUeVFyKTmggjhtVM6fPtYx9QG1nJbVjf4XqECqmLMkhy2NNpGwktXYKuFo8CeV4VApD",
  "key20": "5creB8HD4jgHrvup9Doe6LpfoALioScM2xi4MKxWRwus4h2UniHZhforoT2y88RrroWKTRZC5Rakt7rcA1bEfBuR",
  "key21": "5j9bnSmtwBsPkXMe72ZDxuDhqq3h5hbc3BXGiTHCftoDE5RzbVPADyHkv4nuTwrFRzqz4afQc8Lt6r79BB5bAgVY",
  "key22": "3Kr3oPuwLFv1mRxL8tXsSxs4ApA9AJNaSPd2ui9d7mJhEySHZNoGssQMUqbvY1oFhUx9cSwtBDekukJZ3ENa8baF",
  "key23": "tShpDfZQRt67Z3zdUo7nB1oEMcXN3SLb5VN1ukyEw5LVowqVeaPVjsSwkKx2H4uUopPSW9pyq4gkpcKPQC3E1YA",
  "key24": "2zp8rPaUcDDDMr14XByeitxCPSKtULtrBwMnGVTnSWEtMjSV42DqpjVwSzjjypAR5UqL2aBbTsy5BqowqSs98Qon",
  "key25": "4dRizTUzcaVi3YxErY8awKrvcDtadwJgJNdVj5WHMxFiUuVG2xzZGrziBhsBrKFRdFSeY1NehUqrvfRDrfXf92w",
  "key26": "5AXuwzDUBshRBgHQuRXJYxydJU2oCcGopHAkgCq4bW8Rssv65AfPncH4LeFgTNYFVCSGd1XjXNqFFUKuQbvey6xX"
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
