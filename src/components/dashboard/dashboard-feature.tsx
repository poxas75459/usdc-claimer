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
    "2vHhYc8n1JjZX9udsBUsVKuCLfg2YqWNzYGSL3xhn4DQPpDF1zTu38G6CxiaNGtgWaEYXfbqT6w1BSBoez2CtvyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QjkM833DGsGL36RBmdW8KSiZejLfYSrDoiTCjG62FtcziKofMVA8fw5ZGFax8vuY4BrpHCKsm19RZJF9kD3fRQF",
  "key1": "TcWt4h2uajzwHsbWuiRQ2TKDaXDEmw6utjfPXHQDEe25EvqxDrQDKYA3ivARnVXAfRor48WT44kMPQZrsfFZjgy",
  "key2": "2ivd8xzCJj5ttATtRGKtpE6eQxdypynN9PRrnkxdAJKDH14ujoCbG6Kx9bLxZEVjRPQAPnKVWYPsvBajLJohmaUK",
  "key3": "4ckjthVyApMgNmRyQ2dmjL6CQtJ2MSB4q3LNhL5wTbgMUxivrtJjSTMYVnZGhH9Phw3SpKSvMrCGdkc944j8pdU5",
  "key4": "3X3Bh4T9y9titJ7odFbmyFpN98LotdA8qQfmddfREzN1xJYhoACD2Zed6L8P26NpHUzj6Nz4pudkpx5iCFiHYQt7",
  "key5": "HuVdRRw2k8xHW2gFG8335we57UNv73w3gcSyzx87VRdHTJsmVUy9R5RmaJChgEMzJB7aqACrWPcQxMcDmM4MgSh",
  "key6": "62g9VBbPBZqUcJuAkFHjUsU6BTNFtvbGd32S3gQrU8Co6ogGeu5BEeRPgcN5JMwwy55nQ77wUdtxifUaxTbMLfvG",
  "key7": "3yDmYxAmqqoFZ9K4cG2QTY1u2ndYgtL48366me3uMV2EZyhKdZ5743YQJXsvVm62LoibGzoRSXhzQ3zpHE2pHzF2",
  "key8": "37awGdsrnEW8izTvfbZrjRgGPG8DBkrbRArFuRAtfne3QPLzyM53N9HRNAM7pPJAQQJes8nFgZQ65GaezthCcbo8",
  "key9": "4WQtx2gs1fKXGc5R5bF9PdivXkFMP9jLJ469Ze9gKSqE6pf7wZBRG83pXjQ99FZMPCA8RghyRTVGG8yL5EWrbzuq",
  "key10": "2rrf4M771qzG8c7gVSZmM3XkXXPtQcty2wW9F4x7qsCdELuUtScz4bdTnt88nqyEr9ukNCPfWbbpKjGkNK5RhD1P",
  "key11": "29vZftsCQabG1W3qgkbwHeDWuUsvRHYKkmbtSk7ZWBskFhoEYLY2wjGqnmuDgC36XqwmpZNK1w9HrifAzfoRBgqB",
  "key12": "2KuGQGUx8MJFfNsFVd2Cydz53ynrbo3EgHWJD8jfVV8HDcvYUcRVnfAFERVdN1icbBFc73ebwgQfyEKWqjDepmit",
  "key13": "9wpfNNZYykZXYeCSZscAUV6BgezzDk3Nu4BmbJtq8xNdhj5hpUhtTm3GyccbdCB9hqKSD9RsmE5hXeC9yfbdH1b",
  "key14": "3D2BSU3FWX96zSd3MMzBCkBBJHrVxQxBzrNQn8XQEQDDVf2ALSXnptGqLqaDa6Go9SSaJdP7wVKfrbQiHmWkgWii",
  "key15": "3dJ9dx1XmxF3Bhg4vk1qgGX2DNquh926hatHSWahZAvSmpFPtRdmWmnqkMwDWhtcH2iJsxLLNR224cBWLWABvk6M",
  "key16": "5is9tMsjmaT8b6Z3p28JDtxrr8Fm4o92JbqNW83g2GDUGWo4SGmg7j3WaAN1bT8HaE3pa7CGPaKQR3NV68r48AEv",
  "key17": "2xsYEismtg71ddbYBxR88z2a6JqhPZVVf4uSoCQKVtCgbrcoV64akk9GF5AJyQxeKqxJT4uWWbNj7HoJnFzwpBK6",
  "key18": "3eTxHzms8Z58wGH9sdpKhpCsQRw425W36s4hauPJ2zNarqBNKkv15qtciir16Amo2hrNbRUZ9JRWvvEJbXz8M4Xh",
  "key19": "2vBLeeAWJQF49PLw2T94uiZEq3ugDtyNA2YosceH6Kam1ehZN4hWURxPPiF88Kt1fUqCHvZLFDVpmv7GsrsjwZUW",
  "key20": "2a51wtJpFdNqHsrnz1BZ42uNVkkXuA3LA8F4m1BNSguFk8Qg9VtKZz5Jv3vxvonm5jJJSw9bdLvSqzJzbwpFp6kw",
  "key21": "2Q6C661PHrc5GJ1KJJ2dAMkmhbotQwqLFU6J6kix4gDvd35eGXJAbVxYLa4Y9evopmYQkT3MPLvcEkF6Twh1FkAh",
  "key22": "3u8gFV9uTXxfRBWDkRc9RbgYSyoWSeyePS58NVQCYSQsy7YwzG5dyWhrkXD5Q9hScLDr77PerJMbZtqfAXbFUj5n",
  "key23": "2H5FEd8SSPrRzhzXSgG2rXL8DN8hRSCkk5NS7rngabgVtyknuts5gJBSenAufYnszqWYqv8jKYvj5WGE1Y6SZecm",
  "key24": "54L7xVovszMvn1Xe3BKzGfAxSCoFV13TUigopwUfiBnLGAtB3HSHU3HVSecj63FD3xy85PjLm2BHv3VcWEx7nR3U",
  "key25": "336YVZaMQ7ALM1X7nQMQjDcKay4UPZH3SgbMNai6PTCJ257CDoT5d3HndFhcbupjdxFkHo8jbDhedVdv3wDe78wH",
  "key26": "pCbmbKEocse2SssEhuZxbdhwyjwVthcoK8sgeqeedMzqaRMKqiN5p5Ztopcn2vEEiwaV4MzvcYX9WQ8ZAEDcg8R",
  "key27": "5TU75kDLZ4dPZXa2gMJuzwhe1Z2VNhT94tRKNQFz9KGASzFU7pPrts2r4ZGCZHzb8ZvtqaYj8FmZtQ2BW5zQiEQL",
  "key28": "3UWVkxtVCWC3ceuLwiGNgjy3kKoU5vx1DuPWe3az575hZnQymv1C8SucYZYfKvTnvCx6b7TmHDtTc4U7rzyT69PV",
  "key29": "4WJ4bwp2XWSmmNTnMPYmCaox1FFJpUWSD3AC27p2S2NFNWhnmmVhPzpPddNbESB7VmzTVUSwkaTrpLaVm4vmUj6J"
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
