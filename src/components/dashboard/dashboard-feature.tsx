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
    "4U4jtzrmzygfBczjTmo1fRmanydjvANCrqMRQgh8GW18t9WwCxbCYuDFtvnfEixJLpP3gvZhgpcvYSo3YH6VF8XZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d3eBXAkYhTna9mqnhdEmY9MjdBr7mhbMAQzkyPHeVkpD4gFLNGCDriHPFn3xyLvv8BG2YMFAMCuUpkwWAw1i8ze",
  "key1": "5AxPkepufyDNac44yz95Q3B6v2qFr4HGodwrtFNeRG2WrDh4D6x2NiRUnfY48e4aEMLo7c68kmPEohJoGqTN2s2d",
  "key2": "KtLc4uZb97zLJDe6K2YHTMt1MTEq6VFvJNrk5kaNKgED3Sh4Y5AytAv2eKV5BDRLgTJGCs7FUycQw3bwakZNKGC",
  "key3": "2AAHMA5EgXqNEUk5uRPaAbxTo3z9d4iqADzbHSpBFpyRVZnvMqxL8eh8SmuoKUe1b5K2Wgg3vQsEx3HM1AWHa7gD",
  "key4": "3U7PzX2oKwNZgtrReMternobLei2Pda1PMExc4qt4CWrCrpF68k6PYTnCybjtDnPEKhX1oprehZGYpeaq4Kk3Jd7",
  "key5": "55M4gJRNP4V3r2dhG6r5RDtdSQ8uZ5zB2V95BA9j7JeifX1RxGXAXxDVPMPAd8thpuKSawMUWrsfBRrzAShTade3",
  "key6": "P11GasiJkxQBTwvcm7qg4U8HqS5EzG6aPUtYZV3P15wqJE1QS49q9NVG28K5X3ucdcFvPucAG4bK5vVWQZnAtCe",
  "key7": "3N3jGwPKMCWfxN9gKs8uZ4FEdcfrKPGsa4TPrqFUEsrhrLg4anAZDAwNfep4PNaqPWN8neLdj3rW8xSAPurkzV6U",
  "key8": "3V3jKb5WK7aEcQ1BCpymm3eLpqJSRShptENUg76ToCWG8T91a5u7w7ooHFJ7qDxVcyZAxHmtTNcjsXdeeYomuARU",
  "key9": "4jpvAmhqaxZJe6RH8pMxAueduWjAwoMgtUug342gckhqLaAiQr8yZ9t9BxByfBRJwAy8KC7RBduSfmuoY3spr9pa",
  "key10": "5PnqxSMvaGvzviQkSmj3LAQEDxsfDbNHGW951bw6Cwbb7C1me2xg2UkM7b73emp1odjkgGDwZhGV2zS8shpCfX1x",
  "key11": "66aknq774U3D8PpzqUoe1He673Ki5Yc31SdJdaoE2ksFVGf9ZinoGCn6JWLz1j1J3F1iTU2TmfDU8YrBhRYyLDXA",
  "key12": "57jXJsh627QAH75rWy6JvS3mi6f6WmjuekCxFPE3x9StEQy822G1hnVFJQDERsPPGtP8eJfcAFiSxabrGuhanj2q",
  "key13": "4b4LrSuUauTzHw18GixyLbHvEr5uPnp13mSTX81D8GGZpa4r57X4JDMNts4oKZbKiGGMwNDLajDicSJw1JKSGxjA",
  "key14": "4AbHoTVTnv6KqkvuMcYj8X6AJAc8g5CmJXfaychj2qTqbqyqG6cchnzYBZbhYCiCQoyDdKAekaSQbNFPh6gVWnM",
  "key15": "5bksRUNv3Qph5foVEoiBXTh8oQFcbNkzNquKPrSknRtCYycLGoRxj7s9p16fDHUNso1z68S7RJRR9izXhckiKu7Y",
  "key16": "5SQMnHNxgF1uvzAYw49Srrjkw5hGkG1DPHyzf7e5zVnvkJYmccMpoKxbyt7vwhnKD8L9NeB3iCkkttRytUhePq7p",
  "key17": "z8KwhDpJ2UZh3QcdBX9TdFgRBgT3LZruhd9vuBC791VWbNFjBQ9xj3ZGdeZd91WcHmek797zuMP5f1wvZv5dNH6",
  "key18": "3JK7pvAB8EN5VM9VPNAJoieKzJ1hV2dURe6k7ZA3Anbu512NrtQPpMBjktfL2aU37PcDQbQZ4owd6vebkdHDnPM7",
  "key19": "3rNJvS7p3KGd429iMsGnkBEESf4qN1nxEMA5sumngPVPK5SmUXdc6pUSUkuH4cGoMQnzM9dskZ1E5hRZvWx6gwKQ",
  "key20": "4T2drsAkptQ3k21A7rjRmnt9iv1E8A2mVUNZ8BhH79PDEeYfQtYHaWEhNk7pnYLScYMbEmffnyVjAQNW6vskSMLX",
  "key21": "3d98RSCvF2e6Qu2uQoY5LansXVxdgC19XYoKorAL6e5mEUaYXHJvAfGqnr5UobC4n85y2SESMwh9B7bVgZvDCXqB",
  "key22": "55j6sJMEdPmp79hhMU3ZL4brxA7AJzs53NZ3r2ki3PegQZqcTFujEjJuBTVPeDj5Ep5HRjwqTDH3Ecj1CPq5dsbu",
  "key23": "3Y6qwbCifPL7CSyP6QXpteKBaHejzkGj8bc8RGgkMmJknvJHjYCYJHbBCQJFZBy5YyjVF6EvyAuUGDm66CXH2tBq",
  "key24": "TgqDsJ8imgkHuVYHY4WJwF4Qs8rejUZq51DZ11nwJJeShNKBQAdkoSjTf5qkvQhUyrmtqWLFTwmEUFbgxr6ffjC",
  "key25": "3KFJpnDqHWtXV7kSuYAoLgJnQy8DRtanuYNXFMjZjZsu7oWe89uGXn6bCYFmdjipZHcbRUUCBV222DLkVPXDqsW",
  "key26": "2KBmiDyxDnAMRQigntnjFMHMCGxv9yaZ2jhigNt2FdhqN8LBJfL51D4j7fHHozhf5GM166gGyEmA1ikBQhXRwbP3",
  "key27": "4MK1Lh4oYKyMcgDAdxRDc3zU6Tt5iz6DTSA1w5N9rGEq3sfyDcQgeciYNEBrV7Q4okh2NaKmYWGim7VSzTXm14wv",
  "key28": "2Q5vAvDfAJbh8rPfLzcgPfWhodEX4nMUMgxUWxyQCGpKA1GotWctoViSNucL9fP2MgoRZP2Q8KoAfnkP3vZ5Vtyi",
  "key29": "2pWQ5U1EmFsn9Z7GoZASiunFENNWcp3rtB9CJGuY3RR2SaPbRNVV9qWgrX7ds1ZG2aNHrmKS1hm9Zvhw4jmGxoaT"
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
