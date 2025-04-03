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
    "32Q8wvA1wTg98tTWU1MGXqtq29jYSc71Necn89jubd9byTPLJBRsHinAitmqwEDB6DzgvGDMMr8QzVDDh9BDQJbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dw2PqiZEX6zRBba7gcmc193MU1jXWnyfa9f8ir5vAiWXcs1TNvSdUUnrxi3BHSXe4LTdvdZww9tDCn57Rn3JzRQ",
  "key1": "5oxfw8knoRrQvfhzB81JuhaFUa7RFTbAZMb8gXQayku2qaKhwCBhTVf2tdooCh5ya8QRQ2ZwkEDDVrWKYj8PR8sV",
  "key2": "5NyBLcJqaxBRPxNz1oLce9ANCGtRwtrMabEx9zrSgcV16TBzuSdeFNosrLZxek3nFSv3bKJN76EVd1cdqKcxaunV",
  "key3": "2a3pwgZzieZQn5Cjs1hErtvhpcd16WAEHcUgnDLaKGuhPUJYtnsUJjvaGJiDKCzD2wJKicLCpLsCbEYYqcXmUwoi",
  "key4": "4qx3xBA9Nh6PzTUsiZoN3HcS725YrmwHUdRtuAenc4j1ta4udmk1e3A4h8uFTmmigumvjMMWzK2Co1wXWHXXWTDX",
  "key5": "541jj4n6hQvR8MWcredn3HUy8P298JyiP21fsjrtYXbazCjtJuywg2tr6UQvagiVnLWKDhigiBjt3uK6XEQd8TFA",
  "key6": "2t2jjkL766rtXwhhyszWg2ZjK857FSJn2be7TpENNCojJfb4XHNytsgUXgZ5nyCHr6VuNfAfZADyt5eh522kvE27",
  "key7": "3CdaNSXNRkZkUXDGQZZfx5XsYu8YV6de5zzMqcnk8hdMAwPS1ZzS9a8iKmi9HeKhhWDynMx3vhPNtvd3nFgz4DCg",
  "key8": "2k48hgLwg47EYsaT228Q8JpeApf3BseUNB1aMUV5ARbtbShPmXoJC3R8j7BCKi21sVkLUev7GPmK1bMeGNeSm1NH",
  "key9": "RfMgLgVbemZ57bSUhCEi8GQudeQYPJ5HYJuuPsRHsUjTRVjuYfmp5GmvYWpbnSX8b9esNyzBX3kUxkYzHCjHnz5",
  "key10": "4H75MpeKPvEz2tqHeGhuqC7EcysvxeGV4oWV3cvkifM5MP5HMnhNcUXxiifKWjVGosUdwwotDh7uZ1DYTZLpeMef",
  "key11": "6etcDCKDz7wGRUkfTtPZqbBxoVHiXim4CJwRQS5e5CFWcHVagpgNGHw13F6VdPcZnxk9exZ9VMdDVGuDK4GtrPn",
  "key12": "3VY9fRVWkpi4HdveUyz9sQnRXbbRMztGjHzgRwY8ATJBoP8tqXfrSSr61MQaDBzML3JeJJ4fS8oK2en6zxjCqLQT",
  "key13": "2kj86V6t4JLR6Gd68k8rqsytQvKd3mXeebtz9MoAZffiqBGuZoyTA2tJADvmvKL2bpFoHp6bu6THXHVg3dnSZJWj",
  "key14": "3WdF3b7ULF72wReKLX1M8WZGW2vH5RwzpJn9FK82NrNf1F5GvyRE8gsPVCdaSKCgxFcTt2L5kcXKaxn2bxGhqcMF",
  "key15": "2ty4pd1itkgrzKTYPNWN8xPCUuqWhHuyEdjf1WQK9f1Duj3fPNAFn5FueEpxAqLFtQz63AbEE2BooAExA3B3WB9C",
  "key16": "os3pGnm4b5xRAfVYJRCN5yVJFMFRt8y6AcqkSuCLy2Z63hLYR523M4N8kJqWUu5MJmfn8dtqEzdTjbXFHLu6dPL",
  "key17": "czJ9zSaVBcSGNbGzXev4k2h28sznpPrXYSZxBxhFCPknhu6z39dbhN75jfkh4KQxhGauxUw4cDtkbuMCuVcp91v",
  "key18": "4eTCkn8CcHWGvpia4HDtK439rejRy81pH2DzoufkyFZf8hUzM3VEv3ZBR6wckkx33EPCoduL4C1ZWaTL95VykSGg",
  "key19": "5rLoUaA1JR6gSxiKQuYofnJL2dRuBinTQrjZXqbiHmd7LnkfjHXjLLYANrAUYp3bhdrf1oK4SszqtbWx7K7Dbhc2",
  "key20": "2qiNwZbpAXqChLwL5VYJLxMU5t3ajQ28e41i6T2ULvt9cpkYz8XxCVRRnMBBfKaftUnaf4xJwZmYTTgDMaLQpHCU",
  "key21": "4fXJ3PYwB6hTUyat9xuT3xfXKsNPwVifETPN72ZBWyU1uoY1qN7tsXg2QaNRvXFbxFLGRkHQtDMx6AEfHQc6kSdq",
  "key22": "2zFRjLGTQLVu1outNhac4LHoiksccLMMgeghrGKQzJdbCDfVV2F1KmveHQhS2ouNZy62YRtgf1aamPahXM6j8389",
  "key23": "qpaPJTfgPLFsJHYqoRA6roqMSzsaNgHeK3JSpbDLio2XW7QCedGu2gjbDTZqw4ngF3crePYGqExPf7TyCgZcLCH",
  "key24": "28GMcsqHefnAHdfY8oHftzkdD24DMYj1qmokY9woShw3vcPiZETQ7kyr4v13e22CYQ5WjeAaAtnPURiVcF6zQ6Cf",
  "key25": "48aetUXapnt7U8JcWkK1V3DQxiBtED4ga6Vx6QFopiwqM3QcR7HBe27a9aHmpnT9zPcR1WXw6LSmhWrYzxkw8DG8",
  "key26": "KfAKLha9fCpJv23MZ2CPm14Yf84oFsxhKCdS3pPwpdVZXG5Dby2tnvW1naygswvwnwDMjWEKdwp4EB67ndPUngB",
  "key27": "5yXGhoqEKrkGjJG5BTRS1RHm4EAsUoW525Y3ZBziDhJ2SSY1GR3ygarP5cvUcw9MTdz2AmPBjwWmdSCii6nkdL9Y",
  "key28": "3cGxkDzR9Ye64nJ1iRu5gv3daR82bK1bqNeGNaXsFZ83HoPbwkHuLaVa8ghvGoHGaagakwU7B7RPmH8zfa5ZTMj",
  "key29": "F9VM9qUt2QmNZXWXph38YAYbR2vRqyMNCREhTeXA237Yt3b7rCKWvHyub99grH5KzvNKFbz51FEo8EvwTMKbaxS",
  "key30": "652ijH32QfhsvmTfjfkYUbuWFoUkJePGX4yhgerLRKcSgusExxFqtbZRXKgozVGU2ar3VXU55pxaxV6Esn3TFvfq",
  "key31": "3o2NvXMRo4J2xUUc1joTwrkG8bJ1rBcEf7XwEgKEAvBtd4u8qF3bTuZ3uetreshJKBJgHUMhBTqiK9aYSf7a7cH9",
  "key32": "4toRZxfs4ojVQtUb9zbGXCgkoa7qpBJ7adLReoCrsphsDwM7Vc7SNeJ3efn4sEuwtXo6Kznnvn5ma9uZxbj9H49r",
  "key33": "4gvZ8o3B9EUhp4hEggzhsup5aK4kw7cPdu8XHDvxJBg5mWScweo6j9a6aBz3wDP68tXSzXHXUE4wA9uUc1RVz44"
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
