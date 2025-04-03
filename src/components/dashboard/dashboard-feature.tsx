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
    "61qs3MeDCBinvexN1QQZzfd4yAqi5841hovJAKeWtKA4qgM2evQo959h3A8uCFs8RHRsT23zH6TKVUqtxJKcvdVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDuTvGtCfRWcNKbUUCdKNyCHJ4UWLKYB9PHdNuQETzXTjsG2tbUgTgQrzfyih5gyVWWjsGjg4xF3p65yz6apgTb",
  "key1": "2FNiSwiPprmU22pU4eV1wugZzu44Fz8RGQuf9h5BpydtJcXi8dYpzPUpHVEMLujHybpDT9gQcHQgB86HkeUY3uGT",
  "key2": "BjAVj9iDPW4M5h7rFW4H8FZtSRnjFBATvKAUaQuQQi1XJtBLq1a5j4R6q4NMRinb5wtT2A7xGe47hB5G2KfySkL",
  "key3": "2LVs4QUEBv5fxkMocvtU4gRqEpWskPJ84h9yrPBozRb1mwHbYNK2xdS9b57GTMCuLCVGdh6i2REyZWwHRwFNS5YA",
  "key4": "4btnvpus9CtzrR5nGB2ZnPvnsyzjsHNYM1ffq5U3MDvtk9yCLchogCjvQEiZKspp2QLBNmr9TdMyezZSHwKEQRaU",
  "key5": "3pJatGq7APmPn8HZRGeVd6BzyBExKcT1PcB5oEfHXaWQEScJvDTNqadidMsZr3U5MDWA1MSmHu2BGGcyVM3rQyLT",
  "key6": "2NsUdwD2wiXzZeYEargLc6nzLBrmxR3mCt4BDXK5StNjCsn1XVkrZSKQVNeNNGHh539BgdZgU3qm8qtmUD2xXKDN",
  "key7": "28iisvDTHm7vctWiz5zkhugVbF2njeFQ4Neagz4PNTDf1YAnHYfUJHeeaQwqw7Sss4cvkeHqHPNtiYQLvxtG6Xbs",
  "key8": "3EnXanPut9aoRcjNv8ivQdHnB1yqxgiaXkZYE41dAWDvcmPuSgGvhqd1EeHrdr1jpqqfkmTbQqPjyjsaP992cTau",
  "key9": "275edXje6tP4aFWuje3is92RWxJbDgYNt4GXqWzMQcfbcxQSvePbQiY89oe94Hw41eS6PaB5tTThf2vPCAjyiXZH",
  "key10": "Cfnar71vFNrE23sfEG7nVZuCkMMvkK5PN4D83LzCCiH2ZoyrRas8o7ovRvB8NLkchivYuySGxnbzKqZQxdKjiyS",
  "key11": "iNhTXhsVrptUzK68PVwz6BAXyK1boxvUQe6LQ9yhG6R9M2ofKxTgzWyuEd6Nk1CEADJQdGe8wTMMBHsWr18YNo8",
  "key12": "4Tg5mL1EszKtyfYznp2d2HHxaGwnuvDwnRKGCC1rvQZyUf3LcQwUdg3nHE3PdCCSGEr4KVaffz9xQcj9uJBxFX4W",
  "key13": "5LMuGgqQKramsz2FRq29ERRKEn1h4B9ZCNhEKU6aapAY9H9GsDpKkUxqgnmKuSrvfpr1dw7FNsCfQxiYG4WPZyjH",
  "key14": "2DmByWPAexZGHQc3SqzXXxUWtD9q3vziJfosnNt8hkiMkfdD8xCgqEYj6ojfArtVnVeciMP9xY1RgsfPvPLJhQZQ",
  "key15": "3yFpAdnZBHTMYtn6K7MgAo5YpwCt2sQPjGe2t7XNuvcKh75BkgUASVVDPcigYgE9VUjC3Hjm7DD9noBMeEwdNdNX",
  "key16": "2XWMMECEGZEDGnexbLS8josRJeS1XkZozQcQiqbExqmpYeEko8CQKDkUMqz8EGrNdoN3jV1dPsoZxXBVfcvcFfrX",
  "key17": "31Uyb1mZhMdGGpLgCTTsQcPcngP9PdkgoiAM8KqzoZimPAPptwV998kdodPtpShSqrYBkei3Qa588UZUHgpTbCuy",
  "key18": "5jCNoH8ucGJ1D7ZosBbHd34aL9dkoPRAGK15i3kN4ns25HSAdM2ZL9HpXezjSyscywco9GPCXFtmS74EU3dqkF6R",
  "key19": "4VAuDgNLdVNxeNZPk8vQkrMSgk3L6vNmB4im1khiwnEhVaZFfH1kRakgWxg9K6K4VMRFS2DHq524aHRctxb1B9HZ",
  "key20": "5v6Xi7QybH7UVdUYWfPumwi9UF6d1MJPFwWkwDwSuXdYCpAopKQaE3bLWPAYK2dmRdWgkyaeHkvaWskSxP2KesCy",
  "key21": "66Xv9EMGft1r9HHYLJSmjPrpkRyZi8rdVqCwSmU97TJHQYyLeVNnkz5Y5wVKzJ9kdY9cmapjv2QFShyJwY3igwNc",
  "key22": "4PxEHLGhHHnWkWtBcuk6kvFwrP4dLrjVSCMLCKr2SLCuESpb4EheS7ibZa41GZanS7ENsC3W8w92TWLYg8nHXBzw",
  "key23": "52QJffH2MLwAfcqjCW5CAQGgxHEAo2ZntXUUkBim8kLuMmeBjULS6242jLgm2tRvHcuTNqXECmzsL2LedqdZedo7",
  "key24": "5VtWTPnmSti7vPe8DWwM5k9bb4CKuT9KaeP3aeKkNmPNzRx1PXde2ahE4Z9pGUySkN1Nq2mMR4h65eDmUztseh9b",
  "key25": "oQT1wF1KjCgBx9mLernBCZUYtgu85GNsvg2ET3RHwGtpTsZ9AM3gNYGBHUZHhGCggydyWGd1CHfyFE7PxYNteXf",
  "key26": "5BVC4aT6J9M3FYugWXx1LE4rCZxLgycR79HLP5pqba2jjvykKFhVBuRHnBc1JLyjeDTNti8cBGfg2bpiU3xD14fH",
  "key27": "drngpYc956BZ2FpzoQSoG1PsG6CtrSGjrXWRf9AQ5cMX72Lrjsb37WmQ5BeeJ76h3j3rbHXGyQrM67zGKSDrZnb",
  "key28": "5gAWtMo6ZsaJ6H7NDhQVCCBvmM8UimahdQHQrfyG35TauhWNxRbgXVgLp8EQe5Cb33r7kNyLwDRBMN1GNZwNTTEz",
  "key29": "5Z6JSsqSjt2dhMR3ur7pK6Hmpwv7skKb8jv96bCJmTcJAh6jKTLKUd15Zqiza2yiemo1DGqQihEntWAdE2eDig8H",
  "key30": "4km1UsV4RsEAyGjiTsRTcqCxMKjzk8os8TeUCQiDiSXYAF5ezH7ZcN4vvQbZdcARFrjN8z8iGsLz4eri34wMfge6",
  "key31": "3PiqXnH1oE9upQa2nLxWZ3AKEz3TsC5y3umyLXF8JAPkdcX9N2MKRfriCzZGjo6ux9h4XddVF44e291BF7j9kgAt",
  "key32": "5N4AHvMcBcEKw91XQVz7frgAfFFR4gmcoRwndhc6Ui1CWbZmysfwVXUnPJRbxP92uqZNngXbm7iM2qUDE8pMvBBY",
  "key33": "tsCMX2X63WD9UJ3BjwRZ8vv3WVkzX4mhRm6tVMhJAU96PATiQDWWdu2GmG9NQik7sx8k2BhuAyLqDTgRCdSyyh2",
  "key34": "62b5B2kdNGT5LNEW2skqvhXjmvqPhusDkJUuDuNMpazpLWwRVxyGcsZvAgo4WToeA1FPaFowpoLXtDkG9htAVjP",
  "key35": "BoXYnZU79RN6qXUs1aUSgM9Vxq5Y2KV6UD7sG9NwA1FeJpbhLkxSMSfiiGbDRUNExEuz833D1We2XPi9NbJetyR",
  "key36": "2SzL6DtyPZdx7fjZXb3eLMDCTk5RhxnDxv243ut6xAtrE3mPNjx8r5yAMxKzSpUr7zyYKUxeM521AAywVyuAdAMe",
  "key37": "4qETa3BaFAGe3BTjd86EPN11Y3gBw8iL2vHUyM2FJn6daKZvrfaKdNCb9M4KRE1hfxvqGDPjNpBN8ifiXU5gT4Qv",
  "key38": "owEVEwEf7q9DUX34nZZ8ym9zVYvLa9sbTw3Zv3cz5gdVjQ9cxi1VpCw6zkigvQE8NujM8QvsRpSPqzrHV3cqzLv",
  "key39": "54Fys1LVJ2oxPaXcaH6yD4uyjrRXeFhNZW9CsAf5xf8AqXWU12aXZjnJVPReC1jGZWvwUqGUXHWow33Cua4ipnsN",
  "key40": "5bnpVwDTnVdEQFCvhcRwSaXDTmVb4bDYYp89Qqfy78Rkb12VwBJKUs8HGqt5Jy8caQSciW2BM65Jnww5b3dVQ89W"
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
