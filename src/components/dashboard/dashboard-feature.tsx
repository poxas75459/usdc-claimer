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
    "2bQQqHaAhAYW8iqtmhMi4jdmMDxwSRzy2cGHsJJX7aD6tidztyBxFa3SFwxCVwgDTLnuVJrSsFJc1ohXVcmkaHac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BYwNivRXodupXQk68ozbQ8oUtLZfXe71fPt8nKSiyTB6Fo1RxrfdgXicri2b6FyAS8i3zRgActnBdUDxPU7pQTs",
  "key1": "dpUu37Ke6ARDNGJRaQUfV1F9qWggbT23NQJ4jd6X7S8CUAUsCfF6dzAigo1JTbRFMCB5KJLMdUUn8DqGat8AiWU",
  "key2": "417RXhfnJa7k79cQmxXRnGNKTB2KzRUzm4eBRsbDQ7yAyKvmrgWNaDmVdSRkxCL7C5yUyY8yd6K7eZQY2r7xppHS",
  "key3": "2HRSdn3Qka7oZSWPtPrvPRxwuwTY1FQB7SpKkwSBxL7u4Vy4sSotsVe1Vr5AEi1ctRpfQCKukpeJgjQ1siiYbkN2",
  "key4": "33tb1UGQokaA1geCfvPDWBf8U6wFVG8974hAeR545umHLaqLeZpjnyjfBk25seYYmGe4sVwQP811KbYSy92pP7dt",
  "key5": "6736PiwYVkDk9dMnebyAEQmv5XhDBDhj6enz6Ca5dEYLNkcjuiWRekEFFrBNA1y1f3UNrdgC9BJFxYEckvnnpqE8",
  "key6": "5Bg8yihUhkgj699Z6Yw5h1zeabAiASsfFMauwiXBQMopiPcELDRmp1TcP728gujGzQ8xpGSVwq2Lw9rbgHp527zY",
  "key7": "428aFopQZAUUaJThRazicgv2UntKrxmXdk2TYAazSsDC8Q5RSF6wj5C88dZtL99e9RiW7t1S7W2tue8cYUhugtDz",
  "key8": "ZmYBV7sp9G3aHnpyL9z5PqzcTWvAwhRPNu536VQG9pzaA9K4F9XEwVgWn19gZTSrKDKN8Yo8MPRGLeLHNwQ2EXq",
  "key9": "63wZJLRqVgDKW6NTMCzoXBRFboo38b9jefFB2gbcZULZqcboekminyQCnjzfyTArtGsHbvhh3H5Co2LNWMDtVrv5",
  "key10": "4GA6AVS4E4f9aguyWRyEduW59jGy9ohDiKqrLDxbECtRa6ZDmBCr2y7zcmcxJYhVbmJUnDBTifY4hVQ5UJSdttWE",
  "key11": "5XH2sUp1u69M5TK4ZWGkptHqmXmz2dqqD7CGHNe1b9HgQbjH5DrqrvaZGYkVf9F8X3qax6wRPjRE1nKEjW76NFsi",
  "key12": "4Nuu9JmFDc5DFrZ7dQJcVPxN4mmBKDz1isTEcnomDmkWzowEfMENeHteVS44EhJppyN8cL7tx4gR5yRZ7N3th5pr",
  "key13": "4q9KCB3HN5waMt6ygvaMh3KDCsnGgmNqYx7aszVp5N5ai5NGkuuPtL7mHxQ9Ld7qYYju3c53hTue3wQyTWCpg2rm",
  "key14": "4ooed2zh9FcqaoTdXgLMqWviTt8R91LQ6nLsw3ynwNcBbatTNTNx3iAudaVHSDSkyRJSmP5EAndnPwsBMqXgxcU8",
  "key15": "iaCFSBGktDBGusTtysxosCtcqRwFAJMTQ9dHY7tLJkxB1NSgq62qZJDrZ1WrB65jGdizqSzasaKxgGo4oqRjRfB",
  "key16": "2ZdQyuYYZNajyYRs7FHUgNRA4wpJqaEqswrgUBtxkUE555Tzg9HZjFfcKLZHHvqjstiVebz9jzrTZ7mkmmf66ykX",
  "key17": "38fQYYwiTHBYketufvtXtBVoStAxUNTzSp7NqH3JvHBmmkK322iU1ieQBNi7c6Bv3TEEASHhE3G5bKFNbKPiWgBL",
  "key18": "3shyup8apREmPBTGw7vQYG1fbPzZTjr7tMsGxCoeuLJ9WSTN6JPdyWEMNetbjverL2rWsc6MUsnLBb3QrTJhqHL7",
  "key19": "5FbyXD5tvDeRUsqR5d7gFWr91y8uRadSSDbJW8gM8NavnKhNVNPsXSRpy3jC6gnJJmUXeyJvAS6boBKaaLduPcd6",
  "key20": "4Nw4eFUD8GSZtfmjJ5NbYMnVfXDVTeK6p43BvRyJk6VfcXJGH2bpCH65yDGeYPTgKrBmiyywFYEkfwSYRkager4t",
  "key21": "5w73ZkJE9ju6C71etJHAEMy3JNN7YTXHxsnNCLxQzhkJRAGZmr7kpRyamLeLAwt27RNLp93jThEyfffhWcW15BCd",
  "key22": "5wgq1JwQQwzDEHV9u51jBtdUEBJTny5itRFZ8UkNzWnLFynkLuucJGRKWbh6frUjSyKhBjXvX6kiyozAGMyPUsA8",
  "key23": "29cspu4Mf5n8iUy3dWV9Zp7AKV8FDs1AhsAjBvBuiTAmyW5XgKEeiixMMhpoo26Br5tKtNBmM1f2GXw9JrzLozSE",
  "key24": "BYVHBBwgkGqcZnZQDtBtoJjChNMRxNfJFU7cu727z6skkevTpV4vGr73b2KdyMCPmVSyG3QJYWno7Ru2wT1fjKe",
  "key25": "3DXAAUE2m8ZDnuM6MEuugiYbjxvEuRrCg9PLkfzspJLXEC9hLgvKKpSvM2zEDXaEWerrTYTdsMfy96ygpkEwjEw4",
  "key26": "Y486CYztTxTanVKNRXGSeFckWKpUUL6RBUR5nrRseswhoQ2mGBcbp2dGBCPMCVbLHLjpbPCEaCmiP9pE2f9jsQ2",
  "key27": "gAHfgwYmrWF17ziz6JEbuayQyiS9VxVT99WkY3EJGAe5waxyxcvoAo8zkLiAK2HkDWSEhrpRD2bpcv1jNmFPTsD",
  "key28": "F4KkctuRAxeAfsscbtCSSmEtHFTxawJ66gdCEtNq5sjXj9szpieqWCvrYLFnjXYymDw6mFYTMDdUwYC6QtzEsMi",
  "key29": "2gLHcWXrDTL2DHQs8wJSdyuZ8XjxNiCNE7TzZCEpAUvN8Le1s4mS6PF4Sg3FhhZis2A5WCSGMppdu9gSY3VKQTYY",
  "key30": "3rBnPB4Emg2rDZDUwdwaAgwnpWRBZEYhCrjnEWcr9CF7Mqz3cuvdKxMbDm2HZiX5b1VCxVUoAn3uip5Mh87Hqj3z",
  "key31": "5WEcR56mTW7NqAJYrwn2v37xDrfWn2fj7z5rB8DBWXWw119ioGCchMfz8DiAZyL21J8Hp6Lu9hZp1NexWz7hz5ka",
  "key32": "RF2hru8mpyxuZRNNkvBaF52R5HTJaoUy5oyW4QQApTkGJmeemQ4CBCQbfiidXZrvcot56Wt1LPZpweDVRGDFWXt",
  "key33": "2AF3GXF5sxJmYh5Hfr9feMqQMNsHc7NzHgR2ZDvNprYotGf3ZQYihjjTQrZ1CRGx9q61tag6jCcCU3SRabZoqPrx",
  "key34": "64qx2n1DC7yhu5RGqj4chTr4ZJLZRrLh1xXxWNU3nJCq9TKY49DLNaxQG2y1pUboKJX4V2iVM5CbT49yRfVTxCZe",
  "key35": "3UBZyiMJMMEDX7j78x9vWnx3zC3X1grp2kEjNwgnGJ2M3VP26n2cRyjbsRE3DYXbsPaH41eTVL6jmvHuA3MPpwGV"
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
