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
    "5c1thrzFWVJUQEmvk9uYLppq73SUA4KfeoWj6UBjywNGen7pDHgaAh2UuHcosZtMEDqP95c3EHjrkLhgU3AqZuVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EaUK1z5woxMEvNVsjQ4Sne3rN2uRbFHHyDWTwzCRBcX2ncB2svigo6LMAbeNHWXFMXVxSoivVrNg5CmnpbWkjrs",
  "key1": "2nYjrq3sVceq3tcMMQZUouYNVjp8mVPi4F2rTP8sphzuqgPLbPS9Xj8pFpAcqnFnCLkmpPiUkaJ183P3hSdtuJMQ",
  "key2": "3YhJsNNhhZCeZABjuuwtwWUU3Z2cEyporrUe7gZG8ZRQkLAMVF7zZvz1xy2PSJJrMKSKfunDE1tBFXPj65PJREJK",
  "key3": "4K775BoeFANR4Gs4hTwjBs9nxxgm7CEgyDmQbt9gue1aE3LLgRQWaENqoc4FZwXSTBKXPcfM9mWX5rmnTWUTxkJS",
  "key4": "36Mei9WUFHsSwvoaTtVv6Z38ptremNpjSGH6F1tpFwyxxdaqct8nX2M5k7mCBm64ByYBxSt9aG8PHdJKRm1tMTsu",
  "key5": "3u2NEyPUbCWT3bYzpmvQMmF86Nsamp7xiXwp4gxgB2MTponKptR4dxgFiJNYuvsJdcM4K6sz18hjXRJy2wdLN1mL",
  "key6": "2zxpyMsz9LtZwjHjmtzsnyuVTx8DQPiiYGWycjhLMKX2kDDx3nxUSvTX7FBxi7uRHkfYocEXLFphAL7B68rrH97k",
  "key7": "5diXqQ8xYbeS52KNbgvpiqTCK32ApypbWt1oVnaKEsQyAMuD6NVthvFsPQHy6WkiKBLpK1zccNF7R6uydpSrab3r",
  "key8": "4EuecSmjiXSRGjA95GJKAEstQF9n6deuu6VyLBBm12q7eXCp88HAkifhRhfANUhcrW7uCuHjAMtjCL6pwcCs5wBc",
  "key9": "2oUc8kajHu7ArXJAevyek3ujFqJap1AGaMrsz5reqFGYDhSTPjCTxee9ve11g2JNKhNViV4buKYju9bS6HrbBgv3",
  "key10": "p948rnzFzk9UdYq3mvmV5MDM5ouEYP79xNTdXtyVfbr8eFGgJjueGN3Z6D6smYEQbBqYt3Y9HkKkTftvPqBiqCf",
  "key11": "GUCSMivQU5uxtkopS3jx9JaUSY6yXWyfhyZN1ZwMWacmZQ6n8vURGj27aM4FXj8RpTCWy5wiEuYQdtLxtSZW4Aa",
  "key12": "3dgTn4zvZYiS8wAmuMjoy3jQ3Ri21rvqid3EM4Q9YeycMRSG2gvuKh2ytibttJnZUWHz5JvbSiZwirnoC4aM22Ds",
  "key13": "DfYRiDjrmFf2eLPjouc2dGR9bf9znF4taVDndx6W5QQLMGsPoACMv9gn8gxPzfwwGSA5JtQPD88UhDPdQfBbh1Y",
  "key14": "77Gy5nS1DFpQ58Zvyr6mhmLeXCPeWJa9iQaLKyoB1VKcYzoeGnEhq5jTNr8BKWvbVLLpDf2cCv9xegeAfXMMcfC",
  "key15": "28zUbo33sbSzaijh1qbPeXek6rcfqpzqPwDrW1v6dTK6TWJL6DSxYaKKsGaNeXnJ8Fb56xdxwfmdDJz8bh8G4Mvm",
  "key16": "67jfAbUzyGkm7w2UfJuXjWeF5tGJdHDcqWQHcxvWmE8KSwV4pxPx3bfndfM2anXW1sfXjJAnKpr3TB9CoTWxqJFT",
  "key17": "5NvDvxi7haH9t8B3ctKczmePgFo9A3SywayTUGYQmbAQkSjzQeWs6HPeJVHMnpk1thz37gv7ucuE2B7B91gEpfA3",
  "key18": "5NumtTzuL4hTLyhyPTEXVhPAzgJxEG5y4p3hL49HdCDh4m56oNjYPY19sm6AWtMTT33VKGrhA21ayMNaEaCAnAGP",
  "key19": "66ew5NVexN5YXcoigZKm743dQZn2NVPfjqJNHRTGBHEnZEJfqoj4HRmtpbjNR4rryjMW6wbppbwD1KAjmfdb11tA",
  "key20": "5XoodddPqLZpkttXDB9i55Jmig4jSK5ijvCNSMh6VCF5LtAnFsqLg5Fx6hFfGBnnkxXfjMG9mdAwJ8BZJYvKwTXh",
  "key21": "56Z3egAbj4WYhsv7YhdrbtLZfChfMACdxNZs1hNV1iLGHPT8CWqSWd5xEPkFvWDow16yiz4qg9ZKkFkYZM6Y1kFp",
  "key22": "58efevngNFdL8kGewJKQezSndSnfBKqofPPenuAgAp1bkbcgEGhFwxgxezWJbDYR9JTrkJ6ymQAbtUzpMMFQr5gm",
  "key23": "5PaorBBKdUqdZYFzHHHCabu2EM9mu71UXvxgZPNLGaqiEoT5HSTSdLxHreXvbP8aW2pbzCNbuVXq8QEnfQvZRDrM",
  "key24": "3WvkAghC2jAjuz1XNh2HpaDtbaXvFSjHFZvDKqJbq3UM7WM5xh7Bhz4LpYJEQTfVJ35ME9ekyiixj1za7qKb4VHL",
  "key25": "5vo9kxoaZdFfBoyRio2eddxKMgCK4BJi7EjG3BX6SskNauvETAKWFrDNRKMkSF5jYR7ZmsQ69p8Dr1mhfgKwKr8K",
  "key26": "2tqhVJFc6KaRKFzia47dKSGuZiUZGCnurLs2cuYAw77YPRk3yKVKRRwbNqQXxMyN4pQTHry1GifEVA2SstbapHtT",
  "key27": "3JBwHRsToyYxtCzpDbd5vhtt5P8zWPxink1514BzrG1kCnr3pAJCKT6TPsTEbvqCZWBZuueVFVmV73WisdvaRgoM",
  "key28": "2chaYmzsmrGQfxmZo4undefMJehXQA53kHGotEoHhgrdKozc3EdsVDdFTUNFUzenU1eNrJHYGxqUiKUyo1gazcU5",
  "key29": "5Dv3sUERAA3KA1SsgYtgiVo4XwtEMYsVPuqntjyqdBT97JvDjA1WmRcgQSwVCZsZR81h5Eu1TSDiZRGyvr5rvAXb",
  "key30": "5uqaxqF9JwQRFE4ktgKMqp7UdbJhZD9efEdKkQEv19Gueq1YhtEgQn3tevSr9NMYKyh9sg3g3UcxucXYF1wR7A3d",
  "key31": "3g3AbwiHMMu6MDdck6w5eF5vmMn5iNuXpbWjp5tzXuNvdvKdGgTnvyeALqPsWdyjZLt4GJwxpKbgpneWRfKPC7Ge",
  "key32": "4McXKbxVkSrCjKaUfizwH184DLz2tBupuiszgexojZdYf6uE852GS77ZA47VVJWLkiFA9xbCzwH4UWPxn67P9ThP",
  "key33": "5xABBZKnHkKaDdaRTVfDcCtFXxpSWU7Qwq4YvNsMKdqHTdpXFkTyCv8jWRqUdZFhUK5s9hpr8QpMZ89nL6yrnubB",
  "key34": "4cyjfHhyWAqPmqdUKB8SYWD6MiGnNbHFfeLC62VkQcBC7CBn2953FgDTn2SgdabKxnyvs5YUyDhn8w4uD492neFg",
  "key35": "DTCD7JaywwtgSYeQN3Wotcy71kftx5cHuYeiJ4SiKV7L1SzudoxqQ8wBfqLukEbddVv9PYEM5Djjn7YC5ZgUyWD",
  "key36": "ft7vv47L2dxBdLZUaNBR73zu3hZnnzqmdLmkbuz7BY9RJAaXHnPDuRY4betMA8VCKBCHQBN5cegL9SoBkC8qtrP",
  "key37": "5T6MraQ7m2T2GroZHgLvDYdvLigVvcwh3tvrn7S9Bj7FWLYg1SBqYv8qv8Wt4SznBMBKVDNtn3eEsZekPWi2vrJQ",
  "key38": "4ZxqnbQZtyQ4HiwGtjSvZwgshbCoNLT8V7hHHVpNQY4ejqkkEuUnEAijAL5c7zSTCgnzKgnmtnVkkv9vgKaDJYKY",
  "key39": "AiVWj7CA8bFYBzTgu8XnDXtm4WNzyfhMM4SZCEXkU7dAsmjSt3gXUzZWs6X4rwjZPvBoirCDDqjbFJh9wsVjtgy",
  "key40": "9gyqpKBTSG3crjP85N3dacWAskepT3WdtdzCWvjokxYeZ9krgHZYSd8tjsxALAfiHbqjG5kv49pGGMhSGVAHLoi",
  "key41": "5qjfJJqgXz4nhxb6axg72RmJsW9hjZKGX6xq4Y5f2iSejC2NZ88M8z4QX4MEwr3ezbnndaZt8pgghW3B9HHDRKQd",
  "key42": "pU4S3yyVhMNZavA6u2fqSTh37g6sAqj5YrHCMNpjSEPLXZFvSMFLa8NUzswd5kpVAX6LMre3aMvc7LfLNK5XSL5",
  "key43": "2b5nRwUoGWMGQLPBg8rkw1MbXFSKN7aqDNwMEpzveR3mKhkQGVBfZ9Ce65Y4c8Miq78UKJxNtBQVwsQhv7P3JTow",
  "key44": "5dUicuwyH6LmcweFPSvZt3EQX9z3cySm9qS82v6xMPjbYUNqUcHq9HXr6UfsssurxyBpkJ647DfHjtRLC5QLE8Cb",
  "key45": "4wRNrVqLnhKTd16bocGakXKDabxPQ8zExozq7Q9ZEEzuYd18B2HhBsWcMmcCAisBVFzdYdjhukedZqxmPT9m1b2T",
  "key46": "4JWcMLHnHg9ttqAqwckNdUz2aH61h5UZhg4bLNFHcpkEBMvqhBPg7uz3xd6ng96tyXv1RToL3d2dndsWdzUgZjs3",
  "key47": "4QjwezhZPiZrdEibZRU4wepcrR1GgYfJxfduNryrV52RREWaqhg2d1xrE5gAjAWpZQpDETNEbN3V6NMetD9WkE5U",
  "key48": "5bm2QRqsBVUH9pYBRtBzVqLqKsgmZvQKC5wsJogBN3TPGxtSmZMz4LKPM9YX3Wxwyx5uGqxPC7ydC4MdHHrxD3w3"
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
