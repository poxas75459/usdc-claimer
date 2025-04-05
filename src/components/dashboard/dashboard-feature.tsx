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
    "4tqd4ihmKmX3XvJqxzXrsVMJisawEBeB46pE8s96Me3pyZ3CaXQZF8p5WdAjDSep6U1iVpBQ8Ui1gwE4veD8qBwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3yJBUEU5dHJwcr1byctpUQghWKGCr3dbcoXTqGsnq7sKgns2MijC2aXdW5LnEMBa5rEMTacj9EsDaB8dXRJ2zg",
  "key1": "4bwiMU4hN1DHS5S9x9sSxjHCQ1kb4FodCqW66CA8sS9PU4RGypkQVewoNrjtrfhLmTCq7AWect9ZhbjeeiBM8jHZ",
  "key2": "3tGV56M7BrfQmSF7gyVMWqmFp7U2X8FV8wP3bGomZsUJNttzA69fuuggFF9WVK5myuYrPu8igzUTn95MxkNfh965",
  "key3": "3EJyeiPZGhNfD1NKQ3qZ9ZyUJNa6EBC1YbBa8JzzmfLhNA2bhZS4zctNC5pVDbxWFriRTjwjSfPYaZyXqrd6WtUv",
  "key4": "2Avopej9y38GahyATZu9BfrNN3yLcuN5VvRHckEdsDdWp98BPGY9BTGAy8SH8h7CvEaDiAkmChDc7RaFQ7YAuQqU",
  "key5": "5n3Y5BA9fhCA5WVctuUNvr4KXx9YzZLgJPBzHj7W5xRtBg3wXArJZm3picf2cDvhxQ34KkczfACsSXZSB1uZcG1f",
  "key6": "2QE21A6m4PpwXotbJjXHVsCQoXgWjAyFExJmMnktYBjBnLT6xpCkx6C6pKwQ1xbr8YaHRkKwm42xHkontEWsNNdb",
  "key7": "4pqdw9ix4ZjqR4VHRNADAiHEaLcVHQu2vauWPmbrsdcLwZZcwQAz84nd1GPEoZE8oJU4SdsrhtZduo9i3cJN5iR5",
  "key8": "2MoUXS2oMJT3CZLSxA7Gt6wGJLYpBczDZjdYHNQsNrXVZ7jSQeh6LhmMo3HfmYRvXruLBRYoavnncbghTfdZLzDA",
  "key9": "Y3XmMiPfY5ZQKjAnkhkP6eL5nj7TX9r8kp49LoTtCVq84M9HKfgBChHViCaX1ANZZcokXkNXEgSD3eiVmf7AP7p",
  "key10": "4zYCZEL43pkvX6wgtTxEgXrvAmD7yDn2sC4zGZc7AMwj2k41Zqh2rokEEqq6Hs5WwpaLZLSj6iceJnKqjfFLa7ms",
  "key11": "1uFTq1PXE42SAW5ekdkjNmLzQ1zWzHJwqDu7cemv52sLiPfVbkE9mnXopkHL8ySb4NGwyMN65kE5CF2RxMr9MiQ",
  "key12": "4EXd7C4U1ituJec1YtCUD3ZPT7Z8rMwkZx6cvbqEqN6WjmzfxkYioBCAUzitRjici7GXTU5uTmUabbWReaQJCyro",
  "key13": "wFrubKQT2ZHr9ET22huPsyAsjpnmpnmBQuj16MB7CmBBy9AvZguDYMYyrDzyzVbC4Yyh2o2D5DVcXvt3GBthM3G",
  "key14": "5ez1arAMd2SB4jCjyN1PpsYBCJNU7xB6251nDQX6La8VxMPA124cfrEMj5PAWK6Q84osGdKnTPZ5rL3VS72Jb87h",
  "key15": "4tKh6G3ehESDKT3N7nT2eE89HWng2iBraXnPLwmd9GCP7mmyQSUq8qF77KVw4zYWGaymDhooftf2uxVCN48vvfT1",
  "key16": "3qi9fuaJ4uF2vz547EmEog4Qx7JQr1Bz2BmiNyrnXrEXPCupiCyx2VEPoNgXkcHALaQhuYXqr9JUH32c9qpphbcf",
  "key17": "48QGwuu4tspmrPVb3EjH9e3Wc1kQwrfZxWpdMo9LUPbaEjFZjGcvut8dRMPxvVEHXoamqXT7h3kwCvzxVZfbGD1y",
  "key18": "4v3pDtgZwzWpxQnbE3sGNVD7rF4JVvjXhtbNNVB1ZS4xaW8TA4zuGZV7amN4HeEqyNWQzvyK5AARd4X69zE74Zvf",
  "key19": "4WckkRUhZFuEAG45zkeCFHcUpG5pYWtmm5nzJKZoXELmPFgZa7ui9qwtXiuuaxi2V5aB9Jkiro41Gxt5qNKW8jrY",
  "key20": "nSaSfAGSRWcSWqmooxX7TFujMUZjqtCJahHumCF9L9APvbMgcJdLeEieTYt4zckcR92eZp6nksdUJCYP5ZQCwCS",
  "key21": "4q8qedsbJWL8HRAddm9SMMzLFVENqP1zW6drxoc5Vkn1V6LHyJK7TiqAjwddtjNjpoJDcpSHDbzmdLPCzZvzxPF1",
  "key22": "64i6jsGj7NjvCwEx8mTbzy9QRZAC5Z9qNA2ojTehNSDMxR1t5F55N1XXST1TL49YoAAsWEVBmA3ks4b6mRtXjJq1",
  "key23": "2gQEPPx5MSbkuXsEq7nJD2xSrn9JDs58qpfsjTLngR9kYYDkfVcT9ikjBf3DinkSy2R3QLMPr9M4wMzGoXVJDGoe",
  "key24": "3iNDnCefZA3ZZYKrJxe48NP3eMyzWjPzYvhMjASwZ3ybQu4etWtbbR65axGHFnHfcTqa76RPqvxc15z48SRjGNoe",
  "key25": "4Dv3cygLsZW4T99M1Lq1gfyyEJGrNciHCkAoCyqKfe8LA9RuJLu32uupzuzDKY11AfDCUUnmevn747cNBRQuupk",
  "key26": "3V9twK7qPC4Xw3whQzZSxXdGftqkC8aMYjm2CKxiku2xcCahNXbRe8Dzw854FcyHcHvKaxhW3gGmadj9TN8ijV5s",
  "key27": "52kPAmtzQ5zSyu5L31vD2FjFp9Zfg8XzypGqomu8eR3BPY8DRK8fDrCcmSM1ytQESAV7qCQXjioY9jj5dJDzGkep",
  "key28": "4nGraAdYEBBPYvftDxmBRaShnytP3LTAu6jszbwxJ2kdNJdMi63yzua7G1BnbjUyb679Z52DG6DrcTwiPBYu787L"
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
