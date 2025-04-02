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
    "3u8Pkf6qkncTb3j8VrdFPt13bgU77r55PbyqS69ak3SxegSGXowKSLF19Shrz8wYXWNFhqGZa5wzosjrHpKFNy32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31cCggKxdT1K2ZMkYXnU6P9CsrC9FA78dpfZbFdSHsqcbXS3qCNHW5JSPLyhC7qxBGZFvipkgdZw2k2mM6nTy2Sc",
  "key1": "549gubFwYFwfsbnCExCJszgnTk5tKU97pJyRMt9TFzZerBhT7JKPCLxCnzjiss7SbywcwannXb5jHL5n3tR1rodJ",
  "key2": "2MX5rQm8SN6amkhU5V61tVcStzz16BFUGxhRLzsHGTqEeiQAp7WsRAUWpFwpi9DgAefFiDUYh1r6nwM8bKtbsZJC",
  "key3": "3WqZLMUBmaGJJhh4enWb65j4ai2opYKCiRAG4uyVtn3RjXkv2ZVmbqZnAnQ1ikYmaMDGvcsTTagbmtqnnuRnv5KM",
  "key4": "5bWXdQR2BzDSta5czxeqjuFNSWeegTt2yscKKXaQoZwE5Lz2NeDy1Z14HXrcVV17WNVdPMuMoE4NhRQai8yP6yuE",
  "key5": "3Jh4qNJdAxJ4UK8BGzFXAnLeepmAeawzD2QJNC6ff6M9WrxoQFJmVXf3iGQHLMSFPDzBw9yr8xrL6YtLG1oghuiw",
  "key6": "39KvF3X6ACuEsrBSjkFm8UTyE7atLSrnHkFYrNZYddqtKi6JWDpcL4MfK2M4xLw93vdU4qGMqA23FW3vVP4tEer1",
  "key7": "4c1UErdc9hMjEm8uUvENcMYWx6rWYX8goBiqc8bL2arKMTUMkWryTJLBcbbNsCiQ2fViBLrkhpFYDcsPaRm9c8uA",
  "key8": "33y9mMs1bxEiSDFnKWc1z7JascdBqm9yxc7i9Cz3iBMUedejFMnXvHF2Zp2fvfujLXbCzhCg2unsiTfLBYYhfmBk",
  "key9": "232mFMNUPdVCjR6RGoDXp5p7WWHFYpDmpQKo9aW6f1z1ro5PUv3N548ax5w86qQauURQ1bBnXRpPvXG7VoMi6v4o",
  "key10": "59Frrt1YHshFmgM8x4E4PUXDxMovcbT2gWjBgLJRLTvSKBTRBdfsHQed9ERywxYNRcSgMFeT8wbkF4MfCErNknC2",
  "key11": "4iNkCmhU6GEh3k7CihqoDm8TUv8wUQx2qrGjaziP3X16hUE6KatRATyED5tsFH6UsymVbW1ePWkAP5xBTYFkLfiH",
  "key12": "4cjYkv84an9KjmPbgWWrtsTL5dUJHgFU9dvCFsxF7NaT5XqaFGJ9fgqeBe9UPqYhEAc5uEHhe1knyC54thiKtap8",
  "key13": "66Z5cv7NdWhLdGQmkHrYrYRE2sEckhFDVpsP5Xd5qEzsScVDhj9Kuurfzh9Ms4RPQqoLmNZA38ExovsLnLBDcuDK",
  "key14": "2NG9QdH7HETmrdSSVgQWyuixbJPWHwyYEg6qoBy3xVUwQf5ponRepVCix266QSoBGiiRaVaP8KgYLbPt4DXXzsuN",
  "key15": "jdBRKdyGLXAe1PR2NAbC3vgantd8YxtVk9qvjvqFgtEMCLPCjqKUEk6sLAoYXVJCV5CW3CCrF6MYYMxQGHmeJAA",
  "key16": "3nDEhDt1Bu3VjZ2JjjjNCEB9zRhEYvy7aBw3Cymm8vmPjRKie22kQEg1SW8DHBpkK1QmmY7WbfPV8Wys15wFqt8W",
  "key17": "47dWn7TqLmrgizZNTQQpbVoipSi9mKH8jxsebcnsXjPRJy2kt4WvNvSxXDCjCesUekSaYbLdTDviC3T4sMf1GN3p",
  "key18": "42nxxuqb72ZAZr6g9iLw96koABfaSmKyjWrWoWv1SQNsu8VSZQv45SQikq6sGVtSV17n3EShcg19r3wAWo2CKEj4",
  "key19": "32MdePCwxod975idLVhfYft94dsWq3MuUnJQ5ffoJBG6VZ2v7FTTceUqPppAuXP4iXfAyF5bbnXzv6E6hdX1SKy6",
  "key20": "2B568bFrSfkkF5wYBMudmBfDNNYDVcwtjnkrEH3KCfkknt9RYsSNYpQvWRCKwChm9QAE4iSruT7ncfwAMFPg5GXB",
  "key21": "4vt77Dy14psnghXPWN5D5L3VxsnQMyBLvkFncS4KqWF9Wg7rnrrZH3GT977dDvCWZanzyeNCHHXDv5y4WEcSLw6t",
  "key22": "4ds3GVRY39ddmhqyP2nfEnk4qHtxG7dLTj4Dx1JNLKuUrcJKgpP28Cn1Udu8b8gXeBFMeNgMdQhdfTMtqET7rgta",
  "key23": "3fmFH9TJ4Esv4HP6Aeq3517eq4WNbfrQqaCmUfMTfgdh5Roh6Qk6emJasVUyQJQe74fYDxA2pWioMaZvHxodqqC8",
  "key24": "4cQdMvtk5XiB9sh4VGVteZpeKYPSECcmBWoyd3zbrFYTKhYe9jSi4qQmPeFRkd9BN4D7m5MaDRW6fkoYRVWgtbTa",
  "key25": "fC9XXgw5coNTTnCakr3YiTp5XB69J6DJLC3MbdNyG4BHTTz3dBEK8yjyc1rKq8KTAMp15Q8zHSbze4CwMoSJzFn",
  "key26": "3ug4NrtRajLUfbupz7gS85G3KStBA8jp18ZtoqrPAc6D2NHWvfTTfzDp66eSE6aJ9xjRKrjNmLQba9kStumMFWTn",
  "key27": "56zWv2q32CiAR9VFpjjhEUvBUfXBhXfCioBhuRKABSWtzYVPKMGXjB78J5EjgCMcUBGFP3mSX9PeYG2rJDVGYNn7",
  "key28": "37NhDNMpSX5V3eyx64jxMmBTkudHN76QotDKpEHH3QUWL1Gsv89sPStQYxPG52JrpZHtp3qv7hCgdJhFeHaxqvnL",
  "key29": "hHRbKs8GFd3N4VNsKQ3zDj4sHWLcZqnzceXQedZ7wgJxhs5oARMNaQtj1gSdFvhCvryNB3ybrVofND9Tz8c4s4G",
  "key30": "xFLoY7tfhCKefqAxLQv5jgHM9Y2CSUw3TshuVsUitaUUqki8TeTSKFzFDyZWhb95TEFbc31Eoaf6BMzutfuaqgh",
  "key31": "47S6LXvxr3aoSxhmnu71hoVcA8T56EM1BG2BmFqXRdzApxnRCZJZKYRrifpa5zVQokYuXVy9nLjh1gG1dNgK33cL",
  "key32": "DGUysEX7YsgxKoCHBVqBexv8hrMQJL5feN2BeL18pRYbCdttwBkanwt25nrqotDbA2kJ1qTrthtprzJWDtET2wu",
  "key33": "2affcWtw23RR9MdTnJhgPqkZbTG71AeD9PTqY8nYXf7JLXq4BReoukJDqU351DnU5CWm9GobWrAK1TCkLjWbdKwT",
  "key34": "4E82NLdXbjxSfbi2C7Yy7Ex6SSY4BUEEcBgmKFEmvdJrN8iQyJ7abyFn6Pu4v4i6b1aTr8V1tpCQZe3uyVjZVf6P"
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
