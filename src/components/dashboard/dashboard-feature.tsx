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
    "5qzWKMqsgztFBBLFreLigXrgLiuVqDkidy7PGEeszQE6bTESi7CxwULoefULrP6ESGqV1X5WT4dSVYciFgKKmkZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jK7YvrabK1eg8MBiNQkawSYvEL6RqkMcNoA9sX3LAqBvoJZaJ3fJ2HXujXRgmRGYHdhr6EQgbkthDCxJNedCybf",
  "key1": "47QPxrbc1BdDngbDeqWkDvj9xfEQXNf6MNi8xsFRFqt8amWLsB71PRLP3KaTgDGG9ziESvjiruPQ3ZQS9aQm1ryg",
  "key2": "2oA1c57WmKQqcXFSiEPYmtztymT7acppnfQf6iAdU4gVfeVAqHhPG9SwbXWz5picUvxinufXYcpVBe2LzCuDKD9b",
  "key3": "4DoYDtTdJf8TxowWE2dw41FBsTYcrfeUfHoL6Y4DgqLQFYZMPeoDQpQvbJTfdVJRGExv1ywhkchga1CimFonjAru",
  "key4": "Rggy8Yo1WbAeNnjunsCZkJ3rU46LZXxQeLaaWcJhLMLmfqKo7dd1cwvCEnZqZYwcsNa1DE97QFwycEqpMugcjYw",
  "key5": "2LMUnXDem5s4LVp8EDdaxpTueBEoSU2ruZybe1RZgjXmHAXxpmEdPsnB8AzJ9xzG4UGEyddi5dZAkpSvvtxPM6uw",
  "key6": "Cf67JjCk6dS4Qk9fs6ZnBNno2WYB6L73wND8NRee7RAY46MMQiK11vFEoZvrR3ZpLnUxi8FKkz4yJMTkk5syifV",
  "key7": "2aU2BWTsNz9fRQUJKneys9CX2ZG9nxy1KhiLsxc9M4BB2VkaTrT82aiBym59HTxNASxYVQyfvWKhkgP2EaLe5ozs",
  "key8": "2MTk2x9Uq21JjhMmRgok8zP2Ta8rErvV27g3wohfz5q59Uvehn35Vo5zo4MCom4Xn9im3SCbWktMwQPdKQaycZMN",
  "key9": "ZxKPkfUNX3VWaQvdK3MXSBkSVYqL3Zv47r3dsyK4p9c4Vrv4iiW58iq2DQCQExxTyTQ5apNWTqjbod52SqdCMhc",
  "key10": "fHYU6anbd746E9Y6Trsz5zPeosgvgD3nrgcfa2oSQ9qDh8RQ6VqPcXoHTk3qyrXhpKhkRwovK9mvfgpayx2SGjB",
  "key11": "5T4asvNujQ3BuGhweiA8gJzZEpdGK7mhTgzUsJB1nnVZocPCYogQsu3XevnQ9uamjBaKcAuS75kvqLyRVPkdpdi6",
  "key12": "CXPkmho5iyFjfBjHuqozhQT1UrPrmvq1Dnmft2XJgeoG3cD9ghwjVGMA2mKSH1A8y7KtJQR9nkpVC5ZkDriLaXa",
  "key13": "4Mx1PPCJ4BqCSUrnycYAUciGJNtxGsbrLXbU5sdGa4WTTRVmERrca9ikQuKR3XDdbJXMee3sm862GgXvDAWjrTUs",
  "key14": "5i1Xev8DKHf2aTbMWKJrvAFmAbhgtFgsFJrvyJwAd8iSUMMrutBVbpsptgtWwrSpcBKe2E6nMtruKeGc26TCPpKv",
  "key15": "3RDiua2QBznJXZma78ySGQYQT1YCtJ9sjNNFvEiwkxNrj7bbwLVG7BsPwozvQGKbR9RQhyRwQg9ZLYSL7WBm3Di3",
  "key16": "4CWCtg5qeZ1x681mxwg7yf6rfZj32NFWKzgqFdytSvKrTcHXhYqWxvhLKoVKHPpWvtbJQ5me7bk23ab6wskvMYZT",
  "key17": "2SGaPYQAgH2nMcSKdKi7vSniJaXoSy8kg6NFLHhh6nwYTpXYnffgqRtx323CgarYGy8qZVCj1SDaDP7BMB7UcoZq",
  "key18": "36K8N9rcjyT1HTzotTchhhhNU21dykTbFs7wAVrLJ8w4cEfV8mAzzo9j8bf8FDfsc1c2WhFq8vD49by6zDD6fGKK",
  "key19": "yFjh8SiDiZK1gDNyeuJvEHVBHS12FMjKpEnsY6DfgYcZwL6PWtoKqZiQZbDv3TCJLhGcaWUnvB8QPhmAB6SfnYb",
  "key20": "3cBCmhnnQRTPhH5nhvXbTn5sD5ww69qDjH3u2Yu3iTVLbZwt5YSNSEDDjebnLbnC8cAQp6ghvvqhYCjE1jHL6Jju",
  "key21": "2Vr5wH2tEPjwqedVqSKLC5CMSnTvK3Jgq6UEHoEX4qdRHnXFD6wJhxFPpS7opmAMTZSjHPbF1jicNbj8qBJgjKqr",
  "key22": "4BFbxtN7pCcdyifXcWxDpMDeHYtKJ4L19x6thvvfHnEwVYpkyaB6geHkYPFpfwCgD5NBF9G3Rov2BXWYZBdDTfuK",
  "key23": "4x7Khx97XUWNkcbcoLnP2Dt3tGsWNSqsM69CERRBBZneSvDstsFmRHHkncCYJLboBkiyw7BrfKXPkZaRLbzKr8Qu",
  "key24": "4NU64T5A3atyQR96Rni3r6H2ProC85ttttz97MSBJ8Zdx7kuptWsHThELXxYwp9j5Pf9JNhyrEPgKBGmUDAfSoxG",
  "key25": "5BnGGyy1TALtk4XhhXnFajAod3Q4BbVjjit2QmZvBe2vCWUSWWE5Stwr2zQcQ88LNFptWC36Shbn7pgbY1U3Tc3H",
  "key26": "4duhX1dR7oQEdVtz23hpzmkk7ANQLrz2f2e3H5NXNUn8dtru3evknP6iJcpXNwedhEKykVmqcj4rMAi6WC96zeGb"
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
