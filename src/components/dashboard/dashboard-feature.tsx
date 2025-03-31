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
    "5dTBcmH8SAkUhKMcMKZn4zAbLryymvKV2LEAeRVUKUrrhZSUePshXttQ2Fmbb8bMUvdih7hRndt291KyZH1499ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FpE5dLzEu1HpSKwcS9itLAN35MJHesRucDMdu5Ro7gsvF6Vto3Ci3Afq7KpjtivmV6vxKnrauM8rDHmfSdEfqQq",
  "key1": "4pc5UviMXVkowkshK2guwztiuGftnEZjXVBiU3hGXja1V47TswAQoE4Sj4FBFys8LcJmpjKk3iMZBtUx4S6HZkX2",
  "key2": "2Po7Do1myc9ePWW7MivEufMsLReLZJJD8FCNWntq5xWpmWWptLgQc9UiStY7Mxo5nkYkyYrgK5K9CLmzFy1eqs6C",
  "key3": "3iZX9UZZBbvEM76EuSunLLWjhMgcv13iDgpT2NBwHZheJ8M8nCEtwcz2Pub8L4z2pzhjH8jwZde9nqirX7mBjdeH",
  "key4": "2R2Q654u6hkZgXKYMAsMYRfDnKyLThyYYPkzBzTjS9NgRUudJB6WgBS7yGcDJgrdTmy2LL3KJPfDSbGj8nJgzCzz",
  "key5": "9LXTDjPCyQHZQunHqPj42yFSUT1tugArFAdUVj4gnYKZUsQNyapvChbCmSomuEKEfiHxJ56Xge3Aj9McSsLe8Q2",
  "key6": "3QAinwTYVGojH2MpMZb2qAkADNbLD7qd4h9kf91g2BikAps9aLQuNCkHncQP34LpbdN392BpKoVRKaiBqEhh4YkR",
  "key7": "3gpJD7vt2uEQALXpqgoDoLAVkRSARwshDKEatxTdN6PixuaUPcmCw8sues47t65P1RSUYqqezik7H9SemULsCwmY",
  "key8": "2D6MQodgvBEY3aBbEAhHtMikYhkM9PPj8Aw5GYQb2joRmUgAxwX9tHhjAAJq6fYdJyM5RkAWnHbiHqN4WU1yRFkJ",
  "key9": "Yug895z5YdSDbvJL2xLTg6dkrS8wHhS2ZL22msUoSvrWhEEXwZ6Uc23xuaLYVfRE8VWwVhMq9DAz7aPUGy5bf73",
  "key10": "2jzJZfupCXg9XyCjfJMXYFZqjvpJfWLurkdrZZ9q7xeetQTFwY4aMV3fpGBTbS6bAcTjsqHbUWjc69kQ9KZruQBp",
  "key11": "438rse34qJfdnMQVQtdVjRfr3qefoCZSNuceH44kFb1gfzQTdDpQ6uV1VYnkEZSBKYfe135b7J1GZqFiE86affPz",
  "key12": "3tXa3i6btZAoU9r7BxZE7DywRhm53dqibgffoJvtDvn35gTj8pM2SziLQHm1Zvbw12LnrzJi1De6NhPrawdAukBv",
  "key13": "3K6bVAHru7RALjwqDJhFA5w6Nm8J9Q8FEkAo8MtCRdHKXHWtVWWBAK1eQVHj3tY5qyjBqTo74S64di7qnRxvFRU1",
  "key14": "4xRgf9ovxEg2DSggXy2zHB11ZM5QjfqgGw5GuaTzr4d9hg1gT9NRyGL7dVPvbNvue1HBLjqsRm5raHfKB3HyKmbF",
  "key15": "5zQ8p2xHZsSRTHUShaobHMMmCwhVL9Domj34katcRTX181b4tsGYM1Kn3zviHj5mZ345N32SGrHkSEvPwtwnKs9z",
  "key16": "WrDWgC7uoTF2znyTEi4yQ4VewdPVpD4KaA9EykyHmhrcfA97VTeqd8KSpdFuNPr6AppAqeuevws7oEaEWQSTnN1",
  "key17": "4qLsTJqGQDZiZdcp3X9syaZ5hUxqaDmSr4RSyM1uwNDqQaquqVuXvs7EgqXZvsQKp6Y1gMCZE3C3xPcunA9JzxSA",
  "key18": "5SUUWuqAiLu4yAukDUYiwgFCaJ4N8ZMjJ9Ed4kMynRB4zZBFH5fwAaiafCtscnpZMiKEoSATi8vKHWNyn649uScr",
  "key19": "2QVwYaJn8CvUZ6Vd978GgRkV7xjakgpRPXxw25sqby3KPo3U89oVc9Ng9XFhgpYALDUBAU5QnMc3fRfTmtMaUVfn",
  "key20": "5tnkHkVgGWbuudoYKhgvTcK1ohDQUU3Dn9bHp2yxUBbD5udiAWgSedKoYbDm9sD2sSg7j1XX1QXNN1LHzB4gzeCZ",
  "key21": "2HpM1UAZxe4tWyAuAXpUZWTZikUNv84qFE7crFSbMTED9SSXYiZgovr5rgQtuSr68Bid2SZ6AVrDRcnf3BxuywvM",
  "key22": "2dEVeykKPtiNSwiP1eqRyLEBkWK31fPyhrGZ4PkgneHFHn8gnKLVHE8nxHLoKnP3bbVVhaQUv7u9ysvB97jGbaG",
  "key23": "J326sVaH185hhz5fbHRgfS8i425odwq3w68K1fxhe4SPcbUc6MZ8hSLApNFXKqzdCex3WAGcdizkTcSLUud4Qyv",
  "key24": "36qVjykcX5PAmjd1Aa38himh4xrb1dPUdqh1Vrfr1jbHVcakEcBMNSN63gRQnEoTpRQRT8svRRd8D75GNeXWfPC5",
  "key25": "2dbEQ4LQLBWnpSqyE9Ebho1egkdFyqAoxf7NvNYcfobJMVwCAG6QnGyAwyyRFphrhUivrvF3nWmd78ijyAjAB4Pq",
  "key26": "2Ftpw7n7oZPSgQabvdzqpJejKER3ootpN8Ef4qJKJz6vbTLof72xiWQU7f2vEsqSLwS7W4wUe6rREs1c46iDSVgk",
  "key27": "7PH3GZxkzEsSJBcJUXk4EPmmFs5rUt9LyFSEEzwBmAhLKwb3m94GNe2U6UABTH3VTyJseBB2VFxxXF9CifUgFtn",
  "key28": "3V9guwLdAMWhExVqR5z9ezSVGz1EgsX7GYq9Kz5qsjDWEujWbpFWp6RGoVpBQKsnS57ZX3VHRXCBiT7fCcTTTQ2V",
  "key29": "2ssn3GiPydhfB85KnD1G61jEahu6cb3wV3JEJxMDgMTLwynSDLMgUGikAXxXkfQN9ExviRGKRUFJZhmSsZJ3Nf8x",
  "key30": "2rG56Wp2vgnCD58wgYKmihtV7oEyiY1XyvjsLfEcH3MCeRV7Vzbwg2X3G71vKn7HCoHW6qRx5D1auERupCZt5fPG",
  "key31": "knjdi6Kk3NNiQnP3pfUK2EbGVfQEz2HXGdGcowpa9J9WaCcEQbzRwFx48wudhmtYZwbFSy7UAwdhsxkhDEQH2xE",
  "key32": "4A95AE7s1nM5hdivJwzQRt4hRxhMbCCbtCbuMZUkxS9GgGAjPUihipA1BLktduA9BroNwN4Nr2R6c7XUAcFLesxB",
  "key33": "LdkTMAeogAFeZrmhpR4LQ5rtAK1tXzTrTBnkCsrCczojQ5k9xxQDDMfZkdtsLzedAVu1nTrRE29Gc1zYUpKsJus",
  "key34": "561wRXUPUFQPu4K1cBhLotmJhuNf9zTm6iMzKBTVM4Ty1LhbMSmnPKa6QNuaMNg4BMSmjnhDQNWHJbARbMUSiizH",
  "key35": "2UU7q9X7dRjND5sSSmSf7ahnJi8BAKGyQ9VfG23avY9Z9nG6ZvxDVoY4S2ZTHaBmpu1yFCER4d3KUkzGvgGu3gKr",
  "key36": "521YVJLCDsYW7iP78qakMPGq4t2fZRnxNmYdJX18DLgtvxFos2s271XpW117USpzrTFhFVRkmtsnnddCb7yNFFRJ",
  "key37": "2wPAjqLVV8QCmBJbmc43XeZoNKhrG5XNSBvpPcctRWXSpReMsL8S5i5bgjmbpqt2HXZ7hiJxFBR3L7h8TvSds65W",
  "key38": "35KA5k9xA2jNZkMDZn5er5Ex7mcWpmE6kLFpz39BbMNBVMeJXgBQ8ZtQCwK9WbEwAZERgYLUN7sWT8ix5jeziC2b",
  "key39": "4bvdw3FKSvc864pH9YhzPDGHc9MpQs1MRd9cs2u4XjzWd1dtGf2aFkwaPwQ3i7DwnvvUufb9mKsLC18a3ZXZnh61",
  "key40": "55neiJTsvnpphUvFeiBJ5FJzbQeFqADt83oAPFDuekzLTKWdo8kkWnLxq5wGt6X18zz6pP2uvH64ZTZ7JTNcH2nm",
  "key41": "f1hpeJkdwLGFqXpXEqJe5yiCoK9ByUatEuVB7GYvN4Wc2LGgsaUZstdnGWAckEC4ew2PJafe3ujYihWqd1McCB2",
  "key42": "5yJdT7PwSV4QeXrtKFv5VTosVLCTfqMS5Em8pQKkN8U4Q562u13U7tbQE6vF43ZgDZx8EYBNQbuTLCeCuybPLV8U",
  "key43": "2sMZ6gkLVix3FvK3Q5PaZUkRtKtnajY6U7v8BZvgFQ26GY2XH6nTBJD4o5L5auzu9YgGmqEukDowe4MkNGfcDLSB",
  "key44": "MJtYfimd8gETVCHT2tSEZwaH54bNv27kEAwkLsPKTqUfVQzhZauB5ymYQYcjuweVDrM7WXwgzmVkfTt2KxuZcZ1",
  "key45": "5K8wCwhX9icD3wdwqtezx6BRQYbmi3hEG7WHG5LcMYqHJKXUbMCJab53v9QbGw9zrCLwVx13FqXtnawupUMFJHYq",
  "key46": "253zHCWWhLheZY1mzpSW6PGYn9omJXCH4DyHPoPHPgmdevAkcEJwVkikstwF2QkHuNHuax8KFiPhReJTBaEZhAef",
  "key47": "Ka2WjL5GBUVNGT4eNaBB2rVDQU5rt7LfVPGTL1A66ZHvUbjS3DgwGy1AexGdoJHARALhLv8qv5cVYCeZ45rmfPY"
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
