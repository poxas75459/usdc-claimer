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
    "3RKDW2jUwYUGM8onkm7cmYtMDXyyccKfco4QvpYiJm7uscBxzdKKiMAcV3yGBa5CbwetpETyj8PBGmguqLAiX37y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iZZAmy3VPHwWd28VaLcPk8Zy5n679YbeSikcpDHxbC8bGcy7RnCAQuYvYJiC3N3CpF4CjXkqqYeYgpmZ7YyKgH5",
  "key1": "5eAt86hMwK4ze7ERPmeYT4MEggKNJ1v8sZFHZ3vbK5NqZungsEAtDxs8RCib8j6oAkNZiTkEdCxRM2yZWETAKC6E",
  "key2": "4obK3LMZqWw24yiuZfYwJw7oGwkmVtSYyEMwLqbLsHQS7g4orCPJjfPpBKJ8Fnog1ReY8ot9oj1pwQFNRtMkkoBN",
  "key3": "MkRwuXowUpnwRNdAxyyCw6kwoNXgdypPTaCQcv1qoLyLsGQzsmyr1NRqs1tMorWYsY7sMLtDa1yAJjP5VbFmfPm",
  "key4": "661Urj7FVUFxAcBcLA6HnyxAEUdeTzegXep9R8vM1BozgjGS72bTiq8yq5wvUSDmaD6VcMoQ2EMWGBzfc9BWZqbT",
  "key5": "4MpNPKMS41t6brns1EjEDqvFcBwP67ecpQ3CKyB4kojGDmKYvK1KVbXX1BMHy4N1Kczt8cXvHCkx4zVrLmCkRAzC",
  "key6": "5kkhQzKwuPzGa8i2iHQdE6rHuBkbvwSw5iLiM8u6ejok3Pa1s8uPiBF69kTpT6GafMX61mmTbR5BJ1wYKBbGtXhr",
  "key7": "49dcL5j28xcFuLoFCzznqfrdFf5T8jPBjoLGZFGEHyCgfEgPeLx66Qj9i4kjwmK2J8hgoo5urZANe77hoUWYwJaF",
  "key8": "5wRqEpEPLcQHBSrpgb76qaXJpty89MBHHzPYNYv16JCpGyVfBnJx4JjypBMQ68jKCThuuSTjvivxt9dfEXzWTag3",
  "key9": "3pTY5u8WHjfsiy1FgWrMA4Sjr2QK4MmhQnycApxxV9Ribed4rKY3ddTBTbnApnPV3znW35arrgeJYwZ4f9VoutPN",
  "key10": "2qThAuxAS6WnvEZNQngU9TA9Vf6wTmgyNKGJTGUvu3BAFsVB9qVYnVkapNz2S9nCi9HxQKyex64DbMsSz1buWqHQ",
  "key11": "2Wu6ycV1EHaLyr8FFrTcA95ocbYWYhbYpucVeQi3dySyDWyHccgp12agaWwuLEpMWLyQZo7My9WnEJowQpJCXwLE",
  "key12": "4apew54NmBSypfU3U9FPLgXDdEYK9gFV5JeZ7o9XuKYV5A2wpGVWCA7haW2tH6HnJHwVyWwderFhdnFvTReHrm64",
  "key13": "2zk7nJwAVGuwSBT5LyBEm8hZ1d6WeDSDEdtq2x7a6Qx7eMQRCkCQU44TPeyZjdEFCJBbRtDWpHUFhcXEoZqhhWzV",
  "key14": "4LXMkfsvJyMPpgTgDt6HfC4ehZW6A1C6P2rqCnpugdKg8WJJssY2zNp4U3gt5Z1LHa5BjgsjTcJkwW1n7RZ1LCgT",
  "key15": "5zmwTv5TnQMnRFarEtK9phSRStDDSLtDtDzGCWh7uQAH6Dxm1Un5bijBFGaZ4Xx5PLUxUdH8iPczwdHUTtAF43T2",
  "key16": "2F2uTapaPRPDHfkVFeqLkcRMD5yJXYTwgw4BnPd1o2JnDsuNtA4MnmcPxiWoB7Ezc75QkJYJCP27LeRNJWqWqpMq",
  "key17": "5uW77GcSqFwirJfxM4QRREYrUZp9PceyGguXwXDbNXEdwKghnHcYrWBUcziYUsNcyZ9SyXy9qJ7TrBaPEdAtfLxx",
  "key18": "4G9nxstikSEzKHQAVvWp24eNfBxdmKsSeRtUP661iZRsrV1bzdKwvLV7WSE2sz5mkEZPAgruqY3tHxAnKD9QYtZs",
  "key19": "45gSW3aCYTzxWQzrdskRxUbuB4PnKc35VPzCtNpeb4hkLMgmTUQePXqtdPcA8qFRKEsPmRBVhK3wAw38WHtACxzj",
  "key20": "23qczsYukB1FxqTsaeNZwGAkExVHBrjR8i4w81mRVwQT2ZnDJT37NXcNBsGowo85dJrsdgW5fSjbYkKKCZaMZHeg",
  "key21": "2tB9UGnLfy2TZcXKg88r3hKsifcV2AwJQVCVnhXXhm8P1VWFYPDbvRf5TfdDWiYhgwbBQK7HfnbjmTW6UfrNk2v4",
  "key22": "2FqXX4nVZRGKPiA6YN1LLDkNqakcdzTCtrnaDb4geUyyErPY6WkmwUXXb8y6Ey1BzZkDXfa1YerD5z2HjGRDqckJ",
  "key23": "4oZ6D5iQWjJrsv2xaTdRruUr1X4NX6HhKmNU5BaJYy5ig2DPiY5LzBbT17kjWNpsD4CegxJCRmWm1FLsPqnkcBgs",
  "key24": "2JVzp82LqiqKCNCZ8yS1EAt8E6nWNuEbC6FKg1Hh4NqZZjsxwm2XN3qbDuhjUxstzHbX9thMhG2ezUsjgrzKZRRs",
  "key25": "4WK5CdRxBRHDQpYK7TfvXzV1fVzi6CZ1irLyWFcPmsJrEYRsmrYYtwa5En6m1mHkRdGL2ir6mmBaTiKtnRUzVfKU",
  "key26": "RqSSwNDZbZidKHQfaSmWuL8M4BR9rkZ3YxB37fbcoFBm6HbZvAdDwGCCeGbxPCEA84zkUkTiP5Lx7Av4EfW427k",
  "key27": "22kj7KeQSYwTM8uuCxawCejMq3BnxKxrA8mKn9K5DTXCLJDuYv7M7p88HctVDnJG91PdLkoRaGUx3vW5GjXV2Kx1",
  "key28": "4kmrgndP9SNYiXwmRECCHYAGAJFyqjTwTyH6rpwjv1ht9qGz1A4u66EmNoQX55vnw1npsAsi9GFj2HLhw18AziXv",
  "key29": "43aJJQK44pG8kt1Y4ZtQxTv4CeRprbAGQvz25FCwdm1enbEPv231joKu8Z24aix11evRd6G6Qnr8ZcHDYHktVUGz",
  "key30": "3Bn7MhAUAkwGrCKohJ46JFARdzmc56zzQ2JsD9BW8SxdcVVG9gqFLSR9crNrVfbtWjEGCF1ooXuo31AN7LdnCmFS",
  "key31": "4VUN2NVnSh7exnKsgRQPFnkiZQyYrGVLQxm6wU4FV3c5sLse5JJyDJMT8PWyTvEcyVPKPrkEg95a4YKVWBesV7eB",
  "key32": "5TzNyv7jVrAmnvW982jaVRspsn4fMhTx37NqvrboFhQNp4HDkVWnFqLxCxh2aGPUHyWcd8ZWq8D42pA8TCZXtMu4",
  "key33": "kgNdgG5N7dwhfu2YbMaNdQenJnEDrimxD6xhxsJtncCzfFq61h2tRjAuz2GwRhPYQHCufvBh8WfrXjArc2tty6R",
  "key34": "F9pZK9eVyXvL6Ck4Dd2kVpnzYD2GkQ5gTd9CdXqSGqXWi9oWBndCcaapMiYYnc4NQuBNrWLbr82zbKPE6QJ9cRQ",
  "key35": "2bqXPyTRLdS3MH746LEYNapPkH7cZxJQW9XrZVBHuwkeJqHKiK1t6V5TqrciyZQ7T17vLF8sMgbVxcJQhAeJvrDC",
  "key36": "62rTjXHApQDmJmX8fe5wxNfdpC2BbsvisXi7ZTbeMSgRCV4QhfLuLxoUUF27UJnUVh5j8ELBYNbuwRFtGHtsiW8j",
  "key37": "4BenA2qRnwDc8Tdpwh6X4VDJE3ErHPJMGhV2FnCvwV2APhP57mywSLggWRtW613ffZ7VcxrDsVB441vZoZwNFRCH",
  "key38": "3CeLp2B3GufSNGo2Sk7H6iLxsEQcnLJjDSUBbvFsC6ZHgxhYG6FgAQ7Sxt7r94Pn5Ncwx7jb7bELUqm7jkcVP1cK"
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
