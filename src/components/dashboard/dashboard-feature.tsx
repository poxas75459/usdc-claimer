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
    "jpxYgspBzvD1UB7jGDMGoWW5B9XqdcUd8Ms5aVYeL2cE55VCkLg8bJ3uCHnXm7hB6p9ta5hkUxuXGrajZLC1zfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27cT4pLFEQLJGbHsihQCpCa7C7bwP4a2ANtPLq2WqkdmYBM6CHLrpbQMuawV7A78s5H276dnCxZG9oUyneePKBQW",
  "key1": "56PrJYTmvVCggx9iAMvGQpAfwSKYVUwJydaZAUkvAhT4tTqBv5ua43C4AjaFPre114TgigEBxG6uQHUaxJtjgvVq",
  "key2": "H6DQuy9EqJToVDLNqRJcRfDszzCDJmUJPx29CXCyYxUrZ2X5DME6vhhq5vdHBV9EmCgeaC1WeDf2gHvoAvjaakn",
  "key3": "65RvNLyWBXTNukrKzpZEaAXKh3oQTehCYGGycKpQUogPqiTNsEyUVr7T5tYRCSQ3g74LtGqf2nY2W1w6fggz5tkJ",
  "key4": "3dWXX1Tj3277JLft81m1ykWVWYqBfFL6j1exN3WWHZibuoW65bTZavkDgb7KKJkeKek3EzC4k1jngj6ExoHZb55p",
  "key5": "4V4VJBSQGmMLzs9ZHShgj6W7Ym7ZxtUCGAZuf5ACGaPhu6aaYBp6aBQ3WQApboYpxy8nseooZU6gDveiiJaAwn6L",
  "key6": "uXy2zuZCpK1NchaQrmXnBSHngHX87pm3nagQkE6FwU7jPYxMEdSjRiPDmRhFFysgREkD7Dhvt3PGQEs5kd4z4zW",
  "key7": "3V3w97TZ1Wq7J69JzC2g1ggQZ1odVvKQd3Qja4n61hWmxG5tALq8GN3Yb3gvpFSRLvEo7ezuxE3cHLYqSSe2dcg5",
  "key8": "5G45KyQ6mLPjkjPNFk2obCt4P9WFPiizhVAn5sZAszViRYPn7gVQN4QaKXN4akSTBu22FzB3fnjhBgSXfRQ9K2Hz",
  "key9": "5kE9j1vR45EKr5zJzM4uHYmabzHjSMJJjX1CMKe8Bpo8GcRKQHWNwhBPUwPmWEpRJBZct6hxU629k39BVEknWg3g",
  "key10": "3qSHLiAcehtiBoogykFQTTMATTfNUtL93N6hcZELShi2JnnTkvxhHyZPgVoYvhMEkJRyWqgLfJqCeUvgx6s6tcNu",
  "key11": "3zw4pDit26qBd7CnxSVtzVvgKW5LW72zzHxQrxWJRnaiL74ni2twKKPT45HHpdpAmeY88pUEtVJzhKsBMb5RgxcT",
  "key12": "sBqpXXNogVf6zxs8tqpxX2CEB92rjnFf6SCcrh7dz5UjbCwYu8QQZrRtrdgqXrnfHVBN9u8oR1S61mMeHv1FbRL",
  "key13": "S65r5M7G9wEJjo6fJC9gnsn9JizA3Vzs9qJR1GHhCZ5nmMGbXT2m7sUQFMqjFwUJHwrG4Hx5cZiHy99H3Yhq22r",
  "key14": "5NBpjYSMKkhdJwCYbXe55MnRFap3RJKxsdWACGD48fqmYEdMJmQs9rwXs4mozDdiLKwtkEcusNcQXkFmk9qj9w5F",
  "key15": "JS28KZEXvmrMscNRhuzqAFx2TLTcnPR8R6rLmo6jB5rHshmd11EnobywkoQGqPbgEe9L6472NTKNtYu6qoM3Kxb",
  "key16": "1ABT9679grNaGrCWPhHLf3pvTP4exzJUUZSLqbu92j45DEcAgGBWRvdeGsEXcKGz1AKhcv4eVDHG2a1ozLk8hRE",
  "key17": "274vtmsMcy8yFBzkZKBs83wk2EcDkMW1Y79LucUsM53DzMFBdH7Q2znvKK4SfLi6xGgT5wDgcpQEURykLZCShGqS",
  "key18": "2UFKZQoHSWhnHBW5efWwA38xqYdxSZLfXCTw7VBGESchUgT32oaKvbWH3inYwRDYbz1kNLCNKSKNuyWHeoQkAABU",
  "key19": "4DSi879rZw5sJzPVvijDDPABgsu68Ae1kPeCyymAEL3jTTNHrMudafbFxCUGPvoYrk9f9HdVu7UJ8Epv5eAZDH7K",
  "key20": "3A9Wa4du1kse6c8gqFV9mn8V9C4fFkQgGsVN81WYjntwsBjtgGtW9YyfdmQccijGGUkq6HeSiaW1751LRyymjD8V",
  "key21": "5u9Rna62H6rzRnNXcU8HpqcQsPDHVsRgU31mE7BpT7up323ChHihwo5GRCRx5cfjsyeCCKeje3PtKkrYoptqUjQP",
  "key22": "2RKAeCrTcDGFaMqZrGZoJw7TnEd66M3vysTdWr7bo83bg7TEYpHKFv7SR75mEfvJH6XhyfxujZpK3fFESHskRLht",
  "key23": "3KSDEEaXnAcC5BRQKhBnfB8qiKywoujDJygegapUDTVWPr3pMRy7DhAQFo2TMKv9sxTXXzcJRNFrv4skT4dWDbxJ",
  "key24": "44TmiVYqz3HDXVcs8cDkhck7MZ376eJVgWB7Zc7urkGU7vBD2TYdMpJVD2WTBNDqqBeWjpmuAeGusTLJ9JSF97P8",
  "key25": "4Bx8zY5FVYAUqN8V8rMbSz8ZAdg5FeDDgzPD9mnoGP3mDfJj8PDfJnRuev3rrAqnfaNx1tzouY5SEhJDfoouAR9J",
  "key26": "4F4H9tR86nXwrdPLydiJiN5Dbeu5Kbwjc1vj6x2WxaZgwqQPXbXHNvoKFWh6YQrRkGS3tcbAwSUxGJ8a8NgPayLR",
  "key27": "3L2WYb9Jt6Te73VPTpz7YverybrMZcgLHsMhvnQPWo1BQXxEfYCR9jdbZEoHoN9dNT3DZYVhrLpRU3dCt9w4FAWx",
  "key28": "3WWMUKKyRHqQj55e4jpbTHZPjgQ6oKx4ASwzRgVpkiFbXW53RshoxHxbTT362VrhrcxYTiPh6JctG8M8YNq8wo63",
  "key29": "5Zy6nwaRmrSbZoyaNhwgZ8ZPGviC1LCxwjBRyMEKmvrz89mJ21wFAjEBSpEsCaxHreG2DuijJgbnPZioHBnFLc6q",
  "key30": "2LtmbvV4gasKNYbbKg9JMaB2XfUB6tAeEu6D2QUci2y7u9dvwctSGBKZNAduZwnEk5nXiZ3p7NXjnXn5zV7Z6nkW",
  "key31": "4vq3Nzc5EvpGZUWTpmSDALiSR6Xx6Dsx685aAaaxX4PfKzEiDQr5riTyaYhU4bQFsEKtNzueXD69VBbctEs4bEBj",
  "key32": "58EeGrCyydPFpr5n8r9W292fmvQomUj6qy7M9djyiAmkFN2m8dS8UiUAXGPygySLwycrxsnt47q6pjuvNFYcxKrF",
  "key33": "4zcCJjjkEvzFMtXeoVj7G2ceUk8Dy2PZKs3LPQA19LfVDCNvUdUeiduLNjPzW3xGUWJVfGUkKFDj8WyLGHGNTkMC",
  "key34": "38Fex31dqcTSjmYSRhhFgckV6hfuRJnvFayssGwK4u88Pf1ZLAV8TV9U8snYnYNdCqTpQFFECZKgRA2eHvwyGRFj",
  "key35": "248iodEkMMikpU63G6UBwYuCqHViFg1oGVijGADw4MjWsoVDbHzeABTLtwFBry4EgCpU3bhtauSLr7EwV5tRzM5E",
  "key36": "xLy6G3eECDmKg7TL4YtBeP6Z9JdrpgFcABzg6enFJvhLTTNya44NXqHMUU3bHDXiA8Ro9Wjx9cya6sqnbcgHqNa"
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
