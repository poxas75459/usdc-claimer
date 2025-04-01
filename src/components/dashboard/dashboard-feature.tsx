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
    "2p83aQbkfoWjLbDQAAJuuPwZaW7GgrxhsrHbTLQMWTZQyhQfSgjPE6sicuL8axbBrEeJ8pNfEgfjw8hpkEFYFj8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BHNpU54ywZvEtRkePv8MUwbtcTNTYT6CXg8Jo2MNniVWuCFHEbJT884CGmxaisnZmF9DfJ85WJ63wcUdoXeYBzj",
  "key1": "1BCUwfCCW4ng89wTNnYUqk26JJoY7J6aEBnKEoeN1v8rQ8yKTq5jZHNrBesMasnYCC1nUqTqKe6CLm4njbY4kMx",
  "key2": "6M3Ur4nsWuoMkVza2ohFuNFDuzAFMxbkKcp4Y4wUoSXgdoXGUWBSLqstk94voxVF57vyrjbrajgcNDGAEn9PUXm",
  "key3": "5XAJiL2JGHA48Ktik25fCdbdohTKu5RtDmTBTCeKZx1b1Tt8KtjT6eCfJyUzA4JqTRb3e7ND3cxK96zUhEoD1ruX",
  "key4": "EUwAoC2kyyKHbQmgBiy7zUAbRbcS7vz7Rrq9F2KnC6Uf2EG8vBaXA2UVaGiPtJC1cZqh42VogSYjUWWSnibh2kV",
  "key5": "2NJWHPqW3D4mRLmFdKNsCvSuDJCLEVbSYGDBRkZwquZCscHnVpDJ2YHiGXn1dvdcMHRTnkFrxaykNao4Y9ayt8GY",
  "key6": "nHUdFXo8pzW6Hc9xrpXqtRu4VszsBLV9yxHuqEig7Hn8HMUfxyiRkGRKKQM8BssM6iFwpTJG2LuMUS7FoLAnJwG",
  "key7": "3WvEwPfyfEhoMHBgBFsgrEVyY3GxLvqiTawYy13qyCdvyDnM3jSCHjvf37EH8Jh3kkTMXzYcUbSmaCy8ywMaK6AB",
  "key8": "2GGEWW8M1dXod8hZZQtESAcFdUAU5Jm1TzyGiuC7T8QMLiDqCM5fnM9q1ZsJn8k89cMtiZW1WE9TVHJEaAcLu4tf",
  "key9": "3xZq8qAiYgqQSKtH5vnkyy6cWvXN6vfRCHSn1BZRJCv7AtCo5Q9rPVAMarD2xEr9zTSCPj382czweyETuR2vv2sS",
  "key10": "5Gsfpws1XciskZhPFyjTGvqaLXoYT5wNrrWv38WpYs8Y9HeRo5j1awUnupGDq61vUxuV76iqrvMhQoJxxJWcotCd",
  "key11": "3HYbKKFLJHBHxakTmqxirxdZww4bF2fLenyfvgtzQhevF51Qt6wdo4bps8UKrn7Tn2fBXWr4RuyXCiBxUCKoFjzP",
  "key12": "3UHpJ7vYL5XATEUMEr6U5PNGCQid7diMnxaeoLEGJ9oZhZV819c8GdpW88vKgbvXW89Sxg8D9VG9oPSG2UPNnFF3",
  "key13": "4HkzHSomGHoW7hz1UaALbQ37BT5J7QmnL2oXTqTHdeGMEu1EgsaxHa4TCsDo8LNxc2LvCHB3b15U1QnxUjiJpQCx",
  "key14": "4ML1x3iLyHfzTPTAyMXwrFyrpFxyHwX9pWWjZNx4ujFf54BaTdbxCGQLjbqW8GgzCWh4VRFKNdnvH7AEDyPc7Wmt",
  "key15": "34Cq6gsf7NuajAHr7FHwhYXoZAZyf2MScVqV4fp5J5YW8h4cxURxxTf9TGSiHWecGkDE91nfPKeHKY7jFeyKeeRZ",
  "key16": "5ovVzb6nQ3BKamBUEB7b66SRnC5TCT9knuMSesCU9yRG1RaQzea2chfJDgkgiXn2Ua9bhhQ5Fq3iSECHmj4YbS4p",
  "key17": "2vxyBgT5nM9t33pRjAtTENW6aoaX6L6PeoPkbSSPhris2BbNzq3s4mMrJASoMBL9LtrDwxDpYnhyJA7UUenagZ3",
  "key18": "yqaYqUM2JvT3xNYtHcYJeoZp6ui7bML5ZSPrwPhicGc1hHxaweyGWNbxSUo4WntMELaYsxjvvYMqAN4TNi5nLko",
  "key19": "2dQyEXVFANRupLZQ371eEPovsDz9NW6cGArgtNNU9Pc8Wm2sQ6YVgTmGDCDctHLRxoJG3hUPeSG1Kr4opu5gBePw",
  "key20": "64VHCBqbj78ko5w35CHZvBCikWLH3Kq6rjoh7A5bow7TPdvoQgZxkucX353TY1HpjdAy5ugGimALiydsn4eQKfdx",
  "key21": "SKiZcagEtRjzKXVQtmuUtqt5qFDtPBw8zaeo46WKZYLirfbrPog5zwv4zrEDDNFmQZMZrTsS632pFBF83Jt15Gz",
  "key22": "ysUVxkWkZtQEo7UkCRDiaRwGk3rLrb8kqHDsfcopLFGVZ5YxNoir2fFDXodizsLx8uhdNJRJApUwzgFwzrPezoF",
  "key23": "4RqfimdmXUmuYHgXUDtj8yBMjZoD9JGj1y73uK3pawF6V43ic3WKdeDwBwrJfZJeQ3YBNaXnLJYYD33LAVUVDqbv",
  "key24": "5ESJtP8zJaZU2NXqBYUCrqNTk55cSZw98Cru9p3RjPFwVPtXfGveKnVGU2JPZ6G17CtW9M93pqGHDgVByKKcXiww",
  "key25": "5XWvfg225X6TqaqHCM7cPYT1Ps29tthbmsAtcyReMe3JzWW7Hn8sTdEAuV5n3qc8SMpr7cfgUcayPVC5dp9WfXss",
  "key26": "4B4LtiuWFYaziobFVKUDBbVJ3QirZEQXDCRiroZ98rqojmKd8CJaoWEYWM8sPb8BZ2jBnJ1opZFKvWJbdfNAqUk7",
  "key27": "4G7ccNX8HSDoa25okjK5eTsTTMGmz5sRcLkA3iL8sMZ68JWcxjoZamoZnTtsdAtxmKHQ9wTnJfu1Pa8hzP8VDD4S",
  "key28": "3xvB2DWMnHM4qkLYj5Z5KF5MFqEBEdxKRN1bke7j7ASymTNDYvoMP4T8a3aHTgkuwhDPsBULssB4XiyfQBSzmB1R",
  "key29": "4GjjrkcLYcgnv9ABok7K4cGubTLxmv1A38eh2xRBZqaWT3dPWK4HE7Tts8GbaNUdF6PaiwqhDcwRPRZn9CPzZWBW",
  "key30": "UmVf6NbugNWWDN7FeXP8irwg81W8MnKqsbxua1zie1eAEU8yNT3XM6Vv4itGgiKpvgsgdbTcJXGWV7AX5aHVdXH",
  "key31": "43YhCwi39Qswd7mrNwChhkWMesFyHiaqj2j1qCbyMcPLnqE1QxmDPVsGUhHtCUsdXDyLdyBjux4A4em3wEAVdUfV",
  "key32": "4d5zdFG3SzKwssuFTfT5orMYKzSuACJ3RnPaWL2miCuNB9jaUi5vVziNKw66N1X2d3voBwHsckaBZCGbBiJuqnia",
  "key33": "3stpywKNW5Th3i6ZRqwJByX43cLDVgcRXfpsWyKRcp7qPJMBCwKtbaavGRfHv7ynM4f7eC5Wv6TQkNXKUuh4eKhh",
  "key34": "5XHrRMTvrVR8RprqZXZNyxocwziejVpJAfeBqW3Jzen9Zb4vdSgxFRN1rhL5Zt58HiZoeH5MC5fVa78hWhkKjqn3"
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
