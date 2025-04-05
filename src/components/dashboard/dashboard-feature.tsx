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
    "256oPPP23A361DUKXMVWzXazLZr4g2gpVsvvnDQpHhiJotZbCz1ztwUfb2a7MCyghjp5xPyk2RXbz7x4CAzH5fSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VJAyz5MNt6QUNGx1XuvAisWit5vUU8PSjU6hgbkTa4rt9FtY7u2HWRDxcZ3iYhyxHHjjq5M7fy2bNuJzVfrAU9C",
  "key1": "41qYAbMzqVhr8sAPb8HnygAv4hv2JNPFNLJ24k6fuhcdftj5iNeinNt5ZLTqy3mCPmk6E4ifzRjg3dgtm1GLGJS3",
  "key2": "4jph6rLnMyu8YdFLcrZYbyV5JauCS44BVpC7YHK6qCFShMnB3kS9tBHvV74yKVwEKBf6ZPHA2iFzjMYiAeHJXs88",
  "key3": "5i2tZ5ELQzgFrJqeaCnR1wdogN6PispfywU6U4vqUHPWUj622ob6uRaJwwkA8iZPzNnB5rQ1LJ43jv5m5PXCBfdd",
  "key4": "qoFBz4wdn5qSRjwJorzoXzALhSYXVR9eUSXAdUvLPABnubGQRy6wuUgwBvK4NqasRjSmBkPytEFiLbxLGg2RtPR",
  "key5": "3awi6uJjxHZd9xLVGahfqqqR726HHmP5VRJszF3TDwe9Kh68gy4hN2LwuRL2JKfnXvRK7RBLy4kHrbzBJpXrbUiG",
  "key6": "5ufeFMmWfHPMPwAWY5ohK61G9Tz1aTWRGprLRqyTYf2WSPSHSAh44CzfoNfgE1oJdEhkiCUcMsBGYZyoqXJW5F3e",
  "key7": "3EBQLgbsbtQgyDdKTXWspLyiMXZijnmYUHuGxU8GqBGXKjyeDuag2BVw14ET6PQ8T9LsRN1neZPHvM46YZc4sh6T",
  "key8": "HHFQ17TdZzwvMq4jxQdhwy8LPcjSYALYFSH1ij7zpkMw8Nf8xwCZcRLBcgqTWrWwpq14WCFQ73FtsHKYeQavKQF",
  "key9": "5bwmaFadopkjDzduFw8smhKCVMYtWWKndtjo1rtCdhCXVXzmyxwCqnVRXSk4MY53f5nNoWc6wF8Vf6xJCccA5uQY",
  "key10": "3zdTc24aTA1TrSXWH9yMHj7q6LZur51RcUB9iaadLFPPqwhxM6qfkKFpT8umEcv6XzXYPuiv5qTTV4yTLcYtKHtN",
  "key11": "3WTfzqZMXqfbXs5wdpq6CS93hzWhQ3P2df2WwtrJzWUdy8ZVNiUKYvymvppX3a3yvXtrTgss9EjR8ZDJCLSaZEiF",
  "key12": "jYhiUbEDteo7nRzGKEDcYNAXnE4v3RGvLiXU2Rgf8TaFeZcKtSR7bV1Fe3a55HMni1JsRrxyNaWQfpk2vbRBXnf",
  "key13": "28kQMXGWVjnR1ha8BoN3yNBGFcTNBPACzEaZVzgCcFpQNswiyAMmQSLsde4i5d4wTwAHtv9gnqtLZ54avPKnbhfi",
  "key14": "EWegKCB116qs3s11Fg6QcGymerGhXFkUm7KwjKh5WhBMarExBurdAwxVxPBJuupA6SGvfnWGCso6KLhFyTY5PHk",
  "key15": "4qv1c8rPMxyka1FZXViubiGGcJ9SsCLqYKXhRbpUVgmnWBV8ZvSrvBKtW2ctcZygXTJYotm9DE6aijrSaPRkQtof",
  "key16": "3FziJYjqkuMVhbtKHg1bXsMEWTe9no9CnU6PKhhvLUmAm1LogCJxnF4CBBM5cvY91o1qPaezsRg2ajHMGYRywGcA",
  "key17": "3E4Cyg1DZdwAiChWs9Sj1nDEcWK8vDE5cF8MSTZAcgchByMc66RwREiRTDiCskMdQtCKeyVeXm2YLjENCWhRdzZT",
  "key18": "4JCqNL3xKtMMUGfzAM3D7AWfMNfwbffxPyjL8XYCAvPh5X7o2LhVWRLQnqCxhJvEojSaTMzSm8h1CHJtCVXth7Zr",
  "key19": "ieB3h96i61VJRhEmb2PEm4yh1KujYCrVuSG6k2S6XNFpC4iRZziQ8sRaWp8g3aZW3wBCqCX5rfaGfY6RoW8vmUc",
  "key20": "ndPkrVoLcq2wAKytg8vxr88PohzCsxqJFnUGo5XGvWF77VeBJpxUy8uENr26XGWRQBjd6daojeSRFyTXa1e7cEA",
  "key21": "3S7HQBP57Rk5znHqV8Q2F9xBFBp1ca5QSRuUo9bcnPBRvGUDxrz1bvSsZguhMLqaHDKeKLdtLk8JfgyA469ic29L",
  "key22": "3Gg8tuoqpkWHqwfgwwhZxYUuHsrYmq7z1E5WtMNFsBqZ6JW1wosfYgBWAxddykju4xoshjuDGb9y8UYFDZP1vLqt",
  "key23": "4GeEowvQbjcgWtk4w5GN3vG3oWHaXynjQtYjk7GLVRkZYXcn4KTRNTyTpvvea1vzRKXRs76egqh5zPzJK6ukHFQW",
  "key24": "3Xz5fqZ9LC6RpT84cuiwEBGdxpwnEThbGFkPKWKEFa7dE3CVbwjRYKeGYPEXPp3SaNGiEq9Z38DkKWJQrq3gYxeq",
  "key25": "i858va934h8GGB3R5jLSTBazHfh16SCTYHge5FGf5T2oEDk5Bgu4DQQGGssMioVxwx3HSaSfMceL9NCKKXfQ9XH"
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
