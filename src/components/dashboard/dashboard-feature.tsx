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
    "41PxgFHeGws2zPS4vPeUCvSPx3QuXByQHWuQGTNjTzxwUCzGLAN1FxMpHNvmt8qU2HCMQXGdAPKio27meSgHE2si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ja3m4ab78qzUxZmsRyhWQMHZzsfYp5KhUvp1uZfJb8JDBiYwwJg1wJNH72D3MMzUmRkK1N6zcVnpuC8y9vZgD1M",
  "key1": "4UaDhVYj4PFRN4tj3MC4UCnWfZmriUPdRajeA1S24Ej36E7kHGE6NgrBR2dqKRUw8YzWyNrL6rKSyz1pZCnbvNBS",
  "key2": "FA9r4xKe55avJefbMSCaNDFKJFQHFBxphAPZaVf8T6PbRbKcEB1Bcabv275Po5iAJaX5h8MMTMsJwRpo7ge99nd",
  "key3": "xrPiPyD9CLfY85pK4ubtCqv7rKuebbfw4HQGGp5wwvduDk8uSP4J6hXCygCzzyDyiRAcnCVwaeQJTuMsQMYs9HZ",
  "key4": "3AYGe53AVEqF3CZECFWEBML11yrvqo9h75taLi4inJwF4EqMVh4dfsQaeu8e8HY67VbSzbCj3Ycuog7tE6hJy2tj",
  "key5": "3XuJwZrBWBuSzPgYEFkxdzD7X9sDRkXxk7SN8H1gLP4sZPm2V99ojzyKbJCUEuCVj8TUGMwzkjxnaEQQaF5UG17U",
  "key6": "428rJVQaJaLZX2cVzmsvTU8VjQqqTSMcHPexWJBAkNwdwePKBPLhCwucff19YMUxNeiqH77WZMLr5YQZWgRuvEkj",
  "key7": "3xwjz6bT89FxtqBFyMoz1Ak8ub7ckFbMuuwZba4w8Ks3HviGtuQYCNuSSGdoebv1QbVv4ysDb5QSHQRdkEkFU6N4",
  "key8": "4JP4RiyPLr7UKL73AwrSq7QGU7yHhvEBqBJ2h1oLqqxTwHy3Gpqk5U8t6PSJ63vNPTqxioj9zRPoT8H8kZTkTYQG",
  "key9": "5XJrndLs53brMPSGwveasFStx3amkStTHnwTjkb3JsMYMSBiQoaKpKt74gtccRbyEta73H2D3SNz38SPvMDMUukK",
  "key10": "5ou1KtSkVj5BrBXqEjdvJQDNbLJtTcMZdLGRYV9F3YGPGQHKofXX1VnJVbkDgWaGJz3j9wgkKRFZxRCXszMoHw3H",
  "key11": "5u158h8HaX8qjnzJrCgJg22wbS5y6Q9GhJ8egnJLtHUZRvQGvnjpjPrA5BNivtWNLcGqGk4huaUsHW8DoUbu5Sn8",
  "key12": "4XrbXwVuTQ1pqxNNx7JVd6DAnihUr7UADu9jExxUn9rDJXp1BwwYpdL2Ep85MPJDqFuYTfrAorzyCq2oSH49ZWe5",
  "key13": "3dmNzA9dVJsE3KJbQbZYPyVazRRyG5EKGiELXo7gooUUXGsd3WA97Q5aunn7pg8bRihnCUVRi5PyxtJqnXtfVdxf",
  "key14": "2yCxTYBKJt17KvvjHudikJ8MAWEJDyvH7Eiwr17VhCe5FZKusQUALB49obLJ4c2m2Jky3p5Aczt5GTMyeaFWp7NF",
  "key15": "39xfyZRmUCtT9Q2tNdJf1CjA6yehx1B1wSwVdPwVN6FxCurG1SMfMPnCGhgFPGdEYAjUkuyApgmJon8hugPNViRY",
  "key16": "4sc23n9g6StGiruAxL38u2GZdHL9DGFbehKPMWmm94ekSLLrivHAU25YF2SSrpZgSaP2jZAXqHbQoeTy3j498496",
  "key17": "4sot9MUuLS11TRBcwCAguvVg9oSfV5N7vyGSUajyhEqYeiZr24KmmF7JwfetAazUBZUcW5py3nPTHMzTPzt8P5kp",
  "key18": "2HMAGLgjDHeUj9Xwin574fKkswxVtrKWoLAW4gSjfbMZ4vCt5WmLViBkAk65DfKXGp8se1KiRjUa9VJJF2f1CbHB",
  "key19": "2oXC7Beefbdna54Hz6edGSSE3gLG4sVyaNhodtYyxd33fZpCqwbph1ARmjo631udxpg9vidxbT23vhFQvo29ezNF",
  "key20": "ADcNo74oCtMGQG8R9XYVX91eij4aunSsqVPxuUrP15APiP7F2BATqaiLeGC6R8rQKEHtH2XJuexzLiUQ9ptesgB",
  "key21": "PWwDH3SjMb5N9x54gzXiYQcaw3ZXxFeNdMgCMYceuKTZxPJMCeTqUfAef6FQakifUu1fc4CTYSu2B4CStAymZGb",
  "key22": "5B5tsPrcP4XzjZtJV27MUzXaGWAACmSN3YhR51QUekEHH8f9EmUfCWvhpPYeuUw5Fo8nJVBEQBw7HadTsdLugSpa",
  "key23": "3gdfzd5F7VMk85R8UbtUQBzkFETQDJ9kaBRN68rsWGwt4heHrkNK4tSgUPsxtYH1N3Nsqj7zVEFas7zXAniX8s4i",
  "key24": "5vbM1PQ8mheTnrefggzdf6ybjGyzwDsacVxsZmzrevZ7wozkhHJX19pSqtwkUisFmQsUasyAMPNM1FTeYehMLtq4",
  "key25": "34Dx1NxC3wqAWm4Bur2ZQfKwTyZ3CvMzMnbj1Ji5eD6SmLV9T6tYn19vZKtvXpunbmjQg2XhUyMH5iLwU33ZPBJc"
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
