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
    "4vd6DDUgG4qqLq29ocTawqSRNzomjgD2vHaMmmgaRRejE8kQwd3PH93ehUEvQyJFV522nvf17nqhJhTsvk8DjhWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36KRVWbBUm1qjx4K8VpJjkMxJGrcgJ4mvZvpK5QZCxxDw95B7aGyXqCvtL1H112ki6HgrKPZuXPrNiesXHmo36w6",
  "key1": "3sV9fEUDAo5pszedwqmgyw2Tt2kEgbahT8fnFYcfZKe5bN4Va9F9EAEHVgCTsJr3EzB8ZFBrtNvwTehag3ceyyES",
  "key2": "2rTaNgLy496mt91sA7BYn4Mw7Epyr7GoXE8vM4qctNVbvywdBJaPetwi4C3UBBH5CFzsrfhfvHxvWvGJyzQbEMbP",
  "key3": "wf9MoL3L4XDmD5JBctwRcwNLbkN9FAmz2FD7PtMNbT3Vpkqb4JoPcdH1CEa7kUhr6AZcTe1zL8NdhUuq9eRoabM",
  "key4": "4rGNsUSWzr99Q6FcsMuu8iF6r1QgQ2KazJhdMP7dbGicovtuKnwTVfniyEgoVMAMnJF3CMbSBMgipBzbdLdR9Rc5",
  "key5": "63Ly67vuDW9nkRPqLccrcS9Q7kGrQY7cyLXruH9YoHYoP7MBEmT8L2xS2iGoAAGHkb8rHK6DUM4KQbEmDjAPggyd",
  "key6": "5wDqJUPbRGMVP84Z3bQZTY47n24ti5vg2cWSv184sbD188j5Bh3miKwqt3pGCQPjGAkjTP7phoKtKt5dgBt9cbME",
  "key7": "4AKobDV2aFqCMaZkHvRkuXNhNY2trCAHE9D9EE8piYyaEX5eeuDuKunusuy7siHXGE1x23XceKC8Fv5aPc2nsFMo",
  "key8": "321Kwm3tLACs6SQ62Q76Ae5egdS3PbX3KdNityrAXQgSgeGchzqfvLrwiHbm64oq5DZqByBeGzrX5dYAFqHudRUz",
  "key9": "33q1q85PJkNbbymu2ZpdfSbpYy7f2rPUnD7SHd7NXCkZ7HNyvKzD6hvaFBdoUvQ2d5wsw7mFoUBej6PNc6m5QJyM",
  "key10": "33bXw6pkxhXFre47durpowXocK6QqQCjJzp3ZfUr2P88wQ6yMsvaoQEBZLB75BhuWqKuW8oAvmCyofD83UeSe3Y9",
  "key11": "22cyVsuRWqhrmxsAMpKxfvXoQ7qVpdxE4LFZsxjWMqavePWQTy1qPmQwExb2Wmhum6qG1xsZqCKthBgzjCy3rv5u",
  "key12": "4YTxh94wHaozpZpWyK6RnCBZovwNC5F4jxu4PE1KdupF646TmiMrgyZ7cVBKSbJVERothXqDFMELep7NWyjcpqBm",
  "key13": "3fRaHqTLwHp33nurjjNLZLkTzRhA1QP6FhnhiTAgocT6zEkdYBaMVSpjUGt7y8WctwfkS3GtUA4m4H371Vyh8dZP",
  "key14": "3aH6wgcrAf1fjycuTyK3AwmHwxjjRe85CiYoAp3GLU6YR5CTXAk2id3tES5HjUYxruCkAFhisTdLAXUoNuknVsWJ",
  "key15": "3d6mpJP1jHXdT9SLr1TZc2r5NZe3zWEVeQQYJ7Btw7VquffLocyL8Xvpc8VMQvmqqccimCRKXKmdNQxudLK8VSoh",
  "key16": "4ydVQi2PhY4JEhVcXYC5X2gDs6CEgY8Lg1cQmn4mGvcqR2yqeyTAqEAjGthGuqZNNBgDMuHXWyyEh6vXFRimHhak",
  "key17": "5pd8FJYy93EQG96TDz8tWL1dj95gTdmt7iC5zPiwWRx5fxvFkPZhBu62yMKU3tKnbujDzQCWaMcbn1hAm7JyKsq7",
  "key18": "Rn3JexJao9j7cGfFnuaERzmpiTYp93fme7NzXe9demNH7jNGYBnTnbHUoyFdY7LkJxZYv4QsJeYi7aTeeuXSX6j",
  "key19": "4fEfnWYdzCQbc24qnq1KVmgekqYi9q5T89PUwY1jjZDhD9gmcSXD3AMRqLtqPHBs5LbxBbrV7DPxUGi3YiN9kp6C",
  "key20": "52Ms2c4uxkPKGPHiARPDzoszm6yYUNgboKjX1VKbTBFYTVFoq5Fuq4edvR67ZiDcvSZkokpsdrKJHKZRwEg4fe1N",
  "key21": "1SR2CAiytBv9faFZTJV1kvogXcv5ViAusSzhQDuyQpWAzpBwnPjKJPifJ2FEbCt3m3vEHe6uBE5Z8qjc7XSs8Pw",
  "key22": "2aMzUa7LsjEX2gowdoZoDUWjYqRvg67fJySMPYTGNbsBbfJokeqBSJDC1csP9KyMHbwrtMr8qWuVrCzpR9WUJuu",
  "key23": "efJ4NWwzgKWShNu9hXGPb6LEUdf4vtUwiztAsbjLgjgRCFLCSAQ4s7D9ti2RjeM6C8v7f6PD3Kk3QMytaUPUaov",
  "key24": "54JoD7Csuc57qsf1dohtWs8ZQ2zwGXyZEK9hDUtc7dVnCDCPswEiHrJcutqyLjc4bwLTejv2EVEYgpPTVpy3FCPH",
  "key25": "3snaCNPMigNHfpjrqMLZYYs4yq453vG6opwmXoy1HwJhuCLTP1hBydfaiQDwW23QbQBqWnwujgUDFUt2rsEcmgbs",
  "key26": "2Kk7ci6RRnuoMbGNuYasmem4Tvqc4jtVo9x38843Sx4VQWNqT5emiWAxNXE4gcNh7AoXmtf8RJ8AcN71ZzwuzADm",
  "key27": "5f6GkUbdQT72LozpXkLUJsM1qdRE53y5gtoJqGQagb2gm2FxLHpPi3yEGEtcm35QHPwrgf1ZfB1mS3zkBmNkzxQN",
  "key28": "2pXBj9gbec8NkLsqQfQ7xcZacuc5h6mz39n87E2P3CKfoCAzP1EdD1reLShKpTDHYqKVZCzTbeRENmKb1Vsco9nZ",
  "key29": "61cR5UMNjVBxm8uv1fTL322vsrcUWQQC32ZHJzMFKupxcn9Rgixi9qx1ggXfesrv5He2nGga3a6R1jsJv2uRNGwy",
  "key30": "4P5vqEHiSmYam1o6syTq6j6L1BQ2zHo2iKbkroJHK6SjSLGgNwdhLUcyLA1mXozRmHmTKjW2LfmNNtxWHiqbLTvs",
  "key31": "4qj6SfZPS9eaEWGZgkRvdoXkTunJmMAw3VD33zweqwjYNG6385eLcuiqTz3chz5dmWY8vfTsUyuhYMaCv25jRJyv",
  "key32": "4rhAZFqLqTwbH2fw1fErm5DBBzAmeX8zoUhRKyShrSUJ9986PNGZFJne4sU1DZ93LnSkAnh8FnSjGSJd1p82Derv",
  "key33": "3CFf6Nc3SUXtT6WshCnqBcuustXDU9vDSGKBxE2xyrZwGoJYRmF3AhYLXGgAEv264pBwbRcve7YRF7zooivudsWm",
  "key34": "2sMEHHJKmwWjtLUzaAoTppqEHgzgjGC2vPDaqsE7kL6Tw6Pw6mcFiWHkbMXW9uMfuBUFXCrg8Du2uXy8ak6RFN3y",
  "key35": "6xYVinSMnL3ukNyye728WCDjzYRKZafMd35AArHcZ8SwWDjtsZpiWUdySuqK7zMqfinJn2ENQcwVnw8eibrCtuH",
  "key36": "244VE4doixW9kfZ93RJuLywkGe5BBY6XUR6aJDRJgZ65wjwN4as3nkGQWNsJ6VMwGfqDqvaYfpQvNRubrqGsRkuw",
  "key37": "4VEX5t28kjCxC6RUwpaabTtRu1KyJQahxLkktiXqHyrSV8eDr7JkbUFqN6GJ4wiu41yrG8VAvi7hzJm9ToHes9RR",
  "key38": "3rCQxgq4WqKi3aasyXQsgMF7hemYZ9pyNVBjndJcUzvfUyyAfqH1UEi4BwZGQHkUy3EEsaqUacZSbLSxW5CUFcqr",
  "key39": "4Ms6tmzZ5au39miQM6AwMfZM2zJW5Pb52HpFjrk88nPC8A9D2uDU3d5qhCyqMuexGquSpUmAjk25B3CQ6N1jvfU9",
  "key40": "61BZroGDJNMKKGRhPFqMFSUiHDnoLrQ1uiQE7S7XHBSeM4a53SgjkDhSvspatJCJ14RjtyG2q6TLzBwZD8wHG1RS",
  "key41": "5X4TJqXQWkhJnQ1EsTz4kQDfEM4qFszXcmgg7fdHXNH53Wn8GE8cXS9yub95qXttkngM3f5PYpUGFtfqW1bLcD1E"
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
