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
    "3pSdKqummsYKW4fTkyUbdJVevYepdwGgUin4TU4NZ18kPtq8Yz282jNDg5rSWdwMctnhyHqvEYuxkDqwCDdurKwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AErj5ohuqfwHsJ2c9wrRQ8MCYcMv8c4Xi3EZ89Hbgw7k2iB4Akn2u3hcMv3rSKALAt5F2BJ6Wx1L81X83d4EBhs",
  "key1": "2soHfoejHKFsstNZcyQoZrVV3RNViirKJvNqwyRgJBT8EJmbJ7RKeuNvzath9tsFz5AeNtT4fCeSFpVE4eWmi6Q2",
  "key2": "3D4efxQNfgULHfvpo8rTohef57G9toZWShvgfRyFYgHT6oYhQLGbCMhfoqybkYYF67g7XvRMxVBWzBEzGE9wjimf",
  "key3": "51Yw4nGmLvFjnkKfk1J7kf6TjrfwSPtWnUZ9pFfjd29pPJgeePbs9VXqd9posUct1EvHggkoWBuVd79LaKXMXJRe",
  "key4": "r36VStRYkbqjj6Cem5dVLvRRLmr4u5bReY7sjQov3zVvJMSGhBugkkG62L32BR43FhvQRWLCvN9WSWvAyNdgFit",
  "key5": "3D4U6t1ozpAGvay5DRuj1H1ceamfwuaXN49ftnwTNbC9YQPm78Spt8D8s9oFk3ZADRTQRLvhCuJMeZByvYjF5F56",
  "key6": "4QTymTfUcpCAk2aF6WsN83NscYqdFw7286fSu1Ta53Nf9tcq38DWYgKiMYdURMbE9nM32cwfbAUbvhKJXMwdMqUq",
  "key7": "ZBJQP3cFKZayu2Ld5WwL7oAweEDpUDmHSDhKy8gKFa95ZdKnLDEytQzLTve5jarTAQ3jXR9PyDW1spcvwe9Yops",
  "key8": "4LgAUHyDW2vCpger6NFF3mqTYBjGXZwzZzszEbCc1c3SxcX4QK82V3F2VGSGVTED2G568UMiRYHqXiFuNrMUGzh",
  "key9": "55n9sgvZCTB7PUGdp9CjeHMHWL3bHYGY1Gap1CyCCmKB3hEGY24y2zF1jgV8aUbi8tt63C4K74Ex1pbhDWK5sUAR",
  "key10": "2ojk2meibrtsfCXPkcKEU5JUmzMMByRWhwHkV6qE2mam7pcd8j6ZyhX5P6HVaSWfsDs9YLRiWsKh9rPUzoBPijcE",
  "key11": "5fCrEcMLZjUwN7XtL4QRCHySQjbBMWfyuG4PKkbummGD2nXbZBsNpLzUZJKXnVx6bxFEtncxdG7GA54QjrNon2Pm",
  "key12": "3GkmQaqnY6geLScL39zJ1QDqbqDxMaysKJKbjHYmbV8s6QDXe176A4kzTfjRBPKYgnmL8KyhZn7Lh8MvMFFjoEBw",
  "key13": "5HER67dn2zGXTwHXNXgpuYoDDTXcDUp2GiecBimbZCKnhucn2nF9BzdhiXuz3WNas96oCubCQchvjtHDPmsqV5Du",
  "key14": "4jQuqx5E3ZFZnnv6Tn3ea4Yakontcep7PiiEUURxvLArDdzAYnjVTSgiaQzjznBwf5dWgKCobJ6PMg4nGedrC7XH",
  "key15": "3QSwzk7zwnniZ1ZuJ4vvDPV6QETzCiCLqQmTUwUAkmvFa8VswEeG4kEPBg9puFB8MbsaS2ts9Bc5KRLUrJ3YMUbk",
  "key16": "4JwkBqo8bbU2TS6ok2hyM8gXayp4ZRTKQtqgHmHNSfWEnWbcWgLUGKB2fMbs89fxujzpqohGcKKCurcLE2NCUedC",
  "key17": "9SbVNuJPr7EnqEuqsVphX9DwsdFKrCphcagtkgkJ65JVf3yQ4VsazDSGsHkZADMSKBUkXFPmXnksYxj8iMCEngT",
  "key18": "37f4RkhqfexynB5zacgCorPPDexXbe7GrkqriN8BTMfgacxH1uw71P8U7cXUK9kEJoYTGk1Dug3o2znmTCaFbeuU",
  "key19": "2cFDkjEwrv18fupDoA6VfnNtccramcMTczNwcxqFpVEtnKHYMJ1qibieZtB9UQg6CSLwiiAYdNp2AN8f6iSzT8Tn",
  "key20": "2TqXvXKtBf7HcBKV6EYXzpW7QrzmRqQV5qWcUhrzHoc9qL3kfchnpRsh9w6x13td2WH8YEw5opR3oALiCvAtSGnu",
  "key21": "2VzR1Sxd2JYJtyhNdvetCaGA4FkkW6LdcFnRKQ822PCBWPB4Zc5BrssNmiY7apCefe1C8865Ve351VJQ2JScVZVS",
  "key22": "3TNKM54ASFn1b5Y3DsCqTCDbGfHhicCRn4Nx6oJf4zN9fMLHuHCY32EQdx1RtJUbuL9cMM9bETFs39pidtA6DCkV",
  "key23": "59T3Q6Ro4SkR2mirT4VvA61iGDqDtkqP5D8ZRS9dFVJpWYvqQYKHTRtwtpLPfU7H3NAcYv376rphd3QiNQdrej1c",
  "key24": "2GEs6hJXrYSid7g7YhwRT3wS2STj4B4NwS4sTPyuwjCREQah4TZQKrWnxDsqRT2tDAts1jbM84M86ESWiC6SzfNY",
  "key25": "T12D642PrnKnEiJWt8TFkwjpfzQdpm9ReERrUk2ih3eMChfWd6xAya9XK2re7qFJAt6P1nhLVJX8kxeoScsKLa1",
  "key26": "4pLQxqXVyMVq5gnwcRdU5M4MibR4sZZx1VA9SgzJ7CAoXb8UWNZPLumXMTcbhyysjYobhiA1ZdXeQEMXpWseknFp",
  "key27": "2pnccLnmWrTVykWz1GnDTawZpSRZx6ebw4ZPUqfEQ7uZTTcKHQrdpiUr5CabQb3NfeRpEjtAbgnuafVb1rdyKKPJ",
  "key28": "4Aze7rfZCQZCth8SN8S3wBNvzx5tnfW8CXxZKeBk4QEJk2d5f3Ed3GkW8WSnAurhvVRAhosJVW5BCfAt99VyvWNo",
  "key29": "bqWvytcBtHUihvS7iTTiWGKnZNzpWnmUHcUDGTk9JCkY7GJUVjwYems4kFsyKvTimB7ZRtFkKTLSCrzcsehHcxw",
  "key30": "3Y5zpn557GfbkfxnrUn5okNpTHKD7jUXzCLCVWeneU2AR4P7tEovBn4xLfR5aNmhqx34w2xKYr5qVHcBsYj4ae7q",
  "key31": "eR6D9aGccAd5trUS7SwvuM7qkDsDs3CoaLELYQmYgckQx3qBNSChiVau4XRdR7UykaUSnf11dsGXBaqhYiDAVBz",
  "key32": "2doGSHzs3iPt6RU8gkQEiSiB1ayPwQbX7TbzuJ3Q58UjEeqNmVYzJQvqBiX2A92FPXndURPgyJGWocdBu2LUDjSR",
  "key33": "4fJkigVRpro2Z4yxva7itgcWMxSHxWcUEQATkDgX9vwQhcpBiSbSFgKxqDhXoFFuUo1pSwwNyNzYdnyze1M7Mg8K",
  "key34": "4EyCHdzN7tKg4UzTJMvybj9JKzmY7N3NJQZ5JzZgaCckv5eazbDMjSro3HHYD3WzoqDiFJi6oqUGp44A2YTfx1Q6",
  "key35": "2QQ8UuG4mVHvkNu7GuWM74UGU3ML8jtRAG7sJK7oHSxEMahJiehRoMP1TC3rFZ5EYFg5txuzbcPq46LA2r3CNLnz",
  "key36": "5mNeSmRB2fVBPdSJvgoYFM9wL2e6YTYE618RwEW6dQAgLTpM3VCgFEEYUBQZvV4TEfJVrDRC1WGqhnXY7d3r4EqB"
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
