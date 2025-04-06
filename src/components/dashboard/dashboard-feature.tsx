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
    "2t1NgugVkfmsP3DCTBMZDgeWPUDU5nDxvcKR7Fnej8YPj8HHzaKq7BeKgakyXTnPndvXwGFHMG7bMwMWVH8hKxoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VJLcJduKdvJbX1cvU7xFBRPD989T6bsQiJeKSkDPGs5yM7ZdALaTpAXe2EhxJZHJzbwgedctPUH1Fbb71ZkukeX",
  "key1": "5EMBEQSQVkRUwjqfHFMUHkRUxYT1NAVZyKDRDDtDtBAL3J14JJTc37NeopAeuaEJHr1qJKQXDYG8ESjTw3m5iwzL",
  "key2": "V6YNxLRxK6h44jG7cWVynxVvjNG3cSQa7DQTzFauPrWgQnyN5x7PZny4t3QoHLVYqcYf881w8RjQvpFQN55Ggpz",
  "key3": "3BpkpCxWqpBVz1eCBgVQq6RyBopTonpeAyU8Y17sKKr9BE1nqhmJkqrtTk9XTZKLi9sKE1fQ3wRHoeN4MJrXqt8r",
  "key4": "kBDvZeEhh7tUjQ998HcJEDHsPfmm5M8GvPUmM3fu1CwDiuVLu9bv4St18DcmeABgPb1b5weu9vSDAgkVDJGRwMH",
  "key5": "3QXvbqTdK3oQiQxUNmgwoJ4PBQh3m7nSebYgQ6KPNas759NNM7uztMjym9HLr19J4ojfDrFLv5qrJmQNoZ2DZGxm",
  "key6": "4Ms92RJuPdajYpVsRqkhfNwUUYSKxcniubteiNtkM3PEbY9591it4KRwi2CrCJiRPMeyvQaRDnj2PLikVYiWTSyr",
  "key7": "45qUVs3VnqrrFhDairukdMuD4W46An18LVfqAVrhjgwNfXEZNnQeXrBWMQj7KTWNYQWkA3G7tEF5ZD9A8jXK9Dc7",
  "key8": "4bCUkqZkopB5Q5duDrkhMppGkL5fxiyfSU8xsL4tMWPHqRbbC5i969tJNvHBkbBuRbxSp9qrQUSKGE99ewAmWf4y",
  "key9": "6eU7RAfznKPkdSpxqntRmpGA3xVuUXZ7eDx9WHRoMDWfAi17R5qEGY1Zg55jCYKdUkHGVrAFEgd8wdB4rAg6Cbh",
  "key10": "3ucLec3GxVSFd9Hj4FS75FxWXRnvpJG5HS9FTHrkwEqpe6Cx7VzP5urEt24DcuYpfqZNnwAdGngzp2toJXoh3gMG",
  "key11": "2ojZTxqSGn5uMbYriWXwE1pYBvApwgXkhtrm322tWgfRevzhTBWZnbSfAkAZQGHseg8Nob5DtMg8XPK1f3MRTrzz",
  "key12": "5D4mLXj1KpSudcywougkMCBYt69dJApcdtaGkKPvehkNvWq86RosCxNFqiBPZm7MthbTgeHj8Cs2jeJ84yuqwN3s",
  "key13": "48nM8KTZAUGYsC385XRkrMjcivgRBC3v546mnArAudbDSXcUcto4xCkechGMA5efaYc3ZwN74yCv7TzLz4D3BBFn",
  "key14": "5PN8aieQWgspwGB3y41BEe5W2qxNYax7zEGdkrgKbYuzTuTLhiaDbRVsmG6mVmQQbzHGsycf9XfJy6CQ8Wocet6i",
  "key15": "3WfRBB53gTKm82tZtJbWirmHUfhW7hp7EZAGZonoNcqi9W5gRVhErKeqWdGdcV9dysNaf1o197ncXxpuXYEn1HAQ",
  "key16": "4w8wCUthpTynQVwvQRWdckiK6pxim3kkgMnEhY2M3EDTBx3ivwD2pMVNnHGQ9acNNYnByHDiHw14MGf2oJeWPBP9",
  "key17": "4aQ5BLPNNAkmotgNiETag5k6B85QRGqrW1b24rYskYJcUK9PYcySKMmEVBDQBb7QmKK16HdRA83QyUsUhKbdhxN5",
  "key18": "47zQRCpHPkLrxBAxrPP7EkEgA1vhmfBGajokfWhcZLtFKJiCQ892NfZzgmbPxGavu8Wqy8DbqFV3Cq8ZEXE2rcNR",
  "key19": "3auNwfyCg4L88EjH8hyBWm1S6KQt9q69ERgSeQtxyckYk3eXx8P4MxbJzkbmsk25dnzwe2TykJUHme4Zw99ADLJQ",
  "key20": "4Aqdkg9E57R6TyDuBm59GQ1AHjS3tC8TKhYV6mtx8E9kuVcLB2dVT2aS9DVuxofZVVDfTYUEM3yxrjhxF6NteZWN",
  "key21": "4nepy988m89iHR3kjPUM1fcpT2Qz6ioG6gekunyoMvtcVw97Fcyc7T4No5gKhszXG3yoUhZ1uoKBBMi5fjtojCaN",
  "key22": "38eyYGnDdYU61CLZrCJeScufoT5LYfUSkVqyj8sGi6Vwn2EiaKmZxqUY1YnKgrYLVGkyNHSmetady1ZjYo6jZNYq",
  "key23": "LyJRQZrWrX8jvEYwoKvj7KQozuABeCpHEfGYPuAHnZubCDFU8f2d4MsgYMEqrMWUQHGT5R6CPZtHghBtTqS7fFX",
  "key24": "d5Di5kBWFdhouEXykuezH76ZHiWV1qQKHdtULq8k5ZDEXwZJ8snedPFqQbqZiEaVrmxAztifwuoX9dAYUMdKRwF",
  "key25": "2KfjCqW59r8QVEvrUMTck3Vy2xVJNR6Vc51Apxo97585YrfXvW4h54iw6cvKkr1ZGMGjUstkjpEJoNgFW8EKTC48"
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
