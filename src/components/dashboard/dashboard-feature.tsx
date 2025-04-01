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
    "3PDXGMmsJjVyKZidWDkS8jr64eXti9B9MFguA6fSKNZmQPCKrNv28LqPWvjVaL3CjxwTCfKNVpyMFHei23UGUMMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2che4eWx1CfQvc8MtAQ6ddV1cfuxLFgLRwWZize9QnF4RoFqDLYMkA1xjm12iYKf6eMRnBTUKpL2sJzxitJW7NqV",
  "key1": "BcdKM2aYy5m3sYGUBrm51E9SBqjY86ZGuXMrBEj4gfWUEvCfkLePUpVsq9BxaKevS44TpqGrPewkuPHZQqn2TE3",
  "key2": "2kW7uStKTkNUjBdWWNAhBuNEmYqX5uemyFxUymtJks6tHQGvGXg1kDEyCWVNrEFgWkH8iMfr4fG6LHFur3pbJDYZ",
  "key3": "21cfK4u6KvHxqNLyatUBBRKfn2weZzwzgX1pgZGVoSBeMXAxhU93WDVKmRTt5PJSy814Zoa8SvFaPxxXpooYx42y",
  "key4": "JYTpiEiJ4r5kfWt9mjat5EdW8UwSDP8yr6iFdupbasRgMM8TcrYc15KGbMtWzGxyV25UFR57jxvp7Kj5toB38zs",
  "key5": "5ycBtAqKcUC6q62cvfkz8U44nWXTWFacjf97DnJqNahjrbVksexbXTLmx9Jwof2oyZQhKs1JW5GeKCMAVkvqdtTQ",
  "key6": "63U4WRcqgoKoopRmJLaBqkd96VZuZ1rsy3NZ4yYRqMc9AeQYTjjmWSxZXAE6F13vCqgV9XCdrJeEM2DV2U3iUJYi",
  "key7": "2WAukZB5p4L6oiyDmeex13yw25kChwueW9SwBauNTY5x87Cn4P5x9ayseyzPkJYdCHRWKzVBsisfqi5bTeJjYuYy",
  "key8": "2woejkEA1KZ5bjAYGXY6e2z65AdpcTKnTNDVKhyqpnnKfuVkbNSdSEcCz1SL94iceqZ41ryFtzX45xJQFMqNn4uA",
  "key9": "2pXbfGxhvMi8x6EQ9b11zW32hifzqfTGhTjmP5VowVjF6MnuKi8NaYqzzZKvd6NvYQbDmnrsYbhJigmrs9jskTYd",
  "key10": "523LHhHk9AeEP6yPJ9zr4MU9BG8zKUPBZSGQiWgtPntmTYQ9UYP5xRLLMAuTyr37V8sPHeNphyeR4oRdKAuWis7B",
  "key11": "3SKYH15SJEAR5nmexrUHAbtoqgSp1XGpZfXVQTUG7mcNuBKd8mznAZYu7oB7bE7AzGJdHrAGquYvBWo4D4DTZyjc",
  "key12": "65h6BeaNp4ahgN6UJ3ei5yaqrKerbjkkdu8hRbCp5P43x3bdWYWZGRzSUCQRmjRHidA4v17N5uhmU52q2N5iF8Sx",
  "key13": "4r2aNBbKj4HARLaFBTTDZFEvKgbQ696uKe4qS9FgQHHthdTdX1qvyLK8z3uBe3mjGrFLJ5RCW82gyRFPhvsVg2xj",
  "key14": "2Uf1NigNV6pFWJnM14MvMwf3kAEuRv8QJnDnPSKMexXFcrws9FqXnetTkfdURxiCBYkNebor4fEX2zEqFSs2kGk4",
  "key15": "huC9JLiKEimQMeUmrKduYSHCosYZeayuJBV1yaNKaUbxG2DQHTaeaDgqp4sWK39iQBg919PExjnutJjZPSQjP2v",
  "key16": "666eoZNkdkQChX33PmnzoREEovpK8Qqn2ptjyc9kLmuVE6NxE69z53Zdi1iLTFmLCARMvgjYD44SWRbmsBayGK6n",
  "key17": "2EvtR6xKyvzGmjV1G2rq2qF5VjUGZqsQypGB815TMMZCazrmmhcM41WwG1tKHL9LJ9NXnxZeYMQBX9YfLZ5ERawX",
  "key18": "63ybyZrYTxeVreqhkT1BTvwbVi7TLBCPwqb14WEBAo5CQi7upXK2CsWT2hepY3uTQbPNNvN7c6rnDS56iEDXhxsK",
  "key19": "3TX5Xa4oNNNWMAc45ywCubKi1KdCEGhCUN9wUD9SuqhUd8AyKcXeXabkXPvyVCEyWB7TTeRAhcoDtVRnNEcbUos3",
  "key20": "2pUCwoSK5GyYtbdoQ59jzDQYfdzEjCGWJjA7XFFiuy1H5rHWGBYZGs7g8kMVa6Xk3fWZSi7cTLwzPjSeksjf6uD8",
  "key21": "5HCLaRYPTVpfKWuLmVzoYz8P4uVkUsPzkPBwsCybGPoWAoP57BHADo3Wv3jLLxkbp96h92d6Tw3PhcW1VdhwPYuC",
  "key22": "5skwyVAcJZmudrpzQt657Yjs9muAdaVNVgghhncaPgfStiYpKKXEbBeWKrC3jKnpQoRErKBvqWGd6kg6g6p6Dkxh",
  "key23": "3FfyX7dCb52L8bwoWJfhKDAcuyitVC485x1xhikHqD1G7vXu3BD8dFJMJaC5BRa5rz3AD5km13WzZ2G3z3whozU",
  "key24": "61K2SP2EVMJfrHkToX3Jf1aKHeGks6TtmUz63HzC9NeP5eKCkRZf2PE5zr81dLwWKdgWNgii4NZrxtL7Kepqt6VD",
  "key25": "4BEXHFEiQVjcaFHAHYocQKFdqoPzshK5E5ZzYbnWHaroyjJNNNuWFrVqyjjHS5aZkEFoCjfzn5c3mQAW8Z2ZB6b",
  "key26": "7bXMYQYiXK9TgmnF7dHbAEUEEiYojocNKweJYMA6SfVtDfW3NsfjLb8YUzYF724SfaaVJRvQ98mhRJBubfDbVvK",
  "key27": "5QwXbdJ3tgjK2DceetpynhiRLGAHUekobU8wrSAZPUjmzbRquqasLFcBY3jpEqSKegZfuYYQiZ4oLJcZN8HhhDPR",
  "key28": "nzRkuqRdNjdzYRnKngnYXhK9w7u8hwU9fPSsNLbAGdm5sEU9CAk4kPCL3SGdSnucp2VSnL8pm8b34nMWRFekf2s",
  "key29": "2woVCXx8ZxWDZdNTYbywr7wvjbrhq8He5mTA9XxDoWYwShjod8xWi25sUVhC9zaKUuSYPksCqvJkKKw9TH1uoJ5k",
  "key30": "4CovBzcNVCSHHiKvXzKu1eMDpcquo3qBiRWBAPTaQZKqbamke8LLKrQQ9mKFKjVomm7t1yJTm6sA2esDunHtYsKA",
  "key31": "RfqGeuN6DWt57JCHhmj9uhaGM7MJbbWQC5RUCy4sy9kyfgXeRvkeesGhTsGVTWD6Vqv7HS82hpsvBDtPHVYFs9u",
  "key32": "CSGXA2YjfZrTbG3n7RsSdX3y4PXt2XiDWWW2ZJ25LSwNq5tk2RVvSQqec1y3U2zVZ4n1frYfaVyJq64qUyiURnV"
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
