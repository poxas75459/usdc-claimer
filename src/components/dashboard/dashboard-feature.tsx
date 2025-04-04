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
    "otbVv4WGQ2oFhiQhY9ZWm6YXp6tcpxJ3v2HwPTF6ftMZ5iKd9P7har8JedNpbTwLnYVb3o1ERGPw4pzVaC3Juin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3txLAvY8pi4FHqwvPouz68VLUr3U4m2p96UWw7AbfPodcix6DCgtX32JEfeGjjgXLDiBmvRsEaMWLKSj42jsfxdF",
  "key1": "3QdPSJHQhnbUnuYiwsPePppUCE4QEoj2NQcyntucRbW1KVcfXxY4bWostszWhpA7dLbyo1kQwV5uTQeXCPrWcCPT",
  "key2": "43g6MGSDNjRXimrBnkZ9YoUYkGibXBiBihxFZh8zDuwi3Ao2E6TRr9sQBVDHsP7e8hSCuyVPLqHi1kwq2DMHXV86",
  "key3": "4ut9jsitvNntLuVzZTqU3wgwgouEJqxcYm5RUqvceEovKJNP3Ub97NfEcu5M9oTBhYKJdnJvTaHDABmi1cCfvCoR",
  "key4": "43HuWNp16cyKUJVDDyfCVp7vE8dUU8JkPzt3sGMrTmrozyYhUR6qhVeVowKcRs7k9iCSKKyXrw6yVt8spxppF49s",
  "key5": "2FAra22qLKocDbKQXtTC62nZF7GuHHgptVAkW1yeYEWM6pdbVFaYCA2tUacNk2hKancmv6DcbqKjDKAiVyH92nSD",
  "key6": "5Da7pSwBqQCUp6MKNWs3wmB8tMVQGLx26Z3nqZuCKYyTRECwCCsmZRaHY4CdJ7TieF7TgE3wnLSrvoqzSqBWv36G",
  "key7": "5r7E2heLgZLX1byxbbnFkUQU5fV2X3pJj4P36dDvofg7p52BH77RnHVZCLQBv7gi1SmgBeqgUL2orAYryvK6esPE",
  "key8": "2zz9TvvYbW35o8KhnkJeRoK2y1RucXcdAFFBMvocoHqKwtCpyEuL5JkXLQkBjUVqe3t4tEde78MGajhZQCvCNnFM",
  "key9": "612ocEXaK4NfWyzZH9apmMqB1YQuWQq2GFgbMB7xqtinH3k5ia2HzBgWzVWfVMH5CtdWZp2Q1xkvsnnkAwjm8BUf",
  "key10": "2vfZxhmCB3SyFRWp6ykq3t2VYpg4YxoJstkHY7WuminCHCvWFTZjNTN2rwLE3BhK93BXTyLxA3qRdkNjM24Vz6ze",
  "key11": "4RkGGuRfWCXAgZHHhA5yXXnsZqotPZuLMJouwot5St4igTW3rQfPqjWPtGfU8ApwUmSduBKo93wr13YQJf83RJ3Y",
  "key12": "63BateiqcwWc9qAqq9qMqzjZDbdqfxbKLxxNHEbsnw2FiNJHqXXC2j81P6NHMWeQn8eZt5vVuMkJyYjLGWasoopC",
  "key13": "5wAnCDDgmgSLJDjanum2WhH7cvegLRiEL3BRvMUCQe4zsyUp1TNHksNoB8D6fLru8v2HugeuM7u5b5jjc1rSECAa",
  "key14": "5YcS9h534JooXT7gmsLQFHZEdxx1u3WMvbK8AhR1rYX3uShURyEgrtgtCfsd1FdwvAXKCFzaRs7tknAPTPXefVMC",
  "key15": "31nP1o4s27FiUTD3rDnVDt9TucvfG11CeMcnrjEUcq2VBJqHWf5iJq5RDn3QCrS84daou44nT2NzHNRGKHJcmEeL",
  "key16": "64KKYWtXN6htQ3hK3mJgfRYNXMqYaQwKXAwjfSu8N7Y52byTR8bENCcUC9DpD9xMSt1NNGyNMiV7jpSxEAa9LJaa",
  "key17": "4nT2seQGHoGd83GkrW2GW3DWDYuQ6w8xvoG9VPCux3Nz7yUctinyvXD7W3YgW76byWRY2DaBE61R9DM5Di66nhJx",
  "key18": "HUGhuHQq6LMkhLkeXHQHfiCsWdwtfkYKk3KFUMGgtr6oF5cW9DFHoZVAbQsU5khfCZthxAtwS1wzLuJ7DrcMHJi",
  "key19": "62zm67PSHUsedE6Qs3xxNWcwWSh7gv1XbQXHfxqUSoVtMN2srbxqyReGfYYgYhTkthpe8Dhzkv6QBmHELRr5qLxs",
  "key20": "3mDfz2T82gtpv1v3Ck7ZTHvSEDc4iiT7D3satrnHfuhBgx5ATigpo7iRdZ6wwqASGwuu5ewDat2XS4a14877N2P6",
  "key21": "3ZP8en691jZzMpTPfx2epiqAgu5nKhXkB2rbtRJ7WCkTJDTVX36CHXpsdG4hGYGVMPdG8VHN6s61PUdau1NivDy8",
  "key22": "MyeP3PhxZTAyQogJy1X5HZoUiuUUZ24Ffb3eACdJsYZjCGehj3DiYu2Qx222y5qn4fQAFpTUV4ounZ5NmLnMtYc",
  "key23": "4NthjCvhgeVTkNWdKk1u15X5nEib7CaK862od6ARzGKuGX2QzSaSBMYmVnEGK2fU1L2B31iBihgcX3GBcyfYTxWZ",
  "key24": "Vpb2Kpurk17JnFFCs37JBqrJZQmVUip4EmKoH2C1RNBWP3QNyqKz1ZFzswjyTWhbzojio449futN74pbNTCbMG6"
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
