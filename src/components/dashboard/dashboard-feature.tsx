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
    "2QRzcJY1GvY3NXPGFjwmbvSrXNTHQKprmVhzvHNRckbEeJnBNiyZwZCeoQdKCRVZdUEBwYKsjjVUmquuwzs7ojk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56mtGsSnxnaddYq5Mss2KcTsv9YG4FUqm5iKcrBvXhmgJaHbqRbrvWXyjXgMbseGH1BqRK1p14tezqsdKNY8ogig",
  "key1": "4pxQv2CV2vmJaYeFfornDWTzVGZvYwqCVeY3Q71rZBqZ5i8gJuNN8heRfEhNHqZxcXD6Tb2pGUB53Li7dxoV5P34",
  "key2": "57K4cg7CVTi9nEocZKrXxS8Gq4BCYQoqAP3Pdr7i2mBaDXX47eq5TmHDnKWqgnWSDBCpijWuRieqHtxQfonWrzQK",
  "key3": "5wNUeZbZu2zEACgM1tLeyNDCR4x6NVCwpeK4auWzVx9wcBv1TCaiBYcsp95T9CB7pJawsK49gY7Gn45ofbabGFbc",
  "key4": "U6nYs6Q1ZPcDPFep8NBcRmrDoi9tWGPAc4sz9rCZJqeGzo9jCiFzCSRDkXZrNtEitSs4cQCyMSuPn7skHnKHZoB",
  "key5": "44gNnvE3MUep2ruLxvboBcw7A1kH6peuEzv6kc1DFtGurBjUwtSiXkBEBxyGnPKy8aZRas1bk4MQaoPoU8TCZuyB",
  "key6": "4nQ1tzeRrWnQjqyTyR3JZpVsCo6yCU8SefbW6XgB7iwh8WrhxgJzJd2FPv2UGLSUEC7Wq6UH6mFqnN6qwTaPeFyq",
  "key7": "4hB5jSUqFYJfg7odE2G6fSSnKMs3JXpcKrjbiJhVdMtprbWTDcA7hRwaAmCQgaanjmAyEttNXoiyrSgXncb7zoFF",
  "key8": "5Kmo5mUxtqoiT3dJVbs5FBGbA7ctZrFkaVMsk9n2oZQDhKNhgNGU8YGLVG7rXjY86Lk5GrumHyqUyJK6PFyo63Ks",
  "key9": "fFUFZsrvCy6ascbZ16PWBMXwuk1SvYdZMP4FiYSXPKYktTZMbF5xTMyQ6m3X54dgwirMyxGQu4L2kejxk1x9qjC",
  "key10": "2iNsYju3TN9gD2Cn5eNcdZ1iWiGudHvX1rgfWZhGb3D3uK6JEcEvGyfGFfuDvH1wyzcLPdqYnwpbAA66cGJq6XW6",
  "key11": "384nsHJ2Ab9oeVAyepKJgS8Mb1gjPbraGbo6dBnWWYTBPx3zQapPaeoUDRJWaGxQXvdWiezfmiZJFUmqapiaqz9j",
  "key12": "mojwAvchnVgCcnChWKrYyxAviCTCdrL9Mw2bvRN1VCPAy4bRHzh95vz2iLqKFkueRKH8XDTEtdkwyq7Shn6GukQ",
  "key13": "2e9MgKoGB9M2iT1L7pNn39ioQjx2DrormfkKVCWb22zMLKGXVUB1SCZ9dMAedqRUchSP88Y5tcp9FnXVMNwqxBWC",
  "key14": "47QGaNHKTGV6sHUnMq45YdifhAksJv5kkTesw7jjgHW2KpCDKfcKCVyBAyeVSqUPfH1vwQAxHGEf72xpmxUqaeaw",
  "key15": "2UXVGLmdHucpN6eb3KmFaJPTkdWEP21yuuyU4zpjoawPk6hQbpLzMM2FsaytDJ4ZP6J1kTy8TvSe25YRdHfK5Tnj",
  "key16": "2JVFHB36dGZBSAF6eHT7V2x9cMtFDkxKqzSCuWDn1iUuXKVJd8HSmGqkmnfYjjXY5rYGMKDjQioHDQwfpvPAHgVk",
  "key17": "3H7zCRQJdkALjYZQgmTL1UB9byLzZuM6ZPwXSUxvNbKFTf5PToXuxNFyomjQbn6ZcK7xPHdi2qTFPTRtdsczEPUC",
  "key18": "3VN6a9RpTndDj8bT1rhBz2QDtLDmmnujSdWKYNNnpexC8kPoUEcJAyrz18DdPAKpWuy2vSoYZ7aCZTDwcVC7d8pd",
  "key19": "2isLFPZLRZaDnH4y256kWmLcYtBvqUjPjymnpqPM2STKogvtkRT4ZHFPXKZF8X2BoQ557Sqb1N7B4G4ur5FAgANW",
  "key20": "LCdthg6UZkZhjSjfX3orfdwsbnrHzqsRUQhekEK5tod9JXBXavsibcjp43T3aHKRdQckrCUN3ob5wJ2pn1pwUwY",
  "key21": "5vyofosUXUBWjcFGDzfdrmpW2vrNmm7GGVJfrU9LKdqsBZLmps9gowAZAaAjybXWZwijEt7T3rtAZKd676cJrys2",
  "key22": "53CScZnTxmeim1Mie9wysqrPkY9qRvn6uwhEiyfZ7jJ1ZF9ZJmZLNdwT23EttwBbnS1opHJ1gGDqjRfrBrtfDC2D",
  "key23": "5zZwMqLnsrL7N4RbeTupEqHPNUA9Brs3f86fooy3MUtj6crDfdPrVj9P2mRke594Goepa6pNUVTWwM1Ds4yJfaVo",
  "key24": "gRXEPNh313RYRzjtg7wUg1muf1AnCgBC3guwEFkVipg31vqhxKx8kUNMgNrwGg7rn7tu5kbQxDTynbo1n6Zqvbf",
  "key25": "5LfkptpsqdFuHqmKJhKD8AzboSAc8w2oLKQGNrj3yAKVohviKQJcBA1kqCGMfyKheQiYQryfh4F2pVnZCW1cjYLE",
  "key26": "cPhABxaLsXpWWzbX1oPaKWX5EDbA9E55qEg1iEHRUhhrTREN78rAmmMDWdP4QVpNANEwzQ9KpknCuzfGsiSWCjD",
  "key27": "2yc4MwKudnDjk99NXWmU2qzfphdtPLW7eBhNn3T9UumUhbMRaxHxNAmd7k4iDuUgZ3dqbybzLrjLsQ6ciEQbD24z",
  "key28": "53RKt6LGnwFn5Scpedaiao21zoEEbnyD3w74tF189Cpj9TbeWzx9EaWaTMoFMKJump5D9gbAEiHHEccBb7k6nodE",
  "key29": "49H4MZVErdsT9syn5Fevt1T7VSUzseqhWWNPdzhg5veAStQ8DBCngiE1yCziaxbwNfeHsAYid6dMggH4WmutaVZ2",
  "key30": "MZM2XEvxKPbGgJuTPM8p8x5AyLakNnDuaWPBiiy6ExKyyWTH5rurfaeq6FezS1TKbRX7etnJEjVKN9UwXFAErkL",
  "key31": "4NQ9PVrhenQNwZcF8PCjqyoV6pXyr5pMMB26ygTLPsh1u3747xY2zGXA7KR3edD3eQVA6f25HtRMQP5ttMPwjAyv",
  "key32": "2iuwke3akw13sowYJCNFwLJ5QBPBZcsoRBE7qf5gFKaDeDh1g7jhsqrwJA8YFkKWwLedhem2cyfq8GrbUBz18YNY",
  "key33": "3cpR895d4QmwXhTuRboeoCMuMwZdTRzxTvrU4XGWxrmDJJoaL2SZK2F5gutAWggiLZjuX1LeGKuAa2Z82reWeVge",
  "key34": "3khjEimr5yTrRZpcZmLFYGuKBGsEAPz6yx92XqdXU92NTX1keTog8LURs87BVMW7g1pHm1T3aagU1AQvPszzVZ39",
  "key35": "3PWGYf58ZSHjBbnPMWdZKuucnPUDpR9LohxnEBX2oTdnZ7iurCYAV8szc5HedGihreqAj56z9ZXuhJD86s8o4dkS",
  "key36": "5syZXhwgUkDDUqyaafUkLAz8ws7hzwSygRca8bqrLqtJyyMX5DfH8MReGqWXDhrB86U8SGn7NyvCe5Nhetd3z7Xk",
  "key37": "4pF7c6nUBvoCetPDqob3UCTAZd4TMAKPYDXVq9WjGSioP5ShcxrH1qAK8oC5etT44SvCE1fVrBnTj61btTW1NFcJ",
  "key38": "23b8DMCz7PdMdmB5NdVmQLxKFVt1LVXVXFwi1Cd26N4YRbw6h9AnyeEfNzxqs9TJELmvhKWRE3BGYQYR4yc8LFWg",
  "key39": "5TZq8ouuxFsdR8w2AZ3xxJc7a7Xf89M9DFtZiq7e4zsj4txK6KPtFkeq5JXdpRUnE5Fexoqc8vWbf4SUBqEBTFU8",
  "key40": "Tr6KQ32pau4db4TwtHzZhnnc9YdCzUYgr928KUo69NUKMUbVw5rA2T1KR8Cs2NWX3AAQZDLQqZfaQdQuJTkaSsh",
  "key41": "26UZD7EUVVqrMoUu7h8HgFefksFdWaoJTWWqGQtAhKQa5dhEKAw226tS7JXGkAVfYNve1QYZfxR7jJeDVzd16V7s",
  "key42": "4PQ2kfiC94zpDtWWc8SReA8VkTkTQAwYANaop2aw5myQKAUYhs7Q1sCXoDvqoJ717eKKgaEHtzLYsA1muMyJzW6M",
  "key43": "4cH5G4Qw1mXVFb2pwtWZpRGoRHf1g9Mx9kF7qASpsXLF9aSEDWffYApX7uURUzQZhqdHZq1DSQfK5p48UAHPqxGP",
  "key44": "53gYJfTk8yEjFLMDKVnxHy4ZQmDa1Q7FG8d8ZrvpMs1a1ZyiAGDAh8ouCsiVbWqGbb2tEwASLbUMS3nFkudLwrPG",
  "key45": "5XCrbi8NsE2SrJBXyhzMFUodfx1By6M3qAcU1PQ4LGWh8SRBRjPvoF6XhEhYuxg5zbfG3sXrsg9uBMcYju4Gn3JJ"
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
