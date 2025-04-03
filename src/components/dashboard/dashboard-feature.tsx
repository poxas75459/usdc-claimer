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
    "Leiy4d34LFkGU28aEEji7qYgF6PGfFrQcmuKXCaqyh9kgkvkcKEXsgvN1FZfimqYjR4QrCP5QD4D7pCAba8XhPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8XpXNvdUvjEGj278rc14jiWepVSNW2zrkXnDZXeB3mxeQDsVnNDyipWf1cmQv9KYKWsj83JtmrRpULVfZJa5um1",
  "key1": "2ht2MbbpK6aTcZ163NNWFCv7bRCpN4iL8J5HXim9m5Gt1jP6MUnFPYcG2QEzK2DXspbLN6zVTQ8Ehe3d25mYjFLo",
  "key2": "v8Mt8v6nxBwTa9Arf1iYV1SGXdzZCmqZJWUc15V1bL5as7NTNMksFYoTdT1NeuQZ4B7o1x5GE8EVkEo57doVyaH",
  "key3": "42K8Gov9ozy8arMTHjTjp9hq629svb6ScCEYtVuwdrBJZ4eGPUQn9NUo3DSqa52fv5SxT1AVufEhbbJ47ZyvXRj3",
  "key4": "3cfTDV9WH4srfhgT1un4wG6XnHxaATBTr1F9JvimC4N3qd8uokAhuGavrmA9sSTdA2QzHqq288s7D2aZrJvuBLHW",
  "key5": "KtMqgi2eqsXVM6dnJUaWUYZkz6DWqWFgafUUDCqHjsmW5fxwomY557XjLtTgqYRLKxMmZHzwxC3YZN5TDbMVV5p",
  "key6": "62Wvs79m6evmBorQjEhf8PDwHmoPvcku88CUDRExw12Xfaq5NcxABE9owm1A4Taoq4a645AuSfHxwuQrfwmMDjkV",
  "key7": "zKiA4k5LHGMXyQGkZuhodAg2jngk4S7961ers7Gmsav1rMh3Qs1Gy9wnnQcSCij8HCHL3TL2VSGaAygigAAPfZu",
  "key8": "2CVH2i5Ed7ePBd5K7noyf8tA5XGao7Sq5ryZQEjj4MQ7yp8eXK1T7dvnmRUPjJdXKUZWAeDzEsfXDUNuHXJj7Dwm",
  "key9": "4RXCyjnaV9xzZh4FfmJ2KbrX7toRVjzxTLLRBnFon4XU3opF9pJm4pCnYLu92nmtLGcpfzRptuxgawGSfU5ZXu72",
  "key10": "3axeEwhgiP8UbTH75pwD6TZx7fdkB21LEmgQtAFRJ2bbLMheQtawXJDuXde6bCRxUVLFY4bWKdJtEDN79r5BeUSU",
  "key11": "4rFBN7vZ39RDwUk7hyqGkCJHdU24myBDQjCw1TD6qp6FAY9B1zj3TFKU3Cb74NWbWP21AM4N8bd4e5BzapckEPSo",
  "key12": "knoQzfb3hVsQwQvnvqA2vcLswdr4t1ZModiQyazAeY3CxK5t7bBkhEaCMA73gS1Go66bX5F63KyLm57sNzvWsT1",
  "key13": "2FhvpmwcB95rF4kQCWmghf8GxhMfGyxrKA5J3dhAT7B9XmmLnvug3eKyqBcJ1koxRUQwmQWSrP9jrHHw2ZKRCXZ2",
  "key14": "2r7PyvQV4fSx3baL4JB3rFjPtSYMBYjnVFoytDJU3he6qgExHfY8dx93SF5AVGs3N5x7cXcqTUqJHYvrEg3c2u9L",
  "key15": "3sm6CKrH5TRRc6NtZ6QmbDApwFcgnK5rmuFBvfCcLCDXXQ67y73JUBZs6vcvnuz6KNjw4yice5frfLs39QhbQfvt",
  "key16": "5iwX5E9T23NkHvzxhaiJsXxskmsP6mdEwMhLJAREhiaKEQNiiKKkkBTnrHn2ihFzFcW5Ev3vwe1ukRVMWKtYFQan",
  "key17": "5RJistVegaB9yHAz5JzHoUR5itdViGbbowkC9CvKej3cgoqxBnNv9f5kSJyXXJrQDgXeAkgaW9vbB4QzRZo7KkZn",
  "key18": "32Ad5ZXpucZGd6F2UENDyYUNLSbej49cpNAoRLJE2zhV4Tj9MoJyRVNHk98dUXy3Q36z8ZRX5Rc28Wto4guKsLTx",
  "key19": "2eVvru4SL4918G2ErhHfxBuYEmfDhGmJfoKYNM2rxUhq5XhrWphEfaBRWuh6EEDtNoZXQbBrNpFq4xpv8tXLzXJj",
  "key20": "2cwqB8xNTk66kCmaMTz54g6GUTDHRu12hw4JiNSpz8kyytUAb4jBZyYm5HqFvaBDVCJpVckxfifkSc1Cs5HadCts",
  "key21": "2iUsBymzJC6KqACNzbk9xPaACo9NuSDUjXstAjKj2GdQ3x2xxAvLm7Eq6s9RTjh6imu5KWRA9iPBM97xH4Ni5Cva",
  "key22": "2Ev8u5PWKMVAeQnXFY3g9So5vpzJwVz7HrcpZjYNNgc7bYDpH2eESpo8xyDWMaLTUjJofnDAaYcDsCiK8iooQ15b",
  "key23": "5HVdj14gnLBzCo52311XLNoecSXYgDx7gRQf7C9ucPEgN5EGDmJpfY79DUwuY6jbTijEExmsXP88uvYnvhKss344",
  "key24": "twxpwpA679eSqoh1hMGHYzCXHqVvYs6uY1QbwsnXRzLjv4yo12njRQC32WwKeNcPWtvC3NvFKLDj8xFLKtQWA6D"
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
