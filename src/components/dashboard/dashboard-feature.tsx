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
    "Yq3Tzgrkfe74DMJS132aKiqsDvj26VSdDEESAfpDyYWNScjjedHmLbCjYNibGSZVxY2YDdBKXS1mXvm5NhV7swR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LABAM3no3evVZTEBRQRuWaN3budw5Nyz5PmymyJbvuethn3hdpaj9VNi2rTTZb8E9QoR5miiFsoVchKhKeBRK9r",
  "key1": "3q3QB8JppmSfYXRGZYNEAfRXGPnZ3jK6rHrWHNcR8T5U3Ke1RiM9Nq4zV1gKEcLVwiYzqAHyyAKr2jQ24odNUFgw",
  "key2": "642FyL6t4ct88yW6ZohMkuV3FcWB5E194wzP1seYNTNdg5925VR9HTLRkXjti4FNguYyaWPJ2EL9GKTUDD7D5i3M",
  "key3": "3kEyZpqdFcy76NQLPBcAhk6HCcxSDVghcVjc2ioyDPHmqKdZyZNVuAkeXQhRBSJARtgkUfgCHFJtSGR3Ry4azTPB",
  "key4": "4948Yf2Y7FLKE37Z94N7Gem1CWe15pREouB67BFotNVDu1pHs6aq4gv6inHXp4NBUVEWfhtfgQmBmeoSwSWRjBzK",
  "key5": "3WzjucQ7GHj7Vb8k8FNzkwQ5LaW4ktRafFV4t2TiNCAhWqv3YmDdQrZ7GRzuJoDWxMLZfjCs3bFjTNH4N3TjYdwj",
  "key6": "3uVwV1bjHQeqxRYwCoV57HA3kuMgutVEBcNaviijbSgpw4XnvVbmYWFZ78cTFsinAB7KZ2rzLUSgUwtmxN5u2C58",
  "key7": "2yBzQbJcXCxcGskCV9gAUMtVFKRWTSYCNgf4FLY4udpKHKdBBqWeowzjLzx1b3w1zPbP1vTuVG99NawCWZ4MRnre",
  "key8": "zqE6uNfAoK3ZHXCTMMpoZdXDKXn7XgLLFrRhZewgHRkFUuLULaUqZ3MT1LCTXH6PtZogZkE3fUhV1cusGzHHvWx",
  "key9": "35tZKDHiwF2N6xfZWeRWMEWERYoF7BtngL8Fi9RWBSnJK4feopWUnkqR5MLMSrDxbU6jbogMBSu6kQFDy7tpxCXQ",
  "key10": "44LNW2jgdciH9En9AiYqmeb69Jhi2nDbcdsCP723yivxw8XTACEVTF6gPT3f7fxJuuyyJtUeGkkbNsijqYGeRgnr",
  "key11": "2tSrLa4FPyaEjtQSpcrwJ6FoaGdrxMhvHzAqwHesWFkebVXV8yZSsfg3DN6aoQkwZ4mhrKv6WW4avCXboZezLuW5",
  "key12": "EG5D5dn4antwvkYbtJ8zPmDK4io6p6rLpmEPtneRxyBycZzgzpib4WbkjNyGWUDg3UWy3r2XSUYyHbVDnYJTYrq",
  "key13": "5JXmqbKU6hDgZoJrYiTzFESHNcbUKD7MmpxgsvgFEUGyCxFxLW4BcuDwSSqxCR6GUcdxfGqxTQrTJe5snDvKCn2t",
  "key14": "5oGwjapqJCaLNyzyDoq7SmxhHax8LyioQhkCTdimMjRR5XwhFrMVKsDVWZbGwkR9gfZ6eDzWSz2g3LuLMcdnh9QA",
  "key15": "yzMwLDyWBBqfhDEe1RGzvrHim6A3atLTUvAMa7im9Peiy7WZkP1m7ntspNTq9QWGWknaWKLrF5LwnWpiyypmsPu",
  "key16": "3NNHM2cKyzwaWWBfy2eEnhjqNF1tDb5NTVfUxckLhMXfo2poqQTboaeqDXYt5Z397vQXVjxL2Jb2E1SGr8dfFatb",
  "key17": "iLMUkWTTh6cWbUDXhnLK1zrVy6rDKmrCqMWDFqePX2EvXT897ze9YcJCRLNiyqC9fg9GMeMY5WXhYWzxi43PBZx",
  "key18": "2tWohR7uBwVGoQ1aQdWx3Y8ocS2oTYVmvDHsLUdx5aP1uVXChqG8ukvNRRR2g8J5KwDJ5hkrNCJPtBbEKSVPpVWC",
  "key19": "4GsqvkDKVNkWfcrp4FPTWpvWPq6zK796bnzQtFWtZWswhH9nF14yiriM136YpVdqGd7s3Q6AF5a1X8ugpi9Q8xPc",
  "key20": "5wXJYNRvr5qFujQVQsNmtJhunZzKrjfNPmc76cgnikP5o8X2MgxKsZK1u6CdjSJxsLyc8W6gDNQJSmhKervphsCe",
  "key21": "5ibGPGtn8MqyJQartcDv2vdyitpQ7iwZ5rUShejQ9vomT9bGmDY598FPy8XtEtxyCGGqSXXSv1oz4x6XpyDB5VW5",
  "key22": "smSUQB8nNaNWrg7K4jci6pSZRtdZedjAv4koeaBX7BbShnMkuJxdWHVMamnQPeV6fkmPc4kTi5J3WFgWzx6GypF",
  "key23": "RA1P4DgTvkC4gWfmRfnwz3YmbRceyeTLfXLHFnA84o42p9soQP34zyQTmxeHV5YFJcP5W4TdFzmivLVHfwxtkXL",
  "key24": "4H2dRnLq2zjRuVx8ubUJFUBXuqeoLJZQfFAcvBdtTBKBGJhjke2icWPds1ZPFHymNAYsLzUcGvWyGbpyoibxr3Cr",
  "key25": "44mWCAX1AFpP3vRPttCcn6GJtF5AQJqfhq3kvsfM15YSaTMXsMbtoQdf44QcvGdK7hTd9bW2RWjMxqqjNAdeZo6B",
  "key26": "M4Nezwn7Evwp2DgACrWewmQuB6HN5WuWyepYVoGNXrKMBsgFtxNrZAhDJV6HxAksinxKokJMBGgdLcxM4V5mRoF",
  "key27": "5aumfQ7MFQK3heZP2urV7nVTzfKssrZcKVCvE4TQgUBMWkRgNwzp1RgcKwMFJnksNaoKPdfVAKxq9ZGrENMjCUYF",
  "key28": "2CCFzvWahUipq5UBHQWMhYGBs5r9bgr2nABCfHeNASBpmu5cso478y8DfcefL6xFtsZG7KMR6rhveU6RpWR7L12b",
  "key29": "3UY5aGhhgqss9FvTATKxATAGSGHHXhaztbM8hETLZAcSPU6M3tbsVnQbjaBLJ1s7D2JwkFJ1XFm9ybVnCSzqfk99",
  "key30": "5hrt3QpTSuXqMqUMSCixArFWr3J23BJD7TfrWevpJqbY1AKMymwMfw2mdX4ud15mZHjFbLsyFbp5wAoTQuft38Qy",
  "key31": "2Dr1FFTbYDvfNFnEEPkapjsmrDRZHq78ji5zvtiW1B4TifWW8tTgGJ1j3A7vPdW73foN2KvcGds89CQbWExzuXVT",
  "key32": "5XaTzafxvEmNfmdSWFnMErX2zBSqtg2haSrKp4eyJD9pCJFChnrDLJiBkQQhJhf12CJuntpw8KqB7kKK17ocuX2i",
  "key33": "3bQFFDQBq4k5vMfPKAGdtfNcLDHsvAKHTXN5bTkCRZFXamWDVifsqR8hwFTq6A7nCPhoaMMnnDMTjyxzCoJRhTn5",
  "key34": "5NAH3FHFBzFnQkCC5bQYat1q2e7zJgyoSQF3FFSUT66GTSrvf2rgjMvg7f68dtBubdPTExLLGWCTQAF9qXftYqwQ",
  "key35": "5aEBQ8XDUc9zxoSGY3CFyPNo3KmngzQ7yV23RFBtwD7j81e8vtvocj6DpAHbm7QoXav3TQXknn13YuaRMRKPQjmF",
  "key36": "2BVFpGTdUEfTFCGMU4iVroMFHL7CyuTtiECGuBGqzGoVEdX225tC1XG8sFzoyQLQA5zx29xaEFj4kvVWYaHXSz1U",
  "key37": "5cus3ZfAhzJinRRXDYp7fYzxMMLEJ7zbZiMsD5bz9BXqPV6TEmFAX895ZTk4WbNbL8yxeJLbUXfyc6a7jC4vLyUJ",
  "key38": "2pmVZ3KRQNouRKvkkarRd4FfYMmVQkRNbme2wbQA7BeJ79gcBZj7x9rZjznafjFQ2UTQMfmHkmraQFqd7y5drcam",
  "key39": "5PKtGu1UqSrDGKqD4ms1sgim6saDM7aVsQmb4h7mnL58QzfUscfvTC45GD3oWqgF9qwyNDLUb5Uq4HkkwijtLtSt",
  "key40": "3yGjLpmoDARoMzKoCuFq5wKjMj44LS1cKphvsfX9Xpw3W9uwKSWWLgBkbJ9Mb3vq1JG1Uh9G7facWsNGMvgwT25Y"
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
