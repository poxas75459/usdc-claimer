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
    "RcYdnpJsdQnjiYz4S5EKnER5sceRx52T4oYcv73NwvFGLGRUXPjknQEmKqWDDbyfoiBaekoQUNSu6HtspRd6kLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tjdkzeE28NrktWekEhdVRYJEFmPjTRkQAdh2CJAQDn19xr1Eix3BvRpVipouJpKRUnFSGtnCYxpPzCUuEQ7F4hU",
  "key1": "2HLid7kbMqp1mkKPiEq4YBTAULJkYcLvzWo2BLCJ48uvGm6Pzps3Qqa2piPuYjLp9XZP2YpFZg4KYrSPi3E8m6U4",
  "key2": "3UcywheCwZHqcKyoYDxEN5HQYeANpB8eG79ZWmtRKMQiRQPZUEbytGNbH7vgYcuckQFtcLq27JGsDQuCsFULbBDT",
  "key3": "JUwVvCu15uTSWKaFW5DKsZGBMCaFLBZP23kto9zPVudjFuoVtz2oo9BooNuxEnS7ofSFzSRDZ3N3bmqh2PpmHR7",
  "key4": "2nDM7RYgAHLkBBoJisHsDWuLMcZr65GUqVrwWSF8G1RBByK5BvVFTDcKH7u76caJQsuTRxRAgRLHZimKEL35iatm",
  "key5": "4fXpmxcqVXkCRK9ngcQnpDko44EZbaUsMkdBa11dwFynhfF2Dm1vYf43MNDR9k4L6QGZgMwmFPHTHUXQDLYpmCFZ",
  "key6": "4a9z56AmSVr1q2aQ9B8pBTosm9EShRPQ2WFfdze6B1qQF256AJ7L8xiEW5AkYq6Pqn34oFydH9dfJRmGWMwS6UDR",
  "key7": "45pLWf5ubNTm2oFxsgruB89bxWQ72LtLzD27TZE7seaLEpaW21B53grUGKRVG6AKwtsxHaDV25rZgjtrpaBuKcir",
  "key8": "m8jp7BT4RBJfWycMWU2oC7K6fEmgZdKDufbcooHAeCXXb7P5BjRt1sJHpxZgqdMTkkX8Dsr5aveCjLHG1KZ5CpX",
  "key9": "4bdm2XZo3qTFpdkaqccPu3imMSLqPDTkvXhdkvbLDEMWFZbcpoV4ieXrZ762Vo25HNqS1yTSF53cY79gWGbxFQx1",
  "key10": "TZHEZ2UeDvoLXSpRtknds3JS9JUqFxJiHXxWajs5uz67kzrBRP1GrHMDDQWJPrwE8ULBrMwV2mMhMAyKsyN4z2t",
  "key11": "AzAEiSR4TqBdjEBtYfs5KBTBy6fxnGeQjQHnQ3NmaWsDhWtm3v58EsRV6hjukZNX9Wokf7w4eEKkNRkXrMCPDLQ",
  "key12": "esy8GTrzvmbbJEFjGG5B6SiggTsiWw5eR2R5MtZEAu5zkyXFfPk9UPxDYes7SGAwZahbV5XsW4EwYu26N3dnmDq",
  "key13": "Bw8fc9tPXiUQz9gQ4StAxBnxRgoWqAbJoNX1cbH9uUzhpvQVpB9XYmbSfEEPSCPqnRrtW8uc2MBddP9wz4xpipA",
  "key14": "4E7wnBKN2gAsdjL6CUcRSnDbJjzFVuYbtJmYgaKVasRpHmQSeyQ2yhDFSUykuZuge8evdrEYdCErwEXUpu7RSuyg",
  "key15": "4u6NiGZezMg9dpxeqxUC7Ngx9FAaXxidzXgE7w56gmfGwSVhzhmW2fKrn9SfNTQyMHdusB58D7WxBEhU8gaGnc2e",
  "key16": "2VuDbohhvNQEtbSFkCU4TnzUkJ4ezcr8h4fVbHVk7dXre5hmQBAS1MX8KffSkBvqc5QcQ7Jd6sjgm6cTVYJUzTP9",
  "key17": "2awoJbLvzbuBLcnDCUmPCZq8Cezymdrg8bKZUjdTFvqcxrGZuEHgLCEQw9wz3csPMu6oxdgC6C28JkfZ5xuqVXsq",
  "key18": "4Kgw9o66RRPVUaKi4uTih2CCkKUxKiEGjWQkKkbAB8F9piPCweNSepX53zKZqZNUBMsumCJrynCe36BLGj6LAXAH",
  "key19": "2AQgYZqQ92wx7docezFnMKtiEk8Em3ciy1UQiRjqu3vRjkpE3A4A719vsoFkENKgMx8LMxZWfAP2QVzjvbzzGV1L",
  "key20": "2EZRQwdJSC5AMiFkk6yMykbosgMTBYtfM7X2hZnRSgac4gHTcoGY49Lvvj2bRrugaNWmwoUannFJvbhTesXvaVNN",
  "key21": "5FixyedemJxhTyKfKaqWEBvKrA2ZCoP2bwGahaS5y619u8CMnkucZzFLFWKpvNWazCqEvU8vfUaMny1f8CoSUaQw",
  "key22": "4RhiY9QekGMzQ2yEzqPDQhoGVbwUTwLdtg13s34u8q6NpiHkZ9CoSEAydBxjKcYVHwEgPBuBnuuzsAKurHT1dAEj",
  "key23": "27yTKH5RHtUxtXmQiwdD4yYKdb2fp1RAEy2E4gEkibWHv4wyWMqsEoe7cjuZ2Ao7f8XCxmEfGkJq8YgQNB9oQNmj",
  "key24": "2aU5ftHH5ZqrZHABM7LZarMYdasXaRz7DiS5o7zxTtMMEkuQv2VwL1QJn7dspnyCqVRPgVsKRxfzhUUQf8iZzuzU",
  "key25": "4uRRCNhpaTdN99t2rxtv3hEZG4gymQsyH4sKTSupDB6zRNrTJEVuaNNcjGduv9KN6ad7UXz4CyaPKA88mLgVBdA",
  "key26": "okWgwtQoFUrogqg9tTZKkriyToKJfUHN6ojsWbEUNPHRDYomDuL6erLeFZ95YuDU6varSgWdkTRxY2Qdctmadm9",
  "key27": "5nrnEwzPc3ctARSNJVeq6z53DCuSoXG8kMXxxgC2mHD8UTptiXJzGhgKaCPpfva58jVtT4WNUTqmqTHGHQD4Dpvx",
  "key28": "3ndJxMF8k344wLTuswxJqhQdfphbHKmWvK4sfvd8AG668zzoRhz7Ai1A1SbZZsvuMjEtPvEjcS87epqE6izRsVf3",
  "key29": "y6ZBmWmLMpJFUE1hvrZEmWwC5QFFCeFGfhqv4PFkFUorvEJ3M6VN4NN6ZoGegz55cFyXz8Vhv5BbDi3caGbko68",
  "key30": "3gTig3q5tHcn6DmPChxSiBybm16V1JtVykjktdvfrv6imDBZ1yGRwxNqRcL4EakW25rrDEWFE4135gVoYkFRacrh",
  "key31": "2sSi7hLvnWZWfCgRXtR4kMhZVyXdXnLCKjw12BzzbzSudp8uXCEMR8WLhdboSbX1bRdqAxSHB89j7p1kWUQkEYuT",
  "key32": "5YnjYPzQBbxtSdNSZucccZX6sAhxocGGzzLze2K3W7JDTxwB8VZeNNumsaxMzxtmNTienhJ3JFHSNSPQtQyYo6Wd",
  "key33": "34hhX7cKi3cHQLKv8JsEhYA3iaq4EFXFCPH387wJQNJFM2iBoHmBUTrkZBzPdmiBH9ZxcULRN1h8ueqM1nNE27Hv",
  "key34": "5YKX22spkbF7FYkaBvkodydX66iijDqrL5DwA51qHt3fzQpNYeTZDUasZZMAxbgJmgbNxghCUR5JxuVcYrDATLkS",
  "key35": "mWzRTa38psDx44T5pQo3CTzmbJr4mL53awoBMGjj4kB6tGRQnG9j419qWXVdLS6vrN6fJzrQ4oQhNEofJ9C7vGu",
  "key36": "3Q6eACUssfEKyo6UfkEwnnLgEoxN2JEfwUrMjqix2ArvnyW9QJE5FAU7uNCv4aAevQC4m2bBE5emasEG7UAvPhoT",
  "key37": "4CxrBSgpS1Ch1Jd2eSM1nnSHtLdWK198GwRhCfDb8igCJJxy137AtcNNiuctNt83VzSCEX59oWj8UToohsMJbNpx",
  "key38": "34A2fPoi33PDEpaGi3tuGv7yo4YRztVk4FRTD8iagkfcqWwvkpQzrmEyTaHEQSu6vpKg78GEbpkz5hztmrg4Kkgx",
  "key39": "2Uk4u9njTaAAzdxMwwNrUiWvACvPM8H2YFso3va4zjd4LfpCVh6Q6EJfstSqseJBqrQ2kTuCa3tacwXpjrJdh8Nv",
  "key40": "5nb4fu8apuk7UT79mTU9nnznJY7HbvibvgaUpkuhhmCfqD1LNkPcuFe53yc5qUTQF2f51eQKPsGLRFXHC1BHBXYo",
  "key41": "2upVuKB9KpKSfZiwBdVvG1Go2LHxZpzUAYkyiVpgY7CJ7EVXgQuq2Fqsc9mvGC5GUb6GL1PmcMvTw9tip3G2ZmQB",
  "key42": "3nyqDzAKoCKXDfutzjxttNU3tmxUKJm8z721w3jDNsyHASRZLePdiaHpdP3HFju8o4o9G4APNfj2UEjFjPnpwtzB",
  "key43": "3jB7UVYnNqfAMXkBry6umNGtPJsZDrUAjgCwJFWj4XQZMbi3mjtxVZLKzJrnQn63DoYMVRaDqHZ3eHdVoCYApUSf",
  "key44": "2uU3GamGQHNLwCuasPr57Gt9i3mr7GWDFnmtW2fTTESv2pwAh8iLsQtkHj8GbFEbDKHHUqxxc75q2Erjwa65SeW6",
  "key45": "2CBWyZnbGps7Kez6X4vi9T7oimJmSaYJajCCEzp12D5LZa3vGdqkM14WDoRVv1WerP2Jsu99FAqYZkTYgXT6gjWa",
  "key46": "62VZ7PZYLhFGJxXHYtrZU5dJikFeEWrvW378kBWeoz3RzV7vEBzmUGCQAob8Knrxwp97n2Y3jS1vehhLNG4ggSiK",
  "key47": "2Svhg6xYv3Aosn4MLUwGHzU84hgnvQMGRZtzEcmDCVCrUq1JQbv41KNxJmqxFemdQ1bcfuoErS77Pr3Dyzs6zBAP",
  "key48": "Q7SPLoCnTy8QNKGZD8ShhnzPgpw5xzGpnCPMFreCm7Mjye2jbniGGbjkduPaigZGxwF9cG632XwBD5de7cZJ2RR",
  "key49": "5AVNqTW3EpXX6dDhq6EAmukKuKUr8s6TnaQBZfxULCB3VRNRBPJZXJdTkEPyu5pAkacNJz4hUimP3cLAGDBM9EMa"
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
