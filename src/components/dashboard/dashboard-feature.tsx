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
    "27LJnePrESHCMWsfNPJ1XkadAtxPJABw1qEeA1ZVZve7RvANsNsRSnm2myzdLoSek8w9nVixENAC37e5tSok7NAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ecrUcr6F6uPVFz3F7onxmQLZzx2iHqPEsJKEQv8wGwxkYYGoUfzrrv9LMJi5Tvbpc8dw8zqHsGKB9pTscYuKBQ",
  "key1": "3DER3UrBrdTJpbgGUy3sF4FED3EaZ4BBscq53282rJf3oMf54kYmefYhM3hDny2VQoUnXRwrUyYqpfQc7e3vRrec",
  "key2": "3DesUtWpAC6yRyoeMb9skCvfm7bEHFCE9ssbbgixxv3PvVfVexxDt9gouGrudAGc9sC7qKrxXVE7QcCgYrUevFTL",
  "key3": "3CkUjD6ZsJ9bX9wFjnMQJknRqb1JNcZXsqKmFNskDp2Hr1rmVxmACFuvz9ARr8ctp7CELQPaVnX3Fouf6ivQKrPN",
  "key4": "4LaM21YxrSoNCeEyCtezXpQK7RytuK8k3jQniAsqE1PxVxZAXoe4kxhA5TwXieSNdiGpjecAYsfkCcP7AqiHoCmo",
  "key5": "2CpicE1Grr8j3TRVmES3WU5PignkBLxkdBeGucsNbqkVhtQyp85rSnqzd93yyMpd6fUfJAp8iaQEGSyLBAsrmNUX",
  "key6": "wudMyrf6kjxJEJpfTAom7LPDqd17c4TwKHgsLphYXoQwmeqcU4wChFfe5wuW49qLC6KujxojDAWmcScu89TrBZw",
  "key7": "62FR8KW65Cq2Z4oRrSh7F29TifoFNemZtE9oF8JhSgCZhPTwYuJ5G3uGyp7hj6zSbybCRD7hPgSk8ja9KTc6utrB",
  "key8": "2YT3TVu7gogXsjV782BH3QV4pqMdD6DEZht5VpTgbroZTNNULhMWhDzR8YnGaQKXkTEkQoXVH3ZF7HqcZZZaogQj",
  "key9": "3vDztnESPWSBeYTpetDgkc9Vqqdb9Jp5vtc67gqX39E9N229UwDfjDAAXKxpGU9wxMWQSKgd8C3s3CthUgYnwGAn",
  "key10": "2Nxyo7wPmZof8iYvXyCAa7EqckxrGR6m1fi9PzU9ZHRyh5QmnfDHJLE4Dh1kapEQPmeNiG25qkTCZYEM2PXE19wL",
  "key11": "5yP9SBSQj3iC1yu2Ftq1msqSqtmiV8bCXWuCnqcmpLp2onsfZDwVHzpqUqoKhZFQSBzh32TFMVuKV7rju9gCA81F",
  "key12": "5XG485KaHx8jMSJUywTg9zhXhV1QvcHRfv4uz73S1yCWKbcjWH2eYyvCuFsbc28t4J9fiRaLhf1wwDLdxGb5bpNx",
  "key13": "3z4Wajmjykp8JSVHWQdwSSHompY9X3YWd9zk2d2fW7RSDTWLmxqmiaxPwZ4a9SZ5uaB4MnTCYNZde46gf3Ny4hNK",
  "key14": "4q3bjVhpsf8Q8iZnXYhyREuPrSPMepvci9Q4aMU37KedqJ66Vbq5ebjwtKCpw67rboSDekrRugnkfSMrooKcEz5Q",
  "key15": "3Hrd6N3RFBiZQZw5zVmTxCNAVsEdKrKpoaiUR51mTjnBnUZw9gcXp11HWFG1UP1NpCa2nuxYhfHh8pxqu4a2nrt",
  "key16": "3xTbArX7zmLxpx4ipcTD3QzXxW3fXSi2nkyCoRPcbiiKAQ5Wsk5hzuDb9CQHc4wyDxMQZvFFNwnwhZbD176avB9o",
  "key17": "4od8StsDxXDSecsHr4zbc4pNqPPET9GoAA7eTMzgxT47hRGSnKTz1oGQY5kquVk6GDfGTs3cKnySbPmNZGzmq2rz",
  "key18": "2ZKCEC2KzYZuXhBHiNR3UeEx3wx5nEdBqyweYjgyhgiM1G9Etjg7mH7vEeaBPiQ68aqv9t8fSxFdu6T2GvMaBUnU",
  "key19": "4jeu3wEzfDzEXx2VaXfcKT2J9Sq8Nc2NCDjL6GpBohrzjC1zuRHa1o7LgXqFibdYST3isRgyFj3kuXaP42xSR2Pi",
  "key20": "jWj9C4toWZwC6A1fFoCMjd2aETFLg45iYM2C38LwYr6eqUNk7kMfRwJCzvY5m3frh3zYqnfVQHP6N7oLSSAuTom",
  "key21": "48t82anp5VKFTHN2NJgZTktSKJEvPAYne357XhrQ7XxuH3awLCzXhtkrFuVYk5FzmpcVcbxLPEyTXqy37BYR6MiQ",
  "key22": "4FxDWQ48j7jnGcc8JjJCgY3u1AMHzGadj6poGQt5e4WdXbfzQ1KB3JUgQLxwr24VanYghLEXQGJr29UXKonWT4e",
  "key23": "2UADdmL5tfkiVeNmSaKSn3b69vcgZWj75BN8RfSnddsjz4C668Pku6KeCZdBSDrpo3B3GA2nYqRTbx12HUFsYesj",
  "key24": "2FkxAqzuaXxm49NZCmSLULCNgzRaUL4wZsxoG2s5SRFtRrhNSmjH4XmirmgLvLxTtccaCgd8TewuXsNTPYA1Gzc5",
  "key25": "2bsTBWHV1pgcb6jeDBUFxGGvV9TSxhQ5XbVgukerXEddpnRbpJZbuFPLirQ4xeFa7biyGR2skbPLNM1x3JmrKhtj",
  "key26": "3YDRdahecSjU6aYZXy3sYCtNcaLgbYkse8x9ML58pC1z9wnyi8NPyFVYf9WK4kZcDbetjLf6BSfCfmWsowRyBxc4",
  "key27": "4NwzPK94oVVDFaMPbfbVSqWSVxmyQrogio81NrDtiCtVYHTp1cnAvxd2dREczqX11jVUXRQHkk7c9FZNbdwKkrnC",
  "key28": "4RC1JhszMGASGmbU8F5EcpWq8NGW6Lb5Q9f3tjcW5VFSeVRXPJNb28hyqKQr5t7oa4xj4coawixHLcAkfKbqJhcj",
  "key29": "2sNgnEeCVquvVeeCeWmMx9as39LjbNBGc1FbQ6ptNSs7Hb9MWb9WhoMBTttPb2GY92t4pD8HzV7Kfrq4EHozYAsi",
  "key30": "5YXX9s7FEALhMZzogcSZznRjYaJFB3srbGLH3M2siqtoiRWWMkzKZtbVZf2UUNBrsV5hkkbR5QuBHNp9721tAk7k",
  "key31": "3Z6qDzqdMGKVY7WRYFerzYhKzVWSw55zwxjKsYeVV5DzaLwYWYbbPWN5hjMaFqhpnMhYfnMhDPXfy63vE5zveW59",
  "key32": "4j8qqykjkGeWcfhwm7SPnoThUyixYv6yoaf4SWbkKNoGveroxkgodnS8UnhuBy6dsBysJMf1QvQ3eZXeBc6omcMX",
  "key33": "5S5Q31NxR3uELCMZWw3YwbLDu5azx2W9hjkwUKiyK5mxxgEA31BwB5kSQz1JD189EotGjquCnEA8oXNgkBKckK8j"
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
