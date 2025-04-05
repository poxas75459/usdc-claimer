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
    "2RsTvqQRTCAkTq1eXfgv5bXNm2arXFh6JhnAZBywuczSY3uvWc2siBadVjoXLkzJKdBPBhwtwTGnQDJk15QnxoF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DHyc8fhRYgGsTbrtyTFVA3s6mS44S5vwymKRsPvSRU1m4ejQG3d9SETh3DVpcfS3rPYWNCCKPGNXVV1MAqXik3D",
  "key1": "fvLkc7nEWrCnsGAV8ysgimsuagKqadS15ZU45ADCJu1evQk5iZK6bNFUuvfT5WbSXmDDXvStuPJXfVrh43qpDoC",
  "key2": "2F1HiJHMqXnWWnMv5s4M5X1Aihn8Daq8uNfsCGvhSBEPAkMb9f5QiXYBbLsBKGq5QtL4vjErKVNyewso9aHqj5Ta",
  "key3": "67f19avtsgwHQx4atVUqoTXboAT3x4sK6pjbn84NGiNukuHoBwqMACsNeSnpcA4SRcb1K65WzrEhE88R52ws1FUF",
  "key4": "4Nwc4jnKh45arkoDSPAMYnJ8mRDaVHwmLySj9WSbDJcV5QZKUwdMz5sxi6NuUKp5w1zX3bnbpZY3cXWNjTfX6Yhc",
  "key5": "5Q7j7Nb84RGKvA9tQ8rtNV6jz668JCcFp6nsYXfJ1WtWNTNaKHiQKUciqERLNvK1KPPbMpktMmLz5idPoMbm91dD",
  "key6": "55FhqRjM9ivjLar6voPLsoQDtnMjF6MqdUeKNauDyUZr7qnkxLUvcjCNdm8Se8bmaZcMPJ42GrpvfwUFPaPUjPsD",
  "key7": "5fat7bTkrxCYfmn91aiA1A5ASRxiPiKqUG81bPDpyVuZubQkVEYKY2VTGJJd2a92nUNs3y8rDfKqVR7KBpHMob86",
  "key8": "4gLUe85R4yuj1qfyvQWApMR1GQ3Bbf4XyUDkd1vX9Szm66GTf7Ny2r6bWUo4bdHfkEeqVdpCCSTzbXnyZ3BwQ4Y9",
  "key9": "53PaJ2Ju2BvxBMAP5QDgMWU4L6Gy97VKA64LpMjvu8bMPec41sGQLnLQNiR4T5sSndH54w9WHpr7bJyRWwgSZvHF",
  "key10": "mSkX31T2EYJ5vZtLP8BVzeHMGEfnVgfq9vuH1Pn1bLb1p7vvKr9qj8kEdveUp8HYeDubrWPratLyRk8TUSqA4TS",
  "key11": "5FT6YFi1xJ8TRzdcEiWPfpriWDiipQr9ELiKFUuMZcSbGsX2AWzZMQb2cnqZ1nmXVqsRyKu5svzfo9ogEUFAUHyr",
  "key12": "3tBiBychvbybJ2a4E3mJ5BxWzDoET4BEqN2NrkgjMKnKUwykZuPPiV5grVsHBhX73TnXSjWqfgcH56DVT1hgoYdL",
  "key13": "57Qv9f9gDeLE2YGFPzAp4wsMHXD7LdeSmEsTGRZyEZrARQuBnyb7GAccbg5MUQpD2MYtiPfDEtP7SXSm9fZmYeyY",
  "key14": "4ufYhdYGhM9aDSx7M2nckYmp3Yb4puZTXC5kw4Ya2ruG4C9b1micZ5kp7wvSYFyFEY8MctxTrqURi6ctzAtkXmsc",
  "key15": "4x1gZtptBQ2ndiPUN3xUTBWssU1zVz98KYV9KutSL3Jb26e7vTGd5Zs4P6bm5hv8hbneHLGsPAv9pKqKVCxMx1Zh",
  "key16": "5QynsEpCNq3iqUqWuqZLoA3bZfcuNATbYS9nDAnKgEwi24Z1wuPa1C9kwvwLrc1z8nPAmdNw6ujZ5J7XzztYCTU4",
  "key17": "5dW2ALWkiaUpZtkTiFCk4JqJsBU6UBBXbCcN85ibLdTgzcE5VJFtxEWB6yE9U6gkRYLBaMzMdraHUdv6RyUHgnci",
  "key18": "2HATHmm2TNvFLHi3wGjwJ3Mi8VzA7ajXZpSTuqgqcXQyMByrcu5AQLrECyXidHssTF7GF96oKc6LE1Qtq56rHNJ1",
  "key19": "3aeomu8G41SibZ673gBgpaVwPpQNdAfVeUsFMs826wNPcVHLWoX9aiDRkJsjzoE5dDYzFQGHoQtS2rLwKgRcQrS8",
  "key20": "2GxDyJpsHuLfMvmoYvqwTdLNK4QqDyN4fkUifDHF8gWEdNxq79aYvfu1V3DjCchNcZDS5vCg6JXNu5e9wmiScxhg",
  "key21": "3pgY8HZNmGcjzBZb67mkLS4H5LZbiLmwXpEdVoDRvvPCpEim6adGNFCZAW2aDGwnak6EA3PxEgJfgVMaUvgAAkB9",
  "key22": "5EQXkBKqb7Fa5w1HY6T6cwVEJoiikfv7RcCbsb7fxi6rdvGG2asLdXZ3RpNC6PgHd2eZ2jHnJny3LWNRzBu6oP6n",
  "key23": "51baPukF5KtWEDBt6A5ca4gwjt7hsD5e14oGgRj8fBHpskYkTnjCHD87VXmspzRhDn8UHKhYKiy68MJH8ByaoPZu",
  "key24": "4A29Lcfjh3HeAENRPuTTA3c93Q5Qam81V9KQJpnU9DhyiTigV93BY7wFxpSUgT2ccrQUS7v4EFkRPR3hRvPceEHt",
  "key25": "48ySxuNUrbmeU3EywgximZvzy4oCegeEsQjwBjbruuu7r9ce6u31Y4uKob8i6meDrtHLAexXCnNzCV7PhuQGZgLS",
  "key26": "eoVS8aoxaTci2duQUZotFExN1whxVSNEqkczW2K1yYhzwPSwrjuX6t8uYqe4JwKptMKLZB6DPYsuLN3H81tfXhX",
  "key27": "2ehix5tpnGU3jfgMNvg8zMQ5rkVUQNkSkyPBTQek1w2iap2PYtMchde9es2P8hAaLG7oV5jZMey7MXEagCkavLdu"
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
