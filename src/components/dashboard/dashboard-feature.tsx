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
    "4YHmQXWa7f8xThB1ptYi37BeKJXL9a9ub4zyvc1uq8oG69utFWhy3zHuxGerNa4QDyiByREarQttfnHrHMQiUERe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wUbGEyb5F7N63u9kBBj1tQLkNBdE2F5kAVdvznrbzMXyb9Ab1y3WSNvrczwCfqzfQeQgUY3nZgxUKyvzffKWu2w",
  "key1": "3EzDGum1pbByKvrWCWFzzN1xgD27p112srjdUAejd6NXpZshQL1nqWSAD8FHi99VaZCZubKvbrzKCY3Voo6nmygx",
  "key2": "FYE2nfGW2pJqWL9vSHqydiEw27wqf87Mc5YYayQyUkVDpgZLCmft8WrUubxfotYcNAifUaUiv5F2eEao2Ed1m7M",
  "key3": "5sV7oXDqAHP9itLuwqTs9oPZWcw9PUj3iCto4ESbUzDEZ9rszASLnjThr6iGtdmfDHuFE3ehdvq6VfNwMw1hdjV6",
  "key4": "3AKyqhURJdt8Te7vLkJCvmeFLc3VdDwwYeS7M1H1zH97jdALtAmwVJjx3Ai6V3XFfWQv7hmC8HjYxwdNp7jpcCwS",
  "key5": "3iAxB14wtxC5EzfQEamWrjSCM5VPrPCgrrx14fuxDj2tXgTJEDGSnjvbvwTMgJ1KSuKkgikxXK7XXqgZzUaUJtyN",
  "key6": "x3BJrPJHh2Gcik1oERSRtACnPTcWHjQjYwpsCMDtJWDcQhQEBaZUWQzN3YaZGZkyG7Jtf8iEfZp6jMiLdFYK1Vd",
  "key7": "3QCMoos1JsF3y3ZZnkYhJoDfARSLF9zBd6zwmGWrtSJgZHAgJJF4UH6rTBiLop56ivM411Ei5YmPSEZqii6q3e9m",
  "key8": "P3eQbt9vhw8xVxJ7vT8ffXC8oWvxgqPEAAD4Sni8KCsk4LWGgktxqCLLHMqFJrNSFP2f5QTSQmgmcrTaBTYjFWw",
  "key9": "5dxmifKm2S9QuWLteBviptKXEHbsUKTzrcveM34UkgmuCPrKhPHLsa4E2CGd9u9V3iseJFvQHwhdMAy8efFb9bo8",
  "key10": "5C3BJGxhHcQhdtnMw3G9oZfBkUf1Fc4rpyxNEp8AhdbDgZxadL3xBmThvdZGoot5ChBZWggkh3UDnKhBff59VqgL",
  "key11": "2e8f2nse5vqo3PPz5HEZ3LVkREWLTvhCRoq1huBQJ5XPG415hTNGYBjoz65TvADKk1iY2x7TKtiedLKHph3uEr6j",
  "key12": "41m7p3HrQ2G3L7H1iQ5h9U8h3vLxfiK8VRmsmYrEnc4qNmjNspVabqNxbA8HxKukLWTwQnirfNX2U7T1ZR2pq5Pa",
  "key13": "45zXNfwSfJ91ADoUoFTKuitePJMTGjehD8tU33VBATmNL96NuS5gCG94XHbaoNNkDhaScFMw6SfPVdDApgoeRm9X",
  "key14": "3zZp5wxHDV9TdYSj9k8RZnM86y76Eos97uL51W6cMf1oiJcExMFcWRBjrU4DuKFWnaFoZ4dYqkWqRA6JJ1jfHTfk",
  "key15": "YpoZXAWqTyVNVjQSByrhg2L691rZCMBvh6Ei1nEP78QkgAGH3ioDQihbLHUZoAiJgMLmXbYxSSyrbfkzDPzBe1V",
  "key16": "43WPkri3yHNaCvRJ1DphJ7sGAwmzyWjymFRh2kisdC9qfdAZQZaRC9Ezoud7d5rWTNTdxNwMKL4Ab4HrTnciJcrZ",
  "key17": "5SRKdXuwQf7hq6Z6oQXpfgDfeEaXE3GFj2jvMdFkbp9U8uALPSgxLyig1d5HJLhmyqqrWMh5z38xoxg7wzeqENTP",
  "key18": "vranabNo7nTyaQeDioRzL4xW8DGoji65Edx1Q1d9GbG47kwVNYQmsniqU7Q7wTdsxmphQkyaKhbFjMN4RgRvpUB",
  "key19": "5QAFg4Mf9EzmgCXnmd9bVcAg7Pu1qu78pRD8MuKYo6DFrY1uBTMDnbMAArWftLTDpgNEmQVpZvfxZdV1m413BWPc",
  "key20": "2jSSB28M796piyhn95LkLwdLuLcPSRyq5P9WBDWcECsrANkFSxn8jiPYpxSSRkJd93BEtZH2U8mTt7STrf4AGXx4",
  "key21": "3cY18Di7bH1hYwDzUVouLE39YuLYvmnrQU7pAPd7i5kT89L8U47B3KchfjAgwVTVn8qEBK14gS6j4YZJbL5mYQLC",
  "key22": "2KKoD3nQHeEepCKzrdbnUi5ChLSGwKE7vbwcz5WKKRNYWEMNrnhM2G1gRmMGW1SCoJizXVaKqfjmgCHuhZRYGE1B",
  "key23": "62Sear2AheFDjkyhDnA9U25MW6FfSMGzLJd6fjge7HyMp6EKeDkNWcGYiQFbVjBtGKTSwT27T3Nhpa4WLky84atX",
  "key24": "3NtDVLc898FsCTikKEgbvePwNeZEGgxsVZ9ZTRfay3SBhWAmxg7bw3uEHAGDUy4zSvDcTDxJk1iPZmHrm6UFT6H5",
  "key25": "2THR6p22ZanUbBAWeYAPbCYwNb9JT5JkMa9WLMD6T9nwvmmFBeGD3ojNdW8a18mZqWmfmFU5dgPFHXY6an1xnZS3",
  "key26": "55JdZJjKW9PwoxfR3qb4VcShuizwi1eeD9GzBvXFGJ5KQNd2XJbi5Je3UJGinEWrea9vwqh2Qvsc58HEtBkvBmXr",
  "key27": "6FJDE9mRNTdG595eDssa6Rn34R51Rx38etkLeaFFmc2ShmkTNwa3ciqcsodpUE1nKBL1oF2UNH1fiF97qc2P5sU",
  "key28": "4QL2W3yWM26kRdm2je2HpKUFM4587sKUGy6KmvdHyYAQJoQPthUSupZvFUygRgNFM8WrLhQsDEDb1ziNJzJLpkXD",
  "key29": "4Nxv38J544vCtmKBA9jrY1qLrPC1dBGFeJXatPQH3h7VESiWjRrrW97rLHiEoojQvLU5u6ewVYpXBw4Qp3K6T5Au",
  "key30": "3W1od3tzcx8Eo97FpvgPy4i6UZ5uT5wUfomaXNEanYRVc6SxrPLx5i1fgHM4JGqtJJjNKyC73YWMS3eNhP91uH9q",
  "key31": "3XNrkRcKxe5gUpSuiqHYjuUUJS31bQkvBx4BK3cKBYCs66SWbJwrJRKvp11Se41i94dzto15fRzKvVVeKTSn5oWs"
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
