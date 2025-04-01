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
    "4hX4casicbKuo9Byp6d6KsdBAByWm9TGMG6VPea9J2gTo3zCUxWmsr4L2Y4s1vPNoPbE4BVuik9cXSeYSaJYYtZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v5gmWHWhAGTLsyW5qiTm7ydL7PR3Fn5rGVrSSU1oSzSzUxBLrbpGsydiPK5vLYki2Em43ExTc37UcPahAEcZ8Xw",
  "key1": "3uyfurqfaguAfTnRbdhpMdxcsataXKzsR5mY1EX9xC2zpn8UVMRZps9bH54kPrcHbybwmY71BXqjhCKmXwAxKfGz",
  "key2": "42aC665ZDet7voe3Y49Y5udQJKmeAuw6hYVszWb7avahCAoiYX2jze5yvQNcW7sE3qWSAxofbNEbBdhRpwxt62bx",
  "key3": "4VLRFLhaaTdJxdNpV3i82Mz7Wq9cUERzyQxNHCPiRJL8d1SSQst3SZtgUNPftvXiUNUjFRt8Akpwd39Rrn3YEmC8",
  "key4": "3VFguCEWxHtREWc7v7nPRWjneaMNk6MaQCzxtaDve82pGcrvmNmxtmRhm73DjGVoF8Pmz79zYZvVjBRN36Tz5wiN",
  "key5": "3zu8AFEpVcc1qJqCKh1iMDYCgJzCvDZMCumBc6P6WhwQUdJASUzadMnaZ3AsopEMKVyLetDRcguGJgiLMDTkwfmL",
  "key6": "5LqsB3HY5icA4GPTEYs4qeD2vSoBNWd1TbesJTCrqm3nyb8aoA7S5s5qDiDPZaScemWHjq6Th1ygP636tXvsibs2",
  "key7": "JFznq71CTFqozfvA9Quev9ZYFFY35aPbupWh1gxE3CAq1epWeP97pw6G2euqFh3zCA29tzWrHfLr5pz6zPYYBkT",
  "key8": "ioLYayrPZFEEBnqKKj1tEaunwx3qsYVMQZFJPbhp1QnY7Lp3WCDG7pv1hyDJx4NzwJxaMLHdcNsYap41zjwg5pj",
  "key9": "vfjJ7yWLCj11a8vNQ6rXpRfnGwNKNPU81vJXy5ETd9evUH4QZ2a1ZhDk7FyrWLdmPFwnwqk3NHJCbZJp93UMYZY",
  "key10": "yUx7ofdssNTk1kDyc1AcJnA7mhGehqnmGRPfeVwcy83T55MoBf6tvu5zdSwYhNmb6kVvRMHhiFk6pRXniLvwNqE",
  "key11": "2gqiNVrUt7uPvDb8A9qNtS45KCynrY5UGsVj6FGrGhkaTZX8hXgkkee9BrCBn2tnHqhLkGZMvNBfqATyVgDRHxGf",
  "key12": "3sGi6y1RNzcQThGUHgYqPXVu3NM2diWuC8sgE327B2LJUxCU74f8Z9RTgPV93yqQdmeggbNeBDbqiPh4bbHwL9UN",
  "key13": "2yMuD7jhfAmt6UyPQYpU71TWvgnMH6Aj256KKbHyMDMkw1CW9ap1w2zsHrhpDirqHTUCADSCpDNHprezDqUpe6Yi",
  "key14": "4mKoL8rd2rA7P6wdByTeaBfV4b3EFqu1dMVWR1fyew4Vw2vFPwoMUZMnvsbvxgA3rzzt7vcfPXRcdhry6MhG5TEr",
  "key15": "2rFeH1KnKxMfVA3d5zn1cnzPrRuxhsGkcr5VmhTq5JNwH96VaEk4vCpNKP9ctvxAyLRBW7pFg7MrCuLdLovvLTY4",
  "key16": "2d3pE1TBskeRXUkvmyZqmzTFt9MpUx9XGPcppuqVjBVqPLiRPSaVH6e5Xhrf25rv7QCmZponzAwPWMPcq6RUZhFr",
  "key17": "38khYFqRM8brqKpUeLZ9zey9es8cFJ8Zk84HuzLckCcfFGsCgvwYFATu4JxuRhGH8PDBki917npDkgVf2QLjHLP3",
  "key18": "4W7eSx13VdieZNjY1aKpvb2UQzJQBayQJ6DkMQEzHgZTLXbB3RYeGVXgZgjRQsizcjrdNBAd2aarXUjdUo6ZzbW1",
  "key19": "39ZPk5MetPdH6MAATyNC1z83yvHTajt3xpPf6P5kfxoAffG6FG7un9ScxkVYTQMsd7SbeLf4E42DECxvFBQTPK7z",
  "key20": "5aT3wgd7jU9gWkLTEndLQbq73AL2j17uXcX3Aw3ro4F7nCXQMwiqYwUvjTsM3yAJ9qhGKcUNFHa3TWVR9KmJrNXX",
  "key21": "45RnDDxuJKK4vz9Fpqhq7tcLbMXjMTRfgvh6RYpUAwkwkrzq1WQNtMnpPFz5ZqBpND26LbeVRnJE1wme8WJMDcvF",
  "key22": "VWruDqmn9G8rRUeKBCUromdgaEnWWHDNcij6HX2cNtZhCuGLGjks2KbK6mHHJQuyYPN4Y3RijfxaagoRKcvyaBK",
  "key23": "5ADRjLvKW549QBdqW92ZaVF5VyTLmTpA66TrANzCCMY5RLdrCopk3WRnnioGCd5Gw2fEvXREThaSU4ePuGUKSrTx",
  "key24": "5ETY1pk2fWVpMSnTn3LxH6GTMsFxGL4rVNSCAea1rv6zkTw1dSBvNDdqUNYEfZeaTGWLLcZZMavbCEjDVqUoU7Rh",
  "key25": "5W7kT5MxXfGXu8e7C5guJGewQdDH4ddpKeowAAWe2HB2LTedsT2jdQ5q4mwwouKkmiHu8youGdqcvtWZDVDfDuAi",
  "key26": "5c2SuQQbdhTZn6BdTgpGHjV9jAJ6cQiLAT2bQ2hmJzNEYezkC1TUXg7kUqcP2kNF5QkbR9DtLaL3or5EFn1R5Zbm",
  "key27": "KBw2nusZn6pzSeQNM9q3fhrJZwscTEeAU8eJYhFbhoLugBkwhC6LUzRKSVf6DCn5NjpZZZedVFpJTu3svaaJe6K"
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
