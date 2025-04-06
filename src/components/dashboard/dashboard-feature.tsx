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
    "4WR8wVtXEDBnJBS4K91pXQuv6bUgJFruWQwGbncpNiCV2aNCzxmuCwePdU4DXZSPfgxzBVGFsxa5SsLScB9txXT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PLFpYjMasL8m1z4bZwCuNiyUzPSnCRkiVj5bwBgVZAV9HxobCs7TuH7bqG5p1PLUQA6TK4KaUf8edCxQY1442Qp",
  "key1": "5988HgPshu9xDC4ZphEeDtatYDAxGQRnZUqjE7TcZDmguiqPVphDfZBDEmVjxYLremZo4nu8xqtuzVX6XfizEgSY",
  "key2": "3oFYAcQsVWx4WkNYXgTUvwfKVAsgwaa77GLCPua1Fpgdv2bVWYq9kXQGRfyKGjnuJwMK25FuMf2kF9GwVuUgyHgw",
  "key3": "Vz2zwNrAB87oVaaDBaSVg42v9mLiM3vF1gpjzEWSGpKPocjFk7355YHjKCbSnPQVKw8iNxoeHxsj8T38KbeH9Ce",
  "key4": "2aqvVjFr8Dk2xFP3DWjX6LKEWi4iASZc59jDv9tVNLPnFPKF8yGRLuG6XsjdMcZbZAyiLdxzzENxqrDNmUDTCgqt",
  "key5": "3BHPqVPepMFxgSCSby56weFFreC8CZD38dzoX38miKQbsVHq8RzMsB9KTw4Euwkz7XPj7ZcGt83LCqoFgafYd9Qn",
  "key6": "2P8f9jYXqbQSKGrJxa4WiywpTnxh44eJ67AuqNUUyfg7pT12CeDZLyWfyuzCUHh2Fc5G5veQkQzYtnAUPKVwv639",
  "key7": "4AyRH2CVm3mZPZU4fcVBCSCoq3vn6EAoceE9DsCM3ZPCQAz2yTdx4P7X15RGeiNmuFtY42cuKNTnnvH8eh5HR5Xu",
  "key8": "3CC6qnriHEc2CUzcdbGS1tDByLHVV3XeZu8UDgocETjyRxNfwZnzGb4BTqSLXXtPzF9nvgPUy6FqDfLiGzVkNC6z",
  "key9": "AopAGxg4Vn9FtznFr7TeHjtcXXaedUeKMTdFP6i9QCAdjyAqFMbFaEhk2grmktDWGREJhQgjq6YzGkLd6BoYnNX",
  "key10": "aXRj9wrc8JnBUmFRF4JcETewicJxotvecxXqpySTubL3qtiR6Zg6YfCV7ZwFHw9TTgp4eJu3mL4U9EkVbLdQjyN",
  "key11": "2gYEZuCU2bf1bskuHNGneB5vkrtxT2LvWTx7uVR7SLXyuJPbHMYY28pJJ7gR6DspLg98X8wNgFmbeV9C74VLEnXJ",
  "key12": "XmXZi5xNvcjMXPv9w4mKK241CSNpbQkxbwpExr8MLY7PjdYeUFXGzr3SLemsoKMtosw7qDtzrryDGeEyjrCrHDR",
  "key13": "4datM3nw9yXxFZidnvRivSvq9k12Ft4bVdCi9ZcCmrACBgfWDQNpVyoXsipuUZz29NXhgPACCaMEzhnHgz5TiCiB",
  "key14": "5NRLZckAgAWjcpVG1GqpfvzTc6gD65XPEKHfXM3C3CG7U86hWHQGPr1SYv8rc9kfnpNop5Fbg6XsAsMGfuD9qnmC",
  "key15": "3XGnfdxfXRoSSLXuv8EYVWMMkHpZUJJsBJyS6DhRZBiTREK9aES1cihEBntPeBqyv6L8gGwbBnF5BDoG3PjcfL3m",
  "key16": "2aYeRahaeycUwSGy7jBywLFv2AaumbcovXRXb25y6kQpsMwYchzXus9wtZD9uitRSN4mTQwj1gHcvK5LPs5pQAUA",
  "key17": "3tEPY5CojW5qvqQ4A9JnhKbvnJqvdqknbku41CFiQzwegEnsTck6UaXR1MpRWcjixjyXCbqCnwmpcMomoqksFqkD",
  "key18": "2Eg9VSaEAb3PuoUsx2meAW52yy8g7ziUmR9BnUz9Ko7TnNFtJ1HxTJbqvzjjFVvmb9mVB5mohFHYpW6TvKfBNxs2",
  "key19": "36sfpPdyQ9RgR7E5fd4tCEL6WCQ2pxKwREZjybn1VChbvjK9uE742kRxcnoDeju1U2a1c1KkANwF92SrUXN3LkJX",
  "key20": "466TcijmSs9kad8a8Bo9FULGc2A3qaspKhtYcHu6tbTkSEDbFnpUfWMwHGQY2dSs9yyPqx8RpBEejpxTpdzVaE9Y",
  "key21": "3kERy6SzKfWtZ8RekEyCtezDt8N7iAAC5G9N2KYsJaNZGZmQqBwfEe592ujn1J18EPw6Fovv1LAWk9hojRqeZUPG",
  "key22": "3L9WfgyGmJY17ReTPo5ggRnNkvevHMbi4FRg61C97bnKw7iBtJ5MMBGxattndPYDu7iWJAV3kwd3onKrTfnTD9sx",
  "key23": "heCe2YCs2HPaPuVzEAhHED9eTj2YBDqeWhcSmpTq12xFSkKM4PQ91J7bC8YUSBnKZ2YLs6tcdgp1fWoTrxRUM1S",
  "key24": "5KyDfraVXkvACWteBaNdRMzzDq7cg6dQgd8BaXGaCNVqA4Ga8bkGeiLgFRohx3mpcsJA1ZaWnTB5AVNXYeTNs1T7",
  "key25": "439AZwyLchtKNnZracJvUkLYxgVeAyJHjGbmhDHHov3tFebjLqTsN3v6QAWCRQ4PghKki2cKQbic43SK54QF6z29",
  "key26": "qhDA75PfnFHj4YWYNLKErBrGrPVTQ5Xo5vDp7HNFbe4V7GYQLpJQSgoxbYpXsqxieczm2R6pwen94wYtoWaid3K",
  "key27": "36Rt7kBc7SrGkyB9Aov5yvFxvKVdYWk4hMiNgtVuhbrDxG121iPCupHDqN9J1RJQYMHSBWfzpvV3QVEVKdWRYUvP",
  "key28": "4d2a42TpXQifEWqwbZMeu8C26AQdb167js2FJdeugnmdyFjLMfLHbLWQsvycTDs8VXL8QEQhhNS3Dtik42ddQyo2",
  "key29": "hxkP6oLogt5vvaTHN1jPKeiDk9U4XyJGTmWrpz2aouF9r4QQ2z6r3VAW94DCsBBVQr7b94hudB64wXuBNLvPsLA",
  "key30": "UFdAceYhvpKEiGfdnySm8ovVbxsLDxtSwSUd9Gbj1KDvCzwj78H31gBARVepLMS8TqQActUMLHg9rR1SqS2CeJA",
  "key31": "3jvyPsZQgvrvjqSRN2w5LzNud57E7tf6foyrHLGcpAzXxEnqaFRURTsZfwqcjZYHdk3tBm1c6k1F7r3ZF9qDdeD",
  "key32": "5zkrmLEM4kMefdSkJyDVTfFKfXiM7pzz3VhkCW4L2Lw6pgLooDBauohw6xKdinpuVygCcphKvuA52Maq7royngvw",
  "key33": "5JzVWHAQhHQnCCLpLi7eZwKM56hjTKU9QS6Tqy5kYkXK8b6D5VjJdpgr73t2wkfT6SAo5S1F34vUvZH8aC2JL2dP",
  "key34": "2H2UjCM3iFg8Jwkg5Ui2si6Crq46dXpECKDitcAHpgo28HXfZA9g59EjE6rEjLFf1uk3WgCo1N2BW1uSTtUy8HpF"
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
