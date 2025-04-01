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
    "4Lrgn4pRym5Pu2kqEep67veraJPDkbjWHys1QAxakAWSMYKyoCbbqVXaQdw8bMWB7NJByELHQvV4GCPBsrM4a2kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGwmYmzHY57J2foqa44nHcUyq48mTujCcp7Ee44AD3nAvJgStrTfGpjimqrhGMTcX5j3wCbGvhVdXt5EhFo7r2Q",
  "key1": "36xGqfQFPuZgY5aHcmZ6Dev9dqjAprsica7hZt2faLjdkKC2EickJsGms24XriTRCey5GHXUykmQo9feMBHMyX65",
  "key2": "4zfEaEGnGWwQbZgAjdvvkaQ42J9JpV66cnzHFpEjabmGpnUL3AxsGTqSWyd98y79rLoi9En2dDNo6WScSs6hRKN4",
  "key3": "4CtHxakeAzPRKmPUvt7Ykn9MUYC5haFdmrEMzYU13i3bbCWmUc3pwUsdrmMxD8guoEgYZXKRuayM4NLVPqfpT5pg",
  "key4": "fS2vwQ7oYdnMsujctF9XexuxRwJreHezkqUNJhVZPfRBEs8DqpQpuh6izt6n2jUdeQkgjYCBaKzYrbZpFDZVz63",
  "key5": "593LtXLciT9wmtscy13QsXXTJ7LPv5NhN5wHE67dSDE7cuhkEY8TA1DspV2Hn2C4LJQESjWmWqBKW2vpd87p5CVg",
  "key6": "64yizLMr17AiRvtbvvJ9yPqZjoFw6tiVMF5zNBn5tEPUtDLVQnZ7e75jvp6sjy45j1YHiJcb7nP9kEaeiGHfonQ",
  "key7": "3EoQ677HTpUshWT3XFxphtpvKGm9AvADmWZL6dvTvgMahP74ici7X5MK6da8SfYMbFJX7GFFZzD8bhX6utmNRJZy",
  "key8": "25uNS2cdGjFvMynLR7pN1zA2Xopqw4fgoipMrENVmgtgehaC64gC64e1w8rGtG8fcQeRaoMpD6YLLqthP69vSYLD",
  "key9": "PjJAgnb2dES9oFA6Co9qYRWHHoQhs4xjN2X1hdTvQJuHefLPrUmo2MT1nErP13yxAHofQBkNyHLX6EinyRBevFt",
  "key10": "2ihtzerJ9cenmipvnXkxzz4SzrsSwpybeBJHjFe6mCGbCshajvxm9u8xQSwEMgxdFviDRkZuDUXj8QgH4hf8Pksi",
  "key11": "5GbBo7Sw2BUAwVPF13xwq2Ds3srbR5LF6QJKsx3ouvjpVqtTNY6o4NZEaTyjV71DZbtDgqa8BoM8MFV6yBSzufZT",
  "key12": "5rujrhENBSRWxCwCRpsPP9wmPBNRR6bCehbDdNzrADHk9BT19eHV7xfcMYSPcFKgZuFTDxGJgraw1hZhm9BJDu8v",
  "key13": "3kir5wx9AwoGBqdj7DHWr5G8gds2UuBVJbZKfTRozNftXQ6zV5QqvR1RNJU9MqZNJkSn7SVBhYd27VuKU2ZAWMgM",
  "key14": "4DS5uUuwNYrgCFgKGdKrSbrtUvjXBQHC6rXEQEuuK5cznZvZ8nBWneo8WPcRsuwjCRKogbVHhpuCpPTCv2Ht4CRL",
  "key15": "4N6vdsqqvGp7jNq1uRSrtSw2fW7mrYYGMBf2fPKUZSrqQkZFJL8KAkCCNod55ZqBGU5iWzCmXKxmGtg2bYGfAdgH",
  "key16": "3JRnaL7bSfwQKdwoFrwr2A7tUGhYMxYBdUukVApB8CAqCeNPBDiHt7E65D1gXtE4DDMXmXZSQGzXLBy1LeXzxiqX",
  "key17": "vyKmym1mVbECuqqTcPVkbsWCgNskTtFA5dqaSf2aAqdz1Nf7LP6drqkqnmAQidLseUDaaxNSSd9hM9CJeaYMsLj",
  "key18": "5NrDFrrbEkysXAVQM4fN9dXJgkG4Zqs3Jv452BbvWpmptTeQRhcQQLuY4cqkaaq4yk4BxmoVs9rY2Ygwju8tnZ9E",
  "key19": "62X677GMiDobGpW3PxUQfUHoHXkVEf3BwQ2c3QZHopjYJ686BUHMfdomN87uRCummg53qGeQrP6hWkedZXC5g9xL",
  "key20": "5S8LwrwqR4SFokP3BWegjMtcdpKy2JQCEGW5SUDijyLAmxztrXDXUHUqNzRrGg3tQ7VSSXUfjC6HuHdh2AixqCx8",
  "key21": "4yVPqEoeZjca73Yg7znd9gDDQCtXqxQF8aWXR8xPqy37DSNi8WJd7M6ZN63qf1mnPmytfpkkQFts3XRA8y3g9sZc",
  "key22": "4jgfPEWx1z86mq6M3Z6PohakhEdEc7bb9yDRfYXDZpy2GADcgoXEVDB4FmK3eoRophsprtRBhHPMtXcXcqSEpFVB",
  "key23": "4m4VthTqraT6KCNChDa7iDVAaRXrxZqNKsNtWWJ5qe8VvZR9cHv5H75RDqGEFcAn2zfSyQi2k72nyHuDS8GTaQQf",
  "key24": "25ZFLGbPRA3QXCAgiXUtissszJiwqvSdRdugoVVBpTiY4Aon8bxJVb9B82XLLKS4GAvEoyZJa6mVYJDjQUZBsWEV"
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
