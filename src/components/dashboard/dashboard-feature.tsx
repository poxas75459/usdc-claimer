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
    "2hTNouTh6CetxVZZnJjqn3x4AjEXq9UDiTjD9813hEAoVsBdaqsBD6NzVRZ78BPyDF1vBV1hCadTmUfHyn4Tk66w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cfJbGhbNp8N8epzv1sHp31QrrYWiTvQToGHSRCbunAXkK694rhTPJ2kHmRwqJsUTqyukQ4QNfgZ4bxCA71Pa9JR",
  "key1": "GaWV79nw5gV1opKqqFVuDyjh9wEjjqWRWQQuZRKjgteQFn2CsAB5HtNpaC5pvSrDaWWXJok6grzB17c2HWc9gvm",
  "key2": "5sxi2TmYWZVGw7jztHMhB7AR9N5Gik3GNYf77MHa93HQjEHrrkJbr3UCvE1UuPQMbD7d9E82gHr3oED5qZ6s8aVZ",
  "key3": "3GPVSaWd3tU8Ap2St176SbbKcjvuVcsFMRDLmed4CeZyo7Sb5NUBpJyjTrAwg9hmPs32Z8Mt2ynY8TV9PoTzosV5",
  "key4": "QmDpDXsxkVs83Utn3zteNu3ocjLbySPhWczevHbWopLkGc6RLuFikMfhENnJJf5oYfbmCUdNU9z24DfjGjmMNYD",
  "key5": "4KBzWdCbMGARVc3ynSatYybgSH65yznmeiUqJtnE2C6tqoyxQhb94UFb4a3uNQWuVxnw3FPyRAipEEqi4m61uNca",
  "key6": "2851rJmcHG6DKQTmQtrv7FsHjEiPFfEP8uQNyrybf2qE86tmsSQDbMNVmNvhT9bu5uNHmQcoQ6UdzNQ2d4Z7FC6P",
  "key7": "4Q3dbbNduKrvDLfhs9a1yxZKEYbggWFP8X4P1rmLzXbeVTCgsqEtMsJ6ToHbz9bk3DY5cufwDGGmy1H9FLQraBv5",
  "key8": "3Yya1HSoW66eKxvCjFQJnBoVL7gDxYmkzFBTMUesCXmik9T6rCwp1sT7EDXpE66TLbfy7XS4pRcT4PVjdiKy5pNk",
  "key9": "eGRHoTRsHD698dDc3H8pHcMBUaY8Unork6aZpSwtxeuP3wfTzBWXSAXpZeMZAPFACQUkZBHMmVCqj6wY6yXVJGZ",
  "key10": "4vzdn8RzWauHVSg9wWNDgkDQo48k332fH4C9wLcsUdXbawLP6V3JjYSiWNBLYueTsoXur7fR37wJjnhc1iUFb4HB",
  "key11": "5bq34tdKks4ieQtZ9BA3HKtnHd74Ug6G3EfdNdSVtmfY32uVZxMWwwo2mR1tYcbUp6vBhZV4JzVTmfe1geLNbJvD",
  "key12": "639x8TKgLgJ5i1gE3AaSoHMgFDS18yLdyox2kYsbkGeGQWdyJAFp8HFHJzV6Aq6reWfVWC458woKqWQJuHGHC168",
  "key13": "54u4BJSWSoF2PJ1d5Xoin1PqXB9fa3FowbziAwpeG9eVVjt2H9GFaragG6ycJDEdurMe5FkVQe5JvKDgQmpVedxJ",
  "key14": "39aTCQ1MEGZ1pgQKqWrDzUj4jdvd6Z1QRMt8bhqmA9bWjak7Z7xGu2kX74LNFvmrmrdyfExwQdCYf6hg3AYE9QpV",
  "key15": "5JQ1xWaobsn21LR7oAWuUXVTMKLpdKYBz52fwQMPjr71LAPXpHCUzSuPo52gsLfx4ffysDJUVPKezgc54oN5hjYM",
  "key16": "soNwVa8tG2CU85Zw2bRatcHpeQBUT1jqpAH81DkSsckqYhfA5nEU1pYUzFHV66fqXvNjJUpLhvXLSYMFZczD8f4",
  "key17": "2tjWRkxhQC4zLixJtRCvT7pELhbVd9G3Z4ggFFid7dMiRu9eFCCVPbRqYUh8yu4d2F1jPWMVjStHyjxCqE4wNap4",
  "key18": "3yo9dNN37iEkJ2sRdM3GEGCwbxbpvnVT7yHuwq21jJyoVeN6QPHoU3rHDnFX72gr63G1sfQyBR4AqMQZfi8fwUfQ",
  "key19": "2aubtp4YqmBwdWZJXNRKmDVMsJ9JJd6imj6oAt15P2Vksyx3a5wAyhiZJmeaLT3D33hQr67FH8brmLQh8kjkX45Y",
  "key20": "2N82rB7yfiF8QY8wAXLqMvYJz3FEsvNnHMHwTszKvph8FAdWQbqs8cKHHRmV6LHbRrA4hzHygBFmvJm8CDuTC8eR",
  "key21": "MfPxe2Eg8RWsZL5ZynXWVy4LmCnGaENpJP9BezC2eWpSdPCDHDwLwTt6KKTK4zUJpN3zPappJAuvPyTs9UrWfon",
  "key22": "2uHkXCi5yjkp7c7qroPF8UZ8Ni5FPM8yE21qd8dqrzmLf5sLqa6RveFxfJ5U3frSdVTVjNf2b4a8GbhyuMyyYjSY",
  "key23": "613bdYR9P56Ktx2DBj1QzCXWH2dnqWJR8JEkfHNJtTCaf7Cp4huQY1iscJ1B883T6QBJ3QvpfmJ6rLm7fgdVP5NE",
  "key24": "55FqXPVuBUM7p5jaimnWV45rZVzG1EKXSmhR1UnrkycP1TMUUBTDDAHbTi35Di4hPPiYUSohHTGixVQpq5tVSsc7",
  "key25": "21nVEHea8Eo3JiHCuhYWfwsDXN8BSPgyZFTPXsAwJBqVcUpXHzYf6RdsLdmFZQqNaEtZx6rGe5nePXWTKSkQKQP3",
  "key26": "24UGBgdGxteukGcQt4KS5ya8aRr6NTaUy5ESYpM5koURH3N9UJBhvD5sJZn5TKtnGP8R9ESLjsfAYvpjdsVArkMG",
  "key27": "3dqPaVHWX4s8fvf5s5UEyYxzjVsW2byJUAvKhJB2wysj5CGmTVxwJdbXML59BeghusEiXWynqV8FzuwBxxrqbMau",
  "key28": "3omy8VpD6HAkjXrD9q8UMZXRn8LYk6ZXza4sMYWFYJnc1pd3dh5euc3CNYzT2RsxPf9417zytRDvy9ngbe265CTm",
  "key29": "4qdpdpy4MX2X1QT45s4anKrWLrtdJ6XaJ7wfarYVvTMDgKHZ8Vso27uUYR9ruQqWYWqnArXTQq4nLhtgk1oDyrmp",
  "key30": "SnCfPzv7p9Ycw17FmK267nDeBWxfKq6YGjw4KDr69UG2tQAJ4GXhGCzLLNb1ekoHNPmKJSwAWvdiPs9iBfGjakN",
  "key31": "59rqBEKNiMD67m3SywS6poMp9prnTyEy5iBr549oQMr3w9eJrQBTAUAz6gRKPNzF8jBbqWfc77kCrcqbyiperUQx",
  "key32": "AgdAgLrheQx5SZ3oRNMJatdfuQAgmKCCnAdAnn88bTFKsZDBHqEVd7YpWx4koN3XkGZ3UMZZWq5dtHYer2L8AJH"
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
