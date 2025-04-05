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
    "66y3estYjbZNxBrLj7adexTtNFtdE3nL248eoFkqdkNfjSQyLwFTY9XJP7NR2KgdTxe8LhDfLqfxpQArbJMx8FDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EhqSdFAo22PMCGi4ibNACWVc39hpCUoFYLRdhn9vA5z5kViLopM9zd1E9QiJyn6BkGqeL4j4UjYRiqSSdZQdh4Q",
  "key1": "4G7YK3VwnbsgPA1CCMwUdC8ZfqKpH9DHrvKzdpxkRxqc7BhiUt32H3GD3wjKcVxxQX5nkq6V3uGAChAmCFYP9jCQ",
  "key2": "4tQmbe3mnex5yu2rXcH1CBKTQTmHEE9t53sb85ND9cKFrTgShkje2RFwhBH9TsjznzHpk1ovMavePGE4sTmCcjCf",
  "key3": "3JfbBajRgPdePyxvLqbG84KmT3fm2kbtjD8kjaLbpxqQxmW6cjcmd44U7yPfP1Lw1tRFxPe8wNG1m7eNX66WLa61",
  "key4": "38JceKFYvo1jbdYeZB5KWeEQx4SaNBNwiMiAyJ6oeSHom1FuDHbR4szdAq3B8HSbzpdzJK4oBueXSYmmQpki2iZy",
  "key5": "56vbRispjPoFNhdzDNF1GnmpifWwyF3D2Q8MzYEPiCDjkckEnmy23jqmK8yVzaTt6UbmwomAhDTWQeYWkpFGD3wQ",
  "key6": "2JwgjDPL7Mj97Xus9ComfCRUHw4kWonta4wQvCr1ijYhWECPJu8tGBr44dWZX6zQKYWcgUVeB5N3z9G9fSE32iPf",
  "key7": "2ecg1Wf7czxEhhcARuZsfuJ7wYvRirpewpHXytFBvR4BtwTLP7ZDaaQa1ywGfUfE5WV7767N1Wx2RzVQyHcQMT9W",
  "key8": "2MBAgsch5nnMDNCwowJh6FYamZzVfuJXXSYyohx7nWFum3FJGS4xTE8sPigJaA8fvQoZivg685cVgBjyXjP93kXU",
  "key9": "63n6LerytopgY2wcwcSLFRtbaVpVTgEox5U6TiwJoJvknyTEYct6Tz8q92z8Jcmwn9pEgRE118gCmVkQPigB14Z5",
  "key10": "tgWeQYreHT7jn1W5hwjbtMUMgZcdgmWESgfE2XGQoF28uYB8w3d53qhewJzY5mS2maHdcBCufU7AvZQzGaUf1Y2",
  "key11": "5aEFutRV6RxCV18DLWt3oqLFgZL9pTQ4d5BMZEdFt5ManvzX3ujdt2WBDmLiLiaEhZ6fWxR8oEJqbC1hGR6fK4iU",
  "key12": "5hyCsUtSDRdjH3qwTdF2xECCmF1VMhkEGDLEoT1BPsgRG1EuTMPMUAx4s5QEKLtd4DQw9LtTuCRixvXqcKcEeiRX",
  "key13": "3r158uVM8KxS4uXscGK68EkngGYgGGjNrEf2GC5xKQB4JgvZwao516nY17EPUmMaAuDT6HK63Q8aNzTjEKZEnw3i",
  "key14": "4fG8oqLf4qCNxEfgWSpijkYecUh9anZ3eFfqsxwahj4DzoexyfBrDejQZ7uWAwVPV6Mgeh35XHF16gMk1xZrg2bu",
  "key15": "2HYxytyzEfqDBThP64UJGz95aQeufw3wNEA5WwDngszH4bQv1wNEZfSAaDi82kZN16PbK94qQMh1eoYB774v45HY",
  "key16": "2EZ2rP9VA3214863pNb4zK13ega8WsPknwT1sEx8rRKUTBsue1wbjjQMC8WfsmJChAC6Rqx1Fa48fPeFFvREzvkE",
  "key17": "cLQMDnMX9Ta5C9T1yusYLMf2N45rJ7n46vSeN3DVVHxxuyt4oDAg81gKakGCsihmifAYtWPa7TZoef5UUopghUm",
  "key18": "43v59T57QJnBL43ExG8SQJxJsfT5GP4vxcgUeSobf3szPixAcmhsan8E2hgbdfbc1qJuMDnVQQgJS5Jt88RLu1Br",
  "key19": "3CjQg7Fwh52KFz3KrtDP7Ghs1i5jA6NEZZouS1T6ez1fyFJHSLYqSwRL7CMEWYD5KcvfKR2FYT7hXE18qqq38yas",
  "key20": "5TKFwq4iPr53NpwvmXCZ6ajafQtRqBVgBeeXq7zD5Jya9AE2RES4nGBoQty4L5fhoYbNsgqstRhsvMzN1oKtcwiT",
  "key21": "3EKfPHzXvsdMsVdTLXkCmERVjWFFYf29jfJ2qNhvHS4C23NkZW5AbxNjw8X4HjXZnggy4oxGxHGX9ZAoHMJ895Pu",
  "key22": "2A7zySZHnjS8WGGwXBagP8G8GnWyMr7UvzNPnfPEpf5vDYbtfgq7mCzzzJtj9Tu323Wu2gzGZ86CfpcM7UGzhN5w",
  "key23": "5te7VvALXohJY7iaKpAu5u3kCph1JP9mCkHXV7XfgLwn9jfrKoMjPktLnNZQSdHFHYwMfHvY4LqBgz9PPRB576cA",
  "key24": "3Q5sAxeCz79MH52dj6vxZiYBj9dkJRhAsYzGqP14VGXp4tSutUNJnrRphQbCDKwtQM7qdgY45Q82soZRUKAmye9M",
  "key25": "3unejcEVm4CjnYinGFBvPLLoBNBsoqME27kSy1bY2nQvjXMLMtq779QHsvLQGExu5jyEmF32ymo1oQHJ83XVUok5",
  "key26": "45Y52PGJYEGThfxJ8QrQYkUZAanaYPotBC1w74CocY4ujqkUWtyQyqehwCLVDm2MJ4ErnvWAu4eNpUFEyC3Ls65Z",
  "key27": "4QW84PV6B1NvtSETYsSUDFYrNniRePSU4f8ShpCDQN6BaLuBLyMXmuyzVFMJhD4hbe4KGRNvSE6Dr1my2LtaRBbf",
  "key28": "33wNFjRaRx9CySh8T8L9RfWnGdFMfV3eB4nNrRxQFHhLxbjJL7GgHyZKs4BXh3UkNLkGjbXnh2BZr5XqF2vcoQxg",
  "key29": "56o5urSBJTqJAbcdP8cvFarSJoweofVsVxviziS3hrYKSjpZM4mK7q8QVhKmbGQSGg66z2eksM5Hi9xyBZH7j4tF",
  "key30": "4ogWE4dedQymWDzKbBNtbzhsWMV1r8uqvzmxMTKQfYNsd6U61FDRjyfNM4R4WASbSk2GjUVvZiUnt2YggWDQT7Cy",
  "key31": "ojJbG9JrnSEZgPGDTpX2JPzsKoCpd2i9codUJtxy8qrfdDAg9mLZPQPU4ecXHVpZvtimSB8Ah5xAks3P7rUKe33",
  "key32": "5PYQVkZx4BAkNFwdmYbSi4KHcDDjsDSQpkSrBrtNAbyrcuBxZ3egR5TRwpnkj7zioCWqX3do9excnY9cQauw2TCA",
  "key33": "4nBnRw5dHtgHSJZy2ZdfCLVqKpyLg6V6TtP9c1JbdEv5yUMFXs4qDwesAGTeQdyq5gjaRhjjrj5kMooFcomti7YF",
  "key34": "kxiSFSN2ws3tyDoMcY7bZ7N3WJ19Jq9Zn5Xg1j1gtY3cK2tBXoQX7XtmiKzMTdvhLp1BPh963ffDchGNoq32vPU",
  "key35": "25W9CUtz2ZWM3eRqj69no2JtFti2GZm1PBPw7Hrg4vnYrPRRihsdu8XHVcKCvBqDKwgbWfdPP9uYMjroPqmPfJxv",
  "key36": "5nw5Nu1tiv3RUhNhPuu33o7w8LrR5UXmAjG3TkKTMDkQhA4wjDEXAZfZejqZWcDnPUamrEBwN3CXvaHu1GiXQdMS"
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
