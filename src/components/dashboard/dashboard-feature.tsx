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
    "2FFZEP1Z43ee8K47BiHfKCiqpQa3gduaesTgfV5QDsGJN7qmWgCaBFSzNtzFBdHHSqopxgYz9rXUZBxQaEbhZAvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e6SNiXsFtiMEZdLLumHB7HxWaAR78NLJrd2qD2ZBtVyi1eCsRhFkkWMN4JAopquK4MyjxMEY8MmVZUhNYnRWXwD",
  "key1": "2iWKqQsi9ut8i3t2uu2kQAQ9Qko1T4vurdYykpaazhGX6BZManyTEgTY7wxCTrxjS1hkdKviswMZNtEArhQnWxfy",
  "key2": "4wQRJfb1JairLyNGXBJS6VpqRmUgchdPRwSjGGBE9GxbVKwkBgh6sidVLsvFWzG6XJxTVViCutJPpX3MuG4ktgFj",
  "key3": "5zK829u2tDeGeYtNVvYAXmxhg5XxTU9FGmmfgMdeJucimpVXcnwkRXWBLa935sefiCvySsxmPWnmw7tg8o5FvY84",
  "key4": "c95b8NBUgPAYsEn6Pq7brdnPQ7M5gT44nZE5EHvdXXRmUBQtd6tvghcEUcBSZ1LbikYXZ8bErg2M4xTvuYd3ByX",
  "key5": "4yK9Er5J1XLYeinAbbFxVm4NJXkeU7otZpmq79xESCe3sa7W6ZvbDa7BbN8wikP1SFAWySg798ePrCE6jGV9m7E8",
  "key6": "5Qeh75Ehboa6HuFwUKs2xY2pjKq3wjyhzeiVd3KXBfAWtfyr1ZTRHU95FFRwKk1eLYhDPZDYqeuUid8Y4AKNbCnJ",
  "key7": "3FDXFJrFtnWK78Nrtw57nYEYRhXo3TBspcLk9yGWrwK1PPjDGhUhJystMc2vfBWgLysEH4VAxtu5R9XEvGppdvvk",
  "key8": "3hqhPRD7vmWXpKzv2p5xkgKYrXFGNQYG4esrqEo2FKpFDMcKjhnTmXVesxPHjAxL6s2cVDzdKBwGwRQKF8yxHoBL",
  "key9": "3b49dPPqsaQNuv5ASim6EPZhTZ88JxbKaUsWErrmhgyJW9HKMaBu2vCqmDdP9XrTNh4L7qcxP6cL1Ffxvkucme7Y",
  "key10": "4xPbnhtN315UaWF5kDSbC3422o2ErMQbPi8yFrtZRBoBE9GzYVYJfXjLZforzzRDvNu67Mp3nMPop3sgVTXWvU6N",
  "key11": "1wRqz4NymxPRQ26cM9QEYRyvmhFg5LFGpCvZWQNn4ZKpfuNC4LDKDNt4UkXrXE1qVyhxvLF5stqFDcCyj4v6HNd",
  "key12": "4EBW8HwDQj45osqrkoQ9bMdT7wYND4nLSBQPGaHDaScQZ5RVhGifSdQQpwQjak2cMBPWDojGPchhXth7Kpt5Kygm",
  "key13": "5K5SiUF1E9J6m4p9rbJ2Z5vw35iU2W63TxcZb2xAKCqveVnXRxk4BvdFJq4ccdpPwDWU1DSh88xUVakuf5QZkh64",
  "key14": "5uRDb4rp3qCxooWRdcnZcyrUHkF2HaMwz56qT3gRySAjtfNXinvkFPe816Kt1igURQzDvKGnoomV87ao5mEMVqqy",
  "key15": "GaaspaCBm26ZTaN7GnycyjPk2QAoM99AihECCbanNYddcSMB1X9cmReFdp4VqgszVhLjnGBTprfMzVRrPUo9kUM",
  "key16": "34LeYyDXqmwtUVUkjuxShi4UsNDj3TytHTLXvtw9XUZi4NAGoNXPsLdCE84PFF4sfcdQmUAWJXz8NkNxyVneB9aT",
  "key17": "4i3PV8AvsuX7qXzjKjWgANxd4e1NuEeH7rTLQ7DgWLtV81UBxroDNans1EUmKXxQo4tTrHZ8dArUwBFGaX2mwiiw",
  "key18": "4FNq3caQXH7bCdcZoMnLvJppisz1n7HZhM9ixqFMwDdu4bkjkGG3XXNtFdgkon3juXavR9B6cVdxUwAHKcCUZ7nx",
  "key19": "4PATjDZRKVaw1aG7GPraaYqFaZ1SdBqNnEap3XoULxV2b4QncRfpg397btNodJWNgJEHDqY1Ad9ND6G9SD7tegp4",
  "key20": "3uuNpjbsA3Wn8JVStjKKSkqPBgzxBHZCx6yVRMAx2Rng4V9HnJGaRR5WrnemZ6dQcPwan2zMhSPruPxc47L3P4eS",
  "key21": "4U5UwbXphk1LUoS1fSF4ZuA9vtz6URceQZA6RrTsANjhMKBQMXDjKBEMRRL9aujBSDf1vuQaGrTsPo1ArstdxJ8g",
  "key22": "5ZjmY1MSagA3J5mWNBtL3ee4GQdaHuRHK7Xnv8XVJv98Pz2aB3NRwtteXf6uBpnYtHSHPK326UvUtgTkAd4nVXsQ",
  "key23": "318yGznJSphHNKYDVzYykV6CLXd7QVRem73ZcKNQCgrGgkjc6YrLhwScv6JsZrJ76ncr5McAJnCEoCHiTSp954vj",
  "key24": "5gSSk1n6jyevKeo8aVHhMJGZaLkFbpi5Rgv5Ew7QecWVm568FXSLtNTHVy8Vm4yDdDsCSWsbieGzsK8Ky5XgkL4R",
  "key25": "3E7XGXsXfKerYGSkjUCAGvXXVTYWNFczcKfiGbo9EHa6oYiykkPv88KexsouobFSxN7aPzVthdp4fNVRBsZ9WobL",
  "key26": "45VvmqPLo7ZafSpv2vNqLC3PvvhetFBCjuZfarZikxBNgfBLXtfX1BHz13zdYZgdSG5jhSLtXVNqTpnBLMGrf43M",
  "key27": "TWKMXSPW7kDm7fb6tVFrtXxmCDmfg7bagY92nXjRbcyZRuQm5DRnHigW2qVSMZbnsj19YG4WXNyxRqqZsqEHpyM",
  "key28": "4HE235TpykMDSGNeUScjxWWGcrVogFXQnfFAtjW3YJXYQjXysT85vScTgG59LK5zHFcPWiaJUXykSTv6LGDMZqdT",
  "key29": "z6rSwiqEmFQEKu6jN2pycd658YxnmSbqvr3yWy3HC1ZkHDbRJMryJK7FyfQkmVYCpyvFEUHjuK49ejnNmQJfEBv",
  "key30": "5F9npJM1x3XDcRb4UiAc64WkX1he9fwqQXoz2c8YY53iYyQ6hmP8e5hZQ2DMjMurahsA65byQJ5ACMGYTZzhjj3M",
  "key31": "3uMeJQGLn7M3x3p1xvbKN4Tjt92743NKn8wJpFqZvgrcroJbWpWM3FXrf5KnB7WDg3XrEzaqzn3Fa3popCvNsUDd",
  "key32": "2o1nhBQEncmLhuNSBrkPXdRCWA9UoGPisag916HpRyu7q5GCVT5SFbpEbQn7uuq1gLs8WLzHd62x3HoRvCNPN7Pc"
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
