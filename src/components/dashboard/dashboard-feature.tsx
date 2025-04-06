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
    "6sMp5ayZKL4iH2GBDmWJ7aBnCST5G1PZHvmXRfviJwLDfpciPpFRXNPNH4LxKcGgQuKuL35cXudgYyeP8Vf3sVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X8qQS6mcxXxBJks4xuY4ZeEs72k7QPsbkSUJaJi1AuBop71kWJLVBDcoaXsJBEFyBBwqZnMd5HuwNqGach7ng56",
  "key1": "3cLZSgtwbK1qdcVTXrT8TpytcKo3taEaePTYKGL6vaUVPQBmsLZ4vAbgHfbeoJ1LVb115S2ka6h76qX3iakwN4rH",
  "key2": "2Tsihz54dgwK64PPm4DDikj5tyYdzMxHz6oBz2vXYGMt61kggF4K9yb7jbAAh5RtdaaqfY49KRSq1Q9GXVu7EhsE",
  "key3": "5CPoQRCFKArvnyMRyRkSMuCmbrawq9WeB32h752iQCBmMYQm7onvbNXB8Tahv51DZY7kpUFJkTRfYiAbBrweh5Y9",
  "key4": "4oTRbLCnCBM4qpoE85w9SbZ3WWh9KLsARRv3vwsoZhpYJ3ZLde1KxGjYHj9tacFxqbRa8pzWCd3uLAGj5tY4JSry",
  "key5": "HNSF4WRCcEjSoUiQJd2ZmkzVu4gu4kAQge3anNRLeWiUNseTX92r3jzQ1mJbAhSjkDUPeysQRVdbyt7dKQ7e7yZ",
  "key6": "5vgwLq7RB5TUiEnVPakhtaFrVzkEpNdXeEEgA3wyGAYMUURzLejoiD4XeBvdomZqreYiLBXYLWaGUzoAGC9faPVr",
  "key7": "3qx1G7GMxG3uPwsEFc5yGLGVym1TbNM1jh6SWpCP82uFsDRwqenmQvnD9g7toHV65TyLFYpmm4YDzN8SX2A6nr5Y",
  "key8": "3qPZCd3TWvrmT9Jo9XfLRWbjd1G8oWe9dSMQknjL399DAGgYCAg1JM1bSjfQsXwd8wDKP5WuLgCNsRRf1vNAccMr",
  "key9": "5y5FuDQTVq4SwqenzNzTyPFFTK9cqoMz38DW7sDhCEhfiHonZ3qhBbqSvyr1hgAKpQTV6g6si2uS69DHU6aeVuPV",
  "key10": "5JjhTfvwxH4oJutc6WyVhCH58bY19NHLHWBAMWKSwtbzUauNy5pqNJ2c7xmyhqbc9UaTNzdsmHDpcq3aWzet4ahA",
  "key11": "5aTSptUik2whRNrUAJ87CFZq4QcRBJncvFhLqgtTApm5ZwyEgGiq9b5RZwwwbLHKUyrVcpqjW5KFhWQzUbQep7aY",
  "key12": "4bGpuxkCZr1rpVvCfHP5hLqEXoM9PrFgnxdqKnPw3J22wUjtNRcECjWxVpPjws1AwoYz4Cuvfqx7TwLNKtkBUKzn",
  "key13": "5vQQyxHqgfZyymstS9fZS9eek9v1pBzuCAmagNKPPtSJpKR5A12ZSbs5Q3BY13iaeYr7jGa9jBTTm8sxmzdzQ5nc",
  "key14": "5DPZop8xGBN6zxxKb5wRWWZ88jZp4T5rmKZxtSx1FhTWm2bEP8zPZcjw2pTne5VxFLgDSeWEf5pdXdBWs2V5brmP",
  "key15": "4KW7GhsvPGcPLXMQNY7TSxGtzwf3PaZzGSSpiLb9gCy9jRFAMAvqNmqLYjmCCaXZC2gwCwjVV9G1mjTvpS1crHWi",
  "key16": "sRK4TN1TnAxdtNC7NC891KBe8rfPgqBGLd1waEZHsXo5Zrsac8muWvpNRssReCqTz46qswRMG3CZYomMAmrvbGG",
  "key17": "2PpbWhNyMJXkhmvTiUUs1Lc9YYKTNmYQxyCn2cYGFVVVnNZnRFZK3QtGpFRjtnQDkNAtGc6TJetRE8kU7N2b43xa",
  "key18": "3oJEiAdrmxXkodxbXFJYeNMAuYY2xWmEqUMBBE7SMWKbbTgXae3iYHjixHd18HMjv84xP3kiCcwCaus2p7hve4Cn",
  "key19": "a3wmCPgapcGmHNvcAHmAmfU3hgScnQibPxWXajHdPuYGFBWyCfSsUY1EyfUeXkbNzit6VKPF4hEDRrM76eY489i",
  "key20": "4TXvJXVswZ7LKGxdrQuN7xMAPtutFt6cAaRTWkC5mLcybhA9JsEtNz5Nc37SHuH27YyyCJqT4J5ntzN7gtKauHC2",
  "key21": "3ywhfwCFpGgyFM3eRQAj5VeV4BNcdL5WSru2cBToEZtYg6dxSMMBPEnTmfLZMh4cRn1MHikDJ1y4f6tkR9UUykBY",
  "key22": "2cg5oyCsUoDqrqZMmArKgYtCFU3cxsL2JayS9Vb1rWzzuxeqeC1MmG2fH3sH78KT8yCSsBeQYuM28DUrCqugTzG7",
  "key23": "5BL9oLseUShA2NGhVVhTfTsxqTLgM1M8bEGuewTP3yAnikUQK7vUKxT2XV9pnYWn91uvhjhgw9h3kBGLZqvx8qft",
  "key24": "4TFoquE4UJVrSuKFWDs6GZLp8853tSyZXv9YNFcpWn9ygWoADwnqZcHPtXe5BeE2bPBQi33tA3J5nVX1yDdq99xi",
  "key25": "3Q68drsRPToWAX9t5zbyZVciULTBR53GG3iSymqHRf6VNpbWmXrmHAtN2DhKdgEV4HyXE2PA2sDZL3mExpYYXEJK",
  "key26": "5zG8ms2u3tdhY6eaGQobYmHGGmKhbwT2yUzmpkffgq8bV4ZKbLQANQvBPzhp3SGRho9qmZWKaRoSvLpawnvKJBHn",
  "key27": "7EzimauPhiDhUtrvpj7kJUmNBoM9n2caVz8KXgxthwkdxMka4mLV9QxLnxcNC8sxEisxdTvGqk5z7guooCAQDmc",
  "key28": "v56HMh5SYjrHGQAcoAfw6BdBBSMCGtG5RX3KLwwnjyJuwRNm4UXqR6hPG9rVLU7mond65dWNhu3W1JpTYnds5u7",
  "key29": "4X2EbE4TS1arCyCTVQWe5C7MeysEcB8WoetGW2fEsvxHcqdwixfbFHkE9wpw3WrnstmYVjJAgACePiK1hC8QgSdu",
  "key30": "kQVtbRqcmjUZSNbbUAkPsSsTRtaUdQzKMqdtZRuCvajiukYAPwJ664GT2LVXUcefqzz8ykZS1B71nUPudpTWzGo",
  "key31": "JQvkTbyonMhssiKbFrnvmAoHBeJB1MGBtfefc75zeWXYXhTK6TbaHZnp5sdvCSyJiuW8UVUAwENRWPZjLzbxXih",
  "key32": "5mgqsWE5ogvWtAmyosX6SoLving2wH6LNTF2bPWN8qkv32VJsLJC74GwGvkWbjypcTnZGFiJXtcLeE4vptdEP4pS",
  "key33": "2uTX4GQXqVoZh92CtPu3Qk5r7mrm5g2PJi5PCQadiNeK32EFQFsnpy1jubzAQZUCQtqnY46CzQHG93GPWXCJrUrc",
  "key34": "4wVbFx3xUgK1cTTqsA8Ti27MqRwWMmy6sFXy8w83u4KsAgupVKEPRN6FiH2MuJHe8Q1ckWFE1s8TGBPHPxkNFSS6",
  "key35": "5bDoo2fCLsCcZn2qYkytYEZE5a5omsnBUXnwnQo8v9439vL8Nj3eGQAZqwv1hDCRfkxwruWWRUbr3dBa65uHyHiY",
  "key36": "3zcVCrCG5ounfWEP1KaEaZCU9YqevveUkhF4XoXdq6noRo1AxGELWUXE32u1UqXvN1eDabtmYLDoTV3H6SVTLUPZ",
  "key37": "2HX21ahLUMVFioe4pAcC2XPQThUXHTXEXhsQoviWDEVu6HAK41gAkMfcqcPZLjm6McpaRqLDcVPTSPGPKpS5X2r5",
  "key38": "2rMatxMnhp3VCSsogAWZ4s4AfBMigi86KXaatYRSrq16UZn5yTYRvZ9PRkvwhPSwoFiNBkwGXLvUToaVB3Z9y3uM"
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
