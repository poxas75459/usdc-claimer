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
    "Ee98DzB4MnZYUbE13LnAC2cA53iYU9mXnoq3rqDtnwSecSha3FGcUNKgNyVAdBkdk8tEhiUaFDeEpKEVUS9Xib7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P6aPS8vZovuyzi6wcGK8ipqnHTe7KgLH67vxpStTQPFi54Kd8YsrCp99w5FRNwyeoqCKRCciLMzZrJHk3Ru94ve",
  "key1": "3FZ39DMvsTko9XWCTcMBhTVvdpXd4m72x8JbCzpSQwaTwnXoQ2ujpWQzFCM7PVgjDZX8eK4GExHCT79mUWwnXX3q",
  "key2": "3WhQRoMtewDpoWn8hxFe4AkHEp3U89W1jxmsz8VMsGHqSfKBH3AU5AmgUW2K9jPiKKoprunLU2xDTCG4nzdQLZxs",
  "key3": "2jSxVLQYkGKtdHg9XizibNRz26o4nC7c2ESaiSRPe2h4gS35QG8JeiAEmRJYwWiNVKGoDALFpWR87rU2dMUkdLzd",
  "key4": "3BMRcTqJjyw429Rdm4t2wmc55AnYwGYAq6bsb5obWMoj8bh1aGY9Mb1Ki43mkwkUc1gFHCRMDGZvZrznP9Ws2AiX",
  "key5": "3qK8A8wvfBthWH9SX7UKGyFQLzbB45efjfX1eNnrMh9wriNj73i8oHZpAy5ecn5Em9BEVEdu77Sx8VDsyGDLmqNR",
  "key6": "2RiuZtnNFbKTsxocvQduSiacNLj2BhorPQw9TWLJ8c6w6oCEhvY2Ahe18YvnnbsE2tZnnPiqJ8EcX91s5R7JJDDq",
  "key7": "GXsXGJRFMTvyzXpkbWLu2hw17PMFqU5B7xdR5L6jvqL4FDo7ZM2mcmn1Ys9v4FhDbyzeaWkGjF4eDdSaZpsBVHS",
  "key8": "28juibPvn8B1YSuwY9DBURLgB9dFqRjkFXo3BeEaZKg34DJqUdZzRGCuS1urzC8p4gmbiYJy1wjhsXPJLfVizn2r",
  "key9": "3BtyuS4rSNYqYmFBgrUHfgT76X6LvLXcZxcrgF3GPy5VGHiqYorJPk5qwKPvGe54GSbfpQDMJc5ZN3bVWhEQ3nUR",
  "key10": "vRf7Jpq3GnmxqPn1oHvGFAr5eqJgXoiW5DTiYmb1rhxcsECDuiyxDAU2HBi73NjFywhPp1MAV7Hk8FZvNgeJwYo",
  "key11": "4kYFLrzW1xJZbxfo94BnzRrggUfP9SybH3u1RCBsDEBu5muHfV2kZwpXeJ96h5PRcVWxEQuzbFWwLbBfRkCgcnxd",
  "key12": "228FF11ADS2Hszb29qcAMPoZ1cNpXjvv97hgX7WRHKxhsMJY7U8JjeQsxepv3m3NMkWkeSCVHppnJefLTbMQ99bn",
  "key13": "41Faw5xCqtLYCt1yrQGGuMdaxpHqjKt1CQHgFkBTFEhpkkGFvtW3UPA16b3Nin1af2xgTjymzn8buWxv41AiP2rN",
  "key14": "4y7JgSdmHgMMRg1M2NwWCXQ8AMm1PKwRRxDLVLN9sUmGvEbrSFNkUBc1DeXCmxQweSHVCeToiU89WGvdRLo5G2Rc",
  "key15": "7BDHQuqYGy135cjbX8J1yqbrta82eNpoNZRCpaRsvz8CsN5z5xn27at5utr1KYKi7dZk3iCgMWruirjEjAegaMW",
  "key16": "5eJRH2zYPoneqqrYFGxUikdzDWxYzEvKs4YhHUBnT6tJ5cb1gG18oRdjHYpSFNvi54a9k5GRQZH76jsvZxPc9CJ9",
  "key17": "46Pasf6BkAzWCuBWN4a9duVwyAprHNBsgfTjCxhTfojp5b4TmyXLE5F33whh5Ncdp5oFZVMnh87JLaKGJ1UcM6Vy",
  "key18": "2eMNnPFg9X2GZjuRZUchwfQjBQCpVckbqtzzYBBFV8hPUCNQPojW24Hmh9Z5brycY4ozhvSJFRzjgD1BVH1WmaSP",
  "key19": "3s7rrZLeopJZXJfcXCmy18Xfbhg1YWeS5Ziw4jcja3AkM2Td4KVmXnifKnKLDoBsAtGicfTRgaJwAe1i1RXa7zji",
  "key20": "EdFnwMftofoqMVhunLSK7DTVw6JpdvDFJFBGUDLCsGQVoNHunw764Gt9GXSsoq6TAcEzY1U6pvE2jgVH5kxKufo",
  "key21": "NwmqNKK4Mh1RDkNp55oFCx2D6YdbgUcdruQTvbYCkeJnAWBUiNib9s3n9qTwvRGfuKnzvELk34EswSrtyfQk5a6",
  "key22": "4tQhPx1a8zCnmSUzaxLXcr3tfiCmPb5CHyxrKwmTMDwKf1Zw1b84kWv6377faS2YzocJpQRgEMyCodoPcZuexNEP",
  "key23": "3nf8NX4Tds8PhTKE5eSYoQxBYRa3pqqCYnf1SeCnfhmcPBMr4KZn7hiCbEjyBdFsgo4SuaZMmPmZbbUhVtiEcwvT",
  "key24": "31NfdGSh61XJt5jLSjScHCzt1wtSpb2hjPMAcrv2VD157M3RP1jAQNiVVMnMGoGVr9M5k9X1aQXY5pf9iWqG5iMD",
  "key25": "wF62iJAsBFqMCLaAcUJK8pcqGESiMeyYun5xF9444SBuDe5XPHssBiycn8jUsCFNXQjER1ax4CWc8eHfgfSyTGY",
  "key26": "5R76hUKqSQZKCcgMPWMe6yDfUremi7M266T5NGaBcMReUqHGxTMho6yLeYk7kc3qg4pws7agkEAW9hd33r73Qd5Q"
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
