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
    "AkGG4aKZyAoB8QwDA9Eqr2oCFHebzpBsG7HG91ZPpfKrKkfVLVpRp8xkz4ExhtDUqRUcEbcha1W8pnmJqKkrU3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YDAx936A3RQvph6JL26raZAr5x7ZMYyna1kaCiT3Jcgg7smLxdhmgP5JjNcRnfxe5uJD9CcvNF1gfESrJ5cDQby",
  "key1": "57TzyWJjzrqcxJiiAhvfvTHCQQZseH6DL9kkK6phbLG28NPhUQQH7KYpirSBwztpogSJKKUoZyQNLx3ecgVPHBcp",
  "key2": "54B7Nm2kfd7sQgUpEvk8oZBafw7doFNsT9rzDCcmYUjQ4ByW7pEqSfNkikaT789FetxnHCPYXb29Hqv3T74iFAwa",
  "key3": "4yNQcVd5PmX5ZX64ZQoAtHT3axPdJC7e3AC32pvjVf3uUn1c72NQDEx7ACGPvU49dmCUuvmsPyGFLeAA9QFtteAp",
  "key4": "GeYuzBmdttwHWTtwLu2WuWn2Z1y4gNt7HCkCDzaWnjtSGDA37cBBQ7kTg5TaGkx36tKDTg5MaxLBs5VxEQmH5RX",
  "key5": "57Fk1U5aA8VRdLjuYe1QaZCSn6zd2QcDinKiWHniZpxPBNJaERwU6JN4scprk8zfSnvVMF8getUqNcEgrVPN4Sa2",
  "key6": "5qfGm3W4K2fmS4MhzBQvUnf68MoR6vj1mC5KGzX5hQWF9ukw6EbFFZPShzoNPChU1AL8nj3YRWKV4MkpJL7zFxRd",
  "key7": "3ysYeXxt7WdqyKH3LkDxWpce9RsyzwExVjsYgPe2hTVr5a2sfAu3YBvvUFdmbvoMAj1FsRN2sJPG8rJTD7gkBcXy",
  "key8": "4VyG4nCwCiM5WWzedwWjJ7r4JLrpUonqy25YLBbKoDPGCpeh1tftacW3ohArotBGJ37ZsBzSuzFzQDTsbd6xjg7x",
  "key9": "4bAy2C3ocb3jwcmnSkvpPKMFTh8dwJdgL7A9vm2zG5BVzMhbJ3uy3S94rpq2h8h3f9qdQa8fCNL5EoJezQL2HzAf",
  "key10": "3oiag8BfWXCn9m1KjFQjvYc5huxYpHQziMxgh2Vx55h9NFQEvWA5T7ursWEW1TDeXhybKgZ2tQAgzcQH6nEKKExn",
  "key11": "5by7TtWJ9xuMhkoAAshkuaFVZFm3KQHzGzGm61aFH78hSpzQMayt5jVGzWTEsbNrjT54WJ7eYasBDp7LzjCvyE9z",
  "key12": "3zhkAWQAw4DRroSYaTDkF21PZr8P5ehpM3LYh3145QY7xRWxbmi9VBzNPBv37kpr7bMWyGPyVzjeefsJfXQYuo18",
  "key13": "28VejLNhJWgotqePvWCi5aUnAAHpKZatZNHgcQPAAAxPBL9qFxY9hcdTmkrbFxpCFgA57LAGPUDhsScPHqu9MCTR",
  "key14": "3RjrjxdFaESNaTu1Fv1DammMLLyFm7GC91KfAet5JR5ZBdLpvy9qnaPJVAmoNevTwtDhtVfh7adNkREq66dGEvT8",
  "key15": "2QwCRFHaFAybdA21aXgbNAou4o6C6GS1mStJHHNHQfKscT3VDtgEbUCP6mhpYXBDLh4VtZ8efQtSMGJE715n2cAx",
  "key16": "5XcRiH5PijA4Gig7BwAJbZpBdLgXpp9LfJbfsssdqfxenEL3bgz7Q3x1qiTq4UmwfgfuQiDLfdqjsdZoa5FS2Aaq",
  "key17": "2UvKwCjwwZjKVDVirGPBgFRX6nW7psaNS7fCHaBMUiPxJK6xP89uQ7QZv78NLSbTeSdFevJmpCo6czTzVg3zZVh6",
  "key18": "916kiF4m6pUuCFivgbwBfaYJo57PnaB6XQNV7Ln8rDSgHREb6PWmcZK7kj62kMsmAtRhEUAdXFgXGpG7YBqPoBk",
  "key19": "35sL44jAvTaBoJcpV5DKK6kvP5Ny6LyQ5ciY9xarEtobr7jAX9arpckysa8jLxvWboswpREj8gd7n1JEBQBSHw1m",
  "key20": "4ZdhjSKm665RK69Br6DMQrqK22bRcAMZCAkuRvJdY4kzXaJuDbHRLQaovZU3rZTBXvGjiLK5PkKDsJUhfNKVvDCY",
  "key21": "4GHJnsEZrsfDXNZNwMxbPWXcUUs4sk7PmBE18Bdw3MHXWhStZHnBGpGpTGYeYJPb7y8bXah7paxjanjiLarH2YsK",
  "key22": "5Jkqpqg6yX1ZjTFSb7kq4xatFT2CEoJ6FsLXSBSBJgDwqir6Pp9TRtVg3f2n72cEGptKYerWXHS2LzZCBn5PgEn1",
  "key23": "2KBZqvGW1vPrkaMHm5vv9FfNred1jk2jeF5ZVBJzk3oRpjLZpddY6LfZjURSVpDbPM9GPoUXyFtnF5fBQaUA2DBP",
  "key24": "QFCheP1xB7p2uvMPVhdbA75sdnRP46BeYkL2UrjHiahRpxc567BxtZv1eS9tTAQce6PydeHYbscq4Goe114JnAR",
  "key25": "655hkNDYyG9bD2QcYQcmMaaqBBN1hVGs2KiBbkRSMgkWfFjdF5st8QrE6EuAno65PD22LLSmHubnWBpvGGU87HmX",
  "key26": "4xjRn8rVCNBfdjvT8qj5VWGUiWMpmUHnaengPvTHJZXPRWvP1RYqaDiAgN7dF4Lz3pHF2YabEjP9bPFnf8yDMJQV",
  "key27": "7Sn8tHUPLUDXEwuQzr9ARgYq4uFmpc1pdawgtJnTCFBYEdRsCFpB6buUbBh4dEvMeu4ogmXbg2QJ8u8Mq83QjhH",
  "key28": "2wk2dViFjRs1Dzrk9ggLzGTrywHUKrpAZ1i2EX9Wf1Yxi3dUnpzgNaDanz6yxfKDnUsSLUK8GdBbdDyUEkcwstBN"
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
