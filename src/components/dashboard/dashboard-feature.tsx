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
    "Fxxb2hk6NEhW5PNsMpzgKq3ZkMdmyvaCNjvNbSgy8bAnwQdngP6vsPubt3kEAuEqrGnwUkueixotgBBazMydZiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ienfv2NdKQfKUMm19NUfgCZ4c2GDuiB5geAeJhBMvENo969gaSnAdX8iYLzy3bVqHRocCZPynmqSZ8DZU7CKvDX",
  "key1": "5S9tEc7QMQ9wZn5kjzL15tSH6TDoC2PzbjPLy28AbQuB728XWhRGNk3xWFUrgtc9ApHanLWNHsurmoYsXSzuiGuq",
  "key2": "3GpMbgi5kcHyBnhqLpevDdDUA9sRg9k83AgCnognmdmL2Zd3D8L2nXRY8oVyEcAU7QTJERFThYUKNjHwWaphX4EY",
  "key3": "2SMMbMRAgtnu1e22f7BhWC4RwQHMU6CzVxvFN6nT8Hv7fwC6JdMd1Q5KPvvWCqJ4t3Pn2oZKB4tJDCzXZkQpk2Wp",
  "key4": "rLdYVjHCz3PBVbKDywjeKJCX2qpCHKCxsHaNPjE5mFGitL7J1DyqFDT2ArsBnauqixtpazgXW1Z5aPMXVgWxEuf",
  "key5": "4dikedaCvdXLyhQA5L2W6gHQWPjMSQ66j18RT6pofuAGLHqaMkGzxJvPfbcFT5v7cc1zsWZoXbcefPR2nuHTpijA",
  "key6": "4ZQLLbUfXkRtBwEeNaDFjAVtaS2qn6fEnf1zPatBKUBkvLbTS5qhxeR8KFoPwaLsA5xiEND3QThTiyZC6bw1Ax3E",
  "key7": "4TwfgEGn5hrpdZgfkH993DPKTZxz45uE71Mfu7UQsZqyEYvJM7HqHr7FmytpMrNHpHhY6615WLNWyUzQw2pQQWzW",
  "key8": "5BKEGHfDxYaS7kVMuwcfDKLnVqzJR3vnwF1Ps3rLfjcBWAjzSaFxQN1wjEgdK4rHPbbEg2o5PnEnjW4Zc9MHJ31e",
  "key9": "2QwAFUQK3hMfzBBSQJhm4Phx6gCe8s5o9TzgPn4rFVqbNgy6SGmKzY99A7ZGwaCZ9McMSRNDTAGYZmAECvyfzanD",
  "key10": "5fD88TanvXgHinAgdXwZ1EuAJjEAKS3CLctLJkby1iFTqQa7meVj1XDMpsExfSjXCEe8ydtphx9tTjNuDB4TxRQW",
  "key11": "5J5qag18MMW7Tk1ArVHYzdK4wLmtuBJCxvHoCgQtxwBt7kEfiVUTfWdzn8jqARqPXDSwYQzL5nUtt6wAT242f2r5",
  "key12": "5KecZh7RQNyt7YpstDdEntpNsmmqpHiYs4ATzWqnfhVTmE2qta2tibCov75wwW62UTfP46KWfaNNUoDsbB7JBc12",
  "key13": "3yRsmMCBWLvtnXPdhQwG7SPNJbQzu1tHQNqaoDi2ZeDKJs5ggkf9WLcFFQcp7HvvjHtpcCk5JLUncCwjha1J6BFk",
  "key14": "aBHi9xy1KYP2ciuTHqYDxNSPmGuJ3FUrq8k5bsw18s3cHVVYT3JbEgUobDnBio6fS2WxZovdaGcbNHtf4JE1xJh",
  "key15": "3L27oMUEXErZXoRazfmt8fpzHxqUkJm3L6PAcoXR5d1F5Jf3U65Zpi23fYvi2dYoVVomYhbz2BfGafXyY2PbDgDF",
  "key16": "39cZdXsdk411vyWCiqHnbWLWz4tJTTc3EytsaPoREa5CzFNbMUPmyY15mCkuuACSeHxbMsG2cq9a2GaV56vDmkyf",
  "key17": "enFLTH9JRNNpvQnDGfkkGYrnpxctAaLkUVKEM2d4186HJ2zhooeAFY4RCFrhRgZzE9w3H41PsBFA4SwTLQ9zTQz",
  "key18": "5LsgXMa7tK6kAcK2K73Wpg49UD8a1Q1Siwe5h1vJt28jvMN2SmHv1wt3WAmoJPEJDjw8G6skREBT8YZ9PRBeYUAy",
  "key19": "4DNh8pRsLza7rjZjutwnLRDWcLZZcxAjFH5A4Hw5G5ECsEvrKBk2bFCMzu6PCDPcemWXCLBXvAtd294f51JitgNx",
  "key20": "2WdcbjW9Ek82JqF3xbwuf14fH38agmuMeMzrK5hjacZhSvZo8NFpEtjGiwQHdtmoXURq8ouJVVfRca6VeVDGy59A",
  "key21": "4vo4x7sdhPu37PTD6qKsMeGoaa9wS2uMQZchcJwzTvbE5JWrRohDWAqeL38GjeGb5GhLaqi43mzXvL7jebmqyDEV",
  "key22": "4dTnSXc11Yaj6K5KU3YP2xpyqSbnsuFbWbQByAuDaUStXu6q8RAm7EcLPNLxGxTpbqNdUqVfebLCVe3vHsYrWBVE",
  "key23": "26QYh8hoxeUpYEeeft1CPyhveMUtkDfLKT2gPCPmWr2oQutW45cF1PFtGSSeRB6uWCUJucDqQwN9mUuSvA6CjCpQ",
  "key24": "3fSxtes7RMPqkJFBWFzAYzuE37uNxG4Hb8iYzx7g9WJFRnFN2g2t2yLVbUEHpcbUVKMXvDTjK4SUkVewyDa8WPve",
  "key25": "3RgzWM5UNHQARwWKshVhaVTz9MJYusLwnrYy3xsejpMMREApPbytqDEdMAxMVKkjfBRu9Y1fbto5bFeAHVAqbWUJ",
  "key26": "2zsJG4AXgxJa8bxAvxnbZ8rGHCVtzyPWezZwLvjS479EXUXFeCZsNeydvzmvfoa17EBDezy9MwmPDoaxqA5xCGMP"
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
