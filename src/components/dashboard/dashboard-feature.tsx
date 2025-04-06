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
    "5CcHT3WdpxvkwL79dTDNH3pxCvMoYwYoVrnpjSRVas7fx3wbVoHC3bkXwZBwrsCdpFGzjyQKQPHj6bWuyrAuEnuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MCG9rsQZS7c85gWZvmRmB8v4EVnLUkMwn2AK3hFmdkdk7UEfhNZ6w76o6Y28wCaKMYDfKX4m6UrsZcoW5WbGQaz",
  "key1": "3bTWBxjSLfV1Wf3716K15mpvKwrfQeAfFmH4ZXJxzNCKUTN4EXKnWYY4FHoD72jSUZ2Y4ye77kYA3rSWy9gzz6ps",
  "key2": "2oqRbubDz4qYvThXMeRprswrhJDVwvGfUGqXJMybHUjtwBLoQ6bHVPmJyDCrmnd8fNx3bHQpjNK3tSf4gmrYj51f",
  "key3": "5Zow1QZsu7PoCGnJJeynfy5upYuZosY5nvcUPNvfXCk9feFCirYMVAMCTFghtno6tVfcmSjvkmXwSpZAwSki7s1V",
  "key4": "fQrMUXKZ4faJFUgTBrJY2TvSYwEekBSzedneZ1AbnE8pY2QsRLzuVD7eHXkrQJV2Aatsib5e9ACScuRTw3vLQwf",
  "key5": "5Uz5EtLAAuYRACabXMe8BQMvTVUGN14g3ZpEfkRAHXxK68gH2Y3ruL3Mdt6cRPTrJkGPTNrscQTxoZLtJjuoSTck",
  "key6": "2GS7LTJz9scazc6zxt41ZGLcDD5CVxCCzbyEiDEWDF4a3YwubGSo4enDd6A8kYv1MwC258Gk9Lx2ubDX8Cj1cR5C",
  "key7": "642mgZMyYmm2A5B4j4KfwKMTWR4FDnyGcnCNt8QyTeCZZRaF3HwZ92Vy6Lb4X3szpskjdazwxEtxUBnq68tCZBHy",
  "key8": "2oAboDdjfgZwgT7Rt7H9sqowivHfCWNV1aXXf8ThZ1Q7ZbxJnU8osCMCaZz8mWW5ecdqBT6pcxDZkHc8ARZGcHaR",
  "key9": "4iieQSC6nQSkikAprRsVS6iYZxCUNVUXbmLL26zBtKpVMS3T34Xzn63kfjTQPFaQiYorkycTQiyv9urPZL1PXSD6",
  "key10": "2ztH6KcSRXruG9gKYtP6E6dWfJ2AMcuA2kw2pdqDZfZbmw6grgBEv2aLsGeSMvmtvY2pJyJKLbC49HJc29aPDxsv",
  "key11": "2q44jbyNycgvqWfBVwe251N2Do1StVtW2qZcAKNQ184GhR3acPHmMoPM57pkSHTyNHJUaud5vzjJpxhc8TGNPTgV",
  "key12": "Mamdy2oEFdUzGRNTbYFTHp9rNuyTDF9zrKE8nGnzmJTMVL8xwpmH78NQF8zuXkNDow7wo6ZsCUTyJZsaCqgkphy",
  "key13": "6Kxsc3yseiu56kTnY9RLAYBh9vgJdreDaMdfchzRq5YW1xZ6HxLYUyA6hok98CLnN1f1wJnenXRTWPF6CfFwhL2",
  "key14": "4Ho3eVzyrtuhKYzBAhjVctVZsrbhvTCGFbxgMPiNFGKgsSRrDYkGxaqsK2fA98EuqUa59YS9sFEwXgDc9ZfaSEaJ",
  "key15": "46cK8pv8wDghEweRLvSyJ3Krs8fwAqhibLawxLnkw86YfB7oa6STUCmHcPCZwyoigucr8aHApDerHLTHA6BjX1Uf",
  "key16": "4eXdPW7gXVRGj1QfTRuEsPMjLkPnHwUXRgwADJDXpymtABq8SJH21THnG85S1hP9wBwb2gsLtwgGboHJhdQZzWvh",
  "key17": "2hGMiATnKT7XFZ7zT3Y7uXthzRLCV16uVm8CGy5jHDkcSdr7PUHzcaTBuRhDXUu5iVRh8gCctvuNymePGpFVtoto",
  "key18": "3UeJwP6QH6SDKpLm7mmDDs6gobKmEJFpwxQ1QD6wDa5dmtQvE6WhjmdsZRgEuN2J8T4AhtDFWgfy3XDwXrTHep8",
  "key19": "XcqiUhuwoiWj7FgfV1FpPLrVihSFWeydwDdc4NPSfnUrfEZ8LYNJFMDELhT3r3GJAGTja7KtMdNKGd1axtAh88q",
  "key20": "3zmY7qRNhgSPddcy1J7t4tx9EHSZp1aJFSyJHt8CCCcpPbgymB1ZpMgCyssqXb86LVHTdBvLm6NE1n9tCRRAM7Ae",
  "key21": "S8LEjcihj95S2Pa69cKDSmXi7eJ2WiVHUY7sY9ZFYrRJAvXPPs3fQcFUWJoDw72dvUB2Uc5apHeWVmWZQjynC2V",
  "key22": "VCGGmeoH5Tih9wTg45cDVnXpGYMzs5vwqo96BgJmevdktsf81yp2PRuiKRmvKsUKrks2CG4ujtXegtaKLyBCnjQ",
  "key23": "5B9RobqAD1Ejpe5Q4vy5WuZhVLuR1F2qvrtqKKStT3MyuKxpkCTXmdro4uR6gYEykN6FFakofuayjMc4j4w9LiD",
  "key24": "5BrYpStGiM2CCzBqtgseS2ZjSGH6Z3i1ePwia4XGFk6RMceFQ47N41t181HW8smkFp43ejuKnufz9B4U97sbnfjJ",
  "key25": "4RvwgGDWVFm1KbiLFC1qimZdRduFE1iuwpKNgvhxxuHHB7osJtF6fSnwzeGbVS5tGpxgM4fnAYnCX9W3X1NkGRNY",
  "key26": "3GoPMxAzEByWb5Rjm79qmPSPbtMvFqRcAKjh1axY1JGP88QxoSBuERoEeRhDZG239eADQbm87yiYod1XSZxWWD6X",
  "key27": "5hoZHXUXfCxZz4JKrehM5bbsqhGMpBZtvP4NqVEbrzuaF6R4wSVgXmxaMi5SPdqDArJayPqzDRHHgixvYKKsnqwR",
  "key28": "35usmDy1niwVFNvVSE5WyiWu1kduKbyBErYgUx5XZW8VXFe2Eof3a2fwn9eNQxJMqRWZmyaTBjpTZkJgqiYBLWBV"
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
