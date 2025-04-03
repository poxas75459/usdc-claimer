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
    "HyoXszC32BBc29qJbFn9NgdLc6YrTDej76wVcm4Ai717428BzaMo7ezPAvomjVYMKxVG6zhfkqfobNWxQxpwwuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ru3q3nDQqe8Ax8hS2UGePZozyTNT47SjEacaKPVEPTLUxcWUSTKkUMhchC5uASTHkkPRYb5AhsJ5KEodyQhCkug",
  "key1": "5bLH3NxAbE6y519McN5k4UJE1uSuwhQiH7DXyhQNfJZTZmMBBj2sAMzfZU3vxdfWfbHmXDsxK2eoyvKR2QmMkqKE",
  "key2": "2LZzayQzK97TNPUyY4BeQ2r7vok5mrRNj3oXECzg26bsTwfbKEVLgBroP6uc8wj7yoc63HJCddbEwDxxAUkXwwaa",
  "key3": "4DuvBwPTxL6HnVPe7G3WgGw9of72t2ugwLmSJzexanHcwkFQJxoDUzxp7RwnJntKgzUxb7qm5TGNXD5MvreJ2SiN",
  "key4": "3CkCg97dfQiXo9g54YZMU3E5PsQVLD2DGwtD5fHc4FxxkgbsrEDighyWRmsAEBh9pRoBBQ5cZtHa56RdLDvV8kMg",
  "key5": "Sf6Z5oduhc6iDsbffAY8V1HEaQw3A9eCak4tVcZQtHoYDvn3kJo66nbzgDMY57dyxN6MkvPAszeLskBSQ4sNfVq",
  "key6": "nQprzupLThaztR18tEM6RAxpM6n9KnaUoZX3sCdkVgHfciVgWwD1Nk66C8kcCyvGhUMjHo4QtLna7stLwivRyQS",
  "key7": "5Aj3ayLFiB3rMMuaYuzwCvwkCuQR5R9aPK2eK8tyaEQrMU5ZqjS1LixoDRPJyAnDog7NcNYW3qxYdTHfz58S7Evf",
  "key8": "51vDpppF4Zvdn8kbe3kCU5pprtWtZ6QEuA1xgP2HfQCR42MRPw5KxAiZsd6CSfX1vRZFhdY7FBCbNqQ4M2HMQj6K",
  "key9": "4mczNeS9Lco1TfA81XTTBUAABf4CcSN3PNvP5dK6APExVT7rW7eP6VJUNvKKfMt3rDWmDF3wRbWY6rcTUKs5jU6X",
  "key10": "2qb1doDMi4bsYY9cxAxgBaTfBT27TUojEYYEvtAUk5zXASW6nqzmb8QkgQYvFVQ2s2a8BD2Z6Bv6XmbZ1CcJvap5",
  "key11": "2iFJP1MaPDiLXmgxC5j1CntMZjgrDoxPHYMW5RUFujxPKzF7aZ7umnYv6fBqBcvdyC1R9wGHhJT3UK1Q962aQEyn",
  "key12": "48WvnQFJAp4Pp9vvk3k6nKq597h17WyzZY2iQWJtUqRG64VAujsNYFQNUjgA9ZanpPhX65x46aWexnG8dsVGCJKK",
  "key13": "64NAJKJx7PkVZjNn3bZ3oW7p8neAiF4CvbKjDR1vaGsz5omKrVnxwjvKdCcE5AtRC8KcENm5hVYANyth6rpCmDd1",
  "key14": "4JDb86htBM8yMKCtoMbVqduGfot2rf1xRWZ2WQqxbcbeHQkFiirpFWfEavMHA11N9o8Xt45Zxm7nu3hyZwtDeDgT",
  "key15": "29uvDJ79kMTyyGq7nV9m2UZQQLYnomTfbuCSEzE5ucevBh8tun8jYk2ubbFPrQgZQPDt5Bep1DmT9fdtBC3nA8Xf",
  "key16": "4U4wboJP2PDsaGhTBhKVHxeiStgKvXo8bzvXePmBtzBRV7RWbVFZSnFLbMi2hpTFAjoEvf5V3WPgr8D82sVnj7LG",
  "key17": "2Pg4dkgiMBPY53CjSdYL4xivBt5hCW2CUBfy4Uei9XDHyaut8XGiNvPDDvmRezHhamEUVYCiqdqmtTpBJRcyPAwM",
  "key18": "3yWZaXy7yTiSKMiQUhsApSFASZXPNdYrjvyDPumBRaapkTFxDR1Z3rMZTFJNmYC3jMrqbgAywWFcDLMtUSxAZpMZ",
  "key19": "48KfmQ8TUYgcbyaWRBY5TtN85UMaVQPn9o1rVoJuNSrL9zXWHDgxktzyxkzUnyqNdWhgQRW1XpBQUGAxAmYyQmpn",
  "key20": "3W88Ciz2FuphJnKBwKpUWeAoNuEgoRZib7bRUM3AnCMTMTCCxasyN23jDDMmYGRVfH26usAfbJDHS4AkBLUzxqe9",
  "key21": "3rRsk8kcgfYRkriXMGpNCovj5c5wUuXLgVzRJ75XjDJZXVT1QRCQCswLZjoM51y26J84pXK8Eh5HiDU3ZTQt2Xj1",
  "key22": "2HTJGmdwgf6KnVXzLQGwoW6CjULmEthiF4rB3PCWQaSrM1dt8VM7NW6qu1aVh4fGqdDXjjxjGyn9ic3aokGbWaJL",
  "key23": "51MWgnbc31N6k72Dmstahn2Zst8oF8yrKyVcucHxHadmwAKQfXWbkr46GZm4V7qLBRPWiKFEV7bp3bJSS7FAyStY",
  "key24": "vAhkfgg3AMkAnuBXwExsSHZDjwbLc5We648gjkrRbBqfGwFkzSPK2RojJVEvPvT9Jc7ijjGuZgMu4cs3GkT6iLy",
  "key25": "5nJe1ShTzdkKqtnXsAR88C639YQhCpjvG4mdX45f6J3pMhxwFY6qQjPHBaL6tD32gr9EU17RpY6dYkQMqa8WewSZ",
  "key26": "qg7fQUnHdHtZaAS8VFPXdM469yhdhJWcVyHPns9xY74G6inRRaJev23zPU8HoaaqwyFg6iCnRsKNyYcZvWPY5P7",
  "key27": "QaF7yJezxwUFPyN1D5DcekHCqikDgHn5kqNk7JVxoH7Avgjgrhzgje3mGUYtXdr7LhPFKTW5x5QcpbrrggPZdNs"
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
