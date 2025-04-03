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
    "24fgmYoCV5yPokygCWBTyFQtiZw4NshwdMFYXjDsinbyYHzSrGBasCnAeykCfbkVTdjjJcSsqscLf1VhVt7C8CfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32YQiVaPzZKFxqQMTPmkvJpUJRveCghzVaGGKFbV4qB3GwVSc2n5GLD6FyniewzEDCzKDYSrNfWvCxJ3iux8EpFf",
  "key1": "5af9ej6H5GhhA1PfScTFEWejXweFCjM55Fi9AHd2mcSzAmUL9BZEEcqLeYc7W7RN7km3coGzdP3hb8pFNrhr8fqF",
  "key2": "57E9gc7b1oJfG8gtaqxDBCf8harJnB42q6uXvKESPS5ZGDeEW5ZkJhAkRUx7umF8nMTUuRA4j29QX2xVXRfRtHRx",
  "key3": "5UFaFRpui81K6ecCU7oygzGzmCjf3m3ENmkF7gjYYhs3PD1uSjYDRRys74vrykuJ7fFXPUNMFPVoS1VYQgJTqJWt",
  "key4": "4D6iDSfTZTiHMpAphcR6fZabjVC3vPd9s3ote8dfAA7agpA6dYjZPQTEgL96bdJvC36AHrzajcq9p8Aobts7Hugv",
  "key5": "8oxN3P4BQGUbE3LQ7Sg9wbCnZMEVAV492sAfpF8unrBokCXdVZDTpProbg6VgtKrCVQ7X2QncVbFRqRoxb4BjAc",
  "key6": "4A2fikLCQNqdcY8APnzQy3m2W5eH7Bg6ZpRWVJSTxSTEmnx25QL1xQFbiYbvnCULwc86ggzNKd77M4QWfnuKwoe6",
  "key7": "3n3wJesoFw9FQ8EpgszE6kQfDcgrnBJwga8rPDRuKJizTRZX7SyqRem1EzHekjH8rT9SqcZkrBxVtRbhgKKxYr4G",
  "key8": "5nYqMANhzkQQSsgbXAw5ur6fRKT1VRkNm3iDkjcWb3XYk5jMtoadGzX3Eu2upmkmfizNNPmuj53qNxkkopTRKfgo",
  "key9": "34GaAvRPE5pw6UAnuxvfshEAY4nK6tJxMj2QzkHrQwp1uhs6nLGWGowesz4ah42QKVYm73AzJvuEBUTC4oAra35U",
  "key10": "3kbAj93fdbuKo273TXxrkGLXAh7v7cLNFdXYJgszZBSrmCXdUyC6o7hrmrQJtXqckaqNhvGqPq8VMWWFfGe1nG6V",
  "key11": "3G9WmtZRWW8DRigJ59YiiHLnG1BxKQACUi4LhjT6HHHmwpYxFGqnLgUUAXirXMtxo8ARWKDriz7W7DXq6M4jpf2g",
  "key12": "3rv72EsorQMU4AyKNdmWHXksK1R4zHuXx2hpTbwPkEgZwtUBTCLuFHPPxSY5fZtx7V7YZN23mwiNoEWcHj3VoFfS",
  "key13": "5DpvstPTTqFsxEAJQkSZBVLwxxJNKdLE2Su55SoMePkS7jdYf9gj9wHi5gmmV4x2zNHRJ6FNjLJj3Vr9DHmPDctp",
  "key14": "soWsPZHmZXDj3NfKPJ7NeRBydT4pP6XcWqVuCUmXdYRk8SS6QMjNqwUApEU1zzzdUzYybaHBCJcY7vFGTLMSg7M",
  "key15": "4yrLtyodxgwNxjRNrpncnmB7yEc963oAwThZfbdywrhQR8M5hmyrjzhpcAPJx31Qgo3vuPKuNcPe9bTPCFxVfXkY",
  "key16": "4CYre47VfkeMRhtP2SUd4EgNuDtK6Cn7KEV3vUPoW7vrSzGCGUAgV7odUipnnJ3iWrtXMStL9mWmXPrpRMXY8G5F",
  "key17": "JNyJEfgxhCHYEm7hAdu4UQjpagsedAH6uN6fx1Dqhym2uVhBoHB9RdbwTwhHWEEdDjcUNUbH4rskaSxTCHWEJ9e",
  "key18": "2SC69UaAFtXNUHDAZzcQ5KGYK2chtCM7vUsPGDTfzwfXoXNHxeUpsUrgjx9YN6q1hDYysYdbtQeiY2pyN8yFvdp3",
  "key19": "48dY9ugQct9hvXUT3KBUhnXhZ2JcXUPeXJLVb8Mpo2q8trpYksnkWuD6TYjEYWj1QJiw1i5EYAiVv9WLTpF4Ju9T",
  "key20": "5TaNJ4kz9Upmh41pNeAC9nMcZvq1xft4eZTsBYTccUK2Kt2Q9BCBB69YSKvpPGVM3CVdhrfKGZCDVgub7Ur52Tg4",
  "key21": "29AeEzwUkL93wvDfEso89Uw2LZaVYSLnwZn4k5qDJ77rZJgCgLFT1oZ5UXia9CgeziHJJRY5Snnjd3VKfVEcw5a4",
  "key22": "36HCQaxV2GtKc68C1qwVdWcJfiHygywGzp8YHdqQpuWVjVHt82qVEFozAqmnVnrXZM15KiryHD74zwBw57gWHBDw",
  "key23": "5fqVteSoXij1aedb3JKyr8H6e8Qcx3HXawyn7UekchMrTgM9CuF7dbSwsixSwKtBZF6KrqodUEGMPREBuGoATJkn",
  "key24": "4PudHTeZ445DCN9EbiogqqJ1oAQEok7XyRwo3ECrRzzd1ydPXitpQWWfPSWbvc4JbQtwAqtLY3GGc3v5RoTXaC1Z",
  "key25": "4tvmro2ktHAvrbXDSUBhzYvkzj4T4Robf9FA6w5XJ7P17DZmmft2ni8HMXhZiUNhPVJs3cqM7KdPPaNsXZBrWs4d",
  "key26": "3tnqtaV1SMZh3TAEoJygcXy76HaGoNk9fJNuNg3S5PiJ9fj6WnphkyqR137VHBbgi18kj7SkhaNW1fkgDNRTUYP2",
  "key27": "7TjinwBQCQ3tFME3pi6jJKL8RcPpnx7UJZ4eUoNpjgYBAVpysZpr6xYYnonNaxu3pL6miEuL2JJHMpJsxVujjsW",
  "key28": "5UPhR11XBYpo3GVhh7xB78b8tSxr54PAqqfBgKKMXt5BhbzpNxNZnnqWNPBbzDHkVR9LFM3BNeWFqkLY9p5APR8z",
  "key29": "5YMS1aruQCvEjXmAyNjdGmecXgNgNWaHaKJk9fUv5n5uFusyLGC42rbQaRZpoWaLS5jtefXhj6QhfuQqKyyMFkr1",
  "key30": "24W4Qwy5rbYY6fXDbkkeMv2ym1JfSXNrx1ud9BZKBFJtHzDUYaoK8tv9v2GmthbjvXfKmQdCHXWPUdP7DQ7Qm2oL",
  "key31": "3WBEbj8FSoyLbJzYzy26GEHpZ7Ur8QYy3gxwEQ12yLWo28RjMTsqmVcPzzhy59VG7BwGwvqD7n8ZfKxDnyBoM9TZ",
  "key32": "4qESHkfYwAAZxqVaNk8gkx2gWbujVWcyLLu67S3or5uNkKWBa4yVYEp7s78VCDPMbzJ7UuTyYddXBfiajzXcDDrs",
  "key33": "4X6yXUsggf97D6HZCcELnYhRepcgHuHCCZCQC2LqGovktYdpgFPPQEpKpSNt6WycSBhvHUUgQ8bWLCqduTvXCbPd",
  "key34": "5XsHD3vt5yEavvEhLP5WXy597hBm1J1UujHXyJujjpubb9TUL3Lan2MRGetVmVM6JRbzTq2B1G2mL3UpJDjkCHLm",
  "key35": "4UPnFNoGtrBfRavicMYkX2JEByqcbdLtP8di331PRFYPPkJkVawGnjWvXrGDFKxd7Zgn7WbfEsxRQbErg6U9CjDg",
  "key36": "zDDcMUcDqEz7NWXMpmCSTqBWw66ntGupjQKh9G8pMqTJcg527P8t9P1BWBR2wwkWSgLG93n2PQ98eWrTPQL4hDA",
  "key37": "3DnL3eGNPrXyfJj9UzzgfeFFRzX2JEkYoG3EXMGGsFnB8C9qLs99MbsSiAzbKh1Cn7fQvTCyQSCPzprtjgFkez3L",
  "key38": "2o7gUk1nzVgRLcUmyZHNmffPkRMFAMnDvbDYKdesDcSvPBEXn1gqUgnahj9F4VFmDEAiUVZNmMUbq34QyXsVUR5v",
  "key39": "2HJKVAMooo9bNaYkS3DMZxqnao5WsV2zCFPnh966F2PSjc6qFYg8cfu2EG9MZ196e7t128tH3awjg9eePQUPfGty",
  "key40": "5HMEHAFWe59hfKE4RsoeX94iBf7pFVzy5Yf199wDPi2oLdvxJyVkFsxhwYsNenNfGGbpnKHocPZQYPNQmSSwZuVm",
  "key41": "teLgj6E7nKUVEDyzoqEqcFieeB2ceVdSJdwiAFZLt8T2jTtRcd4xLAiU36Dkf7cKDAhkNaW1mG8hRgob8Td34m2",
  "key42": "4H5rKHmFXYogZc63768Cgt6gMkvrTQ7sDu6MbCEVEVyPDL6VwDQLBA85rtRhjPxmMS2nYBn5sqv1hpgyEvLzEnA9",
  "key43": "25AYHUEiAvarsnpyiUkouYKMpNQzHU9FXdSQcwPPzGNayXg2WJpYU5wq2H7XjLHEuJVC81YrebyXMVNzChAxCmBV",
  "key44": "3e4zP6YwUaqFqHAbPt7fJWeWXPgsKKu955tTFrCMSLSmsqmxMTsxmLayzPDVhiKa4r4J352H4ewz3qBm3oug65q6",
  "key45": "2FQDPBYmE4xkpBxzjj7Usdxg8xLY3uVgDm16F5Uo4VpeB7WrATYb9GL6ZzEiXz2DeWXtuvbibPfikqxPXPquyEcx",
  "key46": "4TTP6JYa1PhQijDs5xdCcnPRkcikftYVAwX7nikZF9fUZPBYdaAM8ipXmmmcFC3A651qwovaRdju18VhSLyEkUza",
  "key47": "41SF5zXdboq19J26SbaMh5EvtriPPs3aouVJenWKRASLHJVSo9wuXwh8wARZhHSQCKbTa5qyHNyxyoPJkRv2PTjN",
  "key48": "2yAEZoaXHSEaHggAS8VUv8ETcygQcadXyJKBh3eg7GH9CWiess5mqXM3ZfsBQQDUnyeLkHChcd4PQ9qp4kSpz5sK",
  "key49": "51CkbhVnmusnhT819iKbeJ2efjUzXmXP3vgFC9YBEVDLdZY54kR8XFZae6FMwuiw3QUYx9YtSv4tsZNMfkhxaPV7"
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
