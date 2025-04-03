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
    "2odiqTZQ9BaCNwbvH6jCfAe6YSMiZQpfX9CjwgaqL9AaykBjDG5Q66JY2hHiC3kLLhiMzBHSpTQvyitgrZkEPfKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ix9QBtMJezekHkc3myFFugdba5MnhqM7kDmPgozTPLp5gdhmJqoanpwpFn6VdV4K9BAAwpd75jVmonzKYHKjHaD",
  "key1": "2cpB8rHDLLWHkxd7u14vPFuyWG7NiSLRfWA13bxPkWYFGbCt72gcJ2ekdtSjojvRR8SsPdo9BV67qAwrp55nBf1x",
  "key2": "632t4Lpu96dPj9fxkqR7rcWL2VGfF9TdtsLH3r64UjfokNShByFRVhdiPns9SrDEUp7ZNNxwom9An4N7ystUNLLK",
  "key3": "2JwHSQLpbRFB7L7iGdojhq2nvxgrcCanXHNPmhUJZ8igujwt9oChf6wCiXEe3DpBVV7q6UttZAe1gG5o7S58bVtc",
  "key4": "4hw9EzjoQJv42A17WaQbKsw3yZi8YvFUNBELr8jjQo6ES26djq2s7GM5QuS3Qc88FhWZWJycsgzTFk8xY3d2dMnH",
  "key5": "4BmcYUsnYQnbU8e9M9jaVgLF6VBUwcR3AwhSQM9nfdNACLWwzadGaWWVCqzEcYvKZ1RXsgZmdiFH7KHjWCg4Cw7i",
  "key6": "5PYcqEaSvGjtiG2euqFEaaCUod7TLu3fRBinZtrZsRhmrABUx71TzDHZqBD29huyq6TJRggHuHQswn3GoqNg1sWE",
  "key7": "3YMBWRjppVXqCUxxb3xrEU1n1L8R97DBtF93g6pe9E5R9jNNanpemUbNKeGWBcGmkajVPWR6EhZgUnhsJoHQ51Eo",
  "key8": "5Fxc5vHQJyiMaHHEid4heL7PTa16kRsosq4XU9PWVHaF21KNrx15pr1rfk16RgW5CSEwAKXzdAjZG5SPeqDM86SV",
  "key9": "56S9Sc749Domprz5kQeKu8GN1rMu1kVs5M8SFpa2Q9DnMMhsxK7zDgXB1sNZYipYggUGYYBcMHhWTAi2ixnDtNHd",
  "key10": "2F9VUQUDPagT9N1S4TdcPu2b567vc2SZJU5go6QmjBDo3Ph3MW1rnmAFnRRiQrz46GfW6TX5WtEJQJUfZ8stYFKk",
  "key11": "3xuF6CyKm3BTgC3awQKHrmwaN54LVcZAGfJyhPSg3M5DF8xWCzAV5BjuK5LDdanGxQJVtifz8oAsQjZ4jhWG77Sk",
  "key12": "3FPegusTvkmvGiDFfYLYghp3NXJNigWsJCFxNMpGPjarvuX1eYpqYMo4FnXofwz8w5RJmJQC2T2iQwMoH9iSakn8",
  "key13": "2dq3n4AKKg8cWvTE3ZzEzp9d6CZjnwuUJv3aGZQAenDheUnfpCa2LQHpnmrtsPcbSNaaGyLcsMp7GejY66XgGMLq",
  "key14": "3LBwHufnbckmckqV587XLMAnmB3CriD3nW5WEaFn6QkUoUikijNDXjhEeHSNgavdT52rv7H6ziytb6fPdnwhEypx",
  "key15": "xba6xnMyMQC98EPERJixMNcVojUeY56oR1Rk2gEqPeE9WmzHAZT2PMup2HrEiw8czLL3n3482QZbCr4fXKuW3nZ",
  "key16": "27nhWL4ZJAiWn9jWg1EVAtn7TWbrRSabyTyGM5swfRyAY63Xa9u2SUq7n39s78FFNtDSs2ebq4fhfQsroziPJ3xG",
  "key17": "3jpiZxapXyZynih2ozs2229eTyakWx5XZPy4mgVrkpnmKWxgdeiHhcLpz8jhH1bga5QCr6V7bRiy2wdyzXbapDDp",
  "key18": "4rFVDD9rBG28S61TXuwSZ3YgDb1j4aPkJ49geonbGbGtCV5KpipBHyFURKt1EirQ6TgtbJJKimvx7YCjskrGtxXX",
  "key19": "PeR8HNYDNbwnWJtMJqJzhPhhADkdKoi5b58y2dSnWcQTSe3ZBHKP9i888WqVf4aJX8a7wCDN5c5emophMJA2SAb",
  "key20": "5z97FZuukfq99bUAZ26WmdpkqeYFbECPh9tYkc1CMS6Robd7rnpodHf4Y3jhqQbdfbfw9HCkNMds1yCRYUSSVsx6",
  "key21": "4PRo8JjZSzvB2gt7LQybMJvZ9TsNVDKPEtRCcjqDXyYq9Dahgj8rzPzJHu94i4SDmer5bZcW9Bw3j4NdUoEhvAL9",
  "key22": "4ogFoPMZrzp4tm9GU7pfiC6fdY2LWFbocmMPF6U6RNkamqW1K9X4Rn3QBMGvhZfVWRpeKK89X6FVpQwbbneXSXjq",
  "key23": "fjctpon66gcnvp9AfMS2wjnteQdSuXpETJZVMn6qqwH7TVKZrKuCNQCgxMJCCSMyvAX4PipjrYyVvFn4YZHJcwJ",
  "key24": "3mYtRsEr1ssVtDbHxbWiiNyAMePu93vNCV4n75DmJ6gAUqyXpuYEzfqKRcUWku3cntwZvcfVc1TiSU9hjkQCWnES",
  "key25": "2FAYQFNzspUUzjtSrancJcTKVCt5Lo1hWmaiKyfmczEHDCXe9Gnotgr2VZmnNsY74ZdE9C4CDNXVvjCKTdmpySNJ",
  "key26": "55d2PgxVoZQMZsbvRjrRcoKaexZ7ZdxrMjNT5MmiGoWA9QFnStHYhr5fUqXQBjVx2eKny7et6STmY7eUdqSVNKzt",
  "key27": "5UWpgLUFzReQF5CteywjPeRv6tqWM2gchesfptuwrdrEyAT6Ar4n1xPih27xEGMs3X5SoQR268VHAbS5AotnDaaU",
  "key28": "4jUbSoCqoXcWvqSqHfikHmw73VeKzY752NDZiD1XdbK9oLcTpSHBHxwaCBiUWUHu8PzbUjZEFGw7w4o8xTnEXhMH",
  "key29": "3K5S2B7Ap16h97VLoSfgnuUoZ8CUrdtuVEMPsieS4cMW7vNo8gSDRStMJXg1oQ2d7HhzJgRkSrsuf7nifJXpSZfg",
  "key30": "5M3LisaR1xUopA7mHfvtk3iSjessSDtAXDmTbeqw4HF9sqdN7CJt81fP9qyrUNbGrZiiX8EsANERrws9ieQ8VH3k",
  "key31": "iNMQypGUUsmUUbFdcrTmAfopry7Qj9ZVDSNNU8n4PSgSUZBfi4V6JQBiubKFZTGFLhQbvH8YVVzTCzaotRDQkxK"
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
