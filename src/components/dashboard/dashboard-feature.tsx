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
    "xT9qwDUNAX4UDPAn5brr1iSWKD7Hdq1LyC57o8qUSxoRGnC97bph4GF5v6zKPF7JrkqGU67PKyKxJDhpjtoLGsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23LiCHfUye9ac6jHWAs3QgxMjgfkR5i8KBqYVfaqLtLnkSvCktwLmbYFmxkeJNLVdZdjNKoLwHRFF2Kq67zRiVam",
  "key1": "8zVx7tJ68CLZvmC5gZbbdW2oA6RPt9RibctUW9yi8Ftpgti6Z5BcuWFWLZHzrV9ETUxz9ZWkGKSi63EveEpkwaw",
  "key2": "3YYAmWxZZhoRwpF4bDRP1uLkK6oDDKWPqD5MKA4CTTU7FkcKJV5sUFsGZHDgdkkiBGyMSfBmeoNY9GUQrfB6LkDy",
  "key3": "Axx1Fw4riLXUy2A1CGrFPMa6yJpmzmU4TBRFeQnwLZnnhs7WQ7i8MY6fppuWuf7LMexdFQe92h2vZJtUmvq4xC6",
  "key4": "4NvsvQz3qjnFsx8TJhKk9BZHFH7nsTg4BrjgyNss2y9bn1rB8svYNLjS8tz7iT8Z9wy2xJFMhJodnUToM9Pd5HUk",
  "key5": "5UhmgJ29z879yeAxp5CM4ze7rvPF2ajoQBYbiGiCeyQDtyzbwH9G8EMkQxaT67AqHcYwaNH8aQkTzEuup3C2ZKra",
  "key6": "413JWcnaDyw2Zr18PrCtuh5VpnyX6btKJEcxtLWBGzxYW9ia5UcLoN6RZUQwXxFuvuJkrrVb2kqTaNkgc12xG25M",
  "key7": "45gS3ASvqPWDMpDV1Tk42aDeLSJLU5yY2wwZ6nVHFgwkjbmwzUMAx6hUfRD2BKTpfSooKqECchfx458Y35XBgGPU",
  "key8": "5dcbDeZaCBGdu8vnfSwBp2Q3hyq6LM6NNeh1GwnQUV7ruCQFtpUQzuGhuuiMEvxF6Tf2GBmrETMJ1B2TRFBP1jun",
  "key9": "3Xa4GqfBJSTW5ByRYW685P4QPq9esYotqCHaCThx7qPigTpdfVUok49Pf223wPTTnzZt4Qz4Gzwqunh7kV36HtsP",
  "key10": "4J4gZQNwEj2hfYCfdUJ6RCS7qML787SiBUnEaXRcvG4XmjiLhoWBZfF8EFFkv4KZpF9xT1eKVnPBmX4XiJhghgcC",
  "key11": "4aqTJJMFvwmriMfFzVXTriUpvqrcf5cawnHN8LMWcZzoK1EvGfSGuifomZpN5VeuwRxiYkbgcHWzvogPnni3DGnw",
  "key12": "5h6bHQprWFAq8wWhd7DRDr9zaKnh4XEUZNVzAEeKBXCoWSJDV4XpLAjk459JguDyQs43J9WcxYnptTXzzpP7iomn",
  "key13": "SEegX1bzQHPeu91WoAvUCVhfyVqtacwRoQCEfZkF8ChZVTTVr7UBeB3y7xKT5ifFrdbF5cuAfMYuHbKaBTgC2LL",
  "key14": "4gbLc9YWbCUbBzc5sRvsApRiTvjCRGV7fa8hZUdoYpa5BTJcdkTZJRcuPbncEcuU9HydBR2VoGgmTcJDZ8VVtkkA",
  "key15": "3KZMu6CQz3vnaw1ENsNVyUPdGeB1iM9Kt4fSbHFQsNSECUWWuDs4SFBafuNeggWg6QUv7vXCNpEQndBXUvRWVrgN",
  "key16": "ChWHjek4iL8QZaninNz9C2muddszh61oPc4TS4guC1ssGteoMRuaXSGJj6mU5ygGqo37QRNNjuHLJjoozsiU7v1",
  "key17": "3tkEsBHGS9Z8P4hHsK2pYSaBqMb7MFMPNb9JSDouTuFEh7dPMWeDoG5wo6wVruB7WEVZBUQhS76PSE437H2EcWKh",
  "key18": "28NvnrVXpWV3Pfcu3TR3Lx28m3scHxfsX8v1GN6LtMpgqgdUAfrtvx2v9Msn7jwPtn36Bihx148iiBRMCETp6ToN",
  "key19": "v8S9ecxd3XZFmZm21ybPVDVWQyvZC4CQJ1vpsrcsanuCESXaJyQeyz8iDS1PVaHW1hdjNwifrkJBaWKJXQo5mrY",
  "key20": "TvWiCgm495BTBfqNb1mpDxfrioHi8r417trCURpLDTv7oArjfvAqyn3nJrF2EjSqQAdYSiSLiGSZYfJM4r5xsLM",
  "key21": "5j3JvGNWJBqnjzQmNVi6nX7ZiSx83ywhnF7aWTFzjVys44K4tdfkiUhqajnRs69pmToh9Ut6uN2bbcgJQgdNTWSr",
  "key22": "4fpa6X43D5MsvN4REnYbfHhgRYs9j8upjh5KcnFnTcSAc6YQgHDWg3Shcr9oRiZ7UZFpERU7s6YfjG7QhdVPyZLK",
  "key23": "2EyG1F85XwYBa2xyP1r4ppxCok2TytcdkvgDRGPSxQMKFNsm9mAH6brhvQituCDy85WeVGhugBjAPPsdJtSwrDSZ",
  "key24": "4qGYFe6yXbip7SW7YN6KkapF1gc6VG5wMsji2VEcW3ue6SucWH4CxdJwog6wNPgwf5d9qvBAWBi6PoDAgvmKXi1C",
  "key25": "2LQ36qThWiLapwG5bYV5GHp7p7qQBJYLtMq3zk31C459EoT7YHLTwuf4g6NzysdMDf1Q5i8nwhPB6w5hdeHfNc9t",
  "key26": "4nUqjgnDFdMQeEHXMJYXrEhGW5tFiwu3DdECxERw4P815kwAbs8dcwxUrNDFpipeua2582UJvdRLbsXJ6Uo1xr7A",
  "key27": "3NKXYetbvFH5YFCNMTWRCJJnkv5ui2cuzbHseFD3BHQQWB4R7KxZ8X2DHjTXweRrTs9K4ZXsD4nntEhh1hA18Trc"
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
