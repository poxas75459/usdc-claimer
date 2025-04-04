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
    "31fGjWNTvzHJUQwCwesEkkMFKkwsUkBS9fdbN8mmw851p1QagCPKgrxT1YU2zSdpsRYRQ9VXztGzuDrYkYdkLx55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CNSA25k23j8t9b7ma2VysVGYXfQaToSXfEqHKguPqzipjZ5f4GSvBZGCrtaojR9PbVTijZq6j9KzhU2HZh5czeW",
  "key1": "5esztDEKLyhPhPJq2QAePB1r1Kex8tEXCC77Kqg1TuDXQcjsi47arwzTQAmujfxHtrMpnomnN8KPN5GZzCsVGDwf",
  "key2": "4pdiTLQycpinE8a3JNL6xQQgvFxKkGk3t9E3YaUk21CKS5wMBDhL1GXPCLiBn3v19JFb8m3pay9e8pSzs5JusYVe",
  "key3": "2jz64QQYUKawcbU71eZMA6u6biZpVatMGkrugWC948bcbAuTSBuMS1DqSG9ySZ1dA7EYkymY9d799qV3gadbAnCR",
  "key4": "29HSVe4genNYzBtfLEfPFa6kYQ9qZgx13hSSAnP6Gu8CR2pTJaMKckntCBguUpSRZCQCqxWidDp23KV6Kqt8XtfH",
  "key5": "fg77zwCEqiVnQbK18EN2P676xfroUgPkoHv2YwCJWiBcrmyi8SXSrSLJEFUgqkoVNmoKRjgjXNU2fqHnW2uaC15",
  "key6": "5emz1EkEcvfQBroD7nEnPWJuAAGFwKysZnTZpZuK82oizKuXVyS4BZbNQxSm8Y2RDq3xjRJMu8hB77RXVT6KsEm6",
  "key7": "58Hwgri2MLDhC9BVHoKGfhMvfK2V4R3iiKyQe24fzpWSkVZNLBc7NqyhWCNheJa9kAxz1oTnTqpmCSMqBFxDkYE1",
  "key8": "2jjkXHpjDLYgGeKWcZgwKfXSJD6qxfKAj4AYQD45jrV4GMBkMGUhuL946SFBMXM3DoRDbZX4TbjjoFvkZp3wqFvF",
  "key9": "5SVrYE9YrBG6fUBgE9zZyzCm222EuYzGZvbojPii6NBoyaJKc9Rzw4wfEBk5G6cLEVBGRDNTazptCQBciBpZ5avM",
  "key10": "EGT2Hgf87UHk29bEf9T1FTgLydTi9GywQ4aU1mHytArpVayZEdysr1Y9B4bVN8EiUVoT446oziYLabHNCYNQrXG",
  "key11": "4eynT1uSyWyzrxVoYd6MYYZPmcwWVxr6WWbYonjBuyZJHamSr4bG33FxXNQJ311fYP9j5Lk4boyupykixVnLjHKw",
  "key12": "53kUAnqWD6MXJUwZJa2sAB97P9MwTyGUhndLCCrLiAtjmKeDCr1xSAyfccxEarSzGJKa5uxhbWCHg2pRFEfB2wGE",
  "key13": "5CPWBdKaBgdf59CbH4zue9VpQNwXU2YBLYMGNci7rzHvLZ8K2FfZEsKYnkZAYw4cYjxSe2Nkx44vxavp9XAuGfpv",
  "key14": "4dxNTpfYJ3bsWHG8fqSF51KcxBPvbSjCDtXP4vfTFtHyLu76yyvmwHJ83rpe38nTfMNgvaPeympLfW4L79gh8W26",
  "key15": "5wPAc8yQ5JaMJTa4MzL22MXAPjfLnGYponMh9GutFJX9ZBGeT42iDooovFYggjSnwmBT2p9dokRyzhMvhVurCXrx",
  "key16": "4VX3BPi7xwARyohBehoHKLsCQDR3fe1zXdHW6jChYVqpHjMuHA4NNAXher8G6Z1imbH8c8f9tY6bVyWr9mny6Yu2",
  "key17": "5LHWUFuxruwmh51bQYcfWS32fQX7CzG9eo3YZgGzZkik7BxNaBUPsPkKUBVNc2R7oMH59qwXcH7kZ5Dp6v2DmjpH",
  "key18": "2h1SSaPFbsWLb49RHfguWaACak5jEY3uz5CySvAfGFGf3dtbmGYvvDoWPQpqPxs8yZMX31C2qNePcMqq7ZmmmPX6",
  "key19": "3sjBgjEa4xjXqKfezwoqacpgJJz2P5hptbsyjBpweNqvD5a9yfgpuy8xoCSrfommd8mu1kcoXnLqzV2YUtyMofFM",
  "key20": "2CCNeFqvxy8RH9YmjVvqmswub36W2U8RVwXt5DwmAc3LLZVNGFx4mPSYxZH1JioCE4qRYfdRJD4PDFRrTxhZdvjW",
  "key21": "3KgCdvanWzbFKPb5F4AA2keckLPViMWdNVVc8HPoetvACK35oeBhUNzKsbeQFDuwnGeycBYf8A62tHV3ZzhtjtNC",
  "key22": "Mv9ahjNFn1Dgx4EZX6RuRfVQWxKZMdrKFXpXtC3NdVjemDo7smDQwMEadKiTYyxBqdbwQpKYT2rufo6NgxGjtfR",
  "key23": "BkYcohvK4m1UVzmC8KiJ4pwLbt5ATKtTXv7apA5UT5JAwZ6kYgc7CqP9EkMUHXgYTm1Tz29z8Vj1BD3FbPYa35y",
  "key24": "2VgqD5X9WbdD6ms8wkuF3gd6j8h4hanY1p5yYx3nS6Wd1jUdPviPBEZvCk7ZxaGpP5vZ8C2nkoKHyKK26BnhhuMR",
  "key25": "297yWVKMVXDFJWpNzLQ1rV1HX2zsQSBAKDi6oG6BcctiCaiCLckVEXQfHT4eTuk5ED1pV6qJ8GWLbqguCxkr7pWi",
  "key26": "2WeZp3u8WqNxzDtKTrTbzSA13qTkbTtSdaX5XTWyywGfEVWw1EkZASKyqYK2ECXNMtw7GpzQWWfcaHoosMnNQMw8",
  "key27": "3vGimxvPryYTziqvzKzMVCYm7hoLwkCeJSLTs1fabYWXJYp8Hf5ZR2PM1kpByYkrbdQGyjm2DhdUia5qnm1Ezzmi"
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
