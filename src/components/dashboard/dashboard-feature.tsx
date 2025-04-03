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
    "2T9usaKD9e7MBu6XzjHhHUnFhyx68Vjwhh83VpPrVnNFFa6RcqoFhsJ5Lf3ZYZbYjmZ2R3mV9dK7P9jnKDBJf4QB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66TA2Awzg4tF72TVqoyjYstk52psF1RpbQqVBrfkeMbZDbSv9kbrnSeu9S53NFgxRh8z2bfDqjXZsecN3ZbvNJX5",
  "key1": "5ayGaiAgatnfUeQJUvKeHLeLBtU4VFBfN2T2ko4cqsBkMTfxhAvepPgLeYEYtafqvwcWW74Qb3NSjhAiXi1CXKSm",
  "key2": "5Eq3mNQwETaRJpHK5NEDqQfkpVzuPS3JQd3TykBKywUSJwgThPTenFK9rQZWarcQhHzH9s3zTJGQHNCvDK5K8KSF",
  "key3": "F5ydS2toVBGRXcZMvMt6Ym2jDf5tMwCKUhMtyGBvmF2PBjZP6q1y9SsHauM6n4zGAvFfnwwWWMKfbC1syi1vRvn",
  "key4": "4wxLmmdpGdZ2TQrU2smgT9Q8xyob6iFCVBtUUocDuqMvhRAkza6WTM17vWR91N7Lj9W89KCUrEnAEtqiH9DVkqjX",
  "key5": "3sNkdtwC9P8gxJm8rQtgBDEb2qNuGrSTHJrJStkdXLN3vaepB2RUHv6UkmqssYaxpauPsYSRzMmEWXehqrEfHXMp",
  "key6": "4L4XY95EEkuq84TnARk1XnZbCne1j7z9AYqxke9FW5LNZiYTenfo95BVzW9GZCj78C2hkxApU5HEMtPF2nx2nrAJ",
  "key7": "5pBG51rwA63iZqPF2nLbnRTPqPYhtmJ9qgwh9GHVKHK2UetzCRZwqw8HFkyyPKwJnKaozXqpbJ31mqrdvRzDd5hM",
  "key8": "EhaaV8aAWDQJmC1o7pNQKJa4UeFWqsjXmY9KjjtcRaHPsAuUE4iU5YwBYr3uVhqdsWjSsqqnPnac2pk94xz58Fm",
  "key9": "3TeoCDHpC8sxVSC1NNYb4JgEaudjgB2N1JbA3PugHo5hGQeRWPybrp34d377mNa8M9sE9WudRcxZ4dXiRjnPo1nk",
  "key10": "XujG6xqZtf2Uo7weBEtiTntwrpVhgThNKU1dzFcFf62aJKN6Daf3Ku6yy5aojPrryvTLgi2zrXnGGrjhqVUNDd7",
  "key11": "63TA77Ny4BMD3VfHsHWmR5A3735bEKsdWvZTSeJForLMfrZX1PRxhMmX6NnaJCx99rfFLbZs5yhCavXR3fcfHHy",
  "key12": "5nqZSSXUxCNXeGQPGNM8axi8QxqcYCorxfWGStU8dMMvYSvzrxQALivtkiy8F957ZrX5SGQBa3C1218yrLddWhjZ",
  "key13": "4eGYHvqeD3W3SRG5T8unaAS1ZZokWGEDq8JvmMY1j5KKWiPgDCCAGbkGToD6aT9f3vSVNX9zda4Gic9Mmarzc4SS",
  "key14": "49QXKMSb4Li7wA4MouBgASnsCRCvs4PKc7W152GoMJsPGWZxWYxxsqbynK2PuwXzdZWBWT3FaC3e5JguLcJaZtnF",
  "key15": "2WQSekd8wWxJtoyKs4RffbSFTUMMzRgCBreNAKfPmQeyb9QjQvwVmjGXw3WC41jcM9A1CJKaL2uuJam4V8pHGrPv",
  "key16": "4egmZEmkJ3yDj8fVzgsJa8ToB9ReeNhR6z5m1GMnyqCjkhd9R4EkZUayotPMMKqfQNS9aUY5aXYMAg7bMhR7M7HW",
  "key17": "4rjjcxgG3YBCnwr9kq5iMLcPGGh6qZafXMP2BkW41SSLpSukjwdCk9Sdqe8ttVm1mxK8sSoErzwC8YeMURfGX19P",
  "key18": "3JVaWdvmWJYkPxpx2FsgzE6JNd5dMcyeJk1EPwc2WjVEygR659hzjsssy9bkgoFvNwyeZbNAyKwzrpcqshZRJ8Pu",
  "key19": "3k8sTb7K6CMAARt8d1JjuxNfu37LRFgq4ZLXtgdD73Z7QZHo71aC4vmk9D6GCjxAwtkci7rSooqxTtrp1iD7FSoy",
  "key20": "2htYt6E7uGbN82M3L5JkrC5ZUbkpq8PUQfKLarm67ZVpXtkbjyUhT3MNho9zsvFiTJPR4fxfmXahRxwNrjdcCRTk",
  "key21": "WGK1zr2DyUQeAqp7Hn6LAmuesma7QSyvZisEnZDogSmFrGBw13kSjKPvwbysUJw8SbBWpQ9Zs972T5dtViAtXRS",
  "key22": "HLeuzYRcfAvfKxtmVhzcChH2ZRQ3guC8se4DBxy1EsGR1uPGvLAmkULoQQXTN8znZkEf9LjAbUbizm3ttYmrc4B",
  "key23": "3LNLDU6grEv2pa6ttyDvNTpbhjvoHkPiH8jKXTAhtw5zHZWFsPvFUmUMsirAdAtz2ozPEZzGDAraWhNKZ9Yu8H92",
  "key24": "5xHCFbpdXvd5Ph2xnEJvc4CoSUDnC59TbU4dsWg7PqSfhhASQA9y6FbCQusztqHBCKAcPEh6pDruKPKkuPvuA8ag",
  "key25": "2qQuFszDf7oF1q8bjMKCGBpoLoGPhsFf1asEHFwgQhn8oH5g3Px559MdTv4Ndeai5nB4rrgGpHA2jvSLeevwFQYm"
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
