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
    "qoEAcUpb74XkMpTyJbF8JYNBothyyB6XCrRghCsZB9gdgqRk6iWDNRHC5sncMCRW7nQmUttr474t6crEZadxyjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HcebUxcGNhF8qseiw5WsbuVZogziDeuppuk9gtxV6pkC7A4UvjCzNpSacW6Qup4dEgFGLNP8hgn6AUkMkUkMdF6",
  "key1": "HtpqtkDd86e7H2QrTVJCGPgik2TQGnJBDkbk61LcJ1DWM3zL4a6i5CHKQkBwoKPYkKjbjKCvS4ygN6oa1rGYzGd",
  "key2": "3wGbr9oMNWQY2ZCdmsvmzMsZyBsNpVKr5nevAj9YXr33eRUdn33xwkoXnrR3wq6DudLvPdWzt24AQtV8KjfVt58p",
  "key3": "2VHb4mCtgnDqQCW752N7hy2hgdLGvy9mAskqN6TRQzVmXZcvzo3b2my6dfo6o67HxFhZwF4MhcDbdMtVmBCVRYGS",
  "key4": "5rNfjA5qbzg6mf4yyH2RxbXjj7H7QacdvMxUL4udvRrLyVpUJwmJycaBhjeg6StjSmjX3gBAJzojkQmB7nhRrQ1h",
  "key5": "VJCoWykNGZ9cXkpJsGJQ41v7LXqmQKDttGuHRsy9rfj5poMPenLUsotjwcUDHq4Cm5bgCiUBspBC9WPnt5adjTW",
  "key6": "4wDRofafVBDeaw2vpYTMPF5UtXBsbJctrgHHDqCHZhR9MUa9YX8BWVGRufykcPxR2CRLQkyJso6d6rjTEYzhSPAE",
  "key7": "3i7LbBm58ynSvBAi4aD5Ex5EDcpUkZEWheAbFTiDr5Nxhx4WJxMB9WVLR725YbSyPp7EiyKD7k163kEYBFwCR6R3",
  "key8": "5XR7RmZBWeppD57HcfTezKaX1zNpuPD9w6ztgNoM9uzNmzZKdnNHRg9TAi6KcCF3fn6fsZ2pjGodrzaZ1mbc2g3Z",
  "key9": "3RDYkbEBvXieAfxXdRi397Zo6rWjRb8HHBkLMLgrWH4eMFLqRukkWDfKCiGDWNYWgMMaKAeczMzh1fEnR7hzcRK",
  "key10": "3TVdBuPLgMvL4WRR7hjwwPkpZDCZnTsj7r1nUMQrnBmNbMScvYrN5mWHZPzMam4YZFuN3fsFxMFvQmo3jQN4UgiH",
  "key11": "EiAbWr2s4kB6rE1NEPDPgkShrU8zzmSr7HMyf4UU8VCWJqXFot78VopuxiF9fHkqe1G8hH7EnAJXZ45ahsb2tr8",
  "key12": "2Pwg3fRLE23rfs1W1BwrVYxWUSygBn3PXJmzt3aN3vXH6MyMJCKvu9gTxan726ecBWW5DQLD6RZKcWGBSo7Qk9pg",
  "key13": "4wuK63vrPLrrrKyoE5UgKyNQexC8ZxCmmi6bT14ahZZdvKeVU7TxttU5YobBKzyNj5vKyY9X95syQRDDiCqL7QqF",
  "key14": "QCmwsx49E8zmHYafS4FNzeP4XVHafvtb9UFFCPzLHp2qcvKK8BEEwLWSnt7c5CxPZmYYBTZYnkDarHfz6GguM4q",
  "key15": "2uiVLjamWC7wXJ3gVLz4XquQSAxJF7yM2Sdqxio9zaZiJG3oEaA9D65akv8gyVNL7sVx3bAHBaB1cEgr6ttUzVNC",
  "key16": "4Xxo9nGRWeWqYewi4eVBNvfyRJ57CFdq83mzWBfY8z7msyUZbB8Zx1ZTnJSzDUjVoEDrf9DLD2VaRyXpC1Ngm1zG",
  "key17": "5fH7TffCbLcnr5peC36ESt2reWqL6ZK1CanRimA9pLuPHrh2KL7bwp3GPccHNAFYJGkHrgcMXXphbRby2mnBMbpR",
  "key18": "2RbiPLhoCFAS6asoZpjHM7Ca165oXVprgnEYkoFErZdBBxJMb8GeR3YpUMWcvfh2wzKzDu5QKDqBLNaeYQFMBPQJ",
  "key19": "ptgZxNe2Z7sgMn8ZCJM88175ZDbdFxjrgCqP1VChuNseiPmQeutCXygvKEhab1CiB7Yq2z2DF5JRFoMNWghkcWA",
  "key20": "5qG1xWnoer26dWmfgKeArgZZ14hVhEhrKscDS37kmBxM2dU8mp8dovpr3WS11KYPyjtdaRLVJkch6QJMBRBGP6fd",
  "key21": "3uWK3s8GT1m5ffcXZmhstJ7VPPRrfNEZXno18cNvwkMwN8LSaFqtkSmpr883gAdup6qvHnd8W8PGGiwJLRTang4p",
  "key22": "5k7XVv6cKW6sNTxYANqk2RTD8GiK2ijnZNisZ41sAQPGZy9yGS3Cgj2YHqFaywdrzWXCdpgiMzC2W1f3GVaMo82K",
  "key23": "5hwoNWwuAkwnpj8fU8TstHghfnmkB5op7bzFzXtBHmDAaRwc8YoLGy2LV7wqz5PwkNzSVnT6GP1pxuWRb9Ei1d8T",
  "key24": "4TLYFTdAJAaw4UEWcsnWH6r74XS7umWs9EaGHj6oa2x1WmhFw2sys5pFJJSeSTcCaYTSHd6ozticc74Yw8kmNpa",
  "key25": "5S4WV4oEzMRhoPkEXnd4gW8S4PYpLFac86iBp8sWdopAGYtA2Awb4RfGMHRmaF2RY9NEmLEFSMmgTqBUAkANZxGL",
  "key26": "2ww6engu91BGFZFN8hhmVizTbz3NU4Ze2o3ZJxAxzMdCvRgLRfWhRtHVwqJ4L68mx39XMgbsfNacSQYENS8UcYML",
  "key27": "3JPqShFZsCMGES7xYGGNoganppVgyfDAkNQ5Xng33re3NbuwYyRcD1vtDNXMxp6QVLHYcmzVg9uakVjeevkpRooF",
  "key28": "4z6FNh85nZBR1tp16TRZATazQvdFtds9C7tjDbvWjPpRzPpgMW7NeLmzpWqFpxhjG4rZcby1cNUCocKNeLviL3sY",
  "key29": "4mEHFUeCn6hR7ghZkvLSjHPuvapRQms9g74b3NPM1gNoqhtBeP6mggdmBXrMdYjjgEXFDLUsVwnzTRuQEY3wRhUK",
  "key30": "4wpgFJXRSys3r8kuGVntkSkMCvEVJfsZiRYgv55H5de17Yb7HonswMpHeoZ3DtxCE28obXkeJnsVxxWiWTRXkafQ",
  "key31": "5X2rzNnBEhic2KDmwBAuqdNZiiy1F7xJtTqokdJxwC7doJycsgGEnW3du9duhwQooUF1jqnRxXgXN1Pv5dLy6AWa",
  "key32": "56q4EJqpGaAtZpXdd26tSWxFpfTKqfUAGkSiL8cV2G5bQi6jJF4E4H2F9FAwrSpYhM2S4g2ZPiE2RN5kRfmYT8Dp",
  "key33": "5PMNwmN6es5bPVN9nYbv1JNMXtW8r3Z48ZummQT5kgpDK3pdxdBPzdWuk2JnQ3FYAHDDKpPrzJ7dYDTRKxtEHZtM",
  "key34": "K8Zbs8hRequJD15KU7hok5tSwR31A55NsEJG4vwxXP7C9YrUHcwcaSfnhjbvD2GUo5CLBR4AnUFoZiECvcZsxcb",
  "key35": "3Scu6Q3tNEp8hYhxW8GJj3nkEP9zxpdGhXahNB6KrgC4U7DTT8jpscNNKPVFN14gFJp5YvcyEQvX2aAQd67Wj4Va"
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
