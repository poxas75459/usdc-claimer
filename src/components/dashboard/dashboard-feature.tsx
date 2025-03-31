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
    "BN3ggcf5opA42qcjaeX5TKzdBGRGGVAtfGfqhaBUhUtKGeFBr5a2Qq3AKzKDwGaCVhvPHEzoxomcceqgksiDTyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ASBziFiXQPKnGL12n15UiPiFYWBfVRC2RpbCmaVziet4tpLy9ubajsGXirBgCyWaDtkvk3pTYU9cnP9u2KRoRt",
  "key1": "2YVG7ggV91249nyStLwyeinsrqBGSSNEqcrg9ofmRPCWXmQEayCg63FNNR8DHRusSTw9st8tYVtfwpDq3EW9u7VV",
  "key2": "zzP99QWaZQ6JUktj2xmNCFL2825ymo9uGu49kV4CRTYpax7FX5hZ6GE6PBEEaeMNAbbtDF5aRX5GQdsZFfrcRSu",
  "key3": "5kkVsa6REhpKfietCnTFLYWqaUdwjhkFBeazJGBA1X1emBoFnS5C4vaM6H4wbSLjTGzicviYkmTWyVLPWmDjMAUg",
  "key4": "3pomon7n6CWuFifpFrfNbaxUW8vEuSzRQVKBM6TbsvdsGP3kpYdoti53TxdJnjrFKBBQDkXreXnTxKkjFQKSLgPa",
  "key5": "2pxTeUcYgYb35JEfpsiJS7osrb4XBy17WaT9KBQgiKn2PBv6XSeYbDJ3VQheBSXvwLs7C4vqu5hueFqSrkr4zeea",
  "key6": "BXSQGiekTDfGFLYcjwyhAB8q178dNuaGVyEfjj23d6NweeQw78AgayqMbRLV2uE7QXgu3tyzuoja1GH5Q61qXJa",
  "key7": "4sUeZxnMvVdeer4HXhD6WPp4JbHYY7yoW2SR7r5AdZHAJivYGabghbnwpxS6WsHqSfZxDsiiUTeDfn4gf6BBdMNp",
  "key8": "5CVKzFMRsBr2ZEranYzS5p4MevNRmGGsFCCcMrm83rFhHQSSsafZFeXwd2eU6wwXK1kay3sCCaxgMP4ehZAv5UrZ",
  "key9": "5JuyHjDQtD6naQKsuHFJJwUJdxPMQDh4rfEGwiiR51WFrR6fvtx2noB757UyJAjYAtbZnUBBzRc2m87oc5Ht95XH",
  "key10": "21PfZ3ANB7sLg7uMMFKPUTBPFDAo9FypkSTSSjNqd5vhQyW6T53eeFUTiWMoTMyuLHTi3whcnc5znSy49X6B3MwZ",
  "key11": "3F3Mdsja89qhyGBnHA1WGDyYXp92MuxSw7ZMrszjdJdsF2bpV7Bt5oaqxqtYXEN6FBGvELmZ8hUqpmEqGUBHe994",
  "key12": "5m7hyvem7BG2hTye86PX3owsQKzzLipswCS1kYpixFALQLMPuqD7WK9QCc8T94i3PXuBK1Yu51H8G7QfQJCTjDTx",
  "key13": "5KTubBxyEEW8L4iuue5sqLUjXNG3XJTG2LGfH6kLXjapqnVk3AKEFtt76nFFhV1u2DxWC8RJ4jPK1jURgyML9CfY",
  "key14": "3Cu4Ucx6fVnnanEui2oV54JuQhr3wXdr8JsbVPXLu1is6pDP2x3Jr8Yj5XAGXgXBHhUtf2wtUW6x2GKGzXPpHS8z",
  "key15": "5NjHmwxQztT6hnEbpeUFwoxkCj3DjZSsgppSQStU5Wyjiao3z8LsXRH57eZiTV8rTAxwF4mpdU2SeeGQC9LAHhHa",
  "key16": "3zJ1PqjW4XANCaAphpzvuAYZjP3DfnPyKG88aK71Vj3tWSyo2dFhjt2r9xiZ47eXNLajoubiZDnMFLcnRRp3LVMh",
  "key17": "5QZdxox3N764EcA6MDWYTC7M3RjTuU4mJotCiJcyer36FZhzc6RTRYaVehPV8RaKbnuxuSQGhd7k9oL2c6L8p8Gy",
  "key18": "2Sg6vG1pHF4JT8uXhgUbGY3ZQbsxAHjpXqA5pDmPuuKTL5dZpjMy1GZRPZ8TtCAnNQZcsx3tFgWUVVLh89wT7vmK",
  "key19": "gq9qEpQrvAMVTcnqHaC1vFgVmCmdR17wtPfj3CAfZ2NtgbSskvW6tWQcioS9doV8qR6ZoxYAH91AGxco2KuBWKy",
  "key20": "3o7zvUYbnyGp8zPAgVe8AuBTCouK1wrymSgKC9wEj58HJAhSjkuMQm8BENG5UYgweY5pELkeikxQkiSMrZNTsbys",
  "key21": "Q82W1GvQuhNed1eCRS8pJxG539WzJyg6bZNh1zh7Sp5TvvcpA2oU6KWChS5LRiQuKRmZq4Uea1nDyQRT16ENijK",
  "key22": "5DPi92xMAQHLdJe749dFLuHqY7XqsbGKh5eBw4ZA87i2Zd1EbouGUDKihNQHggVtzvguJGnQhvSYNKYHgco16VmS",
  "key23": "4XFQpEy4oJDSGCCnsggYKmCpSJNNFtVgrbTEwsGHaHiL3tH7fAJ7Apu6SdruFZZtwFxEMKBrZxV9PQDz4A3K1pDn",
  "key24": "2StCp2AFtDCos4sG7qnR3SxgNzZ5M4rgzM6kv6M7xkihGxzipxYspDpo4H3wDJnCXH4MGVrb1NvoTfL36Mt6Li8n",
  "key25": "2gL5NbrN3KDVETNffTdbDviBsyhHu1XUCKMx7Ts2DMqk4PBpYgAWfzGgJtX7taSr7Ap2uZKZs7JVy2TL1NbDvpVW",
  "key26": "BtWcD7ZVfqGA4NXoZsnCSGMfpmFi7jDzutwQAUTjbhrCQQfEqmfijrAJkVA7DBrZRXGjph3j8UmBDXMkwFbmbcU",
  "key27": "PUMUSgXqmogCQWmU4szdijy3SRKv9TUETUXTM6oRuPbffu7WHC4VLzLeX94fF58Y3WKGsrRZew1PbHSEFpxY4fZ",
  "key28": "3MJsTwBoBipuWsaSt29KJ7i3Vzzc7B6TsXz4AGQt8cnRQdbmFNq3QipCcSAmB9cPt37rMeXcnGRb5EozcCgz2cjU",
  "key29": "5PwoYRcSJoSKgcxEF26dmrQQ8kvyTFt9fVVkP5kgvpErZ3WUChJfxyJJjypxcds2xeRPcQKzDNX4dWZoygjAx3U1"
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
