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
    "2tNZsHT755dbD6bwGZ3PfdNfAGQzeJcvM8TxbA9h6ABHMEzWmWtqCm1SQoEFBkmXBBNt1az7oVXbQv4n81crxQzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mAC9FuTaUKDUoBRE3Cd9fWaFQ62jfVmBiuQ1wBP9FexzjFg2ZmUv9nTw8TwYyubywZ4WvW6bc59AoKB426DM9Gr",
  "key1": "2y7njfdwAwa4THANkDyaKmtqxyK7FRvZwp4KKcE3JbfT3dEjTZdrVgguuJ4coySQWb6YfC8bCRcqWV4kztQA39Hx",
  "key2": "3vtHiDc4a6GTSknBYEkpsxLtBTVuUbJBNocHvHZLUxpcnwcSQQgpCEQDtKpn8XUf1GD4ufQ9md5EVx8PEWxjsm1V",
  "key3": "2wAu5f1gHcemuvnVNeBvg3YRBq4HhLrW81GuZUvLYKyNjLa67xytgRdh3s44U3d9wYterDNJYr9y6cQn67UVQRsb",
  "key4": "31TLQqd56RL5mmqjQ4NsKkCz9wj2GuWDxBqpDLj87pQz1TPipebQnQGQgHP18dEU1K5AQ9aanTy8momvvs4J2b2G",
  "key5": "3rhKrPYVBPyJMX9MPLtvMRZF9c5qnqV46Dc6sHrgNibSdMgH21aKTcDqUc19FkZznYgQ1siXfu92H3qiiKak3qrX",
  "key6": "4kqGM8deGsyXJEN1wSK9MrL7CHjWCSooYgTkceVstqmVGj4XnSA9VGmMsbkcDCJuwhtPQMJbbf5U5WWBVx3ayB28",
  "key7": "4d5Db4d6YGcY3gcYnibzg1wcSb8rsRbfjqR29QgK715kQbCzTGA8vnSGbQMjSST394AVN2GCpHHykaMg54MCwT3U",
  "key8": "56QEtimiDMG5TukeaXczokRaHhSTrSheaNSmh7dtn9zMRmKVCx1i7vaVFg4Xz2Hge7waSjsvJ1ud8kPtNsQRTFGg",
  "key9": "4hUNVQRwu5ifQ5m81jCMLzx7cDB5nDj5iXWscsGGiteDNrPCA18YLriN4o3xfLJbXK6YSGKWYA3SDhmRmT6KGpW4",
  "key10": "3nNF4ewZQHePoD6W9xLHrqtNCq5fqCazZ8tRRsaAEbtoNDp8AnjakEzvuKKxzKaCy7sKskgKCimnX57aCdfEndr8",
  "key11": "26JVfsVHqcPjRNmKqed7V144A4sxdmjoZLXaq9dujpCEp1QHMufhxgWLUxnfiCNtiQ2nx78EKab2Kfvdb62nCcRL",
  "key12": "4QG8AG7LiktJ2PuXcFh55LMHyXwuayG6d83QEkF7VQfffomM3zk3DXtgKnYns6TEHhpfBR9LzvEn2Tqhx1HUkvTk",
  "key13": "3hfvXU2eHDxuPHVaBHKdvAPXRU7CekZPgsQnTgR2bSKuAKnxLizQSLzKHzt8e1uNiLuP5gk2RS1vMcfgScGEhxZ4",
  "key14": "2vZgu6U2sHvnCfbxwBFuPSA1S88gnke8YKH6PKqzKaqYUi7n4dM2S3avySHuMVwMDiPw8v47nrBNptH8ZyG4fYFy",
  "key15": "33EyERvQ2ypAQqsXAj4Aut3VqgvqMvFRQXXL6pUTAseYSRQRre5SFpo5FTciZCa5AHs8PvWCSxzFzTdkK2MzfAKF",
  "key16": "34mP9VE5CE714jk6TpErkW1XMDQ9EWEbPikJDjyxCCGa3xmiGeSVZce5uUHDDRaLeCxCBEku7AndkVyUvgYU3JvD",
  "key17": "uK8Pd2L7ngtSaVRci7RDRXRoKVXzmiGgb9TGKbgMxgXXHnuQXdh6uAYdfddWxHH7jPZNNi5GNbTRLA5nnttTmqX",
  "key18": "5CUSDaSgmnQrPUNfQLGCkPC97MAGLXUT95SdvkvXG996GQYV4XJnN49zucdptT1UCjsKK1MLFTCA81TCWr93rd22",
  "key19": "5nM1mdCZH4RVgmKJw7VhczQAr8MsL7wcoHKZG3Fz6SqZeCDW1zz6ihDSUgC47k3vaZFQhRF5nRzDqDJY1NrP6RW2",
  "key20": "56xfuSc72U56v3sA8yfWYFfxpeAnMJHodMpMMPSzRykg2W3bwsTNbLcJRHfU8M89AMnNzTZ2LvBZk4FZRxincj34",
  "key21": "2CkQQWarfPgTenMXjVuEYYWHjhsNzYVH5q2pvEJpB9G8TRonZ8iSrbQupbUMQN2tbrCunHcXiLGyLh4CR9taXNB4",
  "key22": "5zVuQwduLjFkJ78GAbPVNofhBvV7KZ9TDLVHFP2VcMD7RFGwW7LZzRLnNHuGHJXyp6JQa4qmP8XdYbKCdGdXc3qc",
  "key23": "2peu2on1YWcLbxJyjGoKWq67nCaDvs8AY3J8xradtHiC3KJNbpDPDrcX5bmmTBhDFeSorDSCp2juogy4p2RqNs6F",
  "key24": "48QW721QwWdBg4U3yyGgHMZ1unf6PphnVPCBnaF3aUViRZYjcrTBNhjQHWut7tJbmYus9qNt6U2VmNEf72yojWHR",
  "key25": "4C7PfBKUNVr15KsZUj6e8PweD95NSEedNd1RVzU3iAFqoZLBJCddYrdUhccxAZaKE2nmqS2UebwAMJRD9FGqyzXb",
  "key26": "4EatuKtdrwa6fuKvixmPxgjDfjF67jYurWgwTgcSeNw1YzZFAeWztShUjLfR6n6gVQ5w8TAQRv9f1fQFwd68qm7z",
  "key27": "2eJKcb9ASJsuvksXNSw6dJE2h5qxRXdzACgnZfavfvJfLvewUQYCS5fzVwwk1f4ShK4E2Cf4LTQHBv8L74zybxms",
  "key28": "49kYVXgGdvVcFgZpfpLS92vv9xSvUrdYtGErxQRf9bYPJLt1kuyEFttvhNtTDQQ6JCNTZ23z7RuEvV18KjTk8eoP",
  "key29": "2vrFHUCFpLXxuKpFcgVPHDzaAh1KxR3PJ9fa1uA39sgpcYWBTzNRXys9L1URsPGWHmqmYStaJu8G6HHkEZJURE6Y",
  "key30": "5h2Q9wpRjxCfNyeyht7s7jFeE4vbmcT5EjNrpyUmmrhUjPCbj2veBCknJNBUVF3GyNpqMMYwh11mx8yabJSxfwJG",
  "key31": "5e1qok6FhXYETrvDybuqt22EP2JWPFpCQqk8zkpJsa4ixpao2DJB53YXNBMe2NgDHcpvBUebEogFBQM25jryCkoR",
  "key32": "AuvLSmbnj77vbTxNWgWcx7r2rh2ywSNFHweKf728ejhJrSjKwYQ9nWLChA8hGvYFZQJSNpfBkZYSYnz4S28jhmM",
  "key33": "3PWNCYRfG2GL4NeJHz3rjYmxP1cVJnZe4d9s7jkjjq2GXUCFT82ZtD36i7tJFttg98L3s6GP5sB2S5GPJjM6Qut3",
  "key34": "5ZxPyvssvEKdNJ4skYrVnN4SxLZtHVmcYjSEFC4PKhUZrMbb8djrnYGXudeaYnh7beEz4oS7HonQBUv75zJV6gsQ"
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
