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
    "5zV5CR9QDMfkZvewZ5R7hckMWE2zEstCC8yQmdyHKGfNdS1Ucyh6KuJuPSMpiEAFY66TKNEvUJDvFGfkcD8rXgrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DK5ycuUHFaTddCmufueHg3JqCSt8JQoiFJ317y66dv8p9uqmHqC9GgrnV3wLP5rm8LJCBZTg8iHoE5N6EXKurgQ",
  "key1": "5FiZ8g87MHRF8nCc7eEUJBYGvErhoJ7URdQKxJrY2vQjmpBGuHXBEYsADvBVQfqzznf814sDqBtqHf6ubK42LeTk",
  "key2": "5Ed3mypg8axw1gPUJs11m1Pge7xabSAxpzsHgecaHnbVnxLTDz4pAA2UwQ9zUUMQbno8MGXGNEaLkLHPLemQXCsU",
  "key3": "4sweZcr7vF4DBNJqUoUTsSmGojjuwHaqKebcQ8N2rGV32T1Yyg5USd9C5qTuPQS3i5WkTPCH4HdrqC9eTiw15wxC",
  "key4": "2BaPUppejvcYro3nerxehNhdPEusMFNDFGiyWZwSwosuS6cKHNhqxtMPhsBCmbhdEybULT7Lbe234E43WQwXrQNU",
  "key5": "51fDd4ABEmcpVysLSbDdq82PqYEeyKQhSPS9YSVxd34DW9x8TQVvKU4uTKU8yoKpwN6WN5vfCJ5RRE9XyBdmbGqp",
  "key6": "4AfXFSynjGry51MY58QmodNjQEbs8Rx39qAFn3bGhsxVupzwAvqj1m5CjrpNob8HVMkRjK2BM6MCv7qxybcanbEV",
  "key7": "382chmtStZeVcfy6PaTLkGAGvsD4tCy1RidCehze26paWrTxGSxepVYKMVTRFhUwsAHUj9xSZ8bH52DMt5R369Bu",
  "key8": "BVjwy4fLd8aijPCMsZwbJTUYjMJfc1qetJrJbbdciXptzdMr9c9qSsvqMexvtRhmgf6A3qyusmMCmw6HXsf8Tgs",
  "key9": "3PYMoL57RpDzLx87RLHPogRgPqw7keUSpGM2TeJ95Dnv93oBZaTGg6cfnnuCzRPXJQYQdxF9nxhDNRMeZpEoyWYT",
  "key10": "4JvwyPkEfNUPi6kC1qVWX21iCmYihigArfp9qQdMpSPgfx8Ss39hucWAfJuUqBrWziEDxmxvvHVmN6riuiMSAaXh",
  "key11": "2EYFAECDctnvizZ88bSMttcsswpCvigBW7VQRETuyf1vepBnZv1y1vanVWHUg3TpthGjYp3F3Wwe4Kg25QML3Tyf",
  "key12": "6mhye8EM582j78VWUtLpx45Zwbtsh7Hm6QsPMV8vxaHW9QeT8tB2sZQh5QgAXn9CDCzEiBgrwhc79XQTVjtoX6h",
  "key13": "3Wufy9dMcN5QBjnu52ZtfRzFVA7VCgDktZLbKzVhJHPmEScUQNfaQMVcv52YEdBZwyVHGsrSW2yKNmZa7UbKe9qk",
  "key14": "3Zw9EgftNPqHLUXcnxjRd9GMH8rjMDLdd2DQ7CJvuiLC18qfBE3L3bqeNJcBbpg9AbUDmvNkJ6peJYMtzu5YYSbf",
  "key15": "7JeDoCCLQoSc9ZrMobMxowrr5xE9E4j1Epto9mVww7a61D1MFeuGv15Wb3vmSbhZ5uZViWQZasrxEszpNTboLz1",
  "key16": "5FjJQfq5rENWG8harxnYeTbK7e9JdtRBtGEoiPW4jTQPxV431VS281PmB7k7AgHUEjsfhKY7WsyEvm9H2wFExStp",
  "key17": "2eCnGVwwcbEPvN3HrnmDQTjs7s1uVWeV6EPaoKKCHDngThEwAuyeLsanYx9YL44hso5Spih5SVVkxsz4hc7gN1uG",
  "key18": "4vW6KBqopzCh9En52M94pb5CzoEQJkRbuZyhFbRhufKvzPpopcvRnNKDygxMtffGr74NPxXcTbkFP1fauqWkwtBv",
  "key19": "2jLMabtua4QtjpEPvB2RsDL4UADAdFjyhTLDgqfTETktB3irSjhR6VPSJA1hQbzvnmL2WNZmpN4qcnLCnaNfK7LA",
  "key20": "59htxwuNQRyUbhbRHmNzdeCmjyairVEiyqUR9bYSa8XoZxmSWFPNYvtgjpKoEhmE1XeABMMj5SpMDtqcY1nNbJ5x",
  "key21": "2AdYxPKx3W8f9kRKB5pxtsEnQYa5vPG94TNEMPrrZUWoV4XDG6vkCL5YGumHNbUS5GiQ7kismP6hyQwk2Ro8Xt1r",
  "key22": "34sQkrSuf9Y2zRe132DuRXmdpJYks1EcgmEhmYuTeVCSKE4NNYS8FZRn9qNqpV4bDodHmMXC3B8QHX8kEFCWcrKN",
  "key23": "2UXHA9zL3z2WfttUSGKn77NouUJbhgerrTvYb62d8sE4LtuZdePiaEUyYseM74Bcy7M5jsuTxic9pxcWMerUD9B8",
  "key24": "3ApJQjHYAeD36EReMwJ5YikTghAJ5kx1uVdk8hCrHRc3sQBo9V3CGgT215vzitbapYrJd5HQT6yCVjhXve6iT6ie",
  "key25": "5UwewpjftCF5vBLxVcjCKyNXr9aQ53yEzdw2CCaJwcVxZdUdk8NXiavjGhnyVTx4kHjaRNVVroY8n7YVrbi4tTg9",
  "key26": "2Do328DVNwwPWHxH7dbjvmhASD6V1ojQVrkqTwgGPrzT4cFTQEZqJYEbKy6AyyiqfVB9ZTa8ra843h8MQpZSGk1g",
  "key27": "4AYfML2BHJ3rs7HGamLx5rQFo1j1fSoX349K6tZpP3ma3zJub23wkZEyJ3nP5rfH8smmRucyp3XPzCMm2XqPE5A2",
  "key28": "3e3qq8BzqRKXUtGKQUzFBUpKRFwb2yiPT6dNzAx3nR5MX8S9H5kC6NmQxhwtmEnoe1gD6hBcek1wxEMX8yy8L8V",
  "key29": "45CU5FNjysMxHFXfX7VjQdjuE1A7nXo7CebfGzgKAkxpArPsU3XCJRVKhgRxx38guYDRpWLqW2LMfzenuz8Y2M9m",
  "key30": "53hNJWJwvxtAYi1FyWEUb3YmfVSmGZ3GNyh8VLUraZXGtfadA4Vpajif47tC5HKgmGXwDAGPmmnpWcQsJ8VeC4H3",
  "key31": "3Rk9DNE4zaS1hc3gyYa28spRVUiSg2Dwj2QXrKF7B1pZjkij466vqAaxjmXjzwN5bRdyXsTxt65nrxvqpVa6REfE"
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
