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
    "48FQFT2NLg58v5eNqfaq3ykSMey9t4VVahsS59JaYU8QRqh4uSQTJDsPNymizZ19RaniRJEFDn1yjd9fKzjrch2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "463evnwqRoQ74Wq6erPbfYN3DKVz995k6fBkeTkxqqoexQFsSBp4s6i7NcSZjLyDbjdfq2aXSPyrJ1t1XGQxPZk9",
  "key1": "3QYdt2NpCmQrLWeJrxjSuNqHjtG3x1GvL4Tv8avkgohSDCrogcVQR67QqZ8LYynf7v3VvpjUgAaS4sjkJopDiiKd",
  "key2": "5DQaaWL9Jb1X5m5pGApCD531mt7XQHnjxVFDLPqxt2DhHrtHn5k7TmZnghp6fZQFoYw7Bvny3vynATCi5Y6b9s41",
  "key3": "32XNiBwS4qFzGN6rMyRQhS3rWvQy2zNJmFhza9hqBtHhAnR6fcyhh6h3pHP4FDDZrodMWQjmw3Qkd81do2DZtpGx",
  "key4": "4id6dR8cCkUUsXvrq8Sy9T5jxStkrpbV2xox6sb9Cvkwd39XxdabKpxHRU3KYBnKjVSrvQLeFqpQ3ESrGi3d5Xap",
  "key5": "RVSQcSF3uP1do1RiBSRAjbFaXv4djfSsx8jC3c5Tucx3PXymD9TmuwpXPZaYnTnAqMdLRjUbQbZ7q9tLaLzvzSN",
  "key6": "28V7wB1EPBinx9LsiGqRLXtGfvifbj9nPUDWe5tNTsYQC1DBYujTpRd8mvkd74zd2iiVrMtpjkEtZm7cU9hUknLd",
  "key7": "qvbP6pGy4WF3d9XsKkxUeRW3LEaJjgHM8SnD22PHUikpMB8hd4jox1ojujAQTB5fPgrnL1Lpor3QzjWhNeEcJYS",
  "key8": "4Hpv4xWP1UtJuKg5eSiEyUTHEedKfKZbffqvT9N62PeLFPki6yNxHxwDcKfVYRF4A7CBnASAKSabysL93BhUVTUZ",
  "key9": "4paBUBHJnLdioT11KEnEffdsoD2iDnwb9VccXpn5D9CbBA7HhZ8TrP27QdsEeS3iB5mfsiKjX1ado5tYSMse1Kic",
  "key10": "4NNjY7kbgkjKkc583tzBdM5i3ntukCyR9RwEoA3CA8gJmbhxqjJyg7rSjdps6mscvtmW9X2YpUDEMofjqhan4ETP",
  "key11": "3MceUWFMrehfHuVdHJFk6eZqRJSc3rPZzrURBeJ7TDfFGtXxMUsBELXjvovXz1yrnNM7xeQarRnHxN8gewHEtpqi",
  "key12": "BPMCtMWRUeafD6n9zvxMP49pUe8iwSyoBLAxe52AUgFsTkxqUx5vpLTpZssUADdydYV6G2xAgJNaB5YPSoZmwt8",
  "key13": "tdDpvAF9eRdLHhsi2Fz8V3DTaVrrGrW6T8ErgkuRPZR6b9ywyS7tSfRaikwYDsz5ZrupCJCLuPimfhKW2f1zBP8",
  "key14": "4415iBmUFsxFxA8jGxnQwG6g2xrWBWSzqDcgZEobS5bNzMdMDtJYPzEXk5NsV7tN9JKbacJQEdfeqMP9nVvJrpg3",
  "key15": "5rwBjHm43kDPSeqYrrSA3Yfso128V65ADMCSTvLFMHneKyvhw6W1j27PtKDutKdEVbDfMqvxx4BkVyWa3gCZEJZH",
  "key16": "26uinpU7a1tXSWHzeZHqtL5nq7i3BQG5wUXjGjqp9G69xMzz4cf4BwSvR17LFK7MinBMzfT6hjnndWBU3mBgrVv3",
  "key17": "4TdKTZPzceXp6aEa76uUkgCcmJ2wukCReSBzrWvj4xvmzUFqkpqeFuAR4UeyRnmwfnoPKFVTBTFQDWxRVR6JvuAq",
  "key18": "67C6UkhJjoWbU6wNANrdEMG36k9i4Jkj1fscAxFzsUnqrV8B6cDTt9fEHL6i5KtRu351pFyCuEJ3kqYuqyCev6Z7",
  "key19": "41TSWPvtU6bbqDyywKpb32fNpjUcJynofDt4WNDAMDgzDqHJaW3oojZehTjeG9nVWR8Fa9oBt8fXWesHe31JFRkm",
  "key20": "4TbMmNw2gg5VEQfH7UJKWodX4jASvUs8yd1oGVNwcWkLbEAWzynro2cuRagkW49KRbcudXDxgYPhHD6vKZCHtHmb",
  "key21": "4r9EEA5sdQYseg7A3PJw78QJGQaWhSr2hvTfRXbo3qcRYAitpW8kEg5JPycxYMD47mxaTbyVCW5jqq48WzWHd774",
  "key22": "26eQ4RQxmTTYFvFzSoKQJX7w2kUBtpPYPCDJ14V4zkfwicYgBJqvp4RynCVtWT8y4LoWreG3ueVCEwpC9F2hVgJT",
  "key23": "5GZoUr264hyb6sbSnSME2PrhxH3JVZTkwUBUtHEkMTDpV5E5GENUM23p6jS3zF6yeYyjTKxTspSKbdocy1zW2UWV",
  "key24": "43isouSNRV6BA3EUaNB2t11bb7m6neotFmBDxYYwSVPpY5S8ibo5xHrBnZSbUDJxAAEqoFVinYPXPdxeL9vfwiUa"
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
