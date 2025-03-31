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
    "2oRRKUZrbdshSqnuyUTqQ4PMSFBqLkZwuWfWBvUHfAjccdmQdS6D23f1YAkWmLbb3u8RMHXKcdeSyLQznYy6SEpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21kwi5mocD7idz7pn6wqWatE5BHQcr1i56hoJfzJMGGJqHZYJYgj4jPAwXpTykCukopGsXM7SZFZ4esdx39ZScJZ",
  "key1": "5LdrxYc4Jk4EJ1DGmabrGM7MgRHu1EjbbUnzPo1CCPXob8TVZiAkUky11GkdSMWbt54L8UVEHieMzNxk8uyvKLBt",
  "key2": "2gPLjUy1n2Bf2AhTqicL1MdpAzq8bo5kTHGCi4DV7kAWbKoRkZVQGi8iEDBKRJF5PVWMicvFSTREca2Mny3ovPU7",
  "key3": "5ao9obS3uKiSFzsZshgkyWuF7LJFVyHfUUoT6qvGBgygUdrVLXyT8hsyJ1hANWb9CozoprvVXSYrenskowLycZ5Z",
  "key4": "25jqKsNgbsM6mRRJC2uZ19rp8UeE7rV3afVxRyWGSMo6EhF7w6Mm1fnQvUzkDiBTcHrJFS8bhQBAC1v34A4rYhyh",
  "key5": "2qmNSrqA658XDinGcZ7w8DBc37bjJqFkXB1bAYzFrz8UJiqDh67nyS5Ey9iFUMW3J9EE9CKncKFMJ6ksaLu2QMPC",
  "key6": "2YS1fg6CDn4hZVWyZmfwKvAqxAEDANSGxshiv3LW1kdH1iAscxKmvM7SD3hxMZZfjcuQ5wTT35XNz89n1wBvs11C",
  "key7": "3gy6Gn4vTTAVQqZ4Uoo8LgNNjMRy5mKotuc67ijTWxATvEJUxrj8WK4r6iPdPqY7W9RMGEEnPY2T3D7fEJPxFMeX",
  "key8": "2STy7NdDyAFE1jsYoZrh7z5VUNYHPRQSHjja6SHpBToTduCbfkMKyS9dWAXjezoxr4qAid26UEm9KcjF9bKbphQX",
  "key9": "2wWdiiwymxqmkQRCx9EahDyhRBkfu36GsCELdujWeUL7SsVk98MEzGZM7eeDFpsVrUUCh2dNy1Xf6tAoKVQrb7ZC",
  "key10": "2B5jPbuNC7LuYqodw4wjZVkLBRSiKPuhQXiBfBsevikDtr4X2Afn4Nwm5ijzghrsvy5cEexFf3pbuUHpRMCS8nLZ",
  "key11": "3BiyuCaSwAAEp1iaYUP56EBvfEiYBZbwcrsy9ffTgh5ptaPLGKfFMLYPrHXyUdkSeZqqsdNGu2fVmmY3i4nzMgBw",
  "key12": "5Pf8o4uPLRpuY6KpPUMxxLzB2ujG5ks8berYzaYsdkgodwKTStcFbh6uuPnQsp3gXFnjFQuHMEbtFRJyuPLtU5A4",
  "key13": "5AXGQoM7sL4wVnUZ7inmEiHfK1Dku87TNuXxLJQd9WjQGYRMPBf7iYxyJjnSpDCjMfdhpJ2ULJA9c1fVLNyd4bXW",
  "key14": "66KYzS3Npj7sKN2aYxKhKLznb3dozXCGGJdqisvkSAHumEFafcLNgC3Y1UqHiPwnbUJDxdHmQtwJB6JJsfPZzdpe",
  "key15": "3HqNywz7FknxMTadwbDErWq26nq15MMp5ozYFQiGUHhtLwSQujvDDw7eW8Evw82ezxgRY9QEaEK4qoSZagdXK965",
  "key16": "4r8cFGeD65xdPRRu4MsgmspwiK478SdTziMe9bxpv4vNbjuGy3wh6QDZscjYFv7E7D8LVwi3dA3QAHnzZzEkupM6",
  "key17": "4Dh3ZV5VKfGBZQeLeSiDwPKkjKvYy7TsQgdc9Mrndt1A1jsgVu43ioeX5QC1y3UmfMkT45Y5mfF7X8Apjuwp7oZM",
  "key18": "5yFnHFT1KL78maMXrpZNRDa6qaGnhgohJnYqkQbNTJnig3gCjvkDGPW2rS6oLRri2r1XJCFa6PULXvK4wDhqcPXn",
  "key19": "3qtMqfcPP7ZsvFqGzKriuk9dKxfBHUGNm1TXm9iYJcxENayVWEDh4ZbnknNuHJ65ZAePw9ip8vBbQ4BUwB22zYBK",
  "key20": "2CjC8QeJR88annja7SRK1fJLEJtHpBEC1QvJmEAQFzp7DdsUjbjYcq4dwjD7BNnEXz2nYdYDtVnXFSkinU6ugBh3",
  "key21": "21bHY5PXjvpFoPLLXEkcFTvqdYtUGerjALyqD51pA7YfUwbMDxkhdVsNf9h8zqu4zM2ZCvmqGyy8FjUtj7gp2Hcn",
  "key22": "ca5pE6FNRSmgu5UNq8bEYJCbe3Xu6wqcYE7unsGtjyWENXt3vEqMLUadYJZZsRcbXBoNCnoPtKBnqn71Zy9jWHs",
  "key23": "MTcnWdXCz9RdmrpRAMNFpkZkB1NX7rBzJMaZ2gH1jn7FPNxQYpV1riVdNnR26gZ5wTEgZdTwciKhPhi7mgjKwV1",
  "key24": "4ByvnEmr8En85FWG1itPeLHjSbCZd6JCJMunHjU2QimamD1vc6Cx8PwDjVKNVwWgN7eeU2u1v1Ru2p9TX69NMA59",
  "key25": "5Ei16FLuF6uqEqv8NfwwDESipeB5ELhqpnSKk4DTC5EkDWBXdk7tUQb6JkJ5mf4GEDLJ1EEtEz5Gw9MssS5fHDzx",
  "key26": "2r7YDBgi55aZSmKDE4mK3BadBVUiugK76UWVH5o2GP58jyWJj3oRkLnL9SuoiSNxaiA1RUbhwAV9Br7z1VBvaZPS",
  "key27": "4T9avcCihvWbQTZSBvRWczpJR3HgqYhzbxJvUxWBTr86xERMvqh71zf4rLCTTysdh9E4cABUUoLCDvmrm7wgXDij",
  "key28": "371CSdRCFkNYxkfHi9PUo1m18mAnyYWTvMcRXwo6pohJ4YXtoAJP3P2KordUPkuJtsVrokBywFuPptn9qohegPSq",
  "key29": "5pskAyEeUdpBQJsJtJUhDCodgh458Cx5TcvAa6ED5rUkDcyJYYemDCF2yZExkWeNDGFxKRPgGfsiXPM5vWVPf1Na",
  "key30": "251r7sR8eHhni2wtrMnBVq8BFQnBVGz2EM16BLZZETtjJmJdMEWuZEKhdg2Xi6FTSy3zcFF7YCmG8Wa2UcMMRNtR",
  "key31": "Jn5faHo44Uicu3rTkXD6vXGgipL691QKVx5dJhbpWMZuHiQG8TBiC98Yug3E5CDmPzBExBrt6B5PsHUNoZzqSVJ",
  "key32": "4CkZGsc7Lx4sDSnsNuWXhdZ1BLTz2sMJmQUoWN1iNUx5Jx6S2ySfL3g78Hd9zVS1Txjh9aRpbcAhCTrSNzeeGw2A",
  "key33": "2bBo8PjUaVB8kq4XN4zTcR923gQ6WEGFcfrZDW9qvHvgg6qq7b3caPnvjATcM7YhsPuXwBY8keoGbfewTZDuZaCC",
  "key34": "5vNxe3bwUxcKjBpWuoywr6oYEYk41aX2yELitN4DUaSAMjjErmj8iiZgpGCDRbExgbwhEjkyZJfCe49C1oYodMZy",
  "key35": "LqpYwpec1cRJSX822e9V5R25so3zFywy61XAFWTYDKGP5yptU9EDsYBcUu3Kb7mK8sfFQQ4MMoNdBYrMo3cZ6yk"
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
