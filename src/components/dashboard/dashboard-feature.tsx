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
    "VJdYy2EZRqTDATGKgpS65joEVkfShcwsvhr8Z1u6waQqN44trDjzKq8JxH7mBdUEuK6pVbp6Viyj7qWc4z5GJbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dQFJs7RZdL1zt6fRwyc4snDtvQiC9iZFDpeqx3vrpSiHBw5V6SYssG8cdLhF6S76ppaZXdqmviu3LBvkmAJqWxD",
  "key1": "3UoqsM45p496JcUPwioRk72VT9vEkRN3JeCyPtKpiFopymoyiiNbPBwibHJz2day5T39CZEJdYGkcLXQ4dNTvDX9",
  "key2": "6r3AJwivbjAsRHtYLkP97o4hzqoV4GuSyXhwk8fW3Xah9rnemyUGVvqKCrehHQEzy7HT8RTv6XoHSRWcwyeCcoj",
  "key3": "KuR3DmZXvFHhQ7QzYWpcsYtcTpPDsxrNiEpEK548jxe4M5vh6FG3c2oEbkbjYRLEfAnVTE2Z6BP9L5qw9HeYBEe",
  "key4": "3C6EmjXFV4aL4YyC1h1XcxBGGhwFMqUYJdRSAdbRddukYKyUGdR2AWsJvhjRXmVucLLEgAdu9T4Bn4DFELYx6vGY",
  "key5": "25BafwSuj7xnzs3UDpN3762fejhXh1CEELygRg5FMWVr9MeUA3AdEUBhVDZXXMD2VnRn9MZG2ABSMJuswU6oUNFd",
  "key6": "3aTQSgXTb43ccdshx7gDo36bSneba77XjM96CsQ8NZe2VCSMVsGtsrUaMafxBq7X25z2QAfvj3DbVE1pUp7u3Yfc",
  "key7": "3EkbTxQs5F27SDMYGb9CqpxaBXboJWSkRJSAgzMm6xJZB6sxsdZpKvY99nBy3KXNiQoELEYGQmAJU3moBTUuEpcg",
  "key8": "3nkAPsjf7cf1KhUcYAvVUX7qRVYYvCatDV9Uq2z9bWrTiXq5iW7f9JuzJnJ45zgFFaW6ZXBRrLD1fw8xChdoXKN1",
  "key9": "2HeEvr6j3wmRhQAxkKZFqWuRy5n4RWhLqeUBNaQPqmPW3GGRqyJKai6zdo1EftLfrD68RHNaKbuaNRNVXwkvxmqZ",
  "key10": "56tQsG4adqriqV6bor1KAmgytY8rSH7NB5vWuCP6NwdNeCan4RerJSG3DRJJ1RS3iQ1WE79oJryDmzGtyW2nwCna",
  "key11": "2bczNzHTA54WGhC1iGr3R6adQssryD84Pd1Wd9Q1T6BSEGaUy3n4hX36NprRAVjrEiT14BwBLfvoQ2rr4aEdbG1h",
  "key12": "3nbp5zSNLSEZ9rTR6yNQqoXh3cYQPbznpk559Ys44MgTH4CUQz51qwNsX4Hqn89kf72TXWYfJQUv19mYYDTDhhyQ",
  "key13": "3ep1gxCWDjTQeDLGddWo3h9ayNRhTDLEbALj8X6Fp1CBvhhraSvtBMH5rLFHQeX7E435yojo7EoWS6t48U7Q9FMW",
  "key14": "4ZReM3qoA5UkfbwpgdJXvmBZKD9grKWExZMtDkaQ3WW9irLNniAAUKjG3BxAETqk9Dg8d6hcnz5L6v4zLa5RrQRK",
  "key15": "32sUsR5A6TJZgG6efpVvhJLa2YqCNaEWrarTQGSceR6ki4CWWhpY3j8z3GRiPstT7gmqp5Uvs9ANmQu9eyvnxTur",
  "key16": "3TgotWC9G2DY7vXiikXXsNKHuyjyQkaG6Fmn3KoAGWdKPfRUhWZU4D1VJB7eATEW68yQpQd1UA3XLJ7UUyaMhUP6",
  "key17": "5WogpUvCMkdk9JP9gtHh3Y2obDcdzpZy9cRysxWnLeaPjCsqEijFaAneKgzxufqbBWUiLEL5gEnC9DdU6df655TX",
  "key18": "35wpy7hr5aJ7jD7UpT1RiyQDoyZyrZmKAmpPN3sa7r7FYzwpeuNn85y3d73szE3vUcGBFKS5VqxVaoypHNPZbH4S",
  "key19": "65YtWhenY2BDmSzCiwWqVkttvv3L5Q1aRuzWix75LnbXHapEqMPqsY7Z2BZRJoVsJwD548tacFwT86prCDZ2CyMy",
  "key20": "64fNH2RpnhAx1LgA3Ffnbkfi5cCfsXz5H62wicpPz4MYXTYu4NA7H16neiW6qu2tfAoi6HgvDTKLXbLpZTSGTWjn",
  "key21": "3t6nqCr7Gov5m6xRbuqoqu6jXRjJGXqS586bxRFDepRgdNJro3X84RnbvfwmgTdKKTTGm3GkEz7shDu7rvfoVXht",
  "key22": "diZm1xvXgkJfaWMHgbBkfpgiHosnQ5phEuA4Phxbi8rUzCBzq9fPd1ifwRzsr1RvNpjAmTEg9R2Vfv9VYTfumbt",
  "key23": "3LrTZ3QKenMAoz1Rd584FvuRPBjKZLGJRyUHXsDiC1kxxP6n26TTv989euFCJjhQrjsTzhwnH4vKZy2mBhmX7Edn",
  "key24": "Uxy2GVZdS5wx4H9VTQ531RmWNNmPcCaq6a4WqtBJQnPnk378DK3UnJU1MGQoDpopf7dPaVdQH8MbjW6wjA57y9F",
  "key25": "3dyN2cR7rKhkGbT7aJEy9xV9qm3eUdipWnxBdnkphhWPBSLBCagjSHZZ6YzZrWZQnRVqW8mkJ9L9G5HT6o9jF8uz",
  "key26": "4LYvfGFE22MwU3TiYXNcH4XeBdhYx5BEUrjsrodEigVjYchJV76QTc4Q2K38WjoKNWqckbELxk1kUXRFYonjH1iY",
  "key27": "58S7QoMeefntZFss4Pt59hEaAH8QWaddQBbmoq9QK7PLFgajXD2YvvbiWMDmQefAJMjtLkFLxVpwDw3ZebQu4s29",
  "key28": "51mAzdasZ7RNEaxLLfokYi5nHxiyoHDKiEvderi3k7p2ay7j6ap2SNR1b6HavdpDMSLhBbTRXvNH6ZF72TGWGf2d",
  "key29": "2b2RD6Y73Q8fMPnq4nSYZ6tgY1ozxRkwXNw6TnJdRBHUDEhQ8uxy6wRjf8WaubaRdbvVuw6R5EMpeXsYsTtFAEAs",
  "key30": "2M5aKBJFLEPR2F3R5LVmWS9eRHt1eBmjSvKUr1zgtnQ5SWXxk3Fktzyv7pxbko41zvwRAVu6BfQJdUJbNTrxFRrJ",
  "key31": "4e8fLkThNBWyMuHrPC6ts2m2g2mWW2MmF8anaK6xXgFFxw1z2zP4RJo8ddx8CLFH3RhtUXeRjM4wH57gDQTCQyAj",
  "key32": "2f9aQs8QXjGKQR7jJop5Fn53mSR8neEQTNAJxBYResYmo6fWax5AAGHXBH2j53NBBYbr7wByM5DcEEzgpcXWwPz1",
  "key33": "5YGt46sHZFaykTy3hPY4LvkxtLPb1f6jdatuY6Qkndm6wnZsde4kndKsZPFFnjRnN4CG6E8CvXfreR6S4pitbpbD",
  "key34": "2dNiRUXWFcZsVLKobiCEEZ8BMa2HohKF9b3ePDFn4qVG4243KUKVGR5WM2FZTNJ8nSm4wwcPmY8n2bDJApp47xJr",
  "key35": "38zxVUvy3ADeL51PP3c58ywTW6MnUBGkE59ZPt4vsSbDgQtiLLPs2TcgYwyNjUSfLaktfkoz3homrmLNFQmBi8Uj"
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
