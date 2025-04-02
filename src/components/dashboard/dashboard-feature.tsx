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
    "jQbBicZ7QAX1g7CqgLi28kucrVPxjpmKnA4zdFEKbM7NrY9KFSq2f3K6GRFkCRhquk2B5Sp9J6J6WQCPLPAHZSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ETLZsf89m4hdqpcrDb9j2h3W81Ht13bot2jZVEZ4o4FDPcX54wVSdN2NaHUMJ2EUy56ZLPzZF9iKKB9pGkBhpnK",
  "key1": "eC9JU2B29m3itE8CAuJxJEZGGjF21z5bJARho5jY31Mw5KiaoLsDyCEqBmfxYCKKrJrUyjk1fu6iZShzt1ynMAg",
  "key2": "4FuWd13z8MRaiEvgeC1BPJQdErdGnkZGq3TgcLAvyw1P2xyQMCpRdFdDVY8EX2KEjYXk7ovMnj4kFWvwRFD8D3gb",
  "key3": "2oYBAYXprGf5w7eHAooRLmGuz62FSt34QBKnTW2xCf1oZw9AHACZXdduG1k9bwnr6vyMXmbtEFHnhbkGYTiWsutC",
  "key4": "3BHBVnF8MbspRcEPXV5FzzMUhqk8unNqaArVARpMy3ipxCFmeZj5rPbnuykFmrFwYrrJzEgnucNe3MTv1TDQAeGK",
  "key5": "fmFvRftRvnviwNaj1xEAxARNW6C9HJDXtMAzFiabyvDZkWPRbBxcbpSCkY31H59dGUGF31BQ63UxuLN6HxiUTsc",
  "key6": "2D8T8PeSJ71XvRzfzmvwPTmtQBXPt8bJrjYZgWb8q8FiVKtrE3YeKsShhBVbbNinK7feeJQypnUW2Q1uFmGM3K1e",
  "key7": "3EwSdE5g3jhdSeEBVotu94atRFYZb5MnFBQyat7bk33wpfsAnbN5JMdHXZxRjgkBPutrwmb3mQ9NFpfvisPTCPgF",
  "key8": "2AkpmjEhQ6YoRze89i6W6FrQqVx2tRgxH7wDDUhK2y5y2q8LdLWhR5xTKeqmFgRoB6wQsTUDaoBXeUi5zhoUD9sW",
  "key9": "2c7AUDtPWif3472jVeRqWPPWp1ML6jWtR2DZ6tz2wic2zxZF7ahVhqumu2vr7PjiuvrkT7wrahiy2vt96QqyH4rX",
  "key10": "4zDdAkqyK4sM1eCxhieejT4SuZCBVuHmZkVPEynnisnz8se6uFRxwbV9GudFydmFQz53eUKVZpU6nY7fwEt8gjFL",
  "key11": "38TawSHKZ1WgxhDQcobs8mMBNc5y6xuyQKcyuzGqMDoTQKoJBQmt2En9CtfiRsRiQMoEzStXRrT3JSm4pnYT3EbD",
  "key12": "8a6JAqTXy4eosVFJEx2XPWq5UfRqXCQCaJCn3A8nNPDEW8oWNFpHdkrbH8nuxzdkyEme8M6HXRhgMESkn7QJceM",
  "key13": "2WUnji6E95o3pwUSfNqgiGGb15PyFTTApNcVUkGhQiF6Gxi3PYBP2BYn6UB6xEVcu56BrMJKYGpLVHrMWCjEBaRj",
  "key14": "49mUqAZGJyiCKEFdHwGbeWsFWs6Lw96AGRj2k2YyWc5GtJHME71ZYk1K3FfbFMKdMQntJdeUxyXA7AGDFW9jo83g",
  "key15": "5P222bxHETpAD4A2K8vTdycHa4hCGEAji7DNuTfGDqS6C234PewNHWMrdx3hmotQdtCEzBYLc8Zr975U654TXLxX",
  "key16": "5tDEkfA13Vaxujr7cZKNuJJEB7o2b8tWAdwXGedSZoC79fmBjMaSbvvWmcqeXL1pP4KekWCaDg7E1Z58QAKv7SZp",
  "key17": "3DmVkXSPCidD1fNhxTZgCM4eKDVzPybA67Pe4ZZsSM8iQkPThuYPjf1VTNUj1wEqQ2trPMhh1rK6LKx1JZ21fRRP",
  "key18": "4NuPqGC74USEPEmmsJgx91fCdh8JujYv9rNqRLYM1zBge6Nbj6FcbBL232VSUHUycP45KnEC3WxDUProgQgbpvG7",
  "key19": "3sHKCHdLMV9d5Vk67jvQxyL2GYJ2GqfbbTm5uqQbti7qAbB6M8MHFAyY1ePfQsrfZ1LycfocoqEQJZoWuRH7X5Aw",
  "key20": "5BhLK8cCNdkPXEWXRcaT1fdfTHqoUN5KkVJ3gjX28csgi8NK8viRnwmNtJ59HVujLLgi4R1rZxmP9FF9RabENDYN",
  "key21": "3X2biMSQnWtroRMQrnjPFeXVVrboxLrWYMk7vcDeS7dsMBh6qVbjYNEKCz7txoUtbUTLmMqtu5sHx5TcoXfL9YqU",
  "key22": "2Ebs1B2Yez1d6pj79rt5J3WAUGqfq3NKiA8cvLpXGN9DspRMUq17SApb5h4JP9MewnDNLFZDygkogS7XWyBaCFVu",
  "key23": "XjduxJ817rb8UtnBd6epGokKT3bE4Pk3F8xo1ug8dRwprg7Mqa6reYjNC1Aj2oA7TTALxoL89fLJGPTwUBayRis",
  "key24": "3WAfMu99p3ursKjWMh5HfxwDEeQhnLWhnwVysSosZtGfmSPzLgUkZZEjYQ32DUhjWq2hHLdHHnN344dUQ5xPDHtA",
  "key25": "2q4oQGnLtdh6Eijwvhs36UnsEBoXoKNLtaChvrmtuUr9yqqz3yNprYUvJkRsV9eciXt25hf6aDfDa5wpPpEtyuT7",
  "key26": "3VjUyQrwNBboYbXnZD3d8ZmoNQQSZwKkizjWooYzw8bMWxeuCD5rgJjwz8X81QdaDwajoYiuhHX6yqTw6SiGxUa5",
  "key27": "2FcLubYC6ace89qpSmwUErDTGnwuDuBbNGKgwBKVef9MsCHD1s2fXJiemz95pfFXvdm3NF8iutYwew7v1qPYrjX9",
  "key28": "29rQBJDXkkLAVULTggSZGnoju4x7yb6BSjZrBQcRASegMbJRybBE8RNvfxDK42JMupSqEbN82xeJcwJneGREtqd5",
  "key29": "X8qAw4DbCa86N8QA5NApsbLLYQL7AJxxreRoigisJaGYoqSvPtDavwzmtPKGJTPwqoGpKCLaVQi4PRBUoip9qP3",
  "key30": "3RRvTYK3t9ubfdL5q6HoDdjoNf7SCqdgJtWHtKkA8N7UG7pXyyomrbThnMaaYssFGRgaQdJLksP27doPrJWdnNyy",
  "key31": "5Tra1D7fKYq3J7G17fDF3b3UwSkKcQVjFnYTsPYuu5bhDpVjJ1msc8r6ZD5mV8xCSCP4eeCnAHT9wZgnHChyQn3",
  "key32": "4P7vQUE5UdxrksPyrR5Ty6paKdEZSdz8d5VrN4duQk5kKfUKssAKY5TqpFNK45S8Tpsgdp4p4tv1ihydxD1EhcyE",
  "key33": "3nn3ZfgG2vFY1t8pSnm5fvxrQ49BktDGbcGKzye7CWSCUzmkmC7EKPXYXHj69J3TMUMk7EcEFqatrW58svcmX6Me",
  "key34": "hmkLRzzskjZ7RVD4FEVpdXgbPSrxV2PmPxp6CKpiy6N6nfdbSSmec1DatrECvBGQoWmUR27CrEmqQerpxLbxTXP"
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
