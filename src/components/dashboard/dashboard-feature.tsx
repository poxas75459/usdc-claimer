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
    "FbtX7qdjr44znQPWxUGBt1wgWurfH7TxWrWL4skUiy3B7vjiHweW7YpkvfETG93PHWhYsjhgT7T7mpe1xsrHZ74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xwhH2WBu2gULsJj8d76vpAvJQRmSY78BDwLEQAqoQpNiNoiwoMcPxW86ek17qsqo4Xa4mNfbaF7fVZx27ccS573",
  "key1": "3ic5VfgbudqpJjhSRP9R2xrQQbD4i2KmqNU5qMeV9mV7f3u5s5UdpnX6tAfq4jPk9K6DHxLSsURc1Pukw5zFdCXF",
  "key2": "4Qr3dLWPqkrnxkYigP3VYsfpi2sA1TA57qjzhjKySQormSJE3fL9KJwf1FD8edjCkDQhULisxfZdC4d1bF6ZSzRM",
  "key3": "2RDESeSv3efyzJ4JpRm4zGh8QPAk3ENWKFHL9gMyV4epLHSBEhugevybyiGWp46SNvLk7XNrtxcwCDwkb2J9bd8E",
  "key4": "4kG6cLFAanCBp9d2fMGDcW5bBH3ucASDQgevMENbLnAN3AmAu2UNDU7h1zmaczjz3oFFyXzsQga6kUTLo2WhA27e",
  "key5": "3Pt6fHCd5ioxAThycANSLbYPa7ZyrM7M5CYWiA8pSZ5drtJorF6kFnQi1RsCBCkUEZruotnVjsYgELuwZxAm2m4D",
  "key6": "5FkJF1YwhjmcQzqhMqVqakgCr3VJC29swGD2HAFUmi9RjjQcj5qajSL5JMvcyMDGDenNZvXoaoZZZN17R6bGZN7M",
  "key7": "Y7XsjTfRjucF6Rd61Tr6f15FUoAzBA7gYHsUvnNbDRRBGCrqc7z8cgaz9TSmk5egQEdRytXHd7sBeMiM9EiQN3W",
  "key8": "qK3EDAVwYYsERLcxrn9hF55EJZzVQBG92yJi1RcTLu2cgG6w8kmVzNfK6fy1pWD6A4ybQcWzD4D3iYi5cXRXuuN",
  "key9": "4Boi2VC2pnKiTyB8oXPvkDBg4NWxVyWHoGSYEVcn6ZcVBGXQCD7huJ2GcDNLdc8y2hu1AA4NTzXUANcBNDVR29LK",
  "key10": "b2CtYSEQLDjbaxCZbC52zphT3AHZud4fQMwUSZWxsyJsTXYCiV7RdSQFaSDNew6P65Vfr7Z8rqZ5d1woBvFC98D",
  "key11": "3zdD2mQctk7tASjtvwsay9FPhYVDq6kbsmjBMT4NzJ3XVwRj1Cq7HZfnVgdN22pZUj4aSz5V2gvy8UjHUqQ5tRk2",
  "key12": "3HbKaUpd7ftxKDM2ukDHVdDSyZctxaJrLWmkdhg4hii5w7thDDNx3EECUWX5pbxJBt77WqJtFNsSWU188XgaZeys",
  "key13": "5gRtrw97ozrB6AcFarwQMHCWz8ZGsVEcBhx5CHTNpv8ZmdoGkvCp5NB9UjxQCbLm4d91TXW5T56Fr68zbiDNUUQy",
  "key14": "54NxbqmLBeDFz9ZkQQZ38mF6R9jStLEtWFgG3CTLsrMniQ4Uu1aWHSQXBkg1dguGhzLjDy7LFjseK5x6CMEiCheE",
  "key15": "5fwAWrwVw93gJ84vXcM5oUbcomivmrnREpRWQJuFfS4zU3C3dNYCc7becxkzCTtvAoPCmxMjriHxgJYQM33QQxJc",
  "key16": "5BFoZAh9A8eJyusZeCppZ1XFDFXwekeBnyjDfnVM43x2neAJVQ7Vf2vgybhzByMEs9sft1Jqis4uDRwiw6nxspVK",
  "key17": "5qi8UsfBwtEqYc3949eez7oXQJqvkAD2fdWxbu8jNRYuX7XW9QMBnWUuPHLgjNewcf5akVoEESzz59E22MYADoJX",
  "key18": "5faw44ug1CxqaGZZYNxU1xTHUxutxfLAuSa5b8SYJ5T61RjenJAFUffRZsx9xTmmuceFPZ8cuyx9QZRZUVcSJQJm",
  "key19": "4VmoWgzpWfnL6icQMz3PgoMwNg4u9tVVvctNarWsssQkejabUCjBLcuxi96A6gyL91B9dVcPoYwBFi2V53n6kfMs",
  "key20": "DwFeAzBozmCK9uMBvb44KqL2k7QeFancYX4SiWs3pdZ5ZMwpta5sCBfHLY18rHkoXq1EhXdeLQzY2dZbT6BUkU9",
  "key21": "3Xdm94bjufaT7DcT8kfgAoNVXDqqrskhLQDgsWhjhyszD4npyhLGXviPcpfKAQEDQ2CyFnYZdvLQQznEPwj9SY3C",
  "key22": "4ditv17kFJ4hWqwiWAb5efiU8nchkj1N6TzxMBUjp4pXsS55XkLvPTCDJT6oVtBqKVgJArKnd9iQpTqkBH4Taui7",
  "key23": "46et45zq1y96bVF3q5C13RHpBjmhp4K94i4MPdtDTWXs56TuCDtmpVjjqx3sHyttKMzBiWjqJFxZj4o9RwTW1j1X",
  "key24": "2nALn3NWo7Z3Jr2AsSm52LyZ3YbNDcFrNV3XuM5MrYi3so8MeHsAGpy4XBPmm87HDFkUHpm7Ps619HmJ4pT2UMu",
  "key25": "4XpdtBSkL7v1x8KqJLNXZZESJ2PQH3P4DpratJmB4Me4W3Xj5AUMQop3V6SvLmTazzGbQTaca8mqLSnqGyMpgv1Q",
  "key26": "5QfEJhiShmUVCrxvu35HWkSneQidt5CqpvxksUQRyadGoTRm8pEHs9YvyaBzpB58jqU37Yma1mXmXu6AqCznKKq8",
  "key27": "2T7cBXicguCad2xcayd86FQWhyfsPKLKGp3KJnuKBDgsmn6z5zbCosnfDKoetiS7sv9JqDA7LthUm5LkLHZCu7A6",
  "key28": "2MGNApEoEK1v9j7F6oPiS2cMSrbNfxLbQsVRdNiuqq373h7aHFWcaUS6pWLPvbGyzJGET7J1HzjK9T511BKWXizo",
  "key29": "3aEaaF4w8bGtsKwzAqSAjyoCsJfNB5m8V2jhFGDKrnmAQvnG5QQJZZqBjR2uwwdWhTDjXqqwqT1pnx8bKJebr8vu",
  "key30": "3g6WbyZ9AqYgYeTjHpfL8BmBLYZwaHhg9Y3u3VJx9mC38ZdkkGXBzg9sVkDXBT7Pr91CnB316oauujtsdJ9FMrgj",
  "key31": "2uQcjSBPopxz1ofRWk1ACnEEsaqqdiAxe1PM9hhXrh2fo81bfj4t1cXZ4RduXc4UnanFeCXLdHQXyiWNbAW3bpAH",
  "key32": "3vgZBq1q8m6m1sBcM35BTiHHAfmdaBUx7sezGc2uQBasH3Ly3vQCj9Pf62NrPBhb3waeV9n55VBTMaiuFSBfaF3a",
  "key33": "4xvSYc2ZV1QzCcrjy7D82Yw99nkTn1nJNRPzagJBEDPjSeCQQHQdM7FYp771VbqZo26LQ8xtBwkwNnAw1sxGhryN",
  "key34": "2gTmj9Dw31vr4VLLXk6asrWR4CFJeeCKngR3TYzwsPf2nyY3W5xd55KdcrfMACKEipqJiQwDvdY5EiV6WhanifhD",
  "key35": "2Suqv8QNKgxmkMzBoTGVpikVBCbkuQrYQvQ54gz4Dp651SuW5FcK5KqRMYXpZHFK8yL43kqcYtjUnwTdr8JTjLJa",
  "key36": "2aVRLY5c5i416GAQtwdJxkYxad5foWQyAEwwPohPMWFRM4HJxP7njaXknBxhDE5Z2n8RxTn3VhCPU8vojv7qRaD1",
  "key37": "2kYbeEDpJMcyEPGpamoX9Uyot347QYhX6o92uQVh4eT7AQbqqoZ2oJQSQBpn6mZ8V1xU9cMReMj9fUxvaK1FWqmS",
  "key38": "5vXR1R9noZTNy2CFmTUf2Vv44qH5ZNZAgq6hPNEAM4yEZWR1cDCqPzvnjtfkAsEtncWEGr51hFMNcXUVKjZxLrco",
  "key39": "3nUQK8jBnrcn9EnULiecTEJCXxhkLjwKMv1DY1z3GWWZFAXmUmaAMNXwtmvr8uCud9YnHGbpzAnSj514UN6ZtNH6",
  "key40": "28dTpBLHs16ticEKdeifpJCiQyB4NkKVUEhHSNxmHxW4Ea5v7QnyCKJvnAvfE53dSU9U7f2RzBYZgXPTgNVFxHua",
  "key41": "5qPUJHdzvT76SESRM88xGshsxVErE3WQAN6szok6StqAxcfq8Kt4PK6ZiHJZv3ao47gydwBns9N2L26Qk2a1RjCv",
  "key42": "2x5VpN7DZ27Hs2j6xcUtPP93CYRB2ix5v4m4jFo5vkLnkmhDEXJiFajmz4e282ocG9H9bf67hpv3bhFVYC5iZn3W",
  "key43": "n6DkYmBYE2UPbKuCDDmwWC8xmgarBGiFBXYtkT8s9fnbHaw2CL9oDk1GxV3PbvFRu2bjnpaJTNQnzfgSmyvAY67",
  "key44": "ftCCB7FYqsJ3Ew37Mc7bJhuxGvQ9jtAJDvGmen6GvYJZUtWsdYx61sX2cXsFgYJvwGVTKuoDfzRMne9DLAGTCJn",
  "key45": "5L3bvvCHwKxxrCiEM4gmAnaFwYLtauTkwvi723AGMovvGckDJ4ZszJcsifRNW2ueN7Xi6RZcy2cFQGaXEXzNBxUb"
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
