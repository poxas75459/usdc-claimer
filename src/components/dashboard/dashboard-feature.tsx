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
    "2DLr6L3AyibwBVmpiPswqAmnf9jBP86bFQSYy5QW6gPxG5oFVxC7mjbQ7k9pbFC6AjjYxrRN26qtGRbisbz1Wcxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WtoGBU1irFw5o5fnR1RPhQxGmA5XKvEXzEPRcwCWLv2wWiMohQhFY4MUNugubecdCno9gUWPe7wDoXbHNnxC3FT",
  "key1": "3HStJ1dRK2BqcvakmP3qthKFTKDF8ew5QRpiBUJBdhKoaCCoa1MR7k9iJxS2pNiUuaudb2CF9RQLa8v1mKuS24es",
  "key2": "4qTuUmkeapThFxyRuGhzxwmZdGL9ncv1XSfpvvRrEFJR79J29FCF388tGvHEuEqdbhDeYrmYZ8tVUHhnBRB3qT2a",
  "key3": "3fNFEHigZ5ENPrGkpdACsRUrUADue2jDnwL5QfmSZa7LRvDV1EguivJjrwxjT9zpUSFtJSarxaYXAy4VDQkP4JMK",
  "key4": "3XZxmB8S43jVeKC1SUdx63V3YLSFVY88TwZqgXcmbDzP3AwWczZ8381pNMEadS1NVPpk8s5CmWiP7bZpG8gzcNgF",
  "key5": "5bBuAK7SnXfEFmjBZLcfDtsUFHxsj8WfqXUVBZW5Ht3sVFRQMnv3Hz9xeRBxL5VbyButjPMMNNLozwxKNwQiW6PK",
  "key6": "4gKzVn2Srsz1JAUTw39HinL2e4VEwS2JRbVW4sKXpRhzmMoQeYmVauGdzATWahg4YMrvwHZWHuDV965z4b93HaZE",
  "key7": "RbZiN8y5W7G34dq1R9mL4ntbwo3UBpKYwZsnrC54y3KnRNR5ETisvAGZFDBYqx1GhmY997Teo6G4YhUMKYRSN6y",
  "key8": "44TnCVtbW1BRT2GZs2xdxoED5FzQ96Q467F7MZAk9Dnb6ySRf2DoiyvUKhNKpzvhcxqpSwi9ShvBmNVsppJ89zhs",
  "key9": "2hq45xrQSsWqaeoGEyuKGyZEJYcL8DzJ7CzGodS6ErzVcT1uNiE8JZEmfvoy73WtRmnCohYT2RB3NeDTE5z5rLCy",
  "key10": "3dH4V7KdFxgRKD7vgLpTDjnRo9YQHMhmMcVTRQ9GJ9NTcHAJDbzGLV8mgfbpeFSGe2MWWt6fFpSMxkSML5hB6pNy",
  "key11": "57joS2B8dGYi5QJv97zocKcWCePHGcJcRQsNk3MqcV4DqbZDFhsvC29fiAyFhtpAYuKNEwYD2ASJv12y3hRn4JsM",
  "key12": "maRYDG8dmiLcJB8oHMG7mAT1TWHJXwxS2gnkeHaoRvEQ5PsMmnsFaztobEniDP4fqsJx4QFNZ5SdimM96vVwsgT",
  "key13": "P8R7ZviZMVANrSgzaLkhz6AjZtjCgaDhnixYdUQLnWRhSS74r4mfF1RDDQuhHViD6uHs5t3U1G7P2V2sRJAy231",
  "key14": "3ho1hmY1Jj5CaqnMWi8Es1E99ex5unu5Agw346vW91hcCeex6JFvLgH3dkx3dParUaMmNxNeZq7jaEAb3LedT52T",
  "key15": "64KEYYeNNKGyW4BHX1XLG7QbxQuPSFZip4UvE4E2ipeuPk23zNjzVev8ceUnvFaF2H5sxswVAvoRR2d3rVRqXbxp",
  "key16": "7BsHsTo9yeP76k14sQzpzAuNwnGcBryX5ou5cq4yZo2STNQnZmcYjmMCqLLbG2xY4rhynKVVMbqRBY8W6AKxdDM",
  "key17": "5j5WyqEnd8v8EiYqSGU1tSEptBWSsB39L1gy1kiY2CSRmfmD2E6xs2acHMdRUjvnJU6jK2NpHTko1ebJaTqV4j4m",
  "key18": "63JwJGVVNGWSjSSxq6ACiaMRVxrQgy8Hqpcy6KU4FETqtctkDaheqkz7Zs7L3fWbTULdntMm8YqVN8Z157kd4yMq",
  "key19": "2BeWVp1wrw9gpH83C4MkTZAUb1MGSaWvThmAj8YJ2SJwLjk4UUF7of1qExUsdoSKN7XzBcY2NxjZbXnxcsDCYJP2",
  "key20": "m2d9zd3MfCwJVpVVXZSDisQnkqkpzKeN2f5NpdKkpqNH9fmZ8hpyUECgVG9odrgsS4HKpGQwqjPKnCkLSsmqi3J",
  "key21": "eRt7AKX7iLti1FTJPikhdabDYkgAqdmLxcfyfWVS3GQtpmMUqUr9rcYYq2VE8WwB4upyMqTTJAzrqXVYrPPMmFa",
  "key22": "2adSRWJaQQKUAtrE3qYyskkWF8bXu6mbCX5zcCR4CUqj1E1YYjE1aYZBuBVfB9wpDeH69azqzC3SXqV1bFx9i2xk",
  "key23": "4nAyGewpUnBauCXmt5QEu18kCfVMMa8P5me9KVYtP3U2utNLBn9BuKJscMKfsX2n8cJwjT8ctjToGfJRPfq4FqzS",
  "key24": "56YrYiUf7jXW2npTvwvMyUEL47gewDu5YqiM3o2SLxW6MJg2EZgCz3A3qePQuQx5GKDYydgLkXFzBazQbSuPSbPa",
  "key25": "23mzCYtkR6aQihDtbJyPqTXMhYY2iVXAh786LTDsWhz1sJmyFLJzcRVuQJL9nG2sTmQ56c3QKK2Frzk5JKwigkkY",
  "key26": "4Bet9mfBAzvpKpjgsf6oLpKQCPqhTCgKBNqu3oMXzAkAb9cxQQppRrWgzuk51xkdS5zgdshf3YDLsTLsaQMjd6bx",
  "key27": "3141U6sfQBCu46KjY32xFUia9UAusR1XvSDgA6QNucVJee6tsAaU8bwdm3EhMjRcKjeRpbQBfVpiHbXUA6nevwFe",
  "key28": "5ASgrTAKGfcmDMC5YGiTADnHp66QwPcj91xzhnwPEztPdnAs3uaUKAFkYZfTcQL9xvfJBmFwQXdTYK8FaXGYTXgR",
  "key29": "4YeuDotv8ZSGSemTH5aTT2XjUcBdDwDKdWLwkz6KNxtnY1psuVqzxduoSLArGEcD4DQm14nS4JRoJycKpgFmfo2B",
  "key30": "5VYBAhCG35EGVbTMQnRYLM59e3rBfVuN1EiYADjmCB7uPGPgn88vkubKhb99pd6J6imc1xoELqAjKQ5ZpZ5GSERu",
  "key31": "593y5w7gDuam3MpXj7k799gM2iBj8HtAJF7tHU4RNnqiVgr8TXM8ztUitar4fNezge4htiMxLrFBr63d1P66x6mB",
  "key32": "3ynxcoZ9F97knmfaZMnUDHmW4igxL7mSa5s16dSgU14nhzrkjvXwLG1r4nd3jxvpJsicPtCVZKpA5jyJHtNdZuFQ",
  "key33": "5KYyQ9p6Nr7UqnpV2kHKXUhi6je6JyZPwv38U48bw8DKe62ciVET7EYcJ3emXxg3a7N4MZJgMQqTJmcvnukfPmDb",
  "key34": "zdaMSjVtFBAaDgkPfvhdCGz25XFM8Yz3YH9fyTmYD9zxxFmyj1rBg2k6RnvJALXHxa9CvTTabwYDcBeMyerVLHT",
  "key35": "3wjfyrUAGWYBKbrbPdKWsUCVmcnsH737A5fLMD2w65f64NroZ3AdYaAmej2jbAmFSXKwyLt1iLQcuhN2eNmrcK37",
  "key36": "D55ajrhXZzYPP5o2KdwdysBekCgd6XkWTo4EgH85dr7opmtmfzKp6tBGrtZsCPMTraxVPUuWVyyEwakVqBPh1cF",
  "key37": "3Cc4NFbTGtSxGcpsRe38UdtkuZ745vJkFBhtedajpkghKHw3U4L1ZRzdVDFmtTK6DRCs7w7PBnju4XXiDTF7pgfH",
  "key38": "45Gu7bVtSorzjWh4c11tJ6KTybEd5CmTuvrkXza2GjZNc3iDEE3CTKCcke25N2DuYW86QmeXhkLjUaAXxt58hHK5",
  "key39": "3reumcAS39t1bCp2iXXr6s1bWVKp5weTJE2dpakJoiWnsMUSoyf1B7nN8RoNADiG3zD43U13j3jz1pfpFeHD87ny",
  "key40": "4p2dbjWmCmRCtXNVa8BLLRYkF8pr1znXkTSvq5o56AiPBYbGFW8nRNHxZzhHUzoaJYD4RQBXfnsWNM4De4Ff772N",
  "key41": "3sWCVpuRt4q6SkXsDiFkehtdpXAqujiJ4WdXG7UVhnASbz1DdPtsBcWbpWQ1ubkAB4ZCJYQbULDzxeEGtMnQruaU",
  "key42": "4nctmoN7RsZPFehYUZbrsLrSGDDcH8BW2msLhgwSvYYes9LiBTTS1zL2mcnie36TZgrX6VayW8Ppc5vch6TM6UE7",
  "key43": "4s7H435sLkH1c9Nfey9dY9WwjYBXnBVpP9G4qSE7W5gKUY5DMyxFAsQyp7FaoNDuuTYiU6kfRiH76jMUtoyjRoNT",
  "key44": "4Kq2oZgZ3qFHd9AThZkvTqjBUtB5NSVtmiEZCpmaxvx7NuZE1Dxotxd8AyfDbPHEwvKTHjRPRCgqQbQ2RhTapR5p",
  "key45": "3fF5WWHBd1cFXFWLNgMkrAKA44b4dSJKCCtpvx9cSQ42phmToFcZJV7GNNDYMhWrHWPNbHwPtKrPp4yNXtHYNPQ",
  "key46": "2Hzvh18B497bqSqjbHGVhJPuGG6VinwH7GyryJsZ97FmFkaknQuY5Luv5zFgoyhckhB1kYxfh2hQugTJWxnMypBJ"
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
