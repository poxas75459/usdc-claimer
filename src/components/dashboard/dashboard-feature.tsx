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
    "49wdCTtpiTyy4UrztAaFYLRFtGfU6QQv7ceBTBpkCvtYsNJyYEnVumc8TthFUnSZuXp2KbX8bMnf5eDU1HZwyQuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5efTGV9U1oUkw2C7nJUNJ3wFzGoFQK3ekxngw6nyXUBWSKjd4Tjh36yhLBiwBU9d1EfiuGjLksNnUzmWW9NTX9cx",
  "key1": "2PVRJBngMidXthjkWGojwgQQLvrLUAi9vgLY9tvpJuQjagP84jbb3XXSgEqZLzHpNxJjEQeaG1SuvD4wCN7GGi8v",
  "key2": "aTHFxysFtBhTia2UeX9HFpjoCWMJDqXg5kmZ57TPeUervBrwuuqa2ej2SUNW5wPLfHkJBmNSrRyf5koReA36s9F",
  "key3": "29E3tPQbLmhavrBJaEYgAxuv1CNdCmwSxHo3PscqaV9LFkc4iao7EdJtngx91oQtNhxhvUUeV4V6hBtZcRJrq3qo",
  "key4": "4nhgZwJEYFuRNaXaF89KCPkq9yXCCFVB81Ys6z1dmSGtuAVey2wphuZAdJvuHXZRXz9KfncpScoep8bE9hkNbc9b",
  "key5": "3jVaHYiNVNBWsiSz7seFPUkoMZEwpe6QsGbb1BsVnFzBRXpzjEXQHuKVodyxwJcELBSbSnhBSxikwuegBGsE2ULi",
  "key6": "74WXChbsPfiSNsr7wWSXGDhJHDvZyRNc3WgLyeyTL7xqPLsWR8bXfDAYqPx7fJJuwxiKmnVBMUsDhLDppvaLz6s",
  "key7": "2eKKQgpdPpVk3zV6eexuB1ust9f8Rt76DEg3tAzKUC9h3MLxpNAkkxj55xoLchxirpTwMKLwneUj2EBWB2JiroTP",
  "key8": "2ixMy4TmcU6kGzPHyT7ZDGtxrkWvDX14SdLZgX86VvXgAuRAHexUVgjQwSnKRroY5UfeYpw2o62ncPY4cXJGwyAe",
  "key9": "3i6FYXtDX76RqsevD9uFji17uqGhsT6QqsfzHVDKVcgybSsoFmHPG1otojpMtaHqsxArHBmN293S9W1TQjKzJJ9o",
  "key10": "5gwAQ5tbAEjgZcEG9qBm11jWFWdPKSYgK891xAPqQNc71TiatuqbnfU9f2Us8mMTNMAwNN9DiSdkt6JA7twHAUy1",
  "key11": "2CDynQ9ZqCMQdLofJmZ1nFgciuJ5htiDkcYRrw4syTBY7h2U69R2WJd3ypuvPowB2KySWYRT5gmfmhxrNyZfcg57",
  "key12": "4RbxxGeHsPqfk4GTDuHziceyS2PLQ5xDXEq7sCEcbWsoXcfySBx1dpaivU7xgpWEndmCajMqTAmpaVR3gYC3GFbr",
  "key13": "4rRvD1iC6UyMnypUkeN37dQpbg7Zs5PqRbWqoS6f6Sm8EderCYRnn1WwwNUhzq2sz7LpDKnPrCaGeuLNh7qwnGVQ",
  "key14": "5qZCnLEszLsWWV6K3CpCLKG2Qco6vmPMa65J5qxojN1J8HyLJfoWxZnjpz1MxX4VbdPf7REt37RuNQ2GwE9SL4dJ",
  "key15": "3FD21Ybbwzfcox3aAY2uP3pXiAAvnkP8y1echBX24A6Wn3PYPEyQmwxGt2ZSNLSmEGnrL2EVwg9aGghuvkUffJAJ",
  "key16": "5PYrXd3gWAzN9T8qdQMiHN8GQsaDFSvzpX9UC7gtRpF2hzvYCG9Q4va8PUAC3eMXmNs6rA2VeRr48JLFgNRdQ2cq",
  "key17": "5HYszFAw51bVCoaX8nG9AYF9ZP9B7HUGN4cRvqgCzZm4LiGJwffPaguaxGeUsqmip5HmHvsemiVLty2Fpu8vfuGx",
  "key18": "5XuUG6gYGNK8c5NKZNxyzKNzJuKVVrMRPRH3ZVhcTfkRDDVEtb922HZNCFXRskaLac67W7xK8pQftfhsgKGNSmS1",
  "key19": "4R5nNM5xLkKha4NEnCR1W573XKCtgvThVejETqANWTQmV3ZFzcs5GgQPedViQMNV4e35hdj9ZjWuZsV9KUr4z5SB",
  "key20": "5QRvngoQ7A42bvWhhhPw23MaJLiF4hxm6riuL8iGngBGGWu2opQXNMj6wyHX1r4q4QcdpGJMwCQp2k3FZq1h5JdB",
  "key21": "5CEQeUYdx8vR6VTcQMGXRDbgCD3zhm8ZJKvFQHdA5jqiT7HsQjoHkCpLVqsSe6vHcMsvczDHQu7hn32E4iygVwvg",
  "key22": "661u1pbzcqBXuXP52rKt824kNNsnmhMCYh5YrzRf4XjvGqMNkzpok82Khf1a31WsWmRWzivG7FD1ZNGE1tqPgzHj",
  "key23": "5yeMJchLGvqA2gDfDpKgKF7U6kqfzHdJ9hovq8yfH5LKgLuazd84g2DQ4rxJihgzWzB2y9m5y1a6d6nXQdKzsdZ8",
  "key24": "9F1fFBQZ8BBSgKGoHTuFeeHimLQ93vXz4o9uqycau7X1aAhJF4FB26c8Roezcry76wrgr1QMprPxSWXH6bzmGQ4"
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
