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
    "yDPyWD1FdEe6saTgAmAgiBFy7tBcn4EeSTo4GzMcqjvg2Kmrwvmv1bdJi2gSGEtQrWCKp64LnP4YaXGtxxanvmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e9zkWUqR7GBNhsSJjnuKm4i5qjpvtYxbteTNLMnpxJgsb2ZbWJekEmsSWFSFyi3Ew5RpzqjqZ6tyqbPhbkLFxUB",
  "key1": "48nFEStCVdXoRqyMEHYbdAn5Twy1ouvhGrKfNvqZ3AKcEMwhyC3Yr4fg6JcjDYMjU3baPHBPVwyayQnEY9USx9TS",
  "key2": "2qmKLKLDo91RgNHEPzsn7EfXXtsbqtKEJ2U2bURhSNuU24mtAutukVYvpfrufzJWKPqZWs38CFQ7tEsUg9xtAxfq",
  "key3": "SwzG4F3zhnpXLRN9QXW4B7KNk6PqBUCLhQKzkxvNep6ksShJSFaxmV7PigsCM11mm2fXambnuMhQK4b53bHYkh3",
  "key4": "5nVZUxG5MWHcVp3STQRm6QuAZzBwYME2VH2JcXVPfcrGASM3Zk2p4fmYRWKEZRXAjLP7yP4cSJ3jDrgPTVWAuPxd",
  "key5": "3FF6jsPZZpewrsLWMmX4DFw8uqGaiKAXKQdMaRWd9sm4MzCPreeXs3fh2JHAcbrwFKADRUfmz5jNFV5eXtUGRHsf",
  "key6": "bcE1znzShGshwFvtLbgFsBgpugMGnsG4DaJSjujTJNhkmeUgRnSzEBodq3EEQY5PanKfGKTp4FEHrpCBBGFjJYv",
  "key7": "3RcxfstX3LkwbUTpZybHx3S5emfbt6JueoeSBEng3nzruAF62NLWiGhXiUHgtpnTouJREJFcHv2HBe4Wb5vFofYE",
  "key8": "cg7NknbeUqBL4qUBKaN8eVfRkmhrCg9qztgmwEsor8GpUppui1csmpPioupAyHqHXNf886bvSYy9v6H2paSwVNJ",
  "key9": "3kiPfzzTqNiTiZXu33jqudFiwjuMrz5NUgrbuQVQ4dQXoHAL5UmcydmaZikKfGh9DxUkPu23yAw2nYFuy8oaeHYX",
  "key10": "38jYEauP95m7mmBfukuiRrDhbHaocpaniLbXeRjgKprzVEGJByMBC97E64VyrGWNGYDZ2d8BJheQ86sEp1LVdgKk",
  "key11": "5aoMUoKvGMnavoi5KXx7TksN1BHpyobJqv3h97dBymfaz8Zcy9PMRQMpU72gvfPVqoFTpRvHq1trTHWRXcnec2cE",
  "key12": "3xh8BHW9D9bCBxJBHheAyGeqAYrB1BbPdZMqM3s4EM52SRqYTGjACRp8a96SEDajFEtZJMQtFXCBtKLu9eqc2z9a",
  "key13": "3e2Evo1v8q8cHgitxpHKjLwM29wTL8qCxFXhEcbb531Bjme4RXwWzGcCE1tYQfvtQpZRCdozJdEuWG6LxFMByDoB",
  "key14": "QJQntrLASsyak7c3eFZ9qyPzCikCTdsMZtJe9ukfqenhC7Nw1wWeb9aZTH4ZZVj8f7QnowYfLjLBvRB2FAAYnUy",
  "key15": "53P3VfW3JZ5BbHHkQUXmViKdAZNFeSXLgojUFgE5EPQyznkEEVSqvVwdsQNvWnnpEaeeiUjhLWnWppE3FC25m9n6",
  "key16": "2UQzMJJwTd4BrvmjTfNVFKY6NLDoKxcZJ6dSvBrJr3x5KH2hViZc1dqfe4fEnruKiaD38jfGjuNsBndmW4awxwhc",
  "key17": "3hL5F9xf7nxeEsd3b2Txr8PJGHRUrKKGv572k7YiSY8Xa3rT8ZsyMLJ1YgM8S64WhR7xB5NnNiej3uKtZaSdzWmc",
  "key18": "67V1enFh6fzkJCrumCzBE59hDxBAZVdi19XTWMt36gqjDV6p8XHH8GS9tRavipYZZeenzxoYMfs1zAdkA6CpS6Cu",
  "key19": "3VfeYFb2G3ZxK7N2inrQ1YPTTJTHKDYo77Te4UVfbEhGcUzMHBKsbzjK1M79C8ViGSQbM59iym39D5ABVcFTVaRE",
  "key20": "5fJkfK789h5ajZrK5cXEzpW5v5a2pnBbt6qsK43BTadkze7VDHB49F5WesqDow2jqsYqhgFKNp6WvZKTpoWsV36A",
  "key21": "3jSKfrySJp7xMtJFFKH4UdP8LZym9vh16C8Mm2xEZLjWLU1KJiAwLyrAgMNbTDHt9zTHwTscHxkRrSr57DSNxA7H",
  "key22": "3RPMy7hvr7ZAWmqUXxf4xuP5K8rkMJfwmSZrbmAk4oLTzEH1iqkDzrAA7YDHH7kAhCRhFSiPzprk4kgraefqGGy5",
  "key23": "yPMMxmpWBEspGS3fVmYagRsHzf6rcg1D1CHDzfASFiUvKVmaNTNDhn6wSWYf4r2nd425117FWaukmFZrnvgkRkw",
  "key24": "rgFg24V3CahcP7NezrttSqyE16ijTXLHFotdR4VyADiNvAriDEeko34tBjtyz2CNBgSkJVWgZqA3g1uk7C7BpsH",
  "key25": "4rjeecQqWuvJJ4ctMVKETgbqtewWxYHvYK7fY7AHpcoRJfn7UY4cKFKk8qxPoCCVW9ukzfkPrsLKPGgSMmdPpgLH",
  "key26": "ZFrmQrRN3NuFrdNFpDYqGx4jyuuwchgBDnJaUR7zP3MyYTr7o2d147UcTLHJ3wz3KmwE16iJVTKzK4M3auaRFRD",
  "key27": "2XNuLXaUSiNzwNLNChUC3v1yZ4izbzkyWPtdRqnds2jHmdJmDubR9YFmRtUDX7rUUDQ8oxrWPjRo1D3wAeYHFc4a",
  "key28": "44XHv81cdveW1eNEJC6of8NvCMKUxWCHyyx1VJgkbFJ4TambJTQU14hkaiL6buMynV9GiZETrX9FhS6eUpeXbwYE",
  "key29": "3Xu6qwCjXPwiBW8t1bAJ6uCYAUMHSv6wmZU9BUjRtBxVTfv5vuiARVzHqe7QtpbkWVEQYoqXsC6mAN8EwJVFRCHw",
  "key30": "36UpCF7ELJPD7ZQ5qxJp3ogM96kTeTNmcpcN38fuqZDqzk2a3hzSiZhrnBZEa9c5VhYcNZTcrkZYv2K8DnuM2yHb",
  "key31": "5DuTCdEstSJKMpXxf8NRfbiNe63kJqA7dCLscxvxA1YCZqVfuV3wfHxKmSvwpdwqS71yppJ8HY8AFzhxUT3Gb3FN",
  "key32": "4WAnbmAfov5aERbAzB32AHF72d2wmv1SwvccHa2tDFBKpy2ujabVQJ3WZJ8vSx2YKBeZPkYC8Hu34KHKSV18JRoZ",
  "key33": "4xkpPKGXbatVzeXBKJAXzNED8uaMTyUK28J7uhMy9oCjP7DRTqbYKMqSXNHfsHfrZw95RT6JVbhYf3h2X422u45K",
  "key34": "G7hxSbMap7H8ZppPADrzjbtswfEiR7fzXFLumYhauTTLe88qD8L32iTTkqbd9PmS8tBXVEntUM22SwfXSi4LsZ8",
  "key35": "3j6ttxnrAMcE4fsZLujzAfK39uXn4b9pPWChvn8mbhi37wecBuWFTMPPp8RJVA7iX26jxxmcx9b7A1wpX5QsGHWa",
  "key36": "4HLGAw9Yjir1p1Hx4EoPXBKw5XTaxrtTzxFQ2sLLyy4wfKaWZctbKxbYCgF537heJDzxJ6ZMbvwFATFFjnQ6bkeq",
  "key37": "QBvz4v2zqZAuabHXpZnn9C6gRLYSpoCKpts7xe5Xtmt3XPjQCDVuZEgoJnkWqbQ7uwC91eGMa6yQyySL4sqe5vS",
  "key38": "2y6nXc8C4puZd8eF7LcqNfxVeV67ppauSJAqUB6NNctciewUNRrUbyvnyC79TMi6jbCqkzasb2XeqGP5EWWY3HPt",
  "key39": "4Qmsr33BJDjfaj7bZNY1D9NMxN7pa3SmUDhu33BoHbeg7gVPFgQhpSZ5qs7ZcXLgVib88DruhdfErHNXwKgvfcyD",
  "key40": "245wTQtLNGFebATciMiFRMe2U9yjBCrfLW2dANmvjCDwA3amN81mXRNnR1LbNxZAJQKqFZ9RGXRYesULc5AFM9mS",
  "key41": "3vxspTA9KwjbW3LubgaDk3o6c5sCwzyr3PfQjkm4msH1w5g2NJaErR7mnLF1eZT7qhFYFAKc4ysTRSF3TXzds2Kp",
  "key42": "2uYd1SeMwJQhdWT48THwg8vLf3p16Ez98o3M11szAByNWfutBYkXefzsQUMSGqWNtn9DUEr3xQJs769RBqm9R5E2",
  "key43": "5d8aezoJt5Hbf9b2HWM4AMubJXixaEeL5L5ScfTqLWGKxNDAx2WsjhAneMJXnymPkPNQgCAACKHDUWJ8LPJFkH99",
  "key44": "66V4iuwfwepeNbMmmvCmH6xecufArJBRC5JJoF8Eg7mDYzxZg9bYf9QB86ww86b2pqo1dk48fidmbEsefctb1mUP",
  "key45": "3i4gqwD5dLXRtvwLTheaXDS3581ukoVQv2v9YHe35kgJmH8PPY74Mgc2tdigaPf8WmktNbzo4Nf4d1Nkix5ofY7B"
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
