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
    "4UA344uWSBcp8n8myJSi1DSeEzfK8DTT6T26FLyyB5RCnrYVo8vsQLcrvSDEW6ePo9TR8e5E6pMiXT7QjJSXUfjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZdxTNrJrvTai1dZawdsuouDU6J33ahhHmqs2LpqdXDgEJ4FVXf8695UCZLWmTTKkZXwGiarQTVdXSytfuucPLby",
  "key1": "R25ZXvW7T2XeKsorZaJhQEt4tCsPX7HyHoi9i25T9CsAjoo8b3LxbxadL6r64CxjFxj1HEDcsoVByRRpXzwiPqh",
  "key2": "5J3kFrhboQvLkztzqKnXrh6RqgfpZFP28B4BeNuB6rpuM54P8xP2D54FzTnBQiyy3VZqdmgdwykeGyMAKCTtLbdo",
  "key3": "5ZCWm2aU1MDPiWWpJsBohnxn3wjCzG1eJSzrkMYVfcXV5Kdc9rccqMBAsvioc3BnABtZZJC4UGdgZVaoBv8vGDq3",
  "key4": "54nXGCm1LmUcVYtvF2cUY7QVVb5u7zpDqijcu5hG5HG6pYdexz5gx5GaqgFz3rxbrqHngjFgPe51Hth2v4xCfSRW",
  "key5": "2guh9ugM4JAxPBeVYWsfMifD8H4C9EbV4ZknHoNRTeQRAdPboBc9QPTvi3f4jrfnwGdmdYqzWxoHoSSZsWVYxZxA",
  "key6": "5UpLKGjpAKJs4HLjKguRzWRaiJhV5YujSDcZWyPFi1K4Sazw5iBXanTvFu3VxgXJ8LYCMSKMZWqZ9SUxjZBV8iL9",
  "key7": "558disQ23uw1s8BBcUMYRwPkC9E88EUd6s6KFF4xsdW8rihYshhBbpohgWWpcQ227puYdfCboZe4xz6YiNdWRS7x",
  "key8": "44K43yK6K8pNr9ih2xxMrbuPLF8GiwpKFoktpTVaKDzpcgDNJENdeKqDrK3yQEXrjyikbr1VkV7aJDkoAH7tCm1Y",
  "key9": "3RuJzPAUJinnojERRxMVwCrRWiTcYtt1DKtNzf8QEwbwo3z7FwAy7sBFFF7gigBZbBHBCoUpFb1nqqF9ViHQWsaU",
  "key10": "4kEeXNrxVqgTJC3ZyZA1zq8LCzf4x19tAKebUcspEk3qn8PSRCzXpWuGzQFD4MfKXzpDoGfPGyqJn1UX35dS1MKN",
  "key11": "27MHXJRAdqeYwRVCajWgu7bet286zXG7W8aFmnvKGm7okaXwmyxYFPRYMy6QBr19rV64pFziXATceC1cRW7XRpos",
  "key12": "5HihFqUiVXkg9qyit9dPBtEgWicwXF7p9ZpAgUyJKTE2JUBHAGHKHzirm5knvTEwPcwEGDutffSVbCfcG1QngMZU",
  "key13": "2smQFdxi2t9mYLHfo899kgwpZdaFrfY2L4Ewnu2j4TB8MSEa7WCg3Sa5FmMrMtRYVJ6DB7zaTJMuT2fXTNRurc9w",
  "key14": "xmDPnyTmhaGW3z5p3jMEacXiQLCJeJMBQ5eLmCwFnCWm7ocXzaQv9wjBFDcGHraeeZT9DLP1TGxjhkJowRfYMJg",
  "key15": "5JhFMK7NimHV5EtzVVGqRwTjw3hhEFwAyptaGyY3baW2cYL3KqpWYNyzA9XoouqFnG2VYxSBsYHdEPmaafVcJkcy",
  "key16": "V5eYvnechYogsEqzrPZC76SVFdo4bwWZ5djDo5ztEXYAdianqc7kgJqAf2HqgqzPPs8R54HWiEKchkggBFHKZ2q",
  "key17": "5HZ349EtXeUQbnfDDFnLmwJm8CfLQWVi21T2Dxe2isYjbkVwCaMw1MfQ2YRNh74iWyiAfDF5RxFsdnHjyeT4jni1",
  "key18": "46BV23PnRso349TBBREMcGiagyinciPJQBKSNoTuyt1vNvydwD5D5URGnZLCwAz27LfzK3cNz1tVgbehnEBDaVFk",
  "key19": "5VC7CLJbSwk2ynCTK6sZZBp9GTf9vyxkRWpvLmUGybQfhGDWwxuBUEoyW46aYGqgespCsSzo7FKPbJu4YLK1YxeK",
  "key20": "3jz7Z1WGMcgjEJK6TeE1BNi15fUaHDsk1xpnBPr95QcUiWAtTdyiYqHCGjoDbyTt9FL4iF58m4wCuXfVXiLe48io",
  "key21": "4cx1qEjwM56A5pRfCvHaoVxXDSYVtjYFc5mnRs8Eu53BzA4weiQXhhrK5NJsmcDq3uGL9BpJF28EgjKtmDduu656",
  "key22": "jnrUVkkQBsRNCX1D5HqbAQmd1ssbe8xK4DAZfxW6p9T6JVLM8w59MysgLVZXQnuZBxSoucpHjqPCL8YNPs5paFa",
  "key23": "45BKyojQboqkd7ngjmfkNAG9nADp5KnctsH5MXvEXPpU6r3tZ9KvkDCcyUW3kHq3W56xkmdarruavX5aBGw92rh8",
  "key24": "5UcVj2Qdrxx8kWyDLF2gi2aBiQR5LS932dEd8fx2KkTAaLuwGsmJC5WWKJQM7EbanjKr4gxcsPMy3nKwXUdkWGT3",
  "key25": "gthPVJJ7xYBn35KTJPYn2VA3jfcZKHq9dsTYSRzu7uyHH7JhqU8gnKXk2o2FdfT7orTtR2cUPpZD7qKvyajxHjU",
  "key26": "29X1QdcCdbf2BoAwMNfYNsZwi6mbCtCEXqMsxBFeJB6i8thVoCzZsateRtfgKrGQD9Y4apUYeFTFvbayDVfkgiKo",
  "key27": "3jNg4ATq2cuYSiDQFS14JKoVUicuFrQbd5xxoPdzuFt7eLW9jvBR1DNZ2ft3gMvBUui3GwMHeKGx6pJPXhfWXou5",
  "key28": "2ny3VdPiFad5RaW2L93WrXZTUezbpWkAyQVSFfc6MLsDJMqsVfx12XGk85L63KP2pp8pmnJKCZmdw7278ZMEYQA6",
  "key29": "4Y7Nq3Bde4MDyXZyiA1vsNdERJ7sqrQHtR7U2LQJ2zDznVJZ9TSoEJmNnEYTk41tbjVWE56KJ7G6FsZYjSWzg4ed",
  "key30": "2uPTK68XM78xRHjbFe7nSP9GfgZAKU5NUiHJ8WS9KPqjoj9FuPFDfnnLWKMj1XyiR5iwDPN2E4Fs5VE2FAAYEiED",
  "key31": "GF3wrDERHBXBfRxFuD7By9poshjbbUyGKR3SK4C7WtRF6vKzEECyiwScR3b36XwMzsqttjgYwcAxkByBTCSyyCd",
  "key32": "WkHDpHppP64ZzJHnC9y8Yuu87rjfd71ewdzPnw72THNkyLVQnaTMdRUMFvJL4jfgHXaUkNdzkjageAoJBBTZajM",
  "key33": "3vuHUrUaJpNdP4Q2YJMv6YCsu2Af88VLuYQbVm1ofbHWH8Z4wgcfECVj3kyFy5TKrRjoH1j4b2wEdh5pUUYCdzsU",
  "key34": "3tyRnT4bL5DZc24tUtTxhxbzrfD8Zwxmunj2fQCzMxFfjUQUv8rmZjDK8rpyPwiEGD1KQ3Hje4WZQq7PRMhGDB9U",
  "key35": "2gArhMwNH58rawaGTwAren1ggr9BJwhRvMNTxtizT531yrYoVZ6KvZRAPbN2KmMT2ejFm4hC8YdhVhnnQYmrRYfn",
  "key36": "5o1NUKoTyoygM4Pb4Dqc2JyVtPx4BU6BX32att2biCHDMcGMm5ubgkjjmRgL8htPh3KamSb3eFAB5hw427HpVaSc",
  "key37": "oHTNBZ8mAjYBTrqv7k8TjxMzptrvo6ECbQ7L62nEaFiVjftJFvESFNM6aHgAebXBGyAfi6dKQ1i6chGvupajXjM",
  "key38": "46dUgAZY3EzYuw79MPwfohsNuQ1wkCW23gEWPAyyKeiibmQJGxFMRxm7JWsVP46g7GuTQFb3tsS3GjWFr4hiKg2b",
  "key39": "5sA7RwUyjdVR4fhw4sBwknxn5Sw9tzSHdfVDqakgV2hU9uH36BzsfsUuZPF9D7Pmq6fEHQ3rGVeirtMZiWS5UgV1",
  "key40": "BcnHuzEgEYGLG6ts2eADaKtpXcYVPrtxWBAkz5oXutUA1pMyy1XrDvG93UASD9r17V2KGcPPaxzpYoKK7DM7xne",
  "key41": "4gd8jhgDytu5tHfBS7VbAc6kDT4RUp1yhvJAozvNoGzBKDtpWSDnjiqKBnex9WtDqxS9F9JF15KuBozbn3NGdwi2",
  "key42": "5L5WYN1h2SPWtQBZVAznUnYYVCfQAV2BimfJdVtviLH2mN1gGVCrtuS4yEUHSXJzaM1AnYt2eLowuH8AN93yQgrt",
  "key43": "49EEuwqdkfayeBoJUtYuSPqEjTtP9xEPV9XY8JbHpggvW2hzPsjQFfpp6ZNB6PbArKPk26XHx5uyskaijANrhNsn",
  "key44": "5TcMUyGTEFeQmhvK71riN91uFYjpd7CFTNvJmXDJDq2LHtdKzNPERHY3XgNSNoYaqmUVhuQXXgery9BxZebwjECD"
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
