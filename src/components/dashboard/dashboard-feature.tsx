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
    "24eu7noELkJFwF4VF6QvDUWjcFosSZDfL8y9rLyw65zANNT9ji3mr62qscYkSKS1p6TfPdcUvJZfGBXsGSsaRuea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FrNGuohuQhjfDRJbYXTRqKXFQJ7CHd1vXyVezaxy8ti65Ftf87yiWtT9WqAhzkNLikNMWfTHFQ9ikwjw5dvE3hK",
  "key1": "2s1eiWaSSsSdRDdxPJ63amqWAGYe7wUofy1tFTtUMjAR1eda6AzRLVoBPfcGKeDwGjsuB3oMvtJghaMR6vQTizqJ",
  "key2": "46GGD2xkTnvJmHDpZZEiDTA42vNmvPcFNNXfsDtBEbgLEJkLhuAAg9eLftXK28PWrqSjpRuGGSVm1VCqtVTpKu1C",
  "key3": "3DPb94nqY2acrfKADpbvpEvQujr75S79Y989h83ZnzRYa7csar8FK6Zzj1NM5SiZuzXmoepeTCLc4EcMiXCxkFWF",
  "key4": "2AsLRVwgFrSw7x3pqU66yYQeguiMjyGTCPvEVhZvJ2qdz59BZD2NdjqrPK6wWgCGfPLRe3uTY1GFzaVHRVa3miyu",
  "key5": "DcdYJ5CymSQpKsMSAuydRzs3MFg2ZnUyxzarCqG7BfGfY4JEMRAVpRhQhRuiHWezvWk3PhajBARfyLVsChLkCt2",
  "key6": "37PGQNSsAuJgJDimfQFmpHSoA4917fPGdFi6MRpSsmFeeHsrdBvoW9h5Ya6L4hMSCoWzssLtvoWRab4zFp7Bbucc",
  "key7": "5QKkQTgQ4DRXhPNcw7aiz37PjZ6uGhy5T4kW2ynj6pGqusz1QVPXPMPfbsncJ1UKK2T27Yk41dWzNcLLn26RvVxc",
  "key8": "45Re6ivteYrtXHK1ZWPQgvs8LrECLKs8de8DcMQNz1ikActT9szHM8qBWGj6og1pXphLPVNMijwvJhqUvUtkVtB2",
  "key9": "nwePi3qzfxdF7Q2rqJ2h1JXG1mGrSvqtGR15CMtaac7DSTR4VtSbe21DrPcF9zyYBi1dDJrMHRfWUxTBN2uUqd6",
  "key10": "4BAsjh94g8gSCLg9eUaWcZKMPJagUh6j6tf4f7JPMYqk1rmtEB6w7yDX2SA7p1h2YnSGGqKorwPvCBtk3Xji8YFY",
  "key11": "k11utLuVSEpo2yfpHCExZjeLabF1LLdFy8Fd6cqXwds2MWAqwKD5ubPucbQ7dpLpYSpYPeKFwhvawcPFTPa8oWT",
  "key12": "2ceLfaEkyLXZ4VGEuJGyCNp2gL24fkURrujYccMtW28kbqRExxMz2UEyfz5Vu14utFu9SbZSRCQrKJJijtCf2rFM",
  "key13": "pB7FEZMmYscmDaJU6fq3EGnnKRc1B1P4kXpzkGBZm5pJDbUL58LyQBz15kuL2bhTznFWUVDVivpMabVEmSCtMQK",
  "key14": "2Fk8zWCz9K4TwJpKzooefRTtypLSxZdAVR4ekxZE76uXhSXUb7z7EnzSeTpha9JWQWZyKGbQ9ncQknLCy5QTLnTa",
  "key15": "5isHdozHG9Fwd1F9cbZS7vxSNYBpKAF6PXzNeabgwkhguQf6yvp5TK1KjvqrCt5mUREhyGBEuZknmNZRHvhWYzJv",
  "key16": "3EjFmZQfS1BMFcAQJEmFmy9zVP8vRSncRzBakDUWBRHRuFRbCi4RCEnjXRQWE86iUWAX7dUdwfc3kPSkXNtStFDd",
  "key17": "2Lrn2SzHoyvF8FwqDxZfzmc1btQ2zVHubuqaRWyNX1V8vJb9HS77Rq6Ydb3ZVoM4S2u1o7Ji2K2Ct9DPSeT62dLu",
  "key18": "36ucjAyXJmRfwveyZeWVC11NPLq5db2MUtaVSfeb7cRm5e6wQnroZX1jKjtqv6KW6R7iiWnQx1oVpdorW92uVx8",
  "key19": "UPzuc8z21vCNjirj6mmx7HYjqHkXSEXCJS4Z3ixNhN4AmfvKUQrgPXPo7aaeoDyRHwLRzJCvGCYMFpy8iYNVENk",
  "key20": "4TU1Y9MSj929mA2j25uDbx23aZuuNb8P3C6vhPTeZARjBy9GvHWuNMajQy9m6c5b1d2eWHbFa62cBEt32tpaBeej",
  "key21": "3tb3fNYyHFu5HGUxTAEXDneynqFVvhs56DdAP4h6YNobKstjheGPsHhtbbkr7yvFNi6X12cbDttbwmWQ68Y1DpRL",
  "key22": "5p9mwmsjY3GpfbngJ5aix682rKMjvvvtjsCxmUw8bbHJruuYW5duu1TZqJRky2xow9MsQYcN3oBrsh8Jf1Atxizi",
  "key23": "2eSMuzTVzGQQYfPciFWCkmkW74gxrJy1WUPHZZdNhJ2ZpUyangxT7uHyXHv1adbBrq1DYZiKaUSpEhWXKDxNc8pF",
  "key24": "4R4K5EG51JsbLFZGXVjGngxPo9JwsPMQi8156g2y4DrsjDhmZSBraf4LJoZkyhDCCEPGYW6vXDdWbYY4i79pi1VW",
  "key25": "2DrGyDpeuhS5Vsyu5ZiXh3CYpayXHBf3cDu99QtjGUrqBq7WaheTZf5gDfqCVzkn2gCutWeuPeCsWFikKN4njzzB",
  "key26": "3FazwnJwwaw4PaV3ZM2LX9WqT76hDd597g47G3FVL1D2djV5dgQtgMtQh51QYsGUCkywcoCZ4qxBf4ymZFimqnZD",
  "key27": "2zBW3wHu9HEUphUQgL8thBW9qbrfDvTW9kzdCRESisDayuEkGvPrGGXuB94XaPgLXAJ2bwdo1tfnpzZj8xSYb7w8",
  "key28": "TmxTy35vQMxDL3d4oqqhv9gc3NRF9bv1ivmsvBuLshxS8CKsaXhYbFziY8UTP8w5CeawpT446pfZV8DH4wn5AEL",
  "key29": "4YgxEGf5sUGw2Un7ZLpnUUybkf3S7inFxifVxcSva3kHo9b2mQp1TRj3c12yvXdeGNAshdv9xEMXMFS1eQ4jbQZA",
  "key30": "GBUkzSLn8i71FZpUeDKwGVKSxFpt9yyBDb5YoUNyrp97RMtrojWv1sR4aw64YucCyvm2yB6MZ2vjviNexpJURtF",
  "key31": "yDte6b2W1b2JEua2LYc7Xz2TTLCPjcw87imEoPjXVHHujfpBZQoEd1VC3VivMFzenKtzwL7qCXJ6T3DiwHAW6hr",
  "key32": "ku8b6heVNFB43sQ4nYzo9QfyRMg1d3WcNTX6apX4qveq2Hg8CZZDjnb9f3skFkDFrcht8MMafqkvNwPeSGK1AFw",
  "key33": "4KyGkn1Pqf1xd5cHoKPt1N3V79jasdBBjqKfLtqRx9ATmmYKrhD37s8sJKQiu46gAPnUkaKAjAzAKWcs5tqqFZHm",
  "key34": "2kUsMTWF5xU8JVHFXxUedqqXocsaADq41ZWQHqqtVX8YTM7cr9jdL1LyD7isYYVDj37pcZtqtEDseE2tCJq99mao",
  "key35": "2YioYtNXMqdjEgttPUnton6P3cPZKVcw46EjyPJWa56Z9m1sJi43oVNHRbaiUbLsrh31n7QgsYWc9qQws61Bv51H",
  "key36": "4jN4NAx2NDqSi1mmPbCbLKNzEQwQgzYBLisw2JFfXvTTNSvo64PqrQGjCRmrALVjZ6UiBz9vd7mSJhKAtcffxTxn"
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
