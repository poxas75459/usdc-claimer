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
    "5VB5NKkqWVSrkhAivEarT1v6Hsh3iH4aQ4TDQvzThmtp1woLVWFT2rrgTmuZgTBCpbNMT5CkSvQiz9RZ3rUUtxQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mgdoh9cgCuy4X8MsmNDUFJrJQ94mxpGzZNbvoHfJ45dfLqrqHDkGNtGymbeQXEuVu4r3gWGzps2RGD7EfL664bR",
  "key1": "3J8pmwCyQ8eUyeXoDZ53xPaFh1naCdKV8Jdg2SxYEJVwDJeTyypdVckgVQ5aFECzWg8iKdxHi3SY48HLg6XqJ4AL",
  "key2": "3r3HKgzZbX13YEQ7qQxeSPeDTuRL7Gs8JB5qZmk7jyYackGfMDTBcwhtzsGJehPDYiRuuVUrGNfbHWEjDmJ5Q5yo",
  "key3": "4d7oDVMhbx7hM6wPNTPwZf3gZREeDVDmFNKcV57yXxr3XknzZcDejRtiSjE9jnEKh5RGjbJGxP4HQr8GsNRRDtqs",
  "key4": "4kK9JrK1xgEQmJhPF3fZJw8rUxBQ6DDenkF99n4Xk9SdMFqGQaNVGZDGeGe3mieQkr5Ugnjz1phoR5yk1B1FRYPF",
  "key5": "3XEphmBcxeV9gpRXkEN6NHQdtnLfGK6YMJAqsQWrAiz1ArLMGuQVVzvgfDW1hRC2YZm4ckBYSPt3TE5iq3DBcrC2",
  "key6": "5LDDA2W2uoB5vYaZcsjcPsDG8f8Gtce7hMzMpucsrgGCpFTb3UZk6bxeKfmuM3rqdxdBfCghEVpPBVoVaTHggV4Y",
  "key7": "2rhUj6AGLMBEbtky1q4dqHKjM5wnv3Y3EYxkbhYKpurbYGRybFTtFNcc8a9g6y8DzqDS2nZuWUeWLoidqtw8EMvw",
  "key8": "AvRaqfS2tMDJj9CRqMXn9VUy57SywGYMHpu4EfPcKajQqTygMxxuwCijQ4VzF3V4ZHpim6UDjVYvbKXtTXcfxP6",
  "key9": "2w8dR7iabwpiM8xKiimeXsMhLyMGxKdVNWqHVti8zmWdwhKr2gKUrv9nUqH5skGSNqLpBrUDyuegqFeMNyBLP6Uj",
  "key10": "2rWWLDn2pqBhP5oA2cMh9LaUKHT9DmLJjsFXWJhcQg1SY8tkHdUU6qbmLUSc5JUtgEUMGyKWvD9xcY83yi8GDKB6",
  "key11": "36Y3pYLquDnKGbXM6jVecp256FmbZm4GDeCUd7v4uYq9tYKzT4yBBhypdprsfA3P9Ji9mJgtkCrp8g6juE7y3fcC",
  "key12": "JZ2YEjZQsLKx5Uem9JVcGrAZp2S3S9vqmepgGhGa6ecKC2WY9ceTBwkg241XGymBvCuS8unXsnRj8CTfS12A4Mg",
  "key13": "4McR1RXAtmK2dju34YN3hj7wfEE1Z2XwNn8Bi3FtTqrfNZ1DKUqw1gsH8drirSJbADrsyAdCF8MZzz36G1v7E1JG",
  "key14": "5xJeeLzn4nEPjLCvJh19RdcDBZ2uRrX2iru4XoG6cHW43DmSqhphWETaLhsfPBLC76Em8pKxZCk9zNRYeKFWGDkc",
  "key15": "UxGy3dAst3LcBqfUk8jRHmh58XbmDi8kWdpGi9iAKaTSdRT9HQWbg5Ym6vba4b95oegicXLnse3TdMYfWsoDGrQ",
  "key16": "2hZG6eJmNi6rnwDQu7Zp84y7WfVERTrY8naRc97d5N6Dg6ntLY1QFLAJadjd3RPsacpt1Mg4VxWBVqGTfA9RLTbJ",
  "key17": "2v9GhuHcqQVnRaKny3V1vuCy6xcZK9ebVi7PWwKNY9xKNd7yV4B3megfujJDhqb1rYJrHHxKt4SbqpTwPSFnT98Q",
  "key18": "2mGC6HmnUJ1HgiqvgcCzL1FWmTAzngbLcZ3a2yzv2p1cTuhv1yQHTrYc9SxCLcnaH4SjDCpDCQadHPBWoRL39pNe",
  "key19": "3hfDu9BvabpkqLdzYNE8nvCGrHHBrhyDp7wbYGZR6dxhVZtj6YP7UNPsWprQkn8B19aYhUHLoxEXkGrfuuKSwKrd",
  "key20": "2TJo3xjA1hoY7HYpwhdLjjznSWGJ1NcPPHEkFaExAiNsWZBu6UeNi83wKfHxd71zv7yBtgeYdyLD3b14Nngoi2u4",
  "key21": "43wQnogG6iBCWvZHPzQREEc7SxGCtALNdebKHrwMcJ4QACZXJybECoHgnfAtn1BYDTMV7hZx63GHnKpUS1D1bSvX",
  "key22": "33Vo7PpEJ3H8DpKgpdvMPjBn4gXiUHA2ff4hiex6sVdUNUFPqznqL1hMrMo9ui7Q7nJNjLagvZzXD33yiLZDqb1i",
  "key23": "2Vd5YhFSQ8N5QUEixjqGkaEaPAR6KghAwDGYhgnVQxrXDqUrLga4CPMHSmmvrtgQrzRYUa3oxg6k4vwBCRSPVXFV",
  "key24": "MpbTMFQgE11vpn7pPK2eh1pBWxmok5haxdSvexpXGu9HzJUerhXvpk4PjrUFYxER4ALexkjfHAjABM3Wsf3ho8k",
  "key25": "2oFVQiaucx9AX4mMwrtUqLeHbERcmycdrfYGUoHHLvrd9L9HfBCbEtChJmk2WARpsxRg1CTdHE8XauddMXtKPztc",
  "key26": "3c6696eLB4p4ncyCHNm6DX7wjwU5zx6gkxi5nrWMPCcSW1JYrSHzZytzZq3J5kbH6kpJHuHNMhdfLkuTpd9NVJbK",
  "key27": "5etv2DDcTzXvKHfT8BmcdC83wVS3xXVahDe1EwyPK89aikAvhYyKLX1QKCfJ4B3pbRKvYdmyB7nZiPX9rwVu24qv",
  "key28": "62CJqwmoUimLK4U4NcD8HNsZbZoLckJcU1DkkATa5YXNN2LRavUKFpBkZsiQrWiYF7DKNjXJczXsNsApHVRjBakp",
  "key29": "Cnnj7ya3SCrU8sHwz19rjbrfW5NkqZzRNShpiTbyx9jhD91w1JZkcdiuHqYoW6z342aF6cDdzGZ37xZCSNmyndK"
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
