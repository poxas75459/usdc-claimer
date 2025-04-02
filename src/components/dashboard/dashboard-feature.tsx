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
    "5gtaprLfJNTVzRnxCqXn9ugQre2FXQbLGqViecBbFXxCwcXFUqaEZdZAY489GwBMnY34v1DpQ3DQWwvHifGCDbqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cgZYprhh2MyHCijGdyV3ASAjqWi9WeLfJEid2BneWwAeVQpkanFgWC16DNHm2CYXmDEjjsqM8xBGSxrT9ZV6JYQ",
  "key1": "4uuxoTtBY1vKdFPgcngHTvrbEdaJj8UQxVThSmcydwwqr7pSCm7UefqeTgDVTGLWM2VeABS2u7zM1FnsX6zg11DT",
  "key2": "4pJUc5C1vCmdJk2zEJJ7D2s83q4Tjtrca5TyRChBvmmq2bXoPsQz8q2MD5BtuppmiSiVkmCAj6LvudjTj4UDSgrA",
  "key3": "5M2eYsP3FPqdzWw5cS7Br8qe4MhorkUqhXKYsMUzjXLSEz5mhUNomoBp6KPyXwy8aNBCVDh8GV8w282K9W2QMf59",
  "key4": "2484t68LBAKbwqLd1vj3vxhPxuQLVuJsxzbtZjmZB4FD7ZR95Mbvhq8fgcaMNy2hcgHsfgVSdBMeH3jauJcwFNFD",
  "key5": "4unrvcoK4wnrrZCj6KzaiRZgpx1MCHvUQJeh4rkghP5kmgPwfZkmVZJdMzAR3Qi4D3BMyDHG6okiETbzNdcz63Lc",
  "key6": "2hHN6rCeaztxcvybzCyC2c7DU6SnLTzHoJScH4xxickeBnqELikC8JdMBjX5yjCXPVuEmrM1ndB2vkpvMU9VRmeq",
  "key7": "2W7KFzbCwM7McdZTeJuc2XqLCUKyAeK7NDfN9gTSTVjYbpAm79CkGUVGvEr8CvT1HeDSGbJkuaejjcG6qFRLrmPq",
  "key8": "4AY3S57xa5sXuzexi2gkAC8LL8xnFLqijeko5W64nBoFhUQ1kCgfbSXiLfEmmXNKxLGoc9j5Vs1pdz2ce97XV2zW",
  "key9": "7ysWL4dq5NDdLR8p31FoqdJjJGqCr8a7epMW6CcfQUm5Ji5zHcrKb9nAjWyGRvRy6L9kGxkjPTxgsUMb4YcLJGW",
  "key10": "4ifrsDB3t4oPDpGmg27nLXHkU7PFF9ih7pUERzKvt1Me3v5kLNd5VhpNjorw8JcMfdUzyR1ktGiwvu9pesNFECra",
  "key11": "5nHRVi6uzfsiDcAfhhUF1aeCvZDzMah4vPyUMcG5nZu4om2Y6rXiKzywocDXDx2CmM78rUxWZa54r6nSrJkJMs9r",
  "key12": "5E32WVY7uKtVrBnnasFeJHz97o9ShpGtuj78ma9QJtaSCP3pF8RdcVhZmSnP7QYpUceU3EvDBNJxxqe7CMLU6NNd",
  "key13": "4krUTX377U9oUSZKe3Pc9p83k5ifk2E67hWkEUBXFJAqYcTNivbbjN6Sf4s4Yuo1oEudt1m5YZFnDjhmGHbAJ91E",
  "key14": "5k2JyybcULT88HxDdJwTxFDhrfGrtnrcqGxWn56ZbV8zk6L4j5iK9hGX3KQzdSALBBACnTjwvxZDAyietfnpjPTW",
  "key15": "24TQ7XjVbqVjmq6JzKi1RWcxm4zeAju9YCUFQPFZVcUP5HHZqc7RvBFDrFkbE6wEErAbcVnJDowiQEb7hMkFSPWc",
  "key16": "3zihqcyi1V1etLzb2aiebvpQdSHmx31Q5sSd1k5bBigz7sA7sSBu1LB1PP1jxPyxdNrRVNbaSvrqAUYzsuusbEmg",
  "key17": "3maXWkEVfnGATWZ9tj8ettmFsf8jseykabWUbanfTiu1xR4kJv4KiWx1Rat8zk1t3KpWEgbTFKcVcjE3PksGmDJX",
  "key18": "4shd8L3q7p9ZM5dBG1kykGqSSdssMv3W6qU6u52LRWz41GAAb8Fd8xZ39dYRvf7Epb8H8gqe6RNFsLTLJ2uoz9rc",
  "key19": "3p3cZk2faENdHfPw2mH9znuz4R7ovJQ2PrVBCqwAJeuyWiHc6wkwfHHaV6dBCNiAsouc7MkS9BwWBeqiNfHN1vpT",
  "key20": "3W2NNJCHKQYj2CyknRE9eqUUYFhCUv4Z73C3m1sXSjEijAbh2U5bXp99cSXNieidrYwWDXcXad7uHjvzNyZeVmzN",
  "key21": "521j5QXqpU2HnzY8Mp27T3RkcbY9NvzUd6JyA1URzGP3QiP4s76dmsvAQ99wLP3A6LPyDRHvpgVVRXfo7zXT63xx",
  "key22": "eQh7zwswmjbDFqBAgj5DNY4LdcXNHmB7P5ibLMn43ttZmzAvnhsybn3LfhKtNzPBzWaTDyFx8hEhUQCCHzhFeDp",
  "key23": "5rEL4GJGpaaUJ6d8rK4AZoGZqVNvjHEQ47YULm99cumAcm6rcVkCiXTHk1WKzceugqB84eg2Ye1dEnjk6NTgxdck",
  "key24": "2oxzYJScd758nHgnF6btSqsv3SEy8DUhbUV7tKtdkqj3CUGBup6BTdzfAUrdFKS821LBjAz8c4RzrfE2NWdUDNpH",
  "key25": "5TDinbyzGC32Pmi46SBgL9h9ofeZVhArBGMrux22ArmMTWj6K8JmfUVsYDghXZSoAN6opdLAdDCj5VDmBnB5GXY7",
  "key26": "aFDZkFu5rU7PVm1zka93LhMWSkJUsJwP8A1TiYjZ7foS6s4SUUUMKsGaY7JHDvscV8aPsfdaANin3HbiG4JCY8P",
  "key27": "67pNPtSh7o11jRtjKimhHb9dCwRWiJt2xhTpnNv2yGCiVQRXrWHv9RcRvBcXrM8pEw7tyGH6ooG76h2ZXqzC8qVP",
  "key28": "aLE7fdNtUU1Z96ZLMdfw5XaY1sryw1UVf7ZqSgkJ9ESFxUWkLALc4qVXG5DCH7b3nwhA3XfgM6B3SHaqddkjMvd",
  "key29": "4WYzUMsfaNB3oW5iye34kYya9hevu14ByJcBqww9HpHxjeJJt1JVECU7YMADeRGW7BsXv7dQJsYn8UDUcVHskpUM"
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
