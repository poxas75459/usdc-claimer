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
    "4iyyy8dnsVsDcxF39FmqhX7TZP4876yJyqMPgNQjjRzxgPRCKtWHXtM6TeMZJnSXUw1sDhNYEcaCaU8Ch5hpT28s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GG9NEwN8LmAg5ihs14nBbChQrzkL9vaG2MBRv3LF3JqNcVxvbXZhZ5KXsSDBxk7FxDGpQStLQssJj5rbNPo3v3p",
  "key1": "5k1kNx4U8WqPD4TyKLrKyKE8nfoYe623j6QnyNU19dNFV4pEdEUHWv8LWKubt6EA3BTWQKT2UzGHMC8m9b1KHVGb",
  "key2": "4Zb1tqAkaLQ27y3mKQPjuw9jY8bfs1mZ5k1iFrHDJgGYxLkZeuW1HABZgohBhaDaNBXWN92xU252uxawJ1c8qb2C",
  "key3": "LP2VAy4qY6ZbeiqY6bcwRYexbzkTTbvoTo33BKw1vd8AkcWXqLocUtGh3ucNmrgPuAdw8eJS6i4iYhnQyuhZp8p",
  "key4": "5ZVSD2EMazCvQ6CwtYJNv9N87ZrQYxSjL6QiL4K39d5uYtz8HdJXAxBHL9j1RHySz1pwj4pq35oAc7pmuAyk7JAA",
  "key5": "5t6huPnscdtQR6yt3F5Ynf44yh5Ja7n4HtMyDEcp6LXehBQFVYZGuFt65zryeHirKB8yXdhYBSTaKF154hR4xURv",
  "key6": "31PusmVEnkKLqw56gwqbBMvqCycZ2Ergpg23CAR3P8E9dpRBM7Mr7ayjgSCPRuHrXCJHdoYqXHz5BdCP6ZzmrVsD",
  "key7": "2h2p7w3ZjL2Ki9BYnGvDFzcT9JDmABfnvP2rVAaTaKUmVV7LTbxnCw78Synfb4u48hoLFjdVwBVp61E8xjVhs1HS",
  "key8": "2suGhnaZdaUntBEieu1YPLsSTaM3a1T99aPFabRkhSitkFpz7ngDuHLvW25fuebVD5E6e7dsSg7zgrscqgDK8unN",
  "key9": "3eGmPZZk7vJJKEVfmgmVUFSSHcwVuneUAtiWvWrXfjuaE82xGPFfRdmDyLSaNaYm6eU2d9N9R5JGZyJ5ATCnhc38",
  "key10": "3G8kqrb23Jnyia3kxBnUMg7FoaEVTDfUS9zeaC3tGbERHZpVT4CVJek31TV4HyEpNSuYRpuezUyGV8xRLsBz2fUq",
  "key11": "5AXKmorbj94JP3hdfYS2utUjrUsZCo45rx4kZfHEcQFEae3phmYp4NwwYjpkxcwDkgnE47JwQxty1WMBf9sQCtUA",
  "key12": "2tHG3VpCzQuZodHfVAwNKHrjdzqzhyPy7XVdZ6HBEkBBupUX8sXQF3m9iTRUL4MWmS74koyvXdedzMGJSCnkdYR",
  "key13": "4dNc6YrMzBVTZZzZKH9L31RVaDag99NqjBuvK1P5BL897i7RK94ZbNs39rY7u2xvxp6fTPN3GZUm3RLHAn2g2zFM",
  "key14": "AwegXQYNondWU1nwvcfPVBZnEcrzQRYbDkyPKrUwZGonDUY4yfvJ5KABVzSJKBPQWMiabyXVKLovVkPoELAEBJB",
  "key15": "4KBBKKJopgSSUx7eCbpcZaasBcNsDwLwT3Vt1meUTyzBKdXrApypSfNphkeAmkRpitNtuUYdp9rn3yVegZyX2tbe",
  "key16": "5meaLMEpSbnZPADGwvyrYdeSAYHyG6669AscDJt77x4udV455XuP46gh9qVnN1gGWDLezXYgcjRkDz3cnSaPzZRY",
  "key17": "4LEfaAbYLXMvrjecuPKG78pa6qaAWGPhxEH3VsgxjD7UH7Mm3nKKXELfRhtYDCfxctsHqxzosy2Pokjbn3BtpWBx",
  "key18": "d3A8C2udRSmrtgAPGiPEwz3rkPHwqx7VCQ4Ea442VG8HqbMHNMwDg4QxfhLPVrb6oSag91w6ZURzoSF3dPLXL96",
  "key19": "5PQM5Py2az8NuVnCgPE95DzUf12LC8YChTsuvPjSQSZsQjrsp6h85oTQAMmgGdQ2o4o82bQhxJT5J6cAimnAFPJt",
  "key20": "22JDAoo3m3DrGGyHvD8GvQwa2F8EJ418x2vTymK13oyfLtqxoEJZcc8tXyNX4xUftFEjUA3TmPW3WLAZza639d8d",
  "key21": "q556ugQLY4oxGmubavmFet5R2j4V1S8g91qWvgkZNB4XJDQzsJF4UbjeuwsJr6HLWYBuHWkRoXA5HWo17ePPDhB",
  "key22": "5CNxsafXdGLJrzZFdE1e7gafmZ46c2cSm1jP3PGzaa3sH7WuDMDU3FqSnumtsVWWkhfJzY73xL8dFSkktRiLn4P4",
  "key23": "daP3FbBB85mjwauYKvkWQcd18DqpjV6E6SywajJcGZzagT8qnyBWe4FiiUDXSCZn5uZMwRY4LMH14XU5cVF4mK5",
  "key24": "4uu6totKCyfWEcfTkCkbtTMLzJugfF5qVWwqzwaicLjTvfmWZt128YuaUm35s1kVQWarBAbRyz8J64M4HJvjqT9z",
  "key25": "4bD38cVjCHnSWVQmiABZHL8BwThSnZ6Apdq1Q4vLBfdk9EkErocehKjVync3mwrUWQuKspFGUTd9k3LdYWBcDnsH",
  "key26": "NSwfL8usXSbEA5CTbHdxUG6uvMKtTi89dEnGeu8vmQSKs2y1ThWAqawmKFowMVTLi3AWrjGQNJjB5VmGKkVs6vf",
  "key27": "JzMFesroQMHmskQPfhdVnAH23rYyBoTUaGLzRZbLkSR8gbCJ5u1QfHvsNFADYmaVBnQWQQAtFFhETyPvcfUWhDj",
  "key28": "56krbGPtPZtB3JV1Btng5i1v9YCMFpCw61DwNn215V99UgaEjTJEiPymBtd2WoDdbP3YkQBjrRdKd2QaBucchFse",
  "key29": "wxZfGpK9oAD9oiURKXAwK2LvmyW8wD26ZHdGwyj6aEfCPteKTpec7BKrNvP5Su2W3Xjoc9i6DasknJ3eLNcRFL1",
  "key30": "28mJ6jc9bBXZLStsSsm7JNsSGxryV3mBmwtSA3tyGyY7WD2bc3aC8xSA9HfY2VwfJkQJ3P1RgiofD7um2cxe2pEK",
  "key31": "4ZRmFAwRXAuTFTWPAG3eemsf24sjUZhyB8kQqkc28g1UjDTsz36TMKfyQKhFMfKjpHiZ4wmeHAWwcg8Hx4bHnudY",
  "key32": "4YbXpbN5CiwhWXM56DYk8JbTydzXwxU7KoFV7LhiA8KF4KbH7apHPcZxNjWSCrPM33MUhzBzUG5vV2gnpBdv2FQi",
  "key33": "3woHy8q7qEfWvTB32tye8f36MUWZbWWRsvBmsVmnmRy8q41ZyAaE6s5eVmKiH48mhtBVfjKAZ87wqmhfJfNRxed9",
  "key34": "2Q51aPMWt9MD1KX4iEs18YTJYZcaj7S546ZcKtfyshRuj4GrKKBmQE6aRQPem1GK4kLCPg5t9pC2P5JqsvFfuJnB",
  "key35": "3YFqrcbnuMcWcG4zdKTNDnqeLbgPuYrJyPzMZmGqnYZQJQVDW18VLduQZmTP5qif56eeBvUEZ4fxoZdxyFd6duie",
  "key36": "4o3rot3ucMTtfsPejMX3Q3oTDyVjmbpndEqBt6AGCMr3HHRbTorwmJit3EvHtr6zFMkUZJcbNpTFXo2ZWjnk4iev",
  "key37": "511zZCT6t367jfFaqXxUybTpmpTKzPhMk9V2FpTBUMtMUGbsZmw6zJB93e1vEENZaMpJs9TcbSErgNLWRCZHRS7t",
  "key38": "4wd6u2uAvjwzR1vY9kkcNRK5Mkby3zXzKf1qL3nzJXHtjP7yPmkYNcr8CDp7KL2hLuq6JfpmL5ewcJpHijtNcXiT",
  "key39": "2Kn2qLGeYLUrzbAvZKEMne2g4vWewT7gf8vw9cCRb36P8FS4kbx6S4dWUUFZjmEcSVkVM7ekadKiGNPReMRMUuWU",
  "key40": "3YiCRATGyWnXuBXFdaf1jXNa62dKz9tgUzZbMBAaiz71H1G9CNux1meH38vnvSgkyhK1PdZwjZA9WAeKEcR3nM8F",
  "key41": "4dm6PwxXfZHN3ui4Pjqz4wsgGTphED7fTuTu4zWSTXboP5xPBp1oxwzCdnWPf1Kxjv5tzwSdQKgjjnRYYXNt7P6W"
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
