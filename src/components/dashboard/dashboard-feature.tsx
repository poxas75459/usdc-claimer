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
    "34ENNuDbSPoFRXBJUfKStdXPfCoo7URU6bq6e6rrJVLrKbS9kpGqFSurjEEoBySqXYSisgHHrT2dyEcKR1vh4Ldf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mMbUHbtPny5e2Nw7R45NrDWThHSLcY7fQEAM8VMbJz5AFNK3Xga9RotYMWGT2g8CQ55ZPq8rM9cnzXZT2NmDJga",
  "key1": "4KAFikoZWBCJQqwLS1WmL28nCRvX6NDAxxAXzVTbuqz4j4BEsyTwZvMrpv1geBEtmG892R1TrDVPfhEM6LmAUywV",
  "key2": "3aR1pwFVByJreaiDSKQyPkb6VuhzFopbqGbpUnocmmhJ1TGNFdJttBmte3Vim5AjZWpVHxAn2JjnSm6agKhdCpy7",
  "key3": "3zYinva4jzHWSfYiJtrGhJ5SfafqrUvSpeJaEpbJumik1AVxCsAK2E3Q6BdShvLU8oZf9MM3MvdwgUifLXd6ZzHf",
  "key4": "2bSaEQbjGYyrhWB4zo3162aJXvSpJWXpAAo6beLFRwRh9sCeTyrZhHNLV1VAhkGBgY2CGEoJztg1J5jXgGfRS1FM",
  "key5": "3zLuRnmC9vLETtCgUhbvUaAKquQnoh2PjnZTFixMSwMp4rscJfKRTGrQZWDanZaDUVeszAjmhQEV23jtufCoWKxf",
  "key6": "26Sc4hVTZes48Qsayu9XUbwwrtjSuytwAYz1yNmMyp5DsZM2VdDAuWL5MwqA1kBHW5gwXEYUnNuxLXzE2n6oUQGj",
  "key7": "GxDUGvH9scWygQKpSHmiAHgVbUFMbo9zo21CP9XErVgzUApurAmRhqQHxEWiy39hixJRdmo8sgm537DaEviC2HN",
  "key8": "4YuqFCWYQBpaXJzwymCFyKZD9nA6T7DB3XzqKesZTtJMQc2xs3pRmzNZUw4Rwk2YG2W94bBqAsBjYw26of1uFD44",
  "key9": "53nRvCskUJFrwEQmMuKg2unYFqbAutyqsZ9ox2ZrUcr2sTHpX9eUUMrLqwyzdtzn9Z2KYb3jTccR7r4SjHz9BVPp",
  "key10": "5yY758EGfXcrTzzuWQTSQrDv5oWaqj6oYzQT8g3P7fhWNASqUQzzq7pTaoPDYyJFfGnK9pPKwAh9cwfz5cAenFJs",
  "key11": "iGL6BVvqcKphpsQW8GBCrur5RFUm48zcoDybZVHcZT6UHo4G6K3BsEhbhMCLjUt5ZsG9Zvw23vUtS5Sm8z3A1xt",
  "key12": "2GkxmftCjwvskV5SVtv3u4GMepi7jVzxqv2Vz2SubEYL7Yr1TFo5KAV8HJBCfqDyWxHeC8eJ4H1QogMPgdqzESPC",
  "key13": "5qPV9RYjjbaE1ojK6Kt1TuhAfhreoGEaJiQi6c93ydFmCvcSJGwXjYB5Ynxoik8Wjvkfcai2CGAMsWnKRWnW3i6v",
  "key14": "3WBvfssyfFYaiwwLFt3dBXXFjinuW1ruAPUVZieDJn2vyxq9MR31FbZThBaw9qgQx2ZdNhewrHuxhgxS2u7h8QKm",
  "key15": "MNfhV7eWKS6nPQgKo7dt783VgA8gbbf5cCSm7akSN9EafGxZ3HAmQEgV59vL4Lv3EqzSm4Uw7zZj1Db2VV1vKBv",
  "key16": "4Yu24mjeJtt3TWm9xnZXaKp75DTJispBnc8j1qCP1cfkaZEXu7sebBLqA3LSY5LZDcoaqpu2PJKSMJwdDug7KbSJ",
  "key17": "GUYfXZQyUpSwk8g1z4uyNcbY9uLrB1EsxHP9Gx7QdV5jWNR2cTgFRTUW4mLSfXHGYXQThDBxerecEpkQmTH38eW",
  "key18": "w9yjxQ37Jjny8WLt3WqbdfMvTMnsrrGZeS7hiSprVYZNDxW8P9zvb7FbNacxPLuWNMx8ch3WbQVLP16uSrSgVrk",
  "key19": "4kpZZu54B8GsCbPPVtYwXFmCGh8Zr6JygHeeT11HBv72DT2qgyMMvC927xSPwXzqifXwyK3e4xtQgHG7gRAHjxDg",
  "key20": "58DjWRJJ8ruRyCfx7BQiqG9CVFZJvDHU74XLjHGXkK7G31ZuZbBodr4xRViXm8ygWp2PXUKnhUYRp7LMzJWMp89E",
  "key21": "XTmFdydsAPPmkwwaU1QoCZ8QXyTnvDjQXZ5bVasBd4nJWhfca5FhFA2n6pGTMc7i2H2FdTwH4xfbxfZqaV872BY",
  "key22": "3sumNQeuU1zms3wzr7W221eYkcixbzxEhN8sDqb5pGGw7M98RERVJbox6JrDHSgjrWKd9ukpRPfzLFsdZvp5UbMQ",
  "key23": "2QwByVtJ39iaMaofCzcmf5xCymcs69dejfbaT8dXP8VKmGV4UWGGEZboGegkcisKeKGEky3G3KL8FQtJaAsnZyRF",
  "key24": "W8bQwL3ABo5Lvmn4JEmQ9UeyMhMzfQsQHEeorfYkcjDBdwRnPUCXKctJGCVaSjivX2iCUrZj8uZCHggoTugcabs",
  "key25": "4iyRtd7raKQdjZoJ3BMmXFt4cAjcJ4vCourNtwuGHXwygQg6c6gt5zCFEtUFjJ99F6DrGbrH5bRrq4R27xkrDS8o",
  "key26": "25mMQYbgcgpa4t2ojoCAj8d26P3SWnCzpNWjwWzv5r7KL4npJK36Y2ZAiXbnVrTAVk3tQ2XwcZAvMJDiyHfJjz2y",
  "key27": "4bw1363yNkfrdn6eioEz5bDJSn1np4a6QUVMSZPPg1KFJuErnufuYi3JTV1RzD2N2ppjpQBdNkajEzZ3Two3U7Yx",
  "key28": "4RmFiTMWC5io2SHCSz62jSTqJ9pZXctvZH7yHuJ7K4oyLJgRwW1evFQBQ8jA8VkL75EA4vmw4bUkaFWzooor5qyQ"
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
