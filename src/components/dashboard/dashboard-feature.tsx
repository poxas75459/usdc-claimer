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
    "47pYFWEntVuRLQf2Kfqekvv6uoXz9k74fNPZh9UrtyFymGEGLVnfoqbrL42qWi6NGZKrWm9tDuYA7NqG8vh1mNJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56LrSAiyvjfJdTT7L8zQduqipKKpYsYE8r1Q4hjLcCLLgr5ZmessgwTrshqYEU6GzkYdkeGUSk1vDM9HkbUDYzC7",
  "key1": "2qjQxqaCCojocZAqb2spVMEBuDzCrjoWPzJsUXb6Ug3JW8oXz9issaYEw8RfxfgZ2CZdwUKG2hCKqpwPtvhHNV2b",
  "key2": "JwcnZndnpheUfzyA59Ce1n9bA87rEaKPZDL3GaBTFWpViX1ZKsSDMn7RLAZssBYVrjgACV229nrAWfLGsjYty6g",
  "key3": "5fU5QCwxxo42h7WUbposNgNH6Dqa3zH6ewdNv5PRjRk5R3HwojWn6jW5FXvRRrFmqMywQe6XdP5iNVpnV2BiK7bc",
  "key4": "5WHzbEShgV57RJCEbe1iin24kwLDvAuPNz2fo9NX7uBmXRENF636a7Py3Qyvgf1FRNdhmNFQGymhSNs51yhZ7afj",
  "key5": "4jFKJhtfaQPNDFsfiCk6kgVVnGK2NnbDuJxyhNKL4wpzgFyAtUJXM2D1AzfTdXwM5iYQiPUM6SL3Efp4yGiuFEPY",
  "key6": "5gv3NHvukY3Tqs1JTYgWpkbeBH1Zvek4yE2fkDqWGcYgiw6CWRFAaqteW9sEDJdfgSUWB8FsewRrTKyv1hNRq69V",
  "key7": "4Ep4snvYt4k6XntYpFbHz936Lv99kR8Qc8v3baeizAhavAwRXfW7eDHXFJds1taBPay4F2pn8QDLeHAhxX6PqsAS",
  "key8": "WUBwyhP5yLif2AjRKfstgPUDELREUmE5GgMuf2DqYaPFQqYoVY5iWRaUrEZKyWZa15Er8HZRLnTkKbhvWmNVfvp",
  "key9": "4J4K2gyCHMXUJ9r6Tw1U4Pwb8NeBjcdVxi5GDDa8duUGD6m1UcwuEuRS2uTCWnpRh1kuPJ4rb52qheNCYAnG4Dwf",
  "key10": "v49g2YRRJfyvJi3j6kac3vhYhNJmabLdwfcGbKYKgp5a7uXbzLaek7GmQgEFdQLyhpvAAXq9GA1WPvwZj6rAWis",
  "key11": "27YAhqzjYsggoizv5orFmQzhmrssqqP23hskr9Tu39Qy6cEy3xx476UNXLWbVQGA4YPsvUMDix8ksKsoaXB3EDaW",
  "key12": "2ihDLYzzcmWXdrzu94dWc3CqfDJUTx8R14ZbttteghD7utoSyxExpUTbxV8aYuYxhTom3B9LRQ519C54CdNGVJgN",
  "key13": "W5NetqHPp7yojmAqHDipnBhEMehRCWFpoQhtGcVsx2BJcthH1PvSWhHgKwkngrqgADDrgyzxmnSoyqidiBMMfHM",
  "key14": "3XCfbB15LEjBFw56cDDjsVdTPLSiRs1pPwf7N3oBBhXc2kmZUSVGybhTkMTytg4q9gnLj62LR2RQHpEA1PmYC2J2",
  "key15": "67V9D31aucG1RvkHjbZJnrSsHd6EJik8XLtwwz7zqWbLiovS5qrs9u5kHmXEXc6BnDoXAph34ZiLw4CfKQb1xXho",
  "key16": "5gejVCaqw5ggzPMDTx81ri4ruoAoEdnBxtPVUfoXCTpgrsVx8xHJmKP7oBEsLNFQzGMcgWiM84YQ78XVxY4PcfqH",
  "key17": "3USZMb26UGGz6CiiNUkD1zo5HTqH9GweMAH4ZRhf9idoTrTaTsUhfgxcCjzQV77vdhgWMYzioNfvbHir1kR7MAMY",
  "key18": "4yUTgRmXrmbiBSHVWbGnD2hFtL2XLKPXDmKwrVh4wMfSM6BDbbT3LqKDEwyGxNM2aoFHu9R123FnakRJ8wMmzi1k",
  "key19": "Y9CueWesX9jcKsKHcrd2z8Yrphh2pgt948JYj3YN1W4yGNXSVZmRWCiE8TPQc2ziGm7v7VrG7Ppn7dVoUqwMAKF",
  "key20": "35zX5Vknii5QcBq9G9XT8CS3K5wGDrm1JymsE9B39JWQ8D5Gg2GMreuSLwThiBN2Vp3LX8BWnEP2rsqpfjipQCW6",
  "key21": "51pcEvVjR3bqtB4XhFw8A5dVB97yDtVeKdh34nFadZc25uJMAwdQZnhmygSYgdw7Yh5Dn43hRQcNDZWqmAmoS3u6",
  "key22": "475PQcAkyJgJWbE3h2KJBk1hZuLA7LWjY1uJX3UZxEtHLpaxfwiyQKX6c43AQEndkKEfPHHBBFLEgnwwKivCFTvT",
  "key23": "47a3rPtUkaaDgrSsiqx2FtXfBsD73oEAP2RZYFGBAX848RaRmB6sXYbotZkuSLmnTxmmA3r546gQwNRoyzv94pJH",
  "key24": "4UXmQhZ31nScCq6ageEeR8Geu89DBhSfS8HEasrpqDqdh4PWtaadhfe6QtxLBFhwfcVWrP2p5K6e5MMamvuVvRr2",
  "key25": "5PxV5gMWVvjruz5a7aYbChXsWpDJd7CgzL2VyR3vdRzrrTUQXWg2AtY7QUQ5Q6VSzZ7AQo7mMwZeGJBWKq1wzydN",
  "key26": "4xgHijYJV4NBcbjdd2Vt4AbK4KgtHPJd4MEck3mZpJf3GhvzmLXevCpjwgs7XHyiXrPnNpJwjmcqTicW7wHcBvWR",
  "key27": "23Py2a8cnVJRLC3BRxZvhrdLphGXtCJAPKbHQL5hFwQb1aNpsM1ffbEpLkxD3nSXi2hBJvyQqPxtyAtqyb49PNVC",
  "key28": "qeS88gWLGHMF8QPwtxzM2A2z9EAUrPY51Tn15UY99KB66APyRmSS3FqwJQqPvJnqwPvP4qhk1D6U137rRph7Jir"
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
