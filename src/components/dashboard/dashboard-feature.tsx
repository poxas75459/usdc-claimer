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
    "21s56z7LDqv4bBVZwpPpSM4fYgcisLq6jk1WvDtcQ5isjm2m8tacuEuptPwryGn8GjACYoqAPm1JEKmwWcj6ZzEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1xCkXm4oE1RiVCewLywdxNsuTpjacPgFpy1Ec8tXyAECfs2RxhyqfDUUKveoD6jv4b9CZao89DSAb1vYBPcKUNE",
  "key1": "cGUsw4dNvrd7q3ygE7SCcLm6uKEYVMasK7BJ3jyvaXwgQM3y9HMzWGRTXB8vwNQr9av4jLSe4sav6tKzXyWwzJz",
  "key2": "5pCzGwTfu8znFsaMR6xmZPvus86QiWDXsiRzgftEAhrYeERPnV6LQ87moZLmc3MsVJuUKKFTqySnKex8Q5MusV26",
  "key3": "QHMZWaNJx7GvhR5CmTiNt91d9pjL4iXCduEWM6S2VqsGwx3p4ExckUq8XWHcZr7i25fEXHYmK5D1scTU4nncY7H",
  "key4": "2HXRo2QZnmkMSJaFTwJjUj3hjiDPp5RTHUC8o993R6pzrNMgP9rxbW71hQF5jEb9D91cHxK8AYRR6iPTRpusC9Be",
  "key5": "RzX2QMT5tN4jGZEAZmjdpAD7pj2m5MLf346NDB9yJC3yojsjRpUdTHdvj9BUGQW74GEoqp2AoU2MuRXtNK33KzG",
  "key6": "249ggkTzYM8mewAZC2tQ5RueNW6qVzR3vhM3deeVJ9DtxsC5UxAxhd3VeYcmKUaHNkv8zZDQMmz2BWqMbLKuAjjf",
  "key7": "3vBPRkGNnXENPnmk7R2uzWrH9wk1bwKsyXXPsGj9bcA4ZXN2FiNM4wSNHYtMUu8nbU74zfWCPsNpG2Sr848Ajf1u",
  "key8": "5ZyW8Dn7Pouk5AjuX6WSwvruVhXbLqpnxCCX5zKooVPFKgiRwxcqtr1SCEPY5pjZ723nxahULmWTSCgJKVfA5gYf",
  "key9": "3UrC4ehXJuE1eTFmPuPPY1LjJTttFY5XQNPLd9MyGbtYLCSYmdyLnTcaEemWwV4TgZVuH7mw22oErrLsGaaEgKqb",
  "key10": "5WnTr5ybY1oGfW9ZpHVZSki4ZZFLoRrfY7jZFdBVQRVicMLha7KmxpEgs7L7vcTnRprjqPKEKrmfXbusWfizjKts",
  "key11": "3migtnVmXioHAeKMDCCCucqYKE22SnCj8YWJM7S3amP8Fh463R9to4yQ6ZLbWUQ94YSwGEG2Jg8WceUh2MuvZEGt",
  "key12": "51gJ6Jt2vFtveha5CXB9TadX1fWQa7YnWW5J8hu87jxv53GVNKTts8XUja3eHQHo2dP6dR8vxkH1bbegkoDkhtd8",
  "key13": "48oEULkhpfVu9jXEkEG1Th7mypQLsruSdwrnau31iV9RFqWXJ56GgTpxBJBCq9UdrUs2wP5pzoxkwh6s3iLgC1AK",
  "key14": "QdB5UkZqZ9QGPZecS8ps1cK16EdctG1CAjkr8Z3Ryi7beNghpbDy8VC1aEquCmnwKgJcS1wih4Gj47ZCD2RypwQ",
  "key15": "4Qjj34bUqRgfBYm2hNR95xXB7pjWCY8Sspn6eFKoD7uScNkzLF3ZBuYvRbrcsf8Vq4r32Vma3iSCyC8LZqib3UMC",
  "key16": "2QaLjeVyNqQ9xUEFUEfV45vwksp3LtshB2NskLdWC1TqPW5H7rCCYybk7xMe14iQYu9Tcqqen6a9oDudxhpqTAYy",
  "key17": "Q4YepMPr4biJg4SYE9EPS3C3LmXGcVQm7YDmwzZkbhjbjJKLkAxgUs1fYjsZ93rBx6pCqRcZXL84VojrBmKABwP",
  "key18": "5FNqtkHegVWiaiA1xHWx3SrX42CuLAGYRxUB1Y3Ab7Qb3k8S1cHiLQEbisAJvUDSdxw6jP1ccFmdtvuhs59jq59B",
  "key19": "3vj2fEZbKgT1e7d4BQrxpBEMGzxwS59Q8dzqAL3sr3fgB9JmwR816PsVAJ7QSTxjatkLCUUNYWN4Nxrq5CD1cAea",
  "key20": "Le5FS1ynznM5fq1KuU235zYqE9Ty37sCs9Ws4KuqrHL3C27T1VjuTiT1vvFyEVbzoyqxoP1iUH9SD1gMVnMSsmd",
  "key21": "8UjLWm5HQwSWZ3E3KVGJraBocup8pEZZ2xoASq9C6BxnmqvpNzLzKr8oycYpD56bQo4u4TEP3U2DqF3RMDeCiBH",
  "key22": "3AKMFgjo8Qi1jNTziGZomn5MWyAQQsGkdMUPKhcwijLQvMTeuzxK85KuUZmftGksf4U43TwjZqTdDrU1u3p5b67V",
  "key23": "48fCr2mtiag3kXT5hqjHvEenepYmGro7mbyGLG323nW6JZGqzQNp8qwwr7dT2gQhVgDCL6g9M8YLs8w2nm4GjJua",
  "key24": "eQA3fkKCNvC8XA8ZeuvpEVmr5p25TWXBNiMY7vsdECWPdZR6dyBnq76kaYF3rUhnPoXtc5Cq9m9AqwahYiv3WVn",
  "key25": "3YBFTTD61LYnUqYxvFqoMroRe4KkQM4SFtc9XQEuKNeUxcmyB4ipNniDrPeWSEVJdKorbPHqmsvedd7TBXfk7D3K",
  "key26": "Tq6gGHUNTj3SDnQ3KzQ7ZhqpdnUXvfdXzvGeacECG8JJgQ9cua3TvPS9UYNkCoVAmai6WG1pF1cx9r4CyJF7XPB",
  "key27": "5xkwwTn5Q5tuxDBRWBRp6zyMhDW8qZQVn6jReHcYryyaLr4QxKji6UjnLxtdZoiBLgbwKrKo3aQo8KbqXmvPhyvv",
  "key28": "4JWj5tEcQBs1Ejwx5XJR9NdXMhiQfAXVApmY7LUr4RYNJb7QMN66DbaT17HyAAn33WQ58tARBH6bBnyU5Fx9L74D",
  "key29": "2TMwPpyoe5Jrg2JQdg99FydnkASBmeLaXD3byfJtgjjLxiwhP9qdkpSMuzh36xSeoPPJTKmocgZxwf6FPe2T1Mjj",
  "key30": "aFR8k4PBAjq7gJLZVoDbG1Kec5LMfdmTGMCJwhtb3TCEBCfLNmhgeXTDGNiWhg2baLayhNA5r5EY5SL6NvUkzd4",
  "key31": "4dHRuCrd52jguV2CefNSUcUdetZFsjdbJa5p4dZcT7tcnKCUSrKzPJwLMX4uDzt1NP1ikDdJC1Fzk3LC5hfJtBQ7",
  "key32": "4pYuYmtqozFN4EhNmZt7bfFEF5Z6ifGtqBDwUvQBNaDorcVzVzEn3hxAiTuMZ9mow1GXYyGx8bsdEG3RxUj2fVRZ"
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
