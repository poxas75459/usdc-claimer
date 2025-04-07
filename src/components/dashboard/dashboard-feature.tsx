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
    "2vAmtdLqYu6AnsC3KsLb2G2r14KFicMoDLR7m91K61YVfaCz2HVbxWa49JfsAZJEBUdaVvdKEUPiBbKosZR6J9Rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gaPcbYmrFBkVsGADoEacHV1W8XjvRJ3PGCnyLdCCrPm1njY9L6mwCf1uwvAeLsU2e5LHjezHwkAMppUyAx9Ee71",
  "key1": "4PfM3jjTpKeqT2Wf4eRMUoHe3bwkeSB38SPGDKRAG1NBHL9Yhu1ebfxxyAygK2faZTq1Jo9695k65kifUmTJfF2M",
  "key2": "2iWSS3jbaEqHcTCebSn7YukUisYbJqbC7AqcGa1eBgx1Diwwss1y3bqtjPKidtjWo3UeEpbRZgsKKEsH597GumxT",
  "key3": "4xuegwAvStBtSBUx8QC9fYytH1Hi6W2mq5SuU5j1ETUU6xFKyfYVkfmusznsShbgg8SnnwDwXjjGwxBTjcxsrVW4",
  "key4": "4GMA9rnQEJPpTZfyfjUN4hdLVbmAs835tGEryF5BvVe353kxFF8uFZcuoUtWpbWhUtCBRBwy3fjE5HVvtHmNL147",
  "key5": "4eJpgpGpbCipWvXoWZoqH7oQfdVHfuoBVXNMx9DDm8NmMyCWKQst4dkN5hyBAnTEXDxo5wGxi4vQNiin2tWytgFW",
  "key6": "xMjZx1AVUEF8bwUisMFDUbVV88ALdNofN9uXFNBsqGTefZgiL7mWDkEkzVaCZTsUSDEeYqGESmLu6bYpG8g4uEq",
  "key7": "62DxLQCnJcc3Xe98wwfMXg1MCdEr1Em1C3u85oHxp9FBPRDFqV7M2Uxp4UgDU6oE1QHGC67n6wHmX2phaaUYQw8B",
  "key8": "4S769t12rRYZDDdc1RKbbbK6EDDZBCcuXWcYRLAxUeBv3qtvayUkwuS2JrR3mQPSZUqsrNAwrQG1qhFuBTp6THAR",
  "key9": "2sNB9LseLR8qKt6aWUJWQ9YZUqyMVCT25NX45orzmvNYnahUxpSxq4jGsvbgth1RManbchLq4wFwpydsdXPNhSgU",
  "key10": "5GZK1vZYuCabcJaEHDESy5ZKyhPMfSQ74deMdmEWJfBCww5BZdMuDzEhhfS9w53YEUMUcgwDGSu1myjeb6ahsGSR",
  "key11": "4GDCSHncwYYthZ19gLCsVtUmeRAZZYXXH6UZiFCna3GQABL5qvLvBgzF6YRQvb6ZfotdESb4vSAvYSE54WUioyHb",
  "key12": "5e9STi1PzP9mJFmLuAnuk8fzqjtxA873M8nwPzPwDfcbghPzmVRZdV8uWQAbQLD9GC78gFGzgkQ6JnnxzpdaWNii",
  "key13": "4u3ZQ1STJynxafkUSjtfZgEiCrQK97ZZu9eBN7Pfw1bfip7LHyJmWNprzyjdbGeF9gRwmPNaAfKcXqwMi1baAwc",
  "key14": "JuyoBFgma5LyRoKNumhqtDP8AtHsMjgypMB8QTDr7B1b4gpJCkUjp3zpWXJJYWZ2YHYrhnbgNmHVvjJncg8VFV8",
  "key15": "4DKKXoJDzyyrwAhdeASW8pqrJUkfDbBS7sYf3uokJUaHwLK6VSJAdMsn8faPYypKjyhdXzPreaCEztFd9zinZ5v7",
  "key16": "53fgw9SWSoE7nV5XitoffVVJySXqdvcCz15gPHWbc8MR2hcEHYUWiozKsWSXCotg5jxCqfByxd21nDjne3b7ntgQ",
  "key17": "5bC4aHDUzHfaoNpSRNxDYxk4wHUKaC9pZMAX3Dk5tK12hF4VAsGyaujydDPWQLBu7isWDHK9mMQzQJrGyiXHcshr",
  "key18": "5rSAsRUQ1qDvQzSpPXoTkXaCTjwyQG2fTsG1F9sNPHNh8aQEwfny8y2YHz6qGnFdCSShifENJizTvqapb3ffuZUR",
  "key19": "41M76GN2YCZWq26gxKxZfei3LqY7aHYwG8iBvxp25duog8XWrVsiXkmeFqEpXbnpiwgDNeZjkFunuNFZFXiBCC7R",
  "key20": "eoutT5VYUWg949Sej1w2kU8VD7tiDzAJzwjCJCnmJcaRnACsC2uoPsedzzuaBV1FJwnrfPjH1C1ZyNTaUwxJVhE",
  "key21": "3ckGKsgVM1xPb2W459g5h6QcyreAqqMod5unwvVhvumw2w7fMMiE76GuDcyXNv5DnmRxco619WadGZuKacQJQG2R",
  "key22": "3byqVvWFfdc11vvqDQEhe7P4dXnzVxDKsYx8x3A4VZNrUwqzx5MX6EKmS6gv4a77sMu5emRKK5hbq693WTGAcZ9h",
  "key23": "4WmygdyvuNQGPzfNYE7w8rnQuVUjr6CnRUSfRnSRQfJtnUhpuqj8V1h5CgkVv9fNBZNgtcGRCyPqknshPbZCkDZ3",
  "key24": "2imf2eJQZHyhDJuCpPGvkrRmZuyBxSrYi3cQ2P4JZEZ3SK11qgNjAbVuZ9pSaFn1W6YJN1xZGtidLYLuEnJxnjoy",
  "key25": "3eVXHHaxvCRy7AmxyDW6kfpPdQo7uu2QQb5c9rZzfMCbjXobuqHNV8gGaLLCLaFSP43WLsjdReT1tsLxyxoMMNbA"
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
