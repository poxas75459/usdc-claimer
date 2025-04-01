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
    "z3cKDdHwNcn3hKjjtcFzT8e9xE99Pjf2yJAMBP4fc1dh8m4EjgmdPjuT6Too8iFtQ1LTbwGc4ufB7fgY9vYTQNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VNet7f2tkHti8LkF73g9mVZi7dnSQLfTnVUrxsmf8rLade64tTXTHwopq6exkqkdm4pcoU2GAqhV4sK3W5KXaMe",
  "key1": "2JU51kXpRCbWJ83uKEUyFfTmL9UShjTR41FRN5j6yZGszC3Ny8hGcJCZDBGcw5xfZEkwjZhNygmBCWXjaQTLrp5d",
  "key2": "3FRuV1G4gQnsFNjtwZUGmRTgjnrXZAZkGvG58ae1VLRr26o9D9SQrHKLzEeZtP5Hhd329x2Bz6MdyhEtbivDFyLx",
  "key3": "64oyz9KW5W57jg36LbPkYzfYcQSpDEXc3dsNg5XJf9htiRqKAfkvMgTGBw4ZiqMMZWazqYF7iFTD5Q7rsGQELYGr",
  "key4": "5QbSb4cwwQPBVemJE361KzNDoEKojDaq7E6mWzRS7kawKwf4NA5DHof7JQB8VHuPqcUb7x2inZajbCbWQC5pARPQ",
  "key5": "2sRdozAsr8A6MaAvm7Cmzf9yV3cdxuCezr11nY8g8kQr66j6aE32yi1NG5ykrNDkZtKFFBHifzLZFvRDVUbKzvEp",
  "key6": "4vz3eKEepN8BGARjeMa1HxuZFgceD1s1R5cSDn5Q9S8TUg5Mwz1fcPb5eURwLZYc1htwuUVPyD1yiDHSLHTjUiDQ",
  "key7": "2TfChCUSXafGeHqdtx3qXrSGyMDnKJS5dpRkbaL3XC33CoXMmBv5859489BwQPwkofGLeJ39pJwhGyzrWtAxAHvF",
  "key8": "5MGbuFYRShdS72S87zmwayzcECzU1mHhYC8Z2STdtVfrxZUxX9gmc4MnBYLAWhM64RTddSnKNaf6rBaKWbDFHQJK",
  "key9": "4mLFX7dGyBtdfChoti7Rt4pmjssYhvRfbqAE6kGooJCgXgpqArPxbgL5FKYoCH71qr5C48vjNmsrwwKU5GwFH5n5",
  "key10": "48LMcxCbWPr7sVSBUjkkN3EqY3tN5mpf2VvX8LhJDPGn8Fp9ULRAaw4REh4jLPtSETqHyfqnpVgc87ejV4ERNicq",
  "key11": "2USdAg3MTiGX5vSZ83DhyFbgtEH5GWq1yLekkLA7JrGN42cUsVCNhciWi57p4ktRfnAG3T1BDFe44xxNUNpyNLSx",
  "key12": "xbjWDr8XiczyvuLGaBbgXLe7cegafv7dPNrJmgC8ZqpcZEbFpqkwnSL7xbJeDjTZ3u9QhTu67JD2RJ1kpPtrDhe",
  "key13": "28MnANSiHiQyrCkW4gR8Urwp5Q7J9nDAkEWmDW6sDC6WR14Xdz4B1zPpgXMox2ww4oucGhi6uXkR1rSRA1r59TLR",
  "key14": "yoLjYGY45eGGPGmgS25e16oQjgFsM1ZpNJAHMBqzq9Bhrt6AWpYNJis5StZrtTPWzoSHdR76hTPtdu3hxqo4UkF",
  "key15": "4E3XFYBH1pda841P7CVW7D2qwVtAz2Jt9zkU1p3JBNboPNBa4nEV63EMKzvQXqpzrwLun91qgaFDSDS18zA886EA",
  "key16": "4zby5Tt6Pw24umyj2FpwEQbbW1cn724hY3apXN5wyDS67F1MM5tmw3kth8oAom1zuit2aAoVTnPwNriue8A5XoaT",
  "key17": "YDZC7jubpKtrEEkSqHd42HiVb97vo1FLDRFXFejxWbH8mFQGQDuHqBY8js62sS1mr9f3LvTGPp43b6PqLE5KR8a",
  "key18": "3PHEeyckLHWKz2DavLtQSWbP5tjuLtnJtk7i9yzVCNi3U6y1WgDCYsTU4fMUKXtSKCQKZfADRaiSY9auAiJR5DdD",
  "key19": "5RSzRocXyuR7pSE8ykwCpGVVLSvLChckv3R2CKgCJUH1cD6qvYHaXfD29pMVKcZefiPabcuNvs1a6AoiY6wUhLK",
  "key20": "bks1PGxADPLWjepFzzNo5rQSvHZuRtMycpUPWh9Btq2CFyJCfxArdKr8Uvbksp6YvQU9JnrEKYqc1131kNt9AA4",
  "key21": "4jXaywjGR6ZLuTfzqqjcvDwtLfWZDn24JBTCo8pL3RFHiJUxev3ntzusrc9GxBAkMp6RnYKYF8iEaeEfqN3rGMMA",
  "key22": "61CJcvQtEXUoxpS1dFooJaGcHnvAe8PV9pDDm9Du2Us21cUNUQCWoixpF55mvMxb5HNE3EK2CXU4PL62P1NS3seF",
  "key23": "2v6tVpuzx112Y5Z81BvgVMEvEWqVTotwyCd7jCZadiYKE3z9dEJL1WZizXHutqo8n2ocrh8X6o2fBtRHApnTKmnX",
  "key24": "4RNK3UV6RCfJsVZmKug8inQCL5FSr9sVTpnJgdUMCcEFK9RjLcpVL8iG4AfH6oaSjdgwmXGGX9B9c5pRUFEEoSq3",
  "key25": "4w9sgeLwDV5iGt5kJoThviX1sudEG2VmZS6N82RJSU6BfmUAu2W3yfaFwWMR6p9okXbpCMwYHB1aNVNdywioifhP",
  "key26": "Vekwwx1H8zMHxmbK6mNzMBsveqP26qjCXMVpy7VqsJNSikfEfzV3GpRhTde1sEBVW8ucHk22QGxcS734dZaqCcg",
  "key27": "2tUJDzsTeqqHYLabkkVhqS72m9J5VEJZG4CTuqUx92VYAEd6X5pT4K1dixwwZziuE8P9x1D57Ym7VyNFevSWC7Vr",
  "key28": "5FDJHdmpSBT683seqeWvEH5uwFCfN2UHTAEY37jVeZzmUoSXuT5B56PgRLsqfqRdN4jWbuQBGevoqX9XeYrBgxrB",
  "key29": "5UNT65Xo5jZDPiJup1rLSLBeRahbdNsfbzSBgRtnF2Yp4gxi2Qfhor2XfH6QU1JuDo29B9PCSJuXLo57nLAy3mGT",
  "key30": "39qASVNb4ncAT6RG1TSgCrwTXbPkopTU892yTg2yTLn6BPbwYsqZvspVD4eCyY22KevcYBbJM9axTHJLkmkCeaj7",
  "key31": "276Q4YBMy4wTRfNJzSUoJcbbyV3pRBBea5Yu4UB3g1232mewV8GGUzHfgJfeg6LRy7mT4eKvUj4KA8i6J3RynQ86",
  "key32": "3LsftmsPVEM2L3ysyKHCAMq66YSZDteUYqLDusxMs7SksrESd2P9DuWNHYex5xoQM3sxc8koUXPYZVtF2Ztee65s",
  "key33": "urjbRBVzNbyz3ZMpdVUAayMd4gH1VdaDqfoa7BRXkygTrNErd64rUduSaoWKDdLULxwgpYF3Cmw5oA1H2j2tApM",
  "key34": "2efQWncmVsDNe1gjiibYWQ5YtTB1sVm7KcWzw7ywqW9waBRS2RpD9Soo4uZWrYa8tLu3zLzJ8TxNhGzxNWjTGeTE",
  "key35": "3D5KWTniLAH2HrrrTYaevneEP3i887eaLiyJVXqpZnurgM9tdGbThUa66WS86h9axRneZsVT8s9C8F2PCT6mc4LV",
  "key36": "2n6cvZ7s312p7JQhmXDrQwxz2oXxUspgzcw3DSpbeNn7WSFFg7NdUbz8LNA7hHj5Jjfgob3u1DwYexiRUCeaESnW",
  "key37": "26b65hk2w8N9vJEwUibcLMBC8ziU6VTEwruVuxmAnrGxSkQghxFu8VAyFFvTwuET7epLFuiMK1uGaPFhpJFExQH4",
  "key38": "44bUy484owYG2Yhdt79fZNsd8NNnHEBAc4tY3Kcq8viAj39uvfaKbG9Ztmc2S4N2EKGfjtq7zn9ScgvLsY4XCRb9",
  "key39": "5GgNvi7NdkoXsAwqSzWds6aUScgzk6pfwK6cwDkUXKXSLe378pQKbjm12oiUedYo1QC76LUQHXSc45zTN5HweeJw",
  "key40": "KsnpwUeCcmV9eZEatEKTZHTfSpmv6u6BgiS792GQmusgh5kB51pmiL5ujKd4wddg73QqX7wgos7hrTVrFYBWAGQ",
  "key41": "5kqGYc7DXC9PFtWQfXh32jHbqS2SejH8XzDm34U2eRB21N3ksMsTRMiGBpzWBjs6X8VYxUNub3SicBiZapWGtk6M"
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
