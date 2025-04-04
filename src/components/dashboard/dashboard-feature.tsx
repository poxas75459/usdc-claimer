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
    "5RDWq8SHe5hcVihmonsZbtgTrWLPjJmooKuYracb8FYBLKn1Jp3bfAT7PEjbc5ox1nkLfmVyDMnv58RN36QTMPFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R5qHd7ikhAcMGWAJrBbdV4dfZYPVZA4JiRJW4Hgmd6jex29qV95sy6UrYJnJDCneNBscQK8yQKcN8zSYjcDv7ko",
  "key1": "4z9Lt2KAivBf54P8kXAfCbmQ7g1yNBRAHdTSpubjYf28FgxwdFXkewZaDTV7v3MMJJiH6SsSurMbbFf1TGEdLfvD",
  "key2": "2sJZ6Ke4J5QsR3K3dg28CBvFVcJetqzj8SEJauPSvybUoi3k2F8ffYRaAmRP4koDcrNQYZTd26DysYSxbUMuzbpu",
  "key3": "E2xJdrV2xVFSnsxxDDdi237W61hkx6AHuLd5KknNpWuT6XxpMcm75dwZDKXH9HjHcqhQYSRjvRLc6S5eCFrsnRD",
  "key4": "5bic6ndCQE4hB9afxi4aH5jCjfZGYZpd4kSCb1NMbdAW41qhwqcwGXpFJNTZA1G6HwwYEwc4EFv7J7TqkPB7qrz6",
  "key5": "3rY2Ci4hdwWgjtURqmEFBLTTkuJpMttEEJ4EiUaD136DizUCGU6K54TmXS3Tb2DuQdC6Sy4xBacz1WsfRURmE2ft",
  "key6": "53DrBHmLYhxvQUwcnNMxBJSGyDPtkQJgzvW1kTYczMSqvDgRZNCBGjY4XPr8g4Dg4Cu4u4GGNzroyFCSHPm1SrTB",
  "key7": "23vRTeTRaD2i8z4K9Vhg6LYKHunXsqKFFdizhyut5KFrvtXfuvMewABhVMPS6ihNwAak2iemhJTxZNT65hb87SWg",
  "key8": "XNif3AxmgjwYZ8jqvv6gh1jXmz1sEJXVgYUDRdFhe3q3aAbi8gkYnvb9x6ks1VWN9wpPXVZU4eBh1p3knAMLuuo",
  "key9": "3WPfip9hCZAdeBagUT2kn2wdcuP8EtApsmzSmsZYneMpBDZvwYPcnpvnvXpjMg8TMGyo4qu1GXdRxquc4zfadJ4z",
  "key10": "2a7u59a2eHyxJVFZfQvgataxzxxFS3uk2FqzbBE2HDRP6XV9w2FzkwGjLDwCxPN49xCd2g39jxo5JRL4h2d5MQ9U",
  "key11": "49jWB5E4jcc7cn8j8m7HCaeynxGkAfyCjeVNATbtgHPwn4U5mLK7UvRoWCQzLTn4f26571WTJFfjUhBD9PEhECuh",
  "key12": "37fiQADYpopV2vcHpkkMnh4G51F5K17Z1keRGhtg93fviZHcexSLHeNfjkpXMLPAgsx3czuRp1ydykU68iZhEwGt",
  "key13": "NbuWENgRS3QbTL3fe1AigwHzryKZ7amCbhYjysydBC8FoPzJrEBpQEK3NYv5wphNtZdsbduBz1EbwvssL9pheu7",
  "key14": "YyW7my1xBiFcg2PgrZCqW2o4wGjGF3AopBpsCn8yeEUNCLTx8zvMxsPevSy96x3qAR1Wr9AvNxuKaxJoQvAVBLb",
  "key15": "4dVe3iYMWmb46oDUjUhASH8MYJ5xfFJUrb3angZq1rnC9SZpQVVi1R14bdoPNXrPEhoKyUVsVntZ39irgCMHHoDB",
  "key16": "4ULxGFF8jjD9LgeQCw24w7B8wqxfgQo9mDsMHvRN9Qg9KB2kjMxFjwqsfmEggbqGRys2TmvxMeoojV2TiP8hu83X",
  "key17": "SqgDyynNXQYJHngEjSK8rxR7up4vktNcngRjZvgP6bp9gknqxZYq7bZ5qHovNucfamavnceVmxSB7JNrt2J4p7L",
  "key18": "4w5GyhmCtK75qwXkKUhcFaEmNP4tifT4w83YVbaWFay6e3W7kpbd8Csxh67h35AqtA8e4DS7h4HhSAwNvu32e4ot",
  "key19": "54r2itGNNNBa3XYV9J7pu1hXV2icccLZxHQuA7umV5kPqvxZHrAhW2PQ5z19aowipDKJRYor1kpFz5yyy47gh9DZ",
  "key20": "3SvFFKznAXZATiTdtoJ8hh3JiJMRYNYLC79ZhY9cBSdiTxWRWWPT1t7GDUbRN7ah8uK12LXMiY25BjQBw1EoD4DY",
  "key21": "3cJ6xUXbyVoJfG5xnpZwiUc9ATJ5cdzqrVnhsuRCTiKmCSN1WtMwNjFf5U6UQN74WVm9pRu9Nux6o6tQJF5Evg5L",
  "key22": "2b8SYnUZz4S8Ugvtp2eUuypCcxZj6HMyiS5YxGhsZU36cuDrnQunde2vndVS4GKkNgFeT8tVMPZ2ramQnZc9zqjf",
  "key23": "2yPLPtpmC5hmCakzYHtLHVBz9Kq26wsTSWJKqJ7xHsMAm7ZDSRLJegDRQ6LoYJEbTo3gJNhbk6VxAgFBqZ5R4gAR",
  "key24": "4bYf4SLbvin3Ysg8GX2zYeve1iemdQHneeYDpa1zmD9bsMXjbzeBPswsnWHFSKzxvGuyS39BeopJnhD7DQHAjZER",
  "key25": "2sUCEQLkoN1z6PLqAUKhns8DZjcEvLM4c1n2u1zYGEkC1MNWC1xB2oRSeNzaYcBE53hB9X1FmRmvdswUP9wuWRpF",
  "key26": "3jnFp67Jjwt4T3oaC734E3T4GSbduzSQe1LfXQ7ck3MVi9UBbFXJkTPerjJVz6ShABE4kfwpLGEMnC3PHRgMfkKw",
  "key27": "4c6LoMgKX5ii4947HRx2SP3jQoVSHF1ab8TcqWd8GciPSiKza5VixBAMgoL2wqLjBMoxbokTp35CmbZySmDqwPQp",
  "key28": "5qVWiEwGtcTQxQMMPgBRq4G5qNKWFHCvC6HCAcyDRbVpgaaonCFcbHrLeQRXDyvADXvKgWCmfPqh2LiK1RmJJh7F",
  "key29": "3ozGHpCA1VgjbnX8E7hRrgsBuk6V8U2cz7n3Um5A9VhjfL1vQcXPMEpDD6Go8DZKsu7WAKD9B2nqWa7t2uDLkNZQ",
  "key30": "2XrCo3FL5zLcySMCGm82zMttzVZaqppdxc9oiCAK8cBnJShovDP7nKUuiDRRyZyovK1yMxmm1cizNZcyLxPh4JtC",
  "key31": "3CL1QQsPUHSR2yPbJgYfbB7P3anUGtxouq85mW11YBmaMuDcDAeVV7nJHWjAS1hTtQzDzX664AviM3fMthwJCswL",
  "key32": "2FhSNr6BePFJoGKtED85speP89iNuyRNpDn5wsGS7Sp8HwUyZgQCw7cx55hZDXUvuDcMYyvrADhdBjTWfFe3hj5e",
  "key33": "4Z4QpAwRyzBjdomZaERRy9xpeNbTteu8yRHM6tChZZfTHcXC7vp8YZtPsiUC5ZiTGXX1zxaaEnSDq3PdDFRi37Q",
  "key34": "51qveAhyYewFrn1BiLa6PYKgCue7Ro1tfSQamnNmPbP6uYYhhzXvkyE5hJAogPppJ3LCGEHtizZgzNfA9BKBMoQg",
  "key35": "FVD2qXZXPbgxmGFVfbbLRhczXYJWSvX73aM77kpHLv8L7wANce2qx3HNxU1QFy5gn9DXWwTQmSnswXZFWRctiVT"
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
