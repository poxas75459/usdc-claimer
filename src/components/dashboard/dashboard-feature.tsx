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
    "LQKajus6kXK1VC9kgxycbdJrLSSKQMCEQn3YugvFd2MfriGtacYfWFzzKPQAcRUKZJbNTuTUEVo4FqR1ErRtgTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5TNW2WLaHUEu5SSkJiShcB12bhsKvMi8HePqgvRfBMHF7m1vU5KaKjaexS9ns6fkrC71Th1aAjaV7W1XbcBfBw",
  "key1": "42U2XkXQL2jCT2449S7uQqeKP8TvfxQJx7nW4rJbrgr1jmu8cC9PkAn6zU48MZmzRWonVfLMRSkj788fojH4wATF",
  "key2": "26mjdvdFu1xTdm9YCsuYE9wJisrUuqeg3nSfJw56jp6AW4iy4jWwS2S8S2qnZUJHBSTJxg1ZdeJtBxfJ6DWadHLH",
  "key3": "65ZxDR7r9gbzfVFMcNUSzcf6hipWBcMQ8iL4pqZZNSY3PXC7KFQ728D2DdHdqySZS8x5JNK9GqS1Y8V2Dbyz8Tzd",
  "key4": "3HtjPAhcKkcLogBXT1bAdPFzBZmNkA4JkAYHNcLtgxirEcybxNj2CDvpxSLhdtg6NRFJhFmhqxBJTJgVWWkEaGHW",
  "key5": "3byMhDERX3ZK53epsScrreJzWZxTZ94fvsz5BhWZGozdG9jjPeJ69ZzsK9XUEXqSUW7xqhsA2V2nUpN3zCPwGHCL",
  "key6": "433ddg4VbQcctKMrmX7BF3YhV6w7QBin9qiZwkzxEUsjZ3T8rrLoKkR8T2uXeoGJADk9v9zsxqf1xhf3wgzgxaTk",
  "key7": "3gBX2fQ7TcuGo42vWikpvDKf3H9ooDchMLvgLsKadxGk3NT1bhWkTPTkHnrkfApaJrDejnM6teuVGfWaRpzDpfct",
  "key8": "3hWBhc3sNtWi7g8HqpdNgwmoRySBLjaWWxpn7PdJn6mYehaKVRoXVbMYrbgvcZ6ddQ4YwUPJoitMn2dvEvd281Bd",
  "key9": "5UxVqCjQjrySRJWmtraeQLMxjBxy6rVP8JMTVquBussNTdVDS7HoLtXYpMh9SdHyVq5x7dC55kqirVEf9g1JhPu",
  "key10": "38WnxsUq9yh87yh1LUTonb4cZPp2ur6jtPYBmU4qKp8nssuqSc5LNDqELYdajMQt8fmTHKrWVuRBFnwozMvJqvK9",
  "key11": "3PUQ1iuCs9FQ2LNw4qcmzmtc3rUXMcXjECgEMZj6V3th6nhcmtPkRwbwsXQcXaB9umrYC7LJm4yfEzcKhL9j88cX",
  "key12": "3sHoD7UWXvExWnbWzFk38DZVRq6evPduZUR1U7wftTaV6jqSJrJ5PD4ooD2UD4YBqtPxgsW3UQx1UpXST6wBZhz8",
  "key13": "2NaLGWyN9sgXXXDremSvpHo7zBVXHRGMZr4kTVe4jmACC9NE796xK5Vi4DzeHUj9nizscqVec2wKGUvdjf147Xzg",
  "key14": "5G9cEcfc1Bvf1FxhADmWsJTpN4K6Pw4wMJCrrKCnwXprGQnFtiVE8u7gvNKcMPEcUhpaDsVYERuqe19wSWCXTMco",
  "key15": "43StX7YYRa6LY3CJKRdGnQKkXCFeouCMfw3Mg91QV3SK2FxyzV6zQmwgDPoZvtQHWUUDKipYsahgYTAWqtU859fq",
  "key16": "3r9HYDSaXvkT5C1T1aFay37HFCv6e83FpMHixj6DFEPBwoBNZDukmTKFuxfYT5iQatCN5WrWrpmBnCaFvmouoDHf",
  "key17": "3udA7wm41A8aYmdLUn4ZydRsSRoXqAfeypcAyrRHVLrME3xjHLjduXrL49Gi6QugYbJFJpqWs1Nk9uCRQmdgduMX",
  "key18": "3Y2si3ckdHxSMJCaxP55pZFwkwKfTdYv4o8Wdurn9sxmCVtYbkxLvfsR5ng8YqG68Jui3wGcvtst7hRwK3xHMRJB",
  "key19": "4bHyXF2ySYtYX3hcfhC5iDS3oY6MrkLfZgV1wkg4NU4bqNojnaLG8bpwLLiLc5TTcSPchCNAAaSaNuBfeZmAeJKi",
  "key20": "64334WD8QjvQqVvZ2CcxTy1no9iLyCtbWuPC7HmLXeAgdKNWDypaykzugfJq97uXTXY5xFtSjRV78P7YLD5p9jY2",
  "key21": "CHaikxUrvwZ1TDcjsjW4yPBdGLNFPGApAT51QB33i17TF2xzKX1aFc4ACuY5G9AV8jyGsQNM1SgrpsMJ3opn9jq",
  "key22": "3wnkQ8HsQ4zG3wTM5FYcZxxxArg9NEAVJ4qzXxNdrk8FboUseSD2Za1KTNqRXnJmGweVcxw8cJuv3vQtutkcbEXG",
  "key23": "2tgB7YJpX1FLi6JNKknwoekYaKNzmFkRukQp19GymCTm3n7sfWWwEmKzdUg9FEVfjjqtQqDB73px5JVTfpPW5Kzc",
  "key24": "3ZJtXMV7X1hbUuiGpymmMpnyiaYZpeKeP1qMawrLUE7XhSYsQA1PS36eh3QQV22GyHkgbTQSB9gvYWgyYKeBhWPz",
  "key25": "2bPkQr3UCfttiuGRgdnscbY7VrAopPBatnfRCW6PsmM6qYV7YU4VwFtbbiEqJs1aqpk8JrgjWjkJDKxvcgf1mC6g",
  "key26": "4Y2zodRY2yNTeUVmGvYEjiqDUyve2aeoxqhuTnab7BPj9xEvi31g394PNHGLDr6JKmmQnJjsdBE257Gcs66UE29V",
  "key27": "22Mjh8cu46QUwKpKiMJhTvnDWcZgMa4fRqfBQDsazset9JgfeSUVxyfbpwkRND1Px4iKr68KxKjgfURYu1ZhWVHA",
  "key28": "gVnEsKSEucaWNNoRh6o8yvRVjGLXyPSkK1HUUefrxAR514P7Dx4ZrZNKBH4so7mh4Dgjg6Uu6Ln5zF83TyGT1GD",
  "key29": "5wWHG1AJFvetbZxJ6KE9HXABJtzJntgN4E5nbju6AtzvhWNBsnDSGcLQAwwYXsQ4Tgn1vSA8Usik17nk6ZF6KtEf",
  "key30": "5hCyPWBRwa9NQhEDz11Vt5x9X9jK4vkYKGNyXsLf9WYn7aMYmMUhEdB9mNv8gAUdw8knn4avsrXLZ3DCdqAP9SEw",
  "key31": "t3rhayGN7fp1Qo9gNDXmRGcDbUT4KPbTptrauv7JfJ5bU9EKLDHSjRLv2bdJ2oUPLBLaSY7JUnAWaki7gC3qnUs",
  "key32": "4Y6PdYjpEbm6QEdMhhV7Nxn8v15sCB89rZTmHhVyDMyK7t7PgMq66ZYuoJEyzq41ruKqNMJZVHsQ7kJBifJth3X7",
  "key33": "4BKrfpjoPFM2cJ2RxuofvErtDuvjxVfm4tVs6re9kPLTu5k5JxttVpXQU3aKbubFp5PruCH6MjNBrrEJfNV9LzA5",
  "key34": "3jiEuxcZ2vPejAL2gVuyEb18NZjbg8V7yN7mYzf8jYQJWNrZTmBLPwpiukWmogNnjzs6YXJ17d2KrRvu2Bw9RauW"
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
