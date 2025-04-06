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
    "64chBjsDEL9a3Rarjsu8JuEokWxG1mvUcEjKzNUDTEE95qEhHG9bACYuXPzLgC8vU9gvvPjwmiGG1w4YYSH6NbaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32yMZaPDnikrL5fj3twenZQRmqr49bjuSmoZiJVZ4nUCqBRUxSvtFArMNQuPBWByFGRAqaG81fYgucThc4JSuY1p",
  "key1": "46vW329vgbbT2WpkWf7kFJchj3NQzGhBVsfHBzE3po7xrQPEKutG1ExTuFxMQnAihwtjqqAmgvimBkYu4pm4Y5SR",
  "key2": "3DqAa2aEaG2QwLpU4ug2tivDojug2AXi5hyVseXqp1pjrV2xEjy2t5BHv5tcJMofVzTy82uJGxqEqCCHbq5Txt9y",
  "key3": "265NZUu4ZsBZgGEDU3UCkYFZ2Bz3ZcaSkVANr7szrYoZ5oyVNEyxTEj5GSu73rTXKLa2nedfmGqk78ipEmzXXSTH",
  "key4": "3KS5QwZzRSc1AxsViciUbK5MgEkXFc261TDV5GYVtgtDZLqYv573tVnCmEXPYJULitSKj3RGE1Mzn1b1VMsGo8gf",
  "key5": "7b9teUA2GWwi2Wtqww8UTE8SLYziBbFvGzGQMkR6Hc3hDMxaLyBZQHSkot5quExXBs62ddHBZDQYEcMb5JiYg6y",
  "key6": "t2ydqZR3A5p6qETNrqoGKVFZSWz3pYGs86YUTmoC87eMpA79SpeSaYsdqqrz8rY23Cxqxvrp9zz9BwhVEYA2EFV",
  "key7": "46kWdtxxxD4at3Car5r9MLyyUds8ahuU44mn2UK8b1VRRhA8ofefYBEAjsT3XtqZQLzv6RrkEuVCb799WjyX7Ptr",
  "key8": "2skuHM2aSyiycc6u5YSJZ2CtrcikstwCNx5b7UyErAMGPVJtyVhf7SfcFzcfimBoowb61gc31k4oNXfJaWPmC8ZE",
  "key9": "3Y1AWn9QRaW7UPDyu738MXK73dVPJDUUqQF5Y8vtbrt2dCvHnNNjDsT1dxRFWYLHrBAtFv2Q8WmyYJmBe1eYtCjD",
  "key10": "DtPhAyA8CyzmjvSLgEw3rxLuXHxJ8nxuakj6h2Je8jk2b8aajyuMQyYnhVs5JAVz5mgrwsBDNp2trWXYXsRaPDr",
  "key11": "2DbUjA8ezEJQduXM48DMGnSFULYAZhWt6SEX3NpZWx9oTagbrnKDW3PNnoDk1C23VbSUmkBxVVn6jtBmaQDnLgNr",
  "key12": "4xqG84Y2pJttyDxYrUs8FuoDKfeJAztqfYcvBRdeTRPBpndYkpBCB3wxrgVNg1FkLkvVTzVD26xZdJ6cAUKZjsMn",
  "key13": "4MH5giNiWP4qUPD9gmps2U5PsXgSDadMZgnnD1PUKW4qz8LH6smaxxynSeqmb43yw6uFWJDXvXarD1x6FaPtwfeu",
  "key14": "4hZiaUDcJ4Qkgfh938cJaSvq6NfX7UjXAJ8ZPCQ63C9195TjiQuKSLTYicEgBQW5NWoGxErrLU2FgxTSb7d18wnv",
  "key15": "5XeEiWXS6KDAYmRZyRSTHJvzAvkKJT63M7VUqdgeZ4RzVRXMg8JFsyeKZCNhsPj9ufEpYDLjVH9Z2G6gd3S1776Z",
  "key16": "3Lg9C4NLFND2rktrAh7Di199punogMELwWV3Kstwdr5iUdcQ3gnfXy7J5ZWiPMjtdWxKq2GHWf1nYwjWGs584S9Z",
  "key17": "3s597vDQty3Cp1qJ3BxnA13p7ngpoi5kf7NfdEqqrNa3b4QAMTp4JTjvkB73gUsdti1sqgzmEfcBSUi5HtDZL1TF",
  "key18": "vM8ZytR3cEhLtntLdxtWKsH8d5z8nhYqq6Xa75hXSuZAJReL6dGMUPFx5H988v8cBw7g75AWmn6kdiLPTcwuNu4",
  "key19": "CxMuxeCvy3JvtbMk8SLwUELsCbQBsase6pwpKoDviwd7iPtuftoqRdaW64DHSCJqsMK4FVQ2dKBcfFYbVzexs9J",
  "key20": "5kfZTicbQ62fAFJoA2ji82j9tmuHoaswBHk2GvBx2gvAk8FBEBoMbXbXccUj9hKb4BbQ5AyJ4trRTbCNV7K77ubV",
  "key21": "2awS62qAuPDxfPSyK46ufsz7RB9ALYHFrpHNbqJ3CSZcN7YxcHqCCmBytBJWU39F2f2pJKDqPKnhX9itzdabxi9X",
  "key22": "42TXd8Mnd37cP3GMEnB7gu1Q1xuKXqF2HuEnEbaMMzkBUUiPexZH4rJXbtQEjvqGhixkBqhYnJrhn4oaDWNxwS1v",
  "key23": "F7RZNrB29f1Qn7zXJe9zfWMc7mCG3fePaCvDtUqyLMjrXt3niCP2Y9Zb9ockZkooAGMMBAs4cEX3nKTxMMBCaFy",
  "key24": "5WmVsa7Rr3kHyDgvjddWFfTNK5e159Zvc1We7UyGdRJkCsGqS4oickhZy6ncopu7zrB2jzqoUamXo8kibXDdDL47",
  "key25": "4iw3C3rn5EDt1NydPCJ8giWTEZDr8WGkF4iVvjF58eRtAjGr9srcRx7d59U2WRq2WSc6e7bZsEqyV9dCiHBhDM9d",
  "key26": "3uv59UcmRXt2aU69byXN7DT3Yk9HUoEwA888jNQpbJTMr9Z6qe6k8ZyD7gpJpe6awWwTYZbbDLa9owvW9f3Qhsdk",
  "key27": "1Wr3PJXmnQrFWcLiPEafvGuuo3xd6cq1Ps4DHTAUb3sTNfs6ev8gatTZTs7zseMG82a6GH24oDwDpVBgKUj8wjd",
  "key28": "3rF21TdLx5QqoDFfvXzh3c6WHYLmwh4UQy3iK8iwEEeHXtyJFUTLpVEgMusya1K85LkvLCiQxuSNPN1rbThqaFyT",
  "key29": "4hWxsNxdSP5QNWzmqk2qKr3hc4RTwUC7zPqDK4xjUJWqeLJkegAFXNFzqnvqyUSbpzRaWbJAco1Mq2ghNVf9Sxkd",
  "key30": "4sSuE45aHLwxu9eEFY3Ahs4Fon3kMCbakaCqzxDfdNmUCwahbYkQQpNbiEDhPiThqWPmrx5pSD9tKxEjMnkdNsQx",
  "key31": "4T9wX3Ta4UrRTvXdoPpty1yNjN1vx3fpcUPk9mP2NsMBpYYzrpEUuALhMpc277BHFg3DnGiXwcDuLkbPVXtZFHWh",
  "key32": "37Cs5tTw4Q396RVkBKRiAZqiFT98w5871LBsgxSJ1caBHSeUXpXy3ZjMr49t2pzMEdLWL9oorq9RWcs8tKf56s4A",
  "key33": "4RCvq5YVFgeBAyt9wkmEYLtKsMzEL1VEDYb9PSr5Dtm2etD7haULvMPeDXUFQtWfcmcMcMDE8Si3D4aaPneSyv11",
  "key34": "aCMq84tVk3oBnywK5y7otJiXTtBNjAb9NgHPxnXsBnfErQ7GUXt8f8uZQsFxLMuhVBDz4ZqQSnWDb6znJ1MQ14w",
  "key35": "2YybP4o4nHus3JmMLTdHR5yw35XxNYaFb2ZAJVSpL4zXXi8NGzPatxXVEEX6wwWdTUEFskWRnpmYVzV5wMM6pJAA",
  "key36": "33kxYcYiEJQUfcRFKuMytdAxv6ncKLivwCJimnzRGuZSnLgktT7hVzA3db3dtz1mWeQU5y1MNn8T7imwFAan6cw4",
  "key37": "274SJFt9u98Ng1jopoJkM1PUvGturN6FxyZM6URFH4hnrcxtjwvLcPQKgkuXNt3MmBHAm9Z5bTyLM98GUf57aF1B",
  "key38": "5RZkfCjC13sqvYzMcDVPKnasTPqBjTrZTQcQtU1fSdGFuGrngcWAg5FArCPSZBSvTf672mLRMJv8dGmHTFViajGV",
  "key39": "3dzL4mhmGQDhiigrpu2NkcdRa6itfVNsgzK1bXStNBegzr6o9iAbGBJ6kXyULeXRczuHWzPDXRDAGKS4h13zdEqw",
  "key40": "4xYfYkF9WP45naxowprbT9B68wsCAJAmZXcdo65jfu3udaasupk3sB14aN1NbzC6e6KnoNzQ1YYJ6yFBqZHMzYT5",
  "key41": "56TQ4qoEL6vK1k9TPYeQHV54yEuy6EUdbuqHCpzTd3DjwEbg6zhckw2YeVi94XC1SyH12Ay76W8xGqD7LGcEoV1j",
  "key42": "43SXBmJEXgnqzXE6ezEgh8EHfxGBqQAux6kE98qFcZMWgEc1i83b1HjYwiM6akhsDnepocDSuVyYfhz8C4tdoNQN",
  "key43": "3jLrRrZfM9F2oJojYfqnjAJDDSmroKnXg7oudHCt5wkAQiuyDSSi9XH5m2G7Zjdx1iQPiCWWaT7APigfH2zfoBvm",
  "key44": "53kj1BNt2fPLXkiyC2J1zxZ5r6WPn2X5GbrjmGJXn91hJnaGEmAeBWkLiodhetUPeT9sQyXHhFC1fkkgr4tJpMNx",
  "key45": "2RJRdQWVCwRXzZnG444vCZvntRFim2FbkrbV9arm91zYnyuBWcGj2s5BQPBiUja3mipAji12Z7tySMAnx3DJcFkk",
  "key46": "35j8bj3XhGSYn4coBekuyUU5eJEkUv9h6Xnfy3W1QoW9aNsZw9PVM1hJTTBoWiC9YAvY5EvUM2PrsYZciZg4rDw",
  "key47": "4CGhWAuczhVVs3UY8tmCc3wUYUYVfK3GUVbdgzrYKQfrAQNT1XbmNLpHcsDGkmjyxghQ5NsWNEY7ztucEwGqNYz"
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
