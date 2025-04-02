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
    "2NFGg9SVHu8XKNGdvUDK6LsPHw7h5fknv5NHzaekYsCpjF8wzpGsPNKLoS7RyVsgFqCagBJvDuHNJhuMfHHh6jWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RiitphcHVikkL4JfqUofCXC371rZxQt6yNjr9Dcqzd9rXEVRd4unXistcggrjgFcUJYAV5hmVpEkzUpZWnaXJTa",
  "key1": "5ZKTxT3E7cQjhP2tgyXV7ijXqMMe2HcBkrH5BkKiigbABCHC85cfLobvsQffqFySUWD44an5aiJ6o6uj7JXRNNw2",
  "key2": "3jHsDrKkgVe7kRawmcbe4mn4FCUtDcdTiDNPd12XrudK95GuwYovnEA6Y6wsUAj4AuJgL7LcWHh5DWCBxx5p5JoV",
  "key3": "3gxnrXEG9mt6KjnaFMxBPYqRvpruaqzAWdyzFhHAxqeE4wxsWK4g6gMBqbpUJqgLKV2vfYRkJPU6NGBiXxD9kd84",
  "key4": "4pH7tiPEVu2W3USUAunB1J5dYngxHKnTGebDi4jpfrmJAJKb9PxGspAcGrhGHPXjehWD6wu49Xq9MoAiPLMUhS1d",
  "key5": "2BS4637yLt94EaTvsFVkBy6mLXZWC6bXK1EscLeCBc1Aj4vuc1RhmPv1hBE65hnPZxUrZsfrvDz1LEZrXy32U2YA",
  "key6": "3WB4rEeR1FmcvxcFkcWaQJ7oVFZrvCjcg7neBeet5d9iEGbiEe8L7hTUYWvb1vAb9GGY2Gx2rddkAiRR1Sa9r9CC",
  "key7": "42fimZWKJDbcDTYWcDrQNZbkipVCh9KBuPmtS4Fw4fNdoSopcVLKhCdMBd1LyQwUYvgPozf3q3VcYHYxajQ7PDqX",
  "key8": "5X4udgtdv8xhx7QUqgo4UBdeuKJrrVWygBF5mpryCnzQ9KSjEFzJmYn5TfzWqNkerX6xvgR4zacrLnoZkUv7b2nQ",
  "key9": "4MVcdJ1e1AGRGv75sY5S5HWXPyYwCuLe4vKbNdyQBXFtYf3tM3mjxRBnvRv4BoEUHLgy83PtjoZD929MzKARt2J2",
  "key10": "ACeYcoHTYqnGWXQ5SLq4NoU9cD7yfTzaKH4KRYPYPLTqbpghQN8DMuWSKYvpMCLBshW8Q3Q2kKVBKa44gE7ewkf",
  "key11": "9HeTWANkATcCgxaXYPmPEu9KowejS7tgKGCAHWayxQwx5ZtHgFWT5eRyHWdLfbQt5ukNqimZU3obj3nWB1mAaCk",
  "key12": "2NAEgFFUYpcTS2FegryG5fiAR6YJjTDbMHkqpSX2BRfo7UEZjXjcXJ8N2Sz2CP7x4AH7cb8wM9n2hdCsdrrW25p1",
  "key13": "3Yw6H4UPaPkwCfCZGKZSXCWLKz77Zkx7RXXhWq9sxqnzQRr3cAmKr6wcuRtcwn6g6U69q3fiYdW81BhVN8Frm4HJ",
  "key14": "52NFNHKmhZ73MPtEofe3cbWappYZmTopbk4BYdZFV3sZjrpg6yhKE3xHBeLCD7MrNLWYFadrSi465Gfqb6SVb9kf",
  "key15": "4SgLgvGhVY4YLn4feFMfSE2Nb52fEz4aLRqd95a2AhYSBNDoUMnzmVbEQFuYe8qf4b9w3dG7ZJywUusFCsGdUaAJ",
  "key16": "Baj5deuMYhpiqw6uybdneRFXGFHy2oTrnRD6Qdhzi27BHFDgAewbiGkjeT63mC3Q8qP2LxWmY854V8pKsFKX6Pv",
  "key17": "2uFr3dM9KY89v3XdXzdFgtBMogEuXLpasdbvv6dKhRzBG4BwBomp9KJy27J3EcC5FuPku39uyWeTUXe7cmWtbo57",
  "key18": "2MA5Wspf4AyhJZGY32EKcrVqoj4DGkp1iqiBcts3DfuAkYuZdvN4LbDnbVPBZKbkWwbDQeYbFwe1vMjRjCVaRDpj",
  "key19": "4k4VvDnNZfQMBSNMvwcivToE4oxS8rBuvbP15zABXzudk98fekGxVYFs6uiBuLwsDeLazeURAdT8eMhL8MXY15Ad",
  "key20": "54RKfeTNDqtysd8R6d7eqbMmbeELguW2TWVL7bqSkukuxTvx6P4z9Gviv4bArp6KTHqcx7gndru8ZmtgdTgkDjGo",
  "key21": "VdKnGFzJV8y5edh35WH92DhZxyRunD8J8TqWtN1ChTHB345agABnGMoZPJah3y8dRrHeEut6uSf11WBKe5yPf7B",
  "key22": "2xFHKX51LkjfSL9WwrgRzDdCA2JAnTUfeciE1pzWJLiBJvhhZmwsaDZ5qg3iHtYVSrbvEyhdMJRrWeybeq7ncABs",
  "key23": "3KuCDwyGFmqTWX5SRk2wzSg6N6wSQm3KtSqfhDXs12axRFWGntHYRNaEp6iHfUN42m9Y34zaxk5ahQToBeiHe23S",
  "key24": "2K3EqZvUBETZWJ4vykfBMWhgkzZ59i1pfNQtXpR9kux6QpXSoY4NVcoJkcgcKuV4DXUVRxJHLbFZAX4h3wzWY7zq"
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
