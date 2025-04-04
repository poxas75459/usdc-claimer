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
    "3EP1FXS8mZe9QT5cN3NvSaeezbRUf3pGFq8S1fG8rnCctHNpQUWxtbiSkmkx3oXioJoZKiFw1qQHHjVzXwsTmPYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zsFziKu9zitML2HynMvsHFegAFDttrqBNdNyi8BaykSK3EdfuC7P97bbh8sZAzeAB9FRyaB59yS5doC5aJF6j9k",
  "key1": "4qNnKHNfCbF45xcCoRXvQNZLDwKDPVcZcmrNqynmVT2tvqJe8u8WFyPWXuo2wP9dk8HvywAFCGf8huvYNuKxaPM6",
  "key2": "4D4bt5WfugseFYkZK2HEuq86s3YRQkcQhpzdqYsZVuFbV1NVd4onWFUHn1b3AZ6yvPxA3z916zfPHCNDymkZqCLc",
  "key3": "2fe4i71ap2vEciMf3ZXFQAbmekJvHPRDKK1HeoPUGKCLQZCgtGYQwJMXxd7VWRvm172e1bayQZyy9roMKMjgnBJt",
  "key4": "fewPdyju6KFuKF2hFjagNHDrJoNM8ry25zvZpg52ZjJyiJQffaLXmv8gKW8oB68sHGQw6NdsbqBRZRJLH8LfnWt",
  "key5": "57HKNENFPBkbhH79ap4YxWH4TDCxR2aWtrjYzXCf1Er9s8P5ZY7XQ29vdZGQtQDqKWCsVSoydTeNy17uNKi8XL5B",
  "key6": "5RM6nFhTcQn76XfWXy5hQ7qLtNAgmKHhQrXoGEENSdbDvuMRRD6q6W7somtWUytLKV1RKChENjgYRarT1WyJUbNg",
  "key7": "5jMgy6p7s4r7UJPfSB21GH7soN3udZXYHQwkK6EzaKdESmZqRsuRax8MUCvdSQb8a4Yww1xJo8zgzy9cDWRc44qi",
  "key8": "2VFYhNUYpXpA1c2CkYzwRsHQs2af3y3aEGm57hXtGRHDxybpNnGZAEsjfH4MZigJU484hv1KzMeRBEdU8DorZW4K",
  "key9": "3k2yU3Lqc53wx6Km3pCS6Ud653x3WbVKMxAPEeb7s58RyDeFmQL4L1g2frjvAK7J2wA8z8sxFYN9Cof39vHj8r18",
  "key10": "4D41MgH2He5nEVeH54xS9xTNU4ZaMdU1BtgLwToumvz5LnB9quwHo3WJwVeTM7XfGWv896WvW2UAcFnihfmNp3ZV",
  "key11": "5yiP7iSuMsmjqwEG9Q46Wk9k1329kNm68oGiEsvyCb8dUgzAB6wjUUgYDtTFrbbVjYm3GA1hRtvPhnp837g7mGq7",
  "key12": "4TQJsbptVnKnzZGBAgRaaWaCu37iTZBRumEfG6ZB6ePvFSw9VphpqdkkVmxjH2r2vnZtDg17btDUC4M5819EB9bf",
  "key13": "5cyLQsQKjqN8GAAstaCsEKGiEUkohJN2BBimgWrd74evJWRtikBs6yUeW8REkbRcd7eyZQ8YbdG8XN1MfXm9M8Ag",
  "key14": "3CRC77V8b2Vovo6bZvjUjewAkkd8Ekzm3sAoLoMXLLL5fcrkoatU81GNzZHrcBDsVVHXVJDgguyFN4Fj8NfnkR9F",
  "key15": "4TKAuNanUWuz7VekHSMmvgoq6vCopVJ8RQjYeseoVAXaDNuZ2G18BFjvhTMq3we3NhRVzTZUr54Q955G5FpySKqP",
  "key16": "DiwV38gSsTpECfLuUfUHxfv7vUpv7rr9YYob4eQPZvsDXeS1BVUB8Vhy2kTKK3gfaTfCSSheHfKwPcCc3fVkoXR",
  "key17": "56Vv4xmrhErJc1PV8SwZ9W1ZR8xdqyrmL9HXT3a9YbtYdEtEaAfYJ6E9c186mBU5576cPKmGbE5P9hLfdWV44HSJ",
  "key18": "5py9yNJ6e1exSWsLpV58MzC86cKuyYZ4nBUhjsmxwo965rNwjW8eUPkuaqVBH5iBCwKratdrYjceyf85oNMEgqgi",
  "key19": "5nQfjKmZtCc1Ze2xeNmDk8BNGW5fN8DQdDA43d4meGevayGR3EeJH4R8yJ1qGJcQ8LVBEoK1BF9k1VWtVhQdWKV",
  "key20": "XUevhACQ9URZDEDn5SE1b4JpN693zCTxahqPM8xSGtbq6C7VUKnBH7Kann8VxWUBqVfqyQKtsYYMJVGdCZvNjVf",
  "key21": "2GJTQRvpRU5yQzuuSLCMDETAFW3WHQMh4XXP6e6n6hRu776WoazuaQU8nv6cd3A3ZD5VzoXbLSbZXhiCq1y52oY9",
  "key22": "2UtAtL2962jvae1Q9ncKA9uMwEeraHMsxeeLpNcVVCUUqXEswfo74UDoSU6yvHCWVcvuGVo3kwduzBRWjBkbsgYc",
  "key23": "7uXxKVdDmv2h9NQ5wByqyne5cwoHW84Ahy86VtQvUuR9pkSPpx3eUVnUr7TnZ1NQFjmxcnjHM91pfFGhmCy1moh",
  "key24": "4jgjhw6hAFgbLVhPBQcP2Dmd4wS9WrWEC7WZ8vgDTsza9nSCX1DiHYm3JLde2vUSkbX1nt1yNsx2zet3BqnFGttG",
  "key25": "SfEAaSyNmdTBeyZuMqoR1427RGMAfy533QN8xaZmfx6ifHxDX5QbhdyHrU5Nibj5Jx27HfUJqjNqDYiPWn5TvRk",
  "key26": "34yB1dky86vh8Yms5KNsswGp8DXKvm253gnem7SmZWNgjS3E3fBt26sCf8gyQYBSmn4wVHdoYaWDMnNFohqEbAY2",
  "key27": "5uap7PqJjgwc4nqonL3jeJLHyCmDbimJzSitkMQcudgtDWMgdz5bLw2LZXZfnp4BbfyaKcNMU52q9ziKa3RQygaR",
  "key28": "4A7P55cU4PWM3EuQt1ryADNSm4k4fAPeoH3vLJW8zzrj2gXhzrarMtwKyTPCAXFSgzZ77yeLz2KUwDR5pWkJpaC2",
  "key29": "5HCCHqDVHB58Pt1votJ8RMdLkwv6b7vV8ATNtebRoHmvXDHTCCbE3dha5cAob3wsL3X94iog6hUo174VZKf98Kh3",
  "key30": "59bJ8GVtAqSPLbZPD7qbssLx6aakJ4Yh945TrkENv6ubs5zt5xRg34JNWmQVwdGug8MZNY1VXkUZkSYtQ4vRzB9p",
  "key31": "5KRh95topvu9CBitsWc3PVHBVkZDgrR5wP96YvDm3fmrqWrARLBVWKPMUwQjqMybuoFYRN8ZYoKjcKTXGahUjzho",
  "key32": "47fxSGjT9mJvG1juLdk9yCKbJgvvbk9nuREhj82CPBpfpg6Etdej2pYkeegmT9AtCx88c837Uat5cKvzp2NsaukM",
  "key33": "4dSpDwqPrmuVtUGwGxzAcsXFHgzSyrmDfhykioe9Sgzt8uMveMxgUE77Hth86yk8wL3HQW3x12whxKkFhdaKxznd",
  "key34": "62XWrWPbU7MxJFomMweBijiM3aDCZdr9meLGYhMdQ4rvi5ZBnVkP1QEhZJQBXheNbFgU6kXPLR4WtXs91x9sqPRY",
  "key35": "4Kcq6h7XAehoAbSrr2PzBCgbuvF56hgvC2NbqtDVfZZjVvCNfs1DtKKuCE3Fz1nvHdStpvKFxNoi3z6AfWMdtRg1",
  "key36": "2aoE1UB6VPgHyKwZUtqkctcS3sTaTRaexoXbbER8wV4knXmVq7VhJt4VXXSSMWL9RdueMjE9wXn2x3tdFCsYjdeF",
  "key37": "5adM9YHu2tD8NjRs9wxd2BX4tCSGBCNur4WgBhu2FZFmYDghqAgxWH54TuVAr6kfHG57EkicPnuLfop9xTqbPvfe",
  "key38": "63cvFQ1afGheFPkkhaiFMQoG7ChTUFuCLizQDrPjGfKHyWies5sx2t3ZNnEHzHrdXQ2D8s4fCNjRQgSAGiXgECQn",
  "key39": "5LvS3WUqk4mjzKgXz3zf9Nro5yRoLXwjJonrv8K3NeRX6XR3L4K8xKNgtcJcry5xRLAxqPa2i1auTE1wGrtyo3Jn",
  "key40": "4Ykwbfw2Yvw9eGsk4TdXCN4Z8XxhEX8TeiKSW29zEm1RTq3jx64i41SSCHiZoFiPMN2cpoQV47pj2f75HmppiKmT",
  "key41": "3T1imPj7G3e3HaCkMuvTLqXBeFtxJmBfkRw5PYqDrtaquExBHXDjCYZ5MigPjfqiWbGF2aVr7jDZsYYUZaR7Ruhp",
  "key42": "2ypK7RNAknAHYUSwi7ttV6Sbh2Dao8XGS5imTgCDtsV68JeLNXDMEe5kF4NdCoa1PfyLu8MMHUNbEA6CLoztbcgL"
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
