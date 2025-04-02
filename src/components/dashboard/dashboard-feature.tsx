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
    "5W7ELUx9dYKLseJBg99zp8zndG3MxpNHtqeVNTypbsis7ctq5mfW3dYEnfos5TNHJ6hnEkWG3EPgdFpEAmyZASL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59bGqMkz8qaJ4tA4GBrwm7j5MQzSqa8jXxfsCrwBPGut3vheYidMFsWT9tsrhyb1Xb2oPf2zCr9Fre1GuUiHj97V",
  "key1": "LTdFhj51Dg19ePByNRUg9FjdBdLrw6v8RAyPw79HjdP8yHE9C21jQoKJ727kuj7Q2jMnW2YpEKAhz9g1uvZTHJP",
  "key2": "36rv34i2PcK5umGFva1ekFnpyUC22gcatQF2A1HTizJW42UW5D7HjQGX4PgcBgH7TcetfCTeRBGEu4k8TudCAa9c",
  "key3": "4DCf39Q22JodrXhzMFF7nqLwW4VBqT85whcbFx3SyBXtiMeRBc57TxzHJkTmFcsJgYThMmwiryNYtQPDMPPedKRn",
  "key4": "2W8VcNhFrqMrAKTpQgn9ZAbybLUFuJRtfU4yLxYKbrk4fWJneYMP35mFPGzAyE7Wt4QniCsDweL6oDr4w1cynNxw",
  "key5": "4MFfgTgrDWQCeB8sG5TvwNnhdpdFPH1r7H7RN1TJFQhSHcZ9U19Ky8QqhNKwLK6RGD7dKJyfzxjZBtCJ1CBxibbG",
  "key6": "cUjHZL2PPZGe4HFJuJsCc28rwBhxg3XqCj4WvNuTZr7NNs4LRzWg7vJ7UgfeKLdVPQMS65yVMjxQtKigxCACeq1",
  "key7": "TWNd5qt4rsf5zqKtqyKp7n2i9mhq3SccAqsDWEQ6r62k8hHPtpScMx1WQbrg6g6M7LaBRLMWj2HzGnUx51QDdJC",
  "key8": "5f3yXuKpYHAgFT5s3RcGHDu68TuyA7aEFyfLWDrTRJXoLLZemwaJoNRvgLCMviB2UDD2KL9qYKwkLRAWR8MKmvai",
  "key9": "2fSsnnC7MSvaCBBLYN5BpyMkK8T64XwCp7brix9AN9Zg8zuLwK1Nv8b66GtkmKbRaa8CYr3Pr76Y6KFFn3yDCjs3",
  "key10": "2x4SHDFVxoi5mrvAMgpfBPEZo4E4p6uEeu21dEGvcNv16cKQB7VofrxrHjgtqFmJByq4PtkxQmjHk65hhn73i4qM",
  "key11": "GzNHPE4ya61Tm4Qo4vS4wJWU5Po3yUZ6mePSS6Gpf3iHH8Se5qFZjRpxLiGWqVJgH2W32oJSVQsUvhBNFgxvCEz",
  "key12": "3S9uFKTapsak4qYf8Cvp5xyZfR55nacD6zEnaXLKnw5nKVSB2SY2HNhZSf2A3YMQ64VcuYNQjSbdRBveYHhSikzu",
  "key13": "3q3AjFNxfm9AizkK2binLWSpsvU3g24b76HAzXFwR6ojrsqC1SevBCzoaMbChSLSKMjE6FVGk6KcBbmhnwqSzTEG",
  "key14": "5ZHZKKDthd5ypHVRtNP2zTQFyaNuJrZrqBtETHThTesWAkKY2Lyjo8dUcKW7p7ABxf7XE5bFMoraVtbFsvje8mDs",
  "key15": "2Fq23tP7VTXZghtur52V5fJKJU9aRAVKU8fCUzn12p5e6eoMcBZ4CJ7hE7mMigAQCksk2jqAdz5YaHGcTjRyGJyQ",
  "key16": "ydYqDv6yV4YEzSHNsbCQfuc5y4rMfGF6YMUkWb9ni4fahkk2Ds4HRAPq5SUw83d4PZMjzBVoKXGQs3pWZ6owK4e",
  "key17": "RB2ECHNTexGE3vQTp2XN4Z3XzXnVESornRMNPBnp49Sg4f6mJP4Cre9JZmR6d9fwgBdt1wKPwDLNSYxYurFGKwQ",
  "key18": "3VFuLkQ7pmbpfCDqy4oPmBjmsGYDPYJpa2oKgmccfRbc2XJzr1rCsLmDkqGoActebkbpv3pLe3ZihLc1k81CL9d",
  "key19": "2wDkgf1A9bUaJ8LcBjut2X7A3J59Q4VvobDFGNkHZCzv5SeeVsSS6xZNU3QJ5SpUBxR4pgYhjqFXe4ea8BoLLhuo",
  "key20": "5V31AWLW4wzU76XfMmyQCrcsEStW1mrF7XvHn6UPfV7UCqvXa1UmiTaNkGWsG1vRE193wCfkR47K3g4aTPd7iTfz",
  "key21": "53ZthXF8DAEvjunjN8yqrqUFDAnQY1PuHnRRLbGTSzBa98mJvVHJUip7QpH1H3bnq3RooBhqm6E3xv7nZqKewpv5",
  "key22": "4vZzs3pAFoXPrG3UQTivA62hCWwXwjRBPpxR5AaYstbmxPJeKCTpnEQSwvsKoa1aiY67zrvPyMrfz2poPKDcG8L8",
  "key23": "22D8oLSmkpWZpAvnoB8a2pBTNuQuMN2F81Duv3JWixZqZveaH1fFB3Jn3nghD65AW6JWkrntnQmfYyxLHtKQftfo",
  "key24": "551ViV73vKwTV6nZy5SC5TVrAJpJia4x9NMLhfGrCmg5B13hUvhiR67ofYPDRmMJzbSkMBCprVjzAcH35JKAf4mG",
  "key25": "22wJwNT5YohEidkQP8En7aT1xeZxgFTJ4YJhJ8XPXzgzQem7aUe4DeqEA5nrJTcfqi5tmpBF3Eg1DQSpj89YFW52",
  "key26": "4ZHWxfVYE66GeAhkLYcrmbitBDBPtQXdgKDfcarg7FLWb1bXzobLSEprZkuvrhz7sXQewVNkNLkJvNQirF8aGc7j",
  "key27": "2L8kE1BsL7yVoWTQVuykVU8G3wwZJXxT8d7t9hCNBFmFywWbsuRTgm3sGfB7S9x7qDVuztDTXsbmByMKafzLgHVS",
  "key28": "3Gqpd3N83qNqmDR9SLxUAGS57Ug1CFK3WtWP3RqzVDqxo5mMLECQrtbBPHjtqPhqYw1cN7QGecuyWHyEiRV376KY",
  "key29": "2syCpytdkfuRRutWE9jPMEhdXKuxvuFSdsgQgRMjFnMTo4Uz6QzgurHtGHea37oAni9G2395XGSZLje6ssR4vQQ6",
  "key30": "66ft5A8vfY6UeKrpbVALGoX9FYkCi3zQg12sAxxT7wxLspRbyZ1oVV5vWuUdHEUqo6ueLdYyLYkiDYZXtenDpd4e",
  "key31": "74eKQKek14m3xcKHqyZen2C9PEpSdwiRFkP4undXVfk7hnaJLptxSvskHeLAF8RGg2vDhed9zGvcgkj7g3Epy9b",
  "key32": "4zqzDrw9kByjBykHtaDXQfLRVgYVSqnk35ik56EiWR7hWKuu2zDeh29DVFqeLcZLzXrBiT8PVzVHzNjEPkoxTF85",
  "key33": "zmYZuVRPcTetYyWQunrmmTY3XCPZQHWUZe1uRH6gHesZDYLPxFZGCBEU1odq6KjwGpDVEJgD6WztxPHVq1tFJbR",
  "key34": "4EGJNXWjcu3ehTfooUE2qp5G7tvUxNyLt23wJS1Sh4e4Pr4j9U7CkF2gSMhqwJ33mD7gPwne6g6dVzTVFqZJnB1q",
  "key35": "356KeRqLM16KQh9K3Nbcxkzwoo7HLrCgpRBSnuFa3aVrtFVcgsCD1omNWQhDbVsyJvVkxBaevEM2EePGkU95ZcWm",
  "key36": "4Y6ayRj6xyogZtiaNzVzmZaBC4qgNxSM7yzfy2RB6LowzPPDq6xbSHnVqWqNPgjC8CbSsYvUJhXQUrZTg83UcQDD",
  "key37": "61pjASJYWTFKJfTw1FHmVsgcN7gitHXvi7zQtvHeH9L7TBfE62z2YHdUjVoeosDmbXMb7HVYV7jHAG9a6Gdow8JE",
  "key38": "3bM94r1hsm8SKCh3wGkC9LKkbXtGyjncreEZgt8ruL8L6AzniJvim6QdbDgygCRFQCrTMRNMJ4hgvWJTf9nFpDda",
  "key39": "5ZSf9cMrMnEXKKv67afCGvMkaiHmbz2fY4tf3AM5Wk5r5vQwvQcwB5VyQor3gQ8mHQ71pr2waUvbbMuNimFKmddB",
  "key40": "2kxiotXkDvukE88Bo92nFpo92JaCVDJ5xSLANfdmBycoXU93moQqR7QSLkA3sVgHKAQM8bmMUVwxzXS7PL1JkTCm",
  "key41": "5XaaFCwVhmt7jFbFQ4W9FPrxz5JrZWArT2nCGjKtbDMLuqieXQM4ZDgdt7Sfm1UnvUuzSEASEFYLY8CRQVige6KX",
  "key42": "5VFTgvC7q6tSaG2NKMRc3Q5N5DeutZpDK3sMgjViTWAQgZBgmMa4UVM2BEbiS2b1W8pUfewWufGVt3io7BXMQTt5",
  "key43": "5xpw3jq4orgedw3BYkY1uEwJMjMETAa9mgh47de4MvDpHiDi9j2VvbB2nNvFFXAwvz1hgaPZuzm9gmL3j3a34h5",
  "key44": "21Pd5dfbK7sVHTGdjcniNyE2Cf9dC4UWjVHBo9Y89MJc7csZZEgnTST2GT5NxFCmS4baZZmehrWptCuVRSBQpPt2",
  "key45": "2j6JTE8WgEa3uWPARi7xMLXYozjm25HuizFxYLCaYE6ZWCfcHpD5sXH9MrLubBuV565BiLFSzzq42oHUnTtwkYC9",
  "key46": "UScWoX5xKGRj6XEENpYsQYh8b1EeY8DhPHJRr4cxunhLcWMFi58JeN5doAV1w6tS4QULyBe4qjWr4BpENwrB44F",
  "key47": "4tSA3acw63Gqpnsp6kkQEv6t33RRuoSUCxs28MvZXHAkyEUauh7DjLKqDQGGBFmyXiG9wH8aGEVzgxM1qCvpmoEk",
  "key48": "43yXaWbYVVDCafRaPSFKZQTxS3MgTJD9TU6kNuTAkT56AvK3ezCt5AeKt6JeJM6akViHQGTnP8k2wm9YhZ8Yfx8T"
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
