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
    "3cMos5KhtyjPtwmj1Yf3qkeTVBtEvjCiqb9Mv1k2ZiVddQqCTyK3Hy7ZaXHzHVW3ciUihSVndt3zhfJ9MAhh2PCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39jDy5xkW4MvTtHCdnG3cuo7iRnEKRdZthw5zW26mghf9AWgjRbUr8niUwPPRT3iFobpLwE4cKRWN7LprpuNinRG",
  "key1": "4Vwt9N5nX6hrraAxSMzd5uMakA8xmujWuqpbD5MiJE2mPZFcfFKaQBi8cNXzZx6oEuVozWKyJvr3dAMG66wrtzNi",
  "key2": "5h5wS9CBupwBEfzMe6jFv7MVbqmJgERzfZtUSxSnvtcW8DkbCratSc7wtWZDtLk6RVZJH1ePkb9qnSiBNXP3FMV3",
  "key3": "3KeRzAgYGJouAZrC5WXB1V6MQMuenA22iKLMnXAkTfj7n8yYZphSdZQ6gyr7vx2Q95pQsf9jmrVZsEuMBxaWpXv8",
  "key4": "4u2Sfn8ykPY4izYA36nc1KzzoNxKA2MJ9jTtrLj57grS68Ut3JTiKjseV4A3WanKqCaLaza9QhjQAfToyCaZSyEP",
  "key5": "2WK8bFy1bUiHizbw2zABiHM1RykRmD5LB9Qt3y6DiMhVCqGhSzVhHb2E4y7QfsSBpjbrWmXubstZfNPpt2KcbJjD",
  "key6": "3cddQYEuMNLMYXEX4NZ4eUwWssx6J4QUAcGfRMrBpatmoAXV7BhRJ6i7hZXjjsWHLTXM53gJJu6exzqVMaNffUnu",
  "key7": "64g1aS5C6U36YhpTWXHP5vwzJBgyx6SpsBNRHi8ANMwsnKwXG8SMEFdkJjccch1AowpQEPhegibAPGApA8x4tCRa",
  "key8": "vTMjFgKZizMeQeXtSncGnXyMKYWnCyZbNEbXeQwrP92zH1ytYizge7MN7ygS1o3VDhm3xrd7a4TpszFbjz2ZtPy",
  "key9": "4U4Z6BJMwi6Z2bBYxpM2Tzqfm4eyUohFaboQ5LEeZFUrFgnMbQJdc8urvgT9qfm166T4eGi72uEEubv9mDstja84",
  "key10": "4s3xzUfUxQwwG3v4KVMsA5XRyLJAQC6R4ZssCUydYQgqBWxENwkJbADrYJVcdWPiq8h9iAG8f5r6byWm7DauVd16",
  "key11": "4rAXViP3fXFf91RzoJwExaibp7wf9b3BR7gWqFNCoF2L2BoAuCPMBsmQAvn85azaC7HGvEASKXTUsx9NvheFZf6D",
  "key12": "3f8vXvhVmA1jYktR3EvEjK32Gt2uYzfCNnMZK5YSqKmMK4Bit9FF3veSEnNzhgxeva3v7ipML57Jr4SMcuJWrWQZ",
  "key13": "31RTwbn5tToBSipAEPqy4JZt5cu67w58SzojR3mrEwQAfHG23e7K1ymzp1fg2hh5Cexw4BgCTCjfnTHjTbAHpC9q",
  "key14": "3E8cNE6KiRdxAAZAwJej3cRK1ufPTsmCxzKEJUgqmEtGt8EE2gu4TxJB7CWnXDs9wi9p8K6zx5t92F1fqwzCv2ro",
  "key15": "1pFsMpQDbbroVZZZB8FNhYKq3uxUee9ZozFZEfnE8pgxjYUopxx2MCEP6vUGeg1kLZiUkDe1k2dizzRkpBFAwGA",
  "key16": "4xuqyiStr9g8tJhN2VXZ4y4czonSeqdzcF2hBbwuWb28moy8dyR6X6SQALhtmmeKhHb3fg2dQyYqY19LipeK471K",
  "key17": "4xwVoKLxC5QdsMM9on6QRo2JZZqFEdTBvaKB9b8NzE6MkNnf4SRPk4bnPNC3E52Y7aexB6yhcJQqpB54yZKbn9KN",
  "key18": "5r6XJ7n6Mb4jWJRyWN19xPGG1DNWKjJ2QWusWJZU7ZUtQYwsaKDuyUv3fq5Gqmf4rCDdjMuZti5eU1bRDn59KdJV",
  "key19": "LdLJH5TJ4xGYLfDZWi6AziYdiFQxhcdJ9W1R1qoodyaXzygAZHsBDCPVseWVNUQezbQkmxvFWevUAt5HdNvPY15",
  "key20": "2yXzBBRU1iSyG6nh4tZ9SBia1NByx8YzgoW2yP6wqbFTX5zf7sHMPYXHA9iJwrrCiLy17Gxoa3KhLxL54x1LuvGN",
  "key21": "hPRT12zPSCaGReuBDkmmsR415ok5a5aXCBqu43RqJLL9cg4CTXgCvCFxN67FCwTyr2e2E6wqdEwf2QZmHBYhRhG",
  "key22": "uM9SftzpaDwQ7JZFA6E6HJJdMmXFSE1yjGUXbXeuhdeQpBH3u1SetpUZrXjMrEQLRaRHSJCVJ6qiqBmg1JCWMGE",
  "key23": "4wuwPBDzdzSJMiP5JCmL6nvkJghLKUAMvgz2ANenwdtdCAivGfwrRwgHoKGZVbPHFse1htLeKPeWfatnc2UobnGU",
  "key24": "5mm4wd7gxMhNNRth2zjgnfgh6jk83tP87zmYBYuXC7UCyt52EQC4vocZ2Pydcv4VsoqfPU6mKgYqnDqg2xU1NgKY",
  "key25": "3E5YNDddsxMCNp5ZfMwy5bNtsfx8B5yQAJ8HLooQLXmeJcvBGNCMxP6DtVd68kX2rdGuMXKKkbLmbGeveDcFuDWC"
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
