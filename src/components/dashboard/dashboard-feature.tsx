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
    "5JHr5kt2V5irzxeE3YJ623uktDfXmvEGjELtKtGJ6n3GoDSgTfadt97zmBmR3GgfUnTBbPGpD4yB3x4TWqpSW6rH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EzxTLRtotvSQxCb78GuHoNqKUdEHKi7NukJCnFX9dWKY4SnsPjUATtph5QFQgu2LzB3qmkvnryYFnEz1hKVCEbu",
  "key1": "2TYvDamfSCDRrtiQD8znWZrhEurXoGVJaZ2RvvAm85wcfYd5jvPq9iJyZ6qCv2ArkFHqZyAUMDv2uKzAhqz3ZtCL",
  "key2": "4QVhottuNbw56VAZZe2ptMJQDJjMWKRVvR52TxXSXKiCBbA3xzPEE7XM5pEyQCnuLCXF6oyT3hDP8BRxJphtVeqo",
  "key3": "F8zihZFibRBWQEYNfEx9zwTLV1xG5ctNjuU8gKFdwBi1NqtSqDBVPYm8fdiiBEvdAMeu7FLBwWHHXorDFNdV411",
  "key4": "5yRdwARf8eqRKqFrtVVegJL56QrHD4kNVMF9raWT55ZyMqMoFQ2TCk6K6xjaGddKeWcRbYdTJVh3fwWpeqKSacxf",
  "key5": "2CNa3b6q9MqdVZZuzWH3RUSFMK4APLzAN1wLYXf8ygjXwDZpvAzoPZfACsJzDbj46BjQeYnDr62iCdNZbHQKv8wk",
  "key6": "Udne5xNKyTML8EjzLCPsF5RAd3Pg8V47NC1WbD4zPHYMwsE1S4Kw1fcJDSiNtpQHNhyvTzGyJPdNh3zzD1Ac65A",
  "key7": "kCDNgASose8p4Qb2xoah5Wn3PmDWvEPmGqWQse9azvK2T7YtwQb1cTSYbBYmwyenU5om4HHjvswKzTajcfRfSPt",
  "key8": "4MvW5zAxcb2rBo2Lt672c6SRHQXKvv7XGmCNqNWJc81CsVKK9t5SBQFyW5BuHLSGXZAH1Ji4pFKg1hXfeDY7aHVw",
  "key9": "21Nb5baeTqo3SwbxFMmRQURRCaBnPZQmA8qkhobcjnTBFTU4sTfWQhQ1kjAf6PgeTgznnh5jBoRJo5XxfgFGbgdR",
  "key10": "589PZZ2D6MZPygDVyzwDbDTqAeWqnD61s3tyC9oWFX6b59VBkMgFGzg41vwE7rJJ2H3ncWvrbKTg9BED8Q7qaVBP",
  "key11": "5FwiE2QKJ9RuG27Z7jTXEUTCSTVLfpvoGNaj5KwQRcmNyRiuhFkVeUdt9JEkiFb5F4M9HUTMof9oYk7CbdCZA6Ne",
  "key12": "sS7otWuKHvzWMM2jR5sG3PUrbP8byxJHL2ZN1tarMWmsXmVzqVHkeo7bdQU2eYfnPekg6fFsNEv178UUGWtEnXm",
  "key13": "A75SPKgW9FR2TpGbSVnFiCpWXS4JzLtxFttPC3awYXdtWDbjJHNKmMLEv3QEmHGcZGuwUQd25tJNo849ywMdXxq",
  "key14": "3GKcKCxuvtNX9UPe92DPNLLtLQFAdWAW7XMQNezzTT7DqTdC5S1SSSnQ6fESyKHVQUBnb6zST4bVRNQF1c2JMiHP",
  "key15": "2z2YuyH3Qpm3akvDAuRP9uPTjgAjS5uVSdu7GpiMzWCcVu5QiVMGwD4BFGPtmYfonrTxXDFDqHzgj8fYLqmRGfAQ",
  "key16": "8qpUTdovgxiBm3L9yzJKHc1f4quY2J9mAwsojCFWtYWrcNRAipt4SEwP8axB2qiaH2izVNENAZgzSLXzHBFcjsA",
  "key17": "5eGNFaUYZJnDfttonXArze94YXdmpFZDWfqg6Nt1iECEKYiDcEj6JDDs36anPU7KwLtzWsomWwTMwxhb3v2g5cQH",
  "key18": "3u8djuE34BAoYV7JDPFJFmKAA3HNEd1MRqPgUwR2mqaWarK3XKPcfqE2wA78dd15nUsKMsC6wCovPjrwKAEmnwLD",
  "key19": "4aUDXiLK5Cf41x6wu1AMuYbdZYgdtBiaoaozKWso4sSYFtKYwWhmzFJjHJknBTH7prep2HZeHsNDQGJeMfpBmF1B",
  "key20": "2iUArSpj7cPtcaiGFzf1qyAtSex9sDyDrDkJWxnDMi7ksXwZ6xYtrRm2vSFXMwuDKGZa8aQ8SsbRfqgeucxR9Cqf",
  "key21": "5mSsNwEnuaBjZkitYpiijubFASNhcya8DY788phsW2rztva5DxRt6BaAk4bUAbHujXd6ctbz1h1LDuzJh1aJYCqK",
  "key22": "4WXPyqnJ1YyRhmfidL86kHgAThYGYR14cUnx2VAra6q8ZWi3ncrvTccZtyMUCaYoK56mHfLZAmKSVHiTb3dzQZ5A",
  "key23": "oGyJKovkdBahmDhDMHbmai8MJ3zbJS44YkpHTFA5zaRHvmS93dWMruC5pX9XeuiyKfXAXKKsMAu4sM1swVjjuGa",
  "key24": "2RJU6CDbjYLnHXjSDJusisiafwzjCUSCQHUzPP7ezZURfhXMiaSkGhrdojLYuerR3S8cj1SitA9CDWPPT6n4kF8z",
  "key25": "4eRU8mhdCLke32gdZAHAm2qcocq1eVYaR3Wj6G6PYoMPdWJsUYbKtiDkRnavaVG3jym8frU1a4Ywjwh8cS2Lz3M1",
  "key26": "4SjEng5iKaypv3CJ1KxtRaCnT2JcQKLS3euF9Ycr7qDVXiCP5YGHKrMyNh8jeM7chg7QNPtPpyMuJ3YZbFQF9wF8",
  "key27": "2uUpuhrDNRGH9TrANH4pLmMaC9Ukxwz4VFshktw1hVPoPYXNAGtftRoNsqB12msB8bgm5kJ1sD8UUndcrQ2jL8qa",
  "key28": "4zj4GeCCBN7HjaGP2dfZsXTorpGFEZV3HUPK7WttStFWhNE9cxkYuPj8GTT5XkZ8ouG7cogWHs4tgjgpzXeqZayq",
  "key29": "4QGbYVMZNxXYmW4u3C9mj4V5JJoywzwrdBJZNM22K8MPm5D5zDgdQb81vmg5HLXjYQ8pDXpctZzf2wvayPuDmFNu",
  "key30": "2SUqtFKaZyjHfkitUzsv1LYZtxTHoiwebF1982FQ85aZaBcjFsQPDLchXg3jckERNWChUDnRqFPtWGRcw1DACW51",
  "key31": "2WkW6zRdVzrynHi3LkES71KpTFVRkFQP8wyNDttKhgx6UNFaVJDS7Z5RZPyKZ2HR7gcYgueNqxpR51fz1BAHjTiJ",
  "key32": "5FeyitC1UoC9oftes4gDSpqByFkegSQBb8AcZMtaVCVVxVuCXaQxqNMDRZRG7yz3iBtcCqwUTkYBBD3dXb6vww5H",
  "key33": "3xHSoPfRRpMdvFugP7bL2rUDTYkq9a4hwkpTAY93cJ1jGBRipb5NaPrKeVvjweCFZc3GZ8MDWSv1KoLSJN9WTQVt",
  "key34": "2jYGCBM1MFuPLjqde6qMFacJ59ig2BFV885MiHNMUi54kXfD5H9FpHTWimK6udJ94xbJVQXCjh3dLgw3TgQxvqWL",
  "key35": "4LmfFAdpsVFQ2JaJffNGh8vT2cV1CgW9NQAk2rLZ3WuBifRf91fmV8zJLeBKu9wGMpESXYB3eQ3uMHLjzT4BrYjb",
  "key36": "4PCyD1mR7Mi2Y2DbvEJ25D7psZvvaCMsP6iBLmaJrSYpTHM9FW3zm598mqmxDJ33RkKehMFSbvSsZRca8Gk66ZMP",
  "key37": "gaH2X9DmTSAzKPHta7WEdc9fxdERSQjje2k1x2Cz8WaXLGSTbnArgVHbMvNUJXzVTz6xptrTLKyX23oXTvKRhb6"
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
