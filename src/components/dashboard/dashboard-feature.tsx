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
    "17e3jSBhTbEoaK2UYkVdqp7YDDfr9vVZzQbVbfeQqYDTyLMHQPShWxSesqqqHSUh1tUqsNM6arYKYogf7k27i9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fCeSu1StqGo9rfwFwhZTVW7d6vPAoocxeu3RDYp58hNpfiqfnB41WR4DU8BawazNcTJR4cNdeeTuxDzwjieW612",
  "key1": "2W87Mf1kwBS8e3twFKWdeWvPaQfyBQvBiGiuMrtBx9gLBUHCzNkiGLikkfP1Ra1A6zxWFpabudZPXBKrqowb9Rro",
  "key2": "3qR33yqLk7jjb3iBd2ZbeQn9ozxder7KBQD3rdkCo13TmVQoRsACJYZSr3UJFtMTLKLGxNMhSs8rYpr6Dj29RwDd",
  "key3": "GdXWuNXYEujcA7PsZEUW1D3vcSmNLPCXznP7L5Vsep8c8c6mFSNSdHwFJZxAx4qorXXi8GRYNt5pdb2jouUj9zX",
  "key4": "5GEMKciYto5icyXtY7cenWf1ThWrk6jDqXyRWCEWb2otMCRceMiiK1PGv5SR2G89yHnFtdCzohXFBf7EHjRsUCwG",
  "key5": "3PREW1S1aMbX416sCq1hHoqsFNdfgPRx21TpjfLCEXsvqZeNrE6V7D5dTEBnXrAQpaxrbZKEQG2XMpMcXSZVbaUe",
  "key6": "3UgKc3ktcSW6hR1V5pCo9G7aPo8T89HpuqALxGQB9qAxw71nXLuNzVottAG5AGrCW1yPqrZVndpAa2YgaHes8CYg",
  "key7": "3LXHwxkHmMPjJ3Pw9Ggp4E1KhazapzUgrea8LcA3wiMqEw7VQNffzRJpEUqWkRCbcBunmc2Y1vquXuZBTaYwHrvb",
  "key8": "2QVHmwQhTbGGPXMyiDzD8Z814KMGeqL6vNNY4fjmptpjCRCRoBKx5wXknHmyCFRNYNqQcxwWjWZfkJ3YvRVCYU4f",
  "key9": "2mCSnytDiv5ASgF5KApK4eKfDHmBEuKJjDrgSFZT1xfAztf5gJg1bmgFziK7V8JVjNvJBdGvfzEd5UHKGKdjCr1o",
  "key10": "5zdQDUvokqhmQXtkggMxrb4tzmpmbhVYNFCgfqg7hACzHF6wuG4FNhadvvsapt3DmxvwpbhhbURCnVgFSzMhuTx5",
  "key11": "NqXnpvVQ5jcYkVXAZSM2bmxZ9VehQJ1nygHUZD7ahnYsbaWvDZetBSTESrpTEDf8HiJnN3tr9roLMWrMtFaTtZ8",
  "key12": "4GWztwM6HwhqJyuWAcGezJ1AzhKFxLhTn9AzgMjApFV6NYjQvPgS2nLR71Cs95eUG1dV72tq8w4YkwGXGdJpRxA4",
  "key13": "2oua5HR4bYtx2uppsEbxohxnbQZK8DsjCgFLtoMbcqhX4HrTd9GTvVz8ESNpQZtak4nc1JeWneZXLfF4JnApJDgM",
  "key14": "3s8rLMectByddgY9ep4E6kBBu7fQde716vnEi7Lg9uhLGDh94ZwsdBakBgmXRksfcKXS9rHMsh74Va8n71eXahn8",
  "key15": "4oJca58Ea83QFgypj2AtYDeRwzs5EJGHVNViyceaMfgHZn4cHFaSUcoG3bujW9iSAtSfJ2rkqkxV24oDVSgNmR2F",
  "key16": "5Aftnnnat9Jd4yh278MNtFHATBSZFZsZzyXFEQvFcSXvubcNkr1hDNmy163Z1SAcJRdx11Ec2CgLvpFKpuUvsxvh",
  "key17": "3ETzLUq2beQjvxTmGpDPcaDsiwc3nPtRQe2dfEBraugWy59wtvtC5QdF5C24LMBcTH5ZbRuHbYZYWyxM5JhLiHaC",
  "key18": "yUW34gZv78FXHQUvBiFz4n4xiMGgKqJYLA2nnajJMfsxa4ddZv8ouPv6eMQnzorHXicpR9sE1MtPhY34R7mR4tL",
  "key19": "KjniAuxhL4ynjUFRmkNMvgWQzsw12TmLkeYxEPu9nppuGNuL1LSEoYc4PkNrux3Km2NLwYPE4b3MVFX6hYCUJYZ",
  "key20": "nzV1BgoTjKoza2k8eaL3SQGFwXbRxaoAKHqvXuJbS2rcgyNMx1op11cAftLmfydvnDDKGqt3CBzCwYFLqE1Gf9W",
  "key21": "5yNZHmvQTaTrshnWKAowFuVhBuuBwDJTBLP73hJskoPVKuJ9vLW79MwKAXr4woyXzRfWYj4aASTriaSnd3CkxpEZ",
  "key22": "9C8cqEwifLCKZzAUnY8focERDwBUaSxo6cn8WWNZWnyU2UpH169jrYD5VK4LhcMDvP5BxuKZeiN7ncxaDBXp9dQ",
  "key23": "5MEbxwZsmAcaxC7a64yohWkymu66yfL7nboBn8kcoWxa87d5RsW41nWiTD6jv7VdaRjYaycua1XvDuoQuCBHwvPB",
  "key24": "3LjZoeeB6xKfd6bZYmTXTcj1zkGxBA5CYDWVgfbgkS88FxLU7Pmh3B9NYMatX3qTR7LgSUnPBn6UbTmjsgFdWxHn",
  "key25": "4HmBw6nCtt7YZipnw7FqSqr5PkohoR8RUJqqNmo4dsd1Veob3uDtJfVkFEU6EUDFRbKMfdx5vTm4FawM1EGUAoXi",
  "key26": "ohUiyZPqFDMBMiGHV7FbosazHfs4rPMY88fSezBHJLpfWK6soYp6LCXvHB4sVyiS7vs18S5E6PvzBa7EnFt8Foe",
  "key27": "3FHeC5dT1Bx9brQLJ9LMrsycoaervSyUt4wCzEdynTipeVNr21TiqfhMMGsihvoadwDSe2YcLKxuM2jSkqEjBPEp",
  "key28": "ndrBRaVJcTMiye1icHJubkJ6TidHFTZh4LfqViLZnNqfXz3RsrYk4KHCqWpQukNwfY2QyCUHKQSCXyjEAphnb2K",
  "key29": "5pTcm9y9n6FbJs5dUY5hWfA564L2qnYcwAMZd12Tspq8t6CbRC9ydB3yj6Z1SJ3QKbRPyfjWLStD5LenJypLEcwn",
  "key30": "5vByGAjgvYoJvrFYsAq3xiNWhT1AXsFUAZFUdv7M22JYn6qDEqzHizjvtZf55MiaMy59aWbhyV6Q8szyoZvBUWKP",
  "key31": "3JYAUBs6Em48np8rcrNAMyuPhr7ktGGTVrZUMYEeFhJHB8ZeWqG7YabnR4r8RcNvReSbmcnBWAuPQkA5Qznh58KK"
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
