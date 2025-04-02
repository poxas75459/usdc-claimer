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
    "4odfK6dAv6qszkQ8CjjkUdLrD3Ejdqv6MbdR3n35hGaMvi57eCnekwjGrmxBsFyavM46aREcDayYGNBhe7UH1MgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cFyNH4YheJcxfjME2odXfJRAAaJK1mYNzieueZbyYefTaewjJZ4rc9pUaMPXCUdrxAGmhnnQ5dPHJUMYYkvW1Ga",
  "key1": "3PmL1S3pDhZeaJ2cWGAXu8qC1d5aFMJdDokEVdYZY9eXnCcVGVg2pAqaQvLub4ockxCA73WXLiXd37yJM7C87X7",
  "key2": "3Q9C581hJCVHZ6Ggn5jFKWjVTHa7dCVyq91x1XafY7UUQaRb17itA2vDQ1VX2v3XpwythxLybp2yrNP16zUcT9HP",
  "key3": "jqbUfskELBviSd4LjnxCB9hTbDHRrXixz48ZaZWCNdh6ULMxC3yrqgcvPb6e7VifJ3FT4S5WPL3ZnC8zMq46H94",
  "key4": "3iQRerujA9fshM27GdaCQMuhD2y4bcDkixd4vaTLxZUe6aoMUg69To3y326XWkgDs1VtyA3CV75mnQppx4gnugow",
  "key5": "3gzCaJHQyfBcfCwYiQZWWW24PSxw3RzLapCgJL1JCA2BYuvp77fx99gThCkhPMjGJSQF8iGEpXH7cSvFT2DNy92P",
  "key6": "4hCmq1Ca3JghoojwPe4XDe7bRZSpaZRJ5ZxKh3mdtBZvczE3yGiQwYaG56qcQT3pNuzh8K7J17vu9ay1GJaj55Dd",
  "key7": "34ML5EA3dfMHbdMWj4CkyJxYp1qds25giiH6w5aUpBwUGXwt5gQaseQMHwo4wxJaa2sykgcF7TYXncB1yc95khsf",
  "key8": "5e3jv5EBNGfpmaJrHWKE5nvnVNdTYZFwPujp8sBKz6rQQVs59RFmi8DcNsRLdA6dCPPV2WESHokwN5efUV1MrSwh",
  "key9": "XyXebTHaww5m97vjXLKBptn65ENC9ZQKG2vd4AK8BDNrYXv9BoaJAMBA26d72ARSKoCaQqk1AF9Ebc115idaiSy",
  "key10": "2WmPEP2iFEGU41BiGY3pbd4fsaYVvdaYTqCLGzhQUMHmA1NEPDAaY8iSzSeK37tUuwaEmCmWnFQ34CytUXH1XTo9",
  "key11": "5rcFb2AycNToC3t4eCAqRihXjFH2uPJkJSiChsJ3nnjVdfLU1gnLTax8oukZHZA1TfBKmerBjGGFo928k8XSjaVQ",
  "key12": "4hHFcsBQo8wH6wuCjjZR4B6aeZHMj3SEYbzRnjjC2jWtnLkw9h26US6evLkbpwLBYXaEvJ3fvAAB7goUDUs5w54f",
  "key13": "2NKHYVLjxMRmLLgnDLtPLy64xKFdeZBPVzTKBsUPaJQji4YiJibNQLuYS8Xrkdzq2C8MmmdP2kLRd1H4nZwsFwxt",
  "key14": "3R1YQcHm44E3yC1WKSCfp18jT2YDmkwDm2WmhXdr167HAMnAX4eSY19LpHzBi6EueVBNPzvLdYUBmth9Uz1Hi49G",
  "key15": "5hHk1rd34EWhqkevS7oRmZawnFTEyBtsRPCCtayrNw4ZHYzcn3YxRq3Sfm43pVpVZUZQ6tw33sp48LR9ZDPi58gG",
  "key16": "4ivj1DcgyNGp6ZzwkZUypsR3bxKUY7VNXPcGa1Ra3dbeq5U2WZXyMuuAZRGbUSjtFYZp3kL2fybstkirwK3Rd4mT",
  "key17": "4P3e2f2gDY6tpZxraux947EfjsMEW58fqNSPPQMiRcW9XM7SA16nTE4HBrf8BkG2pAcjGdqhBzi2FUuQGFr3YTs4",
  "key18": "YFgCKjT3cdpsKg9QPrzQAUnzeXkvAbGiRPYcavQMhhkJPoeyLrHSZveSbJjHGoXmTNBvM2KMCTTASeF2m3ekgNa",
  "key19": "3ZU9SaP5fSfPVFLhQ1WWNAxDSc32H1zp6uJXM6LZzyvx9uFW5BtEwdb34cUrvnqdkS5qXYjocn46U543LyyHm2w1",
  "key20": "5ERMzBD9jGNshBURawdFfEwVsbKDRt484JBJXCDVZbmH6Jq6ZtJoLw3SP2n8EwUsKogVr9ni59xHfcPF6ANJnXqF",
  "key21": "4cZNt6DPXQWFeQfDGYw2yDY3pENifqy4U7WtPNuYmxngBsbXwoz8zwVPYdTknHUXcnax3TTBH6zkqDCmpJzgaZGu",
  "key22": "2XFPAJt3dxJd9TSRPgg1Hekh9T15eFVq329BA2Nxw6637mv51rdHxJFgeUZh89YYPoMGWfgzcrPJ8VDZs7GaWuj4",
  "key23": "9wEaEJFiEoj7kQUL5cHSpfaeu7uUydPUS6aqTpASyv4J4FrzAZGX55APjjeHNhE9jrpj24aZqFMdEjhq9zRrJhK",
  "key24": "4fvQG7xZxZxPYDTTC8qwE38sAv1N8oeS73Fwt9iYLkDwQ8HAXn9kjCa1g5WFvr3faaZWT6kkuUXs8jXckVWWeE8h",
  "key25": "3xr8RFDadAaY4xLKWpYy7YNtuTkrD757hqJfJDtfngvNnjzjSmJPWhHEgGGNVWZyMfxBCMXcJ8gP3w3kp285Makb",
  "key26": "4KNW2Cs9MdQp9bEwSuku5pgsMGRBSis4WUS9aexpj9ZJ9hWG8BHyEJ8ff38VsuHw7K53AkoRBGmmuSrysHBEvZKg",
  "key27": "5PaVvgVkwjM5sRkGz5iFdj5j5dLJ2XS4pmuT3699APcBopgJst1bRDcRLSGrEJvXpijt5k6EPvxuc44QziBjYpjv",
  "key28": "428UG7cc5BckPF9hoCNavuS19qULE5Bf4u7ZhHdFkBEYEEChDnxpsgLdaVuhr5vzLwLjfpmjqi6vyfkcyoZfXamB",
  "key29": "kpy4ASqbNv7EC9KZGXpLKe5tPmmkcLDUANnvXsCnesuFdXnegddKGwFcp4knYkzdLDDXNxBPUq8J2JUjcbUrhq8"
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
