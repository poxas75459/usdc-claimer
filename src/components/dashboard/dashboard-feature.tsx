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
    "5qFgkkCCtX9sJAcWwMy6rGs1eu7HYqRaY7stT7q8rcGzBwFN3sbTqSP6DX55dbBT7oQxAqMzqvHEA6YEWShic2KV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KA8WBYc2q6sZbjAgSA1pWBUXAGVQMdD9dknoSExZpAXFKKwp5ftDvkqw8SiJr5BRXAhhj79T9Fyxr3bDP1dHk5j",
  "key1": "3nUywqwMynQvBDzvsbZz3PeUWrfDcdrq7kwWPBgkJ1Rkku1CRnTPLpnGDccbEGTTCTpJFuvo7Q5L9J2my9EkdMpm",
  "key2": "4TwwghSqSQpPyYmjQTRaaqCrXTbQB6gCvU2F75acWEfDWGvaaRvMdEmbsyin1VNTGTqrXkzAZJXy7aD6RFZYqUF5",
  "key3": "cE9dnsctqPr3CtAwEmtQTMbJo4WUhfZE32YyWG6J9EQEA4PfL7ZanGkYifXom9dQC99fnzRqpa32tyyvT7hEGSL",
  "key4": "2STCYXr2bNDhaTn3ugHuP2UKyYinzZR1dV6m9RbmtMyxidgJgxPKE1m8mAKeB2E7F9LEY4dmnHWKPgfhorxRgFWx",
  "key5": "5PaC7cW5XK8i8m1dyu7Rak7JZS4mUCtDX6etuHUgwjzsDkgfzv11Xk9RFkERuzESdPq33Fqw2cSua2BLCiibEdNm",
  "key6": "5ZBny1pDXpTPUvAdbWFyDzuXSgh2u1gQf7FcxuRRm3AvUD7ZDpJfhkhWZDjZ27ABNWvvjzo3bra4CdC954CqAVDd",
  "key7": "5GkgEVkPUkVohJrMGUk8aWUhN6mMdDGGDezvL4pfqrysKDoThb9pdbfLfUJhvJjuHGZxJoZ25JakaF7SBajvp1dc",
  "key8": "5KsCkBHTbfT2jVmMxFDThZNAzMWXpyuM9t5oRee1MGFQ9Jv5UiYUJxMkXTFnaVAFvNpPXYFhtKp29gPrVxynJUW",
  "key9": "5sQUm2MHEMpyhs8BAKTExiispAAYjD3PXmMtV2nNEYKA6gmtYTXcd71rpadqoFU66RQzRJd5Rrxq5mzkKP5wwWC2",
  "key10": "4WuVKVXb2aC6BeUgcv81YnVRK9G8SSpCztx557dtdvnVRwRoY4d5KmhEmCy2PUBEQL9JpZnNc1B32cZrEQSZDWZz",
  "key11": "2Mqaip7DNzXGCQjDT2zbQRciDNqcu1Ep6uyaL38AknydqY6xGyp28QdqyGJRA57bM2VqCbouYvPxjxXdJMdu7jgf",
  "key12": "4rDaE6xFYWAP7PTADzLC8LebFVwKqog5vyzyLqJsVWHaQGQkLmywLJ8QAhPDaESfVCbs7ycGEu1SHBx87iYqg1bU",
  "key13": "39pnMtFxfiVZ7JeqYvLRS68dmE1o5DKayK18FGdB4UxBrSH1WMySndb9kLJFBtXc9N3sWeyDzk5oXufqh4BAY32d",
  "key14": "7WheyUHjWbcvxeaBq9SraXbwAcHfMEFYcrGNSB6MTWEDjgNjijfmSmpUT85h7uWD9YyKcET4eFEJpMChNFhmBhE",
  "key15": "3w24vWejX672RhWVyCGK1w9bs6ZYcCM8i349ihLdiXbnLMxMK295oj6k9wSt3cucPteeAkdzcxSmVxSdMTUBDVWD",
  "key16": "RDmFzasrDNis73GqqTEe3H57SbizA3FoYCrLQsFZmEbvQd1FCeZ5TNYPmxXPv6p8nnvk93gzbw6DwkCxUQyTTmi",
  "key17": "Zdm5RXFTxrwKFvsCRurhVxsfjUNh9UEWj5R6dy1JZCwsDKqJpykt4AoXu7pXDujmPSsohB69qvpqp2BfY4SPzuR",
  "key18": "3rXaLaSDLmrpavJHzkg2ZHu7pRZAX4S7eMFXxLKmhBBgGLks3bZjRMCYzN9FXx3mrqgzzTJibHX86JAGFrskg3Kr",
  "key19": "3Ch86gDkNJRHYqHxnK3NJ4syWdovCQ24cZYtGxmxXoR1Sme2Fida4MCiaMxc3gZdcyKuP4utm8V9ezdsdQWUngqs",
  "key20": "2CfHugQmvXi1yop8kzvhUWR1RkabB7HVPorVnsQeKc4fQTu2WXsSkAVsQ8bdxcsuHxJQNRPB6vBihrC8QA97vmsC",
  "key21": "2KExQF8m1PYQckdDjonfnYNoZRh5xmmYL4pinapATbcg7MYFzCPztFLBrLWJFy6pn6VAvJZ7o9J9zeriCE9u4QnP",
  "key22": "65RsAnRZbGYmyNLhuSYGPQyfhV9s1KSG156j6jHgZ7cxp6w9SBYuxi5BhcCG891NpgnaHKuh2Z84SxLsupSonPSy",
  "key23": "3G7PFQhEdtFC18NP7JqyKfxAG524o2JHk7xvegcyfqoaXz7fpeqraPNqrmmWNp62iUvbGvx81tyceFzzGjyFBjeA",
  "key24": "4XCPvBmKCqGbSWMQMBqkyaG4j8Ub8emTQ2YB3BP6aLh4fZqPLHYQrRvfejy2Y8hYL8SUEW6vHNuBzw7eqdd2iGs7",
  "key25": "9mtn7dZRnhEjJgkirJPq2zqqBCUFXaU9jCD4ee6rn2RU2zDwSXVg6LHnLUc2xad3HDxJYC35PMMr4rfg78bmxwX",
  "key26": "5cazYRtv1KkanbxuRNDpgtJR6DvkJvfi1pxYGwax4ibByYYyQi2nBF2fyJVRu7KE3s9iA4WMDvCEEidbYYZzN2ap",
  "key27": "2YuegUn4iChE46Jq6VCaCCNvcfuPt8CLZ6piabsho1GoJHerxCR4S9qmPZFLpfRXULjrsBXaT3U8KvVDrJ89kg1r",
  "key28": "4C51KoGXR2h1faLxfMBvENxKicSZXGx8RnTY7rLnKt7757ZhaJ19sYC4VVXNwdkRs2e4dHD5E8fNG3rYJProBvQs",
  "key29": "2VDXeYT4a8bpUhFVbnULs6JQUmPuQooWxkrfudZyvcsNrrZgBNyMSsjFK183sdNoAo9mXA9U6aiCzdcnGLbG9VbP",
  "key30": "WfGjMhxht9D2HE6mnP8z1nT6gP3JroUXEKNBcddu6cBrqcdK6Y2uxyw9aeB8gC3oepSpmPotYVbLUAUqLnuCyhj",
  "key31": "3VgTyPEyjdS3AbHKVz79p1JeFifqZoDAt3NTizbihF4ZWfXvDXdoh25rd3jrzNNv1ELpcFi6iY7xRBouQDkCX3XV",
  "key32": "66ndgi4fNEaBPtmBZnf9L3uf5ZrbXZU9otXR7jKK7YcYu91LnbpuppPrDLLtoV3bur5Tv3fknVkJTmYjjaequvwm",
  "key33": "2K7ko2GCpGKk9SqMZLvsJoKdNCzVTSFv8ZeB3VjoPMyTkkLPCXzagBDiKDgfBMT8mr6iFYzy8ij5eAHYWfEbsEsr"
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
