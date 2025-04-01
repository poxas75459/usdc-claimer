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
    "3UQdt5PfaWw8rhhAin5FhdbWVD4MMN2yfKv2PQCF1EmFGVA8zkC6XF6quCNKp2iKkznxXSpDPBGtCv2ad8rSxapU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHBaVH865urHXFqpT5XCnFo6KNN17HtdmpQuTmAVveT1VcQp2kB9H23zLR9X1enRBu76KbUvzx1b5t8jocVTM1E",
  "key1": "2a5KGBUdd528rUFNMSYrMWgcLPauCskUQCGohmQ6TrTR9bvEM795mdoRQoj6XXwzZs5pbWHzAa4MASRJWCNJSzWL",
  "key2": "4JS16ccDnQJnUJKKKNPdKSoaKyaNK3z1Wchky9GaMdtkaCMUfo6kZFmWHgc1ZANRyEwJnYEK3nvx6GYB5Wfrg4pj",
  "key3": "5K1KG5dzzehSn3K5ahhsdRMjjdkxkb7iqXTgoqYaqUcy6QcFeTFaMmkJWBS8j8wch7VzAVQRTvTMqmeN57J1EZTo",
  "key4": "3VaA8WEHU2C4w8fBtioxUmjiMGBUQ6FSmqMV3Lu7j4YHMBi7pQJnhDkq44o9i8KjPvg7npRppfkL6PdCYu5kv627",
  "key5": "289xKou9PHmc7G55aiooXeWj1mJBVUh8FvBfJLF9TnET8UfPeybB4YFzGC9e34nvCxSYYnDs5vmCqpdbZA6npKuP",
  "key6": "2Nmz1TYZZaJrtZCxuouWWNQRkrEJByafPZQiQ8PtY1b4MxcPVXpcZ86HXnEBkxeRzqNXUK4nENNrzqynaG58A5np",
  "key7": "24pZJ93ATUM7MkVTtkp5uATjohQ5GQhrYUAkzHA1KqvH6vmvGNU4SxAViu4qhHmkiG1TqAVgkGu3F9PZUvK2nFs7",
  "key8": "VKEL9kcYpNxpUXnCci7shJU3CtHtWUmhkvtDTDq3qfujq7c6e17spNTJRkLAzjF2jn1hXKw3fjU39bxQFwNz6Mm",
  "key9": "5PXkR46w4JMDSK9cDoy6QWV7napX7YD5VPww9mK9z1fHZqtGGv6DcW2midX8U1XySuVzXxv9m4jNLoTPMAAyqGyS",
  "key10": "fFCSZNpwPdBu74JEkEpjETp6HbXSaTRtdk5PdFJ3u5sWZxZZ4s9R7D3eRAHRkErRwUnkvWhx158bRoDszuA63og",
  "key11": "3i8HFhapf23Kp5LzAFjhHCf23kTQMJ5qfbXekmT3HHmyfWpFNKg5rYF2RMc3x3Km9q51MgyCbKhHwz6JngEGq7iH",
  "key12": "4tnRAfPGAjAJdcSthWPZhBMoQ3662PyGb52TexYdcUxzLWLfKQvxYYL4NiY2DDeQztDB5A1K6ufMJcm5V5dmr56r",
  "key13": "4AhX4Y38uiURPSrBJrA6TwfwiLe18z5HoiBCVtcwzqr3DrxASLhD9XLvK9MjpiJfcbtPWGmiJ4XBMXiBiVmfdKS6",
  "key14": "5EGcociEXEjoejSDE2po6fbHXvpo867DaBDcZ991L5Wa9oaU3qp36EPJgMaRqtEvsQnPHendqrc6wLQ9fYh6pMvF",
  "key15": "3rMCtyEitRTJrLibWBMTPbiSbhRuHxNV8gqi4EifBt1S7JLNgsyJcqR5xoYFD6RYDEY9V6sz3HgAM9ohziQtjvbd",
  "key16": "KyGAt9mmXmGgdcp7rCqXhdY6suh45vZBpz3Y5KF5TyZcmbPEF9ztHGfGo8QDjhkanebNatYeLKd7PjpoziTarAq",
  "key17": "5Y5PFo3NTpmHUBMmiJNdkHhYMcQMCFMueXyQX63jxtBREYrkBxWgzodFF1nRtn1PPhz7FZpHRHoZFH2fe4YMiGyp",
  "key18": "4ZoYu5xZ93BcoJGv7Z3iFqHEMDyJqVLAFQ5vVXvpL65paqgGjSc92BMPMMsiJRC8kTdQ6L1MckLAfXVWeFZWALME",
  "key19": "4qYFtLzRvUmkUbCxtY362qFDEaTfxraPT7GnA1YG3qAx5cc1YLWpZGKBHqAKEr48PnJR4bK75G9DHshF3BJEjJZd",
  "key20": "UGEVXi4RE6JhnnErV7mVZvvzUmKK2EPVB6r14ivPEvRbx9WzJV4KPm1gsW4uGDyiiG9QwJ2MhmJvRnUocSmYKpW",
  "key21": "2NLjd9kxjUPZiQKQkdddsydGrrRMBp6AJJdBthWiyvLFqzH4u5QbeyVi4jvzjUF2hV9RZ7bwumTeywCDcNrcmnxL",
  "key22": "4c2zZz91fQMyFMo86xiFpA2FAG6o2EmNaz48WixTrzec9uqdWBzAEmaxffSjCbpijM6GER9W6vaboF8wrpsiEqjr",
  "key23": "4bo7uKTb1KW4Nnns37jKrGkdU8aP4J7n92p4X8UkcftMCr4uvMancKD2AAirHCvPrFWFgiHCEhZFsFigWFAZvB2x",
  "key24": "4f4rKKrwoEmJB1NyVrG3neCaT1xRDJwzj2rUhuQoQufFN8zjH4froxb3XjLoxkR5gJ4UXd2yvtCbrMKXiGzjwhJS",
  "key25": "4UCDSTovfPYT777WNoC16Mg9WwjLRmgh2PYN8yPU7VuvEPMRht3P4vg7RZ9Mv6fCTaYekzVaPkSB6TC8NNmrAfm2",
  "key26": "5j55iYmdvGn5Pur4gCFvfskxEXVshbZfig7nE8xjD6EJWTV8MRjMNUZQb4aEMCoaV3XqrSkgg3tcxawR4ZBSX8Ao"
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
