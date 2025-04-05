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
    "4kc6G9rtASFMv3iodmWq1xZvgYBvh1M7d7Ac9v99e84PnGXKsSmWjJnKqQMCN6mxP3Ef6YKpoJj7CGR5v5dGMPRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KjHA9X2nrFLFkFsdt43tM7Ay8wS8cWZ4RpH8KfZ5XeRuPHZhfAbRdmAopzS4XQY8HNoyzKv2WJYM7TBZ28PyrHD",
  "key1": "35mxbUCfZ1UUAYv3LfkTYbyWvsfeMpWPoqeKjLEQ3CDT4VyjtBLuaz7tWkSA84zDrsCUUe2EGA1eiACUj1zuPKCx",
  "key2": "329LUWP4n8dpWSapT46TeK5acyERTcCwGyFw71mRQfjfk3VdahmaXah8ApzgxcTX73U76CRSD7GqDiy5ELL3nQZ9",
  "key3": "5x2CSTTwFBPyfx8ACiHgioh1Qp8usZV5DYr1HTMeGDoFUiMMcSKY5BcVhRQ4Bmu21xmqS7W16vjpV1B5VfqgFaXo",
  "key4": "joxr9AVKzujNmHMRP5PFwh4hBXPyzTWFRemahDJZWzFNC4qP8LyMrsupzto9YuKBvmjuVqfwPF9MuFxf8zpjAM1",
  "key5": "4EMsGRPQ8imzxoEmWa1gpWJEtcWbnE3eeKGwfSDs1G4AV8Hqocu1ribecS3rf41x6VqbNc6xKCGWhK7F3YTNERkU",
  "key6": "2F7zppPKpRqPaHjcTknuwiLwD7Mu1hdfjs9G2ScETKvEiqei81YN2BaTJqkWYi5hdybuerDTK8cF2pRfHWfP3iqb",
  "key7": "3BmZd6mF2WvnbiZY6VUz8h8FUJqrDdrFEj6BzfiCsnxhjmc9cFQAC99WHVYX29gNvd8LqopnjyrASKS5u72pvDTs",
  "key8": "3FGLPZdQFV7jsy7Vz3kvsK4zb4BnzpmGh4vcPqWf94n58ftq4keTCNE8tuNbm32AYKR1qeQhaLDfiBqCLcxvSu45",
  "key9": "2fY3zEKzLSCxMk26C4tw7FHBGHVoBL6Cg8oNV6qAv5e8t7fy46vKS8wWswV7UquefcJmcRpeW7gjwz3HDZDZKBGW",
  "key10": "qf3y2baaxPBNXqt18RcYMc2jgz336i8yVGKPDy1rGy4YU5oweYtJX4ifByMFaKRcZwJ5LRBTtzsyJ6towJaoiB6",
  "key11": "2RxNhNc92KZ7tNtC13qFGYYnas5t8xeKFcUDyBk6b41iCKnmSCbpyKfEt2wxSnXCzFAW8UjmQWhEZCzN3kGP2ugp",
  "key12": "3MKpefBhGPTDBZ8JPahHcSzrSjuy4aKdU3M4khhvQ6XUiN32VrJHamWrBwUa96NDAuRLQ4FmzsTTcfF8eLwJMUxo",
  "key13": "41PpidKqU5tdPrXAfpqCCvYt2rFpPc4MP1pEAt8DvHsQSEjGMAsfRRMBpSpuXSuCWi573UcSPoe6cXTuzSERz781",
  "key14": "EjCshGMJgFTzCt71hbYrg2rNZCJvN9vn8GnAZq4yYpa6fnZDRnHnkWjmCJsWisBsh11hbY95bcETSYVGxa55uJN",
  "key15": "3s3kKaoEhdcng2Hdj6PDzbEm6usZ1froNLHcbeg5cRPWHdtceYvdHwJ7rMQVkehvwhGstyeCc75d2hr8LikqStHG",
  "key16": "47QDo9yNmSz384CSre6AwitCLfhh9C157Cox57bXbWd1AngobijiCrvMg5N32ufxyGks9QAKznVwC3NjA3VnKYZA",
  "key17": "4vumoF9WdK8BRxFVpRpHNzEq8W4hkybyUwhXdXcJNcizuEyWNDPVExZxNJ1CjLoiLe7kZQtaPbUpivVxKYwo98Yc",
  "key18": "3dWJYUgX6LPseaqTPtyLtNx9F7qphv7URqKbso51d4teRWDhjHmUwGTToyQw9U2rfEoq1vCf5rVi15o7wFNdZNAg",
  "key19": "2pmZ9u8oFkoS4WyCiNWPr6feG46UUnRyNFzMAjCUKVP8DYniV37TsBM7wNviY6tNX7fZPKtb2zwsqVn1UF7GA8Y2",
  "key20": "2eJQ8Cy6iQGm2DT73wRbE8GsTNzDDfCiiShFeaTAhCy8Kaj1FSpF5H9Lqy1HbeQEF2NBwS5jvnUt6DVtZELCw3Uf",
  "key21": "2jymk8sqUD1BZNiqaXqiEKGMSmsbAcxDiqU79EysHNzjRxUr8kF6b29YjpALJiKe6jtkeyGkHSmKxHpZNEfNvKm3",
  "key22": "2h41idENi52Bykp6UcDgFraWd4x14SeqF6kpYRS4LN3WMqAUsxJidf8fnJ3BQcMy8XLqoJtCdMvNSBBp98G4B1zw",
  "key23": "5McdDnPPXwhppJJHzuXDKGjfUnGTq7kG46pXDeYNFHBCyJJATUfiEy9CaigY5MMF3QHk226Gsn7VG21PgaP2H2kK",
  "key24": "5K31NXk1zRJKBvXbTFRwyYMTn1HM8SCrYKqamVdLZqZzyz7Y2ehM4QZ21myHg3ArSutP62FTQThWVkjrapxTzqZe",
  "key25": "TGbp2eHJjana7fqLAe1gw9fNxTrJqeuW1HyfwbXneQrSzANmstuMtWpi9pn1M6eFGntscbgMr7rKxhoswnKNezL",
  "key26": "5YEwWhFXhcC2fSFmhKzuhenwkQ9iXWRmGL5j6SJc5v1fzxeCUC7ssHVV59kjJTQ1RvNzJEemDftBmy8JhEfGFk9H",
  "key27": "ewPZNCPDkx4SF2dDNuDV3ZNtmuX7fwRcJtEZiNAf8cEeMhFowiL1kjnezvHQYvbmNckq3TgbrF7hAXR9z3xXn1w"
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
