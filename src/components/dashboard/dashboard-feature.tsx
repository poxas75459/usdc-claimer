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
    "39JqMXKsNkPgULoMmZnv9ZZf43SUiv1gqP3LBDgMNh8FGHLq34545Bep4hGxQqw5NEBDqtrnHzbJJgPKGg9DXwqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54HrtECzNL3outziRuacgwu9aZA3iEsBugMTJJWcvA9kWnkfbLquDwYkpARaxaFgrYp78HkNwtT6yEA6xZj5Ztye",
  "key1": "4PDkx5qq26RBoZeESqQ2VaUUBjqUZtkhnHrMQk7zBC3x8T3t7cf7VkxkCRgQ56ENsPptjrf2HCv4wH8NH2h5gpXu",
  "key2": "5wQAzj2JtGGwkyL4PsrECeYYZKrojM2bYgW5axX9mYbHbtwYMiPp6MWhmWEw8wXoYW3auMGDS97NCpAmsAr9D2Yh",
  "key3": "4D2EWAUHBfkddzd9Y4oihtA165gPWfpmmtR5oqby8Am54HoUdMYZLBF3Hmm6uRYvxtJ1ito7aPB46fGEW9unuBBo",
  "key4": "5RLnu5MJuTafaSUqc75G6wPosNVCSGcjx5ZmxnnuCN5UULfdKBMaoMCtkfvoo2Jn4H698W1bGaabQc1msqH78kyj",
  "key5": "binVMcKqEfCzWkdZrmfXwfSVmqKdAf5o9vW49mVK33es7kYZjjgfpGZ1a3Nah4ohoBsxpv4iRZF6VbiAoFeU3Gg",
  "key6": "W2vgv5fj2ekLqXrVNH9iroTuE6kZqbdaRTEcbJbKbpLS7ZBmGKyMdCWzBphUbLDi5edvvjEkp4iJEQ6hMQWPCWQ",
  "key7": "4hjdAqvaQXQTMWVsn3MmpFMPdLvZ43NfpHDxW5c4eR7Ak9JJETzfjJeXnv44P2XVYhi27Hj2p2ztFvCc1SchWVNi",
  "key8": "iMAesEwSmS4xQQqQmUfNAZk9zvrhMRgoTgU4RiyBw9mKsaTqVHMJs1thFJkYyDdF2LrBRK1aWGXA31Nt5n5hmzh",
  "key9": "b7xoYhPyjKzHu5UEVNw8yBc28ehrtwLGPUiERoUiCZ9nMWxLrxBgj5gRjKpHCThUavsSagbv1GBntzEgQS3gDUA",
  "key10": "3YLjmPVgnZPPoa5JpxB3R1CZNeA1qRBh9jYTiZo3uFqxpGqdAmEG6kTa4rEAkLwxrZZoZDKEhCthNqUDrqBYmm1j",
  "key11": "35FXWkk7B4xQSFMPmg8XGMnNEQXVXuEzaC7FrBBoJGjtv3ANzxLXdSQYEfHoxwMs439nZBjaiFC7E8jL6xjPoAZN",
  "key12": "2EC9WhnP29mnR7me6iHJQ3kWgYy2cDE8BQqJnJPR5d8jy1Hkus7WvA5y5R9GL81RR9FeBKQapH3xj8vS86B61DU4",
  "key13": "PceMiGdFfeH1JgKm7AmQ5iqorZ3bt25MRpkjdXXq4rcwDqkFTgabJ3Y1CBaYgd2iPxcakDTotYpucCfqZfskBMG",
  "key14": "5CsDuhmagLhc44Nkc39MpEG8g3VY3FtL2H5BK1XXsdLYao53JSyyoHAKJPFzpbUAVpG5J5u3hGE7YjKZRngoEPSB",
  "key15": "3zWG9Kvd78nN3jfSNXKmGCrvCS3LdEWL8kMhuXxSxkZBotHJ5wDZrP5xQBPHHvQ2FoW1eZzG21TenNyk3iKEoMuk",
  "key16": "3puBjzcCUFuMuVNHxVXkV245UM3Xi4USKJecRfXTFcTTWXEaMHyUjGAGdRooBiaYqajVkThHAqjQgwcEqSaTRfnV",
  "key17": "4ZwF2qQn4aadpzdL8s1EXZzDT9Jgxt6p4kLYNvndtXUTMkFXxX2yrYVT4cd9hYUYrW9AuPucWyumTK9ghTXJTfhi",
  "key18": "39ZN1HUGDRe8ADbfRSyZWhKesNkYkckPuaSgBM49fZuRzC6PEk2uFA8e8TBdK3mAbhZYy8AWvGnx3gFiisX1Gkzy",
  "key19": "huoDdNaGKPvcGCnnRJjDvfJtMKpsQuNTEMu3zvbFUwTxCtzLvZ9erEVfTKf9UypbNqN6wCwVehRzcrJcQi1oLuK",
  "key20": "5xXpJqCYif8VnEYtK9t37uggFCGStUYT5ddaML8LBBEQQms2Nbbxx1eCigkgUifL7zHguvVHB9uSo2GNuK2akYrr",
  "key21": "KCaHPwzKYGABpzWnwqfjrhYoDipDxPuhTeALvWnGQMyn4krQKcdcebXitFDauPzgHTvsjwbYKnQnjCq4XdvW3Sz",
  "key22": "4tM5uhHcg9384dePZrZdw2NQ8HTUQspRfeLFbMN5VjUW4dQ24hSDhVETBcs95NWrPyxHyK5U66zJ8Xyu8fXMrbhR",
  "key23": "3QoGKkhEGz6s4ESrpvZjtg6AghjJRv73HjQE24KHKJdGWskC6G2eMUe67Dg3izwkuQPiLGtNBfiUrYdgWSdq1yM2",
  "key24": "4FgUdChVx25HJiwtHZmzepDHy3YFBm31MAxTpxRpJ9Kzzhjih4gVQXQEakHpCdYc2eMSYhVaFP2xQhRfMnLkYqxu",
  "key25": "zHX5gK43mctbgdcrBhBd6kXGYyuAvhRgaQ8nhXmJV9NJ9rcGhVCN4KC4LcNZ9vXYoeQ56k39FWV5S2gzaUPXKxw",
  "key26": "3FktB1rLfjgcBf8K3hDtZrNn9BowkcXxVPKx3qmzSH52Y574QsMX8oqkV8T99BhfSsxx8ayY3Piw4gCisuxhkDLu",
  "key27": "2Hyi1sHHejJE38Ex2xECuwcPCvjfsbNaDwqkorWBNC8X5wFS1tNrc9qBAKhXPzGG2BCYuaYJ8tfSPmaawQvZxF4s",
  "key28": "3bFje4mWFZ2kNM22HUbd7XqmPF1SEMetPGmf3VhJ3DaXftDiMbYcFvd6W1y6kHgK4cezDmt2uRJJDowLah5yqxaG",
  "key29": "5GSBpv9GGHtzjJcxPJuKPma7zca79QRF8f5L9w6nNhcHqQyeEEipebjJv42oqQMEscNSkckpdr9sPDmMopAeLHoV",
  "key30": "5gUH4PAv5PZz1Rw5iK5oJzZBpUs3xicyNqc5W9LqkDcAFfSKTncjh2fF8xLnnQSU6nLdKUXwaCjs72GEhMMNDjMi"
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
