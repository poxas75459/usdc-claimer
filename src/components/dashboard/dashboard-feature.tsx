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
    "2sSY8Rhh3GvC31jxDFWgtFab9YqXNNLMEXySUP7kMt52dNYCzwR6ZxYvon7sxZVBwZmbLgAjpQWThVqwE716n6q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UWNe1wJurW5XcsTN72bCXRco4fnnHwKKyo2GjqS9ydsGFEDwDfJCF319KwAucV9EkRgG1gT2WLfDQhZgVx7NwkE",
  "key1": "3bx9grdK2SWqVQUbqu8AuXh96urUfh4Kyu9HzWGZjQ44EdZFD8T4wSjZy7RwmUNCrPpvNaoDuB2SKjXkGwRr1fp5",
  "key2": "3zi4vuudZ53GRJuvVXjH6NLXR9m9d7Q1Kvt6id6oDqJLRaY56t2ApCXdUY4h3WtARPozpofkAWcLWzMz8QeZ2Kup",
  "key3": "2W8Anj7J3mHq6UEVziwpzp3sXNxKpmw6zhJYJjrf25hBiBUdfHWixCvfsvhPby2rNVkkyWyF3iZqL2wBpq36BKyh",
  "key4": "3kdHda4fkJGS428DZe3mgBtsgjeiaMky4dKV2XK9ntdnCxoDKXikwRiQuQmUxqtCYHbNviHig5zF3aR49gFHDta4",
  "key5": "Mw6P9LGgKUEQT6KTimbPqpvAWj7CartQCM2LwqtpbNqUuojawuobvw8kKxMmRqp4eiiGTqnUYwyPNfcU3dXLBUp",
  "key6": "3HkZhnPP6QaifxAc6RU11xjGrp4SXF7iBEZh7pxYitgJYbsY1pPysAd5QJPrMFueatqUWm3RpejGtjVkmTiKKwdQ",
  "key7": "3DP95uGBUg384HKU5drWYUBCW5QaMxrKwdPzeAY9RxY2cT7Tsu846nXPUaSGbsGGPLsdeG55S4AykX3jc7NXUkJh",
  "key8": "22991AU3q24XYxPaeE5zWT4TJBhAgYDhLuiHp2XgoZrSvoYV6u2HY4CxLntHYPY1QmrZBkwEpLiTQTgZ3sJ69Th3",
  "key9": "48oTGji5iY6UMMvV3oZeA4cUrYqPsk444A41MErfnKSENw9R3GFNod8mXgzuRUCs6V3zKjXzda6x6YmPw6U5M4ro",
  "key10": "4YQJG9w61RdYGB2T5ERmmaqdV2Sb3cKYB27WadmdtoydGFvv1m9pNVNF4dLRLJqaBCzqS529kEr1GbxfQLEB2S2c",
  "key11": "25b22NBdq8AaJBXYJ5Wv1t8vooDDicmVS5ZG5ssdpdTErxSBpdjKVmpeBrZJF9QmZEH8hrhSbsPx1RddRLcz3FDU",
  "key12": "Sv4uxvaNPvVevvYTyQdzfTVcsx2gYqH4WfynosJksXFcDrJXgYk6DSjdSxGJJp6vfk1QErFcEo4tEBzuvviN3Tw",
  "key13": "4GpCinqeLmhYxsEPgMz92Q2vB6x3AthRW3RFNqX9yc8WrUoJqXUDMTENvUczNqBLTH5CNDUYT6ERpNiTVk9uWaJb",
  "key14": "3YSBPCbQ9Sm1KYTJPeCuC7TxoJuupyRzH35TJFBnEPavDyjWXaHFCB9ds7wLU4rZoZeNVX1M8uKWDCFjZnozuVgg",
  "key15": "3V5YJ7cPASDcKLfPqi3f7Crpy9ArcbfrLFf3dFYkedY7sJ6BCuGms98i7LxCWUQfcjpUY5znpL9c7x5sQSynsPkv",
  "key16": "3WrbpDRshASPGE6NM4PahC3Xk5yRKkEsrpnmEUhdsXah8SoADfGkXBbsuW6fM3MJQk5RXLy4dhfGwxUXPJoeRwn2",
  "key17": "2MvpPvXM8ZqkFoJu9kcNRG7dmEkTPE38GhZtzwp9y1ZcazUtcJP56iqa1oFiFWmampbUm7XXx9FLkA6GepucuoKe",
  "key18": "62v5WvbXaMZwV8euXkt9VEvDdzGMJHsRpoE1rTh18suEpqpLpFdoJ5ZZNfqAqPxr7f6DS4fgog6U3BUwhUHNbxA3",
  "key19": "25jjoGDBqioSTXDe81zPh7sEoRXMcpk3qoPKV7kfvctFRjrmiFAR6e7PFoW8tvR9yCn2NdLrPPa7W629X4eQSzgi",
  "key20": "5qMrFRjC5GyV4uP4NP98hqCVwaJx2Pws7ocdhu9JoBtohp7fAW7D1ehEGvwmXCSyJmX8KS3xyZ8KW45WJKTHrCyN",
  "key21": "64jhz9cgFJCw1aUFYNjNUQrEYBuivmtmnax2PXaQjui3V39ZWRY4e3UzyLbqqdB6BaS8h5nXxyLJdVb3yxPoqFCH",
  "key22": "3YQxdhn5DZbEJ58o77QxSHJtoTBktrXXx7iPsFFGoUX7nXyKXFpovdrsZxpnF9gKURgNXWBfudsPf4aGMh19rRY9",
  "key23": "3ePKeCLtGzXYYDGpHShhTL2mkV2idHqpAXbxEbZR7ZVfZLf34r4rVGBUdC2BELu8xGUr56f6ekHwpD9Xzd9Ntfou",
  "key24": "4g8bpezFyRC4aCybCPg3YR5tvZAG2n9y9BJafq3ixzsaoxScCZ7FnT9UYzjCuYzK4m9PNwexHj5jowwf8dy2JU8M",
  "key25": "5z2V3H3wnUxWyoPoyy3apiCwp4dsJqNtDNSktGuWYLzd47WF1jj7MSwNsH5oDmK5DajvtUenrf5dgxCs8vwNQDRv",
  "key26": "4Kk35coJL8Why46V8CuHY31w5suJjJpdqPK9X5v55HuMdY2idbL7cLTz4K8wWgNTDGQur37nFAvBHGLY5k15WH8q",
  "key27": "48DvMA86gXSPkfK7DKy659yYtwZq9QEVEUj8EvXkcZ7ZjTjbS2n92nkUjeUdNwTwJNbdKqukLMrBMPoLWaVdZHZA",
  "key28": "2bPEDjLkg4deTzxofDxFCBXf2W636JFyoFVN8pFT7MhfwXFmKpktZM4NkWjuUs6NDoh1p7D1m25FEQRsZWsayHmY",
  "key29": "271WbJMS2EtJAmCsGoXKDrjfaw1kx6bQHru6EMd4L4gpsG4tsfSbfskWF9ewDdkxZy5ZzgFjJRW5EKvx1FUMMert",
  "key30": "5hwvv7aowj5FDzLXHoifxPGyQRQdCDXo8KZiN4TaMJaGeqNCi9MoJwwZShbfyricRTwW8Rj8fjZtzP3GvH6DncJ9",
  "key31": "xP8iN8fsJanEnRawmqVve7kE2PtgNKDH9HTSQVKMZzULGaKKNNUnMqcv9JGaFXbhnrTe6FxZQgwL1RL39CDjxdc",
  "key32": "3FywYsciagvghouMQnukZ8pvZYaQ3CaATm2KLw1EtHWWc5uMDtquXxoEQuLA8dQxUkGMLJfyz2jKpLQDyDzxX7qc",
  "key33": "5CFZsVr6ZQD5CbRUPn23WcPpzbyBXybnynAA2vKR5CYbevPyJWzeVGyYUbzskDdpkn2p19G49YJwg7qhWeouSgHi",
  "key34": "64oiY1bVCdyynFGMCLTtViU2v7tcQKarXVPWdGnmXP42eyocFaeytx9ZjVJpJKKmXBywZwfTrdA47HNg4dmgVLFg",
  "key35": "2ttbcsdXU4QUopdrDmzKnSQ79XYEXK76NxRpepHCd7t6RMHNeokGwWrduEAh5oWzF4Duxag1E4GHr6U1W3uRz8kk"
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
