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
    "5vgMVDk5ivvzNzTos14N1GF7e2jmsmjwCLnP6uPJ5hpG9GpW4nF75eLSvS9STWVNYZCjZdCog5xWUPWY631HQc2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wYP6jeyjLEVhJQdEyGUQ49uQdZ84EEERP6HWHWe3SnETZ7ZeNJ6wwHpKJfHHtCP5yqFkMTKo1UWZ7J9modXp18R",
  "key1": "TLEvtZv5a4zwvQ5NvM7HRNDun3wuhJFkknMW9ZXXPLoyc3NL16pEo4XCkZyvn7BWXMyqkkDFnmeUMNQWbB9FLaN",
  "key2": "2Rm7UgN5ZSfzTekMeydfPJAPa5jUMBtzsqsUyPFjCSwPAH7Nwfv7c7aPx9mLS79DrJJikm7whuspwiZDC9bmptAC",
  "key3": "5ir7VG4X1wdtqqxsurUuHdKapDNPTHgg1eqe7RoZKZkSsCRQP9SLe2e4EWG4Kv3PyxvzezgZ4212Xr2DYf3ufonB",
  "key4": "7N2Trb3Ct1XPbZoqAH2GxU3Fg4yBW3JTRAGPsuEMgxgYikMNCXdBruGMTx5YkaAZAtnBkK6MTqwW4NGgoWqCi8H",
  "key5": "2aNchHiW31SYsqD5rQ3fgPm4z4SqKNvUnaSBw1yZhEjdCdS1w3x2zsMyRYWsFgcZ4aJH3mAgs2iLa3HR8yjBsfep",
  "key6": "557pBX2SJY9KsQFqw9pwWeGeLnjf2MrxWAVj9nG7fNSLDxrudPATuM54oeT8M6roeDuhhHAKLZu6ugKCodwi211V",
  "key7": "5wNRiNWmoJeHrLEVzLuMDJWp1CbgEYuBregnPyuGCHd5XuCKRTfqnRcYNSXs35pRkrDud5DgGq7rLYR5NftZs7yK",
  "key8": "A5nHgzKsUfHdJXXq2nUMqRim9PHt2aQ8xp4y4BAHAW6RgvKCKSC576JzgptodHXKVjYYRhQeiTBqPNWBP515yuY",
  "key9": "349cFk7EwynB71jt3ZicjSJgnRJN3jnCisqUo1FhL3baRspjCVSHNUU3a3NjSm1JqEtxroYNZzMpkqdCnyLgEdf2",
  "key10": "2BQefS93g8B3bGsU8xhyg6yrtjqq5FgfwCues9qgS9x27wAuuDoP6dTV3Y5USsszD4t4WFixaiSwta4CTGw38tn1",
  "key11": "5dZXynGWjVP28pMBDfZy49y7PyF4ruw3BAQ2uoNgUMYG2EbjQPwwRRBVLorihBa8WePN8gJG1wzbRazqSxGtdRLQ",
  "key12": "3xR9DH6B2VhoE4S7JDdLjo9kU7BPXp2eK91MaG5sePndKhfPs2SGNux48TkxALEnWqu5oEAKgVh6xDJT21T622nw",
  "key13": "2qUAvV8jdMy3q1pFXppZS58vEBAHT9pg9mu6H3FsiMuSPwX7tvHewVaPoNHhsSVykfcUNEFRDtLarT43B5QCSWuy",
  "key14": "2X3VA9utpSpdcDVvBvqyo5W17PNTvjZA3YSP7dPjjohK3MWwt4p1msW7ygpkCqm6TKKXnbiZn4Y9qnTaemGUex55",
  "key15": "4Lrat14ChH6fTVhpmuQQVVkJ1HHcUqaEzr3EFsrJNQk8tzL5MXRcSAMHp8qFCcyGNJMrqpxzmRqWGVUMw9qxV1VD",
  "key16": "37ELYL87k1PrAxiYBb6pk8c1UoNYwZpMWFfa6PzSLyGKWwNvzA1nxxL7YfykJaLoLut6DKrHSBYYgzrwKn522EAY",
  "key17": "AN6x6txVgSgQRCTWyMkzht5Q9fQPc4HFw8SC29P8X45qrCvKfNzycSp65MwuvwXNJdYebAMvzxx4cJmssi5Zcb8",
  "key18": "gBdjcCvTkTDCXJSYyVp4VmzJuq9GP4WJPLXPYzJQzt6qkBDjq2jWf7GH3Bf92C962mv48mJvy8H2EbBzkfcPEtc",
  "key19": "3wdKBH6Zs23YYaoFtTq3bJ2ogKbJE3QBgkdfnR7TVcANpwboqgMBRJw98CRF2PeV1EnpUtzf5VMATmSLv5Rco7rN",
  "key20": "fDNryfSHhp9WuME9ZRthwPAeu9GUXcnVdtgoPc4qBLhE48dCAJVKnwk9t6KL1eyAdax5FJx3mQQKxD4nUgVixba",
  "key21": "4e2nYWKRmdQAKMVDQ3J8ptZzXgxEz2H6fbctmujojJfMDiuTQnWem4k1tNpRwLKdWtzGRpB2wg8kbFmUVMJfXbv9",
  "key22": "wQReEEM2RDKJCs886WEmkUS8Uq7iFoVVxXHqd5449UezayFtBMXv13o8n6GGVqtyRyFqoAn2HiXyzkzDP7gYc8q",
  "key23": "FVZerboC6zGNDcF8SPMB2nUAY2tRNoquENPzgR5ckKK4Zd4rg8kq4fbFK9rb7zUsRzY8vjRWPccHkGMQd5CzKbs",
  "key24": "3V8K974dcEjjB1GXeJqm2vM3zsV1n9HHRULsQHg43GQgPjmrkAroUKpWn7fQAzLUcnmd8NU3EhgiFD9FNKdTLkgL",
  "key25": "4oKB91ZBbJH6vYfDvG3wir6mgH8hjtkTw4Kkw15n5VfReJqMEAFUaav6b5T3pJvMdEbYtHm92yPBZSZumwBSsR65",
  "key26": "n9JZs5RUmXZPK4ULjA3ceFJiDwqHA52UPua6S7eAZn9TesM7bpvVxFTEWxLUH6mi8vYnpEHf5arbzBaAZb2VwEN",
  "key27": "4LYXP2NSuqau1kPLBhtw1BgfmP9p6tqNxAuR4UxBGtcJYymFN3t55yyJ6MdcxKiQTp4MFCG8DXdeMFfQV9jMfVup",
  "key28": "4CL3zQtmU12BPd2WD1ZYEi8j9QNJAHiosv3RPpbj4VCBe6YXhpZkkvocuqopXpc8RvGDLYwcbsfKgUssogepYTXT",
  "key29": "4sKnT5LipG5iEyokQ8DncmTxhtChY6v1gkb2vuVU6i4AxJoE5tzLdf4FFtqjiBa6boNfLyvk76ecFTCBf7f83zA9",
  "key30": "3jM1GHYJ8UTAti7JUwbprbX7mv7VKLePXmm8U6rbDV5xBXdWEvaDFP8yGB23SQYssmv7Mcyjz5vFbG3karL3dNpe",
  "key31": "2NrSQceKCYdHAgkwmMryxuZywncVyng5YNnbpRXuuzUc6vB3dWjEGVNs11fTei1zKD9TJxhYsXqLzQc7gE6hVdMR",
  "key32": "3rT1dLpTPoMWULVDthoAiXEhJjytKEsajy7bjfEtDT9wxS5ySQHM3L5Ypn2f4wSRNdEgRYB7kryqXjpu1EB4amRZ",
  "key33": "xVPKLBzPEDpeeHeYeTV5HhCCsyZFKMubxtsbFDcgZrRJBV2rv3HdxFEg8JXvyKPw1zm8GjgNPmWd8FvsLH5zFaH",
  "key34": "5rhNvnJu6AfEpWuzCFSXQrNbvSq7xgG1UTZzVA9Dmov1k6haf91izvNdfYGo9ay1THb3P5ATh11dFYCv3HBNBVZf",
  "key35": "PuJfx4ZciaCs42gbPFPmG6eaf4Y2SWRx6ifS5LxvtHFJxRKuM3eC9XpJXT4zYLCv3Z6QqZ44K3ZwCvZ7S8f84c5",
  "key36": "K7GsH2rVGbVaLC9UDChphGu6ZKDmDv9oGSCRGzJRkLFwP8AxJUDJ7f1FGdscsG4pq3ASq2QEAVZActgsePSZT2k",
  "key37": "23M3SNPih9Nwu9ZsffBmnxUontu9BGp1e7GHzpm8t1Eq7XbhWzV72objPE7vaoDRT5xsiWiLvLfup4GjjvYR4KGt",
  "key38": "5f9UWDK8ECU8Fq2RpcxNBaoZR6zr3qAeLTuthVTarKGL2rUCH4w1MMhwhjt4FsgaVc8KCG85pfx5m4qVJp8ghoh6",
  "key39": "Tijz2zG3TVFZVT7WV1SVCi86BT5ABtErkTsakJNy81pKRzKXu7LsUVNKWTVtANKebWxDo78e6uqyQKZcopviLem",
  "key40": "3vCmVGRwv4qbPqaArNoNMtBZftHAkHSNo45Znx4rgmAcH8VC8RaiB33ruEZYMKCmwWQvrJJZBdmqoJnqFNw6Cs5s",
  "key41": "2br2jR1uYnyPxrCrfRaepzA56yZuY2gQqxpMeDNk1Fy94yURLWzoGQVAKf7WUmbZufWsQBuiP4UhWjigsTHHGwUM",
  "key42": "2qkuDH32geurafiq8YUF4JGziuyk6BdCFgtmjvsUC3JG9S9c7629CB3jF87Yy4ZBEQ8QMSK6VUR2cm9CnFWwZAU1",
  "key43": "3JP2HzcK1zZbY8XeWU5v8CBaDYvWiCMh6RTa9b9Ene5JQDDoDbu46vcv5zquLZa4auLhj7QaV8ZbCLSu9fU4hjrP",
  "key44": "4aYGYKrDRvCZuaVt5YRyMwoJnNNj9b1yqC25qV9SkFBNL5w1Fqom1SbaPjXeRys64pczBV8nz5SYU5EzuGN9ofZ6",
  "key45": "5ARUJPYCHUAuM9kDBtoSKK7J2sAFk5Xn826FvZ4Nr4QdrJYAZQVWVusq3dh4XRWJcQc3LBa6WfSpUs1vGyYvwY1L"
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
