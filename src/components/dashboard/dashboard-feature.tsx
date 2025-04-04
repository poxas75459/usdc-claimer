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
    "2HJP5g7RHHyKRAjQD2soiE2eZTrLe5X6ZZnaUuFnSzWzvNgU4E2Ypu4WNmP4qEYSx8tLVXyLh9qM9QrSJmGDQtgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49sKxwfuYodkwbk1gxQy7FxSj3NxNZy6bJ5XiJrwtKsGcysAtx8nx4nw6sxNTe4GKBoHuJg3mSBpd3PZk1sTp3aJ",
  "key1": "3ZfKp7UqQycpNLVp3amxBHnuoFydGSJx2mjeP8DQUuJvErCHB9x9dRENinGoxr6DhxuJcsV1w2t8bVykMwnMtAWy",
  "key2": "4WW88FTppgHBpFVXSdtSN6HNHH1xXFFBnkJPiXK5tT4har6qtwDsM25jEDyaDf4mmy78VHjLWmYumbKVZw1yTqs4",
  "key3": "3ypLbN2rMpdyB3H9jtisdXMKpTCisWVyS4EigVP4mVYy9yrepFai4911xKzTVL7EWryURBtUfmWrCCtUbQDvEXio",
  "key4": "5yMBfPJCWRGzp4o9RWpTSxLARSb24RyRhxBu3a7mD17e7ZkbqqXHDtduird9WzLvnxSMfH3vzYbiBPUZ6XyhoXCS",
  "key5": "65qidCoE5bXEpZkDQCYKnrLErMR4bfMtyL6PJ8a1b7ZoYMXK9VMceY1H9CxuGgJJvBHLhZ8rDWAkzNRJkqgKW6Ee",
  "key6": "iXCXdQMeiFwt4Gj2NMoJAXpJTf8Gb9ghAKDirfsh3Aa1cfTpww9AFnWtdMkh3o96cpHQ9j1LwMEAS8wDvxumHq2",
  "key7": "2dERwckBRxcMCFFBYtvBjVtdfmP7fzZ5yaM1AEHAXG4bG1jKBQKFh2SoezcJ8ShVkaxvXSTuqcFECAyu2ETyZLoS",
  "key8": "tiao9mf6ZDnFTg1LDPV24H4vsZeNJVxxCsfp8KGno4XBeAfRnVkfAw1Uf2ctScDhKuBBSH2cnZg1QXmHRVFxhCY",
  "key9": "32ooWHifYp6PrwB1XkNJHYckWH8W8vBH8XHLjXasVY51buPXQkdXsdHNWSCDp3vBWkBXSL6LwQ56tXbmtu2kmKc6",
  "key10": "24SfkHriiNxGUNgqNwwW3tMSvsKbjJxSTgHfgUVp9cy4f3NQMVzHdeX2DDt56oi2pbqQEFPieUfzFvxeu9XzG6pi",
  "key11": "52aqWiYJ8qY4d2Bcje266TB6rCAC8gTSDJYkBw63PWzh3L5VgAjaMup3ApEahUV7iLvDbvZaWxCP1sQoA31NFgvb",
  "key12": "Hbb5vbtd8jSowNepad7eDQUqPVzUjL8ppdDczNW3wEcpZRuG7ghgxMVTyMXG5fgxTCQB4GtTStnzMkBg7tadn8A",
  "key13": "27TxNYGAk3X51zz1uvibc571r1SEJgBM4wTicHrHNteBXRRoDecEqFHh7NkX8qSHzDcWw6FRhvDdEH5nRXskMw5h",
  "key14": "4uC8RbrhnYmukTTevmdhBNbT5SSSeVfNfSjfaPZtiU2tveAruojidiQRnzLD5drrr7v1YZFzTr4fQ6ddvNjT8e9e",
  "key15": "75oFJSEd21JXLd8HYCdwLc9dcqnaj1xS4Rsjipv7espwwjGS1THEvPEov7XDjbegi3jXeBHxEDzpe4yFaEELS59",
  "key16": "28vXyFYkwhpCoNd38SbZ7SiY93BcXcSFYSGdC5Gvdmq1rzLQTUjhJWj8D5rw5cegC2fDCCmUTQZsvhndmFzsk1ob",
  "key17": "44oq1DNASQEAAfYQLnb9YpzquG1QaGAi1P8VidHNLaWzbcV1UQNT2pJGVLAhWVSu6116WetoAfRC9f1H9q1FUzy5",
  "key18": "4NAwQ1MPDHKXivfvHkXo1QBCJJeZtK2VwUTt92zEJgjmks3fc4k9BhC2EVGuvtCtvnnS5b4TVWsgCoYXFmpDyWBF",
  "key19": "5sEsDzMz2AifDXiJ5J1uYUgbKaddkN2BNsbxzUmqLahXTxqXLwXtTkhcR23DwarNWJnUMk2Jq5fLiiff35X4fcPZ",
  "key20": "PNgV9bV7JEnjPEjVvQZQpfkQT5RVdPDy1pwfSkZufiqdeVu8AsGxCr1w1vgm5VGB4WcmNPrM8Wx5YNofESqVkjP",
  "key21": "2trt81VnLQxi8kMc8RMpiC1EvVpXWMrsbYi8rovBD2qGc1bcL8NAz1cMNjZRbgHaHNCvQWaYqGGxewsNXyZEyYDa",
  "key22": "3JDcB5CZqjhWfko2zhJFPhDHxwP82H44FB1NpXZVvNSg6bZxfcEKa8As9kkqnPN9QUkhwEPEvRHbCiqmMSDPW8cb",
  "key23": "31RTaqEzBZUsX4YyKJuH1NbPjteFZU9nBfQsbQC6N66wBELb6dvJcYGiuJh4UebJdHpqa6VwTeCjjE1uSBHo2xru",
  "key24": "QgYgVM9dram6ZtR3omp8qJTPFuLx7CaN8gvDmPD3u8K8seEDMqQtb5i5RHuU6iS1nWsWSL21b9nk5uzJuG8o9nE",
  "key25": "9RVkKxdZEmC4UtCPVdymqfcWA4r7kjKLZcKyMVhzuLJQCTqqeLc1s6anpEU75WFzUoedhtzHB1AWRUgmtYRgNfG",
  "key26": "2imqjjWryesckpLQWJqpaXuqasNjyS6SFFcw2iwzn6pQP2KExHfsjtAEQzwh72hLgkzLcnNP3EDkDmKoDdKGPMCi"
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
