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
    "65h52FxWLYGcLEycuc6GP9foRCgHLBtC2cqBm75zAauMPZpEwgJUY5KqYQ8MajxG8CmMYpXefL6qrYrTDJVyMMtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ddgByccY44jbmKVyouEUz5E8833mfAnqFth57yq6uK4iNTVC27VtzFuRfPW5yMejxWiMTM5mU9t65KMvJkWs6gw",
  "key1": "5ih38JaCHhbiPxHY2UVNrSw4LZ84NfFgk1TfoyQokcTEkPVuQ3jPpYDXV4EbqnKQozvHCMDcRxwViqTUguWjohgM",
  "key2": "3qZQP4beuunRpG4NXaSn9q3FBtkfZ8qjkBrejeYuEQZ5MvA4tH7LpaJVL4Y5qeoMA4WCXcpoGZ9x5JopfDf3Vruz",
  "key3": "2w22ijvjrnToiW8kB7UnaRHsaJMTMMyazZ2foBuLSeuBd8BVPfJiR1AviJXkDGN9ZKxqVHPB21yk6q2NNtK9ceZE",
  "key4": "4XPk3xA1Fjffy4wairTpK3h6tPRC1T8fQdoxKso5zb2YXKYQ3daRAv3F5Nkkg6w8rZ4xHcB7iVh4Uj9YW1D5FtM8",
  "key5": "4N6zzru9v2eCmLyZqHNK328qMddsPDX9ZtdiXUxveKPCeLpNYxE5Jg8LMapb4qGgoiYQxyo441mukdXVuYbH7NKA",
  "key6": "54Lj2BK7mZp7HFsZdb1hFN8VfPBpe6oSek99dTWxDqmTrreC17vMUfWBtc7s6zSdfxBCGfbDFzEhJBDejiVe43ZH",
  "key7": "3hW3Jy8twoN6zZ6j9xScwnGZGa3drfaHSRjPgRCS13YLsn36cPYnTbMURzDorrXVKe9p6DigeMDR2fJKecbjxWpq",
  "key8": "4Q6VcAVxZ1aB5WQxe4hnf8n5roU7amrXcTg2CyLtzGwtj3TAivbhfuBBaWD6UUjUY3BVrJ31NwxGFQgGjrGGaCbK",
  "key9": "2DsjJigHUQWuU17YYrBfHK9nVtZZKHvJcPWsMdF4GtBs6fyYfm1J2bUTMHHCdRkL9vaLj1FCGGjDt7zsvUqouKKA",
  "key10": "2TPoihe2rL4qTZvjp9dJJRZ2xH25Jd3bnpA8RrjvJvAm5My7HFPvg8Cw8c68oAKqv726NsUwpPk6FGVDy3qk7yfR",
  "key11": "5gfDyfuRaZivCsDydDyGWS3pwEeqamLCp1vJDJ5JfL1179U34Go8X4PzMPPQAHwRnrzCo5wTXGvuFugJwfiSzeKb",
  "key12": "23tVHouDUNrUJn1L9qPCXosDpodTo3kGnv9hmAdiuVf5VvDCwAraN8DQE5AfCtKWdHvvShsyjU7E2ivMfLtpppNW",
  "key13": "5PqVqaxB6P4Uks6BFvKzyaHgq7ksuuBhRuhXceFiY7DzQcd4cdwonBbJTgQzk37roXjrkyTDZYEyqEQ7mAY1wrRf",
  "key14": "5ZB2yfqmSnEJ7zm4SLY8pQbbDpPjNrWFkQnF6Jv9KKgd2NLcGjQRqYnEVTxC3dr1XGpewLwfryx9QjQuSbujSdyV",
  "key15": "4zq8mMSqdrrVPvJgL1MTzzaW1DQQVhV1pwasGCLW66jWvFqYQvMnTUEqA2M8ds79xzqFJM86kTTCPVJiBkDc2T62",
  "key16": "49W6b9p49735U39c1RLwzyXWDV4cLGKf3Rf95pD97DNhfCGtHDX319j8XYx6yZdzhrcs8Ma8ZKWmqZSrDbfwFmar",
  "key17": "3ez4xBx7Qs2gZf9TkStF588LitE8fvYNbrftv1ZpYkdTBhLbFxAPnBqvBNWLv3snibcoZoCGCRp7JNikdHGkmx1H",
  "key18": "5D7NwyWFUAPM7c8cSgm2crNuKfMzcJSsv8gsSRaANb7s3iM68Ss7vQX1QXcXU7oLy5RwUwnrToWnwMDKQxToCgTB",
  "key19": "jXMKMXjUYE3HdX1Rif1P2Q4CqBeiPHdXA7DrY8rb5Rq9iaqFSTg4yJMDCdeCUHBFJiHiyxdKKM3N6we1TbKeuNx",
  "key20": "55qdEHkpEx5fq1qZ3gm6eb5juWaaek4F4DdUnYGxbKUbko72CsX4Z21VrSKmqehZDeNXJiP7vJKK85FfcJAqL7Af",
  "key21": "5uCTdtvGNxRbbeLtiBHbrPeg4UP1D1RLCYLHr7foPdNUuC66yUMmguwSjGpsjxdtmzaxsYwnDbAxMHMobXRnsdE8",
  "key22": "4WgNNwG64k3x3HdkCanjxG4D3aa89ZQNqEN8pjKd5enFynU6npiQ5iJo7hWV3tTtcu4utGWyjm7LtP3ftB4B9JP4",
  "key23": "QjY3TUuGLv3xyHYoqmjZFcAsdK3Q1cSqbJ3rWLuBgZXXUrt9f7MepAHQLa2sWDaNcvUMFqnHQxPxsAGm1m1hwCH",
  "key24": "9sULvy3ahm3ECTVWCzD9cqZYHAJSMTRLuxAChuBZshkzx4t9JZ9YJrdBNoZGFb5MRpq9riHZhtXcJgwKbfeLU3J",
  "key25": "2aAyuUmDqb4SX449Ae1pKSW4CbGimRNnnTKe8NB2eCMUaUbPGAAmnH5jGsTqkRxqoJToVe8yxATAwSTyKnpAbiRg",
  "key26": "VTFx2MnBGpzVvr2tcfaPuS8ttFQAjJVpbtxjYEVQQrdNkvUAy9r4C35sqTHgGrpErc9LAscDAQn39kex8yL4Muy",
  "key27": "2Ch2uiWWA5jbQq1pe49WmjxMoCQYSMBQBagJG8kaq5QQcLX4pP85s6J7xYnZ477aG861LQgJ9zTYcuaC8Zvjishp",
  "key28": "3cgezTDLVsFZwdeTxWivpsgkSv27YiPysco8vVGnymnEjc1y63mCopCpdqtwxozk4UQNmxy7EmcRyZHcDgXMMw2k"
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
