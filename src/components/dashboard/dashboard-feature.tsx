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
    "5cQsuSNWSKNLYFYZuXtAbeNmMTzhNvjZvQAUocGWB1GtABsWrT7YUDV7Aw7uDdV1XpNv5jRgznNjqSwrjPCGB5Kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yq4dhMoTXUib1Kc7D1BHA9VMXkcsniqfHxcvWJ6jLAbz4a7yhArAZsfUDvjAtor51PNR957JgPNme4UJUHNQ9Vk",
  "key1": "5L1h9nKzkTeQQrgAyYAX7Ain7RPamfG9dSNrkD63JfWzQgyWj2wx8UoKy9chw4ZSZFRwFN4pgtTFW44WzZNN2MMQ",
  "key2": "4drLag8nSdwRdjX29hGe9nagoy6tqFSMB6hNma2P1be99CbbWNGr7KoJxMBooDsbg9ofFNePcD75rwnm9FsJd3Hi",
  "key3": "5TJoZmiJkUyVb9D7GXXSxES71jN7Qj3jMWttpq7NtdxbcjpkzdWh6UdpobNscgHa7ohe9DGDhBnZcyRb4gEuYcgB",
  "key4": "65mbyvG3mmXuFdgTeBuSEXTCnxo3UgdKBKeRBSkxYsfb7EheVKCnUynhq3HEymqzPu2AmZHXoLp2HbpEW4A4YrxP",
  "key5": "512azeso5AG9jVkWwaQk7Cg5nugcLjmTYXnq4j1xdFwvwoKgHR1coda3wKzaRb9WiSEjAvWgeEyh27zceRHijPSD",
  "key6": "292oEEMQWwia1Xy7az2FNPXU2pLBtaZPMMCvHmFgEDhfMEJEu3R5DmbTny78e8zc1SxdFUZ4ACX3kiANcpjuVuM4",
  "key7": "TULH4vzHPifscXBJ5N6TBmDQYySP76gM52kgUGwRHVSRSywqesYCvPAbCkN1w3wwznbWsZFEDMnVvbuJ2HkQb6F",
  "key8": "56rR2GqnmFBKTAiLxFwnNSC3VPgq7XHjRaXs5yJNnmgYeKeMdvRzmW41uqeN2g5e8cNfiNxQBrEC6PeEDRJkBc23",
  "key9": "3QFH12Jf6ARPtLg7HoNhpmMudVvuGH6XfRHXeG2VSwNUyXQRHpvJ6wp8T8fbZZaXFkdvrcbyrgTwNYyTGyoG4XKD",
  "key10": "4ofZtmvdMFmz4frJ4G9HjV2gNMN9yQyxxvkgxMvhaX6j8vVGwyeyCXZdYhY447imPmPKXXUSGEib3ABMeMJQEQG",
  "key11": "5TCL6KTx6MHHMvzqrLpqx6j1w34yinTr3oPqm8wmRHwaKajvpp9KW8TdkWD5mycnd5VVoBxqYU1PRL3XYPTReYSe",
  "key12": "4WTg6UWB14jx1tFPEmd2ZCVcW9iZHQcHv6wbNSPugZfS1kzWVXBiynuWuyCMKKtGpTWNFhTH75aTdiAP9a1Zg2wi",
  "key13": "5FwDvRJWCn9yG9NsHLjqsGBgfLSUfkaEkQ9N4i2e4xPjNYgsSawLVQBLoq4SJJGrnWFfjPyXwdhWdzkYT9eZXqi8",
  "key14": "3S66art9xuEaSraDcXz2xH7qMjjapu7KhDpbywaFgQGHKzKwpfvqfpZNSthyweK79t9Kvja1vJ581kuZYFUuBndn",
  "key15": "5ET87zKWM9wYb3PGrv1BqAf1aJ2n9Dit9BMvHWqUHHUwovM6gRKmdhsGY7BzK8DSc7sGGTh9Tsm1Qyhfz1eGYTx8",
  "key16": "39zgejmhW6Xyi4CVrqPdW8wpQm82q3MbFe6NaJLzMnuXoCFYXp8oiDR3kD9v816JWKG4tJqqpFZDsS9sQYT7xahY",
  "key17": "3fcGXJrPXA92sLWSXE1br51Js8LjQ6Rfsi5CbSj8Qrmirop46syvQ4z7GJmLK5zcv7SwuZgNiwkcDzbGHvHxR5L3",
  "key18": "2gupn83ge1a3CPZVKroSfcPpZmiAsVAzaspcfGT2zfvwp8aksU8NCJ2zNCz4C3HdQosGSqV9PspHmBQqdnnREufn",
  "key19": "2JXNAFjhDd87Zqp6Ws2Uy4PQc3B1HgiUQ6JwraDaQVWe5TBcPz3CF3hfCFhS2PgzZ5ijU9zc1ccoPyjaA7NkvXHk",
  "key20": "3yQYFRjW496pTHVKDunrLjwKEwGptPftd2dCPjPE2541TfUFrHno6d472LtR1ThNiEW4YFrhiykNvHnu17NhcF4f",
  "key21": "ZyHEhZ5N1bQBo2JpuZt7ikxhGE8BqVGdwh6EUpKQGhvSDAqHqJQ5BZzssN4zQnMSCwB61VP2TfvteuxS5H1suCx",
  "key22": "4Jnd2DDjHcZeF8bPkhZ2t2RGmX9KniLp38Z42MHKia8chWywjxgMS1ruGWHb6nARW1mWRjCuAN7N1jvq3jauobfT",
  "key23": "XkG7bCLnr49UHDFLJSFE8nKQxSMgJ7BaL1AZ6WAHhLQRHe9oRNZhZ9dYEZDFkUYxaHVyHZKZZ1xj8yyp5irqsYX",
  "key24": "56rvrdjp8U5gVQr8fQRy4KkAKByR35zfe8XtdBDQLBaPj4eJufhW4DtPriQ4afKzevXFuyFC1U2fJRvjh1M3jpxK",
  "key25": "6BMe8mZtjz2Bwe3CfTcysudSvzh5sEGPfwjG19qTFcbVxFQYo1cYCLLzGpFW3N5cdf5hqLVQA2G4w6qHBRh4iRc",
  "key26": "4C6g1GZhEZ5UCRmhqdNcjsFJSASZmkVDV58iuqPP76NzDX2oNj5FCGuYookUngt4KrFfBpr4PqgNnDScqthTMBom",
  "key27": "5E6ETToF2HZvA7ddL7gGsffZSg9qAVwPqZApkmQxLisr8jGH1N1WrAff1e3Z5B9zkiTbcE1dm3pmrFj11jritXKu"
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
