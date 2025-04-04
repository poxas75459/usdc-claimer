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
    "2UhEbRQfaPbePVpMcupQw9x2rdTypCNdc2CMXDMfpPrEGRbgZctrDLQr91QPgMcjhhm1rH7CrWDFNGiTGMEMWMEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x791xqrD3NhobTGA4HE2ygzVc3p9sTxWmmDxuTcpHUGYCdxw31k8hMeJaLmAyxsbXJ34cQhv4GFPuhisupzZoYG",
  "key1": "25ZEW5bWz5pZ6hTQ3TFrVoAXU1iHKnmA4s3gytDtsj4bEafd9ZgCrTeyefQrR7yq2t8ctQMrmAT6X26paVtXCGgo",
  "key2": "58g2jM3jAX56DCrsVkcX2c8MkU8BzZCnWvUPTeNQJzhTusMbn6BgNSiZ8ntmZooHm3z1jba8yqAm6qDxn9xSqU7A",
  "key3": "59G2XRohzL5medLCRWQaikwx15ZHPyxsesMrDsCy7hgyGmRRMbgL2SYMjQwr4nDuXRESzwge7HR77AnCPvEaXNN3",
  "key4": "61eFPqRYJmKzjYmtZzPgm2AHZharf3CFF9inBh9hD8FZHMSe6uEvT18yFbSGf9Qax3Qa7jkJWiHequvq4oQuUAyr",
  "key5": "4krAdc3XvTYZgaPX67A42zCjsjhXrgcasphFAv78J7gYU3X67PebCuQWiEuKDCdVTRKYmfXxcC8xHSnx4xb9ve76",
  "key6": "2qZS8krT2516s4U9UaaXwcNZLDhJqsZui4YB3R8MGTgRt96yegi36gUSGjeCN1sJfEkRy5koqj3T8FMSFM78t6KX",
  "key7": "5DVA7rnm8eYKmJANCmfkJyh9s57nb5mUYNHZ9nPiiwyCdXuPakCCAJoR6KF99EG6LHWLfExh7cmvfwxZiaAxKx9P",
  "key8": "2ompXAeVENsdxVhLEX4ZKQKSop2Le2HdwydWPZXiQBECxkN6QzCH7AqgkRvoWedXj5GzkH4hhv5mLQ4qKYoYWJkd",
  "key9": "j6dXkac3uJMJ4z7mw1JUMpNkcT7BFtWFKiH6h7WpyjeScLUExj1Rimm9Lc9GRZA2LrrcysfFmU57aEzt2ZwjdkK",
  "key10": "4AfYgD9EHq9vupLPGR1JnsZgEzcG7TgAb5dyDtdrAX6wdcEdSmgGVKzZWUj7gMjBabV15qKwAtxrwW7nqNrsUz2d",
  "key11": "3zCQJM2HihgWiD1mpxjHYuQMza8BaqBK57ZvXj2TGiMbtxEMjzT9hsdM24puqyaMt4aWJvKZwConCznLLZtcpiPN",
  "key12": "65N91GnRWt8U7iHHmcsrqhFZcgEkotNTE3Mt5BhQ93GVDWUdV98L1K4kYNU2UYgUEqkb1iz9S3cUkFoB2kA8z5qQ",
  "key13": "2CPez3mJUA5F4kYee5oBZTud5hX2DeXn6sm8pRCFdSNXWUhnnVMpNjxSZutokFJcewYuKqNUATTkm5kveMVRkAhi",
  "key14": "4XBcgaJMxa94kVFdCapDKkHSaDbMYFMbqGxszJd4kiDupSX7RAjEEK83DkYX8JAqXjuvyBHNA43qgSEFLcZ1Dnc7",
  "key15": "5e24ZpYzkNVkrUXfP7DWjsGL9QzHL4F7y1WT3qFUXZZEU991iVV22iyZz4UCnEXmcVTCi8djPHVWFgQkVhQcbYZ9",
  "key16": "2BkAW22UShzik6XvnFD6PYum9tT64bVexxhh6o82u13oumTcP8qZpPd7E3Yo5jugtQ9wGo4hbFDFNX3x6WUnhEBf",
  "key17": "4F8K9KBJb8BHbnctU4dChugZitHmSaxN2CpCRnJfF94JaEcBFqohALddKWmeqe8adyyMTy13iVAc5b54zeQEyotb",
  "key18": "3iKVnaFk4jJv59of6bEhDSa2sXsD5j3A3yUJedVUy1bS2i33t5tUxSreogmhZn7dKhkUNs9LExJwnkV8MWZdFFYZ",
  "key19": "4ktjJhdUGh2h7sCf8msiiAGCKBsiS59eXgfn2Z4a4NKPjHjiQ8QuqvXDvW8tpwwWovaS6HjePvjBT7jSJDFNZjVm",
  "key20": "2DcbhP7oESnaGxTTCLnWAW6PgTB1SaPwRQvF2MRZUyEAchJFU8tzmzQYcjTjLkjKpdD6ymqBGodwwKqffzshx18y",
  "key21": "3YDfiJBZ4JjnJWe3tTohwzDtsZJ2YC98biKmYbTDFBdwXARkP8hRZzAUQVrqkJ8Z8MLoqg8f2NE2bk4NnRvfzR77",
  "key22": "5SPYbeePUxX4ePojWtG8R8DFmowTH3L6UEh7cMDr4hmtVnYKSyHY6QjVkAGMooJVVmUpSvLRgyq7UDM3pmShHnkk",
  "key23": "4rWVATNuUMcLPcfSaLxfNqfygSZoMHrhs2QHPTjqKAoCBaeUzHoPgoWuxSmRCWVgGCfUpqBRcfHeV3iZiVGbqQmB",
  "key24": "4fmEmDEAcCs4qmCR75JByJopMgPVogBGRLaMJtNSuKGA6t3qBGwfHPWJS1ZHKfNhVAYvXESYMuuXK9pK1YT13gxG",
  "key25": "2H5cxYj2ugb9SHWjivHhAUqTD2rjWZHTD55RcW3mdNvUrewMdLX3a8zP3J4vpWmZk9MxduLcaUsD5CPCEuNfwp9w",
  "key26": "cS9ewvaWU7G69W8ndgZr7WXKaQ2xAxgVCHZdHbRgeHvokDf5pwsRmRzLdQakFfoRjQZjjQYyT1A5YCbShqAg8WC"
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
