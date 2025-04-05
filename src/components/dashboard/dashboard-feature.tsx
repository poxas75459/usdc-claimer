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
    "31nUTGUMTUfy4KCKEYBnGx5yupJNVzmUgFDevgDb3aZX9gBuHTsYsz2V7aGe9ZnRJ3n2mZi9Lo7aq6EwUrd5xVz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxP5JWgJZfMVuMnpdeVufiNHyszwL428DFmNqJkvNPZD18RnCJoUK6Y11Y2pXq1Jm9A9cw9mjCKCqw5xs6ikeHj",
  "key1": "5yiHo1N3uTtUiKsx9HissEsMkMdmkvc42PVpRvubXrs4HESo5nZdtSTqaHHnR3UTr84jeCm8Nam5voscvDePAjQe",
  "key2": "2ej6rwr4fFYAAyNfMtXKaKUtk3BNGswAr5FESGJdZDEFbRigBoPX2yNVhLVGpvQhjgNdz1L4fXEQkUDR8XhnZEUW",
  "key3": "4FbzqCjavY8PAafKWco5dv2ek2TT5vnrEMCXdJn9PeFwtzFhWhmdDEjMeiq7P1e6UBYZAWC3CPiaEPbHp5a2C1bJ",
  "key4": "2rn1vpzhMNJ7BkEKN2ZGWHpJLXbwa8BvHRUysbUpGiNSa1jmC4KtFZb8RpnmMtDxHYLRcga7YDSyftbJhCqtKvA4",
  "key5": "51VEDC223d9DKm6ERhtRbyzMvYSkthDU8yHVhVP2YM7PsixbLscvJguZXKy2t59F9cxAbBF6njPSnLEs62cEDs8v",
  "key6": "5TiKGZRSiFLb7r7s6JWahhkRu4cv6nF85fi1SjqVwSTteUK65EL5CmnQq3sz8WALgkKLxW8AjtCHSWECCfnDk9Wc",
  "key7": "5zcV75C1zbk11ahui5VMMgGHGYX2QT4zptAZ3yKArxtbJED8PsAmBLm4RdfwrtUd8y8KJDBKRtve9JrMyeXzd7id",
  "key8": "zswrhG5nGUMixc7iAZfDHLp5Y7hcVhKvy2tr5xbyEW3aAwC5KbwVG3JGxeSJFxnNomPue8g1pKPWHvJDC6X1HMq",
  "key9": "2dCv6zi2iDxCmSC3goufahgKsFHMSonVQzMbMMCTGWTVes11xmHs8AvMDAz8CrawaZctRMknmVsLnDZgvHYtqGbf",
  "key10": "RK7W3T3i2Now7UA5D16NiWmQxUyy4cvAQc47xvj2Fv1M3QioPAWWxFPkDqvkcBxQWJRpiLKCw9ACfdVJijXmieP",
  "key11": "38hvmbqQSexVPb5WiE43PPr4Le1vat5fpx5foohAVYE8AvNwwXoSyMTsJgXAD2A4uGxU19MD9WVsuXHafmrMGWez",
  "key12": "2riMiUfJpwUGnGnfJMutbKWvohRXPSSPpbUaN3UHJU48rsqqvx5MPZjk4kouSnJzSxCriG7aDFZzTaKMZ3ZeCvuS",
  "key13": "3fxQou965SkTZ4gnXRXpu2rsEFNW4n1S5tS6bgeJnbtaGLdSyeYhKhvzzKZHYjicYxY42GS6mA7NxQyQxraBL2ip",
  "key14": "4BeS7RLq2vzUCD9wgYwgf9CfXCiBq22133WBLaciFkz9VoLcZ4eAmoMPCSkSSiyA9gpskoiDyVBTfPGiCsDb1AQo",
  "key15": "5fbMiCAco7bP8d2hR7XHg6VNfFaRns4egPy5x1QtdiQDtuW39W4BvGK5V1cD49HPByt8hw3akZUSwqBSqkJwxaGh",
  "key16": "HCkGMd9tYfP15dn8RKpH5zH7fxoiAJ1nSi5t5x4eWMeMBqad7XoE67549om8GaGktmFkF3hTnrBoGuAt6fdCyYm",
  "key17": "1zeFwSoRqxta4wkK84eaXz7UoVb3kd8bLFNVr8nTa5Er3pWzWq6qaodGpnHXVibJm63FjQaTJbfZDFfX1v5m2Jk",
  "key18": "3B8ehqj22mpPftJVp1pCtqCw9DsPBXfTpcCvpVfmbufCnrZp3U5kWjqVtk8B9ivGhgMuy9Drwtrn99qhTENKbSCS",
  "key19": "3BQf2LBXHgnvn3Z3Sy24kFTPuusiMHQ6jU69jcTkZquTn5qns5VE7uVvNkN5KBq7zv8seTDbKi8Jqj21zi4TJ2Q7",
  "key20": "2Tdbb9qbYFXBLDfP7tfXtrtUUpT3xcTNDwcwPW1Zr2pR5hP7mtuW6aqdYooFR25sZp3pe79JkwjKHRWuMcUTSAsL",
  "key21": "25SCF9CDkEgtm8LkP5GdyiFwJg5CEEq7iKCGbL8xYQW6PGgkJ7a8UkWoNGpfwfmezPDA7eZ8xqM4MMdbq34Qrm7N",
  "key22": "eoxh4QsAroUowMCsWPg9evRgyY2rfYDqrwVDjB6XTXsh4py1HJYrFDvnGsMsuGnoPV423osntuGWW9sZknUdoyx",
  "key23": "5Y9JH42hYr2smHpMgGTpjoT7C3vmcFifCWY5FSdza8j9wrSn3CwvDZcg946tfh8CN3CbmfMzTpAKU5NMj8ViFJ4x",
  "key24": "2wbmmTU1V3pVZXaJxfvHpd1DTYuYXEAf5rGhmfXhvBoFoE1MD4Qnn1GFEyuVL5HMq7Z3rGtngCZVAtQShnXi68jf",
  "key25": "2V1Nfwe8mX6Y11rbanKf8P9JinArAmjJgGnexEUVNv1K72ZjnQLyG6gez1rktJDEMv9AMKW1eYzizANmV3GPhNDn",
  "key26": "37s8xKcCv26voim76LQgNnTg4QcU4m9fKvL2Xnd3NtDJ3HvaWyaviFah57S3WyvhP27NU1BrH6CjvR4732j4PbQN",
  "key27": "477aFkezrZAjnJCH1fm684qZf1Xiscnh7G9scxY5yiQHzU4qNUfdkvTzuK44V18ySdaWk9RKHfjGjJUUYijWuWJG",
  "key28": "Z7nMEPwE3S56WCVNWVub6d4NPjHjMoG9vzrhVfs38VPd8kV3zVZgsnVTxM2GD3tY4C2zoFB3eTxdhVWNYdqpB4j",
  "key29": "55gnPprB11p679ciUwmv5qx5a8uZa1Aff68hsuoqNjG3GUJ2fuvDvuMJRh9bNchJmS1LiumMymBYk8b6Y5C4U8m5",
  "key30": "5wbTqAXQBWFkz1eemZ86pUV2vE7f1fEpBYzsXYHw3xm24drWNNqqKkgePSFYDd2HTwTR8u6caH9Bin8vW8yBFcQZ",
  "key31": "2q7uBkZJfqXuVFxrH1jYCJka6g8FUqzbyTySxLfUbgyz1LyfWWJRgwBEWChRP21e6UjJrkarRouJkUrYtjqDU7bA",
  "key32": "m15TzdXcc7zSnu167c5zH1LhjNLVWq7zyZdZzfxKVjukEUVWiwoSnAGU9bbv1kAx5UbJkrG1zEp1pgJHRKh9hsK",
  "key33": "5MM8kabtGCgf9tdu4TtAiU7zaRrUsHF1aXTeTqNwVAnJ3wKkThaxLob3fqoCRC8fNmqSS7k8ngZ5ezRyecHXjEt4",
  "key34": "5qUJeH6ujxA59HrGqUNP8unYkJvYvTimUpwK9nS2XnTMAaZUuh5hc9EdcZTG5QZBqMaXoCVSfTusQcoxRVKTRV4j",
  "key35": "3cAFQGqXYnGCrmcN6c7LS3oh5fyjZG4QvPGMhAGAWGtojTo6HbFwkuwUzwaPsUYpyidV37Xe4SpKsVqBRujXsmZa"
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
