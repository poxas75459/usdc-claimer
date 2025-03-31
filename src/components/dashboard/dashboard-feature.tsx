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
    "4z7XVHx2oYfAkpggpdz8TstTQq4HWML5cWxKS9AoDyyRcBn6q1DdRa5r1YPrWMW6yjX1YzQ3sCfhQAjd9kE6xYX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dmBL6JEH5Bvqrqj5BWAMxSYmCSsuBDg8nDRosRHZLQ3RdzCFgnGD368QC9bAKxviVin6hEjFQihY34vnYyDKJfi",
  "key1": "Y1w8QdJ6BPx4ZkWL4T5esLn2i1Z8XXKazAksAPaLZGXHa5jrZtiEzCaLoHB4bESTqTpvpZnhV9mrbMSJ3h2AQyL",
  "key2": "3oJgoXpwS58iGmPFXmNxjtGrwkHG4bUCTyVo6jCPy3FjFXwLTMPYoVkhc5w2TdQd48r9vdcAweYxTzbN37VKw6Ta",
  "key3": "sRtzepVHvWHWFbdTkNJwzpNu4zxhguBSGGrmFKUfPX1FT1mmFnRZqUR691qEVg3FSLjegoFWXLebhwpqTwAXgXH",
  "key4": "2UnRPvbyWY1kWmqm5FxVHvxr1WqA71ubAKXYH8a2ekfULW4Jk1w7ZNjSct3GoinXzvP57yeLXPW8NMFDDpEP49cT",
  "key5": "3XEoS6t5t4YsXkRuCQbUuwg6g74RREvco3NNjEqSW5fgT5mTzGhZn23du9D2tMgzSWbjWTGU4LAocf9SzqNGC2S4",
  "key6": "4u88Gj6LSk3wb5BzQLpfmmthHtpJ8E5h4TmAxJaVTuHswdgRp6WTfSh7FDhXHELJbigrMxKMLi3HDqVz7nJ152JF",
  "key7": "2Y9pLLEQ7AH4UoUEhnc6ECrxV4zpXXAUa9d7MCGghsjzqk1F1wG9PC2oDBBinQsQRRvZSwDkscDvfeQrSmxpYDnn",
  "key8": "32Tiym8wmHR4h3Hi97oUB8ewTQVj7VbUZg5stCVzZA1K26jdmt3tXxMYfkb7ga5yNG4kRf9v4aLW8QyUQM5GwdSo",
  "key9": "2RiXULiqJgDJHDrMzH3wELwsqGpyT5hbZjAimzS4atRzCcKxj8GjLBtq7EjLpwNhQrX1xEe81jSaFuVDVfxk4idy",
  "key10": "59vV64TmPuqX6pKXHaNCZJn51hRS1EN8A6y5nq6R5cLcxLcpWWqo2ataVPWGNVDyhYG74cLZL8QUwHnfKZUkzS71",
  "key11": "3edE82UbBaXmJmVxoREv3SSb8uKHftMR6kPFPbaBwAmFdDgC6FWN7CEiBsZCJq9ZfifM8ptMcCGZQC2SD3uMeP3y",
  "key12": "DzpfNobjDnwTn2yk4RFoSLoBKcR4pXCyBEPKQqo8Qvus41V99EkMuxoLHeRYcsmqZWT9Uwa6PaD42DPdLMmthif",
  "key13": "4gPAABiggJbgBRNdU8JNnnyJgpAjqfR37EjC2Z4Y5K7KUAznoJv7Q6S2zWYZkMtPfmkbVEqWH2HR3UApkmZtqJJ9",
  "key14": "2JkdRKE1LjnJ7YwKwcX2M4zB98SDSsBGpb1nMLeZAnKUajHRmzEcjCzmEp7efFRBxc3g2a58LrQtBnAn5hGoKh1r",
  "key15": "4N2k7WV1RmkxWTGXpCj7tMvwdVmeTarFMfRNLqa8XUK9FKewBjdg2WwoEiveyfwu21o2HrAg6Ah2LTJ2P8PaD5FC",
  "key16": "5ERdDmP6ptrQi63FYAxkse875bJwHjtyDBG6nA4o1p3Pr2SYkZiRqXHxGoeX6JRiZ7ASnzGjwKSptMEsK4KmmT9P",
  "key17": "2HDLwa1ERxryFdQbaPr8HoMcQCBJxRdxx6pxfCSRuZDKEcuC3P2qefHn43L43BQJUCpEgnk6JaUAaQs6k5kLSWhq",
  "key18": "3yxfuQ6hcePshSARCtVrvSm2aydZCbGHo58fuDLbhSEG7yfGX2H5LpHWvq2LvNeGZiZPFFoP9ALgxsb6K2FX2UK6",
  "key19": "3KZXcCmRTTBFzD4xt8Wmz8FxxHL9gYioGJeT5YjoRKsmH41GHhP88WqwsbEPtASYcvxrpXhBJmaGnrgfFXvmvSi2",
  "key20": "4jzJB7XhixWaYmeakrQSDpBfKAhPNHfbxuKWnTAM7TEqhmPVDLiyn1xDPggiffsBxVL33Wc4mEr86VubuxF1ZWE9",
  "key21": "3czNBFLUEY9oS7dmTnFRpiou3NttzxzAzBj8TvWMj5VG2j9TLfvYAcw6UEPmaMFAB3VtNHAhP6JCqfWr1oczJdmp",
  "key22": "3CniqKfRfbCK9fBqrVHjpph7CEr8UFkwCcq92Vd6a6xvvHDFtCCTxpmkuu29pVpr5zCYy7CodvpsKy7J9fb8pUmd",
  "key23": "2Xfsv2qQDPD91PptvceQdW1br2Aj55NZ2kT6V9Kp2DKxZfPxV6wtSqLLXBaboEVMX6ZycSQHjCSiKrGCGKyjG66d",
  "key24": "4ExonSvFrkuNUAKmtos9znRUvf3ojiG9zqTcrVfYTZvPY2oAvpzxnwMKVFvNs5Tw6DXu3p3KEacRx9ozx6Cp9UU8",
  "key25": "4mD8HnwbcxuktGBCYsisN2KogsqBjrPHZ3fdiAV9se9jK1Vjyi6JYLYWqPrksoGEzV3kCA19raxvN1Yog3xYFxTZ",
  "key26": "EvAMTo9Mv4zuxZc6AuTyN4BN7uxmUVshSuncZYF89iGGxF8KaV9tfNYTupdp3H7oThfw67WfG9sUEskawghTAf2",
  "key27": "4HcaxNqgDwWCj9v6xYu4q3zfGLTEVo5J7MoDvsc1Z1wn1oKy556ErgFZbLkWoP4RQzVNn3ztKYdZt21yRWJsxnnd",
  "key28": "PLJYF3rkd7YgY1AkiVyEyKqVwMBmiRqEkSRuKtEwrR3CZa1JhCMS8KmwTtMaibNGxWNm37K28pru67to1UhJvxf",
  "key29": "2wtUABJcMENDmMCdTAsZapJDviD7dGS4AtH3KSsNPCQ2VNJaSmNupdQb3SgZqucEVsaWvxW6TR72tJmAa1DS269H"
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
