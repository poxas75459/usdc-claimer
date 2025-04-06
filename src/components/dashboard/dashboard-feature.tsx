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
    "3ERHwhD7YGGpD7C7ejNNem8i3Yz1VMDbViSJUK4fGF2TxhRCbHAqV5xY2hoH34znGvTv6tniaXbkbAgenRy2uzCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m52FnQxfxR8rEhWuChbnbta87jxPSsESu5ohCpf5bfhQWt8ShzrvfiFt2ihrxKgufxjQ48wkWLEESQw4MtyJE46",
  "key1": "46u4PK79Afsk3ysMUGbiq5w83bP6oQ2JCZDSzqTU3LoxJK2ZeP52XtZnaQzNqGBophwF5RTacFubX2uyvYJce1QB",
  "key2": "3AkrSUncvuiEJEHHguGcGe1JnkCoPWxxuqXAQZ8mDFaF8trdjwb6Amd1ksbXRAjwaS1LcYWE3kw3cVTNLHd6LgT7",
  "key3": "61PL29ud4idvCmc2QFdK753bQPvix4iJfpcQE1ViVyd5Z7o9VgnVDAmnR1K8SE7t7RVkn81McmiktstaSgBh2Ly5",
  "key4": "4ySCLqzB8C7T9rQvYkRMtigWtxL2gpYFVFg721TgqnBy6zmtumRvg3myiTHrWKvuYxPM8Xh8H97FwkQnPvwzH4Q6",
  "key5": "4gt49a97xGgiVFtBxMMJwa64H1Z6A9e8NWmzhG6F616R2UykX6ZhuCM6vUkJvwnkd2V2hcmdszVvu5cv3w4fQPVd",
  "key6": "61aTycNbZNKwYky6MZeKVGEjkRnjpW7MP8GV8Micz3xfaCK37ZMHvGmdguAvEi5RUgGLhegMiRYVaikpgSc3KF3M",
  "key7": "3sCJkkAfkheh6n82EfWeZ7ZDu8d7UtpLiAkEBNWZoDPjjFpyeZtLnQLMoawSrfGCBKoJ3fwGFe8pLi9U7CQiBv5i",
  "key8": "9vNN9ErAQ5fjDCRa2as8Lkuh1vKxhohq2VEXLrwxxnXVvp7oyzMkZEpSksKw98JPHokYhseNRPHoWKRnkkRXTGV",
  "key9": "2LEw1n4UXmHezyjMnCRC5y9gSxRW2HCfb6UB4XvTZCNMAwjkPgsrsBDde2mVeHjkfQ8zfdFBUGGDPMfJwWpdc33Q",
  "key10": "5h2P563vDah2DZ1QLizKZDiaGRCyX7y1KqTo5m9m8ih1KZEhhX4xods6XgkGEfvGX9Vd8Bp7Zyeo8j1c2Ma7yBBB",
  "key11": "2m6wheFbWD5rjqGxoVCW1BGu7eUrAEJjTsYTqE73hMkKkqJFmKbzsgmBEdHHtsvN4DvNnarCYVcVa6HzKUkRWVi4",
  "key12": "2XDoJZMAFURK3KwZsqHKmFqkTzMKNunmjh8BPtkN9YTXqJL6DtjfTLgSbsvfX5YnyadLhfgFB6wcZagdd5pQKXCZ",
  "key13": "4DoQcPqutgZ55VeL5HHaPY3zRFb2dGArCcdUMGjnNArpj42tb6bap9f9q49CZjVXsRRFe1QjmfXcS4taz1SH5N94",
  "key14": "Cign5o65Eb9xiBFULZuYB2gE6NajUyJVoBngRJyPFyPdwLkaegk6SQ7D9PY51FXetT8EJfpRK1M3jZz78VT4AhR",
  "key15": "4mVa5Zdc9mhtoVnbpwKHmwFmhthmLSWmHR2qEHjvrnMkjciWhtKZBoHYkQnvRF1AGCs54YaWEum7VfwB7DEvfdLm",
  "key16": "3uV3kG9wVCVn9fXGe9jJtFXga7FxWiKTFQC4AvoUkWrtnQ6KeR78QJuwQLWMN9tStxYbXPC6JLPmUj1R49Av5E6w",
  "key17": "3AyWXCYV7ey6xK2RjMqpusW1PGqak1jq6vA1spKef4F6B1kFeSSsv8B6y3NuSHLCAcHG1am2YFieW5mmZVi2F35y",
  "key18": "BtVerZ6cFAn6MaHuq4S2m6WYJoQdf1xgyWAPSzhCzTKX3aHHmKyaSCpWKtyA4PiQsSeD14sd2QfDkYEQPyBPxqh",
  "key19": "2Fj25DctAYMMbzHHS55j267x4jfvhtRdovfFSt7XN6H1DoDdKqVaq56sbCSypkpeEUVcHXGK1mcAZcjghG57BZAj",
  "key20": "4NwZq8N8oe5zqRp61HFj6jc5LQkXngXSRabPnHhFn3ivpdDD9Qmcc556u9gcbAVWqrgvkXyCyb5BfVtGTBDDCKgb",
  "key21": "2NTHsE7AdKPJLtKaUKxaLkDcRusAcWDHXJ5DSaNbiP6ALV8M4r8aX4yve3MaTJ1JFGA1pYE7dQNejQZmfA3h2eN",
  "key22": "3MNv2he1LtKfZGNzCeDHddEFECHaBaDRC8AestBWnKB8om8DYxDN5uXKyoEZ4cRyA3Ee1QPBjigx2u5rJPJeJKQB",
  "key23": "SHT1bv6PCYUeMPTosDr4SCW6pC7MW5izc4k7WFGFHPsrpzQm4TByzAf8RSYYTHByBTnTqSTSm8mBCk4DJTYiP9k",
  "key24": "2EXgUyNhSmJ9DWCAXdUbEaZbUhvA7bKbi5K5LudZd6WiiHG9s6LwrPQFZM8M9nc3dxrvP5rFEtakRkmYDbsVrdaB",
  "key25": "5zUMV9nRUp6BCbX9UjASH3EQC3uDQrqx62bhUu836dWWfXyThQjSyXKySrBNRgVZCZEynYzGEUep7seDG9srtJuE",
  "key26": "rL28TWUWPiLPYeCjbER16et9Lb6tcCuYcuG6jA9XeW6GnJ4qEDqWKAUpQbNdcuEyrXugvgY8ub4CRBHw59xeacv",
  "key27": "4KMgzHERF2zW9zzbMBWvU1P7VF3C1WQZTwWdLe6DJEN9x6Ux71kp7WzLe2Gawnx3UmT9HyXqvBa2Pua19EW4wrU5",
  "key28": "49ZNpJDTwvVYVHLbB6CXd8tfj3ytEoQAmko1BSKYqFkZm8xSWpebHeNxbuqPEV5kS64mMLQd3UM9Ezh85S5LqVV4"
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
