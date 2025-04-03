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
    "2wctTBwjb1ysafcE84Tr2s3tRQ7zsqxVCMgTwMSmayoTW5cC9AsXsE8urSanDnk8iUbZkgstyiiXeBnMbsHeG4YZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tDiwzRbU6mXobUTSf1UahQ5UjPMyNRJ3rKpJqvMXsPCEG8o5mns2kUdsivLuaHeu973Vij9FfeH7N6n1ARvnZ9e",
  "key1": "2oacXGbiffvuMiZqnCSe3eoxtViV4LWQb48o3S97eWBStkEejdma5qjwKJuJHnXNeVFYzgMpspkX8zA6C4faM31f",
  "key2": "2fKJVX48hPvTe9NrguUwVGxnxpP3n7E1kzyKhKnQRWRm5PHunK1oFo9ArU1e32CiSZDV335H7djtFnXF2P1AQaXJ",
  "key3": "3B4TLE5zptcEUPTkpDU5WYDJmqE6Vx9WiyTRQrKTXQEfr3zx1SzuyVxX7fPaCKf2Yp876WJPSZrnXCMk4FpMB4Lo",
  "key4": "66JvYWS3wAwL3mrseHrN3i81gfK1sne5UQJXSV3YtzsE9NRwSP97mkgbKmUG51XmDAYqDr5brpqFJLp8We7VzqoV",
  "key5": "31QZcuykdnDURkNDPKHGVzsV4BpK6GU6LX1zC49d643dQhvLDHErHTK5CDBkPFg66RpCDGAYBAcQcBrDHUwypERz",
  "key6": "4XpwEdAR2wDNNZo4am9rMcSD6SxbHWqoa456EPmAsmo914yFcqzjjD5YZ3MYBHyqk6bdLsPYjvxqTtoX6sVynbGo",
  "key7": "T5fJW5vmfv2eR1znMVv4f1U4Pgp6ZV1AScvn4ZhVsxUf7doYgDTauPruvmAUc2epZv9WCXCeb3b6aQmXsrvBHaw",
  "key8": "4cEw6dDznvQDpf3ZYgXjVU1TNSG4BE8yR6P1KCTd4nbuSTqE2BDb5oNvYJm6xrFrQPHsRiVSgiWzrPX9C8sGDsbA",
  "key9": "5SLsemr6JiH4aNQBoAX3RVgsTFQou1mkAW2r8RujPQedUBk18HPtMg9Xti6hYDZ8dvqvpFKGnNZbD6GqsqkAe78f",
  "key10": "5WyeQaqz8Dbn42MUJG1T6sEjy4fv9xTx5ZDiQ9FHm28qYfN8ybdeREXcLPFb1oAWposVFLhKJTMCbC4tAxQtRRBR",
  "key11": "4xzQy3kHxHgeCmjBa1uuaP7PAeAP67X54VGV3Am5C7QS5NGLMsWyDTfKzyUPyM6rjN5vwW3ht8XKvjNRSPXHfvLX",
  "key12": "4Z14CgQzpUdQgbkbeFAXNh2jmzqWSeKKMYWJd3oBBDrHYMCBVxtTvAx7Mp5fPhJM7o2c8cGfn6UoRFKd4zRqkDWA",
  "key13": "SXJsx7GhBvLApJNWXymxVXXbaXWJJB4vWtGERAm5YYzYdyuUMgAg7Pob1mcL5MQdnMhuRN4N9j1HNsHrJaZkjBi",
  "key14": "5ar8ZBG2bW5jp2NEgQMaYnnTBLwZ3Eu3jQxJfRmo4oozcsAKXENQqehwfR71GbMQnHm5mrUp9RMvRAhLymQWqT2P",
  "key15": "4hRw8XeDiJhKjEXSX68MbTNHFLV1yrdXVhTKDX5SqayVBrUpyTHdLUqFLAr3wknH1ZHmrejutkh4pLB3fSsqcgTM",
  "key16": "38eW4Jx6QRs6mQvk9USArZEpsQWaYGDb5yEbJ7zTFcXyrNrwhhfRxvoaxR53tzEMscgieAwVHzFpngj1zKuvWFbD",
  "key17": "5CrBiB59tosBvaANLMmNsCaJYsiuzpWeHKSk7v3uv2rdH8Ka2oxFUfrhNjfQxGmq5JYj4QgAWRe7SP6gxXbjDkgR",
  "key18": "axjb1pho589RP19Drnfpo4YRxmrHkT5nLRozFJB9zWJMpSV35h8zJ1CSkroW7GtaYQQwULzsTmeXUcVk99gDFAB",
  "key19": "5spMBq9iTAYmah2X55JX6zNfYzbNtHTttLKr27Bpwr3eUvSBwZTeWvrCixoBcGyRKg3sbVn6rYhmRNBLLTHZPZLq",
  "key20": "3p3kTf917dmXYLFuBB1cvCmurxxaAWhqixE5fEdYTstZpu8XBVmQUjrjrmNJDwT1R27xn8PYAS374C9kmSCMxtsZ",
  "key21": "3ZxvoWTX8EwjSa64ttZ8B2wusG4THwSGkvttnPVqH6cYDf5pdbK3NV6Ja1yxyjhtsVTL2CRyQqaY2gzwkgKtgsEB",
  "key22": "3SAsVaZM1nBfZ59LaDcBAeqvgSk7uHzZfW49TJPkQmL9UyYQWPhUdTBVhV6JFQRMVf6r8bi6VfK1znNoRHNoEfbE",
  "key23": "47Rz8sFR5QEbehTMiMXHbxBrngjfXvbigLRVrSiXKhzk2cSsgWBJjTrSEcZog5T3EgTFvJArtnBQ15Pmzjc55WTh",
  "key24": "4rwhxiTkerMt3zp5MsuRJX38VNFaxAMYEyRVKdpBWb6nzHWdf4W9PKJPVY1wEQyE3wJ8UAKBuBSTFFmWjuddsiyf",
  "key25": "2WLPQpw8K8grnfgij8dKJbgoV8yg8z91k7ypGLjtF2vBv4ytun8Lj8b6nPncdkyQzq6BFFmrg2VoGYGdY3ziwDTq",
  "key26": "5BqNYUURHBZSkC9MfFzw82LvxrkJM6GBSMbm2mXKHqEYwfGGshtE1gVgqMrbYTbaExPgMbpAb4AEE2euVHydxNyQ",
  "key27": "3RhaTLwwSZQzNzNmZbeUpLSedu7f9xuDwPVdKisziVrD1KiAzGrkexdu3MFmJMpidLi9Wx5EQyQZweX7NKRFybMz",
  "key28": "eahhp42Zu9batPY3eBFSNhJu7yvmXyp4GQEoLoWSeR3xd6VsA5DBqPJXjC13imobQ4wXEbDA8JYD6YEhCVsiVkb",
  "key29": "5fT5dpYRk9Xkcwb5G3p1QEssrcsuE4VeYjGVenVocFhuE5RBzPxWt9TKJkfrvXH8siVM5VrFxkbfuXQwEN16Ccp6",
  "key30": "3MvVP5NWEtRXxq6fptzeirH73r9R8Yzaqz9nigiiExEYLV1E7q9njaUgEd2f348G8MzJdyadYkQZ9v5AhkdhzoCc",
  "key31": "n7ER6hybrRvEmvBjUL44CNFbC5MJ4ARJzX8PyA6dqp94j1tnB6DyJj39fCuzZan7BW6rFFWpmBiVi6Min4KpMky",
  "key32": "5FoYQHWahnb2HSCP4kaqnMdTMxqcrX9BMa8PiMusWpSHW4bYoMVgyiGBrcpk2DhpgMb2jf3R2Q7LoptWhdom1Tb2",
  "key33": "3Nm61BUqMufHH5Dz4eT2rnaptFHW1BzMRkYFyEwUqc1qc4QKUaeCTR2jDDZSwXd5bR3S4LZ9DQuYbGSw3tva7GcV",
  "key34": "2AGvyKfvsgr6YC5NYv6s9ireG9kWyZA7i8zqap36TLiR7dJzqqrsVovQzaN5hsvnvtBRHEwoh1GzuiYJxvczCSmT",
  "key35": "3NCbR3fpmoqvZByWo7wCXqxYV9jeadWJjYRuD9uRmipLB2MYtgRLPWGb6t2MqgaDpAPfGBamtEs5MZSNmJ5e5Dw2",
  "key36": "2MqQwVLFn7Y6HzYV96C9EiWpscijw3ecnhYweVmgqGA7eCo2ATtfmkYiinQf9jBrzqY5s8nWAnuNvhZmsmDXgj18",
  "key37": "D4AgiCTCgkCHWgx5MjP3QPtTC9tU8CrqZDRoNRUTASxyDVkC6562YtMZGn5tmwc748xQXwDLDdEwQiSnLcNprNo",
  "key38": "S4c7aV5k6hHrFFcSSKPp5EhGzfdvkhEzhYDJ3XMKkTUh9VGDigjtkdXm42N1TxAnkJ9nh7amWUznQXb4FnTzWkU",
  "key39": "229n6cfRbNqa9HGm6NiBgDCFNB2had4vZ7oZA5yy6cteZFw6GejEbSdgVRPj4qzoFAtwaTvhm9NM3oD1SDr8KuDX"
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
