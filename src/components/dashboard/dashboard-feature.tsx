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
    "4B2BnejtYf76cvWDpq2i99V4jkgAPjGCbQeB6fa2KNxdxYLc72wBKdBcYzkxMnZoruchEFaHBrqVzs8vbVSFoTNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55c5XP3sVbUekabtjGh41Fmu1NmCnhdNPjKvsPHFrrKf2BgRBcYqUf8YTLDbgShCz7inqSQSSaU7oBdrUPyJALFU",
  "key1": "2vWjogidZMhFKnL7YLAyyWsPu6TEV4G1YYvCi9cQA2wWfkT63qvKgu2SWKDmJ7fzwaVb8tquChG7ifLTdmwxNzZ3",
  "key2": "3zDEiyGfMtFx6VVN6vVmuCUDUgy5yMRhAPsjFwQPeW9nKZuDkvpnJTktQfdtyRr8G9nhTk6QyY8Wks9XeQCg9wFF",
  "key3": "4ZRf92HjnPuMkffWkHiNPVcYN1iqTTEPgcvbN8MwspFeYWSkqPcHkm4MVBRfiqU8G62Cyx8CJXFmcspnDtBThaFR",
  "key4": "4zFvScNUcm58Ek7GKqL5ihrjPYD7HumVnSCZjMJaPmcAP6ojyrQzUgNgLKRbW8QiVpHSZgWKowpPHFoCaAKergxC",
  "key5": "3yUyFE24dqH1drM3Ea4s5wqBbaFqhL1SguUkCvJRMkBpwTnkEHFR94NVZAFMD38DUfjibs8wPp4fxCkcwEi35RnK",
  "key6": "3BYeWiBbSeNeE2JLPVP1Sd62fCkVynVK2xghg5wWY4oqRhBfZJjtNuCq9R57ww25FXe3rHwWWCSjX2NCtHEYUvsn",
  "key7": "4AeruQ6LoizVkVGZt1Tnp7pWfFEq5wYX4BjB5jk64B6SbfxkBBWAhnyyFEHR1ersLygvDpRVGD8DgKauBLjZFePX",
  "key8": "4gc85u4JEdNbo6FYwf41SNUrvnZFqRpnSfSh3r8xsvCnq8rKJvn29BLduEhBUjQBZGb2DaYd8JSjsdKXt2dKGgLu",
  "key9": "5fQtVqoNHymf1sHeUqYPsUocdo6NcYR6KjRUKgss5kkd431pFA2JifzahzKHgkeup1wvALzYFjNAnc52Rw87jp7U",
  "key10": "35TDifGr8kaqHjbDuKBTdLHaFscfYTjcT5NpZhhUQm1uZj2DjyxqkT7SEbw3tNZVZdMa9h5jGNv4ULwENLj67qud",
  "key11": "2g37ju2pdhJPSJef8dFfoNBS1WEM7bXv94uh7qdD38cVyRABCRXwgRhhKhFr86e6FVeuJYyuNJvLxCH1oixZrj9u",
  "key12": "3Z1wN3vYtPVL8WfLS8A1iEbrQ1aEBmUF6LEqfW8fwhRpzPwq7SE2AWWYxGBTNQJEmiQkTbc3KseVWuADaEHdW2Bb",
  "key13": "2xM1tj6RBaEnuA2shaVnhJdMgSkv1Wi49BExvQtCbLhQ43yKBbWPLzSczA2HTMGjoEfTMR3vhjVLaSE9phzLHd9t",
  "key14": "qemXLovHS2arESASb1TpAUDVh3xiH2e52gKyhUgEEGSTvz8QQt4wdWx5wehjiJySeyNfzfYu7KV8dxHyuPNztzu",
  "key15": "4QHzNFa6gTgQtx9aEnxjfmkn1Yfs6PJ7634iMhAMYf284LBwkaUAwEVj237CJSRzHTdG1M7AyzxBAugN9y8rjZ66",
  "key16": "5B1sXqsc5Cm2tSja44Y9M5ioQcvmEgq4EsRMCFbWUnjB2iUE1sJn8pRqz6Kus63Vc9YL9yiNzmCvxCYsrXCTfrFv",
  "key17": "2NF7MDxBSCRwSFBkvGhK1kPRBBQSEkvWRQo1wAQ86K89V1Fm53AqMaw7h5gp4iNYfwUS6KUwsJNaKXfxQ1vfpsq9",
  "key18": "5UbeNKpFcT8HgjVAMrsrNq7mKyKDhLVUaKducmcnt2BjXgRJ22AVvBo1UnniCqrDWNbeE8M73mPqbhrSspvM2ri6",
  "key19": "2oHogqAqh9pQX279vCBTt2WpQ8fPQFp8LqvZpUuWLNq5Wr7Cb18e3JJ5s1k4gupWnNFz7k9g9JNXhKbhkwRFajVW",
  "key20": "2X97RZUY7PdF41QCGmMmuAWUTDfn1djeeQdKRjVobrkneGSQW9nfAEHG5b5xyVJMxfgajaSnkC4Xdoq44xSjExPk",
  "key21": "362CGUG5tPThd8Eftm5q853R3JkuE3J1wMa4EbDxHccGo5gXDHWj8kSSagfYfE6H4GoBsYTVonU8Ys7MgmC3wXB6",
  "key22": "5T6EQ2PdYSto2M8E2d1ho9A3KPrpaVVFcSpoKohdxnGtLqVngb7cePF96WN78ge1GcuzMHzGoASXgAtwAFivWUVV",
  "key23": "62Wx6p3YG8WGGYf9AtsCY7KFEDUz5sGXDp9n6x3zTYWdoBQxfFg6rPYycN29vQpmiBSxPrWtgG3qwuSDNindukaV",
  "key24": "5WErdArgT37pkLTsKXYooCzQWURQ9RbhAhwxTtcyjYVC9Htv5qSV4SZQscC8e9dGYhmVqj9CqthxukcWW8ELqYwy",
  "key25": "2JPrDcvqrFNpa4om3BxyjdUEG5aERLHFcAkwmxzKJXLWcKZ3MbpGrvxoD5cPh3NR4w1asSzcGjAX2mEWBiewTPrT",
  "key26": "3GShYE3X4h43S2exwBScQ4orfavdJFhYUGihYS4ztUPwJJth3QbUbKk4V2biLykKPtx7mL9YePW6jCoYawN55Xyw",
  "key27": "3iYmuiExSuXpHysSDEoPedyS5RfbPaa2DRajt4wB1HpYSG1L4jjTtgLVRFsNVJuPZ2qfghaLoPdWcm2sk3FiGF7H",
  "key28": "47JCbqpHQzY2LjeAH8paFydbzyPn9nqvMfw65axFw8LaNpNN9UrybosgQaHgxeraHHRbEqTKyE9DB1SgPXmJ6kSE",
  "key29": "dQdsPt4CU6viQ8cbYe5sFuHHaHqxf5LKuBGChYkZQk1YxtkXsSYC8MyDVSeEJ2SYZ1yuF9K1pzUAEJ9QCdgg5V3",
  "key30": "5vVEYYwapLwGsu4pT5AYpz4C6Nr9SgU9k7yaxNS2h68J5xdijyiKQjQZDKUkf2XkkhQRU1QeEroxY1m7EQXEZj5q"
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
