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
    "jUnZULfwXQoVT6QzFjdoS7eNtKfoAALuNS4LChaK1DBppxtfv6AzdohcngUz2nxKBvos9qcj3rqq9Xq8KYjkdNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bH9SogLaHWxgNXTjALwuxAhDiBe7vUkN2qP2HKrkkQoNvx7TUpCnrG36X5bht7WoKSULYUxfJF2nyiTExLkQYN8",
  "key1": "28wbGhwaeP4HXC6dztw5gXJ9odQk1nCutqETqmxamYQa2jpgC1ARq5NW9oPzW27CPfF3BUSUiAD7uYtiJEoayvDQ",
  "key2": "2aGfz1STn1tBKmNUq2EXtEjXbn3hkmoSj2x1xxrhrZZMQavr132LA2GqShMaf8M6mBSucTo2VouxmNpR6fXytYCM",
  "key3": "32znoxy4Y1ErNuLu4pb84yKHAXTva6xLvE7RCj6GWgcrVhDuJzQnnq4MSmK9B8dURc2jcW4EEMX1sw6CXUhj4sBi",
  "key4": "2tUq28b6TPCfY4bDMqzbNeVNNK1sU8j3zeXvaJgFraSzu3oX2X7hMsxEdUUrmYwmRRsb7NPaT7dmrH4Hfba2nySo",
  "key5": "5Pwm2jjsgfo3NCFWksTXVXqxToB9mxTsuYw9TJbkffG2R2Px5keKhrFCTaTKShh868vsfq2o8zswgp1tuKRDhE6p",
  "key6": "5LAKPvRwN8AhaFqAq2RR2mDSuEtSjCKVQPB14gXb3PTWqswAdowLZecANRnWghK8FHrdqBF4rs5Rm9xDxDSbwGB7",
  "key7": "3MzuTVdb4NWyUUAFoKeSgkbhgkWEAv8p6z26HJPENBCFDZ244TRvM2vqahFsPjgRVqwEbWwN27SYCKTKGfhT4odW",
  "key8": "4RK9PPnHr1fDsUAKCM6nk3JJCaADaysX43pe9VZQuYdfg1gzwUwnp3oHcWVCyHjc9uYhvmK1zvnCGuUytMtM8wAS",
  "key9": "3arQzCG4bw8wAayHGwTBTBZadBJfhjufnMjETo8T6nwoHqqu7BYRKrkU1Q1qJPCKEDrUmbur58ZXkV317UVHFW72",
  "key10": "63Nf7DBf3bv4E3zC7QK8odGb4A68MsodY68JtdYQ4oXpGMTin8wspE3e5hV42cv8gdd1AHRT715NT4bM2kPY8fmF",
  "key11": "4zC3hGprRxVRtv6fUYCoZWKZCf5QSxSzJSTpHvKJyygK2jEgga2oduigjiPS2yB5VJStVZbX3eKTfXUftFj7J6sE",
  "key12": "4fz97kGm1iMnp52kTBPAebtNM9XCqZ3BTPcL8wN44fqTSdJav2u3QDPmS7Ab1TrG6JZ71jUSR421wi7BCLi4xDwF",
  "key13": "5Ue3huQ96ovzKixSEpns8Nhg2XbtqkeC1NgkJmR44GqTYU1a9akxRvZowZkoVFx1Ycd7XCwXGiZ17DeyreqJBY4i",
  "key14": "4bNo6918mxRzupTTzvM3mGvakriX8KBoDW6xjLWzuxghzripvGbAPRJZEysSMsura7QJEHnqXRiEL7gmj12yJS9e",
  "key15": "5kMcDWBkTuNDvLqyLNHPoaWS144m9AqSLh3vFKrAFgKAVbEVFu1jYqfoFYoA5fQ2NxcHVU7tA3uCT9hAjaeD7DCZ",
  "key16": "52nPu7RWTJMuXRSLZ8RqMZComoFSzvYGp5tnHo9NBMDUgZJnZRHgixSC2L4q5QUyA8AWB7Fi1U5DiSGMK9uu2v2d",
  "key17": "3mksF8LtSHnrXQ3aizfk5AHYXDdGnW3jjqakBCHKFq5dz6tcTmiBDAEEveNmja4Yg5YBo4N4dJxqjPGgBejjrAEs",
  "key18": "4sa7dsBZZ6u5PRmZWkcJfAYSpgUyvPjn4equCE1m9u5BSAmeQgYPu6gaHVpEBvjtVXsmhemaWfJQt2QAEFKJ31Ve",
  "key19": "57LtaLDXzEt41n5sKvi7TEaQ3fGBooqNNUeLe8CeWUtBxPPdfiUYmg17wE6Ee19RfonwagFD3zn7TN9e9eronEYJ",
  "key20": "5CpMMjLYcKjzpjohVpUeAsFL1auXaYgifnXbdDfRg6Er8RBdmPQXjJUJRHj5hLQbPQWXB7g8J1ZqnCR7ynv6aLnk",
  "key21": "2ESKg1y3hPh2dqbEkX4Lnn4917tkFRT5BE1jE7E28kTMX8ArJZ4f9eEfb8c4yrrHWgTZpYWLAFNhWfkcELdKriVq",
  "key22": "4SbPJ3TyZ9WgGWAQTepGwiGy4sJdFaGYKzsYDdyAfFsxQMJekfJeqUGAg5Gh37QKWqsDpzXhjgqa37DUC8VNQC8y",
  "key23": "3r5JYxwgS6FvS4VZmVUhn6b2r2YBX6cNM6GRRn8kzV7StKuqEsXLvb6ZeYJYEShUZxNifn7cRjdW9E99Jg3YftT7",
  "key24": "VkCqbRGNKgBxjKL5yLiGmMSaT8Qw61uXKTxW1yvhiFUggQV8r9GRQhwkAhDhm3GZgR458JrfeqrozNTxDSKsffo",
  "key25": "3H1y1F5J1xaRXovUZJV2Ga8qRwFDCFnvW77TCvMPm8PUD9UrJLQq2gvqaCukWZkiGtgTMraiQtdKyMzFQQzn5vx3",
  "key26": "5HAhYGeAGh8ZoMH2ZHBAMNm4YPhjPSmfXr1Q35SgrVZA3QtPyojuESauQ2CvcHGWiFM6hYaQqj7PJ1cvbP4Enwvv",
  "key27": "RAMS1GJsF8aXHXdHv2T7ph9GuKbiz4cSzS2JZru14tjiuZkYgxzXEWxNEyXn5ebdffmg41WrAEp1U93ZuuSg5yb",
  "key28": "24Ktoy7k6miitR7dMJgHhzfW4Yr5R4AhPYAJgfS9P6qAVvh6ComWXfZpDTiraLeYoNgaWV4gZ8byY4cB5KreU5Ya",
  "key29": "34SxpAGZ5g4xUnooE91TjXnkBEQzDhR11hwr4pTGZ8gMxx7UdP2iBbSqr81yV3QxCS78GVfPSiqvLyi3tz58YZxa",
  "key30": "3kAaCp5AE3dz4zmpCVmYAxQrGYf4Vbo6pVPT9kmhPFp5a95eJ41MDWKEgw86GKWSL8xE85q7XN56gtW6279ExJYf",
  "key31": "5Hva4tTvEC5mE9GopS8VcoBLqfBuMxScF6pJ6m2SMut5MUsWugBeAom8Xp4nFS4aPzF5hYyPNH8p1YSyV5QLpfEq",
  "key32": "hJayVLEjBbsWphHQ8SX818pm5AV8fXTc8658Mv7jiRKcERKUTRiYT1vjgWgpBbdSdyyyMcQM1ed48jQu7NjKnBm",
  "key33": "3pTfQPwtuQsufkMPSTry3SYCHvCsVYq8argQbFJWvxKtQCWky88VogRPF3uLPUk9rjb4CMjLBCLTeXzqH2A8oRyt"
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
