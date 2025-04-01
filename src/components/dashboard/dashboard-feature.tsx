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
    "57cxQeV9tjFv2BqJgUTv2tvPHik6JKoFvpu5aPArtcsG9k6Zdv3p5eVkHnYtXCxNxAuM3dz7FZfVREdwGyvZYcWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35v5Ko4GjdzdXnerQLJrGfWgRbtj8dgCFZ5mQ1fCLzot5YLr2tGSkSyeButuVzkNBKbJyXxCUATRMjavakEU1dvu",
  "key1": "5MbU6BPSf3UPVxqtD1eKoxb1ERbCauHxNTpGR2vFhjij6zZggJgDT6uozCwJsshQtNciK6id9p4T3LmBh9Wk9UKW",
  "key2": "24DK2nSDHk6GTjRHT1fqht9Ft4QSvCUa5ezgfrYyxeF2L4dDkdQRsMubxyV6U552NteaFof4isNWsaFLW3CddWPp",
  "key3": "5chqQyKdofcFMYRNbUc1AMn5UCw6zK4qSZ6kgiMmQGWq2hR2AaKRYiV7u6GxqmFShuwrdxD6H4qksG7ejHfjk7kV",
  "key4": "3y6ZQ9MWM5ozMGQRs49MPZT7KKyugUg58MH2cRaNksuNYfSu2MRtdZJ184pQZF4owyXuCktjQXq1SfiNmgwM96xg",
  "key5": "2Tq5TVNmwRU855Dob2Xxg6ze3GDgPjafVKYmFFD8BLdtXUkoiMct1JfpoxusiyhGmDidgu8baAQt2T4q93T9v2Bx",
  "key6": "5z7z75GbXRQtfcuevGXbC8Mc9ZcQqrfFmPzaFwqS4BtBuUUb1u78vvgBGzLvY64ejYxT9L1g9aFbNYBXSCR9t7rV",
  "key7": "2nc8RhLZQALWvjyYXbzH4MuBYFWaLE7cQJssfwxJqdmQZ8NkvCk44XPrjyQLitdF6R2nr8TvPmNvSnKaJNziF1DS",
  "key8": "2mP2UFz23MJoq9eGJGkUwtvYypw18E34iSdW9CX1sTQzwrbbUHsYLWHSPSiq63AsoXWukzVLWCxuevhKbofJyrUs",
  "key9": "2ce5w3PwQE5dbzbiZoQ2EdDmVLhUToVaTVGywDGMGzhzT9enpoSzGcwEMK2RVFWHFsMhfgeUoJtkG64HbcPb317V",
  "key10": "2oY6FyBEFHTCYHU2wGSXfD3t7Ukg7LabgoYQ9iipeoyuqUMEGgeUL6onkSW6J6rinkxWAGBXpLhQ7tPxZCAo6M7E",
  "key11": "2Ri7YGACWM2HfgE3YQhL5qULuriDV3NzJi31DmLKGHXm51DXDEe2t2TjQZJKCsBmwKXkq6yPgzCE8NNm1NXeWD1V",
  "key12": "2aV5yAdxvKH6A2osY1SeBdkwH1mibj5rjnHjrYkXoepANy6TkZ32wgX2umtFjT1eKPv2zwghpiGdAMX7owfof3s1",
  "key13": "4cSvfzKanjDTFBETNAJSUvMoNFvTX9tZ4xugfXNAyFSVbcgdTDNjThUSHpCc3fu9ii9h4FEdgAEsiXMYWdJ1hTTG",
  "key14": "4sUdbcJrx4ytsYybGWy2RcKLGCqaUqFMrfUYqeJNHrWwbjitMhf654j3DqVDeu1dsPMdGnMGPDDpjBL2gP8sGsVZ",
  "key15": "4m4QwMAVCuTEBe9nFV6uzqSFD83ce4vLVmiStn4c3Cz57NojKbFsjd4QwjAyHTuuTEf4kGAQp9zMXjG3gNwAUrm6",
  "key16": "2acXHR8zAqmVYkUEHuSSksE5AsNMqU4wveAW7jwoYvV2SnQkrgqgeVcQxgbtJX6Avz5JbMawen1qKgt3559FNyTR",
  "key17": "WWeRrSMS2HmxFLBtG6Misrubd1aN7PhoNC8dZ6GXB72F6g7v4YNHyw2pBbwNNyrKpEbNGEmKhHYge7WXuuk1mJ7",
  "key18": "FGzkoNLK41h4iw2L3aBHKUVj4jKds9tK3sLr3murDfRaAqmsPoQvNLCiZgEJ54cbzRyx7MbQtHJRtieEw3H8JLt",
  "key19": "4JSV8m4FJW9LoL9GtfjUx3DgJJvgJAPUs5C4kyhQnwdHVcioebzGUFn4ae6sS3DV66irJAmBPjvtW8bQy77hCtnK",
  "key20": "2bH67LfH2pVokjMZKipCpfkSh1Djy26fAZRmEUTgkR6urrYhHvPyjwD3tYU9PsyqpW3H4KdKBxoWGWZVcADvMB5r",
  "key21": "473JfT1CZV5CDAggk6wGESags46hYn1eY9fAHAVxiAnchQ53BkbHPv443XEPs8Foa2e7n2qCKqAh35frcJb1JhSk",
  "key22": "4ou9Qd65TuTxrBYoecon1VvH7BfynXB127btCVjo9ttFTeKkDazpyZUi7JJTuGTyhtQrBut2r7oddbxbgRGqhncF",
  "key23": "MpGeUvfn1ubY1Thot8x66BhrTfq6JnMHteSQc2NKEDW7sSt4ien5HXcXm8URAqP9LhBfTV6wG8XjM4sUdnwEcTD",
  "key24": "4d7JnfJpvVgdcwceJvvwsbUqrCnbSPf7gyh7kYbbgSrqKWjQwEu8zZyu2KbaUzBVPyiTZXgsFdfqrKwWioBxkBG3"
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
