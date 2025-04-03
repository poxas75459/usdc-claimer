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
    "3rpeFxBNA1muLRjEj4KdWNn4zuqQxXujQnJmysN2Z2CpZMd7EXEGwtFFyCpM6rjvwchyak2thz533kwJYmfA7Z3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yxYVVoezqMmY4HNJ9DVULpuYU31JjmSnxuekHQajDc2TdWmf885XbrdMCccsdQwXjKMRmjhixqXT2XF1aN5bsRM",
  "key1": "58yvrxn5cF7EVbFgB6ox3S9UbzCKxnPJJkrSGFMYCJnAEr3mPASep8sSxyvxucCrLEcc1zX7gkQB99Hd11Sq4eWR",
  "key2": "2eHomsQBCaGLzAtRxE8bjZh9eYbVdpbucQLWf5qL61TiZhCzKafVtpv8d6QbG5d5R16nMmKKDWRzpz2Ya7HbzW67",
  "key3": "64RtSbEhWhAMwHNaRt6CtiW3iNU8oDu5q3MKviaKqB2S42SwtYBviJ7KSo4T32q8oBgNGEnNcRsa4a4ouZeBmgVa",
  "key4": "mUQRVZoW9MKrQVci2AwAvbw3XkjuJGA8684itJB472rE8b74ZqErpeux3aBWkVgaEkinLJ6GMUMUd6G9uPXjYAV",
  "key5": "447ve7RzQdAKNfXiBaLkn8ZoGLt3iyXeRaZEcR7ktxg9krTsiUUeAWb1Kx5NnTdwtM1ZHdEyB7aKmsFGtZnq1b3n",
  "key6": "qSn7BtCAyqfKCJSHK7LHYci8LXPVdH3G9mDqDmLduc1iyi1fvpqkLKwUxkxAf2QBand29LoeU1d71GQCwc3Dy3z",
  "key7": "3PDkNCm1cUrZg2fWL3p4LgPM9tbyHuijh2cq9sjjvgFuUmtK9V2fW2Wifuaai8sjj3Tdb2YDEMxMzYL4j426v6g8",
  "key8": "44HG12LWdD9D4nRYnVcbRyBHYugDpKmPGqaUC7BK5p19BgxAhgxHbzQ12HB1ynuLkxH525ziCYw43GU85vg5NHXK",
  "key9": "3ezojTV6r8S8bddeytMnrK2JjdY3t5CQTBgHgj9vuBdGCyj3Pou1NciKKqHAAd6dCuNiUF2mgdgERppAPX3XL9Ts",
  "key10": "Ec5HZbdADVFbkwkHRxKxBhCAUgCd6uWVeE5GwMpD3QxKjUfD4JjQdAMfCT4hVV94fMDshEkwu6GBm1ov4Wjh7jb",
  "key11": "3a9zYYF9AXMbqsQ8aKnyxnCJpNKKB3Ma6EkWnHXkHPF2e2VEZYabg1GGraVQ9wdAS32RscGbXkqHPwrqQMRfngFw",
  "key12": "4sE2DJ63T4kbJRXSCSEtsRoemK1YjFQeWB9RQKMaSYrqhQFWk3mgsiAMek5cFXVdb8hdQpQzdvNauaigbMSQuNEU",
  "key13": "5BiHA7iUkaZnAqqtBPo9t3tqQ4MjuPzn7aMYcCcaPK7UaeNwVjRXB11e9XpVkffTabFguKPoed2SLK63tW8QXP24",
  "key14": "3p2RX3hxYi7dfWkvRPpjXD8bBLQ1Twrdjwxoa9h8RWXeT7Xdwbuf7tYHmtKosMuFV5dqtVbHXWLXcrv6vMv5uc6G",
  "key15": "5Jxh1Gh4Kje2sjt3qbrPEkaTcKrS5vAzrEW5zGLuiYt7QqGuaLzgMAjfPT9omwkJDs2GjXfkEkgzKi9vBxfPLFN",
  "key16": "4g2bMd2fcdijad9p1TCtu35AiW9mNjiQQKWbpugx2hFK2p2wm6MBMYp6bjrSNgrAffnqAJVPC14do82cFJoLfd9C",
  "key17": "3sFEv3YieKiAy452hBMTSucjEFNPBJU9oHAfzTYEzzaMwk4iPZYvSpVbjg6w7RHaSStbeJ1ccLjEbdug6V4xmQNu",
  "key18": "2Nssw3YD4L4MgXF2s1RaQS7EbSQV4tEDXCyoWQqrtotJ35BsSBX7SNSiKEpybRbbybGWzzscJrTyzgCJjE938Phu",
  "key19": "3eK7sqb8qVttqTbGuNa9DuuxQFW5RM3DKCzKgMudK5QBY2kRRAJ4AMBSgu8cnry8ZrZya3xqwBB4bkJZBf1N9owD",
  "key20": "5BGKW5ysmw1xJE9HJGkssbRhV9LT77YtVx5QgmbGVMMVCDpqWfVWYBMXzofAPzQA7quwGGtso55duAQjAtGsq8ag",
  "key21": "4JGir4SE7v9RwGRNpVttaKDxYko3bWEc1oRAPuxQPoaQCznYMRyW2KD39JBjrTRay57zGYegnY68XtkZoBkKyR7F",
  "key22": "6srGFbxkWN6QyGmYUqujiPaLJvZSrcjgjtc4eLT2UN68awJZ2S1VaEu4Emfy2KpgjV7EzM6o7u7nwtM5dpC9of4",
  "key23": "2xaDKpGMjgSsze1ZqrrcXRmaFaSLEWNLT3TfPzUq6MRWcMXTQZR8VMvvrt3wnrPqkhiMQ5gfwhE6v8bLEQxr56S1",
  "key24": "5HXA4GN7hkzfubBYXxi8P2XvMS3Q1mB6vt5ZoqyxZDyqnEj3fvVwFATxh6qxQQoJF1RySP7RdYgLBuyhjvhpMQvp",
  "key25": "3cZnUwCoa86rhT5ZHGhS1awmBNeUUjWyE6koks9p13utmMvdxtAKdanWSPtfSd2ieSGTSiKUjV4dkVr3wCP7wyV6",
  "key26": "RWme38WxeEcBt77iQmSCswRNiypaLqqLZ2XL1wTxVsPhLwuq2wEsf5hgDDapR2sRs1JXqfArcLscy3EXHKy5VZj",
  "key27": "5BGw2YPRukxSmBpj83rJ5zK2DCczzGxb9NSfZ1nJAa8tSxWKoL8qGkqWkwF1B98TUzkfCBLkeY6FZNqvDBAwZqso",
  "key28": "38iDUnCN2otkBr6hPEXgSexcbdjRhETLPZU6d7ZHhL13MEtKnaBJ6Cz39n6czDbqvabhFppLLM9JjrTLfghyRv9S",
  "key29": "ig4LDGid8QUTJxyTUCQ4G8zgaBP9n2pAFemD493QfEp4NAy2VHjtgVcDPCatWcib4qEHF6wtgwTa2FDNW4VMLi3"
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
