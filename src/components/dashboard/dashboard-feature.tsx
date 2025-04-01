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
    "2QdeZYiXEi2x8d9qGe4M1sgdY5vpdiTaRaCzjgLeJSgXqjjFMRkSwAuRmn3vwKjKFR9uyhTeoaBiAsd8f5ujp6WY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gX7w1ZBJkrTTvZDDAEvHwK4eXTeQkD9xryZY1MKBMmuvrF69S5RJuhi5NHACmucYL7w7D2FNkZYvkdtSuZeuQQN",
  "key1": "2RaEBZS3oegMYMnfaKwmputRNaVVBQaXJnHW2wPFKLc8oW6cpxrgm2Pf37a9p2TABC8QQrsgGQFtXv1hHtnjFBsq",
  "key2": "X1gxirYLCGbJssN5eeZurvcDcNSKPuZ1GfeWtjepjo9AeejhKsL1D1Xgp665sLYPJwqE2GK21PFb9hDA5NYXpyW",
  "key3": "4QiRJiza8Vc76nZ99EwAHEuAgDvDYqhAe8yufCr9scFpo8VEHWc3kHcuo7VaV3E293GsWBoEFmJRutTNCWmgE1eK",
  "key4": "4p4eD3xsaCdCY1KzXMycCpXfzWcuRn7GvyLtSHNE214ac5g463YwkNyr9owg6LWSHTRRkC4NR5dbD1YbjcRUm946",
  "key5": "5hm4szeMSk1bMYHNbFKgS3EG1cXEMBtxKz1k3nXUAu9EgCHxqBA2T9kTp1R5ZatA6RAgLLqYQXiJ1acLHHKysuPR",
  "key6": "8g4mjDmkNBkG8xCLMYH97qtE2yQ9afpgpMxaMqWsBejHZhRgmgVpzGU2Fb54mnzrxfof3wEcJ8Wtd3rweuRCf7u",
  "key7": "3srCuH9ciEieug2eXjhMsbHPRSnCyVCrk6eYv4DmEDM1pCfz9iCiXnNsvwML4LCzNeLcV3WDPPyofSfE8RBbGbnx",
  "key8": "26ypVbHeZB7sBPxsQ2dm7r28i1RphvCkwV9D97uxvgeoEsf2znHVSQeXsDwE2ZachK8h5srhjw9doP1zwEa3b44x",
  "key9": "3GpsnwE4UUTEvvLiVtNUH9W3U3qaA5AdJaYL6q7XerWwfNKqBLmiSWCGMei5BoECMdM2bEZ9pSdGsGGoda4jAVbq",
  "key10": "RPHzNqWZpbsDbBy7iV34MnEdUNHjcydFLqPmgw45Nozz8vqYxBKjGgQgPVfT9sDmtxdcb4egVdJRg3DxBpvUVvT",
  "key11": "2PHCkXDEks79aQCz9rYQffz19nkDt8PhTABwSuoFbgnYmb8H7TJE4gaKLbEBPRiWCQHbPf2AmeQStnYLZCg86Lgp",
  "key12": "4J5BvU6b5gRvu5XZaLibiWYr9nFmos9Vu8zHKBNxvQcGnsqqvCtP93z68cnvBY7fqaF1NwPXPumiFzLXoZa2Ahqm",
  "key13": "2ksqQ2qHqwcVCFHQjK1sQPhwAftnS456rdi1SUnJmeNQvQ5NY3qnUiaw1fR3zkJcnVTsPCmmmSt4DGHdSKmYHqXf",
  "key14": "4AnFJzrd6dZZpXo8MfkDCCtTYewSsytZTdxcP1k8yLAS8xFdEfLgvRNVXzdwYb7pJr3khRjZjWFyUFZzvHcck1xA",
  "key15": "4kiwwqtKgLDdvL2PUvH99ruMcSQeht8SSudvLDJPrU1BbzE3c5RD72jVCouxwdsVec17o3YuLpR8ffPajFrGaFWL",
  "key16": "58rxS1pmRaLkDogZwFgwhU46nRqSN1noje9RHQig8vzxzDQKUNUo23UpaZnp1h7yrD4nemznQcinzsEfARYjSNXu",
  "key17": "LXu5VfaYGDxu41qnfKdRWAFbxWkpn5Qp5NXG174Tr6KqwJP7hCFx7i3CZFxL4pQRzp6xh27Lb6u143QjzgSDLhg",
  "key18": "2ussqNLPmNhnJbje7nSzXiegkqGoEspnzJ6rm5RvjNNfz41PwBAs8K7SVZyiyhZbCm2WzuTAqu1ParHEYvMKyXv",
  "key19": "2ykhrdbxeZHyHAUxzWRUZYFKWC9h8GuHn11e5X5UbrSHha9KB8C6RPcoY1keQVAbTKCUj4n9noiFB5jfKTuipbhn",
  "key20": "5XfLmyj99kbx81qiaGBKBxS1boztHK4v4iw7v7jyjCpWqTZyw6SvC7e3DRp6ZeXVxfnni2EfyeTdCAGLaNRc88Xp",
  "key21": "3s1YtFvxHbgE87nTf8BeqvXcMETGc7on5TLtYuPwKxy92A28qRmXzaiQ2YCoi5mrSQDovtvawpX1Z9FLggy3hjcT",
  "key22": "46rNYjs9LPWtBQf9HmBUe599T6YxmpqzqcQScFJCihrd4ktUj6VYwMmMMv3uWudXR49VCMjsuYrMVDfjgsq9AoLr",
  "key23": "3N6fC6NnZYavkvoiz5h7wmgmUranpCjARLDTnkkA4U4yvLzzsV4MoJAAJD1eN2AUhhENcTpwZgZWGuMepzJoSAVM",
  "key24": "4ijcNRRGimWXiWPwuo7t4p36YNuo1UJqW7qjz3dBD4HjnKkCpMcZSFKRdppJcHuwoYAXkDyCC9cUXGwGY6o1X8DY",
  "key25": "4R4c8orgZN4AKuBPqvwo4qEtuzfST2HYe6RA7fR28ycHkqsnHKPCYxsuxi4HR23WjwdDhpoHpguYWU99u65fuPUE",
  "key26": "5NzKa22Xkg5FX7DLqs3kSKt6K6NQnf5oYRQwnXzmmDS9j7pwVjv2muku5VcoeucjQbnj4gjuBVPgfAqMGKDFLS8P",
  "key27": "w8FF1LQdzpap66kaw7P13yrzae56t3y6vJh2cg5gXG8VKTwYo7Bgh2yFM1GZqDSWYntbn9dfTPgXFosCZUUqZoj",
  "key28": "624tFz4uFQkB27Wet3dEu86VmLk4Ztpyn78YWWb6mUM67NSmNTk9ovX3kY11tXTwQpw2iVHk4mGCFRtzdgrM8ky",
  "key29": "6226y3jFumqZsee4ujpcCPWT33NyDiJXZmkSj5UtCfFFAWxoEbhuTNxaDsjLNRtv2mJDizBpmPiSkNcJ8SFShzDC",
  "key30": "HA1Ko17JtWWoR2xUtBxYVGN3gFoLnHPAs6GDcscYQqmwhQBoekKvatKLecBBg9CKwP31soK8GGjDxqndMMWY81g",
  "key31": "5x851fahh8PUY5s9qQyMseSbjVfphmVNoH3FEuQTusoTE63qeSHZTiXsGCWwwtP6KNnek78vdopZmcgpYfnKN9cb",
  "key32": "4Bo4qvs6gEtMQwvRXXVeKdmJ1XNuspF7tzpDSSZCZ7VghUzyKRPhSYPCPyswwanVaaRURMrf7LnL2yqRQRSbN2cE",
  "key33": "3dMs4jG3Ua5VB9PoBNhEsRL8f2Xh352vuPTq4MnSaXvHMc6xSQ8vH15HFpBkR2j9JRf9U8dMuyX8bvwzUib6XHsV",
  "key34": "49vD5X76Knr8q4D8uPbFcYzFgkBvkho48BJHR2b2iFk5m9PPzRnFdHTiq6dXuKkamWsy81zHQ8BNBnn93GnmNJVF",
  "key35": "5kq5mY96rjwdiLLqp4DEtUB6o5juRycLL5TzZjaJgqWPgiJw4UcuRMbHhnmp6HutFMoCeYX5trrv42RTVQnwSD3P",
  "key36": "3kzFGPixZcAW27UEp1zvCuJNT8u5UdLg4Cb1c6W4Ngrfr83yGLRjeRpEKbndmDohvWBQXP3Bbauxhr2uJGJYSx5f",
  "key37": "5aU9brDD969Z185PPJh9pjKwkwuFbKAtjPx6A5Kczx7SmMddUUcF1RitRQq1FtfyBMEjsujnQMnciSa48yoWRF4P",
  "key38": "2mopHTUzoeT98R3zcWPyGHeHmtFKEGusTxx1BsDjymPvpZzDcTEmiH6QY6ayTnPeFeNACApHCYmD4pHzeZiFyecJ",
  "key39": "2WUxs6GSJvHso6j4qT6UNRY5MKZKEiryxrL2GejTMWo91sajYRmBqV9F9xuFqWL71TwSkQhPWXxAkfTb5ZGYoM8y",
  "key40": "3ZJoKfg76eNtGpg3kdp5Pj7svGGzarqnrGtCBrXiYbHSua1Ys7vcmHcDZySCvzvKCHtkn2n3TAQEbYuubjmT8ue2",
  "key41": "5DwYD36AXatr9kKTnbJkWpZrBWe2bEd8HHQJUuKDSUxxUqcBcZ2m3jf4yS6kwAgssLRWfzEHRc3cNTFTk79TERNT",
  "key42": "4WpYoeeeENU4vBQYxHFdqZnqRTzKT6uBc1BYht2rUEk7pRgNEsD7imrvrJhdcRjyJgkjNxzKxSt4rTbHTREfnfXB",
  "key43": "5bCJvJJnssSSDYUdVu4R4wY5a5N1767NRGhPwuXg9m7GVwhFJTxKeVm2jejmqpLaGVmJbRtWvpTgqdYXVfFso4J4",
  "key44": "3PeFgkuxV9BjRK8RrkY8qo4h9GJheBkk9rB3mNWPLZRVEZK5pma1tNSJE82VanBh1qXhSa3vFyWyXdGwM75wYSde"
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
