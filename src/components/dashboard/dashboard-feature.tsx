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
    "24GLewVjrGHjhpHFqaEJ3tiNBgRJ8sGwQf16C39AfSxrg2YEgqNVPisamAxqhJQEBCdNoS5y9em6jAsTkxbXryyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jq7uRfdQxsp8PcPNSD7MJq2rVBpD7DXWPnxfi81S2iT1auLusakkHwTCA8WCNP3YtniHNaoCE4jsPNGt9DdnZmi",
  "key1": "Kpjdutw4Sphm9GQFXDCoif4hZFJUQ8q9M8vuZNer5dSU9763Z8TfeJeQyqwMsTHFzhMGrJ3oyBFK7VUEhiuRmxH",
  "key2": "3oxnWPaUHttMfp3hmqPKDX41fp6tKxQ7Ce3aARF8iBJp9WadMvBw57YrtsJcddd7JffJxExURS1vJ74tdCSW2Aum",
  "key3": "4hTLrbj8u9hJty7urhQm9DmBwaE7YWsX1f69AUbr6kjsXxt2KcqsnAriKX6tZv573sjHidX4U98wXuPioRjqpS93",
  "key4": "261qR9Ea3vNnyUiqjXaPH5XzAabVFahDXe1skCVk76N5Lyv3GXPUCupWchHznVne9bhmcuaRNzpjrR9LNj9rKMVU",
  "key5": "4EYdNTkBnDjbBQsi5Jh2gyk6WUqNu29zWdsDrGu4vg2jtk4aMZSFwUNKzd1rSAaQy2FmPCCDbWNXisvEgSNXkkJd",
  "key6": "3kn46My2ef3ez5UF9sJdCZXqmbooiTUgNES3suMcfpLMtseKHtvF8TfuAXbkc6rVJmhurD5GKfxa782Gm23J2sH1",
  "key7": "CHwGuugYrJaD9oLNBQ3fGvs5rFESgZgo4t2hEQULhAZfuirvP57KoK486fiQeUoLgDj5co1yTakJRnbwDAXxxHC",
  "key8": "54zkeQLX7kX6z8wJbX63Ha1gRAau7o85Qc9izwtjTkBZ6pbj6gGtwuS54s5uGkZ1Mwx5nghPvW42LjH9a9bnzNcL",
  "key9": "4aUu9KWEvP5JoD7ZiJEPBn7gqszPQVJiyGXbSJ4UbH3Z3TSSx7ho9w3KdyXRebNdCS34h9diKj5xwXaAH5P4wUsC",
  "key10": "5iiy2ohiKx5KfPCyV5L7hQBTc1zMkDAQnuY9dsQaoWoqwCSJzeGPwm8f8ksz7oqVbscZgw7MnjUrbGQoGKnAfyXb",
  "key11": "4ER2BQuGeYnbM4ncHuUUeCXBs6QxeEVJhzmez3UTxxEQfLgrdvpMS7GAzAnC6FqeqjLJYzRpDKCdnzug2fdkcZnD",
  "key12": "5RBTHGg9QfDxLDnE6eNk8NeChzfLxVrxUcy6JnXwvvGNzsaJpm5acMuhw96AE8aEAPcEjVC2Z7eNCL2okWNF8pxZ",
  "key13": "3mQwL3DCWT6FRCZEnUNYbbFMLTWb8nzq8Qc2s43ijRap34shPeJuTpfKrCRKBnN3zAfprDKAnNLWxrA4XT26pD5g",
  "key14": "rPnCnhpeV6trYAY2AVrYvAeURzd833tkgEQHn4R4XDor1nB4BebjUtrjvSzhhkx8y4p9MpgG5JoFecq3tfxUMrk",
  "key15": "2MnvR7AudPQHSSUVwVtdeF8jJcv3gf7Bs4EoPSUsRSbpo1Sd53p2yXVEP6ftN5PJpwKM5sxq1k6YPS9v8joQ4Xf9",
  "key16": "46hC7N9LzJmB1S5wWrqJj6gkCGzdrjSqGQUfvExd791pW1nL1GGbiDyXe8XixT3BQvf9SBVegWyvErUnRqC4UKAV",
  "key17": "2rgU27zZqiBTtpBzxA4D5DNpvjk3CR9XjkWa1HL1mSzehgq3k9YGQDopdcm44FzXZnBwA3zYqQXsmB9Ld3U7Ccdk",
  "key18": "3RABEMK35CjxStdBi4eBnzZXX4SXd1iempEjvuK12XBQf7xVrr9vkvgyYmvVjAZusKENBPcZ6nE8e5vkojAacbtV",
  "key19": "3MbteVjr24rAnhkmC8DauqdDqJGAw9uLVhiY19Eubia1Knn5kikeF9qbzWCKiNMjjD5EE1Kk9Te2mGkhsZzvabkJ",
  "key20": "5FqrJyDg2ZonyC3vJeF1oNzBQZkKGfNpDPUuogDRrXgmJS3VysbLpcU7dDXFRQY5wD5JhBFYmt1HgNmHQR5XtXSN",
  "key21": "3wDR5pswRuhFpynqW7E4uy2nLngc8YDQEYGztEUX8ougGxn6fJLRW9oWhiHP5XCdTDw7ey8cCWLK4bJErw5UHUsR",
  "key22": "2zLyBMU2Xo8jR2Lj9LrNjhDmN6TiwEZ9cpUmRuM7HYpeoipQE2sq4CV6wwsLtAx3Cq29hwKTr5L1zGtsQNkq4m3A",
  "key23": "3btjtHjHj9dKw6mQ5XHtYSUaFLnVEmuPt4CaqnkRPcTC2oYtvX3wPamkAonsD6nMcmjdWyQpu4Y7qcgeUexUpVaK",
  "key24": "5TiojPiCf2ievoCuDvNZXYxZVH588mbYdeUgBhVnw2czcwWFCN2bLroBiCX3wqtYWSF7YWs7AY5oHfJhJ3Xm6r82",
  "key25": "ybdnCam8bD9fzsoqGx8hcWXcd9w7tQ5jeicjsWpQasEMobJa2KQet55TFfAZj1Jzi4FcWW52HkrQg47ggfUrfut",
  "key26": "5HGrTTDk7yMmTUi3Npp5mWRBALoEsvXLouR3g3viUAgFUL3VHgBCgUpNcEpULJwf6yBkydLKaCn8eEdFmTTnkLB5",
  "key27": "4VFMWUc2W1fB85sNhz9Y46bMNrJyauhdEG1AcRBLH5MLAXpQv4EZbVRRBEqvF5BK8WTPygC9woXJuDCQ1VVBFTTe",
  "key28": "4kQs8rwY5tSAfJKrZ6dxVwe1wUFdDmrAc92GAxT8ajotkVemp9saz5FRCPZRt1vfkygTMJ7m9ZdqKr1DoNorZYnc",
  "key29": "HauYQAbMfTMnm5edHzBeoXnjuoVZdgjGyv9pT32rE9nq2osy8qeJwvUqCnvS1oQAzNNf3sLLy3nnvHjC5x6dN1D",
  "key30": "KHVBSDTCvZX64RQL3KShnGZf4WePBfCCUN8ky4pj2mkVTnbc237ptgR8WbznrjcBMs9sBhJ2X8zbdbfo1E5zDEF",
  "key31": "3kQif6BEQdpmhvuGRNQ5NZS6qdqCL1NdBpv9oyLPfEvB7SeHRrU9aUyBEZWD1MFcsda4U1UkZBbEA46f9kuy9h74",
  "key32": "2iKptqgKGLrFEonupWmEq5eGrQu9orNq4Q3rn1L1EcPpdtAHVcr8KSH97pf2XEKNNa9i8bUYgsqhK1naQqyYCfCe"
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
