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
    "5SycrrNpNAZGXXh4u9yyZ3VSWViRM2MMHAzCBgjULeRKQVGsHYrUuMzFxavY199k2Kbn3UrfmJXjYx1a5cvwZ8gS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vhyru3PSMN73mZSNpS1GeRzJuCGgfSSzNuP2G7TuaocGY28icFMruPxeJJ3qmjYt2DJ6ZFxyFPB8fkQEVkA28HZ",
  "key1": "66CQdSMZnUH5LanJVfTB7pL6KtX3caHHFekK2yEvLrztwMPYBrShmeG61p62DFsLBd8M1cY41aUAjiXvj2Hp1hFo",
  "key2": "4e7qKB1tnHCaFxq3fyvELpiGofyFZuUBuxaXdLv4TLbLaMLuvtcFA8rfJgCm6FCCLqfHgFtUoa8mp7BuNrTJxz9V",
  "key3": "46Z6HPFhfsZZuT1gK8qkkG8wMLuYJTzm8hLrKB1YqYngUcMnPPqotJycfCB6pLGj6pWjdoPtGwemUH6bfYmQ6zSV",
  "key4": "63PZKAVqUhuqsVaAPwdNYSFjNHJEi5nzTF81p68UuEh1iTsjdB7bWC8C61PVYCD4yppQB7ERqusgDBgT8wAu11Tf",
  "key5": "xzRxX9pR5wmPZkvCG9L9i3wZuaW41bVbcmCNqzKeFMxYBn7bNMaN391jVUVRFq17pcEyq9vgwPg6SxqaXeXdNEF",
  "key6": "5frsr8n2Bkfdq8bWnpnfZCgTcvuV9esPstchhNAfpLL98Pfh6cAVnJXnRwx9kM6kLbdnB6rAz6u6tjnixkJnQozV",
  "key7": "CB7T9QVaxk7iKHvqoHfN7TAiBeKcwidSWnkghS21bZSTenMj3DYvxKRYPZHW3w5HggawDCuvfcaxBMwtxt86iKP",
  "key8": "kCDm5wzVexFqNKnn2b74MgR2EfDsojY4j2bB1q2QLhCDdF9zfhRec5H82RFxtJ1Ziq29XgukCzyqVfqZ3q5q2i9",
  "key9": "yBxpdUjGMHRrqCGh263NfkzXkEHeeFUVL9jresKAwosBNoUZGfzLZ92i2nY1C1viSbaSgoy4UaEuJbsB9GgFC5U",
  "key10": "2WmY3UGKjn9w7Y4f2hsKb9k9nrYzwaPUUecCR1vbiGPNgM4R3DeyqTvhXCS6HkmrDg8ewaf548F5UeaJSyTiCmp6",
  "key11": "5orPAxNFQmxro7tNPhE9am84VriDrUEuVVPxrvWc25Upvjr2Xy1FDLEtbRr5U8PNUYDYohyYMNpFrVV8L7XybKuR",
  "key12": "22UHoV68bczumZW5LnPBypkKvzHH3zHTcKjZNVX9TqPnywfmnJePVrVUCmCzK6kNHVkMBehg2Wuos1gQX7MBamBr",
  "key13": "2h8ngmnYMs4E9pd69QAaGAocRGvJkLZ8CPj6tVCkQzPTjcGiuBMGLTpo8RHuBFuwEdV1CeNemu6Q4b6uYW9bWHED",
  "key14": "mvMhU3GfpKY6LDNgTkpjCxTgGSczdbWkNCTvC76QMMoxrks51Po167S9ebZ2LEwYLYdGKtwST6835jFxLzJ6NVP",
  "key15": "7G3RkaybgsK7kWLB7TF7169Bwf1ppFRLqXt7moAxzhCNUrP8bnN8CDLgohkA7RY4jc2ip6a3f1euAe6VEkZHi97",
  "key16": "614aCUzXDJ865R11ZUL4RDQwWFr5e4g1a3JpuzjMzZuopHynjh6arcPcUFYri7ZYSBfm5gbJVeGEyd1hNkn5LTEX",
  "key17": "3DedSYUNqCpohanoZUCL7vbXdebzPxuic6zdUZVo5MrvpxHQrHhHD12aPfFog8mYbXmwXnzJKYws722ekbR2C6uf",
  "key18": "5NCoo14B7gQgi1tW9NZTyrAPCszopAjatpvhopGHq3oMka4NgBMXywenCUBQqz9tPearPee9QZdmLo7bnZnuUErz",
  "key19": "3efQbpkhapHWtUe4yP4c4A5sdCeE91WwQfw3NiMundXUVsJt73gZrWcj1w1UUmuzafXHeXgDv8js1zZdJ5i6RnBs",
  "key20": "vxzcJUM2nPqgHJamyYrxh5UFmGs9B5yG79DHDn58NBWrXENo536CoZn71J8cpbVSwu87daXYfvMFcDonL114mhg",
  "key21": "3x8FtA5mNAKpxn3UaJjXaonK2K8NsnARF4VhjsA5uamS1FAv1TNY9Gvz5iUoUSY56hT3vJohYngj4jNY84AmKRY2",
  "key22": "4aN8ZDKz6gvhwEP2SgvqKJXomctitpQ9BwgJBCL5fxEFiVcvcWYtJwjec4qsYMf1tiysen9LSdkEhUEhpJx6QStg",
  "key23": "2D6YC2nATTi1S4odgyEqHcJc4BxrQBhjsahdTfX9mDmVMzez3panAf87oSkYwwfwkXgPXRzChSXfWqMzPqGmPm5d",
  "key24": "4KppfrXMMYA4kkdaKX5RuKpmopTvwcQdLz4sfcN7mr5fxhyMFBAVmexPQtVzJWxuQWCwdF1vTUqT7casGbYN87ix",
  "key25": "5xRDs1LEEC4fiU9rrTQZfUQr4viucXFAbA1Pr1fYS1oZzxeM4DagaiHaUnKsJ72gZHc5aAywHefm1wJuunvx5fCn",
  "key26": "3VXdroVWf1NEezfYs8dvNP2BYQtUnPgyK4MSMw2QJfSsZP4KFNiRDu4NxNDqDFr7YEcRdTDdKnPyDtMPdBpZNXqC",
  "key27": "g7odxZ2HFtBLKLazFF29cBq9TKbSY3u3Vzy2Kce5rUf6Cm8gMM9A37owoj5X41u6Vm1XcuB4emRH69J5cg7F2CM"
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
