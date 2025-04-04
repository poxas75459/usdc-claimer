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
    "R2bfvPJyXzVmH5FrhSkw4C433JJBj7mwraam1bs6DV33Ne9bYNMVoZTsWnpuuf6tECLMRMsbucf4T9L7Gth1RNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RAUHsEazKoYgWNjdcyRcpxT9Z8yLaozEsVfo5gAsSzJVF2FAAYrgcZKd6HC14g2Uq85p6vAZNsNunJ1QPSefsku",
  "key1": "5gLg5ArP5GAdYfnYmKP1M52iEvqcr7My3vUp9nUaJLf6HoZFur5yi3hVdnxbjy3nv7qnjZTDUrW39JPXyPkYYGmZ",
  "key2": "2ngAbN6No7LwNpgZDDALWgzzQe17xrm5Vg2dSZu6VuUFrjHf6y8GyM4WKRpqGJHYnm181KZASwhH2cDG22GxnCdS",
  "key3": "3wiJ5YHUnApquK34P6yw9uqhgthXqKgKzmwrwa5UzwqkQy598xHS4Yvd855r4JV5hUtT48zt87zf8MEqHF12NmRD",
  "key4": "49rDjU5v1xioSHPHhdYUMpzsd1WCWrpTgccbw6KfgwRDkGcHbHKFPNFRNJ4uLvU6ZfFPkqTHw122Nri1wDmMnJM1",
  "key5": "KK8qv5HvaVYiQpMkjkkoJapWkuuaQmrvs4jwLNGkW26A5jgZMZkWbCVEg9cryetujArdNMe55gLsFLKibuhZogL",
  "key6": "3dAGURd1at4eAdmR7H2xWbmrSfU3iEhVE9xKP6skFG96gVeEQREp7Ky8DvqzLvCPkVa9Mofa2XRRJNq8NPmR8mLR",
  "key7": "2NJ1mB3YMrgyp57FmGJbMffcf5DqjSGeqdATrP3eeYwoPARwfuavr5FFJykhkzT932EeaqHykK1jM6tQdLTPL4gi",
  "key8": "4g6NJb94RZrcYy3BLs2LYEavx7BGjTMp2uuQcbHyHom1LfThicCQqhz9JDWL1cLh6xKbvHMfFp64V8XuASEE7eqP",
  "key9": "EW5dThFDaGexub8KSDCMFxqrWhwT729RZ2qKc9Tu5HSuhtdj4ghZcVjpmGwRj39HvMqoW1XAwPRPE8GRmoFqFTb",
  "key10": "3ZBMC6fF5yZvDmpxtHJstrbG4e5XhZef49cNQ4PBH4hGd9hpCmKfPw1umjU2gwpaPbziLB81rxWxQAYk7p14E7Gb",
  "key11": "HSezjcHUhyAexVFga7gzTwzvdHzZ1KXMP1uUU21AhZRLRkb2PW1RYF9f5E95YwpBcMoM8BE7FsW86zgUG1J7mVp",
  "key12": "35yYtFoA9CeZuweWLwS8QyWammuYFsf2KmeE9M5bzDMMq89C3vHKBqtcVmnPE25R1P5ww3jbxWgSQseQyXMjE1Ua",
  "key13": "4ap98XUrpL4qVNY3GiHoSRDrKHPQnBc7RPG1GUn3pRRpu5N5Bn9e6NG5KrsU1kxRfVzsKJGXnh7Z4uEfG5qrr3xq",
  "key14": "5RjbLUrvRTSsszeHqYVHiJD8XsbmaksR2v2eyiUAHnywaufeCsneHWdgYD24Eh8fYbRyYWGkKtEMhWsuqswkqDf1",
  "key15": "abaSnC6ssomuGzDof2wswzvYYViEZR17BAB4inP1VRMQvW4AcKCUn4goiPnbKWzghg6wSvUvyqgba8rGxz91vqx",
  "key16": "5qCSRELj6Uzh3RhfUdYrBiTSFfhAbV9BHrNWucmzrg51jDoY9F1zN3zLHnWnFKRVTuqk1uUVpF1vMApSbSB2aMac",
  "key17": "2L8xcG4tT5bMAAoSq5K1zHa7Xm8uGVK7QUvLFNpiEzXtQuhU5BJkUeZp5abZJxTN3fqffP74Dd42MJ2rbB3H7Zh",
  "key18": "5EXZyRMGKF99DHbNC72zFiA8LWzLh5mNzSncdiFVc3PBPSwtr8yJ5Aiuqmrc7zGWsTYUV7ySnYZ3KxXMDpsPJxHy",
  "key19": "5wxx17fd8ZvrsoASKGjnwh5MubhzeC6GfNStJGETk2QB5LcEDVeFVeM8kJkCGNQTuFNZLNQVHn2qG8qrXbwijDNh",
  "key20": "SByY8uXXPypme23jVAFJCZxWBEGKjWx12QcwgxRr2pqDKVgtExFFSCBRHza2onmT2KFVY5NxQU9H6B2fcoNbQrN",
  "key21": "5xJShMbajGivrUBbz3Rf2fARrwnyyP8bFfazEZj7g8TEbGByiFPqV3YhdREX55mvDun3CZo5xeSLmQsuSfoSJJ6k",
  "key22": "3pNrd2MWrPubCbkR6unZkAKB5MTR6wyV34ugA47JtzjjJYVQfzjeQfvjVX2NTSJbUA9KntSR9swkUzSYXAuLFc8x",
  "key23": "2u6TSa8WKVeMcWKuiUhoasx5kaq7nvAeF6jy5M4vgnkhSw9v7EshUH5Sjvt2yZ5x4TkAZTNNpmphauWpR38i1xhr",
  "key24": "5KWbMrviDzoVNiVY5bcx3hzpktx8HtYXGHxoXxzzdLaSPfL3ULNMBWjKt8Fc7ZPLGmXuVzkAH3Uv9J4HUre5tH5F",
  "key25": "22fHvM7ZYUwGLWD2FbdaHaRESEbvxg8bSG14VnB8BTcYE3eXMicjwth1KCBHRrqGgFsMhuSpxaUj7gDppcPQo1Md",
  "key26": "47a7zZhzWrWWu5QmVgGMB6h7WDBqPXu8ReqbWjKZGDkmcnVpSLxu6XarNA3FBKuBuGRJo7gLkiCcYWfssLfU2j8p",
  "key27": "ZZyX7XxUiCbEBpSzawEYnCdPQmP6uZG1QrWvNeMK8rytRyqRT9Bb16veKNPDaGxPP9jb5Af8Kys87wwcyT1ZWZ8",
  "key28": "AuAW3cfhKtcdEmqxbKsg6ptdFVtNJM3mDxRfYDSStSXsX2bjKqCtqPbxYSTSscSvJyMt3D533SxfAB9bcn2PMJr",
  "key29": "4Uua24ZpPSTmmWMTWeta9o1gDmS5v8FRx1Mb5eg5ecVKQ6nG8LNuaT32EVwP3CKs3K5UFzGSd3uQQkDvHC6ADbWd",
  "key30": "3FBVqMyPjQ2aAP7eq9FTJtb2UhdRjax9Qn8UdENgwV6ximpGeNd4ygHzNd5PuFX3XpYShZdHtdfo64DLdKpbDUH4",
  "key31": "5TT4oT8iQxVx2uyKQxXttzt1YF4zhwagrtod9e9srDSsHicGtwgUdepaM5LJqmbZSEFXhX24gaoeezrzHjoYbYtL",
  "key32": "2Aw4e8yrQc3vPqWBWYik4Ls4aRzFQWB8ArJerhebtsaK9Nd4krKHM1shPLFJvZWmhPtD38TwgTJN1i3Abm4DF7Qu",
  "key33": "4dNdpUoDTaraGP4eFJZjt8iDHgWAm7J4iNZwk7zhBWyqPqUAyJtR9Nyxj839sX8fzhWEREAZ2zqhbM1wCanEvPd5",
  "key34": "5yBpvMYzTpzJUcZPNQTMknj7qr4PWm3v53DNEfphmyw7xrstw8ZtTFHJYdojTfmJfpwo1KCYq8z6giNd2kEy8pLU",
  "key35": "m4Z47F9qdyw2shWox64DsJTpMky5UASyAfAyXdNo6naTUStwnXsrBzWJfKiHsBbVJC7zZfr9UbEacVamodcjyaX",
  "key36": "4LpzV4VMmLYzTbwfu96MnqFfCTn6rqvGYQm1Mb9XXnJQQaFG3x3RFQwzxENV16oNCU7UhcnvefzDZBeqUnAYmV4J"
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
