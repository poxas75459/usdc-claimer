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
    "5adA22YD5fRqcAZU524cx7HS8yBFceXc1SRCUnF3y6gQbVycVmVTkYwCjeUCo5tZAgV8v1cRExiqTcxTef915KXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ztKD4mJR9sumjAJTQGAnsz84vYQYtjsZP7pUzAM1CMHn61CsNwkzRAdf1UScUEBLs9m4EChBuUNj8VZxhkcY371",
  "key1": "3QY4zzw6ciAj8d9eoDyz3oP9h6Fy9gU7ztpDgFv6xvopTDMWZ3URZ9f8WWvLruxmjvxJqBM2VnwiX5bzk4RwbhyU",
  "key2": "4RsHrHj9bcpgnppWhwQ8AMHvUXPXBMczpsM3s8i8xirDU3WA6vLQ4MSAeZfEswYLJA7G1nsGHrSjvYRJDETt51nv",
  "key3": "28jFqGiiiJUhgaXKtffG9FUsXmhmJVRpgSRLYYDsujMFmz7VxKd5Kks12rwL2FinPwAQbMEZEgu2v6SM3cLqZois",
  "key4": "3fqxNpu2vqsGa1AQyCtyKFrYCMTAzmdY8L4Ufd9yJbAH8t6v3cAg8TVfwAG5W8P8XowBq9mPVw7pqFnjGh4ZrnZ1",
  "key5": "2EZBNkeS9Sefzup2mJbNpDpAJ6xb4V7LKWAtm1kuVyrX2QRXRPLAyDCMewPhRTYTqTMoV3d1xABgRbhFtdhGHxA9",
  "key6": "5ad4bDQNGzZdKs1MXszNmWwGoXRbi5rhSS9qpePxgC7aVVWPewrxb3W7F5YxRbVAvP4a6f7xn9PmxfBFCfJS8Q5U",
  "key7": "5HisrSHwouCyzUhNzGozPt6P5Hnjj85C8NXabPo1zrx64vi5FB3L9zfGV5f5bKj3WhTAQ6N4RjZtQFDF1UQ2dXr9",
  "key8": "4aF9kuQHnDhEZHrA4cP1Tt1oRk4R5f8HaJ7mUadfewSf7heDjntmKNDYVQNfRK9dgKpPSaDTkNJnP4PvqTUX8eJe",
  "key9": "Yv1A3GohzUwuY1LLN9kH88Ng7KAshLX332KrDSFaFmuEcgfF5Ld2rFbLiZ4sWhFrjd76DgJa5sZV8N24B3aKdUp",
  "key10": "34x5BrQJa6m1PniUswfCHkWY64xsjJ9JBDqjvjqfENBFHbsbyxUHuga4ouDMDtPP3ZPLYmF8GJHnUznJUxZYKoUo",
  "key11": "5MH3YshHexf7mJ2p6S7ZQq9Gp8dvFxCXX7mBFrCuXEvJxdCJ3WyEpfscRwGakgd7aRXbtWxDSKkLZpFi4Ku2A4PB",
  "key12": "3DZ6NiQUMHMybKVzHqrQRBvAgrmBrji6wfYBE2FToqjaQss8dXCQpAonuXBUudnff7r7cibJXELUv2rQdqtt4kbV",
  "key13": "5EBFGMHgQDXEq398hSV3Wd3LnwHSUEz3G9pUT6uQeB4EFpHsVTSnx1thmmExvfL53i2LnkpVxevaRK9n963bGkRt",
  "key14": "5JDfz48Vz13dswsYi4acDLZFGnoDZ82tm7CDb92C6idjGbGPtquvqA9nCvS6jXWqNWhTsv6ednk9WVhDsUbXFtXr",
  "key15": "42uL53RH6pNpWGAN5mcxbk9aJM9VCbmjWUfT1YqyuHZ6cjqakMUte7Ut2rEwUb2bq4r9jDNd5cEsyhmQrc6PrpnB",
  "key16": "5eN1JZFuCvjaGzYwWQMwANVoGBTT6uzPWP6XwgsUov4XnHDvCJdokorwFr2eY4VgfR8YNQPH8puYYJjxCjjm5a8w",
  "key17": "34SWusksU5NAjX65YWTcqRDw7dsESuw21jak2h8aQytUUnQsT1rn9L2LotqWSznnV2o2RJTAR9SUqxTx6ktH5fy4",
  "key18": "26JpjW5VUSPFZRKpS1pBDgFahSrHLqnWQykLA7mryP5Y4MwW1HLXFkTPWo8U7GEVPaP1cDSzKAinYisZgLwDarQT",
  "key19": "63zKe9Lvmv8bcn9MjL1AWtmFrMeKua16ZstEfggZb9URJaV9Bxmeu98hvfbfEbgBNxoXQMY7mSxciwxoUtxMpvb4",
  "key20": "5QiC1P5FowjqBbEfnWUn3FzYUknXkr7KCTVEysxadBATPX6MfPew9YexyWK9sS8CccXcTXbiji6yrP21JdqM1HF8",
  "key21": "36CKn5S3gGorbieAoUhAuCqYP1faRVFsHz8qrfpcaSXvezk6Q37GvpgQrY54N8BkrfrwobhJbdZk3VgtHyKD8M2i",
  "key22": "3ZfRDe3TbHUzJids5QJyXN3GgnikVThwRe7jrc9s6XjYqxzkX7cKzK7ro8QEpA1tW6dPBV9DVQKSMNCK7SqM1rHe",
  "key23": "3q8GfWWZ5ydVh32SPvMUVNPcRHPQ5cJnXjx9szSWp95UBzMDDYFsMd3u64JPU7fySqTuDtEK6mstfZEdeWuapLYg",
  "key24": "RwMofWiETAWkZEY1UobAZ63J5f4wAjRMw8nYobofcTAvnWjvihbpyHckeAs75UTXPfLdmvCPSMf8kvjGTgM1Dwy"
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
