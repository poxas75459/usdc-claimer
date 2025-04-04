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
    "2qA4EZGutFTr7gYCEHFy2LqTtQRK2yeyuuPEDgVW4WE7msgc3ABKNh455q8MvFE3C6RRyJ4FbgeRnXyZSR8DxdzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5brwbgrkLXCcb1mGJMSMP5t5pL6WiirPbKQZdCSeJLi6bDTgrVdNq2HL9CdswoojCVBCcHb9Y2qN2hTTyv2fDVhP",
  "key1": "UCwWdJiZAL9XYYHeZxnzMiYeWNVHx6AwdcRhMer77wkJWx6g4oScCHGSTpMDH3TKEFAVM39Kwtu73eErije4wJF",
  "key2": "4fQhrSmcjhUpaXJP6DuunWBAkxrSXY86kAfcLdKkfzBQj7Ss26ngrGyDgXRtuGQjd1MGHyUzvQWXmmHZUh4N2LCE",
  "key3": "5fDHkvDLNJmwhjKDE2f5bdTPmx3Mz9zcavmaZL79wV2mqvDuxLbACmDjQ2teQevsL1SdsGqb8iT8BJ7vAKmPdVKq",
  "key4": "3Xzmmf8nrRAtzMhwDMm3ZgTsosF5jtSgZq6rXg5d3CWBSYM6NsaZ635HY8RXoTzuckhTbY8EomdCb3oce1H8qU1A",
  "key5": "25RN3P94VvefXQBLBKrXGtqzNuoYdaH5ECAicjMauCs6ce2tWyjwqiuQV6wFq9LVR6TmV5dVGZrWXU7wLUePFTx1",
  "key6": "59QESfGFNHqCHsyDqYD5UpjPkdq9hNqEWwg4TQraUie2kyuG3yRLuAYb47DCrhLvTbQEK5LaXpAN3ZRb7naixJs8",
  "key7": "7F5ToaWorLwcE4epG39JXHMWzT4tjUmjvGs64w7y64PvqR4mnFo1v3batn7WDaG6rhFrbWeW3j3VCWZX6HNsGPd",
  "key8": "28hPSXyRe1mL94Vm5QetgAEFuqaUQ5aE37KbWCRAmChWKFg4WLgoKTfwhAMKopxm6qbEWoKnHLWnmNY6XcnCgVjX",
  "key9": "6S5i9VborHN87LHmJZz8UCUrCM7k8ayNeRmYfRs9H5UY6mR6ssgw2foDB5a6z3bW6hUYEShdQzCA3QiWpFCU8RT",
  "key10": "5Xcc3wvh9dfLXk8uZcjrdUHuojRqgXiD4HHDUBXniQDTVZvPrd3UgtW9ySwBqqZ2heN1bVhPqyJyDn6a8msUf4Q1",
  "key11": "tQdKvprpNpAYw38EV3zybf8RseiZ8ybvP2EFEM6ZkVTCvB67hTB1ZhvPHcpF2ap9jb82Lps2PQyVVUcTyFSgj1h",
  "key12": "4Lw2du7Z85FtWJ1u2Pr2BaqzxMfJ8ezA47gLC99nCAtYReK1mLoZcJS27U6oNtcXFoJXokxyAgXMRj2RkpDHZdeV",
  "key13": "3YfV2Za8m5DJT6Y38WxpoJ411u2mawhDLB56DHWYoG9PQLLSEg9c8zF3n3uqce85gS3Yx3KEpDVAk4Lve18k51Xz",
  "key14": "4ppmpU71UPZYeHpT9roqf8uAhyjZvRHKQhha26VJFXJb1fpuomVm6rNWDMM252VK78kXEA5FmSm2FcPhQrbYyMzA",
  "key15": "2KtqZmoUgGYLbiEUBsaTe9rhQFeYKoo7kaJGiqYCa63NqTkj91PUsiDwPPL3f2sA1gqJxnCpxgJBaQo8iaaEwPmc",
  "key16": "mt8iE1NgT8gfSPQJ9y4bUsogfA5KgSPAGnAUGR1qc766UgtDie2y3V251pXvzz2xhFtiu8AAaWQK2X5cnMfC6tZ",
  "key17": "3Ef63vBdpxPMZ6FZoUYskPYcrL6BKV7sGRfahvCoy5EMCvciEv5D1Gw2qkTKss4E4o4iKTkNLDDFrp4PcByqoMGW",
  "key18": "547SoXkXwq56GRsMbtbZDXEES2gK2jn5qPaWsUJLuPNBj4vbJafPRmjiV5VChQwqfNxdy3AwAkdk75xebYn1KSmo",
  "key19": "5zRrU8gwp3cqS9uvZwBoUqZTGmzskRJk2XSZdKJiVYS4QtBLNN3skLhq8WEeAhbSmQj8Qn75UvkmznYzomQbhDW2",
  "key20": "5YFDJQhf6UGkCgDydGUaLWud3XeUmHnTiRCdS5rZghoAbyC8KMXbbyoucqD6bxHn5E3FpdX69SA3NFFLjR2Fs3uy",
  "key21": "BM23ogoFc7PqzBBioKNZaEUpnswQQJ7RHjcaiYEqxs3UqHgLxU4WpnNmwn4gNwXrzTV93oig9zApTrbjuFdBEo5",
  "key22": "5u2Li4UJtY2iRRxC6zDGXk3QJ1EAzuWpxBdJueJt13sR9SepoidrxZftFqnNrS1VZbsGi36U3LhRj5hFhNPh8Pix",
  "key23": "362z1kyGzsHZYMt9uzZBzfYfZ21UwaPc4s7XvSdPPDR5ZQ1M8YdoaSKLxofZHzUJsdc2oLwPDgXtBb8m9TpjfkJf",
  "key24": "5wUV9rLYM3S9YnRQoZPjbSKxmtcphkQqA7ztN526swApPV88NXyCQPcKPFfH6cSTzHTEo6dxuCXQe9kXjdxLuiUd",
  "key25": "yspnhcvJBPvDYcTcg9bAPGnM42f6ysZ1Nhs2K6UdD2XfKTMvsrBeLbbvhLXqehi27MY2bUdj7jgBgY5F5a2Sg41",
  "key26": "2afPUs7HR6ZXGVSYwswSU3QNjteRV39JZHhuexNpLBhWRWLBUmCFFDwfiymyGanpqN4CtmvWWaobJiT1CmZVRr74",
  "key27": "5Q3j8ZZJCTr5VoMixLndaiBJMCRzBNEhtBuGQjntFMcCczkAiL1w8Sv9y22h7XNtXr6ze2vck9pDwoKG9zDvu7tW",
  "key28": "2G1V5FKR3BSNGec3T8nzWYmAPC3WxdcN7pHngeEYLtoerpHFZvcQeCzqzoMaF9LvY6oELM84rB23mVZMiye2Uh23",
  "key29": "3NRrtSBnnywsgeBocf4yGUxFieTe5gY1B4L6ojQ7eyxxbFNUQfbsDNst2hMSRL8rY6ZoXwRmsdZ43dtSyawmpMih",
  "key30": "dqj1kaeb1tpfEMqHZ8Kuttg7wgcvPSMw12VvbAyHEatSD12g7hrnK7umGfU4WLjFrwLVFjNn4s73MHzKdLFcVCE",
  "key31": "4S3gjaviyrZjigqMYzaAHrtBgMD7sK531KuR5oEf6jVgH5pYauGeZeD9dUbkUvUesqqvzEJNNGGNpCEJhcdNzf39",
  "key32": "6LdBqz8FcXUcHKLTcesqVYd3K8kiTCq56qTFrngNR99zdS26MzacBhLc6y8UiHFtCgsrWvk3scsSftEZCHGoM3b",
  "key33": "5YEf6zNVrT19S3eFvEVACGGo14XRX5un7VemE2VnSk4Xx3KozMSJ4DQp4E6Js7c88M2AUEx9xK2RQvfsRQPuBskS",
  "key34": "3wbxNkZhGna9hCjWXXb2pw9GTB6qfh3DfsvChbFmh6bv9q2pPNadeMJnHkBe63sqFMpYhDFunAXsmrnABhAuUrcQ"
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
