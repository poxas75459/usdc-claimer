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
    "mezh2ZgubHb4ansdYgPsrE5bxoJ1KWEhdsc1NPK5Lrnj7joL5bhKBFMLdoeZBhhA4LsAbUo78FPNra1fmqtDT3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2an26f95k33GjRUPu9Snng6Wmdyqcp4o2VC4nUK9HW7WaUSzWMbws9B63CdZDMR4QwjMB5uXq7JkBD9HgvGa7BgK",
  "key1": "3o556iwRXNsUpXuGXvGqAbijibQVvyE2s7UevgdQdYwMgdAyxFxPa5vxwydj72x8qU7KQ1T1xBsPUBbnpnxnwfND",
  "key2": "4pZtZZkXMwLiEFfezPVc8tSPped8PF6jJCk8kdytpTBVhXzzVNJV5eE6X2D3M4b3Ra8HqUp1vttNU99faUUoWjwj",
  "key3": "3iG1dea8nmp7uYD1hF2AdBdSS98nzwSpTcM8Kz1magMhHcUW1VuAA1WuuCg4REVwWr5hqzhsbCc8nw1Q9k7JwpMB",
  "key4": "4CCsGdBrhL3YPeju2mHimVAffDBTemzaKXpFCVQfbnB5Djch2hd9wL6MdJJS3Scxti2x5fF6iVbn46RdLBNhgGYF",
  "key5": "2BuVS3AWxNdYEksGSNiUi1xQVVQeZdDYKpBFHBcEpNHcBrzTXdcaGbhAUwMV397JSanLT4F1aq2K9NLmvuHpuPCb",
  "key6": "DDwawGxf1p1bww5mi8bt7gs2hQntwTsMFMkFrmkdP8TJBuzaKUMAWXjmFSUsFZ7cLyuK4MjeFfKVpj2FoT33xvH",
  "key7": "3Z2PBXr7rN4gcJzx8cBTs34KK9SUGn23Gc7oXVrww9L3JcsqbAtDFriRQPGra6CwRa2DPaqFaUuswEbviuuzD1g8",
  "key8": "5BACbgKy7DnAFzrHJc9XuAqzvL8MB8wNDk5urACeUvCwcNgzpdAGW5usZjpdeGWskckiyddk2DWPPsCZbv61Jyg9",
  "key9": "4YVqRpSr9f6GTEEacidcrK2wc6CnUwJoyRGkyLzFGUh15DSG9AdioUTTzHmiUoDtDShyiE7Kpq6dAeq5rwReehz",
  "key10": "43KGTi2E4bq8iSyThgQc46SE1qFN9K61qiFX1Z8K51yJLwdfL7AydqvNmQUEDssYKgPgpAZYYPDBxR8wWLJoD3r8",
  "key11": "tck9G9wsus8sRen6MLS9acrUsmr5UvRkGL93wtgNMDsKbVqHYzyJX37qKijQ96koRVb5kgYQqhppbcR5EsPb4ci",
  "key12": "4Tyc26HHVG9DA9mc9EnGSKab3Ry2tnsCEYkG1sWsJ5J659LaFu4Nna1FLXZdAo163wARiJGZCj8ch8T8JVeLgpxK",
  "key13": "5xgv1MvFU68b2iWcYh5QqBgfkTuJAVc6uc6ncvLW5okFLvzkM7CQPGccZTKgpqQkVMtCwoSNtY59GtR4bGsit8PY",
  "key14": "5ka8SqCMfMtwwwiGzDUbU6mCWGQDygfGYnc2DHutk7kT1AZJyu4dYh8DiPMWBeKGGMCLdi5C4SXoK9aHX54ya3Rf",
  "key15": "pNeguErLydXjuV78kmTAJTwK1EMyd3hnLV8CodEbEpz5xGEvDLRhBRAyuEPxAjRR9AP9ynUjNb51ySAFtopgEfG",
  "key16": "2LXkceeZboVGMtrhVB7HBXPZptVbbnHQbzvGyfM1K8cAbxBhaaaNd9DmuaaYsJdCBnCV9cx97tqabviZWQkVtHUf",
  "key17": "2f1ZCfr3DWKNeFSvvMbcVC1e5cqmvDteeTkjyMtLRywkK9mJhf3m1FEhGJU7bvu4GjNrtituwMBNH7jkMURwU3Cn",
  "key18": "3hM2SAeA5uSHeyRLWE1arn8jMz4dE398bFLXUfa4dvndK5roBche5PS5xCTdQa1f24VA89ic9J259uscGL1P6CBH",
  "key19": "4uUfZEKjFaLAcw7ScTMuyvLajwxcRNsXAePz5m1DU61EN7u2XsULPUDof45wxJ9KXz44xpqhEsgJ2Z3zBckGgGVq",
  "key20": "jszKqYMVSZcL4s8YCReV6RdLX7jCwoUQCNEa6JWid2Y521hNqT1kCDBKpwaxQCGy83hKZZdZ1e4PWWPPCk8xxPN",
  "key21": "2Expi2WWowepc9A9PyuTSHxs7W3E3DLhATnaf3iFJShfGtE4oXgZidiBtcwqbFo3bVfxivFrATxzcBPtvZCXmH2",
  "key22": "2ZzjyQ9mufLdGoeEiAcEfS1GUGtQK9vy3zKWae2hzpDhxzqiTHxp4STw6Xk6j5XaXfvM3ik8qKBVKd59h7H52usa",
  "key23": "JRQ5WC3Ci7BsVq3zVTKkYA6mUFniTdh4ES3yeHFa994kaVpVRG8Dqrgf3K43C13a2a6v1FHoF8LWLY23x6qz7wb",
  "key24": "j6c2XxRV2w2tZpZrijhfRBp5eSv9yiq6ewKi6NEWcwMuRY5Fo4Ri9i7MZB2T6rRUKSbA99MGVaTXmXdwLtFkLnW",
  "key25": "3irb4SbgXh32npZyZoncXK8HovpZX2jyuGieUqfxqsmeUP17CgU6CvXFZD2Puz9geNmyMxVFpFc8afEyidWnWpL",
  "key26": "5ztWjJirDwYxFqG8YCaVhgdkCHHWHtfRBvSJWdqFffgzhBH33gQc4iTauDQeAc56wkzu8xUBfcpB7F55w4yJM5X8"
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
