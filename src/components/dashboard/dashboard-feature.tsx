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
    "zhXqvRxEHS4BUN2gP3p48SPVAPm5uuxREttHvpDtp9Fdg7xwYEdjkq5fCbzHL6AiJG7kNjocEC3icKs9EYS4P3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cZR2FYGBpXGogUcJTGyzWqMwGdN8JXDYYAeTcaKWKqE9BCcggWHk3qECXJ48pHMiYmZYMJAcBYJxL69bN8hB9t3",
  "key1": "2JtbBbpkoULsRdcVb3ihehKq7poJqrR7SdpdL6LPrgWABYqKtaShKd4N9iEvcXMMgqa5pWjTGPo4EdUGHNRDygyp",
  "key2": "5Gm6eAtsCAD6QHUQLkimeuf77zb6wFcxjwXpeGJKVi4kEVSxrp9Yi9zuSy8qvjJZCMEjT3bLetDbgNy5BQFCz5zL",
  "key3": "5VEs3Py3QF63kupnWQfAN31A3JQQJRJp336icNp4nB2HdnTuNZ4B3UjZycGdDKSn5BaNLD6RB87nFjeM17ABLRZR",
  "key4": "HgzGpUjfAXknrYJJaNeG8JNp28UVieP7UjkSFhsBjD2sccKAoGe8YcaujhZBymHjX5c9n4twXL7gNrfTUwAG17X",
  "key5": "2p6hojg89du68zuz7k3p3osLrn8kSJxrFnwGuR9VywTx2umLGMZeqhr6TWmEDpNihBV4MbmGspjMkLzGCdsZiAD1",
  "key6": "vzVyxWJrKUAhN4yQ8TC1ruMDR8gMoeSt3A9HMiFGsDfRjLwyxEeh4csfuLc1TXksmiUhW5MSQ8GkD1iKfuLkBvv",
  "key7": "2a6qRezjppA21cdGPqwLPmT5ic8stGFbDmp4dqz95JRdTsLD28V1ayzQf3g538uSLtHcowk52ziXTpKK6zvWsxZX",
  "key8": "48tYjt8xn24xLKABXZeNn28dB18q8wUr1Kj43mLSEAhTxrzSsxLFp1TV8GijSJ2igZsTsqUdu6TNm4nfu4eqfsMH",
  "key9": "43gZu6rAC4MBxQBG3o7wF4fmsyiktNmWj2opnyG2CzUkGeR9UVhqr9Lm9o7nzVR4fVp4rJxsszLK1VgCw1SfJjCr",
  "key10": "4EJ9pfzhVbDBcKp5pRoHTrRTkGPZo4c2eepJBgCZp6g8wTDyhvzbdMMRcUybz2U8c2oySj2zaysLfMh76j7DbJQR",
  "key11": "jtQKDVnJzMVBy3GZzK7NxU8LWE7igJxdKa4CKQdXZ9geJ81jKqH8bqSKX7LcSfXus8GnS91BKDqX8FMf5jiHPBu",
  "key12": "TALLEZWbnFDbyPSZkXQrHUx8sD3Go9ep9qRuPeqkGj15LHKsD5pZTiaYAAanC97Y3VLwDZmnHUv86g6tAMdww96",
  "key13": "3ZfqvmfNbdZEqaDX9qj2ZS2A8a5HEz9vgrb6DQidrr2RHzxBqvrdVkUrjpmc2xGKoaGwAuoKir3BwMRhwaH9TU1C",
  "key14": "4ciGRSjHcs8FMxtkDfpfpTSe9w5k6DigvW8qKpScmv9vd1GeArQ1KiUtncSJXRaeAATPXUpvkKmbd1zPCMgqjaS1",
  "key15": "7oRxi2PsCVi6UjZxDUpNiiqMGLrbo8AsyfTGS8gvJRtv232QeFPC2FFUhqQEk4brbU5YHxcH1GHm8HtBDVjsfEX",
  "key16": "7SjoAXKfFnnbEHrPLCATKnEqGBMpYRvMs1JZNb1YdFwRLstsT53F61Dkx8cPYkKC5Vtp7Tj1Re7QJNg4FzyjTNV",
  "key17": "4h6J8eJKwzMPP1S19ruQcA1aiVVPnsKC1YMSsD6NRf5whjZovj6pjo2Ar2YtriLHTYsegWFxbvhBXjv7cwNKZqg7",
  "key18": "uUjKQ8xiVQgVBi2GKHkYLPn82oQJzqfyrwZqNbhum6GRXX6ySMG7a179fF3BiA9rHwqNBggsWU3mb2HBKevcRTH",
  "key19": "g1ZEsXhkM1KW8v7bG7gzfY79XDGaopNaeUkM4qDH1SnXjMMasuYbmZ68eUF2wv4JrGr8wzacMPnQSLS16qH2w4p",
  "key20": "2b2yK1dt17JPSidr4FDDoc4HS4FJSjAnovjdVwnntSqMB2niXQuKeGfbYL1nqBdnsPsAhKzXr8SQ2YYPETrGj2xs",
  "key21": "2evdBeoFAxGnq1R7KyJzSJj7D3gkWMvxvVa9fPE1TVFFqAN4LGVKJUSnxQxyFTtfVYdudSXFHzMMsGNZvWsi3uTK",
  "key22": "5KCHbzeK1WCgNc541YUtGqCcainRhW6bYwTmEYzmnYbJ4ZnqJELMyYU5vCcjJf7y4EYUsgWeibkiwAk5dXFM2emk",
  "key23": "3NRkzwcY5PiTxEZ5vtdASf67C1pT2AePfLZfmsVwyUqLuess5sjZ3CdErB69Npuw9ER4Uf49JKne2MWimjfFUcVB",
  "key24": "3oHLaQdoDQTaHf93oKtwkvXNNBhN4tKaD4KZpfyp44XpCGsTvbwWsG1vw2MjtsFcmfsNNtxzvKbNiSK5VAod7D4Z",
  "key25": "5PRNbGiCX8wLi8JXFoGWBGJVCNExedH6bw4uQtEKKVpCsM7GMaDML2DfYPTgy4EdW3FPj6E9xS6HRRaWfksTL5SQ",
  "key26": "AoqrQoVVkUCbSpbW14ggcsytZgCSwWNqYBwWxVZQmq753hx7mgq81HYRqYsNSdoZhjvTuVxzpJ9tFtFfpi34JMK",
  "key27": "22k2irejK33Dtxt8sBSgygLJzeK9LHpnsBLLmAPRoAMzyWqKYLJE718cgf5trcfppkncxCvx4ey4RMnqhszvmMzH",
  "key28": "38cGwtoJ5nDRnLQoMndrVPweSbj3JZf2TbRBFkVNuLpjNoMCf6U6q3bVizKeSb19UyJVixeXLhJFy3Jw9vRmk837",
  "key29": "54MCaqGpaSP98UGvhQB9KN5YcUFgkXzsEcj4LVrhbAYREjB8ihmFbmkusWqjdYPi2SekQXprdgYk2P6RVy1FgVTe",
  "key30": "2o2bZue7KXy8CxgGpBgWnYFNNxHyEkDNUG9xvzdWDA1vMWbEofBwWL6gTbhNNApqQb1NSDALVM8g19CLG182GwU2",
  "key31": "4Z8hRNgRk4Vyt86sbRSTB6us1DMBLbxGzX9ZrTyenSQkBAq9jU7Bkk11c8MpgpCo9rWDPAACHWmdKy6w2jHnu53u",
  "key32": "pisP3ssFShuy7dWCY539rUhN6WHNkKbAU5eAWNbESawtQ4gtBRgWdm3JJo6bkmq8oRPYUWbNeUdKT6u17Trpgqw",
  "key33": "3xaqcMGoydDM8ggM6Ex31W3MF46PTGzN3neZVwdwRPf28qqwWJMcqwSSvHPynSySHEpfVPQxx5A1B7dsApuwGHm4",
  "key34": "2p4YccrutVuFLWHpNEAsnW4MBNZXrgHS34Za3SLfQ3hTLsKW6W6ft6vpmu7BpCgYvTJqGdczBVeSLRCZx2j4zdEc"
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
