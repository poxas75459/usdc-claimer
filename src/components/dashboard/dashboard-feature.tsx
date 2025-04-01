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
    "2FeEZGwRhs8aJp2MCyBcebDn82jwYumNpBRNWcmVMSMJDyTKAqYMatZiv8Pzt7eZ175kfG1E51jjDR1VV2fCuk1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e8szh6732VgeMSP5ujigvX6UkBXFjhwtSZVvt4cAy5ocSVh24ahv46X3HSKmUcAK51UXZjqSnqxXDdh3ZQzyTQT",
  "key1": "57bscnEWanTj86FZhPvcsjAMiya1vpak9G1UkMr6tT7Phu7htAwSugxyYFdyJW4FYBjF3p7Yi9p4id9NBe5NdjKr",
  "key2": "2QsYxYgufBrpSZ3zpYvWJ8bvLxVhVwu75uDpLDMcBuSjSpgpP1mYj1mqPLnijmHMVGojF1CfCEobc6wPDySkP9do",
  "key3": "2SoentE6UDm25Qfwtwic93or42a1n3E94vu6bDC2xUykpY4nGkpjtyiwWncJuyGGqNq2uJRBdvC9YAWB71HrbxqJ",
  "key4": "3oR5yMXEXnr1DiLhG6ed39zhgCDQFmpFjj5DGN54WLYDt73cd3R7FwRWX6CBMnkHyPsb2Gv3F1XRJgZUeLFBzUbn",
  "key5": "v4cFbda6Wd3WPNUZkMx9HNEYnzrhvGLKPvFTaBsm6NbYSC3v52UwKXb3eBWioBZvR8u57AuY8bvBFgGaHXLW253",
  "key6": "39CN6wPbyekQaMv4xDieoEebLKezKwzz1XtAab8EK4ZdGUsUxYqWooWdoJa2sfdmQBwbdwixM3EpMvHRsT9fWXHX",
  "key7": "4Uj6JFyd8sgi9iqFyZGBZ4Ne56yN3QARKyTwhw2MJ22HbZeS5qLGgoWd5pCNbtkpaUGtZ74vQZGjBNAs4JmBMa1D",
  "key8": "4oPn85jGWiigHbCEYKLQck1fczbk7fh94D2TPa7A4356kJqLvCwFybYCbLu49iuJmcmiWgbuQ2NkePZy7yz8NZGW",
  "key9": "2Y4mMwwgbpHNYLPhUkDsQjf5PJdrDnbMPKC1ozHP4DKkPeG9nMS18irZRxqTj1tfkNWo56iPtDH4ypQfxwehzg7B",
  "key10": "fqx54DdRdPh16QCXGkFWUVP4NPCs1s3RDPbGDX2ziPGtsfuaDhHRuDoLcqLhyYWNJveDXVqWnYxErhhQSyMNZ9C",
  "key11": "3sFvzezwPbqiJHHpTFgoPLqaf82LmiUY1ih73URAS3JPA31D6ZRM2D5orSuPWNmxK7WR1jbbSakcA77hN4EzXAms",
  "key12": "s9MFGqo73QwUco1b4VHA92vbJNnKruAs1guJxUQR1RSwHmFXxszFYwWowyLNuacArEtFPZz7x43h7bdCYedvafd",
  "key13": "4yVugpszNZLkGrX26cZHNYppLx9J8NioVAWnYB2YftMinx13giwPUahjrg7dy1BAFS4y5rtit2zSkKFKNcAfzJad",
  "key14": "5kNjeCjPmRpjjP3GS7CPhVyqKRXqgJ8cVhYpVPK6KZJaYHimEZfATjJxWxQyhyMayRM9dTHaFipT7QSrYKnLcERy",
  "key15": "4qdYxkZB6DWvKhHQbckDTioTBWYYrxrXC9CQmPoFPBygWtPUsXBjMw1FQNKkqj3pxoZKs4euGbLG2nofsXvDnrqo",
  "key16": "5842sZMZKzns8x2w4yuyB6fJwfd3SQ3LtGCZzhgFWnENH7N3CDKevhpLxcUDreievuJcPEdGdr5MQ8qQVfvPadfE",
  "key17": "3jhXvyhyzynwYDRcCskA3D3yxSE13PekF4v9q9CKkLXnRHscddaU2uWXR1ZJAKuFwaz87DWfXrKfyapFtjZTLDsK",
  "key18": "7QBFbnRe6SnxbAAXhP6Hwz4GBLm3kmkmfdbYM9jN8MbrswVfsbbdRbwB3j7oZuFVyd4ovFCmTssjYx74pH86iqU",
  "key19": "4LLcKZQ8Hkz79zi3EP75n1WJUy8KipoZLBczjZYqh6d7SrQ7AXaYfydWzzP16KkPe58JRG9kSfyt2Mk4ptbeHF8K",
  "key20": "5y4L1mzHPHPncRXxJhfDYVhuks1afUHF3RGtX9zHnPpNP7477uMPDGqiRfDLYNQr64QvNRMUVi3L6HZcTYFHVVe",
  "key21": "5eH97Resa1do4oUuQhjQGaKbN9HpjuSAHShjcNxWs33LUkqSqhuw36i99x7YJcwbJ2ia7UGnhKt1pM53DL5pAFe2",
  "key22": "2eWhVWSDZgMfdzjP8YdDSmXeUhU2hA6ghRf8hpQhEEs2sUJ8YWLrkZ7uiu7Lw1Y8A1gGVqqCsVcXCFc9rgnrkBfW",
  "key23": "2X8sLApv6EJT2D55TYVSXHHAj6X5kYRZ9jE8SHmyawVA88xMRuT9a29C4YMBR1sYA7K6jEULAvKcP4f9cMQ8D51X",
  "key24": "73NZFnzcqkVuiFJswqWZ3gfGx9FnV9eXozks45c1vKCorP7ccE4nFBy116s5VjLEQwy6maYqTvN4qFfVVQuhUKF",
  "key25": "5NXzNn1ixU5zQdvRujhhvvsVrgQnnYobBwyf5f8Qqc29jj6sSAr3hti8q3HN3d9HrxDJsoatdYYPW8HqF8cXvQU7",
  "key26": "42c8GxXYRUcyFRNm4HvMC7tRXH9iuwrQYZ3kKSdNjiRdQs3qL7bEg37ARWVoaVEWqWidu1kZCnwwxiv9zdyvnLu",
  "key27": "o2shqCU2acB5Nhye3Vd9CKrBqSu3WESbUUwa41Wdb8s9kw2StnsJEky1dfKhrohpmabtNoTHqjD9gDn31gKn5Rr",
  "key28": "2V3ArRYb95w6WuwzdXt48easqhznKuA8XWkN4MUj8D3Np7tHo486R7XgEoT8i76cL8z5sRDggoScCqhWrF4r2ZQq",
  "key29": "5Azp4WmcufxSxqgCuAVV2EK9YwMHwUaZSXf4sCarVmrXPVsq2p1iihud7T4PF5D2hX4MtEwgf26faiAwNGuNueKm",
  "key30": "khukbpmKAAhtJ4KM5wu2kAfahweiQmj9BzCR3cFYdKvUegKwvWp1eqLR23jqHFvpMa3CZnSio1w8762jbiGJuik",
  "key31": "5gA7f4qRThQt5gNLnApYBm3Yh3tGGZBYrfoWE9SUionQ8pt2YnRt6rDfJV1EEWFDe3tVn74HVZ8igRJaxGKEGetb",
  "key32": "FgyUJciDGpZ41dwkhynE8gCzoJa7o6WnYh5HA46ds2HFstz3Y392ozBo6qXUJZ3RLNy94hAP32i6yab8JmT7VrE",
  "key33": "5t8KEBrUYSr42WtgJwJ3Z7isW3KYLohQKRj8uYra5PYHHm46biH1oQ6FhLwnLkXF67yRCrHmwgTbfxn58B2dpYfz",
  "key34": "53WAQTtWMoWn5hjTG16r6jhcAFyNYmZpEXova2oGTy23Hd4FUyex8w9xNMdLMAbDQmX8jA87p2mpC2c5u7TB7SRT"
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
