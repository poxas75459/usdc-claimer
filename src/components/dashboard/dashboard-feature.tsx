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
    "4XAkdN4KPDXxbcf7SYTFgeMAHte3D8TTKWyKNTcLYfJgdU6wut1jSS5epmvtZyU8aPngCy9bo2cPxHcoGbnhY75o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gohZ78UhTAdgpjxEFBKFgKw319fGBsfR7BCRUrKGUYmB5kPxEhmsYjwi5FqffD6q6WmV7Kdu1xPZgUkoTEQxn59",
  "key1": "2A9YmHUVhGjPdoaUJLaYLLLeXegJV3WAuL2X3NrseMzV7jTxvAPqrujve4Ho2Vhs5HrnLJbT96QC5f9dDwLagtiu",
  "key2": "4e1X1xQubJ2PRsttKV4ZQsEnfLtfSuMPib2986D3J5x4TMr8q1jKGsCp4Y13AUkSM2Am4qQjy1pDnNbUNsQxCcvJ",
  "key3": "2AP1QXxoyCHDY2EuN2ZiYd1f6Lr24zf6yZt2GnRBbkUoCbbMabtuUE96ebuAnJaKztD3RVXuBzXpde7KWpd7SV1n",
  "key4": "5U4WH3nLjeWLEh1oqqgjCiG1tpXyV5Ay7vU1ASmUtmLE9G3UcEDo1gPBW6Yk2vSmxzjonDNRDivQgSF3kckjVV3W",
  "key5": "5jm3WMhkkw9aQiGD9aNYGohVeWyXzoEaERjTYXancX7tVBqEL5ZcZ1GqBAZQS959TNhzhxxs3HKWmHuvp1Tjr2gd",
  "key6": "37QsdqDmZ6o38mqWx2b3Q5z1uqDUnWTf3BXhehM4es4qsEZdrazG28v5NEsFRSeuKEnEoTRyysqdqnZg7cfk6Pc2",
  "key7": "3Wf6jZeZ37h7HWRhwqyGETubaSaqKeAmUujcWvo8kdGV7SDdsdRY3TA5pqD6h6iD6dwp5aPvm2C2xT6wuNDZvRsJ",
  "key8": "5jzST8aAoBPk7o629abYGs8QNpeJFPbP7GRU6vAQkLy3KsqX6Cr1Roe82dB5ifZtgXeypwxrwsvMuf4yamNP63Vz",
  "key9": "QmLW384tJsriDdtFkCc4SX92NHnne9sJH9eaCthkcN8L6h37qoy27SxEH8AEfLULWychN33Vd7p4fBSrV8QrLni",
  "key10": "4zvgLAmXaJQp65E2E3xiwU1otTiZtWFKfvWAHVPFzv6SkbpTMKgN6Px2qr9uZa8eLpFNJn7sUikkwqUhMnyUy6rA",
  "key11": "6TKG7b3Gqk1TJ7CxCqJt4i7nS1UsukiE8BVPAYSAoWyX153uRua5yE3bWWLs9AfcewqyqU4Q8qM7c6mwRDu5Wo9",
  "key12": "5QzX9WbZPuvb1nqWxwh2N155XSNEcZP3sAMNuQ8GhQxDWoLJNpbdPkXtjwj7S5Mi3erLAX1FzVu6fVbBkUjxCJB5",
  "key13": "2hU7U48P4VNb8m1rhxq8Cs52GQRXxND8MYwYXsfhqGYqDEgxncEQWRbDgoruQxPJjaJtAMxgeCCSKmLjnZvSiLAW",
  "key14": "5tfjkeGiRhGrwS72uHx2ZcXZTPNHJjx9HKNLnxixvt95RFXpDhcXUojY9sbrxPwRcbfHyDAZgjJ6gANGeNAqaLgT",
  "key15": "4gBE2wwF5zESjjJP5UWwTp3D7ypwK3C8LXnw1k3NAB348WMihPS4iRGUEpj3DNoEFQYwEcxETLzJfFpjuTwMhrK4",
  "key16": "2wS7sgtjRrSajycEJv43R3pxvVHEJF3DAHDL4oeVY67842s9uAt5hRX3EBRmLKv4A9twE7erS7x9K391kRjcxQHZ",
  "key17": "3otrXhXGzVEUBzpxj1vr4FB6wrjdprncQDjwSGqRrcPczyTzuvtLWEua2vwPv7nwAiwC3s1UgUNW5nRTXaytS1WE",
  "key18": "5eConHD4V2yL5uaFVhA5ptHYZ9TZsbRaGwhhDoUr1tdSxgoEZLy7Sa7TDgVhz4vvLei6zpDSBg3vLKrQBHEcMufu",
  "key19": "3XpPTudXPNpBaqA1hWWa97oxqs7Quk8xJjbRgUrBMLYDGohL5ddWVN7jgz5heZvRcrW41ELQWf5cW6tFrZm4aD6j",
  "key20": "3BopLo5sjEYZkWorQKcpbnqMDs5dRUySq8xK6E3PocV679UtFfd2BUmWDqFEMSsh7gBgMygS94cz1W4ZoMabN6pC",
  "key21": "29WLe15Ns6y3JoU7yxNcs7RZfPQpQQ4RiwjqTAhTmuPn6X7EKKqUL3BCKkoVVDr2srn6TeyikPcCK2yQzYs8DbYh",
  "key22": "98fsJHu4YKLhkRcGGNrukEoymH2mh9ipo4JJzAsGEBR3bSU2mtsWAn2vTaTnYUhLJyHfsJw5t2DJHK5CmEK7YxL",
  "key23": "5oKD36EN7NBeQ2rGRS2T8ih24tvcUM8x8RpVkNUNEpmHNbLtwUMAvrM9MSrB6VhG2Pp9bCbA5GrUdGW7LMRvXYBG",
  "key24": "2UBorJSnGi4i4Mna5FvsHQQ2smVR2X4AJSRZj66UwwjaMZ9hBYSQehhvMoJSx7txiwwPcDjJdBUWePWDFRDwbb2X",
  "key25": "2zmQm5oDepncxEaqmjcqshZuivNNoguPCVfSYoa5pVwGvRFf85JRFkCRVEDwAxCGbCkgnX7PKmLSrDNCMgUy6spi",
  "key26": "55UqkZ7WxfhHvFPHARoxmyQobYTCufEKSVYgJCdausSrNDQcpSZrsdgmuZy53z8Aj453cc9m7AmwQJE9aXjLDA26",
  "key27": "oqyeEjzKtFZgJfhXFgHNc8DwXK1VAXY9hH3pmx1QcKdLVVPqB7VnnhJHJnQFNo4DzQhxsQ2QRUFMJP7Vx88SZr5",
  "key28": "3k6FXfokgDAfzSfQiCH8VPVZQFd3L7fCTSyFC3PRj47UcxeAW5KkpA4SmD3m5R61miEPoRYRbLyy2dmKE1cj8LuU",
  "key29": "SfWfGsVFuBBC7xgnnvLC91uvkJiuZKkkJ6jLGXzKB95Bo6U29PuXFhhKmye5MBdpKjrfFRuQ4QGq5MvfCYj8DNA"
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
