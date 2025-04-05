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
    "2TyicvCpUfqaRiMM4rVcu4V5TjRH4t8TaDPmzZ58Jt5BxPxAMdLsuZFFfLiJmRoch6NWeVtjk7PpQKoQY89Z39iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mwkvL8Ec5rn7PpycM5a9vMaH1XUjLQQ8enT4uxrM4UK2hhAUjVJMJyw5MTvEYoWgbPgN2MtquuFMoq2VEyLBUyh",
  "key1": "4mbzxLKFnaJVrNerqKh5BS6VnpV4ahS1Q6gvt9R9U3HsEPA3y6LdMEgrGWnv3PSpry3txanJRYbkRkumw3NsiqHg",
  "key2": "FGpQkqits9nbu7ErqxuUjBCoPpPYjiosb67XqDbQPxjP3yicLNqf4aB61wpyvGFdsCQyYYCnf2vEgD5kcE7hMPc",
  "key3": "5T4gMjMTnUm1zLJvmwFDkDXeQkCosSpgBj8GAbNd2X6LdB97jjocfSpKDNdbWsYmnu3F8G6cBcvnBDdN9fWfTy1j",
  "key4": "2aHJ4LuUyxyJX9VnuA7NTUkzYzht23mU1tBttzaeUT5VrTKMSUGaVLoizy8QxFpTNe6eHpnjgpb83sqiWGZhJvoZ",
  "key5": "3V6RUbPm4AW5xKZu7zrFSXpxdoed9PJkZoNmdTeGnXS57d9GYf5jrYKxLesC1bJT8iCchx8cHETcr8Kr8qq3cPVW",
  "key6": "5QUQPeVqGkePMh1zo1TmeFn5ADK5kPbeU5spHsGs34pLYNwrVy8sMymYJ7iARoLZYk4fSi2q64RUurELuQbBpfCs",
  "key7": "S4BVtWET9ACRnb78icSP6XgHF5jn2A6ajEbKcpDke6Sb5Gv515dbR8RfNPuLB1CqfTm4Cx5cR5F1T48RK5Zujuk",
  "key8": "39d8aqUZctoxrkLJmHxJ6tdYycEXBHJya6e4vfbbNsmd2P8bXeDwXsV6BLcAZyYheBRRhyABBL3RyvEbXw3UBWaG",
  "key9": "5K6FK3jqPRbJksXwEBxhkqHaBuzJStKtSZbE33ViAPk1FbmLWeD4MkH8U5bsF45YDM8USNT2e9y67GxqeNSRdC2c",
  "key10": "5yNcMXc3g2WxQTPfvzr3JmVoe5pmTdJgr2zMQcZJcBgWCMnYLzz4CeJoS9nVuHRAV6RdZPx1WkMXxhk6DJB4KDVh",
  "key11": "3yTUgworQ35s6V1f7VR7SnShFw8q25wMwHHVpnyaGWmbxAUN6VcG6bdoLLLJjqNggxebtMaEsTSa5GH2vyTSc1Rq",
  "key12": "5GUKcrBGbvvj6g4t3BCJmM997jYKyY2nvfZwrJQy8teC5ef8fLXf59DMCSLDYrGBYQfq18UbSbfextGN1U37QDWk",
  "key13": "WaaJqvjPDmFAxe7utMtyegKaXhaniigbxck1mVehGZG8G7G8fKzYvArR97z1PB9QN9qi91miY32RiWSyUAEsxYg",
  "key14": "4saVFcVairnLkrZHBDh64Qq6ZiyrA4zFjnqv95ACQWR61nbrPcCMQQyQMFqsHU2yRXrRstc4yCpWhfABQUPrurJB",
  "key15": "42jZC7MGz9Uufzcyy1whEZbo3ayW5TXQPphZw3Ch61TihYzV4SwaRRqXoSMNwXvYYKYsiL3ArCuJtx1aDrydNQxJ",
  "key16": "3BoLAfEXLs1fzQBPwCfy64Nfr5RL7jXX9QYm8rWr52wN3ZpXr2nXkRrErai3qyBq5bhu1NPPJiTrrzRKstky8x1Q",
  "key17": "kHUgQLNRpG3QEM1KJWZaDpi7hXieK9HwY2NXbZ6C1AUG1WrHskaBiKFuDJPcUFc8zYMrtMhbo4NmLEkwN1Ucf1A",
  "key18": "5bpiTBSzd4zqpZJxZnMia2aGpSxN3pyad3Q7srksBVz9UdVHPxJfA22poVq9uxaMvKnWwXJ3bNMqt1m7xqp7EGza",
  "key19": "LUujAtEQiGdeAtMrdGBQbKdZ9Ncwxb2WtujxHCVJkfisfCQn3GgsvcNjwkzPwuHykEU3eKoyf8eCZLUbkas8HCT",
  "key20": "3cyu22J63xESnnXzSXr9o467emhx9SpH6wPvpTYv4WJnAk5n97r1dv4Ld4HXc37GWMQCXXxDm36PpG4QoDMxJ2As",
  "key21": "5THieikxSajsU1kRtcXqa1tEg3mFuA3rnewBvrdmJ3B8ZPBoTJ2N6Um7iTAb58mt5aJq4nTV455RRmn1c7UAeTfS",
  "key22": "3m9v18JH8BqxUscgRYSH7kkS3jCG1VpzadyKbr6BFvXyZmH6hfkH17TCKWXSRaKNxvaNnzNvcDi8atBwuYQWDFog",
  "key23": "2p9NLtRpaqFtuWbn8WH3ycCps66FEgEVac8DgMTDDPfzFTDYuM9bYQJ8VpjgG1TYuJRZEb7QpH2pH1GHBUmfB1iF",
  "key24": "4iuz1xEQAPNoFgg7JfhBdkbffTr2ChLiGFHGDCRcVfLCEXDGDDYfAGWWNPXxuDTaZzGr2nbrXVKw1ACH9ona3ufZ",
  "key25": "3F2onfKmstwk1coRcyru3ziLWkPQPPN5c5g1tVYk4jMu87bEwuAdU6NupNnHMxcuEthKLjaRNMAPsmqjhTAkgpeT",
  "key26": "5qpa6cren9PvdcNE7Lb3oUmDzT7TF6NZS56zuXQn7HcqjLYUtrwRCT5sbCCNaDeATvUWQiL24fRBYoVXpruLTdZB",
  "key27": "2hobRRrSJqvWUyiGvmNzqu4Pxuo7w64NVLf1oYLzERVP1PWJh1bJmFURPE7NSVQenhZxKbpB6JTbWgB9r2pg1kMz",
  "key28": "5J8GhPDuTdSQx6MHXyi7G34eY5LWh6cUjLHoq6udCaupY5XpPeYYKdpQ81SnNXcM4QAE3Ugwxy2JutvgX6mskq6j"
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
