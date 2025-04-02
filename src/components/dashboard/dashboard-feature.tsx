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
    "4TtuE3vEHE15AvYD9Bh8HjqZRCejK7m1DY52w3eT9qDrbAysipaPa1bbK5YhZExm5TTWZG3CVVodbFrG2YE2zLRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hDhKdYVfUB5w9FUp5bAnNbAH1HCk5xZN1L6851Z92dHNU1HRq6PF3tMqMnVozV3fwumzTevZmgXpnAzhcEKnZa2",
  "key1": "675RCh5QAx7wtsyoz141vCQqSZDXnSGrdXMt6aH3PYFHDs5D2RPLgJh2tPrZ9ME15PV5D11cBTK7ge86wB7kE2bX",
  "key2": "4cGWQmcMsR9ntPCvwiez7ondZ922yzp8pjLRhV4iPoZqPizPxqKA2sV2ny8q8FgRJgVcvZUrM36ZWV9fqNHLH3Td",
  "key3": "2hK9TVLLfS9zsLE2d6kHVu1TDRMZrCpVf3MedhMJhBLoWuhpwdRT4isCQxiCUL9p2Z6sAW1diN5pGkTrVX7xc2Ub",
  "key4": "5sFbUoyUFjKqKTfBp7N82fhqcGnKGkoeQqe17ysMaK5s76sJLGXmgdQRwtoh9UgoHdCfKxGmo95baronWxczR4b5",
  "key5": "3kPdLHAYzjYz3PdGm6y742K5sTXLmewiFyGfGFfGL52R62Znc2EfcGZzGVosWQFDAFHEHQsbPjQD3wfP8LYDgzVE",
  "key6": "4ib64KcLYYV5VU1Qae3hz48Lozhn3RQdjkbohsidagxJrTmCZoXLJ85grKK4SCikEtkNgG3S2AxhCZtKoNSiTixJ",
  "key7": "3P9cDB2k8EtWG6DTMxnQH8N3GmahNHsdNnEfjFXmJ5YTUxtCZM87g9rQV7ZgKKmvy9gfUHZUJghXctCNGR5yC2bz",
  "key8": "3F94ZoxXMsPMvKWU2cNMRBf78uWk6aiqFaAkjkaCVUYa174gVdfuKhxdpKfACBJWMxhYTbEbpJt9ZazLTncZvZ9A",
  "key9": "5Xy7NVgbnbx9nz4n3Z2sTyHncjVNVXgb1EPu4T1tyyCAAaCT7QwBUwMCiYDdA1RBwuegCHPa76unmE1UhjU3UjCZ",
  "key10": "5J38tUfGv7pdNZwxMwL6Wc2Zu8FTJ8hdqYXT8UyGfpSnz1Yn2DaPDznzvWB3uMPCGm9Siz34XzZ8fvsSSZzsZ5vV",
  "key11": "2XbKGiTRNKopryvCpyT92w6PQ3Ky5CmpaZ6FHUi36de4L1x6qYmD5zqtuBoBwSPtNwBhd9TtcgoJViibyF7x4gcM",
  "key12": "53ucxiqzJcMGEb6U2S8j8mrqTzSa54aUhAeiborZWQaGsr28vxQiUZb2eJopaqCSvqQoyFYhg9NDSwoEr7kdPByf",
  "key13": "4UH4NRqPsqQnwiCJBEpYb6onvhUZVZS2iYq1dM9mzSnCE6b4uNPCn3YC11V1Z3G3yiJfCnqqpBbr9WAJid9NVMHQ",
  "key14": "w69JqHiLnH7oQsMdcetB6hTD3qSMaWHkCwLZeXqyzJbgKmZeaffTtv72gb3usvophGjEpEVnx8cJuycA817jTrc",
  "key15": "4KcgusK8jtRAKA4xahtKXfk9KpVnqjpDtsAPzHufNHHAdkug2D5LdVTvD3Wo9zhQdLjCUgjegafN5s6bsQFJRAqY",
  "key16": "tXifkCmLMavPPzjMJ1hgeE9TKDvz4ZrjkMLzgzjAUzHeqX9HDcDGwNmXgVCRb5ZeGPAJq3wpdnHFo1b1gLZkqFZ",
  "key17": "36izPuzrPoQThtGpjNvgVQagndAqBdN86EKCgh6hmv9hgGNbaWcFrA7EjfVRFFgBPgMMUUnr2EsXEaz5Cs3w7k2Z",
  "key18": "2f3XWXxBzosqpWcHcXGQZyPro8T15YYXSmgLQRhUyAWYX96VtB6Kh4hiCwS6XqyAatj3NUi3YN4iABXC9XBEMSQv",
  "key19": "61TYsvS78muTakV7aXXREMTZfLsNFDJfWneTSpAUmMLaBBpE6WAjUVTZiKf8QRW5juNxLNtpRGsyHwikW5R47n2M",
  "key20": "41CkhhK3DGkr1RYfYkfBZfxJXRuiKcuHBw8Zfr66RsvrBRzNXX8aupz3RXDtfQAWoeQWuFB4jSn9uESN9NJnrnrf",
  "key21": "5gPjHnGprcGNL8cWxxAT7rexENAvZDZoDuJg9e7Kdn2Mxfmw3YuvGgNJvaRua4ZQgau9j7DTmzYuztrRdRh6rgJ9",
  "key22": "AsRKVT8DisJvm634P1px87o7V144wx9UshBhHBFbqz3aMiTYDxTd86M8D4nai37DTgn26LoKop7JZYtT6dn7TQJ",
  "key23": "4ErsvACQWTqGdZjDLKm66MtK8Ke71Ca7qHqL2m8FFWZa741s8s7vpUzEJaiqyCh51z3NBa1JGPR6PeBTPFiKC7MP",
  "key24": "5ihqHzp1d2W5UhFPDaXNT1YYf3XnZLW4ng579siHVjGBSEMLugj4u47NknBwgzJUXU77KZUHqkv1gCE6doQs8cqV",
  "key25": "4UyT8qvaEtURdxmxfNQazKmrGE6AGvQv4vy6bNvijF88aeYdosbUdHJaKGvN9A8rr42nFfSJxcnw2nmnzJZLAtSa",
  "key26": "zymgQfv7zfxc3sFaBqTfcDwnZcWR28mZKaw3deRexEfH5Qdk9ycJjJDeKiHM1tEM9e9m8RziRkcgRakdoQjfEpP",
  "key27": "qcSXdEZUnv6WqVFDLN8HR7kSzHDfNkPHDRkWK777TpgcGjMiyTYP91Vw7i1a9tsUMqvT4qcY3ZVD6gtw9E6t9sA",
  "key28": "4Zx5nydespqNonMePmVnHwFYfhojswWM593K54kw5G73iUKrE9PwWzRe3tQXvNiwNFbMaR7iqggm3LYjFkKjeLbx",
  "key29": "waeiQ7kMHETUXMET43tFfPGckktM66hHFgh7X4ooTKDMihCdAdCC1PCG19HRBwcyVa4Khpjk5GDoiThSAc1jqVy",
  "key30": "48znMrzNaFp8oWtaJY5UZf8kLyHEouS2zrvrnigcGpktAXS3DZYk3wvEDZWs4JdTY4eEZvKhRPXRnBW91XyWxfpq",
  "key31": "3hsi3kpXRWDig5QSEcXKtqGzKBpRfajcbKDDroFzcUCuss9mHnQQA2gLKoG22CDRupHHcF6vGjH2kEjoUPoRjogM"
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
