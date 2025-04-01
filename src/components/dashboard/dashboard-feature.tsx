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
    "3kukC1vv6zG7ubSLhDWE4Qtsmk4JW7HYs4D7b8PGKhr7K9SAtSosRPWVS5HmCZTjwPThtcneT9vw5cHoCXTjqavH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qz324KJZcBsWz9vnu8QPjV52fWtvXtaRmQDSf9U1GcWvCWLJd3SKCCoMPTSxhk5peB5YSPtMYHF8puj6Gx7RGZb",
  "key1": "5S9DoWXmP2F9geQKW2VsVQbTevV7fjZAxeqek5ChSWPKqC6LicvWqHiN69ZNbBmNivZrSGwRDVWxNELtq8XhsTBe",
  "key2": "5qPkPKPDEoRVZyyFCN48SesWMsUXZ2B4m4b1AqxYAC4CkeyNCgoH8CdHUAAh8dTGe4KXpG7tacCTt4JjNrkz9P9t",
  "key3": "2EiVxPj3AwwCrAcHxRVwbHroApZ1vXjjaEtJd2vehCpAA6SWr6xnmQMpxt7NDEJ1xsGJpM9eyt1YaBRfMHWMCpFQ",
  "key4": "5VKowzw1pNxQvMSNd1UNE9XkDD1zVqrBpbudW8coceLRvAeFAT1rZWg7hRfqofz2BYUq4ygVPR9pwvtg8C3zgk8J",
  "key5": "4iYGEUZFLDV3JaDsZL3XNdx4x6qbU3sZpw4c5RVuR2gnkBDgNmBDg4byE6JUzJvUhbhrHq4o43TbXgLeSJGDfvoE",
  "key6": "3AXvRZddknw2cLENjuhf7Gsqss54F1SEGQuLPV6XwXwATgB2evxpXJEUL4WRxFpx3R5CnrDQoMtNMHuERud1ZTTm",
  "key7": "46ZFYSVvXz91UcERGTsTzyJPN6NK1pY76sPMKsiBoLxgLo1uVCHx7vTWkupDoWs6E3Nq3uo8DZFfD9Tox71Vh5rB",
  "key8": "2L3HnfvKLp4jn4zn9KARg9GTmxN9hV3ASwLs4bNhcBJHUDuFefK8tB18ZtBg9rrwoZVGf4cghHcitNukCHVw4oRe",
  "key9": "5QyB7GYNg2kMMQgmouwwnJK1hDWmb5Lv97SrXYg4GiZ9NLq7ZKAPUdvKbxvpUyoV2WSo6zVzCcbC4csN9AjyoDDf",
  "key10": "2PQey2W5gxEd6b48KevJMVtv1vw1BHPfosnoxW1tDWo1g2MWmdnHRcocXAHSXQrUD9YKYoqMCxDnHkiAWdZdqwkv",
  "key11": "EHa4vTUL9CrJCri5n77sW4dMQ1LnNyu1rZGFE1qRC7Egg5g2Q38BAhK4FeqSX6gwtZc6FKpPmeBEDxq4H3EouTt",
  "key12": "2dRtiY1KSrrX37SQX6zEVMFVT9LgH6zZA3Lfr5YBZF3qaPsUTa18SLCfj1fJiuq5oWditLJSv18JPjiqo6t3rVkY",
  "key13": "4GeWmswCXUSXjEi8ZXrgSSFDhzSJz2nDoyecFJSzqbukHFonjL4ePqoUJALbGtx5UdJ9FNujoQETu9r45PBcSvXJ",
  "key14": "5MDsFHzkDMBE4u47JGpuenjmyHZXetqSZoHADYumJuuKdYgajN5W2dmMTBEvivrMCk5RC9Ua9eoeVyt35KG9acgF",
  "key15": "2dMaLdX9niCYeSX4Zsd6Pe6BUupewGrSYU8fnmw53H7DDwn69dLPaKTk5u7TKNtzTeRGwzTfFFuwXceGu2BLy3kH",
  "key16": "2n5zgcuinGGJtTVr9P5p8GU3MTWpmMx4q1XV5fU8iQdq1JrMakPdeLxnyvHJoqU2bsTTj3n92U1Pp8eiGzhf4tPE",
  "key17": "3uBzpEDTn5SZEjGY6yWYgacVQUzVpYe2ZphfhF1StkLueE5aezhAptMiNAeczAjX22gphG2HXULoaydSew6txSTP",
  "key18": "5zE1cHv2ai7sTE34U5cX4SNDij3XmD6jWAcD9iiHQhyxrSRUDhPvt7CysETLzvkcGcwb6Ju8m4DWLac4FFAKBXeC",
  "key19": "5bEC3ntvFDDoeiXjjAjbNC5Du5si4HKULSNEnSw8aDBEkzkUK8BMAiBQ8yNUf7xEfGpKAWzBmjKFEC9ZfPfLmvw1",
  "key20": "ser6PJv31WAxu52D5azjibowj2hn8GMNnBqS2HUdTEN2TUWGnZ7MK9BHjTViKTkiGUx8H5mGKYUyzsDoGABsQKz",
  "key21": "28DN9o4Dc797eKbUCpTVjQuqAUMhgU7eKwwaT97u3znxjt6Ftj1XCAExVnJZKyMS8JuLxQD7s2GZTAzqh2WuMi75",
  "key22": "3UydneHXE5CN1rRy3ei19on4HqodmpmWuLY9vqPdmuDQ17YGFXi15NQaweddwxUwTgZJKsbCzuD1NbgiKzyga5K1",
  "key23": "5xijrDy95cL5q6NTbwf4uzoN2QHyaeJ1ex9L8toD4grBK9XA8cbq5sFxU6NrCiDhJEpJ5MPCf4skmVepGYS2SkJK",
  "key24": "3YoT67ZJRHBg8frNtd9gSbN4L1rCmiKExvPdWnQtGTmwuvdcUWV6XdfzYEsooFZkFytD6nkQoBB5kC4KirF9NbFF",
  "key25": "2BXb4P59QFuUtUwWYHBHQfm4jNLQz8cXv3HK53Uc39bFFt5kPZpDoYP3s2YuG9v1R95Tr1Gd8RW4rt3w7ycTvrzp",
  "key26": "5mJzQX8Tusb1x1fNwo59TEpafBvU5LoFBYqd4tLzoypAnUbKAHWY2ajXjzceLJ54yQtN9aicfjmMCMsi1oA7TScM",
  "key27": "SGpEGD6EZxrndH9ReLoZ3BLW2utbFE1E7Y8HCc1jVHUwVF8BAcTnAuQWSAYi4a1XMmbkjeiH2GV5k1Cz4gzvDhP",
  "key28": "46B4NyPMNBAjzmJpnsxsrm54yWZFuShfpmxQrcmdSFZwUcfpMckFfXskHipfYTmBpNxXj3KH9NmwZADfYTRQUVEP",
  "key29": "3eTPzxavCX2NAqTvgbC7VL7vhyqTsJTthWRTufS9fUaidMpHxFCMA3nddv8hNBobrc8gpFu5S1kKDbpQF7rU1F9B",
  "key30": "63UZZPj9yRqZAZwgsPbXVfntxyuDRBL97AM6HcVK2eH8RuzKHkXvqfvYSTaKKSHAEuZEhqzT85ANUGHnPeeoactJ",
  "key31": "2fBKkijc9pzacC7zAsvMP3xUap2wUbZtVdR55Fti1gwN8ov8JQ2fXLadVoHsCD73UiA7CxUn4anxZ94ERQsxstK3"
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
