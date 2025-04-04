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
    "uhxKdGazV3WYV4rrRjwfJ4uT4G1y5NyqrcjtCHpwiT64uchTwx3VU4XTNy7hJu51ehNLEGaZJ5UUjEbgLB384Hg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3r39tPJs82yiWYavocQM3XN2oXHspmm7aTD8RQMpTiQppGueDy5Vq7pnobHw4cFXm2KCuFG6FP3neok1CaCD4x",
  "key1": "cu6NQteBeJuaogsbEfD4b5f5NGgzQgrwhiYSvH9ZzmsJXgdBNMM2QMABxgDwKcvhdXVB2WuDWthP1TV5hTr6kTh",
  "key2": "4HRYHdevAxpHYPDVgyV2fckamdroNshhYn2c58WYT7En1txCUj9ckhwfWWUGgvbfmNUs7GUtRffyGq759UpnkjLQ",
  "key3": "33NaAECvgPeCaYmAr9fHm5cDz62uuCg1Addqfpx4B5Nsb8QmoYBtxyCAo7D1C1W9LRBcKA5CsZgTNmkramqehaoL",
  "key4": "4667girq8GMBfkShm8BxQ8zgs7CQurT6h2x69FGRbpDCc2PZZ8Q1DUnhpxRKtY7dkXqSLRRBcwPLWdrfZn6UykN8",
  "key5": "PA4pPykj2keXSdh61cCHqooLzr8oxscPBDpouKPDZeUm4cZEUiN3jouVKXA5HD1aaieUoz1qe5vaM15TUijvrSC",
  "key6": "3VtfsYirGpcaf6rZrK2tREev2XGBe1ceic7iZhQKYFyPW9YqSMTQUc5XMmnenbSRpsobjkEbfTVJhbkDtZEffSKb",
  "key7": "4shayxnHRw1zYAxEfTxbdDdiEggn2Cnw9y87vduyzZHtE9fxMtBGiesy2nzxk1gqZXQeVv7GuSAzGrtGmDt1WeH6",
  "key8": "43AT9BAtN5v7CnkjqtBzVNeSFN1FX8LPThmg9gYj8vdaL7xpXFoBSDq84EkYpAdCCci1prt3ByK5BBVr5CogHRvU",
  "key9": "3KSmhgDsSFrb1XUqqHJbQzHWtmQiD9GjUW53VAhnmxcmBGRwDF22xMsdB82ijBXt8t6txg2xyBoKuRHBB2rezYwM",
  "key10": "44WkkeKRL35giwoKjDtQXxvpA3DQ3Q5E5vujwxNuZGufbJHsivNjJL6ndPmWTCoN8Fhip1YcArLx2besNguEBUVU",
  "key11": "4gXQLzUvXAAqhZdbzV3akSJNKUdnqXjxv9CHjzqjjKwiGxFE9FpbPkkakWJKsejeL52aXMqJYbY5Hmq8LmKqvS12",
  "key12": "C8knW78hPAh7cyb3FwyRsEPpqRh2xmTS65E8ATQvYNXpmFgu6CxTRoaHTELSS9cLJzAHR7EVjcRwPHDmtbUQTCt",
  "key13": "3ByhBqDPLWL5c6D2ttr1oNAsWXpGR5g1eTWzGnW6febyoLfFCcx69fbtxv91AvzNaK2JiZmZADvpnZVfuH1u2Byn",
  "key14": "JeUcGWpY7FVQP1dCRzEHBq7Bt1rgSGz2FHBT45S1C83Wu1AgXt2Pqm94qxsjnDo3mWZANcoNwdJjHa9vFWS4Psc",
  "key15": "JLUxgGLVFYedBn2LRrRVMcAr9npfB3JMpiCANoJW5h1fkR8oqFdwLTnz4u3ZRExiqMyrH14qELAxb3wBALXCnbd",
  "key16": "553g4mpAEVdm4zuiUpWcYhxCMR8HEvwpMijNU9jsAUJZ1KETwrdCRWKw48WyaZbixovJKFAQdYGGF4dQEVwdrJxh",
  "key17": "4tAnqLZD1Yz6XDL6BNdTZyyzKxyJ8QVMdTh3HrWPqVVFjJPxT3hz5vTFW6Xh5GhArbLywXHPDFzvoG42y5caSMvX",
  "key18": "5xZHthVqt4Bqpd1NJmFHmA1yT86puiUDqCJquATVjx19eBMR85upEv5mYpURRcohNZ3CJfVcZvaWju437qwBt74D",
  "key19": "2JsjgLdPhSQaDg5rSgggmFJ69xJmY2zj3fsknEtUcqtibXK9nM9o168Vx2zK3NHxbbsLJimDm1R1nPgRXX3ccG6r",
  "key20": "svVfrrk4Q5o2VCEvn6pA6ikvEZdtYhNbLaAMKbw5jLmT5r8uYApTeU1BNkRPsZZtMCLyCrBzBQsGwTHi6ri678y",
  "key21": "LWyQcSPPZBHWvgKqSoUAk5QyX8mUmgjFQjbjGKZymVRQx19oukB58A2YacBveSeViN5RNJmsponPnV8s6PLrhps",
  "key22": "24RB88g3sa6WZYDLdoXVxd61CHjJwnobzbQ6RrW4KfRTBoutvW3jTpz5RQEDBWQaavAS4jTrqaMizW83Zw6sKn9b",
  "key23": "4515x1gvycfbEwuot63L7BXzEYfZEZJ8T6RZFbf8SmeTbxhS35X5q8aQGZopByZkXrfW3p1nQQtQcb5VtKxPwZTW",
  "key24": "LNAaUDw3By3KRANhy2QES2yeLdncYy7ksjRVFKqEh2a9MPAxmaTge2ZfQ1XUYKm4VTAdhJFscCfNd9Z5iuL6yEr",
  "key25": "2WL2kQyZp6zL8BcwbjhQnzeQ95ZkG9SJ8urMrtvkxTjBQxt6Yt13aGffCKWVXLQRKvn7BsZkVEgpZj7rVchYr3td",
  "key26": "2UbKFs7Zba23HNMao3HD28USiJNuiP2FrAkbGEZ61Be9FybXRAhojp1336N9eFKb8Df88ZKy2BCgkUdQjVZPQy9L",
  "key27": "3fd1TRRTE6mZCh2Aqt9UAd1BPGaMtLgZ77dM3vLcj8a6VcfH5WLRZC6yAapUjEtPyWH57nW7Y12HMtrwhQM1a99Y",
  "key28": "45FxZaDqy9cBRbigVzSLmaoG4AXMGqBQUZtpewBFsSrdLutmH7KJmnnn2YrpmxMrDjANHprXm5Yxmdug31Ykubde",
  "key29": "3wEtbwejVNzquFfoQyqEAXcyDtvXoQddNPodTi3Qj8mJer48XwMMRFSDNA9yE76iBW5sBNGb41KRk4FzvhTbG3Xx",
  "key30": "3dSMATDFkKt5PsfVmAhGCq5CZLLuGw4pZe58bogjLnLNYZm2iCf8YgXirmHD9zn5FZVnTe2Jx1vJU9F5qdyB8q8U",
  "key31": "627ktUwTBYMrceqFfmQcstpNS6PLZuh49X3Kb3d4XKjipsvPQfcTWqsLMnqT1bsRdBE9Zgq82tpdBspJVd6QQdf",
  "key32": "WepPYUFgxSBB3fReawdpMGn8YpZgzQk7eddVGnrAQbxRkxmS5xEds9GhYLGCjwTEFbfUtyyLrfApkKjMMT9oaXh",
  "key33": "5NdVDazyPngx15fZj3T33T5KAzwaVksCtN38XfeU3fPuoaoBUFJo9qVoQwdVPvVgiyvA9ccxG2nPRuagxRNVajqy",
  "key34": "272hjxHrrSgxaLanUTpadAVWjJr8mLtBNoXoFHYnvUup9fyqRmXL9QaxHCYjaC9e7BeyPo3hf6ataErP2gSrg4bC",
  "key35": "EkskEeRz6m4zU6CwT1NpMEoW4EzPyJ8uUP7j682pMfzfQ5pZFyq4vqoKuy472htJyKRcZkJrk9x9uNzB46nhxkv",
  "key36": "5o8BkpomGgSJTUfqBf2EPSCiRMjd7AhsKEXgn8zRVVBWsQTC3UavA3NK7FN2AuaVUGoBLRfjbdoVRRGqV3uRkWRo",
  "key37": "2TcB3Ya1M6eAd7LKHEyhc4JGY5QZGCc3hrEXSnbm9DUjr8ZKHXrpSZXLudyB85nkqcWT2QLjoVfHc4gDyRvjpEEo",
  "key38": "4kdGdeLASwWrk93pboYU2ccnmQ6VfBwMQfbe5ZTg5x6HMhH5ehafVn3MEh6gcHdYq2QUPXJfriPa6eR4Lbk9eP2Z",
  "key39": "3qhygCU77RMQH5mLwLTtUQ1Mc7wXD5ioGxmWZtSKirKVw2SFJeXtirZ3xrNNoqR18GKY6urvKKHvbMUGpswTtEam",
  "key40": "2gKgnFd7kF2M5EacxnAHw9mND4qD3B6d46UxZAgYSc21yozgsiCLYqKrHHgoaZxQdQjEHGaUYV543HUPignDydJA",
  "key41": "5VF4EJFAgCXqyt42ghuVSsyrRFgH3nXGJVRKsgCaNHG4vnevmKman3aZ9bLbQrAicApPgjHVtGoxUmLFZGmy4j9S",
  "key42": "5BP95rDa6Eea4r3aUqizXHLproNhhpWZNBi9xA3i74WVJiBef54ApNHtVuhwwKMKW72fWRRvnQV2QUMEP6Whj4rg",
  "key43": "2JAqa1ZWqbGiMQQA4AmzhR7DydQq9w5tX5WJvwt7vsFoNdqqAA6Edizkef7Ui6RiTuLtzUfJGUG2FCa36kven1tP",
  "key44": "5XUqjjHGM9U9DN6Qz6gRayatb7ZiwvDxjWkVNrNJZSPn7ALELyZfwqG9NFA4uxcuKRhfTUNwAeCvpmpTgJjUY5nj",
  "key45": "4QTuYvQjRBXXhuxXfg23KFzUzvz8y65cmRto8dexxaGd8Cp1eYs2n1a1AL4doXQ7FS1Q2FCe2UJoZBjRX4UW9Ntv",
  "key46": "bPDTCjtkrn2m8b5xVTUm9iYP2iGyijWLoeVMyHb7ukQjApbz4mXrsYDrxJDrYrtQhXETVmEFELqz1hcWwSgqxVP",
  "key47": "4bHcZArBDiLPVgSQEhuBoqxTWAfoGCsusAbNepfmUYvHoX1KfDHMzhaRzhzVJKqwrUnqgHVH9ZLp8A6sPYYpK5Nz"
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
