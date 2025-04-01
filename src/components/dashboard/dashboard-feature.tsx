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
    "3r4cVB2UGUDYNNz7JsTYPFdthRzDBadN736puZa1rUny2Cqo4z74cKFGCHBbryzHfv5YRaDku7CCJHzfCWLR7Aow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54UptqpHUsmd4qdasqs98UckcMPUQo3dpJZ2ACRDp5NwyexYRT37p29NZ2j57JXpLYaQm2keo2211E3cw8chWt7D",
  "key1": "F7QkuGxzMbGz3aRxFmYfM1LZxF7x1NwtoxRV3pX7FF7QBUwszPMUvHyrCzGojcakv59ASRSCNgy2J6V25msmnSE",
  "key2": "2ejn4tkXxettCGTzN792RAd5VKmyiuQMeu1BjLKsnATKkQWKmH4AEz7AVDcJbvZFBTTBeJ18AbGA7s2TbTVexGjX",
  "key3": "5ihRyvExBZtUa3LP9XdAfH5V3U6sxqShNMLGQKyoXUT2bXszbKataav3vh9pxsJyzQJhTd6CBgqxXA6gf1YqsiL3",
  "key4": "xd7VYSJQaNkMZcUSJcs8Jn4Vxuf82iQoztqeiLyyqZg8teEa8NS8WHR317crkNSjBK4hnAPsdmJy6wE4TrHDKJD",
  "key5": "5nkQYLTrPj7spJedM2axpyhW75ictZX3cezWtuP6cjJDv1Suijc3dWxDXzhZSoFU9jHa7X5Zx1TU9j5TmWNwLA8B",
  "key6": "4gczcAhq1zLk7UnXRCdXy6WQGNH8gr3Fm5VDaSYW9UB6SdhiyJ4PmGSatvMxcwdwQGf4ZPx7B88Be1bLtmdNdDNw",
  "key7": "3LKtHpFE5omdqy3UvmSetKb3aqn1U5WhT4nYvScqRhn1JP7zaQ1V11NL91vvWijXbNhWP35h29WaEPT28jjdLVgY",
  "key8": "4rV9zfsWk9eEuR7dfq39EXiyi64CqSKc4AxxtJhTZiPMTwakNi19bXrctTL8xoK7TNePwfJCQJfFyHxMPZ4KeCj6",
  "key9": "5gLCeCxfeLqGMmq6pe5BLFDr2uxfrxUVevdwQAhkudBWaYjvprWVEB6ar7PEvC9QUo21CKdxWWwAbAhHmgYfozxx",
  "key10": "PeHqdWTw4Kz3z9ptU7NwdfW2osYYS6bSqcz4b7ckkbHp9QBQ6ebZ5aoowDVj34hbLXNFEgZcdM2WeGfEfxdybLh",
  "key11": "56ySrkjPPEWwk3nvrLUHqezrpT5oxSjzCwgF3goik9XiLV9wsJW5nwfggyFyWVkH5RprYRmgonB3qVUbFPzZzrc2",
  "key12": "5abyBjDngrZ1u1YRALpyW6Asx3HV2nzehEYmwsWZVmsSLmvzHo3oKJdazGZ92nB2z2UNq3SC3hbji3d9cVazQQe4",
  "key13": "SJipHkyPswDnxbgpKUsyZaHs9CZYfoat8r7zxuTbFtqfHdSGEHEGHeggq5DaGk5WJQrbChJScz5CbEPMFJEKptu",
  "key14": "5Kf7hvRTqnQnHWqdpgGhMtkFLoJkieRV251sS6yK4gFnRhantGMsvzxZuNSit2KNkaTYzrk7Aj7YikQw7cwEtDeU",
  "key15": "4RTPfGvWYRmCFBKEmwwRTGAUnF536a9fE2Cp4vdPrbEcEFwemZGPAmRnpVoGvqtAmkCcrYCDdJ6tzvn68Crqhy3R",
  "key16": "3Lo2dbLF4EpeUF7getRLfP3tnwsYgNZaTfW9BqGaFufFBkb1DzDqtg4meooZ4exJaR9poeg529Yfs9duXKUDCcDZ",
  "key17": "4BCQjVZHqn799u6goS4sESigMQnyExT6jv8S5shZ4GuHqASxP476aTyiwtBhAPhp5H3f7HLvmJUCUaF2pTKEz1fw",
  "key18": "3aFvVa2AyBRghAdQ5Jw5Br1uS4m13J45cPaQ2soZk9D1eW6oQLJDM19eSt29rsfG6BDBpymmh1LtsUVYCCa6qXbD",
  "key19": "5BkiKg9R4qjuyrGyKvN7AWeoLr574eHjc3nKdXkC5fctnU6BsBULaWjvHXMxHaQRLZKxJGuPssqZByqBh3fWwRzh",
  "key20": "3xeHU5wxZwBZdanEfJi6KT7VnffhF3LF2Q6hXKkXdty84euxPvg6izK7Rwzmr9adQabX8bURyMRbZuPe9Mpe4R8C",
  "key21": "3bnAxvbt8aPeuatp4twNyZ1La6YHGEFoNVN9zUuQmTmHuw8sEC4LKL2tLQdpyo24f2Y6DhMx9x92EFGkA3Yd978a",
  "key22": "2DPmbLTbVBsptGyQxD421iCt9gNLNyn4BVjkG3N3n4MZ46Nk8MgF1B8q2wU364Hat7u14PMYemJjGksDkQdRTKqp",
  "key23": "4tUtYmcvV81PTPtryXULAWazhXkMrfzvWoaWH2ojV3J2p795jXM9jExYXaBKC4pWAvGgub8FpLu391UWYfrucjeg",
  "key24": "371orCkZmdmjcrxTUmbCSCgVdcQkxA5CvswwKSVEYkq1AwDmAnFtHvu5FQQeg5716LRkVsT1N1fhwAHxyMJoU5H",
  "key25": "YVG2uwbb85m34rGppwsUVTtavTvdwQ1jwApRR2qV2UQWmUy8vry9Gc53j7Pb4cGquVNtq7Spmz4tUri6tXYMxFq",
  "key26": "4b5c8xC9XrYTQaPKKHhkxFEp5XUyiUAxqjA6nzezD6hFy7iGNdmrsueT9G5Kr6fcfinpXty96uCVFs9DtuaLAKmh",
  "key27": "3j3Pwk6QPzcSbbU8AUJ2qqeaeLMzw9NSf223s4qZ3dRXZxDHpDB7ybpMUkN6KtdGHqi6AmLpDBt9z6Un2j6n3r4D",
  "key28": "H3NuLzB9XptSexUS3arNqP3LvSSraVWA2HSp5uoffDyP61A3Y6112XeTT6uHTZwxAuWK2S7PkCKWqPPEKptHQDq",
  "key29": "3FvWvnRZEPnkoLPQXjz2hffFrfbwWL4b8zA5Rvg8xuRWMutVxVcm3aqokXa4S8RdmJmSSwQnBDozkpcUikEJyGFf",
  "key30": "32YYgB5ttudU7ZZ1twriNpXejdyJ3fYcXf7dZ7z8hMCoPhdXiPoV4SHV4gV4EqxmMoF4h4cxohrUxvY8wexWB6pB",
  "key31": "ZChwrGotkKzdwJxzhQLaGrvJdm3gttLnF4t7VQiNwMecPcFF6knrg7FNobd1a2vaAbufJS4UijkFMp2eSPWY8pV",
  "key32": "5UsoJbHrLb2nBHvDdx58a13KDiRwTUVJ9V1ZaunwRcwZZM31Ar9efDdED7YGchVdWXUp8YdK7RZiqL1MreYnfQnr",
  "key33": "5gDvUVFk7g7HayviYouSwLHWrLKWXxN9qJWtWG6gqw7rojmPKsShqVbDSqi5X1LKsYnqdgS5WhhpxPf5GhC3V4Mj",
  "key34": "3fupKeJKQKULETtkjcpCrCz28GD5vGJoRXmAwRz115xRJmyeeBB6wLiUd7nE1EF4bDyqHRCAssYEjnKYSTPjo4Rk",
  "key35": "zDURuhobDuRd7BEbFoNiGSKEsQh3DFKueiMCBAt3nwRELhGuVKHgPMMMCZQZqWDnwhYas91pnNrzXd7iNVZGScc",
  "key36": "3mz2xcJ3RuLq26g7ESMoqZNwDHWwdWqggaViL3NiEd4XUb79Jb7fQZwjkRWCRSNZjBnFcRneUSgXaLWfitgXQoPQ",
  "key37": "2u8RFLqU84Q1mTrM527JU3RyREJdUFYx3Bm3fZraZBFZd1gQy4MWJMPtsWzowZCxQKvRUzKBicix6hs7KbQC5xS1",
  "key38": "5puTkJeH2gAyE1PSNSCydDX73Ku5TmVF3a5YG5GS4pz6rM8EBvu1qzxij8PLyZ2RnJzrfbQkrVytBAiuPfVvcu8p",
  "key39": "3Pd4hRDNKahLhSVptF9UcLVEhyWrAV1eL7ysZ8x1okZLCZ56RQP9KbV82yVxLVEye5LCjwABfJd4UygYfxkR5HnD",
  "key40": "5JsiKeCngtZFwxFVwAvDy9LZnhANKnDJr4RGm6zmsWGskNZbfS1F1eeg5VFmrWWDZ8scf9r8emCisufp2fAypn1A",
  "key41": "4eUtFcvt2xqcn2sYUDzjgUQAqtmhkg1ZomLcfR3XThKYmmui7RwqPmitKiQakyeFDdN761DKffSJSY3ctkwqFTXU",
  "key42": "df6hYWLpC9fC5pq22nNJa9ZkziZNp5jjin1BJn4cZV5trUXhwu4ed2E5dWzaTnCXkqLVPNTNF9Jkzd1Z9XdoEet"
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
