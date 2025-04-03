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
    "3mHS2Sa5x1qjMh6fxiKpZ8sDXXGYtggQWuePjvwgRvMd5nSnR3hVzgwL7e5hMg1cE7ftFo9KgMzjtde774Z9bNJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hkPgbUAnhMTxGsTXTj93duXBNcdyXexKj9evFuB3xe9CG2RcFzKocWbvcgTVyKzDWyGAZ6raePx5J8Qdb4ay5d2",
  "key1": "4o1xt2ay1rZcDFxF8JQUesj5mBvt5zFC3aEyC4qKo25H8i9DUiq9KtkM2mkNerV2kWZxrPp2EMXSymwvXPnh6o4W",
  "key2": "4QhF69GNnw2GQHcSDMj35td85n4U9iWrtcBu1oAVhTobDEzizoRiG64PvgqnhDby6ydt3FB5Mk2t5wrTFoxg4fPQ",
  "key3": "4ftKFG95zLL3fDs6DiHRMvyQWJe7Ab8qzs8JJsq5t8EjNzpQY6RZ7TLtAwqJvD1LtxbDnyGA5yVzWgAd2JMv2sb2",
  "key4": "3wM6JJ9K3AirmPpWRe2cgUgXnAy1jqy82G3F7sjLUBT6XVBsDZoyjqZCjor32m9Y1UkKhKbwup9yGdX6mTmPyZCp",
  "key5": "531Js617cGdtXZAq7wmNkb1gfpHNdGHWZmpHWcHzfzbUPrrMn7xLg8LYVbESNVtwkpEkeWVXYqpBAHFKe1Aqb7tb",
  "key6": "3kpDwL19uKecL1uAoLC48XCHGBa4NU2xFVv31hqXi1ftu7p3tdvtACBQsNk9ByW1vsp7wYX2RCnPDZjyZd5XAN8U",
  "key7": "63WUj5YHT6SmGG9dXFSXuBCGo5SS8UrrNfdVpeZXSkPdFns5sYkF1X6mAqV3s3E9N5yDn83QcLpxNt9hUKm9wgBy",
  "key8": "2S91hqzsSwbBzP1uwC3TBDeQFMj5tKT5inqoY3p91xMZpBkq6UpLEXR4GdXJvbNMVWmrrtWLWF42eNATqaXKDfcr",
  "key9": "2vqjkS27VRPXGpgM4MmVQq672Vxqe5HA5fta9c3zERCrWyUgjE6Yvn46SPvCyTmSCb9j6622oP11Nf43mWfqSguw",
  "key10": "48DiTsC2CXq7cJeDQv5bvDjJRftCbgAK8tKMDxfV6Q4yoc98seUH7ELiefQqYmD13bktEpm28k2rQSPt5WPujZEQ",
  "key11": "4gSEStQBQ3GcN48Hkm6eAM5VzxeFN9Bu74hdWbGE9Pk4MfqWteqJNzLnahPGYRGbhChNwmV5fsAo8ZyMzemoth5J",
  "key12": "4eSXXumXTHkPAqs4rJDtM2ewzppTn6gNG8AzkKPwDeyj8AAuLj6ekFNBU54wZH8GUEoK8vZtREzC8d9FAhKXKv4o",
  "key13": "Pg3duDYkVEEkgAnX6KWac9Wx7QFETnGbQHJwC2t2wY76ECeXPXudayJnGPbQhKkejZcWgax9TTAszsP95kfd2gR",
  "key14": "4enmtZz9MQDxs5p6zNMZiEnYrHcapJucEn8MVNp4k6WihbGghsEUYqqpna2FkF3rN2eXxasjvx5m5KqgaMPonZYN",
  "key15": "4M3yGhLstUNqiQVF9y3jaSaydmxZBhhy1JkeqDP9EiEdZuot1PJKTJwwk4R4UQzPk8cSKpvnEjcXNvnfPBLbkSQs",
  "key16": "57ToaExTquFNrYHge2kqFmSSQdfE962T6Q5GXTm4xcUJNUGwCoyvYxLg3LWQ771KaiqtUZPXaX8H3f2UJstwV8Uf",
  "key17": "4M4USLCCytoHUobQnjyxdA5nWbmfmmBopqbmUBKQJBkoKYuV8hraySskFkQS9peCEnqM8ovohW56dukeBvo6Wjw",
  "key18": "37TJpybHziAgzUaZmyyNKPd7aG9NTYx2HYjTUR1iF4tbfe1PhHgzsnGHPCqaHVTzRimWZkfUSXf6f1vsJ3KFqvCt",
  "key19": "4LgqnQqp3tnE6Q2q2XugaQmMRuz5i9ibM4vQyXucHiB5CPrnkcyD4zjdXbeyhca8ZoAQS3Ztmt4xr9Q6CrU218N8",
  "key20": "44zG1ECxqovRcaF4tpwi5EHBb8aHhUt2TrkKRE7r9ttRJNdP2Jha4ESXh6UFko9dxrchZ1AMkZ6oSTYUwKshLhP6",
  "key21": "jDK8WddqSQQ8eN2SRdwZmZzAVbutUwCSwcTSZNrtcqwM4KNdqshoSdAYcPcZfLhrsoH1aUqQF1JJ2e4PwmU8MLg",
  "key22": "5KoPpmwpG6yA6qLcbZNhLQqqvjtkdbaMyoSm9khFN3ZqcjEGgB4kAWHzECYh1zHMB8LZ7KqU8x9VmRCYQDz6Qa8s",
  "key23": "yPxXSudmHfo7CzpqEmYMe6sh2mE8DZZLdU7CJE7FpjVtuUakRybMmndsQxGsU4CCsBdMEju7fhbkaCnn3mQxzTp",
  "key24": "AkUXgQrYSmz1cR3MizCRdFEimzNq9dNgV1Gn2YnzeRCvwH8QA9CdFG8TiR3MsGFG9XHXSUjmNxP81oQ4WU52wRf",
  "key25": "4zjk6LexwYnzrhtRut6eEEADE43hBUiDRMCEfaoSqbdnTJ6dPqPdtL5xBEXzDGi5rEXgXk1fAydwnqMGya6NL8a8",
  "key26": "4k3NNjqyW1yG6RxVqQrkxDFc9MaScWPsj886qu13W3SKAJhRb6yYrZmJfbVsub5A2tgNt8s3QoWw1jbVgaQyNAsG",
  "key27": "3sLbbmqm5HfHhhGCuhp87reNjsnuucf1yUPyGtMhKdb7fruy64aZcGVX9SGQPuhNTiRMJrpA7xA1eo8ixtuFXkkX",
  "key28": "5XJyU7G8QQ7U59XVpKaWu1T3DjMsVDqVDBYFhTLQSk7gf23NjUT3bpJitagVN5czMDW7xZehBtVT3o5NZe1pQghc",
  "key29": "4p3mC1sD4zqZ2Bq3JVnT4vC6ozMUqktqJQCmPxWLD68KzrPY9APWSrEnaSoj9sTtHL1ag7ep2NPqDJ7disnnVRup",
  "key30": "2L3WEgTNVHNUpRfP87sxU5ZAj1tdNMbKb9Y65pgTFu2uJQXsdv59syCBvmegBiznmmyuu1WnPLDdkrAbscXNHXRX",
  "key31": "3dXCYeMcrBSjsFLFhwVnyUSRAikgYHDGbVjKjQ8zUcsg8Z4PtMgWHaAuj5PdZe3NiQuSGTdpAUsWickG2yqdnuuE",
  "key32": "5wGxbGrFDV6GtP7JgeFFvFdYyvhe32gFvBfN4GfCmbUdhFtUphr6PzA5ZBrZxvcKj92fCVRG1czp4wKHV2YoN98K",
  "key33": "63i1TsGgzydZPFtarqbWghgVW8gwpTCQ5kGrame4hHR3gmhmdcMtzavcjhm1edSqD4qdpEUfRfS7qqBxn3Xo4Wun",
  "key34": "2igNUpWAuKyXM6bnBVoC1bLng5BeNune22UrWaqznQXdGKGfSfPh8bKfHjD8oQ3WhWRhH15FaqXx3xXcZr8ZHw3z",
  "key35": "4aUEbjwu7SPtkJwYgxaGEdkFLg8YkdH626zCvi8JhauovfqyuGLWb6hH5yEcLwbLPv8ffQUNNP9FzEF6AReeBvZ7",
  "key36": "56jfyL5hhpENXZZGR9PGQyKb3An1vHUV59dfWDuZ4hw8Df2YimJxtxuNyY12US4vnnP7EbXRd4UmZe5YH4UxYhXX",
  "key37": "2comx3MrwubDuSVKJrzicbAFY2XzWM7aWsKqhuXXFXxb2CJWCFQtHfFF9sJ8mVF55eHEb8k1Ahfp5zdEYA7cVjnw",
  "key38": "4kvMKRyrRi83C3sb9jwbb8K93gymwsD3V1hfTWGpA98DTDd71V8qpq7yD4ko6Z9RvtoLp6D3NQwHgw4UfbX9LAz6",
  "key39": "29gUTwXxkri1FgWpDVAdhe6RDvVPiDg157GDJSvxUUXn3s2eygoy9J7hzR67CEmVWXhJ8kq3sa9Ky7wdbYC9iEyK",
  "key40": "2kfktbGkKsX4hCa6pWit79Rf3ujy7KenPSXe7cLt5MSKsyXkU4yhCWrdBFv6jwePFzWk1yPcpKBefjVpu5biEDu",
  "key41": "ppCU96P9UC2uHf7LN7XWst2iTSXYpWJFJE9mDMTeBcBtfLnZQzL4Em2Y6QiHdQppjwk47pynQZs4KDWSJU7qZkF"
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
