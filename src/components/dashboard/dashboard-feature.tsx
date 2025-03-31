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
    "2UHmC7hAyuRKqaHpRTBiefwQekGcKDrWJHsDjXLVb35PbAyGRv1v7AoSr7T5LXKe6DY6sNa3LsyQDJCoip7qYGHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5opnF216YrqMgik6gEg57NxpgTDZjszZySZ1pWZsqwjf1n5kiybv1Spy9DBCZDQ2FXno2VkcJFSREEDCXiyY8HN9",
  "key1": "3vaDn8geNpVNamT6eDzuAmU3RFRTYLvrJcQuBrGpAdLspvfcF2i1QN1VqgJVznqaA5DJRAiJ1HdWRShcTw7m7X8b",
  "key2": "625SCpRC4nXJBL4yKWMv9YNbYdnBcJZnDV5xdDWKMjkTh7p5PWi4y1xyYarSZy5VX9kby9sMYrzT4k69d9cQfCLj",
  "key3": "53GbVgMdfWkoczyMgX87z1abUuNauBMPp5W8ZBDVbCeAGLrDMc1Ayazb7q317JLYGaR2zyv9kAUypqTrJC617UXb",
  "key4": "2m8cjhgA233MeqGWJVigBQZPXySupPLEnphWnwybLW1m2ASHXwCttkW4ssjak1NJ9K6t4m9Y74qS82EwvznJ5TLh",
  "key5": "4XLXjgrHuzup4sndpZMNxejBbsajijZc1Lxcp7y4ZpU4qRS6SL7TEacmNr6HTjukFeCXkLV9wUk1sTZT3mj6eMqP",
  "key6": "4C9eGNmNaeWy4Ja1npuEfzqo3Jc8u8bonkaAfTiUtVjzmHhL4orNxRdF4YZzPvPRdJYdBVUR3CmiALHK2F53dz48",
  "key7": "49WY9W1D7ddYhydL7sA2sV3exiCBndHFQEwRr6qtBNbxdrTLo55f5JzCcuo3ngVgBVAURHSQeCh9f5HA5dEK2xGq",
  "key8": "5Hi8XGHNoNgfWaf3GwinDJ7uMH3p8bNkug1uTVXTf51JFCJpnZiuX9iMAz6A3rFUv7tXtAJb4H2fqgSA622BPeHe",
  "key9": "541tBos6WhmkivV1UCxzjPVZi2fsyQW3Gr74nyimq6nWdXeHgAvf9mcnemeoEL6f8YzvQeGcZgpF1nmKSrqpVFWa",
  "key10": "3zYqA3on6UdUDS2Ydk5aBCxhbEznuqubfNbhUyJmPMtAcT8xSwViEzhEdqVPh63wbDMSX7X9RsbFYYdJNeHYYvgM",
  "key11": "g7ZGSScBbfLkShxbVxpPTAPDR5bTH4Lh2fkxAgTBQvCPyVvxUVy33QxRmK917eDF2Jjq7JRYUkYmx9GkjYwUNx7",
  "key12": "Upv9sTCMjFaBtCf9qWF3UgpP3TNsFRa7C98AeX2Pd7V9nPdHutywdJSTfXvv16GRLtvrANZyg5CrP2Diz2j5v9G",
  "key13": "4rWjBNe9rzKVpkwJZ7GuYWbHz7juoCbe2YHeGe3MMbYm3ke2cUkcHAP7dgLL776ifUJrx2JQm3MsYhgC8gYwXoeJ",
  "key14": "2N7Xct5BhqWVBmF7aavFu52DvDJJdZVHTTRgwhZfV9Jp3HtDt1wcbKgkhoRykV288JYL6DLQRvMa4EFTwPaEz6GK",
  "key15": "4WapeUcLvMNx2Zthx4oNtmKxJtRPAJxbSgytpsYNJ9pGFgdhBUyfvAwfTRWsShDYrWF5spHGNENMQFWMjZMYfFSH",
  "key16": "kTGqGrCQJvFF42K4xW1dMHpx5degsWnH4aaed6TiXr2QjoyjUaYCnNjD9p5LHXLLyoKT7VKpnanukbonm6mFHJL",
  "key17": "xJjSSAhzbBzV6NY9ZR8FTz7PrsR3t94BfLgtZx75wvNL75pyXeRdi9hHPJFvAJjJrvQxbyii7iGKxod2j8NhQ5V",
  "key18": "ZQCcctUpJBdKwNReFzciGZjRqisKjXz7tG2Aw3TgC8JdzcCQxA6XVX9CejAQiwEtZhoUo3rJLLMPbzNcmhvaEnD",
  "key19": "2v9JwyMUUobTxZdiCWMwASXwbZqDXFTTU4LTorENNL23qiS3vXqKBZWx5iv6H2Qri32f9U7LXV1WbW1qsSnzbFLH",
  "key20": "2ZKpr25EaJZcpdvB8BrQCmEzmcw5kcLEWuDDGPnJjbiekg5p88nmsWFgHLR9q2P1XJ5QqgL76JvTe84vxmg3vPEB",
  "key21": "W62vDm1aGVc5FcsX3YYC161KU74otFZmrBJi9pwWDFeP6JW1cVG9FyDYdtgoXHgewR3fw2n49Ea6kTw2ifiCR8T",
  "key22": "WogsajJozwqnBrvYkvGi56nxnLBZoh1Jg4igj4bGKvgYQYe7h5G7tozaUqrmo574VWrZtXK5WcbEiV2vTzzHjpN",
  "key23": "5o8BNxvn2MSCiKGoNr3iyRfr1ZkTxWK68JEReJXMVhVrZFgjkVc5evdWt1Bf6DFvB3tteo7wXo3mabM8yedLhtqw",
  "key24": "5jyQKNpF3H1i4HZWftHvhyKUk3ACYAaRCtLUqreCQ8TMzYR5hBwc3ay7Krqgmf68iuutPYqdpnY8r7gcCn4S67HL",
  "key25": "5dcxnZgkbZJBvQqhFs1VormqqcvhRVmNHCTCYsW37wfUyWgzAdibWTaHuZHFHb7SLRKgAkaN7fzJxYHV47xbQnRW",
  "key26": "25GGxH1kzyLGmub6nQUwX38WTUV3Jhf72u6MhVjtd6YNh6q8rXQNz96PLqksEU75D6g5f4dYCJzfCAUUmZSAiXKu",
  "key27": "9wTuJwRsQWMr8pEEFtaLbiGMTebW165XCzz4oau5v5LudJL3oBZMmvBYwEVuNSFQVKyf3Nc24XFX6vAxHcQ2hiG",
  "key28": "5hzKL5babQzJ3BmjyHZnbbAoMxbUYNquF4rSnNNDfW2QU1775zuBAgyrT7uxBxkNC8cznHQnvKn8sAtLF27boJ5E",
  "key29": "2aRkwtfHTxZPk3mMLcjsPsjrdady1u2rNHFauf63C7FKwarKh7KVN7Rgj5zT89aK2R6XeAbHLJEDZdPKFzf69EUc",
  "key30": "5By7wwVE1wg2asmfuFoQQCw9pynnNMoUMHyak4dwf5PGNuajXLCDiFHHJZAA3p6i5VmnVQhV8Lcb9hj9sMXZCw3W"
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
