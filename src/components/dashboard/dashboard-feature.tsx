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
    "2KTZaMzqTgjudouNQe85RKaDKhrXYoSTxZBRuqjPwoyJybRiUiPHBHxw7EDSLatnJ5bovkGU8BWBx9Z3Zk4Pdgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24bccJFvysn4myLHEXjWEQhh3rg52m13bFmHR4SH7WL85LjFdZw2akwvwSvsiZLYurmSPvP8dth12TFXbY2YonB1",
  "key1": "35468bZbvQdws2VukkhFsmYwzcJ1mff4nSX6J2haW4uqS3Sz8xL6Eo38QHJf6mKYX6Q4VjuT8YwEb6NaCzP6F7UD",
  "key2": "5uzyZF6CZpbSmzoj5XTXUVNvM2wPTeoLbyhsNn2tBW7pLzbounmD49o3qu13e37J54uAoPRHWkh6Ej3n2mfSdqew",
  "key3": "2X6WSUmHxRDGJeeWtKmoRDvedWEWGN1Tfb6KAbTCa1DC75a8wGNdDvULz8dk19uA9GdaMJh7MbuBGpPEXLwiEJmq",
  "key4": "MfGgLkheEFVDUopsd3DR56R42x4THws7rts6psWrMkZv7kjBdGQkwAJgV9oawcEX3hM7HHr646KApg3zD4X9SCd",
  "key5": "5Uks5tBwn4Xd8zrVenD7vp8LJTheVovjVkxpknP2rE6otcRydLXu1oySM2v6deHhd6dUPf3cud4htHKQp9936LL8",
  "key6": "5HMtuRV3T9Hv6D8crTmfVPEaqmwqGUV9rSME5oxgXKSJRdGYNWCKTo36Dh7v2MaW3Nj1oq4pTjD49xU4Ei6cJvvs",
  "key7": "56vAmmQHUBeKuEyv6RbKsdQwajs8P1mLrpLmjMywfXFTjhHmtkCdgqP9YUcQMNwGHmxXe4mRpYv3gUFUeYXWFipd",
  "key8": "auPH3nU2BEAEH44KjG71t44qviYdR8yev9ZY1XZjteiqh2M49BomsE77wJYAgHNhSenKy4fUxdVRoC7ctPppzXU",
  "key9": "2Q94QEoS3Zprf9kcw6dqjzKhTsmgGRRjPry3HzRnzdw3XXdpLvUDeqRjATPSf2ZeSA1Srkt7WWcmcwwdfpToeFrn",
  "key10": "5sgtoBykFhRQVgPvGQFDbghQ2Nm7gUshPVXVCLKy65cCJoS8PsPPpwmtqPtvXsrRFXpY6T7hYQV7fKSRtgGVPp78",
  "key11": "3x3orLqfi8NQ1aGjzEJdyMmR3JLpGd3X2y71fURDUShdeUHQyGR34SE3hgCPLNA6qHwmJCGnCyzm3Q5vebjEzZYK",
  "key12": "5kZW8TsWKGKsVp5K1J5GgJ3JQ4Wabrk8ZqJ6T9arNvRAVe4jRkQHiWgJPhzoJN5GFRN9vyhcyryQF2t3CCV6ha6t",
  "key13": "41yNfTe2BUTzjPMHypXa46sUU5ywf8ajVKq8Wvk6VcW3XeDrfNCe6u85n4EQ6brAkwoEo3Bhdbp2xiv2N1cuw98F",
  "key14": "4B7xBm4cpT7XewtrtniXbWDJAsCgnTotqRvnXWMXZof7XNn5ufBwHLC2C8xJjU4q4E8G7BZTyLgR3ShLHct2mQSX",
  "key15": "QfH5GXfHt886UJaEYKy2TeM28k6aHVUViKhfbSfkNz51ZSH7GQXJNVpA8qBVTBKJ2DEsqNETekshwNLxocfvDWR",
  "key16": "3yAzKMvVcxZX82MpX5Zg7kmmJMUSFm2Ur5e9Mk1Rteu3jGafp1Jsv9ka1pFeCsiEBSzHVxWFwtuZKQB4LCWTF1P9",
  "key17": "55WoRap2nn8aKJh6otxuh5gSMCo5jeYQ955hMjgKun1vs7tMwAx22rWEWeW6tYzfsqGYDWrq6Zx6xbynrELgNoS1",
  "key18": "21fpLe5nAwNe4SRuwrkxF16x322C2pkdQeTzXUj18Qdm6G5mPWwQk131vRsuT6iL55pt4W5SKC9rGW4RKLii66Y1",
  "key19": "4sCcx32fmaebsgRxLh8bQsto643MvB7GK8HMng6BkF5EfyS7EJ824cP3CxAwUKTzkyWf4qUtjSCsGVxPgcjshirS",
  "key20": "FuaGiCjQSxnrBrYx7JnaY8Yy1jqZ2CsqbMnzxo8zqehmJhtxMhN84gv8KR9EaT5K1ynrDCn5MPNnawpi9SN61c7",
  "key21": "4n3UFy6zFsxk6L4UmR4XmLPMPzyvKCCWrkhsN7L1ZjivypbqikpKFMJbnUjcv7uiwLUhxNLG1WKb4UX7QRGERDvC",
  "key22": "MDvB6CQfe5TGsb26ZSuSpKdd1xdZ3mcriCFJTDZiLcXvpj8ppwu643pT6PwkF7jtRsRnBC6GGiSdaJiDCyq1khM",
  "key23": "5TH7eQSwykbYicwPxg3NRrvkrRjCiygtyw9UKykHeG7MZ9zWSh2JbiR3sbSraW7xLPbnr3j8qXbbV9MEpuZLncER",
  "key24": "2Y6BFTiPRFjzXLfc6tyPqTispri3oz1XR6eQw46i5UQk7uWTKJCJRQEfgDhLMQSqK5qr4gnrXu9kwrq3tUbWbpWZ",
  "key25": "dwWECXQoZWmELnZPbR2iLViTuEWTYvmC9XVARvPPg1kYtFr8umoZZ7mv2uFaA9SVMvVPMsVVL41Cp9nQrqPSja2",
  "key26": "gzSQ6LbAne3TkZ3cixV7mCJpNBZ2svbrYiNKZbdjQ1vZmQMzieiFLGQk67ZHoHG7JJuGF3fB487c9WWdAQVrDcn",
  "key27": "4aDVAhyycvHQHkDx3QA4mnE7pzrmrjPFYaPuMaX8xwpJZXWo4ohdx2y7UjUC6GMDVAkeXbUtUc5P4aBLof5zN2xi",
  "key28": "5epJGCF8ytb8W8hTYT5DQrqcLGXU6Fe7wCL87YGWcYEuEXgWYr6QaTW6vXDq5XRgbo1dHsRrBve5MzBw93U7arBc",
  "key29": "3NaG7tyoLmY9S8ZzqPQ6HCZM2rtKKXar2PZdoYp43poUK8AEAaneiPHuXjm1qed6zrXLLHTJVcmipFNJ6ySHZz7R",
  "key30": "5DCLaUeSpCaeWSgH72g2Ti3boh1mko26hSpJXsHx8ALPUeRPmYUPwuMBFof9iMArPZp6kgRL49CEcZ7guN1eC6nZ",
  "key31": "QJ5EkeHNJ4Wh9vMvYDHBj2CuLz7DokEit1iLZLLMT2QxCB1vhxq5Qo86uB7g5ikHd9iUiBpHjbQUrZpuF9diRih",
  "key32": "3EVrtPDWFuLCQPBtTGSQWdC2rTQ4KHpQxFoam6BFXPdz1o3eLnraExsZRJ6HLpQiY7tUTQbQQzYS6t9jLdWTDLtR"
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
