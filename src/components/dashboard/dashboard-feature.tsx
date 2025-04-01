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
    "5jyMCFvXyNgFQjxHyFLkb72TMFrFJVaZdJrqJvSU4rF5LSrktDEadpGhhQfoYkU1FsTdxaFV75Je2RLmaKUKa97z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dc912binP7Q1qMWTCwSNeuxaKGAqkqbVXZczm47KXbC5MxjEqtWdSM7gaPNwnrmLCzASSWEpsG9p57fpUStwP9y",
  "key1": "2oss6EzvjC9TfE7HeNZaV7Z5CBCzp1riW4MNSf7A4DdN8RpzyPQBL8fjv7a17pKg1qt8FsKNQe3cMxaFe3Z82UUe",
  "key2": "2nYnC4vvmSdSBDCA1xnak6Wqhk2HiEi4HnEzmWToGeSDGs4mHbsk1USCaMoD6ZfgpX2aHVvZm4o7d7XETvedEnim",
  "key3": "4fgQLhgsrWay7bHoNi1QGtFSMnRn96X7owVhCF7APQhUcuCWXBXoYiULdeqzCoSCiUwGgosj6paWKDuCHCmBpq6Z",
  "key4": "PQxRhazPmoT4sFEVeaoTKNjZtP2j9sgFR6M3FfNUVcNL9FxA8xDk2JagB5TM5cB7r9SrWG8uMGTAqmJjr4TquPm",
  "key5": "4gVSAY4S8WMrWrVoQ59gQEbUkKUgHSW5n5VfcQ3uJjBr42czTrU6e6zhxST4eUN6JWbwW7JibREdfrW6i1qVDZdM",
  "key6": "4bJPsAwkFYtZn4gy8hCd97XXT9QTns5aFEsp6e5Mzb1Sn5an637Pn7B7rXSJmz9s1toKPEacCYwem7J6AqYpfEbF",
  "key7": "4geL2WXmpYcrjA3t6HZZBFiyzeBqJYN8tWEKUtGEfrHgfmTJnP92poFPFC6Cw4yB7qcEUih4qPRhmQ5ZDpnUGSv1",
  "key8": "2AzxAiYhan27vGLTcmmK59AogFegRq3XAnnsirNYiVzNuQzuj4kvyN8e9EV4BmmeavJi6PE7U4xhdnrW4zDebeUb",
  "key9": "4jHD6nTr2CgmqRsE6kZfKRAzVhwyi69Yxrjo2FQzuQQH67ghPdHmDx1Yaumaqd2oGjJEB7WR5oAe6uC7ZeP9gttJ",
  "key10": "57wdHQHom6w4Zedu39G4MRvmUtfsXNzQEyYDPwGjzmqNCz5dA7K1xB88UityDVnYjyyqGwJ4MLCSd84pN7WkDmjJ",
  "key11": "2UVV7ea5n6U3xURp8KJuEgRj4hnrFsFHWmhRr4vS4uMqWwhW2i4VBXJRait833FRYi55oZdLnMLXujyAHsDjs9K2",
  "key12": "4BQ9SQyUtCXJiNoMuZH45zrUz1kMbfUSeCePQ6JpwZ3ZLBCu6erKJKfahF9L6UcZxBfkJMXJdf7Hyi1P3xeNEv3p",
  "key13": "65sXd3ajA4x1mYwQZdbsXndv66T6sJPQLJEKZKcLMXBHNLJjrvPyimoiuUN9Gb9RshPiByZCheGPqZeUFXMhsQ6S",
  "key14": "3tVjg9R39wtzxpYDuS6mqXcf7cxZ2LfPqvLdJ83ozdArmZf6YizMfnUBizvDh7yDNfBHKAudmqD1we6n3Chj17QM",
  "key15": "uTY9s6MTUFjnHzU8NmqgiYjkng2NbzxRdaAvynsTjUVNBqiD4iNwg5cUAwwWQNBpN4G7rDA9QjxyZzZMnee6Tpy",
  "key16": "3fQkWKdXJvSb8WAbnsEqtwCc1YLRu98oTcBwavjWJoxNNRSyPrvFY2NPmq9fdr5XfS7iBap4CWiJNQLkQGxNph3u",
  "key17": "3LB8c7biVgwbEm97QQoRS9koJ7ss1Lk1VraNUvnFRExuEFKFpJcJ2mq9EVVAppcUDWxahoBDBAmrYWtK2RZkky7H",
  "key18": "48dwUTDAcAK46LzGgMiQ5gGmAJs1i45H69Mx8HAuQbu1G2fYsajBd69xWwiqFTa5GqvTFpogGEgq7P6ZU7wtiMZf",
  "key19": "3CgXcw21ziUJT4U7PJjcRaucMafCbgppEoWDJA225ALrtGLiGZqJ8nbwg7RDpBwe8F13cni7HexGFHcx3Lynjsfe",
  "key20": "4LMoEZmsXXUUZqXpBAL1r6SpDFbVvTcPYdodP8xdHucVLrz8zHHBwmuczjskLxMoQHgBZ7qne12qDj5ZVBrkbjUS",
  "key21": "3YPzXRppfkVNTMETJeFTdnMzV9YsVdEx7Dj9uG4J9xqLhPnAgZFxh2a2yCqQpG56HE2PuEh7ZrTZJVbYmHAh9moG",
  "key22": "3K3ujrX2eKkRvdbDHm2mPnAbMoybKhJpEKUzV6EVSU2wyHrv2Cvu7Yshonvq21oAjMvDbuos4he3xNjAtKv4te7w",
  "key23": "4PX4jH7AJCkrwaBBqkXrDeYQH5JkZbUygDUXqgsE3FFU7evs4TG3MAzWJMkNp4fTwp9AS2ZMP3bSg5GLdawvzN4k",
  "key24": "2t1UY9qf3dW42J183745WBKqGrpA5ho9zqmXLn6pU8uZifKD9geQV7Ukx6AzhSCEJxwRFPQUaVnb1hYyoV3rU6pv",
  "key25": "3sr2EwXyVnF6VoaDGWME8VQAxjkihtnszWU6trrn7aP7KnqVWMpMxFsd2uvTzYaNxQTjrKTWAeMXkhcfBrtvm6Mi",
  "key26": "3MHDBAxTbXspEuSgN9QRzQuqMgJdk1tgCo8pZ8nwvpWtBfFiMbGMRzY2L7P1qD4fHh1FKubicDdCGZa5L4mC6L2B",
  "key27": "38NqGY4ar5GjBUSy3Jz6YjtuUuPRt2yr7LCGAABHTChKAsgV2fZD18CBSiSDJF4HkvGPmqsFH6JTKEuz9a2puVbr",
  "key28": "5F4KSgWFQ1vgfLoDsefzCPRHsB6yiWxieArQjkuZx9bj8Bzp4spWfs5BuLvZDPindXxGoBoLx8C9N2dgDyxVRmSa",
  "key29": "2bNgJF3kGLSLEUfCK5wb6sz7BBSdycbFcAiZm7pey9a11tDVRt1KPDRXvTv8yaYYGAPBJi6ysReUS9vYMo1Unjvx",
  "key30": "4UrymNsYzngva4uCsznvkMpvEveivXbQJW7FBWHdSLB7CnYPnf3rBRRKMNBiisiXh6kX7upkNkcJnsfQHnz8umz2",
  "key31": "3aFN3Ruogbm2XrYj26WiokUwpDc1bYvibMwRBUdji5HenHBVBMyGSzgcUiZZr6NgYjowH9NMMKKRS7HrLXD7un6e",
  "key32": "LqfBr4dr3VBJqpaS3kqUVrVa6fqoN2p3AuvYvZt4GT18yK8dYrsFmbBuJqjgpSsfY6VGbkTnL7gMDFjcLFkmW9s",
  "key33": "4kTJ2AiwVp5uqxSAVK6dujcwi6TMhAEuWqxNrYgweV7vchiqm2DHi9uoZe3rF66QVVfmd5abAbnRgRotfNpFsguf",
  "key34": "STP7Jp1Grf3qu5H8641xPoQXh8twgpEL9xpmGqBdL2sGWyQ4qB2JduXENraU2B5R231pudageizguYCYr8KxpyM",
  "key35": "5XdFGfqZipFPFiestViuEELsqqVp433ML79CsQofGBqSAnYNuyZnZ9Q6jG7Gv9nZR5eBp3MgSrNdSQFc2Gw3YEgD",
  "key36": "4G88draDXQeBpCqjKSgXkf7bSUMr27ieaXVVStrpDgjdSm2nPHtN2wDqKi7cQ2iPUWFQ6GYB46sFZzBRiW2zHQgz",
  "key37": "1JdrWKhFfa5oqxyD566tJrhNcTXBembreEVxGfY9Ae3w1v6ffDyxgTprd6GfDJ4FvFD8R8utmxCQuRuPtkJdTgj",
  "key38": "XDF4iyuTVhnDJ89rMRs1FDxsi3aEjupjEGhPPeuwewLREBLDCYvbuWvph4pV8CwX1WpgvRxvM2JKvEQg68adu4k",
  "key39": "4hsHDVJhTqtKhRnYEPHePGBL7R9cczxh1QPd2gkUFLs6bo6N2AiburnDP2Wvqt9UYqj8BnCMQkK7Rij5brEKwZQZ",
  "key40": "3YNT7YtPWyfengYrrGXJiPib8CvYnuf3q4dzBJhMn6fPZa3ezCSjkvBkHQL8ammY76g8dHwVPHnPFkUxxh3A7rtQ",
  "key41": "sKdGQ9EGJ1WMproRyquGepm2Ao9sdRNbwWaQhXoGFaHr2inc3jGdvPxewMbBQwgaLfkKof5A8XtrstTXawGQpr5",
  "key42": "3yEbiEZL1qNCX8KbqtRJcmrVW7a4zhDDcRj6vYx69egM9i3eUqNTzReaGVujfaEBw5cCmqGvDFK3LWQHTHsosncp"
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
