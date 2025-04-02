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
    "5dCwxiYo2UNq5DR6S9hfd6Gu6ecmkZgKJcU1a1FQ8ZhfaijsL3BvrYdS4mrjCuqVGmKubuQ8WTT3iorm6Gkp3YXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gbeh38p5Uk8oQUzfVoNs3PvT2DkhLoToyYacE2xP6CcPcqURKa3mCPpGL74Ett7L1AtjaGya26ADk5RLv6msjNg",
  "key1": "3dmFsVJeMwrje1vziwRFjKZn5ESrxDQm71ZRdyDaR2QpfY9Qr2ptsFntmB8j3HUoz4s2Sj7fgz7fpiwbvVGbXKvj",
  "key2": "ikxFQKE3UYUpLCjCKb5C746so5DGtAZjGMxxmbcLMczoKwd1867xBYcAReSLgQx3g7CRCncKXkdqEThttff64Qr",
  "key3": "fZw7hVVR5q7iZd7cuvNAsVd3Hf6fNgipVdrgknkpfE5LDsKAU9YhTh66ZuwwowG537kEGH1Bg3YbjTdkSUhknVb",
  "key4": "3am7mHLYMdawpjY3E19jjYov3sEekpMcbPR9FDbfrvtTaaSojTTFUFEGVngyzDdnai52NPfEVxgGzF4rc3vsctxY",
  "key5": "3WJTC6Az3tmU3MHY9ScidyAx8CMcCtfQnEzyaWHjLmUFoFeYh2bAWMbo6JeaSL7W3zcTYj8q911Hphcy6BftTd5M",
  "key6": "4wFM6vfkDs7xBPne1e11azB2rxknXxmKU9TXYUw2B1tuYJw1h7rWHUV5mUJ6eHjL7G8CTBjSCr2ZHYxLHHtkkkag",
  "key7": "hPpUboUrNziunUaSxKo8Jp2fYKf9okyoxji9e4hFdMgjze11zSqNR2jesrSjieNFccXJaZQhYdxC3iDzfE871fn",
  "key8": "66brcdEtywPA7ScDxt2RVRHS99LYGQ975qGC5DbgckXHw4jYmkoEbjWG3PhfGQT3MXEvyPxNwz4sh9tYu8hAUA2X",
  "key9": "5LaFtonkkwNej5QCED2dGvyP2s5xMs44JztUdfDjqLcxgdt5Mxpck1UgQRXvZaN2JpXvVndpyxsa6Ra9iSgynZpo",
  "key10": "2h7e2etADQuJM3vxujPKG6ihyvNLb5MpigzFbSRLcq3ut6vEWpkwVrqGSYhSTP4TBAyoarojLGp2eZowdFbdZxGL",
  "key11": "5SYsZpk9cua41gEHYz75GzD7whntvZsirtsdpqJ6R3yQQKicaG3pWXxA3bpeasoqwQZhBGYQd8QQJkC2hCThkGdA",
  "key12": "2GFxHzwpmgpD9fNgiFJZJ6aSXH3KZAxWcmvET3s64BsTH8LpShegGBVj7e2vRj6CLQ5YZCjFxXgcrb9BptjAviL",
  "key13": "2xSaDKyW9e7X7DzNNx4CqeEX6FkZHyNgYYX7q1dC66H2QqA4831jyTHiJmSo3GNBmSaYdYpbfDXyuPLj3KtMo3F7",
  "key14": "3YgKyKhxjnNL9QW4ggyatZteYGbBiQKbpjwv8eozBcPqW2uJLHXZbzMaqrCp1mQeH66wGVc9GGzymK2xugwxxm6o",
  "key15": "5i9Y2vWy4sZJUfmWinZPfCz85XQmuxgSGbof3rsJDtXaDnF8ferrasTLUgFL1GKfGKKWcabpQB7dwEd9tdVtinb9",
  "key16": "4XaVnKQjq455PqkbNnvgYvbcBZGDbofcJjz8F9m4np8jG3xS8hcSvPwq1wqnRVDfkjWRvPixsuCspujtJYNFm4A7",
  "key17": "3pgY3dFTSHeE7Mff8t3kDGa1vGsd9FeiQ3shatchLrHkYoDCiSquZZaBdq8yK8cNxUDZUHxSxiikhxa1EyYSYTL",
  "key18": "5SwsAmGfs4TGQCMWCCMnfoi8ywH791TyMKSVKrVaRRXTk6PMQuzzfufakNU81gYy7rvqz2KPGej4XUyLGiweWGy9",
  "key19": "3dNU8sbAVHGHQbWbGWmo1oQtDrEVb4U7arvQdRtFR7iNmh9MAW3tcdxYFq6ggivrdECkm8a3n7c7XZzQiY2gZ2Cn",
  "key20": "55XRQuqugRoDRA9EHjpDHNDoPkCWjcnkxN95G8KW5Hx8qe7DehGqVhkeh16vPQYH9ARkCe5toPpdvj2pQVYGr1cQ",
  "key21": "2JunU2KctZZexLarUvrVQwcwuN31j4wUTirBAWCBT3mZNJtmTy3w8VTjGwy2X4jm87oRhTxRLEm2Z493juThtpDu",
  "key22": "3sueUruKeXTZTE5Q68taa8AGeeTTTGoy6RLSvzZJVr335JsELxJyxi8ZVtMzLNHMqTJcos2nB6jo4Aeg3D7B6y8u",
  "key23": "4UiVwobdcGiupzMpj4yHVUJskEEiELZNe9zAa8WPh9DF2VKXbeEceRQ4eHD4P5hZPVQ7zNMb2WnGbvaHndEPGi8c",
  "key24": "2p2KoQR8VmAgqwX2o1882KDN4Me2Aps2cPCkUn8tRLtsi33639pp9ZU9gJAG9hmrpXLPN9Ka5pA8fqf9RJqFsNAk",
  "key25": "5mwd9qnZyN4JLezDeiKXxMuwVqZHEq4sYNyp17m9MtpLRLwAxwEoabiJtcp4nMHRsDqQ6JM9tRYun4BniqVduffb",
  "key26": "4XJ4V8ttwbVVMjDS4ZTRQYHKmWMoSyny2uZBQFhWEJBo3w4ukUnmekgafbULQu3FesktsQm9gan6DxoPJGZEovm8",
  "key27": "4YqK6J7GfxPbbpqmKy3CAr1L6YeKEZiUpwMW1DHsd4GarLkeAECwEZseewwLy14NZHQrEm8FBWM1LKF6NgJfRRu6",
  "key28": "wcAGRU4CyarE5ANj2mBqGTQwHaAT6C5cKP6mQzSGR55xFmqz56hf4h1YyfzYVW911wD41ZKDk9R8tiKoQDEkTm5",
  "key29": "3VQsw4XDFMnmyru1BZjwubqp3Ctrep7bfEdZqjX7L6mNka94LWK8S3ijQXrbys1jJNRyVGsDfyEtV8a2X9J8MuHp",
  "key30": "3nQYKF4PQU7iU5qULC4vR3femaAb4Mtzk2AvoRj9gJNRdX68zV3foxqKdCAV3zmjxEfXbtuGEyH7WS1aqJ6wWXt3",
  "key31": "2ZpD5DsC9RkaRhidEJ7bV3rBwxG7CUaSAzScBoU32jNZ7Su3qvyNqGNnUwSM4bHuRUe4W26L8euTgY545KnggHMr",
  "key32": "n1ExfeYkKcdvkt4RsiyHDBvZtzPh2SZnFEYhyjf8b6wDUA598YkKEkAXbeHZ8sQYKbGnA7z7GXhA5hYD57nguBM",
  "key33": "2rkZhLZoVZxG2G7r9u3jxTser732PbG8u9BGhSS16ej6cfAQ543TT29FekdvDgpmPCqmPjEfTAZoS8rwUmz6KCvE"
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
