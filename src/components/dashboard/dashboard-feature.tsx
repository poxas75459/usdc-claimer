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
    "5CdRUJP8wQGk9zZR3P9TuEumovPGq8FCFQJK6h7KBs6yzmH3dcuv84GRhUf3L5z6H9k9gRNJdJWD3jrBWCod8JC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46DjTC4He7n7CEm8PhwNrvLLjC5FQfuckQQnw2X4kQKvRqXRSUyzBuciqRV2Vx1Q4RhGaGGHF2Vh2Bvvz83srSsd",
  "key1": "55x1hisB4WXzq3NwY6uLBDnQY9DGv9ESsoBFTfYBXmWQBnfNwfhPNjMPc8nd6eyQk8cKPT4YtyFW8zJnVzdpeP42",
  "key2": "3zzgrFC5joSwnxnuTamsAo15X1CQuTG69tE3wwMzCQYon7LGf9ZDiSXUMfzbM3QyAcwLuBdf38uPLZ1tZC1QMztC",
  "key3": "3Q4jdHEN6p9zoAtDk79VjdLo5aXubYBAK2YFArDn9Zm1Y5x54uNWdSe8JZthaQPQpeSCrRg9tgPDA8ZqFiNccBCS",
  "key4": "j6Hqsg8U5sigetmbwcKKNPc16sH1QgEv6VyoEwgZYGhXZUEA1gAcBozZCbNaHoWPuQY78zXoRw9pJxeuNpeXQKW",
  "key5": "3hb4zVpLBZNAXwK3cAWxruxaLdYHocQhPd7MqDA7gapRJ7vg5NjUwctCNrhbCYrbqJAzTpLnUWqN2V8rnp5AQJ1m",
  "key6": "2Dekx4ZULGkPiHRGSgjGLt5tebDH5P4zcGE8U4hRqhAmNkHXLuqYtkaNrYz9zZ25fKoVCUyhfLrRDWQwbrwgPZo1",
  "key7": "3cJVHwsyUt6st2apedbRF4Ea7WwKwTne2ZV6G8u8eG8YJpMKaZFqrJckvoogT8a2obR4GXreS6rAgVRr34Y4XtcA",
  "key8": "319upurTwoG7AqEbZwJuBHX7b2My8FM3e7JFFnVh7LhDuDkQ7YcRMPdvM91vLsqMvLkfBqseBczMCrD2hVHxQttS",
  "key9": "4xX2uLioUaB8THiX1m2Vkhgr2eAtcFY4C3b58QL12orpc6XKWVYjPAP1RCbzEbgm7HvAxeZx99UqLn1LcdJDSiKT",
  "key10": "iP4fd1k5q9WiJV8XYGqzoQpxsU1QYmN1Rwej4Tez8TX1rq62ZubEsuiUH3NCfgfLuKmmSCqvyAAuij71959BZjL",
  "key11": "4DyUofnaqG1rA8RBFhnn3TaSPzGcVMtCT4cGfQUoKs85AwxB813CwURM2WzuKLeDg5WEm4TXFN5JvX3woq61GGB3",
  "key12": "KjWtYSqvBGqf3FchDfkSE9BdRVMSPEAe5rmqfV7EfLZJfBWk66324Psyx7sMXLuneWVLw66TdXMPUgWCtVtFXKg",
  "key13": "7JKgxMiFCigKo2ADrnjWU4Ef8q4JPX3rHcm7Y91iJEAhSbzePFeeUnznnqFcCBdGuXo2JUT61AsWW2vn12W6z4m",
  "key14": "ZMrSk8Xo1JpJigDmW7cbqRzJpC6cvevC8nzdKLm648PAkr6KES1uuddP8ygKa3MeGczBWnauoCVtmBtLLgSX9MD",
  "key15": "k7m3pV5BzC96E1kEBhYTvsiKfnreQi8AQ83ouJ9F9hdorRU1kK8wTdbBmjj8i7NZoCU2iyF4wRVXXMoSkWxdZzL",
  "key16": "5LtLKkkCJbuHbY1iwdrYJo5PRrxen4USVxoYqDN9TkgNR2jawXkNgPXzrizKRJupHWNbNUtrLbouj2irELVx2ivK",
  "key17": "4k3v7tSdMMirxyYj45f3VGDo5vzh4b2TYNMwmcpWaZKY6ucLpAgC7gginV21aWA8pNDB6e3Y1vpA67D7p7U4ELLG",
  "key18": "4hPw2dPhtSRGyGs4JB3n2AAb9TX6pJcQWjgw1D8kqiEJ9RQM5gaCMiiJ8igWdvWcENgukqtC2T4fLpmykhxSYp2s",
  "key19": "3tDwoNS3wrSPP22Qgi6DABirkZ4nrHGCYXwT8WWVRV1WjCBXXJ3SctdJje4D2SBPapqzgJTQuX6ABPDd4ajBVX7R",
  "key20": "4fD4vxyvuH1QaoTpAzZeSAWhPXiTqr6XPCDRH89VwvoAfV39JyPhM2gFLDjjGZ4cmKiwXeaHGcwGbYgWGcdsEZMC",
  "key21": "iQA4Sqs1JhseSZtkuhaUPfEeMub3z5Azp8eJAXGCsCrgCzz2oMwoC4SMm93X6VJZAptyNG5TrRfjAQFCbdDP6eA",
  "key22": "36Yu2H8p3VQ5XP92XjCaqunPtPHpWsLV7GQqk5GwXcU6tweSw6T4o3WJH44mvpkS9EkwDX5iZG5jNz5c7aeSLR8F",
  "key23": "dnUk9PQWg8jC6jmW4J65Dgwacd8htwbgxDYnG8sz2rxmgxbaFw1BCpQaAd6Bu9S3HN9g9mqi6syMYqiz6VJsvuX",
  "key24": "XGjcm1MjQ23BMWikhdVs6xUMPv1UQbiZoxZSVnPAnXU7jR9741sKgPm5eYX1SNzaVmoft9aDb75mQmENqfpSrRn",
  "key25": "5KSuvVfjtCkVGwefeWQdFiUPDn4XV69zPWEX6CzSTV8rFAsjjxEKfN78qwV5c755vmVM8A4v6Bms1pmAknoHhF7e",
  "key26": "hoFCX8BpL9qfME7JkturabX3o2FA4hUPXetPVzFBM6Qb3jssCq12JiLUsh5YSnSUBqyvJz4d3i3A4a5pBgwVF6E",
  "key27": "5LmTjscgedbmDzRH8yxsdrmqeB1Qp2G4gzKWEXYjBsdUZyEVwNDrdXM1Jr98nkaf2Mcpiem6bsWPLhAyQBsqq5t1",
  "key28": "3oTNk2SXtfapwdDf1o1azn5nP7wPooQmHefbetgJ17yJfyYj6YwMNXWSdqSNSdGKKvR9Pcd5RGLH6Fm2NqH1HHkG",
  "key29": "4M35EZDj3qhV3Msb7PumkUyDEEe4DUh6VBqDRjHHXsM3wNSxyva6n2oAZVfLFxRY1xKY5okBsQ63uYhA8B1zWAY3",
  "key30": "38iftrivpqDaZQAnRBs623g61z2KCQ7VK4ZsVnKaPX2Rqm4DYESmC4JqmHDuQTUhzkeTCYKzFiSBevpZ886Svho9",
  "key31": "3yGtEwSSn83ENtQD4t5cLqwvici9heHGZkzbLDMi42SCoG114GuAZxwgz2oMk2Y1Gspeca5m8EEg6Gzy53botTr3",
  "key32": "xNheDdpLuhKJxZ6qMiSZTqNJSm499Vsi5bd6jhJ8nq1gwHk8ETk1bG44VDyzsHwsk8g7KMNEf83buSztzyuiNCi",
  "key33": "XRHc3W1QvZAZpbQcHeWVd1SDqmqKWfkJBDmfiCuiZubGtBbkCRD5sf97eQ8mLzD7ErGeUCLpEWgUcMsfSXMYVVm",
  "key34": "5FBGTc4akFuLT998a7u62wttVSX2PitGLLQFuNSW96YBy8EyxNu2XoEhRrMMTrsjppr88vrDrpbG8C8Gyq2BKtuy",
  "key35": "ozqhCU5t9jgePiRyxxwv3Hx7EzMT598pTdoYhBA8PTCjg3MqrnTrP4J7ZPPCKLQdi1ar2aXVrZRST8gUovD8rBW",
  "key36": "3mykfg2RP2GxKrunAiYEfueyTgYAq69GSramtqqo8sdrC1yTJg97jNMJYFtX96hFQcnY5LVkCB9SexzZNd1cAYsz"
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
