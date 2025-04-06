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
    "4KCMan3cKGKJhZNYDWCq1iFEWB12b55cSiVJJDd22RqMX7DJrp5Bdj51skkAF4bDvtCV4et96J8zCnyKoKWutUqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Erqbfu3w5mJB3Grj3UzdXrDf5xjVkzGBZPSZemnhqwWiGkhxQ5f8pof4n9jVAinX5rtXCzFHpKfaGxkp1DjAK5t",
  "key1": "2EZrv1a6j5zoYhYFkn1bYt2EbndsqMZuPrHty5TM3QqwWuTsKs3gWyp6t63mYkQFjhe9bX4hqP1i25JXM2wn5vXH",
  "key2": "2npc2K6DQGXLy5P3kwEDMLjVWCX9Wfc3dRuTaCxpEcpv7FtqUcMkMxm32pchfa9wD1gdrZZtGWBUM22WxhoW3o5f",
  "key3": "4eKYwjgNN6j1zZqUCjbm2QPMz2R84Qyz2GE8cU1MmcP42YpZ78NGtEQcfYiZ7xtY43J4aJjdTzDfMaDyMS43rJvs",
  "key4": "4dUe7HBe9QibieEQ6RWbEJYxJxShrSSRjmWsQWnvHiMyf1yVSy2LPMCZyUvnAqHPMsMBDzqZHD2yqftK5rG13E8g",
  "key5": "4S9mqw7TViuuQafEo9rR69xYAHncvxRrQcs4E95gaZPokqrukcNsru63nVASE81mXEfVk6Bmi4vHxzbPpkJ4L5Mi",
  "key6": "3Z855274fzWqZen5uR7gQfhTfPUrv7mLEuy9KfDwPCmJdy2cpTmaTVVra7p1uuDsfzwC2rkAZ5UF7tDY1X1vV61P",
  "key7": "XmXAeXCKAkWuo98ujCyc4cbdWx7qLD5hUwSde9rzBQWbbeTxpxQLfAN7nLgULFJax7X8xQcS4pWCtN7Yxej31CA",
  "key8": "4dTCDKFD6kV9qgJcu4H9gCG54BSrcnZPdV84mCE5f5voqq9scnhdnL7t1jMwLMRYSj7hEqXoorbdbjCzYLzH5LTh",
  "key9": "2WuQnG3KdVaUjL4J8AChkMyTcZSLG3Qea5VE9mkXochgvGX31kjmxMjVcKQfSaQNBUugvEWKvuUUxKdiGnSSs6Fp",
  "key10": "3SDGJY1yHDojvj58YtXyiphoVSSXY2zpX532C9MBUMFAmXgmbTDr8Emeu44AN7jxGVMm1c4R8iyrQaNTvJRwCLeo",
  "key11": "3DYL9gVmNufZmQUg1uV8hpnV3FiCwLkRgj65TG8zBza2fBiuxnh9t2oTTxyrcrh64ymrJes3y6EPoCPkXZgBCG3z",
  "key12": "67dVVm4bxAmvAQpbdRbwNg9bpNreDkCwWd6r2E2Dee1NiRxxiEkmWLtye4rYUHE7NNcqX8VfWKxw6wFssGFFAtaF",
  "key13": "3BWdiCdycensV7Hx1BjjvxgrC9y6sR6bRAzV667bYTqxK5AiqXG1VsGwBFr9PMz49Z6n2tqhCQDm58GxAVLJDWtj",
  "key14": "2XkpwxA6QxF5wxuLGGP51vG1ha4aLc7JLnPxqW3nh9SB25aTdsAuWbcW5mDqKg5zTtURqFn3G2EtpHNgvgVGMVh7",
  "key15": "2uPj8MScwHvc6i9DuFftwogNa5SE6dKkQijjSRn5WwF39ptyPjJ1SL1onvZ12tkQeMmuyALMQhrsLjL3Ek4cDUaH",
  "key16": "1iisk1sAoD5xBu5qwiGsafCQp1k93qyTXM89JxPkzpznR2Ap7Pgc4FkuH3Hf6rCMtLLPVyN7TXm1wzuy8NDzfcA",
  "key17": "v4fiFsS2h6ECoFPHJxjRx6h4n5Xnh6gcM6xCjM4wVVATH7Sa3ERmWUbmsDAHNZ77WoSFFVMcnvvxWVM995U1XuF",
  "key18": "39d5QPV91shXLEHq4YPkDMF6oBsNSMUSZZvzHjSFdyr8hcUS1UJjsFEU9aJKK3UJmZzFKGN6QCshv1sKMs4K5exv",
  "key19": "4arjAe3wddZ8JYmtXBx2dKgGjhjCapZdmuXmxMfsaTK5ENBd917dpW9z15x1zim474CPZSjVf6aP6MNjLTKrwdk7",
  "key20": "J1zvLNMZPidEQnY3quVRs5LT5qJnVzQU4WvdU4wTdUYfhqUiHZ7gBBHomPPDecLk8yv9qNd6djEKZKMTyx7HtGj",
  "key21": "618TLxvQc6htirveM5QXGq38dAqaeSkYcBPuqPmGpwN7zUMvNqHnFr58emP5zLvZhTwFwKgpuWQ1UdN5scLct5QK",
  "key22": "4SCyuTyxcgQX52DDXPNfsYXUwWkf6avMqzquhMKzjYeFryJMbyneWkjYWCtry7oDs7Cz2A1eKj2Sp8CAPK5NybQD",
  "key23": "3x2fLgQFk4K8iWiyThgD95RDrEaCthjVmtGH3c2dL368PrMMMTbEzq3baNGTG5JqwfYDbTQkAHDwGQYUWNYGqhsH",
  "key24": "5ev48iMg8VhyHaDVo1QVsVeivUXLbM5PpBmpNNuFgp13X29bNANDyjQDjfUszmY3MaXrst3hkx5BpntvYiVh6Dn5",
  "key25": "3PygnHcHsmrhvX89notV5dcC1DEs1xK45XYQ8mAw6CciPFQ7vz5aS67wV2d1PPYVRem9qQfSSTYwH2LvAFUN6pfR",
  "key26": "NxUwz39qVWYMqbsvMoseiVV6ewkS6GJ4QpQ9YDjsuCpAhevMZwnmi1GSTN718J2hpGFy4ADwaUUsquKwFyuspdv",
  "key27": "5tSMe398bDiQMs4EDwiTdnnTWsoFsqYGYSE1GDfqNsVUoxX7ouAw62s7oDyBEvG4fc5niqFVwCWjBJWyfqM33Sp7",
  "key28": "35CXkRN677tsevFEtQgK75BNnLK5skAgiTRTUjQz4j3zEzSSRn8AAS6GBCqrGRUeZ2WJ2dWFqVYdgGYPmypz3Fsn",
  "key29": "3bo5DnDFAyLpNYE8vkbe3JAG3as7d7oeiRNc7gwYZiseQUBxvAdqJe8XuP4obSxchzadH5PA5Jd7hWudzZGdBaU2",
  "key30": "67XBaZZ1BDJAKMJd1RySwM3wQSLMoD2tVkwCM41AhYUuf7fZhisHwsEF2zDzGa2mfos8obPs9XB49fkgUpNH81kj",
  "key31": "3JZART71ArK7XXNzg5gQ7a4RjCHV2nVyeCDoAADfAhJnRd49KNuyY5mjoqvN6rcDYUbTCn15NReNCiLTYrxjKUuJ"
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
