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
    "2M1o8hX84VUhwBKRvKSKxhZ1wgLgM2LnCzCtA3sj4kDbzQWDBSMF6CmDxDnZYWjtXLepFHm2QLCq6j5LTyKv95Cs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c8PdEjHtLPFHombcfM3624uoeaoWFf9MvSMrSTFeyz45zyN6AAFCppuHaF13aGQw13DAU5MVv6xJFYkmzJuoLvq",
  "key1": "65gATqUDoLS8kkZ5u3BHfvjnYEEYoGMkgAtT4tzvUA1pMCaJhmdnd5uhAaTi14osvRheyxPmeVVotuadsdF4eKmi",
  "key2": "5n3krHcndZinQQkcHWyBFwanM3qcu8ftBwiM8KpdJ6ZN7NuLeLGiSn1rNuDjSWo6RUMuKdvA5vmdPfYocDbsXLLv",
  "key3": "2CXH8Zk79KVtWH2MwVSNae1bxVufC163Uf5C9C6U8ncJpDi4f5nZfBeygmxxXhBqpjnVyVcrcqmNb5kTEssvuQ18",
  "key4": "vDEucC1Qd5UMsn7BuRN1sDJzEHc8pgp1Z9Bq9RWHW8hK4tXxRJq9XD1MUL65LDKMn9NHhQbsAxGaH2eCu19Hvkr",
  "key5": "5htCkXF2gXxHNddg8T8e6VQeTLXUQF2h4GCbZoZmL29HHKgARX8sVn6Hb6dfdfg4Enpdq3o78ZsHekCWPYWUCZDZ",
  "key6": "2dkPUnsynXCzmTYYE3Y5XhCD8esRRruxY2nvkgQJ1jQU62oFj8gJuHARMsurYDTLciAkFsB8KduPnEAkswNN1G8W",
  "key7": "4osDd4cxvmPeDqc5Y4dXQTgp3rCzsidKX35fZLVKHEVh6uSwR4rEDAyZMokmLxe9jm8Ppg2ZEvsNb2jErEPbRBJy",
  "key8": "4z9MGKVJVZQ69idFpi5Xj1cxqYP4Yc8bKL45VvBEi6hMwXYDxRVC7jh4CQ2VmUvnJonPhhtZHpiZZT2fFqEqq3uS",
  "key9": "2WekgTam5haMAjmxnpB3ks1LzpBAb2CoqBD96196SSS7ZzHGFGUm1gX8ArtWjGWA23L7ibPL1xLpzKz9UiXj8jqf",
  "key10": "3SgrfpuY35qGJfyhZT4uRhqigEsvSUvT7Q1Y8yckN2sDJwdxw5WABNXkG69Yrik4cPNaLYixE9pxQCQegk5BXJU2",
  "key11": "3hQNzi6i13g3fYg6bUtZi7hTkJuFaP57go5htuR5y9aYJ3F82hcUXLUi2zmTmk5RkjrRRhnjEi1NbtEgtypwa83k",
  "key12": "5mtygb7VXWMq3fSGj9yvzEaqiRe8TR6CsN75utE7d3NWL6Ld4QZzW4cSzMwjNAK3jDKHzHyQtuTeBQ3qYot5CEGs",
  "key13": "FEAgD7KFGbxfUuNkAfTi7Ysz56gQZ8BHBTWePRxCfw2YFKkjkrX7KUDq3QzJDZNL347zH5SzdW4t4PnYxRJA6XV",
  "key14": "4fX2fAprKARowBw4GzRB3stYAw6jgChuLg2nmzJgTgvL7dC5HgkgqSguNZZvMZXh32nJyMaYSN9RbqB87btzeB5M",
  "key15": "33yyDtcxhBY2dsvy8BBuUJfGQvGmgxJZD3Dd69jcZ9kVqS9Fkj528u1vCJBF2fqEAx16vrHH1vXqaKCBzmwqWcW6",
  "key16": "WwTBRWk5CYDW5baBWJN7cV528MmqgtRDd2nwnPjAbibTqwjMKuPgFQ8qeDxT5Twb5ZoMwrDVqTivngjad9Mn4fF",
  "key17": "2xsciNdFMgjuemBsiPgKX13yabzURJLhmj1jkWwLTUybYBmPsNXr2ye1zV64QAGcydY6dRpZPt9UWPPcdj3qGcdm",
  "key18": "4uGoYKJJKDRabdyPAKYnHDx5DX7hAd5hQr6kXLmDqMZPnmdthta2iw7Pqmz1uaVu9WKdjAF91AEJhHTbG5E2YKLD",
  "key19": "58SHWh6j6QCZvrzJHscK8Vaa65yRxGxcgn6iEUpxWYBxfs6AkjgsfisJXjrHRthVoQA24najn2BsoymZxfkxpGqS",
  "key20": "3MDmpTyTt4ePHBKHDarhvEcFjRDWFEcbry8849NxFmCDyHgErMSsDjPJazz6YbaQJFHXLcTAe3KZ7GoaBPWUttiq",
  "key21": "2hvi7ES4uzEqn6PYe1B84KAuNB6jNphGwvWFeMRxLj35N6UAy8XfSRsmPVYVtZw6PuXTK63zsMCpFScVhtqXfh2h",
  "key22": "sMNRinAjTX9o5bUE3awM36DpAe1Y9Uh5mrv6pXkm3BFqxvndHzdqSZSNppWk9MoKDs6TNmPmb55FkGiscN9pAu3",
  "key23": "3Lpp6fTnFeVJvtRByjWhJJet7ihXTnYdhiE1rHfMqoMRV5B14HaEdB9Xrc2ymhc4zQRNiK6eTBnQqzRYH7H5NLKr",
  "key24": "2XciF28bbQy7gJyJ3XHYp6FbuHRAjLy773eyWiF4Y9oWGtwE8nuVppqaKeDWhXmU3eEfxYot2D7uCwDTDmhFaXZA",
  "key25": "3DqQb8Qqas3MX46hzWhrHYfZ1uGhBm3SxY8R3rwqhUxvZKMBaGdcV27zLkpeGQaW9rzgvnXdJof73f4AA3MjyFT4",
  "key26": "5fPm2vgQ8UePTS2UrxfwtvfVBom4iLFvZoPd5DiE3kDy8E9EMtqwscwmrNSFPRm4b5eSAN3STLTS6c8bmYuySyc6",
  "key27": "4afCZ9paofMDNqbb2CSA41MEC1es5UUHuysyetJtySAg9zgUgek8mUSV1v3E2Y55Vc7wQR15CPRDfGbAWqQh6cwk"
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
