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
    "Vtve7z8QQ7AkvsSc7TigzgmhnHnjVg7wmd9WXwxTVyiLjtqdkkrdnsA1zbpXqcE6wLPCHGjWzVKvRFdzPj3dNQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "528Gw6wuzJr3EUTQxXTUCgftWDJmf53NnzqHsCmvcCAeWLYJtNqw5taycEL2dsLk91BBST9QBoVxzGPr7g1XGiKD",
  "key1": "2Dqpci6uD2Qu53U72yMXeeb1imrcn8vf1epePmMbRFB51514SdYwWV9oDcGwKzm6ge26zYR9VF8vehsUh49gfMv4",
  "key2": "3pLPiRz6rsorVixS32yBdg2BKpap8zvk7aU5NXGru6eJ5PftfR13vTdE6ncEtHMt4k256Ky9HrbzMGRktftgZJoK",
  "key3": "4UVUT9PDEUBvdcpx8fAMyhq3SGi2aj1n2vTKq2VdWxJ3xWNRDPtM2zsDWkR9DRP6yP8QMCPzki8DcsAT92zQUbDN",
  "key4": "316whNwJPtxcXkNRWtH4WPsACgYXdtezeR4zFYEXrx1zXXgx2vuDGvtjFyeuvNo1HPDHb1aQfAJVmn7m7mNZbCgS",
  "key5": "5UDKV8PqLrtAq1CX3wcugqjyKv5nVHhjaaxH5pj9ykrQnVCH5axT3r4mNM3nCA7hWX1yXcw16PKuUcZZajbMPEXT",
  "key6": "Ly2xT95ZgGoPXGLosUWVSTP4GHbrQgGvVvqKRSyvv1DeUAStZoj2YBDd8UwtKoLN4Ky1ywE4HZGA8gyxPXjphHf",
  "key7": "4FjRwKc2PLbcrPoPqeFamgDAxPKfxSzjHKYYo6E2V1AfiSBKhrTTTpZwBW8yHut6SxU8bY288h7JDUdDBxZ1FsWx",
  "key8": "3nfQ9eYTtwxTmmEgufJynyHEfHtw4xbhvytTWGipWMshbRmbDDFnbn3tCPdmcbks6PsCReejHx5tbSKb4bG1RJWZ",
  "key9": "4hg9pqJMGTytzV2N79upVpjY8ew1GvoksZHJgMYnuvqp5RXHSacibvVT8xQsdDUBpQScKUMUgZtruAXXVjt4ZMrB",
  "key10": "4neCTqHC7gpXGBV7g9euJAwQprkVDuL9mRfCANLQLhrRBvHYRyeyQ8XabdExzKDVzVVvUkPsKfyf5kDbGLDGzb6n",
  "key11": "5ZDpaHqweUorztionv8K1EaLFDucwo9nxB6wTceEipzoaeBPTsaP7xUsSHJ9WgWUTDLr3bBYCYFd3GoXC4nkgjuw",
  "key12": "5PQnWNHhpt4GLU87N2JMQeHbEBZPUtiiP69Aqcw7ec5x2ctd9Di85NZctG2S1CtcbZA5HZGRuxaoHDwL198T2Pnq",
  "key13": "5KzbSUuWL3QkhTPa9gzGUhRJMWSwyEW9Pwn9s1ArweCPkiE4sKPEzS8iT6QHfqCPD4t23isB5JMGm3vZZha8D7TH",
  "key14": "STwPjGD4ejtq1uNo7AqcQc8jaXxNyAvzczhttJeTP1HHEob9WLuYbqFF6DMB92SoLwf3X8Npru21oMVbWfc1Uv9",
  "key15": "4zv4hmNPsPkcA7friyUiZ5XfgTctjJpUzkkWtAvEycBU5dCzFJLGcQYXV93A7LzxZVvo1uKp4U1JYfU6N19uFNi1",
  "key16": "2WPbAZZCQmUkXXiXMbQi1vw6jdt3E4Ji6KfCVDRmWybxfMzutpuokUso8SCUripp8Woa9U2NifhwTvRAffmkYkGo",
  "key17": "2RCncmd7DduakCPXuqZM3DqV9W1EfEybbANh1oCdY2roqLbJFC37NrzfLMRqAVhbA8Lw34wX7jM8HDTMUY5XMS19",
  "key18": "5fGzr73Uajbu7jpnyHnjS4yeWGv462cv9PKiTbmaQyUJDriab9x4kFA6oTHKrKjfEY9gvHaAyaRUjFiK9FMVpYR",
  "key19": "2wYexLnhGUH5iprKsR2tPWnwzjnDPAhuMwrT8aMyGR3tgcsa1eWbCSvaCjm9ZZ54Aa3t745naKdE76WGQDjTV5PK",
  "key20": "23qzTzSeut745iCMiwbcBez327P8cjXtwpJNCAFXyndw6q8yhBWjMez95Uhxa1vmmx55JzcJbvAuESPtbpew6xt1",
  "key21": "4YotA3dT31K9HVRs9HJLPyPr9vs4aDEQUGfhCF2mnGLHLHTHFixGFKiKt6114pSYmXBUB7aKxEz7e7YnCJqNSWLw",
  "key22": "2Pmn8gaPWAJMyRkjkgMtyjTnvcsKFRvRVUBBCPRyXyRgXsHxPbjWfJMWsLuYQrkLsQqfUoSNPCLkNUpXGHRnasxx",
  "key23": "4BU3KUKbqiEFVsRW1VzH4PqdV3MWUEsynsywpWp92YAVPa6j9gt3tWp9AkZN7WPwJmzm6jd4az4FgSRv2NFudX4L",
  "key24": "3hERMfHn2kCuuEb2rotHiC5UVFkw8ZnNaC2Ep9yPARyHxsNAjBzbrKsHUnmCDWP3pBRzMzTe1RHq3Wi8Be7Pw8hz",
  "key25": "5bZzJJW9tbaU4sVuFjPxo4sHqSB6xRy1q9NExEhREQpDhrrX7y2m5kqayQo1pbheyaxJThkvo7LiKcXfEUHL8cJz",
  "key26": "3EzViJt6NaLYnUULzLW41cAhR5Fse7AypwKSXLXHmHxFkNFdNy34j56Qw8YcuYheLEE1owpY5bWEXqBquupPJTfb",
  "key27": "2caeRWDQ25Zgzsz7m1KLVw3m83fPcWUKZVYwh6RdzKme69rtfVFNzG13US8oCGvfffuadjSuiMWFymPyL4TNXa1k",
  "key28": "53Pdq5mdXZAdUtJxMjF3et3gbHnno4yF7nEHT4xgK9tvuaVS48ESd7YRPFtbQym4ftqJma78Y2JfYEa1E23H4kw7",
  "key29": "3SnUJRdgyNmt19gj1MwffUAnwaxq34RRzwspnNxYR2FG4eT29WrA5kCXECq2z66xAECuT1pW4J2Bj2oes4mCA2G6"
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
