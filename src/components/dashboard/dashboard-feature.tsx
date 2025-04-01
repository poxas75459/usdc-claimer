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
    "3XPiCtKA9sjKtSJq44gnuujSZKFSpKuSp3GiuWnRxhA7n8XWFuXJXiQbBY9bVkbYoxrn92nUYM9n5QmEvbamC2dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zD2ZHg5FPcNCQNt3t5GYjXDL2guujqeGZrBB4qME2JsmD5TE1qYacGSXhRcwkkj8VbQXUXUnM6vYpaxvYUFpn64",
  "key1": "4iJaZTqkToJSULKDSVrNHWrfj1QHv44NdS3BHXEZHKbarfFGxxUEiCTZ7uGMhtp7CQ8n5yNfm6yxgG8UTqiQEdXK",
  "key2": "gZamAUyuKSFL73Uk7vVDP97451C6fm8MrEQAP3VpS3MbmxgRoY5h5adj9jVqt7Y3VdKnikfbwowg9S9muDbLzZH",
  "key3": "HcS7RqR9bHQZ94XYBrDkmtA89Qe4r5dNi3hEji8DQW6VzAXeSdPovGi5ngQ9w5q6rVwuxuntzFMEZaUN8SjvBNR",
  "key4": "62pMWaMSTA13Ue275PqbrSH9ncp1jrLcJUHSS3jJUoNuY9Rqujn7GSKXVTXBJuawi67udEUvcw4krDCGYJoBGHMB",
  "key5": "3VWYMfYTCgqVniqTdhCkX569WSey4ES1CYG5f1KWiKBADVYnDPptY9sX2hR1u6bPU6vqy2LnH7xkj1y3uG3zSV6Z",
  "key6": "2bYRYakGCATVQNoJtq6sfLDAdDcT3QL7qCPoH1gV5MgTWY2qd6JSEMtBhREuzVLsgccWSn8JLBu8aTu6RXo4GTM4",
  "key7": "2b7rP6ffB6n154wfr67FLqZ8arzxej7eVQcEPsuRApcnzofVt5rCNSQs3sPKXMi493anHAGVmTW3EuKVByHGy5gv",
  "key8": "25q9sbx3UcNf3YFg5G5EdGtEZLwC7PCtjKG992F8y7xWvHaRCvGBHqefcXENGFjEbripLPTtC2XiLeZHnb5oGFCG",
  "key9": "HyoQ256kXbuMCSfQzut7NFUajt3eHcQ6A77pAvpAhrrgT6bNmmfwmZDShfwi3LXjEKazfrRNKDRQ3nWCUeLwPcm",
  "key10": "2rxLaEt7o2KAfsV51rhra9PpedqaWkE5kQYeoXGqxQ7D33FCnt8KNSSyy7HXGsPZeiFArpCvtkQSWpAZowXQrvLK",
  "key11": "3wGhakJhuYqZf7v1GDFDW6EJqBJyiXdKBbbWYovitif9P1Vu6tYJS1jqBZmBa4mBCJJdZVUyhGZVkLPZNCPMY8MW",
  "key12": "5JNhrPvJb8BUApwDoovAzqmguZY4NqjchLVuvbrmEDcRDhq2LRiDr4kxi8h893DaaF49SFTpNGWjK6iJ2vvTZ8jy",
  "key13": "nn7opvGeQMQnZvUEBhZNkMGUxpXEw3Jp4DN4ZYxEwcw8CtaptQmcnVMq9HC8CgmZVrWuMNqCxEopiz2wC9SDfpk",
  "key14": "4XLU9kWriw1ofxK7ie9XqQm4UYF9coWacG9TNuN6sXdHr6VwAKzrhec5UzwJCon95Dv5F6b9CzT6dAbV1xpe83yU",
  "key15": "672jByMD4q76skxoo1wqBhjiB3GrjweQVtbykD2M4iDvn4ztayCiAcmbJyEubcFwJ24JrbXM1qe615MGQ6ZvynY2",
  "key16": "5eevC87GS5ht3pebLMyw2prspY1C4anWQDMNyXQL3JZvy14YFAoRpxFVZAFvRfJuESbibSEn1SxcvRVUUrtgv4oc",
  "key17": "55Efa8F3NzCqFwsrNRDdhLii5RNiZxX4ZbTEfAv1JrpiMrJqAHMy4eXGRj7gHGDncNAh9XhGFH97jvbGGbDkDNCg",
  "key18": "tPK8WRVmpUfKp5FsPkFngJrhyi5xs2qo8y4eLunD6RnUEqWur7R3PWK5vD2BYHq6UgrKk6WiVEVNTJaHaTRzY4y",
  "key19": "SpxJtthc4mKKGp7raBcKAFAepn4vJv4TTgotepF6XHBS2h3fi3NpQwALodwqXJ73CxEQeh7uaErjVEjjmrjoJ2Y",
  "key20": "FatzGVnLPLqMTUd6J5x3Df8MXAgz9kJ8C1q7tj4NvamYG1x3ZFPtbHNd6NcPQrQj3UrEtj5uUceynDNEUfnz8M6",
  "key21": "5tPQNwDx11S4QgzGenBam6Mr64K5sREBpJdVxDKux5i5W7HpFF9SrBdoTq6vF6pqahydhe1ddhkoPZF2b2k6WMHL",
  "key22": "2wPgFecHfZpDTjYoYZ88Nn8dBE4jqRVvU66AYsJfMCMAjwFuj4CMMG5tMMSaiGHEc81VWbAnNSSzUVTS4eZ2aDdc",
  "key23": "29i2bmcMfDi3eLbf8DCSVAE33P5feJbY4XziNDRww1QNRUFdhqUue8rPuf7qRHUEh9kVL8d5qTzWiJT2Ki7YVA1D",
  "key24": "4hrqTrsvjBwAKjazanpMBpvA7FgUMNYpUGeJYM8SNucF23p9wDAEBxpgb5C1JCiiEZJbLy8Tbp8G9TdoDPkduG95",
  "key25": "64epyYHCaE98E3LfoCwLvDrXH8msMJ8SbbGdQpNuCAtJHe1gmySaR6hPePPaVDpjWAVHAi6QtQUzVo95tufn1q7y",
  "key26": "9UifBUDgso3AADBjmGJaQCNUnrrFUq8CKinywN9B2zDWV2JhVSNnWQjwL8Z5cRyp4JmD8eoZ1eyV2v9Qt1v9YCh",
  "key27": "31ysS1b1P8yhLmmFC3evUyrMhQiEjZmWJvsKU3bzUC2A3yk7sfcerK5r9GwwM5pVMv9ueuuLJ7NuRdqGztC4pqoJ",
  "key28": "KHSUda8HSBNkPPyTaHTeF3gB5YzWxRgdSWQY28vQkaDanc5ivR7xrtjfzKD7MzCdBNtNTACMHxL174GWS5vKKi3",
  "key29": "5i6W7scsPZ8yog8X6wCrPfe39JuBkbustoCtFCMSx6CUn9T3eGzyKeVxizf5K5J9NgirdjNhzELCn25ToWXftSXe",
  "key30": "31FwpKXRDBwExCEUTXjgHrbZsDNb4YRq6UhsrGMdmknaV2SDXNL34Kjx986gHdzdsaziKsvwDTCK1uforT1H85ee",
  "key31": "36uhpFtFm44SKNKxcAqKrgaSTxGUVcWtkoHiaCk8UGKZjZvMgTnKBYw8FPfM5sy3dK1WwFCCTi9DRZCAE9T2RY9w",
  "key32": "zcR4bNE6XJrY2HgJFVk8YWRN15XKtfa1pgeGe3FqmxwqHUBxPh6FqdhFtBbdedsvh4SqpxHw3KWaSkWmBhYZhJg",
  "key33": "NmrKerFMastKHVZtVwa1wMDdise68r2WccCsitHqmnMVDKSFGvmBRbP6LzLa6CdfGSWy8hgNLDPwmAkjgyZFrjg",
  "key34": "4wk8fsP4XyFB3s2n6WHmBTqVYqPy8XBMSeeTJZfgLfcP8Hyp8ixxgBPAjrqT6xfjhksyiZCKbC3LsxKdnhDiNi7G",
  "key35": "5PvRQ4o5m5e2WAh4GivUf4yVATdDhRk1ZJozxvUPvqqGNUFeW8aRJh79zcasQK3kPbtiUSQcnA3e9hLEM17nWhPQ",
  "key36": "91cabWHDW81QkkkixCk6FXGvi6L4LdTm2qs31Ur8Bo4RG1fubsbYwaKwb8a3qrTYj6hAwduNfyrsjZWn8Yu31P7",
  "key37": "221ow1eUSg6jqHWLZsG37uT9zsMYKB9ic7EZ9FEJA1nAGokcnsTBaBMgJCcwfpKAicmjTSymT9dUUXLacnnoTUiA",
  "key38": "7q2X1bNivv9nfLeCqqZNTfHjzaBdBKmANZboXjQ5rfV3op4fKgRfeSVtJBcEudwUBZASaqn8A3CmE8r9XRFvrc3",
  "key39": "44VKp8mmbuZC8F4ZUTTQuVv2edtst5yz9QY294s5QxboHgyNzyh8QSGVnQt34cWhUNDEYP7uQr6epZvrtUR4fiar",
  "key40": "wYnexmiuxNaUmk3fNwwipdwjPDDffCzc33Weu6G6kWv8gfQfdkHe8M4WFpbKt4Lm9i2z5mPqfzw5TqrERJpcNLy",
  "key41": "4M1s1z4xc6izeyBBb3M7Mw45erBCd9kZdSwdmCfYVp1eKA3zDsPF6m6gEAxSNiu9rdCxnzgDvv9fE2PyTffCMwuA",
  "key42": "5rkXnaHPbB67byxeG69kRUr2SVzVpYHyxFweyQ2KTCgS9HMFng8rcF9NfvDYFjCuUqLjMBkTC3ChcrYTzHvYU3hf",
  "key43": "ijRQEEkLknniEe5EqwoJUU6gPTQmX2zxobHyrni3pL98WQSik6nW722MDgtQqUhjRaaxsEV3KCr1KGypC8UFzyz",
  "key44": "2FT3AYQurkfriNkiDgNefdtvaNNU2NXGXinkHkcn69A4B8pj99zSWLBrrVxKzhJehtXzfTHLwWmSU2BwLhRNeXnu",
  "key45": "5YgXFanseNPpo9ZCnEz6qPuSLPP7bhGmWW6uhxnhhJCTFxuLMi3z3RPWuHdZMMkz6yQEEJru7PBy6vGEamhHVVur",
  "key46": "21gs7JHJkeJA7YHXL17nPFhk3ys7aKgkwD3PWRH83D2tzBZPfuodt7QPJuRiV5ZH6CR7PqvWJqRynyFpDX2Vr4Jo",
  "key47": "oeZQEyk6nGMmTd1TMFg2E1jEZrZT6tqfVGTj8dHh8Wjx8TXAdxi187zBTZUaqh7FBf3sgG6mRnzERkgZDZ4Bh5o",
  "key48": "5v5ZZcDHLxPE9BY7RLgeCrZt57ukpTTK6x9vx4nyRR9ovFFkv74c9CTm7b7SiTbPxGd9qEDemFmaNboeMiMe6tMt",
  "key49": "3tqMaJJjztw7hVuqgdR6UT3mZqkRZNhSEzLQXxqyUsmAQDGdTB1SiTPqQH7sSm4ngbEu8gYgzKWUVW5wycDx7Ju9"
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
