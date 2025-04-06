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
    "5BjwfgDSrPFZ2csaAJdJckHLWdf9X31wuFa1MUZ7sjgGrEzKM5o1jLv4neyoR8puhhaJgkTbrHsztqgHfF5QcQGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27oBQhPU36Rj6xMG4kxoFF3GYKBsE4Lse6XABK3TswUkyd7AxMLcL1DmPkvZmG1EKVhYe5nmoePSX8oYCntLptcc",
  "key1": "4EBuMXgqDgqen2F2SEXrQBSK6ZLo1fSCNZcQkwA1YopcYd51iGWaNNmppoPAP3f4FpkJxA2yVaAyXfDyyrkzYLSJ",
  "key2": "4bunCFJjkeLZbAxV8XE8FQfbPg219qwNMf6evZhzReXDpiFZ2pTsUpvKJFXeWUkFQv1SNzMzLJM9WpJhreci3Pwk",
  "key3": "5tkE29g9HD4j2ALe2LaBMLUHvmghPihEUNGqWsffvR176XPnZgCnrbWG8x5xJk7XzLPu6aPKV3sF3TZ8LgfdU7bt",
  "key4": "4SNJb4e1ywkNeHyHKijmPQ9wn1ntzrkcMmAV9qsgSyRe1Pdxu2k1DHowUJXN5FQh2JiVTqdBq8D6mHV52K2q8QK6",
  "key5": "wtL1FpH8oBDpTz5t6E1i28QBczgWWKLfnhWEAbgAxkHBk7We8bE1pPwdTkXGA3fKdUewU35WiHeqYmUTE8nDXM5",
  "key6": "8gBNk824EEu4YdbxuHtrq5FQUMP39cZ6SHnDK8XtGaxoVseJ2C62Kz5hdX4mAcSKhL1CunbZ5M7tFXtdqBF3WDs",
  "key7": "5cEBXYzfEixeSyyGwod5J517DzPFrMMWehYnT4nrMa7G5cweoKQA4dEqiZ53biufBnwHK7qoL1rpv7pVugpbfaSJ",
  "key8": "239m1fHhG1b6FyREK7qJtHZJa7ZJ5nHUXBsBRXKhybPJbnMQdbtG94YTEKHXURbZXb4bnVw7JfvKKkuhhxt87iW6",
  "key9": "4Md4km9h95k24wHTYkp6xWv9Jrhcf344Krdar9vZzLHwfj21TJgjvD7dqzu2MzoTFKwmEX3r4nEkWyK3w4smAJ8j",
  "key10": "3myDqKp9d5k27zapdxMrEMdaeitjPA6BwWjpfhj43aKt86USfUY4woe2r85m4wFcDqYWc98UfHf8T8jwSrvPPYWh",
  "key11": "5hBo96sYG8yhEHhQs4q5LLQmXGJk2ErmU4Z54az5Z4StNHVcg22PkcTmgnKCNvqesTpBgcQJaMyqqVzG2NrVx6ne",
  "key12": "z4Q47LHhpgUDKJu9GNLb7HFDHuaqpZPfp9oZZWRKKPyc6jpobrQbTyvCna7i2hpV2pvw34844Nxj2fPEqaTGYUS",
  "key13": "2a83FpSFHBJnWqCKENVNd8mSPyEFDeV1kfeRdbyVi2wp9oZfhYjzbGPrq6R4V3kD7qq8bMYUtZFCNdLvxJdB7FzF",
  "key14": "5yPNkFabLuen4ngyc98QygFE1Szag8C3puYcAeLSJXrhw5VaGmwSPg4m2wRBXJgs2wTvXuVBkpBKcw6DmWa1AjZm",
  "key15": "eqvsM9vMAAwV8zYgtKkGeNHPABgB8ZSyEvHUs7PdVUKbHsU7XnwdD7LcfSiu8oZSfNoNHkMbKFdCfFthSGpKL8r",
  "key16": "bszqexFmFNv2rdtcFoDar89n5XfdLe9Q8DuhNY3K8DWMAfginrgK8Lh6WiQ4S7iFRALciMPqZaZ4EwBrRWXiY3Z",
  "key17": "26QJX8rpgeDuLubCRCC2dRU73aQ4zjbyBmX1FX2M7yZD8kYgx11zhdDWmZgrgj9yk2K7HGUHj6Cbxx4N7YD8qCLh",
  "key18": "36F64sXsZB8niRat67wsWJ4LcRSL3G9LZwt9io2v8rcJN2xRFhLEDV7ZysEVNCexuejvHBuQ2bFj9o9wfKiKCmAo",
  "key19": "3PESmTzjqovwGxrAfk19JRdZFfdWeANLwFtunAa5FfeZw6aMyu3ddE98HpLtqXoo9EPYxzATzryqtJSZDLVSiK8R",
  "key20": "4mgLxeErtvphK4UxsxWJBHicaNuuEQDcPeMr1Zib1V6HpvYYbJy8CFixgBEzT9x3RWEse25NRWCxrdwEXiJ7bYBB",
  "key21": "2HsePyPeUjT8vREshAEUqAAmttk5poSb1A1ZExCaiZvasq2w8HAyrFtBAx6GsaWJwNhr9qFyoXj5xTR5BWhdd7yP",
  "key22": "3LPHaRaKsYXZtzsx3DpHwSyftswUTQfeCP8wiQy8FzZQj58XcBcNKEQB7Rrzqr1wTToGVcZuMxnt7B6yD7VNwXzM",
  "key23": "4PuJqYSAWkcGhq7ZhTNEGtrpi6AkovMHQMAjjBYWLGB4nfynxFbuG48g363sN86mqwwWS4qVZyeA52yrWAw7KJtD",
  "key24": "3b6tJ88UtBgQEubxLEHMuskj6pKTGjL288nFANWJ9EenGJCNuUG4PPfpToqbA7YbGjQcqAd2QVujZWfDEveNcXju",
  "key25": "4pkrhPDr5NRb911zhyyqCX6cFQjJHeEyHKJ9vvQ24reh2JmrCt5hBJ7WriUraRWEZHWkQwysPwptUNg3yVhyDTts",
  "key26": "GnmN8j7xU7v7k4vo7MbneoGpGqPj8xhRuVePtzzNXewNHm1Uq4pEgXzGNqPSPrTMXocMY4pdFokiNPRtEmokoyh",
  "key27": "5SyMhPhfZ94eDuNu6JMT4RF7x6iyDEoCh41Lutq3sknDhyq9rtnPyUvrF84arwXSF5bQsqqYUdA73aUwNETjF8ut",
  "key28": "hgBrsdfWqsni9j7J99nqsThuy6e1SCXkWhhwWfeGLDkvaBqZH3MvKbEJuaVCvWcbnhDZCasecZACx8JVcj718oN",
  "key29": "2Suo8fRnxxd5CEzqbhryc7assdkr4WYc358HBXgohd7AzYS15GuU5tr2DiyAFW2hPMUbZxGuSVRM6XLJvTGhCq32",
  "key30": "58uhdDCJLgbXqC3TzMLakFbiQzwevKiVhaoD2EizZXVu4AcvuZAtpLTJttjwNtDKNwNkXyg5SYQmKbDofZDdwRVH"
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
