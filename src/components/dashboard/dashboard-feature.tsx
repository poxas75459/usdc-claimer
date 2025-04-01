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
    "5QvD9buwrrS5aFWkV92qzmyVGFFEvPDZLeaYQ69ehRv8WdqcMim6Dd1pC21ftxShXzDYc1wyqniT7tDF5fypPtfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EyXKWTLdfBinsmwVcsUJAysNZFg3PN7ZrDy13LfixdQ1bEiyV27rZxXwkM8Hu2EuDq85d66QVaefB1AW2teTcbA",
  "key1": "5soikvrjL2qBUZSS1Nf6LJw8tGcYPP1vKSVGgpfZR8MyPBPgaYrKFCh63nLnsjumBDnPwk3GEMEJZMDaUEjV9ifY",
  "key2": "4FeXPQc486Yay31ErPHLf2Swj4mooZq7FCNgEoTTm5Z4nkjpv1uxxk2sUUTPHME6eu9jtq5awm7pexMbsFS41Qey",
  "key3": "4t6uPrP5o5BBn66iQLeHHMukJAZWAvCxpDVpXknykJjyVmjeq3rgggb9o1Y8VCcN4Fd1CbNfG9K9RRujbj65BZV6",
  "key4": "nc7kHsAhRTSYRhGK8yd5ra5kDuJZStmkTRCBwc6FQXHdcAhWtdhBp2gaEWqkrnAUFtGvzVwa9vzcYc2X1k3L6Xw",
  "key5": "LNqHUs7gYuUUJRHSWtXEBGJZ8aU1qfmfj2NjMAZZqMmxL7BxDnM2bjoJ6WCUdxsaSatkDRvEf2JAffj7owyuZeD",
  "key6": "27uyEfzi4oTj5bRctyAhJahNdZ7bAkghdSFWJaZ1i2jEW4CRkPpPCWRrVDtey1VF9kYLFteggdJELAignJ2nELkF",
  "key7": "3tTHTzmg9uVQoPwk6r5d3SrSidcgBq1AQ5sa6NJNXSnXYwdia3wGjmLVd7or3woZ4Xtusy5kJTdxEwpjZQM7pcBN",
  "key8": "49viUcB3bESipJQHcDirR14wykP76mJETkTU3ECEFydhCnjgNH8XsrjM9jMzoawRd9G63SUDr5yiYjrJavb3AAm7",
  "key9": "3So4gcw7kw5SDU5jjowSPegdBiePTMFWuBrFTpy6asSxZaJy5ro2LZkV7MhXELBoSdYhGEm1KFPZCExp6J12aJBr",
  "key10": "4mhwSf2e26fztwemmopMFZ46YKBZd1zNVWGtjxnGgvzxHj65QQMqvbaFCMRgYQjus9ASasJBY8RvBD7Bb6D4UE6M",
  "key11": "Di1HJX1mG1DzUndPKh4NiMkhjTAKNAEmRFKAiz1UyHKjgVQADcS144ox3cGW9tFzxtopSGov1xYNyPvbUTtQyTr",
  "key12": "3afhQdTkJ3MENEti9ohyqPs2p7tZtQxx1itTgsU4yZgeKdTVQeYutpMkju9FeEU4R8rJcAJAXGRx4cJESFjNyoAU",
  "key13": "5RqG7DApkF56v9cC2WiMvJnGetR9t2NSMcixtmfkcuYGc34k1E26VdBL1j8RWfJza68EdDU9QWbG9xthMBr58Zfj",
  "key14": "N6PDvHk7wjiN4KuKV1FLE9DCUgiMcgAye2NeH5RM4Gq4KAUAKDULPYunGyy78vNvSTkH8HVTgRmnrDVUzyJTdJR",
  "key15": "5byKyHUt2ruRRMYhUcQekyoFgztRt2bUhNe936pVQP16K7Qik7zvcqYyf9dArMZJGUw4kW3xbmrCgJJbTmmzUahY",
  "key16": "3V1HSDmhftPuufDnHE3dhcn6mWVbPhDFhxKoouNHHK86iFD1Y3MDmxz6Qw8pcKbx4RoTKayxxYEarjbGsvjJKyxp",
  "key17": "3fRjwof7HUaNWSPrEYqBzibVHJw25chacK3QSt4MSby9TRCZAHeHyebZFnov5iKoQxeQt6AuTFobjETNWcXnm1do",
  "key18": "wGd8mxHNGRW2Lz1eDw6Ku9A1J1hR3JKtofoJrqu6t4xczgToiRJ6Wspoe1UKa9VrnYXMnNYwtSFpVqFSxVLfkFA",
  "key19": "4VhzzVRRqwjp2Lz8P5wGLJpY4BHk7eJ7bhWhC38tehPAyFPaR7FiEsZS5ZJxqi9H6ADzvcHQaA9kNaYJRwbZKWCw",
  "key20": "4veUpxP2Xn84kTEBf7g927HftrvVxxb7g8GtQdSE6rvjzioq1GrNajpyXTcC58UnyGrTZW1BaSzCiePRaALowG1M",
  "key21": "3FcV9Qk7uAiv1GJCY7d9CBXnZiedmoRBxUTs588acCbgiKRiDDh8VDRr1usJSjmRRpofk5aYDibLDDQnCWzEEsyB",
  "key22": "4EjFDzEpvUNQFu2MpesDZChHaT3ALWfyJ8ZqehUjAjh4VWV7dWMKPcmAq8qMs55eASuifbWLv2Fn93dDKGZiQmVW",
  "key23": "41LcRKA4FgDSk4sbt2nn6N4nNC2Dt2g46hGWboMsBBRJjUXn6dKvciYUmvqErLRTCvaR4QJpsoht1q9hSemNNYeq",
  "key24": "67UhSFNTi1qtxApKeizQPn3DPKUbH4zvj9JdrA5WAQL9edgnPZPXqyLAvAcaCZHggSSScyuSaYSrtGxgQws8rXWj",
  "key25": "2a1dFBuKQTPtuUn9hVkmyJ4TrHwxSxzjKqM45kQ6zwGPQKs3nEpKUYMb6gZJgoza5ea8Ff7ageC5NpWDJQMkknrz",
  "key26": "8xe6hzQdzixPHWMQVxVqzfE4HnXPJ5sDkfPiHtErRRCzgLioB9efzPKx2SvZ1CcMH8psah5N1MLDAyB2VjTnfWV",
  "key27": "3TPuknbdgsmiUw5DtkpqAQcrMXkq1e9PcRLQ6EZme77aVxLzdRfBGChktFayeU3KUL3Zy1v4EdnEkZoeonSrcAUb",
  "key28": "3BR4w3oagrsFmfHsfDWhC2krhYnX24dFvhQZeTzDDhTWPGtKC4ymNUteDEsAzBvpAnapbmH2f7gxpZF7CjCjwLFk",
  "key29": "5NXuhdyHH11Zyh6qVh1NRXbHUCXwMSLUyGv7j2EhmGhufSsYV2qnzyzsGwAfPkZundyGViuCy6XqEuqzHG6v9xSn",
  "key30": "UrcMcqaKWH5PHdxxEqEukkSU6PYKjrYnwQaLWPhap4C6kcu8vca69MZAffBrn1iEqdHRxbTWvdSwMwj3g9bRbdM",
  "key31": "4rssvUU7oLTUEeybpCzk7ATZeKE88MvuphDeku1DGCL8wr4BAXnZxoKCbJdQirWxYeCuJP5gN1uvfFcd3K3UdPLy",
  "key32": "4uTfAhVHrYqWukv5Y6raMgxz6XnppEQb1vqQVhFoUHaxdrnY6MPcHF7SEyiW4iYQw1EPbRe2UU4k4xM7ejN4RK8J",
  "key33": "5wAAvdnNqq68Zs4RHEhmNn9Z4ZjqdkdhVuedrVxzSmbT8RnhBdnb6jXefqTg1MiPqXyWGmkus1uFUWjbiUABzAUr",
  "key34": "4SmK9ikaCRdQoEr5WhhqafZadRPCmPB9rAFr8bxBn5Ei5EZdrZ4ZJDg9gGhqSbCgynNNjdVhKYu2M1EzDkWabmNc",
  "key35": "4dDjSaNsS5aH98oH7brWzEzwySvxroPwbkM8mgEQgncGKGKL3xRKifn636ic37pcCeDDAAMghStC5jww1UxqK6i3",
  "key36": "5Qjw5zc2eEAFPfsizkCSYoz5BMyNGVecZSHDQYy6ZVaxFJJqYnwvvwpDjArNKQZiNWKD7UxeqBZE1ubnFaKweXcM",
  "key37": "2K3fHATxX5kqZUBFjVVBjpgXws7eBxXNsntKvuMvk8zS7vhpd5nXvaTVscZe6xFuf8Z8C6oHq6s2aCGJ82r46jwq",
  "key38": "5p55FVJHWoZ9EgSZBV7YTyK8fqAXbAroniPVijShbJkS9N5kwdZvcJQp2vGj8o5ZjMv5Aw3fJtubyESx6wEa1Uz8",
  "key39": "oRaCkpqW4nwBNzXFMpdfDA44p7C8d27kthTJ6WwhHUeyAcKHa1airEqjXk4bEsUxtmJJRMq2wue4FdG7u3o5Q87",
  "key40": "5AZUV2NoqNLSHthazSGske5DV6zHPY3WcwnnZ3r7mEmaNqfgSjMW4Qf7yrLUQrxYntK9xmQ9C5GHHWTQbEWMjs2L",
  "key41": "tAJWYebteYNHtXdrMemFYF7LHPC9vXuMSiL4wqa2cKyVi9YWjGWcGMo4qKugWK6B7GQGpxnSArTKq2UWKWjARcv",
  "key42": "5gbyNqxZc15M14dLXLWA6trPjm16tp7nrgrkMQMuNoacVKq5ovxKLWrpV8NRUfrRre832dDJsKMcbATCnz258U3o",
  "key43": "67oqkpdXq6vmLExMmjgvCFxRvxvTEPET6gPkfxJybEbGZaSm7PJmrAjZwoGDs4gXYEpncd1NG9kwaFZaismvyay2"
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
