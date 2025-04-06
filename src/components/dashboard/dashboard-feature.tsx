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
    "4854QnMhutojEYFKrhqPfN8QCep5KYzkXQxrp3PAMpioVjFLLSz4h4YGwtK1F1Ym6KH8eTF4pSg79ZL97e51Mx3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T68ThWg6AFTbpEoyuZWUAC7HxAghH3ZiBHsJfAEKSmxCWfcM9UUBex6cAGNWogsGwcXXTD7cGLfVyJhUaTA7uZZ",
  "key1": "4oypsSFMcDmcG8WPTj9jtcWXzj1M4dsWEjvHkpnmPo8oATRrEwwuYpgMbKyyaCzzz8HEok5Vsw3BY9R5zDhBCTfD",
  "key2": "5wq1XqqY1husLyZV3NSvwMYaMTLBZnRbcTDcGfXHU9LvphK9jAwaSRbQ59VCTEJoo86YPhdP8PFgFWLpTgGtatqQ",
  "key3": "5bEyuACy8js4q2Ty7zkeNzUcVVY559bJ9KNJSd3WG95PT4pTywSbML5WEyLExsH3MqL48zdMFLyDzQYWnWrtuxzh",
  "key4": "2pjoi2PBXwFpJPLw3GaFxsNZjAE9QmLiwM6yCkCZAm4Wjqmo6sT5NatGrENuprPwC2wWwugEok2Xj5FC2W7XLxJF",
  "key5": "2ApdTgfCUoNNZPWj7MHxvPk4uQHhQTvb9e8XbkKHXtYdBKGvEdfCyqbRPG6qGUoj97dmDVkYGk7PCXpwW2Tr9GTm",
  "key6": "673ArqawTZ8TgCohNi5coo8PX6qYJgeNWtpiep11Q5kmVUcsgexnJ6KuLnbjUXtPhRsh72x2wi5LKou8ztKPEBD6",
  "key7": "2GeVenoFR1qxC6fts1yFbnmzWW4nFwFbvSTE35iur5j6fUAha6eb9axDscY3sNPiiXvuB8GbmT96CoJejPKpg5Ey",
  "key8": "3ggbt2wdzL7nUfgFE8RQchrPa24CRhQciaYsE8sk4Ja5AHb8PpiboU31k4P3Cme2aJbW51cjeyFjRKxYZYXpJo2i",
  "key9": "5LQPqGnF9uecHeEUzYwyTqT3bMw56QW7EckLv7TNjMdvWDTvnMLA81nqVeH3Rrs9LKRkoUHJK73TCnqAmh8u7cYb",
  "key10": "2ZoBdk9sTR9eB7WqEsv7nVLTsxY5DJ2smcMhqiJzAaSpjw9tAXQ4mfJb5b3fcjcKfqAv3Vq2Wfw4bwJcyEA5rkVP",
  "key11": "58ex9ERa93fGbcgDJRoWehLofFbLrFe38YZr7JnZLArXnZKoZqzH7MzKL6otyJ5YjCLh6pmKn1Y7wLkkxja2m5H1",
  "key12": "2fnvqCRNQ5x7CmqzxgYakcRMEYwNU8vW3KK2LFpDo8xzDwcg4JWRgjFgrvhwWM5bwGGmiXaMnS1sE45AGDR7mPGo",
  "key13": "2ZYgUyNJU5SM9eS2XJnykK39kybANwwRcCWRwrSTadTqFzUknz75niFD8PwZkzA9NkLQL6PrhUeBPCKiB4FxtWJc",
  "key14": "LZ6aL3yJijhAN7gLcWMNS85ELAkZhwKquoY9Lovwa7tLkqC2g4m2SdfMAC5yQjQg2m4MvDXCYBjB8GUSeE8fvrC",
  "key15": "juZYdMW9JRcTc5GKb587c4eAvFmDQ35yGw39vSicT7rBjDWcuezBdVaQFurWzHZWkKR8zE4YeYnXFbx8JMxhorc",
  "key16": "32cwXUsqfDKeoDsL3UTazc9wsrZM38ZyNqUjvyibkHkSWbh68FMXGzxWigiR8Xns1h2jLZkd1vR3gcaz4Eqyzppm",
  "key17": "5t5dtPgwhQYJ6Wnr3j45VMRiSR2ijFTkQvNDzVLsZ6sHyeLj995YWDBtHzB5WwBqccvoh7m2SiUmHh6XMt3cGFue",
  "key18": "49uKWb4oCX87eajr5s8GY37rj6Bt5wvbrJ47RpMpVjetXnHguHUcT3AdjPNT2pBRcLdn995mzhS44o2jas6TeoYb",
  "key19": "3Sh2RnpChdhXr3dDFCwSjSBzqCZSBnptTSLMuRJg3tMYGQGSmXtLJsZU7eB6GZs3542EigndiZ8Vp36mL2geQMB9",
  "key20": "4iFFkRSaHkSKhybtTT7B4eiRK5z9WKAFtbtKWZcEjsgDePXkDrvYVXKx5pLHQHbZVbFbfLxG31KkDBE2nZdGhK9c",
  "key21": "487SvMv4MXsEBfdAcozj4sxftmHftfHSMGoioUJSUUJjpxQ61aJgP7MRM8M5gxqJxxqHVs8ra3t7WhzxTgpR3z43",
  "key22": "2wkfgGH6f1JVCw9oammj3674i93KBUaaXiMRaNyeeDifqwFwntSHp8A1eYqr4GPEbB87KnkTuc8SRQadAtrQEd4Y",
  "key23": "TeZtVua4Ai565Ghsov2YKw2ayYg1vggy2VnKd7GshD43pCVbbf94mdHKZf7ZuVQWFSEPQmGKm2JZeLf2KQJEKMn",
  "key24": "2E7fjwVCanZSq8GgsBg3izTEZpBwpzwKuq25URQ4mRdwc6QV6om7o9ykBEDmErNy2yxaAU7xwaeNeerrN1NsErno",
  "key25": "3hd4Ug22uY4HLqPTajVCj6v9koVLk2Qsz5wiE3tLRdU1VXTtRNanGwYcWe3m5tFjf9CmNK7jkdgxKBbpEzfuu7QD",
  "key26": "3iQkpBDzEpxAhdfvPH3rwYgovi9zTJCVbBEwLRRNTcWF3BcSv6EEc8SrN95cAWwc5RuqVwck68CACKKzthgeccnf",
  "key27": "3Jej72HQC8twursEHk3UV1AepUmKDhw3ZYA2UAcBV6pKZcbmD53EqKPDoWUYsxnwBjGjnbbE4r7XaCQMp27yyZaG",
  "key28": "38z9uKC5LRze7AnsJw7WBFPddjyTwkKorgNWymdDdXn6DjGiMnTBmn2EGgqdSTYgDbjSPJfNHJUiAGU9ppmGYhUT"
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
