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
    "3sXn3VfKrc1ZFvQqQAt253DmEptPaJosm7yLhp69JEUy4v4HKVpmsAKV9EkK3jXJ6SFy4tdQo6d29EDKzdLFPDt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wGqKY67nvkLbbhXRGtgLBGmnRKRLFVzoSX7YBFYTyoiWggMCgNefnufN4RPpWam9tAfFBpqSqvTshR8pyByyvFz",
  "key1": "2QNwsqQ5ajjvpW8gTzGorx67pwQvktbUc7TwbSv4qALggCs1f2iuWWGjfQ94uuy7GMkNJKhyxBRnihCxMDPomQGx",
  "key2": "jxLTQRd7tJtdUAn1JAUVUToUnHu6kso2BfY9hszQLUafah31r24G2vZT78d8PiVTEMF35XtsbtxfcCVU7nedc7M",
  "key3": "eXWCeaXx7ajsHieib3tg54jRGu67LPfLwKwJwfQqi89PhxvA4UKXLSbJtjeJWTZdjQijABWLKhufK6fYChMERYZ",
  "key4": "4c7Yghs5L4Bw8L37LdHB7hyGLAfyYpRkaCbaB5tR6ZiTcyw5zeyzqYQMKTtR2xcAwe29ApA347vHu1wzNjL45Ee2",
  "key5": "4BwQ85CXNpmB8dmPRj5i3dcFY8n6yktYn8g8UnfQLSHsxYDnw82CcWq4atvhnfqqzxzQLtMkTTXEjrdjqooVUYdF",
  "key6": "3AaByzBeZQdSEB3C12konCPRML8jaFtevSQY6zuA7kSAZYhH3F4S1TpKy8RovyrMzYg6tgif9ggYUsdnGynf7fLa",
  "key7": "2npwMhYMsYgAkQBze9dQujUt1RmuC4qrGAnKdF4xvkLbSDcJJ26vGrZSTeqc9yRysLVippNYwAqfHeVMd4Ssoppn",
  "key8": "HXS6R5Lf4u9XU2tSsoLWm1XuVKL9uY9pnTQmZbxrCxqNmxhtdPv2TNuQC1gEdNnp2PWwaHdsdKgtLMiCD5KQiLe",
  "key9": "3GzenDuMotENqdKGxSM5wCqbc5i3wjAJYEiJ1rAYGKXdhD45JECazqxUpdyuWddjAiQuLkjbNGdMqhuZTAosvhpz",
  "key10": "5jfyd4cfrRXfAW26dgDomCxEcpKhSbPfryY4SC8PVMsmaunngJt6SoBfoMPPY4jEFCnQSo6BikPTnfbVkSvvCk44",
  "key11": "2LCRexfvBTcymit9TWk19Baz1bFvkSz626KR8CstGd93aX4686TfRYZS2c6eUz3q7JLApBzqyEoSnDPMR9SJAeep",
  "key12": "4D7KQKFLLCFcvyzR8p16r2WPHHafHWKseQb5uAvVCxDP8nZFCCRPUMqYJd59KxVxGpRbtjCoLhTUSrQexuUMxo2W",
  "key13": "3H4QBBGSQ8v8TUPgqSmt93c34xdVgznv6HADYm4Ca4fJyyVSUbFwyuVUnS9onHRbfvi2XSUGZytrhvGAKsmiY1bH",
  "key14": "2k99nf95FW5GpEUQDT26UStxNGavxB81S4ur4NT9e7Apj99eo8YiKaCweqRyHmh94kmrtS3wtfRotRn3SkfdaicE",
  "key15": "3pD5eiGt6rXJtNG3J6QQCd5BGnx7H2aoZnyBccpLLPX6Bx2coPWAx6Af4Q8vGHd7mZcAWSyqTpCE61agAVdYn7ik",
  "key16": "2omMoodXVhtPwDgK5u5xw86V2wB7xuZ9pQ5wqSaaRtaP6FHPU65tzfo9zKWuDgk1kz3hg2Jby7CTQXweSSjwRacD",
  "key17": "63bvLUgQvH9ptTcWCvV3qRwwQT8q84GWp7V9CRSZ4UEMqYFKtUTGRhLaFCJJXcLPAPHcaSJkEQEU5yCzFS3XpCz2",
  "key18": "5wEHbhj1ANEQC61pG3Nw1j7ckthC7ozUCRwS93iGj42A3wAve9cpCwtZcuPijH6oiAzPQ4MYfWAUbPrSZkQz3aqY",
  "key19": "3y2pBXnjGA9GKCZTdCGJK23hPLiAFxsDWUKjSg2H4spH9nL8xmXSw8mm9EWZxaerJJY47NAZxdpFy4nV1f7fMc7Y",
  "key20": "2cDqacAAp8RAG5GvLMQGGUDBEkM1D9kf1CogCZUkBVeG91wiCu8nscEcSg1NmVEFL9gvNA6fy7t1thghWH21jFqz",
  "key21": "38KjKsBAHwGJLd4ihms9egwN5MXJEKTjFdshbpmFM93aBeBgYdzw3LNLH3cvtMxa6GLNR8fSo37MKqX1rgCmCsrA",
  "key22": "2GhxphAGxiR5XWvFqsNCL14UQZby3LaqCYVyn95vH1dWZgGXECXBB5FWU4VM1MwNpm6QzoPL8hLSKuXgbDRYnwvC",
  "key23": "3Tg3uHVP5kxbo2cTXqd88buWxqGu4oRJTrNMkfNhadWWRgWz8BK2d6ntXVTzRNhNweaRgGUargBwNNB9G8jHt7gu",
  "key24": "kYtmesSziJV1S4dMrvLSbgHCDZCD5wk9Btv5PuJgc71dCrit6XnWGJ9CsRSxBk142dQCTunBkw7y3DNPv6jWsMe"
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
