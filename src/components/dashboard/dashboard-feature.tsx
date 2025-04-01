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
    "4bjEkMBs3q7CHP6DvPKM4UwGFpk2datyrqN8DKoN4Tr6gGJaGZHre3asmPH9Z7rjEoEVqKQzaL1a465EFLMKENow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2VyadJp5epZjLGocwZ81PDQb5HBFwb6PJybfUB74V8Jh1uzpaTL81Gm4L8Gf2Tw2YotZcwNzS2xq6YCbsSD4wt",
  "key1": "3Ndm2ZheyppfNhLbVJ9Kd8izTCwpvtQrhQBEwdsfaCfn2Tj6QYTiojzDtYVMdhrBUUFzEmEdCnAJrPrqJpdgTGf9",
  "key2": "2m7CHMY5SKCeX2qBoajZTmhUxTv5E7ZcmfCBjKW3VWaB7HywrNVk9Cq58vbqfEbQjfpAbF44dM45GQzfu8eMSvWu",
  "key3": "bwW9Ni7J4xXgu8j5cdKgXEgwNMT3tc4f7jGgLzYjC3tAKzoZokxSfvNhjARJofUxPBkxL4qdb2pJufoN6Vzicre",
  "key4": "65KJXRkoeG5biK4WYApYPaYcvDxUGjH1dXXifeeLFrTUyP2Mt8oJiKDSLAdHocJSVUupj1VcjkRxeHRyKyQy6K9m",
  "key5": "5CxA8SBs8TLH6Hn2MEG9zBwnJJucUiCZQaU6gnLaMVsCm4qTGWVzJbs4Xt4VLBmpyxdVqQWMnqFdqvRfG5gCKA4Z",
  "key6": "22UsMGX4j7e5BmfGwgj9rf3ZxxRkVPf9USQyRFccCCNGBdj9vv6YC5GjDA8eXjfQzjmUA4rw7Jso6XEaAAvLyC1i",
  "key7": "3cxpRDiFRLdJ3U8odCqb4RuGZndLwYQYuCqbiDVyz2Fo4oBGgjdbYAMJDHwyogU8bbbWdic68jJhogvMgKUu8SjP",
  "key8": "4eGPKDb3gFjj5koLAzsTWP7cGmaGoQc1Az75cJq3PVD5vq2bNgAMyW8B82XxX5aKnWdsvP1LkbqXJSrGs84f3PuT",
  "key9": "2tFPM7BM7GhC28UWr8v6HBHsn4jU2n9jzM63HFhmZBUn13U31hwPexQK2JD3ezTHXRXHwoFRgbm4JTtpqDuuoUjA",
  "key10": "xWPRCyoRYF5oMpEGiKnadEeTVv81NBBvUBV8MXBAPZaMU5zqNpUjZRNvvVNzakpdkjuCo3vnBn78gPWK6BQPEYa",
  "key11": "2ukcrJ8GZQjbGSmCcaU8XHtknbw3e2TUQb4fu5yNsDEGdJHzckD47DFuuMhBfFf2ANC89iv3Ro9BgVbeRrdhV75v",
  "key12": "64Z97ohMWPbe7sFmqnNzY16Csi2ZxXJXjFrRKkWngYg4auDdDTCLJimwj5sPap6Z1186of6babVm36fXGS1NZTHi",
  "key13": "pM6FLNQ5VL3jP7rorPHYeb94H2WNSogB142dVNPXnS8GZNrEYkKVVApNPHTrSiJNze41uRnuGKFfxYYewD3SYpu",
  "key14": "4TNc9yoVjtksgxkEMmCqQjAGjCnerGoy1DdhoJzyhu9TvXs1ejwSXJY1ksiPRck94WuMgafZ25jfxj3hNq1zVbAd",
  "key15": "63zFTiHXJYwhE22Z4em4mfP4uYpLrt9HmZyMqEnAMtYGWCz9x1xbe2P55EBasfFsSxAmzBZcpD5DwUzMR1YvAd3d",
  "key16": "4EQmrLajVeWLr5RkzJZzrjDkevoLZ9VZQV8BqkvTi5ze1xCX46Qon3ETu8yvwsuVNZCa8EmmVKESqRs2U6f8bDTS",
  "key17": "4KpD9hWKhgXavpoSHKHV6knwqxJfLXHnvJk1Vb8ieaaiZEn9x12ADCRUrXvM25tkdqi4mmBcLHsw5z3R5bW84EUP",
  "key18": "27vAxDovih3fLoMfGLQ9CLMKtfYgjqmQdYwNcmRWy1sUo7MTZWntXVZkHDkVRFcH73mGMn3SVAj9zMeSoyEB9Sk3",
  "key19": "5ZKsHVKuddVWZPRcVixEzzhgVtm1LAUcmcWAyk9v8Fp43J2HCaae53pCTUQU2GeoQoRKhxEi5gago9qjWvBqLNjR",
  "key20": "zEaiACJJnqiXuKhNznwwofs7SmtpJjLJ4WYXzRUrMU8kuKh78zi3jjSBkHxwgGcakHzUtwH1Js5x5xBmkDcuwXo",
  "key21": "2yqPExTt8Su4VsVQwTR43z5yd5vdyaNtKjpvLavymYtq5pgruhAFwm2oWu9ZpTrbdNbPDxT2VjWpEjH3AQcAQLzw",
  "key22": "3APCua7DsPqEpmFafKAwFUg88qV1VbD6k8CVEw7JRiNmHXAtYpvq9Vu6spjSYndkpb7i3jYvJviUgX3GksYSyxjW",
  "key23": "22obJ1R3muKQZ7EC4sbaMzepmQJQ4eJdZB28oHUsfF3XQ16eshbyyGeFpVKkYm4eRSkfkELqSgQFYL8vp27dL5ii",
  "key24": "2StCNewnM16J8huyxqJLurpFasahg6hL6AqfJLUUvJAsNTnpowoFnG8QYQss9q5XS3gQHQkdGEeYt8WJNXEFByuQ"
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
