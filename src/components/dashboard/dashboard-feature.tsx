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
    "5hUm4a49eA8xrSiqFv3EqYBJS9SYhiGj2NanrdX14ioBfdHw3r8xqMzLLFdiKwo7VNCkzj1wAj8nt5iAg935sYFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37UyxqLdRmg8dWnHNXj2Uunp9g9Y1nAJtZEN1bz357n6HP7nJiic7sQdomb19y5rTAxKHsso8zh6gsEC3rSiiL1z",
  "key1": "5BNUwiyLnBPpHxEWxH6aJFp7oLF5qucPmEafYgHj1gEVhMiuCASXFJwhDWtTkMm4NzHLxqWCxzbxbMn72Rxy8Sgt",
  "key2": "51K2nDC1mV13YaFks33eGRHn63HNYqPvFz5diWex7fAfVyvts9mbDxzPUZboh1J88cgByCGm6QgXWP8G37s784VP",
  "key3": "3KQBnGaGdM9MS25ji7TA66RAvoApDuSyJUrDwrPqarJmuMAw2TmK344txxHvafZd268vSWmfSFB2G5hgbGnBkaHN",
  "key4": "T4UkuYgSmv5zntGEqgEBNhm8Bp2vniMGHidYezxR4L4fBct1soW6QtKP6XFSpDopqivcqZHbzcyPx1xeyMtEf2k",
  "key5": "5aZvq7tbWKmyWj167f3iGYQxF9fLCpTfXYghEbDeNezVLkCLGjQ9V52WnRQMxzpjmH7FBUk6oBGN8V1XgfiPkdAB",
  "key6": "iGfCGLxZh2L3RKHxfWWuQSy9TBjN3Mw5KoLdL82kV3mvTq34WpgasMrNcqDf2m2AJyS1oS59rEAyUu47j1Dxk1c",
  "key7": "5XHj6hfkmCQ6dTqbGGrSEp6u28NyDGpiVPsXQgZ2N6NEyMYKEcPmpqA9U6bdiUGsnh4eyFWWMp1mF6iBYSdA44ke",
  "key8": "2dZP3tppXfPHQeNMESiDLKs2swpPYJVLuxYjNKWGz6o9doJvci7iAJpT24twMRddNpKvujmHeAR4M52JuUwLdUZF",
  "key9": "2Rc4pid58pmCbUChJ34CDpdSgK36PBtLg2U961SGz2vyhuziXFHML7R9SM5w6kQLakCtWNgE7JHBa3cE3fHCAGzA",
  "key10": "Ryn5joEZ4BYUykNxdHKzsvuABLiVugiVcHGj1StQUeu9NN7hN6S1XwKRNAfX8z9PaAYub2juuFQN8EzrYGFwtm5",
  "key11": "54c6oEx19qMvujoBF242B9SaFrWeNZwhuW7JVf5n6VnANVdsG47yvGLRPqZZjSpF5isw2MUaB5NGj1Ct4jJj46fu",
  "key12": "5Ja32cAmMumAXXpdtfe11tGMxvgEuRRpUQTyvfNke9HVaud1DSkAKP7Pn3nyNLrGMnBEMb5fb7xCNDqhjQHLxZ9g",
  "key13": "5CwqW24LJFPaqfyMnkSPuWHYA81MpZ85Tm8fK4zaJx54ay69hRSQq2sQYYuTWZf8aLRUBqX4MX6ZNPuqevc9jruz",
  "key14": "przqnMsPngsEh3xF9Z3RFkFC5S8bZh1rb2eajmJRRSJMwHAXKxEsLHU8TiqacinZcuZbmr5BC3Mqi8qWWG36yA1",
  "key15": "2ZcvokBAeCse4V4KkvH5o6PxGcxuuU86L2Ub4Y29XyLjru3wezfSvLHEy1zKoz1jErCeeF7UEDweTPPAPZvbiK1x",
  "key16": "5FXutrEBMWhhbn2D2EFGSzHzX3MKNSgyQReovkZMV8pCBymL5ZMHpojoNZEQZ1ivot2fU6ZGDh4qi3XdL9GuBJQz",
  "key17": "iHpc3WNQjG1gjajS8YFJ8NPbRTESJrsF2gLHg3pqdVi9ZFURMPDgQypYzS9rfwrX9c3b4gBRwBYD4dujFj9AB2b",
  "key18": "5ZSGi3aBBogemvoALy5HC8M88dVu4J8oK8fkhPgAL23PKnBT1B1nonu3yK336MLVVVswRrQqGr6wGehd2NkLFgP9",
  "key19": "3ZGfoVvBXQejsVsmjDotZE6jFMWQvRKqLpQQ2iJo1TBH8KTGHpGJAxqWd1QjytdiN66HK18dzdinoTyzEUrwBtQ3",
  "key20": "4fXwRLcWK71n4M5vGQ5xod8HRfDFp45NuSMPVBaZ1drV1dgjhAQ184CZRsyibYVNo4uM919CJ16K3imWxvYirwN5",
  "key21": "viEfpEj9eAuzpLcZj2gfBuMJn7ZnpCsxZJNcgYciWhSnFKygpKMoLopC5t7rbTtvAK58F315PtoGEia5uc1ZFGp",
  "key22": "2BUPHANufLyXwJEEfKmdQdr3r7Mi96V2e4Tmjpoy12VG6r8Nhg2mCxM5L5xGBcwptDArZKWWs36X6stSjSY5n71v",
  "key23": "56U244tR2DRw4t5p587dvug8orSCPvm5AxzhytSacxjd9YhwkdHqaz6MFuMCD52s3xA1bvM2tZJ5rdxD2udhyBvi",
  "key24": "f1sDhpnB9ihDvv9JJM5HKQ81Q4nGgRoqeP1AXwCZzzZx88LaBMdUrfvazquM3c9o2M6mdU3jb44bWP2Xovs7Bau",
  "key25": "3u5Yao9tsyE9dBYaKAjcEQkPz4bJABbYSWa8A6qUppH3FEt6F52fZ453814ys4oEjnPefpBxW8hPVLQqCc9jFYDe",
  "key26": "E2CF4cdtVUfAsDnU2M1PgvXxnQnnNWq6D2GaHFBHNgPcVchPcZZuEue9ZyiEMGTpKUYALvFoUEWL8hpUUGXyVg5",
  "key27": "dXnbvJqn67Tj7Wii6yHBzgfXKgjSseTcasXTy2vXh9uXGu9g4tRc9CMFUMUGT1cSWJMi1EQVKgq8RUaZHt7iQqY",
  "key28": "asAcRhPUM8fvMyE2F5GB81Hh8TWsECw81kuxxEi2rfSXfEU9FoE4LKjv2gggpEfriRkS5v3YGTtMtxNgbdLjdef"
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
