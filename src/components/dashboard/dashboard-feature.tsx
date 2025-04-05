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
    "5AsJFdtMuZFzZyAJVwnnBRFLhQhDdr9QDXwAxCmhCwxBrCrjKD8BuA6xDTXRnVyFCKTs33ZiojbaYrqECuhjccsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KLS2MM1PH1BkjjjNc3VcsP4DkWq4zopaCKWuoPfR7VB3DZZxKbzcHnnbmXSmjzCpVeXNFeanrgS5ppVLpbCiVxZ",
  "key1": "4bfk4h4hYbZXc8VrJA6NnZogh4B1k8EZRSz5qgMBXMVsjemqjP14diJPFcqTM6qBYhV3QeLq7vdsSYcsV6DFRwmY",
  "key2": "2tDL51Mg9zvo2Czjf35YtCjM53EPRsQLVM2dmVvSq2152EXmYoz9Fae4DEbQNDrszxKPVZ7KMirPPmnzuPyKJmkM",
  "key3": "4cmCfrAG1RRxXM2w73pggkuuHiDZBDKUz9WD9JZznerbr7PJ5aFwjFgKH3ErRVgUjA5NZWhpkWWwF5w6ZfqvuCtC",
  "key4": "yaP8JSp4XbUULGnY3XKrELBKtbF47QqtM4g5BuApMWsxry71cEJk2qZUMJPRt6ecfLZaPNTPx93Qzx2gsMCitzD",
  "key5": "29TSG2DSAGE37LZ7Shz4pohJdm1Ls1wVy2n9fJwDphbc2nKivZ4RWUNCrpEz6DHvoLfh9AKDrvDXEv31ZXbuLXDN",
  "key6": "vQfojDu8mciGkiE6h72T7F6uRqUeuBZNrpFbYsypqsL2M6Zqef6ArWRJh1MbafR8ui3QpEMSVQzHW34smvjp4nj",
  "key7": "2Y1oiJAPHEfVApb2QhNkeoZucxrKV5XJtGH2mPpixztQUjbat3LT9rLdrf6uN3THFVsrGpBzTaQtGoGcBKbzCumd",
  "key8": "3SmTzabUft5sNGy8KCT8wqmq4Ms7hg5rxpkTraJMK1U53e9Hs5VrfwNfG7vcjAfKQYTu1SCjHSrsjZVQabSBEbza",
  "key9": "38st6zpepHcSGL76kWT5QhH6ajqxtQMAdQ3oeWhUKkMyQR1BHqvCWXX2qcsjzZ63WkpUU7CRfenkoWMbdEYSyGBb",
  "key10": "8fVxLfgTBcf8yWssm1JHvLrvxFxd8j92HwNuvWNw7ukYkfXv8DvpFMMNKQuojXgdF6EHJKeAh1wQZVGHz4dS7wQ",
  "key11": "XHmGxvYSk2EJT6j1tpkEWDHD5SyaxkcMmQdGyxZtM24DqKw3ZQocxFHNkZFpXCbpE6icaSwNENycxffVfUKNzqb",
  "key12": "65QxwrzUyCYRmcujhdvzNUq3C9gRP3sxgoUMsNZKmZfxysDDaZVScYHcFtijV5oiiFj4ZyUN4ny7gesvbtcBeRkZ",
  "key13": "2hhxFuqpRf9naGRB1FppKXujFYQqAYrufkMpntwpckMvtDGbUwN6MswqdajwQSUX7j24QbtqxZRfHDBnVz6YynyE",
  "key14": "2Hqcb4Qxm7dzZTd43Na8esnvsfhagbHLyzuvSYbYNF4hvUSib2PDVkE7JeHUkFemFVQMrw1XsjYMQobFQiJRTwgt",
  "key15": "58iuDctAU2H3QHeh5CTXYVjEaAQ1cuBJLNo9VHa7htLNBAQ1Cnj4dL6jMN9FvyqqKVCD2iB9RmE2aeYzCiZmuGMa",
  "key16": "5YQuPqyjLXW4B17kYZgFH4WA3x6qT3txpDf6YotoHjTLuCkwDzwFdtwyBCnrLMa8maMkN15h61EwB8Pq8SKPfr9x",
  "key17": "BWzozWMhRKCP3STmrm7ULbJ95NFHAAc3o8n6McrTNaYXyqqX7PXESExGRqSoEvCTqro4f12VW4boDjjztpBd9MR",
  "key18": "4yGENMwjPMWu1H2E42AiRjLDjnnxsjNQ9GqcAs7WikeN7ZtkdMBBTKrBM8JwTMBfKP2ARt1uaC3VXaGgWvXMh3um",
  "key19": "53UoDzXcXdfNxC55dtyaAowGyssrgzPncrz2Aw9gsFxh6MmkaPa56NdfdAdXUZgwqDbPecTJVWnASaKX8A8ioWo7",
  "key20": "3PZwAG61KvNBxMqfSfPqY7ChooYFcyNJuRHQ9jpcn1C8HDL9JLYWaYUvSkK1tGQBmGbRPWPVK7qYRavVYDcjXCrH",
  "key21": "314M2edjd3zkXjALSvkULSgafzSvNNQ1SmyrbnUXfrwbRATwTf44RhcYac1KnPcMtF6pVbBMnUvAJKT17kw4hwNU",
  "key22": "4iR3UHQ7EdD5UGJZarXFVDj7P4GRQ6CypPTBTZk8S6CYzc8ZsLnxGxXyW7Af3Lu4tJvGDZyNgwdN9Z2qDUSwnert",
  "key23": "4HuFoyLDGwvGU65CgMnNtW3PbnHQd3hsDH77XiB2NSSGqHHuL2NRYsH9JiGX4DRWRZKaPa1cTRPiTSt2ma6sMriU",
  "key24": "3XRiqCEHPr4TYh6k2hrjsfgzT9hLuVqZsr9hUAqjwMtyjDP5VADkDATsRXXyMBmn9vEYFakqZaEcCEmQe4ngcofL"
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
