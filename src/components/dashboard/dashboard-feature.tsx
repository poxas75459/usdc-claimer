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
    "4T5f9UA1v6hxMu7wMAoV2TuXcisDur38LSZK9YXToFuqGwx24fNGRWJQZoFzMbuZppStqJTRwBo7bk7uodkWVVTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42sMWUUPcS6krXjYFoPA74P79FwCA8LB5TWRSkEpoFUtF9xoJkZtUVxWH3aJjzbi5d7Ne3GMRRJzQw6QoaCMycXk",
  "key1": "26D8M2u38cjRJjMYRL1jPqhfCHg8RANSKFDybQsY5wKRxnRK7zLxL9xrm7KTZsBS7eTk7aCH6wK6ctBx5yGCetr2",
  "key2": "4gxJpTysjSy32WivxJzqch9tCc3up61RUyuEyq6aN61vhC2woS8tYkwc2fwtC3WE56DKKHkWjbSUsZfLbLGcjbmD",
  "key3": "5tafD361zbxcx2Ag31u8yjFzavvjJpRT8mmewDEjC4BJ94W8nmkN9jQi4BccfLLJA7jx9ebynjPrghc5dPoGJHgg",
  "key4": "uHBH5T1PhPmvXQqLiTMeGaNJbv7YypEPJ85vYwn9Y8d6GdRSgedU8ZLbgpgtYtrcMeQThTDz2TKvjRVFsjUQ5Jr",
  "key5": "3eSXBzHMvwjb2tbnDcCnH2LFQ2TkXdoTRcnn9wxp8VZdaFoBvUbawjKwtNAyhP1i43cA6SJ8bbQRu8oznkqoFLVn",
  "key6": "2yMsPAPpyNSnTA2ujRvPKrNbYL1pstHNC48xWpX8PXMdkVg4nFchjq8a3sg9o7gSQvtd2SN5YgpinL6WHLncAgyV",
  "key7": "4rpYoqDAA3xZXtUa1Ag5CGVYm9DUHtApe3q4XmCTXXwvvfSoF43CAzajBzxxY3V68h9XWa3VqSDjRTYkRinmkCfe",
  "key8": "4trymAwCF8Bv8Lkd8hJ2jRcmdB1zZmQTmbarF3A24LggLCyqfyyLEpF6m9sbqg8EaxfyarxheqrzDz139P88N97J",
  "key9": "5Jb7Mu89d9vNosDL4jpSVUA6QvEC6f991XsBcmXX7YYvQ7QredJRK7Awcb9U4ufDz2XpZZ4Vd2abGdZ8NjoT6k2W",
  "key10": "3eGFbXr3aBCT2mGDLET75j7FB7p5xgcRaWeHJAVotYMGmrjNtH5uE1hvfij549bE3y1zrRa7tyZQQspVkt8Eofjf",
  "key11": "3aMGMURoL8shRo4VPkDrqFNxEGh283KkKqPFyySAXKBS3aTnJrzAqeBsDCKXTLMiBpynuDJgPMsFBj1rsawEMN1A",
  "key12": "2Qk1tAQy3bSDZcJSL9jEqumme3QbofNANCkUm1dNVog7AkFj8rKvo1AY1qtnfVENbkSCqZoMZG2TiDPeRjrnvTHL",
  "key13": "2BKeGY89cEBVo5vsdVL1rWada633hnqnfpETWYvjuehG9teC9Z8HeVS9b7D5u31CnRgXdtSXnC3eTjDgCdt5jg5U",
  "key14": "3mjUkkNs1RmUNTwYqbgv8ryMDQestMYiGRMBdbKqoLsDB8pHxfGV86XyHC5dKdRh86tZWq5YsAnvrB8ZJuRbDUyq",
  "key15": "qGc3v2QbSoWx1mTWEQEa5g8xJMNgrDvxW9xgD7yLNAFZ6YZuTajXja6cL3AJhxFQkP3Yn9MAg3Bh1QoeRYKXBtM",
  "key16": "3hbSd1WSGos5S1V7K9DzyrjhcgFTjRkAdFxp5JzHx4y6UPyHR5AbrWA6CpyPsT3uAgB4Z2CqyGmr8nHjiwbg1zKf",
  "key17": "4rJLHbYZJF54HqLBvrSVttqrEpAPpfsnCL8KUodUvMnpEHXjFQZHsydkCMt5mvjgeyDNwWpidFZZjWbN7UQpYQnC",
  "key18": "5kc4P9zTxYaePwnwMH1wbpPChFGmBkFcce41PzmCC3y8YDAKYC51dWafNFeEckS2cHATHPhwqp3GvNuAFsQj5KPA",
  "key19": "3nx4fxhfg58q2KBjzbWcHks8GLbh5WZqJ5YxvPyHXCVP8n8j6aeUqTNnwLaiTHZFN2WLStnjsxMRJfM9ShJhfTdo",
  "key20": "5s6zZ3smsshg4eEn4fsUPyNrd3mPRzNeBnMECxVUTjcUaK68LX5d9jMkLnS8BVzRZtsHTkwavPFDi2svpWBvFY5P",
  "key21": "2sTPCngWettVX4B52KP2GfJjGAWCtJtjSmhPYS3nN4S97p5fxZMEu4tn3YLzsPzpHk6hzMSkgYEpudTBkEqHqJrS",
  "key22": "5hb9JQ3y6ak5VJZhR52yR7R6Pe6V1ypQuByadq9VHzwcdaRGV8YUGtkVc8YcZ4PcPno2e1wteJhY4qSpbNe2iA7z",
  "key23": "4WvgV3eNLdtdNa6rwSUfRNPRYJGPfA2cZMfRA3gkEp34Nd9XoRooBzot9n6VWUCX164uh1PUoMa6rdQJDwMSCvWi",
  "key24": "5EYen1tWKqCtor5uTktxdgQ2gHAQM8Ck5h4NrMB5ANASvJY8t4E474wYnAZVgf6EPbyXgs5127AMGytMw1jF6Fjw",
  "key25": "425jfnArTaN473JtdLt7hFBwJZ6UEukN1K6bARBgNB6En6Yaynx4godYzK1bZMAfrFNWHkDkqwcv8pvXw4nHbgJF",
  "key26": "QKkk2jPJ7LZdpTej8WsERg5EpWe5188CSfVDnZAG5E35wAAwCF3rVw6MZBAEedM14RCYtZA3cFQLHpBfg7cGrx3",
  "key27": "zjJyen92iMerWeUnztRipCTaJnkThdGgiZfMxeJiXaNhisjVjRWFadse9dJ6bgvnSPo767NvEhdqSD2T1EDQVaS",
  "key28": "3oF3KNZ2NpPA4DBqQzNBWVNp8WPG1AJSBH2HskokKAyp3ZRo6A92714rKZYkY9hJHkcuKVjnLTzQi2Z6CVc6LAVh"
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
