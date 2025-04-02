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
    "3yy747MKcxoJVwvXmB99XE9ztk3ZNCKxRaestV9wYHwCivdLTNE9QBmwpk2NP6YxGEwuqNQerhXSw1m3sAp3pXZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PJn2t5924C69gK3ZcT9eMCyb2imPcbyja4s4n9DyMHuFbdWfDBoYPEntsbNs99KeDJt37AbhDSUnAKvTvnLei55",
  "key1": "2JdqB7Ew4kSvqUdsmiT3bquBVu8Xxnf2TZwtJ6RPvfCxoBeeGTTf8RXbBQwZX9SibERjaT3XE5p4ZU3AiQF7JesH",
  "key2": "3uo19hDzv5DC85wmsQqDyYUJ2SBBKQLHajhtA6qSgRoYASQdTpgRY8ydH8Ksci5NxEqsFJqTJpZbNWAeks3KLiKc",
  "key3": "4ukC35e3WSjNMQsM8dg6dk3e73xa6a96BrWvUfDUKmsW6mCG5gz5gezVeC4mxksRH3UXzBDAgeJVx9CHRJc68uYQ",
  "key4": "4xp3uQTXBGqmsbvegRnKqcqBD6VsPujLRwnTESw6aBvLPAjmaJyLQVgV4WTidQc6d7q3nKGum9P3a7QnctLmULb",
  "key5": "5sxMHNTCdYWQB2e7fAkmbAzzjFwRvGFgPDxsZR8d7ofH9THbN6aC8iNLAMqB53dc3GmXDcrpWvnwKDH5eLCgbuTT",
  "key6": "AiCVJtoEFuwfmGYCFTKxYocqGaMyowaRRVfhLyB7sTobSSf9JxHBGWKdaTBQRRXd8AqK1s4qS5sdRb9x8WhYTN2",
  "key7": "4KkMqvk7N48VRRFS2vvQkQKVrBdoT6qs4woZGTzCeEAbNXHqLvwuoSjFKccuiJK2k7ECgDM5E3JitkmpfXexatns",
  "key8": "2nwcGK5j31JxLoHrjnMYduhutCE9Ab6UK4jzJtFJqCi27ULaKAwZgpfcutqxXvvw4xwHeAntgSBbowcGCLXjjNxS",
  "key9": "2oyw1t88Kgx8gamQU3KR2epu89rhxqciV3dHQ1EnDS43EQZWL3CAQPnaPTeMggJDnxZWJWgFCNBmruLxf1MB4xs9",
  "key10": "LW8fhoZGysXhhFfb7yA9toMSrh1SbuPWipdZfCYxNCGQj5E9DryGywDzqKKib1juyYYh53xX1KnUseKygm6HKNH",
  "key11": "4SVTiU4mLwrkVaVwsukBDf3teiUAoSpocdU9g4y7J3d3kfwBH9tTLuMtxSCkrdeccncq3emfTQ7D9NxaQpZx5Zfj",
  "key12": "4x2NzoLbniLm8Wu11AVk5pqAQ3KPPMPJaM1pU8wHvmb8S458eWE3oiXL3sGG7eypA6f1cxqaWZJYaujsd8Yc7opt",
  "key13": "3Kdah9uTEd6mD6hiwwSghaWFyZE9Zx6BUKf6mr5v97miXSYGQmG3Exsk368JP3CpunorkuDGV9nMKEYZ2HFKyPW2",
  "key14": "vHMrvWAc4dde2jcteesRDbXiBatradYFNS2azA8FaHRWjicJtKaaRTqc4oMw9dPtMNjEuwRcZGjwJPpWUuoBJC5",
  "key15": "4b5KRPyaDtQ6YPaU1Xmk8foFdQTuerj5PcuLSKM8WkHfeu75pejeDJZ6Q9VAkaj4i6n9FPBpVt2nhmayWgafkxR7",
  "key16": "2rqifAgfZdpo2DpcAAqa9kTyR9zncL1CQNq8hSgsH6zMoY6LRTDTZrYFjuE89jTZcaMuowagogo3ZJf1SN7bLGpf",
  "key17": "2WMiuHsUG91kUk7owNrojVqH6h4nVc4cq7hmFfL6DTv34dDyYEXoqAuxEeMzCPcydaepmvMFxR6getaJrURm8G47",
  "key18": "4q4vCqe9Agogi2NURrAjxWw38Zgd6GVnhjjwVmLfTDbdWoZt1fp48AuF7fkJAzSteCnpwdg3DYBvLUrpTns5SQsK",
  "key19": "2Bfq8v5L2NNKqVLpFbhY2ZFjZ63wTgQ1DC9u9DeTSfArUABToCsXu7ohxECBe6peYPF2KesYuMumvAskVDzxaoQM",
  "key20": "GUmZY3Kv3bsUvJccR1KfhMQAeRCS51XBHeCo9iguvyxCXi4FpMovDAcVc35e7rWNj4Ase25oSXseKvFnMx4ZSS1",
  "key21": "2hK2uJ2822wY15S3eeWXHMVrKmQRQ7rPcjkQVeD9YYfeusbLiT3FBnzL31oCArncuygx9J3mKZ28RsaBBWC386nZ",
  "key22": "4jgZteWw6PXvkQGQvA5i3FC9GDSi71pPi1tvsgGkrYqymdD6dPLyH56HHKSU9fYjhJG3bKXCrRm221UyoYMUNcZs",
  "key23": "2Fpef9cstEJAaoaHawM8NEJANKF7tzQP3xHBGsJDb1v5uzxayFMnW7gMMB7wWUQBn1tdziErJ7BALNUm2xgNLCHU",
  "key24": "4jaMXxZwB3ktUc65LmnX6PebEmSKJ33PeeHCHSYaaxK3nKLawnPJZKu5vbGgHZdKDcwP1MyTfcYDhJVThnaCZEre",
  "key25": "4Kf6tYpexVwgD5SY7Wnm6dcpuj8dXkc6BVHrsyVU29N1PBgQ7hnHwtPng3nygxWGtsCb2vPn2U3HbEhmWYAntxED",
  "key26": "1baF5pEZUP6ctWE2zfXV4QVkY6gP9bwhgdpDh4tkRYnZsTzLhWGe5CT4oJ1RQwDt6b7Q2ihFxz258nN11DE43NZ",
  "key27": "2sPbDgk9uKUXz23rJzxmYvqVjajm1H3jSg1Wy25gwr5T6UNQbBNCqMzJ5GiXXvJPrSmfm33Rtw6u8e8Kkoxb37TE",
  "key28": "3xAFXgge5o8Rx8fMP2zxHq6cLT9RXMrbnNSgJZXSTi3C6Tjc2uvQQ3eSs5MvwGWi2PYnAbQzsSwRhcSpdnhjXAqc",
  "key29": "2mM49LtB6zzfxzd2Z4pcMNPwj7FBS4rgnKLgCw8SzoSgdiatmcat575gGhFfbFKYYRs5sTcZ5TcFxj3oxWgFG7Nf",
  "key30": "3eTyfCmVJDwqecPS6isCkjCsSrYHwdLuq43Bx7zFwHmkWZApkkbJra7ZAXhLY9To9UMhKw4rPtordHpG1sNesJiw",
  "key31": "3hBv48rXDpi91XnGbN7g8vtj4H3WdhRjwcencNDwgB2SJauYdgQa5m2bosUrC2RfZDTuGaKKqJUzWhCYz1xYsyyN",
  "key32": "3JSJ442NGgdcMtCYwbGixhSNbheFC2JTcX9FjzvFPZzjfmvm2vgUPSpcz2zDFNWfqAmDp2oV5mZqojHKSU6KtSsc"
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
