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
    "2KT1Wht98TKV7eo8HpapP9mKFEmkpKZKi6Fr9pDLFz1MDrtu8iWEsiknxu4ATgyaK7EQnvxVZMAQwrCoFRGAN1MN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BWCHP9vnr2njnoRxRFbGLM2jD28fh6P3kcVQeqg7RvXqJDt7kZE3BWNZrSMzBdSUq5Wp56pXmYUNuacduRJ6JLd",
  "key1": "918VmxSmn8tstcTbd37nzhkTzKocMJXLmR5HenWSm9czeh49TY32NhLK2fHHZzqiHGy2hwkpPJ4rNCSJcnqTAR4",
  "key2": "5B4pwPtF1KrwZCTWKYzztW7VgA9QXVy4Rdq7n59xY2gt9GT4sHmyLRCnvkULwJsbVi9PHfCBe13mWUTLRiN9q3K9",
  "key3": "26X4xtqav6UiuY7aLFjwBakWkiu7TUtkj4Ej9uNv5MBkgqXKyQDpH5vB6udKBYw5urhBqPrRWqMq27CZH43uH54E",
  "key4": "2544sAMJq1TSvY1tTbGH22vGgXqR7dzsWXD5AZdvRrdCsf4z3dpyD8bcaCXfc3QfrMCj4kxhmj2YuU1nwgyJQ7oD",
  "key5": "3okgW3uYjDTqdQnsiLnVkLsXCWd6x1D4AnU2DaR5TWAPTHYwv7bvFxxHPxxJDtKvFYwrqbYbQbXUMf7e7rMJxnu8",
  "key6": "5fK8U6ZsjhCt9qUZV1XBFWPzxAav3TaHc8mWgdWB3agAHmDrK6vX5Uqb5zao3n8JZCphNojkacavn1rgaCDBfdxe",
  "key7": "d5bYbMJTKHbQwAzLx3ikqEB5RGe62vRdwaixG3JRwyECUUJ32qhLUYvHN1SPBNxAqa4jG3xLSxQzScVRdhxsKZg",
  "key8": "3BLv9gwTRSbyjxLEfP7BncRUrYdQtWAcjJ6YM4b6ey27iZtFV424pf1UrdjQRm8S8nftNTCV6FQXhymP1WEUxwsM",
  "key9": "2Gt5nYp52ubftmbGSieRhdkxmoVoTaypiEFYQ9qfAutpeCR9LhFMG7vaz2ff8svEybmzXjYracew2deAkCGFoE3P",
  "key10": "23sXoFb7YqQE6LB5ieGBQKcWyRGDUSVs63QsSnVJKryerFviZ2nt5NSh1y1XcvoN69RXZLuy5UhxEKZSbQB87Umg",
  "key11": "4iXTZtWt3KYvsriFcBCjZZyFQVhF1d9GjtLm8p4qmNnrLRYrpbWeGsPtgNXZRJwLQXQQiNXJZYHkdA97xDFcvJvq",
  "key12": "26yXoc3CjTYorkYuWvoXcHSmqQFeVAEB8BJH31bXZJiLfWk5t9kwkF9F1rjfHqdSsZPDugwkho2qhMJ2L9sSvzDd",
  "key13": "24jCng99f2XUZXjWajgSP9WihQoT7CxKq3h3RrAa9sD8dN6v1hWc4PokHabAwF93Y5E4RQbksmEcWxvR758wmWuG",
  "key14": "4SBZjNtYhLHtAkPvKXy3qUaE4hPpZyf2fQkLRaQwJhrJBG5D2r4tqbxtXTd1mBgshbgzQi65WrJfzgXCmAVL36r2",
  "key15": "779pkF2F5PmdinwVP8G7xW77kp7Sy1cYLMwKg6YCks7dzQkusgbt3QTSpu4aTqkNRx5n7Y8iaTieJxRrHs5KcnU",
  "key16": "5FxJsZoRgPy86i4x3jZuSyYS3iFuE9EfK3C5fP9ayUDdZH55NsVJtm7ZQUwhuGHbrSTtZrCRGomZ4RiiRMX1aigV",
  "key17": "TLzbP4tJVb5o13367KNnTbpNXU6jtemSQ2J3xS2hNwM57CAC5MDUpqXphriTXP5CVkMKPJbpDSQQmV643XpCYaH",
  "key18": "5q3bbt1Wi5gUmxWUiD5De5gHAMDGLCqKS4NjZZCRADa9AuBLRZjXm3XndGXctBUAA7bKYB867awB1xtJQRBodPe8",
  "key19": "5hhEtWwzhHu2HTT58DT2TANKKgCPCKCAYT2CJCJZYMMuCAhyc9mB8hocDUTFtyi7Vuu3zDRunWe6taR5pEwKP4Sb",
  "key20": "23ZsUQJyvCLA8kws7Zsc1uBD79kTQz7543pvxXfYCgFwiyojmEQq7E9ENZLCL944qYoLnKDDB9ZoNZKqjXEzTPob",
  "key21": "26La4t3FP2R4s53CX4DFfEBMP6xDFVCXGpfkHvYWyxp2VwvDdamRRMvBtWMHh8QniQCocFC7iw66zQX1Vk6VtqRZ",
  "key22": "42RBYNKUcrQTegGTSPa8NB5ETa1hykaWSyws7iAd1JU4zuXFPrwdvegEsDJWjZjFRUyFSc9VNiYD82KuckiCrPwT",
  "key23": "zXmofiBFGF72hjSwaVWh6DPwi5M1zTn6NNyeLmwC1WVEFE76KACkk7ReuYJPW3wXDV6yNVBvGVQChjfnmsGNkV2",
  "key24": "qLPPGSgnidwSNfsqcfXT3gnyDP3DmFUNYUkj6edX325G7aAtnUiaJ4S9c8VVBGXDYgConj7rT9UGdXpmk18w7RM",
  "key25": "5XnRjZC4f91sWMtk6x2tAnoZYHoAHmCSeKTWgQVuvMwgEK7Zv4Rxmg8hARUdUDpEkCJQtcv2UqK8gmZYKLGShKJc",
  "key26": "5vfjWFpJUpM97niYcz778Jmdd4Cekp2DGxMiSfs8yGRNfCvK8mmMn7ifmXX5sNMXQNCJ9ayaSJjkfdE1bqcMP8Px"
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
