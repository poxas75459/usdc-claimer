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
    "5GuZQJut7vH2tX3tDtezocUZHzfRD7bxYQBDw3G4JadFE4SbzYPeWERDkWrGrsmoaSCbeHNnchNFHmtyRNMHCUuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YDwR6Axeof4qu98k5qQ35tX7GQgxpjqGajM9NgQvLucbS56DwhbLz3qbsFHoGLDXKe34AkjnvdV9xDuXbTi9abW",
  "key1": "4pomUibJqWfGcoRfyAKEUt1XqXC2MveUny2oAZNq4YXAHRnRerdNumvqyeKe9qTEPRh9ww9WWQnt7dnhh2qVUX6x",
  "key2": "VYDKxuH7k6L4C1QkKtN9MfnQhHajPUxCx196F79AHSeyRRtncDpL4DUt6fARfFZ42ZbgyhtUDmjpVNJt1gH7m5b",
  "key3": "5zWC65AWnnMSZkkY2vGFtS1jkRRMJpL4SwfmHDisrPk2bNoEuRYspw5VHrtbFdVo5t3UVQ19SFkkUFgBM844wteJ",
  "key4": "2Ayp1WwUvRUnxJpqc1VN9BPPR4BhR7MS6r1g8aVvSvhgRGBrbJDynHN4HaVttWSzrNEHZ6doHWUnyk6wh4sePky8",
  "key5": "3zFEsWQFW3tS5bF2nf6vyMPR8fZ67fJfNaeFekkuKCvT3GNNJEBPg7fsgBhcUZsCmQ33kfEifJMPBx2a6DjAiMfZ",
  "key6": "sMuZ95BU5sDgjWQF1Ta6sUZPkF4qz6kJZW8qrRQNkKShkBVZ2u3TBXxG1x1mYYRBWuJE8CF53gXrDiAQ7ooZaQm",
  "key7": "2N5S3UrbCMXTHAdnAaxWGRbNXNcRjFPvbCTRQDUTDdbkshwyiZpCdr39x2HpdyPKytKR6P4m3WzDtVWMbDR9w8d6",
  "key8": "2QU4czzGd12N8Q9gvXnU9JDSk4bnFKM8CNZQ1drMR2WuanuEoxfH2nDtJ3YpYG9FvCLWJTVZTUamgu7xNZJt9J32",
  "key9": "4xPLWTqugPFqkjz65RShrGivAh6XwBwgLGH8aAJpDkxjEYGL6tDYwqBUMiFtiDcGTr2yyNmogrS4iDWvnuGYJBa6",
  "key10": "2wqcXC24DTEzCf3uMJhTWjdgafyQvAN4jSNfD89SvCuCNLMEo2khgFZ7q7TXeWR8eQgoRMmreE5qoRAKnHG7e6Ui",
  "key11": "4Gro5vxzyAh1r4jVuY3n78yiaxmX566EjM618ytb5vbUYBAViod8RdYepr6bTbqwxqtrf8n8hNj5tR3iyTjK3KHp",
  "key12": "4TY9DScRDf1jJDq6NfxAb8zjbFceLEb2r5o2gKtzuhudBy559zR67uKnRHqBe9nmzrkAYoqbmfUqegaz7JJsxUA8",
  "key13": "2V7k22fCKp4HEevVqP2Ei85AizVHnchBaHzJ9R3PG89W8py3F5EjuigH2ppNv3KhSxdej5wUJRZDTsiywk4Ktbxr",
  "key14": "aCEojMM4pCEM4eY4VaocN9fxyA4pkZpYqiCyB8nCh33yYeMECuVTnU594ngzkouLSDYoNUMcZVCdsNgkPhGDnrd",
  "key15": "49E86E3smFDzkkP7e8AWcRffPNgqRQpVm9Rw2iSWYbJ7oL9FPZ4uNC7QYDQRm8fUbvHWivXK4dmE9hnEYQRz3CC6",
  "key16": "4vDTbXVC8Jsqw1LN4JGbgPL9CXuZPmbwR3CJNzPoAaZcZaymHaqJrf7pKKPGUR3j7hysK9g1eSqgjtE9kjZnczde",
  "key17": "8PPXxGDW87Ey1mARwLvNM6Ff6tDxzey8SvNonDEBXk7F9T6SD27AGyFLtq1Es7EDAoopbAvWsFsK8hDAyjbPRBp",
  "key18": "2aAfaCUGcv6S6nuUExGGxtSwE8au2M2W2SmjucKuryoxvRpxiQ5aTc4rdxzhJqHeWx4dJnexG3y9EM6KrN89EzSG",
  "key19": "MFcESL7Eg1trhqtnbhkvyqPhCh3qVUA7AhoFLUJYHkLHcLs9mC3UXTn1cMszrZXzptZUMf2DssQ29iVoNJ1o4XV",
  "key20": "1PekdKr9mdYVyMLimz59KuxPsyBUb1RMANeGg4jjybLxqoHXvfKgKLKgaMFrwC36XZx542wmp5P1rbZbT84JLL6",
  "key21": "opP9PApqy5dognNsYdMoPVAzyJETikFRi7T6k4tCyWYEh9jvrTtUV1LMSnfi2UG65oh7F3pBpNyBa1bzeTrXBDe",
  "key22": "5W1xXZhzpArZ7KevghCMGrGXGbMxhKqMgCpT8d37yzKfhBG8iURZdgCX1Y2YGXtLPwcmdyWDk684RpWHrrHqjg4w",
  "key23": "nVEd1FoEQdBDF1Y2rrcLrZzQ6qb5iEhD63q6JwDJ8hUxrKUpes8mde45SNFdQ6HZnPGFkSLTz6R6GpdSk5r4C5s",
  "key24": "3pZt8gKoAB2D1ktPfJMqChGX39WJvK7qmdACJzSq5Xdx6TXLA5yVeK5EnwSPgfz3cnDStcKkxZ5wZ4PabNvAc6mr",
  "key25": "iAtJCRYBP8rPWfSUcLUJMKoeFJYCBQytrGYehRMrQzKS8FUSoffJF9dQ6BmukJtUPk5BTrBtigcm2tZt2LSwMHB",
  "key26": "QCAqd4c5tYLwaCWd4JqY162E6Xct8YaaZCgMhvMH8Treo96Lsbu4RGoaCipeesWJr1qs7ZZLs2VJVj3RJ72oqGc",
  "key27": "3bL6Rq8BBPnCwcd3B2739NXoYhyiRRndqyjNtWpHMYYAr7DQeL1zSUQA9WigcDtYWefMTQi7jkiw2L8NmHhevUa4",
  "key28": "bQaPCeHc9CQVbEACWQ5w7tzHhnUKkjnVUCNSgbgiLkESHMwb1syeRCHAigSLwexsRZXvRcCJTg54pM8zEb2UYc4",
  "key29": "31ikfB4q7pMvn1xPkoz3fiTJqAbHBdGtPcUhGdBrWDBe6oej7jYghztqM1MJHN6uBThEaowWufyva2D9Mj7ZAmJb",
  "key30": "rSwUEvQz8L2iBrUZSZw67mfjxzPckF3myR79AyBKhqzctUsfY8HSCDurM2wygncgZyHNf8nrPTDfDw9SsKvpo45",
  "key31": "3QpMdZ1g8X6z6gEMoUUBZbmkkjp8kx45L148sd6E4Kf33waRThmntLANEhjmZAbWKRJAVznbBipNTikVKpRbfPeq",
  "key32": "5Ujf38q7WGm2UKPSFAUJzZQyjMijNxaAp2frsEtd6oSuQSyd7MaiQnvSpSYJFiCzd7ewRnLAj1aNyXqUA9dtGVXv",
  "key33": "5aiK3TDf6pmzUcKFPf9HzMPzY6XnmWhSS3gTLxkyX23FoD652FKds9ZojS6ozSh7SAZXmwDKaF5Lb3nJyN2rG1z1",
  "key34": "3bkrYisdRgguJLEqHnTek1poMd18fnHPFFS2CRkZvAtPPsYJLn2VhD1PrijDX6kHQ98MNzULaBd3RFBoey9kf9EX",
  "key35": "5hjWbNPFuWkSrkbhfycNjHdkHzCGBTtk3LiwX6CZzHdnPpCFp4B4fZ6JBFcHQSAvXeZ8aKc2sqREMYrdVzvYtd4c"
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
