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
    "4cugFgzCNCE3PPJVQqmbJPWubdqaxaNQD3n5JRhNNKumu7cvwudnSkAoyeWuD1WWSLdVHJBLS4aA5PQDGFL5tnpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fuZTpCmXnsw3mvzgBqMfhbHM45hcC8FZLsUAfQw1uEq1bqTVZPQu6WzpHZzaNGska2AjAyEfJFAE6Ti2jktYHqP",
  "key1": "4bwji9t4gArNBAheUHTZtNTMZDMTHY7Mtq5oQ8BtGw91xSbwQLWUJ4xgwrErMnf8msaGiXUiPeUW4m9QhSSvthei",
  "key2": "HjVvueg1GVFAxdux8d3t82rEEXLEHcpi5MVJAd4P9TYxgTtrBspunAASdHeznmENRxmWbawcSBLfERhJ4sib5Xz",
  "key3": "3D5PcWWuuya1gZrFBf2SUPkQPDjHybYQ28YA32KkuSH3ZJdiskJ4Q6H7pd7VRD1hhJTU48mVeL4DuYBa6f8SjHMC",
  "key4": "HbJQ3UZveCEA5C4bytsr98Br9iqQ8MWYCZEazfSA9dH3QVWvqyFrEJLqHpXG3woFJwFHfWhM6xNzpDnFRuZv791",
  "key5": "sKxt7QbyNh1apC1deXHvxAmBDsoTTXspwNrHHyMjBPVdQdZSfc1uQW1LXeTnCgEzeaZo1hEcXpocyjDjMmXDtmf",
  "key6": "5wuaNy4bfZcokADoRkJHU7n1Q9vxSxEgxVCStPZEGfdKUNGBUPMeSDrNjhCiWD5KQ3Sf2VhB8wvW66KFJ4ejuDv6",
  "key7": "4gHKYavX2ZpqXgVMxxsyzvhH4JyzVV8FmoaxbVSiqZSsysQjBseykjMYQvL26k9C76AyyjZYVYRB5SvBYnJwWGrq",
  "key8": "4DBMdkydbGYb6Fa5C62g26MG51fnp7xFWiRTqaPpo8VHU2W8bTLaP9YK2inC58urgtSej7yVWZG6rySmb9PJRTDV",
  "key9": "5c7mafxGRtuyorRRUP5GRAJHy4XSSbR5uS9sxQmLuspj7gR1qxxhPuizLQxdz2drThbqozTFRWW7WpD23U66RAXd",
  "key10": "4tFMZi3yKSXwgJjhH2tdJaUUpqupbaTB41PqNcAVvdu64AcUrxw4RZEkFC2ZdK1DaWPxhDrrccfY5Kqu7gpwP3j9",
  "key11": "2iwkBC5dyjz6PmTmfkiQgrbah5TEjht6C6rp1YKLbya2coqHSk1EYTmLSapXN6utCRQgs6jxpsnhg5nqiPJXnmps",
  "key12": "zd1ANr1iHFpuxu6DX2hkRzxfSQubHszL6ngMTfR1hU1VwACLdWf6q3QYVV247J1dMg7RpVWKQja6FvcSrmHMbFT",
  "key13": "22ByyZZtzpaXeWeBhSy5VZuL2sh3ZKiAVXFDWhgFXJz71isjiRCkgN1QMmf8g3cXtPEfFVYrCjYXMV3oQcToyPZT",
  "key14": "qZmEjhZP2j6gGXP8wAndWqRx3FJe3gtjffkG3SKP5sfhLCTUyWXtTLtv9jjDqsTeYjReueiy7wQAiemhq5GWEac",
  "key15": "4Wjps1Mv4exV28kzU24prra4NbBdTredkqvP5NPP5oha2kq159WUN2zLHnom75zR8NF4mEUrRPDc6NAXy1SXqTTf",
  "key16": "3bvLzMG1TBh7Zoy3Jzs4VGTv9a1Hvy2chqgNaMGLSLBKNbcLdw98JuyofPbKd4Uv5hpSC7yFrXtBeAp4Dh91aAKm",
  "key17": "2o1qwU9dqDkZx3upysSRSKosB29Nau1pdvBFAVRid5NHVaULzFTxjZQCiwv9dJExPsApwN7kZq3u8aU2SyHnfFQU",
  "key18": "3LHMFfCEW1GcFSuKbnfTutFaBzyPJJ8pdhLHwMx32uPmuQUFZMk4wgwzoJwp8EhvL8G8WkKMhHUVpczPd6PJ4dsk",
  "key19": "ACMVhx4hfetwBcWjjmaTuZZveR6UDNuQhnj2iChEnF36xNePBYvnFy5DX3RMiDD2Uazc5CQF5zFEV1gRxjsHtWL",
  "key20": "2djrYzeC4ekHy87vG38ZQsKJdd126PYZBtRrEaqegwa2RS53cTSvPg8EHpYUyx6nYmfsjfdfZso3mp2jTMh3KYaD",
  "key21": "2oCthVNaQrnK8ELvuMz3YofXt189fZebFDf2Xh1aVCeQf31y7uFC8np7NZNuzXeREsR6ncXiZCUQ7nZtDQD1JNu5",
  "key22": "3UbvpMPAddvRWkm4JkFnvL7M1WbbqZuXsEcQWTe5RJCq5ojseqXu5oKnhJ5cQrbLZAyMkq1NimxAt7gmy7H7SGvc",
  "key23": "39cbhqaxdWg2KaGCbgCKo9Uign7w3ed3uihRbHDzaBaR1xcFebat8cZKmSpgXq6WwtcmwEyxkqLJkrKi3hzQrpHQ",
  "key24": "2fAPm78W3tvWYXLkQrQWCMo21yFa9gbzae1KJmQh3joBf9anwzTLe6B71mCrcDUbPT7sstdz6GGfueQHUcMHybu1",
  "key25": "3bjbmDW1ZTtc2tVknngcW4pSt8TeVDi7xLgwqjmuFqE46CBeX3mqbPTHVVqxg4QsT434PqzFPdverqyRwbeFx8kq",
  "key26": "2DMAexRcYCQAPWg3ZoWVxj26sm1voDPTsFr54VjYYZWfhwjXL15qQ4JdXt8nxAUYmonPeWrrLenV4zpPwJwF3Lm9",
  "key27": "Pzp85kTjpyUG4WHU7NZprmzRJa6KYSseR48QpCyC8jjwh2YBZmyFS6gXVjEcXn2jpN4PH3CnaPk3BaJ6wwJFCgi",
  "key28": "48ry51b8EWQmFK37NSZa3kH7518JK2rwaNefyG1S7gZPajeoA9w636xgLxanWQMzmzHwVAwLBJS4PviCSVMaSMeh",
  "key29": "5bfZNJq1CYW8JeXb1bxJNaDoeJ7DrNGzgDNc4fTuEaTMYqt3judUYgkubUVNvkQEpQzaYss8DHgsEhPSn3DRDVWA",
  "key30": "31iHyvhf16Ax6k8bpz3SzfDeP5LLZ7wdsVrKP9B5BxEbscXNXzvW3CDB74GaNbc7BWZS1zHqBARSH31BfsC4wpie",
  "key31": "2dYYJaoBE9w3EwjJo6s4HZ8w5HfgvhQCcUAJZKnVqvEsxS48dE913DJtBdHsdMAJ8nh66nnRVfQBusy99DY5VLJq",
  "key32": "CCbSqswugCZ9KDUfeJrxCs44bCG2CgED4arcqRawQyAP3EmEwAAy5h455hJUASM9n6MPVTcUjNGTrFFFBqzdCRf",
  "key33": "5jDkhyEuqhUfpQzviJbjxqsBEa7wVn5TTZwDYTUW6RyUNtD2knawBRNGTkKzVWiQ29KEgRAztovDtMRD95Anc9Lp",
  "key34": "43AozAQjjeUhiT58PdDiirsuWnYZeTcmCAs93ozXxrksVRQkgEYLjoEhEMLgsi3gYHASqtTPuRyxuxQ5Y5tN28DV",
  "key35": "5Z7M4CAWRr1QfUHxMDnEpM8sXMMERBEBku5gH5fjSj7CzfKLiiG3ocQJodCBbcSXF1bpMCwH4h5xSUaiCpy9zEnt",
  "key36": "4dBUwezWfnscFL4CUYaLnVvsagTfVqjUQLxW7nq5UtNqoUP2SSa8jxHBDcMWtK55x9G1q8LVWWpu9TCeDqRfa4Jg"
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
