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
    "QHsPCSoXnqPSVbAqjkYn73tHi26EWQ89jXbRxt9J7LrtcawfvfbXnQUtJa8YJtMKzo2LVPDEtmS3Wh9uXvrjaSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nruiWnJFVemaM1uVzxvYsHwWrC366CwfqzBsdw9Z34SFHJEPf4RAoZFepV9Niu2kfmMy7B5fm3Y9i9BhTjHm2Yh",
  "key1": "3taTmLXrxK2VvXvG64hdQ3dwDT3kv2FCGjj3cwGoTMM7c3G6D96BhuAWk6dB6gtD2k1Kt2KtcMarWFzM2cWEZGLo",
  "key2": "zdbjaBwDrUMGgUfwjzwtSX7JpHMA6h376VZ3SSQo14JH6Gmyvfp4asBLaXwsNC8CraCGFK7n55WgDJDqMs1B3zp",
  "key3": "XWsNaBdhatRc99fCku6M7rdWy1rCjv3bBvazpNa9J9QfJoqSp4UdWNK8DM7RWYQ9XwtZc1TfcouJ1UzVJtshCeF",
  "key4": "uqbKY9K5KDuWt7PcfUzauWFnHTPCqYycjivYLptmCngWLZTy9jVnV1DHtHoSmmmNM1kTj3f7Aa7zzdEoHUd57pH",
  "key5": "4B3uaSUPgnmasSt54qi3vRBmkaivP8PPzHYNabJwnGaZUJiZMkxY3cTqj3ZCgXT8soc1o9VQZEkTfzqos55Voj5B",
  "key6": "4yu1RnkNkZt14LmBEtQaKqLGZe6JuxAXXEyyMh2fiWMS4jiQ7FE7RBexWYFaukwQqZYamE77MBYN1ofJtKMSnPJE",
  "key7": "57QWY2Y9UuiCAyRKAkdYaRzGa6KDFphh8WESZ8tUfsbi1gMdMhcJ7rDGunYQY2dp7U1aWzhVCpW3MN8r5MyS4Awy",
  "key8": "41Av9arpgfpT95neqbrR3Zoqn6hRfqyNiMhNJ1WTkSbtuYNBfnviZJ2JsRDywHPQHfxdTPNBHXcSiTpzaXQXXjQr",
  "key9": "4qPEV8ddEii7zrZxK16PDwTuUR7tQRVNTe3NNog8tkRH4arCoU79PBdFSa3KjSq2QpnMNp8enrGqiPhXUmkCuwYS",
  "key10": "51XmpWWnWXSADurrTiajU6RiJuHn5hhPDUG2Qvcz53JpDYf3BfodajigEuHXyPdaT7jSFsMHigjwhDXSL248kHrF",
  "key11": "4ezqaWTQC3TsYM9Gjsp6G7358aoDQ7X6xMkFrnUvUtv3zj78df6vP2TjVMzCCiHJq8C9VtkWS1pBs3NHMw6wSfg5",
  "key12": "3DY7SEyKFLmx5og21CqkBriVJc1QWAEJzB7fV6rTbJPtvfnsZzft9kZ9NqMdbDstjRjMWCoHg992JyKBrfQY57Ag",
  "key13": "5VAsSwu9dFgZgYwTGhNr7wkNkZo6buZ9pCKPMeiMkyCffUcPojAZ4dXkC1HxS27rzVmLLhXA1KBvEtVRBj1kNBUs",
  "key14": "4SqCCHcN5MuigMxiavVerE36K4yVkG6JCW5a7qf2RcpueiYdGX3GiYRxB7Ld8rSHAXTZDhsypHmZadhZW8VPJWFT",
  "key15": "48jV6nFxkN5jdBUtqGvL6PNbSCNby8tHR4CSS3sYbVQe1P6rZEJtTKRC4TgdRnYG1gMLZj7F9ZfCUsmXByAN7fCX",
  "key16": "4YUfvpZwhco2YQvRDm4vXrFhrDLSuu9sgdUJbzxHALYMpvKtFpJTvD5jFG5SJ7bfL3adrL6EVwQmENbj2zyEb223",
  "key17": "3q5ghMu5AicQeSUy6CYwVuk5SiQhWt69Uk9dRQR85ggjAENPX9xDGQ9KCq8dzraMVukBfkoyjYN7DvxVNuG4m24u",
  "key18": "hYGqZ8atQVzDB8US3P3d8e2FUzDpZxCLxPsvfuh38pspdKwSmw4oJDRnv7Lgm1S5Us4aNrpLw5yQXffZjpxoTf6",
  "key19": "51m5XckYzRtrnUZGYsUGPY9HsFMwh6JTyL2a1yNpNJ56D44U7W1D4D9PFHuLoZxMNbK9vESHC1KzpXeJ1nDSs7XQ",
  "key20": "6JNCCgANkjq6cdkChg79kzW4MuX9Pvj1LejbPr4gRzFAe1We3g2B6hjey9z9z9CWC3oo1dVxwGAtVkKiudffzu5",
  "key21": "zaaHxuhLNnAeKuKDctTWASfZuvrF6MMRwLSSK3qsWNpCVJUdPh38Wc2oGVdFi3QQNFSQxBz1RyvkiaHH7zqDg8D",
  "key22": "5rqM7S2duxMWeMf9hz1AZ12zmKCuhHMK1Z9oP6FUs14YhtvEkyeAsuW9STfMvp368LHhE2zTb8B3Q7ExvZfFS6TK",
  "key23": "3nzm5FeEHbdem19tAbpv2wuVZ9KQr8wzkA5TcQRuAEwwTKa9UdYcqRvwbdTByLcTLmcWWbK8CCMjSg8nngY8SbqS",
  "key24": "4mMgtcBtYT2P6eRWdddhd7HMFCDWLmv9gVxg4g2ZXF1BA1XbM8Md2eZkXCdLqjM19x5KCwUzyHdyTQeyVjai8sky",
  "key25": "2Y6BWSQUhcDJE3NZX4HUTazmdFEWgqVifY4Z6JwpVYqjFbvTGu9JETPueCCLssYQcCdBzSftKPXjALGySYKVAoA9",
  "key26": "3KtKSVRFmKwqZbtfxCYQ1qHtEZvdW3xoutmWXZa134ggKaKxJ8cvC7r3456j2LjcsBFZw6QHByNAwfdLrK5W9mWT",
  "key27": "CQGSPZFszZ3b5bPsoQS9rR5QjHYv3AceUSUBJLPC2uKRkqhu35NccmysgcwvTgsb4hv41TuprvP1xPYYJK6qAqN",
  "key28": "29h3pgYY6k76geNwHwWCgPSUTJXAucbQujYpN44pJ6iUyFMAtFwGmYXVMsYRUn4jWz4pXYEuic1rX8KbC7vnYNDL",
  "key29": "7nur9wYnYaU9NRs4uJL79RVL8y6P9a8vKwp1vQpRG9HzqWS4wHu8KhQBrxYHuWo6qGxdJiPStyMuPT2sL1XoX2m",
  "key30": "4S38iMkFWT3XHZTHcNR9zQoMvSN8RN5fFSzbxF2hf5KCjfpPfc6EuY9tNaXTMwLvtSFRGBPjoP2DEmhSD4om1ZLm",
  "key31": "2u7rfUTXt33nsoTApvUb3skDhPeavzPyWkEmq6Ye44VFHenCSM3Mik1tj4mNTUBSNNrbiGNnwXMsDYyV5exZsnqa",
  "key32": "58YsjmXEHzwKJGrxpKvEAWNim82JWn8u3RujQATW86KgzGkLvZsc2WyUAYYcuoUDLL71RvcEXDsmdctghEUJBrZh",
  "key33": "25sAkT85FaWxLQgJQUbHiqeMsViXviQU3JVottoJokD314zDFCnnqKgu9WroxH8PdK9Vb98kpm3GmsUoKfwkhKfx",
  "key34": "3anfdz4isDjYJ7aKVRAumyzGDUxJ4aS3FBNYjtd3P6hpqN6WDoy3YBZEQEKPYMHJBb9VYS1kzaB3sbTnii1WbppS",
  "key35": "4jruJGRozSyqLwwwxDNtbbZLpDGAmWFGeyaDyNtRBnJ4akbFc1wi6oqQGNu4aMsdNAdtHGxS5g2AFGkbV7T1Lf9c",
  "key36": "67bXoUgKY9ScXxbkfKaY8573VerbnzF6Cx2XMjPjQcHCxY8SADodMj6NXq3z4MkzxsQTJp3DpW3stQc5FG9zcBAg",
  "key37": "4AyJcqtTA1PBPYXfoq7wMXHmgNf8S98ys3aCeBW6s4VvMRCUE2F8gaqx15DS4z1JewCuBhTe18hrM12bbjsMAdmn",
  "key38": "5xm82Kn3u543bB8qKhcQ5FJWCTF2eTs3chBEMqZEs2Dp6TCRSzYa6XzZxEiNLhqyjqj9GLwfqbJbNnFKAkQ1PGxK"
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
