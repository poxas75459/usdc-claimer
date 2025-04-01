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
    "51yvfqUK1PtyByjXSuLyS4sBdTo5Dcdrweaiq2ZQ5vPs2JiZRJ6rBMNEUUUjU6Qhy8q9EeLCLm9Y8TAAhShb55Rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FaUtC7EdaxTdXxVYrafHbDZNd3kMj6Kjm8tbxDD69Em3SxCkmRSmTqowMP8zBegALJJtkzAde9MDX33aRufH7e5",
  "key1": "5UA5EAQTBroazt5Bb82fjoKq1UiVnd6fw2pA5RtEVNTpJznV5jqhMApuNXxWLrBifzPa3viv6ZfqeQEqn5y9Ezd3",
  "key2": "5h4rUE8KupYG9J2c8jV1e64a5xbTtVZm8Mt4TBC3Q4nyzghJ3f5JYEypTq5mswUMXmQ9qV5VVE2aZN8KGom9smE9",
  "key3": "4TFP5Unz68cCC4aAxYkjanfTnRvgcHUZmSKDTzVoA28p5YPGazkppkdT9AeBMTYBeQfqhANCY6YVWgL2ENtFY3ae",
  "key4": "5eabw9Zq6oeuvf9GpC1C1Kmd4SbBbRib2BF4bKYhJQH6G85JJehHcqTqZjwPgRbYgSpbegs7dLaA8HZ4w11LwBgb",
  "key5": "5KnP6idMscTsybYrxsKetZMqe8tMcRFGGB79WStiz8nLJu1WtocewiWaLTDJA2BG5uT4staH5M7MLfym7bKeeGid",
  "key6": "Uf8c7chXbeD7UvFuFT7yjEBQkW99HFqpbX8ZGyBTKM5GhViXrbhNkrwaupmYvaCzH9BCxd4RKp7HXQrSAUSrAP3",
  "key7": "2Va9eb7EbmCTMWUdp1dpRu6JD747JrighHwTRoT5eDei4Grq3jRAFwihmtrGmQn3w2rdv9cXi3nkUxuv7DRANPje",
  "key8": "HsZ7HeMFUXSESrcy8PE8TshNC27eFzwKUQ5EDieZT6MMRQTcB62MQdMqDT6MBBupe3ZmT2QH6NaNUsacoYZ7mX8",
  "key9": "9wQ3wbEUS5D4Sm77jRfWaxMcK4uY2u4zLfmFERP1VKGnGJ9W8Fp2DeSQ8pNBeEqxhLSuqF4rZYVdyQHVi1xSWTm",
  "key10": "3U5waUfQ8YE3BV4kZfdaJT7TU9kVYRjsfeGzntEXwvKH24cSygV53mDJsXHD9MoMYqbXzzY1pH1ZMusVjEM3hitj",
  "key11": "2z4HiCp7dacRuFmTNGKax8D8p3nWT8UMsX5G9VzpNgYj3qYuCmRpYjjrdWjRBhV859wyjK2PWDF4Xf434REyF4oZ",
  "key12": "3s4U99mDTzDaxYZMx3VQfTeEKRe9E5AKbk3QzEhFdWkWGtTsWCp4UitPRzBfPocTALGL9up6AbmmPUqRcCE2zTBT",
  "key13": "2QfCBdpLSvxfL93mQtH66zshoZXeKcmgK5tgD1BXLdwbiRsMb7Z2ryi38D5QQ7y1S31noPoW63dqbRAzchjLfvNA",
  "key14": "2bfLGDtXnLpgio6vyod1vihBmMEeq7iH6CxVN3zz3Q6GXryFC2tiMQoV5f3k5sXaDyQjpDc6aqd9U2xbs2RASWzd",
  "key15": "5j8SuiicCnJzbgHuukfwxYgSYdpmNTopoY44DFNheGVpjKyUk98n4MXPfJi6Njbr4uywcFZKJZm91DLmcfc4zAhS",
  "key16": "4gvuev94JhurADuqxmAww459B8i4YvztS4Y2PeXE6qN4DVHbQCLxGtjz4pH8i9gM4jqbXiRYyu1vjQpRbP8G23ya",
  "key17": "21rD2ZHWLgDEEKAfHDVVnM8N5nzpxGdfsWLW1d1CZcLDyaybZYQEYJWc8N93fsR4rKmBU816cKPnqMaecqu1eHmx",
  "key18": "kYaEnS84fiEd2fFQZSfRmVd9Ks2JXjEF8HmZckHpHi9oiry3sKcmak5R7uPQR3CpXcRNoFoN6ecax8kBxGwnzEh",
  "key19": "tZnJjMdP4PGvjWynTJTdw8XbU3e4dAR5LYxt6s8xdXM37zNjW2cJdkvoupfCrX98cVg6vW5MQjBM3vnws79QwTL",
  "key20": "5diRy6seeyaMRBNzt2iKzC6tj5KmuAhm9rCK5U98ZvBsn9JMHodYwpXFHXdLMcZMf9omSvy2MsRnzb5eCL4baEFG",
  "key21": "48pHpAJXowhgtySBNMbNFW3QRuXeCKfEZwc72WbsAFzMKbvm8BcLPgPkYbSb1Bx48zHt7VPCYQeyCBeqFsAVPco8",
  "key22": "4ikEV3WByYJXY7UdtwevvJt6Cxok3muqgNm36bqJHK8XWRjjw3gTyrGurMGoRhRgQCoVg1JR7mTfzi4PW2CUqtML",
  "key23": "3wb8KP2Af7HREHHMkgDTgpoFw2HQwoSChBUFFQVzuMjFnVKH7k7Jijv4J2tyAYcHbCpXwskG4pP1QRAnDjL6ZA9P",
  "key24": "GSHo7MFGUswXnNtdM8XM66gR3Jr1hvUpVAWbyw7tqEC3NGo334CCti9xE9E1DNnfwy1tYK75NGeExyxS9G2mpCS",
  "key25": "64t1ckj5R79PRUU6Vu4V67k5wU3vh2G7uzfYxmFiR8kGVKCUxnencct6j9yw5Dho6CMzAJEN19coMX7LGiE4Rqjr",
  "key26": "56NCQ2nYf6R9hgCEvwdjReSuSqhDmnqbF1nifCdhTSoz5MGRb89nE34fNFXW5mmMzECe64xZ6W4SBW8VJjdBkL44",
  "key27": "45a2EQSDxT7XpkR4WuySvEpJunZ7BGpiffdGBJZBj4ityR7VriQDLV2x2h72mBhhNgEhJiRpkaGpMCx4btyWGbv4",
  "key28": "5Sv3fkymJDyizrG4qAn7RpcQz7BRaP4S4rLpi6hEskzS5KsNZP7BV7t2k96CdfBs7esZqunS3cV8jZKghTmWx7nj",
  "key29": "5kmnKLuFc3oSUU8uLTea53wk2S9HrJPL3X5usfSYGSjuwdpXwHDkhHdKWzxDnonjLQLvjTUySokdREm6cf7AFrBb",
  "key30": "nr7VrHK6u8hPNkdsQgn98PycnbjCAgH9fXoAGTHJtJXhfMti1NvbU5YMwS2GwmZ3qhdCHFVtKmprfnayjswv1km",
  "key31": "2zLn8ZmBjdUoMSPD7L8M4Lz8FdhKqBMGLmR15sUZ63SGduqeKaL1UdcPcJ8B14umiRbKnxviHyjUC7i4nQP3oh3G",
  "key32": "3SHVBNy9vSyZn4hYd45wFRw13zRNqRTGSgXLZUUmfREp4XwNfjRyPNcUyPcHTLeh28VUrML3VCgnVZvkWq6bBNGp",
  "key33": "4ivkurkc7QoRyYFe4XCiKTzfTL156Gdjq8VHWHZYHyt4cFoC93WbYXk7Cgc9nGStxSJV6t1uBMtVHkEQ5NJnYq7U",
  "key34": "58vX2g5yT2zQgnuK8Byzr8b2PCF6BHwtd9S3cDrCxz1xkjJj4RVzWEhoiNMwKK59SWhPLs4Y3WiRMutaj3fQfDwt",
  "key35": "2mUTJ5Pu3x7kJSVMf5HLjrJsEJQUDMQHiZd9xFKHECKjHEYVJX3im49aAD2zsujZLoGyX6BGXPv2k3YSWKhySU2H",
  "key36": "2hHfBoK8X99dAqpCJoE9KyjAvQMHTDAbcBkDe6fSQc4R3dgH84tDQgXA2ZV9TQQnk9MkohbkZsntYDwqfuTmZqaW",
  "key37": "4qEV2ivYgqbjBKscBQc3mYdfeJ81kYNYn48PkpKk2dgwDnExzmDountn2af6GAa1qfNNE8hhxqcDTmkv83NzZDjg",
  "key38": "56oxU5aiXjhFAdnAACrzANq8YcRY96xgmwaD4jeP3fKSvEfDkLzRFxAgGUJ7gxXpkm3jDJPuDLnGEhkqrQeY29tz",
  "key39": "5EKDHoLuJ9B6bqPDsTroaJBSBr21wsZynGtasgA8xW7seJ2r7KGBGvLibe2zNB3FuEP6c6WN9ecTUXB1wEYDaURe",
  "key40": "31p6EtoyeGN3zwQeyttHY6aS682mGASu2rqjS3rBuuzQvR7rqSCaUfMSgqWK3eyZX2fmFbeBwnvRW8bFyCipSv5t",
  "key41": "DA7pvSJCDXeBhaUYq1wiWRDrvMreLB6xuBKwaAxnADitV3rzsSasVBrqaBZQZuhPCBBMPoqsgRgCXxtbJvU9x19",
  "key42": "2x4e2DBLBPjMCyaoixH62bX17MzYQDf9ub634uGyEjJshxFeji7WUwjFvUUCCbbsmmzCES84dsSJs2bYMJBbeG7P",
  "key43": "3sYexGYwbG7zDjEJPYa3aRF9RmX4tqYVQMjVicvonRdvS4AnaBoAMNgRXTFGzZ8SPfuHB6oSUdEuTqC97Hv6PfoD",
  "key44": "2H5XUSbjJQ5coCAsbrdywQKbNwGNijvTeuSnj1Kc8YNwQjCTkPe2kjpt53rqUT96DDrWd1mZHMG4wtC8YTdFGzW8",
  "key45": "3PWvHKH9u8EfnF8owxuzcs1REN4rokim3TVFFuDEPvQ9qenhpr3L6ST51Yhti9bUrXoSGcbY7YBq2UA2Ffk9gQXU",
  "key46": "3yLYdSBLK7UAzr1vECjkgKUXS8GqNSrGo76jgFGia78bUaVGHwu4oTddyStzyvfBHyn8tZqJXTvomKWtyELVzg5F"
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
