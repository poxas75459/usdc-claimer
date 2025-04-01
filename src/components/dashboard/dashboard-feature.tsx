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
    "buEnS2h7gJxT9gDrFie6BqxSiKXMn4tAWCeKZYDvcDc9nUsDb4pEgCUcPKTzqbsYXS3MdJzXgiaEZDnfwtmKZnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJhwigCkM87261a26KhhNkZJynUCQe5jUqMxqSKW5i91BdHa8HnKNqsJUr86XsppZ67i9bQkdAwb7FcP1NkkCp3",
  "key1": "49HCXGQQcd8XMMH2Qxd36SL4UwecUeZBivYY6LFsYB2EQ85GXGwbY7rwnnQPcX2Z1hVE9CJhVK75sYvwSyxEoWue",
  "key2": "562gUgRuL2GXMvymWVurB6J7uP3PM1rkXaNkYVeJtHznbQUmN7toEdzjG86XoCVnjihJqzVNPo2FqtiiaL426Ead",
  "key3": "2XnunnweMeN95peyZkGQxYsZZ59GEsK3LGAk67UuPrWeV8e4jXbDxxMjJrH1k9CFkH4o6qVZGYcFD1QmqUcp4JLB",
  "key4": "4xfGtxZjySexFUsMrUwY5UeHp6kw3onZsNqP82eqcN1pvkUfXQAk8XQiYGkUkUzSZR3wNWWPCRT44d5RTnJ8kJKJ",
  "key5": "3tBxL85xCE51cWqkUPMcYrvvNEmRBeKndJzN9pigG6Dt8t97mYeqSdG21Yc8nJzhE2wNAHQvMoUPVU9VSMhaTSyi",
  "key6": "nzJGvn84y5xBectvf7R6eZScf73WkBZkJrvUav6rGb1T9PDGMDwZ1fJ3Rf2eMZq58PpngPmMcTLHLwvJATKakjT",
  "key7": "3rX3pwRivLv3Du3SsLQqeZmTNNTZwhTAT6ThswTW3bsDda2iq4CF5mXpXjev9nVMwY87p5pzJkLZdDGi6K3SfjvB",
  "key8": "3D1YMgorujKXinnZoJ1xVez4QfPmW8M6EDPfi2AzxUY9ADxLMjqdYhMnLBZ2qNeCij7HDRV9ua9tGp2D5VmwjmCv",
  "key9": "2qcmQAMa2nbAVAHMjtpVNFwW3DFG5h9unEkvQtiDwD3MJL1xE8taMXfW7dytrv4TfPSx8p18k8nCTNDB6TEFYgSD",
  "key10": "28QJEr6tsbpYVo5i2V7LyHh7ppjddFViTwDZxHxxaNhhHUuZpnfiPPDmkdjvWXACGDjzv3kQ4XxmCSpSAZtUDzeM",
  "key11": "q7T8CwngcuxqdnmnMJePKRqLSicAPwbYF7Yh4qKiUME6tH1oxBxRCRUx9PQBhczUH3MkwqbYyzTYor3DLxABYrV",
  "key12": "5Bm4qVSD1vMB9osFZmxqC7gaTU7YbLvXDgbDZFyhrz8Xc4CioHZjSfBHM1kHvisR2ZgUf1jn4z2rQ9kZjyX7apUu",
  "key13": "2knd7MzsdDgkKmnNtfRCbi4N1Ph7CrWNav86pFnPCsK4Tg3vNRf9uupoeAFvQMmVCWMDRiy9bRa6yAnoX1HTHmuQ",
  "key14": "3yN3YjwYEKpq5P4hYiP6brj9pd5DAWcsh3haKwNB7r7pDQFuMDEAazfBTuG95MEbf2hrhqu13ZfaRuy9tPvV91HH",
  "key15": "LYDAPd1FNzgRNYCeJpmKHK6aa7MkxnRv4jKHLaQocxEKZwurxpTqozuXFcCxpXBwya5yyTtynczNkxpy8p9UUei",
  "key16": "3f3PHkU67Tug1cUikKSx6C1YXVn3p4drDApUYorft2p7qdM4EbQsx8h6ygcMRP7vRvJdqGoRvZPf4d6zCHBeXPfh",
  "key17": "4CbdDsR8k9j5wg8u8rLTBEy5ckhd2JVeEz8qKQro1SYFxyjiZmztP36FeH1MBZfXUR3mT1h9Xo4DmeSPTUxQgMNT",
  "key18": "56cq4PGYjiUj9y7KseDXdvNV1Jr2korjRMyfDKVHMvqTWJjbbptGgpNSHyPnvbMoV9tHw1ZH3rzLGbYkSgioawvG",
  "key19": "67ZLqKJwcE71VvzxWtzpMh2y5T4cnyCPLLd8oEifPsWzHqUAKgYxNDw5EySn67pzNXzD2h3dT4ic2c4LVMBUAT1y",
  "key20": "PBJKoBFf2xNhP7QwTSFwhT3QjRQsvZnXdpG1BnJS7j7n66KMAsN583fZEVZpfeXsoNJLaxXmTeC74DLLKGPAr7g",
  "key21": "4mSRPbxkQwKQbUWQLATo5xjWxsQ6e5GJrK8YmQkkDVHno98QBEoELKH3yfwk1sKNVgbTqQB3aEvfrXJb9CdNjJ9y",
  "key22": "3U24TAfnNgvTesjauVidMgMKkU5qQ1wGwyMUbWvbGk2LzD2NrhBmgVo7wgQ4gqAemV7qfBpZ92wkMc7tFNNyQd5d",
  "key23": "3cNuQyA21Qtwo193YJj9toFpxvHe3RsbWLFvL2LGnbn2t8x3ZVo7Pu399UdsSkoTJba1UJX71H5HsPjJNyt8Q9gD",
  "key24": "4KpwQFmpaneEMCrx3T7bKsT4gvpiRShUkfSrbeu2XceQaRBCmyUv7S1AQ9iYmgk9kf91onKTcYNH1nkKsHHeKDa4",
  "key25": "iFyAW2s1d9ngVPreKDAbYM7EBqyVvkTKinboSVeyqsxYJYcGST6xNEFNm1prvDhFxkyV3vw6wWzUuStp69XV8dX",
  "key26": "2Ztk6LQn6vtix6Ns3LnxtbAU4Ge7toYHRheavBGDW6Zk2JcJDRxfnjsTwa4UnRVybPUsrKseNXrgaadEdhdLUKsd",
  "key27": "5rn1sPozUrWMr9LU8BSadnk74TZ9Tif7EDy8e8Qkdz2RUTFroGiyxGAnDWMpj9qZhfbVhR4UhQNR9hmnrCMdpJd1",
  "key28": "4b7sEYxihuDAY9RwkyXBAieQjZanNUc9rWwHaHW2fhQL4yXk1R5p5cBnT3DZGEpAsxST6Sq9hdRnWuDnVaYNJGnG",
  "key29": "52u1Ct98HB8oQzeGcmA7xtv3Q3m5Sy46h36j5JK6szGbQDRh4chSkQF3GuCLJpPABjJEfACrB3VL5iTEcyzd6FBe",
  "key30": "5NUQTrmyhEsbQ83o1oXUhSqDeTCDHXr4u6e4mghDdzyrHmNhEUq9MrwqwPr5NNpyA76XTKNQhSYEKqSkjHkYzeZR",
  "key31": "596e7dJX3ysazW7sXnnyg12DxTK2EikcbeYMXhBAUCb1iUDZauks6ahnjs6vNLGLu4Eii94RaH3rwWg3Sbg5Y6DZ",
  "key32": "4FMYSNe8Egzd2gY5cwEMz2iKQkXLNKc6xkdNGD7uuwsbe54QNLFLBdsdju2xBQgt6u3QEE2fnwitbeoC71B2DLZ7",
  "key33": "5HgG2ctJAZEbTc1yd5cCKN7r95g4BvqXUWePm1EnkspsAqfDMCwfsz5E2Kz7uugxdXmnTdoX8CfYYkgomQY71Btm",
  "key34": "5X2PsfECEPEaNszshcdDNshY8gs3rqnE25vGDbM5JXPk9VBcAr4kEPy1xLA3ffuFp17JhGHxCzhKWjeuabiaKK9q",
  "key35": "4wZu8Ug6C5GLxULfop9wSLkHkcVj9wswcst3WhX7vNH2QxrmU9bdRMWqhLVZfeTtCZ2EcUsF29sou4g6j6Sx7aFG",
  "key36": "61d3FQdd6gC9TRT6vdgkjw6bf3pZZyZpGGmV3rdPSGXss6Q1BPRKFrpmBDo9uPM8SGpVjUMdGTcJwrBCjuGSb3vT"
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
