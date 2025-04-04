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
    "2mzrHdFkTPJuFk6kpD4QQs99QZ9tJPaSmgqVKaD9GFwBuHqcWUEqck33ohgC37ymArZuQUABRGDhuTrz2vL5ToZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37QwLSNtnzvf3XGFvLPCeY1La3puSrAMewnzWn53BuiZ5XZ2ENvewQMnKH9eYJvdZiWBEntzjqfvSZK7oLXiYTr5",
  "key1": "5KLeKZAGL8pwTzsBxfgHXXLauqtwcujZs2CAS6Tn2oAEBuHAAtf2nEEuAWEYYWHJmLwK1jGRuSunTEcmLvt8VyEK",
  "key2": "rPhoEenEVz6KccoMmNyV3H483T9bDNU1cfrUGKC12cChNNiqtA5R7xeWfudLo3o1NwWMACiAHNRaA4WrhUNDB1N",
  "key3": "4bKs5WQgrdrciAcSkBapHF31o5TUtyCFf5gAEPzj1YDX7B9Fvg5Cxp95sXNdB3PfCf1TpMJ23Wokyqwj7EpY7owS",
  "key4": "3ZGg8T8Lx7TeotnYaLS5ssgoUdkYj6Z2ctDL1Mf97Zckv828c6NdPiZPAAvbVDK8xtLdXfNWZKrBWBpYcyAxShsc",
  "key5": "5W391ARqGn8gRrhrWkKqj3QUVd1dMop8wYjjse4fUNe1pDgSejY5gD46ButoXebMzYQmkyegio38Rk4ysN3HWU8d",
  "key6": "46V8TmYEkPwnafLHt3z65Ljk9o8b2FzCXfoMBqYth9AiaqiC9oy3Xx21HUHcaFsYu92rTpChabSCuW4DPjzSDado",
  "key7": "4snSYEVRNRvncpeDAdUcRjLa3q5VhWkW95U6qTDaHuNcAtFYLD5pMGRPR3PERJXYyTytRi7C2F8PZQrTyaUuy2hQ",
  "key8": "2ZWXaz5wovtdUJCoR65qqaL9uXNcVVrY12JSXapjHXWCK9SqsftYsG4aTUZ5BkhNEiUXJKa2LtDrrdzhUXd9ytH",
  "key9": "3zqUmt78jCkz1aKMkthR827SQYoPJTiZ95k7ZkrbHHT6KDDbcJnGsRScg4J4TrMx17NkbfkoYpX2oAfFw81M2zMw",
  "key10": "3UcgFUKgXjSXR1jHBDsPFyP6FMs8vDppf6m8h82Z6e8Z7BCGqfJNGeHYYQVLGoN2ekD6ALpt9kA7s4eUPk9kN3Pu",
  "key11": "23b6991sQTsaAAfLZeAHYUEsKVzUxxvVvFppUGgvbSqJtAS22GUTovebHNT8Fj2wWPEPP41GQ4tqhQ8w7nqtTW6D",
  "key12": "3wxgV4EgMDvH8h178eUBKVppzgdEpLJs1CZtPegeav2H9BBJv8cNNcsmoBvYgjdc3gU5gH7zNt6SVNWXjZBHHfmK",
  "key13": "2rqqbBrKAjip4JuH7qhZt1eytvdf412JGtvqr5hpyAt5e3pehgwC9ws4JZn9Sk3sQkgHiCVtSgGMtMsMCtmegKuC",
  "key14": "4ge3HiZksWwcQ5kFCrU1BjD2pG98NetpQZrTW6FZwmxpkv8FCBTPRCPr5fHaxhrPQWhi9LYYRQz9v19rgi58favg",
  "key15": "49XbA8L5ZjJpJ6JdguS3oJkqifPhHxiE2ZRGzSyJG1WcxcjA5Kr9p8XnjLX7RQjBNM5mRUiRY8wXkeiQ1KfWVi3D",
  "key16": "4rctdfxBZ3x7sS69bUCwX8Uu75Aa8Bv9auNS6XfLtyXVV53YFVLeBW9u11Feg8xaN2WoLL6UPVJAUtAq5Uns4ZBK",
  "key17": "5JFG4Vsf3DYPp41F2d427CKCtsXSrhtWoZRxTt62uGgSzcEEEMCjfPEwjHDMJhc1gChHMQQfJuWN3Qcout1WXE9f",
  "key18": "3XPGXESTPSG5fkHLthaLsZap8BSXBVxGvFCp1MwTUc8fmtChepYfPUHQMhfSHXnybdcste8zhxRmEKkuXVFyTtUT",
  "key19": "hukDJS78dsN5RutuztKZkV3rjGZxT6wpJahvtw1fqdbmkYSommnogsHZpgPkLn5oa7ge7QhgTRjfw1Xv8BsNZzM",
  "key20": "4NETXaYxB3Kup9ViupWdMVZ2FAnLZ8RNtfpSDZvQMVnr1jjzqzS6nVRGV5iAk3RbGooWj5zNJuwC9ERidiQUYM4k",
  "key21": "5BSNQxZKgFougMsxvW9KPbYnGrVzFACTnj5XdR78CYbMaJq3JaDXqzZYwGUfP2deoWzeZbyXm9YkEQz2s7mTDMrZ",
  "key22": "24jRLJzdcAUm5PAEv6tk9j7VVDA8LJxFXjMWeqRPHhSdBMCuj7zjrsqoif1s1Sb7M9qMjKdR1wi6wgWvNAboWhLR",
  "key23": "2iuL92xoFoMZBYkgTrqzDmhPa9P4xPjBkUEAW33DEpA7aVpCkKLTHbXNBJJzXtxkVSoHX1LvqLiFk7tGKNpK2DbL",
  "key24": "62YHGaNSNFK7hTohG4Uz28RZoi7zKoFwAo7VMyfFqaqzaERBfyJBgoai8GadFcZaWQBtKsf5kSiZC1Js4Rmth3DS",
  "key25": "3ZKh19Q36EzWwguft7BGQTX66JoHedaESxMCmTuc97mc4jmspma7NqZ45vNzbhqVzKtYSxKakxoispmjgyxzHvGb",
  "key26": "4HsCUEr8JBtASuFTuuWZhTwV3Tze3KvMnyJdBGJdeUfsooneRHU8DyKiN6a8cuZJkbP7Ah2znRUkmEyVq3rp1uBS",
  "key27": "34adutPWJ5uS61BcFZ5DQkWN7QTSs7GHEnycEor61XPtp2s1SZwpbrspBb9AR6ZNrQc8M8vaTHi3Sz95LByYibPy",
  "key28": "2cTaGpxC8UgAwz9zWGyiNN24E4CD2mLF5buQVFG7KnUaBxYTSk2Lj8kWozezQwprWKJ3RYEUXhMA8jj9iPJPKA9z",
  "key29": "Dce6kDWQc4XsNH36mS8zgt6RwaDNC4pdRRHifdLmW8zbXHAyVBMpHzjgYXymPnAqyUMKsqfem3RDY5DxjKS9pGb",
  "key30": "4UzUYLZbdbu5CfbMEauTypncByoACn5ZxqrzhzKoBc28oRMa1mKmkxcwBk4Y4qX5REgDHwqcukXa2rzLz8od85Bp",
  "key31": "3Ep7719HXdkLwLpjvbJPDG1icnmHrwRnZqweFNHNHndrfFgj9oqKCEQMeP5pddv5GzcuZvnmD1D54Ku7q8QdFcqp",
  "key32": "2cs7v8JtGPFjrDXWcNsXQSnbeLBJSm4d68Uo5F1NpVa41whzX9oY7DFFwFyiBiEtPVubGBFxB721maNxZAP791Qu",
  "key33": "64uSEKXGDZNaUfmPwS9iuCfmgJ671jmhLYsf3b7Cvoq9XuBJnUejLrSTaqRZP2vhtHPhDEHncuSkXWrUnwKp5bAM"
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
