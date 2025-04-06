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
    "2VZjsxb2vYZwdw1X44cXphU4UaXvMQUvDGzixR9jUbAsVouPEVNYn86UajYtnpFWcW2mCo8xS79bo1UWfb6a1Ufw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r7b4ZEScnCbzgKxxPZ7wMxXDE5gpqSik7Sc53Lzz2cTceqDpejq4W3tt2Z11KbAd7K6URykNciyB7iY8nygMMTM",
  "key1": "oW3r2HbuFZmTkbgAQ27yprSPGzEKBYgt7L8nS3aN6MHHB8FvzPP9yTiURmZDo4UjxmW8pZJx1mDU8PtVvxNUCgZ",
  "key2": "4wPvZ6J3bDAKSMSTxvzckLqTkeMc7JFAU7MWmWhDn5bjkmuf47qLhLfts1Nmw2wXvNqycxNjGdfKRAeJBNTbw2cV",
  "key3": "3HbijkM3F9mkSDFtku1ghpY8JYVCM3cwedfEARXcokpqksdDpqjCwN7HaZQqZ7GNvdYBZr5DyEQJx3kdNSRTkpyc",
  "key4": "TqWyis5Yo5x5CzqiPZxoAFEafHftnBRKbDicbD7d65DCh6wWyyrVfGvMrSXgzqBXVgPmpvKSoWqZjA97e6EjraD",
  "key5": "3RndZiNuL6j8trM2CRerYvCK1s4oeQPpjbqpp4Anw9SvTrwyyuZ6bw7zqBQ3BCpZpnX7Qt6fKaXLM2aKHB5wDxTx",
  "key6": "4QR3ih42HFjHk5ndMykXahQmsf4NJfg8V3gzHQAaK78k5aPqetY3iQ94CsVeC6kf74Lv1LZXdgZCNr9auZTAveQh",
  "key7": "3TYQy4wYUJHzTwHS5vmqWhcsMvFcCxpjfBSnfES3AiVK9j6i8wg6FsGWe1UP4kMg5QjZxc3TymDJLid8Bo7qirqW",
  "key8": "37idiP95hUff9hDV7F6thcQcPX9PXeuED6fsNUVHVms9kDuKGme5ohuDPgND9LJbqf4egdmjqrmp9YDVADWf9iBz",
  "key9": "2YoPgcX3bvp9BqTEPHmr4wddNPbfgP2sx2w1AHPet7h2RSqVynQMtbpPN9q6fDSoRzSKbcu6B1m4DeGfwNKpG957",
  "key10": "29a16GbscTpAT7W5TGn7zGjxacActufRWnBPpSMxrb8asVTbiWUNtu1fmAQUT4XjKc9FPYPkAcM9UwU46y77HR91",
  "key11": "rnqngxwV1mGy73bCxSkyqErRcDEYLLsKHzdwExf4ufQFR6CxN4wKMZ1mdukqJqs6hrmEnbsbQrxLZ2AxLvw7Yem",
  "key12": "4U84xi7PKTdEWmaC5K8HjurxJ4ExsN7anc4V89QumZbRBTgKSNUTb2uJUiop6MaeWZQW3KXCGby9hPaMbVAih6UH",
  "key13": "2UwuzSkbraFXjC9dRtKBG9S7NyDRxkF5zAmFcuK2GUErZ4GiZsCe4Uu85g6o8KdAe7AmvDvY7ijdpzhQXSXhnUAb",
  "key14": "3RMEfK3G84NQGSCojkB2V857ap5zRrx2wxa8whZb8Xv8TA9aXisjs1qjJ3ygpf6rdopKPWvZWu37V47mgjWTHoL3",
  "key15": "hPFAuSJCu8cHs1RAM4mR6V1nZCfemMv99ArprXLTB3nyuqPdRBLH45onXCoxmMxquJhcJnsDLjdWicHEgeCWKKV",
  "key16": "5ftzbZ9ChH7ifwLcD5pPB4HbCoGf16GqYSD5KknB8ySpVJ8V7FYn2S7SufKxrWwtgMNAjqkM6m3tjFpErSnaX7wG",
  "key17": "47uzitnJVF9XcPUQPHE5S64FeuLwycxBKrkz2ptbLFaH4iGkoTRFAB3p8kBVqzigsycwSFbQKqxAdmhd3QtFLj1z",
  "key18": "3Y71ANX8BTT53SQzyMr5342eEY5FqhyNkGes6q25UkgPf1wom7Ja9EjjsauqbfsRwDBV5c16p4PGa54db8iECQad",
  "key19": "5TsdBtR2s3eCxSDWDf5AcSyXfJjYT7C4wv2JNHML4ve72Q23UXEiTmGNVwTsXQ9rfeNNhCQjS8LnUd9Y8eviQ1hz",
  "key20": "XX9FqjgBvJpqkdE7JdLPXnydDEkowQLqtkmHrVMXiwqTiBzbnXGZ6qf5ZJvTo7nPHAzQEhhzaxaVX1S24DQPQ5H",
  "key21": "4aVQq3xSZHUoQ6ZwAaL4v1REdH8CCD3Azi12mT4GUm51J8dZzq8nmUWouBgZAgRhxTjhpMR47roqJFLJmwERF5cW",
  "key22": "2ymovsvpozSHm8V1QcqQrstmVWScsftS5DwG96h6r2UHw8Dx9hVPNfiJFmTgFtUonMVDstHghio83DUpE6KzBSgW",
  "key23": "4yJkRXRqsP6eamh1mPB1Xu8Mi8GLETLK7J7AQnfZ5otALnvmLy2MxyLVbajVVEwv1LWUdphrckpnTf45aVs58ibT",
  "key24": "3mW24QBt6dSqUUs4kEo9EbmKh59UYc1NSszVMPX9LNp1AtGNxvb192t4V4u2qgwLj5jH4mpmEWtCerZc9QhffXpm",
  "key25": "5oWPd1DZWmvT83nzzv4wHmgyahixKUbJfCriuooBWfxCtmHNAfdpqjw7MkNThAGyejcgZCF7FiQ1puBxTfSWkQtn",
  "key26": "e6CzMFCKC3xRWBRQMvZNtpdFdVTRKekLGScLnFYHjXKoMAWfCtmoW1fkDhbd3QvhQNBAFvqhjLuL6FCPytjEduF",
  "key27": "3LotELyWvVujqyMpkxCkHmXfsNF2GepB9N3WtrrUU7SYLv9wLMsvnSVVtfWC5FzW82DBcrcuUTCsXv3GwTau2kuh",
  "key28": "56DcwdcAVqEQ455DnAcpmDB8vVyd4LXyaeGrqBbVvNhPLgwfQHcQrthZU8MD5LKZr1LY43PvSAyC54Ms45wiGqzn"
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
