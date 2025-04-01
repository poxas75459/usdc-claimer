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
    "2hd7udJhkow6awsfujNooAVQwcvWLRQtBwNCbd7fhtCcGvBMNkscGFLLdE6hn6hjdEetrHiQFWni6SrzRYbLRnSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t6upHf7tb4vw3CY61FkFA8tC3hKZnxeJWjQSCWYK7tVpfsMYGN6FRcHRuzbKicMmCuAbfCfL4wXoKTw31RiQ2ah",
  "key1": "r6zneTy2bJLqqT5QXPK1TNDek1qg8ooDkUmyo59HTLoGbbbyUScWS5b969YWMCtDaPV5mbcfgFnSpm8UqWLiPd7",
  "key2": "3uXv8GSXdtoYXii7Q758VQxY6EwgYnD7Hj8kgXz4RLK5e5qyABxBMW4GLXpzoDsvxiNbMtyDTGRBEdfPdhgC3PiY",
  "key3": "2va8raK8qDw8dnueRZ9wVv8HRxkGFBE7K38rxMvrDwLJ8n7j9hvfmi678WhzCAVE8DMS8ABXwY1LMeh3U8dQhviM",
  "key4": "3UBeFh7DQBogk5CLJfjDiFfkRZLvJSJ2ypxZu8yAafz8F36tQXuzxdGn6Y49QB4zV2ZNHk9C1oc7PEyTPm8CrsFB",
  "key5": "5iZwArta4DiG6PaHukoGS9HKLs7Z5fv6k41X3LQrdnuKtS4ERnuMu7ET7PAjJ92aPRLjvSX44chNGZmZ6imwVxwS",
  "key6": "5gdeiXkqfM9JAj2vvTgUcpPUQLypAJvV5AyFFyF2S3XR8seahxhYDij4Rc31c1H1moKAEgDkZpqp8j7Ppzzg9zRB",
  "key7": "3QA5xFpiX65vNhjw9DJQC8nzPY7vg5imsXE6SMw7jvpUaN1YAGGUpXWR4J5K1PZXfaT314bTsUha3s1XBdArcy3i",
  "key8": "5jNWx8C3xDNBnsHND9VUzyrX9f4XUCqKP421Kxk35uNM1uc1pKXp3MPyC5xRtvgPArhgtbqzNJjEkEp9QatYCPvk",
  "key9": "33qKfjXraBkg1PfEtphCUjJteTd68xeuTf9MdEvHXViXa4tTt9fMXoYqy4i3HaWD1Yitaeg5t7jFQzW6WZ8bcRYq",
  "key10": "5yLjvF8mP7H79dLcsGYX3NMd9vAZWgStsCqR7C2XrbsnQFL7pa1s8R6nhwzwpaWLgpDqiy5BNFQUonBHb2mb46dU",
  "key11": "4wM5gqU3bwmutV74gj6S2mmWBSPRQqWRMbiSKKPtWGDfxjnxyDujtGLSPvE1EVCYFp6tJUKauBgg8wrA3vT2M8A9",
  "key12": "VG6weYLCWS5cnH8NPsjcgspjmWZW5kzQsAsRAciwDvYMhjkqAx6JPxsPwUWuesmUxchNwAhAJDdrXtY2TPrDjDJ",
  "key13": "4KTDsFwzvrHqXeF1r3mncAtTZggXrXTUNGvD2BYPRZzc6NyU6J9XQULqWotmL9HEUwq4d2Srnp4drgSeaY11ZW3B",
  "key14": "5AP4mtcmCd1tyiyMWZxYcVoBZAatUVq1goJiB1aD2Yk3iQDq3DaDiMkVZrV31AZyUmu7S2jBxETx42HracvTZ4J7",
  "key15": "4f3fTjGNFbARZHXYnUDyaWfRpsBi1XpoUbiWsaAJ4q2DijUjuSnyp6QaqJsDsbVjHuzP4V4iFDwPxaa8QsP8cLZp",
  "key16": "MStBYbMJWVymbdSrERKbfwXVjbRzwCncFaAtDZSMEer1vmGWwZG6xa5xaHDq9knfRFFStV8wMJmoV53H5BMoQGh",
  "key17": "24LRWCLtxbWSQ1AKDghGXmHQLDJR9fFUQJrBWD47ekePXLCfWJMJjUsdEbwMdvdkLV4J5ofwjgaR7QSauJ6ynG56",
  "key18": "n1VWqRv8yFuxLGhvqgAzeXiuzC55EzoyrX8FmdxxD6xfDgZgo1x5G2seKCckDnRMreapD6bgwnTvFFjACWaKyfg",
  "key19": "iutNS9mV3mTEoTQ7tV4AcM4vTrLQwZsVkm1pEjS23AzNM21ceAsgTHTYb4ct78TvNpBUQAFrQPq6UyssiSjsMjx",
  "key20": "4Fpy5iV6gUHMsoFnvsmP4QkyrT9ivUshtyHNUDB3HH2CDye14HFMSzTQQ4ajproqEiMV9BpGk4N5iEwbfxaRXTkB",
  "key21": "62XMdepUjn991pYjjDirYyoSxMj9ao9Z13K4XaYL56HLcXZRAYqZrJdNwJSWeg33irduyk6c3BK4a8gTpZCs5JRP",
  "key22": "56p4XtSvHE6W1bcNx5TZft4LrZ71xbyNzD4yiHVh3Kg3nSuvQkqgGKPsYQ6hcNwcxT2b2AhDjRFvzyHtyxA5H7dd",
  "key23": "Rqe1QUa7oyBrxoegkMdMhusyXWd9ZsaGHKcyU4YjckxCNPDeohS5KjozPjm75JtZn99BxW25ym19FUuAYYViGyo",
  "key24": "2BukPs6xzgoXMqb56HsFZtoW5VHpqcZmT893Dd3hXardFxqn9MZid3qdFXQMKPxFFCy5crbhjZdGktdAZabDqRin",
  "key25": "cTTMnkVL83E2Du9mQogkS4AHKfu5DjPzpKAbVuvWsJY33b1tC5DaHyKAy9rAhnSbKbyk19qjjM8872GRvYLZcNr",
  "key26": "4vhR8D31s7Gj5C2rD44qGdaWq9wrAcTvFWzHSVN6wmDiuapEV67NNKAijrutk2CVYZPLXAHLQTyXqWXiEZpHnmKf",
  "key27": "3xQXgLi4iLo1BT5ytsrNkfAT3d21uBztP6wX6Pj6H111S5W4nA5VGrKjezbYGL5XCmHwjGCgnZU8NoXHQr9BTNuj",
  "key28": "2wv6X4MdSBrj21Ww63nqj3wUAp2LcMvERRCKLfVbQobuz238TfJNu1pbxbc5r4s3Q7xz6w9Bd4QNsTtf2yGZywyd",
  "key29": "5c9eZAbwtjPjrqdNChS8CL9T6V4ZY7b9R1XpPMYHFfmAtoz14HBBDHhN5y1pBvvq8xD4gmxKWeXs5YEDDhTwmzSk",
  "key30": "BoqQKtYeLx4KNRXBmijCukuWuA7sA2FQtHC1BUEeu6kURgDm1cBc9CFYwTunjEymwtCdPS1Z9s8GB1zafniXZyu",
  "key31": "4A7YvXEHSVabkHFhpqo3Qd3NRHoiJ5sL6KyYCKbkmmx5igfQXu8xs3LEqLpLcBJxhuGvdFPSLyweQnmoB1x57Kgi",
  "key32": "2CYHgJcDfuyjH6uuBP8oH9MMxz4wd38GFiw2enkjzQp3iu1WHEm1GEnJoqSbu1AffzKd363WEUXCxhHXynoS9Fre",
  "key33": "2f9u92D6SmtdGH8sDh1NdFLPDi8Px1dr7ZeEF9prEx8Kx1PmQ2fd2BNR8VoQ3ihDHqBC6c8KoJbPQc5qC97NvkiM",
  "key34": "RGdL1kpDJmtUi2NpjGUMqgiBmDxjpT6SfoScVhPFLAZmPe8oHgvK8YmmKm5SXn9nPoFPqT8r5fPToWzZLSFKXsn",
  "key35": "424hUrQ4fNuqXcwTfhVcwg1rkfdX8v83VFLGMHATMHj9vwbxBmBnW7DMbW1fUM8pBd4UEUTkFNKAiWuRBUht11BK",
  "key36": "2CNqAb758bnsN26MVZ4WdcVmzo2EKYQvUoi2q9xyDKQ5vctSEcL1HrEEybngmiGVjEyDL7LuzZRB4gomRghcrMHc",
  "key37": "2z2karUwQ8zLrhJSQXLVCuy1MmXy4hpEHfTANgR54LWFtDMpnyEK2dD1rmyM5EyyftYE3wHueozi4Y8SHY7BBJnF"
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
