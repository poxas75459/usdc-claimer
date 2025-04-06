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
    "dgoRxS1rziCwgwj9KpjNeyLqLEZBX1nkZq8ZXsS6U8ngsKetq8nybmFJ6mxxuwTqoAiC1edzKxxwwQgRJNMUgnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJ1VP38RdFU2Pg7r6nQ65YEwATDmYoUAn2H9j5TrnModrf6iP6ZdLDFenXudcr4DAxDuXaUWFM1kmoQUTZJg6V1",
  "key1": "XJbRXzh6AicYuvE3vu26ATEs8z2iHzz7DXCdnNw5XcTqgRmgpRU13dQ5LRufQBwMVimRmDxFYqM2sj7gK18SUMb",
  "key2": "ABKPGAkYGCuqYDwgbT3cuqjGbR7EdKHY8s1uJciq5ftyNoZvZhni6d4JZEwkJwVtXdCkZLn5MmhP77ysi2YkbGB",
  "key3": "Rpq7wD2oR2pAvekd5KREPnmdE7pKAvZXfCaJxMN1gpiKZ9C9EoMvrahwnAkGgzRPfhW7puM7HQNp8KAT6Li9Lzm",
  "key4": "3dmYiwFgXXbCfZKSuGRbqZADhHedpzeN4QiZ7rEDkJ2p5hPyvaMLwmXD79MhYcyiCxh2mjnFuA628NiRkpxVFiwY",
  "key5": "3dz8Usv4AoyQSTdDRfoKFZ6VNDY4TsoHzQcEnbfe8eZZBr6jEMWEVtu2DwKsi9tCNphGcPke9FQ7ZPM93vD6yUN8",
  "key6": "edizefxxYcqNwJgEApuJcwjSUW4Eu7YEp5yG6XkmAUrB6Ynd9DX7uchKSWgtx4q4kP6aKDrPwaG58s3GXBEzf1F",
  "key7": "5WtuKLQbKGURw5G9AXAAqFD5yNbUtz6Q5MascjaaETP42W2g9oGcPS6ktpZnK2BxqqmGa3XscRSv2c8kA2Cqva4K",
  "key8": "4QBEsyvAhooF9MGsSgvpFsSS2XHEUyRGCDb93xAnrr5ofgbfBkXv6oY6jQfm3gXsHHGA9QEBY9h5Kj37hQjcnFWG",
  "key9": "qBxMyMbH5nuesevCUdpFyYN4TZXEDQdLbYTySNDbKbXkmKYPgoetinP4zpZT75cS7seN5PWMru5PPDqkGjWDXJt",
  "key10": "2h8sqZnaPHVAcTr5x3ieMN6SwHqMYbjvdBeSXmcbmf5W4xFfqMkJJwB88ZeKxP8x973f5XeMiuASZ488wQ21yziC",
  "key11": "673SU168C2q2hfSLpPjDSBahqahPX6UTn8VkvK5EnKL19a1t9uP1WjCf8jXdZee1DdaA3E6pYHXr39C8Lif1ePbk",
  "key12": "5Kuw4BKGRA9xV8cxpmgiKgZESe2RjiX1WxNA7awz6n4HchaQNsjuXoDhJuxg2W3xpB5wK5va8CxbmKSFiG5kzi7x",
  "key13": "4mzZurkqWTdufoo3mfoP2yJHWmUH8htRSiDpwFVAoDEHgu7Po8RKsrNaRC2B5qxqpVeQcFhjMSETYfrM7kRtmY34",
  "key14": "2YV6YMM29PGd1rH4SBwg41Sgyg2rCFzeNo6hdNfAyTQU1z9khBaxLH23kDWVudWD7zFwW8kBDSpED4cobK2cAeXH",
  "key15": "4B6SdrrEGqGaGpnCNdjNdhzj3vSyjL5o1SqY1cBys5s2pCx4TADy9S1PXaJ43KmP3ZvxzVa8KYr5RoajM8WYx95K",
  "key16": "5dewqsazws8ogvnoffSq8iStyhnEK68cPNVs6U6bYLNTWTQEB9Q9GXM9ZJWuG29g7R4JwnrjHrxg9rRUobVV2FGM",
  "key17": "2Egyy7eXC7Wp9rWP5Q68WvjaUemJiuiEaErkfUvUrvLghn7T5c1xLRzCJQRWM65Jym18JSkPUPqo3mg4VpRDVrw1",
  "key18": "3Ri3Z3E1Vvyp3JZcsinaLMGuKLoVGam8bVwtGkbJZSsMmxM3ZRVmKw3jT2pKxZTFa15LWpbKadKPC9bPNq57C6dQ",
  "key19": "5RzbpsVxiCJwQtZEwpxFj9NwwkvP3aVKakVRPNUbtnfiCqcrHzXsZPbwFgvs4Z7U9zkm2izCqaRgMSAfD4KpCU75",
  "key20": "4wWkCeZXJKnUXLz1HBjyWo6fGTWXi2wB2saANfHJiNXihFMxnx8J5nSJnpsTtGfPK9b6PjpE35EXqdjL2pJbKobE",
  "key21": "3vpQ7g2UghiVeKJAb8aAoKyG7Jqb14zBu5xWKgxQRnYJLQM4jycVazKFHoh55eSxAfvL8hHfqVXDWEYqCei2MVRX",
  "key22": "5s1wemGsDAvbw3g5kawZDwkH8FysSb5AfxfJ5uojBrJo8151WwMbe8rLJ8nvPzRK9N6CtyeJPwibjQh1dtgwgzv2",
  "key23": "7T7iwvX3hMati9H6d2hcn8ajjCF8DNy7Sqq6M3ynzyrQkJjz4gq6gMmNogNaTQHofzNjV3XhPsjJsJ7v8URxgmw",
  "key24": "5UzbvAnLzvcdbXc7iRpqx51B2umypLnop8hkxq863dzNKKMEAZZicn7NTks8pkhbEhgQv5CDU4wo99QHBk6gsC6P",
  "key25": "4DR1UX1V1CqkKTyy1szHeTxZa2xgxHH82p5FkjpefKX8tLepJF5XDfimMHUKC8fByDH9toHWNDiQzFWwt3U2HMaE",
  "key26": "5nkv3xuLM4tM9AWUh7HedLCG3tiMng11K818nLN8EXAG3zsxnMjno1bgHAjDP9TrcdWYAzAfcfJ2nBL4dL3UrK7S",
  "key27": "23m2ikH8jaXj6QaHBaVrsnm7DcowxisA19p5H9SvcKu2BH4ejAsukhXsSsBBPqR5FSWdbbBRGVtwK2CJMJxLDBbS",
  "key28": "5otCMC68uQRCoDk5AV3Rijrf6FFQRb2TudhsGj12BvewFdNkAL6DPy12UvQPNeyVcjDgdu7fWVG4myPbYdx79F9d",
  "key29": "2ZfpArZ9tM2uzXZf6RDomRcifDCsPc8j4MWEhprQRNGxsAK4z61ShLCV9TKkp8yx3ghHV8AZbKmaTsm15xBr6u8s"
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
