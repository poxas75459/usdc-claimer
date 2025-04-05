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
    "42y67vTX9j6iLBYrUAiF1sGGnQ7nf5FvcmsL4xkYbLGcjfg91QbJWRr47QjmEitsZx5QSNE46k8asL2fviWtRnYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hffpHqW9xu6F7YCy9bcqpaVjoakA3Vz2rjC95mY9SU5BE6Yrw7uptawhjL8FV9EzAXzqXBQPZRyzhP9WK1me4Wg",
  "key1": "5aH4d9pDLV9RwdRsn5YGcFqocB2o1pMoAB9GqCVhrjCkQTByDdqbRKG7Ks7uF4asg8ouWUZa6QtL4U6f8pK6UnJ5",
  "key2": "42Nj3gbjMg8ZtoTwRJKsWksWApC8QdAAG2ykHS1u2Dr1j9EXBV6HM7ocd6kCLZiYUWpKe6P8CTkW3TCABHxn828h",
  "key3": "47bRhoVU2jB7nGBaFDKBLVsXJ5TfiQmo4h64CE9uH4p1UgtRf6eBKCQ2EroCdJKRixBFoKgybYRjYLbQz9yvPjgE",
  "key4": "4acarjPenippE7FtPDbEMWr9KAEz4nC5EgwT6gmmkbrqiosq7ZAqQ4wZYpqWCheSkvWTWx6VYs3jsUGsaEtwka92",
  "key5": "6pBAb3xsiLpCAi8h5SmDhvsW81aQ4CrkZ8Ar57sRV6a8NLCihSvqJtuRT8ZZ5NKbpJN7J9LcvzH5LuXYfFKZqj6",
  "key6": "3gSkHWQoBcddkwx2LTjq1UpfRRisFMaEc5n5cdgATHyigaHLnGJ5Qk8au1qpBjHFqEZC2TneBbu1bS2cagmU9ijb",
  "key7": "2oorUaLFAvqhm319baJRXbmYUngBv88wGhVMgvz5pr2RULJd95pSDpiXw2KT9EXgqAmHNDJDD4NxemobAugtarqa",
  "key8": "3N75y5bLtEkA88MN8sndmYYHcjg4jogDUYRdVameSmpEL2xxsn2iWpNUZfS26EWWD7Eg1ZmKipJzdnGhKJwpPuTM",
  "key9": "4qQqTqHvMA7RhWVEvQrqun4eJjk4tYFckmihFDSNiBNyJsdKmnK5Efbr8fNq2hr953X9vQxpMy5XCAthhSC95Uj4",
  "key10": "2nJdz1bPML4Dk3Vzb6r1emrwVxYU5T21YhUKTEkJ4GUKds2hzueUUKe7qhHwec2EW3KLYLUx5k4cgwyH3SpyKL1Z",
  "key11": "3hTmyzcuNSHNk53qXUVBHdZjhSBGASLEmSTZg2kG3LYBmYPaAFvQrA7zDXGQgnqjEgCyCeDFp8rG5EAzcbz7s9F",
  "key12": "3XRDpSmS3XGUT5J7AZ4tKCtNVkvohUP5UVTgunSz7CcdS7nJpTidLUDaepWRqHFKAU28JMvAtwLdtbCMh6EqEGJE",
  "key13": "4W58TMea1BK7SJwSfCjEAAM8XkXu61d6WfFAurqD3zdxfpfqXVuw7fmtkfiFJSSg8duYvz1sKsMQM7MJv1npUkNc",
  "key14": "41uh5u5PNPcnHUR8oJfTE7xcAkA2jUoPpguuUdpgLjcjj6PL6B4QopxrrBdCRR1HHNUUdEkoVfcVNPLzmwBq1v18",
  "key15": "2KbZunsEEpsXd6Raq3tzVYtGYF3nvnU6pkQAgctYXPWyhvs93r9AYiXF2aJCZvujPnZmnaJgY7ACooQQBy17qVhz",
  "key16": "5kS9UfR9viBe63xyrTPFhFVFNoNtyPgbKaapF8qi2YgzXnjTY58YwaM1373xSJs18e6dNzXd8wCWtbEYYS7pw9CQ",
  "key17": "2UCSL31cy333aEmpeeBGQn92y9ph3mrLALaEHAC3ECrC95wx9ShZa84YpG3XPRdKCarmgf3crmM4MfUJmP3WCZJh",
  "key18": "cqMkHPZewsbQQYjsWs8NqknbY5KCqAU6cXwdBsZrgC5vRwxSyEBiLJmDJGb7FeW1djqN6KUEDn84VZrQrGMWfsR",
  "key19": "5wBTxKKkMpPdNyv5R1vAmKLd7YytPDDYu94ZmzWVepNQVj193PQNdE7ry76mjNJLauCy1CrfhctwVWAFrYJdGdRp",
  "key20": "2CWrL7cmEjnjHvVZgbaKQPZXnPgur4Mrnehcx1eopXmJe3cfVMwAy8kKRevCivkT29T1wbhCxfsE1d15NRrrZrt4",
  "key21": "366HvREe4q8FqxJBBTvvRAxLq62QvFoKaTVJGegz5PuYrRaemhfqLuqVMhYL3u3UADtLFfdLRZ9z33CPTnc6Sz8o",
  "key22": "5a8F8fukRauDdfJMDrXJQHxQReXeV7aKbE7NnZQGyX2eBst5ohUc99nU67pHd78BBFoStivPVencKDUMJqvTyzmZ",
  "key23": "37J2n5jd3YyFrKLsPEv41WBBdmDy9S4Lg5nRLfWEGrY61to9JqAntzLh8LXdangTcX22QocgEvf3Qtv6tvP5bfPS",
  "key24": "5wemkP1YL3ZB5XMXk2sDfYcG25HWadtDxu3xFP6PjMuULbwKqLRHhE9UxQYT1j9HG4vg1xZzyRack7FQozKB9duP",
  "key25": "2kx4iimwgKBM8x4hWXP7EdFzpE4QG87SyXEJp9A1rmiZnkafm9iQmqho6yc34EZd2umK8runJVBPJ4QDQ5ogsJgW",
  "key26": "2dJ6ixvy1FEUppoATd7MqTbJ4uwQHxKUhbh9S3RDZxdbfrQ4n7CqCFdpzt8ybkdonakHkiY9NxHB9GEqcqe6vK5p",
  "key27": "obD6usioafgNqWC5AN71CW11SsUNY8c4pyUi5iVRASEicC9iVoHgjcTiGnL8dRAgxFwiPDhDX12X3gJ69NYzBis",
  "key28": "4c8mPvNuKVUMGae3xWL3kPezzetA7J1Yicz1Fyu5dWETVmMvFmUvatmQ8VSeNDR1VD3ynt9E4E6TaVMGewC6G1aQ",
  "key29": "2vydaTvZxxkRFQEXrM6ZwLtXJzEXuwqFXbw5anjLVmSUr6mqFrN2EHDVmSHfJ8WhRUCRyGS3RPeQ1SpqkVPUye2X",
  "key30": "4kEbHBfnnAaeqsXAdfQMtCvQzsYD3TUunFraeKWjchn5vMkd2F1vBUES85QDVYvMNpqX4m78kRFtUx2ruGsMTTJh",
  "key31": "3SpT4foyybYvsxHxEDZZ3obzDkJDzyTUEgh2megmjeEhDQDJt7BZxc69H5Qo2aXMUsNPomcuCngmM6FmQtZwRaE9",
  "key32": "3BD2vZqrwF1be8N59v5xhSJ3FmWetGnyBq9pbTUR9twphjnfdkLwGQp9nWoSSjgnhe61QyFJQ7msyhpZNKiZ4q4F",
  "key33": "BXzUZ5FrW3GLHeqhiUB2Nk6U2kjF3GNnLcXrhZ891vtxJRxZRvZLwvGmHyuFWn5vxqb38ZVcPoGnmvPnWRtGLP7",
  "key34": "66LZF5Wdy3mKaLwXfreJD6GWaVX4CWNnhpoXiaGy92gFRQcxHTMszeserjv4wJfYud9iFdwAYXA7Up75Ubggur7w",
  "key35": "2TAbi4n1T8EHKL6sCoBp6WXyqkBs6cnWiJBqiii92EtMepMwJxbhfeeNqbBGjqpNCw2TQb79qyvtke6V5sPsHTUZ",
  "key36": "2mCyTgBa9A1KT5ayLUcSkKjVigZCcsqwZFASp6SfrH5pB3yZJzqeW55krRU7Dvh1Ycju7BNoreDwaM7iHdShdtPn",
  "key37": "5k76nRHNnBe9Rax6uvZTyGbW26uQkbxMEZt7XR2SAG9KnqSHNyKaTxGswmABUPPpjXTCL9Bz85kbNbcTEVGmzx7D",
  "key38": "4RsisfAxvtmdkwrDg5XwK7RniHi7YwvNsLqW87Gzn1GgcqZ4TEH6rCH9KjUNGK5Nr2XTCCGPCzJWQudoMworTgqv",
  "key39": "9NxpkHnqjCqtmVZFtUQxuQZdiMr3oRwhdwzPSgRLV5NBeX1urtabZH9Q3GFkvz3K6QuF5ndCVGdPDX5tfWk78NV",
  "key40": "4VCmxeRyfVXw6ACvXu9xgjtcFJdjDks898iDrVQ7K2EgaajYg586WUwEGdG1qauCwHVq7ZRjQ5W3DjpMRawgLv6T",
  "key41": "33duCcxC8M5BWZb1GRrRvjwYqAHz9ZjEPrvZve9dy7SVW4wwdLQFM8Zq5GV1AMpe3o9ysDTrEpyHJ3b87dpLomcb",
  "key42": "2vdGWM9dP8UsvF8dajHT793HnAMYCkL6kMdaJqcz8YQYect9z2iPUEz5mevQWmhAAMjnjLbdMXrHccemCieExT4Y"
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
