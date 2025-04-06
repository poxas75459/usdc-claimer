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
    "4U4bisPWZmur9BuEjSvmtmgTQj5vJjY5sKSS5LxNocU68ugFhXBoMuduYu3MTBkS6qWpWuj9o4r8f3oAGKeqrKLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ReGnjr286rHEB6hbdsYyviCHcFRBYxLhxtWboq42CwtosNMghR6wCc1N7ondCRGZYkVtQMohEsNCyD1hADw9FJ1",
  "key1": "2abAGvvfaFp3KJRYXWWTM59s32Lu7eUbgeeYp4v1vV14spfXmHgCzrmV7FiXzfhkypKgt4UVRsJB5FcSesZfPQmd",
  "key2": "5FLfGiddXFcnGtR1wYNLvfm6BbzguxsmWKV9zagBuGp5s4dg45hh9CnVvv5Q6AyTsBUDKeSxF3xyxqU5dy6C4aDf",
  "key3": "25yUF35UNLTgqEvapfggFHn944Bv5SaYFApNDqFX8MQtY6BurD2v2HWivMdEHeqMqPAfu5PWU9gGGXvBtadVxGN1",
  "key4": "PdyavXmy4nZa2tttr165nQSHZTJVkYp66FrtQA9e2gCAjcFMJC722yHQmohEtX8vPxnRzohgWkk3gCPZhPjau7x",
  "key5": "y5NSpBvt52V6oK64M7D72wuttWfhmCJNHUB9DTWiSJqSw5391Fk2mo71BUMALwsZ8jWFDihzK3ifMX4zkKbufG2",
  "key6": "5bu2ESvKiyveTuJNXaHbCksKfcFaApgvLd2PHw8fBMHJkx68Rg719yjdysqaejvoaT9ZwWEPrFpz53ieuMGPZyZE",
  "key7": "4eAzgMG596NgwYtibCGNt7TvFdFB749jEGv6msfGLwWY5LxGuHRquC5PWcSetRmCCsptWiDVVxFWLLR4EPYjwm4K",
  "key8": "54ckBFST2ZVozzSq6pXc5EkNBUtpdP8YLBwJyTyWmnEpm3TkvkedF56s7ndboamu3AGjyxEsBneNZfSYcky2eGd2",
  "key9": "XVJo4eb1LUaPgnr7e4Tp1npKruMzbhiweCbKG8NWjpdJjKvT5mdZZr7euVxGfKUMP85sH6aPXqWoqq9rdxEUdYW",
  "key10": "2fF2bpXxkscmyoR6a4NHAaDqmmhT6cxRd81jCXthsM5ibhUu6uENXhikT7RTCAB7tcdgnTZVsqfGrsHkWwpz6UMK",
  "key11": "2Nqpfv3dTqVaarmXbkYTRZKrDsywti4Wi6t46LRHnnJCqSZjNNwqj7MftpnVQUvEYCQicNXhk6AhjgYBiAcp8fN1",
  "key12": "4ke7RSTzB75SZDSVC3dgoKAuPUYPCF5bNC7VXZPoVwoxymETePE8efLFqyw8447XGBRYZBXhRg1HLJg7Q4bsgYXs",
  "key13": "3Xcc8SuxhRDDgh5usmFme6miFePVo5yN97DAdoD1rHhSP1CpJnVQevkggUfcXUPTDq58hFYCnk4UKs6BXWWsKbVg",
  "key14": "2f9QP4DUXQRzxjT28yu2YQpC5m3u6KtcPeWWSWLwUoY1k9n2E3n95fc4xmpxz82XM6rT5hdU6XUB1JbTbLr3QCmC",
  "key15": "T2GBJuASrr8szkb5WXfiyrr7u9LXcGFRtw68uFgZzj8xNAQdL6soFDTFhxfMxLcfcFTXLqd96JgNzSxawun1eor",
  "key16": "2SysJxMaNigbttpRrjBBh8v1xkB4Pem8kct7a1nKedu3ojpApAcejjbzuyA3nfdnCoP2R8vQ6WVe8NdxCj95q31A",
  "key17": "3ftEnqgFc4nuXZQizBTd5K4MiSWRZ8JQHntkRNWSNAxbnCJoAQAX2amsqfzom8piqKK8m3mkdRHd6eHWC6S9K16i",
  "key18": "31kG38835B89dUwzC97T4DuMtnpLHu5pJKSZSGUwLkPm3EEnjYBCbzRKAZk3FbAgXX1p2vBmJ7TCpnPYeopzRzRG",
  "key19": "SR9HNfMMu7QzyB74psKLFED72dY814Nqia1Mf5RyJd1ovkvPEJspo1EhqUjVa69EvDnL1HBVkh415tUh5BSwHr2",
  "key20": "3E2YR6sUMFcWuBkXBNbQtmac2Lgxiae7wK8isH7oEpSA8aKZoVCUj26jCvkpc4apjmKoUu54vYjkfrrGppcTXjEb",
  "key21": "DkpLxJAsCBbD4tZeRRWYntPFkyQqYq9YG1beWrrmnEh57RKVoyMdowm927tr4wudX2sRQjfffwWssguHFZBkG4C",
  "key22": "4s8s885UHHVZcNSHWzaCDpJuRPwQZUiw2JcrhfJo5yvXq7etXh3MGta7tX9QokBKynnFDDRT5oJ2Rs8EW3Um9Z6z",
  "key23": "2FaDrQYH5gahr472ruTUqgogPnYoz3cVgtJToieuwCKe4XoDh6qjBuUnsDDTqSmL3bzQLcS2je5doymkorMK2KG6",
  "key24": "3RCBNd2fULzoEvDDPA2xM1vURHGvE34bWQ5hNWeAEkNyD5YugWYphdnQmkFj1ebkZuXesDd9etfU5Y4FYjJgcVQV",
  "key25": "4sxrUr2T5PPXpJgq9FXUmphpxjSFuuU51ozYZeUvuJADfsoo4muSqwztc2wLNtYAUuV3vcqFkpZAXmWiDjZj85xB",
  "key26": "4Hh1ip67JDiUy1xXRS3RiM2hyApyWBiNsuXpf64MMwBHRPVtP8FDkWD31eFRfZceXoFHnQ1it3XWEPwnTq4tcjTx",
  "key27": "3KpLpwsRrNwHFfr8LemGCF8FXvY1n3XZpUzWuZ3PG9FZkk7BWmQM8e3stCypLUJdmSbYbMBGdQ1PqVnYav6D4vpF",
  "key28": "658vmKEjTUgDBsDB9UQbnBV6KwWCoS7zNEFp6Kqqc6eBMYNczr8DVuYa9MrxKA84EKDWuCco8ttxwT5BwnbEhA6q",
  "key29": "5bjiUDtbGypHvfrzdLuEq3RcSbfJq3HBvn3Z2US8dRuZNmAvQZ5MKJiJJVennvN4CWK52muLAUb9qb1xfjThQwLp",
  "key30": "5xvGfGZ7ifWfz8bvv7E5eyfrsCrwqXcpYQZM13wvjsTDo9qqjQ7Ahzdxqasa8iicnFoU1weSL1DSRUTb6D7PoVdh",
  "key31": "2MHLGJYDwNn4mN9LyCGr6dthJrxTBuuonGBQugLnRnCqrBvHMSVDQuKT9NdEL57hDfapjuvo5AzxR8HcCLeADLey"
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
