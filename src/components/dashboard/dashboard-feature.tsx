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
    "2AJhxNb7YZnZEgPVdpe5Lgm9eKVp7E3cuEyparPseiqefThQdUaJaXeM1bmXEZthbfGzJWWdVhooo3Y4NSRp8RN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rj5rwPEiSE17bM3PJRd8Tup32dhmaJCHuTLeBjHuCc42CNVPDZt5fiVi6twmFCTESAgUn9HxsnMSZrmDDz4vbLu",
  "key1": "2maJSEqhGjuSnmA2j8oUFSQ7dWjTceQPKxXsaeRphY9LKUa2hCFq7YdKpn4tK7HEdNNvat7B4e13ZU1YxerWhW9w",
  "key2": "5bQAytyLt5TH4WP1FytruUyZDoVB36xzPJwptFVGTzYJD7gWDmo6tiHwDRzpk18xLawXHQ8uLWHrUyPoKB14hoxh",
  "key3": "3ajgt5datAMsrCBuM5V614EudPFgv2MKdDA2HPnQ1ARUJV1s8CvBnD5hB4MK2H5DfQKMDv9NVAY8Mxrj9F6qVbVm",
  "key4": "4ggTJ7EkXtzNWE8BCV8Z5SxETFbVyzi8FuVAgZgkR3eDzggrdJn5N2NJ3i99A3kWXijhYRDCU9b9EytWT1Zv3mkL",
  "key5": "2HcZPZ8oQYNA6S9xZ9SkQAkdwmzn8LyY498wQ4ihNTHo4XfrUKUhwRvYx4ZgvWFrzvntDusQSpZ5yqjown5XfHpJ",
  "key6": "5ESaicVzHJVMRdWRQZSK9fc9ronHXD7XB7bzr2D9Acfdgvn2ip6DHyH8f554kZSmJ5n3ph98LdScrizfcdYp6KQv",
  "key7": "417FPhWmFt3Wudg6FAZTBXG9tkr6qRqjcxCitHDyG6p8tik2WtrwoX8xVAu2p8FeWNWBYkkDC7iZwwpRfNUoT5NQ",
  "key8": "5ScijqunTQafaJAkYCy9FTq3nafWq2D4WNe9JdfV8cWP4dyPj6aiJHTiE3QcWKZTHvWxKxzKCfFkSKzdr4yGGJE9",
  "key9": "4B82bKDK6Aimxp6Z7KWAD4BRZUmJaGNEoHiR871Vrv5ETCBY4FRXbByQph7ipjgW7CpPvfrZMNjTQPvPWMRDj4KA",
  "key10": "2dWQBWp3xGXev3ozQPHRgJsL7DmnLMU9ES2vAztx95CGLkP72xd9WzE5FggGAb64k3dFC9zmkEG74MBNres3E7C7",
  "key11": "2z4NGV62cJLk5D3iCivn98i2rihmFdmp5RoLhQxUGVYSV12SQzqVqLBedLVhr5KkSTfqzRNin4aE6QujPopwoq5L",
  "key12": "4rVeceNuv2VueoiUzvGm742Pxa9xE5P6JwANwL87QsXjVXXktBHezjMMVtJQ5jKkd6T83UzjpUpB8dXCix7eFfky",
  "key13": "2bVDpKmBJLSjCsLA1nqxMcBGKiug9KawUsSCS5mV7kFtPXuPJMNn9c1ZfiR4hVxWisSbaUyjXcGhcHVqCVJbVkBo",
  "key14": "HiicJgrZT7GubwugqrBXPQ6PUQdB3Hx5cg5weJC2pA7P2tNQx3KBszow3DAjpExZxW69kwEcKHSSQWi48sogM26",
  "key15": "4tBJmw22R8koi2j8rbpzn8DesLiiFGrZEX7FEbncCrbkjVz9vEZ6ZcbMXrWjzbL9HDy6x2skwf4remziRzLy5nY3",
  "key16": "3Ua4rHYQhNYWCWskj2uUnsmL2MEvoWYz9vja4KD6tsc1WxK5FVPc3xQZ6etJw65siPzZpPSkKshYA5A5AtK9YjPA",
  "key17": "4ttRCjYoJm5tUj9n4C4VLKkHsUpvYionfjiPUfiA96wJx7ieoS1EGvbArhwZQLeHgodNQoB5sXJ2aCkiFaeeW2Q2",
  "key18": "4PRfAJTqVmZRWsjkn5TtyMr4F5rZi1JGratisWfrNGBLSbst8jKhg89tdFBxziX3F6U47J9wYkQy1WotZammHp8Q",
  "key19": "34Hxbd3N4CTZsQRcNBPqCuHm9Ltipnb6dJkvSudsiZTd6t7iYTbfq3a5vNHWCKn16fuDgtPVhGDrFrzVFniTFc9G",
  "key20": "4ERQaQW9uqecq1zNykkQP5VPtDB9PXRjPjuP5b7iGZ3kVcFXm5bGaqdneyAxvWaDpjaESpK4bLHQDM2kr4M4G5ti",
  "key21": "1m4mL5N8deXxXF2QVU5PhRxuEyZAuMrdn1oXS4hG9VGp2sKqDbtnuksGQSBP6xLrJaGEg2HVLA4FZUcxKx37bw5",
  "key22": "2SaMANv29eB1KRPjjWAnaaE22zuqnLsRJQKKtKUK6496MaDeiry6giEbTgJQx4ekMxMtcR6P7gEmoAmrWpaGjqG8",
  "key23": "4rNyzweJiAomZUy9GknSqD7jhG9nc6fqGrCvsPV67HhMh56uyeutbMVQFxTcXz4HwqprBB5yZdFC2DQ8Ur2aj5Fz",
  "key24": "24ysXXhzD7EAcm3VsHeZrAYEjtbjjZYJVDD1MwRi7pHaUsH94gKiAQPeJQY13RSW1vCKJSbNZXyAGoGcAAeCFogp",
  "key25": "4UDdDruHGxoBPewx1M3Dm8XJ4CmPcSnaUmMHLDoAU6CRtjfFv8mojEWpAPEhawPdFRiiwJ9sYAXETd7fdihJFGRh"
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
