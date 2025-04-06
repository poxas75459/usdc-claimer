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
    "49jZhwD5Hbh4XTSHRDnQaFxGss6py5PWNC8nuiTjrkuqa5hnY7ewnrcHYr6WCvnSkTf5XVFA4iddXa9YJpY36XJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1234q4KcNpGa45dKDqiaSBAuKgCUue3R4nm8CnTDuWXtykrQJuzQ9M3AX22Ve8FWEFhrTCRpeKSQXd1dmQwVBj4",
  "key1": "2qxmdQ2ggjStB8zh1kEHKw6t8N1LFk3ifzzSLUSrRePFh9tzxNzNrWQziUPeRmG6z5x7n5fFwgyq2tNV28F1fizt",
  "key2": "4dqQ9amRpogH9h2FETyPw6H4JjtEgMsMztrsCkmARkmJBUG4s6Fa4YzhqRRm3SoEc3HnN6vAnWfF1w9JchmWzS3w",
  "key3": "3oeDKesFJVwW86a8yPju5N1mbqfdZmiQWdFDRjXn5hw4szp7pCBHFkfwJhdCYZzFpnjTGydnpTSuVTdYDKcW7GKc",
  "key4": "5QQGRD1tRTHhTumjVpNQMmLytqqD8PvGyQ6JuwYgnTSeR3NpaFim4UnMjmZfpvQeTDUvTUeaCTs2R7zfE9R8gJby",
  "key5": "3Xsbb88f6sAH7HPCULAKVkBC45ck7KiiJYoH4oHR8bSDKtvtedpjs2KtiajBNrtnX7J6q4e1JY8Yq68EEVYkxhNZ",
  "key6": "4vETMgXR4VCDEeFRKQSFJSVtij5yK1u1hoTzk9fW2JCAfapwvvUwhCB45L3adcjMomd8NbgM7Q31xakyJ3mpsa5W",
  "key7": "3Pnfk5nyDYCBVF8oWyDSsKtmgULcks1BsCYph7soRoXFqKwh7QVxDi7AagWgm36Ryr6pN6wDw5kWAhW5Ppyjr1Um",
  "key8": "3NVN52v9hPPoeN12VaiR8ENLEQT3Wb738XShkm2KRT6emcZWbDpoYpgEMttYCoX4yuBNGdhaaxtnWE4p7EQqRMWw",
  "key9": "33PsBzZuZGpbw14ydGTXPreNPCWN3ChwTjbKWp7RTZjjjxLEwyWpr6vKZUcLW7nReJxxrS7oKz9rBGEi3sBeGEUV",
  "key10": "2KHkzWqGoqXKEyerxCPt79t6jcm8BwTYjQjNUTJbMrm6Zgp9vWK1rhr1X7n3yj1tcRMHy5bUUxtqgPQGSyecHCGZ",
  "key11": "3YfaaQDmagmtqyXuqnyYiUwcM5GMwKC6deqVoc938xDwyqhquLXWM55SxTq9shDdrAky5j2KEsqMTSVyLAvhuu9v",
  "key12": "2EEcAUqzkAXuhYLHxJ8khua8Vu9NsJzk1adRAKCo6wZej4qoisyMNXVQ1XDb2Ngy31r2YZEKeJ3vHCBzU68Jvkvq",
  "key13": "bm98mPzHtGLgzy58dmXgzb9Pu9PB3DgMsaEVH2f9VAg8iE9VvorJdKfDyMtKJLYKJits7DadXoQK7x9joow2sqH",
  "key14": "5CYvrxegHveNXGMBdjLPhtkPwpXtJD4NxoUanJ5U1w7dAs4Pei8dm7AGZvePApM3jr4ViVzEoWt7mY9qaCFLvQvv",
  "key15": "vLjGURf8bxUYmK9p2jNiK8CcqC92YWNU26U4dEKYt3XeFjy3fiPz58qVLZkYzJs3TrjeZrJUMYPXvcZqRyvzYe6",
  "key16": "2BdrVAVwuARXzSZhEKio7WhEBHXxRybp5Hc43ss8z1GFzxoMF4hgJsEUwaW7pwfyiVApGwMRiu75PT6Cisue5t7G",
  "key17": "2crkGr8AjeGYPGSiJwdADLxnfwqsWm3jMkU9t6skcLe8wP4Hpz1VndmzZARer2VZCJzqF5wr9C6Z2m6XiLVNerzM",
  "key18": "4591z5taKcy2h9i7AiTiTPSRi5iWdsrLfdRPjUWRfFQMwZV1kgac4CocY65UDGgJ286u9Tgzd7CtPYf5uW8wRVEM",
  "key19": "3brZD4q74CMeGzUYFNjxwTAoNgdtWZcJCLz9Dx6tx1iPrBVCKjA4EFoQeg3WdscNYaYuzHEF2j2t9DkmwB1FLsPi",
  "key20": "3c3zYtt8qEw1yVrXfkhv8XnU2Gen5gRGTLhnjQErPGe9QJxyX16NqZGWz1bnx5PuMZVt9p9DHAfxZ2dtJCCvz6vx",
  "key21": "4HZxVEnzbA1FjDsTDTrAp6h7R9ajZGnxiXrwJPXMCoZQarLhBg6tuNjxpRvCv7cBRoz9aaTi4DGRmp3wPVpgY8tw",
  "key22": "5rLBD2Azp2quUSX8hLHRf97cb5LSrys8cfiXjCSNCekoNLvCsTtDpEGLk53mZELM3EkKK55VzdPEnmnh4atSksB6",
  "key23": "4RWktgYqjGVU8rjPtsM74RQ1rLvfeLBNrf4iKet3SpQwDYRpYkfoMstietc7MraZjrGUGvGoDNH9nMyqW2HAGkFT",
  "key24": "4P8osyehWF6wdhRAgL6WB5XqSPWB49PDxCCLPwE9VMxK5YfFonx9LgRQmAPN3SEwVsivcqkZuJRRz32cm5sE7KfV",
  "key25": "yhkrbuhTxnw75XosX5M2b5Ex3q7RMFcVfSDUGKLYJjVmdVmLGEnSWYps3mhuGpuzgqFL9RGJzMpnv4ZuXnMbErS",
  "key26": "2cuGktM97wtktcBYRk4DtSNHjQ2DqSMLCQr5VdJoNoZNYkx5CMjGEvWHwqL7Rc5dRw9MfFxHfHm3ZGYeUa8kwYLa",
  "key27": "2QrHJgbDczz7Xj7Piwvwuv1xzpnjc3Ne77JK6ALeTAGgoBMDDUvXvFBfCZysXfAk1nfBGL4aEFn4cHLgSpVkqAsd",
  "key28": "5HBPx72ZS96mPxauYcjbcEMvPxexqHKegDcgLmGWNyqwfdjr1bEnC8T8DEEAKz6MA7RCCFw1r26FX6pSVZDMcQdF",
  "key29": "2ZtHfRc2g4m9uhkcKFoNR5iDp7a7nrkdDm918wcJknTCEj6C1zmPGFGsCCwafrgsQSLC4TkGfg1ZWTths6ftpqAS",
  "key30": "2rzrBqpjHt5BbR5vXkfpDHm1scYxAGd7dRbvMdRsHQaR1CiSe5SwisYg2h5Au3FYNygdqKJ7aQGrYXUPFsuJuxg9",
  "key31": "57nnSHZFyQRGchJyURs9UGXMBFvW2zSdZLRNHJGENaHc23knqnS9U1Emvfgk1cGiJoeJBS34YNfAsrXE54Mawtdp",
  "key32": "2tVkm12nWCA3A9rgHcZHyXmCoFPjcVwKy9DhuAN9jnWuPzcMXEgHFkD2Ha9nke4BBHXwTiRvZQmccAzyntpaw3Kx",
  "key33": "UZtNV6EDq4p8iHxvS5jQZjgz3mNkb9DmvoAB1aps8m5Ze4XLHSefWKhGjycLcJ3AxxDsJcNM3qeiwCy5ET51C9r",
  "key34": "3Ln5wwo2H8hJ3gsh8XUsQW1zTRjNidQDsFmaMMsWRbhfzV4q3dtPVASBxnawTnSCiukdWsbxXr7JSNbtKeVWmuuo"
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
