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
    "2Y3nsEB88TaYCTRJF26it4Ge3aRKPTFKxo3npK26nhEMw1s5xXUwqWEVGxtaonX5k1Tt4wsTec5eAwp5aA4CbErd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N8F46QsmvH3E1FNtxcgdXd2BZYeyJY4do7kr7ihrVo5b4sGUQTeXCfkanxknzBg77m3nHfBCn9fosa6vCPZF5Nf",
  "key1": "3T8QoQF7F31ZuQfUFEfKNsMRKSxczxR4F8pSLBEAWbqTMcTGH1pQYRePexW3i3kaBXPDfhJJJmhb74gRcvQPhYAF",
  "key2": "5cVfDPsd52x3q9uEPs1qV2mL6zbakJ3Hu4xzVLC8uSdBasbf5mrrUa41mrCd8d1fJ3nzBe4QZ5WWXqwUq5pMedUm",
  "key3": "4zqNWtHExpZg4di2J3T41yKxx6EcfaxJhJrCuiJK9mGZe7t71JNWc1VdKSt6iQQPsqsqN7CFzuvrWFDFfLK9DjSR",
  "key4": "632zhQKNcZZ8HvEvuCATL8CUduEvjEe1iCskVLMzdFQ3CcFgMAJzLnNeRDFfvFo5CCjfUWjVzv8UVrRX5svcRKMD",
  "key5": "3XXbv2U4E9ZvDwMkts8cqhRnE7e8bUfHqZUbBEtbs9s4RkSWMtsqDp941jWjAvbkpPmkaZqwe6SfGsnyAomYUwNf",
  "key6": "4dczXTeA7uD1wr3sn6xeDUL99bW8A7pUGr4xasmnNKYwCuZbZejCLn2faNoeUksHQRHFCkYKWo981mLbdaCVVz7g",
  "key7": "2KdQYWiqRt2ApUkWQt4fQwBmQKPj7uPavP5gVeeDYQbGJKwmo2EPzqJkx6FWaLfVUgEYZ6xzd5w2eHuXRVrqKpN6",
  "key8": "vJiESEnrrXdY1WdkBkfeaRRYBpMUNQcoL9cQuD3NbaezjuWkjCVCzhRSg2TYbma9XL9g7QPPHKQY1aAUEKRBd4R",
  "key9": "5Cj59MnFD2UgaaoZZZp5MCcQEo1J3gWxxF9MsBMmRTmcttnc5SiHpS9DYS64DdwkrfNdSyYY3jvaqhkgAaXQXm1A",
  "key10": "3uTqK9cUHyJkCDGtiyzgrrUi89QVfa13wGZmxbdTFXiTGUUE9WiatV8YsfQjyFWC9pKs8JZ3phuDAH4kqV2L62br",
  "key11": "XT1RGVu9hWjZYBMiygu9A1pch9DmoSFYsVQWyx9ThRhvd2TNWBStjjA6pcvesQGTKT4FV9JSg68rpxgNea9RdqW",
  "key12": "2627yAVEJtFJqaDhKpoEuNJ36EWSiJSmCH2SG3G24t4PeivL1dLx1ZpuviFevQXwBtZvnFdzzJDraEZE1zm8LNQz",
  "key13": "VfQ2yirNXZKPvosy9ohkW4uFKuW6zGhnjSpcKVRUiwdbVs7BcNtjsXAdaT5swHfdNfpbXqWdBGk7BEhFaGxqWpv",
  "key14": "4vvMrnLoqChA9Y44h86PhQjEFSN6W4vyTE1jnF8NWoSPb7fZ4uSGjUHW7dmBGCTKdJajSjYg1GLNfSQHi6My98Vt",
  "key15": "64EtzME4p1GTQwvmiVF5i3fNez1F4nHmdzv3bJoi4KYQA7fFePuPKvggepWQULfyfVbHJ1QuUSo61UrEpW7jv9wV",
  "key16": "27kALxqQiZEGZRNdbBfYvJxVonv1c2tubsUeiEYe1SfQyxxiLbckbqNtcQEskRgwKm2ADofepNAwezqincAmPNgs",
  "key17": "2hDgV3HNAb5VP2T5GR7CNTWUKvcDb91EhhDLLBzwfVWZvF4y2RpD72tmUadN7w3Fyzy7otyeA9FstPo5SZxixRPb",
  "key18": "2Yy3Ddwo1yz7E9vnj8KUfYqHmi3vtYGDXoLqDoMFBLMRX9yf727CZx33XeKZUBqjWyZyUYAeeabZDb1tfnjd6znQ",
  "key19": "4z2w2dxkzKfWhnbFdtf7Vhrb7g6kE8554J2zkfs5rKcnRZ6HQnDuXBMfuhoKEqJkgJob5JmCNySL7oHeQZeAecVx",
  "key20": "23jgVUXiTrjb4heCxb41EuP5hJpj5Tv69n2b7NGCJf5RgK3T8YbMsfe3k2pFHJMTiy8JHWNbprysu4hJ8hXb2fog",
  "key21": "5vfVdP2H1yJFShvw4X7uCZf5AjHxwqrrCnfrpHwxqvvpWC6svFSfAkkb1VstNGuE5jADHnEnW7TDYxmbseCMVKDg",
  "key22": "3P9RxGvcF5NsrfkczQE1PKTZNhRiZTNy3hEPUBwGpqSRpLzc46yvpwUkHAT63g3HQZUPofavxGQZiW7LC5fVyU8C",
  "key23": "CXGccP6V1cBTMBsvTX42mMopMdZKWGwFyz1co5wfTyTdmcvUc1KeR9djjyXg7tvqXS2NhUjjJDq5bi8KsUmqXDS",
  "key24": "3geXgL9fsL7hJzSdUJLuvjj7NnNdexd21sdjvmwtGww24DDpS8C7HbAX8QQ3QbEj4JnqfuhVPyQBfPSHDwzM1m5f",
  "key25": "3NnmhVZquYSZsVWRxbgD6M5Bx1W1MmVCyVWSpvRxK3KZ4LNuuP1ReheDe3aJEANLwPEaFoxSFcVocsy3TDiZPpfh"
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
