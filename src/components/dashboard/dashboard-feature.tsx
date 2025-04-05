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
    "5AinBFv75HmqQAzD1jkrXTzESNk5v7bQbM7V2obvWaJb1Eoekhi1vgyqGXJqewatE23Fe1iRTa5PnZcXKedWPKMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dUsAbmmUgsoaM8ZXsJhApxPzpU8LyiLsgEFnQbBzfZ5oT8mof5kxo4qwEfxGiuZnSF3y8GW73bZSuMJVJSNVtHX",
  "key1": "5ZNsVKHt44ofp7BUtkXKZwbQLbrUQTQh7HBnGMAbt9zd74TPmtNomDe8AgmASgkXfewLB3p45rDSehBDtHLbpBsX",
  "key2": "4qeCsgTvHZzYKEkxEf9BZJ1vNvogEwmprD2taJuKyfAC8e7AS9dUhGzw4oHCf4qYvVY5YbwgokNP1LEn7S6Sgkos",
  "key3": "5hZEAypTiWHH4j6qDj654kCEDA6eW4QSz7JuCsE8HCPPWL5fYkLZxDsjAsMRXcvtMkoB3QaNdmk3vdWrwWBhfFsH",
  "key4": "54JqC7kw75xYwPpmPo8sa9HBxNEQC3APJTJpc3TdokNqDQxsZVAoN2ZM7k6L6SZzFjtsnuKS6jJHzCUwL4FaTEyD",
  "key5": "2so6eXuJJ7e98dWkGeu9EbUeFe2eAQyiged3TRmnjPymqv57DMuQj2MPvBy9cmY7ar6fRn7CivxSbuyUTjvDBT1Y",
  "key6": "58aJDxaQR7tGuD471VQ4HvWPLHs8hddUiRdcMjVjbYqKK6zbKkQ7T7LYrQL3fjaD9UjaYA3tS1LbU44WDimxyBmT",
  "key7": "2aDk8c3QsG8HtqamS7mmZLGp5VUi8RZxDmxsg1rFodY2RAk7ddFhDw2wQ1rT2iV5rjdF3pLmX1XHhWDgbJdZpaud",
  "key8": "2i7UiB8WN8si2PtSqa5iFPsXrbQC9NLN5k8uavFeyShZC9t1phJoYh2iHsoLat6Jv9pVsqV8LF3m5Y8pNnsDTmMw",
  "key9": "HuJGbFWhnZiAA3YTMZXFkU6E5QWSRA1ttUL23rWw153zsVraKcv2s7x3Rf2tshwPcTd9MqenvN9wD31KkQBvAVm",
  "key10": "3CyQuhWfHR1gRTnCwD4punVzjPff488Fc8HT4WizvBEfk4ns8yZLRN7v5g9avBWicNmy6uc6s7pQyEgsRZWsbTjq",
  "key11": "2qjiiKCtyMhczwrMxWzJh9mWnGEgRDgmChYmBQEqZpQfGK39ZPrMBA2AhokkK6iJfCtUVE5rTKyAG6XQA6mzzg39",
  "key12": "49DCy3QKJw33EYDQwfNjRdAJdPfXeFTKbusms57pDyWkYxKgc5qecsVVL6KcLv3Y3DfqdemHUJwYqckGeN7xospf",
  "key13": "2zFkXRiiSRXuE7jrjK168mpqWMMjtZbXLwnzR8PyZcXwo4mWAuMnakLUgpLQywG1YnzrkLTQD4Tzx1KyciqEFr7P",
  "key14": "5F4LpL5qsFWwFdGyLBdV7Ad4h8kDXme2QPeYcjYaPfEUhKxqsVic7v5kwzmVxSekUtZv53aSC3y5kpE2bajdPboK",
  "key15": "2qyVgTEjoUejJiFFgRDXN8J6e92HTmffhxnkEADcqAaMZHC9tKVnakRggFj4e4WLfdk8B8CJFrmFaTKQna8qR4VP",
  "key16": "2wMEBZt4HuM6c3KgxfL7P33iHnKn7v7m2zd5r78hcUKFVP9ybjqGnq5r3mVLrSWbrwEvzoZx2N7o136Nb77bf8yo",
  "key17": "4uJBPRFZRLacWYGJZisnmX6ojBoR7BkU9QpVzSeHDpseRZCRQLyWZCH5B8qBHxXNnCiA7wS5ygHukBCCGYVHKf8o",
  "key18": "3ebjo4tVHT24LqK9AP49QTpKoWNaMS4Dt74F3LCj8mD94euEFvKtos9Cnhk8nR9ccAe6Zao2gLgZKXspD9SaqRz7",
  "key19": "2wKqeU2phpndHw8kediBfnaKEUddiQ5ZDQNJvJ1iMd7a76NGLYFhqx83QNfLyTJsYNGiwJfgbXb3RygUVBGJ5sgZ",
  "key20": "QiTWKCKDdK5yBWC1MAZTtaz9BpThBGkicZJu61hXscPdbmUj1t3sukS5vME5sL3LDHyB8gHuT8aQva5LQPdcDvs",
  "key21": "2ZZN8uv7a1W27oKUk4V5ChryQiUTNpTxTvxkEMSisAdSrov3QSVy9QgmLRbv774xFCTPbJcwsRysfr3ksvSJpumC",
  "key22": "2eaV5hhixBuBh3zF6QYMS9SKr951w7W4XCNznkZ8t76Z7t6F3tvKg3DZDZHag54AUoPtYHtA4AKUSSvqM27eNSgs",
  "key23": "4pKXE31721D6aRsSkBJxxMs198RkzR11mc15vTLtRJdDTmtd2t4sx19xQoyzQjt1hkJVvn8FDXYyLBpMVS2mNdVU",
  "key24": "SmTmGUYuxbmdErvSpL7XC4ssdz5QeovnbfVoczhwsmiAcxn9GMRdfqazp2eRh24fKmsTeV5r65m3tD18KEwgyir",
  "key25": "48jo7RSu9YVAd5iJjHAQGswzM81iEGiczMwtR4GPKpAtyEN1tajUm8XbJMiMGqVdmS6h4e7NmX1gzsRBdDp8KVbu",
  "key26": "MA7sZEVr33VhUDUnzE77uEgS1M6M48VqVbqa8DE7uPvaRLBG6iAH4pmzgBBbx3psGhFtGzPfUcWZh6ABC7tnyuX",
  "key27": "2sT6kagR7fw8HRD7FNT8assotU2crZBbuZmbMUxYVFF5fbgMgrQnC7aQExMkSY6YJWVsafapYxfyf5XjjRw9Jowd",
  "key28": "3zqTdPBE6JEreMAKDXHcP4x37Uxgzbmag8QUzRgUDhTzHh6ndAA8XXk5ZZaZEJML7CXLGGbpb6e92arig7WLi5NX",
  "key29": "3wgqwobTJxtUt4SJwGLqhi34Na2Jvxb7TryMsSGfVQo7UTYt94PxnGvQG7yWazMPjuCAFKphbtRKUFkpwmtW9ody",
  "key30": "25wH62m2ipYVTQxcHuBnp5iJY6vaQyswk2rBaeXN7jvWvpG1JubCJizWMYw26ncTGcZiQ91iReqCXpALivYTc56w",
  "key31": "Tk2FN8sdJps4RJ2vHrFtcvLVUqd3nuKr2Gd1TD2gYUN2armYyWBvwWepERXVLZ6d96SyzdSE8qKr6yZRXpoi27g",
  "key32": "3GjNw2eCCxXRSdp9fwcPqwTvX59KLd4PwYaR3ZfWuMure559bRfrc9TF6t2UKsjf1JHTeanjpRv8dEicCjRcyG98",
  "key33": "WYdWz4Gjmvmy7aP4Dyz86NL3gPPCa2ipbpBwZVmqMkPDeWYbeA1imFEsKea3i4doj56F84z2684jp7ScxD5HGtt",
  "key34": "dR7V8oVAMNddd5mNkDBPRyKMNyT5HU7y8jawsrdL5o53mkTDDPKbVDvAUkfdKSCwBocXHrAE6tuFjV5U8qs9KMh",
  "key35": "4VT7959J7U6WKqFk21B2BAHjbcxyLTjbMutWj4zGwvNys2Q8wim8DAfkMmty7tusa2B66ZNWPVxeHibRBosCPMsi",
  "key36": "5waRKXaiVD39xf78HKfzfPiLiHiePRPzLxwWxN6ey4pF88wBsz9kDCL2C6gvHe2Z2TgWQzF5KsbHcogMSyJxXfNX",
  "key37": "2eGeSUZZ1yi3ENHL439bcuLJPTqprDjENRv2v7tirbpZVuzikiQD5i84daqAU5j9x5xGo6EFXoRLR8oTaGNr4D23",
  "key38": "D8oCE8PMb1YJvbXXBHb3VWRbrevZ1t7Bxt1kUYd7VosdvVPBRqnbZhM2pBdg6gHudJcS2RLdHfroJuu3YJcN5GW",
  "key39": "xx5EnT4JR4isgTdvchiqQkhTmgEsqALmw7CXEb6eQ5aNucC1T18qZAUREcTGtZy7NXwiGMUVpFGAPQ3sVfnx1C6",
  "key40": "459M1TH9gZQb24G2yEs7TGK2k3UbN7JfuwL7AfXsFMBe6251bivBrs4Tb4ku1ed3NmB3yrs2ThgjCY8tVenWLuBG",
  "key41": "341sMR7hf4zJcLd4EjMF8SgGmYaR6qemiNMGnx5yH3hFDBc7NeU1nzbBMmc7MVuduPnT5HWdQ2KkcehfZyeKaN9t",
  "key42": "4ZmEk3HdLnh9qdRvXWveg14mjoai2TPemChcG22QUvP248RyUzWyFvMYWF9tcZSYJFj6pRAGmuktkxXyhvk8w7L3",
  "key43": "5HGABYrkzZV3FV62ntydwbekowCMn3Zfyf2egJBPq7Y16UzUGG5FTbwBKAsUYqNXp76BBghVizCb6tRaaCjU3uAi",
  "key44": "3gt5jQpxm6qyH7bWXPy1b16B9tspWEKfSLtpsJQ97G3tkCh9P62tAjhnWUeMtqYQr37EARog16rqo5ooKQCKrn3L",
  "key45": "eUNzdffKftTvvtzF5oC5nKGxvLmqakBcbPSe6cBhJw3mvFBJEooyTxTvHepnww4HDNNGt4r9x93dcyV5Tsi8wNY",
  "key46": "q9rVu9gwppKr8FFaU9CizQNbJDqL8eg7VfxuSWdSe6yYiEo9hTKW8orcjjsaUTirYGadmQuDxMkvHutQE4gXKp7"
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
