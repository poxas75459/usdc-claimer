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
    "49acqwWqN7b7yxmk2CHaH7bxNmRbY7daqCjd117t418Pmzh6D88UAvyWm7yKh3HLFBjwhRxTitBtLkjtJbWdDiMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SeVoS7fWSVADDKz2TEpnrGcoPh6MbNskEh2GH6iMX5kHJ43VNy9JJWkL3Q8XgPGSW8aYJck8hTLT4jokeRmSCGB",
  "key1": "erPi2jdgJypCSio3XcQU1asS2WZhuewEdkvCtDCkZ8LwRVe6QLRXhyHVKzLEaWknFjvCFqVYMoqdtCx8M8mr2L5",
  "key2": "4CmLzyFRTyDopGaqZaP8NRzuA6XDTSCyaLXQvaa3d2bZbBGtT5ofSoWgWwDm35jnEY9kxkbn1YMa7Qh3jRr7YuGp",
  "key3": "FvK9uhav1CSJQvWzjgozeLP434iq2imX9QrKjLzFY2ipNVuwJ9zUsARANK2ZYw2KSqbM87HjRpEfBsgjEBS1AGc",
  "key4": "4fGrE9d8i5DGMDFgeoDiHs4P6GgHPdUAhbMFzx3q3fSMaY84DYGBm2RRbSzqedxxT2BX4D5mbKxdBo42qb3Q7d75",
  "key5": "5VcKFedxgLqxDHAhF2ptVU7gf86n2Hgvb1ZkUMzVdBVVz3f7zzFVu7B18w3gN6caZzoVWUa1SUwXfGdrrEKMH9aU",
  "key6": "3Bk5ypPgXQJKFdUWJD7UWke5FBqrHinWsp8F7sPa1XsrvE6EpyQGui9kv3cfzrvUC1EfG6BCoUbfzM8AMX3skwrr",
  "key7": "62C9andEsgFDct1voNCoHoDomkMYLH3YDZGGBfvQHbzzab4ivGHejAXKJ6AR11VAb9LEhcoJMuyGjZ7Yq2Nv3T4P",
  "key8": "21kHbdsQPbiu5X5SCUUtrub2D9WXVRmkVjUNS39fjtzDmepTP9bZ6SbxTSYfok7S64f2TS9PZpTF1TWjwDTrLkE9",
  "key9": "g7rGQqaqfeyiUsrPTAwxyTscnibVrpMpBfcLvsBBQvhY7WuhuFL3rsaP4cw4SxRfZYTNxno2CckN4Xdn861VY4j",
  "key10": "3woaL5uh6SLdrEJ8a4gJXSFVZv9MH6usBFEpe8gthqjprK4HWFnXS9HaAUKaU1x5vHaEWypZrPBh9r5uDGNkg4wL",
  "key11": "2szJE7r6BB9ZRBCzGeACaKLvXde79AGkej9bZdCc9USf6keudJvbasg4AQNd2ZdJfXFvWNiLZ8xyznt6NmSVDnGg",
  "key12": "4kfuWDHX5jy5J88LqyrUzZMtzuHt8bsrRhQNwZzmkbAFZS9SWdMr8tJH9BwWhSsdrUq4crroN8XgxysUB1bN8vxi",
  "key13": "2nMTNDiSwQzrf3dFq6qgVNneN8i5xFbwod5ioex3WvAMdALWojogYqXamLy9ov3XRj9cyjHnq1LR2SoAVtUToUpd",
  "key14": "5oZRzKNJnpjntTgU6tUKQspNowNEchLth6F8XSeFCQp4W5hfeUWvfpou6E7fm41uKsVGUPgBcGyVsL8Ph8LP1gh1",
  "key15": "3UNQNceczGiJjQmJYgTtHJjngXBEV8UrPxbv2EMq1i2j51zeyrHp9GdfBp7Lgf4NGdasJzmrLM6h3zCANwqPo8QC",
  "key16": "2M1cJa3F2AP3CcJt54sHoVZjSnrneYnfFs21S1dzU2MrFQrtHSXphD1oyquaGEXSW5rSXQ6CAoctMFxjBfMNAkjd",
  "key17": "5V8ak3pQsoK2rXZ8xXCqaWtTfnAEhueMaukJiRdc6R8McYLfDzGjXGpNyZX4V9dtKih22DTpTvQJiyVV9X55Kc2c",
  "key18": "443XUdE9VXEK1rd9EPjUKYzyN8itLuG7KDDFygy6WdxYg1pc7JZzSMvqb4dVS1c2V87jUXt5gfVakhfGimaKPG1m",
  "key19": "1zdxUPLmLPbdrpgDyshHupbgFtr45pUdZ6Kng4TRPDNiQ8oxuEpeuRjoq9g5RYuiPSsdB8MRdoxWw8FZjHcc5vK",
  "key20": "2CRVGiT3ArZqnaizG2ThbF9pLKgzQg9EFpFGAsd5aY2faTdtzf1sm7B41sMMr4WsLV6nW1ucRhSMZhi4YUtWiZxs",
  "key21": "3M4vb7yPBYUhX4jaQcmozmB9xQFD5oTskP7gra7b7JWXAGSD4H1KPbGnymuikqmX5PGE4ub1hDdjnRAorM7QUuTF",
  "key22": "evjBdjP1Q2VAxBjy1n79Fr543DU6NmCye7vDAxq4MPiha36UG4NRHbidpufZh22yHGQQ5E4iuDSeVtWUy6Xgcx6",
  "key23": "3vgYB45AWQhoZyNxa2q1kzdbC65rjYkYGS4Gz7MADfXnyRAHX8rFh8sCs5kUH7y7kY7BxCzZ1bKVP8H9qWrNJZ88",
  "key24": "2jHi5PLgbeJQRKfMPkLcg2phzGZGDSNqKwMM5uLAFbXQvLGorJMPiqTvXMjEPwe4k3F1KgsHhw19Rc77sdDUEjcn",
  "key25": "5qsT9F2pXy8rPCFS1sV8j6yLPfosTgWBgAtiHaH22mfBmmhZNnhAHttRaguHU4FCAFxg9fekZpjD6jMV4tFysLcU",
  "key26": "3JxiPsKNy47JfWQfZ4QLg7Qfhkqo9xtNYW849qWLv8Un4RDUaomnFW92r27UtMCfrrycebvwCLCZopTk24Fg6xEf",
  "key27": "qghstNPXJHahCrEu6gLcMzvfegsBrM7LBAmjnobt3eQVmWorRAC4oSLNSU3oNSjrV4mUTg877cYwoXyZus8Dp73",
  "key28": "YkqifcUFLU8fcKJFF1F82bHd2s3ERmW2NczkcnTsBqi1MUZHah13Cfch669yT2svP6Crutg9UKujtBAfeEYCW5r",
  "key29": "4PcKtARUezDYWfsNQZgKCZL2GbrXqYsAaAshjABsya3xrvFmQWbkT6funcyunwbaa8XQX4PxDqaFdZn3gEKQqx5U",
  "key30": "2qnuDjYkhEbNQK8HHrW8C9LtUS5jvphygZAsgu6U26Jb6bmHGbGqb1arJSMjHLBdJpAcsjGfCRdqfhbqzVjuYCXz",
  "key31": "5t7Q4hpcQoRk54TsxFhPphRKKG7bo7R9g14xiaEjeuBUqaXUyuUvBvpmeBfDeYAWG7PjCRdNR3Sy7ANedRwg2xCy",
  "key32": "4Q7AgA3AfLvZxwTzGPXU5L1n9JPzcFYjZHmy6Zyda1PYcVkMEK11Wuiy3tmYAQkD7DwvfjPzzz5EKwLoa7tBotd3",
  "key33": "2BdV88ZB15JjkSNDZsFFEDC1CyxsQdmULhL836JrdEhH2g1xgUXeNUMRLTE7pRWGJeKp7DNvcay2A71wQ7xWRpxd",
  "key34": "44xPih5QY8ot3RY7oBZDUTUYikp96UxKbwXGg8xtVXdiP4URkudQzmZGpW1fJ9cx9fhd58rgGKFQ2xyNQs8aUWY",
  "key35": "3eP9BESTnRcBbHvXbzoNWV5cvGXh4DCwNKs66DxLnMcBDQPjm1K6WVTVbqETowBJHzJ8923FtAtwzYEyDNsTg6sF",
  "key36": "4yj69i4Wqh65TV3WLn5std8XzJ9zLw5excUN65HKxKR1uAQ6ArK4xZ2KW7ewnSYCHxmeb2sxuDAqviXPpktVMcnv",
  "key37": "3SGppRnDh2BV27z8LS9jukktkj2nMSJFqQb8K7vnRKo4buDQxZ9WWY9nY5kpgesoQHYbcphKVUCmGEsSNwnT9UxZ",
  "key38": "3eooy1TYGmkgLKrrA1qvNvjdVW3436kQ5BkghWGrQ4kiYDaUS8YZaq5oRzkesbUFgUhiSW6QBZnG7ykFej4XkzLR",
  "key39": "5tM1bSPyga1wFuqr5FP8TorTDNVp2nF4yW6JqJKjSHDy8kECgzm48bL7fLfHUkyRFgM4AZf3kqLktdAebT5dSGG9",
  "key40": "2YupR2XAXxHHL63FHjAhQ45sN6ZHemz8D6fY4Dy4E8Vtsc5iBRXSLswt4D1pddYC46eW6sw6m9oD4R8DHEQU9uE4",
  "key41": "2QocQJmgZNm9sWc39PwimwyASXgbrTLfArDzBYjxVcAHSg5q9PqkSk2y1Gmxt5yAVvizuBTxrd8ugrWmHbmffYZG",
  "key42": "Yu6JbNWkvxrfnWCk9bga6h3VEQPz66ynyzxcAPyhFqshQstxS4RcURUNAsu5ShY4EkVhg4Y4HvWi9zyCeHaiZ18",
  "key43": "53F3CnVcwkk5J7L5a1HhtZcDwQBv9rEQ5UcPEiyTz3ncqYCcg3XPe2jdEQir4o4uDpVDnVypzp7XPbYgzZuZQ8Hc",
  "key44": "BenGDPoWxHNehonXcYCQeLYQPoa2Nk564AYaYbFqo71uB393QY5Tz6p73N5QadWWMJYHvcJQxSWLKKh6R9LZJQa",
  "key45": "54jVWnmiroAAUQJdmtYAfb2DpSA9RKX23WnvVTv2w7yPpicQqaDrey8pJcVstreKANMqyvhTpxpWoyC49P4srRzW",
  "key46": "3ieKWgUaPZhp1D6bGFC9rEZEAG3qgcpvQ9AkzG9sqMVawARg11aL3RYTbGij7KgKUkPCJq6fPwZKffPrbpdC6M9W"
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
