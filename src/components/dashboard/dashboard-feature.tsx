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
    "66MeqvSDdXZPzd9vg5eRs26eHLVFCuPzZDocx4BMggSXT954G95a1qbrtcqURV6qcLMja6egekC6jVjGfwjS6wzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dRoNNX4ZnvNpTgEYr7AjRUMXUzZ2GDMYbzxQymbaMm2253ohWw8WgWp8aG2W6idwCgqDfaS2rbBhUTw7wX3SWWb",
  "key1": "3VQSgmiFdaV7rDcsdR8NnDLNkRCQAwFM4D3oiuvGDmnXoE1dBNfCftJHjPCZe8FCnMA5gg9QfdVdfhDX6tN9w9Gm",
  "key2": "54R2wZ4c2Zs39V8JLoZvJFsu9kbsSamHQdSBMe7DKZ7u6wphFkd86WeKcSYaequoU1r3aLyFsQo52ceUwetNj8iu",
  "key3": "26ViKv9qMECYLJoTUon7RJsXWxEFcgEVgewKAMHsP6ztArD8ZjdWuHNWEYAd1AyiuQBiFwn3kkQfgGDcxLDHM9xv",
  "key4": "4YatiAKE8fmB7feGTn6WFvPj8ZEMBeQdz9wikdBwWJpDPffqrSy2xzULmUbi7PqvovqLhiMnCxv9nUCq7Qoxn7us",
  "key5": "2GDACoQBv2qAiqa7zfZSn3PNzC5GQRRiKzPXQSmD2zM7HJgouEDmkfwzcNMvNao5hUjFVLdaF6ru54rMHSKooTJm",
  "key6": "tBGmgzJW7W5r7M4tqZSBwPygexTphHDs7dThcFfnfPQB7cboC8aKabB4BAKMNd4ma4SiSPQYu6ghPE55qsmoEHV",
  "key7": "5k3HM7VRTJyhaetJ6nNwhn9hvb9HEp1sAt24KkxtqA8K5EckqWLBwVjgyAf6NyvPmzM28Z3VofeqwTWWH12oJNY1",
  "key8": "2KCnA2MmhoPPHfMwo7TPeyDFrCyxQNHKfGg5B54BsPGKaEENC5weLiVC8xAE8oU7cmLMajMBqbYzgxZ8zPYBx61M",
  "key9": "5MLpx6nFCcKMcUYf7yQ9Px8VZLhjViVt1v18jmhAxz1SKApk1C8d7aqCgkQXHEZQZfuQQmNxDbQCjfBNYw4yb5w8",
  "key10": "129j49KipDF58t12bZhR3wQdXqEnvbULMLBajrHDSxK58uC8yz3Neq2yBXA3FVbteauHW7WxedEJ73oiXHHdxm9D",
  "key11": "3FXC2e9j1K2dzijUAE7FXsjoLFNnVxdusz1Bpu3QJZM6rqrmZ3MuFaeAPvMtmGsexv7AtGs5WRHcffyyfkQhwiAA",
  "key12": "2Tm3G5eXyVdFkYuwPnoMTFkYKGMtyi3WNxsoyNyG6yJg9HLQpBXz2MidA29WRCGyzEbav5X8VUnWcjpo3bdWQxNF",
  "key13": "4dMCR81xmsUBedryDTRrfWg4KZunq8NdQCN1dg21W93fh9t5jX5BaRfpu8gJA3wyWyU3EBGC2nyDKSWJP1xawNrK",
  "key14": "NkgXftCC4oxRfkG1cJ2i89aQP4ntuHzeuH5n4nAgy7sxby3Yp2i37L9oRRyzJ8DitYUQCmwHjHhYXuJeTsP5LEC",
  "key15": "EwCcBCGx8ZcfCqgorE1G4cSY5aXhzBNzprMQz3HhjRPHxGxwxbWtfCCuR5bvbiKm3B5F7GwvyK13MN7s5s1BtGZ",
  "key16": "5Fcg1oH7gGG49wQtcZo24mEknJNN3FVJK2gS9539LmrujrZtPJZJtJu7ZQ6QdahqHXyDRvrBzyVtR8FsVoMQp2qd",
  "key17": "66XX5jsn2NVLifzseHAtK5gFq5SkADLMUWWmWR4pzWzWMQHvmEdxSzzESpiBZKgUQYi9XZmhGYWNUDLfjQHruZjL",
  "key18": "BA1wW4PsCTmPSdrV7jHdSn9ZkukUzcnYPCUH2Z319jHEhY3DEQ3aXGFRWAPENVoWLoW9cPjtgbryRHiNQdnPi79",
  "key19": "4RHNxscxG3ShiHUNcfToqEqBpe9YskTYXKVrtm3ohHsHEeQ3kdEsyLQefbr1eaqbYZwYrD51ogJJ55UV85rHxjm6",
  "key20": "dCZHrmB3fLsAhYJLWG4zXXiztizEyByud1aMojXb7SSFcPe2mVDebe7tNbKv7YH2zMNUo2jdDZ7QFgmpzM475qY",
  "key21": "jBSQWbhBRfCAqq1A8TzzggKyQa5bUzR6oAKtNMjQR2PTqfzoZe2eGdTiXvBDbyTXyPunKhu68jqqCvG5NZmhjYF",
  "key22": "Xpr9ijgvtQuHdaYfPoBu5PXefJYHqhjycv5GdRLBx7UVFTKFCaCeJmNzFHmVfs5B2AsRYQv8tT6uKVrnyqt5LrX",
  "key23": "3oraKtTdcn5gz2YmXevAU4EjmiCeRPKksmuZQAruxNxtm6LnxY6HU2BBzSoNz5vhx39XK51xmBMV8mdEUPo7RKUQ",
  "key24": "4L7ZaYzRgCM3DvRyHZ7jAT8hixMnRQWRzgyKC6eSNav9JKo8N4Ux2ByZYr2uuWfTzKhqVYSRhPaDeaBVuTM7Hb2R",
  "key25": "2NnxUke6i6zeChBV1ZpQ18EcfZUpGTJJauEEVhFjAxq6wrHNTV3PzKnbSoYVQEwN4ESJ4dgwLdvCB16Dd6W3t96K",
  "key26": "5MEuDsaz88WfNveBHJmBnHEjhyozzCKkhVQnVJFvbzV7bLU1SncSvgJtUpGnkqjYSy1CstD1owe1hMjXx4yWtzMc",
  "key27": "3M82u95U8FGy4erggbB7bQ5WArxbCiJ87JEKEz7ykieUxH6JcxAoKjrdyDe5Kc4DVhS8SCbB63SdkrsvFsS7eshr",
  "key28": "27PBewNMzaiLYjAw6PP9djgnFGFuikFWCxdAw9VDGa66eEAVb5Eqx2FqssZXBPFrLdRrn8x1AAVsY7pJTUXMWDjH",
  "key29": "5z2p53JKi2aFzwBukAt9Wbh97eAE2RQzZKDWtfDaRzzVsNULEzha4TA38DbcXSNHKaNqbQKRDfsBRbxbwdopStbR",
  "key30": "36X7L8aaNF4KFX2TpwCW2aYVB63gAdg3rSrmqM7dPE5wxYKV5ERopiry56cw3rtifydmJF6MuE9SvJY7TWKYjGRg",
  "key31": "4c4hB5c924MLwKGwCn3Ng6auzLgZvxHU3RnHqshdvBY3ywbD5vTE18isGphk6AcQbX4QWigYLjDpF6AssNhbagaa",
  "key32": "3VBP6VxE7AqJSLBhGGYUMVNzwfPzVw4J4gzPzsZTBEKTFvQWRGSXvSfKEk8tPB7M4HNutQDgooy9HNaKZauHo6Dq",
  "key33": "65gqSGpXuTspyhDHFzibsdrfFbkzmNVsY3dqw5V1ELJy8wF7pHZbA5czGhuYeWmH97UJji8SLRHdsNmSnHStYXtd",
  "key34": "5YEvoWuHierHz1qEaRHXkvrbg3CbBGYmuCeyVA3XAHbwus465wkRbPs7pgzjXzQpQiAYzAvVTL8pkbyNQJ5mEeaM",
  "key35": "2EUTZpZq3zrHnddSSbNagsa8igRnC1rhhXhe6wEc2WhhmXyyaYKB1yaA7auA53p8XiQ3h6Wo4EKGqCXK17W1XQqp",
  "key36": "356rb79sZdFw11X5e3EGcj57c5Yrpr7eyy7QfXkU3uEhH8bhYUa3xsVE6XxedZwy7XDVpgAfUFscvUjh6b49FvNT",
  "key37": "2jMBbpfb1Nbsxi8yxYLdr19wekvn8NzyioJEDKkjXFM42eWKMwX125pAWty3vfFuW8DZMyt3gGvyeBsvPpBGLWnR",
  "key38": "kgDB966eqAECt4mYvAHEEP4LKAbsD4LjJRkZhZ4tZavQQL6qw1UXzGUaGFa49NC4eyNA6s2RVx4PwbfjXW36LtD",
  "key39": "2vbDR4TgBW9foNn8Wd8scRXwpYFPm8D4dJrRPCTBC6gGdomz7U1WoV8TnoFFbhDnuTwSM4JMCkLLyXaQLRRNnCT"
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
