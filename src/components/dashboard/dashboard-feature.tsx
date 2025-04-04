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
    "64o6VvCXvpCx8mroyZVhufE7hh4UUoJRjMTCKqaJ9XxpYYcHC4tnwBKthbeKLJT52dE6JuLFUHcWNEKHNnHwB5gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FpL1j4swiRHXS3mtTa2KReVBih9utN8xFpq5WZPu99UDpFwkMj48aMsPUSxhKsuraRHrvLBRdhiXCMz2BEreYnc",
  "key1": "48WGToid6u7RbC3SWuE7A1J3eKSB7i2KaBpMAuVxY1x1wdNaS9YK2AG2fZ28C3L59RaEobgkM3ET5QfbaMoEh451",
  "key2": "2MhxKEQhmV138MhvZUKmFEGYgNGY4CZkHJyuyXTDEv92dh5B6FUS8kDjny33AJK5wTcpQpEeB2fvHBmvUvQBah7F",
  "key3": "1CgwZZZhjnntfEGr8k9CgYcDJuRUvziQPdiqnzGHcvnLAcSEShewbfLzygFWtx9WUvbhkw2mdZ5bsK7otH46F9P",
  "key4": "3yWRnBXj4QECfW5zLBZ3UoYyvQxaHMWFrbGLUusuhiMz7zKDFGtZ5F84J9ExyPQRmGvnWSFEX2STsDbNWDRX94iC",
  "key5": "3dWUNbhPja7pQ4Ax1fvNWGkCtsLkBFi6b7WRv3nFpt4HEysu7C43bhMTqeaFBymmfXyJpvTvzhHAzS2YzthNKtnJ",
  "key6": "5tYefZS1fXWyfJdpHU2kCTMBvmr6khTH5FtEq64Nyz8mUXcd77z5R1cS64qgbiJ4Hpi8zAwqqPV99D7ZhTUHpFTe",
  "key7": "4289WnRBsX1xQ4merE4nE7MfwgXdQU2oER6Fqi25vvkt28XXtCm1h6cSED1gBvV1a5QQiavbc4exvxbQ5c2k21Ur",
  "key8": "4LpSw3Pzm7ER4hb5zakmhrHGsxSYEcFtmqGAijff5nK2f7L7aDcw1TW8gmX2pdwLEfLnELJRSkUPLLdhCmmfMXUx",
  "key9": "4tmvaX4ChJSASqSsBfvRqfxpYFK5CdL5KgdkCd3FA8RBYaKpkjDLUww7JD5LWRo9EAyaorgBipeyL2U5G3eJjufq",
  "key10": "4cZZCNqr3vKGmx9CyQnghhKgpHMGdKRsSxLGsnNDh4v1fNZq45GvdoUSphmfGQrWGAzyLgktXmGRsWNknuHuMuoN",
  "key11": "WuTKHaPrS1hgewkoa2FeKchQxmUstHTjB17MAjggDmZxai5YQux5w9tCTcNcvuSDmBJmEWzKk6Wdh1E838K1Vzk",
  "key12": "2289feycLDwDWZu6XKqsQqbbrhqwPMGYrXJedcJB9fiaJNNvH9YV88KNJPNHPLWZNSc3eNRDgaJHzAAAe9uPz7xV",
  "key13": "4ZMweNQoTPpyJWNGmgiacKBoSUnQaCnb161sCS6xf9emgsWgHg6aznUsx6nL3yd48TM1MzkE4ESmkJLp4VQ636fW",
  "key14": "in5RV3ztAQ83LkdEZyKSUXeTd7HsH9hptdds9A3jYLAe4XvzrEwduTZ8wfcEbPu73j3Bb1QTSdqUQz5Q9T7tA65",
  "key15": "3Uv99JCU2ptk7KtG4uNVAbiYXcHSVFa8cJ5ZTh2G5FgGQT5DTd6xpj172pLuX4r66eeQnT2AYtMxJtKP8Fb3Pqdm",
  "key16": "46PSBUnwLGZiE1oHLPmYNPgbgyJE8ioD4fax5hrL2eMnT1gLV8eCozrc5MbTLhkEqmdjHh2PoCR6p2LZQe386e3W",
  "key17": "3j5VDSpA8RsZnv9VMYXFHNqGe21vJrvYGZUty1YPoJF8BqVbEgh28rg6iDv2SpSFzBHtxLhWbmHCBSSmY67YrobU",
  "key18": "JFk3YJn268PPurzmp3yucFk2wh3kQRgsSUXxch3JVhJSu38mXXDNX6N4NzrqYqoMf1zePjVwTn5iRkNewqw4EzD",
  "key19": "3tSSxQgVwHJYGwBWY2MCrwWyUXaDsVeXFYU2Hk9YW8tieTuVrBDgYhB94p5b2m3nnWE84As7joykF3wam4ai57sh",
  "key20": "35DzzQCf3xjm1qavZy61jj3JVyzMkcC1KbRxq4ovUwk9P2kbm8sQGudfF3dQARWKrmCYT17maKNQP8qFi2gw54dM",
  "key21": "2jiQNCzqAtDwofDowqHXkHatw56vxfZTj9mDaq478A4q9FSBHaUMebZS3q4soyYqjmDx6rdRziD35saD47Gu4PDF",
  "key22": "5CxEM5toPJdsnX3SaRzejU2BPHz96YnQm8xKJwxz7j1YkCnakEtSRBqVMmnKLYZUjePqJJKLQA3pS5pPSzykWttB",
  "key23": "4QX6mPLQKNpGcUGAALaXJDSR64J3C4RDPgKupGa9GHrLSjfNKtw8ryd56pQEj1fWXXjZ7LhDWXXsEr99fNPejnpD",
  "key24": "42Ey3bAQfZgdNg6MNkVMrWKvAVzsqSBiA8At5mofuJvt33ky1Dgfh6UGP8jkyPgWH5kFVVevmdzoW6kNa5z3GwCG",
  "key25": "2geib7qTEcEbeRYmNdBVdhcTFHrcDD211MhoA2LwCaau11p681RMLxWQ5ZG2PUwHWMhRa6QUCDUgrwRBDUwr6EdV",
  "key26": "462ccarWcozSEQNhntLBA2TtztePkJ4XWGXdxGLSvaW7vJLycKExv73RTS67eBbD7nAYHDJux51LoJhqumgHqMpk",
  "key27": "5kN5RRpSgV3dezxEDNyk4oWGEoe9v678YxGa7Bzby5UzfmQkJ8j3qh6wEpbHcnNqsgS5PZiVcsbtgbJ3p8CQjwRW",
  "key28": "5TGE9gyg6zwhi5Kj6TtKqtELgjvaTS6axujHWVo8KQz7G9JE6XXaTAM5FbhEGEifqh52Y2ujsM3j7ptbJyLFDgZ6",
  "key29": "63tpQ49QQhR9iDgLfPWf6dhQTgzQVs24yqSG9xkLAYWCo1nmFqWZEUHzDcSzsBqv7Q8Q7F1hu27ApQsbsZpS7CfA",
  "key30": "BcRSs2A3ps8tc8iH5pxMgMvFpwzF6Hc5o6DADp4erQr2yaKt24dtb1NP2eSUtKUNrs8PQ1smf8gUrU8q2Cizykd",
  "key31": "4GCQaDyegVy1776yFVBC8cY8d3unAmxfhznS8CiTUqgaSxKbXZD1G2c4BYg3mpkQuETAcfg37KUgbzojPVt87bRE",
  "key32": "4b5pPLEomfEJPKHSW9EL2RHKjzbmnU3LyYtvy7j1X7aqcQ63tzf4emM3mQ2FM3fuk1qZxDwyaY1QCd95biMTfXve",
  "key33": "3QHrYmUWVzmRFkS2VJ94LkPw9EvxyChga4nP6cEJtHRvQzwcRy1XMvqpG9xnfMeZhpy2uYJaQePkF6nudxdtJD8A",
  "key34": "56DXYdAayLjxw1nSsqL8RNLQQ9bVMM4p4mZBiF3SVB31of7DvuXSAmrXyXURJa8n1WqHqwdJ6KJiaQDhsynJZJK6",
  "key35": "3sDpKYmFMk98NiiVrzwPAuMc6hzMvNZgz6QKpaivHiEDQSy34HMCQTeHn7e7qxZ6vTXwSfagSNvZGQfUELyQoKn5",
  "key36": "R6pXuTfYuctWhHvRmhSQfQkvdMuHDnj2wTw7AuTRvdkGtQ7ubhW5tuhYf2ag2pgG5P3o1tm528Lm6t6UXPdqgWj",
  "key37": "5R7hLZTVSgg6qjSUoMpycbs9xvS7Lr1V2swV3XQ4e4Z2toHfiECipys8RNaxbHMcckSpyxLjAxuUzkr1hXBTcDhj",
  "key38": "2K7SSAhFSFxSiXf8nHgwgCJoUvsKT75yPqZe43HbW9U4t7VfqqcP7Yr8rwr5ZeN91pfM2xPUA14eVh3gCo57GLcD",
  "key39": "CmfuffzaXrHmvJZZcttBtUpFNgkMWMT1igvSYakPjBG3njvpj3ZYWxuTZuD7r373dZFMNtcSFoTYVNdNfYvbhFY",
  "key40": "5c4drFS5hZWedwvsvhMsgxUMv6Nip7C7zQiJKqxZENRbJA3TdK1WaVyL6oUuruZe7CHDoVDDYH8t5a2yC86o5Eq9",
  "key41": "5NJQMcsvs8ccnHGgzMtmY5Uxz5KGFfneX6qU94oc9jAXbcEA8vmt2HH6NLyvgdmqU8XnUe4jAHaoSaHgK7LWoe1V",
  "key42": "34jEBbPEm3i6u3MY2wS7uZukmL8D4ypVo49VqGDy8PvRgX8ZbLDPKtzHAWpDULhXHdHju7An4tj2wzUhwNsRPrL3",
  "key43": "3sqzg13i3vbu7pQ7AnohAPDpqEZ5eowKMVrKkiaTRiUFN61P27gKLFyzN8y9ZKE5dKwurgGPproReAU1Pw5RhxnN",
  "key44": "3pvXdeB3KQ9BrVSMYP834G4FxYLyxkPa4UMWD8Yi7P3U5ZMtNbBkNueeSWzqzjJKgS6dh44KzR4oRPFy2ukUdQLH",
  "key45": "2yfEMyYyF2nqTtgY5nUNT1c3HKArneioyoWL4Ka6x92jVfaq6nfAJhiSKVDj61SLLYpJ8jQtHd3sLkNUoeTFDGqf",
  "key46": "2Tivr6Pz4xVt4VwKa65Bi5wArLkHYscqNoiD5JGZ5YnTWYfZnJkps4AAJbrpxcXomFejZJFHcdoz7Zp8JbmxJhYE",
  "key47": "171QUpqmA2RLkHk89wgwovQw8Gkv6HJ3jrXBwFfTwGbTQe145SA25FGfpgy5nrPw85P1keFTZPYcQaWb99wXcLW",
  "key48": "4x9Pwoag7bp6ks6biNRgQ7JrCy1BS9H8rX3LAfhx2Lt9w87SrretJ1rV22YhVe7ps3f7nbKtw9KTPdTSRhSUDmAW"
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
