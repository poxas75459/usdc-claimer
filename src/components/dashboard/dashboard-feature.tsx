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
    "Y9ffT69nTQNNAvd3e3XSq9UiqAM1xfxc6jXrwtmWA3qM1kFnmroyWXm6uRTzoKVwAGMXm4btxywJF5n6mehRvs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eUiRVLzhUPpyLFognWPTyLPJjrxJBBNjPEACEXNbd45QndJpxNJSxY5f36a4pCzXaWucrfFj2XqjwgvAmxBe1pE",
  "key1": "3Dt16QtqkVeiwrBv9ctVoA4hpvf9jx8q5LBrWVpRgdVWjBbwRz2jPrG83L6Q6cDkS4PBkMbAkeYbXRNUVBQpHASj",
  "key2": "3XPrdoVSysLjnmUiv9KrfCooZKJYjTPqsjqyARGJEJ1JcdiMvonjkZ5DgHJ2yUK7syKGhdf9DpQYiUBoKujQo613",
  "key3": "3gocSeRn5wPaxXGqsrsfSzvv5AWB2UqEuxtXMkvNmwNS56YZKi6RHUtcm77PcDqfBM1hEqebbPiKd2b7Jjv55cwS",
  "key4": "2iQBLthJepnALSzyaGYtx6LohWn37fmJQGSNDAVr8sEg9MtwKX9z3CP82DhTA6nxWoMPWfwnj4jgU3pZ6yhd1GqP",
  "key5": "3EoDaYW9p8Hqq43dThnDDFq3LRB6XCnaAf21xZ5obtzyPoe9zRHewvaEb6JWwpBYjcdvEQ5hYsLkViJjKga4fnLZ",
  "key6": "Qs1QvexRJbv6ER7vojs3Q6J3dJSLrYYkkV3i9vmUpbJexMaLRY6ca64Jm6YRPZrMAk4nYAHLbqWtr8qWH2S8jR8",
  "key7": "Wvurw6Pxehkh2AQxs4uyZcy73a7fJetMQBbarhbkNEkfyYfWYpZMyG3CHEcJrQMsGkHU8Tw2HZtddV7pjV8WNia",
  "key8": "33qRrgwWjTjsarVxpSek84zAM93zqD3DMSPtoY7HZDaCwztaYtzxbZQEFtbpvKYYq4UZSCgnXGUkkHUZxfJ8m4JG",
  "key9": "3vUy59ZxYBr3kSN9HbBjC9MrzEaFPxEW1pLFmNCbm7QwYRMtaMss3wH1WJ2LnvhzhTPcSyqC3gCmr7PtBCu2vatj",
  "key10": "5NKvKdjVb13o4BhyDxuoKUpcVQaHnAiVJhYdgSPpdFAqHVEzHRphHJVyczG9bSrAwwL3VtdjVVUrGW2tuJCZTdxm",
  "key11": "3TDFBUsbJcvAzbHh32o7stDndgz29uwznE9Kb7XpsfNh8vSLBzrThSygbkftKim5U5cBUEYizHGLB2GnrSC9kVuJ",
  "key12": "4zWzjU7St2n5HbNqy2goZuRwC8e4HQSnL45UMEnLitxTLCrNDh9PWMaCNHm8j6yAWUeXpdeKERV2rff44qVZF2S9",
  "key13": "eUESJwYCm2KoBjf6gdyyZcXMmWezq3DT1tWvtuw3vPorTKLEAgc5bJQAHevTXd72AAyfPbEzwfXqLUcsCMWYqbi",
  "key14": "4nY7q9ojxAjP7jjPEHHp7sysTdBopiK32jg3f1YBvReSxzyQKjoHwWH666GLk1d8WRHRoW2nCnLb65rdJ3Zo882H",
  "key15": "5H8ecD7mzbmpA2udm6iPZtkTN9LsUWWZRHHCjb28VCF1AGFMkrssDexwkKy5M1xNc7at2a4zBPdZBrmr9JF6gTN4",
  "key16": "4mnfNJJ3hpvPi8jFwfSgphNKPJ4LXjFuwpHd7vtG8Qp9eDvJA9BfQJc3cfKqDx6fHc4grKbkjYeqmof1aE72d45r",
  "key17": "47ML4JnGR6JCaQb4xqNTTLKgL1atT12iqCrbNAK8USaUs5dj7X5kmBtoaM6MsZFEvhGX5HJrp8KQSTjP5B9QP7jh",
  "key18": "gwNMBXfBiLig783WLvAvQDF7qsSF6ypfPfWGhBMb9o1RbmESFVKPABTwK24o3XPQqRLw6FB51T9zrRA7UobgjXC",
  "key19": "29r8Qd1iDpp3oNG6N4vf1yuJht4e4acJa8bZqNCY76ue2EqJHCuH1oCjkwFFSfW7XFxecNpxJVcGFkxZfDuyy61H",
  "key20": "2NafesH2eZ2v6xVvJgA58QHNp12wet1CUUFaTYjrjsqFqxd3tsoR7Bi4AB11HX2JtstMw5pJPfuqb4vMY4eqqNNW",
  "key21": "3a8pwv8WDBHrSZ7i4DjqWyjKFJbhSimZPPHDoqegVPNwJwWpJpiHAEagxCCkHHhmuZv8EtcL2pt1v5MarADY7ZgG",
  "key22": "dSWho3mKzeRW6QPwQfwzAzcf27yEjqCF7KCpwPFB4TZLFu9bngCqDssC6fJ8vB7hisgBWBeSsY329et1mtaEuWU",
  "key23": "3pDPABqAfRSXdjX8NEQxCFeQYM5R5n9x6G8GDHyirK96FLghqGmd5BJnQWMHqgMj6onoP2QYmWQHQE5WjFrWspTW",
  "key24": "5vsWZpa28C7kmXnQAb5HRr9bFd2N6WN3RPEaajRQDbYcsnDPvZqgatKC28jceGuYxjaMqSzXjYtNMDzvCoMhujbZ",
  "key25": "5JXm8GAYqm5mDm5HuzDkowThEYnfVrUXWrRZ1zff6W8MbEgVR7dJR1RDjyWXw6h3MSnZrEi3n6MhYBBEizMDwKM9",
  "key26": "65kMnN8fRz8hzyBPGeViW7nxEg8f4CvsYXMx2o41CRFXH9BP8ov7PfBbnezCp76xPGf1Hch2pf6gPRGBaD2e4RBT",
  "key27": "amRJ1BHpCFqUCJY7EQsC7SXk3DrE1PUxJo9sA7QcsZhi3bGeWw6wBip7ZXqziTK53hMbECUiP942X127L7gwMfQ",
  "key28": "CzZC5tuppQLpJejW2otcAEfRr3evz59Lx1r4JYYtUBG4AHHFhfdKJ57v44nWXXfyghGRXZ6ZqJEWLf9kkpT6E8j",
  "key29": "2aaLPvpGvFb8yJ1gJ1ZaD27YFFr3xir9bWTWPUCWq6NHNeZuBBk6LBzmpcFegZ7JxjbUH5Ei5xgSHpfAq4AxiuFf"
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
