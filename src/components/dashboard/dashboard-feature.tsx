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
    "4LNsUNLEiFmso3Wzh6FG8ReB4HzzU2qXLrRT8QSgQ5ncL2jWXc8SF2TnWRGDZERW82YpzVMtpuAjjAUBmdLJKr5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uErPi7QipYGZA6gb8KEMPRn2kM7wQe2yyBg4s3MeE36bzyHQy7kYhXgW8jbDgMuuEMicPENDJfpjXqGSJsmMMrp",
  "key1": "3KptWrHucSCZVswUdgu3bhnTrAtFEaW2117Br7jnbVDHRJGs4Dzb66xY52QP54dSPgB15K94xFg4MAL1hJyULk9H",
  "key2": "37QQBGK7NSutBWvRNW1bmkrqHj9VZd4cKu4UpqoPCxfLrdKhK6JL82PppTZBqJPMqmmoUp98X4RiBGXhFgvvoxL5",
  "key3": "4WocoWHk96jh56YkSn9TSEyWiQcFGbuy6oqhFAp4fPkKVbKy5nfcyQgm5jCMXr4i97oQMAP1FTBmvULCo9fApQGH",
  "key4": "2BZ7C3HidJya3M6vagAZLS1Re3Gk1S2Apfip3TJHiASQtzfB3miZEHeeKxtNwvA55iTpUsnvUpqaJfmgPN8bkzFo",
  "key5": "3sANwTPmpVBadUM4D4Du35rvmf3TGM5w1gPkNd4w4niTj6FzzMBkNH7A7xUBvXxhiMUFqKj4nvuepniCHy4XLk9j",
  "key6": "25E1k76s6QLyFvwFs6eASXVdwB4zPsynXJ9at2YatjSKaaa5iAZiyTUBefuyc5H38DaDVXJrHKrXXCAu5AqhuRcC",
  "key7": "3cirhoEpWfp3Gm4RRzWxuuHHfoy2sC5gy1LbjPd8Mwoynne4hoCYctDJz8SYxVGXa1LPviqW1CAMofUte6hhYVp6",
  "key8": "zFhZjSv78gtbaFA2qbUgFR3KTuvWiRt5Fve1DL8Tn7UCJMBf559buDK4Vms86h8Z6S6SxkgHWNYBV6QVUWRx6Mn",
  "key9": "t3UEdGJpwpGYLRcmca4ccvDWYLNzNbFREFgwUEkaTDbxr2KHSsnhfz8GhpC6qGegapWY6aifpmm2AQg32dPHnAz",
  "key10": "5qb5Zd61Nj3NbDKDaKpfWo3J82SPXAsrFuppRgVY31KZ2Dggc19mJQJeCQpiTkbArMvBqjK6YC3sLdReW2Vnqoiq",
  "key11": "3hv3sAPUDZtM2WMQQVn998o96JfJTPxtL323jxEGwVmSdRiaRd8A64KMvo63XGChnsTfoqpP2BGwuJni8MVrDvad",
  "key12": "59ca6xJ2dowwiVqLLzaG5GUPRAdFoE44D5JXRLWLKN9E724SspMuh9LcpJHU6Sm2f5MXWy3HrpPRrDHjqRAKjhMy",
  "key13": "2HcPZGU8MP5u4wvWmUqNo62ZjDPRLVV8fHsQTngNCmLE6dpLw1FqJaji3msXYAeT5paEfXGeauaevms1YzLZw6co",
  "key14": "5nnezfcgniPCHNMGf9w9rBPALFEoZE7MrAJqyeajrYhagwxV37mpS9ZByEmAfac1tvnjcyXQsUhkQECN7tt476hh",
  "key15": "2aiZSz5VucrL4sMQ3xipDM1ewMoFFWVqFUSU6Ct2C5baiFdNtq2gFQyuZGSEJF3q6xSreWk2qgEUhzbnnVnig8YF",
  "key16": "4gNQaB2Wx2qR3JjxHxtZoLLFmt3zj6hfayRVQaB9RtAoCjP7us4iLNtP65pJFJxsfvay4PFpJWUtzZ5THm2SFXDH",
  "key17": "4VDdcjbLedcuDJZQ5NKbBCRwtYkRB24AyRwYQV2UfTFHVovuXRfuiHuj1at7WCJbZi5yhaKgLr2XfoSN4iTjb1Nk",
  "key18": "25eUrm7rAzfNXibSuXEwDhU34Q9wyFNknBZSNdzchanzNgHLkkkBfHNNbLVVrR57Zao4oGHCVMw9FTb5fqfAws7H",
  "key19": "3ybEX7DBHVm5xEW4ckw6Ru6EtMBZB9DDmkSx3Lde9T7pShLVUXQX6pM2bJguJaXZeGA12bmaMyosKnFVbigvJeCG",
  "key20": "42g5XkyzCL4rQwksNE5nHqZtsF85fSYcv4dxP7VrhYmUmevGkJsYuc9S2RdHPUpwfY8HC7iEb2WgktuahyxYkWsW",
  "key21": "5DEXf4AiKWJcpCGf7tgR235ZVqbBDLg5fkJfUMjxdmrExtQuJ8MuZZjdVvAjkU2UpHrAmbvPz4iEqJ7tykYtQX5A",
  "key22": "ZW2viHqd7vuRz9D9tm7dbT43s2ouer2sd5pEEHP4xQrHHyiMRmUpLCEUqBvJ4gY2S53SwDGzLBXNSagqnLxK1Cu",
  "key23": "2KYyDmHtfswx73xGngMVQf7xhbUevA3SB1eJHQVFxfPKxthSyYUxwgHucJugztLMvna3rVSj8EyxQg7dVTBLbNod",
  "key24": "3yYU7zkcny6MiRj893YJFHPg77BTCuEwpc63ubq7DjnyAnxQv6rwsLmfsCM3GxYB8bqS7UZozVKju6RPGwUDtpJi",
  "key25": "2u1W5SxnxnT2eFWeVi45Rrbju1fSGfFvbjXjU2nsg7yZ656URMym4C2vpvMU43AoZpfJFinD24zdw97UC1Hg3yXR",
  "key26": "32m1RP4B9QM5LUmYUeiDLm1oXsCp9qJ5hJvnqPFXeJcJohbBqxqAB1LJHEG4ue3ikfPU6eq9ofg7wCNsVBuPB5tM",
  "key27": "CiWqDcnXqdyCJiTt3y7eg2xX2c7M4Ee1AV9JBrR8PC45NwnsRaBNCTChhXwB7NyPFquqB8t8vvpnV3ogtY7NhmX"
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
