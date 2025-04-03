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
    "3QghoABreu1uZNeuJcpjRpEjbF969YPvTZwLGQ1qNbBvy5Dyrb1QFEpsienFPuBHbczRu8jqPTfXskJcWkRZvDuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LzzxWxbWeDS56jaq2XFDUXAS5UVa2BsT2watoLKn7gbx2tKdkLYn7GrgrAw5G5CuprjyDFzkpToVQtAMwC5R9pt",
  "key1": "2RqA6ryqZ8uasfHerh1Y5ieHR7kQP6qdH8XetN9MYzK25SPv3siaG5JL6D3UfRWiodrTAc3UrynSCGeNcejG46wm",
  "key2": "3bFr686aPr79Mz9tcMU6Py8rnsmvDBco8keQaRewBcJCkPU8dpvF77aJC3vwqY2defd9izoV3hnZR2UyUNyV8PSF",
  "key3": "2t8aoMX1hYs52uaRXYbq9i138zpaA47pE2ivwwJ7rnmVvXDWrFG5G6S6FU45iwKrQ3yKHJVE4TPiG5ThaMEWEQgZ",
  "key4": "4Y9bQkp51ieXrg7DnXZQLe8vCeM37mMw2ThKS1iYYWP4Kn6An8swjx5hbk4oThtSKpzMumF57oaJEYt7ErCV53nj",
  "key5": "41p2dFA3gJMRR7LebYuGgTTmK4YPgtNu32uHKJ1ufVYfPrpwNKYaXQLyRz7UFjTpm6JNnfDEGpXhVBXJooccXJkf",
  "key6": "CzZ2Tf5k5p3yd137D62dsr6NaDbZ9RwuAsZ9DD2vrzZPPqAWxcopFKADyAi1igX5gjZnkjPGjgXxwYyWYCJe7HB",
  "key7": "EifDKCSBmAnYrdxTRZYtQnTfk21BxNHim7f1q1ZyLuRe6huL9H7ye7dNvtiWb6hseiLKdGRMdB4KxxwxputccTL",
  "key8": "4j7Br8sAS1sdoQqUiNkTaEvSkcncqUQVW9qjobNW3T5UcFBiunEVg77eYPAhgmwY44SG9p279zwzb22uatpDkEFp",
  "key9": "5PzEodVPAAxSqQg2yP86QhUsv7DhnfL1YPtkuf2J4zgmTcMRQuVweUMcYcU6BqiAYi6qzsU91L8mJ5tBmVyWN7uU",
  "key10": "3GcnbuBnXsrq8CHSbxc5wafjJeHtb48LCLyWQMhrgmfKHYxkqcUYw1Cn63eDintNeL1afyP2QCy25BDaNrC7TsVk",
  "key11": "5aY4vhbm2TNbW92TJFgk4nfDVhiA6Zxj2Jn4Hn37Fg5B4kWFxgNUDdhz5xWVRVJb4yGJ1tVLuN7PsnLPJHWcNW11",
  "key12": "54vDPoVspBLhby1p8vpuBpqXLS59ig7zrduufgAjePNmUgDpfqXxuqa3PcgUN2HMJmdFWUjk11Zdg2rU5AufCVNB",
  "key13": "4RkpTN73e9uGHG1H35J5FYP7V6ojioKDHfvCi7hYwjKBPdw8cNmJyNfafBiUPQqgyJ4Pi9yHCpKfCbxizz5FqKCz",
  "key14": "3TzhNqXt4VqdQ61tU5PvsSxv913rbE6YSTX2zKWATawzC4nsfhsSjG7aUxqku3SKiym1jKAVbYq7KJrgDBdnoPQb",
  "key15": "3diYodcibB9z7UQzq4LJd7ULUXFKuA56corJcQ1sWwsRtuJwFq78upFsmYm4oNYpXhUGMwypNkWL5GFqeCyRs1Dg",
  "key16": "3SG86VZnyh24dddgkHaSNmC2XVAxp3ktqZwBw236n9Fwi8WDy1S5USWSuDzADWM6L4MSC6q2THC5A7RspANQ1wbK",
  "key17": "24kzkNuc8Yd1vDvA2zMp7g8L6fQNyTnqbJNRGsqyYkCXr3u2tTf8aDeL6xzQcS72VwVPofdQhcufwULEoUpRRh4V",
  "key18": "5s9eaafUNG5XMsXvfBCNJ8roYJ1ehnHJVdoRteE3D6GKD6GB1fUwG1L1htNDRAGNRQniabGCZGYMSbLQuZ5teo8z",
  "key19": "5JPG24FhN1VuxtB85F9qVTTZoezhiKsR2mjtMnCA4rzgCMJLVPksQ2md1LSDNQP5x3yJiAoNds64Jdx7LbvyWeAX",
  "key20": "5s977jxk9buRZf4YC8EG8cnaMNdELnHbn9xSavJYyjC824JtreTVgBtUhtxMg9iso2DWK535QgNPZ6jqP6nP1jTV",
  "key21": "4pmgSZJ3Sj8mAHN9XM1ZeUYcY5gMTCcTpRgLLviJr9T1Dki3C9Js85LtzDPhyBm8VVzg5YFtXzAexWUSgNyVfZDG",
  "key22": "3wWYMYsjB64iyhVrE3QHptqRxPJEzZoLnZoKuHAUhZ6iFP8PBJwN6yV9XAjeYj3X8AQUENZjP57RFNKhyCVoK1KF",
  "key23": "5v3MrCeRJFmeFi4Egdsgr2y3sGej8G4ukrM91vnwjfEeTN3aA3shQG8NPpNycxDVEe71o2pD29kGzNDTzPyRzbkf",
  "key24": "5VcqTvkdX46dwd9vgJqsUzxzJ8UdYgBhXmGaw8XwVbUXAUfqhutERFbVkZ6Gme6pztpyf4FPTaNecUWteqsDfft1",
  "key25": "3ogPV2pDhzy7hcUZAj3wRzMqBSGZR2GSwvE8AjTnMuo5NF14vbQ4dFbLNajc5YGRmQYrwvXPB9pTCnZNBAqtNHuL",
  "key26": "5DuRnD5g8mK3yvjJLFjGFJmiBwkC7csjqVPywwWvKP3ujnGmZBGUufawm5thpSCEEigvKTW91dtPw6vdXZHGyRaG"
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
