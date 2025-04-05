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
    "23aXsjmMtzf6jypqjo1abXVWcBo75bfU6wEVyJsR26f2YiwqLU73K4FK72mV3SboymsWLaEvua92tYw7s45mUkPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EwhmP93uGcrKQv6ChU3YbUccztK6cFXHca1o2jJ4SYvncjWHySZvfsf9qTeBpGjWNjDThwNXY996AzCjmAA4JyM",
  "key1": "2NX2duBQD2x1DaTk2KjkFijLafvuBYu7o4Gu5A6hy4HDDj36F8tDJJSHE5GUW53hcXK3bH1kabGBFretoLmEJVNU",
  "key2": "4ix5Lf4diRpmAr7N2Hyip6T3X4EdyUS5JrQU62ERgG6cXP9UNDsMAVUXtBdZV1JmmGb97VeFRbSrqsviopStAYhp",
  "key3": "n1oMUDGog6b4TaBvNBBtbqsukACDHzziXUGHraVSbzB1CwQU7qdaWBb4uvL8UTSCtCLDFd8rkyifNQfzZK2FtfC",
  "key4": "4r9FAF2tBfYMLVe3M7sKMmVCD2uykyzBxtLRbjDUNawdNhaJc2V48hz2CgFic4F6AmfYh5K9piujXMfRugsqMjeS",
  "key5": "GqMirdexGzpCwyfpFT6RmfWSwchtvfSSAqhcow7bXD2hdpeYgjdrX3DVfxB1rtBDbkDNwC5BbkL3TSmTzJeJEzv",
  "key6": "2VHGZhg8mKPULQEpe76rweDYmQKhTgEU5xgatUGRuYCG68vdEq4wTDKHXsyfuDMwbXjdbzXVYVyLYzHXfcjucXvj",
  "key7": "3BS4wYtsYZig37g5VT6Zd7D2cGN9YK5NhDA8AE6igpexYCvxfXb1P2CLgPbjRvcfc6k54QrFU71pFY77YdWkcFMN",
  "key8": "3fYh71cFoQwDuMVuQW5URw6aCE5kFQkuVxtyuKGw3ByCCczgsGEUKrQg67BoXxX1XNN2tHHeBWYMVxogqJWe1RQh",
  "key9": "3BvFqouUZB5MdgvvNusBWtooAr3WGC2G16kiaYk2ECFueyTJV1Tr9sDHbwBPwNRi7ykZD3Edm3X8R2hbP6gC1i5q",
  "key10": "3xkced8vSVJ67exUfLpPyQzcCbA4VAXfZfp1qQShC55umbVQyG6bKN6jGbDLdra4XBYqPjyAasJXRxbpYmJji7zR",
  "key11": "2SpwMGEB1L6fH3DJtgDpAYv44G3xZVTz2NJtN8GyZktWNiKgm9pvpW6pXqAhskYTJwH82FDMV1tnN4c8fkfgQ3Wa",
  "key12": "viEGyHNLRZgetPg9GjzsdbSSXH8iFGhoN4PihGbG8xaQEBA68FuG1ceCMWiKiNzYwEY3jHH4CygoPghjMzWWiRs",
  "key13": "2PfmBLHw2oYv1gJn1hPyJNeoUSmgeWMqBH5xMartuZ7jMqhH6PFAhWtEHccVdEkPkwtG25wcztf1xgCjXWjhxGK",
  "key14": "2tncpQDudrbcsvGkQzjzwhonodBUCHMPbHiUqJWw9FuxzqNoq6FMQakWANQdeQ4nm3NZXMXK2z6VWZ5iPwF5CH3t",
  "key15": "3vLVoYcjHm69vAWgziNTz1Zz8NwCw9HKBt8HM1U2tgfQjLWXYhgjre5DLpEE5pNTjU5fjgLLsopJYzJR4mE41j1h",
  "key16": "52EcoUJrACbQV2TKjunFY5p34iAynFVwSMRF5GwoqYJzBFGG4VHSBmCbWfv7pZK1JNbnKPdoDaRxAHP3wa3QAB1u",
  "key17": "5kAJpBJcncKc3XuFyCw9g55htBbE4s7zHYbdGjvEfkSGMERS2328zXVmLYxCGQCcKz5YCYpiyEQy6eMKxbnXcGn9",
  "key18": "36kfcmwQXcgZt4h4GBTHpZrqGPAxfFxAeZqyJ87hrbBKNoSw1rJ58ih8rS3ttvhCSejSfwCYwKnvc9o4X1SAwL75",
  "key19": "3FdANLGzT3N4i6i2cMkj3bjzXzhyzW7hiab7c4PjhSZjEcwqtgSEW8Pk3eBxkrS1t9mxJpiudms8d5HBY6PooD5r",
  "key20": "4tJtzbtqBQd798EEdcg2To7VzrLJ3ZBe11Yx5fP6PW2s25cG6C65k91RtcFJ75qBKMPir7A4Fz6L1i9aEckQTeUi",
  "key21": "4Ez6ho4AvrBXJmAhdAaQojbhQt3zQnTvDdmqgK1dUrZr8QQBXHhoHXWCfoSBw2icUq4kRcWsg3mxZjmS2iTe8NeD",
  "key22": "4iVjeYQofddmLZTWVLKCNcQNWabtV6mGx78t6TkfEbUTLGh2ZkJSHApgNuqcy75yn1UvZowUco9vHkydHJZyhDZG",
  "key23": "MgbgBtkeewKgTCd23XAXCKp3E3e57pxVXGx8rq5VZsxeQCQQ1ydb55Es14BwiWYowVdK5t5ezVEjzEuHmoRmiz8",
  "key24": "5zLEG9PkS2arkZq5yvYi8yB9WX5LHBGTvR37PBRfYuHdbsHGLhzu7yN16xXmtdJYV1f9WiX2CLyYojEHyYZxcFF6",
  "key25": "McwSNcgd7AB6XbDhcxr8xUDBw9x6kcENVDwLvoufpUYovfX7HQccNwCuFaTwe54Y9TNePWL1wvRgvxqf29TZeoC",
  "key26": "j13HbyKuvPFvr5jqbVsAuyajBFFSC3Zv7Jb7H2UUHyYbmVH1yEeJwdsFunuCNu1Lq1Lr6YD4KTMBjixhio2q9pZ",
  "key27": "56gSCxZTK8gSsnyhhcodvdypq3M13eAa57ELy1XRE1kPz8ZRrNAbzzrJZVgBfTNHAwb4kWzN91sM5SkeqLqxt9xw",
  "key28": "HKb2JCRoqHXnKRDFvoHatzut7UcGvf2ZaC3Qais27iwYpwX6ZN2wYujJcbsuB9Cm7UL9BEGzopoTx8qqp2U2PvN"
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
