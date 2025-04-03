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
    "4WEMwyJ8B7urXT5AotiA8tWnx5PmFFJXnCfVmRhZTXAszoA1vvvoDD3gpS6ZTp3T3VS6iZDYA1uNQUis8nQLKSHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xrHXC22HECJr33ZFNt4HrrdJUtWy5bthzTmBx811PL8TvVnzqwNCU7xjRRfrU9RS8n1Sk1EwJUjJuXE8XrEbdeA",
  "key1": "g8Mk9CapHH3qPBrox5Q26NLafCmYJafn9jtARSHmCTJwzxA1AsmPZRWHeNdkcwYrkgtDS9dDMVRm4a7vcyH7eXy",
  "key2": "5mETQ9v7oWq3SZSsnCeNhocAu8bTLcTaHehdgzNwCeLz3xSrtpZ8gvcLJWsYA4Le3VaW1jrTBmUTBCNHJUCJkQpu",
  "key3": "2M1RZqwq4e2DDrFZxyALcaexdnDZUJ7wgMZzyxs3mbvLTjJf6mdTLqimp9rMQoYBM7z575iPfsHpX5sfyH2dvQV7",
  "key4": "vgNhuX3z6NkXyvqcw98Vxm3Aeg2X7CssGJJ1rcB47QjAcEPQ3SUf4d6uwCTzvUAb3fMzpXU49BrZ3Nj4xzeZQ2W",
  "key5": "AG1rGv5w8W6BvfpDnZFJi5JQhhMAu6trzWZHayHHybjaAMYTfnKtnHPBKh6593r6Am6FymSEtgiKdDsfwb1WmM8",
  "key6": "55oDEmCndA2cd1isg5ofQuNsURPeENqESYibYKazuks2Qm4fKjqwiyB4YaY22k7VF7GGTboXU9NnQxNPaAf6Nyai",
  "key7": "iHHKEcjFbqH9Q94gJhbhsPx3fM5qF4cdATxU167gQemVb6rXEHSkgtQ3LVSDWRjQGnqsJaeSXKNqSg99V9x7W3i",
  "key8": "3WREswPUGsCmSCMxubkaUq9anD1vU9Kd1LdohA5fHNBmKhQ9SqgTLHjgaHMAxravmBnuP3gD9xuoL7uZRPpcqDPF",
  "key9": "62bCmxjbW92xzYrFtK6xQtSyVturLHUvnkiY1dWpt5YMnok5R8nL69Ymgvp9N2LEFyztus6NeR4YdGrYNw4tzXTN",
  "key10": "3DsszkzGcVLS81eqJzj9TdF9q2auZdUukkUEpJfVABk4Ps7gcmthZPU1YCpkNSxqgQvf4rVximg8Z5AbnzYHDacs",
  "key11": "3BeHmHxfqCyx35MqbR6XPjUnHFyJv41RTmsDn2KfqgmLQiBoRz2ZW7JLrqBX7wbq1j52rfQegoaht7gyabgrhAxu",
  "key12": "3exdyScDKKwTvVvniyHHwm1EQwBB6osZpJPebRoHRUhZZY5Phru9UfZMUMXQSSDATkKu1sEHDZYxkrQsCifs9GB5",
  "key13": "47mBkkhobM8b4VF2JZFENmRJ4HZUiZGEAvL3qzVEDp8chvJZGxMzrhJShn7dcytwiY9B3SRaqYW5q7kUjMiA8VjU",
  "key14": "4z5awrnWoqyDf1mjobkLEsoTBBZvQkzjUWaYrBnTS3YJpPVHvyLhD3baPNdZGwYUiemHc65yT2AXueE2DeFKK1y4",
  "key15": "3JctdRpbMJFw1mSR5yXfw8e6zhMrvtCuX6Zb9LvuMu2f18oqRduaTZ5ULBFjkjZVJ4tZUWSLW9d4oeHuJp4t5wcD",
  "key16": "5juCTf4xYmhw9taBPxqhhTWKqezE1LXZ9p6fxEsJ1p2mfZNvMRyLUyaVYSTrJE7P9i3jvhFeSJnfxpzkq9pjPa2J",
  "key17": "2yb3iaLUD9cmn2Cma9Xd1FZnnjT3DvMkgynjhwekjENaVWuWB1e9zN6mo99jkNxd6tgo9RbZAA4yM3DvRHeaDLWd",
  "key18": "64Dy7oeDHLbR2JGH4YRjnDm64Te51JTxJyEmRVvich5cBJWBcpExQ4yqheZjmPhYVzqREujGYMShYKmEvCvAwKHN",
  "key19": "3bkEi7Z7dopa8dHPdYcy5C6fkDMFK2r2sSTkE77858bHNYGYSJANQ9CTgxxor3ci3Z4XsucKtUjVnBzFFJD1gyzk",
  "key20": "4uEQxxRQy1ThpbigYbVnsUCEP5TmNRPu6k4dWqvEqzmGJLGYCyJfSkiAqxnnf2vL94tYevGsJDTp8pqSQdKyMt7a",
  "key21": "4LHvLdLZEPuW1zX9xCUzLPe1SC9U6KsWTyTiPyVDRt5AzPQHYCpQnKPwroKM7NHLXqaJYuL93BHSAs1feNfq2oTe",
  "key22": "4G9sF2x5yntWs58dmyDBQ9KTFKcJaQHxpcx8kAV9iiSzHEx3UAjBTZQVK1JpxQUo9L28sEP7HikLuFR2imwdcyHB",
  "key23": "5txRChYVbuC3QAT4hvh4sgc7kPWoMjEGdrwfYNDwCzmTPtgwYK1xTBZhDobCM8hgA1AfMd6KT38BsW8rgXPv99Z5",
  "key24": "3r2TM7sPYCn1bHEZ9PJbE8NJAmWGqdRDTTM5gwqPzykbiYgzDxs9Df2NNGhvurX6QhKHHySmZ3AFf55Kt7sWAq5P",
  "key25": "2qgjBryfeHLHtiJMkEetT6kkCAfF6jNLtQZk4pZfCSdSMYX7Zjn8NRCUr9fEpD26tMr241NkysFSJAphdcoBBag7",
  "key26": "2Bapg4CBPLynq9fJn1ZoaoSFvRJ1Ahiystvt4jkYmYYY49ygpDtjdcfpPGpREP5cNmXWvkdPnBoR28BGc6PSmn3J",
  "key27": "4t8GBosdk2fczN7RaggsuxXG13C1itb3RNsyMXxYvXSZdrgbRywzWHRHHkYmBqXqBUf6DbL9ywAv4CBFxBfTbHBf",
  "key28": "3Rw6CHsc6rsJAcGph7Vzf2fsX4c3pBXcxqfcvLKcN5uYfpBV4Wy6wBdCXj3miYm3CVKguG7UAqvzm43PeeLHHb8m",
  "key29": "5PHfuWAuug7sNN2v5JYgsb5TDR2dvAczZSLzhgjTHhKU12w8nqUFkbfNraZCmEDF9RJoPGQpe1UPQzMcE17xSs92",
  "key30": "43YLSNTdtABjw1HPita9UhgrXSvApEZ3mVhJwmYKSzUtFChu9EcCuaz1hgoRbWJfu8fpjfag8RuRpPiS1F2ip5sB",
  "key31": "23uPrMqCr2mubEbNCgPeEBZFKqDuM4vZJCKEGFg2N4GfY257BdrvGPDVFcrW6uZnvczhj3ot2eYhMgWF11VFggqE",
  "key32": "4cYttgCeE8AVZDWgTkg868L6DzL8PYDYEHAJeCAMkCVm7k63naGPB1MDNhJ8oQpeAFMxiFuXc8bM54wDfQvGoEha"
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
