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
    "fFgdhZNdW6L8sJHSXyG3tJotFVAeMrmAEoTShDvKR2nWhNBtjjzEHsyUhrRaLxvrR4QLV3BpJmDCNobMJNQoCTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21iHvALt8ixamEJsEFEaqDq4fCWFJySwQ4wDUUUWN4GSuGNcGiEANZuTLgEBU6srtMWUJPtiE9pqwKMxqKsGapFb",
  "key1": "52fof6PxmDT1YxFTWuHvZovW1wwk7T1BU9c2brDZEDXVFCCsRjNmksTz992SuA3cZ4kKnqNG6orooLXpi9oNPgxt",
  "key2": "2sBfUNauZp4QSgGdaoK9QAudN3zcpnCGV3MFtm35s9x4V8Y9iyNDx7CayHg3t5ETTVSkadaM22ZgJFi2qGJshQH2",
  "key3": "37FCJqAsUU6uNShPiexAVZ4QWjT2isuzDxkzAZY5xLgBWCHPUgu2kSNeWhXMM5Qgx8bi2rV5sP4ZXDvvtLssPWvR",
  "key4": "VKpc34XgnPqGCv5RyoFMiUdT7oTdtK75GvYZeVhv6WV7RKMHvfrqHfJV6uFTWcbCtMZXCpiDoznVVDQDsrufRRt",
  "key5": "37uG16pSvcu5edSpSHQ5KBXBzsRwwYd5zwXaES1aHsrAF23GRPQ31zSgKY6Nkftqb8rkZD65EQ6JgRsRW8eLaYfh",
  "key6": "2SyGYsknqConfpctJ2WgBhSsFP8ts8PiDky5PoUuoKYKM59ugQeruk2JJr5NzYrRAHzEb2AqR74pZFxxhMajgSsV",
  "key7": "4sV87L8Mswigh3niQFrao262XvqFibh9uewgucEXYyNFyMFqxiRqN2CDN6e1VhbTmQ6khdKY7drSNQpoCngZPwFc",
  "key8": "aScbG53HhGfUpg6fixjqv9ZiWrzReHJRSNYLf8EJGQTmU5h7xUcfBS5TuzYFHeGL1B1wSxHcQxfFZwoPa2fB7kp",
  "key9": "2sfJ8Df8FoueqMCRzYS3AFUiR5154CJH47zwecL9Y2JjFfGFh3PznkfWisVYXjQdSAUEFiXLLVNbHa821wg9TdgF",
  "key10": "2kPBm4BchxmMyL4jBVytzweePWbRuYovDgFWBoWUaqsiqrPjVy5ciC9ngQ8pa2xLAYtQWAGR6kkNKgPcGuzgUaqS",
  "key11": "38jAicJ33y7vwVyRSMb6WWNrrBvUPEs3W2iLfPPXQEof1GHQTRwm351j4UHgZtpan8CFRNYSadD9kCYEHZLbYfx5",
  "key12": "4XcR863scQGMWhQ2M1Xo6mwgEP5ydqyGWvGyrHYxi64jcgd94jkXeH11Zs2ZGQSd1ofVnrhieecwawL3V3R67jZD",
  "key13": "2GTrsVNobAom8YiWzzNUpiYJxbYADZXmfWJQxTyCKgFYSrqzyzzsJgbe38k2HmZL1zGDfuku58EfqTCdLTUDmX4r",
  "key14": "4jMmZ4zdjW3hFCH6CQEe8Uw8DoVHkoK32UpZAcHNVuC4L7cRv13NZWNedtLocN3otuZQyfsw8uqmHY6Uy59GyMCH",
  "key15": "3cyqZq61JxkZfcyMfbkEJFLJrZCZw6ZfaNSim31ZUgPCyHaTFEGVgnJu9UbsdGZJce4oVvu1ckZZCBcDH18eFJBt",
  "key16": "WE9VXMTn8ebitwJeYEwHB8GenYCz6YpLHWQj2H9Ef1pDvGYzYp67bLBSko6H4Dd87TuMTpgjwNnN5iDQMZYjuPi",
  "key17": "dQq1Bze98scseRSW6CSKDpgqiD22zMXCo8khfCMcnmeqk14A5KYJkGu9PkXhdBKy5X2ggUem64ue9xC4nRo6ozg",
  "key18": "a9U7MtQ2Dn2yqabnXDMXy3ujVtuR2s6Ctcco62BoeEuCVfHtBZxSxGHg8mBNUcfVeySj8QE1D9sPMDb2wPWhiuf",
  "key19": "4QJGZmesK5gQuyGWFYZAVsBu1fgDLQrJ67UmwjHgsuibBzzPt8b5JKwkdqKjpDv5CXPcdcE292n1JLFua1iM3pH9",
  "key20": "2rTXcUotQWgfrNCjZ21g2AaMv3UiPuiqwFfwE1zFHWvxtKNQeNpx9jLQBMUCW6KxakxWXXX17e9FaZFQY8ETbjVC",
  "key21": "UEMvX1Z3WC7uKbjeHkYb7vBK9i1ArksLnMS47bVZbSjScw25JH9vrApycEofAw2gjFUSdcQtiUNMn9hBrn8VXqN",
  "key22": "3QwYQWMg4JM6ttXUxi4UPuCnfiu9CLfTbUmG9tNBbBQNpnS5ExCUNZswW4XyzSkHRAKvdg78BkjR36EhcuvvcNXF",
  "key23": "3sQfnCNQnmD9yGW36NRLWvSeSAE76P98kwxEpEk13XtHrTmJdUQUdFVvQzoCT6rwwvEQ4iDpL6Rygwm5VHeKQq45",
  "key24": "5qrTkfquYD9VGjVaaNAwyWe6j4L3ztBsa4BgVF2Pq1vRnXi1aQAWQhbqQqJCdgvekavhaQquZUBY56NKGPmRcKaR",
  "key25": "5R1hmYmz2ujPjWybFWywHYNoNZh6nvswoNd5xMPWsydv6djvK9P49pbQi317qhkHDwjboiizhgAxVCCMxkB1nNBT",
  "key26": "2gMGV9FHLq1rTj4D9ivKj9j9PEtk19u73muh8MVbAgcVDgTrVQvGC4TNCrHk3V4kCJu85KRJMDfXceSYSNkSLUHq",
  "key27": "ZgNZNQ1gnVcjEVx9evLUXocbwfME9L2WTs27DTK9wFUpgxstXqbUkh1Q8PhkGW5PFhvAp6Xmy51obNmwTqq4agJ"
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
