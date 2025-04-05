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
    "5Ec831zRmLvJqQzAVMxSgRRgZym2R2rXAQgBuuyifeNLAcJ8uUmGZ3otm5fn8AT3KjphLYu5CreV6y1srnT3dDmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQnmVYSjNvTj6Z1fA9G1DL2pJMq4MtdKT19BWagDtJq2R7hLYoKi6qfDbMYCDPzQnfzjpoNtzqVcQzJ9293Zc7V",
  "key1": "4riBiuJPbErRBv28Ng6gBYhxiq8XgUXGvnxqYadkG7toH17buQpjoQ8jeGXjZ3ck7XodHrTjVFt3bzWpUYxh17Vj",
  "key2": "2fcrybwNLDrNo86SACqQ9cGMUj8dyeJ9cu3ZtH7ch7N8TiafHsNwVQ84oLconi9F3LCd4k4gtX2SX5RdTtfMHrwf",
  "key3": "2MZ6j2dwqacXU2snwcSAcTPD5Fn5fL84TJyBiyGsrqL7Xzbz149TwC2Ldzstruy74k3cGHPMRQUsxA1STEh5wPCK",
  "key4": "36maCDwSFJDEy1Zk1ove2bXExKuj7BMKqYUYbRbJv3DBJ3oLuRi6RU35hDeodmoW4cY4qoyDJrzvWPah9snWdoAh",
  "key5": "29Xc7tW9Gj8EtmTvGdikjQjJ3rnu7kYbwXhu515vG2UhNyE3C2JytCYyyWpZfTr9FHGGS1n6ddRCHHy5fgYeZfzb",
  "key6": "26iDPrcRHysZ5NXNcpr6LswS8bCDH9D7j4m8nQrnimiX8vya91FcVJHVi28MLDfJCdyYjg3j9UKvVii4iiEMd4JX",
  "key7": "2u8FwabAWkauXsJTMNg7G27hZbp18ZkCpoewhfe2YPdXNAmqY7SSxDcVBronjGAH5NEjTqvcd78GBU8MyTxoAcr9",
  "key8": "2qQurKRk7SaTVob24xNbzrG4wmc3pPb9DymV1a4ojEDFQ1quzc9xtA99SFMHPdHmpdoykr1fndW38vLifqSdtPBq",
  "key9": "2oySteNU4v69H7naSXhKpv6m5bA4JiZ3KrUywnep2sLBeTX8XaMfnc3xHFF8SgyQQzzp8cr8GxzcTbYyw3tBXFJ3",
  "key10": "2iFT8XLVYFtTAhC6W5LkEPnoGFJcjwKyHdQovQfHSg22Cd6Lt4jQhm8qQG6NKbbKyUJg9NfWGD4vP8r8F3jcy5A9",
  "key11": "5zWHG5YvC4QJCmENQcWGQezfA49kWuEMJKVZ6DnPLasJT9or59KBqcFT18P8AmcetqPHj6BYQ7JamZ6GjpyACu8g",
  "key12": "49whHffN8DFHgX1EVte2WKeRkwXVJQFv6rtJqJcGsYk78qQ53NeGcZV5vuuJuQTWSAXZZYc9pQEXCteuwnxz1Pmf",
  "key13": "23Fq4jBLLCUZGEtqYHTY5oVT5oBni7mxnHt8zurgkKSBy4fw5wv2itApbQPDjhBhcm8Wn73LpJyeHPc7PPjRrkXd",
  "key14": "2nmEiSrbB4sCtj3nsymtykhR1KV8gtNv4aGG2B7cWazLwXGpxjpA5iKPg1JRuCx6YEAWBeR873q1Mjr6jkBGiwHV",
  "key15": "2SRws5TF39tUta1i2mHPRv8SQYRpLH3M7osjiWqoYzqRbmwAZPUXBhXFScjp6c64SUk5infyFsN5moxThrE7X6H7",
  "key16": "3dGqXUFGLi1JVPqVRrvZPiZRcmsLnCFhMjQw2bfQxTbXyPsXk19L2bTVqXMqneBDffu5fC31L5CKZCagFKQ35DbA",
  "key17": "2RK1qUDHif6PiP4TcEx1jmnDn2g7AKGQmEf4N8bzjSEzHNP7dsafiCEGhQJtZLzSHFotVW4cDkTkG7cZ8U9AjaSE",
  "key18": "5yQeBT5KMoYZWDtFJUPE24Z12YARATUNR1PBfLESjZ5aVfoWu5mj8YABkCcFtzfXKVXxEifA3QLiCsiVD9PQ67bm",
  "key19": "1Ni6kRuUfi4Nvww89dySmfUM4NjPTzVUTtqJidmUnynJnhfFqv8zKQ62XB36wycVm9CMJvRZ5JRCyHW6Ab1hS4K",
  "key20": "39QSXyY4qfsBVSo1miDpcLWRDvsm7XzmSAwSiXngprdqgsrpqYU29F2ezfgMDoCygbz9vpu4nUyyyzMvjt9kkPaF",
  "key21": "4TgC7B1b24DWx7LydSRP9dQNcVZ8dk8QhGSK4dFRxxLPJzYF5AsR4K1mMhjBWC7UxTcPJqHEUcyTmwhGiXwFvuV3",
  "key22": "32iBz7UVqep1CJjyAEJ3iPcue9ByYcPswkGg4XecJNkB7VtXXyd2F2hGCXAXTG4JkFPWSC2KrBZX11VJc89izioe",
  "key23": "41rPdNuySB1SP6TDHaExfG87DMKZjd6u26RfQ9N3RFAQ4KU3T6h7Azo6HX4U24jkcJQhhrMNGdXGknqjzFYYjZxS",
  "key24": "4wwAQcK3wAzeWGy7bM4E1NiyZfmTUTcMwNe4pGYgRsz2dPomGGX82Lo3bV2fULB4F7ejToUTtfcu15hfh2AV2p5k",
  "key25": "2AkMoAP6vgdrDsR26EE3nsqmVgk9axArWKySeuAXsbzqY28LmzjDnzCcGGtBepKEVek6uMaNVg3vUJ91eE3jGW1R",
  "key26": "2tx8j6y72GnYEoP9AopockPEe4Xdbsu8j1WM3p6eADFyn4sQPFUxtn6us2DMBsqANodPhNfPswQuPQqgBSdMnyye",
  "key27": "2m18jxc4D5kSJtrVsqsnHdF8BtA8CW1KgFUrmhL8o6ZMWYGrDSu7i4M3w4CWwrr2Q7ReGr7pVXR6XLr2BTruw9M8",
  "key28": "5Rd4J7d9G4s5p8q9mJ8w8YjWgQ72LDkCBDQW14QyTGaMjsSMkZ478vsatXsW9Dt94pys3qFmDkCmwauS8YxtFKq2",
  "key29": "3DdBbBTyu46TySN3zpyUB4TJEz7kFfDHreMSXYBRexfzGZYDWQqV4WY8Qrz1rNYXTjr4QXhaL29okKynUkVVwmPs",
  "key30": "5QfKMgPhtnfbjYtXU8JcntTynQ7ft1ybHg3xDAd2z1vGQbytx68umPEibGeHRsZnkEbPYzWLLUFxtSZb6iM6wCLE",
  "key31": "3ARcs7QfE2wAUwg6YRPxLnoHkW7J1X2S2iyzRKyJePbEcEuYiXN5iq4uXe7ivyf8myH8khfzHEfc3K1cFkhqdCfo",
  "key32": "idF6zYHvM7YeHLYNX3tXZs1RYfBNKUvMsLfQAmEZP1xqrzSZ2BdPidiZ9XU5qWdxmD2GB9S4Te4iM5FoQ8BLLmJ",
  "key33": "37rzpnjj8SYHFE6ymRQ65WsHmkSrq9pcaKcCcfXUW3LCEqzWsaU9MunqnqmZdHmQBtZtZLASTXKZQj2wutgZ353p",
  "key34": "4VWhphaUgaPWxXfqgpsvcwp8nZXv9qGaKousN3nUky1HPtBk9wMzVJg2YPzNv3KFsP31EM88VqAzf7fUgycAbTYZ",
  "key35": "dg2hRnGMN1fBUz9GbpsZMYQn7fV17jUA1c2PEVLjAajUinLkCFXA39bg3B8KnS7oGziLZ4Ri3ReWTRttzP8JDUa",
  "key36": "2isRFggZhhqHujJLTamzXYXAxRsWQXLeNHvrCpiJgg5QyDkec1Cafnx5z6LU5wUmQoKYWe1yi6S4f7avZU5BkmQ",
  "key37": "2GS5pTmUFNTziBu9e3SzmvFj5Xcmgqf7tfYjgxzDend8cjoTGg7cNePEiPzK9J1vo2WC8rTc4ppM8Y9xmafzQkoG",
  "key38": "34cE56ZSEFNrr2UFLmK45DTCjNYkHGMVn52rZkRAA5snGBMPgvtCMWojhM2Nx71iLqXDwjExdEVgtZDQAL6Mtw1q",
  "key39": "Sm8orfiW9wJ98bVbo4L4Pp6M8yskispZL7cQfc2GhW5nMsWtRtiLzWLPWwYk1KFd1LHo4cXoEG2Pr57mXFzS7ac",
  "key40": "zqKNYDtqDTubdPQmWtLpVfJYTXoJbVb1WzKiH9gSLNFzgmxYWaFYrJPMUGQFAPTmDpR6ArbyQAWVJ9m6Mv3ERPT",
  "key41": "64Bwxf5U2niUvHYUJxH6fqS5BWYsybSa1SUPZr44K7tQXnBn9F9jhFBkX5gYwawfpSkzR39eAi3FzTSM6zERmmW5",
  "key42": "3bsjhE98cCSq1hRdeMo1sEmbJNzJLoZKXfSmNX3uZpfRP7rQfH8cBMrmZzYc16dcWv2d1UUCoRxqGgBZYWPoXpH8",
  "key43": "62KKdDKvrbP5ycSjaFq1qp6cc1zYgBrckeFo3Xb7gbtHrtfLhsF8tcuw1bnrWoETL2zUhgyQzprZhxpHfVxPDdk9"
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
