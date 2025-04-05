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
    "3d9fLqHQvQiQ26FJoTYdpJHL7TBmR5ddsupLS3hkm9HAAyguuqF8LNn4nz4Wb9efALVTPy8ZCTKCXPCceiEMsUvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xDHidobSDfDrVjjoZCzersRibFAqd9715EVu4CCFUTguhnmjddqVfz4tgRVRbuuPZtUyCq1j6ZXeP3JtBfrbjVJ",
  "key1": "4CUnKZLDVct5msYi2rfC7anScTYwbKh21HYbGz8YKdac5td2uz6CWUwbfia9AtYtK9jtpcVrhwFzZN2iUzXQEyKc",
  "key2": "29vLBvAdqXsX4nVVfWk8iNMDh9AH4iSzjGK1i2A1SSjuyPTHTdzGuXSk3f2AdiTvN3inrx6BECuRbsKVgns21gZB",
  "key3": "3Um4Dg48aaFthxVETX1R5mECHkvqYZD5hewxtQj8qNTAac81oFsGQZ6tjbEnRvgB4BUR1aynB3dugGWZH5LhxUFs",
  "key4": "4vjjGNeD8Njfq8UZTJKfrVRr3DkNWhWEcULwqRtEerYKxao7bTXZsrBEHLwDieneeay8gnUbe3PPmqv9N47Bndp7",
  "key5": "2icgBVHqnubw9VvwJZdwT6EeQYm5PjwX4cSxQhRp6SSa7FkkUtrqmBecYwPT6TitydUnCjCtjQceMA8pwfQyTTtB",
  "key6": "9ZzfTzRjKVyUBjFkcFzpNqUni3kNoSZ9EokdVCSa1Vh2GYCdktEsgMkchtkegF57qCmDbH47x9Z3qG6cjPexB4P",
  "key7": "4732iRpiS83S7ES2j6wwpcmLfRRWMD7kzq8GCi8MTfzR2BDX4r37c58wFfQE8XoYumBfZV6jyboH4sQqSSj3AZbX",
  "key8": "3YD5iMAaNDWCywSWRJ8puDQew1GGBfTxCEpy7tynbu1wbuae4JsRvc3rCTpJayWvHvga2iEctVFzGjVvbr8bsoy2",
  "key9": "455iSysmpkt76AHU48F7o8hMsZn5sbF3o1J7CxE2329WUVtJPZGhMHaXM89LDYGeu785VR2Df4KuaeCsGWvCN9Xi",
  "key10": "2WcE8DB62hH1g2TNMzLAuc5JvkoL1LapgfcpvPCkCaPeqFe5f3wuoD88oRRJnfbRZJqaeyQevBqasnopvV4yVeCw",
  "key11": "2xfMsNXAn8EWucjftns9sNoYBCPaap4ALV3u79jFL84SLegcPW9aLrmG8umgHfrFY7jz4MJLTtNTFaxuwLeRrMXN",
  "key12": "5k3vS1QaNmjcn4mw7MSU3mEeJNbQ8HbWvNixZjZfPQWPti8jUMmw4i4R8ro2EJhU33S5zpA9TgcQvJMqJ59WQMke",
  "key13": "2VyZNBRzWuzNN63spycaGg3VgBcMt2YmhErZxvp6EDhEj6dpP9dXsaKLoL6aJrPpZf8NS9n6M4kbQmw1AL6YSAGe",
  "key14": "4QUyrzWrc3fSyax18JTJS1HVWcnzjgHvNHeD4tFv9KAaHdQZdSp5y1eAn9867CdpjzxH611d5o2uiURy36nHqW1u",
  "key15": "3bDPkKUWVPBBXk3q7N2aop8jnZxSEHYqXD54aCJFDyse7GkByyTcmYsbyTG2z47cKjowSvzC8TLz8xURikXfTwSz",
  "key16": "4m3jGtgo33wqS8X1svroKuaVvvvxav9tLUEhAaNeemzs2dPwAnJx3Seht4NfWDTFYc8hkacu8HnWbmgMoB6jSKUg",
  "key17": "3AgsdWet1zMDeEcNjvbsQrwqAmfK99w1smmR9zLuSk4KG71G5Yvx3x7MmvUUxLspRcLJZrd2rehGiazWNqAUVLsH",
  "key18": "4ACU57Fpd6BVanL37GuVjSACM8pZaRPAQ3B1v7GZrh8wydS2gEPhG5ZwVXQpWGPdE95Ywo9XpFgT5GtvFmH5KRoD",
  "key19": "2WR95vUufprEJjEmAWcHqobb7gJB5mTuFxs6GkPtDiuZGfp2uJVimnXV7y5DwYPK4PZLw38hN7JQ2GrwvKuEXeZC",
  "key20": "3rN5CYS7a6ZPFKXmDHCoAJsUhiiPW6z13y1pTPq6Tn6s9xzHa51zDjGetGBQL3UahoKsVKTGTKTEF4E8JXPqgWKD",
  "key21": "6Ri3okvN51qyQvP3evarPu7YAbp65dfPkNhCN8hmagd3GScte2GPnbvwpK5QhtzD8DA78BrydZsPPkksfNR7tjn",
  "key22": "Q8wEJeDDjmFLwioYEU5CrbLYawj9spXGUW8JwTShXhCXPk1MAfpJpwMMa7F5RhGL5uaFYp3bM4PG12DDk7Jhfjv",
  "key23": "3oPwqhYXDGPnYd381A72EYRArfZZ2F1Q3STXQL9nxAMeVwKBV56DfusYbNJdFRrJ7V5kNRjBVTfkTFaJH7Zw6sz4",
  "key24": "fK3znqpmmg93Vkcn1jPiTAeuPkQ3PQKHujTfazRKC8zhbjfVgAuZPPxfssAwdxTMwh4NmZs9zuqFZQxAtsTGWFt",
  "key25": "4WeFr5uWqLSUDMupHzyqnjXjZCFThgLfrbsvjQr541syCYvbTancXwup8m8cFuRQovZWDEuDR613zAAQnE2aBaro",
  "key26": "5BqjFRabT5Q9QjvcAdf4rRh8ss5mdBUeZx1Psa7WRk32GsazQXvzbBmnCxULwNaCfiyqKBvqwH6beDNciod8MKi6",
  "key27": "5xxrebxWvGEB9VXuQN3Qzri7ZGheLi8Fb47SGbsrg449kNh2gB3FSy6m6Grh9rrNoG2ExsGbDYPJ5xXgtS8gTwFj",
  "key28": "4YSrWn8ewayMJEQhFUrVeM8yiQMrfnobKcwYpnHaef2wKMht11fouR2RnB3UWsxeLsnwsan6auH44RmACewW8Xom",
  "key29": "4tnZmDEDQV6vi3FZGNHFcipqqbtnVBwJZg4LuDp4KabitYzwVeBL75QJrdArvCjFCJmEyap84e58SxP3AX9DTsrx",
  "key30": "3Y4XbupLsvzpzFyjMovDRjCMuxVEcDjvuVHSLH3L8ZfrcUxHduRSq2o62yphL3PCetMkQENNHoXjFdVKiVbnuXBA",
  "key31": "5rmuJk73GSvLHx7Bq6cq5JzxYyjJf9KrkEJtyhCQqiQbPr4FVT2gHotYggPWb92mQwvUCvDE9RYrfECCpikHZNeo",
  "key32": "TaYhXgxCRjS79gDUQS4V46UNLKNmsQUpAU1ZrWGpp2UAbnZUQzqoxExxQCxk5Xn6stWQHtsVkvi6rrEhzASxLck",
  "key33": "4ehytSC65s5MPDwPu7WmRggUGUB7PYmYw4ttEsweWSLgbLYpWj8oWGFxJHonnKTS5VsNxw57o9e975q4EFaJx8JU",
  "key34": "MSu1xQ6S4GuSpAB5CeVNt7JpiaPytpmacXD3BQPA97Vxowi1ZZrbpusUvrTBVusbiJq6cTPKy6X5hkuqucdiraT",
  "key35": "4yXNs7ywFeafs2aQN9gvecdh61e9HGMGi1EqKKiqu36vgVsRdwm12HUSo6ERBRzwZwmhXHQnvnrGbqxNyt4BfPsL",
  "key36": "3xmw7Lji8NemHmRoDfeadMrwAjpkADQC2yAGAtV8GaqgHMGcffPzghUVKf9HPNtJSSYHMm6QPjp4Ti5AH5z1JiBW",
  "key37": "5CHEqtsNiJu9DwQnN8VCKShffQ3UQ8kCJYhbniPq1gM5ipUGH8wgcPvA6YQsPpjvmF6TxkxPiyvj87qQ9xJ5cks5",
  "key38": "yokJGg5YqFvELgvC1VtF7CEiYqNgJBPATnf9bJ7AfH6nx1u87CAwfqzixPfJt25636XyvNqwpEoymbLiFkobHMT"
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
