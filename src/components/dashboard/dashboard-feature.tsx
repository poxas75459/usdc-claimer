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
    "3fohgHYhywhkTSK3pLMwPn4Q8YA2jQxLxnp9mGXoNXwAYmCW3g6gp2LT47GzcdKbwSqj4KPNQjkEADba3tnAfDgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eTp17DERfTGQjQXNYnKdvC6U3gHYeDCgifTFEJMDtAyzsdAy5yX6ECxMw3DVPqu74vW3TCnV5ye9iytF1AbSbSN",
  "key1": "65YaL5yiPCm5YkSdi828Pety5sCvTpXwn56z4JBiyTyyqFN6mzLUHS4yWR5earFsxY3uYWW4K3fvcgPsoJVrS3yo",
  "key2": "2MsLcSf1TtCeY8YD5N85Pf1kdyme1Aju2YxnZ7NMHkMBQhFtSxmmWypqi9cNe2WndVboXZPXgJEeGWxbrz5eSLYC",
  "key3": "2BwEuPkVvY8pX8XwGb6quCDBuDvXD2o5X1fq6JNNdg6zN2GUDRiBJiGB4PpWzwWWwEqY9Spd89SxEB1D1CBwv4dw",
  "key4": "65uK3xLJTMJHFn77hvzz6xAYpdquETraEYCpfJTyJEb1yognpiwvuiu2LsgsJixSAWuHi51WXHv63i1bSYoHf9L9",
  "key5": "2Cp6ZSzvn4F52WtshHWzhswDFYG4G3bzgs8oFZi2L4JEKLQyvYvnctxKWxT9nUxNpFcw9gNiunKZHYDJ55Z2SMvU",
  "key6": "2zkHUhnTgF3HiSxyvb6bhg6LH9FzVFZmTvshRJDtMsvkEPKgf8wkcMtjkX669jXJe69sa8rdseN6fzh3uBMWCNtH",
  "key7": "5Pc5ovK98xQVh5UsjD8YF2SAEH13kouyNGKyaiHPEhXH61a1M1oL3Uxtoe6F4G7YFcmZQeD1SmRunmvogq3t3zKi",
  "key8": "5fGx1vnd5NjCz5p5n2Gzg56S9pG4tc5bnUwxDRbdmGzHpt7XfZJSko4744oe6eSpR72nY1MuKMU6yxPpMmqWcBSw",
  "key9": "4ov6ZZyHWGMYd6k9YHWsSyG8pft2nR6jHdQNP2a5wGi5ciXgJcCDyH8mELB1HvUwswvjXbhp4KGBT6RdCWxLZ2Mb",
  "key10": "5mWHMdgEHej1m26473etqmAUf1gqompckP8SihnLpaMWjuDh1th8FAmCdN4iWsvUe7cdgcSQHaogTQ2XxEjJFX9",
  "key11": "1NFKAbq1LcWHXYJKeGBuMtP7qm2hDW8YuAGkwGEGHC98yRgda1LmZD6nDPfeSb35cL85a2r3CAmCdcQcNeVmNSa",
  "key12": "4J5MHurziRL2d6bVakixEwLufCGEv9ZZCQmvv6UnBvM672xXfKts7igWnMi8viCi4aVmSBDKa3j5hZXnMomxZ8N7",
  "key13": "395y491S3y84PJXskkbN45TbV2f4qaLPy32LMzgfFsYY9ijPfTHDkwtMPe2JccMLiq1uscnQa8nJTNJADcrZCs4E",
  "key14": "4HZeFTTJXGcA9dtFJX7pgYzfoYZMpy71nj1N2tXE7apxdJPTcMUNksoKwieTLuWfV5w1simkPsLxqU9iDBsLLKns",
  "key15": "4bsR8d9mT4TWqWuXorxByFcCGXaitGDsD5GRZqnydtAZWPxsWGQNQHaAK5U5da3jL7w1MX93RrTZfgr5Ge6EzV3o",
  "key16": "3A1keZD4cxYNCerCQahBSRnJaWzpaWksbjF74bEGGsggt6yr23HaDdgGp2LSrh5qfwzoYFmcK5DCjgcCkpGfC9aH",
  "key17": "TXAupjuc4yx6DyMv9E6GB87adFPPnrVJ4HeMho32Q5VAqBqS81DPuLf58mFtX5k35JTvtgDAhub2ojGhw6CyoDc",
  "key18": "2VwtH8Cjxjs8s6Lppe2FJ1bkUTjk2eCcToxmCNXiMUVGthS5NurPnvDtQLZv1t6QfyyknsfJs2zw1MjqukLAHBdK",
  "key19": "4CrEYZY8mptGczkuqAK8GTsZwaSgwMJouzZiMD1feUvqJNDr1UnspMCTBPAPCt4jCgS8PSgUV41Wy3k19bYgZFYV",
  "key20": "qLHAfGCEHKqVJQFsVHsF5V5f6oXsZWQJhMwutdckcDWSR3fxpRexHUJNNiQ2gHS37GVGWDyNF2F3VQPBYEfmMcB",
  "key21": "41gGqDv9jyXerPZAMxRnUr8A9VgstZdqibd5o2epKLFMfKBL3aqoW3b64FyExPGKUVhgVgThC94aardqC4nBBXsi",
  "key22": "5mURbBHy2cXnTm3GAiM3A6PgvfLdmm2yBPtAbRXfnQJrjXsy9m84eVg14EZSB3EEXS2CLscCzALwJhDViDDE9j8s",
  "key23": "46GmXUGH9nooNuyBxQj4cZcVXMbAF1hb1aDFahJ3KTSK2aJvsGvuchegQAbLpYEcmXQFCbMwbcdkUke9toBe32Fe",
  "key24": "cGUTjjNbevLxjJRh8BjL9Ur9nuZdCPfkhmzxCau4BD7eiNAFUmrjr3mYGZHW35HxyXXtBqMmRXp3Vqs7WCnnDDg"
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
