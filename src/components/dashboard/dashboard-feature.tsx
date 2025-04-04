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
    "4fyjr2y9n9dgGHg8gc7qByjXmYz3ffcFLhjDMTxgHGP3QsgGn3kt84gxC3t9sGoQTng9g82VrtJWqGkgUbWRrt5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e81vVYCZtzejPCu4M3GNRTVdyZvF4nj2idip5trGfN7ANYLxL8gZoMmvQnjsvxFzDYnJSMSWxisrb6DzDmjcRv2",
  "key1": "2StRnshh5EkGByys5iVMaxH4PdqDKu2LJ8AGJ8A2qgdtnizsRNQtJbyGLurfTYwhRA6kdgpvD9hc33Z1LPk1WcoQ",
  "key2": "5QzSrzZdjpDjSKHcHAMFKMuer5Auf86ErYDQEV4hZDWJLh5D8evk1oJRKAM2rxj8wJhaDPYvx6bqjb22kN5bU4WY",
  "key3": "4ZFpErp4Vtd6JttAtiPPeinabFWN2wqWEpZKNLxpjLcjW7KRFr1NoWB9EmW5gGCXv3g39v2MyY9qF7zUMpQ7RYkS",
  "key4": "4YoxvfWFsDrqZkJmbiX6eP5HszXRnTLS49pFqBVkyUf7GifUrvEv2WjdFM9XmU1MpxAw1oRFJcQyNBkV1Fu2T2B2",
  "key5": "5xg4ZhzXSkzubnHDjgXXcu5YkWDVoreG7UnSExr9WVYD8YVyWA3wwmcoXtReeF8F7eiBfDcTRcq9ALsNyupXMXKY",
  "key6": "27YeTv2cCTdTYBuTCkFmJu45bVKuJibZ3ajnMr3N8qcZHUPYVfqvfzum8jJuEpU24W2vNUi6V9xZejRcEPcn2bMD",
  "key7": "1MQkSXEgeYwdsjYGtywAAcj2pi4tubEFQJcvyF7VcbBZKfTmd5z19kbgLwKCgpnkCT4aYw7UU82e6ovGBam9QCK",
  "key8": "4XXb9CwwQU3RYpBjgFBXwiEZih6xarrvVTDmQWEEEedLRWxkHaBiZjRfR6LbrMgHeA9pxzoSYio2BWw1Nz2Vxnht",
  "key9": "3KDbjAvpYSsryEmuWLHpuGcUd3fm6ZH2gWCDWCMWzQNdNCnyEiqwQDPpPZXpSyVw1dJHmi6ZpQjUdFV4HzwSjFTm",
  "key10": "4BB4RTdCvgwZUXmFzQyYhyJnmjkvyfLojA24dxDCFa1JENkK5iDyFzBPHLxZHyGnbcV4aMoEfH7D2XBpaY8HBkHy",
  "key11": "3KfsJ4T2rKdFtrYPFbBPFkWTZQbePdjSbrmS3kcEwh9ptz1Me63hwg3CZPKDuxdttAocJqwMm91L6BAjp5T2zDDR",
  "key12": "5WhAhNzeKK8w5YA2epk7T2u9ZQJPB82E9AkRuS3JzpqyvnmyAtBsAP1GBFR8yMsN6PXVTodKDZDNLZAhhWFHLCxJ",
  "key13": "42GBiW9ZL9vVezQU2EogwDHZyW7na2EGt1Z4BxvH6G8XnyFN2uwQ82MDPi2HjjrbBVsXJgG6sV4teoy2bhjbLcSE",
  "key14": "4UdFmVps2gw52UKZbiSsmVfHqEWXyaEq2jhbXSmNCvVr61p7KCra9G4REg3APSP2B4BDhJcPeuL4gYP96176wcLp",
  "key15": "5UjUqF5W5ffssuL8KVLacd3FpgPeMECPnSPupqRKVqdsguUyTxYfpQt5MrmuQNWaJxr7bAEzM9r95yM1BgQmDvY3",
  "key16": "5qAotFfFeXPFuu8dtpDBRKt59ijgdbQxznH4ZgNTBsqKAuCPzBy8Pkkv1UiDRorXb8pmpVsjUsUsRL2n1sKxXCPq",
  "key17": "4LHfzXPmi2M3nbEN5LBsfi2cFwKVwd3TJorjPjs29oeREHxqmxoEhqVTPKxib5TGKP3W5N6WCw3rYwaNs15Wi6Bm",
  "key18": "24yzhSiZHdMhhRrgSvTqcreb4FemEVm9ADbm6zfxWjd2TrLcBnd4gvFFjapPb2pzdYF76w69QBkktAqiRhH3w43B",
  "key19": "2u1LoCx5td9VMEKcP7iZhJnKXKUaofgpfEfCZYJ338E61xraWZmNg6mimxENk1PjJDGZxTj6ooNdreGwfcBySoPR",
  "key20": "FMYxzSuKPrc8Uv5bjntHUcVsrsM7APshiSVmWa5DM5zq1qZ8FeajDPCEqJRqYdZEt3RLCetY7JTV5QT1SHz2bEu",
  "key21": "36wWduspVn6U6d37gzkpEuqv1YFZ5Ho4o5zYYS4rDvyb9X5cRXXTgTGGnNo6zGFgX86WJCHB56EEPvU1xRzQpmyp",
  "key22": "4JUgiZcAjw8kGiskbP3GWA1NbKwjnxz7zNXmdQrLQ7xWRFtsoEWSkcVgvFzA9ZzcrkvXzYFgF6mk7wS46F1s1gqu",
  "key23": "4XZ9FUukc4DvGQ1QUcxoHvXSTPk8S9wXbFdpqrH88AaiGabQuz83zQTjwvHayFviq6JBgA6TbJ5eJ1iGRNmewNT5",
  "key24": "3cygfGkvmNwiASQKnaNr3CiwppuXrR5xqdP2Hwa7UsQ5zupLLzAJk3sP7SzKcs3cyGMn5kndQF2vLSqz1o2oXnwp",
  "key25": "5CWXgQ7qSSLLX3KMpaQ7WtuF1y5fE3ccfgYw8uam9nhubzMDnNdCmrwuxuaqpLv8DjfSueoZBZoCDziF9B4tNBba",
  "key26": "5NchBq8PrGodVkCxw5zFVJRjuqx5wHeE5ovbbvE2u41HyYhJU8i4Nz45QHHyHsSNAnv3K8zZEnHdsdmsm9mozpC9",
  "key27": "52NZiikqmP1DncytdEx6s9iCpwactq1hSYJSWbUV4bKZEJQrV286K8HYYd9FWsrEkqdyaX8Y5n3Sj6EEFTeATU52",
  "key28": "5kqrt1NwPBJhiC9xHVJs9o1dzRqaSVkzFbE3cjJptTrqVEKFtFqNWWvotP4ptthycEj2ReRk7A9usDL5nafw1DNR",
  "key29": "2xV48FR5v5958VmhkyaK5sL7BMzGc8buMizfianXby9eBx1M7nzsxsBA2fKHbXsWDpY9Ek79ogugx9QePNzSuJj6"
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
