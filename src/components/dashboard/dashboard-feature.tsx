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
    "31LSDbijn9vRXqiuC1wPBzRJjp5prQnRkdvuwCvrZ35Y3F9YH9eCqP1d6mVqDHfa2Hyq1SJ7fNdZiwUHwXKjK2wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SXTdmXZGij6pQm6DwYMh5R6br91jWR8RuU98hGJpfASXjgvTN7mnf8L5gCK2u74yTguNo8g8nFN4pwXRyXtLrT8",
  "key1": "52nm1QCWa9JXE9hns51WX7Jex83c28LqJ4D4YSLjYoFhnig1Dc9DtXz4RSWYcWvK9emv56opKfZh6cwAkQPeZcbD",
  "key2": "4c3Qm69qj8PsWLoUfPnHCVtr3Cnq7zKDC8XAUVXexrXag5oSjmPrXDetDeUybJrYTx1T7WqJyKiMBgak3xJtwzZi",
  "key3": "434XBjgwK2ERdnDE2vk9z3kNDCqqfMygKFL4M4v2YZjwycS6vFbD2fwLpXZzUPQcUFQVCEKYD1SKcmwzgu6fULNd",
  "key4": "5PcFTf1txPKgLexpuPCScdRxTzs4W7R5JQFKN7HdQGQabPLpnpmhFQ3E4LsjQ2Ed52H4MXKLribzj2vT7tP2oLvN",
  "key5": "3BaBVze5M4XsnDz9YWQgZaeM2B7eG6fQ71tkQ3vShsEKXddqe5iXLNT2z7X8TKhVyJ7R2BWeY4qxzxFaDHFRpUDw",
  "key6": "gPuBT2iahnN7GGWDjn4Ff452B5gopuC3EcQ5adPzHMzt9zBvrLXs8s3fjxy7R47EmL988NjqwVr4mnQtanAQTcs",
  "key7": "2kpazDsc89okqcepJBCakArX4UwjrCiEo9RwReJs8GKnj63yQqvJpABUfhZft5KdiBQyktgGkRFuZECzu73zT6fg",
  "key8": "562oY5L8wnSSD5qE14Pb4tdaWV76mkWiDy8CP7LPk4GCV8f29YxSGBe5oMVqvAFLFXQj2wNXcZzLYetN4aw9vKU5",
  "key9": "66sHa5TaCVaEfmsxwgcGtonSsM63h52BHWc8Zjnojho1dou5q57u4JGsyQcoFNutHCS6jwcQEtBcjTqXm9CZsm7h",
  "key10": "4MDGcD14D3Y7xKLVv26ACyqrYRkEduLmotBH8e4vgsos6rogemFsWADgyg3ZgvgyS3kqm3hxkG1Cz9YxcYMfbVWU",
  "key11": "2S5miWgjscuzHFvsLysydJhNsVqiGaFksqredogzbJY4BXrAUYNawMpCkoUSnH8CYV4LNkaxJv6GTCq1fkprUpXQ",
  "key12": "3qXXAB533BA69c1pEgRpsbFfemueD5ofWEsqHYCUpL8Cfsi5tcVLV7kvT96uYhZtBbP7cdEKbesc2smg1THUDo7V",
  "key13": "361nnRJJQf7aw8rfSrPnDaTFjB2PzPZXrNBRg2JstazJF3knjw25XXuyP6x7LbFKcW3KrtHbevPPWMz3jJe9hqN9",
  "key14": "2owyXNHqgtNGQrzf45ZTzqSJDxKchAbaUdNVn8iGCyxyAKjfDe81GLwsdrp1YKufLFyPNQFrZWshWEAcWCfF6E79",
  "key15": "4pXVzV1E1YHaW4R2dryGFu5WUdghdQ3oA5Xmr37hkSMEGbMQmzsQ4V4x5egRsafJKQHhH9z7k8F9nztgdAHgMQRF",
  "key16": "4zdHVTcd9f5LgBN8saE3r8t7i7sQBq3Fiy89T2Y9HZrZp1RgRok4UUjWmhcpvCmbGndsY9xKjrYTEoxiwPDqZzvQ",
  "key17": "64DhJHnNZMLWVaXM7SV7QDxJ7JJoh6WDmfQdWCrSvgZYZFdDZd9sFXKmKoZKzABCWHEwD7G5MmdBn35JDEXJfxUP",
  "key18": "5m3CububdiynhHdUirLPF8Ur87mDHJWHQayNiYKFzg68f3MFWVELo64hTeUudzYCjZErLn7LLiTNLbdd8vJhzmKT",
  "key19": "5o9WbFD64i4ubYNhVJrAhEoDG6uWTMMsoHdKJgL6JnezmRJ166XgHiTMt8eTZjLD6vmtzY2TE8DsYsKkRVsb9D2S",
  "key20": "2ViC3rxNz2i2ctuqRiu6u3i6nRKQLF8WiMVYyZfXhLgUUoy7MbwHuSP5RFhC4rAcFFgRvQMmjECZHbkodo5tpWVz",
  "key21": "4TW8KWDtZEeGtVRtHcFKNBVVFp46J9QRiQKFNJ8riA7BbQoysXkU6PND3ysRuebYahdz8Hru2WJ7Lb1sy93J3ZFS",
  "key22": "9aqXfHiT6BXhNiCjr9WFvVqqzsGadbEsDo27pd47DguseCcxfMzg6Qa7UzAHadA4UcZSVuCXrYtczh4XaEaBKAW",
  "key23": "6HJaT9aegx4qmp9mPvcGtCBMG32YzzLtFaXnBZdkMm9bVcZjfnZWUPTirPa5NoRCp2hL72ETbTQEV2fFjPrxfin",
  "key24": "dT5JaVeu3KRoFvyWCjAprG35L4irdyYm1kGhhh4ejDoYriQY69kHCjBr1ExvhEp5Rs3sED6uKKhhC2v47LBxRVx",
  "key25": "4CDevs6mhHfg9uQHSr9YSGXvcZdKUeBk9yC5v4RrWMFybwLvn3s9Dom7uMNZH2PB7fNQ8qUKcfxXF8L26em5MphJ",
  "key26": "4upQkBe7A9y2hyEQd8iVS5FFNHjKnjhegsz1Q66MCMXTvxqsbMDavJGgrESVpSpWsQD9ASbjvETVdufkVtGFdv3C",
  "key27": "5cvHQsbGfEZX6zoNWaZ8EXJeQTcb52FCDmVKvXYsSFSM6wwWMxsfHUMCCMuqXJTUZVQH3bksPxiHUt1ytok1pSBw",
  "key28": "3nhnUJKXSRbMQaASGVUds6qteujTjfs4kFFRCcE9pEWvX3Ns8Pxov2BwsjDu5t4DiKhCesQjeegHYvhgMQph1XUm",
  "key29": "HVZne5AdA3LSPSqunJBNWd5VJ8FXPReJzmWEeoTyFWpr626wzZEKXui6o6vTrnKHzXuCEFoYnLudookuQXmSgtr",
  "key30": "4kJDvTbrAB7jzxvGg3uLpi8KWFhXyRWN3UGrEVRwnQBJvCSmJ1cyrthwWf115pgccCbxqut9ig28ora6hQ6wpaVe",
  "key31": "GcrXzPa3rFJnSRctohVacBFHW7nUgLQxsitZRnW7K5LKd5t8tLvkvP3znwh23c1Pg3B9MpCDT6Zwk2y96XmPQnX",
  "key32": "2okVfPFy8tCvK2C9WQeUbnVKjP5Ntqvy6wZ1ezGJLpCraZHivahiQUteh4vZM6pGNB7m7EUf1Vqsm6NTntFJrLFC",
  "key33": "5yh9KF3jwDMAcuJQKtEN6ovuJERm9h5L1myZG8Fgty7jn3uRCase1oeRgiAsDm9nXe5WmRJWhok9erU5sTKJkVBa",
  "key34": "3tCBBa2ZygD8A18DtchRkmbVXtqfZRdLvqgGAAY37qpzz7zSm2Btd7jqJooRj9pN7wrBaWo6weo4Xwa751bsLeRz",
  "key35": "VEiMCBcEt3VZRngQU1tEYJZyjPtNbe7sx3a2sV6UYG9iXaActpbqooDKQpQ1tN1KZDZAsSre2CU68TLLyMWxa1U",
  "key36": "2KXxZA6VnuKgkmooQ1F4Y9YZd1o5qz9Uz2zusGsz7NmhYEyLBGpQTMWY8atuZeMLeYmuLNgs6kM8pnozy2UxqhtT",
  "key37": "5sgBk8EMno9mtqGvAWK5mbq9cL4Sn8M9F1ZX3KAHExyNMC8FoGCMYsgTrjzMLHD7SjCVNLwQpUN8ZGQBf4Gd3eWM",
  "key38": "122eLvxgXK3mZyfqmMQzrcMkbvE3stFcXiU8ECVcZcqUEQVme8RrxKAQwC55BZkFaw2dY43a7xRSNSnr59eo89vr",
  "key39": "5C5hVoiHQCqyJbXZCjSYgqXdd9cuo7qiPn5NnravHUUtCMawVkBgPURLsJLJ1KPnExfWeLxRJGDJvGzuTxnBw3KF",
  "key40": "AP6oC4iZgidh6L2xMMQ9jKGwRYoifHENRMGSvkaDpmw47RDi4eVZ46jESezdabksGgrMspsWk6798TQp8uqgqxd",
  "key41": "5trXGFDD8UA8fEd7L97SwoXsQB1bPgy7gCCmmvKvSHWvGUBjWbBgXL6PGPCZvSMCwteqo1jjeH7wiVHtbU7kZHyG",
  "key42": "2Vq1yuBmtmxjt7AQy8mfTVu1mJysvQCHzmvpJGfFiGKvMiu9MLyzR1hQSKgZPUaZ97SjDbcXrw7bJ5ia434X82TP"
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
