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
    "3v5ejMb4BVa2FkAYJaCAPQfZJEsLFJGdMsZW4ee5DyUucKA4faDG7ngNT5e5aB7gYkwsWpf5wPqTcXTHXnNsZD1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L7egacAoto2eE7Sro8EC3VZn67GxHUSJzunZ44DHFLwJNfqCyEij2Bqtj5iLRb69vA3uVosVEvXvXM4U5wdhNap",
  "key1": "5F7FckcyoXJiyRQg7zFsKCQuGaGL8CujmzUHK75TgRRW9684Ti8F4Q7Kiqxxg77DMRun8ji1unnjt1cDjuJG7Y2G",
  "key2": "5GrswMNqNAyL7YwaMSpyrQDy61BHiq4vpJ214mX3YwJfBNnGrtQAbwc5wHRwWUi8x5HX4nFrpZPWo9NsiL6EFYp6",
  "key3": "WsaJjhKf3vCvKjVKY6UqozMSpDGEwgiHxJ3AjaiP3uk8D5Bwz4xJitQC8YRkd6iqxVbN1EErwwFcAawC1M1MMXF",
  "key4": "3jfGakU9cX7QmkFH72xX4vsg1nYeiTvj1aw8wpufKHzqudhVwdR9BpRAEEDtV25RXYmq3hzPT6iDGKZVrv1ZVGnM",
  "key5": "4oX3ddU94GewBv5fqbwoaQfnB6AGARdDANQNLs6TdGTTfgDzSswFDB3K6mGLhb5wco5Z91jmUQr5Rkhcnicr3UgW",
  "key6": "nxcnLQrLRKcNQsDTDzCuaYdEc7YDxaEWacwnBJBXwqacxKWKVWprs9SBGZgh2EtEp5BHRLzACBEcgDEhW6jZQkf",
  "key7": "2BiQBzMPDGeBcxYGWU1gxLcdMmD73bSWZnornehiiNBZeWz4218jkmQM6atNaeJpdyqPQveVGanWHQLuGnU5TFPp",
  "key8": "3rYiW5hLoXLQC5fmbHpnKSXN1jai3TGQ8BHWaLwR3RxQ2HiL37uVLnLq9kRc4LnfY5HBxAiPGbwH2rVoZZ6EqGvF",
  "key9": "2hSd39m1nVAEiriPtoxwWgs2Y1pJAaoMcq5Vu9Wdgmk6FMnyGz31qdnSnjbXJGGhZuLLBrfYB7X7wvVYt4mz2L8C",
  "key10": "3asNj5UzsLwUoS3h2HDKQzJ9cyAAN1espvJEpzAHrKfTVr2DALm5nPVwgzguZM8k3Ne6Qynvku22h4xfUUhM7Bte",
  "key11": "3NSUtKTbShqNC4U76rARoPA2TdTtp2oZAZYmeksQPTPQuZDaB9QgmPATVW6vcHK4ybabeLQtHxXKfHSZBEcNB1RA",
  "key12": "428xU5U4H2M565T1nHzLkKoDP7RT7D3vUQZFSbjc8rjwqtHXFYGT916RnWB1tEFiuLignRUquSq8b6HfVzkK5r4u",
  "key13": "46Aq82phcx9dWwe1g3NZfDm4dSyczAGLifThHh18CM7PXPhvETbymZkHiuNx8QGLziFq65dRWG68vgDgPerEnwqx",
  "key14": "3rz4hgziSatyia8vf5GXms37XAiLppwL5JiULSCvNuKjNRqkNi1KC2iTkvmR1CjPsH1wJ1A7eN5ToRU7ckCsnTev",
  "key15": "4JfpBoqgVzCndbdJ7odH499za6D271gKP8N86TdFoRCGLaFzgGiLJYWMyKAsn6545TtrUgXMCTYCJsbcJWxASYJz",
  "key16": "472Vmsqi9RrJ2ZJi6TeSd9cqwoDSgWS6C1JeLaDabjSXoovDs9qMQysy1EfdMmfeDGkQjUV25KjTq9MxcW6Zc4PN",
  "key17": "46zA77PJSQDaYFKbsLkMF7NQcg5ViAAQnNdjuj4H12FcLd9JDWCh29VUpmXLNi57kWkX4ehS2Gpfx1aaWbqEZ6io",
  "key18": "DctRoo8EaYcPm5oTT7zZiDkfxPWT17mWjfb36xot4tBBusXoxNS1yXvy84JnHaFJnLcnnaqkgWNGASPAk9xRX5Q",
  "key19": "297i9pvgYFjreqj1Fnz32bE4e4et1qY3EavCn5Y6vuP4SBPLZxtFfBC7FqP3dvHNrBEwywE3oKJc9tV5fks75Qvh",
  "key20": "PfJrttR9qCJMiVUtGrG2C7A5P4X1hCAUgeB1i62XurxjvBK8XzNpaDH83YDEqxiqj9XvhNS8FKXFWKck7STSYPr",
  "key21": "5hTEzWuciCpjsjPiAWgpEJdvpfgTPZ4C4uqyUjWEcZqGkBZSXSSJhzYfKkVxSiyY5aMwfUNcX9MdUZMnCTLRd1J7",
  "key22": "ogGbL9Ux9AjnPsAbfJFVXtEn9qCn8udxxNCaHAfWbfAgxyjutjBX4gDLyvYosrEqXxxC8m3LAvPpRAqVGGe6pTM",
  "key23": "42DgWFANrP4Dz1r4e6KFGBEZz8hhQypFZ8hdGkWorpemqPkakTwUmsManNyVdzXcG53QbHwkNUinPREGdS6LwetF",
  "key24": "359NpuuKPon2gDVTtz9Ft7fNn386EWLKjcyeuM6CPbaJw14tariAYqkb2XVUpZjRmqrpE7BX4YaNkLW2SKJhtSQo",
  "key25": "LxBv62bApm9DVLZtCspJJQk1qsF8m2vAfG1viD6j4jZ5suYhX1odCRCD81MradcLMUp6ehV6xbRgq1x5sEcuoGw",
  "key26": "3WJT1NosqyuL1V7mu2qF2uvepN49cMLCtxQZadzvp86RZbkBWpER1YZHXe4M2tXkxpybxnriSZyTFJQ7tPVkdwWj",
  "key27": "56pYbmP2LEMCRBV4UX8dsXf2mj2N2MojWhc8sgWAA2s5NoDjANbd2yTJxniSxCVemEx7D2JKX2dw5YYSt4usZeeR",
  "key28": "5AVGTXgcdW1toJGhaJodohrQ8YWyJ6qzF2qZwqhRpX9MsPaWiNKzu9y2doXprpfk5WEAVa4kyNPHvEK8gWnJzjWh",
  "key29": "66WBrzRQRmbpDVcb4tYo4ezrP5M7b4yNuFdPtjsc4GRgxd5T8r1ReMWVym6vNQxYVuWQH3mLwA6yiF3SpZeTymvX",
  "key30": "4ACivLAog2E6jNZFqKkbrwiX7g6His6Zom6kFdLsw2TZwgdsizLHvgR6KJGEKCq7BxUAmi7XwHX5LEo61bLNuFwh",
  "key31": "5QDS3KwH87ZqUv8C822T9kTHkG5P23Lfoj5X9SETx277yu7BR8uovUsuGvS27VGwiXxAWmaar5BdBpsfesyiwTs7",
  "key32": "5JF4GDpEukiCepVvN9a217u5m5sVeXSEPVoJCNPWeRKjUA7ZfLh7E8B9dMx7d1c6Rjx4ZCwGYV1uZv8WQfbut2Lx",
  "key33": "2qvd8CnEMGA3oyeGEa9ASV497QaTU5oQLNfVhSxVykYR7YkDU1RGzY78jV4wHcJhrgWQCpAYbNppASMvGSK38DzA",
  "key34": "2MsMtQ9nP2GFo79gZNTKmzjrYtkqpcsxyxLX9RsxNJ26hwmJUiDFHjcZMnL1VAF7CU5sz7Upo5uKfx4TzP7u1ccr",
  "key35": "5J7a1NBwzbEu7dwSYPBKWaNJuH6ZH1fydQ52cvmt7cDQFEFbw5qj6sFMZ2Uwd7fm63BCwgkCU2QoJ8NMJ7WMuucy",
  "key36": "4hDNW5aD7eUDGRqgoLoGJ5FzsD6WpqWV3XTxm8Pv4zH57ShR2ktLcvy32QmHY5hJtUJkX3UK4WHSTj8CwUHespJq",
  "key37": "2SFAUYwnQv5WKAJL5pF9ddA3fZ9jchVzgK3H18N7Ei8fb2pJaXGVH5Dh5AYP6BNCQZYcvwRXcBgQw7koTpqZdEhx",
  "key38": "3No7UCoxRPf4UYBDE1bLA1qWTa2hEsjdqoi6EM6VFgRhVuNQPFFrgMCQxNyHpyKyur1dLaxrVtCBvvgGnxBh23uF",
  "key39": "3goxerE9db1JHXob815zLBn9asny6Z9M55FWHcpqE9cRWcTx2w4WjWHBk7Dp63od3jmivur9r57TB67m2oCMRMMP",
  "key40": "5szz4v35K7b6A3LBwfAA5pz6vBqxCk8GdTHiGcuYP5vspz1qzEo361U2kErybxSsMAepnmcqYR6Cnz1bWnFKB9V5",
  "key41": "61HJAyBLEHXbzD5PKCxe8BTZsXoEsvtSoUXV7yipGFavyLLd9o6TzkCdZ5U8aLRyGAr1yZoqgjkfq5KJNANyjFFE",
  "key42": "5bvkth6Jaq1N4JLQ6eZE4uz5giyYo7XUCtAcvB1193Z7QU2F1nEnwPByx3zQJsaAd5bEdkF11WpUDsFJ4vfbE8bR"
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
