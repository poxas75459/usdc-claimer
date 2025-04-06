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
    "2eUFH4vpFZjiAgUqNekYgmdtDKMjgxLDNNDzUyghJQFxp9e8acVCtsRMj5Rpr5TkebPWFQjmcXXxf34CCsRYjwdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rJXiTweWqxpa8ovQHtVrxUW2R4Z3TaJgVkfDWmxrLYJWW7rK8rb1VtNRDWS4KTQqiqSp97mkck1uER9d8ayHoM1",
  "key1": "J62FeGFwdXC68jDztuptVHzYeniEhHrahkTx1zVVBA2CuiWNgNsA4CX7JtJ15n1xrNdyctcECY6BGtegpbDx2JQ",
  "key2": "422A2cTtg1UDo3Xezu7yiETtFY3sHdMxbtXk7Cqur4mbjiEXWUXJ5LTHAAu37TZZRW4CjeywQe8Je4KPHvu5SKmX",
  "key3": "21kEJvLwJYB11k5VgEctSSoyeywsU6AfCb6TTwami17nNE5TGYyMvdoXouaSexSCRNdBvbZ2guaFBH3ABK3HJNCK",
  "key4": "45mLt5eGzVoueVbM3G5kmTqt8BYXv2bLcbxLVahL9VWkavuvMbkzJPUDniCBQ4aZfGMUW5ohX87EtXJA4eqGzCq8",
  "key5": "67MvcCEwGgokpFttfWrTr6WvtHUGxtcEP4t6txRqWHgoMZQJtuCoUkAAXcdCjzxfndR3WJnoLTpuC9u2GrzmKwSH",
  "key6": "BTXm64yM1T1GVqKSGPdrRe8M8r9DFKL83wtdbFjJgSskRiKrDaAhrQya8RBTqWrKbrLYwGqF5nzmb729Wj8hCnQ",
  "key7": "2u2bjn5dJMoLNrEkpiBP9nPXnjHAZT4DfYDYavbFWYk2S1hWqswt5TrTHb4napY4HRwCy3VmHsEL5Rz3ycXtCtzH",
  "key8": "3PLLNZAnxkRH4gxk3UnbBzMRRtzDsUj44FoSgaep4XdJpVpsdKpzDRtnjnpusEka5DtKG69RfBFXXx8UNHcsqdeZ",
  "key9": "sKeuXzjD9ct4aRFYMUjVZtcTsnD2WW79NwPDatohqobjmBcSfUEVkX93s7fvzbTPyyWHeY58Nf6LR7aRVU5fooc",
  "key10": "5H4CikUr2Fcf4rn3Rqo6GiVVyzVSjnuWV2UH4JRgzrtEacKmryKvJbJhyV5pJDKEThtEGu9zr1N5SdMoWLpgenJ7",
  "key11": "2bjiArMVvoEKozjuh3v73hq9wKaUQvpBVJ98kW9VuYtPD8KqYm5kJyNF4dikWBPQiVBciG5qDirzMN7YcJtQe13c",
  "key12": "EajUHXXRj4TLDpVDENZFRbVrJm31ziSoVE8Rvf5xgUkbJsLArMb1RUTcChqM1XBU6TBS9PNWGDbvBarsp4pmhst",
  "key13": "eQB3TEbhosGhC7r4paPmAGz2CW4jiPLjyPuQ33vokeKKXM5c6gynzeRqStfYTERfDNhnzPVhEaXW1WWP42aF9DM",
  "key14": "5syzBmokTR8zxYbamxEMTNtMVAfaMeRnSQ783nB5mjWniJZj766tPFhzYCH5mdT1vZq8bsV3ec7jbqcgYLfYhXEd",
  "key15": "3y4GwUd47Y4VFSNR15e4CRYiBjGMUmgb8TcZUDEFRV9Gf65DVGSaC8vtG6Du7isev2ViNW8dJ2w1ZvHfLJL4pRba",
  "key16": "3szUb6QYGTcDqtd3k1FSHNd5tYWoYb2JT4Arg8qrqVGLMb5pxLDtdk3UZEbHfYWFZPzYZEU5m14rc2a8RTzPojjZ",
  "key17": "Gv9Evw8porD7z3aQAxyqQp2Tp7G4yCf21LTuxkahGFJEJDbd3BbVM42CZy3DCQZpPxpGoYwRhJvoxpY7dWorCGm",
  "key18": "5AMjEwdEY6SCD5F5G5fZpXobdGjuLTJHHv9w2C6gWtdK81P1BvbXsDmZLKHE97VyUqFniBg6XyN6RJcDHScxHHkr",
  "key19": "DvZNg9opq2zXi9v1gi2j4GyFwxXnVtbhssKyfom5xSPgnxZKrn4epVHmYe2yguxYYdyaA34Y1obkgWkunUXBEkn",
  "key20": "5vYMLE2VqgdgBjrSSF5JwKLM55BzDxJYXhnhrPrK3dkrEtho5ANrEZuY6nxkKrP2XA5FKahLFW3yFBcUEj5k4kxK",
  "key21": "5LfEvfqqFqeVJwpdqPmJbTN1k4L7zE7T7xJ9M7k5Q9x8JpAKiDsWGVbmVYe9K2JnUQzpHs2rpjyHuYiwGAxpgWMD",
  "key22": "4oxby6QPSXFUAFFf1SCu3DkBiCbAg4MRSCxLfyAAuFZ6qomQ2uBp12efEm6uu1qJUBD8fnoPw7kijiUWDxdVovho",
  "key23": "2ySwKaoQ3ryfbkccjvmGdSUnJ3VxAScGc4NWpcXqQ3XT76EmqUjFs4XYY8ZapSqWz46wakNkTCs8pVAmtDqYxPsM",
  "key24": "5zLRTWJd3zTxdg8RhXyHkrWwkKLaDTb2JbNTH9jLeW2KoQ88q1gU6u6VawBf9wdACpjQDpnkQLbepKbonBcwV19K",
  "key25": "5s6MieCWNwwZsAeNMp3SaZNFbrDENV9WpCY62Rh6o5kdMigEJCxeL839iFST4J26ZFvF1QrQ6563opsPwt4NKjgX",
  "key26": "ECj3VsMLnuq5dxS4mRU5mQnJF1fwmZVabxrquC3PT8MA7dKQPqtsRe2rx5hTGrE69hENDqPpqzzfFvHiUawJq9A",
  "key27": "21roHUURc9vwaoECRCFQYreqRfKFzyDKnF1w6iTmxr1Y1FR2CBVwyGvaJ4dJCX2g6iUZc1tGc3w26LB5RwqB2oWb",
  "key28": "2DfPUN2siuaXUPEmj2XXJxguWNQLq29kZqmaAwg34xznb85nDgtSMKRVNRhyTN7hqtoNkNL9SKoJLuM39t3cdDvK",
  "key29": "5jWeJ7dQov3pgKPP5ozULZbm8Jbacx5nnGST8TmPWUNmzQZCbEW9gkTqLQaycXJYn6zxv66NEexeNALCTzRL6zAj",
  "key30": "3JNFqkGTxv9f2uJoFmbJPcvBFwDUGm5mnmKmxgoMN44wMHayYtuk1pfiPgm72585XWgQHWX4VTQnThx9AiavbmL1",
  "key31": "34m3Q9ojo4SrkkSgaMNNWGFFD2N8UPxUYkZWQW71tzgcATiMG3kCqKSU4kwv3htqdeB8PkTedycYsZb3TgQAQDfm",
  "key32": "WJHUwC3q6wUCQuuJbaJqkeb918t8qquhz1pwUTK2Lwh6C8wnvZKnWucYi7FpBtA4dcC6tjdkE4DPjHCwrhmNCfe",
  "key33": "2Sgk6kKCpLR249sUUmUDP5QPofaRu4YN3UrvVdvD4RZFe5cZWDE7bi911qvcVadD3PPXyycrifrjLQtd3WqwRXaW",
  "key34": "2JmjEfR3mNpvBWqobA84UQ3XShA6vvkdZ3ZGzKPabG26XSpE5io2V5YPj5Hb65HtdBuTjzQmMFtqxCHKJkbLBVto"
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
