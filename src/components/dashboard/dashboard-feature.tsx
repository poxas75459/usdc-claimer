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
    "2d5eZSyPmjMg7wVfKzaEdU7xrcksP7AJ7xVe52W4puUPt3YAiLR9aoVdnqkM95uE7ANvgTMQQBHyyCkddFDDueFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bE2kSaTQWSrpbpyrnRzNF22QFxDShnV1bSA9zwJk5dHQjpjKPH6FtrKxGcmgPsmvUFtjq6QtEKmaMDGc8zZTQKS",
  "key1": "51wH8d2dcpDziYbGakC5GKPeAR7YoseTit7wDshCRVWVeixfHeUFrpPrpBb7pAzqMLXbrgYFfhphJ9baBpNPYrNs",
  "key2": "57u2AHJ2XafVVxWZi73L9pXVJ47w8PfFaQreuDUtpWRzD6gD8A48HgNJg6g1J2NxtRScoFQKip4S6wchqqx4mx9H",
  "key3": "TfWScwUXuPaLj3TtrVHVNqtRL7h7HwDicYsSHMXdpkSYi3veyJifBXrXMyXnwTWgRD5s8Wmxu1brDhkALBhktZY",
  "key4": "2aqaPviXHQhzfTLN2xh87A9J8N5VN44KuZ7NC6JF5im4ZqLapitgJi5e9zV1fwG2G5ni3ykhhwZkAjUDEMBPHBo",
  "key5": "5QpeakN8iv2XXPH7ABWseJM8Vrovij9SwLxz8dx1nCssJFyic55eB1XsbZmpfrFNT66gAwS2uJ4NbFns3vyXAxB3",
  "key6": "5dPqp1S1yPdeqf168gpVFR2v2AkLc7cYekLUQET4TFnzMyq9C3gegiZhKrzfYmYrthzs9kphfS7BdwWMf333WP4y",
  "key7": "2TMKE5MSbhMCR8mvEftVqDLbKTZ7RQut4MrDcu82PEnNmzwUoHHKbu9aLfMKcbdJKgTUEDGAzpe6tFntnFCyFado",
  "key8": "42D1q6iVJvnTcAYRUQ9gmiyWs9T5AaeA7ZYNMKf2j5xY6ATjKR5wg9zmYusECE1rFngKVAWbA5vouRgyXqPWS98n",
  "key9": "9Zd6bmUmQrHw9ARMoApBdm61PAJQB6Qim2mYgERVGtKu9NJWq5fbGWfMpthMX4CVLHx3Hhfmh9DDVFjc3CgQAi9",
  "key10": "5yFbKxMTjL3aF99kMUvMcKMgeUFurm5mb64pnzdE26xwq5SY8Jrw8nr6SyfbJozJ9GgUPQeRFfco16vRecviPVVm",
  "key11": "43y9JBSZGJQSv2ckj4konAme4dcosrPZCPhScU7Q8Nm18vTYm3NAaBoT7KNMwb48Kya1XuL71Mb2Eqtc2xwp9P1E",
  "key12": "2n1cUKAanHE6pG4mr7sYHRevTxd9zxqtfCoQrgoGCzCWbHEDmByz8SiLeYF1xiwtd2Q3vkuhaybmda6MRAvYfcPe",
  "key13": "4WPWRfYUhJ8EHqhuLa1cXubFKFFuiWGHkCHR5fefcoEHjCQjXqLdhRb34ZSE8HrsNPxYUq9iaJdKYxsjApwrDaBd",
  "key14": "hGbr9dKiL78g1a2C3wLZSbs7yRoStfbD9YbnzKH7U8dKB8r83rD5Br5y4e1qqkBGPoSiRcoQA7Ymxaqi9dEHzSo",
  "key15": "3p1CfQXk89pVKNuLcvZ38pDq8YXhq23Gke6A34DjKDy2fHVrmsUVy4LE6yXMzXfdHwnTPu2mYbAXi1nm7dF7ETUr",
  "key16": "676UjVNQgKrjpjwGNbMfvbirDZqFoXypV6DmoSPhym7wDqLbPqEB1stmgT5SoT2gPs7yFwKEB4nwPPmq19pLWCCL",
  "key17": "PBB7eGnMpWsKTUAsDPUPK9aCm492JFdmNvqK7F8FjxYNkG4aTrD8CL9c6ZwVrx4AMTZ7UGRah7FuAQFbjaPzS4B",
  "key18": "4xQJh8qxQoYHHWfoWUSGzripPmFvWsJG9qH4mvMKWDM6Swhdk8CauJi6pGbyA3KRdPh8JWoVj2KVFxy1xFJJZM9e",
  "key19": "YhWBGneXXoStWuCseT5mUx3o7wWBja8TEa8rP6aBAarAxBu1PmZppQQv7Nf1rjzPmGAa5MwKuCMxKM1ne8oHZf1",
  "key20": "Yte7odpwG6kTS8S6WZC2aEyMAgJEjNqpcpbxyMstwjy5wCF3U47vTpKwETmjKddBDpw17zSjZjJVYgKnfbogi7K",
  "key21": "5WCmz9hckGiMBpaS8qo1Y36eupwqZP7644HfSjnNHB4rqSQnaZgkdWWwU5nQqMY6ZYigi23K98YCSaGZ5RPozpij",
  "key22": "3Bg1NnUdeQaCkc7c797xhEb6a1YbRkLduabQ6BfSY29myA9b7nSAn5b9aDCJtkLiVji4WqM4zXnh3T4gbaJX3WiV",
  "key23": "384ufpgwuXNp1mfRh3AfKG9kPLL75yKVkZqaGVHyWDvUVTRbUQmBr22kW1ibdYxshYFyzXZyBddodRJE4rhCpZQm",
  "key24": "3o7ckrgbB9pVuZsbJUQF8tsSAzxxKsJpf1Puz9JeBBXAGVsbijURYVRqLt251VUTG8VujH3mshyBgYhKM2D7pTM5",
  "key25": "3MsAvJAHQSgN3vxwDf37YBS4wCkM5SBkNeD9p49RjgZUF3ZjDBtzSo6uYSisamtMRQipLksFvgRvMLDMwrNDbT6m",
  "key26": "vEpjy8mhQKCQg8wZTr6ryUR82qX8erKSbWDTknDXYd1F8fQ3qDBkui6BGwenaRgxTKCcXcexHpNF8MzHvvAJ1VX",
  "key27": "3ZgLpKhscr95nuw9mb8Rj3BbfvqqzipG4mrtkeimRcwGKD7Eaz9ckdpwRTDwiSJ2mzBrkH9b1hHJgXZjzitmQs8",
  "key28": "3sRNT1kYXr6RBzteMkRw4KVrUbC5ZbitReq3mqhTFZeVcTYyQQJNvKBaN5MdN8X5JB5hgsWKABn95ZBiQNyoEfQh",
  "key29": "5tjK3o22a9vX6RvTT4YsNNoLSfDvWJhZpfu7LqcY8ccwBnWduPQ6feks1k2Yg9NVm55zr5HoEjStoCXvF7MEzQTG",
  "key30": "3X22YKu2ryRYqBdfiLbhYbc885mbsw9d4kEbxfU4Z987S7sj9bG3dFnM73FN5iaoxA1EcYVSBy4yDTPCumhVumen",
  "key31": "3YSB1abcBUSJD2KZFVGEM5ipeWxkEX4rEppges4WJmdQN5xhjtYnPjdE3QcUCsJXgTPEn63Uk6P7tn2YKyxSfcVN",
  "key32": "28KoRS9HHuDrZ9uLdevp9TUWMFdbpb17j5iRKwchEhLDAgdRwaez9Az8fxBdxWTG3NX1QXxYcoYGbwPwJSRvNSro",
  "key33": "4rhEH4RzLps8Y6c62RpoQ3qNeuARskDmcFwMJAQHcFmqLE2E2cDN8sF7tenCauijiMkDjWVTgLygRxcCierirQ1Y",
  "key34": "oKzfGoju87k1yptoDbXwe1DED4mUN15yMTRJCQoF8zuchgDXoGRe9ZnkZKAuEKf4YDqxzqft73JzBzhTpEQBEyy",
  "key35": "2TqnMpgb16mbsQcjyrKnH5MzirNetYW45UQZ3PnkhLJjPsVhf8vVmWEZ6PYCgQapRLJbg5eLtHhM7bfTCD4ntR6f"
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
