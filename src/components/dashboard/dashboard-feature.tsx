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
    "4pDvkjtusE7DbtRaJUG1je39c4futy6v4bQqNXUbLRkJZkefoxfMBhHZ4GdNw9Sf72C1aHfJVMbL3NHgZeQUrx8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yQuaFZ5ZQ9xZm89m76bGkaRJKRJPs3uy2M6HnnTgzjCNAPM4zcy51NvWQyxpZPkEma2y5PG7xox4dU3WaurpN38",
  "key1": "hWikyYQYL5EddB1mFWBg7Ngpd7e5MRQRSud2jPQG8fqqyUz5Q8XHV2JoXZxR9Woh3KWxAo81JwG8HPKJgwMziAn",
  "key2": "47eBSRZFrRTvB1e1KXKPqnTuykGmPyninR7tWcJFFdv2NsKV6PaYFNJEmqDE2rkoBjt9TuVZzLrvM9FAw4pLM7rd",
  "key3": "3Vx6BbfdhyFqGSBYtMjXungkXrjPb1ymHYQxYTe6pCcxx9HHzwYB4HJXtPFdp99tmiNHcH32DqQtLY9qWnt3Tir1",
  "key4": "62P73C4TAHMPwRzWrjTWbBESjMEpQXrPKeJRWEyXDTQo4rNw3rJVgMMSfwCf1Q1zSXEns1D7obfb33uELUxhZX51",
  "key5": "qWCgXPuo2Swy3BGnYpX3oQZmCyT4rs2ew2vNutNrXMF3SKabdZAtZzQEy2KpFEwiPeA4CamMdcMgCgHv6f6E5Ju",
  "key6": "w9yJ35H3ZSfCA6xbRyeU4qQPgQyvtdRJTck9FWiiMrFcofH6uLG4abm1z2yj9GSbL6hKdHJxRZgAmFfa8Xkqc4E",
  "key7": "3wnyrK8Pf2ejxHx7NM2ZeH2HUGbVwED653vnBsSKqoa6YV2Jks1x2cb7fZK3MWsL9EGU9fWiACAGdKgsaDarNxw4",
  "key8": "4BnSoaqeAtxCH7yHU41qvxWGS3VwpEqAR1zZW1AAC2qvP35GqXi5doFinqwnbdHWvHDEqrK11Re1Xqee16n5PTSS",
  "key9": "2fff11ZNFrdxBgdo1BmQNUm3K8eW7FmYTAtZuvWqFp7bkbim8zXw4SFSdB8nBtbqNo5JEvbCKTvhmYmfif5Xm1By",
  "key10": "5JhHJ1AgoWCcSexXaMomuuZChrHFr58sznpfEMecjMV9envSpDFaL49Atc3rGBPLHUJdmTTAgYb6hFiL9xxW6cwo",
  "key11": "3WJDuhdhhNf94FTtQN4aitbGDkZkvLsZyXwFz5SmDNRRRkfA3kUn8aMVzAqMYQJYw5RYHnqw5Lu7pVMzzSL3xvj8",
  "key12": "5f7bi2e2TZ6W3dSg2CVK2FYGAJVTnVEAHewctnjSXu4D2w2nb7BBrNJjVhaD8b9GfvZ1i9HygTN6imorWrLaYhQw",
  "key13": "443GiUTqQtmtEJ9SUbkBjWKVrFbpd4xYqzLRncgBSpYLSeuDNZrP3uTDdeUcBEexVJ1fKqSyFB9dBgRf1WXpD6Gg",
  "key14": "3LGG5UVqk3Z6KnpCtrwXGAvfjA11g7K1tBMEEtGvG9tAjn2uyniv4ySTR6hEXUrk3zRdDytQFtGXBdLWxRGBVN6T",
  "key15": "3mMgQUEa2Pzk8Q4wySLC9jLUTRANfs8zmtg7rSedr3SNPxGNZ8vQLzgTv1G3u4HuqXPpATmYcY9vqiu4meFfds8N",
  "key16": "5KxRrPzM1t3pfpK21uYzGGn1TL2JNf874DUpwanwvX1pVoUjhXoEeT7hpNaAnz7nqpkSd29E5etX8YDS7DoHZVxB",
  "key17": "5arRFap1baweQFCs333FteB3tXEH6htP4e5xnhmVVcxrr3SLVkhwphnznYBca38Akv2TVWznRrDs6QqavSrXUQg2",
  "key18": "3L2TtrkU9u6ecALotTqoYTTgY9zmTKC4p5yh2bXbTMPhjSwUSR2CajuxhfGK69vTcAoFFWmQMF9NSz8NcRLYcnYn",
  "key19": "QVyBgehj9nPBF3vqxx5jYTas4DhyDe3maUoW9qLFYvrdmGPLokXajQkpmgeJpJtnzkwC1fZAqM8YPqmEh7Ldrv9",
  "key20": "4TvFAShmt2F4FQwUD66YMCrfC88cPKPVnEgvAo3UVXvwZs8VJsCnjtX4FCdkZmV7fLBYgFjqRfXFjbR27pvzaXjA",
  "key21": "3DdsqetS3Y5Y8A9Y65XW7DAKUQR85Xvkk9KUmR8yQBECFLrtRKGBRAN1NDAfJr4nUuzivmtJkCioo28Pb9zKhcTn",
  "key22": "4Qw223MG3KWUqNAAwi4xcwbfKNs7zww3FKx9GXBLc1uBEJ2buPohJZSFA3EaLJQFB6AAPZzbcY83gY2nAubjXCSU",
  "key23": "28H2VhySRtXiDKN8BJPN7goFqwoZeiiwKFCgwPoS3ihxCxZofJMHo5yMGnd3VR4HSACcQLrkCribS6NzYL4FU9dM",
  "key24": "33R3C9tYhjDpCr4TKr55S367WmjDkxQTSwNDDgc3jhuFC3AKxRNk1KW6S5XsoRHZiAFVCHH7K3QAkcPjdVQaq8sc",
  "key25": "5BK6YSeRTNeifHvGjN81L5xpCDF5BCkkGUZnf4529gRnnLySJev6r3KDviQSTVAgG4ViMDdC2S3shMuJ1XRipDPx",
  "key26": "2dTmamurM8rEXMUMug3UpF4ZML3AMFFwr9ecQNzhbHDgCHgG4jqN3UxFngWLJvNbHaPS6tYerYdGMJk2eKqCrVSw",
  "key27": "3X7vZgzxmDq5PtBQoDBpAKYsCoQtg38jFk5EaYz9CFY1vEzbZbnu24E4x9v82WuRjphv9VeQf8JKxR5oe7ZjjZtC",
  "key28": "356QBYWu7KywsDXzenDM7G7T2AMDXLmLZNw9AGhvqAc5RxxtKmg2sGPTXBMyyjJqDFFdFFk2jN6Dz7oypHgs5rMG",
  "key29": "Y1CTmQjDRc9M9VP3brt2wt4uRW9uVvCPJTVxdnT8Bz1Wcta3MC2Ziapb9rUfGACPJ3ZaK3Mias1VPk7B65ncfuZ",
  "key30": "5cqBCp6vzPo9uRFmQjWgowqetMF7N4VaDts7rzP6W1q6h2UnG4JPHaKmuRjgoVNo9yFcoVcmnQPDuXYw56HxZVy",
  "key31": "3dtkBdYTR6ekRbC211bYKrggUouiNiAtkBHnivgBvexZYyn8hXX6gJWGzTHRmNTiRRLPFjoDHCgH6N64ghDJk7Qx"
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
