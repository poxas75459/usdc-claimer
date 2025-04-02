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
    "4Vj6MvyrNSN6Enjp5bYXKiNcbAm1Ga73cdQevPDGZ6Quq7VCFtuo8fnmU2Fh9bqMwGNJ6gktDHQad6atJvu9rm5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ay8WKSeWWGfw4mdfrb1chPHwST1ht3iMKHGqGJcwDXJNL2JNPLNdqEzjqug3p4WN16XsQa1CKsQFY5qCjwWHwiS",
  "key1": "2NtbGVJCPhJv5C3ZWaJtA3oq4q2iVfk5p3sJsgh2pBHy2ZAM7PsH97jagiBWyuSiXS3kLySTRvLmgP26AbvLTDfx",
  "key2": "5yiYihzmXqr5YvjLm93kr5j1m5dvgTPneoqVcx9CMF13Sgp8hbpfRcnKg6Ved5PgohwwoT9pit8H7ERTFKUGKyJt",
  "key3": "53Mg4VWjJz88bbvnXMA86DBGi2TCaR7P143KtHCH4P1iUDDYHeY2jtiFmkTUBUSktrgRurEGrEKwJEk5QYzwMKT4",
  "key4": "5ZRb5NkYSHrMoQorepLmRPFWY1HvFHvGAr28Pcq7CQru1AXtoZFPvCVtzFDnkoYzP52r9pxRFTcatGXcX94wqHkf",
  "key5": "5Z37Y8etHYdPYgNAXnD1TsAcqAefWuBehBX71rbPREsVtSccywtzLAekibArDb23AUNnP23b5eioVHs39ih2tx5G",
  "key6": "4RMNretbbec5Ew7Zi3X3GLKUhxsUAhXBtTjTySRU9psZa3buYTHossAjZUYqx3L6BSV439nrRsR7qtt6YVV5GxhT",
  "key7": "5BFsNb2X93Qf1puabcLbjzNKx9Zk3hukaRYNeGfR9rWMjL1az3qxaaW5Gag2sXh4ifEio6TfCuoL8pNDgaBGQP7B",
  "key8": "4Z6HeNo5Cv3WSA1F2ij78cHU7YjntUrfXZcodupNKZ3BJ2Z8EiXS7cY4THgBxwcH7FE427fBtRcbWRC1XEPtMZmw",
  "key9": "2AYJgqdyzr3w1RXUgiBk9MeU4Dg3HzvjnwWhK6v2vKi3TjHV9V9NjzxR6wjgbria5siocpW2csnKXTEWUrZZc1ZM",
  "key10": "6vZoWzSc4KmEPSCBcZ2fQ9kkxA5QjBtYzedLmxjgVW89Tab9GgsR1YATUQEjvoHZjucBV1yHJXi2pF9hh4i5tez",
  "key11": "2WjRq8Vt7cD6oAy1syvDP4aiaTw3cweHj8A9e3RTDNZXjpPs9UY7CRKXL92JGyL2vsQrej2HRdCWMJfNLtXsjYzm",
  "key12": "4Bku4FexBsEEu8NvBcpKbknMdvUGxTgQuPq9EZAjNojyHuPtEH3EF9NvmSmM89iyhVKMBJ9LJKAj1L5tTpqxjVCm",
  "key13": "5kijNPcQCGeTd2JcPJNzbCYDKmAVUnYXbiLBB8ctthaiXuj2f3B7tTf81tDjJWZ33GjvqWLbzLW3R8QjWSfYBGGg",
  "key14": "2ZL5DpX5W5YZwZnXa3x2KBWd1vkQAnjsxMkNyY975Ky2EmnoyZaEwRezztYPrYFhjMrkEVB27MajTdXWb2QSr7y5",
  "key15": "2KWEFWqZgctT33MQEwy6UXH32qqXE2x1xD48BS86zG2qsMq6HcereWr1gPJeHrajVaB44FDrm7eYNsbSFcJbrsox",
  "key16": "2CXZKyZhKx9bhdpRXy29QyXD5Ho51J46N3yRneG5J2TL7ea97oTb6j4dtB1bfPkampPpDm7sNbZ7oKE1pZFsoBdp",
  "key17": "5MMmFhfjTa6iAJm4QyBnCVowsFVm6PnXdJxifUKNCSkoReEa7kkE3LggzHHENUgeATqPQrawbEXbeAVS5rndKJvh",
  "key18": "5KhWyrT8Nx7fYBRCsEHgH1SbVcbxkPPvtSnSc3oo39RR4isQgUEMhaSb1AaJR3PMojmcVQ5wFjyY6B7a454vzKc6",
  "key19": "r1fNdxBHL1y2xThLp645VPs8k2WuMmTJHJhMa4ZmanvhMsjoHaeFyGWv6BrdTa1iHR5VDA95AfrVdZfbVb38Fjk",
  "key20": "2QWXeRGApDST6WW1Ma347A34L5hUtNdXF6JJC1FH2RETMAchD5co64LrswYTgvvxNJ67K3qhhmDymchswMznifhg",
  "key21": "3MYTpvyJww56sfq3ZqATBiXJeBoYMTLWTP8FUce8YHgoXzscw44Tbt7xj7FQxtUcEjNTtuDFsQ7prbNkzccuX71R",
  "key22": "3MGWUASxFZgyY3KxtU4HzHvQDphbhzU17Jb9dstXf8diwbcdro6DmZLWND3wQx4Hx1Le2UTPVKjGTgfMuaLvTEuB",
  "key23": "4J83wUtd2Mpchmcxe16aQpxjp7aJSonpSiQ42jivLryiEuj2vLHdhwrw4hw76cM38r8pCtXzrQYwpkwXaHACEmSs",
  "key24": "2BkS8YDz2w478mfFkafZqLFYbXQgh9E6XaEKBcLZX461M8uBTgHQhcvURTBxoba255yBTFUcJt5Anx69JnXfQVXv",
  "key25": "2Pq6hfmGUYT6n6E7PeWpiEj8ZszmVtTCk6x7P2o1Bbn6pbYzSKYRHRsjaVMe713RPsqjek1bT6E9AwP9CdugW6by",
  "key26": "4asa6yTYdq6JaNwexk8MdremehxjowUcwo3tnT51W8ndoQQUEDw3jUVkfC7B7nonwFE3Hmp1S1MXe4gipN8VVYxu",
  "key27": "2hRQ9bQSacCJ2AvUzZnv5tJcWA63tBzHSF9znoADu5XtgKteSrEnhFBxPJSQazXuMzQhgeYhxnbnhFf1V8TWapMK",
  "key28": "2AZMPTVXEpqWY5aeogqLtx85zQ7KArupcz4BHf1tAWSmrwNknLApmPKoMsHG8YFnwXhmPMM9KvxsnXxdXb8d47ea",
  "key29": "3r45ZRcWyWDTYcD5KvhxULnoC88fV45sdDXwappfuzUJ1uDFNQn6i7DicSLK4JiRhHmhDyC4hQeRuqNveNQbZrpH",
  "key30": "5mQcyQyNwRrafPDeCfSsVWLmRXxKrAL5c4c4SHYYjw2GZXwZkgLhnhS6mYEtEjTFtnaVuUcf2GonkLmBHmqt6EX4",
  "key31": "5AP7dhmZTdy7X2rFTfSTnu7cZrHhf8Ee9hWUyjpS8cYXV4TMq63RdQYbTMcTtrn845srpRR6mSGe9BwjQaWme2DY",
  "key32": "vSpK33EhCSchQoYL4k6niCcQVq1ztxAGtnTujTY6BZLJPiTiuvkaXod2qAPfERGTd9Ad3iNGVBvxxVsG37BBACr",
  "key33": "5K1Pf7q9skNHZLdv4oL2P5xAyoHNMzPE5fus31wLtARgQmQeLCY635gU6fquj5rkNmfdXuJ93iEjNvPkhsBvoLn2",
  "key34": "3pyG34DCdvkRY8QtHPBDen2svuJ4CPAqqZZgJXrG6fdd11rDF9qfWiAbKXD21CsWUaKHKzgyEPgzQgXdy1qWixiX",
  "key35": "3SPAhthJWzHKup16C6UtKrFebSu2H729RQo7n6iCQwtmvAYCisrV3GETncy3WnmCZrKRZJEoymLx6DpatzS8EbwV",
  "key36": "5AmiDQuix9TPsfwnAxDPcVfs9ZGcdxFFHw4j7RBaxYyXqhmke5cgDAkxtLrSAUuay7bvy6k5oAKR3aUoTKxKS53X",
  "key37": "5xew9Qr8vDc8rEaEcS76KCB3mxa6pmJZ31H4ydM9p3BwBrUPWZgdV4BmEQU5xGa7utHgXRoB4yPG8krKrHJ6MeDY",
  "key38": "4tnkTJnjvmMpiBpJvYYpCEFdTduPTNEkkMykgYY9eeiNJAiXxhEuuqt8TGfuFUnBKvLNdd6hr4B5kFWYcsEzCN9w",
  "key39": "3sxhouQz5Y5U6aS8Ef5YDhnt8PuwW5uTEepSS48daf4BAHfDbdmiWJSyjC2h1wiCPGcCs6UkJL2g9UnYUQqtjCjJ",
  "key40": "2guonioyrSnM6uXRWfgS4qKhFGYhMsmRE59a1QNG2ZtNdLYzFiih6ikBwqBxNCwBom2VMi19oZuEEgeo5J1WDQ2e",
  "key41": "4oykfFWkzrfeuGXg3X8iRUW8dmHgmi6QcJs2UXctxrRgvXrSgNEL3qH6q7FjRr5kGC68FBKh4A7ZVdk2ZHuENE26",
  "key42": "9NmgoQqJvfiCn7L5Mb3yMu5PCwWjVnBogn7QP54Fd9FzR6oKGZQGEcmHNRNgJgUpxpMH1z5purKutbSKX8YskmK",
  "key43": "4MQ8eZkJNP8qaiqtE3dT3waCo2DqZtQfch7ghFY3wQgWivmtzDJuSwiKsY4CMuCLGYeX2GMANT2ZLQ7QF91her8Y",
  "key44": "3o97WLfMzAtbcU1a9y5t3sENXQpvbpimb8NJf6eDDynKztPeUvahnPexVv9e27pJrZT81uqzm5djDnQdwwpZ653S",
  "key45": "38cARooBzarCacCNWjKMmQKuHnKgTRzrP6HMD4P8B69jwhmWPUzUSZEisiUwL29xdLkD7YbBJ1SfY6kKn3e7QUkD"
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
