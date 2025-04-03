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
    "5d1de8Vurap9isoBR6BSSKNT96QSmnFHfZQYATg6i5rUUkVabBA56LYaD3o7mWzcHPrumoyzFP3Xx8G7dT8MFtG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o2HT4QRxdknth3qHG3u2PPmCwVp7Uxy1x6Bnp5ap6umuF8bVfUAdiW8SXhhKu75RryhgbTr4strE47LMAiFFiC3",
  "key1": "22KeGgSqA3NzER56HAFpZoc2pVRBP7ohPNHBcSraYE9259xuX3avNsECfhKtff5bcoaeNwBDWTahGAA6hjgZTTpc",
  "key2": "5cnJbfo7NznBWBmsUztEjGtpHDPvfoRmhwQ1K2BZGH73E33AwFg5DuJCaAs2XN5aUEGa4sSLDxWxB5ojcktdAHVf",
  "key3": "cx2SxaFc7oor14vwp6t1dAD8yHPzfpANJhWK7WRg1Xi12tFx4XAPF4PRp7kR1EigSRe2WAeNe5JwdUHCxFvFXGQ",
  "key4": "5bAvqT4xUGEMvpw69E1mfDpzfBHzerTDBq45Y6oxzHZz5tRS5MFyVrZ9VHtySnVrkC47repBMNkyMNW8s5gtHHe6",
  "key5": "65H7HfEhoGp7wZt6WpCpPBW4LKx2FcBD4ZxAhpsMWbNEKfhqFsdyPTx9yFFV7oQC823bf4E6qpGqVdMNxhbF3Bi3",
  "key6": "3mR5zrhJ9ezjuyhv7q8VBs29t4Gd2hCnTWDzngxqH9jZEAHjPSSDYGc1orZpjgc46VSmPfogPxxaq6NZL6B55gkP",
  "key7": "58dARNcE5SZ55QvKbCF4SmaByQMG9FM58eTJDkR534JQz5pHmtncTNTgbCdEezX22JXYEsVBuvQGGaLFeYEvHXeE",
  "key8": "41J1aYcLpA7RXQ8muWRfTPrLmTKjcgcFtJymcaqTiNSAeU1YAaFBX7f6TCD2rQHJtXBD7JETEGGPMJk4g1Ay964N",
  "key9": "9NhH3HWqZChfLo1vQTzWpMBLgPfycJL3Q6cC8SbmbJrjBhrCCfo2PEDVm58KCL8A39Lk4h4zA8CvJ3pjLpT7xBM",
  "key10": "4sY1JteKTYu2Bs95o9ogU3BCmQB58CBgdXbTvvKipjSTu7MLQEpRcs9gLm1cz6p9PscDyRb7smK5pBChN3xW6LKs",
  "key11": "4rveAwXkgkAwEYvPup5jbo4w4wAYos6nnXvfZHZRaRkCJvFdqATU8tYfDuvHtJQhWR2qZFxhVUDn8Vz5aFsnaw9f",
  "key12": "2VNzsWsuPubNTVgWrwBASiM1aeTLq3ieiW7e6KaQsVFbyg1bQDftRC871RQALDsj9Fyr9KXVYLCEj6V373vN9MMm",
  "key13": "2PthFRizMPW4q4dtXfScMgaRiDjKVnBE7MxDxTdrohwy2iomxvFJJaKVn6H6noZ4oyaV7zQpNGDTP7DUzpGoaQp3",
  "key14": "5wSM5srKUPeRsGcmL6uEHApbVvonWuto4gZJEpXepHQcKaVMJom8de6fFtxYWpmhswTxXiHX7AUsAUU1Bv2j2r6a",
  "key15": "3PtCKq6XbPFM53NsZRvWKNCSUTf6uiyZwKaR8K9mL72CE6zzUQjqMorktmLU8mbKptt6CsFXpna7wFaqzLM33Yf6",
  "key16": "5wSUYbrqnbgQa2g5fBSiMtw4rhGVgMfXjr7g2tzk2C3R8ADaGEXLz5vkTLLevHLKxGTiUGB53sF37QuHm4gZqELT",
  "key17": "2Fv5UoZKmvT3vPPie8twWcsbFzFXCNpD9fbe86N5YXe6i9BFWhwof8yTFWhz6sW9uGQCRezLCGAdXUTDd8VWj54Y",
  "key18": "4PooW8eWM2ZNMmDujvR413Rr8mHUfwwR7g57MBcuKsiBbHcoqq3jJ4nCoFKGkMKcTyjH98aGYkmdCtraz7gAV8r9",
  "key19": "4dCAU2zR96XyGd7kYTTArzNeX7xJu2NpBKJVtWf4WMrEAL7EHXHrkb7Vesmha1b5ewrjfNc9oFiT6JugZLsQPAHi",
  "key20": "4j3WX9bNkx4V6AHeheQypzvkEVd5r8SnkvKskmE9G9za2w7mMszStoFqEhvtsoGeEZEfhtHdnhpHJ5Q8u5idRiar",
  "key21": "2pY5vfyhBRW2sQKvNt8YGFibcJZGfZYwDjBURF9oZkAHhDZSSXz3kXtgMtPugvGbBUR5L1GmcLkd32Lmyt2Ae57M",
  "key22": "2yTZB7XVEQwN3XAeu6LYywrKijnuE7neyPb6cxeZCVoYCcx71FrG32y93qDoi6myt34yKq7m7afvgEbZb63F4Jzw",
  "key23": "4vaaRfM5t8fSovg3DkSduM5z6czNLAWj9iBTFA54WBq2BwbJvBKXEyzfADVGHCgvAAazJqAivP4dw6225AUfiMhk",
  "key24": "3tS6PgttznxQqeR1vCqykQa1JpkNBgVRPQEEpaqjWYt8SN8CbNBpxnxJWMLjNRcotWuEb29CsCL74itcgr774csT",
  "key25": "3TATFK9SyNPRPzvy91hnyYWHnAF7xGpsFs5z3aPLKqQmUrAjQqihVPqe2Nio7WF2ecGdnY3qsjf25JfrFs7kGDnZ",
  "key26": "56QE2xy3yaFmLrkTK1ufG2MGmexyZbLwcDVjrCRcX1UqeQsg7Z2HvJ7oZFgwSSiNGeV1YN2S5cQKknQNEXwQ6AnY",
  "key27": "5Jbwnr22tNn3LwfoVgRthMkP3D1hP8BgXxzKvpj8BWPyGixGxNSf9HUv7fdAYBZa7YQQpmR4Eo74A6pgwQN3RmNg",
  "key28": "njAkVynNBZ43MuMZRzNh2zqqPidcBsG8EyyFuKvByKYwMUvhVQuL772TgfAWq8za3DW67wJtQabKxHwY7dp4iVa",
  "key29": "M7ytSvMRTFFti5rGXMM43C262p9fh1cH4VBzs5UwzDMHDaYEvus6axiYpzXngbBnJZ6gQSzaEaSjgghkuvG5TMP",
  "key30": "2CVpCVbbp7S7dB9WnfMhhTEGNmRbDpkCaKZdE67Edk7JPceiKaF1TYeD9zv6kDTCrPUpsryaqiZQEHEJv8NaNR4A",
  "key31": "4ADbDhYFkXJe1cGSqzC4ADgRepeGW1xWBMcBrjryjidL53DAH8DJGH9RQGZkyrLwGUvegWPrQEhm8vJCrMy3qqxA",
  "key32": "4YgTdPk8ZvkCrYqcWQUgJGqdpat5nsF3Rq5Hh5jdLhNc3VVC5hiHRMcGrCkkvcc6xUjRWf5iui9uf8bngdigraUL",
  "key33": "3yZkrN1Dv2acVXh5tryjZpovXUNNnRp7ehBSdQsch6gT8dCqgBK9688gSEebJm8Q48oo8a7g9M1YTRb34s9m931y",
  "key34": "41CcYwj2bVT7AmE63wufZc9wpTuLN3jSNC6fEkBM4oXQ4wYDYcash7vtQ75Enc3gPyaqXfJcA4oSgPKswW3WK4WQ",
  "key35": "65n7ysfEkgbAN8CMUounsWXCHApu7YaFgRwvUymG1u8drUwBMhnAiVeahnfA2NgnMjCWrzEuhd7J4SX7WtbXdYVj",
  "key36": "2tSuirKnwoWng8LnWQ9ExtbCP8R88fWo42yqdA8q98VGtmHadG1LxMythgxfVA757V3iyxixvfWjmkhv8nrzhsNj",
  "key37": "SHMSrjfaAZD18Xc46w3SdiDdHdsTNnNV2cY5N37ZJrNm4ZMV1aYrzZoSUkADEFz9qhnXvsJydsSJxRuBYWz9tZv",
  "key38": "2uMZzFViXtuCWnSRfnFk6J5RnAdHh9BryP8VV4VEP59q6ww3u5gfLsreU1EvK6DPVWemE8zr8jsAKHxQh7Zdqn6",
  "key39": "2zZhxwKwFk2V7T2R8cicCXgQuhczBve1WFBA4C2CpqJiHy9h6zCMx1pPYE1TwRtoK9MfaJkYTYYhR2PnHfq7tWJi",
  "key40": "cSVgb9Bdv8PLXbfJeq2jKozPq9nhdRuAhCPTqwa97Kf23RDFHFLYKPk5NzkwBek5nYyVkA7hk148dbx1iLNHoMm",
  "key41": "4Se9m8t5PDSmJCtCh7AG6HGmqadmUgXwxKcwtnfeqL2r93DX8G8sJqjbZrnRPc9szELkZu4AMvvj2xDMHVLJdKdh",
  "key42": "3meEGw1etj1XCKzHNSDdVeujNBxSqTq9iuGrdcfKBMmq95JCJjJYsErUMgJFa2XzpS1oEegiqiJvLhm3ZxM7V9xA",
  "key43": "2KtZJ8GfiJEpGbsJNXWAV7WwX52pmnbfwvThK7ADwwRwVs5XR7NR8AN3cKFpd7oq6dejMxG7tWc9wuzG7xi8ZPWq",
  "key44": "57SCtWhMyrCrA4MmGCszYWL9NapRvouG8M5dtcLVHima3VSrG4J3KLCj8BjE7D24meC5Ftoy5pjEcbNhumVV1tCP",
  "key45": "4dV8a86Wzpq2uQGjbPGBpSNbPhA4RfHvDnmb2ZrHh7NEVahDcnBTofE52FxLcYMk6Yh9G4Gd3ujNFbKr6kSg5w3n",
  "key46": "4tcuKyaLx9A1F1qnXvtFyzsLFuza46jsKuhKVhRXCKGnxcyFcuhkaFEFswW8EQw2DKxENo9iKf1yyrpP3rZTqjH4"
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
