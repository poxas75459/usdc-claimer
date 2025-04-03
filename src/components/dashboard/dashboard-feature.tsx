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
    "4AX8DrMVUZuXVgXVdmwPeUukrEKzLNRFJHYE772iQCBpzrXbzSkH6oM2NGg8w3SxpHMyTBWdLeWuhUdsTNVpDyZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZLoGAf1wirK3rvKWAJN99HJm6zomFwuKrZy16DF3f2LjMpuwKVwPpBZKFENsQQANeaRCXNTon22zRd6LRTkddvX",
  "key1": "S1vLBn652iNxZUbi7BU8DvuVkVcJycABAWYVLJ1QQ2c57WStsEupvudqnkwQyAUPkEXMcSWisx3YfJeu9b1u6Sh",
  "key2": "5117ghiF8qFuQviQDemMemiCX2raBLRRnb5g6J9VsCQNtJTXUMgMpNqpXc3SES6XDufdzTwCbBm3b5NTziRED9jc",
  "key3": "KmBjmv1ku2NWXF2YqoJsDamMn2rhygdG8BwnSSiSEeKvTE86SBhdh4ByRziFdtY9aDGkB4mgRF1fKfaXyoL9VsP",
  "key4": "naMqgJrMh7PM4hUkuRo4yfKQW8ougARvzM6JKgGfr2XWfrq11tUpjA2d1BikRWpZdFPjhDAisu1EKw8nsNRBD7A",
  "key5": "pH3DfirWdRG9wdttYWGrZPGpt8o5mvkwLWvUfcB9haVMuU5CHnxvJRiUzEYWGP2jEgJFS6xFuS1h48MmFYsdcKB",
  "key6": "4SUKoiDuXKbeFQ6bstUQC9pu99UZ2xmM25h66Lqvu5rgGzBa7XdtFqCL3sKTiGWXSNyxzRh13JjE7Mu1CNqT9LhS",
  "key7": "2q17SN934JWoaueXkGEEq2MWRX9xsq2vwyaPca7974N7CSNgSvi4BB6eGP4bzN3FhCMWJVJqRKi6LfZHBGCLa6s1",
  "key8": "2vQwXvCPzFqppea4kjdCVHnYe43riDhsejsHgLAEiPC3VFazCfq5a9Ky21i7aLppQM2x7mu2C9NzDjuTDDAsnYVX",
  "key9": "5qP1M9FSDKSmsBnJeZ5mU7BWdKBAMVXLPvAhDm9XrvgZZV7DhTe8Uvut4E4BfvtHAYEYd3aEohFMmJtimGK1ES5q",
  "key10": "4S9dg9SM6YumRMDVHgverxDT6ECzcEH7ZTZz2CiKstaA4v5oYKqit8zndmMQQTEFibezvqsjiktXbU4ci9n8Kdbd",
  "key11": "2f5N8HftfMezYBZyy5Dtcd1iUePjKknzwV2Gmhbyci7fTPE6sBQ5v4Ef9YcEWaeRkcREEAMLU4uyHpXeZAsL6pT7",
  "key12": "2cStbrkrkwvbqZwHgRdTXPJUSorWZExHuwJ9dMHQFd7TAPfS9rQGMF6W21gPHnfgZH9GqdZdaMHjtbbdyTPqpLnK",
  "key13": "38tonNKQPMAmSFKaDt2caXXgZMnpDpjHYCyAYk3FtGHAea2vmmK8wNnrvdAEqd6KGk8hH6GQXzEdVHMfFMh5ZKPb",
  "key14": "UtaBwk72Bouj5YtdBrcrMkmZ1rEFT9Djarqiw7NJykqVYaqvmsg88wG1H8VpuJw6mgft6yRMwM5accpvJyZDWSi",
  "key15": "4G2ZKqu1xEzWn7Ted3CddQcPzj7ADU16sS9924CzKdzHNimM9voiMmxQw9t2V5DpvwAi9x6XK1BJYFRYNLVXoLrZ",
  "key16": "3XdtknXeMSh7fP3r2fXrHCECYExhL9LobCQvV7C1PoDAC2NGoEJHAj1VAgaAk9EV4iWxpbvU5LK88vxGcvKED1wE",
  "key17": "2kHBbXwZN64ZQNfkodBbWP1LBgLDCqezMUiUCGzNXAZyi69WghsrsUmLMwvS8ZzDdNybfm5suqAk2TXtqFvWmakW",
  "key18": "3LrPFc9Nh1LapvhzE9gWqEvK2GTf8rE3LEsp5rKkzKPweHRRrW67fcChR9thLAD9aKhD2u46goR75qgY6TMJAWLT",
  "key19": "JYnzSeyzxGdtuuKsUBJo86AKDQ2DvVYacQFo79NQkmwGvKKTNNrKewLkUmqrJ2ALFV2xaZofnTwPrJ7gAMz1gx3",
  "key20": "5rAKEaYWZH9WuHivf9DiPvspW7HpKaKUeV58KPGXJhZX8LBtUhXdb69sfYBxYKf38Ntjd39sFfj2K5kxHfh3qeNe",
  "key21": "2vH6jKGFbEoveQeeJQko14aAXF4Qf8GpLoRoN3WgipN5AiVatpAkrvhmxaTn3MrKh4TT6mWry12UKYMrd5Sj6Qpu",
  "key22": "5TRavtoXVsDRg5X7zt9SLtQuh3HXnhBF6csoXVbziUhtNPyRgDy33ZiYwoHYkmnNoNyC3XkEhWw4ds6FUcDGeNSE",
  "key23": "5maY2ohPqUxD9myt5qwNKVo9wUJS3FKVExRJ6KNtnEq3VjTGEn7iQFiWUxZwvFqGyA6R7Z67xs7GacbhRzatjNCk",
  "key24": "4C6EdGHxD37nrrYz4qCtuatrckrK3pJD87EDsefpxUY89kp5mB355gcSn5ZuN6i9o2egvDKgdU2NxZhAxx4ZonFC",
  "key25": "25CxT1zs3Fhpqs9YLPSGqFwDzPnP2gzvpyprD9RuZ4jwz8HWh4tHqLzLpBVifeBfmtVYQBWhYJc8P2ppdP69NuCc",
  "key26": "4thk437Wx8vdq2MnLBLsF5NA7VgKTWxvgNjAJcuaYbaumGzwQaKuaeTyoGZyQvk8MkERt1ZnYHZdQbUMHpTkfuxt",
  "key27": "4uykJifEphCHhUWm8Vm7Hu9XJvBAbGpw2ZTDtBpma1VnhHEpEd5katKt521DsE2hvwt9c4AhqtigHCcBgqCMpr9f",
  "key28": "4jNk9QJPDjLTJuWy1snbWcqQ5WUq8PBh7r4HmmhYVdj51c7XEnBVEmE27yxE9ffH1ZB4gN7kbDsXGwtvKUbsfWEi",
  "key29": "SnfqreiyTJVKMNuDekoMSFDE4RoGpMehuUwh7C9ZPoieKj252XM3RZkCKfRE3GEj9MeS7u5JtGdCLD8NVip9mB8",
  "key30": "4SC6GKCj7kgWBUr1RUrefE6NbBUytdzce4E4XgkiJMQ3hrFTf2kiTn3y9AeetCPFi4bXpc3Z5Ao6Z9NKqgm9wdcU",
  "key31": "5k1PL1KdxvvyJnoCS1948spMcRnmJVGe55ShKiztjXSqLmbigbM5Ux25MYbC88UtxrR416cE6xqajxPaAQoUnb36",
  "key32": "TcWk1woDQLjiPbkEQ1PJADjmPqjm8oapAJEitASxsVA63TaVBDcPYcX1hWszTKFuLgHmNbQSUtgkqN6FHP5Aume",
  "key33": "24NwKVuogrnqk93fGnDHz8N156dn1LjBYYcKhTa2pTznZCPFvuHmiyWecxzHdb1Lbbwp4MGmJJgRmwbYroKLV8o7",
  "key34": "3voHVVJrhqNC4kJMZCBNu4du2AioGurGjNTtb4ppBo5rGFSZ9JjMs7z9ocpgR3PQu1RGg3L6Rz5EBP7QiaWR2viJ"
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
