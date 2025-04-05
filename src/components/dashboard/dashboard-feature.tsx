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
    "6nMPYJiU9DRNdPMHUPPK5b2BG2hdUBFrQ9T7AEMqhCqngyzQXbvQDcdduk2xQtpG76TAqevooMZ95t23BzV2x1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5stVpgaQv2KM4vzM6NkTHG7iT84bP2Nv8AXv3gVYhoSFVPCLcFZ1B4QcrM9FRxRh8Wt2rT3HmJfdHE1FFGnHfFyf",
  "key1": "8du16WcPK2TBBK29q82aRqzvo6vpkBMAzKESM63NGg1WqRqVzirWFmca1nFQJA1GKJgxEFukRqnkVQthjK3iiMT",
  "key2": "5YxxD2GvdzSThfZGMyZa5q7y9Jqu1H8Gi4xYBqeYytrAkPRcCfXSW5HTf19rkSTrrKqyizVyDkuPiySMB2RUi1qJ",
  "key3": "3iXQy63nhfFgSfg4LtJV1oJbEjyVWBaD89XRCa6fjAG4pGN3J3ZAHjZEt1XaSkBcq8XjNsdPVoNfUtESGt8hfA66",
  "key4": "eVjHkB3Ew7WA1FQUtysdcpyXq2c22kdPnaNNgd3nupYzkPdwgknoHpsNfjcUrnAkwM5jEiUzduUV6PbsdCfaHi1",
  "key5": "45CMsnWzvEXJMG9TcLo3odSAU5rJcwaA9yTP7FCrZFr5RLb9k2xFaQPtbmYKdwsETKphXiUxDY69Swuvta3gcE9G",
  "key6": "5unqGjyH9xTqpwrJuS3mtCvuarpRU538CGXDir1qMuZGVPJ5NbVtJ2Uk8513xCXpa7ZFPFTfZMa5MvuiXAMB2id2",
  "key7": "2itC57BzMn2NnuZtExBR7Emxpja7XRmQFWJ2YAFGxy6mMFRzrZePgWRft7vgmUDEhVc3BkJCttmNRQih1uvbXAnR",
  "key8": "ivSPFb9bQVRSGwZ4Q6cUmmQKdsreQQpPV4ddiErpKEV5DcTfDkJWJRDX4V6uY21mumvykGxxCFodYVxDwE1iZph",
  "key9": "3rV7tdnX6tCWZDuFnMRxFJ89BrRqZcMWFchfzCg6jFy5H82YJS5ZssQrnvxQL6qK5UjPdJ12jAp3Gewb3DHeK915",
  "key10": "21DtPZpF9FW1gq4MnsbmVpY9pksUcwiZ32N9HncsnmXoUh7TrYU4bhSooXD9oovjJJ4xBZRtFvTtSWioh7Wi3EgY",
  "key11": "61bdHmXyhxQGBoQPeDU5FaaaF2d93Yeivd51pba9fGthxc6R7BZ7mbKJkLnKTEom9QhAyiYqe5x7FkD5zSjvHZC",
  "key12": "5CJBTenjdKZxpxvRqY1CTSztT69EhJSXofRA4deWdmBB9kvUBLQVhPKZ2qQH2fMinF4GSZehzdT18nNmXCMeaADb",
  "key13": "5Pccfk7o71fYCeEYkBXBLuA78jutG7Zy5va1qXzqQz4SyVNueTmBy4f6zLwojzyHjYrc6JV9K29gh9fdu9uUKnhB",
  "key14": "4cpXyGTbrmVM2oxdhFjMFFHLhU22Zb1LyYpUfHkTyoUjFBmMPotkUN3LJS9CUYf8wcAXYYZmTZXi1o7eBPgftKxm",
  "key15": "31MaLrSvNVmuudhR4dKKiVVbGssRiWtAMDrBZXEKEYrSQT2FX8DEuSE7qzKSqtpquGkTf6trZFH2dPnw1d7mL8Kp",
  "key16": "64DCTcSbN78juRiDQ7dDwpR4rVWiEYHMxWRz3pKHbBmmEmXVagctZmcAjrgLgUf6oDvE9BaQ5We8WVGEvoAm35dT",
  "key17": "3nZVLmtWfLNME8AhzkerACmuz39Uxzx4gyB6PC42HbHy2Sc6nv4KcvX2F7K3MMahatxZ2tKveWmvu4if4nmBVrF",
  "key18": "5z2MCSHHUBDioDmN7BvQRzZECxVDgqC9D7UFsNLARoQzfXtLtyxcgV2y4JwJMCr4batSBe3keP4mQJxSPPyQyivc",
  "key19": "LjaaCbxvrEXgPa3pwWELJRCKgsUmXFcHJCgYBA7jhZjoghM6EDAuVdQNQMRFZmKRsPc94717nmyZVG2eXPE8hLj",
  "key20": "3F7LGepJ6E4Dd1Nw7uWnWMoLMGPCTPyXhv3RVcb6kfRjBMRyy1gW5S965hQfcZb3Qn4FnkGqi3SGcs3X46cRNLFH",
  "key21": "T2HbU2YQbwA6cMQBhfJ1TWRWXa6pS48XV1Q7RR3XcW4oiFpjU2WAUGtquTAxdT9jRWHYEqiemXWYYaLYxdKxecy",
  "key22": "67We78YjKLQBrkU5BYckYRz8X1xoosYSCisxrSeoorNaR5vVU39VmDA96eTtm42FtqK5tNE3bLxtmXTaEvWyoB7t",
  "key23": "47EmGBcUQeYGwC42obv9GRdD7pP9Y4cbRFev4mvBs1xnvLofGtKpPUDRDTMipSTMKxn9GGM1gN7PqtrsL2DJ7sMR",
  "key24": "5jr4wkMiUC6AALjPVzdVvPRryLwqvyZiwTExTBRr2boTDwNRd9i6PPj9MZ4zQdibwUWct45j2i9W6YaXWqK3QtG9",
  "key25": "63YAm7we7hEJBdzY3fywQ77rqJNXuJiJ4C6tYwQFFiWbVWfKTUG59oi4dkqZ9yaNp5xJFyxj3tcccHU63A8dtpqp",
  "key26": "5QetiMjipY5oY9egXY2FVNXjSwrEG1bRHP1uf1arr3iVqsaXph4z7UKEpaa1vVqEVhvqBBeFrergnedGrspEQKaG"
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
