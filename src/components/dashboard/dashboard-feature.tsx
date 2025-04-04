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
    "33p8BEupTKFM2w3iua5F9KiYmuXncJzibvD8o5mFuStKPswVnr8Uacv5169brpU6CfjhDFAcFsnwccLxDybGb1Te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Ci4EHTSxAY3ZT23h1g3334yPksqdc34XDmKWncSZSY71YXer9y1LvWiP4ZSGBFXxSFFp8vsTkzQerzonwHVaqo",
  "key1": "4e5PEMbe6CSeqmgvWriQKV2JgeP1SRDJ54P4zz6RVzp5J5Y3HiTjDeTYZkR7HjDHNji4nuzpFmgAyUEtfvcYnJnc",
  "key2": "5a1qiLCvXcahe5emGV7gLXg5MC1Ryn45AcPbHHzTkF6DfP1aS4LhPw7pZJQRqoNdPcpXvi6EPWDD4JvrT7Jg5HNc",
  "key3": "5vJSSnn7Aft1K7wiSQZtH748A86eLn5gEu7bYDH2Ysu4FrWYf5X1spAhZ62cPceVcBLUTk5UoCJY46ZizD7zYPQ3",
  "key4": "3W1UXU2bQ5cUf2cPnfaztq5Y7ci9u29iHZsm4dDYsT2Nxm4tNXiiacT6ina3BPiqf5DkWNLTt99ruPCsXyxMxK39",
  "key5": "5EsoWhcoysD9hqN9awtwCsGRwYGxdU4HU2R5Ph9VRLxXuZSMT1jfVmBgTro6uWLqLxxoH7C4nZNJhTNTQxW3K4oz",
  "key6": "Z2pkVjXvojDBEFP6Vk1JxBDvjwBzd3i1iAdL9crxfRdiLF18eZVsNp1gyLoV1hjR7qdUxaPS6oRReLJzaLgpwYd",
  "key7": "2HRxAcKLepFqkJsd8v3jJ2PvV6JpekBFvzGsW4VMC1JuLq2h3Yce2hfAKM82GYcwD8AShUtrvzoxuxQTsfR6WoJ7",
  "key8": "5QZm8DFuMduCr3E2f4oUW7saRJ3xRbPaZvaiZvnbvYkevSN8WLuYJTPtmKnHtgAdQ1aqwkUzPpBTmffMHv6qEuke",
  "key9": "2Gh2o1P5qGj6EbJVJcP4ocVjpCxsFWZZDW4fsxaLqTAhbzXM1j4BEHw6vZJftpnH1mBQwMJi2SWTXMXwoXsbjwNU",
  "key10": "2FSqRVDR18acjRfcwquihMrSPWqqnS834jcM1WaaBaHGMMuag2mYPqBoPnZv2CuvNgjykBbGQsuCWng3RTXJ5CcR",
  "key11": "5FSQ5RX5FXQgdeh273YjYmpWtpfHJuRU4TKfHKoy3ZBo1Ub7M36iXG6Jbv1RMwkN7HVQSRjSwMiK17mrxR6Czh1c",
  "key12": "3GGuBeN5UxYKL9i8uPKirZRVUki8dH1tYwHzUayNAqE3yhbMrQHss6pVS6QBAvZuvjqS1seLNkfSAVvLweULKRfb",
  "key13": "wN8AMskEDq94b7TQpAU8sxej54qdWo9sSFjUxX8VBhguZ5r3et7ZnVJqLbZqpgAATWyb8KeShatpUKNs8uMmih7",
  "key14": "qhPqnSBh2uATFxCDK4ovSgUR72FV2S68AkKvjgLSGKZMoCtWZCH1Vs1bCHfUbFjWofxX9qX2Q9PVK9bbceUmn3g",
  "key15": "62xMD5r8RVbT11dpyGPK1nE3SmWxzXbbZyqpN3iYmtwk2g1YALqmVNXTtg6tamVYr7hUkPmqvwZ2oFCosaDXsF89",
  "key16": "3fT6nbYVrnTCowge54KpLNXAJpAyTbgpTA3zorWtgsLUSRHkhZq6qHLWprt2j3b5FYosvPHHeVWabR2csd7mPVKr",
  "key17": "4tw1PiPsnGKbxFnkAkDgzJbvxFL6EYGvCC2azjuge2zB1LcNia3HwngPED3xhz5togR98pbi2YXZLqd6xUhDkVRM",
  "key18": "2rGKD1srdqtY6S4LvhudhzGM1FGrdUtvanxNjBH1Zae6r44cf5u16nZq5TwAePxLvRrnixFn8Q9MYa7AH9qXo4kq",
  "key19": "4HuFEJ1Apyr6ghP7Ggfan4jxirts8jnVPkVqaPwpi7rKntjDgt2Ni348rCcGMHYaWbSzHFGy1mRtna7h1GuUhy98",
  "key20": "5GSaETEkw7SUEtufxonkJr1nRrzeHrxkriL8dJDhxULZjXV6ghtfauxXD9vEMZfcfKtqN2a729DiNagyrUstyCbT",
  "key21": "5VsL1QNw297V9ocHzqNUuQxwQ6WYfh5YKP1wZeMGjcZRp4UmSUog31oW1s1NauD5Mqs2RGFSejFPmPbdZWf1Vjvf",
  "key22": "4QdT5DTvzbXp8PeozvtQRyt6Ka7PWmaugz8ckTZTSRcGSk27zjzeVAiBMAahKFcn6z1CQVpav49iDVXtzPin2VU1",
  "key23": "2RG2CQSJgNiSZecvW9oanvyVVFoUwJTwYDpqpnEyRe5DCpeDgqgXiJ6KRLA1i9VyRPkw7KyqrHqXJLhvVYxsZbpQ",
  "key24": "5iadz8ywjmnZYgKBvGvpV9WMQk6uGUpQc4Lquzd15sNP2FyQ2mELGJFq6WsW52dd1FGn1rdTr4CvdE5XbEhxnRJP",
  "key25": "2xYQU7EUJuA1KsuisZ924aRezjau7QAmymPB5i1J8NEZHwuwRDujrXeCzS527qSzqAgRMadRNUDXuBdMcatrxAca",
  "key26": "5R1r4CCjjwqH8WpL6bVrTfVZVynVZDWHVuU3V6wonYDvcLwbQSU4yjt7KX4665bWriyZ8rztW2pBuzAKmUf1Wn1n",
  "key27": "2CZUMMfmimCGzVqG6kBTyXerLGe59qK29RKKGwHei8pHdQL1Y2EDkD4zuXp3sKBnfL2tNfwx84VnJvFfh4LkkmiW",
  "key28": "5JvYZFQBXLnKiwkCvzM2NhH61sA3cqKvv9hbBZvUi56xYVuFmut7ufP6qRxzfr7VbDzYF2mBjpNfqCKWasMM1Rjf",
  "key29": "23jg43YBtyVQbssNef6eXDs3kEhLCg43Hs3fKYwJWaDLnmSdVSVw7Xursx4VuNSbnCMCUoFpskCfGGNE1D3e6qR8",
  "key30": "2q1YskKA93QJfT6hC9fyGhZG2PbESctHBJPhNHyj92kmTrPcgKmHeHMZxMLA8KeKhhL9phKWmg6u6iLwpHBYLW7e",
  "key31": "5ZySyQsq1T3AGrrG1t3PP2aaEW8yw9vdjTM5rgnd517ddPy2xaXZ8PPXDn7LLPYoWHHbwYChpLHGyj7G3Ne5sszJ",
  "key32": "JMHScekGBPzkmLMi4x2yTtn9uvUn21dgYycfjfhXww8NGpFk8YzEvr1kXRFuJZNvrDXfivv9LvGqvpZiQXyhz24"
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
