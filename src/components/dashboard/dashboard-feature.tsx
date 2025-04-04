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
    "2uRTsj3J63qxC5ZrTj6PUBtpLZCjW19Yfaqfk6rjLJv8U4BE7cMxpz1mqJo7rDFnB2onH5zGgbDyB2i2PLuJ3YwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nx2KSgBV6PTkzaGwEEk4FpRSdpPswcLLosxmLgXMQaxWu57fVgFTmuCRd8Keu66mvDwsgZ6mNGMon89rGU1duKC",
  "key1": "2qje51xbUKD6XD9hBpkQbTLCXBTp9QW4R4eiNsdrnS6VMcvay9appCujTevmnwLJrD1eJtNXK2zwMwNCRPF16uob",
  "key2": "22vTJuhW66vNLx2mRPgFUkzChagru9EBhFaUMKaqEdTFyzckPczQo8yKbQ2BAK4En3abSRTQwDvYnaCUZUkMZtd4",
  "key3": "2BYVi1Za1v4CxptxtyG92ddF7STdbDGLZkWR3vQCgrL4wdQDwVvarSURqL3W1ASF5NfC577iYQLWZMuhM5NgugpE",
  "key4": "27JhLULwLHwn8CvVgEp9KfUY2LyVtxvhJKitTcJ8PubSvcAEM6FvsCqzZBoB3kFQNYBSyjgkx2nEMm2DBKYmTFVb",
  "key5": "hfFQFCxwbGUWuVJzw9DbTuD1hNBVMiy6GARP7iDALptCs2jEHYZ8tpgw6E3ds2rn45Gvd98i9ogAH5zy6jT3Dqw",
  "key6": "58ERVtf22YKWENCbKQWjXNRscGo4BVBkKubPQtyx27yLKd1x3qjf7hSgw5zjeX4o2RhjDUG9CLu5r7e6itiUyLa1",
  "key7": "3vBcAdzxoxTG2V22zBS5HoctdEJpDJWXoktti6Gpw616s2L9GQqpDtVPbro1k3DCtKVbzmFtpxMd4U9dJLptCgSp",
  "key8": "4xGTD9deaMzyE8qUzHXNtHUHLh7EwjFg6FWibNaoDdPaU8HB6Ni5urc7GU4P4GyFY4wvSJwdReSygibDiKR8pmAi",
  "key9": "5KHzDRWp9iK3fTmAnEP7afkhgZecTBiJYGD9Rcc1aKroyTHtuyN689vpQunp8Gih8BNYdDGz1Qo5vYexarbKCQV5",
  "key10": "T6RfEF1m446741k3hWFL1Rh7oTQyiE87p2y9QYds9XiVG67JPEfeTha3qUXxPAAae7x97FkiG7HLNsqFPS5RwsZ",
  "key11": "e7fCXgrcgLbDTuPm4Ub4gz28hrhiYScU7Z6X45syBAgGP4onj5fJ33gaUqL2WmyMUzYm7F9nZwercnG7HMkhQB9",
  "key12": "5FmzWUfi7pHibu1Dgd8uMFk4NZifDUZpDvvBhAgf37uiyBPRnCZZF3qqKa1usDDFKeynsnJumgA1gAGgK9N69BV3",
  "key13": "4yCgv2M7KJNz3c6nYcCAff7hnZV3eXufnmphLRnLgvrFqQWkY3SPfre2rRnG3gGY1qa7ESB2N2ogvQeF3g23MHPW",
  "key14": "5UfsQ6cXp3WfC73Vf3miLVJNP7a8VvDmsXEM7d1GWjkEYnNHG2D53mnafjQ5w3RNqWeyxUb9CqFWsyPp2egbs2yk",
  "key15": "5MWCeUP8s7EmKn4WQxCiFPPrxBH8iPjM3ptdAyggJZHcGcKR6cEza34d2u5L3cKhkRJWMcvmHqaGy42ZLB3FYCTH",
  "key16": "5FsQfTHKhXWWXPC4tL6Cx2cZcsFzhd7oirm3wy3tv6QHo5HFnhanF3czkAbHffSSkrNPHHe5qzkYCRPZ4jE7JQfL",
  "key17": "5apC9ym9er6nvnUdceh9yvg34AbDBaQPtJnXC11Zm1fBQBYKjMkGVQ1xehPYQrMYWtAur7wK74m8BUXgRiiKew12",
  "key18": "39RPVkMzy9SjzE8G92m2NK3Ep9BXJiu7UpzsRNrRvnmdRFAfGzP4o7BsE7JtYis4fAwiXCrPTW2dSLhf65zHRb6G",
  "key19": "5wMwCG4pb1QLSuFwfKqZZwxngDVMGx1srgnw5EAo5VXe3NEN24NxxwnpiNAcDCAXrVEko3jg1Xs2AMib7sUZShJg",
  "key20": "3AmS4dsSsLM79tLSMWuwXPe2ayHB217FPVbGLP95k7c1ia32fBGbf95sCAHFkfFbRmgZePTtfz7YzvyeR9NLET2D",
  "key21": "5mjLfzU3ZHDafTyM9QKU1PpKjA1KLfRZ6Uupz7B65Nd3twxusV9o5NTJrB7xFfA7hfuwTJGX9c1kAXsGqFwECb1r",
  "key22": "3MwxvxFhYLgdb63nmCPJDiFBUKVuaMgsLyja6VfgYTkYT9jhvc1QSPDxPWhXsgsqTY8eToxskjMnjsUsDTQKv4kD",
  "key23": "3cmGXFGzKmzu6VjeamiTRe3ntX6jXrRqycoQ41Zw5ubv8u2azRL61qQZuqQ5u3W1rPxrtag1B4oNowsDQV9by9QC",
  "key24": "5kgX7j12pW921cThFkySGQyxzUwEyr8cVgkZ63Sg89F2FyK9UhJiJBgK9R2quAqBAqh6vKR5n9S8x5wurJrG3nFu",
  "key25": "BK8Ke1CQf6uQau2qurVmJFGEkMwTjZtCY7XCusJTwgFBSrJvuduRjyE5btUtrxHg2fXQtNKoEEBdBpVZiwJuEd6",
  "key26": "5t74ePvyL4RAAu14ZwkBst9ZGwGB7LVgFFomRtDQKtWC1EuVLy2Sjz8eH2zZUmKBHoGmwcuo23sciMrjM5GSnvht",
  "key27": "5qc3UZdYNALyxHjKn4CmGQ4tHnC8RfHFcAVuk1fczmVXqMv7Ahmkzr3m3Jp7xUr7MjKHnKqRK2BZvApDDxZyEpWs",
  "key28": "bLAX1a1oVf9i4GhveHnbXmeFiPv41szsP9LGXLuryuNTCJkz6B992moAUTeoj3o9YunapMYaZpVikNo9hMr5Dty",
  "key29": "37tmZ6ZBDKAoUjqqrUW9mta8UwtSXVaZWdH1UfGDJ2vA4nWxmMSjrR4BQWbLUyqG5Ky86dj5FNNRQmrrZyyVnU8W",
  "key30": "5BAoRYFtthJMXhXvJDEFU4Sh18R9MFwtFFLHnKCWz67QSmCWuF9MtWYxp4UdMdGQ13wKLJ82aWkZUUTG4pw1577S",
  "key31": "JkoRBdYTUVh1yEQdX1y9pZNPN2aZP4CKbHuLxd86KFP8cwFhvU9yqhxYX5uZrNbpCEfP2dNUDrXnUeskkvQYmBq",
  "key32": "3pTDr5aQQtj5cwUqTKvvnD5ufte6a7sYv3BsZ2wCXSXHbdTXBoaECaEX6P1pPpii1QbJ6r5KENuaEKkzwkWYwSXh"
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
