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
    "3dnDjtiuzKdjRMhgfKv5THSPE6E48FEFAdJzceeXvgsmLGqkXwfT6b7M3HcqgZ8ChCDtZVmTbw3f3E2g4Np8L1Eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wrokHvhmbRKTcLdThWtR9fLkQp9foXTyKPLb4mJ1XJCrU8wE9ecQNeq4d5nRLXLJLcJPYCHoydyB69eSqL54ckM",
  "key1": "5rz17hU7CTa98PzjhoRJDpViim2qPyYW8dMbtMcLLiAYi29ZQutFXvNQ6ncecNVZZByjSLSme59ejE3617ptYDmF",
  "key2": "5E5HEWngJ7WZkvovdwV7A2Btkwn5EyjUsN337kpWPaed6L6fevww3Lme52jsmqCj23QPoebHRrdjSaRFa688bAmR",
  "key3": "4WdArQao4eRkKwto4AaLjMM9MYZpJwXKiLqrk4BZHNAeABYsw6WidvjnK48ay4RyzjzD9BvGw5hCc1hXD6s8bRNn",
  "key4": "CPFbro3T7TLhNN48AwowdqdCfwcaGx3KLnR3Pro73ovuTW5m7koXgsc6AWaBfub65QKbWTpjJL1WvCGAED5oKfb",
  "key5": "4QNwK556qSDuRXq2mE2Z9r6mhgF2BZuTRZeUERYvLZ31kd3PWw2JBR9zK2P2XoWwgjmSMuz6UmihexDhHNHZ33Vf",
  "key6": "eAH7ZCFmrtawkGs6pSXCsszce5BFvW8GxFJy6pXbHHc8WxcgYw1xE4UinpCbBRyqLQv66J76pFuvknXRxL6cGYx",
  "key7": "3XRqa8efvLupTqrdqWThpya9BaGkYVk84zvhjuapbNHYAtj2Gw2fr9U8rMFsm2nk5wuQz3NEa9CAXG6HdTY4gD4M",
  "key8": "5Mta3us6shKc9dzdKp4ddu4SGkdY4x5rnqppCM5gxcZVbYU6pA3ZNpUXVUfeVbqgJLJx41D4mo7vvRzUMo1mzPgb",
  "key9": "2GBbXXYqYoFfaZfrbJXs3kXKCioEpR4P344MwXX4iA5TSAiFUa5SUSAuy3wyxHQbwPHqqDGzYiRKkJAudPym3NhV",
  "key10": "3PRuz14Jjv6e9Z9wmRs8ydRFryXizP9CmMoSJWnBTXv9fsndMf77NXvQJzGWNM65RBAUdLvaTwJVi3Zze25bR3FX",
  "key11": "46TWUzFrdrjkMa7abg4cws9w6JuZSgRwTehjwrasr7qHjc9XdiUBUSHQ3LJCiHvnE4e974HgsjiEaAFXdmsWsLTW",
  "key12": "HEXb27MyciBVzmH5gUWEx4dHXatNeEE6zzs5Zr4BfCkLesJAV5GoFvdPjKaBUJU3yV59m1X4i7vu1BAjoaH5wd6",
  "key13": "4LPKxLWHzLsDnoi7WQSnNN4K1vM31Cxo5Vd3RiidmsuKx5oN7i6mEmQemcxnQQUbYeLz2zYakuHVW5RQkmb3AXPS",
  "key14": "5yf3WL9dCTMU2isMiQ4WtRckZZ19ts84W1s9RjMZCCMuT7fZwNeLPCCdXMdMZUMHM8U9LZTVvFbkwxGzGYPKSvxe",
  "key15": "cwAMHxExm8vDhXztXLjjCF5sTzgxFZaGrnugFwYk47QpsoP5JnNpWFfPkD851inPfxcJU2QAB4qq23oTVHgBYcm",
  "key16": "3pBJDaeNX7neuPHW2NdQccFvUbdrydGLoNmLT79uGvEhAPxpnyuuMaPuDGa1PVcvShk1y3Z6No7gEbpVQb4AUzrn",
  "key17": "3ey4X3PygeYVnS73wGV5WzwA2FtroL6y1xvCeQQqeUGheB4Q9YcFpmE37ieBYvRzW3Rz5DJeAziwX5SwDyyF6DW2",
  "key18": "2TCxsmF8LsBBXThsgzVXjwhNpmkKfgte3Z7jdyWi4YdrSSMS9bzFt7wX9SwxBwiDFrMHRerqNmq9bsWKmP6Rpmgu",
  "key19": "43wqoT4tt9tpFC3YFhr45WXiEzFLsvJvYKDy7iNP4bZ61dnkLeACwkkEPZ6oMrMLCXWD1t8AwFTHnnfPfWsy5UDC",
  "key20": "5481LhePiktRMZLV9m7MjnZpWT4t6Ziobn13HjBR8iVq2XwVHLZehUXFTnUa4FM4SqmUZiN1zgxRBoB577RyFoka",
  "key21": "2qeZ3dV9agPu2o9zXjXY2evaXttPVZeWkVXTRCgRSqQGFiGWZvWFxrm5GKBsNKbj1TSsWVTNi4CFAFnZ98dvbLmC",
  "key22": "37fbgGP8iaiUBZ55no1YRy42bMBhrdYN3JCAvJ23roENVQegDyBPPjVtWkLTiPdeBpdswRTEPUocPyD7mGWtv7PR",
  "key23": "4Yo28eR5hqMasqXP3hKbrA8BK4PnsmALEcadR93ZPuEPWVEp6rjp2TFJEjctKaemJqKqupQUK6Q9PDAP8s3HuEVk",
  "key24": "3MFVS3ERGfZedGxBPfACYVb8VPLQLfq5dqG7DaQ8PzhpuKcDccjdUZsEfZXv1DU5DEcZfoZb1DvcfiKWNM291wzt"
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
