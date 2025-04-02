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
    "3arKgBbrDD8P3q9rMZa5cjtZpnut7Qi8gW4BHgrSqNXBiCjnVk1c2kL6LsmDpUFJWe2K47Dw7fk81hYEaNQhYNuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vcnPGTzvcRxVycjWjTizptNNCTvvuLZtuzYQXpjgaXKjTp8jP8GBpZjpQtwb2NLv8G8wC7QVgKisKxQGWLLFbMz",
  "key1": "2ucPJ7yhSZqtgr76UQXAahrS82GKzkdDMBEs7DSkJAMi14jrGpo3DBk68hw6XDFzAdaQyM5yww1BhZtg3rdqV8Xc",
  "key2": "3tyCeTp9osA6i2fSmmPPkq72F8KVZnjxukdGV4PNpbMq1hXKehVj8L5JUdqXg48JwGZz7bWNtoYmpyAZwTr4pvov",
  "key3": "4cq93rmDybV97dy3BKaNjrPSvYuNX9QUUMyD3vqBpACjno6J4MRgYsw4YBRBUnqJ9jty13Hox2ka1zMHUCX8KV2M",
  "key4": "3wPcUtChLFMXatq3vdGmjLsgvrpYhsExCvHmMWNH33pfVf37pHtiBQ8VHXUKDRed3mwXEQm3SjUm8RNx25nFCReW",
  "key5": "2hur9K1kaBnPjgvnCwSfcFVrqfRLCHJ9H16QWqYXEDESsQmVeiv5w7sz1RQEnqfT7HCCHa1gpkGhfQK3XTKLHM2f",
  "key6": "5DeLZ1aBKTdrpcJXZiTvHqggGpd4q8dhQf4mXFPhpZLKLuxkGut3j1AZeTFerT8VqbAf5VPwQiScG78XvpsYEdy9",
  "key7": "4gM7LTLc1N8WjjcSX3kEF3wE29UHKanRUgwMxvSWAg8cAZbmjkRLoU6UBj9B9ifRpgscB9oXBHMoMTN4f639UHa2",
  "key8": "ppgJZvDzGdvp13JMc6SgkpoENpMM47LpkVpVrdAY64FNCFXYnfHw9AKTtYgfehSaLiW2j4kJFakdkAebEmzUjku",
  "key9": "4eanJXKDjLtdtirp7nUjosecMuREv3mfPWVn241SiNjPT1pcF689cgwVjjTAKczfCYgiFf7u33eoVhj3PuNNqTff",
  "key10": "st9Ee3ZWVaPC2zmzRHkCMuWEGyAXgJkjAjeH9NrT1fDXvaTz9QcVztvHjMHYfqwUkrvsjqtSN4GLJcp921Uo7Wc",
  "key11": "371cEezX2cQ9dZ4prC7uhnM84szL1vngnMtM8kt8crWQz64KS2m79TtFTCWgJwB43YgHiufBS5kMmTUm3xw74c67",
  "key12": "5hqTCDX2CUprP5RxA7pmXaxKkaDNPLv8oM4bg9YZNFenUW2zCczR8wHrbe8E459HgAUPQXL7geTrTHzzAPtj76X7",
  "key13": "66niWGJu3DuSv1kmFWcW9bTY1e1uRvsnhPtFss4MtSHW73Ggf5VWwLrBd3azWaz8GkZLD3sMQyBCVMqrSDwFBpgp",
  "key14": "47AzT3nqF91Siwd2xMREeUZbagyWWav93RuZkqvW1ExQj1P9gFPWrQyRGrSNaYHzb99Fzq1LYqiA9ooQaD4WBkft",
  "key15": "5bLpY9wZk8ZeTirKTLP2XAGzEpxKcyrjX9uGT7V1yVEMcmwgjan2dg2XXkDDpGFBgKtWmhTCGdbZQv31h7QVPrHc",
  "key16": "57ecqCKM9Lbs7c5qEPYKqnBpz6PQc9MF1XmXxbb5DgLi8cXtpR6Fd21Znxhu68rGXjtXr9HA9hubbaqKZnuncv9r",
  "key17": "5pVym1bZQZcxwapvGJisL4soNphxsTQUNL539ue2wSQZndYrBmsLgqNMSRTuHfak4B5v1kR9gVsiTA7t5XdsfYcn",
  "key18": "5Y7iMnF3Kd7Pb88uEH57bWxrPFSfQxmPy5HUtYiAUw1zc6NMe1H9RgaMQNWSSRVsWG82cWsgPyMJLvcoL5p2uvSk",
  "key19": "3qv62wGxs2w9yzYqXJmkkqpMuKocGk2Pg2CSMBEWpCVCsZYtczAw3AnodThKjviP6U4zuPh5GgkWpmbowqKfBXkP",
  "key20": "22N2rije2HAY6NobJdExm9N81Cy9V7EfULJAYQFLfSRMaa6XDXHw5NcCksjdapQgzsEzuJDarRS2aKGNTQFareYz",
  "key21": "2w75ZkCCRwn7qQY1A4u7bQDjsQNWaPtUUz1ShbJiRNM92e6ppYq2TRDkAek558nGSGueH48ofoYA8mcWn6M6Nynm",
  "key22": "3PA5kXcBPi4RWx2o5NJ3DP4wb2aha9VwFmvbnf5q238We8vTaT9LPQLPwT1eYELMxU66irNS9UftKzEp6k5KjuKC",
  "key23": "36s5EAeNFe8dVkKTr9WuYqtw6eYRdZhY8tBMAzKC5SXh3huQgLgs4acjYi6tK5MkPjRyEF4gRRPbnZjadMvbAdPk",
  "key24": "2q22ZKPVqkRMrzGZVrK2CzNXrTVCKyZJdNZghV4ictrkzqphaSEY5wXxb7gFDjKy3XSM3JXRJjUEy1r33ebpR5yu",
  "key25": "62BZFwptzrH2rEpjTqKviHCvbF2a8QKzbbbLmN7C5iRuJi6En5yVicrdZXoe3jmkH2NqmTQ1TgQJGKzqvRpPhLRw",
  "key26": "5unGkcKWRSKUgx2UoihwCtNdPtoVsTuwJ3bHqiSyc5nEFRvW2h3hkxiTs8pznTzBgxFd7UMBJU8ZxD4h16BoYYav",
  "key27": "4PF7ZwRDR5Uu9g6cwvYxwTeAGueeo4RFMqPv19jGtp86ve6q98ksttxJLevkQtArB2e6o893pbNvZYaD8R8MbMcY",
  "key28": "4M1r1iyCSDDuwr2dLDmqc3SMeX1RYJSvjeTokeLjAA6Js3XgAHnVoyZLFEdnnTrqNv458ghLYyS435cqiZi78a2v",
  "key29": "4BsgPp1KxqaNofToW2x8zDJuqzRkoQnvymhgucL9n9q9U7N3MQsXRBbQF2M7qpg2QqWApSDWZHPMRoTJF2SToxsi"
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
