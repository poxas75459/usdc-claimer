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
    "2WYoj5auirbJ8RVSfU9pYbFhvFF7sK2y4VLFovCYr35CuuAf3GqsH9bGraMqN3W6uWoDn2b3Q5APmJGRmf2YtpWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vKA9CXAVvmPLQroWWK6QBQ6HK7RzbDNGU5Ri2GvzZfM2Z3YVPkDgE9oj1CNzGUqCMs3DRNHmKJ3ZnMAvMxvSY9W",
  "key1": "ovuqpDwc8PfbL4tTw3QE9SDKeeaF6KdMpBbrAqC28frQQjPdKmGHDzNc1btLSJ7JQ3P9BrKKmgPRGT8dpeTNLvt",
  "key2": "W355jtPEbPHvGdBoe6jYYsW9jSa1EysSuS2YHN8QuVePk1bQPXDpEHWP1VkfTL7vGXbTc6Pj4cfZ5duhJ1aSUPo",
  "key3": "58AuCq8goS4Ttqi6mUJcNmN88Yt8z8Z6HDb7tJWzdX64wEDCE4o8kCx1Dw7A82sGG9WJJbz6Et3jNPxBoZiipLzs",
  "key4": "CMaB6e5hyBMhHptkyPji5SLi5zSUKKMMgCKM5etczr9uLtjxauyQxKm4Lm5JYAuSyzpdHHkWSdNojG8jTAiRgkJ",
  "key5": "35m1Z4a5mxPUgxhGTX5UkwcRZ5j5Myi3Jr6uJWXUJJ3UkCjUeXRTjPRiz1pXptd8pQ2u5CnGo51Vffj511yhvrtJ",
  "key6": "3avjDpirXTUpg3bzya1ECgCoxk3hFnPmtdvbkdyuiBeDxCtLwdz8rvaBBwZaa5Wdr7aFN8MYjbGU5EN4NfmDFCLE",
  "key7": "2XTLkGfHsb9yRXBhRWWugu4EfdT3XbohUNzYnQYTNBJ4oAMQQUNG1bxngk2BCo29nura8XSGMdj3VWXTtZL1XDuU",
  "key8": "x6kYr2PjZncUEPupLUuv5PWG6hkFavWD8rzVNJjQMbnmJs7k4sg7BiBYqsXGqooaRppMi3J45KZCb2oyJokTKh3",
  "key9": "zq3GiNbwRoQJq3hbFXb8HMkCKVbCyPqzbPsYcCkj2D9p1fDTgbetfLw4GJ6zCdQnef5n3JMAmSqcaJ3BN2DWQ61",
  "key10": "5MvKzLb5KfWvtcfJAMdi54xoqXSsPzzgQuPZVYUsSHqFWS9x8pA9jvFt1hrC9zjZ9ZvhZvf3tAGVyYFowAgUtYMm",
  "key11": "3E3PHvYjwEgDMTjK57c4QywA4qZ5YQ4qcFmfBWZennwwbsm7S5wNhFrUNuBK9mtZNmQ2SLWZUfCTLw2AF3oJuxr",
  "key12": "23gUZfS27X3Cd68U2X4m2fBDSnkVCg2kWbieKpgQKZmpRZp2CUh1E1F5xfjqAgZbH2iMqminhzf5PLG4kefqB6bG",
  "key13": "65duzTE4HHgBMNgkA4bA2pwm4af3CM2HR4RPqgj7isiVsRRYU8eDN97hDQfuj8CnqpheH8TaosaXaCmAQXfgm3QB",
  "key14": "4WmfjJ93WzctAFBk23kdoUhHKFU3NzYKdjbzWWUSb1rspG3fiKBb7NrecXKQsEs7Tm7aTvmVmep7prpPjJNUqQNg",
  "key15": "2pVHfoRoHwsNpQfreLxB5Pn6h1u4sa1G9uBm8haFxJ1fW8SvvCKgJ9VbPjBtAajJ3XEWyyxy3MsWcmeCs4PW3WCd",
  "key16": "dyXYx383DPzmKUFeyarU7ACeSko7Jr2DFTVvrpUnbhrzXyVWovPF265qghbvSUTLgBTR7sheJvV5fSsJnAyKa8X",
  "key17": "QDTgn6ByhAR9HAUzBp6ufv5GM73GMi4VuUabci8K8ZWYiK2NxBUAVLFoTU83FjTsPZu7iVg1rPcbPx9oULeEiem",
  "key18": "xh29QbBsMSZZFtCGL3jPETcxuh1GdGvCeTDzFDyUjSU1MUMhUNvPXVdJMfMmSc6A5bPtMbbo14SEzYtgsLUNoqc",
  "key19": "s22YszojTt4idfBhv4vFQF6BNQCzsTMqRLLYRxC4HNdgJchSa8EGE8VfXYAdXEAsCLQ9m6n5YzGUAQAyF65tM3q",
  "key20": "5jimDhMWFNjTvFeGKoaTwqNKemAN4vaAk4YoCw2MsDyA5nRUJByh1sAMHbqLnrVudRnn7eVZu9NB7yiX4ZLUX5ti",
  "key21": "37t5ogWD6n13zPFqY5Mm7i9itP5EhAnJ9oy3ufQHfoegNzwyi29yeZAT5CoAx9wTmw283eAXfqip1JZcb29BXfbG",
  "key22": "36GrxScXUsrqQTQmVWaaHV4ZYFRAKENmQ6EXxVPvmjG6nt2PtMb9fGMaDGmqWjpvikVJXxnb7ssEW4ZcaSyk4VJd",
  "key23": "2d65YSWTorPBQdkur47rD5YVrCqTnw1VhWgDAgTW34bd5K3SyTt79zNzSmH5Cuxt3ZR2GJx1tbVCW2f5pHT59MZ3",
  "key24": "5rhVcbWQD1ZrTJPdks6GrNjzQLKSTeYqWa9oMHk3tPCNoGZomS5UkX8hHm4pbrohSDHRTo7hfynfqDiSHVUzYPsi",
  "key25": "2wZqL4yCNWZ11HJoqp1KWz4dH76jsyFpmRG54aw8ib4jqV92jd3SJhRzPzMuXJFbLCSm8NAtNdZLUG65tn3nTLRW",
  "key26": "tJaCEGDjqWN9UAeq1eMaejHvp7fkPkC9MytTna9fuEgNLinwLRpqxx9SGrcusjRAq8tqLvd5k3Y4VMxfdqnBRUj"
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
