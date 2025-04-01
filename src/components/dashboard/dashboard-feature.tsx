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
    "4ar7FewATtLdav2GunJcSJCQfAgMKMc3rX2hZ44zqR5oKZZ4yHTzWfhCroV1UstgyBQV7Hx3u1C34aS2i6a3Df4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qgJX8qonbu8Upcen3rkemY3y2G17wVVn2dZmZwM17o8KHE36c1Jqstrb6ZLfgEg3CxNisB1gZa14ZDaVRm9zbzB",
  "key1": "3rjbJUA8RvafXGyg72kJBqCU1JocFPerjPGpWTTtjhhxbF3GRA88wq5w7ri4Rj1Zq3ardX1KcQkRCNZaKvmKtYi6",
  "key2": "2gRrjWzXdxQMNPRLTQsexypwdtqsUWgKscexYPeh9fzeXiJKpt9pXJzSPSzKxKDA96g5Fv2j8unKKA1dXqzDBVHH",
  "key3": "4KszmXYM9kd1Y2m23pBNZMELnT21VM53n4mr31T7hdyKghEEVMGL5uJFhmnkTHQ5cZh5Z4dTwF1Y3Wp9bTV2ss4w",
  "key4": "nmafmTmerf7QaLfHPv2WYJmTc5sB7fWRZheYpmPLFc9qcVeWmey7QgAksDTHEYP2E8ZY74YNVebyJGsRndnFEYd",
  "key5": "5bUFhmsc2Qvmsr1e4wKNGqoDvUFDwTyHhDGURp6xGRK47CnNrG2DcusNSGDLsedXdeD28ivxGJ7f45N5FbnFJY3R",
  "key6": "2zh3FoZFANGd1icogc6Sd1FNkSa7NZFNHqrBzSUuSsUrwg9oZ1CCGKnEUSrCjbu2NLprhoQtEfmpnmNHsXC5V99P",
  "key7": "43umVBjpx8CuehRpvcDCSpiH8yZYZbPvyG6w5qZZWjZVxthveNEnM3vKwpFKHWjSU6ECYGgZBGLamn7Z6BuQPzru",
  "key8": "2gA7MTwh3Ry8Dky1qn4dM18pQ8X8KdhdMZ5aJLfFpi8QoV4guPS8uJBway2hYc5FQPShbm5momi4dV7zfP2Q3kZa",
  "key9": "3oaykqnzUu5AUm8vLRcGqqMiPMVKgcmdMp8VQiTydjvVzBGhAbJet1o3pc1iH8RmoM1TrJwPo1PVX5JhNWpjdeYF",
  "key10": "2sjEsNQALwbUQ9QhSaxcBm18WkxQNBdULnPUA4oThAWtt6Nn87gLWKusiVvkJR67gx9gS3rLQJGznCRDSmAA15Zx",
  "key11": "29UTmGXXuGtZLvvvqPUxvDWhQyWFZbjNGDQ9us8TR3zdoCXEmwc7KzBvh7mCLZS2edEuxGZovYfzAouuhLUhqdjv",
  "key12": "G1QQunfgZP5tz5YsnJFzhPyNAMtedv7UWNaFiLrKpwP19SePbk2xbQEmzLxK1JtrG8pTFwMQwXyLGf6QkGMAVrB",
  "key13": "3Lo5iXaVfAiTHsDZbdyXfQFsbWrBEPYnLoZCr136L2Pdp4ZmHKFgTAnGGfeSDqeyEW5LLsA7tzS26VrqMFFbvGTj",
  "key14": "5TQZecgDyBTVwwj9aqSBHQndNN8Go92gMmF2FVxyLZvRQKT8SSHPj1CELjuSmpByEvWa5cYvVB9jt8Pkdf13eEeM",
  "key15": "3mc5ccStBNTcLdaiz9ucmB1obL1bE2vqYe48PT9A5WCSpwqf9q5CyEamht7AoDviKjhfjoipUQGJP8QPhSCSNuEQ",
  "key16": "21ADf3NJQQEcE8Xhp7ZM4quwxGxRZpuagGNAhSkX5RTqAt1TjT6z9GD3de8GgNdfJjphiJXtVRzQ78cJHiDP1oEY",
  "key17": "3oK4u3rndmMGboxn22MoGMv8kd3UKTkGJYhJACxqLPjjYiwYVqXfd91X5k72xh8sj2C9SgZo6dSigaJJ2aGbW1rn",
  "key18": "29RiL7Jw99p2iXqX3P9pH2mgTX8Atunz1JT1EZGcZh4Fs6nA8wmshwKvgBqE5yYv8YWy1DPc6D4DBiX8bjep4Qyc",
  "key19": "4caz8QJcBjayuwRmqEpiJXd4DSB3ySKYfyC56qm42dsxbXMFWxHGXHebH9vSvtek3g8fznr6X88MViqWLTaoa3aY",
  "key20": "2qxBL6fchCCMsEr79NCURY3rPEeSw88SZLBiR7EJtHdd5vJMYUqce5DwA1frYXT5Y2aCdTKNCFRvuQJL9ZE9Bp4o",
  "key21": "2KnjYq1NGJZA6tGkhtVJ1emYTZRTnEbDyQgztF38g1M58V7CTxDSKyjDZoKSoBN5DSiFANWn7x4kiZyHJ8bVK2LS",
  "key22": "5xGF4VzxtBbbxK6y2gvULDsftyFkhccDS8WDbm7xmmobpfU1qAzs9Ts4Sjs4VVmhtLXDhadRx1daiyvYaN6rEtrr",
  "key23": "3iEBYL6BFfe8PEXfJeupDQs3XHQB9rVPEom6cyM57LRfPju29AFqpQgiEGKpdgxCXNAXsoDDWBEAiQ6WbtEYvUs8",
  "key24": "449JmMj4fzbq4xroyzRYjGsynyNCa4WuVnGqxHHYieEZHajcJzD8MpdfVnTjtaqzZhTtsnczStuJ93aKLunnS5ZB",
  "key25": "Z9p9VEWZFdvgykPsQpxhpJLxi3QuEfsuAGhAtBhhwPyX8izBcPKxEMp4bouy9qDcudaa82xsFFyjrLMitYa4HPa",
  "key26": "5irXmivrcpuSSqpe4jPDeSVLqP8jp4nfQwwAQsqegv89JfL4j1Ent9Xyo1ip5rTAueFwFDqb86Hzqf1uEn3i7mzt",
  "key27": "4sWVzUU91ACGR8ZSANZFHwXezqfb9wsGdHZcc9nBaEHJ3EsLLLZhepjYL2y7Da8FsxBKCVZ8AbAk4UHkasYTaJoe",
  "key28": "3nQJqd6Jbj4BAwfZCxisP2GBWJRE1n6FFLJNTDH9Nn4YkEEm4DQEwzvbhnZqVdeLeKWgNa9EP9J3EcEhYbVagHAq",
  "key29": "Uuj5uPtJc8gohFgtScytgBweQ57VSKLNLPAPfjEms7Xdnse4bSdke5PBkNHiYGqqEC9RKf1eLhGjPY2jnSwHByi",
  "key30": "4GKEF7pdiSGapZHpRahhp5JkM9fRq8TauAD3hGvshQyrKsZvXTfA5CiJ1YMC95L5CSoGvzfDJc9xDs8AGddTNu22",
  "key31": "25iXLLqxvTJ3rrBEoFQLQ5z29AsbkhmaXo6nTE7TDaMV5ve2mVud8FsoTnTrAFdoLKbMRRZsnbN6hqK1o7QYjGFG",
  "key32": "4oK2FXbeNB7cCj8KSf3ijLqtWGDuPAF8uUQmXbPM5xEFotgfEQauNo5nK3bf38kDZMXxdJgR6ENP8PrZjY1xre3Q",
  "key33": "4qghAhLwYoEhNoyGRmvKTPp1GRjhEtMZM14eBarWnTyeEMPwUigHxMHHS6HvJwx86SLstsXCLi1kSmRLZjiftsnK",
  "key34": "ZZYikcZy8uoupQ1TR2GvRoELBoWS6VYc5ZLDutmza9V3hRMATfiNt6vNVYjU9yBaJccd1iJ3hy4m9zE3aQv1mTY",
  "key35": "5QXkjUJuz6M2x3T45Dss2E8WvMSLAPML2WTGhGhAiGDLX98gFiNwzARwxLgaC4pazzmmoEFr35HXrQv5ZskTAaQU",
  "key36": "h2TTzuADyJCnLnmnN5JwirtJ26xEadqaJMoNk2ZnBwvi331j8CaWN8egjL3bPWzaZnenBsjW7osvqkgi8BnNPU7",
  "key37": "fjKgweC1DaPDaptnSZj62NA9j2y9yx4Pm8mwW1TMK3yfTfkytDYqVHCCpkcRQUB5PUamCa4BmfvhrF3XNUNg8Xw",
  "key38": "37irRFQecqiiQ9o59pj26oJp8QYNe4oandHU2cUt81VFwFcbjmMCmF41rnH7AsDDbi6A6AGqZuPujcVNscMB6ahX",
  "key39": "4Mjminch6JsNzBxX5HLgDhMxzrZBHQPKcbmtj4A4CzfSVKqnXSgnKDfYw3ZvukraBA1Rb41eQajHDzcoW3wXNZ5R",
  "key40": "5b81FBwQ3ZyMRHYFQv3TtAYYgYLLx8uEboRX7TxyfNc7sFmMuhbAA5N5ee4hVkFnwsyf9Vun2N8QPDTKeq2HSurt",
  "key41": "WHuJdVfekJ6tvB8ccHyVJv4k7kD4HSYJaSz8zLHnmt5NsUiQp2BLkBMqMrxD9qG7evWUvVadcaEfT4bxqnBjdC9",
  "key42": "2MSd7FdJfSRKskavFE13yxJVvWAXKe7Z2c7AqRS6mujbGS7xmjevpU5CXfq7AWruNaz6Y8NQBeWVLFo6MvcFhy8o",
  "key43": "3nbt4g5H4CLGuSYrjW2vYwABxK24eKcEZGrGDJ91cqKs55gipsvkVhq2U9wZiz9fLZUxuQ7dLBnFmCsRicMcNCjy",
  "key44": "USu9jQjjcghSX9Z6vcsRuK3jKmHmTab5PsVYHjJSMjVHd1BixQxATxJUZ5BBhuG2DzkRdMgEoEN7QzdF7TeE66K",
  "key45": "2NFFejfnf53sxmCdqHf33MNq7odmvNk2XRDPLyEHTUtne3oXSzFdqPCPU87px49au3PdavQAAxBN1uTzZUAqtYi3",
  "key46": "5Jz5wnAAjGuhH86UHjcmAmrhC6wpdH9tphGTxkr4wffMgF5kv5NHvknSdYdtPJ5s67MWP38DoKBqLUUzRvPdpo6L",
  "key47": "5bmt9WNCNiMqWgUv2QrtKPyT8zVAgaKnLdF6Mw2S5oZXHvEhzPazTRq9CG1W7s2iHjNunyx4fJQv1qtiYQCQ1KNm",
  "key48": "4AULj3PiTT7keGfZHHmXpTLEFYKk1XB3s2bM5ARVnEaXkmeL6qXxXokf82gBcQYH23GmiJFkr4zpBQCHtq5XMQeG"
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
