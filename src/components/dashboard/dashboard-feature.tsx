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
    "MhVJ2zNtxL5dgXQMQcbVEcCFu5idocnqRhURgmqspnRPm9iBy7Pqxnt1Nw72u9Rjt7edVzPzZsGN6gVYFWUhuQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SdkpSanFERNA2bxNJGUTuTBAchGRezUiCLoeWwoBhtUwMGdtML7Bc8ZGog6Hkgx7N7zbvvu2u3eaEKDsThNJUtD",
  "key1": "31hcbvvGhxusbW4fCbAkNeK7ff1VeBSmfejvsUXst4XFM89UVncGdPsYfDVCjogL8ohYuAuD768j2fmUmGkxBgcP",
  "key2": "4Kag4VGEh5u5FSAa2dq35S2A22hFzfYwPLoNLve1c4EvunaYz333njmadg7VaDJviNvwhUcEf1GHrjUqHHKnLgr",
  "key3": "3qvS7DcsdHFZHTXR4DrmX5CGj1X6YT8LZTupHi1oi3uXUNvLzCC4Meiqq8SU9NDL6NsYLk1yzoHrKMfbdHZz38vg",
  "key4": "5kvwiRRKibQrFJQaHx8M6RfXnHUid1EvfR15AQbMNBC9HLbPZwAaJbKfrLiezjCF7BpFj6644EmZjC4DQBxULuj6",
  "key5": "3fiZK2ZAMdW1WqbNiys6kKUmR3hBtnzgjwQrEf9Y5DzbuYTE9v4rwJEDM4rkWy49AjvvkM5hQdV2fgwWxiSfBKJi",
  "key6": "3QF2K58VApLYQL1jyNuCPaF4q5KBio7HFzYDuU1pw5xrf4tWNuiojxwHuC8xxQz9CQXR7GPmwbdySPXF27gGybPm",
  "key7": "MPCMdQW1APmqcYDW4QKiFfbc3s5UgHMK75i13dbS2FEx5bFb1qzF3CnuAu54DJbBtTttbWvpxxPZ1Xs3kcPhi9K",
  "key8": "45uW1X6131SVgxGNZLuFo6nRd8uoVGWjCpQyzYD57GXkEdfVXRwTpYsTpNH4BqeHhFHtpV6qUvawcQC4EBqSCQpy",
  "key9": "VbxAB5nwqVwGUuTwJfVKWXoAkAAw5efHHgvFmWQbZL8GYZUDUnLSpQ4U5nyNTF4pwwfSULaSZ7vgGx4rtWrZQfV",
  "key10": "5EWuD7d8mYwQmv7kuVpGSEJgTQSjwhBjv3MaCjTLRaYPFoE6a4ARcq4unyW2n71wQWJUJNG1nmSHhnbZaemmsnj8",
  "key11": "2ZexMp8goHk3y4sPNcpCeV6FLUsZXhuB6UkcFQea3feoRqaJZ4Br3ZJPhcaRB6QFwmQqvdxJfCoW9sLodZyENMnb",
  "key12": "KVjjULG2GK6Mt5QM9q2VGxEXrr7uAhxWuNNzV4MHkgcqtCwCUPHGyeto822sXsWnKeMvEZcfxVmyEJjbtA5hbDq",
  "key13": "JDbgNBNXuScXXnhbQk96PiNHJESGGHdL6H9DZPkowJXGuAyMMM6BKUwCiSkpqKpNtL8pbgKLW1iouXzAxGHMyho",
  "key14": "4fbP5M42Wt8pThiZNATzSWjFPuJeyGdyBVQfGzPeeQ5cRecRtjCj957ejHzAnHqFpVizKpz98ufjoDGUkNCzCfhV",
  "key15": "EyJd5nvHDrF59z73n8McPERgUqUAtLxg2UA5o2UzuaN8jscsntqi6ARRMTwDF5JGD5HPkNR96wc58pARh5N8S3f",
  "key16": "25DWryVqn59gysKyg38kprRArkXV1B1pserXgVBJAr5pkKKBQRzNJmhPpKStgun58VKq3oDfk3DdeTYtXbSh4ftn",
  "key17": "5cC2VVsCBjTBuTosN9xaxKJdqtpeDeoZCEkqmNCVFqcWTiHV8Yz77FSqwZ8psefEoWjk8PKQUVCnsfvH5vNKnVUe",
  "key18": "4Y1buWVDsked4d7dZAu6SBuFqqFu6PooMSaCrHPmBVpSF4amPTEmMfeV7FfnNFzZHCCc4RG2BRmoqU3yMVf7NVui",
  "key19": "4rtxyb8yf1GFKNQfYoexGd8dGYxyTEZUwpXQuVAHWFGLG1NmzJsfcxEuyYCtnpFsXFQ7ygeu8Uh42xJGYwFAcZ6U",
  "key20": "JZJAk3Vug2WpeAjeHcMbxuWKrebJqv8uKRVikKrnSJLx6KZxkx41bf6t7Wp7QqCcqeznSk45LMUGxZn7PhMu872",
  "key21": "3CsRGpCvEcuWy32LV3riR5UUyMdsS95UTXU73Zyf6QpQd3GBLZAe5WmfiM9uEw8iVWTFgQSypZWnap8Shz9194mM",
  "key22": "2Qoo7YXfpminFL9SohGE9TV6yzcK3Yfp57Suugw7TcTZH8U9JGiKaXbBY1PAg7PMzKAhch9k28ruU1CfXuhpvjD9",
  "key23": "vcjKbY2AbcuEPnHjf1jateC2QLtjw5upRR7wFLUNqF9kK9du57ZgVyVEWAH4LHPhx9cgRdKECu5jirbMbmgGsyk",
  "key24": "pxUkBW6xGDQSmPzshePSxRV3gCCuYh3dNavZJMqWYW275826naes22zmbNZhotrLi2mePMmZUSno39d4oWpwpDV",
  "key25": "633RZ3xPAWh9sZnyHUhy6qQKcAGGuGakPTaVR7aYBt6qESoCcwv7SbU6rqXfNkRgVzQtMtLfEEroUE49srYgZVUc",
  "key26": "2Bqh4FrKwwbB1w4qhzWLv7d44fBm74x7JGWSFpUJB5UfwJMJSoxKDsmkgrH64HCJyGD36gbpR64nhbxDbZ9Rdu9i",
  "key27": "4FEZj9FWMGUC6DJ6fcaqcTMS2VDfVjFxgUSJgjvmkKHKhdFrL9JUDfxiYkrQNBisRAVCVHfyxVDdHM4XDYqZPRKn",
  "key28": "3az9k83kiPHmGjgs5X8s1BjYLo6bwe45RHXDsfdS3gBJYdnc7DAFDKfEtoGw7SkDiiBsbaVx99w4xXTXkvQmLuvn",
  "key29": "28vgDTvqn9PewarUeUbkMfoDDLwtGXYNjZ9nsLickshVT6QQCe6w8bXpBJmSiuXrjCrFj1ePEiFAz56sNd9NptKK",
  "key30": "kNPvEdtk8xcG3uuF2xbPxLrNKQ2CutBgKPHnW7pMc7kjXVCEsz37oHuBnijaZg7tQxihBhksg4txA3ywuFVWkZV",
  "key31": "3EhmZdgDn2W8F6dCFMyz8AfxHMp1xiknLh6aa3mCLdGFkFJ9euyU7wp1CtduGAvjN6czujFwWhAhZp5nn3WLmQjB",
  "key32": "5fz5YwXYGoqZ1PieFQC24fMsRLcum9gsiaRuMThJoaMGwGLwNjKuyKMwK8oLTBBmd2P2RkHcaZgjDeCJ3Sjy7Ht",
  "key33": "5bPRC8DJFSdbfsKSByiCadTy7jFSZEHs7R5CrEFkGR64gGh4y2P9YkZjxyeLAu8LFHKi4y8KpWpS8ZtkLPFCggnX"
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
