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
    "3QSH9HCwwJtmN9ro22hop6CZi5aaRVZGGaqZrRTPTdhSrsQwCTaQCvyFYt3koskFwM3QHfqbPUxRi4snifKT5XvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "375oUQEeBKvR9JBDrF8tyyU8sVS5pvu6YmyiB6XUVaj3R9kxyeuFiJ3Jug1FjYuZY2cMxCfx5i4dSGnHfFEaDLPd",
  "key1": "64k8uhj4L3vhZAXgqYDH7CAKT3F6rEKhALbeKKHfpKC8WwDCABf8MrCf3dfEAoSwfpMU4pM9GwU8ABbGRvLi61Mp",
  "key2": "56Lo3qs62bA8jZtqThtT6gEHiejtfUy9TMtf8MwaQacm9YP1N5WvJ3bkoxrJcVVHtdDaXMMHdqKs6wEBeS1q3rKy",
  "key3": "PQGSh9swsh9VWQgef63rRwAY952uN4iva1AAFh35qVzsaFXA7v4rrtG3b9g45V2yvwZWVgxtHoEEqbmnMAb4rxm",
  "key4": "rDSSWHPgvx4P3zxZqQEzKnJ2m4juD5zcUedcih5XZq4YU9o1ikVnrySWFyVGtzBAYaXpF2xLy8kLsMqWWvvmvKA",
  "key5": "3oG8YYBCfArw4LA4bsnRkjyvCcFFb2PX5Bof4aczciuRArH6jmPc1HoKJCr6AidA7E8gUYxzvXmjDGtxSTBdAe8G",
  "key6": "2Nt4P1Uw37KfTUzULBrG2BQcHjPB2Dopn1p8AKF45X94CTFCRy6Et6Dg7U7aUimkj18jvh3uTbN9qqGVqg7NzSk8",
  "key7": "3UmoLxphNkgH2QS3EH2qTrhSknagTwMUermF95JyJ7HKxgYe84WBU7GYpT1zd7dPnbkoY1BAME6TbV2M4FozuJUJ",
  "key8": "kGCHWhiMg84JGy8LxBG7GEk32Fpjt5W3HpnncvGx6bKNRqzdgAsAAEAUR7UWnvrmEp7iv94d63q7191xnjSutTj",
  "key9": "3b2fFVLWQV7vEMAjHRk8dLxnimTJx7YQ9eyceJ1B1tEff93SVMrjfC29jYjTCPmZ9vxYqN711nCGS3G7s5jKcSEN",
  "key10": "BwxAmYQyA4MeDBUdTFZAwTQT8cqqAA9bJL1yBi11vkYBiSLwzbQFjBuUv2DVMBCFQtcSNDY9CbzAURrFQmC2rqY",
  "key11": "Zkk2zUCUGvt2X8dBocGpsbtEpxtZDimVu9N85cJC4hwCURnQDjTZssnss5JGQsijagquS9k9kiJ4j6mCNJ7hYoM",
  "key12": "5nnAFdWHsUgXSxLsuHusHirYBxRYRfwkAo85eyBoqe7bEujfjYL6pezqjuzqayqecDF5XVWARWgRvo6n8cwpLfic",
  "key13": "53Hcz1WZnFbUeZha36NUMDEt229nXEMJoLSaDNZFG4ZQxgHybfon7e1yNVHfQgB7sqga2eU7DKUJyuoU3z7j863A",
  "key14": "4r8jdyySwbiv6X3LYN32DHUoXcdGXXhxEpbjAQzpfZLwcyhDHkNfZL3bLxHP548gAiaYBJ6qh9hLdBXzPRsPnzvC",
  "key15": "dQm1nnHJ6voer2BTccSATXyqzagamWWdvYf3FQobRVcvxkiQVcApjuWYxEVrPEdFN7DHk9kKdYHF6Z9cWNYWnfZ",
  "key16": "3AEDkYotKVMWeo5PS7fUcK6p9ZAP8JqjfpG1gBfC7gefryMDfR2suV5K46uesEGVe1djeUBavzA7Phs6FMd6E6yb",
  "key17": "3hWyWw6JgGWGLcpBjFDtx26Crc6dP62idKpzC3XzT4FR2Vgkxr74a37VPge5PycE4ZfHn1rSfVCxYkwDAGNQ5yZP",
  "key18": "L59pyF94AqHs5rSa2Pbm9h3WZN15fK7H9a84RDmSY2b3KGYAyKtVbycigJMvqwhkyKD4T6cKFCGMgTXKzqC56FK",
  "key19": "fX9hyTwbXckne6NCCui4EqbbwFpnDdouukpC8AFV2DTmbbSYS8GeT5Huy9RCen8zSYzxW9HZH2H7BDxmNmVpiAD",
  "key20": "5dpiMnx1szPvmYj92ynfLSB2BsdEaVp8skbLJj2e1dWdKQcrSbRsxMS5TYMoFAz6fju9LvM61uw4NmAcsnEkE57w",
  "key21": "45zgENugsMZ6mvZTLQVrGKEiH4djmnAKYXNnc6bcxasMqAYEuU1dxkBiRXUFKfnvSKaU7BNtwSUfxkJYo6HV9w2Z",
  "key22": "5T8qH1GKMamSsqKfQgu7q1xSYKnRmrMP4GXhS3KMCC2vyC9EGjzTRCu1xZ1FSXwkHTpBkQHs6py2mbZ5HP5SQECr",
  "key23": "2N995rxDu4zu34cWuhoTPmdZi29E3vG54aSPxYKkqQbJwYxxJP8JEkkaaqFek9AWNGg4fQaL8UVRdpan1j6z34ac",
  "key24": "5aPbGqqpMDws6uLvyvxC38re24KJ4VSmeEtJQxSpBqAXY5wmbW7CYsgq7YnTi95V1MUPzMKAZB1EuXa2J2KutafY",
  "key25": "4ixhV72RKZmnewjBbNR6DyrktY6DJcAR5fATLc9sGuvP6Hvu4sFe3p6FW1GBF7F6MNwtbjeV5JUewaBY7DjzGbZi",
  "key26": "4fbTopkMSKi4fZX5hJxLx58nQQcAKDXdAyyFqGHYRYmAAwhRWFiiHQ2Z2fRmQ8WqPP8uYFd4Qd1uNZT8Kto2M8Wn",
  "key27": "JSnHUquk5J634cvVr6qBjeSh6MFFn9iTxjHSXXnqfegfrfVtaoaZmsDs3Vs6GMfAE6FbnicRFDW9AdxJM83cKnC",
  "key28": "5Mvv6QRzfXvpopgwgptCgb7rjZAVmrqMfwvo7teuiDU97vbWZ8AkJTbTtPnELRFMWeGH2tr4WpkeEfbpk44SzBpr",
  "key29": "T768Q24FXd1LShzvgLBT8fH6kgAwQdDSkecvy61kExiuPFPqGQRF5eUJkqVpovHxkHZKtkZQnC4cn55j79HpTwE",
  "key30": "5N7yG3CgGA1PJ47GN3V1ocQwhQz5QoqAATCWAmcAwyU2AkFGGGZxKo27ZN37ZhWWaLo5aR5rGzxHyVbBqBiapDSe",
  "key31": "64M7cagehqpQyxXUKH4o78BoCzTQmKZyoxHHoesXKg9nxR1PrT56PxZTno3m3eMqBpbXftqYmpwYWArySJThgXRq",
  "key32": "5QVEi96MyrW9KDByfHJg13usYNRkLiJzjVP5NArf4CuXRWNo7X2a5HHFZHG1BEnwNFSGEjk8BJGuVLgMsyTvqTqt"
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
