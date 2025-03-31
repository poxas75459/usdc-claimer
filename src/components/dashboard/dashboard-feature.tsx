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
    "4FvTQKzJjPciuPof7BHK9pC5Hikq5gqjEfeGEzfUoenpUBN1RNrTgmKbpZz82yYejP2mPgXrmBYor3gKMhRgfB3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XAFB8oWYrkWAjNDEMr9gaRQ4andnW9twzcwnbmrsgWMz1Gf5xQBvXRWR4zpw7x6uceww9ygbj76Xi2iDxLHQ3WC",
  "key1": "2z2GUdrPqSeTv4fTRsP4MfMffoS19kqpjbUCnbN2whBF5MXZd8Gy15tdLSuuPjVfvEuuvHTZvUn8MdPCcJBJBDPP",
  "key2": "5rKRXg4UdJ8rGLKifbL746YBLeiHyduECeMwxwpibYxxRsn7gadz47MMRRVBYfzcmJYPZA6d4fXoTymMxNDFkuGY",
  "key3": "4RtjF1FXAtEaiLzs4YdrmPQFCLFs9PJrc6zRfud1oEofFQwsFjWe8sLV7LAKbysN9q9qyL6z5QmLGNPZoExHaNAV",
  "key4": "5ynRLqsBEZAoQcVR5nDkaH5pAQZaKjedguEzn7Yr7qcjbfWx7mTqrMSGsTLnQdFtXcb7ZV6uLC2J8uWJBoEBYQ3M",
  "key5": "4cgxN4vd9ULgo5S6FxWR64c2oVAXwxgdiWikzbsZELJwCFhtyN953dmFtJiNefriDTkKpoUQeifjJsHNwf42gsh",
  "key6": "FDS5huTegAWx68aedU3go5t9QdaDBoBcFaiHHy4x3XgbcmHqPJkJjfCw8HSy1Gjpvg2tWC1mUboNPnCib2uvcxD",
  "key7": "5VLY83MWaoWyRggEy9VWgmr5kKj7JgyEqMrnCH771bRJ6WHaeuheGoCYbKuPGJoaMzSN4yYt9EaA6FPcy1iTkh7J",
  "key8": "5S3bQ1RmBfK91dLkjr86HXoFpCoMo53seSfPMbWF5eBkcKMYPg569hYSuxH3Wtc9xuSKqjUHdp11vLkBxrVVP9SK",
  "key9": "4YeuMowZ2XodJy7iiJsSDNeNGN8P7Jg8FJFu83z6V1RY4yFKXvRS2DGNT7h3zpjF8rPocVzqxerfrTp8C5WJ6wdS",
  "key10": "Le2aftUcDd2JmctX3paZuv6SC1bkJWAE9oFNywtyq2fe93UZbxkFSCJ9A6ZDtrADiFbnU97YqEetwaLAHDCqGDD",
  "key11": "2aj1QyvqDhmNnA7uCA4ZXZfUpj62WWFkMC6Xp36RpJFWNhyrr97gXDDAUnQHZwfjJBqgENCBg9VWa2zb1DyuYPrT",
  "key12": "HGJz7gtLoDpV8cCay644yGEMx2KVtxq2wb8Ja7u692M2HGAPoP9MYBTwbHJhbU5zz1YE1t1b4rsvCT5oCfwhEJy",
  "key13": "4rQUnE99cb6CvGp1HWURMWGQkgg2LqZJhqVdxJT878q3ULhrmjsZFQDbtywxd3rEZXzadPZcgYbLhNdrDmQxjFPR",
  "key14": "2quKWE28d2B1Dh5S1vUdbiXw3kjBG89gp76LCiwZTpmeBv2qRtjtjWHi7NGyPrqDkgUUDCHJz2zcJmf59XL4ZjuA",
  "key15": "2Jdt9bo5riYMWcVyXwWupmG9z9b8rxMukJ4upv8Wee5BqYvBmweCRNNJoYBdURhXxr4Swkde9UVkDLt5YKoTAsRz",
  "key16": "2yzfA8RtTGeuAzESQe4ifwLzcbnvS8bnW5J9eRETH6nVke6TJcYEEC3EWNxMZF4oABAAQVivYeYK2nFHSi3LxL99",
  "key17": "2NmXhzQzLy1JTnwwGQsBb3Kd6asSfYivWwhUDCF4sQ5ckLGU38F8DnPCj4UCFNfdxx8RPtkzqXmXY4AvMnzvEf1b",
  "key18": "24EVhJvJBtbo9tmifc4YzVZcx7WWmbArdK3PmyDnqAS9Q9GWE9dVmJjGWfSXMehzkSPp49WkAyAMZ1xPiU2DtCma",
  "key19": "2wYq1Dxc7HmP27sXxPuqJoTpixqmh13QtTArNZYPAQKyJFVEu1NbaSo7PnarAqeBGdCZfNGfDbHxcUsV1T8WaP9L",
  "key20": "2ZznXLLQM9NDqH3L41g7qM7wEtB5pGWjWaLSWVuyk2hqpkoNTZCpw971rZPgQSHpCo3ceN5ZxQeaKfPrihTrCwkR",
  "key21": "4KG3TL6pX5SoaasyrXKh6v46EB7XeqhoArXrD5pQygXqwpRrsKAP4qU4zyVJkp4izPK8Kwa1W5319G4NUZD3HAbR",
  "key22": "2HcTM1zxBPinFyFwrNUePQvkJo2Br9ajicwjrwgTumhkamt5psCKKLa6rfL57EdGtdpYoKc9bHsH4tqvod3MQHTR",
  "key23": "353BxMxYpPLSwXeVBexgzwGfJ6QJ3LZKasoXmJkG2NmEpr7jJP5P6XypjQsfxMVgHwtSk5ixcQxS4EfFQoicGX2Z",
  "key24": "3QLZKL7F5431zs3nHjW2QKL4imwtVT7BtdNKHV9mV8rozEVETntRgMf2TSeN83kEu66Hce1pXPcGiaMdQYQtwpSb",
  "key25": "2j8bnspc3E24dpyy2vhEyia4weXj5hdxnXPUryEFfyLQ8EXbYu8mrV4cfHigKDvbyYLnLXxvp9Aa939gCEq9baPz"
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
