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
    "5KApdtWFYa9nmhiDKLnoigPTtwNTZatTWnTJwtXvLuZMpy4HSpVkmbJz8KCYH3qmWPRmqyQPoaej4hdmjp5SzHdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5taxEKJPYExG2B5jso6ZGuqNnEfmgyYkDK1rcPCZq7mfqboFsTaKHoFKDCcoWrxDMzr1V53zBfj8BjMMQfLbArVp",
  "key1": "3HQdstH1z6xPcELgYB3tThsobZmQLrLbcH7MXuzZ36Pb88BoujmGNjHjpHXQ9Ns2ZpRLQKB4fmHwXuBWy4sbR74M",
  "key2": "2VFojUJmpDWUsA335rug5XbAhhfdWX3LvUUrNThEz1gu541tAzfgEpaAJtToKiP6duFaC9wXmLrVkZ98AbTTmsqZ",
  "key3": "5WvpCNmKw78Us3MdNkXTffCjqJnrk8cC7NeDHCmyPPZf9at4zs9QxCd4LW2T9k7PLLCujDAgYNbpSmh1ek7f8Amf",
  "key4": "2znWS5SzZeMVNbsrf6RAfWhr2W2qgVmCQMxXALLNzXVYqouGH39HKV8pvXhx3RAtxSY1tm8i8XRfifrFLHVy6Lnh",
  "key5": "65wDJ3p5JS9wbG5FZEr46yNoigkgEX8KyH678QnTenkaqM96BwFoD4cXHUrwCdB6rYCjUbu1uehaEERbZvPzG3SV",
  "key6": "nxFgzNjABV39HMGbaNcYWiJYw17r993TKKZTEKCNzFgvHD2BVvdGkD23xvGDMJ7oXcTxFTHuvQF2RV3ia6zEuaB",
  "key7": "389VJhu7EZA9ggqti8Eoo4BLZiwdKJKHSN14AQK8yjbTtTPPnTAwGG4Caw5EnioSuEAupxM4ch3jdhzAY5t8XxME",
  "key8": "4ggwABYGTpEFT5gKjrqg8oJHatEeKr8dPq9zx8PpxRdREa9boqNfvnPhoq12BaNNbiANveXNx4LGCk7qzafj2Q23",
  "key9": "4du3QUjpqgnntXyZC3u6zh1pECZMHy9qdWaTqbgY4mNLxcd5W8w3dMyjBuuch2a7KJXYCN9LmGRHnPXpaQCmPpcR",
  "key10": "57XqpacS9eXgbSy6AzjLTJ12qyC8x2T4YssNqJdvLYGAUMkSsS9wkDmKFv9mfuBwZ1TTY6ozRUTMGMcqsjJSCKTo",
  "key11": "2EUtHXMptNU1zsCq6Q2MiEbbMBhdRuLyeY44i8cHtQEaxjjFJbJjpNpgnSfpGRKqnZBGU4pt6rNYp38qoE3F1549",
  "key12": "VPCY5N3HN6D35CuBd1mC9k8VjHUTDX9ze1opBFmBDmSvgsYqYxx964Joq8VVuWTnXjZnxb8HKUQECHaTXwor3sh",
  "key13": "3PitYJVMyf7s8fEkrw3qdfUVW8PN6dB3PQ8dGsk61JLApUEZDkxGBdfUfrAS4ukYJp7pVJVX6q7uvG41vwCPrVaS",
  "key14": "4poUkWXBrPGrHaTgGK3QF2agqAy7dpHiDe1q8AZB9RZRtf3bwNuvGz5nUP7f3vcw8dgevhi8k6aA8h4sQHxWpYUg",
  "key15": "5hjs1vQg1f3wDGSnWwDzrGwXjEwHL8WXNN2aksffsLfgJpbYP8QSSndr98VnVtZVHPeRx1qbUnEiFdNPiRb9D2WA",
  "key16": "5BQM4SnabngPZpeAz2s28Av8pfwLp8yRc3SVWYbjoFNY1bNLgrYfFv8ck3b8ShHTvVhQrhodY84hZ6HFskWVikYJ",
  "key17": "2GJfdPYpsGX4teXvjtUBHudUSZoaSuh4585bFpEzTTvUAjQCo1dTC2qid7mzdgjDe4Duyj5vFHBdHZDiu9ZubEsJ",
  "key18": "5UaHHdXt6Frv2PH1vsxoikmRikUGedX2LRNuVxJnzhQKXhK8yfDK1nuSqda4PWTiT53EhpqzLKHBnDmVpVK9MeGG",
  "key19": "4qZsL63J8jNq86CaPrrdpD3F4XMXCLthxiPZf27L7Lhg19XAFQjNax8B77FxNqWD1VfL3za9oMREm8XhcmoDbS6t",
  "key20": "233w6r7vBLDTcr7gSCA8Cy5LC9vW2pEw9p7Gk3oGRXDEZzi2Ejk1pwaiCjCskMCkwzrVGpEwavyJqetcVfH8qaqK",
  "key21": "5xVeESfnaCEJ5Z23wgHboHMH5tkpuc5V5Tv3f5Tr5MjwSzc5LWFALeogdoRX959HkndzyfLFjw5RMPWMH7h2Prij",
  "key22": "vrz8KtNfwmMH9iX6VqPArDyj1gLoQNbc1fPgzxbuQ2WMjggvhCGePD6kdbw9P63jJJYntEe5jCMz7qMPHTqZC8o",
  "key23": "9ySQ7iMsHPYMJKPcfdGskC4XjSXMyiWrCgFmBui4xyX4J8WdC5dN8XT7HmeWBdPcEDgsr4YMj3dPqLG9UidRBxo",
  "key24": "2uF7J3Bc5g5kjc8Md3EcQWF1DyyTvNmCNNet6vYiARCVTV274Zc1QmyffhdhqqmzT5tESiRe768zY1aKWqVtxM6s",
  "key25": "2yUyXf8zNcjcYtvJM68gz4gvhHAZQnJNnzK9DJU8stisYDqW8Dj175hXTmL9tm2P3JmnyPVUQXr9KMgDqJJTfEvF",
  "key26": "dE6QgPk6qp7gNqxvCpdH3E5itWVtDr9MpqwMnLixRW7zSDfk51sXhdR3e2fEE2Ne7eoZUJ5QVRhxqXZm3LdPTDe",
  "key27": "3Tbwre7oupCA8rMU1U3QcKqudvzZc4prqDXZuwpEdMDGmpU7ddJMjpVzfycBaRvbXF8fLpCquPz42xuhAyxfQ1ck",
  "key28": "5G7antDA27y5zFeQHcouVfuNbn5xiJXy19GBnbxP1GcMkaH8j1RZRVH6fR3jnpV8rmUirDZjosbMcXU7nj2iAMge",
  "key29": "36fRERgh2EnrgK73kXxjHKyPyssonjP5x8RvS67EP3xyCSYfbQqT72AaPR3xn3h53pHkeMZnG71qhZAzsRHqhQRQ",
  "key30": "5VeaX7JXorT9459gaXpPpy9aNRqA2D6qpJNLe82jpGG2mr36vQGR9KNruqd9Mw5ZzvFmutfTLwb8JSYBBkvD6CSL",
  "key31": "5CJaq771WbMD3JzzfYdwCUwNzWVbRLD9svP4rUiyzN2kvBreUCcndXN2bYNYTRtSo98AnNPUZ1iKv5jpQSqgYn49",
  "key32": "3jZ7CwZ4wq5pMPsqZhzNdkuMMULdofBD4UNz9dKcFmSG65RnwP5YjEiWEFM8dFh5cbSTvQXb6dYccv3Xb2BvUTGe",
  "key33": "5J3bKz4t2uTze99cZWbH3aeDgVc6wvq36KWu8GE47op8RGKmsb4nLtGTJb5hST4anXoL1e5vFeDaEMzUMbpjQZsM",
  "key34": "rCTHDF3UceQhmiZCPm8nYxGENrWYqcYJZueXky94Zq3PhNUdyTKWttYhm49Uw6stBoFo7o3kPWpgdgKTiU1UBMu"
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
