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
    "2NfbNK1Su9epJSxKHiE3Uqvc8h35GKqKn7ZMJy8KDRk48KpJvTe1pm21Gz3oghcmVjYhs1RnK1YP51GoQByt1T5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TyDkwye2cuNyJ24tP7UmM4Qr73j2XsNYahyEHg2gUpJjRC8hyA56UmKxM9JqSrSrxRG9bvZBDp2HAwWzn7oD7cC",
  "key1": "7vnUveWGwAKnK1NVRZaKgPGudjnyxi6Tu2WViaBECYKQp8nFwQCUcxqExUrLEjwYcxAxxaHtSBJb2PWwqqTrGtQ",
  "key2": "3xkvyGJWo1y5ktF12pWa8qR5fFHBJDfhG2VsAMMWbxUQxYkL5yp72QfYaPnCPUV86xN33MsgU9D7GAk5ZKFSjhsU",
  "key3": "3RwGfX4KFYy5nTiw4X8dJQb7yzgP5fXScw6XMDMrPGQhPYNHgaz52nUSpH4tRTCUQedhfdaoT2D7sD8xcKy9f828",
  "key4": "eTWGtxCiVkEUvPTkkHQKfDUZtJCcAiZexmTR381EFhF6Xu14RyVxma88z4VsetVgqumwFuLxAEEF7E9ErVdEc4C",
  "key5": "4F1C34PQcGd5uJ3hWEiorJ1TRLdHm9MAG59RuEeDSjzztRmgYCgLn1uVYNDHDzF7FDEMwbWAvqbjFVSVoPNjM1a7",
  "key6": "bP69rvktJDMBFWqJhGLKWPgbqw5u581EGxKQqxQC7FCuBXSJ3JnaHF6Hr9LdAD1q6hLB5ubVkPMes6JmM38DyHV",
  "key7": "47g31s9txPGWC2AXWH8ZxJ3EGKiWzh8wCEP2AWnfM6i8fD3GUU5km1PXu4eepESWcESxobG4hTnjBAF7ZNEdQTmw",
  "key8": "339dkbYgmb1ETJKTHAX61MSjey27bZB28NgZ5b5bwgx61U9ugAnwGwfsmDSTL1d6U2yXLEMtdLbQQzCR57VoQzGP",
  "key9": "26BpU5LX2rokVBcnoDq18j2Y1sHyJrj2CEk47mDYv9wF8pGU2wPJmaZuUFdSjSeTVEr9DhnamSJn6uf9Db1f2Tia",
  "key10": "5rJGyunWPrBDgWyvdbDHXSh8o7WLcp9i98m24iPEPXbzp5GoJ6ndU8mtcLFJGN8fTNxWPFFiX2CRiQybwEBPpojd",
  "key11": "RwhHnc35qVK6jirKZHSQaEAgCJM98aRud9kgKauwYXj2jVBro2Eg8xZ4omHXmEpKKgvzxo62n9b42jG3kvduepi",
  "key12": "yByYs5exdsEYxV166ad4QBnpkenhCycQXeNYJx3ARUb7SVUcuuoe8GM4FYrc1uFgp4Dd3jrewTVgKsVq5gBrZPr",
  "key13": "3fe84iBpAgokzRWcvdQ9DbsKhhxPxf1L8zsUX9puJKb9bWAtxBjMpehQKaxy5xfKb1orEsV863r5MccgXDJTZCSA",
  "key14": "5fJcKxeyqEpsPFKmYLfSLKRVUAXGB7QYfcFqTbU36jMzJ5WFj8EviJ1Eu53MPKGCtcYQzhjgje9fbiaJshTXse54",
  "key15": "ZvzC5NUPgx6R3RCQQtRdUpcCYQc8UyBAxxn4XBppAUgjbHWQ5qqnTE3Azx8HxcS7Xk7ASjF7MQmyLR7puS6hZHH",
  "key16": "2KuyNpcmrbZYwKZi9e5WLhxn2GuFFvHbQgfvETLoseqxueyBbcj7VHn4qPvXEdXNxrzLxsTn3LJjB25sx5kpruTp",
  "key17": "4L8CxDMXEo9mGntPcXgLD7CLZgvWYW9ri9Jmuvfm1NzLmaeMdCa81eBiKMKyAVXwcgGrXKeTP7f8tmo4F26AAJcP",
  "key18": "2fpudgpnTEvUW2pDV1RNBSH4HTHwSW9yF4TShCUs3hnFvkd3uq9gQotd5cVv8kmrPLZVrcLzeHeMfPiBma69ZnMS",
  "key19": "4gszPFbAPUErQmoK6RFnsmdvmX1gwgvaJw8MgVvbie9MGPsTZNdatHZGuU6y8v3PhnCh2RcwjAhT4BrBzaU9oADG",
  "key20": "9TpV65aej8fWwx7CFa97ikZszQE7JWGUqNAujBa74Bo3gVwWCTVbHayyZWrZzhDEApR4F5R4kmDPaZKPe4THxjM",
  "key21": "5nQ7g2iQNr7GhBZnikzEoJ8ddCc9j9vvoN76ShofrdaSjmSdLUhP86Z25b31ShSzNz96dy3KyE5iRBKspW7svUTF",
  "key22": "4ata27MF7mm3xkFpWwtE2bc9mvnwLkXZE8UrtVxKTNtidMp3PU6EynrY8fGAodQn8jxzBa4Yk1PEmK1j544bVY9L",
  "key23": "52a4a5TDGbJXHm6oQKfmKYtTK3hQ7wJwE5uPqAD3FC5NrULoPL79nXEkdZnBNEAbZeG9gAi5tSMQ9JFmcGLCbJpU",
  "key24": "4bXzT4452Kc99JNirmJEfRvDYgazvRNaQ6vGWzSPzPAA7irS6Rp4rHYgyM5AgKuA6tx6VR6i6UTqP5wi9dV5CPPp",
  "key25": "2n7ph3T6uPUwKh39xSZoe8YVPtCDWbEGTYqMRo81Uu6oxg3DFQrVdMRagzvcvi5vcWuVDCtXD2Kbj2Rn994hXhsY"
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
