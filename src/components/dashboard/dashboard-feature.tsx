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
    "3ztC1i9nXUmWe9qDPM8vnTMnyw1bwy3EyZu2TYFTJNvHAZ3tZqduz6Me46zGpZsjmb1r3UkgBTCFEzhyhEza7eeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oHzkVsFM29LNHAuoQdcL2LEC9o1xqEKjyYrkLh3CG8UFywQj3qyL3tBW4E5Trk3urPnv4TBXPn7LyFwxfaf3mXd",
  "key1": "5mzv23u6vVA1v1AoWvoHBMsuX4mxsngfR2rMakWE9ipknHUhxpdc8Z8EMLyL6ofw9PHihu5A24MvbzTQXAZWooZK",
  "key2": "66F6NVKYTTJaT8V2nijWuPHJmvd2hUH1pUK3mVT2132swtSW2415REWAv14sX37yN4if5L2zeFjicRePhnwZ1yr4",
  "key3": "6ZotrZyCL7KRAUfQ2ENbuNN69pjco4Qj96WoxNmvgUbZyPNvJNTYnpRCTEDrsFbir5qzsetYMaMTA7ogN81H6XY",
  "key4": "4YBHjyHeZavNE94AomBFUiKtT9s6FTcMezmxgc9XixdU1PCdXdDT3uEx2jMx8b6uoswb6QxpBQVr8FYQ4VTiv8M7",
  "key5": "3zGhTfyc1jnyCKSXvsXowckBqe5pmxSe66ppMpk4XjVTLW5m2Agobx2B1XRCv6jebRWA7Ezq7HLoSdH1SvQPgEs7",
  "key6": "44K5zxuQFVHrp7Jpkrype7UAxEbQy2bK5TGvAtwKiGguQyzMuMuwm62cfGnN1fSromJq5UFxv7iHR1DMAk3CbSwy",
  "key7": "2FCfWD9igN3CaczVUy8jhoPvCttMrbWoVHnf9Rso7K7Uc4PRPVfeimQpJVRfsdgeYiGKTkMeVibEJrXEqmwgJXQk",
  "key8": "5a3FzV1nCJfaHHkbJvstsHB2kuVi32kLzYTroyXSQqWjkgo7cU8wm2vhNs9rBXhhAtLyifZW9W1JZn1xpmw2wUZE",
  "key9": "22Za8a8XcvxnTvHje5fo4dw1EbAKBdtduy2Z1BSAFPkAb8jY8GVkCZR8cEAnYGTTTtmUDxR8C1CxPLrgfh1CfZ15",
  "key10": "2jAUPnn38ah6UoEAs7oQm695ue8JkUXqfyTbJB9ybWW6DVDTceDACesmysFPGTv9fuwtBprKfE14QdvtyNxFB7Q2",
  "key11": "2Xw2uVx3BqRzmiNHA164UwFcm69hQxGdTq1AXAuSXEh68oeEvYquLP1RGzxgD9b4PQCU6vZZsYgdzp5bKpsDX5ra",
  "key12": "2bJdQnrFgwbEJTsvFCgt8sfT6us8YUoCeuszMRxftQ6WY6WvT3F9bwE5cnEwyyxstPimiRjV6Z9oCuw4zVWT3XK5",
  "key13": "3MVN6E1Myfv3Cm8dwNgaDmxQaAvyYJ5gk4FX89qkoCjB3RPndvBvvffofkftSpMBiH5K1bGdZKb98jZByeTynxHx",
  "key14": "M6aJGRNBzPeHyRTxh5aLLAerhokFRzRwiUL24coTXEmjAomT3nrMFh36L4wjVk3UsssrGFK9xskSY2BMVBjbE8Q",
  "key15": "2gArqmgtu1Jzfc1qRM8QSetMCWfwJn3tPcZRVoJoUYFajSUanBtBrznuttiQxcsWj1R8w5kbDtaJvjxF2h5Efowr",
  "key16": "YCZzqubN1CHAXaA9E4i7soZ28PPaLuszGQ35mzsJWrqx8XxCp6BRnNNpNrQ3YQp6QjAN2vhuXbwQJLq931VsiB4",
  "key17": "3KS6eQWHc82Exj7e4nrjFdrSt6krX6hrqAtSr793MMBqFsforxBiNDmg6TQAXEKNH515228J9rbqnsq1WFv3zi5c",
  "key18": "3SLxJvUp5LApApSb7VUysDGv3pHmQneuSXszGNMuzJSXNVE8VrTcW7q3avJXyiNLhwnN9iwSFEH56yn47Hph69Qc",
  "key19": "2UTxCeREW5Hmxe3qnzfLhP3GiBTJfHAo7dRELCLGXdZdQZGKzHoCZhX4iX7XZs88TUkiDnn9Ei16UfuPLR2EjtJq",
  "key20": "3zin8CxfptahaTxHXnsvjyU2bQD8bHWv6kV3cWuwJrz6y2qU1trvMGkEj59G9Y3Jky8wdB7BHCsKKJaM8FSY9UR3",
  "key21": "4nk8qxwqscYpxtoQT7arjgDmVePRyhmW22jdHnnk3usuuwhTVixe73nFaRmcMvEW3A9t8RwXikLkNC9RZUZsji5z",
  "key22": "3hVEN65fzGRyK2Gt2QB3RFhGSw9ayzeW1SewsH7Pm6ZXSVKiymWqv2aZXDeQ1rb1dbvqsqxfP8pN641eK3HGNFCP",
  "key23": "2kAgKq8H4RjAH97FZT4tnxKnBvp1Pqbc1326qdDph7eEu1H3rX53FFZB6tqYaZJjF7FhgXxU97DWU9HPFTGCjLxy",
  "key24": "5uesf6oQCn8cNt6Ehi84bcq86MdSp6bv7GbvL8UfppTM1DVMwMN5jBmtSW4G9WJmLJ4F8YsQ9zdFQv7MPS3Si5ym",
  "key25": "2pCyGVpev7rBgffbK9XGJaon7y4oTgSJizSRQ23asqDe7UPCQSkSj5KLZUPbZ9msAyrd3Gi8qT23xfuyRSzyj86A",
  "key26": "5NW9r5hEF2PLzWp7GyqvkvYq1GerQ7XFrQDkq3FPorPV4as1L1ygBA4LDkerWv9ztj6xCw4x9yHhqZvxM72hSamK",
  "key27": "51T41BVmH39uW3gKfpBZizAzQXa4jqpugUELiUjMb9nMeecGHFuhYVrhbYMb6QHemWJqmxpqZVEKW7XgWTbM2Udn",
  "key28": "2uY1zitTRZxSC9JVJuWiNoDK15gFqZFe83aUWSRzyBhAd73hohWdAfbcZCHSN879aPbiyNvGUuxJBFi5tigi9Wbp",
  "key29": "2Bq22vXqjHMCxNjdrAk33yR3srdMLgZ6bDvQh8RZ4EeiyPbnt2FFgepbybXZxM8Z9ZLdQb1Rffw9EPcXFc2VYgMY",
  "key30": "63K8vjxbQF2FtW2wGhNZzW92sZGSZ7dnb3ZyCDh6qFVLJ79wzhKE7Wn1W6VaXRCmW2Gtdj7xosYALiZ6KeyQHjmW"
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
