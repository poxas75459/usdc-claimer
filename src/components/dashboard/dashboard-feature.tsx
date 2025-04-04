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
    "2zGacvhaMcwvBoNfNVPEHxrCKijM9GUC2zyy8aJwL2Q5rkf72GVGA1DGoPawiby7P95B33okYMjL59bwU8jxXRdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nJXWRVHy14KHiBw7WN1rKBfQAyXZQ1qvcEtoCRPojszwN8XGnmy7ce8HM3hGuvvvs4mRrNCSrDypUoF7KUMh6QD",
  "key1": "4DagvSfYDdKuY9XvUruPixcziVdg8PCrQCnDxFw43KCgv7bZ7xu7JYokxzA4FTQpVWSQNmxFCxmoUBtGdhPBbnZg",
  "key2": "2HCcbYDYGWZBRHRnPcFV2JbFEeqwmU712xdJpFKkC5jWTE7AcX9dGeEBZisGNAVZrLCUvEwA8Ttah3amE7wJHacf",
  "key3": "4WKmn9KRn5QPxcKHtjx4cdihPAjq8CW6TJff6v5ZEMbL8Xxir57zcBQbizTXejAeygPTvshmSCCpd8FcZqMvUs4E",
  "key4": "4uPEhnnmP3LuuiyB6pf6CAFcDuTbrzVRNGQrsqHfi7WDpFC9EwZJWpuxS9DDwSa2yhAtttZgDu2t3mGPh5muEFYt",
  "key5": "3SLaEwtobU7pMe1qnyTLbxPzhrrcskLwg7QqvzP41mxaEUmzZcpDMB382CQ7FicGoeyT6yhGpbTz4kEghx5eZ6qi",
  "key6": "4q2SQQg8g8oAQXFJoFpdkmnuMLRw7EfuhodHujxjbCH8pcP6WvUG17whRZswkz4Ng86ZinJqrPx434PwLYyV8tKd",
  "key7": "3E2113UFVTaqmTC2oj1DG59TPUER4rhEJVqKd1w96FKE3DQW1Toe67URu5G9FYSrZY9rd2iDibwiLRpzfw9gLsFH",
  "key8": "2oHu1gecPdtxJDSJoQGLSfjoSce4FgVpHFpVsrWjYoEoeJTxqsZkKGqBVJH7HXM2ZcAkz43yZJCS57TLhSK8QkEG",
  "key9": "51fu49WtCDmzWy6PsgHsfEFKcjAQHBXjg9gNktMYWgctNFGtAEWgxBtwXcWLPaDPpRTbxAFUWDAyLpi3GCjkopEo",
  "key10": "2heK9g4eU4LhHJ3LR52y2Ya6UsTZ8bp9sc7u9pvPLv3231SpBVmxJqpJPA25B57BcfGxEafy6XYU6xLVSvUwDEjj",
  "key11": "4iYyW5ftdkpsGyW2ub4ouXRyTM9VTrsKJixmkZeXVXaxKZpwsZpCLw3Tci4emHKdN9TEMENt3hNLnA566sYmwkGB",
  "key12": "5tTahJPtNmSa45Umv5fmFxhdJzyQjXJXPnKPjJ2e978CsTwW99PvKgnMFtGzgJpAo4NVgzhTBf3VebVkywZFwLm4",
  "key13": "3FfgTbVVLfRtfdxZ7GCxGRB4xFHMUXw5Ew5CAzZVHpWo5ZJ1jWyyMXZJ3e9Y7TP3yNbUbkKevBmyg9mWqPmLW6y9",
  "key14": "2dAc4FFsH6XbBBcgK8dNdWtqVjFpzWG2ymX4hSqoTS3WRbq6RsssCrdY7ynvWaMpBGPXBc1bFkL6KLN9myLrKTM1",
  "key15": "5EXJY5EHNiScGu69SQ5W2pDFrkM5w13jz6ev1m9wuTu1jqJHQYnQ1Qu7jQiBXGdA7ME26eoYLJb8ZXpjtV5XQgXJ",
  "key16": "4eUqhpXZZGZR1ZzLeF7bXpquaYp4XLipogzibZHvTz8HgvfcUE3B2zzVyJMPXqBMzYnDcxnRsFuqvW5oLFbBWqmf",
  "key17": "4LCfjvZfNfqr3J5Q1HLeA6yanLgGvu7ejgZ9pWo6L3E8uVW5JnJduKNQRKzqx5mpps31pLuU37epGDd15ZwPSkRK",
  "key18": "51YXXsp3dBZAguZ8y41xSMgbyob4dWjWjhRYShpujN562JtrWXavePNwU1UwMP8mNgCXczahkAo4MoPyTjDvj6Vk",
  "key19": "5gmz5zmvGvFcxgvASHoegGDAacewq26xW9xea2bEJiztk8hiSJbe8JLaYDN93EfsGvkvVxH7Eb1n93thCCmTNqoS",
  "key20": "5WiMUvpCMtwwhd63VoVDnegrbAPG19SMstJD9HjEUdYVJed7triBFCquQaoRCUVGqoSMZz8orp3Yg3dyttrGdFmg",
  "key21": "5yMkL3Sq8MMXzi4JMjsfvcG5nDBHW8WEUPiGaT3if93eQ7ZMhitDaWttAug8ZYPHjsJvpRJ6BLPAwM5r3UwLjUDB",
  "key22": "5xgomqTGPpQZS1KikXKTejdZd5r6VE9JDVn1TGfagR5j8oGKCQVKWb4EXQ3ptYNhBShSRWKLm2v8YNLxRpySuvXv",
  "key23": "4WAMkvLff538CeywYoSfTAB2BR5J6n43ik5yx4nRpkW1WNv6zST4eR3rWz5nuofNEDCuqJHFcXDz8HmcsTQqJDu3",
  "key24": "42pNn2n35PN6LN9XfuMBTk6JDJRfVj6n5xwEVutL99HwbnEhnzS8U4g3wuXMJbGcxqnGJragt2nkobHYAq4XSc8Q",
  "key25": "5exnZJLCDkUukNDucZtvwqyuyk3kWa9zEfrbWSL1MvGjAR84H5ArN2tUsphBo65xKBhwVXLptSSeDQGTCcxx1X8f",
  "key26": "f8Awj1mgU9JJLWDDf9x1ppiQZoWYc6KrVj62k48UDYMRkApf1BtM8rubkkjcMyNjFcwQp4TDPo29QfWPDJKdx24",
  "key27": "NaonDNrhsw5Saq1n7oYU9nkStwezwpBPSkHhoxmDKokxc2vg1AHVxJp3vBaLk6HRYYw6o6mNfhyZBcHfpEbPFkM",
  "key28": "2MEi3XvTRZZcdGpvcANCkTA38UVjGgRGtzMbNSREoqCtBC4eFCLQJStmUMdEmgygAv81p1VfrcaECqYvRPEJiEwK",
  "key29": "2KNg5RmTmnSw7ERHeGGYCPGZW9nRhj4XGw2xZcAo4sQRM12Qk23SApn2K6Jacc6mfZg3BXPyi4JGtwddmgc8zNtE",
  "key30": "4xadMnfVMJe1Zr64BphduNQCVrBGpSdWDGqMafHsHnLSic4BCBiuErFQTmcrSjbgPKgrTTqTT6tz6L88qi3L1wH4",
  "key31": "4i1wKJ232CdnBLGi8vLCVCyUGx6Gc8qNxUASE7W1YzJk99EDfscfRCDe2AQCFHnMs9qYWkrLcSwLmf9u6RTSGixD"
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
