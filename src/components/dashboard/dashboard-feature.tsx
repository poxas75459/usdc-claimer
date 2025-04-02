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
    "2WEmdB33yRfgbLngC4LmBh3E3gWZpL8Wvos67EmMfrHp2277k5qsvxJENWgK8iyPyLUwS4CJ2Qhu4wFoBkLYwGgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YSZ3WKNc8tsF2Gq6Uvn13Lcr1xpTMujw7R3yq952WD5VzLYde5MuPjP6Z3Euy4JTfYXV1DNaXEj4bP81A2io6Fo",
  "key1": "5RxCB1YVjnKW83umBFAT89Tdx5ZnfWDhohTFUcSdbRii6uoDuZs87ZkScJwMvHwQ9f8bA1mJY8bVkYhuitktSYsh",
  "key2": "5iVkSFFM6XsRRhdRZJfkxfJ8LEhjibEWqFNUPVuFtCXJ8rg63ETtinbaVvpN5MGoDZY58hKM1ZmCEnybBmTixEdo",
  "key3": "4Vo81s5q8qQzbX2o2AVotZSND1E5QRAUrhc3EacYCC2ked2cX5kU5UpwG4rWdd3mU7D3E9ZKiFbGtYRy78p9ZieJ",
  "key4": "5UUEnbmzBPesgzh9CSPioukaKVd5LsEv1wTRLYh25rxM9BDPrGxgQZMD6wL1wAjYT2xW3sJjHTmvYnxQnuJbakDK",
  "key5": "gV4qHsFPoWUbfLRpyR3suQE7U7hZzj1q7NUSP4iY8rfMS96L8isd7SztatfG9TCR4DLR6NngX8EZmEcrMyZATrX",
  "key6": "3medQz1AvzGaxFjer6PFUaoPXpWzn7z31r8M2yih9nafEFnMNiuuhvGgYZyZQCYkiqpR1v4gAUGyVGKEU3i2Me3C",
  "key7": "4LrgR8F6UtDb9u5iPeSWrKUmia3pCVrgakAhKKAhS6yT5USm7ALBSRmfXFxKDyys3gvKdUb1Skwgq3yG3c2PaUHP",
  "key8": "4bJLr2tC7yTLCFZF2kM3k9n7av2zUaiaZ2RyA5WtaxEMeL3TV6aojjqYtoLE89Pvr1jnBZz5K74thjfy55W4gAzp",
  "key9": "63HySWaUfCrhVNM1RHetmQmPNXrfgGYfmDjPAW5fPpRf8iBMXLjJUrydvhWferiaG6tz7DtWdn71WXovpfM3H18h",
  "key10": "3xwopKQnX9stffmvbiGa8AbJF5iopsBnXjce9SVHYdubXfkaghAr9v8cdpcdUtRVTvpZDCDai5wX3sGnTgQgoLCA",
  "key11": "1vBVNrLiiBSbqTCBSUDCYArEH2vcLbeBibJWzmdh7YtjJ7Re4gzks1kKs7ZsvZNZ9TiBVF28G8UkMYfxmskZRxr",
  "key12": "2reyU3PaNrD6Gmz9D9yMCmZRoqHiKTjzpw3fHAHUYFi4Qp4m63GA1nE3mB1Z1RSQ5Cy2pux69TmoxqXpJ2Lk26t4",
  "key13": "5aMciKbDbtakivtD3ERw7aw3wRLEJGRLAWqoVrgNtebSSYWrKZpfmAiSjeMKedNxVq1FSs31Wq5LHpg23SZDbtE4",
  "key14": "66uoRA8dVN4MjyjXkWEZaSUusM8m73XRVXAMZWyecyPoYCD7Twn6rvFDq7KS9gkNa6fKsfBzJvBdVHKdG2rrbxz2",
  "key15": "5zh9UzfAGMJpKR8HDT65neyazzMsJKwd5BAhRKbKF13u7aDECnB2i7N7XV37Gm3Qh6abb6C9ojXeCMGDqcB9s7yk",
  "key16": "3B91QXX4AVQxkPYSM2ULXsP726pUoQm2MsfyBEG5kurdK3jVDzieZPS2B2H5JtzY2LpWuFiMsZExevmhaEkFJNPy",
  "key17": "3W69iaeQ4JBZiGpUDowxMgnX5rnp9QFumyoRyi1Ss5f66cWScBMCY6W5B7ePiDMVBNBZmS2SqejKvTf8LjemUxhq",
  "key18": "4FDXvuBcn5pvyaSkEGWPASzRhzo7GAQhdeeEfudd5BUDDUbwUZhb9j23pWZMqwCq8pJ83oUbSUQr8w43pdtafViV",
  "key19": "51SUjCTrEbYMEiaoGu9dr1YGCmgrpN6dSFxK3gyAfmnPnvBQu2KWTZiZKnLazqcXsK6WmpDqgVHsQq1BcvPEHx8J",
  "key20": "9esKDUx5GUYzMsVD2W1XPXoxVkr8HCVCqXWTuweD2quCuM77PXXxnMNjBqGHsXYY7fCaVfkTCNEYn24TguBE1SV",
  "key21": "4c57eAU6xBp6XrpSMFWys6HfkaiPWC77KFGAXDKCD1RHGh67QN1sSYyhm6AHshJd31FEG8ngPwA9mNNS4Myr22d8",
  "key22": "4nMCGMLsJnR6zbB1ozSJdScdBc9wfm4UBc5xnefCTVTtNk4LuDQn1F9S3sBZeToWr95T2ELJ8g74Kx3XzJbS57V6",
  "key23": "5QNY5GyZP8Wgu55dcjq4ZGerTPWNU2WGXP7GBrQgEBLhdXBAYWkvbr9tkEKzFp7sRVaf4KwUwAVSFdPjYs3EKPsa",
  "key24": "4Ak8RBrVwkfGvtdmJiyHZrzTsXYiJwvdfotXm4CvPW9Q9ftJZ9fNoDRUurokcx5a1VsmCu6ab5SZWTiyDFrfsUat",
  "key25": "2PebDavGXc45sLFnKwa88NmTADaQdpzP7m7QABbQwK4ZzJackXWBbU4omtJbfJu3V5JS24BNumibrfZrcVEWhano",
  "key26": "iCJHGpQhZzZAsuWJ1keeuodkcTYDs9ZALH4HZSP1V2o6RiEuncRRii6rPp7iiGaXvCh1uQFavp7NYdCKghWywsC",
  "key27": "2c1xYUWECY1qcCPxYACJf34TZ3x8EztPu9abcAZhP4KwSu3SaMMK7HzwJx3GfaZDivuxp8o5nhdb4NK8iPdS4GYP",
  "key28": "XDgDRJA8QeiQQa4MCAdLRt8fm5139cDh1pUFRtqpohSi3E56fkKewEkhRYyExCLK6p7BHiRFZSapgBtB664s6jL",
  "key29": "rNK9kUgCJ1YpLHKT1mDjMz2V7VZ3HYzpskTzP1MVRJNts86BYifBzQu9CUvvSX8vVQZxPSZk2ZfhjvGHyh2CQ5Z",
  "key30": "1z79Gm5ABTUTAv1ywVHPpPQfvxqNJcf75k515Jmwokcj3MRVhavHco7HLp6nffVBiqrxrei1yR4PGT6xUmNtnn1",
  "key31": "SAdFcTTMhervhvuwf6vQHchbzE8fSRLP1EFUCnc239knvkYd6xgraUpm745ijvRozepYA1oy3RQgGAJy71bQJgs",
  "key32": "2ZCYCAx2JL7JQXoByWNge6nhnDYTftvziy4A9W3ymopJ75ThSz3nvvYdtFdjYwAPcXCXGPwRjEsT6UyzmEc296nF",
  "key33": "463LeDStrgCx9C37iD8rvBprTsqMyj9bMhirD6iGGwFh8fd6qvVsdw8diy9Fzqg5jEXGpqXaafsv1zTosadnfA54",
  "key34": "4RJQGTZpEmWFZJu1iuYdZXsAsmDQiJDByoZFqszKynuzRvSZmXuqCYWRQQ6oBDzh7pTvPxwiNnApF8qv8Xn2A51B",
  "key35": "41qYewhmoGWGgoqfkDcxdrckNo3HuQxRspwkK9SgNXpTiZo7K7EF1Fz8ag7wtktWamVNtPnheT3aiofsQV7cjvDB",
  "key36": "3oYFXQ6NkhF4Fqihf1a2PMoQ6RFk4Mq3gNC8SyiW8GtiXgWf9BtbDNU1pF7XvziezWb9qWyUrRFm6Qopo2WKCNJ8",
  "key37": "3jnEYJLszhTW5LVvkfoPxowKcHt2AaD9L9WxsAa92QmGHFpCavaktyeuN7xbRs9UfigtpfZkdcr4zCE9KZhCrz6n",
  "key38": "3djbXM3R6BndrXQwAFM6UphwVTrXBBYYuBDweR2hYBiSikCib4bnEZqcviX9gLbx8iXhGS6NSSYWc46PV9uKgUz7",
  "key39": "5vMfsx8b59fB2kude3jDRUKqjNHEejrb65vqz1TWVnSnxfQXdFXMJVdHtcYA9qYjcuaM2pHkXhjjGJvjwaSE4grs"
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
