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
    "2yhXvRkdpXVVmtGY92yfoLSTdJjKVezgj1eVv1Ktj2n3q35LscHSVMZ5VU3otraPwaQjHuBfgTtu41SQwLmiMXoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q8HgiBaBUg1YRK4XNoiSeGtmGrJZbiCNjup6grvL7gnJGfrAuKtuaqAZYJyoNynwE2Wb3ij8RmUXTosX7xcXy3x",
  "key1": "3R75in2iCSN5RsDPvJT2uBhXMVHMG5ci6GaKbs69VKxDjs6Xk6hRbkbvMf4bE2b7XZ5ETaMuVFhYCExQw8YrqnPS",
  "key2": "BoPvh6NNFiB76vpZ6pyN9hNxKM5hNVwnLUs4V7nUMdZpkDC8vJRjr3cQZefjK5RSBXPxtgMz7oWU6KtiQJ9td3L",
  "key3": "3VXbV4MmcC6R2zhJB5xjvTGrPBDDkSqZLLnzfbUMeksVL2dT7PJ5mC6EjTNkkHZjDC7U8bFAqoKEFjnaL14xMSHG",
  "key4": "2UaBZRFLu1wZSZJQE83dyCvZxHRiChnHjEKgdrTZm49xH52yFtEN5QKTjHkoQAZv1q8MZbKf5VNU9TNdamUibFLD",
  "key5": "2GVYfMSc7fGdPtjuriEtE7XHq1jGtJxvNcy7ue4381wxYzDGsFQoGhNJgaDfDoXhiXuRrYik6THiFkPGQQfu3dZ",
  "key6": "zHKBfZV7gJcjP1G3jqkxgwaaZHnhcPNWRSUGzhXgpfbB3Wm3D4AJPRyhbvwRbP2A6aHk5Ux1kYqxjtfVeGfzWcL",
  "key7": "5k9bdEErv2p9SnAoXSgVfMrpGXHRTsjFuie89UjkwTHCuHUA3ZPgb9EQTQ4D2V17dEASNkgVwT3RUZFbCCKCdFSM",
  "key8": "2r8n7o4oV9DUaGgwgVp4HA9bS3qcvrFxGRfduzcRVPPvr2SJswUeFELQb4k4HZtr3Mo6tSxRKnaupx8RRH8o2MQW",
  "key9": "31tBWksBJhERwkSD78gdbfYjnCBGFE9irm613q85FiyVKRToopBhH8ziVcxDKPa9tmVVhisiURBjauE6BCE2Rmka",
  "key10": "2iXnPmDBtY23RDJb3Sv5fFLT5AXBW32a2rg6mvyKZfW48r5qAD6jpewZ6SoSPNqiubsEp3NmM1bbEH3Y947YZEaV",
  "key11": "AFdWwQWQQPZAFczzsUZqzqwP3rpTiVTNNgsXCTbbE626ndBmHcWZy7GWPmZdmKMn8XEucaZWWK4A1WHNswi8Lod",
  "key12": "RacTCDd63gQ4Ku4XVWYjvuwrXVLuBBFQ71XfFN8Pg2hrDbZB3CTxtoiGP5ivFy4bMkYfKZQoG4MA8cjtU79L6Mg",
  "key13": "3sJzsUtCvfajMZkV5QBN5qnwpELwtsGXL9FL8Tf2veNGXt9AuVetkrvMrT7M9u3EXvgrYZz3yUnNUMD2ThnHtydP",
  "key14": "zGfh8RDTs5Z8Hw4X2BwvHhd2RbzsESMWHBb1RSzzw5Z8cvjNABWgL6vGvThLM6thfvc59dFBi3jXVsH1vJcDzEf",
  "key15": "24yhSidf9pMdxKW51Yx9AWKkyF9AwbGoAjq3QAwMBFEyG6PSKznXH15JuGrBsLTauhvNhAQyE3NhqymLNGLS2362",
  "key16": "3HhLCvdsaffsMWGvng1CnJJtiwKj4rBxReyfVKDXB12WS1CB1Y2tYpeQWeBV1zJasPR3h67sQZ4aff6Hi86DC1By",
  "key17": "5DkwovhYufmAvLMAbtm6aNnUxeJrAMpCXD38jVTaLhX2bQiVe9Qp93dv6o54CVdD1UnPDoS6kQKo2m76YyGWCtXe",
  "key18": "5W5xpHVUqdTGwi76tYk6AgnMGrEgNEPA4pVx7StdPbha8mXQU9kARZJeM6eGpcHXKvFZ348S8jNkWDri2fF2wejC",
  "key19": "2ruQqJWVbEw2wjFr8N2oBB3mbdMbCJBPHMVD1KUS87o3mMNWJmLDCACJ1rH7wLNF5SJ83UzNafPkhnJhBoHzuF4p",
  "key20": "29HYvrdhT5pm2yaN7KAGb2iNRYrWYGACFP9wdZtsVvKGEd9ehuG4JRj5BUok8GrQKxU4Uv62j1nV37SRoFqVN4Xx",
  "key21": "2UBRVcr7E5eJoM5DiDFEGYnVTh4eWD8Qbb9dD1tbnrSZkPiYysQsV1YsN2dypMT1FLxLeZtXsRrH9bjH4nytE1RK",
  "key22": "3LtiCeMr4ftGUHkXhKSX63BCw8vSkWLNY5z3NXQDxBi1NEALgmXV2MHWQkJ9D9TKJ3xeGoPEvAVfFNoUGxvo2jLB",
  "key23": "5cHavq3A6iiyW5Zuzvna4tfsnSVgZif77YPWox1S8E6R6t14fvExSrz3cPWTyiRU9rotA2zUq3nsgkJBWEcuX5UQ",
  "key24": "5fuciBL5TKiwMKL69fFu4vbvWRgjGjwqdgytJcvRrHLrzgk1tAhoDZFbcaFz7pQLoEE8qucur2FMcufbMt31WG6y",
  "key25": "janp833kQQFETVgCtKoekEmkxvijhqx9mM1ymNmXUjCUdMBq3YGXBz2NquVCFi4RWxTFNbFSqmNnzrwnRFwApe6"
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
