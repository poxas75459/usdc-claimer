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
    "yRCVBotCXWzzzExAawi8Z23Ke7czAeagyTKUD4w6FVnVi93K8132vZ5ueujeuZmfAR7d8oxz3GMkm3oMZ416UwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U8bn8ZQM2zWPNgibPkLUEZXurWXBi7muuAfUxQqWJYakYFbhDy5LXk2YHr7aWcjMncDbD9HGo9GsxkE4D4j3j3g",
  "key1": "5YEsWvfCbaMV4oYo1HrUwgq4Sc6nhe6eKohTDSnaKTU5cAt9ddkstJdYpgFxUo9zxcL1eRopTZuUw1JPzdKaev5K",
  "key2": "4sJGjcmPpNGkdBJXAtU5Jkk33iGzex6fU7GBJF5r3epo4M19G9QqVuXmht4uL1npmf3SvqP3xrGzrTJ9txaaSyDW",
  "key3": "51zaHscv1kFx83rFL7SNM7H1wKmhqGC9boWJhwodwEEJoFGNTDHZ2do9zW3dLkZD2dLBJKaog8sb4pZrzgQmW5iM",
  "key4": "5JLXFajN8yxWuH6UDg4AY8GKoMj8yYHMiHNDw8nm67xfBGXfNWB5DAW27ER674h3vhuBWUVAAY6zc7jdMDGVnpvq",
  "key5": "VYzujm1BJkCTXmfGES61zooNK7NNu1hpNfCjZGyecrLofCM8q6pC5XKsfhVzYkKgCLybrGRNTuFd46BsbSaHwsk",
  "key6": "4izzCvjjMkt2bThwwPUYe3ZyFFfB7gKns8U3h4oVzkeAsSTZyFjw4Xc3LmgHtqB3sGagHcQhx5cNYq8yCWzPiqZJ",
  "key7": "2VZNxAeCDWTFWjcnhTAdFHezvXgYbRQaFJnGxcVSmV5xvE8tiPUugx4DPNnzFnWuhbGVs1zrUeSYcJnhnx7orGeU",
  "key8": "3qYxPQZiXx5yRVkzpDvf5KFMWcjTs3hVb3m287VXdQBWLDDtR5VHvxTAQNJtYKiqfjSdGN42q2VBSU7hSMjzPyYt",
  "key9": "2i6aD7hQDognL3aJsLJAgbsXZe4CvrGhLbuiHDUuMP7y5oSSx5gjDYgRZky74n68Z5FLmWb31R82ua7feKhCBb7P",
  "key10": "5MvaopqmFRXp4PmdoxZKjhDcmEZFwYXg61u5NkWQ76AhAnBzRXxHEKzuTGXVeUY3uq5EJrxgtRTYXHz3pYnEsctr",
  "key11": "3xeBfCQ142DmMMwZMRLin2ShGzFCk25RK8rqZjY2nMcCKS1skJw2fffKN1Uvj4DwpPRezxiEZkJnVgt3gnuu3Vdc",
  "key12": "WD3ngZGfMR2N2RGmrXPSfeie7BhUoaYAkePLrqokFXMcvjVCUKFsVdG7fJuBsE5orLwWiGRyjHEnThCz48oUhj1",
  "key13": "3F26AW4d2QaWTqaMKjx2dECAGhZJzCcxeU6VugT59XTmcCcvENR8DvNSQzThhML1SKoamhLJnPcwzEEn6bdyTc8v",
  "key14": "2N4C24kBvVTi9E6JgQk4az3vv7mvr855Thn6axxMQbrbnn1KatqC4UU75KMFXtTPH7kTbMFvUe6HuhFKtfG8XpUT",
  "key15": "3F4JHoQ2Wv5Pjn7C5E6RU3DGT345KVyfesfR2e2ZBfCdrasYQqGTA8H7PX65uRoEN1fZdk62mg5f5ANh1QDQYKSC",
  "key16": "SHL1FYiXmws4dcraLTmMSDijPsMcjpSpiXEpYrLNMXgeqAWbvCN2CdEg8Mg6FUWWEj8ziabrZbCHk6bgoKhCrom",
  "key17": "3oKhaBrCxgayj6D7WZLVMF4Pfjd9HPehtJvm7YRh2XTw9i4WPCwX2DymAq2b6j7y4zYhu2T1Ch6zXrDS1stqFNmb",
  "key18": "3FPrbitXrF4NWhsA81CdZUyHbrhKrkgc74AR1EBhzaDjF3v6peqJzkiQbS9QSSSTro8tpbkfdjdxPgPu1jxn8AJK",
  "key19": "28GpAFLLVs21yn299kfiBnNazGq1q7Df1yPQkQxsN9tNcZuC4gD6fFLYD9EKXUByoQN1CTbai4BhyxTD94477RLh",
  "key20": "4YaqDNQ8KZ8cwxQZnVimwc9zAqZrhvs8RwGHEHk7u1E13ruWYrABEsJqASthAsvCugvo5dB7LafUpr3Um2JzwjWz",
  "key21": "78T7u3Mk8JWF9Uw6MMR4Yw1VQnKSH3YRf3zE4JGXcmm5S2uobfAWQ1RtP6nnh8Y6P2PCHc9qM5nMvjKDiKndw8M",
  "key22": "cwqY4hWo4XXSNiacEGJVXyoHfoJabahWMu3r2r9WXJEn5b9rC8yg5ngH748PGuiaq7vbVGDGDuL8yjKaC2Uvwrk",
  "key23": "3VMAeCHwSfZXJRZuWPXMqSzkvzaX2xQJLPa3qqCW6yWi92dPBhVXipMkyiszQZNj6wEWxA9ERqaXJatKM4kAoHxE",
  "key24": "5DPtosKpWgzVG2WCUxWNmaxMj3jn8TSenjn16wCPckbU6ZxjzF6V79QfXo4mqrFwJYKjU2k5R2MT1CSGonjB13c2",
  "key25": "3SooeooGGZjy6iPzR6MRNuWc88EANLPQ4rVWerfLY2kjbbumVq1hgP85KGNHKhKeDiMHn2JuZ5Cc2mXFJBgwWknf",
  "key26": "hfVRHexpNfD17MiVrughzWNgX7vtsGWkibFF7uJH2YBHBWRjo5Hkzi7fpDuZsYPddNcHs6LD2JzG9xisdyG7Fbu",
  "key27": "3wqYi4meuXnRSwbrpVFnjpHoD6GnHDjsCs3DrFXyrNpUiQDLwUjEUsiBT6RGWF92XvoQmzXNFuMffPqdb7bHT9b1",
  "key28": "Pex3FHHnKTfzryhhFMUWA6b8eEiNXssVC46bURKYzr8SLAujxPD2RoyspRfm3QyqPX9ujuhZp6pExqYAQJ6UDuu",
  "key29": "2yTtRuFBTXxDda1aWtbqKiMxTbVEZmZCWrbFwAa1rXBmoVWUJb4aqjyXGkrpKgVmVxTxE4gffZVjNu41eLQxqy3H",
  "key30": "46PnyFSFtbn3H9arv8M835oRBnTVrywsbVDwvTriUZngAimgebWzexH2S1kHsHEfAMX7NGvRXcJJcXaLxTV7RGAK",
  "key31": "26R6jTkMJN5BeAnqPKZf3z4T8PNVfPrQg2zWGjeBZ7Z5M7cDVBNHN4aWnuQFJtnTxVr8cspWujaArYD8PdSLKMZH",
  "key32": "2PtkiNTuak9AQbGLp82bHvMVDsbCPNLqo7zc1hDoqWyFjrnXWduKLQvEZrCyRS41NSDwWEPXHB1viuxkPco2zH24",
  "key33": "4qYqZj54QTwoDpzRwrnc4REV6ETwdRevezp15iUV8kiAFHrePw5sToqgxSQPB1zwVuRZT26Zh7rbuxdPMySP2zNK",
  "key34": "2mJyTZXtXrBcYSoaSzUjbnKPTWUPvpdg1SKh9Y8gpD5ZRZdqnoeW1WbJ91rpR4hDCiExAsd5NV1ktERbSWutfn9Q",
  "key35": "5R5NAJJGev1ZRq9CeEEyLNpaTCmmEXQtnPA3ABfZw5GWcjXijMSjfqB5ukijqHMk7gq7NAs25Fi9KDaQDEtCJjFm",
  "key36": "3C3Sd69ahiyb5GNNLjQvvtcBLqgDdksVgAHP9NdNws8XxuDi16wAVx7ea2H2tvrj2i6MLqAwBsDS7vYVwaTvFpwf",
  "key37": "2MiN7vD8LrYCr7L5u576fJodGJpEWTv8NbLNA7kf4xmfrgTG4pKHpA6osg6Nkbus7pZvq4gHjHdkgSKY1j4vZauW",
  "key38": "4q8g1vcDf3qrsv6a7MFTZykD2rXjzEDFudTSNDxhioRjrGqppsUjaoqBm2JJpaqHLvWmmDZfUtd9fvwLYPwTFHUW",
  "key39": "yyJ13x4NJnAyMGVtWiwJTu1KhtSQeu86tDYCasdHVrQxp72uAEf7VmwKKSkdnCc4YNar8XbL2p71iEuEAbDPwbL",
  "key40": "2mpy3UddPh4a4RRTr8Vp9sBRxsjbSvdhZzTYk5GK44esFvBcftpPXRk6s39ZZxfRCHXLnivgEYzW6TSxS9mqqxV5",
  "key41": "23F8G4UZ5ZBHAvk4AsDM5DFpEq4MNjGX7ouKvsG3JBCiw14H6cmecPeSjkvw5KJiu3w19GZ7YCX6cg9aNnHW6PwK",
  "key42": "4dokybsdpjdykmxXX5Tp4tnzLhFzRwVe8tHrAA5S8ch8ahvE4YBTMfAYvnifrnRKgFPhkFYXuKbqnrK1MsccgSN4",
  "key43": "2TTV9Mb28oW8KHWftvCxYZwcHuBXNNuYLdNPrzkku2b19doy1YdFpCFQjWdn3v6Zi4nZvY9ucw52Aa1LLAeJvJ72",
  "key44": "3MFP89aqDrGWwTcJZY6kdhUXQXjeK5hbpEPY3s7Bgh3A1rrahErYf5CW5n9wHhmtGYH7gkiGAne5aEWHs2sFUpLx",
  "key45": "4n25jymb524vd5yKYNQ8Hm7A3A8uhrKPzP36KspdNmKg8Y18mBxs16bqZmaEbwMtD7Q98kEQnMdXqjSFxi4pBiBu"
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
