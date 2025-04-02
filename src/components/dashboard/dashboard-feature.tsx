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
    "4Gbc1S7aJ51hDwZgz3Gh6bwGRS1P5MD4JXndTheY2sQYB2UNXJzsGsfTSXF9AwHcmPiWhmF2n19ms9yL5LwxToGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52skYCqJpQJHJU6E2zSxNnAFV88z7PAMKjFwD1XxKVovDpRartBB3JBwCtqnRab8j5tr2XmexCq1ihrTWLbzz14F",
  "key1": "CPHqhSmVpRgzXwTtnzipgBUZ2CGrJF8EYAHcF2WsQniyDfueATWd2ayQLKeSecHw1RcyhJmM1uFgFpgQUAopPCs",
  "key2": "KWGFqFjcgV7GkNge1jWrbSd6VibGhHK7hW5rz7wt9ru65hqHwVaq8RB8D2RM5GBNEfM6dWu3vJQoAYLuw5CtkhN",
  "key3": "4P2cBdyzFmWBNyW93CjsojkucBWzXe5WunKr1kGekAxRWam1s8jCV7KrRxW7bHXd1sni4P3U1jvF8162VkPo8DGa",
  "key4": "3uPTResbhxQMC87GyPkmr7RLxDMpdtBeh1aitDKNq7bjwRZUnSpJjyUerF4CPV2sELZfu4D9NS3g7N9MicgBspmv",
  "key5": "2jBQaqY6cpCCd9WpiGHtDx2E4cA7LFwANNDc2wGky3DBWGNFZxR4YofNcBohVXV8eTR2XPpUmFJ8XY7eCnrX8aZh",
  "key6": "24ikLFuq8uPT6NPDnQ9o7wJrK4jC55qvpfBtW16UvhvDCd5CRRH5sF1y7CYrX64MKNcNLTQHvFa1hcUXrAHF19sh",
  "key7": "5hVYtAd6NGHQMSPAczEXkysygDzEh8YtXUGtDCfgZo1A6fYDhybnty3psUfrzxrandP7AaDno3epwaVuo4EogBSD",
  "key8": "2Ko2m1yiLzQPMK69nniV6XCiSWA2WtKEEmzgbyY1odqc8EC1JaXjRScCz11sk6hF9UUDC1fWDNAZduW4XxLc2Z2Q",
  "key9": "YJsFgzNFrwua7pmGr3Fg2esHJKHBLJvXD8i277ERBdbpMz9MUB1tjz6PMjfnJQxDTfgeSHJnXt1h2TzsaJY6cQK",
  "key10": "43utQXihUrEes3jxjTJpi6VjvNT7VtkZKSQMR2RjNnFCBR7PfhzxeGtkzHmQjgKLgTuTaw3CG6z4r8Fa7nBFS3ZW",
  "key11": "22SAFogsMh3GMYLNa34vYwNtZXoVvnu54wVczLYTLxQ6P2hRqsbiYAUqoinbbG1zarsQnEwV9BwJryHNstPL5iga",
  "key12": "45TWPQJc1uGp4tfD2o6y72cBBq7RzM9Bt46VbBbvGSJn12kTpP23MAJBFAST6wSRsQW3hPHWC3X3YAKVm5WA3qHU",
  "key13": "52mxD8DzhP9imUmmorpCoogmobgexCHxyfRavZG2HRixTs86yYgTEYpgTYE1LqXs8dwsv73JSo1TAGVqHMFrCy1u",
  "key14": "2s1ejb4cVwthdpaY9thTf4SRXSGuEWqjyhmf8kQ9u8V9DvJL9YPYXqWCwhNLBSCTMC2N5dKaZdmHM1fcJDJGgBn7",
  "key15": "3JmwEUkoHdY3FbmhYizeW53PGXyeun4S2S4tMoeAzHfzCrzLcgtehK5kBt1qs8fAuTntYKPG3DJUU2Nws6iPKr24",
  "key16": "2nNak3CbhbusgegCSgot4kJwCXUdH8FbGcdG4oEc1vzGouvvi5Y8xKooVJQmxATXhPH3DffDsTJoCswRKCagj5UF",
  "key17": "NHZZg4rMAoB9aVYrqWtYEEZ8ubtmkK1erxg51vbr6tP5fA4B4ouCjTLbFG8YX9FY4VBh9MQFexx19FXcZyYjUaV",
  "key18": "4VH5seNTAiCMaxn5FsMBpeyjyAx798bxuXCjXgq3eRs4KrTRJZhrjrMrqyFecR22SntoJqXW2qkBK8FiR8L3NfXq",
  "key19": "3e6BNUjQAH5MCF9QnkqP47XL1T79W63qsEkVMginJPzVo9PerLXTo1cNaKh7wpB8FjJwYLiq3QbttDytdv5QfMoc",
  "key20": "2MNFnALj87Xuu654jhWn3ULaqvvGuAv79Qqmpda4KvP6mU4gRKwFi8UhrMeHTyUM4n5mq8kcK1vs3JsPBe8vHfLx",
  "key21": "voL2SieTqxB1NYTPmSAXSa2uUrp6WjRBE17TivaNwVdva5daoozE6SoqTgh6CoHMbfLgCtfrm3j3uEj1fjxxMYw",
  "key22": "3v6PmW2ygjrHyiRSpznt53g4sMMvwgY2W6onAxcr5i7gFNHbP21P93i1Zdm7HWFTWGUfFqCG4ZHRVvnhPhBdNK4e",
  "key23": "49YVMLijXM7HyozQEYcpSQBFjmUrTerVtHmDtYkKmgkcAQnhma5Y3anmUPs2w3PkRRw6tN8U46vtcixBLJcfuYYF",
  "key24": "Y8t6ZeB4ZRv1zwWLZkUScNXb1tC5q83aaiydNiMFVGeMcgd4hauzy3FtNQ6r8WwTyjM3rmqumzdbsPNAK65zWVQ",
  "key25": "3CJXWEEEmcVjb5vocTuWfP1nvFJoFj22yThXmtEZ7Fhes8xD1b7Lg4csw1z8fg6PMSV1FSd9KgBuf3LTErkPVxNZ",
  "key26": "4SDPTfG7f8nhAf5tUqBmJgVcWJmuBh9s1VBZprUbx8yoKJqwi5L3zyFQuvvraGbUf3FTsHTB5eV1tDDGKC1GnZCB",
  "key27": "56vbPn8ftitYxebvmvzUiXPCP2HitkP8LV2TnxEUeQ6wDLLhQpFGGQgPVEzG9WuX1h3xM4j4MjrdmnycfCD4rtF3",
  "key28": "21KRKghW7ipbeXgxNy2JNZYegWCTMM6W7Myx1YHKwi3RSdkRhhgysyegk8p89rqJWe3hzxnF3ns3TwmK2SWZgWHk",
  "key29": "3hbDeq7BcajWQEe1n3B3nDKESbMKPNuoaLXzp8avFE64V6gdrtymFqHTv4MD7N2yMC54pEkC9raexHoBFT6hx87e",
  "key30": "3Bn8MsDjUmQUrrbSVUdgp8C4L569tT6TyG8o5g6kduayo5GtkXvKHDuCiTa1YQwC51ktGHLDeZSb8q7mwjvnZmkL",
  "key31": "4A7BPsPsgukvFpvM26ScVmFErLZCTn8p12y774gvFmGKW8gba468JqrRT5Jgi43xUYYK2ktiSo28cjQTFANDCjGN",
  "key32": "3YZEfKQKrGn15CRTNosTN9eaVWBWFPjB6Fya9ZSdC9PY6B6ETRpidEFYRWGa9iTviD3GKQNH5rYExgCx8qLrzeZK",
  "key33": "5JeV2vyN5pCurV8zpiRwipaq3XXC9b4cLewJkww6SyXyX6L1QmLJZNsMZjJBoxdmtZyek2Nq4a63RsP9s716eVo2",
  "key34": "3H3s8Koxa7SMy7pJH3doXBUSKKYCPgvrqTkvzNNtaeFJHTNyjMgvLkTpxFTV62sowgRWE46jgaUVFDeH2S5KQNTV",
  "key35": "TXfunWK2S1NqJCAQrstXGhC5x5qbRx9BfhEY4hK2i5H1TWivdKpJNuW9wzpSN69od5SVCVdhnNSAfFyVWab9szj",
  "key36": "ko7xPZxN1zF2Vnk6d4oPNLsLCbPPCpi9jqisv3E2CBCfeScCAvAduzpRca3g2nPYEZJVm5jaZpr16bi9UEE1Ben"
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
