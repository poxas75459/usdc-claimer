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
    "B9Sr5RSFGenYJVB6LWrVFUxZHYqpWYndDGvQq6pJWs9fkqPaG6QtRFFmZxBTiKvK4RmQpiobvNKY1NMjoSjMM3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "91CkJq9p8gSaXynaQeXhd4CcVGWUZuJ62W48YpH8oKJSFnBpj4YUtAYxtE2PQSQFHNRfYyxVz2r6KGb6kX7RHkT",
  "key1": "pkg9kRYCJWXRM21172EKqD2KTCbx3YUX5uTu41tWZ9kaXkErUwCp1TiyyEKQ35tueToGbBrpPLC9ZTutGJN8514",
  "key2": "5vSJgD2vPMPeN3Ps4JT1LL465Mnjsf9R92fKJCPVhs5H1Na2aV5MgzAhpx5tadcyWEzgzgdGQr4vM8nZRaRdNtZk",
  "key3": "21UBbaLNTxMN2ttawRB35eNHjNSqaAYMA7r7R5ctCwhyLszepj6FWa7W3XnBsYSpucN3cmTrMHwcUPd6HcQiZB19",
  "key4": "2458CiqodCGYjHPT6ayVmFWwhNN6NBdmFSBbLMjq9XLKJLRLnQ1NcDUqN6tmMwScLJk4iVNZWywsdkAkeNtxvr3c",
  "key5": "39pjy3kxTWmLhfEFygMQt6e5jqTtH9wG9CNTPi3TXfRUCBDfqFozhwbwngXdf97sfz5epF2fMukdBd8x7HFxUPJb",
  "key6": "59QS8rhihuYaPfas3Y7YWnEPmE32DD41tuJXC2YfGThfVd6zxtEGYUCyvNzrieHWt5vP5QZfugXVeKie9wuSqwZT",
  "key7": "4uGZLkmKbv9cXpKFD1u6MxmU4tcFJQXuMHdC9cdNCZvLzswhXGuixT2KfgDLeiGN8vKrSJ1KRL6LqqjFncKyAGom",
  "key8": "3B5Fz8UQqxjPLg6jBHRjA54rRoHdHpymsrrSCCuMoty8oAwi693vV35LWsgdoiPfRrmNDiSPbmnRojiubwEZTBxC",
  "key9": "5oLWqoefyAJbXqs23oV1QkMFXpcUTyPsS2fwuYGbvQK2a3ReMgZAJ8RZfqmCMcvT24AG21zG88XVma6uCqcsvQ8D",
  "key10": "2qrYTSC8Xh1bBL8g4in4GuugXQicvr5gZsfzbcmFo5ea6EXMdmhQTVWokU9uAxq2QEfyFLFGozT1yVJvAD1MM89s",
  "key11": "42xais931JSxaZYLFNvMkKGT5ZGpNUyQHKw5hYZLimZAaJaNJSTM15iQwx6vrkW33aR9P8KSnMPzaReTPva4uAHF",
  "key12": "vw8u5Sss4c2b4UzXgMjsYWscbz4SpiXe3SmYmi7fSQ1ni2nBAQhVwTGZRyDtunCtYJk4yvLowXXyXP1oihYX9Xq",
  "key13": "5pUuYZkaiKJ9mKSYLqj2vWb4j6TZ3mwC9J1wUEUBfmA8h9MVUo1uBonr1zxBToHeoBWFvuMwUdN2U3oUTXGpgPAT",
  "key14": "2Rtpc9jWhS1tU7e8PRyQxyPVqw1iN5V1fQcgfe8tx7GCsTGUjMghmDje1k4dzNa9SG1wXPjcXVn5neqZzsCtGHJ3",
  "key15": "GE19LsEtWw4myFyqqCBkEXenFfoaDBB5DKaCRF6ueEg7ruqBA6yXxxg9eXgFkLTMhzjQiDm1tT3cKqMxXF7i7kh",
  "key16": "38v54nX2kdAZJBk5nSgwtuL7oGEETyGUqyXDPQsGpN54reUWrCxyqRH1231oaHX36tvsQxXafQoRfe8bhWdnywGj",
  "key17": "3vrVm4gEBHJ7iU63ufPGw3PtgcaTxjRGpjy9j5VLHpKaazTJS8PqrR1eHMNjMGji7mNREVvjDYJfzcHZCugp496E",
  "key18": "5k8k171kFsoyEAWSW2HafbKPurPjbjwD5hSKj4y3o4FTaXtnmLqCQDQ8HQkT3Us3JmDiWMfuNHTYJMv82RbCETZH",
  "key19": "2yc5ykmEzukoCUSEavkMT4yXT9vW34g2CmprXWdwzCUVmtESbT8q7Z6ufqbvhqctMzLsMg7F1ozHwNvBxSGMQMPh",
  "key20": "2x5n2dRRCtM9jGT6GerK3qnoqYCNcT4hQECtsD5ycNTyiozhEqDaYNB3FU8VFhXQ2Aje6QbmqV7LPiTvpK7sf122",
  "key21": "4LxdTneFFSKVtE68NEYzbBJKP9QS3wFY9b6NmJ1dF97WpvvLUCe2rwbbgxUEMoEnfeMGxtymL3NsivN13wGasQWi",
  "key22": "3N6Ksb5TnTcbXC2F5U5LjyKvKFmP4d4yAdjqLnJx3R94ophhDZZWb5n5RSyaghhg2CMTg2m5eCQXASFo1MxU8XAF",
  "key23": "4LTxX3JAgp9jFZHV1ULi9XrQJCZbENRJNVFs2cEyRxDwt2SVYCgTE95zL9ceNXWLSsQsK3cZu5VwskVrjEqYkwZM",
  "key24": "3aPFpqomMYjCPuYTmkfKiTVRc3BSFwW4XCMvPchVpnupDyHFmvK2iznWWWN9rRhH3epL42nXXbxFAMmpdWKeD5k2",
  "key25": "5DMfqqkR4zvAMwYTt2kKimYL2gsoSkmyk23YXKumV7G79GmEnkxKxBjZ9e71cFh792Bg5d1QybCze6te869Ppe8s",
  "key26": "5qVR5Hhf9Hw7CBYgwpCSjTLGKqKf8HhycsEb6fHLBP5JdV3GTzzD7xGyHnaueJVUWdHdfPRJGZSQuTPHnJFfmyeN",
  "key27": "31hiEsM9suPAQwcFxtz35dZi2QXVbPgn8zF1HGcHg6bJWixS87PmiEwRW68uLWU5jNcHND8QSv7Js8nXmavyxsaM",
  "key28": "3oSotqBDDSCSYsrqAq6iBQ2KSFBcERuASRJiEQ2nbLVGVTQQud881CJ9Vw8rFLoS9ooFZCQmD4HCmcYDACtu4cgc",
  "key29": "3Mkq59gomPLNTpYEh5HkfkLX31eVhzjjYdzaNQkQUxjbLuofBkdGkostSiLkGi13dPrV4rbvmiLC1RKpELqR6Chi",
  "key30": "5AjzNGy5kF4gTahsi1nYDMb8HBempYyXf3X78H9ZFxJJZxYj4JoXxAo4swrzUEVVNXrjEbMgt3WYNutnKkixi9hi",
  "key31": "3BzreL1axFQZPTMup1quUAoZCo4mPF6jCKY9dfuiZ8tnRpXBqPd7251269zZYvPfkpijh3Zfr2yhCWkRyrzshngr",
  "key32": "Fc3YzVxcW1v2r2DkNcJXm5oCvN8UEEkYXnhhYZfXdA7sZ2uJhvRKY4MKMFesgbW1tbyJZqf5VxKn17cgqNsgPW3"
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
