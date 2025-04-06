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
    "2LTmXGm8KeCSCPd6SES3MRrtfggzbG1WorVq2sAV36KnuCW6tSLJPER9S8h66v3FY5hG81EjUasre1bfLCbZADd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u8sSFWhxXo3awwu682Rm7THKc6mQerDy8fN9bvKTyWnQvdCmyVq2iQkHBfBkHWqtQ7VnoR4JKN4HwmF9A4JnapE",
  "key1": "61cgTgjVJ9MW5z8QsXFDMSS1GQEqLDUJX6nngWQDjnvUbAWbLmuV33qJrUiobcYHvLZCRznPrwegPjiTWGa9Y5gi",
  "key2": "5PauJn2nNvTus4MMhLDtVamL5Y5zV5TsKYQ3jSFHAovWc2nffHgN7MkNVYqhkQA13uaAkK6dzXUejEDvAZFwjKK",
  "key3": "4Rkzzo6WVouNqMAHokHDbWCwGdANXzQWcPvzh2ehyUkn4H4s6DYaqUNTcJ4epE5nHnMbDSAepLcuaCivVjQQXEa8",
  "key4": "4wufDp773YPQh8vPEDUpVW3yUg1Ux9rTFJmuhxWE4Ciq32GhUHy1QMd6ysoNWuBAEv4rounhLqbhfkbqyBaqVwEs",
  "key5": "42mMJKLuCXE1DX9Tp5ubPJdZM5Sztj72rAxfXi6J8eYBg4hCfX7a1PgAeSR3f6h5EvxUXL18XNeKf6RCxpvVjeXm",
  "key6": "52d5HxUzYNDDgHkiw6oFkLJHtFMWdDzxTQHjJf25geDS2A6bRZdSCb2wmQuS5xtDGUBXTQwK6z7CwCWFf87txA2C",
  "key7": "4qnyPMpJNoAD99bZWvhuNDzfXEPRBPFjAnMBFn1S48cFitkwj6TbSDVXZMSR2MvJLjBYgwXh4PW8ZJFujzsNvGDD",
  "key8": "3hZSXiK9NYkF5ERy38DQ6PYAHhbG9nanqKsupDpvkK6CqA2yZJwPFMXHap2A64KEfs4ZannApWiLVz5DkHhLmk2K",
  "key9": "57Z7Ka5jp3xFiSHRaVCLPzr6fsP4ZcVeJNPwPLNifynwk4DWaJD4FFJ1QhQDJLF5ZAnX6p95XDrEF112qJFmacXS",
  "key10": "9khbXEzeaK1KoL7n9j8azuejDSL5ZeyghmNjcjsThnc76bc6PrJxPXmtgDM945mBuzWBc3yDbCkRgs8QCF1Kfyf",
  "key11": "zoZ8VBpJeFZFk3RpyGLDotrvGnZGX1iny8DciuzTHWbo32ouajwA8myWsZUX7y7Bz5NGgwmqxnL5RxNQ5cDFSoa",
  "key12": "3THRvZkrRtwS6nNYsVoZGmMUf7zPW8HZKfphMmQhUmPTMzSsDuVmUDCkb69JmQjJmGuWscfr7aZwVLJUaGqp5jFr",
  "key13": "4nx59A7FsMxYLegh31Bdd45Vjj3S32XwtygAHVAN42hpzU8KEbv9toNxitTZkHYhofqMWvPW8SLFoE9589H8zWNj",
  "key14": "Cgsd1CNmket1fYwpdvGkHpw2ydQBjn5SvfLhqjH7YTeXFomaP12MU9htRMWtpNfyzxHadFv6kit1pPBM8kj6CeV",
  "key15": "CShS8B6zMX5q7raaMVw3r5p4Mn7dq59JMBeNvDRtgJfgBZXJRoakkpuXg79JdJhsJNpMhmqRHmmzo99sdi141CY",
  "key16": "3SuLngnsstTAHaTmc3NbU8jvfFoSfEddXVT1DRfVYMs8JeJ9m9caGHekYwkq6YJ9W5cciv9BjjVKsnHpMc5bHLgs",
  "key17": "sdJe7JpoCdAZV1bKYzEmo4QUBbT6ntZZe4fte43B3dh3YgLpHKCvNNkAxoaJmaY5MBB7i52Rqb9fr6NqMar4c2B",
  "key18": "36oA14ZdZNQw8RvmQWGjRoxQAkSKNBJSvRxDWXgr2e3CGRwmYwEKT7Ra6ATGdPdmnhDgB5TYjA3nSecSJzukJhb1",
  "key19": "2YnmMF5PhDbNGHrMMWVQ7EaPFpnFzgk8F1xmKLVddfq39E4EaKp1AeYuWUbfMFSEhhT8ENRVahcziFotjViAzEaz",
  "key20": "4JCffvP45nRYNkchVXViVDDwH57aLM6hEyUdgy5xw9WoJHvEqdvMEDTfFS5Wx2xWxLEhZng813aWiE52MueBWjaV",
  "key21": "4wdL4uDUhkXg4Z7xvBB88aJ4UhcmChTU26iuf1d8qBAucv6CDwaN9ies2EPFfyuivyzqsqoViaHX8QZ4n4igeNnw",
  "key22": "3FbJSMwF7fdxXPdVZevUgET24wpTpUosXJJZsPsbpLMWNGVfBX7ndG9Q3uGAZuzPLQtewjouWSid33otr4Crah7i",
  "key23": "4igo6oeKTzRFBVsiwbobUyST8qHezRREhKjNFNDH9QH4PVAexDSYJZuSSuQSGKWhCMG173rLiZm4eawfyWeuqKPz",
  "key24": "51zBHqTsU3cVAkB94SgwGQeWxyDRXF65DKgWEpnjiBwG1j7AxLK4D6zhNVQmG6MFNwmM2ZN8kAAAq6rX3FT8JP1K",
  "key25": "tTkLH73x1yWAqmHWJ7ibw1YvB595wTAvSMaPTkNh9pMUxnVWTnp1SzeZWvvQ1dSZbwpvwfTNwxTyjcpDzGkQAya",
  "key26": "4VrK7NwRuc7XUpnY1KhSnv2DmzytxYtj72YVvWBFoBAgTGr2EzvZyGDzAQyJnJeVSvdAqbBigwNz8LzLXLSEmST9",
  "key27": "351CweSPJiXokfGTD6MD4MLe3nTzbZrxyTnyQfUppkZtwJuCxwrPnEYy55bAzkn2yR5hzsi52vxFu6inufD4aH9D",
  "key28": "3JHVrUr6DS8dKBbvf1vYfVcxHN7cUrKnN2rpoTB5vSyU5dj9ExeZDiHqGWNDCms8qnF2RMRqZgu8QWV3B473ZRF9",
  "key29": "3jMcP5pZghRpim1pNAEB141wmbcTPkFvdHq1j2Gp3BVnnStBkKzRJBtYcpHajEmAkJsyZTB6QrayqnwG6n1WkUvm",
  "key30": "4v9c2wFw7zubvFDzgm2BoWnzqVswWFSbq2nQqYuPx1hy5TuQbRbATmTfjo85tzktDDz6sbGWp85gujby3etYVgDP",
  "key31": "31Ct2ufdtdoijKCUEGMAn9zM5ceC2nPnnpmwsWWwN9C28tJazD8u5WErPQnJzwvCwHCGcXDk7Go1NVvJW8dqnzZ8"
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
