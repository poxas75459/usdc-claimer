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
    "2r8AbiKATfEvfET58oBBxNSUc7HxtP9UhcrBSEh8ZQ56BhA8ij6yxku4iAz4QXSKwwbg5qQ5fV5kdwhzLpwQ4N1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cz1AJgML4B5N7SYFq1pT8vuWVdpdb54pMsSnWKRByX3seQ956M8RAS8kbKnB6C9cLXSJxetvwDxwJ7mkxkgS5kK",
  "key1": "4pPKvyPbuGVAKcgiiL438yh9w6Hgh1wYePAKizbwanETbQAKk7jyBZzJoUqXuMvSa763Rw7cbuf1hvPHF6QNVNAp",
  "key2": "64aacFadZsq9bk8JcbXKZzizcSQ2Sks2Wj4S4hP4fpTjYRDhTRphzTaCMGuar3zQAgseGBdwL8r7C49k3AQKvHXb",
  "key3": "5RYR1koAhFVxsP15XuC86UZvYFiRyUF7ByGVMsJESZR8xycWjdEFWHCQXfEmUgSjNKL8gAG2jAMBCRXqCfiohFtx",
  "key4": "3Xpxf5NGjc2Bu1vwddypPrLPk4EAixBcU3cgrB1FTPj1usuTDs5YRTfZnwaVLF9qnynh3cwjojWv48H4EeRaRN96",
  "key5": "4XMcSpZ9eH8Ym8wmQVQ2KQdFvTb3BEAggQhQeQWAYN5Sg1QJpp1wrGXtSzMe1Kr2Pi3yvBgPsjFfJFExRPA1hukn",
  "key6": "3M7NrEZvcK2Zwdm7bSvAJpACMDg1pBydfX7YpG87N499UdF3PVYp9PbByspzp8twPEraM5p5x2vZPEXTpFZrdsAV",
  "key7": "4Jx6tPyLd8gSBXckshGKuCiWVmyWU63pJTprLRf2Fs2NM5ntNQ5CoodGSrqbuFUhF2Z9JXb3c6C6r4bphshJyQ1T",
  "key8": "4WBGjsGDr8gkbvGkNjfNyxtxU4oMNaHzbLYqgdrWwDrj9jrmRwLNX1jiPVovoLKaUUyj7F9caab48T495QRsWyNw",
  "key9": "5JeFX4vjzf8n6iDZZBDin62nxu8RbSSPQv2oY74sreHfNoi41VUovxxmc1AbCYqBgyhFfSNGEVMbRtde3oft9ZPw",
  "key10": "2excvHzesLu6RGCWa73JyWci1cVkaHvjVAgnBWHszBv5o99Ugx4mKSv6fVxixF9Jm9Sx5R1AoqiHkiDNrpApJmq7",
  "key11": "416dZErMYKSDhZDKRRjYWgKKnRk4U8ZXts9bfyjsUR74wmGEWV6HcvPNMCpLKcS24tjgNLpAFkivKS3g7iW2i9NQ",
  "key12": "2om6LYBPqvgW9iBBpPUfFam5AF2DTED5V6dxkrwZKkVHsoLFeiwmLT5LdMDe4iU39AUWtyWWZsaNoRYYobF2qDij",
  "key13": "2r2Mu5RJSENiFYF6uzYT1KmfW7ThMeusoLTzbWyiYTLn7jxpYVWW3P5A8nszoqF78wStmBm6qz3KqdPFbuyJ8rFm",
  "key14": "5sq5ENLsPEYdwnVDBDfeqYFoEbNqYizwJMuSyiY8W9CdV72HDhtxZJGKx9XvSkQmgHhmJQ87aJKwdUDkD3hNSWFj",
  "key15": "2En4oacEZsGignc99R6gqmi8bzTmythU9GxnAQo6Ld9nECFFSB8MuqGKsJgdBqEFy5mQLk1UPjM6BbgYDUexMLBY",
  "key16": "5vdyL1oDpE5dugo5Dd9FYFRUYgJvu18mJ8912NBUwTVLhv9Wa7tDFbuCK7RgrRtiU17hduTYC31x3XHgeh8p2hTC",
  "key17": "39ENXVp5zWxi8oKMDF9kZFSsLQ2NowYNEV5uXEKZiQkhJvnPhnBDdP3nrESb4q6TbiW35mGU13Ghaw1BjGTZN8yu",
  "key18": "3EbDmadNWwSMRMrG2tAvhdgDnuWBM7MnfkZYj8VLaNUbXVm3atpyHqkr3gsJtQWy41L4EaiedFWDqAgcfPhjhkLm",
  "key19": "9KQbqKpEV9HG4dgjkrpXbz14rzY8sQUWXeSwDw7Ta8vhuc1gvF6NmZb3vKPNYUbSPMzdQjHnxB7uU2X2MEmjNCN",
  "key20": "SFtyF4Uu2WGTEvYf7uAwv7Ke1XwPUAJrxEdHoFJBSdEEeTytt6Kv7fi1eP3fBe1jT6B9eLex1aqXT1j7td8KyuQ",
  "key21": "26rzVbWbZULybh7LK26WnBHX8vzbvspATD9FvNkpikMzhj36pymcsYh1vnJ2twTL8o1DuY5aeRkTr9gXGosQw9UL",
  "key22": "n5uii3JR3ZZ64c91X5oPSt4LyHjJv9As7TdYnH1nerze19dBqXQHSqPu1kqYjfDQyP8tx8RCremPgsv2TS1jEa9",
  "key23": "pBFDzxGhLG8Q527VipaAYvXwDFZXPCttpopsMgUoqsEBSnaepdsbWdSEDBW9xw7EqjMZw9db1yDJaMLS1pcpUa2",
  "key24": "4N4RkaWxrBYWwMFLUFKrDEvTBmhVTUfcEu1KbXHosAmrwVHPXMTLW363eqBTsvwR6HYQXD7HfBHbtYatAKKZDqxC",
  "key25": "2dyZZmdhL8FYA3UdJMuE6HbGZfNknDn9DSdBuZ4E4NZJXXNQimt6jC5Wfi6aeRwxw4tRGpvcmm4x9WAFZjJvyZ2z"
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
