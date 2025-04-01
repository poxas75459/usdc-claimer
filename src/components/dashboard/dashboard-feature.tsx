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
    "4j11mu6V7WMN6B2bkiPdBxzC1biKT2us2F1usbwXoTPWiZ48p1aDpKPjjwEKH7hfBULpV2PnBbBYbbgkQgyRAxWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fxc36HPZPxBpqzcZDEdP9LuFUWCHTbW1XLhKcpREFjkr1WLP5djjntACpWLfjTfEQAo2ydopmjCFMcYXocCbunB",
  "key1": "3ptMMPPX4gvG7kF2VCCmArBgRg8dahPbkdcYmsoxzCLU9YMY6R1cGtYkEAY9yfDLmum7mXwoWMfKoV2Mosz9q4LE",
  "key2": "5JqKiBBSfnDpAtvXLmA2mRvx56Cwcn3GTbPixzwSw14TZRuCmHFnSSs2hT8LXT4mDM7zRQqg94LqP1VWA5346j4K",
  "key3": "5KfRc1n3irG26vn5HeDB1BBGrya3HS8h3TMu9fW9Tq4wZKFdTGjAkL5jP77W5NvZWrY8GYoNV91zZF35d7HQ79by",
  "key4": "oriYJUxzhhCCtroAfiNLuaw2KiZM88VkHTrqcVnDWQmYnVi2PPZDsAUZgNLEvUMZNiDrXvtbnG9hi6qrQuLW8Hk",
  "key5": "3ZpkBPmvz6dxjntpcvYEixnCy2bgcFgBQU4iYNRuYmLT6E6ZbAFV1gwcu5GXcnRv283qwQBKNegEhkZJ5Lgg6Uh2",
  "key6": "6Dvbst5BBGoGSvZywPBmVSqvV7swaw35NiTBourPW9CxGUgTf6cE3Ha4nUvY5DtSoKdazryoxbQYicTF2U8dNe6",
  "key7": "378AYwG6EnAzAWGu99ik9Ek3KxYYnczvxzDsWFnKUyMEXsKJa2yCh9gB6UecaeehWGDaF5NFg3iFNtYRtxpezts7",
  "key8": "HdqgjXrYUa4KVZKTjm4TnFCozdT6N21wuaxrkaMsYJM8qBnAP92HyLDi6G4zFxyFKDa9z3fJHnonPHzNrdEnxPF",
  "key9": "R9TKZRF78debVUJcB6sP385NLkcA5XqwjobkFbxPrCPFzXdakaSKNWA8pzfdBoYffXh66AiFz2tddaSCfpkacuB",
  "key10": "4hZqjaNy6KYMYoMRfWhotF2NJpkJq8d8LSAhXq3GNxoqnZ5om3f8uKufGsG7gKXG8p4LRUJkVFbHcD8F3M1xK1xm",
  "key11": "kskNB2aTsp9qhuf9zRBHJyURAAspthkWCMvvbFh6q7xaV1kuRkoHZb1c3Sb8doJdLG3pXjUP9J43QwrEymW8DDz",
  "key12": "2z7nB5n9sJVNf1k9a7uDDW3DKBxGudrdqp6xdrZ7A618Jyh6V8eWxtMPXpxuETgBLQUK1wBQ4P6vUieLz3QopmyR",
  "key13": "2DqzxCix8Q7oifbg1jcsSXow2pR9PqHXdr5QgU8uXR3uR9ESxSSQ13vCbprEsovXDUTng75pxuGt9ynco7ssiN7X",
  "key14": "4ZQQ4rUfwSzsN1dkd6UjZSJ1VRMuNhMbbovyBBEzaEzrLwXkJkLZZmDQAFJaqjzZmhSCkeM1hDLfKTd4KGnWXAX7",
  "key15": "2EgRrzTNpLLwcA7CDX3BqXHvu9msJeuoiwkMMkC6Fpeb14wHfb5MYBVLxxQigkPy5pbkSjsQ2D627U2Mg3LCLJyL",
  "key16": "PytLPRLbZJWhnf9JAS1Xrx2V2QscyRg8UgGqtkqPduNwLNMQGAFxaZcEdLBC6VLV9fHpNcC787P8NnE2qZxYnjZ",
  "key17": "23GTeeZcw3cAjLDwU9r1GT8SsSnNc21g3C5Ky5abNtyVuSHHFcb1ApBevukzWNxc4ah1EhBNH5jum3t6EdKU7F3T",
  "key18": "721N7tYCX4DqAfv9MiStEB4guvxGh673pQSGEwreFypCL7eUUytdDb3kjfMVhogBahLQaNbL5UJeshsJ5SHGj3Z",
  "key19": "4SpqfkcCCniLpEmnGsSUeXEbUJvfbsagQTDEdX4iEoTy2R6S5L7bcZpwUgK6KZFBDCsX5SFbA2w6dzjxMQXYivdH",
  "key20": "3Y6gro7XE7fSHsXcGxH5Y5c5LzU1puJQADsEzNL8ubWgNgDCWhtw912YHS8Bwi2vnVaSAwGdZLyb5QbG1oQxpdar",
  "key21": "2AuoKUuk4VcUi4aMoMoQGLH1gvQKp9jESbRQao8Kv3ZcgL1J7fQbCPPGbd6AAF9L9mLRgtkcixCL9Lm71WBQHapH",
  "key22": "65FBJK6iUb8EDeoKySPgU4ko5x2pJNqjpMwpHvCSm9KPfBDL8bi5qGnCxssY2RS4FGMj3c7EBdTzuCK4sKA5joLc",
  "key23": "3m49RC4SQP9DNPXFPgiKVTEHSyjmNjzjmmLFWxoDF4p2tXVVqtg9qb7GyDE3HwutWeqGUM2wxSJtKWVCk7KjMZYb",
  "key24": "3Q7yo6BfByzJ69rbe6EzH9bFd7TvfDhX4695pM3B8V5tJaVudqdwN2bBZ4dw1k2YtS3z93SNmBjG9JornowEYWfW",
  "key25": "2H9n2TJTXBfZGRWows7yuhmDjiCLFdcUuujbqzDYrPGFtMABwrEsKz6g5t2b7genwwPorHLjsjgkye66NkU3xr87",
  "key26": "5rHFLNwot9gGiNNgbnkqGeTj38yrwgad4Xkn3RhujDFbr5vFJpR5zKyDoDEnHfZb2jVoFEypHwgN3g92T3G3fMLv",
  "key27": "RWJa7X3xxrZU71aofCXCveh2E8h1x6XVo2rwmtfhuMBZNoiJmR5SsJuXX9obA5uUqXe37kRTVUP6WhwkJvNwzCk",
  "key28": "2kzmuW48wFDt44HCEfZkiDi65VWZDyyHxqp7GPLNFQcehjCq5oWyoYHgCGuLEJVCAV1g4kpMsdowtpGbkXEHxGoX",
  "key29": "SwXZwV636iHRWiNeJmUnfoXFVY94HGsZT22TEvMn5FLZdHA1xZhXkxpRwwp5x7ZYmyQ2KTeVV7DvTbSrzzC2poD",
  "key30": "4C9NYDU4YJv2QFG9FcmFwSWEqe59CkwfomCAERtcXEgyY21BCdis4WqvCWQD8MsN9esMeh1ndxNDaW88DdKX5XSA",
  "key31": "3s9ZbUwDvxHg3qKnSiNXaWRHHEk9Ji9BEiNWtmGDbqhxLcEJsQZoVhcD57v1da2Dkt91UJ9N3TKbtYXFNxsBcye2",
  "key32": "5u7c6QFeFUA9oJrurymS4THoc69MwN2MX88zsb4aeztgoacBKTiyU89h5MHjAxSFEgHcPZZcbRfAX52SRnte1Z5e",
  "key33": "5dQxTYQjgoSH4t3VSHGxGrAFvQid6rjdEaeoN4tYDZJ9s5Z1BzRy356FZ8y1pxWtEeuQ2BxG9WhERCXmHzvxHciJ",
  "key34": "55YesfGNU8KZZ13wkAcmFh9cnFWxqbUz8FS3yvgKGcJyZD9yEWP2Lhk3SxDkhZoS6hD1CyM6fa3HRiwsYHLQwN2H"
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
