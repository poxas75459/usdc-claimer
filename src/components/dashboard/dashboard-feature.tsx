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
    "iQsMVCzjcMJ5CS8eMzGPP9Wmj7rz57ZeTwtZXdHfp4G7zL9ksvVCXSXf1aH3zShNCgwtYUfgPEarzzSLWvPSjRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gQDNS1dEDsWXM24sp6CaQmc1nsWaUz8pqB7GFwcw6cFqmcRjx6rQLy8v95GpfKgYNVFk3QKddzazVnpi56vFiYi",
  "key1": "3sPEpENkuRvpS1k8F6WcDY8h8Y6ruifA689K8z4w4V9gN7vEBJ792F3Dd2c5yMuKkJEzoPJrPPgUMUywSaH3zMyS",
  "key2": "4P5fWP5hSRnprmcDddbQRQefdK9iCYwkbRo3h56nfAvHC4phEnJHx6qkFSsNxJKKx73tS4qdUro7vvvMnwv6wRF3",
  "key3": "2WqM8svcyMsSETvFgNstmFpsWiX8vPpJA9Pjs4nDd6WaBP815LsfypiAvif3DpAyzi7pbH64Y8pSc4G4hY4Xz6EB",
  "key4": "294Kn79txeAiJwH7vyr1vGgLfZoU8YDLzw9E3oVQgF1krLV3LPn1hb1Xg7GrQRGUSx2QHeGZrkPH1MQRb9w5GccG",
  "key5": "3WRL7ZV6QVsr6esefriZFeCby8eWrpRQB9WStunDWEnkQQpZXMMvW9zc6sHYYBkU7TRYgXuW3dXc3c5Hd3oHK96R",
  "key6": "357G6MbD7mtzGqSDLHB2rL2jRB8iBCak2ZF66LMQcbYh7oF88ubic77B3gRyTj6d886TLFMrgBcMbSZfXvCmuqyz",
  "key7": "4ci9pfe3y7x4CqmYVDkFEpwP18BJp3ghskbDBkdfKYyp4wZj3V3QjEKDW4eTd4yy5aobAXZiMCZwYrRa2m9v7nqK",
  "key8": "5KZkq61REvSrYqvhPsEA9PLHKCzsXCsQdHCdSEHrZfnBjWQNPE119MyQcNNtsPSzv4sDyzJccgbC7tPEwBhmeJAa",
  "key9": "4ghAMHeFtrhXyYJSEcamdQ5VRb9WSZAPgxaU7H4FK1F9c5E5NdL7k7bhptWBkqJoJGHrNBK3yeK4xvaXVis5MGYD",
  "key10": "3LHqmnqvXzcLqzfrr3mzXw5iuqNXP6bxiZ2qYobiTwCfk8PhLrcLixAgumeJk8Kh8hkLFV2Mei114twcsqLWszbF",
  "key11": "3UNhEyNd94c2mM4uSnMYcj5KZDF5rAmM9G8Vp7XccBsZpFJYhrqSxLWMXPaH9b7jrARrvZbJeQt1bpUcVXNMqM2r",
  "key12": "65QmaWzyhfjf45Zu5i6y1XXKg5madww3Tttc3cvRwH9bUVsHmA4STEJ2rAUZPrSDsaPFf4fw79tjzxWqJjM6zQ9q",
  "key13": "4aEZA8SwQjNiVKKTinBqcKxCJVDADJ7fpiE7G6NaBv8sZbwRJQikqmnL8C9VxYF9He78NyQ1ERnHh3ruwj51LVfR",
  "key14": "3D1KL2FUJTd4zHrzxFBid8dXpGZgg3BSPgP7vs7mQc6G2JPDbJawq2yDmCCeJkZAFLgLCiDnkWNB4Fm7uX6ti8iC",
  "key15": "2PfaQYnjWmSY5EBEaX53fjDgX9nr4H2uLrtCrtKVMuq8Bi5VbFtZrT7vrz7u9ChRYyvmk2UnNpLu78u9ToN61w3E",
  "key16": "3qQTMpE89xftirGpJitpsYmcnXCbPxuoXPjv5QGP5JY2oqheRaSHrXMMgSDwxh9woTS3znmKKqnZLcSRVMyLZkrp",
  "key17": "Zv5BgNroqVra3KnTQPaR6JcC93Qk1W2j6zjQVRGWSaHo81UZKBaZbzqXEvEaNaYNKZobGmYoykmFQMcDQsieGab",
  "key18": "3yryHH8skTDp6cwbKrXwm1QMfts67ABy3xj7YdrG2WD4CGqpUTqwRqhAtnpCdNUNc9gze636ZZGq3xr35H1Jk5bk",
  "key19": "5YzDpG3SU6us8iPWt5gUaEfJmLhCXGVkVssFPKgtPCPtRcSuSdmuVBnCcp9nTK5Ctrzu3kXiU4zTpsrjFGWh8HeP",
  "key20": "5p76NYbKwCeEN8SNRRi39YiaxT2u1zWykZSnNs8KEWMXcmv39WqTm2CEaqhAj1MK1f9yPEqW2Fg9GZk5rffgUJZr",
  "key21": "4evrMayPaRyWSZrC3M56zobszDeVfniEaYPfVExFQ2RqAZKStkP47T8kZt93M7iUphfQPSndA3dP8httoc89omzn",
  "key22": "s6u8TA2g2g7RNVCM8EKLYfWhfgkycfzcq6NFe3A3XeQ1h1ifenSd5kQZsmpzXtEXqEqk5T6jLmR8dRZqAe5uwwF",
  "key23": "2XKB3kPvFKSdsVksgmVqeWMbkjsKwn1UXFXLpkTgL1kjvaRFDAy2JnCJGmMRArkFp4qthNLrxVh8hCGAAUXDd94k",
  "key24": "4FdxnBKVoynNJHaMYB5RLFi2bkmvJUudsQR849bEycYnGZ1zFG1nD2m5jVHbBsn5N8oeGMVPSjUsuff9mPAi27VR",
  "key25": "2zpf8yubmJL6MdKpSdE44jhVhpeKm9dt7SGBPKesiUM1ofGPpSQuowmm2BNvMmKYjxWfka5RBGZ4n8pfpjjVputJ",
  "key26": "342PVzjseWkCogJMFZ3jjWBmT3idfYckiiR2rsZeGrJst28bgosvX4V4V2ymajkRn9jevVEuLv6adAqu97wPY61N",
  "key27": "2b648JTey9RfSN4dNAYTZwomG1YJzYrMcUaESBXoaoYeXLjFDJLCongKcAKQ1E4sPLnmqXysciZnMP7rz4sUffZd",
  "key28": "3LYkKtHCqAM1Bjfsw6pVMEsSSNkzdjsamSuNT3eD28vRNeGpt7FJRwhzaPaqB4u4wTM6NsKXDzF3rfsodWGDhcn5",
  "key29": "4WJsy31meMeGG1T81gPW2HBufXwCdz8ivVz8QxnZEEPNzBZ7848ef96Wdhxh7gBMqVV83vshDnpBLqk57yF1Dnqw",
  "key30": "2MkAPbTUU7hhJnzSgkEjsioBfYvCsdCUfPx6UBcgHmXrktbRXGXAX4VZdSvNtWiiEeeYnhJ1PonDHwhWZ3Fms8RW",
  "key31": "4DeE1x2jfZ6trxqtudmu4oAbXFpMvEht14kamTs5prDifmTPYwFzHBKbcJgeNpE2aSmwz3kBE4ysqfrPzDJKMtjk",
  "key32": "jk8x6LiWWvcsJ2S17NDLLJpqcpTqYGpZuEzi75sLNT5jCjXRez1nB6SEGGU4P9SrNttw9A2TDBuZKTc7f87s4Xs",
  "key33": "4zjrEcHrWs8djKWp52zbxLNWhMK4yyXXaNXoZ82FBrTAT417XivJPr2XtUqFQB2oQmJaBwmyL8wdq7EXHKJNwwsX",
  "key34": "4nrdqzWAu47UUCGacsaqFkSuLHtiEsGA5JCJPAzy9kz3iVRCwU7VbLeovy4s4bzUXTsdCUZTf1uEznQV8o1bAmDi",
  "key35": "2U1Fq4KYyvviLBrTU3uaha6mmekHroEBDGoFNauTbkyH2R5ob1wDKBmfZzULwpJHtoszgBth2GtQsfhtW7USt2XC",
  "key36": "3WSiqJKqxvKi9cojwMFLtBgnxQAu5j9cY5qKDMU2dG1gKkuoq1ZnFpds7dXisPTBrKpVUC9Me2njNL4DAyMAMzat",
  "key37": "5FszZNbM5dX162WRMJSnStXAtFFokkrowQT7ga1TCeBzay5eGaT8AkPGfn8azN1UHc66mATWujeDEWDy4Ur8bvAd",
  "key38": "YDSVKTHakFQ1HG7dPt41pBEmN4hiC6vbaMV2JcQBQ4hdXhtBhVzszc4TKmRdzFJgmq9xitBzDaRUAJLnLHA9U2p",
  "key39": "3jMpxspiF7LebJW4wxuA9omSZFRfQF1FoxmXHuUiCAPDu6xYviBDSG96vpUMKtk7XWxaNJBRQg1TTHtezHy26G5w",
  "key40": "5bv3ttLEphCAXTDabMxPLLy7mfsXQcxrG6Z2DW1invUpT4AY2GfCx8i5vEZypHFDz1ZoGKxouWZA1RxLeXmNWnsf",
  "key41": "PxHbt2DU4KAVhV9dLmaayH7NRkYfUTzvqCkrxQPeK9qRCcKuQRNoJT31X3wZAMwUjGyT3Rr3ktoas2SaAf3rqj6",
  "key42": "3yix5FzLRmTTeYfSuoL3uiwHS8dPKXnvmRdQrqyyh2mmCXUPQwHgCHPQBKTQw4WG4zqodWoaWR16ybBBvoMyRRqM",
  "key43": "Mh32kM3o751fGGnrKbhZfEoRi4pyen4ApDoQCuCWJ4ZHXkAvLNigEeJ1uW1Z1NEsDenTnvyQAcYCkRNNTNjXvn9"
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
