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
    "4dW3sdWYVxevwGgva1FFvzmL8JE8erL4TznZC4zjvwZwqz12YwoADz4cbCXWeTcFnEvGhHU38z44GGoHMn2584bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FKCaN4Mw48ffSKqyG73JLy8sYjg52atzMC1GwzZXTVwaD9BPVcYJNT5w17cGRGXEtumQ1NNeisCmtb7q5N8vZce",
  "key1": "2TQxYc2WsVXkzCyL3h9t3yTX6JYuXZNBVZq3e2Cu7uGbwEJ5paSvx7B2m6NHkoR4HS2BAM4QaSndu4CCpscBcR4L",
  "key2": "38knUPZVoE9Ntxx7kuQKmyfPQBVhA91siX2ko7zUqjSxeWTdBhaTqmboSNp2DA1NarDCD5xvcRque831ZY5D4QGJ",
  "key3": "3VUwcPaP1mJyz9oAXVAsvufmsKRHTi2R4P868hW9Un92wtTNbejTAJHDfBp4vAKQbZ92qU73aFiVoAaLesmPmG3a",
  "key4": "5b3pwSVVs6CZ1EymMuEa74eA9dvpThkmDLhsyPjw671TTrsQ95YZFXwg8THAWa6iXr7ADG1oFkmCE4Q67TMhq3qP",
  "key5": "4tjZJwriiqyZjSxbxEV5SzGABf1aZA5jxYAqb6cGYxhDZSGG5QDjhFsZpUengmYB4giQKY679oeURRB6uq4RFJqK",
  "key6": "3FJj8GyfRv6ZDpBFk5kU1pAZB4k5JYFPB1V1atu9CtR4JDpiNM1rayr3zxtKs4FeqzQw7iTGE8sFRDHpNKq2GwkQ",
  "key7": "5iSYS9HDxikzWt1U7FoZ1GvW1cb1XSDj56ur7E6cAE6qggLdvu5kgsf2wff6pLER6SvQqUJfx49BCCSiQHVPh95B",
  "key8": "4JbFT4vXi9YAaVrLWHT4gchs2YYGYCe5iFaRWh3qP22npi7QeVYurJ4wX81d1i1WjVX7vkW1fdzTVSBXhaA21qxN",
  "key9": "3ZVBbQhPe8Bgogf4hdpKfz7yqJpcDwbxU5H8NNVtaeSzpL1bjPNQtbM35TgNzEBqLiY2iCabdERDo8Qn26zqbK9B",
  "key10": "3CBxosVcrfNf5FqCNGmK53wkDYiEFVz6AZZapNo8qENwnfwJtJvbqpqCY2HhxZ23XrAJTBvbY5jGyQTKP2c7c69n",
  "key11": "5Xoy9yMBzq9ezWFUBUzTg7QLJtWYaQKWqUEw4L36J9kSBAbXomBiBP2cjVSwoGd66Y7NL7LangvBR9N9wNT4Nrkn",
  "key12": "2hYkuDqL9RNH3xnk1yTzYk2WbHGXU9KqUwTkqegKknaNhFo21AVRbYMjKNCq75d2rdfEBaax8M6hbL9mYbzFCU8F",
  "key13": "4sL2CBFVPmdN2yAqVLNnN9qVnLpfGA2aq2rMrRc3XEpeEfBmbhKobB1P4TT87uUkZPVwXkA1zmjZm4DZ5oSceqkc",
  "key14": "3LdpbuUAJuFj87R5RCtE1U6kGSL9xHh8rFacgz2kbz6H5iSCdMn7WJN8AbtDgDDn6D1v464ExTp4hqBPvAj2MyD9",
  "key15": "51BeUHZSoS4GmNi3jcsGeyzwsR2hjVHPzK2trvQSeogkJTXBgLAZ6fXseShsFTRo5rCdNLY8uaDuj8kqk6WmTssG",
  "key16": "2yrjwEoaucprkrgnsSWbYXWV1ahtVYaFXVV1Zpy99CQEtSNLSdA5wjXDCfc8cYFcXdqvjehSTWtcDuAngCnE8DaB",
  "key17": "q1f38v3kSdaeDLjSYwrUDzk7Tk7hWBWYXdiijrdqHtaS3Xg6DPagL3p1dQyjSVGuz8JeP28xqAUwNXTd8YtBgUp",
  "key18": "247zWpUELpfjV9jy8WbEeDeMwZJ2jmVX5jQgQtp8brd16sh3QQU1u9KSu4JcABs9XvWQjkDbZZrtfEFRjwRLszXJ",
  "key19": "L1zKkTGKPoozYvZysQaQbhZMPQnq1u35zKgEHao6YwtA6C5ihFwfdrV2DiTNtKuttEvXyJsxbzAAAzaQJ2K5X1C",
  "key20": "5ypoNW2kMc3EYnu1jWKTeEELXNsyAurX59yeMVijA7k3rH1McrRo422pjGMjera1811SarAwWhVkwo66WnyhpVFP",
  "key21": "2QR9ziJGUaCMWbNm6W9HjmidBkdLJfmGLkNR7t1GbRTLpj93mdPrzM6FGeaiHFfjgDfeHJajFYmcbjun4LJgeXrG",
  "key22": "28J49wi1wW5kS2uYVfTk2FmESbsxjVjvcxw2QcJr5uFFQS4dZZQuQ64C86yud3FVP3vK7pLcNKAi1yTpssf6Wu34",
  "key23": "2to8huabjhzaiNnA7v6mxwFnhAiY9BjiUaTZRCNkYYVLSRCG131q1wTrmgDn9fZ1xT2PxADnsrGE1wy3q4S9KXH5",
  "key24": "65WwC25CkhAZMs46TuArHB91upzeGJwJGqXm5wSScv8MdxYTx7HnnE8zXHc1Xk38r84Mb7LLHLtmEKQXiCftLJF7",
  "key25": "4uobxXnXUd6qWsQaz2KePSFyK21kZAiBnSyJuWdPBqkzsHytxVHQ8BfKwMxaPsjdfAR3LSxmshBPgnW6WBSZnk1v",
  "key26": "5vMToRJ7iicL5T9vdm5GcFgjNAmFECy5ymoDxUxXLXhzRaxQCFja74cx4JNx4rTZQhLh2UhAcdMj4BmGQWQ3QCch",
  "key27": "4ivZq7h9SuPFJ9hrNY8mAa73XUbdJU2GdKsaGn4R6BbRTDqUYrCL58pWxujygjGxvwBUfd1AuhyPgpfaaGd87cHN",
  "key28": "3BjcaJsEaGpyfsCEnsUtCBRQdeGd71SC2PZjK3NaDdcmbWy3EDzVmAV7jtNkryS6HPRKcckJs8fLHQCXDs5snoxP",
  "key29": "4XNL5mH8aQEhynacmiSdLBQxe4bU8XzByUzG8UrqyKBNXjysafnBhNqWpnMyKVcb3NRxGkFK46pGo4hfr2PykKcj"
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
