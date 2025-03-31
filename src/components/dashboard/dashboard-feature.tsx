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
    "5sCdD2sjzFAMLhAuZnfSQWCoczRfiYZJe3i1acJYE2HEZQdzyqjRbH5m1uADop8gboN1KeCgg65xXdgxFCGy8ZVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35jFEpWsKVWtmrSvUL84SmNBNiECTfd9BH9JxoSijYHksY3FFwsZ9UyvnKQ24mdzW8q8DBXBqqdBkkhQkrNaxur8",
  "key1": "4QvXHcq7dzdpZfZ5EbiVqG8rt4z7fp5g6fsA3JeynH3BHLUjd8CDVuDMHWz71dPf14DBqhN6kUSUN8LHr7eUsA5R",
  "key2": "3JxLJUHxzKfbZMrjinCGao8qidCjqgXwrWdmqwgni8c38orfjBF489Z8MPGbMtHAmXyqfRXtuMU6oVpc2tqe99ZV",
  "key3": "57Pbm7JeboWJGvTXopGiKUFrhJxyCyoS9L5zrBcY6SoWNT7agGEUc8UCvhvQV9eFkMYyfcJ3aMKJSThfp7CJYb9C",
  "key4": "2msk8b7FEynrn7EqcLkTbBSrygDyTNRgQCV1Rme2Esod6eXq2ULbwixJWvENLJN8h2GjB8ThmDF9xYZufmatFCQW",
  "key5": "5psANGgEXKp1vizzefPfk48mA3MghgBgLKx5BYaDryQ2g6DUenjvnpRK2B9H8TWxzuc5ZLiEdh6Zz3A2ju43rmUW",
  "key6": "khEkwR7zUQpJscLRzxGK9f5utKJRBp3KvZMk4a2pLHPWSU3EnJvjEP7yKLpEPU8CXbq4Xch3QqcCU12ydWunfxJ",
  "key7": "5KtErCU1CbiktY9KVGLgVbv2YueEN2pRH6K1jHdmTqrdLsNdKSryv4n5UGCYj4JmUnT9kRk2MhSswfAHy8tNQwfN",
  "key8": "3vj9fKB5zSak8WnQbHcZVwurC9Qv8xAmQBJTdgFrC9ehhMeZQUofxLXuDaJBRMnvYcomAopf4buL6hSuT5uoEa1A",
  "key9": "4udjVShWpnTSSPANar6AjErhwXMuH7TCCqCGaaEgovZWXeKf3EqHmZCcuuWUiLa2WcBBnYBRTQcZ6Gcr6k3uN9Wa",
  "key10": "5Ks43T9gpBhwLNSfN1EUT8Fx8o96Gs2nNCsu2584S7mqKCreBmbq2Zdm9XGYjRRUuMTc4wLFNcfwjwfzyXnCVTSV",
  "key11": "2zYCJxgrYyLQDtMvcWPYE6DcPYFp3jrvTDCDhmvsQcPKaNtGRwQ41PK9MnaywRU3HmMoCn2VtAvEbyFakKKLv9Fj",
  "key12": "3543hqPWB9Vii6dQieQzvsc9PsXjb4GuBQZestxRP3chtMLSZMDKsmQkR8W3MxkJyZtugzAqFbcvi6QTr9u4oe7H",
  "key13": "2KjuiBQuaYcFbaiJUzwxVUFfs9VeYb6xaMCregzNabyNXvWoQUsqe4vZno1kry6qdDBXXax3fw1KhuXvDyKNwLM5",
  "key14": "2VSKXUc3SUj5hpyAEMWzKEGCBRwEgssyk3SN5fw1GUFoAnJP84Vya5YQJevPWQa8HznTL3ut937yuEigaUmwhx3v",
  "key15": "4TrGxch1Fnmigf8534d9FbLXXmfEVKxwxcRbRKriyCfDXDXmebM65S8yUJcuHXMFdy1apYzcjdi7R7wxPcC3scHB",
  "key16": "4VfNSHefju5ApR5VTJhffv5Y8FyDmw5aWokVwxZmsb2Tj6ugJd23yPK89XQUza9UxNHc46xAz69WqGY9snhkwHe6",
  "key17": "4X3usviwJC62kRA3J6NNxDuodstrkEM3M3EqvtPNedzKtd8xSo7zmFNBLJZRt4PAAbXKnBZ18Xg4MofTS48F7Xgg",
  "key18": "2Z5mvGMBff7gzGQEmrXuxvrs9sQwLeu1MCeFwdU63FfGey1Y9LuSivAm8MeBuJ5aPwzy3SsiYmeUzuvbqTPWGrXR",
  "key19": "2wKjsHB9RuNo4U19ggSwa8WGFoSkY7ny4qQMpTtmaQpem5BLPyPY44Nq4YAiqsueLWyZAixc9nUadAo2J1QpMULn",
  "key20": "4AMkLWzUva6LDuAF3RPufzDZc2hj9GVcWuyMz8J4ZNHrwJWyza49pSvEWMFThpJuRud2Ac3cNuCyUYfGF53wMSaz",
  "key21": "UWpADKMFgdpu6ZgLSeRWfzHsTLNiF1JHrigrtyM8xr4tg72muW7DNe8SNctNMxDGjr3jQX7zGdpF5JAEZBYZzGv",
  "key22": "CSVeBCEt4LDcXpszQ88o1mKSwkMNEscwsC1Chr71ajh4hvas6vm8w9wax3KMriU8rpmdBQHWa7oLtDVxkZLByUB",
  "key23": "2tr2nfMbV6J44fsWqmjgn6Aw9jAm3mpR97WzMJb51gx6YeovjLn8dZTwPBMkfx3JsNMR59iW23Kv4mnH9gA8VJrH",
  "key24": "2Z5dac1Cc2psfxc64xUXmtdN8P7jJncYkqLUtsK6yHBC3psZ42wGr7YmErp2X3v3wZRDGHGdngz27TqYPja2fjd5",
  "key25": "3FAMepa9ZAUWC4dEJrhqqL8d2NxCsKHDUkjiEr6neWjEF6UvQMca8EvsXiCY2Dmwn9Cuusnw9UMMzViHC4QT9DqN",
  "key26": "5B4bCE97hcMgD7Fmueb2J39oVppSbMazbMzyDz7dXofhksqDVuTTbdymk4x7AAFUnZQqWvrZ3Lve5pBc1CTdH63i",
  "key27": "YJm9NekrDvPivogDoCbouz2cmKDyCKknmGSRBkQp12xK25i51TdpHMy8rURtwTtavxQcCBckVd5PL1sKNvwvnim",
  "key28": "38oZoHnyvpwb8MQqfwppQxVARdi9bnApofjKZjxR5HL81zqoa9xX1ku8i9AnrydYPvQGk54uxvHDH5hpbc5ybE6X",
  "key29": "64uhCiJjgSpTUXPfFLZQdU43XyNgbUUgJodUCVwhfymdriRLXYf3rBoVR7TiJTDJ6fmxvGatXhauYE6D2f48Jt1m",
  "key30": "663ZTPW6KcUyo4xL82HKrBcdgdtbU7pqEkGcN2AQcdQUogAG9Gq9L995GYUvhLC1Hn3qUXEKB5DJenPgo8AxC1zw",
  "key31": "629cpHM7hiDU8CnjpJDJtujg7m7ar5u3LQbucCUiEmrvy4zyxSo3ihHjbMVyW2tvQ9wCjdSEEBKWJnYHM2RPr2KL"
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
