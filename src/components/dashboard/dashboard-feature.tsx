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
    "5u51WpnQQf1XSQLpQjQnHutycsWz7v7Y7NfNNHraMc7rdm2B3VR1AbM5DQHdrs74MzHND7D2aDxbKX2ckgPYWBmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eV3fARkth2jaHsM7cSmhrWJucm5kx5AxTuTfJMi6qzupfjJf8L7eiPcQoBEakb7JG2vfA9pHYKjb8BrMhifDSoz",
  "key1": "4g5e1QmVvEEbCE3ctptfoXWPQtR5MSJNwM7UdzQ2g5n2q7kT6o7XGVav4qTo7Mkp7E1yZdhTYRzvZgBe2TB1eXS7",
  "key2": "2fYzmvC1HTUvoSJ2PwYpiw73PPej8qQEwxBAmsGUpb3vvGgECzNdqHTaW7gcSSG3RMRNsTZNv6xcyYyTnxF1Phnk",
  "key3": "32SfPUYvWDmpqD5ZWYJCFGW27VjugCvGFbXEYPa1ngkbbcapG3PnJ9CsQcR7DUvwRFRnsm81X1YwnwKVuQ7FNYpF",
  "key4": "5gGEUYysqBpaUTwo2PkdcbLeXN7F9amWxuJijFNVfhveF7cvPBZccdZkxKmZPYN5GXy8XRaXw9stanZiPeQeV6Wu",
  "key5": "njNxP21qyPvSD8wau2qUMHcvbEfGBRcatZQW356im8rDC6hV7kfHEwFVhMzH3i12c1CGFGrwt13Ea1AfxZnCxvh",
  "key6": "3rztVnw2WENsi667yUFYBe8QZJFDrWtfH5gSyUv4hpP68M3gFszhDRQcbWHHde9iQTgcQU9VR6g9TydYZF7SbkGV",
  "key7": "55zi4v15VKTtJhjc1RGyCBRqJ1TMVrZvjj4cAVw973K8iiqtYStLSnGtJ5yzMmf8MftPYUFhwJWde4ZtyBurAd3T",
  "key8": "35gjAwjvbgqdiN6YuQm7D3V11MscbmYrWSHjnVa9ZUKF1AnHfTbXaaR5svYG1HTUNZ3jaXkHrqzAYkPoSv5XB2pN",
  "key9": "65Jpewy78uCULVFV45QrRYQ2t8unVTMWdtdpjPJC3Kc3zaQEYpFhQUKDJscN1NBo1CXS5CrGRJr69ntXzGP3brg9",
  "key10": "3nUgUCppi3Na9WtERevScpvoTLBY6CMvcGAc3qh84XKLdwFKNekAntUbbzhLbCjSkWHzzTXpt4hjB57nS6YCPJT8",
  "key11": "64aV9WAgDnV7b5s68ZwMLrJGksTVtK7tB8eWPRfCE7kwd9sqDcjSbJAJqBauqAmLR6n39khmyQE7enFrcmJvEAUv",
  "key12": "4AtNT9j22VhyA8iedJpoUacyDv94ZcPbpTkw9AbSeSxJggmqZL81kutchEc33VmLKaGyEwj6TjSmK9n77qVyhVfB",
  "key13": "4efPEpipMJ9mDJxcKGHVA2Q3x6RLnAUJu5M1NXrMttHK1FL1oqdfXP8Ryi3cigeDrnCYQroisdqaUgmEMiVa5d7U",
  "key14": "5YKSFt4PWASvyDpTuCsQKTtjMpxcg7GMzocve9itaUKH5BsBXurhhLwUn93dHYBSDBRpykdsoac3BBaAYW6HCaya",
  "key15": "573f9ViGNYqDW82xGNdtzGoypMxvnxJ8VHdEaYsSRfXwXDmdRbwtsQSnuZb3usjTebpcVbc1a9m9L6tT4U2FJZ38",
  "key16": "2dT3ma8iuETf8hpYrmy7NMiuCejfhN965KEwiKTsPLk6pUgPKfgS6VVGxwGQhNgMLi3TM5LGMj1Derp7MR4fSyfa",
  "key17": "3zZdZvDabfLN9EdnXdLBhcRHHHMBzpQevqA8k1cS3PieKcVG1GXB8XZYuBu1cUp7Vp4eSUcMK6CNT77moeSLB9Ta",
  "key18": "kRUmo2wbGxYMYxThGeGooLwJ72KvtvvA2YUvEF6BScoDiYwSsCY1vd56Eg4TwewGZTpjN3wEcstXcrGBsPPcLsv",
  "key19": "3FEAGaQRCyBHLdn2efSMzAoAdv1tobr96rVNRNBYTTkQSBX4kHx6QGi1jcfTWL4qsTWdfzbCHKaMYZCJKcQDKf9x",
  "key20": "5uGaYHmHUNZw1QgPiCsS1QrrB7SfMy7zSUgeWtUNBK8SasCQQY782BR3nPjBHSEZN4RdZkEznrjdUuwDuyLSuXf",
  "key21": "bQit1Tt7p1JNQnmm6pUTMx9u7CsTCcQHqtKH9Xs6rzJR1dzDK8jrQUKQH61mHpryEeBJW9MpsufwHrbt9yeBAgG",
  "key22": "5xjC39dgfhHNvQvnq3oi9imGbSHhL6A2AurMWTeuQMDGEE36JcDrHAPRJxYr85GPM15CSAWYeCc6Bt3YUSy77zL3",
  "key23": "kXgZUQzFPwXVA4maET2F5k5jYn2HqJ7oLM2k9sPXcssJ4xgdH1XoQxkG5f9sPFUh9yam3Twx6pfjLLso4PLTcMu",
  "key24": "WQHudambV8HvJhdNtYbk4XAQ3AzwaXgdQ1nnhYfga9zJCS9nMViqv5ESRgbfJRbhJDFEz24HFoiWTcMzuyUiN9E",
  "key25": "66WJawH6QyyxzjeK6XsVpXZ86eYMHypNwYw4tCtZnedvLPkb3z3fEYXsLiDZ6nkPj4fKZbS9nLC3Uj4rqkZ3Ef9c"
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
