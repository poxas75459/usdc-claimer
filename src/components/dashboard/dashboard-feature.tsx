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
    "2dwMQArLEnyTh87VTCSDgKG8koy8dh5iqUinYmziJ79pNC6XT46zBR1s4xDhoREjwgp826yq1yyBBbthTZE8cRqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oQu9pC7hpVrveNgHd8XtosZBrvbqtSHveKqd97erEi7w7VjQwnph1LrtSbrbJhYw3V3CH68tKXD3c5D2WLD2t6f",
  "key1": "42MhK3tAjpBDQJTNGoWxSTAVeYjJhpsniDzAof1xUn32xfdNuVuQutDQfjvDh6fu7dgXBZ3gW9ccDoCeo3sSUNMH",
  "key2": "5SBXcYYj6ZSi3MnRpTqUpbC7gAPZCy1gvo6NfnUSndHsD7uSAYTtF7NfdBLUeFJ5eP5KVMeUEfWc11j7rGQhN1UM",
  "key3": "4VxBjbLgsvJL3nd9NVT3EjYoZjPt1Sg5ANosvib8CGVE3z6np2eshLY5KnvSEAumJhFvT24H8AeJEAGnXSRyFsKC",
  "key4": "3PYKxLtpBNw3DmqakJCPf5bMrKb9qXXDxozXpkZM3YToqHA1utmctd21YgRnx2DmuVGo18yipCS3hh16MgYtQVK9",
  "key5": "5VBsuqQgGUZxvzNFgquadMMAMgFQrV99VLnEGcjccZJgGu9kmw6yWmeZk1CqfjkfpvsXhB7ia9JFu3o5GMGSjZx5",
  "key6": "2XCPBXMFpmZ8ncbHUy7D7PoE8bEYntTNfPgc7jpfPDV8fh3Lsc94s2ztHL6M1iaoS26F6kFTtafDHRX5ZRnRRa18",
  "key7": "U5oUZVArxm5JU47vFNifnf4sZ3vX7nM2zxQgBDiUa1TJNeWtckcE8HPAvZD3jQ7QQBWJ2nfnn5R7op74UP8YKpL",
  "key8": "57FEJQuV28sb6uX3PPpPYHMHRe3qX52o6m2xReYnr6dCEU7r758qcRy6crY8WR2gCLVCNspauXTTV4qzioN8k7t8",
  "key9": "4nXFj7tWCYHqTtC8ynPQJ5i7RpHzv5EjAQSJWH42K8wYcx56gyEH2duCG7z9Qa5bg28QYjHmPFFGVAcspH2NmQJq",
  "key10": "7ndMgZduHjoU7GzUaPUaR5qU67ExRd5ZsCE4VN3EQPmVE99AJsxBwtNUSRttGr1H3oxgygDoosYLc1kBcXFvevw",
  "key11": "42QgNqss1FzaRdQ8P8M7BCGsebe3iXvma5iwHy6E9MaHeFpLrzrMYwdxxvQp8pwkHkXjXAiB9RvgwHTSnKo1pZHT",
  "key12": "Jcwos9hQvXmEMHSmZe6sQWaDCX2PCaULPVUNAmH3n5J45UP4CnjhFkq1xPCA8u2Y2Jo4Agsg6ayVvc8ddNTKRz7",
  "key13": "2dLH8UaC1hEnNhw3F7fvDRgbbjocPjfGmYyyRVtVPvX2PHSTfyUHQLf65tjqCf4y2GyVHoyvLyfnAAKqMCHqZtyT",
  "key14": "3iyS7Nwsr7vU1YDLvooATkZKKid9GQ6tFwKQTixrZsyggL7gHSGDpRyErtLeaYVqXRWwuMuoaipLxVBX2eCZ6Z9R",
  "key15": "51QDfJu5vd9QHHaHdnko6amEjBg9ozGEQCMUq1K6TJvuoGtZig6axfy8QVyPBTV12FHmac6qEF6diHNg1xypHYL6",
  "key16": "ne1DxHiX6DWLf2Aogdz9vEeNKxztWMxmqQ7zTnFCh5K8gTicDAEhdhvss4oWVxQNgWVPjuuWYgKbr9ecc2yGBDG",
  "key17": "rEDAumb3T9Pmsx756Ksywmin6rCwnjMrDiLznNrMYqV7jCq5QTasjk4g4EVsBreUhk7rK6NGn3c9LA6GbD1k69j",
  "key18": "QfABg6rFTWmBYjqtzHyzG4LnSHuQxVwugUzAtDoUnR6DzUhecow7GHJderysRszHERbtyuvYpMhEQ6mG66B2meY",
  "key19": "4SaaagPMDiXHXhnjneViPVszivKqCTmEGKXfKim95cJJvQm1cE57h2Lr6GACaAcCgoFYUGeE7pZDKt1fcAi75jN3",
  "key20": "5YR8KBMucwbgkAzZ2AyNLjhQrtHfz38KE9GqmtRdeTSfJvSyigkghjxhTh3sCkSgci7Vz1gcGr7phxFqN991q1SZ",
  "key21": "61gXL1frjWg5Ttb2LD7DNd6rEhM7krmXEHis8SsE2wHQLzSHVLMv1JQiFJe55MwqLxNV9soWGqJogTYcPoYXjVc3",
  "key22": "q7D3B4qgMRx62RkAoypBe9tcXCRu1wf75g5QP8udvjxTtvsVbjnvDSjzsM37T5XZubMN5Y9XuBqLLPL5C917SnZ",
  "key23": "3BCcuDEZTVK3vwAjVFDjQsAvGdGFvkwsJEbdfBGwr2JTm4h4RNUd8vfw4qzWgEkm65jQR1Y3QxRFRe1pVCHCQfid",
  "key24": "5cXQJtRAQ1QXmArepE4D5idnEtmn8h5VDE4M7MoWMH3BRi9opaWkpyuf3nregYw2BtUm727tRK6FQuQS6mauu1Ry",
  "key25": "dUjHZ19kezXJLZ2D7ynJACpZN3vwnxniDM9MZPxLwBxX6pVfQe9BwLFznh2Nh3teGNDFCRXu4Qc15FbCQH8BiPZ",
  "key26": "5oaFiaeGAWci2iA5TqX5J3bv4j2JmoUHxWiVSBLGzFLHHi9SUZCfqCEp4nGRPsxtieCwEiMiiM3j9SQrLDnGheRF",
  "key27": "N7YSTktAwCHEBua18gHUezMjA9ePfyFd6Ts9ehY7PKXkn5VRJ6i6bdYSBWoNEDaWF7E9WXfaMp9nspiDwLksy4R",
  "key28": "3XAWLcHpgBaa6UP8NabhdUhQwSGHQPEU97hUr7qPovsjHZppVuYwPndU7nudeV1xg4BFvKWhpmDdit4ztayA4sZG",
  "key29": "334kQbS82DUcwF9sMc3rPGtpAimHJwwMnaijnEgmf8QJH4Yo768JoGFScaWfKJsUs1rYZQvsHs2x5opGWfs5FqH8",
  "key30": "2WPH3wkyCd3vE7VqNHQYpQbGzSGUkW1uQ7ZtPjmJeUbJZcmMU6gJVhPMatufS5VspKEHrLuAmYjbWcQADxgQNm4q",
  "key31": "5Z12BFAjaPb32vWxo5Lgcu2J2eJ8JkWPat7mfveQvEFTsU4YPhNuRU2EZtD2SHkeJ3bdDUzzNv6Uf34zaNNvYyr7",
  "key32": "FiLPV1RkdrCWy1jmKcPgKmM1dso4UgAdFszha7pM1k4aruyHSvGRLRMN37MuA3d5QmDwHnNspGDudvFyPFC6oXp",
  "key33": "QzQPah7Cq4itzeiHNyWXCrzPMJyxELWGCm1RHHMvTf4tMQuVapAvGppTB1miRyPm52JMZKWkmstasjh3CT9Bv7Y",
  "key34": "bZ8KUekur7TK2vZZstJMcFWCFMB1gPfG93hCsky41DUPYAr5rkViWFXmz3cFfCTL1gxLARJzsnVV8op8kbLtfaX",
  "key35": "4RSqn2KutP4LN7Xg2w7CYannXeVeQQbcLRoUsqkFUwr1y7zB1DgfjUPsgBwXfxhDJn7vAhUUP8UrVwNZYMbF33aG",
  "key36": "3SGYSrdS7sdMXDedZvhXSiVsEgCywHjJL6mWEJtvSL9tDQWCXSJubtT1k95h2iFFn2pjFmz4d2KbMsv5Ndfque9x",
  "key37": "3FhMKeM25ejnKRjjE9hK5B6mPgt2TbCrQghMKV6yhVxRiuWTnaMyrgLmUzRrbojG8oPWtiSFkseTcRMrv3W7k85P",
  "key38": "2csYWTXVg7h3SEb3tU4wYpNCHFinKPoUBhWXobSfoPQppLXmhG5LLyCLfngqvU7VHpZ444zGf6nusBbe8ak4JG3r",
  "key39": "7NyBv3CDFWY4v1ebeGWigBfL4aXJGhGksJUFHCCNK2kVg9qq5628fZ2ETfU1JnGdVXKAPNMy4KpKwLZo8D8JSvY",
  "key40": "4bSnRQzHU26GJWvqLULsfJ8oaA2ZbQkrWDUSLpYcee4AGVS2oR7nYiEt44oE3MMvK5bD2wodG26CLFEE6h6SvT3o",
  "key41": "566MjD5G2pcXF36SJyS7uxPvnSK891Miv55BeXT75d8fSezeQaYzb97NaU5UEpHwXYHhrwmxFT9CsanPxd1kjccB",
  "key42": "3tSM2qmCVQ9jhP57Ap2YfsVKG1wD7LKJYtP66bFtanSRZNQyKRnLbLnfGXjhUbHph4d4Myz4shEm6ozUSbS75oRC",
  "key43": "5tLKXvrV5gn23Rw7N7X8uwzzkdAd2qyCPZiVwLe9FvCZbPAFABE8GiVzKACFyCkfj3fAPtWongVJkR1mfjRRuREu"
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
