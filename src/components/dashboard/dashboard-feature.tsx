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
    "2Xq7rifWntihKR6EJfPsHDE2J222SmE7t8f1JMwSf5yT3biLxsncPaS2JWke9KgL8Yhj5iEf27PS2hNVnvraFmTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QmhGnb348sG4S3YaqAdQp8Kgt4VHXnFkZ4YJuE85VtC2SWDAmZAbrxsD4QQmJsyU2j592nSjdZcPfgtEeMxjG4U",
  "key1": "5eoCtLShUyApgzHCBqKNrHk7oTd8YHCDh82RKKCe57DEmHGLERz4TafCsSHrSHDFMvGCTPv2CF28wDpttFcXcVeJ",
  "key2": "3ynAbEb7e6B9wHqueAsd15sfRqL7j4JsKSqHDBzNkvPsVbGpTBWeF9wx4dBRMCe4FptpqFwNwfs3dqNR7gk7Wc5b",
  "key3": "53gQCWNrL5BSZ6XLrEsSbJbPScK2fD9hX6ZAz3aAJx2ncRCaJMJYp8WyoR8uW41wjWz3YYfYqDNc24ixVymBauvS",
  "key4": "2CZoxG89LoR48A3KCjNcLXwjKAHz8x463D5NaDKuU9eJVdMshoZyqtTMBazfoBkAScKubhRJxdPUzJGZuGUqNCj",
  "key5": "5Dd697kS64a7k3kTe9yYLTP7cBV6ZLD5uVvtUuzCx4b8tnwDA8kAsJgHs6bemY5eXFXx3Z7YAL5WV7KJXTPo6tvP",
  "key6": "56HHghG2jzWS5GMoy38FgJq3VF4ejt7jJtsBSmxNKaegQ7cU9hroHpTqnpCnNHt1oAHuXoKpqDP22J6jiZZA6kok",
  "key7": "4cMHWy9CHz2SEmbGUoPspmeKuMehGSRwjDrNamqtJXmDCyY7fHPpr33sMCKEiQhHCV9kdwN3mMPm3duGqEp4XMXA",
  "key8": "34KNMiqv8iC7CokSaMWtpZ8ERAQhwHydCD72dKMp3nRrxhNeZeLL69QDfP9RsH6NP1i7p4KFF8EchP45Ssg8Kdcn",
  "key9": "mwNCC5ZEdGZ6inYK2zeWRjn5B6idr6cJxYnnDs13c8N8yad9wmgKFo3jaKW9d4igahAnD8KGiDNwmCyqSxU9qG8",
  "key10": "r8wGUL8MvVNuhqtRofhm1e5ehZsJgEQeGmzeUCB2ADM2UCiwQB6jTjDhP4dF55aCmKWaXQoyCgzVHzgfmK9F44b",
  "key11": "5d67mkF9Gi3j9bK5CvrHS9fGY1gQuU3fL1kuWL896cEsQux1vwEoCEZQVBKhHgfihMgbnikUvyieANrCLgWooSqQ",
  "key12": "3nKCnkmtvBM5wFSEvAdj5z3aTY8MYMzzJn9LErFJJKFo7NKz9uXpmhttjM78CjYuNwusWZRZJWhZU72RUDNEs3Gn",
  "key13": "2otZcaqfEDPeKH8xgpecCpo6iBTL3URJbVmnMoUa1hm5AYCBokJ4rQrCDKojnx1zjYwsEVnBVy9N26xFaKV3S2v4",
  "key14": "2g75pXvqqh2mGz9Uizo3xq1Xv5R5Qpys8F4PYtsa9GqR61Bwz9L6YBdgJdPNKWmHJzAaQ3reLdzJRCxsf3HaC3q2",
  "key15": "5DgSxx9P564eNqAjhhah8XDT5nzYanPQF8hFVW57CLZ7cWY5hJmAUPDTVsZ4ag9CLUvjdAhpcEQafmAHkyvsAY9D",
  "key16": "5vMX3LRUPhV4e6yYEFVMX8QGbmX3wiBmb9BdmgjHbA1BVYz4NhpWXqUTQ72djzg3sqmArVjmgGn6ioRKST9qgE3N",
  "key17": "3eG5uqhFNLwbcwJY8fzxkQqG6h178TrL4N5mnw1YWv555uJQRYLfTNZPGNTd1Cm5pHukWaRT52s6Fhn2ZTDVeCsm",
  "key18": "y5AvBec11jFNkFzHiBbfwFP9ZMhfYDWpMAnU15XNBNhJPNzNksKy2mXiASnQG8HJF68S8cRENjXuhLr56PLdTgP",
  "key19": "2eQYo8sw8s3VqiFKsWHD9YK9rKpn2C1j7FXMMnD5JhMyjXDv77B371C9cMYNdRhbNg3T3hUs6XS6Q3VEK4VZnWL2",
  "key20": "qpxB1faVoXXPftxwMV1ZT2H16zuaqNEfCDnCzcjer89u24ZpdG6ZzPTKdAQd6oVTn6dFnjbA1mJEvGXiNaLff7c",
  "key21": "5r2wrWbbkSsUvN4fAnaFBbXKJyt3yEiHxh3kj1E88HSApzCJ4hHZ7ZVZhyuswshhVSZxZcc8EE1fK9Tbir25SnE2",
  "key22": "5PkBaE7MZ4TPsLfH5KjgC7NLgj8wnnt8SWUJ4LS4Xk8PhddR8SZaTqy9DGaaQMnLizD8bDgL6LoQ8UNVxcPZ8SiF",
  "key23": "4am5194L8WYMizNvyYbFQ4wabfJpMUoys2zWkVhmQx2sPttQ8cJxTdVCLXBfmdvxYiyt3mxf56NXaJMvKrTNWNMh",
  "key24": "3t18W2LKaY7pZDwPuJXx3Gm82fXpzAVpLsU7kVq5nksUpe9tKsmax4CavvA5EuYD3A1fWUCvxefuWbRAns4Zsyhn",
  "key25": "4dHwLoJi4MdCfxDQG5QjKn4QLaeuE1BBvU8ULn2uvrQLoA3j7yCjot7aqD6KHN69beek4d7rf7Ye5FqLHnQF4oGH",
  "key26": "4nxjWc6FJQvqYi5pKFiQKCYp6AVKG5Yt3BNR8Ec2r4D8VJ282uHS46v8aTwbWq1YjsnmsmwY6Cu6FaQdBGQJVvVG",
  "key27": "5eXCBqvZ8F5KG4HSThHGuknq4f5eXG7d8c2WuGoK5ULW1XCrAcTokAReuRw4jfP4VmkSapHwYfZvBYcv2fXCHj3D",
  "key28": "XgsY2YXNPzvqsxzmz5nT3swiywSgyER2D7svkUq7vNX6UWmp8jkG3Wds73RZRdtfW6pMpRYud7Zn412rLPEdxUJ",
  "key29": "5xeqMsE2x9r845PsEiEhTMzmirVN1AFVZttF3JziPh5FHTbWHXPWo3vVfmdUub7WtGkvz3xbrVLr6L7oavWLy3JG",
  "key30": "5EoyfwFqRwD2d9XWRYziT7BesFb7x3mGM2NMjB5pBQDTPJsCyugto41y4b2PSTomKd7cj8g3MeMUbv43BU62aEEo",
  "key31": "3rELxaspnYonLrt37G3yh4av4NLNe3H3yhVKgMZ5N9pon2cd6g8JfJNhtpUaZ4n3tjGsGPmnUZm2N1iXu9Tus7gM",
  "key32": "3n4K3cequvhysvSyQZnTNadLRCP1WEDmcCQDeHchNwyXs5aZtAdowvwtyjSTyeT2qLYGkoRo3A5P2m5xChVw5oxV",
  "key33": "3hkxM5x5mNhRgomJgXVzeSsR595tVxXVsTr7vV9xMnqfVYMHxG2pgjVT9ykm9cgCkkWmDjB7wV51G6SaYnTZdR2m",
  "key34": "2xmuq2VztTQ7nQZB6BsDShx9Qq3D2DQxjsyt5xTVpkRZqyBGcDgRfx2pHMMKtYfb91VcxTrUYpuWe88BNVYUwGg8",
  "key35": "4g87nusqDviEjNMDWDCXU2e4KT7f8k4UAzAncyrfv19QDo61GXXM7rrL1FwM7SSNfxWypz6hT3GYTjaV2nAT9JuP",
  "key36": "oPoXXiSJrb2Jp5p26k87w4ssRTR2Z8D6Xb7cfd2pW2ix8kFxZKtQBFsQThQ6MqxMVjedG7LcovAX59w5KtsMn3c"
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
